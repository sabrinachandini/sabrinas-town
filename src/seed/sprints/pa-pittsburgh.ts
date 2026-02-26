// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// Pittsburgh, PA
// Campaign: Fort Pitt, western frontier defense, Ohio Valley operations, 1758–1783

import { Prisma } from '@prisma/client';

/**
 * Pittsburgh, PA — Fort Pitt and the Western Frontier
 *
 * Pittsburgh's role in the Revolution is inseparable from its geography: the
 * confluence of the Allegheny and Monongahela Rivers, forming the Ohio, made
 * Fort Pitt the single most important strategic position on the American
 * western frontier. The fort was the staging point for Continental operations
 * into the Ohio Valley, a supply depot for George Rogers Clark's Illinois
 * campaigns, and the defensive anchor against British-allied Native American
 * raids throughout western Pennsylvania and Virginia.
 *
 * NOTE ON VERIFICATION: Historical content synthesized from John Ferling's
 * "A Leap in the Dark," Fred Anderson's "Crucible of War," C. Hale Sipe's
 * "The Indian Wars of Pennsylvania," Neville Craig's "The History of Pittsburgh,"
 * Randolph Downes' "Council Fires on the Upper Ohio," and the Pennsylvania
 * Archives. Stories marked VERIFIED have strong documentary evidence. Figures
 * connected primarily through local tradition or single-source accounts carry
 * ANECDOTAL status.
 */

// ============================================================================
// PITTSBURGH
// ============================================================================

export const pittsburghTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Pittsburgh in the Revolutionary War was not a battlefield in any conventional sense. No major engagement between Continental and British regulars took place at the Forks of the Ohio. What happened there was something more sustained and in some respects more consequential: for eight years, Fort Pitt served as the linchpin of the entire American western strategy, the supply base from which Continental forces reached into the Ohio Valley, and the one fixed point that kept the western frontier from collapsing entirely.

The geography explains everything. Where the Allegheny River comes down from the northeast and the Monongahela comes up from the southwest, they meet to form the Ohio, which flows nearly a thousand miles to the Mississippi. Whoever controlled that confluence controlled the practical gateway to the interior of a continent. The French had understood this in 1754, which is why they built Fort Duquesne on the exact spot. The British understood it when General Forbes destroyed Fort Duquesne in 1758 and immediately built a larger fort on the same ground and named it for William Pitt. The Americans understood it when they took over the fort in 1775 and turned it into the westernmost anchor of the Continental supply system.

Fort Pitt's role as a supply depot defined its wartime function. George Rogers Clark's legendary 1778–1779 campaign, which secured American claims to the Illinois country by capturing Kaskaskia, Cahokia, and Vincennes, was organized and partly supplied through Pittsburgh. The men and materiel that moved down the Ohio from Fort Pitt made Clark's audacious winter campaign logistically possible. Without the Forks of the Ohio as a staging point, the Illinois country question would have looked very different by the time peace negotiations began.

The defensive function was equally important and far more visible to the people who lived there. From 1776 onward, western Pennsylvania was subjected to repeated raids by Native American war parties allied with the British — primarily Shawnee, Mingo, and Delaware warriors operating from towns in the Ohio country. The raids struck farms, killed settlers, and drove hundreds of families back toward the mountains. Fort Pitt and the network of smaller stations and blockhouses it supported were what stood between those raiding parties and the total abandonment of the western settlements.

Colonel Daniel Brodhead commanded at Fort Pitt from 1779 to 1781 and conducted the most significant offensive operation directly out of the fort: a raid up the Allegheny River in August 1779 that destroyed a series of Seneca and Munsee towns and temporarily reduced the pressure on western Pennsylvania's northern settlements. It was a brutal campaign by any measure — the destruction of Indian towns and food stores was deliberate and comprehensive — but it was also strategically coherent within the logic of frontier warfare as both sides practiced it.

The name William Crawford is inseparable from Pittsburgh's revolutionary history and from its darkest chapter. Crawford was a Virginia militia colonel who led the disastrous Sandusky expedition of June 1782, a punitive raid into Ohio country that ended in the capture of Crawford himself. He was tortured and burned at the stake by Delaware warriors, in part as retribution for the Gnadenhutten massacre of March 1782, in which Pennsylvania militia had killed nearly a hundred Christian Delaware men, women, and children at a Moravian mission village. Crawford had not been at Gnadenhutten, but he commanded men who had, and the Delaware did not draw fine distinctions. His death reverberated through Pittsburgh and western Pennsylvania for generations.

John Neville represents a different kind of Pittsburgh figure: the frontier gentry who accumulated land, commanded militia, and navigated the intersection of military service, political ambition, and economic interest that characterized the western Pennsylvania elite. Neville served as a Continental officer, participated in frontier defense operations, and later became one of the most prominent figures in the region — known ultimately for his role in the Whiskey Rebellion of 1794, a postwar chapter that revealed how much tension the Revolution had created rather than resolved.

The Treaty of Paris in 1783 assigned the Ohio Valley to the United States largely on the basis of Clark's campaigns and the sustained American presence at Fort Pitt. Neither would have been possible without the fort's function as a supply and logistics hub. Pittsburgh's contribution to the Revolution was not dramatic in the way that Bunker Hill or Yorktown was dramatic. It was organizational, logistical, and sustained over eight years of grinding frontier warfare. That kind of contribution is harder to commemorate than a single battle, but it is the kind that determines outcomes.

The city that grew from the fort — incorporated as Pittsburgh in 1816, though the name had been used informally since the 1760s — carried the marks of its frontier origins well into the nineteenth century. The river geography that made it strategically vital in 1758 made it industrially dominant by 1860. The confluence that the French and British fought over, that Clark's men floated past on their way to the Illinois country, that Daniel Brodhead's soldiers used as their base of operations, eventually became the center of American iron and steel production. The fort is gone, reduced to a preserved outline in a public park at the tip of the Point. The rivers remain.`,
};

// ============================================================================
// PITTSBURGH — PEOPLE
// ============================================================================

export const pittsburghPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-daniel-brodhead',
      name: 'Daniel Brodhead',
      roles: [
        'Continental Army Colonel',
        'Fort Pitt Commandant',
        'Western Department Commander',
      ],
      bioShort:
        'Pennsylvania Continental colonel who commanded Fort Pitt from 1779 to 1781. Led the Brodhead Expedition of August 1779 up the Allegheny River, destroying Seneca and Munsee towns to relieve pressure on western Pennsylvania settlements. His tenure represented the most active Continental offensive operations out of Pittsburgh during the war.',
      birthYear: 1736,
      deathYear: 1809,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded Fort Pitt 1779–1781; launched the Allegheny Expedition from Pittsburgh in August 1779.',
  },
  {
    person: {
      id: 'person-william-crawford',
      name: 'William Crawford',
      roles: [
        'Virginia Militia Colonel',
        'Continental Army Officer',
        'Land Surveyor',
        'Washington Associate',
      ],
      bioShort:
        'Virginia militia colonel and land surveyor closely associated with George Washington, who served in frontier defense operations out of Pittsburgh. Led the Sandusky Expedition of June 1782 into Ohio country, was captured after the expedition\'s defeat, and was burned at the stake by Delaware warriors. His death became one of the defining tragedies of the western frontier war.',
      birthYear: 1722,
      deathYear: 1782,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Based at Pittsburgh area for frontier operations; led the ill-fated Sandusky Expedition from the region in 1782.',
  },
  {
    person: {
      id: 'person-john-neville',
      name: 'John Neville',
      roles: [
        'Continental Army Colonel',
        'Virginia and Pennsylvania Militia Commander',
        'Western Pennsylvania Landowner',
      ],
      bioShort:
        'Virginia-born Continental officer and western Pennsylvania land speculator who commanded militia forces in the Pittsburgh region throughout the war. Participated in frontier defense operations and later became one of the most prominent figures in western Pennsylvania, eventually a central antagonist in the 1794 Whiskey Rebellion.',
      birthYear: 1731,
      deathYear: 1803,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded militia forces in the Pittsburgh region; one of the dominant military and political figures in western Pennsylvania during the Revolutionary period.',
  },
  {
    person: {
      id: 'person-george-rogers-clark',
      name: 'George Rogers Clark',
      roles: [
        'Virginia Militia General',
        'Illinois Country Campaigner',
        'Western Theater Commander',
      ],
      bioShort:
        'Virginia militia officer who organized and led the 1778–1779 Illinois campaign that captured Kaskaskia, Cahokia, and Vincennes, securing American claims to the Northwest Territory. Pittsburgh served as a key staging and supply point for Clark\'s operations, making Fort Pitt integral to the western theater\'s most consequential American offensive.',
      birthYear: 1752,
      deathYear: 1818,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Organized and partly supplied his Illinois campaigns through Pittsburgh; Fort Pitt was essential to the logistics of the western operations he commanded.',
  },
  {
    person: {
      id: 'person-edward-hand',
      name: 'Edward Hand',
      roles: [
        'Continental Army Brigadier General',
        'Fort Pitt Commandant',
        'Irish-Born Physician',
      ],
      bioShort:
        'Irish-born physician turned Continental general who commanded Fort Pitt from 1777 to 1778. Led the embarrassing "Squaw Campaign" of February 1778, an expedition against British-allied Native American towns that instead killed peaceful Delaware and Mingo individuals, damaging American diplomatic relations with neutral tribes at a critical moment.',
      birthYear: 1744,
      deathYear: 1802,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded Fort Pitt 1777–1778; his tenure illustrated both the importance and the difficulty of managing frontier relations from Pittsburgh.',
  },
  {
    person: {
      id: 'person-lachlan-mcintosh',
      name: 'Lachlan McIntosh',
      roles: [
        'Continental Army Brigadier General',
        'Fort Pitt Commandant',
        'Scottish-Born Georgian',
      ],
      bioShort:
        'Georgia-born Continental general who commanded Fort Pitt from 1778 to 1779, succeeding Edward Hand. Led an abortive expedition toward British-held Fort Detroit that stalled at the Tuscarawas River for lack of supplies. His tenure illustrated the logistical constraints that prevented any serious American offensive toward Detroit throughout the war.',
      birthYear: 1727,
      deathYear: 1806,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded Fort Pitt 1778–1779; attempted and failed to push an expedition toward Detroit, demonstrating the limits of Pittsburgh-based western operations.',
  },
  {
    person: {
      id: 'person-simon-girty',
      name: 'Simon Girty',
      roles: [
        'Frontier Scout',
        'British Interpreter and Ranger',
        'Renegade from American Service',
      ],
      bioShort:
        'Pennsylvania-born frontier scout who defected from American service at Fort Pitt in 1778 and joined the British, becoming one of the most feared raiders on the western frontier. Born near the site of modern Pittsburgh and raised partly among Native Americans after his father\'s death, Girty served as a British interpreter and led or accompanied numerous raids against western Pennsylvania and Ohio Valley settlements.',
      birthYear: 1741,
      deathYear: 1818,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Deserted from Fort Pitt in March 1778 and joined the British; became the western frontier\'s most notorious American-turned-British raider, striking settlements throughout the Pittsburgh hinterland.',
  },
  {
    person: {
      id: 'person-james-smith-frontier',
      name: 'James Smith',
      roles: [
        'Pennsylvania Frontier Militia Captain',
        'Indian Captivity Survivor',
        'Ranger Organizer',
      ],
      bioShort:
        'Western Pennsylvania militia officer who had been captured by the Shawnee as a teenager and spent four years among them, acquiring skills in woodland warfare he later applied as a frontier ranger captain. Organized a company of "Black Boys" frontier rangers in the Pittsburgh region during the war, known for their unconventional tactics adapted from Native American practice.',
      birthYear: 1737,
      deathYear: 1812,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Organized and led frontier ranger companies in the Pittsburgh region; his Indian captivity experience made him one of the most practically effective frontier fighters in western Pennsylvania.',
  },
];

// ============================================================================
// PITTSBURGH — PLACES
// ============================================================================

export const pittsburghPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-pittsburgh-fort-pitt',
    name: 'Fort Pitt Site (Point State Park)',
    placeType: 'LANDMARK',
    description:
      'The site of Fort Pitt, built by the British in 1758–1761 on the ground where Fort Duquesne had stood. At the confluence of the Allegheny and Monongahela Rivers, it was the largest and most expensive fort the British built in North America. During the Revolution, it served as the Continental Army\'s western headquarters, supply depot, and the staging point for operations into the Ohio Valley. The fort\'s outline is preserved in Point State Park, and a reconstructed blockhouse — the only original structure remaining — still stands.',
    lat: 40.4420,
    lng: -80.0076,
    address: 'Point State Park, Pittsburgh, PA 15222',
    town: { connect: { id: 'us-pa-pittsburgh' } },
  },
  {
    id: 'place-pittsburgh-fort-pitt-blockhouse',
    name: 'Fort Pitt Blockhouse',
    placeType: 'HISTORIC_HOUSE',
    description:
      'The only original structure remaining from Fort Pitt, built in 1764 as part of the fort\'s outer defensive works. It survived because it was used as a private residence after the fort was abandoned. During the Revolutionary period, structures like this blockhouse formed the outer defensive perimeter of the fort complex and housed soldiers on watch. The blockhouse is managed by the Daughters of the American Revolution and is open to the public.',
    lat: 40.4424,
    lng: -80.0074,
    address: '601 Commonwealth Pl, Pittsburgh, PA 15222',
    town: { connect: { id: 'us-pa-pittsburgh' } },
  },
  {
    id: 'place-pittsburgh-museum-fort-pitt',
    name: 'Fort Pitt Museum',
    placeType: 'LANDMARK',
    description:
      'Museum built within Point State Park that reconstructs the Monongahela Bastion of Fort Pitt and interprets the French and Indian War and Revolutionary War history of the confluence. Exhibits cover the French Fort Duquesne, the British construction of Fort Pitt, Pontiac\'s War, and the fort\'s role as a Continental Army western base during the Revolution. The museum occupies the footprint of one of the original fort\'s bastions.',
    lat: 40.4418,
    lng: -80.0073,
    address: '601 Commonwealth Pl, Pittsburgh, PA 15222',
    town: { connect: { id: 'us-pa-pittsburgh' } },
  },
  {
    id: 'place-pittsburgh-forks-of-ohio',
    name: 'Forks of the Ohio',
    placeType: 'LANDMARK',
    description:
      'The confluence of the Allegheny and Monongahela Rivers where the Ohio River begins. This geographic feature is the reason Pittsburgh existed: whoever controlled the confluence controlled the practical gateway to the Ohio Valley and the interior of the continent. The French recognized this in 1754 by building Fort Duquesne here; the British confirmed it in 1758 by immediately replacing it with Fort Pitt. The Continental Army maintained a presence here throughout the Revolution as the anchor of western frontier defense.',
    lat: 40.4415,
    lng: -80.0078,
    address: 'Point State Park, Pittsburgh, PA 15222',
    town: { connect: { id: 'us-pa-pittsburgh' } },
  },
  {
    id: 'place-pittsburgh-grant-street-historic',
    name: 'Grant Street Area (Historic Town Lots)',
    placeType: 'LANDMARK',
    description:
      'The area of present-day downtown Pittsburgh where the civilian settlement grew up alongside Fort Pitt during the Revolutionary period. The town laid out near the fort in the 1760s was small — a few dozen structures at most during the Revolution — but it served as a commercial and administrative hub for the western frontier. Taverns, traders, and a small number of permanent residents made it the westernmost recognizable town in Pennsylvania.',
    lat: 40.4397,
    lng: -79.9974,
    address: 'Grant Street, Pittsburgh, PA 15219',
    town: { connect: { id: 'us-pa-pittsburgh' } },
  },
  {
    id: 'place-pittsburgh-neville-house',
    name: 'Neville House Site (Woodville Plantation)',
    placeType: 'HISTORIC_HOUSE',
    description:
      'The plantation of John Neville, Continental colonel and western Pennsylvania\'s most prominent military and political figure during the Revolutionary era. Located south of Pittsburgh near the Chartiers Creek, the house served as a center of frontier gentry life and military planning. The property is historically significant both for the Revolution and for the Whiskey Rebellion of 1794, when it was attacked by frontier farmers protesting the federal excise tax. The current structure dates from the 1790s but the site was active throughout the Revolutionary period.',
    lat: 40.3458,
    lng: -80.1205,
    address: '1375 Washington Pike, Bridgeville, PA 15017',
    town: { connect: { id: 'us-pa-pittsburgh' } },
  },
  {
    id: 'place-pittsburgh-logstown-site',
    name: 'Logstown Site (Economy, PA)',
    placeType: 'LANDMARK',
    description:
      'The site of Logstown, a multi-tribal Native American trading and diplomatic center on the Ohio River about eighteen miles below the Forks, used through the mid-eighteenth century as a meeting ground for British, French, and Native diplomacy. Although largely abandoned by the Revolutionary period, it represents the pre-war diplomatic landscape that shaped the alliances and conflicts of frontier warfare. Treaty negotiations at Logstown in 1752 foreshadowed the conflicts that drew Pittsburgh into the center of continental warfare.',
    lat: 40.6382,
    lng: -80.2064,
    address: 'Economy, PA 15005 (approximate)',
    town: { connect: { id: 'us-pa-pittsburgh' } },
  },
];

// ============================================================================
// PITTSBURGH — EVENTS
// ============================================================================

export const pittsburghEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-pittsburgh-fort-pitt-continental-takeover',
    name: 'Continental Army Assumes Control of Fort Pitt',
    startDate: new Date('1775-08-01'),
    datePrecision: 'MONTH',
    summary: `When hostilities began in April 1775, Fort Pitt was in British hands — but British control of the western frontier was already nominal. Virginia militia forces and Pennsylvania interests had long contested authority over the fort and the surrounding territory. By mid-1775, Continental and Virginia forces effectively took control of the installation, beginning its transformation from a British garrison into the Continental Army's western headquarters.

The transition was not accompanied by fighting — the British garrison was small and the political situation made resistance futile. But the assumption of control had immediate strategic consequences. Fort Pitt became the supply and communications hub for the entire western frontier, the point through which men, arms, and provisions moved toward the Ohio Valley and beyond. Virginia's claims to the territory around Pittsburgh complicated the Continental command structure throughout the war, with Virginia militia and Continental forces sometimes operating in the same area under unclear authority.

The fort that the Continentals inherited was formidable: a five-sided structure with earthworks bastions, capable of housing hundreds of men, situated on the one piece of ground that could not be bypassed by any force moving into the Ohio Valley. Its value was obvious and its maintenance was consistently difficult — supply lines from Philadelphia and Carlisle were long, and the competing demands of the eastern theater meant western requests were routinely underfulfilled.`,
    significanceWeight: 82,
    lat: 40.4420,
    lng: -80.0076,
    town: { connect: { id: 'us-pa-pittsburgh' } },
  },
  {
    id: 'event-pittsburgh-clark-expedition-staging',
    name: 'George Rogers Clark Stages Illinois Campaign Through Pittsburgh',
    startDate: new Date('1778-01-01'),
    datePrecision: 'MONTH',
    summary: `In the winter and spring of 1778, George Rogers Clark organized and launched his campaign to seize the British-held French villages of the Illinois country — Kaskaskia, Cahokia, and Vincennes — using Pittsburgh as a primary staging and supply point. Clark had obtained Virginia Governor Patrick Henry's secret authorization for the expedition and worked through the Fort Pitt network to gather men and materiel.

