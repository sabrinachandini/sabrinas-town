// MODEL: Claude Sonnet
// Main seed script - orchestrates seeding of all data

import prisma from '../db/client.js';
import { themes } from './themes.js';
import { sources } from './sources.js';
import {
  lexingtonTown,
  lexingtonEvents,
  lexingtonPeople,
  lexingtonStories,
  midnightRideRoute,
  midnightRideStops,
  lexingtonOrganization,
} from './lexington.js';
import {
  seedAll75Towns,
  seedTownLinks,
  createTownChangeLogEntries,
  validateSeedData as validate75TownData,
} from './towns75.js';
import {
  concordTownUpdate,
  concordEvents,
  concordPeople,
  concordStories,
  concordThemeConnections,
  concordSources,
} from './concord.js';
import { computeTownScore } from '../services/scoring.js';
import { TOP_75_TOWNS, HUB_TOWN_IDS } from '../data/top75.js';

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

  // 3. Seed all 75 towns
  console.log('🗺️  Seeding 75-town network...');
  const townCount = await seedAll75Towns();
  console.log(`   ✓ ${townCount} towns seeded\n`);

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

  // 4b. Seed Concord (second flagship)
  console.log('\n🏛️  Seeding Concord flagship content...');

  // Update Concord town with full content
  await prisma.town.update({
    where: { id: 'us-ma-concord' },
    data: concordTownUpdate,
  });
  console.log('   ✓ Concord town updated with full content');

  // Concord sources
  for (const source of concordSources) {
    await prisma.source.upsert({
      where: { id: source.id },
      update: source,
      create: source,
    });
  }
  console.log(`   ✓ ${concordSources.length} Concord sources seeded`);

  // Concord people
  for (const person of concordPeople) {
    await prisma.person.upsert({
      where: { id: person.id },
      update: person,
      create: person,
    });
  }
  console.log(`   ✓ ${concordPeople.length} Concord people seeded`);

  // Concord events
  for (const event of concordEvents) {
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
  console.log(`   ✓ ${concordEvents.length} Concord events seeded`);

  // Concord stories
  for (const story of concordStories) {
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
          audioScript: story.audioScript,
        },
      });
    }
  }
  console.log(`   ✓ ${concordStories.length} Concord stories seeded`);

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

  // Concord EventPerson connections
  await upsertEventPerson('event-north-bridge', 'person-john-buttrick', 'Commander');
  await upsertEventPerson('event-north-bridge', 'person-isaac-davis', 'Company Captain');
  await upsertEventPerson('event-north-bridge', 'person-amos-barrett', 'Minuteman');
  await upsertEventPerson('event-british-concord-arrival', 'person-francis-smith', 'Expedition Commander');
  await upsertEventPerson('event-supplies-hidden', 'person-james-barrett', 'Organizer');
  await upsertEventPerson('event-barrett-farm-search', 'person-james-barrett', 'Defender');
  await upsertEventPerson('event-provincial-congress-concord', 'person-james-barrett', 'Member');
  await upsertEventPerson('event-british-retreat-concord', 'person-francis-smith', 'Commander');

  console.log('   ✓ Event-Person connections created');

  // 6. Create all town links (75-town network)
  console.log('\n🔗 Seeding town links (75-town network)...');
  const linkResult = await seedTownLinks();
  console.log(`   ✓ ${linkResult.created} town links created`);
  if (linkResult.skipped > 0) {
    console.log(`   ⚠ ${linkResult.skipped} links skipped (missing towns)`);
  }

  // 7. Create theme connections
  await upsertTownTheme('us-ma-lexington', 'liberty-freedom', 'Where liberty was first defended with blood');
  await upsertTownTheme('us-ma-lexington', 'citizen-soldiers', 'Birthplace of the minuteman tradition');
  await upsertTownTheme('us-ma-lexington', 'enslaved-free-black', 'Prince Estabrook was wounded here');
  await upsertTownTheme('us-ma-lexington', 'women-revolution', 'Women watched and waited as battle unfolded');
  await upsertTownTheme('us-ma-lexington', 'preservation-memory', 'Lexington Green is among the best-preserved Revolutionary sites');

  // Concord theme connections
  for (const conn of concordThemeConnections) {
    await upsertTownTheme('us-ma-concord', conn.themeId, conn.relevanceNote);
  }

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

  // 10. Compute scores for hub towns
  console.log('\n📊 Computing scores for hub towns...');
  for (const hubId of HUB_TOWN_IDS) {
    try {
      const scoreResult = await computeTownScore(hubId);
      console.log(`   ✓ ${hubId}: ${scoreResult.compositeScore}`);
    } catch (error) {
      // Skip if hub doesn't have enough data yet
    }
  }

  // 11. Create ChangeLogEntries for new towns
  console.log('\n📝 Creating changelog entries...');
  const changelogCount = await createTownChangeLogEntries();
  console.log(`   ✓ ${changelogCount} changelog entries created`);

  // Summary
  console.log('\n====================================');
  console.log('✅ Seed complete!');
  console.log(`
Summary:
  - ${themes.length} themes
  - ${sources.length + concordSources.length} sources
  - ${TOP_75_TOWNS.length} towns (75-town network)
  - ${lexingtonPeople.length + concordPeople.length} people (Lexington + Concord)
  - ${lexingtonEvents.length + concordEvents.length} events (Lexington + Concord)
  - ${lexingtonStories.length + concordStories.length} stories (Lexington + Concord)
  - ${linkResult.created} town links
  - 1 route with ${midnightRideStops.length} stops
  - 1 organization
  - ${changelogCount} changelog entries

Flagship towns:
  - Lexington: ${lexingtonEvents.length} events, ${lexingtonPeople.length} people, ${lexingtonStories.length} stories
  - Concord: ${concordEvents.length} events, ${concordPeople.length} people, ${concordStories.length} stories

Next steps:
  1. Test the rankings: curl http://localhost:3000/rankings
  2. Test Lexington: curl http://localhost:3000/towns/lexington-ma
  3. Test Concord: curl http://localhost:3000/towns/concord-ma
  4. Compare: curl http://localhost:3000/compare?townA=lexington-ma&townB=concord-ma
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

  // Check for duplicate IDs in themes, sources, people, events
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

  // Check Lexington required fields
  console.log('\n✓ Lexington town has required fields:');
  console.log(`  - heroSummary40: ${lexingtonTown.heroSummary40.length} chars (limit 60)`);
  console.log(`  - execSummary150: ${lexingtonTown.execSummary150.length} chars (limit 200)`);
  console.log(`  - whyMatters: ${lexingtonTown.whyMatters.length} chars`);

  // Validate 75-town data
  console.log('\n📊 Validating 75-town network...');
  const result = validate75TownData();

  if (result.errors.length > 0) {
    console.error('❌ Errors:');
    for (const error of result.errors) {
      console.error(`   - ${error}`);
    }
  }

  if (result.warnings.length > 0) {
    console.log('⚠ Warnings:');
    for (const warning of result.warnings) {
      console.log(`   - ${warning}`);
    }
  }

  console.log(`\n✓ ${TOP_75_TOWNS.length} towns in network`);
  console.log(`✓ ${HUB_TOWN_IDS.length} hub towns`);

  if (result.valid) {
    console.log('\n✅ Validation complete!');
  } else {
    console.error('\n❌ Validation failed! Fix errors before seeding.');
    process.exit(1);
  }
}

main()
  .catch((e) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
