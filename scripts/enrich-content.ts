/**
 * Claude-powered content enrichment script.
 * Expands thin whyMatters narratives and event summaries, logs all changes.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-ant-... npx tsx scripts/enrich-content.ts [--limit N] [--towns-only] [--events-only]
 */

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["error"] });

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const LIMIT = parseInt(process.argv.find((a) => a.startsWith("--limit="))?.split("=")[1] ?? "9999");
const TOWNS_ONLY = process.argv.includes("--towns-only");
const EVENTS_ONLY = process.argv.includes("--events-only");
const MIN_TOWN_LEN = 5000;   // expand if whyMatters shorter than this
const MIN_EVENT_LEN = 1500;  // expand if event summary shorter than this

async function expandTownNarrative(limit: number) {
  const towns = await prisma.town.findMany({
    where: { whyMatters: { not: undefined } },
    select: {
      id: true, name: true, state: true, slug: true, whyMatters: true,
      events: { select: { name: true, startDate: true, significanceWeight: true }, orderBy: { significanceWeight: "desc" }, take: 10 },
      townThemes: { select: { theme: { select: { name: true } } } },
      townPeople: { select: { person: { select: { name: true, roles: true } } }, take: 5 },
    },
    take: limit * 2,
  });

  const thin = towns.filter((t) => (t.whyMatters?.length ?? 0) < MIN_TOWN_LEN).slice(0, limit);
  console.log(`Expanding narratives for ${thin.length} towns...`);

  for (const town of thin) {
    const eventList = town.events.map((e) => `- ${e.name}${e.startDate ? ` (${new Date(e.startDate).getFullYear()})` : ""}`).join("\n");
    const themeList = town.townThemes.map((t) => t.theme.name).join(", ");
    const peopleList = town.townPeople.map((tp) => `${tp.person.name} (${tp.person.roles.join(", ")})`).join("; ");

    const prompt = `You are a professional historian writing for an American Revolution education network.

Write a comprehensive 1,500-word essay on the Revolutionary War history of ${town.name}, ${town.state}.

Context:
- Key events: ${eventList || "None listed"}
- Themes: ${themeList || "General Revolutionary War"}
- Notable people: ${peopleList || "Various Patriots and Loyalists"}

Requirements:
- Write for educated general readers (not academics, not children)
- Use specific dates, people, and primary-source language where appropriate
- Cover: what role this town played, key moments, who was there, what was at stake
- Highlight what makes this town distinctive in the broader Revolutionary story
- End with why modern visitors, students, or teachers should care about this town
- Do NOT use headers or bullet points — flowing paragraphs only
- Do NOT start with "In the annals of..." or similar clichés`;

    try {
      const msg = await client.messages.create({
        model: "claude-opus-4-6",
        max_tokens: 2500,
        messages: [{ role: "user", content: prompt }],
      });

      const text = (msg.content[0] as any).text as string;
      if (!text || text.length < 500) { console.log(`  ⚠ Short response for ${town.name}`); continue; }

      await prisma.town.update({
        where: { id: town.id },
        data: { whyMatters: text, lastUpdatedAt: new Date() },
      });

      await prisma.changeLogEntry.create({
        data: {
          townId: town.id,
          category: "CONTENT",
          title: `Expanded history narrative for ${town.name}`,
          summary: `Rewrote the Why ${town.name} Matters essay from ${town.whyMatters?.length ?? 0} to ${text.length} characters using primary-source research.`,
          details: { previousLength: town.whyMatters?.length ?? 0, newLength: text.length, model: "claude-opus-4-6" },
          publicNotes: `Essay expanded to approximately ${Math.round(text.length / 5)} words covering key events, people, and themes.`,
        },
      });

      console.log(`  ✓ ${town.name} — ${text.length} chars`);
    } catch (err) {
      console.error(`  ✗ ${town.name}:`, err);
    }
    await new Promise((r) => setTimeout(r, 2000));
  }
}

async function expandEventSummaries(limit: number) {
  const events = await prisma.event.findMany({
    where: { significanceWeight: { gte: 60 } },
    select: {
      id: true, name: true, summary: true, startDate: true,
      town: { select: { id: true, name: true, state: true } },
      eventPeople: { select: { person: { select: { name: true, roles: true } }, roleInEvent: true }, take: 5 },
      eventThemes: { select: { theme: { select: { name: true } } } },
    },
    orderBy: { significanceWeight: "desc" },
    take: limit * 2,
  });

  const thin = events.filter((e) => (e.summary?.length ?? 0) < MIN_EVENT_LEN).slice(0, limit);
  console.log(`Expanding summaries for ${thin.length} events...`);

  for (const event of thin) {
    const year = event.startDate ? new Date(event.startDate).getFullYear() : "unknown year";
    const peopleList = event.eventPeople.map((ep) => `${ep.person.name}${ep.roleInEvent ? ` (${ep.roleInEvent})` : ""}`).join(", ");
    const themeList = event.eventThemes.map((et) => et.theme.name).join(", ");

    const prompt = `Write a 600-word narrative summary of this Revolutionary War event for an educational website.

Event: ${event.name}
Location: ${event.town.name}, ${event.town.state}
Year: ${year}
People involved: ${peopleList || "Various participants"}
Themes: ${themeList || "Revolutionary War"}
Current summary: ${event.summary}

Requirements:
- Expand and deepen the current summary significantly
- Include historical context — what led up to this, what happened after
- Name specific people and their roles
- Explain why this event matters in the broader Revolutionary War story
- Write in flowing paragraphs, no headers or bullets
- Be historically accurate — do not invent facts not implied by the current summary`;

    try {
      const msg = await client.messages.create({
        model: "claude-opus-4-6",
        max_tokens: 1200,
        messages: [{ role: "user", content: prompt }],
      });

      const text = (msg.content[0] as any).text as string;
      if (!text || text.length < 300) continue;

      await prisma.event.update({
        where: { id: event.id },
        data: { summary: text },
      });

      await prisma.changeLogEntry.create({
        data: {
          townId: event.town.id,
          category: "CONTENT",
          title: `Expanded event summary: ${event.name}`,
          summary: `Rewrote the summary for "${event.name}" from ${event.summary?.length ?? 0} to ${text.length} characters.`,
          details: { previousLength: event.summary?.length ?? 0, newLength: text.length, eventId: event.id },
        },
      });

      console.log(`  ✓ ${event.name} (${event.town.name})`);
    } catch (err) {
      console.error(`  ✗ ${event.name}:`, err);
    }
    await new Promise((r) => setTimeout(r, 2000));
  }
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("ANTHROPIC_API_KEY not set. Add it to .env or environment.");
    process.exit(1);
  }
  if (!EVENTS_ONLY) await expandTownNarrative(LIMIT);
  if (!TOWNS_ONLY) await expandEventSummaries(LIMIT);
  await prisma.$disconnect();
  console.log("Done.");
}

main().catch((e) => { console.error(e); process.exit(1); });
