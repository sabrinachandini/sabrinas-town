/**
 * Vercel Cron — daily agentic content enrichment.
 * Schedule: "0 6 * * *" (every day at 6am UTC, set in vercel.json)
 *
 * Each run processes 12 towns oldest-first, cycling all ~75 towns every ~6 days.
 * For each town:
 *   1. Fetch existing Tier 1/2 source URLs from the DB and extract text
 *   2. Use Claude with web_search to find new Tier 1/2 information
 *   3. Weave new facts into existing content — preserve structure and voice
 *   4. Save any newly discovered Tier 1/2 sources to the DB
 *   5. Log everything to ChangeLogEntry regardless of whether content changed
 */

import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { prisma } from "@/lib/prisma";

export const maxDuration = 300;
export const dynamic = "force-dynamic";

const client = new Anthropic();
const TOWNS_PER_RUN = 12;
const FETCH_TIMEOUT_MS = 6000;
const FETCH_MAX_CHARS = 4000;

/* ── Fetch a source URL and return truncated text ───────────── */

async function fetchSourceText(url: string): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    const res = await fetch(url, { signal: controller.signal, headers: { "User-Agent": "HistoryIsForEveryone/1.0 (educational research bot)" } });
    clearTimeout(timer);
    if (!res.ok) return null;
    const html = await res.text();
    // Strip tags, collapse whitespace, truncate
    const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    return text.slice(0, FETCH_MAX_CHARS);
  } catch {
    return null;
  }
}

/* ── Enrich one town ─────────────────────────────────────────── */

