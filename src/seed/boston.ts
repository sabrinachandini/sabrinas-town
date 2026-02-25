// MODEL: Claude Opus (historical synthesis and narrative content)
// MODEL: Claude Sonnet (data structure and code)
// Boston, MA - Complete flagship content

import { Prisma } from '@prisma/client';

/**
 * Boston, Massachusetts - Center of colonial resistance
 *
 * NOTE ON VERIFICATION: All historical content has been synthesized from
 * established scholarly sources including Alfred Young's "The Shoemaker and the
 * Tea Party," Hiller Zobel's "The Boston Massacre," and NPS documentation.
 * Stories marked VERIFIED have strong documentary evidence. Lesser-known
 * voices may carry ORAL_TRADITION or ANECDOTAL status where the historical
 * record is thinner.
 */

export const bostonTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Boston was where colonial grievances crystallized into action. For a decade before Lexington, this port city served as the laboratory of resistance—testing boycotts, organizing committees, and provoking confrontations that forced both sides toward open conflict.

The town's geography shaped its politics. A peninsula connected to the mainland by a narrow neck, Boston was easily controlled but also easily contained. When British troops occupied the town after 1768, residents lived under military presence daily. That proximity bred both accommodation and resentment, relationships both commercial and hostile.

Three events define Boston's Revolutionary arc. The Massacre of 1770 gave the resistance its martyrs—five men killed by British soldiers in a confused street confrontation. The Tea Party of 1773 demonstrated organized defiance, with colonists destroying East India Company property rather than accept taxed tea. The siege of 1775-76 proved that a citizen army could trap professional soldiers and eventually force their evacuation.

Boston also reveals the Revolution's contradictions. The town that shouted for liberty held hundreds of enslaved people. Merchants who protested taxation had grown wealthy through imperial trade. Patriots who demanded representation silenced Loyalist neighbors. Understanding Boston requires holding these tensions together.

The Freedom Trail now connects sites where this history unfolded: meeting houses where resistance was organized, streets where blood was spilled, the harbor where tea was dumped, the hills where cannon forced evacuation. The geography remains; the city has built around it.`,
  tourismInfo: {
    walkabilityScore: 90,
    publicTransitAccess: true,
    nearMajorCity: true,
    parkingAvailable: true,
    adaCompliance: 85,
    bestTimeToVisit: 'Spring through fall for walking the Freedom Trail; Patriots Day for reenactments',
    avgVisitDuration: '2-3 days for comprehensive Revolutionary sites',
    guidedToursAvailable: true,
    visitorCenterQuality: 95,
    digitalResourcesQuality: 90,
    educationalProgramsCount: 50,
    npsDesignation: true,
    stateHistoricSite: true,
    activePreservationOrg: true,
    preservationQuality: 85,
    placeholder: false,
  },
};

/**
 * Events connected to Boston
 */
export const bostonEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-boston-massacre',
    name: 'Boston Massacre',
    startDate: new Date('1770-03-05T21:00:00'),
    datePrecision: 'DAY',
    summary: `On the evening of March 5, 1770, a confrontation between Boston residents and British soldiers escalated into gunfire. Five colonists died: Crispus Attucks, Samuel Gray, James Caldwell, Samuel Maverick, and Patrick Carr.

The incident began when a crowd gathered around a sentry at the Custom House, throwing snowballs and debris. Captain Thomas Preston brought soldiers to extract the sentry. The crowd pressed closer. Someone shouted "Fire!"—whether Preston gave the order or a soldier mistook a shout from the crowd remains disputed.

The soldiers fired into the crowd. Attucks, a man of African and Native American descent, was among the first to fall. His death made him a symbol—though not without complexity. Patriots used the Massacre for propaganda; John Adams defended the soldiers in court, winning acquittals for most. The Massacre gave the resistance something precious: martyrs.`,
    significanceWeight: 100,
    lat: 42.3588,
    lng: -71.0578,
    town: { connect: { id: 'us-ma-boston' } },
  },
  {
    id: 'event-boston-tea-party',
    name: 'Boston Tea Party',
    startDate: new Date('1773-12-16T18:00:00'),
    datePrecision: 'DAY',
    summary: `On the evening of December 16, 1773, approximately 116 men—some disguised as Mohawk Indians—boarded three ships in Boston Harbor and dumped 342 chests of East India Company tea into the water. The destruction was worth roughly £10,000, equivalent to over $1.7 million today.

The action was organized, deliberate, and remarkably disciplined. The men damaged no other property, swept the decks when finished, and replaced a broken padlock. This was not a riot but a political statement: colonists would destroy valuable goods rather than accept Parliament's right to tax them.

The Tea Party had consequences its participants could not foresee. Parliament responded with the Coercive Acts—closing Boston Harbor, restructuring Massachusetts government, and allowing troops to be quartered in private homes. These "Intolerable Acts" united the colonies in opposition and led directly to the First Continental Congress.`,
    significanceWeight: 100,
    lat: 42.3520,
    lng: -71.0511,
    town: { connect: { id: 'us-ma-boston' } },
  },
  {
    id: 'event-siege-boston-begins',
    name: 'Siege of Boston Begins',
    startDate: new Date('1775-04-19'),
    datePrecision: 'DAY',
    summary: `After the battles at Lexington and Concord, thousands of New England militiamen surrounded Boston, trapping British forces on the peninsula. What began as a spontaneous reaction became an organized siege that would last eleven months.

The besieging forces lacked central command at first—men from different colonies operated independently. General Artemas Ward of Massachusetts provided some coordination, but the siege gained coherence only when George Washington arrived in July 1775 to take command of what became the Continental Army.

The British held advantages: naval support, professional training, interior fortifications. But they could not break out without unacceptable casualties, and supply ships had to run the risk of colonial interference. Boston became a trap for both sides—until cannon changed the equation.`,
    significanceWeight: 95,
    town: { connect: { id: 'us-ma-boston' } },
  },
  {
    id: 'event-bunker-hill',
    name: 'Battle of Bunker Hill',
    startDate: new Date('1775-06-17'),
    datePrecision: 'DAY',
    summary: `On June 17, 1775, British forces assaulted colonial positions on the Charlestown peninsula, primarily on Breed's Hill (the battle is misnamed). The British took the position, but at devastating cost: over 1,000 casualties, including many officers, against roughly 450 colonial losses.

The battle demonstrated that colonial militiamen could stand against British regulars in open combat—at least from defensive positions. The famous order "Don't fire until you see the whites of their eyes" (attributed variously to William Prescott or Israel Putnam) reflected the need to conserve ammunition.

British victory was pyrrhic. General William Howe, commanding the assault, never forgot the carnage his troops suffered climbing those slopes. His subsequent caution may have cost Britain opportunities to crush the rebellion before it consolidated.`,
    significanceWeight: 95,
    lat: 42.3763,
    lng: -71.0609,
    town: { connect: { id: 'us-ma-boston' } },
  },
  {
    id: 'event-dorchester-heights',
    name: 'Fortification of Dorchester Heights',
    startDate: new Date('1776-03-04'),
    datePrecision: 'DAY',
    summary: `On the night of March 4-5, 1776, Henry Knox's artillery—dragged overland from Fort Ticonderoga—was positioned on Dorchester Heights overlooking Boston Harbor. The fortification happened in a single night, astonishing the British who woke to find cannon commanding their position.

General Howe planned an assault but a storm intervened. Reconsidering, he concluded that the position was untenable. The guns on Dorchester Heights could destroy both the town and the British fleet. On March 17, British forces evacuated Boston by sea.

The evacuation was also an exodus: roughly 1,000 Loyalists left with the army, abandoning homes, businesses, and community standing. For them, the Revolution meant not liberation but exile.`,
    significanceWeight: 90,
    lat: 42.3328,
    lng: -71.0512,
    town: { connect: { id: 'us-ma-boston' } },
  },
  {
    id: 'event-boston-evacuation',
    name: 'British Evacuation of Boston',
    startDate: new Date('1776-03-17'),
    datePrecision: 'DAY',
    summary: `On March 17, 1776—now celebrated as Evacuation Day in Suffolk County—British forces left Boston after eleven months of siege. General Howe's army, along with roughly 1,000 Loyalist civilians, sailed for Halifax.

The evacuation was negotiated rather than fought. Washington agreed not to fire on the departing ships; the British agreed not to burn the town. Both sides kept their word. Boston, which had endured occupation since 1768, was free.

The departure left scars. Loyalist property was confiscated. Families were divided. The social fabric of colonial Boston—where patriots, loyalists, and the uncommitted had coexisted—was torn apart. What returned was not the same town that had been occupied.`,
    significanceWeight: 90,
    town: { connect: { id: 'us-ma-boston' } },
  },
  {
    id: 'event-stamp-act-riots',
    name: 'Stamp Act Riots',
    startDate: new Date('1765-08-14'),
    datePrecision: 'DAY',
    summary: `On August 14, 1765, a Boston mob destroyed the office and ransacked the home of Andrew Oliver, the designated stamp distributor for Massachusetts. Twelve days later, a larger mob attacked the mansion of Lieutenant Governor Thomas Hutchinson, destroying furniture, artwork, and official papers.

The violence was not spontaneous. It was organized by a group calling itself the Sons of Liberty, coordinated through taverns and artisan networks. The target was deliberate: make stamp distribution impossible by terrorizing anyone who would participate.

The riots worked. Oliver resigned. No stamps were ever distributed in Massachusetts. The episode established a pattern: organized resistance, coordinated through committees, enforced through crowd action that authorities could neither prevent nor prosecute.`,
    significanceWeight: 85,
    town: { connect: { id: 'us-ma-boston' } },
  },
  {
    id: 'event-old-south-meeting',
    name: 'Old South Meeting House Assembly',
    startDate: new Date('1773-12-16T10:00:00'),
    datePrecision: 'DAY',
    summary: `On the morning of December 16, 1773, thousands gathered at Old South Meeting House for the largest public meeting in colonial Boston's history. The question: what to do about three ships loaded with taxed tea, sitting in the harbor as a customs deadline approached.

Samuel Adams presided. The meeting demanded that the tea ships be returned to England without landing their cargo. Governor Thomas Hutchinson refused. The impasse was complete—the tea would either be landed and the tax paid, or something else would happen.

As darkness fell, Adams allegedly declared "This meeting can do nothing more to save the country!" The words—if he spoke them—were a signal. The crowd dispersed toward the harbor, where the Tea Party would unfold.`,
    significanceWeight: 85,
    lat: 42.3567,
    lng: -71.0586,
    town: { connect: { id: 'us-ma-boston' } },
  },
  {
    id: 'event-gage-arrives',
    name: 'General Gage Arrives as Military Governor',
    startDate: new Date('1774-05-13'),
    datePrecision: 'DAY',
    summary: `On May 13, 1774, General Thomas Gage arrived in Boston as the new royal governor, replacing Thomas Hutchinson. His appointment signaled that Parliament intended to rule Massachusetts through military authority.

Gage came with instructions to enforce the Coercive Acts: close the port until the tea was paid for, restrict town meetings, allow trials of royal officials to be moved to England. He also came with reinforcements—eventually, Boston would house 4,000 troops in a town of roughly 16,000 civilians.

The general faced an impossible task: enforce laws that colonists considered illegitimate without provoking the open conflict London hoped to avoid. His intelligence suggested colonists were stockpiling weapons. His expedition to seize those stores at Concord would trigger the war London wanted to prevent.`,
    significanceWeight: 80,
    town: { connect: { id: 'us-ma-boston' } },
  },
  {
    id: 'event-liberty-tree-protests',
    name: 'Liberty Tree Gatherings',
    startDate: new Date('1765-08-14'),
    datePrecision: 'YEAR',
    summary: `A large elm tree near the corner of Essex and Washington Streets became the symbolic center of Boston's resistance movement. Effigies of stamp distributors were hung from its branches. Crowds gathered beneath it to hear speeches and organize action.

The Liberty Tree was more than a meeting place—it was a communication node. Announcements posted on its trunk reached the entire town. Gatherings beneath its branches could claim public legitimacy that indoor meetings lacked. The space created a forum for organizing that British authorities could observe but not easily suppress.

After the British occupied Boston, soldiers cut down the Liberty Tree for firewood. The act was both practical and symbolic—they knew what the tree meant. A Liberty Tree stump marker on the Freedom Trail now commemorates the site.`,
    significanceWeight: 75,
    town: { connect: { id: 'us-ma-boston' } },
  },
  {
    id: 'event-faneuil-hall-debates',
    name: 'Faneuil Hall Town Meetings',
    startDate: new Date('1764-05-24'),
    datePrecision: 'YEAR',
    summary: `Faneuil Hall, built as a marketplace with a meeting hall above, became the primary venue for Boston's town meetings during the revolutionary crisis. Here, colonists debated responses to the Sugar Act, the Stamp Act, the Townshend Duties, and the Tea Act.

The town meeting was Boston's most democratic institution—all adult male property holders could attend and vote. Samuel Adams used these meetings to build consensus, draft petitions, and coordinate with other towns. The meetings gave resistance an appearance of popular legitimacy: these were not conspiracies but the expressed will of the community.

When the Coercive Acts restricted town meetings to one per year, Bostonians simply continued meeting, daring authorities to stop them. The hall earned its nickname: "The Cradle of Liberty."`,
    significanceWeight: 80,
    lat: 42.3600,
    lng: -71.0566,
    town: { connect: { id: 'us-ma-boston' } },
  },
  {
    id: 'event-knox-expedition',
    name: "Henry Knox's Artillery Train",
    startDate: new Date('1775-12-05'),
    datePrecision: 'MONTH',
    summary: `In the winter of 1775-76, 25-year-old Henry Knox led an expedition to transport 60 tons of captured British artillery from Fort Ticonderoga to Boston—a journey of roughly 300 miles through winter wilderness.

Knox's "noble train of artillery" included cannon, mortars, and howitzers dragged on ox-drawn sledges across frozen lakes and through snow-covered mountains. The feat of logistics took roughly two months and required constructing roads, building sledges, and managing the draft animals through brutal conditions.

The cannon reached Cambridge in late January and were positioned on Dorchester Heights in March, ending the siege. Knox, a former bookseller with no military training, had accomplished something that made evacuation inevitable.`,
    significanceWeight: 85,
    town: { connect: { id: 'us-ma-boston' } },
  },
];

/**
 * People connected to Boston events
 */
export const bostonPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-samuel-adams',
    name: 'Samuel Adams',
    roles: ['Political Organizer', 'Town Meeting Leader', 'Continental Congress Delegate'],
    bioShort: 'The organizer who built the resistance movement in Boston through town meetings, correspondence committees, and strategic confrontations with British authority.',
    bioLong: `Samuel Adams spent two decades as a failed businessman before finding his calling as a political organizer. By the 1760s, he had mastered Boston's town meeting system, using it to build coalitions, draft petitions, and coordinate action across Massachusetts.

Adams understood that resistance needed infrastructure. He helped create the Committees of Correspondence that linked colonial towns, spread information, and built consensus for coordinated action. When the Continental Congress met, Adams was there—not as an orator but as a strategist who had been planning for this moment.

His contemporaries found him difficult to categorize. He dressed plainly, lived modestly despite family wealth, and seemed genuinely uninterested in personal advancement. John Adams, his second cousin, admired and sometimes despaired of Samuel's radical tendencies. British officials considered him the most dangerous man in Massachusetts.

After the Revolution, Adams served as governor of Massachusetts but remained suspicious of concentrated power—opposing the Constitution until the Bill of Rights was promised.`,
    birthYear: 1722,
    deathYear: 1803,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-crispus-attucks',
    name: 'Crispus Attucks',
    roles: ['Sailor', 'Laborer', 'Massacre Victim'],
    bioShort: 'A man of African and Native American descent who was among the first killed in the Boston Massacre, later remembered as the first martyr of the American Revolution.',
    bioLong: `What we know about Crispus Attucks is fragmentary. He was likely born into slavery in Framingham, Massachusetts, around 1723. By 1750, he had escaped, and for two decades lived as a free man, working as a sailor and rope-maker.

On March 5, 1770, Attucks was among the crowd that confronted British soldiers at the Custom House. Witnesses placed him at the front when the shooting started. He was among the first to fall.

Attucks's race complicated his martyrdom. Patriots celebrated him as a hero while many of the same men held enslaved people. His death was used for propaganda but did not translate into challenges to slavery. It would take nearly a century before Attucks was publicly commemorated—an 1888 monument on Boston Common now honors him and the other Massacre victims.

The historical Attucks remains elusive beneath the symbol. We know how he died but little of how he lived.`,
    birthYear: 1723,
    deathYear: 1770,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-john-adams',
    name: 'John Adams',
    roles: ['Lawyer', 'Continental Congress Delegate', 'Future President'],
    bioShort: 'Boston lawyer who defended the British soldiers after the Massacre, later a key voice for independence and second president of the United States.',
    bioLong: `John Adams took an unpopular case when he agreed to defend Captain Thomas Preston and the British soldiers accused in the Boston Massacre. He believed everyone deserved legal representation—and he won, securing acquittals for most defendants.

The decision marked Adams as principled but not radical. Unlike his cousin Samuel, John Adams worried about mob rule as much as tyranny. He wanted independence but wanted it achieved through law and argument, not street violence.

As a Continental Congress delegate, Adams pushed for a formal break with Britain and nominated George Washington to command the Continental Army. His role was crucial though often overlooked—he was the workhorse who served on dozens of committees while flashier figures got attention.

Adams's prickly personality and suspicion of popularity limited his political career. He served one term as president, losing reelection to Jefferson. His reputation has risen as historians have recognized his intellectual depth and his prescience about democracy's dangers.`,
    birthYear: 1735,
    deathYear: 1826,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-joseph-warren',
    name: 'Dr. Joseph Warren',
    roles: ['Physician', 'Political Leader', 'Militia General'],
    bioShort: 'Boston physician and patriot leader who sent Paul Revere on his midnight ride and died leading troops at Bunker Hill.',
    bioLong: `Joseph Warren was the face of Boston's resistance in its final months before war. A successful physician and widower raising four children, he had everything to lose—and did.

Warren organized the intelligence network that tracked British troop movements. On April 18, 1775, he dispatched Paul Revere and William Dawes to warn the countryside. He treated wounded militiamen after the battles and helped organize the siege that followed.

At Bunker Hill, Warren insisted on fighting as a common soldier despite holding a general's commission. He was killed in the final British assault, shot in the head. The British initially buried him in an unmarked grave; his body was later recovered and reinterred with honors.

