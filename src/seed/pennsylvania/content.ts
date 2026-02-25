// MODEL: Claude Opus (historical synthesis and narrative content)
// MODEL: Claude Sonnet (data structure and code)
// Pennsylvania town expansion — Philadelphia, Valley Forge, York, Germantown, Carlisle, Paoli

import { Prisma } from '@prisma/client';

/**
 * Six Pennsylvania towns with Revolutionary War significance.
 *
 * NOTE ON VERIFICATION: Historical content has been synthesized from
 * established scholarly sources including David McCullough's "1776,"
 * Ron Chernow's "Washington: A Life," Joseph Ellis's "Founding Brothers,"
 * Wayne Bodle's "The Valley Forge Winter," NPS documentation for Valley Forge
 * and Independence National Historical Park, and institutional records from
 * the Pennsylvania Historical and Museum Commission. Stories marked VERIFIED
 * have strong documentary evidence. Lesser-known voices carry ORAL_TRADITION
 * or ANECDOTAL status where the historical record is thinner. Modern-voice
 * stories are marked UNVERIFIED where we cannot fully document claims from
 * composite/representative narrators.
 */

// ============================================================================
// PHILADELPHIA
// ============================================================================

export const philadelphiaTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Philadelphia was the largest city in British North America, and it became the political center of the American Revolution. The Continental Congress met here from 1774 to 1783, with an interruption during the British occupation. The Declaration of Independence was debated, drafted, and signed in the Pennsylvania State House. The Constitution would follow in the same building eleven years later. No other city served as the stage for so many of the Revolution's defining political acts.

The city's role was not only political. Philadelphia was the colonies' financial center, home to Robert Morris and Haym Salomon, who kept the Continental Army funded when the treasury was empty. Its printing presses, including Benjamin Franklin's, produced the pamphlets and newspapers that shaped public opinion. Thomas Paine wrote "Common Sense" here in 1776, and the pamphlet's argument for independence sold more than 100,000 copies in its first months — an extraordinary number for a colonial population of roughly two and a half million.

The British occupied Philadelphia from September 1777 to June 1778 after defeating Washington at Brandywine. General Howe settled into the city while the Continental Army starved at Valley Forge twenty miles away. The occupation was comfortable for the British and devastating for patriot civilians who remained, but it failed strategically. Holding the city did not break the American will to fight, and when the British evacuated to consolidate forces in New York, they left Philadelphia largely intact.

Philadelphia's diverse population — Quakers, Anglicans, Presbyterians, German immigrants, free Black residents, enslaved people — meant the Revolution played out here with particular complexity. Quaker pacifism collided with patriot militancy. Loyalist sympathizers lived alongside radical Whigs. The city was never unified in its support for independence, and that internal tension shaped the political compromises that emerged from its meeting halls.`,
};

export const philadelphiaPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-philadelphia-benjamin-franklin',
    name: 'Benjamin Franklin',
    roles: ['Diplomat', 'Printer', 'Scientist', 'Statesman'],
    bioShort:
      'Philadelphia printer, scientist, and diplomat who helped draft the Declaration of Independence and secured the French alliance that proved decisive in winning the war. He was the most internationally recognized American of his era.',
    birthYear: 1706,
    deathYear: 1790,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-philadelphia-robert-morris',
    name: 'Robert Morris',
    roles: ['Financier', 'Continental Congress Delegate', 'Superintendent of Finance'],
    bioShort:
      'Philadelphia merchant who financed the Continental Army during its most desperate periods. As Superintendent of Finance from 1781 to 1784, he used his personal credit and business networks to keep the war effort solvent when Congress could not raise taxes.',
    birthYear: 1734,
    deathYear: 1806,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-philadelphia-haym-salomon',
    name: 'Haym Salomon',
    roles: ['Broker', 'Financial Agent', 'Patriot'],
    bioShort:
      'Polish-born Jewish immigrant who became a key financial broker for the Revolution. He negotiated loans from France and the Netherlands, sold government securities, and personally lent money to members of Congress. He died nearly penniless, his fortune spent sustaining the cause.',
    birthYear: 1740,
    deathYear: 1785,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-philadelphia-thomas-paine',
    name: 'Thomas Paine',
    roles: ['Pamphleteer', 'Political Theorist', 'Revolutionary'],
    bioShort:
      'English-born writer who arrived in Philadelphia in 1774 and published "Common Sense" in January 1776, providing the most compelling popular argument for independence. His "Crisis" papers sustained morale through the war\'s darkest periods.',
    birthYear: 1737,
    deathYear: 1809,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-philadelphia-betsy-ross',
    name: 'Betsy Ross',
    roles: ['Seamstress', 'Upholsterer', 'Flag Maker'],
    bioShort:
      'Philadelphia seamstress and upholsterer traditionally credited with sewing the first American flag. While the specific claim rests on family oral tradition rather than documentary evidence, Ross was a working artisan who did produce flags for the Pennsylvania navy during the war.',
    birthYear: 1752,
    deathYear: 1836,
    verificationStatus: 'ORAL_TRADITION',
  },
  {
    id: 'person-philadelphia-john-dickinson',
    name: 'John Dickinson',
    roles: ['Lawyer', 'Continental Congress Delegate', 'Political Writer'],
    bioShort:
      'Philadelphia lawyer whose "Letters from a Farmer in Pennsylvania" (1767-1768) articulated colonial resistance to British taxation. He refused to sign the Declaration of Independence, believing reconciliation was still possible, but served in the militia after independence was declared.',
    birthYear: 1732,
    deathYear: 1808,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-philadelphia-james-forten',
    name: 'James Forten',
    roles: ['Sailor', 'Powder Boy', 'Entrepreneur'],
    bioShort:
      'Free Black Philadelphian who served as a powder boy aboard the privateer Royal Louis at age fourteen. Captured by the British, he refused an offer to live in England and endured months on a prison ship. After the war he became one of Philadelphia\'s wealthiest Black residents and a leading abolitionist.',
    birthYear: 1766,
    deathYear: 1842,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-philadelphia-peggy-shippen',
    name: 'Margaret "Peggy" Shippen Arnold',
    roles: ['Socialite', 'Loyalist Sympathizer', 'Spouse of Benedict Arnold'],
    bioShort:
      'Philadelphia socialite who married Benedict Arnold during the British occupation and may have encouraged or facilitated his treason. Her role in the conspiracy remains debated, but evidence suggests she was more active participant than passive wife.',
    birthYear: 1760,
    deathYear: 1804,
    verificationStatus: 'ANECDOTAL',
  },
];

export const philadelphiaEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-philadelphia-first-continental-congress',
    name: 'First Continental Congress Convenes',
    startDate: new Date('1774-09-05'),
    datePrecision: 'DAY',
    summary: `Fifty-six delegates from twelve colonies gathered at Carpenters' Hall in Philadelphia to coordinate a response to the Coercive Acts. Over seven weeks they debated, argued, and ultimately agreed on a boycott of British goods, a petition to King George III, and a plan to reconvene the following spring if grievances were not addressed.

The choice of Philadelphia was strategic. It was the largest and most centrally located colonial city, accessible by road and water. Carpenters' Hall, rather than the Pennsylvania State House, was chosen partly to signal independence from the colonial government. The Congress established the precedent of intercolonial cooperation that would carry through the war.`,
    significanceWeight: 95,
    lat: 39.9486,
    lng: -75.1478,
    town: { connect: { id: 'us-pa-philadelphia' } },
  },
  {
    id: 'event-philadelphia-declaration-independence',
    name: 'Declaration of Independence Adopted',
    startDate: new Date('1776-07-04'),
    datePrecision: 'DAY',
    summary: `The Continental Congress adopted the Declaration of Independence in the Pennsylvania State House, formally severing ties with Great Britain. Thomas Jefferson had drafted the document over seventeen days in a rented room on Market Street, drawing on ideas from John Locke, George Mason's Virginia Declaration of Rights, and his own convictions about natural law.

The vote itself came on July 2. The Declaration was approved with revisions on July 4. The public reading on July 8 in the State House yard drew crowds and prompted the first ringing of the State House bell — later renamed the Liberty Bell. The document transformed a colonial rebellion into a statement of universal principles about human rights and self-governance.`,
    significanceWeight: 100,
    lat: 39.9489,
    lng: -75.1500,
    town: { connect: { id: 'us-pa-philadelphia' } },
  },
  {
    id: 'event-philadelphia-common-sense-published',
    name: 'Thomas Paine Publishes "Common Sense"',
    startDate: new Date('1776-01-10'),
    datePrecision: 'DAY',
    summary: `Thomas Paine's pamphlet "Common Sense" was published anonymously in Philadelphia by Robert Bell and sold for two shillings. It argued for complete independence from Britain in language that ordinary colonists could understand, rejecting monarchy as an institution and making a moral case for republican government.

The pamphlet sold an estimated 100,000 copies in its first three months and perhaps 500,000 over the course of the war — staggering figures for the era. It shifted the public debate from reconciliation to independence and gave delegates in Congress political cover to vote for separation. Washington had it read aloud to his troops. It was the most influential piece of political writing in the Revolution.`,
    significanceWeight: 90,
    lat: 39.9500,
    lng: -75.1470,
    town: { connect: { id: 'us-pa-philadelphia' } },
  },
  {
    id: 'event-philadelphia-british-occupation-begins',
    name: 'British Occupation of Philadelphia Begins',
    startDate: new Date('1777-09-26'),
    datePrecision: 'DAY',
    summary: `General Howe's British army entered Philadelphia after defeating Washington at the Battle of Brandywine on September 11 and outmaneuvering him at the Schuylkill River crossings. Congress had already fled to Lancaster and then York. Many patriot civilians evacuated, while Loyalist sympathizers and Quaker neutrals remained.

The nine-month occupation was militarily comfortable for the British but strategically futile. Howe's officers enjoyed a social season of balls and parties — the notorious Meschianza farewell gala for Howe became a symbol of British decadence. Meanwhile, the Continental Army endured Valley Forge. When the British evacuated in June 1778, following France's entry into the war, they had gained nothing lasting from holding the city.`,
    significanceWeight: 80,
    lat: 39.9526,
    lng: -75.1652,
    town: { connect: { id: 'us-pa-philadelphia' } },
  },
  {
    id: 'event-philadelphia-constitutional-convention',
    name: 'Constitutional Convention',
    startDate: new Date('1787-05-25'),
    endDate: new Date('1787-09-17'),
    datePrecision: 'DAY',
    summary: `Delegates from twelve states convened in the Pennsylvania State House — the same room where independence had been declared eleven years earlier — to revise the Articles of Confederation. Instead, they wrote an entirely new Constitution. The convention met in secret for nearly four months, debating representation, executive power, slavery, and federalism.

The Philadelphia setting mattered. The city offered the infrastructure, printing presses, and intellectual community to support the work. Franklin, at 81, served as host and mediator. The document they produced was a compromise in every sense, but it created a framework of government that directly addressed the failures exposed by the Revolution and its aftermath.`,
    significanceWeight: 95,
    lat: 39.9489,
    lng: -75.1500,
    town: { connect: { id: 'us-pa-philadelphia' } },
  },
  {
    id: 'event-philadelphia-british-evacuation',
    name: 'British Evacuate Philadelphia',
    startDate: new Date('1778-06-18'),
    datePrecision: 'DAY',
    summary: `The British army under General Clinton evacuated Philadelphia and marched overland to New York, abandoning the city they had held for nine months. The withdrawal was prompted by France's entry into the war, which made the British position in Philadelphia strategically untenable — a French fleet could trap them in the Delaware.

Washington's army pursued Clinton across New Jersey, leading to the Battle of Monmouth on June 28. Philadelphia's patriots returned to a city that had been largely preserved but was politically transformed. The experience of occupation — and the collaboration of some residents with the British — left deep scars that shaped Philadelphia's politics for years.`,
    significanceWeight: 75,
    lat: 39.9526,
    lng: -75.1652,
    town: { connect: { id: 'us-pa-philadelphia' } },
  },
  {
    id: 'event-philadelphia-fort-mifflin-siege',
    name: 'Siege of Fort Mifflin',
    startDate: new Date('1777-10-01'),
    endDate: new Date('1777-11-15'),
    datePrecision: 'DAY',
    summary: `Continental forces held Fort Mifflin on Mud Island in the Delaware River for six weeks against devastating British naval bombardment. The garrison's defense blocked the British from resupplying their occupation force in Philadelphia by water, forcing them to rely on overland supply lines that were vulnerable to American raids.

The bombardment of November 10-15 was among the most intense of the entire war. The garrison finally evacuated on the night of November 15 after the fort was reduced to rubble. The defenders' stand bought critical time for the Continental Army and demonstrated a willingness to endure extreme conditions that would define the coming winter at Valley Forge.`,
    significanceWeight: 70,
    lat: 39.8638,
    lng: -75.2133,
    town: { connect: { id: 'us-pa-philadelphia' } },
  },
  {
    id: 'event-philadelphia-first-public-reading-declaration',
    name: 'First Public Reading of the Declaration',
    startDate: new Date('1776-07-08'),
    datePrecision: 'DAY',
    summary: `Colonel John Nixon read the Declaration of Independence aloud in the yard of the Pennsylvania State House before a gathered crowd of Philadelphia residents. Church bells rang across the city, and that evening celebratory bonfires burned. The King's Arms tavern sign was torn down and thrown into one of the fires.

The reading transformed the Declaration from a congressional resolution into a public event. It was the moment when independence became real for ordinary Philadelphians — not just delegates debating in a closed room, but a commitment made before the community and the world. Similar public readings followed in towns across the colonies over the next weeks.`,
    significanceWeight: 80,
    lat: 39.9489,
    lng: -75.1500,
    town: { connect: { id: 'us-pa-philadelphia' } },
  },
];

