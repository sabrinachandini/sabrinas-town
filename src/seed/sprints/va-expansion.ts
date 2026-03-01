// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// Virginia expansion: Places, additional Events, LessonPlans, and +1 TownLink
// for Williamsburg, Yorktown, Richmond, Norfolk, Charlottesville

import { Prisma } from '@prisma/client';

// ============================================================================
// WILLIAMSBURG
// ============================================================================

export const williamsburgPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-williamsburg-capitol',
    name: 'Colonial Capitol Building',
    placeType: 'GOVERNMENT',
    description:
      'Reconstructed colonial Virginia Capitol at the east end of Duke of Gloucester Street, where the House of Burgesses met from 1705 until the capital moved to Richmond in 1780. The chamber where Patrick Henry delivered his Stamp Act resolutions in 1765, where George Mason\'s Virginia Declaration of Rights was debated, and where Virginia\'s revolutionary conventions authorized the push for independence. The original building burned in 1747; the reconstruction (1934) faithfully replicates the H-plan original based on documentary evidence.',
    lat: 37.2707,
    lng: -76.7025,
    address: 'Colonial Capitol, Duke of Gloucester St, Williamsburg, VA 23185',
    hours: 'Daily 9am–5pm (Colonial Williamsburg ticket required)',
    admission: 'Included with Colonial Williamsburg admission',
    website: 'https://www.colonialwilliamsburg.org/locations/capitol/',
    town: { connect: { id: 'us-va-williamsburg' } },
  },
  {
    id: 'place-williamsburg-governors-palace',
    name: "Governor's Palace",
    placeType: 'HISTORIC_HOUSE',
    description:
      "The official residence of Virginia's royal governors, completed 1722 and home to seven governors including Lord Dunmore, the last royal governor. Dunmore fled here in June 1775, abandoning the palace and effectively ending royal authority in Virginia. During the Yorktown siege in 1781 it served as a hospital for French and American wounded. The original burned in 1781; the reconstruction (1934) is based on the original floorplan and an architectural drawing by Thomas Jefferson.",
    lat: 37.2747,
    lng: -76.7063,
    address: "Governor's Palace, Palace Green, Williamsburg, VA 23185",
    hours: 'Daily 9am–5pm (Colonial Williamsburg ticket required)',
    admission: 'Included with Colonial Williamsburg admission',
    website: 'https://www.colonialwilliamsburg.org/locations/governors-palace/',
    town: { connect: { id: 'us-va-williamsburg' } },
  },
  {
    id: 'place-williamsburg-bruton-parish-church',
    name: 'Bruton Parish Church',
    placeType: 'CHURCH',
    description:
      "One of America's oldest Episcopal churches, built 1715 and still an active congregation. Attended by George Washington, Thomas Jefferson, Patrick Henry, George Mason, Peyton Randolph, and virtually every prominent figure in colonial Virginia. The church served as the civic center of colonial Williamsburg's religious life, and its proximity to the Capitol and Governor's Palace made it inseparable from Virginia's political culture. George Wythe, Jefferson's law mentor, is buried in the churchyard.",
    lat: 37.2712,
    lng: -76.7059,
    address: '331 Duke of Gloucester St, Williamsburg, VA 23185',
    hours: 'Mon–Sat 9am–5pm, Sun 12pm–5pm',
    admission: 'Free',
    website: 'https://brutonparish.org/',
    town: { connect: { id: 'us-va-williamsburg' } },
  },
  {
    id: 'place-williamsburg-raleigh-tavern',
    name: 'Raleigh Tavern',
    placeType: 'TAVERN',
    description:
      "The most important tavern in colonial Virginia, where dissolved sessions of the House of Burgesses reconvened informally to continue their debates beyond royal authority. In 1769, when Governor Botetourt dissolved the Burgesses for protesting the Townshend Acts, the members reconvened at the Raleigh Tavern and adopted the Virginia non-importation association. In 1773 the Burgesses met here again and formed a Committee of Correspondence. Phi Beta Kappa was founded in the tavern's Apollo Room in December 1776 — a student intellectual society at the College of William & Mary that became America's first Greek-letter academic honor society.",
    lat: 37.2712,
    lng: -76.7037,
    address: '131 Duke of Gloucester St, Williamsburg, VA 23185',
    hours: 'Daily 9am–5pm (Colonial Williamsburg ticket)',
    admission: 'Included with Colonial Williamsburg admission',
    website: 'https://www.colonialwilliamsburg.org/locations/raleigh-tavern/',
    town: { connect: { id: 'us-va-williamsburg' } },
  },
  {
    id: 'place-williamsburg-college-william-mary',
    name: 'College of William & Mary — Wren Building',
    placeType: 'LANDMARK',
    description:
      "The second-oldest institution of higher learning in the American colonies, founded 1693. The Sir Christopher Wren Building (original structure, rebuilt after fires in 1705 and 1859) housed the college throughout the Revolution and is the oldest college building in continuous use in the United States. George Wythe taught America's first law professorship here, training Thomas Jefferson, John Marshall, and Henry Clay. The college was disrupted by the war — the Wren Building served as a French military hospital after Yorktown — but survived as the seedbed of Virginia's revolutionary legal and political thought.",
    lat: 37.2708,
    lng: -76.7131,
    address: 'College of William & Mary, Williamsburg, VA 23185',
    hours: 'Grounds always open; Wren Building tours vary',
    admission: 'Free (grounds)',
    website: 'https://www.wm.edu/about/visiting/campusmap/buildings/wren/',
    town: { connect: { id: 'us-va-williamsburg' } },
  },
  {
    id: 'place-williamsburg-peyton-randolph-house',
    name: 'Peyton Randolph House',
    placeType: 'HISTORIC_HOUSE',
    description:
      "Home of Peyton Randolph, Speaker of the House of Burgesses and first President of the Continental Congress. One of the finest colonial houses in Williamsburg and a hub of Virginia political life in the 1760s and 1770s. Washington and Rochambeau used the house as a headquarters during the staging of allied forces at Williamsburg before the Yorktown siege in September 1781. The house is one of Colonial Williamsburg's most historically significant structures, featuring interpretation of both the Randolph family and the enslaved people who lived and worked there.",
    lat: 37.2720,
    lng: -76.7088,
    address: '113 N Nicholson St, Williamsburg, VA 23185',
    hours: 'Daily 9am–5pm (Colonial Williamsburg ticket)',
    admission: 'Included with Colonial Williamsburg admission',
    website: 'https://www.colonialwilliamsburg.org/locations/peyton-randolph-house/',
    town: { connect: { id: 'us-va-williamsburg' } },
  },
  {
    id: 'place-williamsburg-public-magazine',
    name: 'Colonial Williamsburg Magazine',
    placeType: 'LANDMARK',
    description:
      "The octagonal powder magazine built 1715 at the center of Williamsburg, which became the flashpoint of the Virginia Revolution. Royal Governor Dunmore had royal marines remove the colony's gunpowder from this building in the early morning of April 20, 1775 — the same date as Lexington and Concord. The seizure provoked Patrick Henry's march on Williamsburg with Hanover County militia and precipitated the collapse of royal authority in Virginia. The magazine survived and stands today as one of the most significant original structures in Colonial Williamsburg.",
    lat: 37.2715,
    lng: -76.7052,
    address: 'Magazine & Guardhouse, Williamsburg, VA 23185',
    hours: 'Daily 9am–5pm (Colonial Williamsburg ticket)',
    admission: 'Included with Colonial Williamsburg admission',
    website: 'https://www.colonialwilliamsburg.org/locations/magazine/',
    town: { connect: { id: 'us-va-williamsburg' } },
  },
];

export const williamsburgAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-williamsburg-dunmore-proclamation-response',
    name: "Virginia's Response to Dunmore's Proclamation",
    startDate: new Date('1775-11-14'),
    datePrecision: 'DAY',
    summary: `Lord Dunmore issued his proclamation on November 7, 1775, from the HMS William anchored in the Chesapeake, offering freedom to enslaved people belonging to rebel colonists who could bear arms and join the British forces. The proclamation terrified Virginia's planter class and electrified the colony's enslaved population, with hundreds making dangerous attempts to reach British lines.

Virginia's revolutionary leaders, meeting in Williamsburg through their conventions, responded with a combination of alarm and propaganda. They publicly dismissed the proclamation as a desperate measure while privately understanding that it struck at the foundation of Virginia's plantation economy. The convention passed measures threatening severe punishment for enslaved people who attempted to reach the British. The episode exposed the irreconcilable tension at the heart of Virginia's revolutionary project.`,
    significanceWeight: 85,
    lat: 37.271,
    lng: -76.7075,
    town: { connect: { id: 'us-va-williamsburg' } },
  },
  {
    id: 'event-williamsburg-phi-beta-kappa-founding',
    name: 'Founding of Phi Beta Kappa at Raleigh Tavern',
    startDate: new Date('1776-12-05'),
    datePrecision: 'DAY',
    summary: `On December 5, 1776, five students at the College of William & Mary gathered in the Apollo Room of the Raleigh Tavern and founded a student literary and philosophical society. They named it Phi Beta Kappa — from the Greek phrase "philosophy, the guide of life." It was the first Greek-letter organization in American higher education.

The founding in the midst of the Revolution's first year was not incidental. The students consciously connected their intellectual project to the revolutionary moment. Phi Beta Kappa's founding documents emphasized free inquiry and rational discourse — the same values animating the political arguments being made in the Capitol building down the street. The organization spread to other colleges after the Revolution and became America's most prestigious academic honor society.`,
    significanceWeight: 60,
    lat: 37.2712,
    lng: -76.7037,
    town: { connect: { id: 'us-va-williamsburg' } },
  },
];

