// MODEL: Claude Sonnet
// Seed functions for 75-town network
// Upserts all towns and creates TownLinks from authoritative data files

import prisma from '../db/client.js';
import { TOP_75_TOWNS, type Top75Town } from '../data/top75.js';
import { TOWN_LINKS_75 } from '../data/townLinks75.js';

/**
 * Generate a placeholder whyMatters text for skeleton towns.
 * Uses execSummary150 as the basis with a prefix indicating pending content.
 */
function generatePlaceholderWhyMatters(town: Top75Town): string {
  return `Full content pending. ${town.execSummary150}`;
}

/**
 * Seed all 75 towns from the authoritative list.
 * Uses upsert to be idempotent - safe to run multiple times.
 * Returns the count of towns upserted.
 */
export async function seedAll75Towns(): Promise<number> {
  let count = 0;

  for (const town of TOP_75_TOWNS) {
    await prisma.town.upsert({
      where: { id: town.id },
      update: {
        name: town.name,
        state: town.state,
        country: town.country,
        slug: town.slug,
        lat: town.lat,
        lng: town.lng,
        heroSummary40: town.heroSummary40,
        execSummary150: town.execSummary150,
        // Don't overwrite whyMatters if it exists and has real content
      },
      create: {
        id: town.id,
        name: town.name,
        state: town.state,
        country: town.country,
        slug: town.slug,
        lat: town.lat,
        lng: town.lng,
        heroSummary40: town.heroSummary40,
        execSummary150: town.execSummary150,
        whyMatters: generatePlaceholderWhyMatters(town),
        compositeScore: 0,
        tourismInfo: {
          placeholder: true,
          tier: town.tier,
          region: town.region,
          shortRoleTag: town.shortRoleTag,
        },
      },
    });
    count++;
  }

  return count;
}

/**
 * Seed all TownLinks from the authoritative link definitions.
 * Uses upsert based on the unique constraint (fromTownId, toTownId, linkType).
 * Returns count of created and skipped links.
 */
export async function seedTownLinks(): Promise<{ created: number; skipped: number }> {
  let created = 0;
  let skipped = 0;

  for (const link of TOWN_LINKS_75) {
    try {
      await prisma.townLink.upsert({
        where: {
          fromTownId_toTownId_linkType: {
            fromTownId: link.fromTownId,
            toTownId: link.toTownId,
            linkType: link.linkType,
          },
        },
        update: {
          reason: link.reason,
          weight: link.weight,
        },
        create: {
          fromTown: { connect: { id: link.fromTownId } },
          toTown: { connect: { id: link.toTownId } },
          linkType: link.linkType,
          reason: link.reason,
          weight: link.weight,
        },
      });
      created++;
    } catch (error) {
      // Skip if towns don't exist yet
      console.warn(`   ⚠ Skipped link ${link.fromTownId} → ${link.toTownId}: ${error}`);
      skipped++;
    }
  }

  return { created, skipped };
}

/**
 * Create ChangeLogEntry for each town that doesn't have one.
 * This marks when the town was added to the network.
 */
export async function createTownChangeLogEntries(): Promise<number> {
  let count = 0;

  for (const town of TOP_75_TOWNS) {
    // Check if town already has a changelog entry
    const existing = await prisma.changeLogEntry.findFirst({
      where: { townId: town.id },
    });

    if (!existing) {
      await prisma.changeLogEntry.create({
        data: {
          town: { connect: { id: town.id } },
          summary: `Added ${town.name}, ${town.state} to the network`,
          details: {
            action: 'TOWN_ADDED',
            tier: town.tier,
            region: town.region,
            isPlaceholder: true,
          },
          publicNotes: `${town.name} joined the Revolutionary War tourism network as a ${town.tier} town in the ${town.region} region.`,
        },
      });
      count++;
    }
  }

  return count;
}

/**
 * Validate the seed data before running.
 * Checks for duplicate IDs and ensures all link targets exist.
 */
export function validateSeedData(): {
  valid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check for duplicate town IDs
  const townIds = TOP_75_TOWNS.map((t) => t.id);
  const duplicateTownIds = townIds.filter((id, i) => townIds.indexOf(id) !== i);
  if (duplicateTownIds.length > 0) {
    errors.push(`Duplicate town IDs: ${duplicateTownIds.join(', ')}`);
  }

  // Check for duplicate slugs
  const slugs = TOP_75_TOWNS.map((t) => t.slug);
  const duplicateSlugs = slugs.filter((slug, i) => slugs.indexOf(slug) !== i);
  if (duplicateSlugs.length > 0) {
    errors.push(`Duplicate slugs: ${duplicateSlugs.join(', ')}`);
  }

  // Check that all link targets exist in the town list
  const townIdSet = new Set(townIds);
  for (const link of TOWN_LINKS_75) {
    if (!townIdSet.has(link.fromTownId)) {
      errors.push(`Link from unknown town: ${link.fromTownId}`);
    }
    if (!townIdSet.has(link.toTownId)) {
      errors.push(`Link to unknown town: ${link.toTownId}`);
    }
  }

  // Check heroSummary40 length (max 60 chars per schema)
  for (const town of TOP_75_TOWNS) {
    if (town.heroSummary40.length > 60) {
      warnings.push(`${town.id}: heroSummary40 exceeds 60 chars (${town.heroSummary40.length})`);
    }
    if (town.execSummary150.length > 200) {
      warnings.push(`${town.id}: execSummary150 exceeds 200 chars (${town.execSummary150.length})`);
    }
  }

  // Check link count per town (should be >= 5)
  const linkCountByTown = new Map<string, number>();
  for (const link of TOWN_LINKS_75) {
    linkCountByTown.set(link.fromTownId, (linkCountByTown.get(link.fromTownId) || 0) + 1);
  }
  for (const town of TOP_75_TOWNS) {
    const count = linkCountByTown.get(town.id) || 0;
    if (count < 5) {
      warnings.push(`${town.id}: only ${count} outbound links (minimum 5)`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}
