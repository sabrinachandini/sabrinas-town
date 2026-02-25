// MODEL: Claude Opus (historical synthesis and narrative content)
// MODEL: Claude Sonnet (data structure and code)
// Connecticut town expansion — New Haven, New London, Danbury, Groton

import { Prisma } from '@prisma/client';

/**
 * Four Connecticut towns with Revolutionary War significance.
 *
 * NOTE ON VERIFICATION: Historical content has been synthesized from
 * established scholarly sources including Robert Middlekauff's "The
 * Glorious Cause," Bruce Stark's "Connecticut Signer: Roger Sherman,"
 * NPS documentation, and Connecticut Historical Society publications.
 * Stories marked VERIFIED have strong documentary evidence. Lesser-known
 * voices carry ORAL_TRADITION or ANECDOTAL status where the historical
 * record is thinner. Modern-voice stories are marked UNVERIFIED where
 * we cannot fully document claims from composite/representative narrators.
 */

// ============================================================================
// NEW HAVEN
// ============================================================================

export const newHavenTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `New Haven was a center of intellectual and political resistance that punched far above its weight during the Revolution. Yale College — the only institution of higher learning in Connecticut — produced a disproportionate share of the war's officers, chaplains, and political leaders. The town's contribution was as much ideological as military: New Haven helped articulate why independence was necessary and then supplied the men to fight for it.

Roger Sherman, a self-educated cobbler turned lawyer and statesman, was New Haven's most consequential Revolutionary figure. He is the only person to have signed all four of the nation's foundational documents: the Articles of Association, the Declaration of Independence, the Articles of Confederation, and the Constitution. His practical intelligence and political skill made him one of the most effective members of the Continental Congress, even if history has given him less attention than his more celebrated colleagues.

The town paid a direct military price in July 1779, when a British force under General William Tryon landed and raided New Haven. The attack was part of a broader campaign to punish Connecticut's coastline, and while the damage was less severe than at New London or Danbury, the raid brought the war literally to the town's doorsteps. Yale students and faculty joined the militia defense, and the town endured several days of occupation before the British withdrew.

New Haven's wartime experience reflected a broader Connecticut pattern: steady, unglamorous contribution to the Continental cause. The state supplied troops, provisions, and officers in numbers that earned it the nickname "The Provision State." New Haven, with its college, its harbor, and its political leadership, was central to that effort.`,
};

export const newHavenPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-new-haven-roger-sherman',
    name: 'Roger Sherman',
    roles: ['Continental Congress Delegate', 'Statesman', 'Constitutional Convention Delegate'],
    bioShort:
      'Self-educated cobbler, lawyer, and statesman from New Haven who is the only person to have signed all four foundational American documents. His practical intelligence and political skill made him one of the most effective — if least celebrated — architects of American independence.',
    birthYear: 1721,
    deathYear: 1793,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-new-haven-ezra-stiles',
    name: 'Ezra Stiles',
    roles: ['President of Yale College', 'Clergyman', 'Scholar'],
    bioShort:
      'President of Yale College during the Revolution who used his position to support the patriot cause intellectually and practically. His detailed diary provides one of the richest primary sources for understanding wartime New Haven and Connecticut.',
    birthYear: 1727,
    deathYear: 1795,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-new-haven-david-wooster',
    name: 'David Wooster',
    roles: ['Continental Army Brigadier General', 'Connecticut Militia Commander'],
    bioShort:
      'New Haven-born general who served in the Continental Army and Connecticut militia. He was mortally wounded at the Battle of Ridgefield in April 1777 while pursuing British troops retreating from their raid on Danbury.',
    birthYear: 1711,
    deathYear: 1777,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-new-haven-william-tryon',
    name: 'General William Tryon',
    roles: ['British General', 'Royal Governor of New York', 'Raid Commander'],
    bioShort:
      'British officer and former royal governor who led the devastating raids on Connecticut\'s coastline in 1779, including the attack on New Haven. His punitive expeditions were designed to draw Continental troops away from other theaters and punish communities supporting the rebellion.',
    birthYear: 1729,
    deathYear: 1788,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-new-haven-naphtali-daggett',
    name: 'Naphtali Daggett',
    roles: ['Yale Professor', 'Clergyman', 'Militia Defender'],
    bioShort:
      'Yale\'s professor of divinity who grabbed a musket and joined the militia defense during the British raid on New Haven in July 1779. Captured by British soldiers, he was beaten and bayoneted but survived. His defiance became a symbol of Yale\'s wartime spirit.',
    birthYear: 1727,
    deathYear: 1780,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-new-haven-benedict-arnold-nh',
    name: 'Benedict Arnold',
    roles: ['New Haven Merchant', 'Continental Army Officer', 'Militia Captain'],
    bioShort:
      'Before his military career and eventual treason, Arnold was a prosperous New Haven merchant and apothecary. He led a company of New Haven militia to Cambridge after Lexington and Concord, beginning the military career that would take him to Ticonderoga, Quebec, Saratoga, and infamy.',
    birthYear: 1741,
    deathYear: 1801,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-new-haven-thomas-painter',
    name: 'Thomas Painter',
    roles: ['Yale Student', 'Militia Volunteer', 'Patriot'],
    bioShort:
      'Yale student who joined the militia defense against the British raid on New Haven in 1779. His account of the fighting, written years later, describes the chaotic response of students and townspeople as British troops landed at the harbor.',
    birthYear: 1758,
    deathYear: 1843,
    verificationStatus: 'ANECDOTAL',
  },
  {
    id: 'person-new-haven-elizabeth-sherman',
    name: 'Elizabeth Hartwell Sherman',
    roles: ['Statesman\'s Wife', 'Household Manager', 'Patriot Supporter'],
    bioShort:
      'Second wife of Roger Sherman who managed the household and family during her husband\'s extended absences at the Continental Congress. She raised their children through the uncertainties of wartime while Sherman helped shape the new nation in Philadelphia.',
    birthYear: 1745,
    deathYear: 1813,
    verificationStatus: 'ANECDOTAL',
  },
];

export const newHavenEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-new-haven-tryon-raid',
    name: 'British Raid on New Haven',
    startDate: new Date('1779-07-05'),
    datePrecision: 'DAY',
    summary: `A British force of approximately 2,600 troops under General William Tryon landed at New Haven on July 5, 1779, as part of a broader campaign to punish Connecticut's coastline. The invaders advanced through the town, looting and skirmishing with hastily organized militia and volunteers — including Yale professor Naphtali Daggett, who was captured, beaten, and bayoneted.

The British occupied New Haven for two days before withdrawing. The damage was less severe than at Danbury or New London, partly because some British officers restrained their troops from widespread destruction. But the raid demonstrated the vulnerability of Connecticut's coastal towns and the human cost of defiance.`,
    significanceWeight: 75,
    lat: 41.3083,
    lng: -72.9279,
    town: { connect: { id: 'us-ct-new-haven' } },
  },
  {
    id: 'event-new-haven-arnold-marches-cambridge',
    name: 'Arnold Leads New Haven Militia to Cambridge',
    startDate: new Date('1775-04-22'),
    datePrecision: 'DAY',
    summary: `When news of Lexington and Concord reached New Haven on April 21, 1775, Benedict Arnold — then a prosperous merchant and captain of a local militia company — demanded the keys to the town's powder magazine. When the selectmen hesitated, Arnold reportedly told them he would break in if necessary. He got the keys.

Arnold marched his company to Cambridge, where he proposed the expedition against Fort Ticonderoga that would yield the cannon Henry Knox later dragged to Boston. His departure from New Haven was the beginning of a military career that would produce both extraordinary heroism and the most famous act of treason in American history.`,
    significanceWeight: 70,
    lat: 41.3083,
    lng: -72.9279,
    town: { connect: { id: 'us-ct-new-haven' } },
  },
  {
    id: 'event-new-haven-yale-wartime',
    name: 'Yale College Continues Through the War',
    startDate: new Date('1776-01-01'),
    datePrecision: 'YEAR',
    summary: `Yale College maintained operations throughout the Revolution despite wartime disruption. The college was temporarily relocated to several Connecticut towns when the British raid of 1779 threatened New Haven. Students and faculty contributed to the war effort both intellectually and militarily.

Yale produced officers, chaplains, and political leaders who served throughout the conflict. The college's role as a training ground for Connecticut's leadership class meant that the ideas debated in its classrooms had direct influence on the colony's decision to support independence and its conduct during the war.`,
    significanceWeight: 60,
    lat: 41.3111,
    lng: -72.9267,
    town: { connect: { id: 'us-ct-new-haven' } },
  },
  {
    id: 'event-new-haven-daggett-defense',
    name: 'Professor Daggett Takes Up Arms',
    startDate: new Date('1779-07-05'),
    datePrecision: 'DAY',
    summary: `During the British raid on New Haven, Yale professor Naphtali Daggett — a sixty-two-year-old professor of divinity — grabbed a musket and rode out on horseback to join the militia defense. He fired at the advancing British from behind a stone wall before being captured.

British soldiers beat and bayoneted the elderly professor, leaving him seriously wounded. Daggett survived the assault but never fully recovered and died the following year. His defiance became a symbol of the town's resistance: even Yale's theologians were willing to fight.`,
    significanceWeight: 65,
    lat: 41.3120,
    lng: -72.9260,
    town: { connect: { id: 'us-ct-new-haven' } },
  },
  {
    id: 'event-new-haven-sherman-declaration',
    name: 'Sherman Signs the Declaration of Independence',
    startDate: new Date('1776-08-02'),
    datePrecision: 'DAY',
    summary: `Roger Sherman of New Haven signed the Declaration of Independence on August 2, 1776. Sherman had already served on the committee of five that drafted the document, alongside Jefferson, Franklin, Adams, and Livingston. His contributions to the committee's deliberations were characteristically practical and focused on building consensus.

Sherman's signing was part of a career of public service that would see him sign every major founding document of the nation. His role in the Declaration marked New Haven's direct connection to the act of independence itself.`,
    significanceWeight: 80,
    lat: 41.3083,
    lng: -72.9279,
    town: { connect: { id: 'us-ct-new-haven' } },
  },
  {
    id: 'event-new-haven-powder-magazine-confrontation',
    name: 'Arnold Confronts Selectmen at Powder Magazine',
    startDate: new Date('1775-04-22'),
    datePrecision: 'DAY',
    summary: `When New Haven's selectmen refused to immediately release the militia powder stores after news of Lexington arrived, Benedict Arnold confronted them with his armed company. The selectmen argued that they should wait for orders from the colonial legislature. Arnold, characteristically, had no patience for deliberation.

The confrontation — resolved when the selectmen handed over the keys — was a small incident with large implications. It demonstrated the tension between established authority and revolutionary urgency that played out in towns across the colonies. Arnold's willingness to act without authorization foreshadowed both his military boldness and his contempt for institutional constraints.`,
    significanceWeight: 60,
    lat: 41.3070,
    lng: -72.9285,
    town: { connect: { id: 'us-ct-new-haven' } },
  },
  {
    id: 'event-new-haven-committee-safety',
    name: 'New Haven Committee of Safety Organized',
    startDate: new Date('1774-12-01'),
    datePrecision: 'MONTH',
    summary: `New Haven organized its Committee of Safety in late 1774 as part of the network of local committees coordinating colonial resistance to British policies. The committee oversaw militia preparation, enforced non-importation agreements, and monitored Loyalist activity in the town.

New Haven's committee was particularly effective because of the town's concentrated political and intellectual leadership. Yale faculty, merchants, and lawyers served together, creating a body that combined practical authority with ideological conviction. The committee became the de facto local government as royal authority collapsed.`,
    significanceWeight: 55,
    lat: 41.3083,
    lng: -72.9279,
    town: { connect: { id: 'us-ct-new-haven' } },
  },
  {
    id: 'event-new-haven-provision-state',
    name: 'Connecticut Becomes "The Provision State"',
    startDate: new Date('1776-01-01'),
    datePrecision: 'YEAR',
    summary: `Connecticut, with New Haven as one of its principal towns, earned the nickname "The Provision State" for its extraordinary contributions of food, supplies, and manufactured goods to the Continental Army. Governor Jonathan Trumbull was the only colonial governor to support the Revolution, and his administration organized the state's resources with remarkable efficiency.

New Haven's harbor served as a shipping point for provisions sent to Washington's army, and the town's merchants and craftsmen contributed to the steady flow of material support that kept Continental forces in the field during the war's most difficult years.`,
    significanceWeight: 60,
    lat: 41.3083,
    lng: -72.9279,
    town: { connect: { id: 'us-ct-new-haven' } },
  },
];

export const newHavenStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-new-haven-sherman-quiet-architect',
    title: 'The Quiet Architect of Independence',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-new-haven-roger-sherman' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Roger Sherman did not have the eloquence of Jefferson, the fire of Adams, or the charm of Franklin. He had something more useful: the ability to find the position that everyone could agree on. In a revolution driven by passionate arguments, Sherman was the man who built consensus.

He started as a cobbler in Massachusetts, teaching himself law, mathematics, and astronomy from books. By the time the Revolution began, he was a respected judge and political figure in New Haven — a self-made man in a world dominated by inherited wealth and college education. His rise was a testament to practical intelligence applied with relentless discipline.

In the Continental Congress, Sherman was a workhorse. He served on more committees than almost any other delegate. He was appointed to the committee of five that drafted the Declaration of Independence — alongside Jefferson, Franklin, Adams, and Livingston — though his contribution to the document's language was less than his contribution to the political consensus that made it possible.

His most enduring achievement came later, at the Constitutional Convention in 1787, where he proposed the Great Compromise: a two-house legislature with proportional representation in the House and equal representation in the Senate. Without Sherman's compromise, the small states and large states might never have agreed to a single constitution.

Sherman is the only person to have signed all four foundational documents of the American republic. He died in New Haven in 1793, and his grave in the Grove Street Cemetery is visited by fewer people each year. The quiet architects of revolution rarely get the attention they deserve. Sherman would probably have been fine with that. He was interested in results, not credit.`,
    audioScript: `Roger Sherman did not have Jefferson's eloquence or Adams's fire. He had something more useful: the ability to find positions everyone could agree on.

He started as a cobbler, teaching himself law from books. By the Revolution he was a respected New Haven judge. In Congress, he served on more committees than almost any other delegate and was appointed to the committee that drafted the Declaration.

His greatest achievement: the Great Compromise at the Constitutional Convention — two houses, proportional and equal representation. Without it, the states might never have agreed to a constitution.

Sherman is the only person to sign all four foundational American documents. The quiet architects of revolution rarely get the attention they deserve. Sherman would probably have been fine with that.`,
    tags: ['statesmanship', 'Declaration', 'Constitution', 'compromise'],
    town: { connect: { id: 'us-ct-new-haven' } },
  },
  {
    id: 'story-new-haven-modern-yale-revolution',
    title: 'The College That Went to War',
    storyType: 'MODERN_VOICE',
    narratorName: 'University Archivist',
    narratorRole: 'Yale University Library',
    verificationStatus: 'UNVERIFIED',
    textVersion: `When visitors see Yale today — the Gothic architecture, the elm-lined courtyards — they do not immediately think of the Revolution. But the college was deeply entangled with the war, and the archives tell a story of institutional survival, intellectual contribution, and direct physical danger.

The most vivid episode is the British raid of 1779. Professor Naphtali Daggett, a sixty-two-year-old theologian, rode out with a musket to join the militia defense. He was captured, beaten, bayoneted, and left for dead. He survived, but barely, and died the following year. The image of a divinity professor fighting redcoats in the streets tells you something about what the Revolution meant to this community.

The college produced an outsized number of officers and political leaders relative to its small enrollment. Nathan Hale, class of 1773, was hanged as a spy in New York. Aaron Burr, class of 1772, served as an officer before his more complicated political career. The connections between Yale's classrooms and the Revolution's leadership are everywhere in the records.

What I find most interesting in the archives is the evidence of how the college adapted to wartime disruption. Classes were relocated when the British threatened New Haven. Students left to serve and came back — or did not come back. Faculty debated the political questions of the day while also debating how to keep the institution functioning with depleted enrollment and uncertain finances.

Ezra Stiles, who served as president during the war years, kept a diary that is one of the richest primary sources for wartime Connecticut. He recorded troop movements, political developments, weather patterns, and theological reflections in the same entries. The diary is a window into a mind trying to make sense of revolution while running a college. It is messy and brilliant and very human.`,
    audioScript: `Yale's archives tell a story of institutional survival and direct danger during the Revolution. Professor Daggett, a sixty-two-year-old theologian, rode out with a musket against the British in 1779, was captured and bayoneted. A divinity professor fighting redcoats tells you what the Revolution meant here.

Nathan Hale, class of 1773, hanged as a spy. Aaron Burr, class of 1772, served as an officer. The connections between Yale's classrooms and the Revolution's leadership are everywhere.

