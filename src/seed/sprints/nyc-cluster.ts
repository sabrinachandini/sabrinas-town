// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// NYC Cluster: Harlem Heights (NY) + White Plains (NY)
// Campaign: Washington's New York retreat, fall 1776

import { Prisma } from '@prisma/client';

/**
 * NYC Cluster — Harlem Heights and White Plains, New York
 *
 * These two towns share the same campaign: Washington's retreat from lower
 * Manhattan through northern Manhattan and into Westchester County in the fall
 * of 1776. The retreat went Manhattan → Harlem Heights → White Plains →
 * across the Hudson → Fort Lee → New Jersey.
 *
 * NOTE ON VERIFICATION: Historical content synthesized from Barnet Schecter's
 * "The Battle for New York," David Hackett Fischer's "Washington's Crossing,"
 * Robert Middlekauff's "The Glorious Cause," NPS documentation for the
 * Harlem Heights battlefield, and Westchester County Historical Society records.
 * Stories marked VERIFIED have strong documentary evidence. Lesser-known figures
 * carry ANECDOTAL or ORAL_TRADITION status where the primary record is thin.
 */

// ============================================================================
// HARLEM HEIGHTS
// ============================================================================

export const harlemHeightsTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Harlem Heights is where the Continental Army learned it could fight and win. That sounds straightforward, but in September 1776 it was not obvious at all. Six weeks earlier, British forces had crushed Washington's army on Long Island, and the subsequent evacuation of Brooklyn under cover of fog was more a narrow escape than a victory. Then came the loss of lower Manhattan, almost without a fight. The British landed at Kip's Bay on September 15 and American soldiers ran before they could even form a line. Washington, riding toward the sound of guns, reportedly wept with rage at what he saw.

The Battle of Harlem Heights on September 16, 1776, did not change the strategic situation. Washington still had to retreat. New York City was still in British hands. But what happened on the rocky, wooded terrain above the Harlem River that morning changed something less tangible and more important: the army's belief in itself.

The fight began almost accidentally. A scouting party under Lieutenant Colonel Thomas Knowlton encountered British light infantry near the edge of the American lines and was driven back. The British bugler then played a fox-hunting call — the sound used to signal that a quarry had gone to ground — a deliberate taunt meant to demoralize. Washington heard it and used it. He ordered a small frontal force to hold the British attention while Knowlton led a flanking party around their right. The maneuver worked. The British light infantry, suddenly threatened from two directions, retreated. They held at a buckwheat field and the Americans pushed them there too, before Washington called off the advance to avoid a general engagement.

The tactical details matter less than the consequence. Knowlton was killed during the flanking movement — a significant loss, as he had been one of the army's ablest light infantry officers, the organizer of Knowlton's Rangers, and the man who had led the night reconnaissance at Bunker Hill. His death was real and grievous. But the men around him had fought well, held their ground under fire, and driven British regulars from a position. That had not happened since Bunker Hill, and Bunker Hill had ended in an American withdrawal. Harlem Heights ended with the British falling back.

The ground itself shaped the battle. Manhattan above 125th Street in 1776 was a rugged, wooded landscape of ridges and hollows cut by the Harlem River valley. The rocky outcroppings and dense vegetation favored the smaller American force over the British regulars whose tactics assumed open fields. Washington had chosen his defensive line carefully: Harlem Heights, on the island's highest ground, gave his army a defensible northern perimeter while he figured out what to do next.

What he decided to do next was retreat again, but on his own terms and timetable. He held the Harlem Heights line for six weeks while maneuvering forces north and preparing the army for the next phase of the campaign. When he finally withdrew to White Plains in mid-October, it was an organized movement, not a rout. The difference was partly tactical and partly psychological — and the psychological difference traced directly to September 16.

Morris-Jumel Mansion, on the highest point of Manhattan at the time, served as Washington's headquarters during the Harlem Heights period. From its portico, he could see both the Hudson and Harlem Rivers and observe British movements in both directions. The mansion still stands, the oldest surviving house in Manhattan, and the view it commanded then tells you everything about why Washington chose to make his stand here rather than further south.

The battle's significance for African American history is also worth naming. Some of the soldiers who fought at Harlem Heights were Black men serving in integrated Continental Army units — a fact the revolution's commemorative tradition has often erased. New York's free Black population participated in the defense of the island in ways the documentary record only partially preserves.

Harlem Heights did not save New York. The British would eventually flank Washington out of his position just as they had on Long Island. But it demonstrated that American soldiers could execute a planned tactical maneuver against trained British troops and emerge with the better of the exchange. That was not nothing. In September 1776, it was close to everything.`,
};

// ============================================================================
// HARLEM HEIGHTS — PEOPLE
// ============================================================================

export const harlemHeightsPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-george-washington',
      name: 'George Washington',
      roles: ['Commander-in-Chief', 'General', 'Strategist'],
      bioShort:
        'Commander-in-Chief of the Continental Army who chose Harlem Heights as the army\'s defensive position after the disaster at Kip\'s Bay, and who ordered the flanking maneuver on September 16 that produced the first American tactical success since Bunker Hill.',
      birthYear: 1732,
      deathYear: 1799,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded all Continental forces at Harlem Heights; headquartered at Morris-Jumel Mansion during the six-week occupation of the Heights.',
  },
  {
    person: {
      id: 'person-thomas-knowlton',
      name: 'Thomas Knowlton',
      roles: [
        'Continental Army Lieutenant Colonel',
        'Knowlton\'s Rangers Commander',
        'Light Infantry Officer',
      ],
      bioShort:
        'Connecticut officer who organized Knowlton\'s Rangers, the Continental Army\'s first formal intelligence unit. Killed leading the flanking movement at Harlem Heights on September 16, 1776 — one of the most capable light infantry officers the army lost in the entire war.',
      birthYear: 1740,
      deathYear: 1776,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Led the flanking column at Harlem Heights; killed during the action on September 16, 1776.',
  },
  {
    person: {
      id: 'person-harlem-heights-william-howe',
      name: 'General William Howe',
      roles: [
        'British Commander-in-Chief in North America',
        'General',
        'Admiral\'s Brother',
      ],
      bioShort:
        'British commander who orchestrated the Long Island campaign, the Kip\'s Bay landing, and the broader New York campaign of 1776. Chose not to pursue Washington aggressively at Harlem Heights, a pattern of caution that allowed the Continental Army to survive repeatedly.',
      birthYear: 1729,
      deathYear: 1814,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded British forces during the New York campaign, including the light infantry units engaged at Harlem Heights.',
  },
  {
    person: {
      id: 'person-nathanael-greene',
      name: 'Nathanael Greene',
      roles: [
        'Continental Army General',
        'Division Commander',
        'Washington\'s Most Trusted Lieutenant',
      ],
      bioShort:
        'Rhode Island general who commanded a division during the New York campaign and urged Washington to abandon Fort Washington after Harlem Heights. His advice was overruled — a decision that led to the army\'s worst single defeat of the war.',
      birthYear: 1742,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Division commander during the Harlem Heights engagement; argued unsuccessfully for abandoning Fort Washington.',
  },
  {
    person: {
      id: 'person-israel-putnam',
      name: 'Israel Putnam',
      roles: [
        'Continental Army General',
        'Division Commander',
        'Bunker Hill Veteran',
      ],
      bioShort:
        'Connecticut general who commanded troops in lower Manhattan during the Kip\'s Bay debacle and organized the retreat up the island. Present during the Harlem Heights period as a senior division commander under Washington.',
      birthYear: 1718,
      deathYear: 1790,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the rearguard retreat from Kip\'s Bay to Harlem Heights; served as division commander during the subsequent defensive period.',
  },
  {
    person: {
      id: 'person-joseph-reed',
      name: 'Joseph Reed',
      roles: [
        'Continental Army Lieutenant Colonel',
        'Washington\'s Military Secretary',
        'Pennsylvania Politician',
      ],
      bioShort:
        'Washington\'s military secretary who participated in the Harlem Heights engagement and whose letters home provide some of the most detailed contemporary accounts of the battle\'s psychological effect on the army.',
      birthYear: 1741,
      deathYear: 1785,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Served as Washington\'s secretary during the New York campaign; participated in the Harlem Heights battle and documented its aftermath.',
  },
  {
    person: {
      id: 'person-roger-morris',
      name: 'Roger Morris',
      roles: ['Loyalist', 'Former British Officer', 'Landowner'],
      bioShort:
        'New York Loyalist whose mansion on Manhattan\'s highest point Washington commandeered as his headquarters at Harlem Heights. Morris had fled with British forces; his home became the nerve center of American resistance to the British occupation of lower Manhattan.',
      birthYear: 1727,
      deathYear: 1794,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Original owner of Morris-Jumel Mansion, Washington\'s headquarters during the Harlem Heights campaign.',
  },
  {
    person: {
      id: 'person-alexander-scammell',
      name: 'Alexander Scammell',
      roles: [
        'Continental Army Officer',
        'Adjutant General',
        'Light Infantry Commander',
      ],
      bioShort:
        'New Hampshire officer who served as an aide during the New York campaign and later became Continental Army Adjutant General. Present at Harlem Heights and among the officers who helped restore order after the Kip\'s Bay rout.',
      birthYear: 1747,
      deathYear: 1781,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Served in the Harlem Heights campaign; helped organize the Continental light infantry forces engaged in the September 16 action.',
  },
  {
    person: {
      id: 'person-harlem-heights-henry-clinton',
      name: 'General Henry Clinton',
      roles: [
        'British General',
        'Second-in-Command',
        'Future British Commander-in-Chief',
      ],
      bioShort:
        'British general who participated in the New York campaign of 1776 and later succeeded Howe as Commander-in-Chief in North America. His aggressive tactical instincts during the campaign stood in contrast to Howe\'s caution after Harlem Heights.',
      birthYear: 1730,
      deathYear: 1795,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Senior British commander during the New York campaign; led elements of the flanking operations that eventually forced Washington\'s retreat from Harlem Heights.',
  },
];

// ============================================================================
// HARLEM HEIGHTS — PLACES
// ============================================================================

export const harlemHeightsPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-harlem-heights-morris-jumel-mansion',
    name: 'Morris-Jumel Mansion',
    placeType: 'HISTORIC_HOUSE',
    description:
      'The oldest surviving house in Manhattan, built in 1765 on the highest natural point of the island. Washington used it as his headquarters during the Harlem Heights campaign from September to October 1776. The mansion commanded views of both the Hudson and Harlem Rivers, allowing observation of British movements on either side of the island.',
    lat: 40.8344,
    lng: -73.9388,
    address: '65 Jumel Terrace, New York, NY 10032',
    town: { connect: { id: 'us-ny-harlem-heights' } },
  },
  {
    id: 'place-harlem-heights-battlefield-site',
    name: 'Harlem Heights Battlefield Site',
    placeType: 'BATTLEFIELD',
    description:
      'The general area of the September 16, 1776 engagement, spanning the rocky, wooded terrain between present-day 120th and 135th Streets near the Hudson River. The battle unfolded across a series of ridges and hollows that no longer exist in recognizable form beneath Columbia University and Riverside Drive, but historical markers indicate the principal action areas.',
    lat: 40.8175,
    lng: -73.9620,
    address: 'Near Riverside Drive and 120th Street, New York, NY 10027',
    town: { connect: { id: 'us-ny-harlem-heights' } },
  },
  {
    id: 'place-harlem-heights-thomas-knowlton-marker',
    name: 'Thomas Knowlton Memorial Marker',
    placeType: 'MONUMENT',
    description:
      'A historical marker commemorating Lieutenant Colonel Thomas Knowlton, who was killed leading the flanking movement at Harlem Heights on September 16, 1776. Knowlton organized the Continental Army\'s first formal intelligence unit, Knowlton\'s Rangers, and his death at Harlem Heights was one of the most significant losses the army suffered in the New York campaign.',
    lat: 40.8190,
    lng: -73.9580,
    address: 'Riverside Drive at 122nd Street, New York, NY 10027',
    town: { connect: { id: 'us-ny-harlem-heights' } },
  },
  {
    id: 'place-harlem-heights-fort-tryon-ridge',
    name: 'Fort Tryon Ridge',
    placeType: 'LANDMARK',
    description:
      'The northern end of Washington\'s Harlem Heights defensive line, encompassing the high ground above the Harlem River that the army occupied during the fall 1776 campaign. The ridge offered commanding views of the surrounding terrain and represented the northernmost extent of the perimeter Washington held before retreating to White Plains.',
    lat: 40.8599,
    lng: -73.9328,
    address: 'Fort Tryon Park, New York, NY 10040',
    town: { connect: { id: 'us-ny-harlem-heights' } },
  },
  {
    id: 'place-harlem-heights-columbia-university-site',
    name: 'Harlem Heights Battle Terrain (Columbia University)',
    placeType: 'LANDMARK',
    description:
      'The Columbia University campus occupies ground near the center of the Harlem Heights battle area. The Buckewheat Field where American forces pushed British light infantry back stood roughly in the area now covered by university buildings and Morningside Heights. Historical panels around the campus note the Revolutionary War significance of the terrain.',
    lat: 40.8075,
    lng: -73.9626,
    address: 'Columbia University, 116th Street and Broadway, New York, NY 10027',
    town: { connect: { id: 'us-ny-harlem-heights' } },
  },
  {
    id: 'place-harlem-heights-fort-washington-site',
    name: 'Fort Washington Site',
    placeType: 'LANDMARK',
    description:
      'The site of Fort Washington on the northern tip of Manhattan, which Washington chose to hold after withdrawing the main army to White Plains. Its capture by the British on November 16, 1776, resulting in nearly 3,000 American prisoners, was the worst single defeat of the entire war — a direct consequence of the decision to maintain a garrison south of the main army\'s line of retreat.',
    lat: 40.8514,
    lng: -73.9324,
    address: 'Bennett Park, 183rd Street and Fort Washington Avenue, New York, NY 10033',
    town: { connect: { id: 'us-ny-harlem-heights' } },
  },
  {
    id: 'place-harlem-heights-dyckman-farmhouse',
    name: 'Dyckman Farmhouse Museum',
    placeType: 'HISTORIC_HOUSE',
    description:
      'The only surviving Dutch Colonial farmhouse in Manhattan, built by the Dyckman family around 1784 on the site of an earlier structure destroyed during the British occupation. The farm was within the Harlem Heights campaign area, and family records document the disruption British encampment brought to civilian households throughout upper Manhattan.',
    lat: 40.8804,
    lng: -73.9109,
    address: '4881 Broadway, New York, NY 10034',
    town: { connect: { id: 'us-ny-harlem-heights' } },
  },
];

// ============================================================================
// HARLEM HEIGHTS — EVENTS
// ============================================================================

export const harlemHeightsEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-harlem-heights-kips-bay-disaster',
    name: 'Kip\'s Bay Disaster',
    startDate: new Date('1776-09-15'),
    datePrecision: 'DAY',
    summary: `On September 15, 1776, British forces landed at Kip's Bay on the east side of Manhattan while warships on the East River fired a preparatory bombardment. The Connecticut militia defending the shore broke and ran before the landing craft reached the beach. Washington, riding toward the sound of the guns, arrived to find soldiers fleeing in panic. By eyewitness accounts he was beside himself — striking officers with his riding crop, screaming at men to stop, unable to rally them. He had to be led off the field by aides to prevent his capture.

The British landed approximately 4,000 troops and moved rapidly to cut across the island, threatening to trap the remainder of the American garrison still in lower Manhattan. Israel Putnam organized a desperate march up the island's western shore, moving his division north while British patrols were distracted by provisions left at a farmhouse to the east. The army escaped, barely.

The Kip's Bay disaster was the immediate context for everything that followed at Harlem Heights. Washington chose the high ground of northern Manhattan not because he intended to fight there but because he needed time to figure out what came next. The battle the following morning gave him that time — and gave the army something it had not had in weeks.`,
    significanceWeight: 85,
    lat: 40.7488,
    lng: -73.9736,
    town: { connect: { id: 'us-ny-harlem-heights' } },
  },
  {
    id: 'event-harlem-heights-battle',
    name: 'Battle of Harlem Heights',
    startDate: new Date('1776-09-16'),
    datePrecision: 'DAY',
    summary: `The battle began at dawn on September 16 when a reconnaissance party under Lieutenant Colonel Thomas Knowlton encountered British light infantry near the edge of the American lines south of Harlem Heights. Knowlton's men were driven back, and the British bugler played a fox-hunting call — the signal that the quarry had been driven to ground — directly within earshot of Washington and his officers.

Washington's response was immediate and deliberate. He ordered a small holding force to engage the British frontally, drawing their attention, while Knowlton led a larger flanking column around their right. A third force under Lieutenant Colonel Archibald Crary was to extend the encirclement further. The British commander recognized the danger and ordered a withdrawal to a buckwheat field further south. The Americans followed and pressed the attack there as well, gradually pushing the British light infantry back toward their main lines.

Washington called off the advance before the fighting could draw in British reinforcements and escalate into a general engagement he was not ready to fight. The action lasted several hours. American losses were approximately 30 killed and 100 wounded, including Knowlton killed and Major Andrew Leitch mortally wounded. British casualties were similar or slightly higher. By the metrics of the engagement itself, the result was at best a tactical draw. But the army that withdrew to its lines that evening was a different army than the one that had run from Kip's Bay the day before.`,
    significanceWeight: 92,
    lat: 40.8150,
    lng: -73.9640,
    town: { connect: { id: 'us-ny-harlem-heights' } },
  },
  {
    id: 'event-harlem-heights-knowlton-death',
    name: 'Death of Thomas Knowlton',
    startDate: new Date('1776-09-16'),
    datePrecision: 'DAY',
    summary: `Thomas Knowlton was shot while leading the flanking movement at Harlem Heights. The wound was mortal and he died on the field. Washington reportedly learned of his death while the battle was still in progress and described it afterward as an irreparable loss.

Knowlton had been one of the army's most capable light infantry officers. He had led the night reconnaissance up Breed's Hill before the Battle of Bunker Hill, a piece of fieldcraft that was tactically brilliant regardless of how the battle itself ended. In 1776, Washington had charged him with forming Knowlton's Rangers — the army's first organized intelligence-gathering unit, which ran reconnaissance operations throughout the New York campaign. His death left a gap in American light infantry capability that took months to fill.

The circumstances of his death illuminate both the courage and the cost of the Harlem Heights action. Knowlton knew the flanking movement was dangerous. He led it anyway, on foot, in close contact with the British troops he was trying to envelop. The tactical success of the maneuver was partly bought with his life.`,
    significanceWeight: 78,
    lat: 40.8155,
    lng: -73.9638,
    town: { connect: { id: 'us-ny-harlem-heights' } },
  },
  {
    id: 'event-harlem-heights-washington-hq-established',
    name: 'Washington Establishes Headquarters at Morris-Jumel Mansion',
    startDate: new Date('1776-09-14'),
    datePrecision: 'DAY',
    summary: `Washington established his headquarters at the Roger Morris mansion on September 14, 1776, the day before the Kip's Bay landing. The choice was strategic: the mansion sat on the highest natural point of Manhattan, with clear views of the Hudson River to the west and the Harlem River to the east. From its elevated position, Washington could observe British ship movements on both waterways and monitor approaches from both directions.

The mansion served as Washington's command center for approximately six weeks, until the army moved north to White Plains in mid-October. During this period, Washington met with his general officers, received intelligence reports from Knowlton's Rangers, and made the decisions about how long to hold Harlem Heights before the next retreat. The building's later owners, Stephen and Eliza Jumel, gave it the name it carries today; Eliza was one of the most colorful figures in early American history, eventually marrying Aaron Burr in 1833. But in September 1776, it was simply the best command post available on an island rapidly filling with British soldiers.`,
    significanceWeight: 72,
    lat: 40.8344,
    lng: -73.9388,
    town: { connect: { id: 'us-ny-harlem-heights' } },
  },
  {
    id: 'event-harlem-heights-knowlton-rangers-founded',
    name: 'Knowlton\'s Rangers Organized',
    startDate: new Date('1776-08-12'),
    datePrecision: 'MONTH',
    summary: `Shortly before the New York campaign reached its crisis, Washington tasked Lieutenant Colonel Thomas Knowlton with forming a specialized reconnaissance unit drawn from the best light infantry in the army. Knowlton's Rangers, officially the Corps of Rangers, were organized from volunteers across multiple Connecticut regiments and trained for intelligence-gathering, scouting, and screening operations.

The Rangers were the Continental Army's first formal intelligence unit, the institutional ancestor of modern American military intelligence. Their value became apparent immediately: during the Harlem Heights period, they ran continuous reconnaissance of British positions and movements on both sides of the island, providing Washington with the information he needed to maintain his defensive line while preparing the next phase of the retreat.

Nathan Hale, a schoolteacher-turned-officer, volunteered for a Rangers mission behind British lines in September 1776. He was captured, denied the trial due a prisoner of war, and hanged on September 22. His execution became one of the war's defining stories of sacrifice — though its most famous attributed quotation almost certainly was not what he actually said.`,
    significanceWeight: 80,
    lat: 40.8344,
    lng: -73.9388,
    town: { connect: { id: 'us-ny-harlem-heights' } },
  },
  {
    id: 'event-harlem-heights-nathan-hale-execution',
    name: 'Nathan Hale Executed',
    startDate: new Date('1776-09-22'),
    datePrecision: 'DAY',
    summary: `Nathan Hale, a 21-year-old Connecticut schoolteacher and Continental Army officer, was hanged by the British on September 22, 1776, having been captured while on a reconnaissance mission behind British lines. He had volunteered for the mission, which Knowlton had sought volunteers for specifically because of its obvious danger. He was recognized by a Loyalist relative, arrested, and brought before General Howe, who ordered his execution without trial.

He was executed the following morning in what is now Midtown Manhattan, near the present site of the Yale Club. Witnesses recorded his composure. The famous quotation attributed to him — "I only regret that I have but one life to lose for my country" — derives from accounts written decades later and is likely a paraphrase drawn from the English playwright Joseph Addison. What he actually said is not known.

The execution occurred just six days after Harlem Heights, at a moment when the army's morale was still fragile and the British hold on New York was consolidating. Hale's story became a founding narrative of American military sacrifice — partly because it was genuinely moving and partly because it served a political purpose in a nation that needed heroes it could name.`,
    significanceWeight: 88,
    lat: 40.7580,
    lng: -73.9855,
    town: { connect: { id: 'us-ny-harlem-heights' } },
  },
  {
    id: 'event-harlem-heights-great-fire',
    name: 'Great Fire of New York',
    startDate: new Date('1776-09-21'),
    datePrecision: 'DAY',
    summary: `On the night of September 21, 1776, a fire broke out in lower Manhattan and burned approximately a quarter of the city before being extinguished. The British accused American saboteurs of setting it deliberately; Washington had in fact considered destroying the city before retreating but had been prohibited by Congress. Whether the fire was arson, accident, or both remains unresolved.

The fire destroyed hundreds of buildings and displaced thousands of loyalist and civilian residents who had remained in the city. It complicated the British occupation by reducing the housing and supply infrastructure they had expected to use. From the American perspective, the fire — if it was indeed set by Patriots — was one of the few successful acts of resistance after the fall of the city, though Washington disclaimed any responsibility.

Washington could see the glow from his headquarters at Morris-Jumel Mansion. Whatever its cause, the fire was a reminder that the contest for New York was not simply military: it was also economic, psychological, and infrastructural. A city half-destroyed was less useful to either side.`,
    significanceWeight: 74,
    lat: 40.7080,
    lng: -74.0130,
    town: { connect: { id: 'us-ny-harlem-heights' } },
  },
  {
    id: 'event-harlem-heights-army-reorganization',
    name: 'Continental Army Reorganizes at Harlem Heights',
    startDate: new Date('1776-09-18'),
    datePrecision: 'MONTH',
    summary: `In the days following the Harlem Heights battle, Washington used the relative security of his defensive position to reorganize an army that had come dangerously close to dissolution. The Long Island defeat, the Kip's Bay rout, and weeks of retreat had depleted regiments, scattered equipment, and demoralized officers and enlisted men alike.

Washington restructured his command arrangements, consolidated understrength regiments, and pushed Congress and the states for reinforcements. He also began the correspondence that would eventually shape his thinking about the kind of army America needed: not short-term militia who left when their enlistments expired, but a standing professional force capable of sustained operations. The letter he wrote to Congress on September 25, 1776, from his Harlem Heights headquarters, is one of the clearest statements he ever made about the army's structural problems.

The reorganization was incomplete — it always was, throughout the war. But the six weeks at Harlem Heights gave the army a period of relative stability it had not had since before Long Island, and the battle on September 16 gave Washington's officers a tactical experience they could reference when morale flagged.`,
    significanceWeight: 68,
    lat: 40.8344,
    lng: -73.9388,
    town: { connect: { id: 'us-ny-harlem-heights' } },
  },
  {
    id: 'event-harlem-heights-retreat-begins',
    name: 'Washington Begins Retreat to White Plains',
    startDate: new Date('1776-10-16'),
    datePrecision: 'DAY',
    summary: `On October 16, Washington ordered the main army to begin withdrawing north from Harlem Heights toward White Plains in Westchester County. The move was prompted by intelligence that Howe was preparing another amphibious landing — this time at Pell's Point on the Westchester shore of Long Island Sound — that would threaten to cut off the American army from its supply lines and escape routes to the north.

The retreat was organized and deliberate, a sharp contrast to the chaos of Kip's Bay. Washington left a garrison of approximately 2,800 men at Fort Washington on the northern tip of Manhattan — a decision that Nathanael Greene supported and Washington later regretted profoundly. The main army moved north through Westchester in stages, skirmishing with British flanking parties as it went.

The withdrawal from Harlem Heights was the end of the New York Island campaign. Washington had held his line for six weeks after a catastrophic series of defeats, conducted an orderly retreat, and arrived in Westchester with most of his army intact. That was the best that could have been hoped for in September 1776.`,
    significanceWeight: 82,
    lat: 40.8400,
    lng: -73.9350,
    town: { connect: { id: 'us-ny-harlem-heights' } },
  },
  {
    id: 'event-harlem-heights-fort-washington-fall',
    name: 'Fall of Fort Washington',
    startDate: new Date('1776-11-16'),
    datePrecision: 'DAY',
    summary: `On November 16, 1776, a British and Hessian assault on Fort Washington overwhelmed the garrison of approximately 2,800 men. The attack came from multiple directions simultaneously, exploiting the fort's exposed position and the surrounding terrain that made defense nearly impossible against a determined assault. The garrison surrendered after several hours of fighting.

The capture of Fort Washington produced nearly 2,900 American prisoners — the largest single loss of men the Continental Army suffered in the entire war. The men were held on prison ships in New York Harbor, where conditions were horrific; thousands died of disease and neglect. The officers were eventually exchanged, but many enlisted men spent years in captivity.

Washington watched from the New Jersey shore across the Hudson, unable to intervene. He had accepted Greene's recommendation to hold the fort and had not overruled it when he had the chance. The defeat haunted him for years. It was also a direct consequence of the choices made during the Harlem Heights phase: the decision to leave a garrison on Manhattan while the main army retreated north created the vulnerability that Howe's assault exploited.`,
    significanceWeight: 90,
    lat: 40.8514,
    lng: -73.9324,
    town: { connect: { id: 'us-ny-harlem-heights' } },
  },
];

// ============================================================================
// HARLEM HEIGHTS — STORIES
// ============================================================================

export const harlemHeightsStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-harlem-heights-knowlton-flanking',
    title: 'The Fox-Hunt Call',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-thomas-knowlton' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Thomas Knowlton did not need to volunteer for the flanking movement at Harlem Heights. He was a lieutenant colonel, one of the senior officers present. He could have directed the operation from a distance, sent a major to lead it, and stayed where headquarters could reach him. He chose to go himself.

It is worth understanding what he was volunteering for. The British light infantry he was tasked with enveloping were professional soldiers who had been fighting in North America for years. They knew this style of woodland skirmishing. They would be watching for exactly the kind of flanking movement Knowlton was being sent to execute. The element of surprise, if it existed at all, would last only as long as it took the British to realize what was happening.

Knowlton led his column south through the wooded terrain west of the main action, trying to get around the British right flank without being heard or seen. He had done this kind of movement before — the night reconnaissance up Breed's Hill before Bunker Hill was his, one of the boldest pieces of light infantry work in the war's first year. He understood the risks and he understood the terrain.

He got most of the way to the objective before the British saw what was coming. They began pulling back to avoid encirclement. Knowlton's men followed, pressing the advantage, and then the shot came. Contemporary accounts do not agree on the exact moment or circumstances. What they agree on is that Knowlton was in the front of his column when he was hit, and that the wound was fatal.

Washington learned of his death while the action was still in progress. He had been watching the battle from a high point with field glasses. The report of Knowlton's wounding reached him and he understood immediately what it meant: the best light infantry officer in the army was gone. The tactical victory, such as it was, was already fading in importance.

What Knowlton's death meant for the army is difficult to calculate. In the short term, the Rangers continued to operate, and other officers stepped into the space his absence created. In the longer term, the loss of someone with his particular combination of tactical skill, personal courage, and organizational ability was never fully replaced. The Continental Army's intelligence capabilities remained uneven throughout the war, partly because the man who had been building them was dead at thirty-six in a field above the Harlem River.

He is buried — most historians believe — somewhere in the general area of the Harlem Heights battle, though no grave was ever marked. There is a monument. There are historical markers. But Knowlton himself is somewhere under the streets and buildings of upper Manhattan, which seems appropriate for a man who spent his career moving through landscape without leaving traces.`,
    audioScript: `Thomas Knowlton didn't need to lead the flanking movement at Harlem Heights himself. He was a lieutenant colonel. He could have sent a major.

He went anyway. He had done this kind of movement before — the night reconnaissance up Breed's Hill before Bunker Hill was his. He understood what he was volunteering for.

The British light infantry were professionals. Knowlton got most of the way to the objective before they saw what was coming. Then the shot came. He was in front of his column when he was hit.

Washington learned of it while the battle was still in progress. He understood immediately: the best light infantry officer in the army was gone.

No grave was ever marked. Knowlton is somewhere under the streets of upper Manhattan — which seems right for a man who spent his career moving through landscape without leaving traces.`,
    tags: ['Knowlton', 'light infantry', 'flanking', 'sacrifice', 'Rangers'],
    town: { connect: { id: 'us-ny-harlem-heights' } },
  },
  {
    id: 'story-harlem-heights-modern-historian',
    title: 'What the Army Needed to Learn',
    storyType: 'MODERN_VOICE',
    narratorName: 'Military Historian',
    narratorRole: 'Researcher, New-York Historical Society',
    verificationStatus: 'ANECDOTAL',
    textVersion: `People want the Battle of Harlem Heights to be a turning point, and I understand why. After the string of disasters in August and September 1776 — Long Island, Kip's Bay, the loss of New York City — the army badly needed something it could call a win. Harlem Heights gave them that, but it is important to be precise about what kind of win it was.

It was not a strategic victory. Washington still had to retreat. New York was still lost. The British still held the ground they needed for a comfortable base of operations. By any objective military measure, September 1776 was a catastrophe for the American cause, and one battle's worth of tactical success did not change that.

What Harlem Heights did was something harder to measure. It demonstrated that American soldiers could execute a planned maneuver — a flanking movement, which requires coordination, communication, and the willingness to move through difficult terrain under pressure — and come out the better of the exchange against British regulars. That had not been proven before. Bunker Hill showed they could hold a prepared position. Harlem Heights showed they could maneuver.

I spend a lot of time thinking about what terrain meant in this campaign. People picture 18th-century Manhattan as something like Central Park — open, manicured, easy to move through. It wasn't. The northern part of the island was rocky and heavily wooded, cut by ravines and hollows, with ridges that rose sharply above the Harlem River plain. That terrain was an asset to the smaller American force and a liability to the British, whose tactical doctrine assumed open fields.

When I walk researchers through the Morris-Jumel Mansion today, I ask them to look north and west from the building's elevation. You can still see — even through the city — how commanding that position was. Washington could watch the Hudson River traffic with a glass and monitor British ship movements on the East River with a slight turn. He chose his headquarters the way a good commander chooses everything: with terrain in mind.

The army that left Harlem Heights in October 1776 was not the same army that had run from Kip's Bay. It was still in trouble — Fort Washington would demonstrate that in November. But it had learned something about itself that proved essential in the months ahead, when the situation got worse before it got better.`,
    audioScript: `People want Harlem Heights to be a turning point. I understand why. But let me be precise about what it was.

It wasn't a strategic victory. Washington still had to retreat. New York was still lost. By any objective measure, September 1776 was a catastrophe.

What Harlem Heights proved was harder to measure. It showed that American soldiers could execute a planned flanking maneuver against British regulars and come out better in the exchange. That hadn't been proven before.

The terrain mattered. Northern Manhattan in 1776 was rocky, heavily wooded, cut by ravines. That favored the smaller American force. Washington chose his headquarters at Morris-Jumel Mansion with terrain in mind — from that elevation, he could watch ship movements on both rivers.

The army that left Harlem Heights in October wasn't the same army that ran from Kip's Bay. It had learned something about itself that proved essential when things got worse before they got better.`,
    tags: ['strategy', 'terrain', 'morale', 'retreat', 'New York campaign'],
    town: { connect: { id: 'us-ny-harlem-heights' } },
  },
];

// ============================================================================
// HARLEM HEIGHTS — LESSON PLANS
// ============================================================================

export const harlemHeightsLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-ny-harlem-heights' } },
    title: 'Harlem Heights: When an Army Learns to Fight',
    gradeRange: '6-8',
    estimatedDuration: '2-3 class periods',
    summary:
      'This lesson asks students to analyze the New York campaign of 1776 as a case study in military leadership under pressure. Using the sequence from Long Island through Kip\'s Bay to Harlem Heights, students trace how a series of defeats shaped the Continental Army\'s tactics, morale, and command decisions. Students examine what a "tactical win" means when the strategic situation remains dire, analyze how Washington and his officers communicated under stress, and consider the role of ordinary soldiers — including the rangers, scouts, and light infantry who fought at Harlem Heights — in an army that was still learning how to function. The lesson incorporates contemporary letters, modern military history analysis, and geographic inquiry using historical and current maps of Manhattan to understand how terrain shaped the battle.',
    lessonData: {
      objectives: [
        'Students will trace the sequence of military events from the Battle of Long Island through the Battle of Harlem Heights (August–September 1776)',
        'Students will analyze the concept of military morale using primary source evidence from the New York campaign',
        'Students will evaluate how terrain affected the outcome of the Battle of Harlem Heights',
        'Students will assess what Thomas Knowlton\'s death reveals about the costs of the New York campaign',
      ],
      essentialQuestions: [
        'Can a tactical victory matter even when the strategic situation is a defeat? What does Harlem Heights tell us?',
        'How does terrain shape a battle — and why did Washington choose the high ground of Manhattan?',
        'What does the death of Thomas Knowlton reveal about the difference between individual sacrifice and institutional loss?',
      ],
      materials: [
        'Historical map of northern Manhattan, 1776 (available via New York Public Library Digital Collections)',
        'Excerpt from Washington\'s letter to Congress, September 25, 1776',
        'Joseph Reed\'s account of the Harlem Heights battle (adapted)',
        'Modern topographic map of upper Manhattan showing current geography vs. 1776 terrain',
        'Graphic organizer: Cause, Decision, Consequence chain',
      ],
      activities: [
        {
          name: 'Terrain Analysis: Then and Now',
          duration: '20 minutes',
          description:
            'Students compare 1776 maps of northern Manhattan with current satellite images, identifying where rocky ridges and wooded terrain have been replaced by buildings and streets. They annotate both maps to show the battlefield area, Washington\'s headquarters at Morris-Jumel Mansion, and the routes Knowlton\'s flanking column likely took. Discussion: how does knowing the terrain help you understand the battle?',
        },
        {
          name: 'Sequence of Decisions',
          duration: '25 minutes',
          description:
            'Working in small groups, students reconstruct the decision chain from Long Island to Harlem Heights: the retreat from Brooklyn, the loss of Kip\'s Bay, the choice to hold the Heights. For each decision point, groups identify: What information did Washington have? What options did he have? What did he choose, and why? Groups share findings and compare interpretations.',
        },
        {
          name: 'Primary Source Analysis: What the Letters Say',
          duration: '20 minutes',
          description:
            'Students read adapted excerpts from Washington\'s September 25 letter to Congress and Joseph Reed\'s account of the Harlem Heights battle. Using a guided annotation sheet, they identify: How does Washington describe his army\'s situation? What does Reed say about the army\'s reaction to the battle\'s outcome? What do these sources tell us that official accounts of the battle do not?',
        },
        {
          name: 'Knowlton and the Cost of Tactical Success',
          duration: '15 minutes',
          description:
            'Brief discussion using the question: Thomas Knowlton was one of the army\'s most valuable officers. He was killed leading a tactical maneuver that produced a tactical success. Was that a good trade? Students write a 5-minute response arguing yes, no, or that the question is unanswerable — then share with a partner.',
        },
      ],
      assessment:
        'Formative: group map annotations and decision-chain graphic organizers. Summative: a one-page written response to the essential question "Can a tactical victory matter when the strategic situation is a defeat?" Students must use at least two pieces of specific evidence from the lesson.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information with other information in print and digital texts',
        'CCSS.ELA-LITERACY.RH.6-8.9: Analyze the relationship between a primary and secondary source on the same topic',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.5.6-8: Explain how and why perspectives of people have changed over time',
        'D2.Geo.2.6-8: Use maps, satellite images, photographs, and other representations to explain relationships between the locations of places and regions and their environmental characteristics',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-ny-harlem-heights' } },
    title: 'Intelligence, Sacrifice, and the Invisible War: Knowlton\'s Rangers',
    gradeRange: '9-12',
    estimatedDuration: '2-3 class periods',
    summary:
      'This lesson uses Knowlton\'s Rangers and the story of Nathan Hale to examine the role of intelligence and reconnaissance in the Revolutionary War. Students analyze what a military intelligence unit does, why Washington needed one in 1776, and what the unit\'s brief existence (Knowlton was killed weeks after forming it) reveals about the costs of building new institutions under fire. The Nathan Hale case study raises questions about what we know versus what we believe about historical figures — students evaluate the evidence for Hale\'s famous quotation and consider how myths form around moments of sacrifice. The lesson connects to contemporary questions about the ethics of intelligence gathering and the construction of national heroes.',
    lessonData: {
      objectives: [
        'Students will analyze the organizational purpose of Knowlton\'s Rangers within the Continental Army\'s command structure',
        'Students will evaluate the historical evidence for Nathan Hale\'s famous attributed quotation',
        'Students will assess how myths and legends form around moments of sacrifice and why societies create heroes',
        'Students will connect Revolutionary War intelligence operations to broader questions about the ethics and necessity of wartime intelligence',
      ],
      essentialQuestions: [
        'What is the relationship between what we know and what we believe about historical figures like Nathan Hale?',
        'What does it mean to build a new institution — like an intelligence unit — under conditions of active war and repeated defeat?',
        'How do societies construct heroes, and whose interests does hero-construction serve?',
      ],
      materials: [
        'Primary source: Washington\'s orders establishing Knowlton\'s Rangers (August 1776)',
        'Contemporary accounts of Nathan Hale\'s execution (Cunningham letter, Howe diary)',
        'Joseph Addison, Cato, Act IV, Scene IV (source for Hale\'s attributed quotation)',
        'Secondary source excerpts on the myth vs. history of Nathan Hale',
        'Map of British-occupied Manhattan showing Hale\'s probable reconnaissance route',
      ],
      activities: [
        {
          name: 'What Does an Intelligence Unit Do?',
          duration: '20 minutes',
          description:
            'Students read Washington\'s orders establishing Knowlton\'s Rangers and identify: what specific tasks the Rangers were assigned, what skills they needed, and why Washington thought the army needed a dedicated unit rather than relying on existing companies. Discussion: what does it tell us about the state of the Continental Army in August 1776 that it lacked a formal reconnaissance capability?',
        },
        {
          name: 'The Evidence Problem: Hale\'s Famous Words',
          duration: '30 minutes',
          description:
            'Students examine the evidence for Nathan Hale\'s famous quotation using a layered source analysis. First, they read the contemporary accounts (no quotation appears). Then they read the first published version of the quotation (decades later). Then they read the relevant lines from Joseph Addison\'s Cato, which Hale\'s college friends say he knew well. Discussion: does this change how we think about Hale? Does a paraphrase count as a quotation? What does this episode tell us about how historical evidence works?',
        },
        {
          name: 'Hero Construction: Who Needs Nathan Hale and Why',
          duration: '25 minutes',
          description:
            'Small group analysis of how and when the Hale story became a central American patriotic narrative — focusing on the decades after the war when the story solidified. Groups consider: what political and social needs did the Hale story serve? Whose stories were not told during the same period? Who was fighting at Harlem Heights who has no monument and no attributed quotation?',
        },
        {
          name: 'Intelligence Ethics: Then and Now',
          duration: '20 minutes',
          description:
            'Brief structured discussion connecting Revolutionary War intelligence operations to contemporary questions about espionage, surveillance, and the ethics of wartime intelligence. Students are not asked to resolve the questions but to identify what values are in tension and how the 1776 context helps illuminate — or complicates — contemporary debates.',
        },
      ],
      assessment:
        'Summative essay (750-1000 words): Choose one of the essential questions and develop an evidence-based argument. Students must cite at least three specific primary or secondary sources from the lesson and engage with at least one counterargument to their position.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors for how they treat the same or similar topics',
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in several primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.9.9-12: Analyze the relationship between historical sources and the secondary interpretations made from them',
        'D2.His.11.9-12: Critique the usefulness of historical sources for a specific historical inquiry based on their maker, date, place of origin, intended audience, and purpose',
        'D4.6.9-12: Use disciplinary and interdisciplinary lenses to understand the characteristics and causes of local, regional, and global problems',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// HARLEM HEIGHTS — ADDITIONAL LINKS
// ============================================================================

export const harlemHeightsAdditionalLinks: Array<{
  toTownId: string;
  linkType: 'SHARED_EVENT' | 'SHARED_PERSON' | 'GEOGRAPHIC_PROXIMITY';
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-ny-white-plains',
    linkType: 'SHARED_EVENT',
    reason:
      'Washington retreated from Harlem Heights to White Plains in October 1776 as part of the same continuous campaign. The two battles are sequential events in the same strategic withdrawal.',
    weight: 100,
  },
  {
    toTownId: 'us-ny-new-york-city',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason:
      'Harlem Heights is in northern Manhattan; the British captured lower Manhattan immediately before the Harlem Heights battle. The two locations are part of the same island and the same campaign.',
    weight: 90,
  },
  {
    toTownId: 'us-nj-morristown',
    linkType: 'SHARED_PERSON',
    reason:
      'Washington commanded at both locations. The New York retreat of fall 1776 was the prelude to the New Jersey phase of the campaign; the same army and many of the same officers operated in both theaters.',
    weight: 75,
  },
  {
    toTownId: 'us-ny-stony-point',
    linkType: 'SHARED_PERSON',
    reason:
      'Both sites are connected to the broader Hudson Valley campaign; officers who served at Harlem Heights later participated in Hudson River operations including the Stony Point assault.',
    weight: 55,
  },
];

// ============================================================================
// WHITE PLAINS
// ============================================================================

export const whitePlainsTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `The Battle of White Plains on October 28, 1776, is where Washington's retreat from New York stopped being a disaster and became a strategy. That framing requires some explanation, because on the day itself White Plains looked like another defeat in a season full of them. The British took Chatterton Hill. Washington withdrew north. The British could have pursued and destroyed the army. They did not. Why they did not is as important as anything that happened in the fighting.

White Plains sits in a bowl of land in Westchester County, bounded by ridges that made it a defensible position in the eighteenth century but also a trap if an enemy managed to control the surrounding high ground. Washington arrived there in late October with an army that had been retreating almost continuously since August. The men were exhausted, their equipment was depleted, and the enlistments of many were expiring within weeks. But they still outnumbered the British force following them, and Washington chose to fortify the ridges around the town and compel Howe to fight on ground that favored defense.

Howe's approach to White Plains illustrates why Washington survived 1776 when he had so many opportunities not to. The British general was methodical and cautious. He landed at Pell's Point on October 18, ten days before the battle, and marched toward White Plains slowly enough to allow Washington to choose his position and fortify it. At Pell's Point, Colonel John Glover's Marblehead regiment — the same men who had rowed Washington across the Delaware and out of Brooklyn — conducted a brilliant delaying action that cost Howe critical time. Four regiments against 4,000, and Glover's men held them long enough to matter.

The battle itself centered on Chatterton Hill, a prominent ridge west of the Bronx River that formed the American right flank. Washington had sent a mixed force — militia and Continentals — to hold it. The British assault on Chatterton Hill was well-executed: artillery softened the American position while Hessian and British infantry crossed the Bronx River and climbed the hill from two sides. The militia broke, as militia often did, but the Continental regiments on the hill fought well before falling back. The entire American force withdrew in good order to the next ridge north, leaving Howe in possession of Chatterton Hill but nothing more.

Then Howe paused. He spent two days preparing what appeared to be a general assault on Washington's new position, and then a rainstorm arrived and he stopped. He never resumed the attack. Washington withdrew north to North Castle, and Howe turned south toward Fort Washington instead, which fell on November 16 with the loss of nearly 3,000 men. The retreat continued across the Hudson, through New Jersey, to the Delaware.

The consequences of what did not happen at White Plains matter as much as what did. Howe had the chance to pursue and corner Washington's army in the weeks after the battle, and he declined to take it. Historians have argued about why for centuries: Was he overconfident? Was he genuinely cautious? Did he believe that generous terms would bring the colonists back to the crown, making their army's destruction unnecessary? Whatever the reason, his restraint gave Washington the time and space to escape across the Hudson and eventually reach the Delaware, where the victories at Trenton and Princeton in December would change everything.

The Westchester landscape that shaped the White Plains campaign is partially preserved today. Chatterton Hill is the most significant surviving terrain feature from the battle, visible from the surrounding roads and partially accessible by trail. The Bronx River, which the British crossed to assault the hill, still runs through the area. The town of White Plains has grown enormously since 1776, but the bones of the landscape that made it a defensive position — the ridges, the river, the surrounding hills — are still there for those who know how to read them.`,
};

