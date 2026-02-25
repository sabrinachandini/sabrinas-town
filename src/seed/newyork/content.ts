// MODEL: Claude Opus (historical synthesis and narrative content)
// MODEL: Claude Sonnet (data structure and code)
// New York town expansion — Saratoga Springs, Albany, West Point, Ticonderoga, New York City

import { Prisma } from '@prisma/client';

/**
 * Five New York towns with Revolutionary War significance.
 *
 * NOTE ON VERIFICATION: Historical content has been synthesized from
 * established scholarly sources including Richard Ketchum's "Saratoga,"
 * Willard Sterne Randall's "Benedict Arnold: Patriot and Traitor,"
 * Barnet Schecter's "The Battle for New York," and NPS documentation.
 * Stories marked VERIFIED have strong documentary evidence. Lesser-known
 * voices carry ORAL_TRADITION or ANECDOTAL status where the historical
 * record is thinner. Modern-voice stories are marked UNVERIFIED where
 * we cannot fully document claims from composite/representative narrators.
 */

// ============================================================================
// SARATOGA SPRINGS
// ============================================================================

export const saratogaSpringsTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `The Battles of Saratoga in September and October 1777 were the turning point of the American Revolution. What happened on the fields and ridgelines around this stretch of the Hudson Valley changed the war from a colonial rebellion into an international conflict. When British General John Burgoyne surrendered his entire army of nearly 6,000 men on October 17, 1777, it was the first time a major British force had been captured in open warfare, and the news rippled across Europe.

The significance was strategic and diplomatic. France had been watching the American cause with cautious interest, unwilling to commit openly until the colonists demonstrated they could win a major engagement. Saratoga provided that proof. Within months of Burgoyne's surrender, France signed treaties of alliance and commerce with the United States, bringing French money, supplies, a navy, and eventually a professional army into the war. Without Saratoga, there is no French alliance. Without the French alliance, the war's outcome is far less certain.

The battles themselves were brutal and tactically complex. American forces under Horatio Gates and field commanders including Benedict Arnold and Daniel Morgan fought from prepared positions on Bemis Heights, using terrain and riflemen to neutralize Burgoyne's advantages in artillery and discipline. Arnold, despite being relieved of command by Gates, led a reckless charge at the Breymann Redoubt on October 7 that broke the British line and was wounded in the same leg he had injured at Quebec. His heroism at Saratoga makes his later treason all the more difficult to reconcile.

The battlefield today, administered by the National Park Service, preserves the terrain where these engagements unfolded. The landscape itself tells the story: the bluffs overlooking the Hudson, the ravines that channeled British advances, the open fields where Morgan's riflemen picked off officers at distances the British considered impossible.`,
};

export const saratogaSpringsPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-saratoga-springs-horatio-gates',
    name: 'Horatio Gates',
    roles: ['Continental Army General', 'Northern Department Commander'],
    bioShort:
      'Commander of American forces at Saratoga whose cautious defensive strategy, combined with the aggressive field tactics of his subordinates, produced the most consequential American victory of the war.',
    birthYear: 1727,
    deathYear: 1806,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-saratoga-springs-benedict-arnold',
    name: 'Benedict Arnold',
    roles: ['Continental Army General', 'Field Commander', 'Traitor'],
    bioShort:
      'Brilliant and reckless field commander whose charge at the Breymann Redoubt helped seal the American victory at Saratoga. Wounded in the leg during the assault, he later became the most infamous traitor in American history.',
    birthYear: 1741,
    deathYear: 1801,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-saratoga-springs-daniel-morgan',
    name: 'Daniel Morgan',
    roles: ['Continental Army Colonel', 'Rifleman Commander'],
    bioShort:
      'Virginia frontiersman who commanded the elite rifle corps at Saratoga. His sharpshooters targeted British officers with devastating accuracy, killing General Simon Fraser at a critical moment in the second battle.',
    birthYear: 1736,
    deathYear: 1802,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-saratoga-springs-john-burgoyne',
    name: 'John Burgoyne',
    roles: ['British General', 'Playwright', 'Politician'],
    bioShort:
      'British commander who led the northern invasion from Canada, expecting to split the colonies along the Hudson. His surrender of nearly 6,000 troops at Saratoga was the worst British defeat of the war and triggered French entry into the conflict.',
    birthYear: 1722,
    deathYear: 1792,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-saratoga-springs-simon-fraser',
    name: 'Brigadier General Simon Fraser',
    roles: ['British Officer', 'Brigade Commander'],
    bioShort:
      'Skilled British brigadier whose leadership rallied the British line during both battles of Saratoga. Targeted by Morgan\'s riflemen on October 7, 1777, he was mortally wounded and died the following day. His death demoralized the British forces at a critical moment.',
    birthYear: 1729,
    deathYear: 1777,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-saratoga-springs-thaddeus-kosciuszko',
    name: 'Thaddeus Kosciuszko',
    roles: ['Continental Army Engineer', 'Polish Volunteer'],
    bioShort:
      'Polish military engineer who designed the American fortifications on Bemis Heights at Saratoga. His selection of terrain and placement of defensive works forced Burgoyne into frontal assaults against prepared positions.',
    birthYear: 1746,
    deathYear: 1817,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-saratoga-springs-ebenezer-learned',
    name: 'Ebenezer Learned',
    roles: ['Continental Army Brigadier General', 'Massachusetts Militia'],
    bioShort:
      'Massachusetts brigadier whose brigade participated in both engagements at Saratoga. His troops helped assault the Breymann Redoubt alongside Arnold on October 7, contributing to the collapse of the British right flank.',
    birthYear: 1728,
    deathYear: 1801,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-saratoga-springs-baroness-riedesel',
    name: 'Baroness Frederika von Riedesel',
    roles: ['Camp Follower', 'Memoirist', 'Officer Wife'],
    bioShort:
      'Wife of the Hessian commander Baron von Riedesel who accompanied the British army. Her memoir provides a vivid civilian account of the battles and surrender at Saratoga, describing the terror of artillery bombardment and the care of wounded soldiers in a cellar.',
    birthYear: 1746,
    deathYear: 1808,
    verificationStatus: 'VERIFIED',
  },
];

export const saratogaSpringsEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-saratoga-springs-first-battle',
    name: 'First Battle of Saratoga (Freeman\'s Farm)',
    startDate: new Date('1777-09-19'),
    datePrecision: 'DAY',
    summary: `The first major engagement at Saratoga occurred at Freeman's Farm on September 19, 1777. Burgoyne's advancing army collided with American forces sent forward by Gates to contest the British approach. Daniel Morgan's riflemen and Henry Dearborn's light infantry clashed with British regulars in the cleared fields around the farm.

The fighting was fierce and sustained. Arnold urged Gates to commit more troops to the attack, and the Americans nearly broke the British center before German reinforcements stabilized the line. Burgoyne held the field at day's end, but at a cost of nearly 600 casualties he could not replace. The Americans withdrew to their fortified lines on Bemis Heights in good order, having demonstrated they could stand against British regulars in open combat.`,
    significanceWeight: 90,
    lat: 42.9980,
    lng: -73.6410,
    town: { connect: { id: 'us-ny-saratoga-springs' } },
  },
  {
    id: 'event-saratoga-springs-second-battle',
    name: 'Second Battle of Saratoga (Bemis Heights)',
    startDate: new Date('1777-10-07'),
    datePrecision: 'DAY',
    summary: `Burgoyne launched a reconnaissance in force on October 7, hoping to probe the American left for a way around their defenses. The attack failed catastrophically. Morgan's riflemen killed General Fraser, whose leadership had been holding the British line together, and Arnold — despite having been relieved of command by Gates — rode onto the field and led an unauthorized charge against the Breymann Redoubt.

Arnold's assault broke the fortified German position and turned the British right flank. He was shot in the leg during the final rush into the redoubt. The British fell back to their camp, and within days Burgoyne began retreating north. The second battle sealed the American victory and made surrender inevitable.`,
    significanceWeight: 95,
    lat: 42.9985,
    lng: -73.6380,
    town: { connect: { id: 'us-ny-saratoga-springs' } },
  },
  {
    id: 'event-saratoga-springs-burgoyne-surrender',
    name: 'Burgoyne\'s Surrender',
    startDate: new Date('1777-10-17'),
    datePrecision: 'DAY',
    summary: `On October 17, 1777, General John Burgoyne formally surrendered his army of approximately 5,800 troops to Horatio Gates at Saratoga. The terms, negotiated as a "convention" rather than a surrender to preserve British dignity, stipulated that the captured troops would be marched to Boston and shipped back to England on parole.

Congress later voided parts of the convention, and the "Convention Army" spent years in captivity. But the immediate impact was diplomatic: news of the surrender reached Paris in early December and convinced France to recognize American independence and enter the war as an ally. The surrender at Saratoga was the single most consequential event of the Revolution.`,
    significanceWeight: 100,
    lat: 43.0050,
    lng: -73.6320,
    town: { connect: { id: 'us-ny-saratoga-springs' } },
  },
  {
    id: 'event-saratoga-springs-fortification-bemis-heights',
    name: 'Kosciuszko Fortifies Bemis Heights',
    startDate: new Date('1777-09-12'),
    datePrecision: 'DAY',
    summary: `Polish engineer Thaddeus Kosciuszko selected and fortified the American position on Bemis Heights overlooking the Hudson River. The position was formidable: bluffs commanding the river road, with ravines and dense timber channeling any British approach into killing grounds.

Kosciuszko's engineering forced Burgoyne to choose between costly frontal assaults and risky flanking movements through difficult terrain. The fortifications transformed a stretch of riverside farmland into a position that a determined army could hold against superior numbers — which is exactly what the Americans did.`,
    significanceWeight: 75,
    lat: 42.9930,
    lng: -73.6350,
    town: { connect: { id: 'us-ny-saratoga-springs' } },
  },
  {
    id: 'event-saratoga-springs-fraser-death',
    name: 'Death of General Fraser',
    startDate: new Date('1777-10-08'),
    datePrecision: 'DAY',
    summary: `Brigadier General Simon Fraser, the most effective British field commander at Saratoga, was mortally wounded by a rifleman on October 7 during the second battle. Tradition holds that Daniel Morgan specifically ordered his sharpshooter Timothy Murphy to target Fraser, whose rallying of the British line was preventing a rout.

Fraser was carried from the field and died the following morning. He was buried that evening in the Great Redoubt as American artillery fired on the funeral procession — Gates ordered a ceasefire when he learned what was happening. Fraser's death removed the one British officer capable of organizing a coherent defense and accelerated Burgoyne's collapse.`,
    significanceWeight: 80,
    lat: 43.0010,
    lng: -73.6400,
    town: { connect: { id: 'us-ny-saratoga-springs' } },
  },
  {
    id: 'event-saratoga-springs-arnold-wounded',
    name: 'Arnold Wounded at the Breymann Redoubt',
    startDate: new Date('1777-10-07'),
    datePrecision: 'DAY',
    summary: `Benedict Arnold, despite having no command authority after his dispute with Gates, mounted his horse and rode into the battle on October 7. He led troops in an assault on the Breymann Redoubt, the fortified position anchoring the British right flank. During the final charge into the redoubt, Arnold's horse was shot and fell on his leg — the same left leg wounded at Quebec in 1775.

The injury was severe and nearly cost Arnold his leg. He spent months recovering. Many historians note the bitter irony: Arnold's heroism at Saratoga was his finest hour, and his wound might have made him a martyr had he died. Instead, resentment over lack of recognition and perceived slights eventually drove him to treason three years later.`,
    significanceWeight: 85,
    lat: 42.9995,
    lng: -73.6370,
    town: { connect: { id: 'us-ny-saratoga-springs' } },
  },
  {
    id: 'event-saratoga-springs-convention-army-march',
    name: 'Convention Army Marches to Boston',
    startDate: new Date('1777-10-18'),
    datePrecision: 'DAY',
    summary: `The day after the surrender, nearly 6,000 British and German prisoners began the long march to Boston under the terms of the Convention of Saratoga. The column stretched for miles along the roads of western Massachusetts and eastern New York, guarded by Continental troops and militia.

The march strained the resources of every town it passed through. Feeding and housing thousands of prisoners tested American logistics and exposed the tension between the ideals of honorable treatment and the realities of wartime scarcity. Many of the German soldiers eventually settled in the communities where they were held, choosing a new life over return to Hesse.`,
    significanceWeight: 65,
    lat: 43.0060,
    lng: -73.6300,
    town: { connect: { id: 'us-ny-saratoga-springs' } },
  },
  {
    id: 'event-saratoga-springs-french-alliance-news',
    name: 'News of Saratoga Reaches France',
    startDate: new Date('1777-12-04'),
    datePrecision: 'DAY',
    summary: `Word of Burgoyne's surrender reached Benjamin Franklin in Paris in early December 1777. Franklin immediately leveraged the news in his negotiations with the French court. The victory at Saratoga proved what Franklin had been arguing: the Americans could defeat a major British army in the field.

Within weeks, France moved toward formal recognition and alliance. The Treaty of Alliance was signed on February 6, 1778, transforming the war from a colonial rebellion into a global conflict. French entry brought naval power, professional soldiers, financial resources, and diplomatic pressure that Britain could not ignore. The road from Saratoga to Yorktown ran through Versailles.`,
    significanceWeight: 90,
    lat: 43.0050,
    lng: -73.6320,
    town: { connect: { id: 'us-ny-saratoga-springs' } },
  },
];

export const saratogaSpringsStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-saratoga-springs-arnold-charge',
    title: 'The Charge That History Cannot Forget',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-saratoga-springs-benedict-arnold' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Benedict Arnold had no business being on the battlefield on October 7, 1777. Horatio Gates had relieved him of command after weeks of bitter argument over strategy and credit. Arnold was confined to camp, seething, while the second battle of Saratoga unfolded without him.

He could not stay. When the sound of firing intensified, Arnold mounted his horse and rode toward the guns. No one stopped him — or could have. He appeared among the American troops like a force of nature, rallying men, directing attacks, leading from the front with a recklessness that bordered on suicidal.

The critical moment came at the Breymann Redoubt, the fortified position anchoring the British right flank. Arnold led the assault personally, riding into the gap between American and German fire. His horse was shot and collapsed onto his left leg — the same leg shattered at Quebec two years earlier. Arnold went down screaming, pinned beneath the dead animal.

Soldiers rushed to free him. Someone suggested amputation. Arnold reportedly said he would rather die than lose the leg. He was carried from the field while the redoubt fell to the Americans who had followed his charge.

The Boot Monument on the Saratoga battlefield today commemorates this moment. It depicts a boot — Arnold's wounded leg — without naming him. It is a monument to heroism that cannot bring itself to honor the hero, because three years later Arnold tried to hand West Point to the British. At Saratoga, he saved the American cause. The irony is permanent.`,
    audioScript: `Benedict Arnold had no business being on the battlefield on October 7, 1777. Gates had relieved him of command. Arnold was confined to camp. But when the firing intensified, he rode toward the guns.

He appeared among American troops like a force of nature, rallying men, leading from the front. At the Breymann Redoubt, he led the assault personally. His horse was shot and fell on his left leg — the same leg wounded at Quebec. Arnold went down, pinned beneath the dead animal.

The Boot Monument at Saratoga today commemorates his wounded leg without naming him. It honors heroism it cannot bring itself to credit, because three years later Arnold tried to hand West Point to the British. At Saratoga, he saved the American cause. The irony is permanent.`,
    tags: ['battle', 'heroism', 'treason', 'Arnold'],
    town: { connect: { id: 'us-ny-saratoga-springs' } },
  },
  {
    id: 'story-saratoga-springs-modern-battlefield',
    title: 'Walking the Ground Where the War Turned',
    storyType: 'MODERN_VOICE',
    narratorName: 'Battlefield Interpretive Ranger',
    narratorRole: 'Saratoga National Historical Park',
    verificationStatus: 'UNVERIFIED',
    textVersion: `The thing visitors notice first is how small the battlefield feels. They expect something vast, and in some ways it is — the park covers over 3,000 acres. But the critical ground, the places where the fighting was fiercest, is surprisingly contained. Freeman's Farm is a clearing you can walk across in ten minutes. The Breymann Redoubt is a low rise that does not look like a place where history pivoted.

That is exactly the point we try to make. The terrain here is not dramatic in the way Gettysburg is dramatic. There are no stone walls or monuments on every hilltop. The landscape is quiet, rural, almost ordinary. And that is what makes it powerful — because the men who fought here were not fighting for spectacular ground. They were fighting because this was where the road ran along the river, and whoever controlled this stretch controlled the Hudson Valley.

Kosciuszko chose this position because the bluffs forced any army moving south to squeeze between the river and the heights. Burgoyne could not go around it without abandoning his supplies. So he had to go through it. And the Americans were waiting.

When I walk visitors through the second battle, I always pause at the spot where Arnold was wounded. The Boot Monument is one of the most unusual memorials in America — a monument to an unnamed hero. Visitors who know the story stand there quietly. There is something genuinely sobering about a place where courage and betrayal are permanently linked.

The French alliance is the part of the story that resonates most with international visitors. They understand immediately: without this battle, without this surrender, France stays neutral and the Revolution probably fails. Saratoga did not just change America. It changed the world.`,
    audioScript: `Visitors notice first how small the battlefield feels. The critical ground — Freeman's Farm, the Breymann Redoubt — is surprisingly contained. The landscape is quiet, rural, almost ordinary. That is what makes it powerful.

Kosciuszko chose this position because bluffs forced any army moving south to squeeze between the river and the heights. Burgoyne could not go around it. So he had to go through it.

The Boot Monument — a monument to an unnamed hero — is one of the most unusual memorials in America. Visitors who know Arnold's story stand there quietly. Courage and betrayal permanently linked.

The French alliance resonates most with international visitors. Without this battle, France stays neutral and the Revolution probably fails. Saratoga changed the world.`,
    tags: ['battlefield', 'preservation', 'terrain', 'interpretation'],
    town: { connect: { id: 'us-ny-saratoga-springs' } },
  },
];

// ============================================================================
// ALBANY
// ============================================================================

export const albanyTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Albany was the nerve center of the northern war. As the headquarters of the Continental Army's Northern Department, it served as the command post, supply depot, and staging area for every major operation in the Hudson Valley and the campaigns stretching north toward Canada. Without Albany's strategic position at the head of Hudson River navigation, the American defense of the northern frontier would have been vastly more difficult.

The town's importance was inseparable from the Schuyler family. Philip Schuyler, one of the wealthiest landowners in New York, served as the first commander of the Northern Department and later as a Continental Congress delegate. His mansion in Albany functioned as both a private residence and a de facto military headquarters. Schuyler's knowledge of the region's geography, his network of alliances with local communities, and his personal fortune all contributed to the American war effort — even after political rivals maneuvered him out of field command before Saratoga.

Albany was also a critical node in the intelligence and supply networks that sustained the northern army. Provisions, ammunition, and reinforcements flowed through the town on their way to Fort Ticonderoga, the Mohawk Valley, and the Saratoga campaign. The town's position at the convergence of river and road routes made it irreplaceable.

The struggle for the Hudson Valley — the British strategy to split New England from the rest of the colonies — centered on Albany as the prize. Burgoyne's 1777 campaign was aimed at reaching Albany and linking with forces from New York City. His failure to get there, culminating in the surrender at Saratoga, was the strategic catastrophe that turned the war.`,
};

export const albanyPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-albany-philip-schuyler',
    name: 'Philip Schuyler',
    roles: ['Continental Army Major General', 'Landowner', 'Continental Congress Delegate'],
    bioShort:
      'Wealthy Albany landowner who commanded the Northern Department in 1775-1777, organizing the logistics and supply networks that sustained the northern army. Replaced by Gates before Saratoga, he continued to serve the cause in Congress and as a critical regional leader.',
    birthYear: 1733,
    deathYear: 1804,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-albany-catherine-schuyler',
    name: 'Catherine Van Rensselaer Schuyler',
    roles: ['Schuyler Family Matriarch', 'Estate Manager', 'Patriot Supporter'],
    bioShort:
      'Wife of Philip Schuyler who managed the family estates during her husband\'s military service and reportedly set fire to the family\'s wheat fields near Saratoga to deny grain to Burgoyne\'s advancing army.',
    birthYear: 1734,
    deathYear: 1803,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-albany-abraham-ten-broeck',
    name: 'Abraham Ten Broeck',
    roles: ['Albany Militia Brigadier General', 'Mayor of Albany', 'Patriot Leader'],
    bioShort:
      'Mayor of Albany and militia brigadier who led Albany County militia at the Battle of Saratoga. His troops reinforced the American position and helped block Burgoyne\'s retreat north after the second battle.',
    birthYear: 1734,
    deathYear: 1810,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-albany-robert-livingston',
    name: 'Robert R. Livingston',
    roles: ['Continental Congress Delegate', 'Committee of Five Member', 'Chancellor of New York'],
    bioShort:
      'Hudson Valley aristocrat who served on the committee that drafted the Declaration of Independence. As a member of New York\'s powerful Livingston family, he helped secure the colony\'s support for independence despite significant Loyalist opposition.',
    birthYear: 1746,
    deathYear: 1813,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-albany-peter-gansevoort',
    name: 'Peter Gansevoort',
    roles: ['Continental Army Colonel', 'Fort Stanwix Commander'],
    bioShort:
      'Albany-born officer who commanded Fort Stanwix during the 1777 siege by British and Iroquois forces. His successful defense of the fort disrupted the British campaign to converge on Albany from the west and contributed to the conditions that led to Saratoga.',
    birthYear: 1749,
    deathYear: 1812,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-albany-elizabeth-schuyler',
    name: 'Elizabeth Schuyler Hamilton',
    roles: ['Schuyler Family', 'Wife of Alexander Hamilton', 'Patriot Supporter'],
    bioShort:
      'Daughter of Philip Schuyler who married Alexander Hamilton in 1780 at the Schuyler Mansion in Albany. Her family connections helped launch Hamilton\'s political career, and she spent decades after his death preserving his legacy.',
    birthYear: 1757,
    deathYear: 1854,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-albany-joseph-brant',
    name: 'Joseph Brant (Thayendanegea)',
    roles: ['Mohawk War Chief', 'British Ally', 'Diplomat'],
    bioShort:
      'Mohawk leader who allied with the British and led raids on frontier settlements in the Mohawk Valley. His alliance reflected the impossible choices facing the Haudenosaunee (Iroquois) Confederacy as the Revolution tore apart their world.',
    birthYear: 1743,
    deathYear: 1807,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-albany-alexander-hamilton',
    name: 'Alexander Hamilton',
    roles: ['Continental Army Officer', 'Washington\'s Aide-de-Camp', 'Treasury Secretary'],
    bioShort:
      'Though not Albany-born, Hamilton married into the Schuyler family and the city became central to his life. He served as Washington\'s aide-de-camp, led a bayonet charge at Yorktown, and later shaped the new nation\'s financial system.',
    birthYear: 1755,
    deathYear: 1804,
    verificationStatus: 'VERIFIED',
  },
];

export const albanyEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-albany-northern-department-hq',
    name: 'Albany Becomes Northern Department Headquarters',
    startDate: new Date('1775-06-25'),
    datePrecision: 'MONTH',
    summary: `When Congress established the Northern Department of the Continental Army in June 1775, Albany was the natural choice for its headquarters. The town sat at the head of navigable Hudson River traffic and at the intersection of road and river routes leading north to Canada, west to the Mohawk Valley, and east to New England.

Philip Schuyler, appointed as the department's first commander, used his own mansion and resources to organize the northern army. Albany became the logistics hub through which supplies, reinforcements, and intelligence flowed to every northern campaign from the invasion of Canada in 1775 to the defense against Burgoyne in 1777.`,
    significanceWeight: 80,
    lat: 42.6526,
    lng: -73.7562,
    town: { connect: { id: 'us-ny-albany' } },
  },
  {
    id: 'event-albany-schuyler-supply-operations',
    name: 'Schuyler Organizes Northern Supply Lines',
    startDate: new Date('1775-08-01'),
    datePrecision: 'MONTH',
    summary: `Philip Schuyler spent the summer and fall of 1775 organizing the supply infrastructure needed for the invasion of Canada. Albany served as the central depot where provisions, ammunition, boats, and equipment were collected before being sent north to Fort Ticonderoga and Lake Champlain.

The logistical challenges were immense. Roads were poor, waterways seasonal, and the Continental Army chronically short of everything from gunpowder to shoes. Schuyler drew on his personal wealth and his network of Hudson Valley connections to keep supplies moving, but shortages plagued the northern army throughout the war.`,
    significanceWeight: 70,
    lat: 42.6530,
    lng: -73.7550,
    town: { connect: { id: 'us-ny-albany' } },
  },
  {
    id: 'event-albany-convention-army-passes',
    name: 'Convention Army Passes Through Albany',
    startDate: new Date('1777-11-01'),
    datePrecision: 'MONTH',
    summary: `After Burgoyne's surrender at Saratoga, the nearly 6,000 prisoners of the Convention Army were marched through Albany on their way to Boston. The spectacle of a defeated British army passing through the streets of the town they had been trying to capture underscored the magnitude of the American victory.

Albany residents witnessed the column of prisoners with a mixture of triumph and anxiety. The logistical burden of feeding and managing thousands of prisoners strained the town's resources. Some of the German soldiers later returned to the Albany area after the war, settling among the Dutch and English communities of the Hudson Valley.`,
    significanceWeight: 65,
    lat: 42.6520,
    lng: -73.7570,
    town: { connect: { id: 'us-ny-albany' } },
  },
  {
    id: 'event-albany-fort-stanwix-relief',
    name: 'Albany Supports Fort Stanwix Defense',
    startDate: new Date('1777-08-01'),
    datePrecision: 'MONTH',
    summary: `When British Colonel Barry St. Leger besieged Fort Stanwix in the Mohawk Valley as part of the three-pronged British strategy to capture Albany, relief was organized from the city. Benedict Arnold led a column west from Albany to relieve the fort, using a ruse involving a captured Loyalist to spread exaggerated reports of American numbers among St. Leger's Native allies.

The ruse worked. St. Leger's siege collapsed as his Iroquois allies withdrew, and the western prong of the British strategy failed. Albany's role as the staging area for this relief expedition was critical to disrupting the British plan to converge on the city from three directions.`,
    significanceWeight: 75,
    lat: 42.6540,
    lng: -73.7560,
    town: { connect: { id: 'us-ny-albany' } },
  },
  {
    id: 'event-albany-schuyler-mansion-fire-fields',
    name: 'Catherine Schuyler Burns the Wheat Fields',
    startDate: new Date('1777-09-01'),
    datePrecision: 'MONTH',
    summary: `As Burgoyne's army advanced south toward Albany in September 1777, Catherine Schuyler reportedly traveled to the family's country estate near Saratoga and ordered the wheat fields burned to deny the grain to the approaching British. The act was both a military measure and a personal sacrifice — the Schuyler estates were among the most productive in the region.

The story, while well established in the historical record, illustrates the war's impact on civilian property owners. The Schuylers were wealthy enough to absorb the loss, but many families in Burgoyne's path faced similar destruction without the resources to recover.`,
    significanceWeight: 70,
    lat: 43.0000,
    lng: -73.6500,
    town: { connect: { id: 'us-ny-albany' } },
  },
  {
    id: 'event-albany-hamilton-schuyler-wedding',
    name: 'Hamilton Marries Elizabeth Schuyler',
    startDate: new Date('1780-12-14'),
    datePrecision: 'DAY',
    summary: `Alexander Hamilton married Elizabeth Schuyler at the Schuyler Mansion in Albany on December 14, 1780. The match connected the brilliant but low-born Hamilton to one of New York's most powerful families and provided the social foundation for his later political career.

The wedding took place during a bleak period of the war, but the Schuyler family's commitment to the cause was unwavering. The union of Hamilton and the Schuyler family would shape American politics for decades, from Hamilton's service as Treasury Secretary to Elizabeth's half-century campaign to preserve his legacy.`,
    significanceWeight: 60,
    lat: 42.6544,
    lng: -73.7483,
    town: { connect: { id: 'us-ny-albany' } },
  },
  {
    id: 'event-albany-albany-committee-correspondence',
    name: 'Albany Committee of Correspondence Formed',
    startDate: new Date('1774-01-01'),
    datePrecision: 'YEAR',
    summary: `Albany established its Committee of Correspondence as part of the network connecting colonial resistance movements across the thirteen colonies. The committee coordinated with other New York communities and with committees in New England and the southern colonies, sharing intelligence and organizing opposition to British policies.

Albany's committee was particularly important because of the town's position at the crossroads of communication routes between New England, the Hudson Valley, and the frontier. Information that passed through Albany reached communities that might otherwise have been isolated from the broader resistance movement.`,
    significanceWeight: 60,
    lat: 42.6526,
    lng: -73.7562,
    town: { connect: { id: 'us-ny-albany' } },
  },
  {
    id: 'event-albany-mohawk-valley-raids',
    name: 'Frontier Raids Threaten the Mohawk Valley',
    startDate: new Date('1778-01-01'),
    datePrecision: 'YEAR',
    summary: `Beginning in 1778, British-allied Loyalist and Iroquois raiding parties struck settlements throughout the Mohawk Valley west of Albany. The raids — including the devastating attacks on Cherry Valley and German Flatts — sent refugees streaming into Albany and stretched the town's resources as a military staging area.

Albany served as the base from which Continental forces and militia organized responses to the raids. The Sullivan-Clinton expedition of 1779, which devastated Iroquois communities in retaliation, was partly supplied and organized through Albany's logistics network. The frontier war was brutal on all sides.`,
    significanceWeight: 70,
    lat: 42.6526,
    lng: -73.7562,
    town: { connect: { id: 'us-ny-albany' } },
  },
];

export const albanyStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-albany-schuyler-mansion',
    title: 'The General\'s House That Ran a War',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-albany-philip-schuyler' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Philip Schuyler's mansion in Albany was a private home that functioned as a military headquarters. From its rooms, Schuyler organized the supply lines, troop movements, and intelligence networks that sustained the northern army during the most critical years of the war.

Schuyler was not a natural battlefield commander, and his critics — who eventually replaced him with Horatio Gates — were not entirely wrong about his limitations in the field. But his organizational skills were extraordinary. He understood logistics in a way few Continental officers did, and he was willing to spend his own fortune to keep the army supplied when Congress could not or would not send money.

The mansion itself became a nexus of wartime activity. Officers passed through constantly. Intelligence from scouts and spies along the frontier was analyzed in Schuyler's study. The cellar stored provisions meant for the northern forts. Catherine Schuyler managed the household through all of it, feeding visitors, hosting councils, and running the estate's agricultural operations.

When Burgoyne's army was captured at Saratoga in October 1777, the British general was brought to the Schuyler Mansion as a guest — a remarkable courtesy given that Burgoyne's troops had burned the Schuyler country house during their advance. Schuyler reportedly told Burgoyne that the fortunes of war made such destruction expected, and treated him with a civility that astonished the British officer.

The Schuyler Mansion stands today as a National Historic Landmark. Its rooms still carry the proportions of a prosperous colonial household, but the history they witnessed was anything but domestic.`,
    audioScript: `Philip Schuyler's mansion in Albany was a private home that functioned as military headquarters. From its rooms, Schuyler organized the supply lines and intelligence networks that sustained the northern army.

Schuyler understood logistics in a way few Continental officers did. He spent his own fortune keeping the army supplied when Congress could not send money. Officers passed through constantly. Intelligence from frontier scouts was analyzed in his study.

When Burgoyne was captured at Saratoga, the British general was brought to the Schuyler Mansion as a guest — though Burgoyne's troops had burned the Schuyler country house during their advance. Schuyler told him the fortunes of war made such destruction expected. The civility astonished the British officer.

The Schuyler Mansion stands today as a National Historic Landmark. Its rooms still carry the proportions of a colonial household, but the history they witnessed was anything but domestic.`,
    tags: ['logistics', 'Schuyler', 'headquarters', 'Hudson Valley'],
    town: { connect: { id: 'us-ny-albany' } },
  },
  {
    id: 'story-albany-modern-crossroads',
    title: 'Where Every Road Led During the Revolution',
    storyType: 'MODERN_VOICE',
    narratorName: 'Regional Historian',
    narratorRole: 'New York State Museum, Albany',
    verificationStatus: 'UNVERIFIED',
    textVersion: `Albany does not get the recognition it deserves in Revolutionary War history. People know Saratoga, they know Valley Forge, they know Yorktown. But they do not always understand that Albany was the reason Saratoga happened where it happened — because Albany was the prize.

The British strategy in 1777 was straightforward: send Burgoyne south from Canada, send St. Leger east from Lake Ontario, and send Clinton north from New York City. All three columns would converge on Albany, cutting New England off from the rest of the colonies. It was the most ambitious British strategic plan of the war, and its complete failure changed everything.

What people miss is that Albany was not just a point on a map. It was a functioning logistics center, a supply depot, a headquarters, a place where decisions were made and resources allocated. The northern army could not have existed without Albany's infrastructure — the warehouses, the roads, the river traffic, the network of farms and craftsmen who provided what the army needed.

The Schuyler family embodied this. Philip Schuyler is sometimes portrayed as the general who lost his command, but he built the machine that won Saratoga. The supplies that fed the army at Bemis Heights, the intelligence that warned Gates of Burgoyne's movements, the militia networks that turned out thousands of men — all of that ran through Albany, and much of it ran through Schuyler's personal organization.

When we interpret the Revolution for visitors at the State Museum, we try to convey this unglamorous truth: wars are won by logistics as much as by heroism. Albany was not the place where the dramatic charge happened. It was the place that made the charge possible.`,
    audioScript: `Albany does not get the recognition it deserves. People know Saratoga and Yorktown, but not that Albany was the reason Saratoga happened — because Albany was the prize.

The British 1777 strategy was to converge three columns on Albany, cutting New England off. Its complete failure changed everything.

Albany was a functioning logistics center, supply depot, and headquarters. The northern army could not have existed without it. Philip Schuyler built the machine that won Saratoga — the supplies, intelligence, militia networks all ran through Albany.

Wars are won by logistics as much as heroism. Albany was not where the dramatic charge happened. It was the place that made the charge possible.`,
    tags: ['logistics', 'strategy', 'Hudson Valley', 'museum'],
    town: { connect: { id: 'us-ny-albany' } },
  },
];

// ============================================================================
// WEST POINT
// ============================================================================

export const westPointTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `West Point was the most strategically important fortress in North America during the Revolution. Perched on a rocky plateau where the Hudson River makes a sharp S-bend, it commanded a stretch of water that no enemy fleet could pass without coming under sustained cannon fire. Whoever held West Point controlled the Hudson, and whoever controlled the Hudson controlled the line of communication between New England and the rest of the colonies.

The fortification was constructed beginning in 1778 under the direction of Thaddeus Kosciuszko, the same Polish engineer who had designed the American defenses at Saratoga. A massive iron chain — the Great Chain — was stretched across the river to block British warships, while batteries on the heights above could pour fire on anything that approached. The position was considered impregnable, and the British never attempted a direct assault.

West Point's most dramatic chapter was not a battle but a betrayal. In 1780, Benedict Arnold, the hero of Saratoga, conspired to surrender the fortress to the British for money and a commission in the Royal Army. The plot was discovered when Arnold's British contact, Major John Andre, was captured carrying the plans. Arnold escaped to a British warship. Andre was hanged as a spy. The episode shocked the nation and made Arnold's name synonymous with treason.

The United States Military Academy, established at West Point in 1802, occupies the same ground. Cadets today walk terrain that was fortified against the British, and the Academy's museum holds artifacts from the chain, the fortifications, and the Arnold conspiracy. The fortress that was never taken became the school that would train generations of American officers.`,
};

export const westPointPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-west-point-benedict-arnold-traitor',
    name: 'Benedict Arnold',
    roles: ['Continental Army General', 'West Point Commander', 'Traitor'],
    bioShort:
      'The brilliant Continental officer who, as commander of West Point in 1780, conspired to surrender the fortress to the British. His treason plot was exposed when his contact Major Andre was captured, and Arnold fled to the British lines.',
    birthYear: 1741,
    deathYear: 1801,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-west-point-john-andre',
    name: 'Major John Andre',
    roles: ['British Intelligence Officer', 'Spy', 'Artist'],
    bioShort:
      'Charming British officer who served as the intermediary in Arnold\'s treason. Captured behind American lines carrying plans of West Point\'s defenses, he was tried and hanged as a spy despite widespread sympathy for his personal conduct.',
    birthYear: 1750,
    deathYear: 1780,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-west-point-thaddeus-kosciuszko-wp',
    name: 'Thaddeus Kosciuszko',
    roles: ['Continental Army Engineer', 'Fortress Designer', 'Polish Volunteer'],
    bioShort:
      'Polish engineer who designed the West Point fortifications in 1778, creating the interlocking system of batteries, redoubts, and the chain across the Hudson that made the position impregnable. His work at West Point followed his earlier success at Saratoga.',
    birthYear: 1746,
    deathYear: 1817,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-west-point-henry-clinton',
    name: 'General Sir Henry Clinton',
    roles: ['British Commander-in-Chief', 'Strategist'],
    bioShort:
      'British commander-in-chief in North America who oversaw the conspiracy with Arnold to capture West Point. Clinton hoped that seizing the fortress would split the colonies and end the war, but the plot\'s failure was a devastating intelligence setback.',
    birthYear: 1730,
    deathYear: 1795,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-west-point-john-paulding',
    name: 'John Paulding',
    roles: ['Militiaman', 'Andre Captor'],
    bioShort:
      'One of three militiamen — along with Isaac Van Wart and David Williams — who captured Major John Andre near Tarrytown on September 23, 1780. Their discovery of the West Point plans hidden in Andre\'s stockings exposed Arnold\'s treason and saved the fortress.',
    birthYear: 1758,
    deathYear: 1818,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-west-point-alexander-hamilton-wp',
    name: 'Alexander Hamilton',
    roles: ['Washington\'s Aide-de-Camp', 'Continental Army Colonel'],
    bioShort:
      'Hamilton was present at the dramatic moment when Arnold\'s treason was discovered, and he led the frantic effort to secure West Point before the British could act. He later advocated for leniency toward Andre, whose dignified conduct impressed even his captors.',
    birthYear: 1755,
    deathYear: 1804,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-west-point-peggy-shippen-arnold',
    name: 'Peggy Shippen Arnold',
    roles: ['Arnold\'s Wife', 'Loyalist Sympathizer'],
    bioShort:
      'Philadelphia socialite who married Benedict Arnold and maintained connections with British officers including Andre. Long dismissed as an innocent bystander, modern scholarship suggests she was deeply involved in facilitating the treason plot.',
    birthYear: 1760,
    deathYear: 1804,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-west-point-thomas-machin',
    name: 'Captain Thomas Machin',
    roles: ['Continental Army Engineer', 'Chain Constructor'],
    bioShort:
      'Engineer who oversaw the forging and installation of the Great Chain across the Hudson River at West Point in 1778. The chain, weighing approximately 65 tons, was designed to stop British warships and was maintained throughout the war.',
    birthYear: 1744,
    deathYear: 1816,
    verificationStatus: 'VERIFIED',
  },
];

export const westPointEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-west-point-fortification-begins',
    name: 'Construction of West Point Fortress Begins',
    startDate: new Date('1778-01-20'),
    datePrecision: 'MONTH',
    summary: `After the loss of Forts Clinton and Montgomery downriver in October 1777, the Continental Army began constructing a new, stronger fortification at West Point. Thaddeus Kosciuszko designed a system of interlocking batteries and redoubts on the rocky heights above the Hudson's sharpest bend.

The position was ideal for defense. The river's S-curve forced ships to slow nearly to a stop, exposing them to sustained fire from batteries at multiple elevations. Combined with the Great Chain stretched across the river, the fortifications created a barrier the British never attempted to breach by direct assault.`,
    significanceWeight: 80,
    lat: 41.3915,
    lng: -73.9568,
    town: { connect: { id: 'us-ny-west-point' } },
  },
  {
    id: 'event-west-point-great-chain-installed',
    name: 'The Great Chain Stretched Across the Hudson',
    startDate: new Date('1778-04-30'),
    datePrecision: 'DAY',
    summary: `In April 1778, a massive iron chain was stretched across the Hudson River at West Point to prevent British warships from sailing upriver. The chain, forged at the Sterling Iron Works in nearby Orange County, weighed approximately 65 tons and consisted of iron links each weighing between 100 and 150 pounds.

The chain was supported by log booms and anchored to both banks. It was removed each winter to prevent ice damage and reinstalled each spring. The Great Chain was never tested by a direct British naval attack, but its presence — combined with the artillery batteries above — made the river passage effectively impassable.`,
    significanceWeight: 75,
    lat: 41.3900,
    lng: -73.9550,
    town: { connect: { id: 'us-ny-west-point' } },
  },
  {
    id: 'event-west-point-arnold-treason-discovered',
    name: 'Arnold\'s Treason Discovered',
    startDate: new Date('1780-09-25'),
    datePrecision: 'DAY',
    summary: `On September 25, 1780, George Washington arrived at West Point for a planned inspection and found the fortress in deliberate disarray. Hours earlier, Washington's aides had received word that Major John Andre had been captured carrying plans of West Point's defenses — plans that could only have come from the fort's commander, Benedict Arnold.

Arnold, learning of Andre's capture while Washington was en route, fled to the British sloop Vulture on the Hudson. Washington arrived to find Arnold gone and the fortress vulnerable. Hamilton and other officers scrambled to secure the defenses and prevent a British attack. The treason plot had come within hours of succeeding.`,
    significanceWeight: 90,
    lat: 41.3915,
    lng: -73.9568,
    town: { connect: { id: 'us-ny-west-point' } },
  },
  {
    id: 'event-west-point-andre-captured',
    name: 'Capture of Major John Andre',
    startDate: new Date('1780-09-23'),
    datePrecision: 'DAY',
    summary: `Three militiamen — John Paulding, Isaac Van Wart, and David Williams — stopped a traveler near Tarrytown, New York, on September 23, 1780. The man identified himself as John Anderson, but the militiamen searched him and found detailed plans of West Point's fortifications hidden in his stockings. The traveler was Major John Andre, British intelligence officer and Arnold's contact.

Andre had met Arnold secretly and was returning to British lines by land after the Vulture, which had brought him upriver, was forced to withdraw. His capture exposed the entire conspiracy and saved West Point. The three captors were later awarded Congressional medals.`,
    significanceWeight: 85,
    lat: 41.0762,
    lng: -73.8587,
    town: { connect: { id: 'us-ny-west-point' } },
  },
  {
    id: 'event-west-point-andre-execution',
    name: 'Execution of Major John Andre',
    startDate: new Date('1780-10-02'),
    datePrecision: 'DAY',
    summary: `Major John Andre was hanged as a spy at Tappan, New York, on October 2, 1780. His trial before a military board had been swift, and the verdict unanimous. Andre's personal charm and dignified conduct won sympathy from American officers, including Hamilton, who petitioned Washington to grant Andre's request to be shot rather than hanged.

Washington refused — the laws of war required hanging for spies, and making an exception would have undermined the precedent. Andre met his death with composure that impressed all who witnessed it. His execution was widely mourned, even by Americans who acknowledged its necessity. In Britain, Andre became a celebrated martyr.`,
    significanceWeight: 75,
    lat: 41.0213,
    lng: -73.9470,
    town: { connect: { id: 'us-ny-west-point' } },
  },
  {
    id: 'event-west-point-washington-headquarters',
    name: 'Washington Establishes Headquarters Near West Point',
    startDate: new Date('1779-07-01'),
    datePrecision: 'MONTH',
    summary: `Washington established his headquarters at various locations near West Point during 1779-1780, reflecting the fortress's central importance to his strategic thinking. He considered West Point the most critical position in America and spent more time in its vicinity than at any other single location during the war.

From the area around West Point, Washington coordinated operations across the northern theater, maintained communication with Congress, and managed the increasingly difficult challenge of keeping the Continental Army fed and paid. The fortress was the anchor of his defensive strategy in the Hudson Highlands.`,
    significanceWeight: 70,
    lat: 41.3930,
    lng: -73.9580,
    town: { connect: { id: 'us-ny-west-point' } },
  },
  {
    id: 'event-west-point-forts-clinton-montgomery-fall',
    name: 'Fall of Forts Clinton and Montgomery',
    startDate: new Date('1777-10-06'),
    datePrecision: 'DAY',
    summary: `British forces under General Sir Henry Clinton captured Forts Clinton and Montgomery in the Hudson Highlands on October 6, 1777. The forts, which guarded a chain across the Hudson below West Point, fell after fierce fighting. The British broke the chain and sailed upriver, burning Kingston, the New York state capital.

The fall of these positions demonstrated the vulnerability of the Hudson defenses and led directly to the decision to build the much stronger fortification at West Point. The loss also came too late to help Burgoyne, who surrendered at Saratoga eleven days later.`,
    significanceWeight: 70,
    lat: 41.3250,
    lng: -73.9800,
    town: { connect: { id: 'us-ny-west-point' } },
  },
  {
    id: 'event-west-point-stony-point-assault',
    name: 'Wayne Storms Stony Point',
    startDate: new Date('1779-07-16'),
    datePrecision: 'DAY',
    summary: `General Anthony Wayne led a daring nighttime bayonet assault on the British fort at Stony Point, twelve miles south of West Point, on July 16, 1779. The attack, conducted with unloaded muskets to ensure silence, was one of the most dramatic operations of the war. Wayne's light infantry scaled the fortifications and captured the garrison in under thirty minutes.

The victory boosted American morale and demonstrated that Continental troops could execute complex tactical operations. Washington ordered the fort dismantled rather than try to hold it against a British counterattack, but the success reinforced the importance of controlling the Hudson Highlands around West Point.`,
    significanceWeight: 75,
    lat: 41.2381,
    lng: -73.9676,
    town: { connect: { id: 'us-ny-west-point' } },
  },
];

export const westPointStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-west-point-andre-last-day',
    title: 'The Spy Who Charmed His Captors',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-west-point-john-andre' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Major John Andre was everything Benedict Arnold was not: refined, charming, artistically talented, and possessed of a personal grace that disarmed even his enemies. He was also a spy who had conspired to steal the most important fortress in America, and he was going to hang for it.

Andre had been captured near Tarrytown by three militiamen who found the plans of West Point hidden in his stockings. At his trial, he made no excuses and no denials. He admitted to being behind American lines in civilian clothes — the legal definition of spying — and accepted the verdict with composure that impressed every officer in the room.

What followed was one of the most poignant episodes of the war. American officers, including Hamilton, found themselves genuinely moved by Andre's conduct and petitioned Washington to grant him a soldier's death by firing squad rather than the spy's death by hanging. Washington refused. The precedent mattered more than the man.

On the morning of October 2, 1780, Andre walked to the gallows at Tappan. He reportedly said, "I pray you to bear me witness that I meet my fate like a brave man." He adjusted the noose around his own neck. He was twenty-nine years old.

The contrast between Andre's dignified death and Arnold's ignoble survival haunted the war's memory. Arnold lived another twenty-one years in a kind of exile, despised by both sides. Andre became a romantic figure, mourned by Americans and British alike. It was one of the Revolution's cruelest ironies: the accomplice died with honor while the traitor lived without it.`,
    audioScript: `Major John Andre was refined, charming, artistically talented — and a spy who conspired to steal West Point. Captured near Tarrytown with the fortress plans in his stockings, he made no excuses at his trial and accepted the verdict with composure.

American officers petitioned Washington to grant Andre a firing squad instead of the gallows. Washington refused. The precedent mattered more than the man.

On October 2, 1780, Andre walked to the gallows at Tappan and said, "I pray you to bear me witness that I meet my fate like a brave man." He adjusted the noose himself. He was twenty-nine.

Arnold lived another twenty-one years in exile, despised by both sides. Andre became a romantic figure mourned by all. The accomplice died with honor while the traitor lived without it.`,
    tags: ['treason', 'espionage', 'Andre', 'honor'],
    town: { connect: { id: 'us-ny-west-point' } },
  },
  {
    id: 'story-west-point-modern-chain',
    title: 'Holding the River With Iron and Stone',
    storyType: 'MODERN_VOICE',
    narratorName: 'Military History Curator',
    narratorRole: 'West Point Museum',
    verificationStatus: 'UNVERIFIED',
    textVersion: `We have links from the Great Chain in our collection. When visitors see them — each one weighing over a hundred pounds, hand-forged at the Sterling Iron Works in 1778 — they begin to understand the scale of what was attempted here.

The chain stretched across the Hudson at the point where the river makes its sharpest turn. Ships had to slow nearly to a stop to navigate the S-bend, and while they were slowed, batteries at multiple elevations could concentrate fire on them. The chain did not need to stop a ship by itself. It just needed to hold a vessel in the killing zone long enough for the guns to do their work.

Kosciuszko designed the fortifications as an interlocking system. If one battery was silenced, others could still cover the river. Redoubts on the heights protected the batteries from land assault. The entire position was layered in a way that reflected serious engineering thought — remarkable for an army that was chronically short of trained officers.

The British never tested the defenses by direct attack. That is sometimes presented as evidence that the fortifications were unnecessary, which misunderstands how military deterrence works. The British did not attack precisely because the position was too strong. West Point accomplished its mission by existing.

Arnold's treason plot was the only realistic threat the fortress ever faced. If he had succeeded in weakening the defenses and the British had taken the position, the war might have ended very differently. The three militiamen who captured Andre near Tarrytown probably saved the Revolution, though they could not have known it at the time.

Visitors who come here from the Military Academy often have a natural understanding of terrain and fortification. But even they are struck by how effectively Kosciuszko used the natural landscape. The river did most of the work. The engineer just made sure the army could exploit it.`,
    audioScript: `We have links from the Great Chain in our collection — each weighing over a hundred pounds, hand-forged in 1778. The chain stretched across the Hudson where ships had to slow for the S-bend, holding them in the killing zone for the batteries above.

Kosciuszko designed the fortifications as an interlocking system. The British never tested them by direct assault — which is not evidence they were unnecessary. West Point accomplished its mission by existing.

Arnold's treason was the only realistic threat. If the British had taken the position, the war might have ended differently. The three militiamen who captured Andre probably saved the Revolution.

Even Academy visitors are struck by how effectively Kosciuszko used the landscape. The river did most of the work. The engineer made sure the army could exploit it.`,
    tags: ['fortification', 'engineering', 'chain', 'Hudson River'],
    town: { connect: { id: 'us-ny-west-point' } },
  },
];

// ============================================================================
// TICONDEROGA
// ============================================================================

export const ticonderogaTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Fort Ticonderoga changed hands three times during the Revolution, and each time the transfer reshaped the strategic balance of the northern war. The stone fortress on the promontory between Lake Champlain and Lake George controlled the traditional invasion route between Canada and the Hudson Valley — a corridor that had been contested since the French and Indian War.

The first seizure, on May 10, 1775, was one of the war's defining moments. Ethan Allen and Benedict Arnold led a small force of Green Mountain Boys and Connecticut volunteers in a dawn raid that captured the fort's garrison without a shot. The cannon and military stores seized at Ticonderoga were hauled overland to Boston by Henry Knox in the winter of 1775-1776, providing the artillery that forced the British to evacuate the city. Without Ticonderoga's guns, the siege of Boston might have dragged on indefinitely.

The fort's loss in July 1777 was equally consequential. When Burgoyne's army advanced south from Canada, General Arthur St. Clair evacuated Ticonderoga rather than defend a position he judged untenable against superior numbers and the British placement of artillery on Mount Defiance. The evacuation shocked Congress and the public, who had considered the fort impregnable. But St. Clair's decision saved his army to fight again at Saratoga, where it helped defeat Burgoyne.

Ticonderoga today is a privately operated historic site that preserves both the French and Indian War fortress and the Revolutionary War earthworks. The landscape — the lake, the heights, the narrow passage between the waters — makes the strategic logic immediately visible. This was ground worth fighting over, and three wars proved it.`,
};

export const ticonderogaPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-ticonderoga-ethan-allen',
    name: 'Ethan Allen',
    roles: ['Green Mountain Boys Commander', 'Militia Leader', 'Vermont Patriot'],
    bioShort:
      'Leader of the Green Mountain Boys who captured Fort Ticonderoga in a dawn raid on May 10, 1775, reportedly demanding the garrison surrender "in the name of the Great Jehovah and the Continental Congress." The capture provided desperately needed artillery for the siege of Boston.',
    birthYear: 1738,
    deathYear: 1789,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-ticonderoga-henry-knox',
    name: 'Henry Knox',
    roles: ['Continental Army Artillery Officer', 'Bookseller', 'Secretary of War'],
    bioShort:
      'Boston bookseller turned artillery officer who hauled 60 tons of cannon from Fort Ticonderoga to Boston during the winter of 1775-1776, an extraordinary feat of logistics that gave Washington the firepower to force the British evacuation.',
    birthYear: 1750,
    deathYear: 1806,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-ticonderoga-arthur-st-clair',
    name: 'Arthur St. Clair',
    roles: ['Continental Army Major General', 'Fort Commander'],
    bioShort:
      'Continental general who made the controversial decision to evacuate Fort Ticonderoga in July 1777 rather than face Burgoyne\'s superior force. Though condemned by Congress, the evacuation saved the garrison to fight at Saratoga.',
    birthYear: 1737,
    deathYear: 1818,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-ticonderoga-benedict-arnold-ti',
    name: 'Benedict Arnold',
    roles: ['Connecticut Militia Captain', 'Continental Army Officer'],
    bioShort:
      'Connecticut officer who arrived at Ticonderoga with a Massachusetts commission to capture the fort, clashing with Ethan Allen over command. Arnold later built the American fleet on Lake Champlain that delayed the British advance at Valcour Island in 1776.',
    birthYear: 1741,
    deathYear: 1801,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-ticonderoga-seth-warner',
    name: 'Seth Warner',
    roles: ['Green Mountain Boys Colonel', 'Continental Army Officer'],
    bioShort:
      'Green Mountain Boys officer who led the capture of nearby Crown Point the day after Ticonderoga fell and later commanded the rear guard at the Battle of Hubbardton during the 1777 retreat, buying time for the main American force to escape.',
    birthYear: 1743,
    deathYear: 1784,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-ticonderoga-william-phillips',
    name: 'Major General William Phillips',
    roles: ['British Artillery Commander', 'Burgoyne\'s Second'],
    bioShort:
      'Skilled British artillery officer who directed the placement of guns on Mount Defiance overlooking Fort Ticonderoga in 1777, making the American position untenable. His mastery of artillery influenced every major engagement of Burgoyne\'s campaign.',
    birthYear: 1731,
    deathYear: 1781,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-ticonderoga-captain-delaplace',
    name: 'Captain William Delaplace',
    roles: ['British Fort Commander'],
    bioShort:
      'British officer commanding the small garrison at Fort Ticonderoga when it was captured by Allen and Arnold on May 10, 1775. Surprised in his quarters at dawn, he had no choice but to surrender the fort and its valuable store of artillery.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-ticonderoga-jocelyn-feltham',
    name: 'Lieutenant Jocelyn Feltham',
    roles: ['British Officer', 'Garrison Deputy'],
    bioShort:
      'Deputy commander at Ticonderoga who confronted Ethan Allen at the entrance to the officers\' quarters on May 10, 1775, demanding to know by whose authority the fort was being seized. Allen\'s famous reply — whether accurate or embellished — became one of the Revolution\'s most quoted lines.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'VERIFIED',
  },
];

export const ticonderogaEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-ticonderoga-capture-1775',
    name: 'Capture of Fort Ticonderoga',
    startDate: new Date('1775-05-10'),
    datePrecision: 'DAY',
    summary: `Ethan Allen and Benedict Arnold led approximately 80 Green Mountain Boys and Connecticut volunteers in a dawn raid on Fort Ticonderoga on May 10, 1775. The small British garrison, numbering about 48 soldiers, was surprised and captured without a shot being fired. Allen reportedly demanded that the garrison surrender "in the name of the Great Jehovah and the Continental Congress."

The capture was the first offensive American action of the Revolution and yielded an enormous prize: over 100 cannon, mortars, and howitzers, plus stores of ammunition and supplies. These weapons would prove decisive at Boston. The fort also gave the Americans control of the Lake Champlain corridor, the traditional invasion route between Canada and the colonies.`,
    significanceWeight: 90,
    lat: 43.8425,
    lng: -73.3893,
    town: { connect: { id: 'us-ny-ticonderoga' } },
  },
  {
    id: 'event-ticonderoga-knox-cannon-train',
    name: 'Knox\'s Noble Train of Artillery',
    startDate: new Date('1775-12-05'),
    datePrecision: 'DAY',
    summary: `Henry Knox began the extraordinary task of transporting approximately 60 tons of artillery from Fort Ticonderoga to the Continental Army besieging Boston. The "Noble Train of Artillery" traveled over 300 miles through the mountains of western Massachusetts in the dead of winter, using ox-drawn sledges to move cannons across frozen lakes and over mountain passes.

The journey took roughly two months. Knox arrived in Cambridge in late January 1776 with the artillery that Washington needed to break the stalemate at Boston. The guns were placed on Dorchester Heights in early March, overlooking the British position. Within days, the British decided to evacuate. Knox's feat was one of the war's most remarkable logistical achievements.`,
    significanceWeight: 90,
    lat: 43.8425,
    lng: -73.3893,
    town: { connect: { id: 'us-ny-ticonderoga' } },
  },
  {
    id: 'event-ticonderoga-evacuation-1777',
    name: 'Evacuation of Fort Ticonderoga',
    startDate: new Date('1777-07-06'),
    datePrecision: 'DAY',
    summary: `General Arthur St. Clair evacuated Fort Ticonderoga on July 6, 1777, as Burgoyne's army of over 7,000 troops advanced from Canada. The decisive factor was the British placement of artillery on Mount Defiance, the unfortified height overlooking the fort — a vulnerability the Americans had failed to address.

The evacuation shocked Congress and the public, who had considered Ticonderoga the "Gibraltar of America." St. Clair was court-martialed but acquitted. His decision, though politically disastrous, was militarily sound: defending an untenable position against superior numbers would have resulted in the destruction of his garrison. Those troops instead reinforced the army that defeated Burgoyne at Saratoga.`,
    significanceWeight: 80,
    lat: 43.8425,
    lng: -73.3893,
    town: { connect: { id: 'us-ny-ticonderoga' } },
  },
  {
    id: 'event-ticonderoga-crown-point-capture',
    name: 'Capture of Crown Point',
    startDate: new Date('1775-05-11'),
    datePrecision: 'DAY',
    summary: `The day after the capture of Ticonderoga, Seth Warner led a detachment north to Crown Point, where he captured the small British garrison without resistance. The seizure of both forts gave the Americans complete control of the southern end of Lake Champlain and secured the artillery and supplies that would be sent to Boston.

Crown Point served as a staging area for the American invasion of Canada later in 1775, and its capture was part of the coordinated effort to seize the entire Lake Champlain corridor before the British could reinforce their positions.`,
    significanceWeight: 65,
    lat: 43.9417,
    lng: -73.4209,
    town: { connect: { id: 'us-ny-ticonderoga' } },
  },
  {
    id: 'event-ticonderoga-valcour-island',
    name: 'Battle of Valcour Island',
    startDate: new Date('1776-10-11'),
    datePrecision: 'DAY',
    summary: `Benedict Arnold commanded the hastily built American fleet in a desperate naval engagement against a superior British force at Valcour Island on Lake Champlain. The battle itself was a tactical defeat — most of the American fleet was destroyed or captured — but Arnold had achieved his strategic objective: the engagement delayed the British advance south long enough that they decided to postpone their invasion until 1777.

That delay was critical. It gave the Americans a full year to prepare the defenses and raise the forces that would defeat Burgoyne at Saratoga. Arnold's willingness to fight and lose on the lake may have been the most strategically consequential decision of the northern war.`,
    significanceWeight: 85,
    lat: 44.6177,
    lng: -73.4174,
    town: { connect: { id: 'us-ny-ticonderoga' } },
  },
  {
    id: 'event-ticonderoga-hubbardton-battle',
    name: 'Battle of Hubbardton',
    startDate: new Date('1777-07-07'),
    datePrecision: 'DAY',
    summary: `The day after the evacuation of Ticonderoga, Seth Warner's rear guard was caught by British pursuers at Hubbardton, Vermont. The fierce engagement — the only Revolutionary War battle fought on Vermont soil — cost both sides heavily. Warner's troops fought a stubborn delaying action that slowed the British pursuit and allowed the main American force to escape south.

The battle demonstrated that American troops could hold their own against British regulars in a stand-up fight, even while retreating. The losses Burgoyne suffered at Hubbardton were the first installment in the campaign of attrition that would culminate at Saratoga.`,
    significanceWeight: 70,
    lat: 43.6831,
    lng: -73.1906,
    town: { connect: { id: 'us-ny-ticonderoga' } },
  },
  {
    id: 'event-ticonderoga-mount-defiance-guns',
    name: 'British Place Guns on Mount Defiance',
    startDate: new Date('1777-07-05'),
    datePrecision: 'DAY',
    summary: `British engineers hauled artillery to the summit of Mount Defiance, the 853-foot hill overlooking Fort Ticonderoga from the south. American commanders had long debated whether the height was accessible, and General Anthony Wayne had argued it should be fortified. The matter was settled when British gunners placed 12-pound cannon on the summit, commanding both the fort and the bridge to Mount Independence.

The placement of guns on Defiance made the American position untenable. St. Clair ordered the evacuation that night. The episode became a cautionary lesson in military planning: a vulnerability left unaddressed will eventually be exploited.`,
    significanceWeight: 75,
    lat: 43.8350,
    lng: -73.3850,
    town: { connect: { id: 'us-ny-ticonderoga' } },
  },
  {
    id: 'event-ticonderoga-allen-arnold-dispute',
    name: 'Allen and Arnold Dispute Command at Ticonderoga',
    startDate: new Date('1775-05-10'),
    datePrecision: 'DAY',
    summary: `The capture of Ticonderoga was complicated by a bitter command dispute between Ethan Allen and Benedict Arnold. Allen led the Green Mountain Boys and had planned the raid. Arnold arrived with a commission from the Massachusetts Committee of Safety authorizing him to capture the fort. Neither man would defer to the other.

They eventually entered the fort side by side, a compromise that satisfied neither. The dispute foreshadowed Arnold's lifelong resentment over questions of rank and credit — grievances that would eventually drive him to treason. Allen, for his part, parlayed the capture into lasting fame as a frontier hero.`,
    significanceWeight: 60,
    lat: 43.8425,
    lng: -73.3893,
    town: { connect: { id: 'us-ny-ticonderoga' } },
  },
];

export const ticonderogaStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-ticonderoga-knox-journey',
    title: 'Three Hundred Miles of Ice and Will',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-ticonderoga-henry-knox' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Henry Knox was twenty-five years old, had never commanded an artillery operation, and had learned most of what he knew about warfare from books in his Boston shop. When Washington asked him to retrieve the cannon from Fort Ticonderoga and bring them to Boston, Knox said he could do it. He was the only person who thought the plan was feasible.

The "Noble Train of Artillery" that Knox assembled at Ticonderoga in December 1775 consisted of approximately 60 tons of weapons: cannon, mortars, howitzers, and the shot and shell to feed them. Moving this mass overland in winter, across frozen lakes, over the Berkshire Mountains, and through 300 miles of rough terrain required an improvised logistics operation that would have tested an experienced quartermaster.

Knox used ox-drawn sledges, hired local teamsters, and relied on frozen waterways as highways. When the ice on Lake George proved too thin, the heaviest cannon broke through and had to be hauled out. When mountain roads proved impassable, Knox's men cut new paths. The journey took nearly two months, and Knox spent much of it riding ahead to arrange provisions and fresh teams of oxen.

He arrived in Cambridge in late January 1776, having lost remarkably little of his cargo. Washington placed the guns on Dorchester Heights, and the British, finding themselves suddenly under artillery they could neither match nor tolerate, evacuated Boston on March 17.

Knox went on to become Washington's chief of artillery and eventually Secretary of War. But his first act of the war — a book-learned young man dragging 60 tons of iron through a New England winter — remains his most remarkable achievement. It was the kind of thing that works only because the person doing it does not fully appreciate how impossible it is.`,
    audioScript: `Henry Knox was twenty-five, had never commanded artillery, and learned warfare from books in his Boston shop. When Washington asked him to retrieve the cannon from Fort Ticonderoga, Knox said he could do it.

The Noble Train of Artillery: 60 tons of weapons, moved on ox-drawn sledges across frozen lakes and over the Berkshire Mountains. When ice broke, cannon were hauled from the water. When roads failed, Knox's men cut new paths. The journey took two months.

He arrived in Cambridge in late January 1776. Washington placed the guns on Dorchester Heights, and the British evacuated Boston on March 17.

Knox's first act of the war — a book-learned young man dragging 60 tons of iron through winter — remains his most remarkable achievement. It worked because he did not fully appreciate how impossible it was.`,
    tags: ['artillery', 'logistics', 'Knox', 'siege of Boston'],
    town: { connect: { id: 'us-ny-ticonderoga' } },
  },
  {
    id: 'story-ticonderoga-modern-fort',
    title: 'The Fort That Three Wars Built',
    storyType: 'MODERN_VOICE',
    narratorName: 'Director of Interpretation',
    narratorRole: 'Fort Ticonderoga Association',
    verificationStatus: 'UNVERIFIED',
    textVersion: `Fort Ticonderoga is unusual among Revolutionary War sites because it carries the weight of three conflicts. The French built it, the British took it, and the Americans seized it twice. Each layer is visible in the architecture and the landscape, and part of our work is helping visitors understand what they are looking at.

The stone walls that visitors see today are largely the French construction, restored in the early twentieth century by the Pell family, who purchased the site and began archaeological work. But the Revolution left its own marks. The American earthworks on Mount Independence, across the lake, are among the best-preserved Revolutionary War fortifications in the country. The ground where the 1777 evacuation began is still walkable.

The story we tell most often is Knox's cannon train, because it connects Ticonderoga to the siege of Boston in a way that makes the war's geography real. People know about Lexington and Concord, and they know about the British evacuation of Boston. But they do not always know what happened between those events: a young bookseller dragged 60 tons of artillery across 300 miles of winter landscape. That story starts here, in the rooms where the cannon were stored.

Mount Defiance is the part of the story that military visitors find most instructive. The Americans knew the height was a potential threat, and they debated fortifying it. They did not. When the British hauled guns to the top in July 1777, the fort became indefensible overnight. It is a textbook lesson in the cost of leaving a vulnerability unaddressed.

Visitors who climb Defiance — and we encourage them to — can look down at the fort and see exactly what the British gunners saw. The entire position is exposed. The decision to evacuate, which seemed like cowardice to Congress, looks like the only sane choice when you stand on that summit.`,
    audioScript: `Fort Ticonderoga carries the weight of three conflicts. The French built it, the British took it, the Americans seized it twice. Each layer is visible in the architecture.

The story we tell most is Knox's cannon train — a young bookseller dragging 60 tons of artillery across 300 miles of winter landscape. That story starts in the rooms where the cannon were stored.

Mount Defiance is what military visitors find most instructive. The Americans debated fortifying it but did not. When the British hauled guns to the top, the fort became indefensible overnight. It is a textbook lesson in leaving a vulnerability unaddressed.

Visitors who climb Defiance look down and see what the British gunners saw. The evacuation, which seemed like cowardice to Congress, looks like the only sane choice from that summit.`,
    tags: ['fortification', 'preservation', 'terrain', 'multiple wars'],
    town: { connect: { id: 'us-ny-ticonderoga' } },
  },
];

// ============================================================================
// NEW YORK CITY
// ============================================================================

export const newYorkCityTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `New York City was the great prize the British held for nearly the entire war. From September 1776, when General Howe's forces drove Washington's army out of Manhattan, until November 25, 1783, when the last British troops departed, the city served as the primary British military base in North America. It was the longest occupation of any American city during the Revolution, and it transformed New York into a place of divided loyalties, wartime suffering, and strategic consequence.

The Battle of Long Island in August 1776 was the largest engagement of the war, and it was a disaster for the Americans. Washington's army was outmaneuvered and nearly trapped on Brooklyn Heights before a desperate nighttime evacuation across the East River saved the army from destruction. The subsequent retreat through Manhattan and into New Jersey was one of the lowest points of the American cause.

Under British occupation, New York became a magnet for Loyalists from across the colonies and a center of British military planning. It was also a place of extraordinary suffering. The Great Fire of September 1776 destroyed a quarter of the city. The prison ships anchored in Wallabout Bay became floating death camps where an estimated 11,500 American prisoners died of disease, starvation, and neglect — more Americans than died in all the battles of the war combined.

Evacuation Day — November 25, 1783 — was celebrated in New York for decades as a holiday marking the end of occupation. Washington rode into the city at the head of the Continental Army as the British sailed away. The city that had been the enemy's stronghold became, briefly, the first capital of the new nation.`,
};

export const newYorkCityPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-new-york-city-george-washington-nyc',
    name: 'George Washington',
    roles: ['Continental Army Commander-in-Chief', 'General'],
    bioShort:
      'Commander-in-chief who fought desperately to hold New York in 1776, lost the city after the Battle of Long Island, and returned in triumph on Evacuation Day 1783. His defense of New York was a military failure that nearly destroyed the army, but his escape preserved the Continental cause.',
    birthYear: 1732,
    deathYear: 1799,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-new-york-city-william-howe',
    name: 'General Sir William Howe',
    roles: ['British Commander-in-Chief', 'Occupation Commander'],
    bioShort:
      'British commander who captured New York in 1776 through a series of brilliant flanking maneuvers that drove Washington from Long Island, Manhattan, and ultimately out of New York entirely. His failure to destroy Washington\'s retreating army has been debated by historians for centuries.',
    birthYear: 1729,
    deathYear: 1814,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-new-york-city-nathan-hale',
    name: 'Nathan Hale',
    roles: ['Continental Army Captain', 'Spy', 'Martyr'],
    bioShort:
      'Connecticut schoolteacher and Continental officer who volunteered to spy behind British lines in New York. Captured on September 21, 1776, he was hanged the following day without trial. His reported last words — "I only regret that I have but one life to lose for my country" — made him an enduring symbol of patriot sacrifice.',
    birthYear: 1755,
    deathYear: 1776,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-new-york-city-margaret-corbin',
    name: 'Margaret Corbin',
    roles: ['Camp Follower', 'Artillery Soldier', 'War Heroine'],
    bioShort:
      'Pennsylvania woman who took over her husband\'s cannon at the Battle of Fort Washington on November 16, 1776, after he was killed. She was severely wounded and became the first woman to receive a military pension from Congress.',
    birthYear: 1751,
    deathYear: 1800,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-new-york-city-hercules-mulligan',
    name: 'Hercules Mulligan',
    roles: ['Tailor', 'Spy', 'Son of Liberty'],
    bioShort:
      'Irish-born New York tailor who spied for the American cause throughout the British occupation. His shop served British officers, and the information he gathered was relayed to Washington\'s intelligence network. He is credited with twice warning of plots to capture Washington.',
    birthYear: 1740,
    deathYear: 1825,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-new-york-city-william-cunningham',
    name: 'Provost Marshal William Cunningham',
    roles: ['British Provost Marshal', 'Prison Administrator'],
    bioShort:
      'Notorious British provost marshal in charge of American prisoners in New York. His deliberate cruelty — withholding food, denying medical care, and reportedly selling rations meant for prisoners — contributed to the deaths of thousands in the prisons and prison ships.',
    birthYear: 1738,
    deathYear: 1791,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-new-york-city-james-rivington',
    name: 'James Rivington',
    roles: ['Printer', 'Loyalist Publisher', 'Secret Spy'],
    bioShort:
      'Publisher of the Royal Gazette in occupied New York who was publicly reviled as a Loyalist propagandist. Evidence discovered after the war suggests he was simultaneously feeding intelligence to the Americans, making him one of the most effective double agents of the Revolution.',
    birthYear: 1724,
    deathYear: 1802,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-new-york-city-cato-prison-ship',
    name: 'Cato',
    roles: ['Enslaved Person', 'Prison Ship Survivor'],
    bioShort:
      'One of many enslaved and free Black individuals caught in the chaos of occupied New York. Though the records of individual experiences on the prison ships are sparse, names like Cato appear in fragmentary crew lists and prisoner accounts, representing the thousands of ordinary people swept up in the city\'s wartime suffering.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ORAL_TRADITION',
  },
];

export const newYorkCityEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-new-york-city-battle-long-island',
    name: 'Battle of Long Island',
    startDate: new Date('1776-08-27'),
    datePrecision: 'DAY',
    summary: `The Battle of Long Island on August 27, 1776, was the largest engagement of the Revolutionary War. General Howe landed approximately 20,000 troops on the western end of Long Island and executed a flanking march through the unguarded Jamaica Pass that rolled up the American left. Washington's army of roughly 10,000, many of them inexperienced militia, was driven back to Brooklyn Heights with heavy losses.

The disaster was compounded by a two-day rainstorm that made evacuation difficult. On the night of August 29-30, Washington organized a desperate retreat across the East River to Manhattan, using every available boat. The entire army crossed in a single night, with a fortuitous morning fog covering the final boats. The army was saved, but the defeat made clear that New York could not be held.`,
    significanceWeight: 90,
    lat: 40.6612,
    lng: -73.9817,
    town: { connect: { id: 'us-ny-new-york-city' } },
  },
  {
    id: 'event-new-york-city-great-fire',
    name: 'The Great Fire of New York',
    startDate: new Date('1776-09-21'),
    datePrecision: 'DAY',
    summary: `A massive fire broke out in lower Manhattan on September 21, 1776, just days after the British occupied the city. The blaze destroyed approximately 500 buildings — roughly a quarter of the city. The British suspected American sabotage, though the cause was never definitively established.

Washington had proposed burning the city to deny it to the British, but Congress had refused. Whether the fire was arson or accident, the destruction devastated the city's housing stock and contributed to the overcrowding and suffering that characterized the occupation. Burned-out districts remained rubble throughout the war, and many residents were forced into makeshift shelters.`,
    significanceWeight: 75,
    lat: 40.7061,
    lng: -74.0120,
    town: { connect: { id: 'us-ny-new-york-city' } },
  },
  {
    id: 'event-new-york-city-prison-ships',
    name: 'Prison Ships in Wallabout Bay',
    startDate: new Date('1776-10-01'),
    datePrecision: 'MONTH',
    summary: `The British anchored decommissioned vessels in Wallabout Bay (present-day Brooklyn Navy Yard) to hold American prisoners of war. Conditions on the ships — particularly the infamous HMS Jersey — were horrific. Prisoners were packed below decks with inadequate food, water, and ventilation. Disease was rampant. The dead were buried in shallow graves along the Brooklyn shore.

An estimated 11,500 American prisoners died on the prison ships during the war — more than twice the number killed in all the battles of the Revolution combined. The prison ship dead were largely forgotten until the early nineteenth century, when their remains were reinterred at what is now the Prison Ship Martyrs Monument in Fort Greene Park, Brooklyn.`,
    significanceWeight: 85,
    lat: 40.7003,
    lng: -73.9710,
    town: { connect: { id: 'us-ny-new-york-city' } },
  },
  {
    id: 'event-new-york-city-nathan-hale-execution',
    name: 'Execution of Nathan Hale',
    startDate: new Date('1776-09-22'),
    datePrecision: 'DAY',
    summary: `Captain Nathan Hale, a young Connecticut schoolteacher serving in the Continental Army, was captured behind British lines in New York while on an intelligence mission. He was brought before General Howe and hanged as a spy on September 22, 1776, without trial.

Hale's reported last words — "I only regret that I have but one life to lose for my country" — became one of the Revolution's most famous quotations, though the exact phrasing is disputed. Hale was twenty-one years old. His execution, and the dignity with which he reportedly faced it, made him a patriot martyr and a symbol of the sacrifices demanded by the cause of independence.`,
    significanceWeight: 80,
    lat: 40.7128,
    lng: -74.0060,
    town: { connect: { id: 'us-ny-new-york-city' } },
  },
  {
    id: 'event-new-york-city-british-occupation-begins',
    name: 'British Occupation of New York Begins',
    startDate: new Date('1776-09-15'),
    datePrecision: 'DAY',
    summary: `British forces landed at Kip's Bay on September 15, 1776, and took control of Manhattan after American militia units broke and ran under naval bombardment. Washington reportedly cried out in frustration as his troops fled without firing a shot. The British occupation of New York that began that day would last over seven years — the longest occupation of any American city during the war.

New York became the British military headquarters, a Loyalist refuge, and a center of intelligence operations. The occupation transformed the city's population, economy, and physical landscape. Many patriot residents fled, replaced by Loyalists from across the colonies. The city that the British eventually abandoned in 1783 was fundamentally different from the one they had captured.`,
    significanceWeight: 80,
    lat: 40.7448,
    lng: -73.9726,
    town: { connect: { id: 'us-ny-new-york-city' } },
  },
  {
    id: 'event-new-york-city-fort-washington-fall',
    name: 'Fall of Fort Washington',
    startDate: new Date('1776-11-16'),
    datePrecision: 'DAY',
    summary: `Fort Washington, the last American position on Manhattan, fell to a British and Hessian assault on November 16, 1776. Nearly 3,000 American troops were captured — the largest loss of prisoners until the fall of Charleston in 1780. Margaret Corbin was wounded during the battle while manning her husband's cannon after he was killed.

The loss was a blow to American morale and demonstrated the futility of trying to hold fixed positions against overwhelming force. Washington had been persuaded against his better judgment to maintain the garrison, and the capture reinforced his growing conviction that the Continental Army must avoid pitched battles it could not win.`,
    significanceWeight: 75,
    lat: 40.8518,
    lng: -73.9420,
    town: { connect: { id: 'us-ny-new-york-city' } },
  },
  {
    id: 'event-new-york-city-evacuation-day',
    name: 'Evacuation Day',
    startDate: new Date('1783-11-25'),
    datePrecision: 'DAY',
    summary: `On November 25, 1783, the last British troops departed New York City, and Washington led the Continental Army into the city in a triumphal procession. The event, known as Evacuation Day, was celebrated in New York as a holiday for decades. A final act of British defiance — nailing the Union Jack to a greased flagpole at the Battery — was overcome when an American soldier climbed the pole and replaced it with the Stars and Stripes.

The departure marked the end of over seven years of occupation and the effective conclusion of the war. Washington hosted a farewell dinner for his officers at Fraunces Tavern on December 4, where he famously embraced each officer in an emotional farewell before departing for Annapolis to resign his commission.`,
    significanceWeight: 85,
    lat: 40.7033,
    lng: -74.0170,
    town: { connect: { id: 'us-ny-new-york-city' } },
  },
  {
    id: 'event-new-york-city-washington-farewell-fraunces',
    name: 'Washington\'s Farewell at Fraunces Tavern',
    startDate: new Date('1783-12-04'),
    datePrecision: 'DAY',
    summary: `On December 4, 1783, George Washington gathered his remaining officers at Fraunces Tavern in lower Manhattan for a farewell dinner. After eight years of war, Washington was preparing to resign his commission and return to private life — a decision that astonished Europeans accustomed to victorious generals seizing power.

Washington reportedly said, "With a heart full of love and gratitude, I now take leave of you." He then embraced each officer individually. Henry Knox, his chief of artillery, was the first. Many men wept openly. Washington then walked to the Whitehall slip and boarded a barge for New Jersey, beginning his journey to Annapolis. The scene at Fraunces Tavern became one of the most celebrated moments in the nation's founding narrative.`,
    significanceWeight: 80,
    lat: 40.7033,
    lng: -74.0116,
    town: { connect: { id: 'us-ny-new-york-city' } },
  },
];

export const newYorkCityStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-new-york-city-prison-ships',
    title: 'The Dead of Wallabout Bay',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-new-york-city-william-cunningham' } },
    verificationStatus: 'VERIFIED',
    textVersion: `More Americans died on the prison ships in New York's Wallabout Bay than in all the battles of the Revolutionary War combined. This is not a metaphor or an exaggeration. It is a documented fact that remains startling no matter how many times it is stated.

The HMS Jersey was the worst of them — a rotting, decommissioned warship anchored in the shallow waters off Brooklyn. Prisoners were packed below decks in darkness, breathing fetid air, given rations that were often rotten or insufficient. Dysentery, smallpox, and typhus killed with steady efficiency. Each morning, the guards called down the hatch: "Rebels, turn out your dead."

An estimated 11,500 Americans died on the prison ships between 1776 and 1783. They were sailors, soldiers, militiamen, and civilians caught up in the chaos of occupation. Many were buried in shallow graves along the Brooklyn shore, their remains washing out with the tides for decades afterward.

William Cunningham, the British provost marshal who oversaw the prisons, was by multiple accounts a deliberately cruel administrator. He reportedly sold rations meant for prisoners and denied medical care. After the war, just before his execution for an unrelated crime in London, Cunningham allegedly confessed to having starved to death more than 2,000 prisoners.

The Prison Ship Martyrs Monument in Fort Greene Park, Brooklyn, was dedicated in 1908 to honor these dead. It is a 149-foot granite column, the tallest in the world at the time of its construction, and it stands over a crypt containing remains recovered from the Wallabout shore. Most visitors to Fort Greene Park do not know what it commemorates. The prison ship dead remain among the most forgotten casualties of the Revolution.`,
    audioScript: `More Americans died on the prison ships in Wallabout Bay than in all the battles of the Revolution combined. The HMS Jersey was the worst — prisoners packed below decks in darkness, given rotten rations, killed by dysentery, smallpox, and typhus. Each morning the guards called down: "Rebels, turn out your dead."

An estimated 11,500 Americans died between 1776 and 1783. They were buried in shallow graves along the Brooklyn shore, remains washing out with the tides for decades.

The Prison Ship Martyrs Monument in Fort Greene Park, Brooklyn, is a 149-foot granite column over a crypt containing recovered remains. Most visitors do not know what it commemorates. The prison ship dead remain the most forgotten casualties of the Revolution.`,
    tags: ['prison ships', 'suffering', 'death', 'occupation'],
    town: { connect: { id: 'us-ny-new-york-city' } },
  },
  {
    id: 'story-new-york-city-modern-buried-history',
    title: 'The City That Buried Its Revolution',
    storyType: 'MODERN_VOICE',
    narratorName: 'Public Historian',
    narratorRole: 'New-York Historical Society',
    verificationStatus: 'UNVERIFIED',
    textVersion: `New York does not wear its Revolutionary War history the way Boston does. In Boston, the Freedom Trail marks the route and the sites are maintained. In New York, the Revolution is buried — literally, in many cases — under layers of subsequent development.

The battlefield of Long Island is now the neighborhoods of Park Slope and Gowanus. Fort Washington is a park in upper Manhattan. The prison ship martyrs rest beneath a monument that most Brooklynites walk past without a second glance. Fraunces Tavern still stands, but it is surrounded by skyscrapers that dwarf any sense of the eighteenth-century streetscape.

This is partly a matter of scale. New York grew so fast after the Revolution that its earlier history was simply built over. But it is also a matter of narrative. New York's Revolutionary experience was not triumphant. It was a story of defeat, occupation, and suffering. The city was lost in 1776 and not recovered until 1783. During those seven years, it was a British stronghold, a Loyalist haven, and the site of the war's worst atrocity: the prison ships.

That is not the kind of history that cities naturally celebrate. Boston had its Tea Party, its Minutemen, its siege and liberation. New York had its rout, its fire, and its dead. The story is harder to tell, and for a long time, the city did not try very hard to tell it.

That is changing. The Prison Ship Martyrs Monument has been restored. Archaeological work continues to uncover Revolutionary-era sites beneath the modern city. And there is growing recognition that New York's occupation experience — the divided loyalties, the civilian suffering, the intelligence war — is at least as important to understanding the Revolution as any battle.

The British chose New York as their base because it was the most strategically valuable city in America. Understanding why they held it for seven years, and what happened to the people who lived there, is essential to understanding the war as something more than a sequence of battles.`,
    audioScript: `New York does not wear its Revolutionary history like Boston does. The Revolution is buried under layers of development. The Long Island battlefield is now Park Slope. Fort Washington is a park. Fraunces Tavern is dwarfed by skyscrapers.

New York's experience was not triumphant. It was defeat, occupation, and suffering — the city lost in 1776, not recovered until 1783. The prison ships killed more Americans than all the battles combined. That is not history cities naturally celebrate.

That is changing. The Prison Ship Martyrs Monument has been restored. Archaeological work uncovers Revolutionary sites beneath the modern city. There is growing recognition that New York's occupation — the divided loyalties, civilian suffering, intelligence war — is essential to understanding the Revolution as more than a sequence of battles.`,
    tags: ['occupation', 'urban history', 'preservation', 'archaeology'],
    town: { connect: { id: 'us-ny-new-york-city' } },
  },
];
