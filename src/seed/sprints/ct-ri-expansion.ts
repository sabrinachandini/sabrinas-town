// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// CT & RI expansion: Places, +2 Events, 2 LessonPlans, +1 TownLink per town
// Towns: New Haven CT, New London CT, Danbury CT, Groton CT, Newport RI, Providence RI

import { Prisma } from '@prisma/client';

// ============================================================================
// NEW HAVEN, CT
// ============================================================================

export const newHavenPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-new-haven-yale-college-old-campus',
    name: 'Yale College Old Campus (Wartime Hospital Site)',
    placeType: 'LANDMARK',
    description:
      'Yale College buildings served as a Continental Army hospital during the Revolution. The institution trained many officers and chaplains who served throughout the war. During the 1779 British raid, faculty member Naphtali Daggett famously rode out to confront the raiders. The original college yard is the heart of present-day Yale University.',
    lat: 41.3117,
    lng: -72.9253,
    address: 'Old Campus, Yale University, New Haven, CT 06510',
    hours: 'Grounds open daily',
    admission: 'Free',
    website: 'https://www.yale.edu',
    town: { connect: { id: 'us-ct-new-haven' } },
  },
  {
    id: 'place-new-haven-grove-street-cemetery',
    name: 'Grove Street Cemetery',
    placeType: 'CEMETERY',
    description:
      'One of the oldest planned cemeteries in the United States, containing the graves of numerous New Haven residents who lived through the Revolution. Notable Revolutionary-era figures and their descendants are buried here. The Egyptian Revival gate dates to 1848, but the cemetery grounds hold stones from the late 18th century.',
    lat: 41.3153,
    lng: -72.9283,
    address: '227 Grove St, New Haven, CT 06511',
    hours: 'Daily dawn to dusk',
    admission: 'Free',
    town: { connect: { id: 'us-ct-new-haven' } },
  },
  {
    id: 'place-new-haven-center-church-green',
    name: 'Center Church on the Green',
    placeType: 'CHURCH',
    description:
      'The congregation dates to 1638 and was the spiritual center of New Haven during the Revolution. The church served as a gathering point for political debate and mourning during the 1779 British raid. Its crypt beneath the building contains graves from the colonial and Revolutionary era. The current structure was built 1812–1814 on the same Green where militia mustered.',
    lat: 41.3083,
    lng: -72.9249,
    address: '250 Temple St, New Haven, CT 06510',
    hours: 'See website for service and tour times',
    admission: 'Free',
    website: 'https://www.centerchurch.org',
    town: { connect: { id: 'us-ct-new-haven' } },
  },
  {
    id: 'place-new-haven-green',
    name: 'New Haven Green',
    placeType: 'LANDMARK',
    description:
      'The historic town green at the center of New Haven, used as a militia muster ground and public gathering space throughout the Revolution. In July 1779 British troops under General Tryon marched across the Green during their raid. Three churches — Center Church, Trinity Church, and United Church — face the Green, all with colonial-era congregational roots.',
    lat: 41.3083,
    lng: -72.9249,
    address: 'New Haven Green, New Haven, CT 06510',
    hours: 'Open daily',
    admission: 'Free',
    town: { connect: { id: 'us-ct-new-haven' } },
  },
  {
    id: 'place-new-haven-pardee-morris-house',
    name: 'Pardee-Morris House',
    placeType: 'HISTORIC_HOUSE',
    description:
      'A rare surviving 18th-century farmhouse that was burned by British troops during General Tryon\'s July 1779 raid and subsequently rebuilt. The current structure, largely dating to 1780, preserves the scale and character of a prosperous New Haven farming household of the Revolutionary era. Managed by the New Haven Colony Historical Society.',
    lat: 41.2818,
    lng: -72.9085,
    address: '325 Lighthouse Rd, New Haven, CT 06512',
    hours: 'June–August, Sat–Sun 11am–4pm',
    admission: 'Small fee',
    website: 'https://www.nhmuseum.org',
    town: { connect: { id: 'us-ct-new-haven' } },
  },
  {
    id: 'place-new-haven-roger-sherman-statue',
    name: 'Roger Sherman Statue, Wooster Square',
    placeType: 'MONUMENT',
    description:
      'A statue honoring Roger Sherman, New Haven\'s most prominent Revolutionary statesman — the only Founder to sign all four of the great state papers: the Articles of Association, the Declaration of Independence, the Articles of Confederation, and the Constitution. Sherman represented Connecticut in the Continental Congress throughout the war and was instrumental in the Connecticut political infrastructure that sustained the war effort.',
    lat: 41.3019,
    lng: -72.9117,
    address: 'Wooster Square, New Haven, CT 06511',
    hours: 'Open daily',
    admission: 'Free',
    town: { connect: { id: 'us-ct-new-haven' } },
  },
];

export const newHavenAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-new-haven-benedict-arnold-captain',
    name: 'Benedict Arnold Leads New Haven Militia to Cambridge',
    startDate: new Date('1775-04-22'),
    datePrecision: 'DAY',
    summary:
      'On April 22, 1775 — three days after Lexington and Concord — Benedict Arnold, then captain of the New Haven Governor\'s Foot Guards, demanded the town\'s selectmen hand over the key to the powder house so his company could march to Cambridge. When the selectmen hesitated, Arnold threatened to break down the door. He marched his men north, among the first organized Connecticut troops to respond to the alarm. The episode captures the urgency and local initiative that defined the war\'s opening weeks.',
    significanceWeight: 74,
    lat: 41.3083,
    lng: -72.9249,
    town: { connect: { id: 'us-ct-new-haven' } },
  },
  {
    id: 'event-new-haven-fort-hale-construction',
    name: 'Fort Hale Built to Defend New Haven Harbor',
    startDate: new Date('1776-01-01'),
    datePrecision: 'YEAR',
    summary:
      'Connecticut authorities constructed a fortification at Black Rock Point (later renamed Fort Hale) to guard the entrance to New Haven Harbor from British naval incursion. The fort was garrisoned intermittently throughout the war. During the 1779 British raid it offered only limited resistance before the invaders landed further up the harbor. The site preserves earthworks and is now a city park named for Nathan Hale, who trained in New Haven before his fatal 1776 spy mission.',
    significanceWeight: 65,
    lat: 41.2689,
    lng: -72.9053,
    town: { connect: { id: 'us-ct-new-haven' } },
  },
];

