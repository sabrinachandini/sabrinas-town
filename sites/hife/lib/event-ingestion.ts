/**
 * Event Ingestion Pipeline
 * Fetches events from NPS API and ICS feeds, normalizes, dedupes,
 * and routes to published or review queue based on source trust level.
 */

import prisma from "@/lib/prisma";
import type { EventSource } from "@prisma/client";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface RawEvent {
  externalId: string;
  title: string;
  description: string;
  startDate: Date | null;
  endDate: Date | null;
  isRecurring: boolean;
  month?: number;
  day?: number;
  endDay?: number;
  venue: string | null;
  url: string | null;
  category: string;
}

export interface SourceResult {
  sourceId: string;
  sourceName: string;
  created: number;
  duped: number;
  errors: string[];
  status: "ok" | "empty" | "error";
}

// ── NPS API fetcher ───────────────────────────────────────────────────────────

const NPS_BASE = "https://developer.nps.gov/api/v1/events";
const FETCH_TIMEOUT = 15_000;

const NPS_TYPE_TO_CATEGORY: Record<string, string> = {
  "Reenactment": "reenactment",
  "Living History": "reenactment",
  "Festival": "festival",
  "Ceremony": "ceremony",
  "Ranger Program": "tour",
  "Guided Tour": "tour",
  "Self-Guided Tour": "tour",
  "Lecture": "lecture",
  "Talk": "lecture",
  "Exhibition": "exhibition",
  "Cultural Demonstration": "reenactment",
  "Campfire Program": "tour",
  "Junior Ranger Program": "tour",
};

function npsTypesToCategory(types: string[]): string {
  for (const t of types) {
    const cat = NPS_TYPE_TO_CATEGORY[t];
    if (cat) return cat;
  }
  return "tour";
}

function stripHtml(raw: string): string {
  return raw.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function truncate(text: string, max: number): string {
  const clean = stripHtml(text);
  return clean.length <= max ? clean : clean.slice(0, max - 1) + "…";
}

export async function fetchNPSEvents(
  parkCode: string,
  log: (msg: string) => void
): Promise<RawEvent[]> {
  const apiKey = process.env.NPS_API_KEY;
  if (!apiKey) {
    log(`[NPS] No NPS_API_KEY env var — skipping ${parkCode}`);
    return [];
  }

  // Fetch events 90 days out from today
  const today = new Date();
  const future = new Date(today.getTime() + 90 * 24 * 60 * 60 * 1000);
  const dateStart = today.toISOString().split("T")[0];
  const dateEnd = future.toISOString().split("T")[0];

  const url = `${NPS_BASE}?parkCode=${parkCode}&dateStart=${dateStart}&dateEnd=${dateEnd}&limit=50&api_key=${apiKey}`;

  let json: { data?: unknown[]; total?: string };
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "HistoryIsForEveryone/1.0 (educational event ingestion; historyisforeveryone.com)" },
    });
    clearTimeout(timer);
    if (!res.ok) {
      log(`[NPS] HTTP ${res.status} for park ${parkCode}`);
      return [];
    }
    json = await res.json();
  } catch (e) {
    log(`[NPS] Fetch error for ${parkCode}: ${String(e).slice(0, 80)}`);
    return [];
  }

  if (!Array.isArray(json.data)) {
    log(`[NPS] No data array for park ${parkCode}`);
    return [];
  }

  const events: RawEvent[] = [];
  for (const raw of json.data as Record<string, unknown>[]) {
    try {
      const title = String(raw.title ?? "").trim();
      if (!title) continue;

      const dates = (raw.dates ?? {}) as Record<string, string>;
      const startStr = dates.start ?? "";
      const endStr = dates.end ?? "";

      let startDate: Date | null = null;
      let endDate: Date | null = null;
      if (startStr) {
        const d = new Date(startStr + "T00:00:00");
        if (!isNaN(d.getTime())) startDate = d;
      }
      if (endStr) {
        const d = new Date(endStr + "T23:59:59");
        if (!isNaN(d.getTime())) endDate = d;
      }

      if (!startDate) {
        log(`[NPS] Skipping "${title}" — unparseable date "${startStr}"`);
        continue;
      }

      const types = Array.isArray(raw.types) ? (raw.types as string[]) : [];
      const category = npsTypesToCategory(types);
      const description = truncate(String(raw.description ?? ""), 300) || `${title} at ${parkCode}`;
      const location = String(raw.location ?? "").trim() || null;
      const eventUrl = String(raw.url ?? "").trim() || null;
      const externalId = `nps-${parkCode}-${String(raw.id ?? title).replace(/\s+/g, "-").slice(0, 60)}`;

      events.push({
        externalId,
        title,
        description,
        startDate,
        endDate,
        isRecurring: false,
        venue: location,
        url: eventUrl,
        category,
      });
    } catch (e) {
      log(`[NPS] Error parsing event from ${parkCode}: ${String(e).slice(0, 80)}`);
    }
  }

  log(`[NPS] ${parkCode}: parsed ${events.length} events from ${json.data.length} raw`);
  return events;
}

