// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// Pennsylvania expansion: Philadelphia, Valley Forge, York, Germantown, Carlisle, Paoli
import { Prisma } from '@prisma/client';

// ============================================================================
// PHILADELPHIA
// ============================================================================

export const philadelphiaPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-philadelphia-independence-hall',
    name: 'Independence Hall',
    placeType: 'GOVERNMENT',
    description:
      'The Pennsylvania State House where both the Declaration of Independence (1776) and the U.S. Constitution (1787) were debated and adopted. The building served as meeting place for the Second Continental Congress and is a UNESCO World Heritage Site. The Assembly Room preserves the chairs, inkstand, and table used by the delegates. Washington presided over the Constitutional Convention in the same chamber where independence was declared.',
    lat: 39.9489,
    lng: -75.1500,
    address: '520 Chestnut St, Philadelphia, PA 19106',
    hours: 'Daily 9am–5pm; timed-entry tickets required July–August',
    admission: 'Free (timed-entry passes required in summer)',
    website: 'https://www.nps.gov/inde/planyourvisit/independencehall.htm',
    town: { connect: { id: 'us-pa-philadelphia' } },
  },
  {
    id: 'place-philadelphia-liberty-bell-center',
    name: 'Liberty Bell Center',
    placeType: 'MUSEUM',
    description:
      'Modern pavilion housing the Liberty Bell, cast in 1752 and rung to summon colonists to hear the first public reading of the Declaration of Independence in August 1776. The bell\'s famous crack developed in the 1840s. Exhibits trace the bell\'s history from its arrival in Philadelphia through its later adoption as a symbol of the abolitionist movement and civil rights struggles. The building is oriented to provide a direct sightline to Independence Hall.',
    lat: 39.9494,
    lng: -75.1497,
    address: '526 Market St, Philadelphia, PA 19106',
    hours: 'Daily 9am–5pm',
    admission: 'Free',
    website: 'https://www.nps.gov/inde/planyourvisit/libertybellcenter.htm',
    town: { connect: { id: 'us-pa-philadelphia' } },
  },
  {
    id: 'place-philadelphia-carpenters-hall',
    name: "Carpenters' Hall",
    placeType: 'HISTORIC_HOUSE',
    description:
      'Georgian hall completed in 1774 that hosted the First Continental Congress from September 5 to October 26, 1774 — the first formal political gathering of the colonies in resistance to British policy. Delegates from twelve colonies met here to coordinate their response to the Intolerable Acts. The hall is still owned and operated by the Carpenters\' Company of Philadelphia, founded 1724, making it one of the oldest trade guilds in America.',
    lat: 39.9480,
    lng: -75.1483,
    address: '320 Chestnut St, Philadelphia, PA 19106',
    hours: 'Tue–Sun 10am–4pm',
    admission: 'Free',
    website: 'https://www.carpentershall.org',
    town: { connect: { id: 'us-pa-philadelphia' } },
  },
  {
    id: 'place-philadelphia-christ-church',
    name: 'Christ Church',
    placeType: 'CHURCH',
    description:
      'Anglican church built 1744 where George Washington, Benjamin Franklin, Betsy Ross, and other founders worshipped. Washington\'s pew (No. 56) and Franklin\'s pew (No. 70) are marked. The church served both sides during the British occupation of 1777–78. Its burial ground two blocks away contains the graves of Benjamin Franklin and four other signers of the Declaration of Independence. Among the finest examples of Georgian ecclesiastical architecture in North America.',
    lat: 39.9516,
    lng: -75.1444,
    address: '20 N American St, Philadelphia, PA 19106',
    hours: 'Mon–Sat 9am–5pm, Sun 1–5pm',
    admission: 'Suggested donation',
    website: 'https://www.christchurchphila.org',
    town: { connect: { id: 'us-pa-philadelphia' } },
  },
  {
    id: 'place-philadelphia-city-tavern',
    name: 'City Tavern',
    placeType: 'TAVERN',
    description:
      'Rebuilt 1994 on the original 1773 footprint, City Tavern was the social and political hub of Revolutionary Philadelphia. John Adams called it "the most genteel tavern in America." The First and Second Continental Congresses held dinners here, and delegates used the tavern for informal negotiations that shaped formal proceedings in Independence Hall two blocks away. Washington dined here on the evening the Constitutional Convention concluded in 1787.',
    lat: 39.9475,
    lng: -75.1451,
    address: '138 S 2nd St, Philadelphia, PA 19106',
    hours: 'Daily 11:30am–9pm (restaurant)',
    admission: 'Restaurant; dining charges apply',
    website: 'https://www.citytavern.com',
    town: { connect: { id: 'us-pa-philadelphia' } },
  },
  {
    id: 'place-philadelphia-museum-of-art',
    name: 'Philadelphia Museum of Art (Revolutionary Collection)',
    placeType: 'MUSEUM',
    description:
      'Major art museum with significant holdings of American Revolutionary-era decorative arts, portraits, and material culture. The museum\'s collection includes period furniture, silver, textiles, and paintings documenting Philadelphia life during the British occupation and the founding era. The museum sits near the site of several early republic government buildings and interprets the city\'s role as the cultural capital of the new nation.',
    lat: 39.9656,
    lng: -75.1810,
    address: '2600 Benjamin Franklin Pkwy, Philadelphia, PA 19130',
    hours: 'Wed–Mon 10am–5pm, Fri until 8:45pm',
    admission: 'Adults $25, students $14',
    website: 'https://www.philamuseum.org',
    town: { connect: { id: 'us-pa-philadelphia' } },
  },
];

export const philadelphiaAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-philadelphia-congress-relocates-york',
    name: 'Continental Congress Flees to York, Pennsylvania',
    startDate: new Date('1777-09-18'),
    datePrecision: 'DAY',
    summary:
      'As British forces under Howe advanced on Philadelphia after the Battle of Brandywine, the Continental Congress hastily evacuated on September 18–19, 1777, relocating first to Lancaster and then to York, Pennsylvania, where it would govern until June 1778. At York, Congress adopted the Articles of Confederation and received news of the French alliance. The evacuation demonstrated the fragility of the revolutionary government while also proving its resilience.',
    significanceWeight: 85,
    lat: 39.9526,
    lng: -75.1652,
    town: { connect: { id: 'us-pa-philadelphia' } },
  },
  {
    id: 'event-philadelphia-howe-winter-occupation',
    name: 'General Howe Winters in Philadelphia, Army at Valley Forge',
    startDate: new Date('1777-12-01'),
    datePrecision: 'MONTH',
    summary:
      'During the winter of 1777–78, British General William Howe and his officer corps enjoyed Philadelphia\'s comforts — theater, banquets, and the famous Mischianza gala in May 1778 — while Washington\'s army starved and froze twenty miles away at Valley Forge. The contrast became a symbol of British strategic complacency: holding the American capital did not break American will. Howe was recalled to London in spring 1778, replaced by Henry Clinton, who evacuated the city in June.',
    significanceWeight: 80,
    lat: 39.9526,
    lng: -75.1652,
    town: { connect: { id: 'us-pa-philadelphia' } },
  },
];

export const philadelphiaLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-pa-philadelphia' } },
    title: 'The Political Capital: Philadelphia and the Birth of American Government',
    gradeRange: '5-8',
    estimatedDuration: '2 class periods',
    summary:
      'Students explore Philadelphia\'s role as the political center of the Revolution, examining how Independence Hall, Carpenters\' Hall, and City Tavern functioned as interconnected spaces where the founding generation debated, negotiated, and enacted independence.',
    lessonData: {
      objectives: [
        'Identify the sequence of key political events in Philadelphia from 1774 to 1787',
        'Explain why Philadelphia was chosen as the meeting site for the Continental Congresses',
        'Analyze how informal spaces (taverns) and formal spaces (State House) worked together in the political process',
        'Evaluate the significance of the First Continental Congress meeting at Carpenters\' Hall rather than the State House',
      ],
      essentialQuestions: [
        'Why does location matter in politics? How did Philadelphia\'s geography, population, and institutions make it the center of the Revolution?',
        'What is the difference between formal and informal political spaces? What happened at City Tavern that could not happen in Independence Hall?',
      ],
      materials: [
        'Period map of Philadelphia showing Independence Hall, Carpenters\' Hall, and City Tavern within two blocks of each other',
        'John Adams\'s diary entries describing Philadelphia and City Tavern (adapted)',
        'Thomas Jefferson\'s account of the Declaration debate (adapted)',
        'Timeline of congressional events in Philadelphia 1774–1787',
      ],
      activities: [
        {
          name: 'The Two-Block World',
          duration: '20 min',
          description:
            'Students examine the period map and plot walking distances between key sites. Discuss: why does physical proximity between formal and informal gathering spaces matter for political negotiation?',
        },
        {
          name: 'Who Was in the Room?',
          duration: '25 min',
          description:
            'Students analyze the roster of First Continental Congress delegates and identify colonies represented, occupations, and known political positions. Compare to Second Congress roster to trace how the body evolved.',
        },
        {
          name: 'Formal vs. Informal',
          duration: '20 min',
          description:
            'Using Adams\'s diary, students identify decisions made in formal session vs. agreements reached informally. Chart examples of each and discuss what this reveals about how political consensus forms.',
        },
        {
          name: 'Site Significance Ranking',
          duration: '25 min',
          description:
            'Groups rank the six Philadelphia sites by historical significance and defend their ranking using specific events. Present rankings and debate differences.',
        },
      ],
      assessment:
        'Short-answer: "Explain why the Continental Congress met in Philadelphia rather than another colonial city. Use at least three specific factors." Extension: compare Philadelphia\'s role to a modern capital city during a political crisis.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.3: Follow a sequence of events across multiple texts',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.Civ.1.6-8: Distinguish the powers and responsibilities of citizens, political parties, interest groups, and the media',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-pa-philadelphia' } },
    title: 'Occupation and Resistance: Philadelphia 1777–1778',
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary:
      'Students examine the British occupation of Philadelphia to analyze how civilian populations experience military occupation, how loyalist and patriot communities coexisted under occupation, and why holding a capital city did not translate into strategic victory for the British.',
    lessonData: {
      objectives: [
        'Describe the experience of Philadelphia civilians during the British occupation of 1777–78',
        'Analyze the contrast between British comfort in Philadelphia and Continental suffering at Valley Forge',
        'Evaluate why British control of Philadelphia failed to produce strategic results',
        'Assess the responses of different community groups — Quakers, loyalists, patriots, enslaved people — to occupation',
      ],
      essentialQuestions: [
        'What does "winning" look like in a war of popular will? Why did holding Philadelphia not win the war for Britain?',
        'How do civilian communities survive occupation? What choices did Philadelphia residents face in 1777–78?',
        'What is the strategic difference between capturing a capital and defeating an army?',
      ],
      materials: [
        'Elizabeth Drinker\'s diary entries during occupation (Quaker perspective, adapted)',
        'Howe\'s correspondence defending the Philadelphia strategy (adapted)',
        'Washington\'s letters from Valley Forge describing supply shortages (adapted)',
        'List of loyalist properties confiscated after British evacuation',
        'Map of British troop positions in Philadelphia during occupation',
      ],
      activities: [
        {
          name: 'Civilian Voices',
          duration: '30 min',
          description:
            'Students read diary excerpts from different Philadelphia residents during occupation (Quaker, loyalist, patriot). They create a comparison chart of concerns, strategies, and outcomes for each group.',
        },
        {
          name: 'The Mischianza Problem',
          duration: '25 min',
          description:
            'Students read a description of the lavish farewell party British officers threw for Howe in May 1778, then connect it to Washington\'s Valley Forge letters written the same month. Discuss what the contrast reveals about each side\'s position.',
        },
        {
          name: 'Strategic Assessment',
          duration: '35 min',
          description:
            'Students act as strategic advisors to the British War Office in early 1778. Using available evidence, they assess whether the Philadelphia occupation should continue or forces should be concentrated elsewhere. Present recommendations with reasoning.',
        },
        {
          name: 'After the Redcoats Leave',
          duration: '30 min',
          description:
            'Students examine what happened in Philadelphia after the British evacuation in June 1778: loyalist persecution, property confiscation, political reintegration. Discuss the costs of occupation for civilian communities on both sides.',
        },
      ],
      assessment:
        'Analytical essay (800–1100 words): "Why did the British occupation of Philadelphia fail to achieve its strategic purpose? Use evidence from military, political, and civilian perspectives." Must engage with both British and American decision-making.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors for how they treat the same historical event',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.5.9-12: Explain how and why perspectives of people have changed over time',
        'D2.His.9.9-12: Analyze the relationship between historical sources and secondary interpretations',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// VALLEY FORGE
// ============================================================================

export const valleyForgePlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-valley-forge-visitor-center',
    name: 'Valley Forge National Historical Park Visitor Center',
    placeType: 'MUSEUM',
    description:
      'Primary orientation point for Valley Forge NHP, with exhibits covering the 1777–78 winter encampment, von Steuben\'s training program, supply breakdowns, and the army\'s transformation. The center houses artifacts including period weapons, camp equipment, and personal items from Continental soldiers. A twelve-minute film provides essential narrative context before exploring the 3,500-acre park.',
    lat: 40.1007,
    lng: -75.3944,
    address: '1400 N Outer Line Dr, King of Prussia, PA 19406',
    hours: 'Daily 9am–5pm',
    admission: 'Free',
    website: 'https://www.nps.gov/vafo/index.htm',
    town: { connect: { id: 'us-pa-valley-forge' } },
  },
  {
    id: 'place-valley-forge-washington-hq',
    name: "Washington's Headquarters (Isaac Potts House)",
    placeType: 'HISTORIC_HOUSE',
    description:
      'The stone house Washington used as his headquarters during the Valley Forge encampment from December 1777 to June 1778. Built by ironmaster Isaac Potts, the structure is one of the few surviving buildings from the encampment period. Martha Washington joined him in February 1778. The house communicates the relative comfort of the commander\'s quarters in contrast to the huts where enlisted men lived.',
    lat: 40.0989,
    lng: -75.3945,
    address: 'Valley Forge NHP, PA 19482',
    hours: 'Daily; exterior always accessible, interior tours by ranger',
    admission: 'Free',
    website: 'https://www.nps.gov/vafo/learn/historyculture/washingtonshq.htm',
    town: { connect: { id: 'us-pa-valley-forge' } },
  },
  {
    id: 'place-valley-forge-grand-parade',
    name: 'Grand Parade Ground',
    placeType: 'LANDMARK',
    description:
      'The open field where Baron Friedrich von Steuben drilled Continental soldiers through the winter and spring of 1778, transforming a dispirited, undisciplined force into a professional army. Von Steuben devised and personally demonstrated a standardized system of drill, commands, and maneuver — first working with a model company of 100 men, then spreading the techniques through the entire army. The transformation was complete before the army marched out in June 1778, evident at the Battle of Monmouth.',
    lat: 40.1012,
    lng: -75.3820,
    address: 'Valley Forge NHP, PA 19482',
    town: { connect: { id: 'us-pa-valley-forge' } },
  },
  {
    id: 'place-valley-forge-memorial-arch',
    name: 'National Memorial Arch',
    placeType: 'MONUMENT',
    description:
      'Triumphal arch erected 1917, modeled on the Arch of Titus in Rome, commemorating the sacrifice and perseverance of the Continental Army at Valley Forge. The arch bears inscriptions including Washington\'s order of the day praising the soldiers\' fortitude. It stands at the entrance to the Grand Parade ground and serves as the visual focal point of the park\'s commemorative landscape.',
    lat: 40.1023,
    lng: -75.3865,
    address: 'Valley Forge NHP, PA 19482',
    town: { connect: { id: 'us-pa-valley-forge' } },
  },
  {
    id: 'place-valley-forge-muhlenberg-huts',
    name: 'Muhlenberg Brigade Hut Replicas',
    placeType: 'LANDMARK',
    description:
      'Reconstructed soldier huts based on Washington\'s order specifying dimensions: 14 by 16 feet, housing twelve men, with wooden bunks, a fireplace, and a mud-and-straw chimney. Walking through the hut rows communicates the scale of the encampment — nearly 12,000 soldiers built approximately 1,500 such structures in the first weeks after arrival.',
    lat: 40.0952,
    lng: -75.3791,
    address: 'Valley Forge NHP, PA 19482',
    town: { connect: { id: 'us-pa-valley-forge' } },
  },
  {
    id: 'place-valley-forge-artillery-park',
    name: 'Artillery Park',
    placeType: 'LANDMARK',
    description:
      'The area where Henry Knox positioned Continental artillery during the encampment, protecting the army\'s eastern approaches. Knox organized and maintained the army\'s guns through the winter. Replica cannon mark the artillery positions. The park also interprets Knox\'s role in building the Continental artillery corps as a professional branch.',
    lat: 40.0978,
    lng: -75.3855,
    address: 'Valley Forge NHP, PA 19482',
    town: { connect: { id: 'us-pa-valley-forge' } },
  },
];

export const valleyForgeAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-valley-forge-nathanael-greene-qm',
    name: 'Nathanael Greene Appointed Quartermaster General',
    startDate: new Date('1778-03-02'),
    datePrecision: 'DAY',
    summary:
      'Washington appointed Nathanael Greene as Quartermaster General on March 2, 1778, a position Greene accepted reluctantly. Greene immediately reorganized supply chains, established forward depots, and used his personal relationships with state officials to break the logistical deadlock starving the army. Within weeks, food and forage began arriving consistently. Greene\'s administrative work was as consequential as any battlefield victory: without it, the army that left Valley Forge in June 1778 could not have fought.',
    significanceWeight: 87,
    lat: 40.1007,
    lng: -75.3944,
    town: { connect: { id: 'us-pa-valley-forge' } },
  },
  {
    id: 'event-valley-forge-martha-washington-arrives',
    name: 'Martha Washington Arrives at Valley Forge',
    startDate: new Date('1778-02-10'),
    datePrecision: 'MONTH',
    summary:
      'Martha Washington arrived at Valley Forge in February 1778 and remained through the encampment, organizing nursing care for sick soldiers, mending clothing, and sustaining morale among officers\' wives and the troops. Her presence was a deliberate signal: if the general\'s wife could endure the encampment, the army could too. She organized inoculation campaigns against smallpox and kept headquarters functioning as a social and political hub during the most difficult weeks.',
    significanceWeight: 74,
    lat: 40.0989,
    lng: -75.3945,
    town: { connect: { id: 'us-pa-valley-forge' } },
  },
];

export const valleyForgeLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-pa-valley-forge' } },
    title: 'Forging an Army: Von Steuben and the Transformation at Valley Forge',
    gradeRange: '6-8',
    estimatedDuration: '2 class periods',
    summary:
      'Students examine how Baron von Steuben transformed the Continental Army through systematic training, exploring what professional military training means, how it was implemented under difficult conditions, and why the transformation mattered at the Battle of Monmouth and beyond.',
    lessonData: {
      objectives: [
        'Describe the condition of the Continental Army on arrival at Valley Forge in December 1777',
        "Explain von Steuben's training method, including the model company approach and standardized drill",
        "Analyze the evidence of transformation in soldiers' performance at the Battle of Monmouth (June 1778)",
        'Evaluate the role of individual leadership in institutional change',
      ],
      essentialQuestions: [
        'What does it mean to "professionalize" an army? What specific skills and behaviors did von Steuben teach?',
        'How do you train an army when conditions make training almost impossible?',
      ],
      materials: [
        'Von Steuben\'s "Regulations for the Order and Discipline of the Troops of the United States" (excerpts, adapted)',
        'Soldier diary entries before and after von Steuben\'s training program (adapted)',
        'Comparison of Continental Army performance at Brandywine (1777) and Monmouth (1778)',
        'Map of Grand Parade ground showing drill formation positions',
      ],
      activities: [
        {
          name: 'Before and After',
          duration: '20 min',
          description:
            'Students read two soldier diary excerpts — one from December 1777 describing chaos and despair, one from May 1778 describing organized drill and improving morale. They identify specific differences and hypothesize what caused the change.',
        },
        {
          name: 'The Model Company',
          duration: '25 min',
          description:
            "Students read about von Steuben's method: starting with 100 selected men, drilling personally, then having trained soldiers teach others. Students diagram the teaching cascade and discuss why this approach was faster than having officers teach directly.",
        },
        {
          name: 'What Training Teaches',
          duration: '25 min',
          description:
            'Students read excerpts from the Regulations and identify what specific behaviors were being standardized. Discuss: why does marching in formation matter in 18th-century battle?',
        },
        {
          name: 'Monmouth Test',
          duration: '20 min',
          description:
            'Students read a summary of the Battle of Monmouth (June 28, 1778) and identify specific moments where Continental discipline held under British attack. Connect to training at Valley Forge.',
        },
      ],
      assessment:
        "Structured paragraph (PEEL format): \"How did Baron von Steuben transform the Continental Army at Valley Forge? Use specific evidence from training documents and battle performance.\"",
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.8: Distinguish among fact, opinion, and reasoned judgment in a text',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.14.6-8: Explain multiple causes and effects of events and developments in the past',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-pa-valley-forge' } },
    title: 'Logistics and War: Why the Army Almost Died Before Fighting',
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary:
      'Students examine the supply crisis at Valley Forge to understand how logistics shapes military outcomes. Using primary accounts of starvation, quartermaster failures, Greene\'s reforms, and the political context of congressional dysfunction, students analyze how an army nearly collapsed without fighting a battle.',
    lessonData: {
      objectives: [
        'Identify the specific supply failures — food, clothing, wagons, forage — that produced the Valley Forge crisis',
        'Explain the political causes of the supply breakdown, including congressional dysfunction and state competition',
        "Analyze how Greene's quartermaster reforms addressed each failure systematically",
        'Evaluate the relationship between logistics and battlefield outcomes using Valley Forge and Monmouth as case studies',
      ],
      essentialQuestions: [
        'Can an army be defeated without fighting? What does Valley Forge reveal about the relationship between logistics and combat power?',
        'Who was responsible for the supply crisis — generals, Congress, state governments, contractors?',
        'What did Nathanael Greene do differently, and why did it work when previous systems failed?',
      ],
      materials: [
        "Washington's letters to Congress describing starvation and near-mutiny (December 1777–January 1778, adapted)",
        'Congressional committee report on army supply failures (adapted)',
        "Greene's reorganization plan for the Quartermaster Department (adapted)",
        'Mortality data: estimated deaths at Valley Forge vs. battlefield casualties',
        'Map of supply routes to Valley Forge showing distances and terrain obstacles',
      ],
      activities: [
        {
          name: 'The Anatomy of Failure',
          duration: '30 min',
          description:
            "Students read Washington's December 1777 letters and create a categorized list of specific failures: food shortages, clothing deficits, transportation breakdowns, forage problems. For each, they identify the systemic cause.",
        },
        {
          name: 'Political Dysfunction',
          duration: '30 min',
          description:
            'Students examine the congressional committee report on supply failures and map the political obstacles: state jealousies over impressment, contractor corruption, overlapping jurisdictions.',
        },
        {
          name: "Greene's Fixes",
          duration: '30 min',
          description:
            "Students read Greene's reorganization plan and map each reform to the failures identified earlier. Evaluate which problems he solved, which he worked around, and which remained unresolved.",
        },
        {
          name: 'The Cost in Lives',
          duration: '30 min',
          description:
            'Students examine mortality data: approximately 2,000 soldiers died at Valley Forge, nearly all from disease and exposure rather than combat. Compare to battle casualties at Brandywine (200 killed) and Monmouth (70 killed).',
        },
      ],
      assessment:
        'Research essay (1,000–1,300 words): "Was the Valley Forge supply crisis a military failure, a political failure, or a systemic failure? Defend your interpretation using specific evidence."',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in several primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.2: Write informative/explanatory texts, including narration of historical events',
      ],
      c3Framework: [
        'D2.His.14.9-12: Analyze multiple and complex causes and effects of events in the past',
        'D2.His.9.9-12: Analyze the relationship between historical sources and secondary interpretations',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const valleyForgeAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-pa-germantown',
    linkType: 'SHARED_EVENT',
    reason:
      'The Battle of Germantown (October 4, 1777) preceded the Valley Forge encampment by just nine weeks. Washington\'s army retreated after Germantown and marched directly to Valley Forge. The two sites represent the failure and subsequent recovery of the Continental Army during the same campaign season.',
    weight: 90,
  },
];

// ============================================================================
// YORK, PA
// ============================================================================

export const yorkPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-york-colonial-courthouse',
    name: 'York County Colonial Court House',
    placeType: 'GOVERNMENT',
    description:
      "Reconstructed colonial court house on the site where the Continental Congress met from September 1777 to June 1778 after fleeing Philadelphia. It was here that Congress adopted the Articles of Confederation on November 15, 1777 — America's first constitution — and received official news of the French alliance in May 1778. The building served as the seat of the Continental government during one of the war's most consequential administrative periods.",
    lat: 39.9626,
    lng: -76.7277,
    address: '205 W Market St, York, PA 17401',
    hours: 'Tue–Sat 10am–4pm',
    admission: 'Adults $8, children $5',
    website: 'https://www.yorkheritage.org',
    town: { connect: { id: 'us-pa-york' } },
  },
  {
    id: 'place-york-gates-house',
    name: 'Gates House',
    placeType: 'HISTORIC_HOUSE',
    description:
      'The house used as headquarters by General Horatio Gates during the period when he commanded the Northern Department and was positioned as a potential rival to Washington. The Gates House is directly connected to the Conway Cabal — the behind-the-scenes effort to replace Washington with Gates as commander-in-chief. Exhibits interpret Gates\'s role at Saratoga, his political ambitions, and the internal politics of the Continental Army command structure.',
    lat: 39.9637,
    lng: -76.7269,
    address: '157 W Market St, York, PA 17401',
    hours: 'Tue–Sat 10am–4pm',
    admission: 'Included with Colonial Court House admission',
    website: 'https://www.yorkheritage.org',
    town: { connect: { id: 'us-pa-york' } },
  },
  {
    id: 'place-york-golden-plough-tavern',
    name: 'Golden Plough Tavern',
    placeType: 'TAVERN',
    description:
      'One of the oldest surviving structures in York, built c. 1741 by Martin Eichelberger in a German half-timber style. The tavern served as a gathering place for York\'s German-speaking community and congressional visitors during 1777–78. Its architecture reflects the German immigrant culture that characterized York\'s founding population. The building is part of the York Heritage Trust complex adjacent to the Colonial Court House.',
    lat: 39.9631,
    lng: -76.7273,
    address: '157 W Market St, York, PA 17401',
    hours: 'Tue–Sat 10am–4pm',
    admission: 'Included with Colonial Court House admission',
    town: { connect: { id: 'us-pa-york' } },
  },
  {
    id: 'place-york-bonham-house',
    name: 'Bonham House',
    placeType: 'HISTORIC_HOUSE',
    description:
      "Federal-period townhouse associated with York's post-Revolutionary civic development, now interpreted as part of the York County History Center. The house documents York's transition from a wartime capital to a prosperous Pennsylvania market town in the early republic. Exhibits include period furnishings, trade records, and artifacts reflecting the German-English cultural synthesis that characterized York County.",
    lat: 39.9629,
    lng: -76.7265,
    address: '152 E Market St, York, PA 17401',
    hours: 'Tue–Sat 10am–4pm',
    admission: 'Adults $8, children $5',
    town: { connect: { id: 'us-pa-york' } },
  },
  {
    id: 'place-york-history-center',
    name: 'York County History Center',
    placeType: 'MUSEUM',
    description:
      "Comprehensive museum interpreting York County history from Native American settlement through the Revolutionary War, Civil War, and industrial era. Revolutionary War collections include artifacts from the Continental Congress's York period, Articles of Confederation documentation, and material culture of the German-American community. The center manages the Colonial Court House, Gates House, and Golden Plough Tavern as a connected historic campus.",
    lat: 39.9618,
    lng: -76.7255,
    address: '250 E Market St, York, PA 17403',
    hours: 'Tue–Sat 9am–5pm',
    admission: 'Adults $8, children $5',
    website: 'https://www.yorkheritage.org',
    town: { connect: { id: 'us-pa-york' } },
  },
  {
    id: 'place-york-friends-meeting-house',
    name: 'York Friends Meeting House',
    placeType: 'CHURCH',
    description:
      "Quaker meeting house serving York's Society of Friends community during the Revolutionary period. Quakers in York faced the tension between their pacifist principles and the community pressure to support the war effort. Some York Quakers were disowned by their meetings for participating in militia service; others were suspected of loyalism for their refusal to take loyalty oaths. The meeting house represents the complex religious landscape of Revolutionary Pennsylvania.",
    lat: 39.9622,
    lng: -76.7260,
    address: 'W Philadelphia St, York, PA 17401',
    town: { connect: { id: 'us-pa-york' } },
  },
];

export const yorkAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-york-articles-sent-to-states',
    name: 'Articles of Confederation Sent to States for Ratification',
    startDate: new Date('1777-11-17'),
    datePrecision: 'DAY',
    summary:
      "Two days after adopting the Articles of Confederation on November 15, 1777, the Continental Congress sent the document to the states for ratification. The Articles created the first formal structure of American national government — a confederation of sovereign states with a weak central Congress and no executive or judicial branches. Maryland's refusal to ratify until states surrendered western land claims delayed final ratification until March 1, 1781. The document's weaknesses led directly to the Constitutional Convention of 1787.",
    significanceWeight: 88,
    lat: 39.9626,
    lng: -76.7277,
    town: { connect: { id: 'us-pa-york' } },
  },
  {
    id: 'event-york-french-alliance-celebrated',
    name: 'York Celebrates News of the French Alliance',
    startDate: new Date('1778-05-04'),
    datePrecision: 'DAY',
    summary:
      'On May 4, 1778, the Continental Congress in York formally ratified the treaties of alliance and commerce with France. The alliance transformed the war: France would provide armies, a navy, and subsidies that Britain could not match on American soil alone. Congress ordered a day of celebration with cannon salutes and thanksgiving services. The news arrived while Washington\'s army was completing its training at Valley Forge, timing that proved providential.',
    significanceWeight: 86,
    lat: 39.9626,
    lng: -76.7277,
    town: { connect: { id: 'us-pa-york' } },
  },
];

export const yorkLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-pa-york' } },
    title: "America's First Constitution: The Articles of Confederation at York",
    gradeRange: '8-10',
    estimatedDuration: '2 class periods',
    summary:
      "Students examine the Articles of Confederation — written and adopted in York, PA — as America's first attempt at national government. They analyze the document's structure, identify its deliberate weaknesses rooted in colonial experience with British power, and trace how those weaknesses led to the Constitutional Convention.",
    lessonData: {
      objectives: [
        'Describe the structure of government created by the Articles of Confederation',
        'Explain why the founders deliberately created a weak central government in 1777',
        'Identify specific failures of the Articles that emerged between 1781 and 1787',
        'Analyze the relationship between the Articles and the U.S. Constitution as a problem-solution pair',
      ],
      essentialQuestions: [
        'Why would founders who had just fought for national independence create a government too weak to govern effectively?',
        'What does it reveal about the founders\' fears that they gave Congress no power to tax or raise an army directly?',
        'How did the failures of the Articles make the Constitution possible?',
      ],
      materials: [
        'Articles of Confederation (key articles, adapted for accessibility)',
        'U.S. Constitution comparison chart: Article I powers vs. Articles powers',
        "Shays' Rebellion summary — the 1786 crisis that exposed Articles weaknesses",
        "James Madison's notes on why a new constitution was necessary (adapted)",
      ],
      activities: [
        {
          name: 'Document Analysis',
          duration: '25 min',
          description:
            'Students read key Articles provisions — no executive, no power to tax, 9-of-13 supermajority required, unanimous consent for amendments — and for each, hypothesize what problem it was designed to prevent.',
        },
        {
          name: 'Governing in Crisis',
          duration: '25 min',
          description:
            'Students read the Valley Forge supply crisis and identify which Articles limitations contributed: Congress could not compel states to contribute troops or funds; could not regulate interstate commerce to enable procurement.',
        },
        {
          name: "Shays' Rebellion",
          duration: '20 min',
          description:
            "Students read a summary of the 1786–87 Massachusetts debt rebellion and identify what a functional national government would have done that the Articles government could not. Connect to Madison's decision to convene a constitutional convention.",
        },
        {
          name: 'Drafting Fixes',
          duration: '20 min',
          description:
            'Groups identify three Articles weaknesses and draft constitutional language to address each. Compare to actual Constitution provisions.',
        },
      ],
      assessment:
        'Comparative analysis (two paragraphs): "The Articles of Confederation and the Constitution reflect two different theories of government. What is each theory, and what experiences shaped each?" Use specific provisions as evidence.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.9: Analyze the relationship between a primary and secondary source on the same topic',
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis',
      ],
      c3Framework: [
        "D2.Civ.2.6-8: Explain the roles of political, civil, and economic organizations in shaping people's lives",
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-pa-york' } },
    title: 'Command and Politics: The Conway Cabal and Military Governance',
    gradeRange: '10-12',
    estimatedDuration: '2 class periods',
    summary:
      'Students examine the Conway Cabal — the behind-the-scenes effort to replace Washington with Gates, centered on York during 1777–78 — to analyze the relationship between military command and political authority in a republic.',
    lessonData: {
      objectives: [
        'Explain the circumstances and participants of the Conway Cabal',
        'Analyze why some members of Congress and the military preferred Gates to Washington after Saratoga',
        "Evaluate how Washington's handling of the Cabal reflected both political skill and institutional principle",
        'Connect the episode to broader questions about civilian control of the military in a republic',
      ],
      essentialQuestions: [
        'Should a wartime government be able to replace its commanding general for political reasons? What are the dangers on both sides?',
        'How did Washington survive a serious political challenge without openly fighting it?',
        'What does the Conway Cabal reveal about the relationship between military success and political survival?',
      ],
      materials: [
        "Conway's letter to Gates describing Washington's \"weak generalship\" (adapted)",
        "Washington's letter confronting Conway with knowledge of the letter (adapted)",
        'Congressional debate excerpts on the Board of War reorganization (adapted)',
        "Gates's political correspondence during 1777–78 (adapted)",
      ],
      activities: [
        {
          name: 'Mapping the Network',
          duration: '25 min',
          description:
            'Students read the correspondence and identify participants: Conway, Gates, Thomas Mifflin, Benjamin Rush, members of Congress. They map the network and trace how information flowed.',
        },
        {
          name: 'The Case Against Washington',
          duration: '20 min',
          description:
            "Students read the critics' arguments: defeats at Brandywine and Germantown vs. Gates's victory at Saratoga. They evaluate whether the comparison was fair and what the critics were missing.",
        },
        {
          name: "Washington's Response",
          duration: '25 min',
          description:
            "Students read Washington's letters dealing with the Cabal and analyze his strategy: confront directly without overreacting, let allies defend him in Congress, maintain the loyalty of his officer corps.",
        },
        {
          name: 'Civilian Control Debate',
          duration: '20 min',
          description:
            'Students discuss: does Congress have the right to replace a commander-in-chief during wartime? Connect to modern debates about presidential authority over military command.',
        },
      ],
      assessment:
        'Position paper (600–800 words): "Was the Conway Cabal a legitimate exercise of civilian oversight or a dangerous political intrigue? Defend your position." Must engage with evidence from multiple perspectives.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors treating the same historical event',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.Civ.7.9-12: Apply civic virtues and democratic principles in school and community settings',
        'D2.His.5.9-12: Explain how and why perspectives of people have changed over time',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const yorkAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-pa-philadelphia',
    linkType: 'SHARED_EVENT',
    reason:
      'The Continental Congress fled Philadelphia for York in September 1777 when British forces occupied the capital. York served as the alternative seat of American government for nine months, and Congress returned to Philadelphia in June 1778 after the British evacuation. The two cities represent the same governing institution operating under radically different conditions.',
    weight: 94,
  },
];

// ============================================================================
// GERMANTOWN
// ============================================================================