export const williamsburgLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-va-williamsburg' } },
    title: "The Capitol and the Tavern: Where Virginia's Revolution Was Argued",
    gradeRange: '6-8',
    estimatedDuration: '2 class periods',
    summary:
      "Students examine how Williamsburg's physical spaces — the Capitol, Raleigh Tavern, Governor's Palace, Bruton Parish Church — shaped the political debates that led to independence. Using maps of the colonial town and excerpts from period debates, students analyze how geography and architecture influenced political culture.",
    lessonData: {
      objectives: [
        "Explain the function of the House of Burgesses and its role in Virginia's path to independence",
        'Identify key moments in Williamsburg political history (Stamp Act speech 1765, Gunpowder Incident 1775, Virginia Declaration of Rights 1776)',
        "Analyze how the Raleigh Tavern functioned as an informal political space when the Capitol's official authority was suspended",
        'Connect Williamsburg political debates to broader colonial resistance movements',
      ],
      essentialQuestions: [
        'Why did Virginia produce so many of the Revolution\'s leading figures? What did Williamsburg provide that other colonial towns did not?',
        'What is the difference between formal political authority (the Capitol) and informal political organizing (the Tavern)? How did both matter?',
      ],
      materials: [
        "Period map of Williamsburg showing Capitol, Raleigh Tavern, Governor's Palace, and Bruton Parish Church",
        "Patrick Henry's Stamp Act resolutions (1765) — adapted primary source",
        "Virginia Convention non-importation association (1769) — adapted primary source",
        'George Mason, Virginia Declaration of Rights (June 12, 1776) — excerpts',
        'Colonial Williamsburg virtual tour materials',
      ],
      activities: [
        {
          name: 'Mapping Political Space',
          duration: '20 min',
          description:
            "Students annotate a period map of Williamsburg, identifying each major political venue and noting what type of political activity happened there. Discussion: why did political activity need multiple spaces?",
        },
        {
          name: 'The Stamp Act Debate',
          duration: '25 min',
          description:
            "Students read Henry's resolutions and role-play the May 1765 House of Burgesses debate. Half the class represents conservative burgesses, half the radicals. What arguments were made on each side? Who had the stronger legal case?",
        },
        {
          name: "Mason's Declaration and Jefferson's Declaration",
          duration: '25 min',
          description:
            'Students compare selected passages from Mason\'s Virginia Declaration of Rights (June 12, 1776) with Jefferson\'s Declaration of Independence (July 4, 1776). What language did Jefferson borrow? What did he change? What does this reveal about Williamsburg\'s intellectual influence?',
        },
        {
          name: 'Closing Reflection',
          duration: '20 min',
          description:
            "Students write a one-paragraph response: 'What do you think Williamsburg's most important contribution to American independence was, and why?'",
        },
      ],
      assessment:
        "Formative: map annotation and debate participation. Summative: one-page analysis comparing Mason's Declaration of Rights to one specific protection in the Bill of Rights, explaining the connection.",
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author\'s point of view or purpose',
      ],
      c3Framework: [
        'D2.His.5.6-8: Explain how and why perspectives of people have changed over time',
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-va-williamsburg' } },
    title: "Liberty and Its Limits: The Revolution's Contradictions in Williamsburg",
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary:
      "Students examine the contradiction at the center of Virginia's revolutionary project: a planter class that articulated radical principles of human liberty while holding people in slavery. Using Dunmore's Proclamation, the Virginia Declaration of Rights, and the story of James Armistead Lafayette, students analyze what the Revolution's promises meant — and did not mean — for different Virginians.",
    lessonData: {
      objectives: [
        "Analyze the Virginia Declaration of Rights as a revolutionary document and identify its limitations",
        "Explain Lord Dunmore's Proclamation (1775) and assess its significance for enslaved Virginians",
        'Trace James Armistead Lafayette\'s role as a spy and evaluate the gap between his service and his legal status',
        "Construct a nuanced argument about the Revolution's meaning for Virginians of different social positions",
      ],
      essentialQuestions: [
        "George Mason wrote 'all men are by nature equally free' while owning enslaved people. How do we account for this contradiction historically? How should we evaluate it morally?",
        "What did Dunmore's Proclamation reveal about the limits of Virginia's revolutionary principles?",
        'What did freedom mean in Williamsburg in 1776 — and for whom?',
      ],
      materials: [
        "George Mason, Virginia Declaration of Rights, Sections 1 and 16 (1776)",
        "Lord Dunmore's Proclamation (November 7, 1775) — full text",
        "James Armistead Lafayette's petition to the Virginia General Assembly (1786) — adapted",
        "Patrick Henry's letter acknowledging the slavery contradiction (1773) — adapted",
        'Secondary: Woody Holton, "Forced Founders" — excerpts on enslaved people and the Revolution',
      ],
      activities: [
        {
          name: "Close Reading: Mason's Declaration",
          duration: '30 min',
          description:
            "Students read Sections 1 and 16 of Mason's Declaration closely. What specific rights are claimed? Who does 'all men' include? Students annotate for rhetorical moves and implicit assumptions.",
        },
        {
          name: "Dunmore's Offer",
          duration: '35 min',
          description:
            "Students read Dunmore's Proclamation and discuss: What was he offering? Who could access the offer? What risks did it require? How did enslaved people respond, and what does this tell us about their assessment of their situation?",
        },
        {
          name: 'James Armistead Lafayette: Service and Petition',
          duration: '35 min',
          description:
            "Students read Lafayette's 1786 petition for freedom — he had to petition the Virginia legislature despite his espionage service ending the war. Discussion: What does it mean that a man who helped win the war had to ask permission for his own freedom?",
        },
        {
          name: 'Synthesis Essay Preparation',
          duration: '20 min',
          description:
            'Students draft a thesis and outline for their summative essay using evidence from all three primary sources.',
        },
      ],
      assessment:
        "Analytical essay (1000–1300 words): 'What did the Revolution mean for enslaved Virginians? Use at least three primary sources and engage directly with the contradiction between revolutionary principles and the practice of slavery in Williamsburg.'",
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.8: Assess the extent to which the reasoning and evidence in a text support the author\'s claims',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.4.9-12: Analyze multiple and complex causes and effects of events in the past',
        'D2.His.5.9-12: Analyze how historical context shaped and continues to shape people\'s perspectives',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const williamsburgAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-va-yorktown',
    linkType: 'SHARED_EVENT',
    reason:
      "Williamsburg served as the primary staging ground for the combined French and American army before the Yorktown siege in September 1781. Washington and Rochambeau established headquarters in Williamsburg, troops encamped around the town, and the Peyton Randolph House served as a command center. The town's role as the former colonial capital made it the natural logistical and command hub for the operation that ended the war.",
    weight: 95,
  },
];

// ============================================================================
// YORKTOWN
// ============================================================================

export const yorktownPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-yorktown-battlefield-nps',
    name: 'Yorktown Battlefield — Colonial National Historical Park',
    placeType: 'BATTLEFIELD',
    description:
      "The preserved battlefield of the October 1781 siege that ended the American Revolution. The NPS site includes the British defensive lines, American and French siege parallels, the surviving earthworks of Redoubts 9 and 10 (stormed October 14, 1781), and a self-guided driving tour of the 7-mile battlefield. The Visitor Center houses Cornwallis's headquarters tent and a reconstruction of the 18th-century warship Yorktown. The site conveys the methodical, engineering-intensive nature of 18th-century siege warfare — this was not a dramatic pitched battle but a systematic reduction of a fortified position over three weeks.",
    lat: 37.2394,
    lng: -76.5031,
    address: '1000 Colonial Pkwy, Yorktown, VA 23690',
    hours: 'Daily 9am–5pm',
    admission: '$10 per person; National Park Pass accepted',
    website: 'https://www.nps.gov/york/index.htm',
    town: { connect: { id: 'us-va-yorktown' } },
  },
  {
    id: 'place-yorktown-moore-house',
    name: 'Moore House',
    placeType: 'HISTORIC_HOUSE',
    description:
      "The farmhouse where American and British commissioners negotiated the Articles of Capitulation on October 18, 1781. American commissioners included John Laurens and Viscount de Noailles; the British sent Lieutenant Colonel Thomas Dundas and Major Alexander Ross. The negotiations lasted one day. The house, owned by Augustine Moore, stood between the British lines and American positions — neutral territory for the talks. The capitulation documents signed here formalized the surrender that ended the war's active fighting. The NPS has restored the house and it is open seasonally.",
    lat: 37.2361,
    lng: -76.4964,
    address: 'Colonial Pkwy, Yorktown, VA 23690',
    hours: 'Open seasonally; check NPS website',
    admission: 'Included with Yorktown Battlefield admission',
    website: 'https://www.nps.gov/york/learn/historyculture/mooreshouse.htm',
    town: { connect: { id: 'us-va-yorktown' } },
  },
  {
    id: 'place-yorktown-nelson-house',
    name: 'Nelson House',
    placeType: 'HISTORIC_HOUSE',
    description:
      'Georgian mansion built ca. 1730 by "Secretary" Thomas Nelson, home of Governor Thomas Nelson Jr. who commanded Virginia militia at the Yorktown siege. Legend holds that Nelson ordered French artillery to fire on his own house, believing Cornwallis was using it as headquarters — though the documentary evidence is disputed. Cannonball damage visible in the walls today is consistent with period accounts. Nelson was a signer of the Declaration of Independence who spent his personal fortune supporting the American cause, dying bankrupt. The house is one of the finest surviving 18th-century structures in Virginia.',
    lat: 37.2394,
    lng: -76.5089,
    address: 'Main St, Yorktown, VA 23690',
    hours: 'Open by tour; check Colonial National Historical Park',
    admission: 'Free',
    website: 'https://www.nps.gov/york/learn/historyculture/nelsonhouse.htm',
    town: { connect: { id: 'us-va-yorktown' } },
  },
  {
    id: 'place-yorktown-victory-monument',
    name: 'Yorktown Victory Monument',
    placeType: 'MONUMENT',
    description:
      'A 98-foot neoclassical column completed in 1884, authorized by Congress in 1781 but not constructed for a century. The monument stands at the center of the old Yorktown battlefield and bears the inscription "One Country, One Constitution, One Destiny." The delay between authorization and construction mirrors the slow consolidation of American national identity the monument celebrates. Thirteen female figures representing the original states encircle the base; a figure of Liberty stands at the summit. The surrounding area features interpretive markers explaining the siege\'s key phases.',
    lat: 37.2409,
    lng: -76.5098,
    address: 'Yorktown, VA 23690',
    hours: 'Always accessible (outdoor monument)',
    admission: 'Free',
    website: 'https://www.nps.gov/york/learn/historyculture/victorymonument.htm',
    town: { connect: { id: 'us-va-yorktown' } },
  },
  {
    id: 'place-yorktown-redoubts-9-10',
    name: 'Redoubts 9 and 10',
    placeType: 'BATTLEFIELD',
    description:
      'The surviving earthworks of the two British redoubts stormed on the night of October 14, 1781, in the operation that broke the British defensive perimeter. French troops under the Baron de Viomesnil stormed Redoubt 9; American troops under Alexander Hamilton stormed Redoubt 10 in about ten minutes using only bayonets. The capture of both redoubts allowed allied engineers to extend the second parallel, bringing artillery to within 300 yards of the main British works. The redoubts are the most physically present reminder of the siege\'s decisive night, and walking them communicates the scale and danger of the operation.',
    lat: 37.2367,
    lng: -76.4994,
    address: 'Colonial Pkwy, Yorktown, VA 23690',
    hours: 'Always accessible (outdoor earthworks)',
    admission: 'Included with Yorktown Battlefield admission',
    website: 'https://www.nps.gov/york/index.htm',
    town: { connect: { id: 'us-va-yorktown' } },
  },
  {
    id: 'place-yorktown-french-battery',
    name: 'French Grand Battery Site',
    placeType: 'BATTLEFIELD',
    description:
      'The site of the principal French artillery battery position during the Yorktown siege, part of the first parallel opened on October 6, 1781. The French heavy artillery — including siege guns far larger than anything the Americans could field — was the decisive technical factor in the siege. From these positions, French batteries maintained a devastating fire on the British works throughout the siege. The site is marked within the battlefield park and is accessible on the self-guided tour. The scale of the French contribution to Yorktown — ships, artillery, troops, money — is legible in the battery positions.',
    lat: 37.2388,
    lng: -76.5015,
    address: 'Colonial Pkwy, Yorktown, VA 23690',
    hours: 'Always accessible (outdoor)',
    admission: 'Included with Yorktown Battlefield admission',
    website: 'https://www.nps.gov/york/index.htm',
    town: { connect: { id: 'us-va-yorktown' } },
  },
  {
    id: 'place-yorktown-visitor-center',
    name: 'Yorktown Battlefield Visitor Center',
    placeType: 'MUSEUM',
    description:
      "The NPS Visitor Center at Yorktown Battlefield houses major artifacts from the 1781 siege including Cornwallis's campaign headquarters tent, a scale model of the siege lines, an orientation film, and exhibits on the American, French, and British perspectives. The reproduction of the 18th-century warship Yorktown is displayed in the center's main hall. Essential orientation before walking the battlefield, the center provides the operational context — troop numbers, artillery positions, the sequence of parallel construction — that makes the driving tour comprehensible.",
    lat: 37.239,
    lng: -76.5028,
    address: 'Colonial Pkwy, Yorktown, VA 23690',
    hours: 'Daily 9am–5pm',
    admission: '$10 per person',
    website: 'https://www.nps.gov/york/planyourvisit/visitorcenters.htm',
    town: { connect: { id: 'us-va-yorktown' } },
  },
];

