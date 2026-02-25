// Town Completeness Report
// Usage: npx tsx src/scripts/reportCompleteness.ts
// Measures each town against the "Boston-level" completeness standard

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({ log: ['error'] });

// ============================================================================
// Completeness Spec — Boston-level standard
// ============================================================================

const COMPLETENESS_SPEC = {
  overview: { min: 200, label: 'Overview (whyMatters >= 200 chars)' },
  people: { min: 8, label: 'People (>= 8)' },
  places: { min: 6, label: 'Places (>= 6)' },
  events: { min: 10, label: 'Events (>= 10)' },
  stories: { min: 2, label: 'Stories (>= 2)' },
  sources: { min: 8, label: 'Sources (>= 8)' },
  sourcesTier1: { min: 3, label: 'Tier 1 Sources (>= 3)' },
  links: { min: 6, label: 'Town Links (>= 6)' },
  lessons: { min: 2, label: 'Lesson Plans (>= 2)' },
} as const;

const SPEC_COUNT = Object.keys(COMPLETENESS_SPEC).length;

interface TownCounts {
  id: string;
  slug: string;
  name: string;
  state: string;
  overviewLength: number;
  people: number;
  places: number;
  events: number;
  stories: number;
  sources: number;
  sourcesTier1: number;
  links: number;
  lessons: number;
  clusterId: string | null;
  clusterName: string | null;
}

interface CompletenessResult {
  town: TownCounts;
  met: string[];
  missing: string[];
  percentage: number;
}

async function getTownCounts(townId: string): Promise<Omit<TownCounts, 'id' | 'slug' | 'name' | 'state' | 'clusterId' | 'clusterName'>> {
  const [town, people, places, events, stories, sources, sourcesTier1, links, lessons] = await Promise.all([
    prisma.town.findUnique({ where: { id: townId }, select: { whyMatters: true } }),
    prisma.townPerson.count({ where: { townId } }),
    prisma.place.count({ where: { townId } }),
    prisma.event.count({ where: { townId } }),
    prisma.story.count({ where: { townId } }),
    prisma.sourceTown.count({ where: { townId } }),
    prisma.sourceTown.count({
      where: {
        townId,
        source: { credibilityTier: 'TIER1' },
      },
    }),
    prisma.townLink.count({ where: { fromTownId: townId } }),
    prisma.lessonPlan.count({ where: { townId } }),
  ]);

  return {
    overviewLength: town?.whyMatters?.length ?? 0,
    people,
    places,
    events,
    stories,
    sources,
    sourcesTier1,
    links,
    lessons,
  };
}

function evaluateCompleteness(counts: TownCounts): CompletenessResult {
  const met: string[] = [];
  const missing: string[] = [];

  const checks: { key: keyof typeof COMPLETENESS_SPEC; value: number }[] = [
    { key: 'overview', value: counts.overviewLength },
    { key: 'people', value: counts.people },
    { key: 'places', value: counts.places },
    { key: 'events', value: counts.events },
    { key: 'stories', value: counts.stories },
    { key: 'sources', value: counts.sources },
    { key: 'sourcesTier1', value: counts.sourcesTier1 },
    { key: 'links', value: counts.links },
    { key: 'lessons', value: counts.lessons },
  ];

  for (const check of checks) {
    const spec = COMPLETENESS_SPEC[check.key];
    if (check.value >= spec.min) {
      met.push(spec.label);
    } else {
      missing.push(`${spec.label} — have ${check.value}, need ${spec.min}`);
    }
  }

  return {
    town: counts,
    met,
    missing,
    percentage: Math.round((met.length / SPEC_COUNT) * 100),
  };
}

// ============================================================================
// Main
// ============================================================================

const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';

