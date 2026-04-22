/**
 * Adds new historically significant Revolutionary War towns using Claude.
 * Generates town metadata, events, people, and places.
 *
 * Usage:
 *   npx tsx scripts/add-towns.ts
 */

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
}

// Towns to add — skipped if slug already exists
const NEW_TOWNS = [
  { name: "Saratoga Springs", state: "New York", abbr: "NY", lat: 43.081, lng: -73.785 },
  { name: "Newburgh", state: "New York", abbr: "NY", lat: 41.503, lng: -74.010 },
  { name: "West Point", state: "New York", abbr: "NY", lat: 41.391, lng: -73.957 },
  { name: "White Plains", state: "New York", abbr: "NY", lat: 41.034, lng: -73.763 },
  { name: "Guilford Court House", state: "North Carolina", abbr: "NC", lat: 36.133, lng: -79.850 },
  { name: "Wilmington", state: "North Carolina", abbr: "NC", lat: 34.225, lng: -77.944 },
  { name: "New Bern", state: "North Carolina", abbr: "NC", lat: 35.108, lng: -77.044 },
  { name: "Annapolis", state: "Maryland", abbr: "MD", lat: 38.978, lng: -76.492 },
  { name: "Frederick", state: "Maryland", abbr: "MD", lat: 39.414, lng: -77.411 },
  { name: "Hartford", state: "Connecticut", abbr: "CT", lat: 41.763, lng: -72.685 },
  { name: "New Milford", state: "Connecticut", abbr: "CT", lat: 41.577, lng: -73.408 },
  { name: "Savannah", state: "Georgia", abbr: "GA", lat: 32.083, lng: -81.099 },
  { name: "Augusta", state: "Georgia", abbr: "GA", lat: 33.470, lng: -81.975 },
  { name: "Chillicothe", state: "Ohio", abbr: "OH", lat: 39.332, lng: -82.982 },
  { name: "Kaskaskia", state: "Illinois", abbr: "IL", lat: 37.916, lng: -89.914 },
];

async function upsertTheme(name: string): Promise<string> {
  const slug = slugify(name);
  const t = await prisma.theme.upsert({
    where: { slug },
    update: {},
    create: { id: slug, slug, name, description: name },
  });
  return t.id;
}

async function generateTownData(town: typeof NEW_TOWNS[0]) {
  const prompt = `You are a historian of the American Revolutionary War era.

Generate comprehensive data for ${town.name}, ${town.state} as a Revolutionary War historical site.

Respond with valid JSON only — no markdown:
{
  "compositeScore": 72,
  "scoreTier": "gateway",
  "heroSummary40": "5-8 word punchy phrase capturing this town's defining moment",
  "execSummary150": "2-3 sentences, ~120 chars, vivid and specific, for a map tooltip",
  "whyMatters": "800-1200 word markdown narrative with ## subheadings explaining why this town matters to Revolutionary War history",
  "events": [
    {
      "name": "Short event name",
      "startDate": "YYYY-MM-DD or YYYY or null",
      "datePrecision": "DAY or MONTH or YEAR or UNKNOWN",
      "summary": "3 paragraphs ~400 words total",
      "significanceWeight": 75,
      "themes": ["Military"]
    }
  ],
  "people": [
    {
      "name": "Full Name",
      "roles": ["General", "Patriot"],
      "birthYear": 1740,
      "deathYear": 1800,
      "bioShort": "2 sentence bio",
      "bioLong": "4 paragraph biography ~600 words"
    }
  ],
  "places": [
    {
      "name": "Historic Site Name",
      "placeType": "BATTLEFIELD or BUILDING or CEMETERY or MUSEUM or LANDMARK",
      "description": "2-3 sentence description of this place and its historical significance",
      "historicalNote": "1-2 sentences on what happened here",
      "address": "street address if known"
    }
  ]
}

Rules:
- compositeScore: 1-100 (flagship 85+, gateway 65-84, standard 45-64, emerging <45)
- scoreTier: "flagship" | "gateway" | "standard" | "emerging"
- Generate 10-15 events, 5-8 people, 5-8 places
- All events must have actually occurred in or directly involved ${town.name}
- People must have real historical connections to ${town.name}`;

  const msg = await client.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 12000,
    messages: [{ role: "user", content: prompt }],
  });

  const text = (msg.content[0] as any).text as string;
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("No JSON returned");
  return JSON.parse(jsonMatch[0]) as any;
}

