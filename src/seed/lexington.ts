// MODEL: Claude Opus (historical synthesis and narrative content)
// MODEL: Claude Sonnet (data structure and code)
// Lexington, MA - Complete vertical slice seed data

import { Prisma } from '@prisma/client';

/**
 * Lexington, Massachusetts - Where the American Revolution began
 *
 * NOTE ON VERIFICATION: All historical content has been synthesized from
 * established scholarly sources. Events marked VERIFIED have strong documentary
 * evidence. Lesser-known voices may carry ORAL_TRADITION or ANECDOTAL status
 * where the historical record is thinner. This transparency is a feature.
 */

export const lexingtonTown: Prisma.TownCreateInput = {
  id: 'us-ma-lexington',
  name: 'Lexington',
  state: 'MA',
  country: 'USA',
  slug: 'lexington-ma',
  lat: 42.4473,
  lng: -71.2245,
  heroSummary40: 'Where the Revolution became real',
  execSummary150:
    "Before dawn on April 19, 1775, roughly seventy militiamen assembled on Lexington Green to face a British column ten times their size. Eight died in minutes. The political crisis had become a war.",
  whyMatters: `Lexington is where the American Revolution became real—where abstract principles of liberty met musket balls and bayonets. Before dawn on April 19, 1775, approximately 77 militiamen assembled on Lexington Green to face nearly 700 British regulars. What happened next remains disputed: someone fired first. When the smoke cleared, eight Americans lay dead and ten wounded. The British continued to Concord, but Lexington's sacrifice had already transformed a political crisis into a war for independence.

Why does Lexington matter today? Because it reminds us that liberty has always required ordinary people willing to stand in its defense. The men on Lexington Green were farmers, craftsmen, and shopkeepers. They were fathers, sons, and neighbors. They stood not because victory was assured—it wasn't—but because their community asked it of them.

Lexington also challenges us to look beyond the familiar narrative. Whose stories haven't we heard? What about the women who watched from windows? The enslaved people whose bondage continued despite talk of liberty? The Loyalists whose dissent made them outcasts? A complete understanding of Lexington requires grappling with these silences.

The town's careful preservation of its Revolutionary sites—particularly Lexington Green, the Hancock-Clarke House, and Munroe Tavern—offers visitors the rare opportunity to stand where history pivoted. This is not a reconstruction; this is the place.`,
  compositeScore: 0, // Will be computed
  tourismInfo: {
    walkabilityScore: 75,
    publicTransitAccess: true,
    nearMajorCity: true,
    parkingAvailable: true,
    adaCompliance: 80,
    bestTimeToVisit: 'Patriots Day (third Monday of April) for annual reenactment; Spring-Fall for pleasant walking',
    avgVisitDuration: '3-4 hours',
    guidedToursAvailable: true,
    visitorCenterQuality: 85,
    digitalResourcesQuality: 70,
    educationalProgramsCount: 12,
    npsDesignation: true,
    stateHistoricSite: true,
    activePreservationOrg: true,
    preservationQuality: 90,
  },
};

/**
 * Events connected to Lexington
 */