Clark's force moved down the Ohio from Pittsburgh, crossed into the Illinois country, and captured Kaskaskia on July 4, 1778 — a date whose significance for American claims in subsequent peace negotiations was not lost on anyone. The campaign continued with the capture of Vincennes, the dramatic winter crossing of the flooded Wabash plain, and the final capture of British commander Henry Hamilton — "the Hair-Buyer" — in February 1779.

The significance of Pittsburgh's role in the Illinois campaigns extended beyond logistics. Fort Pitt's position as the gateway to the Ohio Valley made it the natural departure point for any Continental force moving west, and Clark's ability to use it demonstrated that the western strategy the Americans were pursuing — projecting force beyond the Appalachians — was logistically coherent even if chronically underfunded. Without the Forks of the Ohio, there is no Illinois campaign. Without the Illinois campaign, American territorial claims in the 1783 peace negotiations look considerably different.`,
    significanceWeight: 90,
    lat: 40.4420,
    lng: -80.0076,
    town: { connect: { id: 'us-pa-pittsburgh' } },
  },
  {
    id: 'event-pittsburgh-simon-girty-defection',
    name: 'Simon Girty Defects to the British',
    startDate: new Date('1778-03-28'),
    datePrecision: 'DAY',
    summary: `On March 28, 1778, Simon Girty — a Pennsylvania-born frontier scout and interpreter at Fort Pitt who had lived among Native Americans as a child and spoke multiple Native languages — deserted from American service and fled to the British, along with Matthew Elliott and Alexander McKee. The three men made their way to Detroit, where they joined the British Indian Department.

Girty's defection was a serious intelligence loss for the Americans. He knew Fort Pitt's defenses, its garrison strength, its supply situation, and the personalities of its commanders. More practically, he was one of the most capable frontier fighters and Native-language interpreters on the western frontier, skills now deployed against the settlements he had previously defended.

Over the following years, Girty became the western frontier's most feared and hated figure among American settlers. He participated in or led raids against western Pennsylvania and Ohio Valley settlements, served as a British agent in Native councils, and was present at the burning of William Crawford in 1782. Whether he attempted to save Crawford's life — as some accounts claim — or watched impassively — as others insist — remains a matter of dispute. He survived the Revolution and died in Canada in 1818. His name became a byword for treachery on the western frontier, though the history is more complicated than the legend.`,
    significanceWeight: 78,
    lat: 40.4420,
    lng: -80.0076,
    town: { connect: { id: 'us-pa-pittsburgh' } },
  },
  {
    id: 'event-pittsburgh-brodhead-expedition',
    name: 'Brodhead Expedition up the Allegheny River',
    startDate: new Date('1779-08-11'),
    datePrecision: 'DAY',
    summary: `In August 1779, Colonel Daniel Brodhead led approximately 600 Continental soldiers and militia out of Fort Pitt on an expedition up the Allegheny River into Seneca and Munsee territory in what is now northwestern Pennsylvania. The expedition destroyed roughly a dozen Native American towns and large quantities of food stores, killed an uncertain number of warriors, and took captives before returning to Pittsburgh in September.

The expedition was coordinated, at least nominally, with Sullivan-Clinton's simultaneous campaign against the Iroquois in New York, which was destroying the Haudenosaunee homeland to the northeast at the same time. Together the two operations were designed to break the British-allied Native American capacity for offensive operations in the northern frontier theater.

Brodhead's expedition achieved its immediate tactical objectives — the towns were destroyed, the food stores were gone — but the strategic effect was temporary. Native American raiding capacity recovered within a season, and the raids on western Pennsylvania settlements continued through the end of the war. What the expedition demonstrated was both the range of operations Fort Pitt could project and the fundamental limitation of punitive expeditions as a substitute for permanent occupation of contested territory.`,
    significanceWeight: 80,
    lat: 40.4420,
    lng: -80.0076,
    town: { connect: { id: 'us-pa-pittsburgh' } },
  },
  {
    id: 'event-pittsburgh-mcintosh-fort-laurens',
    name: 'McIntosh Expedition and Founding of Fort Laurens',
    startDate: new Date('1778-10-01'),
    datePrecision: 'MONTH',
    summary: `In October 1778, General Lachlan McIntosh led an expedition of approximately 1,200 men out of Fort Pitt toward British-held Fort Detroit — the most ambitious western offensive the Americans attempted during the Revolution. The expedition moved down the Ohio and into Ohio country, establishing Fort McIntosh at the mouth of the Beaver River before pushing further into Lenape territory.

McIntosh established Fort Laurens on the Tuscarawas River in present-day Ohio — the only American fort ever built in Ohio, and one of the most ill-fated installations of the war. The fort was immediately inadequate: too far from Pittsburgh to be reliably supplied, too small to hold its garrison safely, and surrounded by hostile or uncertain Native territory. It was besieged through the winter of 1778–1779. McIntosh's grand expedition toward Detroit stalled completely, lacking the supplies and men the Virginia and Pennsylvania governments had promised but not delivered.

Fort Laurens was abandoned in August 1779 after a miserable year that accomplished nothing and cost the garrison severely through cold, hunger, and harassment. The episode illustrated the persistent gap between Washington's western ambitions and the resources the Continental system could actually deliver to Fort Pitt. Detroit remained in British hands until after the Revolution.`,
    significanceWeight: 72,
    lat: 40.4420,
    lng: -80.0076,
    town: { connect: { id: 'us-pa-pittsburgh' } },
  },
  {
    id: 'event-pittsburgh-gnadenhutten-massacre',
    name: 'Gnadenhutten Massacre',
    startDate: new Date('1782-03-08'),
    datePrecision: 'DAY',
    summary: `On March 8, 1782, Pennsylvania militia forces under Colonel David Williamson killed approximately 96 Christian Delaware men, women, and children at the Moravian mission village of Gnadenhutten in present-day Ohio. The victims were unarmed and had returned to the village to harvest crops they had left behind when the British had forced them to relocate. The militia, seeking revenge for raids on western Pennsylvania settlements in which Christian Delaware had played no part, voted to kill them.

The Gnadenhutten massacre was one of the most shameful acts carried out under American authority during the entire Revolutionary War. Its consequences extended well beyond the immediate atrocity. It destroyed whatever remaining possibility existed for a neutral or American-aligned Delaware nation in the Ohio country, driving even the most conciliatory Native leaders toward the British. It directly contributed to the conditions that led to William Crawford's death three months later, when Delaware warriors chose to make Crawford and his men bear responsibility for what Williamson's forces had done.

For Pittsburgh and western Pennsylvania, Gnadenhutten represented the moral bankruptcy of a frontier war logic that made no distinction between combatant and non-combatant on the Native side. The event was known and discussed at the time — it was not suppressed — and opinions were divided, but no one was tried or punished.`,
    significanceWeight: 85,
    lat: 40.3651,
    lng: -81.4340,
    town: { connect: { id: 'us-pa-pittsburgh' } },
  },
  {
    id: 'event-pittsburgh-crawford-expedition-defeat',
    name: 'Crawford Expedition Defeated at Sandusky',
    startDate: new Date('1782-06-04'),
    datePrecision: 'DAY',
    summary: `In June 1782, Colonel William Crawford led approximately 480 Pennsylvania and Virginia militia volunteers from the Pittsburgh area into Ohio country in a punitive expedition against Shawnee and Delaware towns near the Sandusky River. The expedition was poorly organized, and Crawford — who had some misgivings about command — was persuaded to lead it partly on the basis of his reputation and his friendship with George Washington.

The militia encountered a large confederated Native force near the Upper Sandusky towns on June 4–5 and fought an inconclusive engagement. On the second day, a relief force of British Rangers and additional warriors arrived and the Americans found themselves outnumbered and partially encircled. The retreat became a rout. Crawford was separated from the main body and captured, along with Dr. John Knight.

Crawford was turned over to Delaware warriors who were determined to avenge Gnadenhutten. He was tortured and burned at the stake on June 11, 1782, at a location near present-day Crawford County, Ohio. Dr. Knight escaped and provided the account from which subsequent narratives of Crawford's death were drawn. The disaster effectively ended serious American offensive operations out of Pittsburgh for the remainder of the war, which concluded with the Treaty of Paris the following year.`,
    significanceWeight: 88,
    lat: 40.8251,
    lng: -83.0585,
    town: { connect: { id: 'us-pa-pittsburgh' } },
  },
  {
    id: 'event-pittsburgh-treaty-paris-western-claims',
    name: 'Treaty of Paris Confirms Ohio Valley Claims',
    startDate: new Date('1783-09-03'),
    datePrecision: 'DAY',
    summary: `The Treaty of Paris, signed September 3, 1783, established the western boundary of the United States at the Mississippi River — an extraordinary territorial gain that was possible only because of the American military presence in the Ohio Valley during the war. Clark's Illinois campaigns, the sustained Continental presence at Fort Pitt, and the logistics chain connecting Pittsburgh to the western theater all contributed to the American negotiating position.

British negotiators and their American counterparts understood that territory occupied and defended had weight in peace negotiations that territory merely claimed did not. Fort Pitt's eight-year existence as an American-controlled western base, whatever its operational limitations, established American physical presence in the Ohio Valley in a way that mattered when boundaries were being drawn.

The treaty's provisions regarding the western territories made no mention of Native Americans, whose claims to the land were simply set aside. This omission stored up decades of conflict, but for Pittsburgh specifically it meant that the town's position as gateway to the Ohio Valley — strategic during the war — became commercial and economic afterward. The fort was gradually abandoned in the 1790s, but by then it had served its purpose.`,
    significanceWeight: 86,
    lat: 40.4420,
    lng: -80.0076,
    town: { connect: { id: 'us-pa-pittsburgh' } },
  },
  {
    id: 'event-pittsburgh-frontier-raids-pattern',
    name: 'Pattern of British-Allied Frontier Raids on Western Pennsylvania',
    startDate: new Date('1777-01-01'),
    datePrecision: 'YEAR',
    summary: `From 1777 through 1782, western Pennsylvania settlements were subjected to near-continuous raiding by Native American war parties allied with the British, operating primarily from towns in the Ohio country and coordinated through the British Indian Department at Detroit. The raids were not sporadic nuisances but a sustained campaign of strategic disruption aimed at collapsing the American frontier and forcing the abandonment of settlements east of the mountains.

The pattern was consistent: small war parties, typically ranging from a few warriors to several dozen, would strike isolated farms and stations, kill or capture settlers, drive off livestock, and destroy crops. Fort Pitt and the network of smaller blockhouses throughout western Pennsylvania provided the defensive infrastructure against these raids, but the network was never dense enough to prevent determined attackers from finding gaps.

The human cost was substantial. Hundreds of settlers were killed or captured throughout the Pittsburgh hinterland during these years. Families that had pushed west into the Monongahela, Youghiogheny, and Cheat River valleys in the early 1770s were driven back repeatedly. The raids shaped western Pennsylvania's development by making permanent settlement in some areas impossible until after the war and by producing a culture of militarized frontier self-defense that persisted for decades.`,
    significanceWeight: 76,
    lat: 40.4420,
    lng: -80.0076,
    town: { connect: { id: 'us-pa-pittsburgh' } },
  },
  {
    id: 'event-pittsburgh-squaw-campaign',
    name: 'Hand\'s "Squaw Campaign" and Its Diplomatic Consequences',
    startDate: new Date('1778-02-01'),
    datePrecision: 'MONTH',
    summary: `In February 1778, Fort Pitt commandant Brigadier General Edward Hand organized a winter expedition intended to destroy British supply installations near the Cuyahoga River and strike Native American towns allied with the British. The expedition dissolved almost immediately in poor weather and confused intelligence. What it found instead was a small camp of Delaware women, children, and old men — non-combatants — who were killed or captured by the militia participants.

The episode became known contemptuously as the "Squaw Campaign," a name that recorded its participants' own embarrassment at having killed non-combatants while failing entirely to reach any military objective. Its consequences were disproportionate to the episode's scale. The Delaware nation was at that moment divided over whether to remain neutral, align with the Americans, or join the British alliance. American diplomacy at Fort Pitt, led in part by men like George Morgan the Indian Agent, had been working carefully to maintain Delaware neutrality.

Hand's expedition damaged that work severely. Delaware leaders who had been inclined toward accommodation now faced pressure from their own people — who had just seen their women and children killed by American militia — to join the British. The Treaty of Fort Pitt in September 1778, which was the first treaty the United States signed with a Native nation, represented an attempt to repair some of this damage. It achieved limited success.`,
    significanceWeight: 74,
    lat: 40.4420,
    lng: -80.0076,
    town: { connect: { id: 'us-pa-pittsburgh' } },
  },
];