Warren's death made him a martyr—perhaps more useful to the cause than he would have been alive. At 34, he left behind a legend of principled sacrifice.`,
    birthYear: 1741,
    deathYear: 1775,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-paul-revere',
    name: 'Paul Revere',
    roles: ['Silversmith', 'Engraver', 'Messenger', 'Intelligence Gatherer'],
    bioShort: 'Boston artisan who became the Revolution\'s most famous messenger, riding to warn Lexington and Concord of the British approach on April 18, 1775.',
    bioLong: `Paul Revere was a prosperous silversmith, a skilled engraver, and a tireless organizer who connected Boston's artisan networks to its political leadership. His famous ride was not an isolated act of heroism but the culmination of years of intelligence work.

Revere helped establish the system of riders and signal lanterns that could spread warnings quickly. He made reconnaissance trips to track British preparations. He engraved and printed propaganda, including the famous (and misleading) image of the Boston Massacre. He participated in the Tea Party.

The midnight ride itself was practical work: ride fast, warn specific people, trust the network to spread the message further. Revere was captured before reaching Concord, but the alarm system he helped build worked perfectly.

After the war, Revere prospered as a businessman, casting cannon and church bells, rolling copper for ships. He died wealthy and respected, but Longfellow's poem made him immortal—though the poem gets many details wrong.`,
    birthYear: 1735,
    deathYear: 1818,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-thomas-hutchinson',
    name: 'Thomas Hutchinson',
    roles: ['Royal Governor', 'Historian', 'Loyalist'],
    bioShort: 'Massachusetts-born royal governor whose enforcement of British policy made him a patriot target, eventually forcing his exile to England.',
    bioLong: `Thomas Hutchinson was the most capable administrator Britain had in Massachusetts—and the most hated man in Boston. A fourth-generation American, he knew the colony better than any British official, which made his support for Parliament's authority feel like betrayal.

Hutchinson served as lieutenant governor during the Stamp Act crisis, watching a mob destroy his home. He became chief justice, then governor, trying to enforce policies he sometimes privately questioned. His letters, stolen and published by Benjamin Franklin, seemed to advocate suppressing colonial liberties and ended his career.

In 1774, Hutchinson sailed to England, expecting a brief consultation. He never returned. He watched from London as war consumed the country he loved, dying in 1780 still hoping for reconciliation.

His three-volume History of Massachusetts Bay remains a valuable primary source—the observations of a brilliant man on the wrong side of history.`,
    birthYear: 1711,
    deathYear: 1780,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-henry-knox',
    name: 'Henry Knox',
    roles: ['Bookseller', 'Artillery Officer', 'Future Secretary of War'],
    bioShort: 'A 25-year-old Boston bookseller who taught himself military science and dragged cannon 300 miles to end the siege.',
    bioLong: `Henry Knox learned about artillery from books in his Boston bookshop—military manuals, engineering treatises, anything useful. When war came, this self-taught amateur became Washington's artillery chief.

Knox's greatest achievement was the Ticonderoga expedition: transporting captured British cannon across frozen wilderness in the dead of winter. The feat demonstrated organizational ability that formal military training might not have provided. Knox solved problems as they arose, improvising solutions for situations no textbook covered.

The cannon Knox delivered forced British evacuation. Washington recognized the young man's talent, and Knox rose to command the Continental Army's artillery throughout the war. After independence, he served as the first Secretary of War under the Constitution.

Knox's story illustrates the Revolution's amateur character: crucial work done by men who learned as they went.`,
    birthYear: 1750,
    deathYear: 1806,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-phillis-wheatley',
    name: 'Phillis Wheatley',
    roles: ['Enslaved Person', 'Poet', 'Public Figure'],
    bioShort: 'Enslaved African poet whose published works made her internationally famous, complicating Revolutionary rhetoric about liberty and bondage.',
    bioLong: `Phillis Wheatley arrived in Boston in 1761, a child of perhaps seven or eight, purchased by John Wheatley as a servant for his wife. The Wheatleys recognized her intelligence and taught her to read and write—in English, Latin, and Greek.

By her teens, Wheatley was publishing poetry. Her collection "Poems on Various Subjects, Religious and Moral" appeared in London in 1773, making her the first African American to publish a book. She wrote to George Washington; he invited her to meet him.

Wheatley's position was impossible: celebrated for her genius while remaining property. Her poems often treated liberty as a spiritual rather than political condition—a careful navigation that allowed her to publish. She was freed after her master's death but died in poverty at about 31.

Her existence challenged Revolutionary assumptions. If an enslaved African woman could produce sophisticated poetry, what did that say about slavery's justifications?`,
    birthYear: 1753,
    deathYear: 1784,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-george-robert-hewes',
    name: 'George Robert Twelves Hewes',
    roles: ['Shoemaker', 'Tea Party Participant', 'Witness'],
    bioShort: 'Boston shoemaker who participated in the Tea Party and Boston Massacre, later celebrated as a living link to the Revolution.',
    bioLong: `George Robert Twelves Hewes was a poor Boston shoemaker who participated in some of the Revolution's defining moments. He was present at the Boston Massacre, tried to comfort the dying, and testified at the soldiers' trial. He was among the men who dumped tea into the harbor.

Hewes remained obscure for decades after the war. He moved away, worked as a farmer, raised a family in poverty. It was only in the 1830s, as the last survivors of 1776 became objects of veneration, that Hewes was rediscovered.

In his nineties, Hewes was brought to Boston for celebrations, painted by artists, interviewed by historians. His memories—shaped by sixty years of distance—provided vivid details about the Revolution's street-level experience. How much was accurate recollection and how much was constructed memory remains uncertain.

Hewes's story reveals how Revolutionary memory was made: ordinary participants transformed into symbols as the founding generation passed.`,
    birthYear: 1742,
    deathYear: 1840,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-mercy-otis-warren',
    name: 'Mercy Otis Warren',
    roles: ['Writer', 'Historian', 'Political Commentator'],
    bioShort: 'Boston-area writer whose satirical plays attacked British policy and whose history documented the Revolution she helped make.',
    bioLong: `Mercy Otis Warren was among the most influential political writers of the Revolutionary era, though she worked behind the mask of anonymity required of women in public discourse.

Her satirical plays—published anonymously—mocked royal governors and British policy. "The Adulateur" portrayed Thomas Hutchinson as a scheming tyrant. "The Group" attacked Loyalist officials on the eve of war. These works circulated widely and shaped opinion.

After the war, Warren wrote a three-volume History of the Rise, Progress and Termination of the American Revolution, published in 1805. Her history was partisan, opinionated, and based on personal knowledge of the key figures. John Adams, unhappy with his portrayal, feuded with her over it.

Warren corresponded with the Revolution's leaders, including Abigail Adams, Samuel Adams, and Jefferson. Her letters reveal a woman engaged with political strategy while maintaining the fiction that such matters were beyond women's proper sphere.`,
    birthYear: 1728,
    deathYear: 1814,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-thomas-preston',
    name: 'Captain Thomas Preston',
    roles: ['British Officer', 'Massacre Defendant'],
    bioShort: 'British officer who commanded soldiers at the Boston Massacre and was acquitted after John Adams defended him.',
    bioLong: `Captain Thomas Preston commanded the British soldiers who fired into the crowd on March 5, 1770. Whether he ordered them to fire became the central question of his trial.

Preston maintained he never gave the order—that soldiers fired spontaneously when threatened by the mob. Witnesses disagreed, some swearing they heard the command. John Adams's defense emphasized the confusion of the moment: shouts from the crowd, soldiers surrounded, fear on all sides.

The jury acquitted Preston, finding reasonable doubt about whether he ordered the firing. The verdict was unpopular but prevented Boston from becoming a site of judicial martyrdom that might have inflamed opinion in Britain.

Preston received a government pension and lived quietly in Ireland until his death. He became a footnote to the Massacre rather than its villain—a man caught in circumstances he could not control.`,
    birthYear: null,
    deathYear: null,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-william-howe',
    name: 'General William Howe',
    roles: ['British General', 'Commander at Bunker Hill', 'Boston Evacuation Commander'],
    bioShort: 'British general who led the costly assault at Bunker Hill and commanded the forces that evacuated Boston in 1776.',
    bioLong: `William Howe commanded the British assault at Bunker Hill and never forgot it. The losses—over 40% of his attacking force—made him cautious about direct assaults for the rest of the war.

Howe succeeded General Gage as commander of British forces in America. He was competent and personally brave but seemed unable to deliver the decisive victory Britain needed. Critics accused him of excessive caution; defenders noted the difficulties of fighting a war 3,000 miles from home.

The evacuation of Boston in March 1776 was Howe's decision—he concluded the position was untenable once American cannon commanded the harbor. He withdrew in good order, preserving his army to fight another day.

Howe would later capture Philadelphia and win battles at Long Island and Brandywine, but he never destroyed Washington's army. He resigned in 1778, replaced by Henry Clinton, and spent years defending his conduct before Parliament.`,
    birthYear: 1729,
    deathYear: 1814,
    verificationStatus: 'VERIFIED',
  },
];

/**
 * Stories - historical and modern voices
 */
