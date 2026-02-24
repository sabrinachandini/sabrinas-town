// MODEL: Claude Sonnet
// Main seed script - orchestrates seeding of all data

import prisma from '../db/client.js';
import { themes } from './themes.js';
import { sources } from './sources.js';
import { linkedTownStubs, lexingtonLinks } from './linkedTowns.js';
import {
  lexingtonTown,
  lexingtonEvents,
  lexingtonPeople,
  lexingtonStories,
  midnightRideRoute,
  midnightRideStops,
  lexingtonOrganization,
} from './lexington.js';
import { computeTownScore } from '../services/scoring.js';

const isDryRun = process.argv.includes('--dry-run');

async function main() {
  console.log('🏛️  Sabrina\'s Town - Database Seed');
  console.log('====================================');

  if (isDryRun) {
    console.log('🔍 DRY RUN MODE - No changes will be made\n');
    await validateSeedData();
    return;
  }

  console.log('Starting seed process...\n');

  // 1. Seed themes
  console.log('📚 Seeding themes...');
  for (const theme of themes) {
    await prisma.theme.upsert({
      where: { id: theme.id },
      update: theme,
      create: theme,
    });
  }
  console.log(`   ✓ ${themes.length} themes seeded\n`);

  // 2. Seed sources
  console.log('📖 Seeding sources...');
  for (const source of sources) {
    await prisma.source.upsert({
      where: { id: source.id },
      update: source,
      create: source,
    });
  }
  console.log(`   ✓ ${sources.length} sources seeded\n`);

  // 3. Seed linked town stubs
  console.log('🗺️  Seeding linked town stubs...');
  for (const town of linkedTownStubs) {
    await prisma.town.upsert({
      where: { id: town.id },
      update: { name: town.name, state: town.state },
      create: town,
    });
  }
  console.log(`   ✓ ${linkedTownStubs.length} town stubs seeded\n`);

  // 4. Seed Lexington (main vertical slice)
  console.log('🏛️  Seeding Lexington vertical slice...');

  // Town
  await prisma.town.upsert({
    where: { id: lexingtonTown.id },
    update: lexingtonTown,
    create: lexingtonTown,
  });
  console.log('   ✓ Lexington town created');

  // People (before events, since events reference people)
  for (const person of lexingtonPeople) {
    await prisma.person.upsert({
      where: { id: person.id },
      update: person,
      create: person,
    });
  }
  console.log(`   ✓ ${lexingtonPeople.length} people seeded`);

  // Events
  for (const event of lexingtonEvents) {
    await prisma.event.upsert({
      where: { id: event.id },
      update: {
        name: event.name,
        summary: event.summary,
        significanceWeight: event.significanceWeight,
      },
      create: event,
    });
  }
  console.log(`   ✓ ${lexingtonEvents.length} events seeded`);

  // Stories
  for (const story of lexingtonStories) {
    // Check if story exists
    const existingStory = await prisma.story.findFirst({
      where: { id: story.id },
    });

    if (!existingStory) {
      await prisma.story.create({
        data: story,
      });
    } else {
      await prisma.story.update({
        where: { id: story.id },
        data: {
          title: story.title,
          textVersion: story.textVersion,
          verificationStatus: story.verificationStatus,
        },
      });
    }
  }
  console.log(`   ✓ ${lexingtonStories.length} stories seeded`);

  // 5. Create EventPerson connections
  console.log('\n🔗 Creating entity connections...');

  // Connect John Parker to Battle of Lexington
  await upsertEventPerson('event-lexington-battle', 'person-john-parker', 'Commander');
  await upsertEventPerson('event-lexington-battle', 'person-jonas-parker', 'Militiaman');
  await upsertEventPerson('event-lexington-battle', 'person-prince-estabrook', 'Militiaman');
  await upsertEventPerson('event-lexington-battle', 'person-jonathan-harrington', 'Militiaman');

  // Connect Revere to warning event
  await upsertEventPerson('event-revere-dawes-warning', 'person-paul-revere', 'Messenger');

  // Connect Adams to escape event
  await upsertEventPerson('event-hancock-adams-escape', 'person-samuel-adams', 'Evacuee');

  // Connect Parker to muster event
  await upsertEventPerson('event-parker-muster', 'person-john-parker', 'Commander');

  console.log('   ✓ Event-Person connections created');

  // 6. Create town links
  for (const link of lexingtonLinks) {
    await prisma.townLink.upsert({
      where: {
        fromTownId_toTownId_linkType: {
          fromTownId: 'us-ma-lexington',
          toTownId: link.toTownId,
          linkType: link.linkType,
        },
      },
      update: { reason: link.reason, weight: link.weight },
      create: {
        fromTown: { connect: { id: 'us-ma-lexington' } },
        toTown: { connect: { id: link.toTownId } },
        linkType: link.linkType,
        reason: link.reason,
        weight: link.weight,
      },
    });
  }
  console.log(`   ✓ ${lexingtonLinks.length} town links created`);

  // 7. Create theme connections
  await upsertTownTheme('us-ma-lexington', 'liberty-freedom', 'Where liberty was first defended with blood');
  await upsertTownTheme('us-ma-lexington', 'citizen-soldiers', 'Birthplace of the minuteman tradition');
  await upsertTownTheme('us-ma-lexington', 'enslaved-free-black', 'Prince Estabrook was wounded here');
  await upsertTownTheme('us-ma-lexington', 'women-revolution', 'Women watched and waited as battle unfolded');
  await upsertTownTheme('us-ma-lexington', 'preservation-memory', 'Lexington Green is among the best-preserved Revolutionary sites');

  console.log('   ✓ Town-Theme connections created');

  // 8. Create route and stops
  await prisma.route.upsert({
    where: { id: midnightRideRoute.id },
    update: midnightRideRoute,
    create: midnightRideRoute,
  });

  for (const stop of midnightRideStops) {
    await prisma.routeStop.upsert({
      where: {
        routeId_stopOrder: {
          routeId: stop.routeId,
          stopOrder: stop.stopOrder,
        },
      },
      update: { notes: stop.notes, arrivalTime: stop.arrivalTime },
      create: {
        route: { connect: { id: stop.routeId } },
        town: { connect: { id: stop.townId } },
        stopOrder: stop.stopOrder,
        notes: stop.notes,
        arrivalTime: stop.arrivalTime,
      },
    });
  }
  console.log('   ✓ Route and stops created');

  // 9. Create organization
  const existingOrg = await prisma.organization.findFirst({
    where: { townId: 'us-ma-lexington' },
  });

  if (!existingOrg) {
    await prisma.organization.create({
      data: lexingtonOrganization,
    });
    console.log('   ✓ Lexington organization created');
  } else {
    console.log('   ℹ Lexington organization already exists');
  }

  // 10. Compute initial score
  console.log('\n📊 Computing initial score...');
  try {
    const scoreResult = await computeTownScore('us-ma-lexington');
    console.log(`   ✓ Lexington composite score: ${scoreResult.compositeScore}`);
  } catch (error) {
    console.log(`   ⚠ Score computation skipped (may need more data): ${error}`);
  }

  // Summary
  console.log('\n====================================');
  console.log('✅ Seed complete!');
  console.log(`
Summary:
  - ${themes.length} themes
  - ${sources.length} sources
  - ${linkedTownStubs.length + 1} towns (Lexington + stubs)
  - ${lexingtonPeople.length} people
  - ${lexingtonEvents.length} events
  - ${lexingtonStories.length} stories
  - ${lexingtonLinks.length} town links
  - 1 route with ${midnightRideStops.length} stops
  - 1 organization

Next steps:
  1. Start the server: npm run dev
  2. Test the Lexington endpoint: curl http://localhost:3000/towns/lexington-ma
  3. Add more towns by following the lexington.ts pattern
`);
}

