"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { resolveScope, requireNetworkScope } from "@/lib/scope";
import { logAuditEvent } from "@/lib/dal/audit";
import prisma from "@/lib/prisma";
import type { PartnerAccountStatus } from "@prisma/client";

export async function updateStatus(accountId: string, status: PartnerAccountStatus) {
  const session = await auth();
  const scope = await resolveScope(session);
  requireNetworkScope(scope);

  await prisma.partnerAccount.update({ where: { id: accountId }, data: { status } });

  await logAuditEvent({
    actorId: session!.user!.id!,
    actorEmail: session!.user!.email ?? undefined,
    action: status === "ACTIVE" ? "APPROVED"
      : status === "SUSPENDED" ? "UNPUBLISHED"
      : "UPDATED",
    entityType: "PartnerAccount",
    entityId: accountId,
    partnerAccountId: accountId,
  });

  revalidatePath(`/admin/partners/${accountId}`);
  revalidatePath("/admin/partners");
}
