// MODEL: Claude Sonnet
// Zod schemas for Analytics-related requests

import { z } from 'zod';
import { AnalyticsEventTypeSchema, SlugSchema } from './common.js';

// POST /analytics request body
export const AnalyticsEventCreateSchema = z.object({
  townSlug: SlugSchema,
  eventType: AnalyticsEventTypeSchema,
  metadata: z
    .object({
      referrer: z.string().optional(),
      userAgent: z.string().optional(),
      sessionId: z.string().optional(),
      pageUrl: z.string().url().optional(),
      duration: z.number().optional(), // For story listen, page view duration
      itemId: z.string().optional(), // For specific item interactions
    })
    .optional(),
});

// Query params for analytics reports (admin)
export const AnalyticsQuerySchema = z.object({
  townId: z.string().optional(),
  orgId: z.string().optional(),
  eventType: AnalyticsEventTypeSchema.optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
  groupBy: z.enum(['day', 'week', 'month', 'eventType', 'town']).default('day'),
});

// Analytics summary response
export const AnalyticsSummarySchema = z.object({
  period: z.object({
    start: z.string().datetime(),
    end: z.string().datetime(),
  }),
  totalEvents: z.number(),
  byType: z.record(AnalyticsEventTypeSchema, z.number()),
  topTowns: z.array(
    z.object({
      townId: z.string(),
      townName: z.string(),
      eventCount: z.number(),
    })
  ),
  trend: z.array(
    z.object({
      date: z.string(),
      count: z.number(),
    })
  ),
});

export type AnalyticsEventCreate = z.infer<typeof AnalyticsEventCreateSchema>;
export type AnalyticsQuery = z.infer<typeof AnalyticsQuerySchema>;
export type AnalyticsSummary = z.infer<typeof AnalyticsSummarySchema>;
