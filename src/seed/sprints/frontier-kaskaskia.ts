// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// Illinois Frontier: Kaskaskia IL — Full content sprint
// Campaign: Western/Frontier Theater, 1778

import { Prisma } from '@prisma/client';

/**
 * Illinois — Kaskaskia
 *
 * Kaskaskia was the oldest permanent European settlement in the Illinois Country,
 * founded by French missionaries and traders in 1703 on a river island at the
 * confluence of the Kaskaskia and Mississippi Rivers. By 1778 it was the principal
 * British administrative center for the entire trans-Appalachian northwest — the
 * headquarters of Lieutenant Governor Henry Hamilton, the officer Patriots called
 * the "Hair Buyer" for his alleged practice of paying Native allies for American
 * scalps. On the night of July 4–5, 1778, George Rogers Clark and a force of 175
 * Virginia Long Knives captured Kaskaskia without firing a shot. That capture, and
 * the subsequent fall of Vincennes, extinguished British control of the Illinois
 * Country and established American claim to the vast territory between the Ohio
 * River and the Great Lakes — the land that would eventually become Illinois,
 * Indiana, Ohio, Michigan, Wisconsin, and Minnesota.
 *
 * NOTE ON VERIFICATION: Historical content synthesized from Milo Quaife's edition
 * of George Rogers Clark's Memoir, John Bakeless's Background to Glory, Temple
 * Bodley's George Rogers Clark: His Life and Public Services, the Illinois State
 * Historical Library collections, and the National Park Service's George Rogers
 * Clark National Historical Park interpretive resources at Vincennes, Indiana.
 */

// ============================================================================
// KASKASKIA — TOWN UPDATE
// ============================================================================

export const kaskaskiaTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Kaskaskia in 1778 was the nerve center of British power in the western interior. The town sat on an island at the junction of the Kaskaskia and Mississippi Rivers, home to roughly 500 French Creole residents whose loyalties were uncertain and whose knowledge of the surrounding country was indispensable to whoever controlled the region. Lieutenant Governor Henry Hamilton administered the entire Illinois Country from Detroit, but Kaskaskia was the closest major population center to the American settlements across the Ohio in Kentucky. When George Rogers Clark looked at a map of the northwest, Kaskaskia was the logical first target.

Clark's campaign to take the Illinois Country was one of the most audacious operations of the entire Revolutionary War. He obtained a commission from Virginia Governor Patrick Henry, recruited 175 men — far fewer than he'd hoped for — and marched them overland from the Falls of the Ohio through 120 miles of hostile wilderness in the summer heat of 1778. His intelligence, supplied in part by the Italian-born fur trader François Vigo and by sympathetic French Creoles, told him the garrison at Kaskaskia was small and the residents were uneasy under British rule. On the night of July 4–5, 1778, Clark's men crossed the Kaskaskia River, surrounded the sleeping town, and walked into the fort without resistance. The garrison commander, Philippe-François de Rastel de Rocheblave, was captured in his bed.

The capture of Kaskaskia reverberated far beyond the Illinois Country. Clark's diplomacy with the French Creole population — he approached them as potential allies rather than conquered subjects — won over not just Kaskaskia but the neighboring towns of Cahokia and Prairie du Rocher within days. Father Pierre Gibault, the Catholic priest who served all the French settlements in the Illinois Country, became a key intermediary, traveling to Vincennes and persuading that settlement to transfer its allegiance to Virginia as well. The territory Clark secured that summer formed the basis for Virginia's claim to the Northwest, which the state eventually ceded to the United States in 1784, making possible the Northwest Ordinance of 1787 and the organized settlement of the entire American midwest. The long consequence of one night's bloodless capture was half a continent.`,
};

// ============================================================================
// KASKASKIA — PEOPLE
// ============================================================================

export const kaskaskiaPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-kaskaskia-george-rogers-clark',
      name: 'Brigadier General George Rogers Clark',
      roles: ['Virginia Militia General', 'Illinois Campaign Commander', 'Continental Ally'],
      bioShort:
        'Virginia frontiersman and military commander who conceived and executed the capture of the Illinois Country in 1778. Leading only 175 men, Clark took Kaskaskia on July 4–5, 1778, then won back Vincennes from Henry Hamilton in February 1779 after a brutal winter march. His campaigns secured American claim to the Northwest Territory.',
      birthYear: 1752,
      deathYear: 1818,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the capture of Kaskaskia on the night of July 4–5, 1778; his subsequent diplomatic and military operations secured the entire Illinois Country for Virginia and ultimately for the United States.',
  },
  {
    person: {
      id: 'person-kaskaskia-henry-hamilton',
      name: 'Lieutenant Governor Henry Hamilton',
      roles: ['British Lieutenant Governor of Detroit', 'Northwest Territory Administrator', 'Military Commander'],
      bioShort:
        'British Lieutenant Governor at Detroit who administered the entire Illinois Country and western frontier. Known to American Patriots as the "Hair Buyer" for alleged payments to Native allies for scalps — a charge he denied. Hamilton recaptured Vincennes from the Americans in December 1778 but was himself captured by Clark in February 1779 and held as a war criminal rather than a prisoner of war.',
      birthYear: 1734,
      deathYear: 1796,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'British administrator whose authority Clark\'s Illinois campaign directly challenged; Hamilton\'s recapture of Vincennes and subsequent capture by Clark at Fort Sackville made him the central villain of the western theater in American memory.',
  },
  {
    person: {
      id: 'person-kaskaskia-francois-vigo',
      name: 'François Vigo',
      roles: ['Fur Trader', 'American Spy', 'Clark\'s Intelligence Source'],
      bioShort:
        'Italian-born fur trader based in St. Louis who became one of George Rogers Clark\'s most important intelligence sources and financial backers. After Hamilton recaptured Vincennes in December 1778, Vigo traveled to Kaskaskia to inform Clark of the British strength and disposition, enabling the winter march that retook the fort. He spent much of his own fortune supporting the American cause and spent decades trying to recover what he was owed.',
      birthYear: 1747,
      deathYear: 1836,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Provided Clark with critical intelligence about British strength at Vincennes after Hamilton\'s recapture in December 1778; his information made the February 1779 winter march possible.',
  },
  {
    person: {
      id: 'person-kaskaskia-pierre-gibault',
      name: 'Father Pierre Gibault',
      roles: ['Catholic Priest', 'French Creole Community Leader', 'Diplomatic Intermediary'],
      bioShort:
        'Catholic priest serving all the French Creole communities of the Illinois Country from his base at Kaskaskia. After Clark\'s capture of the town in 1778, Gibault became a crucial intermediary, persuading his parishioners to support the American cause and traveling to Vincennes to bring that settlement over to Virginia\'s side without military force. His role demonstrated the importance of cultural and religious ties in frontier diplomacy.',
      birthYear: 1737,
      deathYear: 1802,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'The Catholic priest whose diplomacy extended Clark\'s bloodless conquest from Kaskaskia to the entire French Creole Illinois Country; his journey to Vincennes made that town\'s peaceful transfer to American allegiance possible.',
  },
  {
    person: {
      id: 'person-kaskaskia-rocheblave',
      name: 'Philippe-François de Rastel de Rocheblave',
      roles: ['British Garrison Commander', 'Colonial Administrator'],
      bioShort:
        'French-born British officer commanding the Kaskaskia garrison when Clark struck on July 4–5, 1778. Rocheblave was captured in his bed, having received no warning of Clark\'s approach. His letters to British authorities in the months before the raid had warned that the Illinois Country was poorly defended and that American settlers across the Ohio were a growing threat — warnings that went unheeded.',
      birthYear: 1727,
      deathYear: 1802,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commander of the Kaskaskia garrison at the time of Clark\'s capture; his prior warnings to British authorities about the vulnerability of the Illinois Country were vindicated by Clark\'s raid.',
  },
  {
    person: {
      id: 'person-kaskaskia-john-montgomery',
      name: 'Captain John Montgomery',
      roles: ['Virginia Militia Officer', 'Clark\'s Illinois Regiment'],
      bioShort:
        'Virginia militia captain who served under George Rogers Clark throughout the Illinois campaign of 1778. Montgomery participated in the capture of Kaskaskia and helped garrison the Illinois posts while Clark planned the Vincennes operation. He later served as a courier between the Illinois Country and Virginia, helping maintain communication across the enormous distances of the frontier.',
      birthYear: 1748,
      deathYear: 1794,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'One of Clark\'s principal officers during the capture of Kaskaskia and the subsequent Illinois Country operations; helped maintain American control of the captured posts.',
  },
  {
    person: {
      id: 'person-kaskaskia-gabriel-cerré',
      name: 'Gabriel Cerré',
      roles: ['French Creole Merchant', 'Kaskaskia Community Leader', 'American Supporter'],
      bioShort:
        'Prominent French Creole fur merchant at Kaskaskia who initially fled when Clark\'s force arrived but returned after Clark\'s diplomatic overtures convinced the French community that Americans would respect their religion, language, and property. Cerré became an important local supporter of the American cause and a key figure in the community\'s transition from British to American governance.',
      birthYear: 1734,
      deathYear: 1806,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Leading Kaskaskia merchant whose decision to support the American cause after Clark\'s diplomatic approach helped win over the broader French Creole community to the Patriot side.',
  },
  {
    person: {
      id: 'person-kaskaskia-simon-kenton',
      name: 'Simon Kenton',
      roles: ['Frontier Scout', 'Virginia Militia Ranger', 'Kentucky Pioneer'],
      bioShort:
        'Kentucky frontier scout and militia ranger who served as one of Clark\'s most important intelligence gatherers during the Illinois campaign. Kenton\'s ability to move through the western wilderness and gather intelligence about British and Native movements made him indispensable to Clark\'s planning. He survived capture by Shawnee warriors in 1778 through extraordinary luck and endurance.',
      birthYear: 1755,
      deathYear: 1836,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Served as a scout and ranger for Clark\'s Illinois campaign; his frontier knowledge and intelligence-gathering capabilities were essential to the operation\'s success.',
  },
  {
    person: {
      id: 'person-kaskaskia-leonard-helm',
      name: 'Captain Leonard Helm',
      roles: ['Virginia Militia Officer', 'Vincennes Commandant'],
      bioShort:
        'Virginia militia officer whom Clark left in command of Vincennes (Fort Sackville) after the town peacefully transferred its allegiance to Virginia in 1778. Helm commanded a tiny garrison and was forced to surrender when Hamilton retook Vincennes in December 1778 — reportedly the only member of the garrison who refused to accept British protection terms. He was among those Clark liberated when he retook Vincennes in February 1779.',
      birthYear: 1737,
      deathYear: 1782,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Left by Clark to command Vincennes after its transfer to American allegiance; his capture by Hamilton and liberation by Clark connects the Kaskaskia and Vincennes phases of the Illinois campaign.',
  },
];

// ============================================================================
// KASKASKIA — PLACES
// ============================================================================

export const kaskaskiaPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-kaskaskia-old-kaskaskia-island',
    name: 'Old Kaskaskia Island (Submerged Town Site)',
    placeType: 'LANDMARK',
    description:
      'The original site of Kaskaskia, once the largest European settlement in the Illinois Country and the town Clark captured on July 4–5, 1778. The island was largely submerged and destroyed when the Mississippi River shifted its channel during catastrophic floods in 1881, washing away the physical remnants of the colonial town. Today a small portion of the island remains accessible by a bridge from Missouri, accessible only during periods of low water. A marker indicates the site of Fort Gage, the British fortification Clark captured, and the ruins of the old town lie beneath the river.',
    lat: 37.9084,
    lng: -89.9184,
    address: 'Kaskaskia Island, Randolph County, IL 62233',
    town: { connect: { id: 'us-il-kaskaskia' } },
  },
  {
    id: 'place-kaskaskia-pierre-menard-home',
    name: 'Pierre Menard Home State Historic Site',
    placeType: 'HISTORIC_HOUSE',
    description:
      'The preserved home of Pierre Menard, first Lieutenant Governor of Illinois, built around 1802 near the site of old Kaskaskia. While Menard came to prominence slightly after the Revolutionary War period, his home is the best-preserved example of the French Creole architecture that characterized the Kaskaskia settlement Clark captured in 1778. The house is operated by the Illinois Historic Preservation Agency and offers interpretation of French Creole frontier life and the broader history of the Illinois Country.',
    lat: 37.9117,
    lng: -89.9081,
    address: '4230 Kaskaskia Rd, Ellis Grove, IL 62241',
    hours: 'Wed–Sun 9am–5pm',
    admission: 'Free',
    website: 'https://www2.illinois.gov/ihpa/Experience/Sites/Southwest/Pages/Pierre-Menard-Home.aspx',
    town: { connect: { id: 'us-il-kaskaskia' } },
  },
  {
    id: 'place-kaskaskia-church-holy-family',
    name: 'Church of the Holy Family (Fort de Chartres Area)',
    placeType: 'CHURCH',
    description:
      'The Church of the Holy Family at Cahokia, established by French missionaries in 1699, is the oldest church in Illinois and one of the oldest in the United States. While located at Cahokia rather than Kaskaskia proper, it represents the Catholic ecclesiastical community that Father Pierre Gibault served — the same community whose loyalty Clark won through his diplomatic approach in July 1778. Gibault\'s work across the French Creole settlements depended on this religious network. The church building dates to 1799 but stands on the site of the original mission.',
    lat: 38.5714,
    lng: -90.1834,
    address: '116 Church St, Cahokia, IL 62206',
    town: { connect: { id: 'us-il-kaskaskia' } },
  },
  {
    id: 'place-kaskaskia-fort-de-chartres',
    name: 'Fort de Chartres State Historic Site',
    placeType: 'BATTLEFIELD',
    description:
      'Fort de Chartres was the principal French military fortification in the Illinois Country, built in its final stone form in the 1750s. Transferred to the British after France ceded the Illinois Country in 1763, it served as the administrative center of the region until Kaskaskia became the primary town. By 1778 the fort was partially abandoned, but its ruins formed the backdrop of British power in the Illinois Country that Clark\'s campaign extinguished. The reconstructed fort is now a state historic site with substantial surviving stone walls and interpretive exhibits on French colonial and early American history.',
    lat: 38.0811,
    lng: -90.0892,
    address: '1350 IL-155, Prairie du Rocher, IL 62277',
    hours: 'Wed–Sun 9am–5pm',
    admission: 'Free',
    website: 'https://www2.illinois.gov/ihpa/Experience/Sites/Southwest/Pages/Fort-de-Chartres.aspx',
    town: { connect: { id: 'us-il-kaskaskia' } },
  },
  {
    id: 'place-kaskaskia-liberty-bell-of-the-west',
    name: 'Kaskaskia Bell (Liberty Bell of the West)',
    placeType: 'MONUMENT',
    description:
      'The Kaskaskia Bell, also called the Liberty Bell of the West, is a 650-pound bronze bell cast in France in 1741 and presented to the Church of the Immaculate Conception at Kaskaskia by King Louis XV. The bell rang when Clark\'s forces took Kaskaskia in 1778 and again when Illinois achieved statehood in 1818. It is one of the few surviving artifacts from the original colonial Kaskaskia, having been removed before the floods of 1881 destroyed the town. The bell is now housed in a small chapel on Kaskaskia Island.',
    lat: 37.9084,
    lng: -89.9184,
    address: 'Kaskaskia Island, Randolph County, IL 62233',
    town: { connect: { id: 'us-il-kaskaskia' } },
  },
  {
    id: 'place-kaskaskia-george-rogers-clark-memorial-vincennes',
    name: 'George Rogers Clark National Historical Park (Vincennes, IN)',
    placeType: 'MONUMENT',
    description:
      'Though located in Vincennes, Indiana, this National Historical Park is the primary interpretive site for the entire Illinois campaign that began at Kaskaskia. The memorial rotunda commemorates Clark\'s capture of Fort Sackville in February 1779, the climax of the campaign that started with Kaskaskia. The site features large murals depicting Clark\'s march through the flooded Wabash bottomlands, his confrontation with Hamilton, and the broader story of how the Illinois Country was won. Vincennes is accessible as a day trip from the Kaskaskia area.',
    lat: 38.6786,
    lng: -87.5275,
    address: '401 S 2nd St, Vincennes, IN 47591',
    hours: 'Daily 9am–5pm',
    admission: 'Free (National Park)',
    website: 'https://www.nps.gov/gero/index.htm',
    town: { connect: { id: 'us-il-kaskaskia' } },
  },
  {
    id: 'place-kaskaskia-mississippi-river-crossing',
    name: 'Mississippi River Crossing — Clark\'s Route',
    placeType: 'TRAIL',
    description:
      'The strategic geography that made Kaskaskia significant: the confluence of the Kaskaskia River with the Mississippi, where Clark\'s men crossed on the night of July 4–5, 1778. Clark\'s force had marched overland from the Falls of the Ohio, then used boats to descend the Ohio and cross the Mississippi near Fort Massac before marching overland to Kaskaskia. The approach route — crossing hostile, largely unmapped territory in summer heat — was a feat of frontier endurance. Historical markers along the Mississippi River bottom trace portions of the approach.',
    lat: 37.9200,
    lng: -89.9300,
    address: 'Near Kaskaskia Island, Randolph County, IL',
    town: { connect: { id: 'us-il-kaskaskia' } },
  },
];

// ============================================================================
// KASKASKIA — EVENTS
// ============================================================================

export const kaskaskiaEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-kaskaskia-french-founding',
    name: 'French Missionaries Establish Kaskaskia',
    startDate: new Date('1703-01-01'),
    datePrecision: 'YEAR',
    summary:
      'French Jesuit missionaries established Kaskaskia as a mission settlement in 1703, making it one of the earliest permanent European settlements in what is now the American midwest. Located on a navigable river island with access to both the Kaskaskia River and the Mississippi, the settlement grew rapidly as a center of the French fur trade. By the mid-18th century Kaskaskia had a population of several hundred French Creole residents, a substantial church, and the administrative apparatus of New France\'s Illinois Country.\n\nThe town\'s French character — Catholic, French-speaking, organized around kinship networks and the fur trade — would prove crucial when George Rogers Clark arrived in 1778. The French Creoles were not enthusiastic British subjects, having been transferred to British rule against their will in 1763. Their ambivalence about the British gave Clark an opening that a town of committed Loyalists would not have provided.',
    significanceWeight: 55,
    lat: 37.9084,
    lng: -89.9184,
    town: { connect: { id: 'us-il-kaskaskia' } },
  },
  {
    id: 'event-kaskaskia-british-takeover-1763',
    name: 'Britain Takes Control of the Illinois Country',
    startDate: new Date('1765-10-09'),
    datePrecision: 'DAY',
    summary:
      'Under the Treaty of Paris ending the Seven Years\' War (1763), France ceded the Illinois Country to Britain. British troops did not actually arrive in Kaskaskia until October 9, 1765, when Captain Thomas Stirling and the 42nd Regiment of Foot marched into the town. The delay reflected British difficulty projecting power into the interior and Pontiac\'s War, which had closed the western frontier.\n\nThe transition was deeply unwelcome to the French Creole population. Many residents emigrated across the Mississippi to Spanish Louisiana rather than live under British rule. Those who remained found themselves under a colonial administration that did not speak their language, did not share their religion, and had little experience managing a French-speaking, Catholic population. The resentment that built up over the following decade made Kaskaskia susceptible to Clark\'s diplomatic approach in 1778.',
    significanceWeight: 65,
    lat: 37.9084,
    lng: -89.9184,
    town: { connect: { id: 'us-il-kaskaskia' } },
  },
  {
    id: 'event-kaskaskia-clark-commission-1777',
    name: 'Clark Secures Virginia Commission for Illinois Campaign',
    startDate: new Date('1778-01-01'),
    datePrecision: 'YEAR',
    summary:
      'In late 1777, George Rogers Clark — a Kentucky surveyor and militia officer who had been organizing frontier defense against British-allied Native raids — traveled to Williamsburg to propose an offensive operation against the British in the Illinois Country. He argued that the source of the raids devastating Kentucky settlements was British supply and direction from Detroit, and that the way to end the raids was to neutralize the British posts at Kaskaskia, Cahokia, and Vincennes.\n\nGovernor Patrick Henry, working with Thomas Jefferson and George Wythe in secret, approved the plan and gave Clark two commissions: a public one authorizing him to defend Kentucky, and a secret one authorizing the Illinois campaign. Virginia\'s motivation was not purely military — the state had territorial claims to the northwest under its colonial charter, and Clark\'s campaign could secure those claims before Virginia\'s rivals could assert their own.',
    significanceWeight: 78,
    lat: 37.9084,
    lng: -89.9184,
    town: { connect: { id: 'us-il-kaskaskia' } },
  },
  {
    id: 'event-kaskaskia-clark-march-1778',
    name: 'Clark\'s Overland March Through the Illinois Wilderness',
    startDate: new Date('1778-06-26'),
    datePrecision: 'DAY',
    summary:
      'On June 26, 1778, Clark\'s force of approximately 175 men departed Fort Massac on the Ohio River, beginning a 120-mile overland march through the Illinois wilderness to Kaskaskia. Clark deliberately chose not to travel by river — the water route was known and watched, and the element of surprise was essential. The march took eleven days through hot, swampy terrain with no roads. Clark kept the men moving fast and maintained strict discipline about not hunting or making fires that could reveal their presence.\n\nThe decision to march overland was a calculated risk. If the men encountered a large British or Native force, they would have no fallback position. If they arrived exhausted or sick, the operation would fail. But the overland route gave Clark something more valuable than comfort: it gave him complete surprise. When his men reached the Kaskaskia River opposite the town on the night of July 4–5, no one on the British side knew they were there.',
    significanceWeight: 82,
    lat: 37.1500,
    lng: -88.9000,
    town: { connect: { id: 'us-il-kaskaskia' } },
  },
  {
    id: 'event-kaskaskia-capture-july-4-1778',
    name: 'Clark Captures Kaskaskia Without Firing a Shot',
    startDate: new Date('1778-07-04'),
    datePrecision: 'DAY',
    summary:
      'On the night of July 4–5, 1778, George Rogers Clark\'s force crossed the Kaskaskia River using boats secured from a local farmer (who was reportedly unaware of who they were) and entered the sleeping town. Clark divided his force: one group moved to surround Fort Gage and capture the garrison, while another spread through the town\'s streets to prevent escape and communication. Philippe-François de Rastel de Rocheblave, the British commander, was captured in his bed. Not a shot was fired.\n\nThe date was not coincidental — Clark was aware that it was the second anniversary of American independence, and he used the symbolism deliberately. In his after-action report to Governor Henry, he emphasized the bloodless nature of the capture and the potential for winning the French Creole population to the American side. The capture of Kaskaskia was the most important military success of Clark\'s campaign, not because of what it destroyed but because of what it made possible.',
    significanceWeight: 97,
    lat: 37.9084,
    lng: -89.9184,
    town: { connect: { id: 'us-il-kaskaskia' } },
  },
  {
    id: 'event-kaskaskia-clark-french-diplomacy',
    name: 'Clark Wins the French Creole Population',
    startDate: new Date('1778-07-05'),
    datePrecision: 'DAY',
    summary:
      'The morning after the capture, Clark assembled Kaskaskia\'s French Creole residents and made a speech that reversed the terms of the encounter. Instead of treating them as a conquered population, he told them they were free to choose: they could return to British allegiance and leave, or they could become citizens of Virginia and remain. He promised protection of their Catholic faith, their French language, and their property.\n\nFather Pierre Gibault served as the critical intermediary, vouching for Clark\'s sincerity to his parishioners. The French Creoles chose to stay. Within days, Clark had won not just Kaskaskia but the neighboring settlements of Cahokia and Prairie du Rocher by similar diplomacy. Gibault then volunteered to travel to Vincennes and bring that settlement over as well — an offer Clark accepted. Clark had achieved more through cultural diplomacy in a week than he could have accomplished through military force in months.',
    significanceWeight: 90,
    lat: 37.9084,
    lng: -89.9184,
    town: { connect: { id: 'us-il-kaskaskia' } },
  },
  {
    id: 'event-kaskaskia-vincennes-transfer',
    name: 'Vincennes Peacefully Transfers to American Allegiance',
    startDate: new Date('1778-08-01'),
    datePrecision: 'MONTH',
    summary:
      'Father Pierre Gibault and Dr. Jean-Baptiste Laffont traveled from Kaskaskia to Vincennes in July 1778, carrying Clark\'s message of religious tolerance and American alliance. The French Creole population of Vincennes, like those at Kaskaskia, had no particular loyalty to the British who had governed them since 1763, and they responded positively to Gibault\'s account of how Clark had treated the Kaskaskia community.\n\nVincennes — and its strategically vital fort, Fort Sackville — transferred its allegiance to Virginia without any military engagement. Clark sent Captain Leonard Helm to command the fort with a tiny garrison. The bloodless acquisition of Vincennes completed Clark\'s initial conquest of the Illinois Country and established a chain of American posts stretching from the Ohio River to the Mississippi.',
    significanceWeight: 88,
    lat: 38.6780,
    lng: -87.5270,
    town: { connect: { id: 'us-il-kaskaskia' } },
  },
  {
    id: 'event-kaskaskia-hamilton-retakes-vincennes',
    name: 'Hamilton Recaptures Vincennes in Midwinter',
    startDate: new Date('1778-12-17'),
    datePrecision: 'DAY',
    summary:
      'Henry Hamilton, responding to the loss of the Illinois Country, assembled a force of British regulars, Canadian militia, and Native allies at Detroit and marched south in the autumn of 1778. He arrived at Vincennes on December 17, 1778, with a force far larger than Leonard Helm\'s tiny garrison could resist. Helm surrendered. Hamilton spent the winter at Vincennes, intending to advance on Kaskaskia in the spring with full strength.\n\nHamilton\'s decision to winter at Vincennes rather than pressing on immediately to Kaskaskia was the strategic error that cost Britain the Illinois Country. The delay gave Clark time to plan a counter-operation. When François Vigo arrived at Kaskaskia in January 1779 with intelligence about the British strength and disposition at Vincennes, Clark had the information he needed to strike before Hamilton could move.',
    significanceWeight: 85,
    lat: 38.6780,
    lng: -87.5270,
    town: { connect: { id: 'us-il-kaskaskia' } },
  },
  {
    id: 'event-kaskaskia-winter-march-vincennes-1779',
    name: 'Clark\'s Winter March Retakes Vincennes',
    startDate: new Date('1779-02-05'),
    datePrecision: 'DAY',
    summary:
      'On February 5, 1779, Clark departed Kaskaskia with approximately 170 men — French Creoles and Virginia militia together — and marched across the flooded Illinois and Indiana plains in midwinter conditions. The Wabash River and its tributaries had overflowed their banks; the men waded through icy water for miles, sometimes in water up to their chests. Clark kept them moving through cold, wet, and exhaustion by sheer force of personality.\n\nThe force arrived at Vincennes on February 23, surrounded the fort, and opened a siege. Clark\'s men, including French Creole sharpshooters who could fire through the fort\'s portholes, made the British position untenable. When Hamilton attempted to negotiate, Clark rejected his terms and demanded unconditional surrender. Hamilton — the "Hair Buyer" — surrendered Fort Sackville on February 25, 1779. Clark sent him east as a prisoner, refusing to treat him as a conventional prisoner of war.',
    significanceWeight: 95,
    lat: 38.6780,
    lng: -87.5270,
    town: { connect: { id: 'us-il-kaskaskia' } },
  },
  {
    id: 'event-kaskaskia-virginia-northwest-cession',
    name: 'Virginia Cedes the Northwest Territory to the United States',
    startDate: new Date('1784-03-01'),
    datePrecision: 'MONTH',
    summary:
      'In March 1784, Virginia formally ceded its claim to the territory northwest of the Ohio River — the land Clark\'s campaigns had secured — to the United States government. The cession was the enabling act for the Northwest Ordinance of 1787, which established the framework for organizing the territory into states and prohibited slavery in the region.\n\nThe territory Clark had won at Kaskaskia eventually became the states of Illinois, Indiana, Ohio, Michigan, Wisconsin, and part of Minnesota. The land he walked across with 175 men in the summer heat of 1778 would hold, by the mid-19th century, tens of millions of Americans. Virginia\'s cession, based on a claim rooted in the capture of Kaskaskia, was one of the most consequential legal acts of the early republic.',
    significanceWeight: 88,
    lat: 37.9084,
    lng: -89.9184,
    town: { connect: { id: 'us-il-kaskaskia' } },
  },
  {
    id: 'event-kaskaskia-illinois-statehood',
    name: 'Illinois Achieves Statehood',
    startDate: new Date('1818-12-03'),
    datePrecision: 'DAY',
    summary:
      'Illinois was admitted to the Union as the 21st state on December 3, 1818. Kaskaskia, the town Clark had captured in 1778, served as the first state capital. The Kaskaskia Bell — the colonial-era French bell that had rung when Clark took the town — rang again for statehood, connecting the frontier conquest of 1778 with the constitutional moment of 1818.\n\nKaskaskia\'s tenure as state capital was brief; the capital moved to Vandalia in 1820, partly because Kaskaskia\'s location on a river island made it vulnerable to flooding. The catastrophic floods of 1881 would eventually consume the original town entirely. But the symbolic weight of Kaskaskia as Illinois\'s founding place — the town where American sovereignty over the Northwest Territory was first established by Clark\'s raid — persisted in state memory long after the physical town was gone.',
    significanceWeight: 72,
    lat: 37.9084,
    lng: -89.9184,
    town: { connect: { id: 'us-il-kaskaskia' } },
  },
  {
    id: 'event-kaskaskia-floods-destroy-town',
    name: 'Mississippi River Floods Destroy Original Kaskaskia',
    startDate: new Date('1881-01-01'),
    datePrecision: 'YEAR',
    summary:
      'The Mississippi River shifted its channel in the catastrophic floods of 1881, cutting through the narrow neck of land separating the Kaskaskia River from the Mississippi and isolating the original town site on an island entirely surrounded by the Mississippi. Subsequent floods eroded and submerged most of the island, taking with them the physical remains of the town Clark had captured in 1778 — the church, the fort site, the French Creole houses.\n\nThe destruction of Kaskaskia by the river is one of the more melancholy facts of American historical preservation: the most significant town of the western theater of the Revolutionary War literally no longer exists on solid ground. What remains — the Kaskaskia Bell in its small chapel, the Pierre Menard Home nearby, Fort de Chartres a few miles north — are fragments and survivals of a world that the river reclaimed.',
    significanceWeight: 58,
    lat: 37.9084,
    lng: -89.9184,
    town: { connect: { id: 'us-il-kaskaskia' } },
  },
];

// ============================================================================
// KASKASKIA — STORIES
// ============================================================================

export const kaskaskiaStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-kaskaskia-night-of-july-fourth',
    title: 'The Night of the Fourth of July',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-kaskaskia-george-rogers-clark' } },
    verificationStatus: 'VERIFIED',
    textVersion: `George Rogers Clark crossed the Kaskaskia River on the night of July 4–5, 1778, knowing that if anything went wrong he had no fallback. His force numbered around 175 men — some accounts say fewer. He had no artillery. He had no supply line. The closest American settlement of any size was across the Ohio River in Kentucky, more than 100 miles away. What he had was intelligence, a plan, and a conviction that the French Creole population of Kaskaskia was not going to fight for the British king.

The boats Clark's men used to cross came from a local farmer who was encountered near the river and prevented from raising an alarm. They were adequate for the crossing. Clark divided his command: one element moved directly toward Fort Gage, the British fortification at the edge of town, while others fanned out through the streets. The garrison was small and completely surprised. Philippe-François de Rastel de Rocheblave, the British commander, was captured in his bed. Not a shot was fired.

The silence was the remarkable thing. A force that had marched 120 miles through wilderness in eleven days, that had slept on the ground and eaten whatever they could find, that had every reason for noise and chaos — these men moved through a sleeping town without waking it. Clark's discipline was absolute. He had told his men that surprise was everything, that a single shot fired prematurely could turn a bloodless capture into a bloodbath, and they believed him.

In the morning, Clark assembled the French Creole residents in the town square. He had thought carefully about what he would say. The conventional approach — tell the conquered population they were now under American authority and accept their submission — might have worked. But Clark understood something subtler. The French Creoles were not enthusiastic British subjects. They had been transferred to British rule in 1763 without consultation and had been governed since by administrators who did not speak their language or share their faith. They were not enemies of the American cause; they simply did not know what the American cause was.

Clark's speech, as he later recorded it, offered them a choice. They could remain under British allegiance and depart with their property, or they could become citizens of Virginia and remain. Their Catholic faith would be protected. Their French language would be respected. Their property would not be confiscated. He was not offering them conquest — he was offering them alliance.

Father Pierre Gibault was the key. The priest had served these communities for years, traveling the circuit of French Creole settlements from Kaskaskia to Cahokia to Vincennes in the enormous distances of the Illinois Country. He knew his parishioners, and they trusted him. When Gibault vouched for Clark's sincerity, the question was effectively settled. The Kaskaskia community voted, in effect, to join the American cause.

What happened in the days that followed was something Clark had hoped for but could not have guaranteed. Word spread to Cahokia and Prairie du Rocher. Gibault offered to travel to Vincennes himself and carry the same message to the French community there. Clark accepted. Within weeks, the entire network of French Creole settlements that had constituted British power in the Illinois Country had peacefully transferred their allegiance to Virginia.

Clark had taken Kaskaskia with 175 men. He had secured an area the size of several eastern states through diplomacy. The Illinois Country was American — not because it had been conquered, but because the people who lived there had been given a reason to choose America.

The date Clark chose for the crossing was July 4, 1778 — the second anniversary of American independence. Whether this was calculated symbolism or a practical matter of timing is unclear from the historical record. Clark was a practical man. But he also understood how stories worked, and a bloodless capture of a British fort on the anniversary of independence, in a town whose French Catholic population had then voluntarily embraced the American cause — that was a story worth telling. He told it, and it was remembered.`,
    tags: ['Kaskaskia', 'George Rogers Clark', 'Illinois Campaign', 'French Creoles', 'western frontier'],
    town: { connect: { id: 'us-il-kaskaskia' } },
  },
  {
    id: 'story-kaskaskia-lost-town',
    title: 'The Town the River Took',
    storyType: 'MODERN_VOICE',
    verificationStatus: 'VERIFIED',
    textVersion: `There is a place in southern Illinois where the Mississippi River changed its mind.

For 178 years, the Kaskaskia River flowed parallel to the Mississippi for several miles before joining it, and between them lay an island of rich bottomland where the French built their most important Illinois settlement in 1703. The town grew. By the 1770s it had 500 residents, a substantial church with a bell presented by King Louis XV, a British fort, and a network of merchants, priests, and farmers who formed the social fabric of the entire Illinois Country. George Rogers Clark captured it on the night of July 4, 1778. In 1818, it became the first capital of the state of Illinois. The Kaskaskia Bell rang for Clark's victory and rang again for statehood.

Then the river decided otherwise. In the spring floods of 1881, the Mississippi carved a new channel directly through the neck of land between the two rivers. Overnight — almost literally overnight — the Kaskaskia River became a backwater and the Mississippi claimed the island. Subsequent floods eroded the bank. The town site slipped into the water. The church where Father Gibault had preached, the fort where Rocheblave was captured, the streets where Clark had assembled the French Creole residents and offered them a choice — all of it went into the river.

What remains is very little. The Kaskaskia Bell survived because someone had the foresight to remove it. It sits now in a small brick chapel on what is left of Kaskaskia Island, accessible by a bridge from Missouri when the water is low enough. The island is technically part of Illinois — the only piece of Illinois west of the Mississippi — but it is difficult to reach, largely uninhabited, and subject to flooding whenever the river rises. You can stand on it and know you are standing where Clark stood on the morning of July 5, 1778. You cannot see much else that connects to that moment.

The Pierre Menard Home survives a few miles away, a beautiful example of French Creole architecture from the early 19th century, its long gallery overlooking the river bottom. Fort de Chartres, the old French stone fort from the 1750s, has been partially reconstructed a few miles north. These are fragments. The center — the town itself, the island, the confluence where two rivers met and a colonial capital stood — is gone.

There is something instructive about this loss. Most of the Revolutionary War sites that shaped the country's founding have been preserved, commemorated, sometimes over-commemorated. Valley Forge has a memorial arch. Yorktown has a battlefield park. Even sites where relatively little happened have markers, plaques, visitors' centers. Kaskaskia, where Clark won an area that became six states, where American sovereignty over the Northwest Territory was first established, where the French Creoles of the Illinois Country made a choice that shaped the entire American midwest — Kaskaskia is underwater.

The historical amnesia is partly geographic. Kaskaskia sits in a corner of southern Illinois that most Americans never visit, far from interstates and population centers. The relevant interpretive site — the George Rogers Clark National Historical Park — is in Vincennes, Indiana, which emphasizes the final dramatic episode (the winter march, Hamilton's capture) over the initial capture of Kaskaskia. The story of July 4, 1778 is not unknown, but it is not well known.

It deserves to be better known. The capture of Kaskaskia was not a great battle — it was a bloodless night operation, an act of intelligence and discipline and surprise. The securing of the Illinois Country was not won by overwhelming force but by cultural intelligence, by Clark's understanding that the French Creole population could be won over rather than subdued. The Northwest Territory was not conquered; it was argued for, diplomatically and militarily, by a 26-year-old Virginian with 175 men and a theory about what the people of Kaskaskia actually wanted.

That theory turned out to be correct. The bell rang. The river took the town. But the consequence — six states, the framework for American expansion across the continent, the legal basis for the Northwest Ordinance — that remains. The town is gone. What the town made possible is all around us.`,
    tags: ['Kaskaskia', 'memory', 'loss', 'Northwest Territory', 'Mississippi River', 'historical significance'],
    town: { connect: { id: 'us-il-kaskaskia' } },
  },
];

// ============================================================================
// KASKASKIA — LESSON PLANS
// ============================================================================

export const kaskaskiaLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-il-kaskaskia' } },
    title: 'Clark\'s Illinois Campaign: Winning Without Fighting',
    gradeRange: '8-12',
    estimatedDuration: '2 class periods',
    summary:
      'This lesson uses the capture of Kaskaskia in 1778 to explore the relationship between military force and diplomatic persuasion in Revolutionary War strategy. Students examine Clark\'s decision to approach the French Creole population as potential allies rather than conquered subjects, analyze Father Gibault\'s role as a cultural intermediary, and evaluate the long-term consequences of the Illinois campaign for American territorial expansion. The lesson develops students\' ability to analyze how cultural intelligence shapes military and political outcomes.',
    lessonData: {
      objectives: [
        'Students will explain why Kaskaskia was strategically important to both British and American forces in 1778',
        'Students will analyze Clark\'s diplomatic approach to the French Creole population and evaluate its effectiveness',
        'Students will trace the connection between the capture of Kaskaskia and the eventual Northwest Ordinance of 1787',
        'Students will compare military conquest with diplomatic persuasion as strategies for territorial control',
      ],
      essentialQuestions: [
        'When is diplomacy more powerful than military force, and what conditions make that possible?',
        'How did the French Creole population of Kaskaskia understand their own choices in 1778, and what did they gain and lose by supporting the American cause?',
        'What is the difference between winning a battle and winning a territory, and how does Clark\'s campaign illustrate that distinction?',
      ],
      materials: [
        'Map of the Illinois Country showing Kaskaskia, Cahokia, Prairie du Rocher, and Vincennes',
        'Excerpt from George Rogers Clark\'s Memoir describing the Kaskaskia capture',
        'Map of the Northwest Territory as organized by the Northwest Ordinance of 1787',
        'Timeline: from Clark\'s commission (1777) through Virginia\'s cession of the Northwest (1784)',
        'Brief overview of French Creole colonial culture in the Illinois Country',
      ],
      activities: [
        {
          name: 'The Strategic Map Problem',
          duration: '20 minutes',
          description:
            'Students receive a map of the Illinois Country and are told: you are George Rogers Clark in 1777. Kentucky settlements are being raided by British-allied Native forces. The source of the raids is British supply and direction from Detroit. What is your strategic problem and what would you do about it? Students work in pairs to identify the geographic logic of the Illinois campaign, then share with the class. Teacher introduces Clark\'s actual plan and compares it to student proposals.',
        },
        {
          name: 'The Choice at Kaskaskia',
          duration: '25 minutes',
          description:
            'Students read Clark\'s account of his speech to the French Creoles the morning after the capture, then role-play as community members deciding how to respond. What did the French Creoles have to gain from supporting the Americans? What did they risk? Students consider: religion (Catholic, which the Virginia government agreed to protect), language (French, which would not be forcibly replaced), property (which Clark promised to protect), and history (they had not chosen to be British subjects in 1763). Class discussion: was Clark\'s offer fair? What would you have done?',
        },
        {
          name: 'From Kaskaskia to Six States',
          duration: '20 minutes',
          description:
            'Students trace the chain of consequences from the capture of Kaskaskia (1778) through Virginia\'s cession of the Northwest Territory (1784) to the Northwest Ordinance (1787) to statehood for Illinois, Indiana, Ohio, Michigan, and Wisconsin. Using a graphic organizer, students identify each link in the chain and explain why each step was necessary for the next one to occur. Discussion: if Clark had failed at Kaskaskia, what might the map of North America look like today?',
        },
      ],
      assessment:
        'Students write a 3-paragraph essay responding to: "George Rogers Clark won the Illinois Country through cultural diplomacy rather than military force. What does this suggest about the relationship between understanding people and achieving strategic goals?" They must use specific evidence from the capture of Kaskaskia and its aftermath.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.9-10.3: Analyze in detail a series of events described in a text; determine whether earlier events caused later ones or simply preceded them',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.1.9-12: Evaluate how historical events and developments were shaped by unique circumstances of time and place as well as broader historical contexts',
        'D2.His.5.9-12: Analyze how historical contexts shaped and continue to shape people\'s perspectives',
        'D2.Geo.2.9-12: Use maps and other geographic representations to explain relationships between the locations of places or regions',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-il-kaskaskia' } },
    title: 'The Northwest Ordinance: Rules for a New Territory',
    gradeRange: '6-8',
    estimatedDuration: '50 minutes',
    summary:
      'This lesson uses the history of Kaskaskia and the Northwest Territory to teach the Northwest Ordinance of 1787 — one of the most important documents of the early United States, establishing how new territories would become states and prohibiting slavery in the region. Students connect Clark\'s 1778 campaign to the legal framework that shaped the American midwest and consider why the rules set for new territories matter for the long-term character of the nation.',
    lessonData: {
      objectives: [
        'Students will explain what the Northwest Territory was and how it came to be controlled by the United States',
        'Students will identify the key provisions of the Northwest Ordinance of 1787, including the prohibition of slavery',
        'Students will connect Clark\'s Illinois campaign to the eventual organization of the Northwest Territory',
        'Students will analyze why the founders believed it was important to establish rules for territorial governance in advance',
      ],
      essentialQuestions: [
        'Why does it matter how a new territory is organized — what rules it follows from the beginning?',
        'How did the prohibition of slavery in the Northwest Ordinance shape the future states of the American midwest?',
        'What is the connection between winning land militarily and governing it constitutionally?',
      ],
      materials: [
        'Map of the Northwest Territory with future state boundaries overlaid',
        'Excerpts from the Northwest Ordinance of 1787 (simplified for 6-8 grade level)',
        'Timeline from Clark\'s capture of Kaskaskia (1778) to the Northwest Ordinance (1787)',
        'Brief biography of Clark adapted for middle school',
        'Comparison chart: how the Northwest Ordinance affected slavery vs. territories without such rules',
      ],
      activities: [
        {
          name: 'How Big Is the Northwest Territory?',
          duration: '10 minutes',
          description:
            'Students receive a map showing the Northwest Territory overlaid with modern state boundaries. Teacher asks: how many states came from this territory? (Illinois, Indiana, Ohio, Michigan, Wisconsin, and part of Minnesota.) How did the United States get this land? Students learn the chain from Clark\'s 1778 campaign to Virginia\'s cession to federal control. Discussion: why did Virginia give this land to the federal government instead of keeping it?',
        },
        {
          name: 'The Rules of the Ordinance',
          duration: '20 minutes',
          description:
            'Students read simplified excerpts from the Northwest Ordinance and identify its key provisions: how territories become states (population thresholds), what rights residents have (religious freedom, trial by jury, no cruel punishment), and the prohibition of slavery. Students use a graphic organizer to record each provision and explain why the founders might have included it. Special focus on the slavery prohibition: why was this included, and what was its long-term significance?',
        },
        {
          name: 'Rules Have Consequences',
          duration: '20 minutes',
          description:
            'Class discussion: the Northwest Ordinance prohibited slavery in the future states of Ohio, Indiana, Illinois, Michigan, and Wisconsin. The states that developed on the other side of the Ohio River (Kentucky, Tennessee) had no such prohibition. By 1860, the states north of the Ohio River were free states; the states south were slave states. How did one legal document — the Northwest Ordinance — help determine which states would be on which side in the Civil War? Students write a short response connecting the 1787 Ordinance to 1861.',
        },
      ],
      assessment:
        'Exit ticket: students answer three questions — (1) What was the Northwest Territory and how did the U.S. get it? (2) Name two provisions of the Northwest Ordinance. (3) Why do you think the prohibition of slavery in the Northwest Ordinance mattered for American history?',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information with other information in print and digital texts',
        'CCSS.ELA-LITERACY.WHST.6-8.2: Write informative/explanatory texts',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.14.6-8: Explain multiple causes and effects of events and developments in the past',
        'D2.Civ.6.6-8: Describe the roles of political, civil, and economic organizations in shaping people\'s lives',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// KASKASKIA — ADDITIONAL LINKS
// ============================================================================

export const kaskaskiaAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-wv-wheeling',
    linkType: 'SHARED_THEME',
    reason: 'Both Kaskaskia and Wheeling were key frontier posts in the western theater of the Revolution; both faced British-directed Native raids from the Ohio Country and both were part of the American effort to secure the trans-Appalachian interior.',
    weight: 82,
  },
  {
    toTownId: 'us-oh-marietta',
    linkType: 'SHARED_THEME',
    reason: 'Clark\'s capture of Kaskaskia secured the legal basis for the Northwest Territory; Marietta was the first permanent American settlement in that territory, established in 1788 under the framework the Northwest Ordinance made possible.',
    weight: 88,
  },
  {
    toTownId: 'us-pa-philadelphia',
    linkType: 'SHARED_PERSON',
    reason: 'George Rogers Clark coordinated with the Continental Congress in Philadelphia for recognition of his Virginia commission and for territorial policy in the Illinois Country; Philadelphia was the political center that gave legal meaning to Clark\'s military victories.',
    weight: 70,
  },
  {
    toTownId: 'us-va-richmond',
    linkType: 'SHARED_PERSON',
    reason: 'Governor Patrick Henry in Richmond secretly commissioned Clark\'s Illinois campaign; Virginia\'s capital was the political source of Clark\'s authority and the destination of his dispatches reporting the Kaskaskia capture.',
    weight: 85,
  },
  {
    toTownId: 'us-pa-pittsburgh',
    linkType: 'ROUTE',
    reason: 'Pittsburgh (Fort Pitt) was Clark\'s logistical base and the source of his supplies and recruits; the Kentucky settlements he was defending from British-directed raids lay across the Ohio from Pittsburgh, making Fort Pitt central to the entire western theater.',
    weight: 90,
  },
  {
    toTownId: 'us-ga-savannah',
    linkType: 'COMPARISON',
    reason: 'Both Kaskaskia and Savannah represent theaters of the Revolution far from the eastern seaboard where the war\'s conventional narrative centers; comparing the western frontier campaign with the southern campaign illuminates the geographic breadth of the conflict.',
    weight: 60,
  },
  {
    toTownId: 'us-sc-charleston',
    linkType: 'SHARED_EVENT',
    reason: 'The fall of Charleston in May 1780 and Clark\'s capture of Kaskaskia in 1778 were both pivotal moments in the Revolution\'s outer theaters — Charleston opened the southern campaign, Kaskaskia opened the northwest; together they show the continental scale of the conflict.',
    weight: 58,
  },
];
