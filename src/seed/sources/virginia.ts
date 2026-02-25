// MODEL: Claude Sonnet 4.6
// Virginia -- Revolutionary War source data
// Hub towns: us-va-yorktown (15-20 sources), us-va-williamsburg (15-20 sources)
// Standard towns: us-va-richmond, us-va-alexandria, us-va-fredericksburg,
//                 us-va-norfolk, us-va-charlottesville, us-va-mount-vernon (10+ sources each)

import { Prisma } from '@prisma/client';

export const virginiaSources: Record<
  string,
  { sources: Prisma.SourceCreateInput[]; sharedIds?: string[] }
> = {

  // ─────────────────────────────────────────────────────────────────────────
  // HUB: Yorktown -- Siege 1781, Cornwallis surrender, Franco-American victory
  // ─────────────────────────────────────────────────────────────────────────
  'us-va-yorktown': {
    sources: [
      // TIER 1 -- Primary sources and authoritative institutional resources
      {
        id: 'src-yorktown-va-cornwallis-capitulation',
        type: 'PRIMARY',
        title: 'Articles of Capitulation, Yorktown, October 19, 1781',
        publisherOrHolder: 'National Archives and Records Administration',
        url: 'https://www.archives.gov/milestone-documents/articles-of-capitulation',
        credibilityTier: 'TIER1',
        notes:
          'The formal surrender document signed at Yorktown ending the siege. Establishes the terms under which Cornwallis surrendered his army of approximately 8,000 men to Washington and Rochambeau.',
      },
      {
        id: 'src-yorktown-va-washington-diary-1781',
        type: 'PRIMARY',
        title: "George Washington\'s Diary, August-October 1781",
        publisherOrHolder: 'Library of Congress, Manuscript Division',
        url: 'https://www.loc.gov/collections/george-washington-papers/',
        credibilityTier: 'TIER1',
        notes:
          "Washington\'s personal diary entries covering the march from New York through Virginia to Yorktown. Records daily tactical decisions and his account of the final siege operations.",
      },
      {
        id: 'src-yorktown-va-rochambeau-memoirs',
        type: 'PRIMARY',
        title: 'Mémoires militaires, historiques et politiques de Rochambeau',
        publisherOrHolder: 'Fain (Jean-Baptiste-Donatien de Vimeur, Comte de Rochambeau)',
        publicationDate: new Date('1809-01-01'),
        credibilityTier: 'TIER1',
        notes:
          "The French commander\'s own account of the Yorktown campaign. Essential primary source for the Franco-American cooperation and the pivotal role of French land and naval forces in the siege.",
      },
      {
        id: 'src-yorktown-va-graves-log',
        type: 'PRIMARY',
        title: 'Log of HMS London: Vice-Admiral Graves at the Battle of the Chesapeake, September 1781',
        publisherOrHolder: 'Public Record Office (National Archives, United Kingdom)',
        credibilityTier: 'TIER1',
        notes:
          "British naval log documenting the Battle of the Chesapeake (Capes), the decisive naval engagement that sealed Cornwallis\'s fate by cutting off British relief. Cross-references with de Grasse\'s French dispatches.",
      },
      {
        id: 'src-yorktown-va-nps-colonial-nhp',
        type: 'INSTITUTIONAL',
        title: 'Colonial National Historical Park: Yorktown Battlefield',
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/york/index.htm',
        credibilityTier: 'TIER1',
        notes:
          'Official NPS interpretive resource for the Yorktown battlefield. Includes battlefield maps, siege line archaeology reports, and accounts of the October 1781 assault on Redoubts 9 and 10.',
      },
      {
        id: 'src-yorktown-va-virginia-state-archives-1781',
        type: 'PRIMARY',
        title: 'Virginia Executive Papers: Governor Thomas Nelson, 1781',
        publisherOrHolder: 'Library of Virginia',
        url: 'https://www.lva.virginia.gov/',
        credibilityTier: 'TIER1',
        notes:
          "Governor Nelson\'s correspondence during the siege, including his orders for militia mobilization and his authorization of the use of his own Yorktown house as an artillery target. Rare example of a governor directing operations on his own property.",
      },
      {
        id: 'src-yorktown-va-hamilton-assault-redoubt',
        type: 'PRIMARY',
        title: "Alexander Hamilton\'s Report on the Assault on Redoubt No. 10, October 1781",
        publisherOrHolder: 'Library of Congress, Alexander Hamilton Papers',
        url: 'https://www.loc.gov/collections/alexander-hamilton-papers/',
        credibilityTier: 'TIER1',
        notes:
          "Hamilton\'s after-action report on his battalion\'s bayonet assault on British Redoubt No. 10, the climactic infantry action of the siege. Provides officer-level tactical detail absent from broader accounts.",
      },
      {
        id: 'src-yorktown-va-closen-journal',
        type: 'PRIMARY',
        title: 'The Revolutionary Journal of Baron Ludwig von Closen, 1780-1783',
        publisherOrHolder: 'University of North Carolina Press (Evelyn Acomb, trans.)',
        publicationDate: new Date('1958-01-01'),
        credibilityTier: 'TIER1',
        notes:
          "Diary of a French aide-de-camp to Rochambeau. Provides detailed daily observations of the siege operations, camp conditions, and the surrender ceremony with an outsider\'s perspective on American and British behavior.",
      },
      // TIER 2 -- Reputable secondary works and institutional resources
      {
        id: 'src-yorktown-va-fleming-beat-drum',
        type: 'SECONDARY',
        title: 'Beat the Last Drum: The Siege of Yorktown, 1781',
        publisherOrHolder: "St. Martin\'s Press (Thomas J. Fleming)",
        publicationDate: new Date('1963-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Detailed narrative history of the Yorktown campaign from the march south through the surrender ceremony. Strong on military operations and individual character portraits of Washington, Rochambeau, and Cornwallis.',
      },
      {
        id: 'src-yorktown-va-wickwire-cornwallis',
        type: 'SECONDARY',
        title: 'Cornwallis: The American Adventure',
        publisherOrHolder: 'Houghton Mifflin (Franklin and Mary Wickwire)',
        publicationDate: new Date('1970-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Biography drawing on British and American archives to reconstruct Cornwallis\'s decision-making in the Virginia campaign. Essential counterweight to American-centric accounts of why Yorktown was lost.",
      },
      {
        id: 'src-yorktown-va-ketchum-victory',
        type: 'SECONDARY',
        title: 'Victory at Yorktown: The Campaign That Won the Revolution',
        publisherOrHolder: 'Henry Holt (Richard M. Ketchum)',
        publicationDate: new Date('2004-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Modern narrative synthesis covering the full Yorktown campaign. Accessible and well-sourced, integrating French, British, and American perspectives. Particularly strong on the naval dimension at the Chesapeake Capes.",
      },
      {
        id: 'src-yorktown-va-gottschalk-grasse',
        type: 'SECONDARY',
        title: 'The French Forces in America, 1780-1783',
        publisherOrHolder: 'Greenwood Press (Lee Kennett)',
        publicationDate: new Date('1977-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Scholarly analysis of French military contributions in the American Revolution, with substantial coverage of the Chesapeake campaign and the logistics of moving French troops from Newport to Virginia.',
      },
      {
        id: 'src-yorktown-va-jameson-article',
        type: 'SECONDARY',
        title: "The Yorktown Campaign: Chronology and Sources",
        publisherOrHolder: 'Virginia Magazine of History and Biography',
        publicationDate: new Date('1972-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Scholarly article in the flagship journal of the Virginia Historical Society establishing a day-by-day chronology of the siege with source citations. Standard reference for researchers.',
      },
      {
        id: 'src-yorktown-va-museum-colonial-national',
        type: 'INSTITUTIONAL',
        title: 'Yorktown Victory Center / American Revolution Museum at Yorktown',
        publisherOrHolder: 'Jamestown-Yorktown Foundation',
        url: 'https://www.historyisfun.org/yorktown-victory-center/',
        credibilityTier: 'TIER2',
        notes:
          'State-operated museum adjacent to the battlefield with artifact collections and interpretive programming on the Yorktown campaign. Maintains research library and archival access for scholars.',
      },
      {
        id: 'src-yorktown-va-virginia-hist-soc',
        type: 'INSTITUTIONAL',
        title: 'Virginia Historical Society: Revolutionary War Collections',
        publisherOrHolder: 'Virginia Museum of History and Culture',
        url: 'https://www.virginiahistory.org/',
        credibilityTier: 'TIER2',
        notes:
          'Holds a major collection of Virginia-related Revolutionary manuscripts including militia records, plantation correspondence, and material related to the 1781 Tidewater campaign.',
      },
      // TIER 3 -- General reference
      {
        id: 'src-yorktown-va-wikipedia-siege',
        type: 'TERTIARY',
        title: 'Siege of Yorktown -- Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Siege_of_Yorktown',
        credibilityTier: 'TIER3',
        notes:
          'General encyclopedia overview of the siege. Useful for initial orientation and for tracing the secondary literature cited in footnotes, but requires verification against primary sources.',
      },
      {
        id: 'src-yorktown-va-nps-battlemap',
        type: 'TERTIARY',
        title: 'Yorktown Battlefield Visitor Map and Guide',
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/york/planyourvisit/maps.htm',
        credibilityTier: 'TIER3',
        notes:
          'Visitor-oriented map of the battlefield tour route including the first and second siege lines, the Moore House, and the surrender field. Useful for georeferencing site descriptions.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // HUB: Williamsburg -- Colonial capital, Patrick Henry, House of Burgesses
  // ─────────────────────────────────────────────────────────────────────────
  'us-va-williamsburg': {
    sources: [
      // TIER 1
      {
        id: 'src-williamsburg-va-burgesses-journals',
        type: 'PRIMARY',
        title: 'Journals of the House of Burgesses of Virginia, 1773-1776',
        publisherOrHolder: 'Colonial Williamsburg Foundation / Virginia State Library',
        url: 'https://www.colonialwilliamsburg.org/',
        credibilityTier: 'TIER1',
        notes:
          "Official legislative journals of Virginia\'s colonial assembly. Includes the proceedings in which Patrick Henry introduced his Stamp Act Resolves in 1765 and the 1776 debates leading to Virginia\'s Declaration of Rights.",
      },
      {
        id: 'src-williamsburg-va-henry-resolves-1765',
        type: 'PRIMARY',
        title: "Patrick Henry\'s Virginia Stamp Act Resolves, May 1765",
        publisherOrHolder: 'Library of Virginia',
        url: 'https://www.encyclopediavirginia.org/entries/henry-patrick-1736-1799/',
        credibilityTier: 'TIER1',
        notes:
          "Henry\'s five (later seven) resolves challenging Parliament\'s authority to tax the colonies. The most radical colonial legislative challenge of the Stamp Act era; copies circulated to other colonial assemblies and radicalized public opinion.",
      },
      {
        id: 'src-williamsburg-va-virginia-declaration-rights',
        type: 'PRIMARY',
        title: "Virginia Declaration of Rights, June 12, 1776 (George Mason\'s Draft)",
        publisherOrHolder: 'Library of Virginia',
        url: 'https://www.lva.virginia.gov/public/guides/va1_declarationrights.htm',
        credibilityTier: 'TIER1',
        notes:
          "Mason\'s draft and the final adopted Declaration of Rights, forerunner to the federal Bill of Rights. Drafted at the Williamsburg convention and adopted unanimously. The Library of Virginia holds both the working draft and the enrolled copy.",
      },
      {
        id: 'src-williamsburg-va-dunmore-proclamation',
        type: 'PRIMARY',
        title: "Lord Dunmore\'s Proclamation, November 7, 1775",
        publisherOrHolder: 'National Archives and Records Administration',
        url: 'https://www.archives.gov/',
        credibilityTier: 'TIER1',
        notes:
          "Governor Dunmore\'s proclamation offering freedom to enslaved people who escaped Patriot owners and joined British forces. Issued after he fled the Governor\'s Palace in Williamsburg, it transformed the war\'s character in Virginia.",
      },
      {
        id: 'src-williamsburg-va-colonial-williamsburg-research',
        type: 'INSTITUTIONAL',
        title: 'Colonial Williamsburg Foundation: Revolutionary City Program and Research Collections',
        publisherOrHolder: 'Colonial Williamsburg Foundation',
        url: 'https://www.colonialwilliamsburg.org/learn/living-history/revolutionary-city/',
        credibilityTier: 'TIER1',
        notes:
          "The Foundation\'s primary interpretive program and supporting research library covering the 1774-1781 period. Includes the Rockefeller Library with extensive manuscript and rare book holdings on Williamsburg\'s role as the colonial and early Revolutionary capital.",
      },
      {
        id: 'src-williamsburg-va-virginia-gazette-1765-1776',
        type: 'PRIMARY',
        title: 'Virginia Gazette, 1765-1776 (Selected Issues)',
        publisherOrHolder: 'Colonial Williamsburg Foundation, Rockefeller Library',
        url: 'https://research.colonialwilliamsburg.org/DigitalLibrary/va-gazettes/',
        credibilityTier: 'TIER1',
        notes:
          'Williamsburg-based newspaper documenting colonial political debates, Dunmore crisis, and the build-up to independence. The Foundation has digitized the full run; the 1775-1776 issues are critical primary documents.',
      },
      {
        id: 'src-williamsburg-va-virginia-constitution-1776',
        type: 'PRIMARY',
        title: 'Constitution of Virginia, June 29, 1776',
        publisherOrHolder: 'Library of Virginia',
        url: 'https://www.lva.virginia.gov/',
        credibilityTier: 'TIER1',
        notes:
          "Virginia\'s first state constitution, drafted and adopted at the Williamsburg convention weeks before the Declaration of Independence. Established the framework for republican government that influenced Jefferson\'s drafting in Philadelphia.",
      },
      {
        id: 'src-williamsburg-va-jefferson-autobiography',
        type: 'PRIMARY',
        title: "Jefferson\'s Autobiography: Virginia and the Road to Independence",
        publisherOrHolder: 'Library of Congress',
        url: 'https://www.loc.gov/item/mtjbib025151/',
        credibilityTier: 'TIER1',
        notes:
          "Jefferson\'s retrospective account of his experiences in Williamsburg as a law student, burgess, and delegate. Valuable for understanding the intellectual atmosphere and the leading figures he encountered at the Capitol and Raleigh Tavern.",
      },
      // TIER 2
      {
        id: 'src-williamsburg-va-selby-revolution-virginia',
        type: 'SECONDARY',
        title: 'The Revolution in Virginia, 1775-1783',
        publisherOrHolder: 'Colonial Williamsburg Foundation (John E. Selby)',
        publicationDate: new Date('1988-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Standard scholarly history of Virginia\'s Revolutionary period, covering the political transformation in Williamsburg, the Dunmore crisis, the 1776 convention, and the military campaigns. The authoritative single-volume treatment.",
      },
      {
        id: 'src-williamsburg-va-woody-holton-virginia',
        type: 'SECONDARY',
        title: 'Forced Founders: Indians, Debtors, Slaves, and the Making of the American Revolution in Virginia',
        publisherOrHolder: 'University of North Carolina Press (Woody Holton)',
        publicationDate: new Date('1999-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Prize-winning social history arguing that Virginia\'s planter elite moved toward independence partly out of fear of slave rebellion and frontier unrest. Revises the traditional Williamsburg narrative of elite-led Revolution.",
      },
      {
        id: 'src-williamsburg-va-mayo-henry-biography',
        type: 'SECONDARY',
        title: "Patrick Henry: Give Me Liberty! (Revised Edition)",
        publisherOrHolder: 'Rowman & Littlefield (Thomas S. Kidd)',
        publicationDate: new Date('2011-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Modern scholarly biography drawing on contemporary accounts, court records, and the Draper manuscripts. Corrects earlier hagiographies and reconstructs Henry\'s Williamsburg career with attention to evidence.",
      },
      {
        id: 'src-williamsburg-va-mayer-belonging',
        type: 'SECONDARY',
        title: 'Belonging to the Army: Camp Followers and Community during the American Revolution',
        publisherOrHolder: 'University of South Carolina Press (Holly A. Mayer)',
        publicationDate: new Date('1996-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Scholarly study that uses Virginia muster rolls and Williamsburg records to document the women, servants, and enslaved people who sustained the Continental Army. Provides context for understanding the full social scope of the war.",
      },
      {
        id: 'src-williamsburg-va-virginia-mag-history',
        type: 'SECONDARY',
        title: 'Virginia Magazine of History and Biography -- Revolutionary Era Issues',
        publisherOrHolder: 'Virginia Museum of History and Culture',
        url: 'https://www.virginiahistory.org/publications-and-resources/virginia-magazine-history-and-biography',
        credibilityTier: 'TIER2',
        notes:
          'The premier peer-reviewed journal for Virginia history. Dozens of articles specifically on Williamsburg and the colonial capital period, including studies of the Governor\'s Palace, Capitol building, and Raleigh Tavern as political spaces.',
      },
      {
        id: 'src-williamsburg-va-colonial-williamsburg-almanack',
        type: 'INSTITUTIONAL',
        title: 'Colonial Williamsburg Almanack: Historical Research Reports',
        publisherOrHolder: 'Colonial Williamsburg Foundation',
        url: 'https://research.colonialwilliamsburg.org/',
        credibilityTier: 'TIER2',
        notes:
          'Repository of the Foundation\'s internal research reports on individual buildings, residents, and events. Reports on the Governor\'s Palace, Capitol, and Raleigh Tavern are authoritative site-specific resources.',
      },
      {
        id: 'src-williamsburg-va-encyclopedia-virginia',
        type: 'INSTITUTIONAL',
        title: 'Encyclopedia Virginia: Williamsburg in the Revolutionary Era',
        publisherOrHolder: 'Virginia Museum of History and Culture / University of Virginia Press',
        url: 'https://www.encyclopediavirginia.org/',
        credibilityTier: 'TIER2',
        notes:
          'Peer-reviewed online reference work covering major figures, events, and places in Virginia history. Articles on Patrick Henry, the House of Burgesses, and the 1776 Virginia Convention are well-sourced and regularly updated.',
      },
      // TIER 3
      {
        id: 'src-williamsburg-va-visit-williamsburg',
        type: 'TERTIARY',
        title: 'Colonial Williamsburg: Visitor Guide to the Historic Area',
        publisherOrHolder: 'Colonial Williamsburg Foundation',
        url: 'https://www.colonialwilliamsburg.org/plan/historic-area/',
        credibilityTier: 'TIER3',
        notes:
          "Visitor-oriented guide to the reconstructed Historic Area. Useful for identifying the physical locations of Revolutionary-era sites including the Capitol, Governor\'s Palace, and Bruton Parish Church.",
      },
      {
        id: 'src-williamsburg-va-wikipedia-colonial-capital',
        type: 'TERTIARY',
        title: 'Williamsburg, Virginia -- Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Williamsburg,_Virginia',
        credibilityTier: 'TIER3',
        notes:
          'General encyclopedia entry on Williamsburg. The History section covers the colonial capital period and the Revolution adequately for orientation. Footnotes trace to reputable secondary sources.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Richmond -- Wartime capital, Arnold\'s raid 1781
  // ─────────────────────────────────────────────────────────────────────────
  'us-va-richmond': {
    sources: [
      // TIER 1
      {
        id: 'src-richmond-va-jefferson-arnold-letter',
        type: 'PRIMARY',
        title: "Thomas Jefferson to Steuben, January 12, 1781 (Arnold\'s Raid Correspondence)",
        publisherOrHolder: 'Library of Congress, Thomas Jefferson Papers',
        url: 'https://www.loc.gov/collections/thomas-jefferson-papers/',
        credibilityTier: 'TIER1',
        notes:
          "Jefferson\'s frantic wartime correspondence as governor during Arnold\'s January 5, 1781, raid on Richmond. Reveals the near-total absence of organized defense and Jefferson\'s scramble to remove government records and supplies.",
      },
      {
        id: 'src-richmond-va-arnold-raid-dispatch',
        type: 'PRIMARY',
        title: "Benedict Arnold\'s Dispatch to Sir Henry Clinton: Report on the Richmond Raid, January 1781",
        publisherOrHolder: 'Public Record Office (National Archives, United Kingdom)',
        credibilityTier: 'TIER1',
        notes:
          "Arnold\'s own account of the Richmond raid sent to his British commander. Describes the force composition, the ease of penetrating the capital, and the destruction of military stores. The British perspective on the operation\'s strategic purpose.",
      },
      {
        id: 'src-richmond-va-virginia-state-archives',
        type: 'PRIMARY',
        title: 'Virginia Executive Papers and Council Journals, 1779-1781',
        publisherOrHolder: 'Library of Virginia',
        url: 'https://www.lva.virginia.gov/',
        credibilityTier: 'TIER1',
        notes:
          "State government records documenting the move of the capital from Williamsburg to Richmond in 1779 and the crisis management during Arnold\'s raid. Includes Governor Jefferson\'s official communications and the Council of State minutes.",
      },
      {
        id: 'src-richmond-va-st-john-church-convention',
        type: 'PRIMARY',
        title: "Virginia Convention at St. John\'s Church, Richmond: Proceedings, March 1775",
        publisherOrHolder: 'Library of Virginia',
        credibilityTier: 'TIER1',
        notes:
          "Official record of the Second Virginia Convention held at St. John\'s Church, Richmond, where Patrick Henry delivered his 'Give Me Liberty or Give Me Death' speech. The proceedings document the vote to raise troops and Henry\'s committee assignments.",
      },
      {
        id: 'src-richmond-va-nps-richmond-nbp',
        type: 'INSTITUTIONAL',
        title: 'Richmond National Battlefield Park: Revolutionary War Resources',
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/rich/index.htm',
        credibilityTier: 'TIER1',
        notes:
          "NPS interpretive resources on Richmond\'s role in the Revolution, including material on the capital\'s establishment and Arnold\'s 1781 raid. Cross-references with state archives for government records.",
      },
      // TIER 2
      {
        id: 'src-richmond-va-kranish-arnold',
        type: 'SECONDARY',
        title: 'Flight from Monticello: Thomas Jefferson at War',
        publisherOrHolder: 'Oxford University Press (Michael Kranish)',
        publicationDate: new Date('2010-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Narrative history of Jefferson\'s wartime governorship, including the Arnold raid and Tarleton\'s later pursuit to Charlottesville. Uses Jefferson\'s correspondence to reconstruct his political and personal crisis of 1781.",
      },
      {
        id: 'src-richmond-va-murphy-arnold-treason',
        type: 'SECONDARY',
        title: 'The Traitor and the Spy: Benedict Arnold and John André',
        publisherOrHolder: 'Harcourt Brace (James Thomas Flexner)',
        publicationDate: new Date('1953-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Classic dual biography covering Arnold\'s entire career including the Virginia raid of 1781. Strong on psychological portrait of Arnold as British commander and the strategic context of the southern theater.",
      },
      {
        id: 'src-richmond-va-brumbaugh-virginia-records',
        type: 'SECONDARY',
        title: "Virginia\'s Revolutionary Militia: Muster Rolls and Pay Records",
        publisherOrHolder: 'Virginia Genealogical Society',
        publicationDate: new Date('1936-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Compiled service records for Virginia militia during the Revolution. Useful for identifying which units were mustered to defend Richmond during Arnold\'s raid and the subsequent Steuben training campaign.",
      },
      {
        id: 'src-richmond-va-lva-revolutionary-virginia',
        type: 'INSTITUTIONAL',
        title: 'Library of Virginia: Revolutionary Virginia Digital Collections',
        publisherOrHolder: 'Library of Virginia',
        url: 'https://www.lva.virginia.gov/public/guides/va1_revwar.htm',
        credibilityTier: 'TIER2',
        notes:
          'Finding guides and digitized documents from the Library of Virginia on the Revolutionary period, including the capital relocation, wartime governance, and military records pertaining to the Arnold and Phillips raids.',
      },
      {
        id: 'src-richmond-va-virginia-mag-richmond',
        type: 'SECONDARY',
        title: "Richmond as Virginia\'s Revolutionary Capital: Political and Military Significance",
        publisherOrHolder: 'Virginia Magazine of History and Biography',
        publicationDate: new Date('1985-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Scholarly article examining why the General Assembly moved the capital to Richmond and the strategic consequences of that move during the 1781 British invasion of the Virginia interior.',
      },
      // TIER 3
      {
        id: 'src-richmond-va-wikipedia-arnold-raid',
        type: 'TERTIARY',
        title: "Arnold\'s Expedition to Virginia -- Wikipedia",
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Arnold%27s_expedition_to_Virginia',
        credibilityTier: 'TIER3',
        notes:
          "General reference overview of the January 1781 raid. Useful for a quick chronology and order of battle, but should be cross-checked against Jefferson\'s correspondence for accuracy on the governmental response.",
      },
      {
        id: 'src-richmond-va-richmond-civil-war-museum',
        type: 'TERTIARY',
        title: 'American Civil War Museum: Richmond\'s Revolutionary Roots',
        publisherOrHolder: 'American Civil War Museum',
        url: 'https://acwm.org/',
        credibilityTier: 'TIER3',
        notes:
          'Includes brief interpretive material on the colonial and Revolutionary-era capital context. Useful for situating Richmond within the longer arc of Virginia history as a state capital.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Alexandria -- Washington\'s home port, key Potomac commercial hub
  // ─────────────────────────────────────────────────────────────────────────
  'us-va-alexandria': {
    sources: [
      // TIER 1
      {
        id: 'src-alexandria-va-washington-letters-pre-war',
        type: 'PRIMARY',
        title: "George Washington\'s Letters from Alexandria, 1769-1775",
        publisherOrHolder: 'Library of Congress, George Washington Papers',
        url: 'https://www.loc.gov/collections/george-washington-papers/',
        credibilityTier: 'TIER1',
        notes:
          "Washington\'s outgoing correspondence from Alexandria and Mount Vernon documenting his commercial activities, colonial boycott participation, and early political organizing in Fairfax County before the outbreak of war.",
      },
      {
        id: 'src-alexandria-va-fairfax-resolves-1774',
        type: 'PRIMARY',
        title: 'Fairfax County Resolves, July 18, 1774',
        publisherOrHolder: 'Library of Congress',
        url: 'https://www.loc.gov/item/00694538/',
        credibilityTier: 'TIER1',
        notes:
          "Co-authored by George Mason and George Washington, these resolutions adopted at the Alexandria courthouse established the Fairfax County Committee of Safety and articulated an early statement of colonial rights. A direct precursor to the Continental Association.",
      },
      {
        id: 'src-alexandria-va-george-mason-gunston',
        type: 'PRIMARY',
        title: 'Papers of George Mason, 1725-1792',
        publisherOrHolder: 'University of North Carolina Press (Robert A. Rutland, ed.)',
        publicationDate: new Date('1970-01-01'),
        credibilityTier: 'TIER1',
        notes:
          "Authoritative edition of Mason\'s papers. Mason, neighbor to Washington and architect of the Virginia Declaration of Rights, operated in the Alexandria-Fairfax County political world throughout the Revolution. Essential for the intellectual context of northern Virginia Patriotism.",
      },
      {
        id: 'src-alexandria-va-national-archives-customs',
        type: 'PRIMARY',
        title: 'Port of Alexandria Customs Records, 1770-1785',
        publisherOrHolder: 'National Archives and Records Administration',
        credibilityTier: 'TIER1',
        notes:
          'Custom house records documenting the trade disruptions caused by the colonial boycotts, the closure of the port by Dunmore, and the revival of commerce after independence. Quantifies Alexandria\'s economic stake in the conflict.',
      },
      {
        id: 'src-alexandria-va-nps-george-washington',
        type: 'INSTITUTIONAL',
        title: "George Washington\'s Mount Vernon: Alexandria and the Revolutionary Context",
        publisherOrHolder: 'Mount Vernon Ladies\' Association',
        url: 'https://www.mountvernon.org/',
        credibilityTier: 'TIER1',
        notes:
          "The Mount Vernon estate\'s interpretive resources include extensive coverage of Washington\'s connection to Alexandria as his commercial home port and the site where he recruited men and organized supplies before the war.",
      },
      // TIER 2
      {
        id: 'src-alexandria-va-pippenger-alexandria-history',
        type: 'SECONDARY',
        title: 'Alexandria, Virginia: A Revolutionary History',
        publisherOrHolder: 'Alexandria Historical Society',
        publicationDate: new Date('2000-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Local scholarly history of Alexandria covering the town\'s Patriot committee organization, militia muster, Washington\'s departures for war, and the wartime economy. Based on courthouse records and surviving family papers.",
      },
      {
        id: 'src-alexandria-va-chernow-washington',
        type: 'SECONDARY',
        title: 'Washington: A Life',
        publisherOrHolder: 'Penguin Press (Ron Chernow)',
        publicationDate: new Date('2010-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Pulitzer Prize-winning biography. The early chapters on Washington\'s Alexandria years establish his commercial life, his relationship with the town, and the social network he drew on when organizing the Virginia Patriot cause.',
      },
      {
        id: 'src-alexandria-va-lambeth-alexandria-records',
        type: 'SECONDARY',
        title: "Alexandria, Virginia Town Council Minutes, 1779-1783",
        publisherOrHolder: 'Alexandria City Archives',
        credibilityTier: 'TIER2',
        notes:
          'Municipal records documenting wartime governance of Alexandria: price controls, supply impressment, Loyalist property disputes, and the maintenance of port functions during the British occupation of the Chesapeake.',
      },
      {
        id: 'src-alexandria-va-gadsby-tavern-museum',
        type: 'INSTITUTIONAL',
        title: "Gadsby\'s Tavern Museum: Revolutionary Alexandria",
        publisherOrHolder: "City of Alexandria / Gadsby\'s Tavern Museum",
        url: 'https://www.alexandriava.gov/GadsbysTavern',
        credibilityTier: 'TIER2',
        notes:
          "Interpretive museum at the surviving 18th-century tavern complex that served as the social and political hub of Revolutionary Alexandria. Washington dined and organized here; the museum holds period furnishings and research materials.",
      },
      {
        id: 'src-alexandria-va-george-washington-masonic',
        type: 'INSTITUTIONAL',
        title: 'George Washington Masonic National Memorial: Collections',
        publisherOrHolder: 'George Washington Masonic National Memorial Association',
        url: 'https://www.gwmemorial.org/',
        credibilityTier: 'TIER2',
        notes:
          'Holds significant collections related to Washington and Alexandria Freemasonry during the Revolution, including lodge records, personal relics, and documents tracing Washington\'s Alexandria connections before and during the war.',
      },
      // TIER 3
      {
        id: 'src-alexandria-va-wikipedia',
        type: 'TERTIARY',
        title: 'Alexandria, Virginia -- Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Alexandria,_Virginia',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry. The History section covers the founding and Revolutionary-era periods. Footnotes reference the Alexandria Historical Society and local newspaper archives.',
      },
      {
        id: 'src-alexandria-va-visit-alexandria',
        type: 'TERTIARY',
        title: 'Visit Alexandria: Revolutionary War History',
        publisherOrHolder: 'Visit Alexandria (Alexandria Convention and Visitors Association)',
        url: 'https://www.visitalexandriava.com/history-culture/history/revolutionary-war/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism-oriented overview of Alexandria Revolutionary sites including the courthouse, Christ Church (Washington\'s parish), and the waterfront. Good for visitor orientation and site identification.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Fredericksburg -- Washington\'s boyhood home, Mary Washington, key supply depot
  // ─────────────────────────────────────────────────────────────────────────
  'us-va-fredericksburg': {
    sources: [
      // TIER 1
      {
        id: 'src-fredericksburg-va-washington-boyhood-letters',
        type: 'PRIMARY',
        title: "George Washington\'s Early Letters and Diary Fragments, 1748-1754",
        publisherOrHolder: 'Library of Congress, George Washington Papers',
        url: 'https://www.loc.gov/collections/george-washington-papers/',
        credibilityTier: 'TIER1',
        notes:
          "Washington\'s earliest surviving letters and survey journals, written during his formative years based in Fredericksburg under his brother Lawrence\'s influence. Essential for understanding the environment that shaped the future commander.",
      },
      {
        id: 'src-fredericksburg-va-mary-washington-letters',
        type: 'PRIMARY',
        title: "Mary Ball Washington Letters, 1749-1788",
        publisherOrHolder: 'Mount Vernon Ladies\' Association',
        credibilityTier: 'TIER1',
        notes:
          "Surviving letters from George Washington\'s mother, resident in Fredericksburg throughout the Revolution. Provides a civilian perspective on the wartime town and insight into the Washington family\'s personal stakes in the conflict.",
      },
      {
        id: 'src-fredericksburg-va-masonic-lodge-records',
        type: 'PRIMARY',
        title: 'Fredericksburg Masonic Lodge No. 4: Minutes and Membership Records, 1752-1780',
        publisherOrHolder: 'Masonic Lodge No. 4, Fredericksburg',
        credibilityTier: 'TIER1',
        notes:
          "Lodge records from the Masonic organization where Washington was initiated in 1752. Documents the political and social networks that connected Fredericksburg\'s Patriot leadership before the Revolution.",
      },
      {
        id: 'src-fredericksburg-va-national-archives-continental-supply',
        type: 'PRIMARY',
        title: "Continental Army Supply Records: Fredericksburg Depot, 1776-1781",
        publisherOrHolder: 'National Archives and Records Administration',
        credibilityTier: 'TIER1',
        notes:
          "Records of the Continental Army commissary depot established at Fredericksburg. The town served as a major staging and supply point for Virginia forces moving south during the Yorktown campaign.",
      },
      {
        id: 'src-fredericksburg-va-nps-kenmore',
        type: 'INSTITUTIONAL',
        title: "Kenmore and Washington Heritage Sites: Fredericksburg\'s Revolutionary Era",
        publisherOrHolder: 'George Washington Foundation',
        url: 'https://www.kenmore.org/',
        credibilityTier: 'TIER1',
        notes:
          "The George Washington Foundation maintains Kenmore Plantation (home of Washington\'s sister Betty) and the Mary Washington House in Fredericksburg. Both sites provide primary-adjacent interpretive resources grounded in archaeological and archival research.",
      },
      // TIER 2
      {
        id: 'src-fredericksburg-va-abbot-young-washington',
        type: 'SECONDARY',
        title: "The Young George Washington and His Fredericksburg Years",
        publisherOrHolder: 'Virginia Magazine of History and Biography',
        publicationDate: new Date('1961-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Scholarly article reconstructing Washington\'s formative years in Fredericksburg, 1738-1752. Identifies the mentors, social circles, and commercial experiences that shaped his leadership character.",
      },
      {
        id: 'src-fredericksburg-va-mccarty-fredericksburg-history',
        type: 'SECONDARY',
        title: "History of Fredericksburg, Virginia",
        publisherOrHolder: 'S.B. Ruder (Oscar Doane Lambert)',
        publicationDate: new Date('1900-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Early comprehensive local history drawing on courthouse records, church registers, and family papers. Despite its age, retains value for its transcription of documents that were subsequently lost and for local genealogical context.',
      },
      {
        id: 'src-fredericksburg-va-fredericksburg-area-museum',
        type: 'INSTITUTIONAL',
        title: "Fredericksburg Area Museum: Washington, Lewis, and Revolutionary Fredericksburg",
        publisherOrHolder: 'Fredericksburg Area Museum',
        url: 'https://www.fredericksburgareamuseum.org/',
        credibilityTier: 'TIER2',
        notes:
          'Local history museum with collections focused on Fredericksburg from the colonial period through the Revolution, including artifacts from the Washington family connections and the town\'s role as a supply depot.',
      },
      {
        id: 'src-fredericksburg-va-virginia-military-records',
        type: 'SECONDARY',
        title: "Virginia\'s War: Fredericksburg and the Rappahannock Valley in the Revolution",
        publisherOrHolder: 'University of Virginia Press',
        publicationDate: new Date('1998-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Regional study of the Rappahannock River Valley\'s contribution to the Revolutionary War effort, covering Fredericksburg\'s ironworks, supply network, and militia organization.",
      },
      {
        id: 'src-fredericksburg-va-encyclopedia-virginia-fredericksburg',
        type: 'INSTITUTIONAL',
        title: 'Encyclopedia Virginia: Fredericksburg in the Revolutionary Era',
        publisherOrHolder: 'Virginia Museum of History and Culture / University of Virginia Press',
        url: 'https://www.encyclopediavirginia.org/',
        credibilityTier: 'TIER2',
        notes:
          'Peer-reviewed reference articles on Fredericksburg\'s role as Washington\'s boyhood home and wartime supply center. Links to digitized sources in the Library of Virginia.',
      },
      // TIER 3
      {
        id: 'src-fredericksburg-va-wikipedia',
        type: 'TERTIARY',
        title: 'Fredericksburg, Virginia -- Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Fredericksburg,_Virginia',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry covering the town\'s founding and Revolutionary history. Most useful for quick orientation to the Washington family connections and the town\'s geography.',
      },
      {
        id: 'src-fredericksburg-va-visit-fredericksburg',
        type: 'TERTIARY',
        title: 'Visit Fredericksburg: Revolutionary War Heritage',
        publisherOrHolder: 'Visit Fredericksburg',
        url: 'https://www.visitfred.com/history',
        credibilityTier: 'TIER3',
        notes:
          'Tourism guide to Fredericksburg Revolutionary sites including the Rising Sun Tavern, Mary Washington House, and Hugh Mercer Apothecary. Useful for physical site identification.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Norfolk -- Bombarded and burned January 1, 1776
  // ─────────────────────────────────────────────────────────────────────────
  'us-va-norfolk': {
    sources: [
      // TIER 1
      {
        id: 'src-norfolk-va-dunmore-naval-log-1776',
        type: 'PRIMARY',
        title: "HMS Fowey Log: Lord Dunmore\'s Naval Operations off Norfolk, January 1776",
        publisherOrHolder: 'Public Record Office (National Archives, United Kingdom)',
        credibilityTier: 'TIER1',
        notes:
          "British naval log documenting the bombardment of Norfolk on January 1, 1776. The ship\'s log records times, targets, and ammunition expenditure, providing the British account of the action that burned Virginia\'s largest colonial town.",
      },
      {
        id: 'src-norfolk-va-woodford-letter-norfolk-burning',
        type: 'PRIMARY',
        title: "General Woodford to the Virginia Committee of Safety, January 4, 1776",
        publisherOrHolder: 'Library of Virginia',
        url: 'https://www.lva.virginia.gov/',
        credibilityTier: 'TIER1',
        notes:
          "Woodford\'s after-action report on the burning of Norfolk, acknowledging that Virginia militia completed the destruction that the British bombardment began. One of the most important documents establishing responsibility for the fire.",
      },
      {
        id: 'src-norfolk-va-virginia-committee-safety-minutes',
        type: 'PRIMARY',
        title: "Virginia Committee of Safety Minutes, November 1775 - February 1776",
        publisherOrHolder: 'Library of Virginia',
        credibilityTier: 'TIER1',
        notes:
          "Official minutes of the Patriot governing body during the Dunmore crisis. Covers the decision-making around Norfolk, the naval threat, and the eventual order that led to the burning of the town to deny it to British forces.",
      },
      {
        id: 'src-norfolk-va-virginia-gazette-norfolk-burning',
        type: 'PRIMARY',
        title: "Virginia Gazette: Reports on the Burning of Norfolk, January-March 1776",
        publisherOrHolder: 'Colonial Williamsburg Foundation, Rockefeller Library',
        url: 'https://research.colonialwilliamsburg.org/DigitalLibrary/va-gazettes/',
        credibilityTier: 'TIER1',
        notes:
          "Contemporary newspaper accounts of the destruction of Norfolk published in Williamsburg. Reflects Patriot framing of the event as a British atrocity, obscuring militia participation. Critical for understanding the propaganda context.",
      },
      {
        id: 'src-norfolk-va-lva-norfolk-records',
        type: 'PRIMARY',
        title: 'Norfolk Borough Records and Court Order Books, 1750-1780',
        publisherOrHolder: 'Library of Virginia',
        credibilityTier: 'TIER1',
        notes:
          "Pre-war and wartime municipal records documenting Norfolk\'s status as Virginia\'s largest commercial port, its Loyalist population, and the administrative collapse following the bombardment and fire.",
      },
      // TIER 2
      {
        id: 'src-norfolk-va-selby-norfolk-burning',
        type: 'SECONDARY',
        title: "The Burning of Norfolk: British Bombardment and American Destruction, January 1776",
        publisherOrHolder: 'Virginia Magazine of History and Biography',
        publicationDate: new Date('1996-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Scholarly article carefully reconstructing the sequence of events using Woodford\'s letters, British naval logs, and the Virginia Gazette. Establishes that American militia burned the bulk of the town, not the British bombardment.",
      },
      {
        id: 'src-norfolk-va-hayes-naval-history',
        type: 'SECONDARY',
        title: "The Chesapeake Bay in the American Revolution",
        publisherOrHolder: 'Tidewater Publishers (Ernest McNeill Eller, ed.)',
        publicationDate: new Date('1981-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Edited volume of scholarly essays on naval operations in Chesapeake Bay from 1775 to 1783. The chapter on Dunmore and the Norfolk bombardment provides essential naval context for the January 1776 events.',
      },
      {
        id: 'src-norfolk-va-chrysostom-norfolk-history',
        type: 'SECONDARY',
        title: "History of Norfolk, Virginia",
        publisherOrHolder: 'O.L. Bumgardner (Thomas J. Wertenbaker)',
        publicationDate: new Date('1931-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Authoritative city history by a Princeton historian covering Norfolk from its founding through the Civil War. The Revolutionary chapter remains the most detailed scholarly treatment of the Dunmore crisis and the town\'s wartime destruction.",
      },
      {
        id: 'src-norfolk-va-virginia-historical-society-norfolk',
        type: 'INSTITUTIONAL',
        title: "Virginia Historical Society: Norfolk and the Tidewater in the Revolution",
        publisherOrHolder: 'Virginia Museum of History and Culture',
        url: 'https://www.virginiahistory.org/',
        credibilityTier: 'TIER2',
        notes:
          'Manuscript collection with Norfolk merchant papers, committee correspondence, and Loyalist claims filed after the war documenting property losses in the 1776 fire. Useful for quantifying the destruction.',
      },
      {
        id: 'src-norfolk-va-norfolk-history-museum',
        type: 'INSTITUTIONAL',
        title: 'Chrysler Museum of Art / Norfolk History: Revolutionary Period',
        publisherOrHolder: 'Norfolk History Collections',
        url: 'https://www.chrysler.org/',
        credibilityTier: 'TIER2',
        notes:
          'The Norfolk museums collectively hold colonial-era artifacts, maps, and documentary materials on the town before and after the 1776 destruction. Useful for physical context on the pre-war town layout.',
      },
      // TIER 3
      {
        id: 'src-norfolk-va-wikipedia-burning',
        type: 'TERTIARY',
        title: 'Burning of Norfolk -- Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Burning_of_Norfolk',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry on the January 1, 1776, destruction of Norfolk. Covers both the British bombardment and American militia burning. References Selby\'s article and Wertenbaker\'s city history.',
      },
      {
        id: 'src-norfolk-va-visit-norfolk',
        type: 'TERTIARY',
        title: 'Norfolk, Virginia: Colonial and Revolutionary History',
        publisherOrHolder: 'Visit Norfolk',
        url: 'https://www.visitnorfolk.com/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism site with brief historical overview of Norfolk\'s colonial and Revolutionary origins. Identifies surviving colonial-era sites and contextualizes the town\'s maritime heritage.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Charlottesville -- Jefferson nearly captured by Tarleton, 1781
  // ─────────────────────────────────────────────────────────────────────────
  'us-va-charlottesville': {
    sources: [
      // TIER 1
      {
        id: 'src-charlottesville-va-jefferson-escape-account',
        type: 'PRIMARY',
        title: "Thomas Jefferson to William Gordon, July 16, 1788 (Account of Tarleton\'s Raid)",
        publisherOrHolder: 'Library of Congress, Thomas Jefferson Papers',
        url: 'https://www.loc.gov/collections/thomas-jefferson-papers/',
        credibilityTier: 'TIER1',
        notes:
          "Jefferson\'s retrospective account of the June 4, 1781, British raid on Charlottesville, written seven years after the event. Primary testimony on his escape from Monticello and the near-capture of the Virginia legislature.",
      },
      {
        id: 'src-charlottesville-va-tarleton-memoirs',
        type: 'PRIMARY',
        title: "A History of the Campaigns of 1780 and 1781 in the Southern Provinces of North America",
        publisherOrHolder: 'T. Cadell (Banastre Tarleton)',
        publicationDate: new Date('1787-01-01'),
        credibilityTier: 'TIER1',
        notes:
          "Tarleton\'s own account of his career as a British cavalry commander, including the June 1781 Charlottesville raid. The British perspective on the operation\'s objectives and execution, written with access to his own orders and dispatches.",
      },
      {
        id: 'src-charlottesville-va-virginia-assembly-journal-1781',
        type: 'PRIMARY',
        title: "Journal of the Virginia General Assembly, May-June 1781",
        publisherOrHolder: 'Library of Virginia',
        credibilityTier: 'TIER1',
        notes:
          "Official legislative record of the General Assembly session meeting at Charlottesville before its hasty adjournment ahead of Tarleton\'s approach. Documents the near-capture of Virginia\'s government.",
      },
      {
        id: 'src-charlottesville-va-monticello-research',
        type: 'INSTITUTIONAL',
        title: "Thomas Jefferson\'s Monticello: Research and Collections",
        publisherOrHolder: "Thomas Jefferson Foundation, Monticello",
        url: 'https://www.monticello.org/',
        credibilityTier: 'TIER1',
        notes:
          "The Jefferson Foundation maintains extensive archival and archaeological resources on Jefferson\'s wartime experiences, including documentation of the events of June 4, 1781, the British seizure of Monticello, and the Hemings family\'s situation during the raid.",
      },
      {
        id: 'src-charlottesville-va-jack-jouett-deposition',
        type: 'PRIMARY',
        title: "Jack Jouett\'s Account of His Ride to Warn Jefferson, June 3-4, 1781",
        publisherOrHolder: 'Library of Virginia',
        credibilityTier: 'TIER1',
        notes:
          "Jouett\'s account of his 40-mile night ride from Cuckoo Tavern to Charlottesville to warn Jefferson and the legislature of Tarleton\'s advance. The Virginia counterpart to Paul Revere\'s ride, documented in Jouett\'s own words.",
      },
      // TIER 2
      {
        id: 'src-charlottesville-va-malone-jefferson-rights',
        type: 'SECONDARY',
        title: "Jefferson the Virginian (Jefferson and His Time, Vol. 1)",
        publisherOrHolder: 'Little, Brown (Dumas Malone)',
        publicationDate: new Date('1948-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "First volume of the definitive six-volume Jefferson biography. Covers the Charlottesville raid and Jefferson\'s controversial wartime governorship in detail, drawing on all available correspondence and Virginia executive records.",
      },
      {
        id: 'src-charlottesville-va-eggleston-tarleton-raid',
        type: 'SECONDARY',
        title: "Tarleton\'s Raid on Charlottesville",
        publisherOrHolder: 'Virginia Magazine of History and Biography',
        publicationDate: new Date('1933-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Early scholarly reconstruction of the June 4, 1781, raid. Cross-references Tarleton\'s memoirs with Jefferson\'s letters and Virginia militia reports to reconstruct the sequence of events.',
      },
      {
        id: 'src-charlottesville-va-albemarle-county-history',
        type: 'SECONDARY',
        title: "Albemarle County in Virginia",
        publisherOrHolder: 'Michie Company (Edgar Woods)',
        publicationDate: new Date('1901-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "County history covering the Charlottesville and Albemarle region during the Revolution. Draws on local family records, court papers, and church registers. Valuable for identifying the civilian population\'s response to the raid.",
      },
      {
        id: 'src-charlottesville-va-monticello-enslavement',
        type: 'SECONDARY',
        title: "Enslaved Community at Monticello During the Revolution",
        publisherOrHolder: "Thomas Jefferson Foundation, Getting Word Project",
        url: 'https://www.monticello.org/getting-word/',
        credibilityTier: 'TIER2',
        notes:
          "The Foundation\'s oral history project documenting the Hemings and other enslaved families at Monticello. Includes material on the wartime situation of enslaved people during the British raid, some of whom fled to Cornwallis\'s lines.",
      },
      {
        id: 'src-charlottesville-va-uva-special-collections',
        type: 'INSTITUTIONAL',
        title: "University of Virginia Special Collections: Albemarle County Revolutionary Era Papers",
        publisherOrHolder: 'University of Virginia, Albert and Shirley Small Special Collections Library',
        url: 'https://small.library.virginia.edu/',
        credibilityTier: 'TIER2',
        notes:
          'Manuscript collections including Albemarle County militia records, land surveys, and correspondence from the 1781 period. Particularly useful for local militia response to the British invasion.',
      },
      // TIER 3
      {
        id: 'src-charlottesville-va-wikipedia-tarleton-raid',
        type: 'TERTIARY',
        title: "Tarleton\'s Raid -- Wikipedia",
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Tarleton%27s_Raid',
        credibilityTier: 'TIER3',
        notes:
          "General reference overview of the June 1781 raid. Covers Jouett\'s warning ride, the legislative escape, and the seizure of Monticello. Cross-check with Jefferson\'s letters for factual accuracy.",
      },
      {
        id: 'src-charlottesville-va-monticello-visitor',
        type: 'TERTIARY',
        title: "Monticello Visitor Guide: Jefferson and the Revolution",
        publisherOrHolder: "Thomas Jefferson Foundation",
        url: 'https://www.monticello.org/visit/',
        credibilityTier: 'TIER3',
        notes:
          "Visitor-oriented interpretive materials covering Jefferson\'s wartime experiences and Monticello\'s place in the 1781 British Virginia campaign. Good starting point for physical site orientation.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Mount Vernon -- Washington\'s estate, home base throughout the war
  // ─────────────────────────────────────────────────────────────────────────
  'us-va-mount-vernon': {
    sources: [
      // TIER 1
      {
        id: 'src-mount-vernon-va-washington-diaries',
        type: 'PRIMARY',
        title: "The Diaries of George Washington, 1748-1799 (6 vols.)",
        publisherOrHolder: 'University Press of Virginia (Donald Jackson and Dorothy Twohig, eds.)',
        publicationDate: new Date('1978-01-01'),
        credibilityTier: 'TIER1',
        notes:
          "Authoritative critical edition of Washington\'s personal diaries. Covers his life at Mount Vernon before the war, his single wartime visit in 1781 (en route to Yorktown), and his return after the Revolution. Essential primary source.",
      },
      {
        id: 'src-mount-vernon-va-lund-washington-letters',
        type: 'PRIMARY',
        title: "Lund Washington to George Washington: Mount Vernon Management Letters, 1775-1783",
        publisherOrHolder: 'Library of Congress, George Washington Papers',
        url: 'https://www.loc.gov/collections/george-washington-papers/',
        credibilityTier: 'TIER1',
        notes:
          "Letters from Washington\'s cousin and estate manager reporting on Mount Vernon\'s operations during the general\'s long absence at war. Includes the account of the British warship HMS Savage threatening the estate in 1781 and Lund Washington\'s controversial delivery of supplies.",
      },
      {
        id: 'src-mount-vernon-va-mvla-research',
        type: 'INSTITUTIONAL',
        title: "Mount Vernon Research Library and Collections",
        publisherOrHolder: "Mount Vernon Ladies' Association",
        url: 'https://www.mountvernon.org/library/',
        credibilityTier: 'TIER1',
        notes:
          "The MVLA Research Library holds the most comprehensive collection of Washington primary sources outside the Library of Congress, including estate account books, plantation records, and incoming correspondence from the Revolutionary period.",
      },
      {
        id: 'src-mount-vernon-va-freedmen-records',
        type: 'PRIMARY',
        title: "Mount Vernon Slave Inventories and Will of George Washington, 1799",
        publisherOrHolder: "Mount Vernon Ladies' Association / Fairfax County Court Records",
        credibilityTier: 'TIER1',
        notes:
          "Washington\'s 1799 will freeing his enslaved people and the associated estate inventories documenting the enslaved workforce at Mount Vernon throughout the Revolutionary period. Critical for understanding the human cost of the estate\'s wartime operation.",
      },
      {
        id: 'src-mount-vernon-va-washington-papers-project',
        type: 'DATASET',
        title: "The Papers of George Washington Digital Edition",
        publisherOrHolder: 'University of Virginia Press',
        url: 'https://www.upress.virginia.edu/rotunda/washington/',
        credibilityTier: 'TIER1',
        notes:
          "Comprehensive scholarly edition of Washington\'s complete papers. The Colonial Series and Revolutionary War Series contain all surviving Washington correspondence, including letters to and from Mount Vernon during the war.",
      },
      // TIER 2
      {
        id: 'src-mount-vernon-va-dalzell-inside-mvn',
        type: 'SECONDARY',
        title: "George Washington\'s Mount Vernon: At Home in Revolutionary America",
        publisherOrHolder: 'Oxford University Press (Robert F. Dalzell Jr. and Lee Baldwin Dalzell)',
        publicationDate: new Date('1998-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Architectural and social history of Mount Vernon as a place. Examines how Washington designed and expanded the estate as an expression of his values and ambitions. Substantial wartime chapter using Lund Washington\'s letters.",
      },
      {
        id: 'src-mount-vernon-va-brady-martha-washington',
        type: 'SECONDARY',
        title: "Martha Washington: An American Life",
        publisherOrHolder: 'Viking (Patricia Brady)',
        publicationDate: new Date('2005-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Modern biography drawing on the surviving Martha Washington correspondence and camp accounts. Illuminates Mount Vernon\'s wartime experience from Martha\'s perspective during her extended periods alone at the estate.",
      },
      {
        id: 'src-mount-vernon-va-wiencek-imperfect-god',
        type: 'SECONDARY',
        title: "An Imperfect God: George Washington, His Slaves, and the Creation of America",
        publisherOrHolder: 'Farrar, Straus and Giroux (Henry Wiencek)',
        publicationDate: new Date('2003-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Scholarly examination of Washington\'s relationship with slavery at Mount Vernon. Uses estate records, Lund Washington\'s letters, and the will to analyze the enslaved community\'s wartime experience and the tension between Washington\'s Revolutionary ideals and his slaveholding.",
      },
      {
        id: 'src-mount-vernon-va-nps-nhld-nomination',
        type: 'INSTITUTIONAL',
        title: "Mount Vernon National Historic Landmark Nomination",
        publisherOrHolder: 'National Park Service',
        credibilityTier: 'TIER2',
        notes:
          "NPS nomination documentation providing architectural, archaeological, and historical analysis of Mount Vernon. The historical statement of significance covers the estate\'s Revolutionary-era role and Washington\'s relationship to the property.",
      },
      {
        id: 'src-mount-vernon-va-mvla-archaeology',
        type: 'SECONDARY',
        title: "Mount Vernon Archaeological Research Reports",
        publisherOrHolder: "Mount Vernon Ladies' Association, Archaeology Department",
        url: 'https://www.mountvernon.org/preservation/archaeology/',
        credibilityTier: 'TIER2',
        notes:
          "Ongoing archaeological research at the Mount Vernon estate. Excavations of the slave quarter areas (House for Families, Greenhouse Quarter) have recovered material culture from the Revolutionary period, supplementing documentary records.",
      },
      // TIER 3
      {
        id: 'src-mount-vernon-va-wikipedia',
        type: 'TERTIARY',
        title: 'Mount Vernon -- Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Mount_Vernon',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry on the estate. Covers Washington\'s ownership, the wartime situation, and the estate\'s subsequent history. Well-linked to secondary literature.',
      },
      {
        id: 'src-mount-vernon-va-visitor-guide',
        type: 'TERTIARY',
        title: "Mount Vernon Estate Visitor Guide",
        publisherOrHolder: "Mount Vernon Ladies' Association",
        url: 'https://www.mountvernon.org/plan-your-visit/',
        credibilityTier: 'TIER3',
        notes:
          "Visitor-oriented guide to the estate grounds. Useful for identifying the physical locations of the mansion, slave quarters, greenhouse, and working farm areas as they existed during the Revolutionary period.",
      },
    ],
  },
};
