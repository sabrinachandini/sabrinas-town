/**
 * generate-stub-lessons.ts
 *
 * Creates template-based DRAFT lesson plan stubs for towns missing lesson plans.
 * Uses only data already in the database — no AI API calls.
 * All plans are published:false until a teacher reviews and ratifies them.
 *
 * Usage:
 *   DATABASE_URL=... npx tsx scripts/generate-stub-lessons.ts
 */

import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function buildLessonData(town: {
  name: string;
  state: string;
  whyMatters: string | null;
  heroSummary40: string | null;
  execSummary150: string | null;
  events: Array<{ name: string; summary: string; startDate: Date | null }>;
  places: Array<{ name: string; description: string; placeType: string }>;
  townPeople: Array<{ person: { name: string; roles: string[] } }>;
}) {
  const eventNames = town.events.slice(0, 4).map((e) => e.name);
  const placeNames = town.places.slice(0, 3).map((p) => p.name);
  const peopleNames = town.townPeople.slice(0, 3).map((tp) => tp.person.name);
  const context =
    town.execSummary150 ||
    town.whyMatters ||
    town.heroSummary40 ||
    `${town.name}'s role in the American Revolutionary War`;

  return {
    objectives: [
      `Students will be able to explain ${town.name}'s significance in the American Revolution`,
      `Students will be able to analyze at least one primary source connected to ${town.name}`,
      `Students will be able to connect events in ${town.name} to the broader revolutionary movement`,
    ],
    essentialQuestions: [
      `What made ${town.name} strategically or symbolically important to the Revolution?`,
      `How did ordinary people in ${town.name} experience the war?`,
      `What would have been different if ${town.name}'s story had gone another way?`,
    ],
    materials: [
      `Map of ${town.name} and surrounding region (1775–1783)`,
      `Primary source excerpt from town source archive (teacher selects)`,
      `Timeline of ${town.name} events handout`,
      `Student inquiry worksheet (provided below)`,
    ],
    warmUp: {
      duration: "10 minutes",
      activity: `Display a historical map of ${town.name}. Ask: "Looking at this map, what geographic advantages or challenges does ${town.name} present? Why would armies, merchants, or colonial officials care about this location?" Take 3–4 responses, then connect to the lesson.`,
    },
    directInstruction: {
      duration: "20 minutes",
      content: [
        `${town.name}'s position in the colonial world: ${context.slice(0, 200)}`,
        `Key events at or near ${town.name}: ${eventNames.length > 0 ? eventNames.join(", ") : "[teacher to fill in from source archive]"}`,
        `Key figures connected to ${town.name}: ${peopleNames.length > 0 ? peopleNames.join(", ") : "[teacher to fill in]"}`,
        `Historic sites still visible today: ${placeNames.length > 0 ? placeNames.join(", ") : "[teacher to fill in from Places page]"}`,
      ],
    },
    guidedPractice: {
      duration: "25 minutes",
      activities: [
        `Primary source analysis (pairs): Students examine one document from the ${town.name} source archive. Guiding questions: Who wrote this? When? What did they want to accomplish? What does it tell us about daily life during the Revolution?`,
        `Mapping activity: Students locate three places from ${town.name} on a map and draw arrows connecting them to one larger event or campaign.`,
      ],
    },
    independentPractice: {
      duration: "20 minutes",
      assignment: `Journal entry: Students write 1–2 paragraphs from the perspective of a ${town.name} resident in 1775–1783. They must reference at least one specific event and one person connected to the town. Encourage students to consider: were all residents in agreement? Who benefited? Who was left out?`,
    },
    closure: {
      duration: "10 minutes",
      activity: `Exit ticket: "Name one person, one place, and one event from ${town.name} that connect to a larger theme of the Revolution. Explain the connection in one sentence."`,
    },
    assessment: {
      formative: [
        "Exit ticket responses",
        "Map activity completion",
        "Participation in guided practice discussion",
      ],
      summative:
        "Journal entry assessed on: accuracy of historical details (30%), use of primary source evidence (30%), quality of perspective-taking (40%)",
    },
    differentiation: {
      support:
        "Provide a sentence-starter frame for the journal entry. Pre-teach vocabulary: militia, Patriot, Loyalist, Continental Army, campaign. Offer a graphic organizer for primary source analysis.",
      extension: `Research a lesser-known figure connected to ${town.name} and write a 1-page biography. How does their story complicate the "heroes and villains" narrative of the Revolution?`,
    },
    primarySources: [
      `Town records, court documents, or correspondence from ${town.name} (locate in town source archive on the HIFE site)`,
      "Eyewitness accounts or letters from participants in key events",
      "Newspaper accounts from the colonial press (Massachusetts Spy, Pennsylvania Gazette, etc.)",
    ],
    crossTownConnections: [
      `Compare ${town.name}'s experience to a similar town in a different colony — what was the same? What was different?`,
      "How did decisions made in larger cities (Philadelphia, Boston, New York) affect what happened in smaller towns like this one?",
    ],
    teacherNotes: `[DRAFT — requires teacher review before classroom use] This lesson plan was generated from the ${town.name} civic graph. Specific events, people, and sources referenced should be verified against the town's full record in the HIFE source archive. The framework is solid; the specifics need a teacher's eye.`,
  };
}

async function main() {
  console.log("── Stub Lesson Plan Generation ──");
  console.log("   All plans: published:false (draft — requires ratification)\n");

  const townsWithNoLessons = await prisma.town.findMany({
    where: { lessonPlans: { none: {} } },
    select: {
      id: true,
      name: true,
      state: true,
      slug: true,
      whyMatters: true,
      heroSummary40: true,
      execSummary150: true,
      events: {
        select: { name: true, summary: true, startDate: true },
        take: 6,
        orderBy: { startDate: "asc" },
      },
      places: {
        select: { name: true, description: true, placeType: true },
        take: 5,
      },
      townPeople: {
        select: { person: { select: { name: true, roles: true } } },
        take: 5,
      },
    },
    orderBy: { name: "asc" },
  });

  console.log(`Towns missing lessons: ${townsWithNoLessons.length}\n`);

  let done = 0;
  let skipped = 0;

  for (const town of townsWithNoLessons) {
    process.stdout.write(`  ${town.name}, ${town.state}... `);

    const baseSlug = `${slugify(town.name)}-lesson-draft`;
    const existing = await prisma.lessonPlan.findFirst({
      where: { OR: [{ slug: baseSlug }, { slug: `${slugify(town.name)}-lesson` }] },
    });

    if (existing) {
      console.log("skipped (already has a lesson plan)");
      skipped++;
      continue;
    }

    const lessonData = buildLessonData(town);
    const summary =
      (town.execSummary150 || town.whyMatters || town.heroSummary40 || "").slice(0, 300) ||
      `A draft lesson plan introducing ${town.name}'s role in the American Revolution. Framework is solid; specific events and sources require teacher review and verification before classroom use.`;

    await prisma.lessonPlan.create({
      data: {
        townId: town.id,
        title: `${town.name} and the American Revolution [DRAFT]`,
        slug: baseSlug,
        gradeRange: "8-12",
        estimatedDuration: "2 class periods (~90 min)",
        summary: summary.length > 20 ? summary : `Draft lesson plan for ${town.name}. Teacher review required before use.`,
        lessonData,
        standards: {
          ccss: ["CCSS.ELA-LITERACY.RH.8.1", "CCSS.ELA-LITERACY.RH.8.6", "CCSS.ELA-LITERACY.WHST.8.2"],
          c3: ["D2.His.1.6-8", "D2.His.5.6-8", "D4.7.6-8"],
          ncss: ["II. Time, Continuity, and Change", "VI. Power, Authority, and Governance"],
        },
        published: false,
        displayOrder: 999,
      },
    });

    console.log("✓ draft created");
    done++;
  }

  console.log(`\n── Complete ──`);
  console.log(`  ${done} draft lessons created (published:false)`);
  console.log(`  ${skipped} skipped (already existed)`);
  console.log(`\n  Next step: teacher reviews each draft, verifies specifics, sets published:true`);

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
