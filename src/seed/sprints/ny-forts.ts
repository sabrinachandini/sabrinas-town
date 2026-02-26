// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// New York Revolutionary War Forts: Stony Point (Wayne assault, July 1779) & Crown Point (Lake Champlain)
import { Prisma } from '@prisma/client';
// -- STONY POINT, NY ----------------------------------------------------------
export const stonyPointTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Stony Point occupies a rocky peninsula jutting into the Hudson River forty miles north of New York City, and in the summer of 1779 it became the site of one of the most audacious American operations of the entire war. The British seized the promontory in late May 1779 to tighten their grip on the Hudson Highlands. General Anthony Wayne's midnight assault on July 15–16, 1779 retook it in under an hour — a bayonet-only night charge that electrified the Continental Army and proved American troops could match British regulars in the kind of disciplined close-quarters action Europeans considered the ultimate test of military quality.

The geographic stakes were existential. The British occupied New York City throughout the war, and control of the Hudson Valley north of the city was a persistent objective on both sides. A continuous British line of control up the river to West Point would sever New England from the middle and southern states, splitting the American theater. Stony Point was the chokepoint where the river narrows and heights command the passage absolutely.

Wayne's plan required extraordinary discipline. His light infantry corps — approximately 1,350 men — moved through broken terrain in complete silence, muskets unloaded, orders to use only bayonets until the fort fell. Dogs were killed beforehand to prevent barking. Forlorn hope volunteers led each column into the British abatis, cutting obstacles under fire while the main columns pushed through. The assault began around 12:30 AM and ended in roughly forty-five minutes. Some 470 British were captured; American casualties were 15 killed and 83 wounded.

The victory was tactically brilliant but strategically temporary. Washington ordered the fort demolished and abandoned within days, correctly assessing that holding it required unavailable reinforcements. Henry Johnson, the captured British commander, praised the assault in terms circulated through American newspapers and across the Atlantic. Congress awarded Wayne a gold medal — only the fourth of the war — and authorized the first cash bonuses for enlisted valor in American history.

Stony Point is the hinge of the broader Hudson Highlands chapter — the moment American arms demonstrated, unambiguously, that they had arrived as a professional fighting force. Arnold's defection, André's execution at Tappan, and Rochambeau's 1781 southward march through the same corridor toward Yorktown all follow from the strategic context that Wayne's assault helped define.`,
};
// -- STONY POINT: PEOPLE -------------------------------------------------------
export const stonyPointPeople: Array<{ person: Prisma.PersonCreateInput; connectionNote: string }> = [
  {
    person: {
      id: 'person-anthony-wayne',
      name: 'Anthony Wayne',
      roles: ['Continental Army General', 'Light Infantry Corps Commander', 'Pennsylvania Brigade Commander'],
      bioShort: 'Pennsylvania Continental general known as "Mad Anthony." Commanded the light infantry corps that stormed Stony Point July 15–16, 1779 in a bayonet-only night assault. Awarded a Congressional gold medal. Later served at Yorktown and commanded the Legion of the United States on the northwestern frontier.',
      birthYear: 1745,
      deathYear: 1796,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Planned and commanded the Stony Point assault; the operation was his strategic conception and personal triumph.',
  },
  {
    person: {
      id: 'person-henry-johnson-british',
      name: 'Henry Johnson',
      roles: ['British Army Lieutenant Colonel', 'Stony Point Garrison Commander'],
      bioShort: 'British lieutenant colonel commanding the Stony Point garrison when Wayne\'s forces stormed the fort July 15–16, 1779. Captured in the assault, his subsequent praise of American discipline and execution was widely reprinted, amplifying the victory\'s political impact beyond its tactical significance.',
      birthYear: 1748,
      deathYear: 1816,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'British commander captured in the assault; his acknowledged praise of American professionalism enhanced the victory\'s political resonance.',
  },
  {
    person: {
      id: 'person-francois-fleury',
      name: 'François-Louis Teissèdre de Fleury',
      roles: ['Continental Army Lieutenant Colonel', 'French Volunteer Officer'],
      bioShort: 'French volunteer officer who led the first forlorn hope column at Stony Point and was first over the parapet into the British works. Awarded a Congressional silver medal — one of the few individual medals given to sub-general officers during the war. His performance exemplified French volunteers\' contribution to Continental effectiveness.',
      birthYear: 1749,
      deathYear: 1814,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Led the forlorn hope and was first to breach the British works; received a Congressional silver medal.',
  },
  {
    person: {
      id: 'person-john-stewart-stony-point',
      name: 'John Stewart',
      roles: ['Continental Army Major', 'Light Infantry Officer'],
      bioShort: 'Continental major who commanded the second forlorn hope column at Stony Point, leading volunteers into British fire to cut the abatis and clear the way for the main assault. His unit suffered the heaviest casualties of the operation. Congress awarded him a silver medal alongside Fleury.',
      birthYear: 1752,
      deathYear: 1790,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Led the second forlorn hope at Stony Point; received a Congressional silver medal for valor under fire.',
  },
  {
    person: {
      id: 'person-george-washington-stony-point',
      name: 'George Washington',
      roles: ['Continental Army Commander-in-Chief'],
      bioShort: 'Commander-in-Chief who personally scouted and approved the Stony Point assault plan, then with strategic clarity ordered the fort demolished and abandoned after the victory rather than expend unavailable forces defending an exposed position.',
      birthYear: 1732,
      deathYear: 1799,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Authorized the Stony Point operation and personally reconnoitered the terrain beforehand.',
  },
  {
    person: {
      id: 'person-richard-butler-stony-point',
      name: 'Richard Butler',
      roles: ['Continental Army Colonel', 'Light Infantry Regiment Commander'],
      bioShort: 'Pennsylvania Continental colonel who commanded one of the assault columns at Stony Point. One of Wayne\'s most capable subordinates. Later served in the western theater and was killed at the Battle of the Wabash (St. Clair\'s Defeat) in 1791.',
      birthYear: 1743,
      deathYear: 1791,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Commanded an assault column at Stony Point; one of Wayne\'s principal tactical subordinates.',
  },
  {
    person: {
      id: 'person-henry-lee-stony-point',
      name: 'Henry "Light-Horse Harry" Lee',
      roles: ['Continental Army Lieutenant Colonel', 'Cavalry Commander', 'Intelligence Officer'],
      bioShort: 'Virginia cavalry officer who conducted reconnaissance of Stony Point and captured a local loyalist whose information on the fort\'s layout proved essential to Wayne\'s plan. One month later, Lee won his own Congressional gold medal for a similar surprise raid on Paulus Hook, NJ.',
      birthYear: 1756,
      deathYear: 1818,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Conducted the reconnaissance and secured the intelligence that made Wayne\'s assault plan possible.',
  },
  {
    person: {
      id: 'person-allan-mclane',
      name: 'Allan McLane',
      roles: ['Continental Army Captain', 'Scout and Intelligence Officer'],
      bioShort: 'Delaware Continental captain who infiltrated Stony Point before the assault, posing as a civilian to observe British defenses. His firsthand intelligence on abatis positions, sentry placement, and interior layout directly shaped the final attack plan. One of the most effective intelligence operatives on the Continental side.',
      birthYear: 1746,
      deathYear: 1829,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Infiltrated Stony Point in disguise before the assault; his intelligence observations shaped the final attack plan.',
  },
];
// -- STONY POINT: PLACES -------------------------------------------------------
export const stonyPointPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-stony-point-battlefield',
    name: 'Stony Point Battlefield State Historic Site',
    placeType: 'BATTLEFIELD',
    description: 'Preserved site of the July 15–16, 1779 assault. The rocky promontory commands the Hudson River narrows. Contains reconstructed earthworks, walking trails following the assault routes, the 1826 lighthouse, and a museum with period artifacts including ordnance recovered from the site. The steep, rocky terrain communicates viscerally what Wayne\'s men accomplished in darkness.',
    lat: 41.2351,
    lng: -73.9806,
    address: '44 Battlefield Rd, Stony Point, NY 10980',
    hours: 'Mid-April through October, Wed–Sun 10am–5pm',
    admission: 'Free',
    website: 'https://parks.ny.gov/historic-sites/stony-point-battlefield',
    town: { connect: { id: 'us-ny-stony-point' } },
  },
  {
    id: 'place-stony-point-lighthouse',
    name: 'Stony Point Lighthouse',
    placeType: 'MONUMENT',
    description: 'The oldest lighthouse on the Hudson River, built 1826 on the Stony Point promontory. Sits near the summit that British forces fortified in 1779. Managed as part of the state historic site and open during site hours, the lighthouse provides an elevated reference point for understanding the geography of the assault.',
    lat: 41.2356,
    lng: -73.9812,
    address: '44 Battlefield Rd, Stony Point, NY 10980',
    town: { connect: { id: 'us-ny-stony-point' } },
  },
  {
    id: 'place-stony-point-museum',
    name: 'Stony Point Battlefield Museum',
    placeType: 'MUSEUM',
    description: 'On-site museum interpreting the July 1779 assault and Hudson Highlands campaign. Exhibits include period weapons, ordnance fragments, assault maps, biographical information on Wayne and key participants, and the Congressional medals awarded for the action. Essential orientation before walking the battlefield trails.',
    lat: 41.2349,
    lng: -73.9804,
    address: '44 Battlefield Rd, Stony Point, NY 10980',
    town: { connect: { id: 'us-ny-stony-point' } },
  },
  {
    id: 'place-stony-point-tappan-village',
    name: 'Tappan Historic District (André Execution Site)',
    placeType: 'LANDMARK',
    description: 'The village where British Major John André was tried as a spy and hanged on October 2, 1780, after being captured with incriminating documents linking him to Benedict Arnold\'s West Point plot. Tappan is linked to the Stony Point story through the same Hudson Highlands strategic corridor; the two episodes — Wayne\'s triumph and Arnold\'s betrayal — bracket the most consequential year of northern theater operations.',
    lat: 41.0254,
    lng: -73.9499,
    address: 'Main Street, Tappan, NY 10983',
    town: { connect: { id: 'us-ny-stony-point' } },
  },
  {
    id: 'place-stony-point-hudson-overlook',
    name: 'Hudson River Overlook at Stony Point',
    placeType: 'LANDMARK',
    description: 'Elevated overlook at the tip of the Stony Point promontory with views of the Hudson narrows both north toward West Point and south toward New York. Ships slowed in the narrows below, vulnerable to artillery from the heights. This view explains immediately why control of the point mattered to both sides throughout the war.',
    lat: 41.2360,
    lng: -73.9818,
    address: 'Stony Point Battlefield State Historic Site, NY 10980',
    town: { connect: { id: 'us-ny-stony-point' } },
  },
  {
    id: 'place-stony-point-assault-trail',
    name: 'Assault Route Trail',
    placeType: 'TRAIL',
    description: 'Walking trail following the approximate routes of the two assault columns on the night of July 15–16, 1779. Interpretive markers describe Wayne\'s plan, the forlorn hope units, the silence order, and the assault sequence. Walking the steep rocky approach in daylight makes viscerally clear what the men accomplished in darkness with unloaded muskets.',
    lat: 41.2345,
    lng: -73.9800,
    address: '44 Battlefield Rd, Stony Point, NY 10980',
    town: { connect: { id: 'us-ny-stony-point' } },
  },
];
// -- STONY POINT: EVENTS -------------------------------------------------------
export const stonyPointEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-stony-point-british-capture',
    name: 'British Forces Seize Stony Point',
    startDate: new Date('1779-05-30'),
    datePrecision: 'DAY',
    summary: 'On May 30, 1779, British forces under Sir Henry Clinton seized Stony Point and Fort Lafayette at Verplanck\'s Point, eliminating King\'s Ferry — the primary Continental crossing of the lower Hudson. The loss disrupted Continental logistics and communications along the Hudson, forcing Washington to reassess his Highlands position and ultimately prompting the decision to retake the point.',
    significanceWeight: 78,
    lat: 41.2351,
    lng: -73.9806,
    town: { connect: { id: 'us-ny-stony-point' } },
  },
  {
    id: 'event-stony-point-wayne-assigned',
    name: 'Washington Assigns Wayne to Command Light Infantry Corps',
    startDate: new Date('1779-06-21'),
    datePrecision: 'DAY',
    summary: 'Washington formally assigned Brigadier General Anthony Wayne to command the newly organized Continental Light Infantry Corps — approximately 1,350 picked men drawn from multiple regiments for rapid offensive operations. The assignment came with an implicit understanding that Wayne would be used against Stony Point. Intelligence collection on the fort\'s defenses through Lee\'s cavalry and McLane\'s scouts was already underway.',
    significanceWeight: 70,
    lat: 41.2351,
    lng: -73.9806,
    town: { connect: { id: 'us-ny-stony-point' } },
  },
  {
    id: 'event-stony-point-washington-recon',
    name: 'Washington Personally Reconnoiters Stony Point',
    startDate: new Date('1779-07-07'),
    datePrecision: 'DAY',
    summary: 'Washington personally rode to observe Stony Point and evaluate the British works before committing to an assault plan — an unusual step for a commander-in-chief reflecting the operation\'s importance. He concluded the fort was assailable and directed Wayne to develop a detailed plan. McLane had already infiltrated the point in disguise and confirmed the abatis layout and sentry schedules.',
    significanceWeight: 72,
    lat: 41.2351,
    lng: -73.9806,
    town: { connect: { id: 'us-ny-stony-point' } },
  },
  {
    id: 'event-stony-point-assault',
    name: 'Wayne\'s Midnight Assault on Stony Point',
    startDate: new Date('1779-07-16'),
    datePrecision: 'DAY',
    summary: 'Beginning around 12:30 AM on July 16, 1779, Wayne\'s 1,350-man light infantry corps stormed the British fortification in a two-column bayonet assault. Forlorn hope volunteers preceded each column, cutting through the abatis under fire. The assault succeeded in approximately forty-five minutes. The British garrison of roughly 625 suffered 63 killed, 70 wounded, and 472 captured. American casualties: 15 killed, 83 wounded. Wayne was grazed by a bullet near the fort\'s fall and asked to be carried inside in case his wound was mortal. It was not.',
    significanceWeight: 96,
    lat: 41.2351,
    lng: -73.9806,
    town: { connect: { id: 'us-ny-stony-point' } },
  },
  {
    id: 'event-stony-point-congress-medals',
    name: 'Congress Awards Gold and Silver Medals for Stony Point',
    startDate: new Date('1779-07-26'),
    datePrecision: 'DAY',
    summary: 'The Continental Congress awarded Wayne a gold medal (only the fourth of the war), silver medals to Fleury and Stewart, and authorized the first cash bonuses for enlisted valor in American history. The awards were both genuine recognition of military achievement and a deliberate political statement about Continental Army capability circulated domestically and abroad.',
    significanceWeight: 82,
    lat: 41.2351,
    lng: -73.9806,
    town: { connect: { id: 'us-ny-stony-point' } },
  },
  {
    id: 'event-stony-point-demolition',
    name: 'Washington Orders Stony Point Demolished and Abandoned',
    startDate: new Date('1779-07-18'),
    datePrecision: 'DAY',
    summary: 'Within two days of the assault, Washington ordered the fortifications demolished and the position abandoned — a decision revealing strategic maturity over symbolic possession. Holding Stony Point would require a garrison unavailable elsewhere and expose troops to British counterattack from New York. The guns and stores were carried off, the earthworks leveled. The British reoccupied the point shortly but found little to salvage.',
    significanceWeight: 74,
    lat: 41.2351,
    lng: -73.9806,
    town: { connect: { id: 'us-ny-stony-point' } },
  },
  {
    id: 'event-stony-point-paulus-hook',
    name: 'Lee Raids Paulus Hook',
    startDate: new Date('1779-08-19'),
    datePrecision: 'DAY',
    summary: 'Five weeks after Stony Point, Lieutenant Colonel Henry Lee led a surprise raid on the British garrison at Paulus Hook (present-day Jersey City), capturing 158 prisoners. Lee followed Wayne\'s tactical template: night march, silence, bayonets-forward assault. Congress awarded Lee a gold medal, pairing the two operations as a year-end demonstration of Continental light infantry capability.',
    significanceWeight: 76,
    lat: 40.7282,
    lng: -74.0282,
    town: { connect: { id: 'us-ny-stony-point' } },
  },
  {
    id: 'event-stony-point-arnold-defection',
    name: 'Benedict Arnold\'s Defection and the West Point Plot',
    startDate: new Date('1780-09-25'),
    datePrecision: 'DAY',
    summary: 'On September 25, 1780, Arnold — given command of West Point — defected to the British after his plot to surrender the fort was exposed by Major John André\'s capture near Tarrytown. Arnold escaped to the British warship Vulture; André was tried and hanged at Tappan on October 2. The defection placed in shadow the entire Hudson Highlands campaign, including Stony Point, that had protected the approach to West Point.',
    significanceWeight: 88,
    lat: 41.3751,
    lng: -73.9574,
    town: { connect: { id: 'us-ny-stony-point' } },
  },
  {
    id: 'event-stony-point-kings-ferry-restored',
    name: 'King\'s Ferry Crossing Restored to American Use',
    startDate: new Date('1779-07-16'),
    datePrecision: 'DAY',
    summary: 'The Stony Point assault immediately restored American access to King\'s Ferry, the primary Hudson River crossing. Although Washington chose not to hold Stony Point, the British pressure on the crossing eased. Continental forces used King\'s Ferry for the remainder of active northern operations, including the French and American southward march toward Yorktown in September 1781.',
    significanceWeight: 79,
    lat: 41.2351,
    lng: -73.9806,
    town: { connect: { id: 'us-ny-stony-point' } },
  },
  {
    id: 'event-stony-point-rochambeau-march',
    name: 'Rochambeau\'s Army Marches Past Stony Point Toward Yorktown',
    startDate: new Date('1781-08-24'),
    datePrecision: 'DAY',
    summary: 'In late August 1781, the combined French and American forces under Rochambeau and Washington marched south through New Jersey toward Virginia and the Yorktown siege, crossing the Hudson via King\'s Ferry near Stony Point. The corridor that Wayne\'s 1779 assault had helped keep open was the route by which the allied armies that ended the war in the south made their crucial southward movement.',
    significanceWeight: 82,
    lat: 41.2351,
    lng: -73.9806,
    town: { connect: { id: 'us-ny-stony-point' } },
  },
];
// -- STONY POINT: STORIES ------------------------------------------------------
export const stonyPointStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-stony-point-silent-assault',
    title: 'No Muskets: The Logic of Bayonets Only',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-anthony-wayne' } },
    verificationStatus: 'VERIFIED',
    textVersion: `The order that made Stony Point possible went against every soldier's instinct: leave your muskets unloaded. If you fire before the fort is taken, you will be flogged. Wayne understood that the traditional approach against a prepared position — advance, fire, suppress, repeat — was nearly suicidal against an abatis. The defenders had the light, the high ground, and the protection. The attackers had only darkness and momentum, and only if they kept moving.

The bayonets-only order was his recognition that momentum was worth more than firepower. At the abatis — overlapping rows of sharpened branches — any pause let defenders organize and direct accurate fire into a stationary mass. If the columns kept moving, even through casualties, the defenders faced hand-to-hand combat with men who had come too far to be stopped.

The forlorn hope units volunteered knowing their job was not to survive the abatis but to clear it. Wayne offered prize money to survivors. He offered nothing to those who did not survive, which was understood. What the assault proved was not that American troops were brave — bravery was never in question — but that they could be disciplined under conditions that stripped away every conventional comfort. No firepower. No light. No noise.

The British commander Henry Johnson, writing afterward, called it one of the most daring enterprises he had ever witnessed. Wayne's men did what professional European soldiers considered the hardest thing in warfare. They did it in forty-five minutes.`,
    tags: ['Wayne', 'bayonet', 'light infantry', 'discipline', 'night assault', 'forlorn hope'],
    town: { connect: { id: 'us-ny-stony-point' } },
  },
  {
    id: 'story-stony-point-hudson-strategy',
    title: 'The River That Could Cut a Nation in Half',
    storyType: 'MODERN_VOICE',
    narratorName: 'Hudson Valley Historian',
    narratorRole: 'Interpretive Ranger, Stony Point Battlefield State Historic Site',
    verificationStatus: 'VERIFIED',
    textVersion: `People come to Stony Point, see a pretty view of the Hudson and a lighthouse, and are surprised this place was worth dying for. Then you explain the geography, and it clicks. The Hudson was the one natural highway running north-south through the northeastern states. Control the river from New York City through the Highlands, and you cut New England off from the middle and southern states.

This was Burgoyne's strategy in 1777 — Burgoyne from the north, Howe from the south, meeting in the middle to split the states. It failed at Saratoga. But the logic didn't disappear. In 1779 Clinton seized Stony Point because the Highlands were still the key.

Wayne's assault demonstrated that the British could not establish that line without constant exposure to sudden, perfectly planned counterattack. You can fortify Stony Point, but you are then garrisoning a position that can be stormed at midnight by a man training his infantry for exactly this purpose. The costs become unpredictable. Unpredictable calculations, in a war of attrition Britain was slowly losing, cut in favor of the Americans. Stand at the overlook on a clear day. Look south toward New York. Look north toward West Point. The river tells the whole story.`,
    tags: ['Hudson River', 'strategy', 'geography', 'British strategy', 'attrition'],
    town: { connect: { id: 'us-ny-stony-point' } },
  },
];
// -- STONY POINT: LESSON PLANS -------------------------------------------------
export const stonyPointLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-ny-stony-point' } },
    title: 'The Midnight Assault: Planning, Discipline, and Military Risk',
    gradeRange: '6-8',
    estimatedDuration: '2 class periods',
    summary: 'Students examine Wayne\'s Stony Point assault as a case study in military planning and risk management. Using period accounts, maps, and the constraints of a bayonet-only charge, students analyze how Wayne identified and mitigated risks, how the forlorn hope concept worked, and what made this operation different from conventional 18th-century tactics.',
    lessonData: {
      objectives: [
        'Explain why Wayne chose a bayonet-only assault and analyze the tactical logic of the silence order',
        'Identify the function of forlorn hope units and how they changed the main assault\'s risk profile',
        'Construct a basic risk-mitigation analysis using Stony Point as a model',
        'Evaluate the relationship between training, discipline, and mission success using primary accounts',
      ],
      essentialQuestions: [
        'How do military commanders identify and reduce risk? What did Wayne do that conventional commanders did not?',
        'What does military "discipline" mean, and how does training create it? What evidence do we have from Stony Point?',
      ],
      materials: [
        'Period map of Stony Point showing abatis positions and assault column routes',
        'Wayne\'s operational orders (adapted) including the bayonet-only directive',
        'Fleury\'s after-action report excerpt (adapted)',
        'Henry Johnson\'s account praising American discipline (adapted)',
        'Risk-mitigation planning worksheet',
      ],
      activities: [
        { name: 'Read the Terrain', duration: '20 min', description: 'Students examine the period map and satellite imagery side by side, identify approach routes and abatis lines, then identify the three greatest risks of the assault and how to reduce each.' },
        { name: 'The Logic of No Muskets', duration: '25 min', description: 'Students read Wayne\'s order and write a one-paragraph analysis brief explaining why the bayonet-only order reduced rather than increased risk.' },
        { name: 'Forlorn Hope', duration: '20 min', description: 'Students read the Fleury and Stewart accounts and discuss why men volunteered for the most dangerous task and what the Congressional medals afterward signified.' },
        { name: 'Operational Brief', duration: '25 min', description: 'Groups produce a simplified operational brief for the Stony Point assault: objective, main risks, mitigation plan, success criteria.' },
      ],
      assessment: 'Formative: risk worksheets and analysis brief. Summative: operational brief presentation. Extension: compare Wayne\'s assault to Lee\'s Paulus Hook raid five weeks later.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information with other information in print and digital texts',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.Geo.2.6-8: Use maps and representations to explain relationships between locations',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-ny-stony-point' } },
    title: 'Geography and Strategy: Controlling the Hudson River Corridor',
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary: 'Students use Stony Point and the Hudson River strategy to examine how geography shapes military and political decision-making. They analyze why the Hudson corridor was the central strategic prize in the northern theater, trace responses to losing and regaining key points, and connect the Hudson Highlands campaign to the Yorktown march.',
    lessonData: {
      objectives: [
        'Explain the British strategic logic behind controlling the Hudson from New York to the Highlands',
        'Trace the sequence from British seizure of Stony Point through Wayne\'s assault and Arnold\'s defection',
        'Analyze how geographic control affected Continental logistics and morale',
        'Evaluate the connection between the Hudson Highlands strategy and the Yorktown campaign',
      ],
      essentialQuestions: [
        'How does geography determine the shape of a military campaign? What features made the Hudson corridor decisive?',
        'Why did Washington abandon Stony Point after winning it? What does this reveal about strategic priorities?',
        'How did Stony Point, the Arnold defection, and the Yorktown march form a coherent strategic sequence?',
      ],
      materials: [
        'Period maps of the Hudson River from New York City to West Point, 1777–1781',
        'Washington\'s correspondence with Wayne before and after the assault (adapted)',
        'Clinton\'s strategic assessment after Stony Point (adapted)',
        'Hudson Highlands timeline: Fort Montgomery (1777), Stony Point (1779), Arnold defection (1780), Yorktown march (1781)',
      ],
      activities: [
        { name: 'Mapping the Corridor', duration: '25 min', description: 'Students annotate period maps with British and American positions, key crossings, and supply routes, then reconstruct the British strategic plan and identify where it succeeded or failed.' },
        { name: 'Washington\'s Decision', duration: '30 min', description: 'Students read Washington\'s correspondence and reconstruct his reasoning for both ordering the assault and demolishing the fort. Pairs analyze alternatives and connect to resource constraints.' },
        { name: 'Arnold Defection in Context', duration: '35 min', description: 'Students trace the Arnold defection and discuss its strategic implications if West Point had been surrendered, connecting to the broader Highlands strategy they have mapped.' },
        { name: 'Road to Yorktown', duration: '30 min', description: 'Students trace Rochambeau\'s 1781 southward march and identify the role of King\'s Ferry and the Highlands corridor. Students draft a thesis connecting Stony Point to Yorktown.' },
      ],
      assessment: 'Analytical essay (900–1200 words): "How did control of the Hudson River corridor shape the course and outcome of the Revolutionary War in the northern theater?" Minimum three specific events; geographic analysis must connect to strategic outcomes.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in several primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.9.9-12: Analyze the relationship between historical sources and secondary interpretations',
        'D2.Geo.4.9-12: Evaluate how political and economic decisions have influenced cultural and environmental characteristics of places',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];
// -- STONY POINT: ADDITIONAL LINKS ---------------------------------------------
export const stonyPointAdditionalLinks: Array<{ toTownId: string; linkType: string; reason: string; weight: number }> = [
  {
    toTownId: 'us-ny-crown-point',
    linkType: 'SHARED_THEME',
    reason: 'Both Stony Point and Crown Point were critical New York fortifications whose control determined whether the British could split the American states along a north-south corridor. The strategic logic of controlling water-route chokepoints — Lake Champlain at Crown Point, the Hudson at Stony Point — is identical.',
    weight: 82,
  },
  {
    toTownId: 'us-ny-saratoga',
    linkType: 'SHARED_EVENT',
    reason: 'The Saratoga campaign of 1777 was the northern theater operation that Stony Point\'s Hudson Highlands position was designed to prevent from being repeated. American victory at Saratoga proved the value of defending the Hudson corridor; Stony Point secured that defense two years later.',
    weight: 85,
  },
  {
    toTownId: 'us-nj-morristown',
    linkType: 'SHARED_PERSON',
    reason: 'Wayne\'s light infantry corps was organized and trained at Morristown during the winter and spring of 1779. The discipline demonstrated at Stony Point was built in Morristown\'s winter camp, which also served as the command center from which Washington directed the operation.',
    weight: 78,
  },
  {
    toTownId: 'us-ny-west-point',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason: 'Stony Point and West Point are ten miles apart on the same river, forming paired anchors of the Hudson Highlands defensive system. The assault on Stony Point protected West Point\'s southern approach; Arnold\'s 1780 defection endangered exactly the position Wayne\'s operation had helped secure.',
    weight: 91,
  },
];
// -- CROWN POINT, NY -----------------------------------------------------------
export const crownPointTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Crown Point sits on a narrow peninsula on the western shore of Lake Champlain, commanding the narrows where the lake contracts between the Adirondack highlands and the Green Mountains. For more than two centuries before the Revolution it was the most strategically significant location in northeastern North America: the point through which any army moving between the St. Lawrence Valley and the Hudson Valley had to pass. Whoever held Crown Point controlled the only practical invasion corridor between Canada and the American states.

The French built Fort Saint-Frédéric here in 1734, recognizing immediately that artillery on the peninsula could stop any water-borne traffic. The British destroyed it and built a much larger fortification — Crown Point — during the Seven Years' War, completing it in 1759. It was the largest British fort built in North America and the anchor of the lake defense system that included Fort Ticonderoga seventeen miles to the south.

When Ethan Allen seized Ticonderoga on May 10, 1775, Seth Warner seized Crown Point two days later against nine-man resistance. Together the two forts gave Americans control of the Lake Champlain corridor and access to more than a hundred pieces of artillery — the guns Henry Knox hauled to Boston that winter to force the British evacuation in March 1776.