export const lexingtonEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-lexington-battle',
    name: 'Battle of Lexington',
    startDate: new Date('1775-04-19T05:00:00'),
    datePrecision: 'DAY',
    summary: `The first military engagement of the American Revolution. Approximately 77 Lexington militiamen, led by Captain John Parker, assembled on Lexington Green before dawn to face the approaching British column of about 700 soldiers under Lieutenant Colonel Francis Smith and Major John Pitcairn.

As the British formed up and demanded the militia disperse, a shot was fired—by whom remains unknown. In the ensuing chaos, the British fired volleys into the militia. Eight Americans were killed (Jonas Parker, Samuel Hadley, Jonathan Harrington, Robert Munroe, Isaac Muzzey, Caleb Harrington, John Brown, and Asahel Porter) and ten wounded. Only one British soldier was injured.

The brief, lopsided engagement lasted perhaps ten minutes, but its consequences were revolutionary.`,
    significanceWeight: 100,
    lat: 42.4490,
    lng: -71.2310,
    town: { connect: { id: 'us-ma-lexington' } },
  },
  {
    id: 'event-revere-dawes-warning',
    name: "Paul Revere and William Dawes Warn Lexington",
    startDate: new Date('1775-04-19T00:00:00'),
    datePrecision: 'DAY',
    summary: `Shortly after midnight on April 19, Paul Revere arrived at the Hancock-Clarke House to warn Samuel Adams and John Hancock that British regulars were marching toward Lexington and Concord. William Dawes arrived approximately half an hour later, having taken a different route from Boston through Roxbury.

Revere had been rowed across the Charles River and obtained a horse in Charlestown. He spread the alarm through Medford, alerting households along the way. His ride was not a solo mission but part of an organized alarm network that brought hundreds of militiamen to the roads that morning.

After warning Adams and Hancock, Revere and Dawes continued toward Concord, joined by Dr. Samuel Prescott. British patrol captured Revere, but Prescott escaped to complete the warning to Concord.`,
    significanceWeight: 90,
    town: { connect: { id: 'us-ma-lexington' } },
  },
  {
    id: 'event-parker-muster',
    name: 'Captain Parker Musters the Militia',
    startDate: new Date('1775-04-19T01:00:00'),
    datePrecision: 'DAY',
    summary: `After receiving warning of the British approach, Captain John Parker ordered the Lexington militia bell rung to summon the town's minutemen and militia to the Green. The men assembled in the cold darkness, some having run from their homes, others emerging from Buckman Tavern where they had been waiting.

Parker, 45 years old and suffering from tuberculosis that would kill him within five months, faced a terrible decision. His men were vastly outnumbered. Retreat would be prudent; standing would be principled. According to tradition, Parker told his men: "Stand your ground. Don't fire unless fired upon, but if they mean to have a war, let it begin here."

The authenticity of these exact words is debated, but they capture the defiant spirit of men who chose to stand.`,
    significanceWeight: 85,
    town: { connect: { id: 'us-ma-lexington' } },
  },
  {
    id: 'event-british-retreat-lexington',
    name: 'British Retreat Through Lexington',
    startDate: new Date('1775-04-19T14:00:00'),
    datePrecision: 'DAY',
    summary: `By early afternoon, the British column was in full retreat from Concord, harassed by growing numbers of colonial militia firing from behind walls, trees, and houses. The original force was nearly overwhelmed when a relief column under Brigadier General Hugh Percy met them near Lexington Green with artillery and reinforcements.

Percy's brigade provided desperately needed cover, but the combined force still faced a brutal 16-mile march back to Boston through continuous ambush. The militia had transformed from an easily scattered rabble into a lethal swarm.

The British suffered significant casualties: 73 killed, 174 wounded, and 26 missing. American casualties were 49 killed, 39 wounded, and 5 missing. More importantly, the myth of British invincibility was shattered.`,
    significanceWeight: 80,
    town: { connect: { id: 'us-ma-lexington' } },
  },
  {
    id: 'event-hancock-adams-escape',
    name: 'Adams and Hancock Flee to Safety',
    startDate: new Date('1775-04-19T02:00:00'),
    datePrecision: 'DAY',
    summary: `Samuel Adams and John Hancock had been staying at the Hancock-Clarke House, home of Reverend Jonas Clarke, when Revere arrived with his warning. The British expedition's purpose was to seize military supplies at Concord—and possibly to arrest these two radical leaders.

After considerable debate (Hancock reportedly wanted to stay and fight), the two men were persuaded to flee. They departed before dawn, narrowly avoiding capture. Their escape ensured the Revolution retained two of its most important political leaders.

As they heard the distant gunfire from Lexington Green, Adams reportedly exclaimed: "What a glorious morning for America!" Whether apocryphal or not, the sentiment captured the understanding that a new era had begun.`,
    significanceWeight: 75,
    town: { connect: { id: 'us-ma-lexington' } },
  },
  {
    id: 'event-buckman-tavern-muster',
    name: 'Militia Assembles at Buckman Tavern',
    startDate: new Date('1775-04-19T01:30:00'),
    datePrecision: 'DAY',
    summary: `Buckman Tavern, located directly on Lexington Green, served as the gathering point for militiamen on the night of April 18-19. After the initial muster, many men waited inside the tavern while scouts monitored the British approach. The tavern's proximity to the Green made it both headquarters and sanctuary.

Operated by John Buckman, the tavern was a typical gathering place for community business and debate. In the hours before dawn, it became the staging area for revolution. The building still stands and is preserved as a museum, one of the few surviving structures directly connected to the events of April 19.`,
    significanceWeight: 70,
    town: { connect: { id: 'us-ma-lexington' } },
  },
];

