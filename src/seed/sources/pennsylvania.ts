// MODEL: Claude Sonnet 4.6
// Pennsylvania Revolutionary War source data
// Hub towns (15-20 sources): us-pa-philadelphia
// Standard towns (10+ sources): us-pa-valley-forge, us-pa-york, us-pa-carlisle,
//   us-pa-paoli, us-pa-germantown, us-pa-pittsburgh

import { Prisma } from '@prisma/client';

export const pennsylvaniaSources: Record<
  string,
  { sources: Prisma.SourceCreateInput[]; sharedIds?: string[] }
> = {
  // ─────────────────────────────────────────────────────────────
  // HUB: Philadelphia (15-20 sources)
  // Independence Hall, Continental Congress, Declaration, Constitution
  // ─────────────────────────────────────────────────────────────
  'us-pa-philadelphia': {
    sources: [
      // TIER 1 -- Primary documents, NPS, university presses, national archives
      {
        id: 'src-phi-declaration-independence',
        type: 'PRIMARY',
        title: 'Declaration of Independence, July 4, 1776',
        publisherOrHolder: 'National Archives and Records Administration',
        url: 'https://www.archives.gov/founding-docs/declaration',
        credibilityTier: 'TIER1',
        notes:
          'The original engrossed parchment, held at the National Archives. Philadelphia is where the document was debated, drafted, and signed -- the city is inseparable from the Declaration\'s creation.',
      },
      {
        id: 'src-phi-journals-continental-congress',
        type: 'PRIMARY',
        title: 'Journals of the Continental Congress, 1774-1789',
        publisherOrHolder: 'Library of Congress',
        url: 'https://memory.loc.gov/ammem/amlaw/lwjc.html',
        credibilityTier: 'TIER1',
        notes:
          'The complete official record of the Continental Congress, most of which met in Philadelphia. Essential primary source for every major legislative act of the Revolution.',
      },
      {
        id: 'src-phi-letters-delegates-congress',
        type: 'PRIMARY',
        title: 'Letters of Delegates to Congress, 1774-1789 (26 vols.)',
        publisherOrHolder: 'Library of Congress (Paul H. Smith, ed.)',
        url: 'https://memory.loc.gov/ammem/amlaw/lwdg.html',
        credibilityTier: 'TIER1',
        notes:
          'Complete edited correspondence of Congressional delegates, mostly written from Philadelphia. Indispensable for understanding decision-making at Independence Hall.',
      },
      {
        id: 'src-phi-adams-diary-philadelphia',
        type: 'PRIMARY',
        title: 'Diary and Autobiography of John Adams, Vols. 2-3',
        publisherOrHolder: 'Harvard University Press (L.H. Butterfield, ed.)',
        publicationDate: new Date('1961-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Adams\'s diaries kept during his Philadelphia sessions as a delegate. Provides unguarded commentary on debates over independence, the Declaration, and the management of the war.',
      },
      {
        id: 'src-phi-nps-independence-nhp',
        type: 'INSTITUTIONAL',
        title: 'Independence National Historical Park: Official Site',
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/inde/index.htm',
        credibilityTier: 'TIER1',
        notes:
          'NPS resource covering Independence Hall, Congress Hall, Carpenters\' Hall, and the broader historic district. Includes interpretive programs grounded in archaeological and documentary research.',
      },
      {
        id: 'src-phi-franklin-papers',
        type: 'PRIMARY',
        title: 'The Papers of Benjamin Franklin (43 vols.)',
        publisherOrHolder: 'Yale University Press (various editors)',
        url: 'https://franklinpapers.org/',
        credibilityTier: 'TIER1',
        notes:
          'Comprehensive scholarly edition of Franklin\'s correspondence and writings. Philadelphia is Franklin\'s home city; his papers document the city\'s political culture from the 1750s through the Constitutional Convention.',
      },
      {
        id: 'src-phi-ferling-independence',
        type: 'SECONDARY',
        title: 'Independence: The Struggle to Set America Free',
        publisherOrHolder: 'Bloomsbury Press (John Ferling)',
        publicationDate: new Date('2011-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Scholarly narrative of the movement toward independence focusing on the Philadelphia congresses of 1775-1776. Draws extensively on delegate correspondence and diary sources.',
      },
      {
        id: 'src-phi-rakove-beginnings',
        type: 'SECONDARY',
        title: 'The Beginnings of National Politics: An Interpretive History of the Continental Congress',
        publisherOrHolder: 'Alfred A. Knopf (Jack N. Rakove)',
        publicationDate: new Date('1979-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Pulitzer Prize-winning analysis of the Continental Congress as an institution. Essential for understanding how Philadelphia functioned as the political center of the Revolution.',
      },
      {
        id: 'src-phi-british-occupation-1777-78',
        type: 'SECONDARY',
        title: 'The Philadelphia Campaign, 1777-1778 (2 vols.)',
        publisherOrHolder: 'Stackpole Books (Thomas McGuire)',
        publicationDate: new Date('2006-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Definitive military history of the Brandywine-Germantown-Valley Forge campaign and the British occupation of Philadelphia. Based on primary sources from both sides.',
      },
      // TIER 2
      {
        id: 'src-phi-historical-society-pa',
        type: 'INSTITUTIONAL',
        title: 'Historical Society of Pennsylvania: Revolutionary War Collections',
        publisherOrHolder: 'Historical Society of Pennsylvania',
        url: 'https://hsp.org/',
        credibilityTier: 'TIER2',
        notes:
          'One of the oldest and largest historical societies in America. Holdings include the Dreer Collection of signatures, the Gratz Collection of Revolutionary figures, and hundreds of manuscript groups related to Philadelphia during the Revolution.',
      },
      {
        id: 'src-phi-american-philosophical-society',
        type: 'INSTITUTIONAL',
        title: 'American Philosophical Society Library Collections',
        publisherOrHolder: 'American Philosophical Society',
        url: 'https://www.amphilsoc.org/library',
        credibilityTier: 'TIER2',
        notes:
          'Franklin\'s learned society, founded in 1743, holds major manuscript collections including Franklin papers, Jefferson materials, and scientific correspondence from the Revolutionary era.',
      },
      {
        id: 'src-phi-schiff-great-improvisation',
        type: 'SECONDARY',
        title: 'A Great Improvisation: Franklin, France, and the Birth of America',
        publisherOrHolder: 'Henry Holt (Stacy Schiff)',
        publicationDate: new Date('2005-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Pulitzer Prize-winning account of Franklin\'s diplomacy in France. Philadelphia is the departure point and political context for Franklin\'s mission, which secured the French alliance crucial to American victory.',
      },
      {
        id: 'src-phi-nash-urban-crucible',
        type: 'SECONDARY',
        title: 'The Urban Crucible: Social Change, Political Consciousness, and the Origins of the American Revolution',
        publisherOrHolder: 'Harvard University Press (Gary B. Nash)',
        publicationDate: new Date('1979-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Social history placing Philadelphia alongside Boston and New York as the crucibles of revolutionary popular politics. Essential for understanding the working-class and artisan mobilization that drove independence.',
      },
      {
        id: 'src-phi-loyalism-philadelphia',
        type: 'SECONDARY',
        title: 'The Price of Loyalty: Tory Writings from the Revolutionary Era',
        publisherOrHolder: 'McGraw-Hill (Catherine Crary, ed.)',
        publicationDate: new Date('1973-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Anthology of loyalist writings heavily representing Philadelphia society. Documents the city\'s substantial loyalist community, whose social networks explain the warm British reception during the 1777-78 occupation.',
      },
      // TIER 3
      {
        id: 'src-phi-wikipedia-independence-hall',
        type: 'TERTIARY',
        title: 'Independence Hall -- Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Independence_Hall',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of Independence Hall\'s history and significance. Useful for orientation; well-cited but not a substitute for primary or scholarly sources.',
      },
      {
        id: 'src-phi-visit-philadelphia-history',
        type: 'TERTIARY',
        title: 'Visit Philadelphia: American Revolution Heritage Trail',
        publisherOrHolder: 'Visit Philadelphia',
        url: 'https://www.visitphiladelphia.com/things-to-do/history-and-culture/american-revolution/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism guide to Philadelphia\'s Revolutionary War sites. Helpful for visitor planning but not a scholarly source.',
      },
      {
        id: 'src-phi-constitution-center',
        type: 'TERTIARY',
        title: 'National Constitution Center: Philadelphia and the Founding',
        publisherOrHolder: 'National Constitution Center',
        url: 'https://constitutioncenter.org/',
        credibilityTier: 'TIER3',
        notes:
          'Public educational resources from the museum adjacent to Independence Mall. Provides accessible explanations of Constitutional Convention proceedings for general audiences.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Valley Forge -- Winter encampment 1777-78, von Steuben\'s training
  // ─────────────────────────────────────────────────────────────
  'us-pa-valley-forge': {
    sources: [
      // TIER 1
      {
        id: 'src-vf-washington-vf-letters',
        type: 'PRIMARY',
        title: 'The Papers of George Washington: Revolutionary War Series, Vol. 12-13',
        publisherOrHolder: 'University of Virginia Press',
        credibilityTier: 'TIER1',
        notes:
          'Washington\'s correspondence from the Valley Forge encampment (December 1777-June 1778). Documents the supply crisis, congressional conflicts, the Conway Cabal, and von Steuben\'s training program.',
      },
      {
        id: 'src-vf-steuben-regulations',
        type: 'PRIMARY',
        title: 'Regulations for the Order and Discipline of the Troops of the United States',
        publisherOrHolder: 'Styner and Cist (Baron von Steuben)',
        publicationDate: new Date('1779-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'The "Blue Book" codifying the training system von Steuben developed at Valley Forge. Used as the official American Army manual from 1779 to 1812, it transformed raw levies into a professional force.',
      },
      {
        id: 'src-vf-nps-valley-forge',
        type: 'INSTITUTIONAL',
        title: 'Valley Forge National Historical Park: Official Site and Research Archive',
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/vafo/index.htm',
        credibilityTier: 'TIER1',
        notes:
          'NPS resource covering the 1777-78 encampment. Includes the park\'s historical research collection, archaeological findings from hut excavations, and interpretive programming.',
      },
      {
        id: 'src-vf-lengel-general-washington',
        type: 'SECONDARY',
        title: 'General George Washington: A Military Life',
        publisherOrHolder: 'Random House (Edward G. Lengel)',
        publicationDate: new Date('2005-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Authoritative military biography of Washington with detailed coverage of Valley Forge. Draws on the full documentary record to assess Washington\'s command performance during the encampment.',
      },
      {
        id: 'src-vf-bowman-captive-congress',
        type: 'SECONDARY',
        title: 'The Morale of the American Revolutionary Army',
        publisherOrHolder: 'American Council on Public Affairs (Allen Bowman)',
        publicationDate: new Date('1943-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Scholarly analysis of soldier morale across the Revolution, with Valley Forge as a central case study. Uses pension records, letters, and orderly books to reconstruct the human experience of the encampment.',
      },
      // TIER 2
      {
        id: 'src-vf-surgeon-waldo-diary',
        type: 'PRIMARY',
        title: 'Diary of Albigence Waldo, Surgeon at Valley Forge',
        publisherOrHolder: 'Pennsylvania Magazine of History and Biography',
        publicationDate: new Date('1897-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Waldo\'s journal kept from December 1777 through February 1778 is among the most vivid primary accounts of conditions at Valley Forge. Provides detailed medical and daily-life observations.',
      },
      {
        id: 'src-vf-bodle-valley-forge-winter',
        type: 'SECONDARY',
        title: 'The Valley Forge Winter: Civilians and Soldiers in War',
        publisherOrHolder: 'Penn State University Press (Wayne Bodle)',
        publicationDate: new Date('2002-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Scholarly history that integrates civilian experience with the military encampment. Challenges the popular myth of Valley Forge as catastrophic by contextualizing supply failures in the broader war economy.',
      },
      {
        id: 'src-vf-von-steuben-biography',
        type: 'SECONDARY',
        title: 'Baron Von Steuben: Revolutionary War Hero',
        publisherOrHolder: 'Stackpole Books (John McAulay Palmer)',
        publicationDate: new Date('1937-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Biography of Friedrich von Steuben drawing on German and American archives. Most detailed account of his transformation of the Continental Army at Valley Forge.',
      },
      {
        id: 'src-vf-chester-county-archives',
        type: 'INSTITUTIONAL',
        title: 'Chester County Archives: Revolutionary War Records',
        publisherOrHolder: 'Chester County Archives',
        url: 'https://www.chesco.org/3411/Archives',
        credibilityTier: 'TIER2',
        notes:
          'County archives holding tax lists, militia records, and estate inventories documenting the impact of the Valley Forge encampment on surrounding Chester County communities.',
      },
      // TIER 3
      {
        id: 'src-vf-wikipedia-valley-forge',
        type: 'TERTIARY',
        title: 'Valley Forge -- Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Valley_Forge',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of the Valley Forge encampment. Useful for orientation; not a primary or scholarly source.',
      },
      {
        id: 'src-vf-vf-park-visitor-guide',
        type: 'TERTIARY',
        title: 'Valley Forge National Historical Park: Visitor Guide',
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/vafo/planyourvisit/index.htm',
        credibilityTier: 'TIER3',
        notes:
          'Visitor-oriented materials for the park. Provides tour maps, driving routes, and accessible interpretive summaries for general audiences.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // York -- Congress in exile, Articles of Confederation adopted
  // ─────────────────────────────────────────────────────────────
  'us-pa-york': {
    sources: [
      // TIER 1
      {
        id: 'src-yor-articles-confederation',
        type: 'PRIMARY',
        title: 'Articles of Confederation and Perpetual Union',
        publisherOrHolder: 'National Archives and Records Administration',
        url: 'https://www.archives.gov/milestone-documents/articles-of-confederation',
        credibilityTier: 'TIER1',
        notes:
          'The Articles were adopted by Congress on November 15, 1777, while meeting in York, Pennsylvania. The original document at the National Archives is the direct product of the York exile.',
      },
      {
        id: 'src-yor-journals-congress-york',
        type: 'PRIMARY',
        title: 'Journals of the Continental Congress: York Period (September 1777-June 1778)',
        publisherOrHolder: 'Library of Congress',
        url: 'https://memory.loc.gov/ammem/amlaw/lwjc.html',
        credibilityTier: 'TIER1',
        notes:
          'Official minutes of Congress during its nine months in York covering the Articles debate, the Conway Cabal, Valley Forge supply crisis, and the aftermath of Saratoga.',
      },
      {
        id: 'src-yor-jensen-articles',
        type: 'SECONDARY',
        title: 'The Articles of Confederation: An Interpretation of the Social-Constitutional History of the American Revolution',
        publisherOrHolder: 'University of Wisconsin Press (Merrill Jensen)',
        publicationDate: new Date('1940-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Definitive scholarly analysis of the origins and drafting of the Articles of Confederation. Jensen\'s argument that the Articles reflected the democratic radicalism of the Revolution remains influential.',
      },
      {
        id: 'src-yor-nps-york-colonial-courthouse',
        type: 'INSTITUTIONAL',
        title: 'Colonial Complex: York, Pennsylvania -- Revolutionary War Heritage',
        publisherOrHolder: 'York County Heritage Trust',
        url: 'https://www.yorkheritage.org/colonial-complex',
        credibilityTier: 'TIER1',
        notes:
          'Heritage Trust documentation for the courthouse where Congress met in 1777-78, the Continental House general store site, and the Gates House where Horatio Gates plotted against Washington during the Conway Cabal.',
      },
      // TIER 2
      {
        id: 'src-yor-york-county-heritage-trust',
        type: 'INSTITUTIONAL',
        title: 'York County Heritage Trust: Revolutionary War Collections',
        publisherOrHolder: 'York County Heritage Trust',
        url: 'https://www.yorkheritage.org/',
        credibilityTier: 'TIER2',
        notes:
          'Local heritage organization with manuscript collections, newspapers, and artifacts from the York period of Congressional exile. Primary repository for York-specific Revolutionary War research.',
      },
      {
        id: 'src-yor-burnett-continental-congress',
        type: 'SECONDARY',
        title: 'The Continental Congress',
        publisherOrHolder: 'Macmillan (Edmund C. Burnett)',
        publicationDate: new Date('1941-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Classic institutional history of the Continental Congress covering the York period in depth. Burnett edited the eight-volume Letters of Members of the Continental Congress, making this the most detailed account of York.',
      },
      {
        id: 'src-yor-conway-cabal-historiography',
        type: 'SECONDARY',
        title: 'The Conway Cabal: A Study in American Political History',
        publisherOrHolder: 'Pennsylvania Magazine of History and Biography',
        publicationDate: new Date('1964-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Revisionist scholarly article reexamining whether the Conway Cabal was an organized conspiracy against Washington or a loose faction. York was where the alleged conspiracy centered on Horatio Gates\'s headquarters.',
      },
      {
        id: 'src-yor-letters-congress-york',
        type: 'PRIMARY',
        title: 'Letters of Members of the Continental Congress, Vol. 2-3',
        publisherOrHolder: 'Carnegie Institution (Edmund C. Burnett, ed.)',
        publicationDate: new Date('1921-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Edited collection of delegates\' private correspondence during the York exile. Captures candid assessments of the war, Valley Forge, and congressional dysfunction absent from official Journals.',
      },
      // TIER 3
      {
        id: 'src-yor-wikipedia-york-congress',
        type: 'TERTIARY',
        title: 'York, Pennsylvania (Continental Congress) -- Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/York,_Pennsylvania',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry on York including the Congressional exile and adoption of the Articles of Confederation. Useful for orientation.',
      },
      {
        id: 'src-yor-york-pa-tourism',
        type: 'TERTIARY',
        title: 'Explore York PA: Revolutionary History',
        publisherOrHolder: 'York County Convention and Visitors Bureau',
        url: 'https://www.yorkpa.org/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism resources covering York\'s Revolutionary War heritage sites including the Colonial Complex. Practical visitor information.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Carlisle -- Military depot, frontier staging area
  // ─────────────────────────────────────────────────────────────
  'us-pa-carlisle': {
    sources: [
      // TIER 1
      {
        id: 'src-car-board-war-carlisle-orders',
        type: 'PRIMARY',
        title: 'Board of War Papers: Carlisle Arsenal Correspondence, 1776-1781',
        publisherOrHolder: 'National Archives and Records Administration',
        credibilityTier: 'TIER1',
        notes:
          'Continental Army Board of War orders and supply records relating to the Carlisle depot, which served as the primary arms manufacturing and forward supply base for the western theater.',
      },
      {
        id: 'src-car-pa-archives-carlisle',
        type: 'PRIMARY',
        title: 'Pennsylvania Archives, Series 2 and 5: Militia Records and Border Defense',
        publisherOrHolder: 'Pennsylvania State Archives',
        url: 'https://www.phmc.pa.gov/Archives',
        credibilityTier: 'TIER1',
        notes:
          'State archival series covering Cumberland County militia organization, frontier ranger companies, and the Carlisle-based supply network for expeditions against Iroquois and Loyalist forces.',
      },
      {
        id: 'src-car-slaughter-whiskey-rebellion',
        type: 'SECONDARY',
        title: 'The Whiskey Rebellion: Frontier Epilogue to the American Revolution',
        publisherOrHolder: 'Oxford University Press (Thomas P. Slaughter)',
        publicationDate: new Date('1986-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Traces frontier political culture from Carlisle and the Cumberland Valley through the Revolution to the 1794 Whiskey Rebellion. Establishes the continuity of frontier radicalism centered on Carlisle.',
      },
      {
        id: 'src-car-clinton-sullivan-expedition',
        type: 'PRIMARY',
        title: 'Journals of the Military Expedition of Major General John Sullivan, 1779',
        publisherOrHolder: 'Knapp, Peck & Thomson (Frederick Cook, ed.)',
        publicationDate: new Date('1887-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Collected journals of officers on Sullivan\'s 1779 expedition against the Iroquois, which staged through Carlisle. The primary documentary record of the largest Continental Army western campaign.',
      },
      // TIER 2
      {
        id: 'src-car-cumberland-county-historical',
        type: 'INSTITUTIONAL',
        title: 'Cumberland County Historical Society: Revolutionary War Collections',
        publisherOrHolder: 'Cumberland County Historical Society',
        url: 'https://www.historicalsociety.com/',
        credibilityTier: 'TIER2',
        notes:
          'Local historical society holding Carlisle-area family papers, tax lists, and records of the pre-war frontier community that formed the base for Revolutionary military operations.',
      },
      {
        id: 'src-car-ward-war-under-heaven',
        type: 'SECONDARY',
        title: 'The War Under Heaven: Pontiac, the Indian Nations, and the British Empire',
        publisherOrHolder: 'Johns Hopkins University Press (Gregory Dowd)',
        publicationDate: new Date('2002-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Provides essential background on the Paxton Boys massacre and frontier violence that preceded the Revolution and shaped Carlisle\'s political culture during the war.',
      },
      {
        id: 'src-car-dickinson-college-archives',
        type: 'INSTITUTIONAL',
        title: 'Dickinson College Archives and Special Collections',
        publisherOrHolder: 'Dickinson College',
        url: 'https://archives.dickinson.edu/',
        credibilityTier: 'TIER2',
        notes:
          'Dickinson College was chartered in 1783 in Carlisle. College archives hold materials on the town\'s late-war cultural and educational development reflecting the transition to peacetime.',
      },
      {
        id: 'src-car-frontier-pa-revolution',
        type: 'SECONDARY',
        title: 'Frontier Pennsylvania and the American Revolution',
        publisherOrHolder: 'Pennsylvania Historical and Museum Commission',
        publicationDate: new Date('1975-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'State-commissioned historical survey of Pennsylvania\'s western frontier during the Revolution covering the Carlisle depot, ranger units, and the complex interplay of British, Iroquois, and American forces.',
      },
      // TIER 3
      {
        id: 'src-car-wikipedia-carlisle-pa',
        type: 'TERTIARY',
        title: 'Carlisle, Pennsylvania -- History (Wikipedia)',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Carlisle,_Pennsylvania',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry on Carlisle covering its role as a military depot and its frontier significance during the Revolution.',
      },
      {
        id: 'src-car-visit-carlisle-pa',
        type: 'TERTIARY',
        title: 'Visit Carlisle PA: Heritage Tourism',
        publisherOrHolder: 'Borough of Carlisle',
        url: 'https://www.visitcarlislepa.com/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism resources covering Carlisle\'s historical sites. Provides accessible visitor information on Revolutionary War heritage.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Paoli -- Paoli Massacre September 1777, night attack
  // ─────────────────────────────────────────────────────────────
  'us-pa-paoli': {
    sources: [
      // TIER 1
      {
        id: 'src-pao-grey-orders-paoli',
        type: 'PRIMARY',
        title: 'General Charles Grey\'s Orders and Report on the Paoli Night Attack',
        publisherOrHolder: 'UK National Archives, War Office Papers',
        credibilityTier: 'TIER1',
        notes:
          'Grey\'s operational orders requiring troops to remove flints from muskets (earning him the nickname "No Flint" Grey) and his post-action report to Howe on the September 20-21, 1777 attack.',
      },
      {
        id: 'src-pao-wayne-court-martial',
        type: 'PRIMARY',
        title: 'Proceedings of a General Court Martial for the Trial of Major General Anthony Wayne',
        publisherOrHolder: 'Continental Army Judge Advocate General',
        publicationDate: new Date('1778-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Wayne demanded a court martial to clear his name after accusations of negligence at Paoli. The trial records document the attack\'s tactical details and Wayne\'s dispositions, with testimony from survivors.',
      },
      {
        id: 'src-pao-mcguire-philadelphia-campaign-1',
        type: 'SECONDARY',
        title: 'The Philadelphia Campaign, Vol. 1: Brandywine and the Fall of Philadelphia',
        publisherOrHolder: 'Stackpole Books (Thomas McGuire)',
        publicationDate: new Date('2006-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Detailed military history covering the Paoli Massacre in its operational context. McGuire draws on British and American primary sources to reconstruct the night attack sequence by sequence.',
      },
      {
        id: 'src-pao-nps-paoli-battlefield',
        type: 'INSTITUTIONAL',
        title: 'Paoli Battlefield Preservation Fund: Archaeological Survey Report',
        publisherOrHolder: 'Pennsylvania Historical and Museum Commission',
        credibilityTier: 'TIER1',
        notes:
          'Archaeological survey of the Paoli battlefield site identifying artifact distributions consistent with the night attack. Documents evidence for troop positions, the burial trench, and the physical landscape of 1777.',
      },
      {
        id: 'src-pao-pa-archives-wayne',
        type: 'PRIMARY',
        title: 'Pennsylvania Archives, Series 1, Vol. 5: Anthony Wayne Papers',
        publisherOrHolder: 'Pennsylvania State Archives',
        credibilityTier: 'TIER1',
        notes:
          'State archival series including Wayne\'s correspondence before and after Paoli. Essential for understanding his defensive preparations and post-battle response.',
      },
      // TIER 2
      {
        id: 'src-pao-nelson-anthony-wayne',
        type: 'SECONDARY',
        title: 'Anthony Wayne: Soldier of the Early Republic',
        publisherOrHolder: 'Indiana University Press (Paul David Nelson)',
        publicationDate: new Date('1985-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Standard scholarly biography of Wayne covering his command at Paoli, the court martial, and his subsequent determination to reclaim his military reputation.',
      },
      {
        id: 'src-pao-chester-county-paoli-memorial',
        type: 'INSTITUTIONAL',
        title: 'Paoli Battlefield: Chester County Historical Documentation',
        publisherOrHolder: 'Chester County Archives',
        url: 'https://www.chesco.org/3411/Archives',
        credibilityTier: 'TIER2',
        notes:
          'County archival materials on the Paoli battle site, the monument erected in 1817, and local memory of the "massacre" in the decades after the war.',
      },
      {
        id: 'src-pao-british-eyewitness-paoli',
        type: 'PRIMARY',
        title: 'Journal of Captain John André, 1777',
        publisherOrHolder: 'Tarrytown Historical Society (Henry Dawson, ed.)',
        publicationDate: new Date('1930-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'André participated in the Paoli attack as a British officer and recorded his impressions in his journal. Provides the British professional-soldier perspective on the night bayonet attack.',
      },
      // TIER 3
      {
        id: 'src-pao-wikipedia-paoli-massacre',
        type: 'TERTIARY',
        title: 'Battle of Paoli -- Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Battle_of_Paoli',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of the September 1777 battle. Useful for orientation; should be verified against McGuire\'s operational history.',
      },
      {
        id: 'src-pao-paoli-battlefield-org',
        type: 'TERTIARY',
        title: 'Paoli Battlefield Preservation Fund',
        publisherOrHolder: 'Paoli Battlefield Preservation Fund',
        url: 'https://www.paolipreservation.org/',
        credibilityTier: 'TIER3',
        notes:
          'Advocacy and educational organization for the Paoli battlefield site. Provides accessible site history and visitor information.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Germantown -- Battle October 1777, fog confusion, Chew House
  // ─────────────────────────────────────────────────────────────
  'us-pa-germantown': {
    sources: [
      // TIER 1
      {
        id: 'src-ger-washington-germantown-plan',
        type: 'PRIMARY',
        title: 'Washington\'s Battle Plan for Germantown, October 1777',
        publisherOrHolder: 'Library of Congress, George Washington Papers',
        url: 'https://www.loc.gov/collections/george-washington-papers/',
        credibilityTier: 'TIER1',
        notes:
          'Washington\'s written order of battle and attack plan for the four-column assault on Germantown on October 4, 1777. Documents the complex coordinated attack that almost succeeded.',
      },
      {
        id: 'src-ger-howe-germantown-despatch',
        type: 'PRIMARY',
        title: 'General Howe\'s Official Dispatch on the Battle of Germantown',
        publisherOrHolder: 'UK National Archives, Colonial Office Papers',
        credibilityTier: 'TIER1',
        notes:
          'Howe\'s report to London on the October 4 engagement including the Chew House incident. The British dispatch provides the opposing commander\'s account of the battle.',
      },
      {
        id: 'src-ger-mcguire-philadelphia-campaign-2',
        type: 'SECONDARY',
        title: 'The Philadelphia Campaign, Vol. 2: Germantown and the Roads to Valley Forge',
        publisherOrHolder: 'Stackpole Books (Thomas McGuire)',
        publicationDate: new Date('2007-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Definitive operational history of the Germantown battle drawing on diaries, letters, and British and American official records. Reconstructs the fog-shrouded confusion with map analysis and primary testimony.',
      },
      {
        id: 'src-ger-nps-germantown',
        type: 'INSTITUTIONAL',
        title: 'Germantown: NPS and Pennsylvania Trail of History Interpretive Resources',
        publisherOrHolder: 'National Park Service / Pennsylvania Historical and Museum Commission',
        url: 'https://www.nps.gov/inde/learn/historyculture/battle-of-germantown.htm',
        credibilityTier: 'TIER1',
        notes:
          'NPS and PHMC interpretive materials on the Germantown battlefield, including the Cliveden (Chew House) National Historic Landmark where American forces became bogged down.',
      },
      {
        id: 'src-ger-continental-army-orderly-books-germantown',
        type: 'PRIMARY',
        title: 'Continental Army Orderly Books: Germantown Campaign, September-October 1777',
        publisherOrHolder: 'Library of Congress, Manuscript Division',
        credibilityTier: 'TIER1',
        notes:
          'Brigade and regimental orderly books recording troop deployments, march orders, and after-action reports from the Germantown campaign. Essential operational evidence.',
      },
      // TIER 2
      {
        id: 'src-ger-cliveden-nhld',
        type: 'INSTITUTIONAL',
        title: 'Cliveden of the National Trust: Historic Structure Report',
        publisherOrHolder: 'National Trust for Historic Preservation',
        url: 'https://www.cliveden.org/',
        credibilityTier: 'TIER2',
        notes:
          'Documentation for the Chew House (Cliveden), which American troops unsuccessfully attacked during the Battle of Germantown. Includes architectural history and the building\'s documented battle damage.',
      },
      {
        id: 'src-ger-germantown-historical-society',
        type: 'INSTITUTIONAL',
        title: 'Germantown Historical Society: Revolutionary War Collections',
        publisherOrHolder: 'Germantown Historical Society',
        url: 'https://www.germantownhistory.org/',
        credibilityTier: 'TIER2',
        notes:
          'Local historical society with manuscript collections including family papers, diaries, and physical evidence from the 1777 battle. Essential for Germantown-specific community history.',
      },
      {
        id: 'src-ger-mad-anthony-wayne-germantown',
        type: 'PRIMARY',
        title: 'Anthony Wayne Papers: Germantown Battle Reports, 1777',
        publisherOrHolder: 'Historical Society of Pennsylvania',
        credibilityTier: 'TIER2',
        notes:
          'Wayne\'s after-action dispatches on his division\'s role in the Germantown battle. Complements Washington\'s official correspondence and provides brigade-level command perspective.',
      },
      {
        id: 'src-ger-battle-germantown-french-context',
        type: 'SECONDARY',
        title: 'The Near-Victory at Germantown and the French Alliance',
        publisherOrHolder: 'Journal of the American Revolution',
        url: 'https://allthingsliberty.com/2015/06/the-battle-of-germantown/',
        credibilityTier: 'TIER2',
        notes:
          'Scholarly article on how the near-success at Germantown convinced French observers that the Continental Army was capable of offensive action, contributing to the alliance decision.',
      },
      // TIER 3
      {
        id: 'src-ger-wikipedia-germantown',
        type: 'TERTIARY',
        title: 'Battle of Germantown -- Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Battle_of_Germantown',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of the October 1777 battle. Useful for orientation; McGuire\'s operational history should be consulted for detail.',
      },
      {
        id: 'src-ger-cliveden-visitor',
        type: 'TERTIARY',
        title: 'Cliveden (Chew House) Visitor Information',
        publisherOrHolder: 'National Trust for Historic Preservation',
        url: 'https://www.cliveden.org/visit/',
        credibilityTier: 'TIER3',
        notes:
          'Visitor information for the Chew House historic site where the Battle of Germantown\'s most dramatic episode occurred. Practical access information.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Pittsburgh -- Fort Pitt, western frontier, Ohio Valley
  // ─────────────────────────────────────────────────────────────
  'us-pa-pittsburgh': {
    sources: [
      // TIER 1
      {
        id: 'src-pit-fort-pitt-garrison-records',
        type: 'PRIMARY',
        title: 'Fort Pitt Garrison Orderly Books and Correspondence, 1775-1781',
        publisherOrHolder: 'Pennsylvania State Archives',
        credibilityTier: 'TIER1',
        notes:
          'Military records of the Continental garrison at Fort Pitt documenting supply shortages, Indian diplomacy, and frontier defense operations in the Ohio Valley during the Revolution.',
      },
      {
        id: 'src-pit-hand-brodhead-papers',
        type: 'PRIMARY',
        title: 'Papers of Generals Edward Hand and Daniel Brodhead: Fort Pitt Commands, 1777-1781',
        publisherOrHolder: 'Historical Society of Pennsylvania',
        credibilityTier: 'TIER1',
        notes:
          'Correspondence of the two successive American commanders at Fort Pitt. Hand and Brodhead\'s papers document the western theater\'s complexities: British-allied tribes, Loyalist rangers, and supply crises.',
      },
      {
        id: 'src-pit-calloway-american-revolution-indian-country',
        type: 'SECONDARY',
        title: 'The American Revolution in Indian Country: Crisis and Diversity in Native American Communities',
        publisherOrHolder: 'Cambridge University Press (Colin G. Calloway)',
        publicationDate: new Date('1995-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Scholarly study placing Fort Pitt at the center of the Western theater\'s complex diplomacy. Draws on Native American oral traditions alongside British and American documentary sources.',
      },
      {
        id: 'src-pit-downes-council-fires',
        type: 'SECONDARY',
        title: 'Council Fires on the Upper Ohio: A Narrative of Indian Affairs in the Upper Ohio Valley until 1795',
        publisherOrHolder: 'University of Pittsburgh Press (Randolph C. Downes)',
        publicationDate: new Date('1940-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Classic study of American Indian diplomacy centered on Fort Pitt and the Upper Ohio Valley during and after the Revolution. Draws on extensive primary sources from the Pittsburgh region.',
      },
      {
        id: 'src-pit-nps-fort-pitt',
        type: 'INSTITUTIONAL',
        title: 'Fort Pitt Museum: Research Collections and Interpretive Materials',
        publisherOrHolder: 'Fort Pitt Museum / Senator John Heinz History Center',
        url: 'https://www.heinzhistorycenter.org/fort-pitt-museum',
        credibilityTier: 'TIER1',
        notes:
          'The Fort Pitt Museum holds the primary collection of artifacts and documentary materials from the Revolutionary-era occupation of the site at the forks of the Ohio. Research library available to scholars.',
      },
      // TIER 2
      {
        id: 'src-pit-allegheny-county-historical',
        type: 'INSTITUTIONAL',
        title: 'Heinz History Center: Western Pennsylvania Revolutionary War Collections',
        publisherOrHolder: 'Senator John Heinz History Center',
        url: 'https://www.heinzhistorycenter.org/',
        credibilityTier: 'TIER2',
        notes:
          'Regional history center with extensive holdings on the Pittsburgh area during the Revolution, including frontier family papers, treaty documents, and records of the Continental Army\'s western operations.',
      },
      {
        id: 'src-pit-clark-memoir-northwest',
        type: 'PRIMARY',
        title: 'George Rogers Clark\'s Memoir of His Illinois Campaign, 1779',
        publisherOrHolder: 'Historical Collections of Ohio (James A. James, ed.)',
        publicationDate: new Date('1920-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Clark\'s retrospective account of his 1778-79 campaigns across the Ohio and Mississippi valleys, which were supplied and supported from Fort Pitt. Primary document for the western theater.',
      },
      {
        id: 'src-pit-pennsylvania-magazine-frontier',
        type: 'SECONDARY',
        title: 'The Pennsylvania Frontier in the Revolution',
        publisherOrHolder: 'Pennsylvania Magazine of History and Biography',
        credibilityTier: 'TIER2',
        notes:
          'Peer-reviewed articles on the western Pennsylvania frontier experience during the Revolution. Covers Fort Pitt\'s role, the Brodhead Expedition, and the Delaware and Wyandot diplomacy.',
      },
      {
        id: 'src-pit-pa-historical-museum-commission',
        type: 'INSTITUTIONAL',
        title: 'Pennsylvania Historical and Museum Commission: Fort Pitt Documentation',
        publisherOrHolder: 'Pennsylvania Historical and Museum Commission',
        url: 'https://www.phmc.pa.gov/',
        credibilityTier: 'TIER2',
        notes:
          'State agency documentation of Fort Pitt\'s remaining bastion, the only surviving structure from the Revolutionary-era fortification. Archaeological survey reports and historical site analysis.',
      },
      // TIER 3
      {
        id: 'src-pit-wikipedia-fort-pitt',
        type: 'TERTIARY',
        title: 'Fort Pitt -- Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Fort_Pitt',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of Fort Pitt\'s history from the French and Indian War through the Revolution. Useful for orientation.',
      },
      {
        id: 'src-pit-visit-pittsburgh-history',
        type: 'TERTIARY',
        title: 'Visit Pittsburgh: Fort Pitt and Revolutionary War History',
        publisherOrHolder: 'Visit Pittsburgh',
        url: 'https://www.visitpittsburgh.com/things-to-do/history-heritage/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism guide to Pittsburgh\'s Revolutionary War heritage. Practical visitor information for Fort Pitt Museum and related sites.',
      },
    ],
  },
};