export const philadelphiaStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-philadelphia-forten-prison-ship',
    title: 'The Boy Who Refused England',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-philadelphia-james-forten' } },
    verificationStatus: 'VERIFIED',
    textVersion: `James Forten was fourteen years old when he shipped aboard the privateer Royal Louis in 1781. He was free, Black, and Philadelphian — the son of a sailmaker who had worked on the wharves his entire life. When the Royal Louis was captured by the British, Forten expected the worst. Black prisoners were routinely sold into slavery in the West Indies.

Instead, the British captain's son took a liking to Forten and offered him passage to England, where he could live comfortably and receive an education. It was a genuine offer, and for a fourteen-year-old facing a prison ship, it must have been tempting beyond measure.

Forten refused. He reportedly said he would not betray his country. He spent seven months on the prison ship Jersey in New York Harbor — a floating death trap where disease killed more American prisoners than any British battlefield. He survived. Most did not.

After the war, Forten returned to Philadelphia and apprenticed to a white sailmaker named Robert Bridges. Within a decade he owned the loft, employed a mixed-race workforce of thirty men, and became one of Philadelphia's wealthiest residents. He spent his fortune and his influence on the abolitionist cause, insisting that the Revolution's promise of equality applied to all Americans.

His great-granddaughter, Charlotte Forten Grimké, would continue the family's activism into the Civil War era. The through line from the boy on the prison ship to the abolitionist movement runs directly through Philadelphia.`,
    audioScript: `James Forten was fourteen when he shipped aboard the privateer Royal Louis in 1781. Free, Black, and Philadelphian. When the ship was captured, the British captain's son offered him passage to England — comfort, education, safety.

Forten refused. He would not betray his country. He spent seven months on the prison ship Jersey, where disease killed thousands. He survived.

After the war, he became one of Philadelphia's wealthiest residents — a sailmaker who employed thirty men and spent his fortune on the abolitionist cause. He insisted the Revolution's promise of equality applied to all Americans.

His great-granddaughter Charlotte Forten Grimké continued the fight into the Civil War. The line from that prison ship to the abolitionist movement runs directly through Philadelphia.`,
    tags: ['Black history', 'privateering', 'abolition', 'courage'],
    town: { connect: { id: 'us-pa-philadelphia' } },
  },
  {
    id: 'story-philadelphia-modern-independence-hall',
    title: 'Two Rooms and What They Hold',
    storyType: 'MODERN_VOICE',
    narratorName: 'Park Ranger',
    narratorRole: 'Independence National Historical Park, Philadelphia',
    verificationStatus: 'UNVERIFIED',
    textVersion: `Most visitors want to see the Liberty Bell. We get about three million people a year through the Bell Center, and I understand the draw — it is iconic, it photographs well, and it has a crack.

But the building across the street is what matters. Independence Hall has two rooms that changed the world. The assembly room on the east side is where they declared independence and where they wrote the Constitution. The courtroom on the west side is where the Pennsylvania Supreme Court sat. The architecture is plain — nothing like Versailles or Parliament. That plainness is the point.

When I lead tours through the assembly room, I ask people to notice how small it is. Forty-some delegates sat in that room for months during the Constitutional Convention, in Philadelphia's brutal summer heat, with the windows closed because they had sworn themselves to secrecy. The room has no air conditioning now and it did not then. They were writing the future of republican government in a space barely large enough for a modern conference.

What I try to convey is the contingency. Nothing about these outcomes was inevitable. The Declaration nearly failed — the vote for independence passed by a single-vote margin in several delegations. The Constitution was a series of compromises that satisfied no one completely. These were not demigods working in marble halls. They were politicians, lawyers, merchants, and farmers working in a hot brick building, arguing about power.

The building is still here. You can stand where they stood. That is what a national park preserves — not just the architecture, but the physical reality of the choices that were made in this place.`,
    audioScript: `Most visitors want the Liberty Bell. Three million people a year. I understand — it photographs well and has a crack.

But Independence Hall across the street is what matters. Two rooms that changed the world. The assembly room where they declared independence and wrote the Constitution. Plain architecture. That plainness is the point.

I ask people to notice how small it is. Delegates sat here for months in brutal summer heat, windows closed for secrecy. They were writing the future of republican government in a space barely large enough for a modern conference.

Nothing was inevitable. The Declaration nearly failed. The Constitution satisfied no one completely. These were politicians arguing about power in a hot brick building. The building is still here. You can stand where they stood.`,
    tags: ['preservation', 'independence', 'politics', 'national park'],
    town: { connect: { id: 'us-pa-philadelphia' } },
  },
];

// ============================================================================
// VALLEY FORGE
// ============================================================================

export const valleyForgeTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Valley Forge was not a battle. It was a winter encampment, and it nearly ended the American Revolution. From December 1777 to June 1778, roughly 12,000 Continental soldiers camped on the hills above the Schuylkill River while the British occupied Philadelphia twenty miles east. They arrived cold, hungry, and demoralized after defeats at Brandywine and Germantown. Over the next six months, approximately 2,000 of them died — not from enemy fire, but from disease, exposure, and starvation.

The suffering at Valley Forge was largely a failure of logistics, not resources. The American countryside had food and supplies, but the Continental Army's quartermaster system had collapsed. Wagons broke down, roads turned to mud, and corruption siphoned off what little moved through the supply chain. Congress, meeting in exile in York, could authorize purchases but could not compel states to provide them. The soldiers built log huts, wrapped their feet in rags when shoes wore out, and endured.

What transformed Valley Forge from a disaster into a turning point was the arrival of Friedrich Wilhelm von Steuben, a Prussian military officer who volunteered to train the army. Working through translators, von Steuben introduced standardized drill, weapons handling, and camp sanitation. By spring, the ragged force that had stumbled into Valley Forge marched out as a professional army capable of standing against British regulars in open battle. The Battle of Monmouth in June 1778 proved the transformation was real.

Valley Forge today is a national park that preserves the landscape of the encampment. The reconstructed huts, the earthwork fortifications, and Washington's headquarters building stand as evidence that the Revolution survived its darkest season not through heroics but through endurance and organizational reform.`,
};

export const valleyForgePeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-valley-forge-george-washington',
    name: 'George Washington',
    roles: ['Commander-in-Chief', 'Continental Army General'],
    bioShort:
      'Commander-in-Chief of the Continental Army who kept the army together through the Valley Forge winter. His decision to encamp at Valley Forge was strategic — it positioned the army to protect the countryside while monitoring British-held Philadelphia.',
    birthYear: 1732,
    deathYear: 1799,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-valley-forge-friedrich-von-steuben',
    name: 'Friedrich Wilhelm von Steuben',
    roles: ['Prussian Officer', 'Inspector General', 'Military Trainer'],
    bioShort:
      'Prussian military officer who arrived at Valley Forge in February 1778 and transformed the Continental Army through systematic drill and training. His "Blue Book" of regulations became the army\'s standard manual for decades.',
    birthYear: 1730,
    deathYear: 1794,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-valley-forge-marquis-de-lafayette',
    name: 'Marquis de Lafayette',
    roles: ['French Volunteer', 'Major General', 'Washington Aide'],
    bioShort:
      'French aristocrat who joined the Continental Army at age nineteen and endured the Valley Forge winter alongside the troops. His presence at Valley Forge helped cement the Franco-American alliance and his personal bond with Washington.',
    birthYear: 1757,
    deathYear: 1834,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-valley-forge-nathanael-greene',
    name: 'Nathanael Greene',
    roles: ['Major General', 'Quartermaster General'],
    bioShort:
      'Rhode Island-born general who took over as Quartermaster General at Valley Forge and rebuilt the army\'s supply system. His organizational work was unglamorous but essential — without functioning logistics, the army would have dissolved.',
    birthYear: 1742,
    deathYear: 1786,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-valley-forge-martha-washington',
    name: 'Martha Washington',
    roles: ['Commander\'s Wife', 'Camp Organizer', 'Morale Supporter'],
    bioShort:
      'Joined her husband at Valley Forge in February 1778 and organized sewing circles among officers\' wives to mend clothing and bandages. Her presence in camp through the worst of the winter demonstrated solidarity with the suffering troops.',
    birthYear: 1731,
    deathYear: 1802,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-valley-forge-albigence-waldo',
    name: 'Albigence Waldo',
    roles: ['Continental Army Surgeon', 'Diarist'],
    bioShort:
      'Connecticut surgeon who served at Valley Forge and kept a diary that is one of the most vivid firsthand accounts of the encampment. His entries about inadequate food, disease, and the soldiers\' suffering provide irreplaceable documentation of conditions.',
    birthYear: 1750,
    deathYear: 1794,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-valley-forge-john-laurens',
    name: 'John Laurens',
    roles: ['Aide-de-Camp', 'Officer', 'Abolitionist'],
    bioShort:
      'Son of Continental Congress President Henry Laurens, he served as Washington\'s aide-de-camp at Valley Forge and advocated for enlisting enslaved men in the Continental Army in exchange for their freedom — a proposal ahead of its time that was repeatedly rejected.',
    birthYear: 1754,
    deathYear: 1782,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-valley-forge-jeremiah-greenman',
    name: 'Jeremiah Greenman',
    roles: ['Continental Soldier', 'Diarist', 'Enlisted Man'],
    bioShort:
      'Rhode Island enlisted man who survived the Valley Forge winter and kept a journal documenting daily life in the encampment. His account provides a rare perspective from the ranks rather than the officer corps.',
    birthYear: 1758,
    deathYear: 1828,
    verificationStatus: 'VERIFIED',
  },
];

export const valleyForgeEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-valley-forge-arrival-1777',
    name: 'Continental Army Arrives at Valley Forge',
    startDate: new Date('1777-12-19'),
    datePrecision: 'DAY',
    summary: `Approximately 12,000 Continental soldiers marched into Valley Forge after a grueling campaign season that included defeats at Brandywine and Germantown. Washington chose the site for its defensible terrain — hills overlooking the Schuylkill River — and its proximity to British-held Philadelphia, close enough to monitor the enemy but far enough to avoid surprise attack.

The troops arrived in poor condition. Many lacked shoes, blankets, and adequate clothing. The army immediately began constructing log huts according to specifications Washington issued, with twelve men assigned to each hut. The building effort took weeks and the soldiers slept in tents through bitter December weather until the huts were completed.`,
    significanceWeight: 85,
    lat: 40.0993,
    lng: -75.4441,
    town: { connect: { id: 'us-pa-valley-forge' } },
  },
  {
    id: 'event-valley-forge-steuben-training',
    name: 'Von Steuben Begins Training the Army',
    startDate: new Date('1778-03-01'),
    datePrecision: 'MONTH',
    summary: `Friedrich von Steuben arrived at Valley Forge in February 1778 and began a systematic program of military drill that would transform the Continental Army. Working with a model company of 100 men, he demonstrated proper musket handling, bayonet techniques, and formation movements, then had trained soldiers spread the methods throughout the camp.

Von Steuben's innovation was not just drill but standardization. He established uniform procedures for everything from guard duty to camp sanitation. His insistence on proper latrine placement and waste disposal reduced the disease that had been killing soldiers at alarming rates. The training manual he produced — "Regulations for the Order and Discipline of the Troops of the United States" — remained the army's standard for thirty years.`,
    significanceWeight: 90,
    lat: 40.0993,
    lng: -75.4441,
    town: { connect: { id: 'us-pa-valley-forge' } },
  },
  {
    id: 'event-valley-forge-conway-cabal',
    name: 'The Conway Cabal',
    startDate: new Date('1777-12-01'),
    datePrecision: 'MONTH',
    summary: `During the winter at Valley Forge, a loose conspiracy among some officers and members of Congress sought to replace Washington as commander-in-chief with General Horatio Gates, the victor at Saratoga. The intrigue centered on letters from General Thomas Conway criticizing Washington's leadership, which were leaked to Washington himself.

The so-called cabal never coalesced into a formal movement, and Washington handled it with political skill, exposing the plotters without confrontation. The episode strengthened Washington's position — congressional supporters rallied to him, and the critics were marginalized. It demonstrated that political maneuvering was as much a part of the Revolution as battlefield tactics.`,
    significanceWeight: 65,
    lat: 40.0993,
    lng: -75.4441,
    town: { connect: { id: 'us-pa-valley-forge' } },
  },
  {
    id: 'event-valley-forge-french-alliance-news',
    name: 'News of the French Alliance Reaches Camp',
    startDate: new Date('1778-05-01'),
    datePrecision: 'MONTH',
    summary: `Word reached Valley Forge that France had signed a Treaty of Alliance with the United States, transforming the war from a colonial rebellion into a global conflict. Washington ordered a day of celebration — a feu de joie, a running fire of musketry down the line, followed by cheers and a feast.

The alliance meant French money, French ships, and eventually French troops. It also meant that Britain would have to fight a world war, dispersing forces to defend the West Indies and other colonies. Strategically, the French alliance was the turning point that made American victory achievable. The celebration at Valley Forge was the first tangible sign that the suffering of the winter had not been in vain.`,
    significanceWeight: 85,
    lat: 40.0993,
    lng: -75.4441,
    town: { connect: { id: 'us-pa-valley-forge' } },
  },
  {
    id: 'event-valley-forge-army-departs',
    name: 'Continental Army Departs Valley Forge',
    startDate: new Date('1778-06-19'),
    datePrecision: 'DAY',
    summary: `The Continental Army broke camp and marched out of Valley Forge in pursuit of the British army, which had evacuated Philadelphia the previous day. The force that left Valley Forge was fundamentally different from the one that had arrived six months earlier. Von Steuben's training had produced disciplined soldiers who could execute complex maneuvers under fire.

Nine days later, at the Battle of Monmouth in New Jersey, the army proved its transformation. Continental troops fought British regulars to a standstill in a pitched battle — something that would have been unthinkable before Valley Forge. The winter of suffering had produced a professional army.`,
    significanceWeight: 80,
    lat: 40.0993,
    lng: -75.4441,
    town: { connect: { id: 'us-pa-valley-forge' } },
  },
  {
    id: 'event-valley-forge-hut-construction',
    name: 'Construction of Soldier Huts',
    startDate: new Date('1777-12-20'),
    datePrecision: 'DAY',
    summary: `Washington issued detailed specifications for the log huts that would house the army through the winter: fourteen feet by sixteen feet, six and a half feet high at the eaves, with a fireplace at one end and a door at the other. Twelve men would share each hut. The army built roughly one thousand of these structures over the following weeks.

The construction effort was itself a test of the army's cohesion. Men who lacked adequate clothing and food had to fell trees, haul logs, and build in freezing conditions. Washington offered a twelve-dollar prize for the best-built hut in each regiment, incentivizing quality. The resulting camp, though crude, provided shelter that tents could not and became the physical framework for the community that would emerge over the winter.`,
    significanceWeight: 60,
    lat: 40.0993,
    lng: -75.4441,
    town: { connect: { id: 'us-pa-valley-forge' } },
  },
  {
    id: 'event-valley-forge-supply-crisis',
    name: 'Supply Crisis Peaks',
    startDate: new Date('1778-02-01'),
    datePrecision: 'MONTH',
    summary: `The supply crisis at Valley Forge reached its worst point in February 1778, with the army reporting days without meat and only firecake — a paste of flour and water baked on hot stones — to eat. Washington wrote Congress that the army was on the verge of dissolution. Desertions increased and foraging parties returned empty-handed.

The crisis was systemic rather than absolute. The American countryside had food, but the army's logistical apparatus had broken down. Corrupt contractors, worthless Continental currency, competing demands from state governments, and collapsed transportation networks all contributed. Nathanael Greene's appointment as Quartermaster General in March began to address these failures, but the suffering of February left scars the army never forgot.`,
    significanceWeight: 75,
    lat: 40.0993,
    lng: -75.4441,
    town: { connect: { id: 'us-pa-valley-forge' } },
  },
  {
    id: 'event-valley-forge-committee-congress-visit',
    name: 'Congressional Committee Visits Camp',
    startDate: new Date('1778-01-24'),
    datePrecision: 'DAY',
    summary: `A committee of Congress arrived at Valley Forge to assess conditions and confer with Washington about reforms. What they found shocked them: soldiers without shoes standing on frozen ground, hospitals overwhelmed with sick and dying men, and supply depots nearly empty. The committee's reports back to Congress helped galvanize action on supply and organizational reforms.

The visit led to concrete changes, including the appointment of Nathanael Greene as Quartermaster General and reorganization of the commissary system. It also demonstrated the fundamental tension of the Revolution — Congress held authority over the army but depended on states to actually provide men and material. The committee saw firsthand the cost of that structural weakness.`,
    significanceWeight: 65,
    lat: 40.0993,
    lng: -75.4441,
    town: { connect: { id: 'us-pa-valley-forge' } },
  },
];

export const valleyForgeStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-valley-forge-steuben-drill',
    title: 'The Prussian Who Taught Americans to Fight',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-valley-forge-friedrich-von-steuben' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Friedrich von Steuben arrived at Valley Forge claiming to be a Prussian lieutenant general. He was actually a former captain who had been dismissed from the Prussian army years earlier. Benjamin Franklin, who had met him in Paris, helped embellish his credentials to make him more attractive to Congress. The deception worked, and it may have saved the Continental Army.

Von Steuben spoke little English. He gave commands in French and German, relying on translators — including the young Alexander Hamilton — to convey his instructions. When frustrated, which was often, he would reportedly curse in both languages and then turn to his aides and say, "Viens, Walker, mon ami, mon bon ami, sacré. Goddamn de gaucheries of dese badauds. Je ne puis plus."

But behind the colorful temper was methodical brilliance. European armies trained by having officers issue orders and sergeants beat compliance into the ranks. Von Steuben understood that American soldiers were different. They were citizens who had volunteered, and they needed to understand why they were doing what they were asked to do. He explained the purpose of each drill movement, connected it to battlefield survival, and earned respect rather than demanding it.

He started with a model company of 100 men, drilling them personally at dawn. Other soldiers watched and learned. Within weeks, the methods spread through the camp. By spring, regiments that had broken and fled at Brandywine could execute complex maneuvers — wheeling formations, coordinated volleys, bayonet charges — with precision.

The transformation was real. At Monmouth in June 1778, Continental troops stood in open battle against British regulars and fought them to a draw. That outcome was unthinkable six months earlier. Von Steuben had not just drilled an army; he had given it professional identity.`,
    audioScript: `Von Steuben arrived at Valley Forge claiming to be a Prussian lieutenant general. He was actually a former captain. Franklin had embellished his credentials. The deception may have saved the Continental Army.

He spoke little English, giving commands through translators including young Alexander Hamilton. When frustrated, he cursed in French and German simultaneously.

But behind the temper was method. He understood American soldiers were citizens who needed to know why they were doing what they were asked. He explained each drill movement and earned respect rather than demanding it.

Starting with 100 men, he drilled them personally at dawn. Within weeks the methods spread through camp. By spring, regiments that had fled at Brandywine could execute complex maneuvers with precision. At Monmouth in June, they proved it — standing against British regulars in open battle.`,
    tags: ['training', 'military reform', 'leadership', 'transformation'],
    town: { connect: { id: 'us-pa-valley-forge' } },
  },
  {
    id: 'story-valley-forge-modern-landscape',
    title: 'What the Ground Remembers',
    storyType: 'MODERN_VOICE',
    narratorName: 'Interpretive Ranger',
    narratorRole: 'Valley Forge National Historical Park',
    verificationStatus: 'UNVERIFIED',
    textVersion: `People arrive expecting something dramatic — a battlefield, maybe, with monuments and cannon placements. What they find is quiet rolling hills, open fields, and a few rows of reconstructed log huts. The disconnect between the peaceful landscape and the suffering that happened here is the first thing I have to help visitors understand.

Nothing about Valley Forge looks like a crisis. The hills are green in summer, the creek runs clear, and the view from Washington's headquarters is genuinely beautiful. But in the winter of 1777-78, those fields were a mudscape of stumps and frozen ground. The creek was the water supply for 12,000 men and their horses. The beauty of the current landscape obscures the reality of what was endured here.

We have the hut reconstructions, built to Washington's specifications: fourteen by sixteen feet, a fireplace at one end, twelve men to a hut. I ask visitors to stand inside one and count to twelve. Then I ask them to imagine six months. That usually makes the point.

What I find most powerful about Valley Forge is that it was not a battle. No one was shooting at these soldiers. They were dying of typhus, dysentery, and exposure. The enemy was organizational failure — a government that could declare independence but could not feed its own army. The soldiers stayed anyway. Not all of them, and not cheerfully, but enough of them stayed to form the core of the army that marched out in June and fought at Monmouth.

That endurance is harder to commemorate than a charge or a last stand. There is no single heroic moment at Valley Forge. There are six months of cold, hunger, disease, and the decision, made again each morning, not to go home. That is what the ground remembers.`,
    audioScript: `People expect a battlefield. They find quiet hills and reconstructed log huts. The peaceful landscape and the suffering that happened here — that disconnect is the first thing I help visitors understand.

We have huts built to Washington's specifications: fourteen by sixteen feet, twelve men each. I ask visitors to stand inside and count to twelve. Then imagine six months.

Valley Forge was not a battle. Soldiers died of typhus, dysentery, exposure. The enemy was organizational failure — a government that could declare independence but could not feed its army. They stayed anyway. Not all of them, not cheerfully, but enough stayed to march out in June and fight at Monmouth.

That endurance is harder to commemorate than a charge. There is no single heroic moment — just six months of the decision, made each morning, not to go home.`,
    tags: ['endurance', 'national park', 'landscape', 'suffering'],
    town: { connect: { id: 'us-pa-valley-forge' } },
  },
];

// ============================================================================
// YORK
// ============================================================================

export const yorkTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `York served as the capital of the United States for nine months when Congress fled Philadelphia ahead of the British occupation in September 1777. It was in York that Congress adopted the Articles of Confederation, the first governing document of the new nation, on November 15, 1777. The Articles were imperfect — they created a weak central government that would eventually be replaced by the Constitution — but they represented the first formal agreement among the states to govern themselves as a unified body.

The choice of York was pragmatic rather than symbolic. Congress first moved to Lancaster but stayed only one day before crossing the Susquehanna River to York, putting an additional barrier between themselves and the British army. York was a prosperous market town, largely German-speaking, with enough buildings to house Congress and its attendant bureaucracy. The York County Courthouse became the new meeting place for the body that was, in theory, governing a revolution.

Congressional life in York was marked by frustration and internal politics. Delegates struggled with supply problems, currency devaluation, and the tension between civilian authority and military necessity. The Conway Cabal — the effort to replace Washington with Gates — played out partly in York's meeting rooms. Despite these difficulties, Congress managed to conduct essential business: ratifying the French alliance, managing foreign affairs, and maintaining at least the appearance of a functioning government.

York's period as capital ended in June 1778 when the British evacuated Philadelphia. Congress returned to the larger city, and York resumed its role as a Pennsylvania market town. But for nine months, this small community on the Susquehanna had been the seat of American self-governance, and the Articles adopted there — however flawed — kept the idea of union alive until a stronger framework could be built.`,
};

export const yorkPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-york-henry-laurens',
    name: 'Henry Laurens',
    roles: ['Continental Congress President', 'Diplomat', 'Planter'],
    bioShort:
      'South Carolina planter who served as President of the Continental Congress during its time in York, presiding over the adoption of the Articles of Confederation. He later served as a diplomat and was captured by the British at sea.',
    birthYear: 1724,
    deathYear: 1792,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-york-james-smith',
    name: 'James Smith',
    roles: ['Lawyer', 'Continental Congress Delegate', 'Signer of Declaration'],
    bioShort:
      'York lawyer and signer of the Declaration of Independence who helped organize the local militia and hosted congressional delegates during their stay in York. His law office became a meeting place for delegates seeking unofficial counsel.',
    birthYear: 1719,
    deathYear: 1806,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-york-philip-livingston',
    name: 'Philip Livingston',
    roles: ['Continental Congress Delegate', 'Merchant', 'Signer of Declaration'],
    bioShort:
      'New York merchant and signer of the Declaration who served in Congress during its York period. He died in York in June 1778, just before Congress returned to Philadelphia — one of the few delegates to die while actively serving.',
    birthYear: 1716,
    deathYear: 1778,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-york-daniel-roberdeau',
    name: 'Daniel Roberdeau',
    roles: ['Continental Congress Delegate', 'Brigadier General', 'Merchant'],
    bioShort:
      'Pennsylvania delegate who served in Congress at York and simultaneously held a commission as brigadier general of the Pennsylvania militia. He advocated for better army supplies and used his personal fortune to support lead mining operations for ammunition.',
    birthYear: 1727,
    deathYear: 1795,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-york-john-clark',
    name: 'John Clark Jr.',
    roles: ['Continental Army Officer', 'Intelligence Agent', 'Spy Master'],
    bioShort:
      'York County native who served as an intelligence officer for Washington, running spy networks behind British lines during the Philadelphia occupation. His reports from the York area helped Washington understand British movements and intentions.',
    birthYear: 1751,
    deathYear: 1819,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-york-thomas-hartley',
    name: 'Thomas Hartley',
    roles: ['Continental Army Colonel', 'Lawyer', 'Congressman'],
    bioShort:
      'York lawyer who raised and commanded the Hartley Regiment, served on the frontier defending against British-allied raids, and later represented York in the first United States Congress. His regiment fought at Brandywine and Germantown before frontier duty.',
    birthYear: 1748,
    deathYear: 1800,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-york-mary-willis',
    name: 'Mary Willis',
    roles: ['Innkeeper', 'Boarding House Operator', 'Civilian'],
    bioShort:
      'York innkeeper who provided lodging for congressional delegates during the capital period. Her establishment was one of several in York that housed the displaced government, and she managed the difficult logistics of feeding and sheltering prominent guests during wartime shortages.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ANECDOTAL',
  },
  {
    id: 'person-york-michael-swope',
    name: 'Michael Swope',
    roles: ['York County Official', 'Militia Leader', 'Patriot'],
    bioShort:
      'Prominent York County resident who helped organize local support for Congress during its residence, coordinating supplies and security. He represented the German-speaking community that formed the majority of York\'s population and facilitated relations between delegates and local residents.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ANECDOTAL',
  },
];

