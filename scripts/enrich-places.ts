/**
 * Enriches place records with expanded historical notes and visitor information.
 * Targets places with thin descriptions (< 300 chars) or missing historicalNote.
 *
 * Usage:
 *   npx tsx scripts/enrich-places.ts [--limit N] [--state MA] [--all]
 *
 * --all: process every place regardless of description length
 */

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const LIMIT = parseInt(process.argv.find((a) => a.startsWith("--limit="))?.split("=")[1] ?? "9999");
const STATE_FILTER = process.argv.find((a) => a.startsWith("--state="))?.split("=")[1] ?? null;
const ENRICH_ALL = process.argv.includes("--all");
const MIN_DESC_LENGTH = 300; // characters — shorter than this gets enriched

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function enrichPlace(place: {
  id: string; name: string; placeType: string; description: string;
  historicalNote: string | null; address: string | null;
  town: { name: string; state: string };
}) {
  const prompt = `You are a historian and travel writer specializing in American Revolutionary War sites.

Site: ${place.name}
Type: ${place.placeType}
Town: ${place.town.name}, ${place.town.state}
Current description: "${place.description}"
${place.address ? `Address: ${place.address}` : ""}

Enrich this historic site entry with detailed, accurate content. Respond with valid JSON only — no markdown:
{
  "description": "2-3 vivid sentences (150-250 words total) describing what this site is and why it matters historically. Start with the most historically compelling fact.",
  "historicalNote": "1-2 sentences (50-100 words) specifically describing what Revolutionary War events occurred here and what makes this location irreplaceable.",
  "hours": "Typical visiting hours if this is a real site visitors can access, e.g. 'Daily dawn to dusk' or 'Apr–Nov, Wed–Sun 10am–4pm' or 'Grounds always open; museum Tue–Sat 10am–5pm' — or null if not applicable",
  "admission": "Admission cost, e.g. 'Free' or '$8 adults, $5 children, $6 seniors' or 'Free; donations welcome' — or null if not applicable",
  "accessibilityNotes": "1 sentence on wheelchair access, parking, or special visitor needs — or null if unknown",
  "parkingNotes": "Brief parking note if relevant — or null"
}

Base your response on documented historical fact. If visiting information is uncertain, use null rather than guessing.`;

  try {
    const msg = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 1500,
      messages: [{ role: "user", content: prompt }],
    });

    const text = (msg.content[0] as any).text as string;
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return false;
    const data = JSON.parse(jsonMatch[0]) as any;

    await prisma.place.update({
      where: { id: place.id },
      data: {
        description: data.description || place.description,
        historicalNote: data.historicalNote || place.historicalNote,
        hours: data.hours ?? undefined,
        admission: data.admission ?? undefined,
        accessibilityNotes: data.accessibilityNotes ?? undefined,
        parkingNotes: data.parkingNotes ?? undefined,
      },
    });
    return true;
  } catch (err) {
    console.error(`    ✗ ${place.name}:`, (err as Error).message);
    return false;
  }
}

async function main() {
  const stateFilter = STATE_FILTER ? { town: { state: STATE_FILTER } } : {};

  const places = await prisma.place.findMany({
    where: stateFilter,
    select: {
      id: true, name: true, placeType: true, description: true,
      historicalNote: true, address: true,
      town: { select: { name: true, state: true } },
    },
    orderBy: { createdAt: "asc" },
    take: LIMIT,
  });

  const toEnrich = ENRICH_ALL
    ? places
    : places.filter((p) => p.description.length < MIN_DESC_LENGTH || !p.historicalNote);

  console.log(`\n── Place Enrichment ──`);
  console.log(`${places.length} total places, ${toEnrich.length} need enrichment\n`);

  let done = 0;
  let failed = 0;
  for (const place of toEnrich) {
    process.stdout.write(`  ${place.town.name} / ${place.name} (${place.description.length} chars)... `);
    const ok = await enrichPlace(place);
    if (ok) { done++; console.log("✓"); }
    else { failed++; console.log("✗"); }
    await delay(1500);
  }

  console.log(`\n✅ Place enrichment complete. ${done} enriched, ${failed} failed.`);
  await prisma.$disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });
