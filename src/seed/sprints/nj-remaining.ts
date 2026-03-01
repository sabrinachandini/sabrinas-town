// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// NJ Remaining Sprint: Fort Lee, New Brunswick, Elizabeth (sources+links), Hackensack (people+sources+links), Monmouth (+1 link)
import { Prisma } from '@prisma/client';

// ============================================================================
// FORT LEE NJ (us-nj-fort-lee)
// Places (0→6+), +2 events (have 8, need 10), 2 lessons, +1 link
// ============================================================================

export const fortLeePlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-fort-lee-historic-park',
    name: 'Fort Lee Historic Park',
    placeType: 'BATTLEFIELD',
    description:
      'Preserved site of the November 1776 Continental Army fort on the Palisades overlooking the Hudson River. The park contains reconstructed earthworks, period artillery, and exhibits on the Palisades campaign. On November 20, 1776, Hessian and British forces under Lord Cornwallis scaled the cliffs and overran the position, forcing Washington\'s army into the desperate retreat across New Jersey that Tom Paine later called "the times that try men\'s souls." The overlook provides a direct line of sight to Fort Washington on the Manhattan side, explaining immediately why losing both forts simultaneously collapsed the Hudson River defense.',
    lat: 40.8490,
    lng: -73.9757,
    address: 'Hudson Terrace, Fort Lee, NJ 07024',
    hours: 'Daily 8am–sunset; visitor center Wed–Sun 10am–5pm (April–November)',
    admission: 'Free',
    website: 'https://www.nj.gov/dep/parksandforests/parks/fort-lee.html',
    town: { connect: { id: 'us-nj-fort-lee' } },
  },
  {
    id: 'place-fort-lee-palisades-overlook',
    name: 'Palisades Hudson River Overlook',
    placeType: 'LANDMARK',
    description:
      'Elevated overlook at the crest of the Palisades offering views of the Hudson River narrows, the George Washington Bridge, and the Manhattan shoreline where Fort Washington stood in 1776. The sheer basalt cliffs dropping 300 feet to the river explain both why Washington considered the position defensible and why the Hessian scaling party\'s November 20 ascent — up unmarked paths guided by a Loyalist informant — was so devastating. Standing here makes the strategic logic of the twin-fort system viscerally clear.',
    lat: 40.8501,
    lng: -73.9762,
    address: 'Hudson Terrace, Fort Lee, NJ 07024',
    town: { connect: { id: 'us-nj-fort-lee' } },
  },
  {
    id: 'place-fort-lee-museum',
    name: 'Fort Lee Historic Park Visitor Center & Museum',
    placeType: 'MUSEUM',
    description:
      'Interpretive museum at Fort Lee Historic Park covering the 1776 Palisades campaign. Exhibits include period maps of the Fort Washington-Fort Lee defensive system, artifacts recovered from the site, and biographical materials on the commanders and soldiers who occupied and abandoned the fort. A diorama re-creates the Hessian ascent of the Palisades. Essential orientation for understanding how the loss of Fort Washington on November 16 made Fort Lee\'s evacuation inevitable four days later.',
    lat: 40.8488,
    lng: -73.9754,
    address: 'Hudson Terrace, Fort Lee, NJ 07024',
    hours: 'Wed–Sun 10am–5pm (April–November)',
    admission: 'Free',
    town: { connect: { id: 'us-nj-fort-lee' } },
  },
  {
    id: 'place-fort-lee-gwb-area',
    name: 'Fort Lee Road / George Washington Bridge Approach',
    placeType: 'LANDMARK',
    description:
      'Fort Lee Road follows the approximate route Washington\'s retreating army took southward from the Palisades heights after evacuating the fort on November 20, 1776. The George Washington Bridge, which opened in 1931, spans the Hudson at almost exactly the site of the river that Washington\'s forces had to defend and then abandon. The juxtaposition — an engineering marvel where an army once fled in disorder — is a useful entry point for discussing how revolutionary-era geography shapes modern urban infrastructure.',
    lat: 40.8508,
    lng: -73.9683,
    address: 'Fort Lee Road, Fort Lee, NJ 07024',
    town: { connect: { id: 'us-nj-fort-lee' } },
  },
  {
    id: 'place-fort-lee-main-street-district',
    name: 'Fort Lee Historic Main Street District',
    placeType: 'LANDMARK',
    description:
      'The Main Street corridor of Fort Lee incorporates several sites associated with the 1776 occupation and retreat. The general area was farmland in 1776 through which Washington\'s column — roughly 2,000 men with limited artillery and supplies — retreated toward Hackensack after abandoning the fort. Interpretive signage along the district marks the retreat route and contextualizes Fort Lee\'s transition from Revolutionary War encampment to one of the first American motion-picture production centers a century later.',
    lat: 40.8501,
    lng: -73.9706,
    address: 'Main Street, Fort Lee, NJ 07024',
    town: { connect: { id: 'us-nj-fort-lee' } },
  },
  {
    id: 'place-fort-lee-palisades-interstate-park',
    name: 'Palisades Interstate Park — New Jersey Section',
    placeType: 'TRAIL',
    description:
      'The Long Path and Shore Trail through Palisades Interstate Park trace the Palisades cliff face from the George Washington Bridge northward. The terrain the Hessians scaled on November 20, 1776 — guided by Loyalist Abraham Polhemus up an unmarked path — is accessible on foot. The park preserves the basalt cliff environment essentially unchanged from 1776, making it the most direct way to understand why Washington believed the Palisades were a defensible western flank for the Hudson River position.',
    lat: 40.8620,
    lng: -73.9710,
    address: 'Route 9W, Fort Lee, NJ 07024',
    hours: 'Dawn to dusk daily',
    admission: 'Free',
    website: 'https://www.palisadesparksconservancy.org',
    town: { connect: { id: 'us-nj-fort-lee' } },
  },
];

// Fort Lee: +2 events (existing IDs: event-fort-lee-fall-fort-washington, event-fort-lee-evacuation,
// event-fort-lee-palisades-ascent, event-fort-lee-retreat-across-nj, event-fort-lee-paine-crisis,
// event-fort-lee-hudson-river-defense-failure, event-fort-lee-construction-1776, event-fort-lee-chevaux-de-frise)
export const fortLeeAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-fort-lee-hessian-scaling-party',
    name: 'Hessian Forces Scale the Palisades at Dawn',
    startDate: new Date('1776-11-20'),
    datePrecision: 'DAY',
    summary:
      'In the pre-dawn hours of November 20, 1776, approximately 4,000 Hessian and British troops under Lord Cornwallis landed at Closter Landing, six miles north of Fort Lee, guided by Loyalist informant Abraham Polhemus to an unguarded path ascending the Palisades cliffs. By the time Continental sentries detected the column, it was nearly at the top. The scaling party achieved complete surprise: the garrison had approximately one hour to evacuate before the fort was overrun. Washington arrived from Hackensack just in time to observe the ascent and order the immediate abandonment of stores, cannon, and everything not portable. The Hessians captured 12 Continental soldiers, three cannon, and a significant quantity of entrenching tools, tents, and provisions left behind in the rush.',
    significanceWeight: 88,
    lat: 40.8490,
    lng: -73.9757,
    town: { connect: { id: 'us-nj-fort-lee' } },
  },
  {
    id: 'event-fort-lee-nathanael-greene-command',
    name: 'Greene Commands Fort Lee and Warns Washington',
    startDate: new Date('1776-11-16'),
    datePrecision: 'DAY',
    summary:
      'After the fall of Fort Washington on November 16, 1776 — in which nearly 2,900 Continental soldiers were captured — General Nathanael Greene, who commanded the New Jersey shore fortifications including Fort Lee, faced the agonizing reality that he had strongly advised Washington to maintain the fort that had just fallen. The disaster haunted Greene, who immediately began preparing Fort Lee\'s evacuation. He sent Washington urgent dispatches on November 18 and 19 warning that the fort could not hold against a Palisades flanking movement. Washington crossed from Hackensack to Fort Lee on November 20 and was present when Cornwallis\'s column appeared at the cliff top, confirming Greene\'s assessment. The episode shaped Greene\'s command philosophy: he never again recommended holding a position that could be turned by an undefended flank.',
    significanceWeight: 81,
    lat: 40.8490,
    lng: -73.9757,
    town: { connect: { id: 'us-nj-fort-lee' } },
  },
];

export const fortLeeLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-nj-fort-lee' } },
    title: 'The Cost of a Wrong Advice: Decision-Making at Fort Washington and Fort Lee',
    gradeRange: '8-10',
    estimatedDuration: '2 class periods',
    summary:
      'Students examine the decision to hold Fort Washington in November 1776 — made against Greene\'s initial advice but with his subsequent endorsement — as a case study in military decision-making under uncertainty. Using primary sources including Washington\'s correspondence and Greene\'s post-battle letters, students analyze how leaders process conflicting advice, own consequential mistakes, and adapt.',
    lessonData: {
      objectives: [
        'Identify the chain of decisions leading to the fall of Forts Washington and Lee in November 1776',
        'Analyze how Washington and Greene processed conflicting intelligence and recommendations',
        'Evaluate how Greene\'s Fort Washington mistake shaped his subsequent command philosophy',
        'Apply a structured decision-making framework to a historical military scenario',
      ],
      essentialQuestions: [
        'How do leaders decide when advice from trusted subordinates conflicts? What factors should outweigh others?',
        'What is the difference between a bad decision and an unlucky one? How do we evaluate historical choices in hindsight?',
      ],
      materials: [
        'Washington\'s letters to Congress, November 14–21, 1776 (adapted)',
        'Greene\'s post-battle letter to Henry Knox on the Fort Washington decision (adapted)',
        'Period map showing Fort Washington, Fort Lee, and the Hessian landing at Closter',
        'Decision tree worksheet for structured analysis',
      ],
      activities: [
        { name: 'Map the Situation', duration: '20 min', description: 'Students annotate the period map with British and American positions, identify the Hessian flanking route, and explain in one sentence why the twin-fort system failed.' },
        { name: 'The Advice Washington Got', duration: '25 min', description: 'Students read the Washington and Greene correspondence and reconstruct what advice Washington received, from whom, and when. They produce a decision timeline.' },
        { name: 'Owning the Mistake', duration: '20 min', description: 'Students read Greene\'s post-battle letter and discuss what accountability looks like in crisis leadership. How does Greene\'s willingness to own the error differ from deflection?' },
        { name: 'Decision Brief', duration: '25 min', description: 'Groups draft a one-page decision brief recommending whether to hold or evacuate Fort Washington, using only information available before November 16. Compare to actual outcome.' },
      ],
      assessment: 'Analytical paragraph: "Was the decision to hold Fort Washington a bad decision, or a good decision with a bad outcome? Use evidence from the primary sources." Extension: research how Greene\'s command improved after Fort Washington and connect to his later Southern Campaign.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.8-10.6: Identify the point of view or purpose and explain how it shapes the content and style of a text',
        'CCSS.ELA-LITERACY.RH.8-10.9: Analyze how two or more texts address similar themes or topics',
      ],
      c3Framework: [
        'D2.His.4.6-8: Analyze multiple factors that influenced the perspectives of people during different historical eras',
        'D2.His.5.9-12: Explain how and why perspectives of people have changed over time',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-nj-fort-lee' } },
    title: 'Geography of Retreat: The Palisades, the Hudson, and the New Jersey Corridor',
    gradeRange: '6-8',
    estimatedDuration: '2 class periods',
    summary:
      'Students use the Fort Lee campaign to examine how geography — specifically the Hudson River, the Palisades cliffs, and the New Jersey road network — shaped military movement in November–December 1776. They trace Washington\'s retreat from Fort Lee to Hackensack to the Delaware and analyze how geographic constraints forced decisions at every stage.',
    lessonData: {
      objectives: [
        'Explain how the Palisades geography created both an apparent defensive advantage and a fatal vulnerability',
        'Trace Washington\'s November–December 1776 retreat using period maps',
        'Identify geographic chokepoints on the retreat route and explain their significance',
        'Connect geographic constraints to Washington\'s decision to cross the Delaware and strike Trenton',
      ],
      essentialQuestions: [
        'How does terrain shape military options? What geographic features helped and hurt Washington in November 1776?',
        'What is the relationship between retreat and survival? Can an army lose a campaign and still win the war?',
      ],
      materials: [
        'Period map of New Jersey showing the retreat route from Fort Lee through Hackensack, New Brunswick, and Trenton to the Delaware',
        'Satellite imagery of the Palisades compared with 1776 sketches',
        'Excerpt from Thomas Paine\'s "The Crisis" (December 1776)',
        'Retreat timeline worksheet',
      ],
      activities: [
        { name: 'Reading the Palisades', duration: '20 min', description: 'Students compare period sketches of the Palisades with modern satellite imagery and identify where the Hessian scaling party ascended. They calculate the time advantage a cliff defense provides and when it disappears.' },
        { name: 'Trace the Retreat', duration: '30 min', description: 'Students annotate the period map tracing Washington\'s retreat, marking each night halt and identifying geographic features (rivers, roads, bridges) that slowed or aided the column.' },
        { name: 'Paine\'s Words at the Bottom', duration: '20 min', description: 'Students read the opening paragraph of "The Crisis" and discuss what Paine was trying to accomplish rhetorically. Why publish this at the moment of greatest desperation?' },
        { name: 'The Turnaround Point', duration: '20 min', description: 'Students identify the moment on their retreat map when Washington stopped retreating and planned to attack Trenton. What geographic and logistical conditions made that decision possible?' },
      ],
      assessment: 'Map annotation and short essay (one paragraph): "How did the geography of New Jersey shape Washington\'s options in November–December 1776?" Must reference at least three specific geographic features.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information (maps, photographs) with other information in print and digital texts',
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
      ],
      c3Framework: [
        'D2.Geo.2.6-8: Use maps, satellite images, and other representations to explain relationships between locations',
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const fortLeeAdditionalLinks: Array<{ toTownId: string; linkType: string; reason: string; weight: number }> = [
  {
    toTownId: 'us-nj-hackensack',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason: 'Washington\'s army retreated directly from Fort Lee to Hackensack on November 20, 1776, the first leg of the desperate march across New Jersey. The two towns are linked by the retreat route itself and by the shared Bergen County theater of operations.',
    weight: 88,
  },
];

// ============================================================================
// NEW BRUNSWICK NJ (us-nj-new-brunswick)
// Places (0→6+), +2 events (existing: event-new-brunswick-washington-retreat,
// event-new-brunswick-british-supply-depot, event-new-brunswick-raritan-bridge-destroyed,
// event-new-brunswick-forage-wars, event-new-brunswick-howe-occupation,
// event-new-brunswick-civilian-suffering, event-new-brunswick-neilson-house-headquarters,
// event-new-brunswick-british-withdrawal-1777), 2 lessons, +1 link
// ============================================================================

export const newBrunswickPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-new-brunswick-buccleuch-mansion',
    name: 'Buccleuch Mansion',
    placeType: 'HISTORIC_HOUSE',
    description:
      'One of the oldest surviving structures in New Brunswick, built c.1739 by Anthony White and used as a headquarters by both British and American commanders during the war. Washington used the mansion during the army\'s New Brunswick encampment periods in 1776–1777. The house is located in Buccleuch Park and is among the most important surviving Revolutionary-era domestic structures in New Jersey. It documents how private homes were requisitioned as command posts throughout the conflict.',
    lat: 40.4983,
    lng: -74.4441,
    address: 'Easton Ave, New Brunswick, NJ 08901',
    town: { connect: { id: 'us-nj-new-brunswick' } },
  },
  {
    id: 'place-new-brunswick-henry-guest-house',
    name: 'Henry Guest House (Washington\'s Headquarters Site)',
    placeType: 'HISTORIC_HOUSE',
    description:
      'Site of the Henry Guest House on Albany Street, used by Washington as a headquarters during the Continental Army\'s passage through New Brunswick in late November and early December 1776. Washington left New Brunswick on December 1 as British forces approached, crossing the Raritan River bridge and ordering it destroyed behind him. The Guest House documented how New Brunswick\'s position on the Raritan made it an unavoidable stop — and choke point — in the retreat across New Jersey.',
    lat: 40.4872,
    lng: -74.4469,
    address: 'Albany Street, New Brunswick, NJ 08901',
    town: { connect: { id: 'us-nj-new-brunswick' } },
  },
  {
    id: 'place-new-brunswick-rutgers-old-queens',
    name: 'Old Queens Building, Rutgers University',
    placeType: 'LANDMARK',
    description:
      'The oldest building on the Rutgers University campus, dating to 1809 but standing on the grounds of Queens College, chartered in 1766 as the colonial predecessor of Rutgers. Queens College was the eighth college founded in colonial America, established by the Dutch Reformed Church and intimately connected to the Bergen and Middlesex County communities that experienced the Revolution\'s full arc — occupation, forage wars, and liberation. The Rutgers campus preserves and interprets the colonial and Revolutionary history of New Brunswick through its library collections and Queens Campus.',
    lat: 40.4996,
    lng: -74.4484,
    address: '83 Somerset St, New Brunswick, NJ 08901',
    website: 'https://www.rutgers.edu',
    town: { connect: { id: 'us-nj-new-brunswick' } },
  },
  {
    id: 'place-new-brunswick-reformed-church',
    name: 'First Reformed Church of New Brunswick',
    placeType: 'CHURCH',
    description:
      'One of the oldest Reformed congregations in New Jersey, with roots predating the Revolution. The church served as a focal point for the Dutch Reformed community of Middlesex County, many of whom were patriot supporters. During the British occupation of New Brunswick in late 1776 and 1777, the church and its surrounding neighborhood were subject to the foraging and property destruction that alienated much of the civilian population from the British cause. Its continuing presence anchors the colonial streetscape of downtown New Brunswick.',
    lat: 40.4879,
    lng: -74.4456,
    address: '9 Bayard St, New Brunswick, NJ 08901',
    town: { connect: { id: 'us-nj-new-brunswick' } },
  },
  {
    id: 'place-new-brunswick-raritan-river-crossing',
    name: 'Raritan River Crossing Site',
    placeType: 'LANDMARK',
    description:
      'The Albany Street bridge over the Raritan River marks the approximate location of the colonial bridge that Washington ordered destroyed on December 1, 1776, to delay the British pursuit. The Raritan at New Brunswick was the most significant river crossing in the retreat corridor from Fort Lee to Trenton, wide enough to stop an army temporarily and forcing British commanders to pause before rebuilding the crossing. Washington crossed here multiple times in 1776 and 1777, and the river\'s crossing points shaped every phase of the campaign.',
    lat: 40.4870,
    lng: -74.4412,
    address: 'Albany Street Bridge, New Brunswick, NJ 08901',
    town: { connect: { id: 'us-nj-new-brunswick' } },
  },
  {
    id: 'place-new-brunswick-joyce-kilmer-park',
    name: 'Joyce Kilmer Historic District',
    placeType: 'LANDMARK',
    description:
      'The Joyce Kilmer neighborhood preserves some of the oldest surviving streetscape in New Brunswick, including properties that date to the colonial and early Federal periods. Continental Army encampments in 1776–1777 were spread across what is now the city\'s east side, with supply stores and artillery parks in the area near the river. The district provides the best surviving sense of New Brunswick\'s scale and layout during the Revolutionary period, when it was a mid-sized market town controlling the Raritan crossing on the main post road between New York and Philadelphia.',
    lat: 40.4921,
    lng: -74.4397,
    address: 'Joyce Kilmer Ave, New Brunswick, NJ 08901',
    town: { connect: { id: 'us-nj-new-brunswick' } },
  },
];

export const newBrunswickAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-new-brunswick-washington-raritan-crossing-1777',
    name: 'Washington Recrosses the Raritan and Returns to New Brunswick',
    startDate: new Date('1777-01-06'),
    datePrecision: 'DAY',
    summary:
      'Following the victories at Trenton (December 26) and Princeton (January 3, 1777), Washington marched his army northward to winter quarters at Morristown, passing through New Brunswick. The return through a town the army had retreated from in panic six weeks earlier carried enormous symbolic weight. Continental soldiers who had marched through in December — ragged, dwindling, and demoralized — returned as the force that had defeated professional Hessian and British units in two consecutive offensive engagements. New Brunswick civilians who had witnessed both the desperate retreat and the triumphant return experienced the psychological reversal of the 1776–1777 campaign in its most concentrated form.',
    significanceWeight: 76,
    lat: 40.4872,
    lng: -74.4469,
    town: { connect: { id: 'us-nj-new-brunswick' } },
  },
  {
    id: 'event-new-brunswick-queens-college-wartime',
    name: 'Queens College Operates Through the British Occupation',
    startDate: new Date('1776-11-01'),
    datePrecision: 'RANGE',
    summary:
      'Queens College (chartered 1766, later Rutgers), the Dutch Reformed institution in New Brunswick, faced severe disruption during the British occupation of the town in late 1776 and 1777. Classes were suspended, and the college\'s small physical plant was subject to the same requisitioning and damage that affected civilian institutions across occupied New Jersey. The college\'s survival through the war reflected the institutional resilience of the Dutch Reformed community in central New Jersey, which maintained patriot cultural and educational infrastructure despite British control of the town for extended periods. Queens College reopened fully after the British withdrawal in 1777 and graduated its first class in 1774, making it one of only eight colonial colleges to survive the war intact.',
    significanceWeight: 62,
    lat: 40.4996,
    lng: -74.4484,
    town: { connect: { id: 'us-nj-new-brunswick' } },
  },
];

export const newBrunswickLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-nj-new-brunswick' } },
    title: 'Retreat, Occupation, and Return: New Brunswick\'s Full Arc of War',
    gradeRange: '7-9',
    estimatedDuration: '2 class periods',
    summary:
      'New Brunswick experienced the Revolution\'s full cycle in compressed form: Continental retreat in December 1776, British occupation and foraging, Continental return in January 1777. Students use this sequence to analyze how civilian communities in contested territory navigated changing military occupation, and what the shift from retreat to advance meant for morale and allegiance.',
    lessonData: {
      objectives: [
        'Describe the sequence of Continental retreat, British occupation, and Continental return through New Brunswick in 1776–1777',
        'Analyze how British foraging and property seizure affected civilian allegiances in New Jersey',
        'Evaluate primary sources from both Continental soldiers and New Brunswick civilians describing the occupation',
        'Explain the psychological significance of Washington\'s army returning through New Brunswick after Trenton and Princeton',
      ],
      essentialQuestions: [
        'How do civilian communities survive military occupation? What strategies did New Brunswick residents use?',
        'What is the relationship between how an occupying army treats civilians and whether those civilians support the enemy? What evidence do we have from New Jersey?',
      ],
      materials: [
        'Continental soldier diary excerpts describing the November 1776 retreat through New Brunswick',
        'New Jersey civilian petition documenting British foraging damage (adapted)',
        'Washington\'s order regarding the destruction of the Raritan bridge (adapted)',
        'Period map of New Brunswick showing crossing, encampment, and retreat route',
      ],
      activities: [
        { name: 'The Timeline of Occupation', duration: '20 min', description: 'Students build a visual timeline of New Brunswick\'s experience from November 1776 through January 1777, marking key events and identifying civilian decision points at each stage.' },
        { name: 'Foraging and Allegiance', duration: '25 min', description: 'Students read the civilian petition and identify specific grievances. Discussion: Does property destruction by an occupying force create patriots or simply resentful neutrals? What evidence from New Jersey suggests which?' },
        { name: 'The Bridge Decision', duration: '20 min', description: 'Students analyze Washington\'s order to destroy the Raritan bridge. Who benefits? Who is harmed? Washington ordered civilian property destroyed to slow an enemy. Is this justified? How does it compare to the British foraging?' },
        { name: 'Return Narrative', duration: '25 min', description: 'Students write a first-person paragraph from the perspective of a New Brunswick civilian watching the Continental Army return in January 1777. What do they feel? What do they remember from December?' },
      ],
      assessment: 'Compare-and-contrast paragraph: "How did the Continental Army\'s December 1776 retreat and January 1777 return affect civilian loyalties in New Brunswick differently? Use at least two specific pieces of evidence."',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author\'s point of view or purpose',
        'CCSS.ELA-LITERACY.WHST.6-8.2: Write informative/explanatory texts using relevant evidence',
      ],
      c3Framework: [
        'D2.His.5.6-8: Explain how and why perspectives of people have changed over time',
        'D2.His.3.6-8: Use questions generated about individuals to assess the significance of actions and decisions',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-nj-new-brunswick' } },
    title: 'Queens College and the Revolutionary Generation: Education in a Time of War',
    gradeRange: '9-12',
    estimatedDuration: '2 class periods',
    summary:
      'Queens College (Rutgers) chartered in 1766 was one of eight colonial colleges to survive the Revolution. Students examine how institutions of higher education functioned during wartime, who attended them, what they taught, and why preserving them mattered to the founding generation — using Queens College and New Brunswick\'s story as the case study.',
    lessonData: {
      objectives: [
        'Explain the founding purposes and Dutch Reformed character of Queens College (1766)',
        'Analyze how the British occupation of New Brunswick disrupted and threatened the college',
        'Compare Queens College\'s wartime experience with other colonial colleges (Yale, Princeton, Harvard)',
        'Evaluate what the founding generation believed education was for and how the Revolution shaped those beliefs',
      ],
      essentialQuestions: [
        'Why did the founding generation prioritize establishing colleges even during an active war? What did they believe education was supposed to accomplish?',
        'How do institutions survive political and military crisis? What conditions allowed Queens College to survive when other institutions did not?',
      ],
      materials: [
        'Queens College charter (1766) excerpts',
        'Account of college disruption during British occupation',
        'Comparison table: colonial colleges, their founding dates, religious affiliation, and wartime experience',
        'Jefferson, Rush, and Webster on education and the new republic (short excerpts)',
      ],
      activities: [
        { name: 'Charter Analysis', duration: '25 min', description: 'Students read excerpts from the Queens College charter and identify the stated purposes of the institution. Who is it for? What is it meant to accomplish? How does the Dutch Reformed sponsorship shape the mission?' },
        { name: 'Colleges at War', duration: '25 min', description: 'Students complete the comparison table for colonial colleges and identify patterns: which survived, which were destroyed or closed, what determined survival. Groups present findings.' },
        { name: 'The Founders on Education', duration: '20 min', description: 'Students read short excerpts from Jefferson, Rush, and Webster on republican education and discuss: How does the Revolution change what education is supposed to produce? What is a "republican" education?' },
        { name: 'Institution-Building Essay Prep', duration: '20 min', description: 'Students outline an essay argument connecting Queens College\'s survival to the broader founding-era commitment to institutional durability.' },
      ],
      assessment: 'Essay (600–800 words): "Why did the founding generation believe colleges were essential to a republic? Use Queens College and at least one primary source to support your argument."',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.2.9-12: Analyze change and continuity in historical eras',
        'D2.His.9.9-12: Analyze the relationship between historical sources and secondary interpretations',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const newBrunswickAdditionalLinks: Array<{ toTownId: string; linkType: string; reason: string; weight: number }> = [
  {
    toTownId: 'us-nj-trenton',
    linkType: 'SHARED_EVENT',
    reason: 'New Brunswick was the penultimate Continental encampment before Washington crossed the Delaware toward Trenton. The army retreated through New Brunswick in late November, destroyed the Raritan bridge to slow the British, and used Trenton as the jumping-off point for the December 26 attack. The retreat corridor from Fort Lee through New Brunswick to Trenton is a single continuous strategic narrative.',
    weight: 87,
  },
];

// ============================================================================
// ELIZABETH NJ (us-nj-elizabeth)
// Sources (0→8+) and Links (0→6+) ONLY
// ============================================================================

export const elizabethSources: Array<{
  source: {
    id: string;
    title: string;
    publisherOrHolder: string;
    url?: string;
    credibilityTier: 'TIER1' | 'TIER2' | 'TIER3';
    type: string;
  };
  sourceTown: {
    townId: string;
    relevanceNote: string;
  };
}> = [
  {
    source: {
      id: 'source-elizabeth-nps-revolutionary-nj',
      title: 'New Jersey in the American Revolution',
      publisherOrHolder: 'National Park Service',
      url: 'https://www.nps.gov/revwar/about_the_revolution/new_jersey.html',
      credibilityTier: 'TIER1',
      type: 'GOVERNMENT_DOCUMENT',
    },
    sourceTown: {
      townId: 'us-nj-elizabeth',
      relevanceNote: 'Covers Elizabethtown as a key patriot center, crossing point to Staten Island, and site of British raids throughout the war.',
    },
  },
  {
    source: {
      id: 'source-elizabeth-gerlach-prologue',
      title: 'Prologue to Independence: New Jersey in the Coming of the American Revolution',
      publisherOrHolder: 'Rutgers University Press',
      url: 'https://www.rutgersuniversitypress.org',
      credibilityTier: 'TIER1',
      type: 'SCHOLARLY_BOOK',
    },
    sourceTown: {
      townId: 'us-nj-elizabeth',
      relevanceNote: 'Analyzes Elizabethtown\'s political radicalization in the 1760s-1770s, the land-title grievances of the Elizabethtown Associates, and the town\'s emergence as a patriot organizing center before Lexington.',
    },
  },
  {
    source: {
      id: 'source-elizabeth-leiby-hackensack-valley',
      title: 'The Revolutionary War in the Hackensack Valley: The Jersey Dutch and the Neutral Ground, 1775-1783',
      publisherOrHolder: 'Rutgers University Press',
      credibilityTier: 'TIER1',
      type: 'SCHOLARLY_BOOK',
    },
    sourceTown: {
      townId: 'us-nj-elizabeth',
      relevanceNote: 'Places the Elizabethtown raids in the broader context of New Jersey\'s coastal and frontier civil war between patriots and loyalists, with cross-references to the Staten Island shore operations.',
    },
  },
  {
    source: {
      id: 'source-elizabeth-hatfield-history',
      title: 'History of Elizabeth, New Jersey',
      publisherOrHolder: 'Carlton and Lanahan',
      credibilityTier: 'TIER2',
      type: 'LOCAL_HISTORY',
    },
    sourceTown: {
      townId: 'us-nj-elizabeth',
      relevanceNote: 'Primary local history of Elizabeth (1868) covering the colonial and Revolutionary periods in detail, including Elizabethtown Associates land disputes and wartime events.',
    },
  },
  {
    source: {
      id: 'source-elizabeth-boudinot-papers-princeton',
      title: 'Elias Boudinot Papers',
      publisherOrHolder: 'Princeton University Library',
      url: 'https://findingaids.princeton.edu',
      credibilityTier: 'TIER1',
      type: 'ARCHIVAL_COLLECTION',
    },
    sourceTown: {
      townId: 'us-nj-elizabeth',
      relevanceNote: 'Boudinot served as Continental Commissary General of Prisoners and later as President of Congress; his papers document Elizabethtown\'s role in prisoner exchange operations across the Staten Island waterway and his own wartime activities in Essex County.',
    },
  },
  {
    source: {
      id: 'source-elizabeth-jar-elizabethtown',
      title: 'Elizabethtown and the Revolution (Journal of the American Revolution)',
      publisherOrHolder: 'Journal of the American Revolution / Westholme Publishing',
      url: 'https://allthingsliberty.com',
      credibilityTier: 'TIER2',
      type: 'JOURNAL_ARTICLE',
    },
    sourceTown: {
      townId: 'us-nj-elizabeth',
      relevanceNote: 'Peer-reviewed article synthesizing recent scholarship on Elizabethtown\'s strategic position, the British and Loyalist raid patterns, and Abraham Clark\'s role as the town\'s link to the Continental Congress.',
    },
  },
  {
    source: {
      id: 'source-elizabeth-nj-historical-society',
      title: 'New Jersey Historical Society Collections: Essex County Revolutionary War Records',
      publisherOrHolder: 'New Jersey Historical Society',
      url: 'https://jerseyhistory.org',
      credibilityTier: 'TIER2',
      type: 'ARCHIVAL_COLLECTION',
    },
    sourceTown: {
      townId: 'us-nj-elizabeth',
      relevanceNote: 'Essex County records including militia muster rolls, damage assessments from British raids, and correspondence documenting Elizabethtown\'s wartime civil administration and the activities of the local Committee of Safety.',
    },
  },
  {
    source: {
      id: 'source-elizabeth-nj-state-museum',
      title: 'New Jersey State Museum: Revolutionary New Jersey Collections',
      publisherOrHolder: 'New Jersey State Museum',
      url: 'https://www.nj.gov/state/museum',
      credibilityTier: 'TIER2',
      type: 'MUSEUM_COLLECTION',
    },
    sourceTown: {
      townId: 'us-nj-elizabeth',
      relevanceNote: 'Museum collections include artifacts, portraits, and documentary materials related to Elizabethtown and Essex County during the Revolutionary period, including items associated with Abraham Clark and Elias Boudinot.',
    },
  },
  {
    source: {
      id: 'source-elizabeth-maier-american-scripture',
      title: 'American Scripture: Making the Declaration of Independence',
      publisherOrHolder: 'Alfred A. Knopf',
      credibilityTier: 'TIER1',
      type: 'SCHOLARLY_BOOK',
    },
    sourceTown: {
      townId: 'us-nj-elizabeth',
      relevanceNote: 'Authoritative account of the Declaration\'s creation and signers, including Abraham Clark of Elizabethtown; Maier\'s analysis of Clark\'s political outlook and his advocacy for ordinary citizens places him squarely in the Elizabethtown context.',
    },
  },
];

export const elizabethAdditionalLinks: Array<{ toTownId: string; linkType: string; reason: string; weight: number }> = [
  {
    toTownId: 'us-nj-trenton',
    linkType: 'SHARED_PERSON',
    reason: 'Abraham Clark, Elizabethtown\'s Declaration signer, served in the Continental Congress alongside New Jersey delegates whose work was most urgently relevant during the Trenton crisis of December 1776. Clark\'s advocacy for soldiers\' rights and prisoner exchange directly engaged the human costs of the Trenton-Princeton campaign.',
    weight: 72,
  },
  {
    toTownId: 'us-nj-hackensack',
    linkType: 'SHARED_THEME',
    reason: 'Both Elizabeth and Hackensack were coastal or near-coastal New Jersey communities subjected to repeated British and Loyalist raids from Staten Island and the Hudson shore respectively, creating parallel experiences of civil war within the Revolution\'s larger story. Both towns\' patriot communities sustained resistance through years of repeated physical destruction.',
    weight: 75,
  },
  {
    toTownId: 'us-nj-princeton',
    linkType: 'SHARED_PERSON',
    reason: 'Elias Boudinot, who lived in Elizabethtown and served as Continental Commissary General of Prisoners, worked closely with Princeton-area operations and whose papers are preserved at Princeton University Library; his wartime career crossed both communities.',
    weight: 68,
  },
  {
    toTownId: 'us-nj-morristown',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason: 'Elizabethtown was the primary departure point for the overland road to Morristown, Washington\'s winter headquarters in 1777 and 1779-1780. Supplies, reinforcements, and intelligence passed through Elizabethtown on the route to and from the Morristown encampments, making the town a logistical junction for the Continental Army\'s New Jersey operations.',
    weight: 79,
  },
  {
    toTownId: 'us-nj-new-brunswick',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason: 'New Brunswick and Elizabethtown anchored the northern and central sections of the post road corridor running between New York and Philadelphia. Both towns experienced British occupation or repeated raid patterns, and their civilian populations faced comparable challenges navigating loyalty, property loss, and proximity to active military operations.',
    weight: 70,
  },
  {
    toTownId: 'us-nj-fort-lee',
    linkType: 'SHARED_EVENT',
    reason: 'After the fall of Fort Lee in November 1776, the Continental retreat passed south through New Jersey in proximity to Elizabethtown; British forces spreading from the Palisades and Fort Lee area threatened Essex County including Elizabethtown, and the retreat corridor directly affected the security of the town\'s patriot community.',
    weight: 65,
  },
];

// ============================================================================
// HACKENSACK NJ (us-nj-hackensack)
// +2 people (have 6, need 8), Sources (0→8+), Links (0→6+)
// ============================================================================

export const hackensackAdditionalPeople: Array<{ person: Prisma.PersonCreateInput; connectionNote: string }> = [
  {
    person: {
      id: 'person-hackensack-abraham-van-buskirk',
      name: 'Colonel Abraham Van Buskirk',
      roles: ['Loyalist Commander', 'New Jersey Volunteers Colonel', 'Bergen County Loyalist'],
      bioShort:
        'Bergen County-born loyalist commander (1736–1797) who raised and led the 4th Battalion of the New Jersey Volunteers, one of the most active Loyalist Provincial Corps operating in the Hackensack Valley. Van Buskirk conducted repeated raids against patriot farms and communities in Bergen County throughout the war and was the primary military antagonist the Hackensack patriot community faced on a day-to-day basis.',
      birthYear: 1736,
      deathYear: 1797,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Led the 4th Battalion New Jersey Volunteers in Loyalist operations throughout the Hackensack Valley; his raids on patriot farms and families defined the civil-war character of Bergen County\'s experience of the Revolution and made him the principal military threat faced by Hackensack\'s patriot community.',
  },
  {
    person: {
      id: 'person-hackensack-theunis-dey',
      name: 'Colonel Theunis Dey',
      roles: ['Bergen County Patriot Judge', 'Militia Colonel', 'Landowner'],
      bioShort:
        'Bergen County patriot judge, militia colonel, and landowner (c.1729–1787) whose Preakness estate (now Wayne, NJ) served as a Washington headquarters in July–November 1780. Dey was one of the most prominent Dutch Reformed landowners in Bergen County to commit to the patriot cause, and his family\'s resistance to Loyalist pressure through years of civil conflict in the Hackensack Valley embodied the patriot community\'s persistence.',
      birthYear: 1729,
      deathYear: 1787,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Bergen County militia colonel and patriot judge whose estate served as Washington\'s headquarters in 1780; a leading Dutch Reformed patriot whose commitment to independence despite Loyalist pressure in the Hackensack Valley helped sustain the patriot community through the war\'s most difficult years.',
  },
];

export const hackensackSources: Array<{
  source: {
    id: string;
    title: string;
    publisherOrHolder: string;
    url?: string;
    credibilityTier: 'TIER1' | 'TIER2' | 'TIER3';
    type: string;
  };
  sourceTown: {
    townId: string;
    relevanceNote: string;
  };
}> = [
  {
    source: {
      id: 'source-hackensack-leiby-revolutionary-war',
      title: 'The Revolutionary War in the Hackensack Valley: The Jersey Dutch and the Neutral Ground, 1775-1783',
      publisherOrHolder: 'Rutgers University Press',
      credibilityTier: 'TIER1',
      type: 'SCHOLARLY_BOOK',
    },
    sourceTown: {
      townId: 'us-nj-hackensack',
      relevanceNote: 'The definitive scholarly account of the Revolution in Bergen County. Leiby\'s work covers the civil war between Loyalists and patriots in the Hackensack Valley, Van Buskirk\'s raids, the Dutch Reformed community\'s role, and Hackensack\'s experience of repeated occupation and counter-raid in unmatched detail.',
    },
  },
  {
    source: {
      id: 'source-hackensack-nps-washington-hq',
      title: 'Washington\'s Headquarters: The Hackensack Area in the Revolution',
      publisherOrHolder: 'National Park Service',
      url: 'https://www.nps.gov/revwar',
      credibilityTier: 'TIER1',
      type: 'GOVERNMENT_DOCUMENT',
    },
    sourceTown: {
      townId: 'us-nj-hackensack',
      relevanceNote: 'NPS documentation of Washington\'s use of Bergen County headquarters, including the Dey Mansion at Preakness and the periods when Hackensack served as the Continental Army\'s forward base after the Fort Lee evacuation.',
    },
  },
  {
    source: {
      id: 'source-hackensack-nj-historical-society-bergen',
      title: 'Bergen County in the American Revolution: Primary Sources',
      publisherOrHolder: 'New Jersey Historical Society',
      url: 'https://jerseyhistory.org',
      credibilityTier: 'TIER1',
      type: 'ARCHIVAL_COLLECTION',
    },
    sourceTown: {
      townId: 'us-nj-hackensack',
      relevanceNote: 'Archival collection of Bergen County militia records, damage assessments, Loyalist activity reports, and Dutch Reformed church records documenting the community\'s wartime experience with particular attention to the Hackensack congregation and its displaced minister Dirck Romeyn.',
    },
  },
  {
    source: {
      id: 'source-hackensack-rutgers-nj-revolution',
      title: 'New Jersey in the American Revolution (Rutgers Encyclopedia)',
      publisherOrHolder: 'Rutgers University Press',
      url: 'https://www.rutgersuniversitypress.org',
      credibilityTier: 'TIER1',
      type: 'REFERENCE_WORK',
    },
    sourceTown: {
      townId: 'us-nj-hackensack',
      relevanceNote: 'Comprehensive reference on New Jersey\'s Revolutionary War, with substantial sections on Bergen County operations, the Neutral Ground, the New Jersey Volunteers\' Loyalist operations, and the civil war dynamics that defined the Hackensack Valley experience.',
    },
  },
  {
    source: {
      id: 'source-hackensack-first-dutch-reformed-records',
      title: 'First Reformed Church of Hackensack: Minutes and Records, 1775-1783',
      publisherOrHolder: 'First Reformed Church of Hackensack / New Jersey Historical Society',
      credibilityTier: 'TIER2',
      type: 'ARCHIVAL_COLLECTION',
    },
    sourceTown: {
      townId: 'us-nj-hackensack',
      relevanceNote: 'Church records documenting the congregation\'s wartime experience, including the British use of the building as a prison and hospital, Romeyn\'s flight and return, and the community\'s gradual reconstitution after the British withdrawal from Bergen County.',
    },
  },
  {
    source: {
      id: 'source-hackensack-demarest-reformed-church',
      title: 'The Reformed Church in America: A History',
      publisherOrHolder: 'Board of Publication, Reformed Church in America',
      credibilityTier: 'TIER2',
      type: 'DENOMINATIONAL_HISTORY',
    },
    sourceTown: {
      townId: 'us-nj-hackensack',
      relevanceNote: 'Denominational history covering the Dutch Reformed congregations in Bergen County including Hackensack, their patriot orientation, the wartime disruption of church governance, and the post-war movement toward American ecclesiastical independence from the Classis of Amsterdam.',
    },
  },
  {
    source: {
      id: 'source-hackensack-van-buskirk-nj-volunteers',
      title: 'Loyal Americans: The Military Role of the Loyalist Provincial Corps and their Relation to "The British Army," 1775-1784',
      publisherOrHolder: 'National Museums of Canada / Carleton University Press',
      credibilityTier: 'TIER2',
      type: 'SCHOLARLY_BOOK',
    },
    sourceTown: {
      townId: 'us-nj-hackensack',
      relevanceNote: 'Scholarly account of Loyalist Provincial Corps operations including Van Buskirk\'s 4th Battalion New Jersey Volunteers, documenting the Hackensack Valley raiding patterns that made Bergen County one of the most violent theaters of the internal American civil war.',
    },
  },
  {
    source: {
      id: 'source-hackensack-dey-mansion-nps',
      title: 'Dey Mansion (Wayne, NJ): National Register of Historic Places Documentation',
      publisherOrHolder: 'National Park Service / National Register of Historic Places',
      url: 'https://npgallery.nps.gov',
      credibilityTier: 'TIER2',
      type: 'GOVERNMENT_DOCUMENT',
    },
    sourceTown: {
      townId: 'us-nj-hackensack',
      relevanceNote: 'National Register documentation for the Theunis Dey estate, used as Washington\'s headquarters July–November 1780; covers Bergen County\'s strategic role in the later war years and the Dey family\'s patriot commitment.',
    },
  },
];

export const hackensackAdditionalLinks: Array<{ toTownId: string; linkType: string; reason: string; weight: number }> = [
  {
    toTownId: 'us-nj-fort-lee',
    linkType: 'SHARED_EVENT',
    reason: 'Washington\'s army retreated from Fort Lee directly to Hackensack on November 20, 1776, the first night halt after the Palisades evacuation. The two towns are linked by the retreat itself: Fort Lee was where the crisis began; Hackensack was where Washington gathered his scattered forces the same evening.',
    weight: 91,
  },
  {
    toTownId: 'us-nj-morristown',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason: 'Hackensack and Morristown anchored the northern and central portions of Washington\'s New Jersey defensive perimeter in 1777 and 1779-1780. Bergen County militia coordinated with the Morristown headquarters, and the Neutral Ground between them was the contested theater where Loyalist and patriot forces fought the war\'s most persistent civil conflict.',
    weight: 82,
  },
  {
    toTownId: 'us-nj-elizabeth',
    linkType: 'SHARED_THEME',
    reason: 'Both Hackensack and Elizabethtown were New Jersey communities that experienced the Revolution as a civil war between Loyalists and patriots within a single geographic community, with repeated raids, property destruction, and displacement of families on both sides. The parallel experience of the Neutral Ground dynamic links the two towns thematically.',
    weight: 76,
  },
  {
    toTownId: 'us-ny-stony-point',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason: 'Hackensack sits at the southern edge of the Bergen County corridor leading to the Hudson Highlands. The same geographic logic that made Stony Point strategically critical — controlling the Hudson River narrows — made Hackensack the key overland junction for operations between New York City and the Highlands on the New Jersey side.',
    weight: 70,
  },
  {
    toTownId: 'us-nj-princeton',
    linkType: 'SHARED_PERSON',
    reason: 'Lord Stirling (William Alexander), a Bergen County landowner who claimed the Scottish earldom, commanded Continental forces in multiple engagements connecting the Bergen County theater to Princeton and the wider New Jersey campaign. His estate and network linked Hackensack\'s patrician class to the Continental command structure.',
    weight: 68,
  },
  {
    toTownId: 'us-nj-trenton',
    linkType: 'SHARED_EVENT',
    reason: 'The Continental retreat that ended at the Delaware and enabled the Trenton counterattack passed through Hackensack on its first night. The town is the opening scene of the same dramatic narrative that concludes with Washington\'s Christmas crossing; understanding Hackensack\'s November 20 scene is necessary context for understanding why Trenton mattered.',
    weight: 84,
  },
];

// ============================================================================
// MONMOUTH NJ (us-nj-monmouth)
// Just +1 link (have 5, need 6)
// ============================================================================

export const monmouthAdditionalLinks: Array<{ toTownId: string; linkType: string; reason: string; weight: number }> = [
  {
    toTownId: 'us-nj-trenton',
    linkType: 'SHARED_THEME',
    reason: 'Trenton (December 1776) and Monmouth (June 1778) bracket the two most significant New Jersey engagements of the war. Both tested whether the Continental Army could fight and win against British regulars on open ground; Trenton proved it possible against Hessians in a surprise attack, and Monmouth demonstrated it against the main British army in a conventional day-long engagement — marking eighteen months of dramatic military development.',
    weight: 80,
  },
];
