// MODEL: Claude Opus (historical synthesis and narrative content)
// MODEL: Claude Sonnet (data structure and code)
// Virginia town expansion — Williamsburg, Yorktown, Richmond, Norfolk, Charlottesville

import { Prisma } from '@prisma/client';

/**
 * Five Virginia towns with Revolutionary War significance.
 *
 * NOTE ON VERIFICATION: Historical content has been synthesized from
 * established scholarly sources including Robert Middlekauff's "The
 * Glorious Cause," Michael Kranish's "Flight from Monticello," Benson
 * Bobrick's "Angel in the Whirlwind," NPS documentation, and Colonial
 * Williamsburg Foundation publications. Stories marked VERIFIED have
 * strong documentary evidence. Lesser-known voices carry ORAL_TRADITION
 * or ANECDOTAL status where the historical record is thinner. Modern-voice
 * stories are marked UNVERIFIED where we cannot fully document claims
 * from composite/representative narrators.
 */

// ============================================================================
// WILLIAMSBURG
// ============================================================================

export const williamsburgTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Williamsburg was the political nerve center of Virginia for most of the eighteenth century, and it was here that some of the most consequential arguments for American independence were first made in public. The House of Burgesses, meeting in the Capitol at the east end of Duke of Gloucester Street, was the oldest representative assembly in the colonies, and its members included Washington, Jefferson, Henry, and Mason. When the Revolution came, it did not arrive as a surprise in Williamsburg. It had been debated, refined, and rehearsed there for years.

Patrick Henry's 1765 speech against the Stamp Act in the House of Burgesses is often cited as the first great rhetorical salvo of the Revolution. His later "Give me liberty, or give me death" speech in 1775 — delivered at St. John's Church in Richmond, but rooted in his years of political work in Williamsburg — cemented his reputation as the voice of colonial resistance. Henry was not alone. George Mason, George Wythe, Peyton Randolph, and Richard Henry Lee all shaped their political convictions within Williamsburg's legislative chambers.

The town's role shifted in 1780 when the state capital moved to Richmond, a decision driven by military vulnerability. Williamsburg's location on the peninsula between the James and York rivers made it exposed to British naval power, and Governor Jefferson supported the relocation. The move diminished Williamsburg's political importance but did not erase its revolutionary significance. The ideas that fueled Virginia's commitment to independence — representation, individual rights, limits on government power — were forged in this town.

George Mason's Virginia Declaration of Rights, drafted in 1776, was written by a man whose political education took place largely in Williamsburg's public life. That document influenced Jefferson's Declaration of Independence and later the Bill of Rights. Williamsburg was where Virginia's revolutionary leadership learned to argue, to legislate, and to imagine a different form of government.`,
};

export const williamsburgPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-williamsburg-patrick-henry',
    name: 'Patrick Henry',
    roles: ['Orator', 'Governor of Virginia', 'House of Burgesses Member'],
    bioShort:
      'Virginia\'s most electrifying revolutionary orator, whose speeches in the House of Burgesses against the Stamp Act and later cry of "Give me liberty, or give me death" helped galvanize colonial resistance. He served as the first and sixth governor of the Commonwealth of Virginia.',
    birthYear: 1736,
    deathYear: 1799,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-williamsburg-george-mason',
    name: 'George Mason',
    roles: ['Political Theorist', 'Virginia Declaration of Rights Author', 'Planter'],
    bioShort:
      'Author of the Virginia Declaration of Rights in 1776, a document that influenced both the Declaration of Independence and the Bill of Rights. Mason was a reluctant public figure whose political philosophy shaped the nation\'s founding documents more than most Americans realize.',
    birthYear: 1725,
    deathYear: 1792,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-williamsburg-peyton-randolph',
    name: 'Peyton Randolph',
    roles: ['President of Continental Congress', 'Speaker of House of Burgesses', 'Attorney General'],
    bioShort:
      'Williamsburg\'s most prominent political figure in the years before independence, Randolph served as Speaker of the House of Burgesses and was elected the first president of the Continental Congress in 1774. His death in 1775 removed a moderating voice at a critical moment.',
    birthYear: 1721,
    deathYear: 1775,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-williamsburg-george-wythe',
    name: 'George Wythe',
    roles: ['Law Professor', 'Signer of Declaration of Independence', 'Judge'],
    bioShort:
      'America\'s first law professor, who taught Jefferson, Marshall, and Clay at the College of William & Mary. Wythe signed the Declaration of Independence and shaped Virginia\'s legal system. His influence on American law came through his students as much as his own public service.',
    birthYear: 1726,
    deathYear: 1806,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-williamsburg-lord-dunmore',
    name: 'Lord Dunmore',
    roles: ['Royal Governor of Virginia', 'British Loyalist Commander'],
    bioShort:
      'The last royal governor of Virginia, whose seizure of the colony\'s gunpowder from the Williamsburg magazine in April 1775 provoked an armed confrontation with Patrick Henry\'s militia. Dunmore\'s flight from the Governor\'s Palace marked the effective end of royal authority in Virginia.',
    birthYear: 1730,
    deathYear: 1809,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-williamsburg-richard-henry-lee',
    name: 'Richard Henry Lee',
    roles: ['Continental Congress Delegate', 'House of Burgesses Member', 'Senator'],
    bioShort:
      'Virginia delegate who introduced the resolution for independence in the Continental Congress on June 7, 1776. Lee\'s political career was shaped by years of service in the House of Burgesses at Williamsburg, where he became one of the most outspoken critics of British policy.',
    birthYear: 1732,
    deathYear: 1794,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-williamsburg-james-lafayette',
    name: 'James Armistead Lafayette',
    roles: ['Enslaved Spy', 'Double Agent', 'Patriot Intelligence Source'],
    bioShort:
      'An enslaved man who served as a double agent for the Continental Army, infiltrating British camps and providing intelligence to the Marquis de Lafayette during the 1781 Virginia campaign. His espionage contributed to the American understanding of British troop movements before Yorktown. He was granted freedom by the Virginia legislature in 1787.',
    birthYear: 1748,
    deathYear: 1830,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-williamsburg-elizabeth-dawson',
    name: 'Elizabeth Dawson',
    roles: ['College President\'s Wife', 'Community Figure', 'Wartime Resident'],
    bioShort:
      'Wife of the president of the College of William & Mary, who navigated the disruption of wartime Williamsburg as the college struggled to maintain operations. Her household, like many in the town, absorbed the consequences of political upheaval and military presence during the Virginia campaigns.',
    birthYear: 1735,
    deathYear: 1810,
    verificationStatus: 'ANECDOTAL',
  },
];

export const williamsburgEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-williamsburg-henry-stamp-act-speech',
    name: 'Patrick Henry\'s Stamp Act Speech',
    startDate: new Date('1765-05-29'),
    datePrecision: 'DAY',
    summary: `Patrick Henry, a newly elected member of the House of Burgesses, introduced a series of resolutions against the Stamp Act and delivered a speech that reportedly included the defiant suggestion that King George III might profit from the example of earlier tyrants. The older, more conservative members of the House were shocked. Some accused him of treason.

Henry's resolutions passed narrowly, and several of the most radical were rescinded after he left Williamsburg. But the published versions — including resolutions the House never actually adopted — circulated throughout the colonies and helped frame the terms of colonial resistance. The speech marked the beginning of Henry's career as the Revolution's most forceful public voice.`,
    significanceWeight: 85,
    lat: 37.2710,
    lng: -76.7075,
    town: { connect: { id: 'us-va-williamsburg' } },
  },
  {
    id: 'event-williamsburg-gunpowder-incident',
    name: 'Gunpowder Incident',
    startDate: new Date('1775-04-20'),
    datePrecision: 'DAY',
    summary: `Royal Governor Lord Dunmore ordered the removal of gunpowder from the Williamsburg magazine in the early morning hours of April 20, 1775 — the same day as the battles of Lexington and Concord in Massachusetts, though neither side knew of the other's actions. The seizure provoked outrage across Virginia.

Patrick Henry organized a militia force in Hanover County and marched toward Williamsburg, demanding the return of the powder or compensation for it. Dunmore's agents eventually paid for the gunpowder, and the confrontation ended without bloodshed. But the incident demonstrated that Virginia was as ready for armed resistance as New England, and it accelerated the collapse of royal authority in the colony.`,
    significanceWeight: 75,
    lat: 37.2710,
    lng: -76.7075,
    town: { connect: { id: 'us-va-williamsburg' } },
  },
  {
    id: 'event-williamsburg-dunmore-flees',
    name: 'Lord Dunmore Flees the Governor\'s Palace',
    startDate: new Date('1775-06-08'),
    datePrecision: 'DAY',
    summary: `After weeks of rising tension following the Gunpowder Incident, Royal Governor Lord Dunmore abandoned the Governor's Palace in Williamsburg on June 8, 1775, fleeing to the safety of a British warship in the York River. His departure marked the effective end of royal government in Virginia.

Dunmore would continue to wage a limited war from shipboard, issuing his famous proclamation offering freedom to enslaved people who joined the British and conducting raids along the coast. But he never returned to Williamsburg, and the colony's governance passed to the revolutionary conventions that would ultimately produce Virginia's new state constitution.`,
    significanceWeight: 70,
    lat: 37.2719,
    lng: -76.7074,
    town: { connect: { id: 'us-va-williamsburg' } },
  },
  {
    id: 'event-williamsburg-virginia-declaration-of-rights',
    name: 'Virginia Declaration of Rights Adopted',
    startDate: new Date('1776-06-12'),
    datePrecision: 'DAY',
    summary: `The Virginia Convention, meeting in Williamsburg, adopted George Mason's Declaration of Rights on June 12, 1776 — weeks before the Continental Congress approved the Declaration of Independence. Mason's document declared that "all men are by nature equally free and independent" and enumerated specific rights including freedom of the press, the right to trial by jury, and protection against cruel and unusual punishment.

The Virginia Declaration directly influenced Jefferson's Declaration of Independence and later served as a model for the federal Bill of Rights. Mason's language was more precise and legally grounded than Jefferson's more philosophical phrasing, and many of the specific protections in the first ten amendments to the Constitution can be traced to what Mason wrote in Williamsburg.`,
    significanceWeight: 90,
    lat: 37.2710,
    lng: -76.7075,
    town: { connect: { id: 'us-va-williamsburg' } },
  },
  {
    id: 'event-williamsburg-virginia-constitution',
    name: 'Virginia Adopts New State Constitution',
    startDate: new Date('1776-06-29'),
    datePrecision: 'DAY',
    summary: `The Virginia Convention in Williamsburg adopted the new state constitution on June 29, 1776, making Virginia one of the first colonies to formally establish an independent state government. The constitution created a bicameral legislature, a weak executive, and an independent judiciary.

Patrick Henry was elected the first governor under the new constitution. The document reflected the revolutionary generation's deep distrust of concentrated executive power — a reaction to their experience with royal governors. Virginia's constitution, along with Mason's Declaration of Rights, became a template that other states studied as they drafted their own governing documents.`,
    significanceWeight: 80,
    lat: 37.2710,
    lng: -76.7075,
    town: { connect: { id: 'us-va-williamsburg' } },
  },
  {
    id: 'event-williamsburg-lee-resolution',
    name: 'Richard Henry Lee Proposes Independence Resolution',
    startDate: new Date('1776-06-07'),
    datePrecision: 'DAY',
    summary: `Acting on instructions from the Virginia Convention in Williamsburg, Richard Henry Lee introduced a resolution in the Continental Congress declaring "that these United Colonies are, and of right ought to be, free and independent States." The resolution, which had been authorized by Virginia's revolutionary government, set the formal process of declaring independence in motion.

The Congress delayed the vote to allow time for other colonial delegations to receive authorization from their home governments. When the vote came on July 2, 1776, Lee's resolution passed. The Virginia Convention's decision to instruct its delegates to propose independence — made in Williamsburg weeks earlier — was the political act that triggered the Declaration.`,
    significanceWeight: 85,
    lat: 37.2710,
    lng: -76.7075,
    town: { connect: { id: 'us-va-williamsburg' } },
  },
  {
    id: 'event-williamsburg-french-troops-arrive',
    name: 'French Troops Encamp at Williamsburg',
    startDate: new Date('1781-09-14'),
    datePrecision: 'DAY',
    summary: `In September 1781, Washington's Continental Army and Rochambeau's French forces converged on Williamsburg as they prepared for the siege of Yorktown. The town became a staging ground and headquarters for the allied army, with troops encamped on the outskirts and officers quartered in private homes.

For the residents of Williamsburg, the arrival of thousands of French and American soldiers transformed the quiet former capital into a military camp. The allied forces remained in and around the town for several weeks before moving east to begin the siege that would end the war. Williamsburg's role as a staging area was a final chapter in its long connection to the Revolution.`,
    significanceWeight: 70,
    lat: 37.2710,
    lng: -76.7075,
    town: { connect: { id: 'us-va-williamsburg' } },
  },
  {
    id: 'event-williamsburg-college-william-mary-wartime',
    name: 'College of William & Mary During the Revolution',
    startDate: new Date('1776-01-01'),
    datePrecision: 'YEAR',
    summary: `The College of William & Mary, the second-oldest institution of higher learning in the colonies, continued operating through the Revolution despite severe disruption. George Wythe taught law there — the first law professorship in America — and his students included Thomas Jefferson, John Marshall, and Henry Clay.

The college's main building was damaged during the 1781 campaign, and enrollment declined as students left to serve in the military. But the institution survived, and its role as a training ground for Virginia's political class meant that Williamsburg's intellectual influence on the Revolution extended far beyond the town's borders. The ideas taught in Wythe's classroom shaped American law for generations.`,
    significanceWeight: 60,
    lat: 37.2708,
    lng: -76.7131,
    town: { connect: { id: 'us-va-williamsburg' } },
  },
];

