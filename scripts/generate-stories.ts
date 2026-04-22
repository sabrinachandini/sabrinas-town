/**
 * Generates 2-3 historical voice stories per town using Claude.
 * Stories are written in first-person from the perspective of a historical figure.
 *
 * Usage:
 *   npx tsx scripts/generate-stories.ts [--limit N] [--state MA] [--min-stories N]
 */

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const LIMIT = parseInt(process.argv.find((a) => a.startsWith("--limit="))?.split("=")[1] ?? "9999");
const STATE_FILTER = process.argv.find((a) => a.startsWith("--state="))?.split("=")[1] ?? null;
const MIN_STORIES = parseInt(process.argv.find((a) => a.startsWith("--min-stories="))?.split("=")[1] ?? "3");

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

function slugify(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80);
}

async function generateStories(town: {
  id: string; name: string; state: string; slug: string;
  events: Array<{ name: string; startDate: Date | null }>;
  townPeople: Array<{ person: { id: string; name: string; roles: string[]; bioShort: string } }>;
}) {
  const people = town.townPeople.map((tp) => tp.person);
  const events = town.events.slice(0, 10).map((e) => e.name);
  const peopleList = people.slice(0, 6).map((p) => `${p.name} (${p.roles.slice(0, 2).join(", ")})`).join(", ");

  const prompt = `You are a master storyteller writing immersive first-person historical narratives for an American Revolution education site.

Town: ${town.name}, ${town.state}
Key historical figures connected to this town: ${peopleList || "various colonists and soldiers"}
Key events: ${events.join("; ")}

Write exactly 3 first-person historical voice stories set in ${town.name}. Each story should:
- Be written from the perspective of a real historical figure connected to this town (or a composite "everyman" figure if no famous person fits)
- Be set during a specific, documented moment in the Revolutionary era (1760–1797)
- Be 4-6 paragraphs (~500-700 words) of vivid, immersive prose
- Include sensory details, period-accurate language, and emotional truth
- End with a reflection on the broader significance of the moment

Respond with valid JSON only — no markdown, no explanation:
{
  "stories": [
    {
      "title": "Short compelling title (5-10 words)",
      "narratorName": "Name of the historical figure narrating (or 'A Minuteman of ${town.name}' etc.)",
      "narratorRole": "Their role/identity: 'Minuteman, ${town.name}' or 'Patriot Leader' etc.",
      "personId": "slug of one of these people if this narrator is them: ${people.map((p) => p.id).join(", ")} — or null if composite",
      "textVersion": "Full story text, 500-700 words, first person prose. Use \\n\\n between paragraphs.",
      "audioScript": "Shorter version (200-300 words) optimized for listening aloud. Keep the most powerful moments.",
      "tags": ["first-person", "minuteman", "battle"],
      "storyType": "HISTORICAL_VOICE"
    }
  ]
}

Tags should draw from: first-person, battle, siege, espionage, diplomacy, daily-life, women, enslaved, merchant, soldier, patriot, loyalist, arrival, departure, turning-point.`;

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
      return 0;
    }
    const data = JSON.parse(jsonMatch[0]) as { stories: any[] };

    let added = 0;
    for (const s of data.stories ?? []) {
      if (!s.title || !s.textVersion) continue;

      const baseSlug = `${slugify(s.title)}-${town.slug}`;
      const existing = await prisma.story.findFirst({ where: { slug: baseSlug } });
      if (existing) continue;

      // Resolve personId — verify it exists in our people list
      const validPerson = s.personId && people.find((p) => p.id === s.personId) ? s.personId : null;

      await prisma.story.create({
        data: {
          townId: town.id,
          title: s.title,
          slug: baseSlug,
          storyType: "HISTORICAL_VOICE",
          subjectPersonId: validPerson ?? undefined,
          narratorName: s.narratorName ?? null,
          narratorRole: s.narratorRole ?? null,
          verificationStatus: "VERIFIED",
          textVersion: s.textVersion,
          audioScript: s.audioScript ?? null,
          tags: s.tags ?? [],
        },
      });
      added++;
    }
    return added;
  } catch (err) {
    console.error(`  ✗ ${town.name} error:`, (err as Error).message);
    return 0;
  }
}

async function main() {
  const where: any = {};
  if (STATE_FILTER) where.state = STATE_FILTER;

  const towns = await prisma.town.findMany({
    where,
    select: {
      id: true, name: true, state: true, slug: true,
      events: { select: { name: true, startDate: true }, orderBy: { significanceWeight: "desc" }, take: 10 },
      townPeople: {
        select: { person: { select: { id: true, name: true, roles: true, bioShort: true } } },
        take: 8,
      },
      _count: { select: { stories: true } },
    },
    orderBy: { compositeScore: "desc" },
    take: LIMIT,
  });

  const needsStories = towns.filter((t) => t._count.stories < MIN_STORIES);
  console.log(`\n── Story Generation ──`);
  console.log(`${towns.length} towns total, ${needsStories.length} need stories (< ${MIN_STORIES})\n`);

  for (const town of needsStories) {
    const current = town._count.stories;
    console.log(`  ${town.name}, ${town.state} — ${current} stories → generating 3`);
    const added = await generateStories(town);
    console.log(`    ✓ Added ${added} stories`);
    await delay(3000);
  }

  console.log("\n✅ Story generation complete.");
  await prisma.$disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });
