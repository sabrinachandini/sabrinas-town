// MODEL: Claude Sonnet
// Source reputation rubric and configuration for agentic updates

import { CredibilityTier, SourceType } from '@prisma/client';

/**
 * Source reputation rubric for evaluating incoming information.
 * Used by the agentic update pipeline to assess credibility.
 */
export interface SourceReputationRubric {
  tier: CredibilityTier;
  description: string;
  examples: string[];
  autoApplyThreshold: number;     // Significance score below this auto-applies (if tier allows)
  requiresHumanReview: boolean;   // Always requires human review?
  maxAutoUpdatesPerDay: number;   // Rate limit for auto-updates from this tier
}

export const SOURCE_RUBRICS: Record<CredibilityTier, SourceReputationRubric> = {
  TIER1: {
    tier: 'TIER1',
    description: 'Highest credibility: academic institutions, NPS, Smithsonian, primary documents, peer-reviewed research',
    examples: [
      'National Park Service official publications',
      'Smithsonian Institution',
      'Library of Congress primary documents',
      'Peer-reviewed historical journals',
      'State archives official records',
      'University press publications',
    ],
    autoApplyThreshold: 30,        // Can auto-apply low-significance updates
    requiresHumanReview: false,    // Only for high-significance
    maxAutoUpdatesPerDay: 50,
  },
  TIER2: {
    tier: 'TIER2',
    description: 'High credibility: established historians, reputable museums, quality secondary sources',
    examples: [
      'Established local historical societies',
      'Published historians with credentials',
      'Major museum publications',
      'Quality documentary productions',
      'Reputable history magazines (Smithsonian Mag, American Heritage)',
    ],
    autoApplyThreshold: 15,        // Lower threshold for auto-apply
    requiresHumanReview: false,
    maxAutoUpdatesPerDay: 30,
  },
  TIER3: {
    tier: 'TIER3',
    description: 'Moderate credibility: general references, Wikipedia (with verification), news articles',
    examples: [
      'Wikipedia (requires cross-reference)',
      'News articles about historical events',
      'Tourism board publications',
      'General encyclopedias',
      'Blog posts by credentialed authors',
    ],
    autoApplyThreshold: 0,         // Never auto-apply
    requiresHumanReview: true,     // Always requires review
    maxAutoUpdatesPerDay: 10,
  },
  TODO: {
    tier: 'TODO',
    description: 'Not yet evaluated - requires credibility assessment before use',
    examples: [],
    autoApplyThreshold: 0,
    requiresHumanReview: true,
    maxAutoUpdatesPerDay: 0,       // Cannot auto-apply
  },
};

/**
 * Known reputable source domains for automatic tier assignment
 */
export const KNOWN_SOURCE_DOMAINS: Record<string, CredibilityTier> = {
  // TIER 1 - Institutional
  'nps.gov': 'TIER1',
  'si.edu': 'TIER1',
  'smithsonianmag.com': 'TIER2', // Magazine is TIER2, institution is TIER1
  'loc.gov': 'TIER1',
  'archives.gov': 'TIER1',
  'jstor.org': 'TIER1',
  'cambridge.org': 'TIER1',
  'oxfordacademics.com': 'TIER1',

  // TIER 2 - Reputable secondary
  'history.com': 'TIER2',
  'americanheritage.com': 'TIER2',
  'masshist.org': 'TIER1', // Massachusetts Historical Society
  'digitalcommonwealth.org': 'TIER1',

  // TIER 3 - General reference
  'wikipedia.org': 'TIER3',
  'britannica.com': 'TIER2',
};

/**
 * Significance thresholds for human review
 */
export const SIGNIFICANCE_THRESHOLDS = {
  LOW: 20,           // Minor factual updates, typos, etc.
  MEDIUM: 50,        // Notable additions or corrections
  HIGH: 75,          // Significant new information
  CRITICAL: 90,      // Major changes that affect core narrative
};

/**
 * Fields that always require human review regardless of significance
 */
export const SENSITIVE_FIELDS = [
  'verificationStatus',
  'whyMatters',
  'heroSummary40',
  'execSummary150',
  'significanceWeight',
  'compositeScore',
  'credibilityTier',
];

/**
 * Fields that can be auto-updated from TIER1 sources
 */
export const AUTO_UPDATABLE_FIELDS = [
  'tourismInfo.hours',
  'tourismInfo.admission',
  'tourismInfo.contactPhone',
  'tourismInfo.website',
  'lat',
  'lng',
];

/**
 * Determine credibility tier from URL domain
 */
export function getTierFromUrl(url: string): CredibilityTier {
  try {
    const hostname = new URL(url).hostname.replace('www.', '');

    for (const [domain, tier] of Object.entries(KNOWN_SOURCE_DOMAINS)) {
      if (hostname === domain || hostname.endsWith('.' + domain)) {
        return tier;
      }
    }

    return 'TODO';
  } catch {
    return 'TODO';
  }
}

/**
 * Determine if an update requires human review
 */
export function requiresHumanReview(
  tier: CredibilityTier,
  significanceScore: number,
  fieldsAffected: string[]
): boolean {
  const rubric = SOURCE_RUBRICS[tier];

  // Always review if rubric says so
  if (rubric.requiresHumanReview) {
    return true;
  }

  // Review if significance exceeds threshold
  if (significanceScore > rubric.autoApplyThreshold) {
    return true;
  }

  // Review if sensitive fields affected
  if (fieldsAffected.some(f => SENSITIVE_FIELDS.includes(f))) {
    return true;
  }

  return false;
}

/**
 * Generate questions for human reviewer based on update content
 */
export function generateReviewQuestions(
  fieldsAffected: string[],
  significanceScore: number,
  tier: CredibilityTier
): string[] {
  const questions: string[] = [];

  if (tier === 'TIER3' || tier === 'TODO') {
    questions.push('Has this source been cross-referenced with a more authoritative source?');
  }

  if (significanceScore >= SIGNIFICANCE_THRESHOLDS.HIGH) {
    questions.push('Does this change significantly alter the historical narrative?');
    questions.push('Should this update trigger a notification to the town organization?');
  }

  if (fieldsAffected.includes('verificationStatus')) {
    questions.push('What evidence supports this verification status change?');
  }

  if (fieldsAffected.some(f => f.startsWith('story') || f.includes('Voice'))) {
    questions.push('Has the story subject or their descendants been consulted?');
  }

  return questions;
}