export const newHavenLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-ct-new-haven' } },
    title: 'The Powder House Standoff: Local Decision-Making in April 1775',
    gradeRange: '8-10',
    estimatedDuration: '50 minutes',
    summary:
      'Students analyze the April 22, 1775 confrontation between Benedict Arnold and New Haven\'s selectmen to explore how ordinary citizens and local leaders made irreversible decisions in the days after Lexington and Concord — before any central authority existed to guide them.',
    lessonData: {
      objectives: [
        'Explain the political and military context of the days immediately following Lexington and Concord',
        'Analyze the competing considerations facing New Haven\'s selectmen when Arnold demanded the powder house key',
        'Evaluate how local decision-making shaped the early Revolutionary War mobilization',
        'Connect individual episodes to larger patterns of colonial self-governance',
      ],
      essentialQuestions: [
        'Who had the authority to make military decisions in April 1775, and how was that authority contested?',
        'How did ordinary citizens and local officials decide when to act and whom to follow?',
        'What does the Arnold powder house episode reveal about the relationship between civic order and revolutionary urgency?',
      ],
      materials: [
        'Primary source excerpt: Arnold\'s letter demanding the powder house key (Connecticut State Library)',
        'Timeline of events April 19–22, 1775',
        'Map of New Haven showing the Green, powder house location, and route to Cambridge',
        'Discussion protocol handout for Socratic seminar',
      ],
      activities: [
        {
          title: 'Document Analysis',
          duration: '15 minutes',
          description:
            'Students read Arnold\'s demand letter in pairs, annotating for tone, legal claims, and emotional appeals. Discuss: What authority does Arnold claim? What authority do the selectmen hold?',
        },
        {
          title: 'Decision Simulation',
          duration: '15 minutes',
          description:
            'Divide class into "selectmen" and "Arnold\'s company." Each group receives a role card with their perspective and concerns. Groups negotiate for five minutes, then debrief as a class.',
        },
        {
          title: 'Socratic Seminar',
          duration: '15 minutes',
          description:
            'Inner circle discussion on the essential question: "Was Arnold right to threaten force to obtain the powder?" Outer circle takes notes on the quality of evidence and reasoning used.',
        },
        {
          title: 'Exit Ticket',
          duration: '5 minutes',
          description:
            'Students write one paragraph answering: "What does this episode tell us about how the Revolution actually began at the local level?"',
        },
      ],
      assessment:
        'Exit ticket paragraph scored on: (1) accurate use of evidence, (2) clear thesis, (3) connection to larger Revolutionary context. Seminar participation scored on protocol rubric.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.8-10.1 — Cite textual evidence to support analysis of primary sources',
        'CCSS.ELA-LITERACY.RH.8-10.6 — Compare the point of view of two or more authors on the same event',
        'CCSS.ELA-LITERACY.WHST.8-10.1 — Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.1.6-8 — Analyze connections among events and developments in broader historical contexts',
        'D2.His.5.6-8 — Explain how and why perspectives of people changed over time',
        'D4.7.6-8 — Assess their individual and collective capacities to take action',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-ct-new-haven' } },
    title: 'Roger Sherman and the Art of Political Compromise',
    gradeRange: '9-12',
    estimatedDuration: '60 minutes',
    summary:
      'Using Sherman\'s role in the Connecticut Compromise at the Constitutional Convention, students examine how New Haven\'s most important Revolutionary statesman bridged competing interests — and consider whether compromise is a civic virtue or a capitulation.',
    lessonData: {
      objectives: [
        'Identify Roger Sherman\'s role in the Declaration of Independence, Articles of Confederation, and Constitution',
        'Explain the Connecticut Compromise and why it resolved the deadlock over congressional representation',
        'Evaluate the arguments for and against the compromise from the perspective of large and small states',
        'Analyze what Sherman\'s career reveals about the relationship between local and national political identity',
      ],
      essentialQuestions: [
        'Is political compromise a strength or a weakness in a democratic system?',
        'How did the experience of the Revolution shape the debates at the Constitutional Convention?',
        'What made Sherman effective as a political leader across three decades of crisis?',
      ],
      materials: [
        'Excerpts from Madison\'s Notes on the Constitutional Convention (June–July 1787)',
        'Sherman\'s biography summary (1 page)',
        'Debate framework handout: large-state vs. small-state positions',
        'Map of the original 13 states with population data',
      ],
      activities: [
        {
          title: 'Sherman Profile Read-Aloud',
          duration: '10 minutes',
          description:
            'Teacher reads a brief narrative of Sherman\'s career. Students identify on a timeline when he signed each of the four great state papers.',
        },
        {
          title: 'Convention Debate Simulation',
          duration: '25 minutes',
          description:
            'Students take roles as delegates from large states (Virginia, Pennsylvania, Massachusetts) and small states (Connecticut, New Jersey, Delaware). Each group argues for proportional or equal representation. Sherman\'s compromise is introduced midway.',
        },
        {
          title: 'Structured Academic Controversy',
          duration: '15 minutes',
          description:
            'Pairs argue one side of the essential question on compromise, then switch sides, then synthesize a joint position.',
        },
        {
          title: 'Written Reflection',
          duration: '10 minutes',
          description:
            'Students write: "What would American government look like today if the Connecticut Compromise had failed?" Must include at least one specific historical claim.',
        },
      ],
      assessment:
        'Written reflection scored on historical accuracy, use of evidence from the simulation and readings, and quality of counterfactual reasoning.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.1 — Cite strong textual evidence to support analysis',
        'CCSS.ELA-LITERACY.RH.9-10.9 — Compare and contrast treatments of the same topic in primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.2 — Write explanatory texts on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.1.9-12 — Evaluate how historical events and developments were shaped by unique circumstances',
        'D2.Civ.10.9-12 — Analyze the enduring tension between individual interests and the common good',
        'D4.6.9-12 — Use disciplinary concepts to explain developments in historical contexts',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const newHavenAdditionalLinks: Array<{ toTownId: string; linkType: string; reason: string; weight: number }> = [
  {
    toTownId: 'us-ct-new-london',
    linkType: 'SHARED_PERSON',
    reason:
      'Benedict Arnold had deep ties to both towns. He was born in Norwich (near New London), captained the New Haven Governor\'s Foot Guards, and later burned New London in 1781. His trajectory from New Haven militia leader to New London\'s destroyer is one of the Revolution\'s most dramatic personal arcs.',
    weight: 85,
  },
];

// ============================================================================
// NEW LONDON, CT
// ============================================================================

export const newLondonPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-new-london-fort-trumbull',
    name: 'Fort Trumbull State Park',
    placeType: 'BATTLEFIELD',
    description:
      'Fort Trumbull guarded the entrance to the Thames River and New London Harbor. On September 6, 1781, Benedict Arnold\'s British force bypassed it with minimal resistance while the main garrison crossed to defend Fort Griswold in Groton. The current masonry fort dates to 1839, but the earthwork foundations of the 1778 Revolutionary-era fort lie beneath. The site preserves the strategic geography that made New London a significant privateering port.',
    lat: 41.3470,
    lng: -72.0980,
    address: '90 Walbach St, New London, CT 06320',
    hours: 'Memorial Day–Labor Day, Wed–Sun 9am–4:30pm',
    admission: 'Small fee',
    website: 'https://portal.ct.gov/DEEP/State-Parks/Parks/Fort-Trumbull-State-Park',
    town: { connect: { id: 'us-ct-new-london' } },
  },
  {
    id: 'place-new-london-shaw-mansion',
    name: 'Shaw-Perkins Mansion (Connecticut Naval Office)',
    placeType: 'HISTORIC_HOUSE',
    description:
      'Built in 1756 by Capt. Nathaniel Shaw Sr., this stone mansion served as the Connecticut Naval Office during the Revolution — the administrative hub for Connecticut\'s fleet of privateers and the official port for prize vessels. Nathaniel Shaw Jr. managed the colony\'s naval affairs from this building. It survived the 1781 burning because British officers used it as a command post. Now a museum operated by the New London County Historical Society.',
    lat: 41.3558,
    lng: -72.0958,
    address: '11 Blinman St, New London, CT 06320',
    hours: 'Wed–Fri 1pm–4pm, Sat 10am–4pm',
    admission: 'Small fee',
    website: 'https://www.nlhistory.org',
    town: { connect: { id: 'us-ct-new-london' } },
  },
  {
    id: 'place-new-london-custom-house',
    name: 'New London Custom House',
    placeType: 'GOVERNMENT',
    description:
      'The Custom House site on Bank Street anchored New London\'s maritime commerce before and during the Revolution. The current Greek Revival building dates to 1833 (designed by Robert Mills), but the location served as the center of trade regulation and port administration during the Revolutionary era. New London\'s privateering economy funneled goods and intelligence through this corridor.',
    lat: 41.3553,
    lng: -72.0952,
    address: '150 Bank St, New London, CT 06320',
    hours: 'Tours available by appointment',
    admission: 'Free',
    town: { connect: { id: 'us-ct-new-london' } },
  },
  {
    id: 'place-new-london-hempsted-house',
    name: 'Hempsted Houses',
    placeType: 'HISTORIC_HOUSE',
    description:
      'Two of the oldest surviving structures in Connecticut — the Joshua Hempsted House (1678) and the Nathaniel Hempsted House (1759). Both predate the Revolution and survived the 1781 burning. Joshua Hempsted\'s diary, kept from 1711 to 1758, is one of the most valuable records of colonial New England life. The houses communicate the scale and domestic character of New London before Arnold\'s raid reduced much of the town to ash.',
    lat: 41.3588,
    lng: -72.0934,
    address: '11 Hempstead St, New London, CT 06320',
    hours: 'May–Oct, Sat–Sun 11am–4pm',
    admission: 'Small fee',
    website: 'https://www.antiquesandlandmarks.org',
    town: { connect: { id: 'us-ct-new-london' } },
  },
  {
    id: 'place-new-london-whale-oil-row',
    name: 'Whale Oil Row',
    placeType: 'LANDMARK',
    description:
      'A block of four Federal-style houses built ca. 1830–1835, representing the maritime prosperity New London rebuilt after the Revolutionary War. The street name reflects the whale oil trade that made New London wealthy in the 18th century. The whaling and privateering economy of the Revolutionary era is the foundation of this later prosperity — ships outfitted as privateers in the 1770s were the ancestors of whale ships in the 1820s.',
    lat: 41.3562,
    lng: -72.0967,
    address: 'Huntington St, New London, CT 06320',
    hours: 'Exterior viewable daily',
    admission: 'Free',
    town: { connect: { id: 'us-ct-new-london' } },
  },
  {
    id: 'place-new-london-thames-river-waterfront',
    name: 'Thames River Waterfront',
    placeType: 'LANDMARK',
    description:
      'The Thames River waterfront was the strategic and economic spine of New London throughout the Revolution. Privateers departed from these wharves, prize ships were brought in for adjudication, and supplies were loaded for Continental Army use. On September 6, 1781, British troops landed near here and methodically burned the town\'s warehouses and merchant buildings. Walking the waterfront communicates why the port\'s destruction was so economically devastating.',
    lat: 41.3520,
    lng: -72.0960,
    address: 'Bank St Waterfront, New London, CT 06320',
    hours: 'Open daily',
    admission: 'Free',
    town: { connect: { id: 'us-ct-new-london' } },
  },
];

export const newLondonAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-new-london-privateer-fleet-height',
    name: 'New London Privateering Reaches Its Peak',
    startDate: new Date('1779-01-01'),
    datePrecision: 'YEAR',
    summary:
      'By 1779 New London had outfitted more privateers per capita than nearly any other American port. The Connecticut Naval Office, administered by Nathaniel Shaw Jr. from the Shaw Mansion, coordinated the commissioning of privateer vessels, the disposition of prize ships, and the funneling of captured British goods into Continental supply chains. At its height the port\'s privateering economy disrupted British merchant shipping across the Atlantic and kept Connecticut\'s war effort financially viable.',
    significanceWeight: 72,
    lat: 41.3558,
    lng: -72.0958,
    town: { connect: { id: 'us-ct-new-london' } },
  },
  {
    id: 'event-new-london-fort-trumbull-garrison',
    name: 'Fort Trumbull Reinforced as Harbor Defense',
    startDate: new Date('1778-01-01'),
    datePrecision: 'YEAR',
    summary:
      'Connecticut authorities reinforced Fort Trumbull in 1778 in response to increased British naval activity along the Connecticut coast. The earthwork fort at the entrance to the Thames River was intended to deter British raids on New London\'s valuable privateering fleet and naval stores. The fortification\'s limitations were exposed on September 6, 1781, when Benedict Arnold\'s force of 1,700 men easily bypassed it by landing north of the fort\'s guns while a detachment pinned the garrison.',
    significanceWeight: 63,
    lat: 41.3470,
    lng: -72.0980,
    town: { connect: { id: 'us-ct-new-london' } },
  },
];

