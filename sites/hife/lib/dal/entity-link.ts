"use server";

import prisma from "@/lib/prisma";
import { requireNetworkScope } from "@/lib/scope";
import type { Scope } from "@/lib/scope";
import type { EntityType, LinkType, EntityLinkStatus } from "@prisma/client";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CreateEntityLinkInput {
  fromId: string;
  fromType: EntityType;
  toId: string;
  toType: EntityType;
  linkType: LinkType;
  label?: string;
  sourceId?: string;
}

// ─── Invariant enforcement ────────────────────────────────────────────────────

function assertLinkValid(input: CreateEntityLinkInput) {
  if (input.linkType === "RELATED_TO" && !input.label?.trim()) {
    throw new Error(
      "EntityLink with linkType RELATED_TO requires a non-empty label",
    );
  }
}

// ─── Write operations (staff only) ───────────────────────────────────────────

export async function createEntityLink(
  scope: Scope,
  input: CreateEntityLinkInput,
) {
  requireNetworkScope(scope);
  assertLinkValid(input);

  return prisma.entityLink.create({
    data: {
      fromId: input.fromId,
      fromType: input.fromType,
      toId: input.toId,
      toType: input.toType,
      linkType: input.linkType,
      label: input.label?.trim() || null,
      sourceId: input.sourceId,
      status: "NEEDS_REVIEW",
    },
  });
}

export async function upsertEntityLink(
  scope: Scope,
  input: CreateEntityLinkInput,
) {
  requireNetworkScope(scope);
  assertLinkValid(input);

  return prisma.entityLink.upsert({
    where: {
      fromId_fromType_toId_toType_linkType: {
        fromId: input.fromId,
        fromType: input.fromType,
        toId: input.toId,
        toType: input.toType,
        linkType: input.linkType,
      },
    },
    update: {
      label: input.label?.trim() || null,
      sourceId: input.sourceId,
    },
    create: {
      fromId: input.fromId,
      fromType: input.fromType,
      toId: input.toId,
      toType: input.toType,
      linkType: input.linkType,
      label: input.label?.trim() || null,
      sourceId: input.sourceId,
      status: "NEEDS_REVIEW",
    },
  });
}

export async function publishEntityLink(scope: Scope, id: string) {
  requireNetworkScope(scope);
  return prisma.entityLink.update({
    where: { id },
    data: { status: "PUBLISHED" },
  });
}

// "Deletions are demotions" — unpublish rather than destroy.
export async function demoteEntityLink(scope: Scope, id: string) {
  requireNetworkScope(scope);
  return prisma.entityLink.update({
    where: { id },
    data: { status: "NEEDS_REVIEW" },
  });
}

// Hard-delete is staff-only and explicit.
export async function deleteEntityLink(scope: Scope, id: string) {
  requireNetworkScope(scope);
  return prisma.entityLink.delete({ where: { id } });
}

// ─── Read operations ──────────────────────────────────────────────────────────

export async function listEntityLinks(
  scope: Scope,
  filter: {
    fromId?: string;
    fromType?: EntityType;
    toId?: string;
    toType?: EntityType;
    linkType?: LinkType;
    status?: EntityLinkStatus;
  } = {},
) {
  if (!scope) throw new Error("unauthenticated");

  return prisma.entityLink.findMany({
    where: {
      ...(filter.fromId ? { fromId: filter.fromId } : {}),
      ...(filter.fromType ? { fromType: filter.fromType } : {}),
      ...(filter.toId ? { toId: filter.toId } : {}),
      ...(filter.toType ? { toType: filter.toType } : {}),
      ...(filter.linkType ? { linkType: filter.linkType } : {}),
      ...(filter.status ? { status: filter.status } : {}),
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function getEntityLinksForEntity(
  scope: Scope,
  entityId: string,
  entityType: EntityType,
  statusFilter: EntityLinkStatus = "PUBLISHED",
) {
  if (!scope) throw new Error("unauthenticated");

  return prisma.entityLink.findMany({
    where: {
      status: statusFilter,
      OR: [
        { fromId: entityId, fromType: entityType },
        { toId: entityId, toType: entityType },
      ],
    },
    orderBy: { linkType: "asc" },
  });
}
