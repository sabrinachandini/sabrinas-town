// MODEL: Claude Sonnet
// Agentic update pipeline - source polling scaffolding
// This is a stub implementation showing the intended architecture

import {
  PollSourceConfig,
  PollResult,
  ExtractedItem,
  ChangeDetection,
  PipelineState,
  PipelineMetrics,
} from './types.js';
import { SOURCE_RUBRICS, requiresHumanReview, generateReviewQuestions } from '../config/sources.js';
import { createUpdateDelta } from '../services/updateDeltaService.js';
import prisma from '../db/client.js';

/**
 * Registry of configured poll sources
 * In production, this would be stored in the database
 */
const sourceRegistry: Map<string, PollSourceConfig> = new Map();

/**
 * Pipeline state per source
 */
const pipelineStates: Map<string, PipelineState> = new Map();

/**
 * Register a source for polling
 */
export function registerSource(config: PollSourceConfig): void {
  sourceRegistry.set(config.id, config);
  pipelineStates.set(config.id, {
    sourceId: config.id,
    lastPollTime: null,
    lastSuccessTime: null,
    consecutiveFailures: 0,
    itemsProcessed: 0,
    deltasCreated: 0,
    isBackpressured: false,
  });
  console.log(`[Pipeline] Registered source: ${config.name}`);
}

/**
 * Unregister a source
 */
export function unregisterSource(sourceId: string): void {
  sourceRegistry.delete(sourceId);
  pipelineStates.delete(sourceId);
}

/**
 * Poll a single source
 * This is a stub - actual implementation would use fetch/axios
 */
export async function pollSource(sourceId: string): Promise<PollResult> {
  const config = sourceRegistry.get(sourceId);

  if (!config) {
    return {
      sourceId,
      timestamp: new Date(),
      success: false,
      error: 'Source not registered',
      items: [],
      nextPollTime: new Date(),
    };
  }

  const state = pipelineStates.get(sourceId)!;

  // Check backpressure
  if (state.isBackpressured) {
    return {
      sourceId,
      timestamp: new Date(),
      success: false,
      error: 'Source is backpressured due to too many pending deltas',
      items: [],
      nextPollTime: new Date(Date.now() + config.pollInterval * 2),
    };
  }

  try {
    console.log(`[Pipeline] Polling source: ${config.name}`);

    // STUB: In production, this would:
    // 1. Fetch content from config.url
    // 2. Parse according to config.parser
    // 3. Extract items
    // 4. Deduplicate against previously seen items
    const items: ExtractedItem[] = [];

    // Simulated success
    state.lastPollTime = new Date();
    state.lastSuccessTime = new Date();
    state.consecutiveFailures = 0;

    return {
      sourceId,
      timestamp: new Date(),
      success: true,
      items,
      nextPollTime: new Date(Date.now() + config.pollInterval),
    };
  } catch (error) {
    state.lastPollTime = new Date();
    state.consecutiveFailures++;

    // Exponential backoff on failures
    const backoffMultiplier = Math.min(Math.pow(2, state.consecutiveFailures), 16);

    return {
      sourceId,
      timestamp: new Date(),
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      items: [],
      nextPollTime: new Date(Date.now() + config.pollInterval * backoffMultiplier),
    };
  }
}

/**
 * Process extracted items and create update deltas
 */
export async function processItems(
  items: ExtractedItem[],
  config: PollSourceConfig
): Promise<{ processed: number; deltasCreated: number }> {
  let processed = 0;
  let deltasCreated = 0;

  for (const item of items) {
    try {
      // Detect changes against current data
      const changes = await detectChanges(item, config.townIds);

      if (changes.fieldChanges.length === 0) {
        // No changes detected
        processed++;
        continue;
      }

      // Create update delta
      for (const townId of config.townIds) {
        const delta = await createUpdateDelta({
          townId,
          sourceId: config.id,
          rawPayload: {
            item,
            sourceConfig: {
              name: config.name,
              url: config.url,
              credibilityTier: config.credibilityTier,
            },
          },
          extracted: {
            fieldChanges: changes.fieldChanges.map((fc) => ({
              field: fc.field,
              oldValue: fc.oldValue,
              newValue: fc.newValue,
              confidence: fc.confidence,
            })),
            summary: `Updates from ${config.name}: ${item.title}`,
          },
          significanceScore: changes.significanceScore,
          questions: changes.reviewQuestions,
        });

        deltasCreated++;
        console.log(
          `[Pipeline] Created delta ${delta.id} for ${townId} (review required: ${delta.requiresHumanReview})`
        );
      }

      processed++;
    } catch (error) {
      console.error(`[Pipeline] Error processing item: ${error}`);
    }
  }

  return { processed, deltasCreated };
}

/**
 * Detect changes in extracted item against current data
 * STUB: This would use NLP/entity matching in production
 */
