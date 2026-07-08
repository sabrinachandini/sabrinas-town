import { readFileSync } from "fs";
import { PrismaClient } from "@prisma/client";

const env = readFileSync("/Users/sabrinachandini/sabrinas-town/sites/hife/.env.local", "utf-8");
for (const l of env.split("\n")) {
  const m = l.match(/^([^=]+)=(.*)/);
  if (m) process.env[m[1]] = m[2].replace(/^"(.*)"$/, "$1");
}
process.env.DATABASE_URL = (process.env.DATABASE_URL || "")
  .replace(/:5432\//, ":6543/")
  .replace(/(\?|$)/, "?pgbouncer=true&");

const prisma = new PrismaClient({ log: [] });

const FIXES = [
  // NY Constitution 1777 — currently points to nysed.gov (general page); Avalon has full text
  {
    id: "src-king-ny-state-constitution-1777",
    url: "https://avalon.law.yale.edu/18th_century/ny01.asp",
    notes: "Yale Avalon Project — full text of all 42 sections of the Constitution of New York, adopted April 20, 1777. Confirmed live 2026-07-08. Previous URL (nysed.gov/research/constitutions) was a general landing page.",
  },
  // Virginia Declaration of Rights — LVA has a specific educator resource page, confirmed good
  // Already has a URL — update to NARA which is more authoritative
  {
    id: "src-williamsburg-va-virginia-declaration-rights",
    url: "https://www.archives.gov/founding-docs/virginia-declaration-of-rights",
    notes: "National Archives Founding Docs page — all 16 sections, written by George Mason, adopted June 12, 1776. Confirmed live 2026-07-08. More authoritative than previous LVA educator resource URL.",
  },
  // Virginia Gazette — both gazette sources: update to confirmed working CW digital collections URL
  {
    id: "src-williamsburg-va-virginia-gazette-1765-1776",
    url: "https://digitalcollections.colonialwilliamsburg.org/archive/Virginia-Gazettes-2RERYDLEI7ML.html",
    notes: "Colonial Williamsburg Digital Collections — 2,000+ issues of the Virginia Gazette 1736–1780, browsable PDFs. Partnership: CW Rockefeller Library, W&M Swem Library, Library of Virginia. Confirmed live 2026-07-08.",
  },
  {
    id: "src-norfolk-va-virginia-gazette-norfolk-burning",
    url: "https://digitalcollections.colonialwilliamsburg.org/archive/Virginia-Gazettes-2RERYDLEI7ML.html",
    notes: "Colonial Williamsburg Digital Collections — Virginia Gazette 1736–1780. Jan-March 1776 issues (Norfolk burning coverage) included. Confirmed live 2026-07-08.",
  },
  // Jefferson Autobiography — LOC already has a specific item; leave it, but the LOC item URL is better than the Internet Archive scan
  // Already URL: https://www.loc.gov/item/mtjbib025151/ — this is fine, skip

  // Fairfax County Resolves — currently has good LOC item URL; Encyclopedia Virginia is also good but LOC is more authoritative — skip

  // Clark memoir — currently has LOC item URL; leave it
  // src-kaskaskia-clark-memoir url: https://www.loc.gov/item/mm79070887/ — fine

  // Stark report — has retired memory.loc.gov URL; fix to NHHS primary source set
  {
    id: "src-bennington-stark-report",
    url: "https://moose.nhhistory.org/educators/Primary-Source-Sets/Source-Set-John-Stark",
    notes: "NH Historical Society Primary Source Set — includes Stark's Battle of Bennington report to Gen. Schuyler, August 22, 1777, alongside Hancock and Washington letters. Confirmed live 2026-07-08. Previous URL (memory.loc.gov/ammem/amlaw/lwcc.html) is a retired AmMemory page.",
  },
  // Gates Papers — currently points to NYHS digital collections (islandora)
  // src-sar-gates-papers url: https://digitalcollections.nyhistory.org/islandora/object/islandora:120591
  // This may or may not work (was bot-blocked). Leave it.

  // Clinton Papers — currently has Michigan Clements finding aid URL — that's fine
  // src-nyc-british-hq-papers url: https://quod.lib.umich.edu/c/clementsmss/umich-wcl-M-1 — leave it

  // Penobscot — MA Sec of State is a homepage; Massachusetts Archives Digital Repository is better
  {
    id: "src-castine-massachusetts-general-court-records",
    url: "https://digitalarchives.sec.state.ma.us/revolutionary-war/",
    notes: "Massachusetts Archives Digital Repository — Revolutionary War collection including military and legislative records. Confirmed live 2026-07-08. Previous URL (sec.state.ma.us/arc/) was the general archives homepage.",
  },
  // Adams Papers — source-adams-papers — confirmed to exist in DB
  {
    id: "source-adams-papers",
    url: "https://www.masshist.org/digitaladams/archive/",
    notes: "MHS Digital Adams Archive — manuscript images and transcriptions from the Adams Family Papers (John/Abigail correspondence, diary, autobiography). Confirmed live 2026-07-08.",
  },
  // Massachusetts Archives — src-massachusetts-archives
  {
    id: "src-massachusetts-archives",
    url: "https://digitalarchives.sec.state.ma.us/revolutionary-war/",
    notes: "Massachusetts Archives Digital Repository — 18 digitized Revolutionary War documents including Franklin/Adams correspondence, military records, and maps. Confirmed live 2026-07-08.",
  },
];

async function main() {
  let fixed = 0;
  for (const fix of FIXES) {
    try {
      await prisma.source.update({
        where: { id: fix.id },
        data: { url: fix.url, notes: fix.notes },
      });
      console.log(`✓ ${fix.id}`);
      fixed++;
    } catch (e: any) {
      if (e.code === "P2025") {
        console.log(`✗ NOT FOUND: ${fix.id}`);
      } else {
        throw e;
      }
    }
  }
  console.log(`\nDone: ${fixed} sources updated`);
  await prisma.$disconnect();
}
main().catch(console.error);