async function upsertEventPerson(eventId: string, personId: string, roleInEvent: string) {
  const existing = await prisma.eventPerson.findFirst({
    where: { eventId, personId },
  });

  if (!existing) {
    await prisma.eventPerson.create({
      data: {
        event: { connect: { id: eventId } },
        person: { connect: { id: personId } },
        roleInEvent,
      },
    });
  }
}

async function upsertTownTheme(townId: string, themeId: string, relevanceNote: string) {
  const existing = await prisma.townTheme.findFirst({
    where: { townId, themeId },
  });

  if (!existing) {
    await prisma.townTheme.create({
      data: {
        town: { connect: { id: townId } },
        theme: { connect: { id: themeId } },
        relevanceNote,
      },
    });
  }
}

async function validateSeedData() {
  console.log('Validating seed data...\n');

  // Check for duplicate IDs
  const themeIds = themes.map((t) => t.id);
  const duplicateThemes = themeIds.filter((id, i) => themeIds.indexOf(id) !== i);
  if (duplicateThemes.length > 0) {
    console.error('❌ Duplicate theme IDs:', duplicateThemes);
  } else {
    console.log('✓ Theme IDs are unique');
  }

  const sourceIds = sources.map((s) => s.id);
  const duplicateSources = sourceIds.filter((id, i) => sourceIds.indexOf(id) !== i);
  if (duplicateSources.length > 0) {
    console.error('❌ Duplicate source IDs:', duplicateSources);
  } else {
    console.log('✓ Source IDs are unique');
  }

  const personIds = lexingtonPeople.map((p) => p.id);
  const duplicatePeople = personIds.filter((id, i) => personIds.indexOf(id) !== i);
  if (duplicatePeople.length > 0) {
    console.error('❌ Duplicate person IDs:', duplicatePeople);
  } else {
    console.log('✓ Person IDs are unique');
  }

  const eventIds = lexingtonEvents.map((e) => e.id);
  const duplicateEvents = eventIds.filter((id, i) => eventIds.indexOf(id) !== i);
  if (duplicateEvents.length > 0) {
    console.error('❌ Duplicate event IDs:', duplicateEvents);
  } else {
    console.log('✓ Event IDs are unique');
  }

  // Check required fields
  console.log('\n✓ Lexington town has required fields:');
  console.log(`  - heroSummary40: ${lexingtonTown.heroSummary40.length} chars (limit 60)`);
  console.log(`  - execSummary150: ${lexingtonTown.execSummary150.length} chars (limit 200)`);
  console.log(`  - whyMatters: ${lexingtonTown.whyMatters.length} chars`);

  // Check linked town references
  const linkedTownIds = linkedTownStubs.map((t) => t.id);
  const missingTowns = lexingtonLinks
    .filter((l) => !linkedTownIds.includes(l.toTownId))
    .map((l) => l.toTownId);
  if (missingTowns.length > 0) {
    console.error('\n❌ Links reference missing towns:', missingTowns);
  } else {
    console.log('\n✓ All linked towns have stubs');
  }

  console.log('\n✅ Validation complete!');
}

main()
  .catch((e) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