export const yorktownAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-yorktown-british-fortify',
    name: 'Cornwallis Fortifies Yorktown',
    startDate: new Date('1781-08-01'),
    datePrecision: 'MONTH',
    summary: `In August 1781, General Cornwallis moved his army to Yorktown and began constructing an extensive defensive perimeter on the orders of General Henry Clinton in New York, who wanted a deep-water anchorage for the Royal Navy in the Chesapeake. Cornwallis chose the position reluctantly, recognizing that the bluffs above the York River were defensible but that the town was vulnerable to siege if the British navy could not maintain control of the Chesapeake.

The fortifications Cornwallis built were substantial: a semicircular line of redoubts, batteries, and connecting trenches stretching from the river above town to the river below. But they were designed to resist a coup de main, not a methodical siege by a numerically superior force with heavy French artillery. The decision to fortify Yorktown was the strategic miscalculation that ended the war.`,
    significanceWeight: 80,
    lat: 37.2394,
    lng: -76.5031,
    town: { connect: { id: 'us-va-yorktown' } },
  },
  {
    id: 'event-yorktown-surrender-ceremony',
    name: "British Army Surrenders: The October 19 Ceremony",
    startDate: new Date('1781-10-19'),
    datePrecision: 'DAY',
    summary: `On October 19, 1781, the British army marched out of Yorktown through a corridor of French and American troops to lay down their arms in a field south of town. Cornwallis, claiming illness, sent Brigadier General Charles O'Hara in his place. O'Hara first approached Rochambeau to surrender — either a mistake or a deliberate slight to Washington — and Rochambeau directed him to Washington, who directed him in turn to General Benjamin Lincoln to receive the sword.

The British band played "The World Turned Upside Down," though the evidence for this specific tune is disputed. The ceremony lasted several hours. Some 8,000 British and German soldiers laid down their arms. It was the largest British surrender of the entire war and effectively ended British military capacity to continue fighting in America.`,
    significanceWeight: 98,
    lat: 37.2394,
    lng: -76.5031,
    town: { connect: { id: 'us-va-yorktown' } },
  },
];

export const yorktownLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-va-yorktown' } },
    title: 'Siege Warfare: How Yorktown Was Won',
    gradeRange: '6-8',
    estimatedDuration: '2 class periods',
    summary:
      'Students examine the mechanics and strategy of 18th-century siege warfare using Yorktown as the primary case study. Through maps, primary accounts, and step-by-step analysis of the parallel construction, students understand why the siege succeeded and what role the French alliance played.',
    lessonData: {
      objectives: [
        'Explain how 18th-century siege warfare worked: parallels, redoubts, artillery reduction',
        'Identify the sequence of events at Yorktown from October 6 through October 19, 1781',
        'Analyze the essential roles of the French navy (de Grasse) and French army (Rochambeau) in the American victory',
        'Evaluate the significance of the redoubt assaults on October 14 in changing the siege\'s trajectory',
      ],
      essentialQuestions: [
        'Why was Yorktown a siege rather than a battle? What did siege warfare require that conventional battle did not?',
        'How much of the Yorktown victory was American, and how much was French? Does the distinction matter?',
      ],
      materials: [
        'Siege map showing British works, first and second parallels, and redoubt positions',
        "Washington's diary entries from the siege (October 6–19, 1781) — adapted",
        'American and French troop and artillery count comparison chart',
        'Sergeant Joseph Plumb Martin\'s account of the redoubt assault — adapted',
        'Yorktown NPS battlefield driving tour map',
      ],
      activities: [
        {
          name: 'The Siege in Sequence',
          duration: '25 min',
          description:
            "Students receive a simplified siege map and a timeline of October 6–19 events. Working in pairs, they match each event (first parallel opened, Grand Battery fires, Redoubts 9 and 10 stormed, second parallel extended, British negotiations begin) to a location on the map. Discussion: what was the logic of each step?",
        },
        {
          name: "Counting the French",
          duration: '20 min',
          description:
            "Students use the troop and artillery comparison chart to calculate what percentage of allied strength at Yorktown was French. Discussion: The French alliance was the decisive factor. What does this mean for how we tell the story of American independence?",
        },
        {
          name: 'The Night of October 14',
          duration: '25 min',
          description:
            "Students read Martin's account of the American assault on Redoubt 10. Discussion: How was this assault similar to Wayne's Stony Point assault two years earlier? What does the similarity suggest about how Continental Army training had developed?",
        },
        {
          name: "The Surrender Scene",
          duration: '20 min',
          description:
            "Students analyze the October 19 surrender ceremony: Why did Cornwallis send O'Hara? Why did O'Hara approach Rochambeau first? What did Washington's response reveal about protocol and alliance? Students write a brief interpretation of the ceremony as a political event.",
        },
      ],
      assessment:
        "Formative: sequence mapping activity. Summative: one-page analysis responding to the question 'Could the Americans have won at Yorktown without the French? Support your answer with specific evidence.'",
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information (maps, diagrams) with other information in print and digital texts',
        'CCSS.ELA-LITERACY.RH.6-8.3: Follow precisely a multistep procedure when carrying out experiments, taking measurements, or performing technical tasks',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.Geo.2.6-8: Use maps, satellite images, photographs, and other representations to explain relationships',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-va-yorktown' } },
    title: "The Alliance That Won the War: France, America, and Yorktown",
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary:
      "Students analyze the French alliance as the decisive factor in American victory, using Yorktown as the culminating case study. They examine French motivations, the strategic role of de Grasse's fleet, and the long-term implications of dependence on a European monarchy to win a republican revolution.",
    lessonData: {
      objectives: [
        'Explain French motivations for entering the American alliance in 1778 and trace how those motivations shaped French strategy',
        'Analyze the Battle of the Capes (September 5, 1781) and explain why naval control was the precondition for Yorktown',
        "Evaluate the Yorktown campaign as a combined-arms, multinational operation and identify the contribution of each allied force",
        'Assess the long-term implications of the French alliance — including French debt, the French Revolution, and American isolationism',
      ],
      essentialQuestions: [
        'Could the American Revolution have succeeded without France? What evidence supports your position?',
        "What did France want from the alliance? Did it get what it wanted?",
        "How did dependence on French money, ships, and soldiers shape America's early foreign policy and isolationist tradition?",
      ],
      materials: [
        "Treaty of Alliance (1778) — key provisions, adapted",
        "Admiral de Grasse's correspondence before the Battle of the Capes — adapted",
        "Map of the Battle of the Capes (September 5, 1781): British and French fleet positions",
        "Rochambeau's memoirs on the Yorktown campaign — excerpts, translated and adapted",
        "Jefferson's correspondence on the French debt — adapted",
        'Secondary: Jonathan Dull, "The French Navy and American Independence" — excerpts',
      ],
      activities: [
        {
          name: "Why France Chose America",
          duration: '30 min',
          description:
            "Students read the Treaty of Alliance provisions and analyze French motivations. Small groups identify: What did France gain? What did it risk? Was this a strategic bet or an ideological commitment? Groups compare assessments.",
        },
        {
          name: "The Battle of the Capes",
          duration: '35 min',
          description:
            "Students use fleet position maps to reconstruct the September 5 engagement. Key question: why did de Grasse win? What would have happened at Yorktown if the British fleet had broken through? Students trace the counterfactual.",
        },
        {
          name: "Counting the Alliance's Contribution",
          duration: '25 min',
          description:
            "Students compile a ledger of French contributions to Yorktown: ships, troops, artillery pieces, money. They calculate what the campaign would have looked like with American forces alone and construct a brief argument about the alliance's necessity.",
        },
        {
          name: "The Debt That Changed History",
          duration: '30 min',
          description:
            "Students read about France's war debt and its connection to the French Revolution. Discussion: Did France's alliance with America cost it more than it gained? How does Yorktown connect to the guillotine?",
        },
      ],
      assessment:
        "Research-based essay (1200–1500 words): 'Analyze the French alliance as a factor in the American victory at Yorktown. Address French motivations, operational contributions, and the long-term consequences for both nations.' Minimum four sources; must include at least one primary source.",
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in several primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.11-12.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.4.9-12: Analyze multiple and complex causes and effects of events in the past',
        'D2.His.14.9-12: Analyze multiple and complex causes of change in the past',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const yorktownAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-va-williamsburg',
    linkType: 'SHARED_EVENT',
    reason:
      "Williamsburg was the immediate staging ground for the allied army that besieged Yorktown in October 1781. Washington and Rochambeau established headquarters there in September 1781; French and American troops encamped around the former capital before marching the twelve miles east to begin siege operations. The two towns are inseparable in the Yorktown campaign's operational history.",
    weight: 95,
  },
];

// ============================================================================
// RICHMOND
// ============================================================================

export const richmondPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-richmond-virginia-state-capitol',
    name: 'Virginia State Capitol',
    placeType: 'GOVERNMENT',
    description:
      "Designed by Thomas Jefferson and Charles-Louis Clérisseau and completed in 1788, the Virginia State Capitol was the first government building in America designed in the neoclassical style modeled on a Roman temple — specifically the Maison Carrée at Nîmes. Jefferson designed it while serving as minister to France, intending to give the new republic a visual language drawn from ancient republican Rome rather than English precedent. The Capitol was built after Richmond became the state capital in 1780; it housed the Virginia General Assembly through the Civil War (when it served as the Confederate Congress's meeting place) and beyond. A life-size Houdon statue of George Washington stands in the rotunda — the only statue for which Washington sat from life.",
    lat: 37.5382,
    lng: -77.4337,
    address: '1000 Bank St, Richmond, VA 23219',
    hours: 'Mon–Sat 8am–5pm, Sun 1pm–5pm',
    admission: 'Free',
    website: 'https://virginiacapitol.gov/',
    town: { connect: { id: 'us-va-richmond' } },
  },
  {
    id: 'place-richmond-st-johns-church',
    name: "St. John's Church",
    placeType: 'CHURCH',
    description:
      "The oldest frame church in Richmond, built 1741, where the Second Virginia Convention met in March 1775 and Patrick Henry delivered his 'Give me liberty, or give me death' speech on March 23, 1775. The church was chosen for the convention because it was the largest indoor meeting space available in the small town of Richmond. Henry's exact words were never recorded verbatim; the speech as known today was reconstructed decades later by William Wirt from the memories of men who were present. The church survived intact and still stands on Church Hill. St. John's reenacts the convention speech on summer weekends.",
    lat: 37.5328,
    lng: -77.4196,
    address: '2401 E Broad St, Richmond, VA 23223',
    hours: 'Mon–Sat 10am–3:30pm, Sun 1pm–3:30pm',
    admission: '$8 adults, $6 seniors/students',
    website: 'https://historicstjohnschurch.org/',
    town: { connect: { id: 'us-va-richmond' } },
  },
  {
    id: 'place-richmond-black-history-museum',
    name: 'Black History Museum and Cultural Center of Virginia',
    placeType: 'MUSEUM',
    description:
      "Dedicated to preserving and interpreting African American history in Virginia from the colonial era through the present. Revolutionary War-era exhibits address the experience of enslaved Virginians during the conflict, including the impact of Dunmore's Proclamation, the service of Black soldiers in both Continental and British forces, and the story of James Armistead Lafayette, the enslaved spy who served as a double agent for the Continental Army. The museum provides essential context for understanding the Revolution's incomplete promises and the gap between its ideals and its practice in Virginia.",
    lat: 37.5428,
    lng: -77.4439,
    address: '122 W Leigh St, Richmond, VA 23220',
    hours: 'Tue–Sat 10am–5pm',
    admission: '$10 adults, $8 seniors, $5 students',
    website: 'https://www.blackhistorymuseum.org/',
    town: { connect: { id: 'us-va-richmond' } },
  },
  {
    id: 'place-richmond-shockoe-bottom',
    name: 'Shockoe Bottom Historic District',
    placeType: 'LANDMARK',
    description:
      "The low-lying neighborhood between downtown Richmond and the James River that was the center of the domestic slave trade in the 19th century, but during the Revolutionary era was Richmond's commercial waterfront and the area through which goods and people moved. Benedict Arnold's January 1781 raid targeted the warehouses and commercial district around Shockoe Bottom, burning tobacco stores and military supplies. The area today is under ongoing archaeological investigation, and sites associated with the slave trade are being evaluated for a proposed memorial. The neighborhood embodies the full arc of Richmond history from the Revolution through the Civil War.",
    lat: 37.5311,
    lng: -77.4295,
    address: 'Shockoe Bottom, Richmond, VA 23223',
    hours: 'Always accessible (public district)',
    admission: 'Free',
    website: 'https://www.richmondgov.com/',
    town: { connect: { id: 'us-va-richmond' } },
  },
  {
    id: 'place-richmond-museum-confederacy',
    name: 'American Civil War Museum — White House of the Confederacy',
    placeType: 'MUSEUM',
    description:
      "The White House of the Confederacy was built in 1818 — the Revolutionary era's immediate architectural aftermath — and served as Jefferson Davis's presidential residence during the Civil War. The associated American Civil War Museum provides context for how Richmond's Revolutionary era identity was refracted through the Confederacy's appropriation of the Founders. The site illuminates how the same city that was burned by Benedict Arnold in 1781 and designed a capitol modeled on Roman republicanism by Jefferson later became the capital of a slaveholding Confederacy that claimed the same revolutionary legacy.",
    lat: 37.5352,
    lng: -77.4381,
    address: '1201 E Clay St, Richmond, VA 23219',
    hours: 'Mon–Sat 10am–5pm, Sun 12pm–5pm',
    admission: '$14 adults',
    website: 'https://acwm.org/',
    town: { connect: { id: 'us-va-richmond' } },
  },
  {
    id: 'place-richmond-james-river-canal',
    name: 'James River and Kanawha Canal — Canal Walk',
    placeType: 'TRAIL',
    description:
      "Richmond's Canal Walk follows the route of the James River and Kanawha Canal, conceived by George Washington as a way to connect the Tidewater with the trans-Appalachian interior. Washington's interest in western navigation was inseparable from his Revolutionary-era vision of American expansion. The 1.25-mile walk along the historic canal basin passes bronze medallions interpreting Richmond history and offers views of the James River falls that defined Richmond's location as the fall line city where ocean navigation ended and river travel began. The canal infrastructure was built after the Revolution but reflects Washington's wartime-era thinking about the new nation's economic geography.",
    lat: 37.5263,
    lng: -77.4462,
    address: 'Canal Walk, Richmond, VA 23219',
    hours: 'Always accessible',
    admission: 'Free',
    website: 'https://www.richmondgov.com/content/parksrecreation/CanalWalk.aspx',
    town: { connect: { id: 'us-va-richmond' } },
  },
  {
    id: 'place-richmond-poe-museum',
    name: 'The Old Stone House — Edgar Allan Poe Museum',
    placeType: 'HISTORIC_HOUSE',
    description:
      "The Old Stone House, built ca. 1737, is the oldest structure in Richmond and one of the few buildings that survived Benedict Arnold's January 1781 raid, which burned much of the town. The building gives Richmond visitors their most direct physical connection to the Revolutionary-era city. Now the Edgar Allan Poe Museum (Poe was born in Richmond in 1809), the house preserves the physical scale and construction of 18th-century Richmond and is a useful anchor for understanding what Arnold's troops encountered and destroyed during the 1781 British raid.",
    lat: 37.5298,
    lng: -77.4294,
    address: '1914–16 E Main St, Richmond, VA 23223',
    hours: 'Tue–Sat 10am–5pm, Sun 11am–5pm',
    admission: '$8 adults',
    website: 'https://www.poemuseum.org/',
    town: { connect: { id: 'us-va-richmond' } },
  },
];

export const richmondAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-richmond-capitol-cornerstone',
    name: "Virginia's New Capitol Cornerstone Laid",
    startDate: new Date('1785-08-18'),
    datePrecision: 'DAY',
    summary: `The cornerstone of Jefferson's new Virginia State Capitol was laid in August 1785, implementing the design Jefferson had developed while serving as minister to France. Jefferson had deliberately modeled the building on the Maison Carrée — an intact Roman temple at Nîmes — intending to give the American republic a visual vocabulary drawn from ancient democratic Rome rather than English Gothic or Baroque precedent.

Jefferson's Capitol was the first public building in the United States designed in the neoclassical style that would come to define American civic architecture. When it was completed in 1788, it set the template for federal buildings and state capitols across the new nation. Jefferson had written from Paris: "I gazed whole hours at the Maison Carrée, like a lover at his mistress." The Richmond Capitol made that obsession into American architecture.`,
    significanceWeight: 72,
    lat: 37.5382,
    lng: -77.4337,
    town: { connect: { id: 'us-va-richmond' } },
  },
  {
    id: 'event-richmond-benedict-arnold-raid-detail',
    name: "Arnold Burns Richmond: January 5, 1781",
    startDate: new Date('1781-01-05'),
    datePrecision: 'DAY',
    summary: `Benedict Arnold — now a British brigadier general — led approximately 1,600 British and loyalist troops up the James River and into Richmond on January 5, 1781. Governor Jefferson had fewer than 200 militia to defend the new capital, and he evacuated the government records and public stores as best he could before the British arrived. Arnold's forces burned warehouses, cannon foundry, and tobacco stores, causing significant damage to the town.

Jefferson was criticized for the failure to defend Richmond — a charge that dogged him throughout his later political career. Arnold offered to spare the tobacco warehouses if they were not destroyed, but Jefferson refused. The raid lasted less than a day; Arnold withdrew before Continental reinforcements under Steuben and Lafayette could arrive. It was the most damaging British operation in Virginia before Cornwallis's later campaign and demonstrated the new capital's vulnerability.`,
    significanceWeight: 82,
    lat: 37.5311,
    lng: -77.4295,
    town: { connect: { id: 'us-va-richmond' } },
  },
];

export const richmondLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-va-richmond' } },
    title: "Patrick Henry's Speech and the Decision for War",
    gradeRange: '6-8',
    estimatedDuration: '2 class periods',
    summary:
      "Students examine the March 1775 Virginia Convention at St. John's Church, including Patrick Henry's 'Give me liberty, or give me death' speech, and analyze how the Convention's decision to mobilize Virginia for war shaped the colony's subsequent trajectory. Students also examine the historical evidence for the speech itself.",
    lessonData: {
      objectives: [
        "Describe the political context of the Second Virginia Convention (March 1775) and explain why it met in Richmond",
        "Analyze Patrick Henry's speech as reconstructed by William Wirt and assess the challenges of historical memory",
        "Evaluate the Convention's decision to prepare Virginia for war and identify arguments on both sides",
        'Connect Richmond\'s role in 1775 to its emergence as Virginia\'s state capital in 1780',
      ],
      essentialQuestions: [
        "We don't have a transcript of Henry's actual words. How do historians work with speeches that were never recorded? What can we trust, and what can't we?",
        'Why did the Virginia Convention need to debate whether to prepare for war in March 1775? Who was arguing against it?',
      ],
      materials: [
        "William Wirt's reconstruction of Henry's speech (1817) — excerpts",
        "Eyewitness accounts of the speech from Edmund Randolph and others — adapted",
        'Second Virginia Convention resolutions, March 23, 1775 — adapted',
        'Map of Virginia showing Richmond and Williamsburg',
        'St. John\'s Church photograph and floor plan',
      ],
      activities: [
        {
          name: 'The Problem of the Speech',
          duration: '20 min',
          description:
            "Students learn that no verbatim transcript of Henry's speech exists and that William Wirt reconstructed it from memory accounts 42 years later. Discussion: Does this make the speech less historically significant? How do historians evaluate reconstructed primary sources?",
        },
        {
          name: 'Reading the Convention Resolutions',
          duration: '25 min',
          description:
            "Students read the actual Convention resolutions — the documented historical record — and identify what Virginia committed to do. Discussion: What do the official resolutions tell us that the speech cannot?",
        },
        {
          name: 'Debate: Should Virginia Prepare for War?',
          duration: '25 min',
          description:
            "Students role-play the Convention debate. Half argue for immediate military preparation (Henry's position); half argue for continued negotiation. After the debate, students compare their arguments to the actual historical record of who opposed and who supported Henry.",
        },
        {
          name: 'From Convention to Capital',
          duration: '20 min',
          description:
            "Students trace the sequence from Henry's 1775 speech at St. John's Church to Richmond becoming the state capital in 1780. What made Richmond suitable to replace Williamsburg? What had changed in five years?",
        },
      ],
      assessment:
        "Formative: debate participation and written pre-debate position statement. Summative: one-page reflection on the question 'What can historians learn from Patrick Henry's speech if we cannot verify his exact words?'",
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        "CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author's point of view or purpose",
        'CCSS.ELA-LITERACY.RH.6-8.8: Distinguish among fact, opinion, and reasoned judgment in a text',
      ],
      c3Framework: [
        'D2.His.9.6-8: Classify the kinds of historical sources used in a secondary interpretation',
        'D2.His.10.6-8: Detect possible limitations in the historical record based on evidence collected from different kinds of historical sources',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-va-richmond' } },
    title: "Benedict Arnold's Raid: Loyalty, Treason, and the War in Virginia",
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary:
      "Students use the Arnold raid on Richmond (January 1781) as a lens for examining treason, loyalty, and the complexity of the Revolutionary War in Virginia. They analyze Arnold's motivations for defection, Jefferson's response to the raid, and the broader pattern of British raids on Virginia in 1780–81.",
    lessonData: {
      objectives: [
        "Explain Benedict Arnold's defection and identify the factors that led him to switch sides",
        'Analyze Jefferson\'s response to the Arnold raid and evaluate the criticism he faced',
        'Trace the pattern of British raids in Virginia (Arnold 1781, Phillips 1781, Cornwallis 1781) and identify their strategic purpose',
        "Assess how Virginia's experience of the war in 1781 — raids, capital moved, Jefferson fled — compared to the experience in other states",
      ],
      essentialQuestions: [
        "Arnold was a hero at Saratoga and a villain at West Point. What does his trajectory tell us about how the Revolutionary War tested personal loyalty?",
        "Jefferson was criticized for failing to defend Richmond. Was the criticism fair? What resources did he actually have?",
        'Why did the British focus their 1781 strategy on Virginia? What were they trying to accomplish?',
      ],
      materials: [
        "Arnold's letter explaining his defection (October 1780) — adapted",
        "Jefferson's correspondence during and after the Arnold raid — adapted",
        'Map of British raids in Virginia, 1780–81: Arnold, Phillips, Cornwallis',
        "Congressional investigation of Jefferson's conduct as governor — excerpts, adapted",
        'Tarleton\'s account of the Virginia campaign — excerpts, adapted',
      ],
      activities: [
        {
          name: "Arnold's Defection: Reading His Own Words",
          duration: '30 min',
          description:
            "Students read Arnold's letter of October 1780 explaining his reasons for switching sides. Small groups identify his stated motivations, evaluate their plausibility, and discuss what the defection revealed about tensions within the Continental officer corps.",
        },
        {
          name: "January 5, 1781: Richmond Burns",
          duration: '30 min',
          description:
            'Students reconstruct the raid using Jefferson\'s correspondence. What did Jefferson know, and when? What decisions did he make? What resources did he actually have? Students assess whether the criticism he faced was fair given the constraints.',
        },
        {
          name: 'Mapping the 1781 Virginia Campaign',
          duration: '30 min',
          description:
            "Students annotate the Virginia raid map: Arnold (January), Phillips (April–May), Cornwallis (May–October). They identify the pattern and construct a thesis about British strategic intent in Virginia in 1781.",
        },
        {
          name: 'The Governor on the Run',
          duration: '30 min',
          description:
            "Students connect the Arnold raid to Tarleton's June 1781 raid on Charlottesville, which nearly captured Jefferson at Monticello. Discussion: What does it mean that Virginia's governor was repeatedly fleeing British cavalry? How did this shape Jefferson's postwar reputation?",
        },
      ],
      assessment:
        "Analytical essay (1000–1300 words): 'Was Thomas Jefferson a successful wartime governor? Assess his record using the Arnold raid, the fall of Richmond, and the Tarleton raid as evidence. Consider both what he accomplished and the constraints he faced.'",
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors for how they treat the same or similar topics',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.4.9-12: Analyze multiple and complex causes and effects of events in the past',
        'D2.His.11.9-12: Evaluate the credibility of a source by examining how experts have evaluated it',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const richmondAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-va-charlottesville',
    linkType: 'SHARED_EVENT',
    reason:
      "Benedict Arnold's January 1781 raid on Richmond and Tarleton's June 1781 raid on Charlottesville were sequential chapters in the same British campaign to decapitate Virginia's revolutionary government. Jefferson fled Richmond after Arnold's raid and then nearly was captured at Monticello when Tarleton struck Charlottesville five months later. The two raids together define Jefferson's embattled tenure as wartime governor.",
    weight: 88,
  },
];

// ============================================================================
// NORFOLK
// ============================================================================

export const norfolkPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-norfolk-moses-myers-house',
    name: 'Moses Myers House',
    placeType: 'HISTORIC_HOUSE',
    description:
      "Built 1792 by Moses Myers, a prosperous Jewish merchant who arrived in Norfolk after the Revolution, the house is the oldest surviving private residence in downtown Norfolk and one of the best-preserved Federal-period houses in America. Myers was one of the first Jewish residents of Norfolk, and the house illuminates the post-Revolutionary mercantile community that rebuilt the city after the catastrophic January 1, 1776 burning. The Chrysler Museum manages the house as a museum with original furnishings including a Houdon bust of Napoleon and portraits by Gilbert Stuart and Thomas Sully.",
    lat: 36.8495,
    lng: -76.291,
    address: '323 E Freemason St, Norfolk, VA 23510',
    hours: 'Wed–Sun 12pm–4pm',
    admission: 'Included with Chrysler Museum admission',
    website: 'https://chrysler.org/moses-myers-house/',
    town: { connect: { id: 'us-va-norfolk' } },
  },
  {
    id: 'place-norfolk-macarthur-memorial',
    name: 'MacArthur Memorial — Historic Norfolk Courthouse',
    placeType: 'MUSEUM',
    description:
      'The MacArthur Memorial occupies the 1850 Norfolk City Hall and Courthouse building, but the site\'s history extends to the 18th century courthouse that stood here during the Revolution. Norfolk\'s courthouse was the center of civil authority in the town during the years of Dunmore\'s occupation and the 1776 burning. The memorial\'s location at the center of colonial Norfolk\'s civic geography makes it a useful anchor for understanding the Revolutionary-era town. MacArthur\'s tomb, five galleries of his military career, and the 1945 Japanese surrender documents are the primary exhibits.',
    lat: 36.8497,
    lng: -76.2939,
    address: '198 Bank St, Norfolk, VA 23510',
    hours: 'Mon–Sat 10am–5pm, Sun 11am–5pm',
    admission: 'Free',
    website: 'https://www.macarthurmemorial.org/',
    town: { connect: { id: 'us-va-norfolk' } },
  },
  {
    id: 'place-norfolk-fort-norfolk',
    name: 'Fort Norfolk',
    placeType: 'LANDMARK',
    description:
      'The oldest surviving fort in the United States (authorized 1794, built 1795–1800), Fort Norfolk stands on the Elizabeth River waterfront at the site where Revolutionary-era fortification was first proposed. During the Revolution, the waterfront here was the location of the HMS Fowey and other British warships from which Lord Dunmore conducted his floating government in 1775–76. The fort built after the Revolution replaced the informal defensive positions used during the war. It is the best surviving physical anchor for understanding the Norfolk waterfront that Dunmore controlled and that was burned on January 1, 1776.',
    lat: 36.8424,
    lng: -76.3014,
    address: '810 Front St, Norfolk, VA 23510',
    hours: 'Grounds open seasonally; managed by Army Corps of Engineers',
    admission: 'Free',
    website: 'https://www.sam.usace.army.mil/Missions/Regulatory/Fort-Norfolk/',
    town: { connect: { id: 'us-va-norfolk' } },
  },
  {
    id: 'place-norfolk-chrysler-museum',
    name: 'Chrysler Museum of Art',
    placeType: 'MUSEUM',
    description:
      "One of the premier art museums in the American South, with significant 18th-century American art collections relevant to the Revolutionary era, including portrait paintings of Virginia's founding generation. The museum's collection of decorative arts from the colonial and Federal periods provides material culture context for understanding what life and commerce looked like in 18th-century Norfolk. The Moses Myers House, which the Chrysler manages, makes the two institutions complementary for understanding Revolutionary-era and early Federal Norfolk.",
    lat: 36.8535,
    lng: -76.2904,
    address: '1 Memorial Pl, Norfolk, VA 23510',
    hours: 'Wed–Sun 10am–5pm; Thu until 8pm',
    admission: 'Free',
    website: 'https://chrysler.org/',
    town: { connect: { id: 'us-va-norfolk' } },
  },
  {
    id: 'place-norfolk-elizabeth-river-waterfront',
    name: 'Elizabeth River Waterfront — Town Point Park',
    placeType: 'LANDMARK',
    description:
      "Town Point Park on the Elizabeth River waterfront occupies the geographic position where colonial Norfolk's commerce was conducted and where Lord Dunmore's warships anchored during 1775–76. The January 1, 1776 burning of Norfolk began when British ships shelled the waterfront and loyalist houses, a fire that spread to engulf most of the town. Standing at the waterfront today, visitors can see the Elizabeth River's width — narrow enough for ship cannon to reach downtown — that made Norfolk uniquely vulnerable to British naval power and explains why Dunmore could maintain a floating government here for months.",
    lat: 36.8459,
    lng: -76.2954,
    address: 'Town Point Park, 1 Waterside Dr, Norfolk, VA 23510',
    hours: 'Always accessible',
    admission: 'Free',
    website: 'https://www.norfolk.gov/facilities/facility/details/Town-Point-Park-100',
    town: { connect: { id: 'us-va-norfolk' } },
  },
  {
    id: 'place-norfolk-hunter-house',
    name: 'Hunter House Victorian Museum (Colonial-Era Site)',
    placeType: 'HISTORIC_HOUSE',
    description:
      "The Hunter House Museum building dates from 1894, but it occupies a lot in the Freemason Street neighborhood that was part of colonial Norfolk's most prosperous residential district — the area inhabited by the merchant elite who were predominantly loyalist during the Revolution. The Freemason district\'s history as Norfolk's wealthiest neighborhood before and after the burning of 1776 illuminates the social geography of the Revolutionary town: who lived where, who fled with Dunmore, and who stayed to rebuild. The museum's Victorian furnishings document the long arc of Norfolk's recovery.",
    lat: 36.8499,
    lng: -76.2904,
    address: '240 W Freemason St, Norfolk, VA 23510',
    hours: 'Fri–Sun 12pm–4pm',
    admission: '$5',
    website: 'https://www.hunterhousemuseum.org/',
    town: { connect: { id: 'us-va-norfolk' } },
  },
  {
    id: 'place-norfolk-hampton-roads-naval-museum',
    name: 'Hampton Roads Naval Museum',
    placeType: 'MUSEUM',
    description:
      "Operated by the U.S. Navy within the Nauticus complex, the Hampton Roads Naval Museum interprets the naval history of the Chesapeake region from the colonial era to the present. Revolutionary War exhibits address the Battle of the Capes (September 1781), Dunmore's use of the Chesapeake as a British naval base, and the strategic importance of the Elizabeth River and Hampton Roads anchorage throughout the war. The museum provides essential context for understanding why Norfolk's location — at the junction of four rivers feeding into Hampton Roads — made it the most strategically significant port in the Chesapeake.",
    lat: 36.8451,
    lng: -76.2957,
    address: '1 Waterside Dr, Norfolk, VA 23510',
    hours: 'Tue–Sat 10am–5pm',
    admission: 'Free',
    website: 'https://www.history.navy.mil/content/history/museums/hrnm.html',
    town: { connect: { id: 'us-va-norfolk' } },
  },
];

export const norfolkAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-norfolk-dunmore-floating-government',
    name: "Dunmore's Floating Government on the Chesapeake",
    startDate: new Date('1775-06-08'),
    datePrecision: 'DAY',
    summary: `After fleeing the Governor's Palace in Williamsburg on June 8, 1775, Lord Dunmore established what historians call his "floating government" aboard British warships anchored in the Chesapeake, using Norfolk's harbor as his base. For more than a year, Dunmore governed — or attempted to govern — Virginia's royal administration from the HMS Fowey and later the HMS Dunmore.

From the ships, Dunmore conducted raids on the Virginia coastline, recruited loyalists and escaped enslaved people, issued his November 1775 Proclamation, and fought the Battle of Great Bridge in December 1775. Norfolk's loyalist merchant community supplied him and maintained contact with his administration. The floating government was an extraordinary improvisation: a royal governor running a colonial administration entirely from warships for over a year, demonstrating how completely the balance of power in Virginia had shifted against the Crown even before independence was declared.`,
    significanceWeight: 80,
    lat: 36.8459,
    lng: -76.2954,
    town: { connect: { id: 'us-va-norfolk' } },
  },
  {
    id: 'event-norfolk-rebuild-after-burning',
    name: 'Norfolk Begins to Rebuild After the 1776 Burning',
    startDate: new Date('1776-07-01'),
    datePrecision: 'MONTH',
    summary: `After the burning of January 1, 1776 — in which British naval bombardment and loyalist arson destroyed most of the town, followed by further destruction by the Virginia Convention's militia to deny shelter to British forces — Norfolk was largely a ruin. The town that had been Virginia's largest commercial port and most significant loyalist stronghold lay empty.

Rebuilding began slowly in the summer of 1776 as the British threat receded. The process of reconstruction was not simply physical but social and political: the loyalist merchant class that had dominated colonial Norfolk was largely gone, replaced by patriots who rebuilt the town's commercial identity. The Norfolk that emerged by the 1780s and 1790s — represented by residents like Moses Myers — was a different city than the one that had existed before the war, with a different social composition and political character.`,
    significanceWeight: 68,
    lat: 36.8495,
    lng: -76.291,
    town: { connect: { id: 'us-va-norfolk' } },
  },
];

export const norfolkLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-va-norfolk' } },
    title: 'The Burning of Norfolk: Loyalists, Patriots, and the Cost of Revolution',
    gradeRange: '6-8',
    estimatedDuration: '2 class periods',
    summary:
      "Students examine the burning of Norfolk on January 1, 1776 — one of the most destructive events of the Revolution in the South — and analyze who was responsible and why. The complex story of who burned Norfolk (British ships, loyalists, and eventually patriot militia) challenges students to think beyond simple hero-villain narratives.",
    lessonData: {
      objectives: [
        'Describe the sequence of events that led to the burning of Norfolk and identify the multiple parties responsible',
        'Explain what loyalism was and why Norfolk had a large loyalist population',
        "Analyze Dunmore's Proclamation and assess its significance for both the loyalist community and enslaved Virginians",
        'Evaluate the human cost of the burning and connect it to broader patterns of civilian suffering in the Revolution',
      ],
      essentialQuestions: [
        'Norfolk was burned by British ships, loyalists, AND patriot militia. Does that complicate the story of the Revolution? How do we decide who was responsible?',
        'Why were some Virginians loyalists? What did they have to lose by supporting independence?',
      ],
      materials: [
        'Timeline of Norfolk events: Dunmore flees June 1775, Battle of Great Bridge December 1775, Burning January 1 1776',
        "Eyewitness account of the burning (adapted from period letters)",
        "Dunmore's Proclamation, November 7, 1775 — adapted",
        'Virginia Convention orders regarding Norfolk (1776) — adapted',
        'Map of colonial Norfolk showing loyalist neighborhoods and waterfront',
      ],
      activities: [
        {
          name: "Who Burned Norfolk? Evidence Investigation",
          duration: '25 min',
          description:
            'Students receive three separate accounts attributing responsibility for the burning: British naval fire, loyalist arson, and patriot militia destruction. In groups, they weigh the evidence and construct a combined account that reflects the actual complexity.',
        },
        {
          name: "Understanding Loyalism",
          duration: '20 min',
          description:
            "Students read brief profiles of three types of Norfolk residents: a loyalist merchant, a patriot craftsman, and an enslaved dockworker. They identify each person's likely position on independence and what they stood to gain or lose. Discussion: Is 'loyalty' the right word for the loyalists' position?",
        },
        {
          name: "Dunmore's Offer",
          duration: '20 min',
          description:
            "Students read adapted portions of Dunmore's Proclamation. Discussion: For an enslaved person in Norfolk in November 1775, what would this offer mean? What risks would attempting to reach British ships involve? Students write a brief first-person reflection from an enslaved person's perspective.",
        },
        {
          name: "After the Fire",
          duration: '25 min',
          description:
            "Students examine what Norfolk looked like in 1776 after the burning versus 1790 after rebuilding. Who came back? Who didn't? What does the rebuilding reveal about the Revolution's social transformation?",
        },
      ],
      assessment:
        "Formative: evidence investigation group work. Summative: one-page analysis responding to 'Was the burning of Norfolk a tragedy, a military necessity, or both? Support your answer with at least two specific pieces of evidence.'",
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author\'s point of view or purpose',
      ],
      c3Framework: [
        'D2.His.4.6-8: Analyze multiple factors that influenced the perspectives of people during different historical eras',
        'D2.His.10.6-8: Detect possible limitations in the historical record based on evidence collected from different kinds of historical sources',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-va-norfolk' } },
    title: "Sea Power and Revolution: The Chesapeake as a Theater of War",
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary:
      "Students examine how British naval power shaped the Revolution in the Chesapeake — from Dunmore's floating government to the Battle of the Capes — and analyze why Norfolk's location made it both the most commercially valuable and most militarily vulnerable town in Virginia.",
    lessonData: {
      objectives: [
        "Explain how Dunmore used British naval power to maintain authority in Virginia after losing the Governor's Palace",
        'Analyze the Ethiopian Regiment as a military and propaganda instrument and assess its effectiveness',
        'Trace the strategic role of the Chesapeake from 1775 (Dunmore) to 1781 (Battle of the Capes, Yorktown)',
        "Evaluate the relationship between naval control and revolutionary success in the Chesapeake theater",
      ],
      essentialQuestions: [
        "Britain controlled the sea throughout most of the Revolution. Why couldn't sea power alone suppress the Revolution in Virginia?",
        "Dunmore's Proclamation promised freedom to enslaved people who joined him. What does the military and political response reveal about the Revolution's racial dynamics?",
        'How did the same Chesapeake geography that protected Dunmore in 1775 become the trap for Cornwallis in 1781?',
      ],
      materials: [
        "Map of the Chesapeake Bay showing Norfolk, Hampton Roads, the Elizabeth River, and the Battle of the Capes position",
        "Dunmore's letters describing his floating government strategy — adapted",
        "Ethiopian Regiment muster records and accounts — adapted",
        "De Grasse's strategic correspondence before the Battle of the Capes — adapted",
        "British Admiralty analysis of the Chesapeake campaign — adapted",
      ],
      activities: [
        {
          name: 'Naval Geography of the Chesapeake',
          duration: '30 min',
          description:
            "Students annotate a Chesapeake map identifying: where Dunmore anchored, where his raids targeted, where the Ethiopian Regiment fought (Great Bridge), and where de Grasse engaged the British fleet. Discussion: How does the geography explain Dunmore's strategy and de Grasse's approach?",
        },
        {
          name: 'The Ethiopian Regiment',
          duration: '30 min',
          description:
            "Students read about the Ethiopian Regiment's formation and performance at the Battle of Great Bridge. Discussion: What motivated men to join? What happened to them after the regiment's dissolution? How does their story complicate the traditional narrative of the Revolution?",
        },
        {
          name: "Sea Power's Limits",
          duration: '25 min',
          description:
            "Students analyze why British naval superiority didn't translate into political control of Virginia 1775–76. They identify specific factors (difficulty projecting power inland, loyalist minority, American militia mobility) and construct an argument about the limits of sea power in asymmetric conflict.",
        },
        {
          name: '1775 to 1781: The Chesapeake Reversed',
          duration: '35 min',
          description:
            "Students trace how the same Chesapeake geography that gave Dunmore his base in 1775 became Cornwallis's trap in 1781. Focus on the Battle of the Capes: why did de Grasse's victory there seal Yorktown? Students write a thesis connecting the two moments.",
        },
      ],
      assessment:
        "Analytical essay (1100–1400 words): 'Explain how the Chesapeake Bay shaped the course of the Revolutionary War in Virginia from 1775 to 1781. Address at least three specific events and analyze how the same geographic features produced different strategic outcomes at different points in the war.'",
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in several primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.Geo.2.9-12: Use maps, satellite images, photographs, and other representations to explain relationships between the locations of places and regions and their political, cultural, and economic dynamics',
        'D2.His.14.9-12: Analyze multiple and complex causes of change in the past',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const norfolkAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-va-yorktown',
    linkType: 'SHARED_EVENT',
    reason:
      "Lord Dunmore's use of the Chesapeake and Norfolk harbor as a British naval base from 1775–76 established the pattern of British naval operation in Virginia waters that culminated in 1781. The same Chesapeake geography Dunmore exploited became the theater of the Battle of the Capes on September 5, 1781, where de Grasse's French fleet defeated the British navy and sealed off Cornwallis at Yorktown. Norfolk's naval history directly connects to Yorktown's decisive naval dimension.",
    weight: 87,
  },
];

