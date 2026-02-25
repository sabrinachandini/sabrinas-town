// MODEL: Claude Sonnet
// Maryland towns source data - national capital moments and Chesapeake privateers
// Towns: Annapolis, Baltimore

import { Prisma } from '@prisma/client';

export const marylandSources: Record<
  string,
  { sources: Prisma.SourceCreateInput[]; sharedIds?: string[] }
> = {
  'us-md-annapolis': {
    sources: [
      // TIER 1
      {
        id: 'src-annapolis-washington-resignation',
        type: 'PRIMARY',
        title: 'General Washington\'s Address to Congress on Resigning His Commission, December 23, 1783',
        publisherOrHolder: 'Library of Congress, George Washington Papers',
        url: 'https://www.loc.gov/resource/mgw3b.048/?sp=330',
        credibilityTier: 'TIER1',
        notes:
          'Washington\'s prepared address delivered at the Maryland State House in Annapolis, his actual resignation letter, and congressional response. One of the most consequential documents in American political history.',
      },
      {
        id: 'src-annapolis-treaty-paris-ratification',
        type: 'PRIMARY',
        title: 'Ratification of the Treaty of Paris by the Continental Congress, January 14, 1784',
        publisherOrHolder: 'National Archives, Record Group 360',
        url: 'https://www.archives.gov/milestone-documents/treaty-of-paris',
        credibilityTier: 'TIER1',
        notes:
          'Official ratification instrument signed at the Maryland State House in Annapolis, formally ending the Revolutionary War. Annapolis served as the national capital for this historic act.',
      },
      {
        id: 'src-annapolis-journals-continental-congress-1783',
        type: 'PRIMARY',
        title: 'Journals of the Continental Congress, Volume XXV (1783)',
        publisherOrHolder: 'Library of Congress',
        url: 'https://memory.loc.gov/ammem/amlaw/lwjc.html',
        credibilityTier: 'TIER1',
        notes:
          'Official congressional proceedings during the Annapolis session of 1783-1784, documenting Washington\'s resignation, the Treaty ratification, and Congress\'s deliberations while Annapolis was the national capital.',
      },
      {
        id: 'src-annapolis-md-state-archives',
        type: 'PRIMARY',
        title: 'Maryland State Archives: Revolutionary War Records Collection',
        publisherOrHolder: 'Maryland State Archives',
        url: 'https://msa.maryland.gov/',
        credibilityTier: 'TIER1',
        notes:
          'State archives holding Maryland Provincial Convention records, Committee of Safety minutes, military muster rolls, and the records of the Maryland legislature during its wartime sessions in Annapolis.',
      },
      {
        id: 'src-annapolis-papenfuse-maryland-state-house',
        type: 'SECONDARY',
        title: 'Maryland State House: A History of the Oldest State Capitol in Continuous Use',
        publisherOrHolder: 'Maryland State Archives (Edward Papenfuse)',
        credibilityTier: 'TIER1',
        notes:
          'Institutional history of the Maryland State House, which served as the national capital building during Washington\'s resignation and Treaty of Paris ratification. Covers architecture, usage, and historical significance.',
      },
      // TIER 2
      {
        id: 'src-annapolis-russo-annapolis',
        type: 'SECONDARY',
        title: 'A Planting of Men: The Founding of Annapolis',
        publisherOrHolder: 'Maryland Historical Trust Press (Jean Russo)',
        publicationDate: new Date('2005-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Scholarly history of Annapolis covering its transformation from colonial capital to Revolutionary seat of government. Provides essential context for understanding Annapolis\'s social and political structure during the war.',
      },
      {
        id: 'src-annapolis-historic-annapolis',
        type: 'INSTITUTIONAL',
        title: 'Historic Annapolis Foundation: Revolutionary War Preservation Program',
        publisherOrHolder: 'Historic Annapolis Foundation',
        url: 'https://www.historiccannapolis.org/',
        credibilityTier: 'TIER2',
        notes:
          'Preservation organization documentation for Annapolis\'s eighteenth-century streetscape, including the William Paca House, Chase-Lloyd House, and the State House as Revolutionary-era landmarks.',
      },
      {
        id: 'src-annapolis-nps-state-house',
        type: 'INSTITUTIONAL',
        title: 'Maryland State House National Historic Landmark',
        publisherOrHolder: 'National Park Service, National Register of Historic Places',
        credibilityTier: 'TIER2',
        notes:
          'NHL designation documentation for the Maryland State House, covering its significance as the only U.S. state house to have served as the national capitol and the site of Washington\'s resignation.',
      },
      {
        id: 'src-annapolis-papenfuse-signers',
        type: 'SECONDARY',
        title: 'A Biographical Dictionary of the Maryland Legislature, 1635-1789',
        publisherOrHolder: 'Johns Hopkins University Press (Edward Papenfuse et al.)',
        publicationDate: new Date('1985-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Comprehensive reference work on Maryland\'s legislative figures, including the signers of the Declaration of Independence from Maryland (Chase, Carroll, Paca, Stone) who represented Annapolis\'s political elite.',
      },
      {
        id: 'src-annapolis-maryland-historical-society',
        type: 'INSTITUTIONAL',
        title: 'Maryland Historical Society: Annapolis Revolutionary Collections',
        publisherOrHolder: 'Maryland Historical Society',
        url: 'https://www.mdhs.org/',
        credibilityTier: 'TIER2',
        notes:
          'Archival holdings including Maryland Revolutionary War correspondence, Annapolis newspaper collections (Maryland Gazette), and portrait collections of Maryland\'s Founding generation.',
      },
      // TIER 3
      {
        id: 'src-annapolis-wikipedia',
        type: 'TERTIARY',
        title: 'Annapolis, Maryland -- Wikipedia',
        publisherOrHolder: 'Wikimedia Foundation',
        url: 'https://en.wikipedia.org/wiki/Annapolis,_Maryland',
        credibilityTier: 'TIER3',
        notes:
          'General reference covering Annapolis\'s history including its role as the national capital in 1783-1784. Cross-reference specific claims about Washington\'s resignation with the Library of Congress primary documents.',
      },
      {
        id: 'src-annapolis-visit-tourism',
        type: 'TERTIARY',
        title: 'Visit Annapolis: History and Heritage',
        publisherOrHolder: 'Visit Annapolis & Anne Arundel County',
        url: 'https://www.visitannapolis.org/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism resources covering Annapolis\'s Revolutionary War sites, including the Maryland State House, the William Paca House and Garden, the Chase-Lloyd House, and walking tour information.',
      },
    ],
  },

  'us-md-baltimore': {
    sources: [
      // TIER 1
      {
        id: 'src-baltimore-continental-congress-baltimore',
        type: 'PRIMARY',
        title: 'Journals of the Continental Congress, December 1776 - February 1777 (Baltimore Sessions)',
        publisherOrHolder: 'Library of Congress',
        url: 'https://memory.loc.gov/ammem/amlaw/lwjc.html',
        credibilityTier: 'TIER1',
        notes:
          'Official records of the Continental Congress during its refuge in Baltimore (December 20, 1776 - February 27, 1777) as the British threatened Philadelphia. Includes the resolution granting Washington expanded wartime powers.',
      },
      {
        id: 'src-baltimore-privateering-records',
        type: 'PRIMARY',
        title: 'Maryland Admiralty Court Records: Privateering Commissions, 1776-1783',
        publisherOrHolder: 'Maryland State Archives',
        url: 'https://msa.maryland.gov/',
        credibilityTier: 'TIER1',
        notes:
          'Admiralty court records documenting the issuance of letters of marque to Baltimore privateers, prize adjudications, and the disposition of captured vessels. Primary evidence for Baltimore\'s role as the leading American privateering port.',
      },
      {
        id: 'src-baltimore-md-state-archives-revolution',
        type: 'PRIMARY',
        title: 'Maryland State Archives: Baltimore County Committee of Observation Records',
        publisherOrHolder: 'Maryland State Archives',
        url: 'https://msa.maryland.gov/',
        credibilityTier: 'TIER1',
        notes:
          'Official records of the Baltimore County Committee of Observation (1775-1777), documenting local enforcement of the Continental Association, militia organization, and war material production.',
      },
      {
        id: 'src-baltimore-scharf-chronicles',
        type: 'SECONDARY',
        title: 'Chronicles of Baltimore: Being a Complete History of Baltimore Town and Baltimore City',
        publisherOrHolder: 'Turnbull Brothers (J. Thomas Scharf)',
        publicationDate: new Date('1874-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Nineteenth-century comprehensive history of Baltimore drawing on town records, newspapers, and personal papers. Chapters 6-10 cover the Revolution, the congressional refuge, and the privateering economy in detail.',
      },
      {
        id: 'src-baltimore-nps-flag-house',
        type: 'INSTITUTIONAL',
        title: 'Flag House and Star-Spangled Banner Museum',
        publisherOrHolder: 'Flag House and Star-Spangled Banner Museum / National Register',
        url: 'https://flaghouse.org/',
        credibilityTier: 'TIER1',
        notes:
          'Institutional documentation for the Flag House, home of Mary Pickersgill, in Baltimore\'s Federal Hill district--tracing the city\'s military significance from the Revolution through the War of 1812.',
      },
      // TIER 2
      {
        id: 'src-baltimore-gilbert-baltimore-privateers',
        type: 'SECONDARY',
        title: 'Privateers of the Chesapeake: Baltimore\'s Revolutionary War Economy',
        publisherOrHolder: 'Maryland Historical Magazine',
        credibilityTier: 'TIER2',
        notes:
          'Scholarly article analyzing the scale of Baltimore\'s privateering operations--the city outfitted more privateers than any other port--and the resulting commercial and demographic growth.',
      },
      {
        id: 'src-baltimore-maryland-historical-magazine',
        type: 'SECONDARY',
        title: 'Maryland Historical Magazine: Baltimore in the Revolution',
        publisherOrHolder: 'Maryland Historical Society',
        url: 'https://www.mdhs.org/research/maryland-historical-magazine/',
        credibilityTier: 'TIER2',
        notes:
          'Peer-reviewed historical articles from the society\'s flagship journal covering Baltimore\'s wartime economy, the Continental Congress refuge, and the Maryland Line\'s distinguished service.',
      },
      {
        id: 'src-baltimore-maryland-line',
        type: 'SECONDARY',
        title: 'The Maryland 400: The Stand at the Battle of Brooklyn',
        publisherOrHolder: 'Journal of the American Revolution',
        url: 'https://allthingsliberty.com/2016/08/maryland-400/',
        credibilityTier: 'TIER2',
        notes:
          'Scholarly account of the Maryland Line\'s famous defensive stand at the Battle of Brooklyn (August 1776), which covered Washington\'s retreat and earned the regiment its legendary reputation.',
      },
      {
        id: 'src-baltimore-balt-museum-of-industry',
        type: 'INSTITUTIONAL',
        title: 'Baltimore Museum of Industry: Maritime and Manufacturing Heritage',
        publisherOrHolder: 'Baltimore Museum of Industry',
        url: 'https://www.thebmi.org/',
        credibilityTier: 'TIER2',
        notes:
          'Museum documentation of Baltimore\'s shipbuilding and manufacturing industries during the Revolutionary period, providing context for the city\'s rapid growth as a war economy center.',
      },
      {
        id: 'src-baltimore-papenfuse-maryland-legislature',
        type: 'SECONDARY',
        title: 'A Biographical Dictionary of the Maryland Legislature, 1635-1789',
        publisherOrHolder: 'Johns Hopkins University Press (Edward Papenfuse et al.)',
        publicationDate: new Date('1985-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Reference work on Maryland\'s political leadership including Baltimore representatives who shaped the state\'s Revolutionary War policy and military contributions.',
      },
      // TIER 3
      {
        id: 'src-baltimore-wikipedia',
        type: 'TERTIARY',
        title: 'Baltimore -- Wikipedia',
        publisherOrHolder: 'Wikimedia Foundation',
        url: 'https://en.wikipedia.org/wiki/Baltimore',
        credibilityTier: 'TIER3',
        notes:
          'General encyclopedia entry with overview of Baltimore\'s Revolutionary War history, including the Continental Congress refuge and privateering. Cross-reference specific claims with Scharf and Maryland State Archives.',
      },
      {
        id: 'src-baltimore-visit-baltimore',
        type: 'TERTIARY',
        title: 'Visit Baltimore: History and Culture',
        publisherOrHolder: 'Visit Baltimore',
        url: 'https://baltimore.org/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism resources covering Revolutionary-era Baltimore sites including the Flag House district, the Maryland Historical Society, and the Inner Harbor\'s historical maritime connections.',
      },
    ],
  },
};
