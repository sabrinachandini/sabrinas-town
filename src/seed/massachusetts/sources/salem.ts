// MODEL: Claude Sonnet 4.6
// Salem, MA -- maritime resistance, privateering, early confrontations over military stores, Leslie\'s Retreat (Feb 1775)

import { Prisma } from '@prisma/client';

export const salemSources: Prisma.SourceCreateInput[] = [
  // TIER 1 -- Institutional and Academic
  {
    id: 'src-salem-leslie-retreat-deposition',
    type: 'PRIMARY',
    title: "Colonel Leslie\'s Retreat at Salem: Eyewitness Depositions, February 1775",
    publisherOrHolder: 'Massachusetts Provincial Congress',
    credibilityTier: 'TIER1',
    notes:
      'Sworn depositions collected from Salem residents and militia members describing the confrontation at the North Bridge on February 26, 1775. Establishes the sequence of events in the first organized armed standoff of the Revolution.',
  },
  {
    id: 'src-salem-essex-county-court-records',
    type: 'PRIMARY',
    title: 'Essex County Court Records and Committee of Safety Minutes, 1774-1776',
    publisherOrHolder: 'Massachusetts State Archives',
    url: 'https://www.sec.state.ma.us/arc/',
    credibilityTier: 'TIER1',
    notes:
      'Original minutes of the Salem Committee of Safety and Essex County court proceedings documenting the suppression of loyalist activity and the mobilization of maritime resources for the Patriot cause.',
  },
  {
    id: 'src-salem-privateering-commissions',
    type: 'PRIMARY',
    title: 'Continental Congress Privateering Commissions: Salem-Registered Vessels, 1776-1783',
    publisherOrHolder: 'National Archives and Records Administration',
    url: 'https://www.archives.gov/',
    credibilityTier: 'TIER1',
    notes:
      'Original letters of marque and reprisal issued to Salem mariners. Salem commissioned more privateers per capita than any other American port during the war, and these records document vessel names, captains, and bond amounts.',
  },
  {
    id: 'src-salem-nps-maritime',
    type: 'INSTITUTIONAL',
    title: 'Salem Maritime National Historic Site: Revolutionary War Era',
    publisherOrHolder: 'National Park Service',
    url: 'https://www.nps.gov/sama/learn/historyculture/revolutionary-war.htm',
    credibilityTier: 'TIER1',
    notes:
      'NPS interpretive materials on Derby Wharf and the Custom House in the context of colonial trade resistance and wartime privateering. Includes primary document transcriptions.',
  },
  {
    id: 'src-salem-felt-annals',
    type: 'SECONDARY',
    title: 'Annals of Salem',
    publisherOrHolder: 'W. & S.B. Ives (Joseph B. Felt)',
    publicationDate: new Date('1845-01-01'),
    credibilityTier: 'TIER1',
    notes:
      "Nineteenth-century town history drawing on town meeting records, church registers, and personal papers. Remains a foundational primary-adjacent reference for Salem\'s Revolutionary-era chronology.",
  },
  // TIER 2 -- Reputable Secondary
  {
    id: 'src-salem-phillips-salem-port',
    type: 'SECONDARY',
    title: 'Salem and the Indies: The Story of the Great Commercial Era of the City',
    publisherOrHolder: 'Houghton Mifflin (James Duncan Phillips)',
    publicationDate: new Date('1947-01-01'),
    credibilityTier: 'TIER2',
    notes:
      'Detailed economic and social history of Salem as a maritime center, with substantial coverage of how the merchant class navigated the break with Britain and turned to privateering.',
  },
  {
    id: 'src-salem-historical-collections',
    type: 'SECONDARY',
    title: 'Historical Collections of the Essex Institute',
    publisherOrHolder: 'Essex Institute (Peabody Essex Museum)',
    publicationDate: new Date('1859-01-01'),
    credibilityTier: 'TIER2',
    notes:
      'Multi-volume journal series publishing transcribed documents, ship logs, and biographical sketches of Salem mariners. Volumes from the 1860s-1890s contain the richest Revolutionary-era material.',
  },
  {
    id: 'src-salem-pem-collections',
    type: 'INSTITUTIONAL',
    title: 'Phillips Library Revolutionary War Collection',
    publisherOrHolder: 'Peabody Essex Museum, Phillips Library',
    url: 'https://www.pem.org/library',
    credibilityTier: 'TIER2',
    notes:
      "Repository of Salem merchant family papers, privateering logs, and maritime records. Includes the Derby family papers, among the most complete documentation of a Salem Patriot merchant\'s wartime activities.",
  },
  {
    id: 'src-salem-carey-leslie-retreat',
    type: 'SECONDARY',
    title: "Leslie\'s Retreat: The First Blow for Liberty",
    publisherOrHolder: 'Journal of the American Revolution',
    url: 'https://allthingsliberty.com/2014/02/leslies-retreat-the-first-blow-for-liberty/',
    credibilityTier: 'TIER2',
    notes:
      "Peer-reviewed article reconstructing the February 26, 1775, standoff in detail. Argues that Salem\'s successful defiance of British troops established a template for passive resistance used at Concord two months later.",
  },
  {
    id: 'src-salem-essex-county-hist-soc',
    type: 'INSTITUTIONAL',
    title: 'Essex County History: Revolutionary Period Research Guide',
    publisherOrHolder: 'Essex County Historical Society',
    url: 'https://www.essexheritage.org/',
    credibilityTier: 'TIER2',
    notes:
      "Archival finding aids and published bibliographies covering Essex County\'s role in the Revolution, including material on Salem\'s Committee of Correspondence and militia organization.",
  },
  // TIER 3 -- General Reference
  {
    id: 'src-salem-wikipedia-leslies-retreat',
    type: 'TERTIARY',
    title: "Leslie\'s Retreat -- Wikipedia",
    publisherOrHolder: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Leslie%27s_Retreat',
    credibilityTier: 'TIER3',
    notes:
      'General reference overview of the February 26, 1775, incident. Useful for orientation but requires cross-verification with depositions and Felt for specific claims.',
  },
  {
    id: 'src-salem-tourism-revolution',
    type: 'TERTIARY',
    title: 'Salem: Revolutionary War History -- Destination Salem',
    publisherOrHolder: 'Destination Salem',
    url: 'https://www.salem.org/history/revolutionary-war/',
    credibilityTier: 'TIER3',
    notes:
      'Tourism-oriented overview of Salem Revolutionary sites including the Derby Wharf area, Charter Street, and the location of the North Bridge confrontation. Good for visitor orientation.',
  },
];
