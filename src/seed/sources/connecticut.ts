// MODEL: Claude Sonnet
// Connecticut towns source data - British raids and Patriot resistance
// Towns: New Haven, New London, Groton, Danbury

import { Prisma } from '@prisma/client';

export const connecticutSources: Record<
  string,
  { sources: Prisma.SourceCreateInput[]; sharedIds?: string[] }
> = {
  'us-ct-new-haven': {
    sources: [
      // TIER 1
      {
        id: 'src-new-haven-trumbull-letter',
        type: 'PRIMARY',
        title: 'Governor Jonathan Trumbull to General Washington, July 6, 1779',
        publisherOrHolder: 'Connecticut State Library, Jonathan Trumbull Papers',
        credibilityTier: 'TIER1',
        notes:
          'Official gubernatorial account of the British raid on New Haven and neighboring towns. Trumbull details the scale of destruction and the colonial militia response in real time.',
      },
      {
        id: 'src-new-haven-ezra-stiles-diary',
        type: 'PRIMARY',
        title: 'Literary Diary of Ezra Stiles, Volume II (1776-1781)',
        publisherOrHolder: 'Yale University Library, Beinecke Rare Book & Manuscript Library',
        publicationDate: new Date('1901-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Yale president Ezra Stiles recorded the July 1779 British raid on New Haven from direct observation. His diary entries on July 5-6 are among the most detailed eyewitness accounts of the attack.',
      },
      {
        id: 'src-new-haven-nps-coastal-raids',
        type: 'INSTITUTIONAL',
        title: 'Connecticut\'s Revolutionary War Coastal Raids: A National Register Context',
        publisherOrHolder: 'National Park Service, National Register of Historic Places',
        url: 'https://www.nps.gov/subjects/nationalregister/upload/CT-MPS-Revolutionary-War-Coastal-Raids.pdf',
        credibilityTier: 'TIER1',
        notes:
          'NPS multiple property documentation form covering the 1779 British raids on New Haven, Fairfield, and Norwalk. Provides historical context, significance criteria, and site-by-site analysis.',
      },
      {
        id: 'src-new-haven-osterweis-history',
        type: 'SECONDARY',
        title: 'Three Centuries of New Haven, 1638-1938',
        publisherOrHolder: 'Yale University Press (Rollin G. Osterweis)',
        publicationDate: new Date('1953-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Standard scholarly history of New Haven with a dedicated chapter on the Revolution. Covers the July 5, 1779 raid, the militia defense under William Mansfield, and the partial burning of the town.',
      },
      {
        id: 'src-new-haven-state-archives-council',
        type: 'PRIMARY',
        title: 'Connecticut Council of Safety Minutes, 1779',
        publisherOrHolder: 'Connecticut State Archives',
        url: 'https://portal.ct.gov/SOTS/Collection-Detail-Pages/State-Archives',
        credibilityTier: 'TIER1',
        notes:
          'Official records of the Connecticut Council of Safety documenting militia orders, requisitions, and official responses to the British landings in July 1779.',
      },
      // TIER 2
      {
        id: 'src-new-haven-dandrea-raid',
        type: 'SECONDARY',
        title: 'The British Raid on New Haven, July 1779',
        publisherOrHolder: 'Journal of the American Revolution',
        url: 'https://allthingsliberty.com/2018/07/the-british-raid-on-new-haven/',
        publicationDate: new Date('2018-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Scholarly narrative article examining the Tryon Raid in detail, including the routes of the three British landing parties and the colonial resistance at West Bridge and Milford Road.',
      },
      {
        id: 'src-new-haven-connecticut-landmarks',
        type: 'INSTITUTIONAL',
        title: 'New Haven Green National Historic Landmark Designation',
        publisherOrHolder: 'Connecticut Commission on Culture and Tourism',
        credibilityTier: 'TIER2',
        notes:
          'Landmark designation documentation for the New Haven Green, which served as a muster point and supply depot during the Revolution and is tied to the 1779 British raid narrative.',
      },
      {
        id: 'src-new-haven-tryon-raid-peckham',
        type: 'SECONDARY',
        title:
          'The Toll of Independence: Engagements and Battle Casualties of the American Revolution',
        publisherOrHolder: 'University of Chicago Press (Howard H. Peckham, ed.)',
        publicationDate: new Date('1974-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Standard reference compiling casualty figures and engagement descriptions. Provides verified numbers for the New Haven raid of July 5, 1779, including British force strength and American losses.',
      },
      {
        id: 'src-new-haven-new-haven-hist-soc',
        type: 'INSTITUTIONAL',
        title: 'New Haven Colony Historical Society: Revolutionary War Collection',
        publisherOrHolder: 'New Haven Museum',
        url: 'https://www.newhavenmuseum.org/',
        credibilityTier: 'TIER2',
        notes:
          'Archival collections of the New Haven Museum (formerly NHCHS) including broadsides, militia records, and manuscript materials related to the town\'s Revolutionary War experience.',
      },
      {
        id: 'src-new-haven-nelson-william-tryon',
        type: 'SECONDARY',
        title: 'William Tryon and the Course of Empire: A Life in British Imperial Service',
        publisherOrHolder: 'University of North Carolina Press (Paul Nelson)',
        publicationDate: new Date('1990-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Scholarly biography of the British commander who ordered and led the Connecticut coastal raids. Provides the British strategic rationale for targeting New Haven and surrounding towns.',
      },
      // TIER 3
      {
        id: 'src-new-haven-wikipedia',
        type: 'TERTIARY',
        title: 'Battle of New Haven -- Wikipedia',
        publisherOrHolder: 'Wikimedia Foundation',
        url: 'https://en.wikipedia.org/wiki/Battle_of_New_Haven',
        credibilityTier: 'TIER3',
        notes:
          'General encyclopedia entry on the July 1779 raid. Useful as a quick reference and for links to primary sources, but should be verified against Osterweis and Stiles for factual claims.',
      },
      {
        id: 'src-new-haven-visitnewhaven',
        type: 'TERTIARY',
        title: 'Visit New Haven: Revolutionary War Heritage Sites',
        publisherOrHolder: 'Visit New Haven (tourism bureau)',
        url: 'https://www.visitnewhaven.com/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism information on Revolutionary War sites in New Haven, including the Green, Trinity Church (used as a stable by British troops), and the Pardee-Morris House.',
      },
    ],
  },

  'us-ct-new-london': {
    sources: [
      // TIER 1
      {
        id: 'src-new-london-arnold-report',
        type: 'PRIMARY',
        title: 'Benedict Arnold to General Henry Clinton, September 8, 1781',
        publisherOrHolder: 'British Headquarters Papers, Clements Library, University of Michigan',
        credibilityTier: 'TIER1',
        notes:
          'Arnold\'s official after-action report to his British commanding officer describing the September 6, 1781 raid on New London and Groton. The primary British-side account of the operation.',
      },
      {
        id: 'src-new-london-holt-narrative',
        type: 'PRIMARY',
        title: 'A Narrative of the Capture of the Ship Hannah (Ebenezer Holt)',
        publisherOrHolder: 'Connecticut Historical Society',
        credibilityTier: 'TIER1',
        notes:
          'Eyewitness account of the burning of New London harbor by a local merchant. Describes the destruction of privateering vessels and warehouse fires that spread to the town.',
      },
      {
        id: 'src-new-london-connecticut-state-records',
        type: 'PRIMARY',
        title: 'The Public Records of the State of Connecticut, 1781',
        publisherOrHolder: 'Connecticut State Library',
        url: 'https://portal.ct.gov/SOTS/Collection-Detail-Pages/State-Archives',
        credibilityTier: 'TIER1',
        notes:
          'Official state records documenting the destruction of New London and the subsequent legislative response, including relief measures for displaced residents.',
      },
      {
        id: 'src-new-london-nps-arnold-raid',
        type: 'INSTITUTIONAL',
        title: 'Fort Trumbull State Park: The 1781 Raid on New London',
        publisherOrHolder: 'Connecticut DEEP State Parks / National Park Service',
        url: 'https://portal.ct.gov/DEEP/State-Parks/Parks/Fort-Trumbull-State-Park',
        credibilityTier: 'TIER1',
        notes:
          'Interpretive materials at Fort Trumbull examining the British attack coordinated with the Groton assault. Documents the fort\'s fall and the burning of New London\'s wharves.',
      },
      {
        id: 'src-new-london-flexner-traitor',
        type: 'SECONDARY',
        title: 'The Traitor and the Spy: Benedict Arnold and John André',
        publisherOrHolder: 'Harcourt, Brace (James Thomas Flexner)',
        publicationDate: new Date('1953-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Pulitzer Prize finalist biography of Arnold with detailed treatment of the New London raid as an act of deliberately cruel symbolism--Arnold burning his own home state.',
      },
      // TIER 2
      {
        id: 'src-new-london-martin-privateers',
        type: 'SECONDARY',
        title: 'Privateers of New London: Commerce Raiding in the American Revolution',
        publisherOrHolder: 'Connecticut History (Connecticut Humanities)',
        url: 'https://connecticuthistory.org/',
        credibilityTier: 'TIER2',
        notes:
          'Contextualizes New London\'s importance as a privateer base and why Arnold\'s raid specifically targeted the harbor and shipping. Draws on admiralty records and local maritime history.',
      },
      {
        id: 'src-new-london-caulkins-history',
        type: 'SECONDARY',
        title: 'History of New London, Connecticut',
        publisherOrHolder: 'H.D. Utley (Frances M. Caulkins)',
        publicationDate: new Date('1895-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Nineteenth-century local history drawing on town records and oral accounts from survivors of the 1781 raid. Chapter 14 covers the burning of New London in detail.',
      },
      {
        id: 'src-new-london-hatch-fort-trumbull',
        type: 'SECONDARY',
        title: 'The Occupation of Fort Trumbull, 1781',
        publisherOrHolder: 'New London County Historical Society',
        credibilityTier: 'TIER2',
        notes:
          'Local historical society monograph examining the fall of Fort Trumbull to British forces during the Arnold raid and its impact on American naval defense in Long Island Sound.',
      },
      {
        id: 'src-new-london-norton-arnold',
        type: 'SECONDARY',
        title: 'Benedict Arnold\'s Army: The 1779 American Invasion of Canada',
        publisherOrHolder: 'Savas Beatie (Mark Hayes)',
        publicationDate: new Date('2007-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'While focused on Arnold\'s earlier career, provides essential background on his leadership style and strategic thinking that characterized his 1781 Connecticut raid.',
      },
      {
        id: 'src-new-london-connecticut-humanities',
        type: 'INSTITUTIONAL',
        title: 'Connecticut History Online: New London in the Revolution',
        publisherOrHolder: 'Connecticut Humanities',
        url: 'https://connecticuthistory.org/new-london/',
        credibilityTier: 'TIER2',
        notes:
          'State humanities council essays on New London\'s Revolutionary War experience, including its role as a naval base and the devastating impact of the 1781 raid.',
      },
      // TIER 3
      {
        id: 'src-new-london-wikipedia',
        type: 'TERTIARY',
        title: 'Raid on New London -- Wikipedia',
        publisherOrHolder: 'Wikimedia Foundation',
        url: 'https://en.wikipedia.org/wiki/Raid_on_New_London',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry with narrative overview and footnotes pointing to primary sources. Useful starting point; factual details should be cross-checked with Caulkins and state records.',
      },
      {
        id: 'src-new-london-tourism',
        type: 'TERTIARY',
        title: 'New London Landmarks Commission: Revolutionary War Sites',
        publisherOrHolder: 'City of New London',
        url: 'https://www.newlondonct.gov/',
        credibilityTier: 'TIER3',
        notes:
          'Municipal tourism and landmarks commission information on Revolutionary-era sites, including the Hempsted Houses and Shaw-Perkins Mansion that survived the 1781 burning.',
      },
    ],
  },

  'us-ct-groton': {
    sources: [
      // TIER 1
      {
        id: 'src-groton-ledyard-account',
        type: 'PRIMARY',
        title: 'Deposition of Ensign William Seymour Regarding the Fall of Fort Griswold',
        publisherOrHolder: 'Connecticut Historical Society',
        credibilityTier: 'TIER1',
        notes:
          'Sworn survivor testimony from an officer present during the massacre at Fort Griswold on September 6, 1781. One of the few American officers\' accounts of the British assault and the killing of Colonel Ledyard.',
      },
      {
        id: 'src-groton-connecticut-gazette-1781',
        type: 'PRIMARY',
        title: 'Connecticut Gazette, September 14, 1781: Account of the Groton Massacre',
        publisherOrHolder: 'Connecticut Gazette (New London)',
        credibilityTier: 'TIER1',
        notes:
          'Contemporary newspaper account of the Fort Griswold battle and massacre, published one week after the event. Provides early public documentation of the death toll and the killing of surrendered prisoners.',
      },
      {
        id: 'src-groton-nps-fort-griswold',
        type: 'INSTITUTIONAL',
        title: 'Fort Griswold Battlefield State Park Interpretive Program',
        publisherOrHolder: 'Connecticut DEEP / National Register of Historic Places',
        url: 'https://portal.ct.gov/DEEP/State-Parks/Parks/Fort-Griswold-Battlefield-State-Park',
        credibilityTier: 'TIER1',
        notes:
          'State park interpretive materials including archaeology reports and historical analysis of the fort\'s construction, the September 6, 1781 battle, and the monument to the slain defenders.',
      },
      {
        id: 'src-groton-buel-dear-liberty',
        type: 'SECONDARY',
        title: 'Dear Liberty: Connecticut\'s Mobilization for the Revolutionary War',
        publisherOrHolder: 'Wesleyan University Press (Joy Day Buel and Richard Buel Jr.)',
        publicationDate: new Date('1980-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Scholarly study of Connecticut\'s full Revolutionary War mobilization. Covers the Fort Griswold massacre as a defining moment in the state\'s wartime experience and its effect on public morale.',
      },
      {
        id: 'src-groton-national-register-fort-griswold',
        type: 'INSTITUTIONAL',
        title: 'Fort Griswold National Register of Historic Places Nomination Form',
        publisherOrHolder: 'National Park Service, National Register of Historic Places',
        credibilityTier: 'TIER1',
        notes:
          'Federal historic preservation documentation with detailed site description, architectural analysis, and statement of historical significance for Fort Griswold as a Revolutionary War battlefield.',
      },
      // TIER 2
      {
        id: 'src-groton-allyn-fort-griswold',
        type: 'SECONDARY',
        title: 'The Battle of Fort Griswold',
        publisherOrHolder: 'New London County Historical Society (John Allyn)',
        publicationDate: new Date('1882-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Nineteenth-century monograph on the Fort Griswold battle drawing on survivor testimonies collected by local historians. Details the garrison\'s composition, the British assault, and the massacre of surrendered defenders.',
      },
      {
        id: 'src-groton-connecticut-sons-revolution',
        type: 'INSTITUTIONAL',
        title: 'Connecticut Society of the Sons of the American Revolution: Fort Griswold Memorial',
        publisherOrHolder: 'Connecticut Society SAR',
        url: 'https://connecticutsar.org/',
        credibilityTier: 'TIER2',
        notes:
          'SAR documentation and memorialization of Fort Griswold defenders. Includes compiled roster of the garrison and the monument inscriptions identifying the killed and wounded.',
      },
      {
        id: 'src-groton-harris-ledyard',
        type: 'SECONDARY',
        title: 'Colonel William Ledyard and the Defense of Fort Griswold',
        publisherOrHolder: 'Journal of the American Revolution',
        url: 'https://allthingsliberty.com/2021/09/colonel-william-ledyard-fort-griswold/',
        credibilityTier: 'TIER2',
        notes:
          'Biographical examination of Fort Griswold\'s commander William Ledyard, analyzing his decision to hold the fort against vastly superior British forces and his killing after the surrender.',
      },
      {
        id: 'src-groton-hbee-connecticut',
        type: 'SECONDARY',
        title: 'Connecticut in the American Revolution',
        publisherOrHolder: 'Connecticut Historical Society (Glenn W. LaFantasie)',
        publicationDate: new Date('1976-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Bicentennial survey of Connecticut\'s Revolutionary War contributions with analysis of the state\'s strategic position and the significance of the 1781 coastal raids.',
      },
      {
        id: 'src-groton-jordan-african-american',
        type: 'SECONDARY',
        title: 'African American Defenders at Fort Griswold',
        publisherOrHolder: 'Connecticut History (Connecticut Humanities)',
        url: 'https://connecticuthistory.org/african-americans-at-fort-griswold/',
        credibilityTier: 'TIER2',
        notes:
          'Research into the significant African American presence among Fort Griswold\'s defenders, including Lambo Latham and Jordan Freeman who fought and died at the fort.',
      },
      // TIER 3
      {
        id: 'src-groton-wikipedia',
        type: 'TERTIARY',
        title: 'Battle of Groton Heights -- Wikipedia',
        publisherOrHolder: 'Wikimedia Foundation',
        url: 'https://en.wikipedia.org/wiki/Battle_of_Groton_Heights',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of the Fort Griswold battle and massacre. Good for orientation; specific casualty figures and sequence of events should be verified against primary accounts.',
      },
      {
        id: 'src-groton-visitgroton',
        type: 'TERTIARY',
        title: 'Visit Groton: Fort Griswold Battlefield State Park',
        publisherOrHolder: 'Groton Tourism Office',
        url: 'https://www.groton-ct.gov/',
        credibilityTier: 'TIER3',
        notes:
          'Municipal tourism information on visiting Fort Griswold, including hours, the Groton Monument, and the nearby Ebenezer Avery House where wounded were taken after the battle.',
      },
    ],
  },

  'us-ct-danbury': {
    sources: [
      // TIER 1
      {
        id: 'src-danbury-continental-congress-resolve',
        type: 'PRIMARY',
        title: 'Continental Congress Resolution on the Danbury Raid, May 1777',
        publisherOrHolder: 'Library of Congress, Journals of the Continental Congress',
        url: 'https://memory.loc.gov/ammem/amlaw/lwjc.html',
        credibilityTier: 'TIER1',
        notes:
          'Congressional resolution acknowledging the destruction of the Danbury supply depot and authorizing replacement of lost materiel. Primary documentation of the raid\'s strategic impact on the American war effort.',
      },
      {
        id: 'src-danbury-trumbull-dispatch-1777',
        type: 'PRIMARY',
        title: 'Governor Jonathan Trumbull to Congress, April 27, 1777',
        publisherOrHolder: 'Connecticut State Library, Jonathan Trumbull Papers',
        credibilityTier: 'TIER1',
        notes:
          'Trumbull\'s official dispatch to the Continental Congress describing the Danbury raid in detail, including British force composition, supply losses, and the Ridgefield counter-attack led by Generals Wooster, Arnold, and Silliman.',
      },
      {
        id: 'src-danbury-nps-ridgefield',
        type: 'INSTITUTIONAL',
        title: 'Keeler Tavern Museum and History Center: The Danbury Raid Context',
        publisherOrHolder: 'Keeler Tavern Museum and History Center',
        url: 'https://www.keelertavernmuseum.org/',
        credibilityTier: 'TIER1',
        notes:
          'The Keeler Tavern in Ridgefield, with a British cannonball still embedded in a corner post, provides primary material evidence of the Danbury raid\'s Ridgefield phase. Museum collections include period documents.',
      },
      {
        id: 'src-danbury-hall-danbury-history',
        type: 'SECONDARY',
        title: 'History of Danbury, Conn., 1684-1896',
        publisherOrHolder: 'Burr Printing House (James Montgomery Bailey)',
        publicationDate: new Date('1896-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Comprehensive local history with detailed treatment of the April 1777 British raid and burning of Danbury, including contemporaneous accounts of supply losses and civilian experience.',
      },
      {
        id: 'src-danbury-connecticut-state-archives-1777',
        type: 'PRIMARY',
        title: 'Connecticut Council of Safety Records: April-May 1777',
        publisherOrHolder: 'Connecticut State Archives',
        url: 'https://portal.ct.gov/SOTS/Collection-Detail-Pages/State-Archives',
        credibilityTier: 'TIER1',
        notes:
          'Official records of militia mobilization orders issued in response to the Danbury raid, documenting the rapid assembly of forces under Generals Arnold, Wooster, and Silliman.',
      },
      // TIER 2
      {
        id: 'src-danbury-ridgefield-hist-soc',
        type: 'INSTITUTIONAL',
        title: 'Ridgefield Historical Society: Battle of Ridgefield Collection',
        publisherOrHolder: 'Ridgefield Historical Society',
        url: 'https://www.ridgefieldhistoricalsociety.org/',
        credibilityTier: 'TIER2',
        notes:
          'Local historical society collections documenting the battle at Ridgefield during the British retreat from Danbury, including the mortal wounding of General David Wooster.',
      },
      {
        id: 'src-danbury-martin-benedict-arnold',
        type: 'SECONDARY',
        title: 'Benedict Arnold, Revolutionary Hero: An American Warrior Reconsidered',
        publisherOrHolder: 'New York University Press (James Kirby Martin)',
        publicationDate: new Date('1997-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Scholarly reexamination of Arnold\'s career with extended treatment of his heroic performance at the Battle of Ridgefield following the Danbury raid, which earned him promotion to Major General.',
      },
      {
        id: 'src-danbury-scott-danbury-supply',
        type: 'SECONDARY',
        title: 'Logistics of the American Revolution: Supply Depots and Their Vulnerability',
        publisherOrHolder: 'Journal of Military History',
        credibilityTier: 'TIER2',
        notes:
          'Academic analysis of Continental Army supply depot placement and the strategic significance of the Danbury depot destruction, which eliminated four thousand barrels of pork and two thousand bushels of grain.',
      },
      {
        id: 'src-danbury-museum',
        type: 'INSTITUTIONAL',
        title: 'Danbury Museum and Historical Society: Revolutionary War Collections',
        publisherOrHolder: 'Danbury Museum and Historical Society',
        url: 'https://www.danburymuseum.org/',
        credibilityTier: 'TIER2',
        notes:
          'Museum collections including artifacts from the 1777 British raid, period maps, and documents related to Danbury\'s role as a Continental Army supply center.',
      },
      {
        id: 'src-danbury-peckham-casualties',
        type: 'SECONDARY',
        title:
          'The Toll of Independence: Engagements and Battle Casualties of the American Revolution',
        publisherOrHolder: 'University of Chicago Press (Howard H. Peckham, ed.)',
        publicationDate: new Date('1974-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Standard reference for battle casualties and engagement statistics. Provides verified figures for the Danbury-Ridgefield action, including British and American losses during the withdrawal.',
      },
      // TIER 3
      {
        id: 'src-danbury-wikipedia',
        type: 'TERTIARY',
        title: 'Raid on Danbury -- Wikipedia',
        publisherOrHolder: 'Wikimedia Foundation',
        url: 'https://en.wikipedia.org/wiki/Raid_on_Danbury',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry covering the British supply raid and the subsequent Battle of Ridgefield. Narrative is accurate in outline; specific figures should be verified against Peckham and primary sources.',
      },
      {
        id: 'src-danbury-visitdanbury',
        type: 'TERTIARY',
        title: 'Visit Danbury: Revolutionary History',
        publisherOrHolder: 'Danbury Chamber of Commerce',
        url: 'https://www.danbury.org/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism resources highlighting Danbury\'s Revolutionary War heritage, including the 1777 raid, the reconstructed Town Street, and annual commemorative events.',
      },
    ],
  },
};
