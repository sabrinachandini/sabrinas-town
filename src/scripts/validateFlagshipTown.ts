/**
 * MODEL: Claude Sonnet
 *
 * Flagship Town Validation Script
 *
 * Validates whether a town meets flagship requirements:
 * - ≥8 events
 * - ≥8 people (≥2 lesser-known)
 * - ≥8 themes
 * - ≥12 sources
 * - ≥6 stories (≥2 modern voices)
 * - ≥2 itineraries (routes)
 * - teacher module viable (≥3 events + ≥3 people + ≥2 sources)
 * - ≥10 outbound TownLinks
 * - score breakdown present
 * - ≥15 places (≥5 featured)
 *
 * Usage: npx tsx src/scripts/validateFlagshipTown.ts <town-slug>
 */

import prisma from '../db/client.js';

// Flagship minimum requirements
const FLAGSHIP_REQUIREMENTS = {
  events: 8,
  people: 8,
  lesserKnownPeople: 2,
  themes: 8,
  sources: 12,
  stories: 6,
  modernVoiceStories: 2,
  itineraries: 2,
  townLinks: 10,
  places: 15,
  featuredPlaces: 5,
  // Teacher module viability thresholds
  teacherMinEvents: 3,
  teacherMinPeople: 3,
  teacherMinSources: 2,
};

interface ValidationResult {
  townId: string;
  townName: string;
  slug: string;
  passed: boolean;
  metrics: {
    events: { count: number; required: number; passed: boolean };
    people: { count: number; required: number; passed: boolean };
    lesserKnownPeople: { count: number; required: number; passed: boolean };
    themes: { count: number; required: number; passed: boolean };
    sources: { count: number; required: number; passed: boolean };
    stories: { count: number; required: number; passed: boolean };
    modernVoiceStories: { count: number; required: number; passed: boolean };
    itineraries: { count: number; required: number; passed: boolean };
    townLinks: { count: number; required: number; passed: boolean };
    places: { count: number; required: number; passed: boolean };
    featuredPlaces: { count: number; required: number; passed: boolean };
    teacherModuleViable: { viable: boolean; reason: string };
    scoreBreakdownPresent: { present: boolean };
    teacherContentReady?: { ready: boolean; summary: string };
  };
  failures: string[];
}

export async function validateFlagshipTown(slug: string): Promise<ValidationResult | null> {
  const town = await prisma.town.findUnique({
    where: { slug },
    include: {
      events: {
        include: {
          eventPeople: { include: { person: true } },
          sourceEvents: true,
        },
      },
      stories: true,
      places: true,
      outgoingLinks: true,
      townThemes: true,
      sourceTowns: true,
      routeStops: {
        include: { route: true },
      },
    },
  });

  if (!town) return null;

  // Count events
  const eventCount = town.events.length;

  // Count unique people connected to this town via events
  const peopleSet = new Set<string>();
  for (const event of town.events) {
    for (const ep of event.eventPeople) {
      peopleSet.add(ep.person.id);
    }
  }
  const peopleCount = peopleSet.size;

  // Count lesser-known people (those without well-known roles like President, General, etc.)
  const wellKnownRoles = ['President', 'General', 'Governor', 'Commander', 'Patriot Leader'];
  let lesserKnownCount = 0;
  for (const event of town.events) {
    for (const ep of event.eventPeople) {
      const isWellKnown = ep.person.roles.some(role =>
        wellKnownRoles.some(wr => role.toLowerCase().includes(wr.toLowerCase()))
      );
      if (!isWellKnown && !Array.from(peopleSet).slice(0, lesserKnownCount + 1).includes(ep.person.id)) {
        lesserKnownCount++;
        peopleSet.add(ep.person.id + '-counted');
      }
    }
  }
  // Simpler approach: count people who don't have famous roles
  const allPeople = town.events.flatMap(e => e.eventPeople.map(ep => ep.person));
  const uniquePeople = Array.from(new Map(allPeople.map(p => [p.id, p])).values());
  lesserKnownCount = uniquePeople.filter(p =>
    !p.roles.some(role => wellKnownRoles.some(wr => role.toLowerCase().includes(wr.toLowerCase())))
  ).length;

  // Count themes
  const themeCount = town.townThemes.length;

  // Count sources (unique sources from town + event sources)
  const sourceSet = new Set<string>();
  for (const st of town.sourceTowns) {
    sourceSet.add(st.sourceId);
  }
  for (const event of town.events) {
    for (const se of event.sourceEvents) {
      sourceSet.add(se.sourceId);
    }
  }
  const sourceCount = sourceSet.size;

  // Count stories and modern voice stories
  const storyCount = town.stories.length;
  const modernVoiceCount = town.stories.filter(s => s.storyType === 'MODERN_VOICE').length;

  // Count unique routes (itineraries)
  const routeSet = new Set<string>();
  for (const stop of town.routeStops) {
    routeSet.add(stop.routeId);
  }
  const itineraryCount = routeSet.size;

  // Count outbound town links
  const townLinkCount = town.outgoingLinks.length;

  // Count places and featured places
  const placeCount = town.places.length;
  const featuredPlaceCount = town.places.filter(p => p.featured).length;

  // Check teacher module viability
  const teacherViable =
    eventCount >= FLAGSHIP_REQUIREMENTS.teacherMinEvents &&
    peopleCount >= FLAGSHIP_REQUIREMENTS.teacherMinPeople &&
    sourceCount >= FLAGSHIP_REQUIREMENTS.teacherMinSources;

  const teacherReason = teacherViable
    ? 'Viable'
    : `Needs: ${eventCount < FLAGSHIP_REQUIREMENTS.teacherMinEvents ? 'more events, ' : ''}${peopleCount < FLAGSHIP_REQUIREMENTS.teacherMinPeople ? 'more people, ' : ''}${sourceCount < FLAGSHIP_REQUIREMENTS.teacherMinSources ? 'more sources' : ''}`.replace(/, $/, '');

  // Check score breakdown
  const scoreBreakdownPresent = town.scoreBreakdown !== null;

  // Check curated teacher content readiness
  const teacherLessonPlans = await prisma.lessonPlan.count({ where: { townId: town.id, published: true } });
  const teacherSourcePackets = await prisma.primarySourcePacket.count({ where: { townId: town.id, published: true } });
  const teacherWorksheets = await prisma.teacherWorksheet.count({ where: { townId: town.id, published: true } });
  const teacherContentReady = teacherLessonPlans >= 1 && teacherSourcePackets >= 2 && teacherWorksheets >= 1;

  // Build metrics
  const metrics: ValidationResult['metrics'] = {
    events: {
      count: eventCount,
      required: FLAGSHIP_REQUIREMENTS.events,
      passed: eventCount >= FLAGSHIP_REQUIREMENTS.events,
    },
    people: {
      count: peopleCount,
      required: FLAGSHIP_REQUIREMENTS.people,
      passed: peopleCount >= FLAGSHIP_REQUIREMENTS.people,
    },
    lesserKnownPeople: {
      count: lesserKnownCount,
      required: FLAGSHIP_REQUIREMENTS.lesserKnownPeople,
      passed: lesserKnownCount >= FLAGSHIP_REQUIREMENTS.lesserKnownPeople,
    },
    themes: {
      count: themeCount,
      required: FLAGSHIP_REQUIREMENTS.themes,
      passed: themeCount >= FLAGSHIP_REQUIREMENTS.themes,
    },
    sources: {
      count: sourceCount,
      required: FLAGSHIP_REQUIREMENTS.sources,
      passed: sourceCount >= FLAGSHIP_REQUIREMENTS.sources,
    },
    stories: {
      count: storyCount,
      required: FLAGSHIP_REQUIREMENTS.stories,
      passed: storyCount >= FLAGSHIP_REQUIREMENTS.stories,
    },
    modernVoiceStories: {
      count: modernVoiceCount,
      required: FLAGSHIP_REQUIREMENTS.modernVoiceStories,
      passed: modernVoiceCount >= FLAGSHIP_REQUIREMENTS.modernVoiceStories,
    },
    itineraries: {
      count: itineraryCount,
      required: FLAGSHIP_REQUIREMENTS.itineraries,
      passed: itineraryCount >= FLAGSHIP_REQUIREMENTS.itineraries,
    },
    townLinks: {
      count: townLinkCount,
      required: FLAGSHIP_REQUIREMENTS.townLinks,
      passed: townLinkCount >= FLAGSHIP_REQUIREMENTS.townLinks,
    },
    places: {
      count: placeCount,
      required: FLAGSHIP_REQUIREMENTS.places,
      passed: placeCount >= FLAGSHIP_REQUIREMENTS.places,
    },
    featuredPlaces: {
      count: featuredPlaceCount,
      required: FLAGSHIP_REQUIREMENTS.featuredPlaces,
      passed: featuredPlaceCount >= FLAGSHIP_REQUIREMENTS.featuredPlaces,
    },
    teacherModuleViable: {
      viable: teacherViable,
      reason: teacherReason,
    },
    scoreBreakdownPresent: {
      present: scoreBreakdownPresent,
    },
    teacherContentReady: {
      ready: teacherContentReady,
      summary: `${teacherLessonPlans} lessons, ${teacherSourcePackets} source packets, ${teacherWorksheets} worksheets`,
    },
  };

  // Collect failures
  const failures: string[] = [];
  if (!metrics.events.passed) failures.push(`Events: ${eventCount}/${FLAGSHIP_REQUIREMENTS.events}`);
  if (!metrics.people.passed) failures.push(`People: ${peopleCount}/${FLAGSHIP_REQUIREMENTS.people}`);
  if (!metrics.lesserKnownPeople.passed) failures.push(`Lesser-known people: ${lesserKnownCount}/${FLAGSHIP_REQUIREMENTS.lesserKnownPeople}`);
  if (!metrics.themes.passed) failures.push(`Themes: ${themeCount}/${FLAGSHIP_REQUIREMENTS.themes}`);
  if (!metrics.sources.passed) failures.push(`Sources: ${sourceCount}/${FLAGSHIP_REQUIREMENTS.sources}`);
  if (!metrics.stories.passed) failures.push(`Stories: ${storyCount}/${FLAGSHIP_REQUIREMENTS.stories}`);
  if (!metrics.modernVoiceStories.passed) failures.push(`Modern voice stories: ${modernVoiceCount}/${FLAGSHIP_REQUIREMENTS.modernVoiceStories}`);
  if (!metrics.itineraries.passed) failures.push(`Itineraries: ${itineraryCount}/${FLAGSHIP_REQUIREMENTS.itineraries}`);
  if (!metrics.townLinks.passed) failures.push(`Town links: ${townLinkCount}/${FLAGSHIP_REQUIREMENTS.townLinks}`);
  if (!metrics.places.passed) failures.push(`Places: ${placeCount}/${FLAGSHIP_REQUIREMENTS.places}`);
  if (!metrics.featuredPlaces.passed) failures.push(`Featured places: ${featuredPlaceCount}/${FLAGSHIP_REQUIREMENTS.featuredPlaces}`);
  if (!teacherViable) failures.push(`Teacher module: ${teacherReason}`);
  if (!scoreBreakdownPresent) failures.push('Score breakdown: missing');

  const passed = failures.length === 0;

  return {
    townId: town.id,
    townName: town.name,
    slug: town.slug,
    passed,
    metrics,
    failures,
  };
}

