// MODEL: Claude Sonnet
// Common Zod schemas used across multiple validators

import { z } from 'zod';

// Pagination
export const PaginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

// Slug format: lowercase alphanumeric with hyphens
export const SlugSchema = z.string().regex(/^[a-z0-9-]+$/, 'Invalid slug format');

// Town ID format: country-state-city
export const TownIdSchema = z.string().regex(/^[a-z]{2}-[a-z]{2}-[a-z0-9-]+$/, 'Invalid town ID format');

// Common enums matching Prisma
export const VerificationStatusSchema = z.enum(['VERIFIED', 'ORAL_TRADITION', 'ANECDOTAL', 'UNVERIFIED']);

export const StoryTypeSchema = z.enum(['HISTORICAL_VOICE', 'MODERN_VOICE']);

export const SourceTypeSchema = z.enum(['PRIMARY', 'SECONDARY', 'TERTIARY', 'DATASET', 'INSTITUTIONAL', 'NEWS']);

export const CredibilityTierSchema = z.enum(['TIER1', 'TIER2', 'TIER3', 'TODO']);

export const TownLinkTypeSchema = z.enum([
  'SHARED_EVENT',
  'SHARED_PERSON',
  'SHARED_THEME',
  'ROUTE',
  'COMPARISON',
  'GEOGRAPHIC_PROXIMITY',
  'OTHER',
]);

export const UpdateDeltaStatusSchema = z.enum(['PENDING', 'APPLIED', 'REJECTED', 'ROLLED_BACK']);

export const PlaceTypeSchema = z.enum([
  'BATTLEFIELD',
  'HISTORIC_HOUSE',
  'MONUMENT',
  'MUSEUM',
  'CEMETERY',
  'CHURCH',
  'GOVERNMENT',
  'TAVERN',
  'LANDMARK',
  'TRAIL',
]);

export const AnalyticsEventTypeSchema = z.enum([
  'PAGE_VIEW',
  'ITINERARY_CLICK',
  'TEACHER_DOWNLOAD',
  'COMPARE_VIEW',
  'EMBED_VIEW',
  'FAQ_EXPAND',
  'STORY_LISTEN',
  'ROUTE_VIEW',
]);

// Date with optional precision indicator
export const HistoricalDateSchema = z.object({
  date: z.string().datetime().optional(),
  precision: z.enum(['DAY', 'MONTH', 'YEAR', 'RANGE', 'UNKNOWN']).default('UNKNOWN'),
});

// Geographic coordinates
export const GeoSchema = z.object({
  lat: z.number().min(-90).max(90),
  lng: z.number().min(-180).max(180),
});

// API response envelope
export const ApiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.boolean(),
    data: dataSchema.optional(),
    error: z.string().optional(),
    meta: z
      .object({
        page: z.number().optional(),
        limit: z.number().optional(),
        total: z.number().optional(),
        timestamp: z.string().datetime(),
      })
      .optional(),
  });
