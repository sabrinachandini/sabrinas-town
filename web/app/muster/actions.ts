"use server";

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import {
  geocodeLocation,
  findMusterData,
  generateMusterWithClaude,
  saveMuster,
  type MusterRequest,
} from "@/lib/muster";

export async function createMuster(formData: FormData) {
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

  // Basic validation
  if (!request.startDate || !request.endDate || !request.startLocation || !request.endLocation) {
    throw new Error("Missing required trip fields");
  }

  // Geocode start and end locations
  const [startCoords, endCoords] = await Promise.all([
    geocodeLocation(request.startLocation),
    geocodeLocation(request.endLocation),
  ]);

  // Fall back to center of New England if geocoding fails
  const startLat = startCoords?.lat ?? 42.3;
  const startLng = startCoords?.lng ?? -71.5;
  const endLat = endCoords?.lat ?? startLat;
  const endLng = endCoords?.lng ?? startLng;

  const startDate = new Date(request.startDate + "T00:00:00");
  const endDate = new Date(request.endDate + "T23:59:59");

  // Find relevant sites and events
  const { sites, events } = await findMusterData(
    startLat, startLng, endLat, endLng,
    startDate, endDate
  );

  // Generate itinerary with Claude
  const itinerary = await generateMusterWithClaude(request, sites, events);

  // Save to DB
  const musterId = await saveMuster(request, itinerary, session?.user?.id);

  redirect(`/muster/${musterId}`);
}
