/**
 * Generates lesson plans for towns with 0 published lesson plans using Claude.
 *
 * Usage:
 *   npx tsx scripts/generate-lessons.ts [--limit N] [--state MA] [--all]
 *
 * --all      Process every town, even those that already have a lesson plan
 */

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const LIMIT = parseInt(process.argv.find((a) => a.startsWith("--limit="))?.split("=")[1] ?? "9999");
const STATE_FILTER = process.argv.find((a) => a.startsWith("--state="))?.split("=")[1] ?? null;
const ALL = process.argv.includes("--all");

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

function slugify(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80);
}

async function generateLesson(town: {
  id: string;
  name: string;
  state: string;
  slug: string;
  whyMatters: string;
  compositeScore: number;
  events: Array<{ name: string; summary: string; startDate: Date | null }>;
  townPeople: Array<{ person: { name: string; roles: string[]; bioShort: string } }>;
}) {
  const events = town.events.slice(0, 8);
  const people = town.townPeople.map((tp) => tp.person).slice(0, 6);
  const eventList = events.map((e) => `- ${e.name}${e.startDate ? ` (${new Date(e.startDate).getFullYear()})` : ""}: ${e.summary.slice(0, 120)}`).join("\n");
  const peopleList = people.map((p) => `- ${p.name} (${p.roles.slice(0, 2).join(", ")}): ${p.bioShort.slice(0, 100)}`).join("\n");

  const prompt = `You are an experienced history curriculum developer writing lesson plans for an American Revolution education site targeting middle and high school students.

Town: ${town.name}, ${town.state}
Why it matters: ${town.whyMatters}

Key events:
${eventList || "General Revolutionary War history"}

Key people connected to this town:
${peopleList || "Colonial-era figures"}

Write a complete, classroom-ready lesson plan for ${town.name}'s role in the American Revolution. Target grade range: 8-12. Duration: 2 class periods (90 min total).

Respond with valid JSON only — no markdown, no explanation:
{
  "title": "Lesson plan title (e.g. '${town.name} and the Road to Independence')",
  "gradeRange": "8-12",
  "estimatedDuration": "2 class periods",
  "summary": "2-3 sentence overview of what students will learn and do (for teachers)",
  "lessonData": {
    "objectives": ["Students will be able to...", "..."],
    "essentialQuestions": ["Why did...", "How did...", "What would..."],
    "materials": ["Primary source documents", "Map of ${town.name}", "..."],
    "warmUp": {
      "duration": "10 minutes",
      "activity": "Description of warm-up activity"
    },
    "directInstruction": {
      "duration": "20 minutes",
      "content": ["Key point 1", "Key point 2", "Key point 3", "Key point 4"]
    },
    "guidedPractice": {
      "duration": "25 minutes",
      "activities": ["Activity description 1", "Activity description 2"]
    },
    "independentPractice": {
      "duration": "20 minutes",
      "assignment": "Description of independent work"
    },
    "closure": {
      "duration": "15 minutes",
      "activity": "Description of closing activity and exit ticket"
    },
    "differentiation": {
      "struggling": "Specific strategies for struggling learners",
      "advanced": "Extension activities for advanced students",
      "ell": "Language support strategies for ELL students"
    },
    "assessment": "Description of how student understanding will be assessed"
  }
}`;

  try {
    const msg = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 8000,
      messages: [{ role: "user", content: prompt }],
    });

    const text = (msg.content[0] as any).text as string;
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.log(`  ⚠ ${town.name} — no JSON in response`);
      return false;
    }

    // Repair common JSON issues from LLM output
    let rawJson = jsonMatch[0]
      .replace(/[\u201C\u201D]/g, '"')   // smart double quotes -> straight
      .replace(/[\u2018\u2019]/g, "'");  // smart single quotes -> straight

    // Escape literal newlines/tabs inside JSON string values (the most common LLM mistake)
    rawJson = rawJson.replace(/"((?:[^"\\]|\\.)*)"/gs, (_, inner: string) => {
      const fixed = inner
        .replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r")
        .replace(/\t/g, "\\t");
      return `"${fixed}"`;
    });

    let data: { title: string; gradeRange: string; estimatedDuration: string; summary: string; lessonData: Record<string, unknown> };
    try {
      data = JSON.parse(rawJson);
    } catch (e2) {
      console.log(`  ✗ ${town.name} — JSON parse failed:`, (e2 as Error).message.slice(0, 80));
      return false;
    }

    if (!data.title || !data.lessonData) {
      console.log(`  ⚠ ${town.name} — incomplete data`);
      return false;
    }

    const baseSlug = `${slugify(data.title)}-${town.slug}`;
    const existing = await prisma.lessonPlan.findFirst({ where: { slug: baseSlug } });
    if (existing) {
      console.log(`  ↩ ${town.name} — slug already exists, skipping`);
      return false;
    }

    await prisma.lessonPlan.create({
      data: {
        townId: town.id,
        title: data.title,
        slug: baseSlug,
        gradeRange: data.gradeRange ?? "8-12",
        estimatedDuration: data.estimatedDuration ?? "2 class periods",
        summary: data.summary,
        lessonData: data.lessonData,
        published: true,
        displayOrder: 10,
      },
    });

    return true;
  } catch (err) {
    console.error(`  ✗ ${town.name} error:`, (err as Error).message);
    return false;
  }
}

async function main() {
  const where: any = {};
  if (STATE_FILTER) where.state = STATE_FILTER;

  const towns = await prisma.town.findMany({
    where,
    select: {
      id: true,
      name: true,
      state: true,
      slug: true,
      whyMatters: true,
      compositeScore: true,
      events: {
        select: { name: true, summary: true, startDate: true },
        orderBy: { significanceWeight: "desc" },
        take: 8,
      },
      townPeople: {
        select: { person: { select: { name: true, roles: true, bioShort: true } } },
        take: 6,
      },
      _count: { select: { lessonPlans: { where: { published: true } } } },
    },
    orderBy: { compositeScore: "desc" },
    take: LIMIT,
  });

  const needsLesson = ALL
    ? towns
    : towns.filter((t) => t._count.lessonPlans === 0);

  console.log(`\n── Lesson Plan Generation ──`);
  console.log(`${towns.length} towns total, ${needsLesson.length} need a lesson plan\n`);

  let created = 0;
  let failed = 0;

  for (const town of needsLesson) {
    console.log(`  ${town.name}, ${town.state}`);
    const ok = await generateLesson(town);
    if (ok) {
      created++;
      console.log(`    ✓ Created lesson plan`);
    } else {
      failed++;
    }
    await delay(2000);
  }

  console.log(`\n✅ Done. Created: ${created}, Failed/skipped: ${failed}`);
  await prisma.$disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });
