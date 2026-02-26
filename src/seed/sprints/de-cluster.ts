// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// DE Cluster: 2 Delaware Revolutionary War towns
// Campaign: Delaware Ratification & Brandywine Campaign, 1775–1787

import { Prisma } from '@prisma/client';

/**
 * DE Cluster — Delaware Revolutionary War Towns
 *
 * Dover: seat of the government that produced the first state to ratify the
 * Constitution, home of Caesar Rodney's decisive midnight ride to Philadelphia.
 * Wilmington: strategic port and supply hub whose Brandywine hinterland hosted
 * the largest land battle of the war in the northern theater.
 *
 * Sources: John A. Munroe's "History of Delaware," NPS Brandywine Battlefield
 * documentation, Delaware Public Archives primary documents, John Ferling's
 * "Almost a Miracle," and Delaware State Archives ratification records.
 */

// ============================================================================
// DOVER
// ============================================================================

export const doverTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Dover, Delaware, carries a story most Americans don't know they should know. On the night of June 27–28, 1776, Caesar Rodney rode fifty miles on horseback through a thunderstorm from Dover to Philadelphia to cast the deciding vote that made Delaware's congressional delegation unanimous for independence. Without that ride, Delaware's vote would have been split. A split Delaware vote might have delayed or fractured the Continental Congress's move toward independence at the most critical moment of the entire war. Rodney understood this. He rode anyway, arriving mud-spattered and wearing the green silk scarf he used to cover the cancerous growth on his face that would kill him seven years later.

That single act has given Dover a place in the founding story it might not otherwise occupy. Delaware was the smallest state — called "The Three Counties on the Delaware" before 1776 — with no major city, no significant manufacturing, and no powerful merchant class. What it had was geography at the mouth of the Delaware River and a political culture shaped by its Quaker, Swedish, and Dutch settler heritage that was genuinely divided about independence in ways most states were not.

The ratification story is even more consequential. On December 7, 1787, Delaware's convention assembled at Battell's Tavern in Dover and ratified the new federal Constitution in five days by unanimous vote, becoming the first state in the Union. The speed and unanimity were not accidental. Delaware's leaders understood that a small state without Virginia's or Massachusetts's economic weight would be protected by the Constitution's equal Senate representation in a way it could never protect itself alone. They calculated their interest correctly and moved before opposition could organize.

