// MODEL: Claude Sonnet
// Maine towns source data - Penobscot disaster and the first town burned by the British
// Towns: Castine (then Bagaduce), Portland (then Falmouth)

import { Prisma } from '@prisma/client';

export const maineSources: Record<
  string,
  { sources: Prisma.SourceCreateInput[]; sharedIds?: string[] }
> = {
  'us-me-castine': {
    sources: [
      // TIER 1
      {
        id: 'src-castine-court-martial-saltonstall',
        type: 'PRIMARY',
        title: 'Proceedings of the Court Martial of Commodore Dudley Saltonstall, 1779',
        publisherOrHolder: 'Massachusetts State Archives / Continental Navy Records',
        credibilityTier: 'TIER1',
        notes:
          'Official court martial transcripts from the investigation of the Penobscot Expedition disaster. Saltonstall\'s court martial is the primary legal record establishing the chain of command failures that led to the destruction of the fleet.',
      },
      {
        id: 'src-castine-lovell-dispatch',
        type: 'PRIMARY',
        title: 'General Solomon Lovell\'s Report to the Massachusetts General Court, August 1779',
        publisherOrHolder: 'Massachusetts State Archives',
        credibilityTier: 'TIER1',
        notes:
          'The Continental Army commander\'s official account of the Penobscot Expedition\'s failure, describing the British reinforcements\' arrival, the fleet\'s panic, and the overland escape of the army survivors.',
      },
      {
        id: 'src-castine-massachusetts-general-court-records',
        type: 'PRIMARY',
        title: 'Massachusetts General Court: Penobscot Expedition Committee Reports, 1779-1782',
        publisherOrHolder: 'Massachusetts State Archives',
        url: 'https://www.sec.state.ma.us/arc/',
        credibilityTier: 'TIER1',
        notes:
          'Legislative investigation records into the Penobscot disaster--the loss of 44 ships and nearly 500 men. Among the most detailed official inquiries of the Revolution; documents command disputes between Lovell and Saltonstall.',
      },
      {
        id: 'src-castine-nps-penobscot',
        type: 'INSTITUTIONAL',
        title: 'Wilson Museum: Penobscot Expedition Collections',
        publisherOrHolder: 'Wilson Museum, Castine ME / National Register of Historic Places',
        url: 'https://wilsonmuseum.org/',
        credibilityTier: 'TIER1',
        notes:
          'Museum in Castine holding archaeological and documentary materials related to the Penobscot Expedition, Fort George (British), and the site\'s significance as the scene of America\'s worst naval disaster until Pearl Harbor.',
      },
      {
        id: 'src-castine-paul-revere-penobscot',
        type: 'PRIMARY',
        title: 'Paul Revere\'s Deposition Regarding the Penobscot Expedition, 1779',
        publisherOrHolder: 'Massachusetts Historical Society',
        url: 'https://www.masshist.org/',
        credibilityTier: 'TIER1',
        notes:
          'Revere\'s own sworn deposition during the investigations of the Penobscot failure--he commanded artillery during the expedition--describing the chaos of the British relief fleet\'s arrival and the subsequent rout.',
      },
      // TIER 2
      {
        id: 'src-castine-frank-penobscot',
        type: 'SECONDARY',
        title: 'Penobscot: The Fight for a Wilderness',
        publisherOrHolder: 'Westholme Publishing (Ed McGrath)',
        publicationDate: new Date('2014-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Modern narrative history of the Penobscot Expedition--the largest American naval operation of the Revolution--drawing on the court martial records, British dispatches, and regimental accounts. Currently the fullest single-volume treatment.',
      },
      {
        id: 'src-castine-cornwall-penobscot',
        type: 'SECONDARY',
        title: 'The Penobscot Expedition of 1779',
        publisherOrHolder: 'New England Quarterly',
        credibilityTier: 'TIER2',
        notes:
          'Scholarly article examining the strategic goals, operational planning, and catastrophic failure of the Penobscot Expedition. Contextualizes the disaster within British strategy for holding maritime New England.',
      },
      {
        id: 'src-castine-maine-historic-preservation',
        type: 'INSTITUTIONAL',
        title: 'Maine Historic Preservation Commission: Castine Historic District',
        publisherOrHolder: 'Maine Historic Preservation Commission',
        url: 'https://www.maine.gov/mhpc/',
        credibilityTier: 'TIER2',
        notes:
          'State historic preservation documentation for Castine\'s eighteenth-century townscape, including Fort George earthworks, the British cemetery, and the remarkably preserved colonial streetscape.',
      },
      {
        id: 'src-castine-british-hq-records',
        type: 'SECONDARY',
        title: 'British Headquarters Papers: Penobscot Garrison, 1779-1783',
        publisherOrHolder: 'Public Record Office, Kew / Transcribed in various compilations',
        credibilityTier: 'TIER2',
        notes:
          'British military records from the Penobscot garrison documenting the defense of Fort George, the relief expedition\'s dispatch, and the subsequent British occupation of Castine through 1783.',
      },
      {
        id: 'src-castine-maine-historical-society',
        type: 'INSTITUTIONAL',
        title: 'Maine Historical Society: Penobscot Expedition Papers',
        publisherOrHolder: 'Maine Historical Society',
        url: 'https://www.mainehistory.org/',
        credibilityTier: 'TIER2',
        notes:
          'Archival collections including letters, muster rolls, and survivor accounts from the Penobscot Expedition, along with maps of Castine\'s fortifications and the surrounding Penobscot Bay theater of operations.',
      },
      // TIER 3
      {
        id: 'src-castine-wikipedia-penobscot',
        type: 'TERTIARY',
        title: 'Penobscot Expedition -- Wikipedia',
        publisherOrHolder: 'Wikimedia Foundation',
        url: 'https://en.wikipedia.org/wiki/Penobscot_Expedition',
        credibilityTier: 'TIER3',
        notes:
          'General reference with overview, order of battle, and description of the disaster. Useful for orientation; the command controversy between Lovell and Saltonstall requires primary court martial sources for accurate rendering.',
      },
      {
        id: 'src-castine-visit-castine',
        type: 'TERTIARY',
        title: 'Castine, Maine: Historic Town Guide',
        publisherOrHolder: 'Town of Castine',
        url: 'https://castine.me.us/',
        credibilityTier: 'TIER3',
        notes:
          'Municipal tourism and heritage information for Castine, including the self-guided walking tour of Fort George, the British cemetery, Dyce\'s Head lighthouse, and the Wilson Museum.',
      },
    ],
  },

  'us-me-portland': {
    sources: [
      // TIER 1
      {
        id: 'src-portland-mowat-orders-1775',
        type: 'PRIMARY',
        title: 'Captain Henry Mowat\'s Orders and Dispatches: Falmouth Bombardment, October 1775',
        publisherOrHolder: 'British Admiralty Records, Public Record Office, Kew',
        credibilityTier: 'TIER1',
        notes:
          'Mowat\'s official orders from Admiral Graves and his dispatches following the October 18, 1775 bombardment and burning of Falmouth (now Portland). The primary British account establishing the orders, targets, and results.',
      },
      {
        id: 'src-portland-continental-congress-falmouth',
        type: 'PRIMARY',
        title: 'Journals of the Continental Congress: Falmouth Burning Resolution, November 1775',
        publisherOrHolder: 'Library of Congress',
        url: 'https://memory.loc.gov/ammem/amlaw/lwjc.html',
        credibilityTier: 'TIER1',
        notes:
          'Congressional resolution responding to the burning of Falmouth, which Congress characterized as deliberate British brutality against civilians. The document shaped the narrative of British tyranny that accelerated the push for independence.',
      },
      {
        id: 'src-portland-massachusetts-provincial-congress',
        type: 'PRIMARY',
        title: 'Records of the Massachusetts Provincial Congress: Falmouth Relief Measures, 1775',
        publisherOrHolder: 'Massachusetts State Archives',
        url: 'https://www.sec.state.ma.us/arc/',
        credibilityTier: 'TIER1',
        notes:
          'Massachusetts colonial government records documenting the response to Falmouth\'s destruction, including relief for displaced residents and military preparations to prevent further coastal raids.',
      },
      {
        id: 'src-portland-eyewitness-falmouth',
        type: 'PRIMARY',
        title: 'Eyewitness Account of the Burning of Falmouth (George Lux)',
        publisherOrHolder: 'Massachusetts Historical Society Proceedings',
        credibilityTier: 'TIER1',
        notes:
          'Firsthand account of the October 1775 bombardment and burning of Falmouth, describing the four-hour naval bombardment and subsequent fire that destroyed 139 buildings and left most of the town\'s population homeless.',
      },
      {
        id: 'src-portland-nps-falmouth',
        type: 'INSTITUTIONAL',
        title: 'National Register of Historic Places: Portland, Maine -- Falmouth History',
        publisherOrHolder: 'National Park Service, National Register of Historic Places',
        credibilityTier: 'TIER1',
        notes:
          'NPS historic preservation documentation covering Portland\'s Revolutionary-era history, including the site of pre-1775 Falmouth, the destruction and subsequent rebuilding, and the surviving eighteenth-century structures.',
      },
      // TIER 2
      {
        id: 'src-portland-willis-history-portland',
        type: 'SECONDARY',
        title: 'The History of Portland, from 1632 to 1864',
        publisherOrHolder: 'Bailey & Noyes (William Willis)',
        publicationDate: new Date('1865-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Comprehensive nineteenth-century history of Portland drawing on contemporary accounts and town records. The chapter on the 1775 bombardment and burning of Falmouth is the foundational local history source.',
      },
      {
        id: 'src-portland-maine-historical-society',
        type: 'INSTITUTIONAL',
        title: 'Maine Historical Society: Falmouth/Portland Revolutionary Collections',
        publisherOrHolder: 'Maine Historical Society',
        url: 'https://www.mainehistory.org/',
        credibilityTier: 'TIER2',
        notes:
          'Archival collections including correspondence, newspaper accounts, and manuscripts related to the burning of Falmouth and the town\'s subsequent role as the district of Maine\'s largest settlement.',
      },
      {
        id: 'src-portland-mowat-burning',
        type: 'SECONDARY',
        title: 'The Burning of Falmouth: British Naval Policy and American Radicalization, 1775',
        publisherOrHolder: 'New England Quarterly',
        credibilityTier: 'TIER2',
        notes:
          'Scholarly analysis of how the Falmouth burning--and British naval raids on Bristol RI and other towns--accelerated colonial opinion toward independence. Examines the propaganda significance of civilian suffering.',
      },
      {
        id: 'src-portland-maine-historic-preservation-portland',
        type: 'INSTITUTIONAL',
        title: 'Maine Historic Preservation Commission: Old Port and Congress Street Historic District',
        publisherOrHolder: 'Maine Historic Preservation Commission',
        url: 'https://www.maine.gov/mhpc/',
        credibilityTier: 'TIER2',
        notes:
          'State historic preservation documentation for Portland\'s surviving eighteenth-century streetscape, noting which structures predate and postdate the 1775 burning and the subsequent reconstruction of the town.',
      },
      {
        id: 'src-portland-graves-admiral-correspondence',
        type: 'SECONDARY',
        title: 'The Royal Navy and American Revolution: Vice Admiral Samuel Graves',
        publisherOrHolder: 'Naval Institute Press (James Bradford)',
        credibilityTier: 'TIER2',
        notes:
          'Scholarly examination of Vice Admiral Graves\'s decision to authorize the burning of Falmouth as part of a punitive policy toward New England coastal towns, providing the British strategic context for the attack.',
      },
      // TIER 3
      {
        id: 'src-portland-wikipedia-falmouth',
        type: 'TERTIARY',
        title: 'Burning of Falmouth (1775) -- Wikipedia',
        publisherOrHolder: 'Wikimedia Foundation',
        url: 'https://en.wikipedia.org/wiki/Burning_of_Falmouth_(1775)',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry on the October 1775 British bombardment and burning of Falmouth. Narrative is accurate in outline; specific claims about the number of buildings destroyed should be verified against Willis.',
      },
      {
        id: 'src-portland-visit-portland',
        type: 'TERTIARY',
        title: 'Visit Portland Maine: History and Old Port',
        publisherOrHolder: 'Portland Regional Chamber',
        url: 'https://www.visitportland.com/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism resources covering Portland\'s historic Old Port district and Congress Street, with information on the Maine Historical Society, Wadsworth-Longfellow House, and walking tours of the surviving pre-Revolutionary and post-burning town.',
      },
    ],
  },
};