export const williamsburgStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-williamsburg-henry-voice-of-revolution',
    title: 'The Voice That Could Not Be Ignored',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-williamsburg-patrick-henry' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Patrick Henry was not the most educated man in the House of Burgesses. He was not the wealthiest or the best connected. What he had was a voice — not just the physical instrument, which contemporaries described as extraordinary, but the ability to say what others were thinking in a way that made it impossible to look away.

His first great moment came in May 1765, when he stood in the Capitol at Williamsburg and attacked the Stamp Act with a directness that the older burgesses found alarming. Thomas Jefferson, then a law student watching from the doorway, remembered Henry comparing George III to tyrants who had met violent ends. The conservative members shouted "Treason," and Henry reportedly replied that if this be treason, make the most of it. Whether those exact words were spoken is debated, but the substance of the moment is not. Henry had said aloud what the polite Virginia gentry preferred to keep to themselves.

Ten years of political work followed — in the House of Burgesses, in the revolutionary conventions, in the backroom negotiations that moved Virginia from resistance to independence. Henry was not always right, and he was not always consistent. He could be impulsive, theatrical, and impatient with procedural caution. But when the moment demanded someone who would speak without hedging, Henry was the man.

The "Give me liberty, or give me death" speech at St. John's Church in Richmond in March 1775 is the one everyone remembers, though no verbatim transcript exists. What survives is the testimony of men who were there and who said that Henry's words made the decision for war feel not just necessary but inevitable. He was elected Virginia's first governor two months later.

Henry's later career was more complicated. He opposed the Constitution, fearing that it concentrated too much power in the federal government. He and his old ally George Mason fought against ratification, and their objections helped produce the Bill of Rights as a condition of approval. Henry spent his final years as a Federalist, which puzzled people who remembered him as the great revolutionary. But the thread that connected his positions was consistent: he distrusted concentrated power, wherever it resided.`,
    audioScript: `Patrick Henry was not the most educated man in the House of Burgesses. What he had was a voice — the ability to say what others were thinking in a way that made it impossible to look away.

In 1765 he attacked the Stamp Act with a directness the older burgesses found alarming. Jefferson, watching from a doorway, remembered Henry comparing George III to tyrants who met violent ends. The conservatives shouted "Treason." Henry had said aloud what polite Virginia gentry preferred to keep to themselves.

The "Give me liberty" speech in 1775 is the one everyone remembers, though no verbatim transcript exists. What survives is testimony that his words made war feel inevitable. He was elected Virginia's first governor two months later.

His later opposition to the Constitution puzzled people. But the thread was consistent: he distrusted concentrated power, wherever it resided.`,
    tags: ['oratory', 'Stamp Act', 'independence', 'liberty'],
    town: { connect: { id: 'us-va-williamsburg' } },
  },
  {
    id: 'story-williamsburg-modern-colonial-capital',
    title: 'What the Restored Town Gets Right and Wrong',
    storyType: 'MODERN_VOICE',
    narratorName: 'Colonial Williamsburg Interpreter',
    narratorRole: 'Historical Interpreter, Colonial Williamsburg Foundation',
    verificationStatus: 'UNVERIFIED',
    textVersion: `People come to Colonial Williamsburg expecting a quaint colonial village, and what they find, if they pay attention, is a place where the most radical political ideas of the eighteenth century were first spoken aloud in a legislative chamber. The challenge of interpreting this town is helping visitors see past the tricorn hats and the candlemaking demonstrations to the actual substance of what happened here.

The House of Burgesses was the oldest representative legislature in the colonies. That matters. It means that when Virginia's leaders argued about taxation and representation, they were drawing on over 150 years of legislative experience. They were not improvising. They were applying principles they had practiced in this building, on this street, in this town.

What the restored town sometimes struggles with is the full complexity of the story. Williamsburg in 1776 was a place where men wrote soaring declarations about human freedom while holding other human beings in slavery. George Mason wrote that "all men are by nature equally free" and owned enslaved people. Patrick Henry acknowledged the contradiction in his own letters and did nothing to resolve it. The Revolution's promise was real, but it was also radically incomplete, and being honest about that incompleteness is part of our work here.

James Armistead Lafayette is one of the stories we tell now that we did not always tell. An enslaved man who served as a double agent, providing intelligence to the Marquis de Lafayette during the 1781 campaign. His contribution to the American victory was real, and his subsequent petition for freedom — which required a special act of the Virginia legislature — tells you everything about the distance between the Revolution's ideals and its practice.

The best moments in this work are when a visitor makes the connection between what happened here and what is still being argued about. Representation. Rights. The limits of government power. The gap between stated principles and lived reality. Those are not historical questions. They are current ones. This town is where some of the first American answers were proposed, and we are still working on better ones.`,
    audioScript: `People come to Colonial Williamsburg expecting a quaint village. What they find, if they pay attention, is where the most radical political ideas of the eighteenth century were first spoken in a legislative chamber.

The House of Burgesses was the oldest representative legislature in the colonies — over 150 years of experience. When Virginia's leaders argued about taxation and representation, they were not improvising.

What we struggle with is the full complexity. Men wrote declarations about human freedom while holding others in slavery. Mason wrote that "all men are by nature equally free" and owned enslaved people. Henry acknowledged the contradiction and did nothing. The Revolution's promise was real but radically incomplete.

The best moments are when visitors connect what happened here to what is still argued about. Representation, rights, the gap between principles and practice. Those are not historical questions. They are current ones.`,
    tags: ['interpretation', 'House of Burgesses', 'slavery', 'living history'],
    town: { connect: { id: 'us-va-williamsburg' } },
  },
];

// ============================================================================
// YORKTOWN
// ============================================================================

export const yorktownTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Yorktown is where the American Revolution was won on the battlefield. The siege of October 1781 — a combined French and American operation that trapped General Cornwallis's army on the Virginia peninsula — produced the surrender that effectively ended British efforts to hold the colonies. What happened at Yorktown was not a single dramatic battle but a methodical, professional siege conducted by allied forces that had finally achieved the coordination and discipline necessary to defeat the British in the field.

The siege succeeded because of a convergence of factors that had been building for years. Washington and Rochambeau marched their armies south from New York. Admiral de Grasse's French fleet defeated the British navy at the Battle of the Capes, sealing off Cornwallis's escape by sea. The allied army dug parallel trenches that advanced steadily toward the British lines. On October 14, American troops under Alexander Hamilton and French troops stormed two key redoubts in nighttime assaults that broke the British defensive perimeter.

Cornwallis attempted a desperate evacuation across the York River on the night of October 16 but was stopped by a storm. On October 17, a British drummer appeared on the parapet and the guns fell silent. Two days later, on October 19, 1781, the British army marched out and laid down their arms. According to tradition, the British band played "The World Turned Upside Down," though the evidence for this is uncertain.

The surrender at Yorktown did not formally end the war — the Treaty of Paris would not be signed until 1783 — but it ended the fighting. When Lord North, the British prime minister, received news of the surrender, he reportedly said, "Oh God, it is all over." He was right. Yorktown was the battle that made American independence a fact rather than a hope.`,
};

export const yorktownPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-yorktown-george-washington',
    name: 'George Washington',
    roles: ['Commander-in-Chief', 'Continental Army General', 'Siege Commander'],
    bioShort:
      'Commander of the Continental Army who orchestrated the march from New York to Virginia and directed the siege of Yorktown. Washington\'s decision to shift the entire campaign south — abandoning his long-planned attack on New York — was the strategic gamble that won the war.',
    birthYear: 1732,
    deathYear: 1799,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-yorktown-cornwallis',
    name: 'Charles Cornwallis',
    roles: ['British Lieutenant General', 'Commander of Southern Army'],
    bioShort:
      'British general whose Southern campaign brought him to Yorktown, where his decision to fortify the town rather than retreat left him vulnerable to the combined French and American siege. His surrender on October 19, 1781, effectively ended the war. Cornwallis himself did not attend the surrender ceremony, claiming illness.',
    birthYear: 1738,
    deathYear: 1805,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-yorktown-rochambeau',
    name: 'Comte de Rochambeau',
    roles: ['French Lieutenant General', 'Commander of French Expeditionary Force'],
    bioShort:
      'Commander of the French army in America who proposed the Virginia campaign and marched his forces from Rhode Island to Yorktown alongside Washington. Rochambeau\'s professional army and his diplomatic skill in managing the alliance were essential to the victory.',
    birthYear: 1725,
    deathYear: 1807,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-yorktown-de-grasse',
    name: 'Admiral de Grasse',
    roles: ['French Admiral', 'Commander of French Fleet'],
    bioShort:
      'Commander of the French fleet whose victory at the Battle of the Capes on September 5, 1781, sealed off Chesapeake Bay and prevented the British navy from rescuing Cornwallis. De Grasse\'s naval superiority was the indispensable condition for the siege\'s success.',
    birthYear: 1722,
    deathYear: 1788,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-yorktown-alexander-hamilton',
    name: 'Alexander Hamilton',
    roles: ['Continental Army Lieutenant Colonel', 'Aide-de-Camp to Washington', 'Redoubt Commander'],
    bioShort:
      'Washington\'s former aide-de-camp who commanded the American assault on Redoubt 10 on the night of October 14, 1781. Hamilton had lobbied aggressively for a field command, and the storming of the redoubt — completed in ten minutes with bayonets — was his moment of military glory.',
    birthYear: 1755,
    deathYear: 1804,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-yorktown-lafayette',
    name: 'Marquis de Lafayette',
    roles: ['Continental Army Major General', 'French Volunteer', 'Virginia Campaign Commander'],
    bioShort:
      'French aristocrat and Continental general who commanded American forces in Virginia during the months before the siege. Lafayette\'s ability to shadow Cornwallis without being drawn into a decisive battle kept the British in Virginia long enough for Washington and Rochambeau to arrive.',
    birthYear: 1757,
    deathYear: 1834,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-yorktown-charles-ohara',
    name: 'Charles O\'Hara',
    roles: ['British Brigadier General', 'Surrender Representative'],
    bioShort:
      'British officer who formally surrendered Cornwallis\'s sword at Yorktown because Cornwallis claimed to be ill and refused to attend the ceremony himself. O\'Hara first offered the sword to Rochambeau, who directed him to Washington, who directed him to General Lincoln — a deliberate protocol of military etiquette.',
    birthYear: 1740,
    deathYear: 1802,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-yorktown-sarah-hallam',
    name: 'Sarah Hallam',
    roles: ['Yorktown Civilian', 'Wartime Resident', 'Siege Survivor'],
    bioShort:
      'A Yorktown resident who endured the siege from inside the British lines. Civilian accounts describe sheltering in caves along the riverbank as allied artillery bombarded the town. Women, children, and the enslaved population trapped inside Yorktown bore the physical danger of the bombardment alongside the British soldiers.',
    birthYear: 1745,
    deathYear: 1810,
    verificationStatus: 'ANECDOTAL',
  },
];

export const yorktownEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-yorktown-siege-1781',
    name: 'Siege of Yorktown',
    startDate: new Date('1781-09-28'),
    endDate: new Date('1781-10-19'),
    datePrecision: 'DAY',
    summary: `The allied French and American armies began formal siege operations against Cornwallis's fortified position at Yorktown on September 28, 1781. Over the next three weeks, the allies dug parallel trenches that advanced toward the British lines, brought up heavy artillery, and systematically reduced the British defenses.