// ============================================================================
// PITTSBURGH — STORIES
// ============================================================================

export const pittsburghStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-pittsburgh-crawford-burning',
    title: 'The Cost of the Western War',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-william-crawford' } },
    verificationStatus: 'VERIFIED',
    textVersion: `William Crawford did not want to command the Sandusky expedition. That is one of the few unambiguous facts in a story that has been told and retold for two centuries, accumulating layers of heroism and horror that are not easily separated from what the documents actually show.

Crawford was fifty-nine years old in the spring of 1782. He had served competently throughout the war — in the eastern theater, at Fort Pitt, in frontier operations — without ever seeking the kind of dramatic command that would define a reputation. He was a practical man: a land surveyor, a farmer, a militia officer who understood the western frontier because he had spent his adult life on it. He had surveyed land for George Washington, which gave him a connection to the Commander-in-Chief that he never tried to leverage for personal advancement.

The men who planned the Sandusky expedition wanted a leader with enough reputation to recruit volunteers. Crawford had that reputation. He agreed reluctantly, and set out in late May 1782 with roughly 480 men, most of them the same Pennsylvania and Virginia militia who had participated in or condoned the Gnadenhutten massacre three months earlier.

Whether Crawford knew the risk he was taking is impossible to determine from the record. He knew that Gnadenhutten had happened. He knew that the Delaware were furious. He knew that the Ohio country they were marching into was contested ground where the British and their Native allies held the advantage. He went anyway, which is either courage or poor judgment or both, depending on how you weigh what he knew against what he might have predicted.

The engagement near the Sandusky towns on June 4–5 went badly from the start. The Americans fought hard enough to survive the first day, but on the second day a relief force arrived — British Rangers and additional warriors — and the encirclement became real. The retreat became a rout. Crawford was separated from the main body and captured.

What happened next is known from Dr. John Knight's account, written after his own escape. Crawford was turned over to Delaware warriors, tried in a form, and condemned. He spent approximately three hours being tortured before he died. Simon Girty, the Pennsylvania-born renegade who had defected from Fort Pitt four years earlier, was present. Whether Girty attempted to intervene on Crawford's behalf — as some accounts claim — or watched without acting — as Knight's account implies — cannot be resolved from the available evidence.

Crawford's death did not end the western war. The raids continued through 1782 and technically into 1783, until news of the peace treaty reached the frontier months after it was signed. What his death ended was the American willingness to conduct offensive operations out of Pittsburgh. The expedition he had led, the last major American offensive effort of the western war, had failed as completely as possible.

He is remembered today primarily through the county in Ohio that bears his name — the county that contains the approximate site of his execution. That is a kind of commemoration, but it is a thin one for a man whose death illustrated, more clearly than anything else about the western theater, what the Revolution cost the people who fought it on the frontier.`,
    audioScript: `William Crawford didn't want to command the Sandusky expedition. That's one of the few unambiguous facts in a story that's been retold for two centuries.

He was fifty-nine. He had served well throughout the war without seeking dramatic command. He went anyway, in May 1782, leading about 480 men into Ohio country — most of them the same militia who had condoned or participated in the Gnadenhutten massacre three months earlier.

The engagement near the Sandusky towns went badly. The retreat became a rout. Crawford was captured by Delaware warriors, tried, and condemned.

He spent approximately three hours being tortured before he died. Simon Girty, who had defected from Fort Pitt four years before, was present. Whether he tried to intervene, or watched, the record doesn't resolve.

Crawford's death ended the American willingness to conduct offensive operations out of Pittsburgh. The western war's last major campaign had failed as completely as possible.

He's remembered primarily through the Ohio county that bears his name — the county that contains the approximate site of his death. That's a thin commemoration for what his death illustrated about what the Revolution cost on the frontier.`,
    tags: ['Crawford', 'Sandusky', 'Delaware', 'Gnadenhutten', 'frontier war', 'sacrifice'],
    town: { connect: { id: 'us-pa-pittsburgh' } },
  },
  {
    id: 'story-pittsburgh-confluence-strategy',
    title: 'Why the Rivers Mattered',
    storyType: 'MODERN_VOICE',
    narratorName: 'Frontier History Researcher',
    narratorRole: 'Research Associate, Heinz History Center',
    verificationStatus: 'ANECDOTAL',
    textVersion: `When people think about the Revolutionary War in western Pennsylvania, they tend to think about battles that didn't really happen here, or they think about famous names — Clark, Crawford — without quite understanding what Pittsburgh itself contributed. The answer is geography. Specifically, three rivers.

The Allegheny comes down from the northeast. The Monongahela comes up from the southwest. They meet at the Point, and the Ohio begins. That confluence is why every power that wanted to control the interior of North America — French, British, American — built its most important western installation on exactly that piece of ground. You can't go around it. If you're moving men and supplies from the eastern settlements into the Ohio Valley, you come through Pittsburgh. There is no other practical route.

What Fort Pitt provided during the Revolution was the capacity to project force west of the Appalachians. That sounds abstract until you think about what it meant concretely. When Clark wanted to take his men to the Illinois country, he came to Pittsburgh to recruit and supply. When Brodhead wanted to strike the Seneca towns up the Allegheny, he launched from Pittsburgh. When McIntosh tried to push toward Detroit, he left from Pittsburgh. The fort wasn't just a defensive installation; it was the origin point of every American western offensive effort for eight years.

The limitation was logistics. The supply chain from Philadelphia to Pittsburgh ran through Carlisle — and Carlisle was itself a supply depot and frontier town with its own demands. What reached Pittsburgh was always less than what was requested. The commanders at Fort Pitt spent most of their correspondence begging the eastern establishment for men and material that never arrived in sufficient quantity. McIntosh's Detroit expedition collapsed not because of military failure but because the supplies ran out. That is the western theater's defining story, repeated over and over.

What I think is underappreciated is how much the American negotiating position in 1783 depended on Fort Pitt's sustained presence. The British gave up the Ohio Valley in the peace treaty. They didn't have to. Their military position in the Northwest was strong — Detroit was untouched, their Native allies were still fighting. But the American presence at Pittsburgh, eight years of continuous occupation at the continental gateway, established a claim that couldn't be easily dismissed. The rivers that made Pittsburgh strategically valuable in 1758 made the American argument for the Ohio Valley credible in 1783.

I spend a lot of time at Point State Park trying to help people understand what they're standing on. The fountain in the middle of the park sits roughly where the flag flew over Fort Pitt. The Allegheny is on your left, the Monongahela on your right. The Ohio starts at your feet. Once you see it, you understand immediately why everything happened here.`,
    audioScript: `When people think about the Revolution in western Pennsylvania, they tend to miss what Pittsburgh itself actually contributed. The answer is geography. Three rivers.

The Allegheny comes from the northeast. The Monongahela from the southwest. They meet at the Point, and the Ohio begins. That's why every power that wanted the interior of North America — French, British, American — built its most important western installation on exactly that ground. You can't go around it.

Fort Pitt provided the capacity to project force west of the Appalachians. Clark staged his Illinois campaign from here. Brodhead launched his Allegheny expedition from here. McIntosh tried to push toward Detroit from here. The fort was the origin point of every American western offensive for eight years.

The limitation was always logistics. The supply chain from Philadelphia never delivered enough. McIntosh's Detroit expedition didn't fail militarily — it ran out of supplies. That story repeats throughout the western theater.

What's underappreciated is how much the 1783 peace treaty depended on Pittsburgh's sustained presence. The British gave up the Ohio Valley. They didn't have to. But eight years of continuous American occupation at the continental gateway established a claim that couldn't be dismissed.

Once you stand at Point State Park — Allegheny on the left, Monongahela on the right, the Ohio beginning at your feet — you understand immediately why everything happened here.`,
    tags: ['geography', 'strategy', 'Ohio Valley', 'logistics', 'Fort Pitt', 'rivers'],
    town: { connect: { id: 'us-pa-pittsburgh' } },
  },
];

