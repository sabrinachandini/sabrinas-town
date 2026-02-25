// MODEL: Claude Opus (source selection and notes), Claude Sonnet (data structure)
// Lexington-specific sources beyond those in sources.ts

import { Prisma } from '@prisma/client';

// IDs of sources in sources.ts that should also be linked to Lexington
export const LEXINGTON_SHARED_SOURCE_IDS = [
  'src-nps-minuteman',
  'src-revere-deposition',
  'src-lexington-town-records',
  'src-massachusetts-archives',
  'src-loc-american-memory',
  'src-fischer-revere',
  'src-gross-minutemen',
  'src-lexington-historical-society',
  'src-freedom-trail-foundation',
  'src-wikipedia-lexington',
];

export const lexingtonSources: Prisma.SourceCreateInput[] = [
  // TIER 1 — Institutional and Academic
  {
    id: 'src-lex-clark-diary',
    type: 'PRIMARY',
    title: 'Diary of Reverend Jonas Clark',
    publisherOrHolder: 'Lexington Historical Society',
    credibilityTier: 'TIER1',
    notes: 'Clark hosted John Hancock and Samuel Adams the night of April 18, 1775. His diary records events from inside the parsonage as the alarm was raised. Unpublished manuscript; excerpts cited in Fischer.',
  },
  {
    id: 'src-lex-deposition-collection',
    type: 'PRIMARY',
    title: 'Depositions of Lexington Militia, April 25, 1775',
    publisherOrHolder: 'Massachusetts Provincial Congress',
    credibilityTier: 'TIER1',
    notes: 'Sworn testimony collected six days after the battle from militiamen including Elijah Sanderson, William Munroe, and others. Published to counter the British account of who fired first.',
  },
  {
    id: 'src-lex-coburn-history',
    type: 'SECONDARY',
    title: 'The Battle of April 19, 1775',
    publisherOrHolder: 'Lexington Historical Society (Frank Warren Coburn)',
    publicationDate: new Date('1912-01-01'),
    credibilityTier: 'TIER1',
    notes: 'Early scholarly reconstruction of the Lexington engagement drawing on depositions, town records, and physical evidence. Foundational local history.',
  },
  {
    id: 'src-lex-nps-wayside',
    type: 'INSTITUTIONAL',
    title: 'Battle Road Trail Interpretive Guide',
    publisherOrHolder: 'National Park Service, Minute Man NHP',
    url: 'https://www.nps.gov/mima/planyourvisit/the-battle-road-trail.htm',
    credibilityTier: 'TIER1',
    notes: 'NPS interpretive materials covering the five-mile Battle Road from Lexington to Concord. Includes archaeology-based site descriptions.',
  },
  {
    id: 'src-lex-galvin-minutemen',
    type: 'SECONDARY',
    title: 'The Minute Men: The First Fight — Myths and Realities of the American Revolution',
    publisherOrHolder: 'Brassey\'s (John Galvin)',
    publicationDate: new Date('1989-01-01'),
    credibilityTier: 'TIER1',
    notes: 'Military historian\'s analysis of the militia system. Challenges romanticized accounts by examining actual training, readiness, and command structure at Lexington.',
  },
  // TIER 2 — Reputable Secondary
  {
    id: 'src-lex-brooks-eyewitness',
    type: 'SECONDARY',
    title: 'Lexington Alarm\'d: Eyewitness Accounts of the Events of April 19, 1775',
    publisherOrHolder: 'Lexington Historical Society',
    publicationDate: new Date('2017-01-01'),
    credibilityTier: 'TIER2',
    notes: 'Modern compilation of primary accounts with editorial context. Includes accounts from British as well as colonial perspectives.',
  },
  {
    id: 'src-lex-prince-estabrook',
    type: 'SECONDARY',
    title: 'Prince Estabrook and the Battle of Lexington',
    publisherOrHolder: 'Journal of the American Revolution',
    url: 'https://allthingsliberty.com/2019/04/prince-estabrook/',
    credibilityTier: 'TIER2',
    notes: 'Scholarly article on Prince Estabrook, an enslaved man wounded at Lexington. One of the few documented African American participants in the first engagement. Evidence base is thin but carefully examined.',
  },
  {
    id: 'src-lex-tourtellot',
    type: 'SECONDARY',
    title: 'William Diamond\'s Drum: The Beginning of the War of the American Revolution',
    publisherOrHolder: 'Doubleday (Arthur B. Tourtellot)',
    publicationDate: new Date('1959-01-01'),
    credibilityTier: 'TIER2',
    notes: 'Narrative history focused on the hours leading up to the Lexington engagement. Strong on atmosphere and pacing, draws from depositions and town records.',
  },
  {
    id: 'src-lex-bell-road',
    type: 'SECONDARY',
    title: 'The Road to Concord: How Four Stolen Cannon Ignited the Revolutionary War',
    publisherOrHolder: 'Simon & Schuster (J.L. Bell)',
    publicationDate: new Date('2016-01-01'),
    credibilityTier: 'TIER2',
    notes: 'Modern history connecting the Powder Alarm of 1774 to the march on Lexington and Concord. Valuable for understanding the intelligence and logistics context.',
  },
  {
    id: 'src-lex-munroe-tavern-nhld',
    type: 'INSTITUTIONAL',
    title: 'Munroe Tavern National Historic Landmark Nomination',
    publisherOrHolder: 'National Park Service',
    credibilityTier: 'TIER2',
    notes: 'Historic landmark documentation for the tavern used as British headquarters and field hospital during the retreat from Concord. Architectural and historical analysis.',
  },
  {
    id: 'src-lex-hancockclark-nhld',
    type: 'INSTITUTIONAL',
    title: 'Hancock-Clarke House Historic Structure Report',
    publisherOrHolder: 'Lexington Historical Society',
    credibilityTier: 'TIER2',
    notes: 'Architectural and historical analysis of the parsonage where Hancock and Adams were staying when Revere arrived with the alarm.',
  },
  // TIER 3 — General Reference
  {
    id: 'src-lex-lexington-visitor',
    type: 'TERTIARY',
    title: 'Lexington Visitors Center: Battle Green Walking Tour',
    publisherOrHolder: 'Town of Lexington',
    url: 'https://www.lexingtonma.gov/visitors-center',
    credibilityTier: 'TIER3',
    notes: 'Official town visitor resources. Practical information on site access, hours, and self-guided tour of Battle Green and surrounding sites.',
  },
  {
    id: 'src-lex-boston1775-blog',
    type: 'TERTIARY',
    title: 'Boston 1775 (J.L. Bell)',
    publisherOrHolder: 'J.L. Bell',
    url: 'https://boston1775.blogspot.com/',
    credibilityTier: 'TIER3',
    notes: 'Long-running history blog by a respected independent scholar. Frequently covers Lexington topics with primary source citations. Not peer-reviewed but well-sourced.',
  },
];