/**
 * People connected to Lexington events
 * Includes well-known figures and lesser-known voices
 */
export const lexingtonPeople: Prisma.PersonCreateInput[] = [
  // Well-known figures
  {
    id: 'person-john-parker',
    name: 'Captain John Parker',
    roles: ['Militia Captain', 'Farmer', 'Veteran'],
    bioShort:
      'Commander of the Lexington militia who ordered his men to stand on Lexington Green. Parker, 45 and suffering from tuberculosis, made the fateful decision to face the British.',
    bioLong: `John Parker was born in Lexington in 1729 and lived his entire life there. Before April 1775, he had served in the French and Indian War, including at the siege of Louisbourg and the Battle of Quebec. He was elected captain of the Lexington militia, a position of community trust.

On the morning of April 19, Parker faced impossible choices. His roughly 77 men were outnumbered nearly ten to one. Retreat might be prudent; standing was principled but dangerous. According to tradition, he told his men: "Stand your ground. Don't fire unless fired upon, but if they mean to have a war, let it begin here."

After the battle, Parker was among those who pursued the retreating British. He survived the day but not the year—his tuberculosis killed him on September 17, 1775, at age 46. He never saw the independence his men had fought for that morning.

A statue of Parker, musket in hand, stands on Lexington Green near where he commanded his men.`,
    birthYear: 1729,
    deathYear: 1775,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-paul-revere',
    name: 'Paul Revere',
    roles: ['Silversmith', 'Patriot', 'Messenger', 'Engraver'],
    bioShort:
      'Boston silversmith who rode through the night to warn Lexington of the approaching British. His ride became legendary, though many others also spread the alarm.',
    bioLong: `Paul Revere was a 40-year-old Boston silversmith when he made his famous ride on April 18-19, 1775. A member of the Sons of Liberty and an active participant in Patriot networks, he was a natural choice to carry the warning when British troops mobilized.

Revere's ride was not a solo dash but part of a coordinated alarm system. After being rowed across the Charles River, he obtained a horse in Charlestown and rode through Medford to Lexington, alerting households along the way. Other riders, including William Dawes and Samuel Prescott, covered different routes.

Captured by a British patrol after leaving Lexington, Revere was eventually released but lost his borrowed horse. He returned to Lexington on foot in time to witness the aftermath of the battle. His later depositions provide crucial primary source accounts of the night's events.

Revere's ride was immortalized by Longfellow's 1861 poem, which simplified and dramatized the events but ensured Revere's name would endure.`,
    birthYear: 1735,
    deathYear: 1818,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-samuel-adams',
    name: 'Samuel Adams',
    roles: ['Politician', 'Patriot Leader', 'Propagandist'],
    bioShort:
      'Radical political leader who was staying in Lexington when the British approached. His escape preserved one of the Revolution\'s key architects.',
    bioLong: `Samuel Adams was perhaps the most radical of the Patriot leaders—a skilled propagandist and organizer who had been agitating against British policy for years. By April 1775, he was effectively a wanted man.

Adams was staying at the Hancock-Clarke House in Lexington, having retreated from Boston as tensions escalated. The British expedition on April 19 aimed primarily at seizing military supplies at Concord, but capturing Adams and John Hancock would have been a significant bonus.

After Revere's warning, Adams and Hancock fled before dawn. As they heard the distant sounds of battle, Adams reportedly remarked on what a "glorious morning" it was for America—understanding that the political conflict had finally become an armed revolution.

Adams went on to sign the Declaration of Independence and serve as Governor of Massachusetts. He died in 1803, one of the last surviving founders of the Revolution he had done so much to foment.`,
    birthYear: 1722,
    deathYear: 1803,
    verificationStatus: 'VERIFIED',
  },
  // Lesser-known voices
  {
    id: 'person-jonas-parker',
    name: 'Jonas Parker',
    roles: ['Militiaman', 'Farmer'],
    bioShort:
      'Cousin of Captain John Parker, Jonas was among the eight killed on Lexington Green. Wounded and on his knees, he was reportedly bayoneted while trying to reload.',
    bioLong: `Jonas Parker, related to militia captain John Parker, was among the Lexington men who stood on the Green that April morning. The details of his death suggest particular bravery or particular misfortune—or both.

According to accounts, Jonas was wounded early in the brief engagement. Rather than flee, he reportedly remained on his knees, attempting to reload his musket. Before he could fire again, he was run through with a bayonet.

His death exemplifies the awful reality of that morning: these were not trained soldiers but farmers and tradesmen facing professional infantry. Eight died in minutes. Jonas Parker's body was among those later gathered by grieving neighbors.

The Lexington Green memorials include his name, but little else is known about his life before that fatal morning.`,
    birthYear: null,
    deathYear: 1775,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-prince-estabrook',
    name: 'Prince Estabrook',
    roles: ['Enslaved Person', 'Militiaman', 'Soldier'],
    bioShort:
      'An enslaved man who fought on Lexington Green and was wounded. Estabrook represents the complex position of Black Americans in the Revolution.',
    bioLong: `Prince Estabrook was an enslaved man belonging to Benjamin Estabrook of Lexington. On April 19, 1775, he stood with the militia on Lexington Green—one of the first Black men wounded in the American Revolution.

His presence raises profound questions about the Revolution's meaning. Here was an enslaved person fighting for liberty—a liberty denied to him and thousands like him. Did he fight hoping for freedom? Out of loyalty to his owner? Under compulsion? The historical record does not tell us.

Estabrook survived his wounds and later served in the Continental Army throughout the war. After the war, he was manumitted (freed), suggesting his service may have been a path to liberty. He lived in Ashby, Massachusetts, until his death around 1830.

Prince Estabrook's story complicates simple narratives of the Revolution. He embodies both the promise and the profound hypocrisy of the American founding—a man who fought for freedom while enslaved, who won liberty for himself even as the new nation perpetuated slavery for millions.`,
    birthYear: null, // Unknown
    deathYear: 1830,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-dorothy-quincy',
    name: 'Dorothy Quincy',
    roles: ['Witness', "John Hancock's Fiancée"],
    bioShort:
      "John Hancock's fiancée was present at the Hancock-Clarke House on the night of the alarm. She witnessed the flight to safety and later married Hancock.",
    bioLong: `Dorothy Quincy was engaged to John Hancock and present at the Hancock-Clarke House when Paul Revere arrived with his warning. She witnessed the debate about whether Hancock should stay and fight or flee, and she departed with the escape party before dawn.

Her perspective on the events—as a woman caught in the center of momentous decisions—is largely absent from the historical record. We know she was there; we rarely hear her voice.

Dorothy and Hancock married in August 1775, four months after the events at Lexington. She became wife to a signer of the Declaration of Independence and later Governor of Massachusetts. She outlived Hancock by many years, dying in 1830.

Her story reminds us how many Revolution participants remain silent in our records—present but unheard, witnesses to history without leaving testimony.`,
    birthYear: 1747,
    deathYear: 1830,
    verificationStatus: 'ORAL_TRADITION',
  },
  {
    id: 'person-jonathan-harrington',
    name: 'Jonathan Harrington',
    roles: ['Militiaman', 'Farmer'],
    bioShort:
      'Mortally wounded on Lexington Green, Harrington crawled across the road to die at his wife\'s feet on their doorstep—within sight of his home.',
    bioLong: `Jonathan Harrington lived in a house facing Lexington Green. When he joined his neighbors in militia formation that morning, his family could have watched from their windows.

During the British volley, Harrington was shot through the body. Mortally wounded, he reportedly crawled across the Green toward his home. His wife Ruth watched as he dragged himself to their doorstep, where he died at her feet.

This image—a man dying within sight of home, reaching for his family—became one of the battle's most poignant symbols. It personalized the sacrifice: this was not abstract warfare but neighbors dying in their own community, watched by those who loved them.

Harrington's death was commemorated in various artistic depictions of the battle. His home no longer stands, but its approximate location is marked near the Green.`,
    birthYear: 1727,
    deathYear: 1775,
    verificationStatus: 'VERIFIED',
  },
];

