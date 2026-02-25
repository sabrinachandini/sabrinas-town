// MODEL: Claude Opus (historical synthesis and narrative content)
// MODEL: Claude Sonnet (data structure and code)
// New Jersey town expansion — Trenton, Princeton, Monmouth, New Brunswick, Fort Lee

import { Prisma } from '@prisma/client';

/**
 * Five New Jersey towns with Revolutionary War significance.
 *
 * NOTE ON VERIFICATION: Historical content has been synthesized from
 * established scholarly sources including David Hackett Fischer's
 * "Washington's Crossing," David McCullough's "1776," William Stryker's
 * "The Battles of Trenton and Princeton," and NPS/institutional documentation.
 * Stories marked VERIFIED have strong documentary evidence. Lesser-known
 * voices carry ORAL_TRADITION or ANECDOTAL status where the historical
 * record is thinner. Modern-voice stories are marked UNVERIFIED where
 * we cannot fully document claims from composite/representative narrators.
 */

// ============================================================================
// TRENTON
// ============================================================================

export const trentonTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Trenton is where the American Revolution stopped dying. By December 1776, Washington's army had been chased out of New York, across New Jersey, and over the Delaware River into Pennsylvania. Enlistments were expiring, morale had collapsed, and the Continental Congress had fled Philadelphia. The cause looked finished. Then, on the morning of December 26, Washington crossed back over the icy Delaware and struck the Hessian garrison at Trenton in a battle that lasted barely ninety minutes.

The victory was small in military terms — roughly a thousand Hessian prisoners, no significant territory gained — but its psychological effect was enormous. It proved that the Continental Army could win an offensive action against professional European soldiers. Recruitment surged. Desertion slowed. Congress steadied. The war that had seemed over continued for another seven years.

Trenton also matters because of what it reveals about the nature of the Revolution's army. The men who crossed the Delaware were not militia volunteers defending their home ground. They were regulars, many of them ragged and underfed, who chose to follow Washington into a desperate gamble. The crossing itself — through ice floes, in freezing darkness, hours behind schedule — was a feat of logistics and discipline that contradicts the image of the Continental Army as amateur.

The Old Barracks in Trenton, built during the French and Indian War and used by the Hessians before the battle, still stands. It is one of the few surviving colonial barracks in the country and anchors the physical memory of a moment when the Revolution's survival was measured in hours.`,
};

export const trentonPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-trenton-john-rall',
    name: 'Johann Rall',
    roles: ['Hessian Colonel', 'Garrison Commander'],
    bioShort:
      'Hessian colonel commanding the Trenton garrison when Washington attacked on December 26, 1776. Rall was mortally wounded in the battle and died the following day. His failure to fortify the town contributed to the Hessian defeat.',
    birthYear: 1726,
    deathYear: 1776,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-trenton-john-glover',
    name: 'John Glover',
    roles: ['Continental Army Colonel', 'Marblehead Mariner'],
    bioShort:
      'Commander of the 14th Continental Regiment, the Marblehead mariners who manned the boats during Washington\'s crossing of the Delaware. Glover\'s regiment was critical to the logistics of the Trenton operation.',
    birthYear: 1732,
    deathYear: 1797,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-trenton-henry-knox',
    name: 'Henry Knox',
    roles: ['Continental Army Officer', 'Chief of Artillery'],
    bioShort:
      'Washington\'s chief of artillery who managed the transport of eighteen cannon across the Delaware in freezing conditions. Knox\'s guns gave the Continental force decisive firepower at Trenton.',
    birthYear: 1750,
    deathYear: 1806,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-trenton-james-monroe',
    name: 'James Monroe',
    roles: ['Continental Army Lieutenant', 'Future President'],
    bioShort:
      'Eighteen-year-old lieutenant who was wounded at Trenton while leading a charge to capture Hessian cannon. Monroe\'s service in the Revolution shaped his political career and eventual presidency.',
    birthYear: 1758,
    deathYear: 1831,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-trenton-john-honeyman',
    name: 'John Honeyman',
    roles: ['Spy', 'Double Agent', 'Cattleman'],
    bioShort:
      'New Jersey cattleman who may have served as a spy for Washington, providing intelligence on the Hessian garrison at Trenton. The extent of his espionage role is debated by historians, though family tradition strongly supports it.',
    birthYear: 1729,
    deathYear: 1822,
    verificationStatus: 'ORAL_TRADITION',
  },
  {
    id: 'person-trenton-alexander-hamilton',
    name: 'Alexander Hamilton',
    roles: ['Continental Army Captain', 'Artillery Commander'],
    bioShort:
      'Captain of a New York artillery company who commanded two guns during the Battle of Trenton. Hamilton\'s performance here and at Princeton brought him to Washington\'s attention, leading to his appointment as aide-de-camp.',
    birthYear: 1755,
    deathYear: 1804,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-trenton-phillis-levenworth',
    name: 'Phillis',
    roles: ['Enslaved Woman', 'Civilian', 'War Witness'],
    bioShort:
      'Enslaved woman in Trenton whose experience during the Hessian occupation and subsequent battle reflects the war\'s impact on Black residents of New Jersey. Her name appears in local records but details of her life remain fragmentary.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ANECDOTAL',
  },
  {
    id: 'person-trenton-abraham-hunt',
    name: 'Abraham Hunt',
    roles: ['Merchant', 'Patriot Sympathizer'],
    bioShort:
      'Trenton merchant who reportedly hosted Colonel Rall at a Christmas night card game, possibly keeping him distracted while Washington\'s forces crossed the Delaware. Hunt\'s role as a deliberate collaborator is debated, but he was known to have patriot sympathies.',
    birthYear: 1741,
    deathYear: 1824,
    verificationStatus: 'ORAL_TRADITION',
  },
];

export const trentonEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-trenton-battle-1776',
    name: 'Battle of Trenton',
    startDate: new Date('1776-12-26'),
    datePrecision: 'DAY',
    summary: `Washington's Continental Army crossed the Delaware River on Christmas night and attacked the Hessian garrison at Trenton at approximately 8:00 AM on December 26, 1776. The assault came from two directions — Greene's column from the north along Pennington Road, Sullivan's from the west along River Road. The Hessians, commanded by Colonel Johann Rall, attempted to form up on King and Queen Streets but were driven back by Continental artillery and infantry fire.

The battle lasted roughly ninety minutes. Rall was mortally wounded leading a counterattack. Approximately 900 Hessians were captured, 22 killed, and 83 wounded. Continental casualties were minimal — two soldiers froze to death during the crossing and five were wounded in the fighting, including Lieutenant James Monroe. The victory was the first significant American offensive success of the war and transformed the strategic picture.`,
    significanceWeight: 100,
    lat: 40.2206,
    lng: -74.7632,
    town: { connect: { id: 'us-nj-trenton' } },
  },
  {
    id: 'event-trenton-delaware-crossing',
    name: 'Washington Crosses the Delaware',
    startDate: new Date('1776-12-25'),
    datePrecision: 'DAY',
    summary: `On the evening of December 25, 1776, Washington led approximately 2,400 troops across the ice-choked Delaware River from Pennsylvania to New Jersey. The crossing took place at McConkey's Ferry, about nine miles north of Trenton. John Glover's Marblehead regiment manned the Durham boats that ferried soldiers, horses, and eighteen cannon across the river.

The operation ran hours behind schedule. A nor'easter brought sleet and freezing rain. Two other planned crossings — by Ewing's militia and Cadwalader's force — failed to cross. Washington's column did not complete the crossing until 3:00 AM and began the nine-mile march to Trenton in darkness. The logistical achievement of moving an army with artillery across a frozen river at night remains one of the most remarkable feats of the war.`,
    significanceWeight: 95,
    lat: 40.2968,
    lng: -74.8715,
    town: { connect: { id: 'us-nj-trenton' } },
  },
  {
    id: 'event-trenton-hessian-occupation',
    name: 'Hessian Garrison Established at Trenton',
    startDate: new Date('1776-12-14'),
    datePrecision: 'DAY',
    summary: `After the British pursuit of Washington's army across New Jersey, Hessian forces under Colonel Johann Rall established a garrison at Trenton as part of a chain of outposts along the Delaware River. The garrison consisted of three Hessian regiments — roughly 1,400 troops — quartered in the town and the Old Barracks.

Rall dismissed suggestions from his superiors to fortify the position, reportedly saying that fortifications were unnecessary against an enemy he held in contempt. This overconfidence contributed directly to the garrison's vulnerability when Washington attacked twelve days later. Local residents, many of them patriot sympathizers, provided intelligence to the Continental Army about Hessian dispositions and routines.`,
    significanceWeight: 70,
    town: { connect: { id: 'us-nj-trenton' } },
  },
  {
    id: 'event-trenton-second-battle',
    name: 'Second Battle of Trenton (Battle of the Assunpink Creek)',
    startDate: new Date('1777-01-02'),
    datePrecision: 'DAY',
    summary: `One week after the first battle, Washington returned to Trenton and positioned his forces behind the Assunpink Creek. British General Cornwallis arrived with approximately 5,500 troops and attempted three assaults across the creek bridge, all repulsed by Continental defenders. Cornwallis reportedly decided to finish the job in the morning, saying he had the "old fox" trapped.

That night, Washington slipped away, leaving campfires burning, and marched his army around Cornwallis's flank toward Princeton. The Second Battle of Trenton demonstrated that the Continental Army could hold a defensive position against a superior force, and Washington's overnight march showed a tactical sophistication that British commanders consistently underestimated.`,
    significanceWeight: 80,
    lat: 40.2170,
    lng: -74.7540,
    town: { connect: { id: 'us-nj-trenton' } },
  },
  {
    id: 'event-trenton-continental-retreat',
    name: 'Continental Army Retreats Through Trenton',
    startDate: new Date('1776-12-02'),
    datePrecision: 'DAY',
    summary: `Washington's retreating army passed through Trenton in early December 1776, crossing the Delaware River into Pennsylvania just ahead of the pursuing British forces. The army was in desperate condition — undermanned, poorly equipped, and losing soldiers daily to expired enlistments and desertion.

Washington ordered all boats on the New Jersey side of the Delaware seized or destroyed to prevent British pursuit. This pragmatic measure, which stranded New Jersey civilians, also created the logistical precondition for the Christmas crossing: Washington knew exactly where the boats were because he had collected them himself.`,
    significanceWeight: 65,
    town: { connect: { id: 'us-nj-trenton' } },
  },
  {
    id: 'event-trenton-old-barracks-construction',
    name: 'Old Barracks Built for French and Indian War',
    startDate: new Date('1758-12-01'),
    datePrecision: 'YEAR',
    summary: `The Old Barracks in Trenton were constructed in 1758 to house British soldiers during the French and Indian War, after New Jersey colonists protested the Quartering Act's requirement to house troops in private homes. The stone barracks could accommodate roughly 300 soldiers.

During the Revolution, the barracks housed Hessian troops of Rall's garrison and were central to the Battle of Trenton. The building survived the war and subsequent centuries, making it one of the few surviving colonial military barracks in the United States. Today it operates as a museum that interprets both its French and Indian War origins and its Revolutionary War significance.`,
    significanceWeight: 55,
    lat: 40.2196,
    lng: -74.7705,
    town: { connect: { id: 'us-nj-trenton' } },
  },
  {
    id: 'event-trenton-enlistment-crisis',
    name: 'Enlistment Crisis and Re-enlistment Appeal',
    startDate: new Date('1776-12-31'),
    datePrecision: 'DAY',
    summary: `With enlistments for much of the Continental Army set to expire on December 31, 1776, Washington faced the prospect of his army dissolving even after the victory at Trenton. He personally appealed to the troops to re-enlist for six additional weeks, offering a ten-dollar bounty. After a long pause, soldiers began stepping forward.

The re-enlistment was not universal, but enough men stayed to sustain the army through the Princeton campaign. The episode illustrates the fragility of the Continental Army's existence — even after a major victory, Washington had to persuade his soldiers to keep fighting, one enlistment at a time.`,
    significanceWeight: 75,
    town: { connect: { id: 'us-nj-trenton' } },
  },
  {
    id: 'event-trenton-spy-network',
    name: 'Intelligence Gathering Before the Crossing',
    startDate: new Date('1776-12-20'),
    datePrecision: 'RANGE',
    summary: `In the days before the crossing, Washington received intelligence from multiple sources about the Hessian garrison's strength, disposition, and routines. Local patriots, possibly including cattleman John Honeyman, provided information about guard schedules and the lack of fortifications.

Continental agents also intercepted communications revealing that the Hessians expected no attack and that Rall had dismissed warnings from Loyalist informants. This intelligence allowed Washington to plan his approach routes with confidence and contributed to the tactical surprise that made the victory possible. The Trenton operation demonstrated the value of human intelligence networks that the Continental Army was developing throughout the war.`,
    significanceWeight: 60,
    town: { connect: { id: 'us-nj-trenton' } },
  },
];

export const trentonStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-trenton-hessian-perspective',
    title: 'The Morning Everything Fell Apart',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-trenton-john-rall' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Johann Rall was not a careless officer. He had fought with distinction at White Plains and Fort Washington, where his regiment had led the assault up the cliffs. He was brave, experienced, and respected by his men. But he did not understand the war he was fighting, and on the morning of December 26 that misunderstanding killed him.

Rall had been warned. Loyalist informants sent word that the Americans were planning something. A farmer reportedly delivered a note to Rall on Christmas evening while the colonel was playing cards — a note Rall pocketed without reading. Whether this story is true in its details, the larger truth is clear: Rall did not believe the ragged army across the river was capable of attacking him.

He had reason for confidence. The Continental Army he had observed retreating across New Jersey was disintegrating. Soldiers were barefoot, underfed, deserting by the dozen. What army in that condition mounts an offensive in the dead of winter?

The answer arrived at eight in the morning, in sleet, from two directions at once. Rall stumbled out of his quarters and tried to form his men on King Street. Continental artillery — guns dragged across a frozen river in the dark — raked the street. The Hessians, many of them still pulling on uniforms, could not organize. The neat European formations they had been trained to fight in were useless in the narrow streets.

Rall mounted his horse and led a charge toward the American guns. He was hit twice and fell. His men carried him to a church. He died the next day, reportedly asking that his men be treated well.

The irony of Trenton is that Rall's contempt for the Continental Army was shared by nearly every professional officer in the war, British and Hessian alike. They were not wrong about the army's condition. They were wrong about what desperate men, well led, could do.`,
    audioScript: `Johann Rall was not a careless officer. He had fought with distinction at White Plains and Fort Washington. But he did not understand the war he was fighting.

Rall had been warned. Loyalist informants sent word that the Americans were planning something. He did not believe the ragged army across the river was capable of attacking him. What army in that condition mounts an offensive in the dead of winter?

The answer arrived at eight in the morning, in sleet, from two directions. Continental artillery raked King Street. The Hessians could not organize. Rall led a charge and was hit twice. He died the next day.

The irony of Trenton is that Rall's contempt for the Continental Army was widely shared. Professional officers were not wrong about the army's condition. They were wrong about what desperate men, well led, could do.`,
    tags: ['hessian', 'battle', 'command-failure', 'turning-point'],
    town: { connect: { id: 'us-nj-trenton' } },
  },
  {
    id: 'story-trenton-modern-barracks',
    title: 'The Building That Survived Everything',
    storyType: 'MODERN_VOICE',
    narratorName: 'Collections Manager',
    narratorRole: 'Old Barracks Museum, Trenton',
    verificationStatus: 'UNVERIFIED',
    textVersion: `The Old Barracks is the kind of building that should not still be here. It was built as temporary housing for soldiers in 1758, not meant to last. And yet it survived the Revolution, survived being subdivided into apartments in the nineteenth century, survived demolition proposals, and survived decades of neglect before preservation efforts took hold.

What visitors notice first is the stone. The walls are thick, functional, built to keep soldiers warm in winter. There is nothing decorative about this building. It was designed to hold three hundred men in close quarters, and you can feel that density when you walk through the rooms.

We interpret both eras — the French and Indian War, when British soldiers lived here and New Jersey residents resented their presence, and the Revolution, when Hessian troops occupied these same rooms before Washington's attack. The continuity matters. The quartering grievance that helped build the barracks is the same grievance that appears in the Declaration of Independence.

The most powerful moments for visitors come from the small details. We have archaeological fragments — buttons, pipe stems, musket balls — that were found in the building and grounds. These objects collapse the distance between then and now in a way that narrative alone cannot.

People sometimes ask why Trenton does not get the same attention as Valley Forge or Yorktown. Part of the answer is that Trenton was a beginning, not an ending. The battle here did not finish the war. It kept the war going. That is a harder story to celebrate, but it may be the more important one.`,
    audioScript: `The Old Barracks should not still be here. Built as temporary housing in 1758, it survived the Revolution, subdivision into apartments, demolition proposals, and decades of neglect.

We interpret both eras — the French and Indian War and the Revolution. The quartering grievance that built the barracks is the same grievance in the Declaration of Independence.

The most powerful moments come from small details. Archaeological fragments — buttons, pipe stems, musket balls — collapse the distance between then and now.

People ask why Trenton does not get the same attention as Valley Forge. Part of the answer: Trenton was a beginning, not an ending. The battle here kept the war going. That is a harder story to celebrate, but it may be the more important one.`,
    tags: ['preservation', 'museum', 'barracks', 'material-culture'],
    town: { connect: { id: 'us-nj-trenton' } },
  },
];

// ============================================================================
// PRINCETON
// ============================================================================

export const princetonTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Princeton matters because of what happened in the ten days between Christmas 1776 and January 3, 1777. After the surprise victory at Trenton, Washington slipped around Cornwallis's army in the night and struck the British garrison at Princeton in a sharp, costly fight that proved the Trenton victory was not a fluke. The two battles together — the Ten Crucial Days — transformed the war from a likely British victory into a genuine contest.

The battle itself centered on an open field south of town and then moved into Princeton's streets and the grounds of Nassau Hall, the College of New Jersey's main building. American troops under Hugh Mercer clashed with British regulars in a bayonet fight that killed Mercer and nearly broke the American line. Washington rode forward into the fire to rally his troops, an act of personal courage that entered American mythology and, more importantly, held the army together at a critical moment.

Nassau Hall, the largest stone building in the colonies at the time, served as a barracks, hospital, and briefly as the seat of the Continental Congress in 1783. A cannonball fired during the battle reportedly passed through a wall and destroyed a portrait of George II — a detail too symbolic to have been invented, though it probably was.

Princeton today preserves the battlefield as an accessible park, and the town's deep institutional memory through the university ensures that the Revolutionary history is maintained with scholarly rigor uncommon in smaller towns.`,
};

export const princetonPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-princeton-hugh-mercer',
    name: 'Hugh Mercer',
    roles: ['Continental Army General', 'Physician', 'Scottish Immigrant'],
    bioShort:
      'Scottish-born physician and Continental brigadier general who was bayoneted by British troops at the Battle of Princeton and died nine days later. Mercer\'s stand at the orchard south of town bought time for Washington to bring up reinforcements.',
    birthYear: 1726,
    deathYear: 1777,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-princeton-charles-mawhood',
    name: 'Charles Mawhood',
    roles: ['British Lieutenant Colonel', 'Garrison Commander'],
    bioShort:
      'British officer commanding the 17th Regiment of Foot at Princeton. Mawhood led a bayonet charge that killed General Mercer and scattered his brigade before Washington arrived with reinforcements and drove the British from the field.',
    birthYear: 1729,
    deathYear: 1780,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-princeton-john-witherspoon',
    name: 'John Witherspoon',
    roles: ['College President', 'Continental Congress Delegate', 'Signer of the Declaration'],
    bioShort:
      'President of the College of New Jersey (Princeton) and the only active college president to sign the Declaration of Independence. Witherspoon trained a generation of American leaders including James Madison and helped shape the intellectual foundations of the Republic.',
    birthYear: 1723,
    deathYear: 1794,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-princeton-richard-stockton',
    name: 'Richard Stockton',
    roles: ['Lawyer', 'Continental Congress Delegate', 'Signer of the Declaration'],
    bioShort:
      'Princeton lawyer and signer of the Declaration of Independence who was captured by the British in late 1776 and imprisoned under harsh conditions. Stockton signed a loyalty oath to secure his release, a decision that haunted his reputation.',
    birthYear: 1730,
    deathYear: 1781,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-princeton-benjamin-rush',
    name: 'Benjamin Rush',
    roles: ['Physician', 'Continental Congress Delegate', 'Signer of the Declaration'],
    bioShort:
      'Philadelphia physician who tended to the wounded at Princeton and left detailed accounts of the battle and its aftermath. Rush\'s letters describe the condition of both American and British casualties.',
    birthYear: 1746,
    deathYear: 1813,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-princeton-james-madison',
    name: 'James Madison',
    roles: ['Student', 'Future President', 'Constitutional Architect'],
    bioShort:
      'Studied at the College of New Jersey under Witherspoon in the early 1770s. Though he had graduated before the battle, Madison\'s political education at Princeton shaped the constitutional framework he later designed.',
    birthYear: 1751,
    deathYear: 1836,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-princeton-thomas-olden',
    name: 'Thomas Olden',
    roles: ['Farmer', 'Quaker', 'Civilian'],
    bioShort:
      'Princeton-area Quaker farmer whose property became part of the battlefield on January 3, 1777. The Olden farmstead, caught between the two armies, represents the civilian cost of battles fought in farming communities.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ANECDOTAL',
  },
  {
    id: 'person-princeton-annis-boudinot-stockton',
    name: 'Annis Boudinot Stockton',
    roles: ['Poet', 'Patriot', 'Intellectual'],
    bioShort:
      'Wife of Richard Stockton and accomplished poet who buried the family\'s papers and valuables before British forces arrived at their estate, Morven. Her wartime poetry celebrated American independence and mourned its costs.',
    birthYear: 1736,
    deathYear: 1801,
    verificationStatus: 'VERIFIED',
  },
];

export const princetonEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-princeton-battle-1777',
    name: 'Battle of Princeton',
    startDate: new Date('1777-01-03'),
    datePrecision: 'DAY',
    summary: `After slipping away from Cornwallis at Trenton during the night of January 2-3, Washington's army marched north and encountered British forces under Lieutenant Colonel Mawhood south of Princeton. The initial engagement between Mercer's brigade and Mawhood's 17th Foot was a brutal close-quarters fight. The British bayonet charge killed Mercer and scattered his men.

Washington rode forward personally to rally the retreating troops, exposing himself to fire at close range. Reinforcements under Cadwalader arrived, and the combined American force drove the British back into Princeton and then through the town. Some British soldiers took refuge in Nassau Hall, which was struck by American artillery before the garrison surrendered. The battle cost the British roughly 100 killed and 300 captured, while American losses were approximately 25 killed and 40 wounded.`,
    significanceWeight: 95,
    lat: 40.3340,
    lng: -74.6590,
    town: { connect: { id: 'us-nj-princeton' } },
  },
  {
    id: 'event-princeton-nassau-hall-cannonade',
    name: 'Cannonade of Nassau Hall',
    startDate: new Date('1777-01-03'),
    datePrecision: 'DAY',
    summary: `During the Battle of Princeton, approximately 200 British soldiers retreated into Nassau Hall, the main building of the College of New Jersey. Captain Alexander Hamilton reportedly ordered his artillery to fire on the building. After several rounds struck the walls, the British garrison surrendered.

Legend holds that a cannonball passed through a wall and decapitated a portrait of King George II hanging in the prayer hall. The story, whether precisely true, captured the symbolic resonance of an American cannon destroying a British king's image inside the most important educational institution in the middle colonies. Nassau Hall's damage was repaired, and the building later housed the Continental Congress in 1783.`,
    significanceWeight: 70,
    lat: 40.3487,
    lng: -74.6593,
    town: { connect: { id: 'us-nj-princeton' } },
  },
  {
    id: 'event-princeton-night-march',
    name: 'Night March from Trenton to Princeton',
    startDate: new Date('1777-01-03'),
    datePrecision: 'DAY',
    summary: `On the night of January 2-3, 1777, Washington executed one of the war's most audacious maneuvers. With Cornwallis's army camped across the Assunpink Creek preparing to attack at dawn, Washington left his campfires burning, muffled his wagon wheels with rags, and marched his entire army around the British flank on a back road toward Princeton.

The march covered roughly twelve miles in freezing conditions. Soldiers who had fought at the Assunpink that afternoon marched through the night without rest. The road had frozen solid after a brief thaw, which made the march possible but punishing. By dawn, the army was in position to strike Princeton. Cornwallis awoke to find his quarry gone.`,
    significanceWeight: 80,
    town: { connect: { id: 'us-nj-princeton' } },
  },
  {
    id: 'event-princeton-mercer-death',
    name: 'Death of General Hugh Mercer',
    startDate: new Date('1777-01-12'),
    datePrecision: 'DAY',
    summary: `General Hugh Mercer, wounded by bayonet during the Battle of Princeton on January 3, was carried to the nearby Thomas Clarke farmhouse where he received medical attention. Despite treatment by physicians including Benjamin Rush, Mercer died on January 12 from his wounds.

Mercer's death became a rallying symbol for the American cause. A Scottish immigrant and physician who had fought at Culloden before emigrating, Mercer represented the international dimension of the Revolution. His willingness to fight and die for a country not his by birth resonated with a cause that claimed universal principles. The city of Mercersburg, Pennsylvania, and Mercer County, New Jersey, bear his name.`,
    significanceWeight: 70,
    town: { connect: { id: 'us-nj-princeton' } },
  },
  {
    id: 'event-princeton-congress-1783',
    name: 'Continental Congress Meets at Nassau Hall',
    startDate: new Date('1783-06-30'),
    datePrecision: 'DAY',
    summary: `The Continental Congress relocated to Princeton in June 1783 after mutinous soldiers in Philadelphia surrounded Independence Hall demanding back pay. Congress met in Nassau Hall from June to November, making Princeton briefly the capital of the United States.

During this period, Congress received the official news that the Treaty of Paris had been signed, formally ending the war. Washington was summoned to Princeton, where Congress thanked him for his service. The episode — Congress fleeing its own soldiers, governing from a college building — illustrated both the fragility of the new nation's institutions and their resilience.`,
    significanceWeight: 75,
    town: { connect: { id: 'us-nj-princeton' } },
  },
  {
    id: 'event-princeton-stockton-capture',
    name: 'Capture of Richard Stockton',
    startDate: new Date('1776-11-30'),
    datePrecision: 'MONTH',
    summary: `Richard Stockton, Princeton lawyer and signer of the Declaration of Independence, was captured by Loyalist forces in late November 1776 while sheltering at a friend's home in Monmouth County. He was turned over to the British and imprisoned in New York under conditions that damaged his health permanently.

Stockton signed a declaration of loyalty to the Crown to secure his release — an act that shadowed his reputation for the rest of his life. Meanwhile, British and Hessian troops occupied his estate, Morven, destroying his library and papers. His wife Annis had buried some valuables before fleeing, preserving a portion of the family's possessions. Stockton's experience embodied the personal costs of signing the Declaration.`,
    significanceWeight: 65,
    town: { connect: { id: 'us-nj-princeton' } },
  },
  {
    id: 'event-princeton-british-occupation',
    name: 'British Occupation of Princeton',
    startDate: new Date('1776-12-07'),
    datePrecision: 'DAY',
    summary: `British forces occupied Princeton in early December 1776 as part of their advance across New Jersey. Cornwallis established a garrison in the town, and troops were quartered in Nassau Hall and private homes. The occupation was harsh — soldiers looted property, destroyed fences for firewood, and commandeered livestock.

The College of New Jersey suspended operations, and its library and scientific equipment suffered significant damage. The occupation lasted until January 3, 1777, when Washington's attack drove the British out. The experience of occupation — shared by many New Jersey towns during the winter of 1776-77 — pushed previously neutral residents toward the patriot cause.`,
    significanceWeight: 60,
    town: { connect: { id: 'us-nj-princeton' } },
  },
  {
    id: 'event-princeton-witherspoon-declaration',
    name: 'Witherspoon Signs the Declaration of Independence',
    startDate: new Date('1776-08-02'),
    datePrecision: 'DAY',
    summary: `John Witherspoon, president of the College of New Jersey, signed the Declaration of Independence as a delegate from New Jersey. He was the only active college president to sign the document and reportedly declared that the country was "not only ripe for the measure, but in danger of becoming rotten for the want of it."

Witherspoon's influence extended beyond his signature. As an educator, he trained a remarkable cohort of future leaders — James Madison, Aaron Burr, and twelve members of the Constitutional Convention among them. His Princeton curriculum combined Scottish Enlightenment philosophy with practical political thought, creating an intellectual framework for republican governance.`,
    significanceWeight: 70,
    town: { connect: { id: 'us-nj-princeton' } },
  },
];

export const princetonStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-princeton-mercer-orchard',
    title: 'The Doctor Who Died Fighting',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-princeton-hugh-mercer' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Hugh Mercer had seen battle before Princeton. He had fought at Culloden in 1746, on the losing side, a young Scottish surgeon following Bonnie Prince Charlie's doomed rebellion against the British Crown. After the defeat, Mercer emigrated to Pennsylvania, practiced medicine in Mercersburg, and built a quiet life far from European wars.

Then he chose to fight the British again.

By January 1777, Mercer was fifty years old and a brigadier general in the Continental Army. When Washington's night march from Trenton brought the army to the outskirts of Princeton, Mercer's brigade was sent forward to secure a bridge over Stony Brook and cut the road to Trenton.

Instead, Mercer's men collided with Mawhood's British regulars on William Clark's farm. The fight happened fast, in an apple orchard, in the early morning cold. The British fixed bayonets. Mercer's men, many armed with rifles that carried no bayonets, tried to hold. The line broke.

Mercer was pulled from his horse. British soldiers, reportedly mistaking him for Washington because of his officer's coat, demanded his surrender. He refused and fought with his sword until he was bayoneted seven times and left for dead.

He was not dead. He was carried to the Clarke farmhouse, where doctors treated him for nine days. Benjamin Rush visited and recorded the scene. Mercer knew he was dying. He asked about the battle's outcome and reportedly expressed satisfaction that the army had won.

He died on January 12. A man who had fled one failed revolution lived long enough to help save another.

The Mercer Oak, the tree near where he fell, stood on the battlefield until 2000. A descendant grows in its place.`,
    audioScript: `Hugh Mercer had fought the British before. At Culloden in 1746, as a young Scottish surgeon on the losing side. After the defeat, he emigrated to Pennsylvania and practiced medicine.

Then he chose to fight the British again.

At Princeton, Mercer's brigade collided with British regulars in an apple orchard. The British fixed bayonets. Mercer was pulled from his horse, refused to surrender, and was bayoneted seven times.

He survived nine days. Benjamin Rush visited and recorded the scene. Mercer asked about the battle's outcome and expressed satisfaction that the army had won.

A man who had fled one failed revolution lived long enough to help save another. The Mercer Oak, the tree near where he fell, stood until 2000. A descendant grows in its place.`,
    tags: ['battle', 'sacrifice', 'scottish-immigrant', 'physician'],
    town: { connect: { id: 'us-nj-princeton' } },
  },
  {
    id: 'story-princeton-modern-battlefield',
    title: 'A Battlefield You Can Walk in Twenty Minutes',
    storyType: 'MODERN_VOICE',
    narratorName: 'Battlefield Preservation Coordinator',
    narratorRole: 'Princeton Battlefield Society',
    verificationStatus: 'UNVERIFIED',
    textVersion: `The Princeton Battlefield is small. You can walk the entire site in twenty minutes if you are not stopping to read markers. And that is the point — this was a small battle, maybe forty minutes of actual fighting, and it happened in a space you can comprehend with your own eyes and feet.

That intimacy is what makes the site work for visitors. At Gettysburg, the scale overwhelms. You drive between positions. The battle sprawls across miles and days. Princeton is human-scale. You stand in the orchard where Mercer fell, and you can see the ridge where Washington rode forward, and you can see Nassau Hall in the distance. The whole battle is visible from a single spot.

We get a lot of visitors who are surprised the site exists at all. Princeton is known for the university, not the battle. People drive through town for years without realizing there is a Revolutionary War battlefield a mile from campus. When they find it, they often stand very still for a while.

The Clarke House, where Mercer was brought after being wounded, is on the battlefield property. Visitors can see the room where he died. The distance from the orchard to the house is maybe three hundred yards. Soldiers carried him that distance while the battle was still going on.

What I tell visitors is that Princeton, together with Trenton ten days earlier, is where the Revolution survived. Not where it was won — that took six more years. But where it survived. Washington gambled everything on these two small battles in the coldest part of winter, and the gamble worked. You can stand in the field where it happened and feel, in the quiet, what was at stake.`,
    audioScript: `The Princeton Battlefield is small. You can walk it in twenty minutes. That intimacy is what makes it work. You stand in the orchard where Mercer fell, see the ridge where Washington rode forward, and see Nassau Hall in the distance. The whole battle is visible from one spot.

We get visitors surprised the site exists. Princeton is known for the university, not the battle. When they find the battlefield, they often stand very still.

What I tell people is that Princeton, with Trenton ten days earlier, is where the Revolution survived. Not where it was won — that took six more years. But where it survived. You can stand in the field and feel what was at stake.`,
    tags: ['preservation', 'battlefield', 'landscape', 'education'],
    town: { connect: { id: 'us-nj-princeton' } },
  },
];

// ============================================================================
// MONMOUTH
// ============================================================================

export const monmouthTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Monmouth was the longest single-day battle of the Revolution and one of its strangest. On June 28, 1778, Washington's army — fresh from the winter at Valley Forge and newly trained by Baron von Steuben — attacked the British rear guard near Monmouth Court House as Clinton's forces marched from Philadelphia toward New York. The battle should have been a decisive American victory. It was not, because of General Charles Lee.

Lee, Washington's second-in-command, led the initial attack and then ordered a retreat that nearly became a rout. Washington rode forward, confronted Lee on the field in what witnesses described as a furious exchange, and personally rallied the retreating troops. The army reformed and fought the British to a standstill in brutal heat that killed soldiers on both sides through heatstroke.

Monmouth is also where Mary Ludwig Hays — Molly Pitcher — entered American legend. Whether a single woman or a composite of several, the story of a woman carrying water to gun crews and then taking her husband's place at a cannon after he collapsed captures something true about the Revolution: it was fought by entire communities, not just the men who carried muskets.

The battle ended in a tactical draw, but it demonstrated that the Continental Army had become a professional fighting force capable of standing toe-to-toe with British regulars in open-field combat. That transformation, forged at Valley Forge and proven at Monmouth, changed the character of the war permanently.`,
};

export const monmouthPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-monmouth-molly-pitcher',
    name: 'Mary Ludwig Hays (Molly Pitcher)',
    roles: ['Camp Follower', 'Artillery Assistant', 'Folk Hero'],
    bioShort:
      'Woman traditionally identified as "Molly Pitcher" who carried water to artillery crews at the Battle of Monmouth and reportedly took her husband\'s place at a cannon after he collapsed from heat. Pennsylvania records later granted her a military pension.',
    birthYear: 1744,
    deathYear: 1832,
    verificationStatus: 'ORAL_TRADITION',
  },
  {
    id: 'person-monmouth-charles-lee',
    name: 'Charles Lee',
    roles: ['Continental Army Major General', 'Former British Officer'],
    bioShort:
      'Washington\'s second-in-command who ordered a controversial retreat at Monmouth, provoking Washington\'s fury on the battlefield. Lee was court-martialed, found guilty of disobedience and misbehavior, and suspended from command for one year.',
    birthYear: 1732,
    deathYear: 1782,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-monmouth-henry-clinton',
    name: 'Sir Henry Clinton',
    roles: ['British Commander-in-Chief', 'General'],
    bioShort:
      'British commander-in-chief who led the march from Philadelphia to New York in June 1778. Clinton\'s army fought the Battle of Monmouth as a rear-guard action and continued to New York after the engagement.',
    birthYear: 1730,
    deathYear: 1795,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-monmouth-steuben',
    name: 'Friedrich Wilhelm von Steuben',
    roles: ['Continental Army Inspector General', 'Prussian Officer', 'Military Trainer'],
    bioShort:
      'Prussian military officer who trained the Continental Army at Valley Forge in the winter of 1777-78. Steuben\'s drill program transformed the army, and Monmouth was the first major battle where that training was tested under fire.',
    birthYear: 1730,
    deathYear: 1794,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-monmouth-anthony-wayne',
    name: 'Anthony Wayne',
    roles: ['Continental Army Brigadier General', 'Field Commander'],
    bioShort:
      'Aggressive Continental officer who commanded the advance force at Monmouth and whose troops bore the brunt of the initial engagement. Wayne\'s steadiness under fire helped stabilize the American line after Lee\'s retreat.',
    birthYear: 1745,
    deathYear: 1796,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-monmouth-charles-cornwallis',
    name: 'Charles Cornwallis',
    roles: ['British Lieutenant General', 'Field Commander'],
    bioShort:
      'British general who commanded part of the rear guard at Monmouth. Cornwallis\'s troops engaged the Continental Army in the heaviest fighting of the battle before the engagement ended in a draw.',
    birthYear: 1738,
    deathYear: 1805,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-monmouth-lafayette',
    name: 'Marquis de Lafayette',
    roles: ['Continental Army Major General', 'French Volunteer'],
    bioShort:
      'French aristocrat and Continental officer who initially commanded the advance force at Monmouth before ceding command to Charles Lee. Lafayette supported Washington during the battlefield confrontation with Lee and helped rally the troops.',
    birthYear: 1757,
    deathYear: 1834,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-monmouth-margaret-corbin',
    name: 'Margaret Corbin',
    roles: ['Camp Follower', 'Artillery Assistant', 'Wounded Veteran'],
    bioShort:
      'Sometimes conflated with Molly Pitcher, Corbin took over her husband\'s cannon at Fort Washington in 1776 after he was killed and was severely wounded herself. She became the first woman to receive a military pension from the United States.',
    birthYear: 1751,
    deathYear: 1800,
    verificationStatus: 'VERIFIED',
  },
];

export const monmouthEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-monmouth-battle-1778',
    name: 'Battle of Monmouth',
    startDate: new Date('1778-06-28'),
    datePrecision: 'DAY',
    summary: `The Battle of Monmouth was fought on June 28, 1778, near Monmouth Court House (present-day Freehold) as Washington's army attacked the rear guard of Clinton's British army during its march from Philadelphia to New York. The longest single-day battle of the Revolution, it lasted from mid-morning until nightfall in temperatures exceeding 100 degrees Fahrenheit.

The battle began with Charles Lee's advance force engaging the British and then retreating in confusion. Washington arrived, confronted Lee, and personally reorganized the American line. The army then fought the British to a standstill, with both sides launching attacks and counterattacks across the ravines and hedgerows surrounding Monmouth Court House. Casualties were roughly equal — approximately 350 on each side — though both armies also lost soldiers to heatstroke. Clinton's army withdrew during the night and continued to New York.`,
    significanceWeight: 90,
    lat: 40.2601,
    lng: -74.2726,
    town: { connect: { id: 'us-nj-monmouth' } },
  },
  {
    id: 'event-monmouth-lee-court-martial',
    name: 'Court-Martial of Charles Lee',
    startDate: new Date('1778-07-04'),
    datePrecision: 'DAY',
    summary: `Following the Battle of Monmouth, General Charles Lee was court-martialed on three charges: disobedience of orders in not attacking the enemy, misbehavior before the enemy by making an unnecessary and disorderly retreat, and disrespect to the Commander-in-Chief in letters written after the battle.

The court-martial, which began July 4, 1778, found Lee guilty on all three charges, though it softened the second charge to "unnecessary" retreat rather than "shameful." Lee was suspended from command for twelve months. He never returned to active service, spending his remaining years writing bitter letters defending his actions. The affair revealed deep tensions within the Continental Army's officer corps and raised lasting questions about whether Lee's retreat was incompetent, treasonous, or simply prudent.`,
    significanceWeight: 70,
    town: { connect: { id: 'us-nj-monmouth' } },
  },
  {
    id: 'event-monmouth-molly-pitcher-legend',
    name: 'Molly Pitcher at the Cannon',
    startDate: new Date('1778-06-28'),
    datePrecision: 'DAY',
    summary: `During the Battle of Monmouth, a woman later identified as Mary Ludwig Hays reportedly carried water to artillery crews suffering in the extreme heat and, after her husband William Hays collapsed, took his place swabbing and loading a cannon. Eyewitness accounts, including one by Private Joseph Plumb Martin, describe a woman at the guns during the battle.

The historical Molly Pitcher is likely a composite figure drawing from the experiences of multiple women who served with the army. Mary Ludwig Hays is the most commonly identified candidate, and Pennsylvania granted her an annuity in 1822 for her wartime service. Whether the story describes one woman or many, it documents the essential role of camp followers in the Continental Army — women who cooked, washed, nursed, and sometimes fought alongside the soldiers.`,
    significanceWeight: 75,
    lat: 40.2601,
    lng: -74.2726,
    town: { connect: { id: 'us-nj-monmouth' } },
  },
  {
    id: 'event-monmouth-washington-lee-confrontation',
    name: 'Washington Confronts Lee on the Battlefield',
    startDate: new Date('1778-06-28'),
    datePrecision: 'DAY',
    summary: `As Lee's advance force retreated in confusion, Washington rode forward and encountered Lee near the West Ravine. According to multiple witnesses, Washington demanded to know the reason for the retreat. Lee's responses were confused and contradictory. The exact words exchanged are disputed — Lafayette later said Washington called Lee a "damned poltroon" — but the confrontation was public and furious.

Washington immediately took personal command, positioning troops and artillery along a hedgerow and ordering the retreating soldiers to reform. His presence on the field, riding among the troops under fire, stabilized the army at its most vulnerable moment. The incident cemented Washington's reputation for personal courage and leadership in crisis.`,
    significanceWeight: 75,
    town: { connect: { id: 'us-nj-monmouth' } },
  },
  {
    id: 'event-monmouth-valley-forge-training',
    name: 'Valley Forge Training Tested at Monmouth',
    startDate: new Date('1778-06-28'),
    datePrecision: 'DAY',
    summary: `Monmouth was the first major engagement for the Continental Army after Steuben's training program at Valley Forge during the winter of 1777-78. The army that fought at Monmouth could execute complex maneuvers — advancing and retreating in order, reforming lines under fire, conducting orderly withdrawals — that would have been impossible a year earlier.

The training showed most clearly in the army's ability to recover from Lee's retreat. Rather than disintegrating as it might have in 1776, the army reformed on Washington's orders and fought effectively for the rest of the day. British officers noted the change. The ragged force they had chased across New Jersey eighteen months earlier now moved and fought like professionals.`,
    significanceWeight: 70,
    town: { connect: { id: 'us-nj-monmouth' } },
  },
  {
    id: 'event-monmouth-british-march-philadelphia',
    name: 'British March from Philadelphia to New York',
    startDate: new Date('1778-06-18'),
    datePrecision: 'DAY',
    summary: `After France entered the war as an American ally, the British abandoned Philadelphia and marched their army overland to New York. Clinton's column of approximately 10,000 troops, accompanied by a twelve-mile baggage train, moved slowly across New Jersey in extreme heat.

Washington's army, newly trained and eager for battle, shadowed the British column. The decision to attack the British rear guard led to the Battle of Monmouth. The march itself reflected a strategic shift: with French naval power threatening, the British needed to consolidate their forces and could no longer afford to hold Philadelphia. New Jersey became the corridor through which the war's center of gravity shifted.`,
    significanceWeight: 65,
    town: { connect: { id: 'us-nj-monmouth' } },
  },
  {
    id: 'event-monmouth-heatstroke-casualties',
    name: 'Heat Casualties at Monmouth',
    startDate: new Date('1778-06-28'),
    datePrecision: 'DAY',
    summary: `The Battle of Monmouth was fought in extreme heat, with temperatures reportedly exceeding 100 degrees Fahrenheit. Soldiers on both sides collapsed and died from heatstroke — the British, in their heavy wool uniforms and carrying full equipment, may have suffered more severely.

The heat shaped the battle tactically, forcing pauses in fighting and limiting the ability of both sides to pursue advantages. Private Joseph Plumb Martin of the Continental Army recorded seeing soldiers fall from heat as readily as from gunfire. The water carriers — including the woman who became Molly Pitcher — were not performing a symbolic service but a survival function without which gun crews could not have continued firing.`,
    significanceWeight: 55,
    town: { connect: { id: 'us-nj-monmouth' } },
  },
  {
    id: 'event-monmouth-british-night-withdrawal',
    name: 'British Night Withdrawal After Monmouth',
    startDate: new Date('1778-06-29'),
    datePrecision: 'DAY',
    summary: `After the day-long battle ended in stalemate, Clinton's army quietly withdrew during the night of June 28-29, continuing its march toward Sandy Hook and transport ships to New York. Washington considered pursuing but decided his exhausted army could not effectively engage the British again.

The withdrawal meant the battle had no decisive tactical result. Both sides claimed victory — the British because they completed their march to New York, the Americans because they had fought the British to a standstill in open battle for the first time. The strategic significance favored the Americans: the Continental Army had demonstrated that it could meet the British army in a conventional engagement and hold its ground.`,
    significanceWeight: 60,
    town: { connect: { id: 'us-nj-monmouth' } },
  },
];

export const monmouthStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-monmouth-molly-pitcher-voice',
    title: 'Water, Then Powder',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-monmouth-molly-pitcher' } },
    verificationStatus: 'ORAL_TRADITION',
    textVersion: `The story of Molly Pitcher is both true and not true. That is the difficulty of it. A woman — probably Mary Ludwig Hays, possibly others — carried water to artillery crews at Monmouth and then, when a man fell at the guns, took his place. Soldiers saw her. Joseph Plumb Martin wrote about her. She is not invented.

But the legend smoothed away everything complicated. The woman at the cannon becomes a symbol of feminine patriotism, sanitized and bronze-cast. The reality was different. Camp followers like Mary Hays were working women — washerwomen, cooks, nurses — who traveled with the army because they had nowhere else to go or because their husbands were soldiers and the army was where the family lived.

At Monmouth, the heat was killing men as surely as bullets. Water carriers kept gun crews alive. When Mary's husband William collapsed — from heat, not a wound, according to the best evidence — she did not step forward in a moment of patriotic inspiration. She stepped forward because she was already there, already working, already part of the gun crew's operation. She knew how the cannon worked because she had been watching it work all day.

The Pennsylvania legislature granted her an annuity in 1822, citing her service at Monmouth. The official record does not call her Molly Pitcher. It calls her Mary Hays and acknowledges her as a soldier.

The Molly Pitcher monument at the Monmouth Battlefield marks her story — whichever version of it you prefer. But the version that matters is the plainest one: a woman did the work that needed doing, under fire, in unbearable heat, and the army recognized it.`,
    audioScript: `The story of Molly Pitcher is both true and not true. A woman carried water to gun crews at Monmouth and took a fallen soldier's place at the cannon. Soldiers saw her. She is not invented. But the legend smoothed away everything complicated.

Camp followers like Mary Hays were working women who traveled with the army. At Monmouth, she did not step forward in patriotic inspiration. She stepped forward because she was already there, already part of the crew. She knew how the cannon worked because she had been watching it all day.

Pennsylvania granted her an annuity in 1822, calling her Mary Hays and acknowledging her as a soldier. The version that matters is the plainest one: a woman did the work that needed doing, under fire, and the army recognized it.`,
    tags: ['women', 'artillery', 'camp-followers', 'folk-hero'],
    town: { connect: { id: 'us-nj-monmouth' } },
  },
  {
    id: 'story-monmouth-modern-battlefield-park',
    title: 'The Heat You Can Still Feel',
    storyType: 'MODERN_VOICE',
    narratorName: 'Park Interpreter',
    narratorRole: 'Monmouth Battlefield State Park',
    verificationStatus: 'UNVERIFIED',
    textVersion: `If you want to understand Monmouth, come in late June. Come on a hot day. Walk the battlefield when the temperature is in the nineties and the humidity makes your clothes stick to your skin. Then imagine wearing a wool uniform, carrying a musket and sixty rounds of ammunition, and fighting for eight hours.

The park covers most of the original battlefield, and the landscape has not changed as much as you might expect. The ravines are still there. The hedgerows are gone, but you can see where they were. The terrain tells you why the battle unfolded the way it did — the ravines created natural defensive positions, the open fields between them became killing grounds.

What visitors do not expect is the complexity of the story. People come knowing two things: Molly Pitcher and Washington yelling at Charles Lee. Both stories are real, but the battle was much bigger than either. It lasted all day. Thousands of men fought in conditions that were literally lethal even without bullets. The heat killed soldiers on both sides.

We spend a lot of time talking about the transformation of the army. The soldiers who fought here had spent the winter at Valley Forge being trained by Steuben. Monmouth was their exam. They passed. The army that retreated in chaos across New Jersey in 1776 stood and fought the British to a draw in 1778. That change — from militia to professional army — is the real story of Monmouth, and it is the story that connects this battlefield to everything that came after, all the way to Yorktown.

The park is quiet most days. You can walk the trails and not see another person. That quiet is part of the experience. It is hard to imagine the noise — the cannon, the musket fire, the shouting — in a place this peaceful. But that contrast is the point of battlefield preservation: holding the ground so that people can stand where it happened and reckon with the distance between then and now.`,
    audioScript: `If you want to understand Monmouth, come in late June on a hot day. Walk the battlefield in the nineties. Then imagine wool uniforms, muskets, and eight hours of fighting.

The park covers most of the original battlefield. The terrain tells you why the battle unfolded as it did — ravines created defensive positions, open fields became killing grounds.

We spend time talking about the army's transformation. These soldiers had been trained by Steuben at Valley Forge. Monmouth was their exam. The army that retreated in chaos in 1776 fought the British to a draw in 1778. That change is the real story, connecting this battlefield to Yorktown.

The park is quiet most days. That quiet is part of the experience — holding the ground so people can reckon with the distance between then and now.`,
    tags: ['battlefield', 'landscape', 'interpretation', 'army-transformation'],
    town: { connect: { id: 'us-nj-monmouth' } },
  },
];

// ============================================================================
// NEW BRUNSWICK
// ============================================================================

export const newBrunswickTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `New Brunswick sat at the intersection of roads, rivers, and armies throughout the Revolution. Positioned on the Raritan River at the crossing point of the main road between New York and Philadelphia, the town was a place that every army moving through New Jersey had to pass through, occupy, or defend. It was not the site of a single famous battle, but it was a strategic fulcrum that both sides fought to control.

The British used New Brunswick as a major supply depot during their occupation of central New Jersey in late 1776 and again during the campaigns of 1777. The town's location on the Raritan made it a natural logistics hub — supplies could be moved upriver from the coast, and the road network connected it to Trenton, Princeton, and the passes through the Watchung Mountains. When Washington retreated across New Jersey in December 1776, he passed through New Brunswick with the British close behind.

The town also experienced the full weight of military occupation. British and Hessian troops quartered in homes, commandeered supplies, and clashed with local residents. The occupation radicalized many New Jersey civilians who had been neutral or even Loyalist-leaning, contributing to the partisan warfare that made New Jersey one of the war's most contested states.

New Brunswick's Revolutionary significance is the significance of geography. It mattered not because of who lived there or what was decided there, but because of where it was. Control of the Raritan crossing meant control of the corridor between the two largest British-held cities in America.`,
};

export const newBrunswickPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-new-brunswick-william-franklin',
    name: 'William Franklin',
    roles: ['Royal Governor', 'Loyalist'],
    bioShort:
      'Last royal governor of New Jersey and illegitimate son of Benjamin Franklin. William Franklin was arrested in 1776 and imprisoned, becoming one of the most prominent Loyalists in America. His break with his father over independence was permanent.',
    birthYear: 1730,
    deathYear: 1813,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-new-brunswick-frederick-frelinghuysen',
    name: 'Frederick Frelinghuysen',
    roles: ['Continental Army Colonel', 'Militia Officer', 'Politician'],
    bioShort:
      'New Brunswick-area militia colonel who led the Somerset County militia during the Revolution. Frelinghuysen served at Trenton and Princeton and represented New Jersey in the Continental Congress.',
    birthYear: 1753,
    deathYear: 1804,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-new-brunswick-lord-cornwallis',
    name: 'Charles Cornwallis (at New Brunswick)',
    roles: ['British Lieutenant General', 'Pursuing Commander'],
    bioShort:
      'British general who pursued Washington\'s army through New Brunswick in December 1776 and used the town as a forward base during the New Jersey campaigns. Cornwallis\'s failure to catch Washington before the Delaware crossing was a critical British error.',
    birthYear: 1738,
    deathYear: 1805,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-new-brunswick-william-livingston',
    name: 'William Livingston',
    roles: ['Governor', 'Patriot Leader', 'Militia Commander'],
    bioShort:
      'First governor of the State of New Jersey, serving throughout the war. Livingston coordinated the state militia, managed a deeply divided population, and was a frequent target of British and Loyalist kidnapping plots.',
    birthYear: 1723,
    deathYear: 1790,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-new-brunswick-jacob-hyer',
    name: 'Jacob Hyer',
    roles: ['Ferryman', 'Patriot', 'Civilian'],
    bioShort:
      'Operated the ferry crossing at New Brunswick on the Raritan River. Hyer\'s ferry was a critical transportation link and was contested by both armies during the New Jersey campaigns.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ANECDOTAL',
  },
  {
    id: 'person-new-brunswick-john-neilson',
    name: 'John Neilson',
    roles: ['Merchant', 'Patriot Leader', 'Militia Brigadier General'],
    bioShort:
      'Prominent New Brunswick merchant who served as a brigadier general in the New Jersey militia. Neilson\'s warehouse and wharf on the Raritan were used for military supply operations, and his home served as a headquarters for Continental officers.',
    birthYear: 1745,
    deathYear: 1833,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-new-brunswick-susannah-livingston',
    name: 'Susannah French Livingston',
    roles: ['Governor\'s Wife', 'Household Manager', 'War Supporter'],
    bioShort:
      'Wife of Governor William Livingston who managed the family estate, Liberty Hall, while her husband directed the war effort. She faced multiple threats from Loyalist raiders and British forces targeting the governor.',
    birthYear: 1723,
    deathYear: 1789,
    verificationStatus: 'ANECDOTAL',
  },
  {
    id: 'person-new-brunswick-simcoe',
    name: 'John Graves Simcoe',
    roles: ['British Officer', 'Queen\'s Rangers Commander'],
    bioShort:
      'British officer commanding the Queen\'s Rangers, a Loyalist unit that operated extensively in central New Jersey. Simcoe\'s rangers conducted raids and intelligence operations in the New Brunswick area, contributing to the partisan warfare that defined the New Jersey campaign.',
    birthYear: 1752,
    deathYear: 1806,
    verificationStatus: 'VERIFIED',
  },
];

export const newBrunswickEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-new-brunswick-washington-retreat',
    name: 'Washington\'s Army Retreats Through New Brunswick',
    startDate: new Date('1776-12-01'),
    datePrecision: 'DAY',
    summary: `Washington's battered Continental Army passed through New Brunswick on December 1, 1776, during its retreat across New Jersey. The army was in desperate condition — reduced to roughly 3,000 effective troops, many without shoes or adequate clothing. Washington paused briefly to collect supplies and destroy the bridge over the Raritan before continuing south toward Trenton.

The pause at New Brunswick was a calculated risk. Washington needed time to gather provisions and hoped that reinforcements from General Lee might arrive. They did not. Cornwallis's pursuing force arrived at the Raritan shortly after Washington departed. The destroyed bridge delayed the British pursuit by several hours — a small margin that proved critical to the army's survival.`,
    significanceWeight: 75,
    lat: 40.4862,
    lng: -74.4518,
    town: { connect: { id: 'us-nj-new-brunswick' } },
  },
  {
    id: 'event-new-brunswick-british-supply-depot',
    name: 'British Establish Supply Depot',
    startDate: new Date('1776-12-07'),
    datePrecision: 'RANGE',
    summary: `After occupying New Brunswick in December 1776, the British established the town as a major supply depot for their chain of outposts across central New Jersey. The Raritan River provided water access to the coast, and the road network made New Brunswick the logistical hub of the British position.

Warehouses along the river stored provisions, ammunition, and forage. The depot's existence made New Brunswick a target for American raids and intelligence operations. When Washington's victories at Trenton and Princeton forced the British to contract their lines in January 1777, New Brunswick became one of the few positions they chose to hold, reflecting its logistical importance.`,
    significanceWeight: 65,
    town: { connect: { id: 'us-nj-new-brunswick' } },
  },
  {
    id: 'event-new-brunswick-raritan-bridge-destroyed',
    name: 'Destruction of the Raritan Bridge',
    startDate: new Date('1776-12-01'),
    datePrecision: 'DAY',
    summary: `As Washington's army crossed the Raritan River at New Brunswick during its retreat, Continental troops destroyed the bridge to delay the British pursuit. The destruction bought precious hours — Cornwallis had to wait for the river to become fordable or for engineers to construct a temporary crossing.

The bridge destruction was one of several delaying actions that allowed Washington to stay ahead of the British long enough to cross the Delaware. Each delay — a destroyed bridge, a rearguard skirmish, a demolished ford — added hours to the British timetable. The cumulative effect was that Washington reached the Delaware with enough time to collect all the boats on the New Jersey shore.`,
    significanceWeight: 60,
    town: { connect: { id: 'us-nj-new-brunswick' } },
  },
  {
    id: 'event-new-brunswick-forage-wars',
    name: 'Forage Wars in Central New Jersey',
    startDate: new Date('1777-01-15'),
    datePrecision: 'RANGE',
    summary: `After Washington's victories at Trenton and Princeton contracted the British lines, a guerrilla-style conflict erupted across central New Jersey. New Jersey militia and Continental detachments attacked British and Hessian foraging parties that ventured out from New Brunswick and other garrisons to collect food, hay, and firewood.

These small-scale engagements — often involving fewer than a hundred men per side — are collectively known as the Forage Wars. They were brutal, characterized by ambushes, reprisals, and violence against civilians. The Forage Wars made the British occupation of New Jersey untenable by raising the cost of every supply expedition and demonstrated the effectiveness of partisan resistance against conventional forces.`,
    significanceWeight: 70,
    town: { connect: { id: 'us-nj-new-brunswick' } },
  },
  {
    id: 'event-new-brunswick-howe-occupation',
    name: 'General Howe Headquartered at New Brunswick',
    startDate: new Date('1777-06-12'),
    datePrecision: 'RANGE',
    summary: `British General William Howe used New Brunswick as a forward base during the 1777 campaign, concentrating forces there before his ultimately abortive attempt to draw Washington into a decisive battle in New Jersey. Howe maneuvered his army around the Watchung Mountains, trying to lure the Continental Army out of its strong position in the hills.

Washington refused to take the bait, keeping his army in the mountains where the terrain favored defense. Howe eventually abandoned his New Jersey campaign and moved his army by sea to attack Philadelphia via the Chesapeake. The episode demonstrated Washington's growing strategic maturity and the British failure to force a decisive engagement on their terms.`,
    significanceWeight: 65,
    town: { connect: { id: 'us-nj-new-brunswick' } },
  },
  {
    id: 'event-new-brunswick-civilian-suffering',
    name: 'Civilian Hardship Under Occupation',
    startDate: new Date('1776-12-10'),
    datePrecision: 'RANGE',
    summary: `The British and Hessian occupation of New Brunswick brought severe hardship to civilian residents. Soldiers quartered in private homes, requisitioned livestock and grain, destroyed fences for firewood, and in some cases assaulted residents. Hessian diary entries record the systematic looting of the town.

The occupation experience pushed many previously neutral or Loyalist-leaning residents toward the patriot cause. Reports of mistreatment — particularly of women — circulated widely and were used as propaganda by patriot leaders. The transformation of civilian sentiment in occupied New Jersey was a significant factor in the growth of militia resistance and the Forage Wars that followed.`,
    significanceWeight: 60,
    town: { connect: { id: 'us-nj-new-brunswick' } },
  },
  {
    id: 'event-new-brunswick-neilson-house-headquarters',
    name: 'Neilson House Used as Military Headquarters',
    startDate: new Date('1777-01-01'),
    datePrecision: 'RANGE',
    summary: `The home of patriot merchant John Neilson served as a headquarters for Continental Army officers during operations around New Brunswick. Neilson, who served as a militia brigadier general, made his property available for military use throughout the war.

The Neilson House, located near the Raritan River, provided a strategic vantage point for observing British movements in and around the town. The building survived the war and subsequent centuries and remains one of the few standing Revolutionary-era structures in New Brunswick, offering a tangible connection to the town's military significance.`,
    significanceWeight: 50,
    lat: 40.4862,
    lng: -74.4518,
    town: { connect: { id: 'us-nj-new-brunswick' } },
  },
  {
    id: 'event-new-brunswick-british-withdrawal-1777',
    name: 'British Withdrawal from New Brunswick',
    startDate: new Date('1777-06-22'),
    datePrecision: 'DAY',
    summary: `After failing to draw Washington into battle in central New Jersey, Howe ordered the evacuation of New Brunswick on June 22, 1777, pulling his forces back toward the coast. The withdrawal ended months of British occupation and signaled the abandonment of the overland approach to Philadelphia.

For New Brunswick residents, the British departure brought relief but also uncertainty. The town had been damaged by occupation, its economy disrupted, and its population divided by Loyalist and patriot sympathies. The withdrawal did not end the war's impact on the town — partisan raids, militia operations, and supply movements continued to affect the area for the duration of the conflict.`,
    significanceWeight: 55,
    town: { connect: { id: 'us-nj-new-brunswick' } },
  },
];

export const newBrunswickStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-new-brunswick-retreat-perspective',
    title: 'The Army That Walked Through',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-new-brunswick-john-neilson' } },
    verificationStatus: 'ANECDOTAL',
    textVersion: `John Neilson watched two armies pass through his town in the space of a week, and neither one was an army he would have recognized from the recruiting posters.

Washington's soldiers came through first, in early December 1776. They looked like what they were: a beaten army in retreat. Men without shoes left bloody footprints on the frozen roads. They were hungry, exhausted, and diminishing by the hour as enlistments expired and soldiers simply walked away. Neilson, a merchant and militia brigadier, had provisions to offer but not enough to make a difference.

Washington paused at New Brunswick long enough to burn the bridge over the Raritan and collect what supplies he could. Then he was gone, south toward Trenton and the Delaware, and the town waited for what was coming next.

What came next was Cornwallis. The British arrived at the Raritan within hours, and behind them came the Hessians. The occupation began immediately. Soldiers moved into homes, took what they wanted, and treated the town as conquered territory. Neilson's own house became a point of military interest — its position near the river made it useful for observing movements.

The occupation lasted for months. Neilson watched his town transformed into a supply depot for an army he had pledged to fight. Warehouses on the river filled with British provisions. Soldiers patrolled the streets. Loyalist neighbors settled old scores.

But the occupation also clarified things. Neighbors who had been uncertain about independence saw what British authority actually looked like when it arrived with bayonets. By the time the Forage Wars began in January, Neilson found that he had more volunteers for the militia than he had muskets to arm them.

The war came through New Brunswick because it had to — the town sat on the only road that mattered between New York and Philadelphia. Geography made it important. What the people who lived there did with that importance was their own choice.`,
    audioScript: `John Neilson watched two armies pass through his town in a week. Washington's men came first — beaten, hungry, leaving bloody footprints on frozen roads. They burned the bridge over the Raritan and moved south.

Then came Cornwallis and the Hessians. The occupation began immediately. Soldiers took homes, treated the town as conquered territory. Neilson's own house became a military observation post.

But the occupation clarified things. Neighbors who had been uncertain about independence saw what British authority looked like with bayonets. By January, Neilson had more militia volunteers than muskets to arm them.

The war came through New Brunswick because geography demanded it. What the people there did with that importance was their own choice.`,
    tags: ['occupation', 'logistics', 'civilian-experience', 'geography'],
    town: { connect: { id: 'us-nj-new-brunswick' } },
  },
  {
    id: 'story-new-brunswick-modern-raritan',
    title: 'The River That Shaped the War',
    storyType: 'MODERN_VOICE',
    narratorName: 'Local Historian',
    narratorRole: 'Middlesex County Historical Society',
    verificationStatus: 'UNVERIFIED',
    textVersion: `New Brunswick does not look like a Revolutionary War town. It looks like what it is: a mid-sized New Jersey city with a university, a hospital district, and an old downtown that has been rebuilt several times. The Raritan River still runs through the center of town, but the wharves and ferry landings are gone. The bridge Washington burned has been replaced many times over.

That erasure is part of the story. New Jersey's Revolutionary history is buried under layers of subsequent development in a way that New England's is not. There is no Lexington Green in New Brunswick, no preserved battlefield with interpretive signs. The Neilson House survives, somewhat incongruously, surrounded by modern buildings. A few markers indicate where things happened. Most visitors do not notice them.

But the geography is still legible if you know what to look for. Stand on the Route 18 bridge and look at the Raritan. That crossing point is why the town exists and why every army that moved through New Jersey during the Revolution passed through here. The river was too deep to ford easily and too wide to cross without boats or bridges. Control the crossing, control the road. It was that simple.

What I try to communicate to people is that New Brunswick's importance was structural, not dramatic. There was no single heroic moment here. Instead, there were months of occupation, foraging raids, militia ambushes, and civilian suffering — the grinding, unglamorous reality of a war fought in your neighborhood. That reality shaped New Jersey's identity as the Crossroads of the Revolution more than any single battle.

The artifacts we have — military buttons, cannonballs, fragments of camp equipment pulled from construction sites — appear without warning whenever someone digs a foundation. The Revolution is literally under our feet. The challenge is convincing people to look down.`,
    audioScript: `New Brunswick does not look like a Revolutionary War town. It is a mid-sized New Jersey city where the wharves and ferry landings are gone and the bridge Washington burned has been replaced many times.

But the geography is still legible. Stand on the Route 18 bridge and look at the Raritan. That crossing point is why every army moving through New Jersey passed through here. Control the crossing, control the road.

New Brunswick's importance was structural, not dramatic. No single heroic moment — instead, months of occupation, foraging raids, and civilian suffering. The grinding reality of war in your neighborhood.

Artifacts appear whenever someone digs a foundation. The Revolution is literally under our feet. The challenge is convincing people to look down.`,
    tags: ['geography', 'urban-history', 'archaeology', 'crossroads'],
    town: { connect: { id: 'us-nj-new-brunswick' } },
  },
];

// ============================================================================
// FORT LEE
// ============================================================================

export const fortLeeTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Fort Lee exists in the American story as the place where everything went wrong at once. In November 1776, the twin fortifications of Fort Washington on the Manhattan side and Fort Lee on the New Jersey Palisades were supposed to control the Hudson River and prevent the British from moving freely between New York and New Jersey. They failed at both objectives. Fort Washington fell on November 16 in a devastating assault that cost the Americans nearly 3,000 prisoners. Four days later, Cornwallis led 5,000 troops up the Palisades and nearly captured the Fort Lee garrison before Nathanael Greene evacuated just ahead of the British.

The fall of the two forts was the low point of 1776 — lower, in some ways, than the defeats on Long Island and Manhattan. The loss of Fort Washington was the largest surrender of American troops until the Civil War, and the hasty evacuation of Fort Lee left behind cannon, tents, and supplies the Continental Army could not afford to lose. The retreat that followed — across the Hackensack, across the Passaic, through Newark and New Brunswick and Trenton — was the march that nearly ended the Revolution.

But Fort Lee also matters because of Nathanael Greene. The young Rhode Island general who bore much of the blame for recommending that Fort Washington be held learned from the disaster and became one of the war's most effective commanders. His decision to evacuate Fort Lee quickly, saving his troops even at the cost of equipment, showed the pragmatic judgment that would later win the Southern campaign.

The Palisades cliffs where Fort Lee stood are now a state park. The terrain — steep, wooded, commanding views of the Hudson — explains both why the fort was built there and why it could not be held once the position across the river was lost.`,
};

export const fortLeePeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-fort-lee-nathanael-greene',
    name: 'Nathanael Greene',
    roles: ['Continental Army Major General', 'Fort Lee Commander'],
    bioShort:
      'Rhode Island Quaker who commanded Fort Lee and recommended holding Fort Washington — a decision that contributed to the worst American defeat of 1776. Greene learned from the disaster and became one of the most effective generals of the war, later winning the Southern campaign.',
    birthYear: 1742,
    deathYear: 1786,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-fort-lee-charles-cornwallis-fort-lee',
    name: 'Charles Cornwallis (at Fort Lee)',
    roles: ['British Lieutenant General', 'Assault Commander'],
    bioShort:
      'Led approximately 5,000 British troops up the Palisades on November 20, 1776, nearly capturing the Fort Lee garrison. Cornwallis\'s rapid advance forced Greene into a hasty evacuation that left behind critical supplies.',
    birthYear: 1738,
    deathYear: 1805,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-fort-lee-robert-magaw',
    name: 'Robert Magaw',
    roles: ['Continental Army Colonel', 'Fort Washington Commander'],
    bioShort:
      'Commander of Fort Washington who surrendered the garrison of nearly 3,000 troops on November 16, 1776, after a massive British assault. The loss was the largest American surrender until the Civil War and directly precipitated the crisis at Fort Lee.',
    birthYear: 1738,
    deathYear: 1790,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-fort-lee-thomas-paine',
    name: 'Thomas Paine',
    roles: ['Writer', 'Propagandist', 'Continental Army Volunteer'],
    bioShort:
      'Author of "Common Sense" who was present with the army during the retreat from Fort Lee. Paine began writing "The American Crisis" during the march across New Jersey, producing the famous opening line about times that try men\'s souls.',
    birthYear: 1737,
    deathYear: 1809,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-fort-lee-william-howe',
    name: 'William Howe',
    roles: ['British Commander-in-Chief', 'General'],
    bioShort:
      'British commander-in-chief who ordered the assault on Fort Washington and the subsequent move against Fort Lee. Howe\'s decision to pursue Washington across New Jersey rather than consolidating his gains reflected confidence that the rebellion was nearly over.',
    birthYear: 1729,
    deathYear: 1814,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-fort-lee-john-cadwalader',
    name: 'John Cadwalader',
    roles: ['Militia General', 'Philadelphia Patriot'],
    bioShort:
      'Philadelphia militia commander who observed the fall of Fort Lee and reported on the deteriorating military situation. Cadwalader later participated in the Trenton and Princeton campaigns that reversed the momentum lost in November.',
    birthYear: 1742,
    deathYear: 1786,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-fort-lee-peter-kemble',
    name: 'Peter Kemble',
    roles: ['Loyalist', 'Property Owner', 'Colonial Official'],
    bioShort:
      'Prominent New Jersey Loyalist whose family estate was near the Fort Lee area. Kemble served as president of the New Jersey Council before the Revolution and represented the colonial establishment that the war displaced.',
    birthYear: 1704,
    deathYear: 1789,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-fort-lee-mary-ludwig',
    name: 'Mary Hay',
    roles: ['Camp Follower', 'Civilian', 'War Witness'],
    bioShort:
      'One of the women who accompanied the army during the retreat from Fort Lee. Camp followers endured the same march as the soldiers, carrying children and possessions through the same freezing conditions while receiving none of the military support.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ANECDOTAL',
  },
];

export const fortLeeEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-fort-lee-fall-fort-washington',
    name: 'Fall of Fort Washington',
    startDate: new Date('1776-11-16'),
    datePrecision: 'DAY',
    summary: `On November 16, 1776, approximately 8,000 British and Hessian troops assaulted Fort Washington on the northern tip of Manhattan in a coordinated attack from multiple directions. Colonel Robert Magaw's garrison of roughly 2,900 troops was overwhelmed after several hours of fighting. Magaw surrendered the entire garrison — the largest American loss of prisoners until Harpers Ferry in 1862.

Greene, watching from Fort Lee across the Hudson, saw the disaster unfold but could not intervene. He had strongly recommended that Fort Washington be held, and the loss fell heavily on his reputation. Washington had deferred to Greene's judgment, a decision both men would regret. The captured soldiers endured brutal imprisonment in British prison ships, where many died of disease and neglect.`,
    significanceWeight: 90,
    lat: 40.8510,
    lng: -73.9420,
    town: { connect: { id: 'us-nj-fort-lee' } },
  },
  {
    id: 'event-fort-lee-evacuation',
    name: 'Evacuation of Fort Lee',
    startDate: new Date('1776-11-20'),
    datePrecision: 'DAY',
    summary: `Four days after Fort Washington fell, Cornwallis led approximately 5,000 British troops across the Hudson and up the Palisades north of Fort Lee. A local Loyalist guided the column up a path through the cliffs. Greene received warning from a patrol and ordered an immediate evacuation, abandoning the fort with its cannon, tents, entrenching tools, and significant quantities of provisions.

The garrison escaped with little more than the men themselves. The abandonment of equipment was a serious material loss for an army that could not easily replace cannon and camp supplies. But Greene's quick decision saved the troops — roughly 2,000 soldiers who would fight again at Trenton and Princeton. The choice between saving men and saving equipment became one of the war's clearest illustrations of pragmatic command.`,
    significanceWeight: 85,
    lat: 40.8509,
    lng: -73.9712,
    town: { connect: { id: 'us-nj-fort-lee' } },
  },
  {
    id: 'event-fort-lee-palisades-ascent',
    name: 'British Ascent of the Palisades',
    startDate: new Date('1776-11-20'),
    datePrecision: 'DAY',
    summary: `Cornwallis's assault force crossed the Hudson River in flatboats during the early morning of November 20 and landed at Lower Closter Dock, approximately six miles north of Fort Lee. Guided by a local Loyalist familiar with the terrain, the British column climbed the steep Palisades cliffs using a path that the Americans had not adequately guarded.

The ascent demonstrated both the terrain advantages and vulnerabilities of the Palisades position. The cliffs were natural fortifications, but they could be scaled at several points by troops who knew the routes. The Americans' failure to picket all the approach paths reflected the garrison's reduced state — many troops had already been drawn away to reinforce other positions.`,
    significanceWeight: 65,
    lat: 40.8900,
    lng: -73.9600,
    town: { connect: { id: 'us-nj-fort-lee' } },
  },
  {
    id: 'event-fort-lee-retreat-across-nj',
    name: 'Beginning of the Retreat Across New Jersey',
    startDate: new Date('1776-11-20'),
    datePrecision: 'DAY',
    summary: `The evacuation of Fort Lee marked the beginning of the Continental Army's retreat across New Jersey — a march of approximately ninety miles over two weeks that nearly destroyed the army and the Revolution. From Fort Lee, the army crossed the Hackensack River to Hackensack, then to the Passaic River and Newark, then south through New Brunswick and Princeton to Trenton and across the Delaware.

At each stage, the army shrank as enlistments expired, soldiers deserted, and militia drifted home. Thomas Paine, marching with the army, began writing "The American Crisis" during this retreat. The march ended at the Delaware River in early December, where Washington collected all available boats and waited for the moment to strike back.`,
    significanceWeight: 80,
    town: { connect: { id: 'us-nj-fort-lee' } },
  },
  {
    id: 'event-fort-lee-paine-crisis',
    name: 'Thomas Paine Begins Writing "The American Crisis"',
    startDate: new Date('1776-11-25'),
    datePrecision: 'RANGE',
    summary: `Thomas Paine, who had joined the army as a volunteer aide-de-camp, was present during the retreat from Fort Lee. During the march across New Jersey, he began composing "The American Crisis," the pamphlet that opened with the famous line: "These are the times that try men's souls."

Published on December 19, 1776 — six days before Washington crossed the Delaware — the pamphlet was read aloud to Continental troops and circulated throughout the states. Paine's ability to transform the misery of the retreat into a compelling argument for perseverance was one of the Revolution's most consequential acts of persuasion. The words were written on a drumhead, by tradition, during the darkest passage of the war.`,
    significanceWeight: 75,
    town: { connect: { id: 'us-nj-fort-lee' } },
  },
  {
    id: 'event-fort-lee-hudson-river-defense-failure',
    name: 'Failure of the Hudson River Defense Strategy',
    startDate: new Date('1776-11-16'),
    datePrecision: 'RANGE',
    summary: `The twin forts — Fort Washington on Manhattan and Fort Lee on the Palisades — were built to prevent British warships from sailing up the Hudson River and severing communications between New England and the middle colonies. The strategy failed. British ships passed between the forts with minimal damage, proving that shore batteries alone could not close the river.

The failure raised difficult questions about whether the forts should have been abandoned earlier. Greene argued for holding Fort Washington; Washington overrode his own doubts and deferred to Greene. After the disaster, both men acknowledged the error. The episode became a lasting lesson in the dangers of holding untenable positions for symbolic reasons when the strategic rationale had already been disproven.`,
    significanceWeight: 70,
    town: { connect: { id: 'us-nj-fort-lee' } },
  },
  {
    id: 'event-fort-lee-construction-1776',
    name: 'Construction of Fort Lee',
    startDate: new Date('1776-07-01'),
    datePrecision: 'MONTH',
    summary: `Fort Lee was constructed in the summer and fall of 1776 on the New Jersey Palisades overlooking the Hudson River. Originally called Fort Constitution, it was renamed Fort Lee after General Charles Lee. The fort was designed to work in conjunction with Fort Washington across the river to control Hudson River traffic.

The fortification consisted of earthworks, gun emplacements, and camp facilities on the bluff above the river. Its position atop the Palisades cliffs gave it a commanding view of the Hudson but also made resupply and communication difficult. The fort was never fully completed — the speed of British operations in the fall of 1776 overtook construction timelines.`,
    significanceWeight: 55,
    lat: 40.8509,
    lng: -73.9712,
    town: { connect: { id: 'us-nj-fort-lee' } },
  },
  {
    id: 'event-fort-lee-chevaux-de-frise',
    name: 'Chevaux-de-Frise Deployed in the Hudson',
    startDate: new Date('1776-08-01'),
    datePrecision: 'MONTH',
    summary: `To supplement the forts' cannon fire, the Americans sank chevaux-de-frise — heavy wooden frames studded with iron-tipped spikes — in the Hudson River between Fort Washington and Fort Lee. These underwater obstacles were designed to damage or sink British ships attempting to pass upriver.

The chevaux-de-frise proved ineffective. British vessels navigated around or through them with limited damage. The failure of the river obstructions, combined with the inability of the forts' guns to stop ships in a wide river, meant that the entire defensive concept was flawed. The costly investment in the twin-fort strategy consumed resources and manpower that might have been used more effectively elsewhere.`,
    significanceWeight: 50,
    town: { connect: { id: 'us-nj-fort-lee' } },
  },
];

export const fortLeeStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-fort-lee-greene-perspective',
    title: 'The Worst Week of the War',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-fort-lee-nathanael-greene' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Nathanael Greene stood on the Palisades and watched Fort Washington fall. From the New Jersey cliffs, he could see the British and Hessian columns closing in from three sides. He could hear the firing. He could not do anything about it.

Greene had recommended holding Fort Washington. He had argued that the position was defensible, that the garrison could be evacuated by boat if necessary, that abandoning the fort would surrender control of the upper Hudson. Washington had listened to Greene's argument and, against his own instincts, agreed.

Now nearly three thousand men were being marched into captivity. Many of them would die on British prison ships in Wallabout Bay, crowded into rotting hulks where disease killed more men than the British army ever did. Greene bore the weight of their fate for the rest of his life.

Four days later, Cornwallis came up the Palisades. Greene had at most an hour's warning. There was no time to save the cannon, no time to pack the tents, no time to load the wagons. He saved the men. Two thousand soldiers walked away from Fort Lee with whatever they were carrying and started the long retreat across New Jersey.

It was, by any measure, a catastrophe. The twin forts were gone. The army was shrinking by the day. Enlistments were expiring. The British seemed unstoppable. Thomas Paine was there, watching, and what he saw became the opening of "The American Crisis": these are the times that try men's souls.

But Greene learned. The general who had insisted on holding Fort Washington became the general who knew when to let go. In the Southern campaign four years later, Greene would fight a war of movement and strategic retreat that exhausted Cornwallis and won the war. The lesson of Fort Lee — save the army, sacrifice everything else — became his operating principle.

The irony is almost too neat: the man who learned the hardest lesson of 1776 on the Palisades of New Jersey was the man who used that lesson to break Cornwallis in the Carolinas.`,
    audioScript: `Nathanael Greene stood on the Palisades and watched Fort Washington fall. He had recommended holding it. Now nearly three thousand men were being marched into captivity.

Four days later, Cornwallis came up the Palisades. Greene had an hour's warning. No time to save the cannon or tents. He saved the men — two thousand soldiers who walked away carrying whatever they had. It was, by any measure, a catastrophe.

But Greene learned. The general who insisted on holding Fort Washington became the general who knew when to let go. In the Southern campaign four years later, that lesson — save the army, sacrifice everything else — became his operating principle.

The man who learned the hardest lesson of 1776 on these cliffs was the man who used it to break Cornwallis in the Carolinas.`,
    tags: ['command-failure', 'retreat', 'leadership', 'learning-from-defeat'],
    town: { connect: { id: 'us-nj-fort-lee' } },
  },
  {
    id: 'story-fort-lee-modern-palisades',
    title: 'The Cliffs Remember',
    storyType: 'MODERN_VOICE',
    narratorName: 'Park Historian',
    narratorRole: 'Fort Lee Historic Park, Palisades Interstate Park Commission',
    verificationStatus: 'UNVERIFIED',
    textVersion: `Fort Lee Historic Park sits on top of the Palisades, directly above the George Washington Bridge. The juxtaposition is startling. You stand at the reconstructed gun battery, looking out at a view that is simultaneously 1776 and now — the Hudson River is the same river the British crossed, but the skyline beyond it is Manhattan's.

Most of our visitors come for the view. They see the bridge, the river, the city. Then they notice the earthworks, the interpretive signs, the reconstructed battery. And the question comes: there was a fort here?

There was. And understanding why changes how you see the landscape. The Palisades are a natural fortress — three hundred feet of vertical basalt cliff. The Americans built Fort Lee here because the terrain seemed to make it impregnable. What they did not account for was that the cliffs could be climbed, that the British had local guides who knew the paths, and that a fort on top of a cliff is useless if the position across the river is lost.

The park preserves about eight acres of the original fort site. We have reconstructed a section of the gun battery and several of the earthwork positions. The terrain itself is the primary artifact — the same cliffs, the same views, the same paths that the British climbed on November 20, 1776.

What I find most moving is the retreat route. You can follow the road that Greene's men took down from the Palisades to the Hackensack River. It is steep and narrow. Imagine two thousand men scrambling down this road in the dark with the British behind them, leaving behind everything they could not carry. That is the beginning of the march that nearly ended the Revolution — and the beginning of the march that led to Trenton.

The cliffs have not changed. The river has not changed. Stand where Greene stood and you can feel what he must have felt: the vertigo of watching everything fall apart, and the clarity that comes from having no choice but to keep moving.`,
    audioScript: `Fort Lee Historic Park sits atop the Palisades, directly above the George Washington Bridge. You stand at the reconstructed battery looking at a view that is simultaneously 1776 and now.

Most visitors come for the view. Then they notice the earthworks. There was a fort here? There was. The Palisades are a natural fortress, but the Americans did not account for British troops climbing the cliffs with local guides.

You can follow the retreat route — steep and narrow. Imagine two thousand men scrambling down with the British behind them, leaving behind everything. That is the beginning of the march that nearly ended the Revolution, and the beginning of the march to Trenton.

Stand where Greene stood and you can feel it: the vertigo of everything falling apart, and the clarity that comes from having no choice but to keep moving.`,
    tags: ['palisades', 'landscape', 'park', 'retreat'],
    town: { connect: { id: 'us-nj-fort-lee' } },
  },
];