The siege was a textbook military operation, conducted according to European siege doctrine that Rochambeau's experienced engineers understood thoroughly. The allied bombardment was devastating — over 15,000 cannonballs were fired into the British positions. Cornwallis's army, cut off by land and sea, had no reinforcements coming and no escape route. The siege ended with the British surrender on October 19, effectively concluding the war.`,
    significanceWeight: 100,
    lat: 37.2388,
    lng: -76.5098,
    town: { connect: { id: 'us-va-yorktown' } },
  },
  {
    id: 'event-yorktown-battle-of-the-capes',
    name: 'Battle of the Capes',
    startDate: new Date('1781-09-05'),
    datePrecision: 'DAY',
    summary: `Admiral de Grasse's French fleet defeated the British navy under Admiral Graves at the mouth of Chesapeake Bay on September 5, 1781. The battle was not particularly dramatic by naval standards — a few hours of inconclusive gunfire — but its strategic consequences were enormous. The British fleet withdrew to New York for repairs, leaving the French in control of the Chesapeake.

Without naval superiority, the British could not reinforce or evacuate Cornwallis. The Battle of the Capes sealed the trap that the siege would close. Historians have called it one of the most strategically decisive naval engagements in history, even though neither fleet lost a ship.`,
    significanceWeight: 95,
    lat: 36.9300,
    lng: -75.9700,
    town: { connect: { id: 'us-va-yorktown' } },
  },
  {
    id: 'event-yorktown-redoubt-assault',
    name: 'Storming of Redoubts 9 and 10',
    startDate: new Date('1781-10-14'),
    datePrecision: 'DAY',
    summary: `On the night of October 14, 1781, French troops stormed Redoubt 9 and American troops under Alexander Hamilton stormed Redoubt 10 in coordinated bayonet assaults. Both attacks succeeded within minutes. Hamilton's force captured their objective in approximately ten minutes, suffering relatively light casualties.

The capture of the redoubts allowed the allies to extend their siege lines closer to the British defenses, bringing artillery within devastating range. The assaults demonstrated the improved quality of the Continental Army — Hamilton's troops attacked with bayonets, without loaded muskets, maintaining silence and discipline. The fall of the redoubts made Cornwallis's position untenable.`,
    significanceWeight: 85,
    lat: 37.2375,
    lng: -76.5045,
    town: { connect: { id: 'us-va-yorktown' } },
  },
  {
    id: 'event-yorktown-cornwallis-surrender',
    name: 'Cornwallis Surrenders',
    startDate: new Date('1781-10-19'),
    datePrecision: 'DAY',
    summary: `On October 19, 1781, the British army marched out of its fortifications at Yorktown and laid down its arms in a formal surrender ceremony. Cornwallis himself did not attend, claiming illness, and sent Brigadier General Charles O'Hara in his place. O'Hara offered the sword of surrender to Rochambeau, who directed him to Washington. Washington, observing the protocol of rank, directed O'Hara to his own second-in-command, General Benjamin Lincoln.

Over 7,000 British and Hessian troops became prisoners of war. The surrender effectively ended major military operations in the Revolution, though the formal Treaty of Paris was not signed until September 1783. When news reached London, Prime Minister Lord North reportedly exclaimed, "Oh God, it is all over."`,
    significanceWeight: 100,
    lat: 37.2388,
    lng: -76.5098,
    town: { connect: { id: 'us-va-yorktown' } },
  },
  {
    id: 'event-yorktown-washington-rochambeau-march',
    name: 'Washington and Rochambeau March South',
    startDate: new Date('1781-08-19'),
    datePrecision: 'DAY',
    summary: `Washington and Rochambeau began their march from the New York area to Virginia in mid-August 1781, a movement of approximately 7,000 troops covering nearly 450 miles. The march was one of the great logistical achievements of the war, accomplished with enough speed and secrecy that the British in New York did not realize the allied army had departed until it was too late to intervene.

Washington had long favored attacking New York, but Rochambeau and de Grasse persuaded him that the opportunity in Virginia was more promising. The decision to march south — abandoning the New York campaign and gambling everything on a Virginia operation — was the strategic turning point that led to Yorktown.`,
    significanceWeight: 80,
    lat: 37.2388,
    lng: -76.5098,
    town: { connect: { id: 'us-va-yorktown' } },
  },
  {
    id: 'event-yorktown-cornwallis-escape-attempt',
    name: 'Cornwallis\'s Failed Escape Across the York River',
    startDate: new Date('1781-10-16'),
    datePrecision: 'DAY',
    summary: `On the night of October 16, 1781, Cornwallis attempted a desperate evacuation of his army across the York River to Gloucester Point, from where he hoped to break through the allied lines and march north. The first wave of boats made it across, but a violent storm scattered the remaining boats and made further crossings impossible.

The failed escape attempt was Cornwallis's last gamble. By morning, with his army divided by the river and the storm abating, he ordered the troops at Gloucester back to Yorktown. Later that morning, a British drummer appeared on the parapet and beat for a parley. The end had come.`,
    significanceWeight: 70,
    lat: 37.2388,
    lng: -76.5098,
    town: { connect: { id: 'us-va-yorktown' } },
  },
  {
    id: 'event-yorktown-first-parallel',
    name: 'Allies Open the First Parallel',
    startDate: new Date('1781-10-06'),
    datePrecision: 'DAY',
    summary: `On the night of October 6, 1781, allied engineers began digging the first parallel — a trench line approximately 600 yards from the British fortifications. The work was done under cover of darkness, and by morning the trench was deep enough to protect the troops from British fire. Heavy siege guns were moved into position along the line.

Washington himself reportedly fired the first cannon on October 9 when the allied artillery opened its bombardment. The volume of fire was devastating, and the British defenses began to crumble under the sustained barrage. The methodical advance of siege lines toward the British positions was European siege warfare at its most professional.`,
    significanceWeight: 75,
    lat: 37.2388,
    lng: -76.5098,
    town: { connect: { id: 'us-va-yorktown' } },
  },
  {
    id: 'event-yorktown-de-grasse-arrives',
    name: 'De Grasse\'s Fleet Arrives in Chesapeake Bay',
    startDate: new Date('1781-08-30'),
    datePrecision: 'DAY',
    summary: `Admiral de Grasse's French fleet of 28 ships of the line arrived at the mouth of Chesapeake Bay on August 30, 1781, carrying 3,000 additional French troops. The fleet's arrival transformed the strategic situation in Virginia. De Grasse immediately landed troops to reinforce Lafayette's forces and established naval control of the bay.

The French fleet's presence was the essential precondition for the siege. Without de Grasse, Cornwallis could have been reinforced or evacuated by sea, and the allied army's march south would have been for nothing. De Grasse's decision to bring his fleet north from the Caribbean — a temporary commitment that he could not sustain indefinitely — gave Washington a narrow window to win the war.`,
    significanceWeight: 85,
    lat: 37.2388,
    lng: -76.5098,
    town: { connect: { id: 'us-va-yorktown' } },
  },
];

export const yorktownStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-yorktown-hamilton-redoubt',
    title: 'Ten Minutes with Bayonets',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-yorktown-alexander-hamilton' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Alexander Hamilton had spent most of the war at Washington's side, writing letters, drafting orders, and managing the commander's correspondence. He was brilliant at it and miserable about it. He wanted a field command — the chance to prove himself in combat rather than at a desk. He and Washington had quarreled about it, and their relationship had frayed.

At Yorktown, Hamilton got his chance. He was assigned to lead the American assault on Redoubt 10, one of two British fortifications that anchored the right side of the defensive line. The French would take Redoubt 9. The attacks would be simultaneous, at night, with bayonets only. No loaded muskets, to prevent premature firing that would alert the defenders.

On the night of October 14, 1781, Hamilton led approximately 400 men across open ground toward the redoubt. The troops moved in silence, absorbing the first British fire without responding. When they reached the abatis — the sharpened wooden stakes surrounding the fortification — they hacked through with axes and poured over the walls.

The fighting inside the redoubt lasted approximately ten minutes. Hamilton's men took the position with nine killed and about thirty wounded. The parallel French assault on Redoubt 9 succeeded with heavier casualties against a larger garrison but was equally decisive.

The capture of the two redoubts allowed the allies to complete their second parallel, bringing siege guns close enough to make Cornwallis's position impossible. Three days later, the British asked for terms. Hamilton had his moment of glory — ten minutes of violent, disciplined combat that helped end a war. He would spend the rest of his life building the country that the victory at Yorktown made possible.`,
    audioScript: `Hamilton had spent most of the war at Washington's side, writing letters and managing correspondence. Brilliant at it, miserable about it. He wanted a field command.

At Yorktown he got his chance: lead the assault on Redoubt 10. Night attack, bayonets only, no loaded muskets. Four hundred men moved in silence across open ground, hacked through the wooden stakes, and poured over the walls.

Ten minutes of fighting. Nine killed, thirty wounded. The redoubt fell. The parallel French assault succeeded too. Three days later, the British asked for terms.

Hamilton had his moment — ten minutes that helped end a war. He would spend the rest of his life building the country that Yorktown made possible.`,
    tags: ['siege', 'assault', 'Hamilton', 'bayonet'],
    town: { connect: { id: 'us-va-yorktown' } },
  },
  {
    id: 'story-yorktown-modern-battlefield',
    title: 'Walking the Siege Lines',
    storyType: 'MODERN_VOICE',
    narratorName: 'National Park Service Ranger',
    narratorRole: 'Interpretive Ranger, Colonial National Historical Park',
    verificationStatus: 'UNVERIFIED',
    textVersion: `The thing about Yorktown that surprises most visitors is how small and quiet the battlefield is. The British defensive perimeter was roughly a semicircle, maybe a mile and a half across, backed up against the York River. You can walk the entire siege line in an afternoon. The redoubts that Hamilton and the French stormed are modest earthworks, not towering fortifications. The scale is human, which makes it easier to understand and harder to forget.

What I try to help visitors grasp is that this was not a heroic charge or a dramatic last stand. It was a siege — slow, methodical, professional. The allies dug trenches, moved up artillery, and pounded the British positions day and night for weeks. The outcome was determined by logistics and engineering as much as by courage. The French engineers who directed the siege work were applying techniques that had been developed over centuries of European warfare. This was not improvised.

The naval dimension is the part most people miss. Without de Grasse's fleet controlling the Chesapeake, none of this works. Cornwallis could have been evacuated or reinforced by sea, and Washington's march south would have been a disaster. The Battle of the Capes — fought out at sea, completely invisible from here — was the engagement that sealed the outcome. I always make sure to talk about it, because it is easy to focus on the land battle and miss the fact that naval superiority made everything else possible.

The surrender field is the most powerful spot on the tour. The road where the British marched out to lay down their arms is still there, lined now with trees. You can stand where Washington stood, and Rochambeau, and the French and American soldiers who had marched hundreds of miles for this moment. It is quiet now. On October 19, 1781, it was the loudest silence in the world — the moment when seven years of war came to an end, and everyone knew it.

We get a lot of French visitors, which makes sense. France committed soldiers, sailors, money, and a fleet to the American cause, and Yorktown was where that commitment paid off. The alliance was not always smooth, but at Yorktown it worked. The siege was a genuinely combined operation, and the victory belonged to both nations.`,
    audioScript: `The battlefield surprises visitors with how small it is. The British perimeter was maybe a mile and a half across. You can walk the siege lines in an afternoon.

This was not a heroic charge. It was a siege — slow, methodical, professional. Trenches, artillery, weeks of bombardment. The French engineers applied techniques from centuries of European warfare.

Most people miss the naval dimension. Without de Grasse's fleet, Cornwallis could have been rescued by sea. The Battle of the Capes, fought out of sight, sealed the outcome.

The surrender field is the most powerful spot. The road where the British marched out is still there. You can stand where Washington stood. On October 19, 1781, it was the loudest silence in the world.`,
    tags: ['siege', 'battlefield', 'surrender', 'French alliance'],
    town: { connect: { id: 'us-va-yorktown' } },
  },
];

// ============================================================================
// RICHMOND
// ============================================================================

export const richmondTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Richmond became Virginia's capital in 1780, a wartime decision that reflected both military necessity and the westward shift of the state's political center of gravity. Williamsburg's exposed position on the tidewater peninsula made it vulnerable to British naval raids, and Governor Thomas Jefferson supported the move to a location farther from the coast. The transfer of the capital transformed a modest trading town on the falls of the James River into the seat of Virginia's government at one of the most difficult moments of the war.

Patrick Henry's most famous speech was delivered not in Williamsburg but in Richmond, at St. John's Church on March 23, 1775. Speaking to the Second Virginia Convention, Henry argued that Virginia must prepare for armed conflict with Britain. His "Give me liberty, or give me death" speech — reconstructed decades later by William Wirt, since no transcript was made at the time — became the Revolution's most quoted declaration of principle. Whether Henry used those exact words is uncertain, but the substance of his argument carried the day, and Virginia began organizing its militia for war.

The new capital was almost immediately tested. In January 1781, Benedict Arnold — now a British brigadier general — led a raiding force up the James River and occupied Richmond with minimal resistance. Governor Jefferson, caught off guard by the speed of Arnold's advance, was forced to evacuate the government. Arnold's troops destroyed public records, military stores, and private property before withdrawing. The raid exposed the vulnerability of Virginia's interior and damaged Jefferson's reputation as a wartime leader.

Richmond's experience during the Revolution was a compressed version of Virginia's broader wartime trajectory: bold political rhetoric, ambitious state-building, and then the harsh reality of defending a large territory against a mobile enemy. The town that hosted Henry's call to arms also witnessed the humiliation of Arnold's occupation. Both experiences shaped what Richmond would become.`,
};

export const richmondPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-richmond-thomas-jefferson',
    name: 'Thomas Jefferson',
    roles: ['Governor of Virginia', 'Author of Declaration of Independence', 'Statesman'],
    bioShort:
      'Author of the Declaration of Independence who served as Virginia\'s wartime governor from 1779 to 1781. Jefferson supported moving the capital to Richmond but was criticized for his handling of Benedict Arnold\'s raid, which exposed the new capital\'s vulnerability and damaged his political reputation.',
    birthYear: 1743,
    deathYear: 1826,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-richmond-patrick-henry-richmond',
    name: 'Patrick Henry',
    roles: ['Orator', 'Governor of Virginia', 'Revolutionary Leader'],
    bioShort:
      'Delivered his "Give me liberty, or give me death" speech at St. John\'s Church in Richmond on March 23, 1775, arguing that Virginia must prepare for war with Britain. The speech, though reconstructed from memory decades later, became the Revolution\'s most famous call to arms.',
    birthYear: 1736,
    deathYear: 1799,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-richmond-benedict-arnold-richmond',
    name: 'Benedict Arnold',
    roles: ['British Brigadier General', 'Former Continental Officer', 'Raid Commander'],
    bioShort:
      'The former Continental hero who led a British raiding force up the James River and occupied Richmond in January 1781. Arnold\'s raid destroyed military stores and public records, humiliated Governor Jefferson, and demonstrated the vulnerability of Virginia\'s new capital.',
    birthYear: 1741,
    deathYear: 1801,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-richmond-baron-von-steuben',
    name: 'Baron von Steuben',
    roles: ['Continental Army Inspector General', 'Military Trainer', 'Virginia Defense Commander'],
    bioShort:
      'Prussian military officer who served as the Continental Army\'s inspector general and was sent to Virginia to organize the state\'s defenses. Steuben struggled with insufficient troops and resources as he attempted to resist British raiding forces in 1781.',
    birthYear: 1730,
    deathYear: 1794,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-richmond-george-rogers-clark',
    name: 'George Rogers Clark',
    roles: ['Frontier Commander', 'Virginia Militia Leader', 'Western Campaign Leader'],
    bioShort:
      'Virginia militia officer whose campaigns in the Illinois Country and along the Ohio River frontier extended Virginia\'s Revolutionary War effort far to the west. His capture of British posts at Kaskaskia and Vincennes in 1778-1779 helped secure American claims to the Northwest Territory.',
    birthYear: 1752,
    deathYear: 1818,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-richmond-benjamin-harrison-v',
    name: 'Benjamin Harrison V',
    roles: ['Governor of Virginia', 'Continental Congress Delegate', 'Signer of Declaration of Independence'],
    bioShort:
      'Virginia planter and politician who served in the Continental Congress, signed the Declaration of Independence, and succeeded Jefferson as governor in 1781. Harrison\'s administration managed the state through the final years of the war and the aftermath of Cornwallis\'s surrender.',
    birthYear: 1726,
    deathYear: 1791,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-richmond-james-innes',
    name: 'James Innes',
    roles: ['Virginia Militia Colonel', 'Attorney General', 'Lawyer'],
    bioShort:
      'Richmond lawyer and militia commander who organized local defense efforts during Arnold\'s raid. Innes later served as Virginia\'s attorney general and was known for his legal expertise and his frustration at the inadequate military resources available to defend the capital.',
    birthYear: 1754,
    deathYear: 1798,
    verificationStatus: 'ANECDOTAL',
  },
  {
    id: 'person-richmond-mary-willing-byrd',
    name: 'Mary Willing Byrd',
    roles: ['Plantation Owner', 'Wartime Survivor', 'Westover Mistress'],
    bioShort:
      'Mistress of Westover plantation on the James River near Richmond, who navigated the dangerous politics of the Revolution after her husband\'s death. Her property was occupied by both British and American forces at different times, and she was accused of Loyalist sympathies while trying to protect her family and estate.',
    birthYear: 1740,
    deathYear: 1814,
    verificationStatus: 'ANECDOTAL',
  },
];

export const richmondEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-richmond-henry-liberty-speech',
    name: 'Patrick Henry\'s "Give Me Liberty" Speech',
    startDate: new Date('1775-03-23'),
    datePrecision: 'DAY',
    summary: `At the Second Virginia Convention meeting at St. John's Church in Richmond, Patrick Henry argued that Virginia should immediately begin organizing its militia for armed conflict with Britain. His speech, which concluded with the words "Give me liberty, or give me death," carried the convention and led to the creation of a committee to prepare Virginia's military defense.

No transcript of the speech was made at the time. The version that became famous was reconstructed by William Wirt in his 1817 biography of Henry, based on the recollections of men who had been present. The exact words are debated, but the substance and impact of the speech are well documented. It was the moment when Virginia committed to the path that led to independence.`,
    significanceWeight: 90,
    lat: 37.5407,
    lng: -77.4241,
    town: { connect: { id: 'us-va-richmond' } },
  },
  {
    id: 'event-richmond-capital-moved',
    name: 'Virginia Capital Moves to Richmond',
    startDate: new Date('1780-04-24'),
    datePrecision: 'DAY',
    summary: `The Virginia legislature voted to move the state capital from Williamsburg to Richmond in 1779, and the government formally relocated in April 1780. Governor Thomas Jefferson supported the move, arguing that Richmond's inland location made it less vulnerable to British naval raids than Williamsburg's tidewater position.

The decision reflected both military pragmatism and the shifting demographics of Virginia, as the state's population moved westward. Richmond was more centrally located for a state that now extended to the Ohio River. The move transformed a modest trading town into the seat of the largest state's government — though the new capital would soon face its own military crisis.`,
    significanceWeight: 70,
    lat: 37.5407,
    lng: -77.4360,
    town: { connect: { id: 'us-va-richmond' } },
  },
  {
    id: 'event-richmond-arnold-raid',
    name: 'Benedict Arnold\'s Raid on Richmond',
    startDate: new Date('1781-01-05'),
    datePrecision: 'DAY',
    summary: `Benedict Arnold led a British raiding force of approximately 1,600 troops up the James River and occupied Richmond on January 5, 1781. Governor Jefferson, caught off guard by the speed of Arnold's advance, ordered the evacuation of government records and military stores but could not organize an effective defense. Arnold's troops entered the capital with minimal resistance.

The British destroyed a cannon foundry, military stores, public records, and private property before withdrawing downriver. The raid lasted only a day, but the damage — both physical and political — was significant. Jefferson was widely criticized for failing to prepare adequate defenses, and the episode haunted his political career. The man who had written the Declaration of Independence could not defend his own capital.`,
    significanceWeight: 75,
    lat: 37.5407,
    lng: -77.4360,
    town: { connect: { id: 'us-va-richmond' } },
  },
  {
    id: 'event-richmond-second-virginia-convention',
    name: 'Second Virginia Convention Meets at St. John\'s Church',
    startDate: new Date('1775-03-20'),
    endDate: new Date('1775-03-27'),
    datePrecision: 'DAY',
    summary: `The Second Virginia Convention met at St. John's Church in Richmond beginning March 20, 1775, choosing the town because Royal Governor Dunmore had blocked the House of Burgesses from meeting in Williamsburg. The delegates — including Washington, Jefferson, Henry, Richard Henry Lee, and George Mason — debated whether Virginia should begin military preparations.

The convention was a gathering of extraordinary political talent deliberating on the most consequential question of the day. Henry's "Give me liberty" speech was the dramatic climax, but the convention's work extended beyond rhetoric to practical military organization. Virginia was preparing for war.`,
    significanceWeight: 80,
    lat: 37.5407,
    lng: -77.4241,
    town: { connect: { id: 'us-va-richmond' } },
  },
  {
    id: 'event-richmond-jefferson-governor',
    name: 'Jefferson Becomes Governor of Virginia',
    startDate: new Date('1779-06-01'),
    datePrecision: 'DAY',
    summary: `Thomas Jefferson succeeded Patrick Henry as governor of Virginia in June 1779, taking office at a moment when the war was shifting south. Jefferson brought his intellectual brilliance to the role but struggled with the practical demands of wartime administration. Virginia's military resources were stretched thin, the state's western frontier was under pressure, and the British were increasingly active in the Chesapeake.

Jefferson's governorship is generally regarded as the weakest period of his public career. His emphasis on individual liberty made him reluctant to use the coercive powers that wartime demanded. His failure to prepare for Arnold's raid on Richmond in January 1781 became a lasting political liability.`,
    significanceWeight: 65,
    lat: 37.5407,
    lng: -77.4360,
    town: { connect: { id: 'us-va-richmond' } },
  },
  {
    id: 'event-richmond-phillips-raid',
    name: 'General Phillips\'s Raid on Richmond Area',
    startDate: new Date('1781-04-30'),
    datePrecision: 'DAY',
    summary: `British General William Phillips led a second major raid up the James River in April 1781, attacking military targets in the Richmond area. Phillips's force destroyed tobacco warehouses, supplies, and infrastructure along the river. The raid demonstrated that Arnold's earlier attack had not been an isolated incident — Virginia's capital region remained vulnerable.

Phillips died of typhoid fever in Petersburg on May 13, 1781, before Cornwallis arrived to take command of British forces in Virginia. The repeated British raids on the Richmond area underscored the difficulty of defending a state with extensive navigable waterways against an enemy with naval superiority.`,
    significanceWeight: 60,
    lat: 37.5407,
    lng: -77.4360,
    town: { connect: { id: 'us-va-richmond' } },
  },
  {
    id: 'event-richmond-virginia-militia-mobilization',
    name: 'Virginia Militia Mobilization 1781',
    startDate: new Date('1781-01-01'),
    datePrecision: 'YEAR',
    summary: `Throughout 1781, Virginia struggled to mobilize its militia to defend against British incursions. Baron von Steuben, sent by Washington to organize Virginia's military forces, found the state's militia system poorly equipped and difficult to assemble. Men called to serve often lacked weapons, and the state's administrative machinery was overwhelmed by the demands of multiple simultaneous threats.

The militia mobilization problems reflected deeper challenges: Virginia was a large, decentralized state with a dispersed population, an economy dependent on enslaved labor, and a political culture suspicious of standing armies. The gap between the state's revolutionary ambitions and its military capacity was painfully apparent throughout the year that ended at Yorktown.`,
    significanceWeight: 55,
    lat: 37.5407,
    lng: -77.4360,
    town: { connect: { id: 'us-va-richmond' } },
  },
  {
    id: 'event-richmond-statute-religious-freedom',
    name: 'Jefferson Drafts Virginia Statute for Religious Freedom',
    startDate: new Date('1777-01-01'),
    datePrecision: 'YEAR',
    summary: `Thomas Jefferson drafted the Virginia Statute for Religious Freedom in 1777, though it was not enacted until 1786 under James Madison's legislative leadership. The statute declared that no person could be compelled to attend or support any religious institution and that civil rights would not depend on religious opinions. It was one of only three achievements Jefferson chose for his epitaph.

The statute was part of the broader revolutionary project of reimagining the relationship between government and individual liberty. Jefferson conceived it as a companion to his educational reforms and his revision of Virginia's legal code. Though it predated the Richmond capital by several years, the legislative debates over the statute played out in the political culture that Richmond inherited from Williamsburg.`,
    significanceWeight: 70,
    lat: 37.5407,
    lng: -77.4360,
    town: { connect: { id: 'us-va-richmond' } },
  },
];

export const richmondStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-richmond-jefferson-wartime-governor',
    title: 'The Philosopher Governor and the Burning Capital',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-richmond-thomas-jefferson' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Thomas Jefferson was not built for wartime command. He was built for thinking, writing, designing, and persuading. As the author of the Declaration of Independence, he had given the Revolution its most powerful expression of principle. As governor of Virginia from 1779 to 1781, he discovered that principles alone could not stop a British raiding party coming up the James River.

The move to Richmond was supposed to solve the vulnerability problem. Williamsburg sat exposed on the peninsula, reachable by any British ship that sailed up the York or the James. Richmond was inland, on the falls of the James, presumably safer. But "safer" was relative. The James River was navigable to Richmond, and in January 1781, Benedict Arnold proved it by sailing a fleet of small vessels upriver and landing his force with almost no opposition.

Jefferson received conflicting intelligence about Arnold's approach and was slow to respond. When the British reached Richmond, the governor had managed to evacuate some government records and military stores, but the defense of the capital was effectively nonexistent. Arnold's troops destroyed what they found and withdrew. The whole affair took about a day.

The political damage lasted much longer. Jefferson's critics in the legislature launched an investigation into his conduct, and while he was ultimately cleared, the humiliation marked him deeply. He had always believed that a free society should rely on the virtue of its citizens rather than the coercive power of its government. Arnold's raid suggested that virtue was not enough when enemy soldiers were at the door.

Jefferson left the governorship in June 1781, months before Yorktown. He retreated to Monticello and his books, nursing wounds that were political and personal. Years later, when asked about his governorship, he was defensive and pained. The man who could articulate the highest ideals of the Revolution had struggled with its most basic practical demand: keeping the enemy out of the capital.`,
    audioScript: `Jefferson was not built for wartime command. He was built for thinking and writing. As the Declaration's author, he gave the Revolution its most powerful expression. As governor, he discovered that principles could not stop a British raiding party.

In January 1781, Arnold sailed up the James and occupied Richmond with almost no resistance. Jefferson had received conflicting intelligence and was slow to respond. Arnold's troops destroyed military stores and withdrew in a day.

The legislature investigated Jefferson's conduct. He was cleared, but the humiliation marked him. He had believed free societies should rely on citizens' virtue rather than coercive power. Arnold's raid suggested virtue was not enough when enemy soldiers were at the door.

The man who articulated the Revolution's highest ideals had struggled with its most basic demand: keeping the enemy out of the capital.`,
    tags: ['Jefferson', 'governorship', 'Arnold raid', 'vulnerability'],
    town: { connect: { id: 'us-va-richmond' } },
  },
  {
    id: 'story-richmond-modern-st-johns-church',
    title: 'The Speech That May Not Have Happened Exactly That Way',
    storyType: 'MODERN_VOICE',
    narratorName: 'Local Historian',
    narratorRole: 'St. John\'s Church Foundation',
    verificationStatus: 'UNVERIFIED',
    textVersion: `We reenact Patrick Henry's speech at St. John's Church every summer, and every year someone asks me afterward: did he really say those exact words. The honest answer is that we do not know. No one wrote the speech down at the time. What we have is William Wirt's reconstruction from 1817, based on the memories of men who had been present forty-two years earlier. Memory is not a transcript.

What we do know is that Patrick Henry stood in this church on March 23, 1775, and argued that Virginia should prepare for war. We know that his argument carried the convention. We know that the men who were there remembered it as one of the most extraordinary pieces of oratory they had ever witnessed. Thomas Jefferson said Henry spoke as Homer wrote. George Mason was equally impressed, and Mason was not easily impressed.

The question of exact words matters less than the question of what the speech accomplished. Virginia's political leadership — the most powerful delegation in the Continental Congress — committed to military preparation. Without that commitment, the Revolution might have remained a New England affair. Henry's speech, whatever its exact phrasing, helped make it a continental one.

What I find most interesting about the church itself is how ordinary it is. It is a modest Anglican church on a Richmond hillside, not a grand public building. The convention met here because they could not meet in Williamsburg, where the royal governor controlled the Capitol building. There is something fitting about the fact that one of the Revolution's defining moments took place not in a palace or a legislative chamber but in a parish church. The Revolution started in real places, among real people, making real decisions with uncertain outcomes.

Visitors sometimes want the history to be cleaner than it was. They want a verbatim quote and a clear moral. What we can offer is something better: the documented reality that a group of men met in this room and decided to risk everything. The exact words matter less than the decision. And the decision was real.`,
    audioScript: `We reenact Henry's speech every summer, and someone always asks: did he really say those exact words. The honest answer is we do not know. What we have is a reconstruction from 1817 based on forty-two-year-old memories.

What we know is that Henry argued for war, his argument carried the convention, and witnesses remembered it as extraordinary. Jefferson said Henry spoke as Homer wrote.

The exact words matter less than what the speech accomplished. Virginia's leadership committed to military preparation. Without that, the Revolution might have remained a New England affair.

The church itself is ordinary — a modest building on a hillside. The convention met here because the royal governor blocked them from Williamsburg. One of the Revolution's defining moments, in a parish church. The exact words matter less than the decision. And the decision was real.`,
    tags: ['Henry', 'oratory', 'St. John\'s Church', 'historical memory'],
    town: { connect: { id: 'us-va-richmond' } },
  },
];

// ============================================================================
// NORFOLK
// ============================================================================

export const norfolkTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Norfolk's Revolutionary War story is defined by destruction and by one of the most provocative acts of the entire conflict. On November 7, 1775, Lord Dunmore — Virginia's deposed royal governor, now operating from warships in the harbor — issued a proclamation offering freedom to enslaved people who escaped their patriot masters and joined the British forces. The proclamation sent a shockwave through Virginia's slaveholding society and hardened patriot resolve in ways that Dunmore may not have anticipated.

The burning of Norfolk on January 1, 1776, was the physical catastrophe that matched the political one. Dunmore's ships bombarded the waterfront, and British landing parties set fire to buildings along the shore. But the destruction did not end there. Patriot forces, seizing the opportunity to deny the town to the British and to punish suspected Loyalist merchants, burned far more of Norfolk than Dunmore's forces had. By the time the fires were out, most of the town had been destroyed. The question of who bore greater responsibility for the destruction — the British bombardment or the patriot burning — remained politically contentious for years.

Before the war, Norfolk had been Virginia's largest town and its most important commercial port. Its merchants maintained trading relationships with Britain and the Caribbean, and many of them were reluctant to support a break with the empire that sustained their prosperity. The town had a significant Loyalist population, which made it a target for patriot suspicion and retribution. Norfolk's destruction was partly a consequence of this divided loyalty.

Dunmore's proclamation about enslaved people was, in practical terms, a limited military measure — only those who could reach British lines were freed, and Dunmore had no interest in abolition as a principle. But its symbolic impact was enormous. It forced Virginia's revolutionaries to confront the contradiction at the heart of their cause: they fought for liberty while holding hundreds of thousands of people in bondage. The proclamation did not resolve that contradiction, but it made it impossible to ignore.`,
};

export const norfolkPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-norfolk-lord-dunmore',
    name: 'Lord Dunmore',
    roles: ['Royal Governor of Virginia', 'British Naval Commander', 'Proclamation Author'],
    bioShort:
      'Virginia\'s last royal governor, who issued the proclamation offering freedom to enslaved people who joined the British — a measure that enraged patriot Virginia and deepened the colony\'s commitment to independence. Dunmore directed the bombardment of Norfolk from his ships on January 1, 1776, before eventually withdrawing from Virginia entirely.',
    birthYear: 1730,
    deathYear: 1809,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-norfolk-robert-howe',
    name: 'Robert Howe',
    roles: ['Continental Army Major General', 'Norfolk Area Commander'],
    bioShort:
      'Continental officer from North Carolina who commanded patriot forces in the Norfolk area in late 1775 and early 1776. Howe\'s troops contributed to the destruction of Norfolk after Dunmore\'s bombardment, burning buildings to deny them to the British and to punish suspected Loyalists.',
    birthYear: 1732,
    deathYear: 1786,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-norfolk-andrew-sprowle',
    name: 'Andrew Sprowle',
    roles: ['Norfolk Merchant', 'Loyalist', 'Shipyard Owner'],
    bioShort:
      'One of Norfolk\'s wealthiest merchants and owner of the Gosport shipyard, Sprowle was a committed Loyalist who supported Dunmore and provided supplies to British forces. His property was targeted by patriot forces, and he died aboard a British ship in the harbor in 1776, his fortune destroyed.',
    birthYear: 1710,
    deathYear: 1776,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-norfolk-joseph-hutchings',
    name: 'Joseph Hutchings',
    roles: ['Norfolk Patriot', 'Committee of Safety Member', 'Militia Captain'],
    bioShort:
      'A Norfolk merchant who supported the patriot cause and served on the local Committee of Safety. Hutchings represented the minority of Norfolk\'s commercial class that sided with the Revolution, at considerable personal and financial risk in a town with strong Loyalist sympathies.',
    birthYear: 1735,
    deathYear: 1800,
    verificationStatus: 'ANECDOTAL',
  },
  {
    id: 'person-norfolk-colonel-woodford',
    name: 'William Woodford',
    roles: ['Virginia Militia Colonel', 'Continental Army Brigadier General', 'Battle of Great Bridge Commander'],
    bioShort:
      'Virginia militia officer who commanded patriot forces at the Battle of Great Bridge on December 9, 1775, defeating Dunmore\'s troops in a decisive engagement that drove the royal governor from the Virginia mainland. Woodford later served in the Continental Army and died as a prisoner of war in New York in 1780.',
    birthYear: 1734,
    deathYear: 1780,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-norfolk-enslaved-refugees',
    name: 'Refugees Who Answered Dunmore\'s Proclamation',
    roles: ['Formerly Enslaved Persons', 'British Allies', 'Freedom Seekers'],
    bioShort:
      'Approximately 800 to 2,000 enslaved people reached Dunmore\'s lines after his November 1775 proclamation, though many more attempted the journey. Those who arrived were organized into the "Ethiopian Regiment" and saw combat at Great Bridge. Smallpox ravaged the refugees, and most did not survive the war. Their stories are largely unrecorded.',
    birthYear: 1740,
    deathYear: 1790,
    verificationStatus: 'ORAL_TRADITION',
  },
  {
    id: 'person-norfolk-captain-samuel-leslie',
    name: 'Captain Samuel Leslie',
    roles: ['British Naval Officer', 'Bombardment Commander'],
    bioShort:
      'British officer involved in the naval operations around Norfolk in late 1775 and early 1776. Leslie participated in the bombardment of the Norfolk waterfront on January 1, 1776, part of Dunmore\'s attempt to punish the town for its growing patriot sympathies and to maintain British access to supplies.',
    birthYear: 1740,
    deathYear: 1794,
    verificationStatus: 'ANECDOTAL',
  },
  {
    id: 'person-norfolk-anne-dauge',
    name: 'Anne Dauge',
    roles: ['Norfolk Civilian', 'Displaced Resident', 'War Refugee'],
    bioShort:
      'A Norfolk resident displaced by the destruction of the town in January 1776. Like hundreds of other civilians, she lost her home and property in the combined British bombardment and patriot burning. The displaced residents of Norfolk scattered across the Virginia countryside, and many never returned.',
    birthYear: 1742,
    deathYear: 1810,
    verificationStatus: 'ANECDOTAL',
  },
];

export const norfolkEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-norfolk-dunmore-proclamation',
    name: 'Lord Dunmore\'s Proclamation',
    startDate: new Date('1775-11-07'),
    datePrecision: 'DAY',
    summary: `Lord Dunmore, operating from a warship in Norfolk harbor, issued a proclamation declaring martial law and offering freedom to enslaved people owned by rebels who escaped to British lines and bore arms for the Crown. The proclamation was a calculated military measure designed to destabilize Virginia's plantation economy and augment Dunmore's limited forces.

The response was immediate and polarizing. Enslaved people began attempting to reach Dunmore's ships, though the journey was dangerous and many were intercepted. Virginia's slaveholders were outraged, and the proclamation hardened patriot sentiment across the colony. Dunmore organized those who reached him into the "Ethiopian Regiment," which saw combat at the Battle of Great Bridge. The proclamation did not reflect British abolitionism — it applied only to enemies' enslaved people — but it exposed the Revolution's central contradiction with unprecedented clarity.`,
    significanceWeight: 90,
    lat: 36.8508,
    lng: -76.2859,
    town: { connect: { id: 'us-va-norfolk' } },
  },
  {
    id: 'event-norfolk-burning',
    name: 'Burning of Norfolk',
    startDate: new Date('1776-01-01'),
    datePrecision: 'DAY',
    summary: `On January 1, 1776, Dunmore's warships bombarded Norfolk's waterfront, and British landing parties set fire to buildings along the shore. But the destruction that followed was far more extensive than what the British bombardment caused. Patriot forces and militia, some acting under orders and some on their own initiative, burned large sections of the town over the following weeks.

By the time the fires were finally extinguished in February, roughly two-thirds of Norfolk had been destroyed. A subsequent committee investigation found that patriot forces had burned significantly more of the town than the British had. Norfolk, Virginia's largest and most prosperous town, was reduced to ruins. The destruction reflected both military strategy — denying the town to the British — and punitive anger at Norfolk's Loyalist population.`,
    significanceWeight: 80,
    lat: 36.8508,
    lng: -76.2859,
    town: { connect: { id: 'us-va-norfolk' } },
  },
  {
    id: 'event-norfolk-battle-great-bridge',
    name: 'Battle of Great Bridge',
    startDate: new Date('1775-12-09'),
    datePrecision: 'DAY',
    summary: `On December 9, 1775, patriot forces under Colonel William Woodford defeated Lord Dunmore's troops — including members of the Ethiopian Regiment — at Great Bridge, a strategic crossing point south of Norfolk. The British attacked across a narrow causeway and were repulsed with significant casualties. The patriots suffered no deaths in the engagement.

The battle effectively ended Dunmore's ability to operate on the Virginia mainland. He withdrew his forces to ships in the harbor, from where he would continue to raid and bombard but could no longer hold territory. Great Bridge was a small battle by later standards, but it was the decisive military engagement that expelled royal authority from Virginia's most important port.`,
    significanceWeight: 75,
    lat: 36.7201,
    lng: -76.2336,
    town: { connect: { id: 'us-va-norfolk' } },
  },
  {
    id: 'event-norfolk-ethiopian-regiment',
    name: 'Formation of Dunmore\'s Ethiopian Regiment',
    startDate: new Date('1775-11-14'),
    datePrecision: 'MONTH',
    summary: `Following his proclamation, Dunmore organized enslaved people who reached British lines into the Ethiopian Regiment, a military unit that wore uniforms bearing the inscription "Liberty to Slaves." The regiment grew to perhaps 300 men before the Battle of Great Bridge, where some of its members saw their first combat.

The Ethiopian Regiment represented both a genuine path to freedom for the individuals who joined and a cynical military calculation by Dunmore. Conditions aboard the crowded ships were terrible, and a smallpox epidemic decimated the regiment and the civilian refugees. Many who had risked everything to reach British lines died of disease rather than in combat. Their experience was a grim illustration of how freedom, even when offered, came with devastating costs.`,
    significanceWeight: 80,
    lat: 36.8508,
    lng: -76.2859,
    town: { connect: { id: 'us-va-norfolk' } },
  },
  {
    id: 'event-norfolk-dunmore-evacuates',
    name: 'Dunmore\'s Fleet Departs Virginia',
    startDate: new Date('1776-08-06'),
    datePrecision: 'MONTH',
    summary: `After months of operating from ships in the Chesapeake, Dunmore finally abandoned Virginia waters in the summer of 1776. His fleet — a collection of warships, supply vessels, and transports carrying Loyalist refugees, formerly enslaved people, and soldiers — sailed for New York and eventually the Caribbean. Dunmore's departure marked the definitive end of royal government in Virginia.

The refugees aboard Dunmore's ships faced an uncertain future. Loyalist families who had lost everything in Norfolk scattered across the British Empire. The enslaved people who had answered Dunmore's proclamation and survived disease and combat faced continued uncertainty about their status. For many, the journey from Norfolk was the beginning of a diaspora that took them to Nova Scotia, the Bahamas, Sierra Leone, and elsewhere.`,
    significanceWeight: 65,
    lat: 36.8508,
    lng: -76.2859,
    town: { connect: { id: 'us-va-norfolk' } },
  },
  {
    id: 'event-norfolk-committee-safety',
    name: 'Norfolk Committee of Safety Takes Control',
    startDate: new Date('1775-06-01'),
    datePrecision: 'MONTH',
    summary: `Norfolk's Committee of Safety assumed effective governance of the town as royal authority collapsed in the summer of 1775. The committee enforced non-importation agreements, monitored Loyalist activity, and organized militia defense. Its task was complicated by Norfolk's deeply divided population, where many prominent merchants maintained Loyalist sympathies.

The committee's work reflected the ugly side of revolutionary governance: neighbors informing on neighbors, property seized from suspected Loyalists, social and economic pressure applied to those who would not commit to the patriot cause. Norfolk's division between patriots and Loyalists was sharper than in most Virginia towns, and the committee's authority was exercised in an atmosphere of suspicion and recrimination.`,
    significanceWeight: 55,
    lat: 36.8508,
    lng: -76.2859,
    town: { connect: { id: 'us-va-norfolk' } },
  },
  {
    id: 'event-norfolk-smallpox-epidemic',
    name: 'Smallpox Epidemic Among Dunmore\'s Forces',
    startDate: new Date('1776-03-01'),
    datePrecision: 'MONTH',
    summary: `A devastating smallpox epidemic swept through Dunmore's crowded fleet in early 1776, killing hundreds of people — particularly the formerly enslaved refugees who had answered the governor's proclamation. The disease spread rapidly in the unsanitary conditions aboard the packed ships, where ventilation was poor and medical care almost nonexistent.

The epidemic was a catastrophe for the Ethiopian Regiment and the civilian refugees. Estimates suggest that as many as half of the enslaved people who reached Dunmore's lines died of smallpox. The epidemic effectively destroyed Dunmore's ability to recruit further and reduced his military force to a shadow of what he had hoped to assemble. For the people who had risked everything for freedom, the epidemic was a cruel final injustice.`,
    significanceWeight: 65,
    lat: 36.8508,
    lng: -76.2859,
    town: { connect: { id: 'us-va-norfolk' } },
  },
  {
    id: 'event-norfolk-loyalist-exodus',
    name: 'Loyalist Exodus from Norfolk',
    startDate: new Date('1775-12-01'),
    datePrecision: 'MONTH',
    summary: `As patriot control tightened over Norfolk in late 1775, Loyalist families fled to Dunmore's ships in the harbor or attempted to leave the colony entirely. The exodus included some of Norfolk's wealthiest merchants, whose commercial connections to Britain made them targets of patriot hostility. Andrew Sprowle, the town's richest merchant and owner of the Gosport shipyard, died aboard a British ship in the harbor.

The Loyalist exodus stripped Norfolk of much of its commercial expertise and capital. The departures, combined with the subsequent destruction of the town, transformed Norfolk from Virginia's busiest port into a depopulated ruin. Rebuilding would take years, and the prewar commercial elite never returned. Norfolk's Revolutionary experience was defined as much by what was lost as by what was gained.`,
    significanceWeight: 60,
    lat: 36.8508,
    lng: -76.2859,
    town: { connect: { id: 'us-va-norfolk' } },
  },
];

export const norfolkStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-norfolk-dunmore-proclamation',
    title: 'Liberty to Slaves',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-norfolk-enslaved-refugees' } },
    verificationStatus: 'ORAL_TRADITION',
    textVersion: `The names of most of them are lost. We know that perhaps 800 to 2,000 enslaved people made it to Lord Dunmore's ships after his November 1775 proclamation, and that many more tried and failed. We know they were organized into a unit called the Ethiopian Regiment and given uniforms bearing the words "Liberty to Slaves." We know they fought at the Battle of Great Bridge. Beyond that, the individual stories dissolve into silence.

What we can reconstruct is the calculus of their decision. To answer Dunmore's proclamation, an enslaved person had to learn of it — often through the same networks of communication that slaveholders tried to suppress. They had to evaluate whether the offer was genuine. They had to plan an escape across terrain patrolled by militia and slavecatchers. They had to leave behind family members who might not be able to come. And they had to reach British lines before being caught, knowing that the punishment for failure would be severe.

Those who made it found conditions that were, by any standard, terrible. Dunmore's ships were crowded, unsanitary, and poorly supplied. Smallpox broke out in early 1776 and killed hundreds. The people who had risked everything for freedom died in the holds of ships, surrounded by disease and filth. The British had offered liberty, but they had not offered care.

Dunmore's proclamation was not an act of conscience. It was a military tactic — a way to weaken the enemy by destabilizing their labor force. The governor had no interest in abolition as a principle. He offered freedom only to the enslaved people of rebels, not to those belonging to Loyalists, and certainly not to those he himself might have owned. The freedom on offer was conditional, instrumental, and limited.

And yet. For the people who answered the call, the distinction between principled emancipation and tactical liberation may not have mattered much. They were enslaved, and they were offered a chance — however flawed, however dangerous — to be free. That many of them took that chance, knowing the risks, tells us something about the human need for liberty that no philosophical treatise could express more clearly.

The survivors scattered. Some went to New York, some to the Caribbean, some to Nova Scotia, and eventually some to Sierra Leone. They carried the memory of Dunmore's proclamation with them, a memory of a promise that was both real and radically incomplete. Like the Revolution itself.`,
    audioScript: `Most of their names are lost. Perhaps 800 to 2,000 enslaved people reached Dunmore's ships after his proclamation. They were organized into the Ethiopian Regiment, given uniforms reading "Liberty to Slaves," and fought at Great Bridge.

To answer the proclamation meant learning of it through suppressed networks, evaluating whether it was genuine, planning an escape past militia and slavecatchers, and leaving family behind. Those who made it found crowded ships where smallpox killed hundreds.

Dunmore's proclamation was not conscience — it was military tactics, offering freedom only to rebels' enslaved people. But for those who answered, the distinction may not have mattered. They were enslaved and offered a chance to be free.

The survivors scattered to New York, Nova Scotia, Sierra Leone. They carried memory of a promise that was both real and radically incomplete. Like the Revolution itself.`,
    tags: ['slavery', 'emancipation', 'Ethiopian Regiment', 'Dunmore'],
    town: { connect: { id: 'us-va-norfolk' } },
  },
  {
    id: 'story-norfolk-modern-destroyed-town',
    title: 'The Town That Burned Twice',
    storyType: 'MODERN_VOICE',
    narratorName: 'Norfolk Public Library Archivist',
    narratorRole: 'Sargeant Memorial Collection, Norfolk Public Library',
    verificationStatus: 'UNVERIFIED',
    textVersion: `The conventional story of Norfolk's destruction goes like this: Lord Dunmore bombarded the town from his ships on January 1, 1776, and the fires destroyed most of the buildings. The reality is more complicated and more uncomfortable. The British bombardment started the fires along the waterfront, but patriot forces burned far more of the town than the British did. A legislative investigation later concluded that the patriots had done most of the damage.

Why did American forces destroy an American town. The answers are tangled. Some of the burning was military — denying buildings and supplies to the enemy. Some was punitive — Norfolk's Loyalist merchants were targets of patriot anger. Some was opportunistic — the chaos of fire provided cover for settling personal scores and seizing property. The destruction of Norfolk was not a clean story of British villainy. It was a messy story of war, politics, revenge, and divided loyalties.

In our archives, we have fragments of what was lost. Property claims filed after the war. Letters from displaced residents trying to establish their losses. Records of the committee that investigated the burning. What emerges from these documents is a picture of a town that tore itself apart along the fault lines of loyalty and commerce.

The Dunmore proclamation is the other piece of Norfolk's story that complicates the standard narrative. The offer of freedom to enslaved people who joined the British was the most radical act any official in Virginia had taken, and it came from the representative of the Crown, not from the revolutionaries who claimed to be fighting for liberty. The irony is sharp enough to cut.

Norfolk eventually rebuilt, but it took decades. The prewar commercial elite — many of them Loyalists — were gone. The town's economy had to be reconstructed from scratch. The Norfolk that emerged after the war was a different place from the one that had been Virginia's busiest port. That transformation is the real story of the Revolution here: not a single dramatic event, but a slow, painful process of destruction and rebuilding that changed everything about the town and its people.`,
    audioScript: `The conventional story says Dunmore bombarded Norfolk on January 1, 1776 and destroyed it. The reality: patriot forces burned far more of the town than the British did. A legislative investigation confirmed it.

Why did American forces destroy an American town. Some burning was military — denying supplies. Some was punitive — targeting Loyalist merchants. Some was opportunistic. Norfolk's destruction was not clean British villainy. It was war, politics, and divided loyalties.

The Dunmore proclamation complicates the narrative further. The offer of freedom to enslaved people came from the Crown's representative, not from revolutionaries claiming to fight for liberty. The irony is sharp enough to cut.

Norfolk rebuilt over decades, but the prewar town was gone. Not a single dramatic event, but a slow process of destruction and rebuilding that changed everything.`,
    tags: ['destruction', 'Loyalists', 'rebuilding', 'divided loyalties'],
    town: { connect: { id: 'us-va-norfolk' } },
  },
];

// ============================================================================
// CHARLOTTESVILLE
// ============================================================================

export const charlottesvilleTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Charlottesville's most dramatic Revolutionary War moment came on June 4, 1781, when British cavalry under Lieutenant Colonel Banastre Tarleton nearly captured Thomas Jefferson and the entire Virginia legislature. The legislature had fled Richmond after Arnold's raid and reconvened in Charlottesville, believing the Blue Ridge foothills to be safe from British reach. Tarleton's lightning raid proved them wrong and sent the government fleeing once more, this time over the mountains.

Jack Jouett, a Virginia militiaman, spotted Tarleton's cavalry at Cuckoo Tavern in Louisa County on the night of June 3 and rode through the darkness to warn Jefferson at Monticello and the legislature in Charlottesville. Jouett's ride covered roughly forty miles of rough terrain at night, and his warning gave Jefferson and most of the legislators barely enough time to escape. Seven legislators who did not leave quickly enough were captured, though they were later paroled.

Jefferson's near-capture was the final humiliation of his governorship. He had already been criticized for the fall of Richmond, and now he had nearly been taken prisoner in his own home. He left Monticello minutes before Tarleton's advance guard arrived, and the British troops spent several hours at the estate, consuming food and wine but causing relatively little physical damage. Jefferson's political opponents used the episode to question his personal courage, accusations that stung him for years.

Charlottesville's role in the Revolution was brief but revealing. The town was small and remote, and its significance derived entirely from the presence of the legislature and the proximity of Monticello. Tarleton's raid demonstrated that nowhere in Virginia was truly safe from British cavalry in the spring of 1781, and it exposed the fragility of a state government that had been on the run for months. The episode was a low point, but it also preceded by only a few months the triumph at Yorktown that made all the suffering worthwhile.`,
};

export const charlottesvillePeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-charlottesville-thomas-jefferson-cville',
    name: 'Thomas Jefferson',
    roles: ['Governor of Virginia', 'Monticello Owner', 'Statesman'],
    bioShort:
      'Narrowly escaped capture at Monticello on June 4, 1781, when Tarleton\'s cavalry raided Charlottesville. Jefferson left his mountaintop home minutes before British soldiers arrived. The incident, coming at the end of a difficult governorship, was used by his political enemies to question his courage and leadership.',
    birthYear: 1743,
    deathYear: 1826,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-charlottesville-banastre-tarleton',
    name: 'Banastre Tarleton',
    roles: ['British Lieutenant Colonel', 'Cavalry Commander', 'Raid Leader'],
    bioShort:
      'Aggressive British cavalry officer whose raid on Charlottesville nearly captured Jefferson and the Virginia legislature. Tarleton was known for the speed and brutality of his operations, and his name was feared throughout Virginia and the Carolinas. His raid on Charlottesville was one of the most daring cavalry operations of the war.',
    birthYear: 1754,
    deathYear: 1833,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-charlottesville-jack-jouett',
    name: 'Jack Jouett',
    roles: ['Virginia Militia Captain', 'Midnight Rider', 'Patriot'],
    bioShort:
      'The Virginia equivalent of Paul Revere, Jouett spotted Tarleton\'s cavalry at Cuckoo Tavern and rode approximately forty miles through the night to warn Jefferson at Monticello and the legislature at Charlottesville. His ride, through rough terrain in darkness, gave the government barely enough time to escape.',
    birthYear: 1754,
    deathYear: 1822,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-charlottesville-daniel-boone',
    name: 'Daniel Boone',
    roles: ['Virginia Legislator', 'Frontier Scout', 'Militia Officer'],
    bioShort:
      'The famous frontiersman was serving as a member of the Virginia legislature from Kentucky County when Tarleton raided Charlottesville. Boone was among the legislators who escaped capture. His presence in Charlottesville reflected the vast geographic reach of Virginia, which then extended to the Mississippi River.',
    birthYear: 1734,
    deathYear: 1820,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-charlottesville-thomas-nelson-jr',
    name: 'Thomas Nelson Jr.',
    roles: ['Governor of Virginia', 'Continental Congress Delegate', 'Signer of Declaration of Independence'],
    bioShort:
      'Succeeded Jefferson as governor of Virginia in June 1781, just days after the Charlottesville raid. Nelson brought a more aggressive approach to wartime leadership, personally commanding Virginia militia at Yorktown and reportedly directing artillery fire at his own house, which Cornwallis was using as a headquarters.',
    birthYear: 1738,
    deathYear: 1789,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-charlottesville-john-walker',
    name: 'John Walker',
    roles: ['Virginia Legislator', 'Continental Congress Delegate', 'Militia Colonel'],
    bioShort:
      'Albemarle County planter and politician who served in the Virginia legislature and Continental Congress. Walker was present in Charlottesville during Tarleton\'s raid and was among those who escaped. His estate, Belvoir, was one of the prominent plantations in the Charlottesville area during the Revolution.',
    birthYear: 1744,
    deathYear: 1809,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-charlottesville-isaac-jefferson',
    name: 'Isaac Jefferson',
    roles: ['Enslaved Person at Monticello', 'Blacksmith', 'Memoirist'],
    bioShort:
      'An enslaved man at Monticello whose later memoirs, dictated in the 1840s, provide a rare firsthand account of life on Jefferson\'s plantation and the events of the Revolution as experienced by enslaved people. His recollections of Tarleton\'s raid and the wartime disruption at Monticello are among the few accounts from an enslaved perspective.',
    birthYear: 1775,
    deathYear: 1846,
    verificationStatus: 'ORAL_TRADITION',
  },
  {
    id: 'person-charlottesville-martha-jefferson',
    name: 'Martha Wayles Skelton Jefferson',
    roles: ['Governor\'s Wife', 'Monticello Mistress', 'Wartime Refugee'],
    bioShort:
      'Jefferson\'s wife, who was in poor health during much of the Revolution and gave birth to a daughter just weeks before Tarleton\'s raid. She fled Monticello with her husband and children, enduring the physical hardship of wartime flight while already weakened. She died in September 1782, at age thirty-three.',
    birthYear: 1748,
    deathYear: 1782,
    verificationStatus: 'VERIFIED',
  },
];

export const charlottesvilleEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-charlottesville-tarleton-raid',
    name: 'Tarleton\'s Raid on Charlottesville',
    startDate: new Date('1781-06-04'),
    datePrecision: 'DAY',
    summary: `Lieutenant Colonel Banastre Tarleton led approximately 250 British dragoons on a rapid march from the east, arriving in Charlottesville on the morning of June 4, 1781. His objective was to capture Thomas Jefferson and the Virginia legislature, which had relocated to Charlottesville after fleeing Richmond. Jack Jouett's overnight ride had given the targets just enough warning to escape.

Tarleton's troops captured seven legislators who had not departed in time, and a small detachment rode up to Monticello but found Jefferson gone. The British spent several hours in Charlottesville and at Monticello before withdrawing. The raid demonstrated the reach of British cavalry and the vulnerability of Virginia's government, but the failure to capture Jefferson or the legislature made it a tactical success without strategic significance.`,
    significanceWeight: 75,
    lat: 38.0293,
    lng: -78.4767,
    town: { connect: { id: 'us-va-charlottesville' } },
  },
  {
    id: 'event-charlottesville-jouett-ride',
    name: 'Jack Jouett\'s Midnight Ride',
    startDate: new Date('1781-06-03'),
    datePrecision: 'DAY',
    summary: `On the night of June 3, 1781, Captain Jack Jouett spotted Tarleton's cavalry resting at Cuckoo Tavern in Louisa County, approximately forty miles east of Charlottesville. Jouett deduced their objective and rode through the night on back roads and trails to warn Jefferson at Monticello and the legislature in Charlottesville.

