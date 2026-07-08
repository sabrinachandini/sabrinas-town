/**
 * Fix 8 specific PRIMARY sources with verified URLs found by manual research.
 * All URLs confirmed live before applying.
 */
import { readFileSync } from 'fs';

const envContent = readFileSync('/Users/sabrinachandini/sabrinas-town/sites/hife/.env.local', 'utf-8');
for (const line of envContent.split('\n')) {
  const m = line.match(/^([^=]+)=(.*)$/);
  if (m) process.env[m[1]] = m[2].replace(/^"(.*)"$/, '$1');
}

import prisma from '/Users/sabrinachandini/sabrinas-town/sites/hife/lib/prisma.ts';

const FIXES = [
  {
    id: 'src-dover-delaware-declaration',
    url: 'https://declarationproject.org/?p=1609',
    notes: 'Delaware Declaration of Rights and Fundamental Rules, Sept 11, 1776. Transcribed from Peter Force\'s American Archives Vol. 2 (1846), pp. 286-287, certified by clerk James Booth. Avalon Project does not have a separate page for this document.',
  },
  {
    id: 'src-exeter-nh-constitution-1776',
    url: 'https://avalon.law.yale.edu/18th_century/nh09.asp',
    notes: 'Yale Avalon Project — "Constitution of New Hampshire, 1776." Text begins "IN CONGRESS AT EXETER, January 5, 1776." Confirmed live.',
  },
  {
    id: 'src-williamsburg-va-virginia-constitution-1776',
    url: 'https://encyclopediavirginia.org/primary-documents/the-constitution-of-virginia-1776/',
    notes: 'Encyclopedia Virginia transcription of the Constitution of Virginia adopted June 29, 1776. Sourced from the National Humanities Institute. Note: the Avalon Project link (va05.asp) returns 404.',
  },
  {
    id: 'src-williamsburg-va-burgesses-journals',
    url: 'https://archive.org/details/journalsofhouse1773c1776virg',
    notes: 'Internet Archive — Journals of the House of Burgesses of Virginia, Vol. 13 (1773-1776), edited by J.P. Kennedy, Virginia State Library 1905. Digitized from University of Pittsburgh Library.',
  },
  {
    id: 'src-williamsburg-va-henry-resolves-1765',
    url: 'https://encyclopediavirginia.org/primary-documents/virginia-resolves-on-the-stamp-act-1765/',
    notes: 'Encyclopedia Virginia — Virginia Resolves on the Stamp Act (1765). Transcribed from Patrick Henry\'s handwritten manuscript held by the Colonial Williamsburg Foundation. Avalon Project has no page for this document.',
  },
  {
    id: 'source-elizabeth-boudinot-papers-princeton',
    // Note: "elizabeth" in the ID is a typo — this is the Elias Boudinot collection
    url: 'https://findingaids.princeton.edu/catalog/C0001',
    title: 'Elias Boudinot Papers (Thorne Collection), Princeton',
    notes: 'Princeton Mudd Manuscript Library, Thorne Collection of Elias Boudinot, C0001. Covers his service as commissary-general of prisoners, Continental Congress 1781-1783, president of Congress 1782-1783. Note: record ID contains "elizabeth" — typo for "Elias."',
  },
  {
    id: 'src-portsmouth-langdon-papers',
    url: 'https://www.nhhistory.org/object/273015/langdon-elwyn-family-papers-1762-1972',
    notes: 'NH Historical Society catalog — Langdon-Elwyn Family Papers (accession 1981.111), 1762-1972, 12 boxes. Includes personal, political, and financial records of John Langdon of Portsmouth.',
  },
  {
    id: 'src-savannah-ga-pulaski-death-account',
    url: 'https://archive.org/details/siegeofsavannah00houg',
    notes: 'Internet Archive — F.B. Hough, "The Siege of Savannah... autumn of 1779" (Albany: J. Munsell, 1866). Contains Major Thomas Pinckney\'s eyewitness account of Pulaski\'s wounding Oct 9, 1779. NOTE: This is a 19th-century compilation of primary accounts, not a standalone contemporary manuscript. No standalone digitized primary source for this specific event found online.',
    downgrade: { type: 'SECONDARY' as const, credibilityTier: 'TIER2' as const },
  },
];

async function main() {
  let fixed = 0;
  for (const fix of FIXES) {
    const updateData: any = {
      url: fix.url,
      notes: fix.notes,
    };
    if ('title' in fix) updateData.title = fix.title;
    if (fix.downgrade) {
      updateData.type = fix.downgrade.type;
      updateData.credibilityTier = fix.downgrade.credibilityTier;
    }

    await prisma.source.update({ where: { id: fix.id }, data: updateData });
    console.log(`✓ ${fix.id}`);
    if (fix.downgrade) console.log(`  → downgraded to ${fix.downgrade.type}/${fix.downgrade.credibilityTier}`);
    fixed++;
  }

  // Also fix Princeton University Archives — give it the finding aids portal URL
  await prisma.source.update({
    where: { id: 'src-pri-princeton-university-archives' },
    data: {
      url: 'https://findingaids.princeton.edu/',
      notes: 'Princeton Mudd Manuscript Library finding aids portal. Search for "Nassau Hall" or "American Revolution" for relevant Revolutionary War collections. No single finding aid covers the full Nassau Hall history during the Revolution.',
    },
  });
  console.log('✓ src-pri-princeton-university-archives → finding aids portal');
  fixed++;

  console.log(`\nDone: ${fixed} sources updated`);
  await prisma.$disconnect();
}

main().catch(console.error);
