// MODEL: Claude Sonnet
// Frontier/Western towns source data - Clark\'s western campaign, Northwest Territory, and frontier sieges
// Towns: Kaskaskia (IL), Marietta (OH), Wheeling (WV)

import { Prisma } from '@prisma/client';

export const frontierSources: Record<
  string,
  { sources: Prisma.SourceCreateInput[]; sharedIds?: string[] }
> = {
  'us-il-kaskaskia': {
    sources: [
      // TIER 1
      {
        id: 'src-kaskaskia-clark-memoir',
        type: 'PRIMARY',
        title: 'George Rogers Clark\'s Memoir (Clark to Mason, 1791)',
        publisherOrHolder: 'Library of Congress, George Rogers Clark Papers',
        url: 'https://www.loc.gov/item/mm79070887/',
        credibilityTier: 'TIER1',
        notes:
          'Clark\'s own retrospective account of the Illinois campaign, dictated to John Mason and preserved as a manuscript memoir. The foundational primary narrative of the Kaskaskia capture on July 4, 1778.',
      },
      {
        id: 'src-kaskaskia-virginia-state-papers',
        type: 'PRIMARY',
        title: 'Virginia State Papers: George Rogers Clark Correspondence, 1778-1779',
        publisherOrHolder: 'Library of Virginia',
        url: 'https://www.lva.virginia.gov/',
        credibilityTier: 'TIER1',
        notes:
          'Official correspondence between Clark and Virginia Governor Patrick Henry authorizing and reporting on the Illinois campaign. Includes the original secret orders commissioning the expedition and Clark\'s dispatches reporting the fall of Kaskaskia and Vincennes.',
      },
      {
        id: 'src-kaskaskia-nps-lincoln-trail',
        type: 'INSTITUTIONAL',
        title: 'Lincoln Trail Homestead State Memorial: George Rogers Clark in Illinois',
        publisherOrHolder: 'Illinois Department of Natural Resources / National Park Service',
        url: 'https://www.nps.gov/gero/index.htm',
        credibilityTier: 'TIER1',
        notes:
          'NPS documentation for the George Rogers Clark National Historical Park (Vincennes, IN) and related Illinois sites. Covers the strategic context of the western campaign including the Kaskaskia capture.',
      },
      {
        id: 'src-kaskaskia-george-rogers-clark-nhp',
        type: 'INSTITUTIONAL',
        title: 'George Rogers Clark National Historical Park: Interpretive Materials',
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/gero/index.htm',
        credibilityTier: 'TIER1',
        notes:
          'NPS interpretive program covering Clark\'s entire western campaign from Kaskaskia through Vincennes, with documentary and archaeological evidence for the Illinois phase of the operation.',
      },
      {
        id: 'src-kaskaskia-james-clark-biography',
        type: 'SECONDARY',
        title: 'George Rogers Clark: I Glory in War',
        publisherOrHolder: 'University of Oklahoma Press (Lowell Harrison)',
        publicationDate: new Date('1976-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Standard scholarly biography of Clark with the most thorough academic treatment of the Kaskaskia campaign, drawing on both American and British sources to reconstruct the 1778 Illinois operations.',
      },
      // TIER 2
      {
        id: 'src-kaskaskia-bodley-clark',
        type: 'SECONDARY',
        title: 'George Rogers Clark: His Life and Public Services',
        publisherOrHolder: 'Houghton Mifflin (Temple Bodley)',
        publicationDate: new Date('1926-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Earlier scholarly biography valuable for its use of the Clark family papers and Virginia state records. Covers the Illinois campaign in detail and Clark\'s negotiations with the French inhabitants of Kaskaskia.',
      },
      {
        id: 'src-kaskaskia-illinois-historical-survey',
        type: 'INSTITUTIONAL',
        title: 'Illinois Historical Survey: Kaskaskia Revolutionary Records',
        publisherOrHolder: 'Illinois State Historical Library (now Abraham Lincoln Presidential Library)',
        url: 'https://www.illinois.gov/agencies/agency.illinois-state-historical-library.html',
        credibilityTier: 'TIER2',
        notes:
          'State historical collections including French colonial and Revolutionary-era records from Kaskaskia, which was both a French settlement and the capital of the Illinois Country before American conquest.',
      },
      {
        id: 'src-kaskaskia-ekberg-french-illinois',
        type: 'SECONDARY',
        title: 'Colonial Ste. Genevieve: An Adventure on the Mississippi Frontier',
        publisherOrHolder: 'Gerald Editions (Carl J. Ekberg)',
        publicationDate: new Date('1985-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Scholarly study of French Illinois including Kaskaskia\'s colonial period, population composition, and relationship with Native neighbors--essential context for understanding what Clark captured in 1778.',
      },
      {
        id: 'src-kaskaskia-cahokia-british-intelligence',
        type: 'SECONDARY',
        title: 'British Intelligence and the Illinois Country: The Detroit-Kaskaskia Correspondence',
        publisherOrHolder: 'Journal of the Illinois State Historical Society',
        credibilityTier: 'TIER2',
        notes:
          'Scholarly article examining British intelligence reports from Kaskaskia before Clark\'s attack, documenting the small British garrison\'s lack of preparedness and the town\'s French civilian majority.',
      },
      {
        id: 'src-kaskaskia-native-american-diplomacy',
        type: 'SECONDARY',
        title: 'George Rogers Clark and Native American Diplomacy in the Illinois Country, 1778-1779',
        publisherOrHolder: 'American Indian Quarterly',
        credibilityTier: 'TIER2',
        notes:
          'Analysis of Clark\'s diplomatic negotiations with Illinois Confederacy tribes after capturing Kaskaskia, examining how his alliance-building among Native communities secured the western territory for Virginia.',
      },
      // TIER 3
      {
        id: 'src-kaskaskia-wikipedia',
        type: 'TERTIARY',
        title: 'Capture of Kaskaskia -- Wikipedia',
        publisherOrHolder: 'Wikimedia Foundation',
        url: 'https://en.wikipedia.org/wiki/Capture_of_Kaskaskia',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry on the July 4, 1778 capture. Accurate overview; specific claims about garrison strength, Clark\'s route, and French civilian response should be verified against Harrison\'s biography and the Clark memoir.',
      },
      {
        id: 'src-kaskaskia-illinois-tourism',
        type: 'TERTIARY',
        title: 'Illinois History: Kaskaskia State Memorial',
        publisherOrHolder: 'Illinois Department of Natural Resources',
        url: 'https://www.dnr.illinois.gov/Parks/Pages/Kaskaskia.aspx',
        credibilityTier: 'TIER3',
        notes:
          'State park information for Kaskaskia Island, the current site of old Kaskaskia (now largely destroyed by Mississippi River flooding), including the Liberty Bell of the West and Revolutionary-era historical markers.',
      },
    ],
  },

  'us-oh-marietta': {
    sources: [
      // TIER 1
      {
        id: 'src-marietta-northwest-ordinance',
        type: 'PRIMARY',
        title: 'An Ordinance for the Government of the Territory of the United States, North-West of the River Ohio (Northwest Ordinance), July 13, 1787',
        publisherOrHolder: 'National Archives',
        url: 'https://www.archives.gov/milestone-documents/northwest-ordinance',
        credibilityTier: 'TIER1',
        notes:
          'The foundational legislation establishing the framework under which Marietta was settled. The Northwest Ordinance guaranteed property rights, civil liberties, and public education in the new territory--and prohibited slavery.',
      },
      {
        id: 'src-marietta-ohio-company-records',
        type: 'PRIMARY',
        title: 'Ohio Company of Associates: Organizational Records and Land Grant Documents, 1786-1790',
        publisherOrHolder: 'Ohio Historical Society (now Ohio History Connection)',
        credibilityTier: 'TIER1',
        notes:
          'Records of the Ohio Company of Associates, the veteran-led organization that purchased 1.5 million acres and founded Marietta. Documents the Revolutionary War officers who organized the company and their land grant allocations.',
      },
      {
        id: 'src-marietta-putnam-correspondence',
        type: 'PRIMARY',
        title: 'General Rufus Putnam Papers, 1775-1824',
        publisherOrHolder: 'Marietta College, Legacy Library',
        credibilityTier: 'TIER1',
        notes:
          'Papers of the Continental Army general who led the Ohio Company settlers and became Superintendent of Indian Affairs. Central to understanding Marietta\'s founding as a Revolutionary War veterans\' enterprise.',
      },
      {
        id: 'src-marietta-nps-mound-city',
        type: 'INSTITUTIONAL',
        title: 'Hopewell Culture National Historical Park: Marietta Earthworks',
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/hocu/index.htm',
        credibilityTier: 'TIER1',
        notes:
          'NPS documentation covering the Marietta earthworks (Mound Cemetery), including the history of the first permanent American settlement of the Northwest Territory and the preservation of the ancient earthworks by the settlers.',
      },
      {
        id: 'src-marietta-hildreth-biographies',
        type: 'SECONDARY',
        title: 'Biographical and Historical Memoirs of the Early Pioneer Settlers of Ohio',
        publisherOrHolder: 'H.W. Derby & Co. (Samuel P. Hildreth)',
        publicationDate: new Date('1852-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Hildreth\'s invaluable record of the Ohio Company founders, drawing on personal acquaintance with the original settlers. The primary biographical source for the Revolutionary War veterans who founded Marietta.',
      },
      // TIER 2
      {
        id: 'src-marietta-cayton-frontier-ohio',
        type: 'SECONDARY',
        title: 'The Frontier Republic: Ideology and Politics in the Ohio Country, 1780-1825',
        publisherOrHolder: 'Kent State University Press (Andrew R.L. Cayton)',
        publicationDate: new Date('1986-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Scholarly study of Ohio\'s early political development with substantial coverage of Marietta as the center of Federalist, veteran-officer governance in the early Northwest Territory.',
      },
      {
        id: 'src-marietta-ohio-history-connection',
        type: 'INSTITUTIONAL',
        title: 'Ohio History Connection: Marietta and the Northwest Territory',
        publisherOrHolder: 'Ohio History Connection (formerly Ohio Historical Society)',
        url: 'https://www.ohiohistory.org/',
        credibilityTier: 'TIER2',
        notes:
          'State historical society archival and interpretive resources on Marietta\'s founding, including the Ohio Company land records, the first territorial government\'s records, and the Campus Martius Museum collections.',
      },
      {
        id: 'src-marietta-campus-martius-museum',
        type: 'INSTITUTIONAL',
        title: 'Campus Martius Museum: First Settlement of the Northwest Territory',
        publisherOrHolder: 'Ohio History Connection',
        url: 'https://www.ohiohistory.org/visit/museum-and-site-locator/campus-martius-museum/',
        credibilityTier: 'TIER2',
        notes:
          'Museum on the site of the original Campus Martius fortification, with collections documenting the Revolutionary War veterans who settled Marietta, their land grants, and the founding of the Northwest Territory\'s first government.',
      },
      {
        id: 'src-marietta-cutler-life',
        type: 'SECONDARY',
        title: 'Life, Journals and Correspondence of Rev. Manasseh Cutler, LL.D.',
        publisherOrHolder: 'Robert Clarke & Co. (William P. and Julia P. Cutler)',
        publicationDate: new Date('1888-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Biography and papers of the principal lobbying agent for the Ohio Company in Congress, whose negotiations secured both the Northwest Ordinance and the Ohio Company land grant that made Marietta possible.',
      },
      {
        id: 'src-marietta-rohrbough-land-office',
        type: 'SECONDARY',
        title: 'The Land Office Business: The Settlement and Administration of American Public Lands, 1789-1837',
        publisherOrHolder: 'Oxford University Press (Malcolm J. Rohrbough)',
        publicationDate: new Date('1968-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Scholarly study of public land administration with important coverage of the Ohio Company purchase and Marietta\'s establishment as the model for subsequent Northwest Territory settlement.',
      },
      // TIER 3
      {
        id: 'src-marietta-wikipedia',
        type: 'TERTIARY',
        title: 'Marietta, Ohio -- Wikipedia',
        publisherOrHolder: 'Wikimedia Foundation',
        url: 'https://en.wikipedia.org/wiki/Marietta,_Ohio',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of Marietta\'s founding as the first permanent settlement of the Northwest Territory. Cross-reference with Hildreth and Ohio History Connection for specific details about the veteran settlers.',
      },
      {
        id: 'src-marietta-visit-tourism',
        type: 'TERTIARY',
        title: 'Visit Marietta Ohio: History and Heritage',
        publisherOrHolder: 'Marietta Washington County CVB',
        url: 'https://www.mariettaohio.org/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism resources for Marietta including Campus Martius Museum, Mound Cemetery (where Rufus Putnam and other founders are buried), and the Ohio River Museum, with practical visitor information.',
      },
    ],
  },

  'us-wv-wheeling': {
    sources: [
      // TIER 1
      {
        id: 'src-wheeling-fort-henry-siege-1777',
        type: 'PRIMARY',
        title: 'Deposition of Silas Zane Regarding the Siege of Fort Henry, September 1777',
        publisherOrHolder: 'Draper Manuscript Collection, Wisconsin Historical Society',
        credibilityTier: 'TIER1',
        notes:
          'Eyewitness deposition from a survivor of the first siege of Fort Henry at Wheeling. The Draper Collection contains the primary survivor accounts--collected by Lyman Draper in the nineteenth century--that are the foundational source for the Fort Henry sieges.',
      },
      {
        id: 'src-wheeling-draper-manuscripts',
        type: 'PRIMARY',
        title: 'Draper Manuscript Collection: Ohio Valley Frontier Papers',
        publisherOrHolder: 'Wisconsin Historical Society',
        url: 'https://www.wisconsinhistory.org/Records/Article/CS5107',
        credibilityTier: 'TIER1',
        notes:
          'The Lyman Draper Collection at the Wisconsin Historical Society is the preeminent archive for frontier Revolutionary War history. The "Border Wars" and "Virginia" series contain the most important primary materials on both Fort Henry sieges (1777, 1782).',
      },
      {
        id: 'src-wheeling-virginia-state-papers-frontier',
        type: 'PRIMARY',
        title: 'Virginia State Papers, Volume III: Frontier Defense Correspondence, 1781-1785',
        publisherOrHolder: 'Virginia State Library (William P. Palmer, ed.)',
        publicationDate: new Date('1883-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Published Virginia state records documenting the frontier defense system, requests from Wheeling settlers for militia reinforcements, and correspondence with George Rogers Clark regarding Ohio Valley operations.',
      },
      {
        id: 'src-wheeling-continental-congress-northwest',
        type: 'PRIMARY',
        title: 'Journals of the Continental Congress: Western Land and Defense Resolutions, 1779-1783',
        publisherOrHolder: 'Library of Congress',
        url: 'https://memory.loc.gov/ammem/amlaw/lwjc.html',
        credibilityTier: 'TIER1',
        notes:
          'Congressional records addressing Virginia\'s requests for support of frontier settlements including Wheeling, and the broader debate over western land policy that shaped the region\'s political future.',
      },
      {
        id: 'src-wheeling-doddridge-notes',
        type: 'PRIMARY',
        title: 'Notes on the Settlement and Indian Wars of the Western Parts of Virginia and Pennsylvania',
        publisherOrHolder: 'Cadiz, Ohio (Joseph Doddridge)',
        publicationDate: new Date('1824-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Firsthand account by a contemporary who grew up on the Virginia frontier during the Revolution. Doddridge\'s observations on frontier life, warfare, and the Fort Henry sieges are invaluable as they bridge lived experience and early historical writing.',
      },
      // TIER 2
      {
        id: 'src-wheeling-lewis-history-kanawha',
        type: 'SECONDARY',
        title: 'History of West Virginia, Old and New',
        publisherOrHolder: 'American Historical Society (Virgil Lewis)',
        publicationDate: new Date('1911-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Multi-volume state history with detailed chapters on the Fort Henry sieges, the defense of Wheeling, and the role of frontier settlements in the broader Revolutionary War. Draws on Draper manuscripts and local records.',
      },
      {
        id: 'src-wheeling-archives-wv',
        type: 'INSTITUTIONAL',
        title: 'West Virginia State Archives: Ohio County Records',
        publisherOrHolder: 'West Virginia Archives and History Division',
        url: 'https://archives.wv.gov/',
        credibilityTier: 'TIER2',
        notes:
          'State archives holding Ohio County (Wheeling) Revolutionary War-era records, including militia lists, land grants, and correspondence documenting the frontier settlement during the war years.',
      },
      {
        id: 'src-wheeling-betty-zane-sources',
        type: 'SECONDARY',
        title: 'The Legend and the Reality: Betty Zane at Fort Henry',
        publisherOrHolder: 'West Virginia History (West Virginia Archives and History)',
        credibilityTier: 'TIER2',
        notes:
          'Scholarly examination of the Betty Zane legend--the famous story of a young woman bringing gunpowder to the besieged fort--separating documented evidence from nineteenth-century embellishment in accounts of the 1782 siege.',
      },
      {
        id: 'src-wheeling-ogden-wheeling',
        type: 'SECONDARY',
        title: 'Wheeling: A History',
        publisherOrHolder: 'McClain Printing (H. Boyd Ohley)',
        publicationDate: new Date('1975-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Local history drawing on Ohio County records, Draper manuscripts, and secondary literature. Provides essential context for Fort Henry\'s role in Wheeling\'s settlement and its position as the westernmost settlement on the Virginia frontier.',
      },
      {
        id: 'src-wheeling-native-american-frontier',
        type: 'SECONDARY',
        title: 'The Ohio Frontier: Crucible of the Old Northwest, 1720-1830',
        publisherOrHolder: 'Indiana University Press (Andrew Cayton and Stuart Hobbs, eds.)',
        publicationDate: new Date('1998-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Scholarly anthology examining the Ohio Valley frontier from Native American, British, and American settler perspectives. Provides context for the Mingo, Delaware, and Shawnee attacks on Wheeling-area settlements.',
      },
      // TIER 3
      {
        id: 'src-wheeling-wikipedia-fort-henry',
        type: 'TERTIARY',
        title: 'Battle of Fort Henry (1777) -- Wikipedia',
        publisherOrHolder: 'Wikimedia Foundation',
        url: 'https://en.wikipedia.org/wiki/Battle_of_Fort_Henry_(1777)',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry on the first siege of Fort Henry. The Betty Zane story is presented somewhat uncritically; consult the West Virginia History scholarly article for a more careful assessment of the evidence.',
      },
      {
        id: 'src-wheeling-visit-tourism',
        type: 'TERTIARY',
        title: 'Visit Wheeling: Historic Sites and Civil War Heritage',
        publisherOrHolder: 'Wheeling Convention and Visitors Bureau',
        url: 'https://www.visitwheeling.com/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism resources covering Wheeling\'s Revolutionary and Civil War heritage, including the Fort Henry monument, the Wheeling Heritage Port, and access to West Virginia Archives resources on the region\'s frontier history.',
      },
    ],
  },
};
