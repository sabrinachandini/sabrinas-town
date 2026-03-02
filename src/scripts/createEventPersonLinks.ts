/**
 * createEventPersonLinks.ts
 *
 * For each town, find EventPerson connections by checking if a person's
 * last name (or significant name parts) appears in an event's name or summary.
 * Sprint towns have TownPerson + Event records but no EventPerson records.
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Creating EventPerson links via name matching...\n');

  const towns = await prisma.town.findMany({
    include: {
      townPeople: { include: { person: true } },
      events: { select: { id: true, name: true, summary: true } },
    },
  });

  let totalCreated = 0;
  let totalSkipped = 0;

  for (const town of towns) {
    const people = town.townPeople.map(tp => tp.person);
    if (people.length === 0 || town.events.length === 0) continue;

    let townCreated = 0;

    for (const event of town.events) {
      const searchText = `${event.name} ${event.summary ?? ''}`.toLowerCase();

      for (const person of people) {
        const nameParts = person.name.split(' ');
        const lastName = nameParts[nameParts.length - 1].toLowerCase();

        // Skip very short last names (titles, "Jr", etc.) or overly common words
        if (lastName.length < 4) continue;

        // Also try second word (first real surname for "Lieutenant Colonel Archibald Campbell")
        const meaningfulParts = nameParts
          .filter(p => p.length >= 4 && !['lord', 'lady', 'general', 'colonel', 'major', 'captain', 'lieutenant', 'brigadier', 'admiral'].includes(p.toLowerCase()));
        const lastMeaningful = meaningfulParts[meaningfulParts.length - 1]?.toLowerCase();

        const matches =
          (lastMeaningful && searchText.includes(lastMeaningful)) ||
          searchText.includes(lastName);

        if (!matches) continue;

        // Avoid duplicate inserts (@@unique constraint)
        const existing = await prisma.eventPerson.findFirst({
          where: { eventId: event.id, personId: person.id },
        });
        if (existing) {
          totalSkipped++;
          continue;
        }

        const roleInEvent = person.roles?.[0] ?? null;
        await prisma.eventPerson.create({
          data: { eventId: event.id, personId: person.id, roleInEvent },
        });
        townCreated++;
        totalCreated++;
      }
    }

    if (townCreated > 0) {
      console.log(`  ${town.slug}: +${townCreated}`);
    }
  }

  console.log(`\nDone. Created: ${totalCreated}, Already existed: ${totalSkipped}`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
