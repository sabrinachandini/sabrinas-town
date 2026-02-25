/**
 * Massachusetts Places Report
 *
 * Outputs a summary of places seeded for each Massachusetts town:
 * - Total places count
 * - Count by PlaceType category
 * - Number of featured places
 * - "Meets Minimum?" status
 */

import prisma from '../db/client.js';

// Minimum place thresholds per town (from plan)
const MINIMUM_THRESHOLDS: Record<string, number> = {
  'us-ma-lexington': 20,
  'us-ma-concord': 20,
  'us-ma-boston': 30,
  'us-ma-cambridge': 15,
  'us-ma-salem': 15,
  'us-ma-plymouth': 15,
  'us-ma-arlington': 10,
  'us-ma-marblehead': 10,
  'us-ma-worcester': 10,
  'us-ma-springfield': 10,
};

interface TownPlaceStats {
  townId: string;
  townName: string;
  total: number;
  featured: number;
  byType: Record<string, number>;
  minimum: number;
  meetsMinimum: boolean;
}

async function main() {
  console.log('📊 Massachusetts Places Report');
  console.log('================================\n');

  const maTownIds = Object.keys(MINIMUM_THRESHOLDS);

  const stats: TownPlaceStats[] = [];

  for (const townId of maTownIds) {
    const town = await prisma.town.findUnique({
      where: { id: townId },
      select: { name: true },
    });

    if (!town) {
      stats.push({
        townId,
        townName: '(not found)',
        total: 0,
        featured: 0,
        byType: {},
        minimum: MINIMUM_THRESHOLDS[townId],
        meetsMinimum: false,
      });
      continue;
    }

    const places = await prisma.place.findMany({
      where: { townId },
      select: { placeType: true, featured: true },
    });

    const byType: Record<string, number> = {};
    let featuredCount = 0;

    for (const place of places) {
      byType[place.placeType] = (byType[place.placeType] || 0) + 1;
      if (place.featured) featuredCount++;
    }

    stats.push({
      townId,
      townName: town.name,
      total: places.length,
      featured: featuredCount,
      byType,
      minimum: MINIMUM_THRESHOLDS[townId],
      meetsMinimum: places.length >= MINIMUM_THRESHOLDS[townId],
    });
  }

  // Sort by total descending
  stats.sort((a, b) => b.total - a.total);

  // Output table
  console.log('Town                     Total  Featured  Min  Status');
  console.log('─'.repeat(60));

  let totalPlaces = 0;
  let totalFeatured = 0;
  let meetingMinimum = 0;

  for (const s of stats) {
    const status = s.meetsMinimum ? '✓' : '✗';
    const statusColor = s.meetsMinimum ? '' : '⚠ ';
    console.log(
      `${statusColor}${s.townName.padEnd(22)} ${String(s.total).padStart(5)}  ${String(s.featured).padStart(8)}  ${String(s.minimum).padStart(3)}  ${status}`
    );
    totalPlaces += s.total;
    totalFeatured += s.featured;
    if (s.meetsMinimum) meetingMinimum++;
  }

  console.log('─'.repeat(60));
  console.log(
    `${'TOTAL'.padEnd(22)} ${String(totalPlaces).padStart(5)}  ${String(totalFeatured).padStart(8)}`
  );

  // Detailed breakdown by type
  console.log('\n\n📍 Places by Type (per town)');
  console.log('================================\n');

  const allTypes = new Set<string>();
  for (const s of stats) {
    Object.keys(s.byType).forEach((t) => allTypes.add(t));
  }
  const typeList = Array.from(allTypes).sort();

  // Header
  const typeHeader = typeList.map((t) => t.slice(0, 8).padStart(9)).join('');
  console.log(`${'Town'.padEnd(18)}${typeHeader}`);
  console.log('─'.repeat(18 + typeList.length * 9));

  for (const s of stats) {
    if (s.total === 0) continue;
    const counts = typeList.map((t) => String(s.byType[t] || 0).padStart(9)).join('');
    console.log(`${s.townName.slice(0, 17).padEnd(18)}${counts}`);
  }

  // Summary
  console.log('\n\n📈 Summary');
  console.log('================================');
  console.log(`Total Massachusetts places: ${totalPlaces}`);
  console.log(`Total featured places: ${totalFeatured}`);
  console.log(`Towns meeting minimum: ${meetingMinimum}/${stats.length}`);

  const missingMinimum = stats.filter((s) => !s.meetsMinimum);
  if (missingMinimum.length > 0) {
    console.log('\n⚠ Towns below minimum:');
    for (const s of missingMinimum) {
      const deficit = s.minimum - s.total;
      console.log(`  - ${s.townName}: ${s.total}/${s.minimum} (need ${deficit} more)`);
    }
  } else {
    console.log('\n✓ All towns meet minimum thresholds!');
  }

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error('Error:', e);
  process.exit(1);
});