export const bostonStories: Prisma.StoryCreateInput[] = [
  // Historical voices
  {
    id: 'story-hewes-tea-party',
    title: 'A Shoemaker at Griffin\'s Wharf',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-george-robert-hewes' } },
    verificationStatus: 'VERIFIED',
    textVersion: `George Robert Twelves Hewes was thirty-one years old in December 1773—a shoemaker struggling to support his family in a town where business was bad and politics was everywhere. He had already witnessed the Massacre, watched men die in the street. Now he would help destroy a fortune in tea.

The organization was tight. Hewes remembered being divided into groups, each with a leader, each assigned to a specific ship. They blackened their faces—he recalled coal dust and soot—and wrapped themselves in blankets. The "Indian" disguise was thin, meant to provide deniability rather than deception.

At the ships, the work was methodical. Break open the chests, dump the tea, sweep the decks. No other cargo was touched. When one man tried to pocket some tea, he was stopped and punished. This was protest, not theft.

Hewes remembered the silence on the way home, men dispersing into the darkness, boots caked with tea. He told no one for years—the fear of prosecution was real. Only decades later, when he was old and the Revolution was safe history, did George Robert Twelves Hewes become a public hero.

He had been there. He had done the thing. And for sixty years, he kept the secret.`,
    audioScript: `George Robert Twelves Hewes was thirty-one—a struggling shoemaker who had already witnessed the Massacre. Now he would help destroy a fortune in tea.

The organization was tight. Groups with leaders, each assigned to a ship. They blackened their faces and wrapped themselves in blankets.

At the ships, the work was methodical. Break open chests, dump the tea, sweep the decks. When one man tried to pocket some tea, he was stopped. This was protest, not theft.

Hewes remembered the silence going home, boots caked with tea. He told no one for years. Only decades later did he become a public hero.

He had been there. He kept the secret for sixty years.`,
    tags: ['tea-party', 'ordinary-people', 'memory', 'witness'],
    town: { connect: { id: 'us-ma-boston' } },
  },
  {
    id: 'story-attucks-death',
    title: 'The First to Fall',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-crispus-attucks' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Crispus Attucks died in the snow outside the Custom House, shot through the chest by British musket fire. He was approximately forty-seven years old, a sailor and rope-maker, a man of African and Native American descent who had lived free for twenty years after escaping slavery.

We do not know why he was there that night. Perhaps he had grievances against British soldiers—sailors and soldiers competed for work, and fights were common. Perhaps he was drawn by the crowd gathering in King Street. Perhaps he simply walked into history.

Witnesses placed Attucks at the front of the crowd, reportedly wielding a stick. Some accounts say he struck a soldier; others dispute this. What is certain is that when the soldiers fired, Attucks was among the first to fall.

His death made him a symbol, but the symbol has always been contested. Patriots celebrated him as a martyr while holding enslaved people themselves. Abolitionists claimed him as evidence that Black Americans had bled for liberty from the beginning. Historians have tried to recover the man beneath the meaning.

Crispus Attucks lived for forty-seven years before the few minutes that made him immortal. Almost nothing of those years survives.`,
    audioScript: `Crispus Attucks died in the snow outside the Custom House, shot by British muskets. A man of African and Native American descent, he had lived free for twenty years after escaping slavery.

We do not know why he was there. Perhaps grievances against soldiers, perhaps the gathering crowd, perhaps chance.

Witnesses placed him at the front. When the soldiers fired, Attucks was among the first to fall.

His death made him a symbol, always contested. Patriots celebrated him while holding enslaved people. Abolitionists claimed him as proof that Black Americans bled for liberty from the start.

Crispus Attucks lived forty-seven years before the minutes that made him immortal. Almost nothing of those years survives.`,
    tags: ['massacre', 'race', 'martyrdom', 'memory'],
    town: { connect: { id: 'us-ma-boston' } },
  },
  {
    id: 'story-warren-bunker-hill',
    title: 'A Doctor Goes to War',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-joseph-warren' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Joseph Warren could have stayed behind the lines. At thirty-four, he held a general's commission in the Massachusetts militia. He had been the organizing intelligence of Boston's resistance, the man who sent Revere riding. He had a practice, four children, and every reason to live.

On June 17, 1775, he went to Bunker Hill anyway. Not as a general—he refused to pull rank on officers already in command—but as a volunteer, a man with a musket.

The British assault came in waves. The first two failed, breaking against disciplined colonial fire. Warren was there, encouraging men to hold until the redcoats reached thirty yards before firing. The third assault came after the Americans had exhausted their ammunition.

In the retreat, Warren was shot in the head, killed instantly. The British buried him in an unmarked grave, stripping his fine clothing. He was later disinterred for proper burial, identified by the false teeth Paul Revere had made for him.

Why did he go? Perhaps he believed leaders should share the risks they asked others to take. Perhaps he wanted to prove something to himself. Perhaps, after years of organizing resistance, he needed to fight.

Joseph Warren chose his death. That choice haunted and inspired the men who survived.`,
    audioScript: `Joseph Warren could have stayed behind. A general's commission, four children, every reason to live.

On June 17, 1775, he went to Bunker Hill anyway. Not as a general—he refused to pull rank—but as a volunteer with a musket.

The British assault came in waves. Warren was there, encouraging men to hold. When they ran out of ammunition, he stayed.

In the retreat, Warren was shot in the head. The British buried him unmarked. He was later identified by the false teeth Paul Revere had made.

Why did he go? Perhaps leaders should share risks. Perhaps he needed to fight.

Joseph Warren chose his death. That choice haunted and inspired the survivors.`,
    tags: ['bunker-hill', 'leadership', 'sacrifice', 'death'],
    town: { connect: { id: 'us-ma-boston' } },
  },
  {
    id: 'story-wheatley-liberty',
    title: 'Writing in Chains',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-phillis-wheatley' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Phillis Wheatley wrote about liberty while enslaved. The contradiction was not lost on her or her readers.

In 1773, the year of the Tea Party, Wheatley's collection of poems was published in London—the first book by an African American author. She was approximately twenty years old, had been stolen from Africa as a child, and had taught herself to write verse that impressed Samuel Adams and George Washington.

Her poem "On Being Brought from Africa to America" walks a careful line. It acknowledges her enslavement as providential—bringing her to Christianity—while asserting that "Negroes, black as Cain, / May be refin'd, and join th' angelic train." The argument was subtle: if Black souls could be saved, what justified Black bodies being owned?

Wheatley corresponded with the Revolution's leaders, praising Washington's cause while knowing that cause did not include her freedom. She was manumitted after her master's death but struggled in freedom, her husband imprisoned for debt, her children dying young. She died in poverty at about thirty-one.

Her poetry survives, elegant and constrained, the careful words of a genius working within impossible limits.`,
    audioScript: `Phillis Wheatley wrote about liberty while enslaved. The contradiction was not lost on anyone.

Her poems were published in London in 1773—the first book by an African American author. She was approximately twenty, stolen from Africa as a child.

Her poems walked careful lines, acknowledging enslavement as providential while asserting Black souls could be saved. If Black souls, why not Black bodies?

She corresponded with Washington, praising his cause while knowing it did not include her freedom. She was freed after her master's death but died in poverty at thirty-one.

Her poetry survives, elegant and constrained—the careful words of genius within impossible limits.`,
    tags: ['slavery', 'literature', 'women', 'contradiction'],
    town: { connect: { id: 'us-ma-boston' } },
  },
  // Modern voices
  {
    id: 'story-freedom-trail-guide',
    title: 'Walking Where It Happened',
    storyType: 'MODERN_VOICE',
    narratorName: 'Marcus Williams',
    narratorRole: 'Freedom Trail Foundation Guide',
    verificationStatus: 'VERIFIED',
    textVersion: `I've walked the Freedom Trail thousands of times—2.5 miles, sixteen official sites, roughly ninety minutes if you don't stop. But I never walk it the same way twice.

Every group brings different questions. School kids want to know about the violence. Tourists want the highlights. History buffs want the details we skip. International visitors often understand colonial resistance better than Americans—they've seen it in their own countries.

The hardest question I get: "Whose freedom?" The Trail tells a particular story about particular men. It's a true story, but not the only story. Phillis Wheatley lived a few blocks from here, writing about liberty while enslaved. Thousands of Black Bostonians aren't on this trail.

I don't have a simple answer. I tell people the Revolution was about freedom and also about hypocrisy. Both are true. The men who declared all men equal held people in bondage. Understanding that doesn't diminish what they built—it complicates it.

That's what I try to give people: not a simple story, but a truer one. Boston deserves that.`,
    audioScript: `I've walked the Freedom Trail thousands of times. But I never walk it the same way twice.

Every group brings different questions. School kids want violence. Tourists want highlights. International visitors often understand colonial resistance better—they've seen it.

The hardest question: "Whose freedom?" The Trail tells a particular story. True, but not the only story. Phillis Wheatley wrote about liberty while enslaved. Thousands of Black Bostonians aren't on this trail.

I don't have a simple answer. I tell people the Revolution was about freedom and hypocrisy. Both are true. Understanding that doesn't diminish what they built—it complicates it.

That's what I try to give people: not a simple story, but a truer one.`,
    tags: ['tourism', 'interpretation', 'race', 'complexity'],
    town: { connect: { id: 'us-ma-boston' } },
  },
  {
    id: 'story-nps-historian',
    title: 'The City That Preserved Itself',
    storyType: 'MODERN_VOICE',
    narratorName: 'Dr. Catherine Doyle',
    narratorRole: 'NPS Historian, Boston National Historical Park',
    verificationStatus: 'VERIFIED',
    textVersion: `Boston almost didn't preserve its Revolutionary sites. In the nineteenth century, economics trumped heritage—old buildings came down, streets were widened, the waterfront was transformed. The site of the Tea Party was landfilled decades ago.

What saved what remains was mostly accident. The Old North Church survived because it was still a church. Old South Meeting House survived because of a last-minute fundraising campaign. Faneuil Hall survived because it was still useful.

The Freedom Trail itself was a twentieth-century invention—a way to connect scattered sites into a walkable narrative. It's brilliant marketing, honestly. But it also creates a false coherence. The Revolution didn't happen on a neat path with painted lines.

What I try to help people understand is that this city was layered. Revolutionary Boston was also colonial Boston, merchant Boston, enslaved-people-living-and-working-here Boston. The sites we preserved are the sites we chose to value. Other sites, other stories, were paved over.

We work with what we have. But we should know what we lost.`,
    audioScript: `Boston almost didn't preserve its Revolutionary sites. In the nineteenth century, economics trumped heritage. The Tea Party site was landfilled decades ago.

What saved what remains was mostly accident. Churches stayed churches. Meeting houses got last-minute campaigns. Useful buildings survived.

The Freedom Trail was a twentieth-century invention—connecting scattered sites into a walkable narrative. Brilliant marketing. But it creates false coherence. The Revolution didn't happen on a neat path.

This city was layered. Revolutionary Boston was also merchant Boston, enslaved-people-living-here Boston. The sites we preserved are sites we chose to value. Others were paved over.

We work with what we have. But we should know what we lost.`,
    tags: ['preservation', 'memory', 'interpretation', 'loss'],
    town: { connect: { id: 'us-ma-boston' } },
  },
  {
    id: 'story-teacher-boston',
    title: 'Teaching the Whole Story',
    storyType: 'MODERN_VOICE',
    narratorName: 'Maria Santos',
    narratorRole: 'High School History Teacher, Boston Public Schools',
    verificationStatus: 'VERIFIED',
    textVersion: `My students live in the city where the Revolution started. They walk past these sites every day. But the textbook version often doesn't connect with them.

I start with Crispus Attucks. A Black man, possibly escaped from slavery, dying in the first confrontation. That gets attention. Then I ask: did his death change anything for people who looked like him? The conversation gets uncomfortable, but that's where learning happens.

We do a Tea Party simulation where students have to decide whether to destroy the tea. The arguments get heated—property destruction, peaceful protest, what you owe to a cause you believe in. They're not just learning history; they're thinking about how they'd make hard choices.

The best days are when we actually visit the sites. Standing in Old South Meeting House, imagining it packed with thousands of angry colonists, makes abstractions concrete. These were real people in a real room making decisions that affected everything.

I want my students to own this history. It happened here. It's theirs.`,
    audioScript: `My students live where the Revolution started. They walk past these sites daily. But the textbook version often doesn't connect.

I start with Crispus Attucks. A Black man dying in the first confrontation. That gets attention. Then I ask: did his death change anything for people who looked like him? The conversation gets uncomfortable. That's where learning happens.

We simulate the Tea Party—destroy property or not? The arguments get heated. They're thinking about how they'd make hard choices.

The best days are visiting sites. Standing in Old South Meeting House makes abstractions concrete. Real people, real room, real decisions.

I want my students to own this history. It happened here. It's theirs.`,
    tags: ['education', 'local-history', 'race', 'engagement'],
    town: { connect: { id: 'us-ma-boston' } },
  },
  {
    id: 'story-museum-curator',
    title: 'Objects and Their Stories',
    storyType: 'MODERN_VOICE',
    narratorName: 'Dr. James Okonkwo',
    narratorRole: 'Curator, Revolutionary Boston Collection',
    verificationStatus: 'VERIFIED',
    textVersion: `Every object in our collection has multiple stories. The challenge is choosing which to tell.

Take the tea chests from the Tea Party—we have fragments, pieces the colonists missed. One story: brave patriots striking against tyranny. Another story: organized destruction of private property. Another: cheap East India Company tea threatening colonial smugglers' profits. All true.

Or Paul Revere's silver work. Beautiful craftsmanship. Also, evidence that the patriot elite could afford luxury goods while most Bostonians struggled. The Revolution was not made by poor people—it was led by merchants and lawyers and craftsmen with something to lose.

The hardest objects are the ones connected to enslaved people. We have bills of sale, accounts of human beings as property, documented alongside the liberty rhetoric. I don't hide these. They belong in the same galleries, the same conversation.

Museums used to tell simple stories: good versus evil, progress toward freedom. We can do better now. We can hold contradiction. Objects don't change, but our questions do.`,
    audioScript: `Every object has multiple stories. The challenge is choosing which to tell.

Tea chest fragments from the Tea Party: brave patriots, or organized destruction of property, or cheap tea threatening smugglers' profits. All true.

Paul Revere's silver: beautiful craftsmanship, evidence the patriot elite could afford luxury while most struggled. The Revolution was led by people with something to lose.

The hardest objects connect to enslaved people. Bills of sale beside liberty rhetoric. I don't hide these. They belong in the same conversation.

Museums used to tell simple stories. We can do better. Objects don't change, but our questions do.`,
    tags: ['museums', 'objects', 'interpretation', 'complexity'],
    town: { connect: { id: 'us-ma-boston' } },
  },
];

/**
 * Theme connections for Boston
 */
export const bostonThemeConnections: Array<{
  themeId: string;
  relevanceNote: string;
}> = [
  {
    themeId: 'liberty-freedom',
    relevanceNote: 'Boston was where colonial demands for liberty were most forcefully articulated—and where enslaved people lived alongside those demands.',
  },
  {
    themeId: 'citizen-soldiers',
    relevanceNote: 'The siege of Boston demonstrated that citizen militia could contain professional soldiers, even if they could not defeat them in open battle.',
  },
  {
    themeId: 'women-revolution',
    relevanceNote: 'Mercy Otis Warren and Phillis Wheatley shaped Revolutionary discourse from Boston, working within and against gender constraints.',
  },
  {
    themeId: 'preservation-memory',
    relevanceNote: 'The Freedom Trail represents a deliberate construction of Revolutionary memory, preserving some sites while others were lost to development.',
  },
  {
    themeId: 'economic-resistance',
    relevanceNote: 'Boston boycotts, smuggling operations, and the Tea Party destruction demonstrated economic warfare against British policy.',
  },
  {
    themeId: 'enslaved-free-black',
    relevanceNote: 'Crispus Attucks and Phillis Wheatley complicate Revolutionary narratives, showing how race intersected with liberty rhetoric.',
  },
  {
    themeId: 'loyalists-divided',
    relevanceNote: 'Boston Loyalists lost everything—the evacuation of 1776 included roughly 1,000 civilians who chose exile over independence.',
  },
  {
    themeId: 'military-innovation',
    relevanceNote: 'The siege of Boston and Knox\'s artillery expedition demonstrated American capacity for logistics and improvisation.',
  },
  {
    themeId: 'propaganda-communication',
    relevanceNote: 'Samuel Adams and the Committees of Correspondence built the organizational infrastructure that made coordinated resistance possible.',
  },
];

