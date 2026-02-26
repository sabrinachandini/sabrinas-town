// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// MD Cluster: Annapolis (MD) + Baltimore (MD) — Continental Congress, Treaty of Paris, Fort McHenry
import { Prisma } from '@prisma/client';

// ============================================================================
// ANNAPOLIS
// ============================================================================

export const annapolisTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Annapolis is where the American Revolution ended — formally, legally, and symbolically. On January 14, 1784, the Continental Congress met in the Maryland State House and ratified the Treaty of Paris, officially concluding the war with Great Britain. Fourteen days earlier, on December 23, 1783, George Washington had entered that same chamber and resigned his commission as Commander-in-Chief of the Continental Army, surrendering the military authority he had held for eight and a half years. Both events took place in the same building, within weeks of each other, and their proximity was not accidental.

The resignation is worth dwelling on. Washington could have kept his commission indefinitely. The army revered him. Many officers had floated the idea — never entirely in jest — that he might make a better king than the Continental Congress made a functioning government. The Newburgh Conspiracy of March 1783, when discontented officers circulated anonymous letters urging the army to march on Congress, had shown how fragile civilian control of the military actually was. Washington defused Newburgh with a carefully crafted speech. But defusing one conspiracy did not answer the larger question of what an independent nation did with its commanding general once the war was over.

What Washington did was come to Annapolis and give the commission back. He did it with full ceremony, before Congress, the diplomats, and the public gallery, in a choreographed ritual designed to project a message to the world: in America, soldiers answer to civilians. Thomas Jefferson, watching from the gallery, called it the greatest act of Washington's life. King George III, told about it, reportedly said that if Washington truly meant to return to his farm, he was the greatest man in the world.

The Maryland State House where both events occurred is the oldest state capitol still in continuous legislative use in the United States. Its dome, completed in 1779, was the largest wooden dome in America at the time. The town itself was one of the wealthiest in colonial America — Maryland's tobacco planters built mansions along its streets that still stand and represent the apex of American Georgian architecture. The men who gathered here to ratify the Treaty and receive Washington's resignation were educated, prosperous gentlemen who understood the classical precedents they were invoking and the European audience they were performing for.

Ten months later, twelve delegates from five states met at Mann's Tavern in the same city and called for the Constitutional Convention that produced the document governing the United States today. Annapolis thus bookends the founding: it is where the Revolutionary War formally ended and where the institutional path to the Constitution began.`,
};

export const annapolisPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-george-washington',
      name: 'George Washington',
      roles: ['Commander-in-Chief', 'General', 'First President'],
      bioShort: 'Commander-in-Chief who resigned his commission before Congress at the Maryland State House on December 23, 1783 — setting the defining precedent for civilian control of the military in the United States.',
      birthYear: 1732,
      deathYear: 1799,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Resigned his commission in the Maryland State House on December 23, 1783, in a ceremony choreographed to establish republican precedent before Congress and the world.',
  },
  {
    person: {
      id: 'person-thomas-mifflin',
      name: 'Thomas Mifflin',
      roles: ['President of Congress', 'Continental Army General', 'Pennsylvania Politician'],
      bioShort: 'President of the Continental Congress who presided over Washington\'s resignation on December 23, 1783, and the Treaty of Paris ratification on January 14, 1784. His acceptance of Washington\'s commission completed the transfer from military to civilian authority.',
      birthYear: 1744,
      deathYear: 1800,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Presided as President of Congress over both Washington\'s resignation and the Treaty of Paris ratification in Annapolis.',
  },
  {
    person: {
      id: 'person-thomas-jefferson-annapolis',
      name: 'Thomas Jefferson',
      roles: ['Continental Congressman', 'Virginia Delegate', 'Future President'],
      bioShort: 'Virginia delegate present in Annapolis for Washington\'s resignation and the Treaty ratification. He later called Washington\'s voluntary resignation the greatest act of the general\'s life and helped manage congressional proceedings for the treaty.',
      birthYear: 1743,
      deathYear: 1826,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Present as Virginia delegate; described both events as the defining republican acts of the founding generation.',
  },
  {
    person: {
      id: 'person-william-paca',
      name: 'William Paca',
      roles: ['Maryland Governor', 'Signer of Declaration of Independence', 'Jurist'],
      bioShort: 'Maryland governor and Declaration signer whose Annapolis mansion survives as a museum. Paca served as governor during 1782–85 and helped facilitate Congress\'s use of Annapolis as national capital.',
      birthYear: 1740,
      deathYear: 1799,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Governor of Maryland during the Treaty ratification period; his Prince George Street mansion is now a National Historic Landmark.',
  },
  {
    person: {
      id: 'person-charles-carroll',
      name: 'Charles Carroll of Carrollton',
      roles: ['Maryland Senator', 'Signer of Declaration of Independence', 'Planter'],
      bioShort: 'The wealthiest man in colonial America and the last surviving Declaration signer. Carroll represented Maryland in Congress and the Senate; as a Catholic facing British legal disabilities, his signature carried particular significance.',
      birthYear: 1737,
      deathYear: 1832,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Maryland\'s most prominent founding figure and Annapolis resident; signed the Declaration and served in Congress during the Annapolis period.',
  },
  {
    person: {
      id: 'person-samuel-chase',
      name: 'Samuel Chase',
      roles: ['Continental Congressman', 'Signer of Declaration of Independence', 'Supreme Court Justice'],
      bioShort: 'Maryland firebrand and Declaration signer who was among the most vocal advocates for independence in 1776; later appointed to the Supreme Court. His aggressive advocacy pushed Maryland\'s reluctant delegates toward independence.',
      birthYear: 1741,
      deathYear: 1811,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Annapolis resident and Continental Congressman; the Chase-Lloyd House he began building is a surviving Georgian landmark on Maryland Avenue.',
  },
  {
    person: {
      id: 'person-john-hanson',
      name: 'John Hanson',
      roles: ['President of Congress', 'Maryland Delegate', 'First President under Articles'],
      bioShort: 'Maryland delegate elected the first President of Congress under the Articles of Confederation in 1781 — sometimes called by Maryland boosters the "first president." His election marked the first operation of the formal government established by the Articles.',
      birthYear: 1721,
      deathYear: 1783,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Maryland\'s representative who became the first President of Congress under the Articles of Confederation, the year before Mifflin presided over Washington\'s resignation.',
  },
  {
    person: {
      id: 'person-matthias-hammond',
      name: 'Matthias Hammond',
      roles: ['Maryland Patriot', 'Lawyer', 'Continental Association Delegate'],
      bioShort: 'Annapolis lawyer whose Hammond-Harwood House, designed by William Buckland and completed in 1774, is considered the finest example of five-part Palladian architecture in America. Hammond was active in pre-Revolutionary resistance before retiring from public life after independence.',
      birthYear: 1748,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Builder of the Hammond-Harwood House, the finest surviving Georgian mansion in Annapolis and a testament to Maryland Patriot planter wealth.',
  },
];

export const annapolisPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-annapolis-maryland-state-house',
    name: 'Maryland State House',
    placeType: 'GOVERNMENT',
    description: 'The oldest state capitol in continuous legislative use in the United States, completed in 1779. Washington resigned his commission here on December 23, 1783, and the Continental Congress ratified the Treaty of Paris on January 14, 1784. The large wooden dome served as a Chesapeake Bay navigation landmark.',
    lat: 38.9784,
    lng: -76.4922,
    address: '100 State Circle, Annapolis, MD 21401',
    town: { connect: { id: 'us-md-annapolis' } },
  },
  {
    id: 'place-annapolis-hammond-harwood-house',
    name: 'Hammond-Harwood House',
    placeType: 'HISTORIC_HOUSE',
    description: 'Considered the finest example of five-part Palladian architecture in America, designed by William Buckland and completed in 1774 for Patriot lawyer Matthias Hammond. Now a museum showcasing the wealth of Annapolis\'s pre-Revolutionary planter class.',
    lat: 38.9785,
    lng: -76.4935,
    address: '19 Maryland Ave, Annapolis, MD 21401',
    town: { connect: { id: 'us-md-annapolis' } },
  },
  {
    id: 'place-annapolis-william-paca-house',
    name: 'William Paca House and Garden',
    placeType: 'HISTORIC_HOUSE',
    description: 'Five-part Georgian mansion built 1763–65 for Declaration signer and Maryland Governor William Paca. The restored two-acre formal garden is one of the most significant surviving eighteenth-century pleasure gardens in America.',
    lat: 38.9790,
    lng: -76.4920,
    address: '186 Prince George St, Annapolis, MD 21401',
    town: { connect: { id: 'us-md-annapolis' } },
  },
  {
    id: 'place-annapolis-chase-lloyd-house',
    name: 'Chase-Lloyd House',
    placeType: 'HISTORIC_HOUSE',
    description: 'Three-story Georgian mansion begun by Declaration signer Samuel Chase in 1769 and completed by Edward Lloyd IV. Chase had to sell the unfinished structure when his debts outran his income — a story of pre-Revolutionary ambition and overextension.',
    lat: 38.9788,
    lng: -76.4930,
    address: '22 Maryland Ave, Annapolis, MD 21401',
    town: { connect: { id: 'us-md-annapolis' } },
  },
  {
    id: 'place-annapolis-st-annes-church',
    name: "St. Anne's Church",
    placeType: 'CHURCH',
    description: 'The oldest Episcopal parish in Annapolis, established 1692. The churchyard preserves burials of several Maryland founders; the parish anchored the colonial social life that surrounded the State House and its Revolutionary-era proceedings.',
    lat: 38.9789,
    lng: -76.4916,
    address: 'Church Circle, Annapolis, MD 21401',
    town: { connect: { id: 'us-md-annapolis' } },
  },
  {
    id: 'place-annapolis-maryland-inn-tavern',
    name: 'Maryland Inn (Historic Tavern Site)',
    placeType: 'TAVERN',
    description: 'Site of colonial-era tavern activity at Church and Main Streets, the social hub of Revolutionary Annapolis where Continental Congress delegates dined and debated during the 1783–84 session. Mann\'s Tavern nearby hosted the 1786 Annapolis Convention.',
    lat: 38.9783,
    lng: -76.4912,
    address: '16 Church Circle, Annapolis, MD 21401',
    town: { connect: { id: 'us-md-annapolis' } },
  },
  {
    id: 'place-annapolis-usna-museum',
    name: 'U.S. Naval Academy Museum',
    placeType: 'MUSEUM',
    description: 'Museum on the Naval Academy grounds preserving American naval history from the Revolutionary War forward, including ship models, navigational instruments, and Chesapeake Bay operational collections. The Academy sits on ground that was an Army fort during the Revolutionary era.',
    lat: 38.9830,
    lng: -76.4844,
    address: '118 Maryland Ave, Annapolis, MD 21402',
    town: { connect: { id: 'us-md-annapolis' } },
  },
];

export const annapolisEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-annapolis-articles-ratification',
    name: 'Maryland Ratifies the Articles of Confederation',
    startDate: new Date('1781-03-01'),
    datePrecision: 'DAY',
    summary: `Maryland was the last state to ratify the Articles of Confederation, holding out until Virginia agreed to cede its northwestern territory claims. Maryland's ratification on March 1, 1781 brought the Articles into force, creating the first formal government of the United States.`,
    significanceWeight: 82,
    lat: 38.9784,
    lng: -76.4922,
    town: { connect: { id: 'us-md-annapolis' } },
  },
  {
    id: 'event-annapolis-washington-resignation',
    name: "Washington Resigns His Commission",
    startDate: new Date('1783-12-23'),
    datePrecision: 'DAY',
    summary: `On December 23, 1783, George Washington resigned his commission as Commander-in-Chief before the Continental Congress in the Maryland State House. The ceremony was precisely choreographed — Washington bowed to Congress; Congress nodded rather than bowing back, asserting civilian supremacy. After handing his commission to Thomas Mifflin, he left for Mount Vernon, arriving home on Christmas Eve. Thomas Jefferson, watching from the gallery, called it the greatest act of Washington's life.`,
    significanceWeight: 98,
    lat: 38.9784,
    lng: -76.4922,
    town: { connect: { id: 'us-md-annapolis' } },
  },
  {
    id: 'event-annapolis-treaty-paris-ratification',
    name: 'Continental Congress Ratifies Treaty of Paris',
    startDate: new Date('1784-01-14'),
    datePrecision: 'DAY',
    summary: `On January 14, 1784, the Continental Congress in the Maryland State House ratified the Treaty of Paris, formally ending the Revolutionary War and establishing internationally recognized borders from the Atlantic to the Mississippi. The ratified document was sent to Europe for exchange with the British copy, completing the diplomatic conclusion of the war. Maryland observes January 14 as Ratification Day.`,
    significanceWeight: 99,
    lat: 38.9784,
    lng: -76.4922,
    town: { connect: { id: 'us-md-annapolis' } },
  },
  {
    id: 'event-annapolis-national-capital',
    name: 'Annapolis Serves as National Capital',
    startDate: new Date('1783-11-26'),
    endDate: new Date('1784-08-19'),
    datePrecision: 'DAY',
    summary: `From November 1783 through August 1784, Annapolis served as the seat of the Continental Congress — the de facto national capital. Congress had fled Philadelphia in June 1783 after unpaid Pennsylvania veterans surrounded the State House. During the Annapolis session Congress ratified the Treaty of Paris and received Washington's resignation.`,
    significanceWeight: 88,
    lat: 38.9784,
    lng: -76.4922,
    town: { connect: { id: 'us-md-annapolis' } },
  },
  {
    id: 'event-annapolis-convention-1786',
    name: 'Annapolis Convention of 1786',
    startDate: new Date('1786-09-11'),
    datePrecision: 'DAY',
    summary: `Twelve delegates from five states met at Mann's Tavern in Annapolis to discuss commercial regulation under the Articles of Confederation. Too small to accomplish its stated purpose, the convention produced Hamilton and Madison's call for a broader convention the following year. That call produced the Constitutional Convention of 1787. The Annapolis Convention matters most because it recognized its own failure and used that failure as a catalyst for constitutional reform.`,
    significanceWeight: 90,
    lat: 38.9783,
    lng: -76.4912,
    town: { connect: { id: 'us-md-annapolis' } },
  },
  {
    id: 'event-annapolis-maryland-signers-declaration',
    name: 'Maryland Delegates Sign the Declaration of Independence',
    startDate: new Date('1776-08-02'),
    datePrecision: 'DAY',
    summary: `Maryland's four delegates — Samuel Chase, William Paca, Thomas Stone, and Charles Carroll of Carrollton — signed the Declaration on August 2, 1776. Carroll's inclusion was notable: as a Catholic facing British legal disabilities, his signature carried particular personal risk. He outlived all other signers, dying in 1832 at age 95.`,
    significanceWeight: 85,
    lat: 38.9784,
    lng: -76.4922,
    town: { connect: { id: 'us-md-annapolis' } },
  },
  {
    id: 'event-annapolis-newburgh-conspiracy',
    name: 'Newburgh Conspiracy and Washington\'s Response',
    startDate: new Date('1783-03-15'),
    datePrecision: 'DAY',
    summary: `In March 1783, anonymous letters circulated among officers at Newburgh urging them to march on Congress. Washington defused the crisis with a speech in which he apologized for needing his reading glasses, remarking he had grown old in the service of his country. The emotional effect reportedly ended the conspiracy. The Newburgh episode was the direct backdrop for Washington's resignation at Annapolis nine months later.`,
    significanceWeight: 80,
    lat: 38.9784,
    lng: -76.4922,
    town: { connect: { id: 'us-md-annapolis' } },
  },
  {
    id: 'event-annapolis-burning-peggy-stewart',
    name: 'Burning of the Peggy Stewart',
    startDate: new Date('1774-10-19'),
    datePrecision: 'DAY',
    summary: `On October 19, 1774, Annapolis patriots burned the brig Peggy Stewart and its 2,320 pounds of taxed tea, forcing merchant Anthony Stewart to set fire to his own vessel. Maryland's equivalent of the Boston Tea Party, this act marked the point at which the Patriot faction moved from protest to direct action.`,
    significanceWeight: 75,
    lat: 38.9740,
    lng: -76.4880,
    town: { connect: { id: 'us-md-annapolis' } },
  },
  {
    id: 'event-annapolis-state-house-dome',
    name: 'Maryland State House Dome Completed',
    startDate: new Date('1779-01-01'),
    datePrecision: 'YEAR',
    summary: `The Maryland State House dome was completed in 1779, becoming the largest wooden dome in America and a Chesapeake Bay navigation landmark. Its completion despite wartime material shortages reflected Maryland's commitment to civil government. The building had been under construction since 1772.`,
    significanceWeight: 60,
    lat: 38.9784,
    lng: -76.4922,
    town: { connect: { id: 'us-md-annapolis' } },
  },
  {
    id: 'event-annapolis-colonial-peak',
    name: 'Annapolis at Its Colonial Peak',
    startDate: new Date('1764-01-01'),
    endDate: new Date('1774-01-01'),
    datePrecision: 'YEAR',
    summary: `In the 1760s and early 1770s, Annapolis was widely considered the most sophisticated city in British North America south of Philadelphia. Its tobacco wealth funded the Hammond-Harwood, Paca, and Chase-Lloyd mansions. This prosperity gave Maryland's founders the education and classical reference points that shaped their vision of republican government.`,
    significanceWeight: 65,
    lat: 38.9784,
    lng: -76.4922,
    town: { connect: { id: 'us-md-annapolis' } },
  },
];

export const annapolisStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-annapolis-washington-resignation',
    title: 'The Greatest Act',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-george-washington' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Washington's hands shook as he read the address. He held the parchment in both hands to steady them, and the men watching from the gallery could see it. The ceremony had been choreographed in advance: when Washington entered, he bowed to Congress; they responded with a nod, not a bow — a deliberate gesture establishing that the civilian body ranked above the military commander. He read his brief address, produced his commission, and handed it to Thomas Mifflin. He was a private citizen again.

What no one in that room could fully articulate was how unusual this was. The Atlantic world had no recent template for a victorious military commander relinquishing authority voluntarily. Julius Caesar had not. Oliver Cromwell had not. The fear that Washington might become an American Caesar was not paranoid — it was a reasonable extrapolation from what history suggested powerful men with armies did with them.

Washington gave history a different example. He did it publicly, formally, in a ceremony designed to be watched, reported, and remembered. Jefferson, in the gallery, called it the greatest act of Washington's life. King George III, told about it, reportedly said that if Washington truly meant to go back to his farm, he was the greatest man in the world.

The Maryland State House still stands. The room where it happened is preserved essentially as it was. You can stand there and think about what was given back and what was kept, and what it meant that the giving was possible at all.`,
    tags: ['Washington', 'resignation', 'civilian control', 'republic', 'Treaty of Paris'],
    town: { connect: { id: 'us-md-annapolis' } },
  },
  {
    id: 'story-annapolis-convention-failure',
    title: 'The Meeting That Failed Into History',
    storyType: 'MODERN_VOICE',
    narratorName: 'Constitutional Historian',
    narratorRole: 'Researcher, Maryland State Archives',
    verificationStatus: 'VERIFIED',
    textVersion: `The Annapolis Convention of September 1786 matters most for what it didn't accomplish. Delegates from only five states showed up. They couldn't agree on commercial policy. By any reasonable measure, it was a failure.

Then Alexander Hamilton wrote a report calling for a broader convention in Philadelphia the following May. Madison signed it. Congress endorsed it. Fifty-five delegates assembled in Philadelphia in May 1787 and wrote the Constitution. The Annapolis Convention is the direct institutional ancestor of that — a failure that recognized its own failure and created the conditions for something that succeeded.

Mann's Tavern, where it happened, is gone. The Constitutional Convention gets the monuments. Annapolis gets the footnote. But the footnote is doing real work. Every time you read the Preamble — "We the People" — you're reading something that traces back to twelve delegates in a tavern who couldn't agree on import duties and wrote a call for help instead.`,
    tags: ['Annapolis Convention', 'Constitution', 'Hamilton', 'Madison', 'Articles of Confederation'],
    town: { connect: { id: 'us-md-annapolis' } },
  },
];

export const annapolisLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-md-annapolis' } },
    title: 'Annapolis 1783–84: The End of the Revolution and the Birth of Republican Government',
    gradeRange: '8-12',
    estimatedDuration: '3 class periods',
    summary: 'Students analyze Washington\'s resignation and the Treaty of Paris ratification as the Revolution\'s defining constitutional moment, examining how ceremony communicated republican principles and tracing the path from the Annapolis Convention of 1786 to the Constitutional Convention of 1787.',
    lessonData: {
      objectives: [
        'Explain the significance of Washington\'s resignation as a precedent for civilian control of the military',
        'Analyze the Treaty of Paris ratification as the formal conclusion of the Revolutionary War',
        'Evaluate how ceremony communicated political principles in the founding era',
        'Connect the Annapolis Convention of 1786 to the Constitutional Convention of 1787',
      ],
      essentialQuestions: [
        'Why did contemporaries consider Washington\'s resignation more significant than his military victories?',
        'What does it mean to design a political ceremony — what was the Annapolis resignation designed to communicate?',
        'How did the failures of the Articles of Confederation lead to the Constitutional Convention?',
      ],
      materials: [
        'Washington\'s address to Congress, December 23, 1783 (Library of Congress)',
        'Jefferson\'s letter describing the resignation ceremony',
        'Hamilton\'s report from the Annapolis Convention, September 1786',
        'Historical map of Annapolis, 1784',
      ],
      activities: [
        { name: 'Protocol Analysis: What the Ceremony Communicated', duration: '25 min', description: 'Students identify each deliberate protocol choice in the resignation ceremony, explain what constitutional principle it communicated, and discuss whether ceremony is a meaningful way to establish principles.' },
        { name: 'Primary Source Close Reading: Washington\'s Address', duration: '30 min', description: 'Students annotate Washington\'s December 23 address and compare Jefferson\'s description to Washington\'s own words, identifying what each source reveals that the other does not.' },
        { name: 'The Annapolis Convention: From Failure to Constitution', duration: '25 min', description: 'Students read Hamilton\'s report and trace the institutional chain from Annapolis 1786 to Philadelphia 1787 to the Constitution, addressing: can a political failure be more important than a political success?' },
      ],
      assessment: 'Essay (600-800 words): "Why did Jefferson call Washington\'s resignation the greatest act of his life?" Cite three primary sources and address one counterargument.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: ['CCSS.ELA-LITERACY.RH.9-10.6: Compare point of view of two or more authors on the same topic', 'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content'],
      c3Framework: ['D2.His.1.9-12: Evaluate how historical events were shaped by unique circumstances of time and place', 'D2.Civ.2.9-12: Analyze the role of citizens in the design of governmental structures'],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-md-annapolis' } },
    title: 'Architecture and Power: Reading Annapolis\'s Georgian Mansions as Political Documents',
    gradeRange: '6-10',
    estimatedDuration: '2 class periods',
    summary: 'Students use the Hammond-Harwood, Paca, and Chase-Lloyd Houses as primary sources for understanding the founding generation\'s social world, reading architectural choices as expressions of political values and examining the tobacco-and-enslaved-labor economy that paid for them.',
    lessonData: {
      objectives: [
        'Analyze Georgian architectural features as expressions of Enlightenment political values',
        'Identify the economic foundations of Annapolis\'s colonial wealth in tobacco and enslaved labor',
        'Evaluate how the founders\' social backgrounds shaped their vision of republican government',
        'Practice using physical evidence as historical sources',
      ],
      essentialQuestions: [
        'What does a building tell us about the people who built it and the society they lived in?',
        'What does it mean that men who declared "all men are created equal" lived in mansions built by enslaved people?',
      ],
      materials: [
        'Photographs and floor plans of the Hammond-Harwood, Paca, and Chase-Lloyd Houses',
        'Excerpts on tobacco economy and enslaved labor in colonial Maryland',
        'Map of Annapolis showing State House, mansions, and harbor',
      ],
      activities: [
        { name: 'Visual Evidence: What Does This Building Say?', duration: '30 min', description: 'Students examine photographs of the Hammond-Harwood House, identify classical architectural features, and discuss what each communicates about the owner\'s values and aspirations.' },
        { name: 'Who Paid for This? Tobacco Economy and Enslaved Labor', duration: '25 min', description: 'Students read about Chesapeake tobacco and enslaved labor, then develop a "two-sided" analysis of the mansions: what they reveal about founders\' ambitions and about the contradictions at the heart of the founding.' },
      ],
      assessment: 'One-page "building biography" of one Annapolis mansion: who built it, what economic system paid for it, what political values it expressed, and what its survival tells us about how we remember the founding generation.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: ['CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information with other information in print and digital texts', 'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources'],
      c3Framework: ['D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts', 'D2.His.5.6-8: Explain how and why perspectives of people have changed over time'],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const annapolisAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-md-baltimore',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason: 'Annapolis and Baltimore are 30 miles apart and served as twin centers of Maryland\'s Revolutionary civic and commercial life. Baltimore briefly served as national capital in 1776–77 while Annapolis served that role in 1783–84.',
    weight: 90,
  },
  {
    toTownId: 'us-va-yorktown',
    linkType: 'SHARED_EVENT',
    reason: 'Washington\'s resignation at Annapolis was the direct sequel to the Yorktown surrender. The same commander who accepted Cornwallis\'s surrender in October 1781 gave up his commission in December 1783.',
    weight: 88,
  },
  {
    toTownId: 'us-pa-philadelphia',
    linkType: 'SHARED_PERSON',
    reason: 'The Continental Congress relocated from Philadelphia to Annapolis in late 1783 after the Pennsylvania mutiny crisis. Many of the same delegates served in both cities.',
    weight: 82,
  },
  {
    toTownId: 'us-nj-princeton',
    linkType: 'SHARED_PERSON',
    reason: 'The Continental Congress met briefly in Princeton between the Philadelphia mutiny and the move to Annapolis. The same congressional body operated across all three locations in 1783.',
    weight: 65,
  },
];

// ============================================================================
// BALTIMORE
// ============================================================================

export const baltimoreTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Baltimore is where the American Revolution survived its most desperate winter. In December 1776, with the Continental Army in full retreat across New Jersey and Washington's forces dwindling by desertions and expired enlistments, the Continental Congress fled Philadelphia for Baltimore. The city on the Patapsco served as the national capital for two months — a period that coincided almost exactly with the darkest weeks of the war. From Baltimore, in the days after Washington's Christmas crossing of the Delaware, Congress granted Washington the emergency powers he needed to reconstitute the army. The nation's survival as a functioning political enterprise was partly decided in a rented house on Baltimore's Liberty Street.

The Congress had reason to fear. The British occupied New York and were advancing across New Jersey. Philadelphia seemed likely to fall. Baltimore provided distance and a defensible position behind the Patapsco River and the Chesapeake Bay. The Maryland legislature offered its support. The city's merchants, many of whom had already converted their vessels to privateering, had a direct financial stake in the war's continuation.

That privateering economy is the part of Baltimore's Revolutionary history most accounts underplay. The Chesapeake Bay was one of the most productive privateering theaters in North America. Baltimore merchants equipped dozens of vessels under letters of marque that preyed on British commercial shipping from the Bay through the Caribbean and into the English Channel. The wealth generated by these operations helped finance the war effort in ways that neither Continental currency nor congressional requisitions could reliably accomplish. Baltimore grew faster during the Revolution than almost any other American city precisely because the war was profitable for the men who had the ships and the willingness to use them.

The fort that would become Fort McHenry was not yet built in 1776. It grew from Revolutionary War earthworks into a proper masonry fortification by 1803 — named for James McHenry, Washington's aide-de-camp and later Secretary of War. Its defining moment came in September 1814, when a British fleet bombarded it for twenty-five hours without forcing the harbor entrance. Francis Scott Key, a Maryland lawyer watching from a British truce vessel, wrote the poem — "Defence of Fort McHenry," set to an English drinking song — that became the national anthem. The fort held. The flag flew. Baltimore did not fall.

The Maryland Line soldiers who formed the core of Baltimore's military contribution were already legendary before any of this: the 400 Marylanders who charged British forces repeatedly at Long Island in August 1776, covering Washington's retreat at the cost of 250 casualties, were called by Washington himself the bravest fellows he had ever seen. Their sacrifice bought the Revolution the hours it needed to survive.`,
};

export const baltimorePeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-samuel-smith-baltimore',
      name: 'Samuel Smith',
      roles: ['Continental Army Officer', 'Baltimore Merchant', 'U.S. Senator'],
      bioShort: 'Baltimore merchant and Continental Army officer who commanded Fort McHenry\'s defenses in 1814, coordinating land and naval forces that repulsed the British attack. He had served throughout the Revolution and used his merchant connections to supply the Continental Army and privateers from Baltimore.',
      birthYear: 1752,
      deathYear: 1839,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Commander of Baltimore\'s defenses during the 1814 British attack; connected Baltimore\'s Revolutionary privateering economy to its War of 1812 resistance.',
  },
  {
    person: {
      id: 'person-francis-scott-key',
      name: 'Francis Scott Key',
      roles: ['Maryland Lawyer', 'Poet', 'Prisoner Exchange Negotiator'],
      bioShort: 'Maryland lawyer who watched the British bombardment of Fort McHenry on September 13–14, 1814 from a truce vessel in the Patapsco. His poem "Defence of Fort McHenry," written aboard ship while negotiating a prisoner exchange, became "The Star-Spangled Banner."',
      birthYear: 1779,
      deathYear: 1843,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Wrote the poem during the Fort McHenry bombardment that became the national anthem; his truce-vessel vantage gave him a miles-distant view of the garrison flag.',
  },
  {
    person: {
      id: 'person-mary-pickersgill',
      name: 'Mary Pickersgill',
      roles: ['Flag Maker', 'Baltimore Businesswoman', 'Widow'],
      bioShort: 'Baltimore flagmaker who sewed the 30-by-42-foot garrison flag that flew over Fort McHenry during the 1814 bombardment. A professional maritime flagmaker, she and her team laid sections in a nearby malthouse to complete the enormous commission. Her Pratt Street house is now a museum.',
      birthYear: 1776,
      deathYear: 1857,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Made the garrison flag that Key saw flying over Fort McHenry; her Pratt Street home is now the Star-Spangled Banner Flag House museum.',
  },
  {
    person: {
      id: 'person-john-eager-howard',
      name: 'John Eager Howard',
      roles: ['Continental Army Colonel', 'Maryland Governor', 'U.S. Senator'],
      bioShort: 'Baltimore-born Continental Army officer whose bayonet charge at Cowpens in January 1781 helped destroy Tarleton\'s force and turn the tide of the Southern Campaign. Later served as Maryland governor and senator; his statue stands in Mount Vernon Place.',
      birthYear: 1752,
      deathYear: 1827,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Baltimore\'s most celebrated Revolutionary War combat officer; his Cowpens charge was one of the most decisive tactical moments of the Southern Campaign.',
  },
  {
    person: {
      id: 'person-otho-holland-williams',
      name: 'Otho Holland Williams',
      roles: ['Continental Army General', 'Adjutant General, Southern Army', 'Maryland Officer'],
      bioShort: 'Maryland general who served as Nathanael Greene\'s adjutant general throughout the Southern Campaign, managing the retreats of 1781 that exhausted Cornwallis\'s force. Among the most capable staff officers in the Continental Army; buried in Baltimore.',
      birthYear: 1749,
      deathYear: 1794,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Baltimore-connected Maryland general who managed Greene\'s logistics and rear-guard operations through the most challenging phase of the Southern Campaign.',
  },
  {
    person: {
      id: 'person-william-smallwood',
      name: 'William Smallwood',
      roles: ['Continental Army General', 'Maryland Governor', 'Brigade Commander'],
      bioShort: 'Commander of the Maryland Line at Long Island in August 1776, where his regiment\'s rearguard action became one of the war\'s celebrated acts of sacrifice. His "400 Marylanders" charged British forces repeatedly — at a cost of roughly 250 casualties — to allow Washington\'s army to escape.',
      birthYear: 1732,
      deathYear: 1792,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Commander of the Maryland troops whose Long Island sacrifice bought Washington time to evacuate; foundational to Maryland\'s Revolutionary identity.',
  },
  {
    person: {
      id: 'person-joshua-barney',
      name: 'Joshua Barney',
      roles: ['Continental Navy Officer', 'Privateer Captain', 'Commodore'],
      bioShort: 'Baltimore-born naval officer who ran privateer operations from Chesapeake Bay ports during the Revolution and later commanded the Chesapeake Flotilla during the War of 1812 — one of the most celebrated American naval officers of the era.',
      birthYear: 1759,
      deathYear: 1818,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Baltimore\'s leading naval figure across both the Revolution and War of 1812; embodied the privateer economy that funded much of Maryland\'s war effort.',
  },
  {
    person: {
      id: 'person-charles-carroll-barrister',
      name: 'Charles Carroll the Barrister',
      roles: ['Maryland Patriot', 'Constitutional Drafter', 'Lawyer'],
      bioShort: 'Baltimore-area lawyer (distinct from Charles Carroll of Carrollton) who drafted the Maryland Declaration of Rights in 1776 — guaranteeing freedom of conscience, jury trial rights, and limits on government power that anticipated the U.S. Bill of Rights by fifteen years. His Mount Clare estate is Baltimore\'s oldest surviving structure.',
      birthYear: 1723,
      deathYear: 1783,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Drafted the Maryland Declaration of Rights (1776) and owned Mount Clare — Baltimore\'s oldest surviving structure, now a museum.',
  },
];

export const baltimorePlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-baltimore-fort-mchenry',
    name: 'Fort McHenry National Monument and Historic Shrine',
    placeType: 'BATTLEFIELD',
    description: 'Star-shaped masonry fort on Whetstone Point that withstood a twenty-five-hour British naval bombardment on September 13–14, 1814. Built 1798–1803 on Revolutionary War earthworks and named for James McHenry, Washington\'s aide-de-camp. The garrison flag flying at dawn inspired Key to write "The Star-Spangled Banner."',
    lat: 39.2632,
    lng: -76.5796,
    address: '2400 E Fort Ave, Baltimore, MD 21230',
    town: { connect: { id: 'us-md-baltimore' } },
  },
  {
    id: 'place-baltimore-flag-house',
    name: 'Star-Spangled Banner Flag House',
    placeType: 'HISTORIC_HOUSE',
    description: 'The 1793 Federal-period home of Mary Pickersgill, where she and her team sewed the 30-by-42-foot garrison flag that flew over Fort McHenry. Sections too large for the house were completed in an adjacent malthouse, since demolished. Now a museum.',
    lat: 39.2881,
    lng: -76.6030,
    address: '844 E Pratt St, Baltimore, MD 21202',
    town: { connect: { id: 'us-md-baltimore' } },
  },
  {
    id: 'place-baltimore-mount-clare',
    name: 'Mount Clare Museum House',
    placeType: 'HISTORIC_HOUSE',
    description: 'The circa-1760 Georgian mansion of Charles Carroll the Barrister, built on a 2,300-acre estate west of Baltimore. Carroll drafted the Maryland Declaration of Rights in 1776. The oldest surviving structure in Baltimore City.',
    lat: 39.2840,
    lng: -76.6462,
    address: '1500 Washington Blvd, Baltimore, MD 21230',
    town: { connect: { id: 'us-md-baltimore' } },
  },
  {
    id: 'place-baltimore-westminster-burying-ground',
    name: 'Westminster Hall and Burying Ground',
    placeType: 'CEMETERY',
    description: 'Historic cemetery established in 1786 where Revolutionary War officers and Maryland founders are buried, including General James McHenry, for whom Fort McHenry was named. The 1852 Gothic church was built over burial vaults. Also contains the grave of Edgar Allan Poe.',
    lat: 39.2896,
    lng: -76.6212,
    address: '519 W Fayette St, Baltimore, MD 21201',
    town: { connect: { id: 'us-md-baltimore' } },
  },
  {
    id: 'place-baltimore-old-st-pauls',
    name: "Old St. Paul's Church",
    placeType: 'CHURCH',
    description: 'Baltimore\'s oldest Episcopal congregation, established 1692. The parish served as the spiritual home of leading Patriot families and hosted Continental Congress delegates during the 1776–77 Baltimore session.',
    lat: 39.2920,
    lng: -76.6133,
    address: '233 N Charles St, Baltimore, MD 21201',
    town: { connect: { id: 'us-md-baltimore' } },
  },
  {
    id: 'place-baltimore-maryland-center-history',
    name: 'Maryland Center for History and Culture',
    placeType: 'MUSEUM',
    description: 'Formerly the Maryland Historical Society (founded 1844), holding one of the most significant Revolutionary War Maryland collections in existence — including the original manuscript of "The Star-Spangled Banner" in Key\'s hand, Maryland Line regimental records, and Continental Congress Baltimore session artifacts.',
    lat: 39.2980,
    lng: -76.6205,
    address: '201 W Monument St, Baltimore, MD 21201',
    town: { connect: { id: 'us-md-baltimore' } },
  },
  {
    id: 'place-baltimore-battle-monument',
    name: 'Battle Monument (Monument Square)',
    placeType: 'MONUMENT',
    description: 'Erected 1815–25, the first civic monument built in the United States to honor those who died defending a city. It commemorates Baltimore\'s defenders killed during the British attack of September 1814, and its central commercial-district location signaled the civic pride the successful defense had created.',
    lat: 39.2913,
    lng: -76.6105,
    address: 'E Fayette St & N Calvert St, Baltimore, MD 21202',
    town: { connect: { id: 'us-md-baltimore' } },
  },
];

export const baltimoreEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-baltimore-congress-flees-philadelphia',
    name: 'Continental Congress Relocates to Baltimore',
    startDate: new Date('1776-12-20'),
    datePrecision: 'DAY',
    summary: `On December 20, 1776, the Continental Congress voted to adjourn from Philadelphia and reconvene in Baltimore at the Henry Fite House on Liberty Street, citing the advancing British threat. During the two-month Baltimore session, Congress granted Washington expanded emergency powers — recognizing that the army needed a more capable executive than the Articles of Confederation allowed.`,
    significanceWeight: 90,
    lat: 39.2904,
    lng: -76.6122,
    town: { connect: { id: 'us-md-baltimore' } },
  },
  {
    id: 'event-baltimore-congress-grants-war-powers',
    name: 'Congress Grants Washington Emergency Powers',
    startDate: new Date('1776-12-27'),
    datePrecision: 'DAY',
    summary: `On December 27, 1776 — three days after Washington's Delaware crossing — the Continental Congress in Baltimore granted Washington near-dictatorial emergency powers for six months: authority to raise troops, appoint officers, and requisition supplies without congressional approval. Washington used these powers carefully and returned them when the emergency passed.`,
    significanceWeight: 88,
    lat: 39.2904,
    lng: -76.6122,
    town: { connect: { id: 'us-md-baltimore' } },
  },
  {
    id: 'event-baltimore-maryland-line-long-island',
    name: "Maryland Line's Sacrifice at Long Island",
    startDate: new Date('1776-08-27'),
    datePrecision: 'DAY',
    summary: `At Long Island on August 27, 1776, approximately 400 Maryland Continentals executed a rearguard action, charging repeatedly against superior British and Hessian forces to allow Washington's army to reach Brooklyn Heights. Of the 400, roughly 250 became casualties. Washington reportedly said "Good God, what brave fellows I must this day lose." Their sacrifice became foundational to Maryland's Revolutionary identity.`,
    significanceWeight: 92,
    lat: 40.6501,
    lng: -73.9496,
    town: { connect: { id: 'us-md-baltimore' } },
  },
  {
    id: 'event-baltimore-privateering-peak',
    name: 'Baltimore Privateering Economy at Peak',
    startDate: new Date('1778-01-01'),
    endDate: new Date('1782-12-31'),
    datePrecision: 'YEAR',
    summary: `During the middle years of the Revolutionary War, Baltimore emerged as one of America's leading privateering ports, equipping dozens of vessels under letters of marque to prey on British shipping in the Bay, along the Atlantic, and in Caribbean waters. Prize wealth helped sustain the merchant class and partly funded the war effort, driving Baltimore's population growth through the conflict.`,
    significanceWeight: 78,
    lat: 39.2848,
    lng: -76.6072,
    town: { connect: { id: 'us-md-baltimore' } },
  },
  {
    id: 'event-baltimore-howard-cowpens',
    name: "Howard's Bayonet Charge at Cowpens",
    startDate: new Date('1781-01-17'),
    datePrecision: 'DAY',
    summary: `At Cowpens on January 17, 1781, Colonel John Eager Howard of Baltimore led the Maryland and Delaware Continentals in a bayonet charge that shattered Tarleton's force. The charge followed a controlled American retreat that Tarleton mistook for a rout. Howard received a congressional gold medal; Cowpens is widely considered the turning point of the Southern Campaign.`,
    significanceWeight: 87,
    lat: 35.1313,
    lng: -81.8032,
    town: { connect: { id: 'us-md-baltimore' } },
  },
  {
    id: 'event-baltimore-fort-mchenry-bombardment',
    name: 'British Bombardment of Fort McHenry',
    startDate: new Date('1814-09-13'),
    endDate: new Date('1814-09-14'),
    datePrecision: 'DAY',
    summary: `For twenty-five hours on September 13–14, 1814, a British naval squadron bombarded Fort McHenry with approximately 1,800 shells, rockets, and bombs. The fort held; the British could not silence the guns or force the harbor entrance. Francis Scott Key, watching from a truce vessel miles away, saw the garrison flag still flying at dawn and wrote the poem that became "The Star-Spangled Banner."`,
    significanceWeight: 99,
    lat: 39.2632,
    lng: -76.5796,
    town: { connect: { id: 'us-md-baltimore' } },
  },
  {
    id: 'event-baltimore-star-spangled-banner-written',
    name: 'Francis Scott Key Writes "The Star-Spangled Banner"',
    startDate: new Date('1814-09-14'),
    datePrecision: 'DAY',
    summary: `On September 14, 1814, Francis Scott Key drafted "Defence of Fort McHenry" on the back of a letter while still aboard the British truce vessel following the fleet's withdrawal. Published in Baltimore newspapers within days and set to an English drinking song, it became the official U.S. national anthem in 1931.`,
    significanceWeight: 97,
    lat: 39.2750,
    lng: -76.5900,
    town: { connect: { id: 'us-md-baltimore' } },
  },
  {
    id: 'event-baltimore-maryland-declaration-rights',
    name: 'Maryland Declaration of Rights Adopted',
    startDate: new Date('1776-11-03'),
    datePrecision: 'DAY',
    summary: `On November 3, 1776, Maryland adopted its Declaration of Rights, drafted primarily by Charles Carroll the Barrister. The document guaranteed freedom of conscience, jury trial rights, protection against unreasonable searches, and limits on government power that anticipated the U.S. Bill of Rights by fifteen years — among the most comprehensive colonial rights documents.`,
    significanceWeight: 83,
    lat: 38.9784,
    lng: -76.4922,
    town: { connect: { id: 'us-md-baltimore' } },
  },
  {
    id: 'event-baltimore-fort-mchenry-construction',
    name: 'Fort McHenry Constructed on Revolutionary Earthworks',
    startDate: new Date('1798-01-01'),
    endDate: new Date('1803-12-31'),
    datePrecision: 'YEAR',
    summary: `Fort McHenry was built 1798–1803 as a masonry fortification on Whetstone Point, replacing Revolutionary War earthworks. Named for James McHenry — Washington's aide-de-camp, later Secretary of War — its star-shaped design provided overlapping fields of fire to defend the harbor entrance. This structure, completed fifteen years after the Revolution, was what Key saw standing against the British in 1814.`,
    significanceWeight: 72,
    lat: 39.2632,
    lng: -76.5796,
    town: { connect: { id: 'us-md-baltimore' } },
  },
  {
    id: 'event-baltimore-congress-returns-philadelphia',
    name: 'Continental Congress Returns to Philadelphia',
    startDate: new Date('1777-02-27'),
    datePrecision: 'DAY',
    summary: `On February 27, 1777, Congress voted to return to Philadelphia, ending the two-month Baltimore session. Washington's victories at Trenton and Princeton had stabilized New Jersey and reduced the threat. The Baltimore session had produced the emergency powers resolution that helped the army survive its most desperate weeks.`,
    significanceWeight: 68,
    lat: 39.2904,
    lng: -76.6122,
    town: { connect: { id: 'us-md-baltimore' } },
  },
];

export const baltimoreStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-baltimore-maryland-400',
    title: 'Good God, What Brave Fellows',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-william-smallwood' } },
    verificationStatus: 'VERIFIED',
    textVersion: `The Maryland soldiers knew what they were being asked to do. The British had flanked the American position at Brooklyn. The army was falling back toward the boats that might carry them to Manhattan. Someone had to cover the retreat.

Smallwood's regiment and Gist's volunteers — perhaps 400 men — turned to face the British advance. What followed was a series of charges: attacking, falling back, re-forming, attacking again. Each charge cost them men they could not replace. Each bought Washington minutes he could not buy any other way. Washington watched from the fortifications above. The words attributed to him — "Good God, what brave fellows I must this day lose" — come from a single later account, but what he saw is not in question.

Of the roughly 400, about 250 became casualties. The prisoners went to British prison ships where conditions were lethal. The killed were buried where they fell, in Brooklyn fields that have never been found. Their sacrifice bought Washington the hours he needed. The army reached the heights. The wind shifted. The boats crossed. The fog came down. The Revolution continued. Maryland remembers this. The state motto — "Fatti maschii, parole femine," manly deeds, womanly words — has these men in mind.`,
    tags: ['Maryland Line', 'Long Island', 'sacrifice', 'rearguard', 'Smallwood'],
    town: { connect: { id: 'us-md-baltimore' } },
  },
  {
    id: 'story-baltimore-mchenry-dawn',
    title: "By the Dawn's Early Light",
    storyType: 'MODERN_VOICE',
    narratorName: 'Fort McHenry Historian',
    narratorRole: 'Park Ranger, Fort McHenry National Monument',
    verificationStatus: 'VERIFIED',
    textVersion: `People come here and they want to stand where Key stood. I have to explain: Key wasn't at the fort. He was miles away in the Patapsco River, aboard a British truce vessel, having gone out to negotiate a prisoner exchange. The British wouldn't let him leave until the attack was over. So he watched the whole bombardment from the British perspective, waiting to see whether the fort would fall.

The bombardment went on for twenty-five hours. That surprises visitors most — they imagine a single dramatic night. It started in the morning, paused, and continued through the night into the following dawn. The rockets were Congreve rockets, unreliable but spectacular. The bombs bursting in air were mortar rounds designed to detonate above and scatter fragments. The flag was 30 by 42 feet. On a smoke-filled night miles from shore, it was difficult to see. He had to wait for the dawn's early light.

What gets missed in the anthem narrative is that the fort worked. The garrison held against a fleet that fired nearly 1,800 projectiles and could not silence the American guns. Four Americans died. The British withdrew. The fort stood because the Revolutionary generation had understood this was where you had to make the stand. The flag flew because the fort stood.`,
    tags: ['Fort McHenry', 'Star-Spangled Banner', 'Key', 'bombardment', 'War of 1812'],
    town: { connect: { id: 'us-md-baltimore' } },
  },
];

export const baltimoreLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-md-baltimore' } },
    title: 'Baltimore 1776–77: The Continental Congress in Crisis',
    gradeRange: '7-10',
    estimatedDuration: '2-3 class periods',
    summary: 'Students examine the Continental Congress\'s flight to Baltimore in December 1776 as a window into the governance crisis of the early Republic, analyzing the emergency powers Congress granted Washington and evaluating the tension between civilian control and the practical needs of fighting a losing war.',
    lessonData: {
      objectives: [
        'Explain why the Continental Congress relocated to Baltimore in December 1776',
        'Analyze the emergency powers resolution as a response to the crisis of late 1776',
        'Evaluate the tension between civilian control of the military and wartime necessity',
        'Connect the failures of the Continental Congress to the movement for constitutional reform',
      ],
      essentialQuestions: [
        'What does it mean for a government to function in crisis, and what are the costs of giving one person emergency powers?',
        'Why did Congress need to flee Philadelphia, and what does that reveal about the Revolution in December 1776?',
        'How did the experiences of 1776–77 shape founders\' thinking about what kind of government America needed?',
      ],
      materials: [
        'Continental Congress emergency powers resolution, December 27, 1776',
        'Washington\'s letter to Congress from Trenton, December 20, 1776',
        'Thomas Paine\'s "The American Crisis," December 1776',
        'Map showing British advance through New Jersey and Congress\'s Baltimore location',
      ],
      activities: [
        { name: 'Crisis Mapping: Why Baltimore?', duration: '20 min', description: 'Students trace the congressional evacuation from Philadelphia to Baltimore on a map of British positions in December 1776, discussing what a government\'s location tells us about its stability.' },
        { name: 'Close Reading: The Emergency Powers Resolution', duration: '25 min', description: 'Students annotate the December 27 resolution identifying powers granted and limitations placed, then debate: Was giving one general near-dictatorial authority the right decision?' },
        { name: 'Paine\'s "Crisis" and the Baltimore Moment', duration: '20 min', description: 'Students read the opening of "The American Crisis" and connect Paine\'s contrast between "sunshine patriots" and committed revolutionaries to the Congress\'s situation in Baltimore.' },
      ],
      assessment: 'Structured paragraph (8-10 sentences): "Was Congress right to grant Washington emergency powers in December 1776?" Use evidence from the resolution and one other source, and address one counterargument.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: ['CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources', 'CCSS.ELA-LITERACY.RH.6-8.8: Distinguish among fact, opinion, and reasoned judgment in a text'],
      c3Framework: ['D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts', 'D2.Civ.1.6-8: Distinguish the powers and responsibilities of citizens, political parties, and governments'],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-md-baltimore' } },
    title: 'The Star-Spangled Banner: Anthem, Symbol, and Contested History',
    gradeRange: '8-12',
    estimatedDuration: '3 class periods',
    summary: 'Students use the Fort McHenry bombardment and the writing of "The Star-Spangled Banner" to examine how national symbols are created, contested, and reinterpreted across time — analyzing the original poem against the anthem it became and considering how the same symbol can mean different things to different Americans.',
    lessonData: {
      objectives: [
        'Analyze "Defence of Fort McHenry" as a primary source describing a specific historical event',
        'Evaluate how the poem was transformed into a national symbol over time',
        'Examine the full anthem text and its historical context, including the contested third verse',
        'Consider how national symbols can carry multiple, conflicting meanings for different communities',
      ],
      essentialQuestions: [
        'What is the relationship between the historical event Key witnessed and the anthem it became?',
        'How do national symbols acquire meaning over time — and can that meaning change?',
        'Who gets to decide what a national anthem means?',
      ],
      materials: [
        'Original manuscript of "Defence of Fort McHenry" (facsimile, Library of Congress)',
        'All four verses of the original poem',
        'Timeline of the anthem\'s history from 1814 to 1931 official adoption',
        'Historical background on Francis Scott Key, including his role as a slaveholder',
      ],
      activities: [
        { name: 'The Poem vs. The Anthem: What Changed?', duration: '25 min', description: 'Students read all four verses, annotate bombardment details in the poem, then compare verse one (the anthem) to the other three: what did Americans choose to keep, and what do those choices reveal about national symbol construction?' },
        { name: 'The Third Verse: History and Context', duration: '30 min', description: 'Students examine the third verse, read about the Colonial Marines (escaped enslaved men who fought for Britain), and discuss Key\'s background before writing a position statement on whether this context changes what the anthem means.' },
        { name: 'Symbol Over Time', duration: '25 min', description: 'Students trace the anthem\'s history from 1814 to the present using a timeline, identify moments when its meaning was contested, and present one contested moment to the class.' },
      ],
      assessment: 'Essay (700-900 words): "What does the Star-Spangled Banner mean, and to whom?" Engage with the historical context of the original poem, at least one moment from the anthem\'s later history, and whether national symbols can hold multiple meanings simultaneously.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: ['CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors on the same topic', 'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content'],
      c3Framework: ['D2.His.1.9-12: Evaluate how historical events were shaped by unique circumstances of time and place', 'D2.His.9.9-12: Analyze the relationship between historical sources and secondary interpretations'],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

export const baltimoreAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-md-annapolis',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason: 'Baltimore and Annapolis are 30 miles apart and functioned as the twin centers of Maryland\'s Revolutionary civic life. Annapolis was the political capital; Baltimore was the commercial and privateering hub. Both served as temporary seats of the Continental Congress.',
    weight: 90,
  },
  {
    toTownId: 'us-pa-philadelphia',
    linkType: 'SHARED_EVENT',
    reason: 'The Continental Congress fled Philadelphia for Baltimore in December 1776, making Baltimore the national capital during the war\'s most desperate weeks. Congress returned to Philadelphia after Washington\'s Trenton and Princeton victories stabilized the situation.',
    weight: 85,
  },
  {
    toTownId: 'us-sc-cowpens',
    linkType: 'SHARED_PERSON',
    reason: 'Baltimore\'s John Eager Howard led the decisive bayonet charge at Cowpens in January 1781 — the turning point of the Southern Campaign. The Maryland and Delaware Continentals who made that charge were among the most experienced soldiers in the Continental Army.',
    weight: 78,
  },
  {
    toTownId: 'us-ny-brooklyn',
    linkType: 'SHARED_PERSON',
    reason: 'The Maryland 400\'s sacrifice at Long Island in August 1776 — covering Washington\'s retreat at the cost of roughly 250 casualties — is foundational to both Maryland\'s and Baltimore\'s Revolutionary identity. Their action gave the Revolution the hours it needed to survive.',
    weight: 82,
  },
];
