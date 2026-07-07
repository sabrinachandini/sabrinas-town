// Update source packet URLs with verified working links
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

// All verified: 200/202/403(bot-blocked but works in browser)
const UPDATES: Array<{ title: string; url: string | null }> = [
  {
    title: "Depositions of the Lexington Militia",
    url: "https://www.masshist.org/database/viewer.php?pid=2&old=1&mode=nav&ft=Coming+of+the+American+Revolution&item_id=667",
  },
  {
    title: "George Robert Twelves Hewes",
    url: "https://archive.org/details/retrospectofbost00hawk",
  },
  {
    title: "Salem Town Records",
    url: null, // not digitized
  },
  {
    title: "Reverend William Emerson",
    url: null, // restricted to institutional HathiTrust users
  },
  {
    title: "Henry Knox's Artillery Proposal",
    url: "https://founders.archives.gov/documents/Washington/03-02-02-0351",
  },
  {
    title: "Muster Rolls of the Marblehead",
    url: "https://www.archives.gov/research/guide-fed-records/groups/093.html",
  },
  {
    title: "Plymouth Town Meeting Records",
    url: null, // Vol. 3 not on archive.org; HathiTrust may be restricted
  },
  {
    title: "Mayflower Compact",
    url: "https://archive.org/details/bradfordshisto00brad",
  },
  {
    title: "Worcester County Convention Records",
    url: "https://archive.org/details/journalsofeachprma00mass",
  },
  {
    title: "Timothy Bigelow",
    url: null, // no digitized text found
  },
  {
    title: "Lieutenant John Barker",
    url: "https://archive.org/details/JohnBarkerDiary-TheBritishInBoston1774-1776",
  },
  {
    title: "Amos Barrett",
    url: null, // 1924 pamphlet, not digitized online
  },
  {
    title: "Leslie's Retreat",
    url: "https://archive.org/details/accountofleslies00endi",
  },
  {
    title: "Pennsylvania Line Mutiny",
    url: "https://www.loc.gov/item/mgw426673/",
  },
  {
    title: "James Thacher",
    url: "https://archive.org/details/jamesthachermil00revorich",
  },
  {
    title: "Springfield Armory Production",
    url: null, // NARA RG 93, not digitized
  },
  {
    title: "Depositions About the Menotomy",
    url: "https://www.masshist.org/database/viewer.php?item_id=627&mode=dual&img_step=1&pid=2",
  },
  {
    title: "Accounts of the Worcester Courthouse",
    url: "https://archive.org/details/journalsofeachprma00mass",
  },
  {
    title: "John Glover's Correspondence",
    url: "https://founders.archives.gov/documents/Washington/03-02-02-0090",
  },
  // Corrections to existing "working" URLs:
  {
    title: "Paul Revere's Engraving of the Boston Massacre",
    url: "https://www.loc.gov/item/2008680173/",
  },
  {
    title: "Washington's General Orders from Cambridge",
    url: "https://founders.archives.gov/documents/Washington/03-01-02-0027",
  },
  {
    title: "General Henry Knox Inspection Reports",
    url: "https://www.masshist.org/collection-guides/view?id=fa0313",
  },
  {
    title: "Washington's Letters to Congress on the Supply",
    url: "https://founders.archives.gov/documents/Washington/03-23-02-0474",
  },
  // Dead MA Archives URLs — replace with active search interface
  {
    title: "Local Militia Muster Rolls from Menotomy",
    url: "https://www.sec.state.ma.us/ArchivesSearch/RevolutionarySearch.aspx",
  },
  {
    title: "Plymouth Militia Correspondence",
    url: "https://www.sec.state.ma.us/ArchivesSearch/RevolutionarySearch.aspx",
  },
  // Continental Congress — founders doesn't cover ContCong fully
  {
    title: "Continental Congress Requisition Documents",
    url: "https://www.archives.gov/research/guide-fed-records/groups/360.html",
  },
  // British casualty reports — National Archives URL unverifiable without login
  {
    title: "British Casualty Reports from the Retreat",
    url: null,
  },
];

async function main() {
  let updated = 0;
  let notFound = 0;

  for (const fix of UPDATES) {
    const records = await p.primarySourcePacket.findMany({
      where: { title: { contains: fix.title } },
      select: { id: true, title: true, url: true },
    });

    if (records.length === 0) {
      console.log(`⚠  not found: "${fix.title}"`);
      notFound++;
      continue;
    }

    for (const rec of records) {
      await p.primarySourcePacket.update({
        where: { id: rec.id },
        data: { url: fix.url },
      });
      const indicator = fix.url ? "✓" : "○ (no url)";
      console.log(`${indicator} ${rec.title?.slice(0, 60)}`);
      updated++;
    }
  }

  console.log(`\nDone. Updated ${updated} records. ${notFound} not found.`);

  // Final tally
  const withUrl = await p.primarySourcePacket.count({ where: { url: { not: null } } });
  const total = await p.primarySourcePacket.count();
  console.log(`Final: ${withUrl}/${total} packets have a URL`);
}
main().catch(console.error).finally(() => p.$disconnect());