// ============================================================================
// CHARLOTTESVILLE
// ============================================================================

export const charlottesvillePlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-charlottesville-monticello',
    name: 'Monticello — Thomas Jefferson Foundation',
    placeType: 'HISTORIC_HOUSE',
    description:
      "Jefferson's mountaintop home, designed and redesigned by Jefferson himself over four decades beginning in the 1760s. Monticello is a UNESCO World Heritage Site and the most visited historic house museum in the United States. During the Revolution, Monticello served as Jefferson's primary residence during his terms as Virginia governor (1779–81). On June 4, 1781, British cavalry under Tarleton arrived at the foot of the mountain to capture Jefferson; he fled with minutes to spare. The Thomas Jefferson Foundation's interpretation addresses Jefferson's complex role as both the author of liberty and an enslaver of over 600 people over his lifetime, including the Hemings family.",
    lat: 38.0085,
    lng: -78.4565,
    address: '931 Thomas Jefferson Pkwy, Charlottesville, VA 22902',
    hours: 'Daily 9am–5pm; extended summer hours',
    admission: '$32 adults, $18 youth (6–11)',
    website: 'https://www.monticello.org/',
    town: { connect: { id: 'us-va-charlottesville' } },
  },
  {
    id: 'place-charlottesville-ash-lawn-highland',
    name: 'Ash Lawn-Highland — James Monroe Museum',
    placeType: 'HISTORIC_HOUSE',
    description:
      "The working plantation home of James Monroe, fifth President of the United States, built 1799 on land Monroe purchased at Jefferson's urging to keep a circle of like-minded friends near Monticello. Monroe was a veteran of the Revolution — wounded at the Battle of Trenton, December 26, 1776 — and his time at Highland reflects the post-Revolutionary generation's effort to build the republican society they had fought for. The College of William & Mary manages the site. Monroe's Revolutionary service, including his years as a Continental officer and his later diplomatic role in the French Revolution, is interpreted in the house's exhibits.",
    lat: 38.0152,
    lng: -78.4483,
    address: '2050 James Monroe Pkwy, Charlottesville, VA 22902',
    hours: 'Daily 9am–5pm',
    admission: '$18 adults, $8 youth',
    website: 'https://www.ashlawnhighland.org/',
    town: { connect: { id: 'us-va-charlottesville' } },
  },
  {
    id: 'place-charlottesville-uva-rotunda',
    name: "University of Virginia — The Rotunda",
    placeType: 'LANDMARK',
    description:
      "Jefferson founded the University of Virginia in 1819, and the Rotunda — his architectural centerpiece — embodies his vision of education as essential to republican self-government. Jefferson modeled the Rotunda on the Pantheon and designed it to house the library (knowledge) rather than a chapel (religion), a deliberate statement about the university's secular, rationalist character. The Academical Village Jefferson designed is a UNESCO World Heritage Site alongside Monticello. The university was conceived as the capstone of Jefferson's Revolutionary project: a free republic requires educated citizens, and educated citizens require a university free from religious orthodoxy.",
    lat: 38.0353,
    lng: -78.5034,
    address: 'University Ave, Charlottesville, VA 22903',
    hours: 'Daily 9am–5pm',
    admission: 'Free',
    website: 'https://rotunda.virginia.edu/',
    town: { connect: { id: 'us-va-charlottesville' } },
  },
  {
    id: 'place-charlottesville-michie-tavern',
    name: 'Michie Tavern',
    placeType: 'TAVERN',
    description:
      "Originally built ca. 1784 in Patrick Henry County and moved to its current location near Monticello in 1927, Michie Tavern is one of the oldest taverns surviving in Virginia and represents the kind of public house that served as the social and commercial infrastructure of 18th-century Virginia. The tavern serves as a living history site and restaurant. Patrick Henry's father, John Henry, is among the historical figures associated with the original structure. Taverns like Michie's were the communication nodes of rural Virginia — places where newspapers were read aloud, travelers exchanged news, and political opinion was formed.",
    lat: 38.0046,
    lng: -78.4601,
    address: '683 Thomas Jefferson Pkwy, Charlottesville, VA 22902',
    hours: 'Daily 11:15am–3pm (lunch service)',
    admission: '$19–$22 (lunch)',
    website: 'https://michietavern.com/',
    town: { connect: { id: 'us-va-charlottesville' } },
  },
  {
    id: 'place-charlottesville-virginia-discovery-museum',
    name: 'Shenandoah Valley Access Point — Afton Mountain Overlook',
    placeType: 'TRAIL',
    description:
      "The overlook at Afton Mountain (Rockfish Gap, elevation 1,909 feet) on the Blue Ridge Parkway west of Charlottesville marks the pass through which Shenandoah Valley communication and supply routes connected the Virginia interior to the Tidewater during the Revolution. Shenandoah Valley communities — particularly those with German and Scotch-Irish settlement — were important sources of militia and supplies. When Tarleton's 1781 raid swept through Charlottesville, refugees and fleeing legislators used the valley road through this gap. The overlook provides a geographic anchor for understanding how Charlottesville connected the coastal Virginia of the Tidewater to the Shenandoah hinterland.",
    lat: 38.0327,
    lng: -78.8494,
    address: 'Rockfish Gap, Afton, VA 22920 (Blue Ridge Pkwy milepost 0)',
    hours: 'Always accessible (outdoor)',
    admission: 'Free',
    website: 'https://www.nps.gov/blri/index.htm',
    town: { connect: { id: 'us-va-charlottesville' } },
  },
  {
    id: 'place-charlottesville-albemarle-courthouse',
    name: 'Historic Albemarle County Courthouse',
    placeType: 'GOVERNMENT',
    description:
      "The current Albemarle County Courthouse (built 1803) stands near the site of the original colonial courthouse that served as the center of local government in Jefferson's home county throughout the Revolution. When the Virginia legislature fled from Richmond to Charlottesville in May 1781 to escape the British advance, they met near this courthouse before Tarleton's raid dispersed them. The courthouse square was the political and commercial center of Albemarle County, and its proximity to Monticello meant Jefferson was always close to both his private home and his county's public life.",
    lat: 38.0295,
    lng: -78.4784,
    address: 'Court Square, Charlottesville, VA 22902',
    hours: 'Exterior always accessible',
    admission: 'Free',
    website: 'https://www.albemarle.org/',
    town: { connect: { id: 'us-va-charlottesville' } },
  },
  {
    id: 'place-charlottesville-lewis-clark-monument',
    name: 'Lewis and Clark Expedition Monument',
    placeType: 'MONUMENT',
    description:
      "The Lewis and Clark monument at the west end of the Downtown Mall commemorates the Virginia connection to the 1804–06 expedition. Meriwether Lewis was a Virginia-born officer who grew up near Charlottesville; William Clark was born in Caroline County. Jefferson, who commissioned the expedition as president, chose Lewis precisely because of his Virginia background and his familiarity with the kind of frontier self-sufficiency the mission required. The expedition was in many ways the extension of the Revolutionary generation's vision of westward expansion — the manifest destiny of the republic the Revolution had created. The monument site, at the edge of the historic downtown, anchors the connection between Charlottesville's Revolutionary past and its post-Revolutionary future.",
    lat: 38.0301,
    lng: -78.4866,
    address: 'West Main St at the Mall, Charlottesville, VA 22902',
    hours: 'Always accessible (outdoor)',
    admission: 'Free',
    website: 'https://www.charlottesville.gov/',
    town: { connect: { id: 'us-va-charlottesville' } },
  },
];

