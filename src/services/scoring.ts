// MODEL: Claude Sonnet
// Scoring service for computing town composite scores

import { Prisma } from '@prisma/client';
import prisma from '../db/client.js';
import {
  DEFAULT_WEIGHTS,
  SCORE_CONFIG_VERSION,
  getScoreTier,
  type ScoreBreakdown,
  type ScoreHint,
  type ScoringWeights,
} from '../config/scoring.js';

/**
 * Compute the composite score for a town and store it
 */
export async function computeTownScore(townId: string): Promise<{
  compositeScore: number;
  breakdown: ScoreBreakdown;
  snapshotId: string;
}> {
  // Fetch all data needed for scoring
  const town = await prisma.town.findUnique({
    where: { id: townId },
    include: {
      events: {
        include: {
          eventPeople: true,
          sourceEvents: { include: { source: true } },
        },
      },
      stories: true,
      outgoingLinks: true,
      incomingLinks: true,
      townThemes: true,
      routeStops: true,
      sourceTowns: { include: { source: true } },
    },
  });

  if (!town) {
    throw new Error(`Town not found: ${townId}`);
  }

  // Compute each category score
  const historicalScore = computeHistoricalScore(town);
  const preservationScore = computePreservationScore(town);
  const accessibilityScore = computeAccessibilityScore(town);
  const interpretationScore = computeInterpretationScore(town);
  const interconnectionScore = computeInterconnectionScore(town);
  const storiesScore = computeStoriesScore(town);
  const sourcesScore = computeSourcesScore(town);

  // Weighted composite
  const compositeScore =
    historicalScore.score * DEFAULT_WEIGHTS.historical +
    preservationScore.score * DEFAULT_WEIGHTS.preservation +
    accessibilityScore.score * DEFAULT_WEIGHTS.accessibility +
    interpretationScore.score * DEFAULT_WEIGHTS.interpretation +
    interconnectionScore.score * DEFAULT_WEIGHTS.interconnection +
    storiesScore.score * DEFAULT_WEIGHTS.stories +
    sourcesScore.score * DEFAULT_WEIGHTS.sources;

  // Generate improvement hints
  const hints = generateHints({
    historical: historicalScore,
    preservation: preservationScore,
    accessibility: accessibilityScore,
    interpretation: interpretationScore,
    interconnection: interconnectionScore,
    stories: storiesScore,
    sources: sourcesScore,
  });

  const breakdown: ScoreBreakdown = {
    historical: historicalScore,
    preservation: preservationScore,
    accessibility: accessibilityScore,
    interpretation: interpretationScore,
    interconnection: interconnectionScore,
    stories: storiesScore,
    sources: sourcesScore,
    hints,
  };

  // Update town record
  await prisma.town.update({
    where: { id: townId },
    data: {
      compositeScore: Math.round(compositeScore * 100) / 100,
      scoreBreakdown: breakdown as unknown as Prisma.InputJsonValue,
      scoreConfigVersion: SCORE_CONFIG_VERSION,
      lastUpdatedAt: new Date(),
    },
  });

  // Create snapshot
  const snapshot = await prisma.scoreSnapshot.create({
    data: {
      townId,
      compositeScore: Math.round(compositeScore * 100) / 100,
      breakdown: breakdown as unknown as Prisma.InputJsonValue,
      configVersion: SCORE_CONFIG_VERSION,
    },
  });

  return {
    compositeScore: Math.round(compositeScore * 100) / 100,
    breakdown,
    snapshotId: snapshot.id,
  };
}

interface CategoryScore {
  score: number;
  subfactors: Record<string, unknown>;
}

function computeHistoricalScore(town: TownWithRelations): CategoryScore {
  const events = town.events || [];

  // Compute subfactors
  const avgEventSignificance =
    events.length > 0
      ? events.reduce((sum, e) => sum + e.significanceWeight, 0) / events.length
      : 0;

  const personCount = new Set(
    events.flatMap((e) => e.eventPeople.map((ep) => ep.personId))
  ).size;

  const pivotalEvents = events.filter((e) => e.significanceWeight >= 75).length;

  const primarySources = events.reduce((count, e) => {
    return (
      count +
      e.sourceEvents.filter((se) => se.source.type === 'PRIMARY').length
    );
  }, 0);

  // Score formula (weighted subfactors)
  const score = Math.min(
    100,
    avgEventSignificance * 0.4 +
      Math.min(personCount * 5, 30) +
      pivotalEvents * 10 +
      Math.min(primarySources * 3, 20)
  );

  return {
    score: Math.round(score),
    subfactors: {
      eventSignificance: avgEventSignificance,
      personSignificance: personCount,
      pivotalMoments: pivotalEvents,
      primarySourceCount: primarySources,
    },
  };
}