async function main() {
  console.log(`\n── Adding ${NEW_TOWNS.length} new towns ──\n`);

  for (const t of NEW_TOWNS) {
    const slug = slugify(t.name);
    const existing = await prisma.town.findUnique({ where: { slug } });
    if (existing) { console.log(`  ↷ ${t.name} already exists — skipping`); continue; }

    console.log(`  Generating ${t.name}, ${t.state}...`);
    let data: any;
    try {
      data = await generateTownData(t);
    } catch (e) {
      console.error(`  ✗ ${t.name} generation failed:`, (e as Error).message);
      await delay(3000);
      continue;
    }

    const townId = slug;
    const tier = data.scoreTier ?? "standard";

    await prisma.town.create({
      data: {
        id: townId,
        slug,
        name: t.name,
        state: t.abbr,
        lat: t.lat,
        lng: t.lng,
        compositeScore: Math.min(100, Math.max(0, data.compositeScore ?? 50)),
        scoreTier: tier,
        heroSummary40: data.heroSummary40 ?? "",
        execSummary150: data.execSummary150 ?? "",
        whyMatters: data.whyMatters ?? "",
      },
    });

    // Events
    let evCount = 0;
    for (const ev of (data.events ?? []).slice(0, 15)) {
      if (!ev.name || !ev.summary) continue;
      let startDate: Date | null = null;
      if (ev.startDate && ev.startDate !== "null") {
        const d = new Date(ev.startDate); if (!isNaN(d.getTime())) startDate = d;
      }
      const evSlug = `${slugify(ev.name)}-${slug}`;
      const exists = await prisma.event.findFirst({ where: { OR: [{ id: evSlug }, { slug: evSlug }] } });
      if (exists) continue;
      const themeIds = await Promise.all((ev.themes ?? []).slice(0, 3).map(upsertTheme));
      await prisma.event.create({
        data: {
          id: evSlug, slug: evSlug, townId,
          name: ev.name, startDate,
          datePrecision: ev.datePrecision ?? "UNKNOWN",
          summary: ev.summary,
          significanceWeight: Math.min(100, Math.max(0, ev.significanceWeight ?? 50)),
          eventThemes: { create: themeIds.map((themeId) => ({ themeId })) },
        },
      });
      evCount++;
    }

    // People
    let pplCount = 0;
    for (const p of (data.people ?? []).slice(0, 8)) {
      if (!p.name || !p.bioShort) continue;
      const personId = slugify(p.name);
      const existing = await prisma.person.findUnique({ where: { id: personId } });
      if (!existing) {
        await prisma.person.create({
          data: {
            id: personId, slug: personId, name: p.name,
            roles: p.roles ?? [],
            birthYear: p.birthYear ?? null, deathYear: p.deathYear ?? null,
            bioShort: p.bioShort, bioLong: p.bioLong ?? null,
            verificationStatus: "VERIFIED",
          },
        });
      }
      await prisma.townPerson.upsert({
        where: { townId_personId: { townId, personId } },
        update: {},
        create: { townId, personId },
      });
      pplCount++;
    }

    // Places
    let plCount = 0;
    for (const pl of (data.places ?? []).slice(0, 8)) {
      if (!pl.name || !pl.description) continue;
      const placeId = `${slugify(pl.name)}-${slug}`;
      await prisma.place.upsert({
        where: { id: placeId },
        update: {},
        create: {
          id: placeId, slug: placeId, townId,
          name: pl.name,
          placeType: pl.placeType ?? "LANDMARK",
          description: pl.description,
          historicalNote: pl.historicalNote ?? null,
          address: pl.address ?? null,
          featured: false,
          amenities: [],
        },
      });
      plCount++;
    }

    console.log(`  ✓ ${t.name} — ${evCount} events, ${pplCount} people, ${plCount} places`);
    await delay(3000);
  }

  console.log("\n✅ Town addition complete.");
  await prisma.$disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });
