/**
 * Vercel Cron endpoint — weekly Wikimedia image enrichment.
 * Runs every Tuesday at 3am UTC (configured in vercel.json).
 * Fetches public-domain images for towns and events missing imageUrl.
 */

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const maxDuration = 300;
export const dynamic = "force-dynamic";

const WIKIMEDIA_HEADERS = {
  "User-Agent": "HistoryIsForEveryone/1.0 (https://sabrinas-town.vercel.app; contact@sabrinas-town.vercel.app) node-fetch/3",
  "Accept": "application/json",
};

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function searchWikimedia(query: string): Promise<{ url: string; credit: string } | null> {
  try {
    const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&srlimit=10&format=json`;
    const res = await fetch(searchUrl, { headers: WIKIMEDIA_HEADERS });
    if (!res.ok) return null;
    const text = await res.text();
    if (!text.startsWith("{")) return null;
    const data = JSON.parse(text) as any;
    const results: any[] = data?.query?.search ?? [];

    for (const result of results) {
      const title: string = result.title as string;
      if (!title.match(/\.(jpg|jpeg|png)$/i)) continue;

      await delay(300);
      const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url|extmetadata&format=json`;
      const infoRes = await fetch(infoUrl, { headers: WIKIMEDIA_HEADERS });
      if (!infoRes.ok) continue;
      const infoText = await infoRes.text();
      if (!infoText.startsWith("{")) continue;
      const infoData = JSON.parse(infoText) as any;
      const pages = infoData?.query?.pages ?? {};
      const page = Object.values(pages)[0] as any;
      const imageInfo = page?.imageinfo?.[0];
      if (!imageInfo?.url) continue;

      const meta = imageInfo.extmetadata ?? {};
      const license: string = (meta.LicenseShortName?.value as string) ?? "";
      const dateStr: string = (meta.DateTimeOriginal?.value as string) ?? (meta.DateTime?.value as string) ?? "";
      const year = parseInt(dateStr.slice(0, 4));

      const licenseLow = license.toLowerCase();
      const isFree = licenseLow.includes("pd") || licenseLow.includes("cc0") || licenseLow.includes("public domain") || licenseLow.includes("cc-pd");
      const isPreCopyright = !isNaN(year) && year < 1928;
      if (!isFree && !isPreCopyright) continue;

      const artist: string = (meta.Artist?.value as string)?.replace(/<[^>]+>/g, "").trim() ?? "Unknown";
      const credit = `${artist}${dateStr ? `, ${dateStr.slice(0, 4)}` : ""}. Wikimedia Commons. ${license || "Public domain"}.`;
      return { url: imageInfo.url, credit };
    }
    return null;
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (secret && req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const towns = await prisma.town.findMany({
    where: { imageUrl: null },
    select: { id: true, name: true, state: true, slug: true },
    take: 12,
  });

  const results: string[] = [];

  for (const town of towns) {
    const queries = [
      `${town.name} ${town.state} Revolutionary War colonial`,
      `${town.name} ${town.state} 1775 1776 historical`,
    ];
    let found: { url: string; credit: string } | null = null;
    for (const q of queries) {
      found = await searchWikimedia(q);
      if (found) break;
      await delay(1000);
    }
    if (!found) { await delay(1000); continue; }

    await prisma.town.update({
      where: { id: town.id },
      data: { imageUrl: found.url, imageCredit: found.credit, lastUpdatedAt: new Date() },
    });
    await prisma.changeLogEntry.create({
      data: {
        townId: town.id,
        category: "SOURCES",
        title: `Added historical image for ${town.name}`,
        summary: `Added a public-domain Wikimedia Commons image to the ${town.name} history page.`,
        details: { source: "Wikimedia Commons", url: found.url },
        publicNotes: found.credit,
      },
    });
    results.push(town.name);
    await delay(2000);
  }

  return NextResponse.json({ updated: results.length, towns: results });
}
