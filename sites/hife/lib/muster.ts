/**
 * Muster — Road Trip Planner
 * Core logic: geocoding, site/event queries, Claude generation, DB persistence.
 */

import Anthropic from "@anthropic-ai/sdk";
import prisma from "@/lib/prisma";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface MusterRequest {
  startDate: string;       // "2025-04-18"
  endDate: string;         // "2025-04-20"
  startLocation: string;
  endLocation: string;
  interests: string[];
  travelerType: "SOLO_COUPLE" | "FAMILY_KIDS" | "SCHOOL_GROUP" | "HISTORY_BUFF";
  pace: "LEISURELY" | "BALANCED" | "PACKED";
}

export interface MusterStopData {
  type: "site" | "event" | "meal" | "lodging" | "custom";
  id?: string;
  name: string;
  arrival_time: string;
  duration_minutes: number;
  why_this_stop: string;
  tip?: string;
  address?: string;
}

export interface MusterDayData {
  day_number: number;
  date: string;
  theme: string;
  narrative: string;
  stops: MusterStopData[];
}

export interface MusterItinerary {
  title: string;
  summary: string;
  days: MusterDayData[];
}

export interface MusterDetail {
  id: string;
  title: string;
  summary: string | null;
  shareToken: string;
  startDate: Date;
  endDate: Date;
  startLocation: string;
  endLocation: string;
  interests: string[];
  travelerType: string;
  pace: string;
  days: Array<{
    id: string;
    dayNumber: number;
    date: Date;
    theme: string;
    narrative: string;
    stops: Array<{
      id: string;
      stopOrder: number;
      stopType: string;
      customName: string | null;
      customNote: string | null;
      arrivalTime: string | null;
      durationMinutes: number | null;
      whyThisStop: string | null;
      userNote: string | null;
      place: { id: string; name: string; placeType: string; address: string | null; lat: number | null; lng: number | null; website: string | null } | null;
      localEvent: { id: string; name: string; category: string; venue: string | null; url: string | null; eventDate: Date | null; month: number | null; day: number | null } | null;
    }>;
  }>;
}

// ── Geocoding (Nominatim — free, no key) ─────────────────────────────────────

