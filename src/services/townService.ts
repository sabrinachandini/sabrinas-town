// MODEL: Claude Sonnet
// Town service for fetching and transforming town data

import { Prisma } from '@prisma/client';
import prisma from '../db/client.js';
import { getScoreTier } from './scoring.js';
import type {
  TownFullResponse,
  TownSummary,
  EventSummarySchema,
  StorySummarySchema,
  TownLinkSchema,
  PlaceSummarySchema,
  PlacesResponse,
  PlacesQuery,
} from '../validators/town.js';
import { z } from 'zod';

type EventSummary = z.infer<typeof EventSummarySchema>;
type StorySummary = z.infer<typeof StorySummarySchema>;
type TownLink = z.infer<typeof TownLinkSchema>;
type PlaceSummary = z.infer<typeof PlaceSummarySchema>;

// Full include type for town query
const townInclude = {
  events: {
    include: {
      eventPeople: { include: { person: true } },
      eventThemes: { include: { theme: true } },
    },
    orderBy: { significanceWeight: 'desc' as const },
    take: 10,
  },
  stories: {
    include: {
      subjectPerson: true,
      storyThemes: { include: { theme: true } },
    },
    take: 10,
  },
  places: {
    orderBy: [{ featured: 'desc' }, { displayOrder: 'asc' }],
  },
  outgoingLinks: {
    include: {
      toTown: { select: { id: true, name: true, slug: true } },
    },
    orderBy: { weight: 'desc' as const },
  },
  townThemes: {
    include: { theme: true },
  },
  routeStops: {
    include: {
      route: {
        include: {
          stops: { select: { id: true } },
        },
      },
    },
  },
  changeLogEntries: {
    orderBy: { createdAt: 'desc' as const },
    take: 5,
    select: {
      id: true,
      createdAt: true,
      summary: true,
      publicNotes: true,
    },
  },
} satisfies Prisma.TownInclude;

type TownWithRelations = Prisma.TownGetPayload<{ include: typeof townInclude }>;

export interface GetTownOptions {
  includeEvents?: boolean;
  includeStories?: boolean;
  includeLinks?: boolean;
  includeScore?: boolean;
}

/**
 * Get full town data by slug
 */
export async function getTownBySlug(
  slug: string,
  options: GetTownOptions = {}
): Promise<TownFullResponse | null> {
  const {
    includeEvents = true,
    includeStories = true,
    includeLinks = true,
    includeScore = true,
  } = options;

  const town = await prisma.town.findUnique({
    where: { slug },
    include: townInclude,
  }) as TownWithRelations | null;

  if (!town) {
    return null;
  }

  // Transform to response format
  const response: TownFullResponse = {
    id: town.id,
    name: town.name,
    state: town.state,
    country: town.country,
    slug: town.slug,
    geo: town.lat && town.lng ? { lat: town.lat, lng: town.lng } : null,
    heroSummary40: town.heroSummary40,
    execSummary150: town.execSummary150,
    whyMatters: town.whyMatters,
    tourismInfo: town.tourismInfo as Record<string, unknown> | null,
    compositeScore: town.compositeScore,
    scoreTier: getScoreTier(town.compositeScore),
    scoreBreakdown: includeScore
      ? (town.scoreBreakdown as TownFullResponse['scoreBreakdown'])
      : null,
    lastUpdatedAt: town.lastUpdatedAt.toISOString(),
  };

  // Transform events
  if (includeEvents && town.events) {
    response.events = town.events.map((e): EventSummary => ({
      id: e.id,
      name: e.name,
      startDate: e.startDate?.toISOString() ?? null,
      datePrecision: e.datePrecision,
      summary: e.summary,
      significanceWeight: e.significanceWeight,
      peopleCount: e.eventPeople.length,
      themesCount: e.eventThemes.length,
    }));
  }

  // Transform stories
  if (includeStories && town.stories) {
    response.stories = town.stories.map((s): StorySummary => ({
      id: s.id,
      title: s.title,
      storyType: s.storyType,
      verificationStatus: s.verificationStatus,
      subjectPersonName: s.subjectPerson?.name ?? null,
      narratorName: s.narratorName,
      narratorRole: s.narratorRole,
      excerpt: s.textVersion.slice(0, 200) + (s.textVersion.length > 200 ? '...' : ''),
      tags: s.tags,
    }));
  }

  // Transform places (slimmed - only totals and featured)
  if (town.places) {
    const byCategory: Record<string, number> = {};
    const featured: PlaceSummary[] = [];

    for (const p of town.places) {
      byCategory[p.placeType] = (byCategory[p.placeType] || 0) + 1;
      if (p.featured && featured.length < 6) {
        featured.push({
          id: p.id,
          name: p.name,
          placeType: p.placeType,
          description: p.description,
          lat: p.lat,
          lng: p.lng,
          address: p.address,
          hours: p.hours,
          admission: p.admission,
          website: p.website,
          phone: p.phone,
          accessibilityNotes: p.accessibilityNotes,
          parkingNotes: p.parkingNotes,
          amenities: p.amenities,
          historicalNote: p.historicalNote,
          featured: p.featured,
        });
      }
    }

    response.placesTotals = {
      total: town.places.length,
      featured: town.places.filter((p) => p.featured).length,
      byCategory,
    };
    response.featuredPlaces = featured;
  }

  // Transform links
  if (includeLinks && town.outgoingLinks) {
    response.linkedTowns = town.outgoingLinks.map((l): TownLink => ({
      townId: l.toTown.id,
      townName: l.toTown.name,
      townSlug: l.toTown.slug,
      linkType: l.linkType,
      reason: l.reason,
      weight: l.weight,
    }));
  }

  // Themes
  response.themes = town.townThemes.map((tt) => ({
    id: tt.theme.id,
    name: tt.theme.name,
    relevanceNote: tt.relevanceNote,
  }));

  // Routes
  response.routes = town.routeStops.map((rs) => ({
    id: rs.route.id,
    name: rs.route.name,
    stopOrder: rs.stopOrder,
    totalStops: rs.route.stops.length,
  }));

  // Recent changes
  response.recentChanges = town.changeLogEntries.map((c) => ({
    id: c.id,
    createdAt: c.createdAt.toISOString(),
    summary: c.summary,
    publicNotes: c.publicNotes,
  }));

  return response;
}

