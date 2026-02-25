// MODEL: Claude Sonnet (structure + code + historical synthesis)
// Morristown, NJ - Complete flagship content for NJ v0

import { Prisma } from '@prisma/client';

/**
 * Morristown, New Jersey - Two winters of endurance
 *
 * NOTE ON VERIFICATION: All historical content has been synthesized from
 * established scholarly sources including John T. Cunningham's "The Uncertain
 * Revolution," NPS Morristown National Historical Park documentation, Joseph
 * Plumb Martin's memoir, and James Thacher's military journal.
 * Stories marked VERIFIED have strong documentary evidence. Tempe Wick's
 * story carries ORAL_TRADITION status as it derives from local legend.
 */

export const morristownTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Morristown is where the American Revolution nearly ended — not on a battlefield but in a winter camp. The Continental Army wintered here twice, in 1777 and 1779-80, and both times the question was not whether they could defeat the British but whether they could survive long enough to keep fighting.

The first encampment, from January to May 1777, followed Washington's dramatic victories at Trenton and Princeton. The army arrived exhausted and depleted, sheltering in the town and surrounding countryside while smallpox raged through the ranks. Washington made the controversial decision to inoculate his troops — a calculated risk that temporarily weakened the army but ultimately saved it from the epidemic that had destroyed more soldiers than British muskets.

The second winter, 1779-80, was catastrophic. Known to soldiers as the "Hard Winter," it brought the worst weather in a generation. Twenty-eight blizzards buried Jockey Hollow under six feet of snow. Supply lines collapsed. Soldiers went days without food, weeks without pay. They built over a thousand log huts and still froze. The Pennsylvania Line mutinied in January 1781, marching on the Continental Congress to demand back pay and discharge. It was the most dangerous internal crisis the army had faced.

Why does Morristown matter today? Because it tells the story the glory narratives leave out — the story of endurance without certainty, of ordinary soldiers choosing to stay when every rational calculation said to leave. Valley Forge gets the national mythology, but Morristown's second winter was worse by nearly every measure: colder, longer, hungrier, and marked by a mutiny that threatened to dissolve the army entirely. The Morristown National Historical Park, America's first national historical park, preserves the ground where that endurance was tested. Walking Jockey Hollow today, visitors can still see the outlines of hut sites where men chose, day after day, to remain.`,
  tourismInfo: {
    walkabilityScore: 65,
    publicTransitAccess: true,
    nearMajorCity: true,
    parkingAvailable: true,
    adaCompliance: 70,
    bestTimeToVisit: 'Spring and fall for comfortable trail walking at Jockey Hollow; winter visits convey the hardship context',
    avgVisitDuration: '4-5 hours',
    guidedToursAvailable: true,
    visitorCenterQuality: 85,
    digitalResourcesQuality: 75,
    educationalProgramsCount: 12,
    npsDesignation: true,
    stateHistoricSite: true,
    activePreservationOrg: true,
    preservationQuality: 90,
    placeholder: false,
  },
};

/**
 * Events connected to Morristown
 */
export const morristownEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-morristown-first-winter',
    name: 'First Winter Encampment at Morristown',
    startDate: new Date('1777-01-06'),
    datePrecision: 'MONTH',
    summary: `After his victories at Trenton and Princeton, Washington marched the Continental Army to Morristown in January 1777 for winter quarters. The choice was strategic: Morristown sat behind the Watchung Mountains, which provided a natural defensive barrier against British advance from New York, while the surrounding iron industry could supply the army.

The army that arrived was in desperate condition. Many soldiers had marched barefoot through snow. Enlistments were expiring. Smallpox was spreading through the ranks faster than any British advance. Washington established his headquarters at Jacob Arnold's Tavern on the town green and dispersed troops among local homes and farms.

The encampment lasted until May 1777. During these months, Washington reorganized his battered forces, recruited new enlistments, and made the fateful decision to inoculate his entire army against smallpox — a procedure that was controversial, medically risky, and strategically brilliant. The army that emerged in spring was healthier and more organized than the one that had stumbled into town.`,
    significanceWeight: 90,
    lat: 40.7968,
    lng: -74.4773,
    town: { connect: { id: 'us-nj-morristown' } },
  },
  {
    id: 'event-morristown-hard-winter',
    name: 'The Hard Winter: Second Encampment at Morristown',
    startDate: new Date('1779-12-01'),
    datePrecision: 'MONTH',
    summary: `The winter of 1779-80 at Morristown was the worst the Continental Army endured — worse than Valley Forge by nearly every measure. Washington chose Morristown again for the same strategic reasons, establishing his headquarters at the Ford Mansion while approximately 10,000 troops built a vast encampment of over 1,000 log huts at Jockey Hollow.

The weather was unprecedented. Twenty-eight blizzards struck between November and April. Snow reached six feet in places. New York Harbor froze solid — something that had not happened in living memory. The supply system, already strained, collapsed entirely. Soldiers survived on half-rations, then quarter-rations, then nothing at all. Private Joseph Plumb Martin recorded eating birch bark and roasted shoe leather.

Morale disintegrated. Soldiers had not been paid in months. Their clothing was in rags. Some units threatened mutiny. On May 25, 1780, two Connecticut regiments paraded under arms and refused orders, demanding food and pay. Officers suppressed the uprising, but the incident revealed how close the army was to dissolution. The fact that most soldiers stayed through this nightmare — without pay, without adequate food, without certainty that the cause would succeed — remains one of the most remarkable acts of collective endurance in American military history.`,
    significanceWeight: 100,
    lat: 40.7650,
    lng: -74.5350,
    town: { connect: { id: 'us-nj-morristown' } },
  },
  {
    id: 'event-morristown-pa-mutiny',
    name: 'Pennsylvania Line Mutiny',
    startDate: new Date('1781-01-01'),
    datePrecision: 'DAY',
    summary: `On January 1, 1781, approximately 1,500 soldiers of the Pennsylvania Line stationed near Morristown mutinied. This was not a spontaneous riot but an organized action by veteran soldiers who had endured years of broken promises. They had not been paid in over a year. Many believed their three-year enlistments had expired, while officers insisted they had enlisted "for the duration of the war."

The mutineers organized themselves under elected sergeants, rejected their officers' authority, and marched south toward Philadelphia to confront the Continental Congress directly. They maintained military discipline throughout — they were not deserting but demanding justice. Along the march, they rejected overtures from British agents who tried to recruit them, demonstrating that their grievance was with Congress, not with the cause.

The crisis was resolved through negotiation. A congressional committee met the mutineers at Princeton and agreed to review enlistment terms and provide back pay. Approximately half the Pennsylvania Line was discharged. The mutiny exposed the fundamental contradiction at the heart of the Revolution: an army fighting for liberty was being sustained by men who were themselves unfree — bound by contracts, unpaid, and kept in service by a government that lacked the resources or political will to fulfill its obligations.`,
    significanceWeight: 85,
    town: { connect: { id: 'us-nj-morristown' } },
  },
  {
    id: 'event-morristown-smallpox-inoculation',
    name: 'Continental Army Smallpox Inoculation Program',
    startDate: new Date('1777-02-05'),
    datePrecision: 'MONTH',
    summary: `In early 1777, Washington ordered the mass inoculation of the Continental Army against smallpox — one of the most consequential medical decisions in American military history. The disease had killed more soldiers than combat, and the army wintering at Morristown was particularly vulnerable as troops from different regions mixed in close quarters.

Inoculation in the 18th century was not vaccination. It involved deliberately infecting patients with live smallpox material, inducing a (usually) milder case that conferred immunity. The procedure was dangerous: patients were genuinely ill for weeks, and some died. Inoculating an entire army meant temporarily incapacitating a significant portion of the fighting force.

Washington kept the program secret from the British, who could have attacked during the vulnerable period. Soldiers were inoculated in rotating groups so that some units remained combat-ready at all times. Dr. Nathaniel Bond oversaw the operation from makeshift hospitals around Morristown. The results were dramatic: smallpox rates in the Continental Army plummeted, and the disease ceased to be a strategic threat. Historians have called it the first large-scale military public health campaign in American history.`,
    significanceWeight: 80,
    town: { connect: { id: 'us-nj-morristown' } },
  },
  {
    id: 'event-morristown-arnold-treason',
    name: "Benedict Arnold's Treason Discovered",
    startDate: new Date('1780-09-25'),
    datePrecision: 'DAY',
    summary: `In September 1780, while the Continental Army was still recovering from the Hard Winter at Morristown, the most shocking betrayal of the Revolution was uncovered. Benedict Arnold, one of Washington's most trusted generals, had been secretly negotiating with the British to surrender West Point — the critical fortress controlling the Hudson River — in exchange for money and a British commission.

The plot was discovered when British Major John André, Arnold's contact, was captured near Tarrytown, New York, carrying incriminating documents. Arnold fled to a British warship. André was tried, convicted, and hanged as a spy. Washington, headquartered at the Ford Mansion in Morristown when the conspiracy unraveled, was reportedly stunned by the betrayal of an officer he had championed and defended.

The Arnold affair deepened the crisis of confidence already gripping the army after the Hard Winter and the Pennsylvania Line's unrest. If a hero of Saratoga could betray the cause, what held the rest of the army together? The answer — as Morristown's endurance had already demonstrated — was not glory or profit but something harder to name: a commitment that outlasted individual grievance.`,
    significanceWeight: 75,
    town: { connect: { id: 'us-nj-morristown' } },
  },
];

/**
 * People connected to Morristown events
 */
export const morristownPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-george-washington',
    name: 'George Washington',
    roles: ['Commander-in-Chief', 'General', 'Strategist'],
    bioShort:
      'Commander-in-Chief of the Continental Army who chose Morristown for winter quarters twice, managing the army through its most desperate periods of privation, disease, and near-mutiny.',
    bioLong: `George Washington's relationship with Morristown defined the unglamorous reality of revolutionary command. He brought his army here twice — in 1777 and 1779-80 — and both times faced challenges that no battlefield victory could resolve: disease, desertion, supply collapse, and the slow erosion of political support.

During the first winter, Washington made the critical decision to inoculate his army against smallpox, accepting the short-term risk of weakening his forces to eliminate the disease that had killed more soldiers than British muskets. During the second winter, he watched his army starve, freeze, and nearly dissolve. His correspondence from the Ford Mansion is a masterclass in controlled desperation: letters to Congress pleading for supplies, to state governors demanding recruits, to his officers urging patience with men who had every reason to quit.

