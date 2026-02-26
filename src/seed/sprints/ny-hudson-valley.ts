// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// NY Hudson Valley: Kingston (NY) + Newburgh (NY)
// Campaign: New York's Revolutionary capital and Washington's final headquarters

import { Prisma } from '@prisma/client';

// ============================================================================
// KINGSTON
// ============================================================================

export const kingstonTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Kingston holds a distinction no other American city can claim: it was the first capital of New York State and the place the British decided to destroy for exactly that reason. On October 16, 1777, General John Vaughan's fleet sailed up the Hudson and burned the town to the ground. Nearly every building in the Stockade District was destroyed. Residents watched the glow from surrounding hills.

Understanding why Kingston was targeted requires understanding the broader Saratoga campaign. Burgoyne's army was moving south from Canada and Howe had gone to Philadelphia rather than linking up with him. The British plan to split the colonies along the Hudson River corridor was unraveling. The burning of Kingston was partly punitive and partly an attempt to create panic in the American rear. It accomplished neither. Burgoyne surrendered two days later.

What makes Kingston essential to the Revolution is its role as a functioning seat of government. The New York State Constitution had been drafted and adopted here in April 1777. The legislature, the governor, and the state government were operating here — governing a state at war, raising troops, managing supplies, maintaining civil order in a region where Loyalist and Patriot populations lived in dangerous proximity. When the British burned Kingston, they were not burning a military target. They were burning the institutional infrastructure of a new republic.

The Stockade District where the government operated is one of the most intact early American urban landscapes in the Northeast. The street grid laid out by Dutch settlers in the seventeenth century survives. Many lots retain their original footprints even where buildings were rebuilt after the fire. The Senate House, where the first New York State Senate met, survived and still stands. Walking its streets is walking the pattern that existed when the first New York legislature tried to govern a state simultaneously fighting for its existence.

The human cost tends to get lost in the political narrative. Families lost everything — homes, tools, documents, livestock. The Dutch Reformed Church burned. The courthouse burned. Hundreds became refugees. Kingston rebuilt, but the trauma of 1777 shaped the community for generations. The burning was also strategically futile: Burgoyne's surrender the following day made the raid a costly gesture that changed nothing.`,
};