async function main() {
  console.log(`${BOLD}Town Completeness Report${RESET}`);
  console.log(`Standard: Boston-level (${SPEC_COUNT} criteria)`);
  console.log('='.repeat(70) + '\n');

  // Get all towns
  const towns = await prisma.town.findMany({
    select: {
      id: true,
      slug: true,
      name: true,
      state: true,
      clusterTowns: {
        select: {
          cluster: { select: { id: true, name: true } },
        },
        take: 1,
      },
    },
    orderBy: [{ state: 'asc' }, { name: 'asc' }],
  });

  // Boston baseline
  const bostonCounts = await getTownCounts('us-ma-boston');
  console.log(`${BOLD}Boston Baseline:${RESET}`);
  console.log(`  Overview: ${bostonCounts.overviewLength} chars`);
  console.log(`  People: ${bostonCounts.people}`);
  console.log(`  Places: ${bostonCounts.places}`);
  console.log(`  Events: ${bostonCounts.events}`);
  console.log(`  Stories: ${bostonCounts.stories}`);
  console.log(`  Sources: ${bostonCounts.sources} (${bostonCounts.sourcesTier1} Tier 1)`);
  console.log(`  Links: ${bostonCounts.links}`);
  console.log(`  Lessons: ${bostonCounts.lessons}`);
  console.log('');

  // Evaluate all towns
  const results: CompletenessResult[] = [];

  for (const town of towns) {
    const counts = await getTownCounts(town.id);
    const clusterInfo = town.clusterTowns[0]?.cluster ?? null;
    const townCounts: TownCounts = {
      id: town.id,
      slug: town.slug,
      name: town.name,
      state: town.state,
      ...counts,
      clusterId: clusterInfo?.id ?? null,
      clusterName: clusterInfo?.name ?? null,
    };
    results.push(evaluateCompleteness(townCounts));
  }

  // Sort by percentage descending
  results.sort((a, b) => b.percentage - a.percentage);

  // Per-town table
  console.log(`${BOLD}Per-Town Results:${RESET}`);
  const header = [
    'Town'.padEnd(30),
    'State'.padEnd(5),
    '%'.padStart(4),
    'Met'.padStart(4),
    'Missing',
  ].join('  ');
  console.log(header);
  console.log('-'.repeat(90));

  for (const r of results) {
    const pctColor = r.percentage >= 80 ? GREEN : r.percentage >= 40 ? YELLOW : RED;
    console.log([
      `${r.town.name}`.padEnd(30),
      r.town.state.padEnd(5),
      `${pctColor}${r.percentage.toString().padStart(3)}%${RESET}`,
      `${r.met.length}/${SPEC_COUNT}`.padStart(4),
      r.missing.length > 0 ? r.missing.length + ' gaps' : 'Complete',
    ].join('  '));
  }

  // Cluster rollups
  const clusterMap = new Map<string, { name: string; results: CompletenessResult[] }>();
  for (const r of results) {
    if (r.town.clusterName) {
      const key = r.town.clusterId!;
      if (!clusterMap.has(key)) {
        clusterMap.set(key, { name: r.town.clusterName, results: [] });
      }
      clusterMap.get(key)!.results.push(r);
    }
  }

  if (clusterMap.size > 0) {
    console.log(`\n${BOLD}Cluster Rollups:${RESET}`);
    console.log('-'.repeat(70));

    for (const [, { name, results: clusterResults }] of clusterMap) {
      const avg = Math.round(clusterResults.reduce((s, r) => s + r.percentage, 0) / clusterResults.length);
      const complete = clusterResults.filter((r) => r.percentage === 100).length;
      const pctColor = avg >= 80 ? GREEN : avg >= 40 ? YELLOW : RED;
      console.log(`  ${name.padEnd(45)} ${pctColor}${avg}% avg${RESET}  ${complete}/${clusterResults.length} complete`);
    }
  }

  // State rollups
  const stateMap = new Map<string, CompletenessResult[]>();
  for (const r of results) {
    const state = r.town.state;
    if (!stateMap.has(state)) stateMap.set(state, []);
    stateMap.get(state)!.push(r);
  }

  console.log(`\n${BOLD}State Rollups:${RESET}`);
  console.log('-'.repeat(70));
  for (const [state, stateResults] of stateMap) {
    const avg = Math.round(stateResults.reduce((s, r) => s + r.percentage, 0) / stateResults.length);
    const complete = stateResults.filter((r) => r.percentage === 100).length;
    const pctColor = avg >= 80 ? GREEN : avg >= 40 ? YELLOW : RED;
    console.log(`  ${state.padEnd(5)} ${pctColor}${avg.toString().padStart(3)}% avg${RESET}  ${complete}/${stateResults.length} complete  (${stateResults.length} towns)`);
  }

  // Summary
  const totalComplete = results.filter((r) => r.percentage === 100).length;
  const totalAvg = Math.round(results.reduce((s, r) => s + r.percentage, 0) / results.length);
  console.log(`\n${'='.repeat(70)}`);
  console.log(`${BOLD}Summary:${RESET} ${totalComplete}/${results.length} towns complete, ${totalAvg}% average completeness`);

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error('Report error:', e);
  process.exit(1);
});
