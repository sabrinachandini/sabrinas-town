/**
 * Discovers meaningful connections between towns and writes TownLink records.
 * For each town, asks Claude which other towns share significant historical ties.
 *
 * Usage:
 *   npx tsx scripts/discover-town-links.ts [--limit N] [--state MA] [--min-score N]
 *
 * --min-score: only process towns with compositeScore >= N (default 40)
 */

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const LIMIT = parseInt(process.argv.find((a) => a.startsWith("--limit="))?.split("=")[1] ?? "9999");
const STATE_FILTER = process.argv.find((a) => a.startsWith("--state="))?.split("=")[1] ?? null;
const MIN_SCORE = parseInt(process.argv.find((a) => a.startsWith("--min-score="))?.split("=")[1] ?? "40");

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

type TownLinkType = "SHARED_EVENT" | "SHARED_PERSON" | "SHARED_THEME" | "ROUTE" | "COMPARISON" | "GEOGRAPHIC_PROXIMITY" | "OTHER";

const VALID_LINK_TYPES: TownLinkType[] = [
  "SHARED_EVENT", "SHARED_PERSON", "SHARED_THEME", "ROUTE", "COMPARISON", "GEOGRAPHIC_PROXIMITY", "OTHER",
];

async function discoverLinksForTown(
  town: { id: string; name: string; state: string; execSummary150: string },
  allTowns: Array<{ id: string; name: string; state: string; execSummary150: string }>,
  existingLinks: Set<string>
) {
  // Build a condensed directory of other towns
  const othersDir = allTowns
    .filter((t) => t.id !== town.id)
    .map((t) => `- ${t.name}, ${t.state} [id: ${t.id}]: ${t.execSummary150}`)
    .join("\n");

  const prompt = `You are a historian of the American Revolutionary War. Your task is to identify meaningful historical connections between towns.

Focus town: ${town.name}, ${town.state}
Summary: ${town.execSummary150}

Other towns in the network:
${othersDir}

Identify 3-8 towns from the list above that have a GENUINE, SPECIFIC historical connection to ${town.name}. Only include connections that:
- Are based on documented historical events or figures (not just geographic proximity)
- Are specific enough to explain in 1-2 sentences
- Would be interesting to a visitor planning a multi-town Revolutionary War trip

Respond with valid JSON only — no markdown:
{
  "links": [
    {
      "toTownId": "exact town id from the list above",
      "linkType": "SHARED_EVENT | SHARED_PERSON | SHARED_ROUTE | SHARED_THEME | COMPARISON | GEOGRAPHIC_PROXIMITY | OTHER",
      "reason": "1-2 sentences explaining the specific historical connection. Be concrete: name the person, battle, or event that links them.",
      "weight": 75
    }
  ]
}

linkType rules:
- SHARED_EVENT: both towns were directly involved in the same battle, campaign, or historical event
- SHARED_PERSON: a key figure (Washington, Revere, Hamilton, etc.) had significant roles in both towns
- ROUTE: one town was a stop on a significant route (march, retreat, courier ride) that connected them
- SHARED_THEME: parallel stories (both faced British occupation, both sent delegates to Continental Congress, etc.)
- COMPARISON: instructive contrast (one Patriot stronghold vs one Loyalist stronghold, etc.)
- GEOGRAPHIC_PROXIMITY: nearby and functionally connected during the war (supply lines, mutual defense)
- OTHER: genuine connection that doesn't fit above

weight: 0-100. 80+ = crucial, direct connection (same battle, same commander). 60-79 = important but indirect. 40-59 = thematic or parallel. Below 40 = tenuous.

Only return links with weight >= 45. Prefer quality over quantity.`;

  try {
    const msg = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 3000,
      messages: [{ role: "user", content: prompt }],
    });

    const text = (msg.content[0] as any).text as string;
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.log(`  ⚠ ${town.name} — no JSON`);
      return 0;
    }
    const data = JSON.parse(jsonMatch[0]) as { links: any[] };

    let added = 0;
    for (const link of data.links ?? []) {
      if (!link.toTownId || !link.reason) continue;

      // Validate toTownId exists
      const toTown = allTowns.find((t) => t.id === link.toTownId);
      if (!toTown) continue;

      // Validate linkType
      const linkType: TownLinkType = VALID_LINK_TYPES.includes(link.linkType) ? link.linkType : "OTHER";
      const weight = Math.min(100, Math.max(0, link.weight ?? 50));

      // Check for existing link (either direction + type)
      const fwdKey = `${town.id}|${toTown.id}|${linkType}`;
      const revKey = `${toTown.id}|${town.id}|${linkType}`;
      if (existingLinks.has(fwdKey) || existingLinks.has(revKey)) continue;

      try {
        await prisma.townLink.create({
          data: {
            fromTownId: town.id,
            toTownId: toTown.id,
            linkType,
            reason: link.reason,
            weight,
          },
        });
        existingLinks.add(fwdKey);
        added++;
      } catch (e: any) {
        // Unique constraint violation — already exists
        if (!e.message?.includes("Unique constraint")) {
          console.error(`    ✗ link error:`, e.message);
        }
      }
    }
    return added;
  } catch (err) {
    console.error(`  ✗ ${town.name}:`, (err as Error).message);
    return 0;
  }
}

async function main() {
  const where: any = { compositeScore: { gte: MIN_SCORE } };
  if (STATE_FILTER) where.state = STATE_FILTER;

  const towns = await prisma.town.findMany({
    where,
    select: { id: true, name: true, state: true, execSummary150: true, compositeScore: true },
    orderBy: { compositeScore: "desc" },
    take: LIMIT,
  });

  // Load all existing links into memory to avoid redundant checks
  const rawLinks = await prisma.townLink.findMany({ select: { fromTownId: true, toTownId: true, linkType: true } });
  const existingLinks = new Set(rawLinks.map((l) => `${l.fromTownId}|${l.toTownId}|${l.linkType}`));

  // For the "other towns" directory, use all towns (not just the filtered set)
  const allTowns = await prisma.town.findMany({
    select: { id: true, name: true, state: true, execSummary150: true },
    orderBy: { compositeScore: "desc" },
  });

  console.log(`\n── Town Link Discovery ──`);
  console.log(`Processing ${towns.length} towns (score >= ${MIN_SCORE}), ${allTowns.length} in directory`);
  console.log(`${existingLinks.size} links already exist\n`);

  let totalAdded = 0;
  for (const town of towns) {
    process.stdout.write(`  ${town.name}, ${town.state}... `);
    const added = await discoverLinksForTown(town, allTowns, existingLinks);
    totalAdded += added;
    console.log(`+${added} links`);
    await delay(2000);
  }

  console.log(`\n✅ Town link discovery complete. ${totalAdded} new links created.`);
  await prisma.$disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });
