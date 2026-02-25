// Usage: npx tsx src/scripts/reportOrgAnalytics.ts <orgSlug> [--range=7d|30d]
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const args = process.argv.slice(2);
  const slug = args.find((a) => !a.startsWith('--'));
  const rangeArg = args.find((a) => a.startsWith('--range='));
  const range = rangeArg?.split('=')[1] === '30d' ? '30d' : '7d';

  if (!slug) {
    console.error('Usage: npx tsx src/scripts/reportOrgAnalytics.ts <orgSlug> [--range=7d|30d]');
    process.exit(1);
  }

  const org = await prisma.organization.findUnique({
    where: { slug },
    include: {
      subscription: true,
      townStewardships: {
        where: { status: 'ACTIVE' },
        include: { town: { select: { name: true, slug: true } } },
      },
    },
  });

  if (!org) {
    console.error(`Org "${slug}" not found`);
    process.exit(1);
  }

  const days = range === '30d' ? 30 : 7;
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  const stewardedTownIds = org.townStewardships.map((s) => s.townId);
  const townIdToName: Record<string, string> = {};
  for (const s of org.townStewardships) {
    townIdToName[s.townId] = s.town.name;
  }

  const events = await prisma.analyticsEvent.findMany({
    where: {
      orgId: org.id,
      timestamp: { gte: startDate },
      OR: [
        { townId: { in: stewardedTownIds } },
        { townId: null },
      ],
    },
    select: {
      eventType: true,
      townId: true,
      timestamp: true,
    },
  });

  console.log(`\n=== Org Analytics: ${org.name} (${org.slug}) ===`);
  console.log(`  Period: last ${days} days (since ${startDate.toISOString().slice(0, 10)})`);
  console.log(`  Subscription: ${org.subscription?.status || 'none'}`);

  console.log(`\n=== Stewarded Towns (${org.townStewardships.length}) ===`);
  for (const s of org.townStewardships) {
    console.log(`  ${s.town.name} (${s.town.slug})`);
  }

  // Totals by event type
  const byType: Record<string, number> = {};
  for (const e of events) {
    byType[e.eventType] = (byType[e.eventType] || 0) + 1;
  }

  console.log(`\n=== Totals by Event Type (${events.length} total) ===`);
  for (const [type, count] of Object.entries(byType).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${type}: ${count}`);
  }

  // Totals by town
  const byTown: Record<string, number> = {};
  for (const e of events) {
    if (e.townId && townIdToName[e.townId]) {
      const name = townIdToName[e.townId];
      byTown[name] = (byTown[name] || 0) + 1;
    }
  }

  console.log(`\n=== Totals by Town ===`);
  for (const [name, count] of Object.entries(byTown).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${name}: ${count}`);
  }

  // Daily counts
  const dailyMap: Record<string, number> = {};
  for (const e of events) {
    const day = e.timestamp.toISOString().slice(0, 10);
    dailyMap[day] = (dailyMap[day] || 0) + 1;
  }

  console.log(`\n=== Daily Counts ===`);
  for (const [date, count] of Object.entries(dailyMap).sort(([a], [b]) => a.localeCompare(b))) {
    console.log(`  ${date}: ${count}`);
  }

  console.log('');
  await prisma.$disconnect();
}

main();
