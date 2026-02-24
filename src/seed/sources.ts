// MODEL: Claude Sonnet
// Source seed data

import { Prisma } from '@prisma/client';

export const sources: Prisma.SourceCreateInput[] = [
  // TIER 1 - Primary and Institutional
  {
    id: 'src-nps-minuteman',
    type: 'INSTITUTIONAL',
    title: 'Minute Man National Historical Park Official Site',
    publisherOrHolder: 'National Park Service',
    url: 'https://www.nps.gov/mima/index.htm',
    credibilityTier: 'TIER1',
    notes: 'Official NPS resource for Lexington and Concord battle sites.',
  },
  {
    id: 'src-revere-deposition',
    type: 'PRIMARY',
    title: "Paul Revere's Deposition, circa 1775",
    publisherOrHolder: 'Massachusetts Historical Society',
    url: 'https://www.masshist.org/database/viewer.php?item_id=99',
    credibilityTier: 'TIER1',
    notes: "Revere's own account of his midnight ride, written shortly after the events.",
  },
  {
    id: 'src-lexington-town-records',
    type: 'PRIMARY',
    title: 'Lexington Town Records, 1774-1776',
    publisherOrHolder: 'Lexington Historical Society',
    url: null,
    credibilityTier: 'TIER1',
    notes:
      'Original town meeting records documenting preparations for conflict. Physical archive. TODO: digitization status.',
  },
  {
    id: 'src-massachusetts-archives',
    type: 'PRIMARY',
    title: 'Massachusetts Archives Collection',
    publisherOrHolder: 'Massachusetts State Archives',
    url: 'https://www.sec.state.ma.us/arc/',
    credibilityTier: 'TIER1',
    notes: 'State archive containing Revolutionary-era government documents.',
  },
  {
    id: 'src-loc-american-memory',
    type: 'DATASET',
    title: 'American Memory: American Revolution and Its Era',
    publisherOrHolder: 'Library of Congress',
    url: 'https://memory.loc.gov/ammem/collections/continental/',
    credibilityTier: 'TIER1',
    notes: 'Digitized primary sources from the Continental Congress and Constitutional Convention.',
  },
  // TIER 2 - Reputable Secondary
  {
    id: 'src-fischer-revere',
    type: 'SECONDARY',
    title: "Paul Revere's Ride",
    publisherOrHolder: 'Oxford University Press (David Hackett Fischer)',
    publicationDate: new Date('1994-01-01'),
    credibilityTier: 'TIER2',
    notes:
      'Pulitzer Prize-winning historian. Definitive modern account of the events of April 18-19, 1775.',
  },
  {
    id: 'src-gross-minutemen',
    type: 'SECONDARY',
    title: 'The Minutemen and Their World',
    publisherOrHolder: 'Hill and Wang (Robert A. Gross)',
    publicationDate: new Date('1976-01-01'),
    credibilityTier: 'TIER2',
    notes: 'Award-winning social history of Concord before, during, and after the Revolution.',
  },
  {
    id: 'src-lexington-historical-society',
    type: 'INSTITUTIONAL',
    title: 'Lexington Historical Society Collections',
    publisherOrHolder: 'Lexington Historical Society',
    url: 'https://lexingtonhistory.org',
    credibilityTier: 'TIER2',
    notes: 'Local historical society with extensive collections and research resources.',
  },
  {
    id: 'src-freedom-trail-foundation',
    type: 'INSTITUTIONAL',
    title: 'Freedom Trail Foundation Resources',
    publisherOrHolder: 'Freedom Trail Foundation',
    url: 'https://www.thefreedomtrail.org/',
    credibilityTier: 'TIER2',
    notes: 'Educational resources connecting Boston-area Revolutionary sites.',
  },
  // TIER 3 / TODO - General reference
  {
    id: 'src-wikipedia-lexington',
    type: 'TERTIARY',
    title: 'Battles of Lexington and Concord - Wikipedia',
    publisherOrHolder: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Battles_of_Lexington_and_Concord',
    credibilityTier: 'TIER3',
    notes: 'General reference. Requires cross-verification with primary sources.',
  },
];
