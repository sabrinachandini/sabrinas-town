/**
 * Vercel Cron — daily content enrichment.
 * Runs every day at 6am UTC (vercel.json: "0 6 * * *").
 * Each run revises the stalest towns (3), events (6), and people (4).
 * Oldest-first ordering ensures every record rotates through over time.
 */

import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { prisma } from "@/lib/prisma";

export const maxDuration = 300;
export const dynamic = "force-dynamic";

const client = new Anthropic();

/* ── Towns ───────────────────────────────────────────────────── */

async function enrichTown(
  id: string, name: string, state: string,
  eventList: string, themeList: string, peopleList: string
): Promise<number | null> {
  const msg = await client.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 2500,
    messages: [{
      role: "user",
      content: `You are a professional historian writing for an American Revolution education network.

Write a comprehensive 1,500-word essay on the Revolutionary War history of ${name}, ${state}.

Context:
- Key events: ${eventList}
- Themes: ${themeList}
- Notable people: ${peopleList}

Requirements:
- Write for educated general readers
- Use specific dates, people, and primary-source language where appropriate
- Cover: what role this town played, key moments, who was there, what was at stake
- End with why modern visitors and students should care
- Flowing paragraphs only, no headers or bullets`,
    }],
  });

  const text = (msg.content[0] as { text: string }).text;
  if (!text || text.length < 500) return null;

  await prisma.town.update({
    where: { id },
    data: { whyMatters: text, lastUpdatedAt: new Date() },
  });

  await prisma.changeLogEntry.create({
    data: {
      townId: id,
      category: "CONTENT",
      title: `Revised history narrative for ${name}`,
      summary: `Narrative essay rewritten to ${text.length} characters by AI enrichment.`,
      details: { newLength: text.length },
      publicNotes: `Essay approximately ${Math.round(text.length / 5)} words.`,
    },
  });

  return text.length;
}

/* ── Events ──────────────────────────────────────────────────── */

async function enrichEvent(
  id: string, name: string, townName: string, state: string,
  year: number | null, currentSummary: string
): Promise<number | null> {
  const msg = await client.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 1200,
    messages: [{
      role: "user",
      content: `You are a historian writing for an American Revolution education platform.

Write a vivid, accurate 400-600 word summary of this event:
"${name}"${year ? ` (${year})` : ""} — ${townName}, ${state}

Current summary for context (may be thin or inaccurate — improve it):
${currentSummary.slice(0, 600)}

Requirements:
- Specific dates, people, and outcomes where known
- What happened, who was involved, why it mattered
- Accessible to a general reader, not just specialists
- Flowing prose only, no headers or bullets`,
    }],
  });

  const text = (msg.content[0] as { text: string }).text;
  if (!text || text.length < 200) return null;

  await prisma.event.update({
    where: { id },
    data: { summary: text },
  });

  return text.length;
}

/* ── People ──────────────────────────────────────────────────── */

async function enrichPerson(
  id: string, name: string, roles: string[],
  townNames: string[], currentBio: string
): Promise<number | null> {
  const msg = await client.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 1500,
    messages: [{
      role: "user",
      content: `You are a historian writing for an American Revolution education platform.

Write an accurate, engaging 500-700 word biography of ${name}.

Role(s): ${roles.join(", ")}
Connected towns: ${townNames.join(", ")}

Current bio for context (may be thin — improve and expand it):
${currentBio.slice(0, 600)}

Requirements:
- Specific dates, places, and actions where known
- Early life, Revolutionary War contributions, legacy
- Accessible prose — no jargon, no headers, no bullets
- If this person is obscure, focus on what IS documented rather than speculating`,
    }],
  });

  const text = (msg.content[0] as { text: string }).text;
  if (!text || text.length < 300) return null;

  await prisma.person.update({
    where: { id },
    data: { bioLong: text },
  });

  return text.length;
}

/* ── Handler ─────────────────────────────────────────────────── */

export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (secret && req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: "ANTHROPIC_API_KEY not configured" }, { status: 500 });
  }

  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const results: Record<string, string[]> = { towns: [], events: [], people: [] };

  /* Towns — 3 per run, stale first */
  const towns = await prisma.town.findMany({
    where: { lastUpdatedAt: { lt: sevenDaysAgo }, whyMatters: { not: "" } },
    select: {
      id: true, name: true, state: true,
      events: { select: { name: true, startDate: true }, orderBy: { significanceWeight: "desc" }, take: 8 },
      townThemes: { select: { theme: { select: { name: true } } } },
      townPeople: { select: { person: { select: { name: true, roles: true } } }, take: 4 },
    },
    orderBy: { lastUpdatedAt: "asc" },
    take: 3,
  });

  for (const t of towns) {
    try {
      const eventList = t.events.map((e) => `${e.name}${e.startDate ? ` (${new Date(e.startDate).getFullYear()})` : ""}`).join(", ");
      const themeList = t.townThemes.map((th) => th.theme.name).join(", ");
      const peopleList = t.townPeople.map((tp) => `${tp.person.name} (${tp.person.roles[0] ?? "Patriot"})`).join("; ");
      const len = await enrichTown(t.id, t.name, t.state, eventList, themeList, peopleList);
      if (len) results.towns.push(`${t.name}: ${len} chars`);
    } catch (err) {
      console.error(`Town enrichment failed: ${t.name}`, err);
    }
    await new Promise((r) => setTimeout(r, 1500));
  }

  /* Events — 6 per run, oldest updatedAt first */
  const events = await prisma.event.findMany({
    where: { summary: { not: "" } },
    select: {
      id: true, name: true, summary: true, startDate: true,
      town: { select: { name: true, state: true } },
    },
    orderBy: { updatedAt: "asc" },
    take: 6,
  });

  for (const ev of events) {
    try {
      const year = ev.startDate ? new Date(ev.startDate).getFullYear() : null;
      const len = await enrichEvent(ev.id, ev.name, ev.town.name, ev.town.state, year, ev.summary);
      if (len) results.events.push(`${ev.name}: ${len} chars`);
    } catch (err) {
      console.error(`Event enrichment failed: ${ev.name}`, err);
    }
    await new Promise((r) => setTimeout(r, 1500));
  }

  /* People — 4 per run, oldest updatedAt first, only those with a bioLong */
  const people = await prisma.person.findMany({
    where: { OR: [{ bioLong: { not: null } }, { bioShort: { not: "" } }] },
    select: {
      id: true, name: true, roles: true, bioLong: true, bioShort: true,
      townPeople: { select: { town: { select: { name: true } } }, take: 4 },
    },
    orderBy: { updatedAt: "asc" },
    take: 4,
  });

  for (const p of people) {
    try {
      const townNames = p.townPeople.map((tp) => tp.town.name);
      const currentBio = p.bioLong ?? p.bioShort;
      const len = await enrichPerson(p.id, p.name, p.roles, townNames, currentBio);
      if (len) results.people.push(`${p.name}: ${len} chars`);
    } catch (err) {
      console.error(`Person enrichment failed: ${p.name}`, err);
    }
    await new Promise((r) => setTimeout(r, 1500));
  }

  const total = results.towns.length + results.events.length + results.people.length;
  return NextResponse.json({ updated: total, ...results });
}