// ── ICS parser ────────────────────────────────────────────────────────────────

function unfoldICS(raw: string): string {
  return raw.replace(/\r\n[ \t]/g, "").replace(/\n[ \t]/g, "");
}

function getICSField(lines: string[], name: string): string {
  const prefix = name + ":";
  const prefixParam = name + ";";
  for (const line of lines) {
    if (line.startsWith(prefix)) return line.slice(prefix.length).trim();
    if (line.startsWith(prefixParam)) {
      const colon = line.indexOf(":");
      if (colon !== -1) return line.slice(colon + 1).trim();
    }
  }
  return "";
}

function parseICSDate(raw: string): Date | null {
  if (!raw) return null;
  // Strip TZID= prefix if present
  const val = raw.includes(":") ? raw.split(":").pop()! : raw;
  const clean = val.replace(/[TZ]/g, "").replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1-$2-$3T$4:$5:$6");
  const d = new Date(clean.length === 8 ? `${val.slice(0, 4)}-${val.slice(4, 6)}-${val.slice(6, 8)}T00:00:00` : clean);
  return isNaN(d.getTime()) ? null : d;
}

function decodeICSText(val: string): string {
  return val.replace(/\\n/g, "\n").replace(/\\,/g, ",").replace(/\\;/g, ";").replace(/\\\\/g, "\\");
}

export async function fetchICSEvents(
  source: EventSource,
  log: (msg: string) => void
): Promise<RawEvent[]> {
  let text: string;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT);
    const res = await fetch(source.url, {
      signal: controller.signal,
      headers: { "User-Agent": "HistoryIsForEveryone/1.0 (educational event ingestion; historyisforeveryone.com)" },
    });
    clearTimeout(timer);
    if (!res.ok) {
      log(`[ICS] HTTP ${res.status} for ${source.name}`);
      return [];
    }
    text = await res.text();
  } catch (e) {
    log(`[ICS] Fetch error for ${source.name}: ${String(e).slice(0, 80)}`);
    return [];
  }

  const unfolded = unfoldICS(text);
  const vevents = unfolded.split("BEGIN:VEVENT").slice(1);
  const events: RawEvent[] = [];

  for (const vevent of vevents) {
    try {
      const lines = vevent.split(/\r?\n/);
      const uid = getICSField(lines, "UID");
      const summary = decodeICSText(getICSField(lines, "SUMMARY"));
      const description = decodeICSText(getICSField(lines, "DESCRIPTION"));
      const location = decodeICSText(getICSField(lines, "LOCATION"));
      const urlVal = getICSField(lines, "URL");
      const dtstart = getICSField(lines, "DTSTART");
      const dtend = getICSField(lines, "DTEND");

      if (!summary) continue;

      const startDate = parseICSDate(dtstart);
      if (!startDate) {
        log(`[ICS] Skipping "${summary}" — unparseable DTSTART "${dtstart}"`);
        continue;
      }

      const endDate = parseICSDate(dtend);
      const externalId = `ics-${source.id}-${uid || summary.slice(0, 40).replace(/\s+/g, "-")}`;

      events.push({
        externalId,
        title: summary.slice(0, 200),
        description: truncate(description || summary, 300),
        startDate,
        endDate,
        isRecurring: false,
        venue: location.slice(0, 200) || null,
        url: urlVal || source.url,
        category: "tour",  // ICS sources generally don't specify category; reviewer can adjust
      });
    } catch (e) {
      log(`[ICS] Error parsing VEVENT from ${source.name}: ${String(e).slice(0, 80)}`);
    }
  }

  log(`[ICS] ${source.name}: parsed ${events.length} events from ${vevents.length} raw`);
  return events;
}

