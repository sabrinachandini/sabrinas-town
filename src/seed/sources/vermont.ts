// MODEL: Claude Sonnet
// Vermont towns source data - Green Mountain Boys and contested independence
// Towns: Bennington, Brattleboro

import { Prisma } from '@prisma/client';

export const vermontSources: Record<
  string,
  { sources: Prisma.SourceCreateInput[]; sharedIds?: string[] }
> = {
  'us-vt-bennington': {
    sources: [
      // TIER 1
      {
        id: 'src-bennington-stark-report',
        type: 'PRIMARY',
        title: 'General John Stark\'s Report on the Battle of Bennington to General Schuyler, August 22, 1777',
        publisherOrHolder: 'Library of Congress, Papers of the Continental Congress',
        url: 'https://memory.loc.gov/ammem/amlaw/lwcc.html',
        credibilityTier: 'TIER1',
        notes:
          'Stark\'s official after-action report detailing the August 16, 1777 battle, troop dispositions, casualty figures, and captured materiel. The primary American military account of the Bennington engagement.',
      },
      {
        id: 'src-bennington-baum-dispatch',
        type: 'PRIMARY',
        title: 'Lieutenant Colonel Baum\'s Dispatch to General Burgoyne, August 14-15, 1777',
        publisherOrHolder: 'Public Record Office, Kew (British National Archives) / Transcribed in Burgoyne\'s State of the Expedition',
        credibilityTier: 'TIER1',
        notes:
          'Baum\'s final communications before the battle describing the composition of his Hessian-British force and his underestimation of American resistance. Published in Burgoyne\'s parliamentary defense.',
      },
      {
        id: 'src-bennington-burgoyne-state-expedition',
        type: 'PRIMARY',
        title: 'A State of the Expedition from Canada',
        publisherOrHolder: 'J. Almon (London) (General John Burgoyne)',
        publicationDate: new Date('1780-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Burgoyne\'s own published defense of the Saratoga campaign including documents related to the Bennington operation. Contains Baum\'s correspondence and Burgoyne\'s retrospective analysis of the defeat.',
      },
      {
        id: 'src-bennington-nps-bennington-battlefield',
        type: 'INSTITUTIONAL',
        title: 'Bennington Battlefield State Historic Site Interpretive Program',
        publisherOrHolder: 'New York State Office of Parks, Recreation and Historic Preservation',
        url: 'https://parks.ny.gov/historic-sites/35/details.aspx',
        credibilityTier: 'TIER1',
        notes:
          'State historic site documentation for the Bennington Battlefield in New York state, where the actual battle was fought. Includes archaeological survey results, terrain analysis, and interpretive materials.',
      },
      {
        id: 'src-bennington-luzader-saratoga',
        type: 'SECONDARY',
        title: 'Saratoga: A Military History of the Decisive Campaign of the American Revolution',
        publisherOrHolder: 'Savas Beatie (John F. Luzader)',
        publicationDate: new Date('2008-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Comprehensive military history of the Saratoga campaign with the fullest modern treatment of the Battle of Bennington, analyzing its strategic impact on Burgoyne\'s subsequent surrender.',
      },
      // TIER 2
      {
        id: 'src-bennington-hall-battle-of-bennington',
        type: 'SECONDARY',
        title: 'The Battle of Bennington',
        publisherOrHolder: 'Vermont Historical Society (Hiland Hall)',
        publicationDate: new Date('1877-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Early scholarly reconstruction of the battle drawing on survivor interviews and regimental records. Still valuable for the Green Mountain Boys\' perspective and Vermont militia participation.',
      },
      {
        id: 'src-bennington-vermont-historical-society',
        type: 'INSTITUTIONAL',
        title: 'Vermont Historical Society: Battle of Bennington Collections',
        publisherOrHolder: 'Vermont Historical Society',
        url: 'https://vermonthistory.org/',
        credibilityTier: 'TIER2',
        notes:
          'Archival and museum collections including militia muster rolls, correspondence, regimental flags, and artifacts from the Battle of Bennington and the Green Mountain Boys.',
      },
      {
        id: 'src-bennington-bellesis-green-mountain',
        type: 'SECONDARY',
        title: 'The Green Mountain Boys: Vermont\'s Militia in the American Revolution',
        publisherOrHolder: 'Vermont Division for Historic Preservation',
        credibilityTier: 'TIER2',
        notes:
          'Published history of Vermont\'s militia from the Ethan Allen period through the Bennington campaign, documenting the Green Mountain Boys\' evolving organization and their decisive role at Bennington.',
      },
      {
        id: 'src-bennington-bennington-museum',
        type: 'INSTITUTIONAL',
        title: 'Bennington Museum: Bennington Battle Flag and Collections',
        publisherOrHolder: 'Bennington Museum',
        url: 'https://www.benningtonmuseum.org/',
        credibilityTier: 'TIER2',
        notes:
          'Museum holding the Bennington Battle Flag--one of the oldest surviving American flags--along with other Revolutionary War artifacts, correspondence, and the famous monument. Collections documentation available on request.',
      },
      {
        id: 'src-bennington-peckham-casualties',
        type: 'SECONDARY',
        title: 'The Toll of Independence: Engagements and Battle Casualties of the American Revolution',
        publisherOrHolder: 'University of Chicago Press (Howard H. Peckham, ed.)',
        publicationDate: new Date('1974-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Standard reference providing verified casualty figures for the Battle of Bennington: approximately 207 British and Hessian killed, 700 captured, and fewer than 100 American casualties.',
      },
      // TIER 3
      {
        id: 'src-bennington-wikipedia',
        type: 'TERTIARY',
        title: 'Battle of Bennington -- Wikipedia',
        publisherOrHolder: 'Wikimedia Foundation',
        url: 'https://en.wikipedia.org/wiki/Battle_of_Bennington',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of the battle with map and order of battle. Narrative is accurate in outline; casualty figures and tactical details should be verified against Luzader and Peckham.',
      },
      {
        id: 'src-bennington-visit-tourism',
        type: 'TERTIARY',
        title: 'Visit Bennington: Battle Anniversary and Heritage Sites',
        publisherOrHolder: 'Bennington Area Chamber of Commerce',
        url: 'https://www.bennington.com/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism resources for Bennington including the Bennington Battle Monument, Bennington Museum, and the annual Battle of Bennington celebration held each August.',
      },
    ],
  },

  'us-vt-brattleboro': {
    sources: [
      // TIER 1
      {
        id: 'src-brattleboro-vermont-independence-1777',
        type: 'PRIMARY',
        title: 'Declaration of Independence of Vermont, January 15, 1777',
        publisherOrHolder: 'Vermont State Archives and Records Administration',
        url: 'https://www.sec.state.vt.us/archives-records.aspx',
        credibilityTier: 'TIER1',
        notes:
          'Vermont\'s own declaration of independence from New York, New Hampshire, and Great Britain, adopted at Westminster--close to Brattleboro--establishing Vermont as an independent republic. The foundational document of Vermont\'s contested status.',
      },
      {
        id: 'src-brattleboro-nh-grants-controversy',
        type: 'PRIMARY',
        title: 'Correspondence of the Governor of New York Concerning the New Hampshire Grants, 1777-1783',
        publisherOrHolder: 'New York State Library',
        credibilityTier: 'TIER1',
        notes:
          'Official New York correspondence documenting the ongoing jurisdictional dispute over Vermont (the New Hampshire Grants), directly relevant to Brattleboro\'s position on the contested Connecticut River border.',
      },
      {
        id: 'src-brattleboro-continental-congress-vermont',
        type: 'PRIMARY',
        title: 'Journals of the Continental Congress: Vermont Statehood Debates, 1777-1791',
        publisherOrHolder: 'Library of Congress',
        url: 'https://memory.loc.gov/ammem/amlaw/lwjc.html',
        credibilityTier: 'TIER1',
        notes:
          'Congressional records documenting Vermont\'s applications for admission to the union and the repeated rejection due to New York\'s objections. Establishes Vermont\'s unique status as a wartime republic outside the confederation.',
      },
      {
        id: 'src-brattleboro-vermont-state-papers',
        type: 'PRIMARY',
        title: 'State Papers of Vermont, Volume I: General Petitions, 1778-1787',
        publisherOrHolder: 'Vermont State Papers Office',
        publicationDate: new Date('1924-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Published Vermont government records covering the republic period, including petitions from Brattleboro and Windham County residents, militia organization records, and boundary dispute correspondence.',
      },
      {
        id: 'src-brattleboro-williamson-vermont-republic',
        type: 'SECONDARY',
        title: 'Vermont in Quandary: 1763-1825',
        publisherOrHolder: 'Vermont Historical Society (Chilton Williamson)',
        publicationDate: new Date('1949-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Scholarly history of Vermont\'s unique political status from the New Hampshire Grants dispute through statehood. The standard work on Vermont\'s role as a wartime republic and Brattleboro\'s frontier position.',
      },
      // TIER 2
      {
        id: 'src-brattleboro-vermont-historical-society-records',
        type: 'INSTITUTIONAL',
        title: 'Vermont Historical Society: Windham County Revolutionary War Records',
        publisherOrHolder: 'Vermont Historical Society',
        url: 'https://vermonthistory.org/',
        credibilityTier: 'TIER2',
        notes:
          'Archival materials from Windham County (Brattleboro\'s county) covering the Revolutionary period, including town meeting records, militia enrollment lists, and records of the Westminster Massacre (1775).',
      },
      {
        id: 'src-brattleboro-hahn-brattleboro',
        type: 'SECONDARY',
        title: 'History of the Town of Brattleborough, Windham County, Vt.',
        publisherOrHolder: 'D.H. Hurd & Co. (Henry Burnham)',
        publicationDate: new Date('1880-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Nineteenth-century comprehensive town history drawing on town records and early resident testimonies. Covers Brattleboro\'s Revolutionary War experience as a frontier community and the Connecticut Valley border tensions.',
      },
      {
        id: 'src-brattleboro-vermont-hessian-deserters',
        type: 'SECONDARY',
        title: 'German Mercenaries in Vermont: Hessian Deserters and Settlement',
        publisherOrHolder: 'Vermont History (Vermont Historical Society)',
        credibilityTier: 'TIER2',
        notes:
          'Scholarly article on Hessian prisoners and deserters who settled in Vermont during and after the Revolution--a phenomenon particularly relevant to the Brattleboro area near the Saratoga campaign corridor.',
      },
      {
        id: 'src-brattleboro-peters-vermont',
        type: 'SECONDARY',
        title: 'Vermont: The Green Mountain State',
        publisherOrHolder: 'Century History Company (Walter Hill Crockett)',
        publicationDate: new Date('1921-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Multi-volume state history with substantial treatment of Brattleboro and the Connecticut River Valley frontier during the Revolution, including military raids, economic hardship, and Vermont\'s disputed political status.',
      },
      {
        id: 'src-brattleboro-ethan-allen-narrative',
        type: 'SECONDARY',
        title: 'A Narrative of Col. Ethan Allen\'s Captivity',
        publisherOrHolder: 'Draper and Folsom (Ethan Allen)',
        publicationDate: new Date('1779-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Allen\'s own account of his capture and imprisonment, providing the Green Mountain Boys perspective on Vermont\'s frontier situation. Background source for understanding the political context Brattleboro operated in.',
      },
      // TIER 3
      {
        id: 'src-brattleboro-wikipedia',
        type: 'TERTIARY',
        title: 'Brattleboro, Vermont -- Wikipedia',
        publisherOrHolder: 'Wikimedia Foundation',
        url: 'https://en.wikipedia.org/wiki/Brattleboro,_Vermont',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of Brattleboro\'s history. Limited specific Revolutionary War content; should be supplemented with Burnham\'s town history and Vermont Historical Society resources.',
      },
      {
        id: 'src-brattleboro-visit-tourism',
        type: 'TERTIARY',
        title: 'Discover Brattleboro: History and Heritage',
        publisherOrHolder: 'Brattleboro Area Chamber of Commerce',
        url: 'https://www.brattleborochamber.org/',
        credibilityTier: 'TIER3',
        notes:
          'Local tourism resources with historical context on Brattleboro as a frontier community and Connecticut River Valley town. Covers nearby sites including the Westminster Massacre monument and Fort Dummer.',
      },
    ],
  },
};