Dover's role as Delaware's capital meant it was also the administrative center during the war: recruiting soldiers, managing supplies, organizing the Delaware Regiment — the "Delaware Blues" — that became one of the most respected units in the Continental Army. They fought at Long Island, Trenton, Princeton, Brandywine, Germantown, and Camden, praised by Washington himself. The papers authorizing that regiment were signed in Dover. The town also sat at the intersection of Delaware's internal Patriot-Loyalist conflict, particularly among its substantial Quaker population, whose meeting records document the negotiations, compromises, and costs of the era's impossible choices.`,
};

// ============================================================================
// DOVER — PEOPLE
// ============================================================================

export const doverPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-caesar-rodney',
      name: 'Caesar Rodney',
      roles: ['Delaware Delegate to Continental Congress', 'President of Delaware', 'Brigadier General'],
      bioShort:
        'Delaware statesman who rode fifty miles overnight through a thunderstorm to cast the deciding vote for independence on July 2, 1776. Served as President of Delaware 1778–1781, organizing the state\'s war effort from Dover despite worsening facial cancer that would kill him in 1784.',
      birthYear: 1728,
      deathYear: 1784,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Dover-born and Dover-based; his midnight ride originated there and he governed Delaware from Dover throughout the war.',
  },
  {
    person: {
      id: 'person-george-read',
      name: 'George Read',
      roles: ['Delaware Delegate to Continental Congress', 'Signer of Constitution', 'U.S. Senator'],
      bioShort:
        'Delaware lawyer who initially voted against independence but signed the Declaration when finalized. Principal drafter of Delaware\'s 1776 state constitution and leading delegate to the 1787 Constitutional Convention. Present at Dover\'s ratification convention.',
      birthYear: 1733,
      deathYear: 1798,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Led Delaware\'s constitutional and ratification conventions based in Dover; his legal work shaped the state\'s early governance.',
  },
  {
    person: {
      id: 'person-thomas-mckean',
      name: 'Thomas McKean',
      roles: ['Delaware Delegate to Continental Congress', 'Signer of Declaration', 'Chief Justice of Pennsylvania'],
      bioShort:
        'Delaware lawyer who cast one of the two pro-independence Delaware votes on July 2, 1776. Summoned Rodney to break the deadlock. Later served as President of Delaware and Chief Justice of Pennsylvania.',
      birthYear: 1734,
      deathYear: 1817,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'His letter summoning Rodney triggered the midnight ride; central to Delaware\'s independence and constitutional story.',
  },
  {
    person: {
      id: 'person-john-haslet',
      name: 'Colonel John Haslet',
      roles: ['Continental Army Officer', 'Commander of Delaware Regiment'],
      bioShort:
        'Irish-born physician who organized the First Delaware Regiment — the "Delaware Blues" — in 1776. Led them through Long Island and Trenton. Killed at Princeton on January 3, 1777. Washington called the Delaware regiment one of the finest in the Continental Army.',
      birthYear: 1727,
      deathYear: 1777,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Raised and organized the First Delaware Regiment from Dover; killed at Princeton in the regiment\'s first winter campaign.',
  },
  {
    person: {
      id: 'person-john-dickinson',
      name: 'John Dickinson',
      roles: ['Statesman', 'Continental Congress Delegate', 'Governor of Delaware and Pennsylvania', 'Author'],
      bioShort:
        'Author of "Letters from a Farmer in Pennsylvania" (1767–68), one of the most influential pre-Revolutionary texts. A Delaware landowner who initially resisted independence but served the Patriot cause after the Declaration. Chaired the committee that drafted the Articles of Confederation.',
      birthYear: 1732,
      deathYear: 1808,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Major Delaware political figure whose Quaker-influenced hesitancy and later service shaped Delaware\'s Revolutionary character.',
  },
  {
    person: {
      id: 'person-nicholas-van-dyke',
      name: 'Nicholas Van Dyke',
      roles: ['President of Delaware', 'Continental Congress Delegate'],
      bioShort:
        'Delaware lawyer who served as President (Governor) of Delaware 1783–1786, overseeing the state\'s transition from war footing to peacetime governance. Member of the Continental Congress and instrumental in organizing Delaware\'s ratification of the Constitution.',
      birthYear: 1738,
      deathYear: 1789,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Led Delaware\'s executive government from Dover in the critical post-war years leading to Constitutional ratification.',
  },
  {
    person: {
      id: 'person-richard-bassett',
      name: 'Richard Bassett',
      roles: ['Delaware Delegate to Constitutional Convention', 'U.S. Senator', 'Governor of Delaware'],
      bioShort:
        'Dover-area lawyer and planter, Delaware delegate to the Constitutional Convention in 1787, and one of Delaware\'s first U.S. Senators. Active in Dover\'s ratification convention of December 1787. A devout Methodist associated with Francis Asbury\'s circuit-riding ministry.',
      birthYear: 1745,
      deathYear: 1815,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Key delegate to the Constitutional Convention and active participant in Dover\'s unanimous ratification vote.',
  },
  {
    person: {
      id: 'person-samuel-patterson',
      name: 'Colonel Samuel Patterson',
      roles: ['Delaware Militia Commander', 'Continental Army Officer', 'Kent County Sheriff'],
      bioShort:
        'Kent County militia officer who organized Delaware\'s irregular forces during the war and managed Loyalist activity in central Delaware. Served as a crucial link between Dover\'s civil government and military operations in the field.',
      birthYear: 1740,
      deathYear: 1806,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Commanded militia forces operating out of Dover and coordinated Delaware\'s local defense with the central government.',
  },
];

// ============================================================================
// DOVER — PLACES
// ============================================================================

export const doverPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-dover-old-state-house',
    name: 'Delaware State House (Old State House)',
    placeType: 'GOVERNMENT',
    description:
      'The 1792 State House in Dover is the second-oldest surviving state capitol building still in use in the United States. It stands near earlier colonial structures where Delaware\'s assembly met during the Revolution. Caesar Rodney\'s equestrian statue stands nearby on The Green.',
    lat: 39.1582,
    lng: -75.5244,
    address: '411 Legislative Ave, Dover, DE 19901',
    town: { connect: { id: 'us-de-dover' } },
  },
  {
    id: 'place-dover-the-green',
    name: 'The Green, Dover',
    placeType: 'LANDMARK',
    description:
      'The central public square of Dover, laid out in 1717. During the Revolution, The Green served as a mustering ground for Delaware militia and Continental recruits. The Caesar Rodney equestrian statue (1923) commemorates his midnight ride; his image appears on the Delaware quarter.',
    lat: 39.1579,
    lng: -75.5244,
    address: 'The Green, Dover, DE 19901',
    town: { connect: { id: 'us-de-dover' } },
  },
  {
    id: 'place-dover-battells-tavern-site',
    name: 'Battell\'s Tavern Site (Ratification Site)',
    placeType: 'TAVERN',
    description:
      'The site of Battell\'s Tavern, where Delaware\'s ratification convention assembled December 3, 1787 and voted 30-0 to ratify the U.S. Constitution on December 7 — making Delaware the first state in the Union. The tavern no longer stands; the site on The Green is marked.',
    lat: 39.1580,
    lng: -75.5250,
    address: 'The Green area, Dover, DE 19901',
    town: { connect: { id: 'us-de-dover' } },
  },
  {
    id: 'place-dover-christ-church',
    name: 'Christ Church, Dover',
    placeType: 'CHURCH',
    description:
      'One of Dover\'s oldest churches, with Anglican/Episcopal roots predating the Revolution. The church community was divided between Loyalist sympathizers and Patriots. The churchyard contains graves of Revolutionary War-era residents including some connected to Delaware\'s colonial government.',
    lat: 39.1568,
    lng: -75.5248,
    address: 'South State Street, Dover, DE 19901',
    town: { connect: { id: 'us-de-dover' } },
  },
  {
    id: 'place-dover-delaware-public-archives',
    name: 'Delaware Public Archives',
    placeType: 'MUSEUM',
    description:
      'Delaware\'s state archives hold the primary documentary record of the Revolutionary era: Caesar Rodney\'s correspondence, Delaware Assembly records, militia muster rolls, and the engrossed copy of Delaware\'s ratification of the Constitution.',
    lat: 39.1620,
    lng: -75.5200,
    address: '121 Duke of York St, Dover, DE 19901',
    town: { connect: { id: 'us-de-dover' } },
  },
  {
    id: 'place-dover-john-dickinson-plantation',
    name: 'John Dickinson Plantation',
    placeType: 'HISTORIC_HOUSE',
    description:
      'The restored boyhood home of John Dickinson — "Penman of the Revolution" — located just south of Dover. Illustrates the life of Delaware\'s planter-gentry class and Dickinson\'s complicated relationship with independence. A state-managed historic site.',
    lat: 39.1180,
    lng: -75.5370,
    address: '340 Kitts Hummock Rd, Dover, DE 19901',
    town: { connect: { id: 'us-de-dover' } },
  },
];

// ============================================================================
// DOVER — EVENTS
// ============================================================================

export const doverEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-dover-rodney-ride-1776',
    name: 'Caesar Rodney\'s Midnight Ride to Philadelphia',
    startDate: new Date('1776-06-27'),
    endDate: new Date('1776-06-28'),
    datePrecision: 'DAY',
    summary:
      'Delaware delegate Caesar Rodney rode approximately fifty miles overnight from Dover through a thunderstorm to reach Philadelphia in time for the July 2 independence vote. His arrival broke the Delaware delegation\'s deadlock — McKean favored independence, Read opposed it — making Delaware\'s vote unanimous. Without Rodney, the July 2 vote might not have produced the clear majority the Continental Congress needed.',
    significanceWeight: 98,
    lat: 39.1579,
    lng: -75.5244,
    town: { connect: { id: 'us-de-dover' } },
  },
  {
    id: 'event-dover-delaware-constitution-1776',
    name: 'Delaware Adopts State Constitution',
    startDate: new Date('1776-09-20'),
    datePrecision: 'DAY',
    summary:
      'Delaware\'s constitutional convention adopted the first state constitution establishing Delaware as an independent state with Dover as its capital. The document created a bicameral legislature, a President elected by the legislature, and an independent judiciary. George Read was a principal drafter.',
    significanceWeight: 85,
    lat: 39.1579,
    lng: -75.5244,
    town: { connect: { id: 'us-de-dover' } },
  },
  {
    id: 'event-dover-delaware-regiment-organized-1776',
    name: 'Delaware Regiment ("Delaware Blues") Organized',
    startDate: new Date('1776-01-01'),
    datePrecision: 'YEAR',
    summary:
      'The First Delaware Regiment was organized under Colonel John Haslet with administrative support from Dover, recruiting from Kent and Sussex counties. The regiment became one of Washington\'s most reliable Continental units, fighting at Long Island, Trenton, Princeton, Brandywine, Germantown, and Camden.',
    significanceWeight: 85,
    lat: 39.1579,
    lng: -75.5244,
    town: { connect: { id: 'us-de-dover' } },
  },
  {
    id: 'event-dover-rodney-president-1778',
    name: 'Caesar Rodney Elected President of Delaware',
    startDate: new Date('1778-03-31'),
    datePrecision: 'DAY',
    summary:
      'The Delaware General Assembly elected Rodney President (Governor) despite his deteriorating health from facial cancer. He organized Delaware\'s militia, managed supply contributions to the Continental Army, and suppressed Loyalist activity in Sussex County, serving until 1781.',
    significanceWeight: 78,
    lat: 39.1579,
    lng: -75.5244,
    town: { connect: { id: 'us-de-dover' } },
  },
  {
    id: 'event-dover-loyalist-unrest-sussex-1778',
    name: 'Loyalist Unrest Suppressed in Sussex County',
    startDate: new Date('1778-01-01'),
    datePrecision: 'YEAR',
    summary:
      'Sussex County in southern Delaware harbored one of the most concentrated Loyalist populations in the mid-Atlantic. A planned Loyalist uprising involving hundreds of men was suppressed by Delaware militia operating under Rodney\'s authority from Dover, illustrating Delaware\'s deep internal divisions.',
    significanceWeight: 72,
    lat: 38.7500,
    lng: -75.5500,
    town: { connect: { id: 'us-de-dover' } },
  },
  {
    id: 'event-dover-constitutional-convention-delegates-1787',
    name: 'Delaware Sends Delegates to Constitutional Convention',
    startDate: new Date('1787-05-25'),
    datePrecision: 'DAY',
    summary:
      'Delaware sent five delegates to the Constitutional Convention — Read, Bedford, Dickinson, Bassett, and Broom — explicitly instructed not to agree to any changes diminishing Delaware\'s equal vote in the national government. This position contributed to the Connecticut Compromise establishing equal Senate representation.',
    significanceWeight: 82,
    lat: 39.1579,
    lng: -75.5244,
    town: { connect: { id: 'us-de-dover' } },
  },
  {
    id: 'event-dover-ratification-1787',
    name: 'Delaware Ratifies the U.S. Constitution — First State',
    startDate: new Date('1787-12-07'),
    datePrecision: 'DAY',
    summary:
      'Delaware\'s ratification convention at Battell\'s Tavern in Dover voted unanimously — 30-0 — to ratify the federal Constitution on December 7, 1787, making Delaware the first state in the Union. The convention assembled December 3 and finished in five days. Speed and unanimity reflected Delaware leaders\' calculation that equal Senate representation protected small-state interests better than any alternative.',
    significanceWeight: 97,
    lat: 39.1580,
    lng: -75.5250,
    town: { connect: { id: 'us-de-dover' } },
  },
  {
    id: 'event-dover-john-haslet-killed-princeton-1777',
    name: 'Colonel Haslet Killed at Princeton',
    startDate: new Date('1777-01-03'),
    datePrecision: 'DAY',
    summary:
      'Colonel John Haslet, commander of the Delaware regiment since its formation, was killed at Princeton on January 3, 1777. His death required Dover\'s government to organize new officer appointments and recruit additional men for a regiment that had already suffered heavily at Long Island.',
    significanceWeight: 74,
    lat: 40.3498,
    lng: -74.6590,
    town: { connect: { id: 'us-de-dover' } },
  },
  {
    id: 'event-dover-articles-confederation-delaware-1779',
    name: 'Delaware Ratifies Articles of Confederation',
    startDate: new Date('1779-02-01'),
    datePrecision: 'MONTH',
    summary:
      'Delaware ratified the Articles of Confederation after a prolonged dispute over western land claims. Delaware — which had no western territory — had insisted that large states surrender their claims to the national government first. Its position ultimately prevailed and became a precedent for the constitutional debates of 1787.',
    significanceWeight: 70,
    lat: 39.1579,
    lng: -75.5244,
    town: { connect: { id: 'us-de-dover' } },
  },
  {
    id: 'event-dover-camden-delaware-regiment-1780',
    name: 'Delaware Regiment Suffers Heavy Losses at Camden',
    startDate: new Date('1780-08-16'),
    datePrecision: 'DAY',
    summary:
      'The rebuilt Delaware Continental line suffered devastating losses at Camden, South Carolina. The Delaware regiment was one of the few American units that fought effectively before the army collapsed around them. The losses required another round of recruiting from Dover in the war\'s final years.',
    significanceWeight: 75,
    lat: 34.2556,
    lng: -80.6073,
    town: { connect: { id: 'us-de-dover' } },
  },
];

// ============================================================================
// DOVER — STORIES
// ============================================================================

export const doverStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-dover-rodney-ride',
    title: 'Fifty Miles Through a Thunderstorm',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-caesar-rodney' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Caesar Rodney left Dover on the evening of June 27, 1776, summoned by Thomas McKean: the independence vote was coming, Delaware's delegation was split — McKean yes, Read no — and without Rodney, Delaware would be deadlocked.

Fifty miles. Through a thunderstorm. He arrived at the State House still in his riding clothes, wearing the green silk scarf over the cancerous growth on his face.

He voted yes.

What Rodney understood was not complicated: the vote mattered, Delaware's vote mattered, and he was the only person who could cast it correctly. He had been managing the cancer for years and had made his calculations about the time he had left and what to do with it.

He served as President of Delaware 1778–1781, organizing the state's war effort from Dover while his health declined. He died in 1784, two years before the Constitutional Convention, never seeing the nation whose independence he had ridden through a thunderstorm to secure. His face appears on the Delaware quarter — the green scarf visible — which means more Americans have seen his portrait than know his name.`,
    tags: ['independence', 'Rodney', 'midnight ride', 'Continental Congress', 'Delaware'],
    town: { connect: { id: 'us-de-dover' } },
  },
  {
    id: 'story-dover-first-state',
    title: 'Why Delaware Moved First',
    storyType: 'MODERN_VOICE',
    narratorName: 'Public Historian',
    narratorRole: 'Delaware History Education Project',
    verificationStatus: 'VERIFIED',
    textVersion: `When people ask why Delaware ratified the Constitution first — unanimously, in five days — the answer isn't that Delaware was the most enthusiastic about the new government. The answer is that Delaware's leaders had made a cold calculation about their state's survival.

Delaware was tiny. Three counties. No western land to sell, no major port of its own, no manufacturing base. In any arrangement based on population or wealth, Delaware would be at the bottom.

But the Constitution included the Senate. Two senators per state regardless of size. Delaware with two senators would have exactly the same voice as Virginia. That structural protection was worth more than anything else on offer.

So when the convention assembled in Dover in December 1787, they weren't debating whether the Constitution was good — they were confirming a decision Delaware's delegates had already made in Philadelphia. The 30-0 vote reflected calculation, not enthusiasm.

The Senate's equal state representation has shaped American politics ever since. Delaware didn't just ratify first. It helped write the provision that made small states viable.`,
    tags: ['Constitution', 'ratification', 'first state', 'Senate', 'Delaware politics'],
    town: { connect: { id: 'us-de-dover' } },
  },
];

// ============================================================================
// DOVER — LESSON PLANS
// ============================================================================

export const doverLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-de-dover' } },
    title: 'Caesar Rodney\'s Ride: Delegation, Deadlock, and the July 2 Vote',
    gradeRange: '5-8',
    estimatedDuration: '2 class periods',
    summary:
      'Most students learn the Declaration was signed on July 4, but the actual independence vote happened on July 2 — and nearly did not include Delaware. This lesson uses Rodney\'s midnight ride as an entry point for examining how the Continental Congress worked, what delegation deadlocks meant, and why small-state representation mattered from the beginning.',
    lessonData: {
      objectives: [
        'Explain the difference between the July 2 independence vote and the July 4 signing',
        'Describe Continental Congress delegation voting structure',
        'Trace the chain of events leading to Rodney\'s ride and explain why it was decisive',
        'Analyze what Rodney\'s personal circumstances reveal about the stakes involved',
      ],
      essentialQuestions: [
        'What does it mean for a vote to be "unanimous" and why did that matter in 1776?',
        'When does one person\'s decision change history, and how do we recognize those moments?',
        'How did small-state interests shape the founding from the very beginning?',
      ],
      materials: [
        'Map: Delaware to Philadelphia, fifty-mile route',
        'McKean\'s letter summoning Rodney (July 1776)',
        'Rodney\'s July 4 letter describing his ride',
        'Continental Congress voting rules explainer',
        'Timeline: June 27 – July 4, 1776',
      ],
      activities: [
        { name: 'The Mechanics of the Vote', duration: '20 min', description: 'Students map the Delaware delegation deadlock (McKean yes / Read no / Rodney absent) and discuss what a non-counting Delaware vote would have meant.' },
        { name: 'Rodney\'s Decision', duration: '25 min', description: 'Students read Rodney\'s account and McKean\'s letter, then write a "decision log" from Rodney\'s perspective.' },
        { name: 'Counterfactual', duration: '20 min', description: 'Small groups construct a plausible scenario for a deadlocked Delaware vote and present their reasoning.' },
      ],
      assessment: 'Exit ticket: three sentences explaining (1) why Delaware\'s vote was deadlocked, (2) what Rodney did and why, and (3) what "first state" meant eleven years later.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.3: Identify key steps in a text\'s description of a process related to history',
        'CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author\'s point of view or purpose',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.2.6-8: Classify series of historical proposed causes in terms of their relative significance',
        'D2.His.5.6-8: Explain how and why perspectives of people have changed over time',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-de-dover' } },
    title: 'First State: Delaware and the Art of Constitutional Ratification',
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary:
      'Delaware\'s unanimous, five-day ratification in December 1787 reflects strategic thinking about the equal Senate representation Delaware\'s delegates had fought for in Philadelphia. Students examine the Constitutional Convention debates over representation, analyze the Framers\' correspondence, and evaluate what Delaware\'s experience reveals about how structural constitutional choices create long-term consequences.',
    lessonData: {
      objectives: [
        'Explain the Convention\'s representation debate and how the Connecticut Compromise resolved it',
        'Analyze Delaware\'s strategic position as a small state and how it shaped delegates\' instructions',
        'Evaluate long-term consequences of equal Senate representation for American politics',
        'Connect the founding-era small-state argument to contemporary debates about the Senate',
      ],
      essentialQuestions: [
        'When states negotiated the Constitution, were they protecting principles or interests — and does the distinction matter?',
        'How has equal Senate representation shaped American democracy over two centuries?',
        'What does Delaware\'s founding story tell us about how political structures get designed?',
      ],
      materials: [
        'Delaware delegates\' instructions (1787): no proportional representation',
        'Madison\'s notes on the Connecticut Compromise debates',
        'Article I, Section 3 of the Constitution',
        'George Read\'s Convention correspondence',
        'Contemporary data on Senate representation relative to population',
      ],
      activities: [
        { name: 'The Delaware Instructions', duration: '30 min', description: 'Students identify the key constraint in Delaware\'s delegate instructions and discuss whether this is a legitimate constitutional-convention negotiating position.' },
        { name: 'The Connecticut Compromise', duration: '35 min', description: 'Students map delegate positions from Madison\'s notes and evaluate whether the resulting compromise was principled or a political deal.' },
        { name: 'Two Centuries of Consequences', duration: '25 min', description: 'Students examine contemporary Senate representation data and evaluate what the founding-era solution has created over two centuries.' },
      ],
      assessment: 'Analytical essay (900-1200 words): "Evaluate whether Delaware\'s equal Senate representation argument was correct, and what the long-term consequences of their success have been."',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors for how they treat the same or similar topics',
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in several primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.4.9-12: Analyze complex and interacting factors that influenced the perspectives of people during different historical eras',
        'D2.Civ.1.9-12: Distinguish the powers and responsibilities of citizens, political parties, interest groups, and the media',
        'D2.Civ.5.9-12: Evaluate citizens\' and institutions\' effectiveness in addressing social and political problems',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// DOVER — ADDITIONAL LINKS
// ============================================================================

export const doverAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-de-wilmington',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason: 'Dover and Wilmington are Delaware\'s two most significant Revolutionary War towns, connected by the same state government, the Delaware Regiment, and political figures who moved between both.',
    weight: 88,
  },
  {
    toTownId: 'us-pa-philadelphia',
    linkType: 'SHARED_EVENT',
    reason: 'Caesar Rodney rode from Dover to Philadelphia to cast the decisive independence vote. Delaware\'s Constitutional Convention delegates traveled from Dover to Philadelphia. The two cities were inseparable in Delaware\'s Revolutionary story.',
    weight: 95,
  },
  {
    toTownId: 'us-nj-trenton',
    linkType: 'SHARED_EVENT',
    reason: 'The Delaware Regiment — organized from Dover — crossed the Delaware River with Washington and fought at Trenton in December 1776, participating in the attack that revived Patriot morale.',
    weight: 78,
  },
  {
    toTownId: 'us-sc-camden',
    linkType: 'SHARED_EVENT',
    reason: 'The rebuilt Delaware Continental line was devastated at Camden in August 1780. The connection between Dover\'s recruiting efforts and the Camden disaster illustrates Delaware\'s contribution to and losses in the southern campaign.',
    weight: 65,
  },
  {
    toTownId: 'us-md-annapolis',
    linkType: 'SHARED_THEME',
    reason: 'John Dickinson, a major Delaware figure near Dover, presided over the 1786 Annapolis Convention that led directly to the Constitutional Convention. The Annapolis-to-Philadelphia-to-Dover ratification chain is a core founding story.',
    weight: 72,
  },
];

// ============================================================================
// WILMINGTON, DE
// ============================================================================

export const wilmingtonDeTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Wilmington, Delaware, sits at the confluence of the Brandywine Creek and the Christina River, a few miles above where they empty into the Delaware River. That geography made it one of the most strategically important locations in the mid-Atlantic during the Revolutionary War — and the reason the largest land battle of the entire war in the northern theater was fought in its immediate hinterland.

On September 11, 1777, the Battle of Brandywine was fought at Chadd's Ford and the surrounding creek crossings, roughly ten miles northwest of Wilmington. The British army of approximately 17,000 men under General William Howe defeated Washington's 11,000-man Continental Army in the largest single-day engagement of the Revolutionary War in the north. Cornwallis's flanking column crossed the creek at unguarded fords, struck the American right wing, and drove it from the field. Washington's army retreated north and then west, eventually reaching Valley Forge. Philadelphia fell eleven days after Brandywine.

What makes Wilmington's story more complicated than a simple defeat narrative is what happened before and after the battle. In the weeks preceding Brandywine, Wilmington functioned as Washington's primary supply base for the campaign to defend Philadelphia. The town's mills — flour mills, paper mills, powder mills along the Brandywine — were essential to the Continental Army's logistics. The Brandywine's waterpower had been driving mills since Swedish settlers arrived in the 1630s, and by 1777 the valley was the most productive milling region in North America. When Howe captured Wilmington after Brandywine, he captured not just a town but a supply system.

The British occupation of Wilmington lasted from September 1777 until June 1778, when France's entry into the war forced Clinton to evacuate Philadelphia. During that period, the town served as a British base and hospital, with wounded soldiers treated in buildings that had weeks earlier been organizing supplies for the Continental cause. The occupation divided the town's Quaker community sharply: some Quakers had aided British scouts with local knowledge of creek crossings before the battle, while others quietly supported the Patriot cause in ways short of bearing arms. Both groups faced community discipline from their monthly meetings.

After the British evacuation, the Brandywine mills resumed supply operations through Yorktown. The du Pont family — arriving in 1802 — built on this milling tradition, but the Revolutionary-era industrial base was already in place before independence was won. Wilmington's Swedish and Finnish settler heritage, dating to 1638, gave it nearly 140 years of accumulated community infrastructure by 1777, making it genuinely valuable as a supply point rather than merely convenient geographically.`,
};

// ============================================================================
// WILMINGTON, DE — PEOPLE
// ============================================================================

export const wilmingtonDePeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-william-howe',
      name: 'General Sir William Howe',
      roles: ['British Commander-in-Chief in North America', 'Brandywine Campaign Commander'],
      bioShort:
        'British general who commanded the Philadelphia Campaign of 1777, defeating Washington at Brandywine and capturing both Wilmington and Philadelphia. His approach via the Chesapeake rather than overland succeeded in taking the capital but failed to destroy the Continental Army.',
      birthYear: 1729,
      deathYear: 1814,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Commanded the British force that captured Wilmington after Brandywine in September 1777 and occupied it through June 1778.',
  },
  {
    person: {
      id: 'person-cornwallis-brandywine',
      name: 'Lord Charles Cornwallis',
      roles: ['British General', 'Brandywine Flanking Column Commander'],
      bioShort:
        'British general who led the decisive flanking column at Brandywine — crossing the creek at unmarked northern fords to strike the American right. His attack collapsed the American right wing and turned the battle into a British victory. He later surrendered at Yorktown in 1781.',
      birthYear: 1738,
      deathYear: 1805,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Led the flanking movement at Brandywine that directly resulted in Howe\'s capture of Wilmington and Philadelphia.',
  },
  {
    person: {
      id: 'person-nathanael-greene-brandywine',
      name: 'Nathanael Greene',
      roles: ['Continental Army General', 'Brandywine Division Commander'],
      bioShort:
        'Rhode Island general who executed a disciplined retreat at Brandywine that prevented the British from destroying Washington\'s army. Moving four miles in forty-five minutes to cover the collapsing American right was one of the most impressive tactical performances of the war.',
      birthYear: 1742,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'His controlled retreat at Brandywine preserved the Continental Army from destruction after the British captured Wilmington.',
  },
  {
    person: {
      id: 'person-lafayette-brandywine',
      name: 'Marquis de Lafayette',
      roles: ['French Volunteer Officer', 'Continental Army General'],
      bioShort:
        'French nobleman wounded in the leg at Brandywine on September 11, 1777 — his first battle — while rallying retreating troops. Treated in the Wilmington area before recovering to fight at Monmouth. His dedication to the American cause helped secure French alliance support.',
      birthYear: 1757,
      deathYear: 1834,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Wounded at Brandywine in his first battle; treated near Wilmington during recovery.',
  },
  {
    person: {
      id: 'person-anthony-wayne-brandywine',
      name: 'Brigadier General Anthony Wayne',
      roles: ['Continental Army General', 'Pennsylvania Line Commander'],
      bioShort:
        'Pennsylvania Continental officer who commanded the front-line defense at Chadd\'s Ford during Brandywine. Later led the Pennsylvania Line at Valley Forge and the successful assault on Stony Point (1779). Known as "Mad Anthony" for his aggressive style.',
      birthYear: 1745,
      deathYear: 1796,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Commanded the American front at Chadd\'s Ford during Brandywine, the battle that led to Wilmington\'s capture.',
  },
  {
    person: {
      id: 'person-john-sullivan-brandywine',
      name: 'Major General John Sullivan',
      roles: ['Continental Army General', 'American Right Wing Commander at Brandywine'],
      bioShort:
        'New Hampshire general whose forces bore the brunt of Cornwallis\'s flanking attack at Brandywine and collapsed under pressure. Blamed for the defeat but continued to serve through 1779, leading the Sullivan-Clinton campaign against Iroquois territory.',
      birthYear: 1740,
      deathYear: 1795,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Commanded the American right at Brandywine; his collapse under the British flank directly resulted in the British capture of Wilmington.',
  },
  {
    person: {
      id: 'person-george-washington-brandywine',
      name: 'General George Washington',
      roles: ['Commander-in-Chief, Continental Army', 'First President of the United States'],
      bioShort:
        'Commander who chose to defend Philadelphia by fighting at Brandywine Creek. Intelligence failures about northern fords left the American right exposed. His army survived the defeat intact enough to fight at Germantown three weeks later and reach Valley Forge.',
      birthYear: 1732,
      deathYear: 1799,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Commanded at Brandywine; his defeat led directly to the British occupation of Wilmington and Philadelphia.',
  },
  {
    person: {
      id: 'person-jacob-broom',
      name: 'Jacob Broom',
      roles: ['Delaware Delegate to Constitutional Convention', 'Wilmington Civic Leader', 'Surveyor'],
      bioShort:
        'Wilmington surveyor and businessman, one of Delaware\'s five delegates to the 1787 Constitutional Convention. The only Wilmington-based delegate, Broom signed the Constitution and later served in various local civic roles, helping establish Wilmington\'s early infrastructure.',
      birthYear: 1752,
      deathYear: 1810,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Wilmington\'s own Constitutional Convention delegate; central to the town\'s civic life during and after the Revolutionary period.',
  },
];

// ============================================================================
// WILMINGTON, DE — PLACES
// ============================================================================

export const wilmingtonDePlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-wilmington-fort-christina',
    name: 'Fort Christina Monument',
    placeType: 'MONUMENT',
    description:
      'The site of the original 1638 Swedish colonial settlement on the Christina River — the oldest permanent European settlement in the Delaware Valley. By the Revolutionary period this area was part of established Wilmington. The monument (a 1938 gift from Sweden) marks the Kalmar Nyckel landing site. Nearly 140 years of settlement by 1777 gave Wilmington its established infrastructure.',
    lat: 39.7362,
    lng: -75.5483,
    address: 'East 7th Street, Wilmington, DE 19801',
    town: { connect: { id: 'us-de-wilmington' } },
  },
  {
    id: 'place-wilmington-brandywine-battlefield',
    name: 'Brandywine Battlefield Park',
    placeType: 'BATTLEFIELD',
    description:
      'The site of the September 11, 1777 Battle of Brandywine — the largest land battle of the Revolutionary War — approximately ten miles northwest of Wilmington. The park preserves the Birmingham Hill area where Cornwallis\'s flanking force struck the American right, Washington\'s headquarters building, and Lafayette\'s quarters.',
    lat: 39.8595,
    lng: -75.5907,
    address: '1491 Baltimore Pike, Chadds Ford, PA 19317',
    town: { connect: { id: 'us-de-wilmington' } },
  },
  {
    id: 'place-wilmington-old-town-hall',
    name: 'Old Town Hall, Wilmington',
    placeType: 'GOVERNMENT',
    description:
      'Built in 1798 near earlier civic structures, Wilmington\'s Old Town Hall is now a museum operated by the Historical Society of Delaware. The building stands near where Wilmington\'s colonial-era civic life centered during the Revolutionary period. During the 1777–1778 British occupation, the area served British administrative purposes.',
    lat: 39.7456,
    lng: -75.5477,
    address: '512 Market St, Wilmington, DE 19801',
    town: { connect: { id: 'us-de-wilmington' } },
  },
  {
    id: 'place-wilmington-brandywine-creek-state-park',
    name: 'Brandywine Creek State Park',
    placeType: 'TRAIL',
    description:
      'The Brandywine Creek corridor north of Wilmington preserves the waterway whose mills powered the region\'s economy during the Revolution. The creek\'s current drove flour, paper, and powder mills essential to Continental Army supply. Walking the trail follows the same waterway that made Wilmington strategically indispensable to both sides in 1777.',
    lat: 39.7990,
    lng: -75.5750,
    address: 'Adams Dam Rd, Wilmington, DE 19807',
    town: { connect: { id: 'us-de-wilmington' } },
  },
  {
    id: 'place-wilmington-historical-society-delaware',
    name: 'Historical Society of Delaware',
    placeType: 'MUSEUM',
    description:
      'Primary repository for Delaware historical materials including Wilmington\'s Revolutionary War records: British occupation documents, mill records, Quaker meeting minutes, and personal correspondence from the Brandywine Campaign era.',
    lat: 39.7459,
    lng: -75.5475,
    address: '505 Market St, Wilmington, DE 19801',
    town: { connect: { id: 'us-de-wilmington' } },
  },
  {
    id: 'place-wilmington-holy-trinity-church',
    name: 'Old Swedes Church (Holy Trinity)',
    placeType: 'CHURCH',
    description:
      'Built in 1698, Old Swedes Church is the oldest surviving church building in continuous use in North America. It served the Swedish-descent community of Wilmington through the Revolutionary period. During the 1777–1778 British occupation, the congregation navigated competing demands of occupying forces and community loyalty.',
    lat: 39.7357,
    lng: -75.5484,
    address: '606 Church St, Wilmington, DE 19801',
    town: { connect: { id: 'us-de-wilmington' } },
  },
];

// ============================================================================
// WILMINGTON, DE — EVENTS
// ============================================================================

export const wilmingtonDeEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-wilmington-brandywine-1777',
    name: 'Battle of Brandywine',
    startDate: new Date('1777-09-11'),
    datePrecision: 'DAY',
    summary:
      'The largest single-day land battle of the Revolutionary War in the northern theater, fought approximately ten miles northwest of Wilmington. Howe divided his force: a frontal demonstration at Chadd\'s Ford held Washington\'s attention while Cornwallis led 8,000 men on a flanking march to unguarded northern fords. The flanking column struck the American right under Sullivan and drove it from the field. Greene\'s disciplined retreat prevented catastrophe. American casualties: approximately 1,300 killed, wounded, and captured.',
    significanceWeight: 97,
    lat: 39.8595,
    lng: -75.5907,
    town: { connect: { id: 'us-de-wilmington' } },
  },
  {
    id: 'event-wilmington-british-capture-1777',
    name: 'British Forces Capture Wilmington',
    startDate: new Date('1777-09-13'),
    datePrecision: 'DAY',
    summary:
      'Two days after Brandywine, British forces occupied Wilmington without resistance. The town became a base hospital for Brandywine casualties, a supply depot, and an administrative center. Delaware\'s government fled northward. The occupation transformed Wilmington overnight from Continental supply base to British stronghold.',
    significanceWeight: 88,
    lat: 39.7456,
    lng: -75.5477,
    town: { connect: { id: 'us-de-wilmington' } },
  },
  {
    id: 'event-wilmington-howe-chesapeake-landing-1777',
    name: 'Howe\'s Army Lands at Head of Elk',
    startDate: new Date('1777-08-25'),
    datePrecision: 'DAY',
    summary:
      'British General Howe landed approximately 17,000 men at Head of Elk (modern Elkton, MD) after a miserable six-week sea voyage from New York. The army needed time to recover before marching on Philadelphia. This landing set the stage for the Brandywine Campaign and Wilmington\'s capture.',
    significanceWeight: 80,
    lat: 39.6068,
    lng: -75.8330,
    town: { connect: { id: 'us-de-wilmington' } },
  },
  {
    id: 'event-wilmington-washington-supply-base-1777',
    name: 'Washington Uses Wilmington as Campaign Supply Base',
    startDate: new Date('1777-08-01'),
    datePrecision: 'MONTH',
    summary:
      'In the weeks before Brandywine, Washington positioned Wilmington as his primary supply and logistics base. The Brandywine mills — producing flour, gunpowder, and paper — provided essential Continental Army materiel. Wilmington\'s position at the confluence of the Brandywine and Christina Rivers, with Delaware River access, made it ideal for receiving and distributing supplies.',
    significanceWeight: 82,
    lat: 39.7456,
    lng: -75.5477,
    town: { connect: { id: 'us-de-wilmington' } },
  },
  {
    id: 'event-wilmington-quaker-guides-brandywine',
    name: 'Local Knowledge and the Brandywine Flanking Route',
    startDate: new Date('1777-09-11'),
    datePrecision: 'DAY',
    summary:
      'British scouts reconnoitering before Brandywine received intelligence from Loyalist sympathizers — including some Quaker farmers familiar with the creek\'s crossings — about unguarded northern fords. This intelligence enabled Cornwallis\'s decisive flanking movement and became a lasting source of controversy in the Delaware Valley.',
    significanceWeight: 78,
    lat: 39.8595,
    lng: -75.5907,
    town: { connect: { id: 'us-de-wilmington' } },
  },
  {
    id: 'event-wilmington-lafayette-wounded-1777',
    name: 'Lafayette Wounded at Brandywine',
    startDate: new Date('1777-09-11'),
    datePrecision: 'DAY',
    summary:
      'The nineteen-year-old Lafayette was wounded in the leg while attempting to rally retreating American troops after the collapse of the right wing. He was taken for treatment to a field hospital in the Wilmington area. His conduct at Brandywine impressed Washington and cemented a friendship lasting until Washington\'s death.',
    significanceWeight: 76,
    lat: 39.8595,
    lng: -75.5907,
    town: { connect: { id: 'us-de-wilmington' } },
  },
  {
    id: 'event-wilmington-battle-germantown-1777',
    name: 'American Counterattack at Germantown',
    startDate: new Date('1777-10-04'),
    datePrecision: 'DAY',
    summary:
      'Three weeks after Brandywine, Washington attacked the British encampment at Germantown. The assault failed — confused columns fired on each other in morning fog — but demonstrated the Continental Army could still mount coordinated offensives and prevented the British from safely extending their lines beyond Philadelphia and Wilmington.',
    significanceWeight: 75,
    lat: 40.0501,
    lng: -75.1707,
    town: { connect: { id: 'us-de-wilmington' } },
  },
  {
    id: 'event-wilmington-british-evacuation-1778',
    name: 'British Evacuate Wilmington and Philadelphia',
    startDate: new Date('1778-06-18'),
    datePrecision: 'DAY',
    summary:
      'France\'s entry into the war following Saratoga changed the British strategic situation fundamentally. General Clinton was ordered to evacuate Philadelphia and concentrate in New York. Wilmington was abandoned as part of this withdrawal, reverting to American control. The evacuation triggered the march that led to the Battle of Monmouth.',
    significanceWeight: 83,
    lat: 39.7456,
    lng: -75.5477,
    town: { connect: { id: 'us-de-wilmington' } },
  },
  {
    id: 'event-wilmington-brandywine-mills-resume-1778',
    name: 'Brandywine Mills Resume Continental Supply',
    startDate: new Date('1778-07-01'),
    datePrecision: 'MONTH',
    summary:
      'Following the British evacuation, the Brandywine mills north of Wilmington resumed supplying the Continental Army. They had operated under British supervision during the occupation; their return to Patriot use restored an essential logistical resource that continued through the end of the war.',
    significanceWeight: 70,
    lat: 39.7990,
    lng: -75.5750,
    town: { connect: { id: 'us-de-wilmington' } },
  },
  {
    id: 'event-wilmington-de-ratification-context-1787',
    name: 'Wilmington\'s Role in Delaware Constitutional Ratification',
    startDate: new Date('1787-12-07'),
    datePrecision: 'DAY',
    summary:
      'While the ratification convention formally met in Dover, Jacob Broom — Wilmington\'s own Constitutional Convention delegate — was central to Delaware\'s rapid ratification. Wilmington\'s commercial community understood that a stronger federal government protecting interstate commerce and Delaware River navigation rights would benefit its port economy.',
    significanceWeight: 72,
    lat: 39.7456,
    lng: -75.5477,
    town: { connect: { id: 'us-de-wilmington' } },
  },
];

// ============================================================================
// WILMINGTON, DE — STORIES
// ============================================================================

export const wilmingtonDeStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-wilmington-de-brandywine-mills',
    title: 'The Mills That Fed the Army',
    storyType: 'MODERN_VOICE',
    narratorName: 'Public Historian',
    narratorRole: 'Brandywine Valley Heritage Program',
    verificationStatus: 'VERIFIED',
    textVersion: `When we talk about Brandywine, we talk about the battle — the flanking movement, the American retreat. What we rarely discuss is why the British needed to take this particular ground.

The Brandywine Creek above Wilmington was the most productive milling corridor in North America in 1777. When Washington positioned his army there, he was defending not just the road to Philadelphia but his supply system: the flour, powder, and paper mills that fed and armed the Continental Army. When Howe captured Wilmington after Brandywine, he captured the mills too. Nine months of British supervision. When Clinton evacuated in June 1778, they went back to the Continental Army.

The du Pont family arrived in 1802 and found industrial infrastructure refined over a century. The Brandywine Valley's industrial story began with the Revolution, not after it.`,
    tags: ['Brandywine', 'mills', 'supply', 'industry', 'Wilmington'],
    town: { connect: { id: 'us-de-wilmington' } },
  },
  {
    id: 'story-wilmington-de-quaker-divided',
    title: 'When Neutrality Failed',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-jacob-broom' } },
    verificationStatus: 'ANECDOTAL',
    textVersion: `The Quaker community of the Brandywine Valley believed in neutrality. What the Revolution taught them was that neutrality, in a civil war, is itself a choice, and both sides will hold you accountable for it.

Some Friends provided directions to British scouts before Brandywine, helping Cornwallis find the unguarded fords — whether from Loyalist conviction or simply from the Quaker practice of not refusing a civil request is unclear. Other Friends quietly supported the Patriot cause and were disowned by their monthly meetings for giving "aid and comfort" to combatants. The meetings couldn't distinguish supporting a just cause from participating in violence.

Once both sides started holding Quakers accountable, neutrality became impossible. Wilmington after the Revolution had a different Quaker community than it had before. Families had split. Meetings had expelled members. The physical town was intact. The social fabric was not.`,
    tags: ['Quakers', 'neutrality', 'Brandywine', 'community', 'loyalty', 'Wilmington'],
    town: { connect: { id: 'us-de-wilmington' } },
  },
];

// ============================================================================
// WILMINGTON, DE — LESSON PLANS
// ============================================================================

export const wilmingtonDeLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-de-wilmington' } },
    title: 'Brandywine 1777: The Battle That Opened Philadelphia',
    gradeRange: '6-9',
    estimatedDuration: '2-3 class periods',
    summary:
      'The Battle of Brandywine on September 11, 1777 was the largest land battle of the Revolutionary War in the northern theater — yet less known than Lexington, Bunker Hill, or Valley Forge. This lesson uses Brandywine as a case study in military decision-making under uncertainty: why did Washington fight there, why did the British flanking movement succeed, and what does the battle reveal about intelligence failure, fog of war, and the strategic importance of Wilmington\'s milling infrastructure?',
    lessonData: {
      objectives: [
        'Explain why Washington chose to defend the Brandywine crossing and what he was protecting',
        'Trace the British flanking movement and explain why American intelligence failed to detect it',
        'Analyze the battle\'s immediate consequences for Wilmington and Philadelphia',
        'Evaluate the role of local knowledge (the Quaker guides) in the battle\'s outcome',
      ],
      essentialQuestions: [
        'What is "intelligence failure" and how does it affect military decisions?',
        'When a battle is lost, who bears responsibility — the commander, the information systems, the soldiers?',
        'What does Brandywine reveal about the relationship between industrial infrastructure and military power?',
      ],
      materials: [
        'Topographic map: Brandywine Creek fords and American positions',
        'Simplified order of battle for Brandywine',
        'Washington\'s after-action correspondence (excerpt)',
        'Lafayette\'s account of his wounding (translated)',
        'Timeline: Howe\'s landing to Wilmington occupation (Aug 25 – Sep 13, 1777)',
      ],
      activities: [
        { name: 'Why Fight Here?', duration: '25 min', description: 'Students map the Brandywine-to-Philadelphia corridor and assess the defensive line\'s advantages and vulnerabilities given what Washington knew.' },
        { name: 'The Intelligence Failure', duration: '30 min', description: 'Students trace how British scouts found the northern fords and evaluate whether the outcome was an intelligence failure, a command failure, or both.' },
        { name: 'The Mills: Why Wilmington Mattered', duration: '20 min', description: 'Students draw a supply chain diagram connecting the Brandywine mills to Continental Army units and discuss what the army lost when Wilmington fell.' },
      ],
      assessment: 'Short-answer (2-3 paragraphs): "The British captured Wilmington two days after Brandywine. Explain two reasons why it was strategically important to both sides, and what changed when it fell."',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information with other information in print and digital texts',
        'CCSS.ELA-LITERACY.RH.6-8.9: Analyze the relationship between a primary and secondary source on the same topic',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.2.6-8: Classify series of historical proposed causes in terms of their relative significance',
        'D2.Geo.2.6-8: Use maps and geographic representations to explain relationships between people, places, and environments',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-de-wilmington' } },
    title: 'Neutrality Under Pressure: Quakers, War, and the Brandywine Community',
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary:
      'The Brandywine Valley\'s Quaker community faced an impossible situation during the 1777–1778 British occupation: their faith required neutrality, but both occupying forces and Patriot neighbors demanded active allegiance. This lesson uses the Quaker experience around Wilmington as a lens for examining conscience, community, and the limits of principled neutrality during civil conflict.',
    lessonData: {
      objectives: [
        'Explain the Quaker theological basis for pacifism and neutrality',
        'Analyze the specific pressures the Brandywine occupation placed on Quaker neutrality',
        'Evaluate the Quaker community\'s response to disownment proceedings for war participation',
        'Assess what the Brandywine Quaker experience reveals about the limits of principled neutrality',
      ],
      essentialQuestions: [
        'Is neutrality possible in a civil war, and what are its moral costs?',
        'How does a religious community maintain its principles when the political world demands a choice?',
        'What is the difference between conscience and complicity, and who gets to draw that line?',
      ],
      materials: [
        'Philadelphia Yearly Meeting disownment minutes (1776–1778)',
        'Account of Quaker guides at Brandywine and subsequent controversy',
        'Adapted first-person account of a Quaker farmer under occupation',
        'Comparison: Quaker conscientious objection in the Revolution vs. WWI vs. Vietnam',
        'Map of Brandywine Valley Quaker meeting locations',
      ],
      activities: [
        { name: 'The Quaker Position', duration: '30 min', description: 'Students map the Quaker neutrality position on a compliance spectrum and discuss what a neutral Quaker would actually do during the Wilmington occupation.' },
        { name: 'The Guides Controversy', duration: '35 min', description: 'Students analyze whether providing directions to British scouts violated Quaker neutrality, examine disownment proceedings, and conduct a Socratic seminar on the distinction.' },
        { name: 'Conscience and Consequence', duration: '25 min', description: 'Students examine three Quaker meeting record cases with different outcomes and analyze the principles or inconsistencies behind each.' },
      ],
      assessment: 'Analytical essay (1000-1200 words): "Argue whether principled neutrality is possible in a civil conflict, using the Brandywine Valley Quaker experience as primary evidence. Engage with the strongest counterargument."',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors for how they treat the same or similar topics',
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in several primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.4.9-12: Analyze complex and interacting factors that influenced the perspectives of people during different historical eras',
        'D2.Civ.1.9-12: Distinguish the powers and responsibilities of citizens, political parties, interest groups, and the media',
        'D2.His.9.9-12: Analyze the relationship between historical sources and the secondary interpretations made from them',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// WILMINGTON, DE — ADDITIONAL LINKS
// ============================================================================

export const wilmingtonDeAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-de-dover',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason: 'Wilmington and Dover are Delaware\'s two principal Revolutionary War towns, connected by the same state government, the Delaware Regiment, and key political figures who moved between both.',
    weight: 88,
  },
  {
    toTownId: 'us-pa-philadelphia',
    linkType: 'SHARED_EVENT',
    reason: 'The Brandywine Campaign was fought to defend Philadelphia. Wilmington fell before Philadelphia did; both were occupied by the British from September 1777 through June 1778, their fates inseparable during the campaign.',
    weight: 95,
  },
  {
    toTownId: 'us-pa-valley-forge',
    linkType: 'SHARED_EVENT',
    reason: 'Washington\'s army retreated from Brandywine toward Valley Forge. The loss of Wilmington\'s Brandywine mills contributed directly to the supply crisis Valley Forge became famous for.',
    weight: 85,
  },
  {
    toTownId: 'us-pa-chadds-ford',
    linkType: 'SHARED_EVENT',
    reason: 'The Battle of Brandywine was fought at Chadd\'s Ford — the primary creek crossing and the site of the battle\'s central action. Wilmington\'s capture was the direct consequence of the Chadd\'s Ford engagement.',
    weight: 92,
  },
  {
    toTownId: 'us-nj-monmouth',
    linkType: 'SHARED_PERSON',
    reason: 'The British evacuation of Wilmington and Philadelphia in June 1778 — triggered by French entry into the war — led directly to the Battle of Monmouth as Clinton\'s army marched overland. Lafayette, wounded near Wilmington at Brandywine, fought at Monmouth.',
    weight: 70,
  },
];
