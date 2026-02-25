// Zod schemas for org-scoped analytics endpoints

import { z } from 'zod';
import { SlugSchema, AnalyticsEventTypeSchema } from './common.js';

// POST /api/org-analytics/event
export const OrgAnalyticsEventSchema = z.object({
  orgSlug: SlugSchema,
  eventType: AnalyticsEventTypeSchema,
  townSlug: SlugSchema.optional(),
  metadata: z.record(z.unknown()).optional(),
});

// GET /api/org-analytics/summary
export const OrgAnalyticsSummaryQuerySchema = z.object({
  orgSlug: SlugSchema,
  range: z.enum(['7d', '30d']).default('7d'),
});

export type OrgAnalyticsEvent = z.infer<typeof OrgAnalyticsEventSchema>;
export type OrgAnalyticsSummaryQuery = z.infer<typeof OrgAnalyticsSummaryQuerySchema>;
