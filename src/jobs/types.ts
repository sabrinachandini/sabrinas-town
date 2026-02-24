// MODEL: Claude Sonnet
// Types for agentic update pipeline

import { CredibilityTier, SourceType } from '@prisma/client';

/**
 * Configuration for a poll source job
 */
export interface PollSourceConfig {
  id: string;
  name: string;
  url: string;
  type: SourceType;
  credibilityTier: CredibilityTier;
  pollInterval: number; // milliseconds
  enabled: boolean;

  // Parsing configuration
  parser: ParserConfig;

  // Rate limiting
  maxRequestsPerHour: number;
  respectRobotsTxt: boolean;

  // Output
  townIds: string[]; // Towns this source relates to
}

export interface ParserConfig {
  type: 'html' | 'json' | 'rss' | 'api';
  selectors?: HtmlSelectors;
  jsonPath?: string;
  transform?: TransformConfig;
}

export interface HtmlSelectors {
  title?: string;
  content?: string;
  date?: string;
  author?: string;
}

export interface TransformConfig {
  dateFormat?: string;
  trimWhitespace?: boolean;
  extractEntities?: boolean;
}

/**
 * Result of polling a source
 */
export interface PollResult {
  sourceId: string;
  timestamp: Date;
  success: boolean;
  error?: string;
  items: ExtractedItem[];
  nextPollTime: Date;
}

/**
 * Item extracted from a source
 */
export interface ExtractedItem {
  id: string; // Hash of content for deduplication
  sourceUrl: string;
  title: string;
  content: string;
  publishedAt?: Date;
  author?: string;
  extractedEntities: ExtractedEntity[];
}

/**
 * Entity extracted from source content
 */
export interface ExtractedEntity {
  type: 'person' | 'event' | 'place' | 'date' | 'fact';
  name: string;
  context: string;
  confidence: number; // 0-100
}

/**
 * Change detection result
 */
export interface ChangeDetection {
  isNew: boolean;
  isUpdate: boolean;
  fieldChanges: FieldChange[];
  significanceScore: number;
  requiresHumanReview: boolean;
  reviewQuestions: string[];
}

export interface FieldChange {
  field: string;
  oldValue: unknown;
  newValue: unknown;
  changeType: 'add' | 'update' | 'remove';
  confidence: number;
}

/**
 * Pipeline state for a source
 */
export interface PipelineState {
  sourceId: string;
  lastPollTime: Date | null;
  lastSuccessTime: Date | null;
  consecutiveFailures: number;
  itemsProcessed: number;
  deltasCreated: number;
  isBackpressured: boolean;
}

/**
 * Aggregated pipeline metrics
 */
export interface PipelineMetrics {
  totalSources: number;
  activeSources: number;
  totalItemsProcessed: number;
  totalDeltasCreated: number;
  pendingDeltas: number;
  appliedDeltas: number;
  rejectedDeltas: number;
  lastHourActivity: {
    polls: number;
    items: number;
    deltas: number;
  };
}
