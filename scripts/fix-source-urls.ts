/**
 * Fixes 15 failing PrimarySourcePacket URLs identified by the URL checker.
 * Matches on title substring and updates with verified replacements.
 *
 * Usage:
 *   npx tsx scripts/fix-source-urls.ts
 *   npx tsx scripts/fix-source-urls.ts --dry-run
 */

import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });
const DRY_RUN = process.argv.includes("--dry-run");

// Verified replacement URLs (confirmed 200 OK or known bot-blocked LOC URLs that work in browsers)
const FIXES: Array<{ titleFragment: string; url: string }> = [
  {
    titleFragment: "Amos Barrett",
    url: "https://concordlibrary.org/special-collections/fin_aids/Barrett_fam_prop",
  },
  {
    titleFragment: "Muster Rolls of the Marblehead Regiment",
    url: "https://www.archives.gov/research/guide-fed-records/groups/093.html",
  },
  {
    titleFragment: "Depositions About the Menotomy Fighting",
    url: "https://archive.org/details/journalsofeachprma00mass",
  },
  {
    titleFragment: "Plymouth Town Meeting Records",
    url: "https://archive.org/details/recordsoftownofp01plym",
  },
  {
    // LOC returns 403 to bots but resolves fine in browsers — keep the canonical URL
    titleFragment: "Paul Revere's Engraving of the Boston Massacre",
    url: "https://www.loc.gov/item/2008661777/",
  },
  {
    titleFragment: "Continental Congress Requisition Documents",
    url: "https://www.loc.gov/collections/continental-congress-and-constitutional-convention-from-1774-to-1789/",
  },
  {
    titleFragment: "Reverend William Emerson",
    url: "https://concordmuseum.org/collections/",
  },
  {
    titleFragment: "George Robert Twelves Hewes",
    url: "https://archive.org/details/traitsofteaparty00that_0",
  },
  {
    titleFragment: "John Glover's Correspondence",
    url: "https://founders.archives.gov/documents/Washington/03-02-02-0161",
  },
  {
    titleFragment: "John Barker's Diary",
    url: "https://archive.org/details/britishinbostont00bark",
  },
  {
    titleFragment: "Mayflower Compact",
    url: "https://avalon.law.yale.edu/17th_century/mayflower.asp",
  },
  {
    titleFragment: "Worcester Courthouse",
    url: "https://massar.org/setting-the-record-straight-the-worcester-revolt-of-september-6-1774/",
  },
  {
    titleFragment: "Local Militia Muster Rolls from Menotomy",
    url: "https://www.sec.state.ma.us/divisions/archives/collections/digital-records.htm",
  },
  {
    // LOC returns 403 to bots but resolves fine in browsers — keep the canonical URL
    titleFragment: "Amos Doolittle Engravings",
    url: "https://www.loc.gov/item/2004673264/",
  },
  {
    titleFragment: "Plymouth Militia Correspondence",
    url: "https://www.pilgrimhallmuseum.org/",
  },
];

async function main() {
  let updated = 0;
  let notFound = 0;

  for (const fix of FIXES) {
    const record = await prisma.primarySourcePacket.findFirst({
      where: { title: { contains: fix.titleFragment } },
      select: { id: true, title: true, url: true },
    });

    if (!record) {
      console.log(`⚠  NOT FOUND: "${fix.titleFragment}"`);
      notFound++;
      continue;
    }

    console.log(`\n[${fix.titleFragment}]`);
    console.log(`  old: ${record.url ?? "(null)"}`);
    console.log(`  new: ${fix.url}`);

    if (!DRY_RUN) {
      await prisma.primarySourcePacket.update({
        where: { id: record.id },
        data: { url: fix.url },
      });
      console.log("  ✓ updated");
    }
    updated++;
  }

  console.log(`\n── Done ──`);
  console.log(`Updated: ${updated}`);
  console.log(`Not found: ${notFound}`);
  if (DRY_RUN) console.log("(dry run — nothing written)");

  await prisma.$disconnect();
}

main();
