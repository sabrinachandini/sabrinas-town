// MODEL: Claude Sonnet
// Single-town source validation - detailed source list grouped by tier

import prisma from '../db/client.js';

const MINIMUMS = {
  total: 10,
  tier1: 3,
  tier2: 3,
  tier3: 1,
};

async function main() {
  const slug = process.argv[2];

  if (!slug) {
    console.log('Usage: npx tsx src/scripts/validateTownSources.ts <town-slug>');
    console.log('Example: npx tsx src/scripts/validateTownSources.ts lexington-ma');
    process.exit(1);
  }

  console.log('📖 Town Sources Validation');
  console.log('==========================\n');

  const town = await prisma.town.findUnique({
    where: { slug },
    select: { id: true, name: true, slug: true },
  });

  if (!town) {
    console.error(`Town not found: ${slug}`);
    process.exit(1);
  }

  console.log(`Town: ${town.name} (${town.slug})\n`);

  const sourceTowns = await prisma.sourceTown.findMany({
    where: { townId: town.id },
    include: {
      source: true,
    },
    orderBy: { source: { credibilityTier: 'asc' } },
  });

  // Group by tier
  const tiers: Record<string, typeof sourceTowns> = {
    TIER1: [],
    TIER2: [],
    TIER3: [],
    TODO: [],
  };

  for (const st of sourceTowns) {
    const tier = st.source.credibilityTier;
    if (!tiers[tier]) tiers[tier] = [];
    tiers[tier].push(st);
  }

  // Print sources by tier
  const tierLabels: Record<string, string> = {
    TIER1: 'TIER 1 — Institutional & Academic',
    TIER2: 'TIER 2 — Reputable Secondary',
    TIER3: 'TIER 3 — General Reference',
    TODO: 'TODO — Not Yet Evaluated',
  };

  for (const [tier, label] of Object.entries(tierLabels)) {
    const sources = tiers[tier] || [];
    console.log(`${label} (${sources.length})`);
    console.log('-'.repeat(50));
    if (sources.length === 0) {
      console.log('  (none)');
    } else {
      for (const st of sources) {
        const s = st.source;
        console.log(`  [${s.type}] ${s.title}`);
        console.log(`    Publisher: ${s.publisherOrHolder}`);
        if (s.url) console.log(`    URL: ${s.url}`);
        if (s.notes) console.log(`    Notes: ${s.notes.substring(0, 120)}${s.notes.length > 120 ? '...' : ''}`);
        console.log();
      }
    }
    console.log();
  }

  // Validation
  const total = sourceTowns.length;
  const tier1 = (tiers.TIER1 || []).length;
  const tier2 = (tiers.TIER2 || []).length;
  const tier3 = (tiers.TIER3 || []).length;

  console.log('Validation');
  console.log('==========');

  const checks = [
    { name: 'Total sources', actual: total, required: MINIMUMS.total },
    { name: 'Tier 1', actual: tier1, required: MINIMUMS.tier1 },
    { name: 'Tier 2', actual: tier2, required: MINIMUMS.tier2 },
    { name: 'Tier 3', actual: tier3, required: MINIMUMS.tier3 },
  ];

  let allPassed = true;
  for (const check of checks) {
    const passed = check.actual >= check.required;
    if (!passed) allPassed = false;
    const icon = passed ? '\x1b[32m✓\x1b[0m' : '\x1b[31m✗\x1b[0m';
    console.log(`  ${icon} ${check.name}: ${check.actual}/${check.required}`);
  }

  console.log();
  if (allPassed) {
    console.log('\x1b[32m✓ PASS\x1b[0m');
  } else {
    console.log('\x1b[31m✗ FAIL\x1b[0m');
  }

  await prisma.$disconnect();
  process.exit(allPassed ? 0 : 1);
}

main().catch((e) => {
  console.error('Error:', e);
  process.exit(1);
});
