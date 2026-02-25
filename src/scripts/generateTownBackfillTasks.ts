// Town Backfill Task Generator
// Usage: npx tsx src/scripts/generateTownBackfillTasks.ts [--cluster=slug] [--state=XX] [--town=slug]
// Produces a structured TODO list of missing content for each town

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({ log: ['error'] });

const SPEC = {
  overview: 200,
  people: 8,
  places: 6,
  events: 10,
  stories: 2,
  sources: 8,
  sourcesTier1: 3,
  links: 6,
  lessons: 2,
};

interface BackfillTask {
  category: string;
  current: number;
  needed: number;
  gap: number;
  prompt: string;
}

interface TownBackfill {
  town: { id: string; slug: string; name: string; state: string };
  cluster: string | null;
  tasks: BackfillTask[];
  totalGap: number;
}

async function generateForTown(townId: string): Promise<TownBackfill | null> {
  const town = await prisma.town.findUnique({
    where: { id: townId },
    select: {
      id: true,
      slug: true,
      name: true,
      state: true,
      whyMatters: true,
      clusterTowns: {
        select: { cluster: { select: { name: true } } },
        take: 1,
      },
    },
  });

  if (!town) return null;

  const [people, places, events, stories, sources, sourcesTier1, links, lessons] = await Promise.all([
    prisma.townPerson.count({ where: { townId } }),
    prisma.place.count({ where: { townId } }),
    prisma.event.count({ where: { townId } }),
    prisma.story.count({ where: { townId } }),
    prisma.sourceTown.count({ where: { townId } }),
    prisma.sourceTown.count({ where: { townId, source: { credibilityTier: 'TIER1' } } }),
    prisma.townLink.count({ where: { fromTownId: townId } }),
    prisma.lessonPlan.count({ where: { townId } }),
  ]);

  const overviewLen = town.whyMatters?.length ?? 0;
  const tasks: BackfillTask[] = [];

  if (overviewLen < SPEC.overview) {
    tasks.push({
      category: 'Overview',
      current: overviewLen,
      needed: SPEC.overview,
      gap: SPEC.overview - overviewLen,
      prompt: `Expand whyMatters for ${town.name}, ${town.state} to at least ${SPEC.overview} characters. Current: ${overviewLen} chars. Write 2-3 paragraphs explaining this town's Revolutionary War significance.`,
    });
  }

  if (people < SPEC.people) {
    tasks.push({
      category: 'People',
      current: people,
      needed: SPEC.people,
      gap: SPEC.people - people,
      prompt: `Add ${SPEC.people - people} people entries for ${town.name}. Include historical figures with documented roles in the Revolution. Each needs: name, role, short bio, connection to the town.`,
    });
  }

  if (places < SPEC.places) {
    tasks.push({
      category: 'Places',
      current: places,
      needed: SPEC.places,
      gap: SPEC.places - places,
      prompt: `Add ${SPEC.places - places} place entries for ${town.name}. Include battlefields, historic houses, monuments, museums. Each needs: name, type, description, coordinates, visitor info.`,
    });
  }

  if (events < SPEC.events) {
    tasks.push({
      category: 'Events',
      current: events,
      needed: SPEC.events,
      gap: SPEC.events - events,
      prompt: `Add ${SPEC.events - events} event entries for ${town.name}. Include battles, political actions, social events from 1765-1783. Each needs: name, date, summary, significance weight.`,
    });
  }

  if (stories < SPEC.stories) {
    tasks.push({
      category: 'Stories',
      current: stories,
      needed: SPEC.stories,
      gap: SPEC.stories - stories,
      prompt: `Add ${SPEC.stories - stories} stories for ${town.name}. Include at least one historical voice and one modern voice. Each must cite 2+ sources.`,
    });
  }

  if (sources < SPEC.sources) {
    tasks.push({
      category: 'Sources',
      current: sources,
      needed: SPEC.sources,
      gap: SPEC.sources - sources,
      prompt: `Add ${SPEC.sources - sources} source entries for ${town.name}. Prioritize NPS docs, academic works, and institutional archives.`,
    });
  }

  if (sourcesTier1 < SPEC.sourcesTier1) {
    tasks.push({
      category: 'Tier 1 Sources',
      current: sourcesTier1,
      needed: SPEC.sourcesTier1,
      gap: SPEC.sourcesTier1 - sourcesTier1,
      prompt: `Add ${SPEC.sourcesTier1 - sourcesTier1} Tier 1 (institutional/academic) sources for ${town.name}.`,
    });
  }

  if (links < SPEC.links) {
    tasks.push({
      category: 'Town Links',
      current: links,
      needed: SPEC.links,
      gap: SPEC.links - links,
      prompt: `Add ${SPEC.links - links} town link entries for ${town.name}. Include cross-state connections via cluster bridges where relevant.`,
    });
  }

  if (lessons < SPEC.lessons) {
    tasks.push({
      category: 'Lesson Plans',
      current: lessons,
      needed: SPEC.lessons,
      gap: SPEC.lessons - lessons,
      prompt: `Add ${SPEC.lessons - lessons} lesson plans for ${town.name}. Include discussion questions and a primary source activity.`,
    });
  }

  return {
    town: { id: town.id, slug: town.slug, name: town.name, state: town.state },
    cluster: town.clusterTowns[0]?.cluster.name ?? null,
    tasks,
    totalGap: tasks.reduce((s, t) => s + t.gap, 0),
  };
}