function printResult(result: ValidationResult): void {
  const status = result.passed ? '✓ PASS' : '✗ FAIL';
  const statusColor = result.passed ? '\x1b[32m' : '\x1b[31m';
  const reset = '\x1b[0m';

  console.log(`\n${statusColor}${status}${reset} ${result.townName} (${result.slug})`);
  console.log('─'.repeat(50));

  // Print metrics table
  console.log('\nMetrics:');
  console.log('  Metric                  Count  Required  Status');
  console.log('  ' + '─'.repeat(46));

  const printMetric = (name: string, m: { count: number; required: number; passed: boolean }) => {
    const status = m.passed ? '✓' : '✗';
    console.log(`  ${name.padEnd(22)} ${String(m.count).padStart(5)}  ${String(m.required).padStart(8)}  ${status}`);
  };

  printMetric('Events', result.metrics.events);
  printMetric('People', result.metrics.people);
  printMetric('Lesser-known People', result.metrics.lesserKnownPeople);
  printMetric('Themes', result.metrics.themes);
  printMetric('Sources', result.metrics.sources);
  printMetric('Stories', result.metrics.stories);
  printMetric('Modern Voice Stories', result.metrics.modernVoiceStories);
  printMetric('Itineraries', result.metrics.itineraries);
  printMetric('Town Links', result.metrics.townLinks);
  printMetric('Places', result.metrics.places);
  printMetric('Featured Places', result.metrics.featuredPlaces);

  console.log('\n  Other Checks:');
  console.log(`  Teacher Module: ${result.metrics.teacherModuleViable.viable ? '✓' : '✗'} ${result.metrics.teacherModuleViable.reason}`);
  console.log(`  Score Breakdown: ${result.metrics.scoreBreakdownPresent.present ? '✓ Present' : '✗ Missing'}`);
  if (result.metrics.teacherContentReady) {
    console.log(`  Teacher Content: ${result.metrics.teacherContentReady.ready ? '✓' : '✗'} ${result.metrics.teacherContentReady.summary}`);
  }

  if (!result.passed) {
    console.log('\n  Failures:');
    for (const failure of result.failures) {
      console.log(`    - ${failure}`);
    }
  }
}

async function main() {
  const slug = process.argv[2];

  if (!slug) {
    console.log('Usage: npx tsx src/scripts/validateFlagshipTown.ts <town-slug>');
    console.log('Example: npx tsx src/scripts/validateFlagshipTown.ts lexington-ma');
    process.exit(1);
  }

  console.log('🏛️  Flagship Town Validation');
  console.log('============================');

  const result = await validateFlagshipTown(slug);

  if (!result) {
    console.log(`\n✗ Town not found: ${slug}`);
    process.exit(1);
  }

  printResult(result);

  await prisma.$disconnect();
  process.exit(result.passed ? 0 : 1);
}

// Only run main if this is the entry point
const isMainModule = process.argv[1]?.includes('validateFlagshipTown');
if (isMainModule) {
  main().catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  });
}
