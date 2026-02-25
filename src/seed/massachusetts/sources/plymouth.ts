// MODEL: Claude Sonnet 4.6
// Plymouth, MA -- Pilgrim-to-patriot transition, militia joined siege of Boston

import { Prisma } from '@prisma/client';

export const plymouthSources: Prisma.SourceCreateInput[] = [
  // TIER 1 -- Institutional and Academic
  {
    id: 'src-plymouth-forefathers-monument-docs',
    type: 'PRIMARY',
    title: 'Plymouth Town Records and Proprietors Minutes, 1774-1776',
    publisherOrHolder: 'Plymouth County Registry of Deeds and Massachusetts State Archives',
    url: 'https://www.sec.state.ma.us/arc/',
    credibilityTier: 'TIER1',
    notes:
      "Original town meeting votes authorizing militia formation, supply of the army at Cambridge, and the appointment of Plymouth\'s Committee of Correspondence. Primary record of the town\'s political mobilization.",
  },
  {
    id: 'src-plymouth-muster-rolls-siege-boston',
    type: 'PRIMARY',
    title: 'Plymouth County Militia Muster Rolls: Siege of Boston, 1775-1776',
    publisherOrHolder: 'Massachusetts State Archives',
    url: 'https://www.sec.state.ma.us/arc/',
    credibilityTier: 'TIER1',
    notes:
      'Muster rolls documenting Plymouth County companies that marched to Cambridge after the Lexington alarm and participated in the siege of Boston. Lists names, ranks, and dates of service.',
  },
  {
    id: 'src-plymouth-nps-site',
    type: 'INSTITUTIONAL',
    title: 'Plymouth Colony and the American Revolution: National Monument to the Forefathers',
    publisherOrHolder: 'National Park Service',
    url: 'https://www.nps.gov/nr/travel/american_revolution/nationalmonumenttotheforefathers.html',
    credibilityTier: 'TIER1',
    notes:
      "NPS documentation on how Plymouth\'s Pilgrim heritage was invoked as ideological foundation for Revolutionary resistance. Includes references to Thomas Paine\'s and John Adams\'s use of the Mayflower Compact as precedent for self-government.",
  },
  {
    id: 'src-plymouth-deane-history',
    type: 'SECONDARY',
    title: 'History of Scituate, Massachusetts, from Its First Settlement to 1831',
    publisherOrHolder: 'James Loring (Samuel Deane)',
    publicationDate: new Date('1831-01-01'),
    credibilityTier: 'TIER1',
    notes:
      "Early nineteenth-century county history drawing on town records and interviews with survivors. Covers Plymouth County\'s military and political mobilization with detail unavailable in later compilations.",
  },
  {
    id: 'src-plymouth-mayo-adams-works',
    type: 'PRIMARY',
    title: 'The Works of John Adams, Vol. II: Diary and Autobiography',
    publisherOrHolder: 'Little, Brown and Company (Charles Francis Adams, ed.)',
    publicationDate: new Date('1850-01-01'),
    credibilityTier: 'TIER1',
    notes:
      "Adams\'s diary references to Plymouth\'s significance in grounding Revolutionary ideology in the Pilgrim compact tradition. Direct primary source for the intellectual link between Plymouth\'s founding and the Patriot cause.",
  },
  // TIER 2 -- Reputable Secondary
  {
    id: 'src-plymouth-langdon-history',
    type: 'SECONDARY',
    title: 'History of the Colony of New Plymouth in Massachusetts (2 vols.)',
    publisherOrHolder: 'Houghton Mifflin (George D. Langdon Jr.)',
    publicationDate: new Date('1966-01-01'),
    credibilityTier: 'TIER2',
    notes:
      "Scholarly history tracing Plymouth\'s civic institutions from the Mayflower Compact through the American Revolution. Analyzes how town meeting governance adapted from Pilgrim precedents to Patriot resistance.",
  },
  {
    id: 'src-plymouth-historical-society',
    type: 'INSTITUTIONAL',
    title: 'Pilgrim Hall Museum: Revolution-Era Collections',
    publisherOrHolder: 'Pilgrim Hall Museum',
    url: 'https://www.pilgrimhall.org/',
    credibilityTier: 'TIER2',
    notes:
      "Holdings include artifacts and documents tracing the Pilgrim-to-Patriot continuity. The museum\'s research library retains Plymouth family papers and militia records from the 1770s.",
  },
  {
    id: 'src-plymouth-shurtleff-records',
    type: 'PRIMARY',
    title: 'Records of the Colony of New Plymouth in New England (12 vols.)',
    publisherOrHolder: 'William White (Nathaniel Shurtleff, ed.)',
    publicationDate: new Date('1855-01-01'),
    credibilityTier: 'TIER2',
    notes:
      "Published transcription of Plymouth Colony court records and town meeting votes. While primarily covering the colonial period, the editorial apparatus traces institutional continuities into the Revolutionary generation.",
  },
  {
    id: 'src-plymouth-thacher-history',
    type: 'SECONDARY',
    title: 'History of the Town of Plymouth, from Its First Settlement in 1620, to the Present Time',
    publisherOrHolder: 'Marsh, Capen and Lyon (James Thacher)',
    publicationDate: new Date('1835-01-01'),
    credibilityTier: 'TIER2',
    notes:
      "Nineteenth-century narrative history incorporating oral testimony from Revolutionary-era survivors. Thacher, a Continental Army surgeon, provides contemporary medical and military perspectives.",
  },
  {
    id: 'src-plymouth-siege-boston-secondary',
    type: 'SECONDARY',
    title: 'The Siege of Boston',
    publisherOrHolder: 'Macmillan (Allen French)',
    publicationDate: new Date('1911-01-01'),
    credibilityTier: 'TIER2',
    notes:
      "Comprehensive account of the eleven-month siege. Documents the arrival of Plymouth County militia companies at Cambridge and their integration into the Continental Army\'s investment of the city.",
  },
  // TIER 3 -- General Reference
  {
    id: 'src-plymouth-wikipedia-revolution',
    type: 'TERTIARY',
    title: 'Plymouth, Massachusetts -- Wikipedia (American Revolution section)',
    publisherOrHolder: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Plymouth,_Massachusetts#American_Revolution',
    credibilityTier: 'TIER3',
    notes:
      "General reference overview of Plymouth in the Revolution. Useful for orientation but thin on militia specifics; cross-reference with muster rolls and Thacher for names and dates.",
  },
  {
    id: 'src-plymouth-visit-tourism',
    type: 'TERTIARY',
    title: 'Visit Plymouth: Revolutionary War History',
    publisherOrHolder: 'Destination Plymouth',
    url: 'https://www.seeplymouth.com/',
    credibilityTier: 'TIER3',
    notes:
      "Tourism-oriented guide to Plymouth\'s historic sites including Plymouth Rock, Burial Hill, and the Courthouse. Identifies walking-tour stops relevant to the Revolutionary period.",
  },
];
