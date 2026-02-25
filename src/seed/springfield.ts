// MODEL: Claude Sonnet
// Springfield micro-rollout seed data — events for hub viability

import { Prisma } from '@prisma/client';

export const springfieldEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-springfield-armory-established',
    town: { connect: { id: 'us-ma-springfield' } },
    name: 'Continental Armory Established',
    startDate: new Date('1777-01-01'),
    datePrecision: 'YEAR',
    summary:
      'George Washington directed the establishment of a weapons manufactory at Springfield, choosing the site for its distance from the coast and its access to the Connecticut River for transport. The armory began producing muskets, cartridges, and gun carriages for the Continental Army. It became the foundation of American military manufacturing for the next two centuries.',
    significanceWeight: 90,
    lat: 42.1075,
    lng: -72.5825,
  },
  {
    id: 'event-springfield-shays-rebellion',
    town: { connect: { id: 'us-ma-springfield' } },
    name: 'Shays\' Rebellion at the Arsenal',
    startDate: new Date('1787-01-25'),
    datePrecision: 'DAY',
    summary:
      'Approximately 1,500 armed farmers led by Daniel Shays marched on the federal arsenal at Springfield, seeking to seize weapons and prevent debt courts from sitting. State militia under General William Shepard fired cannon into the advancing column, killing four and dispersing the rebels. The uprising demonstrated the weakness of the Articles of Confederation and accelerated calls for the Constitutional Convention.',
    significanceWeight: 85,
    lat: 42.1075,
    lng: -72.5825,
  },
  {
    id: 'event-springfield-knox-supply-route',
    town: { connect: { id: 'us-ma-springfield' } },
    name: 'Springfield as Supply Depot',
    startDate: new Date('1776-01-01'),
    datePrecision: 'YEAR',
    summary:
      'Springfield served as a key supply point on the route between the Connecticut River Valley and the Continental Army. Henry Knox\'s artillery train from Fort Ticonderoga passed through the region in early 1776. Throughout the war, weapons, powder, and provisions moved through Springfield to forces in New England, New York, and New Jersey.',
    significanceWeight: 70,
    lat: 42.1015,
    lng: -72.5898,
  },
  {
    id: 'event-springfield-court-closures',
    town: { connect: { id: 'us-ma-springfield' } },
    name: 'Hampshire County Court Closure',
    startDate: new Date('1774-09-01'),
    datePrecision: 'MONTH',
    summary:
      'Springfield residents joined the wave of court closures across Massachusetts in September 1774. Citizens prevented the Hampshire County courts from sitting under the terms of the Massachusetts Government Act. The action was coordinated with similar closings in Worcester, Plymouth, and other county seats, collectively demonstrating the collapse of royal judicial authority.',
    significanceWeight: 65,
    lat: 42.1015,
    lng: -72.5898,
  },
];
