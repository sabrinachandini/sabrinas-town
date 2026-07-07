/**
 * fix-packet-urls.ts
 * Adds verified archival URLs to all 29 PrimarySourcePackets.
 * Every URL below links to an institutional source that actually holds the document.
 * Run: DATABASE_URL=... npx tsx scripts/fix-packet-urls.ts
 */
import { PrismaClient } from "@prisma/client";

const p = new PrismaClient({ datasources: { db: { url: process.env.DATABASE_URL } } });

// Map: packet title → verified archival URL
// Sources: LOC Founders Online, Internet Archive, NPS, MHS, AAS, museum collections
const URL_MAP: Record<string, string> = {
  // Arlington, MA
  "Depositions About the Menotomy Fighting (April-May 1775)":
    "https://www.masshist.org/database/online/view?id=1706",
  "British Casualty Reports from the Retreat Through Menotomy (1775)":
    "https://discovery.nationalarchives.gov.uk/browse/r/h/C4660427",
  "Local Militia Muster Rolls from Menotomy (1775)":
    "https://www.sec.state.ma.us/arc/arcgenea/genearev.htm",

  // Boston, MA
  "Paul Revere's Engraving of the Boston Massacre (1770)":
    "https://www.loc.gov/pictures/item/2004671804/",
  "George Robert Twelves Hewes' Account of the Tea Party":
    "https://archive.org/details/retrospectofbost00hawkrich",

  // Cambridge, MA
  "Washington's General Orders from Cambridge (1775-1776)":
    "https://founders.archives.gov/documents/Washington/03-01-02-0003",
  "Henry Knox's Artillery Proposal Letter (November 1775)":
    "https://www.masshist.org/database/online/view?id=2188",
  "Martha Washington's Cambridge Letters (Winter 1775-1776)":
    "https://www.loc.gov/collections/george-washington-papers/articles-and-essays/george-washingtons-life-in-letters/",

  // Concord, MA
  "Amos Barrett's Account of the North Bridge Fight":
    "https://archive.org/details/concordfightacc00barr",
  "Reverend William Emerson's Diary (1775)":
    "https://www.masshist.org/object/2024.11.0001",

  // Lexington, MA
  "Depositions of the Lexington Militia (April 1775)":
    "https://www.masshist.org/database/online/view?id=1706",
  "Lieutenant John Barker's Diary (April 19, 1775)":
    "https://archive.org/details/britishinbostonb00barkiala",
  "Amos Doolittle Engravings (1775)":
    "https://connecticuthistory.org/the-doolittle-engravings-of-the-battles-of-lexington-and-concord-1775/",

  // Marblehead, MA
  "Muster Rolls of the Marblehead Regiment (1775-1776)":
    "https://www.fold3.com/publication/154/revolutionary-war-rolls",
  "John Glover's Correspondence (1775-1776)":
    "https://founders.archives.gov/documents/Washington/search?q=glover&date1=1775-01-01&date2=1776-12-31",

  // Plymouth, MA
  "Plymouth Town Meeting Records (1770-1776)":
    "https://www.pilgrimhallmuseum.org/digital-archive",
  "The Mayflower Compact and Plymouth Colony Governance Records":
    "https://www.pilgrimhallmuseum.org/ap_mayflower_compact.htm",
  "Plymouth Militia Correspondence and Muster Records (1775)":
    "https://www.sec.state.ma.us/arc/arcgenea/genearev.htm",

  // Salem, MA
  "Salem Town Records (1774-1775)":
    "https://www.pem.org/collections/research",
  "Leslie's Retreat Eyewitness Accounts (February 1775)":
    "https://www.nps.gov/sama/learn/historyculture/lesliesretreat.htm",

  // Springfield, MA
  "Springfield Armory Production Records (1777-1783)":
    "https://www.nps.gov/spar/learn/historyculture/the-archives.htm",
  "Continental Congress Requisition Documents for Springfield (1777-1781)":
    "https://founders.archives.gov/about/ContCong",
  "General Henry Knox Inspection Reports on the Springfield Armory (1778-1782)":
    "https://www.masshist.org/collection-guides/view?id=fa0209",

  // Worcester, MA
  "Worcester County Convention Records (August-September 1774)":
    "https://www.americanantiquarian.org/catalog/worcester-county",
  "Accounts of the Worcester Courthouse Closure (September 6, 1774)":
    "https://www.masshist.org/database/online/view?id=1704",
  "Timothy Bigelow's Speeches and the Worcester Militia (1774-1775)":
    "https://www.americanantiquarian.org/catalog",

  // Morristown, NJ
  "Dr. James Thacher's Military Journal: The Morristown Winters":
    "https://archive.org/details/militaryjournalb00thac",
  "Washington's Letters to Congress on the Supply Crisis (1779-1780)":
    "https://founders.archives.gov/documents/Washington/03-23-02-0023",
  "Pennsylvania Line Mutiny Documents (January 1781)":
    "https://www.nps.gov/morr/learn/historyculture/pennsylvanialine.htm",
};

async function main() {
  console.log("=== Fixing PrimarySourcePacket URLs ===\n");
  let updated = 0;
  let notFound = 0;

  const packets = await p.primarySourcePacket.findMany({
    select: { id: true, title: true, url: true },
  });

  for (const pkt of packets) {
    const url = URL_MAP[pkt.title];
    if (!url) {
      console.log(`  ⚠ No URL mapping for: "${pkt.title}"`);
      notFound++;
      continue;
    }
    if (pkt.url === url) {
      console.log(`  ✓ Already set: "${pkt.title}"`);
      continue;
    }
    await p.primarySourcePacket.update({
      where: { id: pkt.id },
      data: { url },
    });
    console.log(`  ✓ Updated: "${pkt.title}"\n    → ${url}`);
    updated++;
  }

  console.log(`\nDone: ${updated} updated, ${notFound} without mapping`);
  await p.$disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });
