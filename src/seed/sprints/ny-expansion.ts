// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// New York Expansion Sprint: Places, Additional Events, Lesson Plans, and Additional Links
// Towns: New York City, Saratoga Springs, Albany, Ticonderoga, West Point

import { Prisma } from '@prisma/client';

// ============================================================================
// NEW YORK CITY
// ============================================================================

export const newYorkCityPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-new-york-city-fraunces-tavern',
    name: 'Fraunces Tavern',
    placeType: 'TAVERN',
    description:
      "Built in 1719 and operated by Samuel Fraunces as the Queen's Head Tavern from 1762, this is the site of Washington's emotional farewell to his officers on December 4, 1783 — days after British forces evacuated New York. Washington embraced each officer individually, reportedly weeping, before leaving for Annapolis to resign his commission. The building survived the Revolution and stands today as a museum and restaurant, making it one of the oldest surviving structures in Manhattan.",
    lat: 40.7036,
    lng: -74.0116,
    address: '54 Pearl St, New York, NY 10004',
    hours: 'Museum: Mon–Fri 12pm–5pm, Sat–Sun 11am–5pm',
    admission: 'Museum admission required; restaurant open daily',
    website: 'https://www.frauncestavernmuseum.org',
    town: { connect: { id: 'us-ny-new-york-city' } },
  },
  {
    id: 'place-new-york-city-federal-hall',
    name: 'Federal Hall National Memorial',
    placeType: 'GOVERNMENT',
    description:
      "Federal Hall was the site of Washington's first presidential inauguration on April 30, 1789 — the first inauguration under the new Constitution. The original building served as New York's city hall, then as the first capitol of the United States. The present Greek Revival structure, completed 1842, replaced the original. A bronze statue of Washington marks the spot on Wall Street where he took the oath of office. The National Park Service maintains the site.",
    lat: 40.7074,
    lng: -74.0101,
    address: '26 Wall St, New York, NY 10005',
    hours: 'Mon–Fri 9am–5pm',
    admission: 'Free',
    website: 'https://www.nps.gov/feha',
    town: { connect: { id: 'us-ny-new-york-city' } },
  },
  {
    id: 'place-new-york-city-st-pauls-chapel',
    name: "St. Paul's Chapel",
    placeType: 'CHURCH',
    description:
      "Built in 1766 and the only pre-Revolutionary building in lower Manhattan to have survived intact, St. Paul's Chapel was Washington's place of worship during New York's brief tenure as the national capital. On April 30, 1789 — the day of his inauguration — Washington walked here from Federal Hall for a service of thanksgiving. Washington's pew is preserved. The churchyard contains graves of Revolutionary War soldiers and prominent New Yorkers of the period.",
    lat: 40.7128,
    lng: -74.0108,
    address: '209 Broadway, New York, NY 10007',
    hours: 'Daily 10am–6pm',
    admission: 'Free',
    website: 'https://www.trinitywallstreet.org/stpaulschapel',
    town: { connect: { id: 'us-ny-new-york-city' } },
  },
  {
    id: 'place-new-york-city-morris-jumel-mansion',
    name: 'Morris-Jumel Mansion',
    placeType: 'HISTORIC_HOUSE',
    description:
      "The oldest surviving house in Manhattan, built 1765 by Roger Morris. In September 1776, Washington used it as his headquarters during the desperate defense of northern Manhattan following the loss of Brooklyn Heights. From this house, Washington directed the retreat through Harlem Heights and eventually out of Manhattan entirely. The mansion changed hands several times during the British occupation of New York and was later owned by Stephen Jumel. Operated today as a museum by the City of New York.",
    lat: 40.8381,
    lng: -73.9351,
    address: '65 Jumel Terrace, New York, NY 10032',
    hours: 'Wed–Sun 10am–4pm',
    admission: 'Adults $10',
    website: 'https://morrisjumel.org',
    town: { connect: { id: 'us-ny-new-york-city' } },
  },
  {
    id: 'place-new-york-city-battery-park-fort-george',
    name: 'Battery Park (Fort George Site)',
    placeType: 'LANDMARK',
    description:
      "The southern tip of Manhattan, now Battery Park, was the site of Fort George — the British colonial fortification that anchored the defense of New York harbor. The fort was demolished after the Revolution and the area extended by landfill. The park today features Castle Clinton (1811), a later fortification, and offers views of the harbor that explain immediately why control of New York was the central British strategic objective from 1776 onward.",
    lat: 40.7002,
    lng: -74.0170,
    address: 'Battery Park, New York, NY 10004',
    hours: 'Open daily, dawn to dusk',
    admission: 'Free',
    website: 'https://www.nycgovparks.org/parks/battery-park',
    town: { connect: { id: 'us-ny-new-york-city' } },
  },
  {
    id: 'place-new-york-city-trinity-church-cemetery',
    name: 'Trinity Church and Cemetery',
    placeType: 'CEMETERY',
    description:
      "Trinity Church, founded 1697, is one of the oldest Episcopal parishes in the United States. Its churchyard contains the grave of Alexander Hamilton, killed in a duel with Aaron Burr in 1804 and buried here at the request of his family. Robert Fulton and other prominent figures of the founding era are also interred here. The church was used as a stable and barracks during the British occupation. The present building dates to 1846, but the cemetery — one of the oldest in New York — retains graves from the colonial and Revolutionary periods.",
    lat: 40.7081,
    lng: -74.0122,
    address: '89 Broadway, New York, NY 10006',
    hours: 'Daily 7am–6pm; cemetery accessible during church hours',
    admission: 'Free',
    website: 'https://www.trinitywallstreet.org',
    town: { connect: { id: 'us-ny-new-york-city' } },
  },
];

export const newYorkCityAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-new-york-city-washington-inaugural',
    name: "Washington's First Inauguration at Federal Hall",
    startDate: new Date('1789-04-30'),
    datePrecision: 'DAY',
    summary: `On April 30, 1789, George Washington took the oath of office as the first President of the United States on the balcony of Federal Hall at the corner of Wall and Nassau Streets. Chancellor Robert R. Livingston administered the oath. Washington wore a suit of American-made brown broadcloth — a deliberate gesture toward domestic manufacturing. The crowd that gathered below was enormous by the standards of the day.

Washington's inaugural address, delivered in the Senate chamber inside, was brief and uncharacteristically hesitant — he was genuinely uncertain about his fitness for the role. He received no salary for his military service and initially intended to decline the presidential salary as well, though he was persuaded to accept it. After the ceremony, Washington and members of Congress walked to St. Paul's Chapel for a service of thanksgiving, establishing a precedent followed by several of his successors.`,
    significanceWeight: 92,
    lat: 40.7074,
    lng: -74.0101,
    town: { connect: { id: 'us-ny-new-york-city' } },
  },
  {
    id: 'event-new-york-city-hamilton-duel-death',
    name: 'Alexander Hamilton Killed in Duel with Aaron Burr',
    startDate: new Date('1804-07-11'),
    datePrecision: 'DAY',
    summary: `On the morning of July 11, 1804, Alexander Hamilton and Vice President Aaron Burr met on the dueling grounds at Weehawken, New Jersey, directly across the Hudson from Manhattan. Hamilton was shot and mortally wounded; he died the following day at a friend's home in Greenwich Village and was buried at Trinity Church in lower Manhattan.

The duel ended the life of the former Secretary of the Treasury and the architect of the American financial system at age 49, and effectively ended Burr's political career. Hamilton left behind a letter indicating he intended to withhold his fire — a claim disputed by Burr's supporters. The loss devastated New York's Federalist political world. Hamilton's grave at Trinity Church became, and remains, one of the most visited sites in lower Manhattan.`,
    significanceWeight: 85,
    lat: 40.7081,
    lng: -74.0122,
    town: { connect: { id: 'us-ny-new-york-city' } },
  },
];

export const newYorkCityLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-ny-new-york-city' } },
    title: 'The Capital at the End of the War: New York City, 1783–1790',
    gradeRange: '6-8',
    estimatedDuration: '2 class periods',
    summary:
      "Students examine New York City's transformation from British-occupied city to the first capital of the United States, exploring Evacuation Day 1783, Washington's farewell, and the inauguration of 1789. They analyze how a city can shift political identity in the space of a few years and what that transition required of ordinary New Yorkers.",
    lessonData: {
      objectives: [
        "Describe the sequence of events from British evacuation on November 25, 1783 to Washington's farewell to his officers",
        'Explain why New York City was chosen as the first national capital and what that choice signified',
        "Analyze Washington's 1789 inaugural address as a primary source, identifying key themes of republican governance",
        "Connect the physical sites of lower Manhattan — Fraunces Tavern, Federal Hall, St. Paul's Chapel — to the events they witnessed",
      ],
      essentialQuestions: [
        'How does a city rebuild its identity after years of military occupation? What evidence do we have of how New Yorkers experienced the British withdrawal?',
        "What did Washington's inauguration at Federal Hall mean to Americans who had just emerged from an eight-year war?",
      ],
      materials: [
        "Map of lower Manhattan showing Fraunces Tavern, Federal Hall, St. Paul's Chapel, and Trinity Church",
        "Excerpt from Washington's 1789 inaugural address (adapted)",
        'Account of Evacuation Day 1783 (adapted from period newspaper)',
        "Image of Washington's pew at St. Paul's Chapel",
        'Timeline worksheet: New York City 1776–1790',
      ],
      activities: [
        {
          name: 'Walking the Sites',
          duration: '20 min',
          description:
            "Students annotate a map of lower Manhattan with the key Revolutionary and early republic sites, then trace Washington's likely path from Federal Hall to St. Paul's Chapel on inauguration day.",
        },
        {
          name: 'From Occupation to Capital',
          duration: '25 min',
          description:
            'Students read the Evacuation Day account and discuss: what would it feel like to watch the British leave after seven years of occupation? What would rebuilding feel like?',
        },
        {
          name: 'Reading the Inaugural Address',
          duration: '25 min',
          description:
            "Students read excerpts from Washington's 1789 address and identify: what anxieties does he express? What obligations does he acknowledge? How does the tone differ from a modern political speech?",
        },
        {
          name: 'Then and Now',
          duration: '20 min',
          description:
            "Students compare the lower Manhattan of 1783–1789 with the same geography today, identifying what survives (Trinity Church, St. Paul's Chapel, Fraunces Tavern) and what has changed.",
        },
      ],
      assessment:
        'Short constructed response (one paragraph): "Using at least two specific sites or events, explain how lower Manhattan served as the birthplace of both the war\'s end and the new nation\'s beginning." Extension: visit or virtually tour one of the surviving sites and write a site report.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        "CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author's point of view or purpose",
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.5.6-8: Explain how and why perspectives of people have changed over time',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-ny-new-york-city' } },
    title: 'Alexander Hamilton and the Architecture of a Nation',
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary:
      "Students use Hamilton's career and New York City as anchors to examine the founding debates over federal power, economic policy, and the shape of American government. From his service as Washington's aide-de-camp through his death at Weehawken, Hamilton embodies the tensions of the founding era that New York City witnessed firsthand.",
    lessonData: {
      objectives: [
        "Trace Hamilton's career from Continental Army officer to Treasury Secretary to his fatal duel",
        "Analyze Hamilton's Federalist arguments for strong central government against Anti-Federalist counterarguments",
        "Evaluate Hamilton's financial system — the national bank, assumption of state debts, tariffs — and its political consequences",
        "Assess the significance of Hamilton's death and burial at Trinity Church as a symbol of the founding generation's conflicts",
      ],
      essentialQuestions: [
        'What did Hamilton believe a nation needed to survive and prosper, and why did so many Americans disagree?',
        'How did personal honor, political ambition, and ideological conflict combine in the Hamilton-Burr rivalry?',
        'What does it mean that Hamilton is buried at Trinity Church, steps from Federal Hall where the government he designed took shape?',
      ],
      materials: [
        "Hamilton's \"Report on Public Credit\" (1790) — excerpts adapted",
        "Jefferson's letter opposing the national bank (adapted)",
        'Federalist No. 70 on executive energy (excerpts)',
        "Hamilton's letter written the night before the Burr duel (adapted)",
        "Map of lower Manhattan with Hamilton's New York: Trinity Church, Federal Hall, Wall Street",
      ],
      activities: [
        {
          name: 'The Financial Vision',
          duration: '30 min',
          description:
            "Students read excerpts from the Report on Public Credit and Jefferson's bank opposition, then debate in pairs: whose vision of economic policy better serves a new republic?",
        },
        {
          name: 'Federalist Argument Analysis',
          duration: '35 min',
          description:
            'Students analyze Federalist No. 70 and construct a response from an Anti-Federalist perspective, using specific textual evidence.',
        },
        {
          name: 'The Last Letter',
          duration: '25 min',
          description:
            "Students read Hamilton's letter written the night before the duel and discuss: what does it reveal about his values, his sense of honor, and his understanding of what he was risking?",
        },
        {
          name: "Legacy Mapping",
          duration: '30 min',
          description:
            "Students map Hamilton's legacy: which of his financial institutions and ideas persist? Which were reversed? They connect sites in lower Manhattan to specific Hamilton policies or moments.",
        },
      ],
      assessment:
        'Analytical essay (1000–1300 words): "Hamilton believed a strong central government and a sophisticated financial system were necessary for national survival. Was he right? Use evidence from his career, his policies, and his conflicts to support your argument." Minimum three specific primary source references.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        "CCSS.ELA-LITERACY.RH.9-10.8: Assess the extent to which the reasoning and evidence in a text support the author's claims",
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.4.9-12: Analyze complex and interacting factors that influenced the perspectives of people during different historical eras',
        'D2.Civ.13.9-12: Evaluate public policies in terms of intended and unintended outcomes',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// SARATOGA SPRINGS
// ============================================================================

export const saratogaSpringsPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-saratoga-springs-national-historical-park',
    name: 'Saratoga National Historical Park',
    placeType: 'BATTLEFIELD',
    description:
      "Established 1938, the park preserves the terrain of the Battles of Saratoga — Freeman's Farm (September 19) and Bemis Heights (October 7) — and the surrender site. The 9.5-mile tour road traces the engagements chronologically; interpretive stops mark the American fortified lines on Bemis Heights, the Freeman's Farm clearing, and the Breymann Redoubt. The Boot Monument — a boot without a name, commemorating Arnold's wounded leg — is among the most unusual memorials in American military history.",
    lat: 42.9981,
    lng: -73.6408,
    address: '648 Route 32, Stillwater, NY 12170',
    hours: 'Park open daily year-round; Visitor Center: daily 9am–5pm (seasonal hours vary)',
    admission: '$10 per vehicle (NPS)',
    website: 'https://www.nps.gov/sara',
    town: { connect: { id: 'us-ny-saratoga-springs' } },
  },
  {
    id: 'place-saratoga-springs-schuyler-house',
    name: 'Schuyler House (General Philip Schuyler Estate)',
    placeType: 'HISTORIC_HOUSE',
    description:
      "Philip Schuyler's country estate at Schuylerville, rebuilt after Burgoyne's troops burned the original during their advance. Schuyler reconstructed the house in thirty days after the British surrender, demonstrating both his resources and his determination. Burgoyne himself was hosted here as a prisoner of war following the surrender — a remarkable display of civility toward the general whose troops had burned the property. Managed by the National Park Service as part of Saratoga NHP.",
    lat: 43.0958,
    lng: -73.5845,
    address: '1 Schuyler St, Schuylerville, NY 12871',
    hours: 'Seasonal; check NPS website for current hours',
    admission: 'Free with park entry',
    website: 'https://www.nps.gov/sara/planyourvisit/schuyler-house.htm',
    town: { connect: { id: 'us-ny-saratoga-springs' } },
  },
  {
    id: 'place-saratoga-springs-victory-woods',
    name: 'Victory Woods — Surrender Site',
    placeType: 'LANDMARK',
    description:
      "The wooded site near Schuylerville where John Burgoyne's army formally stacked arms and surrendered on October 17, 1777. Marked with a monument, the site is part of Saratoga NHP. The surrender was called a 'convention' rather than a capitulation at Burgoyne's insistence, preserving a measure of British dignity — though Congress later voided parts of the agreement. The Convention Army of nearly 6,000 soldiers began their long march to Boston from this ground.",
    lat: 43.0895,
    lng: -73.5860,
    address: 'Schuylerville, NY 12871',
    hours: 'Open daily during daylight hours',
    admission: 'Free',
    website: 'https://www.nps.gov/sara',
    town: { connect: { id: 'us-ny-saratoga-springs' } },
  },
  {
    id: 'place-saratoga-springs-bemis-heights-overlook',
    name: 'Bemis Heights Overlook',
    placeType: 'LANDMARK',
    description:
      "The bluff above the Hudson River where Thaddeus Kosciuszko engineered the American defensive position in September 1777. The overlook reveals immediately why the position was formidable: the river road below is commanded by artillery from above, and any army marching south had to pass through this bottleneck. From here, Burgoyne's army was forced to cross open ground and ravines under fire rather than moving freely along the river.",
    lat: 42.9930,
    lng: -73.6355,
    address: 'Saratoga National Historical Park, NY 12170',
    hours: 'Open daily during park hours',
    admission: 'Included with park entry',
    website: 'https://www.nps.gov/sara',
    town: { connect: { id: 'us-ny-saratoga-springs' } },
  },
  {
    id: 'place-saratoga-springs-saratoga-monument',
    name: 'Saratoga Monument',
    placeType: 'MONUMENT',
    description:
      "A 155-foot obelisk erected 1877–1883 at Schuylerville to commemorate the centennial of Burgoyne's surrender. Four niches at the base hold statues of the American commanders who fought at Saratoga: Gates, Schuyler, Morgan, and — notably — an empty niche where Arnold's statue was planned but never placed, a deliberate omission acknowledging that the man who arguably most influenced the battle's outcome later became a traitor.",
    lat: 43.0913,
    lng: -73.5848,
    address: 'Burgoyne St, Schuylerville, NY 12871',
    hours: 'Grounds open daily; interior seasonal',
    admission: 'Free',
    website: 'https://parks.ny.gov/historic-sites/saratoga-monument',
    town: { connect: { id: 'us-ny-saratoga-springs' } },
  },
  {
    id: 'place-saratoga-springs-saratoga-spa-state-park',
    name: 'Saratoga Spa State Park',
    placeType: 'TRAIL',
    description:
      "The mineral springs that give Saratoga Springs its name and commercial identity were well known to both armies during the 1777 campaign. The carbonated springs, used by Native Americans for centuries before European contact, attracted post-war visitors and eventually made Saratoga Springs a fashionable resort. The state park preserves both the historic bathhouses and the natural springs, providing context for the town's identity beyond the battlefield.",
    lat: 43.0577,
    lng: -73.7917,
    address: '19 Roosevelt Drive, Saratoga Springs, NY 12866',
    hours: 'Daily, dawn to dusk',
    admission: 'Free; some facilities charge fees',
    website: 'https://parks.ny.gov/parks/saratogaspa',
    town: { connect: { id: 'us-ny-saratoga-springs' } },
  },
];

export const saratogaSpringsAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-saratoga-springs-burgoyne-burns-schuyler-estate',
    name: "Burgoyne's Army Burns the Schuyler Country Estate",
    startDate: new Date('1777-09-15'),
    datePrecision: 'DAY',
    summary: `As Burgoyne's army advanced south toward Saratoga in mid-September 1777, British soldiers burned Philip Schuyler's country estate at Saratoga — the family's most productive agricultural property. The destruction was a deliberate act of war intended to deny resources and demoralize the local population.

The irony of the episode was made explicit weeks later: after the surrender on October 17, Burgoyne was brought as a prisoner of war to Schuyler's Albany mansion. Schuyler reportedly greeted him graciously, saying the fortunes of war made such destruction to be expected. Burgoyne was reportedly moved by the courtesy. Schuyler then had his country house rebuilt in thirty days — a demonstration of both his resources and his refusal to be beaten.`,
    significanceWeight: 68,
    lat: 43.0958,
    lng: -73.5845,
    town: { connect: { id: 'us-ny-saratoga-springs' } },
  },
  {
    id: 'event-saratoga-springs-gates-arnold-command-dispute',
    name: 'Gates Relieves Arnold of Command Before Second Battle',
    startDate: new Date('1777-10-01'),
    datePrecision: 'DAY',
    summary: `The weeks between the two battles of Saratoga were marked by a bitter command dispute between Horatio Gates and Benedict Arnold. Arnold believed Gates had failed to give him proper credit for American performance in the first battle and was furious at being excluded from Gates's reports to Congress. The two men's confrontation was intense enough that Arnold requested permission to leave and Gates formally stripped him of his command — leaving him confined to camp.

The result was the remarkable scene of October 7: Arnold, with no command and no orders, riding onto the battlefield and leading the assault that broke the British right flank. The dispute between the cautious Gates and the reckless Arnold encapsulates one of the Revolution's central tensions: the different kinds of leadership the war required and rewarded.`,
    significanceWeight: 78,
    lat: 42.9985,
    lng: -73.6380,
    town: { connect: { id: 'us-ny-saratoga-springs' } },
  },
];

export const saratogaSpringsLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-ny-saratoga-springs' } },
    title: 'The Turning Point: Why Saratoga Changed the American Revolution',
    gradeRange: '6-8',
    estimatedDuration: '2 class periods',
    summary:
      'Students analyze why the Battles of Saratoga are considered the turning point of the American Revolution, focusing on the French alliance that followed and the diplomatic chain of causation running from the battlefield to Paris. Using maps, timelines, and primary sources, students trace how a military victory in upstate New York changed the character of a global war.',
    lessonData: {
      objectives: [
        "Explain the British strategy of dividing the colonies along the Hudson and why Saratoga ended that strategy",
        "Describe the diplomatic sequence from Burgoyne's surrender to the French Treaty of Alliance (February 1778)",
        "Analyze Benjamin Franklin's role in leveraging Saratoga news at the French court",
        'Evaluate whether Saratoga or some other event was the true "turning point" of the Revolution',
      ],
      essentialQuestions: [
        'What makes a military event a "turning point"? Does Saratoga deserve that label?',
        'How do military outcomes shape diplomacy? What did France need to see before committing to the American alliance?',
      ],
      materials: [
        'Map of the Burgoyne campaign from Canada to Saratoga',
        "Franklin's letter from Paris after Saratoga news arrived (adapted)",
        'Timeline: Saratoga to French Treaty of Alliance (Oct 1777 – Feb 1778)',
        "Excerpt from Burgoyne's surrender terms (adapted)",
        'Before/After analysis worksheet (American situation pre- and post-Saratoga)',
      ],
      activities: [
        {
          name: 'Mapping the Campaign',
          duration: '20 min',
          description:
            "Students trace Burgoyne's route from Canada through Ticonderoga toward Albany, marking where the plan succeeded and where it failed. They identify what geographic objectives Burgoyne needed to reach Albany.",
        },
        {
          name: 'Before and After',
          duration: '25 min',
          description:
            'Students complete a two-column chart: the American military and diplomatic situation before Saratoga vs. after. They then identify which changes were direct results of the battle vs. other factors.',
        },
        {
          name: 'Franklin in Paris',
          duration: '20 min',
          description:
            "Students read Franklin's letter and discuss: how does a diplomat use a military victory as a negotiating tool? What arguments did the French need to hear?",
        },
        {
          name: 'Turning Point Debate',
          duration: '25 min',
          description:
            'Students debate: was Saratoga the turning point, or was it Yorktown? Or was it Valley Forge? They must support their position with specific evidence.',
        },
      ],
      assessment:
        'Short essay (two paragraphs): "Using at least two specific pieces of evidence, explain why Saratoga is considered the turning point of the American Revolution and whether you agree with that assessment." Extension: research a historian who disputes the "turning point" label and summarize their argument.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        "CCSS.ELA-LITERACY.RH.6-8.3: Identify key steps in a text's description of a process related to history",
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.2.6-8: Classify series of historical events and developments as examples of change and/or continuity',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-ny-saratoga-springs' } },
    title: "Arnold at Saratoga: Heroism, Command, and the Road to Treason",
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary:
      "Students use Benedict Arnold's behavior at Saratoga — heroic in battle, vindictive in camp disputes — to examine the psychological and political conditions that produced his treason three years later. The Boot Monument's namelessness becomes a framework for discussing how history honors and dishonors the same person simultaneously.",
    lessonData: {
      objectives: [
        'Analyze the Gates-Arnold command dispute as a conflict between two models of military leadership',
        "Evaluate Arnold's unauthorized charge at Breymann Redoubt using primary accounts",
        "Construct a causal argument connecting Arnold's treatment at Saratoga and after to his eventual treason",
        "Assess the ethics of the Boot Monument's choice to commemorate heroism without naming the hero",
      ],
      essentialQuestions: [
        "Can a person be simultaneously heroic and villainous? What does Arnold's career at Saratoga reveal about human complexity?",
        'What obligations does a nation have to honor the service of someone who later committed treason?',
        'How does resentment of institutional injustice — real or perceived — become dangerous?',
      ],
      materials: [
        "Arnold's letter to Gates during the command dispute (adapted)",
        "Period accounts of Arnold's charge at the Breymann Redoubt",
        'Description of the Boot Monument at Saratoga NHP',
        "Timeline: Arnold's military career 1775–1780 with key grievances marked",
        "Document: Arnold's grievances letter to Congress (1777, adapted)",
      ],
      activities: [
        {
          name: 'Command Dispute Analysis',
          duration: '30 min',
          description:
            'Students read the Arnold-Gates correspondence and construct the argument each man would make. Who was right? Does it matter? What does the dispute reveal about how the Continental Army handled recognition?',
        },
        {
          name: 'The Unauthorized Charge',
          duration: '35 min',
          description:
            "Students analyze accounts of Arnold's October 7 charge and debate whether it was heroism, insubordination, or both. They apply the question: what is military discipline for, and when (if ever) is it right to violate it?",
        },
        {
          name: 'The Grievance Timeline',
          duration: '25 min',
          description:
            "Students construct a timeline of Arnold's grievances from 1775 to 1780, evaluating which were legitimate and which reflected personal ego. They assess whether his eventual treason was understandable, even if not justified.",
        },
        {
          name: 'Monument Ethics',
          duration: '30 min',
          description:
            'Students examine the Boot Monument and write a position statement: should it name Arnold? Should the NPS add his name, remove the monument, or leave it as is? Students must defend their position with historical reasoning.',
        },
      ],
      assessment:
        "Analytical essay (1000–1300 words): \"Using evidence from Arnold's career at Saratoga and after, assess whether his treason was the inevitable result of his character or a contingent response to specific institutional failures.\" Minimum three specific primary or secondary source references.",
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors for how they treat the same or similar topics',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.4.9-12: Analyze complex and interacting factors that influenced the perspectives of people during different historical eras',
        'D2.His.9.9-12: Analyze the relationship between historical sources and the secondary interpretations made from them',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// ALBANY
// ============================================================================

export const albanyPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-albany-schuyler-mansion',
    name: 'Schuyler Mansion State Historic Site',
    placeType: 'HISTORIC_HOUSE',
    description:
      "Philip Schuyler's Albany home served as the de facto headquarters of the Continental Army's Northern Department. Built 1761–1765, the mansion hosted officers, politicians, and — after Saratoga — prisoners of war including General Burgoyne himself. Alexander Hamilton married Elizabeth Schuyler here on December 14, 1780. The New York State Office of Parks operates the mansion as a museum, with period furnishings and interpretive programming on the Schuyler family's role in the Revolution.",
    lat: 42.6544,
    lng: -73.7483,
    address: '32 Catherine St, Albany, NY 12202',
    hours: 'Mid-April through October, Wed–Sun 11am–5pm',
    admission: 'Adults $4',
    website: 'https://parks.ny.gov/historic-sites/schuyler-mansion-state-historic-site',
    town: { connect: { id: 'us-ny-albany' } },
  },
  {
    id: 'place-albany-fort-frederick-site',
    name: 'Fort Frederick Site (Washington Park Area)',
    placeType: 'LANDMARK',
    description:
      "Fort Frederick stood on the high ground of Albany from 1676 to 1789, serving as the principal colonial fortification commanding the Hudson Valley approaches to the town. During the Revolution it served as a military storage and logistics facility. The fort was demolished after the war and the site eventually became part of Washington Park. A historical marker in the park area commemorates the fort's location and significance as a Revolutionary War supply depot.",
    lat: 42.6612,
    lng: -73.7715,
    address: 'Washington Park, Albany, NY 12203',
    hours: 'Open daily during park hours',
    admission: 'Free',
    website: 'https://www.albanyny.gov/government/departments/parks-recreation/parks-golf/washington-park',
    town: { connect: { id: 'us-ny-albany' } },
  },
  {
    id: 'place-albany-new-york-state-museum',
    name: 'New York State Museum',
    placeType: 'MUSEUM',
    description:
      "The New York State Museum in Albany holds one of the largest collections of material culture related to the Revolutionary War in the northeast, including weapons, uniforms, documents, and objects related to the Iroquois Confederacy's experience of the war. The museum's permanent collections interpret Albany's role as a Revolutionary logistics hub and the broader New York theater, making it an essential resource for understanding the northern campaigns.",
    lat: 42.6528,
    lng: -73.7573,
    address: '222 Madison Ave, Albany, NY 12230',
    hours: 'Wed–Sun 9:30am–5pm',
    admission: 'Free',
    website: 'https://www.nysm.nysed.gov',
    town: { connect: { id: 'us-ny-albany' } },
  },
  {
    id: 'place-albany-albany-city-hall-area',
    name: 'Albany City Hall and Corning Preserve (Original Settlement Area)',
    placeType: 'GOVERNMENT',
    description:
      "The site of Albany's original Dutch settlement (Fort Nassau, later Fort Orange) is near the current waterfront at the Corning Preserve. Albany's status as one of the oldest continuously settled European communities in North America made it a natural administrative center during the Revolution. The town's Dutch Reformed and English political traditions shaped how its Committee of Correspondence operated and how loyalists were managed.",
    lat: 42.6526,
    lng: -73.7478,
    address: '24 Eagle St, Albany, NY 12207',
    hours: 'Grounds accessible daily; City Hall interior during business hours',
    admission: 'Free',
    website: 'https://www.albanyny.gov',
    town: { connect: { id: 'us-ny-albany' } },
  },
  {
    id: 'place-albany-ten-broeck-mansion',
    name: 'Ten Broeck Mansion',
    placeType: 'HISTORIC_HOUSE',
    description:
      "Built 1797–1798 for Abraham Ten Broeck, Albany militia general and former mayor who led local forces at Saratoga. The Federal-style mansion reflects the prosperity that returned to Albany's elite in the years after the Revolution. Though built after the war, it memorializes the Ten Broeck family's central role in Albany's Revolutionary history. Operated by the Albany County Historical Association as a house museum.",
    lat: 42.6698,
    lng: -73.7561,
    address: '9 Ten Broeck Place, Albany, NY 12210',
    hours: 'Seasonal; Thu–Sun afternoons',
    admission: 'Adults $5',
    website: 'https://www.tenbroeckmansion.org',
    town: { connect: { id: 'us-ny-albany' } },
  },
  {
    id: 'place-albany-hudson-river-waterfront',
    name: 'Albany Hudson River Waterfront (Corning Preserve)',
    placeType: 'LANDMARK',
    description:
      "The Hudson River waterfront at Albany was the critical logistics artery of the northern war. Bateaux and other river craft carried provisions, ammunition, and troops north toward Ticonderoga, south toward New York, and upstream toward the Mohawk Valley. The current Corning Preserve along the river preserves the waterfront area and offers views of the river that explain immediately why Albany's position at the head of navigable navigation made it irreplaceable.",
    lat: 42.6480,
    lng: -73.7509,
    address: 'Corning Preserve, Albany, NY 12202',
    hours: 'Open daily, dawn to dusk',
    admission: 'Free',
    website: 'https://www.albanyny.gov/government/departments/parks-recreation/parks-golf/corning-preserve',
    town: { connect: { id: 'us-ny-albany' } },
  },
];

export const albanyAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-albany-burgoyne-as-schuyler-guest',
    name: "Burgoyne Hosted at Schuyler Mansion After Surrender",
    startDate: new Date('1777-10-20'),
    datePrecision: 'DAY',
    summary: `Following his surrender at Saratoga on October 17, 1777, General John Burgoyne was escorted to Albany and housed as a prisoner of war at Philip Schuyler's mansion — the same Schuyler whose country estate Burgoyne's troops had burned weeks earlier. Rather than offering recrimination, Schuyler received the defeated British general with elaborate courtesy.

Burgoyne reportedly expressed astonishment at the treatment. Schuyler is said to have replied that the fortunes of war made such destruction expected, and that he bore no personal animosity. The episode became well known on both sides of the Atlantic as an example of the civility that distinguished the Revolution's leadership from the war's brutality. Burgoyne's subsequent reports to London noted the hospitality with evident surprise.`,
    significanceWeight: 65,
    lat: 42.6544,
    lng: -73.7483,
    town: { connect: { id: 'us-ny-albany' } },
  },
  {
    id: 'event-albany-canada-invasion-staging',
    name: 'Albany Stages the American Invasion of Canada',
    startDate: new Date('1775-07-01'),
    datePrecision: 'MONTH',
    summary: `In the summer of 1775, Albany became the staging ground for the Continental Army's invasion of Canada — an attempt to bring the northern British colonies into the rebellion and deny Britain a base for operations against New York. Philip Schuyler, commanding the Northern Department from Albany, organized the logistics: boats, provisions, artillery, and troops assembled at the southern end of Lake Champlain and moved north.

The invasion captured Montreal in November 1775 but failed at Quebec City on December 31. The defeated American forces retreated south through Ticonderoga and Crown Point, with the British pursuing. Albany's role as the fallback logistics base proved essential: the retreating army needed a depot to reorganize and reequip before the British could press their advantage south. That recovery set the conditions for the Saratoga campaign two years later.`,
    significanceWeight: 75,
    lat: 42.6526,
    lng: -73.7562,
    town: { connect: { id: 'us-ny-albany' } },
  },
];

export const albanyLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-ny-albany' } },
    title: 'Albany as Logistics Hub: How Armies Move and Eat',
    gradeRange: '6-8',
    estimatedDuration: '2 class periods',
    summary:
      "Students examine Albany's role as the supply and logistics center of the northern theater, exploring how armies in the 18th century were fed, equipped, and moved. Using Albany as a case study, they analyze the \"unglamorous\" side of war and how logistics determined what was possible on the battlefield.",
    lessonData: {
      objectives: [
        "Explain what a \"logistics hub\" is and why Albany's location made it the ideal northern army supply center",
        'Identify the specific resources that flowed through Albany toward the northern campaigns',
        'Analyze the relationship between supply shortfalls and battlefield failure in the northern theater',
        "Evaluate Philip Schuyler's contribution as a logistician rather than a battlefield commander",
      ],
      essentialQuestions: [
        "\"An army marches on its stomach.\" What does this mean, and how does Albany's story illustrate it?",
        'Why does military history tend to focus on battles rather than logistics? What do we miss when we focus only on fighting?',
      ],
      materials: [
        "Map of Albany's position at the junction of Hudson River navigation and northern road networks",
        "Schuyler's supply requisition letters (adapted)",
        'Timeline of northern campaigns (1775 Canada invasion through 1777 Saratoga) with supply notes',
        'Logistics worksheet: what does an 18th-century army of 5,000 need per week?',
        'Modern parallel: supply chains in contemporary conflicts (brief excerpt)',
      ],
      activities: [
        {
          name: 'Geography of Supply',
          duration: '20 min',
          description:
            'Students annotate the Albany map identifying: where do supplies come from? How do they move? What happens when the route is cut? They trace the supply line from Albany to the front.',
        },
        {
          name: 'What an Army Needs',
          duration: '25 min',
          description:
            'Students complete the logistics worksheet estimating what 5,000 soldiers need weekly (food, ammunition, footwear, medical supplies) then discuss what happens when 20%, 40%, or 60% of that supply fails to arrive.',
        },
        {
          name: 'Schuyler the Organizer',
          duration: '20 min',
          description:
            "Students read excerpts from Schuyler's letters and identify: what specific problems is he solving? How does he sound compared to the battlefield generals we usually read about?",
        },
        {
          name: 'Hidden Heroes',
          duration: '25 min',
          description:
            "Students identify three people in Albany's Revolutionary history who made essential contributions but receive little recognition compared to battlefield heroes. They draft brief tributes explaining each person's contribution.",
        },
      ],
      assessment:
        "Short constructed response: \"Using evidence from Albany's role in the northern campaigns, explain why logistics — not just battlefield tactics — determined the outcome of the Saratoga campaign.\" Extension: research one logistics challenge from a modern conflict and compare to Albany's 18th-century situation.",
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information with other information in print and digital texts',
        "CCSS.ELA-LITERACY.RH.6-8.3: Identify key steps in a text's description of a process related to history",
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.Geo.2.6-8: Use maps, satellite images, and other representations to explain relationships between locations',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-ny-albany' } },
    title: 'The Schuyler Family and Power in Revolutionary New York',
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary:
      "Students examine the Schuyler family — Philip, Catherine, and Elizabeth — as a case study in how wealth, family networks, and political connections shaped the Revolution's leadership. They explore the tensions between the aristocratic world of Hudson Valley landowners and the democratic ideals the Revolution proclaimed.",
    lessonData: {
      objectives: [
        "Analyze how Philip Schuyler's wealth and family connections enabled his military and political roles",
        "Assess Catherine Schuyler's role as estate manager and her contribution to the war effort",
        "Evaluate Hamilton's marriage into the Schuyler family as a case study in social mobility and political alliance",
        "Examine the tension between the Revolution's democratic ideals and the continued influence of wealthy families like the Schuylers",
      ],
      essentialQuestions: [
        "Did the Revolution create opportunity for all, or primarily rearrange the positions of those who were already powerful?",
        'How did family connections and social capital function as military and political resources during the Revolution?',
        "What does Hamilton's marriage into the Schuyler family reveal about class and ambition in the founding era?",
      ],
      materials: [
        "Philip Schuyler's biography excerpt (from a scholarly source)",
        "Catherine Schuyler's wheat field story — primary account (adapted)",
        "Hamilton's letters to Elizabeth Schuyler during their courtship (selected excerpts)",
        "Hamilton's 1780 wedding record at Schuyler Mansion",
        'Reading: Landownership and political power in colonial New York',
      ],
      activities: [
        {
          name: 'Family Network Mapping',
          duration: '30 min',
          description:
            "Students map the Schuyler family's connections: land, political offices, military rank, marriage alliances. They then identify three specific ways these connections gave the family advantages during the Revolution.",
        },
        {
          name: "Catherine's Story",
          duration: '25 min',
          description:
            "Students read the wheat field account and analyze: what does this episode reveal about women's roles in the Revolution? What does it say about Catherine Schuyler specifically? Is it heroism, pragmatism, or both?",
        },
        {
          name: "Hamilton's Ambition",
          duration: '30 min',
          description:
            "Students read Hamilton's courtship letters and analyze his self-presentation. How does he present himself to a wealthy family? What does his marriage into the Schuylers tell us about mobility and elite society in the founding era?",
        },
        {
          name: 'Democratic Revolution?',
          duration: '35 min',
          description:
            'Structured debate: "The American Revolution was primarily a rearrangement of power among existing elites, not a democratic transformation." Students use the Schuyler family as evidence for or against this claim.',
        },
      ],
      assessment:
        'Analytical essay (1000–1300 words): "Using the Schuyler family as a case study, evaluate the extent to which the American Revolution redistributed or preserved existing social and economic power in New York." Minimum three specific pieces of evidence from primary or secondary sources.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in several primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.4.9-12: Analyze complex and interacting factors that influenced the perspectives of people during different historical eras',
        'D2.Civ.1.9-12: Distinguish the powers and responsibilities of local, state, tribal, national, and international civic and political institutions',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const albanyAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-ny-saratoga-springs',
    linkType: 'ROUTE',
    reason:
      "Albany was the supply depot and command hub for the Saratoga campaign. Every provision, reinforcement, and intelligence report that sustained Gates's army at Bemis Heights passed through Albany. The city was as essential to the American victory at Saratoga as any regiment on the battlefield.",
    weight: 95,
  },
];

// ============================================================================
// TICONDEROGA
// ============================================================================

export const ticonderogaPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-ticonderoga-fort-ticonderoga',
    name: 'Fort Ticonderoga',
    placeType: 'BATTLEFIELD',
    description:
      "The most significant fortification on the Lake Champlain–Lake George corridor, built by the French as Fort Carillon in 1755 and renamed after British capture in 1759. On May 10, 1775, Ethan Allen and the Green Mountain Boys captured it from a surprised British garrison — Allen famously demanding surrender 'in the name of the Great Jehovah and the Continental Congress.' Henry Knox hauled its cannon to Boston that winter. Burgoyne retook it in July 1777. Restored in the 20th century and operated as a private museum, it is the most fully preserved Revolutionary War fortification in the United States.",
    lat: 43.8459,
    lng: -73.3885,
    address: '100 Fort Ti Rd, Ticonderoga, NY 12883',
    hours: 'May through October, daily 9:30am–5pm',
    admission: 'Adults $25',
    website: 'https://www.fortticonderoga.org',
    town: { connect: { id: 'us-ny-ticonderoga' } },
  },
  {
    id: 'place-ticonderoga-mount-defiance',
    name: 'Mount Defiance',
    placeType: 'LANDMARK',
    description:
      "The 853-foot peak overlooking Fort Ticonderoga from the southwest that Burgoyne's artillery chief William Phillips hauled cannon up in July 1777. American commanders believed the slope too steep for artillery — they were wrong. Phillips reportedly said \"Where a goat can go, a man can go; and where a man can go, he can haul a gun.\" Once the British placed guns on the summit commanding the fort and its water approaches, the American position became untenable. The garrison evacuated July 5–6, 1777 without a fight. A road and tower at the summit offer panoramic views explaining the tactical situation immediately.",
    lat: 43.8394,
    lng: -73.3976,
    address: 'Defiance St, Ticonderoga, NY 12883',
    hours: 'Fort Ticonderoga manages seasonal access; check website',
    admission: 'Included with Fort Ticonderoga admission',
    website: 'https://www.fortticonderoga.org/visit/experience/mount-defiance',
    town: { connect: { id: 'us-ny-ticonderoga' } },
  },
  {
    id: 'place-ticonderoga-kings-garden',
    name: "King's Garden at Fort Ticonderoga",
    placeType: 'LANDMARK',
    description:
      "A restored 18th-century kitchen garden adjacent to the fort, recreated based on documentary and archaeological evidence of the French and British period. The garden provides context for understanding the garrison's self-sufficiency — how a frontier fortification fed itself, what grew in northern New York in the 18th century, and how the civilian dimensions of military life intersected. Operated by Fort Ticonderoga as an educational resource.",
    lat: 43.8462,
    lng: -73.3880,
    address: '100 Fort Ti Rd, Ticonderoga, NY 12883',
    hours: 'Open during Fort Ticonderoga hours',
    admission: 'Included with Fort Ticonderoga admission',
    website: 'https://www.fortticonderoga.org',
    town: { connect: { id: 'us-ny-ticonderoga' } },
  },
  {
    id: 'place-ticonderoga-lake-champlain-overlook',
    name: 'Lake Champlain Overlook at Fort Ticonderoga',
    placeType: 'LANDMARK',
    description:
      "The views from Fort Ticonderoga north across Lake Champlain and east across Lake George explain the fort's strategic significance in a single glance. The fort sits at the confluence of the two lakes, commanding the principal water route between Canada and the Hudson Valley. Any army moving south from Canada had to pass within artillery range of this promontory — the reason every major power in the northeastern theater fought for it.",
    lat: 43.8461,
    lng: -73.3874,
    address: '100 Fort Ti Rd, Ticonderoga, NY 12883',
    hours: 'Open during Fort Ticonderoga hours',
    admission: 'Included with Fort Ticonderoga admission',
    website: 'https://www.fortticonderoga.org',
    town: { connect: { id: 'us-ny-ticonderoga' } },
  },
  {
    id: 'place-ticonderoga-fort-ticonderoga-museum',
    name: 'Fort Ticonderoga Museum',
    placeType: 'MUSEUM',
    description:
      "The fort's museum collection includes one of the finest assemblages of French and Indian War and Revolutionary War military artifacts in North America: period weapons, uniforms, flags, maps, and documents spanning three centuries of North American warfare. The collection includes artifacts from the 1775 capture, the Knox cannon train, and Burgoyne's 1777 recapture. Scholarly programs and living history demonstrations supplement the permanent collection.",
    lat: 43.8458,
    lng: -73.3883,
    address: '100 Fort Ti Rd, Ticonderoga, NY 12883',
    hours: 'Open during Fort Ticonderoga hours',
    admission: 'Included with Fort Ticonderoga admission',
    website: 'https://www.fortticonderoga.org/explore/collections',
    town: { connect: { id: 'us-ny-ticonderoga' } },
  },
  {
    id: 'place-ticonderoga-heritage-museum',
    name: 'Ticonderoga Heritage Museum',
    placeType: 'MUSEUM',
    description:
      "Local history museum in the village of Ticonderoga interpreting the community's full history from the colonial period through the industrial era. Provides context for the fort's place in regional history and the lives of ordinary people who lived in the shadow of the strategic fortification. The community's history is inseparable from the repeated cycles of siege, capture, abandonment, and reconstruction that characterized the fort.",
    lat: 43.8493,
    lng: -73.4303,
    address: '137 Montcalm St, Ticonderoga, NY 12883',
    hours: 'Seasonal; call ahead',
    admission: 'Free',
    website: 'https://www.ticonderogaheritagemuseum.com',
    town: { connect: { id: 'us-ny-ticonderoga' } },
  },
];

export const ticonderogaAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-ticonderoga-allen-demands-surrender',
    name: "Ethan Allen Demands Surrender 'In the Name of Jehovah'",
    startDate: new Date('1775-05-10'),
    datePrecision: 'DAY',
    summary: `The capture of Fort Ticonderoga by Ethan Allen and the Green Mountain Boys on May 10, 1775 was one of the first aggressive American military actions of the Revolution. Allen's demand for surrender — delivered to the surprised British commandant before dawn — has entered American legend: he reportedly demanded it "in the name of the Great Jehovah and the Continental Congress."

The exact wording is disputed; Allen himself gave different accounts at different times. But the substance is clear: the fort fell without serious resistance, giving Americans control of the Lake Champlain corridor and access to more than a hundred pieces of artillery at a moment when the Continental Army had almost none. The cannon eventually hauled to Boston by Henry Knox forced the British evacuation of that city in March 1776 — making Ticonderoga indirectly responsible for one of the war's most decisive early outcomes.`,
    significanceWeight: 92,
    lat: 43.8459,
    lng: -73.3885,
    town: { connect: { id: 'us-ny-ticonderoga' } },
  },
  {
    id: 'event-ticonderoga-burgoyne-retakes-fort',
    name: "Burgoyne's Army Retakes Fort Ticonderoga",
    startDate: new Date('1777-07-06'),
    datePrecision: 'DAY',
    summary: `In early July 1777, Burgoyne's army approaching from the north appeared before Fort Ticonderoga. American commanders had believed the garrison's position impregnable — until British artillery chief General William Phillips hauled cannon to the summit of Mount Defiance overlooking the fort. Once guns commanded the water approaches and the fort itself, the position became indefensible.

The American garrison under General Arthur St. Clair evacuated the night of July 5–6 without a major engagement, retreating south. The loss of Ticonderoga shocked American public opinion, which had viewed the fort as a symbol of Continental strength. Congress briefly considered court-martialing St. Clair, though he was eventually acquitted — his evacuation prevented the destruction of an army that survived to fight at Hubbardton and eventually contribute to Saratoga.`,
    significanceWeight: 82,
    lat: 43.8459,
    lng: -73.3885,
    town: { connect: { id: 'us-ny-ticonderoga' } },
  },
];

export const ticonderogaLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-ny-ticonderoga' } },
    title: 'Fort Ticonderoga: Geography, Strategy, and Changing Hands',
    gradeRange: '6-8',
    estimatedDuration: '2 class periods',
    summary:
      'Students examine why Fort Ticonderoga changed hands multiple times through the lens of geography and strategy. They analyze how terrain determines the value of a military position and why the same ground kept attracting armies.',
    lessonData: {
      objectives: [
        "Explain why the Lake Champlain–Lake George corridor was the most strategically important route in the northeastern theater",
        "Trace Ticonderoga's major ownership changes and the reasons for each",
        "Analyze the role of Ethan Allen's capture in providing cannon for the Boston siege",
        "Evaluate why Burgoyne's placement of artillery on Mount Defiance made the fort suddenly indefensible",
      ],
      essentialQuestions: [
        'Why do armies keep fighting over the same ground? What makes a location permanently valuable in warfare?',
        'How did the cannon from Ticonderoga change the situation in Boston? What does this tell us about how distant events are connected?',
      ],
      materials: [
        'Map of the Lake Champlain–Lake George corridor from Montreal to Albany',
        "Timeline: Ticonderoga ownership changes 1755–1777",
        "Account of Allen's capture (adapted from Allen's own narrative)",
        'Account of British artillery placement on Mount Defiance, July 1777 (adapted)',
        "Map/diagram showing Ticonderoga's position relative to Mount Defiance",
      ],
      activities: [
        {
          name: 'The Corridor Map',
          duration: '20 min',
          description:
            "Students trace the route from Montreal to Albany on the period map, mark Fort Ticonderoga's position, and answer: why does every army moving south have to pass through here?",
        },
        {
          name: 'Timeline of Conquest',
          duration: '20 min',
          description:
            'Students place the major Ticonderoga ownership changes on a timeline and identify the reason for each. They look for patterns: what conditions consistently make the fort changeable?',
        },
        {
          name: 'The Gun That Changed Everything',
          duration: '20 min',
          description:
            "Students read about Knox's cannon train to Boston and work backward: if Allen doesn't take Ticonderoga in May 1775, does Knox have cannon for Boston? What happens to the Boston siege?",
        },
        {
          name: 'The Mountain Problem',
          duration: '30 min',
          description:
            "Students examine the map showing Mount Defiance's position above the fort and write a one-paragraph analysis: why did American commanders believe Mount Defiance was not a threat? Were they wrong, or unlucky?",
        },
      ],
      assessment:
        "Short essay (two paragraphs): \"Using at least two specific events, explain how Fort Ticonderoga's geographic position made it both extremely valuable and extremely difficult to hold permanently.\" Extension: research one other fortification that changed hands multiple times in the same war and compare the strategic logic.",
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information with other information in print and digital texts',
        "CCSS.ELA-LITERACY.RH.6-8.3: Identify key steps in a text's description of a process related to history",
      ],
      c3Framework: [
        'D2.Geo.2.6-8: Use maps, satellite images, and other representations to explain relationships between locations',
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-ny-ticonderoga' } },
    title: 'Ethan Allen and the Politics of the Green Mountain Boys',
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary:
      "Students examine Ethan Allen and the Green Mountain Boys as a case study in the complex relationship between local political ambitions, militia culture, and the Continental cause. Allen's capture of Ticonderoga was simultaneously a military act and a land-rights political maneuver — and his subsequent capture at Montreal exposed the limits of charismatic militia leadership.",
    lessonData: {
      objectives: [
        "Analyze Allen's motivations for seizing Ticonderoga, including both patriotic and land-rights dimensions",
        'Evaluate the effectiveness of Green Mountain Boys-style militia versus Continental Army regulars',
        "Assess Allen's capture near Montreal as a case study in the limits of militia tactics and leadership",
        "Connect Ticonderoga's capture to the broader pattern of local and Continental authority in the Revolution",
      ],
      essentialQuestions: [
        "Was Allen a patriot, a land speculator, or both? Does the distinction matter for how we evaluate his actions?",
        "What does the tension between militia and Continental Army tell us about the Revolution's political character?",
        "How does Allen's eventual capture reveal the difference between militia raids and sustained military operations?",
      ],
      materials: [
        "Allen's own account of the Ticonderoga capture (from \"Narrative of Colonel Ethan Allen's Captivity,\" adapted)",
        "Background reading on the New Hampshire Grants land dispute (Vermont's disputed political status)",
        "Account of Allen's failed Montreal raid, September 1775 (adapted)",
        'Comparison: Continental Army discipline vs. militia service terms',
        "Excerpt from Allen's \"Reason the Only Oracle of Man\" (brief — to illustrate his self-image)",
      ],
      activities: [
        {
          name: 'Reading Allen on Allen',
          duration: '30 min',
          description:
            "Students read Allen's own account of the Ticonderoga capture. What does he emphasize? How does he portray himself? What political points is he making beyond the military narrative?",
        },
        {
          name: 'Land Rights and Patriotism',
          duration: '25 min',
          description:
            "Students read the background on the New Hampshire Grants and discuss: how did Allen's political goals as a land speculator align with his patriot goals? Where did they conflict? Does mixed motivation invalidate his service?",
        },
        {
          name: 'Montreal and Its Limits',
          duration: '30 min',
          description:
            "Students read the account of Allen's failed Montreal raid (30 men attacking a city) and analyze: what military logic could justify this? What does it reveal about Allen's understanding of warfare? Compare to how Continental officers planned operations.",
        },
        {
          name: 'Militia vs. Continental',
          duration: '35 min',
          description:
            'Students use Allen as a case study in a broader debate: was the militia system an asset or liability for the American cause? They weigh Ticonderoga (militia success) against Montreal (militia failure) and construct a balanced assessment.',
        },
      ],
      assessment:
        "Analytical essay (1000–1300 words): \"Using Allen's career as evidence, assess the contribution and limitations of militia forces to the American Revolution.\" Students must address both specific military actions and the political culture of militia service. Minimum three specific primary or secondary sources.",
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors for how they treat the same or similar topics',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.4.9-12: Analyze complex and interacting factors that influenced the perspectives of people during different historical eras',
        'D2.His.9.9-12: Analyze the relationship between historical sources and the secondary interpretations made from them',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const ticonderogaAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-ny-saratoga-springs',
    linkType: 'SHARED_EVENT',
    reason:
      "Burgoyne's 1777 campaign began with his retaking of Ticonderoga in July and ended with his surrender at Saratoga in October. The two events are the opening and closing acts of the same operation — the British attempt to seize the Hudson Valley that Ticonderoga's fall made possible and Saratoga made catastrophic.",
    weight: 94,
  },
];

// ============================================================================
// WEST POINT
// ============================================================================

export const westPointPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-west-point-usma-grounds',
    name: 'United States Military Academy at West Point',
    placeType: 'LANDMARK',
    description:
      "Founded in 1802 on the same ground Kosciuszko fortified in 1778, West Point Military Academy occupies the plateau above the Hudson's S-bend that Washington called the most important position in North America. The Academy's grounds encompass Fort Putnam, the site of the Great Chain, and the overlook where Washington directed the fortress's construction. Trophy Point displays a section of the original 1778 Great Chain. The West Point Museum, open to the public, holds the finest collection of military artifacts in the United States.",
    lat: 41.3915,
    lng: -73.9568,
    address: 'West Point, NY 10996',
    hours: 'Grounds open daily; Museum: Tue–Sun 10:30am–4:15pm',
    admission: 'Free (museum); visitor center required for campus access',
    website: 'https://www.westpoint.edu/about/west-point-museum',
    town: { connect: { id: 'us-ny-west-point' } },
  },
  {
    id: 'place-west-point-fort-putnam',
    name: 'Fort Putnam',
    placeType: 'BATTLEFIELD',
    description:
      "Kosciuszko's primary fort on the heights above the Academy, completed 1778 and restored in the 1970s–80s. Fort Putnam commanded the plateau and the approaches to the main West Point position. It was the key fortification in the interlocking system that made a direct British assault prohibitively costly. Walking the restored earthworks provides direct experience of 18th-century fortification engineering and a commanding view over the Hudson Valley.",
    lat: 41.3862,
    lng: -73.9594,
    address: 'West Point Military Academy, NY 10996',
    hours: 'Seasonal; check Academy visitor policies',
    admission: 'Free with Academy access',
    website: 'https://www.westpoint.edu',
    town: { connect: { id: 'us-ny-west-point' } },
  },
  {
    id: 'place-west-point-trophy-point-great-chain',
    name: 'Trophy Point and the Great Chain',
    placeType: 'MONUMENT',
    description:
      "Trophy Point on the Academy grounds displays a substantial section of the original 1778 Great Chain — the massive iron chain stretched across the Hudson River to block British warships. Each link weighs approximately 114 pounds; the full chain weighed roughly 65 tons and stretched 1,700 feet across the river. The chain was installed each spring and removed each winter. The surviving links at Trophy Point are the most tangible physical remnant of the fortification that defined West Point's Revolutionary War role.",
    lat: 41.3926,
    lng: -73.9543,
    address: 'Trophy Point, West Point, NY 10996',
    hours: 'Accessible during Academy visiting hours',
    admission: 'Free with Academy access',
    website: 'https://www.westpoint.edu',
    town: { connect: { id: 'us-ny-west-point' } },
  },
  {
    id: 'place-west-point-constitution-island',
    name: 'Constitution Island',
    placeType: 'BATTLEFIELD',
    description:
      "The island across the Hudson from West Point that anchored the American side of the Great Chain. Batteries on Constitution Island together with the West Point shore batteries created a crossfire covering the river approach. Fort Constitution was an early American fortification here. The island later became the home of the Warner family, whose daughters conducted Sunday school classes for cadets throughout the 19th century. The Constitution Island Association manages access.",
    lat: 41.3971,
    lng: -73.9481,
    address: 'Constitution Island, Cold Spring, NY 10516',
    hours: 'Seasonal tours; contact Constitution Island Association',
    admission: 'Tour fees apply',
    website: 'https://www.constitutionisland.org',
    town: { connect: { id: 'us-ny-west-point' } },
  },
  {
    id: 'place-west-point-kosciuszko-garden',
    name: "Kosciuszko's Garden",
    placeType: 'LANDMARK',
    description:
      "A small garden carved into the rocky bluff above the Hudson River by Thaddeus Kosciuszko during his engineering work at West Point, 1778–1780. Kosciuszko created the garden with a waterfall and plantings as a contemplative space during his years at the fortress. It is the only surviving physical work Kosciuszko made at West Point that is not a fortification. A stone marker commemorates the site, which remains a quiet corner of the Academy grounds.",
    lat: 41.3887,
    lng: -73.9537,
    address: 'West Point Military Academy, NY 10996',
    hours: 'Accessible during Academy visiting hours',
    admission: 'Free with Academy access',
    website: 'https://www.westpoint.edu',
    town: { connect: { id: 'us-ny-west-point' } },
  },
  {
    id: 'place-west-point-museum',
    name: 'West Point Museum',
    placeType: 'MUSEUM',
    description:
      "The oldest and largest military museum in the United States, with collections spanning from ancient warfare to modern conflicts. The Revolutionary War galleries include artifacts from the West Point fortifications, the Arnold-André conspiracy, and the Great Chain. The museum's depth makes it an essential resource for understanding not just West Point's role in the Revolution but the full arc of American military history that developed from the fortress's founding.",
    lat: 41.3930,
    lng: -73.9565,
    address: '2110 New South Post Rd, West Point, NY 10996',
    hours: 'Tue–Sun 10:30am–4:15pm',
    admission: 'Free',
    website: 'https://www.westpoint.edu/about/west-point-museum',
    town: { connect: { id: 'us-ny-west-point' } },
  },
];

