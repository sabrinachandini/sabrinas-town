/**
 * generate-draft-lessons.ts
 *
 * Generates DRAFT (published: false) lesson plans for the 15 stub towns
 * that have zero lesson plans. Uses verified graph content only.
 * All entries enter the review queue — needsReview logic is separate,
 * but published:false keeps these off the live site until ratified.
 *
 * Usage:
 *   DATABASE_URL=... ANTHROPIC_API_KEY=... npx tsx scripts/generate-draft-lessons.ts
 *   npx tsx scripts/generate-draft-lessons.ts --limit=3
 */

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const LIMIT = parseInt(process.argv.find((a) => a.startsWith("--limit="))?.split("=")[1] ?? "9999");

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

function slugify(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80);
}

async function generateDraftLesson(town: {
  id: string;
  name: string;
  state: string;
  slug: string;
  whyMatters: string | null;
  heroSummary40: string | null;
  execSummary150: string | null;
  events: Array<{ name: string; summary: string; startDate: Date | null }>;
  places: Array<{ name: string; description: string; placeType: string }>;
  townPeople: Array<{ person: { name: string; roles: string[]; bioShort: string } }>;
}): Promise<boolean> {
  const events = town.events.slice(0, 6);
  const places = town.places.slice(0, 5);
  const people = town.townPeople.map((tp) => tp.person).slice(0, 5);

  const eventList = events
    .map((e) => `- ${e.name}${e.startDate ? ` (${new Date(e.startDate).getFullYear()})` : ""}: ${e.summary.slice(0, 100)}`)
    .join("\n");
  const placeList = places
    .map((p) => `- ${p.name} (${p.placeType}): ${p.description.slice(0, 80)}`)
    .join("\n");
  const peopleList = people
    .map((p) => `- ${p.name} (${p.roles.slice(0, 2).join(", ")}): ${p.bioShort.slice(0, 80)}`)
    .join("\n");

  const context = town.whyMatters || town.execSummary150 || town.heroSummary40 || `${town.name}'s role in the American Revolution`;

  const prompt = `You are an experienced American Revolution curriculum developer writing lesson plans for middle and high school students (grades 8-12).

Town: ${town.name}, ${town.state}
Historical significance: ${context}

Key events connected to this town:
${eventList || "Revolutionary War era events — research specific events for this town"}

Key places in this town:
${placeList || "Historic sites related to the American Revolution"}

Key people:
${peopleList || "Colonial-era figures connected to this town"}

Write a complete, classroom-ready draft lesson plan for ${town.name}'s role in the American Revolution.
Duration: 2 class periods (~90 minutes total). Grade range: 8-12.

IMPORTANT: Use only what can be documented. Write "To be verified" for any specific fact you are not confident about.

Respond with valid JSON only — no markdown, no explanation:
{
  "title": "Concise lesson title",
  "gradeRange": "8-12",
  "estimatedDuration": "2 class periods",
  "summary": "2-3 sentence teacher-facing overview of what students will learn",
  "lessonData": {
    "objectives": [
      "Students will be able to explain ${town.name}'s significance in the American Revolution",
      "Students will be able to analyze primary sources from ${town.name}",
      "Students will be able to connect local events to the broader revolutionary movement"
    ],
    "essentialQuestions": [
      "What made ${town.name} significant to the Revolutionary cause?",
      "How did ordinary people in ${town.name} experience the Revolution?",
      "What decisions made in or near ${town.name} shaped the outcome of the war?"
    ],
    "materials": [
      "Map of ${town.name} and surrounding region",
      "Primary source excerpt (to be selected from town's source archive)",
      "Timeline of events handout"
    ],
    "warmUp": {
      "duration": "10 minutes",
      "activity": "Display a map of ${town.name} and ask students: What geographic or strategic advantages does this location offer? What challenges does it present?"
    },
    "directInstruction": {
      "duration": "20 minutes",
      "content": [
        "${town.name}'s geographic and strategic position during the Revolution",
        "Key events and turning points: ${events.map(e => e.name).join(", ") || "to be detailed by teacher"}",
        "Key figures and their roles",
        "Connection to the broader Continental strategy"
      ]
    },
    "guidedPractice": {
      "duration": "25 minutes",
      "activities": [
        "Small group analysis: Students examine a primary source from the ${town.name} area and identify the perspective, purpose, and historical significance",
        "Mapping activity: Students locate key sites from the lesson on a map and draw connections between events"
      ]
    },
    "independentPractice": {
      "duration": "20 minutes",
      "assignment": "Students write a 1-page journal entry from the perspective of a ${town.name} resident in the Revolutionary era, incorporating at least two specific events or people from the lesson"
    },
    "closure": {
      "duration": "10 minutes",
      "activity": "Exit ticket: Name one person, one place, and one event from ${town.name} that connects to a larger theme of the Revolution"
    },
    "assessment": {
      "formative": ["Exit ticket responses", "Map completion", "Group discussion participation"],
      "summative": "Journal entry assignment assessed on historical accuracy, use of primary source evidence, and narrative voice"
    },
    "differentiation": {
      "support": "Provide a sentence frame for the journal entry; pre-teach key vocabulary; offer a graphic organizer for primary source analysis",
      "extension": "Research a lesser-known figure from ${town.name} and write a short biography connecting them to a major Revolutionary theme"
    },
    "primarySources": [
      "Town records or correspondence from ${town.name} (specific documents to be identified in town source archive)",
      "Eyewitness accounts or letters from participants"
    ],
    "crossTownConnections": [
      "Compare ${town.name}'s experience to a similar-sized town in a different colony",
      "How did events here affect or reflect events in Philadelphia, Boston, or New York?"
    ]
  },
  "standards": {
    "ccss": ["CCSS.ELA-LITERACY.RH.8.1", "CCSS.ELA-LITERACY.RH.8.6"],
    "c3": ["D2.His.1.6-8", "D2.His.5.6-8"],
    "ncss": ["II. Time, Continuity, and Change", "VI. Power, Authority, and Governance"]
  }
}`;

  try {
    const msg = await client.messages.create({
      model: "claude-opus-4-5",
      max_tokens: 2500,
      messages: [{ role: "user", content: prompt }],
    });

    const text = (msg.content[0] as { type: string; text: string }).text;
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error(`  ✗ ${town.name}: no JSON in response`);
      return false;
    }

    const data = JSON.parse(jsonMatch[0]);
    const baseSlug = `${slugify(town.name)}-lesson`;

    // Check for slug collision
    let slug = baseSlug;
    const existing = await prisma.lessonPlan.findUnique({ where: { slug } });
    if (existing) slug = `${baseSlug}-draft`;

    await prisma.lessonPlan.create({
      data: {
        townId: town.id,
        title: data.title || `${town.name} and the American Revolution`,
        slug,
        gradeRange: data.gradeRange || "8-12",
        estimatedDuration: data.estimatedDuration || "2 class periods",
        summary: data.summary || `A draft lesson plan for ${town.name}'s role in the Revolution. Requires teacher review before use.`,
        lessonData: data.lessonData,
        standards: data.standards || null,
        published: false, // DRAFT — must be ratified before going live
        displayOrder: 999, // Push to end of queue
      },
    });

    return true;
  } catch (err) {
    console.error(`  ✗ ${town.name} error:`, (err as Error).message?.slice(0, 200));
    return false;
  }
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("ANTHROPIC_API_KEY not set");
    process.exit(1);
  }

  console.log("── Part 3: Draft Lesson Plan Generation ──");
  console.log("   All plans created with published:false (draft mode)");
  console.log("   Must be ratified by a human before appearing on site\n");

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
        where: { verificationStatus: { not: "UNVERIFIED" } },
        take: 6,
        orderBy: { startDate: "asc" },
      },
      places: {
        select: { name: true, description: true, placeType: true },
        take: 5,
        orderBy: { featured: "desc" },
      },
      townPeople: {
        select: { person: { select: { name: true, roles: true, bioShort: true } } },
        take: 5,
      },
    },
    orderBy: { name: "asc" },
    take: LIMIT,
  });

  console.log(`Found ${townsWithNoLessons.length} towns missing lesson plans\n`);

  let done = 0;
  let failed = 0;

  for (const town of townsWithNoLessons) {
    process.stdout.write(`  ${town.name}, ${town.state}... `);
    const ok = await generateDraftLesson(town);
    if (ok) {
      done++;
      console.log("✓ draft created");
    } else {
      failed++;
      console.log("✗ failed");
    }
    await delay(2000);
  }

  console.log(`\n── Lesson generation complete ──`);
  console.log(`  ${done} draft lessons created (unpublished)`);
  console.log(`  ${failed} failed`);
  console.log(`\n  Review queue: publish when teacher review confirms accuracy`);

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
