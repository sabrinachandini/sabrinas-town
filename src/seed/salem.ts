// MODEL: Claude Sonnet
// Salem micro-rollout seed data — events for hub viability

import { Prisma } from '@prisma/client';

export const salemEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-salem-leslie-retreat',
    town: { connect: { id: 'us-ma-salem' } },
    name: 'Leslie\'s Retreat',
    startDate: new Date('1775-02-26'),
    datePrecision: 'DAY',
    summary:
      'Colonel Alexander Leslie led 240 British regulars from Castle Island to Salem to seize militia cannons reportedly stored at the North Bridge. Salem residents raised the drawbridge and confronted the troops at the North River. After a tense standoff, Leslie agreed to withdraw without the cannons. The incident preceded Lexington and Concord by nearly two months and demonstrated that armed confrontation over military stores was becoming unavoidable.',
    significanceWeight: 80,
    lat: 42.5230,
    lng: -70.8950,
  },
  {
    id: 'event-salem-privateering-campaign',
    town: { connect: { id: 'us-ma-salem' } },
    name: 'Salem Privateering Operations Begin',
    startDate: new Date('1775-09-01'),
    datePrecision: 'MONTH',
    summary:
      'Salem ship owners began outfitting merchant vessels as privateers after the Continental Congress authorized letters of marque. Over the course of the war, Salem-based privateers captured more than 450 British vessels, making the town the most productive privateering port in the colonies. The captured goods — munitions, provisions, and trade merchandise — sustained the war effort and enriched the town\'s merchant class.',
    significanceWeight: 85,
    lat: 42.5185,
    lng: -70.8835,
  },
  {
    id: 'event-salem-customs-resistance',
    town: { connect: { id: 'us-ma-salem' } },
    name: 'Resistance to the Customs Commissioners',
    startDate: new Date('1768-01-01'),
    datePrecision: 'YEAR',
    summary:
      'Salem merchants joined broader colonial resistance to the Townshend Acts by organizing boycotts of British goods and harassing customs officials. As one of the busiest ports in Massachusetts, Salem\'s participation in non-importation agreements carried significant economic weight. The resistance reflected the town\'s dependence on maritime trade and its vulnerability to British revenue enforcement.',
    significanceWeight: 65,
    lat: 42.5195,
    lng: -70.8967,
  },
  {
    id: 'event-salem-provisional-capital',
    town: { connect: { id: 'us-ma-salem' } },
    name: 'Salem as Provincial Capital',
    startDate: new Date('1774-06-01'),
    datePrecision: 'MONTH',
    summary:
      'After the passage of the Massachusetts Government Act, General Gage moved the colonial capital from Boston to Salem in an attempt to isolate the legislature from Boston\'s radical politics. The move backfired: Salem residents proved equally hostile to British authority, and the General Court continued to resist imperial directives. The capital returned to Boston later that year.',
    significanceWeight: 75,
    lat: 42.5195,
    lng: -70.8967,
  },
];