export const westPointAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-west-point-kosciuszko-designs-fortifications',
    name: 'Kosciuszko Designs the West Point Fortification System',
    startDate: new Date('1778-03-01'),
    datePrecision: 'MONTH',
    summary: `In March 1778, Thaddeus Kosciuszko arrived at West Point and began laying out the fortification system that would make the position impregnable. The Polish engineer — who had previously designed the American position at Saratoga — recognized immediately that the Hudson's S-bend created unique defensive conditions: ships had to slow nearly to a stop as they navigated the curve, and heights above both shores could bring sustained fire to bear from multiple angles simultaneously.

Kosciuszko designed interlocking batteries at multiple elevations, redoubts commanding the plateau approaches, and a great chain across the river. The system he designed was never tested in direct assault — the British never attempted it. His work at West Point is his most substantial surviving contribution to the American cause, occupying the same ground where the Military Academy he inspired was later built.`,
    significanceWeight: 80,
    lat: 41.3915,
    lng: -73.9568,
    town: { connect: { id: 'us-ny-west-point' } },
  },
  {
    id: 'event-west-point-usma-founded',
    name: 'United States Military Academy Founded at West Point',
    startDate: new Date('1802-07-04'),
    datePrecision: 'DAY',
    summary: `On July 4, 1802, the United States Military Academy formally opened at West Point, occupying the same plateau Kosciuszko had fortified in 1778. The Academy was the realization of a goal Washington and Hamilton had long urged: an institution that would train professional officers for the republic's permanent army, reducing dependence on improvised leadership and European volunteer officers.

The first class was small and the curriculum rudimentary, but the institution grew rapidly. West Point graduates — Robert E. Lee, Ulysses Grant, William Sherman, among hundreds of others — would shape American military history for the next two centuries. The Academy's founding on Revolutionary War ground was not accidental: it expressed the continuity between the war that created the republic and the professional military force that would defend it.`,
    significanceWeight: 85,
    lat: 41.3915,
    lng: -73.9568,
    town: { connect: { id: 'us-ny-west-point' } },
  },
];

export const westPointLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-ny-west-point' } },
    title: 'The Great Chain: Engineering the Hudson River Defense',
    gradeRange: '6-8',
    estimatedDuration: '2 class periods',
    summary:
      "Students examine the Great Chain at West Point as a case study in Revolutionary War engineering and the relationship between technology and strategy. They analyze how Kosciuszko designed a defensive system using 18th-century resources to solve a specific military problem — blocking British naval access to the Hudson River's most vulnerable point.",
    lessonData: {
      objectives: [
        'Describe the engineering challenge the Great Chain was designed to solve and how the solution worked',
        "Explain Kosciuszko's interlocking fortification system and why it was considered impregnable",
        'Analyze the relationship between terrain, technology, and strategy at West Point',
        'Evaluate why the British never attempted a direct assault despite the Hudson\'s strategic importance',
      ],
      essentialQuestions: [
        'How do engineers solve military problems? What resources and constraints did Kosciuszko work with at West Point?',
        'If West Point was "impregnable," why was it nearly lost? What does the Arnold conspiracy tell us about the limits of fortification?',
      ],
      materials: [
        'Diagram of the West Point fortification system with labeled batteries, redoubts, and chain position',
        'Photograph and measurements of the surviving Great Chain links at Trophy Point',
        "Map of the Hudson River S-bend and why ships had to slow at the curve",
        '18th-century iron chain production overview (how was the chain made?)',
        "Account of the Arnold conspiracy: why did Arnold try to surrender the fortress rather than storm it?",
      ],
      activities: [
        {
          name: 'Engineering the Problem',
          duration: '25 min',
          description:
            'Students examine the Hudson S-bend map and the chain diagram. They identify: what problem is the chain solving? How do the shore batteries work together with the chain? What happens if a ship reaches the chain?',
        },
        {
          name: 'Building the Chain',
          duration: '20 min',
          description:
            'Students learn the basic facts about the chain (65 tons, 114-pound links, 1,700 feet long) and calculate: how many workers, how long to produce, how long to install? What does this tell us about 18th-century industrial capacity?',
        },
        {
          name: 'The Impregnable Fortress',
          duration: '20 min',
          description:
            'Students read about British strategic assessments of West Point and discuss: if the fortress was truly impregnable to assault, why did the British want it so badly? Why did Arnold try to give it away rather than storm it?',
        },
        {
          name: 'Then and Now',
          duration: '25 min',
          description:
            "Students compare Kosciuszko's 18th-century fortification to modern military engineering concepts. What is the same — controlling key terrain, overlapping fields of fire? What has changed?",
        },
      ],
      assessment:
        "Short constructed response (one paragraph): \"Using specific evidence from the Great Chain and West Point's fortification system, explain how Kosciuszko solved the problem of defending the Hudson River against British naval power.\" Extension: research one modern military fortification and compare its design logic to West Point's.",
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information with other information in print and digital texts',
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
      ],
      c3Framework: [
        'D2.Geo.2.6-8: Use maps, satellite images, and other representations to explain relationships between locations',
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-ny-west-point' } },
    title: "Arnold's Betrayal: Treason, Honor, and the Price of the War",
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary:
      "Students analyze the Arnold-André conspiracy as a case study in the intersection of personal grievance, political calculation, and strategic consequence. They examine what Arnold was selling, what the British were buying, and what the episode reveals about the fragility of the American cause in 1780.",
    lessonData: {
      objectives: [
        "Reconstruct the Arnold-André conspiracy from initial contact through André's capture and execution",
        "Analyze Arnold's specific grievances — financial, professional, political — and evaluate their role in his treason",
        'Assess the strategic consequences if West Point had been surrendered in September 1780',
        "Evaluate the ethics of André's execution and Washington's decision, using primary sources",
      ],
      essentialQuestions: [
        "Was Arnold's treason a rational political decision, an emotional breakdown, or both? What evidence supports each interpretation?",
        "Was André a spy or a prisoner of war? How does the answer affect the ethics of his execution?",
        'What does the near-success of the conspiracy reveal about the vulnerabilities of the American war effort in 1780?',
      ],
      materials: [
        "Arnold's letter to British command expressing initial willingness to defect (adapted)",
        "André's letter to Washington requesting execution by firing squad rather than hanging (primary source, adapted)",
        "Washington's reply to André (adapted)",
        "Hamilton's letter describing André's behavior and his own reaction (adapted)",
        'Intelligence assessment: what would British control of West Point have meant strategically?',
      ],
      activities: [
        {
          name: 'Reconstructing the Conspiracy',
          duration: '30 min',
          description:
            "Students reconstruct the conspiracy timeline from Arnold's first contact with the British (1779) through André's capture (September 23, 1780). They identify: where could the conspiracy have been detected? What prevented earlier discovery?",
        },
        {
          name: "Arnold's Grievances",
          duration: '25 min',
          description:
            "Students read Arnold's letter and then the timeline of his professional grievances. They categorize: which grievances were legitimate? Which reflected wounded pride? Does legitimate grievance create a right to treason?",
        },
        {
          name: 'The André Letters',
          duration: '30 min',
          description:
            "Students read André's letter to Washington requesting a soldier's death and Washington's reply. They analyze: what values does each man express? Why did André's dignified conduct generate such sympathy — from Hamilton, from other American officers?",
        },
        {
          name: 'Strategic Consequences',
          duration: '35 min',
          description:
            'Students read the strategic assessment and work through: if West Point had fallen in September 1780, what happens? Could the British split the colonies? What does this reveal about how close the American cause came to failure?',
        },
      ],
      assessment:
        'Document-based essay (1000–1300 words) responding to: "Using at least three primary source documents, explain why Arnold committed treason and evaluate whether the American response — hanging André, pursuing Arnold — was justified." Students must address both historical causation and ethical evaluation.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        "CCSS.ELA-LITERACY.RH.9-10.8: Assess the extent to which the reasoning and evidence in a text support the author's claims",
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.4.9-12: Analyze complex and interacting factors that influenced the perspectives of people during different historical eras',
        'D2.Civ.14.9-12: Analyze historical, contemporary, and emerging means of changing societies, governments, and laws',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const westPointAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-ny-saratoga-springs',
    linkType: 'SHARED_PERSON',
    reason:
      "Thaddeus Kosciuszko designed the American defensive position at Saratoga (Bemis Heights, 1777) and then designed the West Point fortifications (1778–1780). His engineering work shaped both the battle that turned the war and the fortress that anchored the Hudson Valley for the war's remainder. Benedict Arnold led the charge that sealed Saratoga and later tried to sell West Point — his career connects both sites at their most dramatic moments.",
    weight: 88,
  },
];
