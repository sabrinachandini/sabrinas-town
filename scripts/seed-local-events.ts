/**
 * Seed local/real-world events for every town using Claude Opus.
 * Generates 3–5 annual events (reenactments, festivals, heritage days, museum programs).
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-ant-... DATABASE_URL=... npx tsx scripts/seed-local-events.ts [--limit N] [--town SLUG]
 *
 * Events are upserted by (townId, name) — safe to re-run.
 */

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const LIMIT = parseInt(
  process.argv.find((a) => a.startsWith("--limit="))?.split("=")[1] ?? "9999"
);
const TOWN_SLUG = process.argv.find((a) => a.startsWith("--town="))?.split("=")[1];

interface LocalEventInput {
  name: string;
  description: string;
  category: "reenactment" | "festival" | "ceremony" | "tour" | "lecture" | "exhibition";
  recurrence: string;
  month: number | null;
  day: number | null;
  endDay: number | null;
  dateNote: string | null;
  venue: string | null;
  url: string | null;
  admission: string | null;
  featured: boolean;
}

async function generateEventsForTown(
  townName: string,
  state: string,
  whyMatters: string,
  topEvents: string[],
  topPlaces: string[]
): Promise<LocalEventInput[]> {
  const prompt = `You are a knowledgeable historian helping to list REAL, verifiable annual events that take place in ${townName}, ${state} related to the American Revolution.

Context about this town:
${whyMatters.slice(0, 800)}

Key historical events that occurred here: ${topEvents.slice(0, 5).join(", ")}
Key historical places: ${topPlaces.slice(0, 4).join(", ")}

Generate 4–5 REAL annual events that actually take place (or have taken place) in or near ${townName}, ${state}. These should be:
- Living history reenactments, heritage festivals, patriot days, museum programs, or anniversary ceremonies
- Actually scheduled at real venues (local historical societies, parks, museums, battlefields)
- Appropriate for the town's specific history (don't invent events that don't match the town)

Examples of the type you're looking for:
- Patriots' Day celebrations and battle reenactments in Lexington/Concord (April)
- Evacuation Day parade in Boston (March 17)
- Battle of Saratoga reenactment at Saratoga NHP (September)
- Liberty Festival in Williamsburg (July 4 area)
- Colonial Heritage Day at local historical society

If you're not certain a specific event exists, describe something that COULD plausibly exist at a named real venue in that town, but mark url as null and add a note in dateNote like "Contact local historical society to confirm dates."

Return ONLY a JSON array with this exact schema (no markdown, no extra text):
[
  {
    "name": "Battle of Bunker Hill Reenactment",
    "description": "Annual living history reenactment on Breed's Hill featuring hundreds of costumed participants re-enacting the June 1775 battle. Includes artillery demonstrations, period camp life, and guided tours of the monument.",
    "category": "reenactment",
    "recurrence": "annual",
    "month": 6,
    "day": 17,
    "endDay": null,
    "dateNote": "Third weekend of June; exact dates vary by year",
    "venue": "Bunker Hill Monument, Charlestown",
    "url": "https://www.nps.gov/bost/planyourvisit/bunker-hill-weekend.htm",
    "admission": "Free",
    "featured": true
  }
]

Categories allowed: "reenactment", "festival", "ceremony", "tour", "lecture", "exhibition"
Set featured: true for the most significant or well-known event only.`;

  try {
    const message = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 2000,
      messages: [{ role: "user", content: prompt }],
    });

    const text = message.content[0].type === "text" ? message.content[0].text : "";
    // Strip any markdown code fences
    const json = text.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
    const parsed = JSON.parse(json) as LocalEventInput[];
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error("  Failed to parse response:", err);
    return [];
  }
}

async function main() {
  const where = TOWN_SLUG ? { slug: TOWN_SLUG } : {};

  const towns = await prisma.town.findMany({
    where,
    select: {
      id: true,
      name: true,
      state: true,
      slug: true,
      whyMatters: true,
      events: {
        select: { name: true },
        orderBy: { significanceWeight: "desc" },
        take: 8,
      },
      places: {
        select: { name: true },
        orderBy: { featured: "desc" },
        take: 6,
      },
      localEvents: {
        select: { name: true },
      },
    },
    orderBy: { compositeScore: "desc" },
    take: LIMIT,
  });

  console.log(`\nSeeding local events for ${towns.length} towns...\n`);

  let total = 0;
  let skipped = 0;

  for (const town of towns) {
    // Skip if already has events (unless running single town)
    if (!TOWN_SLUG && town.localEvents.length >= 3) {
      console.log(`  ↩ ${town.name} already has ${town.localEvents.length} events, skipping`);
      skipped++;
      continue;
    }

    console.log(`  → ${town.name}, ${town.state}...`);

    const topEvents = town.events.map((e) => e.name);
    const topPlaces = town.places.map((p) => p.name);

    const events = await generateEventsForTown(
      town.name,
      town.state,
      town.whyMatters,
      topEvents,
      topPlaces
    );

    if (events.length === 0) {
      console.log(`    ✗ No events generated`);
      continue;
    }

    for (const evt of events) {
      // Validate category
      const validCategories = ["reenactment", "festival", "ceremony", "tour", "lecture", "exhibition"];
      if (!validCategories.includes(evt.category)) {
        evt.category = "festival" as typeof evt.category;
      }

      try {
        const existing = await prisma.localEvent.findFirst({
          where: { townId: town.id, name: evt.name },
        });
        if (existing) {
          console.log(`    ↩ ${evt.name} (already exists)`);
          continue;
        }
        await prisma.localEvent.create({
          data: {
            townId: town.id,
            name: evt.name,
            description: evt.description,
            category: evt.category,
            recurrence: evt.recurrence ?? "annual",
            month: evt.month,
            day: evt.day,
            endDay: evt.endDay,
            dateNote: evt.dateNote,
            venue: evt.venue,
            url: evt.url,
            admission: evt.admission,
            featured: evt.featured ?? false,
          },
        });
        total++;
        console.log(`    ✓ ${evt.name}`);
      } catch (err) {
        console.error(`    ✗ Failed to insert ${evt.name}:`, err);
      }
    }

    // Small delay between API calls to respect rate limits
    await new Promise((r) => setTimeout(r, 1000));
  }

  console.log(`\n✅ Done. Inserted ${total} local events (skipped ${skipped} towns with existing data).\n`);
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
