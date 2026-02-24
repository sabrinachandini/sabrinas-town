// MODEL: Claude Sonnet
// UpdateDelta service for agentic update management

import { Prisma } from '@prisma/client';
import prisma from '../db/client.js';
import {
  requiresHumanReview,
  generateReviewQuestions,
  SENSITIVE_FIELDS,
} from '../config/sources.js';
import { computeTownScore } from './scoring.js';
import type { CreateUpdateDelta, ApplyUpdateDelta } from '../validators/admin.js';

/**
 * Create a new UpdateDelta from detected changes
 */
export async function createUpdateDelta(
  data: CreateUpdateDelta
): Promise<{ id: string; requiresHumanReview: boolean }> {
  // Determine if human review is required
  const fieldsAffected = data.extracted.fieldChanges.map((fc) => fc.field);

  // Get source tier if source provided
  let sourceTier: 'TIER1' | 'TIER2' | 'TIER3' | 'TODO' = 'TODO';
  if (data.sourceId) {
    const source = await prisma.source.findUnique({
      where: { id: data.sourceId },
      select: { credibilityTier: true },
    });
    if (source) {
      sourceTier = source.credibilityTier;
    }
  }

  const needsReview = requiresHumanReview(
    sourceTier,
    data.significanceScore,
    fieldsAffected
  );

  const questions = needsReview
    ? generateReviewQuestions(fieldsAffected, data.significanceScore, sourceTier)
    : [];

  const delta = await prisma.updateDelta.create({
    data: {
      townId: data.townId,
      sourceId: data.sourceId,
      rawPayload: data.rawPayload as Prisma.InputJsonValue,
      extracted: data.extracted as unknown as Prisma.InputJsonValue,
      significanceScore: data.significanceScore,
      requiresHumanReview: needsReview,
      questions: [...questions, ...(data.questions || [])],
      status: 'PENDING',
    },
  });

  return {
    id: delta.id,
    requiresHumanReview: needsReview,
  };
}

/**
 * Apply an UpdateDelta, making the actual changes
 */
export async function applyUpdateDelta(
  deltaId: string,
  options: ApplyUpdateDelta,
  adminId: string
): Promise<{
  success: boolean;
  changeLogId: string;
  scoreChanged: boolean;
  newScore?: number;
}> {
  const delta = await prisma.updateDelta.findUnique({
    where: { id: deltaId },
    include: { town: true },
  });

  if (!delta) {
    throw new Error(`UpdateDelta not found: ${deltaId}`);
  }

  if (delta.status !== 'PENDING') {
    throw new Error(`UpdateDelta is not pending: ${delta.status}`);
  }

  const extracted = delta.extracted as {
    fieldChanges: Array<{ field: string; oldValue?: unknown; newValue: unknown }>;
    newEntities?: Array<{ type: string; data: Record<string, unknown> }>;
    summary: string;
  };

  // Apply modifications if provided
  const fieldChanges = options.modifications?.fieldChanges
    ? extracted.fieldChanges.map((fc) => {
        const mod = options.modifications?.fieldChanges?.find(
          (m) => m.field === fc.field
        );
        if (mod) {
          return mod.approved ? { ...fc, newValue: mod.newValue } : null;
        }
        return fc;
      }).filter(Boolean)
    : extracted.fieldChanges;

  // Store previous values for rollback
  const previousValues: Record<string, unknown> = {};
  const newValues: Record<string, unknown> = {};

  // Apply field changes to town
  const townUpdates: Record<string, unknown> = {};

  for (const change of fieldChanges) {
    if (!change) continue;

    const { field, newValue } = change;

    // Handle nested fields (e.g., tourismInfo.hours)
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      if (parent === 'tourismInfo') {
        const currentTourismInfo = (delta.town.tourismInfo as Record<string, unknown>) || {};
        previousValues[field] = currentTourismInfo[child];
        townUpdates.tourismInfo = {
          ...currentTourismInfo,
          [child]: newValue,
        };
        newValues[field] = newValue;
      }
    } else {
      // Direct town field
      previousValues[field] = (delta.town as Record<string, unknown>)[field];
      townUpdates[field] = newValue;
      newValues[field] = newValue;
    }
  }

  // Update town if there are changes
  if (Object.keys(townUpdates).length > 0) {
    townUpdates.lastUpdatedAt = new Date();
    await prisma.town.update({
      where: { id: delta.townId },
      data: townUpdates,
    });
  }

  // Create new entities if specified
  if (extracted.newEntities) {
    for (const entity of extracted.newEntities) {
      await createEntity(entity.type, entity.data, delta.townId);
    }
  }

  // Create changelog entry
  const changeLog = await prisma.changeLogEntry.create({
    data: {
      townId: delta.townId,
      updateDeltaId: deltaId,
      summary: extracted.summary,
      details: {
        fieldsChanged: Object.keys(newValues),
        previousValues: previousValues as Prisma.InputJsonValue,
        newValues: newValues as Prisma.InputJsonValue,
        entitiesCreated: extracted.newEntities?.length || 0,
      } as Prisma.InputJsonValue,
      publicNotes: options.publicNotes,
    },
  });

  // Update delta status
  await prisma.updateDelta.update({
    where: { id: deltaId },
    data: {
      status: 'APPLIED',
      appliedAt: new Date(),
      appliedBy: adminId,
    },
  });

  // Recompute score if significant fields changed
  const scoreAffectingFields = ['significanceWeight', 'verificationStatus', 'credibilityTier'];
  const needsScoreRecompute =
    Object.keys(newValues).some((f) => scoreAffectingFields.includes(f)) ||
    (extracted.newEntities?.length ?? 0) > 0;

  let newScore: number | undefined;
  if (needsScoreRecompute) {
    const result = await computeTownScore(delta.townId);
    newScore = result.compositeScore;
  }

  return {
    success: true,
    changeLogId: changeLog.id,
    scoreChanged: needsScoreRecompute,
    newScore,
  };
}

