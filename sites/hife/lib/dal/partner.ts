"use server";

import prisma from "@/lib/prisma";
import { requireNetworkScope, requireTownScope } from "@/lib/scope";
import type { Scope } from "@/lib/scope";
import type { PartnerAccountStatus, MemberRole } from "@prisma/client";

// ─── PartnerAccount ──────────────────────────────────────────────────────────

export async function getPartnerAccount(scope: Scope, townId?: string) {
  if (!scope) throw new Error("unauthenticated");

  if (scope.type === "network") {
    // Staff can fetch any account by townId
    if (!townId) throw new Error("townId required for network scope");
    return prisma.partnerAccount.findUnique({
      where: { townId },
      include: { memberships: { include: { user: { select: { id: true, email: true, name: true } } } } },
    });
  }

  // Partner — can only read their own account
  requireTownScope(scope, scope.townId);
  return prisma.partnerAccount.findUnique({
    where: { id: scope.partnerAccountId },
    include: { memberships: { include: { user: { select: { id: true, email: true, name: true } } } } },
  });
}

export async function listPartnerAccounts(
  scope: Scope,
  filter?: { status?: PartnerAccountStatus },
) {
  requireNetworkScope(scope);
  return prisma.partnerAccount.findMany({
    where: filter?.status ? { status: filter.status } : undefined,
    include: { town: { select: { id: true, name: true, slug: true } } },
    orderBy: { createdAt: "desc" },
  });
}

export async function createPartnerAccount(
  scope: Scope,
  data: { townId: string; name: string; contactEmail?: string },
) {
  requireNetworkScope(scope);
  return prisma.partnerAccount.create({ data });
}

export async function updatePartnerAccountStatus(
  scope: Scope,
  partnerAccountId: string,
  status: PartnerAccountStatus,
) {
  requireNetworkScope(scope);
  return prisma.partnerAccount.update({
    where: { id: partnerAccountId },
    data: { status },
  });
}

// ─── Membership ──────────────────────────────────────────────────────────────

export async function addMember(
  scope: Scope,
  partnerAccountId: string,
  userId: string,
  role: MemberRole = "VIEWER",
) {
  requireNetworkScope(scope);
  return prisma.membership.create({
    data: { partnerAccountId, userId, role },
  });
}

export async function removeMember(
  scope: Scope,
  partnerAccountId: string,
  userId: string,
) {
  requireNetworkScope(scope);
  return prisma.membership.delete({
    where: { partnerAccountId_userId: { partnerAccountId, userId } },
  });
}
