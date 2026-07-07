/**
 * Vercel Cron — daily event ingestion.
 * Schedule: "0 7 * * *" (every day at 7am UTC, set in vercel.json)
 *
 * For each active EventSource:
 *   1. Fetch events from NPS API or ICS feed
 *   2. Normalize, dedupe, and save with correct trust-level flags
 *   3. Expire past one-time events
 *   4. Log results to IngestionRun
 */

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { processSource, expireOldEvents } from "@/lib/event-ingestion";

export const maxDuration = 300;
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (secret && req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const lines: string[] = [];
  const log = (msg: string) => {
    console.log(msg);
    lines.push(msg);
  };

  const run = await prisma.ingestionRun.create({
    data: { status: "running" },
  });

  let totalCreated = 0;
  let totalDuped = 0;
  let totalExpired = 0;
  let sourcesChecked = 0;
  const errors: Array<{ sourceId: string; sourceName: string; message: string }> = [];

  try {
    // Load all active sources
    const sources = await prisma.eventSource.findMany({
      where: { active: true },
    });
    log(`[event-ingestion] ${sources.length} active source(s)`);

    // Build a town name lookup for venue-to-town matching
    const towns = await prisma.town.findMany({ select: { id: true, name: true } });
    const townNames = new Map(towns.map((t) => [t.id, t.name]));

    for (const source of sources) {
      log(`\n── ${source.name} (${source.type}, ${source.trustLevel}) ──`);
      sourcesChecked++;

      const result = await processSource(source, townNames, log);
      totalCreated += result.created;
      totalDuped += result.duped;
      errors.push(...result.errors.map((m) => ({ sourceId: source.id, sourceName: source.name, message: m })));

      // Update source's last-fetch metadata
      await prisma.eventSource.update({
        where: { id: source.id },
        data: {
          lastFetchAt: new Date(),
          lastStatus: result.errors.length > 0 ? `error: ${result.errors[0].slice(0, 80)}` : result.status,
          lastEventCount: result.created,
        },
      });

      log(`[${source.name}] created=${result.created} duped=${result.duped} errors=${result.errors.length}`);
    }

    // Expire past one-time events
    totalExpired = await expireOldEvents(log);

    // Finalize run
    await prisma.ingestionRun.update({
      where: { id: run.id },
      data: {
        completedAt: new Date(),
        status: "completed",
        sourcesChecked,
        eventsCreated: totalCreated,
        eventsDuped: totalDuped,
        eventsExpired: totalExpired,
        errors: errors.length > 0 ? errors : undefined,
        log: lines.join("\n"),
      },
    });

    return NextResponse.json({
      runId: run.id,
      sourcesChecked,
      eventsCreated: totalCreated,
      eventsDuped: totalDuped,
      eventsExpired: totalExpired,
      errors: errors.length,
    });

  } catch (e) {
    const msg = String(e);
    log(`[event-ingestion] Fatal error: ${msg}`);
    await prisma.ingestionRun.update({
      where: { id: run.id },
      data: {
        completedAt: new Date(),
        status: "failed",
        sourcesChecked,
        eventsCreated: totalCreated,
        errors: [{ message: msg }],
        log: lines.join("\n"),
      },
    });
    return NextResponse.json({ error: msg, runId: run.id }, { status: 500 });
  }
}
