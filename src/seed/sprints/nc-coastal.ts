// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// NC Coastal: 2 North Carolina Revolutionary War towns
// Campaign: Southern Campaign & Cape Fear Region, 1775–1781

import { Prisma } from '@prisma/client';

/**
 * NC Coastal — New Bern and Wilmington, North Carolina
 *
 * New Bern: colonial capital of North Carolina, seat of royal governor
 * William Tryon's palace, and the flashpoint for early Patriot resistance
 * after the 1771 Battle of Alamance crushed the Regulator movement.
 *
 * Wilmington (NC): the only deep-water port in North Carolina, gateway to
 * the Cape Fear region, occupied by Cornwallis in 1781 as he prepared
 * his ill-fated march into Virginia.
 *
 * NOTE ON VERIFICATION: Historical content synthesized from Hugh Rankin's
 * "The North Carolina Continentals," Lindley Butler and Alan Watson's
 * "The North Carolina Experience," the Colonial Records of North Carolina,
 * NPS documentation for Moore's Creek National Battlefield, and the North
 * Carolina State Archives. Stories marked VERIFIED have strong documentary
 * evidence.
 */

// ============================================================================
// NEW BERN
// ============================================================================

export const newBernTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `New Bern in 1775 was the most important town in North Carolina. It was the colonial capital, home to Tryon Palace — the most elaborate government building in British North America south of Williamsburg — and the seat of the royal governor's power. When the Revolution came to North Carolina, it came first to New Bern.

The story begins with the Regulator movement of the late 1760s and early 1770s. Western North Carolina farmers, suffocating under corrupt local officials who extracted illegal fees, formed an extralegal movement called the Regulators and demanded accountability from a colonial government based in New Bern. Governor William Tryon responded by leading an army of eastern militiamen westward to Alamance Creek, where on May 16, 1771, he crushed the Regulators in a battle that killed several men outright and led to the execution of six more. Tryon's palace — built 1767–1771 at enormous expense, partly from taxes the Regulators had refused to pay — stood as a physical symbol of what eastern gentry power looked like to the backcountry poor.

When Tryon left for New York in 1771, his successor Josiah Martin inherited the palace and the resentments. Martin proved unable to read the colony's shifting mood. As Patriot committees organized across North Carolina in 1774 and 1775, Martin threatened, cajoled, and finally fled in the spring of 1775. He abandoned New Bern and took refuge on a British warship in the Cape Fear River — the last royal governor of North Carolina to exercise any real authority.

The Patriots who took control of New Bern faced an immediate problem: a large Loyalist population, particularly among Scottish Highland settlers in the Cape Fear valley who had sworn oaths to the Crown on arrival in America. In February 1776, a Loyalist army of approximately 1,500 Highlanders marched toward Wilmington expecting to link up with a British fleet. They never made it. At Moore's Creek Bridge, twenty miles north of Wilmington, a Patriot force of roughly 1,000 men ambushed the Loyalists crossing the bridge, killing or capturing most of them in a battle lasting roughly three minutes. Moore's Creek ended Loyalist military power in North Carolina for the rest of the war and prompted the British to abandon their planned southern invasion of 1776.

New Bern's significance extends beyond these events. The town hosted North Carolina's Provincial Congresses, the bodies that governed the colony as royal authority collapsed. It was here that North Carolina's delegates were empowered to vote for independence in the Continental Congress. And it was here that Cornelius Harnett — one of the most capable Patriot organizers in the south — built the administrative infrastructure that kept North Carolina functioning as a state through the war's grinding southern campaign.

The British never occupied New Bern, which is itself historically significant. The town functioned as a rear-area base throughout the conflict, supplying Continental forces in the south without suffering the destruction that hit Charleston, Camden, and later Wilmington NC. That relative security made it more valuable, not less: a working government and supply system were what Greene's threadbare army needed as it fought its way through the Carolina backcountry in 1780 and 1781.`,
};

// ============================================================================
// NEW BERN — PEOPLE
// ============================================================================

export const newBernPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-josiah-martin',
      name: 'Governor Josiah Martin',
      roles: ['Royal Governor of North Carolina', 'British Military Officer'],
      bioShort:
        'Last royal governor of North Carolina, who fled New Bern in May 1775 and took refuge aboard HMS Cruizer in the Cape Fear River. His attempts to organize a Loyalist uprising culminated in the disastrous Highland Tory march that ended at Moore\'s Creek Bridge in February 1776.',
      birthYear: 1737,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Governed North Carolina from Tryon Palace in New Bern until his flight in 1775; his departure ended royal government in the colony.',
  },
  {
    person: {
      id: 'person-william-tryon',
      name: 'Governor William Tryon',
      roles: ['Royal Governor of North Carolina', 'Royal Governor of New York', 'British General'],
      bioShort:
        'Royal governor who built Tryon Palace in New Bern at enormous colonial expense and crushed the Regulator movement at Alamance in 1771. His heavy-handed rule deepened the colonial resentments that would fuel the Revolution. Left for New York governorship in 1771.',
      birthYear: 1729,
      deathYear: 1788,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Built Tryon Palace in New Bern and governed North Carolina 1765–1771; his policies generated the grievances that shaped the colony\'s Revolutionary politics.',
  },
  {
    person: {
      id: 'person-cornelius-harnett',
      name: 'Cornelius Harnett',
      roles: ['Continental Congress Delegate', 'North Carolina Patriot Leader', 'Provincial Congress President'],
      bioShort:
        'New Bern-area planter and politician who organized North Carolina\'s Patriot resistance from 1765 onward. Led the Sons of Liberty in opposing the Stamp Act, presided over North Carolina\'s Provincial Congresses, and served in the Continental Congress. Captured by the British in 1781 and died in captivity.',
      birthYear: 1723,
      deathYear: 1781,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'New Bern\'s pre-eminent Patriot leader, who built the resistance infrastructure from the Stamp Act crisis through the war\'s southern campaign.',
  },
  {
    person: {
      id: 'person-richard-caswell',
      name: 'Richard Caswell',
      roles: ['Continental Army Officer', 'First Governor of North Carolina', 'Moore\'s Creek Commander'],
      bioShort:
        'North Carolina militia and Continental officer who co-commanded Patriot forces at Moore\'s Creek Bridge in February 1776. His victory ended Loyalist military power in North Carolina. Served as North Carolina\'s first elected governor under the state constitution, 1776–1780.',
      birthYear: 1729,
      deathYear: 1789,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Led Patriot forces at Moore\'s Creek Bridge, connecting New Bern\'s political leadership to the decisive military victory that secured the Cape Fear region.',
  },
  {
    person: {
      id: 'person-james-moore-nc',
      name: 'Colonel James Moore',
      roles: ['Continental Army Officer', 'Moore\'s Creek Campaign Commander'],
      bioShort:
        'North Carolina Continental colonel who organized and commanded the overall Patriot response to the Loyalist march in early 1776. Coordinated militia and Continental forces to intercept the Highland Tories before they could reach the coast. Died of illness in April 1777 before the southern campaign reached its crisis.',
      birthYear: 1737,
      deathYear: 1777,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Organized the Patriot interception of the Loyalist march from his base in New Bern, executing the strategic plan that led to Moore\'s Creek.',
  },
  {
    person: {
      id: 'person-samuel-ashe',
      name: 'Samuel Ashe',
      roles: ['North Carolina Superior Court Judge', 'Governor of North Carolina', 'Patriot Leader'],
      bioShort:
        'North Carolina jurist and Patriot leader who served in the colony\'s Provincial Congress and helped craft the legal framework for state governance. Later served as governor 1795–1798 and helped stabilize North Carolina\'s postwar legal institutions.',
      birthYear: 1725,
      deathYear: 1813,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'New Bern-connected jurist central to building North Carolina\'s Revolutionary governmental structure in the town that remained the state\'s administrative hub.',
  },
  {
    person: {
      id: 'person-abner-nash',
      name: 'Abner Nash',
      roles: ['Governor of North Carolina', 'Continental Congress Delegate', 'State Legislator'],
      bioShort:
        'North Carolina governor 1780–1781 during the most desperate phase of the southern campaign. Struggled to supply Greene\'s army and maintain state government as the British occupied the coast and Cornwallis ravaged the interior. Based his operations partly from New Bern during the crisis.',
      birthYear: 1740,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Governed North Carolina from New Bern\'s administrative orbit during the most critical phase of the war, trying to keep the state functioning while the south burned.',
  },
  {
    person: {
      id: 'person-flora-macdonald',
      name: 'Flora MacDonald',
      roles: ['Scottish Loyalist Leader', 'Highlander Community Figure'],
      bioShort:
        'Scottish Highlander who had famously helped Bonnie Prince Charlie escape after Culloden in 1746. Emigrated to North Carolina\'s Cape Fear valley in 1774. Her husband Allan commanded a Loyalist regiment at Moore\'s Creek Bridge. Returned to Scotland after the Loyalist defeat; her presence illustrates the Highland community\'s divided loyalties.',
      birthYear: 1722,
      deathYear: 1790,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Symbol of the Highland Loyalist community whose march toward Wilmington was crushed at Moore\'s Creek; her story connects New Bern\'s political moment to the Cape Fear Highlanders.',
  },
];

// ============================================================================
// NEW BERN — PLACES
// ============================================================================

export const newBernPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-new-bern-tryon-palace',
    name: 'Tryon Palace',
    placeType: 'GOVERNMENT',
    description:
      'The reconstructed colonial governor\'s palace, originally built 1767–1771 under Governor William Tryon at enormous public expense — partly funded by taxes that helped spark the Regulator movement. The original burned in 1798; the current reconstruction (opened 1959) is based on original architect John Hawks\'s drawings. Served as the seat of royal government until Governor Martin fled in 1775.',
    lat: 35.1077,
    lng: -77.0434,
    address: '610 Pollock St, New Bern, NC 28562',
    town: { connect: { id: 'us-nc-new-bern' } },
  },
  {
    id: 'place-new-bern-christ-church',
    name: 'Christ Episcopal Church',
    placeType: 'CHURCH',
    description:
      'New Bern\'s oldest congregation, established 1715. The current building dates to 1875, but the church served the colonial capital community through the Revolution. Royal governors worshipped here; Patriot leaders met in its shadow. The churchyard contains graves of Revolutionary-era residents and colonial officials.',
    lat: 35.1074,
    lng: -77.0449,
    address: '320 Pollock St, New Bern, NC 28562',
    town: { connect: { id: 'us-nc-new-bern' } },
  },
  {
    id: 'place-new-bern-moores-creek-battlefield',
    name: 'Moore\'s Creek National Battlefield',
    placeType: 'BATTLEFIELD',
    description:
      'Site of the February 27, 1776 Patriot ambush that destroyed the Loyalist Highland Tory army in roughly three minutes of fighting. The Patriot forces removed planks from the bridge and greased the stringers; Highlanders attempting to charge across were cut down. The victory ended Loyalist military power in North Carolina and derailed a planned British southern invasion.',
    lat: 34.4596,
    lng: -78.1252,
    address: '40 Patriots Hall Dr, Currie, NC 28435',
    town: { connect: { id: 'us-nc-new-bern' } },
  },
  {
    id: 'place-new-bern-nc-history-center',
    name: 'North Carolina History Center',
    placeType: 'MUSEUM',
    description:
      'Adjacent to Tryon Palace, the History Center holds the primary documentary collections for New Bern\'s colonial and Revolutionary history: Governor Martin\'s correspondence, Provincial Congress records, and the Colonial Records of North Carolina. Opened in 2010 as the research and exhibition center for the Tryon Palace complex.',
    lat: 35.1075,
    lng: -77.0415,
    address: '1 Tryon Palace Dr, New Bern, NC 28562',
    town: { connect: { id: 'us-nc-new-bern' } },
  },
  {
    id: 'place-new-bern-cedar-grove-cemetery',
    name: 'Cedar Grove Cemetery',
    placeType: 'CEMETERY',
    description:
      'New Bern\'s historic municipal cemetery, established 1800 on land used as a burial ground since colonial times. Contains graves of Revolutionary War veterans and prominent New Bern families who shaped the town through the colonial and early national periods. The cemetery reflects New Bern\'s role as a continuous center of North Carolina civic life.',
    lat: 35.1100,
    lng: -77.0450,
    address: '401 George St, New Bern, NC 28562',
    town: { connect: { id: 'us-nc-new-bern' } },
  },
  {
    id: 'place-new-bern-john-wright-stanly-house',
    name: 'John Wright Stanly House',
    placeType: 'HISTORIC_HOUSE',
    description:
      'One of New Bern\'s finest surviving Georgian houses, built circa 1779–1783 by privateer captain and merchant John Wright Stanly. Washington slept here during his 1791 southern tour and praised it as a fine house. Stanly\'s privateering operations during the Revolution illustrate New Bern\'s maritime role in the war effort.',
    lat: 35.1082,
    lng: -77.0437,
    address: '307 George St, New Bern, NC 28562',
    town: { connect: { id: 'us-nc-new-bern' } },
  },
];

// ============================================================================
// NEW BERN — EVENTS
// ============================================================================

export const newBernEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-new-bern-tryon-palace-completed-1771',
    name: 'Tryon Palace Completed — Symbol of Royal Authority',
    startDate: new Date('1771-01-01'),
    datePrecision: 'YEAR',
    summary:
      'Construction of Tryon Palace was completed in New Bern, giving North Carolina the most elaborate colonial government building south of Williamsburg. Built at enormous cost partly through taxes resented by backcountry Regulators, the palace became a physical symbol of the eastern gentry\'s control of colonial government. Governor Tryon left for New York shortly after its completion.',
    significanceWeight: 72,
    lat: 35.1077,
    lng: -77.0434,
    town: { connect: { id: 'us-nc-new-bern' } },
  },
  {
    id: 'event-new-bern-regulator-alamance-1771',
    name: 'Battle of Alamance — Regulator Movement Crushed',
    startDate: new Date('1771-05-16'),
    datePrecision: 'DAY',
    summary:
      'Governor William Tryon led approximately 1,000 eastern militiamen to Alamance Creek in the Piedmont, where he defeated roughly 2,000 poorly armed Regulator farmers demanding an end to corrupt local taxation. Six Regulators were executed after the battle. The grievances behind the Regulator movement — corrupt courts, illegal fees, unequal representation — did not disappear; many former Regulators would take opposing sides in the coming Revolution.',
    significanceWeight: 82,
    lat: 36.0387,
    lng: -79.4082,
    town: { connect: { id: 'us-nc-new-bern' } },
  },
  {
    id: 'event-new-bern-martin-flees-1775',
    name: 'Governor Martin Flees New Bern',
    startDate: new Date('1775-05-24'),
    datePrecision: 'DAY',
    summary:
      'Royal Governor Josiah Martin abandoned Tryon Palace and fled New Bern after Patriot committees dismantled the colony\'s royal institutions around him. He took refuge first at Fort Johnston near Wilmington, then aboard HMS Cruizer in the Cape Fear River. His flight ended effective royal government in North Carolina. The Provincial Congress immediately filled the power vacuum.',
    significanceWeight: 90,
    lat: 35.1077,
    lng: -77.0434,
    town: { connect: { id: 'us-nc-new-bern' } },
  },
  {
    id: 'event-new-bern-provincial-congress-independence-1776',
    name: 'North Carolina Authorizes Vote for Independence',
    startDate: new Date('1776-04-12'),
    datePrecision: 'DAY',
    summary:
      'The Fourth Provincial Congress of North Carolina, meeting in Halifax, passed the Halifax Resolves — the first official action by any colony\'s government authorizing its delegates to vote for independence in the Continental Congress. Though the congress met in Halifax rather than New Bern, the governing network centered on New Bern produced this action. North Carolina\'s delegates became the first to receive formal independence authority.',
    significanceWeight: 95,
    lat: 35.1077,
    lng: -77.0434,
    town: { connect: { id: 'us-nc-new-bern' } },
  },
  {
    id: 'event-new-bern-moores-creek-1776',
    name: 'Battle of Moore\'s Creek Bridge — Loyalist Defeat',
    startDate: new Date('1776-02-27'),
    datePrecision: 'DAY',
    summary:
      'Approximately 1,000 Patriot militiamen under Caswell and Moore ambushed a Loyalist Highland Tory column of roughly 1,500 men at Moore\'s Creek Bridge, twenty miles north of Wilmington. The Patriots had removed the bridge planks and greased the stringers. The Loyalists charged anyway, led by their broadsword-bearing officers, and were cut down in minutes. The defeat ended organized Loyalist military activity in North Carolina and caused the British to abandon their planned 1776 southern invasion.',
    significanceWeight: 96,
    lat: 34.4596,
    lng: -78.1252,
    town: { connect: { id: 'us-nc-new-bern' } },
  },
  {
    id: 'event-new-bern-nc-constitution-1776',
    name: 'North Carolina Adopts State Constitution',
    startDate: new Date('1776-12-18'),
    datePrecision: 'DAY',
    summary:
      'North Carolina\'s fifth Provincial Congress, meeting in Halifax, adopted the state\'s first constitution and elected Richard Caswell as governor. New Bern, though it lost the formal capital designation under the new arrangement, remained the state\'s largest town and primary administrative center for years afterward. The constitution established democratic structures that broke explicitly from the concentrated royal power Tryon Palace had symbolized.',
    significanceWeight: 86,
    lat: 35.1077,
    lng: -77.0434,
    town: { connect: { id: 'us-nc-new-bern' } },
  },
  {
    id: 'event-new-bern-british-raid-1782',
    name: 'British Naval Raid on New Bern',
    startDate: new Date('1782-08-19'),
    datePrecision: 'DAY',
    summary:
      'A British raiding party from the coast attacked New Bern, burning several buildings and seizing supplies. Coming in the war\'s final year, the raid demonstrated that North Carolina\'s coastal towns remained vulnerable even after Yorktown. The town\'s relative security throughout most of the war made this late attack particularly jarring for its residents.',
    significanceWeight: 68,
    lat: 35.1082,
    lng: -77.0437,
    town: { connect: { id: 'us-nc-new-bern' } },
  },
  {
    id: 'event-new-bern-harnett-captured-1781',
    name: 'Cornelius Harnett Captured by British Forces',
    startDate: new Date('1781-02-01'),
    datePrecision: 'MONTH',
    summary:
      'Cornelius Harnett, the principal architect of North Carolina\'s Patriot resistance, was captured by British forces during Cornwallis\'s sweep through the state. Too ill to travel but taken prisoner regardless, Harnett was held at Wilmington under harsh conditions. He died in April 1781, one of the most important Patriot leaders to be killed by the war\'s physical toll rather than in battle.',
    significanceWeight: 80,
    lat: 35.1082,
    lng: -77.0437,
    town: { connect: { id: 'us-nc-new-bern' } },
  },
  {
    id: 'event-new-bern-washington-visit-1791',
    name: 'President Washington Visits New Bern',
    startDate: new Date('1791-04-21'),
    datePrecision: 'DAY',
    summary:
      'George Washington visited New Bern during his southern tour, staying at the John Wright Stanly house and attending a formal dinner and ball. He praised New Bern as a prosperous and handsome town. The visit confirmed New Bern\'s status as the cultural and commercial center of eastern North Carolina in the early national period.',
    significanceWeight: 65,
    lat: 35.1082,
    lng: -77.0437,
    town: { connect: { id: 'us-nc-new-bern' } },
  },
  {
    id: 'event-new-bern-nc-gazette-patriot-press-1775',
    name: 'North Carolina Gazette Supports Patriot Cause',
    startDate: new Date('1775-01-01'),
    datePrecision: 'YEAR',
    summary:
      'New Bern\'s press — including James Davis\'s North Carolina Gazette, the colony\'s first newspaper — became an essential channel for Patriot organization across the colony. Printers in New Bern published Provincial Congress proceedings, committee correspondence, and polemical arguments for resistance, making the town\'s press infrastructure a critical element of the Revolutionary movement\'s information network.',
    significanceWeight: 74,
    lat: 35.1082,
    lng: -77.0437,
    town: { connect: { id: 'us-nc-new-bern' } },
  },
];

// ============================================================================
// NEW BERN — STORIES
// ============================================================================

export const newBernStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-new-bern-martin-flees',
    title: 'The Governor Who Governed From a Warship',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-josiah-martin' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Josiah Martin did not want to leave New Bern. He believed, into the spring of 1775, that loyal North Carolinians would rally to the Crown if given time and leadership. He wrote letters to London explaining his situation, asking for troops, describing the loyal majority he was certain existed in the backcountry. The letters were accurate in some particulars. There was a loyal majority, particularly among the Highland Scottish settlers of the Cape Fear valley who had sworn oaths to the king on arriving in America.

What Martin could not see was that the institutional structure around him was dissolving. The assembly had stopped meeting on his terms. Patriot committees were running the county governments. His own officials were resigning or switching sides. In May 1775, a group of men came to Tryon Palace and spiked the cannon in the courtyard — the most direct possible statement about who actually controlled New Bern.

He left the palace and went to Fort Johnston near Wilmington. When a Patriot militia force threatened the fort in July, he burned it and retreated to HMS Cruizer in the river. From his warship he continued to govern — issuing proclamations, corresponding with London, planning the Loyalist uprising that would end at Moore's Creek Bridge.

The Highland Scots marched in February 1776 expecting Martin's promises to materialize: a British fleet in the Cape Fear, arms and support, a royal army to join. The fleet arrived weeks too late. The Highlanders were destroyed in three minutes at a bridge they should never have tried to cross. Martin remained on his warship, and then sailed away. His plan had failed at every point. The loyal majority he had counted on had met the Patriot militia, and the Patriot militia had won.`,
    tags: ['Martin', 'royal governor', 'Loyalist', 'Moore\'s Creek', 'New Bern', 'Tryon Palace'],
    town: { connect: { id: 'us-nc-new-bern' } },
  },
  {
    id: 'story-new-bern-halifax-resolves',
    title: 'First in the Nation: The Halifax Resolves',
    storyType: 'MODERN_VOICE',
    narratorName: 'Public Historian',
    narratorRole: 'North Carolina History Education Project',
    verificationStatus: 'VERIFIED',
    textVersion: `North Carolina gets credit it rarely receives for a specific moment on April 12, 1776. On that day, the Fourth Provincial Congress passed the Halifax Resolves — the first official act by any colonial government authorizing its congressional delegates to vote for independence from Britain.

Massachusetts had its Minute Men. Virginia had Patrick Henry. Pennsylvania had Franklin. What North Carolina had was institutional: a functioning Provincial Congress, built largely from the organizational network centered on New Bern, that moved faster than any other colony to commit itself formally to the independence option.

The Resolves did not declare independence — that was the Continental Congress's job. What they did was remove the restraint. Delegates William Hooper, Joseph Hewes, and John Penn could now vote yes when the question came to the floor in Philadelphia. Every other colony's delegates were still operating under varying degrees of ambiguity about what their governments actually wanted them to do.

North Carolina said: vote for independence, if you judge it necessary. No colony had said this before April 12. That's why North Carolina's state highway markers read "First for Freedom." It's accurate.

The provincial network that produced the Halifax Resolves had been built over the previous decade in New Bern — in the taverns and countinghouses along the Trent River, in the correspondence between Cornelius Harnett and his committee network, in the printing offices of James Davis. When the moment came, the organizational infrastructure was ready to make the decision.`,
    tags: ['Halifax Resolves', 'independence', 'Provincial Congress', 'North Carolina', 'first'],
    town: { connect: { id: 'us-nc-new-bern' } },
  },
];

// ============================================================================
// NEW BERN — LESSON PLANS
// ============================================================================

export const newBernLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-nc-new-bern' } },
    title: 'Moore\'s Creek Bridge: Three Minutes That Ended a Loyalist Army',
    gradeRange: '5-8',
    estimatedDuration: '2 class periods',
    summary:
      'The February 27, 1776 Battle of Moore\'s Creek Bridge lasted roughly three minutes but had strategic consequences that lasted years. This lesson uses the battle as an entry point for understanding the Loyalist experience of the Revolution — who the Loyalists were, why they remained loyal, and what the consequences of choosing the losing side looked like in a civil war.',
    lessonData: {
      objectives: [
        'Explain who the Highland Scots were and why they had particular reasons for loyalty to the Crown',
        'Describe the Moore\'s Creek battle and how the Patriot forces achieved their tactical advantage',
        'Analyze the battle\'s strategic consequences for the planned British southern invasion of 1776',
        'Evaluate the Loyalist experience after the Patriot victory — confiscation, exile, community fracture',
      ],
      essentialQuestions: [
        'Who were the Loyalists and what does their story reveal about the Revolution as a civil war?',
        'What does it mean to bet on the wrong side of a revolution?',
        'How did geography and local knowledge shape military outcomes at Moore\'s Creek?',
      ],
      materials: [
        'Map of the Cape Fear valley showing Highland Scottish settlement patterns',
        'Brief biography of Flora MacDonald and her connection to North Carolina Loyalism',
        'Topographic sketch of Moore\'s Creek Bridge showing Patriot positions',
        'Post-battle records documenting Loyalist confiscations and banishments',
      ],
      activities: [
        {
          name: 'Who Were the Loyalists?',
          duration: '25 minutes',
          description: 'Students read about Highland Scottish settlement in North Carolina and the oaths Highlanders swore to the Crown. In pairs, they identify the specific reasons this community had for Loyalism that differed from most colonists.',
        },
        {
          name: 'The Bridge Decision',
          duration: '20 minutes',
          description: 'Students examine a map of Moore\'s Creek Bridge and the Patriot defensive position. Discussion: why did Loyalist commanders charge a prepared position? Was the decision rational given what they knew?',
        },
        {
          name: 'Aftermath: What Happened to the Losers?',
          duration: '25 minutes',
          description: 'Students read adapted primary source excerpts on Loyalist property confiscations and banishments from North Carolina, then write a short reflection from a Loyalist family member\'s perspective.',
        },
      ],
      assessment: 'Exit ticket: (1) one reason Highland Scots had for Loyalism, (2) why the Patriot tactical setup at Moore\'s Creek worked, (3) one consequence of Loyalist defeat beyond the battle.',
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
    town: { connect: { id: 'us-nc-new-bern' } },
    title: 'The Halifax Resolves: Who Gets to Authorize Independence?',
    gradeRange: '9-12',
    estimatedDuration: '2-3 class periods',
    summary:
      'The April 12, 1776 Halifax Resolves made North Carolina the first colony to formally authorize its congressional delegates to vote for independence — yet the precedent is largely absent from standard curricula. This lesson examines the constitutional mechanics of the independence movement and what it meant to "authorize" independence.',
    lessonData: {
      objectives: [
        'Explain how colonies governed themselves as royal authority collapsed in 1775–1776',
        'Analyze the Halifax Resolves as a constitutional document and identify its specific authorization',
        'Compare North Carolina\'s April 1776 position with that of other colonies',
        'Evaluate why the Halifax Resolves are not better known and what that absence reveals',
      ],
      essentialQuestions: [
        'How does authority transfer when a government loses legitimacy?',
        'What does it mean to "authorize" a vote for independence versus declaring independence yourself?',
        'Why do some historical firsts become famous while others are forgotten?',
      ],
      materials: [
        'Text of the Halifax Resolves (April 12, 1776)',
        'Instructions given to other colonies\' delegates in April 1776 (comparison)',
        'Timeline of colonial authorization votes, April through July 1776',
        'Thomas Jefferson\'s July 4 Declaration for comparison',
      ],
      activities: [
        {
          name: 'Close Reading: What the Resolves Actually Say',
          duration: '30 minutes',
          description: 'Students read the Halifax Resolves and identify: what the document authorizes, what it does NOT do, and what legal effect it had on April 12 that did not exist on April 11.',
        },
        {
          name: 'Comparative Authorization',
          duration: '25 minutes',
          description: 'Students chart the scope of authorization different colonies had given their delegates in April–May 1776 and discuss why different colonies moved at different speeds.',
        },
        {
          name: 'The Memory Problem',
          duration: '20 minutes',
          description: 'Students examine why North Carolina\'s first-to-authorize role is absent from most founding narratives. Small groups generate hypotheses and evaluate which explanations are most persuasive.',
        },
      ],
      assessment: 'Analytical essay (800–1000 words): explain what the Halifax Resolves authorized in April 1776 and argue whether North Carolina deserves more recognition for this action than it currently receives.',
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
// NEW BERN — ADDITIONAL LINKS
// ============================================================================

export const newBernAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-nc-wilmington',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason: 'New Bern and Wilmington are North Carolina\'s two most significant Revolutionary War coastal towns, connected by the same royal government, the Loyalist march to Moore\'s Creek, and the Cape Fear crisis of 1781.',
    weight: 90,
  },
  {
    toTownId: 'us-sc-charleston',
    linkType: 'SHARED_THEME',
    reason: 'New Bern\'s Provincial Congress governance model and Patriot organizational network parallels Charleston\'s role in South Carolina; both towns served as administrative centers for their states throughout the war.',
    weight: 68,
  },
  {
    toTownId: 'us-va-williamsburg',
    linkType: 'SHARED_THEME',
    reason: 'Both Williamsburg and New Bern served as colonial capitals where royal governors were displaced by Patriot conventions; Tryon Palace in New Bern consciously echoed the Williamsburg model of colonial government architecture.',
    weight: 72,
  },
  {
    toTownId: 'us-pa-philadelphia',
    linkType: 'SHARED_EVENT',
    reason: 'North Carolina\'s congressional delegates, empowered by the Halifax Resolves passed through New Bern\'s governmental network, cast the first formally authorized independence votes in Philadelphia.',
    weight: 80,
  },
];

// ============================================================================
// WILMINGTON, NC
// ============================================================================

export const wilmingtonNcTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Wilmington, North Carolina, was the only deep-water port in the state. That single geographic fact made it the fulcrum of British strategy in North Carolina and the place where Cornwallis paused before making the decision that ended his army.

The Cape Fear River valley had been contested from the first months of the war. The Scottish Highland settlers who had poured into the region after Culloden in 1746 were heavily Loyalist — they had sworn oaths to the Crown as a condition of their land grants, and many had arrived directly from a failed rebellion against a different king, which gave them particular reasons to avoid picking the wrong side again. When Royal Governor Josiah Martin fled his palace in 1775 and took refuge on a warship in the Cape Fear, he spent months planning a coordinated uprising with this Highland population that would link up with a British fleet at Wilmington. The plan ended at Moore's Creek Bridge in February 1776, where Patriot forces ambushed and destroyed the Loyalist column in three minutes of brutal fighting.

Wilmington spent most of the war in Patriot hands, functioning as a supply port and administrative center for eastern North Carolina. But in January 1781 the British came back in force. Major James Craig landed with a garrison and occupied the town without significant resistance. Craig's occupation was deliberate and systematic: he raided the surrounding countryside, supplied Loyalist partisan David Fanning's brutal operations in the interior, and transformed Wilmington into the coastal anchor of British power in North Carolina.

Cornwallis arrived in Wilmington in April 1781 after the brutal Guilford Courthouse campaign had left his army too depleted to continue operating in the Carolina backcountry. He had won the battle at Guilford Courthouse on March 15 — driven Greene's army from the field — but lost a quarter of his force in doing it. At Wilmington, he faced a choice: march south to reinforce British positions in South Carolina, or march north into Virginia. He chose Virginia, departing Wilmington in April 1781 on the march that would end at Yorktown.

The decision at Wilmington is one of the most consequential in the entire war. Nathanael Greene responded to Cornwallis's northward march by turning south and systematically destroying the British position in South Carolina and Georgia. The fall of Ninety Six, Eutaw Springs, and the collapse of British interior posts followed. By the time Cornwallis surrendered at Yorktown in October 1781, the British position in the south had been dismantled behind him. Wilmington, the last British-held town in North Carolina, was evacuated in November 1781.

What Wilmington's story reveals is how the war's geography shaped its outcome. The town's port made it indispensable to any British strategy in North Carolina; its position on a navigable river meant the British could supply a garrison indefinitely from the sea. But that same insularity meant British power at Wilmington was perimeter power — it could raid, it could supply Loyalist partisans, it could provide Cornwallis a base. What it could not do was win the backcountry. The towns the British held did not translate into territory they controlled.`,
};

// ============================================================================
// WILMINGTON, NC — PEOPLE
// ============================================================================

export const wilmingtonNcPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-james-craig-nc',
      name: 'Major James Henry Craig',
      roles: ['British Army Officer', 'Wilmington NC Occupation Commander'],
      bioShort:
        'British officer who landed at Wilmington in January 1781 with a garrison of 450 men and occupied the town for the remainder of the war. Craig organized systematic raids on the surrounding countryside, supplied Loyalist partisan David Fanning, and maintained Wilmington as Britain\'s last toehold in North Carolina until evacuation in November 1781.',
      birthYear: 1748,
      deathYear: 1812,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the British occupation of Wilmington NC from January to November 1781, making the town a base for raids and Loyalist partisan support.',
  },
  {
    person: {
      id: 'person-cornwallis-wilmington',
      name: 'General Lord Charles Cornwallis',
      roles: ['British Commander, Southern Army', 'Guilford Courthouse Campaign Commander'],
      bioShort:
        'British general who retreated to Wilmington NC after the costly victory at Guilford Courthouse in March 1781, then made the fateful decision to march into Virginia rather than south to reinforce South Carolina. His Yorktown surrender in October 1781 effectively ended the war.',
      birthYear: 1738,
      deathYear: 1805,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Arrived at Wilmington NC in April 1781, rested his depleted army, and departed for Virginia on the march that ended at Yorktown.',
  },
  {
    person: {
      id: 'person-nathanael-greene-nc',
      name: 'Major General Nathanael Greene',
      roles: ['Continental Army General', 'Commander of Southern Department'],
      bioShort:
        'Rhode Island general who took command of the shattered Southern Army in December 1780. At Guilford Courthouse he traded his army\'s retreat for a quarter of Cornwallis\'s force, then turned south when Cornwallis retreated to Wilmington — dismantling the British position in the Carolinas while Cornwallis marched to his destruction in Virginia.',
      birthYear: 1742,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'His strategic decision to march south when Cornwallis retreated to Wilmington was the decisive move that unraveled British power in the Carolinas.',
  },
  {
    person: {
      id: 'person-david-fanning',
      name: 'Colonel David Fanning',
      roles: ['Loyalist Partisan Commander', 'North Carolina Tory Militia Leader'],
      bioShort:
        'North Carolina Loyalist militia officer who conducted some of the war\'s most effective and brutal partisan operations from a base supplied by Craig\'s Wilmington garrison. His raids in 1781, including the capture of Governor Thomas Burke, demonstrated the savagery of North Carolina\'s civil war dimension.',
      birthYear: 1755,
      deathYear: 1825,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Operated out of the backcountry with supplies and support from Craig\'s Wilmington garrison; his raids defined North Carolina\'s partisan war in 1781.',
  },
  {
    person: {
      id: 'person-william-hooper',
      name: 'William Hooper',
      roles: ['Continental Congress Delegate', 'Signer of Declaration of Independence', 'North Carolina Lawyer'],
      bioShort:
        'Wilmington NC lawyer who represented North Carolina in the Continental Congress and signed the Declaration of Independence. Once a Tory sympathizer who had defended Loyalist clients, he became a committed Patriot. British forces burned his Wilmington home and property during the occupation, forcing his family to flee.',
      birthYear: 1742,
      deathYear: 1790,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Wilmington\'s own signer of the Declaration; his property was specifically targeted by Craig\'s forces in retaliation for his political role.',
  },
  {
    person: {
      id: 'person-robert-howe-nc',
      name: 'Major General Robert Howe',
      roles: ['Continental Army General', 'North Carolina Patriot Officer'],
      bioShort:
        'North Carolina Continental general from the Cape Fear region who commanded the unsuccessful defense of Savannah in December 1778. Despite the defeat, he continued to serve and later suppressed the Pennsylvania Line mutiny in 1781. The Cape Fear gentry network that supported him was based in Wilmington.',
      birthYear: 1732,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Cape Fear planter and major Continental general whose career illustrated Wilmington\'s role in producing North Carolina\'s senior military leadership.',
  },
  {
    person: {
      id: 'person-thomas-burke-nc',
      name: 'Governor Thomas Burke',
      roles: ['Governor of North Carolina', 'Continental Congress Delegate'],
      bioShort:
        'North Carolina governor captured by Loyalist partisan David Fanning in a raid on Hillsborough in September 1781. Held briefly at Wilmington before being sent to a British prison hulk in Charleston harbor. His capture illustrated the chaos of North Carolina\'s wartime governance and the effectiveness of Craig\'s Wilmington-based partisan strategy.',
      birthYear: 1747,
      deathYear: 1783,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Captured by Fanning\'s partisans operating from Craig\'s Wilmington base; his imprisonment at Wilmington linked the town directly to the disruption of North Carolina\'s state government.',
  },
  {
    person: {
      id: 'person-alexander-lillington',
      name: 'Colonel Alexander Lillington',
      roles: ['North Carolina Militia Officer', 'Moore\'s Creek Bridge Commander'],
      bioShort:
        'Cape Fear region militia colonel who commanded Patriot forces at the north end of Moore\'s Creek Bridge on February 27, 1776. His preparation of the defensive position — removing the bridge planks and positioning artillery — was decisive. A veteran of the Stamp Act resistance and one of the Cape Fear\'s most effective Patriot military leaders.',
      birthYear: 1725,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Led the Moore\'s Creek Bridge defense that secured the Cape Fear region for the Patriots and prevented the British from using Wilmington as an invasion base in 1776.',
  },
];

// ============================================================================
// WILMINGTON, NC — PLACES
// ============================================================================

export const wilmingtonNcPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-wilmington-nc-moores-creek-battlefield',
    name: 'Moore\'s Creek National Battlefield',
    placeType: 'BATTLEFIELD',
    description:
      'The site of the February 27, 1776 Patriot ambush that destroyed the Loyalist Highland Tory army. Patriot forces under Caswell and Lillington removed the bridge planks, greased the stringers, and positioned artillery. The battle lasted roughly three minutes and ended Loyalist military power in North Carolina. An NPS-managed site with a reconstructed bridge and interpretive trail.',
    lat: 34.4596,
    lng: -78.1252,
    address: '40 Patriots Hall Dr, Currie, NC 28435',
    town: { connect: { id: 'us-nc-wilmington' } },
  },
  {
    id: 'place-wilmington-nc-bellamy-mansion',
    name: 'Bellamy Mansion Museum',
    placeType: 'HISTORIC_HOUSE',
    description:
      'An 1859 antebellum mansion that anchors Wilmington\'s historic downtown, now a museum of history and design arts. While the current building postdates the Revolution, the property sits within Wilmington\'s historic core where colonial-era buildings stood during the occupation. The museum contextualizes Wilmington\'s full history from colonial port to Civil War city.',
    lat: 34.2368,
    lng: -77.9455,
    address: '503 Market St, Wilmington, NC 28401',
    town: { connect: { id: 'us-nc-wilmington' } },
  },
  {
    id: 'place-wilmington-nc-cape-fear-museum',
    name: 'Cape Fear Museum of History and Science',
    placeType: 'MUSEUM',
    description:
      'The primary local history museum for the Wilmington and Cape Fear region, with collections covering the Revolutionary War period: the Moore\'s Creek campaign, the British occupation of 1781, the Cornwallis headquarters, and the role of the Cape Fear port in supplying both sides during the conflict.',
    lat: 34.2388,
    lng: -77.9498,
    address: '814 Market St, Wilmington, NC 28401',
    town: { connect: { id: 'us-nc-wilmington' } },
  },
  {
    id: 'place-wilmington-nc-cornwallis-house',
    name: 'Cornwallis House Site',
    placeType: 'LANDMARK',
    description:
      'The site on Market Street where General Cornwallis headquartered in April 1781 while his army rested at Wilmington following the Guilford Courthouse campaign. It was here that Cornwallis made the decision to march north into Virginia rather than south to reinforce British positions in South Carolina — one of the most consequential command decisions of the war. A marker identifies the site.',
    lat: 34.2371,
    lng: -77.9451,
    address: 'Market St area, Wilmington, NC 28401',
    town: { connect: { id: 'us-nc-wilmington' } },
  },
  {
    id: 'place-wilmington-nc-st-james-church',
    name: 'St. James Episcopal Church',
    placeType: 'CHURCH',
    description:
      'One of the oldest congregations in the Cape Fear region, established 1729. The current building dates to 1839, but the church community spanned the colonial and Revolutionary periods. During Craig\'s 1781 occupation, the church served British and Loyalist needs; the congregation divided along Patriot and Loyalist lines as the war tore through Wilmington\'s social fabric.',
    lat: 34.2363,
    lng: -77.9459,
    address: '25 S Third St, Wilmington, NC 28401',
    town: { connect: { id: 'us-nc-wilmington' } },
  },
  {
    id: 'place-wilmington-nc-oakdale-cemetery',
    name: 'Oakdale Cemetery',
    placeType: 'CEMETERY',
    description:
      'Established 1855 but incorporating colonial-era grave sites; Oakdale is the primary historic cemetery of Wilmington and contains graves of Revolutionary War veterans and Cape Fear families whose ancestors participated in the Moore\'s Creek campaign and the 1781 occupation. A register of Revolutionary War veterans buried here documents Wilmington\'s contribution to the Patriot cause.',
    lat: 34.2465,
    lng: -77.9404,
    address: '520 N 15th St, Wilmington, NC 28401',
    town: { connect: { id: 'us-nc-wilmington' } },
  },
];

// ============================================================================
// WILMINGTON, NC — EVENTS
// ============================================================================

export const wilmingtonNcEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-wilmington-nc-fort-johnston-burned-1775',
    name: 'Patriots Burn Fort Johnston',
    startDate: new Date('1775-07-18'),
    datePrecision: 'DAY',
    summary:
      'Patriot militia under Robert Howe and Cornelius Harnett burned Fort Johnston near Wilmington after Governor Martin took refuge there. Martin escaped to HMS Cruizer in the Cape Fear River. The burning demonstrated that Patriot forces controlled the land while Martin\'s authority was confined to the water. It was the first military action of the Revolution in North Carolina.',
    significanceWeight: 82,
    lat: 33.9949,
    lng: -77.9291,
    town: { connect: { id: 'us-nc-wilmington' } },
  },
  {
    id: 'event-wilmington-nc-moores-creek-1776',
    name: 'Battle of Moore\'s Creek Bridge',
    startDate: new Date('1776-02-27'),
    datePrecision: 'DAY',
    summary:
      'Patriot forces under Caswell and Lillington ambushed a Loyalist Highland Tory column of approximately 1,500 men attempting to reach Wilmington and link up with a British fleet. The battle lasted roughly three minutes; the Loyalists lost some 50 killed and over 850 captured against minimal Patriot casualties. The victory ended Loyalist military power in North Carolina and forced the British to abandon their planned 1776 southern invasion.',
    significanceWeight: 97,
    lat: 34.4596,
    lng: -78.1252,
    town: { connect: { id: 'us-nc-wilmington' } },
  },
  {
    id: 'event-wilmington-nc-british-fleet-cape-fear-1776',
    name: 'British Fleet Arrives in Cape Fear — Too Late',
    startDate: new Date('1776-05-01'),
    datePrecision: 'MONTH',
    summary:
      'The British fleet under Commodore Sir Peter Parker arrived at the Cape Fear River in late April–May 1776, weeks after the Loyalist army it was supposed to support had been destroyed at Moore\'s Creek Bridge. The fleet lingered, then sailed south to attack Fort Sullivan in Charleston harbor, where it was repulsed. The Cape Fear plan had failed at both ends.',
    significanceWeight: 78,
    lat: 34.0007,
    lng: -77.9357,
    town: { connect: { id: 'us-nc-wilmington' } },
  },
  {
    id: 'event-wilmington-nc-craig-occupation-1781',
    name: 'Major Craig Occupies Wilmington',
    startDate: new Date('1781-01-28'),
    datePrecision: 'DAY',
    summary:
      'British Major James Craig landed at Wilmington with approximately 450 soldiers and occupied the town without significant resistance. The occupation would last until November 1781, making Wilmington Britain\'s last-held position in North Carolina. Craig immediately began organizing supply operations for Loyalist partisans and raiding parties into the surrounding countryside.',
    significanceWeight: 88,
    lat: 34.2371,
    lng: -77.9451,
    town: { connect: { id: 'us-nc-wilmington' } },
  },
  {
    id: 'event-wilmington-nc-guilford-courthouse-1781',
    name: 'Battle of Guilford Courthouse — Cornwallis\'s Pyrrhic Victory',
    startDate: new Date('1781-03-15'),
    datePrecision: 'DAY',
    summary:
      'Cornwallis drove Greene\'s army from the field at Guilford Courthouse but suffered casualties so severe — over 500 killed and wounded, roughly 27 percent of his force — that he could not exploit the victory. He retreated to Wilmington to resupply and rest his army. Charles James Fox famously said in Parliament: "Another such victory would destroy the British army."',
    significanceWeight: 96,
    lat: 36.1327,
    lng: -79.8614,
    town: { connect: { id: 'us-nc-wilmington' } },
  },
  {
    id: 'event-wilmington-nc-cornwallis-arrives-1781',
    name: 'Cornwallis Arrives at Wilmington — Army at Half Strength',
    startDate: new Date('1781-04-07'),
    datePrecision: 'DAY',
    summary:
      'Cornwallis reached Wilmington with approximately 1,400 exhausted and depleted soldiers after the retreat from Guilford Courthouse. He remained there for three weeks, resupplying from Craig\'s garrison and debating his next move. The British position in the interior of the Carolinas was collapsing as Greene turned south; Cornwallis\'s choice at Wilmington would determine the war\'s final phase.',
    significanceWeight: 92,
    lat: 34.2371,
    lng: -77.9451,
    town: { connect: { id: 'us-nc-wilmington' } },
  },
  {
    id: 'event-wilmington-nc-cornwallis-departs-virginia-1781',
    name: 'Cornwallis Departs Wilmington for Virginia',
    startDate: new Date('1781-04-25'),
    datePrecision: 'DAY',
    summary:
      'Cornwallis led his army north out of Wilmington toward Virginia, declining to march south to reinforce British positions in South Carolina. His reasoning: the interior could not be held without a larger army, and Virginia was the key to the south\'s supply and communication lines. Greene responded by turning south and systematically reducing the British position Cornwallis had just abandoned. Cornwallis\'s march ended at Yorktown.',
    significanceWeight: 98,
    lat: 34.2371,
    lng: -77.9451,
    town: { connect: { id: 'us-nc-wilmington' } },
  },
  {
    id: 'event-wilmington-nc-fanning-captures-burke-1781',
    name: 'David Fanning Captures Governor Burke at Hillsborough',
    startDate: new Date('1781-09-12'),
    datePrecision: 'DAY',
    summary:
      'Loyalist partisan David Fanning, operating from a network supplied through Craig\'s Wilmington garrison, led a raid on Hillsborough that captured North Carolina Governor Thomas Burke and carried him to Wilmington. Burke was sent to a prison hulk at Charleston. The raid illustrated Craig\'s strategy of using Wilmington as a base to decapitate North Carolina\'s state government.',
    significanceWeight: 84,
    lat: 36.0751,
    lng: -79.1003,
    town: { connect: { id: 'us-nc-wilmington' } },
  },
  {
    id: 'event-wilmington-nc-greene-turns-south-1781',
    name: 'Greene Turns South — Dismantling British Interior',
    startDate: new Date('1781-04-26'),
    datePrecision: 'DAY',
    summary:
      'The day after Cornwallis departed Wilmington for Virginia, Nathanael Greene turned his army south toward South Carolina. With Cornwallis absent, Greene could attack the scattered British interior posts. Ninety Six was besieged in May–June. Eutaw Springs followed in September. By late 1781 the British had been driven from every interior post in South Carolina and Georgia, holding only Charleston and Savannah.',
    significanceWeight: 95,
    lat: 34.2371,
    lng: -77.9451,
    town: { connect: { id: 'us-nc-wilmington' } },
  },
  {
    id: 'event-wilmington-nc-british-evacuation-1781',
    name: 'British Evacuate Wilmington',
    startDate: new Date('1781-11-18'),
    datePrecision: 'DAY',
    summary:
      'Following Cornwallis\'s surrender at Yorktown on October 19, 1781, Craig evacuated Wilmington and the British garrison sailed south to Charleston. Wilmington was the last British-held position in North Carolina. The evacuation ended ten months of occupation and returned the town to Patriot control, though raids and partisan violence continued in the surrounding countryside for months afterward.',
    significanceWeight: 88,
    lat: 34.2371,
    lng: -77.9451,
    town: { connect: { id: 'us-nc-wilmington' } },
  },
];

// ============================================================================
// WILMINGTON, NC — STORIES
// ============================================================================

export const wilmingtonNcStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-wilmington-nc-cornwallis-decision',
    title: 'The Decision at Wilmington',
    storyType: 'MODERN_VOICE',
    narratorName: 'Military Historian',
    narratorRole: 'Southern Campaign Studies Program',
    verificationStatus: 'VERIFIED',
    textVersion: `Cornwallis arrived at Wilmington in April 1781 with an army that had won its last battle by losing a quarter of itself. Guilford Courthouse was technically a victory — Greene retreated, the British held the field. The casualty count made it something else.

He had two choices. South: reinforce British posts in South Carolina and Georgia, try to hold the interior positions that were already beginning to buckle under Greene's pressure. North: march into Virginia, seize the Chesapeake, cut the supply lines that fed Patriot operations throughout the south.

He chose Virginia. His reasoning was coherent: Virginia produced the men and supplies that sustained Patriot resistance; hit Virginia hard enough and the south would collapse from its roots. It was a strategic argument, not a reckless gamble.

What he didn't calculate was what Greene would do when he marched away. Greene turned south the day after Cornwallis left Wilmington. With the British army in Virginia, Greene could pick off British interior posts in the Carolinas one by one — Ninety Six, Eutaw Springs, a dozen smaller positions. By the time Cornwallis surrendered at Yorktown in October, the British position in the south that he had been trying to secure was already gone.

The decision was made at Wilmington. It ended the war.`,
    tags: ['Cornwallis', 'Guilford Courthouse', 'Yorktown', 'strategic decision', 'Wilmington NC'],
    town: { connect: { id: 'us-nc-wilmington' } },
  },
  {
    id: 'story-wilmington-nc-highland-loyalists',
    title: 'The Oath That Cost Everything',
    storyType: 'HISTORICAL_VOICE',
    verificationStatus: 'VERIFIED',
    textVersion: `The Highlanders who marched toward Wilmington in February 1776 had arrived in North Carolina with a specific understanding: they swore loyalty to the king and received land grants in return. This was not an abstraction. Many of them had come directly from the aftermath of Culloden — from a failed rebellion against a different king, from the Clearances, from the destruction of Highland clan society. They had chosen the winning side this time. They had documentation.

When Governor Martin told them to march, many of them went because Martin was the king's representative and marching was what their oath required. Flora MacDonald — who had once helped Bonnie Prince Charlie escape after Culloden — reportedly told Highland men they were obligated to go. She was applying the logic of Jacobite loyalty to a different king, in a different country, twenty-five years later.

At Moore's Creek Bridge, they found the planks gone and the stringers greased. The artillery opened up. The men at the front fell. The men behind turned and ran. It was over in three minutes.

What happened afterward was more systematic than the battle. North Carolina's new state government confiscated Loyalist lands. Men who had come to America specifically to build stable lives on guaranteed land grants lost everything. Some were imprisoned. Some were banished. Some managed to stay and quietly rebuild. A few ended up in Canada.

The oath that had promised them security became the reason they lost what they'd come to protect.`,
    tags: ['Highlanders', 'Loyalists', 'Moore\'s Creek', 'Flora MacDonald', 'oaths', 'Cape Fear'],
    town: { connect: { id: 'us-nc-wilmington' } },
  },
];

// ============================================================================
// WILMINGTON, NC — LESSON PLANS
// ============================================================================

export const wilmingtonNcLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-nc-wilmington' } },
    title: 'Cornwallis\'s Fork: The Strategic Decision That Ended the War',
    gradeRange: '8-12',
    estimatedDuration: '2 class periods',
    summary:
      'When Cornwallis rested at Wilmington in April 1781, he made a strategic decision that shaped the war\'s outcome more than any battle: he marched north into Virginia instead of south to reinforce the Carolinas. This lesson uses that decision as a case study in strategic reasoning under uncertainty — what Cornwallis knew, what he didn\'t know, what Greene did in response, and what the decision reveals about how wars end.',
    lessonData: {
      objectives: [
        'Describe the British strategic situation in the south after Guilford Courthouse',
        'Analyze the arguments for marching south versus north from Cornwallis\'s perspective',
        'Explain Greene\'s strategic response and trace its consequences through Ninety Six and Eutaw Springs',
        'Evaluate whether Cornwallis\'s decision was rational given what he knew in April 1781',
      ],
      essentialQuestions: [
        'What does it mean to make a rational decision that leads to catastrophic results?',
        'What is the relationship between tactical victory (Guilford Courthouse) and strategic failure (Yorktown)?',
      ],
      materials: [
        'Map of the southern theater showing British posts, Greene\'s position, and Virginia',
        'Cornwallis\'s correspondence with Clinton about the Virginia decision (April 1781)',
        'Timeline: Cornwallis at Wilmington → Greene turns south → Ninety Six → Eutaw Springs → Yorktown',
        'Clinton\'s correspondence disputing Cornwallis\'s Virginia strategy',
      ],
      activities: [
        {
          name: 'The Commander\'s Map Problem',
          duration: '25 minutes',
          description: 'Students receive a briefing card summarizing Cornwallis\'s situation in April 1781 and in small groups prepare a recommendation for where to march, presenting their reasoning to the class.',
        },
        {
          name: 'What Greene Did',
          duration: '20 minutes',
          description: 'Students trace Greene\'s movements after Cornwallis departed Wilmington — the turn south, Ninety Six, Eutaw Springs — and discuss whether Cornwallis should have anticipated this response.',
        },
        {
          name: 'Rational Decisions and Catastrophic Outcomes',
          duration: '20 minutes',
          description: 'Students read Clinton\'s criticism and Cornwallis\'s defense of the Virginia decision, then evaluate: does the outcome (Yorktown) prove Cornwallis was wrong, or only that the outcome was bad?',
        },
      ],
      assessment: 'Short essay (600–800 words): Was Cornwallis\'s April 1781 decision to march north to Virginia reasonable given what he knew? Use specific evidence to support your argument.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.1.9-12: Evaluate how historical events and developments were shaped by unique circumstances',
        'D2.His.4.9-12: Analyze complex and interacting factors that influenced the perspectives of people during different historical eras',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-nc-wilmington' } },
    title: 'Occupation and Resistance: Wilmington NC Under Craig, 1781',
    gradeRange: '6-9',
    estimatedDuration: '2 class periods',
    summary:
      'Major Craig\'s ten-month occupation of Wilmington in 1781 illustrates how military occupation works at the community level: who collaborates, who resists, who tries to survive neutrally, and what happens to each. This lesson connects the abstract strategy of the southern campaign to the lived experience of a coastal town under enemy control.',
    lessonData: {
      objectives: [
        'Describe Craig\'s occupation strategy and how Wilmington functioned as a British base',
        'Identify the range of responses available to Wilmington residents — collaboration, resistance, neutrality',
        'Analyze how Craig used the garrison to supply Loyalist partisans and conduct raids',
        'Evaluate the consequences for different community members when the British evacuated',
      ],
      essentialQuestions: [
        'What choices do civilians have during a military occupation, and what are the costs of each choice?',
        'What happens to a community after the occupiers leave?',
      ],
      materials: [
        'Map of Wilmington NC showing Craig\'s garrison positions and the Cape Fear River',
        'Account of David Fanning\'s raids and their connection to the Wilmington garrison',
        'Account of William Hooper\'s property being burned in retaliation',
        'Post-occupation records documenting Loyalist evacuations and Patriot property claims',
      ],
      activities: [
        {
          name: 'The Occupation Map',
          duration: '20 minutes',
          description: 'Students map Craig\'s garrison, the Cape Fear supply line, and Fanning\'s inland operating area. Discussion: why was controlling the port not the same as controlling the countryside?',
        },
        {
          name: 'Three Families, Three Choices',
          duration: '30 minutes',
          description: 'Students read constructed scenarios for a targeted Patriot family, a collaborating Loyalist family, and a neutral family. For each, they identify the choices made and the consequences after the British leave.',
        },
        {
          name: 'After the Occupiers Leave',
          duration: '20 minutes',
          description: 'Students read an account of Loyalist property confiscations and reprisals after Craig\'s evacuation. Discussion: is this just? Is it inevitable in a civil war context?',
        },
      ],
      assessment: 'Written response: describe two choices a Wilmington resident could have made during the 1781 occupation, explain the reasoning behind each, and argue which was most defensible.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.6-8.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.5.6-8: Explain how and why perspectives of people have changed over time',
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// WILMINGTON, NC — ADDITIONAL LINKS
// ============================================================================

export const wilmingtonNcAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-nc-new-bern',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason: 'Wilmington NC and New Bern are North Carolina\'s two primary Revolutionary War coastal towns, linked by the same royal governor\'s crisis, the Loyalist march from the Cape Fear region, and the state\'s wartime administrative network.',
    weight: 90,
  },
  {
    toTownId: 'us-sc-charleston',
    linkType: 'SHARED_EVENT',
    reason: 'Cornwallis\'s Wilmington decision to march north rather than reinforce Charleston directly led to the collapse of British positions in South Carolina. Governor Burke, captured by Fanning\'s men based at Wilmington, was held on a prison hulk at Charleston. The two towns are bound by the southern campaign\'s final arc.',
    weight: 85,
  },
  {
    toTownId: 'us-va-yorktown',
    linkType: 'SHARED_PERSON',
    reason: 'Cornwallis departed Wilmington in April 1781 on the march that ended at Yorktown. His decision made at Wilmington was the proximate cause of his Yorktown surrender. The two towns form one continuous strategic story.',
    weight: 96,
  },
  {
    toTownId: 'us-nc-guilford-courthouse',
    linkType: 'SHARED_EVENT',
    reason: 'Cornwallis retreated to Wilmington after the pyrrhic victory at Guilford Courthouse; the battle\'s heavy casualties were the reason his army needed to rest at Wilmington before any further movement. The two sites form one operational sequence.',
    weight: 92,
  },
  {
    toTownId: 'us-sc-ninety-six',
    linkType: 'SHARED_THEME',
    reason: 'Greene\'s turn south from Wilmington after Cornwallis departed led directly to the siege of Ninety Six. The two events — Cornwallis\'s departure and Greene\'s southern offensive — are causally linked through the strategic vacuum the Wilmington decision created.',
    weight: 78,
  },
];
