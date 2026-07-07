import { readFileSync } from "fs";
import { resolve } from "path";
const envPath = resolve(process.cwd(), "sites/hife/.env.local");
readFileSync(envPath, "utf8").split("\n").forEach((line) => {
  const eq = line.indexOf("=");
  if (eq < 1) return;
  const key = line.slice(0, eq).trim();
  const val = line.slice(eq + 1).trim().replace(/^"|"$/g, "");
  if (key) process.env[key] = val;
});
import { PrismaClient } from "@prisma/client";
const p = new PrismaClient();

async function main() {
  // 1. Find and remove the fabricated Yorktown capitulation citation
  const yorktown = await p.source.findFirst({
    where: { url: { contains: "archives.gov/milestone-documents/articles-of-capitulation" } },
  });
  if (yorktown) {
    await p.source.update({ where: { id: yorktown.id }, data: { url: null, notes: "URL removed 2026-07-07: fabricated NARA URL (milestone-documents/articles-of-capitulation does not exist). Actual document in NARA RG 360 — no verified link available." } });
    console.log(`✓ Yorktown capitulation — URL cleared, note added: "${yorktown.title}"`);
  } else {
    console.log("⚠ Yorktown capitulation record not found by URL — searching by title");
    const yt2 = await p.source.findFirst({ where: { title: { contains: "Capitulation" } } });
    if (yt2) console.log(`  Found by title: "${yt2.title}" url=${yt2.url}`);
  }

  // 2. Fix Paul Revere "Deposition" — wrong title, wrong date, wrong doc
  const revereDepo = await p.source.findFirst({
    where: { title: { contains: "Deposition" }, publisherOrHolder: { contains: "Massachusetts Historical" } },
  });
  if (revereDepo) {
    await p.source.update({
      where: { id: revereDepo.id },
      data: {
        title: "Paul Revere's Account to Jeremy Belknap (c. 1798)",
        type: "SECONDARY",
        credibilityTier: "TIER2",
        url: "https://www.masshist.org/database/viewer.php?item_id=99",
        notes: "Corrected 2026-07-07: Previously mislabeled 'Deposition, circa 1775'. This is Revere's retrospective letter to Jeremy Belknap written c.1798 — 23 years after the ride. Reclassified SECONDARY/TIER2. For near-contemporaneous depositions see MHS item 667.",
      },
    });
    console.log(`✓ Paul Revere record corrected: "${revereDepo.title}" → "Paul Revere's Account to Jeremy Belknap (c. 1798)"`);
  } else {
    // Try other search
    const revere2 = await p.source.findMany({ where: { title: { contains: "Revere" } }, select: { id: true, title: true, url: true, type: true } });
    console.log("Revere records:", JSON.stringify(revere2.map(r => ({ id: r.id, title: r.title, url: r.url?.slice(0, 60) }))));
  }

  // 3. Fix homepage citations — replace with null url + note
  const homepageFixes = [
    { pattern: "masshist.org", badUrl: "https://www.masshist.org", note: "Homepage URL — needs specific finding aid or catalog link" },
    { pattern: "mountvernon.org", badUrl: "https://www.mountvernon.org", note: "Homepage URL — needs specific collection or document link" },
    { pattern: "archives.gov", badUrl: "https://www.archives.gov", note: "Homepage URL — needs specific RG or catalog link" },
  ];

  // Find sources whose URL IS exactly the homepage (no path or just /)
  const homepageSources = await p.source.findMany({
    where: {
      OR: [
        { url: "https://www.masshist.org" },
        { url: "https://www.masshist.org/" },
        { url: "https://www.mountvernon.org" },
        { url: "https://www.mountvernon.org/" },
        { url: "https://www.archives.gov" },
        { url: "https://www.archives.gov/" },
        { url: "https://njhistory.org" },
        { url: "https://www.njhistory.org" },
        { url: "https://njhistory.org/" },
      ],
    },
  });

  for (const src of homepageSources) {
    await p.source.update({
      where: { id: src.id },
      data: {
        url: null,
        notes: `Homepage URL removed 2026-07-07 — redteam audit found this links to institution front page, not a specific document or finding aid. Title: "${src.title}". Needs correct specific URL.`,
      },
    });
    console.log(`✓ Cleared homepage URL: "${src.title}" (${src.url})`);
  }
  console.log(`\nCleared ${homepageSources.length} homepage citations`);

  // Also find the truncated date one
  const truncated = await p.source.findMany({ where: { title: { contains: "1776-17" } } });
  for (const t of truncated) {
    console.log(`Found truncated-date record: "${t.title}" — needs manual title fix`);
  }
}
main().catch(console.error).finally(() => p.$disconnect());