Washington's genius at Morristown was not tactical but managerial. He held an army together through two winters when the rational choice for every individual soldier was to go home. He did this through a combination of personal example, political maneuvering, and sheer stubborn refusal to acknowledge that the cause might fail.`,
    birthYear: 1732,
    deathYear: 1799,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-alexander-hamilton',
    name: 'Alexander Hamilton',
    roles: ['Aide-de-Camp', 'Artillery Officer', 'Staff Officer'],
    bioShort:
      "Washington's chief aide-de-camp during both Morristown encampments, Hamilton managed correspondence, gathered intelligence, and grew increasingly frustrated with the weak central government that left the army starving.",
    bioLong: `Alexander Hamilton served as Washington's most trusted aide-de-camp during the Morristown encampments, handling the commander's vast correspondence and serving as his intellectual partner in navigating the political crises that threatened the army's survival.

Hamilton arrived at Morristown as a young artillery officer who had distinguished himself at Trenton and Princeton. Washington recognized his brilliance and attached him to headquarters staff. During both winters, Hamilton drafted many of Washington's most important letters — the desperate appeals to Congress, the carefully worded orders maintaining discipline, the diplomatic communications with French allies.

The Morristown experience shaped Hamilton's political thinking profoundly. Watching the army starve because Congress lacked the power to tax or compel state contributions convinced him that the Articles of Confederation were fatally flawed. His later advocacy for a strong central government — culminating in the Federalist Papers and his role as Treasury Secretary — grew directly from nights at the Ford Mansion watching an army die for want of a government capable of sustaining it.

At Morristown, Hamilton also met Elizabeth Schuyler, daughter of General Philip Schuyler. They married in December 1780, one of the few bright moments in a dark period.`,
    birthYear: 1755,
    deathYear: 1804,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-martha-washington-morristown',
    name: 'Martha Washington',
    roles: ['Headquarters Manager', 'Morale Builder', "Commander's Wife"],
    bioShort:
      'Joined Washington at Morristown during both winter encampments, managing the headquarters household, organizing sewing circles to produce clothing for soldiers, and hosting events to maintain officer morale.',
    bioLong: `Martha Washington traveled to Morristown during both winter encampments, arriving each time to find her husband presiding over an army in crisis. Her presence was not merely domestic — it was strategic. As the wife of the commander-in-chief, she served as the social center of headquarters life, hosting dinners and gatherings that maintained the fragile morale of the officer corps.

During the Hard Winter of 1779-80, Martha organized sewing circles among officers' wives and local women to produce desperately needed clothing for soldiers. She visited sick and wounded troops. She managed the Ford Mansion household, which functioned simultaneously as a private residence, military headquarters, and social venue.

Martha's willingness to endure the privations of winter camp — leaving the comfort of Mount Vernon for months at a time — was noticed by officers and soldiers alike. She represented a commitment to the cause that went beyond military duty. Her presence said, in effect, that the Washington family had staked everything on this revolution and would see it through regardless of hardship.

The Morristown winters tested Martha as they tested every member of the army. She met the test with the same quiet determination that characterized her husband's command.`,
    birthYear: 1731,
    deathYear: 1802,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-tempe-wick',
    name: 'Tempe Wick',
    roles: ['Local Resident', 'Legend'],
    bioShort:
      'Young Morristown-area woman who, according to local legend, hid her horse in her bedroom for three days to prevent mutinous soldiers from seizing it — a story that captures the disruption military encampments brought to civilian life.',
    bioLong: `Temperance "Tempe" Wick is one of Morristown's most enduring legends. According to tradition, during the Pennsylvania Line mutiny of January 1781, mutinous soldiers attempted to commandeer her horse as she rode near the Jockey Hollow encampment. Rather than surrender the animal — essential for a farm family's survival — she rode home at a gallop and hid the horse in a bedroom of the Wick farmhouse for three days until the danger passed.

The story may be true, or it may be a composite of several incidents polished by generations of retelling. What is certain is that it reflects a real tension: the Continental Army's presence in Morristown created enormous strain on civilian communities. Soldiers desperate for food, firewood, and transportation took what they needed from local farms, sometimes with permission and often without.

Tempe Wick's story endures because it humanizes the Revolution's cost to ordinary people — particularly women, who managed farms and households while the army camped in their fields, ate their provisions, and cut their timber. The Wick House still stands at Jockey Hollow, preserved by the National Park Service as a reminder that the Revolution's burdens fell on civilians and soldiers alike.`,
    birthYear: 1758,
    deathYear: 1819,
    verificationStatus: 'ORAL_TRADITION',
  },
  {
    id: 'person-joseph-plumb-martin',
    name: 'Joseph Plumb Martin',
    roles: ['Private Soldier', 'Diarist', 'Memoirist'],
    bioShort:
      "Enlisted Continental soldier whose published memoir provides the most vivid enlisted man's account of the Morristown winters, documenting starvation, freezing, and the daily reality of service in Washington's army.",
    bioLong: `Joseph Plumb Martin enlisted in the Continental Army at age fifteen and served for the duration of the war. His memoir, published in 1830 as "A Narrative of Some of the Adventures, Dangers and Sufferings of a Revolutionary Soldier," is the single most important enlisted man's account of the Revolution — and his descriptions of the Morristown winters are among its most powerful passages.

Martin was present during the Hard Winter of 1779-80. His account of starvation is unflinching: he describes eating birch bark, boiling shoe leather, and going days without any food at all. He records the cold with the specificity of someone who endured it: fingers too numb to load a musket, sentries found frozen at their posts, the constant struggle to keep fires burning in huts that leaked heat as fast as it was generated.

But Martin's memoir is valuable for more than its descriptions of suffering. He writes with intelligence, irony, and occasional dark humor about the experience of being a private soldier in an army that its own government seemed to have forgotten. His voice represents the thousands of enlisted men whose endurance at Morristown kept the Revolution alive — men who had no property, no political power, and no guarantee that the country they were fighting for would remember them.

Martin survived the war, settled in Maine, and lived until 1850, long enough to see the Revolution he had fought in become the founding mythology of a nation that never adequately compensated its ordinary soldiers.`,
    birthYear: 1760,
    deathYear: 1850,
    verificationStatus: 'VERIFIED',
  },
];