Ezra Stiles's diary — recording troop movements, politics, weather, and theology in the same entries — is one of the richest sources for wartime Connecticut. A mind trying to make sense of revolution while running a college. Messy, brilliant, and very human.`,
    tags: ['Yale', 'education', 'archives', 'Daggett'],
    town: { connect: { id: 'us-ct-new-haven' } },
  },
];

// ============================================================================
// NEW LONDON
// ============================================================================

export const newLondonTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `New London bore one of the war's most devastating raids, led by the most infamous American traitor. On September 6, 1781, Benedict Arnold — now a British brigadier general — attacked his home state with a force of approximately 1,700 troops. The assault on New London and the companion attack on Fort Griswold across the Thames River in Groton left over 140 American defenders dead, the town largely burned, and the Connecticut coast shattered.

Before the raid, New London had been one of Connecticut's most active privateering ports. Its deep harbor sheltered vessels that preyed on British shipping throughout the war, and the town's wharves were stacked with captured goods. New London's privateers were a persistent irritation to the British, and Arnold's attack was intended to eliminate the threat and destroy the warehouses full of captured merchandise.

The burning of New London was particularly bitter because Arnold knew the town intimately. He had grown up in nearby Norwich and conducted business in New London before the war. He knew which warehouses held the most valuable goods, which roads led where, and how the town's defenses were organized. His local knowledge made the raid more effective and the betrayal more personal.

New London rebuilt, but the memory of the raid defined the town's Revolutionary identity. The destruction of property and the massacre at Fort Griswold across the river made September 6, 1781, one of the darkest days of the war for Connecticut — made darker still because the man who ordered it had once been one of their own.`,
};

export const newLondonPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-new-london-benedict-arnold-nl',
    name: 'Benedict Arnold',
    roles: ['British Brigadier General', 'Former Continental Officer', 'Traitor'],
    bioShort:
      'The former Continental hero who led the British raid on New London in September 1781. Arnold\'s intimate knowledge of the Connecticut coast made his attack devastatingly effective. The raid was one of his last significant military actions during the war.',
    birthYear: 1741,
    deathYear: 1801,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-new-london-nathaniel-shaw',
    name: 'Nathaniel Shaw Jr.',
    roles: ['Merchant', 'Privateer Agent', 'Naval Agent for Connecticut'],
    bioShort:
      'New London\'s wealthiest merchant who served as Connecticut\'s naval agent, coordinating privateering operations and managing the sale of captured British goods. His mansion served as the headquarters for the town\'s maritime war effort.',
    birthYear: 1735,
    deathYear: 1782,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-new-london-guy-richards',
    name: 'Captain Guy Richards',
    roles: ['Privateer Captain', 'New London Mariner'],
    bioShort:
      'New London privateer captain who commanded several vessels preying on British shipping. His captures contributed to the town\'s reputation as one of Connecticut\'s most productive privateering ports and helped provoke the British raid that destroyed the town.',
    birthYear: 1740,
    deathYear: 1800,
    verificationStatus: 'ANECDOTAL',
  },
  {
    id: 'person-new-london-thomas-mumford',
    name: 'Thomas Mumford',
    roles: ['Merchant', 'Patriot Leader', 'Privateer Investor'],
    bioShort:
      'Prominent New London merchant who invested in privateering ventures and served on the town\'s Committee of Safety. His warehouse was among those destroyed during Arnold\'s 1781 raid.',
    birthYear: 1730,
    deathYear: 1799,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-new-london-samuel-green',
    name: 'Captain Samuel Green',
    roles: ['Continental Navy Captain', 'New London Mariner'],
    bioShort:
      'New London sea captain who served in the Continental Navy before turning to privateering. His career exemplified the fluid boundary between naval service and private warfare that characterized Connecticut\'s maritime contribution to the Revolution.',
    birthYear: 1738,
    deathYear: 1805,
    verificationStatus: 'ANECDOTAL',
  },
  {
    id: 'person-new-london-hannah-arnold',
    name: 'Hannah Arnold',
    roles: ['Benedict Arnold\'s Sister', 'New London Resident'],
    bioShort:
      'Benedict Arnold\'s sister who reportedly still lived in the New London area when her brother led the British raid. The personal dimensions of Arnold\'s attack on his home region are embodied in figures like Hannah, caught between family loyalty and community devastation.',
    birthYear: 1742,
    deathYear: 1803,
    verificationStatus: 'ANECDOTAL',
  },
  {
    id: 'person-new-london-timothy-green',
    name: 'Timothy Green',
    roles: ['Printer', 'Publisher', 'Patriot'],
    bioShort:
      'New London printer whose Connecticut Gazette was one of the colony\'s most important newspapers. His press published patriot arguments, military news, and government proclamations throughout the war. His printing shop was destroyed in Arnold\'s raid.',
    birthYear: 1737,
    deathYear: 1796,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-new-london-abigail-hinman',
    name: 'Abigail Hinman',
    roles: ['Civilian', 'War Survivor', 'New London Resident'],
    bioShort:
      'New London resident whose account of the September 1781 raid describes the panic of civilians fleeing with what possessions they could carry as Arnold\'s troops set fire to the town. Her testimony represents the experiences of ordinary people caught in the war\'s destruction.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ORAL_TRADITION',
  },
];

export const newLondonEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-new-london-arnold-raid',
    name: 'Arnold\'s Raid on New London',
    startDate: new Date('1781-09-06'),
    datePrecision: 'DAY',
    summary: `On September 6, 1781, Benedict Arnold led approximately 1,700 British troops in a devastating raid on New London, Connecticut. Arnold, who had grown up nearby and knew the coast intimately, directed the assault with efficiency. His force captured the town, burned approximately 150 buildings including warehouses filled with privateering spoils, and destroyed much of the waterfront.

The raid was intended to eliminate New London as a privateering base and to create a diversion drawing Continental troops away from Washington's march toward Yorktown. The destruction was extensive, but the diversion failed — Washington continued south, and the siege of Yorktown began less than a month later. The burning of New London was one of Arnold's last significant military actions.`,
    significanceWeight: 85,
    lat: 41.3557,
    lng: -72.0995,
    town: { connect: { id: 'us-ct-new-london' } },
  },
  {
    id: 'event-new-london-privateering-operations',
    name: 'New London Privateering Operations',
    startDate: new Date('1776-03-01'),
    datePrecision: 'MONTH',
    summary: `New London became one of Connecticut's most active privateering ports after Congress authorized letters of marque. The town's deep harbor, experienced mariners, and wealthy merchant investors like Nathaniel Shaw Jr. combined to produce a steady stream of privateer voyages that captured British vessels throughout the war.

The captured goods — including provisions, munitions, and trade merchandise — were auctioned in New London and contributed significantly to both the local economy and the war effort. The town's success as a privateering port made it a prime target for British retaliation, culminating in Arnold's devastating 1781 raid.`,
    significanceWeight: 70,
    lat: 41.3560,
    lng: -72.1000,
    town: { connect: { id: 'us-ct-new-london' } },
  },
  {
    id: 'event-new-london-shaw-mansion-hq',
    name: 'Shaw Mansion Becomes Naval Agent Headquarters',
    startDate: new Date('1775-11-01'),
    datePrecision: 'MONTH',
    summary: `Nathaniel Shaw Jr.'s mansion in New London served as Connecticut's naval operations headquarters. Shaw was appointed naval agent for the colony, managing privateering operations, coordinating with the Continental Navy, and overseeing the sale and distribution of captured British goods.

The Shaw Mansion became the nerve center of Connecticut's maritime war. Captains received their commissions and instructions here, prize goods were catalogued and auctioned, and intelligence about British shipping movements was collected and disseminated. The mansion still stands and serves as a museum.`,
    significanceWeight: 65,
    lat: 41.3545,
    lng: -72.0980,
    town: { connect: { id: 'us-ct-new-london' } },
  },
  {
    id: 'event-new-london-town-burning',
    name: 'Burning of New London',
    startDate: new Date('1781-09-06'),
    datePrecision: 'DAY',
    summary: `During Arnold's raid, approximately 150 buildings in New London were burned, including warehouses, homes, shops, and wharves. The destruction of the waterfront was particularly severe, as the warehouses contained large quantities of captured British goods that had been taken by privateers and stored for auction.

The fire spread beyond the British soldiers' control in some areas, destroying property that may not have been deliberately targeted. The scale of the destruction left much of New London's population homeless and devastated the town's economy. Rebuilding took years, and the memory of the burning shaped the town's identity for generations.`,
    significanceWeight: 80,
    lat: 41.3550,
    lng: -72.0990,
    town: { connect: { id: 'us-ct-new-london' } },
  },
  {
    id: 'event-new-london-hannah-capture',
    name: 'Capture of the Privateer Hannah',
    startDate: new Date('1776-04-01'),
    datePrecision: 'MONTH',
    summary: `The Hannah, one of New London's early privateer vessels, exemplified both the promise and risk of privateering. Outfitted by local investors and crewed by New London mariners, the vessel captured several British prizes before eventually being taken by a Royal Navy warship.

The Hannah's career illustrated the high-stakes gamble of privateering: successful cruises could return enormous profits to investors and crews, but capture meant the loss of ship, cargo, and the freedom of every man aboard. Many privateer crews spent years in British prison ships or jails.`,
    significanceWeight: 55,
    lat: 41.3560,
    lng: -72.1010,
    town: { connect: { id: 'us-ct-new-london' } },
  },
  {
    id: 'event-new-london-committee-correspondence',
    name: 'New London Committee of Correspondence',
    startDate: new Date('1773-12-01'),
    datePrecision: 'MONTH',
    summary: `New London established its Committee of Correspondence as part of the intercolonial network organizing resistance to British policies. The committee communicated with counterparts in other Connecticut towns and in neighboring colonies, sharing intelligence and coordinating opposition to the Tea Act and subsequent Coercive Acts.

New London's maritime connections made its committee particularly effective at gathering intelligence about British naval movements and trade enforcement. The information flowing through the town's merchant networks became a valuable resource for the broader resistance movement.`,
    significanceWeight: 55,
    lat: 41.3557,
    lng: -72.0995,
    town: { connect: { id: 'us-ct-new-london' } },
  },
  {
    id: 'event-new-london-post-raid-rebuilding',
    name: 'New London Begins Rebuilding',
    startDate: new Date('1781-10-01'),
    datePrecision: 'MONTH',
    summary: `In the weeks following Arnold's devastating raid, New London residents began the slow process of rebuilding. The destruction of homes, businesses, and warehouses left much of the population displaced. Connecticut's legislature provided some assistance, and neighboring towns sent supplies.

The rebuilding process took years and was complicated by the ongoing war. But the town's determination to recover reflected the broader Connecticut pattern of resilience. New London would regain its position as a significant port, though the memory of the burning remained a defining aspect of the town's Revolutionary experience.`,
    significanceWeight: 50,
    lat: 41.3557,
    lng: -72.0995,
    town: { connect: { id: 'us-ct-new-london' } },
  },
  {
    id: 'event-new-london-washington-visits',
    name: 'Washington Visits New London',
    startDate: new Date('1776-04-10'),
    datePrecision: 'DAY',
    summary: `George Washington visited New London in April 1776 during his journey from Boston to New York. He inspected the harbor defenses and met with local leaders about the town's contribution to the war effort. The visit underscored New London's importance as a military and maritime asset for the Continental cause.

Washington recognized the strategic value of New London's harbor and its privateering potential. His assessment of the town's defenses contributed to the decision to invest in coastal fortifications, though the defenses would ultimately prove insufficient against Arnold's 1781 assault.`,
    significanceWeight: 55,
    lat: 41.3557,
    lng: -72.0995,
    town: { connect: { id: 'us-ct-new-london' } },
  },
];

export const newLondonStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-new-london-arnold-returns',
    title: 'The Traitor Comes Home',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-new-london-benedict-arnold-nl' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Benedict Arnold knew these waters. He had sailed them as a merchant, conducting business between New London and the Caribbean. He knew where the harbor was deep and where it was shallow, which buildings held the most valuable goods, and how the town's modest defenses were arranged. When he returned to Connecticut on September 6, 1781, he brought that knowledge in service of the enemy.

Arnold had been a British officer for less than a year, but the raid on New London was his most consequential action in his new uniform. He led approximately 1,700 troops against the town while a companion force attacked Fort Griswold across the Thames River in Groton. The military objective was clear: destroy the privateering base that had been harassing British shipping.

The town burned. Warehouses stacked with captured British goods — the fruits of years of successful privateering — went up in flames. Homes, shops, wharves, nearly 150 buildings in all. Some of the fires spread beyond what Arnold may have intended, but the destruction was immense regardless.

What made the raid uniquely painful was not the scale of the damage but the identity of the attacker. Arnold had grown up in nearby Norwich. These were his neighbors, his former trading partners, people who had watched him march off to Cambridge in 1775 as a patriot militia captain. The same man who had bled for the cause at Quebec and Saratoga now directed British regulars in burning Connecticut towns.

The raid achieved its military objective but failed strategically. It was meant to divert Continental troops from Washington's march toward Yorktown. Washington was not diverted. Less than a month after Arnold burned New London, Cornwallis surrendered at Yorktown. The war was effectively over, and Arnold had contributed nothing to the British cause that mattered. His treason, in the end, was as futile as it was infamous.`,
    audioScript: `Arnold knew these waters — he had sailed them as a merchant. He knew the harbor, the warehouses, the defenses. When he returned on September 6, 1781, he brought that knowledge in service of the enemy.

Nearly 150 buildings burned. Warehouses of captured goods, homes, shops, wharves. What made it uniquely painful was the identity of the attacker — a man who had grown up nearby, who had bled for the cause at Quebec and Saratoga.

The raid was meant to divert troops from Washington's march to Yorktown. Washington was not diverted. Less than a month later, Cornwallis surrendered. Arnold's treason, in the end, was as futile as it was infamous.`,
    tags: ['treason', 'Arnold', 'burning', 'privateering'],
    town: { connect: { id: 'us-ct-new-london' } },
  },
  {
    id: 'story-new-london-modern-shaw-mansion',
    title: 'The Merchant\'s War Room',
    storyType: 'MODERN_VOICE',
    narratorName: 'Executive Director',
    narratorRole: 'New London County Historical Society',
    verificationStatus: 'UNVERIFIED',
    textVersion: `The Shaw Mansion is one of those Revolutionary War sites that tells a story people do not expect. Visitors come anticipating a preserved colonial house — and it is that. But what makes it remarkable is its role during the war as Connecticut's naval operations headquarters.

Nathaniel Shaw Jr. was not a soldier. He was a merchant, and his weapon was commerce. As Connecticut's naval agent, he coordinated privateering operations from this house. Captains received commissions here. Prize goods were catalogued. Intelligence about British shipping was collected and shared with Continental forces. The mansion was a war room disguised as a gentleman's residence.

The privateering story is the one we try to bring to life for visitors. New London sent out dozens of privateering voyages during the war, capturing British vessels and bringing their cargoes back to the town's wharves. The system was part patriotism and part business: investors fronted the money to outfit ships, crews signed on for shares of captured goods, and the entire community benefited from the auctions of seized merchandise.

It was also dangerous. Ships were lost. Crews were captured and imprisoned. But the aggregate impact was significant — New London's privateers disrupted British supply lines and generated revenue that supported the war effort.

The raid that destroyed the town in 1781 was, in a sense, testimony to how effective the privateering operations had been. The British did not burn New London out of casual malice. They burned it because it had been hurting them. Arnold's intimate knowledge of the town made the raid devastatingly efficient, but the fact that the British sent an expedition at all tells you how much damage New London's maritime war had done.

The mansion survived the burning, though the town around it did not. It stands today as a reminder that the Revolution was fought not only on battlefields but in counting houses and on open water.`,
    audioScript: `The Shaw Mansion was Connecticut's naval operations headquarters during the Revolution. Nathaniel Shaw Jr. coordinated privateering from this house — captains received commissions, prize goods were catalogued, intelligence was collected.

New London sent dozens of privateering voyages, capturing British vessels and auctioning their cargoes. The system was part patriotism, part business. It was also dangerous — ships were lost, crews captured.

The 1781 raid was testimony to how effective the operations had been. The British did not burn New London casually — they burned it because it had been hurting them. The mansion survived. The town around it did not.`,
    tags: ['privateering', 'Shaw Mansion', 'maritime', 'commerce'],
    town: { connect: { id: 'us-ct-new-london' } },
  },
];

// ============================================================================
// DANBURY
// ============================================================================

export const danburyTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Danbury learned the cost of being useful to the American cause when the British decided to destroy it. In April 1777, a British expeditionary force of approximately 2,000 troops under General William Tryon landed at Compo Beach in Westport and marched inland to Danbury, where the Continental Army had established a critical supply depot. The raid destroyed an enormous quantity of provisions, tents, and military equipment that the American army desperately needed.

