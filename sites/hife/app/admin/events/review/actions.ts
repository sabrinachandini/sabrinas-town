"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function approveEvent(eventId: string) {
  await prisma.localEvent.update({
    where: { id: eventId },
    data: { published: true, needsReview: false, confidence: "verified" },
  });
  revalidatePath("/admin/events/review");
}

export async function rejectEvent(eventId: string) {
  await prisma.localEvent.delete({ where: { id: eventId } });
  revalidatePath("/admin/events/review");
}

export async function promoteSource(sourceId: string) {
  await prisma.eventSource.update({
    where: { id: sourceId },
    data: { trustLevel: "auto_publish" },
  });
  // Auto-publish any existing review-queue events from this source
  await prisma.localEvent.updateMany({
    where: { sourceId, needsReview: true, published: false },
    data: { published: true, needsReview: false, confidence: "verified" },
  });
  revalidatePath("/admin/events/review");
}
