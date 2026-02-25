// MODEL: Claude Sonnet
// Plymouth micro-rollout seed data — events for hub viability

import { Prisma } from '@prisma/client';

export const plymouthEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-plymouth-militia-march',
    town: { connect: { id: 'us-ma-plymouth' } },
    name: 'Plymouth Militia March to Boston',
    startDate: new Date('1775-04-20'),
    datePrecision: 'DAY',
    summary:
      'Within a day of the battles at Lexington and Concord, Plymouth militia companies began marching toward Boston to join the siege. The response was immediate and broadly supported across the town. Plymouth men served in the siege forces that surrounded the British garrison through the winter of 1775-1776.',
    significanceWeight: 70,
    lat: 41.9584,
    lng: -70.6673,
  },
  {
    id: 'event-plymouth-court-closure',
    town: { connect: { id: 'us-ma-plymouth' } },
    name: 'Plymouth County Court Closure',
    startDate: new Date('1774-09-01'),
    datePrecision: 'MONTH',
    summary:
      'Plymouth County residents participated in the wave of court closures that swept Massachusetts in September 1774. Citizens prevented the royal courts from sitting, effectively nullifying British judicial authority in the county. The closures were coordinated with similar actions in Worcester, Springfield, and other county seats.',
    significanceWeight: 65,
    lat: 41.9584,
    lng: -70.6673,
  },
  {
    id: 'event-plymouth-liberty-pole',
    town: { connect: { id: 'us-ma-plymouth' } },
    name: 'Liberty Pole Erected',
    startDate: new Date('1774-01-01'),
    datePrecision: 'YEAR',
    summary:
      'Plymouth residents erected a liberty pole as a visible symbol of resistance to British authority. Liberty poles were a common form of political expression across the colonies, drawing on English radical traditions. The pole served as a gathering point for public demonstrations and a marker of the town\'s patriot sympathies.',
    significanceWeight: 50,
    lat: 41.9584,
    lng: -70.6673,
  },
  {
    id: 'event-plymouth-rock-rededication',
    town: { connect: { id: 'us-ma-plymouth' } },
    name: 'Plymouth Rock Invoked as Symbol of Liberty',
    startDate: new Date('1774-12-01'),
    datePrecision: 'YEAR',
    summary:
      'During the political crisis of 1774, Plymouth Rock gained new significance as a symbol of self-governance. Patriots drew a direct line from the Mayflower Compact — the Pilgrims\' agreement to govern themselves — to the colonial resistance against Parliament. An attempt to move the rock reportedly split it in two, which some colonists interpreted as a symbol of the divide between Britain and America.',
    significanceWeight: 55,
    lat: 41.9584,
    lng: -70.6673,
  },
];
