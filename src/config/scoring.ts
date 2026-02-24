// MODEL: Claude Sonnet
// Scoring configuration for town composite scores
// Increment SCORE_CONFIG_VERSION when weights change significantly

export const SCORE_CONFIG_VERSION = process.env.SCORE_CONFIG_VERSION || '1.0.0';

/**
 * Weight categories for computing town composite scores.
 * All weights should sum to 1.0 (100%)
 */
export interface ScoringWeights {
  historical: number;      // Historical significance
  preservation: number;    // Quality of preservation/restoration
  accessibility: number;   // Visitor accessibility (transport, ADA, etc.)
  interpretation: number;  // Quality of educational interpretation
  interconnection: number; // Network connections to other towns
  stories: number;         // Richness of stories (esp. lesser-known voices)
  sources: number;         // Quality and depth of sourcing
}

export const DEFAULT_WEIGHTS: ScoringWeights = {
  historical: 0.25,      // 25%
  preservation: 0.15,    // 15%
  accessibility: 0.10,   // 10%
  interpretation: 0.15,  // 15%
  interconnection: 0.15, // 15%
  stories: 0.10,         // 10%
  sources: 0.10,         // 10%
};

/**
 * Subfactors for historical significance scoring
 */
export interface HistoricalSubfactors {
  eventSignificance: number;      // Avg significance of linked events (0-100)
  personSignificance: number;     // Notable people connected (0-100)
  pivotalMoments: number;         // Number of "turning point" events
  primarySourceCount: number;     // Number of primary sources available
}

/**
 * Subfactors for preservation scoring
 */
export interface PreservationSubfactors {
  npsDesignation: boolean;        // National Park Service site?
  stateHistoricSite: boolean;     // State historic designation?
  preservationQuality: number;    // Expert assessment (0-100)
  activePreservationOrg: boolean; // Active local preservation org?
}

/**
 * Subfactors for accessibility scoring
 */
export interface AccessibilitySubfactors {
  walkabilityScore: number;       // 0-100
  publicTransitAccess: boolean;
  adaCompliance: number;          // 0-100
  parkingAvailable: boolean;
  nearMajorCity: boolean;
}

/**
 * Subfactors for interpretation scoring
 */
export interface InterpretationSubfactors {
  visitorCenterQuality: number;   // 0-100
  guidedToursAvailable: boolean;
  digitalResourcesQuality: number; // 0-100
  educationalProgramsCount: number;
}

/**
 * Subfactors for interconnection scoring
 */
export interface InterconnectionSubfactors {
  linkedTownCount: number;        // Number of linked towns
  avgLinkWeight: number;          // Average link weight
  routeParticipation: number;     // Number of routes this town is part of
  sharedEventsCount: number;      // Events shared with other towns
}

/**
 * Subfactors for stories scoring
 */
export interface StoriesSubfactors {
  totalStoryCount: number;
  verifiedStoryCount: number;
  lesserKnownVoicesCount: number;
  modernVoicesCount: number;
}

/**
 * Subfactors for sources scoring
 */
export interface SourcesSubfactors {
  tier1SourceCount: number;
  tier2SourceCount: number;
  primarySourceCount: number;
  institutionalSourceCount: number;
}

/**
 * Full score breakdown stored on Town and ScoreSnapshot
 */
export interface ScoreBreakdown {
  historical: {
    score: number;
    subfactors: Partial<HistoricalSubfactors>;
  };
  preservation: {
    score: number;
    subfactors: Partial<PreservationSubfactors>;
  };
  accessibility: {
    score: number;
    subfactors: Partial<AccessibilitySubfactors>;
  };
  interpretation: {
    score: number;
    subfactors: Partial<InterpretationSubfactors>;
  };
  interconnection: {
    score: number;
    subfactors: Partial<InterconnectionSubfactors>;
  };
  stories: {
    score: number;
    subfactors: Partial<StoriesSubfactors>;
  };
  sources: {
    score: number;
    subfactors: Partial<SourcesSubfactors>;
  };
  hints: ScoreHint[];
}

/**
 * Hints for how to improve/what affects the score
 */
export interface ScoreHint {
  category: keyof ScoringWeights;
  direction: 'raise' | 'lower';
  suggestion: string;
  potentialImpact: number; // Estimated points
}

/**
 * Thresholds for score tiers (for display purposes)
 */
export const SCORE_TIERS = {
  EXCEPTIONAL: 90,  // 90-100: Top-tier Revolutionary significance
  EXCELLENT: 75,    // 75-89: Major Revolutionary site
  NOTABLE: 60,      // 60-74: Significant Revolutionary connection
  RELEVANT: 40,     // 40-59: Documented Revolutionary history
  EMERGING: 0,      // 0-39: Early in documentation/preservation
} as const;

/**
 * Get tier label for a composite score
 */
export function getScoreTier(score: number): string {
  if (score >= SCORE_TIERS.EXCEPTIONAL) return 'Exceptional';
  if (score >= SCORE_TIERS.EXCELLENT) return 'Excellent';
  if (score >= SCORE_TIERS.NOTABLE) return 'Notable';
  if (score >= SCORE_TIERS.RELEVANT) return 'Relevant';
  return 'Emerging';
}

/**
 * Validate that weights sum to 1.0
 */
export function validateWeights(weights: ScoringWeights): boolean {
  const sum = Object.values(weights).reduce((a, b) => a + b, 0);
  return Math.abs(sum - 1.0) < 0.001; // Allow small floating point error
}