export const charlottesvilleAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-charlottesville-legislature-meets',
    name: 'Virginia Legislature Meets in Charlottesville (May 1781)',
    startDate: new Date('1781-05-24'),
    datePrecision: 'DAY',
    summary: `After Benedict Arnold's raid burned much of Richmond in January 1781 and Phillips's subsequent raid threatened the capital again in April–May, the Virginia General Assembly relocated to Charlottesville in late May 1781 to continue operating at a safer distance from British operations in the Tidewater. Governor Jefferson and the legislature met in the relative security of the Piedmont foothills.

The relocation demonstrated both the severity of the British threat to the Virginia government and the determination to keep the revolutionary administration functioning despite repeated disruption. The legislature had been meeting in Charlottesville for less than two weeks when Tarleton's raid on June 4, 1781 scattered both the legislators and the governor. Several members were captured; most fled west toward the Shenandoah Valley. The episode was the lowest point of Virginia's Revolutionary War experience.`,
    significanceWeight: 75,
    lat: 38.0295,
    lng: -78.4784,
    town: { connect: { id: 'us-va-charlottesville' } },
  },
  {
    id: 'event-charlottesville-jefferson-uva-vision',
    name: "Jefferson Proposes the University of Virginia (1818–1819)",
    startDate: new Date('1818-08-01'),
    datePrecision: 'MONTH',
    summary: `In August 1818 the Rockfish Gap Commission, chaired by Jefferson, met at the Blue Ridge pass west of Charlottesville and recommended Charlottesville as the site for a new state university. Virginia's General Assembly chartered the University of Virginia in January 1819. Jefferson, then 75 years old, personally designed every building, selected the faculty from Europe, and developed the curriculum — devoting his final years to what he called his "hobby" and considered, along with the Declaration of Independence and the Virginia Statute for Religious Freedom, one of his three greatest achievements.

Jefferson's vision for the university was explicitly political: a free republic required educated citizens capable of self-governance. The university would be secular (no theology department, no chapel at center), empirical, and focused on preparing Virginians — and by extension Americans — for the responsibilities of democratic citizenship. Charlottesville's University of Virginia was Jefferson's final argument that the American Revolution's promise was achievable through education.`,
    significanceWeight: 70,
    lat: 38.0353,
    lng: -78.5034,
    town: { connect: { id: 'us-va-charlottesville' } },
  },
];

export const charlottesvilleLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-va-charlottesville' } },
    title: "Tarleton's Raid: The Revolution Comes to Jefferson's Doorstep",
    gradeRange: '6-8',
    estimatedDuration: '2 class periods',
    summary:
      "Students examine Tarleton's June 1781 raid on Charlottesville — the most dramatic episode of the Revolution in the Virginia Piedmont — through the lens of Jack Jouett's midnight ride and Jefferson's narrow escape from Monticello. The lesson uses the raid to explore the Revolution's impact on civilian life and on Virginia's political leadership.",
    lessonData: {
      objectives: [
        "Describe Tarleton's raid on Charlottesville (June 4, 1781) and identify its military objectives",
        "Explain Jack Jouett's ride and compare it to Paul Revere's ride as an act of Revolutionary service",
        "Analyze the political consequences of Jefferson's flight from Monticello for his reputation and career",
        'Evaluate the raid as evidence of British strategic priorities in Virginia in 1781',
      ],
      essentialQuestions: [
        "Jefferson barely escaped capture at Monticello. How did this episode affect how Americans remembered him? Is escape a failure or survival?",
        "Jack Jouett rode 40 miles through the night to warn Charlottesville, just as Paul Revere warned Lexington. Why is Jouett less famous than Revere? Does fame track historical importance?",
      ],
      materials: [
        "Map of Tarleton's route from Richmond to Charlottesville, June 3–4, 1781",
        "Jack Jouett's own account of his ride — adapted",
        "Jefferson's account of his escape from Monticello — adapted from his memoranda",
        "Tarleton's account of the Charlottesville raid from his memoirs — adapted",
        'Virginia General Assembly records of the Charlottesville session — adapted',
      ],
      activities: [
        {
          name: "Mapping the Raid",
          duration: '20 min',
          description:
            "Students trace Tarleton's route and Jouett's parallel ride on the map. They calculate distances and timing. Discussion: How much warning did Jouett's ride actually provide? What would have happened if Tarleton had moved faster?",
        },
        {
          name: "Two Midnight Rides",
          duration: '25 min',
          description:
            "Students compare Jouett's ride to Paul Revere's (April 1775). Both warned patriots of British approach. Both succeeded. Why is Revere famous and Jouett obscure? Students identify possible reasons (geography, Longfellow's poem, the people warned) and evaluate them.",
        },
        {
          name: "Jefferson at Monticello",
          duration: '25 min',
          description:
            "Students read Jefferson's account of his final minutes at Monticello before fleeing. Discussion: Was his escape prudent or cowardly? How did his political opponents later use this episode against him? How should historians evaluate it?",
        },
        {
          name: "The Legislature Scattered",
          duration: '20 min',
          description:
            "Students examine what happened to the Virginia legislators who were captured or fled. Discussion: Could the Virginia government have functioned if Tarleton had captured more of them? What does the legislature's survival reveal about government resilience in wartime?",
        },
      ],
      assessment:
        "Formative: map activity and comparative analysis of two rides. Summative: one-page opinion piece written as a Virginia newspaper in summer 1781, either defending or criticizing Jefferson's conduct during the Tarleton raid. Must cite specific evidence.",
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author\'s point of view or purpose',
        'CCSS.ELA-LITERACY.RH.6-8.3: Follow precisely a multistep procedure when carrying out experiments, taking measurements, or performing technical tasks',
      ],
      c3Framework: [
        'D2.His.5.6-8: Explain how and why perspectives of people have changed over time',
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-va-charlottesville' } },
    title: "Jefferson's Vision: Education, Republic, and the Meaning of Liberty",
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary:
      "Students trace Jefferson's ideas from the Declaration of Independence through the Virginia Statute for Religious Freedom to the founding of the University of Virginia, analyzing his vision of what a revolutionary republic required to survive. They also examine the contradictions between Jefferson's ideals and his practice as an enslaver.",
    lessonData: {
      objectives: [
        'Trace the intellectual connection between Jefferson\'s Declaration of Independence (1776), Statute for Religious Freedom (1786), and University of Virginia founding (1819)',
        "Explain why Jefferson considered education essential to republican government",
        'Analyze the specific design choices Jefferson made for the University of Virginia and explain their political meaning',
        "Assess the contradiction between Jefferson's ideals about liberty and his lifelong enslavement of over 600 people",
      ],
      essentialQuestions: [
        "Jefferson wrote 'all men are created equal' and enslaved more than 600 people over his lifetime. Can we hold both of these facts without one erasing the other? How?",
        'Why did Jefferson consider the University of Virginia one of his three greatest achievements, alongside the Declaration and the Statute for Religious Freedom? What connects these three things?',
        'What does it mean that Jefferson designed the Rotunda around a library rather than a chapel? What was he arguing?',
      ],
      materials: [
        "Jefferson, Declaration of Independence (1776) — selected sections",
        "Jefferson, Virginia Statute for Religious Freedom (1786) — full text, adapted",
        "Jefferson's letters describing the University of Virginia's design and purpose — adapted",
        "Jefferson's Farm Book — enslaved population lists — selected entries",
        "Annette Gordon-Reed, 'The Hemingses of Monticello' — excerpts",
        'Monticello Foundation interpretation of slavery at Monticello — selected materials',
      ],
      activities: [
        {
          name: "Three Achievements: Finding the Thread",
          duration: '30 min',
          description:
            "Students read brief excerpts from each of Jefferson's three claimed greatest achievements. In small groups, they identify the common political philosophy connecting them. What does Jefferson believe government must protect? What must it stay out of? What must citizens be able to do for themselves?",
        },
        {
          name: "Reading the Rotunda",
          duration: '25 min',
          description:
            "Students examine Jefferson's design choices for the University: library at the center, no chapel, pavilions for professors instead of a central administration, curriculum without theology. For each choice, students identify the political argument embedded in the architectural decision.",
        },
        {
          name: "The Contradiction",
          duration: '40 min',
          description:
            "Students read the Farm Book entries listing enslaved people at Monticello alongside excerpts from Jefferson's letters about liberty and education. Discussion: How do historians approach this contradiction? Is it hypocrisy, rationalization, or something else? Students read Gordon-Reed's analysis and respond.",
        },
        {
          name: "Jefferson's Legacy: Then and Now",
          duration: '25 min',
          description:
            "Students examine how Charlottesville and UVA have grappled with Jefferson's legacy in recent years, including the renaming debate, the Saunders Hall controversy, and the Monticello Foundation's expanded interpretation of slavery. Discussion: How should communities decide what to do with complicated historical figures?",
        },
      ],
      assessment:
        "Research essay (1200–1500 words): 'Assess Thomas Jefferson's legacy as a Revolutionary leader. Using evidence from the Declaration of Independence, the Statute for Religious Freedom, the University of Virginia founding, and his practice of slavery, construct a nuanced argument about what Jefferson achieved, what he failed to achieve, and why both matter.' Must engage with at least one primary source and one scholarly secondary source.",
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.11-12.7: Integrate and evaluate multiple sources of information presented in different media or formats',
        'CCSS.ELA-LITERACY.WHST.11-12.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.5.9-12: Analyze how historical context shaped and continues to shape people\'s perspectives',
        'D2.His.4.9-12: Analyze multiple and complex causes and effects of events in the past',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const charlottesvilleAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-va-richmond',
    linkType: 'SHARED_EVENT',
    reason:
      "The British campaigns of 1781 that burned Richmond (Arnold, January 5) and raided Charlottesville (Tarleton, June 4) were sequential phases of the same strategic campaign to decapitate Virginia's revolutionary government. Jefferson fled both cities — Richmond after Arnold's raid, then Monticello when Tarleton arrived — making his wartime governorship inseparable from the two connected episodes of British raids into the Virginia interior.",
    weight: 88,
  },
];