export const newLondonLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-ct-new-london' } },
    title: 'Privateers and Prize Law: How New London Financed the Revolution',
    gradeRange: '8-10',
    estimatedDuration: '55 minutes',
    summary:
      'Students investigate how New London\'s privateering economy worked — the legal framework of letters of marque, the role of prize courts, and the human stakes for crews and captains — to understand how the Revolution was financed at the local level.',
    lessonData: {
      objectives: [
        'Explain the legal distinction between a privateer and a pirate',
        'Describe how prize courts adjudicated captured British merchant ships',
        'Analyze how New London\'s privateering economy contributed to Connecticut\'s war effort',
        'Evaluate the risks and rewards facing privateering crews',
      ],
      essentialQuestions: [
        'How did colonial ports like New London help finance the Revolution without a functioning national treasury?',
        'What is the difference between legal warfare and piracy, and who decides?',
        'How did maritime commerce shape the political and military character of coastal New England?',
      ],
      materials: [
        'Excerpt from a letter of marque (Continental Congress, 1776)',
        'Prize court record showing disposition of a captured British vessel (Connecticut State Archives)',
        'Map of New London harbor and Thames River with privateering routes',
        'Role cards for crew member, ship captain, prize court judge, and British merchant',
      ],
      activities: [
        {
          title: 'Document Investigation',
          duration: '15 minutes',
          description:
            'Students examine a letter of marque and a prize court record. What legal authority does each document claim? What does it reveal about how the Continental Congress tried to regularize privateering?',
        },
        {
          title: 'Role-Play: The Prize Court',
          duration: '20 minutes',
          description:
            'Students take roles as privateer captain, captured British merchant captain, prize court judge, and Continental Army supply officer. The "court" must decide what to do with a captured ship carrying cloth, rum, and gunpowder.',
        },
        {
          title: 'Math Connection',
          duration: '10 minutes',
          description:
            'Using sample prize values from period records, students calculate how a prize share was divided among captain, officers, and crew. How many successful captures would it take to outfit a Continental regiment?',
        },
        {
          title: 'Exit Ticket',
          duration: '10 minutes',
          description:
            'Students write a paragraph: "Was privateering a legitimate tool of war or legalized piracy?" Must cite at least one piece of evidence from the day\'s documents.',
        },
      ],
      assessment:
        'Exit ticket scored on: (1) clear thesis, (2) accurate use of at least one primary source, (3) acknowledgment of counterargument. Role-play scored on participation and historical accuracy.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.8-10.1 — Cite textual evidence to support analysis',
        'CCSS.ELA-LITERACY.RH.8-10.3 — Analyze a series of events and the connections drawn between them',
        'CCSS.ELA-LITERACY.WHST.8-10.1 — Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.3.6-8 — Explain how and why individuals and groups responded differently to historical events',
        'D2.Eco.1.6-8 — Explain how economic decisions affect the well-being of individuals and communities',
        'D4.2.6-8 — Construct explanations using reasoning, correct sequence, and examples',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-ct-new-london' } },
    title: 'Benedict Arnold: Traitor, Hero, or Both?',
    gradeRange: '9-12',
    estimatedDuration: '65 minutes',
    summary:
      'Students use New London\'s September 1781 burning as an entry point to examine Benedict Arnold\'s full Revolutionary career — his genuine heroism at Saratoga, his grievances, his defection, and his final act of destroying his home state\'s most important port — to complicate simple narratives of loyalty and betrayal.',
    lessonData: {
      objectives: [
        'Trace Benedict Arnold\'s military career from the capture of Fort Ticonderoga through the burning of New London',
        'Analyze the personal, political, and financial grievances Arnold cited in justifying his defection',
        'Evaluate how historians have interpreted Arnold\'s legacy differently across time',
        'Apply the concept of historical empathy without moral relativism',
      ],
      essentialQuestions: [
        'Can a person be both a genuine hero and a genuine villain?',
        'What does Benedict Arnold\'s story reveal about the relationship between personal grievance and political action?',
        'How should we judge historical figures whose actions had both heroic and catastrophic dimensions?',
      ],
      materials: [
        'Arnold\'s letter to the inhabitants of America (September 1780, justifying his defection)',
        'Contemporary newspaper accounts of the New London burning (September 1781)',
        'Timeline of Arnold\'s military career 1775–1781',
        'Historian excerpts: two contrasting assessments of Arnold',
      ],
      activities: [
        {
          title: 'Timeline Gallery Walk',
          duration: '10 minutes',
          description:
            'Posted timeline of Arnold\'s career with images and brief captions. Students place sticky notes: green for actions they view as heroic, red for villainous, yellow for ambiguous.',
        },
        {
          title: 'Document Analysis',
          duration: '20 minutes',
          description:
            'Students read Arnold\'s justification letter and the newspaper account of New London\'s burning. Annotation protocol: What does Arnold claim? What does the newspaper report? What is missing from each account?',
        },
        {
          title: 'Structured Controversy',
          duration: '20 minutes',
          description:
            'Pairs argue: "Arnold was primarily a product of a system that failed him" vs. "Arnold\'s choices were his own and cannot be excused." Switch sides after 8 minutes, then synthesize.',
        },
        {
          title: 'Written Response',
          duration: '15 minutes',
          description:
            'Students write a 200-word response to the essential question, using evidence from at least two sources.',
        },
      ],
      assessment:
        'Written response scored on: (1) clear thesis addressing the essential question, (2) evidence from at least two primary or secondary sources, (3) acknowledgment of complexity without abandoning judgment.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.6 — Compare the point of view of two or more authors on the same historical event',
        'CCSS.ELA-LITERACY.RH.9-10.8 — Assess the extent to which reasoning and evidence support an author\'s claims',
        'CCSS.ELA-LITERACY.WHST.9-10.1 — Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.4.9-12 — Analyze multiple factors that influenced the perspectives of people during different historical eras',
        'D2.His.5.9-12 — Analyze how historical contexts shaped the actions of individuals',
        'D4.3.9-12 — Present adaptations of arguments in forms appropriate to the audience',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const newLondonAdditionalLinks: Array<{ toTownId: string; linkType: string; reason: string; weight: number }> = [
  {
    toTownId: 'us-ct-groton',
    linkType: 'SHARED_EVENT',
    reason:
      'New London and Groton share the darkest day of Connecticut\'s Revolutionary War: September 6, 1781, when Benedict Arnold\'s British force simultaneously burned New London and massacred the Fort Griswold garrison across the Thames River. The two attacks were a single coordinated operation — the river separating the towns did not separate their fates.',
    weight: 98,
  },
];

// ============================================================================
// DANBURY, CT
// ============================================================================

export const danburyPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-danbury-military-museum',
    name: 'Danbury Museum and Historical Society',
    placeType: 'MUSEUM',
    description:
      'The Danbury Museum complex preserves the history of the April 1777 British raid and its aftermath. The museum campus includes the John and Mary Rider House (1785), built after the raid destroyed much of the town. Exhibits document the supply depot that made Danbury a target, the destruction of stores, David Wooster\'s death, and the town\'s reconstruction. The site anchors historical interpretation of the raid for the region.',
    lat: 41.3943,
    lng: -73.4571,
    address: '43 Main St, Danbury, CT 06810',
    hours: 'Wed–Sat 10am–4pm',
    admission: 'Suggested donation',
    website: 'https://www.danburymuseum.org',
    town: { connect: { id: 'us-ct-danbury' } },
  },
  {
    id: 'place-danbury-wooster-monument',
    name: 'General David Wooster Monument',
    placeType: 'MONUMENT',
    description:
      'Monument to Brigadier General David Wooster, who was mortally wounded at the Battle of Ridgefield on April 27, 1777, while leading Connecticut militia in pursuit of the British force withdrawing from the Danbury raid. Wooster died five days later at age 67. He was one of the oldest general officers to die in the Revolution. His grave is in Danbury, and the monument honors both him and the men who fought to avenge the town\'s burning.',
    lat: 41.3948,
    lng: -73.4579,
    address: 'Wooster Cemetery, Wooster St, Danbury, CT 06810',
    hours: 'Open daily',
    admission: 'Free',
    town: { connect: { id: 'us-ct-danbury' } },
  },
  {
    id: 'place-danbury-scott-fanton-museum',
    name: 'Scott-Fanton Museum',
    placeType: 'HISTORIC_HOUSE',
    description:
      'A 19th-century house museum adjacent to the Danbury Museum campus that preserves period furnishings and local artifacts. The complex provides context for the domestic and commercial life of Danbury before and after the 1777 raid. Original portions of the property date to the post-raid reconstruction period. Operated by the Danbury Museum and Historical Society.',
    lat: 41.3940,
    lng: -73.4568,
    address: '43 Main St, Danbury, CT 06810',
    hours: 'Wed–Sat 10am–4pm',
    admission: 'Suggested donation',
    town: { connect: { id: 'us-ct-danbury' } },
  },
  {
    id: 'place-danbury-ridgefield-battlefield',
    name: 'Battle of Ridgefield Site',
    placeType: 'BATTLEFIELD',
    description:
      'The town of Ridgefield, southwest of Danbury, was the scene of the April 27, 1777 battle in which Connecticut and New York militia under Benedict Arnold and David Wooster intercepted the British force withdrawing from Danbury. Arnold had a horse shot from under him; Wooster was mortally wounded. A historic cannon ball embedded in the Keeler Tavern\'s exterior wall survives from the battle. The site is about 12 miles from Danbury.',
    lat: 41.2823,
    lng: -73.4984,
    address: 'Main St, Ridgefield, CT 06877',
    hours: 'Keeler Tavern Museum: Wed, Sat, Sun 1pm–4pm',
    admission: 'Small fee for tavern museum',
    website: 'https://www.keelertavernmuseum.org',
    town: { connect: { id: 'us-ct-danbury' } },
  },
  {
    id: 'place-danbury-supply-depot-site',
    name: 'Continental Supply Depot Site (Downtown Danbury)',
    placeType: 'LANDMARK',
    description:
      'The area in and around central Danbury where the Continental Army maintained the supply depot that made the town a British military target in April 1777. The depot held tents, flour, pork, clothing, and military stores for Continental forces. The British raid under General William Tryon destroyed an estimated 4,000 barrels of pork and beef, 5,000 bushels of grain, and military equipment essential to the coming campaign season. No original structures survive; the site is marked by historical signage.',
    lat: 41.3948,
    lng: -73.4548,
    address: 'Downtown Danbury, CT 06810',
    hours: 'Open daily',
    admission: 'Free',
    town: { connect: { id: 'us-ct-danbury' } },
  },
  {
    id: 'place-danbury-compo-beach-landing',
    name: 'Compo Beach (British Landing Site)',
    placeType: 'LANDMARK',
    description:
      'Compo Beach in Westport (then part of Fairfield County) was where the British force of approximately 1,800 men under General William Tryon landed on April 25, 1777, beginning their march inland to Danbury. A monument marks the landing site. After burning Danbury, the same British force fought its way back to re-embark at Compo Beach on April 28, 1777, under pursuit by Arnold and Wooster\'s militia.',
    lat: 41.1173,
    lng: -73.3720,
    address: 'Compo Beach Rd, Westport, CT 06880',
    hours: 'Open daily',
    admission: 'Parking fee in season',
    town: { connect: { id: 'us-ct-danbury' } },
  },
];

export const danburyAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-danbury-supply-depot-loss-impact',
    name: 'Continental Army Assesses the Loss of Danbury Stores',
    startDate: new Date('1777-05-01'),
    datePrecision: 'MONTH',
    summary:
      'In the weeks following the April 1777 Danbury raid, Washington and the Continental Army commissary estimated the loss of stores essential to the coming campaign season: roughly 4,000 barrels of salted beef and pork, 5,000 bushels of grain, 1,700 tents, and large quantities of clothing. The destruction forced emergency procurement efforts throughout New England and temporarily disrupted the planned buildup for summer operations. The raid demonstrated how effectively targeted British coastal strikes could undermine the American war economy.',
    significanceWeight: 71,
    lat: 41.3948,
    lng: -73.4548,
    town: { connect: { id: 'us-ct-danbury' } },
  },
  {
    id: 'event-danbury-ludington-ride-response',
    name: 'Sybil Ludington\'s Ride Summons Militia to Danbury\'s Aid',
    startDate: new Date('1777-04-26'),
    datePrecision: 'DAY',
    summary:
      'The night of April 26–27, 1777, sixteen-year-old Sybil Ludington — daughter of Colonel Henry Ludington — rode approximately 40 miles through Putnam County, New York, summoning her father\'s regiment of militia to march to Danbury\'s aid. By the following morning, roughly 400 men had assembled and marched to join the pursuit of the British raiders. While the militia arrived too late to save Danbury, their rapid mobilization contributed to the harassment of the British withdrawal and the Battle of Ridgefield. Ludington\'s ride was longer than Paul Revere\'s.',
    significanceWeight: 76,
    lat: 41.4201,
    lng: -73.7046,
    town: { connect: { id: 'us-ct-danbury' } },
  },
];

export const danburyLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-ct-danbury' } },
    title: 'Supply Lines and Strategy: Why Danbury Was a Target',
    gradeRange: '7-9',
    estimatedDuration: '50 minutes',
    summary:
      'Students examine the April 1777 British raid on Danbury through the lens of military logistics — understanding why destroying a supply depot was as valuable as winning a battle — and explore how the Continental Army struggled to feed and equip its forces throughout the war.',
    lessonData: {
      objectives: [
        'Explain why military logistics were a decisive factor in the Revolutionary War',
        'Describe what the Danbury supply depot contained and why its destruction mattered',
        'Analyze the British strategy of coastal raiding as an alternative to conventional battlefield operations',
        'Connect the loss of Danbury stores to broader challenges of Continental Army supply',
      ],
      essentialQuestions: [
        'How do armies fight a war when they cannot reliably feed or equip their soldiers?',
        'Why would destroying supplies sometimes be more valuable than winning a battle?',
        'What does the Danbury raid reveal about British strategy and American vulnerability in 1777?',
      ],
      materials: [
        'Inventory list of Continental supplies destroyed at Danbury (adapted from period documents)',
        'Map showing Danbury\'s location relative to the Hudson River and major Continental Army positions',
        'Brief overview of Continental Army supply problems (1-page reading)',
        'Logistics calculation worksheet',
      ],
      activities: [
        {
          title: 'Supply Inventory Analysis',
          duration: '10 minutes',
          description:
            'Students receive the adapted inventory list. In pairs, they categorize the destroyed supplies (food, shelter, clothing, weapons) and estimate how many soldiers could have been supported for how long.',
        },
        {
          title: 'Map Analysis',
          duration: '10 minutes',
          description:
            'Students trace the British landing route (Compo Beach), the march to Danbury, and the retreat to re-embarkation. Why did the British choose this target? What protected it, and what didn\'t?',
        },
        {
          title: 'Strategy Debate',
          duration: '20 minutes',
          description:
            'Half the class takes the British perspective (raid coastal targets to disrupt supply), half takes the American (defend interior depots vs. counter-raid). Groups present their strategies, then discuss which approach actually worked better in 1777.',
        },
        {
          title: 'Exit Ticket',
          duration: '10 minutes',
          description:
            'Students write: "How did the Danbury raid affect the balance of power in the 1777 campaign season?" One paragraph using at least one specific piece of evidence.',
        },
      ],
      assessment:
        'Exit ticket scored on factual accuracy and quality of causal reasoning. Map analysis scored on correct identification of strategic factors. Participation in strategy debate assessed by teacher observation.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.7 — Integrate visual information with other information in print and digital texts',
        'CCSS.ELA-LITERACY.RH.6-8.1 — Cite textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.6-8.2 — Write informative/explanatory texts on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.1.6-8 — Analyze connections among events and developments in broader historical contexts',
        'D2.His.2.6-8 — Classify series of historical proposed causes in terms of plausibility',
        'D4.2.6-8 — Construct explanations using reasoning, correct sequence, examples, and details',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-ct-danbury' } },
    title: 'The Midnight Rider Nobody Told You About: Sybil Ludington',
    gradeRange: '6-8',
    estimatedDuration: '45 minutes',
    summary:
      'Students compare Sybil Ludington\'s April 1777 ride to Paul Revere\'s 1775 ride, examining what historical memory includes and excludes — and why some stories become famous while others are forgotten for generations.',
    lessonData: {
      objectives: [
        'Describe the events of Sybil Ludington\'s April 26–27, 1777 ride and its military purpose',
        'Compare and contrast Ludington\'s ride with Paul Revere\'s 1775 ride in terms of distance, context, and outcome',
        'Analyze why Revere\'s ride became famous while Ludington\'s was largely forgotten until the 20th century',
        'Apply the concept of historical memory to evaluate whose stories get preserved and why',
      ],
      essentialQuestions: [
        'Why do some historical actors become famous while others, who did equally remarkable things, are forgotten?',
        'What factors shape which stories get included in the history we are taught?',
        'What does it mean to "recover" a historical story, and how does it change our understanding of an event?',
      ],
      materials: [
        'Comparison chart: Ludington ride vs. Revere ride (date, distance, purpose, outcome, sources)',
        'Henry Wadsworth Longfellow\'s "Paul Revere\'s Ride" (excerpt)',
        'Brief biography of Sybil Ludington',
        'Discussion question cards',
      ],
      activities: [
        {
          title: 'Comparison Chart',
          duration: '10 minutes',
          description:
            'Students complete a comparison chart using provided readings. Key data: Revere\'s ride was approximately 20 miles; Ludington\'s was approximately 40 miles. Revere was 40 years old; Ludington was 16.',
        },
        {
          title: 'Longfellow Analysis',
          duration: '10 minutes',
          description:
            'Read the Longfellow excerpt. Why did this poem make Revere famous? What choices did the poet make? Could you write a similar poem about Ludington using the same information?',
        },
        {
          title: 'Historical Memory Discussion',
          duration: '15 minutes',
          description:
            'Whole-class discussion: What factors might explain why Ludington\'s story was less well-known for so long? Consider: gender, geography, literary celebration, political context. Are there other Revolutionary figures who might be similarly underrecognized?',
        },
        {
          title: 'Creative Response',
          duration: '10 minutes',
          description:
            'Students write the opening stanza of a poem, a newspaper headline from April 28, 1777, or a one-paragraph journal entry from Sybil Ludington the night after her ride.',
        },
      ],
      assessment:
        'Creative response scored on historical accuracy and creative engagement. Participation in discussion assessed by contribution of at least one evidence-based claim. Comparison chart scored for completeness and accuracy.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.9 — Analyze the relationship between a primary and secondary source on the same topic',
        'CCSS.ELA-LITERACY.RL.6-8.7 — Compare and contrast a written story to a historical account',
        'CCSS.ELA-LITERACY.W.6-8.3 — Write narratives to develop real or imagined experiences',
      ],
      c3Framework: [
        'D2.His.5.6-8 — Explain how and why perspectives of people changed over time',
        'D2.His.9.6-8 — Analyze the relationship between historical sources and the secondary interpretations made from them',
        'D4.6.6-8 — Draw on disciplinary concepts to explain the challenges people have faced and opportunities they have created',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const danburyAdditionalLinks: Array<{ toTownId: string; linkType: string; reason: string; weight: number }> = [
  {
    toTownId: 'us-ct-new-haven',
    linkType: 'SHARED_EVENT',
    reason:
      'Both Danbury and New Haven were targeted by British coastal and inland raiding operations directed by General William Tryon — Danbury in April 1777 and New Haven in July 1779. Tryon\'s raids against Connecticut towns represent a coherent British strategy of economic destruction and civilian intimidation applied repeatedly across the state.',
    weight: 72,
  },
];

// ============================================================================
// GROTON, CT
// ============================================================================

export const grotonPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-groton-fort-griswold-battlefield',
    name: 'Fort Griswold Battlefield State Park',
    placeType: 'BATTLEFIELD',
    description:
      'The site of the September 6, 1781 Fort Griswold Massacre, one of the bloodiest single engagements in Connecticut\'s Revolutionary War history. The restored earthwork fort, monument obelisk, and museum interpret the battle in which approximately 165 American defenders held the fort against 800 British troops under Lt. Col. Edmund Eyre, ultimately surrendering after Col. William Ledyard was killed — reportedly with his own sword — and 88 defenders were massacred. The earthworks and ditch are substantially intact.',
    lat: 41.3487,
    lng: -72.0796,
    address: '57 Fort St, Groton, CT 06340',
    hours: 'Memorial Day–Labor Day, daily 9am–5pm; grounds open year-round',
    admission: 'Free',
    website: 'https://portal.ct.gov/DEEP/State-Parks/Parks/Fort-Griswold-Battlefield-State-Park',
    town: { connect: { id: 'us-ct-groton' } },
  },
  {
    id: 'place-groton-fort-griswold-monument',
    name: 'Fort Griswold Monument',
    placeType: 'MONUMENT',
    description:
      'An 1830 obelisk, 127 feet tall, erected to honor the 88 men massacred at Fort Griswold on September 6, 1781. The monument was among the first large-scale commemorative structures in New England dedicated to Revolutionary War victims. A museum at the base contains artifacts from the battle, the names of those killed, and exhibits on Colonel William Ledyard and the aftermath. The monument is visible from the Thames River.',
    lat: 41.3487,
    lng: -72.0796,
    address: '57 Fort St, Groton, CT 06340',
    hours: 'Memorial Day–Labor Day, daily 9am–5pm',
    admission: 'Free',
    town: { connect: { id: 'us-ct-groton' } },
  },
  {
    id: 'place-groton-ebenezer-avery-house',
    name: 'Ebenezer Avery House',
    placeType: 'HISTORIC_HOUSE',
    description:
      'A surviving 18th-century house moved to the Fort Griswold park grounds, associated with the aftermath of the 1781 battle. The house was used to shelter wounded survivors after the massacre. Its preservation near the battlefield site creates a domestic counterpoint to the fortification — reminding visitors that the men who died were farmers, fishermen, and tradesmen from the surrounding community, not professional soldiers.',
    lat: 41.3483,
    lng: -72.0800,
    address: '57 Fort St, Groton, CT 06340',
    hours: 'Memorial Day–Labor Day, daily 9am–5pm',
    admission: 'Free',
    town: { connect: { id: 'us-ct-groton' } },
  },
  {
    id: 'place-groton-bill-memorial-library',
    name: 'Groton Public Library (Bill Memorial)',
    placeType: 'LANDMARK',
    description:
      'The Bill Memorial Library building, while 19th century in construction, stands near the center of the community that endured the 1781 massacre. The surrounding neighborhood preserves the scale and layout of the colonial-era settlement from which Fort Griswold\'s defenders were drawn. Local historical collections held here include genealogical records connecting modern Groton families to men who fought and died at the fort.',
    lat: 41.3509,
    lng: -72.0778,
    address: '401 Thames St, Groton, CT 06340',
    hours: 'Mon–Thu 9am–8pm, Fri–Sat 9am–5pm',
    admission: 'Free',
    town: { connect: { id: 'us-ct-groton' } },
  },
  {
    id: 'place-groton-thames-river-crossing',
    name: 'Thames River Crossing (Gold Star Memorial Bridge Vicinity)',
    placeType: 'LANDMARK',
    description:
      'The Thames River separates Groton from New London and was the geographic dividing line between the two simultaneous attacks of September 6, 1781. From the Groton bank, Benedict Arnold directed the burning of New London while Lt. Col. Edmund Eyre\'s force assaulted Fort Griswold. The river\'s width — about a quarter mile — meant the two battles were audible to each other but beyond mutual support. The modern bridge vicinity preserves this critical strategic geography.',
    lat: 41.3530,
    lng: -72.0920,
    address: 'Thames River, Groton, CT 06340',
    hours: 'Open daily',
    admission: 'Free',
    town: { connect: { id: 'us-ct-groton' } },
  },
  {
    id: 'place-groton-jordan-freeman-marker',
    name: 'Jordan Freeman Memorial Marker',
    placeType: 'MONUMENT',
    description:
      'A marker honoring Jordan Freeman, a Black soldier who fought at Fort Griswold on September 6, 1781. When British Major William Montgomery led his men over the fort\'s parapet, Freeman killed him with a spear, helping to briefly check the British surge. Freeman was killed in the subsequent massacre. His act of valor was recorded in multiple contemporary accounts and represents the documented role of Black soldiers in Connecticut\'s Revolutionary War defense.',
    lat: 41.3487,
    lng: -72.0796,
    address: '57 Fort St, Groton, CT 06340',
    hours: 'Open daily',
    admission: 'Free',
    town: { connect: { id: 'us-ct-groton' } },
  },
];

