// MODEL: Claude Sonnet 4.6
// Worcester, MA -- shut down royal courts before Lexington, early organized resistance

import { Prisma } from '@prisma/client';

export const worcesterSources: Prisma.SourceCreateInput[] = [
  // TIER 1 -- Institutional and Academic
  {
    id: 'src-worcester-court-closure-proceedings',
    type: 'PRIMARY',
    title: 'Worcester County Court of Common Pleas: Closure Proceedings, September 6, 1774',
    publisherOrHolder: 'Massachusetts State Archives',
    url: 'https://www.sec.state.ma.us/arc/',
    credibilityTier: 'TIER1',
    notes:
      'Primary record of the Worcester County court closure, in which approximately 4,622 militiamen forced royal judges to walk a gauntlet and renounce their commissions. Took place six months before Lexington--the most dramatic extralegal assertion of self-governance in pre-war Massachusetts.',
  },
  {
    id: 'src-worcester-committee-correspondence-minutes',
    type: 'PRIMARY',
    title: 'Worcester Committee of Correspondence Minutes, 1773-1775',
    publisherOrHolder: 'American Antiquarian Society',
    url: 'https://www.americanantiquarian.org/',
    credibilityTier: 'TIER1',
    notes:
      "Manuscript minutes of Worcester\'s Committee of Correspondence recording votes to resist the Coercive Acts, communicate with other towns, and mobilize the county militia. Foundational record of organized extralegal governance.",
  },
  {
    id: 'src-worcester-american-antiquarian-society',
    type: 'INSTITUTIONAL',
    title: 'American Antiquarian Society: Worcester County Revolutionary War Collections',
    publisherOrHolder: 'American Antiquarian Society',
    url: 'https://www.americanantiquarian.org/collections/revolutionary-war',
    credibilityTier: 'TIER1',
    notes:
      'The AAS, founded in Worcester in 1812, holds the largest collection of Revolutionary-era newspapers, broadsides, and pamphlets in the country. Essential institutional repository for Worcester County history.',
  },
  {
    id: 'src-worcester-continental-congress-resolves',
    type: 'PRIMARY',
    title: 'Worcester County Resolves, August 1774',
    publisherOrHolder: 'Massachusetts Provincial Congress',
    credibilityTier: 'TIER1',
    notes:
      'The Worcester County Resolves, adopted in August 1774, declared the Coercive Acts unconstitutional, called for an end to obedience to royal courts, and established a parallel county government. Predates and informs the Suffolk Resolves.',
  },
  {
    id: 'src-worcester-brooke-heart-of-commonwealth',
    type: 'SECONDARY',
    title: 'The Heart of the Commonwealth: Society and Political Culture in Worcester County, Massachusetts, 1713-1861',
    publisherOrHolder: 'Cambridge University Press (John L. Brooke)',
    publicationDate: new Date('1989-01-01'),
    credibilityTier: 'TIER1',
    notes:
      "Prizewinning social and political history grounding Worcester County\'s Revolutionary radicalism in its economic structure and democratic political culture. Contains the most thorough scholarly treatment of the 1774 court closure.",
  },
  // TIER 2 -- Reputable Secondary
  {
    id: 'src-worcester-nps-revolution-resources',
    type: 'INSTITUTIONAL',
    title: 'American Revolution: Worcester County Resistance -- NPS Teaching with Historic Places',
    publisherOrHolder: 'National Park Service',
    url: 'https://www.nps.gov/subjects/teachingwithhistoricplaces/worcester.htm',
    credibilityTier: 'TIER2',
    notes:
      "NPS lesson plan and interpretive materials on Worcester\'s role as a center of pre-Lexington resistance. Designed for educators; draws on primary sources from the AAS and state archives.",
  },
  {
    id: 'src-worcester-nutt-history',
    type: 'SECONDARY',
    title: 'History of Worcester County, Massachusetts (2 vols.)',
    publisherOrHolder: 'Lewis Historical Publishing Company (Charles Nutt, ed.)',
    publicationDate: new Date('1922-01-01'),
    credibilityTier: 'TIER2',
    notes:
      'County history incorporating biographical sketches of Revolutionary-era figures and town-by-town accounts of militia mobilization. Useful for identifying local leaders and tracing family connections.',
  },
  {
    id: 'src-worcester-historical-museum',
    type: 'INSTITUTIONAL',
    title: 'Worcester Historical Museum: Revolution-Era Collections',
    publisherOrHolder: 'Worcester Historical Museum',
    url: 'https://www.worcesterhistory.net/',
    credibilityTier: 'TIER2',
    notes:
      "Holdings include militia equipment, Committee of Correspondence documents, and artifacts from the 1774 court closure. The museum\'s research library is the primary local repository for city history.",
  },
  {
    id: 'src-worcester-bell-powder-alarm',
    type: 'SECONDARY',
    title: 'The Powder Alarm: Worcester County and the Road to Revolution',
    publisherOrHolder: 'Journal of the American Revolution',
    url: 'https://allthingsliberty.com/2014/09/powder-alarm-1774/',
    credibilityTier: 'TIER2',
    notes:
      'Scholarly article on the September 1774 Powder Alarm, in which false reports of British troops attacking Worcester triggered mobilization of thousands of militiamen across the county. Establishes the interconnection between the Powder Alarm and the court closure.',
  },
  {
    id: 'src-worcester-stiles-provincial-congress',
    type: 'SECONDARY',
    title: 'The Massachusetts Provincial Congress: Worcester County Delegates and Their Instructions',
    publisherOrHolder: 'New England Quarterly',
    publicationDate: new Date('1948-01-01'),
    credibilityTier: 'TIER2',
    notes:
      "Academic journal article tracing Worcester County\'s delegation to the provincial congresses and the instructions they carried from town meetings. Documents the county\'s disproportionate influence on the path to independence.",
  },
  // TIER 3 -- General Reference
  {
    id: 'src-worcester-wikipedia-revolution',
    type: 'TERTIARY',
    title: 'Worcester, Massachusetts -- Wikipedia (American Revolution section)',
    publisherOrHolder: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Worcester,_Massachusetts#American_Revolution',
    credibilityTier: 'TIER3',
    notes:
      "General reference overview of Worcester\'s Revolutionary history. The court-closure section is reasonably accurate; verify dates and participant numbers against the AAS manuscript records.",
  },
  {
    id: 'src-worcester-mass-moments',
    type: 'TERTIARY',
    title: 'Worcester Closes the Courts: Massachusetts Moments',
    publisherOrHolder: 'WGBH Educational Foundation / MassHumanities',
    url: 'https://www.massmoments.org/',
    credibilityTier: 'TIER3',
    notes:
      "Short educational narrative on the September 6, 1774, court closure event. Written for a general audience; good for introductory context. Links to primary sources held at the AAS.",
  },
];