/**
 * Get town summary for cards/lists
 */
export async function getTownSummary(townId: string): Promise<TownSummary | null> {
  const town = await prisma.town.findUnique({
    where: { id: townId },
    select: {
      id: true,
      name: true,
      state: true,
      slug: true,
      heroSummary40: true,
      execSummary150: true,
      compositeScore: true,
    },
  });

  if (!town) return null;

  return {
    ...town,
    scoreTier: getScoreTier(town.compositeScore),
  };
}

/**
 * Get ranked list of towns
 */
export async function getRankedTowns(options: {
  limit?: number;
  state?: string;
  minScore?: number;
}): Promise<Array<TownSummary & { rank: number; previousRank: number | null; rankChange: number | null }>> {
  const { limit = 25, state, minScore } = options;

  const towns = await prisma.town.findMany({
    where: {
      ...(state && { state }),
      ...(minScore !== undefined && { compositeScore: { gte: minScore } }),
    },
    orderBy: { compositeScore: 'desc' },
    take: limit,
    select: {
      id: true,
      name: true,
      state: true,
      slug: true,
      heroSummary40: true,
      execSummary150: true,
      compositeScore: true,
    },
  });

  // TODO: Implement previous rank tracking via ScoreSnapshot comparison
  return towns.map((town, index) => ({
    ...town,
    scoreTier: getScoreTier(town.compositeScore),
    rank: index + 1,
    previousRank: null, // Would come from previous snapshot
    rankChange: null,
  }));
}

/**
 * Get stories for a town
 */
export async function getTownStories(
  slug: string,
  options: { type?: 'HISTORICAL_VOICE' | 'MODERN_VOICE'; limit?: number } = {}
): Promise<StorySummary[]> {
  const { type, limit = 20 } = options;

  const town = await prisma.town.findUnique({
    where: { slug },
    select: { id: true },
  });

  if (!town) return [];

  const stories = await prisma.story.findMany({
    where: {
      townId: town.id,
      ...(type && { storyType: type }),
    },
    include: {
      subjectPerson: true,
    },
    take: limit,
  });

  return stories.map((s): StorySummary => ({
    id: s.id,
    title: s.title,
    storyType: s.storyType,
    verificationStatus: s.verificationStatus,
    subjectPersonName: s.subjectPerson?.name ?? null,
    narratorName: s.narratorName,
    narratorRole: s.narratorRole,
    excerpt: s.textVersion.slice(0, 200) + (s.textVersion.length > 200 ? '...' : ''),
    tags: s.tags,
  }));
}

