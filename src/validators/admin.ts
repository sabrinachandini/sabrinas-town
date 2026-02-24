// MODEL: Claude Sonnet
// Zod schemas for Admin-related requests (UpdateDelta, scoring, etc.)

import { z } from 'zod';
import { UpdateDeltaStatusSchema, CredibilityTierSchema, TownIdSchema } from './common.js';

// POST /admin/update-deltas - Create new update delta
export const CreateUpdateDeltaSchema = z.object({
  townId: TownIdSchema,
  sourceId: z.string().optional(),
  rawPayload: z.record(z.unknown()), // Original data from source
  extracted: z.object({
    fieldChanges: z.array(
      z.object({
        field: z.string(),
        oldValue: z.unknown().optional(),
        newValue: z.unknown(),
        confidence: z.number().min(0).max(100).optional(),
      })
    ),
    newEntities: z
      .array(
        z.object({
          type: z.enum(['event', 'person', 'source', 'story']),
          data: z.record(z.unknown()),
        })
      )
      .optional(),
    summary: z.string(),
  }),
  significanceScore: z.number().min(0).max(100).default(50),
  questions: z.array(z.string()).optional(),
});

// POST /admin/update-deltas/:id/apply
export const ApplyUpdateDeltaSchema = z.object({
  adminNotes: z.string().optional(),
  publicNotes: z.string().optional(),
  modifications: z
    .object({
      // Allow admin to modify extracted changes before applying
      fieldChanges: z
        .array(
          z.object({
            field: z.string(),
            newValue: z.unknown(),
            approved: z.boolean().default(true),
          })
        )
        .optional(),
    })
    .optional(),
});

// POST /admin/update-deltas/:id/rollback
export const RollbackUpdateDeltaSchema = z.object({
  reason: z.string().min(10, 'Rollback reason must be at least 10 characters'),
});

// POST /admin/recompute-scores
export const RecomputeScoresSchema = z.object({
  townId: TownIdSchema.optional(), // If not provided, recomputes all
  forceSnapshot: z.boolean().default(false), // Create snapshot even if score unchanged
});

// Response for update delta
export const UpdateDeltaResponseSchema = z.object({
  id: z.string(),
  townId: z.string(),
  townName: z.string(),
  detectedAt: z.string().datetime(),
  source: z
    .object({
      id: z.string(),
      title: z.string(),
      credibilityTier: CredibilityTierSchema,
    })
    .nullable(),
  extracted: z.record(z.unknown()),
  significanceScore: z.number(),
  requiresHumanReview: z.boolean(),
  questions: z.array(z.string()),
  status: UpdateDeltaStatusSchema,
  appliedAt: z.string().datetime().nullable(),
  appliedBy: z.string().nullable(),
});

// Response for score recomputation
export const ScoreRecomputeResultSchema = z.object({
  townId: z.string(),
  previousScore: z.number(),
  newScore: z.number(),
  scoreDelta: z.number(),
  snapshotId: z.string().nullable(),
  breakdown: z.record(z.unknown()),
});

// List pending update deltas
export const ListUpdateDeltasQuerySchema = z.object({
  status: UpdateDeltaStatusSchema.optional(),
  townId: z.string().optional(),
  minSignificance: z.coerce.number().min(0).max(100).optional(),
  requiresReview: z.coerce.boolean().optional(),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
});

export type CreateUpdateDelta = z.infer<typeof CreateUpdateDeltaSchema>;
export type ApplyUpdateDelta = z.infer<typeof ApplyUpdateDeltaSchema>;
export type RollbackUpdateDelta = z.infer<typeof RollbackUpdateDeltaSchema>;
export type RecomputeScores = z.infer<typeof RecomputeScoresSchema>;
export type UpdateDeltaResponse = z.infer<typeof UpdateDeltaResponseSchema>;
export type ScoreRecomputeResult = z.infer<typeof ScoreRecomputeResultSchema>;
export type ListUpdateDeltasQuery = z.infer<typeof ListUpdateDeltasQuerySchema>;
