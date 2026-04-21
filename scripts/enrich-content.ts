/**
 * Claude-powered content enrichment script.
 * Expands town narratives, event summaries, and person bios. Logs all changes.
 *
 * Usage:
 *   npx tsx scripts/enrich-content.ts [--limit N] [--towns-only] [--events-only] [--people-only]
 */

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["error"] });

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const LIMIT = parseInt(process.argv.find((a) => a.startsWith("--limit="))?.split("=")[1] ?? "9999");
const TOWNS_ONLY = process.argv.includes("--towns-only");
const EVENTS_ONLY = process.argv.includes("--events-only");
const PEOPLE_ONLY = process.argv.includes("--people-only");

const MIN_TOWN_LEN = 5000;
const MIN_EVENT_LEN = 2500;  // ~500 words — 3-4 solid paragraphs
const MIN_PERSON_LEN = 3000; // ~4 paragraphs minimum

async function expandTownNarrative(limit: number) {
  const towns = await prisma.town.findMany({
    where: { whyMatters: { not: undefined } },
    select: {
      id: true, name: true, state: true, slug: true, whyMatters: true,
      events: { select: { name: true, startDate: true, significanceWeight: true }, orderBy: { significanceWeight: "desc" }, take: 10 },
      townThemes: { select: { theme: { select: { name: true } } } },
      townPeople: { select: { person: { select: { name: true, roles: true } }, connectionNote: true }, take: 6 },
    },
    take: limit * 2,
  });

  const thin = towns.filter((t) => (t.whyMatters?.length ?? 0) < MIN_TOWN_LEN).slice(0, limit);
  console.log(`\n── Towns (${thin.length} need expansion) ──`);

  for (const town of thin) {
    const eventList = town.events.map((e) => `- ${e.name}${e.startDate ? ` (${new Date(e.startDate).getFullYear()})` : ""}`).join("\n");
    const themeList = town.townThemes.map((t) => t.theme.name).join(", ");
    const peopleList = town.townPeople.map((tp) => `${tp.person.name} (${tp.person.roles.join(", ")}${tp.connectionNote ? `; ${tp.connectionNote}` : ""})`).join("; ");

    const prompt = `You are a professional historian writing for an American Revolution education network.

Write a comprehensive essay on the Revolutionary War history of ${town.name}, ${town.state}.

Context:
- Key events: ${eventList || "None listed"}
- Themes: ${themeList || "General Revolutionary War"}
- Notable people: ${peopleList || "Various Patriots and Loyalists"}

Requirements:
- Write EXACTLY 4 substantial paragraphs, each 200–300 words
- Paragraph 1: Set the scene — what was this town before the Revolution, and why did it matter strategically or socially?
- Paragraph 2: The war arrives — what specific events, battles, or turning points happened here?
- Paragraph 3: The people — who was here, what did they do, what choices did they face (include both Patriots and Loyalists where relevant)?
- Paragraph 4: Legacy — what did this town's experience mean for the Revolution's outcome, and why should students and visitors care today?
- Write for educated general readers (not academics, not children)
- Use specific dates, people, and primary-source language where appropriate
- Do NOT use headers, bullet points, or markdown formatting — flowing prose only
- Do NOT start with "In the annals of..." or similar clichés`;

    try {
      const msg = await client.messages.create({
        model: "claude-opus-4-6",
        max_tokens: 3000,
        messages: [{ role: "user", content: prompt }],
      });

      const text = (msg.content[0] as any).text as string;
      if (!text || text.length < 800) { console.log(`  ⚠ Short response for ${town.name}`); continue; }

      await prisma.town.update({
        where: { id: town.id },
        data: { whyMatters: text, lastUpdatedAt: new Date() },
      });

      await prisma.changeLogEntry.create({
        data: {
          townId: town.id,
          category: "CONTENT",
          title: `Expanded history narrative for ${town.name}`,
          summary: `Rewrote the Why ${town.name} Matters essay from ${town.whyMatters?.length ?? 0} to ${text.length} characters.`,
          details: { previousLength: town.whyMatters?.length ?? 0, newLength: text.length, model: "claude-opus-4-6" },
          publicNotes: `Essay expanded to approximately ${Math.round(text.length / 5)} words in 4 structured paragraphs.`,
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
      eventPeople: { select: { person: { select: { name: true, roles: true } }, roleInEvent: true }, take: 6 },
      eventThemes: { select: { theme: { select: { name: true } } } },
    },
    orderBy: { significanceWeight: "desc" },
    take: limit * 2,
  });

  const thin = events.filter((e) => (e.summary?.length ?? 0) < MIN_EVENT_LEN).slice(0, limit);
  console.log(`\n── Events (${thin.length} need expansion) ──`);

  for (const event of thin) {
    const year = event.startDate ? new Date(event.startDate).getFullYear() : "unknown year";
    const peopleList = event.eventPeople.map((ep) => `${ep.person.name}${ep.roleInEvent ? ` (${ep.roleInEvent})` : ""}`).join(", ");
    const themeList = event.eventThemes.map((et) => et.theme.name).join(", ");

    const prompt = `Write a 4-paragraph narrative summary of this Revolutionary War event for an educational website.

Event: ${event.name}
Location: ${event.town.name}, ${event.town.state}
Year: ${year}
People involved: ${peopleList || "Various participants"}
Themes: ${themeList || "Revolutionary War"}
Current summary: ${event.summary}

Requirements:
- Write EXACTLY 4 paragraphs, each 150–200 words
- Paragraph 1: Context — what was the situation leading up to this event?
- Paragraph 2: What happened — specific sequence of events, decisions, and turning points
- Paragraph 3: The people — who was there, what roles did they play, what were the human stakes?
- Paragraph 4: Significance — why did this event matter for the broader war and for history?
- Write in flowing paragraphs, no headers, bullets, or markdown
- Be historically accurate — do not invent facts not implied by the current summary`;

    try {
      const msg = await client.messages.create({
        model: "claude-opus-4-6",
        max_tokens: 1500,
        messages: [{ role: "user", content: prompt }],
      });

      const text = (msg.content[0] as any).text as string;
      if (!text || text.length < 500) continue;

      await prisma.event.update({ where: { id: event.id }, data: { summary: text } });

      await prisma.changeLogEntry.create({
        data: {
          townId: event.town.id,
          category: "CONTENT",
          title: `Expanded event summary: ${event.name}`,
          summary: `Rewrote "${event.name}" summary from ${event.summary?.length ?? 0} to ${text.length} characters in 4 paragraphs.`,
          details: { previousLength: event.summary?.length ?? 0, newLength: text.length, eventId: event.id },
        },
      });

      console.log(`  ✓ ${event.name} (${event.town.name}) — ${text.length} chars`);
    } catch (err) {
      console.error(`  ✗ ${event.name}:`, err);
    }
    await new Promise((r) => setTimeout(r, 2000));
  }
}

const PROMINENT_ROLES = ["General", "Colonel", "Governor", "President", "Delegate", "Commander", "Admiral", "Major General", "Brigadier General", "Continental Congress"];
const FAMOUS_NAMES = ["Washington", "Adams", "Jefferson", "Hamilton", "Franklin", "Hancock", "Madison", "Monroe", "Lafayette", "Revere", "Greene", "Knox", "Arnold", "Burgoyne", "Howe", "Cornwallis", "Paine", "Henry", "Marion", "Putnam", "Prescott", "Warren", "Stark", "Morgan", "Lee"];

function getProminenceLevel(person: { name: string; roles: string[]; eventPeople: unknown[] }): "standard" | "prominent" | "famous" {
  const isFamous = FAMOUS_NAMES.some((n) => person.name.includes(n));
  if (isFamous) return "famous";
  const isProminent = person.roles.some((r) => PROMINENT_ROLES.some((p) => r.includes(p))) || person.eventPeople.length >= 4;
  if (isProminent) return "prominent";
  return "standard";
}

async function expandPersonBios(limit: number) {
  const people = await prisma.person.findMany({
    where: { bioShort: { not: "" } },
    select: {
      id: true, name: true, roles: true, bioShort: true, bioLong: true, birthYear: true, deathYear: true,
      townPeople: { select: { town: { select: { name: true, state: true } }, connectionNote: true }, take: 6 },
      eventPeople: {
        select: { event: { select: { name: true, startDate: true, significanceWeight: true } }, roleInEvent: true },
        orderBy: { event: { significanceWeight: "desc" } },
        take: 10,
      },
    },
    take: limit * 2,
  });

  const thin = people.filter((p) => (p.bioLong?.length ?? 0) < MIN_PERSON_LEN).slice(0, limit);
  console.log(`\n── People (${thin.length} need bio expansion) ──`);

  for (const person of thin) {
    const level = getProminenceLevel(person);
    const paragraphCount = level === "famous" ? 10 : level === "prominent" ? 6 : 4;
    const maxTokens = level === "famous" ? 4000 : level === "prominent" ? 2500 : 1800;

    const townList = person.townPeople.map((tp) => `${tp.town.name}, ${tp.town.state}${tp.connectionNote ? ` (${tp.connectionNote})` : ""}`).join("; ");
    const eventList = person.eventPeople.map((ep) => `${ep.event.name}${ep.event.startDate ? ` (${new Date(ep.event.startDate).getFullYear()})` : ""}${ep.roleInEvent ? `: ${ep.roleInEvent}` : ""}`).join("; ");
    const lifespan = person.birthYear ? `${person.birthYear}–${person.deathYear ?? "?"}` : "";

    const paragraphGuide = level === "famous"
      ? `- Paragraph 1: Early life, origins, and formation of character before the Revolution
- Paragraph 2: How they entered the Revolutionary cause — the turning point
- Paragraph 3: Their most significant military or political action
- Paragraph 4: Key battles, decisions, or moments they shaped
- Paragraph 5: Relationships and alliances that defined their role
- Paragraph 6: Setbacks, controversies, or moral complexity
- Paragraph 7: How the war changed them personally
- Paragraph 8: Their role in the war's resolution or aftermath
- Paragraph 9: Immediate legacy — how contemporaries saw them
- Paragraph 10: Why students and visitors today should know this person`
      : level === "prominent"
      ? `- Paragraph 1: Origins and background — what shaped them before the conflict
- Paragraph 2: Entry into the Revolutionary War — their first significant role
- Paragraph 3: Their most important actions and decisions during the war
- Paragraph 4: Specific events and turning points they were part of
- Paragraph 5: Relationships with other figures and how they influenced outcomes
- Paragraph 6: Legacy — what their story means for understanding the Revolution`
      : `- Paragraph 1: Who they were — background, origins, what brought them into the conflict
- Paragraph 2: What they did — specific actions, decisions, and role in the events listed
- Paragraph 3: The human stakes — what they risked, who they were fighting for
- Paragraph 4: Legacy — how to understand this person's significance today`;

    const prompt = `Write a biographical essay for an American Revolution educational website.

Person: ${person.name}${lifespan ? ` (${lifespan})` : ""}
Prominence level: ${level}
Roles: ${person.roles.join(", ")}
Associated towns: ${townList || "Various locations"}
Key events: ${eventList || "Various Revolutionary War events"}
Short bio: ${person.bioShort}
${person.bioLong ? `Existing bio (expand and improve upon this): ${person.bioLong}` : ""}

Requirements:
- Write EXACTLY ${paragraphCount} paragraphs, each 180–220 words
${paragraphGuide}
- Write for educated general readers — vivid, specific, not dry
- Use specific dates and places where historically accurate
- Do NOT use headers, bullet points, or markdown — flowing prose only
- Do NOT begin with the person's name as the first word
- Do NOT invent facts not supported by the bio above`;

    try {
      const msg = await client.messages.create({
        model: "claude-opus-4-6",
        max_tokens: maxTokens,
        messages: [{ role: "user", content: prompt }],
      });

      const text = (msg.content[0] as any).text as string;
      if (!text || text.length < 600) { console.log(`  ⚠ Short response for ${person.name} (${text?.length ?? 0} chars)`); continue; }

      await prisma.person.update({ where: { id: person.id }, data: { bioLong: text } });
      console.log(`  ✓ [${level}] ${person.name} — ${text.length} chars, ${paragraphCount} paragraphs`);
    } catch (err) {
      console.error(`  ✗ ${person.name}:`, err);
    }
    await new Promise((r) => setTimeout(r, 2500));
  }
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("ANTHROPIC_API_KEY not set. Add it to .env or environment.");
    process.exit(1);
  }

  const runAll = !TOWNS_ONLY && !EVENTS_ONLY && !PEOPLE_ONLY;
  if (runAll || TOWNS_ONLY) await expandTownNarrative(LIMIT);
  if (runAll || EVENTS_ONLY) await expandEventSummaries(LIMIT);
  if (runAll || PEOPLE_ONLY) await expandPersonBios(LIMIT);

  await prisma.$disconnect();
  console.log("\nDone.");
}

main().catch((e) => { console.error(e); process.exit(1); });
