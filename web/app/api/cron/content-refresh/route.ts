/**
 * Vercel Cron endpoint — weekly content enrichment.
 * Runs every Sunday at 6am UTC (configured in vercel.json).
 * Enriches towns not updated in 30+ days (max 8 per run to stay within timeout).
 */

import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { prisma } from "@/lib/prisma";

export const maxDuration = 300;
export const dynamic = "force-dynamic";

async function enrichOneTown(townId: string, townName: string, state: string, currentWhyMatters: string, eventList: string, themeList: string, peopleList: string) {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const prompt = `You are a professional historian writing for an American Revolution education network.

Write a comprehensive 1,500-word essay on the Revolutionary War history of ${townName}, ${state}.

Context:
- Key events: ${eventList}
- Themes: ${themeList}
- Notable people: ${peopleList}

Requirements:
- Write for educated general readers
- Use specific dates, people, and primary-source language where appropriate
- Cover: what role this town played, key moments, who was there, what was at stake
- End with why modern visitors and students should care
- Flowing paragraphs only, no headers or bullets`;

  const msg = await client.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 2500,
    messages: [{ role: "user", content: prompt }],
  });

  const text = (msg.content[0] as any).text as string;
  if (!text || text.length < 500) return null;

  await prisma.town.update({
    where: { id: townId },
    data: { whyMatters: text, lastUpdatedAt: new Date() },
  });

  await prisma.changeLogEntry.create({
    data: {
      townId,
      category: "CONTENT",
      title: `Expanded history narrative for ${townName}`,
      summary: `Rewrote the Why ${townName} Matters essay from ${currentWhyMatters.length} to ${text.length} characters.`,
      details: { previousLength: currentWhyMatters.length, newLength: text.length },
      publicNotes: `Essay expanded to approximately ${Math.round(text.length / 5)} words.`,
    },
  });

  return text.length;
}

export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (secret && req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: "ANTHROPIC_API_KEY not configured" }, { status: 500 });
  }

  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  const towns = await prisma.town.findMany({
    where: { lastUpdatedAt: { lt: thirtyDaysAgo } },
    select: {
      id: true, name: true, state: true, whyMatters: true,
      events: { select: { name: true, startDate: true }, orderBy: { significanceWeight: "desc" }, take: 8 },
      townThemes: { select: { theme: { select: { name: true } } } },
      townPeople: { select: { person: { select: { name: true, roles: true } } }, take: 4 },
    },
    orderBy: { lastUpdatedAt: "asc" },
    take: 8,
  });

  const results: string[] = [];

  for (const town of towns) {
    try {
      const eventList = town.events.map((e) => `${e.name}${e.startDate ? ` (${new Date(e.startDate).getFullYear()})` : ""}`).join(", ");
      const themeList = town.townThemes.map((t) => t.theme.name).join(", ");
      const peopleList = town.townPeople.map((tp) => `${tp.person.name} (${tp.person.roles[0] ?? "Patriot"})`).join("; ");

      const len = await enrichOneTown(town.id, town.name, town.state, town.whyMatters, eventList, themeList, peopleList);
      if (len) results.push(`${town.name}: ${len} chars`);
    } catch (err) {
      console.error(`Cron enrichment failed for ${town.name}:`, err);
    }
    await new Promise((r) => setTimeout(r, 2000));
  }

  return NextResponse.json({ updated: results.length, towns: results });
}
