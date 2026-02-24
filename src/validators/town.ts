// MODEL: Claude Sonnet
// Zod schemas for Town-related requests and responses

import { z } from 'zod';
import {
  SlugSchema,
  VerificationStatusSchema,
  StoryTypeSchema,
  TownLinkTypeSchema,
  GeoSchema,
} from './common.js';

// Query params for GET /towns/:slug
export const TownQuerySchema = z.object({
  includeEvents: z.coerce.boolean().default(true),
  includeStories: z.coerce.boolean().default(true),
  includeLinks: z.coerce.boolean().default(true),
  includeScore: z.coerce.boolean().default(true),
});

// Town summary for lists/cards
export const TownSummarySchema = z.object({
  id: z.string(),
  name: z.string(),
  state: z.string(),
  slug: z.string(),
  heroSummary40: z.string(),
  execSummary150: z.string(),
  compositeScore: z.number(),
  scoreTier: z.string(),
});

// Event summary
export const EventSummarySchema = z.object({
  id: z.string(),
  name: z.string(),
  startDate: z.string().nullable(),
  datePrecision: z.string(),
  summary: z.string(),
  significanceWeight: z.number(),
  peopleCount: z.number(),
  themesCount: z.number(),
});

// Story summary
export const StorySummarySchema = z.object({
  id: z.string(),
  title: z.string(),
  storyType: StoryTypeSchema,
  verificationStatus: VerificationStatusSchema,
  subjectPersonName: z.string().nullable(),
  narratorName: z.string().nullable(),
  narratorRole: z.string().nullable(),
  excerpt: z.string(), // First ~200 chars of textVersion
  tags: z.array(z.string()),
});

// Town link with reason
export const TownLinkSchema = z.object({
  townId: z.string(),
  townName: z.string(),
  townSlug: z.string(),
  linkType: TownLinkTypeSchema,
  reason: z.string(),
  weight: z.number(),
});

// Score breakdown for display
export const ScoreBreakdownSchema = z.object({
  historical: z.object({
    score: z.number(),
    subfactors: z.record(z.unknown()),
  }),
  preservation: z.object({
    score: z.number(),
    subfactors: z.record(z.unknown()),
  }),
  accessibility: z.object({
    score: z.number(),
    subfactors: z.record(z.unknown()),
  }),
  interpretation: z.object({
    score: z.number(),
    subfactors: z.record(z.unknown()),
  }),
  interconnection: z.object({
    score: z.number(),
    subfactors: z.record(z.unknown()),
  }),
  stories: z.object({
    score: z.number(),
    subfactors: z.record(z.unknown()),
  }),
  sources: z.object({
    score: z.number(),
    subfactors: z.record(z.unknown()),
  }),
  hints: z.array(
    z.object({
      category: z.string(),
      direction: z.enum(['raise', 'lower']),
      suggestion: z.string(),
      potentialImpact: z.number(),
    })
  ),
});

// Full town response
export const TownFullResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  state: z.string(),
  country: z.string(),
  slug: z.string(),
  geo: GeoSchema.nullable(),
  heroSummary40: z.string(),
  execSummary150: z.string(),
  whyMatters: z.string(),
  tourismInfo: z.record(z.unknown()).nullable(),
  compositeScore: z.number(),
  scoreTier: z.string(),
  scoreBreakdown: ScoreBreakdownSchema.nullable(),
  lastUpdatedAt: z.string().datetime(),
  events: z.array(EventSummarySchema).optional(),
  stories: z.array(StorySummarySchema).optional(),
  linkedTowns: z.array(TownLinkSchema).optional(),
  themes: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
        relevanceNote: z.string().nullable(),
      })
    )
    .optional(),
  routes: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
        stopOrder: z.number(),
        totalStops: z.number(),
      })
    )
    .optional(),
  recentChanges: z
    .array(
      z.object({
        id: z.string(),
        createdAt: z.string().datetime(),
        summary: z.string(),
        publicNotes: z.string().nullable(),
      })
    )
    .optional(),
});

// Compare request
export const CompareQuerySchema = z.object({
  townA: SlugSchema,
  townB: SlugSchema,
});

// Compare response
export const CompareResponseSchema = z.object({
  townA: TownSummarySchema,
  townB: TownSummarySchema,
  comparison: z.object({
    sharedEvents: z.array(EventSummarySchema),
    sharedPeople: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        roles: z.array(z.string()),
        connectionA: z.string().nullable(),
        connectionB: z.string().nullable(),
      })
    ),
    sharedThemes: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        relevanceA: z.string().nullable(),
        relevanceB: z.string().nullable(),
      })
    ),
    sharedRoutes: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        stopOrderA: z.number(),
        stopOrderB: z.number(),
      })
    ),
    directLink: TownLinkSchema.nullable(),
  }),
  suggestedItinerary: z.object({
    totalMiles: z.number().nullable(),
    stops: z.array(
      z.object({
        order: z.number(),
        townId: z.string(),
        townName: z.string(),
        suggestedDuration: z.string(),
        highlights: z.array(z.string()),
      })
    ),
    notes: z.string(),
  }),
});

// Rankings query
export const RankingsQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(75).default(25),
  state: z.string().optional(),
  minScore: z.coerce.number().min(0).max(100).optional(),
});

// Rankings response
export const RankingsResponseSchema = z.object({
  towns: z.array(
    TownSummarySchema.extend({
      rank: z.number(),
      previousRank: z.number().nullable(),
      rankChange: z.number().nullable(),
    })
  ),
  lastComputed: z.string().datetime(),
  configVersion: z.string(),
});

export type TownQuery = z.infer<typeof TownQuerySchema>;
export type TownSummary = z.infer<typeof TownSummarySchema>;
export type TownFullResponse = z.infer<typeof TownFullResponseSchema>;
export type CompareQuery = z.infer<typeof CompareQuerySchema>;
export type CompareResponse = z.infer<typeof CompareResponseSchema>;
export type RankingsQuery = z.infer<typeof RankingsQuerySchema>;
export type RankingsResponse = z.infer<typeof RankingsResponseSchema>;