The critical chapter was 1776. The failed American invasion of Canada retreated south through Crown Point, pursued by a British army retaking the lake. The strategic question was whether Britain could complete its invasion of New York that year, seize the Hudson Valley, and sever New England before winter. Benedict Arnold — not yet a traitor — built a scratch fleet from green timber and fought the Battle of Valcour Island on October 11–13, 1776. His fleet was destroyed. But the engagement consumed so much of the British campaign season that the invasion halted for the year.

That delay was the margin. When Burgoyne came south in 1777, he had a full season — but that season ended at Saratoga, where his surrender brought France into the war and transformed the character of the conflict. The chain of causation runs: Arnold's fleet at Valcour Island → British winter halt → American rebuild → Saratoga → French entry → a war Britain could not sustain.

Crown Point's ruins — the massive stone walls of the 1759 fortification — are among the most dramatic Revolutionary War sites in America, visited by relatively few people and understood by fewer still as the linchpin of a causal sequence that changed everything.`,
};
// -- CROWN POINT: PEOPLE -------------------------------------------------------
export const crownPointPeople: Array<{ person: Prisma.PersonCreateInput; connectionNote: string }> = [
  {
    person: {
      id: 'person-seth-warner',
      name: 'Seth Warner',
      roles: ['Green Mountain Boys Colonel', 'Continental Army Colonel', 'Vermont Militia Commander'],
      bioShort: 'Vermont militia leader who commanded the party that seized Crown Point on May 12, 1775, two days after Allen took Ticonderoga. Warner subsequently led Green Mountain Boys in Continental service, covered the American retreat at Hubbardton (1777), and participated in the Saratoga campaign. One of the most effective Vermont military leaders of the war.',
      birthYear: 1743,
      deathYear: 1784,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Led the uncontested capture of Crown Point on May 12, 1775; the seizure was strategically critical.',
  },
  {
    person: {
      id: 'person-benedict-arnold-crown-point',
      name: 'Benedict Arnold',
      roles: ['Continental Army General', 'Lake Champlain Fleet Commander', 'Traitor'],
      bioShort: 'Continental general who built and commanded the American fleet on Lake Champlain in 1776, fighting the Battle of Valcour Island to delay the British invasion. His tactical defeat accomplished a strategic purpose: the delay halted the invasion before winter. Arnold later defected to the British in 1780, but his 1776 lake campaign was arguably his most consequential military contribution to the American cause.',
      birthYear: 1741,
      deathYear: 1801,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Built and commanded the American fleet from Crown Point in 1776; the Valcour Island engagement delayed the British invasion by one critical year.',
  },
  {
    person: {
      id: 'person-ethan-allen',
      name: 'Ethan Allen',
      roles: ['Green Mountain Boys Commander', 'Continental Army Colonel'],
      bioShort: 'Vermont militia leader who led the seizure of Fort Ticonderoga on May 10, 1775, enabling Warner\'s capture of Crown Point two days later. The twin captures gave Americans control of Lake Champlain and the cannon hauled to Boston. Subsequently captured attempting to take Montreal in September 1775 and held prisoner until 1778.',
      birthYear: 1738,
      deathYear: 1789,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Led the Ticonderoga seizure that precipitated Crown Point\'s capture; the Green Mountain Boys opened the entire Lake Champlain corridor.',
  },
  {
    person: {
      id: 'person-richard-montgomery',
      name: 'Richard Montgomery',
      roles: ['Continental Army Brigadier General', 'Canada Invasion Commander'],
      bioShort: 'Irish-born Continental general who commanded the 1775 Canada invasion, staging operations northward through Crown Point and Ticonderoga. Captured Montreal in November 1775 but was killed in the assault on Quebec City on December 31, 1775. Crown Point was the logistical anchor of the entire campaign.',
      birthYear: 1738,
      deathYear: 1775,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Staged the 1775 Canada invasion through Crown Point; the fort was the northern logistical base for the operation.',
  },
  {
    person: {
      id: 'person-horatio-gates-crown-point',
      name: 'Horatio Gates',
      roles: ['Continental Army Major General', 'Northern Department Commander', 'Saratoga Commander'],
      bioShort: 'British-born Continental general who commanded the Northern Department through 1776–1777, overseeing the retreat from Canada, the construction of Arnold\'s fleet, and defensive preparations culminating in Saratoga. His management of Northern Department logistics during the retreat was essential to preventing a complete collapse of the northern theater.',
      birthYear: 1727,
      deathYear: 1806,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Commanded the Northern Department overseeing Crown Point\'s role in the 1776–1777 defensive preparations.',
  },
  {
    person: {
      id: 'person-philip-schuyler',
      name: 'Philip Schuyler',
      roles: ['Continental Army Major General', 'Northern Department Commander', 'New York Politician'],
      bioShort: 'New York Continental general who commanded the Northern Department in 1775–1776, directing the Canada invasion from Albany and coordinating Lake Champlain defense. Schuyler\'s management of northern theater logistics — chronically undersupplied — was the administrative foundation on which Arnold\'s lake campaign and eventually Saratoga rested.',
      birthYear: 1733,
      deathYear: 1804,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Directed the Canada invasion and Lake Champlain defensive operations through Crown Point as Northern Department commander.',
  },
  {
    person: {
      id: 'person-john-burgoyne',
      name: 'John Burgoyne',
      roles: ['British Army General', 'Canada Army Commander', 'Playwright'],
      bioShort: 'British general who commanded the 1777 invasion of New York advancing south through Crown Point and Ticonderoga toward Albany. His surrender at Saratoga in October 1777 was the decisive turning point of the northern theater, bringing France into the war. Burgoyne had been delayed one year by Arnold\'s Valcour Island action; that year made the difference.',
      birthYear: 1722,
      deathYear: 1792,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Led the 1777 invasion south through Crown Point; his Saratoga surrender was the direct result of the one-year delay Arnold\'s fleet had caused.',
  },
  {
    person: {
      id: 'person-henry-knox-crown-point',
      name: 'Henry Knox',
      roles: ['Continental Army General', 'Chief of Artillery', 'Bookseller'],
      bioShort: 'Boston bookseller turned Continental artillery chief who organized the "Noble Train of Artillery" in winter 1775–1776 — hauling sixty tons of cannon from Crown Point and Ticonderoga across frozen Lake George and the Berkshires to Boston. Washington used them to occupy Dorchester Heights in March 1776, forcing the British evacuation of the city.',
      birthYear: 1750,
      deathYear: 1806,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Transported captured Crown Point and Ticonderoga cannon to Boston in winter 1775–1776, enabling the resolution of the Boston siege.',
  },
];
// -- CROWN POINT: PLACES -------------------------------------------------------
export const crownPointPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-crown-point-fort-ruins',
    name: 'Crown Point State Historic Site (Fort Ruins)',
    placeType: 'BATTLEFIELD',
    description: 'Substantial ruins of the British fortification built 1759–1763 on the Lake Champlain peninsula. The star-shaped earthwork and stone walls of what was once the largest British fort in North America remain dramatically imposing. The site interprets French Fort Saint-Frédéric (1734–1759), the British Crown Point fort (1759–1775), and the American occupation during the Revolution. Museum and visitor center on site.',
    lat: 43.9435,
    lng: -73.4356,
    address: '21 Grandview Drive, Crown Point, NY 12928',
    hours: 'Mid-May through October, Wed–Mon 9:30am–5pm',
    admission: 'Free',
    website: 'https://parks.ny.gov/historic-sites/crown-point-state-historic-site',
    town: { connect: { id: 'us-ny-crown-point' } },
  },
  {
    id: 'place-crown-point-museum',
    name: 'Crown Point State Historic Site Museum',
    placeType: 'MUSEUM',
    description: 'On-site museum interpreting three centuries of strategic history at Crown Point: French Fort Saint-Frédéric, the British fortification, the 1775 American seizure, Arnold\'s 1776 fleet, and the Burgoyne campaign. Artifact collection includes period ordnance, maps, and documents relating to the fort\'s multiple occupations.',
    lat: 43.9432,
    lng: -73.4349,
    address: '21 Grandview Drive, Crown Point, NY 12928',
    town: { connect: { id: 'us-ny-crown-point' } },
  },
  {
    id: 'place-crown-point-fort-saint-frederic',
    name: 'Fort Saint-Frédéric Ruins',
    placeType: 'MONUMENT',
    description: 'Stone ruins of the French fortification built 1734, the predecessor to the British Crown Point fort and the structure establishing European military control over the Lake Champlain narrows. The French destroyed their own fort when British forces advanced in 1759. The remaining stone tower is the oldest surviving masonry fortification in New York State.',
    lat: 43.9440,
    lng: -73.4362,
    address: '21 Grandview Drive, Crown Point, NY 12928',
    town: { connect: { id: 'us-ny-crown-point' } },
  },
  {
    id: 'place-crown-point-narrows-overlook',
    name: 'Lake Champlain Narrows Overlook',
    placeType: 'LANDMARK',
    description: 'The water passage where Lake Champlain contracts to roughly a quarter mile between the New York and Vermont shores, directly below the Crown Point peninsula. Artillery on the peninsula could fire across the entire passage. Understanding the narrows immediately explains why every power that wanted to control the lake built its primary fortification here.',
    lat: 43.9450,
    lng: -73.4320,
    address: 'Crown Point, NY 12928',
    town: { connect: { id: 'us-ny-crown-point' } },
  },
  {
    id: 'place-crown-point-bridge',
    name: 'Crown Point Bridge (NY–VT Crossing)',
    placeType: 'TRAIL',
    description: 'Modern bridge connecting Crown Point, NY to Chimney Point, VT near the site of the historic ferry used throughout the Revolutionary period. Both shores have historic sites: Crown Point fortifications on the New York side, colonial-period remains at Chimney Point, VT. The crossing was used by American forces moving north toward Canada and retreating south in 1776.',
    lat: 43.9388,
    lng: -73.4252,
    address: 'NY Route 185, Crown Point, NY 12928',
    town: { connect: { id: 'us-ny-crown-point' } },
  },
  {
    id: 'place-crown-point-cemetery',
    name: 'Crown Point Area Historic Cemetery',
    placeType: 'CEMETERY',
    description: 'Historic burying ground in the Crown Point vicinity containing graves of Revolutionary War-era residents and soldiers who died in the garrison or during lake corridor operations. The cemetery reflects the Champlain Valley\'s mixed character: French, English, and Dutch settlers, divided loyalties, and persistent exposure to the military operations that made this region one of the most contested in North America.',
    lat: 43.9412,
    lng: -73.4580,
    address: 'Crown Point, NY 12928',
    town: { connect: { id: 'us-ny-crown-point' } },
  },
];
// -- CROWN POINT: EVENTS -------------------------------------------------------
export const crownPointEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-crown-point-seizure-1775',
    name: 'Seth Warner Seizes Crown Point',
    startDate: new Date('1775-05-12'),
    datePrecision: 'DAY',
    summary: 'On May 12, 1775, two days after Allen\'s seizure of Ticonderoga, Seth Warner led a party to Crown Point where the nine-man British garrison offered no resistance. The combined seizures gave Americans control of the Lake Champlain corridor and access to over a hundred pieces of artillery, including the heavy guns Henry Knox hauled to Boston to force the British evacuation in March 1776.',
    significanceWeight: 90,
    lat: 43.9435,
    lng: -73.4356,
    town: { connect: { id: 'us-ny-crown-point' } },
  },
  {
    id: 'event-crown-point-knox-noble-train',
    name: 'Knox Transports Crown Point and Ticonderoga Cannon to Boston',
    startDate: new Date('1775-12-05'),
    datePrecision: 'MONTH',
    summary: 'In November 1775, Washington sent Henry Knox north to retrieve the captured artillery. Knox oversaw the movement of approximately sixty tons of cannon and mortars across frozen Lake George and the Berkshire Mountains to Boston. Washington used the guns to occupy Dorchester Heights on March 4–5, 1776, threatening the British fleet in Boston Harbor and forcing the British evacuation on March 17. Without Crown Point\'s artillery, the Boston siege had no resolution.',
    significanceWeight: 92,
    lat: 43.9435,
    lng: -73.4356,
    town: { connect: { id: 'us-ny-crown-point' } },
  },
  {
    id: 'event-crown-point-canada-invasion',
    name: 'American Canada Invasion Stages Through Crown Point',
    startDate: new Date('1775-08-01'),
    datePrecision: 'MONTH',
    summary: 'Through summer and fall 1775, Crown Point served as a staging point for the American invasion of Canada — the attempt to bring Quebec into the Revolution as a fourteenth colony. Montgomery moved north through Crown Point and Ticonderoga, capturing Montreal in November 1775. The invasion ultimately failed at Quebec City on December 31, where Montgomery was killed and Arnold\'s assault was repulsed.',
    significanceWeight: 85,
    lat: 43.9435,
    lng: -73.4356,
    town: { connect: { id: 'us-ny-crown-point' } },
  },
  {
    id: 'event-crown-point-american-retreat',
    name: 'Shattered American Army Retreats from Canada to Crown Point',
    startDate: new Date('1776-06-01'),
    datePrecision: 'MONTH',
    summary: 'Through spring and summer 1776, the remnants of the American Canada expedition retreated south down Lake Champlain, weakened by smallpox, dysentery, and defeat. Crown Point and Ticonderoga became focal points of the effort to stop the British advance before it penetrated the Hudson Valley. The garrison that reached Crown Point was a shadow of the force that had departed the previous year.',
    significanceWeight: 82,
    lat: 43.9435,
    lng: -73.4356,
    town: { connect: { id: 'us-ny-crown-point' } },
  },
  {
    id: 'event-crown-point-arnold-fleet-built',
    name: 'Arnold Builds the American Lake Champlain Fleet',
    startDate: new Date('1776-07-01'),
    datePrecision: 'MONTH',
    summary: 'In summer 1776, Benedict Arnold oversaw construction of an improvised fleet at Skenesborough (now Whitehall, NY), using Crown Point as his northern anchor. Built from green timber by carpenters who had never constructed a warship, the fleet could not match the purpose-built British vessels being assembled at the northern end of the lake. But its existence forced the British to build their own fleet and transport it overland in pieces — a process consuming months of campaign season.',
    significanceWeight: 88,
    lat: 43.9435,
    lng: -73.4356,
    town: { connect: { id: 'us-ny-crown-point' } },
  },
  {
    id: 'event-crown-point-valcour-island',
    name: 'Battle of Valcour Island: Arnold\'s Fleet Destroyed',
    startDate: new Date('1776-10-11'),
    datePrecision: 'DAY',
    summary: 'On October 11–13, 1776, Arnold\'s fleet engaged the larger British fleet near Valcour Island south of present-day Plattsburgh. The Americans were heavily outgunned. Arnold\'s flagship Congress was burned; most of the fleet was destroyed or captured. Arnold escaped with one vessel. By conventional measure it was an American defeat. Strategically it was the opposite: the engagement and preceding construction delays consumed enough of the British campaign season that the invasion of New York could not be completed before winter. The British halted at Crown Point in late October and withdrew to Canada.',
    significanceWeight: 95,
    lat: 44.7290,
    lng: -73.4142,
    town: { connect: { id: 'us-ny-crown-point' } },
  },
  {
    id: 'event-crown-point-burgoyne-advance',
    name: 'Burgoyne Reoccupies Crown Point in Advance on Ticonderoga',
    startDate: new Date('1777-06-27'),
    datePrecision: 'DAY',
    summary: 'In late June 1777, Burgoyne\'s army advancing south from Canada reoccupied Crown Point as a staging point for the assault on Fort Ticonderoga. Ticonderoga fell on July 6, largely because British forces occupied the high ground of Mount Defiance that American engineers had deemed inaccessible. The advance seemed to confirm the northern theater was collapsing.',
    significanceWeight: 80,
    lat: 43.9435,
    lng: -73.4356,
    town: { connect: { id: 'us-ny-crown-point' } },
  },
  {
    id: 'event-crown-point-saratoga-surrender',
    name: 'Saratoga Campaign Ends at British Surrender',
    startDate: new Date('1777-10-17'),
    datePrecision: 'DAY',
    summary: 'On October 17, 1777, Burgoyne surrendered approximately 5,700 men to Gates at Saratoga — the direct consequence of the chain beginning at Valcour Island. Arnold\'s fleet had delayed the 1776 invasion; the delay allowed American forces to rebuild; the rebuilt army defeated Burgoyne in two engagements (Arnold was wounded at Bemis Heights). The surrender brought France into the war as an American ally, transforming the conflict into one Britain could not sustain.',
    significanceWeight: 97,
    lat: 43.0054,
    lng: -73.6354,
    town: { connect: { id: 'us-ny-crown-point' } },
  },
  {
    id: 'event-crown-point-fire-1773',
    name: 'Fire Destroys Crown Point Fortification',
    startDate: new Date('1773-04-21'),
    datePrecision: 'DAY',
    summary: 'On April 21, 1773, a fire destroyed most wooden structures within the Crown Point fortification, leaving the stone outer walls but gutting the barracks and interior buildings. The British never fully rebuilt it. When Americans seized the fort in 1775 they found a damaged installation — it served as a staging point and supply depot rather than a fully garrisoned defensive fortification of the kind it had been during the Seven Years\' War.',
    significanceWeight: 65,
    lat: 43.9435,
    lng: -73.4356,
    town: { connect: { id: 'us-ny-crown-point' } },
  },
  {
    id: 'event-crown-point-french-alliance',
    name: 'French Alliance Reshapes the Northern Theater',
    startDate: new Date('1778-02-06'),
    datePrecision: 'DAY',
    summary: 'The French alliance signed February 6, 1778 — made possible by Saratoga — transformed the strategic situation in the northern theater. The northern invasion strategy driving the fighting around Crown Point and Lake Champlain since 1775 was effectively abandoned after Burgoyne\'s surrender. The lake corridor became a defensive concern rather than an active theater, and Crown Point\'s period of maximum military significance came to a close.',
    significanceWeight: 86,
    lat: 43.9435,
    lng: -73.4356,
    town: { connect: { id: 'us-ny-crown-point' } },
  },
];
// -- CROWN POINT: STORIES ------------------------------------------------------
export const crownPointStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-crown-point-valcour-strategic-defeat',
    title: 'The Battle He Lost on Purpose',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-benedict-arnold-crown-point' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Benedict Arnold understood something about the battle he was sailing into on October 11, 1776 that is easy to miss if you only look at the casualty figures: he was not trying to win. The British fleet was larger, better armed, staffed by professionals. If Arnold had fought in open water, his fleet would have been destroyed in an afternoon. That was never the point.

The point was time. Every day the British spent building their fleet, maneuvering, fighting — was a day they were not marching south toward Ticonderoga. The Lake Champlain campaign season ran roughly from ice-out in April to freeze-up in November. Arnold's job was to consume enough of that season that the British couldn't complete their invasion.

At Valcour Island, he chose a defensive position forcing the British to approach against the wind. The battle lasted most of October 11. Under cover of darkness and fog, his badly damaged fleet slipped past the British. The final engagement off Split Rock two days later sank or burned most of what remained. Arnold burned his own flagship rather than surrender it. He reached Crown Point with one vessel — and had consumed the campaign season. The British assessed that advancing on Ticonderoga in autumn was too risky, and withdrew to Canada.

The following year at Saratoga, Arnold was wounded leading the charge that helped seal Burgoyne's surrender — made possible in part by the year Valcour Island had bought. His defection in 1780 meant that story would always be told in a particular shadow. But the strategic logic is clear: green-timber fleet, Valcour Island, winter, Saratoga, France, the war that became unwinnable for Britain. Arnold's defeat was the turning point of the northern theater. It just didn't look like one at the time.`,
    tags: ['Arnold', 'Valcour Island', 'Lake Champlain', 'strategic delay', 'fleet', 'Saratoga'],
    town: { connect: { id: 'us-ny-crown-point' } },
  },
  {
    id: 'story-crown-point-corridor-significance',
    title: 'The Door Between Continents',
    storyType: 'MODERN_VOICE',
    narratorName: 'Lake Champlain Valley Historian',
    narratorRole: 'Site Interpreter, Crown Point State Historic Site',
    verificationStatus: 'VERIFIED',
    textVersion: `Most visitors are surprised by how complete the ruins are. The stone walls of the 1759 British fortification are still standing, still enormous, still commanding the narrows. The lake narrows here to about a quarter mile — the Adirondacks to the west, the Green Mountains to the east. Anything moving between Canada and the Hudson Valley by water has to come through here. The lake was the highway. Crown Point was the tollbooth.

The French understood this in 1734. The British in 1759. The Americans in 1775 when Seth Warner's party found nine soldiers and walked away with a fort that controlled the corridor. Crown Point's significance isn't primarily about the fighting here — actual combat was minimal. It's about who held this position and what control made possible.

Valcour Island is the most important event associated with Crown Point that most people have never heard of. Arnold built a fleet from trees still standing in June and fought the British to a delay in October. His fleet was destroyed. But the British had spent all summer and fall dealing with the threat he posed, and they ran out of season. That delay created Saratoga.

Stand at the tip of the peninsula on a clear day. Look north toward Canada. Look south toward Ticonderoga. That view has not changed since the 1730s. The door between continents has not moved.`,
    tags: ['Crown Point', 'Lake Champlain', 'geography', 'strategy', 'corridor', 'Valcour Island'],
    town: { connect: { id: 'us-ny-crown-point' } },
  },
];
// -- CROWN POINT: LESSON PLANS -------------------------------------------------
export const crownPointLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-ny-crown-point' } },
    title: 'Delay as Victory: The Strategic Logic of Valcour Island',
    gradeRange: '6-8',
    estimatedDuration: '2-3 class periods',
    summary: 'Students learn to distinguish tactical from strategic outcomes by tracing the causal chain from Arnold\'s fleet construction through Valcour Island, the delayed British invasion, and the Saratoga surrender. Using maps, timelines, and a campaign season analysis, students understand how time functions as a military resource and evaluate whether Arnold\'s decision at Valcour Island was strategically correct.',
    lessonData: {
      objectives: [
        'Distinguish between tactical outcomes (who won the battle) and strategic outcomes (what the battle accomplished)',
        'Trace the causal chain from Arnold\'s fleet construction to the Saratoga surrender',
        'Analyze how campaign seasons shaped military decision-making on Lake Champlain',
        'Evaluate Arnold\'s Valcour Island decision as strategically correct or incorrect, using evidence',
      ],
      essentialQuestions: [
        'What is the difference between winning a battle and winning a campaign? Can you lose one to win the other?',
        'How does time function as a military resource? What did Arnold buy with his fleet, and what did it cost?',
      ],
      materials: [
        'Period map of Lake Champlain showing Valcour Island, Crown Point, Ticonderoga, and the Canada–New York corridor',
        'Campaign season timeline: May–November 1776 showing British and American fleet construction, Valcour Island',
        'Adapted account of Valcour Island from an American participant',
        'British officer\'s assessment of why the 1776 invasion halted (adapted)',
        'Tactical vs. strategic outcome analysis worksheet',
      ],
      activities: [
        { name: 'Mapping the Corridor', duration: '20 min', description: 'Students map the lake corridor and discuss why controlling it mattered. They annotate with positions and identify what would happen if the British reached the Hudson Valley unopposed.' },
        { name: 'Campaign Season Clock', duration: '25 min', description: 'Students use the timeline to calculate remaining campaign season at each event and assess whether there was time to advance on Ticonderoga after Valcour Island.' },
        { name: 'Tactical Loss, Strategic Win', duration: '30 min', description: 'Students read both accounts and evaluate the battle from both perspectives using the worksheet. Key insight: Arnold knew he would probably lose the fleet; the goal was the time it cost to destroy it.' },
        { name: 'Drawing the Causal Chain', duration: '20 min', description: 'Students construct a causal chain diagram: Arnold\'s fleet → British delay → winter → American rebuild → Saratoga → French alliance. One sentence of explanation per link.' },
      ],
      assessment: 'One-page response: "Can you lose a battle to win a campaign? Use Valcour Island as evidence." Must address both tactical and strategic outcomes with specific evidence from at least two sources.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information with other information in print and digital texts',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.Geo.2.6-8: Use maps to explain relationships between locations',
        'D2.His.2.6-8: Classify series of historical events as examples of change and continuity',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-ny-crown-point' } },
    title: 'Crown Point Through Three Empires: Continuity, Change, and Strategic Geography',
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary: 'This lesson uses Crown Point\'s continuous history — French Fort Saint-Frédéric (1734), British Crown Point (1759), American occupation (1775) — to explore continuity and change in strategic geography and imperial competition. Students analyze how the same piece of ground served three empires for different purposes while remaining strategically central, and evaluate what the preservation of Crown Point\'s ruins communicates to contemporary visitors.',
    lessonData: {
      objectives: [
        'Analyze how the same location served French, British, and American strategic purposes across 45 years',
        'Compare military and political contexts that led each empire to fortify Crown Point',
        'Evaluate the causal chain connecting the 1775 American occupation to the Saratoga surrender and French alliance',
        'Assess what the preservation of Crown Point\'s ruins communicates and what it omits',
      ],
      essentialQuestions: [
        'How does geography create continuity across changes of political control? What stays the same at Crown Point across three empires?',
        'What does the preservation of ruins communicate? What stories do ruins tell, and what stories do they make harder to tell?',
        'How did control of a single strategic chokepoint shape the outcome of the northern Revolutionary War theater?',
      ],
      materials: [
        'Three comparative maps: Crown Point under French, British, and American occupation',
        'French officer\'s letter on the strategic importance of the Lake Champlain narrows (1740, adapted)',
        'British engineering report on Crown Point fortification (1760, adapted)',
        'Seth Warner\'s report of the 1775 seizure',
        'Contemporary photographs of the Crown Point ruins',
      ],
      activities: [
        { name: 'Three Empires, One Place', duration: '30 min', description: 'Students examine three comparative maps and create a T-chart of continuities and changes across French, British, and American control. Discussion: what does continuity across three empires reveal about the geography of power?' },
        { name: 'Primary Source Analysis', duration: '35 min', description: 'Groups each analyze one primary source (French letter, British report, Warner\'s report), identifying what the author thinks the place is for, what they fear, and what they want. Groups share and map overlap and divergence.' },
        { name: 'From Seizure to Saratoga', duration: '30 min', description: 'Students work with the causal chain from 1775 seizure through Valcour Island (1776), Saratoga (1777), and French alliance (1778), drafting a thesis: "How did American control of Crown Point in 1775 contribute to the French alliance in 1778?"' },
        { name: 'What the Ruins Say', duration: '25 min', description: 'Students examine photographs of the ruins and consider whose story they primarily tell (British, since the preserved structure is the 1759 fortification). Discussion: what preservation choices omit, and who decides.' },
      ],
      assessment: 'Analytical essay (1000–1300 words): "How did Crown Point\'s geographic position shape the course of the northern theater from the 1775 seizure through Saratoga?" Must address continuity and change, use three specific pieces of evidence, and evaluate why Crown Point\'s role is underrecognized in conventional narratives.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in several primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
        'CCSS.ELA-LITERACY.RH.9-10.3: Analyze in detail a series of events described in a text',
      ],
      c3Framework: [
        'D2.His.2.9-12: Analyze change and continuity in historical eras',
        'D2.Geo.4.9-12: Evaluate how political decisions have influenced cultural and environmental characteristics of places',
        'D2.His.9.9-12: Analyze the relationship between historical sources and secondary interpretations',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];
// -- CROWN POINT: ADDITIONAL LINKS ---------------------------------------------
export const crownPointAdditionalLinks: Array<{ toTownId: string; linkType: string; reason: string; weight: number }> = [
  {
    toTownId: 'us-ny-stony-point',
    linkType: 'SHARED_THEME',
    reason: 'Crown Point and Stony Point were the two critical New York fortifications whose control determined whether the British could split the American states along a north-south corridor. Both represent the strategic logic of controlling geographic chokepoints on water routes.',
    weight: 82,
  },
  {
    toTownId: 'us-ny-saratoga',
    linkType: 'SHARED_EVENT',
    reason: 'The Saratoga surrender was the direct consequence of events originating at Crown Point and Valcour Island in 1775–1776. Arnold\'s lake fleet — built from Crown Point as a base — delayed the British invasion by one year; that year produced the conditions for the Saratoga defeat that brought France into the war.',
    weight: 94,
  },
  {
    toTownId: 'us-vt-hubbardton',
    linkType: 'SHARED_PERSON',
    reason: 'Seth Warner — who had captured Crown Point in 1775 — commanded the rear guard at the Battle of Hubbardton (July 7, 1777) during the American retreat from Ticonderoga after Burgoyne reoccupied Crown Point. The Green Mountain Boys who opened the lake corridor in 1775 fought its final rear-guard action in 1777.',
    weight: 78,
  },
  {
    toTownId: 'us-ma-boston',
    linkType: 'SHARED_EVENT',
    reason: 'Cannon captured at Crown Point and Ticonderoga were transported by Knox to Boston in winter 1775–1776. Washington used them to occupy Dorchester Heights in March 1776, forcing the British evacuation. Crown Point\'s artillery directly resolved the Boston siege.',
    weight: 88,
  },
];
