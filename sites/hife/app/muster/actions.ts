"use server";

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import {
  geocodeLocation,
  findMusterData,
  generateMusterWithClaude,
  saveMuster,
  getMuster,
  type MusterRequest,
} from "@/lib/muster";

export async function createMuster(formData: FormData): Promise<{ error: string } | void> {
  const session = await auth();

  const rawBusCapacity = formData.get("busCapacity");
  const request: MusterRequest = {
    startDate: formData.get("startDate") as string,
    endDate: formData.get("endDate") as string,
    startLocation: formData.get("startLocation") as string,
    endLocation: formData.get("endLocation") as string,
    interests: formData.getAll("interests") as string[],
    travelerType: (formData.get("travelerType") as MusterRequest["travelerType"]) ?? "SOLO_COUPLE",
    pace: (formData.get("pace") as MusterRequest["pace"]) ?? "BALANCED",
    fieldTrip: formData.get("fieldTrip") === "true",
    gradeLevel: (formData.get("gradeLevel") as string) || undefined,
    busCapacity: rawBusCapacity ? parseInt(rawBusCapacity as string, 10) : undefined,
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

    const { sites, events, businesses } = await findMusterData(startLat, startLng, endLat, endLng, startDate, endDate);
    const itinerary = await generateMusterWithClaude(request, sites, events, businesses);
    musterId = await saveMuster(request, itinerary, session?.user?.id);
  } catch (e) {
    console.error("createMuster failed:", e);
    const msg = e instanceof Error ? e.message : String(e);
    return { error: `Something went wrong generating your trip. ${msg.slice(0, 300)}` };
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

  const { sites, events, businesses } = await findMusterData(startLat, startLng, endLat, endLng, startDate, endDate);
  const itinerary = await generateMusterWithClaude(request, sites, events, businesses);
  return saveMuster(request, itinerary, session?.user?.id);
}

// Create a muster seeded from a Route's ordered stops
export async function createMusterFromRoute(formData: FormData): Promise<{ error: string } | void> {
  const session = await auth();
  const routeId = formData.get("routeId") as string;
  const startDate = formData.get("startDate") as string;
  const endDate = formData.get("endDate") as string;

  if (!routeId || !startDate || !endDate) return { error: "Missing required fields." };

  const route = await prisma.route.findUnique({
    where: { id: routeId },
    include: {
      stops: {
        orderBy: { stopOrder: "asc" },
        include: { town: { select: { name: true, state: true, lat: true, lng: true } } },
      },
    },
  });
  if (!route || route.stops.length === 0) return { error: "Route not found." };

  const firstTown = route.stops[0].town;
  const lastTown = route.stops[route.stops.length - 1].town;

  const request: MusterRequest = {
    startDate,
    endDate,
    startLocation: `${firstTown.name}, ${firstTown.state}`,
    endLocation: `${lastTown.name}, ${lastTown.state}`,
    interests: [],
    travelerType: "HISTORY_BUFF",
    pace: "BALANCED",
  };

  let musterId: string;
  try {
    // Use the route towns as the corridor anchors
    const startLat = firstTown.lat ?? 42.3;
    const startLng = firstTown.lng ?? -71.5;
    const endLat = lastTown.lat ?? startLat;
    const endLng = lastTown.lng ?? startLng;

    const sd = new Date(startDate + "T00:00:00");
    const ed = new Date(endDate + "T23:59:59");

    const { sites, events, businesses } = await findMusterData(startLat, startLng, endLat, endLng, sd, ed, 30);
    const itinerary = await generateMusterWithClaude(
      { ...request, interests: [`Following the ${route.name} route`] },
      sites, events, businesses
    );
    musterId = await saveMuster(request, itinerary, session?.user?.id);
  } catch (e) {
    console.error("createMusterFromRoute failed:", e);
    const msg = e instanceof Error ? e.message : String(e);
    return { error: `Could not muster this route. ${msg.slice(0, 120)}` };
  }

  redirect(`/muster/${musterId}`);
}

// Claim an anonymous muster after sign-in
export async function claimMuster(musterId: string): Promise<{ error: string } | void> {
  const session = await auth();
  if (!session?.user?.id) return { error: "Not signed in." };

  const muster = await getMuster(musterId);
  if (!muster) return { error: "Muster not found." };

  await prisma.muster.update({
    where: { id: musterId },
    data: { userId: session.user.id },
  });
}

// Remove a single stop from a muster
export async function removeMusterStop(musterId: string, stopId: string): Promise<{ error: string } | void> {
  // Verify the stop belongs to this muster before deleting
  const stop = await prisma.musterStop.findFirst({
    where: { id: stopId, musterDay: { musterId } },
  });
  if (!stop) return { error: "Stop not found." };

  await prisma.musterStop.delete({ where: { id: stopId } });

  // Re-number remaining stops in the same day to keep order clean
  const remaining = await prisma.musterStop.findMany({
    where: { musterDayId: stop.musterDayId },
    orderBy: { stopOrder: "asc" },
  });
  await Promise.all(
    remaining.map((s, i) =>
      prisma.musterStop.update({ where: { id: s.id }, data: { stopOrder: i + 1 } })
    )
  );
}