function computePreservationScore(town: TownWithRelations): CategoryScore {
  // TODO: These would come from tourismInfo or dedicated fields
  const tourismInfo = (town.tourismInfo as Record<string, unknown>) || {};

  const npsDesignation = Boolean(tourismInfo.npsDesignation);
  const stateHistoricSite = Boolean(tourismInfo.stateHistoricSite);
  const preservationQuality = (tourismInfo.preservationQuality as number) || 50;
  const activePreservationOrg = Boolean(tourismInfo.activePreservationOrg);

  const score =
    (npsDesignation ? 30 : 0) +
    (stateHistoricSite ? 15 : 0) +
    preservationQuality * 0.4 +
    (activePreservationOrg ? 15 : 0);

  return {
    score: Math.min(100, Math.round(score)),
    subfactors: {
      npsDesignation,
      stateHistoricSite,
      preservationQuality,
      activePreservationOrg,
    },
  };
}

function computeAccessibilityScore(town: TownWithRelations): CategoryScore {
  const tourismInfo = (town.tourismInfo as Record<string, unknown>) || {};

  const walkabilityScore = (tourismInfo.walkabilityScore as number) || 50;
  const publicTransitAccess = Boolean(tourismInfo.publicTransitAccess);
  const adaCompliance = (tourismInfo.adaCompliance as number) || 50;
  const parkingAvailable = Boolean(tourismInfo.parkingAvailable);
  const nearMajorCity = Boolean(tourismInfo.nearMajorCity);

  const score =
    walkabilityScore * 0.3 +
    (publicTransitAccess ? 20 : 0) +
    adaCompliance * 0.2 +
    (parkingAvailable ? 15 : 0) +
    (nearMajorCity ? 15 : 0);

  return {
    score: Math.min(100, Math.round(score)),
    subfactors: {
      walkabilityScore,
      publicTransitAccess,
      adaCompliance,
      parkingAvailable,
      nearMajorCity,
    },
  };
}

function computeInterpretationScore(town: TownWithRelations): CategoryScore {
  const tourismInfo = (town.tourismInfo as Record<string, unknown>) || {};

  const visitorCenterQuality =
    (tourismInfo.visitorCenterQuality as number) || 50;
  const guidedToursAvailable = Boolean(tourismInfo.guidedToursAvailable);
  const digitalResourcesQuality =
    (tourismInfo.digitalResourcesQuality as number) || 50;
  const educationalProgramsCount =
    (tourismInfo.educationalProgramsCount as number) || 0;

  const score =
    visitorCenterQuality * 0.3 +
    (guidedToursAvailable ? 20 : 0) +
    digitalResourcesQuality * 0.25 +
    Math.min(educationalProgramsCount * 5, 25);

  return {
    score: Math.min(100, Math.round(score)),
    subfactors: {
      visitorCenterQuality,
      guidedToursAvailable,
      digitalResourcesQuality,
      educationalProgramsCount,
    },
  };
}

function computeInterconnectionScore(town: TownWithRelations): CategoryScore {
  const outgoingLinks = town.outgoingLinks || [];
  const incomingLinks = town.incomingLinks || [];
  const routeStops = town.routeStops || [];

  const totalLinks = outgoingLinks.length + incomingLinks.length;
  const avgLinkWeight =
    totalLinks > 0
      ? [...outgoingLinks, ...incomingLinks].reduce((sum, l) => sum + l.weight, 0) /
        totalLinks
      : 0;
  const routeCount = new Set(routeStops.map((rs) => rs.routeId)).size;

  // Events shared with other towns (via EventTown)
  const sharedEventsCount = town.events?.filter(
    (e) => e.significanceWeight >= 60
  ).length || 0;

  const score =
    Math.min(totalLinks * 8, 40) +
    (avgLinkWeight / 100) * 20 +
    Math.min(routeCount * 15, 30) +
    Math.min(sharedEventsCount * 2, 10);

  return {
    score: Math.min(100, Math.round(score)),
    subfactors: {
      linkedTownCount: totalLinks,
      avgLinkWeight,
      routeParticipation: routeCount,
      sharedEventsCount,
    },
  };
}

function computeStoriesScore(town: TownWithRelations): CategoryScore {
  const stories = town.stories || [];

  const totalStoryCount = stories.length;
  const verifiedStoryCount = stories.filter(
    (s) => s.verificationStatus === 'VERIFIED'
  ).length;
  const lesserKnownVoicesCount = stories.filter(
    (s) =>
      s.storyType === 'HISTORICAL_VOICE' &&
      s.verificationStatus !== 'VERIFIED' // Lesser-known often not fully verified
  ).length;
  const modernVoicesCount = stories.filter(
    (s) => s.storyType === 'MODERN_VOICE'
  ).length;

  const score =
    Math.min(totalStoryCount * 10, 40) +
    Math.min(verifiedStoryCount * 10, 30) +
    Math.min(lesserKnownVoicesCount * 10, 15) +
    Math.min(modernVoicesCount * 10, 15);

  return {
    score: Math.min(100, Math.round(score)),
    subfactors: {
      totalStoryCount,
      verifiedStoryCount,
      lesserKnownVoicesCount,
      modernVoicesCount,
    },
  };
}

function computeSourcesScore(town: TownWithRelations): CategoryScore {
  const sourceTowns = town.sourceTowns || [];
  const eventSources = town.events?.flatMap((e) => e.sourceEvents) || [];

  const allSources = [
    ...sourceTowns.map((st) => st.source),
    ...eventSources.map((se) => se.source),
  ];

  const tier1Count = allSources.filter((s) => s.credibilityTier === 'TIER1').length;
  const tier2Count = allSources.filter((s) => s.credibilityTier === 'TIER2').length;
  const primaryCount = allSources.filter((s) => s.type === 'PRIMARY').length;
  const institutionalCount = allSources.filter(
    (s) => s.type === 'INSTITUTIONAL'
  ).length;

  const score =
    Math.min(tier1Count * 10, 40) +
    Math.min(tier2Count * 5, 25) +
    Math.min(primaryCount * 8, 20) +
    Math.min(institutionalCount * 5, 15);

  return {
    score: Math.min(100, Math.round(score)),
    subfactors: {
      tier1SourceCount: tier1Count,
      tier2SourceCount: tier2Count,
      primarySourceCount: primaryCount,
      institutionalSourceCount: institutionalCount,
    },
  };
}

function generateHints(scores: Record<string, CategoryScore>): ScoreHint[] {
  const hints: ScoreHint[] = [];

  // Lowest scoring categories
  const sortedCategories = Object.entries(scores).sort(
    ([, a], [, b]) => a.score - b.score
  );

  for (const [category, data] of sortedCategories.slice(0, 3)) {
    if (data.score < 60) {
      hints.push(generateHintForCategory(category as keyof typeof scores, data));
    }
  }

  return hints;
}

function generateHintForCategory(
  category: string,
  data: CategoryScore
): ScoreHint {
  const suggestions: Record<string, string> = {
    historical:
      'Add more events with high significance weights or link to more notable historical figures',
    preservation:
      'Document NPS or state historic designations; assess and record preservation quality',
    accessibility:
      'Update walkability score, document public transit options and ADA compliance',
    interpretation:
      'Add visitor center quality assessment, document guided tours and educational programs',
    interconnection:
      'Create explicit links to related towns; join more historical routes',
    stories:
      'Add verified stories, especially lesser-known voices and modern perspectives',
    sources:
      'Add Tier 1 institutional sources; link primary documents to events',
  };

  const weight = DEFAULT_WEIGHTS[category as keyof ScoringWeights] || 0.1;
  return {
    category: category as keyof ScoringWeights,
    direction: 'raise' as const,
    suggestion: suggestions[category] || `Improve ${category} score by adding more data`,
    potentialImpact: Math.round((100 - data.score) * weight * 0.5),
  };
}

/**
 * Recompute scores for all towns
 */
export async function recomputeAllScores(): Promise<{
  updated: number;
  errors: string[];
}> {
  const towns = await prisma.town.findMany({ select: { id: true } });
  const errors: string[] = [];
  let updated = 0;

  for (const town of towns) {
    try {
      await computeTownScore(town.id);
      updated++;
    } catch (error) {
      errors.push(`${town.id}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  return { updated, errors };
}

// Type for town with all relations needed for scoring
type TownWithRelations = Prisma.TownGetPayload<{
  include: {
    events: {
      include: {
        eventPeople: true;
        sourceEvents: { include: { source: true } };
      };
    };
    stories: true;
    outgoingLinks: true;
    incomingLinks: true;
    townThemes: true;
    routeStops: true;
    sourceTowns: { include: { source: true } };
  };
}>;

export { getScoreTier };
