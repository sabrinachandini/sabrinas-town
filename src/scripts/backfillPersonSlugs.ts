/**
 * MODEL: Claude Sonnet
 *
 * Backfill Person slugs
 *
 * Generates URL-friendly slugs from Person names and writes them to the DB.
 * Handles collisions by appending -2, -3, etc.
 *
 * Usage: npx tsx src/scripts/backfillPersonSlugs.ts
 */

import prisma from '../db/client.js';

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

async function main() {
  const people = await prisma.person.findMany({
    where: { slug: null },
    select: { id: true, name: true },
    orderBy: { name: 'asc' },
  });

  console.log(`Found ${people.length} people without slugs`);

  // Track slugs used in this run to handle collisions
  const usedSlugs = new Set<string>();

  // Also load existing slugs from the DB
  const existing = await prisma.person.findMany({
    where: { slug: { not: null } },
    select: { slug: true },
  });
  for (const p of existing) {
    if (p.slug) usedSlugs.add(p.slug);
  }

  let updated = 0;
  let errors = 0;

  for (const person of people) {
    const base = slugify(person.name);
    let candidate = base;
    let counter = 2;

    while (usedSlugs.has(candidate)) {
      candidate = `${base}-${counter}`;
      counter++;
    }

    usedSlugs.add(candidate);

    try {
      await prisma.person.update({
        where: { id: person.id },
        data: { slug: candidate },
      });
      updated++;
      console.log(`  ${person.name} → ${candidate}`);
    } catch (err) {
      errors++;
      console.error(`  ERROR for ${person.name} (${person.id}):`, err);
    }
  }

  console.log(`\nDone: ${updated} slugs written, ${errors} errors`);
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
