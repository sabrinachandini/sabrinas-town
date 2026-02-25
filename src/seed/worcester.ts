// MODEL: Claude Sonnet
// Worcester micro-rollout seed data — events for hub viability

import { Prisma } from '@prisma/client';

export const worcesterEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-worcester-court-closure',
    town: { connect: { id: 'us-ma-worcester' } },
    name: 'Worcester Court Closure',
    startDate: new Date('1774-09-06'),
    datePrecision: 'DAY',
    summary:
      'Approximately 4,700 armed citizens from Worcester and surrounding towns assembled on the common and forced the closure of the royal courts. Crown-appointed Judge Timothy Paine was compelled to resign his commission and read his recantation publicly. The action was one of the largest organized acts of resistance before Lexington and demonstrated that royal authority had collapsed in interior Massachusetts months before shots were fired.',
    significanceWeight: 90,
    lat: 42.2626,
    lng: -71.8023,
  },
  {
    id: 'event-worcester-american-political-society',
    town: { connect: { id: 'us-ma-worcester' } },
    name: 'Formation of the American Political Society',
    startDate: new Date('1773-01-01'),
    datePrecision: 'YEAR',
    summary:
      'Worcester patriots organized the American Political Society, one of the earliest formal political organizations dedicated to colonial resistance. The society coordinated opposition to the Massachusetts Government Act, organized militia training, and maintained correspondence with similar groups across the colony. Its structure reflected the deliberate, organized nature of Worcester\'s resistance.',
    significanceWeight: 70,
    lat: 42.2626,
    lng: -71.8023,
  },
  {
    id: 'event-worcester-militia-lexington-alarm',
    town: { connect: { id: 'us-ma-worcester' } },
    name: 'Worcester Militia Response to Lexington Alarm',
    startDate: new Date('1775-04-19'),
    datePrecision: 'DAY',
    summary:
      'When express riders carried news of the fighting at Lexington and Concord westward, Worcester militia companies mobilized and began the 40-mile march east. The town had been preparing for armed conflict since the court closings of the previous September. Worcester men joined the siege forces around Boston and continued to supply troops throughout the war.',
    significanceWeight: 65,
    lat: 42.2626,
    lng: -71.8023,
  },
  {
    id: 'event-worcester-declaration-read',
    town: { connect: { id: 'us-ma-worcester' } },
    name: 'Declaration of Independence Read Publicly',
    startDate: new Date('1776-07-24'),
    datePrecision: 'DAY',
    summary:
      'Isaiah Thomas, printer of the Massachusetts Spy newspaper, read the Declaration of Independence from the steps of the South Meeting House in Worcester. Thomas had relocated his press from Boston to Worcester in April 1775 to continue publishing outside British-occupied territory. Worcester was among the first towns in Massachusetts to hear the Declaration read aloud.',
    significanceWeight: 75,
    lat: 42.2626,
    lng: -71.8023,
  },
];
