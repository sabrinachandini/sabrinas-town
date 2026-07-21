"use server";

import prisma from "@/lib/prisma";
import { requireNetworkScope, requireTownScope } from "@/lib/scope";
import type { Scope } from "@/lib/scope";
import type {
  SuggestionEntityType,
  SuggestionStatus,
} from "@prisma/client";
import type { Prisma } from "@prisma/client";

export async function listSuggestions(
  scope: Scope,
  filter?: { status?: SuggestionStatus; entityType?: SuggestionEntityType },
) {
  if (!scope) throw new Error("unauthenticated");

  const where = {
    ...(filter?.status ? { status: filter.status } : {}),
    ...(filter?.entityType ? { entityType: filter.entityType } : {}),
    // Partners may only see their own account's suggestions
    ...(scope.type === "town" ? { partnerAccountId: scope.partnerAccountId } : {}),
  };

  return prisma.suggestion.findMany({
    where,
    include: {
      submittedBy: { select: { id: true, email: true, name: true } },
      partnerAccount: { select: { id: true, name: true, townId: true } },
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function getSuggestion(scope: Scope, id: string) {
  if (!scope) throw new Error("unauthenticated");

  const suggestion = await prisma.suggestion.findUnique({ where: { id } });
  if (!suggestion) return null;

  if (scope.type === "town") {
    // Enforce tenant isolation — partner can only read their own suggestions
    if (suggestion.partnerAccountId !== scope.partnerAccountId) {
      throw new Error("town scope required or townId mismatch");
    }
  }

  return suggestion;
}

export async function createSuggestion(
  scope: Scope,
  data: {
    entityType: SuggestionEntityType;
    entityId?: string;
    payload: Record<string, unknown>;
    note?: string;
  },
) {
  if (!scope) throw new Error("unauthenticated");

  let partnerAccountId: string;
  let submittedById: string;

  if (scope.type === "town") {
    partnerAccountId = scope.partnerAccountId;
    // submittedById resolved from session — callers pass userId
    throw new Error("use createSuggestionAsPartner for town-scoped submissions");
  }

  requireNetworkScope(scope);
  throw new Error("staff should use createSuggestionAsStaff");
}

export async function createSuggestionAsPartner(
  scope: Scope,
  userId: string,
  data: {
    entityType: SuggestionEntityType;
    entityId?: string;
    payload: Record<string, unknown>;
    note?: string;
  },
) {
  if (scope?.type !== "town") throw new Error("town scope required");

  return prisma.suggestion.create({
    data: {
      partnerAccountId: scope.partnerAccountId,
      submittedById: userId,
      entityType: data.entityType,
      entityId: data.entityId,
      payload: data.payload as Prisma.InputJsonValue,
      note: data.note,
    },
  });
}

export async function reviewSuggestion(
  scope: Scope,
  id: string,
  decision: { status: "ACCEPTED" | "REJECTED"; reviewNote?: string; reviewedById: string },
) {
  requireNetworkScope(scope);
  return prisma.suggestion.update({
    where: { id },
    data: {
      status: decision.status,
      reviewNote: decision.reviewNote,
      reviewedById: decision.reviewedById,
      reviewedAt: new Date(),
    },
  });
}
