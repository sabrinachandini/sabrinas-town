// MODEL: Claude Sonnet
// New Hampshire towns source data - naval shipbuilding and Revolutionary capital
// Towns: Portsmouth, Exeter

import { Prisma } from '@prisma/client';

export const newHampshireSources: Record<
  string,
  { sources: Prisma.SourceCreateInput[]; sharedIds?: string[] }
> = {
  'us-nh-portsmouth': {
    sources: [
      // TIER 1
      {
        id: 'src-portsmouth-raleigh-log',
        type: 'PRIMARY',
        title: 'Ship\'s Log, USS Raleigh, 1776-1778',
        publisherOrHolder: 'National Archives, Record Group 45 (Naval Records Collection)',
        credibilityTier: 'TIER1',
        notes:
          'Official log of the 32-gun frigate USS Raleigh, built at Portsmouth and launched in 1776. One of the thirteen original frigates authorized by the Continental Congress; the log documents her construction, commissioning, and early voyages.',
      },
      {
        id: 'src-portsmouth-langdon-papers',
        type: 'PRIMARY',
        title: 'John Langdon Papers, 1775-1819',
        publisherOrHolder: 'New Hampshire Historical Society',
        url: 'https://www.nhhistory.org/',
        credibilityTier: 'TIER1',
        notes:
          'Business and political correspondence of Portsmouth shipbuilder and Patriot leader John Langdon, who personally financed portions of warship construction from his own fortune. Critical source for understanding Portsmouth\'s naval contributions.',
      },
      {
        id: 'src-portsmouth-continental-congress-navy',
        type: 'PRIMARY',
        title: 'Journals of the Continental Congress: Naval Committee Records, 1775-1776',
        publisherOrHolder: 'Library of Congress',
        url: 'https://memory.loc.gov/ammem/amlaw/lwjc.html',
        credibilityTier: 'TIER1',
        notes:
          'Congressional records authorizing construction of the original Continental Navy frigates, specifying Portsmouth as a construction site. Establishes the official authorization of ships built at Langdon\'s yard.',
      },
      {
        id: 'src-portsmouth-nps-strawbery-banke',
        type: 'INSTITUTIONAL',
        title: 'Strawbery Banke Museum: Revolution in Portsmouth',
        publisherOrHolder: 'Strawbery Banke Museum',
        url: 'https://www.strawberybanke.org/',
        credibilityTier: 'TIER1',
        notes:
          'Living history museum on the original Portsmouth waterfront site with interpretation of Revolutionary-era shipbuilding, merchant life, and the divided loyalties of Portsmouth\'s population during the war.',
      },
      {
        id: 'src-portsmouth-mayo-langdon',
        type: 'SECONDARY',
        title: 'John Langdon of New Hampshire',
        publisherOrHolder: 'Rumford Press (Lawrence Shaw Mayo)',
        publicationDate: new Date('1937-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Biography of Portsmouth\'s most prominent Revolutionary leader, covering his shipbuilding activities, funding of the Bennington campaign, role as a delegate to the Constitutional Convention, and governorship.',
      },
      // TIER 2
      {
        id: 'src-portsmouth-brewster-rambles',
        type: 'SECONDARY',
        title: 'Rambles About Portsmouth: Sketches of Persons, Localities, and Incidents',
        publisherOrHolder: 'C.W. Brewster (Charles W. Brewster)',
        publicationDate: new Date('1859-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Nineteenth-century local history with extensive coverage of Portsmouth\'s Revolutionary War period, including the gunpowder raid on Fort William and Mary in December 1774, one of the first overt acts of the Revolution.',
      },
      {
        id: 'src-portsmouth-nh-division-records',
        type: 'INSTITUTIONAL',
        title: 'New Hampshire Division of Historical Resources: Portsmouth Historic District',
        publisherOrHolder: 'New Hampshire Division of Historical Resources',
        url: 'https://www.nh.gov/nhdhr/',
        credibilityTier: 'TIER2',
        notes:
          'State historic preservation documentation for Portsmouth\'s historic district, including the John Paul Jones House, John Langdon mansion, and other Revolutionary-era structures.',
      },
      {
        id: 'src-portsmouth-nelson-american-frigate',
        type: 'SECONDARY',
        title: 'The Continental Navy: Building a Fleet, 1775-1783',
        publisherOrHolder: 'University of South Carolina Press (James L. Nelson)',
        publicationDate: new Date('2006-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Scholarly history of Continental Navy ship construction with a chapter on the Portsmouth yards. Covers the Raleigh and America (74-gun ship-of-the-line built at Portsmouth) in detail.',
      },
      {
        id: 'src-portsmouth-paul-jones-house',
        type: 'INSTITUTIONAL',
        title: 'John Paul Jones House Museum: Historical Collections',
        publisherOrHolder: 'Portsmouth Historical Society',
        url: 'https://portsmouthhistory.org/',
        credibilityTier: 'TIER2',
        notes:
          'Museum at the house where John Paul Jones stayed while overseeing construction of the America in 1781-1782. Collections include period naval documents and artifacts connected to Continental Navy operations.',
      },
      {
        id: 'src-portsmouth-daniell-nh-politics',
        type: 'SECONDARY',
        title: 'Experiment in Republicanism: New Hampshire Politics and the American Revolution, 1741-1794',
        publisherOrHolder: 'Harvard University Press (Jere R. Daniell)',
        publicationDate: new Date('1970-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Scholarly political history of New Hampshire with significant coverage of Portsmouth\'s merchant class, the Wentworth governorship\'s collapse, and the transition to Revolutionary governance.',
      },
      // TIER 3
      {
        id: 'src-portsmouth-wikipedia',
        type: 'TERTIARY',
        title: 'Portsmouth, New Hampshire -- Wikipedia',
        publisherOrHolder: 'Wikimedia Foundation',
        url: 'https://en.wikipedia.org/wiki/Portsmouth,_New_Hampshire',
        credibilityTier: 'TIER3',
        notes:
          'General overview including the city\'s Revolutionary War history, naval shipbuilding, and notable figures. Cross-reference specific claims with Mayo\'s Langdon biography and primary naval records.',
      },
      {
        id: 'src-portsmouth-visit-tourism',
        type: 'TERTIARY',
        title: 'Visit Portsmouth NH: History and Heritage',
        publisherOrHolder: 'Greater Portsmouth Chamber of Commerce',
        url: 'https://www.portsmouthnh.com/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism guide to Portsmouth\'s historic sites, including Strawbery Banke, the John Paul Jones House, and Portsmouth Harbor\'s fortifications, with practical visitor information.',
      },
    ],
  },

  'us-nh-exeter': {
    sources: [
      // TIER 1
      {
        id: 'src-exeter-nh-state-papers',
        type: 'PRIMARY',
        title: 'New Hampshire State Papers, Volume VIII: Miscellaneous Provincial and State Papers',
        publisherOrHolder: 'New Hampshire Secretary of State / Amos Hadley, State Printer',
        publicationDate: new Date('1874-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Compiled official records of the New Hampshire Provincial Congress and the early state government meeting at Exeter, including session journals, resolutions, and correspondence with the Continental Congress.',
      },
      {
        id: 'src-exeter-nh-constitution-1776',
        type: 'PRIMARY',
        title: 'Constitution of New Hampshire, January 5, 1776',
        publisherOrHolder: 'New Hampshire State Archives',
        url: 'https://www.sos.nh.gov/archives',
        credibilityTier: 'TIER1',
        notes:
          'The text of New Hampshire\'s 1776 constitution, the first state constitution written in America--adopted in Exeter six months before the Declaration of Independence. Primary constitutional document of the Revolution.',
      },
      {
        id: 'src-exeter-continental-association-exeter',
        type: 'PRIMARY',
        title: 'Exeter Committee of Safety Records, 1775-1783',
        publisherOrHolder: 'New Hampshire Division of Archives and Records Management',
        url: 'https://www.sos.nh.gov/archives',
        credibilityTier: 'TIER1',
        notes:
          'Committee of Safety minutes and correspondence from Exeter documenting the town\'s role as the seat of Revolutionary government, military requisitions, and coordination with the Continental Army.',
      },
      {
        id: 'src-exeter-daniell-experiment',
        type: 'SECONDARY',
        title: 'Experiment in Republicanism: New Hampshire Politics and the American Revolution, 1741-1794',
        publisherOrHolder: 'Harvard University Press (Jere R. Daniell)',
        publicationDate: new Date('1970-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'The standard scholarly work on New Hampshire\'s Revolutionary politics. Covers in detail Exeter\'s emergence as the Revolutionary capital, the constitutional convention proceedings, and the town\'s political significance.',
      },
      {
        id: 'src-exeter-nps-war-independence',
        type: 'INSTITUTIONAL',
        title: 'American Independence: New Hampshire\'s Role in the Revolution',
        publisherOrHolder: 'National Park Service, Discover Our Shared Heritage',
        url: 'https://www.nps.gov/nr/travel/revwar/index.htm',
        credibilityTier: 'TIER1',
        notes:
          'NPS interpretive essay on New Hampshire\'s Revolutionary War contributions, with coverage of Exeter as the state\'s political and administrative center throughout the conflict.',
      },
      // TIER 2
      {
        id: 'src-exeter-bell-exeter',
        type: 'SECONDARY',
        title: 'History of Exeter, New Hampshire',
        publisherOrHolder: 'J.E. Farwell (Charles H. Bell)',
        publicationDate: new Date('1888-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Comprehensive local history of Exeter with detailed documentation of its Revolutionary War period as the state capital, including the establishment of Phillips Exeter Academy and the town\'s wartime economy.',
      },
      {
        id: 'src-exeter-american-independence-museum',
        type: 'INSTITUTIONAL',
        title: 'American Independence Museum: Ladd-Gilman House Collections',
        publisherOrHolder: 'American Independence Museum, Exeter NH',
        url: 'https://www.independencemuseum.org/',
        credibilityTier: 'TIER2',
        notes:
          'Museum in the Ladd-Gilman House, which served as the New Hampshire Treasury during the Revolution. Collections include a draft of the Bill of Rights, the Dunlap broadside of the Declaration, and Revolutionary-era fiscal records.',
      },
      {
        id: 'src-exeter-nh-historical-society',
        type: 'INSTITUTIONAL',
        title: 'New Hampshire Historical Society: Revolutionary War Manuscripts',
        publisherOrHolder: 'New Hampshire Historical Society',
        url: 'https://www.nhhistory.org/',
        credibilityTier: 'TIER2',
        notes:
          'Archival collections including governor\'s correspondence, military muster rolls, and committee records from Exeter\'s period as the Revolutionary state capital.',
      },
      {
        id: 'src-exeter-mayo-langdon-exeter',
        type: 'SECONDARY',
        title: 'John Langdon of New Hampshire',
        publisherOrHolder: 'Rumford Press (Lawrence Shaw Mayo)',
        publicationDate: new Date('1937-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Langdon biography covering his service in the New Hampshire Provincial Congress at Exeter and his coordination of war materials between Portsmouth and the inland capital.',
      },
      {
        id: 'src-exeter-nh-first-constitution',
        type: 'SECONDARY',
        title: 'The First State Constitution: New Hampshire\'s Revolutionary Document',
        publisherOrHolder: 'New Hampshire Bar Journal',
        credibilityTier: 'TIER2',
        notes:
          'Legal-historical analysis of the January 1776 New Hampshire constitution adopted at Exeter, arguing its significance as the first written state constitution in American history and its influence on subsequent state and federal documents.',
      },
      // TIER 3
      {
        id: 'src-exeter-wikipedia',
        type: 'TERTIARY',
        title: 'Exeter, New Hampshire -- Wikipedia',
        publisherOrHolder: 'Wikimedia Foundation',
        url: 'https://en.wikipedia.org/wiki/Exeter,_New_Hampshire',
        credibilityTier: 'TIER3',
        notes:
          'General reference with summary of Exeter\'s role as New Hampshire\'s Revolutionary capital and the adoption of the first state constitution. Factual claims should be verified against Daniell and the NH State Papers.',
      },
      {
        id: 'src-exeter-visit-tourism',
        type: 'TERTIARY',
        title: 'Visit Exeter NH: Revolutionary Heritage',
        publisherOrHolder: 'Exeter Area Chamber of Commerce',
        url: 'https://www.exeternh.gov/',
        credibilityTier: 'TIER3',
        notes:
          'Municipal and chamber tourism resources on Exeter\'s Revolutionary War heritage, including the American Independence Museum, the Gilman Garrison House, and annual July 4th reenactment events.',
      },
    ],
  },
};