export const grotonAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-groton-fort-griswold-aftermath-burials',
    name: 'Groton Community Buries Its Dead After the Massacre',
    startDate: new Date('1781-09-07'),
    datePrecision: 'DAY',
    summary:
      'In the days following the September 6, 1781 massacre at Fort Griswold, the Groton community faced the task of identifying, recovering, and burying 88 of its men — farmers, fishermen, and tradespeople who had answered the militia call. Families across the region lost fathers, sons, and brothers in a single afternoon. The dead were buried in a mass grave near the fort. The community\'s grief was compounded by the sight of New London burning across the river, where livelihoods and homes were simultaneously destroyed.',
    significanceWeight: 80,
    lat: 41.3487,
    lng: -72.0796,
    town: { connect: { id: 'us-ct-groton' } },
  },
  {
    id: 'event-groton-maritime-defense-legacy',
    name: 'Groton\'s Maritime Defense Legacy Established',
    startDate: new Date('1781-09-06'),
    datePrecision: 'DAY',
    summary:
      'The September 6, 1781 defense of Fort Griswold established a tradition of maritime defense that runs through Groton\'s history to the present. The same strategic geography that made the Thames River mouth worth defending in 1781 — control of a deep-water harbor with access to Long Island Sound — made Groton the site of the U.S. Navy\'s primary submarine base in the 20th century. The connection between the Revolutionary War garrison and the modern submarine force is recognized in local commemorations.',
    significanceWeight: 65,
    lat: 41.3487,
    lng: -72.0796,
    town: { connect: { id: 'us-ct-groton' } },
  },
];

export const grotonLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-ct-groton' } },
    title: 'The Rules of War: Surrender, Massacre, and Military Honor',
    gradeRange: '9-12',
    estimatedDuration: '60 minutes',
    summary:
      'Using the Fort Griswold massacre as a case study, students examine 18th-century rules of war — the laws governing surrender, the treatment of prisoners, and the distinction between battle deaths and massacre — to understand how military honor was defined and violated during the Revolution.',
    lessonData: {
      objectives: [
        'Explain the 18th-century military customs governing surrender and the treatment of prisoners',
        'Describe what happened at Fort Griswold after Colonel Ledyard\'s surrender and why it was controversial',
        'Analyze conflicting accounts of the massacre from British and American perspectives',
        'Evaluate how violations of military law were used as propaganda by both sides',
      ],
      essentialQuestions: [
        'What rules govern how wars are fought, and what happens when those rules are broken?',
        'How do we evaluate actions taken in the heat of battle against the standards of military law?',
        'Why did both sides in the Revolution accuse each other of atrocities, and how should historians evaluate those claims?',
      ],
      materials: [
        'Excerpt from 18th-century laws of war regarding surrender (adapted)',
        'American account of the Fort Griswold massacre (Connecticut Courant, September 1781)',
        'British officer\'s report of the Fort Griswold engagement',
        'List of the 88 dead with their ages and occupations',
      ],
      activities: [
        {
          title: 'Laws of War Introduction',
          duration: '10 minutes',
          description:
            'Brief teacher-led overview of 18th-century military customs: the white flag, the meaning of surrender, the obligation to protect prisoners. Students note three key rules.',
        },
        {
          title: 'Dueling Accounts Analysis',
          duration: '20 minutes',
          description:
            'Students read both the American newspaper account and the British officer\'s report. In pairs, they identify: (1) what each account agrees on, (2) what each account disputes, (3) what each account omits or avoids.',
        },
        {
          title: 'The Casualty List',
          duration: '10 minutes',
          description:
            'Students examine the list of 88 dead. Average age, occupations, family relationships among the dead. What does this list tell you about who was defending the fort? What does it tell you about the cost to the Groton community?',
        },
        {
          title: 'Judgment Exercise',
          duration: '15 minutes',
          description:
            'Students write a verdict: Was Fort Griswold a battle death or a massacre? Define your terms, cite your evidence, and acknowledge the strongest counterargument. 200 words minimum.',
        },
        {
          title: 'Debrief',
          duration: '5 minutes',
          description:
            'Class discusses: Does it matter whether we call it a massacre or a battle? What are the stakes of that naming for history, memory, and policy?',
        },
      ],
      assessment:
        'Verdict essay scored on: (1) clear definition of terms, (2) use of evidence from both primary sources, (3) acknowledgment of counterargument, (4) quality of reasoning.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.6 — Compare the point of view of two or more authors on the same event or topic',
        'CCSS.ELA-LITERACY.RH.9-10.8 — Assess reasoning and evidence in historical arguments',
        'CCSS.ELA-LITERACY.WHST.9-10.1 — Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.4.9-12 — Analyze multiple factors that influenced perspectives of people in different historical eras',
        'D2.His.9.9-12 — Analyze the relationship between historical sources and the secondary interpretations made from them',
        'D4.3.9-12 — Present adaptations of arguments in forms appropriate to the audience',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-ct-groton' } },
    title: 'Jordan Freeman and the Black Soldiers of Fort Griswold',
    gradeRange: '7-10',
    estimatedDuration: '50 minutes',
    summary:
      'Students examine the role of Black soldiers like Jordan Freeman at Fort Griswold to understand how African Americans participated in the Revolutionary War, the legal and social conditions under which they served, and why their contributions were often omitted from early historical accounts.',
    lessonData: {
      objectives: [
        'Describe Jordan Freeman\'s actions at Fort Griswold on September 6, 1781',
        'Explain the legal status of Black men (free and enslaved) who served in Connecticut\'s Revolutionary militia',
        'Analyze why Black soldiers\' contributions were documented in some contemporary sources but omitted from later histories',
        'Connect the participation of Black soldiers to broader questions about freedom and citizenship in the Revolutionary era',
      ],
      essentialQuestions: [
        'Why would a Black man — free or enslaved — fight for American independence in 1781?',
        'What does the historical treatment of Jordan Freeman\'s story tell us about how history is written and who gets included?',
        'How does recovering overlooked histories change our understanding of the Revolution?',
      ],
      materials: [
        'Contemporary accounts mentioning Jordan Freeman (adapted excerpts)',
        'Brief overview of Connecticut\'s laws regarding Black military service in the Revolution',
        'Comparison of how Freeman is described in 1781 sources vs. 19th-century histories',
        'Discussion protocol handout',
      ],
      activities: [
        {
          title: 'Primary Source Reading',
          duration: '10 minutes',
          description:
            'Students read the contemporary accounts mentioning Freeman. What specific actions are described? What details are included about his status (free, enslaved, soldier)? What is not mentioned?',
        },
        {
          title: 'Legal Context',
          duration: '10 minutes',
          description:
            'Brief reading on Connecticut\'s approach to Black military service. Could Black men in Connecticut serve in the militia? Were they volunteers or compelled? What happened to enslaved men who served?',
        },
        {
          title: 'Historical Memory Comparison',
          duration: '15 minutes',
          description:
            'Students compare the 1781 account to a 19th-century history that omits or minimizes Freeman. In pairs: What changed? What was the political context of each era? What does the omission tell us?',
        },
        {
          title: 'Discussion and Reflection',
          duration: '10 minutes',
          description:
            'Whole-class: Why do overlooked histories matter? What is lost when we leave people out of the historical record? What can we recover, and what is permanently lost?',
        },
        {
          title: 'Exit Ticket',
          duration: '5 minutes',
          description:
            'Students write: "What does Jordan Freeman\'s story add to our understanding of the Revolution that a narrative focused only on white colonists would miss?"',
        },
      ],
      assessment:
        'Exit ticket scored on specificity and use of evidence. Discussion contribution assessed by teacher observation. Comparison exercise scored for accurate identification of differences and plausible historical explanation.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.6 — Identify aspects of a text that reveal an author\'s point of view or purpose',
        'CCSS.ELA-LITERACY.RH.6-8.9 — Analyze the relationship between a primary and secondary source on the same topic',
        'CCSS.ELA-LITERACY.WHST.6-8.2 — Write informative/explanatory texts on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.5.6-8 — Explain how and why perspectives of people have changed over time',
        'D2.His.9.6-8 — Analyze the relationship between historical sources and secondary interpretations',
        'D2.Civ.6.6-8 — Describe the requirements for becoming a citizen and evaluate how those requirements have changed',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const grotonAdditionalLinks: Array<{ toTownId: string; linkType: string; reason: string; weight: number }> = [
  {
    toTownId: 'us-ri-newport',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason:
      'Groton and Newport are connected by Long Island Sound and the strategic geography of southern New England\'s coastline. Both towns were targeted by British military operations: Newport occupied for three years, Groton raided in 1781. The French fleet that was based in Newport in 1780 operated in the same waters that Groton\'s privateers and militia defenders watched. The coastal corridor between them was the contested maritime frontier of the Revolution\'s later years.',
    weight: 65,
  },
];

// ============================================================================
// NEWPORT, RI
// ============================================================================

export const newportPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-newport-touro-synagogue',
    name: 'Touro Synagogue',
    placeType: 'CHURCH',
    description:
      'The oldest surviving synagogue in the United States, built 1759–1763. During the Revolution it served as a British officer\'s meeting room and later briefly as a hospital. In 1790 George Washington wrote his famous letter to the congregation assuring them that the new government "gives to bigotry no sanction, to persecution no assistance." The letter, a foundational statement of American religious liberty, was inspired by a message from Newport\'s Jewish community to the new president. A National Historic Site.',
    lat: 41.4887,
    lng: -71.3124,
    address: '85 Touro St, Newport, RI 02840',
    hours: 'Tours available; see website for seasonal hours',
    admission: 'Free with reservation',
    website: 'https://www.tourosynagogue.org',
    town: { connect: { id: 'us-ri-newport' } },
  },
  {
    id: 'place-newport-hunter-house',
    name: 'Hunter House',
    placeType: 'HISTORIC_HOUSE',
    description:
      'A 1748 Georgian merchant\'s house that served as headquarters for French Admiral de Ternay during Rochambeau\'s 1780 occupation of Newport. The house is one of the finest surviving examples of colonial Newport architecture and demonstrates the domestic scale and mercantile prosperity the British occupation disrupted. Managed by the Preservation Society of Newport County as one of the few colonial-era structures open to the public.',
    lat: 41.4951,
    lng: -71.3268,
    address: '54 Washington St, Newport, RI 02840',
    hours: 'May–Oct, daily 10am–5pm',
    admission: 'Fee (combo ticket available)',
    website: 'https://www.newportmansions.org',
    town: { connect: { id: 'us-ri-newport' } },
  },
  {
    id: 'place-newport-wanton-lyman-hazard-house',
    name: 'Wanton-Lyman-Hazard House',
    placeType: 'HISTORIC_HOUSE',
    description:
      'The oldest surviving house in Newport (ca. 1697), this building served as the residence of British officials during the occupation and was the site of the Stamp Act riot of 1765. Its long history from colonial tax protest to Revolutionary War occupation makes it one of the most layered historic structures in the state. Operated by the Newport Historical Society.',
    lat: 41.4885,
    lng: -71.3120,
    address: '17 Broadway, Newport, RI 02840',
    hours: 'Tours by appointment; see website',
    admission: 'Small fee',
    website: 'https://www.newporthistory.org',
    town: { connect: { id: 'us-ri-newport' } },
  },
  {
    id: 'place-newport-redwood-library',
    name: 'Redwood Library and Athenaeum',
    placeType: 'LANDMARK',
    description:
      'The oldest continuously operating library in the United States (founded 1747), the Redwood Library was used by British officers as a clubhouse during the 1776–1779 occupation. Many of its books were carried off or damaged. The library\'s survival despite the occupation preserved Newport\'s intellectual community and served as a symbol of the town\'s resilience. The Palladian building is an architectural landmark of colonial America.',
    lat: 41.4874,
    lng: -71.3097,
    address: '50 Bellevue Ave, Newport, RI 02840',
    hours: 'Mon–Sat 9:30am–5:30pm, Sun 1pm–5pm',
    admission: 'Free',
    website: 'https://www.redwoodlibrary.org',
    town: { connect: { id: 'us-ri-newport' } },
  },
  {
    id: 'place-newport-fort-adams',
    name: 'Fort Adams State Park',
    placeType: 'BATTLEFIELD',
    description:
      'The current masonry Fort Adams was built 1824–1857, but the site has been fortified since 1776, when Rhode Island constructed earthworks to guard the entrance to Narragansett Bay. During the Revolution, British forces used the fortified position to control harbor access throughout their 1776–1779 occupation. The site\'s commanding position over the East Passage explains why control of Newport\'s harbor was so strategically significant to both sides.',
    lat: 41.4720,
    lng: -71.3440,
    address: '90 Fort Adams Dr, Newport, RI 02840',
    hours: 'Daily 9am–5pm',
    admission: 'Free (museum fee)',
    website: 'https://www.fortadams.org',
    town: { connect: { id: 'us-ri-newport' } },
  },
  {
    id: 'place-newport-colony-house',
    name: 'Colony House',
    placeType: 'GOVERNMENT',
    description:
      'The 1739 Colony House on Washington Square served as Rhode Island\'s colonial capitol and was the site of major Revolutionary events: the Declaration of Independence was read from its steps in 1776, and it served as a hospital for both British and French forces during their respective occupations. One of the oldest surviving statehouses in America, it anchors the historic district that preserves Newport\'s colonial-era civic character.',
    lat: 41.4868,
    lng: -71.3124,
    address: 'Washington Square, Newport, RI 02840',
    hours: 'Tours seasonally; see RI Division of Parks',
    admission: 'Free',
    town: { connect: { id: 'us-ri-newport' } },
  },
];

export const newportAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-newport-rochambeau-departs-yorktown',
    name: 'Rochambeau\'s Army Departs Newport for Yorktown',
    startDate: new Date('1781-06-10'),
    datePrecision: 'DAY',
    summary:
      'On June 10–11, 1781, Rochambeau\'s French army of approximately 4,000 men departed Newport on the march that would end the Revolutionary War. The army marched overland through Connecticut and New York to rendezvous with Washington\'s Continental forces north of New York City, then — when word arrived of Cornwallis\'s position in Virginia — pivoted south toward Yorktown. The march from Newport to Yorktown totaled over 700 miles. Newport had been the operational base without which this decisive campaign could not have been launched.',
    significanceWeight: 90,
    lat: 41.4860,
    lng: -71.3120,
    town: { connect: { id: 'us-ri-newport' } },
  },
  {
    id: 'event-newport-washington-letter-hebrew-congregation',
    name: 'Washington\'s Letter to the Hebrew Congregation of Newport',
    startDate: new Date('1790-08-18'),
    datePrecision: 'DAY',
    summary:
      'On August 18, 1790, President Washington wrote to the Hebrew Congregation of Newport in response to their letter of welcome during his visit to Rhode Island. The letter contained the famous passage: "the Government of the United States...gives to bigotry no sanction, to persecution no assistance." Written as Rhode Island ratified the Constitution — the last of the original thirteen states to do so — Washington\'s letter defined religious liberty as a founding principle, not a grudging tolerance. The letter directly connects Newport\'s Revolutionary War experience to the constitutional settlement that followed.',
    significanceWeight: 85,
    lat: 41.4887,
    lng: -71.3124,
    town: { connect: { id: 'us-ri-newport' } },
  },
];