/**
 * Rollback an applied UpdateDelta
 */
export async function rollbackUpdateDelta(
  deltaId: string,
  reason: string,
  adminId: string
): Promise<{ success: boolean }> {
  const delta = await prisma.updateDelta.findUnique({
    where: { id: deltaId },
    include: {
      changeLogEntry: true,
      town: true,
    },
  });

  if (!delta) {
    throw new Error(`UpdateDelta not found: ${deltaId}`);
  }

  if (delta.status !== 'APPLIED') {
    throw new Error(`UpdateDelta is not applied: ${delta.status}`);
  }

  if (!delta.changeLogEntry) {
    throw new Error('No changelog entry found for this delta');
  }

  const details = delta.changeLogEntry.details as {
    previousValues: Record<string, unknown>;
    fieldsChanged: string[];
  };

  // Restore previous values
  const townUpdates: Record<string, unknown> = {};

  for (const field of details.fieldsChanged) {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      if (parent === 'tourismInfo') {
        const currentTourismInfo = (delta.town.tourismInfo as Record<string, unknown>) || {};
        townUpdates.tourismInfo = {
          ...currentTourismInfo,
          [child]: details.previousValues[field],
        };
      }
    } else {
      townUpdates[field] = details.previousValues[field];
    }
  }

  if (Object.keys(townUpdates).length > 0) {
    townUpdates.lastUpdatedAt = new Date();
    await prisma.town.update({
      where: { id: delta.townId },
      data: townUpdates,
    });
  }

  // Update delta status
  await prisma.updateDelta.update({
    where: { id: deltaId },
    data: {
      status: 'ROLLED_BACK',
      rollbackReason: reason,
    },
  });

  // Add rollback note to changelog
  await prisma.changeLogEntry.update({
    where: { id: delta.changeLogEntry.id },
    data: {
      publicNotes: `ROLLED BACK: ${reason}\n\nOriginal: ${delta.changeLogEntry.publicNotes || delta.changeLogEntry.summary}`,
    },
  });

  // Recompute score
  await computeTownScore(delta.townId);

  return { success: true };
}

/**
 * List pending UpdateDeltas
 */
export async function listUpdateDeltas(options: {
  status?: string;
  townId?: string;
  minSignificance?: number;
  requiresReview?: boolean;
  limit?: number;
  offset?: number;
}) {
  const {
    status,
    townId,
    minSignificance,
    requiresReview,
    limit = 20,
    offset = 0,
  } = options;

  const where = {
    ...(status && { status: status as 'PENDING' | 'APPLIED' | 'REJECTED' | 'ROLLED_BACK' }),
    ...(townId && { townId }),
    ...(minSignificance !== undefined && { significanceScore: { gte: minSignificance } }),
    ...(requiresReview !== undefined && { requiresHumanReview: requiresReview }),
  };

  const [deltas, total] = await Promise.all([
    prisma.updateDelta.findMany({
      where,
      include: {
        town: { select: { name: true } },
        source: { select: { id: true, title: true, credibilityTier: true } },
      },
      orderBy: { detectedAt: 'desc' },
      take: limit,
      skip: offset,
    }),
    prisma.updateDelta.count({ where }),
  ]);

  return {
    deltas: deltas.map((d) => ({
      id: d.id,
      townId: d.townId,
      townName: d.town.name,
      detectedAt: d.detectedAt.toISOString(),
      source: d.source
        ? {
            id: d.source.id,
            title: d.source.title,
            credibilityTier: d.source.credibilityTier,
          }
        : null,
      extracted: d.extracted,
      significanceScore: d.significanceScore,
      requiresHumanReview: d.requiresHumanReview,
      questions: d.questions,
      status: d.status,
      appliedAt: d.appliedAt?.toISOString() ?? null,
      appliedBy: d.appliedBy,
    })),
    total,
    limit,
    offset,
  };
}

/**
 * Helper to create new entities during delta application
 */
async function createEntity(
  type: string,
  data: Record<string, unknown>,
  townId: string
): Promise<void> {
  switch (type) {
    case 'source':
      await prisma.source.create({
        data: {
          type: (data.type as 'PRIMARY' | 'SECONDARY' | 'TERTIARY' | 'DATASET' | 'INSTITUTIONAL' | 'NEWS') || 'SECONDARY',
          title: data.title as string,
          publisherOrHolder: data.publisherOrHolder as string,
          url: data.url as string | undefined,
          credibilityTier: 'TODO',
          sourceTowns: {
            create: { townId },
          },
        },
      });
      break;

    case 'event':
      await prisma.event.create({
        data: {
          id: data.id as string,
          townId,
          name: data.name as string,
          summary: data.summary as string,
          significanceWeight: (data.significanceWeight as number) || 50,
          datePrecision: 'UNKNOWN',
        },
      });
      break;

    // Add more entity types as needed
    default:
      console.warn(`Unknown entity type: ${type}`);
  }
}
