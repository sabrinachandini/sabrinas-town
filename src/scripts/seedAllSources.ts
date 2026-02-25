// MODEL: Claude Sonnet
// Standalone production seed script for all 75-town sources
// Usage: npx tsx src/scripts/seedAllSources.ts

import prisma from '../db/client.js';
import { Prisma } from '@prisma/client';
import { lexingtonSources, LEXINGTON_SHARED_SOURCE_IDS } from '../seed/lexingtonSources.js';
import { concordSources } from '../seed/concord.js';
import { bostonSources } from '../seed/boston.js';
import { cambridgeSources } from '../seed/cambridge.js';
import { arlingtonSources } from '../seed/arlington.js';
import {
  salemSources,
  marbleheadSources,
  plymouthSources,
  worcesterSources,
  springfieldSources,
} from '../seed/massachusetts/sources/index.js';
import {
  newYorkSources,
  pennsylvaniaSources,
  newJerseySources,
  virginiaSources,
  southCarolinaSources,
  northCarolinaSources,
  georgiaSources,
  connecticutSources,
  rhodeIslandSources,
  newHampshireSources,
  marylandSources,
  delawareSources,
  vermontSources,
  maineSources,
  frontierSources,
} from '../seed/sources/index.js';

type TownSourceMap = Record<string, { sources: Prisma.SourceCreateInput[]; sharedIds?: string[] }>;

async function upsertSourcesAndLink(
  townId: string,
  sources: Prisma.SourceCreateInput[],
  sharedSourceIds: string[] = []
) {
  for (const source of sources) {
    await prisma.source.upsert({
      where: { id: source.id! },
      update: source,
      create: source,
    });
  }

  const allSourceIds = [...sources.map((s) => s.id!), ...sharedSourceIds];

  let linked = 0;
  for (const sourceId of allSourceIds) {
    const existing = await prisma.sourceTown.findFirst({
      where: { sourceId, townId },
    });
    if (!existing) {
      await prisma.sourceTown.create({
        data: {
          source: { connect: { id: sourceId } },
          town: { connect: { id: townId } },
        },
      });
      linked++;
    }
  }

  return { upserted: sources.length, linked: allSourceIds.length, newLinks: linked };
}

async function seedTownSourceMap(regionName: string, sourceMap: TownSourceMap) {
  console.log(`\n  ${regionName}:`);
  for (const [townId, { sources, sharedIds }] of Object.entries(sourceMap)) {
    const result = await upsertSourcesAndLink(townId, sources, sharedIds || []);
    console.log(`    ${townId}: ${result.upserted} sources, ${result.newLinks} new links`);
  }
}

async function main() {
  console.log('📖 Seeding All 75-Town Sources');
  console.log('===============================\n');

  // Existing flagship towns
  console.log('Flagship towns:');

  const lexResult = await upsertSourcesAndLink('us-ma-lexington', lexingtonSources, LEXINGTON_SHARED_SOURCE_IDS);
  console.log(`  us-ma-lexington: ${lexResult.upserted} sources, ${lexResult.newLinks} new links`);

  const concResult = await upsertSourcesAndLink('us-ma-concord', concordSources);
  console.log(`  us-ma-concord: ${concResult.upserted} sources, ${concResult.newLinks} new links`);

  const bosResult = await upsertSourcesAndLink('us-ma-boston', bostonSources);
  console.log(`  us-ma-boston: ${bosResult.upserted} sources, ${bosResult.newLinks} new links`);

  const camResult = await upsertSourcesAndLink('us-ma-cambridge', cambridgeSources);
  console.log(`  us-ma-cambridge: ${camResult.upserted} sources, ${camResult.newLinks} new links`);

  const arlResult = await upsertSourcesAndLink('us-ma-arlington', arlingtonSources);
  console.log(`  us-ma-arlington: ${arlResult.upserted} sources, ${arlResult.newLinks} new links`);

  // Phase 2 MA towns
  console.log('\nMassachusetts (remaining):');
  const maTowns: [string, Prisma.SourceCreateInput[]][] = [
    ['us-ma-salem', salemSources],
    ['us-ma-marblehead', marbleheadSources],
    ['us-ma-plymouth', plymouthSources],
    ['us-ma-worcester', worcesterSources],
    ['us-ma-springfield', springfieldSources],
  ];
  for (const [townId, sources] of maTowns) {
    const result = await upsertSourcesAndLink(townId, sources);
    console.log(`  ${townId}: ${result.upserted} sources, ${result.newLinks} new links`);
  }

  // Phase 3 regional sources
  await seedTownSourceMap('New York', newYorkSources);
  await seedTownSourceMap('Pennsylvania', pennsylvaniaSources);
  await seedTownSourceMap('New Jersey', newJerseySources);
  await seedTownSourceMap('Virginia', virginiaSources);
  await seedTownSourceMap('South Carolina', southCarolinaSources);
  await seedTownSourceMap('North Carolina', northCarolinaSources);
  await seedTownSourceMap('Georgia', georgiaSources);
  await seedTownSourceMap('Connecticut', connecticutSources);
  await seedTownSourceMap('Rhode Island', rhodeIslandSources);
  await seedTownSourceMap('New Hampshire', newHampshireSources);
  await seedTownSourceMap('Maryland', marylandSources);
  await seedTownSourceMap('Delaware', delawareSources);
  await seedTownSourceMap('Vermont', vermontSources);
  await seedTownSourceMap('Maine', maineSources);
  await seedTownSourceMap('Frontier', frontierSources);

  // Summary
  const totalSources = await prisma.source.count();
  const totalLinks = await prisma.sourceTown.count();
  const townsWithSources = await prisma.sourceTown.groupBy({
    by: ['townId'],
    _count: true,
  });

  console.log('\n===============================');
  console.log(`Total sources in DB: ${totalSources}`);
  console.log(`Total source-town links: ${totalLinks}`);
  console.log(`Towns with sources: ${townsWithSources.length}`);
  console.log('===============================');
}

main()
  .catch((e) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
