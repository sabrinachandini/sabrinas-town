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
import {
  morristownTownUpdate,
  morristownEvents,
  morristownPeople,
  morristownStories,
  morristownThemeConnections,
} from './morristown.js';
import { morristownPlaces } from './newjersey/places/index.js';
import { lexingtonSources, LEXINGTON_SHARED_SOURCE_IDS } from './lexingtonSources.js';
import { salemEvents } from './salem.js';
import { marbleheadEvents } from './marblehead.js';
import { plymouthEvents } from './plymouth.js';
import { worcesterEvents } from './worcester.js';
import { springfieldEvents } from './springfield.js';
import { seedTeacherContent } from './teacher/index.js';
import { seedChangelogEntries } from './changelog.js';
import { seedClusters } from './clusters.js';
import {
  salemTownUpdate, salemPeople, salemEvents as salemExpandedEvents, salemStories,
  plymouthTownUpdate, plymouthPeople, plymouthEvents as plymouthExpandedEvents, plymouthStories,
  worcesterTownUpdate, worcesterPeople, worcesterEvents as worcesterExpandedEvents, worcesterStories,
  springfieldTownUpdate, springfieldPeople, springfieldEvents as springfieldExpandedEvents, springfieldStories,
  marbleheadTownUpdate, marbleheadPeople, marbleheadEvents as marbleheadExpandedEvents, marbleheadStories,
} from './massachusetts/content.js';
import {
  trentonTownUpdate, trentonPeople, trentonEvents, trentonStories,
  princetonTownUpdate, princetonPeople, princetonEvents as princetonExpandedEvents, princetonStories,
  monmouthTownUpdate, monmouthPeople, monmouthEvents, monmouthStories,
  newBrunswickTownUpdate, newBrunswickPeople, newBrunswickEvents, newBrunswickStories,
  fortLeeTownUpdate, fortLeePeople, fortLeeEvents, fortLeeStories,
} from './newjersey/content.js';
import {
  philadelphiaTownUpdate, philadelphiaPeople, philadelphiaEvents, philadelphiaStories,
  valleyForgeTownUpdate, valleyForgePeople, valleyForgeEvents, valleyForgeStories,
  yorkTownUpdate, yorkPeople, yorkEvents, yorkStories,
  germantownTownUpdate, germantownPeople, germantownEvents, germantownStories,
  carlisleTownUpdate, carlislePeople, carlisleEvents, carlisleStories,
  paoliTownUpdate, paoliPeople, paoliEvents, paoliStories,
} from './pennsylvania/content.js';
import {
  saratogaSpringsTownUpdate, saratogaSpringsPeople, saratogaSpringsEvents, saratogaSpringsStories,
  albanyTownUpdate, albanyPeople, albanyEvents, albanyStories,
  westPointTownUpdate, westPointPeople, westPointEvents, westPointStories,
  ticonderogaTownUpdate, ticonderogaPeople, ticonderogaEvents, ticonderogaStories,
  newYorkCityTownUpdate, newYorkCityPeople, newYorkCityEvents, newYorkCityStories,
} from './newyork/content.js';
import {
  newHavenTownUpdate, newHavenPeople, newHavenEvents, newHavenStories,
  newLondonTownUpdate, newLondonPeople, newLondonEvents, newLondonStories,
  danburyTownUpdate, danburyPeople, danburyEvents, danburyStories,
  grotonTownUpdate, grotonPeople, grotonEvents, grotonStories,
} from './connecticut/content.js';
import {
  newportTownUpdate, newportPeople, newportEvents, newportStories,
  providenceTownUpdate, providencePeople, providenceEvents, providenceStories,
} from './rhodeisland/content.js';
import {
  williamsburgTownUpdate, williamsburgPeople, williamsburgEvents, williamsburgStories,
  yorktownTownUpdate, yorktownPeople, yorktownEvents, yorktownStories,
  richmondTownUpdate, richmondPeople, richmondEvents, richmondStories,
  norfolkTownUpdate, norfolkPeople, norfolkEvents, norfolkStories,
  charlottesvilleTownUpdate, charlottesvillePeople, charlottesvilleEvents, charlottesvilleStories,
} from './virginia/content.js';
import {
  harlemHeightsTownUpdate, harlemHeightsPeople, harlemHeightsPlaces, harlemHeightsEvents, harlemHeightsStories, harlemHeightsLessonPlans, harlemHeightsAdditionalLinks,
  whitePlainsTownUpdate, whitePlainsPeople, whitePlainsPlaces, whitePlainsEvents, whitePlainsStories, whitePlainsLessonPlans, whitePlainsAdditionalLinks,
} from './sprints/nyc-cluster.js';
import {
  pittsburghTownUpdate, pittsburghPeople, pittsburghPlaces, pittsburghEvents, pittsburghStories, pittsburghLessonPlans, pittsburghAdditionalLinks,
} from './sprints/pa-pittsburgh.js';
import {
  kingstonTownUpdate, kingstonPeople, kingstonPlaces, kingstonEvents, kingstonStories, kingstonLessonPlans, kingstonAdditionalLinks,
  newburghTownUpdate, newburghPeople, newburghPlaces, newburghEvents, newburghStories, newburghLessonPlans, newburghAdditionalLinks,
} from './sprints/ny-hudson-valley.js';
import {
  stonyPointTownUpdate, stonyPointPeople, stonyPointPlaces, stonyPointEvents, stonyPointStories, stonyPointLessonPlans, stonyPointAdditionalLinks,
  crownPointTownUpdate, crownPointPeople, crownPointPlaces, crownPointEvents, crownPointStories, crownPointLessonPlans, crownPointAdditionalLinks,
} from './sprints/ny-forts.js';
import {
  doverTownUpdate, doverPeople, doverPlaces, doverEvents, doverStories, doverLessonPlans, doverAdditionalLinks,
  wilmingtonDeTownUpdate, wilmingtonDePeople, wilmingtonDePlaces, wilmingtonDeEvents, wilmingtonDeStories, wilmingtonDeLessonPlans, wilmingtonDeAdditionalLinks,
} from './sprints/de-cluster.js';
import {
  annapolisTownUpdate, annapolisPeople, annapolisPlaces, annapolisEvents, annapolisStories, annapolisLessonPlans, annapolisAdditionalLinks,
  baltimoreTownUpdate, baltimorePeople, baltimorePlaces, baltimoreEvents, baltimoreStories, baltimoreLessonPlans, baltimoreAdditionalLinks,
} from './sprints/md-cluster.js';
import {
  alexandriaTownUpdate, alexandriaPeople, alexandriaPlaces, alexandriaEvents, alexandriaStories, alexandriaLessonPlans, alexandriaAdditionalLinks,
  fredericksburgTownUpdate, fredericksburgPeople, fredericksburgPlaces, fredericksburgEvents, fredericksburgStories, fredericksburgLessonPlans, fredericksburgAdditionalLinks,
  mountVernonTownUpdate, mountVernonPeople, mountVernonPlaces, mountVernonEvents, mountVernonStories, mountVernonLessonPlans, mountVernonAdditionalLinks,
} from './sprints/va-northern.js';
import {
  portlandTownUpdate, portlandPeople, portlandPlaces, portlandEvents, portlandStories, portlandLessonPlans, portlandAdditionalLinks,
  castineTownUpdate, castinePeople, castinePlaces, castineEvents, castineStories, castineLessonPlans, castineAdditionalLinks,
} from './sprints/me-cluster.js';
import {
  benningtonTownUpdate, benningtonPeople, benningtonPlaces, benningtonEvents, benningtonStories, benningtonLessonPlans, benningtonAdditionalLinks,
  brattleboroTownUpdate, brattleboroPeople, brattleboroPlaces, brattleboroEvents, brattleboroStories, brattleboroLessonPlans, brattleboroAdditionalLinks,
} from './sprints/vt-cluster.js';
import {
  exeterTownUpdate, exeterPeople, exeterPlaces, exeterEvents, exeterStories, exeterLessonPlans, exeterAdditionalLinks,
  portsmouthTownUpdate, portsmouthPeople, portsmouthPlaces, portsmouthEvents, portsmouthStories, portsmouthLessonPlans, portsmouthAdditionalLinks,
} from './sprints/nh-cluster.js';
import {
  charlestonTownUpdate, charlestonPeople, charlestonPlaces, charlestonEvents, charlestonStories, charlestonLessonPlans, charlestonAdditionalLinks,
  camdenTownUpdate, camdenPeople, camdenPlaces, camdenEvents, camdenStories, camdenLessonPlans, camdenAdditionalLinks,
  cowpensTownUpdate, cowpensPeople, cowpensPlaces, cowpensEvents, cowpensStories, cowpensLessonPlans, cowpensAdditionalLinks,
  fortMoultrieTownUpdate, fortMoultriePeople, fortMoultrieePlaces, fortMoultrieEvents, fortMoultrieStories, fortMoultrieeLessonPlans, fortMoultrieAdditionalLinks,
  hobkirksHillTownUpdate, hobkirksHillPeople, hobkirksHillPlaces, hobkirksHillEvents, hobkirksHillStories, hobkirksHillLessonPlans, hobkirksHillAdditionalLinks,
} from './sprints/sc-cluster.js';
import {
  ninetySixTownUpdate, ninetySixPeople, ninetySixPlaces, ninetySixEvents, ninetySixStories, ninetySixLessonPlans, ninetySixAdditionalLinks,
  eutawSpringsTownUpdate, eutawSpringsPeople, eutawSpringsPlaces, eutawSpringsEvents, eutawSpringsStories, eutawSpringsLessonPlans, eutawSpringsAdditionalLinks,
  beaufortTownUpdate, beaufortPeople, beaufortPlaces, beaufortEvents, beaufortStories, beaufortLessonPlans, beaufortAdditionalLinks,
} from './sprints/sc-remaining.js';
import {
  guilfordCourthouseTownUpdate, guilfordCourthousePeople, guilfordCourthousePlaces, guilfordCourthouseEvents, guilfordCourthouseStories, guilfordCourthouseLessonPlans, guilfordCourthouseAdditionalLinks,
  kingsMountainTownUpdate, kingsMountainPeople, kingsMountainPlaces, kingsMountainEvents, kingsMountainStories, kingsMountainLessonPlans, kingsMountainAdditionalLinks,
} from './sprints/nc-battles.js';
import {
  newBernTownUpdate, newBernPeople, newBernPlaces, newBernEvents, newBernStories, newBernLessonPlans, newBernAdditionalLinks,
  wilmingtonNcTownUpdate, wilmingtonNcPeople, wilmingtonNcPlaces, wilmingtonNcEvents, wilmingtonNcStories, wilmingtonNcLessonPlans, wilmingtonNcAdditionalLinks,
} from './sprints/nc-coastal.js';
import {
  lexingtonTownPersons, lexingtonAdditionalPerson, lexingtonAdditionalEvents,
  concordTownPersons, concordAdditionalPerson, concordAdditionalEvents,
  salemTownPersons, salemAdditionalEvents,
  worcesterTownPersons, springfieldTownPersons, plymouthTownPersons,
} from './sprints/ma-flagship.js';
import {
  newHavenPlaces, newHavenAdditionalEvents, newHavenLessonPlans, newHavenAdditionalLinks,
  newLondonPlaces, newLondonAdditionalEvents, newLondonLessonPlans, newLondonAdditionalLinks,
  danburyPlaces, danburyAdditionalEvents, danburyLessonPlans, danburyAdditionalLinks,
  grotonPlaces, grotonAdditionalEvents, grotonLessonPlans, grotonAdditionalLinks,
  newportPlaces, newportAdditionalEvents, newportLessonPlans, newportAdditionalLinks,
  providencePlaces, providenceAdditionalEvents, providenceLessonPlans, providenceAdditionalLinks,
} from './sprints/ct-ri-expansion.js';
import {
  newYorkCityPlaces, newYorkCityAdditionalEvents, newYorkCityLessonPlans,
  saratogaSpringsPlaces, saratogaSpringsAdditionalEvents, saratogaSpringsLessonPlans,
  albanyPlaces, albanyAdditionalEvents, albanyLessonPlans, albanyAdditionalLinks,
  ticonderogaPlaces, ticonderogaAdditionalEvents, ticonderogaLessonPlans, ticonderogaAdditionalLinks,
  westPointPlaces, westPointAdditionalEvents, westPointLessonPlans, westPointAdditionalLinks,
} from './sprints/ny-expansion.js';
import {
  philadelphiaPlaces, philadelphiaAdditionalEvents, philadelphiaLessonPlans,
  valleyForgePlaces, valleyForgeAdditionalEvents, valleyForgeLessonPlans, valleyForgeAdditionalLinks,
  yorkPlaces, yorkAdditionalEvents, yorkLessonPlans, yorkAdditionalLinks,
  germantownPlaces, germantownAdditionalEvents, germantownLessonPlans, germantownAdditionalLinks,
  carlislePlaces, carlisleAdditionalEvents, carlisleLessonPlans, carlisleAdditionalLinks,
  paoliPlaces, paoliAdditionalEvents, paoliLessonPlans, paoliAdditionalLinks,
} from './sprints/pa-expansion.js';
import {
  williamsburgPlaces, williamsburgAdditionalEvents, williamsburgLessonPlans, williamsburgAdditionalLinks,
  yorktownPlaces, yorktownAdditionalEvents, yorktownLessonPlans, yorktownAdditionalLinks,
  richmondPlaces, richmondAdditionalEvents, richmondLessonPlans, richmondAdditionalLinks,
  norfolkPlaces, norfolkAdditionalEvents, norfolkLessonPlans, norfolkAdditionalLinks,
  charlottesvillePlaces, charlottesvilleAdditionalEvents, charlottesvilleLessonPlans, charlottesvilleAdditionalLinks,
} from './sprints/va-expansion.js';
import {
  fortLeePlaces, fortLeeAdditionalEvents, fortLeeLessonPlans, fortLeeAdditionalLinks,
  newBrunswickPlaces, newBrunswickAdditionalEvents, newBrunswickLessonPlans, newBrunswickAdditionalLinks,
  elizabethSources, elizabethAdditionalLinks,
  hackensackAdditionalPeople, hackensackSources, hackensackAdditionalLinks,
  monmouthAdditionalLinks,
} from './sprints/nj-remaining.js';
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

  // Boston people + TownPerson
  for (const person of bostonPeople) {
    await prisma.person.upsert({ where: { id: person.id }, update: person, create: person });
    const existingTP = await prisma.townPerson.findFirst({ where: { townId: 'us-ma-boston', personId: person.id } });
    if (!existingTP) await prisma.townPerson.create({ data: { town: { connect: { id: 'us-ma-boston' } }, person: { connect: { id: person.id } } } });
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

  // Cambridge people + TownPerson
  for (const person of cambridgePeople) {
    await prisma.person.upsert({ where: { id: person.id }, update: person, create: person });
    const existingTP = await prisma.townPerson.findFirst({ where: { townId: 'us-ma-cambridge', personId: person.id } });
    if (!existingTP) await prisma.townPerson.create({ data: { town: { connect: { id: 'us-ma-cambridge' } }, person: { connect: { id: person.id } } } });
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

  // Arlington people + TownPerson
  for (const person of arlingtonPeople) {
    await prisma.person.upsert({ where: { id: person.id }, update: person, create: person });
    const existingTP = await prisma.townPerson.findFirst({ where: { townId: 'us-ma-arlington', personId: person.id } });
    if (!existingTP) await prisma.townPerson.create({ data: { town: { connect: { id: 'us-ma-arlington' } }, person: { connect: { id: person.id } } } });
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

  // 4f. Seed Morristown flagship content (NJ v0)
  console.log('\n🏛️  Seeding Morristown flagship content...');

  // Morristown town update
  await prisma.town.update({
    where: { id: 'us-nj-morristown' },
    data: morristownTownUpdate,
  });
  console.log('   ✓ Morristown town updated');

  // Morristown people + TownPerson
  for (const person of morristownPeople) {
    await prisma.person.upsert({ where: { id: person.id }, update: person, create: person });
    const existingTP = await prisma.townPerson.findFirst({ where: { townId: 'us-nj-morristown', personId: person.id } });
    if (!existingTP) await prisma.townPerson.create({ data: { town: { connect: { id: 'us-nj-morristown' } }, person: { connect: { id: person.id } } } });
  }
  console.log(`   ✓ ${morristownPeople.length} Morristown people seeded`);

  // Morristown events
  for (const event of morristownEvents) {
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
  console.log(`   ✓ ${morristownEvents.length} Morristown events seeded`);

  // Morristown stories
  for (const story of morristownStories) {
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
  console.log(`   ✓ ${morristownStories.length} Morristown stories seeded`);

  // Morristown places
  for (const place of morristownPlaces) {
    await prisma.place.upsert({
      where: { id: place.id },
      update: {
        name: place.name,
        description: place.description,
        placeType: place.placeType,
        lat: place.lat,
        lng: place.lng,
        featured: place.featured,
        displayOrder: place.displayOrder,
      },
      create: place,
    });
  }
  console.log(`   ✓ ${morristownPlaces.length} Morristown places seeded`);

  // 4g. Seed Salem events (micro-rollout)
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

  // Morristown EventPerson connections
  await upsertEventPerson('event-morristown-first-winter', 'person-george-washington', 'Commander');
  await upsertEventPerson('event-morristown-first-winter', 'person-alexander-hamilton', 'Aide-de-Camp');
  await upsertEventPerson('event-morristown-hard-winter', 'person-george-washington', 'Commander');
  await upsertEventPerson('event-morristown-hard-winter', 'person-alexander-hamilton', 'Aide-de-Camp');
  await upsertEventPerson('event-morristown-hard-winter', 'person-martha-washington-morristown', 'Headquarters Manager');
  await upsertEventPerson('event-morristown-hard-winter', 'person-joseph-plumb-martin', 'Private Soldier');
  await upsertEventPerson('event-morristown-pa-mutiny', 'person-george-washington', 'Commander');
  await upsertEventPerson('event-morristown-smallpox-inoculation', 'person-george-washington', 'Decision Maker');
  await upsertEventPerson('event-morristown-arnold-treason', 'person-george-washington', 'Commander');
  await upsertEventPerson('event-morristown-arnold-treason', 'person-alexander-hamilton', 'Aide-de-Camp');

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

  // Morristown theme connections
  for (const conn of morristownThemeConnections) {
    await upsertTownTheme('us-nj-morristown', conn.themeId, conn.relevanceNote);
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

  // 12. Seed diverse changelog entries (global + categorized)
  console.log('\n📝 Seeding diverse changelog entries...');
  const diverseChangelogCount = await seedChangelogEntries();
  console.log(`   ✓ ${diverseChangelogCount} diverse changelog entries created`);

  // 13. Seed clusters, memberships, and bridges
  console.log('\n🗺️  Seeding clusters...');
  const clusterResult = await seedClusters();
  console.log(`   ✓ ${clusterResult.clusters} clusters seeded`);
  console.log(`   ✓ ${clusterResult.memberships} cluster-town memberships created`);
  console.log(`   ✓ ${clusterResult.bridges} cluster bridges created`);

  // 14. MA town content expansion (Salem, Plymouth, Worcester, Springfield, Marblehead)
  console.log('\n🏛️  Expanding Massachusetts town content...');
  const maTownExpansions = [
    { id: 'us-ma-salem', name: 'Salem', update: salemTownUpdate, people: salemPeople, events: salemExpandedEvents, stories: salemStories },
    { id: 'us-ma-plymouth', name: 'Plymouth', update: plymouthTownUpdate, people: plymouthPeople, events: plymouthExpandedEvents, stories: plymouthStories },
    { id: 'us-ma-worcester', name: 'Worcester', update: worcesterTownUpdate, people: worcesterPeople, events: worcesterExpandedEvents, stories: worcesterStories },
    { id: 'us-ma-springfield', name: 'Springfield', update: springfieldTownUpdate, people: springfieldPeople, events: springfieldExpandedEvents, stories: springfieldStories },
    { id: 'us-ma-marblehead', name: 'Marblehead', update: marbleheadTownUpdate, people: marbleheadPeople, events: marbleheadExpandedEvents, stories: marbleheadStories },
  ];

  for (const town of maTownExpansions) {
    // Update town overview
    await prisma.town.update({ where: { id: town.id }, data: town.update });

    // People + TownPerson
    for (const person of town.people) {
      await prisma.person.upsert({
        where: { id: person.id! },
        update: { name: person.name, bioShort: person.bioShort, roles: person.roles },
        create: person,
      });
      const existingTP = await prisma.townPerson.findFirst({ where: { townId: town.id, personId: person.id! } });
      if (!existingTP) await prisma.townPerson.create({ data: { town: { connect: { id: town.id } }, person: { connect: { id: person.id! } } } });
    }

    // Events
    for (const event of town.events) {
      await prisma.event.upsert({
        where: { id: event.id! },
        update: { name: event.name, summary: event.summary, significanceWeight: event.significanceWeight },
        create: event,
      });
    }

    // Stories
    for (const story of town.stories) {
      const existing = await prisma.story.findFirst({ where: { id: story.id! } });
      if (!existing) {
        await prisma.story.create({ data: story });
      } else {
        await prisma.story.update({
          where: { id: story.id! },
          data: { title: story.title, textVersion: story.textVersion, verificationStatus: story.verificationStatus },
        });
      }
    }

    console.log(`   ✓ ${town.name}: ${town.people.length} people, ${town.events.length} events, ${town.stories.length} stories`);
  }

  // 15. NJ town content expansion
  console.log('\n🏛️  Expanding New Jersey town content...');
  const njTownExpansions = [
    { id: 'us-nj-trenton', name: 'Trenton', update: trentonTownUpdate, people: trentonPeople, events: trentonEvents, stories: trentonStories },
    { id: 'us-nj-princeton', name: 'Princeton', update: princetonTownUpdate, people: princetonPeople, events: princetonExpandedEvents, stories: princetonStories },
    { id: 'us-nj-monmouth', name: 'Monmouth', update: monmouthTownUpdate, people: monmouthPeople, events: monmouthEvents, stories: monmouthStories },
    { id: 'us-nj-new-brunswick', name: 'New Brunswick', update: newBrunswickTownUpdate, people: newBrunswickPeople, events: newBrunswickEvents, stories: newBrunswickStories },
    { id: 'us-nj-fort-lee', name: 'Fort Lee', update: fortLeeTownUpdate, people: fortLeePeople, events: fortLeeEvents, stories: fortLeeStories },
  ];

  for (const town of njTownExpansions) {
    await prisma.town.update({ where: { id: town.id }, data: town.update });
    for (const person of town.people) { await prisma.person.upsert({ where: { id: person.id! }, update: { name: person.name, bioShort: person.bioShort, roles: person.roles }, create: person }); const existingTP = await prisma.townPerson.findFirst({ where: { townId: town.id, personId: person.id! } }); if (!existingTP) await prisma.townPerson.create({ data: { town: { connect: { id: town.id } }, person: { connect: { id: person.id! } } } }); }
    for (const event of town.events) { await prisma.event.upsert({ where: { id: event.id! }, update: { name: event.name, summary: event.summary, significanceWeight: event.significanceWeight }, create: event }); }
    for (const story of town.stories) { const ex = await prisma.story.findFirst({ where: { id: story.id! } }); if (!ex) { await prisma.story.create({ data: story }); } else { await prisma.story.update({ where: { id: story.id! }, data: { title: story.title, textVersion: story.textVersion } }); } }
    console.log(`   ✓ ${town.name}: ${town.people.length} people, ${town.events.length} events, ${town.stories.length} stories`);
  }

  // 16. PA town content expansion
  console.log('\n🏛️  Expanding Pennsylvania town content...');
  const paTownExpansions = [
    { id: 'us-pa-philadelphia', name: 'Philadelphia', update: philadelphiaTownUpdate, people: philadelphiaPeople, events: philadelphiaEvents, stories: philadelphiaStories },
    { id: 'us-pa-valley-forge', name: 'Valley Forge', update: valleyForgeTownUpdate, people: valleyForgePeople, events: valleyForgeEvents, stories: valleyForgeStories },
    { id: 'us-pa-york', name: 'York', update: yorkTownUpdate, people: yorkPeople, events: yorkEvents, stories: yorkStories },
    { id: 'us-pa-germantown', name: 'Germantown', update: germantownTownUpdate, people: germantownPeople, events: germantownEvents, stories: germantownStories },
    { id: 'us-pa-carlisle', name: 'Carlisle', update: carlisleTownUpdate, people: carlislePeople, events: carlisleEvents, stories: carlisleStories },
    { id: 'us-pa-paoli', name: 'Paoli', update: paoliTownUpdate, people: paoliPeople, events: paoliEvents, stories: paoliStories },
  ];

  for (const town of paTownExpansions) {
    await prisma.town.update({ where: { id: town.id }, data: town.update });
    for (const person of town.people) { await prisma.person.upsert({ where: { id: person.id! }, update: { name: person.name, bioShort: person.bioShort, roles: person.roles }, create: person }); const existingTP = await prisma.townPerson.findFirst({ where: { townId: town.id, personId: person.id! } }); if (!existingTP) await prisma.townPerson.create({ data: { town: { connect: { id: town.id } }, person: { connect: { id: person.id! } } } }); }
    for (const event of town.events) { await prisma.event.upsert({ where: { id: event.id! }, update: { name: event.name, summary: event.summary, significanceWeight: event.significanceWeight }, create: event }); }
    for (const story of town.stories) { const ex = await prisma.story.findFirst({ where: { id: story.id! } }); if (!ex) { await prisma.story.create({ data: story }); } else { await prisma.story.update({ where: { id: story.id! }, data: { title: story.title, textVersion: story.textVersion } }); } }
    console.log(`   ✓ ${town.name}: ${town.people.length} people, ${town.events.length} events, ${town.stories.length} stories`);
  }

  // 17. NY town content expansion
  console.log('\n🏛️  Expanding New York town content...');
  const nyTownExpansions = [
    { id: 'us-ny-saratoga-springs', name: 'Saratoga Springs', update: saratogaSpringsTownUpdate, people: saratogaSpringsPeople, events: saratogaSpringsEvents, stories: saratogaSpringsStories },
    { id: 'us-ny-albany', name: 'Albany', update: albanyTownUpdate, people: albanyPeople, events: albanyEvents, stories: albanyStories },
    { id: 'us-ny-west-point', name: 'West Point', update: westPointTownUpdate, people: westPointPeople, events: westPointEvents, stories: westPointStories },
    { id: 'us-ny-ticonderoga', name: 'Ticonderoga', update: ticonderogaTownUpdate, people: ticonderogaPeople, events: ticonderogaEvents, stories: ticonderogaStories },
    { id: 'us-ny-new-york-city', name: 'New York City', update: newYorkCityTownUpdate, people: newYorkCityPeople, events: newYorkCityEvents, stories: newYorkCityStories },
  ];

  for (const town of nyTownExpansions) {
    await prisma.town.update({ where: { id: town.id }, data: town.update });
    for (const person of town.people) { await prisma.person.upsert({ where: { id: person.id! }, update: { name: person.name, bioShort: person.bioShort, roles: person.roles }, create: person }); const existingTP = await prisma.townPerson.findFirst({ where: { townId: town.id, personId: person.id! } }); if (!existingTP) await prisma.townPerson.create({ data: { town: { connect: { id: town.id } }, person: { connect: { id: person.id! } } } }); }
    for (const event of town.events) { await prisma.event.upsert({ where: { id: event.id! }, update: { name: event.name, summary: event.summary, significanceWeight: event.significanceWeight }, create: event }); }
    for (const story of town.stories) { const ex = await prisma.story.findFirst({ where: { id: story.id! } }); if (!ex) { await prisma.story.create({ data: story }); } else { await prisma.story.update({ where: { id: story.id! }, data: { title: story.title, textVersion: story.textVersion } }); } }
    console.log(`   ✓ ${town.name}: ${town.people.length} people, ${town.events.length} events, ${town.stories.length} stories`);
  }

  // 18. CT town content expansion
  console.log('\n🏛️  Expanding Connecticut town content...');
  const ctTownExpansions = [
    { id: 'us-ct-new-haven', name: 'New Haven', update: newHavenTownUpdate, people: newHavenPeople, events: newHavenEvents, stories: newHavenStories },
    { id: 'us-ct-new-london', name: 'New London', update: newLondonTownUpdate, people: newLondonPeople, events: newLondonEvents, stories: newLondonStories },
    { id: 'us-ct-danbury', name: 'Danbury', update: danburyTownUpdate, people: danburyPeople, events: danburyEvents, stories: danburyStories },
    { id: 'us-ct-groton', name: 'Groton', update: grotonTownUpdate, people: grotonPeople, events: grotonEvents, stories: grotonStories },
  ];

  for (const town of ctTownExpansions) {
    await prisma.town.update({ where: { id: town.id }, data: town.update });
    for (const person of town.people) { await prisma.person.upsert({ where: { id: person.id! }, update: { name: person.name, bioShort: person.bioShort, roles: person.roles }, create: person }); const existingTP = await prisma.townPerson.findFirst({ where: { townId: town.id, personId: person.id! } }); if (!existingTP) await prisma.townPerson.create({ data: { town: { connect: { id: town.id } }, person: { connect: { id: person.id! } } } }); }
    for (const event of town.events) { await prisma.event.upsert({ where: { id: event.id! }, update: { name: event.name, summary: event.summary, significanceWeight: event.significanceWeight }, create: event }); }
    for (const story of town.stories) { const ex = await prisma.story.findFirst({ where: { id: story.id! } }); if (!ex) { await prisma.story.create({ data: story }); } else { await prisma.story.update({ where: { id: story.id! }, data: { title: story.title, textVersion: story.textVersion } }); } }
    console.log(`   ✓ ${town.name}: ${town.people.length} people, ${town.events.length} events, ${town.stories.length} stories`);
  }

  // 19. RI town content expansion
  console.log('\n🏛️  Expanding Rhode Island town content...');
  const riTownExpansions = [
    { id: 'us-ri-newport', name: 'Newport', update: newportTownUpdate, people: newportPeople, events: newportEvents, stories: newportStories },
    { id: 'us-ri-providence', name: 'Providence', update: providenceTownUpdate, people: providencePeople, events: providenceEvents, stories: providenceStories },
  ];

  for (const town of riTownExpansions) {
    await prisma.town.update({ where: { id: town.id }, data: town.update });
    for (const person of town.people) { await prisma.person.upsert({ where: { id: person.id! }, update: { name: person.name, bioShort: person.bioShort, roles: person.roles }, create: person }); const existingTP = await prisma.townPerson.findFirst({ where: { townId: town.id, personId: person.id! } }); if (!existingTP) await prisma.townPerson.create({ data: { town: { connect: { id: town.id } }, person: { connect: { id: person.id! } } } }); }
    for (const event of town.events) { await prisma.event.upsert({ where: { id: event.id! }, update: { name: event.name, summary: event.summary, significanceWeight: event.significanceWeight }, create: event }); }
    for (const story of town.stories) { const ex = await prisma.story.findFirst({ where: { id: story.id! } }); if (!ex) { await prisma.story.create({ data: story }); } else { await prisma.story.update({ where: { id: story.id! }, data: { title: story.title, textVersion: story.textVersion } }); } }
    console.log(`   ✓ ${town.name}: ${town.people.length} people, ${town.events.length} events, ${town.stories.length} stories`);
  }

  // 20. VA town content expansion
  console.log('\n🏛️  Expanding Virginia town content...');
  const vaTownExpansions = [
    { id: 'us-va-williamsburg', name: 'Williamsburg', update: williamsburgTownUpdate, people: williamsburgPeople, events: williamsburgEvents, stories: williamsburgStories },
    { id: 'us-va-yorktown', name: 'Yorktown', update: yorktownTownUpdate, people: yorktownPeople, events: yorktownEvents, stories: yorktownStories },
    { id: 'us-va-richmond', name: 'Richmond', update: richmondTownUpdate, people: richmondPeople, events: richmondEvents, stories: richmondStories },
    { id: 'us-va-norfolk', name: 'Norfolk', update: norfolkTownUpdate, people: norfolkPeople, events: norfolkEvents, stories: norfolkStories },
    { id: 'us-va-charlottesville', name: 'Charlottesville', update: charlottesvilleTownUpdate, people: charlottesvillePeople, events: charlottesvilleEvents, stories: charlottesvilleStories },
  ];

  for (const town of vaTownExpansions) {
    await prisma.town.update({ where: { id: town.id }, data: town.update });
    for (const person of town.people) { await prisma.person.upsert({ where: { id: person.id! }, update: { name: person.name, bioShort: person.bioShort, roles: person.roles }, create: person }); const existingTP = await prisma.townPerson.findFirst({ where: { townId: town.id, personId: person.id! } }); if (!existingTP) await prisma.townPerson.create({ data: { town: { connect: { id: town.id } }, person: { connect: { id: person.id! } } } }); }
    for (const event of town.events) { await prisma.event.upsert({ where: { id: event.id! }, update: { name: event.name, summary: event.summary, significanceWeight: event.significanceWeight }, create: event }); }
    for (const story of town.stories) { const ex = await prisma.story.findFirst({ where: { id: story.id! } }); if (!ex) { await prisma.story.create({ data: story }); } else { await prisma.story.update({ where: { id: story.id! }, data: { title: story.title, textVersion: story.textVersion } }); } }
    console.log(`   ✓ ${town.name}: ${town.people.length} people, ${town.events.length} events, ${town.stories.length} stories`);
  }

  // 21. Sprint 1 — NYC cluster (Harlem Heights, White Plains) — comprehensive expansion
  console.log('\n🏛️  Sprint 1: NYC cluster comprehensive expansion...');
  const nycSprintTowns = [
    { id: 'us-ny-harlem-heights', name: 'Harlem Heights', update: harlemHeightsTownUpdate, people: harlemHeightsPeople, places: harlemHeightsPlaces, events: harlemHeightsEvents, stories: harlemHeightsStories, lessonPlans: harlemHeightsLessonPlans, links: harlemHeightsAdditionalLinks },
    { id: 'us-ny-white-plains', name: 'White Plains', update: whitePlainsTownUpdate, people: whitePlainsPeople, places: whitePlainsPlaces, events: whitePlainsEvents, stories: whitePlainsStories, lessonPlans: whitePlainsLessonPlans, links: whitePlainsAdditionalLinks },
  ];

  for (const town of nycSprintTowns) {
    // Overview
    await prisma.town.update({ where: { id: town.id }, data: town.update });

    // People + TownPerson
    for (const { person, connectionNote } of town.people) {
      await prisma.person.upsert({ where: { id: person.id! }, update: { name: person.name, bioShort: person.bioShort, roles: person.roles }, create: person });
      const existing = await prisma.townPerson.findFirst({ where: { townId: town.id, personId: person.id! } });
      if (!existing) { await prisma.townPerson.create({ data: { town: { connect: { id: town.id } }, person: { connect: { id: person.id! } }, connectionNote } }); }
    }

    // Places
    for (const place of town.places) {
      await prisma.place.upsert({
        where: { id: place.id! },
        update: { name: place.name, placeType: place.placeType, description: place.description, lat: place.lat, lng: place.lng, address: place.address, hours: place.hours, admission: place.admission, website: place.website, phone: place.phone, accessibilityNotes: place.accessibilityNotes, parkingNotes: place.parkingNotes, amenities: place.amenities, historicalNote: place.historicalNote, displayOrder: place.displayOrder, featured: place.featured },
        create: place,
      });
    }

    // Events
    for (const event of town.events) { await prisma.event.upsert({ where: { id: event.id! }, update: { name: event.name, summary: event.summary, significanceWeight: event.significanceWeight }, create: event }); }

    // Stories
    for (const story of town.stories) { const ex = await prisma.story.findFirst({ where: { id: story.id! } }); if (!ex) { await prisma.story.create({ data: story }); } else { await prisma.story.update({ where: { id: story.id! }, data: { title: story.title, textVersion: story.textVersion } }); } }

    // Lesson Plans (delete + recreate for idempotency)
    await prisma.lessonPlan.deleteMany({ where: { townId: town.id } });
    for (const lp of town.lessonPlans) { await prisma.lessonPlan.create({ data: lp }); }

    // Additional Town Links
    for (const link of town.links) {
      const existing = await prisma.townLink.findFirst({ where: { fromTownId: town.id, toTownId: link.toTownId, linkType: link.linkType as any } });
      if (!existing) { try { await prisma.townLink.create({ data: { fromTown: { connect: { id: town.id } }, toTown: { connect: { id: link.toTownId } }, linkType: link.linkType as any, reason: link.reason, weight: link.weight } }); } catch (e) { /* skip if exists */ } }
    }

    console.log(`   ✓ ${town.name}: ${town.people.length} people, ${town.places.length} places, ${town.events.length} events, ${town.stories.length} stories, ${town.lessonPlans.length} lesson plans`);
  }

  // 22. Sprint 7 — Pittsburgh comprehensive expansion
  console.log('\n🏛️  Sprint 7: Pittsburgh comprehensive expansion...');
  const pittsburghSprintTowns = [
    { id: 'us-pa-pittsburgh', name: 'Pittsburgh', update: pittsburghTownUpdate, people: pittsburghPeople, places: pittsburghPlaces, events: pittsburghEvents, stories: pittsburghStories, lessonPlans: pittsburghLessonPlans, links: pittsburghAdditionalLinks },
  ];

  for (const town of pittsburghSprintTowns) {
    await prisma.town.update({ where: { id: town.id }, data: town.update });
    for (const { person, connectionNote } of town.people) {
      await prisma.person.upsert({ where: { id: person.id! }, update: { name: person.name, bioShort: person.bioShort, roles: person.roles }, create: person });
      const existing = await prisma.townPerson.findFirst({ where: { townId: town.id, personId: person.id! } });
      if (!existing) { await prisma.townPerson.create({ data: { town: { connect: { id: town.id } }, person: { connect: { id: person.id! } }, connectionNote } }); }
    }
    for (const place of town.places) {
      await prisma.place.upsert({ where: { id: place.id! }, update: { name: place.name, placeType: place.placeType, description: place.description, lat: place.lat, lng: place.lng, address: place.address, hours: place.hours, admission: place.admission, website: place.website, phone: place.phone, accessibilityNotes: place.accessibilityNotes, parkingNotes: place.parkingNotes, amenities: place.amenities, historicalNote: place.historicalNote, displayOrder: place.displayOrder, featured: place.featured }, create: place });
    }
    for (const event of town.events) { await prisma.event.upsert({ where: { id: event.id! }, update: { name: event.name, summary: event.summary, significanceWeight: event.significanceWeight }, create: event }); }
    for (const story of town.stories) { const ex = await prisma.story.findFirst({ where: { id: story.id! } }); if (!ex) { await prisma.story.create({ data: story }); } else { await prisma.story.update({ where: { id: story.id! }, data: { title: story.title, textVersion: story.textVersion } }); } }
    await prisma.lessonPlan.deleteMany({ where: { townId: town.id } });
    for (const lp of town.lessonPlans) { await prisma.lessonPlan.create({ data: lp }); }
    for (const link of town.links) {
      const existing = await prisma.townLink.findFirst({ where: { fromTownId: town.id, toTownId: link.toTownId, linkType: link.linkType as any } });
      if (!existing) { try { await prisma.townLink.create({ data: { fromTown: { connect: { id: town.id } }, toTown: { connect: { id: link.toTownId } }, linkType: link.linkType as any, reason: link.reason, weight: link.weight } }); } catch (e) { /* skip */ } }
    }
    console.log(`   ✓ ${town.name}: ${town.people.length} people, ${town.places.length} places, ${town.events.length} events, ${town.stories.length} stories, ${town.lessonPlans.length} lesson plans`);
  }

  // 23. Sprints 2-6 — comprehensive expansion for remaining towns
  console.log('\n🏛️  Sprints 2-6: Comprehensive expansion (19 towns)...');
  const sprintTowns = [
    // Sprint 2: Other NY
    { id: 'us-ny-kingston', name: 'Kingston', update: kingstonTownUpdate, people: kingstonPeople, places: kingstonPlaces, events: kingstonEvents, stories: kingstonStories, lessonPlans: kingstonLessonPlans, links: kingstonAdditionalLinks },
    { id: 'us-ny-newburgh', name: 'Newburgh', update: newburghTownUpdate, people: newburghPeople, places: newburghPlaces, events: newburghEvents, stories: newburghStories, lessonPlans: newburghLessonPlans, links: newburghAdditionalLinks },
    { id: 'us-ny-stony-point', name: 'Stony Point', update: stonyPointTownUpdate, people: stonyPointPeople, places: stonyPointPlaces, events: stonyPointEvents, stories: stonyPointStories, lessonPlans: stonyPointLessonPlans, links: stonyPointAdditionalLinks },
    { id: 'us-ny-crown-point', name: 'Crown Point', update: crownPointTownUpdate, people: crownPointPeople, places: crownPointPlaces, events: crownPointEvents, stories: crownPointStories, lessonPlans: crownPointLessonPlans, links: crownPointAdditionalLinks },
    // Sprint 3: SC (5 towns from sc-cluster)
    { id: 'us-sc-charleston', name: 'Charleston', update: charlestonTownUpdate, people: charlestonPeople, places: charlestonPlaces, events: charlestonEvents, stories: charlestonStories, lessonPlans: charlestonLessonPlans, links: charlestonAdditionalLinks },
    { id: 'us-sc-camden', name: 'Camden', update: camdenTownUpdate, people: camdenPeople, places: camdenPlaces, events: camdenEvents, stories: camdenStories, lessonPlans: camdenLessonPlans, links: camdenAdditionalLinks },
    { id: 'us-sc-cowpens', name: 'Cowpens', update: cowpensTownUpdate, people: cowpensPeople, places: cowpensPlaces, events: cowpensEvents, stories: cowpensStories, lessonPlans: cowpensLessonPlans, links: cowpensAdditionalLinks },
    { id: 'us-sc-fort-moultrie', name: 'Fort Moultrie', update: fortMoultrieTownUpdate, people: fortMoultriePeople, places: fortMoultrieePlaces, events: fortMoultrieEvents, stories: fortMoultrieStories, lessonPlans: fortMoultrieeLessonPlans, links: fortMoultrieAdditionalLinks },
    { id: 'us-sc-hobkirks-hill', name: "Hobkirk's Hill", update: hobkirksHillTownUpdate, people: hobkirksHillPeople, places: hobkirksHillPlaces, events: hobkirksHillEvents, stories: hobkirksHillStories, lessonPlans: hobkirksHillLessonPlans, links: hobkirksHillAdditionalLinks },
    { id: 'us-sc-ninety-six', name: 'Ninety Six', update: ninetySixTownUpdate, people: ninetySixPeople, places: ninetySixPlaces, events: ninetySixEvents, stories: ninetySixStories, lessonPlans: ninetySixLessonPlans, links: ninetySixAdditionalLinks },
    { id: 'us-sc-eutaw-springs', name: 'Eutaw Springs', update: eutawSpringsTownUpdate, people: eutawSpringsPeople, places: eutawSpringsPlaces, events: eutawSpringsEvents, stories: eutawSpringsStories, lessonPlans: eutawSpringsLessonPlans, links: eutawSpringsAdditionalLinks },
    { id: 'us-sc-beaufort', name: 'Beaufort', update: beaufortTownUpdate, people: beaufortPeople, places: beaufortPlaces, events: beaufortEvents, stories: beaufortStories, lessonPlans: beaufortLessonPlans, links: beaufortAdditionalLinks },
    // Sprint 4: NC
    { id: 'us-nc-guilford-courthouse', name: 'Guilford Courthouse', update: guilfordCourthouseTownUpdate, people: guilfordCourthousePeople, places: guilfordCourthousePlaces, events: guilfordCourthouseEvents, stories: guilfordCourthouseStories, lessonPlans: guilfordCourthouseLessonPlans, links: guilfordCourthouseAdditionalLinks },
    { id: 'us-nc-kings-mountain', name: 'Kings Mountain', update: kingsMountainTownUpdate, people: kingsMountainPeople, places: kingsMountainPlaces, events: kingsMountainEvents, stories: kingsMountainStories, lessonPlans: kingsMountainLessonPlans, links: kingsMountainAdditionalLinks },
    { id: 'us-nc-new-bern', name: 'New Bern', update: newBernTownUpdate, people: newBernPeople, places: newBernPlaces, events: newBernEvents, stories: newBernStories, lessonPlans: newBernLessonPlans, links: newBernAdditionalLinks },
    { id: 'us-nc-wilmington', name: 'Wilmington NC', update: wilmingtonNcTownUpdate, people: wilmingtonNcPeople, places: wilmingtonNcPlaces, events: wilmingtonNcEvents, stories: wilmingtonNcStories, lessonPlans: wilmingtonNcLessonPlans, links: wilmingtonNcAdditionalLinks },
    // Sprint 5: DMV
    { id: 'us-de-dover', name: 'Dover', update: doverTownUpdate, people: doverPeople, places: doverPlaces, events: doverEvents, stories: doverStories, lessonPlans: doverLessonPlans, links: doverAdditionalLinks },
    { id: 'us-de-wilmington', name: 'Wilmington DE', update: wilmingtonDeTownUpdate, people: wilmingtonDePeople, places: wilmingtonDePlaces, events: wilmingtonDeEvents, stories: wilmingtonDeStories, lessonPlans: wilmingtonDeLessonPlans, links: wilmingtonDeAdditionalLinks },
    { id: 'us-md-annapolis', name: 'Annapolis', update: annapolisTownUpdate, people: annapolisPeople, places: annapolisPlaces, events: annapolisEvents, stories: annapolisStories, lessonPlans: annapolisLessonPlans, links: annapolisAdditionalLinks },
    { id: 'us-md-baltimore', name: 'Baltimore', update: baltimoreTownUpdate, people: baltimorePeople, places: baltimorePlaces, events: baltimoreEvents, stories: baltimoreStories, lessonPlans: baltimoreLessonPlans, links: baltimoreAdditionalLinks },
    { id: 'us-va-alexandria', name: 'Alexandria', update: alexandriaTownUpdate, people: alexandriaPeople, places: alexandriaPlaces, events: alexandriaEvents, stories: alexandriaStories, lessonPlans: alexandriaLessonPlans, links: alexandriaAdditionalLinks },
    { id: 'us-va-fredericksburg', name: 'Fredericksburg', update: fredericksburgTownUpdate, people: fredericksburgPeople, places: fredericksburgPlaces, events: fredericksburgEvents, stories: fredericksburgStories, lessonPlans: fredericksburgLessonPlans, links: fredericksburgAdditionalLinks },
    { id: 'us-va-mount-vernon', name: 'Mount Vernon', update: mountVernonTownUpdate, people: mountVernonPeople, places: mountVernonPlaces, events: mountVernonEvents, stories: mountVernonStories, lessonPlans: mountVernonLessonPlans, links: mountVernonAdditionalLinks },
    // Sprint 6: Northern New England
    { id: 'us-me-portland', name: 'Portland', update: portlandTownUpdate, people: portlandPeople, places: portlandPlaces, events: portlandEvents, stories: portlandStories, lessonPlans: portlandLessonPlans, links: portlandAdditionalLinks },
    { id: 'us-me-castine', name: 'Castine', update: castineTownUpdate, people: castinePeople, places: castinePlaces, events: castineEvents, stories: castineStories, lessonPlans: castineLessonPlans, links: castineAdditionalLinks },
    { id: 'us-vt-bennington', name: 'Bennington', update: benningtonTownUpdate, people: benningtonPeople, places: benningtonPlaces, events: benningtonEvents, stories: benningtonStories, lessonPlans: benningtonLessonPlans, links: benningtonAdditionalLinks },
    { id: 'us-vt-brattleboro', name: 'Brattleboro', update: brattleboroTownUpdate, people: brattleboroPeople, places: brattleboroPlaces, events: brattleboroEvents, stories: brattleboroStories, lessonPlans: brattleboroLessonPlans, links: brattleboroAdditionalLinks },
    { id: 'us-nh-exeter', name: 'Exeter', update: exeterTownUpdate, people: exeterPeople, places: exeterPlaces, events: exeterEvents, stories: exeterStories, lessonPlans: exeterLessonPlans, links: exeterAdditionalLinks },
    { id: 'us-nh-portsmouth', name: 'Portsmouth', update: portsmouthTownUpdate, people: portsmouthPeople, places: portsmouthPlaces, events: portsmouthEvents, stories: portsmouthStories, lessonPlans: portsmouthLessonPlans, links: portsmouthAdditionalLinks },
  ];

  for (const town of sprintTowns) {
    await prisma.town.update({ where: { id: town.id }, data: town.update });
    for (const { person, connectionNote } of town.people) {
      await prisma.person.upsert({ where: { id: person.id! }, update: { name: person.name, bioShort: person.bioShort, roles: person.roles }, create: person });
      const existing = await prisma.townPerson.findFirst({ where: { townId: town.id, personId: person.id! } });
      if (!existing) { await prisma.townPerson.create({ data: { town: { connect: { id: town.id } }, person: { connect: { id: person.id! } }, connectionNote } }); }
    }
    for (const place of town.places) {
      await prisma.place.upsert({ where: { id: place.id! }, update: { name: place.name, placeType: place.placeType, description: place.description, lat: place.lat, lng: place.lng, address: place.address, hours: place.hours, admission: place.admission, website: place.website, phone: place.phone, accessibilityNotes: place.accessibilityNotes, parkingNotes: place.parkingNotes, amenities: place.amenities, historicalNote: place.historicalNote, displayOrder: place.displayOrder, featured: place.featured }, create: place });
    }
    for (const event of town.events) { await prisma.event.upsert({ where: { id: event.id! }, update: { name: event.name, summary: event.summary, significanceWeight: event.significanceWeight }, create: event }); }
    for (const story of town.stories) { const ex = await prisma.story.findFirst({ where: { id: story.id! } }); if (!ex) { await prisma.story.create({ data: story }); } else { await prisma.story.update({ where: { id: story.id! }, data: { title: story.title, textVersion: story.textVersion } }); } }
    await prisma.lessonPlan.deleteMany({ where: { townId: town.id } });
    for (const lp of town.lessonPlans) { await prisma.lessonPlan.create({ data: lp }); }
    for (const link of town.links) {
      const existing = await prisma.townLink.findFirst({ where: { fromTownId: town.id, toTownId: link.toTownId, linkType: link.linkType as any } });
      if (!existing) { try { await prisma.townLink.create({ data: { fromTown: { connect: { id: town.id } }, toTown: { connect: { id: link.toTownId } }, linkType: link.linkType as any, reason: link.reason, weight: link.weight } }); } catch (e) { /* skip */ } }
    }
    console.log(`   ✓ ${town.name}: ${town.people.length} people, ${town.places.length} places, ${town.events.length} events, ${town.stories.length} stories, ${town.lessonPlans.length} lesson plans`);
  }

  // 24. MA Flagship TownPerson links + gap-closing events/persons
  console.log('\n🏛️  Linking MA flagship town people + filling event gaps...');
  // Lexington: add 1 new person + TownPerson links + 4 events
  await prisma.person.upsert({ where: { id: lexingtonAdditionalPerson.id! }, update: { name: lexingtonAdditionalPerson.name, bioShort: lexingtonAdditionalPerson.bioShort, roles: lexingtonAdditionalPerson.roles }, create: lexingtonAdditionalPerson });
  for (const tp of lexingtonTownPersons) {
    const existing = await prisma.townPerson.findFirst({ where: { townId: 'us-ma-lexington', personId: tp.personId } });
    if (!existing) { await prisma.townPerson.create({ data: { town: { connect: { id: 'us-ma-lexington' } }, person: { connect: { id: tp.personId } }, connectionNote: tp.connectionNote } }); }
  }
  for (const event of lexingtonAdditionalEvents) { await prisma.event.upsert({ where: { id: event.id! }, update: { name: event.name, summary: event.summary, significanceWeight: event.significanceWeight }, create: event }); }
  console.log(`   ✓ Lexington: ${lexingtonTownPersons.length} TownPerson links, ${lexingtonAdditionalEvents.length} new events`);

  // Concord: add 1 new person + TownPerson links + 4 events
  await prisma.person.upsert({ where: { id: concordAdditionalPerson.id! }, update: { name: concordAdditionalPerson.name, bioShort: concordAdditionalPerson.bioShort, roles: concordAdditionalPerson.roles }, create: concordAdditionalPerson });
  for (const tp of concordTownPersons) {
    const existing = await prisma.townPerson.findFirst({ where: { townId: 'us-ma-concord', personId: tp.personId } });
    if (!existing) { await prisma.townPerson.create({ data: { town: { connect: { id: 'us-ma-concord' } }, person: { connect: { id: tp.personId } }, connectionNote: tp.connectionNote } }); }
  }
  for (const event of concordAdditionalEvents) { await prisma.event.upsert({ where: { id: event.id! }, update: { name: event.name, summary: event.summary, significanceWeight: event.significanceWeight }, create: event }); }
  console.log(`   ✓ Concord: ${concordTownPersons.length} TownPerson links, ${concordAdditionalEvents.length} new events`);

  // Salem: TownPerson links + 2 events
  for (const tp of salemTownPersons) {
    const existing = await prisma.townPerson.findFirst({ where: { townId: 'us-ma-salem', personId: tp.personId } });
    if (!existing) { await prisma.townPerson.create({ data: { town: { connect: { id: 'us-ma-salem' } }, person: { connect: { id: tp.personId } }, connectionNote: tp.connectionNote } }); }
  }
  for (const event of salemAdditionalEvents) { await prisma.event.upsert({ where: { id: event.id! }, update: { name: event.name, summary: event.summary, significanceWeight: event.significanceWeight }, create: event }); }
  console.log(`   ✓ Salem: ${salemTownPersons.length} TownPerson links, ${salemAdditionalEvents.length} new events`);

  // Worcester, Springfield, Plymouth: TownPerson links only
  const townPersonOnlyTowns = [
    { id: 'us-ma-worcester', name: 'Worcester', tps: worcesterTownPersons },
    { id: 'us-ma-springfield', name: 'Springfield', tps: springfieldTownPersons },
    { id: 'us-ma-plymouth', name: 'Plymouth', tps: plymouthTownPersons },
  ];
  for (const town of townPersonOnlyTowns) {
    for (const tp of town.tps) {
      const existing = await prisma.townPerson.findFirst({ where: { townId: town.id, personId: tp.personId } });
      if (!existing) { await prisma.townPerson.create({ data: { town: { connect: { id: town.id } }, person: { connect: { id: tp.personId } }, connectionNote: tp.connectionNote } }); }
    }
    console.log(`   ✓ ${town.name}: ${town.tps.length} TownPerson links`);
  }

  // 25. Hackensack TownPerson repair (persons exist but TownPerson was never created)
  console.log('\n🏛️  Hackensack TownPerson repair...');
  const hackensackPersonIds = [
    'person-hackensack-dirck-romeyn',
    'person-hackensack-john-fell',
    'person-hackensack-john-goetschius',
    'person-hackensack-sam-enslaved',
    'person-hackensack-theodosia-prevost',
    'person-hackensack-anthony-wayne',
  ];
  for (const personId of hackensackPersonIds) {
    const personExists = await prisma.person.findFirst({ where: { id: personId } });
    if (personExists) {
      const existingTP = await prisma.townPerson.findFirst({ where: { townId: 'us-nj-hackensack', personId } });
      if (!existingTP) await prisma.townPerson.create({ data: { town: { connect: { id: 'us-nj-hackensack' } }, person: { connect: { id: personId } } } });
    }
  }
  console.log(`   ✓ Hackensack: ${hackensackPersonIds.length} TownPerson links repaired`);

  // 26. CT + RI expansion — places, additional events, lesson plans, links
  console.log('\n🏛️  CT + RI expansion: places, lesson plans, links...');
  const ctRiExpansionTowns = [
    { id: 'us-ct-new-haven', name: 'New Haven', places: newHavenPlaces, events: newHavenAdditionalEvents, lessonPlans: newHavenLessonPlans, links: newHavenAdditionalLinks },
    { id: 'us-ct-new-london', name: 'New London', places: newLondonPlaces, events: newLondonAdditionalEvents, lessonPlans: newLondonLessonPlans, links: newLondonAdditionalLinks },
    { id: 'us-ct-danbury', name: 'Danbury', places: danburyPlaces, events: danburyAdditionalEvents, lessonPlans: danburyLessonPlans, links: danburyAdditionalLinks },
    { id: 'us-ct-groton', name: 'Groton', places: grotonPlaces, events: grotonAdditionalEvents, lessonPlans: grotonLessonPlans, links: grotonAdditionalLinks },
    { id: 'us-ri-newport', name: 'Newport', places: newportPlaces, events: newportAdditionalEvents, lessonPlans: newportLessonPlans, links: newportAdditionalLinks },
    { id: 'us-ri-providence', name: 'Providence', places: providencePlaces, events: providenceAdditionalEvents, lessonPlans: providenceLessonPlans, links: providenceAdditionalLinks },
  ];
  for (const town of ctRiExpansionTowns) {
    for (const place of town.places) {
      await prisma.place.upsert({ where: { id: place.id! }, update: { name: place.name, placeType: place.placeType, description: place.description, lat: place.lat, lng: place.lng, address: place.address, hours: place.hours, admission: place.admission, website: place.website, phone: place.phone, accessibilityNotes: place.accessibilityNotes, parkingNotes: place.parkingNotes, amenities: place.amenities, historicalNote: place.historicalNote, displayOrder: place.displayOrder, featured: place.featured }, create: place });
    }
    for (const event of town.events) { await prisma.event.upsert({ where: { id: event.id! }, update: { name: event.name, summary: event.summary, significanceWeight: event.significanceWeight }, create: event }); }
    await prisma.lessonPlan.deleteMany({ where: { townId: town.id } });
    for (const lp of town.lessonPlans) { await prisma.lessonPlan.create({ data: lp }); }
    for (const link of town.links) {
      const existing = await prisma.townLink.findFirst({ where: { fromTownId: town.id, toTownId: link.toTownId, linkType: link.linkType as any } });
      if (!existing) { try { await prisma.townLink.create({ data: { fromTown: { connect: { id: town.id } }, toTown: { connect: { id: link.toTownId } }, linkType: link.linkType as any, reason: link.reason, weight: link.weight } }); } catch (e) { /* skip */ } }
    }
    console.log(`   ✓ ${town.name}: ${town.places.length} places, ${town.events.length} events, ${town.lessonPlans.length} lesson plans, ${town.links.length} links`);
  }

  // 27. NY expansion — places, additional events, lesson plans, links
  console.log('\n🏛️  NY expansion: places, lesson plans, links...');
  const nyExpansionTowns = [
    { id: 'us-ny-new-york-city', name: 'New York City', places: newYorkCityPlaces, events: newYorkCityAdditionalEvents, lessonPlans: newYorkCityLessonPlans, links: [] as Array<{ toTownId: string; linkType: string; reason: string; weight: number }> },
    { id: 'us-ny-saratoga-springs', name: 'Saratoga Springs', places: saratogaSpringsPlaces, events: saratogaSpringsAdditionalEvents, lessonPlans: saratogaSpringsLessonPlans, links: [] as Array<{ toTownId: string; linkType: string; reason: string; weight: number }> },
    { id: 'us-ny-albany', name: 'Albany', places: albanyPlaces, events: albanyAdditionalEvents, lessonPlans: albanyLessonPlans, links: albanyAdditionalLinks },
    { id: 'us-ny-ticonderoga', name: 'Ticonderoga', places: ticonderogaPlaces, events: ticonderogaAdditionalEvents, lessonPlans: ticonderogaLessonPlans, links: ticonderogaAdditionalLinks },
    { id: 'us-ny-west-point', name: 'West Point', places: westPointPlaces, events: westPointAdditionalEvents, lessonPlans: westPointLessonPlans, links: westPointAdditionalLinks },
  ];
  for (const town of nyExpansionTowns) {
    for (const place of town.places) {
      await prisma.place.upsert({ where: { id: place.id! }, update: { name: place.name, placeType: place.placeType, description: place.description, lat: place.lat, lng: place.lng, address: place.address, hours: place.hours, admission: place.admission, website: place.website, phone: place.phone, accessibilityNotes: place.accessibilityNotes, parkingNotes: place.parkingNotes, amenities: place.amenities, historicalNote: place.historicalNote, displayOrder: place.displayOrder, featured: place.featured }, create: place });
    }
    for (const event of town.events) { await prisma.event.upsert({ where: { id: event.id! }, update: { name: event.name, summary: event.summary, significanceWeight: event.significanceWeight }, create: event }); }
    await prisma.lessonPlan.deleteMany({ where: { townId: town.id } });
    for (const lp of town.lessonPlans) { await prisma.lessonPlan.create({ data: lp }); }
    for (const link of town.links) {
      const existing = await prisma.townLink.findFirst({ where: { fromTownId: town.id, toTownId: link.toTownId, linkType: link.linkType as any } });
      if (!existing) { try { await prisma.townLink.create({ data: { fromTown: { connect: { id: town.id } }, toTown: { connect: { id: link.toTownId } }, linkType: link.linkType as any, reason: link.reason, weight: link.weight } }); } catch (e) { /* skip */ } }
    }
    console.log(`   ✓ ${town.name}: ${town.places.length} places, ${town.events.length} events, ${town.lessonPlans.length} lesson plans, ${town.links.length} links`);
  }

  // 28. PA expansion — places, additional events, lesson plans, links
  console.log('\n🏛️  PA expansion: places, lesson plans, links...');
  const paExpansionTowns = [
    { id: 'us-pa-philadelphia', name: 'Philadelphia', places: philadelphiaPlaces, events: philadelphiaAdditionalEvents, lessonPlans: philadelphiaLessonPlans, links: [] as Array<{ toTownId: string; linkType: string; reason: string; weight: number }> },
    { id: 'us-pa-valley-forge', name: 'Valley Forge', places: valleyForgePlaces, events: valleyForgeAdditionalEvents, lessonPlans: valleyForgeLessonPlans, links: valleyForgeAdditionalLinks },
    { id: 'us-pa-york', name: 'York', places: yorkPlaces, events: yorkAdditionalEvents, lessonPlans: yorkLessonPlans, links: yorkAdditionalLinks },
    { id: 'us-pa-germantown', name: 'Germantown', places: germantownPlaces, events: germantownAdditionalEvents, lessonPlans: germantownLessonPlans, links: germantownAdditionalLinks },
    { id: 'us-pa-carlisle', name: 'Carlisle', places: carlislePlaces, events: carlisleAdditionalEvents, lessonPlans: carlisleLessonPlans, links: carlisleAdditionalLinks },
    { id: 'us-pa-paoli', name: 'Paoli', places: paoliPlaces, events: paoliAdditionalEvents, lessonPlans: paoliLessonPlans, links: paoliAdditionalLinks },
  ];
  for (const town of paExpansionTowns) {
    for (const place of town.places) {
      await prisma.place.upsert({ where: { id: place.id! }, update: { name: place.name, placeType: place.placeType, description: place.description, lat: place.lat, lng: place.lng, address: place.address, hours: place.hours, admission: place.admission, website: place.website, phone: place.phone, accessibilityNotes: place.accessibilityNotes, parkingNotes: place.parkingNotes, amenities: place.amenities, historicalNote: place.historicalNote, displayOrder: place.displayOrder, featured: place.featured }, create: place });
    }
    for (const event of town.events) { await prisma.event.upsert({ where: { id: event.id! }, update: { name: event.name, summary: event.summary, significanceWeight: event.significanceWeight }, create: event }); }
    await prisma.lessonPlan.deleteMany({ where: { townId: town.id } });
    for (const lp of town.lessonPlans) { await prisma.lessonPlan.create({ data: lp }); }
    for (const link of town.links) {
      const existing = await prisma.townLink.findFirst({ where: { fromTownId: town.id, toTownId: link.toTownId, linkType: link.linkType as any } });
      if (!existing) { try { await prisma.townLink.create({ data: { fromTown: { connect: { id: town.id } }, toTown: { connect: { id: link.toTownId } }, linkType: link.linkType as any, reason: link.reason, weight: link.weight } }); } catch (e) { /* skip */ } }
    }
    console.log(`   ✓ ${town.name}: ${town.places.length} places, ${town.events.length} events, ${town.lessonPlans.length} lesson plans, ${town.links.length} links`);
  }

  // 29. VA expansion — places, additional events, lesson plans, links
  console.log('\n🏛️  VA expansion: places, lesson plans, links...');
  const vaExpansionTowns = [
    { id: 'us-va-williamsburg', name: 'Williamsburg', places: williamsburgPlaces, events: williamsburgAdditionalEvents, lessonPlans: williamsburgLessonPlans, links: williamsburgAdditionalLinks },
    { id: 'us-va-yorktown', name: 'Yorktown', places: yorktownPlaces, events: yorktownAdditionalEvents, lessonPlans: yorktownLessonPlans, links: yorktownAdditionalLinks },
    { id: 'us-va-richmond', name: 'Richmond', places: richmondPlaces, events: richmondAdditionalEvents, lessonPlans: richmondLessonPlans, links: richmondAdditionalLinks },
    { id: 'us-va-norfolk', name: 'Norfolk', places: norfolkPlaces, events: norfolkAdditionalEvents, lessonPlans: norfolkLessonPlans, links: norfolkAdditionalLinks },
    { id: 'us-va-charlottesville', name: 'Charlottesville', places: charlottesvillePlaces, events: charlottesvilleAdditionalEvents, lessonPlans: charlottesvilleLessonPlans, links: charlottesvilleAdditionalLinks },
  ];
  for (const town of vaExpansionTowns) {
    for (const place of town.places) {
      await prisma.place.upsert({ where: { id: place.id! }, update: { name: place.name, placeType: place.placeType, description: place.description, lat: place.lat, lng: place.lng, address: place.address, hours: place.hours, admission: place.admission, website: place.website, phone: place.phone, accessibilityNotes: place.accessibilityNotes, parkingNotes: place.parkingNotes, amenities: place.amenities, historicalNote: place.historicalNote, displayOrder: place.displayOrder, featured: place.featured }, create: place });
    }
    for (const event of town.events) { await prisma.event.upsert({ where: { id: event.id! }, update: { name: event.name, summary: event.summary, significanceWeight: event.significanceWeight }, create: event }); }
    await prisma.lessonPlan.deleteMany({ where: { townId: town.id } });
    for (const lp of town.lessonPlans) { await prisma.lessonPlan.create({ data: lp }); }
    for (const link of town.links) {
      const existing = await prisma.townLink.findFirst({ where: { fromTownId: town.id, toTownId: link.toTownId, linkType: link.linkType as any } });
      if (!existing) { try { await prisma.townLink.create({ data: { fromTown: { connect: { id: town.id } }, toTown: { connect: { id: link.toTownId } }, linkType: link.linkType as any, reason: link.reason, weight: link.weight } }); } catch (e) { /* skip */ } }
    }
    console.log(`   ✓ ${town.name}: ${town.places.length} places, ${town.events.length} events, ${town.lessonPlans.length} lesson plans, ${town.links.length} links`);
  }

  // 30. NJ remaining — Fort Lee, New Brunswick (places+events+lessons+links), Elizabeth (sources+links), Hackensack (people+sources+links), Monmouth (links)
  console.log('\n🏛️  NJ remaining expansion...');

  // Fort Lee + New Brunswick: places + additional events + lesson plans + links
  const njSprintTowns = [
    { id: 'us-nj-fort-lee', name: 'Fort Lee', places: fortLeePlaces, events: fortLeeAdditionalEvents, lessonPlans: fortLeeLessonPlans, links: fortLeeAdditionalLinks },
    { id: 'us-nj-new-brunswick', name: 'New Brunswick', places: newBrunswickPlaces, events: newBrunswickAdditionalEvents, lessonPlans: newBrunswickLessonPlans, links: newBrunswickAdditionalLinks },
  ];
  for (const town of njSprintTowns) {
    for (const place of town.places) {
      await prisma.place.upsert({ where: { id: place.id! }, update: { name: place.name, placeType: place.placeType, description: place.description, lat: place.lat, lng: place.lng, address: place.address, hours: place.hours, admission: place.admission, website: place.website, phone: place.phone, accessibilityNotes: place.accessibilityNotes, parkingNotes: place.parkingNotes, amenities: place.amenities, historicalNote: place.historicalNote, displayOrder: place.displayOrder, featured: place.featured }, create: place });
    }
    for (const event of town.events) { await prisma.event.upsert({ where: { id: event.id! }, update: { name: event.name, summary: event.summary, significanceWeight: event.significanceWeight }, create: event }); }
    await prisma.lessonPlan.deleteMany({ where: { townId: town.id } });
    for (const lp of town.lessonPlans) { await prisma.lessonPlan.create({ data: lp }); }
    for (const link of town.links) {
      const existing = await prisma.townLink.findFirst({ where: { fromTownId: town.id, toTownId: link.toTownId, linkType: link.linkType as any } });
      if (!existing) { try { await prisma.townLink.create({ data: { fromTown: { connect: { id: town.id } }, toTown: { connect: { id: link.toTownId } }, linkType: link.linkType as any, reason: link.reason, weight: link.weight } }); } catch (e) { /* skip */ } }
    }
    console.log(`   ✓ ${town.name}: ${town.places.length} places, ${town.events.length} events, ${town.lessonPlans.length} lesson plans, ${town.links.length} links`);
  }

  // Elizabeth: sources + links
  const normalizeSourceType = (t: string): any => {
    const m: Record<string, string> = { GOVERNMENT_DOCUMENT: 'INSTITUTIONAL', SCHOLARLY_BOOK: 'SECONDARY', ARCHIVAL_COLLECTION: 'PRIMARY', DENOMINATIONAL_HISTORY: 'SECONDARY', JOURNAL_ARTICLE: 'SECONDARY', LOCAL_HISTORY: 'SECONDARY', MUSEUM_COLLECTION: 'INSTITUTIONAL', REFERENCE_WORK: 'SECONDARY', NEWSPAPER: 'NEWS' };
    return m[t] ?? t;
  };
  const elizabethRawSources = elizabethSources.map((s) => ({ id: s.source.id, title: s.source.title, publisherOrHolder: s.source.publisherOrHolder, url: s.source.url, credibilityTier: s.source.credibilityTier as any, type: normalizeSourceType(s.source.type) }));
  await upsertSourcesAndLink('us-nj-elizabeth', elizabethRawSources);
  for (const link of elizabethAdditionalLinks) {
    const existing = await prisma.townLink.findFirst({ where: { fromTownId: 'us-nj-elizabeth', toTownId: link.toTownId, linkType: link.linkType as any } });
    if (!existing) { try { await prisma.townLink.create({ data: { fromTown: { connect: { id: 'us-nj-elizabeth' } }, toTown: { connect: { id: link.toTownId } }, linkType: link.linkType as any, reason: link.reason, weight: link.weight } }); } catch (e) { /* skip */ } }
  }
  console.log(`   ✓ Elizabeth: ${elizabethRawSources.length} sources, ${elizabethAdditionalLinks.length} links`);

  // Hackensack: additional people + sources + links
  for (const { person, connectionNote } of hackensackAdditionalPeople) {
    await prisma.person.upsert({ where: { id: person.id! }, update: { name: person.name, bioShort: person.bioShort, roles: person.roles }, create: person });
    const existing = await prisma.townPerson.findFirst({ where: { townId: 'us-nj-hackensack', personId: person.id! } });
    if (!existing) { await prisma.townPerson.create({ data: { town: { connect: { id: 'us-nj-hackensack' } }, person: { connect: { id: person.id! } }, connectionNote } }); }
  }
  const hackensackRawSources = hackensackSources.map((s) => ({ id: s.source.id, title: s.source.title, publisherOrHolder: s.source.publisherOrHolder, url: s.source.url, credibilityTier: s.source.credibilityTier as any, type: normalizeSourceType(s.source.type) }));
  await upsertSourcesAndLink('us-nj-hackensack', hackensackRawSources);
  for (const link of hackensackAdditionalLinks) {
    const existing = await prisma.townLink.findFirst({ where: { fromTownId: 'us-nj-hackensack', toTownId: link.toTownId, linkType: link.linkType as any } });
    if (!existing) { try { await prisma.townLink.create({ data: { fromTown: { connect: { id: 'us-nj-hackensack' } }, toTown: { connect: { id: link.toTownId } }, linkType: link.linkType as any, reason: link.reason, weight: link.weight } }); } catch (e) { /* skip */ } }
  }
  console.log(`   ✓ Hackensack: ${hackensackAdditionalPeople.length} new people, ${hackensackRawSources.length} sources, ${hackensackAdditionalLinks.length} links`);

  // Monmouth: additional links only
  for (const link of monmouthAdditionalLinks) {
    const existing = await prisma.townLink.findFirst({ where: { fromTownId: 'us-nj-monmouth', toTownId: link.toTownId, linkType: link.linkType as any } });
    if (!existing) { try { await prisma.townLink.create({ data: { fromTown: { connect: { id: 'us-nj-monmouth' } }, toTown: { connect: { id: link.toTownId } }, linkType: link.linkType as any, reason: link.reason, weight: link.weight } }); } catch (e) { /* skip */ } }
  }
  console.log(`   ✓ Monmouth: ${monmouthAdditionalLinks.length} additional links`);

  // 31. Gap-closure: Morristown +3 people, Carlisle +1 event, CT/NJ/PA +1 link each
  console.log('\n🏛️  Gap-closure: Morristown people, Carlisle event, outgoing links...');

  // Morristown: link 3 already-seeded persons (Henry Knox, Nathanael Greene, Friedrich von Steuben)
  const morristownExtraPersons = [
    { id: 'person-henry-knox', note: 'General Henry Knox wintered at Morristown 1779-1780 and organized the artillery park at Jockey Hollow.' },
    { id: 'person-nathanael-greene', note: 'General Nathanael Greene served as quartermaster general and was repeatedly headquartered at Morristown during 1779-1780.' },
    { id: 'person-valley-forge-friedrich-von-steuben', note: 'Baron Friedrich von Steuben arrived at Morristown in 1779 to continue his training program following Valley Forge, drilling soldiers in the Jockey Hollow encampment.' },
  ];
  for (const { id, note } of morristownExtraPersons) {
    const personExists = await prisma.person.findFirst({ where: { id } });
    if (personExists) {
      const existingTP = await prisma.townPerson.findFirst({ where: { townId: 'us-nj-morristown', personId: id } });
      if (!existingTP) { await prisma.townPerson.create({ data: { town: { connect: { id: 'us-nj-morristown' } }, person: { connect: { id } }, connectionNote: note } }); }
    }
  }
  console.log('   ✓ Morristown: 3 additional TownPerson links');

  // Carlisle: add 1 more event (Mary Hays / Molly Pitcher connection)
  const existingCarlisleEvent = await prisma.event.findFirst({ where: { id: 'event-carlisle-mary-hays-home' } });
  if (!existingCarlisleEvent) {
    await prisma.event.create({ data: {
      id: 'event-carlisle-mary-hays-home',
      name: 'Mary Hays McCauley Returns to Carlisle',
      startDate: new Date('1783-01-01'),
      datePrecision: 'YEAR',
      summary: 'Mary Hays McCauley — celebrated as "Molly Pitcher" for her actions at the Battle of Monmouth in June 1778, where she carried water to Continental soldiers and allegedly took over her husband\'s cannon — returned to Carlisle after the war. She had grown up in the region and settled permanently in the borough, where she lived until 1832. Carlisle honored her service with a pension from the Commonwealth of Pennsylvania in 1822, one of the earliest official recognitions of a woman\'s Revolutionary War service. Her grave at Old Graveyard became a pilgrimage site for those commemorating women\'s contributions to the Revolution. The "Molly Pitcher" legend, however conflated with other women at Monmouth, is most firmly anchored to the Carlisle community through Mary Hays, making Carlisle the town most directly associated with one of the Revolution\'s most enduring popular stories.',
      significanceWeight: 72,
      town: { connect: { id: 'us-pa-carlisle' } },
    } });
  }
  console.log('   ✓ Carlisle: 1 additional event');

  // Additional outgoing links for 5 towns (each needs +1 to reach ≥6 fromTownId)
  const gapLinks: Array<{ fromTownId: string; toTownId: string; linkType: string; reason: string; weight: number }> = [
    { fromTownId: 'us-ct-danbury', toTownId: 'us-ct-new-london', linkType: 'SHARED_THEME', reason: 'Both towns were raided by British forces under Benedict Arnold and William Tryon in separate 1777/1781 coastal-inland operations designed to terrorize Connecticut Patriots and destroy military supplies.', weight: 80 },
    { fromTownId: 'us-ct-groton', toTownId: 'us-ct-danbury', linkType: 'SHARED_THEME', reason: 'Both towns suffered British raids that destroyed civilian property and military supplies — Danbury in 1777, Groton/New London in 1781 — making them twin symbols of Connecticut\'s civilian sacrifice in the Revolution.', weight: 78 },
    { fromTownId: 'us-ct-new-london', toTownId: 'us-ri-newport', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'New London and Newport were the two principal Patriot ports of southern New England, both occupied by British forces and both crucial to privateering and naval operations in Long Island Sound and Narragansett Bay.', weight: 82 },
    { fromTownId: 'us-nj-new-brunswick', toTownId: 'us-nj-morristown', linkType: 'ROUTE', reason: 'New Brunswick was a key British-controlled town during the 1776-1777 New Jersey campaign; Washington\'s army retreated through the town while Morristown served as the winter refuge — the two towns anchored opposite ends of the critical New Jersey theater.', weight: 85 },
    { fromTownId: 'us-pa-york', toTownId: 'us-pa-germantown', linkType: 'SHARED_EVENT', reason: 'York served as the Continental Congress\'s refuge after the British occupied Philadelphia following the Battle of Germantown in October 1777 — Germantown\'s fall directly caused Congress to relocate to York.', weight: 88 },
  ];
  for (const link of gapLinks) {
    const existing = await prisma.townLink.findFirst({ where: { fromTownId: link.fromTownId, toTownId: link.toTownId, linkType: link.linkType as any } });
    if (!existing) { try { await prisma.townLink.create({ data: { fromTown: { connect: { id: link.fromTownId } }, toTown: { connect: { id: link.toTownId } }, linkType: link.linkType as any, reason: link.reason, weight: link.weight } }); } catch (e) { /* skip */ } }
  }
  console.log(`   ✓ Gap links: ${gapLinks.length} outgoing links added (Danbury, Groton, New London, New Brunswick, York)`);

  // Summary
  console.log('\n====================================');
  console.log('✅ Seed complete!');
  console.log(`
Summary:
  - ${themes.length} themes
  - ${sources.length + concordSources.length + bostonSources.length + cambridgeSources.length + arlingtonSources.length} sources
  - ${TOP_75_TOWNS.length} towns (75-town network)
  - ${lexingtonPeople.length + concordPeople.length + bostonPeople.length + cambridgePeople.length + arlingtonPeople.length + morristownPeople.length} people
  - ${lexingtonEvents.length + concordEvents.length + bostonEvents.length + cambridgeEvents.length + arlingtonEvents.length + morristownEvents.length + salemEvents.length + marbleheadEvents.length + plymouthEvents.length + worcesterEvents.length + springfieldEvents.length} events
  - ${lexingtonStories.length + concordStories.length + bostonStories.length + cambridgeStories.length + arlingtonStories.length + morristownStories.length} stories
  - ${totalMAPlaces} places (Massachusetts)
  - ${morristownPlaces.length} places (New Jersey)
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
  - Morristown: ${morristownEvents.length} events, ${morristownPeople.length} people, ${morristownStories.length} stories, ${morristownPlaces.length} places

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