export const newportLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-ri-newport' } },
    title: 'Occupied Newport: What It Meant to Live Under British Control',
    gradeRange: '7-9',
    estimatedDuration: '50 minutes',
    summary:
      'Students examine what the British occupation of Newport (1776–1779) meant for ordinary residents — those who fled, those who stayed, and those who collaborated — to understand occupation as a human experience, not just a military fact.',
    lessonData: {
      objectives: [
        'Describe the conditions of British occupation in Newport from 1776 to 1779',
        'Analyze the choices facing Newport residents: flee, stay, or collaborate',
        'Evaluate the economic and social costs of occupation on the town\'s civilian population',
        'Connect Newport\'s experience to broader patterns of civilian experience in the Revolutionary War',
      ],
      essentialQuestions: [
        'What choices do ordinary people face when their town is occupied by an enemy army?',
        'How do we judge those who collaborated with occupying forces versus those who resisted or fled?',
        'What does occupation reveal about the limits of military power over civilian life?',
      ],
      materials: [
        'Adapted excerpts from Newport civilian accounts of the occupation',
        'List of documented damages: buildings destroyed for firewood, population decline statistics',
        'Map of Newport showing British garrison positions and civilian neighborhoods',
        'Decision-making framework handout',
      ],
      activities: [
        {
          title: 'Before and After',
          duration: '10 minutes',
          description:
            'Students examine population data: Newport was one of the five largest cities in the colonies before the war; roughly half the population fled during the occupation. What does this number represent in human terms?',
        },
        {
          title: 'Civilian Choices Role-Play',
          duration: '20 minutes',
          description:
            'Students receive role cards: wealthy Patriot merchant (flee or lose property), Loyalist shopkeeper (stay and profit or face Patriot violence), artisan with young children (stay and survive or flee with nothing). Groups discuss their choices and present decisions with reasoning.',
        },
        {
          title: 'Occupation Costs Analysis',
          duration: '10 minutes',
          description:
            'Using the damage list, students calculate proportional impact: if half the population fled, what happened to the town\'s tax base? Its labor force? Its social institutions? What took generations to recover?',
        },
        {
          title: 'Exit Ticket',
          duration: '10 minutes',
          description:
            'Students write: "What was the most significant long-term cost of the British occupation of Newport, and why?" One paragraph with specific evidence.',
        },
      ],
      assessment:
        'Exit ticket scored on specificity, use of evidence, and quality of causal reasoning. Role-play assessed on historical plausibility of decisions and quality of group reasoning.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1 — Cite textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.3 — Identify key steps in a text\'s description of a process related to history',
        'CCSS.ELA-LITERACY.WHST.6-8.2 — Write informative/explanatory texts on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.3.6-8 — Explain how and why individuals and groups responded differently to historical events',
        'D2.His.5.6-8 — Explain how and why perspectives of people changed over time',
        'D4.2.6-8 — Construct explanations using reasoning, correct sequence, examples, and details',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-ri-newport' } },
    title: 'The 1st Rhode Island Regiment: Who Fought for American Liberty?',
    gradeRange: '8-11',
    estimatedDuration: '60 minutes',
    summary:
      'Students examine the 1st Rhode Island Regiment — one of the most integrated military units in American history — to explore the contradiction at the heart of the Revolution: a war for liberty fought partly by enslaved and free Black men whose own freedom was not guaranteed by the cause they served.',
    lessonData: {
      objectives: [
        'Describe the composition and history of the 1st Rhode Island Regiment',
        'Explain the terms under which enslaved men were allowed to serve and what, if anything, they received in return',
        'Analyze the performance of the regiment at the Battle of Rhode Island (August 1778)',
        'Evaluate the contradiction between the Revolution\'s rhetoric of liberty and the institution of slavery',
      ],
      essentialQuestions: [
        'Why would enslaved men fight for American independence when independence did not guarantee their freedom?',
        'What does the existence of integrated military units tell us about the contradictions of the Revolution?',
        'How should we interpret the Revolution\'s promise of liberty in light of who was excluded from it?',
      ],
      materials: [
        'Rhode Island\'s 1778 slave enlistment act (adapted excerpt)',
        'Account of the Battle of Rhode Island with description of the regiment\'s performance',
        'Excerpt from the Declaration of Independence (all men created equal)',
        'Biographical sketch of Colonel Christopher Greene and a regiment member',
      ],
      activities: [
        {
          title: 'Document Analysis: The Enlistment Act',
          duration: '15 minutes',
          description:
            'Students read the 1778 Rhode Island act permitting enslaved men to enlist. What does the act promise? What does it not promise? What happened to enslaved soldiers\' freedom after the war? Annotate in pairs.',
        },
        {
          title: 'Battle of Rhode Island',
          duration: '10 minutes',
          description:
            'Brief account of the regiment\'s stand against Hessian assaults on August 29, 1778. Students identify: what tactical role did the regiment play? What does the historical record say about their performance?',
        },
        {
          title: 'Contradiction Exercise',
          duration: '20 minutes',
          description:
            'Students place the Declaration\'s "all men are created equal" alongside the enlistment act\'s promise (freedom for enslaved soldiers, not universal emancipation). Small groups discuss: Is this a contradiction? A compromise? A step forward? A betrayal? Each group must commit to a position and defend it.',
        },
        {
          title: 'Written Reflection',
          duration: '15 minutes',
          description:
            'Students respond to: "What does the 1st Rhode Island Regiment reveal about the meaning of the Revolution?" 200–250 words, using evidence from at least two sources.',
        },
      ],
      assessment:
        'Written reflection scored on: (1) clear thesis, (2) evidence from at least two sources, (3) engagement with the central contradiction, (4) quality of historical reasoning.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.8-10.6 — Compare the point of view of two or more authors on the same event',
        'CCSS.ELA-LITERACY.RH.8-10.9 — Analyze the relationship between primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.8-10.1 — Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.1.9-12 — Evaluate how historical events were shaped by unique circumstances of time and place',
        'D2.Civ.10.6-8 — Explain the relevance of personal interests and perspectives, civic virtues, and democratic principles',
        'D4.3.9-12 — Present adaptations of arguments in forms appropriate to the audience',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const newportAdditionalLinks: Array<{ toTownId: string; linkType: string; reason: string; weight: number }> = [
  {
    toTownId: 'us-ri-providence',
    linkType: 'SHARED_THEME',
    reason:
      'Newport and Providence were the two poles of Rhode Island\'s Revolutionary War experience. Newport was occupied and diminished; Providence was the state\'s Patriot capital and economic engine. Nathanael Greene, born in the Providence area, was the Continental Army\'s most capable strategist. The French army that based itself in Newport marched through Providence on its way to Yorktown. Rhode Island\'s war cannot be understood without both towns.',
    weight: 88,
  },
];

// ============================================================================
// PROVIDENCE, RI
// ============================================================================

export const providencePlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-providence-university-hall-brown',
    name: 'University Hall, Brown University',
    placeType: 'LANDMARK',
    description:
      'The oldest building on the Brown University campus (1770), University Hall served as a barracks and hospital for Continental Army troops during the Revolution. The building\'s wartime use disrupted the college\'s academic operations for years. Brown University — then Rhode Island College — was one of several colonial colleges that contributed officers and educated men to the Revolutionary cause. The building is now a National Historic Landmark.',
    lat: 41.8268,
    lng: -71.4025,
    address: '45 Prospect St, Providence, RI 02912',
    hours: 'Exterior viewable daily; interior by campus tour',
    admission: 'Free (campus tours)',
    website: 'https://www.brown.edu',
    town: { connect: { id: 'us-ri-providence' } },
  },
  {
    id: 'place-providence-john-brown-house',
    name: 'John Brown House Museum',
    placeType: 'HISTORIC_HOUSE',
    description:
      'Built 1786–1788 for John Brown, one of Providence\'s wealthiest merchants and a major figure in the town\'s Revolutionary-era commerce. Brown was involved in the Gaspee Affair (1772) and helped finance Rhode Island\'s war effort. John Adams called the house "the most magnificent and elegant private mansion that I have ever seen on this continent." The house reflects the maritime mercantile wealth that made Providence a critical node in the Continental supply chain. Operated by the Rhode Island Historical Society.',
    lat: 41.8227,
    lng: -71.3988,
    address: '52 Power St, Providence, RI 02906',
    hours: 'Fri–Sun 10am–4pm (seasonal)',
    admission: 'Fee',
    website: 'https://www.rihs.org',
    town: { connect: { id: 'us-ri-providence' } },
  },
  {
    id: 'place-providence-first-baptist-church',
    name: 'First Baptist Church in America',
    placeType: 'CHURCH',
    description:
      'The oldest Baptist congregation in America, founded by Roger Williams in 1638. The current meeting house was built 1774–1775, just as the Revolution began, and became the civic and spiritual center of Providence during the war. The congregation\'s commitment to religious liberty — the founding principle of Rhode Island\'s colony — aligned naturally with Revolutionary ideology. The building hosted community gatherings, political debates, and wartime ceremonies.',
    lat: 41.8244,
    lng: -71.4070,
    address: '75 N Main St, Providence, RI 02903',
    hours: 'Mon–Fri 10am–3pm; Sunday services',
    admission: 'Free',
    website: 'https://www.fbcia.org',
    town: { connect: { id: 'us-ri-providence' } },
  },
  {
    id: 'place-providence-old-state-house',
    name: 'Old State House',
    placeType: 'GOVERNMENT',
    description:
      'The 1762 Old State House on North Main Street was the seat of Rhode Island\'s colonial and early Revolutionary government. Here, on May 4, 1776 — two months before the Declaration of Independence — Rhode Island became the first of the thirteen colonies to formally renounce allegiance to King George III. The building later served as the state capital until the current State House opened in 1904. A National Historic Landmark.',
    lat: 41.8292,
    lng: -71.4125,
    address: '150 Benefit St, Providence, RI 02903',
    hours: 'Mon–Fri 8:30am–4:30pm',
    admission: 'Free',
    town: { connect: { id: 'us-ri-providence' } },
  },
  {
    id: 'place-providence-beneficent-church',
    name: 'Beneficent Congregational Church (Round Top)',
    placeType: 'CHURCH',
    description:
      'Providence\'s "Round Top" church, whose congregation dates to 1743, was a gathering place for Providence\'s Patriot community during the Revolution. The church reflects the Congregationalist religious culture that shaped Rhode Island\'s political identity. The original building was replaced in 1809, but the congregation\'s history runs continuously through the Revolutionary period.',
    lat: 41.8231,
    lng: -71.4075,
    address: '300 Weybosset St, Providence, RI 02903',
    hours: 'Sunday services; weekdays by appointment',
    admission: 'Free',
    town: { connect: { id: 'us-ri-providence' } },
  },
  {
    id: 'place-providence-gaspee-point',
    name: 'Gaspee Point, Warwick (Gaspee Affair Site)',
    placeType: 'LANDMARK',
    description:
      'Gaspee Point in Warwick, just south of Providence, is where Providence merchant sailors ran the HMS Gaspee aground on June 9, 1772, then boarded and burned her. The Gaspee Affair predated Lexington and Concord by three years and was arguably the first violent act of the American Revolution. A British Crown commission investigating the affair was granted extraordinary powers — including authority to ship Americans to England for trial — that galvanized colonial resistance. A state park and monument mark the site.',
    lat: 41.7323,
    lng: -71.4178,
    address: 'Gaspee Point, Warwick, RI 02886',
    hours: 'Open daily',
    admission: 'Free',
    town: { connect: { id: 'us-ri-providence' } },
  },
];

