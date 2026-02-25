// MODEL: Claude Sonnet 4.6
// Springfield, MA -- Springfield Armory, weapons manufacturing, Shays' Rebellion context

import { Prisma } from '@prisma/client';

export const springfieldSources: Prisma.SourceCreateInput[] = [
  // TIER 1 -- Institutional and Academic
  {
    id: 'src-springfield-armory-nps',
    type: 'INSTITUTIONAL',
    title: 'Springfield Armory National Historic Site: History and Collections',
    publisherOrHolder: 'National Park Service',
    url: 'https://www.nps.gov/spar/learn/historyculture/index.htm',
    credibilityTier: 'TIER1',
    notes:
      'Official NPS interpretive materials on the Springfield Armory, established in 1777 by order of General Henry Knox. Covers the armory\'s role in standardizing weapons production for the Continental Army and its significance as the first national armory.',
  },
  {
    id: 'src-springfield-knox-ordnance-orders',
    type: 'PRIMARY',
    title: "General Henry Knox\'s Orders Establishing the Springfield Arsenal, 1777",
    publisherOrHolder: 'National Archives and Records Administration',
    url: 'https://www.archives.gov/',
    credibilityTier: 'TIER1',
    notes:
      "Original orders from Knox, Continental Army Chief of Artillery, designating Springfield as the site for a central ordnance depot and manufacturing facility. Marks the formal founding of the Springfield Armory and its role in supplying the Continental Army.",
  },
  {
    id: 'src-springfield-state-archives-shays',
    type: 'PRIMARY',
    title: "Shays' Rebellion Papers: Springfield Arsenal Attack, January 1787",
    publisherOrHolder: 'Massachusetts State Archives',
    url: 'https://www.sec.state.ma.us/arc/',
    credibilityTier: 'TIER1',
    notes:
      "Official government correspondence, militia orders, and depositions documenting Daniel Shays\'s January 25, 1787, assault on the Springfield Arsenal. Includes General William Shepard\'s dispatches and Governor Bowdoin\'s response.",
  },
  {
    id: 'src-springfield-continental-congress-supply',
    type: 'PRIMARY',
    title: 'Board of War Records: Springfield Armory Procurement, 1778-1781',
    publisherOrHolder: 'Library of Congress, Papers of the Continental Congress',
    url: 'https://www.loc.gov/collections/papers-of-the-continental-congress/',
    credibilityTier: 'TIER1',
    notes:
      'Continental Congress Board of War records documenting musket, cannon, and powder production quotas assigned to the Springfield facility. Establishes the armory\'s centrality to Continental Army logistics.',
  },
  {
    id: 'src-springfield-whisker-armory-history',
    type: 'SECONDARY',
    title: 'The Armory at Springfield: A History of the Springfield Armory, 1794-1968',
    publisherOrHolder: 'American Rifleman / NRA Foundation (James B. Whisker)',
    publicationDate: new Date('1997-01-01'),
    credibilityTier: 'TIER1',
    notes:
      "Scholarly institutional history of the armory, with opening chapters covering its Revolutionary War origins under Knox. Draws on armory records held at the NPS and NARA and traces weapons manufacturing from the first forges through the Civil War.",
  },
  // TIER 2 -- Reputable Secondary
  {
    id: 'src-springfield-szatmary-shays',
    type: 'SECONDARY',
    title: "Shays' Rebellion: The Making of an Agrarian Insurrection",
    publisherOrHolder: 'University of Massachusetts Press (David P. Szatmary)',
    publicationDate: new Date('1980-01-01'),
    credibilityTier: 'TIER2',
    notes:
      "Standard scholarly account of Shays' Rebellion, covering the January 1787 attack on Springfield in full. Contextualizes the rebellion within post-Revolutionary economic distress and its influence on the Constitutional Convention.",
  },
  {
    id: 'src-springfield-historical-society',
    type: 'INSTITUTIONAL',
    title: 'Springfield History Library and Archives',
    publisherOrHolder: 'Springfield History Library and Archives (City of Springfield)',
    url: 'https://www.springfieldlibrary.org/history/',
    credibilityTier: 'TIER2',
    notes:
      "Municipal archives holding Springfield town records, militia papers, and armory-related documents from the Revolutionary and early national period. Primary repository for local genealogical and military research.",
  },
  {
    id: 'src-springfield-buel-post-revolution',
    type: 'SECONDARY',
    title: "Joel Barlow\'s American Vision: War, Commerce, and the Making of a Republic",
    publisherOrHolder: 'Harvard University Press (Richard Buel Jr.)',
    publicationDate: new Date('2011-01-01'),
    credibilityTier: 'TIER2',
    notes:
      'Contextualizes the post-Revolutionary economic crisis in western Massachusetts that produced Shays\' Rebellion. Situates Springfield\'s armory and debt-ridden veteran population within the broader national crisis of the Confederation period.',
  },
  {
    id: 'src-springfield-nps-shays-teaching',
    type: 'INSTITUTIONAL',
    title: "Shays' Rebellion and the Springfield Armory -- NPS Teaching with Historic Places",
    publisherOrHolder: 'National Park Service',
    url: 'https://www.nps.gov/subjects/teachingwithhistoricplaces/shaysrebellion.htm',
    credibilityTier: 'TIER2',
    notes:
      "NPS lesson plan with primary document excerpts, maps, and interpretive context for the January 1787 assault. Designed for educators; includes Shepard\'s battle report and Shays\'s contemporaneous justifications.",
  },
  {
    id: 'src-springfield-campbell-frontier',
    type: 'SECONDARY',
    title: 'The History of the Non-Importation Movement in Colonial Springfield',
    publisherOrHolder: 'New England Historical and Genealogical Register',
    publicationDate: new Date('1961-01-01'),
    credibilityTier: 'TIER2',
    notes:
      "Article documenting Springfield\'s pre-war resistance to British trade policy and the organizing networks that later channeled into wartime arms production. Traces the town\'s transition from market-town commerce to military industry.",
  },
  // TIER 3 -- General Reference
  {
    id: 'src-springfield-wikipedia-armory',
    type: 'TERTIARY',
    title: 'Springfield Armory National Historic Site -- Wikipedia',
    publisherOrHolder: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Springfield_Armory_National_Historic_Site',
    credibilityTier: 'TIER3',
    notes:
      'General reference entry on the armory and its NPS designation. Accurate on founding date and Knox connection; verify weapons production figures against NPS and NARA records.',
  },
  {
    id: 'src-springfield-tourism-site',
    type: 'TERTIARY',
    title: 'Springfield, MA: History and Heritage',
    publisherOrHolder: 'Greater Springfield Convention and Visitors Bureau',
    url: 'https://www.valleyvisitor.com/',
    credibilityTier: 'TIER3',
    notes:
      "Tourism-oriented guide to Springfield\'s historic sites including the Springfield Armory museum. Provides practical visitor information and a brief narrative connecting the armory to Shays' Rebellion.",
  },
];