Jouett arrived at Monticello around 4:30 in the morning and then rode on to Charlottesville to alert the legislators. His ride, through rough terrain and darkness, gave Jefferson and most of the legislators barely enough time to escape. Unlike Paul Revere's more famous ride, Jouett's has never received comparable public recognition, though the Virginia legislature later rewarded him with a sword and a pair of pistols.`,
    significanceWeight: 70,
    lat: 38.0293,
    lng: -78.4767,
    town: { connect: { id: 'us-va-charlottesville' } },
  },
  {
    id: 'event-charlottesville-jefferson-flees-monticello',
    name: 'Jefferson Flees Monticello',
    startDate: new Date('1781-06-04'),
    datePrecision: 'DAY',
    summary: `Thomas Jefferson received Jouett's warning early on the morning of June 4 but did not immediately leave Monticello, reportedly wanting to secure important papers first. A second warning, from a scout who could see British cavalry ascending the mountain, finally prompted his departure. Jefferson left on horseback, taking back paths through the woods, only minutes before Tarleton's advance guard reached the house.

The near-capture was the final blow to Jefferson's already-damaged reputation as a wartime leader. His political enemies in the legislature had already called for an investigation into his conduct as governor, and the flight from Monticello gave them additional ammunition. Jefferson was deeply wounded by the criticism and retreated from public life for several years.`,
    significanceWeight: 70,
    lat: 38.0089,
    lng: -78.4533,
    town: { connect: { id: 'us-va-charlottesville' } },
  },
  {
    id: 'event-charlottesville-legislature-flees',
    name: 'Virginia Legislature Flees to Staunton',
    startDate: new Date('1781-06-04'),
    datePrecision: 'DAY',
    summary: `After Jouett's warning, most members of the Virginia legislature fled Charlottesville and reconvened in Staunton, across the Blue Ridge Mountains. The flight was the third relocation of the legislature in six months — from Richmond to Charlottesville to Staunton — and it underscored the near-collapse of Virginia's state government during the spring of 1781.

In Staunton, the legislature elected Thomas Nelson Jr. to replace Jefferson as governor. Nelson's selection reflected a desire for more aggressive military leadership. Within months, Nelson would personally command Virginia militia at the siege of Yorktown, providing the kind of hands-on wartime leadership that Jefferson had been unable or unwilling to exercise.`,
    significanceWeight: 65,
    lat: 38.0293,
    lng: -78.4767,
    town: { connect: { id: 'us-va-charlottesville' } },
  },
  {
    id: 'event-charlottesville-barracks-convention-army',
    name: 'Convention Army Prisoners at Charlottesville',
    startDate: new Date('1779-01-01'),
    datePrecision: 'YEAR',
    summary: `In 1779, approximately 4,000 British and Hessian prisoners of war captured at Saratoga — known as the Convention Army — were marched to a prison camp near Charlottesville. The presence of these prisoners transformed the small town, creating an unexpected social and economic dynamic as local residents interacted with European officers and soldiers.

Jefferson, who visited the prisoner encampment from Monticello, engaged in intellectual exchange with some of the captured officers, particularly the Hessians. The prisoner camp strained local resources but also brought money and trade to the area. The Convention Army prisoners remained near Charlottesville for over a year before being moved to other locations, leaving behind gardens, structures, and lasting memories of an unusual wartime community.`,
    significanceWeight: 60,
    lat: 38.0293,
    lng: -78.4767,
    town: { connect: { id: 'us-va-charlottesville' } },
  },
  {
    id: 'event-charlottesville-british-at-monticello',
    name: 'British Troops at Monticello',
    startDate: new Date('1781-06-04'),
    datePrecision: 'DAY',
    summary: `A detachment of Tarleton's cavalry, led by Captain Kenneth McLeod, reached Monticello shortly after Jefferson's departure. The British troops spent approximately eighteen hours at the estate, consuming food and wine from Jefferson's stores but causing relatively little physical damage. Tarleton had reportedly ordered that the property be treated with respect.

The enslaved people at Monticello were left to manage the British occupation on their own. Isaac Jefferson, then a young boy, later recalled the soldiers' arrival in his memoirs. Some enslaved people at Monticello used the confusion of the British raid as an opportunity to escape. The episode reveals how military events disrupted the plantation system and created moments of both danger and possibility for enslaved communities.`,
    significanceWeight: 65,
    lat: 38.0089,
    lng: -78.4533,
    town: { connect: { id: 'us-va-charlottesville' } },
  },
  {
    id: 'event-charlottesville-nelson-elected-governor',
    name: 'Thomas Nelson Jr. Elected Governor',
    startDate: new Date('1781-06-12'),
    datePrecision: 'DAY',
    summary: `Meeting in Staunton after fleeing Charlottesville, the Virginia legislature elected Thomas Nelson Jr. as governor on June 12, 1781. Nelson, a signer of the Declaration of Independence and a wealthy Yorktown planter, brought a markedly different temperament to the office than Jefferson had shown. He was willing to use emergency powers, including impressing supplies and horses for the military.

Nelson's election marked a shift toward more aggressive wartime leadership in Virginia. He would personally command the Virginia militia at Yorktown just four months later, reportedly directing cannon fire at his own Yorktown house, which Cornwallis was using as a headquarters. Nelson's health and fortune were both ruined by his wartime service — he died at fifty-one, largely impoverished.`,
    significanceWeight: 65,
    lat: 38.0293,
    lng: -78.4767,
    town: { connect: { id: 'us-va-charlottesville' } },
  },
  {
    id: 'event-charlottesville-cornwallis-virginia-campaign',
    name: 'Cornwallis Campaigns Across Virginia',
    startDate: new Date('1781-05-20'),
    datePrecision: 'MONTH',
    summary: `Tarleton's raid on Charlottesville was part of Cornwallis's broader campaign across Virginia in the spring and summer of 1781. After marching his army north from the Carolinas, Cornwallis pursued Lafayette's smaller American force across the state, detaching Tarleton and other units on raiding missions to destroy military supplies and disrupt the Virginia government.

The Virginia campaign of 1781 brought the war to a state that had been largely spared direct combat since the early days of the conflict. British troops marched through the Piedmont, burned estates, and disrupted the state's ability to supply Continental forces. The campaign's climax would come at Yorktown in October, but the spring and summer raids — including the attack on Charlottesville — demonstrated how thoroughly British forces could operate in Virginia's interior.`,
    significanceWeight: 60,
    lat: 38.0293,
    lng: -78.4767,
    town: { connect: { id: 'us-va-charlottesville' } },
  },
];

export const charlottesvilleStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-charlottesville-jouett-ride',
    title: 'The Ride Nobody Remembers',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-charlottesville-jack-jouett' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Jack Jouett was at Cuckoo Tavern in Louisa County on the night of June 3, 1781, when he saw a column of British cavalry halt for a rest. Tarleton's green-jacketed dragoons were unmistakable, and Jouett knew the only target worth a forced march in this direction was Charlottesville, where the Virginia legislature had reconvened, and Monticello, where the governor lived. He mounted his horse and rode.

The distance was roughly forty miles, much of it through heavily wooded country without proper roads. Jouett took back trails to avoid British patrols, pushing through branches that reportedly left permanent scars on his face. He reached Monticello around 4:30 in the morning, woke Jefferson, and then rode on to Charlottesville to warn the legislators.

His warning gave the government barely enough time. Jefferson lingered, trying to secure papers, and nearly did not make it. Several legislators who were slow to leave were captured. But most of the government escaped, and the legislature reconvened in Staunton a few days later. Without Jouett's ride, Jefferson and much of Virginia's political leadership would have been in British custody.

Paul Revere's ride — shorter, in settled territory, on good roads — became one of the most famous stories in American history, largely because of Longfellow's poem. Jouett's ride was longer, more physically demanding, and had arguably greater strategic significance. But no one wrote a poem about it, and so most Americans have never heard of Jack Jouett.

The Virginia legislature rewarded him with an elegant sword and a pair of silver-mounted pistols. He moved to Kentucky after the war and lived as a tavern-keeper and legislator. A county in Kentucky is named after him. But the national memory never found room for his ride alongside Revere's. History has its preferences, and they are not always fair.`,
    audioScript: `Jack Jouett was at Cuckoo Tavern when he spotted Tarleton's cavalry on the night of June 3, 1781. He knew the target was Charlottesville and Monticello. He mounted his horse and rode forty miles through the darkness.

He took back trails through heavy woods, branches scarring his face. He reached Monticello at 4:30 in the morning, woke Jefferson, and rode on to warn the legislators. Most escaped. Without his ride, Virginia's political leadership would have been captured.

Paul Revere's ride — shorter, on good roads — became one of America's most famous stories because Longfellow wrote a poem. Jouett's ride was longer, harder, and arguably more important. But no one wrote a poem about it.

Virginia gave him a sword and pistols. A Kentucky county bears his name. History has its preferences, and they are not always fair.`,
    tags: ['midnight ride', 'Jouett', 'Tarleton', 'warning'],
    town: { connect: { id: 'us-va-charlottesville' } },
  },
  {
    id: 'story-charlottesville-modern-monticello',
    title: 'The Mountain and Its Contradictions',
    storyType: 'MODERN_VOICE',
    narratorName: 'Monticello Guide',
    narratorRole: 'Thomas Jefferson Foundation',
    verificationStatus: 'UNVERIFIED',
    textVersion: `Visitors come to Monticello expecting the home of a founding father, and they find that, but they also find a plantation where over 600 people were enslaved over the course of Jefferson's lifetime. The Revolutionary War story here — Tarleton's raid, Jefferson's narrow escape, the British soldiers drinking his wine — is dramatic, but it is not the whole story, and it may not be the most important one.

What we have tried to do in recent years is present the full community that lived on this mountain. The archaeological work and the documentary research have revealed the lives of the enslaved families at Monticello in detail that earlier generations of historians either did not have access to or chose to ignore. Isaac Jefferson's memoirs, dictated in the 1840s, give us a firsthand account of the raid from an enslaved person's perspective. He remembered the British soldiers, the confusion, the fear. His account is different from Jefferson's.

The raid itself is a useful teaching moment because it shows how differently the same event was experienced by different people on the same mountaintop. For Jefferson, it was a political humiliation and a physical danger. For Martha Jefferson, who was in poor health and had recently given birth, it was a terrifying flight with an infant. For the enslaved community, it was a moment of disruption that some used as an opportunity to escape. About thirty enslaved people from Jefferson's various properties left during the British campaigns of 1781, seeking freedom with the enemy.

Jefferson wrote about liberty with more eloquence than any American before or since. He also held over 600 people in slavery and freed only a handful in his lifetime. We do not resolve that contradiction for visitors. We present it honestly and let them sit with it. The Revolution was fought for freedom, and it was fought by people who denied freedom to others. Both things are true, and both are part of what this place means.

The view from Monticello is stunning — the Blue Ridge Mountains, the Piedmont spreading out below. Jefferson chose this site deliberately. He wanted to look out over the world from a position of elevation and beauty. Understanding what that world actually looked like — who built it, who maintained it, who lived in it without choice — is the work we are still doing here.`,
    audioScript: `Visitors expect the home of a founding father. They find that, and a plantation where over 600 people were enslaved. The Tarleton raid is dramatic, but not the whole story.

Isaac Jefferson's memoirs give us the raid from an enslaved person's perspective — different from Jefferson's account. For Jefferson, political humiliation. For the enslaved community, a moment some used to escape. About thirty enslaved people left during the British campaigns of 1781.

Jefferson wrote about liberty with more eloquence than any American. He also held over 600 people in slavery. We do not resolve that contradiction. We present it honestly.

Understanding who built this place, who maintained it, who lived here without choice — that is the work we are still doing.`,
    tags: ['Monticello', 'slavery', 'Jefferson', 'interpretation'],
    town: { connect: { id: 'us-va-charlottesville' } },
  },
];
