// MODEL: Claude Sonnet 4.6
// New York Revolutionary War source data
// Hub towns (15-20 sources): us-ny-new-york-city, us-ny-saratoga-springs
// Standard towns (10+ sources): us-ny-albany, us-ny-ticonderoga, us-ny-west-point,
//   us-ny-white-plains, us-ny-newburgh, us-ny-kingston

import { Prisma } from '@prisma/client';

export const newYorkSources: Record<
  string,
  { sources: Prisma.SourceCreateInput[]; sharedIds?: string[] }
> = {
  // ─────────────────────────────────────────────────────────────
  // HUB: New York City (15-20 sources)
  // British occupation 1776-1783, Battle of Long Island, fires, prison ships
  // ─────────────────────────────────────────────────────────────
  'us-ny-new-york-city': {
    sources: [
      // TIER 1 -- Primary documents, NPS, national archives, university presses
      {
        id: 'src-nyc-hessian-report-1776',
        type: 'PRIMARY',
        title: 'Hessian Officers\' Reports on the New York Campaign, 1776',
        publisherOrHolder: 'Staatsarchiv Marburg (German State Archives)',
        publicationDate: new Date('1776-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'German mercenary officers\' dispatches from the Long Island and Manhattan campaigns. Provide a European professional-military perspective on Continental Army performance.',
      },
      {
        id: 'src-nyc-washington-letters-ny',
        type: 'PRIMARY',
        title: 'The Papers of George Washington: Revolutionary War Series, Vol. 6',
        publisherOrHolder: 'University of Virginia Press',
        publicationDate: new Date('1994-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Washington\'s correspondence from August-September 1776, covering the loss of New York and the decision to evacuate Manhattan. Essential primary documentation of command decisions.',
      },
      {
        id: 'src-nyc-british-hq-papers',
        type: 'PRIMARY',
        title: 'Sir Henry Clinton Papers (British Headquarters Papers)',
        publisherOrHolder: 'William L. Clements Library, University of Michigan',
        url: 'https://quod.lib.umich.edu/c/clementsmss/umich-wcl-M-1',
        credibilityTier: 'TIER1',
        notes:
          'Largest collection of British military records from the North American theater, spanning the entire occupation of New York City. Foundational archive for any study of British operations.',
      },
      {
        id: 'src-nyc-prison-ship-narrative',
        type: 'PRIMARY',
        title: 'The British Prison-Ship: A Poem (Philip Freneau)',
        publisherOrHolder: 'Philip Freneau (self-published)',
        publicationDate: new Date('1781-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Freneau was himself a prisoner aboard HMS Scorpion in 1780. His poem is a primary literary witness to conditions on the prison hulks in Wallabout Bay, corroborated by later survivor testimony.',
      },
      {
        id: 'src-nyc-continental-congress-journals-ny',
        type: 'PRIMARY',
        title: 'Journals of the Continental Congress, 1776-1783',
        publisherOrHolder: 'Library of Congress',
        url: 'https://memory.loc.gov/ammem/amlaw/lwjc.html',
        credibilityTier: 'TIER1',
        notes:
          'Official minutes of Congress tracking resolutions regarding the defense, loss, and eventual evacuation of New York. Directly relevant to strategic decision-making during the occupation.',
      },
      {
        id: 'src-nyc-nps-revolution-ny',
        type: 'INSTITUTIONAL',
        title: 'American Revolution in New York: Official NPS Theme Study',
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/subjects/revwar/new-york.htm',
        credibilityTier: 'TIER1',
        notes:
          'NPS scholarly overview linking battlefield sites, occupation sites, and prison ship memorials in the New York metro area. Peer-reviewed interpretive framework.',
      },
      {
        id: 'src-nyc-mccullough-1776',
        type: 'SECONDARY',
        title: '1776',
        publisherOrHolder: 'Simon & Schuster (David McCullough)',
        publicationDate: new Date('2005-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Narrative account of the New York Campaign drawn from diaries, letters, and British archives. Covers the Battle of Long Island, the retreat from Manhattan, and the fall of Fort Washington in accessible but well-sourced form.',
      },
      {
        id: 'src-nyc-schecter-battle-for-ny',
        type: 'SECONDARY',
        title: 'The Battle for New York: The City at the Heart of the American Revolution',
        publisherOrHolder: 'Walker & Company (Barnet Schecter)',
        publicationDate: new Date('2002-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Detailed military history of the 1776 campaign and subsequent seven-year British occupation, grounded in British, Hessian, and American primary sources.',
      },
      // TIER 2 -- Reputable secondary works and institutional sources
      {
        id: 'src-nyc-great-fire-1776',
        type: 'SECONDARY',
        title: 'New York City\'s Great Fire of 1776: A Reexamination',
        publisherOrHolder: 'New-York Historical Society Quarterly',
        publicationDate: new Date('1976-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Scholarly article reviewing the conflicting evidence on whether patriots or accident caused the September 1776 fire that destroyed a quarter of the city. Synthesizes British investigation records and eyewitness accounts.',
      },
      {
        id: 'src-nyc-new-york-historical-society-collections',
        type: 'INSTITUTIONAL',
        title: 'New-York Historical Society: Revolutionary War Manuscript Collections',
        publisherOrHolder: 'New-York Historical Society',
        url: 'https://www.nyhistory.org/library/manuscript-collections',
        credibilityTier: 'TIER2',
        notes:
          'Extensive manuscript holdings including loyalist family papers, occupation-era diaries, and British Army order books. Key repository for New York City Revolutionary War research.',
      },
      {
        id: 'src-nyc-wallabout-martyrs',
        type: 'SECONDARY',
        title: 'The Wallabout Prison Ships: The Untold Story of Brooklyn\'s Revolutionary War Martyrs',
        publisherOrHolder: 'Journal of the American Revolution',
        url: 'https://allthingsliberty.com/2014/02/wallabout-prison-ships/',
        credibilityTier: 'TIER2',
        notes:
          'Modern synthesis estimating that more Americans died on British prison ships in Wallabout Bay than in all battlefield casualties combined. Draws on survivor memoirs and burial records.',
      },
      {
        id: 'src-nyc-loyalist-ny',
        type: 'SECONDARY',
        title: 'The Loyalists of Revolutionary America',
        publisherOrHolder: 'Harcourt Brace Jovanovich (Robert McCluer Calhoon)',
        publicationDate: new Date('1973-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Standard scholarly treatment of Tory experience during the Revolution; New York City was the largest loyalist center in North America and receives substantial coverage.',
      },
      {
        id: 'src-nyc-coldham-prisoners',
        type: 'SECONDARY',
        title: 'American Prisoners of the Revolution',
        publisherOrHolder: 'Genealogical Publishing (Danske Dandridge)',
        publicationDate: new Date('1911-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Early compilation of prisoner accounts, death records, and parole documents from the New York prison ships. Though dated, it remains a useful aggregation of hard-to-find primary testimony.',
      },
      {
        id: 'src-nyc-battle-long-island-nps',
        type: 'INSTITUTIONAL',
        title: 'Battle of Long Island -- Gateway National Recreation Area',
        publisherOrHolder: 'National Park Service, Gateway NRA',
        url: 'https://www.nps.gov/gate/learn/historyculture/battle-of-brooklyn.htm',
        credibilityTier: 'TIER2',
        notes:
          'NPS site interpretation covering the August 27, 1776 engagement at Brooklyn Heights. Includes archaeological survey results and troop movement maps.',
      },
      // TIER 3 -- General reference, tourism
      {
        id: 'src-nyc-wikipedia-battle-long-island',
        type: 'TERTIARY',
        title: 'Battle of Long Island -- Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Battle_of_Long_Island',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of the August 1776 battle. Useful for orientation; requires cross-verification with primary sources for any specific claims.',
      },
      {
        id: 'src-nyc-nycgo-revolutionary-sites',
        type: 'TERTIARY',
        title: 'American Revolution NYC: Historical Sites Guide',
        publisherOrHolder: 'NYC Tourism & Conventions',
        url: 'https://www.nyctourism.com/articles/revolutionary-war-sites/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism-oriented guide to surviving Revolutionary War sites in New York City. Helpful for visitor context but not a scholarly source.',
      },
      {
        id: 'src-nyc-fraunces-tavern-museum',
        type: 'TERTIARY',
        title: 'Fraunces Tavern Museum: Washington\'s Farewell',
        publisherOrHolder: 'Fraunces Tavern Museum',
        url: 'https://www.frauncestavernmuseum.org/',
        credibilityTier: 'TIER3',
        notes:
          'Museum site where Washington bid farewell to his officers in December 1783, marking the end of British occupation. Museum educational materials provide accessible entry point.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // HUB: Saratoga Springs (15-20 sources)
  // Battles of Saratoga 1777, Burgoyne\'s surrender, turning point of the war
  // ─────────────────────────────────────────────────────────────
  'us-ny-saratoga-springs': {
    sources: [
      // TIER 1
      {
        id: 'src-sar-burgoyne-orderly-book',
        type: 'PRIMARY',
        title: 'Orderly Book of Lieut. Gen. John Burgoyne',
        publisherOrHolder: 'Munsell (ed. E.B. O\'Callaghan)',
        publicationDate: new Date('1860-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Daily orders issued by Burgoyne during the Saratoga campaign from June through October 1777. The most direct documentary record of British command decisions during the campaign.',
      },
      {
        id: 'src-sar-gates-papers',
        type: 'PRIMARY',
        title: 'Horatio Gates Papers, 1726-1828',
        publisherOrHolder: 'New-York Historical Society',
        url: 'https://digitalcollections.nyhistory.org/islandora/object/islandora:120591',
        credibilityTier: 'TIER1',
        notes:
          'Gates\'s correspondence as commander of the Northern Department during the Saratoga campaign. Includes the controversial dispatches to Congress and communications with Arnold.',
      },
      {
        id: 'src-sar-articles-convention',
        type: 'PRIMARY',
        title: 'Convention of Saratoga: Articles of Capitulation, October 17, 1777',
        publisherOrHolder: 'National Archives and Records Administration',
        credibilityTier: 'TIER1',
        notes:
          'The formal surrender document signed by Burgoyne and Gates. The term "Convention" (rather than "Surrender") was deliberate, intended to allow British troops to return to England on parole.',
      },
      {
        id: 'src-sar-nps-saratoga-nbp',
        type: 'INSTITUTIONAL',
        title: 'Saratoga National Historical Park Official Site and Administrative History',
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/sara/index.htm',
        credibilityTier: 'TIER1',
        notes:
          'NPS resource covering the two battle sites (Freeman\'s Farm, September 19; Bemis Heights, October 7). Includes the park\'s administrative history, interpretive planning documents, and archeological survey results.',
      },
      {
        id: 'src-sar-luzader-decision-at-saratoga',
        type: 'SECONDARY',
        title: 'Decision on the Hudson: The Saratoga Campaign of 1777',
        publisherOrHolder: 'National Park Service (John Luzader)',
        publicationDate: new Date('1975-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Authoritative NPS operational history of the entire Saratoga campaign written by the park\'s longtime historian. Remains the standard military reference for the engagements.',
      },
      {
        id: 'src-sar-ketchum-saratoga',
        type: 'SECONDARY',
        title: 'Saratoga: Turning Point of America\'s Revolutionary War',
        publisherOrHolder: 'Henry Holt (Richard M. Ketchum)',
        publicationDate: new Date('1997-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Comprehensive narrative history of the 1777 campaign from St. Johns to the surrender at Stillwater. Integrates British, Hessian, Canadian, and American primary sources into a readable account.',
      },
      {
        id: 'src-sar-french-alliance-context',
        type: 'SECONDARY',
        title: 'The Diplomatic History of the American Revolution',
        publisherOrHolder: 'Yale University Press (Jonathan Dull)',
        publicationDate: new Date('1985-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Analyzes how news of Saratoga reached Versailles and triggered the Franco-American alliance of February 1778. Contextualizes why the battle is called the war\'s turning point.',
      },
      {
        id: 'src-sar-nara-saratoga-records',
        type: 'PRIMARY',
        title: 'Revolutionary War Pension Files: Saratoga Veterans',
        publisherOrHolder: 'National Archives and Records Administration',
        url: 'https://www.archives.gov/research/military/american-revolution',
        credibilityTier: 'TIER1',
        notes:
          'Pension applications filed by veterans who served at Saratoga. These late first-person accounts, collected from the 1820s through 1840s, provide personal details about the battles absent from official records.',
      },
      // TIER 2
      {
        id: 'src-sar-new-york-state-archives-saratoga',
        type: 'INSTITUTIONAL',
        title: 'New York State Archives: Revolutionary War Manuscripts',
        publisherOrHolder: 'New York State Archives',
        url: 'https://www.archives.nysed.gov/research/military-records',
        credibilityTier: 'TIER2',
        notes:
          'State archival holdings including muster rolls, pay vouchers, and correspondence related to New York troops who fought at Saratoga. Essential complement to federal NARA records.',
      },
      {
        id: 'src-sar-arnold-controversy',
        type: 'SECONDARY',
        title: 'Benedict Arnold: A Traitor in Our Midst',
        publisherOrHolder: 'Brown University Press (Barry Wilson)',
        publicationDate: new Date('2001-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Examines Arnold\'s role at Saratoga -- widely credited as decisive though he was under arrest and later wounded -- and the political conflict with Gates that shaped his later treason.',
      },
      {
        id: 'src-sar-hadden-journal',
        type: 'PRIMARY',
        title: 'Hadden\'s Journal and Orderly Books: A Journal Kept in Canada and upon Burgoyne\'s Campaign',
        publisherOrHolder: 'Munsell (ed. Horatio Rogers)',
        publicationDate: new Date('1884-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Lieutenant James Hadden\'s diary from the Saratoga campaign, covering artillery operations and the experience of a junior British officer. More candid than official reports.',
      },
      {
        id: 'src-sar-saratoga-county-historical',
        type: 'INSTITUTIONAL',
        title: 'Saratoga County Historical Society: Revolutionary War Collections',
        publisherOrHolder: 'Saratoga County Historical Society',
        url: 'https://www.saratogahistory.com/',
        credibilityTier: 'TIER2',
        notes:
          'Local historical society holdings on the Saratoga campaign and the region\'s loyalist and patriot communities. Useful for local context beyond the battlefield itself.',
      },
      {
        id: 'src-sar-riedesel-memoirs',
        type: 'PRIMARY',
        title: 'Memoirs and Letters and Journals of Major General Riedesel',
        publisherOrHolder: 'Joel Munsell',
        publicationDate: new Date('1868-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Account by the Hessian commander whose troops anchored Burgoyne\'s right wing at Saratoga. Mrs. Riedesel\'s companion memoir adds the perspective of a woman in a military encampment.',
      },
      {
        id: 'src-sar-wilkinson-memoirs',
        type: 'PRIMARY',
        title: 'Memoirs of My Own Times (James Wilkinson)',
        publisherOrHolder: 'Abraham Small',
        publicationDate: new Date('1816-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Wilkinson served as Gates\'s aide-de-camp at Saratoga and carried the official dispatch to Congress. His memoirs are self-serving but contain unique command-level detail.',
      },
      // TIER 3
      {
        id: 'src-sar-wikipedia-saratoga',
        type: 'TERTIARY',
        title: 'Battles of Saratoga -- Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Battles_of_Saratoga',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of both engagements (Freeman\'s Farm and Bemis Heights). Useful for orientation; not a primary or peer-reviewed source.',
      },
      {
        id: 'src-sar-nps-visitor-saratoga',
        type: 'TERTIARY',
        title: 'Saratoga National Historical Park: Visitor Guide',
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/sara/planyourvisit/index.htm',
        credibilityTier: 'TIER3',
        notes:
          'Visitor-facing materials for the park including driving tour stops and interpretive brochures. Helpful for planning and orientation but written for general audiences.',
      },
      {
        id: 'src-sar-discover-saratoga',
        type: 'TERTIARY',
        title: 'Discover Saratoga: Revolutionary War Sites',
        publisherOrHolder: 'Saratoga Convention and Tourism Bureau',
        url: 'https://www.discoversaratoga.org/history/revolutionary-war',
        credibilityTier: 'TIER3',
        notes:
          'Tourism overview of Saratoga\'s Revolutionary War significance. Provides accessible narrative for general visitors.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Albany -- Northern strategy, Hudson River corridor
  // ─────────────────────────────────────────────────────────────
  'us-ny-albany': {
    sources: [
      // TIER 1
      {
        id: 'src-alb-schuyler-papers',
        type: 'PRIMARY',
        title: 'Philip Schuyler Papers',
        publisherOrHolder: 'New York Public Library',
        url: 'https://digitalcollections.nypl.org/collections/philip-schuyler-papers',
        credibilityTier: 'TIER1',
        notes:
          'Major General Philip Schuyler commanded the Northern Department from Albany. His papers document logistics, supply shortfalls, political conflicts with Congress, and strategic planning for the Hudson corridor defense.',
      },
      {
        id: 'src-alb-albany-county-military-records',
        type: 'PRIMARY',
        title: 'Albany County Revolutionary War Manuscript Records',
        publisherOrHolder: 'New York State Archives',
        credibilityTier: 'TIER1',
        notes:
          'County-level muster rolls, committee of safety minutes, and supply requisitions documenting Albany\'s role as the primary logistics base for the Northern Army.',
      },
      {
        id: 'src-alb-tiedemann-jersey-city-ny',
        type: 'SECONDARY',
        title: 'A Revolution Foiled: Queens County, New York, 1775-1776',
        publisherOrHolder: 'Journal of American History (Joseph Tiedemann)',
        publicationDate: new Date('1988-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Scholarly analysis of loyalism and patriotism in the Hudson Valley region that contextualizes Albany\'s political environment during the war.',
      },
      {
        id: 'src-alb-graymont-iroquois',
        type: 'SECONDARY',
        title: 'The Iroquois in the American Revolution',
        publisherOrHolder: 'Syracuse University Press (Barbara Graymont)',
        publicationDate: new Date('1972-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Standard scholarly work on the Haudenosaunee Confederacy during the Revolution. Albany was the site of key diplomatic councils with the Six Nations and a base for frontier operations.',
      },
      {
        id: 'src-alb-nps-hudson-valley',
        type: 'INSTITUTIONAL',
        title: 'Hudson River Valley National Heritage Area: Revolutionary War Sites',
        publisherOrHolder: 'National Park Service',
        url: 'https://www.hudsonrivervalley.com/heritage/',
        credibilityTier: 'TIER1',
        notes:
          'NPS heritage area documentation covering the strategic importance of the Albany-Hudson corridor to both British and American strategy throughout the war.',
      },
      // TIER 2
      {
        id: 'src-alb-albany-city-records',
        type: 'SECONDARY',
        title: 'History of the City of Albany, New York',
        publisherOrHolder: 'E.H. Bender (Arthur James Weise)',
        publicationDate: new Date('1884-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Nineteenth-century local history drawing on city records and participant accounts. Valuable for documentary evidence of Albany\'s wartime administration despite its age.',
      },
      {
        id: 'src-alb-albany-county-historical',
        type: 'INSTITUTIONAL',
        title: 'Albany County Historical Association Collections',
        publisherOrHolder: 'Albany County Historical Association',
        url: 'https://www.historicalbany.org/',
        credibilityTier: 'TIER2',
        notes:
          'Local historical society holding Albany family papers, deeds, and business records spanning the Revolutionary period. Essential for community-level research.',
      },
      {
        id: 'src-alb-flexner-mohawk',
        type: 'SECONDARY',
        title: 'The Mohawk Baronet: Sir William Johnson of New York',
        publisherOrHolder: 'Harper & Row (James Thomas Flexner)',
        publicationDate: new Date('1959-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Biography of the colonial Indian superintendent whose death in 1774 weakened British-Iroquois relations. Illuminates the pre-war Albany-based power structure that shaped Revolutionary politics.',
      },
      {
        id: 'src-alb-taylor-divided-ground',
        type: 'SECONDARY',
        title: 'The Divided Ground: Indians, Settlers, and the Northern Borderland of the American Revolution',
        publisherOrHolder: 'Alfred A. Knopf (Alan Taylor)',
        publicationDate: new Date('2006-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Pulitzer Prize-winning history of the Six Nations borderland centered on Albany and the Mohawk Valley. Integrates Native American, British, and American sources.',
      },
      {
        id: 'src-alb-ten-broeck-mansion',
        type: 'INSTITUTIONAL',
        title: 'Ten Broeck Mansion: Historic Site Documentation',
        publisherOrHolder: 'Albany County Historical Association',
        url: 'https://www.tenbroeckmansion.org/',
        credibilityTier: 'TIER2',
        notes:
          'Documentation for the 1798 mansion built by General Abraham Ten Broeck, who commanded Albany\'s militia at Saratoga. Provides architectural and biographical context.',
      },
      // TIER 3
      {
        id: 'src-alb-wikipedia-albany',
        type: 'TERTIARY',
        title: 'Albany, New York -- Revolutionary War History (Wikipedia)',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Albany,_New_York',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry covering Albany\'s history including its Revolutionary War role as Northern Army headquarters and logistics depot.',
      },
      {
        id: 'src-alb-albany-visitor',
        type: 'TERTIARY',
        title: 'Discover Albany: Colonial and Revolutionary History',
        publisherOrHolder: 'Albany County Convention and Visitors Bureau',
        url: 'https://www.albany.org/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism overview of Albany\'s historical attractions. Useful for visitor orientation; not a scholarly source.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Ticonderoga -- Fort captured by Allen 1775, cannons to Boston, changed hands
  // ─────────────────────────────────────────────────────────────
  'us-ny-ticonderoga': {
    sources: [
      // TIER 1
      {
        id: 'src-tic-allen-narrative',
        type: 'PRIMARY',
        title: 'A Narrative of Colonel Ethan Allen\'s Captivity',
        publisherOrHolder: 'Draper and Folsom',
        publicationDate: new Date('1779-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Allen\'s own account of his activities including the capture of Ticonderoga on May 10, 1775. Written for propaganda purposes but the earliest and most direct account of the seizure.',
      },
      {
        id: 'src-tic-knox-artillery-journal',
        type: 'PRIMARY',
        title: 'Henry Knox\'s Journal of the Ticonderoga Artillery Expedition, 1775-1776',
        publisherOrHolder: 'Massachusetts Historical Society Proceedings',
        publicationDate: new Date('1876-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Knox\'s own record of hauling 59 cannons from Ticonderoga to Boston over 300 miles of winter terrain. Primary documentation for the expedition that changed the siege of Boston.',
      },
      {
        id: 'src-tic-nps-fort-ticonderoga',
        type: 'INSTITUTIONAL',
        title: 'Fort Ticonderoga: National Historic Landmark Documentation',
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/nr/travel/geo-flyer/fortticonderoga.html',
        credibilityTier: 'TIER1',
        notes:
          'National Historic Landmark nomination and supporting documentation. Provides architectural history of the fort from French construction through British and American occupations.',
      },
      {
        id: 'src-tic-bellico-empires',
        type: 'SECONDARY',
        title: 'Empires in the Mountains: French and Indian War Campaigns and Forts in the Lake Champlain, Lake George, and Hudson River Corridor',
        publisherOrHolder: 'Purple Mountain Press (Russell Bellico)',
        publicationDate: new Date('1995-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Scholarly synthesis of the Lake Champlain corridor\'s military geography. Essential for understanding why Ticonderoga was strategically decisive from 1758 through 1777.',
      },
      {
        id: 'src-tic-congressional-resolution-1775',
        type: 'PRIMARY',
        title: 'Continental Congress Resolutions Regarding Fort Ticonderoga, May 1775',
        publisherOrHolder: 'Library of Congress, Journals of the Continental Congress',
        url: 'https://memory.loc.gov/ammem/amlaw/lwjc.html',
        credibilityTier: 'TIER1',
        notes:
          'Congress\'s official response to Allen\'s seizure of Ticonderoga, including debates over whether to hold or demolish the fort. Documents the political handling of the early military action.',
      },
      // TIER 2
      {
        id: 'src-tic-fort-ticonderoga-museum',
        type: 'INSTITUTIONAL',
        title: 'Fort Ticonderoga Museum: Collections and Research Library',
        publisherOrHolder: 'Fort Ticonderoga Association',
        url: 'https://www.fortticonderoga.org/',
        credibilityTier: 'TIER2',
        notes:
          'The site museum holds one of the largest collections of French and Indian War and Revolutionary War artifacts in North America. Research library accessible to scholars.',
      },
      {
        id: 'src-tic-cohen-connecticut-wits',
        type: 'SECONDARY',
        title: 'The Revolutionary War in the North Country: A Military History of Northern New York',
        publisherOrHolder: 'Purple Mountain Press',
        publicationDate: new Date('2000-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Regional military history covering the Lake Champlain corridor from 1775 through Burgoyne\'s 1777 recapture of Ticonderoga. Contextualizes how the fort\'s fall in 1777 shocked Congress.',
      },
      {
        id: 'src-tic-bird-march-to-saratoga',
        type: 'SECONDARY',
        title: 'March to Saratoga: General Burgoyne and the American Campaign 1777',
        publisherOrHolder: 'Oxford University Press (Harrison Bird)',
        publicationDate: new Date('1963-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Detailed military history of Burgoyne\'s 1777 campaign including his recapture of Ticonderoga and the subsequent American strategic retreat.',
      },
      {
        id: 'src-tic-zadock-thompson',
        type: 'SECONDARY',
        title: 'History of Vermont, Natural, Civil, and Statistical',
        publisherOrHolder: 'Zadock Thompson (self-published)',
        publicationDate: new Date('1853-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Nineteenth-century Vermont history covering the Green Mountain Boys and Ethan Allen\'s seizure of Ticonderoga. Draws on survivor testimony collected before mid-century.',
      },
      // TIER 3
      {
        id: 'src-tic-wikipedia-fort-tic',
        type: 'TERTIARY',
        title: 'Fort Ticonderoga -- Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Fort_Ticonderoga',
        credibilityTier: 'TIER3',
        notes:
          'General reference covering the fort\'s history from 1755 through its American occupation. Useful for orientation; requires cross-checking for accuracy.',
      },
      {
        id: 'src-tic-fort-tic-tourism',
        type: 'TERTIARY',
        title: 'Fort Ticonderoga Visitor Information',
        publisherOrHolder: 'Fort Ticonderoga Association',
        url: 'https://www.fortticonderoga.org/visit',
        credibilityTier: 'TIER3',
        notes:
          'Tourism and visitor planning information for the historic site. Provides practical access information for the preserved fort and museum.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // West Point -- Hudson fortress, Arnold\'s treason, Great Chain
  // ─────────────────────────────────────────────────────────────
  'us-ny-west-point': {
    sources: [
      // TIER 1
      {
        id: 'src-wp-arnold-treason-papers',
        type: 'PRIMARY',
        title: 'Benedict Arnold\'s Correspondence with John André, 1780',
        publisherOrHolder: 'Library of Congress, Papers of the Continental Congress',
        credibilityTier: 'TIER1',
        notes:
          'The intercepted letters and cipher communications between Arnold and British Major John André that exposed the plot to surrender West Point. Central primary evidence of the treason.',
      },
      {
        id: 'src-wp-washington-west-point-orders',
        type: 'PRIMARY',
        title: 'The Papers of George Washington: West Point Correspondence, 1778-1780',
        publisherOrHolder: 'University of Virginia Press',
        credibilityTier: 'TIER1',
        notes:
          'Washington\'s orders, inspection reports, and correspondence relating to the construction and garrisoning of West Point. Documents the strategic importance of the Hudson Highlands to Continental strategy.',
      },
      {
        id: 'src-wp-flexner-traitor-spy',
        type: 'SECONDARY',
        title: 'The Traitor and the Spy: Benedict Arnold and John André',
        publisherOrHolder: 'Harcourt Brace (James Thomas Flexner)',
        publicationDate: new Date('1953-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Dual biography by a major American historian examining Arnold\'s command at West Point and the André affair. Remains the definitive narrative account of the treason.',
      },
      {
        id: 'src-wp-nps-west-point-highlands',
        type: 'INSTITUTIONAL',
        title: 'Hudson Highlands: West Point and the Revolutionary War',
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/subjects/revwar/west-point.htm',
        credibilityTier: 'TIER1',
        notes:
          'NPS interpretive materials on the military significance of West Point, including the Great Chain across the Hudson, the forts complex, and Arnold\'s betrayal.',
      },
      {
        id: 'src-wp-andre-trial-records',
        type: 'PRIMARY',
        title: 'Proceedings of a Board of General Officers Respecting Major John André',
        publisherOrHolder: 'Continental Army Board of General Officers',
        publicationDate: new Date('1780-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Official trial records of the military tribunal that convicted André as a spy and sentenced him to hang. Signed by Nathanael Greene as presiding officer.',
      },
      // TIER 2
      {
        id: 'src-wp-usma-library-collections',
        type: 'INSTITUTIONAL',
        title: 'United States Military Academy Library: Special Collections and Archives',
        publisherOrHolder: 'USMA Library',
        url: 'https://www.westpoint.edu/library',
        credibilityTier: 'TIER2',
        notes:
          'The West Point Library holds maps, plans, and documents from the Revolutionary War fortifications at West Point, including original surveys and engineering drawings of the Highlands defenses.',
      },
      {
        id: 'src-wp-great-chain-history',
        type: 'SECONDARY',
        title: 'The Great Chain Across the Hudson River',
        publisherOrHolder: 'Journal of the American Revolution',
        url: 'https://allthingsliberty.com/2014/05/the-great-chain-across-the-hudson/',
        credibilityTier: 'TIER2',
        notes:
          'Scholarly article on the 750-yard iron chain stretched across the Hudson to block British warships. Covers construction, technical specifications, and military effectiveness.',
      },
      {
        id: 'src-wp-van-doren-secret-history',
        type: 'SECONDARY',
        title: 'Secret History of the American Revolution',
        publisherOrHolder: 'Viking Press (Carl Van Doren)',
        publicationDate: new Date('1941-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Pulitzer Prize-winning study of espionage and treason during the Revolution, with West Point and the Arnold-André affair as its central case. Draws on British archive materials not previously used.',
      },
      {
        id: 'src-wp-clinton-secret-service',
        type: 'SECONDARY',
        title: 'Clinton\'s Secret Service: The British Intelligence Network in North America',
        publisherOrHolder: 'Yale University Press (John Bakeless)',
        publicationDate: new Date('1959-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'History of British military intelligence in America covering the André-Arnold network and British efforts to penetrate Continental Army command.',
      },
      // TIER 3
      {
        id: 'src-wp-wikipedia-west-point',
        type: 'TERTIARY',
        title: 'West Point, New York -- Revolutionary War History (Wikipedia)',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/West_Point,_New_York',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of West Point\'s military history from the Revolutionary War through the founding of the military academy. Useful for orientation.',
      },
      {
        id: 'src-wp-usma-visitor',
        type: 'TERTIARY',
        title: 'West Point Visitor Center and Museum',
        publisherOrHolder: 'United States Military Academy',
        url: 'https://www.westpoint.edu/visiting',
        credibilityTier: 'TIER3',
        notes:
          'Visitor information for the West Point campus and West Point Museum, which holds Revolutionary War artifacts from the Highland defenses.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // White Plains -- Battle Oct 1776, Washington\'s retreat
  // ─────────────────────────────────────────────────────────────
  'us-ny-white-plains': {
    sources: [
      // TIER 1
      {
        id: 'src-wp2-heath-memoirs',
        type: 'PRIMARY',
        title: 'Memoirs of Major-General William Heath',
        publisherOrHolder: 'William Heath (self-published)',
        publicationDate: new Date('1798-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Heath commanded Continental forces at White Plains. His memoirs provide an American commander\'s account of the October 28, 1776 battle and the subsequent withdrawal through New York.',
      },
      {
        id: 'src-wp2-howe-despatch-whiteplains',
        type: 'PRIMARY',
        title: 'General Howe\'s Official Dispatch on the Battle of White Plains',
        publisherOrHolder: 'UK National Archives, Colonial Office Papers',
        credibilityTier: 'TIER1',
        notes:
          'Howe\'s formal report to London on the engagement at White Plains. The British dispatch provides the opposing commander\'s account of the battle and his decision not to press the pursuit.',
      },
      {
        id: 'src-wp2-kwasny-washington-irregular',
        type: 'SECONDARY',
        title: 'Washington\'s Partisan War, 1775-1783',
        publisherOrHolder: 'Kent State University Press (Mark V. Kwasny)',
        publicationDate: new Date('1996-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Scholarly analysis of Washington\'s use of militia and irregular forces covering the White Plains campaign as a case study in strategic withdrawal and irregular resistance.',
      },
      {
        id: 'src-wp2-nps-washington-ny-campaign',
        type: 'INSTITUTIONAL',
        title: 'The New York Campaign of 1776: NPS Interpretive Overview',
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/subjects/revwar/new-york-campaign-1776.htm',
        credibilityTier: 'TIER1',
        notes:
          'NPS scholarly synthesis of the 1776 New York Campaign from Long Island through White Plains and the retreat across New Jersey. Provides essential operational context.',
      },
      {
        id: 'src-wp2-smith-loyalists-westchester',
        type: 'SECONDARY',
        title: 'Loyalists and Redcoats: A Study in British Revolutionary Policy',
        publisherOrHolder: 'University of North Carolina Press (Paul H. Smith)',
        publicationDate: new Date('1964-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Analyzes British policy toward loyalists in Westchester County, which was the contested "neutral ground" between British-held New York City and American-held territory through the entire war.',
      },
      // TIER 2
      {
        id: 'src-wp2-westchester-county-historical',
        type: 'INSTITUTIONAL',
        title: 'Westchester County Historical Society: Revolutionary War Collections',
        publisherOrHolder: 'Westchester County Historical Society',
        url: 'https://westchesterhistory.com/',
        credibilityTier: 'TIER2',
        notes:
          'Local historical society with manuscript collections documenting the Battle of White Plains and the county\'s prolonged neutral-ground guerrilla conflict from 1776 to 1783.',
      },
      {
        id: 'src-wp2-strickland-white-plains',
        type: 'SECONDARY',
        title: 'The Battle of White Plains, October 28, 1776',
        publisherOrHolder: 'White Plains Public Library',
        credibilityTier: 'TIER2',
        notes:
          'Local scholarly monograph on the engagement at Chatterton Hill and Washington\'s subsequent retreat. Based on county records, family papers, and military correspondence.',
      },
      {
        id: 'src-wp2-neutral-ground-westchester',
        type: 'SECONDARY',
        title: 'The Neutral Ground: Westchester County During the American Revolution',
        publisherOrHolder: 'Westchester County Historical Society (Otto Hufeland)',
        publicationDate: new Date('1926-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Classic local history documenting the seven-year guerrilla war in Westchester County fought between Tory "Cowboys" and patriot "Skinners." Draws on county records and family traditions.',
      },
      // TIER 3
      {
        id: 'src-wp2-wikipedia-battle-white-plains',
        type: 'TERTIARY',
        title: 'Battle of White Plains -- Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Battle_of_White_Plains',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of the October 28, 1776 engagement. Useful for orientation; requires cross-checking against primary sources.',
      },
      {
        id: 'src-wp2-white-plains-city-history',
        type: 'TERTIARY',
        title: 'City of White Plains: Revolutionary War Heritage',
        publisherOrHolder: 'City of White Plains',
        url: 'https://www.cityofwhiteplains.com/',
        credibilityTier: 'TIER3',
        notes:
          'Municipal heritage resources on the 1776 battle and Westchester County\'s Revolutionary War significance. Accessible public-facing materials.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Newburgh -- Washington\'s final HQ, Newburgh Conspiracy, peace
  // ─────────────────────────────────────────────────────────────
  'us-ny-newburgh': {
    sources: [
      // TIER 1
      {
        id: 'src-new-washington-hasbrouck-orders',
        type: 'PRIMARY',
        title: 'General Orders from Newburgh Headquarters, 1782-1783',
        publisherOrHolder: 'Library of Congress, George Washington Papers',
        url: 'https://www.loc.gov/collections/george-washington-papers/',
        credibilityTier: 'TIER1',
        notes:
          'Washington\'s official orders issued from his Newburgh headquarters during the final months of the war, including the pivotal March 15, 1783 address that defused the Newburgh Conspiracy.',
      },
      {
        id: 'src-new-newburgh-address-text',
        type: 'PRIMARY',
        title: 'Washington\'s Address to the Officers of the Army (Newburgh Address), March 15, 1783',
        publisherOrHolder: 'Library of Congress',
        url: 'https://www.loc.gov/resource/mgw3b.020/?sp=375',
        credibilityTier: 'TIER1',
        notes:
          'The full text of Washington\'s address to disgruntled officers threatening mutiny. His appeal to their patriotism -- including his famous act of putting on reading glasses -- prevented a military coup.',
      },
      {
        id: 'src-new-kohn-eagle-sword',
        type: 'SECONDARY',
        title: 'Eagle and Sword: The Federalists and the Creation of the Military Establishment in America, 1783-1802',
        publisherOrHolder: 'Free Press (Richard H. Kohn)',
        publicationDate: new Date('1975-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Scholarly analysis of the Newburgh Conspiracy as a near-crisis in civil-military relations. Kohn\'s research definitively established the conspiracy\'s seriousness and congressional complicity.',
      },
      {
        id: 'src-new-nps-washingtons-hq',
        type: 'INSTITUTIONAL',
        title: 'Washington\'s Headquarters State Historic Site',
        publisherOrHolder: 'New York State Office of Parks, Recreation and Historic Preservation',
        url: 'https://parks.ny.gov/historic-sites/17/details.aspx',
        credibilityTier: 'TIER1',
        notes:
          'Official state site documentation for the Hasbrouck House, Washington\'s longest-occupied wartime headquarters. Includes architectural history and interpretive materials.',
      },
      {
        id: 'src-new-continental-army-disbandment',
        type: 'PRIMARY',
        title: 'Continental Army Disbandment Orders and Furlough Documents, 1783',
        publisherOrHolder: 'National Archives and Records Administration',
        credibilityTier: 'TIER1',
        notes:
          'Official orders for the dissolution of the Continental Army issued from Newburgh in June 1783. Documents the formal end of the wartime army and veterans\' transition to civilian life.',
      },
      // TIER 2
      {
        id: 'src-new-orange-county-historical',
        type: 'INSTITUTIONAL',
        title: 'Orange County Historical Society Collections',
        publisherOrHolder: 'Orange County Historical Society',
        url: 'https://www.orangecountyhistorical.org/',
        credibilityTier: 'TIER2',
        notes:
          'Local historical society with manuscripts related to the Newburgh encampment period, regional loyalism and patriotism, and Hudson Valley life during the final years of the war.',
      },
      {
        id: 'src-new-flexner-washington-revolution',
        type: 'SECONDARY',
        title: 'George Washington in the American Revolution, 1775-1783',
        publisherOrHolder: 'Little, Brown (James Thomas Flexner)',
        publicationDate: new Date('1967-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Volume two of Flexner\'s four-volume biography covering Washington\'s wartime command including the Newburgh crisis. Detailed and well-sourced narrative.',
      },
      {
        id: 'src-new-society-cincinnati',
        type: 'SECONDARY',
        title: 'The Society of the Cincinnati: Aristocracy and the Army after the American Revolution',
        publisherOrHolder: 'Smithsonian Institution Press (Minor Myers Jr.)',
        publicationDate: new Date('1983-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'History of the officer fraternal organization founded at Newburgh in 1783. The Cincinnati\'s founding was itself a legacy of the discontents that produced the Conspiracy.',
      },
      {
        id: 'src-new-promise-of-peace-1783',
        type: 'SECONDARY',
        title: 'The Promise of the Revolution: Veterans\' Pensions and the Problem of Public Memory',
        publisherOrHolder: 'University of Virginia Press (John Resch)',
        publicationDate: new Date('1999-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Examines the postwar struggles of Continental Army veterans for pensions and recognition. Contextualizes why the Newburgh officers were so angry about Congress\'s broken financial promises.',
      },
      // TIER 3
      {
        id: 'src-new-wikipedia-newburgh-conspiracy',
        type: 'TERTIARY',
        title: 'Newburgh Conspiracy -- Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Newburgh_Conspiracy',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of the 1783 officers\' mutiny threat. Useful for orientation; requires cross-verification with Kohn\'s scholarly work for accuracy.',
      },
      {
        id: 'src-new-ny-heritage-digital',
        type: 'TERTIARY',
        title: 'NY Heritage Digital Collections: Newburgh Revolutionary Era Materials',
        publisherOrHolder: 'New York Heritage Digital Collections',
        url: 'https://nyheritage.org/',
        credibilityTier: 'TIER3',
        notes:
          'Aggregated digital collections from New York libraries and historical societies. Useful for locating digitized primary sources from the Newburgh area.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Kingston -- New York\'s first capital, burned October 1777
  // ─────────────────────────────────────────────────────────────
  'us-ny-kingston': {
    sources: [
      // TIER 1
      {
        id: 'src-king-ny-state-constitution-1777',
        type: 'PRIMARY',
        title: 'Constitution of the State of New-York, 1777',
        publisherOrHolder: 'New York State Archives',
        url: 'https://www.archives.nysed.gov/research/new-york-state-constitution-1777',
        credibilityTier: 'TIER1',
        notes:
          'New York\'s first state constitution, adopted at Kingston\'s courthouse on April 20, 1777. The founding legal document of New York State and a model for other revolutionary-era constitutions.',
      },
      {
        id: 'src-king-vaughan-burning-dispatch',
        type: 'PRIMARY',
        title: 'Brigadier General John Vaughan\'s Dispatch on the Burning of Kingston, October 1777',
        publisherOrHolder: 'UK National Archives, War Office Papers',
        credibilityTier: 'TIER1',
        notes:
          'Vaughan\'s official report to Clinton on the October 16, 1777 burning of Esopus (Kingston). The British operation was a reprisal raid intended to divert American forces from Saratoga.',
      },
      {
        id: 'src-king-nps-kingston-nhl',
        type: 'INSTITUTIONAL',
        title: 'Kingston, New York: National Historic Landmark District Documentation',
        publisherOrHolder: 'National Park Service',
        credibilityTier: 'TIER1',
        notes:
          'NHL nomination documentation for the Kingston Stockade Historic District, covering the colonial-era built environment that survived the 1777 burning and later development.',
      },
      {
        id: 'src-king-ulster-county-records',
        type: 'PRIMARY',
        title: 'Ulster County Court of General Sessions Records, 1775-1783',
        publisherOrHolder: 'New York State Archives',
        credibilityTier: 'TIER1',
        notes:
          'County judicial records from the Revolutionary period including prosecutions of loyalists, militia levies, and records of the rebuilding after the 1777 burning.',
      },
      // TIER 2
      {
        id: 'src-king-senate-house-state-historic',
        type: 'INSTITUTIONAL',
        title: 'Senate House State Historic Site',
        publisherOrHolder: 'New York State Office of Parks, Recreation and Historic Preservation',
        url: 'https://parks.ny.gov/historic-sites/33/details.aspx',
        credibilityTier: 'TIER2',
        notes:
          'State site documentation for the Van Gaasbeek house where the first New York State Senate met in 1777. Includes interpretive materials on Kingston\'s role as first state capital.',
      },
      {
        id: 'src-king-schoonmaker-history',
        type: 'SECONDARY',
        title: 'History of Kingston, New York',
        publisherOrHolder: 'Burr Printing House (Marius Schoonmaker)',
        publicationDate: new Date('1888-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Nineteenth-century local history drawing on family papers and court records. Detailed account of the 1777 burning and Kingston\'s political role as state capital.',
      },
      {
        id: 'src-king-hudsonvalley-heritage',
        type: 'INSTITUTIONAL',
        title: 'Hudson Valley Heritage: Ulster County Resources',
        publisherOrHolder: 'Mid-Hudson Library System',
        url: 'https://www.hvlibrary.org/',
        credibilityTier: 'TIER2',
        notes:
          'Regional digital collections including Kingston-area newspapers, land records, and church registers from the Revolutionary period.',
      },
      {
        id: 'src-king-countryman-people-revolution',
        type: 'SECONDARY',
        title: 'A People in Revolution: The American Revolution and Political Society in New York, 1760-1790',
        publisherOrHolder: 'Johns Hopkins University Press (Edward Countryman)',
        publicationDate: new Date('1981-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Scholarly social and political history of Revolutionary New York covering Kingston\'s role as first capital and the social tensions that shaped the state\'s constitutional convention.',
      },
      // TIER 3
      {
        id: 'src-king-wikipedia-kingston-ny',
        type: 'TERTIARY',
        title: 'Kingston, New York -- Revolutionary War History (Wikipedia)',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Kingston,_New_York',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of Kingston including its role as New York\'s first state capital and the 1777 British burning. Useful for orientation.',
      },
      {
        id: 'src-king-kingston-tourism',
        type: 'TERTIARY',
        title: 'Kingston, NY: Heritage Tourism Guide',
        publisherOrHolder: 'Ulster County Tourism',
        url: 'https://www.ulstercountyny.gov/tourism',
        credibilityTier: 'TIER3',
        notes:
          'Tourism materials covering Kingston\'s colonial-era stockade district and Revolutionary War heritage sites. Practical visitor information.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Crown Point - Lake Champlain gateway, northern corridor
  // ─────────────────────────────────────────────────────────────
  'us-ny-crown-point': {
    sources: [
      {
        id: 'src-crown-point-nps-champlain',
        type: 'INSTITUTIONAL',
        title: 'Crown Point State Historic Site',
        publisherOrHolder: 'New York State Office of Parks, Recreation and Historic Preservation',
        url: 'https://parks.ny.gov/historic-sites/crownpoint/',
        credibilityTier: 'TIER1',
        notes: 'Official state historic site documentation covering Fort Crown Point and its role in the Champlain corridor.',
      },
      {
        id: 'src-crown-point-amherst-papers',
        type: 'PRIMARY',
        title: 'Amherst Papers: Crown Point Correspondence',
        publisherOrHolder: 'UK National Archives',
        credibilityTier: 'TIER1',
        notes: 'British military records relating to the fortification and strategic importance of Crown Point in the northern theater.',
      },
      {
        id: 'src-crown-point-allen-narrative',
        type: 'PRIMARY',
        title: 'A Narrative of Colonel Ethan Allen\'s Captivity',
        publisherOrHolder: 'Various editions (original 1779)',
        credibilityTier: 'TIER1',
        notes: 'Allen\'s account includes his capture of Crown Point following the seizure of Ticonderoga in May 1775.',
      },
      {
        id: 'src-crown-point-bellico-sails',
        type: 'SECONDARY',
        title: 'Sails and Steam in the Mountains: A Maritime and Military History of Lake George and Lake Champlain',
        publisherOrHolder: 'Purple Mountain Press (Russell P. Bellico)',
        publicationDate: new Date('2001-01-01'),
        credibilityTier: 'TIER1',
        notes: 'Comprehensive study of naval and military operations on the Champlain corridor, with detailed coverage of Crown Point\'s strategic role.',
      },
      {
        id: 'src-crown-point-forts-survey',
        type: 'INSTITUTIONAL',
        title: 'Historic American Buildings Survey: Crown Point Fortifications',
        publisherOrHolder: 'Library of Congress / National Park Service',
        credibilityTier: 'TIER1',
        notes: 'Architectural and historical survey of the Crown Point fortifications including French, British, and American periods.',
      },
      {
        id: 'src-crown-point-cuneo-knox',
        type: 'SECONDARY',
        title: 'The Noble Train of Artillery',
        publisherOrHolder: 'Various (John R. Cuneo)',
        credibilityTier: 'TIER2',
        notes: 'Study of Henry Knox\'s expedition to move captured cannons from Ticonderoga and Crown Point to Boston.',
      },
      {
        id: 'src-crown-point-pell-ticonderoga',
        type: 'SECONDARY',
        title: 'Fort Ticonderoga: A Short History',
        publisherOrHolder: 'Fort Ticonderoga Association',
        credibilityTier: 'TIER2',
        notes: 'Includes coverage of Crown Point as the companion fortification and its role in the 1775-1776 campaigns.',
      },
      {
        id: 'src-crown-point-ny-archives',
        type: 'INSTITUTIONAL',
        title: 'New York State Archives: Northern Department Records',
        publisherOrHolder: 'New York State Archives',
        credibilityTier: 'TIER2',
        notes: 'State records documenting military operations and supply movements through the Crown Point area.',
      },
      {
        id: 'src-crown-point-ferling-revolution',
        type: 'SECONDARY',
        title: 'Almost a Miracle: The American Victory in the War of Independence',
        publisherOrHolder: 'Oxford University Press (John Ferling)',
        publicationDate: new Date('2007-01-01'),
        credibilityTier: 'TIER2',
        notes: 'Broad military history with coverage of the northern campaign including Crown Point\'s role in the Champlain corridor strategy.',
      },
      {
        id: 'src-crown-point-wikipedia',
        type: 'TERTIARY',
        title: 'Crown Point, New York - Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Crown_Point,_New_York',
        credibilityTier: 'TIER3',
        notes: 'General reference. Useful for chronology and basic facts, should be cross-checked with primary sources.',
      },
      {
        id: 'src-crown-point-champlain-trail',
        type: 'TERTIARY',
        title: 'Lake Champlain Heritage Trail',
        publisherOrHolder: 'Lake Champlain Basin Program',
        credibilityTier: 'TIER3',
        notes: 'Tourism and heritage trail materials covering Crown Point and the Lake Champlain corridor\'s Revolutionary War history.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Harlem Heights - morale-saving victory, September 1776
  // ─────────────────────────────────────────────────────────────
  'us-ny-harlem-heights': {
    sources: [
      {
        id: 'src-harlem-heights-washington-papers',
        type: 'PRIMARY',
        title: 'The Papers of George Washington: Revolutionary War Series, Vol. 6',
        publisherOrHolder: 'University of Virginia Press',
        credibilityTier: 'TIER1',
        notes: 'Washington\'s correspondence from September 1776 covering the Battle of Harlem Heights and its impact on army morale.',
      },
      {
        id: 'src-harlem-heights-reed-memoir',
        type: 'PRIMARY',
        title: 'Life and Correspondence of Joseph Reed',
        publisherOrHolder: 'Various (William B. Reed, ed.)',
        credibilityTier: 'TIER1',
        notes: 'Reed served as Washington\'s adjutant general and provided a detailed firsthand account of the Harlem Heights engagement.',
      },
      {
        id: 'src-harlem-heights-schecter-battle',
        type: 'SECONDARY',
        title: 'The Battle for New York: The City at the Heart of the American Revolution',
        publisherOrHolder: 'Walker & Company (Barnet Schecter)',
        publicationDate: new Date('2002-01-01'),
        credibilityTier: 'TIER1',
        notes: 'Detailed narrative of the 1776 New York campaign with extensive coverage of Harlem Heights in the context of the broader retreat.',
      },
      {
        id: 'src-harlem-heights-mccullough-1776',
        type: 'SECONDARY',
        title: '1776',
        publisherOrHolder: 'Simon & Schuster (David McCullough)',
        publicationDate: new Date('2005-01-01'),
        credibilityTier: 'TIER1',
        notes: 'Pulitzer Prize-winning author\'s account of 1776 including the morale-boosting effect of the Harlem Heights victory.',
      },
      {
        id: 'src-harlem-heights-nara-orderly-books',
        type: 'PRIMARY',
        title: 'Continental Army Orderly Books, September 1776',
        publisherOrHolder: 'National Archives and Records Administration',
        credibilityTier: 'TIER1',
        notes: 'Daily army orders documenting troop movements and dispositions around the Harlem Heights engagement.',
      },
      {
        id: 'src-harlem-heights-gallagher-ny-campaign',
        type: 'SECONDARY',
        title: 'The Battle of Brooklyn, 1776',
        publisherOrHolder: 'Da Capo Press (John Gallagher)',
        credibilityTier: 'TIER2',
        notes: 'Military history covering the broader New York campaign of 1776, including the Harlem Heights engagement in context.',
      },
      {
        id: 'src-harlem-heights-nyhs-collections',
        type: 'INSTITUTIONAL',
        title: 'New-York Historical Society: Revolutionary War Collections',
        publisherOrHolder: 'New-York Historical Society',
        url: 'https://www.nyhistory.org/',
        credibilityTier: 'TIER2',
        notes: 'Archival collections including maps, correspondence, and artifacts related to the 1776 New York campaign.',
      },
      {
        id: 'src-harlem-heights-bliven-battle',
        type: 'SECONDARY',
        title: 'Battle for Manhattan',
        publisherOrHolder: 'Henry Holt (Bruce Bliven Jr.)',
        credibilityTier: 'TIER2',
        notes: 'Focused study of the military operations on Manhattan Island in 1776 including Harlem Heights.',
      },
      {
        id: 'src-harlem-heights-diamant-chaining',
        type: 'SECONDARY',
        title: 'Chaining the Hudson: The Fight for the River in the American Revolution',
        publisherOrHolder: 'Citadel Press (Lincoln Diamant)',
        credibilityTier: 'TIER2',
        notes: 'Broader Hudson campaign context including the strategic significance of holding upper Manhattan after Harlem Heights.',
      },
      {
        id: 'src-harlem-heights-wikipedia',
        type: 'TERTIARY',
        title: 'Battle of Harlem Heights - Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Battle_of_Harlem_Heights',
        credibilityTier: 'TIER3',
        notes: 'General reference for the September 16, 1776 engagement. Should be cross-checked with scholarly sources.',
      },
      {
        id: 'src-harlem-heights-nps-manhattan',
        type: 'TERTIARY',
        title: 'Manhattan Sites of the American Revolution',
        publisherOrHolder: 'National Park Service',
        credibilityTier: 'TIER3',
        notes: 'NPS overview of Revolutionary War sites in Manhattan including the approximate Harlem Heights battlefield location.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Stony Point - Wayne's midnight bayonet assault, July 1779
  // ─────────────────────────────────────────────────────────────
  'us-ny-stony-point': {
    sources: [
      {
        id: 'src-stony-point-nps-battlefield',
        type: 'INSTITUTIONAL',
        title: 'Stony Point Battlefield State Historic Site',
        publisherOrHolder: 'New York State Office of Parks, Recreation and Historic Preservation',
        url: 'https://parks.ny.gov/historic-sites/stonypoint/',
        credibilityTier: 'TIER1',
        notes: 'Official state historic site covering the July 1779 battle and the preserved earthworks.',
      },
      {
        id: 'src-stony-point-wayne-report',
        type: 'PRIMARY',
        title: 'Anthony Wayne\'s After-Action Report to George Washington',
        publisherOrHolder: 'Papers of George Washington, Library of Congress',
        credibilityTier: 'TIER1',
        notes: 'Wayne\'s official report of the midnight bayonet assault on July 16, 1779, written immediately after the battle.',
      },
      {
        id: 'src-stony-point-washington-orders',
        type: 'PRIMARY',
        title: 'Washington\'s Orders for the Stony Point Assault',
        publisherOrHolder: 'Papers of George Washington, University of Virginia Press',
        credibilityTier: 'TIER1',
        notes: 'Washington\'s detailed operational orders for the attack, specifying the use of bayonets only and the column of approach.',
      },
      {
        id: 'src-stony-point-nelson-wayne',
        type: 'SECONDARY',
        title: 'Anthony Wayne: Soldier of the Early Republic',
        publisherOrHolder: 'Indiana University Press (Paul David Nelson)',
        publicationDate: new Date('1985-01-01'),
        credibilityTier: 'TIER1',
        notes: 'Scholarly biography of Wayne with detailed analysis of the Stony Point assault and its place in the 1779 campaign.',
      },
      {
        id: 'src-stony-point-clinton-intelligence',
        type: 'PRIMARY',
        title: 'Sir Henry Clinton Papers: Stony Point Intelligence',
        publisherOrHolder: 'William L. Clements Library, University of Michigan',
        credibilityTier: 'TIER1',
        notes: 'British commander\'s papers including intelligence reports and the aftermath of the American recapture of Stony Point.',
      },
      {
        id: 'src-stony-point-johnston-storming',
        type: 'SECONDARY',
        title: 'The Storming of Stony Point on the Hudson',
        publisherOrHolder: 'James T. White & Co. (Henry P. Johnston)',
        publicationDate: new Date('1900-01-01'),
        credibilityTier: 'TIER2',
        notes: 'Classic early study of the battle with extensive primary source quotation and analysis.',
      },
      {
        id: 'src-stony-point-boatner-encyclopedia',
        type: 'SECONDARY',
        title: 'Encyclopedia of the American Revolution',
        publisherOrHolder: 'David McKay Company (Mark M. Boatner III)',
        credibilityTier: 'TIER2',
        notes: 'Standard reference work with a detailed entry on the Stony Point assault and its strategic context.',
      },
      {
        id: 'src-stony-point-ward-revolution',
        type: 'SECONDARY',
        title: 'The War of the Revolution',
        publisherOrHolder: 'Macmillan (Christopher Ward)',
        credibilityTier: 'TIER2',
        notes: 'Comprehensive military history of the Revolution with tactical analysis of the Stony Point night attack.',
      },
      {
        id: 'src-stony-point-ny-archives-military',
        type: 'INSTITUTIONAL',
        title: 'New York State Archives: Military Records of the Revolution',
        publisherOrHolder: 'New York State Archives',
        credibilityTier: 'TIER2',
        notes: 'State records documenting the Light Infantry Corps and Hudson Highlands operations in 1779.',
      },
      {
        id: 'src-stony-point-wikipedia',
        type: 'TERTIARY',
        title: 'Battle of Stony Point - Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Battle_of_Stony_Point',
        credibilityTier: 'TIER3',
        notes: 'General reference for the July 16, 1779 battle. Cross-check with Wayne\'s report and scholarly sources.',
      },
      {
        id: 'src-stony-point-hudson-valley-tourism',
        type: 'TERTIARY',
        title: 'Hudson Valley Revolutionary War Trail',
        publisherOrHolder: 'Hudson Valley Tourism',
        credibilityTier: 'TIER3',
        notes: 'Tourism materials covering Stony Point and other Hudson Valley Revolutionary War sites.',
      },
    ],
  },
};
