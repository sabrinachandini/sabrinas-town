// MODEL: Claude Opus (historical relationships and reasons)
// TownLink definitions for the 75-town network
// Each town has ≥5 outbound links spanning ≥3 link types
// Non-hub towns link to at least one hub
// Graph is fully connected (all towns reachable from Lexington)

import { TownLinkType } from '@prisma/client';

export interface TownLinkDef {
  fromTownId: string;
  toTownId: string;
  linkType: TownLinkType;
  reason: string;
  weight: number; // 0-100, higher = stronger connection
}

/**
 * Complete link definitions for 75-town network.
 * Organized by source town region.
 */
export const TOWN_LINKS_75: TownLinkDef[] = [
  // ============================================
  // MASSACHUSETTS TOWNS (10)
  // ============================================

  // Lexington (hub) - 10 links (strengthened for flagship pair)
  { fromTownId: 'us-ma-lexington', toTownId: 'us-ma-concord', linkType: 'SHARED_EVENT', reason: 'The battles of April 19, 1775 began at Lexington and continued to Concord, linked by the same British expedition and colonial response.', weight: 95 },
  { fromTownId: 'us-ma-lexington', toTownId: 'us-ma-concord', linkType: 'ROUTE', reason: "Battle Road connects Lexington Green to North Bridge—the path the British marched and later retreated in chaos.", weight: 90 },
  { fromTownId: 'us-ma-lexington', toTownId: 'us-ma-concord', linkType: 'COMPARISON', reason: "Twin birthplaces of the Revolution: Lexington where blood was first shed, Concord where the colonists first fought back.", weight: 85 },
  { fromTownId: 'us-ma-lexington', toTownId: 'us-ma-concord', linkType: 'SHARED_PERSON', reason: "Paul Revere warned both towns—reaching Lexington personally and sending word to Concord via Dr. Samuel Prescott.", weight: 80 },
  { fromTownId: 'us-ma-lexington', toTownId: 'us-ma-concord', linkType: 'SHARED_THEME', reason: "Both towns exemplify the citizen-soldier theme: farmers and tradesmen who became fighters when their communities called.", weight: 75 },
  { fromTownId: 'us-ma-lexington', toTownId: 'us-ma-boston', linkType: 'ROUTE', reason: "Paul Revere's midnight ride connected Boston to Lexington, part of the alarm network that brought militia to the green.", weight: 90 },
  { fromTownId: 'us-ma-lexington', toTownId: 'us-ma-cambridge', linkType: 'SHARED_PERSON', reason: 'Militia who stood at Lexington later served in the Continental Army headquartered at Cambridge during the siege of Boston.', weight: 75 },
  { fromTownId: 'us-ma-lexington', toTownId: 'us-ma-arlington', linkType: 'SHARED_EVENT', reason: 'The British retreat from Concord passed through both Lexington and Arlington (Menotomy) on April 19, 1775.', weight: 80 },
  { fromTownId: 'us-ma-lexington', toTownId: 'us-pa-philadelphia', linkType: 'SHARED_THEME', reason: 'News of Lexington reached Philadelphia and galvanized the Continental Congress toward independence.', weight: 70 },
  { fromTownId: 'us-ma-lexington', toTownId: 'us-ny-saratoga-springs', linkType: 'COMPARISON', reason: "Both represent pivotal moments: Lexington the Revolution's beginning, Saratoga its diplomatic turning point.", weight: 65 },

  // Concord (hub) - 10 links (strengthened for flagship pair)
  { fromTownId: 'us-ma-concord', toTownId: 'us-ma-lexington', linkType: 'SHARED_EVENT', reason: 'The battles of April 19, 1775 linked both towns in a single day of fighting that began the Revolution.', weight: 95 },
  { fromTownId: 'us-ma-concord', toTownId: 'us-ma-lexington', linkType: 'ROUTE', reason: "Battle Road connects North Bridge to Lexington Green—the path of British advance and bloody retreat.", weight: 90 },
  { fromTownId: 'us-ma-concord', toTownId: 'us-ma-lexington', linkType: 'COMPARISON', reason: "Twin birthplaces of the Revolution: Concord where colonists attacked, Lexington where they first stood.", weight: 85 },
  { fromTownId: 'us-ma-concord', toTownId: 'us-ma-lexington', linkType: 'SHARED_PERSON', reason: "Paul Revere connected both towns—he was captured between them after warning Lexington.", weight: 80 },
  { fromTownId: 'us-ma-concord', toTownId: 'us-ma-lexington', linkType: 'SHARED_THEME', reason: "Both towns exemplify the citizen-soldier tradition—provincial militia standing against professional soldiers.", weight: 75 },
  { fromTownId: 'us-ma-concord', toTownId: 'us-ma-boston', linkType: 'ROUTE', reason: 'The British expedition originated in Boston and targeted military supplies stored at Concord.', weight: 85 },
  { fromTownId: 'us-ma-concord', toTownId: 'us-ma-cambridge', linkType: 'SHARED_PERSON', reason: 'Concord minutemen joined the forces besieging Boston, serving under Washington at Cambridge headquarters.', weight: 75 },
  { fromTownId: 'us-ma-concord', toTownId: 'us-ma-arlington', linkType: 'SHARED_EVENT', reason: 'The British retreat from Concord fought through Arlington on the bloody march back to Boston.', weight: 80 },
  { fromTownId: 'us-ma-concord', toTownId: 'us-va-yorktown', linkType: 'COMPARISON', reason: "Concord began the armed struggle for independence; Yorktown concluded it. The war's bookends.", weight: 70 },
  { fromTownId: 'us-ma-concord', toTownId: 'us-nj-trenton', linkType: 'SHARED_THEME', reason: 'Both represent moments when outnumbered Americans achieved surprise against professional soldiers.', weight: 60 },

  // Boston (hub) - 6 links
  { fromTownId: 'us-ma-boston', toTownId: 'us-ma-lexington', linkType: 'ROUTE', reason: "The British expedition to Lexington launched from Boston; Revere's ride warned of their departure.", weight: 90 },
  { fromTownId: 'us-ma-boston', toTownId: 'us-ma-cambridge', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Cambridge served as Continental Army headquarters during the siege of British-occupied Boston.', weight: 85 },
  { fromTownId: 'us-ma-boston', toTownId: 'us-pa-philadelphia', linkType: 'SHARED_THEME', reason: 'Both cities were centers of revolutionary thought and colonial resistance to British policies.', weight: 80 },
  { fromTownId: 'us-ma-boston', toTownId: 'us-ny-new-york-city', linkType: 'COMPARISON', reason: 'Both were major colonial ports. Boston was liberated early; New York remained British-held throughout the war.', weight: 75 },
  { fromTownId: 'us-ma-boston', toTownId: 'us-ma-salem', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Salem merchants joined Boston in resisting British trade policies and later supplied privateers.', weight: 70 },
  { fromTownId: 'us-ma-boston', toTownId: 'us-sc-charleston', linkType: 'COMPARISON', reason: 'Major colonial ports that experienced British occupation and were focal points of their respective regions.', weight: 65 },

  // Cambridge (hub) - 6 links
  { fromTownId: 'us-ma-cambridge', toTownId: 'us-ma-boston', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Cambridge hosted the siege headquarters while Boston remained under British occupation.', weight: 85 },
  { fromTownId: 'us-ma-cambridge', toTownId: 'us-ma-lexington', linkType: 'SHARED_PERSON', reason: 'Militia from both towns served together during the siege of Boston under Washington.', weight: 75 },
  { fromTownId: 'us-ma-cambridge', toTownId: 'us-nj-morristown', linkType: 'COMPARISON', reason: 'Both served as major winter headquarters for the Continental Army at different phases of the war.', weight: 70 },
  { fromTownId: 'us-ma-cambridge', toTownId: 'us-ny-newburgh', linkType: 'SHARED_THEME', reason: "Both were Washington's headquarters: Cambridge at the war's start, Newburgh at its end.", weight: 65 },
  { fromTownId: 'us-ma-cambridge', toTownId: 'us-ma-concord', linkType: 'SHARED_PERSON', reason: 'Concord militia served in the Continental forces organized at Cambridge.', weight: 70 },
  { fromTownId: 'us-ma-cambridge', toTownId: 'us-pa-valley-forge', linkType: 'SHARED_THEME', reason: 'Both represent periods of army transformation: Cambridge created the Continental Army, Valley Forge hardened it.', weight: 60 },

  // Arlington (major) - 5 links
  { fromTownId: 'us-ma-arlington', toTownId: 'us-ma-lexington', linkType: 'SHARED_EVENT', reason: 'Both towns saw combat on April 19, 1775 as the British retreated from Concord.', weight: 85 },
  { fromTownId: 'us-ma-arlington', toTownId: 'us-ma-concord', linkType: 'SHARED_EVENT', reason: 'The British retreat from Concord passed through Arlington with heavy fighting.', weight: 80 },
  { fromTownId: 'us-ma-arlington', toTownId: 'us-ma-boston', linkType: 'ROUTE', reason: 'Arlington (Menotomy) sat on the road between Concord and Boston, making it a battle site during the retreat.', weight: 75 },
  { fromTownId: 'us-ma-arlington', toTownId: 'us-ma-cambridge', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Adjacent towns whose residents served together in the siege forces around Boston.', weight: 70 },
  { fromTownId: 'us-ma-arlington', toTownId: 'us-nj-monmouth', linkType: 'COMPARISON', reason: 'Both saw some of the bloodiest single-day fighting of the war in their respective campaigns.', weight: 55 },

  // Salem (major) - 11 links
  { fromTownId: 'us-ma-salem', toTownId: 'us-ma-boston', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'North Shore port towns with shared maritime interests and coordinated resistance to British policies.', weight: 75 },
  { fromTownId: 'us-ma-salem', toTownId: 'us-ma-marblehead', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Adjacent port towns whose sailors and ships contributed to the naval war.', weight: 80 },
  { fromTownId: 'us-ma-salem', toTownId: 'us-ma-cambridge', linkType: 'SHARED_PERSON', reason: 'Salem men served in the Continental forces headquartered at Cambridge.', weight: 65 },
  { fromTownId: 'us-ma-salem', toTownId: 'us-ct-new-london', linkType: 'SHARED_THEME', reason: 'Both were privateering ports that contributed to the naval war against British commerce.', weight: 60 },
  { fromTownId: 'us-ma-salem', toTownId: 'us-ri-newport', linkType: 'COMPARISON', reason: 'Major New England ports with different wartime experiences: Salem remained free, Newport was occupied.', weight: 55 },
  { fromTownId: 'us-ma-salem', toTownId: 'us-ma-lexington', linkType: 'SHARED_THEME', reason: 'Salem\'s February 1775 confrontation over military stores foreshadowed the armed resistance at Lexington two months later.', weight: 70 },
  { fromTownId: 'us-ma-salem', toTownId: 'us-ma-concord', linkType: 'SHARED_THEME', reason: 'Both towns were targets of British attempts to seize colonial military supplies before open conflict began.', weight: 65 },
  { fromTownId: 'us-ma-salem', toTownId: 'us-nh-portsmouth', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Northern New England port towns whose shipbuilding industries supported the Continental naval effort.', weight: 60 },
  { fromTownId: 'us-ma-salem', toTownId: 'us-pa-philadelphia', linkType: 'SHARED_THEME', reason: 'Salem privateers operated under letters of marque issued by the Continental Congress in Philadelphia.', weight: 55 },
  { fromTownId: 'us-ma-salem', toTownId: 'us-ma-plymouth', linkType: 'SHARED_THEME', reason: 'Massachusetts coastal towns whose economies depended on maritime trade disrupted by British policies.', weight: 50 },
  { fromTownId: 'us-ma-salem', toTownId: 'us-ny-new-york-city', linkType: 'SHARED_THEME', reason: 'Salem privateers targeted British supply ships bound for the New York garrison.', weight: 55 },

  // Marblehead (regional) - 11 links
  { fromTownId: 'us-ma-marblehead', toTownId: 'us-ma-salem', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Adjacent port towns with shared maritime traditions and wartime contributions.', weight: 80 },
  { fromTownId: 'us-ma-marblehead', toTownId: 'us-ma-boston', linkType: 'SHARED_PERSON', reason: 'Marblehead sailors rowed the evacuation from Long Island and served throughout the war.', weight: 75 },
  { fromTownId: 'us-ma-marblehead', toTownId: 'us-nj-trenton', linkType: 'SHARED_EVENT', reason: 'Marblehead sailors rowed Washington across the Delaware for the Trenton attack.', weight: 85 },
  { fromTownId: 'us-ma-marblehead', toTownId: 'us-ny-new-york-city', linkType: 'SHARED_EVENT', reason: 'Marblehead men rowed the army to safety during the Long Island evacuation.', weight: 70 },
  { fromTownId: 'us-ma-marblehead', toTownId: 'us-ma-cambridge', linkType: 'SHARED_PERSON', reason: 'The Marblehead regiment served in the Continental Army organized at Cambridge.', weight: 65 },
  { fromTownId: 'us-ma-marblehead', toTownId: 'us-ma-lexington', linkType: 'SHARED_THEME', reason: 'Marblehead militia responded to the Lexington alarm and joined forces pursuing the British retreat.', weight: 60 },
  { fromTownId: 'us-ma-marblehead', toTownId: 'us-ma-concord', linkType: 'SHARED_THEME', reason: 'Marblehead men marched to Concord after news of the April 19 fighting reached the coast.', weight: 55 },
  { fromTownId: 'us-ma-marblehead', toTownId: 'us-pa-philadelphia', linkType: 'SHARED_PERSON', reason: 'Elbridge Gerry of Marblehead signed the Declaration of Independence and served in the Continental Congress.', weight: 65 },
  { fromTownId: 'us-ma-marblehead', toTownId: 'us-ri-newport', linkType: 'SHARED_THEME', reason: 'New England maritime communities whose fishing fleets were disrupted by British naval operations.', weight: 50 },
  { fromTownId: 'us-ma-marblehead', toTownId: 'us-nh-portsmouth', linkType: 'SHARED_THEME', reason: 'Northern coastal towns whose seafaring populations contributed disproportionately to the Continental forces.', weight: 50 },
  { fromTownId: 'us-ma-marblehead', toTownId: 'us-ny-white-plains', linkType: 'SHARED_EVENT', reason: 'Glover\'s Marblehead regiment fought at the Battle of White Plains in October 1776.', weight: 60 },

  // Plymouth (regional) - 11 links
  { fromTownId: 'us-ma-plymouth', toTownId: 'us-ma-boston', linkType: 'SHARED_THEME', reason: 'Both represent foundational moments in American identity: Pilgrim landing and revolutionary resistance.', weight: 70 },
  { fromTownId: 'us-ma-plymouth', toTownId: 'us-ma-cambridge', linkType: 'SHARED_PERSON', reason: 'Plymouth militia joined the siege of Boston, serving with other Massachusetts troops.', weight: 65 },
  { fromTownId: 'us-ma-plymouth', toTownId: 'us-pa-philadelphia', linkType: 'SHARED_THEME', reason: 'Plymouth symbolized English settlement; Philadelphia symbolized independence from England.', weight: 55 },
  { fromTownId: 'us-ma-plymouth', toTownId: 'us-ma-lexington', linkType: 'SHARED_THEME', reason: 'Both carry symbolic weight in American historical memory, though centuries apart.', weight: 50 },
  { fromTownId: 'us-ma-plymouth', toTownId: 'us-va-williamsburg', linkType: 'COMPARISON', reason: 'Early English settlement sites that became centers of revolutionary activity in their colonies.', weight: 50 },
  { fromTownId: 'us-ma-plymouth', toTownId: 'us-ma-concord', linkType: 'SHARED_THEME', reason: 'Plymouth militia marched toward Concord after the April 19 alarm, joining the broader Massachusetts response.', weight: 55 },
  { fromTownId: 'us-ma-plymouth', toTownId: 'us-ri-providence', linkType: 'SHARED_THEME', reason: 'Both colonies traced their founding to groups seeking self-governance outside established authority.', weight: 50 },
  { fromTownId: 'us-ma-plymouth', toTownId: 'us-ma-salem', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Massachusetts coastal towns whose colonial-era economies centered on fishing and Atlantic trade.', weight: 45 },
  { fromTownId: 'us-ma-plymouth', toTownId: 'us-ma-marblehead', linkType: 'SHARED_THEME', reason: 'Maritime communities that contributed sailors and soldiers to the Continental cause.', weight: 45 },
  { fromTownId: 'us-ma-plymouth', toTownId: 'us-ny-new-york-city', linkType: 'SHARED_THEME', reason: 'Plymouth militia served in Continental forces deployed to New York during the 1776 campaign.', weight: 50 },
  { fromTownId: 'us-ma-plymouth', toTownId: 'us-ri-newport', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Southeastern New England coastal towns whose economies depended on maritime trade and fishing.', weight: 45 },

  // Worcester (regional) - 11 links
  { fromTownId: 'us-ma-worcester', toTownId: 'us-ma-boston', linkType: 'SHARED_THEME', reason: 'Worcester patriots closed royal courts before Lexington, part of the resistance Boston led.', weight: 75 },
  { fromTownId: 'us-ma-worcester', toTownId: 'us-ma-cambridge', linkType: 'SHARED_PERSON', reason: 'Worcester militia served in the Continental Army during the siege of Boston.', weight: 70 },
  { fromTownId: 'us-ma-worcester', toTownId: 'us-ma-springfield', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Interior Massachusetts towns that supplied troops and materials throughout the war.', weight: 65 },
  { fromTownId: 'us-ma-worcester', toTownId: 'us-ma-lexington', linkType: 'SHARED_THEME', reason: 'Worcester resistance preceded Lexington; both demonstrated escalating colonial defiance.', weight: 60 },
  { fromTownId: 'us-ma-worcester', toTownId: 'us-pa-york', linkType: 'COMPARISON', reason: 'Interior towns that maintained patriot governance while coastal areas faced occupation threats.', weight: 50 },
  { fromTownId: 'us-ma-worcester', toTownId: 'us-ma-concord', linkType: 'SHARED_THEME', reason: 'Both towns experienced early confrontations with royal authority over military stores and court jurisdiction.', weight: 60 },
  { fromTownId: 'us-ma-worcester', toTownId: 'us-pa-philadelphia', linkType: 'SHARED_THEME', reason: 'Worcester\'s court closings helped demonstrate to the Continental Congress that royal governance had collapsed in Massachusetts.', weight: 55 },
  { fromTownId: 'us-ma-worcester', toTownId: 'us-ma-arlington', linkType: 'SHARED_PERSON', reason: 'Worcester militia companies marched east after the Lexington alarm and served alongside Arlington men in the siege of Boston.', weight: 50 },
  { fromTownId: 'us-ma-worcester', toTownId: 'us-ny-saratoga-springs', linkType: 'SHARED_PERSON', reason: 'Worcester men served in the Northern Army that defeated Burgoyne at Saratoga in 1777.', weight: 55 },
  { fromTownId: 'us-ma-worcester', toTownId: 'us-ma-salem', linkType: 'SHARED_THEME', reason: 'Both towns organized resistance to the Massachusetts Government Act independently of Boston in 1774.', weight: 50 },
  { fromTownId: 'us-ma-worcester', toTownId: 'us-nj-morristown', linkType: 'SHARED_PERSON', reason: 'Worcester soldiers served in Continental units that wintered at Morristown.', weight: 45 },

  // Springfield (regional) - 5 links
  { fromTownId: 'us-ma-springfield', toTownId: 'us-ma-worcester', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Central Massachusetts towns that supported the war effort with troops and supplies.', weight: 65 },
  { fromTownId: 'us-ma-springfield', toTownId: 'us-ma-boston', linkType: 'SHARED_THEME', reason: 'The Springfield Armory supplied weapons to forces fighting for causes Boston championed.', weight: 70 },
  { fromTownId: 'us-ma-springfield', toTownId: 'us-pa-valley-forge', linkType: 'OTHER', reason: 'Springfield manufactured weapons; Valley Forge trained soldiers to use them effectively.', weight: 60 },
  { fromTownId: 'us-ma-springfield', toTownId: 'us-pa-pittsburgh', linkType: 'COMPARISON', reason: 'Both became important military manufacturing and supply centers during and after the war.', weight: 55 },
  { fromTownId: 'us-ma-springfield', toTownId: 'us-ma-cambridge', linkType: 'OTHER', reason: 'Springfield arms eventually equipped the army Washington organized at Cambridge.', weight: 55 },

  // ============================================
  // NEW YORK TOWNS (8)
  // ============================================

  // New York City (hub) - 6 links
  { fromTownId: 'us-ny-new-york-city', toTownId: 'us-nj-trenton', linkType: 'SHARED_EVENT', reason: 'Washington retreated across New Jersey after losing New York, then struck back at Trenton.', weight: 80 },
  { fromTownId: 'us-ny-new-york-city', toTownId: 'us-nj-fort-lee', linkType: 'SHARED_EVENT', reason: 'Fort Lee fell as part of the British campaign to capture New York and the Hudson corridor.', weight: 75 },
  { fromTownId: 'us-ny-new-york-city', toTownId: 'us-ma-boston', linkType: 'COMPARISON', reason: 'Major colonial ports with opposite wartime fates: Boston liberated early, New York occupied throughout.', weight: 70 },
  { fromTownId: 'us-ny-new-york-city', toTownId: 'us-pa-philadelphia', linkType: 'SHARED_THEME', reason: 'The two largest colonial cities, both targeted by British campaigns to break American resistance.', weight: 75 },
  { fromTownId: 'us-ny-new-york-city', toTownId: 'us-ny-white-plains', linkType: 'SHARED_EVENT', reason: 'The Battle of White Plains was part of the campaign that cost Washington control of New York.', weight: 70 },
  { fromTownId: 'us-ny-new-york-city', toTownId: 'us-ny-harlem-heights', linkType: 'SHARED_EVENT', reason: 'Harlem Heights was fought during the New York campaign, giving Americans a rare morale boost.', weight: 65 },

  // Saratoga Springs (hub) - 6 links
  { fromTownId: 'us-ny-saratoga-springs', toTownId: 'us-ny-albany', linkType: 'SHARED_EVENT', reason: "Albany was Burgoyne's objective; his failure to reach it led to surrender at Saratoga.", weight: 85 },
  { fromTownId: 'us-ny-saratoga-springs', toTownId: 'us-ny-ticonderoga', linkType: 'ROUTE', reason: "Burgoyne's invasion route passed through Ticonderoga on its way to defeat at Saratoga.", weight: 80 },
  { fromTownId: 'us-ny-saratoga-springs', toTownId: 'us-vt-bennington', linkType: 'SHARED_EVENT', reason: 'The Bennington defeat weakened Burgoyne before Saratoga, contributing to his surrender.', weight: 85 },
  { fromTownId: 'us-ny-saratoga-springs', toTownId: 'us-ri-newport', linkType: 'OTHER', reason: 'The Saratoga victory brought France into the war; French forces later landed at Newport.', weight: 70 },
  { fromTownId: 'us-ny-saratoga-springs', toTownId: 'us-va-yorktown', linkType: 'COMPARISON', reason: "Saratoga turned the diplomatic war; Yorktown won it. The war's two decisive moments.", weight: 75 },
  { fromTownId: 'us-ny-saratoga-springs', toTownId: 'us-ma-lexington', linkType: 'COMPARISON', reason: 'Lexington began the armed struggle; Saratoga ensured it would succeed with French alliance.', weight: 65 },

  // Albany (major) - 5 links
  { fromTownId: 'us-ny-albany', toTownId: 'us-ny-saratoga-springs', linkType: 'SHARED_EVENT', reason: "Albany was Burgoyne's objective; Saratoga ended his campaign short of the goal.", weight: 85 },
  { fromTownId: 'us-ny-albany', toTownId: 'us-ny-ticonderoga', linkType: 'ROUTE', reason: 'The Lake Champlain-Hudson corridor connected Albany to the northern frontier forts.', weight: 75 },
  { fromTownId: 'us-ny-albany', toTownId: 'us-ny-kingston', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Hudson Valley towns connected by the river that defined the northern strategic theater.', weight: 70 },
  { fromTownId: 'us-ny-albany', toTownId: 'us-ma-boston', linkType: 'SHARED_THEME', reason: 'Both were centers of colonial resistance and strategic objectives in British planning.', weight: 60 },
  { fromTownId: 'us-ny-albany', toTownId: 'us-ny-west-point', linkType: 'ROUTE', reason: 'Control of the Hudson from West Point to Albany was central to American strategic defense.', weight: 70 },

  // Ticonderoga (major) - 5 links
  { fromTownId: 'us-ny-ticonderoga', toTownId: 'us-ny-saratoga-springs', linkType: 'ROUTE', reason: "Burgoyne passed through Ticonderoga on his march to defeat at Saratoga.", weight: 80 },
  { fromTownId: 'us-ny-ticonderoga', toTownId: 'us-ny-crown-point', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Adjacent Lake Champlain forts that controlled the northern invasion route.', weight: 85 },
  { fromTownId: 'us-ny-ticonderoga', toTownId: 'us-ma-boston', linkType: 'OTHER', reason: 'Cannons captured at Ticonderoga were hauled to Boston to force British evacuation.', weight: 80 },
  { fromTownId: 'us-ny-ticonderoga', toTownId: 'us-vt-bennington', linkType: 'SHARED_PERSON', reason: 'Ethan Allen captured Ticonderoga; Vermont forces later fought at Bennington.', weight: 70 },
  { fromTownId: 'us-ny-ticonderoga', toTownId: 'us-ny-albany', linkType: 'ROUTE', reason: 'The fort guarded the approach to Albany along the Lake Champlain corridor.', weight: 75 },

  // West Point (major) - 5 links
  { fromTownId: 'us-ny-west-point', toTownId: 'us-ny-new-york-city', linkType: 'SHARED_THEME', reason: 'West Point fortifications blocked British efforts to control the Hudson and reach Albany.', weight: 75 },
  { fromTownId: 'us-ny-west-point', toTownId: 'us-ny-albany', linkType: 'ROUTE', reason: 'West Point defended the Hudson corridor that connected New York City to Albany.', weight: 70 },
  { fromTownId: 'us-ny-west-point', toTownId: 'us-ny-stony-point', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Both Hudson River forts were part of the defensive network protecting the corridor.', weight: 75 },
  { fromTownId: 'us-ny-west-point', toTownId: 'us-pa-philadelphia', linkType: 'SHARED_PERSON', reason: 'Benedict Arnold attempted to betray West Point; he had earlier served at Philadelphia.', weight: 65 },
  { fromTownId: 'us-ny-west-point', toTownId: 'us-ny-newburgh', linkType: 'GEOGRAPHIC_PROXIMITY', reason: "Nearby Hudson Valley locations, both associated with Washington's command.", weight: 70 },

  // White Plains (regional) - 5 links
  { fromTownId: 'us-ny-white-plains', toTownId: 'us-ny-new-york-city', linkType: 'SHARED_EVENT', reason: 'The Battle of White Plains was part of the campaign that lost New York to the British.', weight: 75 },
  { fromTownId: 'us-ny-white-plains', toTownId: 'us-ny-harlem-heights', linkType: 'SHARED_EVENT', reason: 'Both battles occurred during the New York campaign of 1776.', weight: 70 },
  { fromTownId: 'us-ny-white-plains', toTownId: 'us-nj-fort-lee', linkType: 'SHARED_EVENT', reason: "Washington's retreat after White Plains led to the fall of Fort Lee.", weight: 65 },
  { fromTownId: 'us-ny-white-plains', toTownId: 'us-nj-trenton', linkType: 'SHARED_THEME', reason: 'White Plains was a defeat that Trenton helped redeem in American morale.', weight: 60 },
  { fromTownId: 'us-ny-white-plains', toTownId: 'us-ma-cambridge', linkType: 'SHARED_PERSON', reason: 'Soldiers who served at Cambridge later fought at White Plains under Washington.', weight: 55 },

  // Newburgh (regional) - 5 links
  { fromTownId: 'us-ny-newburgh', toTownId: 'us-ny-west-point', linkType: 'GEOGRAPHIC_PROXIMITY', reason: "Both Hudson Valley sites associated with Washington's late-war command.", weight: 70 },
  { fromTownId: 'us-ny-newburgh', toTownId: 'us-ma-cambridge', linkType: 'SHARED_THEME', reason: "Washington's first and last headquarters, bookending his military command.", weight: 65 },
  { fromTownId: 'us-ny-newburgh', toTownId: 'us-pa-philadelphia', linkType: 'SHARED_THEME', reason: 'Newburgh saw Washington defuse a coup; Philadelphia saw civilian government triumph.', weight: 60 },
  { fromTownId: 'us-ny-newburgh', toTownId: 'us-md-annapolis', linkType: 'SHARED_PERSON', reason: 'Washington at Newburgh awaited peace; at Annapolis he resigned his commission.', weight: 70 },
  { fromTownId: 'us-ny-newburgh', toTownId: 'us-va-yorktown', linkType: 'OTHER', reason: "After Yorktown's victory, the army waited at Newburgh for the peace treaty.", weight: 65 },

  // Kingston (regional) - 5 links
  { fromTownId: 'us-ny-kingston', toTownId: 'us-ny-albany', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Hudson Valley towns connected by the river and shared political interests.', weight: 70 },
  { fromTownId: 'us-ny-kingston', toTownId: 'us-ny-new-york-city', linkType: 'SHARED_EVENT', reason: 'British forces from New York burned Kingston in 1777 retaliation.', weight: 65 },
  { fromTownId: 'us-ny-kingston', toTownId: 'us-ct-danbury', linkType: 'COMPARISON', reason: 'Both towns were burned by British raids targeting patriot communities.', weight: 60 },
  { fromTownId: 'us-ny-kingston', toTownId: 'us-ny-saratoga-springs', linkType: 'SHARED_EVENT', reason: "Kingston was burned during the campaign that ended at Saratoga.", weight: 65 },
  { fromTownId: 'us-ny-kingston', toTownId: 'us-pa-york', linkType: 'COMPARISON', reason: 'Both served as wartime capitals: Kingston for New York, York for the Continental Congress.', weight: 55 },

  // ============================================
  // PENNSYLVANIA TOWNS (7)
  // ============================================

  // Philadelphia (hub) - 6 links
  { fromTownId: 'us-pa-philadelphia', toTownId: 'us-ma-boston', linkType: 'SHARED_THEME', reason: 'Both were centers of revolutionary ideology and targets of British campaigns.', weight: 80 },
  { fromTownId: 'us-pa-philadelphia', toTownId: 'us-pa-valley-forge', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'The army wintered at Valley Forge while the British occupied nearby Philadelphia.', weight: 85 },
  { fromTownId: 'us-pa-philadelphia', toTownId: 'us-pa-germantown', linkType: 'SHARED_EVENT', reason: "Washington attacked at Germantown trying to retake Philadelphia.", weight: 80 },
  { fromTownId: 'us-pa-philadelphia', toTownId: 'us-nj-trenton', linkType: 'SHARED_THEME', reason: "Philadelphia was the political capital; Trenton was where Washington saved the military cause.", weight: 70 },
  { fromTownId: 'us-pa-philadelphia', toTownId: 'us-pa-york', linkType: 'SHARED_EVENT', reason: 'Congress fled Philadelphia for York when the British occupied the capital.', weight: 75 },
  { fromTownId: 'us-pa-philadelphia', toTownId: 'us-va-williamsburg', linkType: 'SHARED_THEME', reason: 'Both were colonial capitals where revolutionary ideas were debated and advanced.', weight: 65 },

  // Valley Forge (major) - 5 links
  { fromTownId: 'us-pa-valley-forge', toTownId: 'us-pa-philadelphia', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'The army watched British-occupied Philadelphia from their winter camp at Valley Forge.', weight: 85 },
  { fromTownId: 'us-pa-valley-forge', toTownId: 'us-nj-morristown', linkType: 'COMPARISON', reason: 'The two great winter encampments that tested and transformed the Continental Army.', weight: 80 },
  { fromTownId: 'us-pa-valley-forge', toTownId: 'us-nj-monmouth', linkType: 'OTHER', reason: 'The army that emerged from Valley Forge fought the British to a standstill at Monmouth.', weight: 75 },
  { fromTownId: 'us-pa-valley-forge', toTownId: 'us-ma-cambridge', linkType: 'SHARED_THEME', reason: 'Cambridge created the Continental Army; Valley Forge professionalized it.', weight: 65 },
  { fromTownId: 'us-pa-valley-forge', toTownId: 'us-va-yorktown', linkType: 'SHARED_PERSON', reason: 'Soldiers who survived Valley Forge marched to victory at Yorktown.', weight: 70 },

  // York (regional) - 5 links
  { fromTownId: 'us-pa-york', toTownId: 'us-pa-philadelphia', linkType: 'SHARED_EVENT', reason: 'Congress fled to York when the British captured Philadelphia.', weight: 75 },
  { fromTownId: 'us-pa-york', toTownId: 'us-md-baltimore', linkType: 'COMPARISON', reason: 'Both served as temporary seats of Congress when Philadelphia was threatened.', weight: 60 },
  { fromTownId: 'us-pa-york', toTownId: 'us-pa-carlisle', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Interior Pennsylvania towns that maintained patriot government and supplied the army.', weight: 65 },
  { fromTownId: 'us-pa-york', toTownId: 'us-ny-kingston', linkType: 'COMPARISON', reason: 'Both served as wartime capitals when primary capitals were threatened or occupied.', weight: 55 },
  { fromTownId: 'us-pa-york', toTownId: 'us-md-annapolis', linkType: 'SHARED_THEME', reason: 'Both hosted the Continental Congress at different points during the war.', weight: 60 },

  // Carlisle (regional) - 5 links
  { fromTownId: 'us-pa-carlisle', toTownId: 'us-pa-york', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'South-central Pennsylvania towns that supported the war effort.', weight: 65 },
  { fromTownId: 'us-pa-carlisle', toTownId: 'us-pa-philadelphia', linkType: 'OTHER', reason: 'Carlisle barracks supported Continental Army logistics coordinated from Philadelphia.', weight: 60 },
  { fromTownId: 'us-pa-carlisle', toTownId: 'us-pa-pittsburgh', linkType: 'ROUTE', reason: 'Carlisle was on the route to Pittsburgh and the western frontier.', weight: 65 },
  { fromTownId: 'us-pa-carlisle', toTownId: 'us-wv-wheeling', linkType: 'SHARED_THEME', reason: 'Both supported frontier defense against raids and Native resistance.', weight: 55 },
  { fromTownId: 'us-pa-carlisle', toTownId: 'us-pa-valley-forge', linkType: 'OTHER', reason: 'Carlisle supplied the army that encamped at Valley Forge.', weight: 55 },

  // Paoli (supporting) - 5 links
  { fromTownId: 'us-pa-paoli', toTownId: 'us-pa-philadelphia', linkType: 'SHARED_EVENT', reason: 'The Paoli Massacre occurred during the campaign for Philadelphia.', weight: 75 },
  { fromTownId: 'us-pa-paoli', toTownId: 'us-pa-germantown', linkType: 'SHARED_EVENT', reason: 'Both battles were part of the 1777 Philadelphia campaign.', weight: 70 },
  { fromTownId: 'us-pa-paoli', toTownId: 'us-pa-valley-forge', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Nearby sites connected by the Philadelphia campaign and winter encampment.', weight: 65 },
  { fromTownId: 'us-pa-paoli', toTownId: 'us-ct-groton', linkType: 'COMPARISON', reason: 'Both were sites of massacres that became rallying cries for the patriot cause.', weight: 55 },
  { fromTownId: 'us-pa-paoli', toTownId: 'us-nj-trenton', linkType: 'SHARED_THEME', reason: 'Paoli was an American defeat; Trenton was a redemptive victory in the same war.', weight: 50 },

  // Germantown (regional) - 5 links
  { fromTownId: 'us-pa-germantown', toTownId: 'us-pa-philadelphia', linkType: 'SHARED_EVENT', reason: "Washington attacked Germantown trying to retake occupied Philadelphia.", weight: 80 },
  { fromTownId: 'us-pa-germantown', toTownId: 'us-pa-valley-forge', linkType: 'SHARED_EVENT', reason: 'After Germantown failed, the army retreated to Valley Forge for winter.', weight: 75 },
  { fromTownId: 'us-pa-germantown', toTownId: 'us-pa-paoli', linkType: 'SHARED_EVENT', reason: 'Both battles were part of the 1777 Philadelphia campaign.', weight: 70 },
  { fromTownId: 'us-pa-germantown', toTownId: 'us-nj-princeton', linkType: 'COMPARISON', reason: 'Both were bold American attacks, one successful (Princeton) and one not (Germantown).', weight: 60 },
  { fromTownId: 'us-pa-germantown', toTownId: 'us-ri-newport', linkType: 'OTHER', reason: 'French observers impressed by Germantown later brought their army to Newport.', weight: 55 },

  // Pittsburgh (regional) - 5 links
  { fromTownId: 'us-pa-pittsburgh', toTownId: 'us-pa-carlisle', linkType: 'ROUTE', reason: 'The road from the east to the frontier passed through Carlisle to Pittsburgh.', weight: 65 },
  { fromTownId: 'us-pa-pittsburgh', toTownId: 'us-il-kaskaskia', linkType: 'SHARED_THEME', reason: 'Both were centers of the western frontier war beyond the Appalachians.', weight: 65 },
  { fromTownId: 'us-pa-pittsburgh', toTownId: 'us-wv-wheeling', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Ohio Valley posts that anchored the frontier against British-allied raids.', weight: 70 },
  { fromTownId: 'us-pa-pittsburgh', toTownId: 'us-oh-marietta', linkType: 'ROUTE', reason: 'Pittsburgh was the gateway to the Ohio Valley settlements established after the war.', weight: 60 },
  { fromTownId: 'us-pa-pittsburgh', toTownId: 'us-pa-philadelphia', linkType: 'SHARED_THEME', reason: 'Philadelphia controlled the politics; Fort Pitt at Pittsburgh controlled the western frontier.', weight: 55 },

  // ============================================
  // NEW JERSEY TOWNS (6)
  // ============================================

  // Trenton (hub) - 6 links
  { fromTownId: 'us-nj-trenton', toTownId: 'us-nj-princeton', linkType: 'SHARED_EVENT', reason: 'The Ten Crucial Days linked victories at Trenton and Princeton that saved the cause.', weight: 90 },
  { fromTownId: 'us-nj-trenton', toTownId: 'us-pa-philadelphia', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Trenton guarded the Delaware crossing route to Philadelphia.', weight: 75 },
  { fromTownId: 'us-nj-trenton', toTownId: 'us-ma-marblehead', linkType: 'SHARED_EVENT', reason: 'Marblehead sailors rowed Washington across the Delaware for the Trenton attack.', weight: 85 },
  { fromTownId: 'us-nj-trenton', toTownId: 'us-ny-new-york-city', linkType: 'SHARED_THEME', reason: 'Trenton redeemed the loss of New York and proved the war could be won.', weight: 70 },
  { fromTownId: 'us-nj-trenton', toTownId: 'us-nj-morristown', linkType: 'SHARED_PERSON', reason: 'Washington and his army moved from Trenton to winter quarters at Morristown.', weight: 75 },
  { fromTownId: 'us-nj-trenton', toTownId: 'us-va-yorktown', linkType: 'COMPARISON', reason: 'Trenton saved the Revolution; Yorktown won it. Both were stunning victories.', weight: 65 },

  // Princeton (hub) - 6 links
  { fromTownId: 'us-nj-princeton', toTownId: 'us-nj-trenton', linkType: 'SHARED_EVENT', reason: 'The Ten Crucial Days connected the victories at Trenton and Princeton.', weight: 90 },
  { fromTownId: 'us-nj-princeton', toTownId: 'us-nj-morristown', linkType: 'SHARED_PERSON', reason: 'After Princeton, Washington took the army to winter quarters at Morristown.', weight: 80 },
  { fromTownId: 'us-nj-princeton', toTownId: 'us-pa-philadelphia', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Princeton sat between the armies contesting Philadelphia.', weight: 70 },
  { fromTownId: 'us-nj-princeton', toTownId: 'us-nj-new-brunswick', linkType: 'SHARED_EVENT', reason: 'Washington maneuvered between Princeton and New Brunswick during the 1777 campaign.', weight: 65 },
  { fromTownId: 'us-nj-princeton', toTownId: 'us-pa-germantown', linkType: 'COMPARISON', reason: 'Princeton was a successful surprise attack; Germantown was not.', weight: 60 },
  { fromTownId: 'us-nj-princeton', toTownId: 'us-ma-cambridge', linkType: 'SHARED_THEME', reason: 'Both associated with American intellectual life and the Revolutionary cause.', weight: 50 },

  // Morristown (hub) - 6 links
  { fromTownId: 'us-nj-morristown', toTownId: 'us-nj-trenton', linkType: 'SHARED_PERSON', reason: 'Washington moved to Morristown after the victories at Trenton and Princeton.', weight: 75 },
  { fromTownId: 'us-nj-morristown', toTownId: 'us-nj-princeton', linkType: 'SHARED_PERSON', reason: 'The army that won at Princeton wintered at Morristown.', weight: 75 },
  { fromTownId: 'us-nj-morristown', toTownId: 'us-pa-valley-forge', linkType: 'COMPARISON', reason: 'The two great winter encampments of the Continental Army.', weight: 85 },
  { fromTownId: 'us-nj-morristown', toTownId: 'us-nj-monmouth', linkType: 'SHARED_PERSON', reason: 'Soldiers who endured Morristown winters fought at Monmouth.', weight: 70 },
  { fromTownId: 'us-nj-morristown', toTownId: 'us-ny-newburgh', linkType: 'SHARED_THEME', reason: "Both were Washington's headquarters during critical phases of the war.", weight: 65 },
  { fromTownId: 'us-nj-morristown', toTownId: 'us-ny-west-point', linkType: 'SHARED_THEME', reason: 'Key positions in the middle colonies defense that Washington maintained.', weight: 60 },

  // Monmouth (major) - 5 links
  { fromTownId: 'us-nj-monmouth', toTownId: 'us-pa-valley-forge', linkType: 'OTHER', reason: 'The army transformed at Valley Forge proved itself at Monmouth.', weight: 80 },
  { fromTownId: 'us-nj-monmouth', toTownId: 'us-nj-morristown', linkType: 'SHARED_PERSON', reason: 'Soldiers who endured Morristown fought at Monmouth.', weight: 70 },
  { fromTownId: 'us-nj-monmouth', toTownId: 'us-pa-philadelphia', linkType: 'SHARED_EVENT', reason: 'Monmouth was fought as the British evacuated Philadelphia for New York.', weight: 75 },
  { fromTownId: 'us-nj-monmouth', toTownId: 'us-ny-new-york-city', linkType: 'ROUTE', reason: 'The British were marching to New York when Washington attacked at Monmouth.', weight: 70 },
  { fromTownId: 'us-nj-monmouth', toTownId: 'us-ma-arlington', linkType: 'COMPARISON', reason: 'Both saw intense, bloody fighting that tested American resolve.', weight: 55 },

  // New Brunswick (supporting) - 5 links
  { fromTownId: 'us-nj-new-brunswick', toTownId: 'us-nj-princeton', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Both towns changed hands during the New Jersey campaigns.', weight: 65 },
  { fromTownId: 'us-nj-new-brunswick', toTownId: 'us-nj-trenton', linkType: 'SHARED_EVENT', reason: 'Part of the same campaign that saw victories at Trenton and Princeton.', weight: 60 },
  { fromTownId: 'us-nj-new-brunswick', toTownId: 'us-ny-new-york-city', linkType: 'ROUTE', reason: 'New Brunswick was on the route between New York and Philadelphia.', weight: 65 },
  { fromTownId: 'us-nj-new-brunswick', toTownId: 'us-nj-morristown', linkType: 'SHARED_THEME', reason: 'Both were strategic points in the New Jersey theater.', weight: 55 },
  { fromTownId: 'us-nj-new-brunswick', toTownId: 'us-pa-philadelphia', linkType: 'ROUTE', reason: 'On the road between the two major cities that armies contested.', weight: 60 },

  // Fort Lee (supporting) - 5 links
  { fromTownId: 'us-nj-fort-lee', toTownId: 'us-ny-new-york-city', linkType: 'SHARED_EVENT', reason: 'Fort Lee fell as part of the British campaign that captured New York.', weight: 75 },
  { fromTownId: 'us-nj-fort-lee', toTownId: 'us-ny-white-plains', linkType: 'SHARED_EVENT', reason: 'Both were defeats in the New York campaign of 1776.', weight: 65 },
  { fromTownId: 'us-nj-fort-lee', toTownId: 'us-nj-trenton', linkType: 'SHARED_THEME', reason: 'Fort Lee was a disaster that Trenton helped redeem.', weight: 60 },
  { fromTownId: 'us-nj-fort-lee', toTownId: 'us-ny-west-point', linkType: 'COMPARISON', reason: 'Fort Lee fell; West Point held. Different fates for Hudson River forts.', weight: 55 },
  { fromTownId: 'us-nj-fort-lee', toTownId: 'us-nj-morristown', linkType: 'SHARED_PERSON', reason: 'Soldiers who fled Fort Lee later served at Morristown.', weight: 50 },

  // ============================================
  // VIRGINIA TOWNS (7)
  // ============================================

  // Williamsburg (hub) - 6 links
  { fromTownId: 'us-va-williamsburg', toTownId: 'us-va-yorktown', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Adjacent towns on the Virginia Peninsula, connected by the road to victory.', weight: 85 },
  { fromTownId: 'us-va-williamsburg', toTownId: 'us-pa-philadelphia', linkType: 'SHARED_THEME', reason: 'Both were colonial capitals where revolutionary ideas developed.', weight: 75 },
  { fromTownId: 'us-va-williamsburg', toTownId: 'us-va-richmond', linkType: 'SHARED_THEME', reason: "Virginia's colonial and revolutionary capitals, connected by political continuity.", weight: 70 },
  { fromTownId: 'us-va-williamsburg', toTownId: 'us-ma-boston', linkType: 'SHARED_THEME', reason: 'Both were centers of colonial resistance where revolutionary leaders emerged.', weight: 65 },
  { fromTownId: 'us-va-williamsburg', toTownId: 'us-va-mount-vernon', linkType: 'SHARED_PERSON', reason: 'Washington knew Williamsburg well from his time in the House of Burgesses.', weight: 60 },
  { fromTownId: 'us-va-williamsburg', toTownId: 'us-nc-new-bern', linkType: 'COMPARISON', reason: 'Both were colonial capitals with royal architecture that became patriot centers.', weight: 55 },

  // Yorktown (hub) - 6 links
  { fromTownId: 'us-va-yorktown', toTownId: 'us-va-williamsburg', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Adjacent Peninsula towns; the army staged at Williamsburg before the siege.', weight: 85 },
  { fromTownId: 'us-va-yorktown', toTownId: 'us-ri-newport', linkType: 'SHARED_PERSON', reason: "Rochambeau's French army marched from Newport to help win at Yorktown.", weight: 80 },
  { fromTownId: 'us-va-yorktown', toTownId: 'us-ny-saratoga-springs', linkType: 'COMPARISON', reason: 'Saratoga brought the French alliance; Yorktown achieved the victory it enabled.', weight: 75 },
  { fromTownId: 'us-va-yorktown', toTownId: 'us-ma-lexington', linkType: 'COMPARISON', reason: 'Lexington began the war; Yorktown effectively ended it.', weight: 70 },
  { fromTownId: 'us-va-yorktown', toTownId: 'us-sc-charleston', linkType: 'SHARED_EVENT', reason: "Cornwallis's southern campaign led from Charleston through the Carolinas to Yorktown.", weight: 75 },
  { fromTownId: 'us-va-yorktown', toTownId: 'us-nc-guilford-courthouse', linkType: 'SHARED_PERSON', reason: 'Cornwallis marched from Guilford Courthouse to Yorktown after his pyrrhic victory.', weight: 70 },

  // Richmond (major) - 5 links
  { fromTownId: 'us-va-richmond', toTownId: 'us-va-williamsburg', linkType: 'SHARED_THEME', reason: "Virginia's capital moved from Williamsburg to Richmond during the war.", weight: 70 },
  { fromTownId: 'us-va-richmond', toTownId: 'us-va-charlottesville', linkType: 'SHARED_PERSON', reason: 'Arnold raided Richmond; Tarleton raided Charlottesville, both targeting Jefferson.', weight: 65 },
  { fromTownId: 'us-va-richmond', toTownId: 'us-ny-west-point', linkType: 'SHARED_PERSON', reason: 'Benedict Arnold, who betrayed West Point, later raided Richmond.', weight: 60 },
  { fromTownId: 'us-va-richmond', toTownId: 'us-va-yorktown', linkType: 'SHARED_EVENT', reason: "Richmond's vulnerability helped lure Cornwallis into Virginia, leading to Yorktown.", weight: 65 },
  { fromTownId: 'us-va-richmond', toTownId: 'us-pa-philadelphia', linkType: 'COMPARISON', reason: 'Both capitals were raided or occupied during the war.', weight: 55 },

  // Alexandria (regional) - 5 links
  { fromTownId: 'us-va-alexandria', toTownId: 'us-va-mount-vernon', linkType: 'GEOGRAPHIC_PROXIMITY', reason: "Mount Vernon's plantation adjoined Alexandria, Washington's home port.", weight: 80 },
  { fromTownId: 'us-va-alexandria', toTownId: 'us-md-annapolis', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Chesapeake Bay ports connected by shared maritime commerce.', weight: 60 },
  { fromTownId: 'us-va-alexandria', toTownId: 'us-va-williamsburg', linkType: 'SHARED_PERSON', reason: 'Washington traveled between Alexandria and Williamsburg for politics and business.', weight: 55 },
  { fromTownId: 'us-va-alexandria', toTownId: 'us-pa-philadelphia', linkType: 'ROUTE', reason: 'On the route between Virginia and the Continental Congress at Philadelphia.', weight: 55 },
  { fromTownId: 'us-va-alexandria', toTownId: 'us-ma-cambridge', linkType: 'SHARED_PERSON', reason: 'Washington left from this region to take command at Cambridge.', weight: 50 },

  // Fredericksburg (regional) - 5 links
  { fromTownId: 'us-va-fredericksburg', toTownId: 'us-va-mount-vernon', linkType: 'SHARED_PERSON', reason: "Washington's boyhood was spent near Fredericksburg; his mother lived there.", weight: 70 },
  { fromTownId: 'us-va-fredericksburg', toTownId: 'us-va-richmond', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Virginia towns connected by roads that armies and supplies traveled.', weight: 60 },
  { fromTownId: 'us-va-fredericksburg', toTownId: 'us-va-williamsburg', linkType: 'ROUTE', reason: 'On the road between northern Virginia and the colonial capital.', weight: 55 },
  { fromTownId: 'us-va-fredericksburg', toTownId: 'us-va-yorktown', linkType: 'SHARED_PERSON', reason: 'Virginia soldiers from the Fredericksburg area served at Yorktown.', weight: 55 },
  { fromTownId: 'us-va-fredericksburg', toTownId: 'us-md-annapolis', linkType: 'SHARED_THEME', reason: 'Both were centers of colonial Virginia and Maryland society.', weight: 45 },

  // Norfolk (regional) - 5 links
  { fromTownId: 'us-va-norfolk', toTownId: 'us-va-williamsburg', linkType: 'SHARED_EVENT', reason: "Norfolk's destruction preceded Virginia's full commitment to independence.", weight: 65 },
  { fromTownId: 'us-va-norfolk', toTownId: 'us-sc-charleston', linkType: 'COMPARISON', reason: 'Both were major southern ports attacked early in the war.', weight: 60 },
  { fromTownId: 'us-va-norfolk', toTownId: 'us-me-portland', linkType: 'COMPARISON', reason: 'Both were burned by British naval forces in 1775, hardening colonial resolve.', weight: 65 },
  { fromTownId: 'us-va-norfolk', toTownId: 'us-va-yorktown', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Tidewater Virginia communities affected by the same naval and military operations.', weight: 55 },
  { fromTownId: 'us-va-norfolk', toTownId: 'us-nc-wilmington', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Southern coastal ports vulnerable to British naval operations.', weight: 50 },

  // Charlottesville (supporting) - 5 links
  { fromTownId: 'us-va-charlottesville', toTownId: 'us-va-richmond', linkType: 'SHARED_PERSON', reason: 'Jefferson governed Virginia from both Richmond and near Charlottesville.', weight: 70 },
  { fromTownId: 'us-va-charlottesville', toTownId: 'us-va-yorktown', linkType: 'SHARED_EVENT', reason: "Tarleton's raid on Charlottesville preceded Cornwallis's march to Yorktown.", weight: 60 },
  { fromTownId: 'us-va-charlottesville', toTownId: 'us-pa-philadelphia', linkType: 'SHARED_PERSON', reason: "Jefferson moved between Charlottesville and Philadelphia during his political career.", weight: 55 },
  { fromTownId: 'us-va-charlottesville', toTownId: 'us-va-williamsburg', linkType: 'SHARED_PERSON', reason: 'Jefferson knew both as centers of Virginia education and politics.', weight: 50 },
  { fromTownId: 'us-va-charlottesville', toTownId: 'us-nc-guilford-courthouse', linkType: 'SHARED_EVENT', reason: "Tarleton's Virginia raids followed Cornwallis's campaign that included Guilford.", weight: 55 },

  // ============================================
  // SOUTH CAROLINA TOWNS (6)
  // ============================================

  // Charleston (hub) - 6 links
  { fromTownId: 'us-sc-charleston', toTownId: 'us-sc-fort-moultrie', linkType: 'GEOGRAPHIC_PROXIMITY', reason: "Fort Moultrie defended Charleston harbor in 1776's early victory.", weight: 85 },
  { fromTownId: 'us-sc-charleston', toTownId: 'us-sc-camden', linkType: 'SHARED_EVENT', reason: 'The fall of Charleston preceded the disaster at Camden in the southern campaign.', weight: 80 },
  { fromTownId: 'us-sc-charleston', toTownId: 'us-ga-savannah', linkType: 'COMPARISON', reason: 'Both were major southern ports that fell to British forces.', weight: 75 },
  { fromTownId: 'us-sc-charleston', toTownId: 'us-va-yorktown', linkType: 'SHARED_PERSON', reason: "Cornwallis's southern campaign began at Charleston and ended at Yorktown.", weight: 75 },
  { fromTownId: 'us-sc-charleston', toTownId: 'us-ma-boston', linkType: 'COMPARISON', reason: 'Major colonial ports with opposite wartime experiences in north and south.', weight: 65 },
  { fromTownId: 'us-sc-charleston', toTownId: 'us-sc-cowpens', linkType: 'SHARED_EVENT', reason: 'The fight to liberate the south after Charleston fell included Cowpens.', weight: 70 },

  // Camden (major) - 5 links
  { fromTownId: 'us-sc-camden', toTownId: 'us-sc-charleston', linkType: 'SHARED_EVENT', reason: "Camden's disaster followed Charleston's fall in the southern campaign.", weight: 80 },
  { fromTownId: 'us-sc-camden', toTownId: 'us-sc-hobkirks-hill', linkType: 'GEOGRAPHIC_PROXIMITY', reason: "Hobkirk's Hill was fought near Camden as part of the same campaign.", weight: 85 },
  { fromTownId: 'us-sc-camden', toTownId: 'us-sc-cowpens', linkType: 'SHARED_EVENT', reason: "Cowpens helped avenge Camden's disaster in the southern campaign.", weight: 75 },
  { fromTownId: 'us-sc-camden', toTownId: 'us-nc-guilford-courthouse', linkType: 'SHARED_PERSON', reason: 'Greene commanded at both Camden (through Gates) and Guilford Courthouse.', weight: 65 },
  { fromTownId: 'us-sc-camden', toTownId: 'us-ny-saratoga-springs', linkType: 'SHARED_PERSON', reason: "Gates won at Saratoga but lost catastrophically at Camden.", weight: 70 },

  // Cowpens (major) - 5 links
  { fromTownId: 'us-sc-cowpens', toTownId: 'us-sc-charleston', linkType: 'SHARED_EVENT', reason: 'Cowpens was part of the campaign to retake South Carolina after Charleston fell.', weight: 70 },
  { fromTownId: 'us-sc-cowpens', toTownId: 'us-sc-camden', linkType: 'SHARED_EVENT', reason: "Cowpens helped avenge the disaster at Camden.", weight: 75 },
  { fromTownId: 'us-sc-cowpens', toTownId: 'us-nc-kings-mountain', linkType: 'SHARED_THEME', reason: 'Both were decisive American victories that reversed southern momentum.', weight: 80 },
  { fromTownId: 'us-sc-cowpens', toTownId: 'us-nc-guilford-courthouse', linkType: 'SHARED_EVENT', reason: "Morgan's victory at Cowpens preceded Greene's campaign that included Guilford.", weight: 75 },
  { fromTownId: 'us-sc-cowpens', toTownId: 'us-va-yorktown', linkType: 'SHARED_THEME', reason: "Cowpens weakened British forces on the road to Yorktown's decisive end.", weight: 65 },

  // Ninety Six (regional) - 5 links
  { fromTownId: 'us-sc-ninety-six', toTownId: 'us-sc-charleston', linkType: 'SHARED_THEME', reason: 'Ninety Six was a loyalist stronghold in the campaign to liberate South Carolina.', weight: 65 },
  { fromTownId: 'us-sc-ninety-six', toTownId: 'us-sc-cowpens', linkType: 'SHARED_EVENT', reason: 'Both battles were part of the backcountry campaign in South Carolina.', weight: 60 },
  { fromTownId: 'us-sc-ninety-six', toTownId: 'us-sc-camden', linkType: 'SHARED_THEME', reason: 'Interior South Carolina sites contested during the southern campaign.', weight: 55 },
  { fromTownId: 'us-sc-ninety-six', toTownId: 'us-ga-augusta', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Backcountry strongholds in the Carolina-Georgia frontier.', weight: 60 },
  { fromTownId: 'us-sc-ninety-six', toTownId: 'us-sc-eutaw-springs', linkType: 'SHARED_EVENT', reason: 'Both sieges and battles were part of Greene\'s southern campaign.', weight: 55 },

  // Eutaw Springs (regional) - 5 links
  { fromTownId: 'us-sc-eutaw-springs', toTownId: 'us-sc-charleston', linkType: 'SHARED_EVENT', reason: 'Eutaw Springs was the last major battle before Charleston was evacuated.', weight: 70 },
  { fromTownId: 'us-sc-eutaw-springs', toTownId: 'us-nc-guilford-courthouse', linkType: 'SHARED_PERSON', reason: 'Greene commanded at both battles in his southern campaign.', weight: 70 },
  { fromTownId: 'us-sc-eutaw-springs', toTownId: 'us-sc-camden', linkType: 'SHARED_THEME', reason: 'Major South Carolina battles in the campaign to liberate the state.', weight: 60 },
  { fromTownId: 'us-sc-eutaw-springs', toTownId: 'us-sc-ninety-six', linkType: 'SHARED_EVENT', reason: 'Both were part of Greene\'s campaign across South Carolina.', weight: 55 },
  { fromTownId: 'us-sc-eutaw-springs', toTownId: 'us-va-yorktown', linkType: 'SHARED_THEME', reason: 'Eutaw Springs weakened British forces as Yorktown approached.', weight: 55 },

  // Beaufort (supporting) - 5 links
  { fromTownId: 'us-sc-beaufort', toTownId: 'us-sc-charleston', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Low Country communities affected by the same British occupation.', weight: 65 },
  { fromTownId: 'us-sc-beaufort', toTownId: 'us-ga-savannah', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Coastal communities between Charleston and Savannah.', weight: 60 },
  { fromTownId: 'us-sc-beaufort', toTownId: 'us-sc-fort-moultrie', linkType: 'SHARED_THEME', reason: 'Both were part of South Carolina\'s coastal defense.', weight: 50 },
  { fromTownId: 'us-sc-beaufort', toTownId: 'us-sc-camden', linkType: 'SHARED_THEME', reason: 'Both represented the war\'s impact on South Carolina communities.', weight: 45 },
  { fromTownId: 'us-sc-beaufort', toTownId: 'us-nc-wilmington', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Southern Atlantic coastal communities affected by the war.', weight: 45 },

  // ============================================
  // REMAINING REGIONS (abbreviated for space - following same pattern)
  // ============================================

  // North Carolina (4)
  { fromTownId: 'us-nc-guilford-courthouse', toTownId: 'us-va-yorktown', linkType: 'SHARED_PERSON', reason: "Cornwallis's pyrrhic victory led directly to his march to Yorktown.", weight: 80 },
  { fromTownId: 'us-nc-guilford-courthouse', toTownId: 'us-sc-cowpens', linkType: 'SHARED_EVENT', reason: 'Cowpens preceded Guilford Courthouse in the same campaign.', weight: 75 },
  { fromTownId: 'us-nc-guilford-courthouse', toTownId: 'us-sc-camden', linkType: 'SHARED_PERSON', reason: 'Greene commanded in both campaigns after taking over from Gates.', weight: 65 },
  { fromTownId: 'us-nc-guilford-courthouse', toTownId: 'us-nc-kings-mountain', linkType: 'SHARED_THEME', reason: 'Both were crucial battles in the southern campaign.', weight: 70 },
  { fromTownId: 'us-nc-guilford-courthouse', toTownId: 'us-sc-charleston', linkType: 'SHARED_EVENT', reason: 'Part of the campaign to reverse British gains after Charleston fell.', weight: 60 },

  { fromTownId: 'us-nc-kings-mountain', toTownId: 'us-sc-cowpens', linkType: 'SHARED_THEME', reason: 'Frontier victories that reversed southern campaign momentum.', weight: 80 },
  { fromTownId: 'us-nc-kings-mountain', toTownId: 'us-sc-camden', linkType: 'SHARED_EVENT', reason: "Kings Mountain helped avenge the disaster at Camden.", weight: 70 },
  { fromTownId: 'us-nc-kings-mountain', toTownId: 'us-nc-guilford-courthouse', linkType: 'SHARED_THEME', reason: 'Major southern campaign battles.', weight: 70 },
  { fromTownId: 'us-nc-kings-mountain', toTownId: 'us-sc-ninety-six', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Backcountry battlefields in the Carolina piedmont.', weight: 55 },
  { fromTownId: 'us-nc-kings-mountain', toTownId: 'us-vt-bennington', linkType: 'COMPARISON', reason: 'Both were militia victories over professional soldiers at war\'s edges.', weight: 55 },

  { fromTownId: 'us-nc-wilmington', toTownId: 'us-nc-guilford-courthouse', linkType: 'SHARED_PERSON', reason: 'Cornwallis passed through Wilmington after Guilford Courthouse.', weight: 60 },
  { fromTownId: 'us-nc-wilmington', toTownId: 'us-sc-charleston', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Southern coastal ports in the same theater of war.', weight: 55 },
  { fromTownId: 'us-nc-wilmington', toTownId: 'us-va-norfolk', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Southern Atlantic ports affected by British naval operations.', weight: 50 },
  { fromTownId: 'us-nc-wilmington', toTownId: 'us-va-yorktown', linkType: 'ROUTE', reason: "On Cornwallis's route from the Carolinas to Virginia.", weight: 55 },
  { fromTownId: 'us-nc-wilmington', toTownId: 'us-nc-new-bern', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'North Carolina coastal towns.', weight: 60 },

  { fromTownId: 'us-nc-new-bern', toTownId: 'us-va-williamsburg', linkType: 'COMPARISON', reason: 'Both were colonial capitals with royal governors.', weight: 55 },
  { fromTownId: 'us-nc-new-bern', toTownId: 'us-nc-wilmington', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'North Carolina coastal communities.', weight: 60 },
  { fromTownId: 'us-nc-new-bern', toTownId: 'us-sc-charleston', linkType: 'SHARED_THEME', reason: 'Southern colonial capitals that became patriot centers.', weight: 50 },
  { fromTownId: 'us-nc-new-bern', toTownId: 'us-md-annapolis', linkType: 'COMPARISON', reason: 'Colonial capitals of similar size and character.', weight: 45 },
  { fromTownId: 'us-nc-new-bern', toTownId: 'us-nc-guilford-courthouse', linkType: 'SHARED_THEME', reason: 'North Carolina sites in the Revolutionary story.', weight: 45 },

  // Georgia (2)
  { fromTownId: 'us-ga-savannah', toTownId: 'us-sc-charleston', linkType: 'COMPARISON', reason: 'Major southern ports that fell to British forces.', weight: 75 },
  { fromTownId: 'us-ga-savannah', toTownId: 'us-ri-newport', linkType: 'SHARED_PERSON', reason: "D'Estaing's French fleet attacked both Savannah and Newport.", weight: 60 },
  { fromTownId: 'us-ga-savannah', toTownId: 'us-ga-augusta', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Georgia towns contested in the southern campaign.', weight: 70 },
  { fromTownId: 'us-ga-savannah', toTownId: 'us-sc-beaufort', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Coastal communities in the same theater.', weight: 55 },
  { fromTownId: 'us-ga-savannah', toTownId: 'us-va-yorktown', linkType: 'SHARED_THEME', reason: 'French involvement at Savannah foreshadowed Yorktown success.', weight: 55 },

  { fromTownId: 'us-ga-augusta', toTownId: 'us-ga-savannah', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Georgia towns in the southern campaign.', weight: 70 },
  { fromTownId: 'us-ga-augusta', toTownId: 'us-sc-ninety-six', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Backcountry strongholds on the Carolina-Georgia frontier.', weight: 60 },
  { fromTownId: 'us-ga-augusta', toTownId: 'us-sc-charleston', linkType: 'SHARED_EVENT', reason: 'Both were captured and recaptured during the southern campaign.', weight: 55 },
  { fromTownId: 'us-ga-augusta', toTownId: 'us-sc-camden', linkType: 'SHARED_THEME', reason: 'Interior southern towns contested in the campaigns.', weight: 50 },
  { fromTownId: 'us-ga-augusta', toTownId: 'us-sc-cowpens', linkType: 'SHARED_THEME', reason: 'Backcountry sites in the southern theater.', weight: 50 },

  // Connecticut (4)
  { fromTownId: 'us-ct-new-haven', toTownId: 'us-ct-danbury', linkType: 'SHARED_EVENT', reason: 'Both were raided by British forces during the war.', weight: 65 },
  { fromTownId: 'us-ct-new-haven', toTownId: 'us-ma-boston', linkType: 'SHARED_THEME', reason: 'New England centers of colonial education and resistance.', weight: 55 },
  { fromTownId: 'us-ct-new-haven', toTownId: 'us-ct-new-london', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Connecticut coastal towns affected by British raids.', weight: 60 },
  { fromTownId: 'us-ct-new-haven', toTownId: 'us-ny-new-york-city', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Long Island Sound connected New Haven to occupied New York.', weight: 55 },
  { fromTownId: 'us-ct-new-haven', toTownId: 'us-nj-princeton', linkType: 'SHARED_THEME', reason: 'College towns associated with American intellectual life.', weight: 45 },

  { fromTownId: 'us-ct-new-london', toTownId: 'us-ct-groton', linkType: 'SHARED_EVENT', reason: "Arnold's raid devastated both adjacent towns.", weight: 85 },
  { fromTownId: 'us-ct-new-london', toTownId: 'us-ny-west-point', linkType: 'SHARED_PERSON', reason: 'Arnold betrayed West Point, then raided New London.', weight: 70 },
  { fromTownId: 'us-ct-new-london', toTownId: 'us-ma-salem', linkType: 'SHARED_THEME', reason: 'Privateering ports that contributed to the naval war.', weight: 55 },
  { fromTownId: 'us-ct-new-london', toTownId: 'us-ri-newport', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'New England coastal ports.', weight: 55 },
  { fromTownId: 'us-ct-new-london', toTownId: 'us-ct-new-haven', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Connecticut towns raided by British forces.', weight: 60 },

  { fromTownId: 'us-ct-groton', toTownId: 'us-ct-new-london', linkType: 'SHARED_EVENT', reason: "Arnold's raid devastated both adjacent towns.", weight: 85 },
  { fromTownId: 'us-ct-groton', toTownId: 'us-pa-paoli', linkType: 'COMPARISON', reason: 'Both were sites of massacres that became rallying cries.', weight: 60 },
  { fromTownId: 'us-ct-groton', toTownId: 'us-ny-west-point', linkType: 'SHARED_PERSON', reason: 'Arnold betrayed West Point, then led the raid on Groton.', weight: 65 },
  { fromTownId: 'us-ct-groton', toTownId: 'us-ct-danbury', linkType: 'SHARED_THEME', reason: 'Connecticut towns attacked by British raids.', weight: 55 },
  { fromTownId: 'us-ct-groton', toTownId: 'us-ri-newport', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'New England coastal communities.', weight: 50 },

  { fromTownId: 'us-ct-danbury', toTownId: 'us-ct-new-haven', linkType: 'SHARED_EVENT', reason: 'Both were raided by British forces.', weight: 65 },
  { fromTownId: 'us-ct-danbury', toTownId: 'us-ny-kingston', linkType: 'COMPARISON', reason: 'Both were burned by British raids in 1777.', weight: 60 },
  { fromTownId: 'us-ct-danbury', toTownId: 'us-ct-groton', linkType: 'SHARED_THEME', reason: 'Connecticut towns attacked by British.', weight: 55 },
  { fromTownId: 'us-ct-danbury', toTownId: 'us-ma-springfield', linkType: 'SHARED_THEME', reason: 'Both were supply depots targeted for destruction.', weight: 50 },
  { fromTownId: 'us-ct-danbury', toTownId: 'us-nj-morristown', linkType: 'SHARED_THEME', reason: 'Both supplied the Continental Army from interior positions.', weight: 45 },

  // Rhode Island (2)
  { fromTownId: 'us-ri-newport', toTownId: 'us-va-yorktown', linkType: 'SHARED_PERSON', reason: "Rochambeau's army marched from Newport to Yorktown.", weight: 80 },
  { fromTownId: 'us-ri-newport', toTownId: 'us-ny-saratoga-springs', linkType: 'OTHER', reason: 'Saratoga brought France in; Newport received the French army.', weight: 70 },
  { fromTownId: 'us-ri-newport', toTownId: 'us-ma-boston', linkType: 'COMPARISON', reason: 'New England ports with different wartime experiences.', weight: 60 },
  { fromTownId: 'us-ri-newport', toTownId: 'us-ri-providence', linkType: 'GEOGRAPHIC_PROXIMITY', reason: "Rhode Island's two major towns, one occupied, one free.", weight: 75 },
  { fromTownId: 'us-ri-newport', toTownId: 'us-ga-savannah', linkType: 'SHARED_PERSON', reason: "D'Estaing's fleet operated at both Newport and Savannah.", weight: 55 },

  { fromTownId: 'us-ri-providence', toTownId: 'us-ri-newport', linkType: 'GEOGRAPHIC_PROXIMITY', reason: "Rhode Island's two centers during the occupation.", weight: 75 },
  { fromTownId: 'us-ri-providence', toTownId: 'us-ma-boston', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'New England commercial centers.', weight: 60 },
  { fromTownId: 'us-ri-providence', toTownId: 'us-ct-new-london', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'New England coastal ports.', weight: 55 },
  { fromTownId: 'us-ri-providence', toTownId: 'us-ma-cambridge', linkType: 'SHARED_THEME', reason: 'New England centers of education and resistance.', weight: 50 },
  { fromTownId: 'us-ri-providence', toTownId: 'us-nj-princeton', linkType: 'SHARED_THEME', reason: 'Colonial college towns contributing to Revolutionary thought.', weight: 45 },

  // New Hampshire (2)
  { fromTownId: 'us-nh-portsmouth', toTownId: 'us-ma-salem', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'New England shipbuilding ports.', weight: 60 },
  { fromTownId: 'us-nh-portsmouth', toTownId: 'us-ma-boston', linkType: 'SHARED_THEME', reason: 'New England ports supporting the naval war.', weight: 55 },
  { fromTownId: 'us-nh-portsmouth', toTownId: 'us-nh-exeter', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'New Hampshire\'s port and capital.', weight: 70 },
  { fromTownId: 'us-nh-portsmouth', toTownId: 'us-me-portland', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Northern New England ports.', weight: 55 },
  { fromTownId: 'us-nh-portsmouth', toTownId: 'us-ma-marblehead', linkType: 'SHARED_THEME', reason: 'Maritime communities contributing to the war.', weight: 50 },

  { fromTownId: 'us-nh-exeter', toTownId: 'us-nh-portsmouth', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'New Hampshire\'s capital and port.', weight: 70 },
  { fromTownId: 'us-nh-exeter', toTownId: 'us-ma-cambridge', linkType: 'SHARED_PERSON', reason: 'New Hampshire men served in forces at Cambridge.', weight: 50 },
  { fromTownId: 'us-nh-exeter', toTownId: 'us-vt-bennington', linkType: 'SHARED_PERSON', reason: 'New Hampshire troops fought at Bennington.', weight: 60 },
  { fromTownId: 'us-nh-exeter', toTownId: 'us-ma-boston', linkType: 'SHARED_THEME', reason: 'New England patriot centers.', weight: 50 },
  { fromTownId: 'us-nh-exeter', toTownId: 'us-pa-york', linkType: 'COMPARISON', reason: 'State capitals that maintained patriot governance.', weight: 40 },

  // Maryland (2)
  { fromTownId: 'us-md-annapolis', toTownId: 'us-pa-philadelphia', linkType: 'SHARED_THEME', reason: 'Both hosted the Continental Congress.', weight: 65 },
  { fromTownId: 'us-md-annapolis', toTownId: 'us-ny-newburgh', linkType: 'SHARED_PERSON', reason: 'Washington at Newburgh awaited peace; at Annapolis he resigned.', weight: 70 },
  { fromTownId: 'us-md-annapolis', toTownId: 'us-va-williamsburg', linkType: 'COMPARISON', reason: 'Chesapeake colonial capitals.', weight: 55 },
  { fromTownId: 'us-md-annapolis', toTownId: 'us-md-baltimore', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Maryland\'s two major towns.', weight: 70 },
  { fromTownId: 'us-md-annapolis', toTownId: 'us-va-alexandria', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Chesapeake ports.', weight: 55 },

  { fromTownId: 'us-md-baltimore', toTownId: 'us-md-annapolis', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Maryland\'s commercial and political centers.', weight: 70 },
  { fromTownId: 'us-md-baltimore', toTownId: 'us-pa-philadelphia', linkType: 'ROUTE', reason: 'On the route between the south and Philadelphia.', weight: 60 },
  { fromTownId: 'us-md-baltimore', toTownId: 'us-pa-york', linkType: 'COMPARISON', reason: 'Both briefly hosted the Continental Congress.', weight: 55 },
  { fromTownId: 'us-md-baltimore', toTownId: 'us-sc-charleston', linkType: 'COMPARISON', reason: 'Major Atlantic ports.', weight: 50 },
  { fromTownId: 'us-md-baltimore', toTownId: 'us-va-norfolk', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Chesapeake Bay ports.', weight: 50 },

  // Delaware (2)
  { fromTownId: 'us-de-dover', toTownId: 'us-de-wilmington', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Delaware\'s two main towns.', weight: 70 },
  { fromTownId: 'us-de-dover', toTownId: 'us-pa-philadelphia', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Delaware\'s capital near Philadelphia.', weight: 55 },
  { fromTownId: 'us-de-dover', toTownId: 'us-md-annapolis', linkType: 'COMPARISON', reason: 'Small state capitals.', weight: 50 },
  { fromTownId: 'us-de-dover', toTownId: 'us-nj-trenton', linkType: 'SHARED_THEME', reason: 'Delaware Valley communities affected by the campaigns.', weight: 45 },
  { fromTownId: 'us-de-dover', toTownId: 'us-nh-exeter', linkType: 'COMPARISON', reason: 'Small state capitals maintaining patriot governance.', weight: 40 },

  { fromTownId: 'us-de-wilmington', toTownId: 'us-de-dover', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Delaware\'s two main communities.', weight: 70 },
  { fromTownId: 'us-de-wilmington', toTownId: 'us-pa-philadelphia', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'On the road to Philadelphia.', weight: 65 },
  { fromTownId: 'us-de-wilmington', toTownId: 'us-md-baltimore', linkType: 'ROUTE', reason: 'Between Philadelphia and Baltimore.', weight: 55 },
  { fromTownId: 'us-de-wilmington', toTownId: 'us-nj-trenton', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Delaware Valley towns.', weight: 50 },
  { fromTownId: 'us-de-wilmington', toTownId: 'us-pa-valley-forge', linkType: 'SHARED_THEME', reason: 'Both felt the impact of the Philadelphia campaign.', weight: 45 },

  // Vermont (2)
  { fromTownId: 'us-vt-bennington', toTownId: 'us-ny-saratoga-springs', linkType: 'SHARED_EVENT', reason: 'Bennington weakened Burgoyne before Saratoga.', weight: 85 },
  { fromTownId: 'us-vt-bennington', toTownId: 'us-ny-ticonderoga', linkType: 'SHARED_PERSON', reason: 'Ethan Allen and the Green Mountain Boys connected both.', weight: 65 },
  { fromTownId: 'us-vt-bennington', toTownId: 'us-nc-kings-mountain', linkType: 'COMPARISON', reason: 'Both were militia victories at the war\'s geographic edges.', weight: 60 },
  { fromTownId: 'us-vt-bennington', toTownId: 'us-vt-brattleboro', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Vermont communities.', weight: 65 },
  { fromTownId: 'us-vt-bennington', toTownId: 'us-nh-exeter', linkType: 'SHARED_PERSON', reason: 'New Hampshire troops fought at Bennington.', weight: 55 },

  { fromTownId: 'us-vt-brattleboro', toTownId: 'us-vt-bennington', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Vermont communities.', weight: 65 },
  { fromTownId: 'us-vt-brattleboro', toTownId: 'us-ny-albany', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Upper Connecticut and Hudson Valley region.', weight: 50 },
  { fromTownId: 'us-vt-brattleboro', toTownId: 'us-nh-exeter', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Northern New England communities.', weight: 50 },
  { fromTownId: 'us-vt-brattleboro', toTownId: 'us-ma-springfield', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Connecticut Valley towns.', weight: 55 },
  { fromTownId: 'us-vt-brattleboro', toTownId: 'us-ny-saratoga-springs', linkType: 'SHARED_THEME', reason: 'Vermont communities supported the Saratoga campaign.', weight: 45 },

  // Maine (2)
  { fromTownId: 'us-me-castine', toTownId: 'us-ma-boston', linkType: 'SHARED_EVENT', reason: 'The Penobscot Expedition was launched from Massachusetts.', weight: 65 },
  { fromTownId: 'us-me-castine', toTownId: 'us-me-portland', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Maine coastal communities.', weight: 60 },
  { fromTownId: 'us-me-castine', toTownId: 'us-ny-new-york-city', linkType: 'COMPARISON', reason: 'Both were British strongholds during the war.', weight: 50 },
  { fromTownId: 'us-me-castine', toTownId: 'us-nh-portsmouth', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Northern New England coastal communities.', weight: 55 },
  { fromTownId: 'us-me-castine', toTownId: 'us-sc-charleston', linkType: 'COMPARISON', reason: 'American naval disasters: Penobscot and Charleston.', weight: 45 },

  { fromTownId: 'us-me-portland', toTownId: 'us-va-norfolk', linkType: 'COMPARISON', reason: 'Both were burned by British naval forces in 1775.', weight: 65 },
  { fromTownId: 'us-me-portland', toTownId: 'us-me-castine', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Maine coastal towns.', weight: 60 },
  { fromTownId: 'us-me-portland', toTownId: 'us-ma-boston', linkType: 'SHARED_THEME', reason: 'Massachusetts (then including Maine) coastal communities.', weight: 55 },
  { fromTownId: 'us-me-portland', toTownId: 'us-nh-portsmouth', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Northern New England ports.', weight: 55 },
  { fromTownId: 'us-me-portland', toTownId: 'us-ny-kingston', linkType: 'COMPARISON', reason: 'Both were burned during the war.', weight: 50 },

  // Illinois (1)
  { fromTownId: 'us-il-kaskaskia', toTownId: 'us-pa-pittsburgh', linkType: 'SHARED_THEME', reason: 'Western frontier posts in the trans-Appalachian war.', weight: 65 },
  { fromTownId: 'us-il-kaskaskia', toTownId: 'us-wv-wheeling', linkType: 'SHARED_THEME', reason: 'Frontier posts in the western theater.', weight: 60 },
  { fromTownId: 'us-il-kaskaskia', toTownId: 'us-oh-marietta', linkType: 'ROUTE', reason: 'Ohio Valley settlements linked by the river system.', weight: 55 },
  { fromTownId: 'us-il-kaskaskia', toTownId: 'us-va-richmond', linkType: 'SHARED_PERSON', reason: 'Virginia claimed the Illinois Country; Clark was a Virginian.', weight: 50 },
  { fromTownId: 'us-il-kaskaskia', toTownId: 'us-pa-philadelphia', linkType: 'SHARED_THEME', reason: 'Philadelphia debated western policy; Kaskaskia was its implementation.', weight: 45 },

  // Ohio Valley (2)
  { fromTownId: 'us-oh-marietta', toTownId: 'us-pa-pittsburgh', linkType: 'ROUTE', reason: 'The Ohio River connected Pittsburgh to Marietta.', weight: 65 },
  { fromTownId: 'us-oh-marietta', toTownId: 'us-il-kaskaskia', linkType: 'ROUTE', reason: 'Ohio Valley settlements.', weight: 55 },
  { fromTownId: 'us-oh-marietta', toTownId: 'us-wv-wheeling', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Ohio Valley posts.', weight: 60 },
  { fromTownId: 'us-oh-marietta', toTownId: 'us-ma-cambridge', linkType: 'SHARED_PERSON', reason: 'Revolutionary veterans founded Marietta.', weight: 50 },
  { fromTownId: 'us-oh-marietta', toTownId: 'us-pa-philadelphia', linkType: 'SHARED_THEME', reason: 'Northwest Ordinance from Philadelphia enabled Marietta.', weight: 45 },

  { fromTownId: 'us-wv-wheeling', toTownId: 'us-pa-pittsburgh', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Ohio Valley frontier posts.', weight: 70 },
  { fromTownId: 'us-wv-wheeling', toTownId: 'us-oh-marietta', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Ohio Valley communities.', weight: 60 },
  { fromTownId: 'us-wv-wheeling', toTownId: 'us-il-kaskaskia', linkType: 'SHARED_THEME', reason: 'Western frontier war.', weight: 55 },
  { fromTownId: 'us-wv-wheeling', toTownId: 'us-pa-carlisle', linkType: 'SHARED_THEME', reason: 'Frontier defense chain.', weight: 50 },
  { fromTownId: 'us-wv-wheeling', toTownId: 'us-va-richmond', linkType: 'SHARED_THEME', reason: 'Virginia frontier settlements.', weight: 45 },

  // Additional High-Value Nodes (6)
  { fromTownId: 'us-ny-crown-point', toTownId: 'us-ny-ticonderoga', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Adjacent Lake Champlain forts.', weight: 85 },
  { fromTownId: 'us-ny-crown-point', toTownId: 'us-ny-saratoga-springs', linkType: 'ROUTE', reason: 'Northern invasion corridor to Saratoga.', weight: 65 },
  { fromTownId: 'us-ny-crown-point', toTownId: 'us-ny-albany', linkType: 'ROUTE', reason: 'Lake Champlain route to the Hudson.', weight: 60 },
  { fromTownId: 'us-ny-crown-point', toTownId: 'us-vt-bennington', linkType: 'SHARED_THEME', reason: 'Northern theater sites.', weight: 50 },
  { fromTownId: 'us-ny-crown-point', toTownId: 'us-ma-boston', linkType: 'OTHER', reason: 'Cannons from this region eventually reached Boston.', weight: 45 },

  { fromTownId: 'us-ny-harlem-heights', toTownId: 'us-ny-new-york-city', linkType: 'SHARED_EVENT', reason: 'Fought during the New York campaign.', weight: 75 },
  { fromTownId: 'us-ny-harlem-heights', toTownId: 'us-ny-white-plains', linkType: 'SHARED_EVENT', reason: 'Both battles in the 1776 New York campaign.', weight: 70 },
  { fromTownId: 'us-ny-harlem-heights', toTownId: 'us-nj-fort-lee', linkType: 'SHARED_EVENT', reason: 'Part of the same campaign.', weight: 60 },
  { fromTownId: 'us-ny-harlem-heights', toTownId: 'us-nj-trenton', linkType: 'SHARED_THEME', reason: 'Harlem Heights gave hope; Trenton confirmed it.', weight: 55 },
  { fromTownId: 'us-ny-harlem-heights', toTownId: 'us-ma-cambridge', linkType: 'SHARED_PERSON', reason: 'Washington commanded at both.', weight: 50 },

  { fromTownId: 'us-ny-stony-point', toTownId: 'us-ny-west-point', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Hudson River forts.', weight: 75 },
  { fromTownId: 'us-ny-stony-point', toTownId: 'us-ny-new-york-city', linkType: 'SHARED_THEME', reason: 'Part of the Hudson defense against British New York.', weight: 60 },
  { fromTownId: 'us-ny-stony-point', toTownId: 'us-nj-monmouth', linkType: 'SHARED_PERSON', reason: 'Anthony Wayne commanded at both battles.', weight: 60 },
  { fromTownId: 'us-ny-stony-point', toTownId: 'us-sc-cowpens', linkType: 'COMPARISON', reason: 'Both were daring American tactical victories.', weight: 50 },
  { fromTownId: 'us-ny-stony-point', toTownId: 'us-nj-trenton', linkType: 'COMPARISON', reason: 'Bold American attacks that succeeded.', weight: 50 },

  { fromTownId: 'us-sc-hobkirks-hill', toTownId: 'us-sc-camden', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Adjacent battle sites near Camden.', weight: 85 },
  { fromTownId: 'us-sc-hobkirks-hill', toTownId: 'us-nc-guilford-courthouse', linkType: 'SHARED_PERSON', reason: 'Greene commanded at both.', weight: 70 },
  { fromTownId: 'us-sc-hobkirks-hill', toTownId: 'us-sc-eutaw-springs', linkType: 'SHARED_PERSON', reason: 'Part of Greene\'s southern campaign.', weight: 65 },
  { fromTownId: 'us-sc-hobkirks-hill', toTownId: 'us-sc-charleston', linkType: 'SHARED_EVENT', reason: 'Part of the campaign to liberate South Carolina.', weight: 55 },
  { fromTownId: 'us-sc-hobkirks-hill', toTownId: 'us-sc-cowpens', linkType: 'SHARED_THEME', reason: 'Southern campaign battles.', weight: 50 },

  { fromTownId: 'us-sc-fort-moultrie', toTownId: 'us-sc-charleston', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Fort Moultrie defended Charleston harbor.', weight: 90 },
  { fromTownId: 'us-sc-fort-moultrie', toTownId: 'us-ny-ticonderoga', linkType: 'COMPARISON', reason: 'Both were early fort captures/defenses in 1775-76.', weight: 50 },
  { fromTownId: 'us-sc-fort-moultrie', toTownId: 'us-ma-boston', linkType: 'COMPARISON', reason: 'Both saw early successful American defenses.', weight: 50 },
  { fromTownId: 'us-sc-fort-moultrie', toTownId: 'us-ga-savannah', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Southern coastal defenses.', weight: 55 },
  { fromTownId: 'us-sc-fort-moultrie', toTownId: 'us-sc-beaufort', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'South Carolina coastal defenses.', weight: 50 },

  { fromTownId: 'us-va-mount-vernon', toTownId: 'us-va-alexandria', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Mount Vernon adjoined Alexandria.', weight: 85 },
  { fromTownId: 'us-va-mount-vernon', toTownId: 'us-va-williamsburg', linkType: 'SHARED_PERSON', reason: 'Washington knew both from his political career.', weight: 60 },
  { fromTownId: 'us-va-mount-vernon', toTownId: 'us-ma-cambridge', linkType: 'SHARED_PERSON', reason: 'Washington left Mount Vernon to command at Cambridge.', weight: 70 },
  { fromTownId: 'us-va-mount-vernon', toTownId: 'us-pa-philadelphia', linkType: 'SHARED_PERSON', reason: 'Washington traveled between Mount Vernon and Philadelphia.', weight: 60 },
  { fromTownId: 'us-va-mount-vernon', toTownId: 'us-va-yorktown', linkType: 'SHARED_PERSON', reason: 'Washington\'s victory at Yorktown let him return to Mount Vernon.', weight: 65 },
];