export const germantownPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-germantown-cliveden',
    name: 'Cliveden (Chew House)',
    placeType: 'HISTORIC_HOUSE',
    description:
      'Georgian mansion built 1767 by Pennsylvania Chief Justice Benjamin Chew. On October 4, 1777, it became the pivot point of the Battle of Germantown when a British detachment of roughly 120 soldiers barricaded themselves inside and refused to surrender. Continental forces under General Henry Knox spent critical time attempting to reduce the fortified house with artillery, alerting the main British force and contributing to the battle\'s collapse. The bullet scars and cannonball damage to the exterior walls are still visible. Now a National Historic Landmark managed by the National Trust for Historic Preservation.',
    lat: 40.0556,
    lng: -75.1721,
    address: '6401 Germantown Ave, Philadelphia, PA 19144',
    hours: 'Fri–Sun 12pm–4pm; tours on the hour',
    admission: 'Adults $10, students $7',
    website: 'https://www.cliveden.org',
    town: { connect: { id: 'us-pa-germantown' } },
  },
  {
    id: 'place-germantown-deshler-morris-house',
    name: 'Deshler-Morris House (Germantown White House)',
    placeType: 'HISTORIC_HOUSE',
    description:
      "Federal-style house in Germantown that served as George Washington's summer residence during the yellow fever epidemic of 1793, making it the earliest documented use of an out-of-city presidential retreat. Washington stayed here twice — August–September and October 1793 — while Philadelphia was devastated by epidemic. British General William Howe used the same house as his headquarters during the 1777 occupation of Germantown. The house thus hosted both commanding generals of the Revolution's Philadelphia campaign.",
    lat: 40.0544,
    lng: -75.1716,
    address: '5442 Germantown Ave, Philadelphia, PA 19144',
    hours: 'Fri–Sun 1pm–4pm; NPS ranger-led tours',
    admission: 'Free',
    website: 'https://www.nps.gov/inde/planyourvisit/deshlermorrishouse.htm',
    town: { connect: { id: 'us-pa-germantown' } },
  },
  {
    id: 'place-germantown-battle-site-marker',
    name: 'Battle of Germantown Interpretive Site',
    placeType: 'BATTLEFIELD',
    description:
      'The Battle of Germantown (October 4, 1777) was fought along the length of Germantown Avenue, now an urban street. NPS markers along the avenue mark key positions: the American approach routes, the Chew House defensive stand, the American flanking columns that lost coordination in the morning fog, and the British counterattack positions. The battlefield is unique as an urban palimpsest — the historical landscape survives beneath and alongside modern Philadelphia neighborhoods.',
    lat: 40.0556,
    lng: -75.1721,
    address: 'Germantown Ave, Philadelphia, PA 19144',
    town: { connect: { id: 'us-pa-germantown' } },
  },
  {
    id: 'place-germantown-stenton',
    name: 'Stenton (Logan House)',
    placeType: 'HISTORIC_HOUSE',
    description:
      "Colonial mansion built 1723–30 by James Logan, William Penn's secretary and a prominent Philadelphia Quaker. During the Germantown campaign, the house was used briefly as General Washington's headquarters before the battle, and subsequently as British General Howe's headquarters after the British victory. Stenton is one of the oldest surviving colonial mansions in Pennsylvania.",
    lat: 40.0380,
    lng: -75.1428,
    address: '4601 N 18th St, Philadelphia, PA 19140',
    hours: 'Tue–Sat 10am–4pm',
    admission: 'Adults $8, students $5',
    website: 'https://www.stenton.org',
    town: { connect: { id: 'us-pa-germantown' } },
  },
  {
    id: 'place-germantown-mennonite-meeting-house',
    name: 'Germantown Mennonite Meeting House',
    placeType: 'CHURCH',
    description:
      'Built 1770, the oldest Mennonite meeting house in continuous use in North America. The Germantown Mennonite community produced the first formal protest against slavery in the colonies — the 1688 Germantown Petition — and maintained pacifist principles through the Revolution. The meeting house represents Germantown\'s German religious community whose presence shaped the character of the town and its response to the war.',
    lat: 40.0350,
    lng: -75.1705,
    address: '6133 Germantown Ave, Philadelphia, PA 19144',
    hours: 'By appointment; open during special events',
    admission: 'Free',
    town: { connect: { id: 'us-pa-germantown' } },
  },
  {
    id: 'place-germantown-johnson-house',
    name: 'Johnson House Historic Site',
    placeType: 'HISTORIC_HOUSE',
    description:
      'Eighteenth-century Quaker farmhouse that served as an Underground Railroad station in the antebellum period. During the Revolution, the Johnson family — Quaker pacifists — navigated the competing pressures of British occupation and patriot community expectations. The house connects Germantown\'s Revolutionary War history to its later role in the struggle against slavery, tracing a through-line of the Quaker community\'s engagement with moral and political conflicts across two centuries.',
    lat: 40.0578,
    lng: -75.1697,
    address: '6306 Germantown Ave, Philadelphia, PA 19144',
    hours: 'Thur–Sat 12pm–4pm',
    admission: 'Adults $8, students $5',
    website: 'https://www.johnsonhouse.org',
    town: { connect: { id: 'us-pa-germantown' } },
  },
];

export const germantownAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-germantown-battle-planned',
    name: 'Washington Plans the Germantown Counterattack',
    startDate: new Date('1777-10-01'),
    datePrecision: 'DAY',
    summary:
      'Following his defeat at Brandywine and the British occupation of Philadelphia, Washington developed an ambitious four-column plan to attack the British encampment at Germantown on October 4, 1777. The plan called for coordinated night marches by four separate columns converging simultaneously on the British position. The attack demonstrated Washington\'s offensive aggression even in defeat: rather than retreat to winter quarters, he sought to retake the initiative and boost morale before the encampment season began.',
    significanceWeight: 79,
    lat: 40.0556,
    lng: -75.1721,
    town: { connect: { id: 'us-pa-germantown' } },
  },
  {
    id: 'event-germantown-french-diplomacy',
    name: 'Battle of Germantown Impresses French Court',
    startDate: new Date('1777-11-01'),
    datePrecision: 'MONTH',
    summary:
      'News of the Battle of Germantown reached France in November 1777 and had a significant effect on French calculations about American military viability. Though Washington lost the battle, the French court was impressed that the Continental Army could mount a complex, multi-column offensive against a professional British force just weeks after major defeats. Combined with Saratoga, Germantown helped tip French opinion toward formal alliance. Franklin later noted that Germantown did as much diplomatic work as Saratoga.',
    significanceWeight: 83,
    lat: 40.0556,
    lng: -75.1721,
    town: { connect: { id: 'us-pa-germantown' } },
  },
];

export const germantownLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-pa-germantown' } },
    title: 'Fog of War: Why the Battle of Germantown Failed',
    gradeRange: '7-9',
    estimatedDuration: '2 class periods',
    summary:
      "Students analyze the Battle of Germantown as a case study in military planning and the limits of coordination. Using Washington's four-column plan, the Chew House incident, and the fog that disrupted American formations, students examine how well-designed plans encounter real-world friction.",
    lessonData: {
      objectives: [
        "Describe Washington's four-column battle plan and explain its tactical logic",
        'Identify three specific factors that caused the American attack to fail',
        'Analyze how the Chew House incident diverted critical forces and time',
        "Evaluate Washington's decision to attack at Germantown — was it a strategic mistake or a reasonable calculated risk?",
      ],
      essentialQuestions: [
        'What is "friction" in military operations? What makes coordinated plans fail even when participants try to execute them?',
        'Was Washington right to attack at Germantown? What would have happened if he had not tried?',
        'How does the physical environment — fog, terrain, architecture — shape the outcome of a battle?',
      ],
      materials: [
        "Washington's operational orders for the Germantown attack (adapted)",
        'Period map of Germantown showing the four column routes',
        "Knox's account of the Chew House decision (adapted)",
        "Sullivan's after-action report describing the fog and confusion (adapted)",
      ],
      activities: [
        {
          name: 'Plan the Attack',
          duration: '20 min',
          description:
            "Students read Washington's orders and mark the four column routes on the period map. They identify what must go right for the plan to succeed and where coordination failures could occur.",
        },
        {
          name: 'The Chew House Decision',
          duration: '25 min',
          description:
            "Students read Knox's account of the decision to stop and reduce Cliveden. They evaluate: should the main force have bypassed the house, or was stopping tactically necessary?",
        },
        {
          name: 'The Fog Problem',
          duration: '20 min',
          description:
            "Students read Sullivan's account of friendly fire in the fog and the disintegration of unit coordination. They identify which elements of the plan depended on visibility and timing.",
        },
        {
          name: 'Was It Worth It?',
          duration: '25 min',
          description:
            "Students read a brief account of Germantown's diplomatic impact in France. Debate: given the tactical failure, was the attack strategically worthwhile?",
        },
      ],
      assessment:
        'Paragraph response: "Identify the single most important factor in the American defeat at Germantown and explain your reasoning using specific evidence."',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information with other information in print and digital texts',
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis',
      ],
      c3Framework: [
        'D2.His.14.6-8: Explain multiple causes and effects of events and developments in the past',
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-pa-germantown' } },
    title: 'The 1688 Germantown Petition: The First Anti-Slavery Protest in America',
    gradeRange: '8-12',
    estimatedDuration: '2 class periods',
    summary:
      "Students examine the 1688 Germantown Quaker Petition — the first formal written protest against slavery in colonial America — to analyze how Germantown's religious community confronted the moral contradictions of colonial society decades before the Revolution, and how those arguments evolved through the Revolutionary era.",
    lessonData: {
      objectives: [
        'Identify the authors and community context of the 1688 Germantown Petition',
        "Analyze the petition's moral arguments against slavery using the document's own language",
        'Trace how anti-slavery arguments evolved from 1688 through the Revolutionary era',
        "Evaluate the relationship between the Revolution's rhetoric of liberty and the persistence of slavery",
      ],
      essentialQuestions: [
        'What arguments did the 1688 petitioners use against slavery? Why were those arguments ignored at the time?',
        "How did the Revolution's language of liberty both advance and expose the contradiction of slavery?",
        'Why did Pennsylvania become the first state to begin abolishing slavery (1780)?',
      ],
      materials: [
        '1688 Germantown Petition (original text with glossary)',
        'Pennsylvania Act for the Gradual Abolition of Slavery (1780, key provisions)',
        "John Woolman's abolitionist writings (excerpts, adapted)",
        'Timeline: Germantown Petition (1688) to Pennsylvania abolition (1780)',
      ],
      activities: [
        {
          name: 'Reading the Petition',
          duration: '25 min',
          description:
            "Students read the 1688 petition and identify its three main arguments: the Golden Rule argument, the argument from European norms, and the argument that slavery undermines Quaker missionary credibility. They evaluate which argument is strongest.",
        },
        {
          name: 'Why It Was Ignored',
          duration: '20 min',
          description:
            "Students read a brief account of the Philadelphia Yearly Meeting's response — tabling the petition without action — and discuss why even Quakers resisted the argument in 1688.",
        },
        {
          name: 'Revolution and Contradiction',
          duration: '25 min',
          description:
            'Students read excerpts from the Declaration of Independence ("all men are created equal") alongside the 1780 Pennsylvania abolition act. They analyze how the same revolutionary language produced different outcomes in different states.',
        },
        {
          name: 'From 1688 to 1780',
          duration: '20 min',
          description:
            "Students trace the line from the 1688 petition through John Woolman's mid-century abolitionism to the 1780 act. What changed in 92 years?",
        },
      ],
      assessment:
        "Essay (700–1,000 words): \"How did the Germantown community's 1688 anti-slavery petition contribute, directly or indirectly, to Pennsylvania's 1780 Gradual Abolition Act? What factors explain the 92-year gap?\"",
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.8: Assess the extent to which reasoning and evidence support the claims in a primary source',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.5.9-12: Explain how and why perspectives of people have changed over time',
        'D2.Civ.10.9-12: Analyze the impact and the appropriate roles of personal interests and perspectives on the application of civic virtues, democratic principles, constitutional rights, and human rights',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const germantownAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-pa-philadelphia',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason:
      'Germantown was a distinct township six miles north of Philadelphia on the main road to the interior of Pennsylvania. In 1777, British forces occupied both locations simultaneously — Philadelphia as their base, Germantown as their forward encampment. The two sites are inseparable in the 1777 campaign narrative.',
    weight: 91,
  },
];

// ============================================================================
// CARLISLE
// ============================================================================

export const carlislePlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-carlisle-barracks',
    name: 'Carlisle Barracks',
    placeType: 'LANDMARK',
    description:
      'Established 1757, Carlisle Barracks is the oldest continuously active U.S. Army installation. During the Revolution it served as a critical supply depot and arms manufacturing center for the Continental Army, producing muskets and artillery for forces in the western Pennsylvania frontier. The barracks housed Hessian prisoners of war after Trenton and Saratoga, and was used as a staging area for General Sullivan\'s 1779 expedition against the Iroquois Confederacy. Today it houses the U.S. Army War College.',
    lat: 40.2043,
    lng: -77.1719,
    address: '122 Forbes Ave, Carlisle, PA 17013',
    hours: 'Visitor access to public areas; Army War College Museum open Mon–Fri 9am–4pm',
    admission: 'Free (ID required for base access)',
    website: 'https://ahec.armywarcollege.edu',
    town: { connect: { id: 'us-pa-carlisle' } },
  },
  {
    id: 'place-carlisle-molly-pitcher-well',
    name: 'Molly Pitcher Well and Home Site',
    placeType: 'LANDMARK',
    description:
      'Marker at the site traditionally associated with Mary Ludwig Hays, the Carlisle-born woman who became famous as "Molly Pitcher" at the Battle of Monmouth (June 1778), where she carried water to artillerymen and, by tradition, took her husband\'s place at a cannon after he was wounded. Mary Ludwig Hays was a real Carlisle resident who received a Pennsylvania pension in 1822 for her Revolutionary War service. The well site and a bronze marker on West High Street commemorate her.',
    lat: 40.2018,
    lng: -77.1883,
    address: 'W High St, Carlisle, PA 17013',
    town: { connect: { id: 'us-pa-carlisle' } },
  },
  {
    id: 'place-carlisle-dickinson-college',
    name: 'Dickinson College',
    placeType: 'LANDMARK',
    description:
      'Founded 1783 — the year the Revolution ended — by Benjamin Rush, a signer of the Declaration of Independence, with support from John Dickinson, for whom it is named. Rush intended it as an institution to educate citizens for the new republic, emphasizing science and practical learning over classical curriculum. Dickinson College is among the oldest liberal arts colleges in the United States and the first college chartered in the new nation after independence.',
    lat: 40.2007,
    lng: -77.1956,
    address: '28 N College St, Carlisle, PA 17013',
    hours: 'Campus always accessible; Waidner-Spahr Library open to visitors by appointment',
    admission: 'Free',
    website: 'https://www.dickinson.edu',
    town: { connect: { id: 'us-pa-carlisle' } },
  },
  {
    id: 'place-carlisle-cumberland-county-historical-society',
    name: 'Cumberland County Historical Society',
    placeType: 'MUSEUM',
    description:
      "Museum and archive documenting Cumberland County's role in the Revolutionary War, including the Carlisle Barracks supply depot operations, Hessian prisoner of war records, frontier defense militia muster rolls, and Mary Ludwig Hays's pension records. Collections include period artifacts from the barracks, surveying maps of the western Pennsylvania frontier, and documentary evidence of Carlisle's role as the logistical gateway to the western settlements.",
    lat: 40.2017,
    lng: -77.1877,
    address: '21 N Pitt St, Carlisle, PA 17013',
    hours: 'Tue–Fri 10am–4pm, Sat 10am–3pm',
    admission: 'Adults $5, students $3',
    town: { connect: { id: 'us-pa-carlisle' } },
  },
  {
    id: 'place-carlisle-old-graveyard',
    name: 'Old Graveyard (First Presbyterian Church Cemetery)',
    placeType: 'CEMETERY',
    description:
      'Colonial-era cemetery adjacent to the First Presbyterian Church of Carlisle, containing graves of Revolutionary War veterans, militia officers, and local civic leaders. Mary Ludwig Hays (Molly Pitcher) is buried here. The graveyard reflects the Scots-Irish Presbyterian community that provided a significant portion of the Pennsylvania frontier militia. Her grave marker, erected in 1876, includes crossed cannons and a citation for Revolutionary War service.',
    lat: 40.2022,
    lng: -77.1878,
    address: 'E South St, Carlisle, PA 17013',
    hours: 'Daylight hours',
    admission: 'Free',
    town: { connect: { id: 'us-pa-carlisle' } },
  },
  {
    id: 'place-carlisle-hessian-guardhouse',
    name: 'Hessian Guardhouse Site',
    placeType: 'LANDMARK',
    description:
      'Site of the guardhouse and prisoner compound used to hold Hessian soldiers captured at Trenton (December 1776) and after Saratoga (October 1777). Carlisle held several hundred Hessian prisoners at various points, and many settled permanently in the Cumberland Valley after the war rather than return to Germany, contributing to the region\'s German-speaking population. A historical marker identifies the site on the Carlisle Barracks grounds.',
    lat: 40.2050,
    lng: -77.1730,
    address: 'Carlisle Barracks, Carlisle, PA 17013',
    town: { connect: { id: 'us-pa-carlisle' } },
  },
];

export const carlisleAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-carlisle-hessian-prisoners-arrive',
    name: 'Hessian Prisoners Arrive at Carlisle After Trenton',
    startDate: new Date('1777-01-15'),
    datePrecision: 'MONTH',
    summary:
      'Following the American victory at Trenton on December 26, 1776, approximately 900 Hessian prisoners were marched across New Jersey and Pennsylvania to interior holding areas, with Carlisle receiving a significant contingent. The prisoners were marched through Philadelphia for public display before continuing west. Many Hessians settled permanently in Pennsylvania after the war, contributing to the Cumberland Valley\'s German-speaking community.',
    significanceWeight: 72,
    lat: 40.2043,
    lng: -77.1719,
    town: { connect: { id: 'us-pa-carlisle' } },
  },
  {
    id: 'event-carlisle-sullivan-expedition-staging',
    name: 'Sullivan-Clinton Expedition Stages Through Carlisle',
    startDate: new Date('1779-05-01'),
    datePrecision: 'MONTH',
    summary:
      'In spring 1779, forces staging for the Sullivan-Clinton Expedition against the Iroquois Confederacy passed through Carlisle, using the barracks as a supply and equipment depot. Washington ordered the expedition to destroy Iroquois villages and food stores in retaliation for raids on Pennsylvania and New York frontier settlements. The expedition ultimately destroyed more than 40 Iroquois towns. Carlisle\'s position on the Great Wagon Road made it the primary logistics hub for western military operations throughout the war.',
    significanceWeight: 76,
    lat: 40.2043,
    lng: -77.1719,
    town: { connect: { id: 'us-pa-carlisle' } },
  },
];

