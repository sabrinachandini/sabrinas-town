// MODEL: Claude Sonnet 4.6
// New Jersey Revolutionary War source data
// Hub towns (15-20 sources): us-nj-trenton, us-nj-princeton, us-nj-morristown
// Standard towns (10+ sources): us-nj-monmouth, us-nj-new-brunswick, us-nj-fort-lee

import { Prisma } from '@prisma/client';

export const newJerseySources: Record<
  string,
  { sources: Prisma.SourceCreateInput[]; sharedIds?: string[] }
> = {
  // ─────────────────────────────────────────────────────────────
  // HUB: Trenton (15-20 sources)
  // Crossing of the Delaware, Christmas 1776 surprise attack
  // ─────────────────────────────────────────────────────────────
  'us-nj-trenton': {
    sources: [
      // TIER 1 -- Primary documents, NPS, university presses, archives
      {
        id: 'src-tre-washington-trenton-orders',
        type: 'PRIMARY',
        title: 'Washington\'s Orders for the Crossing of the Delaware and Attack on Trenton',
        publisherOrHolder: 'Library of Congress, George Washington Papers',
        url: 'https://www.loc.gov/collections/george-washington-papers/',
        credibilityTier: 'TIER1',
        notes:
          'Washington\'s written attack orders for the December 25-26, 1776 operation including the crossing plan and the famous "Victory or Death" password. The primary documentary record of the Trenton operation.',
      },
      {
        id: 'src-tre-rall-dispatch-rall-death',
        type: 'PRIMARY',
        title: 'Hessian Colonel Rall\'s Papers and Battle of Trenton German Accounts',
        publisherOrHolder: 'Staatsarchiv Marburg (German State Archives)',
        credibilityTier: 'TIER1',
        notes:
          'Hessian officer reports on the December 26 surprise attack including accounts from survivors. The German-language sources provide the defending garrison\'s perspective, largely absent from American accounts.',
      },
      {
        id: 'src-tre-mccullough-1776-trenton',
        type: 'SECONDARY',
        title: '1776',
        publisherOrHolder: 'Simon & Schuster (David McCullough)',
        publicationDate: new Date('2005-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Narrative history covering the crossing of the Delaware and Battle of Trenton in detail. Integrates American, British, and Hessian primary sources into the most widely-read account of the operation.',
      },
      {
        id: 'src-tre-fischer-washington-crossing',
        type: 'SECONDARY',
        title: 'Washington\'s Crossing',
        publisherOrHolder: 'Oxford University Press (David Hackett Fischer)',
        publicationDate: new Date('2004-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Pulitzer Prize-winning history of the Ten Crucial Days (December 25, 1776 - January 3, 1777). The most thoroughly documented account of Trenton and Princeton, drawing on 80+ archives in five countries.',
      },
      {
        id: 'src-tre-nps-washington-crossing',
        type: 'INSTITUTIONAL',
        title: 'Washington Crossing Historic Park: Official Site',
        publisherOrHolder: 'Pennsylvania/New Jersey State Parks',
        url: 'https://www.nj.gov/dep/parksandforests/historic/washcros/index.html',
        credibilityTier: 'TIER1',
        notes:
          'New Jersey and Pennsylvania state park documentation for the crossing site and Trenton battlefield. Includes archaeological survey results and interpretive program materials.',
      },
      {
        id: 'src-tre-paine-american-crisis-1',
        type: 'PRIMARY',
        title: 'The American Crisis, No. 1 (Thomas Paine)',
        publisherOrHolder: 'Philadelphia (self-published)',
        publicationDate: new Date('1776-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Paine\'s December 19, 1776 pamphlet, read aloud to Washington\'s army before the Trenton crossing. "These are the times that try men\'s souls" -- written during the retreat across New Jersey, this text galvanized the operation.',
      },
      {
        id: 'src-tre-continental-army-orderly-trenton',
        type: 'PRIMARY',
        title: 'Continental Army Orderly Books: New Jersey Campaign, December 1776',
        publisherOrHolder: 'National Archives and Records Administration',
        credibilityTier: 'TIER1',
        notes:
          'Brigade and regimental orderly books from the Delaware crossing and Trenton attack. Includes the original deployment orders and after-action reports filed by Continental officers.',
      },
      {
        id: 'src-tre-smith-battle-trenton-princeton',
        type: 'SECONDARY',
        title: 'The Battle of Trenton (The American Revolution)',
        publisherOrHolder: 'Philip Freneau Press (Samuel Stelle Smith)',
        publicationDate: new Date('1965-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Detailed operational history of the Trenton engagement by a specialist in New Jersey Revolutionary War battles. Draws on Hessian regimental records and American pension applications.',
      },
      // TIER 2
      {
        id: 'src-tre-nj-state-archives-trenton',
        type: 'INSTITUTIONAL',
        title: 'New Jersey State Archives: Revolutionary War Era Records',
        publisherOrHolder: 'New Jersey State Archives',
        url: 'https://www.nj.gov/state/archives/',
        credibilityTier: 'TIER2',
        notes:
          'State archival holdings including New Jersey Council of Safety records, militia muster rolls, and Trenton-area civilian accounts of the 1776 Hessian occupation and American surprise attack.',
      },
      {
        id: 'src-tre-trenton-city-museum',
        type: 'INSTITUTIONAL',
        title: 'Old Barracks Museum: Revolutionary War Collections',
        publisherOrHolder: 'Old Barracks Museum',
        url: 'https://www.barracks.org/',
        credibilityTier: 'TIER2',
        notes:
          'Museum in the barracks used by Hessian troops at the time of Washington\'s attack. Collections include Hessian equipment, weapons, and documentary materials from the occupation.',
      },
      {
        id: 'src-tre-stryker-battles-trenton-princeton',
        type: 'SECONDARY',
        title: 'The Battles of Trenton and Princeton',
        publisherOrHolder: 'Houghton Mifflin (William S. Stryker)',
        publicationDate: new Date('1898-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Pioneering scholarly history of the Ten Crucial Days, drawing on Hessian regimental records, pension files, and New Jersey local archives. Still valuable for its documentary appendices.',
      },
      {
        id: 'src-tre-hessian-diary-trenton',
        type: 'PRIMARY',
        title: 'Diary of Johann Heinrich Baurmeister, 1776-1780',
        publisherOrHolder: 'Rutgers University Press (Bernhard Uhlendorf, trans.)',
        publicationDate: new Date('1957-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'English translation of a Hessian adjutant general\'s diary covering the New Jersey campaign including the aftermath of Trenton. Provides sustained German-language eyewitness coverage of the New Jersey theater.',
      },
      {
        id: 'src-tre-ten-crucial-days-nj',
        type: 'SECONDARY',
        title: 'Ten Crucial Days: Washington\'s Vision for Victory Unfolds',
        publisherOrHolder: 'Knox Press (William L. Kidder)',
        publicationDate: new Date('2017-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Modern account of the Ten Crucial Days campaign drawing on New Jersey local records and newly translated Hessian sources. Emphasizes the role of New Jersey militia alongside Continental forces.',
      },
      {
        id: 'src-tre-trenton-nj-heritage',
        type: 'INSTITUTIONAL',
        title: 'Trenton City Museum: American Revolution Interpretive Collection',
        publisherOrHolder: 'Trenton City Museum at Ellarslie',
        url: 'https://ellarslie.org/',
        credibilityTier: 'TIER2',
        notes:
          'Municipal museum with collections documenting Trenton\'s role in the Revolution, including the Battle of Trenton and the city\'s subsequent history as New Jersey\'s capital.',
      },
      // TIER 3
      {
        id: 'src-tre-wikipedia-battle-trenton',
        type: 'TERTIARY',
        title: 'Battle of Trenton -- Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Battle_of_Trenton',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of the December 26, 1776 battle. Useful for orientation; Fischer\'s Washington\'s Crossing should be consulted for scholarly detail.',
      },
      {
        id: 'src-tre-visit-nj-trenton',
        type: 'TERTIARY',
        title: 'Visit New Jersey: Trenton Revolutionary War Heritage',
        publisherOrHolder: 'New Jersey Division of Travel and Tourism',
        url: 'https://www.visitnj.org/trenton',
        credibilityTier: 'TIER3',
        notes:
          'Tourism guide to Trenton\'s Revolutionary War sites. Practical visitor information on the Old Barracks, Washington Crossing, and the battlefield.',
      },
      {
        id: 'src-tre-trenton-capital-history',
        type: 'TERTIARY',
        title: 'Capital City: Trenton\'s History as State Capital',
        publisherOrHolder: 'City of Trenton',
        url: 'https://www.trentonnj.org/',
        credibilityTier: 'TIER3',
        notes:
          'Municipal resources on Trenton\'s history as New Jersey\'s state capital, a status that grew from its Revolutionary War prominence. Accessible public-facing materials.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // HUB: Princeton (15-20 sources)
  // Battle January 3, 1777, Ten Crucial Days
  // ─────────────────────────────────────────────────────────────
  'us-nj-princeton': {
    sources: [
      // TIER 1
      {
        id: 'src-pri-washington-princeton-orders',
        type: 'PRIMARY',
        title: 'Washington\'s Orders and After-Action Report on the Battle of Princeton',
        publisherOrHolder: 'Library of Congress, George Washington Papers',
        url: 'https://www.loc.gov/collections/george-washington-papers/',
        credibilityTier: 'TIER1',
        notes:
          'Washington\'s operational orders for the January 3, 1777 engagement and his dispatch to Congress reporting the victory. The central primary document for the battle command perspective.',
      },
      {
        id: 'src-pri-fischer-washingtons-crossing-princeton',
        type: 'SECONDARY',
        title: 'Washington\'s Crossing',
        publisherOrHolder: 'Oxford University Press (David Hackett Fischer)',
        publicationDate: new Date('2004-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Pulitzer Prize-winning history covering Princeton in its "Ten Crucial Days" context. Fischer\'s analysis of the night march and the morning battle at Thomas Clarke\'s farm is the most authoritative account.',
      },
      {
        id: 'src-pri-mercer-death-accounts',
        type: 'PRIMARY',
        title: 'Eyewitness Accounts of General Hugh Mercer\'s Death at Princeton',
        publisherOrHolder: 'New Jersey Historical Society Proceedings',
        credibilityTier: 'TIER1',
        notes:
          'Compiled first-person accounts of Brigadier General Hugh Mercer\'s mortal wounding by British bayonets at the Battle of Princeton. Primary source material for one of the battle\'s most significant moments.',
      },
      {
        id: 'src-pri-nps-princeton-battlefield',
        type: 'INSTITUTIONAL',
        title: 'Princeton Battlefield State Park: Historical Documentation',
        publisherOrHolder: 'New Jersey State Park Service',
        url: 'https://www.nj.gov/dep/parksandforests/historic/princeton/index.html',
        credibilityTier: 'TIER1',
        notes:
          'State park documentation for the Princeton battlefield including the Thomas Clarke Farm site. Includes archaeological survey results identifying artifact scatters from the 1777 engagement.',
      },
      {
        id: 'src-pri-cornwallis-princeton-report',
        type: 'PRIMARY',
        title: 'Lord Cornwallis\'s Dispatch on the Princeton Engagement, January 1777',
        publisherOrHolder: 'UK National Archives, War Office Papers',
        credibilityTier: 'TIER1',
        notes:
          'Cornwallis\'s official report on being outmaneuvered by Washington\'s night march to Princeton. The British perspective on a tactical surprise that ranks among Washington\'s most brilliant operations.',
      },
      {
        id: 'src-pri-smith-trenton-princeton',
        type: 'SECONDARY',
        title: 'The Battle of Princeton',
        publisherOrHolder: 'Philip Freneau Press (Samuel Stelle Smith)',
        publicationDate: new Date('1967-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Companion volume to Smith\'s Battle of Trenton. Detailed operational account of the January 3, 1777 engagement based on pension files, Hessian records, and New Jersey local archives.',
      },
      {
        id: 'src-pri-princeton-university-archives',
        type: 'PRIMARY',
        title: 'Princeton University Archives: Nassau Hall During the Revolution',
        publisherOrHolder: 'Princeton University Library',
        url: 'https://rbsc.princeton.edu/',
        credibilityTier: 'TIER1',
        notes:
          'Princeton University archives documenting Nassau Hall\'s use as a barracks and hospital by both British and American forces during the 1777 battle. Building damage records and contemporary accounts.',
      },
      {
        id: 'src-pri-stryker-battles-trenton-princeton',
        type: 'SECONDARY',
        title: 'The Battles of Trenton and Princeton',
        publisherOrHolder: 'Houghton Mifflin (William S. Stryker)',
        publicationDate: new Date('1898-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'The foundational scholarly history of the Ten Crucial Days. Stryker\'s coverage of Princeton draws on British regimental records obtained from London and New Jersey pension testimony.',
      },
      // TIER 2
      {
        id: 'src-pri-nj-historical-society-princeton',
        type: 'INSTITUTIONAL',
        title: 'New Jersey Historical Society: Princeton Area Revolutionary War Collections',
        publisherOrHolder: 'New Jersey Historical Society',
        url: 'https://jerseyhistory.org/',
        credibilityTier: 'TIER2',
        notes:
          'State historical society holdings including Princeton-area family papers, Quaker meeting records, and New Jersey militia documents from the 1776-1777 campaign period.',
      },
      {
        id: 'src-pri-wacker-land-people-nj',
        type: 'SECONDARY',
        title: 'Land and People: A Cultural Geography of Preindustrial New Jersey, Origins and Settlement Patterns',
        publisherOrHolder: 'Rutgers University Press (Peter O. Wacker)',
        publicationDate: new Date('1975-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Geographic and demographic context for Princeton and central New Jersey. Essential for understanding the landscape, road network, and population through which Washington\'s army maneuvered.',
      },
      {
        id: 'src-pri-kidder-ten-crucial-days',
        type: 'SECONDARY',
        title: 'Ten Crucial Days: Washington\'s Vision for Victory Unfolds',
        publisherOrHolder: 'Knox Press (William L. Kidder)',
        publicationDate: new Date('2017-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Modern synthesis of Princeton in context, drawing on newly translated Hessian sources and New Jersey militia records. Particularly strong on the night march from Trenton to Princeton.',
      },
      {
        id: 'src-pri-crossroads-revolution-nj',
        type: 'SECONDARY',
        title: 'New Jersey: A Military History of the Revolution',
        publisherOrHolder: 'New Jersey Historical Commission (Mark Edward Lender)',
        publicationDate: new Date('1975-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'State-commissioned military history covering Princeton and the 1776-77 New Jersey campaign. Based on primary sources in New Jersey archives and the NARA pension files.',
      },
      {
        id: 'src-pri-princeton-battlefield-society',
        type: 'INSTITUTIONAL',
        title: 'Princeton Battlefield Society: Archaeological Research Program',
        publisherOrHolder: 'Princeton Battlefield Society',
        url: 'https://www.theprincetonbattlefield.org/',
        credibilityTier: 'TIER2',
        notes:
          'Preservation organization\'s ongoing archaeological program at the battlefield. Metal detector surveys have identified artifact distributions that refine understanding of troop positions during the battle.',
      },
      // TIER 3
      {
        id: 'src-pri-wikipedia-princeton',
        type: 'TERTIARY',
        title: 'Battle of Princeton -- Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Battle_of_Princeton',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of the January 3, 1777 battle. Useful for orientation.',
      },
      {
        id: 'src-pri-visit-princeton-revolution',
        type: 'TERTIARY',
        title: 'Princeton Tourism: American Revolution Heritage',
        publisherOrHolder: 'Princeton Mercer Regional Convention and Visitors Bureau',
        url: 'https://www.visitprinceton.org/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism guide to Princeton\'s Revolutionary War sites including the battlefield, Nassau Hall, and the Clarke Farm. Practical visitor information.',
      },
      {
        id: 'src-pri-nassau-hall-history',
        type: 'TERTIARY',
        title: 'Nassau Hall History: Princeton University\'s Role in the Revolution',
        publisherOrHolder: 'Princeton University',
        url: 'https://www.princeton.edu/history',
        credibilityTier: 'TIER3',
        notes:
          'University-produced public history of Nassau Hall\'s Revolutionary War role as barracks, hospital, and temporary home of the Continental Congress (1783). Accessible institutional narrative.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // HUB: Morristown (15-20 sources)
  // Winter encampments 1777 and 1779-80
  // ─────────────────────────────────────────────────────────────
  'us-nj-morristown': {
    sources: [
      // TIER 1
      {
        id: 'src-mor-washington-morristown-papers',
        type: 'PRIMARY',
        title: 'The Papers of George Washington: Revolutionary War Series, Vols. 8-9 and 23-24',
        publisherOrHolder: 'University of Virginia Press',
        credibilityTier: 'TIER1',
        notes:
          'Washington\'s correspondence from both Morristown encampments (winter 1777 and 1779-80). Documents the supply crises, mutinies, recruitment failures, and strategic planning during both winters.',
      },
      {
        id: 'src-mor-dr-thacher-journal',
        type: 'PRIMARY',
        title: 'Military Journal of the American Revolution (James Thacher)',
        publisherOrHolder: 'Hurlbut, Williams & Co.',
        publicationDate: new Date('1823-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Army surgeon Thacher kept a diary throughout the war including both Morristown encampments. His medical observations and daily-life accounts are among the most detailed primary records of Continental Army camp life.',
      },
      {
        id: 'src-mor-nps-morristown-nhp',
        type: 'INSTITUTIONAL',
        title: 'Morristown National Historical Park: Official Site and Research Archive',
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/morr/index.htm',
        credibilityTier: 'TIER1',
        notes:
          'NPS resource for America\'s first designated national historical park. Includes the Washington\'s Headquarters Museum, Jockey Hollow encampment site, and Fort Nonsense. Research library accessible to scholars.',
      },
      {
        id: 'src-mor-wick-household-morristown',
        type: 'PRIMARY',
        title: 'Tempe Wick and the Morristown Encampment: Primary Accounts',
        publisherOrHolder: 'Morris County Historical Society',
        credibilityTier: 'TIER1',
        notes:
          'Compiled primary documentation for the Wick Farm at Jockey Hollow, used as General St. Clair\'s headquarters during the 1779-80 encampment. Includes family letters and farm records.',
      },
      {
        id: 'src-mor-pennsylvania-line-mutiny',
        type: 'PRIMARY',
        title: 'Papers Relating to the Mutiny of the Pennsylvania Line, January 1781',
        publisherOrHolder: 'Pennsylvania Archives, Series 2',
        credibilityTier: 'TIER1',
        notes:
          'Official records of the 1781 Pennsylvania Line mutiny that began near Morristown\'s encampment area. Includes Congressional correspondence, court martial proceedings, and Washington\'s assessment of the crisis.',
      },
      {
        id: 'src-mor-lender-soldier-revolution',
        type: 'SECONDARY',
        title: 'A Respectable Army: The Military Origins of the Republic, 1763-1789',
        publisherOrHolder: 'Harlan Davidson (Mark Edward Lender and James Kirby Martin)',
        publicationDate: new Date('1982-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Influential scholarly reinterpretation of the Continental Army\'s social composition and experience. Morristown\'s encampments are central case studies for understanding soldier motivation and mutiny.',
      },
      {
        id: 'src-mor-royster-revolutionary-people',
        type: 'SECONDARY',
        title: 'A Revolutionary People at War: The Continental Army and American Character, 1775-1783',
        publisherOrHolder: 'University of North Carolina Press (Charles Royster)',
        publicationDate: new Date('1979-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Award-winning cultural history of the Continental soldier experience. The Morristown winters of 1777 and 1779-80 are among Royster\'s key case studies for examining the limits of revolutionary fervor.',
      },
      {
        id: 'src-mor-kemble-journal',
        type: 'PRIMARY',
        title: 'Journal of Stephen Kemble, 1773-1789',
        publisherOrHolder: 'New-York Historical Society Collections',
        publicationDate: new Date('1883-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Kemble was a British officer stationed in New York during the war. His journal, which covered British intelligence assessments of the Morristown encampments, provides the British perspective on American winter quarters.',
      },
      // TIER 2
      {
        id: 'src-mor-morris-county-historical',
        type: 'INSTITUTIONAL',
        title: 'Morris County Historical Society: Morristown Encampment Collections',
        publisherOrHolder: 'Morris County Historical Society',
        url: 'https://www.morrishistory.org/',
        credibilityTier: 'TIER2',
        notes:
          'Local historical society with extensive holdings on the Morristown encampments, including the Acorn Hall archives and regional family papers documenting the impact of the army on civilian communities.',
      },
      {
        id: 'src-mor-bill-campaign-princeton-trenton',
        type: 'SECONDARY',
        title: 'A House Called Morven: Its Role in American History',
        publisherOrHolder: 'Princeton University Press (Alfred Hoyt Bill)',
        publicationDate: new Date('1954-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'History of one of New Jersey\'s most important Revolutionary-era houses. Provides context for the elite civilian life that coexisted with the Morristown encampments.',
      },
      {
        id: 'src-mor-shy-people-numerous-armed',
        type: 'SECONDARY',
        title: 'A People Numerous and Armed: Reflections on the Military Struggle for American Independence',
        publisherOrHolder: 'Oxford University Press (John Shy)',
        publicationDate: new Date('1976-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Collection of scholarly essays on the Revolution as a social and military phenomenon. Shy\'s essay on the Loyalist community in Morris County provides essential context for the Morristown encampment area.',
      },
      {
        id: 'src-mor-jockey-hollow-archaeology',
        type: 'SECONDARY',
        title: 'Jockey Hollow Encampment: Archaeology of a Revolutionary War Winter Cantonment',
        publisherOrHolder: 'National Park Service (David Orr)',
        publicationDate: new Date('1984-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'NPS archaeological report on excavations at the Jockey Hollow hut sites. Provides material culture evidence for soldier living conditions during the 1779-80 encampment.',
      },
      {
        id: 'src-mor-cold-winter-1779-80',
        type: 'SECONDARY',
        title: 'The Hard Winter: Morristown 1779-1780 and the Most Severe Climate of the Revolution',
        publisherOrHolder: 'Journal of the American Revolution',
        url: 'https://allthingsliberty.com/2016/02/the-hard-winter-morristown-1779-1780/',
        credibilityTier: 'TIER2',
        notes:
          'Scholarly article using meteorological records and soldier accounts to document the exceptionally brutal winter of 1779-80, which Washington called worse than Valley Forge.',
      },
      // TIER 3
      {
        id: 'src-mor-wikipedia-morristown-nhp',
        type: 'TERTIARY',
        title: 'Morristown National Historical Park -- Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Morristown_National_Historical_Park',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of the park encompassing Washington\'s headquarters and the Jockey Hollow encampment sites. Useful for orientation.',
      },
      {
        id: 'src-mor-visit-morristown',
        type: 'TERTIARY',
        title: 'Explore Morris County: Revolutionary War Heritage',
        publisherOrHolder: 'Morris County Tourism Bureau',
        url: 'https://www.morristourism.org/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism guide to Morristown\'s Revolutionary War sites. Practical visitor information for the NHP, Jockey Hollow, and related historic sites.',
      },
      {
        id: 'src-mor-nps-morristown-visitor',
        type: 'TERTIARY',
        title: 'Morristown NHP Visitor Guide',
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/morr/planyourvisit/index.htm',
        credibilityTier: 'TIER3',
        notes:
          'Visitor-facing materials for the national park including site maps, driving directions, and accessible narrative summaries of both encampments.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Monmouth -- Battle June 1778, Molly Pitcher, longest battle
  // ─────────────────────────────────────────────────────────────
  'us-nj-monmouth': {
    sources: [
      // TIER 1
      {
        id: 'src-mon-washington-monmouth-orders',
        type: 'PRIMARY',
        title: 'Washington\'s Orders and Correspondence: Monmouth Campaign, June 1778',
        publisherOrHolder: 'Library of Congress, George Washington Papers',
        url: 'https://www.loc.gov/collections/george-washington-papers/',
        credibilityTier: 'TIER1',
        notes:
          'Washington\'s operational orders for the Monmouth campaign including his orders to Lee, the command confrontation on the field, and his after-action dispatch to Congress.',
      },
      {
        id: 'src-mon-lee-court-martial',
        type: 'PRIMARY',
        title: 'Proceedings of a General Court Martial for the Trial of Major General Charles Lee',
        publisherOrHolder: 'Continental Army Judge Advocate General',
        publicationDate: new Date('1778-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Trial records from Lee\'s court martial for his controversial retreat at Monmouth. The testimony of dozens of officers and soldiers constitutes the most detailed primary record of the battle.',
      },
      {
        id: 'src-mon-nps-monmouth-battlefield',
        type: 'INSTITUTIONAL',
        title: 'Monmouth Battlefield State Park: Historical Resources',
        publisherOrHolder: 'New Jersey State Park Service',
        url: 'https://www.nj.gov/dep/parksandforests/historic/monmouth/index.html',
        credibilityTier: 'TIER1',
        notes:
          'State park documentation covering the June 28, 1778 battle. Includes archaeological survey results, troop movement maps, and interpretive materials on the longest single day\'s fighting of the Revolution.',
      },
      {
        id: 'src-mon-lengel-general-washington-monmouth',
        type: 'SECONDARY',
        title: 'General George Washington: A Military Life',
        publisherOrHolder: 'Random House (Edward G. Lengel)',
        publicationDate: new Date('2005-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Authoritative military biography with detailed coverage of Monmouth. Lengel\'s assessment draws on the Lee trial transcripts and British regimental records to reconstruct Washington\'s command performance.',
      },
      {
        id: 'src-mon-clinton-monmouth-report',
        type: 'PRIMARY',
        title: 'Sir Henry Clinton\'s Official Dispatch on the Battle of Monmouth',
        publisherOrHolder: 'UK National Archives, War Office Papers',
        credibilityTier: 'TIER1',
        notes:
          'Clinton\'s formal report to London on the engagement. The British account of the march from Philadelphia and the Monmouth fighting provides the opposing commander\'s perspective on Lee\'s retreat and Washington\'s counterattack.',
      },
      // TIER 2
      {
        id: 'src-mon-molly-pitcher-scholarship',
        type: 'SECONDARY',
        title: 'Molly Pitcher: The Real Story',
        publisherOrHolder: 'Journal of the American Revolution',
        url: 'https://allthingsliberty.com/2013/12/molly-pitcher-the-real-story/',
        credibilityTier: 'TIER2',
        notes:
          'Scholarly article examining the historical evidence for Mary Ludwig Hays\'s actions at Monmouth. Carefully distinguishes documented fact from post-war legend in the Molly Pitcher tradition.',
      },
      {
        id: 'src-mon-lender-nj-military',
        type: 'SECONDARY',
        title: 'New Jersey\'s Revolutionary Experience: A Military History',
        publisherOrHolder: 'New Jersey Historical Commission (Mark Edward Lender)',
        publicationDate: new Date('1975-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Standard military history of New Jersey\'s role in the Revolution, with Monmouth as a central chapter. Based on NJ state archives, pension files, and British regimental records.',
      },
      {
        id: 'src-mon-monmouth-county-historical',
        type: 'INSTITUTIONAL',
        title: 'Monmouth County Historical Association: Revolutionary War Collections',
        publisherOrHolder: 'Monmouth County Historical Association',
        url: 'https://www.monmouthhistory.org/',
        credibilityTier: 'TIER2',
        notes:
          'Local historical society with manuscript collections documenting the battle\'s impact on Monmouth County civilians, local loyalists, and the region\'s prolonged guerrilla conflict.',
      },
      {
        id: 'src-mon-von-steuben-monmouth',
        type: 'PRIMARY',
        title: 'Baron von Steuben\'s Account of the Battle of Monmouth',
        publisherOrHolder: 'Historical Magazine',
        publicationDate: new Date('1868-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Von Steuben\'s retrospective account of his role stabilizing the Continental line at Monmouth after Lee\'s retreat. Documents the practical impact of his Valley Forge training at the first major engagement after the encampment.',
      },
      // TIER 3
      {
        id: 'src-mon-wikipedia-monmouth',
        type: 'TERTIARY',
        title: 'Battle of Monmouth -- Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Battle_of_Monmouth',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of the June 28, 1778 battle. Useful for orientation; the Lee court martial transcripts should be consulted for primary detail.',
      },
      {
        id: 'src-mon-monmouth-county-tourism',
        type: 'TERTIARY',
        title: 'Monmouth County Tourism: Revolutionary War Heritage',
        publisherOrHolder: 'Monmouth County Tourism',
        url: 'https://www.visitmonmouth.com/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism guide to Monmouth County\'s Revolutionary War sites. Practical visitor information for the Monmouth Battlefield State Park and related sites.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // New Brunswick -- Raritan River crossing, strategic position
  // ─────────────────────────────────────────────────────────────
  'us-nj-new-brunswick': {
    sources: [
      // TIER 1
      {
        id: 'src-nbr-washington-retreat-dispatch',
        type: 'PRIMARY',
        title: 'Washington\'s Dispatches from New Brunswick and the New Jersey Retreat, November-December 1776',
        publisherOrHolder: 'Library of Congress, George Washington Papers',
        url: 'https://www.loc.gov/collections/george-washington-papers/',
        credibilityTier: 'TIER1',
        notes:
          'Washington\'s letters written from New Brunswick during the desperate retreat across New Jersey in late 1776. Documents the army\'s near-collapse and Washington\'s efforts to maintain cohesion.',
      },
      {
        id: 'src-nbr-cornwallis-pursuit-reports',
        type: 'PRIMARY',
        title: 'Lord Cornwallis\'s Reports on the Pursuit Across New Jersey, 1776',
        publisherOrHolder: 'UK National Archives, War Office Papers',
        credibilityTier: 'TIER1',
        notes:
          'Cornwallis\'s dispatches covering the British pursuit from Fort Lee through New Brunswick and beyond. Documents the British decision to halt at the Raritan River, which allowed Washington to escape to Pennsylvania.',
      },
      {
        id: 'src-nbr-fischer-washingtons-crossing-retreat',
        type: 'SECONDARY',
        title: 'Washington\'s Crossing',
        publisherOrHolder: 'Oxford University Press (David Hackett Fischer)',
        publicationDate: new Date('2004-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Fischer\'s detailed account of the New Jersey retreat covers New Brunswick\'s role as a critical crossing point. His analysis of why Cornwallis halted at the Raritan illuminates the campaign\'s turning point.',
      },
      {
        id: 'src-nbr-rutgers-university-archives',
        type: 'INSTITUTIONAL',
        title: 'Rutgers University Special Collections: New Jersey Revolutionary War Records',
        publisherOrHolder: 'Rutgers University Libraries',
        url: 'https://www.libraries.rutgers.edu/rul/libs/scua/',
        credibilityTier: 'TIER1',
        notes:
          'The state university\'s special collections hold significant New Jersey Revolutionary War materials, including the William Paterson papers, regional committee of safety records, and family papers from the New Brunswick area.',
      },
      {
        id: 'src-nbr-nj-gazette-new-brunswick',
        type: 'PRIMARY',
        title: 'New Jersey Gazette, 1777-1783',
        publisherOrHolder: 'New Jersey State Library, Newspaper Collections',
        credibilityTier: 'TIER1',
        notes:
          'New Jersey\'s official patriot newspaper, printed in various locations including New Brunswick. Issues document the campaign for public opinion during the British occupation of New Brunswick and Loyalist-patriot conflict.',
      },
      // TIER 2
      {
        id: 'src-nbr-new-brunswick-historical-club',
        type: 'INSTITUTIONAL',
        title: 'Middlesex County Historical Society: Revolutionary War Collections',
        publisherOrHolder: 'Middlesex County Historical Society',
        credibilityTier: 'TIER2',
        notes:
          'County historical society with materials on New Brunswick during the Revolutionary War, including the city\'s experience as a British staging area after the 1776 occupation.',
      },
      {
        id: 'src-nbr-willcox-portrait-general-howe',
        type: 'SECONDARY',
        title: 'Portrait of a General: Sir William Howe and the War of American Independence',
        publisherOrHolder: 'Alfred A. Knopf (William B. Willcox)',
        publicationDate: new Date('1964-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Scholarly biography of General Howe analyzing why he halted the pursuit at New Brunswick\'s Raritan River in 1776. The controversy over this decision frames much of the scholarship on the campaign.',
      },
      {
        id: 'src-nbr-kidder-nj-crossing-ten-days',
        type: 'SECONDARY',
        title: 'Ten Crucial Days: Washington\'s Vision for Victory Unfolds',
        publisherOrHolder: 'Knox Press (William L. Kidder)',
        publicationDate: new Date('2017-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Modern account of the Ten Crucial Days covering New Brunswick\'s role in the retreat and the British decision to halt there. Strong on New Jersey militia activity in the Middlesex County area.',
      },
      {
        id: 'src-nbr-rutgers-history-revolution',
        type: 'SECONDARY',
        title: 'Queens College (Rutgers) and the American Revolution',
        publisherOrHolder: 'Rutgers University Press',
        publicationDate: new Date('1973-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'History of Rutgers University (then Queens College) during the Revolutionary War, when the institution was suspended and its buildings used by both British and American forces.',
      },
      // TIER 3
      {
        id: 'src-nbr-wikipedia-new-brunswick',
        type: 'TERTIARY',
        title: 'New Brunswick, New Jersey -- History (Wikipedia)',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/New_Brunswick,_New_Jersey',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry on New Brunswick including its Revolutionary War history as a British occupation base and Raritan River crossing point.',
      },
      {
        id: 'src-nbr-visit-new-brunswick',
        type: 'TERTIARY',
        title: 'Visit New Brunswick: History and Heritage',
        publisherOrHolder: 'New Brunswick City Tourism',
        url: 'https://www.visitnewbrunswick.com/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism resources for New Brunswick including its Revolutionary War heritage sites and historic downtown area.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Fort Lee -- Fall November 1776, retreat across New Jersey
  // ─────────────────────────────────────────────────────────────
  'us-nj-fort-lee': {
    sources: [
      // TIER 1
      {
        id: 'src-fle-washington-fort-lee-letters',
        type: 'PRIMARY',
        title: 'Washington\'s Correspondence on the Fall of Fort Lee and Fort Washington, November 1776',
        publisherOrHolder: 'Library of Congress, George Washington Papers',
        url: 'https://www.loc.gov/collections/george-washington-papers/',
        credibilityTier: 'TIER1',
        notes:
          'Washington\'s letters to Congress describing the disastrous fall of Fort Washington on November 16 and the subsequent near-capture of the Fort Lee garrison. Documents the command crisis precipitating the New Jersey retreat.',
      },
      {
        id: 'src-fle-cornwallis-surprise-dispatch',
        type: 'PRIMARY',
        title: 'Lord Cornwallis\'s Report on the Surprise Crossing at Fort Lee, November 20, 1776',
        publisherOrHolder: 'UK National Archives, War Office Papers',
        credibilityTier: 'TIER1',
        notes:
          'Cornwallis\'s official dispatch on the dawn crossing of the Hudson at Closter Landing and the seizure of Fort Lee. Documents one of the most audacious British amphibious operations of the war.',
      },
      {
        id: 'src-fle-paine-american-crisis-fort-lee',
        type: 'PRIMARY',
        title: 'The American Crisis, No. 1 -- Written During the Retreat from Fort Lee',
        publisherOrHolder: 'Philadelphia (Thomas Paine)',
        publicationDate: new Date('1776-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Paine wrote the first Crisis pamphlet while retreating with Washington\'s army from Fort Lee through New Jersey. The document is a direct literary product of the Fort Lee disaster and the crisis it represented.',
      },
      {
        id: 'src-fle-mccullough-1776-fort-lee',
        type: 'SECONDARY',
        title: '1776',
        publisherOrHolder: 'Simon & Schuster (David McCullough)',
        publicationDate: new Date('2005-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Narrative history covering the fall of Fort Washington and Fort Lee in detail. McCullough\'s account of the catastrophic garrison losses at Fort Washington and the frantic evacuation of Fort Lee is the most accessible scholarly narrative.',
      },
      {
        id: 'src-fle-nps-fort-lee-historic-park',
        type: 'INSTITUTIONAL',
        title: 'Fort Lee Historic Park: State Historic Site Documentation',
        publisherOrHolder: 'New Jersey State Park Service',
        url: 'https://www.nj.gov/dep/parksandforests/historic/fortlee/index.html',
        credibilityTier: 'TIER1',
        notes:
          'State park documentation for the Fort Lee site on the Palisades. Includes archaeological survey results identifying the fort\'s earthworks and artifact distributions from the 1776 occupation.',
      },
      // TIER 2
      {
        id: 'src-fle-schecter-battle-for-ny-fort-lee',
        type: 'SECONDARY',
        title: 'The Battle for New York: The City at the Heart of the American Revolution',
        publisherOrHolder: 'Walker & Company (Barnet Schecter)',
        publicationDate: new Date('2002-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Detailed military history covering the fall of Fort Washington and Fort Lee in the context of the broader New York Campaign. Draws on British and Hessian archives alongside American sources.',
      },
      {
        id: 'src-fle-bergen-county-historical',
        type: 'INSTITUTIONAL',
        title: 'Bergen County Historical Society: Revolutionary War Collections',
        publisherOrHolder: 'Bergen County Historical Society',
        url: 'https://www.bergencountyhistory.org/',
        credibilityTier: 'TIER2',
        notes:
          'Local historical society with manuscript collections documenting the British occupation of Bergen County (including Fort Lee\'s immediate hinterland) and the Loyalist-patriot conflict throughout the war.',
      },
      {
        id: 'src-fle-fort-lee-after-action',
        type: 'PRIMARY',
        title: 'Nathanael Greene\'s Report on the Loss of Fort Washington and Evacuation of Fort Lee',
        publisherOrHolder: 'Rhode Island Historical Society, Greene Papers',
        credibilityTier: 'TIER2',
        notes:
          'Greene\'s report to Washington on the fall of Fort Washington, for whose defense he had personally advocated. The document reveals the command disagreement and the devastating loss of 2,800 men that precipitated the New Jersey retreat.',
      },
      {
        id: 'src-fle-stryker-new-jersey-retreat',
        type: 'SECONDARY',
        title: 'Official Register of the Officers and Men of New Jersey in the Revolutionary War',
        publisherOrHolder: 'William T. Nicholson (William S. Stryker)',
        publicationDate: new Date('1872-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Comprehensive state roster documenting New Jersey soldiers who served during the 1776 retreat. Essential for identifying specific units and individuals at Fort Lee and during the subsequent flight to Pennsylvania.',
      },
      // TIER 3
      {
        id: 'src-fle-wikipedia-fort-lee',
        type: 'TERTIARY',
        title: 'Fort Lee, New Jersey -- Revolutionary War History (Wikipedia)',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Fort_Lee,_New_Jersey',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry covering Fort Lee\'s history and the 1776 battle. Useful for orientation.',
      },
      {
        id: 'src-fle-fort-lee-historic-park-visitor',
        type: 'TERTIARY',
        title: 'Fort Lee Historic Park Visitor Information',
        publisherOrHolder: 'New Jersey State Park Service',
        url: 'https://www.nj.gov/dep/parksandforests/historic/fortlee/index.html',
        credibilityTier: 'TIER3',
        notes:
          'Visitor-facing materials for the Fort Lee Historic Park on the Palisades. Provides accessible interpretive summary and practical site access information.',
      },
    ],
  },
};