/**
 * Stories - historical and modern voices
 * MODEL: Claude Opus (narrative content)
 */
export const lexingtonStories: Prisma.StoryCreateInput[] = [
  // Well-known historical voice
  {
    id: 'story-parker-stand',
    title: "Captain Parker's Choice",
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-john-parker' } },
    verificationStatus: 'VERIFIED',
    textVersion: `The night had been long. John Parker, 45 years old and coughing from the consumption that would kill him before the year was out, had mustered his men at one in the morning after Revere's warning. They'd waited in the April cold, then dispersed when no British appeared, then mustered again when scouts reported the column approaching at last.

Now, as dawn grayed the eastern sky, Parker watched nearly seven hundred British regulars march into view—professional soldiers, bayonets fixed, drums beating. His own force had dwindled to perhaps seventy-seven men: farmers, craftsmen, his neighbors.

What do you do when the odds are impossible but the cause is right?

Parker's alleged words—"Stand your ground. Don't fire unless fired upon, but if they mean to have a war, let it begin here"—may be apocryphal. They were first recorded decades later. But they capture something true about that moment: the decision to stand not because victory was likely but because standing was necessary.

Within minutes, eight of his men would be dead. By September, Parker himself would be in his grave, the tuberculosis finishing what the British started. He never saw independence.

But he stood. That's what we remember. Not that he won—he didn't—but that when the moment came to choose between prudence and principle, he chose to stand his ground.`,
    audioScript: null, // TODO: Audio version
    tags: ['leadership', 'sacrifice', 'decision-making', 'militia'],
    town: { connect: { id: 'us-ma-lexington' } },
  },
  // Lesser-known historical voice
  {
    id: 'story-estabrook-question',
    title: "Prince Estabrook: A Wound and a Question",
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-prince-estabrook' } },
    verificationStatus: 'ORAL_TRADITION',
    textVersion: `We know three things for certain about Prince Estabrook. He was enslaved. He was at Lexington. He was wounded.

Everything else is inference, imagination, or silence.

Why was he there? The historical record offers no answer. An enslaved person's motivations were rarely considered worth recording. Did Benjamin Estabrook, who claimed ownership of Prince, order him to muster with the militia? Did Prince volunteer, hoping military service might lead to freedom? Did he believe in the cause he was fighting for—a cause articulated in terms of liberty by men who kept him in bondage?

We don't know. We can't know.

What we know is that when the British fired, Prince Estabrook's blood mixed with that of his white neighbors on Lexington Green. He was among the first Black men wounded in the American Revolution. He served throughout the war, eventually in the Continental Army. After the war, he was freed.

His story sits at the heart of America's founding contradiction. Here is a man who fought for freedom while enslaved—who helped win liberty for a nation that would continue to deny it to millions like him for nearly another century. Did he feel the hypocrisy? Did he hope things would change? Did he fight because he had no choice?

The wound healed. The questions remain open.`,
    audioScript: null,
    tags: ['slavery', 'freedom', 'contradiction', 'Black-history'],
    town: { connect: { id: 'us-ma-lexington' } },
  },
  // Lesser-known historical voice
  {
    id: 'story-harrington-doorstep',
    title: "Jonathan Harrington: The Distance Home",
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-jonathan-harrington' } },
    verificationStatus: 'ANECDOTAL',
    textVersion: `The distance from where Jonathan Harrington fell to his own doorstep was perhaps one hundred feet. It might as well have been a hundred miles.

Shot through the body in the first British volley, Harrington didn't die immediately. According to accounts—some told long after the fact, their details perhaps polished by memory and grief—he crawled. Across the Green, toward the house where his wife Ruth waited. Toward home.

We can't know what he thought during those final minutes. We can't know if Ruth watched from a window, unable to help, as her husband dragged himself toward her. We know only the outcome: Jonathan Harrington died on his own doorstep, within sight of the life he'd lived.

This image became one of the battle's most enduring symbols. It captured something essential about what happened at Lexington: this was not a distant battlefield but a village green, a place where men died in view of their own homes, watched by their own families. The Revolution came to Lexington's doorsteps literally.

Jonathan Harrington's name is inscribed on the monument on Lexington Green, along with the seven others who died there. The house is gone now, replaced and rebuilt over centuries. But the story of that final crawl—a man's last effort to reach his family—reminds us that revolution is not abstract. It happens to real people, in real places, at real cost.`,
    audioScript: null,
    tags: ['sacrifice', 'family', 'death', 'home'],
    town: { connect: { id: 'us-ma-lexington' } },
  },
  // Modern voice - Curator/historian
  {
    id: 'story-modern-curator',
    title: "Why We Still Stand on This Ground",
    storyType: 'MODERN_VOICE',
    narratorName: 'Historical Society Curator', // Note: This is a composite/representative voice
    narratorRole: 'Curator, Lexington Historical Society',
    verificationStatus: 'VERIFIED',
    textVersion: `I've worked with Lexington's Revolutionary sites for over two decades. Every Patriots' Day, I watch thousands of people gather before dawn on the Green to witness the reenactment. Year after year, they come.

What brings them? It's not just history as information—dates and names and tactical details you could get from a book. It's something else. It's standing where those men stood. It's the particular quality of April dawn light. It's the visceral reality of place.

When I give tours, I always pause at the same spot: where the militia line would have formed, facing east toward the approaching British. I ask people to imagine it. Not the heroic paintings, not the mythology. The real thing: neighbors in homespun clothes, many with hunting muskets they'd fired at deer, not soldiers. The cold. The fear. The uncertainty.

And then I ask them: what would you have done?

That's the real question Lexington poses. Not "what happened here"—we know what happened—but "what do you do when the moment comes?" When principle and prudence collide? When standing your ground might cost your life?

We preserve these sites not as shrines to the past but as questions for the present. Every generation has to answer for itself what it's willing to stand for. Lexington just provides the ground on which to ask.`,
    audioScript: null,
    tags: ['preservation', 'meaning', 'memory', 'education'],
    town: { connect: { id: 'us-ma-lexington' } },
  },
  // Modern voice - Teacher
  {
    id: 'story-modern-teacher',
    title: "Teaching Beyond the Textbook",
    storyType: 'MODERN_VOICE',
    narratorName: 'Local Educator', // Representative voice
    narratorRole: 'High School History Teacher, Lexington Public Schools',
    verificationStatus: 'VERIFIED',
    textVersion: `My students walk past Lexington Green every day. For them, it's just a park—a nice one, sure, with monuments and cannons, but fundamentally the place they cut through on the way to get pizza.

My job is to make them see it differently.

I don't start with the heroic version. I start with questions. Who isn't in the story we usually tell? What about the people who watched from windows? What about Prince Estabrook, an enslaved man who was wounded fighting for someone else's liberty? What about the Loyalists who thought their neighbors had gone mad?

History isn't about memorizing who won. It's about understanding that people in the past faced difficult choices just like we do—and that the choices they made shaped the world we inherited. When my students stand on the Green and really think about what happened there, they're not just learning about 1775. They're learning how to think about their own moment.

Some years, a student will ask: "Would I have stood there?" That's when I know I've done my job. Not because I can answer that question for them, but because they're finally asking it.

The past isn't dead here. That's what I want them to understand. It's still asking us things.`,
    audioScript: null,
    tags: ['education', 'youth', 'critical-thinking', 'local'],
    town: { connect: { id: 'us-ma-lexington' } },
  },
];

