// MODEL: Claude Sonnet 4.6
// South Carolina -- Revolutionary War source data
// Hub town: us-sc-charleston (15-20 sources)
// Standard towns: us-sc-camden, us-sc-cowpens, us-sc-ninety-six,
//                 us-sc-eutaw-springs, us-sc-beaufort,
//                 us-sc-hobkirks-hill, us-sc-fort-moultrie (10+ sources each)

import { Prisma } from '@prisma/client';

export const southCarolinaSources: Record<
  string,
  { sources: Prisma.SourceCreateInput[]; sharedIds?: string[] }
> = {

  // ─────────────────────────────────────────────────────────────────────────
  // HUB: Charleston -- Fall 1780, largest American surrender, southern campaign pivot
  // ─────────────────────────────────────────────────────────────────────────
  'us-sc-charleston': {
    sources: [
      // TIER 1 -- Primary sources and authoritative institutional resources
      {
        id: 'src-charleston-sc-lincoln-capitulation',
        type: 'PRIMARY',
        title: "Articles of Capitulation: Charleston, May 12, 1780",
        publisherOrHolder: 'National Archives and Records Administration',
        url: 'https://www.archives.gov/',
        credibilityTier: 'TIER1',
        notes:
          "The surrender document signed by General Benjamin Lincoln and Sir Henry Clinton. Covered approximately 5,400 Continental soldiers -- the largest American military surrender of the Revolutionary War. Establishes the terms and scale of the disaster.",
      },
      {
        id: 'src-charleston-sc-lincoln-siege-journal',
        type: 'PRIMARY',
        title: "General Benjamin Lincoln\'s Siege Journal, March-May 1780",
        publisherOrHolder: 'Massachusetts Historical Society',
        url: 'https://www.masshist.org/',
        credibilityTier: 'TIER1',
        notes:
          "Lincoln\'s personal account of the siege of Charleston from the American commander\'s perspective. Details the progressive tightening of the British siege lines, the failure of relief attempts, and the decision to surrender.",
      },
      {
        id: 'src-charleston-sc-clinton-narrative',
        type: 'PRIMARY',
        title: "The American Rebellion: Sir Henry Clinton\'s Narrative of His Campaigns, 1775-1782",
        publisherOrHolder: 'Yale University Press (William B. Willcox, ed.)',
        publicationDate: new Date('1954-01-01'),
        credibilityTier: 'TIER1',
        notes:
          "Clinton\'s own account of the 1780 Charleston campaign, prepared as a defense of his strategic decisions. The most detailed British primary source on the siege operations and the decision to target Charleston as the key to the southern strategy.",
      },
      {
        id: 'src-charleston-sc-british-quartermaster-records',
        type: 'PRIMARY',
        title: "British Army Headquarters Papers: Charleston Occupation Records, 1780-1782",
        publisherOrHolder: 'Public Record Office (National Archives, United Kingdom)',
        credibilityTier: 'TIER1',
        notes:
          "British military administrative records from the Charleston occupation. Includes garrison orders, Loyalist militia enrollment lists, sequestration of Patriot property, and records of the prisoner parole system.",
      },
      {
        id: 'src-charleston-sc-moultrie-memoirs',
        type: 'PRIMARY',
        title: "Memoirs of the American Revolution, so far as it Related to the States of North and South Carolina, and Georgia",
        publisherOrHolder: 'David Longworth (William Moultrie)',
        publicationDate: new Date('1802-01-01'),
        credibilityTier: 'TIER1',
        notes:
          "First-hand account by the senior surviving American commander in the South. Covers the 1776 Fort Moultrie victory, the 1779 siege attempt, and the 1780 fall of Charleston. Indispensable primary memoir for the entire South Carolina campaign.",
      },
      {
        id: 'src-charleston-sc-schs-collections',
        type: 'PRIMARY',
        title: "South Carolina Historical Society: Revolutionary War Manuscript Collections",
        publisherOrHolder: 'South Carolina Historical Society',
        url: 'https://www.southcarolinahistoricalsociety.org/',
        credibilityTier: 'TIER1',
        notes:
          "Holds the largest single collection of South Carolina Revolutionary War manuscripts, including the Laurens Family Papers, Marion Brigade orderly books, and British occupation administrative records.",
      },
      {
        id: 'src-charleston-sc-nps-fort-sumter-and-moultrie',
        type: 'INSTITUTIONAL',
        title: "Fort Sumter and Fort Moultrie National Historical Park: Revolutionary War Interpretive Resources",
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/fosu/index.htm',
        credibilityTier: 'TIER1',
        notes:
          "NPS interpretive materials on the Sullivan\'s Island and Charleston harbor defenses covering both the 1776 defense and the 1780 fall. Includes archaeology reports on Fort Moultrie and the sea approaches.",
      },
      {
        id: 'src-charleston-sc-sc-state-archives',
        type: 'PRIMARY',
        title: "South Carolina Department of Archives and History: Revolutionary War Records",
        publisherOrHolder: 'South Carolina Department of Archives and History',
        url: 'https://www.scdah.sc.gov/',
        credibilityTier: 'TIER1',
        notes:
          "The state archives hold militia pay vouchers, pension applications, General Assembly records from the wartime Patriot government (in exile from Charleston), and records of the British occupation period.",
      },
      // TIER 2
      {
        id: 'src-charleston-sc-borick-gallant-defense',
        type: 'SECONDARY',
        title: "A Gallant Defense: The Siege of Charleston, 1780",
        publisherOrHolder: 'University of South Carolina Press (Carl P. Borick)',
        publicationDate: new Date('2003-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "The definitive modern scholarly history of the 1780 siege. Uses British and American records to reconstruct the campaign in detail. Excellent on the engineering of the siege lines and the decision-making on both sides.",
      },
      {
        id: 'src-charleston-sc-rankin-swamp-fox',
        type: 'SECONDARY',
        title: "Francis Marion: The Swamp Fox",
        publisherOrHolder: 'Thomas Y. Crowell (Hugh F. Rankin)',
        publicationDate: new Date('1973-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Scholarly biography of the guerrilla leader who operated out of the Charleston hinterland after the 1780 fall. Based on Marion\'s brigade orderly books and British intelligence reports. Essential for understanding resistance to the occupation.",
      },
      {
        id: 'src-charleston-sc-massey-john-laurens',
        type: 'SECONDARY',
        title: "John Laurens and the American Revolution",
        publisherOrHolder: 'University of South Carolina Press (Gregory D. Massey)',
        publicationDate: new Date('2000-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Biography of the Charleston-born Continental officer and advocate for arming enslaved soldiers. Provides important perspective on Charleston\'s elite Patriot community and the intersection of the Revolution with slavery.",
      },
      {
        id: 'src-charleston-sc-lambert-south-carolina-loyalists',
        type: 'SECONDARY',
        title: "South Carolina Loyalists in the American Revolution",
        publisherOrHolder: 'University of South Carolina Press (Robert S. Lambert)',
        publicationDate: new Date('1987-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Scholarly study of the substantial Loyalist population in South Carolina, particularly in the backcountry and among recent immigrants. Essential context for understanding why British commanders believed Charleston would be a secure base.",
      },
      {
        id: 'src-charleston-sc-ramsay-revolution-sc',
        type: 'SECONDARY',
        title: "The History of the Revolution of South-Carolina",
        publisherOrHolder: 'David Longworth (David Ramsay)',
        publicationDate: new Date('1785-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Early contemporary history by a Charleston physician and legislator who lived through the occupation. Contemporaneous with many events described. While partisan, it preserves details and perspectives not available elsewhere.",
      },
      {
        id: 'src-charleston-sc-gibbes-documentary-history',
        type: 'SECONDARY',
        title: "Documentary History of the American Revolution (3 vols.)",
        publisherOrHolder: 'D. Appleton (Robert W. Gibbes)',
        publicationDate: new Date('1853-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Nineteenth-century compilation of South Carolina primary documents including correspondence, orders, and accounts. Many of the original documents Gibbes transcribed are no longer accessible, making this a critical secondary-primary hybrid source.",
      },
      {
        id: 'src-charleston-sc-museum-charleston',
        type: 'INSTITUTIONAL',
        title: "Charleston Museum: Revolutionary War Collections",
        publisherOrHolder: 'Charleston Museum',
        url: 'https://www.charlestonmuseum.org/',
        credibilityTier: 'TIER2',
        notes:
          "The oldest museum in America holds significant collections of Revolutionary-era material including militia weapons, documents, and artifacts from the Charleston occupation period. Research library accessible to scholars.",
      },
      // TIER 3
      {
        id: 'src-charleston-sc-wikipedia-siege-1780',
        type: 'TERTIARY',
        title: "Siege of Charleston (1780) -- Wikipedia",
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Siege_of_Charleston_(1780)',
        credibilityTier: 'TIER3',
        notes:
          "General reference overview of the 1780 siege. Covers the approach campaign, siege operations, and the surrender. Cross-reference with Borick for accurate casualty and unit figures.",
      },
      {
        id: 'src-charleston-sc-preservation-society',
        type: 'TERTIARY',
        title: "Preservation Society of Charleston: Revolutionary Charleston Walking Tour",
        publisherOrHolder: 'Preservation Society of Charleston',
        url: 'https://www.preservationsociety.org/',
        credibilityTier: 'TIER3',
        notes:
          'Visitor-oriented walking tour resources identifying surviving 18th-century structures in the historic district. Useful for georeferencing accounts of the siege and occupation within the present-day city.',
      },
      {
        id: 'src-charleston-sc-visitch',
        type: 'TERTIARY',
        title: "Explore Charleston: Revolutionary War History",
        publisherOrHolder: 'Explore Charleston',
        url: 'https://www.explorecharleston.com/history/revolutionary-war/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism site with concise overview of Charleston in the Revolution, covering the 1776 defense, 1780 siege, and occupation period. Good for orienting visitors to the major sites and themes.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Camden -- Battle August 16, 1780; Gates\'s disaster
  // ─────────────────────────────────────────────────────────────────────────
  'us-sc-camden': {
    sources: [
      // TIER 1
      {
        id: 'src-camden-sc-gates-report-to-congress',
        type: 'PRIMARY',
        title: "General Horatio Gates to the President of Congress, August 20, 1780",
        publisherOrHolder: 'National Archives and Records Administration',
        credibilityTier: 'TIER1',
        notes:
          "Gates\'s official report on the Battle of Camden, written four days after the disaster. Notably suppresses the scale of the rout and his own flight. Cross-reference with Otho Williams\'s account for a candid American perspective.",
      },
      {
        id: 'src-camden-sc-cornwallis-dispatch-camden',
        type: 'PRIMARY',
        title: "Lord Cornwallis to Sir Henry Clinton: Dispatch on the Battle of Camden, August 1780",
        publisherOrHolder: 'Public Record Office (National Archives, United Kingdom)',
        credibilityTier: 'TIER1',
        notes:
          "Cornwallis\'s official report of the victory at Camden. Provides British order of battle, casualty figures, and assessment of Gates\'s American army. The British perspective on a battle that destroyed the main American southern force.",
      },
      {
        id: 'src-camden-sc-williams-narrative',
        type: 'PRIMARY',
        title: "A Narrative of the Campaign of 1780 (Otho Holland Williams)",
        publisherOrHolder: 'William Johnson (in Sketches of the Life and Correspondence of Nathanael Greene)',
        publicationDate: new Date('1822-01-01'),
        credibilityTier: 'TIER1',
        notes:
          "Williams was Gates\'s adjutant general and an eyewitness to the Camden disaster. His narrative, while published decades later, is regarded as the most candid and accurate American account of the battle\'s course.",
      },
      {
        id: 'src-camden-sc-nps-historic-camden',
        type: 'INSTITUTIONAL',
        title: "Historic Camden Revolutionary War Site",
        publisherOrHolder: 'Historic Camden Foundation',
        url: 'https://www.historiccamden.org/',
        credibilityTier: 'TIER1',
        notes:
          "The Historic Camden Foundation operates the reconstructed fortified British post and maintains archival and archaeological research on the battle and occupation. The site includes the reconstructed Cornwallis House and surviving earthworks.",
      },
      {
        id: 'src-camden-sc-sc-state-archives-camden',
        type: 'PRIMARY',
        title: "South Carolina State Records: Camden District Court and Loyalist Records, 1780-1781",
        publisherOrHolder: 'South Carolina Department of Archives and History',
        url: 'https://www.scdah.sc.gov/',
        credibilityTier: 'TIER1',
        notes:
          "Camden district administrative and legal records from the British occupation period. Documents property sequestrations, Loyalist militia enrollment, and the civil administration of the British post.",
      },
      // TIER 2
      {
        id: 'src-camden-sc-buchanan-road-to-guilford',
        type: 'SECONDARY',
        title: "The Road to Guilford Courthouse: The American Revolution in the Carolinas",
        publisherOrHolder: 'John Wiley & Sons (John Buchanan)',
        publicationDate: new Date('1997-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Best modern narrative covering the southern theater from Charleston to Guilford Courthouse. The Camden chapter is the most detailed modern account of the battle, integrating British and American sources.",
      },
      {
        id: 'src-camden-sc-otis-camden-article',
        type: 'SECONDARY',
        title: "The Battle of Camden: A Reassessment",
        publisherOrHolder: 'South Carolina Historical Magazine',
        publicationDate: new Date('1995-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Scholarly article revising the traditional narrative by examining what Gates\'s army could realistically have accomplished given supply shortages and militia reliability. Published in the premier journal for South Carolina history.",
      },
      {
        id: 'src-camden-sc-nelson-gates-biography',
        type: 'SECONDARY',
        title: "Horatio Gates: Defender of American Liberties",
        publisherOrHolder: 'Louisiana State University Press (Paul David Nelson)',
        publicationDate: new Date('1976-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Revisionist biography that offers a more measured assessment of Gates than the traditional hagiography-to-disgrace arc. The Camden chapter examines what Gates knew, the intelligence failures, and the chaos of the night march.",
      },
      {
        id: 'src-camden-sc-south-carolina-hist-mag',
        type: 'INSTITUTIONAL',
        title: "South Carolina Historical Magazine: Camden and the Southern Campaign",
        publisherOrHolder: 'South Carolina Historical Society',
        url: 'https://www.southcarolinahistoricalsociety.org/publications/',
        credibilityTier: 'TIER2',
        notes:
          "The peer-reviewed journal of record for South Carolina history. Multiple issues contain primary documents, archaeological reports on the Camden battlefield, and analyses of the Battle of Camden and its aftermath.",
      },
      {
        id: 'src-camden-sc-bass-swamp-country',
        type: 'SECONDARY',
        title: "Swamp Fox: The Life and Campaigns of General Francis Marion",
        publisherOrHolder: 'Henry Holt (Robert D. Bass)',
        publicationDate: new Date('1959-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Covers the guerrilla operations that continued after Camden destroyed the conventional American southern army. Provides essential context for understanding the partisan war waged from the South Carolina backcountry during the occupation.",
      },
      // TIER 3
      {
        id: 'src-camden-sc-wikipedia-battle',
        type: 'TERTIARY',
        title: "Battle of Camden -- Wikipedia",
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Battle_of_Camden',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry covering the battle chronology, order of battle, and aftermath. Cross-reference with Buchanan and Williams for casualty figures and command decisions.',
      },
      {
        id: 'src-camden-sc-battlefields-trust',
        type: 'TERTIARY',
        title: "Camden Battlefield -- American Battlefield Trust",
        publisherOrHolder: 'American Battlefield Trust',
        url: 'https://www.battlefields.org/learn/revolutionary-war/battles/camden',
        credibilityTier: 'TIER3',
        notes:
          'Visitor-oriented battlefield guide with maps, troop movement diagrams, and summary narrative. Published by the land preservation organization that has acquired portions of the Camden battlefield.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Cowpens -- Morgan\'s masterpiece, January 17, 1781
  // ─────────────────────────────────────────────────────────────────────────
  'us-sc-cowpens': {
    sources: [
      // TIER 1
      {
        id: 'src-cowpens-sc-morgan-report',
        type: 'PRIMARY',
        title: "General Daniel Morgan to General Nathanael Greene: Report of the Battle of Cowpens, January 19, 1781",
        publisherOrHolder: 'National Archives and Records Administration',
        credibilityTier: 'TIER1',
        notes:
          "Morgan\'s official battle report, written two days after the action. Describes his tactical plan, the performance of the militia, Tarleton\'s cavalry charge, and the outcome. The essential American primary source for the battle.",
      },
      {
        id: 'src-cowpens-sc-tarleton-cowpens-account',
        type: 'PRIMARY',
        title: "A History of the Campaigns of 1780 and 1781: Cowpens Chapter",
        publisherOrHolder: 'T. Cadell (Banastre Tarleton)',
        publicationDate: new Date('1787-01-01'),
        credibilityTier: 'TIER1',
        notes:
          "Tarleton\'s self-serving but detailed account of the Battle of Cowpens from the British perspective. Cross-referencing with Morgan\'s report reveals significant discrepancies in the explanation of the British defeat.",
      },
      {
        id: 'src-cowpens-sc-nps-battlefield',
        type: 'INSTITUTIONAL',
        title: "Cowpens National Battlefield: Official NPS Interpretive Resources",
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/cowp/index.htm',
        credibilityTier: 'TIER1',
        notes:
          "NPS resources on the Cowpens battlefield, including tactical maps, archaeology reports on the American and British positions, and analysis of Morgan\'s double-envelopment tactics. The battlefield is among the best-preserved of the Revolution.",
      },
      {
        id: 'src-cowpens-sc-eyewitness-depositions',
        type: 'PRIMARY',
        title: "Pension Depositions of Cowpens Veterans, 1820-1840",
        publisherOrHolder: 'National Archives and Records Administration, Revolutionary War Pension Files',
        url: 'https://www.fold3.com/title/452/revolutionary-war-pension-and-bounty-land-warrant-application-files',
        credibilityTier: 'TIER1',
        notes:
          "Pension applications from Cowpens veterans contain individual soldier accounts of the battle -- the militia double volley, the apparent retreat, and the final encirclement. Many veterans' accounts corroborate Morgan\'s planned tactical withdrawal.",
      },
      {
        id: 'src-cowpens-sc-greene-papers',
        type: 'PRIMARY',
        title: "The Papers of General Nathanael Greene, Vol. VII: Cowpens and After",
        publisherOrHolder: 'University of North Carolina Press (Richard K. Showman, ed.)',
        publicationDate: new Date('1994-01-01'),
        credibilityTier: 'TIER1',
        notes:
          "Critical edition of Greene\'s correspondence. Contains Morgan\'s battle report, Greene\'s response, and the subsequent planning letters showing how Cowpens was integrated into the larger strategy of exhausting Cornwallis.",
      },
      // TIER 2
      {
        id: 'src-cowpens-sc-babits-devil-whipping',
        type: 'SECONDARY',
        title: "A Devil of a Whipping: The Battle of Cowpens",
        publisherOrHolder: 'University of North Carolina Press (Lawrence E. Babits)',
        publicationDate: new Date('1998-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "The definitive modern military history of Cowpens. Uses pension records, British returns, and battlefield archaeology to reconstruct the action unit by unit. Conclusively establishes that Morgan\'s militia withdrawal was planned, not a rout.",
      },
      {
        id: 'src-cowpens-sc-higginbotham-morgan',
        type: 'SECONDARY',
        title: "Daniel Morgan: Revolutionary Rifleman",
        publisherOrHolder: 'University of North Carolina Press (Don Higginbotham)',
        publicationDate: new Date('1961-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Standard scholarly biography of Morgan. The Cowpens chapter remains one of the most thorough analyses of Morgan\'s tactical genius and his use of the terrain and militia psychology in planning the battle.",
      },
      {
        id: 'src-cowpens-sc-schs-cowpens-research',
        type: 'INSTITUTIONAL',
        title: "South Carolina Historical Society: Cowpens Papers and Collections",
        publisherOrHolder: 'South Carolina Historical Society',
        url: 'https://www.southcarolinahistoricalsociety.org/',
        credibilityTier: 'TIER2',
        notes:
          "SCHS holdings include correspondence from South Carolina militia officers who participated in Cowpens, family papers of participants, and secondary analyses published in the South Carolina Historical Magazine.",
      },
      {
        id: 'src-cowpens-sc-american-battlefield-trust',
        type: 'SECONDARY',
        title: "Cowpens Battlefield Preservation Reports",
        publisherOrHolder: 'American Battlefield Trust',
        url: 'https://www.battlefields.org/learn/revolutionary-war/battles/cowpens',
        credibilityTier: 'TIER2',
        notes:
          "The American Battlefield Trust has conducted ground-penetrating radar surveys and site assessments at Cowpens that have refined understanding of the battlefield\'s physical layout. Research reports supplement Babits\'s reconstructions.",
      },
      {
        id: 'src-cowpens-sc-buchanan-road-to-guilford-cowpens',
        type: 'SECONDARY',
        title: "The Road to Guilford Courthouse: Cowpens Chapter",
        publisherOrHolder: 'John Wiley & Sons (John Buchanan)',
        publicationDate: new Date('1997-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Buchanan\'s narrative treatment of Cowpens provides important campaign context, linking the battle to Greene\'s broader strategy and the crisis precipitated by Tarleton\'s aggressive pursuit of Morgan.",
      },
      // TIER 3
      {
        id: 'src-cowpens-sc-wikipedia-battle',
        type: 'TERTIARY',
        title: "Battle of Cowpens -- Wikipedia",
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Battle_of_Cowpens',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry. The tactical description and order of battle are accurate but should be verified against Babits for unit-level details. Maps on this page are useful for an initial orientation.',
      },
      {
        id: 'src-cowpens-sc-nps-visitor',
        type: 'TERTIARY',
        title: "Cowpens National Battlefield Visitor Guide",
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/cowp/planyourvisit/index.htm',
        credibilityTier: 'TIER3',
        notes:
          'Visitor-oriented guide to the battlefield trail. Includes a self-guided auto tour that follows the American and British positions. Useful for georeferencing the NPS tactical maps.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Ninety Six -- Siege 1781, frontier stronghold
  // ─────────────────────────────────────────────────────────────────────────
  'us-sc-ninety-six': {
    sources: [
      // TIER 1
      {
        id: 'src-ninety-six-sc-greene-siege-correspondence',
        type: 'PRIMARY',
        title: "General Nathanael Greene\'s Correspondence: Siege of Ninety Six, May-June 1781",
        publisherOrHolder: 'University of North Carolina Press (Papers of Nathanael Greene)',
        publicationDate: new Date('1997-01-01'),
        credibilityTier: 'TIER1',
        notes:
          "Greene\'s letters during the 28-day siege document the engineering challenges, the assault on the Star Fort, and the agonizing decision to lift the siege upon Rawdon\'s approach. Critical for understanding American decision-making.",
      },
      {
        id: 'src-ninety-six-sc-rawdon-dispatch',
        type: 'PRIMARY',
        title: "Lord Rawdon to Sir Henry Clinton: Dispatch on the Relief of Ninety Six, June 1781",
        publisherOrHolder: 'Public Record Office (National Archives, United Kingdom)',
        credibilityTier: 'TIER1',
        notes:
          "Rawdon\'s dispatch describing his forced march to relieve the besieged garrison. Provides the British perspective on the strategic importance of Ninety Six as the key to the South Carolina backcountry.",
      },
      {
        id: 'src-ninety-six-sc-nps-site',
        type: 'INSTITUTIONAL',
        title: "Ninety Six National Historic Site",
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/nisi/index.htm',
        credibilityTier: 'TIER1',
        notes:
          "NPS interpretive resources for the Ninety Six site, including the Star Fort earthworks, the log stockade reconstruction, and the parallel trenches from the 1781 siege. The site has been extensively archaeologically investigated.",
      },
      {
        id: 'src-ninety-six-sc-pension-records-siege',
        type: 'PRIMARY',
        title: "Pension Applications: Ninety Six Garrison and Siege Participants, 1820s-1840s",
        publisherOrHolder: 'National Archives and Records Administration',
        credibilityTier: 'TIER1',
        notes:
          "Pension depositions from veterans on both sides of the Ninety Six siege. American pensioners describe the parallel trenching and assault; Loyalist refugees filed British pension claims documenting garrison hardships and the relief march.",
      },
      {
        id: 'src-ninety-six-sc-sc-state-archives-backcountry',
        type: 'PRIMARY',
        title: "South Carolina Backcountry District Records: Ninety Six, 1775-1782",
        publisherOrHolder: 'South Carolina Department of Archives and History',
        url: 'https://www.scdah.sc.gov/',
        credibilityTier: 'TIER1',
        notes:
          "Court records, property inventories, and administrative files from the Ninety Six district. Documents the intense Patriot-Loyalist civil war in the backcountry surrounding the fortified post.",
      },
      // TIER 2
      {
        id: 'src-ninety-six-sc-lee-memoirs',
        type: 'SECONDARY',
        title: "Memoirs of the War in the Southern Department of the United States",
        publisherOrHolder: 'Bradford and Inskeep (Henry Lee)',
        publicationDate: new Date('1812-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Light Horse Harry Lee served at Ninety Six commanding his Legion. His memoirs, though self-aggrandizing, contain operational detail unavailable elsewhere, particularly on the abortive assault and the engineering of the Mayham Tower.",
      },
      {
        id: 'src-ninety-six-sc-buchanan-road-ninetyix',
        type: 'SECONDARY',
        title: "The Road to Guilford Courthouse: Ninety Six and the Siege",
        publisherOrHolder: 'John Wiley & Sons (John Buchanan)',
        publicationDate: new Date('1997-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Provides campaign context for the siege of Ninety Six within Greene\'s broader strategy of recovering South Carolina. Explains why Ninety Six was the last major British inland post and why its retention mattered to British strategy.",
      },
      {
        id: 'src-ninety-six-sc-south-carolina-hist-mag-siege',
        type: 'SECONDARY',
        title: "The Siege of Ninety Six: Archaeology and History",
        publisherOrHolder: 'South Carolina Historical Magazine',
        publicationDate: new Date('1980-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Peer-reviewed article combining documentary and archaeological evidence to reconstruct the fortifications at Ninety Six. Foundational for NPS interpretation of the Star Fort earthworks.",
      },
      {
        id: 'src-ninety-six-sc-american-battlefield-trust-nsi',
        type: 'INSTITUTIONAL',
        title: "Ninety Six -- American Battlefield Trust",
        publisherOrHolder: 'American Battlefield Trust',
        url: 'https://www.battlefields.org/learn/revolutionary-war/battles/ninety-six',
        credibilityTier: 'TIER2',
        notes:
          'Battlefield guide providing tactical maps and overview narrative of the siege. The Trust has worked with NPS on preservation planning for the site.',
      },
      {
        id: 'src-ninety-six-sc-usc-library-backcountry',
        type: 'INSTITUTIONAL',
        title: "University of South Carolina: South Carolina Backcountry Revolution Collections",
        publisherOrHolder: 'University of South Carolina, South Caroliniana Library',
        url: 'https://library.sc.edu/p/Collections/SCL',
        credibilityTier: 'TIER2',
        notes:
          "The South Caroliniana Library holds significant manuscript collections on the backcountry war, including family papers from the Ninety Six district and transcripts of British provincial corps records.",
      },
      // TIER 3
      {
        id: 'src-ninety-six-sc-wikipedia-siege',
        type: 'TERTIARY',
        title: "Siege of Ninety-Six -- Wikipedia",
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Siege_of_Ninety_Six',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of the 1781 siege. The engineering detail and casualty figures should be cross-referenced with Greene\'s correspondence and the NPS archaeology reports.',
      },
      {
        id: 'src-ninety-six-sc-nps-visitor-guide',
        type: 'TERTIARY',
        title: "Ninety Six National Historic Site Visitor Guide",
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/nisi/planyourvisit/index.htm',
        credibilityTier: 'TIER3',
        notes:
          'Visitor orientation materials for the Ninety Six site. Useful for identifying the trail route through the siege earthworks, the Star Fort, and the reconstructed stockade.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Eutaw Springs -- Last major southern battle, September 8, 1781
  // ─────────────────────────────────────────────────────────────────────────
  'us-sc-eutaw-springs': {
    sources: [
      // TIER 1
      {
        id: 'src-eutaw-springs-sc-greene-battle-report',
        type: 'PRIMARY',
        title: "General Nathanael Greene to the President of Congress: Battle of Eutaw Springs, September 11, 1781",
        publisherOrHolder: 'National Archives and Records Administration',
        credibilityTier: 'TIER1',
        notes:
          "Greene\'s official after-action report on Eutaw Springs. The most authoritative American primary source on the battle\'s course -- the initial American success, the breakdown of discipline in the British camp, and the final tactical withdrawal.",
      },
      {
        id: 'src-eutaw-springs-sc-stewart-dispatch',
        type: 'PRIMARY',
        title: "Lieutenant Colonel Alexander Stewart to Lord Rawdon: Eutaw Springs Dispatch, September 1781",
        publisherOrHolder: 'Public Record Office (National Archives, United Kingdom)',
        credibilityTier: 'TIER1',
        notes:
          "British commander\'s report on Eutaw Springs. Stewart\'s claim of victory is technically defensible -- the British held the field -- but his enormous casualties (nearly 40%) made it effectively a British strategic defeat.",
      },
      {
        id: 'src-eutaw-springs-sc-nc-state-archives-pension',
        type: 'PRIMARY',
        title: "Pension Applications: Eutaw Springs Veterans, North and South Carolina",
        publisherOrHolder: 'National Archives and Records Administration',
        credibilityTier: 'TIER1',
        notes:
          "Pension depositions from American veterans of Eutaw Springs. The accounts of the breakthrough into the British camp, the looting of tents and supplies, and the subsequent repulse provide ground-level detail absent from officers' reports.",
      },
      {
        id: 'src-eutaw-springs-sc-sc-state-archives',
        type: 'PRIMARY',
        title: "South Carolina State Records: Eutaw Springs District, 1781-1782",
        publisherOrHolder: 'South Carolina Department of Archives and History',
        url: 'https://www.scdah.sc.gov/',
        credibilityTier: 'TIER1',
        notes:
          "State records documenting the area around Eutaw Springs during the military campaign, including civilian accounts and militia reports that supplement the officers' official dispatches.",
      },
      {
        id: 'src-eutaw-springs-sc-american-battlefield-trust-listing',
        type: 'INSTITUTIONAL',
        title: "Eutaw Springs Battlefield Preservation Documentation",
        publisherOrHolder: 'American Battlefield Trust',
        url: 'https://www.battlefields.org/learn/revolutionary-war/battles/eutaw-springs',
        credibilityTier: 'TIER1',
        notes:
          "The Trust has identified and partially acquired land at Eutaw Springs. Their preservation documentation includes battlefield boundary surveys and archaeological assessments useful for locating the action within the current landscape.",
      },
      // TIER 2
      {
        id: 'src-eutaw-springs-sc-buchanan-eutaw',
        type: 'SECONDARY',
        title: "The Road to Guilford Courthouse: Eutaw Springs Chapter",
        publisherOrHolder: 'John Wiley & Sons (John Buchanan)',
        publicationDate: new Date('1997-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "The Eutaw Springs chapter in Buchanan\'s southern campaign narrative provides the most accessible modern reconstruction, integrating Greene\'s dispatches, British returns, and American pension accounts.",
      },
      {
        id: 'src-eutaw-springs-sc-schs-eutaw-article',
        type: 'SECONDARY',
        title: "Battle of Eutaw Springs: A Reassessment of the American Claims",
        publisherOrHolder: 'South Carolina Historical Magazine',
        publicationDate: new Date('2001-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Scholarly reexamination of the traditional American claim to victory at Eutaw Springs. Analyzes British and American casualty figures and argues that while tactically inconclusive, the battle accelerated British withdrawal to Charleston.",
      },
      {
        id: 'src-eutaw-springs-sc-lee-memoirs-eutaw',
        type: 'SECONDARY',
        title: "Memoirs of the War in the Southern Department: Eutaw Springs Account",
        publisherOrHolder: 'Bradford and Inskeep (Henry Lee)',
        publicationDate: new Date('1812-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Lee\'s Legion participated in the battle. His memoirs provide regimental-level detail on the cavalry\'s role on both flanks, though his self-promotion requires calibration against Greene\'s reports.",
      },
      {
        id: 'src-eutaw-springs-sc-williams-regiment',
        type: 'SECONDARY',
        title: "Otho Holland Williams and the Continental Light Infantry at Eutaw Springs",
        publisherOrHolder: 'Maryland Historical Magazine',
        publicationDate: new Date('1944-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Focuses on Williams\'s light infantry, which formed the core of the American attacking force at Eutaw Springs. Uses Williams\'s surviving papers and regimental records held at the Maryland Historical Society.",
      },
      {
        id: 'src-eutaw-springs-sc-ramsay-history-sc-eutaw',
        type: 'SECONDARY',
        title: "The History of the Revolution of South-Carolina: Eutaw Springs",
        publisherOrHolder: 'David Longworth (David Ramsay)',
        publicationDate: new Date('1785-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Ramsay\'s near-contemporary account of Eutaw Springs written within years of the battle. Despite Patriot bias, preserves details and local accounts that later historians have not been able to recover from surviving documents.",
      },
      // TIER 3
      {
        id: 'src-eutaw-springs-sc-wikipedia-battle',
        type: 'TERTIARY',
        title: "Battle of Eutaw Springs -- Wikipedia",
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Battle_of_Eutaw_Springs',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry. The order of battle and tactical narrative are adequate for orientation, but casualty figures and the question of who won should be verified against Greene\'s dispatch and the SCHS reassessment article.',
      },
      {
        id: 'src-eutaw-springs-sc-scprt-marker',
        type: 'TERTIARY',
        title: "Eutaw Springs Battlefield State Marker and Interpretive Signs",
        publisherOrHolder: 'South Carolina Department of Parks, Recreation and Tourism',
        url: 'https://southcarolinaparks.com/',
        credibilityTier: 'TIER3',
        notes:
          'On-site interpretive signage at the Eutaw Springs monument. Useful for visitor orientation to the approximate battlefield location, though the site is heavily developed.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Beaufort -- Coastal contested zone, occupied early, Patriot base
  // ─────────────────────────────────────────────────────────────────────────
  'us-sc-beaufort': {
    sources: [
      // TIER 1
      {
        id: 'src-beaufort-sc-royal-governor-bull-papers',
        type: 'PRIMARY',
        title: "Lieutenant Governor William Bull II Papers: Beaufort District Correspondence, 1774-1776",
        publisherOrHolder: 'South Carolina Department of Archives and History',
        credibilityTier: 'TIER1',
        notes:
          "Papers of the last Royal Lieutenant Governor of South Carolina, a Beaufort District planter. Provides the Loyalist perspective on the coastal district\'s political transition and the Patriot takeover of the local committee structure.",
      },
      {
        id: 'src-beaufort-sc-schs-beaufort-papers',
        type: 'PRIMARY',
        title: "Beaufort District Committee of Safety Records, 1775-1776",
        publisherOrHolder: 'South Carolina Historical Society',
        credibilityTier: 'TIER1',
        notes:
          "Minutes and correspondence of the Beaufort District Committee of Safety documenting the Patriot seizure of local governance, militia organization, and the initial attempts to control the coastal approaches.",
      },
      {
        id: 'src-beaufort-sc-british-naval-logs-port-royal',
        type: 'PRIMARY',
        title: "Royal Navy Logs: Port Royal Station, 1779-1782",
        publisherOrHolder: 'Public Record Office (National Archives, United Kingdom)',
        credibilityTier: 'TIER1',
        notes:
          "British naval logs from the Port Royal (Beaufort Harbor) station documenting the coastal operations, supply runs, and occasional skirmishes in the Beaufort area during the British occupation of the South Carolina coast.",
      },
      {
        id: 'src-beaufort-sc-nps-gullah-geechee',
        type: 'INSTITUTIONAL',
        title: "Gullah Geechee Cultural Heritage Corridor: Revolutionary Era Resources",
        publisherOrHolder: 'National Park Service / Gullah Geechee Cultural Heritage Corridor Commission',
        url: 'https://www.nps.gov/guge/index.htm',
        credibilityTier: 'TIER1',
        notes:
          "NPS resources on the Gullah Geechee culture of the Sea Islands, including the Revolutionary-era context of enslavement and the British promises of freedom that drew thousands of enslaved people to British lines through Beaufort and the Sea Islands.",
      },
      {
        id: 'src-beaufort-sc-pension-records-militia',
        type: 'PRIMARY',
        title: "Pension Applications: Beaufort District Militia, 1820s-1840s",
        publisherOrHolder: 'National Archives and Records Administration',
        credibilityTier: 'TIER1',
        notes:
          "Pension depositions from Beaufort District militia veterans describing the coastal skirmishes, British raids on plantations, and the partisan conflict in the Sea Islands during the British occupation of Charleston.",
      },
      // TIER 2
      {
        id: 'src-beaufort-sc-morgan-swamp-war',
        type: 'SECONDARY',
        title: "The Swamp War: Guerrilla Operations in the South Carolina Lowcountry, 1780-1782",
        publisherOrHolder: 'South Carolina Historical Magazine',
        publicationDate: new Date('1991-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Scholarly study of the partisan war in the coastal zone surrounding Beaufort and the Sea Islands. Examines how geography shaped both British and American operations in the contested coastal districts.",
      },
      {
        id: 'src-beaufort-sc-rowland-beaufort-history',
        type: 'SECONDARY',
        title: "The History of Beaufort County, South Carolina, Vol. 1: 1514-1861",
        publisherOrHolder: 'University of South Carolina Press (Lawrence S. Rowland et al.)',
        publicationDate: new Date('1996-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Standard county history covering Beaufort\'s colonial and Revolutionary eras. Provides the most detailed narrative of the local political and military events during the Revolution based on surviving county and state records.",
      },
      {
        id: 'src-beaufort-sc-heyward-papers',
        type: 'SECONDARY',
        title: "Thomas Heyward Jr. and the Beaufort Patriot Community",
        publisherOrHolder: 'South Carolina Historical Society',
        publicationDate: new Date('1954-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Study of Declaration of Independence signer Thomas Heyward Jr., whose Beaufort District plantation was seized and who was imprisoned by the British. Documents the cost the Revolution exacted from the lowcountry Patriot elite.",
      },
      {
        id: 'src-beaufort-sc-beaufort-museum',
        type: 'INSTITUTIONAL',
        title: "Beaufort History Museum: Revolutionary War Collections",
        publisherOrHolder: 'Beaufort History Museum',
        url: 'https://www.beauforthistorymuseum.com/',
        credibilityTier: 'TIER2',
        notes:
          'Local history museum with collections on Beaufort County from the colonial period through the Civil War. Revolutionary-era material includes militia artifacts and documentary reproductions.',
      },
      {
        id: 'src-beaufort-sc-silver-bluff-cherokee-war',
        type: 'SECONDARY',
        title: "The Cherokee War and Its Aftermath in the South Carolina Backcountry",
        publisherOrHolder: 'University of South Carolina Press',
        publicationDate: new Date('2003-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Provides context for the complex social geography of the South Carolina interior that shaped Loyalist and Patriot alignments in and around the coastal region during the Revolution.",
      },
      // TIER 3
      {
        id: 'src-beaufort-sc-wikipedia',
        type: 'TERTIARY',
        title: 'Beaufort, South Carolina -- Wikipedia',
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Beaufort,_South_Carolina',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry covering Beaufort\'s colonial and Revolutionary history. Identifies surviving pre-war structures and provides a basic chronology of the town\'s role in the coastal conflict.',
      },
      {
        id: 'src-beaufort-sc-visit-beaufort',
        type: 'TERTIARY',
        title: 'Discover Beaufort: History and Heritage',
        publisherOrHolder: 'Discover Beaufort / Beaufort County',
        url: 'https://www.beaufortsc.org/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism site with overview of Beaufort\'s colonial and Revolutionary heritage, identifying antebellum-era structures and sites with 18th-century origins. Useful for visitor orientation.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Hobkirk\'s Hill (Camden) -- Greene\'s tactical defeat, April 25, 1781
  // ─────────────────────────────────────────────────────────────────────────
  'us-sc-hobkirks-hill': {
    sources: [
      // TIER 1
      {
        id: 'src-hobkirks-hill-sc-greene-report-april1781',
        type: 'PRIMARY',
        title: "General Nathanael Greene to the President of Congress: Battle of Hobkirk\'s Hill, April 27, 1781",
        publisherOrHolder: 'National Archives and Records Administration',
        credibilityTier: 'TIER1',
        notes:
          "Greene\'s official dispatch on the battle. Characteristically he downplays the defeat while explaining the strategic rationale -- he could afford attrition losses the British could not. Essential primary source.",
      },
      {
        id: 'src-hobkirks-hill-sc-rawdon-dispatch-april1781',
        type: 'PRIMARY',
        title: "Lord Rawdon to Sir Henry Clinton: Dispatch on Hobkirk\'s Hill, April 1781",
        publisherOrHolder: 'Public Record Office (National Archives, United Kingdom)',
        credibilityTier: 'TIER1',
        notes:
          "Rawdon\'s report on his surprise sortie from Camden that drove Greene from Hobkirk\'s Hill. The British account of a rare tactical success that nonetheless accelerated British strategic retreat from Camden.",
      },
      {
        id: 'src-hobkirks-hill-sc-greene-papers-vol8',
        type: 'PRIMARY',
        title: "The Papers of General Nathanael Greene, Vol. VIII: Hobkirk\'s Hill and Camden",
        publisherOrHolder: 'University of North Carolina Press (Dennis M. Conrad, ed.)',
        publicationDate: new Date('1995-01-01'),
        credibilityTier: 'TIER1',
        notes:
          "The authoritative critical edition of Greene\'s correspondence covering the Hobkirk\'s Hill period. Includes letters from subordinate commanders, intelligence reports, and Greene\'s post-battle assessments.",
      },
      {
        id: 'src-hobkirks-hill-sc-pension-depositions',
        type: 'PRIMARY',
        title: "Pension Applications: Hobkirk\'s Hill Veterans, 1820s",
        publisherOrHolder: 'National Archives and Records Administration',
        credibilityTier: 'TIER1',
        notes:
          "Depositions from veterans present at Hobkirk\'s Hill, including accounts of the confused American withdrawal and the critical failure of the 1st Maryland Regiment to execute its maneuver under fire.",
      },
      {
        id: 'src-hobkirks-hill-sc-nps-historic-camden-hobkirks',
        type: 'INSTITUTIONAL',
        title: "Historic Camden: Hobkirk\'s Hill Interpretive Resources",
        publisherOrHolder: 'Historic Camden Foundation',
        url: 'https://www.historiccamden.org/',
        credibilityTier: 'TIER1',
        notes:
          "The Historic Camden Foundation interprets both the August 1780 battle and the April 1781 Hobkirk\'s Hill engagement. Site archaeology has helped identify the American position north of Camden town.",
      },
      // TIER 2
      {
        id: 'src-hobkirks-hill-sc-thayer-greene',
        type: 'SECONDARY',
        title: "Nathanael Greene: Strategist of the American Revolution",
        publisherOrHolder: 'Twayne Publishers (Theodore Thayer)',
        publicationDate: new Date('1960-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Standard Greene biography covering Hobkirk\'s Hill as part of his southern strategy. The analysis of Greene\'s post-battle thinking -- that he could lose every battle and still win the campaign -- is essential context.",
      },
      {
        id: 'src-hobkirks-hill-sc-buchanan-road-hobkirks',
        type: 'SECONDARY',
        title: "The Road to Guilford Courthouse: Hobkirk\'s Hill Chapter",
        publisherOrHolder: 'John Wiley & Sons (John Buchanan)',
        publicationDate: new Date('1997-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Buchanan\'s campaign narrative provides the best modern synthesis of Hobkirk\'s Hill, integrating American and British sources. Particularly strong on Rawdon\'s tactical reasoning in attacking before American reinforcements arrived.",
      },
      {
        id: 'src-hobkirks-hill-sc-lee-memoirs-hobkirks',
        type: 'SECONDARY',
        title: "Memoirs of the War in the Southern Department: Hobkirk\'s Hill",
        publisherOrHolder: 'Bradford and Inskeep (Henry Lee)',
        publicationDate: new Date('1812-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Lee\'s account of his Legion\'s role covering the American withdrawal. Notably candid about the battlefield confusion, particularly the breakdown of the 1st Maryland, which Lee attributed to poor unit placement.",
      },
      {
        id: 'src-hobkirks-hill-sc-south-carolina-hist-mag-article',
        type: 'SECONDARY',
        title: "Hobkirk\'s Hill: Why Greene Was Surprised",
        publisherOrHolder: 'South Carolina Historical Magazine',
        publicationDate: new Date('1988-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Scholarly article examining the intelligence failure that allowed Rawdon to sortie and catch Greene\'s army at drill. Uses British intelligence dispatches and American patrol reports to reconstruct the reconnaissance failure.",
      },
      {
        id: 'src-hobkirks-hill-sc-american-battlefield-trust-hh',
        type: 'INSTITUTIONAL',
        title: "Hobkirk\'s Hill -- American Battlefield Trust",
        publisherOrHolder: 'American Battlefield Trust',
        url: 'https://www.battlefields.org/learn/revolutionary-war/battles/hobkirks-hill',
        credibilityTier: 'TIER2',
        notes:
          'Battlefield summary and troop movement maps. The Trust has worked on identification and partial preservation of the Hobkirk\'s Hill battlefield north of modern Camden.',
      },
      // TIER 3
      {
        id: 'src-hobkirks-hill-sc-wikipedia-battle',
        type: 'TERTIARY',
        title: "Battle of Hobkirk\'s Hill -- Wikipedia",
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Battle_of_Hobkirk%27s_Hill',
        credibilityTier: 'TIER3',
        notes:
          "General reference entry covering the battle\'s course and aftermath. The tactical narrative is accurate in outline; specific details should be verified against Greene\'s dispatch and the Lee memoirs.",
      },
      {
        id: 'src-hobkirks-hill-sc-historic-camden-visit',
        type: 'TERTIARY',
        title: "Historic Camden Visitor Guide",
        publisherOrHolder: 'Historic Camden Foundation',
        url: 'https://www.historiccamden.org/plan-your-visit',
        credibilityTier: 'TIER3',
        notes:
          'Visitor guide to the Historic Camden site including information on how to locate the Hobkirk\'s Hill battlefield north of the reconstructed British post. Useful for site orientation.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Fort Moultrie -- Palmetto log fort repulsed British, June 28, 1776
  // ─────────────────────────────────────────────────────────────────────────
  'us-sc-fort-moultrie': {
    sources: [
      // TIER 1
      {
        id: 'src-fort-moultrie-sc-moultrie-battle-report',
        type: 'PRIMARY',
        title: "Colonel William Moultrie to President John Rutledge: Battle Report, June 29, 1776",
        publisherOrHolder: 'South Carolina Department of Archives and History',
        credibilityTier: 'TIER1',
        notes:
          "Moultrie\'s official report on the June 28, 1776, battle written the day after. Describes the fort\'s defense, the durability of the palmetto log walls, the sponging of cannon, and Sergeant Jasper\'s recovery of the fallen flag.",
      },
      {
        id: 'src-fort-moultrie-sc-clinton-1776-dispatch',
        type: 'PRIMARY',
        title: "Sir Henry Clinton and Admiral Peter Parker: Joint Dispatch on the Attack on Fort Sullivan, June 1776",
        publisherOrHolder: 'Public Record Office (National Archives, United Kingdom)',
        credibilityTier: 'TIER1',
        notes:
          "British commanders' dispatch on the failed attack. Reveals the disagreements between Clinton (army) and Parker (navy) on the operation\'s planning and execution, and the unexpected resilience of the palmetto log fortification.",
      },
      {
        id: 'src-fort-moultrie-sc-moultrie-memoirs-1776',
        type: 'PRIMARY',
        title: "Memoirs of the American Revolution: Fort Moultrie Chapter",
        publisherOrHolder: 'David Longworth (William Moultrie)',
        publicationDate: new Date('1802-01-01'),
        credibilityTier: 'TIER1',
        notes:
          "Moultrie\'s extended first-hand account of the June 1776 battle. The most detailed American primary narrative. Covers the entire day\'s fighting, including the failed British landing attempt on the nearby shoals.",
      },
      {
        id: 'src-fort-moultrie-sc-nps-fort-moultrie',
        type: 'INSTITUTIONAL',
        title: "Fort Moultrie: Official NPS History and Interpretive Resources",
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/fosu/learn/historyculture/fort-moultrie.htm',
        credibilityTier: 'TIER1',
        notes:
          "NPS interpretive resources for Fort Moultrie on Sullivan\'s Island. Covers all periods of the fort\'s history with special attention to the 1776 battle. Includes archaeology reports on the original palmetto log fortification.",
      },
      {
        id: 'src-fort-moultrie-sc-sc-state-archives-1776',
        type: 'PRIMARY',
        title: "South Carolina Council of Safety Minutes: Fort Sullivan, June-July 1776",
        publisherOrHolder: 'South Carolina Department of Archives and History',
        url: 'https://www.scdah.sc.gov/',
        credibilityTier: 'TIER1',
        notes:
          "Council of Safety records from the weeks surrounding the battle, including the debate over whether to abandon the half-finished fort (Lee\'s recommendation) versus defend it (Moultrie\'s position). Essential for understanding the command politics.",
      },
      // TIER 2
      {
        id: 'src-fort-moultrie-sc-lipscomb-palmetto-fort',
        type: 'SECONDARY',
        title: "South Carolina Revolutionary War Battles: Fort Moultrie",
        publisherOrHolder: 'South Carolina Department of Archives and History (Terry W. Lipscomb)',
        publicationDate: new Date('1991-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "State historian\'s account of the 1776 battle, based on South Carolina archives. The authoritative modern summary integrating Moultrie\'s report, the Council of Safety minutes, and British dispatches.",
      },
      {
        id: 'src-fort-moultrie-sc-buchanan-1776-charleston',
        type: 'SECONDARY',
        title: "The Road to Guilford Courthouse: The 1776 Defense of Charleston",
        publisherOrHolder: 'John Wiley & Sons (John Buchanan)',
        publicationDate: new Date('1997-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Campaign narrative placing the Fort Moultrie battle in the context of the British southern strategy of 1776. Explains why a British victory here would have ended South Carolina\'s Patriot government before it was established.",
      },
      {
        id: 'src-fort-moultrie-sc-schs-jasper-article',
        type: 'SECONDARY',
        title: "Sergeant William Jasper and the Flag of Fort Moultrie",
        publisherOrHolder: 'South Carolina Historical Magazine',
        publicationDate: new Date('1976-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Scholarly examination of the Jasper flag legend, separating the documented fact (Jasper retrieved and replanted the fallen flag) from the subsequent mythology. Uses Moultrie\'s report and contemporary newspaper accounts.",
      },
      {
        id: 'src-fort-moultrie-sc-american-battlefield-trust-fm',
        type: 'INSTITUTIONAL',
        title: "Battle of Sullivan\'s Island / Fort Moultrie -- American Battlefield Trust",
        publisherOrHolder: 'American Battlefield Trust',
        url: 'https://www.battlefields.org/learn/revolutionary-war/battles/sullivan%27s-island',
        credibilityTier: 'TIER2',
        notes:
          "Battlefield summary with tactical maps of the June 28, 1776, engagement. Includes the British naval approach, the failed landing at the northeastern end of Sullivan\'s Island, and the naval bombardment timeline.",
      },
      {
        id: 'src-fort-moultrie-sc-carolina-historical-assoc',
        type: 'INSTITUTIONAL',
        title: "South Carolina Historical Society: Fort Sullivan / Fort Moultrie Collections",
        publisherOrHolder: 'South Carolina Historical Society',
        url: 'https://www.southcarolinahistoricalsociety.org/',
        credibilityTier: 'TIER2',
        notes:
          "SCHS holds the most significant collection of Moultrie family papers and Fort Moultrie-related materials. The Moultrie Papers include correspondence and documents not published in his memoirs.",
      },
      // TIER 3
      {
        id: 'src-fort-moultrie-sc-wikipedia-battle',
        type: 'TERTIARY',
        title: "Battle of Sullivan\'s Island -- Wikipedia",
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Battle_of_Sullivan%27s_Island',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry on the June 28, 1776, engagement. The narrative is broadly accurate; the detail on the ships damaged and the sponging technique for the damp palmetto walls should be verified against Moultrie\'s report.',
      },
      {
        id: 'src-fort-moultrie-sc-nps-visitor-guide',
        type: 'TERTIARY',
        title: "Fort Moultrie Visitor Guide",
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/fosu/planyourvisit/index.htm',
        credibilityTier: 'TIER3',
        notes:
          'Visitor orientation materials for the Fort Moultrie site on Sullivan\'s Island. Includes a self-guided tour of the successive forts on the site, from the 1776 palmetto log fort to the Civil War-era masonry fortification.',
      },
    ],
  },
};