export const carlisleLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-pa-carlisle' } },
    title: 'Molly Pitcher: History, Legend, and the Role of Women in the Revolution',
    gradeRange: '6-9',
    estimatedDuration: '2 class periods',
    summary:
      'Students examine the Mary Ludwig Hays story — documented history vs. legendary accretion — to analyze how historical memory is created, what real roles women played in the Continental Army, and how myths about individuals can both illuminate and obscure historical truth.',
    lessonData: {
      objectives: [
        'Distinguish between documented facts about Mary Ludwig Hays and later legendary additions',
        'Describe the actual roles women played in the Continental Army: camp followers, nurses, laundresses, water carriers',
        'Analyze how the "Molly Pitcher" legend developed over time and what needs it served',
        'Evaluate the tension between historical accuracy and inspiring historical narratives',
      ],
      essentialQuestions: [
        'What is the difference between a historical person and a historical legend? When does a legend become historically misleading?',
        'What roles did women actually play in the Revolutionary War, and why are those roles less celebrated than the legend?',
        'Why do societies create heroic legends? What purposes do they serve, and what do they obscure?',
      ],
      materials: [
        'Pennsylvania pension record for Mary Ludwig Hays (1822, adapted)',
        'Earliest accounts of "Molly Pitcher" at Monmouth — pension record vs. later 19th-century embellishments',
        'Period accounts of women camp followers and their roles (Joseph Plumb Martin memoir excerpt)',
        "Timeline of the Molly Pitcher legend's development from 1778 to the 1876 centennial monument",
      ],
      activities: [
        {
          name: 'What Do We Actually Know?',
          duration: '20 min',
          description:
            "Students read the pension record and identify what it actually says about Hays's service. They list documented facts vs. later additions and evaluate the evidence quality for each.",
        },
        {
          name: 'Camp Followers',
          duration: '25 min',
          description:
            "Students read Joseph Plumb Martin's account of women camp followers and identify the range of roles: laundresses, nurses, water carriers, cooks, seamstresses. Discuss why these roles were essential to army function.",
        },
        {
          name: 'Legend Building',
          duration: '20 min',
          description:
            "Students trace the development of the Molly Pitcher legend using a timeline: 1778 battle, 1822 pension, 1876 monument, 20th-century textbooks. At each stage, what was added and why?",
        },
        {
          name: 'History vs. Legend Debate',
          duration: '25 min',
          description:
            'Debate: "Should we teach the Molly Pitcher legend if parts of it are historically uncertain?" Students argue both sides using evidence from the documents.',
        },
      ],
      assessment:
        'Written response (two paragraphs): "What do we actually know about Mary Ludwig Hays, and what has been added by legend? Why does the distinction matter?"',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        "CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author's point of view or purpose",
        'CCSS.ELA-LITERACY.RH.6-8.8: Distinguish among fact, opinion, and reasoned judgment',
      ],
      c3Framework: [
        'D2.His.11.6-8: Use questions generated about individuals and groups to analyze why they, and the developments they shaped, are seen as historically significant',
        'D2.His.5.6-8: Explain how and why perspectives of people have changed over time',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-pa-carlisle' } },
    title: 'The Frontier at War: Carlisle, the Iroquois, and the Western Theater',
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary:
      'Students examine the Sullivan-Clinton Expedition of 1779 and the broader frontier war in western Pennsylvania and New York to analyze how the Revolutionary War was experienced by Native American communities, frontier settlers, and Continental forces far from the famous eastern battlefields.',
    lessonData: {
      objectives: [
        'Explain why the Sullivan-Clinton Expedition was ordered and what it was intended to accomplish',
        'Describe the impact of the expedition on Iroquois Confederacy communities from multiple perspectives',
        'Analyze how frontier warfare differed from the set-piece battles of the eastern theater',
        'Evaluate the long-term consequences of the expedition for Native American land rights after the Revolution',
      ],
      essentialQuestions: [
        'Who was the Revolutionary War being fought against on the western frontier? How was that conflict different from the war in the east?',
        'Washington called the Sullivan expedition a "total destruction" campaign. Was it morally justified? Was it strategically effective?',
        'What happened to Iroquois lands after the Revolution? How did the outcome of the war affect people who had not chosen either side?',
      ],
      materials: [
        "Washington's orders to Sullivan describing the expedition's objective (adapted)",
        "Sullivan's after-action report listing villages and food stores destroyed (adapted)",
        'Iroquois accounts of the expedition and its aftermath (adapted from oral tradition records)',
        "Map of the Iroquois Confederacy territory and Sullivan's route through New York",
        'Treaty of Paris (1783) provisions concerning Native American territories',
      ],
      activities: [
        {
          name: "Washington's Orders",
          duration: '25 min',
          description:
            "Students read Washington's orders to Sullivan and identify the stated objectives, methods authorized, and constraints. Discuss: what kind of warfare was Washington authorizing?",
        },
        {
          name: 'Mapping the Destruction',
          duration: '25 min',
          description:
            "Students mark Sullivan's route on a map and note each village destroyed (over 40), food stores burned, and orchards cut down. Discuss the intended and actual effects on Iroquois military capacity.",
        },
        {
          name: 'Iroquois Perspectives',
          duration: '30 min',
          description:
            'Students read accounts of the expedition from Iroquois oral tradition and post-war documentation. They identify: who bore the costs of the campaign, what choices Iroquois communities faced, what happened to those who had remained neutral.',
        },
        {
          name: 'After the Treaty',
          duration: '20 min',
          description:
            "Students read the Treaty of Paris provisions on western lands and trace what happened to Iroquois territory in the decade after the Revolution.",
        },
      ],
      assessment:
        "Analytical essay (900–1,200 words): \"The Sullivan-Clinton Expedition achieved its immediate military objectives but had consequences Washington did not foresee. Assess the expedition's strategic wisdom using evidence from its execution and aftermath.\" Must engage with Native American perspectives.",
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in several primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.5.9-12: Explain how and why perspectives of people have changed over time',
        'D2.His.14.9-12: Analyze multiple and complex causes and effects of events in the past',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const carlisleAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-pa-valley-forge',
    linkType: 'ROUTE',
    reason:
      'Carlisle Barracks served as the primary western supply depot feeding the Continental Army during the Valley Forge encampment. Arms, ammunition, and provisions manufactured or warehoused at Carlisle moved east along the Great Wagon Road toward Valley Forge during the critical winter of 1777–78.',
    weight: 82,
  },
];

// ============================================================================
// PAOLI
// ============================================================================

export const paoliPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-paoli-battlefield-park',
    name: 'Paoli Battlefield Historical Park',
    placeType: 'BATTLEFIELD',
    description:
      'Preserved site of the Paoli Massacre (September 20–21, 1777), where British Major General Charles Grey launched a surprise bayonet attack on Anthony Wayne\'s brigade encamped near Paoli Tavern. Grey ordered his men to remove their musket flints to prevent accidental firing that would alert the Americans, earning him the nickname "No Flint Grey." Approximately 53 Americans were killed and 150 wounded or captured in the night assault. The site contains a mass grave of the American dead and is one of the best-preserved Revolutionary War battlefields in Pennsylvania.',
    lat: 40.0437,
    lng: -75.4748,
    address: '45 Monument Ave, Malvern, PA 19355',
    hours: 'Daily dawn to dusk',
    admission: 'Free',
    website: 'https://www.paolisite.com',
    town: { connect: { id: 'us-pa-paoli' } },
  },
  {
    id: 'place-paoli-massacre-monument',
    name: 'Paoli Massacre Monument and Mass Grave',
    placeType: 'MONUMENT',
    description:
      'The 1817 monument marks the mass grave of soldiers killed in the September 21, 1777 assault, making it one of the earliest Revolutionary War battlefield memorials in America. The grave contains the remains of approximately 53 Continental soldiers. The monument inscription, erected by surviving veterans and local citizens forty years after the battle, reflects how the Paoli Massacre was kept alive in local memory and used as the rallying cry "Remember Paoli!" at subsequent battles.',
    lat: 40.0440,
    lng: -75.4752,
    address: '45 Monument Ave, Malvern, PA 19355',
    town: { connect: { id: 'us-pa-paoli' } },
  },
  {
    id: 'place-paoli-warren-tavern',
    name: 'Warren Tavern',
    placeType: 'TAVERN',
    description:
      'Built c. 1745, Warren Tavern is among the oldest continuously operating taverns in Pennsylvania and is named for General Joseph Warren, killed at Bunker Hill. Anthony Wayne and Washington both drank here. The tavern served as an informal headquarters for American forces in the Chester County area in 1777. After the Paoli Massacre, British officers reportedly used it as a gathering place. It continues to operate today.',
    lat: 40.0432,
    lng: -75.4699,
    address: '2505 Old Lincoln Hwy, Malvern, PA 19355',
    hours: 'Mon–Thu 11am–10pm, Fri–Sat 11am–11pm, Sun 11am–9pm (restaurant)',
    admission: 'Restaurant; dining charges apply',
    website: 'https://www.warrentavern.com',
    town: { connect: { id: 'us-pa-paoli' } },
  },
  {
    id: 'place-paoli-waynesborough',
    name: 'Waynesborough (Anthony Wayne Estate)',
    placeType: 'HISTORIC_HOUSE',
    description:
      "The ancestral estate of the Wayne family in Easttown Township, Chester County, where Anthony Wayne was born and raised. The Georgian mansion, built c. 1724, remained the family seat through the Revolutionary War. Wayne returned here between campaigns. The estate interprets Wayne's Chester County roots, his formation as a military officer, and his connections to the Pennsylvania gentry class that provided much of the Continental Army's officer corps.",
    lat: 40.0417,
    lng: -75.4583,
    address: '2049 Waynesborough Rd, Paoli, PA 19301',
    hours: 'May–December, Sat 10am–4pm; tours by appointment',
    admission: 'Adults $8, students $5',
    website: 'https://www.waynesborough.org',
    town: { connect: { id: 'us-pa-paoli' } },
  },
  {
    id: 'place-paoli-great-valley-church',
    name: 'Great Valley Baptist Church',
    placeType: 'CHURCH',
    description:
      'Colonial-era church near the Paoli battlefield that served as a field hospital following the September 21, 1777 assault. Wounded American soldiers were treated here after the battle. The church and its cemetery contain graves of Revolutionary War participants. Its use as a hospital reflects the logistical reality of 18th-century warfare, where churches were regularly converted to medical facilities after engagements.',
    lat: 40.0475,
    lng: -75.4623,
    address: '1020 N Valley Rd, Paoli, PA 19301',
    hours: 'Church open for services; cemetery accessible daily',
    admission: 'Free',
    town: { connect: { id: 'us-pa-paoli' } },
  },
  {
    id: 'place-paoli-historic-trail',
    name: 'Paoli to Valley Forge Trail Corridor',
    placeType: 'TRAIL',
    description:
      "The approximate route followed by Wayne's brigade as it retreated from the Paoli Massacre site and later by the Continental Army as it marched toward Valley Forge in late November 1777. The trail corridor passes through Chester County farmland and suburban landscape, connecting the Paoli battlefield to the Valley Forge encampment. Interpretive markers identify the route Washington's army took in the weeks between the Battle of Germantown and the Valley Forge encampment.",
    lat: 40.0440,
    lng: -75.4752,
    address: 'Chester County, PA',
    town: { connect: { id: 'us-pa-paoli' } },
  },
];