/**
 * Check if a town exists by slug
 */
export async function townExists(slug: string): Promise<boolean> {
  const count = await prisma.town.count({ where: { slug } });
  return count > 0;
}

/**
 * Get sources for a town, ordered by credibility tier
 */
export async function getTownSources(slug: string) {
  const town = await prisma.town.findUnique({
    where: { slug },
    select: { id: true, slug: true, name: true },
  });

  if (!town) return null;

  const [sources, lastUpdatedResult] = await Promise.all([
    prisma.source.findMany({
      where: { sourceTowns: { some: { town: { slug } } } },
      select: {
        id: true,
        type: true,
        title: true,
        publisherOrHolder: true,
        url: true,
        credibilityTier: true,
        notes: true,
      },
      orderBy: [{ credibilityTier: 'asc' }, { title: 'asc' }],
    }),
    prisma.source.aggregate({
      where: { sourceTowns: { some: { town: { slug } } } },
      _max: { updatedAt: true },
    }),
  ]);

  return {
    town: { id: town.id, slug: town.slug, name: town.name },
    totalCount: sources.length,
    sources,
    lastUpdated: lastUpdatedResult._max.updatedAt?.toISOString() ?? null,
  };
}

/**
 * Get global changelog entries with optional town filter
 */
export async function getGlobalChangelog(options: {
  town?: string;
  limit?: number;
  offset?: number;
} = {}) {
  const { town, limit = 50, offset = 0 } = options;

  const where = town ? { town: { slug: town } } : undefined;

  const [entries, total] = await Promise.all([
    prisma.changeLogEntry.findMany({
      where,
      include: { town: { select: { id: true, slug: true, name: true } } },
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip: offset,
    }),
    prisma.changeLogEntry.count({ where }),
  ]);

  return {
    entries: entries.map((e) => ({
      id: e.id,
      createdAt: e.createdAt.toISOString(),
      title: e.title ?? null,
      summary: e.summary,
      publicNotes: e.publicNotes,
      category: e.category ?? null,
      createdBy: e.createdBy ?? null,
      links: e.links ?? null,
      town: e.town
        ? { id: e.town.id, slug: e.town.slug, name: e.town.name }
        : null,
    })),
    total,
  };
}

/**
 * Get places for a town with grouping by category
 */
export async function getTownPlaces(
  slug: string,
  options: PlacesQuery = {}
): Promise<PlacesResponse | null> {
  const { category, limit, featuredOnly } = options;

  const town = await prisma.town.findUnique({
    where: { slug },
    select: { id: true, slug: true, name: true },
  });

  if (!town) return null;

  // Build where clause
  const whereClause: Prisma.PlaceWhereInput = {
    townId: town.id,
    ...(category && { placeType: category }),
    ...(featuredOnly && { featured: true }),
  };

  const places = await prisma.place.findMany({
    where: whereClause,
    orderBy: [{ featured: 'desc' }, { displayOrder: 'asc' }, { name: 'asc' }],
    ...(limit && { take: limit }),
  });

  // Transform places to summaries
  const transformPlace = (p: typeof places[0]): PlaceSummary => ({
    id: p.id,
    name: p.name,
    placeType: p.placeType,
    description: p.description,
    lat: p.lat,
    lng: p.lng,
    address: p.address,
    hours: p.hours,
    admission: p.admission,
    website: p.website,
    phone: p.phone,
    accessibilityNotes: p.accessibilityNotes,
    parkingNotes: p.parkingNotes,
    amenities: p.amenities,
    historicalNote: p.historicalNote,
    featured: p.featured,
  });

  // Separate featured and group by category
  const featured = places.filter((p) => p.featured).map(transformPlace);

  const placesByCategory: Record<string, PlaceSummary[]> = {};
  const byCategory: Record<string, number> = {};

  for (const place of places) {
    const cat = place.placeType;
    if (!placesByCategory[cat]) {
      placesByCategory[cat] = [];
      byCategory[cat] = 0;
    }
    placesByCategory[cat].push(transformPlace(place));
    byCategory[cat]++;
  }

  return {
    town: {
      id: town.id,
      slug: town.slug,
      name: town.name,
    },
    totals: {
      total: places.length,
      featured: featured.length,
      byCategory,
    },
    featured,
    placesByCategory,
  };
}