export const yorkEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-york-congress-arrives',
    name: 'Continental Congress Arrives in York',
    startDate: new Date('1777-09-30'),
    datePrecision: 'DAY',
    summary: `The Continental Congress crossed the Susquehanna River and established itself in York after fleeing Philadelphia ahead of the British advance. Congress had stopped briefly in Lancaster on September 27 but decided to put the Susquehanna between themselves and the enemy. York's courthouse became the new meeting place for the national legislature.

The move was humiliating but necessary. The delegates arrived in a town that was predominantly German-speaking, smaller and less cosmopolitan than Philadelphia, and unprepared for the influx of national government. Yet York's distance from the fighting and its position west of the Susquehanna provided a security that Philadelphia could not.`,
    significanceWeight: 75,
    lat: 39.9626,
    lng: -76.7277,
    town: { connect: { id: 'us-pa-york' } },
  },
  {
    id: 'event-york-articles-confederation',
    name: 'Articles of Confederation Adopted',
    startDate: new Date('1777-11-15'),
    datePrecision: 'DAY',
    summary: `Congress adopted the Articles of Confederation at the York County Courthouse, creating the first formal framework for governing the United States. The Articles had been debated for more than a year, with disputes over western land claims, representation, and taxation delaying agreement. The document created a confederacy of sovereign states with a weak central government — Congress could declare war and negotiate treaties but could not tax or regulate commerce.

The Articles would not be fully ratified by all thirteen states until 1781, but their adoption in York was a critical step. In the middle of a military crisis, with the army freezing at Valley Forge, Congress managed to agree on the basic structure of self-governance. The document's weaknesses would become apparent, but it held the union together through the war.`,
    significanceWeight: 90,
    lat: 39.9626,
    lng: -76.7277,
    town: { connect: { id: 'us-pa-york' } },
  },
  {
    id: 'event-york-french-alliance-ratified',
    name: 'Congress Ratifies the French Alliance',
    startDate: new Date('1778-05-04'),
    datePrecision: 'DAY',
    summary: `Congress ratified the Treaty of Alliance with France while still meeting in York, formalizing the military partnership that would prove decisive in winning the war. The treaty, negotiated by Benjamin Franklin in Paris, committed France to fighting alongside the United States until independence was achieved.

The ratification was one of the most consequential acts of Congress during its York period. French military support — money, ships, and eventually an army under Rochambeau — transformed the strategic balance of the war. The alliance also gave the American cause international legitimacy, encouraging other European powers to provide support.`,
    significanceWeight: 90,
    lat: 39.9626,
    lng: -76.7277,
    town: { connect: { id: 'us-pa-york' } },
  },
  {
    id: 'event-york-conway-cabal-debates',
    name: 'Conway Cabal Debates in Congress',
    startDate: new Date('1778-01-01'),
    datePrecision: 'MONTH',
    summary: `During the York period, factions in Congress debated whether Washington should be replaced as commander-in-chief, with some delegates favoring General Horatio Gates after his victory at Saratoga. The intrigue involved General Thomas Conway, the Board of War, and congressional delegates frustrated by Washington's defeats at Brandywine and Germantown.

The cabal never materialized into a formal movement, partly because Washington's allies in Congress moved to defend him and partly because Gates proved unable to capitalize on his Saratoga victory. The episode revealed the political tensions within the revolutionary leadership and the difficulty of maintaining civilian-military relations during a crisis.`,
    significanceWeight: 60,
    lat: 39.9626,
    lng: -76.7277,
    town: { connect: { id: 'us-pa-york' } },
  },
  {
    id: 'event-york-thanksgiving-proclamation',
    name: 'National Day of Thanksgiving Proclaimed',
    startDate: new Date('1777-11-01'),
    datePrecision: 'MONTH',
    summary: `Congress proclaimed the first national day of thanksgiving while meeting in York, designating December 18, 1777, as a day for Americans to give thanks for the victory at Saratoga and other blessings. The proclamation was both a genuine expression of gratitude and a morale-building exercise at a time when the war's outcome remained deeply uncertain.

The proclamation reflected Congress's understanding that maintaining public support required more than military orders. Setting aside a day for communal gratitude helped reinforce the sense of national purpose and provided a moment of unity during a winter of military setbacks and political anxiety.`,
    significanceWeight: 55,
    lat: 39.9626,
    lng: -76.7277,
    town: { connect: { id: 'us-pa-york' } },
  },
  {
    id: 'event-york-board-of-war-reorganized',
    name: 'Board of War Reorganized',
    startDate: new Date('1777-11-07'),
    datePrecision: 'DAY',
    summary: `Congress reorganized the Board of War in York, appointing Horatio Gates as its president in an attempt to improve military administration. The Board was meant to manage army logistics, supply, and personnel outside of Washington's direct command — a bureaucratic solution to the supply failures that were crippling the army at Valley Forge.

The reorganization reflected Congress's frustration with military management and its desire for greater civilian control. In practice, the Board's authority overlapped with Washington's in ways that created confusion. Gates's appointment also fed suspicions about the Conway Cabal. The episode demonstrated the fundamental challenge of the Revolution: how to run a war through a committee of thirteen sovereign states.`,
    significanceWeight: 60,
    lat: 39.9626,
    lng: -76.7277,
    town: { connect: { id: 'us-pa-york' } },
  },
  {
    id: 'event-york-congress-departs',
    name: 'Congress Returns to Philadelphia',
    startDate: new Date('1778-06-27'),
    datePrecision: 'DAY',
    summary: `Congress departed York and returned to Philadelphia after the British evacuation of the city. The nine-month sojourn in York was over. Delegates were relieved to leave the small town for the larger city, though Philadelphia itself required cleaning and repair after the British occupation.

The York period had been productive despite its difficulties. Congress had adopted the Articles of Confederation, ratified the French alliance, reorganized the Board of War, and maintained the functions of government — all while meeting in a courthouse in a town most delegates had never heard of before the crisis. York's brief period as the American capital was over, but its contribution to the nation's founding was permanent.`,
    significanceWeight: 55,
    lat: 39.9626,
    lng: -76.7277,
    town: { connect: { id: 'us-pa-york' } },
  },
  {
    id: 'event-york-livingston-death',
    name: 'Philip Livingston Dies in York',
    startDate: new Date('1778-06-12'),
    datePrecision: 'DAY',
    summary: `Philip Livingston, a signer of the Declaration of Independence and New York delegate, died in York just weeks before Congress returned to Philadelphia. He had continued serving in Congress through declining health, and his death underscored the personal cost of public service during the Revolution.

Livingston had been a wealthy New York merchant who sacrificed his fortune for the patriot cause. His properties were confiscated or destroyed during the British occupation of New York. He died in a rented room in a small Pennsylvania town, far from home, having spent the last years of his life in service to a nation that was still fighting for its existence.`,
    significanceWeight: 50,
    lat: 39.9626,
    lng: -76.7277,
    town: { connect: { id: 'us-pa-york' } },
  },
];

export const yorkStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-york-articles-signing',
    title: 'The Document That Held the Union Together',
    storyType: 'HISTORICAL_VOICE',
    verificationStatus: 'VERIFIED',
    textVersion: `The Articles of Confederation were not a great document. The men who wrote them knew it. The debates in the York courthouse had revealed every fault line in the American union — large states against small, southern slaveholders against northern merchants, advocates of strong central government against defenders of state sovereignty. The compromises that emerged satisfied no one fully.

But on November 15, 1777, Congress adopted the Articles anyway. They did so because the alternative was worse. Without a formal agreement binding the states together, the Revolution risked dissolving into thirteen separate wars against Britain, each state negotiating its own peace on its own terms. The Articles were the minimum viable product of American unity.

The document gave Congress the power to wage war, conduct diplomacy, and borrow money. It did not give Congress the power to tax, regulate trade, or compel states to do anything. Each state retained its sovereignty and sent delegates who voted as a bloc — one vote per state, regardless of population. Amendments required unanimous consent.

These were not oversights. They were deliberate choices by delegates who feared concentrated power more than they feared inefficiency. They had just declared independence from a government they considered tyrannical. They were not about to create another one.

The Articles would prove inadequate — the financial crises of the 1780s, the inability to regulate commerce, and Shays' Rebellion all demonstrated their weaknesses. But for the duration of the war, they provided just enough structure to keep the states working together. The Constitution that replaced them in 1788 was built on the foundation — and the failures — of what Congress adopted in that York courthouse.`,
    audioScript: `The Articles of Confederation were not a great document. The men who wrote them knew it. The debates in York revealed every fault line in the union — large states against small, slaveholders against merchants, strong government against state sovereignty.

But on November 15, 1777, Congress adopted them anyway. Without a formal agreement, the Revolution risked dissolving into thirteen separate wars. The Articles were the minimum viable product of American unity.

They gave Congress power to wage war and borrow money. Not to tax or regulate trade. Each state kept its sovereignty. These were deliberate choices by men who feared concentrated power more than inefficiency.

The Articles proved inadequate — the 1780s financial crises demonstrated their weaknesses. But during the war, they provided just enough structure to keep states working together. The Constitution was built on their foundation and their failures.`,
    tags: ['governance', 'Articles of Confederation', 'politics', 'unity'],
    town: { connect: { id: 'us-pa-york' } },
  },
  {
    id: 'story-york-modern-courthouse',
    title: 'The Courthouse That Was a Capital',
    storyType: 'MODERN_VOICE',
    narratorName: 'Museum Director',
    narratorRole: 'Colonial Complex, York',
    verificationStatus: 'UNVERIFIED',
    textVersion: `York is not on most people's Revolutionary War itinerary. Philadelphia is an hour east, Gettysburg is half an hour west, and both of those draw millions of visitors. We get a fraction of that traffic, and I understand why. The story here is legislative, not military, and legislative stories are harder to make compelling.

But what happened in this courthouse was essential. For nine months, the Continental Congress governed the United States from York. They adopted the Articles of Confederation here — the first constitution. They ratified the French alliance here. They managed a war, debated whether to fire the commanding general, and kept a fragile union of thirteen states from flying apart.

The courthouse is a reconstruction — the original burned in 1841. But it is accurate, built on the same foundation using period construction techniques. When we bring school groups through, I ask them to look at the room and imagine it full of the most prominent politicians in America, arguing about the future of a country that might not survive the winter.

What strikes visitors is the ordinariness of the space. This is not a grand capitol building. It is a county courthouse in a market town. Congress met here because they had nowhere else to go. The British held Philadelphia. Lancaster was too close to the front. York was available, and it had the Susquehanna River as a barrier.

The mundane setting is actually the point. Self-governance does not require marble columns. It requires people willing to show up, argue, compromise, and keep working even when the cause seems lost. That happened here, in a courthouse, in a town that most of the delegates had never visited before and would never visit again.`,
    audioScript: `York is not on most Revolutionary War itineraries. Philadelphia is an hour east, Gettysburg half an hour west. The story here is legislative, not military, and harder to make compelling.

But for nine months, Congress governed the United States from this courthouse. They adopted the Articles of Confederation — the first constitution. Ratified the French alliance. Kept thirteen states from flying apart.

What strikes visitors is the ordinariness. Not a grand capitol — a county courthouse in a market town. Congress met here because they had nowhere else to go.

That mundane setting is the point. Self-governance does not require marble columns. It requires people willing to show up, argue, and compromise. That happened here, in a town most delegates never visited again.`,
    tags: ['governance', 'preservation', 'capital', 'Articles of Confederation'],
    town: { connect: { id: 'us-pa-york' } },
  },
];

// ============================================================================
// GERMANTOWN
// ============================================================================

export const germantownTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Germantown was the site of one of Washington's boldest tactical gambles. On October 4, 1777, just three weeks after losing Philadelphia at the Battle of Brandywine, Washington launched a surprise dawn attack on the main British encampment at Germantown. The plan was ambitious to the point of recklessness — four columns advancing simultaneously through morning fog on converging roads. The attack came within reach of success before confusion, fog, and a stubborn British defense of the Chew House turned a potential victory into a disorganized retreat.

The battle was a tactical defeat but a strategic signal. European observers, particularly the French, noted that Washington was willing to attack a superior force barely a month after a major loss. The audacity of the Germantown assault helped convince France that the Americans were serious about fighting — a judgment that contributed to the French alliance signed the following February.

Germantown itself was one of the oldest settlements in Pennsylvania, founded by German immigrants in 1683. By the Revolution it was a prosperous community northwest of Philadelphia known for its mills, craftsmen, and the Chew family mansion — Cliveden — which became a British strongpoint during the battle. The community's Quaker and Mennonite residents included some of the earliest voices against slavery in America, and the town had a tradition of independent thinking that predated the Revolution by nearly a century.

The Battle of Germantown is often overshadowed by Brandywine and Valley Forge in the Pennsylvania campaign narrative. But it was the battle that showed Washington was willing to take calculated risks, and that willingness — more than any single victory — helped sustain the Revolution through its most difficult year.`,
};

export const germantownPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-germantown-george-washington-battle',
    name: 'George Washington',
    roles: ['Commander-in-Chief', 'Battle Commander'],
    bioShort:
      'Planned and led the attack on Germantown, one of the most ambitious tactical operations of the war. The battle plan required four columns to converge simultaneously — a level of coordination that exceeded the Continental Army\'s capabilities but demonstrated Washington\'s aggressive instincts.',
    birthYear: 1732,
    deathYear: 1799,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-germantown-benjamin-chew',
    name: 'Benjamin Chew',
    roles: ['Chief Justice', 'Loyalist', 'Property Owner'],
    bioShort:
      'Former Chief Justice of Pennsylvania whose stone mansion, Cliveden, became a British strongpoint during the battle. About 120 British soldiers fortified the house and repelled repeated American assaults, disrupting Washington\'s attack plan.',
    birthYear: 1722,
    deathYear: 1810,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-germantown-thomas-musgrave',
    name: 'Colonel Thomas Musgrave',
    roles: ['British Officer', 'Defender of Cliveden'],
    bioShort:
      'Commander of the British 40th Regiment who fortified the Chew House during the battle and held it against repeated American attacks. His defense of Cliveden became a crucial factor in the American defeat, as it delayed and disrupted Washington\'s advancing columns.',
    birthYear: 1737,
    deathYear: 1812,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-germantown-john-sullivan',
    name: 'Major General John Sullivan',
    roles: ['Continental Army General', 'Column Commander'],
    bioShort:
      'Led the main American column down Germantown Road in the dawn attack. His troops achieved initial success, driving British pickets back before fog and confusion caused friendly fire between his column and General Wayne\'s forces.',
    birthYear: 1740,
    deathYear: 1795,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-germantown-henry-knox',
    name: 'Henry Knox',
    roles: ['Continental Army General', 'Chief of Artillery'],
    bioShort:
      'Commanded American artillery at Germantown and advised Washington to reduce the Chew House rather than bypass it. The decision to assault the fortified mansion with cannon proved costly and time-consuming, contributing to the battle\'s failure.',
    birthYear: 1750,
    deathYear: 1806,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-germantown-christopher-sauer',
    name: 'Christopher Sauer III',
    roles: ['Printer', 'Loyalist', 'German-Language Publisher'],
    bioShort:
      'German-language printer in Germantown whose family press had served the community for decades. A Loyalist, Sauer had his property confiscated after the battle. His press, the most important German-language press in colonial America, was seized and used by patriots.',
    birthYear: 1754,
    deathYear: 1799,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-germantown-adam-stephen',
    name: 'Major General Adam Stephen',
    roles: ['Continental Army General', 'Column Commander'],
    bioShort:
      'Commanded a flanking column at Germantown that became lost in the fog, fired on General Wayne\'s troops by mistake, and precipitated the confusion that turned the battle into a retreat. Stephen was later court-martialed and dismissed for drunkenness and misconduct.',
    birthYear: 1718,
    deathYear: 1791,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-germantown-hannah-lawrence',
    name: 'Hannah Lawrence',
    roles: ['Civilian', 'War Witness', 'Germantown Resident'],
    bioShort:
      'Germantown resident who sheltered in her cellar during the battle and later described the experience of hearing cannon fire strike nearby buildings and the confusion of soldiers from both sides moving through the town\'s streets in dense fog.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ORAL_TRADITION',
  },
];

export const germantownEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-germantown-battle',
    name: 'Battle of Germantown',
    startDate: new Date('1777-10-04'),
    datePrecision: 'DAY',
    summary: `Washington launched a dawn attack on the British encampment at Germantown with four converging columns. The initial assault drove in British pickets and achieved surprise, but dense fog caused confusion among the American columns. The decision to assault the fortified Chew House (Cliveden) with artillery diverted troops and time, while General Stephen's column wandered off course and fired on General Wayne's men.

The battle ended in an American retreat after roughly two hours of fighting. American casualties were approximately 1,100 killed, wounded, and captured, compared to about 530 for the British. Despite the defeat, the aggressiveness of the attack impressed European observers and contributed to French willingness to enter the war as an American ally.`,
    significanceWeight: 85,
    lat: 40.0342,
    lng: -75.1716,
    town: { connect: { id: 'us-pa-germantown' } },
  },
  {
    id: 'event-germantown-chew-house-defense',
    name: 'Defense of the Chew House',
    startDate: new Date('1777-10-04'),
    datePrecision: 'DAY',
    summary: `Colonel Musgrave's 40th Regiment fortified Benjamin Chew's stone mansion, Cliveden, as the American attack swept past their position. Henry Knox convinced Washington to reduce the strongpoint rather than bypass it, and American troops spent critical time firing cannon at the thick stone walls and attempting to storm the building.

The decision to attack the Chew House remains one of the most debated tactical choices of the war. Military convention held that an enemy strongpoint in your rear should be neutralized, but the delay cost momentum at a moment when the American attack was succeeding elsewhere. Cliveden still stands today, its walls bearing scars from the cannonballs.`,
    significanceWeight: 70,
    lat: 40.0370,
    lng: -75.1740,
    town: { connect: { id: 'us-pa-germantown' } },
  },
  {
    id: 'event-germantown-friendly-fire-incident',
    name: 'Friendly Fire in the Fog',
    startDate: new Date('1777-10-04'),
    datePrecision: 'DAY',
    summary: `Dense morning fog caused General Adam Stephen's column to lose its way and fire into the rear of General Anthony Wayne's troops, who were already engaged with the British. The friendly fire incident panicked both units. Soldiers believed they were surrounded, and the confusion spread through the American lines.

The incident was the proximate cause of the battle's collapse. Troops who had been advancing successfully suddenly believed they were under attack from multiple directions. The fog made it impossible for officers to see more than a few dozen yards, and the smoke from musket and cannon fire made visibility even worse. What had been a coordinated attack dissolved into chaos.`,
    significanceWeight: 65,
    lat: 40.0350,
    lng: -75.1720,
    town: { connect: { id: 'us-pa-germantown' } },
  },
  {
    id: 'event-germantown-1688-protest',
    name: 'Germantown Quaker Petition Against Slavery',
    startDate: new Date('1688-04-18'),
    datePrecision: 'DAY',
    summary: `Nearly a century before the Revolution, Germantown's Quaker community produced the first formal protest against slavery in the American colonies. The 1688 petition argued that slavery violated Christian principles and the rights that German immigrants had sought in coming to Pennsylvania. While not a Revolutionary War event, this document established Germantown's tradition of principled dissent.

The petition was largely ignored by the broader Quaker establishment for decades but was rediscovered and championed by abolitionists in the nineteenth century. It represents Germantown's deep roots in the struggle for human rights — a struggle that the Revolution would both advance and betray.`,
    significanceWeight: 60,
    lat: 40.0342,
    lng: -75.1716,
    town: { connect: { id: 'us-pa-germantown' } },
  },
  {
    id: 'event-germantown-british-encampment',
    name: 'British Establish Germantown Encampment',
    startDate: new Date('1777-10-01'),
    datePrecision: 'DAY',
    summary: `After occupying Philadelphia, General Howe posted a significant portion of his army at Germantown under the command of Lieutenant General Wilhelm von Knyphausen. The encampment stretched along Germantown Road, with British and Hessian troops billeted in homes and public buildings throughout the town.

Washington's intelligence network monitored the encampment closely, and it was the dispersed nature of the British position that encouraged him to attempt a surprise attack. The British were camped in a long, thin line along the main road — vulnerable to a concentrated assault if it could be delivered with enough speed and coordination.`,
    significanceWeight: 55,
    lat: 40.0342,
    lng: -75.1716,
    town: { connect: { id: 'us-pa-germantown' } },
  },
  {
    id: 'event-germantown-aftermath-retreat',
    name: 'American Retreat to Whitemarsh',
    startDate: new Date('1777-10-04'),
    datePrecision: 'DAY',
    summary: `After the battle, Washington's army retreated to Whitemarsh, about twelve miles from Germantown, to regroup. Despite the defeat, morale was not as shattered as it had been after Brandywine. The soldiers knew they had come close to victory, and the aggressive spirit of the attack sustained their willingness to keep fighting.

Washington used the weeks at Whitemarsh to reorganize his forces before eventually moving to Valley Forge for the winter. The Germantown experience informed his understanding of the army's limitations — complex multi-column attacks were beyond its current level of training. That realization made von Steuben's training program at Valley Forge even more urgent.`,
    significanceWeight: 55,
    lat: 40.0800,
    lng: -75.1900,
    town: { connect: { id: 'us-pa-germantown' } },
  },
  {
    id: 'event-germantown-sauer-press-seized',
    name: 'Confiscation of the Sauer Press',
    startDate: new Date('1778-06-01'),
    datePrecision: 'MONTH',
    summary: `The Sauer family printing press — the most important German-language press in colonial America — was confiscated by patriot authorities after the British evacuation. Christopher Sauer III, a Loyalist, lost his property, and the press was repurposed to produce patriot propaganda and government documents.

The seizure reflected the Revolution's harsh treatment of Loyalists and the strategic importance of the printing press as a tool of communication. The Sauer press had published German-language Bibles, almanacs, and newspapers for decades. Its confiscation severed a major cultural link for the German-speaking community and demonstrated that neutrality was not an option in Revolutionary Pennsylvania.`,
    significanceWeight: 55,
    lat: 40.0342,
    lng: -75.1716,
    town: { connect: { id: 'us-pa-germantown' } },
  },
  {
    id: 'event-germantown-diplomatic-impact',
    name: 'European Courts Take Notice of Germantown',
    startDate: new Date('1777-12-01'),
    datePrecision: 'MONTH',
    summary: `News of the Battle of Germantown, arriving in Europe alongside reports of the American victory at Saratoga, convinced French diplomatic and military observers that the Continental Army was a serious fighting force. While Saratoga provided the decisive victory, Germantown demonstrated that Washington was willing to attack even after a major defeat.

The combination of the two battles — one a clear victory, the other a near-miss that showed aggressive intent — helped push France toward the alliance that would be formalized in February 1778. The diplomatic impact of Germantown thus far exceeded its tactical significance. A battle that was lost on the field helped win the alliance that won the war.`,
    significanceWeight: 75,
    lat: 40.0342,
    lng: -75.1716,
    town: { connect: { id: 'us-pa-germantown' } },
  },
];

export const germantownStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-germantown-fog-battle',
    title: 'The Battle Lost in Fog',
    storyType: 'HISTORICAL_VOICE',
    verificationStatus: 'VERIFIED',
    textVersion: `The plan was elegant on paper. Four columns would converge on Germantown from different roads at dawn, hitting the British encampment from multiple directions. Sullivan would drive down the main road. Greene would swing wide to the left. Two militia columns would cover the flanks. Timing was everything — all four forces needed to arrive simultaneously to prevent the British from concentrating against any single column.

Washington's staff worked through the night of October 3 to coordinate the approach march. The distance from the army's camp at Metuchen Hill to Germantown was about sixteen miles, and the columns needed to move in darkness over unfamiliar roads to reach their positions before daylight.

The dawn attack began well. Sullivan's column achieved surprise, driving in British pickets and pushing them back along Germantown Road. For nearly an hour, the American advance rolled forward. British soldiers, caught off guard, fell back in disorder. Officers on both sides later recalled thinking the battle was going the Americans' way.

Then the fog thickened. Smoke from musket fire mixed with morning mist until visibility dropped to a few dozen yards. Sullivan's troops encountered the Chew House, where Musgrave's regiment had barricaded itself. Knox convinced Washington to reduce the strongpoint. The assault consumed time and ammunition to little effect — the stone walls absorbed cannonballs.

Meanwhile, Greene's column arrived late, and Stephen's flanking force wandered into Wayne's rear and opened fire. The sound of musketry from behind their own lines panicked Wayne's troops. Within minutes, the confusion was general. Soldiers who could not see fifty feet in front of them heard firing from every direction and assumed they were surrounded. The retreat, once it began, could not be stopped.

Washington had come within reach of a victory that might have ended the war years earlier. Instead, fog, friendly fire, and a stubborn stone house turned triumph into retreat. But Europe noticed the audacity, and that mattered more than the outcome.`,
    audioScript: `The plan was elegant: four columns converging on Germantown at dawn. Sullivan would drive down the main road, Greene would flank left, militia would cover the sides. Timing was everything.

The attack began well. Sullivan achieved surprise, pushing British pickets back for nearly an hour. Then the fog thickened. Smoke mixed with mist until visibility dropped to yards.

Sullivan's troops hit the Chew House, where Musgrave's regiment had barricaded itself behind stone walls. Knox convinced Washington to reduce it. The assault consumed time while Greene arrived late and Stephen's column wandered into Wayne's rear, opening fire on their own troops.

Panic spread. Soldiers hearing musketry from every direction in thick fog assumed they were surrounded. The retreat could not be stopped. Washington had come within reach of ending the war. Instead, fog and confusion turned near-triumph into retreat. But Europe noticed the audacity, and that mattered more.`,
    tags: ['battle', 'fog of war', 'tactics', 'diplomacy'],
    town: { connect: { id: 'us-pa-germantown' } },
  },
  {
    id: 'story-germantown-modern-cliveden',
    title: 'The Walls Still Have the Scars',
    storyType: 'MODERN_VOICE',
    narratorName: 'Historic Site Director',
    narratorRole: 'Cliveden, Germantown',
    verificationStatus: 'UNVERIFIED',
    textVersion: `Cliveden is a beautiful house. Georgian architecture, fine stonework, a central hall that catches afternoon light. Visitors sometimes arrive expecting a house museum and are startled to find cannonball scars on the front facade. The scars are real. They have been there since October 4, 1777.

Benjamin Chew built this house in the 1760s as a country retreat. He could not have imagined that its thick stone walls would become a military asset — that 120 British soldiers would barricade themselves inside while an American army tried to blow the front door down with a six-pound cannon. The battle damage is not subtle. You can put your fingers in the marks left by grapeshot.

What makes Cliveden unusual as a historic site is that the battle is only one layer of its story. The Chew family lived here for over two hundred years. The property includes outbuildings where enslaved people lived and worked. The neighborhood around it evolved from colonial German settlement to one of Philadelphia's most significant African American communities. The house sits at the intersection of multiple American histories.

When we interpret the battle, I try to convey the chaos. The fog was so thick that soldiers could hear fighting but could not see it. The American assault on the house was furious — they broke windows, tried to set fires, and at one point attempted to rush the front door. All of it failed. The walls were too thick, the defenders too determined.

The tactical question of whether Washington should have bypassed the house or assaulted it is still debated by military historians. The human question — what it was like to be inside those walls, or outside trying to get in, in dense fog with muskets firing from every window — is what we try to help visitors imagine. The scars on the walls make that easier.`,
    audioScript: `Cliveden is beautiful Georgian architecture. Visitors arrive expecting a house museum and find cannonball scars on the facade. They have been there since October 4, 1777. You can put your fingers in the marks left by grapeshot.

Benjamin Chew built this as a country retreat. He could not have imagined 120 British soldiers barricading themselves inside while Americans tried to blow the door down with cannon.

The battle is one layer. The property includes where enslaved people lived. The neighborhood became a significant African American community. Multiple American histories intersect here.

When we interpret the battle, I try to convey the chaos — fog so thick soldiers heard fighting they could not see, the furious assault that failed against stone walls. Whether Washington should have bypassed or assaulted is still debated. The scars on the walls make the human reality easier to imagine.`,
    tags: ['battle', 'preservation', 'architecture', 'layers of history'],
    town: { connect: { id: 'us-pa-germantown' } },
  },
];

// ============================================================================
// CARLISLE
// ============================================================================

export const carlisleTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Carlisle was Pennsylvania's frontier gateway during the Revolution, a town where the war against Britain intersected with the ongoing struggle for control of the continent's interior. Carlisle Barracks, established in 1757 during the French and Indian War, became one of the Continental Army's most important supply depots and training centers. Troops mustered here before marching west to defend settlements against British-allied raids by Native nations.

The town's strategic importance derived from geography. Sitting in the Cumberland Valley at the eastern edge of the Appalachian frontier, Carlisle was the last significant town before the wilderness. It served as a staging point for military expeditions, a collection center for supplies bound for the army, and a refuge for frontier families displaced by raids. The magazine at Carlisle Barracks stored the powder and shot that kept the western frontier armed.

Carlisle's connection to Mary Ludwig Hays — known to history as Molly Pitcher — gives the town a personal dimension in the Revolution's story. Hays, who lived in Carlisle before and after the war, is said to have carried water to soldiers and taken her husband's place at a cannon during the Battle of Monmouth. The details have been embellished over centuries, but the core story — a working-class woman from Carlisle who followed her husband to war and served under fire — has a historical basis that Carlisle has claimed with justification.

The town also played a role in the intellectual life of the new nation. Dickinson College, founded in Carlisle in 1783 by Benjamin Rush with support from John Dickinson, was conceived as an institution to educate citizens for republican self-governance. Rush believed that the Revolution required not just political independence but a transformation of American education, and Carlisle was his chosen site for that experiment.`,
};

export const carlislePeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-carlisle-mary-ludwig-hays',
    name: 'Mary Ludwig Hays',
    roles: ['Camp Follower', 'Artillery Assistant', 'Soldier\'s Wife'],
    bioShort:
      'Carlisle resident who accompanied her husband William Hays to the Continental Army and is traditionally identified as "Molly Pitcher." At the Battle of Monmouth in 1778, she reportedly carried water to troops and manned a cannon after her husband was incapacitated.',
    birthYear: 1754,
    deathYear: 1832,
    verificationStatus: 'ORAL_TRADITION',
  },
  {
    id: 'person-carlisle-benjamin-rush',
    name: 'Benjamin Rush',
    roles: ['Physician', 'Signer of Declaration', 'Educator'],
    bioShort:
      'Philadelphia physician and signer of the Declaration who founded Dickinson College in Carlisle in 1783. Rush believed education was essential to sustaining republican government and chose Carlisle as the site for a frontier college that would train future leaders.',
    birthYear: 1746,
    deathYear: 1813,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-carlisle-john-armstrong-sr',
    name: 'John Armstrong Sr.',
    roles: ['Militia General', 'Continental Congress Delegate', 'Frontier Commander'],
    bioShort:
      'Carlisle-based militia leader who commanded frontier defense operations during the Revolution and served as a delegate to the Continental Congress. His experience in the French and Indian War made him a natural choice for organizing western Pennsylvania\'s defense.',
    birthYear: 1717,
    deathYear: 1795,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-carlisle-william-thompson',
    name: 'William Thompson',
    roles: ['Brigadier General', 'Frontier Soldier', 'Patriot'],
    bioShort:
      'Carlisle area officer who commanded the first Pennsylvania rifle regiment, leading frontier marksmen to the siege of Boston in 1775. He was captured at the Battle of Trois-Rivières in Canada and spent years as a prisoner of war.',
    birthYear: 1736,
    deathYear: 1781,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-carlisle-ephraim-blaine',
    name: 'Ephraim Blaine',
    roles: ['Commissary General', 'Merchant', 'Supply Officer'],
    bioShort:
      'Carlisle merchant who served as Commissary General of Purchases for the Continental Army, managing the procurement and distribution of food supplies. His position placed him at the center of the logistical challenges that nearly destroyed the army at Valley Forge.',
    birthYear: 1741,
    deathYear: 1804,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-carlisle-james-wilson',
    name: 'James Wilson',
    roles: ['Lawyer', 'Continental Congress Delegate', 'Constitutional Framer'],
    bioShort:
      'Scottish-born lawyer who practiced in Carlisle before moving to Philadelphia. He signed the Declaration of Independence and was one of the most influential framers of the Constitution, arguing for popular sovereignty and a strong executive.',
    birthYear: 1742,
    deathYear: 1798,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-carlisle-william-irvine',
    name: 'William Irvine',
    roles: ['Brigadier General', 'Continental Army Officer', 'Congressman'],
    bioShort:
      'Irish-born physician turned soldier who commanded troops from the Carlisle area throughout the war. Captured at Trois-Rivières alongside Thompson, he was exchanged and returned to serve at frontier posts, including command of Fort Pitt.',
    birthYear: 1741,
    deathYear: 1804,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-carlisle-martha-bratton',
    name: 'Martha Bratton',
    roles: ['Frontier Woman', 'Civilian Defender', 'War Supporter'],
    bioShort:
      'Cumberland Valley woman who organized supplies and care for frontier militia families during the war. Women like Bratton managed farms and households while men served on frontier defense, maintaining the economic base that sustained military operations.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ANECDOTAL',
  },
];

export const carlisleEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-carlisle-rifle-companies-march',
    name: 'Carlisle Rifle Companies March to Boston',
    startDate: new Date('1775-07-01'),
    datePrecision: 'MONTH',
    summary: `Frontier rifle companies from the Carlisle area were among the first Pennsylvania units to march to the siege of Boston after Lexington and Concord. These men were experienced frontier fighters, marksmen who could hit targets at distances that astonished New England soldiers accustomed to smoothbore muskets.

William Thompson led the companies on a march of several hundred miles to join Washington's army. Their arrival demonstrated that the Revolution had support deep in the interior, not just along the coast. The riflemen's accuracy was legendary, though their independent frontier temperament sometimes clashed with military discipline.`,
    significanceWeight: 70,
    lat: 40.2015,
    lng: -77.1890,
    town: { connect: { id: 'us-pa-carlisle' } },
  },
  {
    id: 'event-carlisle-barracks-supply-depot',
    name: 'Carlisle Barracks Serves as Continental Supply Depot',
    startDate: new Date('1776-01-01'),
    datePrecision: 'YEAR',
    summary: `Carlisle Barracks became a major Continental Army supply depot, storing arms, ammunition, and provisions for both the main army and frontier defense operations. The facility, originally built for the French and Indian War, had magazines, workshops, and barracks that made it the most significant military installation in western Pennsylvania.

The barracks served as a collection point for supplies gathered from the Cumberland Valley's farms and workshops. Gunsmiths repaired weapons, blacksmiths produced tools and hardware, and wagons carried supplies east to the army or west to frontier posts. The depot's distance from the coast made it relatively safe from British attack but created transportation challenges that complicated supply operations.`,
    significanceWeight: 65,
    lat: 40.2050,
    lng: -77.1880,
    town: { connect: { id: 'us-pa-carlisle' } },
  },
  {
    id: 'event-carlisle-frontier-raids-defense',
    name: 'Frontier Defense Against British-Allied Raids',
    startDate: new Date('1778-01-01'),
    datePrecision: 'YEAR',
    summary: `Carlisle served as the staging point for defensive operations against raids by British-allied Native nations on the Pennsylvania frontier. Beginning in 1778, attacks on settlements west of the Susquehanna displaced hundreds of families, many of whom fled to Carlisle for safety.

The raids were part of Britain's frontier strategy — using Native alliances to force the Americans to divert troops from the main theater of war. Carlisle's militia and Continental units based at the barracks conducted retaliatory expeditions and maintained a defensive perimeter. The frontier war was brutal on all sides, with atrocities committed by both colonial settlers and Native warriors.`,
    significanceWeight: 65,
    lat: 40.2015,
    lng: -77.1890,
    town: { connect: { id: 'us-pa-carlisle' } },
  },
  {
    id: 'event-carlisle-hessian-prisoners',
    name: 'Hessian Prisoners Housed at Carlisle',
    startDate: new Date('1777-01-01'),
    datePrecision: 'YEAR',
    summary: `After the American victories at Trenton and Princeton, captured Hessian soldiers were marched to Carlisle and held as prisoners of war. The town's distance from the front lines made it suitable for housing prisoners, though the influx strained local resources.

Some Hessian prisoners eventually settled in the Cumberland Valley after the war, drawn by the German-speaking community already established there. The presence of prisoners in Carlisle was a visible reminder that the war had international dimensions — these were German soldiers hired by the British crown, far from home and uncertain of their fate.`,
    significanceWeight: 55,
    lat: 40.2015,
    lng: -77.1890,
    town: { connect: { id: 'us-pa-carlisle' } },
  },
  {
    id: 'event-carlisle-dickinson-college-founded',
    name: 'Dickinson College Founded',
    startDate: new Date('1783-09-09'),
    datePrecision: 'DAY',
    summary: `Benjamin Rush founded Dickinson College in Carlisle, naming it after his friend John Dickinson, then president of Pennsylvania. Rush conceived the college as an institution to educate frontier youth for republican citizenship — a direct extension of the Revolution's ideals into education.

Rush's choice of Carlisle was deliberate. He wanted the college away from Philadelphia's distractions and in a location that would serve the growing population of the interior. The college opened with a curriculum that emphasized practical knowledge alongside classical learning, reflecting Rush's belief that the new nation needed educated citizens, not just scholars.`,
    significanceWeight: 60,
    lat: 40.2026,
    lng: -77.1955,
    town: { connect: { id: 'us-pa-carlisle' } },
  },
  {
    id: 'event-carlisle-monmouth-molly-pitcher',
    name: 'Mary Hays at the Battle of Monmouth',
    startDate: new Date('1778-06-28'),
    datePrecision: 'DAY',
    summary: `Mary Ludwig Hays, a Carlisle resident who had followed her husband to the army, is traditionally credited with carrying water to troops and manning a cannon during the Battle of Monmouth. While the specific details have been embellished over centuries, pension records and contemporary accounts confirm that women like Hays served at the front during the Revolution.

The Pennsylvania legislature later granted Hays an annuity for her wartime service, lending official weight to her story. She returned to Carlisle after the war and lived there until her death. The "Molly Pitcher" legend has become larger than the historical woman, but the core narrative — a working-class woman from the Pennsylvania frontier who served under fire — reflects a documented reality of the Revolution.`,
    significanceWeight: 70,
    lat: 40.3500,
    lng: -74.2800,
    town: { connect: { id: 'us-pa-carlisle' } },
  },
  {
    id: 'event-carlisle-sullivan-expedition-staging',
    name: 'Staging for the Sullivan Expedition',
    startDate: new Date('1779-06-01'),
    datePrecision: 'MONTH',
    summary: `Carlisle contributed troops and supplies to the Sullivan Expedition of 1779, a major military campaign against the Iroquois Confederacy in New York and Pennsylvania. The expedition was Washington's response to frontier raids, particularly the Cherry Valley and Wyoming Valley massacres, and aimed to destroy the agricultural base of the pro-British Iroquois nations.

Units from the Carlisle area joined the expedition, which systematically burned Iroquois villages and crops across western New York. The campaign was militarily effective but morally devastating — it destroyed dozens of communities and displaced thousands of Native people. For Carlisle, the expedition represented the intersection of frontier defense with a broader strategy of territorial control.`,
    significanceWeight: 60,
    lat: 40.2015,
    lng: -77.1890,
    town: { connect: { id: 'us-pa-carlisle' } },
  },
  {
    id: 'event-carlisle-arms-manufacturing',
    name: 'Arms Manufacturing at Carlisle',
    startDate: new Date('1776-06-01'),
    datePrecision: 'MONTH',
    summary: `Carlisle's gunsmiths and iron workers produced arms and ammunition for the Continental Army and frontier militia throughout the war. The town's artisan community included skilled German and Scots-Irish craftsmen who manufactured Pennsylvania long rifles, repaired muskets, and cast ammunition at workshops associated with the barracks.

The manufacturing capacity at Carlisle was not on the scale of Springfield or other major armories, but it was essential for equipping frontier forces. The long rifles produced in Cumberland Valley workshops were among the most accurate weapons of the era, and the gunsmiths who made them represented a manufacturing tradition that predated the Revolution and would continue long after.`,
    significanceWeight: 55,
    lat: 40.2015,
    lng: -77.1890,
    town: { connect: { id: 'us-pa-carlisle' } },
  },
];

export const carlisleStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-carlisle-molly-pitcher',
    title: 'The Woman They Called Molly Pitcher',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-carlisle-mary-ludwig-hays' } },
    verificationStatus: 'ORAL_TRADITION',
    textVersion: `Mary Ludwig was born near Trenton, New Jersey, and came to Carlisle as a young woman to work as a domestic servant. She married William Hays, a barber who enlisted in the Continental Army as an artilleryman. When Hays marched off to war, Mary followed — as thousands of women did, cooking, washing, and nursing for the army in exchange for half-rations.

At the Battle of Monmouth on June 28, 1778, the temperature reached nearly 100 degrees. The story says Mary carried water to the gun crews — hence "Molly Pitcher," though that name may be a composite drawn from several women who performed similar service. What distinguishes Mary Hays's story is the claim that when her husband collapsed from heat or injury, she took his place at the cannon and continued firing.

The specific details are impossible to verify at this distance. But the general picture — women serving at the front, carrying water, tending wounded, and occasionally taking up weapons — is well documented. Joseph Plumb Martin, a soldier whose memoir is one of the most reliable accounts of the war, described seeing a woman at a cannon at Monmouth. He did not name her.

After the war, Mary returned to Carlisle. She remarried, worked as a charwoman, and lived in modest circumstances. In 1822, the Pennsylvania legislature granted her an annuity of forty dollars per year for her wartime service. The pension record does not mention cannon or water pitching. It simply acknowledges service.

The legend grew larger than the woman, as legends do. But the woman was real, and her story — a working-class immigrant woman from a frontier town who followed her husband to war and served under fire — belongs to the Revolution as much as any general's.`,
    audioScript: `Mary Ludwig came to Carlisle as a servant and married William Hays, a barber who enlisted as an artilleryman. When he marched to war, she followed — as thousands of women did, cooking and washing for the army in exchange for half-rations.

At Monmouth, in nearly 100-degree heat, the story says she carried water to gun crews and took her husband's place at a cannon when he collapsed. The specific details are impossible to verify, but women serving at the front is well documented.

After the war she returned to Carlisle, remarried, and worked as a charwoman. In 1822, Pennsylvania granted her a pension of forty dollars per year — simply acknowledging service.

The legend grew larger than the woman. But the woman was real, and her story — a working-class immigrant from a frontier town who served under fire — belongs to the Revolution as much as any general's.`,
    tags: ['women', 'camp followers', 'artillery', 'Monmouth'],
    town: { connect: { id: 'us-pa-carlisle' } },
  },
  {
    id: 'story-carlisle-modern-barracks',
    title: 'The Oldest Military Post in America',
    storyType: 'MODERN_VOICE',
    narratorName: 'Army Heritage Center Educator',
    narratorRole: 'U.S. Army Heritage and Education Center, Carlisle',
    verificationStatus: 'UNVERIFIED',
    textVersion: `Carlisle Barracks has been in continuous military use since 1757. That makes it the oldest continuously operated military post in the United States. Most people do not know this. They associate Carlisle with the Army War College, which has been here since 1951, or with the Carlisle Indian Industrial School, which operated from 1879 to 1918. But the military history of this ground starts with the French and Indian War and runs through the Revolution and every American conflict since.

During the Revolution, the barracks served as a supply depot, a mustering point, and a prisoner of war camp. The magazine stored gunpowder and ammunition for both the Continental Army and the frontier militia. Wagons left here carrying supplies to Valley Forge and to western outposts defending against raids.

What I try to help visitors understand is the geography. Stand on the parade ground and look west. The Appalachian ridges are visible on the horizon. In the 1770s, beyond those ridges was contested territory — not empty wilderness, but land where Native nations, colonial settlers, and imperial powers competed for control. Carlisle was the last outpost of organized colonial society before that frontier.

The women's story matters here too. Mary Ludwig Hays — Molly Pitcher — lived in Carlisle before and after the war. The wives and families of soldiers stationed at the barracks formed a community that sustained the military operation. Without camp followers, the Continental Army could not have functioned. They cooked, washed, nursed, and sometimes fought. Carlisle honors Hays with a grave monument, but she represents hundreds of women whose names we do not know.

This post has been many things over 260 years. A frontier fort, a supply depot, an Indian school, a war college. The Revolutionary layer is just one, but it set the pattern: Carlisle is where the army has prepared for whatever comes next.`,
    audioScript: `Carlisle Barracks has been in continuous military use since 1757 — the oldest military post in America. During the Revolution, it was a supply depot, mustering point, and prisoner camp. Wagons left here carrying supplies to Valley Forge and western outposts.

The geography matters. Look west from the parade ground and the Appalachian ridges are visible. In the 1770s, beyond those ridges was contested territory. Carlisle was the last outpost of colonial society.

Mary Ludwig Hays lived here before and after the war. She represents hundreds of women who sustained the army — cooking, nursing, sometimes fighting. Without camp followers, the Continental Army could not have functioned.

This post has been many things over 260 years. The Revolutionary layer is just one, but it set the pattern: Carlisle is where the army prepares for what comes next.`,
    tags: ['frontier', 'military', 'women', 'Carlisle Barracks'],
    town: { connect: { id: 'us-pa-carlisle' } },
  },
];

// ============================================================================
// PAOLI
// ============================================================================

export const paoliTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Paoli entered the Revolution's vocabulary on the night of September 20-21, 1777, when British forces under Major General Charles Grey launched a surprise bayonet attack on Anthony Wayne's division camped near the Paoli Tavern. Grey ordered his men to remove their flints so they could not accidentally discharge their muskets and give away the assault. The resulting attack — silent, sudden, and devastating — killed or wounded approximately 200 Americans, many of them bayoneted as they tried to flee their tents.

The engagement became known as the Paoli Massacre, though whether it met the definition of a massacre has been debated since the night it happened. Wayne's troops had been surprised by their own carelessness — British intelligence had located the camp, and Wayne had dismissed warnings. Grey's troops used bayonets in a night attack, which was brutal but tactically legitimate. The Americans, however, insisted that British soldiers had killed men trying to surrender and bayoneted the wounded. Courts of inquiry produced conflicting testimony, but the patriot narrative prevailed.

"Remember Paoli" became a rallying cry for American troops, much as "Remember the Alamo" would serve a later generation. At the Battle of Germantown two weeks later, and at subsequent engagements, Continental soldiers invoked Paoli to stiffen their resolve. The psychological impact of the event far exceeded its military significance. The memory of a night attack that killed sleeping men hardened American determination in ways that conventional battlefield defeats did not.

Paoli itself was a small crossroads community in Chester County, named after the tavern that served as its landmark. The tavern took its name from Pasquale Paoli, the Corsican independence leader admired by American colonists as a fellow fighter against imperial rule. The irony of a massacre occurring at a place named for liberty was not lost on contemporaries, and it reinforced the narrative that the British were waging a war of cruelty against people fighting for freedom.`,
};

export const paoliPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-paoli-anthony-wayne',
    name: 'Anthony Wayne',
    roles: ['Brigadier General', 'Division Commander', 'Continental Army Officer'],
    bioShort:
      'Chester County-born general whose division was surprised at Paoli. Wayne demanded and received a court-martial to clear his reputation, which acquitted him with honor. He went on to become one of Washington\'s most aggressive commanders, earning the nickname "Mad Anthony."',
    birthYear: 1745,
    deathYear: 1796,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-paoli-charles-grey',
    name: 'Major General Charles Grey',
    roles: ['British Commander', 'Paoli Attack Leader'],
    bioShort:
      'British general who planned and executed the surprise bayonet attack at Paoli. His order to remove flints from muskets earned him the nickname "No-Flint Grey." The attack was tactically brilliant but its aftermath — real or alleged killing of surrendering men — made him a villain in American memory.',
    birthYear: 1729,
    deathYear: 1807,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-paoli-thomas-hartley-paoli',
    name: 'Colonel Thomas Hartley',
    roles: ['Continental Officer', 'Regiment Commander', 'Battle Participant'],
    bioShort:
      'Commanded a regiment under Wayne at Paoli and helped organize the defense during the surprise attack. Hartley\'s regiment suffered significant casualties but maintained enough order to cover the retreat of Wayne\'s division.',
    birthYear: 1748,
    deathYear: 1800,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-paoli-richard-humpton',
    name: 'Colonel Richard Humpton',
    roles: ['Continental Officer', 'Regiment Commander'],
    bioShort:
      'Commanded a Pennsylvania regiment at Paoli and was severely wounded in the bayonet attack. His regiment bore some of the heaviest casualties, and his survival was considered fortunate given the ferocity of the assault on his position.',
    birthYear: 1733,
    deathYear: 1808,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-paoli-adam-hubley',
    name: 'Major Adam Hubley',
    roles: ['Continental Officer', 'Diarist'],
    bioShort:
      'Lancaster officer who served at Paoli and recorded the experience in his journal. His account is one of the most detailed firsthand descriptions of the attack, documenting the confusion of being awakened by bayonet-wielding soldiers in darkness.',
    birthYear: 1750,
    deathYear: 1793,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-paoli-samuel-hay',
    name: 'Colonel Samuel Hay',
    roles: ['Continental Officer', 'Eyewitness'],
    bioShort:
      'Pennsylvania officer who wrote vivid letters describing the aftermath of the Paoli attack, including his account of finding bayoneted bodies of men who appeared to have been trying to surrender. His correspondence helped shape the "massacre" narrative.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-paoli-john-andre',
    name: 'Major John André',
    roles: ['British Officer', 'Intelligence Agent', 'Paoli Participant'],
    bioShort:
      'British officer who participated in the Paoli attack and recorded it in his journal as a tactical success. André would later become infamous for his role in Benedict Arnold\'s treason and was hanged as a spy in 1780.',
    birthYear: 1750,
    deathYear: 1780,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-paoli-jane-wayne',
    name: 'Jane Wayne',
    roles: ['Plantation Manager', 'Soldier\'s Wife', 'Civilian'],
    bioShort:
      'Wife of Anthony Wayne who managed the family\'s Waynesborough estate in Chester County while her husband served with the army. Like many officers\' wives, she ran a complex agricultural operation alone for years, receiving intermittent letters and uncertain news.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ANECDOTAL',
  },
];

export const paoliEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-paoli-massacre',
    name: 'The Paoli Massacre',
    startDate: new Date('1777-09-21'),
    datePrecision: 'DAY',
    summary: `In the early hours of September 21, British forces under General Grey launched a surprise bayonet attack on Wayne's division camped near the Paoli Tavern. Grey ordered his soldiers to remove their musket flints, ensuring silence during the approach. The attack achieved complete surprise, and the British swept through the American camp with bayonets, killing or wounding approximately 200 men.

The Americans insisted the British had killed men trying to surrender and bayoneted the wounded — charges that the British denied. Wayne was initially blamed for the disaster but demanded a court-martial that acquitted him with honor. The event became a powerful propaganda tool for the patriot cause, and "Remember Paoli" echoed through subsequent battles.`,
    significanceWeight: 80,
    lat: 40.0418,
    lng: -75.4867,
    town: { connect: { id: 'us-pa-paoli' } },
  },
  {
    id: 'event-paoli-wayne-court-martial',
    name: 'Wayne\'s Court-Martial and Acquittal',
    startDate: new Date('1777-11-01'),
    datePrecision: 'MONTH',
    summary: `Anthony Wayne demanded a court-martial to address accusations that his negligence had caused the Paoli disaster. The court examined testimony from officers and soldiers and concluded that Wayne had acted with honor, though it noted he might have been more attentive to intelligence warnings about British proximity.

The acquittal restored Wayne's reputation and allowed him to continue his career, which would include significant commands at Germantown, Monmouth, and Stony Point. The court-martial process itself demonstrated the Continental Army's commitment to military justice — an officer accused of failure was given a formal hearing rather than simply dismissed.`,
    significanceWeight: 55,
    lat: 40.0418,
    lng: -75.4867,
    town: { connect: { id: 'us-pa-paoli' } },
  },
  {
    id: 'event-paoli-remember-paoli-cry',
    name: '"Remember Paoli" at Germantown',
    startDate: new Date('1777-10-04'),
    datePrecision: 'DAY',
    summary: `Just two weeks after the Paoli attack, American soldiers invoked "Remember Paoli" as they charged into the Battle of Germantown. The rallying cry expressed the rage that the night attack had generated and transformed a military defeat into a motivational force.

The cry continued to be used at subsequent engagements, serving the same psychological function that other "Remember" slogans would serve in later American wars. The Paoli massacre gave soldiers a personal grievance to fight for — not just abstract principles of liberty, but vengeance for comrades killed in what they believed was a dishonorable attack.`,
    significanceWeight: 65,
    lat: 40.0342,
    lng: -75.1716,
    town: { connect: { id: 'us-pa-paoli' } },
  },
  {
    id: 'event-paoli-wayne-positioned',
    name: 'Wayne\'s Division Positioned Near Paoli',
    startDate: new Date('1777-09-19'),
    datePrecision: 'DAY',
    summary: `After the American defeat at Brandywine on September 11, Washington positioned Wayne's division near the Paoli Tavern to harass the British rear as Howe's army moved toward Philadelphia. Wayne's 1,500 troops camped in the woods, monitoring British movements and waiting for an opportunity to strike supply trains.

The position was intended to be temporary and aggressive, but Wayne's camp was poorly concealed. British intelligence — including reports from local Loyalists — pinpointed his location. The failure to maintain adequate security and act on warnings of British knowledge of the camp's position set the stage for the surprise attack two days later.`,
    significanceWeight: 55,
    lat: 40.0418,
    lng: -75.4867,
    town: { connect: { id: 'us-pa-paoli' } },
  },
  {
    id: 'event-paoli-burial-of-dead',
    name: 'Burial of the Paoli Dead',
    startDate: new Date('1777-09-22'),
    datePrecision: 'DAY',
    summary: `Local residents and returning American soldiers buried the dead from the Paoli attack in a mass grave near the battlefield. The burial detail reported finding bodies with multiple bayonet wounds, reinforcing the narrative that the British had committed atrocities against men who were no longer fighting.

The burial site became an early memorial, tended by the local community. It remains the Paoli Battlefield today, preserved as a small park with a monument erected in 1817 — one of the earliest Revolutionary War memorials in the country. The site's preservation reflects how deeply the Paoli attack embedded itself in local and national memory.`,
    significanceWeight: 55,
    lat: 40.0418,
    lng: -75.4867,
    town: { connect: { id: 'us-pa-paoli' } },
  },
  {
    id: 'event-paoli-grey-flintless-order',
    name: 'Grey Issues the "No Flint" Order',
    startDate: new Date('1777-09-20'),
    datePrecision: 'DAY',
    summary: `Before the night attack, General Grey ordered his soldiers to remove the flints from their muskets, ensuring that no accidental discharge would alert the Americans. The order meant the assault would be conducted entirely with bayonets and swords — a terrifying prospect for the defenders and a demonstration of disciplined tactical planning.

The "no flint" order became central to both the British and American narratives of the engagement. The British cited it as evidence of tactical sophistication. The Americans cited it as evidence of premeditated cruelty — an army that advanced with fixed bayonets and no intention of taking prisoners. Grey earned the nickname "No-Flint Grey," which he reportedly wore as a badge of honor.`,
    significanceWeight: 60,
    lat: 40.0418,
    lng: -75.4867,
    town: { connect: { id: 'us-pa-paoli' } },
  },
  {
    id: 'event-paoli-stony-point-revenge',
    name: 'Wayne\'s Bayonet Assault at Stony Point',
    startDate: new Date('1779-07-16'),
    datePrecision: 'DAY',
    summary: `Nearly two years after Paoli, Anthony Wayne led a bayonet-only assault on the British fort at Stony Point, New York, in a deliberate echo of the attack that had nearly destroyed his reputation. Wayne's troops stormed the fortification at night with unloaded muskets, using only bayonets — turning Grey's tactic against the British.

The assault succeeded brilliantly, capturing the fort and its garrison. Wayne was wounded in the attack but won accolades for one of the war's most daring operations. The symmetry was intentional and deeply satisfying to Americans who remembered Paoli. Wayne had answered the massacre with a demonstration that American soldiers could execute the same tactics with discipline and restraint — his troops took prisoners rather than killing the surrendered.`,
    significanceWeight: 70,
    lat: 41.2387,
    lng: -73.9668,
    town: { connect: { id: 'us-pa-paoli' } },
  },
  {
    id: 'event-paoli-1817-memorial',
    name: 'Paoli Battlefield Memorial Erected',
    startDate: new Date('1817-09-20'),
    datePrecision: 'DAY',
    summary: `Local citizens erected a memorial at the Paoli battlefield on the fortieth anniversary of the attack — one of the earliest permanent Revolutionary War memorials in the United States. The monument, a stone marker over the mass grave, formalized a tradition of local remembrance that had continued unbroken since 1777.

The memorial's creation reflected the early nineteenth-century interest in commemorating the Revolution before its participants died. It also demonstrated how the Paoli narrative had been preserved in local memory — the site had been maintained by the community for four decades before any formal monument was built. The Paoli Battlefield remains one of the best-preserved Revolutionary War sites in southeastern Pennsylvania.`,
    significanceWeight: 50,
    lat: 40.0418,
    lng: -75.4867,
    town: { connect: { id: 'us-pa-paoli' } },
  },
];

export const paoliStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-paoli-night-attack',
    title: 'Awakened by Bayonets',
    storyType: 'HISTORICAL_VOICE',
    verificationStatus: 'VERIFIED',
    textVersion: `The camp was asleep. Wayne's sentries were posted, but the night was dark and the British knew exactly where the Americans were. Loyalist informants had mapped the camp's position, and Grey's assault force moved through the woods with disciplined silence — no loaded muskets, no light, nothing to give them away until the bayonets were already among the tents.

The first warning was the sound of screaming. British soldiers swept through the camp in a line, bayoneting men in their blankets and setting fire to huts to silhouette fleeing soldiers against the flames. The Americans had minutes, at most, to go from sleep to a fight for survival against an enemy they could barely see.

Major Adam Hubley later wrote that the confusion was total. Men ran in every direction, some toward the enemy, some away, most unable to tell which was which in the darkness. Officers tried to form lines but could not find their men. The campfires that should have been extinguished became death traps — soldiers silhouetted against them were easy targets for bayonet-wielding attackers.

Wayne himself narrowly escaped, rallying what troops he could and conducting a fighting retreat. His horse was wounded under him. He saved most of his division, but the camp and its supplies were lost, along with roughly 200 men killed, wounded, or captured.

The argument over what happened at Paoli began immediately and has never fully resolved. The British maintained they conducted a legitimate night attack. The Americans insisted it was a massacre — that British soldiers killed men who tried to surrender, that the wounded were bayoneted where they lay. Colonel Samuel Hay wrote to a friend: "The annals of the age cannot produce such a scene of butchery."

Both sides had reason to shape the narrative. What is certain is this: men were killed in darkness by bayonets, the survivors were enraged, and "Remember Paoli" became the cry that carried that rage forward into the next fight.`,
    audioScript: `The camp was asleep. British soldiers moved through the woods in silence — no loaded muskets, no light. Loyalist informants had mapped the position. The first warning was screaming.

They swept through camp bayoneting men in blankets, setting fires to silhouette fleeing soldiers. The confusion was total. Men ran in every direction, unable to tell friend from enemy in darkness. Wayne rallied what troops he could, his horse shot under him, and conducted a fighting retreat.

Roughly 200 Americans were killed, wounded, or captured. The British called it a legitimate night attack. The Americans called it a massacre — men killed trying to surrender, wounded bayoneted where they lay.

Both sides shaped the narrative. What is certain: men were killed in darkness by bayonets, survivors were enraged, and "Remember Paoli" became the cry that carried that rage into the next fight.`,
    tags: ['battle', 'night attack', 'bayonets', 'massacre narrative'],
    town: { connect: { id: 'us-pa-paoli' } },
  },
  {
    id: 'story-paoli-modern-battlefield',
    title: 'A Small Park with a Long Memory',
    storyType: 'MODERN_VOICE',
    narratorName: 'Local Historian',
    narratorRole: 'Chester County Historical Society',
    verificationStatus: 'UNVERIFIED',
    textVersion: `The Paoli Battlefield is easy to miss. It is a small park in a suburban neighborhood, surrounded by houses and a shopping center. There is no visitor center, no staffed interpretation, just a stone monument from 1817 standing over a mass grave in a quiet grove of trees. Most of the people driving past on Route 30 have no idea what happened here.

That smallness is part of its power. The major Revolutionary War sites — Valley Forge, Independence Hall — have been developed with parking lots and exhibit halls and ranger programs. Paoli has not. It is essentially unchanged from what it was two hundred years ago: a burial ground maintained by a local community that has never stopped remembering.

The monument, erected on the fortieth anniversary of the attack, is one of the oldest Revolutionary War memorials in the country. It was built not by Congress or the state but by the people who lived here. Their ancestors had buried the dead in 1777, and they felt an obligation to mark the spot permanently. That impulse — local people caring for the memory of what happened on their ground — is how most of the Revolution was actually preserved.

What I tell people who find the site is this: the Paoli attack was not a major battle. It involved perhaps 3,000 men total and lasted less than an hour. But it produced a rallying cry that echoed through the rest of the war and a memorial tradition that has lasted nearly 250 years. The relationship between the scale of an event and the depth of its impact is not always proportional.

The bodies of the men killed here are still in the ground beneath the monument. That fact tends to change how visitors stand when I mention it. This is not a symbolic memorial. It is a grave.`,
    audioScript: `The Paoli Battlefield is easy to miss — a small park in a suburban neighborhood, a stone monument from 1817 over a mass grave. Most people driving past on Route 30 have no idea what happened here.

That smallness has power. Major sites have parking lots and ranger programs. Paoli has not. It is a burial ground maintained by locals who never stopped remembering.

The monument was built by the community, not Congress. Their ancestors buried the dead in 1777, and they felt an obligation to mark the spot. That impulse — local people caring for memory — is how most of the Revolution was preserved.

The bodies are still in the ground beneath the monument. That fact tends to change how visitors stand. This is not a symbolic memorial. It is a grave.`,
    tags: ['preservation', 'memory', 'battlefield', 'community'],
    town: { connect: { id: 'us-pa-paoli' } },
  },
];
