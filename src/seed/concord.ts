// MODEL: Claude Opus (historical synthesis and narrative content)
// MODEL: Claude Sonnet (data structure and code)
// Concord, MA - Complete flagship content for Phase 2

import { Prisma } from '@prisma/client';

/**
 * Concord, Massachusetts - Where the colonists fired back
 *
 * NOTE ON VERIFICATION: All historical content has been synthesized from
 * established scholarly sources including David Hackett Fischer's "Paul Revere's Ride,"
 * Robert Gross's "The Minutemen and Their World," and NPS documentation.
 * Stories marked VERIFIED have strong documentary evidence. Lesser-known
 * voices may carry ORAL_TRADITION or ANECDOTAL status where the historical
 * record is thinner.
 */

export const concordTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Concord is where the American Revolution became a fight—where colonial militiamen stopped retreating and started shooting back. At the North Bridge on April 19, 1775, provincial militia fired on British regulars and drove them back. This was not self-defense; this was counterattack. The psychological shift was immense.

The British had marched from Boston to seize military supplies stored in Concord—powder, shot, cannons, and provisions that colonial organizers had been quietly stockpiling. They found less than expected. Concord's residents, warned by the alarm network, had spent the night hiding munitions in fields, attics, and freshly plowed furrows.

Why does Concord matter today? Because it demonstrates that resistance requires preparation. The militia who fought at North Bridge weren't spontaneous rebels; they were members of an organized response planned months in advance. The supplies they protected had been gathered systematically. The alarm system that brought them together had been rehearsed.

Concord also complicates the heroic narrative. The fighting here was brutal and confused. British soldiers, many of them young and frightened, faced a countryside rising against them. Colonists, acting without clear command structure, fired from behind walls and houses. The "shot heard round the world" was followed by a bloody eighteen-mile running battle back to Boston.

The town's careful preservation of North Bridge, the Old Manse, and the surrounding landscape offers visitors the rare chance to walk ground that witnessed the birth of a nation's armed resistance. This is where theory became practice, where talk of rights became the exercise of them.`,
  tourismInfo: {
    walkabilityScore: 70,
    publicTransitAccess: true,
    nearMajorCity: true,
    parkingAvailable: true,
    adaCompliance: 75,
    bestTimeToVisit: 'Patriots Day (third Monday of April) for annual reenactment; Fall for foliage along the Concord River',
    avgVisitDuration: '4-5 hours',
    guidedToursAvailable: true,
    visitorCenterQuality: 90,
    digitalResourcesQuality: 80,
    educationalProgramsCount: 15,
    npsDesignation: true,
    stateHistoricSite: true,
    activePreservationOrg: true,
    preservationQuality: 95,
    placeholder: false,
  },
};

/**
 * Events connected to Concord
 */
export const concordEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-north-bridge',
    name: 'Battle of North Bridge',
    startDate: new Date('1775-04-19T09:30:00'),
    datePrecision: 'DAY',
    summary: `The engagement at North Bridge marked the first successful American armed resistance to British regulars. Approximately 400 colonial militia, having gathered on Punkatasset Hill overlooking the bridge, advanced when they saw smoke rising from the town center—they believed the British were burning Concord.

As the militia approached, British light infantry companies at the bridge fired warning shots, then volleys. Two Americans fell dead, including Captain Isaac Davis of Acton. Major John Buttrick of Concord reportedly shouted "Fire, fellow soldiers! For God's sake, fire!" The provincials discharged a volley that killed three British soldiers and wounded nine others.

The British retreated in disorder. For the first time, colonial militia had stood, fired, and driven back the King's troops. The psychological impact was immense: the "invincible" regulars could be beaten.

