// MODEL: Claude Sonnet
// Compare service for generating town comparison data

import prisma from '../db/client.js';
import { getScoreTier } from './scoring.js';
import type { CompareResponse, TownSummary } from '../validators/town.js';

/**
 * Compare two towns and generate comparison data
 */
export async function compareTowns(
  slugA: string,
  slugB: string
): Promise<CompareResponse | null> {
  // Fetch both towns with relevant relations
  const [townA, townB] = await Promise.all([
    prisma.town.findUnique({
      where: { slug: slugA },
      include: {
        events: {
          include: {
            eventPeople: { include: { person: true } },
            eventThemes: { include: { theme: true } },
          },
        },
        townThemes: { include: { theme: true } },
        routeStops: { include: { route: true } },
        townPeople: { include: { person: true } },
        outgoingLinks: {
          where: { toTownId: { not: undefined } },
          include: { toTown: true },
        },
      },
    }),
    prisma.town.findUnique({
      where: { slug: slugB },
      include: {
        events: {
          include: {
            eventPeople: { include: { person: true } },
            eventThemes: { include: { theme: true } },
          },
        },
        townThemes: { include: { theme: true } },
        routeStops: { include: { route: true } },
        townPeople: { include: { person: true } },
        outgoingLinks: {
          where: { toTownId: { not: undefined } },
          include: { toTown: true },
        },
      },
    }),
  ]);

  if (!townA || !townB) {
    return null;
  }

  // Build summaries
  const summaryA: TownSummary = {
    id: townA.id,
    name: townA.name,
    state: townA.state,
    slug: townA.slug,
    heroSummary40: townA.heroSummary40,
    execSummary150: townA.execSummary150,
    compositeScore: townA.compositeScore,
    scoreTier: getScoreTier(townA.compositeScore),
  };

  const summaryB: TownSummary = {
    id: townB.id,
    name: townB.name,
    state: townB.state,
    slug: townB.slug,
    heroSummary40: townB.heroSummary40,
    execSummary150: townB.execSummary150,
    compositeScore: townB.compositeScore,
    scoreTier: getScoreTier(townB.compositeScore),
  };

  // Find shared events (events that appear in both towns via EventTown)
  const eventIdsA = new Set(townA.events.map((e) => e.id));
  const eventIdsB = new Set(townB.events.map((e) => e.id));

  // For now, shared events are events with same name (simplified)
  // In production, use EventTown join table
  const sharedEvents = townA.events
    .filter((eA) => townB.events.some((eB) => eB.name === eA.name))
    .map((e) => ({
      id: e.id,
      name: e.name,
      startDate: e.startDate?.toISOString() ?? null,
      datePrecision: e.datePrecision,
      summary: e.summary,
      significanceWeight: e.significanceWeight,
      peopleCount: e.eventPeople.length,
      themesCount: e.eventThemes.length,
    }));

  // Find shared people
  const peopleA = new Map(
    townA.events.flatMap((e) =>
      e.eventPeople.map((ep) => [ep.person.id, { person: ep.person, connection: e.name }])
    )
  );
  const peopleB = new Map(
    townB.events.flatMap((e) =>
      e.eventPeople.map((ep) => [ep.person.id, { person: ep.person, connection: e.name }])
    )
  );

  const sharedPeople = Array.from(peopleA.entries())
    .filter(([id]) => peopleB.has(id))
    .map(([id, dataA]) => {
      const dataB = peopleB.get(id)!;
      return {
        id,
        name: dataA.person.name,
        roles: dataA.person.roles,
        connectionA: dataA.connection,
        connectionB: dataB.connection,
      };
    });

  // Find shared themes
  const themesA = new Map(
    townA.townThemes.map((tt) => [tt.theme.id, { theme: tt.theme, note: tt.relevanceNote }])
  );
  const themesB = new Map(
    townB.townThemes.map((tt) => [tt.theme.id, { theme: tt.theme, note: tt.relevanceNote }])
  );

  const sharedThemes = Array.from(themesA.entries())
    .filter(([id]) => themesB.has(id))
    .map(([id, dataA]) => {
      const dataB = themesB.get(id)!;
      return {
        id,
        name: dataA.theme.name,
        relevanceA: dataA.note,
        relevanceB: dataB.note,
      };
    });

  // Find shared routes
  const routesA = new Map(
    townA.routeStops.map((rs) => [rs.route.id, { route: rs.route, order: rs.stopOrder }])
  );
  const routesB = new Map(
    townB.routeStops.map((rs) => [rs.route.id, { route: rs.route, order: rs.stopOrder }])
  );

  const sharedRoutes = Array.from(routesA.entries())
    .filter(([id]) => routesB.has(id))
    .map(([id, dataA]) => {
      const dataB = routesB.get(id)!;
      return {
        id,
        name: dataA.route.name,
        stopOrderA: dataA.order,
        stopOrderB: dataB.order,
      };
    });

  // Check for direct link
  const directLink = townA.outgoingLinks.find((l) => l.toTownId === townB.id);
  const directLinkData = directLink
    ? {
        townId: directLink.toTown.id,
        townName: directLink.toTown.name,
        townSlug: directLink.toTown.slug,
        linkType: directLink.linkType,
        reason: directLink.reason,
        weight: directLink.weight,
      }
    : null;

  // Generate suggested itinerary
  const suggestedItinerary = generateItinerary(townA, townB, sharedRoutes);

  return {
    townA: summaryA,
    townB: summaryB,
    comparison: {
      sharedEvents,
      sharedPeople,
      sharedThemes,
      sharedRoutes,
      directLink: directLinkData,
    },
    suggestedItinerary,
  };
}

interface TownForItinerary {
  id: string;
  name: string;
  events: Array<{ name: string; significanceWeight: number }>;
  lat: number | null;
  lng: number | null;
}

function generateItinerary(
  townA: TownForItinerary,
  townB: TownForItinerary,
  sharedRoutes: Array<{ stopOrderA: number; stopOrderB: number }>
): CompareResponse['suggestedItinerary'] {
  // Determine order based on shared routes or geography
  let order: [TownForItinerary, TownForItinerary];

  if (sharedRoutes.length > 0) {
    // Use route order
    const firstRoute = sharedRoutes[0];
    order = firstRoute.stopOrderA < firstRoute.stopOrderB ? [townA, townB] : [townB, townA];
  } else if (townA.lat && townB.lat) {
    // West to east (or north to south if similar longitude)
    order = townA.lng! < townB.lng! ? [townA, townB] : [townB, townA];
  } else {
    order = [townA, townB];
  }

  // Calculate approximate distance if coordinates available
  let totalMiles: number | null = null;
  if (townA.lat && townA.lng && townB.lat && townB.lng) {
    totalMiles = calculateDistance(townA.lat, townA.lng, townB.lat, townB.lng);
  }

  return {
    totalMiles,
    stops: order.map((town, index) => ({
      order: index + 1,
      townId: town.id,
      townName: town.name,
      suggestedDuration: '2-3 hours',
      highlights: town.events
        .sort((a, b) => b.significanceWeight - a.significanceWeight)
        .slice(0, 3)
        .map((e) => e.name),
    })),
    notes: sharedRoutes.length > 0
      ? 'These towns are connected by a historical route. Consider following the route for the full experience.'
      : 'Plan your visit based on your starting location and available time.',
  };
}

function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  // Haversine formula for distance in miles
  const R = 3959; // Earth's radius in miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}