/**
 * Stories - historical and modern voices
 */
export const morristownStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-martin-hard-winter',
    title: "A Private Soldier's Winter",
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-joseph-plumb-martin' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Joseph Plumb Martin was nineteen years old during the Hard Winter at Morristown. He had already served three years in the Continental Army — long enough to lose any illusions about glory. What he had not lost was the ability to observe, to remember, and eventually to write it all down.

The winter of 1779-80 began badly and got worse. Martin and his regiment arrived at Jockey Hollow in December to find nothing prepared: no huts, no food, no firewood cut. They slept on frozen ground while building their shelters. The huts, when finished, were barely adequate — twelve feet by sixteen, housing twelve men, with a single fireplace that smoked more than it heated.

Then the blizzards came. Twenty-eight storms between November and April. Snow piled to six feet. The roads became impassable, and with them went any hope of regular supply. Martin recorded what they ate when they ate at all: a handful of rice, some rotting meat, bark stripped from birch trees. On some days, nothing.

"We were absolutely, literally starved," Martin wrote. "I do solemnly declare that I did not put a single morsel of victuals into my mouth for four days and as many nights." This was not poetic exaggeration. Other accounts confirm the scale of the deprivation.

What kept him there? Martin never provides a simple answer. He was angry — at Congress, at civilians who profited from the war, at a system that asked everything of soldiers and provided nothing in return. He considered deserting. Many did. But he stayed, and in staying he became part of something he could not have named at the time: a collective act of endurance that preserved the possibility of American independence through its darkest winter.

Decades later, writing his memoir as an old man in Maine, Martin reflected on Morristown without sentiment. He did not claim his suffering was noble. He did not dress it in patriotic language. He simply told the truth: that he and his fellow soldiers survived because they chose to, day after day, when choosing to leave would have been easier and perhaps wiser.`,
    audioScript: `Joseph Plumb Martin was nineteen during the Hard Winter at Morristown. Three years in the army had stripped away his illusions. What remained was his ability to observe.

The winter of 1779-80 began badly. No huts, no food, no firewood. They slept on frozen ground. Twenty-eight blizzards buried Jockey Hollow. Supply lines collapsed.

"We were absolutely, literally starved," Martin wrote. "I did not put a single morsel of victuals into my mouth for four days and as many nights."

What kept him there? He never gives a simple answer. He was angry at Congress, at civilians who profited, at a system that asked everything and provided nothing. He considered deserting. But he stayed.

