"use server";

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import {
  geocodeLocation,
  findMusterData,
  generateMusterWithClaude,
  saveMuster,
  type MusterRequest,
} from "@/lib/muster";

export async function createMuster(formData: FormData): Promise<{ error: string } | void> {
  const session = await auth();

  const request: MusterRequest = {
    startDate: formData.get("startDate") as string,
    endDate: formData.get("endDate") as string,
    startLocation: formData.get("startLocation") as string,
    endLocation: formData.get("endLocation") as string,
    interests: formData.getAll("interests") as string[],
    travelerType: (formData.get("travelerType") as MusterRequest["travelerType"]) ?? "SOLO_COUPLE",
    pace: (formData.get("pace") as MusterRequest["pace"]) ?? "BALANCED",
  };

  if (!request.startDate || !request.endDate || !request.startLocation || !request.endLocation) {
    return { error: "Missing required trip fields." };
  }

  let musterId: string;
  try {
    const [startCoords, endCoords] = await Promise.all([
      geocodeLocation(request.startLocation),
      geocodeLocation(request.endLocation),
    ]);

    const startLat = startCoords?.lat ?? 42.3;
    const startLng = startCoords?.lng ?? -71.5;
    const endLat = endCoords?.lat ?? startLat;
    const endLng = endCoords?.lng ?? startLng;

    const startDate = new Date(request.startDate + "T00:00:00");
    const endDate = new Date(request.endDate + "T23:59:59");

    const { sites, events } = await findMusterData(startLat, startLng, endLat, endLng, startDate, endDate);
    const itinerary = await generateMusterWithClaude(request, sites, events);
    musterId = await saveMuster(request, itinerary, session?.user?.id);
  } catch (e) {
    console.error("createMuster failed:", e);
    const msg = e instanceof Error ? e.message : String(e);
    return { error: `Something went wrong generating your trip. ${msg.slice(0, 120)}` };
  }

  redirect(`/muster/${musterId}`);
}

// Re-generate itinerary with same inputs, return new muster ID
export async function remuster(musterId: string): Promise<string> {
  const session = await auth();

  const existing = await prisma.muster.findUnique({
    where: { id: musterId },
    select: {
      startDate: true, endDate: true, startLocation: true, endLocation: true,
      interests: true, travelerType: true, pace: true,
    },
  });
  if (!existing) throw new Error("Muster not found");

  const request: MusterRequest = {
    startDate: existing.startDate.toISOString().split("T")[0],
    endDate: existing.endDate.toISOString().split("T")[0],
    startLocation: existing.startLocation,
    endLocation: existing.endLocation,
    interests: existing.interests,
    travelerType: existing.travelerType as MusterRequest["travelerType"],
    pace: existing.pace as MusterRequest["pace"],
  };

  const [startCoords, endCoords] = await Promise.all([
    geocodeLocation(request.startLocation),
    geocodeLocation(request.endLocation),
  ]);

  const startLat = startCoords?.lat ?? 42.3;
  const startLng = startCoords?.lng ?? -71.5;
  const endLat = endCoords?.lat ?? startLat;
  const endLng = endCoords?.lng ?? startLng;

  const startDate = new Date(request.startDate + "T00:00:00");
  const endDate = new Date(request.endDate + "T23:59:59");

  const { sites, events } = await findMusterData(startLat, startLng, endLat, endLng, startDate, endDate);
  const itinerary = await generateMusterWithClaude(request, sites, events);
  return saveMuster(request, itinerary, session?.user?.id);
}