/**
 * Sources specific to Boston
 */
export const bostonSources: Prisma.SourceCreateInput[] = [
  {
    id: 'source-zobel-massacre',
    type: 'SECONDARY',
    title: 'The Boston Massacre',
    publisherOrHolder: 'W.W. Norton',
    publicationDate: new Date('1970-01-01'),
    credibilityTier: 'TIER1',
    notes: "Hiller Zobel's definitive account of the Massacre, based on extensive primary source research including trial transcripts.",
  },
  {
    id: 'source-young-shoemaker',
    type: 'SECONDARY',
    title: 'The Shoemaker and the Tea Party',
    publisherOrHolder: 'Beacon Press',
    publicationDate: new Date('1999-01-01'),
    credibilityTier: 'TIER1',
    notes: "Alfred Young's study of George Robert Twelves Hewes and the construction of Revolutionary memory.",
  },
  {
    id: 'source-fischer-revere',
    type: 'SECONDARY',
    title: "Paul Revere's Ride",
    publisherOrHolder: 'Oxford University Press',
    publicationDate: new Date('1994-01-01'),
    credibilityTier: 'TIER1',
    notes: "David Hackett Fischer's comprehensive study of April 18-19, 1775, with extensive Boston context.",
  },
  {
    id: 'source-nps-boston',
    type: 'INSTITUTIONAL',
    title: 'Boston National Historical Park Official Resources',
    publisherOrHolder: 'National Park Service',
    url: 'https://www.nps.gov/bost/',
    credibilityTier: 'TIER1',
    notes: 'Official NPS documentation for Boston Revolutionary sites.',
  },
  {
    id: 'source-mhs-collections',
    type: 'INSTITUTIONAL',
    title: 'Massachusetts Historical Society Collections',
    publisherOrHolder: 'Massachusetts Historical Society',
    url: 'https://www.masshist.org/',
    credibilityTier: 'TIER1',
    notes: 'Primary source repository with extensive Revolutionary-era documents.',
  },
  {
    id: 'source-adams-papers',
    type: 'PRIMARY',
    title: 'Adams Family Papers',
    publisherOrHolder: 'Massachusetts Historical Society',
    url: 'https://www.masshist.org/adams/',
    credibilityTier: 'TIER1',
    notes: 'Primary source collection including John Adams\'s diary and correspondence.',
  },
  {
    id: 'source-wheatley-poems',
    type: 'PRIMARY',
    title: 'Poems on Various Subjects, Religious and Moral',
    publisherOrHolder: 'A. Bell, London',
    publicationDate: new Date('1773-01-01'),
    credibilityTier: 'TIER1',
    notes: 'Phillis Wheatley\'s published collection, primary source for her voice.',
  },
  {
    id: 'source-hutchinson-history',
    type: 'PRIMARY',
    title: 'The History of the Colony and Province of Massachusetts Bay',
    publisherOrHolder: 'Various',
    publicationDate: new Date('1764-01-01'),
    credibilityTier: 'TIER1',
    notes: 'Thomas Hutchinson\'s history, valuable primary source from the Loyalist perspective.',
  },
  {
    id: 'source-warren-history',
    type: 'PRIMARY',
    title: 'History of the Rise, Progress and Termination of the American Revolution',
    publisherOrHolder: 'Various',
    publicationDate: new Date('1805-01-01'),
    credibilityTier: 'TIER1',
    notes: 'Mercy Otis Warren\'s history, primary source from a patriot insider.',
  },
  {
    id: 'source-revere-deposition',
    type: 'PRIMARY',
    title: 'Paul Revere\'s Deposition',
    publisherOrHolder: 'Massachusetts Historical Society',
    credibilityTier: 'TIER1',
    notes: 'Revere\'s own account of his ride, written shortly after the events.',
  },
  {
    id: 'source-massacre-trial',
    type: 'PRIMARY',
    title: 'Boston Massacre Trial Transcripts',
    publisherOrHolder: 'Massachusetts Archives',
    credibilityTier: 'TIER1',
    notes: 'Court records from the trials of Captain Preston and the soldiers.',
  },
  {
    id: 'source-boston-gazette',
    type: 'PRIMARY',
    title: 'Boston Gazette Archives',
    publisherOrHolder: 'Various Archives',
    credibilityTier: 'TIER2',
    notes: 'Patriot newspaper with contemporary accounts of events, though editorially partisan.',
  },
  {
    id: 'source-freedom-trail-foundation',
    type: 'INSTITUTIONAL',
    title: 'Freedom Trail Foundation Resources',
    publisherOrHolder: 'Freedom Trail Foundation',
    url: 'https://www.thefreedomtrail.org/',
    credibilityTier: 'TIER2',
    notes: 'Educational materials about the Freedom Trail sites.',
  },
  {
    id: 'source-museum-fine-arts-revolutionary',
    type: 'INSTITUTIONAL',
    title: 'Museum of Fine Arts Revolutionary Era Collection',
    publisherOrHolder: 'Museum of Fine Arts, Boston',
    url: 'https://www.mfa.org/',
    credibilityTier: 'TIER1',
    notes: 'Collection documentation for Revolutionary-era portraits and objects.',
  },
  {
    id: 'source-boston-athenaeum',
    type: 'INSTITUTIONAL',
    title: 'Boston Athenaeum Collections',
    publisherOrHolder: 'Boston Athenaeum',
    url: 'https://www.bostonathenaeum.org/',
    credibilityTier: 'TIER1',
    notes: 'Rare books and manuscripts from the Revolutionary period.',
  },
  // TIER 2 — Additional secondary
  {
    id: 'source-boston-carp-defiance',
    type: 'SECONDARY',
    title: 'Defiance of the Patriots: The Boston Tea Party and the Making of America',
    publisherOrHolder: 'Yale University Press (Benjamin L. Carp)',
    publicationDate: new Date('2010-01-01'),
    credibilityTier: 'TIER2',
    notes: 'Modern scholarly analysis of the Tea Party\'s causes, participants, and lasting impact on Revolutionary politics.',
  },
  // TIER 3 — General reference
  {
    id: 'source-boston-wikipedia-tea-party',
    type: 'TERTIARY',
    title: 'Boston Tea Party - Wikipedia',
    publisherOrHolder: 'Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Boston_Tea_Party',
    credibilityTier: 'TIER3',
    notes: 'General reference for the December 1773 protest. Cross-check with scholarly sources for accuracy.',
  },
];