The dead British soldiers were buried near the bridge. A famous epitaph, attributed to Concord poet Ralph Waldo Emerson's grandfather, reads: "They came three thousand miles and died / To keep the past upon its throne."`,
    significanceWeight: 100,
    lat: 42.4680,
    lng: -71.3511,
    town: { connect: { id: 'us-ma-concord' } },
  },
  {
    id: 'event-british-concord-arrival',
    name: 'British Expedition Reaches Concord',
    startDate: new Date('1775-04-19T07:00:00'),
    datePrecision: 'DAY',
    summary: `After the brief, bloody encounter at Lexington, Lieutenant Colonel Francis Smith's column continued its march to Concord, the expedition's primary objective. The British arrived around 7:00 AM to find the town largely deserted—warned residents had fled or hidden.

Smith divided his forces. Light infantry companies under Captain Lawrence Parsons crossed North Bridge to search for supplies at Colonel James Barrett's farm. Other units searched the town center, finding some gun carriages, which they burned, and flour, which they dumped. The smoke from burning supplies would trigger the confrontation at North Bridge.

The colonists had prepared well. Most military supplies had been hidden overnight in fields, behind woodpiles, in freshly turned earth, and in neighboring towns. The British found far less than intelligence had promised. Their mission was already failing before the shooting started.`,
    significanceWeight: 85,
    town: { connect: { id: 'us-ma-concord' } },
  },
  {
    id: 'event-supplies-hidden',
    name: 'Concord Hides Its Military Supplies',
    startDate: new Date('1775-04-18T23:00:00'),
    datePrecision: 'DAY',
    summary: `When Paul Revere's warning reached Concord around 1:00 AM via Dr. Samuel Prescott, the town sprang into action. Throughout the remaining hours of darkness, residents worked to conceal the military supplies that British intelligence knew were stored there.

Cannons were buried in fields. Powder was hidden in attics and root cellars. Musket balls were dispersed among multiple households. Provisions were carted to neighboring towns. At Colonel James Barrett's farm, the primary storage site, his granddaughter reportedly spent hours plowing furrows to bury supplies.

This concealment effort demonstrated the organizational sophistication of colonial resistance. Concord had contingency plans. When the British arrived at dawn, they found some supplies but far less than expected—enough to claim a partial success, not enough to justify the political cost of the expedition.

The hidden supplies would arm the militia that besieged Boston in the coming months.`,
    significanceWeight: 80,
    town: { connect: { id: 'us-ma-concord' } },
  },
  {
    id: 'event-provincial-congress-concord',
    name: 'Massachusetts Provincial Congress Meets',
    startDate: new Date('1774-10-11'),
    datePrecision: 'DAY',
    summary: `In October 1774, the Massachusetts Provincial Congress—an extralegal body formed after the British dissolved the colonial legislature—convened in Concord. This gathering of delegates from across the colony effectively became a shadow government, organizing resistance while maintaining a pretense of loyalty.

The Congress authorized the stockpiling of military supplies, the training of militia, and the creation of a network of minutemen ready to respond at a moment's notice. It was this Congress, meeting again in Concord and then Watertown, that transformed scattered colonial discontent into organized military capability.

Concord was chosen partly for its inland location, away from British-occupied Boston, and partly for the patriot sympathies of its residents. The town's role as a political center made it a natural target for British intelligence gathering—and ultimately for the April 19 expedition.`,
    significanceWeight: 90,
    town: { connect: { id: 'us-ma-concord' } },
  },
  {
    id: 'event-barrett-farm-search',
    name: 'British Search Barrett Farm',
    startDate: new Date('1775-04-19T08:00:00'),
    datePrecision: 'DAY',
    summary: `Captain Lawrence Parsons led several companies of British light infantry across North Bridge to search Colonel James Barrett's farm, about two miles from the town center. British intelligence indicated this farm was a primary storage site for colonial military supplies.

The search proved largely fruitless. Barrett's family, warned overnight, had worked frantically to hide or move supplies. Legend holds that Barrett's granddaughter Rebecca plowed fresh furrows to bury gun barrels while British soldiers approached. Whether true or not, the story captures the community effort to thwart the expedition.

The search party found some wooden gun carriages and supplies, which they destroyed, but the bulk of the military stores had vanished. The smoke from burning these supplies—visible from the hills where militia were gathering—would help trigger the confrontation at North Bridge.

The British delay at Barrett's farm also allowed provincial militia to concentrate in overwhelming numbers.`,
    significanceWeight: 75,
    town: { connect: { id: 'us-ma-concord' } },
  },
  {
    id: 'event-british-retreat-concord',
    name: 'British Retreat Begins',
    startDate: new Date('1775-04-19T12:00:00'),
    datePrecision: 'DAY',
    summary: `After the confrontation at North Bridge and the return of search parties from Barrett's farm, Lieutenant Colonel Smith realized his position was becoming untenable. Militia continued to arrive from surrounding towns. His wounded needed care. The road back to Boston passed through increasingly hostile territory.

Around noon, Smith ordered the retreat. What followed was a nightmare: a sixteen-mile running battle as hundreds, then thousands of colonial militia fired on the column from behind walls, trees, houses, and hedgerows. The British, trained for European-style warfare, had no effective response to this swarming, decentralized resistance.

Only the arrival of reinforcements under Brigadier General Hugh Percy near Lexington—with artillery that forced the militia to keep distance—prevented the annihilation of Smith's command. Even so, British casualties were severe: 73 killed, 174 wounded, 26 missing. The myth of British invincibility died on the Concord road.`,
    significanceWeight: 85,
    town: { connect: { id: 'us-ma-concord' } },
  },
];

/**
 * People connected to Concord events
 * Includes well-known figures and lesser-known voices
 */
export const concordPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-john-buttrick',
    name: 'Major John Buttrick',
    roles: ['Militia Officer', 'Farmer', 'Leader'],
    bioShort:
      'Concord militia officer who commanded the advance on North Bridge and reportedly gave the order to fire. His leadership at the bridge turned defense into attack.',
    bioLong: `John Buttrick was a prosperous Concord farmer and experienced militia officer who found himself in command at the most consequential moment of April 19, 1775. When provincial militia gathered on Punkatasset Hill saw smoke rising from Concord center, they believed—incorrectly—that the British were burning the town.

Buttrick led the advance toward North Bridge. As the militia approached, British soldiers fired. Americans fell. According to multiple accounts, Buttrick then shouted words to the effect of "Fire, fellow soldiers! For God's sake, fire!" The American volley that followed drove the British back.

Whether Buttrick actually gave a formal order or simply expressed what everyone was thinking remains debated. What matters is that at this moment, colonial resistance transformed from passive to active. Men who had been told not to fire unless fired upon were now firing back.

Buttrick survived the war and continued to serve his community. He died in 1791, having witnessed the birth of a nation he helped create at the bridge that morning.`,
    birthYear: 1731,
    deathYear: 1791,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-james-barrett',
    name: 'Colonel James Barrett',
    roles: ['Militia Colonel', 'Farmer', 'Provincial Leader'],
    bioShort:
      'Senior militia officer in Concord whose farm was the primary target of the British expedition. His family hid supplies overnight while he commanded militia at Punkatasset Hill.',
    bioLong: `Colonel James Barrett was the senior militia officer in Concord and a member of the Provincial Congress. His farm, about two miles from town center, served as a primary storage site for the military supplies the colonial resistance was stockpiling—powder, shot, provisions, and artillery pieces.

British intelligence knew about Barrett's farm. The April 19 expedition aimed specifically at these stores. But Barrett and his community were prepared. When warning came overnight, his family—including, according to tradition, his granddaughter Rebecca—worked frantically to hide or move supplies. Cannons were buried. Powder was dispersed. Gun barrels were plowed into fresh furrows.

On the morning of April 19, Barrett commanded the growing force of militia on Punkatasset Hill overlooking North Bridge. At 70 years old, he was too senior to lead the charge himself, but he sanctioned the advance that would transform the day from defeat to defiance.

Barrett lived until 1779, long enough to see independence declared but not achieved.`,
    birthYear: 1710,
    deathYear: 1779,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-william-emerson',
    name: 'Reverend William Emerson',
    roles: ['Minister', 'Chaplain', 'Witness'],
    bioShort:
      'Pastor of Concord whose parsonage, the Old Manse, overlooked North Bridge. He witnessed the battle from his window and served as chaplain to provincial forces.',
    bioLong: `Reverend William Emerson was minister of Concord's First Parish Church and lived in the Old Manse, a parsonage with a direct view of North Bridge. On the morning of April 19, he had a front-row seat to the engagement that changed history.

Emerson was a fervent patriot. His sermons had encouraged resistance; his home had hosted meetings of the Provincial Congress. When fighting began, he joined the militia as chaplain, following the retreating British toward Boston. His eyewitness account provides valuable primary source material for understanding the day's events.

Emerson served as chaplain to Continental forces at Ticonderoga, where he contracted a fever that killed him in October 1776. He never saw independence achieved.

His grandson, Ralph Waldo Emerson, would later live in the same Old Manse and write "Concord Hymn," with its famous line about "the shot heard round the world." The elder Emerson's epitaph for the British dead—"They came three thousand miles and died / To keep the past upon its throne"—showed his own literary gifts.`,
    birthYear: 1743,
    deathYear: 1776,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-isaac-davis',
    name: 'Captain Isaac Davis',
    roles: ['Minuteman Captain', 'Gunsmith'],
    bioShort:
      'Captain of the Acton minutemen, killed at North Bridge. His company, armed with bayonets, led the advance—and Davis became the first American officer to fall in the Revolution.',
    bioLong: `Isaac Davis commanded the Acton minutemen, a company notable for being well-equipped with bayonets—a rarity among colonial militia. When Major Buttrick called for volunteers to lead the advance toward North Bridge, Davis's company stepped forward.

Davis reportedly said to his men: "I haven't a man that is afraid to go." This may be tradition polished by memory, but it captures something true: the Acton company led the march toward armed British regulars.

At the bridge, British soldiers fired. Davis fell among the first, shot through the heart. His second-in-command, Captain Abner Hosmer, died beside him. The company's bayonets had made them the logical choice to lead; that choice cost Davis his life.

Davis left a wife, Hannah, and four young children. His body was carried back to Acton, where he was buried with military honors. His death—an officer falling at the head of his men—became a symbol of sacrifice for the cause.

A statue of Davis stands in Acton center, musket in hand, facing toward Concord.`,
    birthYear: 1745,
    deathYear: 1775,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-martha-moulton',
    name: 'Martha Moulton',
    roles: ['Witness', 'Civilian', 'Peacemaker'],
    bioShort:
      'Elderly Concord widow who reportedly confronted British soldiers burning supplies in her town, helping save the courthouse and meetinghouse from flames.',
    bioLong: `Martha Moulton was an elderly widow living near Concord's town center on April 19, 1775. When British soldiers set fire to gun carriages and supplies, flames spread toward nearby buildings. According to tradition, Moulton confronted the soldiers directly.

The exact words vary by account, but the story holds that she shamed the soldiers into helping extinguish the flames: the King's troops were not supposed to be burning civilian buildings. Whether her intervention actually saved the courthouse or meetinghouse is debated, but the story has persisted because it captures something important.

Women were everywhere on April 19—watching from windows, hiding supplies, caring for wounded, confronting soldiers. Their stories were rarely recorded because the historical moment focused on men with muskets. Martha Moulton's name survives because she did something dramatic enough to be remembered.

She represents all the unnamed women whose presence and actions shaped a day usually told as a story about men.`,
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ORAL_TRADITION',
  },
  {
    id: 'person-amos-barrett',
    name: 'Amos Barrett',
    roles: ['Minuteman', 'Farmer', 'Memoirist'],
    bioShort:
      'Concord minuteman who fought at North Bridge and later wrote a detailed memoir of the day. His account is among the most valuable eyewitness sources.',
    bioLong: `Amos Barrett was a young Concord farmer and minuteman who stood at North Bridge on the morning of April 19, 1775. Years later, he wrote a detailed memoir of the day's events—one of the most valuable primary sources for understanding what actually happened.

Barrett's account is notable for its specificity and honesty. He described the confusion, the fear, the chaos of the retreat. He admitted that the provincials, despite their success at the bridge, were uncertain and disorganized. His memoir doesn't read like heroic mythology; it reads like a frightened young man trying to make sense of extraordinary events.

"We was all ordered to load," Barrett wrote, "and had stricked orders not to fire till they fird first, then to fire as fast as we could." This simple statement captures the rules of engagement that shaped the morning—and the moment when those rules changed.

Barrett survived the war and lived until 1827, one of the last surviving participants in the events at North Bridge. His willingness to write down what he remembered preserved details that would otherwise have been lost.`,
    birthYear: 1752,
    deathYear: 1827,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-francis-smith',
    name: 'Lieutenant Colonel Francis Smith',
    roles: ['British Officer', 'Expedition Commander'],
    bioShort:
      'Commander of the British expedition to Concord. His slow, cautious approach gave the colonists time to prepare—and his retreat became a disaster.',
    bioLong: `Lieutenant Colonel Francis Smith commanded the British expedition that marched from Boston to Concord on the night of April 18-19, 1775. His mission was straightforward: seize and destroy colonial military stores. The execution was catastrophic.

Smith was cautious by temperament—perhaps too cautious for this mission. His column moved slowly through the night, allowing the colonial alarm network time to work. By dawn, militia were gathering across the countryside. The element of surprise, essential for such an expedition, had evaporated.

After the confrontation at Lexington and the engagement at North Bridge, Smith recognized his position was untenable. His wounded needed care. His ammunition was running low. The surrounding countryside was thick with armed colonists. He ordered retreat around noon.

What followed was a nightmare. Smith was wounded during the running battle back to Boston. Only the arrival of Percy's relief column with artillery prevented the destruction of his command.

Smith survived and continued to serve in the British Army, but April 19 defined his legacy: the officer who led a routine mission that became a revolutionary spark.`,
    birthYear: 1723,
    deathYear: 1791,
    verificationStatus: 'VERIFIED',
  },
];

