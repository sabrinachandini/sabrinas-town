"use server";

import prisma from "@/lib/prisma";

export async function submitEvent(formData: FormData) {
  const eventName = (formData.get("eventName") as string)?.trim();
  const description = (formData.get("description") as string)?.trim();
  const contactEmail = (formData.get("contactEmail") as string)?.trim();
  const eventType = formData.get("eventType") as string;

  if (!eventName || !description || !contactEmail || !eventType) {
    return { error: "Please fill in all required fields." };
  }

  const startDateRaw = formData.get("startDate") as string;
  const endDateRaw = formData.get("endDate") as string;

  await prisma.eventSubmission.create({
    data: {
      eventName,
      description,
      contactEmail,
      eventType,
      venueName: (formData.get("venueName") as string)?.trim() || null,
      websiteUrl: (formData.get("websiteUrl") as string)?.trim() || null,
      startDate: startDateRaw ? new Date(startDateRaw) : null,
      endDate: endDateRaw ? new Date(endDateRaw) : null,
      status: "pending",
    },
  });

  return { success: true };
}
