/**
 * Seed Saratoga Springs, NY into the database.
 * Data exists in src/seed/ files but was never applied to Supabase.
 *
 * Usage:
 *   DATABASE_URL=... DIRECT_URL=... npx tsx scripts/seed-saratoga.ts
 */

import "dotenv/config";
import { PrismaClient } from "@prisma/client";

// Import Saratoga data from existing seed files
import {
  saratogaSpringsTownUpdate,
  saratogaSpringsPeople,
  saratogaSpringsEvents,
  saratogaSpringsStories,
} from "../src/seed/newyork/content.js";

import {
  saratogaSpringsPlaces,
  saratogaSpringsAdditionalEvents,
  saratogaSpringsLessonPlans,
} from "../src/seed/sprints/ny-expansion.js";

const DB = process.env.DATABASE_URL;
const DIRECT = process.env.DIRECT_URL ?? DB;

const prisma = new PrismaClient({
  log: ["error"],
  datasourceUrl: DB,
});

const TOWN_ID = "us-ny-saratoga-springs";

async function main() {
  console.log("🏛️  Seeding Saratoga Springs, NY...");

  // 1. Town update (whyMatters, heroSummary40, execSummary150)
  await prisma.town.update({
    where: { id: TOWN_ID },
    data: saratogaSpringsTownUpdate,
  });
  console.log("  ✓ Town narrative updated");

  // 2. People + TownPerson junction
  for (const person of saratogaSpringsPeople) {
    await prisma.person.upsert({
      where: { id: person.id! },
      update: { name: person.name, bioShort: person.bioShort, roles: person.roles },
      create: person,
    });
    const existing = await prisma.townPerson.findFirst({
      where: { townId: TOWN_ID, personId: person.id! },
    });
    if (!existing) {
      await prisma.townPerson.create({
        data: {
          town: { connect: { id: TOWN_ID } },
          person: { connect: { id: person.id! } },
        },
      });
    }
  }
  console.log(`  ✓ ${saratogaSpringsPeople.length} people seeded`);

  // 3. Events (primary)
  for (const event of saratogaSpringsEvents) {
    await prisma.event.upsert({
      where: { id: event.id! },
      update: { name: event.name, summary: event.summary, significanceWeight: event.significanceWeight },
      create: event,
    });
  }
  console.log(`  ✓ ${saratogaSpringsEvents.length} primary events seeded`);

  // 4. Stories
  for (const story of saratogaSpringsStories) {
    const existing = await prisma.story.findFirst({ where: { id: story.id! } });
    if (!existing) {
      await prisma.story.create({ data: story });
    } else {
      await prisma.story.update({
        where: { id: story.id! },
        data: { title: story.title, textVersion: story.textVersion },
      });
    }
  }
  console.log(`  ✓ ${saratogaSpringsStories.length} stories seeded`);

  // 5. Places
  for (const place of saratogaSpringsPlaces) {
    await prisma.place.upsert({
      where: { id: place.id! },
      update: {
        name: place.name, placeType: place.placeType, description: place.description,
        lat: place.lat, lng: place.lng, address: place.address, hours: place.hours,
        admission: place.admission, website: place.website, phone: place.phone,
        accessibilityNotes: place.accessibilityNotes, parkingNotes: place.parkingNotes,
        amenities: place.amenities, historicalNote: place.historicalNote,
        displayOrder: place.displayOrder, featured: place.featured,
      },
      create: place,
    });
  }
  console.log(`  ✓ ${saratogaSpringsPlaces.length} places seeded`);

  // 6. Additional events
  for (const event of saratogaSpringsAdditionalEvents) {
    await prisma.event.upsert({
      where: { id: event.id! },
      update: { name: event.name, summary: event.summary, significanceWeight: event.significanceWeight },
      create: event,
    });
  }
  console.log(`  ✓ ${saratogaSpringsAdditionalEvents.length} additional events seeded`);

  // 7. Lesson plans (delete + recreate for idempotency)
  await prisma.lessonPlan.deleteMany({ where: { townId: TOWN_ID } });
  for (const lp of saratogaSpringsLessonPlans) {
    await prisma.lessonPlan.create({ data: lp });
  }
  console.log(`  ✓ ${saratogaSpringsLessonPlans.length} lesson plans seeded`);

  // 8. ChangeLogEntry
  await prisma.changeLogEntry.create({
    data: {
      townId: TOWN_ID,
      category: "CONTENT",
      title: "Full content seed for Saratoga Springs",
      summary: `Seeded ${saratogaSpringsPeople.length} people, ${saratogaSpringsEvents.length + saratogaSpringsAdditionalEvents.length} events, ${saratogaSpringsStories.length} stories, ${saratogaSpringsPlaces.length} places, ${saratogaSpringsLessonPlans.length} lesson plans.`,
      details: {
        peopleCount: saratogaSpringsPeople.length,
        eventsCount: saratogaSpringsEvents.length + saratogaSpringsAdditionalEvents.length,
        storiesCount: saratogaSpringsStories.length,
        placesCount: saratogaSpringsPlaces.length,
      },
      publicNotes: "Complete content seed applied: people, events, places, stories, and lesson plans.",
    },
  });

  console.log("\n✅ Saratoga Springs fully seeded.");
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
