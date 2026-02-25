/**
 * Massachusetts Places - Central Export
 *
 * Aggregates all place seed data for Massachusetts towns.
 * Each town file contains historically accurate places with
 * visitor-practical information.
 */

export { lexingtonPlaces } from './lexington';
export { concordPlaces } from './concord';
export { bostonPlaces } from './boston';
export { cambridgePlaces } from './cambridge';
export { arlingtonPlaces } from './arlington';
export { salemPlaces } from './salem';
export { marbleheadPlaces } from './marblehead';

// Re-export as a combined array for batch seeding
import { lexingtonPlaces } from './lexington';
import { concordPlaces } from './concord';
import { bostonPlaces } from './boston';
import { cambridgePlaces } from './cambridge';
import { arlingtonPlaces } from './arlington';
import { salemPlaces } from './salem';
import { marbleheadPlaces } from './marblehead';

export const allMassachusettsPlaces = [
  ...lexingtonPlaces,
  ...concordPlaces,
  ...bostonPlaces,
  ...cambridgePlaces,
  ...arlingtonPlaces,
  ...salemPlaces,
  ...marbleheadPlaces,
];

// Town-keyed map for selective seeding
export const massachusettsPlacesByTown = {
  'us-ma-lexington': lexingtonPlaces,
  'us-ma-concord': concordPlaces,
  'us-ma-boston': bostonPlaces,
  'us-ma-cambridge': cambridgePlaces,
  'us-ma-arlington': arlingtonPlaces,
  'us-ma-salem': salemPlaces,
  'us-ma-marblehead': marbleheadPlaces,
} as const;