// ============================================================================
// WHITE PLAINS — PEOPLE
// ============================================================================

export const whitePlainsPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-george-washington',
      name: 'George Washington',
      roles: ['Commander-in-Chief', 'General', 'Strategist'],
      bioShort:
        'Commander-in-Chief of the Continental Army who chose White Plains as his defensive position after withdrawing from Harlem Heights, and who managed the withdrawal from Chatterton Hill and the subsequent retreat toward the Hudson River.',
      birthYear: 1732,
      deathYear: 1799,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded all Continental forces at White Plains; established headquarters at the Elijah Miller House on the eastern edge of town.',
  },
  {
    person: {
      id: 'person-harlem-heights-william-howe',
      name: 'General William Howe',
      roles: [
        'British Commander-in-Chief in North America',
        'General',
        'Admiral\'s Brother',
      ],
      bioShort:
        'British commander who pursued Washington from Manhattan to White Plains but chose not to press his advantage after taking Chatterton Hill — a decision that allowed the Continental Army to escape across the Hudson and eventually reach the Delaware.',
      birthYear: 1729,
      deathYear: 1814,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded British forces at White Plains; made the critical decision not to pursue Washington after taking Chatterton Hill.',
  },
  {
    person: {
      id: 'person-white-plains-john-glover',
      name: 'John Glover',
      roles: [
        'Continental Army Colonel',
        'Marblehead Amphibious Regiment Commander',
        'Massachusetts Fisherman',
      ],
      bioShort:
        'Massachusetts fisherman and colonel who commanded the Marblehead regiment — the same men who rowed Washington across the Delaware. At Pell\'s Point, days before White Plains, Glover\'s four regiments conducted a delaying action against 4,000 British troops that bought Washington critical time to reach White Plains and fortify.',
      birthYear: 1732,
      deathYear: 1797,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the Pell\'s Point delaying action that gave Washington time to reach White Plains; his regiment participated in subsequent operations in the area.',
  },
  {
    person: {
      id: 'person-white-plains-alexander-mcdougall',
      name: 'Alexander McDougall',
      roles: [
        'Continental Army General',
        'New York Militia Leader',
        'Son of Liberty',
      ],
      bioShort:
        'New York general who commanded the American forces on Chatterton Hill during the Battle of White Plains. His mixed force of militia and Continentals contested the British assault on the hill before withdrawing in reasonable order — one of the better performances by a mixed American command in the New York campaign.',
      birthYear: 1732,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded American forces on Chatterton Hill; managed the contested withdrawal from the hill after the British assault.',
  },
  {
    person: {
      id: 'person-white-plains-leopold-heister',
      name: 'Lieutenant General Leopold von Heister',
      roles: [
        'Hessian General',
        'German Mercenary Commander',
        'Hessian Corps Commander',
      ],
      bioShort:
        'Commander of the Hessian forces in North America during the 1776 campaign. His troops participated in the assault on Chatterton Hill at White Plains and were among the most feared elements of the British force. Hessian discipline and aggressiveness at White Plains put significant pressure on the American right flank.',
      birthYear: 1707,
      deathYear: 1777,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded Hessian forces that participated in the assault on Chatterton Hill at White Plains.',
  },
  {
    person: {
      id: 'person-white-plains-charles-lee',
      name: 'General Charles Lee',
      roles: [
        'Continental Army General',
        'Former British Officer',
        'Subordinate Commander',
      ],
      bioShort:
        'Eccentric former British officer who served as a senior Continental general during the White Plains campaign. Washington ordered Lee to bring a substantial force from the Hudson Highlands to reinforce the army at White Plains; Lee delayed, which contributed to Washington\'s vulnerability during the retreat across New Jersey.',
      birthYear: 1732,
      deathYear: 1782,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded a separate force during the White Plains period; his failure to promptly execute Washington\'s orders contributed to the difficulties of the New Jersey retreat.',
  },
  {
    person: {
      id: 'person-nathanael-greene',
      name: 'Nathanael Greene',
      roles: [
        'Continental Army General',
        'Division Commander',
        'Washington\'s Most Trusted Lieutenant',
      ],
      bioShort:
        'Rhode Island general who commanded a division during the White Plains campaign and maintained his position as Washington\'s most trusted subordinate despite his advice to hold Fort Washington — the decision that produced the war\'s worst American defeat.',
      birthYear: 1742,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Division commander at White Plains; later oversaw the garrison of Fort Washington whose capture would cost the army nearly 3,000 men.',
  },
  {
    person: {
      id: 'person-white-plains-elijah-miller',
      name: 'Elijah Miller',
      roles: ['Local Farmer', 'Civilian', 'Property Owner'],
      bioShort:
        'White Plains-area farmer whose house on the eastern edge of town served as Washington\'s headquarters during the Battle of White Plains. The Miller House still stands as one of the few surviving structures directly associated with the battle.',
      birthYear: 1740,
      deathYear: 1790,
      verificationStatus: 'ANECDOTAL',
    },
    connectionNote:
      'His farmhouse served as Washington\'s headquarters during the battle; he and his family were displaced by the military occupation.',
  },
  {
    person: {
      id: 'person-white-plains-william-smallwood',
      name: 'Colonel William Smallwood',
      roles: [
        'Maryland Continental Regiment Commander',
        'Continental Army Colonel',
        'Future Governor of Maryland',
      ],
      bioShort:
        'Commander of the Maryland Continental Regiment who fought at White Plains. The Marylanders had been among the soldiers who covered the Long Island retreat; at White Plains they again served as reliable Continentals in a force that mixed professional soldiers with unreliable militia.',
      birthYear: 1732,
      deathYear: 1792,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Led Continental forces during the Chatterton Hill engagement at White Plains.',
  },
];

// ============================================================================
// WHITE PLAINS — PLACES
// ============================================================================

export const whitePlainsPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-white-plains-chatterton-hill',
    name: 'Chatterton Hill (Battle of White Plains Site)',
    placeType: 'BATTLEFIELD',
    description:
      'The dominant terrain feature of the Battle of White Plains, a ridge west of the Bronx River that formed the American right flank. The British assault on Chatterton Hill on October 28, 1776, was the battle\'s decisive action — Hessian and British infantry crossed the Bronx River and climbed the ridge from two sides, eventually forcing the American defenders to withdraw. The hill is partially preserved and accessible.',
    lat: 41.0340,
    lng: -73.7920,
    address: 'Chatterton Hill, White Plains, NY 10601',
    town: { connect: { id: 'us-ny-white-plains' } },
  },
  {
    id: 'place-white-plains-elijah-miller-house',
    name: 'Elijah Miller House',
    placeType: 'HISTORIC_HOUSE',
    description:
      'Washington\'s headquarters during the Battle of White Plains, a farmhouse on the eastern edge of town that served as the army\'s command center during the October 28 engagement. The Miller House is one of the few surviving structures directly associated with the battle and stands as a Westchester County historic site.',
    lat: 41.0303,
    lng: -73.7689,
    address: 'Virginia Road, North White Plains, NY 10603',
    town: { connect: { id: 'us-ny-white-plains' } },
  },
  {
    id: 'place-white-plains-battle-monument',
    name: 'Battle of White Plains Monument',
    placeType: 'MONUMENT',
    description:
      'A granite monument marking the site of the Battle of White Plains, erected in the nineteenth century to commemorate the October 28, 1776 engagement. Located in the center of White Plains, the monument is accompanied by interpretive signage describing the battle and its place in the New York campaign.',
    lat: 41.0340,
    lng: -73.7629,
    address: 'Battle Avenue, White Plains, NY 10601',
    town: { connect: { id: 'us-ny-white-plains' } },
  },
  {
    id: 'place-white-plains-bronx-river-crossing',
    name: 'Bronx River Crossing Site',
    placeType: 'LANDMARK',
    description:
      'The approximate location where British and Hessian forces forded the Bronx River to assault Chatterton Hill on October 28, 1776. The crossing was contested by American defenders on the hill\'s western slope. The Bronx River Parkway now runs alongside this stretch of the river, which remains in its general historical course through the battle area.',
    lat: 41.0320,
    lng: -73.7810,
    address: 'Near Bronx River Parkway, White Plains, NY 10601',
    town: { connect: { id: 'us-ny-white-plains' } },
  },
  {
    id: 'place-white-plains-miller-hill-redoubt',
    name: 'Miller Hill Redoubt Site',
    placeType: 'LANDMARK',
    description:
      'The site of one of the earthwork fortifications the Continental Army constructed on the ridges around White Plains in preparation for Howe\'s assault. The fortifications were built hastily in the days before the battle and reflected Washington\'s strategy of using the high ground around the town to force the British to assault prepared positions. Little survives above ground today.',
    lat: 41.0290,
    lng: -73.7650,
    address: 'Near Martine Avenue, White Plains, NY 10601',
    town: { connect: { id: 'us-ny-white-plains' } },
  },
  {
    id: 'place-white-plains-pells-point-battlefield',
    name: 'Pell\'s Point Battlefield',
    placeType: 'BATTLEFIELD',
    description:
      'The site of the October 18, 1776 delaying action where Colonel John Glover\'s Marblehead regiment held 4,000 British troops with four regiments, buying Washington ten days to reach White Plains. Pell\'s Point is in what is now the Pelham Bay section of the Bronx. The terrain is preserved within Pelham Bay Park and is one of the most underappreciated battlefield sites in the New York metropolitan area.',
    lat: 40.8651,
    lng: -73.7985,
    address: 'Pelham Bay Park, Bronx, NY 10464',
    town: { connect: { id: 'us-ny-white-plains' } },
  },
  {
    id: 'place-white-plains-westchester-county-center',
    name: 'Westchester County Historical Society',
    placeType: 'MUSEUM',
    description:
      'The primary repository for documents, maps, and artifacts relating to Westchester County\'s role in the Revolutionary War, including the White Plains campaign. The Historical Society holds original records from the period, maps of the battle area, and accounts from local families who experienced the military occupation of the county.',
    lat: 41.0223,
    lng: -73.7849,
    address: '2199 Saw Mill River Road, Elmsford, NY 10523',
    town: { connect: { id: 'us-ny-white-plains' } },
  },
];

// ============================================================================
// WHITE PLAINS — EVENTS
// ============================================================================

export const whitePlainsEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-white-plains-army-arrives',
    name: 'Continental Army Arrives at White Plains',
    startDate: new Date('1776-10-21'),
    datePrecision: 'DAY',
    summary: `Washington's army reached White Plains in stages between October 18 and 21, 1776, marching north from Harlem Heights through Westchester County. The march was conducted under constant threat from British flanking forces following from the south and east, and the army arrived in mixed condition: veteran regiments still capable, militia regiments unreliable, and artillery struggling to move over the poor Westchester roads.

Washington chose White Plains for its defensibility. The town sat in a hollow surrounded by ridges that offered commanding fields of fire. He immediately ordered the construction of earthworks on the key ridges, particularly on Chatterton Hill to the west and on the heights north and east of town. The defensive line was laid out over several days while the army rested and the engineers directed the digging.

The week between arrival and battle allowed the army to do something it had not had time to do during most of the New York campaign: prepare. The earthworks at White Plains were not as sophisticated as those at Bunker Hill, but they represented the same principle — use terrain and prepared defenses to compensate for the difference in training between Continental soldiers and British regulars.`,
    significanceWeight: 72,
    lat: 41.0340,
    lng: -73.7629,
    town: { connect: { id: 'us-ny-white-plains' } },
  },
  {
    id: 'event-white-plains-pells-point',
    name: 'Battle of Pell\'s Point',
    startDate: new Date('1776-10-18'),
    datePrecision: 'DAY',
    summary: `On October 18, 1776, Colonel John Glover's Marblehead regiment encountered the British landing force at Pell's Point on the Westchester shore. The British had landed 4,000 troops to flank Washington's army; Glover had approximately 750 men in four regiments. What followed was one of the most skillful delaying actions of the entire war.

Glover posted his regiments behind stone walls at intervals, ordering each to fire a volley, then fall back to the next position while the next regiment fired. The British advanced cautiously, unable to determine American strength. Glover sustained the action for most of the day, inflicting significant casualties on the larger force while taking relatively light losses himself.

The military significance was profound: Glover's delay gave Washington ten critical days to withdraw from Harlem Heights, march to White Plains, choose his position, and construct earthworks before Howe arrived. Without Pell's Point, the British might have cut the American army off before it could reach defensible ground. Glover's action receives little attention in popular histories of the Revolution, but professional military historians consistently identify it as one of the most important small-unit actions of the war.`,
    significanceWeight: 88,
    lat: 40.8651,
    lng: -73.7985,
    town: { connect: { id: 'us-ny-white-plains' } },
  },
  {
    id: 'event-white-plains-battle',
    name: 'Battle of White Plains',
    startDate: new Date('1776-10-28'),
    datePrecision: 'DAY',
    summary: `The Battle of White Plains began on October 28, 1776, when British and Hessian forces approached the American lines. Howe's main effort targeted Chatterton Hill, the ridge west of the Bronx River that anchored Washington's right flank. The assault required the British to cross the river under fire from American defenders on the hill, then climb a steep slope against entrenched positions.

The fighting on Chatterton Hill was among the most intense of the New York campaign. Alexander McDougall's mixed force of militia and Continentals initially held the British advance. The militia units on the hill's western face broke when Hessian infantry appeared from an unexpected direction, and the Continental regiments, their flanks exposed, were forced to fall back. The entire American force withdrew to the next ridge line in reasonable order — not a rout, but a defeat.

Washington's new position on the northern ridge was stronger than Chatterton Hill, and Howe did not immediately assault it. He spent two days massing artillery and preparing what appeared to be a general attack. Then a rainstorm arrived, and he stopped. He never resumed the offensive at White Plains. The decision to halt allowed Washington to withdraw north to North Castle in good order on November 1.`,
    significanceWeight: 95,
    lat: 41.0340,
    lng: -73.7920,
    town: { connect: { id: 'us-ny-white-plains' } },
  },
  {
    id: 'event-white-plains-chatterton-hill-assault',
    name: 'British Assault on Chatterton Hill',
    startDate: new Date('1776-10-28'),
    datePrecision: 'DAY',
    summary: `The assault on Chatterton Hill was the tactical crux of the Battle of White Plains. British artillery opened fire on the American position while infantry and Hessian forces prepared to cross the Bronx River. The crossing was contested — American riflemen on the hill's western slope made the fording difficult — but the British managed it in force.

The Hessians climbed the hill's steep face while British regulars pushed from the south and southwest. The American militia on the western face broke when they saw themselves outflanked, and their collapse exposed the Continental regiments beside them. The Continentals — including elements of Smallwood's Maryland regiment — fought harder and fell back in better order, but they could not hold the hill alone once the militia had gone.

The loss of Chatterton Hill was significant but not catastrophic. Washington's army still occupied the higher ground to the north, and Howe's possession of Chatterton Hill gave him an artillery position, not a decisive advantage. The decision of what to do next belonged to Howe, and he chose caution.`,
    significanceWeight: 87,
    lat: 41.0340,
    lng: -73.7920,
    town: { connect: { id: 'us-ny-white-plains' } },
  },
  {
    id: 'event-white-plains-howe-stops',
    name: 'Howe Declines to Pursue',
    startDate: new Date('1776-10-30'),
    datePrecision: 'DAY',
    summary: `After taking Chatterton Hill on October 28, Howe spent two days massing forces and artillery for what appeared to be a general assault on Washington's new position on the northern ridges. Then a rainstorm arrived on October 30, and the planned attack was postponed. Howe never resumed it. He turned his attention south, toward Fort Washington and the opportunity to capture the garrison Washington had left behind on Manhattan.

The decision not to pursue Washington after White Plains is one of the most analyzed choices in the entire New York campaign. Howe's critics, then and since, have argued that a determined pursuit could have destroyed or captured the Continental Army at its most vulnerable point. Howe's defenders argue that attacking a prepared position in rain and mud carried risks that might not have been worth the potential gain.

Whatever the reasoning, the consequence was definitive: Washington escaped. He moved north to North Castle, then west to Fort Lee across the Hudson, then south through New Jersey in what became known as the "long retreat" — ending at the Delaware, where the army's crossing on Christmas night 1776 set up the victories at Trenton and Princeton that transformed the war's momentum.`,
    significanceWeight: 90,
    lat: 41.0340,
    lng: -73.7629,
    town: { connect: { id: 'us-ny-white-plains' } },
  },
  {
    id: 'event-white-plains-militia-performance',
    name: 'Militia Performance at White Plains',
    startDate: new Date('1776-10-28'),
    datePrecision: 'DAY',
    summary: `The Battle of White Plains produced a stark illustration of one of the Continental Army's persistent structural problems: the unreliability of militia under sustained pressure from professional troops. On Chatterton Hill, militia units held briefly against the initial British advance, then broke when Hessian infantry appeared on their flank. Their departure exposed the Continental regiments beside them and forced a withdrawal that the Continentals alone might have prevented.

This was not exceptional behavior for militia in the 18th century. Citizen soldiers, without the training and discipline that turned breaking into holding, consistently performed differently under fire than professional troops. Washington knew this, had argued for it, and had been partially ignored by Congress, which preferred the cheaper option of short-term militia to the expensive alternative of a standing army.

White Plains reinforced the argument Washington had been making since the Long Island defeat: the militia system could supplement a professional Continental force, but it could not substitute for one. The evidence would pile up through the rest of 1776 and into 1777, until Congress finally began authorizing the longer enlistments and larger force structure Washington needed.`,
    significanceWeight: 75,
    lat: 41.0340,
    lng: -73.7920,
    town: { connect: { id: 'us-ny-white-plains' } },
  },
  {
    id: 'event-white-plains-retreat-north-castle',
    name: 'Washington Retreats to North Castle',
    startDate: new Date('1776-11-01'),
    datePrecision: 'DAY',
    summary: `On November 1, 1776, Washington withdrew the main army north from White Plains to North Castle (present-day Armonk), leaving Howe in possession of the White Plains battlefield. The move was orderly and unopposed — Howe was not following. From North Castle, Washington could monitor British movements and decide whether to move further north or cross the Hudson to New Jersey.

The decision he faced was genuinely difficult. His army was intact but weakening: enlistments expiring, men deserting, supplies running low. Moving north would put distance between him and the British but would also distance him from the Continental Congress in Philadelphia and from the New Jersey towns that a British advance would threaten. Moving west across the Hudson to New Jersey would mean abandoning Westchester and committing to a campaign in a new theater.

He chose New Jersey. The march from North Castle to the Hudson River crossing at Peekskill was the last leg of the retreat that had started at Kip's Bay. When the army crossed the Hudson in early November, it was the end of the New York phase of the war.`,
    significanceWeight: 80,
    lat: 41.1060,
    lng: -73.7160,
    town: { connect: { id: 'us-ny-white-plains' } },
  },
  {
    id: 'event-white-plains-loyalist-population',
    name: 'Westchester Loyalism and the Campaign',
    startDate: new Date('1776-10-01'),
    datePrecision: 'MONTH',
    summary: `Westchester County had a substantial Loyalist population in 1776, and the White Plains campaign unfolded across a landscape where political allegiances were divided within families and between neighbors. Some local residents provided intelligence to the British, others sheltered Continental soldiers, and many tried to remain neutral in a conflict that made neutrality increasingly untenable.

The British advance through Westchester was accompanied by foraging parties that stripped farms of food and livestock regardless of the owners' political sympathies. American troops did the same. By November 1776, much of Westchester was effectively a war zone where neither side offered reliable protection to civilians. The county would remain contested territory — raided by both sides — for much of the remaining war.

The Loyalist question in Westchester illustrates a dimension of the Revolution that the national mythology tends to smooth over: significant numbers of Americans, perhaps a third of the colonial population, either opposed independence actively or refused to support it. The Revolution was a civil war as well as a war of independence, and White Plains was in the middle of one of its most fractious counties.`,
    significanceWeight: 68,
    lat: 41.0340,
    lng: -73.7629,
    town: { connect: { id: 'us-ny-white-plains' } },
  },
  {
    id: 'event-white-plains-hessian-forces',
    name: 'Hessian Forces at White Plains',
    startDate: new Date('1776-10-28'),
    datePrecision: 'DAY',
    summary: `The Hessian soldiers who assaulted Chatterton Hill at White Plains were German mercenaries — soldiers from the Landgraviate of Hesse-Kassel whose rulers had contracted with the British government to provide military forces for the American campaign. Approximately 30,000 German soldiers served in North America during the Revolution; they were among the most disciplined professional troops the British deployed.

The presence of Hessians in the British force shaped American attitudes toward the conflict in ways that simple opposition to British authority alone would not have. The use of foreign mercenaries to suppress what Americans saw as their constitutional rights was a powerful piece of evidence in the argument for independence — it was referenced explicitly in the Declaration of Independence and in Continental propaganda throughout the war.

At White Plains, the Hessians performed exactly as advertised: they crossed the Bronx River under fire, climbed Chatterton Hill, and broke the American militia position. Their effectiveness against militia was a feature, not a bug, from the British perspective — and their success reinforced Washington's argument for professional Continental troops who could be expected to hold under the same pressure.`,
    significanceWeight: 72,
    lat: 41.0340,
    lng: -73.7920,
    town: { connect: { id: 'us-ny-white-plains' } },
  },
  {
    id: 'event-white-plains-charles-lee-delay',
    name: 'General Lee Fails to Reinforce',
    startDate: new Date('1776-11-10'),
    datePrecision: 'MONTH',
    summary: `After White Plains, Washington ordered General Charles Lee to bring his force from the Hudson Highlands south to reinforce the main army for the New Jersey campaign. Lee was slow to comply — inexplicably slow, given the urgency of Washington's situation. He delayed for weeks, offering various justifications and at times appearing to pursue an independent strategy of his own.

Lee was captured by a British patrol at Basking Ridge, New Jersey, on December 13, 1776 — partly the result of his own carelessness in lodging away from his troops at a tavern. His capture removed him from the equation and forced Washington to absorb his force under other commanders. Washington had mixed feelings about Lee: he was a former British officer with professional credentials Washington lacked, but his conduct during the retreat demonstrated that his judgment could not be relied upon.

The episode illustrated a recurring problem in the Continental Army's command structure: Washington commanded in theory but did not always command in practice, because Congress had created a system in which senior generals could challenge his decisions and Congress itself might intervene. Lee's delay cost the army reinforcements it needed during one of the most dangerous weeks of the war.`,
    significanceWeight: 70,
    lat: 40.6890,
    lng: -74.5630,
    town: { connect: { id: 'us-ny-white-plains' } },
  },
  {
    id: 'event-white-plains-british-occupy-westchester',
    name: 'British Occupation of Westchester',
    startDate: new Date('1776-11-01'),
    datePrecision: 'MONTH',
    summary: `After Washington withdrew from White Plains, the British established effective control over most of Westchester County for the remainder of the war. The county became a buffer zone between British-held New York City and the American interior — a contested, raided, economically devastated strip of territory that neither side could fully control or leave alone.

Westchester's occupation had permanent effects on the county's civilian population. Properties were damaged or destroyed. Families were divided along political lines. Farming became dangerous as foraging parties from both armies stripped the land. Some families fled; those who remained navigated a world in which loyalty to either side offered no reliable protection.

The county's experience during the war shaped its postwar politics and social structure in ways that historians have only recently begun to fully document. The Loyalists who had aided the British were displaced after the war, their properties confiscated. The Patriots who had remained were left to rebuild communities that the war had hollowed out. White Plains itself would not fully recover its prewar economic activity for decades.`,
    significanceWeight: 65,
    lat: 41.0340,
    lng: -73.7629,
    town: { connect: { id: 'us-ny-white-plains' } },
  },
];

// ============================================================================
// WHITE PLAINS — STORIES
// ============================================================================

export const whitePlainsStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-white-plains-glover-pells-point',
    title: 'Four Regiments Against Four Thousand',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-white-plains-john-glover' } },
    verificationStatus: 'VERIFIED',
    textVersion: `John Glover stood at the top of a low ridge near Pell's Point on October 18, 1776, and watched 4,000 British soldiers coming off their boats. He had 750 men in four regiments. The question was not whether to fight but how long to make it last.

Glover was a Marblehead fisherman who had made his career reading water and weather and other men. He had read the situation at Brooklyn correctly in August — his regiment had rowed Washington's army off Long Island in the dark and the fog, a piece of seamanship that saved the Revolution. He read the situation at Pell's Point correctly too.

He posted his regiments behind stone walls at intervals on the ridge, running parallel to the British line of advance. He ordered each regiment to hold until the British were within effective range, fire a volley, then fall back to the next position while the next regiment took over. The idea was not to stop the British — four regiments could not stop 4,000 men — but to slow them, confuse them about American numbers, and buy time.

It worked for most of the day. The British advanced cautiously, unable to determine how many Americans they were facing. Each time they seemed to break through, another stone wall produced another volley from another regiment. Glover sustained the action through the afternoon, then withdrew his men in good order as darkness fell.

The casualties were relatively light on both sides, which is partly what made the action so effective: Glover had delayed the British without destroying his force in the process. He had done exactly what a rear guard is supposed to do — impose costs on the enemy's advance without paying too high a price himself.

Washington had ten more days to reach White Plains and prepare his position. The earthworks that the Continental engineers built during those ten days were the earthworks that made the Battle of White Plains a contested engagement rather than a rout. Pell's Point made White Plains possible.

No one puts Pell's Point in the popular histories. No statues of Glover commemorate the stone walls on the Bronx ridges where his fishermen stood their ground against professional soldiers outnumbering them five to one. The battle that is almost never mentioned was the one that made the battle everyone knows about possible.`,
    audioScript: `John Glover stood at Pell's Point on October 18, 1776, and watched 4,000 British soldiers coming ashore. He had 750 men. The question wasn't whether to fight — it was how long to make it last.

Glover posted his regiments behind stone walls at intervals. Each regiment would hold, fire a volley, fall back to the next position. The British advanced cautiously, unable to gauge American numbers. It lasted most of the day.

Washington got ten more days to reach White Plains and dig in. The earthworks his engineers built during those ten days made White Plains a contested engagement rather than a rout.

Pell's Point made White Plains possible. No one puts it in the popular histories. No statues commemorate the stone walls where Glover's fishermen stood five to one against professionals. The battle almost no one knows was the one that made the battle everyone knows possible.`,
    tags: ['Glover', 'delaying action', 'Marblehead', 'Pell\'s Point', 'terrain'],
    town: { connect: { id: 'us-ny-white-plains' } },
  },
  {
    id: 'story-white-plains-modern-civil-war',
    title: 'The County That Chose Both Sides',
    storyType: 'MODERN_VOICE',
    narratorName: 'Westchester County Historian',
    narratorRole: 'Director of Research, Westchester County Historical Society',
    verificationStatus: 'ANECDOTAL',
    textVersion: `Westchester County during the Revolution was one of the most politically divided places in colonial America, and I think that story is just as important as the battle itself — maybe more so.

People think of the Revolution as Americans versus British. In Westchester, it was neighbors versus neighbors, families split down the middle, farmers who had known each other for thirty years suddenly finding that one of them was supplying the Continental Army and the other was passing information to British foragers. The county's Loyalist population was substantial and, in many parts of the county, dominant. When the British controlled the area after White Plains, they were not occupying enemy territory — they were, in a meaningful sense, coming to the aid of people who had wanted them there.

What this means for how we understand White Plains is that the battle was a military event inside a much more complicated social and political situation. Washington's army was fighting through a county where a significant portion of the civilian population did not want them to win. The local militia who fought on Chatterton Hill were not representative of the county as a whole — they were the Patriots in a community that included many who were not.

The postwar settlement in Westchester was harsh. Loyalist properties were confiscated, families expelled, social networks dismantled. The men who had worked within the British system — some of whom had protected their neighbors and kept order better than the guerrilla war that preceded the British occupation — were treated as traitors by the victorious side. That's what losing a civil war looks like.

I spend a lot of time working with the county's Revolutionary-era records, and what strikes me most is how ordinary it all looks at the document level. Farm inventories. Property records. Church records. The war was fought over and around people who were trying to grow wheat and raise children and pay debts, and it disrupted all of that with a thoroughness that the subsequent mythology of patriotic sacrifice tends to obscure.

White Plains is remembered as a battle. In the county records, it looks more like a catastrophe that happened to people who had not asked for it and who survived it as best they could, regardless of which side they were on.`,
    audioScript: `Westchester during the Revolution was one of the most politically divided places in colonial America. Neighbors versus neighbors. Families split. The county's Loyalist population was large — when the British moved in after White Plains, they were coming to the aid of people who had wanted them there.

Washington's army was fighting through a county where a significant portion of civilians did not want them to win. The militia on Chatterton Hill weren't representative of the county — they were the Patriots in a community that included many who were not.

After the war, the settlement was harsh. Loyalist properties confiscated. Families expelled. That's what losing a civil war looks like.

I work with the county's wartime records constantly. What strikes me is how ordinary it looks at the document level: farm inventories, property records, church records. The battle is remembered as a battle. In the county records, it looks more like a catastrophe that happened to people who hadn't asked for it.`,
    tags: [
      'Loyalism',
      'civil war',
      'Westchester',
      'civilians',
      'divided community',
    ],
    town: { connect: { id: 'us-ny-white-plains' } },
  },
];

