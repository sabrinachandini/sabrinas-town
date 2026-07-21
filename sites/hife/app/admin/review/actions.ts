"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { resolveScope } from "@/lib/scope";
import { requireNetworkScope } from "@/lib/scope";
import { logAuditEvent } from "@/lib/dal/audit";
import prisma from "@/lib/prisma";
import Anthropic from "@anthropic-ai/sdk";

async function getStaffScope() {
  const session = await auth();
  const scope = await resolveScope(session);
  requireNetworkScope(scope);
  return { scope, session };
}

// ─── Local Event ─────────────────────────────────────────────────────────────

export async function approveLocalEvent(id: string) {
  const { session } = await getStaffScope();
  await prisma.localEvent.update({
    where: { id },
    data: { needsReview: false, published: true },
  });
  await logAuditEvent({
    actorId: session?.user?.id,
    actorEmail: session?.user?.email,
    action: "APPROVED",
    entityType: "LocalEvent",
    entityId: id,
  });
  revalidatePath("/admin/review");
}

export async function rejectLocalEvent(id: string) {
  const { session } = await getStaffScope();
  await prisma.localEvent.update({
    where: { id },
    data: { needsReview: false, published: false },
  });
  await logAuditEvent({
    actorId: session?.user?.id,
    actorEmail: session?.user?.email,
    action: "REJECTED",
    entityType: "LocalEvent",
    entityId: id,
  });
  revalidatePath("/admin/review");
}

// ─── Place ───────────────────────────────────────────────────────────────────

export async function approvePlace(id: string) {
  const { session } = await getStaffScope();
  await prisma.place.update({ where: { id }, data: { needsReview: false } });
  await logAuditEvent({
    actorId: session?.user?.id, actorEmail: session?.user?.email,
    action: "APPROVED", entityType: "Place", entityId: id,
  });
  revalidatePath("/admin/review");
}

export async function rejectPlace(id: string) {
  const { session } = await getStaffScope();
  await prisma.place.update({ where: { id }, data: { needsReview: false } });
  await logAuditEvent({
    actorId: session?.user?.id, actorEmail: session?.user?.email,
    action: "REJECTED", entityType: "Place", entityId: id,
  });
  revalidatePath("/admin/review");
}

// ─── Person ──────────────────────────────────────────────────────────────────

export async function approvePerson(id: string) {
  const { session } = await getStaffScope();
  await prisma.person.update({ where: { id }, data: { needsReview: false } });
  await logAuditEvent({
    actorId: session?.user?.id, actorEmail: session?.user?.email,
    action: "APPROVED", entityType: "Person", entityId: id,
  });
  revalidatePath("/admin/review");
}

export async function rejectPerson(id: string) {
  const { session } = await getStaffScope();
  await prisma.person.update({ where: { id }, data: { needsReview: false } });
  await logAuditEvent({
    actorId: session?.user?.id, actorEmail: session?.user?.email,
    action: "REJECTED", entityType: "Person", entityId: id,
  });
  revalidatePath("/admin/review");
}

// ─── EntityLink ──────────────────────────────────────────────────────────────

export async function publishEntityLinkAction(id: string) {
  const { session } = await getStaffScope();
  await prisma.entityLink.update({ where: { id }, data: { status: "PUBLISHED" } });
  await logAuditEvent({
    actorId: session?.user?.id, actorEmail: session?.user?.email,
    action: "PUBLISHED", entityType: "EntityLink", entityId: id,
  });
  revalidatePath("/admin/review");
}

export async function demoteEntityLinkAction(id: string) {
  const { session } = await getStaffScope();
  await prisma.entityLink.update({ where: { id }, data: { status: "NEEDS_REVIEW" } });
  await logAuditEvent({
    actorId: session?.user?.id, actorEmail: session?.user?.email,
    action: "UNPUBLISHED", entityType: "EntityLink", entityId: id,
  });
  revalidatePath("/admin/review");
}

// ─── Partner Suggestion ──────────────────────────────────────────────────────

export async function approveSuggestion(id: string) {
  const { session } = await getStaffScope();
  await prisma.suggestion.update({
    where: { id },
    data: { status: "ACCEPTED", reviewedById: session?.user?.id, reviewedAt: new Date() },
  });
  await logAuditEvent({
    actorId: session?.user?.id, actorEmail: session?.user?.email,
    action: "APPROVED", entityType: "Suggestion", entityId: id,
  });
  revalidatePath("/admin/review");
}

export async function rejectSuggestion(id: string) {
  const { session } = await getStaffScope();
  await prisma.suggestion.update({
    where: { id },
    data: { status: "REJECTED", reviewedById: session?.user?.id, reviewedAt: new Date() },
  });
  await logAuditEvent({
    actorId: session?.user?.id, actorEmail: session?.user?.email,
    action: "REJECTED", entityType: "Suggestion", entityId: id,
  });
  revalidatePath("/admin/review");
}

// ─── AI Ratification ─────────────────────────────────────────────────────────

export async function ratifyWithAI(
  entityType: string,
  entityId: string,
  entityData: string,
): Promise<{ ratify: boolean; confidence: "HIGH" | "MEDIUM" | "LOW"; reason: string }> {
  await getStaffScope();

  const client = new Anthropic();

  const message = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 300,
    messages: [
      {
        role: "user",
        content: `You are reviewing a "${entityType}" record for the HIFE (History Is For Everyone) American Revolution tourism network.

Evaluate whether this record should be RATIFIED (approved for public display) or flagged for human review.

Criteria:
- Content is historically accurate and professionally written
- No obvious errors, spam, or inappropriate content
- Factual claims are specific enough to be verifiable
- Suitable for a history education / tourism audience

Entity data:
${entityData}

Respond with JSON only, no explanation outside the JSON:
{"ratify": true|false, "confidence": "HIGH"|"MEDIUM"|"LOW", "reason": "one sentence"}`,
      },
    ],
  });

  const text = message.content[0].type === "text" ? message.content[0].text : "";

  try {
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("no JSON in response");
    const parsed = JSON.parse(jsonMatch[0]);
    return {
      ratify: Boolean(parsed.ratify),
      confidence: parsed.confidence ?? "LOW",
      reason: parsed.reason ?? "No reason provided",
    };
  } catch {
    return { ratify: false, confidence: "LOW", reason: "AI response could not be parsed" };
  }
}