export const providenceAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-providence-nathanael-greene-appointed-general',
    name: 'Nathanael Greene Appointed Continental Army Brigadier General',
    startDate: new Date('1775-06-22'),
    datePrecision: 'DAY',
    summary:
      'On June 22, 1775, the Continental Congress appointed Nathanael Greene — a Rhode Island iron forge owner with no prior military experience — as a brigadier general. Greene had prepared himself through intensive self-study and had organized and commanded the Kentish Guards militia. Within months he had become one of Washington\'s most trusted subordinates. His later command of the Southern Department (1780–1783) is widely considered the most operationally sophisticated American campaign of the entire war — and he was born in Potowomut, Rhode Island, within the Providence orbit.',
    significanceWeight: 84,
    lat: 41.8268,
    lng: -71.4025,
    town: { connect: { id: 'us-ri-providence' } },
  },
  {
    id: 'event-providence-nicholas-brown-maritime-supply',
    name: 'Nicholas Brown Coordinates Maritime Supply for the Continental Army',
    startDate: new Date('1776-01-01'),
    datePrecision: 'YEAR',
    summary:
      'Nicholas Brown, Providence\'s most prominent merchant, organized the importation of cannon, gunpowder, and military stores for Rhode Island and the Continental Army through his commercial network beginning in 1776. Brown used his family\'s existing trade connections in the Caribbean and Europe to acquire materials that the Continental Army could not manufacture domestically. His merchant house became an informal procurement agent for the war effort, demonstrating how colonial commercial networks were repurposed for military supply.',
    significanceWeight: 70,
    lat: 41.8227,
    lng: -71.3988,
    town: { connect: { id: 'us-ri-providence' } },
  },
];

export const providenceLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-ri-providence' } },
    title: 'The Gaspee Affair: Why the Revolution Started in Rhode Island',
    gradeRange: '8-10',
    estimatedDuration: '55 minutes',
    summary:
      'Students examine the 1772 burning of the HMS Gaspee — three years before Lexington and Concord — to understand how the Revolution began not as a single moment but as an escalating series of confrontations between colonial communities and British authority over trade, taxation, and legal rights.',
    lessonData: {
      objectives: [
        'Describe the events of the Gaspee Affair and why Providence merchants burned the British revenue schooner',
        'Explain what the British Crown\'s response — a commission empowered to ship Americans to England for trial — revealed about the limits of colonial rights',
        'Analyze the Gaspee Affair\'s relationship to other pre-Revolution confrontations (Stamp Act, Tea Act)',
        'Evaluate whether the Gaspee Affair should be considered the true beginning of the American Revolution',
      ],
      essentialQuestions: [
        'When does political resistance become revolution?',
        'Why did the British government\'s response to colonial grievances consistently make the situation worse?',
        'What does the Gaspee Affair reveal about the relationship between commerce, law, and political resistance?',
      ],
      materials: [
        'Narrative account of the Gaspee Affair (adapted)',
        'Excerpt from the Gaspee Commission\'s charter of authority',
        'Timeline of pre-Revolution colonial grievances 1765–1775',
        'Discussion question cards',
      ],
      activities: [
        {
          title: 'The Story',
          duration: '10 minutes',
          description:
            'Teacher narrates the Gaspee Affair with key details: the ship ran aground while chasing a merchant vessel, Providence men rowed out at night, shot the captain, and burned the ship. No one was ever prosecuted despite a royal commission.',
        },
        {
          title: 'The Commission',
          duration: '15 minutes',
          description:
            'Students read the excerpt from the commission\'s charter. What powers does it claim? What colonial rights does it potentially violate? Compare to the grievances listed in the Declaration of Independence.',
        },
        {
          title: 'Timeline Placement',
          duration: '10 minutes',
          description:
            'Students place the Gaspee Affair on the pre-Revolution timeline alongside the Stamp Act, Boston Massacre, Tea Act, and Coercive Acts. Where does it fit in the escalating pattern? What came before and after?',
        },
        {
          title: 'Debate: First Shot?',
          duration: '15 minutes',
          description:
            'Structured debate: Was the Gaspee Affair the true beginning of the American Revolution? Groups argue for and against, using evidence from the timeline and documents.',
        },
        {
          title: 'Exit Ticket',
          duration: '5 minutes',
          description:
            'Students write one sentence: their position on when the Revolution began, and one piece of evidence supporting it.',
        },
      ],
      assessment:
        'Exit ticket scored on clarity of position and quality of evidence. Debate assessed on use of specific historical evidence and engagement with counterargument.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.8-10.1 — Cite textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.8-10.3 — Analyze a series of events and the connections drawn between them',
        'CCSS.ELA-LITERACY.SL.8-10.4 — Present information clearly, concisely, and logically',
      ],
      c3Framework: [
        'D2.His.1.6-8 — Analyze connections among events and developments in broader historical contexts',
        'D2.His.2.6-8 — Classify series of historical proposed causes in terms of plausibility',
        'D1.5.6-8 — Determine the kinds of sources that will be helpful in answering compelling and supporting questions',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-ri-providence' } },
    title: 'Nathanael Greene and the Logistics of Losing — and Winning',
    gradeRange: '10-12',
    estimatedDuration: '65 minutes',
    summary:
      'Students examine Nathanael Greene\'s Southern Campaign (1780–1783) to understand how strategic retreat, supply chain management, and asymmetric warfare can be more effective than winning pitched battles — and what this reveals about the nature of military genius.',
    lessonData: {
      objectives: [
        'Trace Nathanael Greene\'s military career from Rhode Island volunteer to Southern Department commander',
        'Explain the operational strategy of Greene\'s Southern Campaign: "We fight, get beat, rise, and fight again"',
        'Analyze how Greene\'s supply and logistics management determined the campaign\'s outcome',
        'Evaluate what Greene\'s career reveals about the relationship between conventional and unconventional warfare',
      ],
      essentialQuestions: [
        'Can you win a war by losing battles?',
        'What is military genius, and does it require battlefield victories?',
        'How did the logistical demands of supplying armies shape Revolutionary War strategy?',
      ],
      materials: [
        'Map of Greene\'s Southern Campaign 1780–1783 with key battles and retreats',
        'Greene\'s letter to Washington: "We fight, get beat, rise, and fight again" (excerpt)',
        'Battle results table: Guilford Court House, Hobkirk\'s Hill, Eutaw Springs — American losses, British losses, strategic outcomes',
        'Brief biography of Greene',
      ],
      activities: [
        {
          title: 'Career Timeline',
          duration: '10 minutes',
          description:
            'Students place key events in Greene\'s career on a timeline from the Kentish Guards to the Southern Department. Note the self-education, Washington\'s trust, and the Quartermaster General period (logistics).',
        },
        {
          title: 'Battle Analysis',
          duration: '20 minutes',
          description:
            'Using the battle results table, students analyze three battles: Guilford Court House, Hobkirk\'s Hill, Eutaw Springs. In each case, the British won the tactical engagement; in each case, the strategic outcome favored the Americans. Students explain this paradox.',
        },
        {
          title: 'Map Study',
          duration: '10 minutes',
          description:
            'Students trace the retreats and advances on the Southern Campaign map. What geographical constraints shaped the campaign? How did Greene use rivers, terrain, and the Catawba militia to offset British conventional strength?',
        },
        {
          title: 'Written Analysis',
          duration: '20 minutes',
          description:
            'Students write a 250-word response: "Was Nathanael Greene the most effective American general of the Revolution? Use evidence from the Southern Campaign to support your argument."',
        },
        {
          title: 'Debrief',
          duration: '5 minutes',
          description:
            'Class discussion: What does Greene\'s campaign reveal about the limits of conventional military metrics (battles won/lost) as measures of effectiveness?',
        },
      ],
      assessment:
        'Written analysis scored on: (1) clear thesis, (2) specific battle-level evidence, (3) engagement with the paradox of losing battles while winning the campaign, (4) quality of historical argument.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.1 — Cite strong textual evidence to support analysis',
        'CCSS.ELA-LITERACY.RH.9-10.9 — Compare and contrast treatments of the same topic in primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1 — Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.1.9-12 — Evaluate how historical events and developments were shaped by unique circumstances',
        'D2.His.2.9-12 — Analyze change and continuity in historical eras',
        'D4.6.9-12 — Use disciplinary concepts to explain the challenges people have faced',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const providenceAdditionalLinks: Array<{ toTownId: string; linkType: string; reason: string; weight: number }> = [
  {
    toTownId: 'us-ct-new-haven',
    linkType: 'SHARED_THEME',
    reason:
      'Providence and New Haven were both centers of intellectual and political resistance in New England. Yale College in New Haven and Rhode Island College (Brown) in Providence both trained officers, housed military hospitals, and contributed to the ideological foundations of the Revolution. The two towns represent the role of colonial educational institutions in sustaining the intellectual infrastructure of independence.',
    weight: 70,
  },
];
