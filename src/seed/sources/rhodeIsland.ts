// MODEL: Claude Sonnet
// Rhode Island towns source data - French alliance and Patriot origins
// Towns: Newport, Providence

import { Prisma } from '@prisma/client';

export const rhodeIslandSources: Record<
  string,
  { sources: Prisma.SourceCreateInput[]; sharedIds?: string[] }
> = {
  'us-ri-newport': {
    sources: [
      // TIER 1
      {
        id: 'src-newport-rochambeau-journal',
        type: 'PRIMARY',
        title: 'Journal de la Campagne en Amérique (Rochambeau\'s Campaign Journal)',
        publisherOrHolder: 'Bibliothèque nationale de France / Library of Congress',
        url: 'https://www.loc.gov/item/2021667630/',
        credibilityTier: 'TIER1',
        notes:
          'Rochambeau\'s own campaign journal documenting the French Army\'s arrival at Newport in July 1780 and the subsequent march south to Yorktown. The foundational primary source for French operations in Rhode Island.',
      },
      {
        id: 'src-newport-dumas-memoir',
        type: 'PRIMARY',
        title: 'Memoirs of His Own Time (Mathieu Dumas)',
        publisherOrHolder: 'Lea & Blanchard (Philadelphia ed.)',
        publicationDate: new Date('1839-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Memoirs of a French staff officer who served under Rochambeau at Newport. Provides detailed firsthand description of the French occupation, relations with Newport civilians, and winter quarters 1780-1781.',
      },
      {
        id: 'src-newport-deux-ponts-journal',
        type: 'PRIMARY',
        title: 'My Campaigns in America (Guillaume de Deux-Ponts)',
        publisherOrHolder: 'J.K. Wiggin and W.P. Lunt (Boston)',
        publicationDate: new Date('1868-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Journal of a French regimental officer stationed at Newport, translated into English. Rich in detail about daily life, the town\'s social scene, and the French Army\'s relationship with the local population.',
      },
      {
        id: 'src-newport-nps-rochambeau',
        type: 'INSTITUTIONAL',
        title: 'Rochambeau National Historic Trail: Newport Segment',
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/roc/index.htm',
        credibilityTier: 'TIER1',
        notes:
          'NPS documentation for the Rochambeau National Historic Trail tracing the French Army\'s march from Newport to Yorktown. Newport segment covers encampment sites, Hunter House, and Vernon House headquarters.',
      },
      {
        id: 'src-newport-acomb-von-closen',
        type: 'PRIMARY',
        title: 'The Revolutionary Journal of Baron Ludwig von Closen, 1780-1783',
        publisherOrHolder: 'University of North Carolina Press (ed. Evelyn Acomb)',
        publicationDate: new Date('1958-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Translated journal of a German-born aide-de-camp to Rochambeau stationed at Newport. Unusually detailed observations on American-French relations, Newport society, and military operations.',
      },
      // TIER 2
      {
        id: 'src-newport-kennett-french-forces',
        type: 'SECONDARY',
        title: 'The French Forces in America, 1780-1783',
        publisherOrHolder: 'Greenwood Press (Lee Kennett)',
        publicationDate: new Date('1977-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Scholarly examination of the French expeditionary force, with strong coverage of the Newport encampment, its organization, and its impact on the local population and the broader war effort.',
      },
      {
        id: 'src-newport-preservation-society',
        type: 'INSTITUTIONAL',
        title: 'The Preservation Society of Newport County: Revolutionary War Properties',
        publisherOrHolder: 'Preservation Society of Newport County',
        url: 'https://www.newportmansions.org/',
        credibilityTier: 'TIER2',
        notes:
          'Documentation of Newport\'s preserved eighteenth-century architecture, including Hunter House and Vernon House (Rochambeau\'s headquarters), with historical interpretation of their Revolutionary War roles.',
      },
      {
        id: 'src-newport-conley-ri-revolution',
        type: 'SECONDARY',
        title: 'Democracy in Decline: Rhode Island\'s Constitutional Development, 1776-1841',
        publisherOrHolder: 'Rhode Island Publications Society (Patrick Conley)',
        publicationDate: new Date('1977-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Scholarly study of Rhode Island\'s political development covering the British occupation of Newport (1776-1779) and French arrival (1780) as transformative events in the state\'s constitutional history.',
      },
      {
        id: 'src-newport-british-occupation',
        type: 'SECONDARY',
        title: 'The British Occupation of Newport, 1776-1779',
        publisherOrHolder: 'Rhode Island Historical Society Quarterly',
        credibilityTier: 'TIER2',
        notes:
          'Scholarly article documenting the three-year British occupation that preceded the French arrival, examining how it shaped Newport\'s reception of Rochambeau\'s forces in 1780.',
      },
      {
        id: 'src-newport-rihs-collections',
        type: 'INSTITUTIONAL',
        title: 'Rhode Island Historical Society: Newport Revolutionary War Collections',
        publisherOrHolder: 'Rhode Island Historical Society',
        url: 'https://www.rihs.org/',
        credibilityTier: 'TIER2',
        notes:
          'Archival holdings including letters, diaries, maps, and broadsides related to Newport\'s experience during both British occupation and French encampment. Significant manuscript sources.',
      },
      // TIER 3
      {
        id: 'src-newport-wikipedia-rochambeau',
        type: 'TERTIARY',
        title: 'Rochambeau -- Wikipedia',
        publisherOrHolder: 'Wikimedia Foundation',
        url: 'https://en.wikipedia.org/wiki/Rochambeau',
        credibilityTier: 'TIER3',
        notes:
          'General biographical overview of Rochambeau with summary treatment of the Newport encampment. Accurate in outline; military detail should be verified against Kennett and primary journals.',
      },
      {
        id: 'src-newport-discover-newport',
        type: 'TERTIARY',
        title: 'Discover Newport: Revolutionary War Heritage Trail',
        publisherOrHolder: 'Discover Newport (tourism bureau)',
        url: 'https://www.discovernewport.org/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism bureau guide to Newport\'s Revolutionary War sites, including the French and Indian War fortifications, the Redwood Library (used as a British headquarters), and the French encampment at Hunter House.',
      },
    ],
  },

  'us-ri-providence': {
    sources: [
      // TIER 1
      {
        id: 'src-providence-gaspee-testimony',
        type: 'PRIMARY',
        title: 'Proceedings of the Gaspee Commission, 1772-1773',
        publisherOrHolder: 'Rhode Island State Archives',
        url: 'https://www.sos.ri.gov/divisions/Archival/archives',
        credibilityTier: 'TIER1',
        notes:
          'Official transcripts of the royal commission appointed to investigate the burning of HMS Gaspee in Narragansett Bay on June 9, 1772. The most important primary source for the Gaspee affair and its provocations.',
      },
      {
        id: 'src-providence-brown-papers',
        type: 'PRIMARY',
        title: 'John Brown Papers, 1763-1803',
        publisherOrHolder: 'Rhode Island Historical Society',
        credibilityTier: 'TIER1',
        notes:
          'Correspondence and business records of merchant-patriot John Brown, who helped organize the Gaspee burning and later financed Providence\'s Revolutionary War infrastructure. Key to understanding Providence\'s mercantile Patriot leadership.',
      },
      {
        id: 'src-providence-ri-general-assembly-records',
        type: 'PRIMARY',
        title: 'Records of the Colony of Rhode Island and Providence Plantations, Volume VII',
        publisherOrHolder: 'A. Crawford Greene, State Printer (John Russell Bartlett, ed.)',
        publicationDate: new Date('1862-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Official published colonial and early state records covering 1770-1776, including Rhode Island\'s early independence resolution of May 4, 1776--two months before the Declaration--and war mobilization records.',
      },
      {
        id: 'src-providence-nps-gaspee',
        type: 'INSTITUTIONAL',
        title: 'Gaspee Affair Historical Overview',
        publisherOrHolder: 'National Park Service, American Revolution',
        url: 'https://www.nps.gov/articles/gaspee.htm',
        credibilityTier: 'TIER1',
        notes:
          'NPS historical overview of the Gaspee incident as a precursor to the Revolution, examining how the royal commission\'s threat to transport suspects to England for trial galvanized colonial resistance.',
      },
      {
        id: 'src-providence-lovejoy-ri-revolution',
        type: 'SECONDARY',
        title: 'Rhode Island Politics and the American Revolution, 1760-1776',
        publisherOrHolder: 'Brown University Press (David S. Lovejoy)',
        publicationDate: new Date('1958-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Scholarly study of Rhode Island\'s political trajectory from trade disputes through independence. Covers the Gaspee affair, Providence\'s role as the Patriot capital, and the tension between Newport and Providence factions.',
      },
      // TIER 2
      {
        id: 'src-providence-mack-gaspee',
        type: 'SECONDARY',
        title: 'The Gaspee Affair as Conspiracy',
        publisherOrHolder: 'William and Mary Quarterly',
        credibilityTier: 'TIER2',
        notes:
          'Academic article examining the organization behind the Gaspee burning--primarily the Providence merchant community--and arguing it represents an early deliberate act of political resistance rather than spontaneous riot.',
      },
      {
        id: 'src-providence-staples-annals',
        type: 'SECONDARY',
        title: 'Annals of the Town of Providence',
        publisherOrHolder: 'Knowles, Vose and Anthony (William Staples)',
        publicationDate: new Date('1843-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Early town history drawing on records and oral tradition. Provides detailed accounts of Providence\'s Revolutionary War experience, including the Committee of Safety, privateering, and support for the Continental Army.',
      },
      {
        id: 'src-providence-rihs-revolution',
        type: 'INSTITUTIONAL',
        title: 'Rhode Island Historical Society: Providence in the Revolution',
        publisherOrHolder: 'Rhode Island Historical Society',
        url: 'https://www.rihs.org/',
        credibilityTier: 'TIER2',
        notes:
          'RIHS archival and published resources on Providence\'s wartime experience, including materials on the First Rhode Island Regiment--one of the first formally integrated military units in American history.',
      },
      {
        id: 'src-providence-rappleye-sons-fortune',
        type: 'SECONDARY',
        title: 'Sons of Providence: The Brown Brothers, the Slave Trade, and the American Revolution',
        publisherOrHolder: 'Simon & Schuster (Charles Rappleye)',
        publicationDate: new Date('2006-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Dual biography of Providence merchant brothers John and Moses Brown, examining how their personal and commercial rivalry shaped Providence\'s political identity during the Revolution and debates over slavery.',
      },
      {
        id: 'src-providence-providence-preservation',
        type: 'INSTITUTIONAL',
        title: 'Providence Preservation Society: College Hill Historic District',
        publisherOrHolder: 'Providence Preservation Society',
        url: 'https://www.ppsri.org/',
        credibilityTier: 'TIER2',
        notes:
          'Preservation documentation for the College Hill district, including the John Brown House, Market House, and First Baptist Meeting House--all significant in Providence\'s Revolutionary War history.',
      },
      // TIER 3
      {
        id: 'src-providence-wikipedia-gaspee',
        type: 'TERTIARY',
        title: 'Gaspee Affair -- Wikipedia',
        publisherOrHolder: 'Wikimedia Foundation',
        url: 'https://en.wikipedia.org/wiki/Gaspee_affair',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of the Gaspee incident. Provides useful context; assertions about participants and motivations should be verified against the Commission proceedings and Lovejoy.',
      },
      {
        id: 'src-providence-visitprovidence',
        type: 'TERTIARY',
        title: 'GoProvidence: Revolutionary History',
        publisherOrHolder: 'Providence Warwick Convention and Visitors Bureau',
        url: 'https://www.goprovidence.com/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism bureau resources on Revolutionary-era Providence sites, including the John Brown House, First Baptist Meeting House, and walking tours of the historic East Side.',
      },
    ],
  },
};