// ============================================================================
// Main
// ============================================================================

const BOLD = '\x1b[1m';
const RESET = '\x1b[0m';

async function main() {
  const args = process.argv.slice(2);
  const clusterFilter = args.find((a) => a.startsWith('--cluster='))?.split('=')[1];
  const stateFilter = args.find((a) => a.startsWith('--state='))?.split('=')[1];
  const townFilter = args.find((a) => a.startsWith('--town='))?.split('=')[1];

  console.log(`${BOLD}Town Backfill Task Generator${RESET}`);
  console.log('='.repeat(60));

  let townIds: string[] = [];

  if (townFilter) {
    const town = await prisma.town.findUnique({ where: { slug: townFilter }, select: { id: true } });
    if (town) townIds = [town.id];
    else {
      console.error(`Town not found: ${townFilter}`);
      process.exit(1);
    }
  } else if (clusterFilter) {
    const cluster = await prisma.cluster.findUnique({
      where: { slug: clusterFilter },
      include: { clusterTowns: { select: { townId: true }, orderBy: { sortOrder: 'asc' } } },
    });
    if (!cluster) {
      console.error(`Cluster not found: ${clusterFilter}`);
      process.exit(1);
    }
    townIds = cluster.clusterTowns.map((ct) => ct.townId);
    console.log(`Cluster: ${cluster.name} (${townIds.length} towns)\n`);
  } else if (stateFilter) {
    const towns = await prisma.town.findMany({
      where: { state: stateFilter },
      select: { id: true },
      orderBy: { name: 'asc' },
    });
    townIds = towns.map((t) => t.id);
    console.log(`State: ${stateFilter} (${townIds.length} towns)\n`);
  } else {
    const towns = await prisma.town.findMany({
      select: { id: true },
      orderBy: [{ state: 'asc' }, { name: 'asc' }],
    });
    townIds = towns.map((t) => t.id);
    console.log(`All towns (${townIds.length})\n`);
  }

  let totalTasks = 0;
  for (const townId of townIds) {
    const result = await generateForTown(townId);
    if (!result || result.tasks.length === 0) continue;

    console.log(`\n${BOLD}${result.town.name}, ${result.town.state}${RESET}${result.cluster ? ` (${result.cluster})` : ''}`);
    console.log(`  ${result.tasks.length} categories need content:`);
    for (const task of result.tasks) {
      console.log(`  - ${task.category}: have ${task.current}, need ${task.needed} (+${task.gap})`);
    }
    totalTasks += result.tasks.length;
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`${BOLD}Total:${RESET} ${totalTasks} content gaps across ${townIds.length} towns`);

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error('Generator error:', e);
  process.exit(1);
});
