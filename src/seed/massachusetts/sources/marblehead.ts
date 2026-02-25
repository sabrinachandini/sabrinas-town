// MODEL: Claude Sonnet 4.6
// Marblehead, MA -- Glover\'s Regiment, rowed Washington across Delaware, evacuated army from Long Island

import { Prisma } from '@prisma/client';

export const marbleheadSources: Prisma.SourceCreateInput[] = [
  // TIER 1 -- Institutional and Academic
  {
    id: 'src-marblehead-glover-orderly-books',
    type: 'PRIMARY',
    title: "Colonel John Glover\'s Orderly Books, 1775-1777",
    publisherOrHolder: 'Massachusetts Historical Society',
    url: 'https://www.masshist.org/',
    credibilityTier: 'TIER1',
    notes:
      "Manuscript orderly books maintained by Glover\'s regimental headquarters, documenting troop dispositions, marching orders, and unit strength during the Long Island evacuation and Trenton crossing. Critical primary record for Glover\'s Marbleheaders.",
  },
  {
    id: 'src-marblehead-washington-crossing-orders',
    type: 'PRIMARY',
    title: "General Washington\'s Orders to Colonel Glover, December 25-26, 1776",
    publisherOrHolder: 'Library of Congress, George Washington Papers',
    url: 'https://www.loc.gov/collections/george-washington-papers/',
    credibilityTier: 'TIER1',
    notes:
      "Washington\'s operational orders directing Glover\'s regiment to transport the Continental Army across the Delaware River on Christmas night 1776. Digitized at the Library of Congress.",
  },
  {
    id: 'src-marblehead-ward-glover-biography',
    type: 'SECONDARY',
    title: 'General John Glover and His Marblehead Mariners',
    publisherOrHolder: 'Henry Holt and Company (George Athan Billias)',
    publicationDate: new Date('1960-01-01'),
    credibilityTier: 'TIER1',
    notes:
      "The definitive scholarly biography of Glover, drawing extensively on manuscript sources. Covers the regiment\'s formation from Marblehead fishermen, the Long Island retreat, the Trenton crossing, and later campaigns.",
  },
  {
    id: 'src-marblehead-nps-valley-forge',
    type: 'INSTITUTIONAL',
    title: "Glover\'s Regiment at Valley Forge: Interpretive Panel Series",
    publisherOrHolder: 'National Park Service, Valley Forge NHP',
    url: 'https://www.nps.gov/vafo/learn/historyculture/index.htm',
    credibilityTier: 'TIER1',
    notes:
      "NPS materials documenting the Marblehead regiment\'s winter encampment and continued service after Trenton. Contextualizes Glover\'s men within the broader Continental Army structure.",
  },
  {
    id: 'src-marblehead-state-archives-muster-rolls',
    type: 'PRIMARY',
    title: "Massachusetts Muster Rolls: Glover\'s 14th Continental Regiment, 1775-1777",
    publisherOrHolder: 'Massachusetts State Archives',
    url: 'https://www.sec.state.ma.us/arc/',
    credibilityTier: 'TIER1',
    notes:
      "Original muster rolls listing Marblehead men who enlisted in the 14th Continental Regiment. Records include name, trade, term of enlistment, and casualty status. Essential for prosopographic study of the regiment.",
  },
  // TIER 2 -- Reputable Secondary
  {
    id: 'src-marblehead-chidsey-trenton',
    type: 'SECONDARY',
    title: 'The Battle of Trenton',
    publisherOrHolder: 'Crown Publishers (Donald Barr Chidsey)',
    publicationDate: new Date('1975-01-01'),
    credibilityTier: 'TIER2',
    notes:
      "Narrative account of the Trenton campaign with substantial coverage of Glover\'s regiment\'s role in ferrying the army across the ice-choked Delaware. Accessible secondary source with solid bibliography.",
  },
  {
    id: 'src-marblehead-historical-society',
    type: 'INSTITUTIONAL',
    title: 'Marblehead Museum Collections: Revolutionary War',
    publisherOrHolder: 'Marblehead Museum and Historical Society',
    url: 'https://www.marbleheadmuseum.org/',
    credibilityTier: 'TIER2',
    notes:
      "Repository of Glover family papers, maritime artifacts, and town records from the Revolutionary period. The museum\'s research library holds material on Marblehead\'s fishing and merchant community during the war.",
  },
  {
    id: 'src-marblehead-fischer-washington-crossing',
    type: 'SECONDARY',
    title: "Washington\'s Crossing",
    publisherOrHolder: 'Oxford University Press (David Hackett Fischer)',
    publicationDate: new Date('2004-01-01'),
    credibilityTier: 'TIER2',
    notes:
      "Pulitzer Prize-winning account of the Trenton-Princeton campaign. Contains detailed analysis of Glover\'s mariners and their pivotal role in the Delaware crossing, drawing on manuscript sources and archaeology.",
  },
  {
    id: 'src-marblehead-chandler-long-island',
    type: 'SECONDARY',
    title: "The Battle of Long Island and Washington\'s Retreat",
    publisherOrHolder: 'Journal of the American Revolution',
    url: 'https://allthingsliberty.com/2016/08/battle-long-island/',
    credibilityTier: 'TIER2',
    notes:
      "Scholarly article covering the August 1776 evacuation of Brooklyn, in which Glover\'s regiment of Marblehead fishermen rowed the Continental Army to Manhattan under cover of darkness and fog.",
  },
  {
    id: 'src-marblehead-privateering-letters',
    type: 'PRIMARY',
    title: 'Marblehead Privateering Letters and Prize Records, 1776-1782',
    publisherOrHolder: 'Peabody Essex Museum, Phillips Library',
    credibilityTier: 'TIER2',
    notes:
      "Manuscript collection of letters and court records related to Marblehead-based privateers. Complements the regiment\'s story by documenting the town\'s parallel maritime war effort at sea.",
  },
  // TIER 3 -- General Reference
  {
    id: 'src-marblehead-wikipedia-glovers-regiment',
    type: 'TERTIARY',
    title: "Glover\'s Regiment (14th Continental Infantry) -- Wikipedia",
    publisherOrHolder: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Glover%27s_Marblehead_Regiment',
    credibilityTier: 'TIER3',
    notes:
      "General reference overview of the regiment\'s organization and major engagements. Useful starting point; verify specific claims against Billias\'s biography and primary muster rolls.",
  },
  {
    id: 'src-marblehead-visit-marblehead',
    type: 'TERTIARY',
    title: 'Marblehead: Colonial and Revolutionary History -- Marblehead Chamber of Commerce',
    publisherOrHolder: 'Marblehead Chamber of Commerce',
    url: 'https://visitmarblehead.com/',
    credibilityTier: 'TIER3',
    notes:
      "Tourism-oriented site guide to Marblehead\'s historic district, including Abbot Hall, the Old Town House, and Fort Sewall. Good for orienting to the physical geography of the town\'s Revolutionary-era landscape.",
  },
];
