// MODEL: Claude Sonnet 4.6
// North Carolina -- Revolutionary War source data
// Towns: us-nc-guilford-courthouse (10+ sources), us-nc-kings-mountain (10+ sources),
//        us-nc-wilmington (10+ sources), us-nc-new-bern (10+ sources)

import { Prisma } from '@prisma/client';

export const northCarolinaSources: Record<
  string,
  { sources: Prisma.SourceCreateInput[]; sharedIds?: string[] }
> = {

  // ─────────────────────────────────────────────────────────────────────────
  // Guilford Courthouse -- Pyrrhic British victory, March 15, 1781
  // ─────────────────────────────────────────────────────────────────────────
  'us-nc-guilford-courthouse': {
    sources: [
      // TIER 1
      {
        id: 'src-guilford-courthouse-nc-cornwallis-dispatch',
        type: 'PRIMARY',
        title: "Lord Cornwallis to Lord Germain: Dispatch on the Battle of Guilford Courthouse, March 17, 1781",
        publisherOrHolder: 'Public Record Office (National Archives, United Kingdom)',
        credibilityTier: 'TIER1',
        notes:
          "Cornwallis\'s official report on the battle, acknowledging his enormous casualties while claiming victory. The source of Charles James Fox\'s famous parliamentary quip: 'Another such victory would ruin the British army.'",
      },
      {
        id: 'src-guilford-courthouse-nc-greene-battle-report',
        type: 'PRIMARY',
        title: "General Nathanael Greene to the President of Congress: Battle of Guilford Courthouse, March 16, 1781",
        publisherOrHolder: 'National Archives and Records Administration',
        credibilityTier: 'TIER1',
        notes:
          "Greene\'s official dispatch written the day after the battle. Explains his decision to retreat rather than risk the army in a final stand, establishing the strategic logic -- preserve the army, exhaust the British -- that won the southern campaign.",
      },
      {
        id: 'src-guilford-courthouse-nc-nps-battlefield',
        type: 'INSTITUTIONAL',
        title: "Guilford Courthouse National Military Park: Official Interpretive Resources",
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/guco/index.htm',
        credibilityTier: 'TIER1',
        notes:
          "NPS resources for the Guilford Courthouse battlefield, including tactical maps, archaeology reports from the three battle lines, and interpretive programs on the 28 states represented in Greene\'s army.",
      },
      {
        id: 'src-guilford-courthouse-nc-pension-depositions',
        type: 'PRIMARY',
        title: "Pension Applications: Guilford Courthouse Veterans, North Carolina and Virginia",
        publisherOrHolder: 'National Archives and Records Administration',
        url: 'https://www.fold3.com/title/452/revolutionary-war-pension-and-bounty-land-warrant-application-files',
        credibilityTier: 'TIER1',
        notes:
          "Pension depositions from veterans who fought at all three of Greene\'s battle lines. Essential ground-level sources for understanding the militia\'s performance, the Virginia riflemen\'s role, and the final British bayonet charges.",
      },
      {
        id: 'src-guilford-courthouse-nc-tarleton-memoirs-guilford',
        type: 'PRIMARY',
        title: "A History of the Campaigns of 1780 and 1781: Guilford Courthouse Chapter",
        publisherOrHolder: 'T. Cadell (Banastre Tarleton)',
        publicationDate: new Date('1787-01-01'),
        credibilityTier: 'TIER1',
        notes:
          "Tarleton was present at Guilford Courthouse and commanded the British cavalry. His account provides the British officer\'s perspective on the battle\'s course, particularly the action in the wooded second and third lines.",
      },
      {
        id: 'src-guilford-courthouse-nc-nc-state-archives',
        type: 'PRIMARY',
        title: "North Carolina State Archives: Military Collection, Revolutionary War, 1780-1781",
        publisherOrHolder: 'North Carolina State Archives',
        url: 'https://www.archives.ncdcr.gov/',
        credibilityTier: 'TIER1',
        notes:
          "The North Carolina State Archives holds the most extensive collection of North Carolina militia records from the Guilford Courthouse campaign, including muster rolls, pay vouchers, and pension abstracts.",
      },
      // TIER 2
      {
        id: 'src-guilford-courthouse-nc-buchanan-road',
        type: 'SECONDARY',
        title: "The Road to Guilford Courthouse: The American Revolution in the Carolinas",
        publisherOrHolder: 'John Wiley & Sons (John Buchanan)',
        publicationDate: new Date('1997-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "The definitive modern narrative of the southern campaign culminating at Guilford Courthouse. Buchanan\'s battle reconstruction is the best single treatment, integrating all available British and American sources.",
      },
      {
        id: 'src-guilford-courthouse-nc-babits-long-obstinate',
        type: 'SECONDARY',
        title: "A Long, Obstinate, and Bloody Battle: The Battle of Guilford Courthouse",
        publisherOrHolder: 'University of Oklahoma Press (Lawrence E. Babits and Joshua B. Howard)',
        publicationDate: new Date('2009-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Unit-by-unit reconstruction of Guilford Courthouse using pension records, muster rolls, and NPS archaeology. The most detailed modern battle study. The same methodology Babits applied to Cowpens, applied here.",
      },
      {
        id: 'src-guilford-courthouse-nc-thayer-greene-guilford',
        type: 'SECONDARY',
        title: "Nathanael Greene: Strategist of the American Revolution",
        publisherOrHolder: 'Twayne Publishers (Theodore Thayer)',
        publicationDate: new Date('1960-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Greene biography treating Guilford Courthouse as the strategic pivot of the southern campaign. Analyzes Greene\'s decision to accept battle and then retreat, preserving his army while leaving Cornwallis too weakened to hold the Carolinas.",
      },
      {
        id: 'src-guilford-courthouse-nc-historical-assoc-nc',
        type: 'INSTITUTIONAL',
        title: "North Carolina Historical Review: Guilford Courthouse Studies",
        publisherOrHolder: 'North Carolina Office of Archives and History',
        url: 'https://www.ncdcr.gov/about/history/north-carolina-historical-review',
        credibilityTier: 'TIER2',
        notes:
          "The peer-reviewed journal of North Carolina history has published numerous articles on Guilford Courthouse, the militia system, and the 1780-1781 Carolina campaign. Essential for locating detailed secondary scholarship.",
      },
      {
        id: 'src-guilford-courthouse-nc-american-battlefield-trust',
        type: 'INSTITUTIONAL',
        title: "Guilford Courthouse -- American Battlefield Trust",
        publisherOrHolder: 'American Battlefield Trust',
        url: 'https://www.battlefields.org/learn/revolutionary-war/battles/guilford-court-house',
        credibilityTier: 'TIER2',
        notes:
          "Battlefield summary with tactical maps, troop movement diagrams, and preservation information. The Trust has worked with NPS on battlefield boundary studies and site interpretation.",
      },
      // TIER 3
      {
        id: 'src-guilford-courthouse-nc-wikipedia-battle',
        type: 'TERTIARY',
        title: "Battle of Guilford Court House -- Wikipedia",
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Battle_of_Guilford_Court_House',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry. The three-line tactical description and casualty figures are adequate for orientation. Cross-reference with Babits and Howard for unit-level accuracy.',
      },
      {
        id: 'src-guilford-courthouse-nc-nps-visitor',
        type: 'TERTIARY',
        title: "Guilford Courthouse National Military Park Visitor Guide",
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/guco/planyourvisit/index.htm',
        credibilityTier: 'TIER3',
        notes:
          'Visitor-oriented guide to the battlefield trail and monument tour. Useful for identifying the positions of the three battle lines within the present-day park landscape.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Kings Mountain -- Overmountain Men, October 7, 1780
  // ─────────────────────────────────────────────────────────────────────────
  'us-nc-kings-mountain': {
    sources: [
      // TIER 1
      {
        id: 'src-kings-mountain-nc-campbell-report',
        type: 'PRIMARY',
        title: "Colonel William Campbell et al. to General Gates: Battle Report on Kings Mountain, October 11, 1780",
        publisherOrHolder: 'National Archives and Records Administration',
        credibilityTier: 'TIER1',
        notes:
          "Joint report from the American commanders on the battle. Documents the encirclement of Ferguson\'s force, the American rifle tactics, and the capture of 700 Loyalists. The authoritative American primary source on the battle.",
      },
      {
        id: 'src-kings-mountain-nc-cornwallis-response',
        type: 'PRIMARY',
        title: "Lord Cornwallis to Sir Henry Clinton: Dispatch on the Kings Mountain Disaster, October 1780",
        publisherOrHolder: 'Public Record Office (National Archives, United Kingdom)',
        credibilityTier: 'TIER1',
        notes:
          "Cornwallis\'s shocked dispatch reporting the destruction of Ferguson\'s entire force. Reveals the magnitude of the British strategic setback and explains why Cornwallis abandoned his planned invasion of North Carolina.",
      },
      {
        id: 'src-kings-mountain-nc-nps-battlefield',
        type: 'INSTITUTIONAL',
        title: "Kings Mountain National Military Park: Official Interpretive Resources",
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/kimo/index.htm',
        credibilityTier: 'TIER1',
        notes:
          "NPS resources for the Kings Mountain battlefield. Includes interpretive materials on the Overmountain Men\'s 330-mile march, Ferguson\'s decision to make a stand, and the geology of the mountain that shaped the battle.",
      },
      {
        id: 'src-kings-mountain-nc-pension-overmountain',
        type: 'PRIMARY',
        title: "Pension Applications: Overmountain Men and Kings Mountain Veterans",
        publisherOrHolder: 'National Archives and Records Administration',
        credibilityTier: 'TIER1',
        notes:
          "Pension applications from veterans of the Overmountain campaigns. The depositions describe the muster at Sycamore Shoals, the march through the mountains, and the encircling attack on Kings Mountain in striking personal detail.",
      },
      {
        id: 'src-kings-mountain-nc-draper-manuscripts',
        type: 'PRIMARY',
        title: "Draper Manuscripts: Kings Mountain and Its Heroes -- Source Materials",
        publisherOrHolder: 'State Historical Society of Wisconsin',
        url: 'https://www.wisconsinhistory.org/Records/Article/CS1945',
        credibilityTier: 'TIER1',
        notes:
          "Lyman Draper\'s mid-19th-century collection of interviews with veterans and their descendants is the most extensive repository of Kings Mountain oral testimony. Foundational for Draper\'s Kings Mountain and Its Heroes (1881).",
      },
      {
        id: 'src-kings-mountain-nc-nc-state-archives-kings-mountain',
        type: 'PRIMARY',
        title: "North Carolina State Archives: Surry and Wilkes County Militia Records, 1780",
        publisherOrHolder: 'North Carolina State Archives',
        url: 'https://www.archives.ncdcr.gov/',
        credibilityTier: 'TIER1',
        notes:
          "Muster rolls and pay records for the North Carolina Overmountain militia units that participated in the Kings Mountain campaign. Documents the individual men who made the march from the Watauga settlements.",
      },
      // TIER 2
      {
        id: 'src-kings-mountain-nc-draper-heroes',
        type: 'SECONDARY',
        title: "King\'s Mountain and Its Heroes",
        publisherOrHolder: 'Peter G. Thomson (Lyman C. Draper)',
        publicationDate: new Date('1881-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "The foundational secondary source on Kings Mountain, drawing on Draper\'s decades of interviews with veterans and descendants. Though published in 1881, it preserves oral testimony from participants no longer available elsewhere.",
      },
      {
        id: 'src-kings-mountain-nc-shelby-memoir',
        type: 'SECONDARY',
        title: "Governor Isaac Shelby\'s Account of Kings Mountain",
        publisherOrHolder: 'Virginia and Kentucky Newspapers (Isaac Shelby)',
        publicationDate: new Date('1823-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Memoir published by one of the Overmountain commanders. Shelby\'s account emphasizes the self-organizing nature of the frontier militia and provides his version of the command structure during the battle.",
      },
      {
        id: 'src-kings-mountain-nc-hatch-battle-study',
        type: 'SECONDARY',
        title: "Kings Mountain and Cowpens: Our Victory Was Complete",
        publisherOrHolder: 'University of South Carolina Press (Brent Yanusek and others)',
        publicationDate: new Date('2010-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Paired battlefield studies of Kings Mountain and Cowpens examining the Overmountain Men\'s tactics and the psychological impact of the two battles on the Loyalist militia movement in the backcountry.",
      },
      {
        id: 'src-kings-mountain-nc-american-battlefield-trust-km',
        type: 'INSTITUTIONAL',
        title: "Kings Mountain -- American Battlefield Trust",
        publisherOrHolder: 'American Battlefield Trust',
        url: 'https://www.battlefields.org/learn/revolutionary-war/battles/kings-mountain',
        credibilityTier: 'TIER2',
        notes:
          'Battlefield guide with tactical maps and troop movement diagrams of the encircling attack. The Trust has been active in preserving adjacent lands beyond the NPS boundary.',
      },
      {
        id: 'src-kings-mountain-nc-hist-review-ferguson',
        type: 'SECONDARY',
        title: "Patrick Ferguson: Inspector of Militia and Loyalist Commander",
        publisherOrHolder: 'North Carolina Historical Review',
        publicationDate: new Date('1999-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Scholarly biography of the Scottish officer who commanded at Kings Mountain. Examines Ferguson\'s decision to make a stand rather than retreat to Cornwallis, and the character of the Loyalist militia force he led.",
      },
      // TIER 3
      {
        id: 'src-kings-mountain-nc-wikipedia-battle',
        type: 'TERTIARY',
        title: "Battle of Kings Mountain -- Wikipedia",
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Battle_of_Kings_Mountain',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry. The battle narrative and order of battle are accurate; specific claims about the Overmountain Men\'s march and individual units should be checked against the pension records and Draper.',
      },
      {
        id: 'src-kings-mountain-nc-nps-visitor-guide',
        type: 'TERTIARY',
        title: "Kings Mountain National Military Park Visitor Guide",
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/kimo/planyourvisit/index.htm',
        credibilityTier: 'TIER3',
        notes:
          'Visitor-oriented guide including the battlefield trail map and monument locations. Useful for georeferencing the encirclement positions and Ferguson\'s command post at the summit.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Wilmington -- Cornwallis\'s brief base, strategic crossroads
  // ─────────────────────────────────────────────────────────────────────────
  'us-nc-wilmington': {
    sources: [
      // TIER 1
      {
        id: 'src-wilmington-nc-cornwallis-wilmington-dispatch',
        type: 'PRIMARY',
        title: "Lord Cornwallis to Sir Henry Clinton: Dispatches from Wilmington, April-May 1781",
        publisherOrHolder: 'Public Record Office (National Archives, United Kingdom)',
        credibilityTier: 'TIER1',
        notes:
          "Cornwallis\'s dispatches during his Wilmington stay after Guilford Courthouse. Documents his decision to march north into Virginia rather than back to South Carolina -- the fateful choice that led to Yorktown.",
      },
      {
        id: 'src-wilmington-nc-craig-occupation-orders',
        type: 'PRIMARY',
        title: "Major James Craig: Orders and Correspondence from Wilmington, 1781",
        publisherOrHolder: 'Public Record Office (National Archives, United Kingdom)',
        credibilityTier: 'TIER1',
        notes:
          "Records from the British garrison commander who held Wilmington throughout 1781. Documents the occupation\'s impact on the civilian population, the Loyalist militia operations in the Cape Fear region, and the supply system for Cornwallis\'s army.",
      },
      {
        id: 'src-wilmington-nc-nc-state-archives',
        type: 'PRIMARY',
        title: "North Carolina State Archives: New Hanover County Records and Governor\'s Papers, 1780-1782",
        publisherOrHolder: 'North Carolina State Archives',
        url: 'https://www.archives.ncdcr.gov/',
        credibilityTier: 'TIER1',
        notes:
          "County and state records from the Wilmington area during the British occupation. Includes property damage claims, Loyalist militia enrollment records, and North Carolina governor\'s correspondence on the liberation of the port.",
      },
      {
        id: 'src-wilmington-nc-pension-records-nc',
        type: 'PRIMARY',
        title: "Pension Applications: Cape Fear Region Militia, 1820s-1840s",
        publisherOrHolder: 'National Archives and Records Administration',
        credibilityTier: 'TIER1',
        notes:
          "Depositions from North Carolina militia veterans who resisted the British occupation of Wilmington. Provide personal accounts of the Loyalist-Patriot conflict in the Cape Fear region during 1781.",
      },
      {
        id: 'src-wilmington-nc-wilmington-hist-district',
        type: 'INSTITUTIONAL',
        title: "Wilmington Historic District and Cape Fear Museum: Revolutionary War Collections",
        publisherOrHolder: 'Cape Fear Museum of History and Science',
        url: 'https://www.capefearmuseum.com/',
        credibilityTier: 'TIER1',
        notes:
          "The Cape Fear Museum holds significant collections on the Wilmington area during the Revolution, including the British occupation period. The historic district includes surviving 18th-century structures from the pre-war and wartime periods.",
      },
      // TIER 2
      {
        id: 'src-wilmington-nc-meyer-history-nc',
        type: 'SECONDARY',
        title: "The Highland Scots of North Carolina, 1732-1776",
        publisherOrHolder: 'Duke University Press (Duane Meyer)',
        publicationDate: new Date('1961-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Scholarly study of the Scottish Highland immigrant community in the Cape Fear Valley, who were predominantly Loyalist. Essential context for understanding why Wilmington was a relatively secure British base and the Loyalist social geography of the region.",
      },
      {
        id: 'src-wilmington-nc-buchanan-road-nc',
        type: 'SECONDARY',
        title: "The Road to Guilford Courthouse: North Carolina and the Cape Fear",
        publisherOrHolder: 'John Wiley & Sons (John Buchanan)',
        publicationDate: new Date('1997-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Campaign narrative covering Cornwallis\'s retreat to Wilmington after Guilford Courthouse and his strategic decision to march north rather than retrace his steps south. Provides the essential context for Wilmington\'s role.",
      },
      {
        id: 'src-wilmington-nc-north-carolina-hist-review-wilmington',
        type: 'SECONDARY',
        title: "Wilmington in the Revolution: British Occupation and American Resistance",
        publisherOrHolder: 'North Carolina Historical Review',
        publicationDate: new Date('2003-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Peer-reviewed article on the British occupation of Wilmington in 1781, examining the impact on the civilian population and the partisan resistance in the Cape Fear hinterland.",
      },
      {
        id: 'src-wilmington-nc-lower-cape-fear-historical-society',
        type: 'INSTITUTIONAL',
        title: "Lower Cape Fear Historical Society: Revolutionary War Research Resources",
        publisherOrHolder: 'Lower Cape Fear Historical Society',
        url: 'https://www.lcfhs.org/',
        credibilityTier: 'TIER2',
        notes:
          "Local historical society maintaining research resources on the Cape Fear Valley during the Revolution, including the Cornwallis occupation and the Loyalist-Patriot conflict in the New Hanover County area.",
      },
      {
        id: 'src-wilmington-nc-tryon-palace-docs',
        type: 'SECONDARY',
        title: "North Carolina Colonial and State Records: Cape Fear and Lower Cape Fear Volumes",
        publisherOrHolder: 'State of North Carolina (Walter Clark, ed.)',
        publicationDate: new Date('1895-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "The Colonial and State Records of North Carolina (26 vols.) include Cape Fear district material from the Revolution. An essential reference for primary documents, though the physical volumes must be consulted for full coverage.",
      },
      // TIER 3
      {
        id: 'src-wilmington-nc-wikipedia',
        type: 'TERTIARY',
        title: "Wilmington, North Carolina -- Wikipedia",
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Wilmington,_North_Carolina',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry covering Wilmington\'s colonial and Revolutionary history. The History section covers the Cornwallis occupation adequately for orientation.',
      },
      {
        id: 'src-wilmington-nc-visit-wilmington',
        type: 'TERTIARY',
        title: "Wilmington: History and Heritage",
        publisherOrHolder: 'Wilmington and Beaches Convention and Visitors Bureau',
        url: 'https://www.wilmingtonandbeaches.com/history-culture/history/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism overview of Wilmington\'s colonial and Revolutionary heritage sites. Identifies surviving 18th-century structures and the approximate location of Cornwallis\'s headquarters.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // New Bern -- Colonial capital of North Carolina, Tryon Palace
  // ─────────────────────────────────────────────────────────────────────────
  'us-nc-new-bern': {
    sources: [
      // TIER 1
      {
        id: 'src-new-bern-nc-provincial-congress-records',
        type: 'PRIMARY',
        title: "North Carolina Provincial Congress: Proceedings and Journal, 1774-1776",
        publisherOrHolder: 'North Carolina State Archives',
        url: 'https://www.archives.ncdcr.gov/',
        credibilityTier: 'TIER1',
        notes:
          "Official records of North Carolina\'s revolutionary government, which replaced Royal Governor Martin\'s administration. The first provincial congresses met in New Bern and at other locations, establishing the Patriot government.",
      },
      {
        id: 'src-new-bern-nc-gov-martin-papers',
        type: 'PRIMARY',
        title: "Royal Governor Josiah Martin: Correspondence and Proclamations, 1771-1776",
        publisherOrHolder: 'Public Record Office (National Archives, United Kingdom)',
        credibilityTier: 'TIER1',
        notes:
          "Papers of the last Royal Governor of North Carolina, who fled Tryon Palace in June 1775 and subsequently led the disastrous Loyalist campaign culminating in Moore\'s Creek Bridge. Essential for the loyalist perspective on New Bern\'s political collapse.",
      },
      {
        id: 'src-new-bern-nc-nc-colonial-records',
        type: 'PRIMARY',
        title: "Colonial and State Records of North Carolina, Vols. 9-10: Revolutionary Period",
        publisherOrHolder: 'State of North Carolina (Walter Clark, ed.)',
        publicationDate: new Date('1890-01-01'),
        credibilityTier: 'TIER1',
        notes:
          "The official compilation of North Carolina government records from 1774 to 1776, including the Provincial Congress journals and Governor Martin\'s correspondence. A foundational primary source compilation.",
      },
      {
        id: 'src-new-bern-nc-tryon-palace',
        type: 'INSTITUTIONAL',
        title: "Tryon Palace Historic Sites and Gardens: Research Collections",
        publisherOrHolder: 'Tryon Palace',
        url: 'https://www.tryonpalace.org/',
        credibilityTier: 'TIER1',
        notes:
          "The reconstructed royal governor\'s palace maintains archival and archaeological research resources on New Bern\'s role as the colonial capital. Research library includes governor\'s household accounts, inventories, and architectural drawings.",
      },
      {
        id: 'src-new-bern-nc-craven-county-court',
        type: 'PRIMARY',
        title: "Craven County Court Minutes and Committee of Safety Records, 1774-1778",
        publisherOrHolder: 'North Carolina State Archives',
        credibilityTier: 'TIER1',
        notes:
          "Local government records from New Bern\'s county documenting the transition from Royal to Patriot governance. Includes committee of safety minutes that reveal the political process by which New Bern\'s Patriot faction took control.",
      },
      // TIER 2
      {
        id: 'src-new-bern-nc-left-hand-craven',
        type: 'SECONDARY',
        title: "Craven County in the American Revolution",
        publisherOrHolder: 'North Carolina Historical Review',
        publicationDate: new Date('1976-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Scholarly article on the Revolutionary War experience in Craven County (New Bern). Documents the local political transformation, the militia organization, and the impact of the war on the colonial capital\'s social structure.",
      },
      {
        id: 'src-new-bern-nc-watson-nc-revolution',
        type: 'SECONDARY',
        title: "The History of New Bern and Craven County",
        publisherOrHolder: 'Tryon Palace Commission (Alan D. Watson)',
        publicationDate: new Date('1987-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Standard local history of New Bern and its county through the Civil War. The Revolutionary chapters are the most detailed scholarly treatment of the town\'s role as colonial capital and the political transition to Patriot rule.",
      },
      {
        id: 'src-new-bern-nc-moores-creek-nps',
        type: 'INSTITUTIONAL',
        title: "Moores Creek National Battlefield: New Bern and the North Carolina Loyalist Campaign",
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/mocr/index.htm',
        credibilityTier: 'TIER2',
        notes:
          "NPS resources on the February 1776 Battle of Moores Creek Bridge, which broke the Loyalist movement that had been building from the New Bern area. The battle\'s outcome secured Patriot control of eastern North Carolina.",
      },
      {
        id: 'src-new-bern-nc-right-of-habeas-corpus',
        type: 'SECONDARY',
        title: "North Carolina\'s Fourth Provincial Congress, 1776: Establishing Revolutionary Government",
        publisherOrHolder: 'North Carolina Historical Review',
        publicationDate: new Date('1988-01-01'),
        credibilityTier: 'TIER2',
        notes:
          "Scholarly analysis of the Fourth Provincial Congress that drafted the North Carolina Constitution of 1776. Though the congress did not meet in New Bern, its work replaced the royal government centered there.",
      },
      {
        id: 'src-new-bern-nc-north-carolina-state-hist-soc',
        type: 'INSTITUTIONAL',
        title: "North Carolina Collection: University of North Carolina at Chapel Hill",
        publisherOrHolder: 'University of North Carolina at Chapel Hill Libraries',
        url: 'https://library.unc.edu/wilson/ncc/',
        credibilityTier: 'TIER2',
        notes:
          "The North Carolina Collection holds the most extensive research library on North Carolina history, including the Revolutionary period. Finding aids identify materials on New Bern, Tryon Palace, and the colonial capital.",
      },
      // TIER 3
      {
        id: 'src-new-bern-nc-wikipedia',
        type: 'TERTIARY',
        title: "New Bern, North Carolina -- Wikipedia",
        publisherOrHolder: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/New_Bern,_North_Carolina',
        credibilityTier: 'TIER3',
        notes:
          'General reference entry. The History section adequately covers the colonial capital period, Governor Martin\'s flight, and the wartime disruption. Cross-reference with Watson\'s county history for detail.',
      },
      {
        id: 'src-new-bern-nc-tryon-palace-visitor',
        type: 'TERTIARY',
        title: "Tryon Palace Visitor Guide",
        publisherOrHolder: 'Tryon Palace',
        url: 'https://www.tryonpalace.org/plan-your-visit',
        credibilityTier: 'TIER3',
        notes:
          'Visitor-oriented guide to the reconstructed Tryon Palace complex. Identifies the main palace, outbuildings, and gardens as they were during the colonial capital period. Useful for physical site orientation.',
      },
    ],
  },
};