// ── Town matching (for NPS multi-town parks) ──────────────────────────────────

export function matchTownFromVenue(venue: string | null, candidateTownNames: Array<{ id: string; name: string }>): string | null {
  if (!venue) return null;
  const lower = venue.toLowerCase();
  for (const t of candidateTownNames) {
    if (lower.includes(t.name.toLowerCase())) return t.id;
  }
  return null;
}

// ── Process one source ────────────────────────────────────────────────────────

export async function processSource(
  source: EventSource,
  townNames: Map<string, string>,
  log: (msg: string) => void
): Promise<SourceResult> {
  const result: SourceResult = {
    sourceId: source.id,
    sourceName: source.name,
    created: 0,
    duped: 0,
    errors: [],
    status: "ok",
  };

  // Resolve candidate towns (primary + extras)
  const candidateTownIds = [
    ...(source.primaryTownId ? [source.primaryTownId] : []),
    ...source.townIds,
  ];
  if (candidateTownIds.length === 0) {
    result.errors.push("No towns configured for this source");
    result.status = "error";
    return result;
  }

  const candidateTownObjs = candidateTownIds
    .map((id) => ({ id, name: townNames.get(id) ?? "" }))
    .filter((t) => t.name);

  // Fetch raw events
  let rawEvents: RawEvent[] = [];
  if (source.type === "nps_api" && source.npsParkCode) {
    rawEvents = await fetchNPSEvents(source.npsParkCode, log);
  } else if (source.type === "ics") {
    rawEvents = await fetchICSEvents(source, log);
  } else {
    log(`[pipeline] Source type "${source.type}" not yet automated — skipping ${source.name}`);
    return { ...result, status: "empty" };
  }

  if (rawEvents.length === 0) {
    result.status = "empty";
    return result;
  }

  const autoPublish = source.trustLevel === "auto_publish";

  for (const raw of rawEvents) {
    try {
      // Determine town for this event
      let townId = candidateTownIds[0];
      if (candidateTownObjs.length > 1) {
        const matched = matchTownFromVenue(raw.venue, candidateTownObjs);
        if (matched) townId = matched;
      }

      // Dedup: skip if we already have this externalId from this source
      const existing = await prisma.localEvent.findFirst({
        where: { sourceId: source.id, externalId: raw.externalId },
        select: { id: true },
      });
      if (existing) {
        result.duped++;
        continue;
      }

      // Build recurrence fields
      const recurrence = raw.isRecurring ? "annual" : "one_time";
      const month = raw.month ?? (raw.startDate ? raw.startDate.getMonth() + 1 : null);
      const day = raw.day ?? (raw.startDate ? raw.startDate.getDate() : null);

      await prisma.localEvent.create({
        data: {
          townId,
          name: raw.title,
          description: raw.description,
          category: raw.category,
          recurrence,
          month: raw.isRecurring ? month : null,
          day: raw.isRecurring ? day : null,
          eventDate: raw.isRecurring ? null : raw.startDate,
          eventEndDate: raw.endDate,
          venue: raw.venue,
          url: raw.url,
          published: autoPublish,
          needsReview: !autoPublish,
          sourceId: source.id,
          externalId: raw.externalId,
          confidence: autoPublish ? "verified" : "unverified",
        },
      });
      result.created++;
    } catch (e) {
      const msg = `Error saving "${raw.title}": ${String(e).slice(0, 80)}`;
      result.errors.push(msg);
      log(`[pipeline] ${msg}`);
    }
  }

  return result;
}

// ── Expire old one-time events ─────────────────────────────────────────────────

export async function expireOldEvents(log: (msg: string) => void): Promise<number> {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(23, 59, 59);

  const result = await prisma.localEvent.updateMany({
    where: {
      recurrence: "one_time",
      published: true,
      eventDate: { lt: yesterday },
    },
    data: { published: false },
  });

  if (result.count > 0) log(`[expire] Unpublished ${result.count} past one-time events`);
  return result.count;
}
