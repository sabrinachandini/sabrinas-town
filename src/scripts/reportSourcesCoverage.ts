// MODEL: Claude Sonnet
// Sources coverage report - checks all 75 towns for source data completeness

import prisma from '../db/client.js';
import { TOP_75_TOWNS } from '../data/top75.js';

const PASS_CRITERIA = {
  total: 10,
  tier1: 3,
  tier2: 3,
  tier3: 1,
};

interface TownCoverage {
  name: string;
  slug: string;
  total: number;
  tier1: number;
  tier2: number;
  tier3: number;
  todo: number;
  passed: boolean;
}

async function main() {
  console.log('📊 Sources Coverage Report');
  console.log('==========================\n');

  const results: TownCoverage[] = [];

  for (const town of TOP_75_TOWNS) {
    const sourceTowns = await prisma.sourceTown.findMany({
      where: { townId: town.id },
      include: { source: { select: { credibilityTier: true } } },
    });

    const total = sourceTowns.length;
    const tier1 = sourceTowns.filter((st) => st.source.credibilityTier === 'TIER1').length;
    const tier2 = sourceTowns.filter((st) => st.source.credibilityTier === 'TIER2').length;
    const tier3 = sourceTowns.filter((st) => st.source.credibilityTier === 'TIER3').length;
    const todo = sourceTowns.filter((st) => st.source.credibilityTier === 'TODO').length;

    const passed =
      total >= PASS_CRITERIA.total &&
      tier1 >= PASS_CRITERIA.tier1 &&
      tier2 >= PASS_CRITERIA.tier2 &&
      tier3 >= PASS_CRITERIA.tier3;

    results.push({ name: town.name, slug: town.slug, total, tier1, tier2, tier3, todo, passed });
  }

  // Print table header
  const header = [
    'Town'.padEnd(25),
    'Slug'.padEnd(25),
    'Total'.padStart(5),
    'T1'.padStart(4),
    'T2'.padStart(4),
    'T3'.padStart(4),
    'TODO'.padStart(5),
    'Status'.padStart(6),
  ].join('  ');

  console.log(header);
  console.log('-'.repeat(header.length));

  for (const r of results) {
    const status = r.passed ? '\x1b[32mPASS\x1b[0m' : '\x1b[31mFAIL\x1b[0m';
    console.log(
      [
        r.name.padEnd(25),
        r.slug.padEnd(25),
        String(r.total).padStart(5),
        String(r.tier1).padStart(4),
        String(r.tier2).padStart(4),
        String(r.tier3).padStart(4),
        String(r.todo).padStart(5),
        status.padStart(6 + 9), // extra for ANSI escape codes
      ].join('  ')
    );
  }

  // Summary
  const passing = results.filter((r) => r.passed).length;
  const total = results.length;
  const statusColor = passing === total ? '\x1b[32m' : '\x1b[33m';
  const reset = '\x1b[0m';

  console.log('\n' + '-'.repeat(header.length));
  console.log(`${statusColor}${passing}/${total} towns passing${reset}`);
  console.log(`\nPass criteria: total >= ${PASS_CRITERIA.total}, T1 >= ${PASS_CRITERIA.tier1}, T2 >= ${PASS_CRITERIA.tier2}, T3 >= ${PASS_CRITERIA.tier3}`);
}

main()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