// ============================================================================
// WHITE PLAINS — LESSON PLANS
// ============================================================================

export const whitePlainsLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-ny-white-plains' } },
    title: 'White Plains: The Battle Howe Could Have Won',
    gradeRange: '6-8',
    estimatedDuration: '2-3 class periods',
    summary:
      'This lesson asks students to analyze the Battle of White Plains from both the American and British perspectives, focusing on the decision-making of commanders in the fog of incomplete information. Students trace the sequence from Pell\'s Point through the battle on Chatterton Hill to Howe\'s decision not to pursue the retreating American army — and evaluate what different choices might have meant for the outcome of the war. The lesson uses primary source accounts from both sides of the battle, geographic analysis of the White Plains terrain, and structured debate to develop students\' ability to evaluate decisions in historical context. Students also examine the experience of Westchester civilians caught between two armies, connecting military and social history.',
    lessonData: {
      objectives: [
        'Students will analyze the Battle of White Plains from both American and British command perspectives',
        'Students will evaluate how terrain affected tactical decisions at Pell\'s Point and Chatterton Hill',
        'Students will assess the consequences of Howe\'s decision not to pursue Washington after the battle',
        'Students will describe the experience of Westchester civilians during the campaign',
      ],
      essentialQuestions: [
        'Was General Howe right not to pursue Washington after White Plains? What information did he have, and what were his options?',
        'How did the terrain of Westchester County shape the outcome of the campaign?',
        'What did the Revolution look like to civilians in a divided county where both armies were present?',
      ],
      materials: [
        'Historical map of White Plains area, 1776 (Westchester County Historical Society)',
        'Adapted excerpt: Howe\'s after-action report on the Battle of White Plains',
        'Adapted excerpt: American officer accounts of Chatterton Hill',
        'Graphic organizer: Decision Point Analysis (options, information, choice, consequence)',
        'Brief reading: Westchester County and the Loyalist question',
      ],
      activities: [
        {
          name: 'Terrain Analysis: Why White Plains?',
          duration: '15 minutes',
          description:
            'Students examine a historical map of the White Plains area, identifying Chatterton Hill, the Bronx River, the ridges north and east of town, and Washington\'s headquarters location at the Miller House. Discussion: if you were Washington, where would you position your army and why? Then compare student choices to Washington\'s actual dispositions.',
        },
        {
          name: 'Decision Point Analysis: Howe\'s Choices',
          duration: '25 minutes',
          description:
            'Using the Decision Point Analysis graphic organizer, students work in pairs to reconstruct Howe\'s situation after taking Chatterton Hill on October 28. What did he know about Washington\'s new position? What were his options? What were the risks of each? What did he choose, and why might he have made that choice? Students then share with the class and discuss whether they think he made the right call.',
        },
        {
          name: 'Voices from Both Sides',
          duration: '20 minutes',
          description:
            'Students read adapted excerpts from an American officer\'s account of Chatterton Hill and Howe\'s official report. Using a T-chart, they identify: what each source emphasizes, what each source omits, and what questions each source leaves unanswered. Class discussion: what would you need to know to fully understand what happened on Chatterton Hill?',
        },
        {
          name: 'Civilian Perspective: Living Between Armies',
          duration: '20 minutes',
          description:
            'Brief reading on Westchester County\'s divided loyalties, followed by a structured writing exercise: students write a journal entry from the perspective of a Westchester farmer in October 1776, describing what they see and what they fear as Washington\'s army passes through and the British follow. Students are encouraged to choose a political position for their farmer — Patriot, Loyalist, or neutral — and explain how that position shapes what they observe.',
        },
      ],
      assessment:
        'Formative: Decision Point Analysis graphic organizers, participation in discussion. Summative: a one-page written response to the question "Was Howe right not to pursue Washington after White Plains?" Students must take a position and support it with at least two specific pieces of evidence from the lesson.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author\'s point of view or purpose',
        'CCSS.ELA-LITERACY.WHST.6-8.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.4.6-8: Analyze multiple factors that influenced the perspectives of people during different historical eras',
        'D2.His.14.6-8: Explain multiple causes and effects of events and developments in the past',
        'D2.Geo.2.6-8: Use maps, satellite images, and other representations to explain relationships between locations and their environmental characteristics',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-ny-white-plains' } },
    title: 'Retreat as Strategy: Washington\'s 1776 New York Campaign',
    gradeRange: '9-12',
    estimatedDuration: '2-3 class periods',
    summary:
      'This lesson uses the entire New York campaign of 1776 — from Long Island through Kip\'s Bay, Harlem Heights, Pell\'s Point, and White Plains to the retreat across New Jersey — as a case study in strategic decision-making under conditions of sustained failure. Students analyze whether Washington\'s retreats constituted a coherent strategy or were simply the best available response to a series of disasters. They examine the concept of "Fabian strategy" and evaluate how Washington used retreat, delay, and selective engagement to preserve an army that could not win pitched battles but could survive long enough to win the war. The lesson also examines the role of chance, weather, and Howe\'s choices in determining outcomes that could easily have gone the other way.',
    lessonData: {
      objectives: [
        'Students will analyze the New York campaign of 1776 as a sequence of connected strategic decisions',
        'Students will evaluate the concept of Fabian strategy and assess its applicability to Washington\'s 1776 campaign',
        'Students will assess the role of contingency — chance events, weather, and enemy decisions — in determining historical outcomes',
        'Students will construct an evidence-based argument about Washington\'s quality as a strategic commander in 1776',
      ],
      essentialQuestions: [
        'Was Washington\'s 1776 New York campaign a coherent strategy or a series of escapes? How would you know the difference?',
        'How much of the American survival in 1776 was Washington\'s skill, and how much was Howe\'s caution?',
        'What does the 1776 campaign tell us about the relationship between tactics and strategy — between winning individual battles and winning wars?',
      ],
      materials: [
        'Campaign map: Long Island to Trenton, August–December 1776',
        'Fabian strategy: brief secondary source introduction (Quintus Fabius Maximus and the Roman precedent)',
        'Washington\'s letter to Congress, September 25, 1776 (adapted)',
        'Howe\'s dispatches from the 1776 campaign (selected excerpts)',
        'Secondary source: historian perspectives on Washington as a strategic commander',
      ],
      activities: [
        {
          name: 'Campaign Overview: The Map as Argument',
          duration: '20 minutes',
          description:
            'Students examine the campaign map showing the full retreat sequence from Long Island to the Delaware. Working in pairs, they trace the army\'s route and annotate the map with: decision points (where Washington chose to stop and fight), outcomes (wins, losses, escapes), and contingent events (the fog at Brooklyn, the rainstorm at White Plains, Howe\'s decisions not to pursue). Discussion: looking at the whole map, does the pattern look like a strategy or a series of accidents?',
        },
        {
          name: 'Fabian Strategy: Theory and Application',
          duration: '25 minutes',
          description:
            'Students read the brief secondary source on Quintus Fabius Maximus and the Fabian strategy concept. Then, in small groups, they assess: does the 1776 campaign fit the Fabian model? What evidence supports the argument that Washington was deliberately using retreat as a tool? What evidence suggests he was simply making the best of bad situations? Groups share their assessment and the class compares interpretations.',
        },
        {
          name: 'The Counterfactual: What If Howe Had Pursued?',
          duration: '20 minutes',
          description:
            'Structured exercise: students identify three moments in the 1776 campaign where a different British decision might have destroyed or captured the Continental Army (Brooklyn fog, Kip\'s Bay restraint, White Plains non-pursuit). For each moment, they assess: what would have had to change for the British to exploit the opportunity? What were the obstacles to a more aggressive British approach? What does this tell us about the role of chance in historical outcomes?',
        },
        {
          name: 'Evaluating Washington: Skill or Luck?',
          duration: '20 minutes',
          description:
            'Using the campaign evidence assembled across the lesson, students write a 10-minute structured response to the question: "To what extent was Washington\'s survival in 1776 a product of his strategic skill versus factors outside his control?" Students must cite specific events and explain their significance. Responses are shared in pairs before a brief class discussion.',
        },
      ],
      assessment:
        'Summative essay (1000-1200 words): "Was Washington\'s 1776 New York campaign a coherent strategy or a series of narrow escapes?" Students must develop a sustained argument, cite specific evidence from at least four events in the campaign, engage with the counterfactual (what might have happened differently), and address the role of Howe\'s decisions in shaping outcomes.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in several primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
        'CCSS.ELA-LITERACY.WHST.9-10.9: Draw evidence from informational texts to support analysis, reflection, and research',
      ],
      c3Framework: [
        'D2.His.2.9-12: Analyze change and continuity in historical eras',
        'D2.His.3.9-12: Use questions generated about individuals and groups to assess how the significance of their actions changes over time',
        'D2.His.15.9-12: Evaluate the relative influence of various causes of events and developments in the past',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// WHITE PLAINS — ADDITIONAL LINKS
// ============================================================================

export const whitePlainsAdditionalLinks: Array<{
  toTownId: string;
  linkType: 'SHARED_EVENT' | 'SHARED_PERSON' | 'GEOGRAPHIC_PROXIMITY';
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-ny-harlem-heights',
    linkType: 'SHARED_EVENT',
    reason:
      'White Plains was the immediate destination of Washington\'s retreat from Harlem Heights. The two battles are sequential events in the same campaign: the army that fought at Harlem Heights in September was the same army that fought at White Plains in October.',
    weight: 100,
  },
  {
    toTownId: 'us-nj-morristown',
    linkType: 'SHARED_PERSON',
    reason:
      'Washington commanded at both White Plains and Morristown. The New Jersey retreat that followed White Plains ended at the Delaware; the same army later wintered at Morristown. Many officers who fought at White Plains were present at both Morristown encampments.',
    weight: 80,
  },
  {
    toTownId: 'us-ny-new-york-city',
    linkType: 'SHARED_EVENT',
    reason:
      'The British occupied New York City immediately before the White Plains campaign. The campaign was a direct consequence of the fall of New York; Howe moved from his New York base to pursue Washington to White Plains.',
    weight: 85,
  },
  {
    toTownId: 'us-ny-stony-point',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason:
      'Stony Point on the Hudson River is in the same general theater as the White Plains campaign. The Hudson River crossing that Washington made after White Plains ran through this part of the river; Stony Point later became significant in the 1779 campaign.',
    weight: 50,
  },
];