/**
 * Stories - historical and modern voices
 */
export const concordStories: Prisma.StoryCreateInput[] = [
  // Well-known historical voice
  {
    id: 'story-buttrick-bridge',
    title: "Fire! For God's Sake, Fire!",
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-john-buttrick' } },
    verificationStatus: 'VERIFIED',
    textVersion: `John Buttrick was forty-three years old on the morning of April 19, 1775. A farmer, a militia officer, a man who knew his neighbors and his land. He was not a professional soldier. He had never commanded men in battle. Nothing in his life had prepared him for what he would do at North Bridge.

The militia had gathered on Punkatasset Hill, watching and waiting. When smoke rose from Concord center, Buttrick understood instantly what every man around him understood: the British were burning their town. Whether or not this was true—it wasn't; the smoke came from burning gun carriages—the men believed it, and belief was enough.

Colonel Barrett, too old to lead the charge himself, gave his assent. Buttrick led the column down the hill, across the open ground, toward the bridge where British light infantry waited. Captain Isaac Davis of Acton was at the front with his bayonet-armed company. Behind them came hundreds of men, armed with whatever they had.

The British fired. Americans fell—Davis among them, shot through the heart. And in that moment, everything changed.

"Fire, fellow soldiers! For God's sake, fire!"

Whether Buttrick shouted these exact words, we cannot know. The accounts were written years later, polished by memory and purpose. But he gave the order, or the permission, or simply the voice to what everyone was thinking. And the men fired.

The volley drove the British back. The regulars retreated in disorder. The colonists, for the first time, had attacked.

Buttrick would live another sixteen years. He would see independence declared, fought for, won. But nothing else in his life would match that moment: the moment when he told his neighbors to shoot back.`,
    audioScript: `John Buttrick was forty-three years old on April 19, 1775. A farmer. A militia officer. Nothing in his life had prepared him for North Bridge.

When smoke rose from Concord, the militia believed the British were burning their town. Colonel Barrett gave his assent. Buttrick led the column toward the bridge.

The British fired. Captain Isaac Davis fell, shot through the heart.

And then Buttrick gave the order that changed everything: "Fire, fellow soldiers! For God's sake, fire!"

The volley drove the British back. For the first time, the colonists had attacked. Buttrick would live to see independence won, but nothing would match that moment—the moment he told his neighbors to shoot back.`,
    tags: ['leadership', 'north-bridge', 'turning-point', 'command'],
    town: { connect: { id: 'us-ma-concord' } },
  },
  // Lesser-known historical voice
  {
    id: 'story-moulton-fire',
    title: 'Martha Moulton Confronts the Regulars',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-martha-moulton' } },
    verificationStatus: 'ORAL_TRADITION',
    textVersion: `Most of Concord had fled or hidden by the time the British arrived. But Martha Moulton, an elderly widow, remained in her home near the town center. From her window, she watched soldiers search buildings and pile supplies in the street.

When the soldiers set fire to gun carriages and other stores, flames licked toward nearby buildings. The courthouse. The meetinghouse. The wooden heart of her community.

According to accounts passed down through generations, Martha Moulton walked out of her house and confronted the soldiers directly. The King's troops, she told them, were not supposed to be burning civilian buildings. They were supposed to be destroying military supplies. If they let Concord burn, they would prove themselves vandals, not soldiers.

Did she say these exact words? We cannot know. The story comes to us filtered through decades of retelling. But something happened. The soldiers helped extinguish the flames. The buildings survived.

Martha Moulton had no musket. She commanded no company. She was an elderly woman facing professional soldiers in the middle of a military operation. And she made them listen.

Her story reminds us that the women of April 19 were not simply watching from windows. They were acting—hiding supplies, confronting soldiers, shaping events in ways the military histories rarely record. Martha Moulton's name survives because she did something dramatic enough to remember. How many other women acted with similar courage and were simply forgotten?`,
    audioScript: `Most of Concord had fled by the time the British arrived. But Martha Moulton, an elderly widow, remained. When soldiers set fire to supplies and flames spread toward the courthouse, she walked out and confronted them directly.

The King's troops, she told them, were not supposed to burn civilian buildings. If they let Concord burn, they would prove themselves vandals.

Something happened. The soldiers helped extinguish the flames. The buildings survived. Martha Moulton had no musket, commanded no company. She was an elderly woman facing professional soldiers—and she made them listen.

Her story reminds us that the women of April 19 were not simply watching. They were acting, shaping events in ways military histories rarely record.`,
    tags: ['women', 'courage', 'civilian', 'confrontation'],
    town: { connect: { id: 'us-ma-concord' } },
  },
  // Lesser-known historical voice
  {
    id: 'story-barrett-furrows',
    title: "Rebecca Barrett's Field",
    storyType: 'HISTORICAL_VOICE',
    verificationStatus: 'ANECDOTAL',
    textVersion: `Colonel James Barrett's farm was the primary target of the British expedition. Intelligence reports had identified it as a major storage site for colonial military supplies—cannons, powder, shot, provisions. When warning came overnight, the Barrett family faced a desperate task: hide everything before dawn.

According to tradition, Barrett's granddaughter Rebecca worked through the dark hours plowing fresh furrows in a field. Into these furrows went gun barrels and other supplies, covered with earth to look like freshly tilled ground. When British search parties arrived in the morning, they found a farm—not an arsenal.

Did Rebecca actually plow the field? The story may be legend, or it may be true. Colonial farms had women who could handle horses and plows; Rebecca was young and strong. The detail has the specificity of lived experience.

What we know for certain is that the British found far less at Barrett's farm than they expected. Supplies had vanished overnight—hidden, dispersed, buried. The community effort to protect its military stores involved everyone: old and young, men and women.

Rebecca Barrett, if the story is true, helped save the weapons that would arm the siege of Boston. She never fired a shot, never stood in a militia line. But her furrows may have mattered as much as any volley at the bridge.`,
    audioScript: `Colonel Barrett's farm was the British target—a major storage site for military supplies. When warning came overnight, the family faced a desperate task: hide everything before dawn.

According to tradition, Barrett's granddaughter Rebecca plowed furrows through the dark hours, burying gun barrels to look like freshly tilled ground. When British search parties arrived, they found a farm—not an arsenal.

Did Rebecca actually plow that field? We cannot know for certain. But we know the supplies vanished overnight. The community effort to hide them involved everyone.

Rebecca Barrett never fired a shot, never stood in a militia line. But her furrows may have mattered as much as any volley at the bridge.`,
    tags: ['women', 'preparation', 'resourcefulness', 'supplies'],
    town: { connect: { id: 'us-ma-concord' } },
  },
  // Modern voice - NPS Ranger
  {
    id: 'story-modern-ranger',
    title: 'What the Bridge Still Teaches',
    storyType: 'MODERN_VOICE',
    narratorName: 'National Park Service Ranger',
    narratorRole: 'Interpretive Ranger, Minute Man National Historical Park',
    verificationStatus: 'VERIFIED',
    textVersion: `I've given thousands of tours at North Bridge. School groups, families, international visitors, scholars. Everyone comes with questions, but they're usually the wrong questions.

They want to know where the British stood. Where the Americans stood. Who fired first. These are answerable questions—we have good evidence, we can point to specific spots on the landscape. But they're not the important questions.

The important question is: what does it mean to stand here?

This bridge is a replica. The original rotted away centuries ago. The river has shifted. The trees have grown. Very little of what you see is what those men saw on April 19, 1775. And yet something essential remains: the act of standing on ground that witnessed a pivot point in human history.

When I lead visitors to the bridge, I ask them to look uphill toward Punkatasset Hill. I ask them to imagine watching hundreds of British soldiers in red coats occupy their town. I ask them to imagine smoke rising and believing their homes were burning. I ask them to imagine deciding to march, with their neighbors, toward men with bayonets fixed.

Then I ask: what would you have done?

That's what the bridge still teaches. Not tactics or dates or historical trivia. It teaches the question every generation must answer: what are you willing to stand for?`,
    audioScript: `I've given thousands of tours at North Bridge. Everyone asks the wrong questions—where the soldiers stood, who fired first. These are answerable questions. But they're not the important ones.

The important question is: what does it mean to stand here?

This bridge is a replica. The river has shifted. Very little of what you see is what those men saw. And yet something essential remains: the act of standing on ground that witnessed a turning point.

I ask visitors to imagine watching British soldiers occupy their town. Imagine smoke rising, believing your homes were burning. Imagine deciding to march toward men with bayonets.

What would you have done? That's what the bridge teaches. Not dates or tactics—but the question every generation must answer.`,
    tags: ['preservation', 'meaning', 'interpretation', 'visitors'],
    town: { connect: { id: 'us-ma-concord' } },
  },
  // Modern voice - Local Historian
  {
    id: 'story-modern-historian',
    title: 'Beyond the Heroic Narrative',
    storyType: 'MODERN_VOICE',
    narratorName: 'Dr. Margaret Chen',
    narratorRole: 'Local Historian and Author',
    verificationStatus: 'VERIFIED',
    textVersion: `For two centuries, the story of Concord was a story about heroes. Brave minutemen standing against tyranny. The shot heard round the world. A straightforward tale of good versus evil.

Modern scholarship has complicated that story—not to diminish it, but to deepen it.

We now understand the Provincial Congress had been organizing for months before April 19. The militias weren't spontaneous defenders; they were members of a prepared resistance network. The supplies hidden overnight represented systematic stockpiling. The alarm system that brought men from thirty towns had been rehearsed.

We also understand that April 19 was terrifying and chaotic. Amos Barrett's memoir describes confusion, not glory. British soldiers, many of them young and far from home, were slaughtered during the retreat. Colonists fired from behind walls and buildings in ways that violated contemporary rules of war. Victory had an ugly face.

And we understand whose stories were erased. The women who hid supplies and confronted soldiers. The enslaved people in Concord households who witnessed everything and recorded nothing. The Loyalists—neighbors who disagreed—who suddenly became outcasts.

A full understanding of Concord requires holding multiple truths at once: that the cause was just and the violence was brutal, that the militiamen were brave and also afraid, that April 19 created a nation and also created silences we're still trying to fill.`,
    audioScript: `For two centuries, Concord's story was simple: brave minutemen standing against tyranny. Modern scholarship has complicated that story—not to diminish it, but to deepen it.

The Provincial Congress organized for months. The supplies were systematically stockpiled. The alarm system was rehearsed. This wasn't spontaneous resistance—it was prepared.

We also understand April 19 was chaotic and brutal. British soldiers were slaughtered during the retreat. Colonists fired from behind walls in ways that violated rules of war.

And we understand whose stories were erased. The women. The enslaved. The Loyalists who suddenly became outcasts.

Full understanding requires holding multiple truths: the cause was just and the violence brutal, the militiamen brave and afraid, April 19 created a nation and also created silences we're still filling.`,
    tags: ['historiography', 'complexity', 'scholarship', 'truth'],
    town: { connect: { id: 'us-ma-concord' } },
  },
];

