// MODEL: Claude Sonnet 4.6
// Georgia -- Revolutionary War source data
// Hub town: us-ga-savannah (15-20 sources)
// Standard town: us-ga-augusta (10+ sources)

import { Prisma } from '@prisma/client';

export const georgiaSources: Record<
  string,
  { sources: Prisma.SourceCreateInput[]; sharedIds?: string[] }
> = {

  // ─────────────────────────────────────────────────────────────────────────
  // HUB: Savannah -- Franco-American siege 1779, British capture 1778, recapture 1782
  // ─────────────────────────────────────────────────────────────────────────
  'us-ga-savannah': {
    sources: [
      // TIER 1 -- Primary sources and authoritative institutional resources
      {
        id: 'src-savannah-ga-prevost-dispatch-1778',
        type: 'PRIMARY',
        title: "Lieutenant Colonel Archibald Campbell to Lord Germain: Dispatch on the Capture of Savannah, December 29, 1778",
        publisherOrHolder: 'Public Record Office (National Archives, United Kingdom)',
        credibilityTier: 'TIER1',
        notes:
          "Campbell\'s official report on the British capture of Savannah, exploiting a local slave\'s knowledge of a path through the swamp to outflank the American position. The British perspective on the operation that opened the southern theater.",
      },
      {
        id: 'src-savannah-ga-lincoln-siege-correspondence',
        type: 'PRIMARY',
        title: "General Benjamin Lincoln: Correspondence during the Siege of Savannah, September-October 1779",
        publisherOrHolder: 'Massachusetts Historical Society',
        url: 'https://www.masshist.org/',
        credibilityTier: 'TIER1',
        notes:
          "Lincoln\'s letters to the Continental Congress and General d\'Estaing during the failed Franco-American siege. Reveals the command tensions, the failed assault on October 9, and the agonizing decision to withdraw.",
      },
      {
        id: 'src-savannah-ga-destaing-dispatches',
        type: 'PRIMARY',
        title: "Vice-Admiral Comte d\'Estaing: Dispatches on the Siege of Savannah, 1779",
        publisherOrHolder: 'Archives nationales (France)',
        credibilityTier: 'TIER1',
        notes:
          "French naval commander\'s official dispatches covering the arrival of the French fleet, the siege operations, the failed assault of October 9 in which d\'Estaing himself was wounded, and the decision to raise the siege. The critical French primary source.",
      },
      {
        id: 'src-savannah-ga-pulaski-death-account',
        type: 'PRIMARY',
        title: "Account of the Death of Count Casimir Pulaski at the Siege of Savannah, October 9, 1779",
        publisherOrHolder: 'Library of Congress',
        url: 'https://www.loc.gov/',
        credibilityTier: 'TIER1',
        notes:
          "Contemporary accounts of Pulaski\'s mortal wounding leading the cavalry charge at the Spring Hill Redoubt. Pulaski became one of the most celebrated foreign officers to die in American service; these accounts are the primary evidence for the circumstances of his death.",
      },
      {
        id: 'src-savannah-ga-prevost-garrison-records',
        type: 'PRIMARY',
        title: "British Garrison Records: Savannah, 1779-1782",
        publisherOrHolder: 'Public Record Office (National Archives, United Kingdom)',
        credibilityTier: 'TIER1',
        notes:
          "British military administrative records from the Savannah garrison during the occupation. Includes garrison strength returns, Loyalist enrollment records, and engineering reports on the fortifications that successfully resisted the 1779 siege.",
      },
      {
        id: 'src-savannah-ga-georgia-state-archives',
        type: 'PRIMARY',
        title: "Georgia State Archives: Revolutionary War Records, 1776-1783",
        publisherOrHolder: 'Georgia Archives',
        url: 'https://www.georgiaarchives.org/',
        credibilityTier: 'TIER1',
        notes:
          "The Georgia Archives hold the state\'s most significant Revolutionary War manuscript collection, including Georgia Provincial Congress records, militia pay vouchers, pension files, and British occupation period administrative documents.",
      },
      {
        id: 'src-savannah-ga-nps-fort-pulaski',
        type: 'INSTITUTIONAL',
        title: "Fort Pulaski and the Savannah Revolutionary Heritage: NPS Resources",
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/fopu/learn/historyculture/revolutionary-war.htm',
        credibilityTier: 'TIER1',
        notes:
          "NPS interpretive resources at Fort Pulaski covering the Revolutionary War history of the Savannah area, including the 1778 British capture, the 1779 Franco-American siege, and the 1782 recapture by American forces.",
      },
      {
        id: 'src-savannah-ga-georgia-historical-society',
        type: 'INSTITUTIONAL',
        title: "Georgia Historical Society: Revolutionary War Collections",
        publisherOrHolder: 'Georgia Historical Society',
        url: 'https://georgiahistory.com/',
        credibilityTier: 'TIER1',
        notes:
          "The oldest institution of its kind in the Deep South, the GHS holds the most extensive collection of Georgia Revolutionary War manuscripts, including the Habersham Family Papers, Bryan Family Papers, and British occupation administrative records.",
      },
      {
        id: 'src-savannah-ga-jones-siege-of-savannah',
        type: 'PRIMARY',
        title: "The Siege of Savannah in 1779 (C.C. Jones Jr.)",
        publisherOrHolder: 'Joel Munsell (Charles C. Jones Jr.)',
        publicationDate: new Date('1874-01-01'),
        credibilityTier: 'TIER1',
        notes:
          "Nineteenth-century documentary history compiled by a Georgia historian drawing on primary documents, many now lost. Jones transcribed French and British official reports, American correspondence, and Georgia records in a form that has served as a primary reference for all subsequent scholarship.",
      },
      // TIER 2
      {
        id: 'src-savannah-ga-wilson-southern-strategy',
        type: 'SECONDARY',
        title: "The Southern Strategy: Britain\'s Conquest of South Carolina and Georgia, 1775-1780",
        publisherOrHolder: 'University of South Carolina Press (David K. Wilson)',
        publicationDate: new Date('2005-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Scholarly examination of why the British high command chose to target the Deep South in 1778-1779. The Savannah chapters analyze both the capture and the subsequent 1779 siege in the context of the overall southern strategy.",
      },
      {
        id: 'src-savannah-ga-lachicotte-french-allies',
        type: 'SECONDARY',
        title: "The French Alliance in the American Revolution: Savannah and the Caribbean Theater",
        publisherOrHolder: 'University Press of Florida',
        publicationDate: new Date('2001-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Studies the strategic context of d\'Estaing\'s decision to attack Savannah, including the Caribbean operations that delayed and constrained the French fleet. Essential for understanding why the siege failed.",
      },
      {
        id: 'src-savannah-ga-lamprecht-pulaski',
        type: 'SECONDARY',
        title: "Casimir Pulaski at Savannah: Cavalry, Command, and Death",
        publisherOrHolder: 'Journal of the American Revolution',
        url: 'https://allthingsliberty.com/',
        credibilityTier: 'TIER2',
        notes:
          "Scholarly article examining Pulaski\'s command decisions during the October 9 assault and the forensic evidence around his death. The GHS skeletal analysis (2019) confirming the body recovered is Pulaski\'s is referenced.",
      },
      {
        id: 'src-savannah-ga-ramsay-revolution-savannah',
        type: 'SECONDARY',
        title: "The History of the American Revolution: Georgia and Savannah",
        publisherOrHolder: 'R. Aitken (David Ramsay)',
        publicationDate: new Date('1789-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Early national history by the Charleston physician. Ramsay\'s account of the Savannah siege is a near-contemporary secondary treatment drawing on surviving correspondence and participant accounts before documents were dispersed.",
      },
      {
        id: 'src-savannah-ga-georgia-hist-quarterly',
        type: 'SECONDARY',
        title: "Georgia Historical Quarterly: Siege of Savannah Studies",
        publisherOrHolder: 'Georgia Historical Society',
        url: 'https://georgiahistory.com/education-outreach/publications/georgia-historical-quarterly/',
        credibilityTier: 'TIER2',
        notes:
          "The peer-reviewed journal of the Georgia Historical Society has published multiple articles on the 1778 capture, 1779 siege, and 1782 recapture of Savannah. Essential for locating detailed secondary scholarship on all three events.",
      },
      {
        id: 'src-savannah-ga-chatham-county-court',
        type: 'SECONDARY',
        title: "Chatham County, Georgia Court Records and Committee of Safety Minutes, 1775-1778",
        publisherOrHolder: 'Georgia Archives',
        credibilityTier: 'TIER2',
        notes:
          "Local government records from Savannah\'s county documenting the Patriot committee takeover, the expulsion of the Royal Governor, and the military preparations before the British capture. Provides the ground-level civic context.",
      },
      {
        id: 'src-savannah-ga-habersham-family-papers',
        type: 'SECONDARY',
        title: "The Habersham Family Papers: A Patriot Georgia Merchant Family in War",
        publisherOrHolder: 'Georgia Historical Society',
        publicationDate: new Date('1904-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Published papers of one of Savannah\'s leading Patriot families. The Habershams' letters trace the political and commercial impact of the British occupation on Savannah\'s Patriot mercantile community.",
      },
      // TIER 3
      {
        id: 'src-savannah-ga-wikipedia-siege-1779',
        type: 'TERTIARY',
        title: "Siege of Savannah (1779) -- Wikipedia",
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Siege_of_Savannah_(1779)',
        credibilityTier: 'TIER3',
        notes:
          "General reference entry on the Franco-American siege. The order of battle and tactical narrative are adequate for orientation. Cross-reference with Jones\'s documentary history and d\'Estaing\'s dispatches for accuracy.",
      },
      {
        id: 'src-savannah-ga-wikipedia-capture-1778',
        type: 'TERTIARY',
        title: "Capture of Savannah (1778) -- Wikipedia",
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Capture_of_Savannah_(1778)',
        credibilityTier: 'TIER3',
        notes:
          "General reference on the British capture of Savannah. The narrative of Campbell\'s flanking move through the swamp path is accurately represented. Cross-reference with Campbell\'s dispatch for British source detail.",
      },
      {
        id: 'src-savannah-ga-visit-savannah',
        type: 'TERTIARY',
        title: "Visit Savannah: Revolutionary War History",
        publisherOrHolder: 'Visit Savannah',
        url: 'https://www.visitsavannah.com/history',
        credibilityTier: 'TIER3',
        notes:
          'Tourism site with overview of Savannah\'s Revolutionary War heritage, identifying the Battlefield Park, the Colonial Park Cemetery (mass burial site from the 1779 siege), and the Pulaski Monument. Useful for visitor orientation.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Augusta -- Changed hands multiple times; recaptured by Patriots, June 1781
  // ─────────────────────────────────────────────────────────────────────────
  'us-ga-augusta': {
    sources: [
      // TIER 1
      {
        id: 'src-augusta-ga-pickens-elijah-clark-report',
        type: 'PRIMARY',
        title: "General Andrew Pickens and Colonel Elijah Clarke: Report on the Recapture of Augusta, June 1781",
        publisherOrHolder: 'National Archives and Records Administration',
        credibilityTier: 'TIER1',
        notes:
          "Joint report from the American commanders on the June 1781 siege of Augusta, which ended with the surrender of Fort Cornwallis and Fort Grierson. The primary American source on the final recapture of the town.",
      },
      {
        id: 'src-augusta-ga-british-garrison-records',
        type: 'PRIMARY',
        title: "British Garrison Papers: Augusta, Georgia, 1779-1781",
        publisherOrHolder: 'Public Record Office (National Archives, United Kingdom)',
        credibilityTier: 'TIER1',
        notes:
          "British garrison orders and correspondence from Augusta during the occupation period. Documents the construction of Fort Cornwallis and Fort Grierson, the Loyalist militia organization, and the final siege that ended British control of the Georgia interior.",
      },
      {
        id: 'src-augusta-ga-georgia-state-archives-augusta',
        type: 'PRIMARY',
        title: "Georgia Archives: Richmond County Records and Georgia Executive Council Papers, 1775-1782",
        publisherOrHolder: 'Georgia Archives',
        url: 'https://www.georgiaarchives.org/',
        credibilityTier: 'TIER1',
        notes:
          "State and county records from Augusta and Richmond County covering the full Revolutionary War period, including the multiple changes of control and the reconstitution of Georgia\'s Patriot government in Augusta after the fall of Savannah.",
      },
      {
        id: 'src-augusta-ga-pension-depositions-augusta',
        type: 'PRIMARY',
        title: "Pension Applications: Augusta and Richmond County Militia, Georgia",
        publisherOrHolder: 'National Archives and Records Administration',
        credibilityTier: 'TIER1',
        notes:
          "Pension applications from Georgia and South Carolina militia veterans who participated in the various actions at Augusta. The depositions describe the siege operations and the personal combat at Fort Grierson.",
      },
      {
        id: 'src-augusta-ga-browne-loyalist-papers',
        type: 'PRIMARY',
        title: "Thomas Browne Papers: Loyalist Superintendent of Indian Affairs, Augusta, 1780-1781",
        publisherOrHolder: 'Georgia Historical Society',
        credibilityTier: 'TIER1',
        notes:
          "Papers of the notorious Loyalist commander who held Augusta for the British. Browne\'s use of Creek and Cherokee allies and his reputation for brutality toward Patriot prisoners made the struggle for Augusta particularly vicious.",
      },
      // TIER 2
      {
        id: 'src-augusta-ga-lee-memoirs-augusta',
        type: 'SECONDARY',
        title: "Memoirs of the War in the Southern Department: Augusta Operations",
        publisherOrHolder: 'Bradford and Inskeep (Henry Lee)',
        publicationDate: new Date('1812-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Light Horse Harry Lee\'s Legion participated in the 1781 Augusta siege alongside Pickens and Clarke. Lee\'s account provides regimental-level detail on the Mayham Tower construction and the final assault on Fort Cornwallis.",
      },
      {
        id: 'src-augusta-ga-lambert-sc-loyalists-georgia',
        type: 'SECONDARY',
        title: "South Carolina Loyalists in the American Revolution: The Georgia Backcountry",
        publisherOrHolder: 'University of South Carolina Press (Robert S. Lambert)',
        publicationDate: new Date('1987-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Examines the Loyalist social geography of the South Carolina-Georgia border region around Augusta. Essential for understanding why the town changed hands so many times and the character of the backcountry civil war.",
      },
      {
        id: 'src-augusta-ga-cashin-kings-rangers',
        type: 'SECONDARY',
        title: "The King\'s Ranger: Thomas Brown and the American Revolution on the Southern Frontier",
        publisherOrHolder: 'University of Georgia Press (Edward J. Cashin)',
        publicationDate: new Date('1989-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Scholarly biography of the Loyalist commander who held Augusta for the British. Provides the fullest account of the British occupation and the siege operations from the Loyalist perspective, drawing on Browne\'s papers and British records.",
      },
      {
        id: 'src-augusta-ga-georgia-hist-quarterly-augusta',
        type: 'SECONDARY',
        title: "Augusta and the Georgia Backcountry in the American Revolution",
        publisherOrHolder: 'Georgia Historical Quarterly',
        publicationDate: new Date('1976-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Peer-reviewed article examining Augusta\'s role as the key to controlling the Georgia interior. Covers all three periods of control (Patriot, British, Patriot) and the impact of the shifting front on the civilian population.",
      },
      {
        id: 'src-augusta-ga-historic-augusta',
        type: 'INSTITUTIONAL',
        title: "Historic Augusta: Revolutionary War Sites and Collections",
        publisherOrHolder: 'Historic Augusta',
        url: 'https://www.historicaugusta.org/',
        credibilityTier: 'TIER2',
        notes:
          "The local historic preservation organization maintains interpretive resources on Augusta\'s Revolutionary War heritage, including the site of Fort Cornwallis and the Mackay House, used as a British headquarters during the occupation.",
      },
      {
        id: 'src-augusta-ga-colonial-dames-sc',
        type: 'INSTITUTIONAL',
        title: "National Society Colonial Dames of America in the State of Georgia: Revolutionary Records",
        publisherOrHolder: 'National Society Colonial Dames of America, Georgia',
        credibilityTier: 'TIER2',
        notes:
          "The Georgia NSCDA has compiled and published significant Revolutionary War records for the Augusta area, including transcripts of Richmond County committee minutes and Georgia Executive Council papers pertaining to the Augusta campaigns.",
      },
      // TIER 3
      {
        id: 'src-augusta-ga-wikipedia-battle-1781',
        type: 'TERTIARY',
        title: "Siege of Augusta (1781) -- Wikipedia",
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Siege_of_Augusta_(1781)',
        credibilityTier: 'TIER3',
        notes:
          "General reference entry on the June 1781 siege. The order of battle and tactical narrative are accurate in outline. Cross-reference with Lee\'s memoirs and Cashin\'s Browne biography for accuracy on the final assault.",
      },
      {
        id: 'src-augusta-ga-american-battlefield-trust',
        type: 'TERTIARY',
        title: "Augusta -- American Battlefield Trust",
        publisherOrHolder: 'American Battlefield Trust',
        url: 'https://www.battlefields.org/learn/revolutionary-war/battles/augusta',
        credibilityTier: 'TIER3',
        notes:
          'Visitor-oriented battlefield guide for the Augusta engagements. Provides maps, a summary narrative of all three actions at Augusta, and information on surviving sites.',
      },
    ],
  },
};
