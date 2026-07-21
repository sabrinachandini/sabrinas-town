"use server";

import prisma from "@/lib/prisma";
import { requireNetworkScope } from "@/lib/scope";
import type { Scope } from "@/lib/scope";
import type { AuditAction } from "@prisma/client";
import type { Prisma } from "@prisma/client";

export async function logAuditEvent(data: {
  actorId?: string;
  actorEmail?: string;
  partnerAccountId?: string;
  action: AuditAction;
  entityType: string;
  entityId?: string;
  metadata?: Record<string, unknown>;
}) {
  // Fire-and-forget — never let audit failures surface to callers
  return prisma.auditEvent
    .create({
      data: {
        actorId: data.actorId,
        actorEmail: data.actorEmail,
        action: data.action,
        entityType: data.entityType,
        entityId: data.entityId,
        metadata: data.metadata as Prisma.InputJsonValue | undefined,
        ...(data.partnerAccountId
          ? { partnerAccount: { connect: { id: data.partnerAccountId } } }
          : {}),
      },
    })
    .catch(() => null);
}

export async function listAuditEvents(
  scope: Scope,
  filter?: { partnerAccountId?: string; limit?: number },
) {
  requireNetworkScope(scope);

  return prisma.auditEvent.findMany({
    where: filter?.partnerAccountId
      ? { partnerAccountId: filter.partnerAccountId }
      : undefined,
    orderBy: { createdAt: "desc" },
    take: filter?.limit ?? 200,
  });
}
