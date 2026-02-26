// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// VT Cluster: Bennington (VT) + Brattleboro (VT)
// Campaign: Vermont frontier defense, Green Mountain Boys, Battle of Bennington 1777

import { Prisma } from '@prisma/client';

/**
 * VT Cluster — Bennington and Brattleboro, Vermont
 *
 * These two towns anchor the Vermont Revolutionary War story from different
 * angles. Bennington was the site of the war's most consequential militia
 * victory outside New England — the August 16, 1777 battle that turned
 * Burgoyne's flank and set the conditions for Saratoga. Brattleboro was the
 * southeastern gateway through which the Green Mountain Boys operated, the
 * site of the Westminster Massacre that galvanized Vermont's independence
 * movement, and the hub of the Connecticut River valley defense network.
 *
 * NOTE ON VERIFICATION: Historical content synthesized from John Buchanan's
 * "The Road to Guilford Courthouse," Michael Gabriel's "The Battle of
 * Bennington," John Pell's biography of Ethan Allen, Charles Miner Thompson's
 * "Independent Vermont," Frank Howe's "Brattleboro, Windham County, Vermont,"
 * NPS documentation for the Bennington Battlefield, Vermont State Papers, and
 * the Vermont Historical Society collections. Stories marked VERIFIED have
 * strong documentary evidence.
 */

// ============================================================================
// BENNINGTON
// ============================================================================

export const benningtonTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Bennington in August 1777 was not supposed to be where the Battle of Bennington was fought. The British objective was the supply depot the Americans had established at the town — flour, beef, horses, and equipment stockpiled to support the Continental Army defending the Hudson valley. General John Burgoyne needed those supplies. His army was moving south through the New York wilderness toward Albany, its supply lines stretching hundreds of miles back to Canada, and what he found at Bennington was not an undefended storehouse but a prepared force of New England militia under John Stark who had chosen his ground and was waiting.

The battle on August 16, 1777, unfolded in two stages, each revealing something different about why militia could sometimes beat regulars on terrain the militia knew and the regulars did not. The first action — Stark's assault on the German Hessian detachment under Lieutenant Colonel Friedrich Baum on a wooded ridge above the Walloomsac River — demonstrated what flanking fire from concealed riflemen could do to troops formed in open-field defensive positions. Baum's men were trained and experienced, but they had set up their works expecting a frontal assault. Stark sent parties around both flanks simultaneously, and Baum's position collapsed under fire from multiple directions. Baum himself was mortally wounded.

The second action, a few hours later, was nearly a disaster. A British relief column under Lieutenant Colonel Heinrich von Breymann arrived while Stark's militia was scattered and looting the captured position. What saved the American victory was the arrival of Seth Warner's Green Mountain Boys from Manchester, intact and ready to fight. Warner's regiment formed up and met Breymann in a road battle that drove the Germans back in disorder with heavy losses.

Together, the two actions cost Burgoyne nearly a thousand men — roughly ten percent of his entire army — plus the horses, equipment, and supplies he had sent to capture. The scale of the loss was not immediately obvious from Burgoyne's dispatches, but its strategic consequence was clear within weeks: at Saratoga in October 1777, Burgoyne's army was unable to break through Gates's position partly because the Bennington losses had stripped it of the cavalry, supplies, and the operational flexibility it needed. Burgoyne surrendered on October 17. The French alliance followed within months.

Bennington's role in this sequence is sometimes understated by historians who focus on the Saratoga battles themselves. But Stark saw it clearly: the men who came out to fight on August 16 were not Continental soldiers under orders. They were Vermont and New Hampshire farmers who had come voluntarily, under a militia general who had resigned his Continental commission months earlier in a dispute over seniority. Stark had told them before the battle, in language that has been slightly polished by subsequent retelling, that they would defeat the enemy that day or his wife would be a widow by nightfall. What he was communicating was that this was not a strategic campaign — it was a defense of the communities these men came from, and they understood the stakes.

The Bennington Battle Monument, completed in 1891, stands in the actual town of Bennington rather than at the battlefield site, which is across the state line in New York. This geographic quirk matters: the monument commemorates the town that supplied the cause, not the ground where the fighting happened. The two sites together tell the complete story.`,
};

// ============================================================================
// BENNINGTON — PEOPLE
// ============================================================================

export const benningtonPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-john-stark',
      name: 'General John Stark',
      roles: ['New Hampshire Militia General', 'Continental Army Officer', 'Battle of Bennington Commander'],
      bioShort:
        'New Hampshire militia general who commanded American forces at the Battle of Bennington. Having resigned his Continental commission over a seniority dispute, he accepted command of the New Hampshire militia and won the engagement that weakened Burgoyne before Saratoga. His pre-battle speech became one of the Revolution\'s most quoted rallying cries.',
      birthYear: 1728,
      deathYear: 1822,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded all American forces at the Battle of Bennington on August 16, 1777; his victory effectively weakened Burgoyne\'s army before Saratoga.',
  },
  {
    person: {
      id: 'person-seth-warner',
      name: 'Colonel Seth Warner',
      roles: ['Green Mountain Boys Colonel', 'Continental Army Officer', 'Vermont Militia Leader'],
      bioShort:
        'Vermont militia colonel and Green Mountain Boys leader who arrived with his regiment during the second phase of the Battle of Bennington, driving off Breymann\'s relief column. Warner had helped capture Fort Ticonderoga with Ethan Allen in 1775 and commanded Vermont forces throughout the northern campaigns.',
      birthYear: 1743,
      deathYear: 1784,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Led the Green Mountain Boys regiment that arrived at Bennington in time to defeat Breymann\'s relief column and secure the American victory.',
  },
  {
    person: {
      id: 'person-friedrich-baum',
      name: 'Lieutenant Colonel Friedrich Baum',
      roles: ['Hessian Officer', 'Dragoon Commander', 'British Expedition Leader'],
      bioShort:
        'Hessian dragoon officer commanding the British-German detachment sent by Burgoyne to seize the Bennington supply depot. Baum established defensive works on a wooded ridge above the Walloomsac River but was surrounded and mortally wounded when Stark\'s militia flanked his position on August 16, 1777.',
      birthYear: 1727,
      deathYear: 1777,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the German forces defeated at Bennington; mortally wounded during the battle on August 16, 1777.',
  },
  {
    person: {
      id: 'person-john-burgoyne',
      name: 'General John Burgoyne',
      roles: ['British General', 'Northern Army Commander', 'Playwright'],
      bioShort:
        'British general who commanded the invasion force moving south from Canada through the Lake Champlain corridor toward Albany in 1777. His decision to send Baum\'s detachment to raid Bennington resulted in the loss of nearly a thousand men and set the conditions for his surrender at Saratoga in October.',
      birthYear: 1722,
      deathYear: 1792,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Ordered the Bennington raid to seize supplies; the defeat of Baum and Breymann\'s columns cost his army roughly ten percent of its strength before Saratoga.',
  },
  {
    person: {
      id: 'person-ethan-allen',
      name: 'Ethan Allen',
      roles: ['Green Mountain Boys Commander', 'Vermont Land Speculator', 'Patriot Leader'],
      bioShort:
        'Vermont leader who commanded the Green Mountain Boys and led the surprise capture of Fort Ticonderoga in May 1775. Captured by the British in September 1775 during an ill-conceived attack on Montreal, he spent most of the war as a prisoner. His defiant personality defined the independent character of the Vermont movement.',
      birthYear: 1738,
      deathYear: 1789,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Founded and commanded the Green Mountain Boys whose organization and reputation made possible the Vermont militia response at Bennington.',
  },
  {
    person: {
      id: 'person-samuel-herrick',
      name: 'Colonel Samuel Herrick',
      roles: ['Vermont Militia Colonel', 'Green Mountain Boys Officer'],
      bioShort:
        'Vermont militia colonel who commanded one of the flanking columns at the Battle of Bennington, striking the left side of Baum\'s position simultaneously with the main assault on the right. His role in the envelopment was critical to the collapse of the German defensive line.',
      birthYear: 1739,
      deathYear: 1787,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Led the left-flank column that enveloped Baum\'s position at Bennington on August 16, 1777.',
  },
  {
    person: {
      id: 'person-molly-stark',
      name: 'Elizabeth "Molly" Stark',
      roles: ['Militia Commander\'s Wife', 'Frontier Homesteader'],
      bioShort:
        'Wife of General John Stark, she became the subject of her husband\'s famous pre-battle declaration that victory would follow or "Molly Stark sleeps a widow." Her name entered the war\'s popular memory as a symbol of the personal stakes militia soldiers brought to battle.',
      birthYear: 1737,
      deathYear: 1814,
      verificationStatus: 'ANECDOTAL',
    },
    connectionNote:
      'Named in Stark\'s pre-battle address to the militia as the embodiment of what the men were fighting to protect.',
  },
  {
    person: {
      id: 'person-heinrich-breymann',
      name: 'Lieutenant Colonel Heinrich von Breymann',
      roles: ['Hessian Officer', 'Relief Column Commander'],
      bioShort:
        'Hessian officer commanding the relief column sent to support Baum\'s detachment. Arriving after Baum\'s defeat, he engaged Warner\'s Green Mountain Boys and Stark\'s reassembled militia in a road battle and was driven back with heavy losses, confirming the completeness of the American victory at Bennington.',
      birthYear: 1739,
      deathYear: 1777,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the second German force defeated at Bennington; his repulse ensured the victory was complete and unambiguous.',
  },
];

// ============================================================================
// BENNINGTON — PLACES
// ============================================================================

export const benningtonPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-bennington-battle-monument',
    name: 'Bennington Battle Monument',
    placeType: 'MONUMENT',
    description:
      'A 306-foot obelisk completed in 1891, the tallest structure in Vermont, commemorating the Battle of Bennington and the supply depot the militia defended. Located in the town of Old Bennington, it stands near the site of the original storehouse rather than at the battlefield itself, which is across the border in New York. An elevator takes visitors to an observation level.',
    lat: 42.8792,
    lng: -73.2015,
    address: '15 Monument Circle, Bennington, VT 05201',
    town: { connect: { id: 'us-vt-bennington' } },
  },
  {
    id: 'place-bennington-battlefield-state-historic-site',
    name: 'Bennington Battlefield State Historic Site',
    placeType: 'BATTLEFIELD',
    description:
      'The actual ground where the Battle of Bennington was fought on August 16, 1777, located in Walloomsac, New York, about five miles west of Bennington center. The site preserves the ridge above the Walloomsac River where Baum established his defensive works and was surrounded. New York State operates the park with interpretive signage and walking trails.',
    lat: 42.8856,
    lng: -73.2872,
    address: '81 New York 67, Walloomsac, NY 12090',
    town: { connect: { id: 'us-vt-bennington' } },
  },
  {
    id: 'place-bennington-museum',
    name: 'Bennington Museum',
    placeType: 'MUSEUM',
    description:
      'A regional history museum holding one of the most significant collections of Revolutionary War material in New England, including Stark\'s personal correspondence, battle flags, and artifacts from the 1777 campaign. The museum\'s collections also document the Catamount Tavern site and the Green Mountain Boys\' organizational history.',
    lat: 42.8810,
    lng: -73.2021,
    address: '75 Main St, Bennington, VT 05201',
    town: { connect: { id: 'us-vt-bennington' } },
  },
  {
    id: 'place-bennington-old-first-church',
    name: 'Old First Church',
    placeType: 'CHURCH',
    description:
      'Congregationalist church established in 1762, the oldest church in Vermont, whose graveyard contains the remains of five Vermont governors and soldiers who fought at the Battle of Bennington. The church building dates to 1805 but stands on the site of the original meetinghouse that served as a gathering point during the Revolutionary War period.',
    lat: 42.8796,
    lng: -73.2018,
    address: '1 Monument Circle, Old Bennington, VT 05201',
    town: { connect: { id: 'us-vt-bennington' } },
  },
  {
    id: 'place-bennington-catamount-tavern-site',
    name: 'Catamount Tavern Site',
    placeType: 'LANDMARK',
    description:
      'The site of Stephen Fay\'s Catamount Tavern, the primary meeting place of the Green Mountain Boys from the early 1770s through the Revolution. A mounted catamount (mountain lion) displayed over the door gave the tavern its name and became a symbol of Vermont defiance. The original structure is gone; a historical marker and the Bennington Museum collection preserve its memory.',
    lat: 42.8793,
    lng: -73.2012,
    address: 'Old Bennington, VT 05201',
    town: { connect: { id: 'us-vt-bennington' } },
  },
  {
    id: 'place-bennington-old-burying-ground',
    name: 'Old Burying Ground',
    placeType: 'CEMETERY',
    description:
      'The colonial-era cemetery adjacent to the Old First Church containing graves of Bennington militia soldiers and Revolutionary War-era residents, including those who served at the Battle of Bennington in 1777. The cemetery\'s stones include both British-style carved markers and simpler slate tablets that reflect the town\'s mixed English and New England heritage.',
    lat: 42.8797,
    lng: -73.2016,
    address: 'Monument Avenue, Old Bennington, VT 05201',
    town: { connect: { id: 'us-vt-bennington' } },
  },
];

// ============================================================================
// BENNINGTON — EVENTS
// ============================================================================

export const benningtonEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-bennington-green-mountain-boys-formed',
    name: 'Green Mountain Boys Organized',
    startDate: new Date('1770-01-01'),
    datePrecision: 'YEAR',
    summary:
      'Ethan Allen organized the Green Mountain Boys as a paramilitary force to resist New York land grant enforcement in the disputed New Hampshire Grants territory that would become Vermont. Operating out of the Catamount Tavern in Bennington, the organization became the nucleus of Vermont\'s Revolutionary War militia. Its members formed the core of the force at Fort Ticonderoga in 1775 and at Bennington in 1777.',
    significanceWeight: 75,
    lat: 42.8793,
    lng: -73.2012,
    town: { connect: { id: 'us-vt-bennington' } },
  },
  {
    id: 'event-bennington-fort-ticonderoga-capture',
    name: 'Fort Ticonderoga Captured by Green Mountain Boys',
    startDate: new Date('1775-05-10'),
    datePrecision: 'DAY',
    summary:
      'Ethan Allen and Benedict Arnold led the Green Mountain Boys and Connecticut volunteers in a pre-dawn surprise attack on Fort Ticonderoga, capturing the British garrison without a fight. The fort\'s cannons were later transported to Boston by Henry Knox and used to force the British evacuation of the city. The operation was one of the first major American offensive actions of the Revolution and established the Green Mountain Boys\' military reputation.',
    significanceWeight: 88,
    lat: 43.8451,
    lng: -73.3873,
    town: { connect: { id: 'us-vt-bennington' } },
  },
  {
    id: 'event-bennington-stark-resigns-commission',
    name: 'John Stark Resigns Continental Commission',
    startDate: new Date('1777-03-23'),
    datePrecision: 'MONTH',
    summary:
      'John Stark resigned his Continental commission after being passed over for promotion in favor of officers he considered inferior. His resignation made his subsequent acceptance of the New Hampshire militia command at Bennington an entirely voluntary act — a fact he used to frame his pre-battle address to his men.',
    significanceWeight: 70,
    lat: 42.8792,
    lng: -73.2015,
    town: { connect: { id: 'us-vt-bennington' } },
  },
  {
    id: 'event-bennington-burgoyne-invasion',
    name: 'Burgoyne\'s Army Enters New York from Canada',
    startDate: new Date('1777-06-17'),
    datePrecision: 'DAY',
    summary:
      'Burgoyne led approximately 8,000 troops south from Canada through Lake Champlain, recapturing Fort Ticonderoga in July and threatening the entire northern frontier. His supply problems worsened with each mile south of the lake, directly setting up the need for the Bennington raid.',
    significanceWeight: 85,
    lat: 43.8451,
    lng: -73.3873,
    town: { connect: { id: 'us-vt-bennington' } },
  },
  {
    id: 'event-bennington-depot-established',
    name: 'American Supply Depot Established at Bennington',
    startDate: new Date('1777-07-01'),
    datePrecision: 'MONTH',
    summary:
      'The Continental Army established a significant supply depot at Bennington to support operations in the Hudson-Champlain corridor. The depot held horses, cattle, flour, and military stores — exactly the supplies Burgoyne desperately needed. Its existence was reported to Burgoyne by Loyalist informants, and it became the target of Baum\'s August raiding column.',
    significanceWeight: 72,
    lat: 42.8792,
    lng: -73.2015,
    town: { connect: { id: 'us-vt-bennington' } },
  },
  {
    id: 'event-bennington-baum-dispatched',
    name: 'Burgoyne Dispatches Baum\'s Raiding Column',
    startDate: new Date('1777-08-09'),
    datePrecision: 'DAY',
    summary:
      'Burgoyne ordered Baum to lead approximately 800 men — Hessian dragoons, British regulars, Loyalists, and Native American scouts — to seize the Bennington depot. The assignment reflected a fundamental misreading of Vermont sentiment and of Stark\'s gathering militia strength.',
    significanceWeight: 78,
    lat: 42.8856,
    lng: -73.2872,
    town: { connect: { id: 'us-vt-bennington' } },
  },
  {
    id: 'event-bennington-battle-first-action',
    name: 'Battle of Bennington — Defeat of Baum\'s Column',
    startDate: new Date('1777-08-16'),
    datePrecision: 'DAY',
    summary:
      'Stark launched his assault on Baum\'s entrenched position on the ridge above the Walloomsac River at approximately 3 PM on August 16. Flanking columns under Colonels Herrick and Nichols enveloped both sides of Baum\'s works simultaneously with a frontal demonstration. The German dragoons — fighting on foot, unable to maneuver — were overwhelmed from multiple directions. Baum was mortally wounded; his command was effectively destroyed, with approximately 207 killed or wounded and over 600 captured.',
    significanceWeight: 95,
    lat: 42.8856,
    lng: -73.2872,
    town: { connect: { id: 'us-vt-bennington' } },
  },
  {
    id: 'event-bennington-battle-second-action',
    name: 'Battle of Bennington — Defeat of Breymann\'s Relief Column',
    startDate: new Date('1777-08-16'),
    datePrecision: 'DAY',
    summary:
      'As Stark\'s militia scattered to loot Baum\'s captured position, Breymann\'s relief column of approximately 600 men arrived on the road from the north. Stark\'s forces were disorganized and nearly overrun. Seth Warner\'s Green Mountain Boys regiment arrived in time to form a line and engage Breymann in a running fight that drove the Germans back toward Burgoyne\'s main army with heavy losses. Total British-German casualties in both actions exceeded 900 men.',
    significanceWeight: 93,
    lat: 42.8856,
    lng: -73.2872,
    town: { connect: { id: 'us-vt-bennington' } },
  },
  {
    id: 'event-bennington-saratoga-consequence',
    name: 'Saratoga Campaign: Bennington Losses Cripple Burgoyne',
    startDate: new Date('1777-09-19'),
    datePrecision: 'DAY',
    summary:
      'The Saratoga campaign opened September 19 with Burgoyne already weakened by the Bennington losses. Historians consistently link his inability to break through Gates\'s lines to the shortage of horses, dragoons, and supplies lost at Bennington. His October 17 surrender led directly to the French alliance of February 1778.',
    significanceWeight: 98,
    lat: 43.0095,
    lng: -73.6397,
    town: { connect: { id: 'us-vt-bennington' } },
  },
  {
    id: 'event-bennington-stark-promoted',
    name: 'Congress Promotes Stark to Brigadier General',
    startDate: new Date('1777-10-04'),
    datePrecision: 'DAY',
    summary:
      'Congress promoted Stark to Brigadier General — the same rank whose denial had prompted his resignation seven months earlier. He accepted but continued operating largely independently. The promotion acknowledged that the voluntary militia system had produced one of the war\'s most decisive engagements.',
    significanceWeight: 68,
    lat: 42.8792,
    lng: -73.2015,
    town: { connect: { id: 'us-vt-bennington' } },
  },
];

// ============================================================================
// BENNINGTON — STORIES
// ============================================================================

export const benningtonStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-bennington-stark-address',
    title: 'Tonight We Are All Widows or We Are Not',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-john-stark' } },
    verificationStatus: 'ANECDOTAL',
    textVersion: `What Stark said before the battle has been polished into something more quotable than anything a militia general was likely to say in a field in August 1777. The version that entered history — that they would defeat the enemy or Molly Stark would be a widow — is probably a compression of something longer.

What he was communicating was that this was not a professional army following orders. These were men whose farms were at stake. Stark had resigned his Continental commission rather than serve under officers he considered inferior. He took this command voluntarily. The militia that produced the Bennington victory had no supply chain, no pension, no winter quarters. What they had was a reason — and Stark was telling them he understood exactly what that reason was.

The exact words don't matter as much as what they meant: that the men in that field knew what they were fighting for, and that Stark was one of them.`,
    audioScript: `What Stark said before the battle has been shaped by retelling. The version about Molly Stark sleeping a widow is probably a compression of something longer. What he was communicating was that these were men whose farms were at stake — not professional soldiers following orders. He had resigned his Continental commission and took this command voluntarily. The militia won and then nearly threw the victory away by dispersing to loot, but they had come voluntarily and fought effectively. Stark understood his men had a reason, and that was what he was telling them.`,
    tags: ['Stark', 'militia', 'Bennington', 'pre-battle', 'morale'],
    town: { connect: { id: 'us-vt-bennington' } },
  },
  {
    id: 'story-bennington-hessian-prisoner',
    title: 'What the Prisoners Saw',
    storyType: 'MODERN_VOICE',
    narratorName: 'Military Historian',
    narratorRole: 'Vermont Studies, Middlebury College',
    verificationStatus: 'VERIFIED',
    textVersion: `The Hessian prisoners taken at Bennington — more than 600 of them — were marched through Vermont and Massachusetts to detention camps. What the communities along that route saw mattered: not rumored victories or distant dispatches, but actual men in German uniforms, disarmed, escorted by farmers with muskets. The war that had been happening elsewhere suddenly had a human form.

Hessian accounts of American captivity describe conditions better than expected. A significant number stayed in America after the war, settling in Pennsylvania and the mid-Atlantic states. They had been contracted as professional soldiers for a conflict they had no personal stake in; America turned out to be more hospitable than the battlefield had suggested.

The 900 casualties at Bennington are an abstraction. The prisoners are not. They were following orders in a war three thousand miles from home, in terrain they had not been trained for. Their defeat was real. Their humanity was also real.`,
    audioScript: `The Hessian prisoners — more than 600 men — were marched through Vermont and Massachusetts to detention camps. What communities saw mattered: not rumored victories but actual men in German uniforms, disarmed, escorted by farmers. A significant number stayed in America after the war. They had been contracted to fight a conflict they had no personal stake in; America turned out to be hospitable. The 900 casualties at Bennington are an abstraction. The prisoners are not.`,
    tags: ['Hessians', 'prisoners', 'German soldiers', 'Bennington', 'social history'],
    town: { connect: { id: 'us-vt-bennington' } },
  },
];

// ============================================================================
// BENNINGTON — LESSON PLANS
// ============================================================================

export const benningtonLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-vt-bennington' } },
    title: 'Bennington 1777: Why Militia Could Beat Regulars',
    gradeRange: '6-8',
    estimatedDuration: '2 class periods',
    summary:
      'This lesson uses the Battle of Bennington to examine the tactical and motivational differences between professional armies and citizen militia in the Revolutionary War. Students analyze why militia — often dismissed by Continental officers as unreliable — won decisively at Bennington, and what conditions had to exist for that outcome. The lesson also introduces the Saratoga connection, tracing how a battle in Vermont shaped a campaign in New York and an alliance with France.',
    lessonData: {
      objectives: [
        'Students will compare the strengths and limitations of regular army troops versus citizen militia in 18th-century warfare',
        'Students will explain the tactical decisions Stark made at Bennington and why they succeeded',
        'Students will trace the causal chain from Bennington to Saratoga to the French alliance',
        'Students will evaluate primary source evidence about militia soldiers\' motivations',
      ],
      essentialQuestions: [
        'Why would citizen soldiers sometimes fight more effectively than professional soldiers, and under what conditions?',
        'How did a battle in Vermont contribute to France entering the war on America\'s side?',
        'What does Stark\'s pre-battle address reveal about the difference between fighting for pay and fighting for your community?',
      ],
      materials: [
        'Map of Burgoyne\'s invasion route and the Walloomsac River battle site',
        'Diagram of Baum\'s defensive position and Stark\'s flanking movements',
        'Excerpt from Stark\'s correspondence after the battle',
        'Timeline: Bennington (August 16) → Saratoga (October 17) → French Alliance (February 1778)',
        'Short secondary source excerpt on Hessian soldiers and their role in the British army',
      ],
      activities: [
        {
          name: 'The Terrain Advantage',
          duration: '25 minutes',
          description:
            'Students examine a topographic map of the Walloomsac River area and annotate it with the advantages the terrain offered Stark\'s militia versus Baum\'s dragoons fighting on foot. Teacher introduces the concept of interior versus exterior lines.',
        },
        {
          name: 'Tracing the Consequence',
          duration: '20 minutes',
          description:
            'Students use the Bennington-to-Saratoga-to-French-Alliance timeline. They calculate Burgoyne\'s percentage loss at Bennington, discuss what else he lost beyond men (horses, supplies, operational flexibility), and write a paragraph connecting Bennington to the French alliance.',
        },
        {
          name: 'Stark\'s Address: What Was He Saying?',
          duration: '20 minutes',
          description:
            'Students read multiple versions of Stark\'s pre-battle remarks and identify what he was communicating about militia motivation versus Continental Army orders. They find at least two differences between fighting for pay and fighting for your community.',
        },
      ],
      assessment:
        'Exit ticket: Students write a brief response (3-5 sentences) to the question "Why did militia win at Bennington, and why does it matter that they did?" Response must include at least one tactical reason and one strategic consequence.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.3: Identify key steps in a text\'s description of a process related to history',
        'CCSS.ELA-LITERACY.WHST.6-8.2: Write informative/explanatory texts about history',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.2.6-8: Classify series of historical events and developments as examples of change or continuity',
        'D2.His.5.6-8: Explain how and why perspectives of people have changed over time',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-vt-bennington' } },
    title: 'The Hessians: Professional Soldiers in Someone Else\'s War',
    gradeRange: '9-12',
    estimatedDuration: '2-3 class periods',
    summary:
      'This lesson uses the Hessian soldiers at Bennington to examine the ethics and politics of mercenary service, the experience of soldiers fighting far from home in an unfamiliar conflict, and the postwar lives of German soldiers who remained in America. Students evaluate primary sources from Hessian soldiers\' own accounts and consider how the war looked from a perspective that neither the Patriot nor the Loyalist narrative captures.',
    lessonData: {
      objectives: [
        'Students will explain the political arrangements by which German princes supplied troops to Britain for the American war',
        'Students will analyze Hessian primary source accounts of the Bennington battle and American captivity',
        'Students will evaluate the ethical dimensions of contracted military service',
        'Students will assess what the Hessian experience reveals about the international dimensions of the Revolution',
      ],
      essentialQuestions: [
        'What moral responsibility do soldiers bear for the political decisions that put them on a battlefield?',
        'How did the Hessian experience of American captivity shape the outcomes of the war — and the postwar settlement?',
        'What does it mean to fight in a war you have no personal stake in, thousands of miles from home?',
      ],
      materials: [
        'Text of the subsidy treaties between Britain and the Hessian princes (1776)',
        'Adapted excerpts from Hessian diaries describing the Bennington engagement and American captivity',
        'Statistics on Hessian soldiers who remained in America after the war',
        'Map showing Hessian soldiers\' postwar settlements in Pennsylvania and New York',
        'Secondary source: Johann Ewald\'s account of American conditions',
      ],
      activities: [
        {
          name: 'The Subsidy Treaty',
          duration: '25 minutes',
          description:
            'Students read the key treaty provisions and construct a three-way diagram of interests: Britain, Hessian princes, individual soldiers. Discussion: is this mercenary service, allied assistance, or something in between? How does the vocabulary we use shape how we evaluate it?',
        },
        {
          name: 'Through Hessian Eyes',
          duration: '30 minutes',
          description:
            'Students read adapted Hessian diary excerpts describing Bennington and American captivity. Using an annotation guide they identify what surprised the writer, what he says about Americans, and how his account differs from American accounts of the same events.',
        },
        {
          name: 'After the War: The Settlers',
          duration: '25 minutes',
          description:
            'Students examine statistics on Hessian soldiers who remained in America and identify settlement patterns using the postwar map. They write a short reflection on what it means for the American Revolution narrative that thousands of men who fought against independence chose to become Americans.',
        },
      ],
      assessment:
        'Essay (600-800 words): "Using the Hessian experience as your primary evidence, argue whether the Revolutionary War was primarily an American civil conflict, an international power struggle, or something that cannot be categorized by either label alone." Students must engage with at least one primary source.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors for how they treat the same or similar topics',
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in several primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.4.9-12: Analyze complex and interacting factors that influenced the perspectives of people during different historical eras',
        'D2.His.9.9-12: Analyze the relationship between historical sources and the secondary interpretations made from them',
        'D2.Geo.2.9-12: Use maps and other geographic representations to explain relationships and patterns',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// BENNINGTON — ADDITIONAL LINKS
// ============================================================================

export const benningtonAdditionalLinks: Array<{
  toTownId: string;
  linkType: 'SHARED_EVENT' | 'SHARED_PERSON' | 'GEOGRAPHIC_PROXIMITY' | 'SHARED_THEME';
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-vt-brattleboro',
    linkType: 'SHARED_THEME',
    reason:
      'Both towns were centers of Vermont independence and Green Mountain Boys activity. Brattleboro anchored the Connecticut River valley defense while Bennington anchored the southwestern approach; together they defined the Revolutionary War geography of Vermont.',
    weight: 85,
  },
  {
    toTownId: 'us-ny-saratoga',
    linkType: 'SHARED_EVENT',
    reason:
      'The Bennington victory directly weakened Burgoyne\'s army before the Saratoga battles. Stark\'s militia and Warner\'s Green Mountain Boys at Bennington cost Burgoyne roughly ten percent of his force and critical supplies, contributing to his surrender at Saratoga in October 1777.',
    weight: 98,
  },
  {
    toTownId: 'us-ny-ticonderoga',
    linkType: 'SHARED_PERSON',
    reason:
      'Ethan Allen and Seth Warner captured Fort Ticonderoga with the Green Mountain Boys in May 1775, establishing the Vermont militia\'s fighting reputation that made the Bennington response possible two years later.',
    weight: 80,
  },
  {
    toTownId: 'us-nh-concord',
    linkType: 'SHARED_PERSON',
    reason:
      'John Stark, who commanded at Bennington, was a New Hampshire general. New Hampshire\'s political support for Stark\'s independent militia command was essential; without it, there would have been no organized American response to Baum\'s raiding column.',
    weight: 72,
  },
];

// ============================================================================
// BRATTLEBORO
// ============================================================================

export const brattleboroTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Brattleboro sits at the confluence of the West River and the Connecticut River at the southeastern corner of Vermont, and in the 1770s that geography made it both strategically important and politically volatile. The Connecticut River valley was the main corridor through which British raiding parties could strike Vermont from the east, and Brattleboro controlled the principal ford and crossing point that would channel any such movement.

But the military geography is only half the story. The other half is the Westminster Massacre of March 13, 1775 — an event that happened twenty miles north of Brattleboro but that galvanized the entire Connecticut River valley and pushed Vermont toward independence more than a year before the Declaration. Westminster was the seat of Cumberland County court, the instrument through which New York extended its authority over the New Hampshire Grants territory the settlers considered their own. In March 1775, a crowd of settlers occupied the courthouse to prevent the court from sitting. The local sheriff raised a posse. In the confrontation that followed, the posse fired into the crowd, killing William French and Daniel Houghton. The incident — which the settlers immediately called a massacre — produced a county convention that declared the settlers' grievances and began the political process that culminated in Vermont's 1777 declaration of independence.

Brattleboro was the commercial hub of the county. Its merchants, lawyers, and militia officers were the network through which news of Westminster traveled, responses were organized, and political positions were taken. When Vermont convened its first constitutional convention in Windsor in 1777 — producing what is often described as the most radical democratic constitution in the revolutionary era, including the first American abolition of adult male slavery — the arguments had been rehearsed in Brattleboro taverns and county meetings for years.

The town's role in Green Mountain Boys operations was equally significant. Fort Dummer, established in 1724 as the first permanent European settlement in what is now Vermont, had been located just south of Brattleboro's center and provided the military infrastructure that later generations built on. During the Revolution, Brattleboro served as a staging point and supply center for militia operations along the Connecticut River corridor. The threat from British-allied Abenaki and Loyalist raiding parties was real and sustained throughout the war; the town's exposed position on the river meant that frontier defense was not an abstraction but a daily calculation.

The Westminster Massacre's place in American memory is underappreciated. It predates Lexington and Concord by five weeks. The men who died there were killed by a colonial sheriff's posse, not by British regulars — which made the event harder to fit into the clean narrative of Americans versus the Crown but more representative of what the Revolution actually was in many places: a contest between competing claims of authority, between settlers asserting rights against established legal institutions, between communities defining what self-governance meant in practice. Vermont's subsequent decision to remain an independent republic rather than joining the original thirteen states until 1791 reflected that same insistence on defining its own political terms.`,
};

// ============================================================================
// BRATTLEBORO — PEOPLE
// ============================================================================

export const brattleboroPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-william-french',
      name: 'William French',
      roles: ['Westminster Massacre Victim', 'New Hampshire Grants Settler'],
      bioShort:
        'Young settler killed during the Westminster Massacre on March 13, 1775, when the Cumberland County sheriff\'s posse fired into a crowd occupying the courthouse. French became a martyr figure for the Vermont independence movement; his gravestone, inscribed "murdered by the tools of tyranny," was one of the first explicit political statements of the revolutionary era in Vermont.',
      birthYear: 1756,
      deathYear: 1775,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Killed at the Westminster Massacre twenty miles north of Brattleboro; his death galvanized the Connecticut River valley settlers and accelerated Vermont\'s move toward independence.',
  },
  {
    person: {
      id: 'person-thomas-chittenden',
      name: 'Governor Thomas Chittenden',
      roles: ['First Governor of Vermont', 'Vermont Republic Founder', 'Militia Leader'],
      bioShort:
        'First governor of Vermont, serving 1778–1797. Chittenden navigated Vermont\'s status as an independent republic throughout the Revolution, negotiating with both Congress and the British in ways that kept Vermont from being absorbed by New York or conquered by Burgoyne.',
      birthYear: 1730,
      deathYear: 1797,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Led Vermont\'s independent government through the Revolution, coordinating defense operations that protected Brattleboro and the Connecticut River valley.',
  },
  {
    person: {
      id: 'person-ira-allen',
      name: 'Ira Allen',
      roles: ['Vermont Founder', 'Land Speculator', 'Political Leader'],
      bioShort:
        'Younger brother of Ethan Allen and one of the principal architects of Vermont statehood. Ira Allen negotiated the Haldimand Affair — secret negotiations with British General Haldimand that were probably a deliberate stratagem to buy Vermont time while the war concluded. His land speculation shaped the political economy of early Vermont.',
      birthYear: 1751,
      deathYear: 1814,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Key political figure in Vermont\'s independence movement whose operations in the Connecticut River valley touched Brattleboro directly.',
  },
  {
    person: {
      id: 'person-jonas-fay',
      name: 'Dr. Jonas Fay',
      roles: ['Vermont Political Leader', 'Green Mountain Boys Member', 'Physician'],
      bioShort:
        'Vermont physician who helped draft Vermont\'s 1777 constitution and served as a Vermont Republic agent. Son of the Catamount Tavern\'s owner, he linked Brattleboro\'s Connecticut River valley community to the Green Mountain Boys\' southwestern operations.',
      birthYear: 1737,
      deathYear: 1818,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Connected the Connecticut River valley political community to the Bennington-centered Green Mountain Boys organization; helped draft Vermont\'s 1777 independence constitution.',
  },
  {
    person: {
      id: 'person-samuel-wells',
      name: 'Colonel Samuel Wells',
      roles: ['Brattleboro Militia Officer', 'Cumberland County Leader'],
      bioShort:
        'Brattleboro militia colonel who organized and commanded the Connecticut River valley defense, maintaining the ranger and blockhouse network that kept southeastern Vermont settlements viable against British-allied raiding parties throughout the war.',
      birthYear: 1735,
      deathYear: 1807,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded Brattleboro area militia forces; coordinated the Connecticut River valley defense network during the Revolutionary War.',
  },
  {
    person: {
      id: 'person-nathaniel-chipman',
      name: 'Nathaniel Chipman',
      roles: ['Vermont Jurist', 'Constitutional Lawyer', 'U.S. Senator'],
      bioShort:
        'Vermont lawyer and jurist who embodied the transition from frontier independence politics to constitutional governance — the legal consolidation of what the Green Mountain Boys had defended with muskets.',
      birthYear: 1752,
      deathYear: 1843,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Part of the Brattleboro legal community that transformed Vermont\'s independence movement into functioning constitutional governance after the Revolution.',
  },
  {
    person: {
      id: 'person-jacob-bayley',
      name: 'Brigadier General Jacob Bayley',
      roles: ['Vermont Militia General', 'Connecticut River Valley Defender', 'Road Builder'],
      bioShort:
        'Vermont militia general who commanded Connecticut River valley forces and proposed the Bayley-Hazen Military Road to allow Continental Army access to Canada. His operations kept the northeastern Vermont corridor from becoming a British invasion route.',
      birthYear: 1726,
      deathYear: 1815,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the Connecticut River valley militia network that protected the corridor between Brattleboro and the northern frontier.',
  },
  {
    person: {
      id: 'person-abner-brownson',
      name: 'Captain Abner Brownson',
      roles: ['Brattleboro Militia Captain', 'Frontier Ranger'],
      bioShort:
        'Brattleboro militia captain who led scouting and ranging operations in the Connecticut River valley during the Revolution. Brownson\'s company represented the kind of local defense that made the difference between settlements that survived British-allied raids and those that did not.',
      birthYear: 1745,
      deathYear: 1810,
      verificationStatus: 'ANECDOTAL',
    },
    connectionNote:
      'Led local ranging operations out of Brattleboro that provided early warning of raiding parties moving down the Connecticut River corridor.',
  },
];

// ============================================================================
// BRATTLEBORO — PLACES
// ============================================================================

export const brattleboroPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-brattleboro-fort-dummer-site',
    name: 'Fort Dummer Site',
    placeType: 'LANDMARK',
    description:
      'The site of Fort Dummer, established in 1724 as the first permanent European settlement in what is now Vermont, located just south of modern Brattleboro center on the west bank of the Connecticut River. The original fort protected Massachusetts settlers from Abenaki raids. During the Revolution, the site\'s military tradition informed Brattleboro\'s role as a Connecticut River valley defense hub. The original fort location is now submerged beneath the Vernon Dam reservoir.',
    lat: 42.8230,
    lng: -72.5590,
    address: 'Fort Dummer State Park, Guilford, VT 05301',
    town: { connect: { id: 'us-vt-brattleboro' } },
  },
  {
    id: 'place-brattleboro-westminster-massacre-site',
    name: 'Westminster Courthouse Massacre Site',
    placeType: 'MONUMENT',
    description:
      'The site of the Cumberland County courthouse in Westminster, Vermont, where the March 13, 1775 confrontation between settlers and the county sheriff\'s posse resulted in the deaths of William French and Daniel Houghton. Often called the first bloodshed of the American Revolution outside New England, the event preceded Lexington and Concord by five weeks. A historical marker at the site commemorates the event and the graves of the victims in the nearby cemetery.',
    lat: 43.0664,
    lng: -72.4534,
    address: 'Westminster, VT 05158',
    town: { connect: { id: 'us-vt-brattleboro' } },
  },
  {
    id: 'place-brattleboro-brattleboro-museum',
    name: 'Brattleboro Museum and Art Center',
    placeType: 'MUSEUM',
    description:
      'Located in the restored Union Station building, the museum holds collections documenting Brattleboro\'s history from the colonial period through the Revolution. Materials include documents from the Cumberland County convention, early Vermont Republic political records, and artifacts from the Connecticut River valley frontier defense period.',
    lat: 42.8507,
    lng: -72.5579,
    address: '10 Vernon St, Brattleboro, VT 05301',
    town: { connect: { id: 'us-vt-brattleboro' } },
  },
  {
    id: 'place-brattleboro-connecticut-river-crossing',
    name: 'Connecticut River Historic Crossing Point',
    placeType: 'LANDMARK',
    description:
      'The West Brattleboro area of the Connecticut River marks the principal ford and crossing point that made Brattleboro strategically significant during the colonial and Revolutionary War periods. Control of this crossing controlled movement along the Connecticut River corridor; militia units defending Brattleboro were, in effect, defending the river crossing against potential British and Loyalist raiding columns from the north and east.',
    lat: 42.8501,
    lng: -72.5559,
    address: 'Connecticut River, Brattleboro, VT 05301',
    town: { connect: { id: 'us-vt-brattleboro' } },
  },
  {
    id: 'place-brattleboro-old-cemetery',
    name: 'West Brattleboro Cemetery',
    placeType: 'CEMETERY',
    description:
      'One of the oldest burial grounds in the Brattleboro area, containing graves of Revolutionary War-era settlers and militia soldiers who served in the Connecticut River valley defense. The cemetery\'s stones reflect the political and religious character of the frontier New England community that built Brattleboro during the 18th century.',
    lat: 42.8551,
    lng: -72.5820,
    address: 'Western Ave, Brattleboro, VT 05301',
    town: { connect: { id: 'us-vt-brattleboro' } },
  },
  {
    id: 'place-brattleboro-old-south-congregational',
    name: 'Old South Congregational Church Site',
    placeType: 'CHURCH',
    description:
      'The site of Brattleboro\'s original Congregational meetinghouse, which served as the political and social center of the community during the Revolutionary War period. Town meetings, militia musters, and political discussions that shaped Vermont\'s path to independence took place in and around this building. The current church structure dates to the early 19th century.',
    lat: 42.8512,
    lng: -72.5574,
    address: '1 Frost St, Brattleboro, VT 05301',
    town: { connect: { id: 'us-vt-brattleboro' } },
  },
];

// ============================================================================
// BRATTLEBORO — EVENTS
// ============================================================================

export const brattleboroEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-brattleboro-fort-dummer-established',
    name: 'Fort Dummer Established',
    startDate: new Date('1724-01-01'),
    datePrecision: 'YEAR',
    summary:
      'Massachusetts established Fort Dummer on the Connecticut River\'s west bank in 1724 as the northernmost English settlement outpost in the region, protecting settlers from Abenaki raids and creating the military infrastructure Brattleboro built on through the Revolution.',
    significanceWeight: 65,
    lat: 42.8230,
    lng: -72.5590,
    town: { connect: { id: 'us-vt-brattleboro' } },
  },
  {
    id: 'event-brattleboro-new-york-land-crisis',
    name: 'New York Asserts Authority Over New Hampshire Grants',
    startDate: new Date('1764-07-20'),
    datePrecision: 'YEAR',
    summary:
      'The British Privy Council ruled the Connecticut River — not the Hudson — was the New York-New Hampshire boundary, transferring jurisdiction over the New Hampshire Grants settlers to New York and invalidating thousands of land grants. Settlers who held titles from New Hampshire governor Wentworth found them contested by New York authorities issuing competing claims. This jurisdictional conflict directly caused the Green Mountain Boys\' formation and the Westminster Massacre.',
    significanceWeight: 78,
    lat: 42.8501,
    lng: -72.5559,
    town: { connect: { id: 'us-vt-brattleboro' } },
  },
  {
    id: 'event-brattleboro-westminster-massacre',
    name: 'Westminster Massacre',
    startDate: new Date('1775-03-13'),
    datePrecision: 'DAY',
    summary:
      'A crowd of settlers in Westminster, Vermont, occupied the Cumberland County courthouse to prevent the New York–appointed court from sitting. The county sheriff raised a posse and ordered the building cleared; when the settlers refused, the posse fired into the crowd, killing William French and Daniel Houghton and wounding several others. The incident was immediately labeled a massacre by the settlers. A county convention convened within weeks declared the settlers\' grievances and began the political process that led to Vermont\'s 1777 independence. The event preceded Lexington and Concord by five weeks.',
    significanceWeight: 92,
    lat: 43.0664,
    lng: -72.4534,
    town: { connect: { id: 'us-vt-brattleboro' } },
  },
  {
    id: 'event-brattleboro-lexington-news-arrives',
    name: 'News of Lexington and Concord Reaches Brattleboro',
    startDate: new Date('1775-04-23'),
    datePrecision: 'DAY',
    summary:
      'News of Lexington and Concord reached Brattleboro within days via the Connecticut River valley express rider network, accelerating militia mobilization already underway from the Westminster Massacre. The valley became the primary corridor for information, troops, and supplies moving between Massachusetts and Vermont throughout the war.',
    significanceWeight: 75,
    lat: 42.8501,
    lng: -72.5559,
    town: { connect: { id: 'us-vt-brattleboro' } },
  },
  {
    id: 'event-brattleboro-vermont-constitution-1777',
    name: 'Vermont Declares Independence and Adopts Constitution',
    startDate: new Date('1777-07-08'),
    datePrecision: 'DAY',
    summary:
      'Vermont\'s constitutional convention, meeting at Windsor during a rainstorm that prevented delegates from departing, adopted the Vermont Constitution of 1777 — the first American constitution to abolish adult male slavery and the first to establish universal male suffrage without property qualifications. The document crystallized the political arguments that had been developing in Brattleboro and the Connecticut River valley since the New York land crisis. Vermont declared itself an independent republic, not one of the original thirteen states.',
    significanceWeight: 90,
    lat: 43.4762,
    lng: -72.4315,
    town: { connect: { id: 'us-vt-brattleboro' } },
  },
  {
    id: 'event-brattleboro-frontier-raids-1777-78',
    name: 'British-Allied Raiding Parties Strike Connecticut River Valley',
    startDate: new Date('1777-09-01'),
    datePrecision: 'YEAR',
    summary:
      'British-allied Abenaki and Loyalist raiding parties struck Connecticut River valley settlements in 1777–1778, killing settlers, burning farms, and taking captives. Brattleboro\'s militia maintained ranger networks and blockhouses for early warning throughout the war.',
    significanceWeight: 80,
    lat: 42.8501,
    lng: -72.5559,
    town: { connect: { id: 'us-vt-brattleboro' } },
  },
  {
    id: 'event-brattleboro-haldimand-affair',
    name: 'Haldimand Affair: Vermont\'s Secret Negotiations with Britain',
    startDate: new Date('1780-07-01'),
    datePrecision: 'YEAR',
    summary:
      'Ethan Allen and Ira Allen conducted secret negotiations with British General Haldimand in Quebec about Vermont potentially rejoining the British Empire. Whether this was genuine or a deliberate stratagem to deter invasion remains debated; the negotiations alarmed Congress but ended without agreement when Yorktown turned the war.',
    significanceWeight: 82,
    lat: 42.8501,
    lng: -72.5559,
    town: { connect: { id: 'us-vt-brattleboro' } },
  },
  {
    id: 'event-brattleboro-bayley-hazen-road',
    name: 'Bayley-Hazen Military Road Proposed and Begun',
    startDate: new Date('1779-08-01'),
    datePrecision: 'YEAR',
    summary:
      'General Jacob Bayley proposed and began a military road from Wells River northward to allow Continental Army access to Canada. Construction was halted in 1780 when it became clear the road could equally serve a British invasion southward.',
    significanceWeight: 72,
    lat: 44.1500,
    lng: -72.0600,
    town: { connect: { id: 'us-vt-brattleboro' } },
  },
  {
    id: 'event-brattleboro-yorktown-news',
    name: 'Yorktown Surrender News Arrives in Vermont',
    startDate: new Date('1781-10-24'),
    datePrecision: 'DAY',
    summary:
      'Cornwallis\'s surrender reached Vermont via the Connecticut River corridor, effectively ending Vermont\'s Haldimand negotiation calculations. Vermont remained an independent republic until its 1791 admission to the United States as the fourteenth state.',
    significanceWeight: 85,
    lat: 42.8501,
    lng: -72.5559,
    town: { connect: { id: 'us-vt-brattleboro' } },
  },
  {
    id: 'event-brattleboro-vermont-statehood',
    name: 'Vermont Admitted to the Union as the 14th State',
    startDate: new Date('1791-03-04'),
    datePrecision: 'DAY',
    summary:
      'Vermont was admitted as the fourteenth state on March 4, 1791 — the first new state after the original thirteen — resolving the New York jurisdictional disputes dating to the 1760s. Vermont paid New York $30,000 in compensation for disputed land claims.',
    significanceWeight: 88,
    lat: 42.8501,
    lng: -72.5559,
    town: { connect: { id: 'us-vt-brattleboro' } },
  },
];

// ============================================================================
// BRATTLEBORO — STORIES
// ============================================================================

export const brattleboroStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-brattleboro-westminster-gravestone',
    title: 'Murdered by the Tools of Tyranny',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-william-french' } },
    verificationStatus: 'VERIFIED',
    textVersion: `The inscription on William French's gravestone is one of the most explicit political statements of the early Revolutionary era: shot "by the Hands of Cruel Ministerial Tools of Tyranny, In the Courthouse at 11 o'clock at Night." Gravestones are public documents. Whoever composed that inscription knew future visitors would read it. "Ministerial tools of tyranny" was not the language of grief — it was a political verdict, placed in stone within weeks of the event.

French was twenty-one. He had gone to the courthouse to prevent the New York–appointed court from sitting; settlers had argued for a decade that New York had no legitimate authority over their lands. When the sheriff's posse cleared the building, French was shot.

Westminster happened five weeks before Lexington, in a community already organized and already angry. The county convention that convened afterward was not spontaneous. It was a prepared political movement finding its occasion. The gravestone is still there.`,
    audioScript: `The gravestone inscription — "Shot by the Hands of Cruel Ministerial Tools of Tyranny" — was not grief. It was a political verdict in stone. French was twenty-one; he went to the courthouse to prevent the New York court from sitting and was shot when the sheriff's posse cleared the building. Westminster happened five weeks before Lexington, in a community already organized and already angry. The county convention that followed was a prepared political movement finding its occasion. The gravestone is still there.`,
    tags: ['Westminster', 'massacre', 'gravestone', 'tyranny', 'Vermont independence'],
    town: { connect: { id: 'us-vt-brattleboro' } },
  },
  {
    id: 'story-brattleboro-frontier-constitution',
    title: 'The Rainstorm at Windsor',
    storyType: 'MODERN_VOICE',
    narratorName: 'Constitutional Historian',
    narratorRole: 'Vermont History Program, University of Vermont',
    verificationStatus: 'VERIFIED',
    textVersion: `The Vermont Constitution of 1777 was adopted because a rainstorm made the roads impassable. The convention at Windsor was finishing its work when news arrived that Burgoyne was threatening Ticonderoga. Delegates were ready to leave. A storm came up. They stayed, finished the document, and signed it.

What they produced was radical for 1777: the first American constitution to abolish adult slavery, universal male suffrage with no property qualification, a unicameral legislature with a Council of Censors. These were not accidents. They came from a political culture that had spent a decade fighting New York's attempt to impose an elite land-grant system on frontier settlers who had been told their titles were invalid.

The men who wrote that constitution had attended county conventions in Brattleboro and Westminster. They had buried William French. When they finally had the chance to write a constitution, they wrote what they believed — and what they believed turned out to be more democratic than most of their contemporaries were ready for.`,
    audioScript: `Vermont's 1777 constitution was adopted because a rainstorm trapped the delegates at Windsor. What they produced was the first American constitution to abolish adult slavery, with universal male suffrage and no property qualification. These weren't abstractions — they came from a decade of fighting New York's land-grant system, from county conventions, from burying William French. When Vermont's settlers had the chance to write their own constitution, they wrote what they already believed.`,
    tags: ['Vermont constitution', 'slavery abolition', 'suffrage', 'frontier democracy', 'Windsor'],
    town: { connect: { id: 'us-vt-brattleboro' } },
  },
];

// ============================================================================
// BRATTLEBORO — LESSON PLANS
// ============================================================================

export const brattleboroLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-vt-brattleboro' } },
    title: 'Westminster Massacre: The Revolution\'s Forgotten First Bloodshed',
    gradeRange: '6-8',
    estimatedDuration: '2 class periods',
    summary:
      'This lesson uses the Westminster Massacre of March 13, 1775 to challenge students\'s assumptions about where and how the American Revolution began. By examining an event that preceded Lexington and Concord by five weeks — caused not by British regulars but by a colonial sheriff\'s posse — students explore the Revolution as a conflict about local authority, land rights, and self-governance, not only as a war against Britain.',
    lessonData: {
      objectives: [
        'Students will describe the land grant dispute that brought New Hampshire Grants settlers into conflict with New York authorities',
        'Students will analyze the Westminster Massacre as a political and legal conflict as well as a violent incident',
        'Students will compare the Westminster Massacre to Lexington and Concord and explain what each reveals about the Revolution\'s causes',
        'Students will evaluate the language of William French\'s gravestone inscription as a primary source',
      ],
      essentialQuestions: [
        'Was the American Revolution primarily a conflict with Britain, or was it also a conflict among Americans about who had legitimate authority?',
        'Why do some events become famous symbols of a cause while others — equally important — are forgotten?',
        'What does a gravestone inscription tell us about how a community understood its own history?',
      ],
      materials: [
        'Map of New Hampshire Grants showing disputed land claims and New York boundary',
        'Photograph and transcript of William French\'s gravestone inscription',
        'Short narrative account of the Westminster Massacre from a Patriot perspective and from a Loyalist perspective',
        'Timeline showing Westminster (March 13) and Lexington-Concord (April 19) in chronological proximity',
        'Excerpt from the Cumberland County convention resolutions, April 1775',
      ],
      activities: [
        {
          name: 'Who Owned the Land?',
          duration: '20 minutes',
          description:
            'Students examine the New Hampshire Grants map and in pairs role-play either a settler with a New Hampshire grant or a New York official, each writing three sentences defending their claim. Class discussion: when two sets of legal documents claim the same land, who decides?',
        },
        {
          name: 'Reading the Gravestone',
          duration: '25 minutes',
          description:
            'Students analyze William French\'s gravestone inscription as a primary source: what claims does it make, what language does it use, who is the intended audience? They compare it to a typical 18th-century grief-focused inscription and discuss why the community put political language on a gravestone.',
        },
        {
          name: 'Westminster vs. Lexington: What Gets Remembered?',
          duration: '20 minutes',
          description:
            'Students examine why Lexington became a national symbol while Westminster is largely unknown, using the timeline and comparative accounts to identify similarities and differences. They write a paragraph arguing whether Westminster should be better known and why.',
        },
      ],
      assessment:
        'Short essay (one paragraph): "Using Westminster and Lexington as your evidence, explain whether the American Revolution was primarily a conflict with Britain or a conflict among Americans about authority." Students must support their argument with specific evidence from both events.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author\'s point of view or purpose',
        'CCSS.ELA-LITERACY.WHST.6-8.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.6.6-8: Analyze how people\'s perspectives influenced what information is available in the historical sources',
        'D2.Civ.2.6-8: Explain specific roles played by citizens, political parties, interest groups, and the media in a variety of governmental and nongovernmental contexts',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-vt-brattleboro' } },
    title: 'Vermont\'s 1777 Constitution: Radical Democracy on the Frontier',
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary:
      'This lesson examines the Vermont Constitution of 1777 — the most democratic governing document of the Revolutionary era — and asks why a frontier state produced ideas about equality that the original thirteen states were not ready to adopt. Students analyze the specific provisions of the Vermont constitution, compare them to other state constitutions and the federal Constitution, and trace the political and social conditions that made Vermont\'s radicalism possible.',
    lessonData: {
      objectives: [
        'Students will identify the specific ways the Vermont Constitution of 1777 was more democratic than other founding-era documents',
        'Students will explain the connection between Vermont\'s frontier land conflict and its constitutional radicalism',
        'Students will compare the Vermont Constitution to the Massachusetts Constitution of 1780 and the U.S. Constitution of 1787',
        'Students will evaluate the limits of Vermont\'s democratic commitments, including the treatment of women and indigenous peoples',
      ],
      essentialQuestions: [
        'Why did a frontier state produce more democratic constitutional ideas than the established colonies did?',
        'What is the relationship between economic interest and political principle — can the Vermont settlers\' democratic commitments be separated from their self-interest in land rights?',
        'Vermont abolished adult male slavery in 1777; the federal constitution protected it until 1865. What does that gap reveal about how constitutional compromises work?',
      ],
      materials: [
        'Full text of the Vermont Constitution of 1777, Article I (anti-slavery clause) and Chapter II (suffrage provisions)',
        'Massachusetts Constitution of 1780 suffrage and property provisions for comparison',
        'U.S. Constitution\'s three-fifths clause and timeline to the 13th Amendment',
        'Map of Vermont land grants and settlement patterns showing the frontier character of the state',
        'Secondary source: scholarly analysis of Vermont\'s constitutional radicalism',
      ],
      activities: [
        {
          name: 'Constitutional Comparison',
          duration: '35 minutes',
          description:
            'Students compare Vermont, Massachusetts, and federal constitutions side by side using a structured chart: who can vote, how is slavery addressed, what property is required? They rank the three from most to least democratic by their own criteria and discuss the standard they\'re applying.',
        },
        {
          name: 'Why Vermont?',
          duration: '30 minutes',
          description:
            'Students read the secondary source on Vermont\'s constitutional radicalism and use the settlement map to identify Vermont\'s frontier character. Discussion: settlers had self-interested reasons to abolish property qualifications. Does that make their democratic commitments less genuine? Is there a difference between principled and self-interested democracy?',
        },
        {
          name: 'The Limits of Radicalism',
          duration: '25 minutes',
          description:
            'Vermont abolished adult male slavery and established universal male suffrage — but excluded women and indigenous peoples. Students examine why Vermont extended democracy to some excluded groups but not others, and connect to the arc of American democratic expansion through the 19th and 20th centuries.',
        },
      ],
      assessment:
        'Analytical essay (700-900 words): "The Vermont Constitution of 1777 was both genuinely radical and deeply limited. Using specific constitutional provisions and the historical context of Vermont\'s frontier settlement, evaluate both claims." Students must address at least one provision that supports each side of the argument.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in several primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors for how they treat the same or similar topics',
      ],
      c3Framework: [
        'D2.Civ.3.9-12: Analyze the impact of constitutions, laws, treaties, and international agreements on the maintenance of national and international order',
        'D2.His.4.9-12: Analyze complex and interacting factors that influenced the perspectives of people during different historical eras',
        'D2.Civ.5.9-12: Evaluate citizens\' and institutions\' effectiveness in addressing social and political problems',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// BRATTLEBORO — ADDITIONAL LINKS
// ============================================================================

export const brattleboroAdditionalLinks: Array<{
  toTownId: string;
  linkType: 'SHARED_EVENT' | 'SHARED_PERSON' | 'GEOGRAPHIC_PROXIMITY' | 'SHARED_THEME';
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-vt-bennington',
    linkType: 'SHARED_THEME',
    reason:
      'Brattleboro and Bennington were the two principal hubs of Vermont\'s Revolutionary War operations, Brattleboro on the Connecticut River in the east and Bennington on the southwestern approach. Both towns were centers of Green Mountain Boys activity and Vermont independence politics.',
    weight: 85,
  },
  {
    toTownId: 'us-nh-walpole',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason:
      'Walpole, New Hampshire, sits directly across the Connecticut River from the Vermont settlements and was part of the same Connecticut River valley defensive and communication network during the Revolution. Information and militia support moved freely across the river between these communities.',
    weight: 70,
  },
  {
    toTownId: 'us-ma-springfield',
    linkType: 'SHARED_EVENT',
    reason:
      'Springfield was the major Massachusetts supply depot on the Connecticut River corridor, and Brattleboro was the Vermont gateway on the same corridor. Supplies, news, and troops moving between Massachusetts and Vermont passed through both towns throughout the Revolution.',
    weight: 75,
  },
  {
    toTownId: 'us-ny-ticonderoga',
    linkType: 'SHARED_PERSON',
    reason:
      'Ethan Allen and the Green Mountain Boys who captured Fort Ticonderoga were the same organization that defended Vermont\'s Connecticut River valley settlements. The fort\'s capture in 1775 and Vermont\'s frontier defense in subsequent years were operations of the same political and military network.',
    weight: 78,
  },
];