The attack on Danbury was part of the British strategy of targeting infrastructure rather than engaging the Continental Army directly in Connecticut. The supply depot held food, clothing, tents, and hospital stores that had been collected for the coming campaign season. Its destruction was a significant logistical setback that rippled through the northern theater for months.

The American response, though too late to save the supplies, produced one of the war's more notable engagements. Continental and militia forces under David Wooster and Benedict Arnold harassed the British retreat at the Battle of Ridgefield. Wooster was mortally wounded leading a rear attack, and Arnold had a horse shot from under him during fierce fighting in the streets of Ridgefield. The counterattack did not recover the lost supplies, but it inflicted casualties and demonstrated that inland raids would not go unpunished.

The Danbury raid also gave rise to one of the Revolution's most enduring legends: the ride of Sybil Ludington. According to tradition, the sixteen-year-old daughter of militia Colonel Henry Ludington rode through the night to muster her father's regiment, covering forty miles on horseback to spread the alarm. Whether the details are precise or embellished, the story captures a truth about the war: it depended on networks of ordinary people doing extraordinary things.`,
};

export const danburyPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-danbury-sybil-ludington',
    name: 'Sybil Ludington',
    roles: ['Messenger', 'Militia Colonel\'s Daughter', 'Folk Heroine'],
    bioShort:
      'Sixteen-year-old daughter of militia Colonel Henry Ludington who, according to tradition, rode forty miles through the night to muster her father\'s regiment after the British attack on Danbury. Her ride, though less documented than Paul Revere\'s, has become one of the Revolution\'s most celebrated acts of civilian courage.',
    birthYear: 1761,
    deathYear: 1839,
    verificationStatus: 'ORAL_TRADITION',
  },
  {
    id: 'person-danbury-william-tryon-danbury',
    name: 'General William Tryon',
    roles: ['British General', 'Raid Commander', 'Former Royal Governor'],
    bioShort:
      'British general who led the punitive expedition against Danbury in April 1777, destroying the Continental supply depot. Tryon\'s raids on Connecticut were designed to punish communities supporting the rebellion and divert American military resources.',
    birthYear: 1729,
    deathYear: 1788,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-danbury-david-wooster-danbury',
    name: 'David Wooster',
    roles: ['Continental Army Brigadier General', 'Connecticut Militia Commander'],
    bioShort:
      'Sixty-six-year-old Continental general who was mortally wounded at the Battle of Ridgefield while pursuing the British force retreating from Danbury. His death in pursuit of the raiders made him one of the war\'s oldest combat casualties among general officers.',
    birthYear: 1711,
    deathYear: 1777,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-danbury-henry-ludington',
    name: 'Colonel Henry Ludington',
    roles: ['Militia Colonel', 'Dutchess County Commander', 'Patriot Leader'],
    bioShort:
      'Militia colonel whose regiment was mustered in response to the Danbury raid, reportedly after his daughter Sybil rode through the night to spread the alarm. Ludington commanded local defense forces throughout the war.',
    birthYear: 1739,
    deathYear: 1817,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-danbury-joseph-platt-cooke',
    name: 'Colonel Joseph Platt Cooke',
    roles: ['Continental Army Colonel', 'Danbury Garrison Commander'],
    bioShort:
      'Continental officer commanding the small garrison at Danbury when the British attacked. Outnumbered and unable to defend the supply depot, Cooke managed to save some of the stores before the British overwhelmed the position.',
    birthYear: 1730,
    deathYear: 1816,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-danbury-benedict-arnold-danbury',
    name: 'Benedict Arnold',
    roles: ['Continental Army General', 'Field Commander'],
    bioShort:
      'Arnold helped lead the American counterattack at the Battle of Ridgefield during the British retreat from Danbury. He had a horse shot from under him and fought in the streets of Ridgefield, demonstrating the reckless personal courage that marked all his combat actions.',
    birthYear: 1741,
    deathYear: 1801,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-danbury-loyalist-guide',
    name: 'Unnamed Loyalist Guides',
    roles: ['Loyalist Informants', 'British Guides'],
    bioShort:
      'Local Loyalists who guided the British expedition from the coast to Danbury. Their knowledge of inland roads and the supply depot\'s location was essential to the raid\'s success. The use of Loyalist guides reflected the civil war dimension of the Revolution in Connecticut.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ORAL_TRADITION',
  },
  {
    id: 'person-danbury-mary-wooster',
    name: 'Mary Clap Wooster',
    roles: ['General\'s Wife', 'War Widow', 'New Haven Resident'],
    bioShort:
      'Wife of General David Wooster who was left widowed when her husband was mortally wounded at Ridgefield. Her petition to Congress for a pension documented her husband\'s service and the financial hardship faced by officers\' families.',
    birthYear: 1718,
    deathYear: 1805,
    verificationStatus: 'VERIFIED',
  },
];

export const danburyEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-danbury-british-raid',
    name: 'British Raid on Danbury',
    startDate: new Date('1777-04-26'),
    datePrecision: 'DAY',
    summary: `Approximately 2,000 British troops under General William Tryon landed at Compo Beach in Westport on April 25, 1777, and marched to Danbury, arriving on April 26. The Continental supply depot at Danbury contained vast quantities of provisions, tents, medical supplies, and military equipment.

The British systematically destroyed the stores and set fire to much of the town. The loss was staggering: nearly 4,000 barrels of beef and pork, 5,000 pairs of shoes, hundreds of tents, and large quantities of grain and rum. The destruction was a significant blow to Continental logistics for the coming campaign season.`,
    significanceWeight: 80,
    lat: 41.3948,
    lng: -73.4540,
    town: { connect: { id: 'us-ct-danbury' } },
  },
  {
    id: 'event-danbury-ludington-ride',
    name: 'Sybil Ludington\'s Midnight Ride',
    startDate: new Date('1777-04-26'),
    datePrecision: 'DAY',
    summary: `According to tradition, sixteen-year-old Sybil Ludington rode approximately forty miles through the night of April 26, 1777, to muster her father Colonel Henry Ludington's militia regiment after news of the British attack on Danbury arrived. She rode through Putnam County, New York, knocking on doors and spreading the alarm.

The historical evidence for the ride is thinner than for Paul Revere's more famous journey, resting primarily on later family accounts and local tradition. But the story has been widely accepted and commemorated. A statue of Sybil on horseback stands in Carmel, New York, and her ride has been recognized by the Daughters of the American Revolution and the U.S. Postal Service.`,
    significanceWeight: 70,
    lat: 41.4300,
    lng: -73.6800,
    town: { connect: { id: 'us-ct-danbury' } },
  },
  {
    id: 'event-danbury-battle-ridgefield',
    name: 'Battle of Ridgefield',
    startDate: new Date('1777-04-27'),
    datePrecision: 'DAY',
    summary: `American forces under David Wooster and Benedict Arnold engaged the British column retreating from Danbury on April 27, 1777. Wooster attacked the British rear guard and was mortally wounded. Arnold set up a defensive barricade in the streets of Ridgefield but was overwhelmed when the British outflanked his position. He had a horse shot from under him and narrowly escaped capture.

The engagement did not recover the supplies destroyed at Danbury, but it inflicted casualties on the retreating British and demonstrated that inland raids would be contested. The battle also contributed to Arnold's promotion to major general, temporarily addressing his grievances about rank.`,
    significanceWeight: 75,
    lat: 41.2815,
    lng: -73.4984,
    town: { connect: { id: 'us-ct-danbury' } },
  },
  {
    id: 'event-danbury-supply-depot-established',
    name: 'Continental Supply Depot Established at Danbury',
    startDate: new Date('1776-09-01'),
    datePrecision: 'MONTH',
    summary: `The Continental Army established a supply depot at Danbury in the fall of 1776, using the town's inland location as protection against British naval raids. The depot accumulated provisions, clothing, tents, and military equipment collected from across Connecticut for distribution to Continental forces.

Danbury's selection as a depot site reflected its position on inland roads connecting the Connecticut coast to the Hudson Valley. The depot's growing stockpiles made it an increasingly valuable target, and intelligence about its contents eventually reached British commanders, who planned the April 1777 raid specifically to destroy it.`,
    significanceWeight: 65,
    lat: 41.3948,
    lng: -73.4540,
    town: { connect: { id: 'us-ct-danbury' } },
  },
  {
    id: 'event-danbury-wooster-death',
    name: 'Death of General Wooster',
    startDate: new Date('1777-05-02'),
    datePrecision: 'DAY',
    summary: `General David Wooster died on May 2, 1777, from wounds received at the Battle of Ridgefield five days earlier. At sixty-six, he was one of the oldest general officers to die in combat during the Revolution. His death was mourned across Connecticut, and his widow Mary petitioned Congress for a pension.

Wooster's willingness to pursue the British retreating from Danbury, despite his age and the risks, exemplified the determination that characterized Connecticut's response to British raids. His death, while a loss, helped galvanize public opinion in the state against the British campaign of coastal destruction.`,
    significanceWeight: 65,
    lat: 41.3948,
    lng: -73.4540,
    town: { connect: { id: 'us-ct-danbury' } },
  },
  {
    id: 'event-danbury-town-rebuilding',
    name: 'Danbury Begins Rebuilding',
    startDate: new Date('1777-05-01'),
    datePrecision: 'MONTH',
    summary: `After the British withdrawal, Danbury's residents returned to find much of their town destroyed. The rebuilding process was slow, complicated by the ongoing war and the loss of supplies that had been intended for the Continental Army. Connecticut's legislature provided some relief, and neighboring communities contributed assistance.

The town eventually recovered, but the raid fundamentally changed Danbury's relationship to the war. What had been an interior supply depot, seemingly safe from British attack, had been shown to be vulnerable. The lesson was clear: nowhere in Connecticut was truly beyond the reach of British expeditionary forces.`,
    significanceWeight: 50,
    lat: 41.3948,
    lng: -73.4540,
    town: { connect: { id: 'us-ct-danbury' } },
  },
  {
    id: 'event-danbury-british-landing-compo',
    name: 'British Landing at Compo Beach',
    startDate: new Date('1777-04-25'),
    datePrecision: 'DAY',
    summary: `The British expeditionary force of approximately 2,000 troops landed at Compo Beach in Westport on the evening of April 25, 1777. Guided by local Loyalists who knew the inland roads, the force marched through the night toward Danbury, approximately twenty-five miles to the north.

The landing was unopposed — American forces had no advance warning of the expedition. The element of surprise, combined with Loyalist intelligence about the supply depot's location and contents, gave the British every advantage. By the time alarm riders spread news of the landing, the British were already well on their way to Danbury.`,
    significanceWeight: 60,
    lat: 41.1027,
    lng: -73.3390,
    town: { connect: { id: 'us-ct-danbury' } },
  },
  {
    id: 'event-danbury-arnold-promoted',
    name: 'Arnold Promoted After Ridgefield',
    startDate: new Date('1777-05-02'),
    datePrecision: 'DAY',
    summary: `Congress promoted Benedict Arnold to major general following his conduct at the Battle of Ridgefield, where he had rallied American forces and fought with conspicuous courage. The promotion addressed some of Arnold's long-standing grievances about being passed over for advancement.

However, Congress did not restore Arnold's seniority relative to officers who had been promoted ahead of him, leaving a wound that continued to fester. Arnold's resentment over rank and recognition — a grievance that Ridgefield temporarily eased but never resolved — would eventually contribute to his decision to betray the American cause.`,
    significanceWeight: 55,
    lat: 41.3948,
    lng: -73.4540,
    town: { connect: { id: 'us-ct-danbury' } },
  },
];

export const danburyStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-danbury-ludington-ride',
    title: 'The Ride They Almost Forgot',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-danbury-sybil-ludington' } },
    verificationStatus: 'ORAL_TRADITION',
    textVersion: `Sybil Ludington was sixteen years old on the night the British burned Danbury, and what she did — or what tradition says she did — has become one of the Revolution's most debated stories. The broad outline is consistent across accounts: she rode through the night to muster her father's militia regiment. The details are where the certainty fades.

According to the traditional account, a messenger arrived at the Ludington home in Dutchess County, New York, with news that the British were burning Danbury. Colonel Henry Ludington's regiment was scattered across the countryside, and the colonel needed to stay home to organize them as they arrived. Someone had to ride out and spread the alarm. Sybil volunteered.

She rode approximately forty miles through dark roads, knocking on doors, shouting the alarm, gathering her father's men. By dawn, the regiment was mustered and marched toward Danbury. The ride covered twice the distance of Paul Revere's more famous journey two years earlier.

The evidence for the ride rests primarily on family tradition and later accounts rather than contemporary documentation. There is no diary entry from that night, no newspaper account, no military report that confirms the details. This does not mean the ride did not happen — most civilian actions during the Revolution went unrecorded — but it means the story exists in the gray territory between documented fact and cherished legend.

What is documented is the result: Ludington's regiment mustered and participated in the American response to the Danbury raid. Someone spread the alarm. The tradition says it was a sixteen-year-old girl on horseback, and there is no evidence to contradict that claim. A statue of Sybil on horseback stands in Carmel, New York. Whether it commemorates a precise historical event or a compressed truth about the courage of ordinary people, it honors something real.`,
    audioScript: `Sybil Ludington was sixteen when the British burned Danbury. According to tradition, she rode forty miles through the night to muster her father's militia regiment — twice the distance of Paul Revere's more famous ride.

The evidence rests primarily on family tradition rather than contemporary documentation. No diary entry, no newspaper account, no military report confirms the details. But this does not mean it did not happen — most civilian actions went unrecorded.

What is documented is the result: Ludington's regiment mustered and marched. Someone spread the alarm. The tradition says it was a sixteen-year-old girl on horseback. A statue in Carmel, New York, honors something real, whether a precise event or a compressed truth about the courage of ordinary people.`,
    tags: ['midnight ride', 'Ludington', 'civilian courage', 'legend'],
    town: { connect: { id: 'us-ct-danbury' } },
  },
  {
    id: 'story-danbury-modern-supply-war',
    title: 'The War They Fought With Barrels and Boots',
    storyType: 'MODERN_VOICE',
    narratorName: 'Museum Director',
    narratorRole: 'Danbury Museum and Historical Society',
    verificationStatus: 'UNVERIFIED',
    textVersion: `People come to Danbury expecting a battlefield, and we have to explain that the most important thing that happened here was the destruction of a warehouse. That is not a dramatic story, but it is an essential one.

The Continental supply depot at Danbury held nearly 4,000 barrels of beef and pork, 5,000 pairs of shoes, hundreds of tents, and enormous quantities of grain, rum, and medical supplies. When the British burned it in April 1777, they destroyed months of careful accumulation — provisions that were supposed to sustain the Continental Army through the coming campaign season.

The logistical impact was severe. The Northern Army's operations in 1777 were hampered by the shortages that the Danbury raid created. Shoes, tents, food — the basic necessities that keep an army in the field — were suddenly in desperately short supply. The British understood something that popular history often overlooks: you can defeat an army by destroying its supplies as effectively as by defeating it on a battlefield.

What makes the Danbury story interesting to military historians is the British decision to go inland. Most British raids targeted coastal towns that could be reached by ship. Danbury was twenty-five miles from the coast, requiring a forced march through potentially hostile territory. The British accepted that risk because the supply depot was that important a target.

The American response — the counterattack at Ridgefield that killed General Wooster and showcased Arnold's recklessness — added a combat dimension to the story. But the real significance of Danbury is logistical. It was a war fought with barrels and boots, not just muskets and cannon. The British knew that. The Americans learned it the hard way.

We try to help visitors understand that the Revolution was won not just by brave soldiers but by the people who grew the food, sewed the clothes, forged the horseshoes, and organized the supply chains that kept those soldiers alive. Danbury's story is their story.`,
    audioScript: `The most important thing that happened in Danbury was the destruction of a warehouse. The supply depot held nearly 4,000 barrels of meat, 5,000 pairs of shoes, hundreds of tents. When the British burned it, they destroyed months of careful accumulation.

The British went twenty-five miles inland because the depot was that important. The real significance of Danbury is logistical — a war fought with barrels and boots, not just muskets and cannon.

We try to help visitors understand that the Revolution was won not just by soldiers but by people who grew food, sewed clothes, and organized supply chains. Danbury's story is their story.`,
    tags: ['logistics', 'supply depot', 'destruction', 'infrastructure'],
    town: { connect: { id: 'us-ct-danbury' } },
  },
];

// ============================================================================
// GROTON
// ============================================================================

export const grotonTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Groton's Revolutionary story is dominated by a single terrible afternoon: September 6, 1781, when British troops stormed Fort Griswold and massacred the garrison after it had surrendered. The attack, part of Benedict Arnold's coordinated assault on New London across the Thames River, produced the highest single-day casualty count for Connecticut defenders during the entire war and left a wound in the community's memory that has never fully healed.