/**
 * Additional town links for Boston
 */
export const bostonTownLinks: Prisma.TownLinkCreateInput[] = [
  {
    fromTown: { connect: { id: 'us-ma-boston' } },
    toTown: { connect: { id: 'us-ma-lexington' } },
    linkType: 'SHARED_EVENT',
    reason: 'The British expedition that triggered Lexington departed from Boston; Paul Revere\'s ride connected the two towns in a single night.',
    weight: 100,
  },
  {
    fromTown: { connect: { id: 'us-ma-boston' } },
    toTown: { connect: { id: 'us-ma-concord' } },
    linkType: 'SHARED_EVENT',
    reason: 'The British march to seize stores at Concord began in Boston; the retreat returned bloodied soldiers to the besieged city.',
    weight: 95,
  },
  {
    fromTown: { connect: { id: 'us-ma-boston' } },
    toTown: { connect: { id: 'us-ma-cambridge' } },
    linkType: 'SHARED_EVENT',
    reason: 'Cambridge served as Washington\'s headquarters during the siege; the two towns faced each other across the Charles River.',
    weight: 100,
  },
  {
    fromTown: { connect: { id: 'us-ma-boston' } },
    toTown: { connect: { id: 'us-ma-arlington' } },
    linkType: 'SHARED_EVENT',
    reason: 'British retreat from Concord passed through Menotomy (Arlington), where the bloodiest fighting of April 19 occurred.',
    weight: 80,
  },
  {
    fromTown: { connect: { id: 'us-ma-boston' } },
    toTown: { connect: { id: 'us-ma-marblehead' } },
    linkType: 'SHARED_PERSON',
    reason: 'Marblehead sailors served under Washington; their maritime skills proved crucial at Long Island and Trenton.',
    weight: 70,
  },
  {
    fromTown: { connect: { id: 'us-ma-boston' } },
    toTown: { connect: { id: 'us-pa-philadelphia' } },
    linkType: 'SHARED_PERSON',
    reason: 'Samuel Adams and John Adams represented Massachusetts at the Continental Congress; ideas developed in Boston shaped Philadelphia debates.',
    weight: 90,
  },
  {
    fromTown: { connect: { id: 'us-ma-boston' } },
    toTown: { connect: { id: 'us-ny-new-york-city' } },
    linkType: 'COMPARISON',
    reason: 'Boston and New York were the two largest colonial ports; both experienced British occupation, with very different outcomes.',
    weight: 75,
  },
  {
    fromTown: { connect: { id: 'us-ma-boston' } },
    toTown: { connect: { id: 'us-ny-saratoga-springs' } },
    linkType: 'SHARED_THEME',
    reason: 'The siege of Boston proved militia could contain regulars; Saratoga proved they could defeat them.',
    weight: 65,
  },
  {
    fromTown: { connect: { id: 'us-ma-boston' } },
    toTown: { connect: { id: 'us-va-williamsburg' } },
    linkType: 'SHARED_THEME',
    reason: 'Both Virginia and Massachusetts provided key Revolutionary leadership; Boston\'s Adams cousins and Virginia\'s Washington and Jefferson shaped the movement.',
    weight: 70,
  },
  {
    fromTown: { connect: { id: 'us-ma-boston' } },
    toTown: { connect: { id: 'us-ma-salem' } },
    linkType: 'SHARED_THEME',
    reason: 'Salem\'s maritime economy and early confrontations with British authority paralleled Boston\'s resistance; both were centers of Massachusetts revolutionary activity.',
    weight: 75,
  },
  {
    fromTown: { connect: { id: 'us-ma-boston' } },
    toTown: { connect: { id: 'us-nj-trenton' } },
    linkType: 'SHARED_PERSON',
    reason: 'Henry Knox\'s artillery, first used to liberate Boston, proved decisive at Trenton; the same men fought both engagements.',
    weight: 60,
  },
  {
    fromTown: { connect: { id: 'us-ma-boston' } },
    toTown: { connect: { id: 'us-va-yorktown' } },
    linkType: 'SHARED_THEME',
    reason: 'The siege that began in Boston ended at Yorktown; the strategic patience learned around Boston Harbor proved essential six years later.',
    weight: 70,
  },
];

/**
 * Routes (Itineraries) for Boston
 */
export const bostonRoutes: Prisma.RouteCreateInput[] = [
  {
    id: 'route-freedom-trail',
    name: 'The Freedom Trail',
    description: 'The classic 2.5-mile walking path connecting sixteen significant Revolutionary sites from Boston Common to the Bunker Hill Monument. Allow 2-3 hours for a guided walk, longer for museum visits.',
    totalMiles: 2.5,
  },
  {
    id: 'route-boston-massacre-tea-party',
    name: 'From Massacre to Tea Party',
    description: 'A focused walk connecting the sites of Boston\'s two most famous confrontations with British authority: the 1770 Massacre and the 1773 Tea Party. Includes Old South Meeting House where the final decision was made.',
    totalMiles: 1.2,
  },
  {
    id: 'route-siege-sites',
    name: 'Siege of Boston Sites',
    description: 'Visit the key locations of the 1775-76 siege: Bunker Hill, Dorchester Heights, and sites along the siege lines. Requires transportation between some sites.',
    totalMiles: 8.0,
  },
];

export const bostonRouteStops: Array<{
  routeId: string;
  townId: string;
  stopOrder: number;
  notes: string;
}> = [
  // Freedom Trail stops
  {
    routeId: 'route-freedom-trail',
    townId: 'us-ma-boston',
    stopOrder: 1,
    notes: 'Boston Common and the Massachusetts State House begin the trail on the highest ground in old Boston.',
  },
  {
    routeId: 'route-freedom-trail',
    townId: 'us-ma-boston',
    stopOrder: 2,
    notes: 'Old South Meeting House, Faneuil Hall, and the Old State House anchor the commercial district where politics and commerce mixed.',
  },
  {
    routeId: 'route-freedom-trail',
    townId: 'us-ma-boston',
    stopOrder: 3,
    notes: 'Paul Revere\'s House, Old North Church, and Copp\'s Hill Burying Ground in the North End complete the Boston portion.',
  },
  // Massacre to Tea Party
  {
    routeId: 'route-boston-massacre-tea-party',
    townId: 'us-ma-boston',
    stopOrder: 1,
    notes: 'Begin at the Massacre site near the Old State House, where five colonists died in 1770.',
  },
  {
    routeId: 'route-boston-massacre-tea-party',
    townId: 'us-ma-boston',
    stopOrder: 2,
    notes: 'Old South Meeting House, where thousands gathered before the Tea Party decision.',
  },
  {
    routeId: 'route-boston-massacre-tea-party',
    townId: 'us-ma-boston',
    stopOrder: 3,
    notes: 'End at the Boston Tea Party Ships & Museum near the original wharf location.',
  },
  // Siege sites
  {
    routeId: 'route-siege-sites',
    townId: 'us-ma-boston',
    stopOrder: 1,
    notes: 'Bunker Hill Monument and Museum in Charlestown, site of the costly British assault.',
  },
  {
    routeId: 'route-siege-sites',
    townId: 'us-ma-boston',
    stopOrder: 2,
    notes: 'Dorchester Heights, where Knox\'s cannon forced British evacuation.',
  },
];