// ============================================================================
// PITTSBURGH — LESSON PLANS
// ============================================================================

export const pittsburghLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-pa-pittsburgh' } },
    title: 'The Western Frontier: Fort Pitt and the Revolution Beyond the Appalachians',
    gradeRange: '6-8',
    estimatedDuration: '2-3 class periods',
    summary:
      'This lesson asks students to understand the Revolutionary War as a continental conflict, not just an eastern coastal campaign. Using Fort Pitt and Pittsburgh as a case study, students explore how geography shaped military strategy, how the Ohio Valley became a theater of sustained warfare, and what the western frontier looked like from multiple perspectives — Continental soldiers, Native American nations, frontier settlers, and British commanders at Detroit. Students analyze primary source maps, letters from Fort Pitt commanders, and accounts of both offensive expeditions and defensive raids to reconstruct the reality of western frontier warfare.',
    lessonData: {
      objectives: [
        'Students will explain why the confluence of the Allegheny, Monongahela, and Ohio Rivers made Fort Pitt strategically essential',
        'Students will trace the connection between Fort Pitt\'s supply function and George Rogers Clark\'s Illinois campaigns',
        'Students will analyze frontier warfare from at least two different perspectives, including Native American nations',
        'Students will evaluate the relationship between logistics and military outcomes using the McIntosh expedition as a case study',
      ],
      essentialQuestions: [
        'How does geography determine military strategy? What does Fort Pitt teach us about this relationship?',
        'Who fought the western frontier war, and what did each side want? How do the answers change depending on which perspective you take?',
        'What is the relationship between logistics — supplies, transportation, resources — and the outcomes of military campaigns?',
      ],
      materials: [
        'Historical map of the Ohio Valley, 1778, showing Fort Pitt, Native American towns, and British installations',
        'Excerpt from Daniel Brodhead\'s correspondence with Washington, 1779–1780 (selected letters)',
        'George Rogers Clark\'s memoir excerpt on the Illinois campaign (adapted for grade level)',
        'Graphic organizer: Perspectives on the Frontier War (Continental / Native / British / Settler)',
        'Modern satellite imagery of the Point State Park confluence area for geographic comparison',
      ],
      activities: [
        {
          name: 'Geography as Strategy',
          duration: '20 minutes',
          description:
            'Students examine the 1778 map and identify the confluence of the three rivers, the location of Fort Pitt, and the routes connecting Pittsburgh to the east (through Carlisle and Philadelphia) and to the west (down the Ohio). They annotate the map to show the direction of Clark\'s Illinois campaign, Brodhead\'s Allegheny expedition, and the likely routes of British-allied raiding parties. Discussion: looking at this map, why was Fort Pitt impossible to bypass?',
        },
        {
          name: 'Supply Chain Analysis',
          duration: '25 minutes',
          description:
            'Using excerpts from Brodhead\'s letters to Washington, students identify what the Fort Pitt commander was asking for, what he received, and what he said he could do without adequate supplies. Working in pairs, they complete a gap analysis: What was requested vs. what arrived vs. what the shortfall meant for operations. Groups connect their findings to the McIntosh expedition\'s failure and discuss: how does logistics determine outcomes?',
        },
        {
          name: 'Multiple Perspectives on the Frontier War',
          duration: '30 minutes',
          description:
            'Small groups each take one perspective (Continental soldier, Delaware diplomat, frontier settler, British officer at Detroit) and read a short primary or adapted source from that perspective. Each group identifies: What does our source want? What does our source fear? What does our source think about the other groups in the room? Groups share findings and the class maps the resulting web of interests and conflicts on the board.',
        },
        {
          name: 'Then and Now: What Remains',
          duration: '15 minutes',
          description:
            'Students compare the 1778 map with the modern satellite image of the Point State Park area, identifying what has changed and what has stayed the same. Discussion: the blockhouse from 1764 still stands in the park. Why do some physical remnants survive and others disappear? What does Point State Park preserve and what does it not?',
        },
      ],
      assessment:
        'Formative: map annotations, supply chain gap analysis worksheets, multiple-perspectives organizers. Summative: a one-page response to the essential question "Who fought the western frontier war, and what did each side want?" Students must represent at least two perspectives with specific evidence.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information with other information in print and digital texts',
        'CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author\'s point of view or purpose',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.Geo.2.6-8: Use maps, satellite images, and other representations to explain relationships between locations and environmental characteristics',
        'D2.His.5.6-8: Explain how and why perspectives of people have changed over time',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-pa-pittsburgh' } },
    title: 'Gnadenhutten and the Ethics of Frontier War',
    gradeRange: '9-12',
    estimatedDuration: '3-4 class periods',
    summary:
      'This lesson uses the Gnadenhutten massacre of March 1782, the Delaware response, and the death of William Crawford to examine the ethics of frontier warfare and the consequences of atrocity within a larger conflict. Students analyze the chain of events connecting the massacre to Crawford\'s death and evaluate how violence escalates across a frontier war. The lesson addresses difficult historical material honestly — including what the militia did at Gnadenhutten and what the Delaware did to Crawford — and asks students to think carefully about accountability, context, and the difference between explanation and justification. The lesson connects to contemporary questions about the laws of war and the treatment of non-combatants.',
    lessonData: {
      objectives: [
        'Students will reconstruct the chain of events connecting Gnadenhutten (March 1782) to the Crawford expedition (June 1782)',
        'Students will analyze the difference between explanation and justification in historical atrocity',
        'Students will evaluate competing perspectives on accountability in the context of frontier warfare',
        'Students will connect the Gnadenhutten-Crawford sequence to broader questions about the laws of war and the treatment of non-combatants',
      ],
      essentialQuestions: [
        'What is the difference between explaining an atrocity and justifying it? Does understanding why something happened change how we judge it?',
        'How does violence escalate across a frontier war, and who bears responsibility for the escalation?',
        'What does the Gnadenhutten-Crawford sequence tell us about how wars end — or fail to end — at the human level even after treaties are signed?',
      ],
      materials: [
        'Primary source: David Zeisberger\'s Diary account of the Gnadenhutten massacre (adapted)',
        'Primary source: Dr. John Knight\'s account of Crawford\'s capture and death (adapted)',
        'Secondary source excerpt on Delaware diplomatic history and the pressure on neutral Native nations',
        'Map of the Pittsburgh-Ohio country region showing locations of Gnadenhutten, Sandusky, and Fort Pitt',
        'Structured Academic Controversy protocol materials',
      ],
      activities: [
        {
          name: 'Establishing the Record',
          duration: '30 minutes',
          description:
            'Students read the Zeisberger diary account of Gnadenhutten and the Knight account of Crawford\'s death as a paired sequence. They complete a factual timeline of events from February to June 1782, then identify: What do the sources tell us happened? What do they not tell us? What questions remain? The teacher establishes that the class is dealing with documented atrocities on both sides and sets norms for the discussion that follows.',
        },
        {
          name: 'The Chain of Accountability',
          duration: '35 minutes',
          description:
            'Working in small groups, students map the "accountability chain" for each atrocity: Who made the decision? Who carried it out? Who benefited? Who was responsible? Groups present their accountability maps and the class compares: Does the accountability chain for Gnadenhutten look different from the chain for Crawford\'s death? If so, why — and does that difference matter morally?',
        },
        {
          name: 'Structured Academic Controversy: Explanation vs. Justification',
          duration: '40 minutes',
          description:
            'Using the Structured Academic Controversy protocol, pairs of students argue one position, then switch and argue the opposite. The question: "Understanding why the Delaware warriors killed Crawford — as retaliation for Gnadenhutten — explains their decision. Does it also justify it?" After arguing both sides, pairs work together to write a consensus statement about the relationship between explanation and justification in this case. Consensus statements are shared with the class.',
        },
        {
          name: 'The Long Aftermath',
          duration: '25 minutes',
          description:
            'Brief discussion and reading: the Treaty of Paris in September 1783 ended the war between the United States and Britain but made no provisions for Native American nations. Raids in the Ohio Valley continued for years after the treaty. What does this tell us about how frontier wars end? The teacher connects to contemporary examples of conflicts where formal peace agreements did not immediately end violence.',
        },
      ],
      assessment:
        'Summative analytical essay (1000-1200 words) responding to one essential question. Students must use at least four specific pieces of evidence from the lesson — at least two from primary sources — and must explicitly address the distinction between explanation and justification. Peer review before final submission using a provided rubric.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in several primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors for how they treat the same or similar topics',
      ],
      c3Framework: [
        'D2.His.9.9-12: Analyze the relationship between historical sources and the secondary interpretations made from them',
        'D2.His.5.9-12: Analyze how historical contexts shaped and continue to shape people\'s perspectives',
        'D4.6.9-12: Use disciplinary and interdisciplinary lenses to understand the characteristics and causes of local, regional, and global problems',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// PITTSBURGH — ADDITIONAL LINKS
// ============================================================================

export const pittsburghAdditionalLinks: Array<{
  toTownId: string;
  linkType: 'SHARED_EVENT' | 'SHARED_PERSON' | 'GEOGRAPHIC_PROXIMITY';
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-pa-carlisle',
    linkType: 'SHARED_EVENT',
    reason:
      'Carlisle served as the primary eastern supply depot on the road to Fort Pitt. Men, weapons, and provisions moved from Carlisle through the mountains to Pittsburgh throughout the war, making the two towns nodes in the same Continental western logistics chain.',
    weight: 88,
  },
  {
    toTownId: 'us-pa-philadelphia',
    linkType: 'SHARED_PERSON',
    reason:
      'Continental Army command and the Continental Congress in Philadelphia directed western operations, supplied Fort Pitt through appropriations, and received reports from Fort Pitt commanders. Washington, whose correspondence with Fort Pitt commanders was extensive, connects both cities to the same command structure.',
    weight: 80,
  },
  {
    toTownId: 'us-oh-marietta',
    linkType: 'SHARED_EVENT',
    reason:
      'Marietta was founded in 1788 at the mouth of the Muskingum River on the Ohio — directly downstream from Pittsburgh — as the first permanent American settlement in the Northwest Territory that Fort Pitt\'s wartime presence had helped secure. The two towns share the Ohio River as a common axis and the western campaign as a common historical context.',
    weight: 85,
  },
  {
    toTownId: 'us-wv-wheeling',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason:
      'Wheeling (Fort Henry) on the Ohio River was the next significant American installation downstream from Fort Pitt and the site of the last major battle of the Revolution in the west (September 1782). The two forts formed the backbone of the American Ohio River defensive line and their garrisons operated in close coordination throughout the frontier war.',
    weight: 92,
  },
];