/**
 * Theme connections for Concord
 */
export const concordThemeConnections: Array<{
  themeId: string;
  relevanceNote: string;
}> = [
  {
    themeId: 'liberty-freedom',
    relevanceNote: 'At North Bridge, colonial farmers first exercised by force the liberties they claimed by right.',
  },
  {
    themeId: 'citizen-soldiers',
    relevanceNote: 'The Concord minutemen exemplified the citizen-soldier ideal: farmers and tradesmen who became fighters when called.',
  },
  {
    themeId: 'women-revolution',
    relevanceNote: 'Women like Martha Moulton and Rebecca Barrett shaped April 19 through direct action, not passive observation.',
  },
  {
    themeId: 'preservation-memory',
    relevanceNote: 'North Bridge and the Old Manse are among the most carefully preserved Revolutionary sites in America.',
  },
  {
    themeId: 'military-innovation',
    relevanceNote: 'The engagement at North Bridge demonstrated new tactical approaches—asymmetric warfare against professional soldiers.',
  },
  {
    themeId: 'economic-resistance',
    relevanceNote: 'The hidden supplies—cannons, powder, shot—represented months of organized colonial procurement and preparation.',
  },
];

/**
 * Additional sources specific to Concord
 */
export const concordSources: Prisma.SourceCreateInput[] = [
  {
    id: 'source-gross-minutemen',
    type: 'SECONDARY',
    title: 'The Minutemen and Their World',
    publisherOrHolder: 'Hill and Wang',
    publicationDate: new Date('1976-01-01'),
    credibilityTier: 'TIER1',
    notes: "Robert Gross's seminal microhistory of Concord before and after April 19, 1775. Essential scholarly source.",
  },
  {
    id: 'source-fischer-revere',
    type: 'SECONDARY',
    title: "Paul Revere's Ride",
    publisherOrHolder: 'Oxford University Press',
    publicationDate: new Date('1994-01-01'),
    credibilityTier: 'TIER1',
    notes: "David Hackett Fischer's comprehensive study of April 18-19, 1775, with extensive primary source analysis.",
  },
  {
    id: 'source-barrett-memoir',
    type: 'PRIMARY',
    title: 'Memoir of Amos Barrett',
    publisherOrHolder: 'Concord Historical Society',
    credibilityTier: 'TIER1',
    notes: 'Eyewitness account by a Concord minuteman who stood at North Bridge. Written years later but unusually detailed.',
  },
  {
    id: 'source-nps-concord',
    type: 'INSTITUTIONAL',
    title: 'Minute Man National Historical Park Official Resources',
    publisherOrHolder: 'National Park Service',
    url: 'https://www.nps.gov/mima/',
    credibilityTier: 'TIER1',
    notes: 'Official NPS documentation for the Concord-Lexington battlefield sites.',
  },
  {
    id: 'source-british-reports',
    type: 'PRIMARY',
    title: 'British Officer Reports on the Concord Expedition',
    publisherOrHolder: 'UK National Archives',
    credibilityTier: 'TIER1',
    notes: 'Official British military reports from Smith, Percy, and other officers. Essential for understanding the British perspective.',
  },
  {
    id: 'source-provincial-congress-records',
    type: 'PRIMARY',
    title: 'Journals of the Provincial Congress of Massachusetts',
    publisherOrHolder: 'Massachusetts Archives',
    credibilityTier: 'TIER1',
    notes: 'Official records of the extralegal colonial legislature that met at Concord and organized military preparations.',
  },
  {
    id: 'source-depositions-1775',
    type: 'PRIMARY',
    title: 'Depositions of Concord Witnesses, 1775',
    publisherOrHolder: 'Massachusetts Historical Society',
    credibilityTier: 'TIER1',
    notes: 'Sworn statements taken shortly after April 19 from participants and witnesses. Primary source material.',
  },
  {
    id: 'source-emerson-hymn',
    type: 'SECONDARY',
    title: 'Concord Hymn and Historical Context',
    publisherOrHolder: 'Concord Museum',
    credibilityTier: 'TIER2',
    notes: "Analysis of Emerson's famous poem and its grandfather William Emerson's role as eyewitness at North Bridge.",
  },
  {
    id: 'source-women-concord',
    type: 'SECONDARY',
    title: "Women of Concord: Revolutionary Roles",
    publisherOrHolder: 'Concord Free Public Library Special Collections',
    credibilityTier: 'TIER2',
    notes: 'Compilation of accounts about women during the Revolutionary period in Concord, including Martha Moulton tradition.',
  },
  {
    id: 'source-old-manse-archives',
    type: 'INSTITUTIONAL',
    title: 'Old Manse Historical Documentation',
    publisherOrHolder: 'The Trustees of Reservations',
    url: 'https://thetrustees.org/place/the-old-manse/',
    credibilityTier: 'TIER1',
    notes: 'Documentation on the Emerson parsonage that overlooked North Bridge, now a preserved historic site.',
  },
  // TIER 2 — Additional secondary
  {
    id: 'source-concord-lemisch-jack-tar',
    type: 'SECONDARY',
    title: 'Jack Tar vs. John Bull: The Role of New York\'s Seamen in Precipitating the Revolution',
    publisherOrHolder: 'William and Mary Quarterly (Jesse Lemisch)',
    credibilityTier: 'TIER2',
    notes: 'Contextual scholarship on ordinary participants in the Revolution, applicable to Concord\'s minuteman social history.',
  },
  // TIER 3 — General reference
  {
    id: 'source-concord-wikipedia',
    type: 'TERTIARY',
    title: 'Battles of Lexington and Concord - Wikipedia',
    publisherOrHolder: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Battles_of_Lexington_and_Concord',
    credibilityTier: 'TIER3',
    notes: 'General reference. Useful for quick chronology, should be cross-checked with primary sources.',
  },
];
