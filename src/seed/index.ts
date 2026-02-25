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
  lexingtonPlaces,
  concordPlaces,
  bostonPlaces,
  cambridgePlaces,
  arlingtonPlaces,
  salemPlaces,
  marbleheadPlaces,
  plymouthPlaces,
  worcesterPlaces,
  springfieldPlaces,
} from './massachusetts/places/index.js';
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
import {
  bostonTownUpdate,
  bostonEvents,
  bostonPeople,
  bostonStories,
  bostonThemeConnections,
  bostonSources,
  bostonTownLinks,
  bostonRoutes,
  bostonRouteStops,
} from './boston.js';
import {
  cambridgeTownUpdate,
  cambridgeEvents,
  cambridgePeople,
  cambridgeStories,
  cambridgeThemeConnections,
  cambridgeSources,
  cambridgeTownLinks,
  cambridgeRoutes,
  cambridgeRouteStops,
} from './cambridge.js';
import {
  arlingtonTownUpdate,
  arlingtonEvents,
  arlingtonPeople,
  arlingtonStories,
  arlingtonThemeConnections,
  arlingtonSources,
  arlingtonTownLinks,
  arlingtonRoutes,
  arlingtonRouteStops,
} from './arlington.js';
import { lexingtonSources, LEXINGTON_SHARED_SOURCE_IDS } from './lexingtonSources.js';
import { salemEvents } from './salem.js';
import { marbleheadEvents } from './marblehead.js';
import { plymouthEvents } from './plymouth.js';
import { worcesterEvents } from './worcester.js';
import { springfieldEvents } from './springfield.js';
import { seedTeacherContent } from './teacher/index.js';
import { computeTownScore } from '../services/scoring.js';
import { TOP_75_TOWNS, HUB_TOWN_IDS } from '../data/top75.js';
import { Prisma } from '@prisma/client';
// Phase 2: Remaining MA town sources
import {
  salemSources,
  marbleheadSources,
  plymouthSources,
  worcesterSources,
  springfieldSources,
} from './massachusetts/sources/index.js';
// Phase 3: All other regional sources
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
} from './sources/index.js';

const isDryRun = process.argv.includes('--dry-run');

/**
 * Reusable helper: upsert sources and link them to a town via SourceTown.
 * Also links any shared source IDs (sources already in the DB from other seed files).
 */
export async function upsertSourcesAndLink(
  townId: string,
  sources: Prisma.SourceCreateInput[],
  sharedSourceIds: string[] = []
) {
  // Upsert each source
  for (const source of sources) {
    await prisma.source.upsert({
      where: { id: source.id! },
      update: source,
      create: source,
    });
  }

  // Link town-specific sources
  const allSourceIds = [
    ...sources.map((s) => s.id!),
    ...sharedSourceIds,
  ];

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

  // Places
  for (const place of lexingtonPlaces) {
    await prisma.place.upsert({
      where: { id: place.id },
      update: {
        name: place.name,
        placeType: place.placeType,
        description: place.description,
        lat: place.lat,
        lng: place.lng,
        address: place.address,
        hours: place.hours,
        admission: place.admission,
        website: place.website,
        phone: place.phone,
        accessibilityNotes: place.accessibilityNotes,
        parkingNotes: place.parkingNotes,
        amenities: place.amenities,
        historicalNote: place.historicalNote,
        displayOrder: place.displayOrder,
        featured: place.featured,
      },
      create: place,
    });
  }
  console.log(`   ✓ ${lexingtonPlaces.length} Lexington places seeded`);

  // Lexington-specific sources (using helper)
  const lexResult = await upsertSourcesAndLink('us-ma-lexington', lexingtonSources, LEXINGTON_SHARED_SOURCE_IDS);
  console.log(`   ✓ ${lexResult.upserted} Lexington-specific sources seeded`);
  console.log(`   ✓ ${lexResult.linked} Lexington source-town connections created`);

  // 4a-2. Seed additional Massachusetts places
  console.log('\n🗺️  Seeding Massachusetts places...');

  const maPlaceSets = [
    { name: 'Concord', places: concordPlaces },
    { name: 'Boston', places: bostonPlaces },
    { name: 'Cambridge', places: cambridgePlaces },
    { name: 'Arlington', places: arlingtonPlaces },
    { name: 'Salem', places: salemPlaces },
    { name: 'Marblehead', places: marbleheadPlaces },
    { name: 'Plymouth', places: plymouthPlaces },
    { name: 'Worcester', places: worcesterPlaces },
    { name: 'Springfield', places: springfieldPlaces },
  ];

  for (const { name, places } of maPlaceSets) {
    for (const place of places) {
      await prisma.place.upsert({
        where: { id: place.id },
        update: {
          name: place.name,
          placeType: place.placeType,
          description: place.description,
          lat: place.lat,
          lng: place.lng,
          address: place.address,
          hours: place.hours,
          admission: place.admission,
          website: place.website,
          phone: place.phone,
          accessibilityNotes: place.accessibilityNotes,
          parkingNotes: place.parkingNotes,
          amenities: place.amenities,
          historicalNote: place.historicalNote,
          displayOrder: place.displayOrder,
          featured: place.featured,
        },
        create: place,
      });
    }
    console.log(`   ✓ ${places.length} ${name} places seeded`);
  }

  const totalMAPlaces = lexingtonPlaces.length + concordPlaces.length + bostonPlaces.length + cambridgePlaces.length + arlingtonPlaces.length + salemPlaces.length + marbleheadPlaces.length + plymouthPlaces.length + worcesterPlaces.length + springfieldPlaces.length;
  console.log(`   ✓ Total: ${totalMAPlaces} Massachusetts places\n`);

  // 4b. Seed Concord (second flagship)
  console.log('\n🏛️  Seeding Concord flagship content...');

  // Update Concord town with full content
  await prisma.town.update({
    where: { id: 'us-ma-concord' },
    data: concordTownUpdate,
  });
  console.log('   ✓ Concord town updated with full content');

  // Concord sources (using helper)
  const concordResult = await upsertSourcesAndLink('us-ma-concord', concordSources);
  console.log(`   ✓ ${concordResult.upserted} Concord sources seeded`);
  console.log(`   ✓ ${concordResult.linked} Concord source-town connections created`);

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

  // 4c. Seed Boston (third flagship)
  console.log('\n🏛️  Seeding Boston flagship content...');

  // Update Boston town with full content
  await prisma.town.update({
    where: { id: 'us-ma-boston' },
    data: bostonTownUpdate,
  });
  console.log('   ✓ Boston town updated with full content');

  // Boston sources (using helper)
  const bostonResult = await upsertSourcesAndLink('us-ma-boston', bostonSources);
  console.log(`   ✓ ${bostonResult.upserted} Boston sources seeded`);
  console.log(`   ✓ ${bostonResult.linked} Boston source-town connections created`);

  // Boston people
  for (const person of bostonPeople) {
    await prisma.person.upsert({
      where: { id: person.id },
      update: person,
      create: person,
    });
  }
  console.log(`   ✓ ${bostonPeople.length} Boston people seeded`);

  // Boston events
  for (const event of bostonEvents) {
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
  console.log(`   ✓ ${bostonEvents.length} Boston events seeded`);

  // Boston stories
  for (const story of bostonStories) {
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
  console.log(`   ✓ ${bostonStories.length} Boston stories seeded`);

  // Boston routes
  for (const route of bostonRoutes) {
    await prisma.route.upsert({
      where: { id: route.id },
      update: route,
      create: route,
    });
  }
  console.log(`   ✓ ${bostonRoutes.length} Boston routes seeded`);

  // Boston route stops
  for (const stop of bostonRouteStops) {
    await prisma.routeStop.upsert({
      where: {
        routeId_stopOrder: {
          routeId: stop.routeId,
          stopOrder: stop.stopOrder,
        },
      },
      update: { notes: stop.notes },
      create: {
        route: { connect: { id: stop.routeId } },
        town: { connect: { id: stop.townId } },
        stopOrder: stop.stopOrder,
        notes: stop.notes,
      },
    });
  }
  console.log(`   ✓ ${bostonRouteStops.length} Boston route stops seeded`);

  // 4d. Seed Cambridge (fourth flagship)
  console.log('\n🏛️  Seeding Cambridge flagship content...');

  // Update Cambridge town with full content
  await prisma.town.update({
    where: { id: 'us-ma-cambridge' },
    data: cambridgeTownUpdate,
  });
  console.log('   ✓ Cambridge town updated with full content');

  // Cambridge sources (using helper)
  const cambridgeResult = await upsertSourcesAndLink('us-ma-cambridge', cambridgeSources);
  console.log(`   ✓ ${cambridgeResult.upserted} Cambridge sources seeded`);
  console.log(`   ✓ ${cambridgeResult.linked} Cambridge source-town connections created`);

  // Cambridge people
  for (const person of cambridgePeople) {
    await prisma.person.upsert({
      where: { id: person.id },
      update: person,
      create: person,
    });
  }
  console.log(`   ✓ ${cambridgePeople.length} Cambridge people seeded`);

  // Cambridge events
  for (const event of cambridgeEvents) {
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
  console.log(`   ✓ ${cambridgeEvents.length} Cambridge events seeded`);

  // Cambridge stories
  for (const story of cambridgeStories) {
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
  console.log(`   ✓ ${cambridgeStories.length} Cambridge stories seeded`);

  // Cambridge routes
  for (const route of cambridgeRoutes) {
    await prisma.route.upsert({
      where: { id: route.id },
      update: route,
      create: route,
    });
  }
  console.log(`   ✓ ${cambridgeRoutes.length} Cambridge routes seeded`);

  // Cambridge route stops
  for (const stop of cambridgeRouteStops) {
    await prisma.routeStop.upsert({
      where: {
        routeId_stopOrder: {
          routeId: stop.routeId,
          stopOrder: stop.stopOrder,
        },
      },
      update: { notes: stop.notes },
      create: {
        route: { connect: { id: stop.routeId } },
        town: { connect: { id: stop.townId } },
        stopOrder: stop.stopOrder,
        notes: stop.notes,
      },
    });
  }
  console.log(`   ✓ ${cambridgeRouteStops.length} Cambridge route stops seeded`);

  // 4e. Seed Arlington (fifth flagship)
  console.log('\n🏛️  Seeding Arlington flagship content...');

  // Update Arlington town with full content
  await prisma.town.update({
    where: { id: 'us-ma-arlington' },
    data: arlingtonTownUpdate,
  });
  console.log('   ✓ Arlington town updated with full content');

  // Arlington sources (using helper)
  const arlingtonResult = await upsertSourcesAndLink('us-ma-arlington', arlingtonSources);
  console.log(`   ✓ ${arlingtonResult.upserted} Arlington sources seeded`);
  console.log(`   ✓ ${arlingtonResult.linked} Arlington source-town connections created`);

  // Arlington people
  for (const person of arlingtonPeople) {
    await prisma.person.upsert({
      where: { id: person.id },
      update: person,
      create: person,
    });
  }
  console.log(`   ✓ ${arlingtonPeople.length} Arlington people seeded`);

  // Arlington events
  for (const event of arlingtonEvents) {
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
  console.log(`   ✓ ${arlingtonEvents.length} Arlington events seeded`);

  // Arlington stories
  for (const story of arlingtonStories) {
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
  console.log(`   ✓ ${arlingtonStories.length} Arlington stories seeded`);

  // Arlington routes
  for (const route of arlingtonRoutes) {
    await prisma.route.upsert({
      where: { id: route.id },
      update: route,
      create: route,
    });
  }
  console.log(`   ✓ ${arlingtonRoutes.length} Arlington routes seeded`);

  // Arlington route stops
  for (const stop of arlingtonRouteStops) {
    await prisma.routeStop.upsert({
      where: {
        routeId_stopOrder: {
          routeId: stop.routeId,
          stopOrder: stop.stopOrder,
        },
      },
      update: { notes: stop.notes },
      create: {
        route: { connect: { id: stop.routeId } },
        town: { connect: { id: stop.townId } },
        stopOrder: stop.stopOrder,
        notes: stop.notes,
      },
    });
  }
  console.log(`   ✓ ${arlingtonRouteStops.length} Arlington route stops seeded`);

  // 4f. Seed Salem events (micro-rollout)
  console.log('\n🏛️  Seeding Salem events...');
  for (const event of salemEvents) {
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
  console.log(`   ✓ ${salemEvents.length} Salem events seeded`);

  // 4g. Seed Marblehead events (micro-rollout)
  console.log('\n🏛️  Seeding Marblehead events...');
  for (const event of marbleheadEvents) {
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
  console.log(`   ✓ ${marbleheadEvents.length} Marblehead events seeded`);

  // 4h. Seed Plymouth events (micro-rollout)
  console.log('\n🏛️  Seeding Plymouth events...');
  for (const event of plymouthEvents) {
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
  console.log(`   ✓ ${plymouthEvents.length} Plymouth events seeded`);

  // 4i. Seed Worcester events (micro-rollout)
  console.log('\n🏛️  Seeding Worcester events...');
  for (const event of worcesterEvents) {
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
  console.log(`   ✓ ${worcesterEvents.length} Worcester events seeded`);

  // 4j. Seed Springfield events (micro-rollout)
  console.log('\n🏛️  Seeding Springfield events...');
  for (const event of springfieldEvents) {
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
  console.log(`   ✓ ${springfieldEvents.length} Springfield events seeded`);

  // 4k. Seed sources for remaining MA towns (Phase 2)
  console.log('\n📖 Seeding remaining Massachusetts town sources...');
  const maTownSources: [string, string, typeof salemSources][] = [
    ['Salem', 'us-ma-salem', salemSources],
    ['Marblehead', 'us-ma-marblehead', marbleheadSources],
    ['Plymouth', 'us-ma-plymouth', plymouthSources],
    ['Worcester', 'us-ma-worcester', worcesterSources],
    ['Springfield', 'us-ma-springfield', springfieldSources],
  ];
  for (const [name, townId, townSources] of maTownSources) {
    const result = await upsertSourcesAndLink(townId, townSources);
    console.log(`   ✓ ${name}: ${result.upserted} sources, ${result.newLinks} new links`);
  }

  // 4l. Seed sources for all other regions (Phase 3)
  console.log('\n📖 Seeding regional sources (60 towns)...');
  const regionSourceMaps: [string, Record<string, { sources: Prisma.SourceCreateInput[]; sharedIds?: string[] }>][] = [
    ['New York', newYorkSources],
    ['Pennsylvania', pennsylvaniaSources],
    ['New Jersey', newJerseySources],
    ['Virginia', virginiaSources],
    ['South Carolina', southCarolinaSources],
    ['North Carolina', northCarolinaSources],
    ['Georgia', georgiaSources],
    ['Connecticut', connecticutSources],
    ['Rhode Island', rhodeIslandSources],
    ['New Hampshire', newHampshireSources],
    ['Maryland', marylandSources],
    ['Delaware', delawareSources],
    ['Vermont', vermontSources],
    ['Maine', maineSources],
    ['Frontier', frontierSources],
  ];
  for (const [regionName, sourceMap] of regionSourceMaps) {
    let regionTotal = 0;
    for (const [townId, { sources: townSources, sharedIds }] of Object.entries(sourceMap)) {
      const result = await upsertSourcesAndLink(townId, townSources, sharedIds || []);
      regionTotal += result.upserted;
    }
    console.log(`   ✓ ${regionName}: ${regionTotal} sources across ${Object.keys(sourceMap).length} towns`);
  }

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

  // Boston EventPerson connections
  await upsertEventPerson('event-boston-massacre', 'person-crispus-attucks', 'Victim');
  await upsertEventPerson('event-boston-massacre', 'person-thomas-preston', 'Officer');
  await upsertEventPerson('event-boston-massacre', 'person-john-adams', 'Defense Lawyer');
  await upsertEventPerson('event-boston-tea-party', 'person-samuel-adams', 'Organizer');
  await upsertEventPerson('event-boston-tea-party', 'person-george-robert-hewes', 'Participant');
  await upsertEventPerson('event-old-south-meeting', 'person-samuel-adams', 'Presider');
  await upsertEventPerson('event-bunker-hill', 'person-joseph-warren', 'Volunteer');
  await upsertEventPerson('event-bunker-hill', 'person-william-howe', 'Commander');
  await upsertEventPerson('event-dorchester-heights', 'person-henry-knox', 'Artillery Commander');
  await upsertEventPerson('event-boston-evacuation', 'person-william-howe', 'Commander');
  await upsertEventPerson('event-knox-expedition', 'person-henry-knox', 'Leader');
  await upsertEventPerson('event-stamp-act-riots', 'person-samuel-adams', 'Organizer');
  await upsertEventPerson('event-faneuil-hall-debates', 'person-samuel-adams', 'Leader');

  // Cambridge EventPerson connections
  await upsertEventPerson('event-washington-takes-command', 'person-george-washington', 'Commander-in-Chief');
  await upsertEventPerson('event-washington-takes-command', 'person-artemas-ward', 'Former Commander');
  await upsertEventPerson('event-siege-cambridge-hq', 'person-george-washington', 'Commander');
  await upsertEventPerson('event-siege-cambridge-hq', 'person-charles-lee', 'Second in Command');
  await upsertEventPerson('event-siege-cambridge-hq', 'person-horatio-gates', 'Adjutant General');
  await upsertEventPerson('event-siege-cambridge-hq', 'person-joseph-reed', 'Secretary');
  await upsertEventPerson('event-siege-cambridge-hq', 'person-samuel-osgood', 'Aide');
  await upsertEventPerson('event-vassall-house-headquarters', 'person-george-washington', 'Resident Commander');
  await upsertEventPerson('event-vassall-house-headquarters', 'person-martha-washington-cambridge', 'Hostess');
  await upsertEventPerson('event-vassall-house-headquarters', 'person-joseph-reed', 'Staff');
  await upsertEventPerson('event-council-of-war-october', 'person-george-washington', 'Presiding');
  await upsertEventPerson('event-council-of-war-october', 'person-nathanael-greene', 'Council Member');
  await upsertEventPerson('event-council-of-war-october', 'person-israel-putnam', 'Council Member');
  await upsertEventPerson('event-enlistment-crisis', 'person-george-washington', 'Commander');
  await upsertEventPerson('event-martha-washington-arrives', 'person-martha-washington-cambridge', 'Arriving');
  await upsertEventPerson('event-riflemen-arrive', 'person-george-washington', 'Receiving Commander');
  await upsertEventPerson('event-knox-artillery-plan', 'person-henry-knox', 'Proposer');
  await upsertEventPerson('event-knox-artillery-plan', 'person-george-washington', 'Approver');

  // Arlington EventPerson connections
  await upsertEventPerson('event-menotomy-ambush', 'person-benjamin-locke', 'Militia Captain');
  await upsertEventPerson('event-menotomy-ambush', 'person-lord-percy-arlington', 'British Commander');
  await upsertEventPerson('event-menotomy-ambush', 'person-samuel-cook', 'Militia Captain');
  await upsertEventPerson('event-jason-russell-house', 'person-jason-russell', 'Homeowner/Victim');
  await upsertEventPerson('event-jason-russell-house', 'person-james-miller-arlington', 'Militiaman/Victim');
  await upsertEventPerson('event-percy-relief-arrives', 'person-lord-percy-arlington', 'Commander');
  await upsertEventPerson('event-samuel-whittemore-fight', 'person-samuel-whittemore', 'Combatant');
  await upsertEventPerson('event-menotomy-militia-muster', 'person-benjamin-locke', 'Captain');
  await upsertEventPerson('event-menotomy-militia-muster', 'person-samuel-cook', 'Captain');
  await upsertEventPerson('event-foot-of-rocks-ambush', 'person-thomas-hadley', 'Militiaman');
  await upsertEventPerson('event-foot-of-rocks-ambush', 'person-john-hicks', 'Militiaman/Victim');

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

  // Boston theme connections
  for (const conn of bostonThemeConnections) {
    await upsertTownTheme('us-ma-boston', conn.themeId, conn.relevanceNote);
  }

  // Cambridge theme connections
  for (const conn of cambridgeThemeConnections) {
    await upsertTownTheme('us-ma-cambridge', conn.themeId, conn.relevanceNote);
  }

  // Arlington theme connections
  for (const conn of arlingtonThemeConnections) {
    await upsertTownTheme('us-ma-arlington', conn.themeId, conn.relevanceNote);
  }

  console.log('   ✓ Town-Theme connections created');

  // Boston-specific town links (in addition to 75-town network links)
  console.log('\n🔗 Seeding Boston-specific town links...');
  for (const link of bostonTownLinks) {
    const existingLink = await prisma.townLink.findFirst({
      where: {
        fromTownId: 'us-ma-boston',
        toTownId: link.toTown.connect?.id,
        linkType: link.linkType,
      },
    });
    if (!existingLink && link.toTown.connect?.id) {
      try {
        await prisma.townLink.create({
          data: link,
        });
      } catch (e) {
        // Link may already exist from 75-town network, skip
      }
    }
  }
  console.log(`   ✓ Boston-specific town links processed`);

  // Cambridge-specific town links
  console.log('\n🔗 Seeding Cambridge-specific town links...');
  for (const link of cambridgeTownLinks) {
    const existingLink = await prisma.townLink.findFirst({
      where: {
        fromTownId: 'us-ma-cambridge',
        toTownId: link.toTown.connect?.id,
        linkType: link.linkType,
      },
    });
    if (!existingLink && link.toTown.connect?.id) {
      try {
        await prisma.townLink.create({
          data: link,
        });
      } catch (e) {
        // Link may already exist, skip
      }
    }
  }
  console.log(`   ✓ Cambridge-specific town links processed`);

  // Arlington-specific town links
  console.log('\n🔗 Seeding Arlington-specific town links...');
  for (const link of arlingtonTownLinks) {
    const existingLink = await prisma.townLink.findFirst({
      where: {
        fromTownId: 'us-ma-arlington',
        toTownId: link.toTown.connect?.id,
        linkType: link.linkType,
      },
    });
    if (!existingLink && link.toTown.connect?.id) {
      try {
        await prisma.townLink.create({
          data: link,
        });
      } catch (e) {
        // Link may already exist, skip
      }
    }
  }
  console.log(`   ✓ Arlington-specific town links processed`);

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

  // 9b. Seed curated teacher content for MA towns
  console.log('\n📚 Seeding curated teacher content...');
  const teacherResult = await seedTeacherContent();
  console.log(`   ✓ Total: ${teacherResult.lessonPlans} lesson plans, ${teacherResult.primarySourcePackets} source packets, ${teacherResult.teacherWorksheets} worksheets`);

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
  - ${sources.length + concordSources.length + bostonSources.length + cambridgeSources.length + arlingtonSources.length} sources
  - ${TOP_75_TOWNS.length} towns (75-town network)
  - ${lexingtonPeople.length + concordPeople.length + bostonPeople.length + cambridgePeople.length + arlingtonPeople.length} people
  - ${lexingtonEvents.length + concordEvents.length + bostonEvents.length + cambridgeEvents.length + arlingtonEvents.length + salemEvents.length + marbleheadEvents.length + plymouthEvents.length + worcesterEvents.length + springfieldEvents.length} events
  - ${lexingtonStories.length + concordStories.length + bostonStories.length + cambridgeStories.length + arlingtonStories.length} stories
  - ${totalMAPlaces} places (Massachusetts)
  - ${linkResult.created} town links
  - ${1 + bostonRoutes.length + cambridgeRoutes.length + arlingtonRoutes.length} routes
  - 1 organization
  - ${changelogCount} changelog entries

Flagship towns:
  - Lexington: ${lexingtonEvents.length} events, ${lexingtonPeople.length} people, ${lexingtonStories.length} stories, ${lexingtonPlaces.length} places
  - Concord: ${concordEvents.length} events, ${concordPeople.length} people, ${concordStories.length} stories, ${concordPlaces.length} places
  - Boston: ${bostonEvents.length} events, ${bostonPeople.length} people, ${bostonStories.length} stories, ${bostonPlaces.length} places
  - Cambridge: ${cambridgeEvents.length} events, ${cambridgePeople.length} people, ${cambridgeStories.length} stories, ${cambridgePlaces.length} places
  - Arlington: ${arlingtonEvents.length} events, ${arlingtonPeople.length} people, ${arlingtonStories.length} stories, ${arlingtonPlaces.length} places

Micro-rollout towns:
  - Salem: ${salemEvents.length} events, ${salemPlaces.length} places
  - Marblehead: ${marbleheadEvents.length} events, ${marbleheadPlaces.length} places
  - Plymouth: ${plymouthEvents.length} events, ${plymouthPlaces.length} places
  - Worcester: ${worcesterEvents.length} events, ${worcesterPlaces.length} places
  - Springfield: ${springfieldEvents.length} events, ${springfieldPlaces.length} places

Next steps:
  1. Test the rankings: curl http://localhost:3000/rankings
  2. Test Lexington: curl http://localhost:3000/towns/lexington-ma
  3. Test Concord: curl http://localhost:3000/towns/concord-ma
  4. Test Boston: curl http://localhost:3000/towns/boston-ma
  5. Compare: curl http://localhost:3000/compare?townA=lexington-ma&townB=boston-ma
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