export async function geocodeLocation(query: string): Promise<{ lat: number; lng: number } | null> {
  try {
    const encoded = encodeURIComponent(query + ", USA");
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encoded}&format=json&limit=1&countrycodes=us`,
      {
        headers: { "User-Agent": "HistoryIsForEveryone-Muster/1.0 (sabrina@hife.org)" },
        next: { revalidate: 86400 },
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (!data[0]) return null;
    return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
  } catch {
    return null;
  }
}

// ── Haversine distance (miles) ────────────────────────────────────────────────

function haversine(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 3959;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Distance from point to line segment (for route corridor filtering)
function distanceToSegment(
  pLat: number, pLng: number,
  aLat: number, aLng: number,
  bLat: number, bLng: number
): number {
  const d1 = haversine(pLat, pLng, aLat, aLng);
  const d2 = haversine(pLat, pLng, bLat, bLng);
  const d12 = haversine(aLat, aLng, bLat, bLng);
  if (d12 < 1) return Math.min(d1, d2);
  // Approximate: take minimum of distances to endpoints
  return Math.min(d1, d2);
}

// ── Site & Event Queries ──────────────────────────────────────────────────────

interface SiteForPrompt {
  id: string;
  name: string;
  townName: string;
  townState: string;
  townSlug: string;
  type: string;
  description: string;
  lat: number | null;
  lng: number | null;
  hours: string | null;
  admission: string | null;
  accessibilityNotes: string | null;
  parkingNotes: string | null;
}

interface EventForPrompt {
  id: string;
  name: string;
  townName: string;
  category: string;
  description: string;
  venue: string | null;
  url: string | null;
  eventDate: Date | null;
  month: number | null;
  day: number | null;
  endDay: number | null;
}

interface BusinessForPrompt {
  id: string;
  name: string;
  townName: string;
  category: string;
  address: string | null;
  hours: string | null;
  priceRange: string | null;
  website: string | null;
  isHifePick: boolean;
  blurb: string | null;
}

export async function findMusterData(
  startLat: number,
  startLng: number,
  endLat: number,
  endLng: number,
  startDate: Date,
  endDate: Date,
  maxMilesFromRoute = 80
): Promise<{ sites: SiteForPrompt[]; events: EventForPrompt[]; businesses: BusinessForPrompt[] }> {
  // Fetch all towns with coordinates and their places + events + businesses
  const towns = await prisma.town.findMany({
    where: { lat: { not: null }, lng: { not: null } },
    select: {
      id: true,
      name: true,
      state: true,
      slug: true,
      lat: true,
      lng: true,
      places: {
        where: { featured: true },
        select: {
          id: true, name: true, placeType: true, description: true,
          lat: true, lng: true, hours: true, admission: true,
          accessibilityNotes: true, parkingNotes: true,
        },
        orderBy: { displayOrder: "asc" },
        take: 5,
      },
      localEvents: {
        select: {
          id: true, name: true, category: true, description: true,
          venue: true, url: true, eventDate: true, month: true, day: true, endDay: true,
        },
      },
      businesses: {
        where: { status: "ACTIVE" },
        select: {
          id: true, name: true, category: true, address: true,
          hours: true, priceRange: true, website: true,
          isHifePick: true, blurb: true,
        },
        orderBy: [{ isHifePick: "desc" }, { name: "asc" }],
      },
    },
  });

  // Filter towns within the route corridor
  const startMonth = startDate.getMonth() + 1;
  const startDay = startDate.getDate();
  const endMonth = endDate.getMonth() + 1;
  const endDay = endDate.getDate();

  const nearbyTowns = towns.filter((t) => {
    if (!t.lat || !t.lng) return false;
    const dist = distanceToSegment(t.lat, t.lng, startLat, startLng, endLat, endLng);
    return dist <= maxMilesFromRoute;
  });

  const sites: SiteForPrompt[] = nearbyTowns.flatMap((t) =>
    t.places.map((p) => ({
      id: p.id,
      name: p.name,
      townName: t.name,
      townState: t.state,
      townSlug: t.slug,
      type: p.placeType,
      description: p.description.slice(0, 300),
      lat: p.lat,
      lng: p.lng,
      hours: p.hours,
      admission: p.admission,
      accessibilityNotes: p.accessibilityNotes,
      parkingNotes: p.parkingNotes,
    }))
  );

  // Filter events that fall within the trip dates
  const events: EventForPrompt[] = nearbyTowns.flatMap((t) =>
    t.localEvents.filter((e) => {
      // Exact-date events
      if (e.eventDate) {
        const d = e.eventDate;
        return d >= startDate && d <= endDate;
      }
      // Annual recurring events: check month/day overlap with trip window
      if (e.month && e.day) {
        // Check if this month/day falls within the trip's calendar window
        const tripStartMD = startMonth * 100 + startDay;
        const tripEndMD = endMonth * 100 + endDay;
        const eventStartMD = e.month * 100 + e.day;
        const eventEndMD = e.month * 100 + (e.endDay ?? e.day);
        return eventStartMD <= tripEndMD && eventEndMD >= tripStartMD;
      }
      return false;
    }).map((e) => ({
      id: e.id,
      name: e.name,
      townName: t.name,
      category: e.category,
      description: e.description.slice(0, 200),
      venue: e.venue,
      url: e.url,
      eventDate: e.eventDate,
      month: e.month,
      day: e.day,
      endDay: e.endDay,
    }))
  );

  const businesses: BusinessForPrompt[] = nearbyTowns.flatMap((t) =>
    (t.businesses ?? []).map((b) => ({
      id: b.id,
      name: b.name,
      townName: t.name,
      category: b.category,
      address: b.address,
      hours: b.hours,
      priceRange: b.priceRange,
      website: b.website,
      isHifePick: b.isHifePick,
      blurb: b.blurb,
    }))
  );

  return { sites, events, businesses };
}

// ── Restaurant Verification (Nominatim) ──────────────────────────────────────

async function verifyRestaurantExists(
  name: string,
  geo: { lat: number; lng: number }
): Promise<{ exists: boolean; address?: string; website?: string }> {
  try {
    const safeName = name.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    const amenities = "restaurant|bar|pub|cafe|tavern|fast_food";
    const q = `[out:json][timeout:5];(node["amenity"~"${amenities}"]["name"~"^${safeName}$",i](around:120000,${geo.lat},${geo.lng});way["amenity"~"${amenities}"]["name"~"^${safeName}$",i](around:120000,${geo.lat},${geo.lng}););out 1;`;
    const res = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      body: "data=" + encodeURIComponent(q),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      signal: AbortSignal.timeout(7000),
    });
    if (!res.ok) return { exists: false };
    const data = await res.json();
    if (!data.elements?.length) return { exists: false };
    const tags = data.elements[0].tags ?? {};
    const addrParts = [tags["addr:housenumber"], tags["addr:street"], tags["addr:city"], tags["addr:state"]].filter(Boolean);
    const address = addrParts.length >= 2 ? addrParts.join(" ") : undefined;
    const website = tags["website"] || tags["contact:website"] || undefined;
    return { exists: true, address, website };
  } catch {
    return { exists: false };
  }
}

// ── Claude Itinerary Generation ───────────────────────────────────────────────

const INTEREST_LABELS: Record<string, string> = {
  battles: "Battles & skirmishes",
  "founding-figures": "Founding figures (Washington, Adams, Revere, etc.)",
  women: "Women of the Revolution",
  spies: "Spies, couriers, and secret networks",
  taverns: "Taverns & daily life",
  "african-american-indigenous": "African American & Indigenous perspectives",
  "pre-war": "Pre-war agitation (Stamp Act, Boston Massacre, etc.)",
  naval: "Naval / privateering history",
};

const TRAVELER_LABELS: Record<string, string> = {
  SOLO_COUPLE: "Solo traveler or couple — depth and flexibility",
  FAMILY_KIDS: "Family with kids — engaging, interactive, paced for children",
  SCHOOL_GROUP: "School group — educational, bus-friendly, group logistics",
  HISTORY_BUFF: "History enthusiast — depth, lesser-known sites, scholarly context",
};

const PACE_LABELS: Record<string, string> = {
  LEISURELY: "Leisurely (2–3 stops/day)",
  BALANCED: "Balanced (4–5 stops/day)",
  PACKED: "Packed (6+ stops/day)",
};

export async function generateMusterWithClaude(
  request: MusterRequest,
  sites: SiteForPrompt[],
  events: EventForPrompt[],
  businesses: BusinessForPrompt[] = []
): Promise<MusterItinerary> {
  if (!process.env.ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY is not set in environment variables.");
  const client = new Anthropic();

  const numDays =
    Math.ceil(
      (new Date(request.endDate).getTime() - new Date(request.startDate).getTime()) /
        (1000 * 60 * 60 * 24)
    ) + 1;

  const prompt = `You are Muster, a warm, knowledgeable tour guide for History Is For Everyone, an authoritative Revolutionary War travel website. You help travelers assemble — "muster" — multi-day road trips that blend historical sites with real, time-bound living-history events.

Draft a day-by-day road trip itinerary based on these inputs:

- Dates: ${request.startDate} to ${request.endDate} (${numDays} day${numDays !== 1 ? "s" : ""})
- Starting from: ${request.startLocation}
- Ending at: ${request.endLocation}
- Interests: ${request.interests.map((i) => INTEREST_LABELS[i] ?? i).join(", ") || "General Revolutionary War history"}
- Traveler type: ${TRAVELER_LABELS[request.travelerType] ?? request.travelerType}
- Pace: ${PACE_LABELS[request.pace] ?? request.pace}

Available historical sites (use these IDs when referencing them):
${JSON.stringify(sites.slice(0, 40), null, 2)}

Living history events happening during these dates (PRIORITIZE these — include at least one per day if available):
${events.length > 0 ? JSON.stringify(events, null, 2) : "No events found for these exact dates — suggest the best sites instead."}

HIFE-verified businesses near the route (restaurants, cafés, shops, inns):
${businesses.length > 0 ? JSON.stringify(businesses.slice(0, 30), null, 2) : "No HIFE-verified businesses on file for this route."}

Return a JSON object with EXACTLY this shape (no markdown, no explanation, just the JSON):
{
  "title": "A 3-word evocative trip title",
  "summary": "2-3 sentence overview of the trip's narrative arc",
  "days": [
    {
      "day_number": 1,
      "date": "2025-04-18",
      "theme": "Short day theme",
      "narrative": "2-3 sentences setting the historical scene for the day",
      "stops": [
        {
          "type": "site",
          "id": "place-id-from-sites-list",
          "name": "Place Name",
          "arrival_time": "10:00 AM",
          "duration_minutes": 60,
          "why_this_stop": "One sentence on why this stop matters for this trip",
          "tip": "Optional practical tip (parking, best entrance, hidden gem)"
        }
      ]
    }
  ]
}

Stop types: "site" (historical place from the sites list, use its id), "event" (from events list, use its id), "meal" (restaurant or café — use id from businesses list if available, otherwise id: null), "lodging" (inn or hotel for multi-day trips — use id from businesses list if available, otherwise id: null), "custom" (anything else — id: null).

Voice: warm, curious, accessible — like a brilliant friend who knows the Revolution intimately. Never stuffy. Never a brochure.
- For family trips: note kid-friendly elements, interactive exhibits
- For school groups: note group logistics, educational framing
- For history buffs: surface lesser-known details, primary source connections
- Always route geographically logically (no backtracking)
- Suggest a meal stop each day around midday, timed sensibly near the day's midpoint stop. STRONGLY PREFER businesses marked isHifePick:true from the HIFE-verified businesses list — use their id field. If no HIFE picks are available for a given town, choose a real, named, long-standing local institution (historic tavern, famous inn). Never suggest national chains. Never fabricate a business.
- For multi-day trips: add a lodging stop at the end of each day except the last. STRONGLY PREFER inns and B&Bs marked isHifePick:true. Use id from the businesses list when available.
- If pace allows and a bookstore or antique shop is in the businesses list near a midday stop, add a brief browse stop (20-30 min) with type "custom".
- For museum and historic site stops, check the "hours" field in the sites JSON. Only suggest arrival times that fall within those hours. Never suggest arriving before a site opens or after it closes.
- For every stop that is a statue, monument, or outdoor landmark, note in why_this_stop that it is always accessible (no hours needed).
- Never route to a business with status "CLOSED" or "NEEDS_REVIEW".

Return ONLY valid JSON. No markdown code fences.`;

  const msg = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 8192,
    messages: [{ role: "user", content: prompt }],
  });

  const text = msg.content[0].type === "text" ? msg.content[0].text.trim() : "";

  // Strip any accidental markdown fences
  const clean = text.replace(/^```(?:json)?\n?/i, "").replace(/\n?```$/i, "").trim();

  let itinerary: MusterItinerary;
  try {
    itinerary = JSON.parse(clean);
  } catch {
    throw new Error(`Claude returned invalid JSON: ${clean.slice(0, 200)}`);
  }

  // Basic validation
  if (!itinerary.days || !Array.isArray(itinerary.days)) {
    throw new Error("Itinerary missing days array");
  }

  // Sanitize stop types — Claude occasionally returns types outside the enum.
  const validStopTypes = new Set(["site", "event", "meal", "lodging", "custom"]);
  for (const day of itinerary.days) {
    for (const stop of day.stops) {
      if (!validStopTypes.has(stop.type)) {
        stop.type = "custom";
      }
    }
  }

  // Sanitize stop IDs — Claude sometimes hallucinates IDs not in our dataset.
  // Clear any ID that doesn't match the known sites/events/businesses to prevent FK errors.
  const knownSiteIds = new Set(sites.map((s) => s.id));
  const knownEventIds = new Set(events.map((e) => e.id));
  const knownBusinessIds = new Set(businesses.map((b) => b.id));
  for (const day of itinerary.days) {
    for (const stop of day.stops) {
      if (stop.type === "site" && stop.id && !knownSiteIds.has(stop.id)) {
        stop.id = undefined;
      }
      if (stop.type === "event" && stop.id && !knownEventIds.has(stop.id)) {
        stop.id = undefined;
      }
      if ((stop.type === "meal" || stop.type === "lodging") && stop.id && !knownBusinessIds.has(stop.id)) {
        stop.id = undefined;
      }
    }
  }

  // Verify meal stop restaurants via Overpass. Geocode region once, run checks in
  // parallel. The entire block is best-effort — any failure just skips verification.
  try {
    const geo = await geocodeLocation(request.startLocation);
    if (geo) {
      const mealStops = itinerary.days.flatMap((day) =>
        day.stops.filter((stop) => stop.type === "meal" && stop.name)
      );
      await Promise.all(
        mealStops.map(async (stop) => {
          const result = await verifyRestaurantExists(stop.name, geo);
          if (result.exists) {
            if (result.address) stop.address = result.address;
          } else {
            stop.tip = (stop.tip ? stop.tip + " " : "") + "⚠ Call ahead to confirm this is still open.";
          }
        })
      );
    }
  } catch {
    // Verification is non-critical; never let it fail the generation.
  }

  return itinerary;
}

// ── DB Persistence ────────────────────────────────────────────────────────────

export async function saveMuster(
  request: MusterRequest,
  itinerary: MusterItinerary,
  userId?: string
): Promise<string> {
  const muster = await prisma.muster.create({
    data: {
      userId: userId ?? null,
      title: itinerary.title,
      summary: itinerary.summary,
      startDate: new Date(request.startDate),
      endDate: new Date(request.endDate),
      startLocation: request.startLocation,
      endLocation: request.endLocation,
      interests: request.interests,
      travelerType: request.travelerType as never,
      pace: request.pace as never,
      rawItinerary: itinerary as never,
      days: {
        create: itinerary.days.map((day) => ({
          dayNumber: day.day_number,
          date: new Date(day.date),
          theme: day.theme,
          narrative: day.narrative,
          stops: {
            create: day.stops.map((stop, idx) => ({
              stopOrder: idx + 1,
              stopType: stop.type.toUpperCase() as never,
              placeId: stop.type === "site" && stop.id ? stop.id : null,
              localEventId: stop.type === "event" && stop.id ? stop.id : null,
              businessId: (stop.type === "meal" || stop.type === "lodging") && stop.id ? stop.id : null,
              customName: !stop.id ? stop.name : null,
              customNote: stop.address ?? null,
              arrivalTime: stop.arrival_time,
              durationMinutes: stop.duration_minutes,
              whyThisStop: stop.why_this_stop,
            })),
          },
        })),
      },
    },
  });

  return muster.id;
}

// ── DB Reads ──────────────────────────────────────────────────────────────────

const MUSTER_STOP_INCLUDE = {
  place: {
    select: { id: true, name: true, placeType: true, address: true, lat: true, lng: true, website: true },
  },
  localEvent: {
    select: { id: true, name: true, category: true, venue: true, url: true, eventDate: true, month: true, day: true },
  },
  business: {
    select: { id: true, name: true, category: true, address: true, hours: true, website: true, phone: true, isHifePick: true, blurb: true, lat: true, lng: true },
  },
} as const;

export async function getMuster(id: string): Promise<MusterDetail | null> {
  const muster = await prisma.muster.findUnique({
    where: { id },
    include: {
      days: {
        orderBy: { dayNumber: "asc" },
        include: {
          stops: {
            orderBy: { stopOrder: "asc" },
            include: MUSTER_STOP_INCLUDE,
          },
        },
      },
    },
  });
  return muster as MusterDetail | null;
}

export async function getMusterByToken(token: string): Promise<MusterDetail | null> {
  const muster = await prisma.muster.findUnique({
    where: { shareToken: token },
    include: {
      days: {
        orderBy: { dayNumber: "asc" },
        include: {
          stops: {
            orderBy: { stopOrder: "asc" },
            include: MUSTER_STOP_INCLUDE,
          },
        },
      },
    },
  });
  return muster as MusterDetail | null;
}

export async function getUserMusters(userId: string) {
  return prisma.muster.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    select: {
      id: true, title: true, summary: true, shareToken: true,
      startDate: true, endDate: true, startLocation: true, endLocation: true,
      createdAt: true,
      days: { select: { id: true }, take: 1 },
    },
  });
}