Fort Griswold stood on Groton Heights, overlooking the Thames River and the harbor of New London. When Arnold's force split to attack both sides of the river, the contingent sent against Groton faced unexpected resistance. The fort's garrison, commanded by Colonel William Ledyard and consisting mainly of local militia, refused to retreat and defended the position fiercely. The British eventually overwhelmed the walls, but the fighting was costly and bitter.

What happened after the fort fell is what defines Groton's place in Revolutionary memory. According to multiple accounts, the British killed many of the garrison after they had surrendered. Colonel Ledyard reportedly offered his sword in surrender and was stabbed with it. The exact details are disputed — as they always are in accounts of wartime atrocities — but the essential facts are documented: approximately 85 Americans were killed and another 60 wounded, many of them after organized resistance had ceased.

The Groton Monument, a 134-foot granite obelisk erected in 1830 on the site of Fort Griswold, bears the names of the Americans who died. It was one of the first monuments in the country dedicated to Revolutionary War dead and reflects the depth of feeling the massacre generated. Fort Griswold itself is now a state park where visitors can walk the earthworks and read the names of the fallen.`,
};

export const grotonPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-groton-william-ledyard',
    name: 'Colonel William Ledyard',
    roles: ['Militia Colonel', 'Fort Griswold Commander', 'Martyr'],
    bioShort:
      'Commander of Fort Griswold who led the garrison\'s fierce defense against the British assault on September 6, 1781. After the fort was overwhelmed, Ledyard reportedly offered his sword in surrender and was stabbed with it by a British officer. His death became the central atrocity of the Fort Griswold massacre.',
    birthYear: 1738,
    deathYear: 1781,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-groton-william-montgomery',
    name: 'Major William Montgomery',
    roles: ['British Officer', 'Assault Commander'],
    bioShort:
      'British officer who led the initial assault on Fort Griswold and was killed during the fighting. His death enraged the British troops, contributing to the violence that followed the fort\'s surrender. The killing of a senior officer during an assault often led to retaliatory violence in eighteenth-century warfare.',
    birthYear: null,
    deathYear: 1781,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-groton-lambo-latham',
    name: 'Lambert (Lambo) Latham',
    roles: ['Militia Soldier', 'Fort Griswold Defender'],
    bioShort:
      'Groton militia soldier who fought in the defense of Fort Griswold and reportedly witnessed the killing of Colonel Ledyard after the surrender. Latham\'s account, passed down through family tradition, is one of the sources for the details of the massacre.',
    birthYear: 1752,
    deathYear: 1835,
    verificationStatus: 'ORAL_TRADITION',
  },
  {
    id: 'person-groton-jordan-freeman',
    name: 'Jordan Freeman',
    roles: ['Free Black Soldier', 'Fort Griswold Defender', 'Patriot Martyr'],
    bioShort:
      'Free Black man who fought in the defense of Fort Griswold and was killed during the battle. According to tradition, Freeman killed the British officer Major Montgomery with a spear during the assault. His name is inscribed on the Groton Monument alongside the other defenders.',
    birthYear: 1751,
    deathYear: 1781,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-groton-lambert-avery',
    name: 'Captain Lambert Avery',
    roles: ['Militia Captain', 'Fort Griswold Defender'],
    bioShort:
      'Groton militia captain who fought in the defense of Fort Griswold and was among those killed after the fort\'s surrender. His death, alongside Colonel Ledyard and the other defenders, is commemorated on the Groton Monument.',
    birthYear: 1745,
    deathYear: 1781,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-groton-stephen-hempstead',
    name: 'Stephen Hempstead',
    roles: ['Continental Soldier', 'Groton Resident', 'Diarist'],
    bioShort:
      'Groton-born Continental soldier whose diary provides valuable firsthand accounts of military life during the Revolution. Though not present at the Fort Griswold massacre, his writings document the community\'s response to the attack and its aftermath.',
    birthYear: 1754,
    deathYear: 1831,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-groton-anna-warner-bailey',
    name: 'Anna Warner Bailey',
    roles: ['Civilian Heroine', 'Fort Griswold Legend', 'Patriot'],
    bioShort:
      'Known as "Mother Bailey," she reportedly brought flannel petticoats to the fort to be used as wadding for the cannon during the battle. Her act of civilian support became one of the most celebrated stories of female patriotism in Connecticut\'s Revolutionary tradition.',
    birthYear: 1758,
    deathYear: 1851,
    verificationStatus: 'ORAL_TRADITION',
  },
  {
    id: 'person-groton-ebenezer-avery',
    name: 'Ebenezer Avery',
    roles: ['Militia Soldier', 'Fort Griswold Survivor', 'Wounded Veteran'],
    bioShort:
      'Groton militia soldier who survived the Fort Griswold massacre despite severe wounds. He was among those placed on a cart by British soldiers and sent down the steep hill from the fort, a brutal act that injured the wounded further. His survival account documents the aftermath of the battle.',
    birthYear: 1750,
    deathYear: 1837,
    verificationStatus: 'VERIFIED',
  },
];

export const grotonEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-groton-fort-griswold-battle',
    name: 'Battle of Fort Griswold',
    startDate: new Date('1781-09-06'),
    datePrecision: 'DAY',
    summary: `On September 6, 1781, approximately 800 British troops assaulted Fort Griswold on Groton Heights as part of Benedict Arnold's coordinated attack on the Thames River communities. The fort's garrison of roughly 150 militia under Colonel William Ledyard defended fiercely, repulsing two assaults before the British breached the walls on the third attempt.

The fighting was intense — the British suffered approximately 200 casualties, including the death of Major Montgomery. After the fort fell, the massacre began. Accounts vary in detail, but the essential facts are consistent: many defenders were killed after resistance had ceased. Colonel Ledyard was stabbed with his own sword after offering it in surrender. Approximately 85 Americans were killed and 60 wounded.`,
    significanceWeight: 90,
    lat: 41.3535,
    lng: -72.0785,
    town: { connect: { id: 'us-ct-groton' } },
  },
  {
    id: 'event-groton-ledyard-surrender-killing',
    name: 'Killing of Colonel Ledyard After Surrender',
    startDate: new Date('1781-09-06'),
    datePrecision: 'DAY',
    summary: `After Fort Griswold was overwhelmed, Colonel William Ledyard reportedly offered his sword to a British officer in formal surrender. According to multiple American accounts, the officer took the sword and stabbed Ledyard with it. The killing of a surrendering commander was a violation of the conventions of eighteenth-century warfare and became the defining atrocity of the battle.

The exact identity of the officer who killed Ledyard has been debated. British accounts dispute or minimize the incident. But the American testimony — from survivors, from witnesses in the town, from subsequent investigations — is consistent enough that the basic narrative is considered reliable by most historians.`,
    significanceWeight: 85,
    lat: 41.3535,
    lng: -72.0785,
    town: { connect: { id: 'us-ct-groton' } },
  },
  {
    id: 'event-groton-freeman-kills-montgomery',
    name: 'Jordan Freeman Kills Major Montgomery',
    startDate: new Date('1781-09-06'),
    datePrecision: 'DAY',
    summary: `During the assault on Fort Griswold, free Black soldier Jordan Freeman reportedly killed Major William Montgomery with a spear as the British officer scaled the fort's walls. Montgomery's death during the assault was one of the factors that may have provoked the retaliatory violence against the garrison after its surrender.