async function enrichTown(town: {
  id: string;
  name: string;
  state: string;
  whyMatters: string;
  sourceTowns: Array<{
    source: {
      id: string;
      title: string;
      url: string | null;
      credibilityTier: string;
      publisherOrHolder: string;
    };
  }>;
}): Promise<{ changed: boolean; newSourceIds: string[]; summary: string }> {

  // 1. Fetch existing Tier 1/2 source content
  const tier12Sources = town.sourceTowns
    .map((st) => st.source)
    .filter((s) => s.credibilityTier === "TIER1" || s.credibilityTier === "TIER2");

  const fetchedSources: string[] = [];
  for (const src of tier12Sources.slice(0, 5)) {
    if (!src.url) continue;
    const text = await fetchSourceText(src.url);
    if (text) {
      fetchedSources.push(`[${src.credibilityTier} — ${src.title} — ${src.publisherOrHolder}]\n${text}`);
    }
  }

  // 2. Ask Claude to research and augment — web_search tool enabled
  const systemPrompt = `You are a professional historian and fact-checker for an American Revolution education network.
Your job is to find new, verified information about Revolutionary War towns and add it to existing content.
Only use information from Tier 1 sources (academic journals, NPS, Smithsonian, primary documents) and Tier 2 sources (established historians, reputable secondary sources).
Never speculate. Never add unverified claims. Preserve the existing voice and structure of the content.`;

  const userPrompt = `Research ${town.name}, ${town.state} and its role in the American Revolution.

EXISTING CONTENT (keep this largely intact — only add new verified facts):
${town.whyMatters.slice(0, 3000)}

ALREADY-FETCHED TIER 1/2 SOURCES:
${fetchedSources.length > 0 ? fetchedSources.join("\n\n---\n\n") : "None fetched yet."}

YOUR TASK:
1. Search the web for new Tier 1 or Tier 2 sources about ${town.name}'s Revolutionary War history that aren't already covered above.
2. Identify any specific facts, dates, people, or events that are NEW — not already present in the existing content.
3. Weave those new facts into the existing content naturally. Keep the same structure and tone. Do not rewrite sections that don't need updating.
4. If no new information is found, return the existing content unchanged.

OUTPUT FORMAT (exactly):
NEW_FACTS_FOUND: [yes/no]
NEW_SOURCES: [comma-separated list of URLs you found, or "none"]
UPDATED_CONTENT:
[the full updated content, or the original if unchanged]`;

  let updatedContent = town.whyMatters;
  let newFactsFound = false;
  let newSourceUrls: string[] = [];

  try {
    const msg = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 3000,
      tools: [{ type: "web_search_20250305" as const, name: "web_search" }],
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
    });

    // Extract text from all content blocks (tool results + final text)
    const fullText = msg.content
      .filter((b) => b.type === "text")
      .map((b) => (b as { type: "text"; text: string }).text)
      .join("\n");

    const factsMatch = fullText.match(/NEW_FACTS_FOUND:\s*(yes|no)/i);
    const sourcesMatch = fullText.match(/NEW_SOURCES:\s*([^\n]+)/i);
    const contentMatch = fullText.match(/UPDATED_CONTENT:\s*([\s\S]+)$/i);

    newFactsFound = factsMatch?.[1]?.toLowerCase() === "yes";

    const rawSources = sourcesMatch?.[1]?.trim() ?? "";
    newSourceUrls = rawSources === "none" || !rawSources
      ? []
      : rawSources.split(",").map((u) => u.trim()).filter((u) => u.startsWith("http"));

    if (contentMatch?.[1] && contentMatch[1].trim().length > 500) {
      updatedContent = contentMatch[1].trim();
    }
  } catch (err) {
    console.error(`Claude call failed for ${town.name}:`, err);
    return { changed: false, newSourceIds: [], summary: `Error: ${String(err).slice(0, 100)}` };
  }

  const changed = updatedContent !== town.whyMatters && updatedContent.length > 500;

  // 3. Persist updated content
  if (changed) {
    await prisma.town.update({
      where: { id: town.id },
      data: { whyMatters: updatedContent, lastUpdatedAt: new Date() },
    });
  } else {
    // Still bump lastUpdatedAt so this town moves to the back of the queue
    await prisma.town.update({
      where: { id: town.id },
      data: { lastUpdatedAt: new Date() },
    });
  }

  // 4. Save any newly discovered Tier 1/2 sources
  const newSourceIds: string[] = [];
  for (const url of newSourceUrls.slice(0, 3)) {
    try {
      // Skip if already in DB
      const existing = await prisma.source.findFirst({ where: { url } });
      if (existing) {
        // Link to town if not already linked
        const linked = await prisma.sourceTown.findFirst({ where: { sourceId: existing.id, townId: town.id } });
        if (!linked) {
          await prisma.sourceTown.create({ data: { sourceId: existing.id, townId: town.id } });
          newSourceIds.push(existing.id);
        }
        continue;
      }

      const newSource = await prisma.source.create({
        data: {
          type: "SECONDARY",
          title: url,
          publisherOrHolder: new URL(url).hostname,
          url,
          credibilityTier: "TIER2",
          notes: `Discovered by agentic enrichment for ${town.name}`,
        },
      });
      await prisma.sourceTown.create({ data: { sourceId: newSource.id, townId: town.id } });
      newSourceIds.push(newSource.id);
    } catch {
      // Non-fatal — bad URL or DB constraint
    }
  }

  // 5. Log to ChangeLogEntry — only when something actually changed
  if (!changed && newSourceIds.length === 0) {
    return { changed: false, newSourceIds: [], summary: `No new information found for ${town.name}` };
  }

  const summaryText = changed
    ? `Found new Tier 1/2 information and updated content (${town.whyMatters.length} → ${updatedContent.length} chars). ${newSourceIds.length} new source(s) added.`
    : `${newSourceIds.length} new Tier 1/2 source(s) discovered and linked for ${town.name}.`;

  await prisma.changeLogEntry.create({
    data: {
      townId: town.id,
      category: "CONTENT",
      title: changed
        ? `Agentic enrichment: new facts added for ${town.name}`
        : `Agentic enrichment: new sources linked for ${town.name}`,
      summary: summaryText,
      details: {
        newFactsFound,
        contentChanged: changed,
        previousLength: town.whyMatters.length,
        newLength: updatedContent.length,
        sourcesDiscovered: newSourceUrls,
        newSourcesSaved: newSourceIds.length,
        tier12SourcesFetched: fetchedSources.length,
      },
      publicNotes: changed
        ? `Content updated with newly verified historical information from Tier 1/2 sources.`
        : null,
      createdBy: "cron:content-refresh",
    },
  });

  return { changed, newSourceIds, summary: summaryText };
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

  // Oldest lastUpdatedAt first — ensures full rotation across all towns
  const towns = await prisma.town.findMany({
    where: { whyMatters: { not: "" } },
    select: {
      id: true,
      name: true,
      state: true,
      whyMatters: true,
      sourceTowns: {
        where: { source: { credibilityTier: { in: ["TIER1", "TIER2"] } } },
        select: {
          source: {
            select: {
              id: true,
              title: true,
              url: true,
              credibilityTier: true,
              publisherOrHolder: true,
            },
          },
        },
      },
    },
    orderBy: { lastUpdatedAt: "asc" },
    take: TOWNS_PER_RUN,
  });

  const results: Array<{ town: string; changed: boolean; summary: string }> = [];

  for (const town of towns) {
    try {
      const result = await enrichTown(town);
      results.push({ town: town.name, ...result });
      console.log(`[content-refresh] ${town.name}: ${result.summary}`);
    } catch (err) {
      console.error(`[content-refresh] Failed for ${town.name}:`, err);
      results.push({ town: town.name, changed: false, summary: `Error: ${String(err).slice(0, 80)}` });
    }
    // Brief pause between towns to stay within rate limits
    await new Promise((r) => setTimeout(r, 2000));
  }

  const changed = results.filter((r) => r.changed).length;
  return NextResponse.json({ processed: results.length, changed, results });
}