async function detectChanges(
  item: ExtractedItem,
  townIds: string[]
): Promise<ChangeDetection> {
  // STUB implementation
  // In production, this would:
  // 1. Parse the extracted content
  // 2. Identify entities (people, events, places, dates)
  // 3. Match against existing entities in the database
  // 4. Calculate semantic similarity for updates
  // 5. Determine significance based on what changed

  return {
    isNew: false,
    isUpdate: false,
    fieldChanges: [],
    significanceScore: 0,
    requiresHumanReview: true,
    reviewQuestions: [],
  };
}

/**
 * Run the polling loop for all registered sources
 * STUB: In production, this would be a persistent background worker
 */
export async function startPollLoop(): Promise<void> {
  console.log('[Pipeline] Starting poll loop (STUB)');
  console.log('[Pipeline] In production, this would run as a background worker');

  // Check each source
  for (const [sourceId, config] of sourceRegistry) {
    if (!config.enabled) continue;

    const state = pipelineStates.get(sourceId)!;
    const shouldPoll =
      !state.lastPollTime ||
      Date.now() - state.lastPollTime.getTime() >= config.pollInterval;

    if (shouldPoll) {
      const result = await pollSource(sourceId);

      if (result.success && result.items.length > 0) {
        const { processed, deltasCreated } = await processItems(result.items, config);
        state.itemsProcessed += processed;
        state.deltasCreated += deltasCreated;
      }
    }
  }
}

/**
 * Get current pipeline metrics
 */
export async function getPipelineMetrics(): Promise<PipelineMetrics> {
  const pendingDeltas = await prisma.updateDelta.count({
    where: { status: 'PENDING' },
  });

  const appliedDeltas = await prisma.updateDelta.count({
    where: { status: 'APPLIED' },
  });

  const rejectedDeltas = await prisma.updateDelta.count({
    where: { status: 'REJECTED' },
  });

  let totalItemsProcessed = 0;
  let totalDeltasCreated = 0;

  for (const state of pipelineStates.values()) {
    totalItemsProcessed += state.itemsProcessed;
    totalDeltasCreated += state.deltasCreated;
  }

  return {
    totalSources: sourceRegistry.size,
    activeSources: Array.from(sourceRegistry.values()).filter((c) => c.enabled).length,
    totalItemsProcessed,
    totalDeltasCreated,
    pendingDeltas,
    appliedDeltas,
    rejectedDeltas,
    lastHourActivity: {
      polls: 0, // Would track in production
      items: 0,
      deltas: 0,
    },
  };
}

/**
 * Example source configurations for reference
 */
export const EXAMPLE_SOURCE_CONFIGS: PollSourceConfig[] = [
  {
    id: 'nps-mima-news',
    name: 'Minute Man NHP News',
    url: 'https://www.nps.gov/mima/learn/news/newsreleases.htm',
    type: 'INSTITUTIONAL',
    credibilityTier: 'TIER1',
    pollInterval: 24 * 60 * 60 * 1000, // Daily
    enabled: false, // Disabled by default in stub
    parser: {
      type: 'html',
      selectors: {
        title: '.ContentHeader h1',
        content: '.article-body',
        date: '.article-date',
      },
    },
    maxRequestsPerHour: 2,
    respectRobotsTxt: true,
    townIds: ['us-ma-lexington', 'us-ma-concord'],
  },
  {
    id: 'mass-hist-blog',
    name: 'Massachusetts Historical Society Blog',
    url: 'https://www.masshist.org/beehiveblog',
    type: 'INSTITUTIONAL',
    credibilityTier: 'TIER2',
    pollInterval: 7 * 24 * 60 * 60 * 1000, // Weekly
    enabled: false,
    parser: {
      type: 'html',
      selectors: {
        title: '.entry-title',
        content: '.entry-content',
        date: '.entry-date',
      },
    },
    maxRequestsPerHour: 1,
    respectRobotsTxt: true,
    townIds: ['us-ma-lexington', 'us-ma-boston', 'us-ma-cambridge'],
  },
];

/**
 * Documentation: Source Reputation Rubric
 *
 * TIER 1 (Highest Credibility)
 * - National Park Service official publications
 * - State archives and government records
 * - Peer-reviewed academic journals
 * - Primary source document collections (LOC, Smithsonian)
 * - University press publications
 * Auto-apply threshold: Updates with significance < 30 may auto-apply
 * Max auto-updates per day: 50
 *
 * TIER 2 (High Credibility)
 * - Established historical societies
 * - Published historians with credentials
 * - Major museum publications
 * - Reputable history magazines
 * Auto-apply threshold: Updates with significance < 15 may auto-apply
 * Max auto-updates per day: 30
 *
 * TIER 3 (Moderate Credibility)
 * - Wikipedia (requires cross-reference)
 * - News articles about historical topics
 * - Tourism board publications
 * - General encyclopedias
 * Auto-apply threshold: Never auto-applies
 * Max auto-updates per day: 10 (all require human review)
 *
 * TODO (Not Yet Evaluated)
 * - New sources awaiting credibility assessment
 * Auto-apply threshold: Never
 * Max auto-updates per day: 0
 */