Freeman himself was killed during the battle. His name is inscribed on the Groton Monument alongside the other defenders. His participation in the battle — a free Black man fighting and dying for the American cause — represents the diverse composition of the militia forces that defended Connecticut's coast.`,
    significanceWeight: 75,
    lat: 41.3535,
    lng: -72.0785,
    town: { connect: { id: 'us-ct-groton' } },
  },
  {
    id: 'event-groton-wounded-on-cart',
    name: 'Wounded Defenders Sent Down the Hill',
    startDate: new Date('1781-09-06'),
    datePrecision: 'DAY',
    summary: `After the battle, British soldiers placed wounded American defenders on a cart and sent it down the steep hill from Fort Griswold. The cart reportedly broke free and careened down the slope, further injuring and killing some of the wounded men. The act — whether deliberate cruelty or careless indifference — became part of the massacre's enduring horror.

Survivors' accounts of this episode contributed to the public outrage that followed news of the battle. The treatment of wounded prisoners violated widely accepted norms of military conduct and deepened Connecticut's determination to continue the fight.`,
    significanceWeight: 70,
    lat: 41.3535,
    lng: -72.0785,
    town: { connect: { id: 'us-ct-groton' } },
  },
  {
    id: 'event-groton-fort-griswold-construction',
    name: 'Fort Griswold Fortified',
    startDate: new Date('1775-01-01'),
    datePrecision: 'YEAR',
    summary: `Fort Griswold was fortified beginning in 1775 as part of the effort to defend the Thames River and New London harbor. The earthwork fortification on Groton Heights commanded views of the harbor and the river, providing a defensive position from which artillery could challenge British naval approaches.

The fort was designed to complement defenses on the New London side of the river. Its garrison was typically drawn from local militia, as the Continental Army could not spare regular troops for coastal defense. This reliance on militia meant that the fort's defenders in 1781 were local men — farmers, craftsmen, and sailors fighting on ground they knew intimately.`,
    significanceWeight: 55,
    lat: 41.3535,
    lng: -72.0785,
    town: { connect: { id: 'us-ct-groton' } },
  },
  {
    id: 'event-groton-bailey-petticoats',
    name: 'Anna Bailey Brings Flannel to the Fort',
    startDate: new Date('1781-09-06'),
    datePrecision: 'DAY',
    summary: `According to local tradition, Anna Warner Bailey — later known as "Mother Bailey" — brought flannel petticoats to Fort Griswold during the battle to be used as wadding for the garrison's cannon. The story, while difficult to verify from contemporary sources, became one of the most celebrated examples of female civilian support during the Revolution.

Bailey's legend grew over the decades after the war. She was honored in her later years as a living symbol of patriotic sacrifice, and her story was invoked whenever Connecticut celebrated its Revolutionary heritage. Whether the petticoat story is precisely accurate or represents a broader truth about civilian women's contributions to the defense, it remains part of Groton's Revolutionary identity.`,
    significanceWeight: 55,
    lat: 41.3535,
    lng: -72.0785,
    town: { connect: { id: 'us-ct-groton' } },
  },
  {
    id: 'event-groton-monument-erected',
    name: 'Groton Monument Erected',
    startDate: new Date('1830-09-06'),
    datePrecision: 'DAY',
    summary: `The Groton Monument, a 134-foot granite obelisk, was dedicated on the site of Fort Griswold on September 6, 1830 — the forty-ninth anniversary of the battle. It was one of the first monuments in the United States dedicated to Revolutionary War dead and bore the names of the defenders killed in the battle and massacre.

The monument's construction reflected decades of community effort to memorialize the event. Its height and permanence were deliberate statements about the significance of the sacrifice. The monument remains a central feature of the Fort Griswold Battlefield State Park and continues to serve as a memorial for ceremonies honoring the fallen defenders.`,
    significanceWeight: 50,
    lat: 41.3535,
    lng: -72.0785,
    town: { connect: { id: 'us-ct-groton' } },
  },
  {
    id: 'event-groton-community-aftermath',
    name: 'Groton Community Mourns and Recovers',
    startDate: new Date('1781-09-07'),
    datePrecision: 'DAY',
    summary: `The day after the battle, the people of Groton began the grim task of recovering their dead and caring for the wounded. In a small community where nearly every family was connected to the militia, the casualties represented an almost unbearable loss. Approximately 85 men were dead and 60 wounded — from a garrison of roughly 150.

The community's recovery was slow and shaped by grief. Widows and orphans of the fallen defenders petitioned for assistance. The memory of the massacre became a binding element of community identity, retold at commemorations and passed down through families for generations. Fort Griswold became sacred ground — a place where the cost of resistance was measured in names etched in granite.`,
    significanceWeight: 55,
    lat: 41.3535,
    lng: -72.0785,
    town: { connect: { id: 'us-ct-groton' } },
  },
];

export const grotonStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-groton-ledyard-sword',
    title: 'The Sword Turned Against Its Bearer',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-groton-william-ledyard' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Colonel William Ledyard had every reason to believe the fighting was over. His garrison had resisted three British assaults. His men had fought from behind earthworks, inflicting heavy casualties on the attackers. Major Montgomery lay dead at the base of the walls. But the fort was breached, the defenders overwhelmed, and the time had come to surrender.

Ledyard offered his sword — the universal gesture of honorable capitulation in eighteenth-century warfare. An officer took it. And then, according to multiple American accounts, that officer stabbed Ledyard with his own blade.

What followed was a massacre. British soldiers, many of them enraged by their losses and by Montgomery's death, killed defenders who had laid down their arms. The killing was not total — some Americans survived — but it was widespread enough that the event became one of the war's defining atrocities.

The exact count of the dead varied by account, but the Groton Monument, erected in 1830, lists approximately 85 names. These were local men: militia soldiers from Groton, New London, and surrounding towns. Farmers. Fishermen. Craftsmen. Men whose families lived within sight of the fort. The community lost nearly every family's father, son, or brother in a single afternoon.

The killing of Ledyard became the central image of the massacre — a commander murdered with his own sword in the act of surrender. It violated every convention of honorable warfare and shocked people on both sides of the conflict. British officers later disputed or minimized the incident, but the American testimony is consistent and comes from multiple independent sources.

Ledyard's name is the first on the monument. His sword — or a sword believed to be his — is preserved in the Connecticut Historical Society. It is an ordinary weapon made extraordinary by what was done with it. The conventions of war exist because without them, warfare becomes simple murder. At Fort Griswold, on September 6, 1781, the conventions failed.`,
    audioScript: `Colonel Ledyard had every reason to believe the fighting was over. His garrison had repulsed three assaults. But the fort was breached, and Ledyard offered his sword in surrender. An officer took it — and stabbed him with it.

British soldiers, enraged by their casualties, killed defenders who had laid down their arms. The Groton Monument lists approximately 85 names: local militia, farmers, fishermen, men whose families lived within sight of the fort.

Ledyard's sword is preserved in the Connecticut Historical Society. The conventions of war exist because without them, warfare becomes murder. At Fort Griswold on September 6, 1781, the conventions failed.`,
    tags: ['massacre', 'surrender', 'atrocity', 'militia'],
    town: { connect: { id: 'us-ct-groton' } },
  },
  {
    id: 'story-groton-modern-names-on-stone',
    title: 'Every Name on the Monument Was Someone\'s Neighbor',
    storyType: 'MODERN_VOICE',
    narratorName: 'Park Interpreter',
    narratorRole: 'Fort Griswold Battlefield State Park',
    verificationStatus: 'UNVERIFIED',
    textVersion: `The Groton Monument is 134 feet tall, and you can climb it. There are 166 steps to the top, and from the observation deck you can see across the Thames River to New London, where the companion raid burned the town on the same day. The geography makes the twin attacks immediately comprehensible: Arnold hit both sides of the river at once.

But the monument's most important feature is not the view. It is the names carved into the stone at the base. Approximately 85 names, each one representing a man from this community who died on September 6, 1781 — many of them after the fighting was over.

What visitors often do not immediately grasp is the scale of loss relative to the community's size. Groton was a small town. Losing 85 men in a single afternoon was devastating in a way that larger communities might have absorbed more easily. Nearly every family was affected. The wives, children, and parents of the dead lived in the surrounding countryside, and the grief was not abstract — it was personal and comprehensive.

Jordan Freeman's name is on the monument. He was a free Black man who fought alongside his white neighbors and died defending the same ground. His presence on the monument — in 1830, three decades before the Civil War — is significant. Whatever the racial attitudes of the era, the people of Groton included Freeman among the honored dead because he had earned that place with his life.

The hardest part of interpretation here is the massacre itself. We have to tell visitors that these men were killed after they surrendered. The conventions of warfare were violated. Colonel Ledyard was stabbed with his own sword. Wounded men were put on a cart and sent careening down the hill. These are facts, documented by multiple sources, and they are difficult to present without either sanitizing or sensationalizing them.

We try to let the monument speak. The names are there. The stones are there. The earthworks are there. The view across the river to the ruins of what Arnold burned is there. Sometimes the most powerful interpretation is the simplest: stand on this ground, read these names, and understand what happened here.`,
    audioScript: `The Groton Monument is 134 feet tall with 85 names carved at its base — men from this community who died on September 6, 1781, many after the fighting was over.

Losing 85 men in a single afternoon devastated a small town. Nearly every family was affected. Jordan Freeman, a free Black soldier, is on the monument — included among the honored dead because he earned that place with his life.

The hardest part of interpretation is the massacre. Colonel Ledyard stabbed with his own sword. Wounded men sent careening down a hill on a cart. These are documented facts.

We let the monument speak. The names are there. The earthworks are there. Stand on this ground, read these names, and understand what happened here.`,
    tags: ['massacre', 'monument', 'community', 'memory'],
    town: { connect: { id: 'us-ct-groton' } },
  },
];
