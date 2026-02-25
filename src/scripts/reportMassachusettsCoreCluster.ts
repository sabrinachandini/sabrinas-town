/**
 * MODEL: Claude Sonnet
 *
 * Massachusetts Core Cluster Report
 *
 * Outputs flagship readiness for the MA Core Cluster towns:
 * - Boston
 * - Cambridge
 * - Arlington (Menotomy)
 * - Salem
 * - Marblehead
 *
 * Also includes anchor towns for reference:
 * - Lexington
 * - Concord
 *
 * Usage: npx tsx src/scripts/reportMassachusettsCoreCluster.ts
 */

import prisma from '../db/client.js';
import { validateFlagshipTown } from './validateFlagshipTown.js';

// MA Core Cluster town slugs
const MA_CORE_CLUSTER = [
  'boston-ma',
  'cambridge-ma',
  'arlington-ma',
  'salem-ma',
  'marblehead-ma',
];

// Anchor towns (already flagship)
const ANCHOR_TOWNS = [
  'lexington-ma',
  'concord-ma',
];

interface ClusterReport {
  clusterName: string;
  generatedAt: string;
  towns: TownReport[];
  summary: {
    total: number;
    passing: number;
    failing: number;
    clusterReady: boolean;
  };
}

interface TownReport {
  slug: string;
  name: string;
  isAnchor: boolean;
  passed: boolean;
  metrics: {
    events: number;
    people: number;
    themes: number;
    sources: number;
    stories: number;
    itineraries: number;
    townLinks: number;
    places: number;
    featuredPlaces: number;
  };
  failureCount: number;
  topFailures: string[];
}

async function generateClusterReport(): Promise<ClusterReport> {
  const allSlugs = [...ANCHOR_TOWNS, ...MA_CORE_CLUSTER];
  const towns: TownReport[] = [];

  for (const slug of allSlugs) {
    const result = await validateFlagshipTown(slug);

    if (!result) {
      towns.push({
        slug,
        name: '(not found)',
        isAnchor: ANCHOR_TOWNS.includes(slug),
        passed: false,
        metrics: {
          events: 0,
          people: 0,
          themes: 0,
          sources: 0,
          stories: 0,
          itineraries: 0,
          townLinks: 0,
          places: 0,
          featuredPlaces: 0,
        },
        failureCount: 1,
        topFailures: ['Town not found in database'],
      });
      continue;
    }

    towns.push({
      slug: result.slug,
      name: result.townName,
      isAnchor: ANCHOR_TOWNS.includes(slug),
      passed: result.passed,
      metrics: {
        events: result.metrics.events.count,
        people: result.metrics.people.count,
        themes: result.metrics.themes.count,
        sources: result.metrics.sources.count,
        stories: result.metrics.stories.count,
        itineraries: result.metrics.itineraries.count,
        townLinks: result.metrics.townLinks.count,
        places: result.metrics.places.count,
        featuredPlaces: result.metrics.featuredPlaces.count,
      },
      failureCount: result.failures.length,
      topFailures: result.failures.slice(0, 3),
    });
  }

  const clusterTowns = towns.filter(t => !t.isAnchor);
  const passing = clusterTowns.filter(t => t.passed).length;
  const failing = clusterTowns.filter(t => !t.passed).length;

  return {
    clusterName: 'Massachusetts Core Cluster',
    generatedAt: new Date().toISOString(),
    towns,
    summary: {
      total: clusterTowns.length,
      passing,
      failing,
      clusterReady: failing === 0,
    },
  };
}

function printReport(report: ClusterReport): void {
  console.log('\n📊 Massachusetts Core Cluster Report');
  console.log('=====================================');
  console.log(`Generated: ${new Date(report.generatedAt).toLocaleString()}\n`);

  // Anchor towns section
  console.log('🏛️  Anchor Towns (Reference)');
  console.log('─'.repeat(80));
  console.log('Town            Events People Themes Sources Stories Itin  Links Places  Status');
  console.log('─'.repeat(80));

  const anchorTowns = report.towns.filter(t => t.isAnchor);
  for (const t of anchorTowns) {
    const status = t.passed ? '✓ PASS' : '✗ FAIL';
    console.log(
      `${t.name.padEnd(14)} ${String(t.metrics.events).padStart(6)} ${String(t.metrics.people).padStart(6)} ${String(t.metrics.themes).padStart(6)} ${String(t.metrics.sources).padStart(7)} ${String(t.metrics.stories).padStart(7)} ${String(t.metrics.itineraries).padStart(4)} ${String(t.metrics.townLinks).padStart(6)} ${String(t.metrics.places).padStart(6)}  ${status}`
    );
  }

  // Cluster towns section
  console.log('\n🎯 Core Cluster Towns');
  console.log('─'.repeat(80));
  console.log('Town            Events People Themes Sources Stories Itin  Links Places  Status');
  console.log('─'.repeat(80));

  const clusterTowns = report.towns.filter(t => !t.isAnchor);
  for (const t of clusterTowns) {
    const status = t.passed ? '✓ PASS' : '✗ FAIL';
    const statusColor = t.passed ? '' : '⚠ ';
    console.log(
      `${statusColor}${t.name.padEnd(14)} ${String(t.metrics.events).padStart(6)} ${String(t.metrics.people).padStart(6)} ${String(t.metrics.themes).padStart(6)} ${String(t.metrics.sources).padStart(7)} ${String(t.metrics.stories).padStart(7)} ${String(t.metrics.itineraries).padStart(4)} ${String(t.metrics.townLinks).padStart(6)} ${String(t.metrics.places).padStart(6)}  ${status}`
    );
  }

  // Summary
  console.log('\n📈 Summary');
  console.log('─'.repeat(40));
  console.log(`Cluster towns: ${report.summary.total}`);
  console.log(`Passing: ${report.summary.passing}`);
  console.log(`Failing: ${report.summary.failing}`);

  const readyStatus = report.summary.clusterReady ? '\x1b[32m✓ READY\x1b[0m' : '\x1b[31m✗ NOT READY\x1b[0m';
  console.log(`\nCluster Status: ${readyStatus}`);

  // Detailed failures
  const failingTowns = clusterTowns.filter(t => !t.passed);
  if (failingTowns.length > 0) {
    console.log('\n⚠ Towns Needing Work');
    console.log('─'.repeat(40));

    for (const t of failingTowns) {
      console.log(`\n${t.name} (${t.failureCount} failures):`);
      for (const failure of t.topFailures) {
        console.log(`  - ${failure}`);
      }
    }
  }

  // Requirements reminder
  console.log('\n📋 Flagship Requirements');
  console.log('─'.repeat(40));
  console.log('  Events: ≥8       People: ≥8 (≥2 lesser-known)');
  console.log('  Themes: ≥8       Sources: ≥12');
  console.log('  Stories: ≥6 (≥2 modern)   Itineraries: ≥2');
  console.log('  Links: ≥10       Places: ≥15 (≥5 featured)');
  console.log('  + Teacher module viable + Score breakdown present');
}

async function main() {
  const report = await generateClusterReport();
  printReport(report);

  await prisma.$disconnect();

  // Exit with error if cluster not ready
  process.exit(report.summary.clusterReady ? 0 : 1);
}

main().catch((e) => {
  console.error('Error:', e);
  process.exit(1);
});