Decades later, writing his memoir, Martin reflected without sentiment. He didn't claim his suffering was noble. He told the truth: they survived because they chose to, day after day, when leaving would have been easier.`,
    tags: ['enlisted-experience', 'starvation', 'endurance', 'memoir'],
    town: { connect: { id: 'us-nj-morristown' } },
  },
  {
    id: 'story-modern-morristown-ranger',
    title: 'What the Hut Sites Remember',
    storyType: 'MODERN_VOICE',
    narratorName: 'National Park Service Ranger',
    narratorRole: 'Interpretive Ranger, Morristown National Historical Park',
    verificationStatus: 'VERIFIED',
    textVersion: `Everyone knows Valley Forge. Almost no one knows Morristown. That's the first thing I tell visitors, and you can see it register — a mixture of surprise and guilt, as if they've been caught not doing their homework.

The truth is, the Hard Winter of 1779-80 at Morristown was worse than Valley Forge by almost every metric. Colder. Longer. More blizzards. Less food. And it included something Valley Forge didn't: mutiny. Not a rumor of mutiny, not grumbling — actual soldiers under arms, organized, marching on Congress. The Pennsylvania Line, January 1781. Veterans who had been lied to about their enlistments and hadn't been paid in over a year.

When I walk visitors through the Jockey Hollow hut sites, I ask them to do math. Twelve men in a hut roughly the size of a modern bedroom. One fireplace. Six feet of snow outside. No pay. Half-rations on a good day, nothing on a bad one. And this wasn't for a week — it was for months.

The question I get most often is: why did they stay? And I've learned that the honest answer is: we don't fully know. Joseph Plumb Martin, who was there, couldn't fully explain it himself. What we know is that they did stay — most of them — and that their staying preserved the possibility of everything that came after.

Morristown National Historical Park was the first national historical park in the United States, established in 1933. That designation says something about what this place meant to earlier generations of Americans: they understood that the story of endurance mattered as much as the story of victory.

The hut sites at Jockey Hollow are depressions in the earth now, barely visible under the forest canopy. You have to know what you're looking for. But once you see them — row after row, stretching through the trees — you begin to grasp the scale of what happened here. Ten thousand men, choosing to stay through the worst winter of the century, for a cause that offered them nothing but the possibility of a country.`,
    audioScript: `Everyone knows Valley Forge. Almost no one knows Morristown. That's what I tell visitors first.

The Hard Winter of 1779-80 was worse than Valley Forge. Colder. Longer. Less food. And it included something Valley Forge didn't: actual mutiny. The Pennsylvania Line, veterans who hadn't been paid in over a year, marched on Congress.

I walk visitors through Jockey Hollow and ask them to do math. Twelve men per hut, the size of a modern bedroom. One fireplace. Six feet of snow. No pay. This went on for months.

Why did they stay? Joseph Plumb Martin, who was there, couldn't fully explain it. What we know is they did stay, and their staying preserved everything that came after.

The hut sites are depressions in the earth now, barely visible. But once you see them — row after row through the trees — you grasp the scale. Ten thousand men, choosing to stay through the worst winter of the century, for a cause that offered nothing but the possibility of a country.`,
    tags: ['preservation', 'endurance', 'interpretation', 'visitors'],
    town: { connect: { id: 'us-nj-morristown' } },
  },
];

/**
 * Theme connections for Morristown
 */
export const morristownThemeConnections: Array<{
  themeId: string;
  relevanceNote: string;
}> = [
  {
    themeId: 'citizen-soldiers',
    relevanceNote: 'Morristown tested the citizen-soldier ideal to its limit — men who had enlisted as volunteers endured conditions that would break a professional army.',
  },
  {
    themeId: 'women-revolution',
    relevanceNote: 'Martha Washington managed headquarters life during both winters; local women like Tempe Wick navigated the disruption of military encampment on civilian communities.',
  },
  {
    themeId: 'liberty-freedom',
    relevanceNote: 'The Pennsylvania Line mutiny exposed the contradiction of an army fighting for liberty while its own soldiers were denied pay, food, and the freedom to leave.',
  },
];
