// MODEL: Claude Sonnet
// Linked towns seed data - stub records for towns connected to Lexington

import { Prisma } from '@prisma/client';

/**
 * Minimal town stubs for towns linked to Lexington.
 * These will be fully populated when each town gets its vertical slice.
 */
export const linkedTownStubs: Prisma.TownCreateInput[] = [
  {
    id: 'us-ma-concord',
    name: 'Concord',
    state: 'MA',
    country: 'USA',
    slug: 'concord-ma',
    lat: 42.4604,
    lng: -71.3489,
    heroSummary40: 'The shot heard round the world',
    execSummary150:
      "Where the American Revolution's first battle continued after Lexington, and where the British retreat began at North Bridge.",
    whyMatters:
      'TODO: Full content pending. Concord was the destination of the British expedition that sparked the Revolution. The battle at North Bridge marked the first time colonial militia successfully repulsed British regulars.',
    compositeScore: 0,
    tourismInfo: {
      placeholder: true,
      npsDesignation: true,
    },
  },
  {
    id: 'us-ma-boston',
    name: 'Boston',
    state: 'MA',
    country: 'USA',
    slug: 'boston-ma',
    lat: 42.3601,
    lng: -71.0589,
    heroSummary40: 'Cradle of liberty',
    execSummary150:
      'The epicenter of colonial resistance—from the Massacre to the Tea Party to the siege that drove the British out.',
    whyMatters:
      'TODO: Full content pending. Boston was ground zero for the events leading to revolution. The city endured occupation, siege, and transformation from a colonial port to the heart of American independence.',
    compositeScore: 0,
    tourismInfo: {
      placeholder: true,
      walkabilityScore: 95,
      publicTransitAccess: true,
    },
  },
  {
    id: 'us-ma-cambridge',
    name: 'Cambridge',
    state: 'MA',
    country: 'USA',
    slug: 'cambridge-ma',
    lat: 42.3736,
    lng: -71.1097,
    heroSummary40: "Washington's first headquarters",
    execSummary150:
      "Where George Washington took command of the Continental Army and Harvard became a barracks and hospital.",
    whyMatters:
      "TODO: Full content pending. Cambridge served as Continental Army headquarters during the Siege of Boston. Washington's assumption of command under the Washington Elm marked the birth of the American military tradition.",
    compositeScore: 0,
    tourismInfo: {
      placeholder: true,
    },
  },
  {
    id: 'us-ma-arlington',
    name: 'Arlington (Menotomy)',
    state: 'MA',
    country: 'USA',
    slug: 'arlington-ma',
    lat: 42.4154,
    lng: -71.1565,
    heroSummary40: 'Bloodiest fighting of April 19',
    execSummary150:
      "Then called Menotomy, this town saw the most intense combat of the British retreat—and the story of Samuel Whittemore, America's oldest combatant.",
    whyMatters:
      "TODO: Full content pending. The fighting in Menotomy (renamed Arlington in 1867) was the deadliest of April 19, 1775. It was also home to Samuel Whittemore, who at 80 years old engaged British soldiers and survived being shot and bayoneted.",
    compositeScore: 0,
    tourismInfo: {
      placeholder: true,
    },
  },
  {
    id: 'us-pa-philadelphia',
    name: 'Philadelphia',
    state: 'PA',
    country: 'USA',
    slug: 'philadelphia-pa',
    lat: 39.9526,
    lng: -75.1652,
    heroSummary40: 'Birthplace of a nation',
    execSummary150:
      "Where independence was declared, the Constitution written, and the new nation's government first convened.",
    whyMatters:
      'TODO: Full content pending. Philadelphia was the political heart of the Revolution—home to the Continental Congress, the Declaration of Independence, and later the Constitutional Convention.',
    compositeScore: 0,
    tourismInfo: {
      placeholder: true,
      npsDesignation: true,
      walkabilityScore: 85,
    },
  },
  {
    id: 'us-ny-saratoga',
    name: 'Saratoga',
    state: 'NY',
    country: 'USA',
    slug: 'saratoga-ny',
    lat: 43.0834,
    lng: -73.7846,
    heroSummary40: 'The turning point',
    execSummary150:
      'The 1777 American victory that convinced France to enter the war and transformed a colonial rebellion into an international conflict.',
    whyMatters:
      "TODO: Full content pending. The American victory at Saratoga in October 1777 was the Revolution's turning point. It proved the Continental Army could defeat British regulars in a major campaign and brought France into the war as an ally.",
    compositeScore: 0,
    tourismInfo: {
      placeholder: true,
      npsDesignation: true,
    },
  },
];

/**
 * Town links from Lexington to other towns with explicit reasons.
 * These demonstrate the interconnected nature of the network.
 */
export const lexingtonLinks: Array<{
  toTownId: string;
  linkType: 'SHARED_EVENT' | 'SHARED_PERSON' | 'SHARED_THEME' | 'ROUTE' | 'COMPARISON' | 'GEOGRAPHIC_PROXIMITY' | 'OTHER';
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-ma-concord',
    linkType: 'SHARED_EVENT',
    reason:
      "The battles of April 19, 1775 began in Lexington and continued in Concord. The two towns' fates are intertwined—the British march passed through Lexington to reach Concord, and the retreat returned the same way.",
    weight: 95,
  },
  {
    toTownId: 'us-ma-boston',
    linkType: 'ROUTE',
    reason:
      "Paul Revere's midnight ride began in Boston and warned Lexington of the approaching British. The British expedition launched from Boston, and the siege of Boston followed the events of April 19.",
    weight: 90,
  },
  {
    toTownId: 'us-ma-cambridge',
    linkType: 'SHARED_PERSON',
    reason:
      "Many Lexington militiamen joined the siege of Boston, camping around Cambridge. The Continental Army that formed there included survivors of Lexington Green. Washington's first army was built from these same citizen soldiers.",
    weight: 75,
  },
  {
    toTownId: 'us-ma-arlington',
    linkType: 'SHARED_EVENT',
    reason:
      "Lexington's militia joined the fighting during the British retreat through Menotomy (Arlington). The two communities shared the terror and triumph of April 19, with Menotomy seeing the bloodiest combat.",
    weight: 80,
  },
  {
    toTownId: 'us-pa-philadelphia',
    linkType: 'SHARED_THEME',
    reason:
      "News of Lexington electrified the Continental Congress meeting in Philadelphia. The 'shot heard round the world' transformed debate into action—Lexington's sacrifice provided the moral impetus for independence.",
    weight: 70,
  },
  {
    toTownId: 'us-ny-saratoga',
    linkType: 'COMPARISON',
    reason:
      'Lexington began the war; Saratoga turned it. Compare the opening engagement of April 1775 with the decisive campaign of October 1777 to understand how the Revolution evolved from spontaneous resistance to strategic warfare.',
    weight: 65,
  },
];
