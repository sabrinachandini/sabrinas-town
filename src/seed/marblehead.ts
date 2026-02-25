// MODEL: Claude Sonnet
// Marblehead micro-rollout seed data — events for hub viability

import { Prisma } from '@prisma/client';

export const marbleheadEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-marblehead-delaware-crossing',
    town: { connect: { id: 'us-ma-marblehead' } },
    name: 'Delaware River Crossing',
    startDate: new Date('1776-12-25'),
    datePrecision: 'DAY',
    summary:
      'On Christmas night 1776, fishermen and sailors from Colonel John Glover\'s 14th Continental Regiment rowed Washington\'s army across the ice-choked Delaware River. The crossing enabled the surprise attack on Trenton the following morning, a turning point in the war. The Marblehead men\'s experience navigating rough water and managing boats in darkness proved essential — most Continental soldiers had no comparable seamanship.',
    significanceWeight: 95,
    lat: 42.5001,
    lng: -70.8578,
  },
  {
    id: 'event-marblehead-long-island-evacuation',
    town: { connect: { id: 'us-ma-marblehead' } },
    name: 'Long Island Evacuation',
    startDate: new Date('1776-08-29'),
    datePrecision: 'DAY',
    summary:
      'After the disastrous Battle of Long Island, Glover\'s Marblehead regiment rowed approximately 9,000 Continental troops across the East River to Manhattan under cover of darkness and fog. The operation prevented the capture or destruction of Washington\'s army. Without the Marblehead sailors\' ability to manage boats in tidal currents at night, the evacuation would likely have failed.',
    significanceWeight: 90,
    lat: 42.5001,
    lng: -70.8578,
  },
  {
    id: 'event-marblehead-glovers-regiment',
    town: { connect: { id: 'us-ma-marblehead' } },
    name: 'Formation of Glover\'s Regiment',
    startDate: new Date('1775-06-01'),
    datePrecision: 'MONTH',
    summary:
      'John Glover organized a regiment of Marblehead fishermen and sailors into the 21st Massachusetts (later the 14th Continental Regiment). The unit was unusual in several respects: its members were experienced mariners rather than farmers, it included both Black and white soldiers, and its discipline reflected the hierarchies of commercial fishing crews. The regiment served throughout the war in roles that exploited its maritime skills.',
    significanceWeight: 75,
    lat: 42.5001,
    lng: -70.8578,
  },
  {
    id: 'event-marblehead-smallpox-epidemic',
    town: { connect: { id: 'us-ma-marblehead' } },
    name: 'Smallpox Inoculation Controversy',
    startDate: new Date('1773-01-01'),
    datePrecision: 'YEAR',
    summary:
      'A smallpox inoculation hospital on Cat Island in Marblehead Harbor provoked violent opposition from residents who feared the disease would spread to the mainland. Townspeople destroyed the facility. The episode illustrates the tensions within colonial communities on the eve of revolution — public health, property rights, and collective decision-making were contested before independence became the central question.',
    significanceWeight: 55,
    lat: 42.5001,
    lng: -70.8578,
  },
];