export const paoliAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-paoli-grey-flintless-plan',
    name: "Grey Plans the Paoli Night Assault: The Flintless Order",
    startDate: new Date('1777-09-20'),
    datePrecision: 'DAY',
    summary:
      'On September 20, 1777, British Major General Charles Grey planned a night assault on Anthony Wayne\'s brigade, encamped near the Paoli Tavern. Grey\'s tactical innovation — ordering his men to remove their musket flints to prevent accidental discharge — gave the assault its defining character and Grey his nickname "No Flint Grey." A loyalist informant provided Wayne\'s exact position. The assault launched around midnight, achieving complete surprise and demonstrating that the British could execute the same kind of silent night operation that Wayne would later reverse at Stony Point in 1779.',
    significanceWeight: 78,
    lat: 40.0437,
    lng: -75.4748,
    town: { connect: { id: 'us-pa-paoli' } },
  },
  {
    id: 'event-paoli-court-martial-acquittal',
    name: "Wayne's Court-Martial Acquits Him of Negligence",
    startDate: new Date('1777-11-01'),
    datePrecision: 'MONTH',
    summary:
      'Following the Paoli Massacre, Anthony Wayne demanded a court-martial to clear his name of charges that he had failed to post adequate sentries. The court-martial convened in November 1777 and acquitted Wayne "with the highest honor," finding that he had taken reasonable precautions and that a loyalist informant had betrayed his position. The acquittal restored Wayne\'s standing and solidified his reputation as one of Washington\'s most aggressive and capable subordinates.',
    significanceWeight: 72,
    lat: 40.0437,
    lng: -75.4748,
    town: { connect: { id: 'us-pa-paoli' } },
  },
];

export const paoliLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-pa-paoli' } },
    title: '"Remember Paoli!": How Defeat Becomes a Battle Cry',
    gradeRange: '6-9',
    estimatedDuration: '2 class periods',
    summary:
      'Students examine how the Paoli Massacre was transformed from a military defeat into a rallying slogan, analyzing how societies use stories of defeat and sacrifice to sustain morale and build collective identity.',
    lessonData: {
      objectives: [
        'Describe the Paoli Massacre: what happened, why, and what the immediate consequences were',
        'Explain how "Remember Paoli!" functioned as a battle cry at subsequent engagements',
        'Analyze why defeats and massacres are sometimes more motivating than victories',
        'Connect to other historical examples: "Remember the Alamo," "Remember the Maine," etc.',
      ],
      essentialQuestions: [
        'Why do some military defeats become rallying cries while others are simply forgotten?',
        'What makes a sacrifice story motivating? What elements are necessary?',
        'How do communities use shared trauma to build solidarity and purpose?',
      ],
      materials: [
        'Eyewitness accounts of the Paoli Massacre (adapted)',
        'Documentation of "Remember Paoli!" as a battle cry at Germantown and later engagements',
        'The 1817 monument inscription (primary source)',
        'Comparison examples: "Remember the Alamo" (1836), "Remember the Maine" (1898)',
      ],
      activities: [
        {
          name: 'What Happened at Paoli',
          duration: '20 min',
          description:
            "Students read the eyewitness accounts and reconstruct the sequence of events: intelligence failure, Grey's flintless order, the assault, American casualties, Wayne's retreat. Create a timeline.",
        },
        {
          name: 'From Defeat to Rallying Cry',
          duration: '25 min',
          description:
            'Students trace how "Remember Paoli!" was used at subsequent battles. What made the phrase effective? Identify the elements: clear victims, identifiable villains, survivable defeat, subsequent vindication at Stony Point.',
        },
        {
          name: 'Comparing Battle Cries',
          duration: '25 min',
          description:
            'Students examine two other historical rallying cries and identify common structural elements: a clear injustice, identifiable sacrificial victims, a galvanizing phrase, and later vindication.',
        },
        {
          name: 'The 1817 Monument',
          duration: '20 min',
          description:
            'Students read the monument inscription and analyze its language: what does it emphasize, what does it omit, and what does this reveal about how the community wanted the event to be remembered 40 years later?',
        },
      ],
      assessment:
        'Short essay (three paragraphs): "Explain why the Paoli Massacre became an effective rallying cry. What elements of the story made it usable for motivating soldiers and civilians? Use specific evidence from the documents."',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        "CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author's point of view or purpose",
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis',
      ],
      c3Framework: [
        'D2.His.11.6-8: Use questions generated about individuals and groups to analyze why they are seen as historically significant',
        'D2.His.5.6-8: Explain how and why perspectives of people have changed over time',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-pa-paoli' } },
    title: 'Night Operations in the Revolution: Paoli, Stony Point, and the Bayonet Tactic',
    gradeRange: '9-12',
    estimatedDuration: '2 class periods',
    summary:
      'Students examine the Paoli Massacre and Stony Point assault as paired case studies in Revolutionary War night operations, analyzing how both sides learned and adapted the same tactical concept — surprise, silence, bayonets — and what this reveals about the professionalization of warfare during the Revolution.',
    lessonData: {
      objectives: [
        'Describe the tactical characteristics of the Paoli assault and identify what made it successful',
        "Compare Grey's flintless order at Paoli with Wayne's bayonets-only order at Stony Point",
        'Analyze how the Continental Army learned from the Paoli experience and applied it at Stony Point',
        'Evaluate the concept of tactical learning across the Revolutionary War',
      ],
      essentialQuestions: [
        'How do armies learn from defeat? What specific tactical lessons did the Continental Army take from Paoli?',
        "Grey used the same basic concept against Wayne that Wayne later used at Stony Point. What does this reveal about how military ideas spread?",
        "Is Wayne's Stony Point assault best understood as revenge, professional evolution, or something else?",
      ],
      materials: [
        "Grey's account of the Paoli assault and the flintless order (adapted)",
        "Wayne's operational orders for Stony Point including the bayonet-only directive (adapted)",
        'Comparison chart: Paoli (1777) vs. Stony Point (1779) — objectives, methods, outcomes',
        "Continental Army training evolution: von Steuben's role in connecting the two operations",
      ],
      activities: [
        {
          name: 'Paoli Dissected',
          duration: '25 min',
          description:
            "Students read Grey's account and identify the components of the successful assault: intelligence (loyalist informant), preparation (flintless order), execution (night movement, silence, speed). Create a tactical template.",
        },
        {
          name: 'Stony Point Compared',
          duration: '25 min',
          description:
            "Students apply the same template to Wayne's Stony Point orders and identify parallel elements: intelligence (McLane's reconnaissance), preparation (bayonets-only order), execution (night movement, silence, speed). What was the same? What was different?",
        },
        {
          name: 'The Learning Gap',
          duration: '20 min',
          description:
            "Students analyze what happened between 1777 and 1779: von Steuben's training, the Valley Forge winter, Wayne's transformation of the light infantry corps. How did the army become capable of executing at Stony Point what it could not do at Paoli?",
        },
        {
          name: 'Tactical Evolution Essay Planning',
          duration: '20 min',
          description:
            'Students outline a comparative essay arguing for or against: "The Paoli Massacre was a necessary precondition for the Stony Point victory." Workshop thesis statements and evidence selection.',
        },
      ],
      assessment:
        'Comparative essay (800–1,100 words): "How did the Continental Army transform the tactical lessons of its defeat at Paoli into the operational success at Stony Point? Trace the specific elements that connect the two operations." Must use evidence from both events.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in several primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.1.9-12: Analyze connections among events and developments in broader historical contexts',
        'D2.His.14.9-12: Analyze multiple and complex causes and effects of events in the past',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const paoliAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-pa-valley-forge',
    linkType: 'SHARED_EVENT',
    reason:
      "The Paoli Massacre (September 21, 1777) and the Valley Forge encampment (December 1777–June 1778) are part of the same continuous campaign. Washington's army retreated from Paoli through Germantown, fought at Germantown, then marched to Valley Forge. Paoli is the opening shock of the campaign season that ended with von Steuben's transformation of the army.",
    weight: 88,
  },
];