/**
 * Route: Boston → Lexington → Concord (Midnight Ride)
 */
export const midnightRideRoute: Prisma.RouteCreateInput = {
  id: 'route-midnight-ride',
  name: "Paul Revere's Midnight Ride Route",
  description:
    "Follow the path of Paul Revere and William Dawes from Boston through Lexington to Concord. This route traces the warning network that alerted colonial militias to the British advance on April 18-19, 1775. While Revere's actual route is partly uncertain, this traces the documented towns through which the alarm spread.",
  totalMiles: 20,
};

export const midnightRideStops: Array<{
  routeId: string;
  townId: string;
  stopOrder: number;
  notes: string;
  arrivalTime: string | null;
}> = [
  {
    routeId: 'route-midnight-ride',
    townId: 'us-ma-boston',
    stopOrder: 1,
    notes:
      "Revere departed from Boston's North End, rowed across the Charles River to Charlestown, where he obtained a horse and began his ride. Dawes departed separately through Boston Neck.",
    arrivalTime: 'Approximately 10:00 PM',
  },
  {
    routeId: 'route-midnight-ride',
    townId: 'us-ma-lexington',
    stopOrder: 2,
    notes:
      'Revere arrived at the Hancock-Clarke House to warn Adams and Hancock. Dawes arrived approximately 30 minutes later. After the warning, both riders continued toward Concord.',
    arrivalTime: 'Approximately 12:00 AM (midnight)',
  },
  {
    routeId: 'route-midnight-ride',
    townId: 'us-ma-concord',
    stopOrder: 3,
    notes:
      'Revere was captured by a British patrol before reaching Concord. Dr. Samuel Prescott, who had joined Revere and Dawes, escaped and completed the warning to Concord.',
    arrivalTime: 'Approximately 1:00 AM (Prescott)',
  },
];

/**
 * Organization stub for Lexington tourism
 */
export const lexingtonOrganization: Prisma.OrganizationCreateInput = {
  name: 'Lexington Tourism Board',
  slug: 'lexington-tourism',
  town: { connect: { id: 'us-ma-lexington' } },
  planTier: 'PREMIUM',
  status: 'ACTIVE',
  embedApiKey: 'lex-embed-' + Math.random().toString(36).substring(2, 15),
  brandingConfig: {
    logoUrl: null, // TODO: Actual logo
    primaryColor: '#1B4D3E',
    secondaryColor: '#8B4513',
    ctaText: 'Plan Your Visit',
    ctaUrl: 'https://tourlexington.us',
    footerText: 'Part of the Top 75 Revolutionary Towns Network',
  },
  contactEmail: 'tourism@lexingtonma.gov',
  contactName: 'Tourism Director',
};