export const kingstonPeople: Array<{ person: Prisma.PersonCreateInput; connectionNote: string }> = [
  {
    person: {
      id: 'person-george-clinton-kingston',
      name: 'George Clinton',
      roles: ['First Governor of New York', 'Continental Army General', 'Patriot Leader'],
      bioShort: 'First Governor of New York, inaugurated at Kingston in July 1777. Commanded the defense of the Hudson Highlands, tried to prevent the British raid, and governed New York through the remainder of the war. Later served as Vice President under Jefferson and Madison.',
      birthYear: 1739, deathYear: 1812, verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Inaugurated as first Governor of New York at Kingston; present in the region when the British burned the town in October 1777.',
  },
  {
    person: {
      id: 'person-john-jay-kingston',
      name: 'John Jay',
      roles: ['Statesman', 'New York Constitution Drafter', 'First Chief Justice'],
      bioShort: 'Principal drafter of the New York State Constitution of 1777, written and adopted at Kingston. Later became the first Chief Justice of the United States. His constitutional work at Kingston shaped New York governance for decades.',
      birthYear: 1745, deathYear: 1829, verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Principal drafter of the New York State Constitution of 1777, written at Kingston.',
  },
  {
    person: {
      id: 'person-robert-livingston-kingston',
      name: 'Robert R. Livingston',
      roles: ['New York Statesman', 'Constitution Drafter', 'Chancellor of New York'],
      bioShort: 'Member of the committee that drafted the New York State Constitution at Kingston in 1777. Later administered the oath of office to George Washington at the first presidential inauguration and negotiated the Louisiana Purchase.',
      birthYear: 1746, deathYear: 1813, verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Served on the constitutional drafting committee at Kingston; one of the principal architects of the new state government.',
  },
  {
    person: {
      id: 'person-john-vaughan-kingston',
      name: 'General John Vaughan',
      roles: ['British General', 'Hudson River Expedition Commander'],
      bioShort: 'British general who commanded the October 1777 Hudson River expedition. Sailed north after the fall of Forts Montgomery and Clinton, then ordered the systematic burning of Kingston. The raid failed its strategic purpose when Burgoyne surrendered the following day.',
      birthYear: 1748, deathYear: 1795, verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Commanded the British forces that burned Kingston on October 16, 1777.',
  },
  {
    person: {
      id: 'person-pierre-van-cortlandt',
      name: 'Pierre Van Cortlandt',
      roles: ['President of New York Convention', 'Lieutenant Governor of New York'],
      bioShort: 'Presided over the New York Convention that adopted the 1777 state constitution at Kingston. Later served as Lieutenant Governor. Part of the Hudson Valley gentry that committed to the Patriot cause despite the personal risks in a divided region.',
      birthYear: 1721, deathYear: 1814, verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Presided over the New York Convention that adopted the 1777 state constitution at Kingston.',
  },
  {
    person: {
      id: 'person-egbert-benson-kingston',
      name: 'Egbert Benson',
      roles: ['First New York Attorney General', 'Patriot Lawyer'],
      bioShort: 'Served as the first Attorney General of New York State under the 1777 constitution drafted at Kingston. Part of the legal establishment that staffed the new state government and translated revolutionary principles into functioning institutions.',
      birthYear: 1746, deathYear: 1833, verificationStatus: 'VERIFIED',
    },
    connectionNote: 'First Attorney General of New York under the state constitution adopted at Kingston.',
  },
  {
    person: {
      id: 'person-morris-graham-kingston',
      name: 'Colonel Morris Graham',
      roles: ['New York Militia Colonel', 'Ulster County Defender'],
      bioShort: 'Ulster County militia colonel who attempted to organize the defense of Kingston against Vaughan\'s October 1777 raid. His forces were insufficient to resist the British fleet; the town was evacuated before the burning commenced.',
      birthYear: 1730, deathYear: 1797, verificationStatus: 'ANECDOTAL',
    },
    connectionNote: 'Local militia commander who attempted to defend Kingston against the British raid of October 1777.',
  },
  {
    person: {
      id: 'person-johannes-hardenbergh',
      name: 'Johannes Hardenbergh',
      roles: ['New York State Senator', 'Ulster County Representative'],
      bioShort: 'Kingston-area Patriot who served as one of the first senators in the New York State Senate, which held its inaugural session at the Senate House in Kingston in 1777. Represented the Ulster County constituency most directly affected by the British burning.',
      birthYear: 1736, deathYear: 1790, verificationStatus: 'ANECDOTAL',
    },
    connectionNote: 'Served in the first New York State Senate that met at Kingston\'s Senate House in 1777.',
  },
];

export const kingstonPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-kingston-senate-house',
    name: 'Senate House State Historic Site',
    placeType: 'GOVERNMENT',
    description: 'The stone house where the first New York State Senate met in 1777, one of the few buildings in the Stockade District that survived the British burning. Built in the 1670s, it served as the legislature\'s meeting place from September to October 1777. Now a state historic site with a museum.',
    lat: 41.9251, lng: -74.0187, address: '296 Fair Street, Kingston, NY 12401',
    hours: 'Wed–Sat 10am–5pm, Sun 1–5pm (seasonal)', admission: 'Free',
    website: 'https://parks.ny.gov/historic-sites/31/details.aspx',
    historicalNote: 'Site of the first New York State Senate meeting under the 1777 constitution; survived the British burning of Kingston.',
    featured: true, displayOrder: 1, town: { connect: { id: 'us-ny-kingston' } },
  },
  {
    id: 'place-kingston-stockade-district',
    name: 'Kingston Stockade Historic District',
    placeType: 'LANDMARK',
    description: 'The original heart of Kingston, retaining its original Dutch street grid and many lots with 17th- and 18th-century footprints. Most structures were burned by the British in October 1777 and rebuilt. Listed on the National Register of Historic Places.',
    lat: 41.9253, lng: -74.0195, address: 'Wall Street and Fair Street, Kingston, NY 12401',
    historicalNote: 'The urban fabric where New York State government operated in 1777; the street pattern survives despite British destruction of nearly all buildings.',
    featured: true, displayOrder: 2, town: { connect: { id: 'us-ny-kingston' } },
  },
  {
    id: 'place-kingston-old-dutch-church',
    name: 'Old Dutch Church of Kingston',
    placeType: 'CHURCH',
    description: 'The Reformed Protestant Dutch Church of Kingston, whose predecessor structure was burned by the British in October 1777. Current building dates to 1852; congregation traces to 1659. The burial ground contains graves of early Dutch settlers and Revolutionary-era figures.',
    lat: 41.9257, lng: -74.0190, address: '272 Wall Street, Kingston, NY 12401',
    historicalNote: 'Predecessor church burned by Vaughan\'s forces in October 1777; center of Kingston community life since the 17th century.',
    displayOrder: 3, town: { connect: { id: 'us-ny-kingston' } },
  },
  {
    id: 'place-kingston-founders-cemetery',
    name: 'Wiltwyck Cemetery (Old Dutch Burying Ground)',
    placeType: 'CEMETERY',
    description: 'Historic cemetery adjacent to the Old Dutch Church containing graves of Kingston\'s founding Dutch families and Revolutionary-era residents. Several legislators and officials of the first New York State government are buried here.',
    lat: 41.9259, lng: -74.0188, address: 'Wall Street, Kingston, NY 12401',
    historicalNote: 'Burial ground of the Dutch founding families and Revolutionary-era community members who witnessed the British burning.',
    displayOrder: 4, town: { connect: { id: 'us-ny-kingston' } },
  },
  {
    id: 'place-kingston-hurley-stone-houses',
    name: 'Hurley Stone Houses (Refugee Community)',
    placeType: 'HISTORIC_HOUSE',
    description: 'The village of Hurley, two miles west of Kingston, where state government officials fled when the British raid was imminent. Several 17th- and 18th-century stone houses survive; some sheltered the refugee government. The New York legislature briefly convened in Hurley after Kingston was destroyed.',
    lat: 41.9187, lng: -74.0590, address: 'Main Street, Hurley, NY 12443',
    historicalNote: 'Refuge for Kingston residents and the New York State government after the British burning of October 1777.',
    displayOrder: 5, town: { connect: { id: 'us-ny-kingston' } },
  },
  {
    id: 'place-kingston-uptown-historic-district',
    name: 'Kingston Uptown Historic District',
    placeType: 'LANDMARK',
    description: 'The broader Uptown Kingston area encompassing the Stockade District and surrounding 18th- and 19th-century development. Several stone houses date to the immediate post-1777 period, built by families returning after the British raid, illustrating the physical process of rebuilding a Revolutionary-era community.',
    lat: 41.9265, lng: -74.0178, address: 'Uptown Kingston, NY 12401',
    displayOrder: 6, town: { connect: { id: 'us-ny-kingston' } },
  },
];

export const kingstonEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-kingston-constitution-adopted',
    name: 'New York State Constitution Adopted at Kingston',
    startDate: new Date('1777-04-20'), datePrecision: 'DAY',
    summary: 'The New York State Constitutional Convention adopted the first New York State Constitution on April 20, 1777. Drafted primarily by John Jay and Robert Livingston, the document established a governor, bicameral legislature, and court system — a working governing blueprint for a state already at war, tested almost immediately by the conflict that produced it.',
    significanceWeight: 95, lat: 41.9251, lng: -74.0187, town: { connect: { id: 'us-ny-kingston' } },
  },
  {
    id: 'event-kingston-senate-first-session',
    name: 'First New York State Senate Session at Kingston',
    startDate: new Date('1777-09-01'), datePrecision: 'MONTH',
    summary: 'The first New York State Senate convened at the Senate House in Kingston in September 1777, beginning the work of governing the new state under the April constitution. The legislature conducted the ordinary business of state government — revenue, militia organization, supply — in the same building that is now a state historic site, six weeks before it would be threatened by the British fleet.',
    significanceWeight: 88, lat: 41.9251, lng: -74.0187, town: { connect: { id: 'us-ny-kingston' } },
  },
  {
    id: 'event-kingston-george-clinton-inauguration',
    name: 'Governor George Clinton Inaugurated at Kingston',
    startDate: new Date('1777-07-30'), datePrecision: 'DAY',
    summary: 'George Clinton was inaugurated as the first Governor of New York at Kingston on July 30, 1777. Clinton would serve continuously until 1795 — the longest consecutive gubernatorial tenure in New York history. His inauguration marked the moment New York became a functioning republican state.',
    significanceWeight: 90, lat: 41.9251, lng: -74.0187, town: { connect: { id: 'us-ny-kingston' } },
  },
  {
    id: 'event-kingston-fort-montgomery-falls',
    name: 'British Capture Forts Montgomery and Clinton',
    startDate: new Date('1777-10-06'), datePrecision: 'DAY',
    summary: 'British forces under General Henry Clinton captured Forts Montgomery and Clinton at the Hudson Highlands on October 6, 1777. The fall of the Highland forts opened the river to British navigation northward, severing the chain across the Hudson and giving Vaughan\'s fleet an open path to Kingston.',
    significanceWeight: 85, lat: 41.3932, lng: -73.9943, town: { connect: { id: 'us-ny-kingston' } },
  },
  {
    id: 'event-kingston-burning',
    name: 'British Burn Kingston',
    startDate: new Date('1777-10-16'), datePrecision: 'DAY',
    summary: 'British forces under General John Vaughan landed at Kingston on October 16, 1777, and systematically burned the town. Nearly every building in the Stockade District was destroyed; only the Senate House and a handful of stone structures survived. The burning occurred two days before Burgoyne\'s surrender at Saratoga, rendering the punitive raid strategically pointless. Hundreds of residents became refugees; the town required decades of rebuilding.',
    significanceWeight: 97, lat: 41.9251, lng: -74.0187, town: { connect: { id: 'us-ny-kingston' } },
  },
  {
    id: 'event-kingston-burgoyne-surrenders',
    name: 'Burgoyne Surrenders at Saratoga',
    startDate: new Date('1777-10-17'), datePrecision: 'DAY',
    summary: 'General Burgoyne surrendered approximately 6,000 men to General Gates at Saratoga on October 17 — one day after the British burned Kingston. The burning was intended partly to relieve pressure on Burgoyne; instead it accelerated his isolation. Saratoga brought France into the war as an American ally. Kingston\'s destruction was the last act of a failed British strategy.',
    significanceWeight: 99, lat: 43.0059, lng: -73.6385, town: { connect: { id: 'us-ny-kingston' } },
  },
  {
    id: 'event-kingston-government-relocates',
    name: 'New York State Government Relocates to Poughkeepsie',
    startDate: new Date('1777-10-17'), datePrecision: 'MONTH',
    summary: 'Following the burning of Kingston, the New York State government relocated to Poughkeepsie, where it remained for the duration of the war. The relocation demonstrated both the resilience of the new institutional framework and the vulnerability of a capital without adequate military protection.',
    significanceWeight: 75, lat: 41.7004, lng: -73.9210, town: { connect: { id: 'us-ny-kingston' } },
  },
  {
    id: 'event-kingston-rebuilding-begins',
    name: 'Kingston Rebuilding Begins',
    startDate: new Date('1778-04-01'), datePrecision: 'YEAR',
    summary: 'In the spring of 1778, Kingston residents who had fled the burning began returning and rebuilding. Many rebuilt structures used original stone foundations and cellars that survived the fire, creating physical continuity with the pre-war community. The reconstruction provides a case study in post-destruction community recovery.',
    significanceWeight: 65, lat: 41.9251, lng: -74.0187, town: { connect: { id: 'us-ny-kingston' } },
  },
  {
    id: 'event-kingston-dutch-church-rebuilt',
    name: 'Dutch Reformed Church Rebuilt After Burning',
    startDate: new Date('1779-01-01'), datePrecision: 'YEAR',
    summary: 'The Dutch Reformed Church of Kingston, burned in the 1777 British raid, was rebuilt in the following years. Its restoration was a priority for returning residents and symbolized the broader recovery of Kingston\'s civilian community after the deliberate destruction of October 1777.',
    significanceWeight: 60, lat: 41.9257, lng: -74.0190, town: { connect: { id: 'us-ny-kingston' } },
  },
  {
    id: 'event-kingston-ny-state-capital-recognized',
    name: 'Kingston Recognized as First State Capital in Historical Record',
    startDate: new Date('1850-01-01'), datePrecision: 'YEAR',
    summary: 'By the mid-19th century, historians and preservationists recognized Kingston\'s role as New York\'s first state capital. The Senate House was preserved and eventually became a state historic site, cementing Kingston\'s identity as the birthplace of New York State government and anchoring the town\'s historical memory around the 1777 constitutional moment.',
    significanceWeight: 55, lat: 41.9251, lng: -74.0187, town: { connect: { id: 'us-ny-kingston' } },
  },
];

export const kingstonStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-kingston-burning-night',
    title: 'The Night Kingston Burned',
    storyType: 'HISTORICAL_VOICE',
    verificationStatus: 'VERIFIED',
    textVersion: `They could see it from the hills. The families who had fled when Vaughan's ships appeared on the river — carrying what they could, leaving the rest — stood on the ridges above the Rondout Creek and watched their town burn.

Kingston had been built over more than a century of Dutch and English settlement, its streets laid out in the pattern established in the 1650s, its stone houses constructed with Dutch solidity. The Stockade District had long since outgrown its original palisade walls, but the pattern remained: a dense, ordered town that had become the seat of a new state.

The burning was systematic. Vaughan's soldiers moved through the streets with torches. The Dutch Reformed Church burned. The courthouse burned. The taverns and houses and shops that made Kingston function burned. By morning, the Stockade District was ruins. The Senate House — thick stone, stone roof — survived. A handful of other stone buildings survived. Everything else was gone.

The people on the hills watching the fire knew exactly what they were seeing. They had built a government in that town. The New York State Senate had met there. The first governor had been inaugurated there. The constitution of a new republic had been written and adopted there. All of it had just been burned by an army trying to win a war it was losing.

What they could not know was that twenty miles north, at Saratoga, Burgoyne's army was in the final hours of its own destruction. The burning of Kingston was supposed to relieve pressure on Burgoyne. By the time the last embers cooled, it no longer mattered. Burgoyne surrendered the next morning. Kingston burned for nothing.`,
    audioScript: `They could see it from the hills. The families who had fled stood on the ridges and watched their town burn. Vaughan's soldiers moved through the streets with torches. The church burned. The courthouse burned. By morning — ruins.

The Senate House survived. A handful of stone buildings survived. Everything else was gone.

What they couldn't know was that at Saratoga, twenty miles north, Burgoyne was in the final hours of collapse. The burning was supposed to relieve him. Burgoyne surrendered the next morning. Kingston burned for nothing.`,
    tags: ['burning', 'British raid', 'Vaughan', '1777', 'Stockade District'],
    town: { connect: { id: 'us-ny-kingston' } },
  },
  {
    id: 'story-kingston-constitution-1777',
    title: 'Writing a State Into Being',
    storyType: 'MODERN_VOICE',
    narratorName: 'Constitutional Historian',
    narratorRole: 'Researcher, New York State Archives',
    verificationStatus: 'VERIFIED',
    textVersion: `The New York State Constitution of 1777 is sometimes treated as an afterthought — a regional document important to specialists but not to the general story of the Revolution. That framing misses what it actually was: a functioning blueprint for republican government drafted under conditions of active war.

John Jay did most of the drafting. He was thirty-one years old, a New York lawyer who had spent the previous two years figuring out how a colony becomes a state. The problem wasn't philosophical — the principles were already established. The problem was operational. How do you create a governor's office, a legislature, a court system in the middle of a war?

Jay's solution was pragmatic. The governor got real executive power — more than most early state constitutions allowed — because a state at war needed someone who could make decisions quickly. The legislature got two chambers. The courts got independence.

The constitution was adopted at Kingston on April 20, 1777. Within three months, George Clinton had been inaugurated as governor. Within six months, the Senate had held its first session. Within seven months, the town where it was written was burned to the ground.

The constitution survived. The government survived. The British could destroy the buildings, but they could not destroy the institutional structure Jay had designed. That is the story of Kingston that tends to get overlooked: not just the burning, but what didn't burn.`,
    audioScript: `The 1777 New York constitution is sometimes treated as an afterthought. That misses what it was: a blueprint for republican government drafted under active war.

Jay did most of the drafting — thirty-one years old, figuring out how a colony becomes a state. His solution was pragmatic: real executive power for the governor, two chambers, independent courts.

Adopted at Kingston on April 20, 1777. Seven months later, the town was burned to the ground. The constitution survived. The government survived. The British couldn't destroy what Jay had built.`,
    tags: ['constitution', 'John Jay', 'state government', '1777', 'republican government'],
    town: { connect: { id: 'us-ny-kingston' } },
  },
];

export const kingstonLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-ny-kingston' } },
    title: 'Kingston 1777: Building and Burning a State Capital',
    gradeRange: '6-8',
    estimatedDuration: '2-3 class periods',
    summary: 'This lesson uses Kingston as a case study in how new American states built functioning governments during the Revolutionary War — and what it meant when the British targeted those governments for destruction. Students trace the sequence from the constitutional convention through the first legislative session to the British burning, examining how political institutions are created, what makes them vulnerable, and how communities recover from deliberate destruction.',
    lessonData: {
      objectives: [
        'Explain why the British targeted Kingston in October 1777 and connect the raid to the broader Saratoga campaign',
        'Analyze the New York State Constitution of 1777 as a document designed for a state at war',
        'Evaluate the relationship between physical destruction and institutional survival using Kingston evidence',
        'Use geographic evidence to understand why Kingston\'s location made it vulnerable to the British Hudson River expedition',
      ],
      essentialQuestions: [
        'Can a government survive even if the buildings where it meets are destroyed? What does Kingston suggest?',
        'Why would the British burn a newly-established state capital? What did they hope to accomplish?',
        'What makes a constitution more than just a piece of paper?',
      ],
      materials: [
        'Map of Hudson River valley showing British expedition route, October 1777',
        'Excerpt from New York State Constitution of 1777, Preamble and Articles I-III',
        'Eyewitness account of the Kingston burning (adapted from contemporary letters)',
        'Timeline graphic organizer: Constitutional Convention → Legislature → Burning → Relocation → Rebuilding',
        'Photographs of the Senate House and Stockade District',
      ],
      activities: [
        { name: 'The Hudson River as a Highway', duration: '20 minutes', description: 'Students trace the British expedition route from New York City through the Highland forts to Kingston, identifying why control of the river mattered and why Kingston was both a logical capital and a logical target.' },
        { name: 'Reading the Constitution as a War Document', duration: '25 minutes', description: 'Students annotate the Preamble and first three articles: What powers does the governor have? Why might a state at war need a strong executive? What does the document assume about how the new state will function?' },
        { name: 'What Burned? What Survived?', duration: '20 minutes', description: 'Students create a two-column chart of what was physically destroyed vs. what institutions survived. Discussion: the British destroyed almost every building. Did they destroy the government?' },
        { name: 'Rebuilding: What Comes Back?', duration: '15 minutes', description: 'Students read a brief account of Kingston\'s 1778-1780 rebuilding and discuss what priorities returning residents would have. Connection to essential question: is an institution the same as the building it meets in?' },
      ],
      assessment: 'Two-paragraph written response: "Did the British succeed when they burned Kingston?" Students must address both what was destroyed and what was not, using specific evidence from the lesson.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information with other information in print and digital texts',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.Geo.2.6-8: Use maps to explain relationships between locations and historical events',
        'D2.Civ.1.6-8: Distinguish powers and responsibilities within governmental contexts',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-ny-kingston' } },
    title: 'Constitution-Making Under Fire: Kingston and Republican Government',
    gradeRange: '9-12',
    estimatedDuration: '3-4 class periods',
    summary: 'This lesson uses the New York State Constitution of 1777 as an entry point for advanced analysis of revolutionary constitution-making. Students examine the design choices John Jay and Robert Livingston made at Kingston, compare the New York document to other state constitutions, and evaluate how active war conditions shaped institutional design. The Kingston case raises live questions in democratic theory: how much executive power is appropriate in crisis? What is the relationship between constitutional text and political reality?',
    lessonData: {
      objectives: [
        'Analyze the design choices in the 1777 New York constitution and explain the reasoning behind specific provisions',
        'Compare the New York constitution to the Virginia Declaration of Rights on questions of executive power',
        'Evaluate the relationship between constitutional legitimacy and physical infrastructure',
        'Assess whether the British burning of Kingston constituted a strategic success',
      ],
      essentialQuestions: [
        'What makes a constitution legitimate — the text, the process, or the institutions it creates?',
        'How does crisis affect constitutional design? What does 1777 reveal about constitution-making under war?',
        'Can an institution be destroyed by destroying the building it meets in?',
      ],
      materials: [
        'New York State Constitution of 1777 (selected articles)',
        'Virginia Declaration of Rights, 1776',
        'John Jay\'s correspondence during the Constitutional Convention, April 1777',
        'British military orders for the Kingston expedition (Vaughan to Clinton, October 1777)',
        'Secondary source excerpt on state constitution-making, 1776-1780',
      ],
      activities: [
        { name: 'Executive Power: New York vs. Virginia', duration: '30 minutes', description: 'Students compare executive provisions in the 1777 New York constitution and Virginia Declaration of Rights, asking: What powers does the New York governor have that the Virginia model restricts? Why might Jay have designed a stronger executive? What were the risks of a weak executive in 1777?' },
        { name: 'Design Problem: Building Government at War', duration: '35 minutes', description: 'Groups identify three specific problems a new state faced in 1777 (military supply, revenue, loyalty) and analyze how the constitution\'s design addressed each. Synthesis: what are the limits of constitutional design as a solution to political problems?' },
        { name: 'Document Analysis: British Orders for Kingston', duration: '25 minutes', description: 'Students read the British orders and analyze: What did the British hope to accomplish? What assumptions about American institutions did those goals reflect? Were those assumptions correct?' },
        { name: 'Debate: Did the British Strategy Fail?', duration: '30 minutes', description: 'Structured discussion on whether burning Kingston was a strategic failure, tactical success but strategic failure, or both — requiring students to address the Saratoga timeline and the question of institutional vs. physical destruction.' },
      ],
      assessment: 'Analytical essay (1000-1500 words): "The British burning of Kingston in 1777 was a strategic failure because ___." Students develop a specific argument about physical destruction vs. institutional survival using at least four primary and secondary sources.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors on the same topic',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.9.9-12: Analyze the relationship between historical sources and the secondary interpretations made from them',
        'D2.Civ.3.9-12: Analyze the impact of constitutions, laws, and treaties on the maintenance of national order',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const kingstonAdditionalLinks: Array<{
  toTownId: string;
  linkType: 'SHARED_EVENT' | 'SHARED_PERSON' | 'GEOGRAPHIC_PROXIMITY' | 'SHARED_THEME';
  reason: string;
  weight: number;
}> = [
  { toTownId: 'us-ny-newburgh', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Both towns are central Hudson Valley communities whose Revolutionary War significance is defined by the same waterway. Kingston was burned because the British could sail to it; Newburgh was Washington\'s headquarters because it commanded the river. They are 30 miles apart.', weight: 85 },
  { toTownId: 'us-ny-saratoga', linkType: 'SHARED_EVENT', reason: 'The British burning of Kingston was directly connected to the Saratoga campaign — Vaughan\'s raid was intended to relieve pressure on Burgoyne. Burgoyne surrendered the day after Kingston burned. The two events are inextricable.', weight: 95 },
  { toTownId: 'us-ny-white-plains', linkType: 'SHARED_PERSON', reason: 'George Clinton commanded both the Highland forts that fell before the Kingston burning and the broader New York Patriot effort. The same Hudson Valley Patriot leadership network operated at White Plains in 1776 and Kingston in 1777.', weight: 60 },
  { toTownId: 'us-ny-harlem-heights', linkType: 'SHARED_THEME', reason: 'Both Kingston and Harlem Heights illustrate the British failure to destroy American institutions: at Harlem Heights the army survived; at Kingston the government survived the destruction of its capital.', weight: 55 },
];

// ============================================================================
// NEWBURGH
// ============================================================================

export const newburghTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Newburgh is where the American Revolution almost ended in military dictatorship. In March 1783, with peace negotiations underway but not concluded, anonymous letters circulated among Continental Army officers at the Newburgh cantonment calling on the army to take matters into its own hands if Congress failed to provide promised back pay and pensions. The letters stopped short of explicit mutiny, but the implication was clear: the army could refuse to disband, could threaten Congress, could use force.

Washington's response is one of the defining moments in American political history. He called a meeting of the officers, walked into the room, and gave a speech that took their grievances seriously before dismantling the logic of acting on them. He had been with them from the beginning. He had made the same sacrifices. He was not arguing from comfortable distance. Then, reaching for a letter he wanted to read, he stopped and put on his spectacles — which he had not worn in public before. "Gentlemen, you will permit me to put on my spectacles, for I have not only grown gray but almost blind in the service of my country." Several officers reportedly wept. The conspiracy collapsed.

The Newburgh Conspiracy mattered not just because it prevented a specific crisis but because of the precedent it set. The American military would remain subordinate to civilian authority. The pattern established at Newburgh — officers with legitimate grievances choosing persuasion over force — shaped American civil-military relations for generations. Historians studying why America did not produce a Bonaparte often point to what happened in this room on March 15, 1783.

Hasbrouck House, where Washington maintained headquarters from April 1782 to August 1783, is the longest he occupied any single headquarters during the war. New York State purchased it in 1850, making it one of the oldest public museums in America. It is also where he issued the general orders establishing the Badge of Military Merit — the precursor to the Purple Heart — and where he proclaimed the cessation of hostilities on April 19, 1783, the eighth anniversary of Lexington and Concord.`,
};

export const newburghPeople: Array<{ person: Prisma.PersonCreateInput; connectionNote: string }> = [
  {
    person: {
      id: 'person-george-washington-newburgh',
      name: 'George Washington',
      roles: ['Commander-in-Chief', 'General', 'Constitutional Statesman'],
      bioShort: 'Maintained headquarters at Hasbrouck House in Newburgh from April 1782 to August 1783. His address to the officers on March 15, 1783, prevented the Newburgh Conspiracy from becoming a military coup and established the precedent of civilian control that has defined American civil-military relations ever since.',
      birthYear: 1732, deathYear: 1799, verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Maintained headquarters at Hasbrouck House; addressed the Newburgh Conspiracy meeting on March 15, 1783.',
  },
  {
    person: {
      id: 'person-horatio-gates-newburgh',
      name: 'General Horatio Gates',
      roles: ['Continental Army General', 'Saratoga Victor', 'Newburgh Conspiracy Figure'],
      bioShort: 'Continental general who commanded at Saratoga and was widely believed to have been involved in organizing the Newburgh Conspiracy. Presided over the officers\' meeting on March 15, 1783, where Washington made his famous address. His role in the conspiracy remains debated but his central position is documented.',
      birthYear: 1727, deathYear: 1806, verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Presided over the officers\' meeting on March 15, 1783; believed to have been a central organizer of the Newburgh Conspiracy.',
  },
  {
    person: {
      id: 'person-john-armstrong-newburgh',
      name: 'John Armstrong Jr.',
      roles: ['Continental Army Major', 'Anonymous Letter Author', 'Future Secretary of War'],
      bioShort: 'Continental Army aide-de-camp who wrote the anonymous "Newburgh Addresses" circulated among officers in March 1783. His letters expressed the army\'s frustrations while implying without stating that officers might act against Congress. Authorship was suspected at the time and confirmed afterward. He later served as Secretary of War.',
      birthYear: 1758, deathYear: 1843, verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Wrote the anonymous Newburgh Addresses that precipitated the conspiracy; served as aide to General Gates at Newburgh.',
  },
  {
    person: {
      id: 'person-alexander-mcdougall-newburgh',
      name: 'General Alexander McDougall',
      roles: ['Continental Army General', 'Officers\' Committee Chairman', 'Son of Liberty'],
      bioShort: 'New York general who chaired the officers\' committee that traveled to Philadelphia in January 1783 to press Congress for back pay and pensions. The committee\'s failure contributed directly to the frustration that produced the Newburgh Conspiracy two months later.',
      birthYear: 1732, deathYear: 1786, verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Led the officers\' committee to Congress in January 1783; the committee\'s failure contributed directly to the Newburgh Conspiracy.',
  },
  {
    person: {
      id: 'person-henry-knox-newburgh',
      name: 'General Henry Knox',
      roles: ['Continental Army General', 'Artillery Commander', 'Washington Loyalist'],
      bioShort: 'Artillery commander and Washington\'s close ally present at Newburgh during the conspiracy. Knox was firmly in Washington\'s camp and helped manage the officers\' discontent. His loyalty during the crisis exemplified the group of Washington intimates who held the army together through the final difficult year of the war.',
      birthYear: 1750, deathYear: 1806, verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Present at Newburgh as Washington\'s artillery commander; supported Washington\'s position during the Newburgh Conspiracy.',
  },
  {
    person: {
      id: 'person-frederich-von-steuben-newburgh',
      name: 'Baron Friedrich von Steuben',
      roles: ['Prussian Military Advisor', 'Inspector General', 'Valley Forge Drill Master'],
      bioShort: 'Prussian officer who transformed Continental Army training at Valley Forge and remained a senior officer through the war\'s end. Present at Newburgh with legitimate unpaid compensation claims. His presence illustrated the international dimension of American military service and the complex obligations Congress had incurred.',
      birthYear: 1730, deathYear: 1794, verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Present at the Newburgh cantonment with unpaid compensation claims similar to those driving the conspiracy.',
  },
  {
    person: {
      id: 'person-jonathan-hasbrouck',
      name: 'Jonathan Hasbrouck',
      roles: ['Local Patriot', 'New York Militia Officer', 'Property Owner'],
      bioShort: 'Owner of Hasbrouck House in Newburgh, who died in 1780. His widow Tryntje allowed Washington to use the family\'s Dutch stone house as his headquarters from April 1782. The house remained in the family until New York State purchased it in 1850, making it one of the first publicly owned historic sites in America.',
      birthYear: 1728, deathYear: 1780, verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Original owner of Hasbrouck House; his widow hosted Washington\'s final military headquarters from 1782 to 1783.',
  },
  {
    person: {
      id: 'person-timothy-pickering-newburgh',
      name: 'Colonel Timothy Pickering',
      roles: ['Continental Army Quartermaster General', 'Massachusetts Patriot'],
      bioShort: 'Continental Army Quartermaster General present at Newburgh during the conspiracy period. Pickering had legitimate unpaid wage claims but ultimately supported Washington\'s position at the March 15 meeting. His later career in Massachusetts politics illustrated the transition of Continental officers into civilian public life.',
      birthYear: 1745, deathYear: 1829, verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Served as Quartermaster General at the Newburgh cantonment; present during the Newburgh Conspiracy.',
  },
];

export const newburghPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-newburgh-hasbrouck-house',
    name: 'Washington\'s Headquarters State Historic Site (Hasbrouck House)',
    placeType: 'HISTORIC_HOUSE',
    description: 'The Dutch stone farmhouse that served as Washington\'s final military headquarters from April 1782 to August 1783 — the longest he occupied any single headquarters during the war. Site of the Newburgh Conspiracy address, the Badge of Military Merit orders, and the cessation of hostilities proclamation. Purchased by New York State in 1850, one of the oldest public museums in America.',
    lat: 41.5018, lng: -74.0136, address: '84 Liberty Street, Newburgh, NY 12550',
    hours: 'Wed–Sat 10am–5pm, Sun 1–5pm (seasonal)', admission: 'Free',
    website: 'https://parks.ny.gov/historic-sites/17/details.aspx',
    historicalNote: 'Washington\'s longest-occupied headquarters and site of the March 15, 1783 Newburgh Conspiracy address. The oldest public museum in New York State.',
    featured: true, displayOrder: 1, town: { connect: { id: 'us-ny-newburgh' } },
  },
  {
    id: 'place-newburgh-temple-hill',
    name: 'New Windsor Cantonment State Historic Site (Temple Hill)',
    placeType: 'BATTLEFIELD',
    description: 'The site of the New Windsor Cantonment where approximately 10,000 Continental Army soldiers camped during the final year of the war. The Temple building, constructed by the troops themselves, was the meeting hall where Washington addressed the Newburgh Conspiracy on March 15, 1783. Now a state historic site with reconstructed cantonment structures.',
    lat: 41.4687, lng: -74.0252, address: '374 Temple Hill Road, New Windsor, NY 12553',
    hours: 'Wed–Sat 10am–5pm (seasonal)', website: 'https://parks.ny.gov/historic-sites/22',
    historicalNote: 'Site of the Temple building where Washington confronted the Newburgh Conspiracy on March 15, 1783.',
    featured: true, displayOrder: 2, town: { connect: { id: 'us-ny-newburgh' } },
  },
  {
    id: 'place-newburgh-knox-headquarters',
    name: 'Knox\'s Headquarters State Historic Site',
    placeType: 'HISTORIC_HOUSE',
    description: 'The stone house in Vails Gate that served as headquarters for General Henry Knox and other Continental Army officers during the Newburgh cantonment period. Part of the network of facilities supporting the final-year army. Preserved as a state historic site.',
    lat: 41.4650, lng: -74.0478, address: '289 NY-94, Vails Gate, NY 12584',
    hours: 'By appointment (seasonal)', website: 'https://parks.ny.gov/historic-sites/23',
    historicalNote: 'Headquarters of General Henry Knox during the Newburgh cantonment; part of the cluster of Revolutionary War sites surrounding Washington\'s headquarters.',
    displayOrder: 3, town: { connect: { id: 'us-ny-newburgh' } },
  },
  {
    id: 'place-newburgh-hudson-river-waterfront',
    name: 'Newburgh Waterfront and River Overlook',
    placeType: 'LANDMARK',
    description: 'The Hudson River waterfront and bluff below Hasbrouck House, providing the geographic context for Newburgh\'s strategic importance. Washington chose Newburgh partly because the bluff commanded the river, providing early warning of British naval movement. Historical markers along the waterfront note the Revolutionary War significance.',
    lat: 41.5004, lng: -74.0169, address: 'Water Street, Newburgh, NY 12550',
    displayOrder: 4, town: { connect: { id: 'us-ny-newburgh' } },
  },
  {
    id: 'place-newburgh-historical-society',
    name: 'Historical Society of Newburgh Bay and the Highlands',
    placeType: 'MUSEUM',
    description: 'Local historical society preserving materials related to Newburgh\'s Revolutionary War period, including documents, artifacts, and interpretive materials related to Washington\'s headquarters and the Newburgh Conspiracy. Collections supplement the state historic site at Hasbrouck House.',
    lat: 41.5022, lng: -74.0101, address: '189 Montgomery Street, Newburgh, NY 12550',
    hours: 'By appointment', displayOrder: 5, town: { connect: { id: 'us-ny-newburgh' } },
  },
  {
    id: 'place-newburgh-revolutionary-monument',
    name: 'Newburgh Revolutionary War Markers and Overlook',
    placeType: 'MONUMENT',
    description: 'A series of historical markers along the Newburgh riverfront and bluffs commemorating the Revolutionary War significance of the area, including the Newburgh Conspiracy and Washington\'s final headquarters. The overlook provides views across the Hudson to the southern Hudson Highlands — the strategic terrain Washington watched from Hasbrouck House for sixteen months.',
    lat: 41.5038, lng: -74.0190, address: 'Waterfront Park, Newburgh, NY 12550',
    displayOrder: 6, town: { connect: { id: 'us-ny-newburgh' } },
  },
];

export const newburghEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-newburgh-headquarters-established',
    name: 'Washington Establishes Headquarters at Hasbrouck House',
    startDate: new Date('1782-04-01'), datePrecision: 'MONTH',
    summary: 'Washington established his headquarters at Hasbrouck House in Newburgh in April 1782, as the army settled into the long wait for peace negotiations. The strategic position on the Hudson bluff gave visibility over the river and proximity to the New Windsor cantonment. He would remain for sixteen months — the longest continuous stay at any single headquarters of the war.',
    significanceWeight: 80, lat: 41.5018, lng: -74.0136, town: { connect: { id: 'us-ny-newburgh' } },
  },
  {
    id: 'event-newburgh-badge-military-merit',
    name: 'Washington Establishes Badge of Military Merit (Purple Heart Precursor)',
    startDate: new Date('1782-08-07'), datePrecision: 'DAY',
    summary: 'On August 7, 1782, Washington issued general orders from Hasbrouck House establishing the Badge of Military Merit — a decoration for enlisted men and NCOs who showed "singularly meritorious action." The heart-shaped purple cloth badge was awarded to three soldiers. Dormant for 150 years, it was revived as the Purple Heart in 1932. The original order was issued from Newburgh.',
    significanceWeight: 85, lat: 41.5018, lng: -74.0136, town: { connect: { id: 'us-ny-newburgh' } },
  },
  {
    id: 'event-newburgh-officers-committee-congress',
    name: 'Officers\' Committee Travels to Congress to Demand Pay',
    startDate: new Date('1783-01-06'), datePrecision: 'MONTH',
    summary: 'A committee of officers headed by General McDougall traveled to Philadelphia in January 1783 to present Congress with demands for back pay, half-pay pensions, and settlement of accounts. Congress, nearly bankrupt, could not satisfy the demands. The committee returned to Newburgh in February with no resolution — setting the stage for the Newburgh Conspiracy the following month.',
    significanceWeight: 82, lat: 41.5018, lng: -74.0136, town: { connect: { id: 'us-ny-newburgh' } },
  },
  {
    id: 'event-newburgh-addresses-circulated',
    name: 'Anonymous Newburgh Addresses Circulated Among Officers',
    startDate: new Date('1783-03-10'), datePrecision: 'DAY',
    summary: 'On March 10, 1783, anonymous letters — later identified as written by Major John Armstrong Jr. — began circulating at the Newburgh cantonment. The letters expressed the officers\' frustrations with Congress and implied the army might need to take matters into its own hands. A meeting was called for March 11, later moved to March 15. Washington immediately called the meeting unauthorized and issued his own summons.',
    significanceWeight: 90, lat: 41.4687, lng: -74.0252, town: { connect: { id: 'us-ny-newburgh' } },
  },
  {
    id: 'event-newburgh-conspiracy-meeting',
    name: 'Washington Addresses Officers — Newburgh Conspiracy Ends',
    startDate: new Date('1783-03-15'), datePrecision: 'DAY',
    summary: 'Washington walked into the Temple building at the New Windsor cantonment and addressed his officers on March 15, 1783. He argued that an army acting against its civilian government would destroy the republic it had created. Then, reaching for his spectacles — which he had not worn publicly before — he said he had grown gray and nearly blind in the service of his country. Several officers wept. The conspiracy collapsed. His performance that afternoon is considered one of the most consequential acts of political leadership in American history.',
    significanceWeight: 99, lat: 41.4687, lng: -74.0252, town: { connect: { id: 'us-ny-newburgh' } },
  },
  {
    id: 'event-newburgh-peace-proclaimed',
    name: 'Washington Proclaims Cessation of Hostilities',
    startDate: new Date('1783-04-19'), datePrecision: 'DAY',
    summary: 'On April 19, 1783 — the eighth anniversary of Lexington and Concord — Washington issued a proclamation from Hasbrouck House announcing the cessation of hostilities with Great Britain. The timing was deliberate. The army at the Newburgh cantonment heard the proclamation read aloud. The war was effectively over, though the formal Treaty of Paris would not be ratified until January 1784.',
    significanceWeight: 95, lat: 41.5018, lng: -74.0136, town: { connect: { id: 'us-ny-newburgh' } },
  },
  {
    id: 'event-newburgh-society-cincinnati',
    name: 'Society of the Cincinnati Founded at Newburgh Cantonment',
    startDate: new Date('1783-05-13'), datePrecision: 'DAY',
    summary: 'The Society of the Cincinnati, an organization for Continental Army officers and their descendants, was founded at the Newburgh cantonment on May 13, 1783. Washington became its first president-general. The society immediately became controversial — critics including Jefferson argued hereditary military organizations were incompatible with republican principles. Its founding at Newburgh, just two months after the conspiracy, added irony to the debate.',
    significanceWeight: 72, lat: 41.4687, lng: -74.0252, town: { connect: { id: 'us-ny-newburgh' } },
  },
  {
    id: 'event-newburgh-army-disbands',
    name: 'Continental Army Begins Disbanding from Newburgh',
    startDate: new Date('1783-06-01'), datePrecision: 'MONTH',
    summary: 'Following the April peace proclamation, Congress authorized gradual disbanding of the Continental Army. Soldiers at the Newburgh cantonment began departing in spring and summer 1783, most with certificates acknowledging back pay claims rather than actual payment. Furloughed soldiers — many walking home hundreds of miles without cash — represented the human cost of the republic\'s financial failure to honor its military commitments.',
    significanceWeight: 78, lat: 41.4687, lng: -74.0252, town: { connect: { id: 'us-ny-newburgh' } },
  },
  {
    id: 'event-newburgh-washington-departs',
    name: 'Washington Departs Newburgh Headquarters',
    startDate: new Date('1783-08-18'), datePrecision: 'DAY',
    summary: 'Washington departed Hasbrouck House on August 18, 1783, ending sixteen months at his final military headquarters. He traveled to Rocky Hill, New Jersey, then to Annapolis, Maryland, where he resigned his commission before Congress on December 23, 1783. The departure from Newburgh was the end of his role as commander — the farewell to officers at Fraunces Tavern in New York in December completed the transition.',
    significanceWeight: 85, lat: 41.5018, lng: -74.0136, town: { connect: { id: 'us-ny-newburgh' } },
  },
  {
    id: 'event-newburgh-ny-purchases-hasbrouck-house',
    name: 'New York State Purchases Hasbrouck House as Historic Site',
    startDate: new Date('1850-01-01'), datePrecision: 'YEAR',
    summary: 'In 1850, New York State purchased Hasbrouck House from the Hasbrouck family, making it one of the first publicly owned historic sites in America and the first site specifically acquired for its association with George Washington. The purchase reflected the growing 19th-century movement to preserve Revolutionary War sites. The site has been a public museum ever since.',
    significanceWeight: 65, lat: 41.5018, lng: -74.0136, town: { connect: { id: 'us-ny-newburgh' } },
  },
  {
    id: 'event-newburgh-treaty-paris-ratified',
    name: 'Treaty of Paris Ratified — War Formally Ends',
    startDate: new Date('1784-01-14'), datePrecision: 'DAY',
    summary: 'The Continental Congress ratified the Treaty of Paris on January 14, 1784, formally ending the Revolutionary War. Washington had already resigned his commission and returned to Mount Vernon. The army that had camped at Newburgh was largely gone. The ratification completed the legal framework of independence — but the political and military work that made it possible had been done, and nearly undone, at Newburgh in the preceding two years.',
    significanceWeight: 88, lat: 41.5018, lng: -74.0136, town: { connect: { id: 'us-ny-newburgh' } },
  },
];

export const newburghStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-newburgh-spectacles-speech',
    title: 'Gentlemen, You Will Permit Me',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-george-washington-newburgh' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Washington had been thinking about what to say since the anonymous letters appeared on March 10. He had five days. He spent them at Hasbrouck House, writing and revising, working through what an argument against military insurrection looks like when you are making it to men who have fought beside you for eight years.

The speech he gave on March 15, 1783, in the Temple at the New Windsor cantonment is not great oratory. What it has is something more useful: an argument that takes the officers' grievances seriously before dismantling the logic of acting on them.

He began by defending his own record — not humbly, but plainly. He had been with them from the beginning. He had given the same years they had. He had made the same sacrifices. When he said that what the anonymous letters proposed was wrong, he was not saying it from a comfortable distance.

Then he reached for a letter he wanted to read aloud from a congressional ally, and for his spectacles. He had rarely worn them in public. He put them on and said: "Gentlemen, you will permit me to put on my spectacles, for I have not only grown gray but almost blind in the service of my country."

No one had planned for that moment. Washington had not staged it. He simply needed his glasses to read. But the effect was immediate and total. Here was the man who had led them for eight years, suddenly visible as what he was: old, worn, half-blind, still at his post.

Several officers reportedly wept. The conspiracy collapsed — not through formal dissolution, but because the men who had been ready to act simply were not ready anymore. Washington finished his speech, left the room, and rode back to Hasbrouck House. He had made the right choice feel like the only possible choice.`,
    audioScript: `Washington had five days to prepare. He spent them at Hasbrouck House, working through what an argument against mutiny looks like when you're making it to men who fought beside you for eight years.

His speech on March 15 isn't great oratory. What it has: it takes the grievances seriously before dismantling the logic of acting on them. He said he had made the same sacrifices they had.

Then he reached for his spectacles — rarely worn in public. "Gentlemen, you will permit me to put on my spectacles, for I have not only grown gray but almost blind in the service of my country."

He didn't plan that moment. He just needed his glasses. Several officers wept. The conspiracy collapsed. He made the right choice feel like the only choice.`,
    tags: ['Newburgh Conspiracy', 'Washington', 'civil-military relations', '1783', 'spectacles'],
    town: { connect: { id: 'us-ny-newburgh' } },
  },
  {
    id: 'story-newburgh-unpaid-army',
    title: 'Walking Home Without Pay',
    storyType: 'MODERN_VOICE',
    narratorName: 'Social Historian',
    narratorRole: 'Researcher, Hudson Valley Military History Project',
    verificationStatus: 'VERIFIED',
    textVersion: `The story of the Newburgh Conspiracy usually gets told through Washington's address — the spectacles, the weeping, the dramatic collapse. That story matters. But it obscures something equally important: the men who walked home from Newburgh in the summer of 1783 with nothing.

When Congress authorized the furloughing of the Continental Army in June 1783, most soldiers were owed years of back wages. Congress had no money. The solution was certificates acknowledging the debt — pieces of paper that might eventually be redeemable if the new government got its finances in order.

Many soldiers sold those certificates immediately, at a fraction of face value, to speculators who followed the army precisely to buy them cheap. A private who had served eight years might walk away from the Newburgh cantonment with a few dollars and a hundred-mile walk ahead of him.

The officers who had attended the March 15 meeting, heard Washington's speech, and chosen loyalty to the republic — they walked away with the same worthless paper, just in larger denominations.

The Newburgh Conspiracy is celebrated as a moment when the military chose not to threaten civilian government. That framing is accurate as far as it goes. But it is worth asking what the civilian government owed in return — and whether it paid. The answer is that it largely didn't.

Their certificates eventually became worth something when Hamilton's financial system refinanced the debt in the 1790s. By then, most original holders had sold them at a loss. The speculators made fortunes. The veterans had already spent the money on necessities. The Newburgh story has a sequel, and it is not a happy one.`,
    audioScript: `The Newburgh story usually centers on Washington's address. That matters. But it obscures what happened to the soldiers who walked home in the summer of 1783 with nothing.

Congress had no money. Furloughed soldiers received certificates — paper that might someday be redeemable. Most sold them immediately to speculators at a fraction of face value. A private who served eight years might walk away with a few dollars and a hundred-mile walk home.

When Hamilton's financial system refinanced the debt in the 1790s, those certificates were worth something. By then, most veterans had already sold them. The speculators made fortunes.

The Newburgh story has a sequel. It's not a happy one.`,
    tags: ['veterans', 'pay', 'demobilization', 'Congress', '1783', 'economic history'],
    town: { connect: { id: 'us-ny-newburgh' } },
  },
];

export const newburghLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-ny-newburgh' } },
    title: 'Newburgh 1783: When the Army Nearly Said No',
    gradeRange: '6-8',
    estimatedDuration: '2-3 class periods',
    summary: 'This lesson uses the Newburgh Conspiracy to introduce students to civil-military relations and the challenge of keeping military force subordinate to civilian authority. Students examine why Continental Army officers had legitimate grievances, what the anonymous Newburgh letters proposed, and how Washington\'s response prevented a crisis. The lesson asks students to evaluate Washington\'s argument — not just accept it — and to consider what the episode reveals about the relationship between military service, political obligation, and the promises a republic makes to those who defend it.',
    lessonData: {
      objectives: [
        'Explain why Continental Army officers had legitimate grievances against Congress in early 1783',
        'Analyze what the Newburgh addresses proposed and why it threatened republican government',
        'Evaluate Washington\'s argument at the March 15 meeting and explain why it was effective',
        'Assess what the conspiracy reveals about the relationship between military service and civic obligation',
      ],
      essentialQuestions: [
        'What does a republic owe to the soldiers who fight for it? What happens when it fails that obligation?',
        'Why is military subordination to civilian government important even when the civilian government has failed its commitments?',
        'What made Washington\'s argument work when a written resolution would not have?',
      ],
      materials: [
        'Excerpts from the anonymous Newburgh Address, March 10, 1783 (adapted)',
        'Washington\'s address to the officers at the Temple, March 15, 1783 (adapted)',
        'Timeline of Continental Army pay disputes, 1777-1783',
        'Map of Newburgh cantonment area showing Hasbrouck House and the Temple',
        'Graphic organizer: Grievance → Proposed Action → Washington\'s Counter-Argument → Outcome',
      ],
      activities: [
        { name: 'What Was Owed?', duration: '20 minutes', description: 'Students create a timeline of broken promises — when Congress pledged pay, when it failed to deliver, how long officers had been waiting. Discussion: were the officers\' grievances legitimate? What does a government owe soldiers who serve under its authority?' },
        { name: 'Reading the Newburgh Address', duration: '20 minutes', description: 'Students read adapted excerpts from the anonymous address and identify: What specific actions does it suggest? What does it argue will happen if the army does nothing? Students annotate and discuss: is this a call for mutiny? How can you tell?' },
        { name: 'Washington\'s Argument', duration: '25 minutes', description: 'Students read adapted excerpts from the March 15 address and identify the main argument. Does Washington disagree with the grievances? What role does the spectacles moment play — why does it matter that it was unplanned? Would this argument have worked if someone else had made it?' },
        { name: 'The Unanswered Question', duration: '15 minutes', description: 'Brief discussion: Washington convinced the officers not to act. Most enlisted men still walked home with worthless paper. Did the republic keep its promises? Students write a 5-minute response: did Washington\'s argument address the real problem, or only prevent the worst outcome?' },
      ],
      assessment: 'One-paragraph written response: "Was Washington right to ask the officers to trust Congress in 1783?" Students must use at least two specific pieces of evidence and acknowledge one argument on the other side.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author\'s point of view or purpose',
        'CCSS.ELA-LITERACY.RH.6-8.8: Distinguish among fact, opinion, and reasoned judgment in a text',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.Civ.5.6-8: Explain the origins, functions, and structure of government with reference to the U.S. Constitution',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-ny-newburgh' } },
    title: 'Civil-Military Relations and the Newburgh Precedent',
    gradeRange: '9-12',
    estimatedDuration: '3-4 class periods',
    summary: 'This lesson uses the Newburgh Conspiracy as a case study in civil-military relations — one of the most consequential topics in American political history. Students analyze why American military subordination to civilian authority is a feature of the political system rather than an accident, trace the Newburgh precedent through subsequent American history, and evaluate the ongoing tensions between military obligation and political authority. The lesson incorporates primary source analysis, comparative cases, and structured debate about what the Newburgh precedent requires of both the military and civilian government.',
    lessonData: {
      objectives: [
        'Analyze the Newburgh Conspiracy as a civil-military crisis and evaluate Washington\'s response as an immediate solution and long-term precedent',
        'Compare the American civil-military settlement to similar questions in other democracies',
        'Evaluate obligations of civilian government to military service members and assess whether those obligations were met in 1783',
        'Develop an argument about what the Newburgh precedent requires of both the military and civilian authority',
      ],
      essentialQuestions: [
        'Why does military subordination to civilian authority matter? What does American history suggest about what happens when it is challenged?',
        'Is the obligation reciprocal — does the military\'s subordination depend on the civilian government keeping its promises?',
        'The Newburgh Conspiracy almost succeeded. What prevented it? Would those same factors work today?',
      ],
      materials: [
        'Newburgh Address, March 10, 1783 — full text',
        'Washington\'s address to the officers, March 15, 1783 — full text',
        'Jefferson and Adams correspondence on the Society of the Cincinnati, 1784',
        'Secondary source on comparative civil-military relations',
        'Timeline of subsequent American civil-military tensions (MacArthur dismissal, 1951)',
      ],
      activities: [
        { name: 'Close Reading: What Armstrong Actually Proposed', duration: '30 minutes', description: 'Students read the full Newburgh Address and analyze its rhetorical strategy: What does it explicitly propose? What does it imply without stating? What assumptions does it make about its audience? Groups compare interpretations: is this a call for mutiny, negotiation, or something in between?' },
        { name: 'Washington\'s Argument: Logic and Emotion', duration: '35 minutes', description: 'Students read the March 15 address and assess: Does Washington agree the officers have been wronged? What does he ask them to trust? Is his argument logically sound, emotionally effective, or both? What would be missing if someone else had made the same argument?' },
        { name: 'Comparative Case: What Happened Elsewhere', duration: '30 minutes', description: 'Students read brief summaries of two cases where newly independent states\' militaries did or did not remain subordinate to civilian authority. Discussion: what conditions produced the American outcome? Students identify two to three factors specific to the American case.' },
        { name: 'Debate: Did the Civilian Government Keep Its Bargain?', duration: '30 minutes', description: 'Structured debate on three positions: (1) Congress failed its obligation and Washington asked officers to accept injustice; (2) the officers\' choice was right regardless of Congress; (3) the Newburgh precedent requires reciprocal obligations that the civilian government also failed to meet. Each position must engage with evidence about what soldiers received when they went home.' },
      ],
      assessment: 'Analytical essay (1200-1800 words): "The Newburgh Conspiracy established the principle of civilian control of the American military — but it also revealed the limits of that principle. Explain." Students must address both what Washington accomplished and what the civilian government failed to provide, using at least four primary or secondary sources.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.9-10.8: Assess the extent to which reasoning and evidence support an author\'s claims',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.9.9-12: Analyze the relationship between historical sources and secondary interpretations',
        'D2.Civ.3.9-12: Analyze the impact of constitutions and laws on the maintenance of national order',
        'D2.His.4.9-12: Analyze complex factors that influenced perspectives of people during different historical eras',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const newburghAdditionalLinks: Array<{
  toTownId: string;
  linkType: 'SHARED_EVENT' | 'SHARED_PERSON' | 'GEOGRAPHIC_PROXIMITY' | 'SHARED_THEME';
  reason: string;
  weight: number;
}> = [
  { toTownId: 'us-ny-kingston', linkType: 'GEOGRAPHIC_PROXIMITY', reason: 'Newburgh and Kingston are both central Hudson Valley communities whose Revolutionary War significance is defined by the same river. They are 30 miles apart and share the strategic waterway that made the Hudson Valley the most contested terrain in the war.', weight: 85 },
  { toTownId: 'us-nj-morristown', linkType: 'SHARED_PERSON', reason: 'Washington commanded at both Morristown (winter headquarters, 1779-1780) and Newburgh (final headquarters, 1782-1783). The same command structure, many of the same officers, and the same army occupied both sites at different points in the war.', weight: 80 },
  { toTownId: 'us-ny-saratoga', linkType: 'SHARED_PERSON', reason: 'General Horatio Gates, believed to have been involved in the Newburgh Conspiracy, commanded at Saratoga. The same network of senior Continental officers connects both sites.', weight: 65 },
  { toTownId: 'us-ny-white-plains', linkType: 'SHARED_THEME', reason: 'Both sites illustrate the tension between military necessity and political constraint throughout the Revolutionary War. At White Plains, Washington managed a tactical defeat within a strategic withdrawal; at Newburgh, he managed a political crisis within an institutional framework he was determined to preserve.', weight: 55 },
];
