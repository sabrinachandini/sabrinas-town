/**
 * Discovers and adds new historical events to each town using Claude.
 * Skips towns that already have >= TARGET_EVENTS events.
 *
 * Usage:
 *   npx tsx scripts/discover-events.ts [--limit N] [--state MA] [--min-events N]
 */

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const LIMIT = parseInt(process.argv.find((a) => a.startsWith("--limit="))?.split("=")[1] ?? "9999");
const STATE_FILTER = process.argv.find((a) => a.startsWith("--state="))?.split("=")[1] ?? null;
const TARGET_EVENTS = 35; // stop enriching a town once it has this many events
const EVENTS_PER_CALL = 20; // ask Claude for this many new events at once

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

function slugify(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80);
}

async function upsertTheme(name: string): Promise<string> {
  const slug = slugify(name);
  const theme = await prisma.theme.upsert({
    where: { slug },
    update: {},
    create: { id: slug, slug, name, description: name },
  });
  return theme.id;
}

async function discoverEventsForTown(town: {
  id: string; name: string; state: string; slug: string;
  events: Array<{ name: string; startDate: Date | null }>;
}) {
  const existing = town.events.map((e) => e.name).join("\n- ");
  const prompt = `You are a historian specializing in the American Revolutionary War era (1760–1797).

Town: ${town.name}, ${town.state}

EXISTING EVENTS already in our database (do NOT repeat these):
- ${existing}

Generate exactly ${EVENTS_PER_CALL} NEW historically significant events for ${town.name} that are NOT in the list above. Include events from the broader period: colonial tensions (1760s), pre-war conflict (1770–1774), the war itself (1775–1783), and immediate aftermath (1783–1797). Prioritize events that actually occurred in or directly involved ${town.name}.

Respond with valid JSON only — no markdown, no explanation:
{
  "events": [
    {
      "name": "Short descriptive event name (5-10 words)",
      "startDate": "YYYY-MM-DD or YYYY-MM or YYYY or null",
      "datePrecision": "DAY or MONTH or YEAR or UNKNOWN",
      "summary": "3 paragraphs (total ~400 words). Paragraph 1: what happened and when. Paragraph 2: who was involved and why it mattered locally. Paragraph 3: broader historical significance.",
      "significanceWeight": 65,
      "themes": ["Military", "Political", "Economic", "Social", "Maritime", "Diplomatic"]
    }
  ]
}

significanceWeight: 1-100 (80+ = nationally significant, 60-79 = regionally important, 40-59 = locally notable, under 40 = minor).
themes: pick 1-3 from: Military, Political, Economic, Social, Maritime, Diplomatic, Religious, Legal, Cultural.`;

  try {
    const msg = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 8000,
      messages: [{ role: "user", content: prompt }],
    });

    const text = (msg.content[0] as any).text as string;
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) { console.log(`  ⚠ ${town.name} — no JSON in response`); return 0; }
    const data = JSON.parse(jsonMatch[0]) as { events: any[] };

    let added = 0;
    for (const ev of data.events ?? []) {
      if (!ev.name || !ev.summary) continue;

      // Parse date
      let startDate: Date | null = null;
      if (ev.startDate && ev.startDate !== "null") {
        const d = new Date(ev.startDate);
        if (!isNaN(d.getTime())) startDate = d;
      }

      const baseSlug = `${slugify(ev.name)}-${town.slug}`;
      // Make ID unique if slug already exists
      const existingCount = await prisma.event.count({ where: { id: { startsWith: baseSlug } } });
      const id = existingCount > 0 ? `${baseSlug}-${existingCount}` : baseSlug;
      const slug = id;

      // Check for near-duplicate by name
      const dup = await prisma.event.findFirst({
        where: { townId: town.id, name: { contains: ev.name.slice(0, 20), mode: "insensitive" } },
        select: { id: true },
      });
      if (dup) continue;

      // Upsert themes
      const themeIds: string[] = [];
      for (const themeName of (ev.themes ?? []).slice(0, 3)) {
        const id = await upsertTheme(themeName);
        themeIds.push(id);
      }

      await prisma.event.create({
        data: {
          id,
          slug,
          townId: town.id,
          name: ev.name,
          startDate,
          datePrecision: ev.datePrecision ?? "UNKNOWN",
          summary: ev.summary,
          significanceWeight: Math.min(100, Math.max(0, ev.significanceWeight ?? 50)),
          eventThemes: { create: themeIds.map((themeId) => ({ themeId })) },
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
      events: { select: { name: true, startDate: true } },
    },
    orderBy: { compositeScore: "desc" },
    take: LIMIT,
  });

  const needsMore = towns.filter((t) => t.events.length < TARGET_EVENTS);
  console.log(`\n── Event Discovery ──`);
  console.log(`${towns.length} towns total, ${needsMore.length} need more events (< ${TARGET_EVENTS})\n`);

  for (const town of needsMore) {
    const current = town.events.length;
    const needed = TARGET_EVENTS - current;
    console.log(`  ${town.name}, ${town.state} — ${current} events, adding up to ${Math.min(EVENTS_PER_CALL, needed)}`);
    const added = await discoverEventsForTown(town);
    console.log(`    ✓ Added ${added} events`);
    await delay(2000);
  }

  console.log("\n✅ Event discovery complete.");
  await prisma.$disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });
