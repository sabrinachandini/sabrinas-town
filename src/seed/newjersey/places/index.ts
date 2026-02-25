/**
 * New Jersey Places - Central Export
 *
 * Aggregates all place seed data for New Jersey towns.
 * Each town file contains historically accurate places with
 * visitor-practical information.
 */

export { morristownPlaces } from './morristown';

// Re-export as a combined array for batch seeding
import { morristownPlaces } from './morristown';

export const allNewJerseyPlaces = [
  ...morristownPlaces,
];

// Town-keyed map for selective seeding
export const newJerseyPlacesByTown = {
  'us-nj-morristown': morristownPlaces,
} as const;
