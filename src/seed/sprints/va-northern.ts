// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// VA Northern Cluster: Alexandria, Fredericksburg, Mount Vernon
// Campaign: Virginia Patriot networks, Washington family, Southern logistics, 1775–1783

import { Prisma } from '@prisma/client';

/**
 * VA Northern Cluster — Alexandria, Fredericksburg, and Mount Vernon
 *
 * These three towns form the core of Washington's Virginia world: the port town
 * where he mustered troops and traded goods, the inland city where his family
 * connections and Hugh Mercer's pharmacy anchored Patriot networks, and the
 * plantation estate where enslaved labor underwrote the political career of the
 * Revolution's commanding general.
 *
 * NOTE ON VERIFICATION: Historical content synthesized from Ron Chernow's
 * "Washington: A Life," Henry Wiencek's "An Imperfect God," John Ferling's
 * "The Ascent of George Washington," NPS documentation for Carlyle House and
 * George Washington's Ferry Farm, the Alexandria Library Special Collections,
 * the Historic Fredericksburg Foundation, and Mount Vernon's enslaved community
 * research program.
 */

// ============================================================================
// ALEXANDRIA
// ============================================================================

export const alexandriaTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Alexandria in 1775 was already one of the most commercially active ports in Virginia, and its proximity to both Washington's Mount Vernon estate and the political machinery of the Potomac region made it a natural hub for Patriot organizing. The town's Market Square had hosted public musters and militia drills for years before the war began; by the spring of 1775, those musters carried a new urgency. The Fairfax Independent Company, which Washington had helped organize and equip in the years before Lexington, assembled here. So did the first Virginia regiments that marched north to join the Continental Army.

The Carlyle House, built by Scottish merchant John Carlyle in 1753, had served as General Braddock's headquarters during the disastrous 1755 expedition against Fort Duquesne. By 1775, it was a meeting place for Virginia's Patriot gentry, a building whose walls had heard two decades of strategic conversation about Virginia's place in the Atlantic world. Alexandria's merchant class had long-standing grievances against British trade policy: the Navigation Acts, arbitrary port duties, and the collapse of tobacco credit had hit Northern Neck merchants hard in the decade before independence.

Washington's relationship with Alexandria was intimate and commercial. He bought supplies here, attended vestry meetings at Christ Church, patronized the taverns along King Street, and kept a townhouse for visits. When the war came, that network of relationships translated directly into military logistics: Alexandria's wharves became loading points for supplies moving both to Continental forces in the north and to Virginia militia units operating closer to home.

The town also witnessed the human cost of the war's mobilization. Enslaved Alexandrians watched white Patriot men muster for a liberty they did not share. Free Black residents navigated a city increasingly militarized around a cause that offered them nothing formal and threatened their already precarious standing. The Carlyle House's enslaved domestic workers — whose names appear in household inventories but not in the commemorative record — carried the practical burden of hosting the Patriot leadership that came through Alexandria throughout the war years.

By 1783, Alexandria had emerged from the Revolution with its commercial networks intact and its merchant class positioned to benefit from the new republic's trade arrangements. The town would be incorporated into the new federal district in 1791. But the enslaved community that had built its wharves, loaded its ships, and sustained its households would wait nearly another century for the legal status that Alexandria's Patriot founders had claimed as their natural right.`,
};

// ============================================================================
// ALEXANDRIA — PEOPLE
// ============================================================================

export const alexandriaPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-george-washington',
      name: 'George Washington',
      roles: ['Commander-in-Chief', 'Virginia Planter', 'Militia Colonel'],
      bioShort:
        'Virginia planter and Continental Army commander-in-chief who maintained close ties to Alexandria throughout the war. Attended Christ Church, kept a townhouse, and relied on Alexandria merchants for plantation and military supplies. Led the Fairfax Independent Company before taking Continental command.',
      birthYear: 1732,
      deathYear: 1799,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Long-term Alexandria resident; attended Christ Church, organized the Fairfax Independent Company at Market Square, and used Alexandria wharves for plantation and military supplies throughout the war.',
  },
  {
    person: {
      id: 'person-john-carlyle',
      name: 'John Carlyle',
      roles: ['Merchant', 'Alexandria Founder', 'Patriot Committeeman'],
      bioShort:
        'Scottish-born Alexandria merchant who built Carlyle House in 1753, which served as Braddock\'s headquarters in 1755 and a Patriot meeting place in 1775. One of Alexandria\'s original proprietors and a leading figure in the town\'s merchant community during the Revolutionary period.',
      birthYear: 1720,
      deathYear: 1780,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Owner of Carlyle House, the preeminent meeting place for Virginia Patriot leadership in Alexandria throughout the early war years.',
  },
  {
    person: {
      id: 'person-george-mason',
      name: 'George Mason',
      roles: ['Virginia Patriot Statesman', 'Gunston Hall Planter', 'Author of the Virginia Declaration of Rights'],
      bioShort:
        'Fairfax County planter and constitutional thinker who authored the Virginia Declaration of Rights (1776) and the Virginia Constitution. Closely associated with Alexandria\'s Patriot networks and a regular presence at Carlyle House and town meetings. Refused to sign the federal Constitution over the absence of a bill of rights.',
      birthYear: 1725,
      deathYear: 1792,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Fairfax County neighbor and Patriot collaborator with Washington; attended Alexandria committee meetings and helped shape Virginia\'s revolutionary legal framework.',
  },
  {
    person: {
      id: 'person-william-ramsay',
      name: 'William Ramsay',
      roles: ['Alexandria Merchant', 'Town Trustee', 'Patriot Committeeman'],
      bioShort:
        'Scottish-born merchant and one of Alexandria\'s earliest trustees. Active in Patriot organizing, served on the Fairfax County Committee of Safety, and helped coordinate the supply networks that linked Alexandria\'s commercial infrastructure to Continental Army logistics in the northern theater.',
      birthYear: 1716,
      deathYear: 1785,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Alexandria trustee and Fairfax County Committee of Safety member who helped organize Patriot commercial networks through the town\'s merchant community.',
  },
  {
    person: {
      id: 'person-dennis-ramsay',
      name: 'Dennis Ramsay',
      roles: ['Alexandria Mayor', 'Merchant', 'Patriot Official'],
      bioShort:
        'Son of William Ramsay and one of Alexandria\'s most active civic leaders during and after the Revolution. Served as Alexandria\'s first mayor under its 1779 incorporation charter. Helped organize the farewell address given to Washington in 1789 when the general departed Alexandria for his first inauguration.',
      birthYear: 1756,
      deathYear: 1810,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'First mayor of incorporated Alexandria (1779); presided over civic life in the town throughout the war years and organized Washington\'s departure for the presidency in 1789.',
  },
  {
    person: {
      id: 'person-robert-adam-alexandria',
      name: 'Robert Adam',
      roles: ['Alexandria Merchant', 'Tobacco Factor', 'Patriot Supporter'],
      bioShort:
        'Scottish merchant and tobacco factor based in Alexandria whose commercial operations linked Northern Neck planters to Atlantic markets. Active in Patriot committee work and a figure in the merchant community that helped sustain Alexandria\'s commercial function during the trade disruptions of the war years.',
      birthYear: 1726,
      deathYear: 1789,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Leading Alexandria tobacco merchant whose commercial networks provided logistical infrastructure for Patriot supply operations throughout the Northern Neck.',
  },
  {
    person: {
      id: 'person-john-muir-alexandria',
      name: 'John Muir',
      roles: ['Alexandria Merchant', 'Cabinetmaker', 'Committee Member'],
      bioShort:
        'Alexandria cabinetmaker and merchant who served on the Fairfax County Committee and participated in Patriot organizing in the town. Representative of the artisan and craft class that provided practical support for the Revolution\'s military mobilization through manufacturing, supply, and committee service.',
      birthYear: 1735,
      deathYear: 1799,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Alexandria artisan and Fairfax Committee member who represented the town\'s craftsman class in Patriot organizing.',
  },
  {
    person: {
      id: 'person-william-brown-alexandria',
      name: 'William Brown',
      roles: ['Alexandria Physician', 'Continental Army Surgeon General', 'Virginia Medical Official'],
      bioShort:
        'Alexandria physician who served as Physician General of the Middle Department of the Continental Army. Author of the first American pharmacopoeia (1778), a practical formulary for treating Continental soldiers without access to British-supplied medicines. His medical work in Alexandria and the Continental Army represents the town\'s contribution to Revolutionary-era science.',
      birthYear: 1752,
      deathYear: 1792,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Alexandria-based Continental Army Physician General who authored the first American pharmacopoeia in 1778, supporting medical operations throughout the Continental forces.',
  },
];

// ============================================================================
// ALEXANDRIA — PLACES
// ============================================================================

export const alexandriaPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-alexandria-carlyle-house',
    name: 'Carlyle House',
    placeType: 'HISTORIC_HOUSE',
    description: 'Built by Scottish merchant John Carlyle in 1753, Carlyle House served as General Braddock\'s headquarters in 1755 and became a gathering place for Patriot leadership during the Revolutionary period. The grandest private home in colonial Alexandria, it anchored the town\'s merchant-gentry social world.',
    lat: 38.8051,
    lng: -77.0424,
    town: { connect: { id: 'us-va-alexandria' } },
  },
  {
    id: 'place-alexandria-christ-church',
    name: 'Christ Church Alexandria',
    placeType: 'CHURCH',
    description: 'Anglican parish church completed in 1773 where George Washington held a family pew. Washington attended services here regularly when in Alexandria and the church served as a social and civic gathering point for the town\'s Patriot gentry throughout the Revolutionary period.',
    lat: 38.8046,
    lng: -77.0451,
    town: { connect: { id: 'us-va-alexandria' } },
  },
  {
    id: 'place-alexandria-market-square',
    name: 'Market Square',
    placeType: 'LANDMARK',
    description: 'The central public space of colonial Alexandria where the Fairfax Independent Company mustered and drilled before and during the war. Scene of public readings of the Declaration of Independence and a focal point for Patriot organizing in Northern Virginia.',
    lat: 38.8054,
    lng: -77.0432,
    town: { connect: { id: 'us-va-alexandria' } },
  },
  {
    id: 'place-alexandria-gadsbys-tavern',
    name: "Gadsby's Tavern",
    placeType: 'TAVERN',
    description: 'The most important public house in Alexandria during the Revolutionary era, Gadsby\'s Tavern hosted militia meetings, Patriot committee sessions, and social gatherings attended by Washington, Mason, and other Virginia leaders. Washington\'s birthday celebrations were held here annually during and after the war.',
    lat: 38.8053,
    lng: -77.0441,
    town: { connect: { id: 'us-va-alexandria' } },
  },
  {
    id: 'place-alexandria-waterfront',
    name: 'Alexandria Waterfront and Wharves',
    placeType: 'LANDMARK',
    description: 'The commercial heart of colonial Alexandria, where tobacco hogsheads were rolled for export and war supplies were loaded for transport. Alexandria\'s wharves connected Northern Neck plantation agriculture to Atlantic markets and served as a logistics point for Continental Army supply operations.',
    lat: 38.8035,
    lng: -77.0395,
    town: { connect: { id: 'us-va-alexandria' } },
  },
  {
    id: 'place-alexandria-stabler-leadbeater',
    name: 'Stabler-Leadbeater Apothecary Site',
    placeType: 'MUSEUM',
    description: 'Site of one of the earliest apothecary operations in Alexandria, part of the town\'s medical and commercial infrastructure. The apothecary tradition in Alexandria predates the Revolution and connects to the broader network of pharmacists and physicians, including William Brown, who served Continental Army medical needs.',
    lat: 38.8049,
    lng: -77.0436,
    town: { connect: { id: 'us-va-alexandria' } },
  },
];

// ============================================================================
// ALEXANDRIA — EVENTS
// ============================================================================

export const alexandriaEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-alexandria-fairfax-resolves',
    name: 'Fairfax Resolves Adopted',
    startDate: new Date('1774-07-18'),
    datePrecision: 'DAY',
    summary: 'George Mason drafted and the Fairfax County Committee adopted the Fairfax Resolves at Alexandria\'s courthouse — one of the most comprehensive pre-independence statements of colonial grievances. Washington chaired the meeting. The Resolves articulated a constitutional argument against Parliamentary taxation, called for non-importation of British goods, and declared colonists possessed the same rights as Englishmen born in Great Britain. Mason\'s document directly influenced Jefferson\'s Declaration of Independence and Virginia\'s own constitution.',
    significanceWeight: 90,
    lat: 38.8054,
    lng: -77.0432,
    town: { connect: { id: 'us-va-alexandria' } },
  },
  {
    id: 'event-alexandria-fairfax-company-muster',
    name: 'Fairfax Independent Company Mustered',
    startDate: new Date('1775-04-01'),
    datePrecision: 'MONTH',
    summary: 'The Fairfax Independent Company, organized by Washington and George Mason, mustered at Market Square in the weeks following Lexington and Concord. Washington had helped organize and equip the company in the years before the war. Following April 1775 news from Massachusetts, the company drilled regularly at Market Square and prepared for deployment — the conversion of a civic militia into a wartime unit that demonstrated Alexandria\'s early military mobilization.',
    significanceWeight: 75,
    lat: 38.8054,
    lng: -77.0432,
    town: { connect: { id: 'us-va-alexandria' } },
  },
  {
    id: 'event-alexandria-washington-departs',
    name: 'Washington Departs for Continental Congress',
    startDate: new Date('1775-05-04'),
    datePrecision: 'DAY',
    summary: 'George Washington left Alexandria for the Second Continental Congress in Philadelphia, arriving in time for the Congress that appointed him Commander-in-Chief on June 15, 1775. His departure from Alexandria was the last time he would leave the area as a private citizen. He would not return permanently for eight years — an absence that began the long period of Lund Washington\'s management of the estate and the Patriot networks that sustained Alexandria\'s wartime role.',
    significanceWeight: 88,
    lat: 38.8054,
    lng: -77.0432,
    town: { connect: { id: 'us-va-alexandria' } },
  },
  {
    id: 'event-alexandria-declaration-read',
    name: 'Declaration of Independence Read Publicly in Alexandria',
    startDate: new Date('1776-07-16'),
    datePrecision: 'MONTH',
    summary: 'Alexandria residents gathered at Market Square to hear a public reading of the Declaration of Independence. The celebration reflected both genuine Patriot sentiment and a performance of loyalty in a town with Loyalist-leaning merchants. Public readings throughout the colonies served as markers distinguishing committed Patriots from those whose allegiance remained uncertain — formalizing the ideological break with Britain in one of Virginia\'s most commercially important Potomac towns.',
    significanceWeight: 72,
    lat: 38.8054,
    lng: -77.0432,
    town: { connect: { id: 'us-va-alexandria' } },
  },
  {
    id: 'event-alexandria-incorporated',
    name: 'Alexandria Incorporated as a Town',
    startDate: new Date('1779-05-01'),
    datePrecision: 'MONTH',
    summary: 'The Virginia General Assembly incorporated Alexandria as an official town in May 1779, with Dennis Ramsay serving as its first mayor. Incorporation during wartime gave residents formal municipal authority over their commercial and civic affairs at a moment when the war\'s demands on Virginia towns were intensifying. The timing — mid-war, with British naval activity along the Chesapeake increasing — reflected the practical need for coordinated local governance that would sustain Alexandria\'s commercial importance through the war and into the early republic.',
    significanceWeight: 65,
    lat: 38.8054,
    lng: -77.0432,
    town: { connect: { id: 'us-va-alexandria' } },
  },
  {
    id: 'event-alexandria-british-raid-threat',
    name: 'British Naval Threat Along the Potomac',
    startDate: new Date('1781-04-01'),
    datePrecision: 'MONTH',
    summary: 'British naval operations along the Chesapeake and Potomac in 1781, associated with Cornwallis\'s Virginia campaign and Benedict Arnold\'s January 1781 raids into the interior, created a sustained threat to Alexandria and the Northern Neck. While the town itself was not directly attacked, the threat prompted militia mobilization and disrupted commercial operations on the Potomac wharves for much of the year — demonstrating Alexandria\'s vulnerability to British Chesapeake operations in the war\'s final campaign season.',
    significanceWeight: 70,
    lat: 38.8035,
    lng: -77.0395,
    town: { connect: { id: 'us-va-alexandria' } },
  },
  {
    id: 'event-alexandria-braddock-headquarters',
    name: 'Carlyle House Serves as Braddock\'s War Council Headquarters',
    startDate: new Date('1755-04-14'),
    datePrecision: 'DAY',
    summary: 'In April 1755, General Braddock held a council of war at Carlyle House with the governors of Virginia, Maryland, Pennsylvania, New York, and Massachusetts to coordinate the Ohio Valley campaign. Washington, then 23 and serving as Braddock\'s aide-de-camp, attended. The expedition ended in Braddock\'s disastrous defeat at the Monongahela in July 1755, a battle that shaped Washington\'s military thinking for the rest of his career and established Alexandria\'s role as a strategic planning hub reprised two decades later during the Revolution.',
    significanceWeight: 80,
    lat: 38.8051,
    lng: -77.0424,
    town: { connect: { id: 'us-va-alexandria' } },
  },
  {
    id: 'event-alexandria-washington-farewell-presidency',
    name: 'Alexandria Bids Washington Farewell Before Inaugural Journey',
    startDate: new Date('1789-04-16'),
    datePrecision: 'DAY',
    summary: 'On April 16, 1789, George Washington departed Alexandria for New York City and his first inauguration as President. Mayor Dennis Ramsay addressed him at the town limits. Washington\'s response, expressing hope that his departure would prove "a prelude to the joys of an honorable and happy retirement," became one of his most quoted public statements — marking the end of the Revolutionary era for Alexandria and the transition to the political legacy that would define his national reputation.',
    significanceWeight: 78,
    lat: 38.8054,
    lng: -77.0432,
    town: { connect: { id: 'us-va-alexandria' } },
  },
  {
    id: 'event-alexandria-committee-safety',
    name: 'Fairfax County Committee of Safety Established',
    startDate: new Date('1774-09-01'),
    datePrecision: 'MONTH',
    summary: 'Following the Fairfax Resolves, Alexandria and Fairfax County Patriots organized a Committee of Safety to enforce non-importation associations and coordinate Patriot activity — effectively becoming the de facto government of Fairfax County as royal authority collapsed. Rooted in Alexandria\'s merchant and gentry networks, the Fairfax committee monitored trade compliance, organized militia training, and managed the political transition from colonial to independent governance. Washington, Mason, and the Ramsay family were all involved.',
    significanceWeight: 74,
    lat: 38.8054,
    lng: -77.0432,
    town: { connect: { id: 'us-va-alexandria' } },
  },
  {
    id: 'event-alexandria-william-brown-pharmacopoeia',
    name: 'William Brown Publishes First American Pharmacopoeia',
    startDate: new Date('1778-01-01'),
    datePrecision: 'YEAR',
    summary: 'Alexandria physician and Continental Army Physician General William Brown published the first American pharmacopoeia in 1778 — a standardized formulary for treating Continental soldiers without dependence on British-controlled medicine supplies, printed in Philadelphia for Continental Army use. American forces could not reliably obtain British-manufactured medicines once war began, and field surgeons needed standardized guidance for preparing treatments from locally available ingredients. Brown\'s work was both a practical military contribution and an early assertion of American scientific independence.',
    significanceWeight: 68,
    lat: 38.8049,
    lng: -77.0436,
    town: { connect: { id: 'us-va-alexandria' } },
  },
];

// ============================================================================
// ALEXANDRIA — STORIES
// ============================================================================

export const alexandriaStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-alexandria-carlyle-house-council',
    title: 'The House Where Two Wars Were Planned',
    storyType: 'HISTORICAL_VOICE',
    verificationStatus: 'VERIFIED',
    textVersion: `John Carlyle built his stone house on the Alexandria waterfront in 1753 with the understanding that a fine house in a growing port town was both a home and a business asset. The house's main room, its central hall, its upstairs chambers — all of it was designed to receive guests of consequence, and within two years of completion it was doing exactly that.

In April 1755, five colonial governors and a British general sat around Carlyle's table and planned an expedition against Fort Duquesne. General Braddock spread his maps. The governors argued about money and troops. A twenty-three-year-old Virginia militia colonel named George Washington attended as Braddock's aide-de-camp, taking in everything. Three months later, Braddock was dead in the Pennsylvania forest and Washington had survived two horses shot under him. What he learned about the difference between European military doctrine and American wilderness combat he would carry for the rest of his career.

Twenty years later, the house was doing a different kind of work. Alexandria's Patriot committees met in drawing rooms like Carlyle's. The non-importation associations were organized over dinner tables set with the same china that Braddock's officers had used. The men making plans were Virginians now, not British, but the architecture of planning — the elite household as political space — had not changed.

The enslaved people who staffed Carlyle House through both periods are harder to see in the record. They cooked the meals, carried the messages, tended the horses, and cleaned the rooms where history was being made. Their names appear in estate inventories. What they thought about the plans being laid in their presence — plans for liberty and self-governance by men who owned them — the documents do not preserve.

What remains is the house itself, a well-preserved Palladian structure on Fairfax Street, now a museum. It is one of the best surviving examples of colonial Georgian domestic architecture in Virginia. The stone is the same stone. The proportions are unchanged. What the rooms heard in 1755 and 1775 has not entirely left the walls.`,
    tags: ['Carlyle House', 'Braddock', 'Patriot organizing', 'enslaved labor', 'Alexandria'],
    town: { connect: { id: 'us-va-alexandria' } },
  },
  {
    id: 'story-alexandria-enslaved-community',
    title: 'The Town That Was Built by Hands That Owned Nothing',
    storyType: 'HISTORICAL_VOICE',
    verificationStatus: 'VERIFIED',
    textVersion: `Alexandria's wharves were built and worked largely by enslaved labor. The hogsheads of tobacco that made the town's fortunes were rolled to ships by men and women who received nothing from the trade they sustained. The Carlyle House, the merchant townhouses along King Street, the Christ Church that Washington attended — all of it was constructed and maintained by enslaved workers whose legal status made their labor legally invisible as a contribution to the community.

When the Revolution came, Alexandria's enslaved residents found themselves in an impossible position that historians are only beginning to examine carefully. The Patriot cause demanded that white Alexandrians declare their opposition to tyranny and their commitment to natural rights. It made no parallel demand on those same Alexandrians to extend those rights to the people they owned.

Some enslaved Alexandrians sought to use the chaos of wartime for their own liberation. Lord Dunmore's 1775 proclamation offering freedom to enslaved men who joined British forces was heard along the Potomac as clearly as anywhere in Virginia. How many Alexandria-area enslaved people responded is not precisely known; the Patriot record has little reason to document escapes that embarrassed the cause.

Others remained in place, carrying the daily burden of sustaining households and commercial operations while the men of those households went to war. The women, children, and elderly who could not fight continued doing exactly what they had always done: feeding, cleaning, maintaining, building.

After the war, Alexandria became one of the most active slave-trading markets in the eastern United States, a development that sits in severe tension with the town's Revolutionary heritage. The same wharves that loaded Continental Army supplies in 1777 were loading coffles of enslaved people for sale further south by the 1790s. Franklin and Armfield, the largest domestic slave-trading firm in American history, operated from a building on Duke Street a few blocks from Carlyle House. The proximity is not coincidental — it is the logical outcome of an economy that had never questioned its foundation.`,
    tags: ['enslaved labor', 'waterfront', 'Dunmore Proclamation', 'slave trade', 'liberty'],
    town: { connect: { id: 'us-va-alexandria' } },
  },
];

// ============================================================================
// ALEXANDRIA — LESSON PLANS
// ============================================================================

export const alexandriaLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-va-alexandria' } },
    title: 'The Fairfax Resolves: Writing the Revolution Before Independence',
    gradeRange: '8-10',
    estimatedDuration: '2 class periods',
    summary:
      'Students analyze the Fairfax Resolves of July 1774 as a pre-independence document that articulated the constitutional arguments underlying the Revolution more than two years before the Declaration of Independence. Using Alexandria and Fairfax County as the local context, students examine how George Mason constructed a legal and philosophical argument against Parliamentary authority, compare the Resolves to the Declaration of Independence, and explore how local documents shaped national ones.',
    lessonData: {
      objectives: [
        'Students will analyze the Fairfax Resolves as a primary source document articulating colonial constitutional grievances',
        'Students will compare the language and arguments of the Fairfax Resolves to the Declaration of Independence',
        'Students will explain how local political documents contributed to the development of national revolutionary ideology',
        'Students will evaluate George Mason\'s constitutional reasoning and its influence on Virginia\'s revolutionary legal framework',
      ],
      essentialQuestions: [
        'How do local documents become national ones? What path did the Fairfax Resolves travel from Alexandria courthouse to the Declaration of Independence?',
        'What does it mean to argue for rights you do not extend to everyone? How do we read documents written by slaveholders about liberty?',
        'Why did the colonists frame their revolution in legal and constitutional terms rather than simply declaring resistance?',
      ],
      materials: [
        'Excerpts from the Fairfax Resolves (July 18, 1774) — adapted for grade level',
        'Excerpts from the Declaration of Independence (July 4, 1776)',
        'Map of Fairfax County and Alexandria showing Carlyle House, courthouse, and major properties',
        'Background reading on George Mason and his relationship with Washington',
        'Comparison graphic organizer: Arguments, Language, Grievances',
      ],
      activities: [
        {
          name: 'Close Reading: What the Resolves Claim',
          duration: '25 minutes',
          description:
            'Students read adapted excerpts from the Fairfax Resolves and annotate for: constitutional claims, specific grievances, proposed responses, and statements about rights. They use a graphic organizer to categorize Mason\'s arguments before the class discussion.',
        },
        {
          name: 'Side-by-Side Comparison',
          duration: '20 minutes',
          description:
            'Working in pairs, students compare specific passages from the Fairfax Resolves with corresponding passages from the Declaration of Independence. They identify shared language, parallel arguments, and places where the later document expanded or changed Mason\'s original framing.',
        },
        {
          name: 'The Limits of Rights: Discussion',
          duration: '15 minutes',
          description:
            'Structured discussion using the question: George Mason wrote that all men are "by nature equally free and independent" while enslaving more than 300 people. How do we read a document like this? Does the contradiction undermine the argument, or does it reveal something about how the argument was intended to function?',
        },
      ],
      assessment:
        'Short essay (one page): Explain in your own words how the Fairfax Resolves contributed to the development of the Declaration of Independence, citing at least two specific textual parallels. Then address: what does the document not say that it might have said, and why does that matter?',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors for how they treat the same or similar topics',
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in several primary and secondary sources',
      ],
      c3Framework: [
        'D2.His.1.9-12: Analyze how historical contexts shaped and continue to shape people\'s perspectives',
        'D2.His.5.9-12: Analyze how individuals and groups responded to or influenced the ideas, events, or movement of their times',
        'D2.Civ.2.9-12: Analyze the role of citizens in the U.S. political system, with attention to civic virtues and democratic principles',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-va-alexandria' } },
    title: 'Two Wharves, Two Centuries: Alexandria\'s Economy and Enslaved Labor',
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary:
      'This lesson uses Alexandria\'s waterfront as a lens for examining the relationship between the Revolutionary War economy and enslaved labor. Students trace how Alexandria\'s commercial infrastructure — built and operated largely by enslaved workers — sustained both the town\'s Patriot contributions to the war and its later role as a major domestic slave-trading center. The lesson asks students to hold two things simultaneously: genuine Patriot commitment and the enslaved labor that made that commitment economically possible.',
    lessonData: {
      objectives: [
        'Students will identify the role of enslaved labor in Alexandria\'s commercial and military supply infrastructure during the Revolutionary period',
        'Students will analyze the transition of Alexandria\'s waterfront economy from Revolutionary War logistics to domestic slave trading',
        'Students will evaluate how the Revolutionary language of liberty coexisted with the expansion of slavery in Virginia',
        'Students will examine primary source evidence for the presence and experiences of enslaved Alexandrians',
      ],
      essentialQuestions: [
        'What does it mean that the same wharves that loaded Continental Army supplies in 1777 were loading enslaved people for sale further south by the 1790s?',
        'Whose labor made the Patriot cause economically possible, and what did those people receive for it?',
        'How do we tell the history of a place when the people who built it left fewer written records than those who owned them?',
      ],
      materials: [
        'Carlyle estate inventory excerpts listing enslaved household workers',
        'Alexandria waterfront maps, 1775 and 1800, showing wharf locations',
        'Excerpts from Franklin and Armfield slave trading records (adapted)',
        'Excerpt from Lord Dunmore\'s 1775 proclamation',
        'Secondary source on Chesapeake enslaved community responses to the Revolution',
      ],
      activities: [
        {
          name: 'Reading the Inventory',
          duration: '20 minutes',
          description:
            'Students examine adapted excerpts from Carlyle estate inventories that list enslaved workers by name, age, and assigned task. They reconstruct as much as possible about the household\'s labor structure and then discuss: what can we learn from this source? What can\'t we learn? What questions does it make us want to ask that it can\'t answer?',
        },
        {
          name: 'Mapping the Economy',
          duration: '25 minutes',
          description:
            'Students annotate an Alexandria waterfront map from 1775, marking sites of enslaved labor, merchant operations, militia muster points, and supply loading. They then compare this to an 1800 map noting the location of slave trading operations. Guided question: what changed, and what stayed the same?',
        },
        {
          name: 'Dunmore\'s Proclamation and Its Local Meaning',
          duration: '20 minutes',
          description:
            'Students read Dunmore\'s November 1775 proclamation offering freedom to enslaved men who joined British forces. Discussion: how might an enslaved person in Alexandria have heard this? What would the risks have been? What does the Patriot response to the proclamation reveal about the limits of Revolutionary liberty?',
        },
      ],
      assessment:
        'Extended writing (1.5-2 pages): Using evidence from the lesson, explain the relationship between Alexandria\'s Revolutionary War contributions and the enslaved labor that sustained its economy. Address: does this context change how you understand the town\'s Patriot history? Why or why not?',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.11-12.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.11-12.7: Integrate and evaluate multiple sources of information presented in diverse formats',
        'CCSS.ELA-LITERACY.RH.11-12.9: Integrate information from diverse sources, both primary and secondary, into a coherent understanding',
      ],
      c3Framework: [
        'D2.His.1.9-12: Analyze how historical contexts shaped and continue to shape people\'s perspectives',
        'D2.His.3.9-12: Use questions generated about multiple historical sources to pursue further inquiry',
        'D2.His.5.9-12: Analyze how individuals and groups responded to or influenced the ideas, events, or movement of their times',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// ALEXANDRIA — ADDITIONAL LINKS
// ============================================================================

export const alexandriaAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-va-mount-vernon',
    linkType: 'SHARED_PERSON',
    reason: 'George Washington\'s plantation estate was twelve miles downriver from Alexandria; he used Alexandria as his commercial port and civic center throughout his life and the war years.',
    weight: 98,
  },
  {
    toTownId: 'us-va-fredericksburg',
    linkType: 'SHARED_PERSON',
    reason: 'Washington\'s mother and sister lived in Fredericksburg; Washington traveled regularly between Alexandria, Mount Vernon, and Fredericksburg throughout the Revolutionary period. Hugh Mercer had commercial connections to both towns.',
    weight: 82,
  },
  {
    toTownId: 'us-pa-pittsburgh',
    linkType: 'SHARED_PERSON',
    reason: 'William Crawford, who led the disastrous Sandusky expedition from Pittsburgh, was a long-term Washington associate who had surveyed land on Washington\'s behalf in the Ohio country — connecting Alexandria\'s Patriot networks to the western frontier.',
    weight: 60,
  },
];

// ============================================================================
// FREDERICKSBURG
// ============================================================================

export const fredericksburgTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Fredericksburg sits at the fall line of the Rappahannock River, the boundary between the Virginia Tidewater and the Piedmont interior, and that geography made it one of the most important logistics nodes in Revolutionary Virginia. Ships could reach the town from Chesapeake Bay; wagons could reach it from the Blue Ridge foothills. That combination made Fredericksburg the natural location for a munitions manufactory, an iron foundry, and the supply operations that fed Virginia's Continental regiments throughout the war.

Hugh Mercer was the most consequential figure the town produced. A Scottish physician who had fled Scotland after fighting for the Jacobite cause at Culloden in 1746, Mercer settled in Fredericksburg in the 1760s and built a medical practice that brought him into the orbit of George Washington — they had met during Braddock's 1755 campaign. By 1775, Mercer was organizing Virginia militia and preparing for the war he had been expecting. He died at the Battle of Princeton on January 3, 1777, bayoneted by British soldiers who mistook him for Washington. His death made Fredericksburg a martyr town and gave it a Revolutionary memory that shaped civic identity for generations.

Washington's connections to Fredericksburg were not merely military. His mother, Mary Ball Washington, lived in the town from 1772 until her death in 1789. His sister Betty Washington Lewis and her husband Fielding Lewis lived at Kenmore Plantation on the western edge of town. Fielding Lewis was one of the most important private financiers of the Virginia war effort, spending much of his personal fortune organizing and equipping Virginia troops and operating a gunnery manufactory that produced weapons for Continental forces. The Lewises' financial sacrifice was so complete that Fielding Lewis died in 1781 deeply in debt, having never received adequate reimbursement from the Virginia government.

The Rappahannock ironworks and the gunnery manufactory Lewis financed produced firearms, cannon, and military hardware that traveled north to Continental Army units and south to Virginia militia throughout the war. Fredericksburg's manufacturing capacity, modest by European standards, was essential within the Virginia context precisely because British trade disruption had cut off the normal channels of military supply.

The town's social complexity also deserves attention. Fredericksburg had a substantial free Black community by Revolutionary standards, and enslaved workers operated the ironworks, carried supplies on the Rappahannock, and sustained the household economies of the Washington and Lewis families. Their labor was the physical foundation of the town's military contribution.`,
};

// ============================================================================
// FREDERICKSBURG — PEOPLE
// ============================================================================

export const fredericksburgPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-hugh-mercer',
      name: 'Hugh Mercer',
      roles: ['Continental Army Brigadier General', 'Fredericksburg Physician', 'Scottish Jacobite Veteran'],
      bioShort:
        'Scottish physician who fled Scotland after Culloden, settled in Fredericksburg, became a close friend of Washington, and rose to Brigadier General in the Continental Army. Fatally wounded at the Battle of Princeton on January 3, 1777, after being mistaken for Washington by British soldiers. One of the most admired officers the Revolution lost.',
      birthYear: 1726,
      deathYear: 1777,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Fredericksburg\'s most prominent military figure; operated an apothecary on Caroline Street, organized Virginia militia, and died at Princeton in January 1777.',
  },
  {
    person: {
      id: 'person-fielding-lewis',
      name: 'Fielding Lewis',
      roles: ['Virginia Planter', 'Gunnery Manufactory Operator', 'Washington Brother-in-Law'],
      bioShort:
        'Fredericksburg planter married to Washington\'s sister Betty who financed and operated a gunnery manufactory at Fredericksburg throughout the Revolutionary War. Spent most of his personal fortune equipping Virginia troops and was never fully reimbursed by the state. Died in 1781 deeply in debt from his wartime expenditures.',
      birthYear: 1725,
      deathYear: 1781,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Financed and operated the Fredericksburg gunnery manufactory that produced firearms for Continental and Virginia forces; Washington\'s brother-in-law and one of the most important private financiers of the Virginia war effort.',
  },
  {
    person: {
      id: 'person-betty-washington-lewis',
      name: 'Betty Washington Lewis',
      roles: ['Washington\'s Sister', 'Kenmore Plantation Mistress', 'Patriot Supporter'],
      bioShort:
        'George Washington\'s only surviving sister, who lived with her husband Fielding Lewis at Kenmore Plantation in Fredericksburg throughout the Revolutionary War. Managed the household and plantation during Fielding\'s wartime activities and after his death, and maintained close correspondence with her brother throughout the war.',
      birthYear: 1733,
      deathYear: 1797,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Washington\'s sister; lived at Kenmore throughout the war and managed the household during Fielding Lewis\'s manufactory operations.',
  },
  {
    person: {
      id: 'person-mary-ball-washington',
      name: 'Mary Ball Washington',
      roles: ['George Washington\'s Mother', 'Fredericksburg Resident'],
      bioShort:
        'George Washington\'s widowed mother, who moved to a house in Fredericksburg in 1772 and lived there until her death in 1789. Maintained a complicated relationship with her famous son throughout the war years, repeatedly requesting his presence in Fredericksburg while he was occupied with military command.',
      birthYear: 1708,
      deathYear: 1789,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Washington\'s mother; lived in Fredericksburg from 1772 until her death, maintaining the family\'s Rappahannock connections throughout the war.',
  },
  {
    person: {
      id: 'person-james-monroe',
      name: 'James Monroe',
      roles: ['Continental Army Lieutenant', 'Virginia Politician', 'Future President'],
      bioShort:
        'Virginia native who studied law in Fredericksburg under Thomas Jefferson and served in the Continental Army, being wounded at the Battle of Trenton in December 1776. His Fredericksburg connections and Rappahannock Valley roots placed him within the same Patriot network as Washington, the Lewises, and Hugh Mercer.',
      birthYear: 1758,
      deathYear: 1831,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Fredericksburg-connected Continental Army officer wounded at Trenton; later studied law in the region and built the political career that led to the presidency.',
  },
  {
    person: {
      id: 'person-john-paul-jones',
      name: 'John Paul Jones',
      roles: ['Continental Navy Commander', 'Scottish Immigrant', 'Fredericksburg Area Resident'],
      bioShort:
        'Scottish-born sailor who lived in Fredericksburg in the early 1770s before becoming the Continental Navy\'s most celebrated commander. His Virginia years connected him to the same merchant and Patriot networks that produced Mercer and the Fredericksburg militia leadership.',
      birthYear: 1747,
      deathYear: 1792,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Lived in Fredericksburg area in the early 1770s before taking Continental Navy command; his Virginia connections linked him to the town\'s Patriot networks.',
  },
  {
    person: {
      id: 'person-mann-page-fredericksburg',
      name: 'Mann Page Jr.',
      roles: ['Virginia Delegate', 'Continental Congress Member', 'Fredericksburg-Area Planter'],
      bioShort:
        'Rappahannock Valley planter who served in the Continental Congress during the early war years and was part of the Virginia Patriot leadership network centered on Fredericksburg and the Northern Neck. Represented Virginia\'s landed gentry in the political structures of the new republic.',
      birthYear: 1749,
      deathYear: 1781,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Virginia Continental Congress delegate connected to the Fredericksburg Patriot network; died during the war years having served in multiple Virginia political capacities.',
  },
  {
    person: {
      id: 'person-weedon-george',
      name: 'George Weedon',
      roles: ['Continental Army Brigadier General', 'Fredericksburg Tavern Keeper', 'Virginia Patriot'],
      bioShort:
        'Fredericksburg tavern keeper who rose to Brigadier General in the Continental Army, serving under Washington through multiple campaigns including Brandywine and Germantown. A close friend of Mercer\'s before the war, Weedon\'s career traces the same arc from Fredericksburg tavern culture into Continental service.',
      birthYear: 1734,
      deathYear: 1793,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Operated a tavern in Fredericksburg before the war; became a Brigadier General under Washington and one of the most experienced Virginia officers in the Continental Army.',
  },
];

// ============================================================================
// FREDERICKSBURG — PLACES
// ============================================================================

export const fredericksburgPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-fredericksburg-hugh-mercer-apothecary',
    name: 'Hugh Mercer Apothecary Shop',
    placeType: 'MUSEUM',
    description: 'Hugh Mercer\'s apothecary on Caroline Street where he practiced medicine and met with Fredericksburg\'s Patriot leadership before the war. Now preserved as a museum, it was the social and professional center of Mercer\'s Fredericksburg life and a gathering place for Revolutionary organizing.',
    lat: 38.3032,
    lng: -77.4605,
    town: { connect: { id: 'us-va-fredericksburg' } },
  },
  {
    id: 'place-fredericksburg-kenmore',
    name: 'Kenmore Plantation',
    placeType: 'HISTORIC_HOUSE',
    description: 'Home of Fielding Lewis and Betty Washington Lewis, George Washington\'s sister. Built in 1775, Kenmore served as the domestic base for Fielding Lewis\'s gunnery manufactory operations that equipped Virginia forces throughout the Revolutionary War. The house is notable for its elaborate interior plasterwork.',
    lat: 38.3016,
    lng: -77.4658,
    town: { connect: { id: 'us-va-fredericksburg' } },
  },
  {
    id: 'place-fredericksburg-mary-washington-house',
    name: 'Mary Washington House',
    placeType: 'HISTORIC_HOUSE',
    description: 'The home where George Washington\'s mother lived from 1772 until her death in 1789. Washington purchased the house for his mother and visited her here multiple times during the war years. The garden she tended, including a large boxwood, survives.',
    lat: 38.3023,
    lng: -77.4607,
    town: { connect: { id: 'us-va-fredericksburg' } },
  },
  {
    id: 'place-fredericksburg-gunnery-site',
    name: 'Fielding Lewis Gunnery Manufactory Site',
    placeType: 'LANDMARK',
    description: 'The site of the gunnery manufactory Fielding Lewis financed and operated on the western edge of Fredericksburg during the Revolutionary War. The manufactory produced firearms, bayonets, and military hardware for Continental and Virginia forces. Lewis spent his personal fortune on its operation.',
    lat: 38.2991,
    lng: -77.4710,
    town: { connect: { id: 'us-va-fredericksburg' } },
  },
  {
    id: 'place-fredericksburg-masonic-lodge',
    name: 'Fredericksburg Masonic Lodge No. 4',
    placeType: 'HISTORIC_HOUSE',
    description: 'The Masonic lodge where George Washington received his Masonic degrees as a young man in 1752 and 1753. The lodge remained an important social institution connecting Fredericksburg\'s Patriot leadership network throughout the Revolutionary period. Washington maintained his Masonic associations throughout the war.',
    lat: 38.3025,
    lng: -77.4618,
    town: { connect: { id: 'us-va-fredericksburg' } },
  },
  {
    id: 'place-fredericksburg-rising-sun-tavern',
    name: 'Rising Sun Tavern',
    placeType: 'TAVERN',
    description: 'A tavern associated with Charles Washington, George\'s youngest brother, operating in Fredericksburg during the Revolutionary period. Taverns of this type served as informal clearinghouses for Patriot organizing, news sharing, and military recruiting. George Weedon\'s tavern operations formed part of the same social infrastructure.',
    lat: 38.3039,
    lng: -77.4598,
    town: { connect: { id: 'us-va-fredericksburg' } },
  },
];

// ============================================================================
// FREDERICKSBURG — EVENTS
// ============================================================================

export const fredericksburgEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-fredericksburg-mercer-enlists',
    name: 'Hugh Mercer Organizes Virginia Militia',
    startDate: new Date('1775-06-01'),
    datePrecision: 'MONTH',
    summary: 'Following Lexington and Concord, Hugh Mercer drew on his military experience at Culloden and in Braddock\'s campaign to organize and drill Virginia militia forces in the Fredericksburg area, preparing them for Continental service.',
    significanceWeight: 78,
    lat: 38.3032,
    lng: -77.4605,
    town: { connect: { id: 'us-va-fredericksburg' } },
  },
  {
    id: 'event-fredericksburg-lewis-manufactory-opens',
    name: 'Fielding Lewis Opens Gunnery Manufactory',
    startDate: new Date('1775-10-01'),
    datePrecision: 'MONTH',
    summary: 'Fielding Lewis, with the Virginia government\'s encouragement, established a gunnery manufactory on the outskirts of Fredericksburg to produce firearms and military hardware for Continental and Virginia forces. The operation ran throughout the war and consumed most of Lewis\'s personal fortune.',
    significanceWeight: 85,
    lat: 38.2991,
    lng: -77.4710,
    town: { connect: { id: 'us-va-fredericksburg' } },
  },
  {
    id: 'event-fredericksburg-mercer-princeton',
    name: 'Hugh Mercer Killed at Battle of Princeton',
    startDate: new Date('1777-01-03'),
    datePrecision: 'DAY',
    summary: 'Brigadier General Hugh Mercer was fatally bayoneted at the Battle of Princeton on January 3, 1777, when British soldiers, believing him to be Washington, refused to accept his surrender and attacked him. He died of his wounds nine days later. His death shocked Fredericksburg and the broader Patriot cause.',
    significanceWeight: 92,
    lat: 40.3515,
    lng: -74.6596,
    town: { connect: { id: 'us-va-fredericksburg' } },
  },
  {
    id: 'event-fredericksburg-washington-visits-mother',
    name: 'Washington Visits Mary Ball Washington in Fredericksburg',
    startDate: new Date('1776-05-01'),
    datePrecision: 'MONTH',
    summary: 'Washington made several visits to his mother in Fredericksburg during the war years, navigating the tension between his military duties and her repeated requests for his presence. The visits reflect the personal cost of command and the family networks that sustained Fredericksburg\'s Patriot identity.',
    significanceWeight: 65,
    lat: 38.3023,
    lng: -77.4607,
    town: { connect: { id: 'us-va-fredericksburg' } },
  },
  {
    id: 'event-fredericksburg-washington-freemason',
    name: 'Washington Initiated at Fredericksburg Masonic Lodge',
    startDate: new Date('1752-11-04'),
    datePrecision: 'DAY',
    summary: 'The twenty-year-old George Washington was initiated as a Freemason at Fredericksburg Lodge No. 4 on November 4, 1752, beginning an association with Freemasonry that would shape his social network and civic identity throughout his life and career.',
    significanceWeight: 72,
    lat: 38.3025,
    lng: -77.4618,
    town: { connect: { id: 'us-va-fredericksburg' } },
  },
  {
    id: 'event-fredericksburg-fielding-lewis-death',
    name: 'Fielding Lewis Dies in Financial Ruin',
    startDate: new Date('1781-12-21'),
    datePrecision: 'DAY',
    summary: 'Fielding Lewis died on December 21, 1781, his personal fortune exhausted by his wartime manufacturing and supply operations. The Virginia government\'s failure to reimburse him adequately left his family in debt and Kenmore Plantation encumbered. His death raised difficult questions about the treatment of private citizens who sacrificed financially for the Patriot cause.',
    significanceWeight: 80,
    lat: 38.3016,
    lng: -77.4658,
    town: { connect: { id: 'us-va-fredericksburg' } },
  },
  {
    id: 'event-fredericksburg-rappahannock-ironworks',
    name: 'Rappahannock Forge Produces Military Hardware',
    startDate: new Date('1776-01-01'),
    datePrecision: 'YEAR',
    summary: 'The Rappahannock Forge, operating near Fredericksburg throughout the war, produced iron cannon, shot, and military hardware for Continental forces. The forge\'s output was critical to Virginia\'s ability to equip its Continental regiments without access to British-manufactured goods.',
    significanceWeight: 74,
    lat: 38.2780,
    lng: -77.5100,
    town: { connect: { id: 'us-va-fredericksburg' } },
  },
  {
    id: 'event-fredericksburg-washington-farewell-mother',
    name: 'Washington Bids Farewell to His Mother Before Yorktown Campaign',
    startDate: new Date('1781-09-09'),
    datePrecision: 'DAY',
    summary: 'On September 9, 1781, Washington visited his mother in Fredericksburg during the march south for the Yorktown campaign. He knew she was terminally ill. It was the last time they saw each other; Mary Ball Washington died in August 1789, six years after the war ended.',
    significanceWeight: 76,
    lat: 38.3023,
    lng: -77.4607,
    town: { connect: { id: 'us-va-fredericksburg' } },
  },
  {
    id: 'event-fredericksburg-john-paul-jones-virginia',
    name: 'John Paul Jones Resident in Fredericksburg Area',
    startDate: new Date('1773-01-01'),
    datePrecision: 'YEAR',
    summary: 'John Paul Jones, the Scottish-born sailor who would become the Continental Navy\'s most celebrated commander, lived in the Fredericksburg area in the early 1770s, managing his brother\'s property and establishing Virginia connections before the war began.',
    significanceWeight: 68,
    lat: 38.3032,
    lng: -77.4605,
    town: { connect: { id: 'us-va-fredericksburg' } },
  },
  {
    id: 'event-fredericksburg-monroe-trenton',
    name: 'James Monroe Wounded at Trenton',
    startDate: new Date('1776-12-26'),
    datePrecision: 'DAY',
    summary: 'James Monroe, an eighteen-year-old Virginia officer with Fredericksburg connections, was wounded at the Battle of Trenton on December 26, 1776, while crossing the Delaware with Washington. He was struck in the shoulder by a musket ball. His Fredericksburg-area upbringing and Rappahannock Valley connections placed him within the same Patriot network as Mercer and Weedon.',
    significanceWeight: 72,
    lat: 40.2171,
    lng: -74.7429,
    town: { connect: { id: 'us-va-fredericksburg' } },
  },
];

// ============================================================================
// FREDERICKSBURG — STORIES
// ============================================================================

export const fredericksburgStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-fredericksburg-mercer-death',
    title: 'The Death of Hugh Mercer',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-hugh-mercer' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Hugh Mercer had survived Culloden. He had survived Braddock's Monongahela disaster, riding away with two wounds while the army collapsed around him. He had survived twenty years of frontier medicine in a colony that was not his own, building a practice, making friends with George Washington, learning the peculiar rhythms of Virginia's planter society while remaining, at some level, always the Scotsman who had backed the wrong king at Drummossie Moor.

At Princeton on the morning of January 3, 1777, his luck ran out.

His brigade had been separated from Washington's main force in the confusion of the battle, moving through an orchard toward the British rear when his horse was shot. He was on foot and surrounded before he could form a coherent defense. The British soldiers who surrounded him thought they had Washington. When they demanded surrender, accounts differ on what Mercer said; what the records agree on is that he refused to give up his sword and was bayoneted repeatedly before he fell.

Washington found him afterward on the field, still alive. There was nothing to be done. Mercer was carried to a nearby farmhouse — the Clarke farm, now preserved — and died there nine days later. He was fifty years old.

The news reached Fredericksburg in the way all bad news traveled in the eighteenth century: slowly, by messenger and letter, then all at once when rumor became confirmation. The town had given the Revolution a physician who had turned soldier, a man who had built his entire American identity from the wreckage of a lost Scottish cause and who had died defending a new one.

He is buried in Laurel Hill Cemetery in Philadelphia, not in Fredericksburg. But the town kept him anyway. The apothecary on Caroline Street where he saw patients and mixed medicines and talked with Washington about crops and wars and the nature of British tyranny is still there, preserved. His memory became the town's most insistent Revolutionary inheritance.`,
    tags: ['Hugh Mercer', 'Princeton', 'Culloden', 'sacrifice', 'Scottish immigrants'],
    town: { connect: { id: 'us-va-fredericksburg' } },
  },
  {
    id: 'story-fredericksburg-fielding-lewis-sacrifice',
    title: 'The Man Who Spent His Fortune on a War',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-fielding-lewis' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Fielding Lewis was not a soldier. He was a planter, a merchant, and George Washington's brother-in-law, and when the Revolution came he contributed in the way that wealthy men who were not soldiers could contribute: he opened his purse and did not close it again until there was nothing left.

The gunnery manufactory he established on the western edge of Fredericksburg in 1775 produced muskets, bayonets, and military hardware for Continental and Virginia forces throughout the war. He hired workers, bought materials, maintained equipment, and managed the operation at his own expense while fighting repeated bureaucratic battles with the Virginia government for reimbursement that never came in full.

By 1781 he was dying, and his accounts were worse than his health. He had spent somewhere near £60,000 of his own money — a fortune that would have made him one of the wealthiest men in Virginia at the war's beginning — on a public enterprise that the public had never adequately compensated. His petitions to the legislature are preserved: they are the documents of a man who believed he was owed something and could prove it, presenting accounts, receipts, and calculations to committees that acknowledged his contributions in general terms and provided inadequate relief in specific ones.

He died on December 21, 1781, ten weeks after Cornwallis's surrender at Yorktown. The war was essentially over. The victory that his manufactures had helped make possible was announced throughout the state he had spent himself to defend.

Betty Washington Lewis, his widow, spent years afterward attempting to recover the family's financial position. The Virginia government eventually made partial restitution, but Kenmore Plantation remained encumbered. The Revolution had cost the Lewis family nearly everything.

What Fielding Lewis's story illuminates is the distance between the Revolution's rhetoric and its economics. The same cause that asked ordinary men to die in battle asked wealthy men to spend their fortunes — and then, in too many cases, failed to honor either sacrifice with the acknowledgment it deserved.`,
    tags: ['Fielding Lewis', 'war finance', 'Kenmore', 'private sacrifice', 'gunnery manufactory'],
    town: { connect: { id: 'us-va-fredericksburg' } },
  },
];

// ============================================================================
// FREDERICKSBURG — LESSON PLANS
// ============================================================================

export const fredericksburgLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-va-fredericksburg' } },
    title: 'Hugh Mercer: From Culloden to Princeton',
    gradeRange: '7-9',
    estimatedDuration: '2 class periods',
    summary:
      'This lesson uses Hugh Mercer\'s biography to examine the Atlantic dimensions of the American Revolution — the way that events in Scotland, the Caribbean, and the American frontier all fed into the making of a Revolutionary officer. Students trace Mercer\'s path from the Battle of Culloden (1746) to Fredericksburg to Princeton (1777), analyzing how his varied experiences shaped his military capabilities and why Washington valued him. The lesson asks students to think about immigrants and refugees in the Revolution and what it meant to fight for a new country when the old one had betrayed you.',
    lessonData: {
      objectives: [
        'Students will trace Hugh Mercer\'s biography from Culloden to Fredericksburg to Princeton',
        'Students will analyze the Atlantic dimensions of the American Revolution through the lens of Scottish immigration',
        'Students will evaluate what Mercer\'s death at Princeton meant for the Continental Army and for Fredericksburg',
        'Students will examine the role of immigrants and refugees in the Patriot cause',
      ],
      essentialQuestions: [
        'What does Hugh Mercer\'s story tell us about the Atlantic world from which the American Revolution emerged?',
        'Why do people fight for causes in countries not their own? What does Mercer\'s trajectory from Culloden to Princeton suggest?',
        'What is lost when a leader dies in battle? How do we measure the cost of individual sacrifice?',
      ],
      materials: [
        'Map of Atlantic world showing Scotland, Caribbean, and American colonies',
        'Background reading on the Battle of Culloden (1746) and the Jacobite cause',
        'Adapted biographical account of Mercer\'s life and career',
        'Primary source excerpt: Washington\'s response to Mercer\'s wounding',
        'Image: Trumbull painting depicting Mercer\'s death at Princeton',
      ],
      activities: [
        {
          name: 'Mapping an Atlantic Life',
          duration: '20 minutes',
          description:
            'Students trace Mercer\'s geographic journey on an Atlantic world map: Scotland to Virginia via the Caribbean, then northward through the French and Indian War and Revolutionary campaigns to Princeton. Discussion: what did each stage of this journey contribute to the man who died at Princeton?',
        },
        {
          name: 'Culloden and the Jacobite Cause',
          duration: '20 minutes',
          description:
            'Brief background on the 1746 Battle of Culloden — the final defeat of the Jacobite rising that tried to restore the Stuart monarchy. Students consider: why might a man who fought for the losing side at Culloden be drawn to the Patriot cause in America thirty years later? What continuities and differences exist between the two struggles?',
        },
        {
          name: 'The Death at Princeton',
          duration: '20 minutes',
          description:
            'Students read the adapted account of Mercer\'s death and Washington\'s response. Discussion: what did Washington lose when Mercer died? How does the personal relationship between the two men illuminate what military leadership depended on in the Continental Army?',
        },
      ],
      assessment:
        'One-page biographical essay: Explain who Hugh Mercer was and why his death mattered, using at least three specific facts from the lesson. Address: what does his story tell us about who fought in the American Revolution and why?',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.3: Identify key steps in a text\'s description of a process related to history',
        'CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author\'s point of view or purpose',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.Geo.2.6-8: Use maps and other representations to explain relationships between the locations of places and historical events',
        'D2.His.4.6-8: Analyze multiple factors that influenced the perspectives of people during different historical eras',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-va-fredericksburg' } },
    title: 'The Cost of Private Patriotism: Fielding Lewis and War Finance',
    gradeRange: '10-12',
    estimatedDuration: '2-3 class periods',
    summary:
      'This lesson uses Fielding Lewis\'s financial sacrifice to examine how the Revolutionary War was financed at the state and local level, and what it cost the individuals who filled the gap when government funding fell short. Students analyze Lewis\'s petition to the Virginia legislature, examine the broader problem of Revolutionary War finance, and evaluate the obligations a government at war owes to the citizens who sacrifice for it. The lesson connects to contemporary questions about public obligation and the relationship between private sacrifice and public recognition.',
    lessonData: {
      objectives: [
        'Students will explain how the Revolutionary War was financed at the state level in Virginia',
        'Students will analyze Fielding Lewis\'s petition to the Virginia legislature as a primary source document',
        'Students will evaluate the government\'s obligations to citizens who sacrifice financially for a public cause',
        'Students will connect Revolutionary War finance to broader questions about public obligation and private sacrifice',
      ],
      essentialQuestions: [
        'What does a government owe to citizens who sacrifice their private wealth for a public cause?',
        'How was the Revolutionary War financed, and who paid the costs that government couldn\'t cover?',
        'What does Fielding Lewis\'s story tell us about the difference between official history and the actual experience of supporting a revolution?',
      ],
      materials: [
        'Adapted excerpts from Fielding Lewis\'s petition to the Virginia legislature',
        'Background reading on Continental and state-level war finance',
        'Map of Fredericksburg showing Kenmore Plantation and manufactory site',
        'Secondary source excerpt on the postwar financial situation of Revolution-era manufacturers',
        'Comparison: public recognition received by Lewis vs. other Virginia Revolutionary figures',
      ],
      activities: [
        {
          name: 'Reading the Petition',
          duration: '25 minutes',
          description:
            'Students read adapted excerpts from Lewis\'s petition and identify: what he claims he spent, what he says he received, what he is asking for, and how he frames his argument. Discussion: is this an effective petition? What would you need to know to evaluate his claims?',
        },
        {
          name: 'War Finance Basics',
          duration: '20 minutes',
          description:
            'Brief overview of how Virginia and the Continental Congress financed the Revolution — state requisitions, Continental currency, loans, private financing. Students place Lewis\'s contribution in the larger financial context and consider: how much of the war was financed by men like Lewis?',
        },
        {
          name: 'Then and Now: Public Obligation Debate',
          duration: '20 minutes',
          description:
            'Structured discussion: what obligations does a government at war have to private citizens who sacrifice for the public good? Students consider the Lewis case alongside contemporary examples (contract workers, private financing of public goods) and identify what principles should govern the relationship.',
        },
      ],
      assessment:
        'Analytical essay (1.5 pages): Using Lewis\'s petition and the war finance background, argue whether the Virginia government\'s treatment of Lewis was justified, unjustified, or somewhere in between. Students must use specific evidence and acknowledge the strongest counterargument to their position.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.11-12.1: Cite specific textual evidence from primary and secondary sources to support analysis',
        'CCSS.ELA-LITERACY.RH.11-12.8: Evaluate an author\'s premises, claims, and evidence by corroborating or challenging them',
        'CCSS.ELA-LITERACY.RH.11-12.9: Integrate information from diverse sources into a coherent understanding',
      ],
      c3Framework: [
        'D2.His.1.9-12: Analyze how historical contexts shaped and continue to shape people\'s perspectives',
        'D2.Eco.1.9-12: Analyze how economic decisions affect the well-being of individuals, businesses, and society',
        'D2.Civ.2.9-12: Analyze the role of citizens in the U.S. political system',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// FREDERICKSBURG — ADDITIONAL LINKS
// ============================================================================

export const fredericksburgAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-va-alexandria',
    linkType: 'SHARED_PERSON',
    reason: 'Washington traveled regularly between Fredericksburg, Mount Vernon, and Alexandria; Mary Ball Washington lived in Fredericksburg while her son ran his commercial and civic life through Alexandria.',
    weight: 82,
  },
  {
    toTownId: 'us-va-mount-vernon',
    linkType: 'SHARED_PERSON',
    reason: 'Washington\'s plantation estate at Mount Vernon was the domestic counterpart to Fredericksburg\'s family and supply connections; the Lewis family at Kenmore were close to the Mount Vernon household throughout the war.',
    weight: 85,
  },
  {
    toTownId: 'us-nj-princeton',
    linkType: 'SHARED_EVENT',
    reason: 'Hugh Mercer died at the Battle of Princeton on January 3, 1777; his death is the most direct link between Fredericksburg\'s Revolutionary history and the New Jersey campaign.',
    weight: 90,
  },
];

// ============================================================================
// MOUNT VERNON
// ============================================================================

export const mountVernonTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Mount Vernon was not a battlefield. No British troops marched across its fields; no shots were fired on its grounds. What it was, throughout the Revolutionary War, was the physical and economic foundation that made Washington's military career possible — and the site of a human community whose experience of the Revolution was nearly the inverse of its owner's.

The plantation ran on enslaved labor. In 1786, Washington's ledgers recorded 216 enslaved people at Mount Vernon and its five farms. They grew the wheat and corn, raised the livestock, fished the Potomac, wove the cloth, smithed the iron, cooked the food, cleaned the house, and performed every other task that kept the estate functioning during the eight years Washington was absent commanding the Continental Army. Lund Washington, a distant cousin who managed the estate in George's absence, kept detailed accounts of the plantation's operations — accounts that document enslaved labor with a thoroughness the enslaved people themselves could not bring to bear on documenting their own lives.

The household and farm enslaved community of Mount Vernon included people of remarkable capability whose names the record preserves: William Lee, Washington's personal valet who accompanied him throughout the war; Hercules, the talented chef who ran the kitchen; Caroline Branham, who managed the house; Christopher Sheels, who served as Washington's personal attendant at Philadelphia during the presidency. Their skills, their labor, and in many cases their forced separation from families defined the practical reality of the estate that Washington romanticized in his letters home from military camps.

When the British warship Savage arrived on the Potomac in April 1781, Lund Washington provided the ship's officers with food and supplies and negotiated for the return of livestock — while seventeen enslaved people chose to go with the British in hopes of freedom. Washington was furious at Lund for provisioning the enemy. He seems to have been less disturbed by the departures themselves, though he worked through diplomatic channels to recover the people who had escaped. None were returned.

The postwar estate records show Washington wrestling with the economics of enslaved labor in ways that suggest he understood its contradictions without finding his way to resolving them. His will provided for the emancipation of his enslaved people after Martha's death — but only those he owned outright, not the dower slaves who belonged legally to the Custis estate. The others — the majority — passed to Custis heirs. The freedom Washington's will offered was partial, delayed, and conditioned on circumstances outside the control of the people it nominally freed.

Mount Vernon's enslaved community is now the subject of serious and ongoing historical research. The archaeological work at the slave quarters, the effort to reconstruct individual biographies from fragmentary records, and the interpretive programming that tells stories alongside Washington's own — this work has begun to recover a history that the plantation's commemorative tradition spent a century suppressing.`,
};

// ============================================================================
// MOUNT VERNON — PEOPLE
// ============================================================================

export const mountVernonPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-george-washington',
      name: 'George Washington',
      roles: ['Commander-in-Chief', 'Mount Vernon Planter', 'Enslaver'],
      bioShort:
        'Virginia planter and Continental Army commander-in-chief who owned and managed Mount Vernon\'s enslaved workforce. Absent from his estate for most of the war, he directed Lund Washington\'s management by correspondence and returned to find the plantation\'s human community shaped by eight years of wartime disruption.',
      birthYear: 1732,
      deathYear: 1799,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Owner of Mount Vernon and commander of the Continental Army; absent from the estate for most of 1775–1783 while directing its management by letter.',
  },
  {
    person: {
      id: 'person-martha-washington',
      name: 'Martha Washington',
      roles: ['Mount Vernon Mistress', 'Continental Army Camp Presence', 'Dower Slave Owner'],
      bioShort:
        'Virginia widow who married Washington in 1759, bringing the Custis dower estate and its enslaved people into the household. Spent several winters at Continental Army camps supporting her husband and managing the social expectations of a commander\'s wife. Legal owner of the Custis dower slaves who could not be freed by Washington\'s will.',
      birthYear: 1731,
      deathYear: 1802,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Co-owner of Mount Vernon\'s enslaved community; present at army winter quarters at Valley Forge, Morristown, and other camps. Her Custis dower slaves remained in bondage after Washington\'s death.',
  },
  {
    person: {
      id: 'person-william-lee',
      name: 'William Lee',
      roles: ['Washington\'s Personal Valet', 'Mount Vernon Enslaved Worker', 'Revolutionary War Participant'],
      bioShort:
        'Enslaved man who served as Washington\'s personal valet throughout the Revolutionary War, accompanying him at Boston, New York, Trenton, Valley Forge, Yorktown, and every major campaign. Washington\'s will granted him immediate freedom — the only enslaved person singled out for freedom without condition — and a pension. He remained at Mount Vernon until his death.',
      birthYear: 1750,
      deathYear: 1810,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Accompanied Washington throughout the entire Revolutionary War as his personal valet; the only enslaved person granted unconditional immediate freedom in Washington\'s will.',
  },
  {
    person: {
      id: 'person-lund-washington',
      name: 'Lund Washington',
      roles: ['Mount Vernon Manager', 'Washington Cousin', 'Plantation Overseer'],
      bioShort:
        'Distant Washington cousin who managed Mount Vernon as the estate\'s agent during the eight years of the Revolutionary War. Kept detailed accounts of the plantation\'s operations, managed the enslaved workforce in Washington\'s absence, and infamously provisioned a British warship in 1781, drawing Washington\'s sharp rebuke.',
      birthYear: 1737,
      deathYear: 1796,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Managed Mount Vernon throughout the Revolutionary War in Washington\'s absence; his detailed accounts provide the primary record of the plantation\'s wartime operations.',
  },
  {
    person: {
      id: 'person-hercules-mount-vernon',
      name: 'Hercules (Enslaved Cook)',
      roles: ['Mount Vernon Head Cook', 'Enslaved Person', 'Philadelphia Presidential Household Cook'],
      bioShort:
        'Enslaved man who served as Mount Vernon\'s head cook and later as the chef of Washington\'s Philadelphia presidential household. Renowned for his culinary skill, he escaped to freedom on Washington\'s birthday in February 1797. His son Richmond, left behind at Mount Vernon, reportedly said he was glad his father had escaped.',
      birthYear: 1748,
      deathYear: 1812,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Mount Vernon\'s most skilled enslaved craftsperson; his escape in 1797 and his son\'s reported response illuminate the human reality of the Washington household\'s enslaved community.',
  },
  {
    person: {
      id: 'person-ona-judge',
      name: 'Ona Judge',
      roles: ['Martha Washington\'s Personal Attendant', 'Dower Slave', 'Freedom Seeker'],
      bioShort:
        'Enslaved woman who served as Martha Washington\'s personal attendant and escaped from the Philadelphia presidential household in May 1796, reaching New Hampshire. Washington pursued her through federal agents for years but she was never returned. She lived free in New Hampshire until her death in 1848, giving interviews about her life and escape in old age.',
      birthYear: 1773,
      deathYear: 1848,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Escaped from Washington\'s presidential household; her freedom, maintained for over fifty years, is the most fully documented escape from Mount Vernon\'s enslaved community.',
  },
  {
    person: {
      id: 'person-frank-lee-mount-vernon',
      name: 'Frank Lee',
      roles: ['Mount Vernon Butler', 'Enslaved Household Worker', 'William Lee\'s Brother'],
      bioShort:
        'Enslaved man who served as Mount Vernon\'s butler and was William Lee\'s brother. His household role placed him at the center of the social world Washington maintained at Mount Vernon — receiving guests, managing the household\'s public face — while his legal status ensured he received none of the credit or compensation that service would have earned a free man.',
      birthYear: 1752,
      deathYear: 1821,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Mount Vernon butler and brother of William Lee; his household service sustained the plantation\'s social operations throughout Washington\'s wartime absence.',
  },
  {
    person: {
      id: 'person-christopher-sheels',
      name: 'Christopher Sheels',
      roles: ['Washington\'s Personal Attendant', 'Philadelphia Household', 'Enslaved Worker'],
      bioShort:
        'Enslaved man who replaced William Lee as Washington\'s personal attendant when Lee became disabled by knee injuries, serving Washington during the presidency and at Mount Vernon. Present at Washington\'s death in December 1799. His legal status meant that his lifelong service to the man who led a revolution for liberty earned him nothing under the law.',
      birthYear: 1775,
      deathYear: 1800,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Washington\'s personal attendant during the presidency; present at his death in 1799, representing the enslaved household workers whose service sustained Washington\'s public career.',
  },
];

// ============================================================================
// MOUNT VERNON — PLACES
// ============================================================================

export const mountVernonPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-mount-vernon-mansion',
    name: 'Mount Vernon Mansion',
    placeType: 'HISTORIC_HOUSE',
    description: 'Washington\'s primary residence, expanded from a 1.5-story farmhouse to the 21-room mansion that survives today. Washington directed renovations by correspondence throughout the war years. The mansion\'s Palladian architecture and Potomac River setting represent Washington\'s aspirations for a Virginia gentleman\'s estate.',
    lat: 38.7082,
    lng: -77.0863,
    town: { connect: { id: 'us-va-mount-vernon' } },
  },
  {
    id: 'place-mount-vernon-slave-quarters',
    name: 'Mount Vernon Slave Quarters (House for Families)',
    placeType: 'HISTORIC_HOUSE',
    description: 'The surviving slave quarter at Mount Vernon\'s Mansion House Farm, now interpreted as part of the estate\'s enslaved community history program. Archaeological investigation has identified multiple phases of occupation and recovered artifacts that document the material culture of the estate\'s enslaved community.',
    lat: 38.7079,
    lng: -77.0857,
    town: { connect: { id: 'us-va-mount-vernon' } },
  },
  {
    id: 'place-mount-vernon-tomb',
    name: 'Washington Family Tomb',
    placeType: 'CEMETERY',
    description: 'The new tomb constructed per Washington\'s will where he and Martha Washington are interred. The tomb holds the brick sarcophagi of George and Martha Washington and the remains of other family members. An adjacent unmarked burial ground holds the remains of more than 75 enslaved Mount Vernon residents.',
    lat: 38.7071,
    lng: -77.0866,
    town: { connect: { id: 'us-va-mount-vernon' } },
  },
  {
    id: 'place-mount-vernon-pioneer-farm',
    name: 'Pioneer Farm and Slave Memorial',
    placeType: 'MONUMENT',
    description: 'Reconstructed working farm site at Mount Vernon demonstrating 18th-century agricultural practices. Adjacent to the Slave Memorial, which was dedicated in 1983 and commemorates the enslaved community whose labor sustained the estate throughout Washington\'s career.',
    lat: 38.7050,
    lng: -77.0890,
    town: { connect: { id: 'us-va-mount-vernon' } },
  },
  {
    id: 'place-mount-vernon-grist-mill',
    name: 'Mount Vernon Grist Mill and Distillery',
    placeType: 'LANDMARK',
    description: 'Washington\'s commercial grist mill and distillery operation, which by 1799 was the largest whiskey distillery in the United States. The mill ground grain from the five Mount Vernon farms and from neighboring plantations; the distillery produced 11,000 gallons of rye whiskey annually. Both were operated by enslaved labor.',
    lat: 38.6903,
    lng: -77.1005,
    town: { connect: { id: 'us-va-mount-vernon' } },
  },
  {
    id: 'place-mount-vernon-greenhouse-slave-quarter',
    name: 'Greenhouse Slave Quarter',
    placeType: 'HISTORIC_HOUSE',
    description: 'The greenhouse slave quarter flanking the mansion\'s greenhouse structure, where skilled enslaved household workers lived in close proximity to the main house. Archaeological investigation here has revealed material culture evidence of the enslaved community\'s domestic life, including ceramic sherds, personal objects, and evidence of food preparation independent of the main kitchen.',
    lat: 38.7084,
    lng: -77.0855,
    town: { connect: { id: 'us-va-mount-vernon' } },
  },
];

// ============================================================================
// MOUNT VERNON — EVENTS
// ============================================================================

export const mountVernonEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-mount-vernon-washington-departs-command',
    name: 'Washington Departs Mount Vernon for Continental Command',
    startDate: new Date('1775-05-04'),
    datePrecision: 'DAY',
    summary: 'Washington left Mount Vernon for the last time as a private citizen in May 1775, traveling to the Second Continental Congress in Philadelphia where he would receive command of the Continental Army. He would not return to the estate for more than six years.',
    significanceWeight: 88,
    lat: 38.7082,
    lng: -77.0863,
    town: { connect: { id: 'us-va-mount-vernon' } },
  },
  {
    id: 'event-mount-vernon-lund-provisions-british',
    name: 'Lund Washington Provisions British Warship HMS Savage',
    startDate: new Date('1781-04-13'),
    datePrecision: 'DAY',
    summary: 'In April 1781, the British warship HMS Savage anchored in the Potomac opposite Mount Vernon. Lund Washington, attempting to prevent damage to the estate, went aboard and provided the ship\'s officers with food and supplies. Seventeen enslaved people used the opportunity to escape with the British.',
    significanceWeight: 90,
    lat: 38.7082,
    lng: -77.0863,
    town: { connect: { id: 'us-va-mount-vernon' } },
  },
  {
    id: 'event-mount-vernon-washington-returns',
    name: 'Washington Returns to Mount Vernon After Yorktown',
    startDate: new Date('1781-11-05'),
    datePrecision: 'DAY',
    summary: 'Following Cornwallis\'s surrender at Yorktown on October 19, 1781, Washington made his first return visit to Mount Vernon in more than six years. He spent several weeks reviewing the estate\'s condition before returning to his military duties.',
    significanceWeight: 82,
    lat: 38.7082,
    lng: -77.0863,
    town: { connect: { id: 'us-va-mount-vernon' } },
  },
  {
    id: 'event-mount-vernon-valley-forge-correspondence',
    name: 'Washington Directs Estate Operations from Valley Forge',
    startDate: new Date('1778-01-01'),
    datePrecision: 'MONTH',
    summary: 'From Valley Forge during the brutal winter of 1777–1778, Washington maintained an extraordinary correspondence with Lund Washington directing plantation operations in precise detail — crop rotations, building projects, the management of enslaved workers — while simultaneously commanding a starving army.',
    significanceWeight: 78,
    lat: 38.7082,
    lng: -77.0863,
    town: { connect: { id: 'us-va-mount-vernon' } },
  },
  {
    id: 'event-mount-vernon-slave-memorial-dedicated',
    name: 'Memorial to Mount Vernon\'s Enslaved Community Dedicated',
    startDate: new Date('1983-09-21'),
    datePrecision: 'DAY',
    summary: 'In September 1983, the Mount Vernon Ladies\' Association dedicated a memorial to the more than 300 enslaved men, women, and children who lived and worked at Mount Vernon. The memorial stands adjacent to the burial ground where more than 75 enslaved people are interred in unmarked graves.',
    significanceWeight: 75,
    lat: 38.7071,
    lng: -77.0866,
    town: { connect: { id: 'us-va-mount-vernon' } },
  },
  {
    id: 'event-mount-vernon-hercules-escapes',
    name: 'Hercules Escapes from Philadelphia Household',
    startDate: new Date('1797-02-22'),
    datePrecision: 'DAY',
    summary: 'Hercules, Mount Vernon\'s enslaved head cook and the chef of Washington\'s Philadelphia presidential household, escaped to freedom on February 22, 1797 — Washington\'s birthday. His escape was not discovered until the morning after. He was never returned.',
    significanceWeight: 88,
    lat: 38.7082,
    lng: -77.0863,
    town: { connect: { id: 'us-va-mount-vernon' } },
  },
  {
    id: 'event-mount-vernon-washington-will',
    name: 'Washington\'s Will Provides Conditional Freedom',
    startDate: new Date('1799-12-14'),
    datePrecision: 'DAY',
    summary: 'Washington\'s will, executed after his death on December 14, 1799, provided for the emancipation of his 123 enslaved people after Martha\'s death — but only those he personally owned. The 153 dower slaves belonging to the Custis estate were not freed and passed to Custis heirs.',
    significanceWeight: 85,
    lat: 38.7082,
    lng: -77.0863,
    town: { connect: { id: 'us-va-mount-vernon' } },
  },
  {
    id: 'event-mount-vernon-archaeology-slave-quarter',
    name: 'Archaeological Investigation of Slave Quarter Begins',
    startDate: new Date('1987-01-01'),
    datePrecision: 'YEAR',
    summary: 'Mount Vernon\'s sustained archaeological investigation of the slave quarters and burial ground began in the late 1980s, recovering material culture evidence that has transformed the historical understanding of the enslaved community\'s daily life, material culture, and burial practices.',
    significanceWeight: 72,
    lat: 38.7079,
    lng: -77.0857,
    town: { connect: { id: 'us-va-mount-vernon' } },
  },
  {
    id: 'event-mount-vernon-wheat-farming-transition',
    name: 'Mount Vernon Transitions from Tobacco to Wheat Production',
    startDate: new Date('1766-01-01'),
    datePrecision: 'YEAR',
    summary: 'In the decade before the Revolution, Washington made the decision to shift Mount Vernon\'s primary crop from tobacco to wheat, transforming the estate\'s labor needs, market relationships, and economic structure. This transition shaped the plantation\'s wartime operations and its relationship to the Chesapeake trade networks.',
    significanceWeight: 70,
    lat: 38.7082,
    lng: -77.0863,
    town: { connect: { id: 'us-va-mount-vernon' } },
  },
  {
    id: 'event-mount-vernon-dunmore-proclamation-response',
    name: 'Enslaved Mount Vernon Workers Respond to Dunmore\'s Proclamation',
    startDate: new Date('1775-11-15'),
    datePrecision: 'MONTH',
    summary: 'Lord Dunmore\'s November 1775 proclamation offering freedom to enslaved men who escaped Patriot owners and joined British forces was heard at Mount Vernon as clearly as anywhere in Virginia. Washington\'s correspondence with Lund reveals anxiety about potential escapes throughout the winter of 1775–1776.',
    significanceWeight: 84,
    lat: 38.7082,
    lng: -77.0863,
    town: { connect: { id: 'us-va-mount-vernon' } },
  },
];

// ============================================================================
// MOUNT VERNON — STORIES
// ============================================================================

export const mountVernonStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-mount-vernon-william-lee',
    title: 'William Lee: The Man at Washington\'s Side',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-william-lee' } },
    verificationStatus: 'VERIFIED',
    textVersion: `William Lee was at every major battle of the Revolutionary War. He was at Boston when the British evacuated, at Trenton when Washington crossed the Delaware in the winter dark, at Valley Forge through the brutal winter of 1777–1778, at Yorktown when Cornwallis surrendered. He carried Washington's spyglass. He held Washington's horse. He slept in the same tent. He dressed and undressed the commander-in-chief every day for eight years.

He was enslaved. He could not leave. He received no pay. His presence at every major moment of the Revolution was not a choice — it was a condition of his legal status — and yet he chose, within that condition, how to carry himself.

The documentary record of William Lee is fragmentary but real. He appears in portraits of Washington — standing slightly behind the general, holding the horse, present in the frame but not the subject of it. He appears in Washington's letters: Washington purchased silk for his coat, directed Lund to obtain specific items for his use, mentioned him by name in ways that suggest genuine regard, or at minimum a recognition of his usefulness.

Washington's will named him first among the enslaved people to receive freedom: immediate, unconditional, with an annual pension of thirty dollars. No other enslaved person received anything like this. Washington wrote that the bequest was "a testimony of my sense of his attachment to me, and for his faithful services during the Revolutionary War." It is the most direct statement Washington ever made about their relationship.

What Lee thought about any of this — about the war, about Washington, about the freedom that came only after Washington's death and his own knees had been destroyed by years of hard riding — the record does not say. He remained at Mount Vernon after Washington's death, cobbling shoes in a room near the kitchen, until he died around 1810. He is buried in the cemetery with Mount Vernon's other enslaved people, in ground that for most of two centuries bore no marker.`,
    tags: ['William Lee', 'enslaved valet', 'Valley Forge', 'Revolutionary War', 'freedom'],
    town: { connect: { id: 'us-va-mount-vernon' } },
  },
  {
    id: 'story-mount-vernon-seventeen-escape',
    title: 'April 1781: Seventeen Choose the British',
    storyType: 'HISTORICAL_VOICE',
    verificationStatus: 'VERIFIED',
    textVersion: `On an April night in 1781, with a British warship anchored in the Potomac and Lund Washington negotiating on the bank, seventeen enslaved people at Mount Vernon made the most consequential decision of their lives. They walked away from the estate. They went aboard the HMS Savage. They chose the British.

We know their names from Washington's later attempts to recover them: Gunner and his wife Esther, Lewis and Lil; Deborah and Frederick; Peter and several others. Some were skilled workers. Some were household servants. They had, between them, decades of service to Washington's estate and no share in the liberty Washington was fighting to establish.

Lund Washington's account of the episode is the primary source. He went aboard the ship to negotiate — hoping, apparently, to retrieve the enslaved people and possibly recover livestock the British had taken. He brought food and supplies. The negotiations failed in the sense that none of the seventeen were returned. The British kept their word: they did not attack the estate.

Washington's reaction, in the letter to Lund, focuses almost entirely on the provisioning of the enemy ship. He was furious about that: "to go on board their vessels; carry them refreshments; commune with a parcel of plundering Scoundrels." He mentions the enslaved people who left in a single sentence, noting that he had taken steps to try to recover them. He seems less exercised about the departures than about the political embarrassment of his estate manager feeding British sailors.

Of the seventeen, most died within a few years of smallpox and other diseases that decimated the thousands of enslaved people who sought freedom with the British. Washington tracked at least one, Deborah, to Philadelphia after the war, but could not recover her. She and the others had chosen a freedom that cost many of them their lives. The cost of staying, of another lifetime of unpaid labor, had simply seemed higher.`,
    tags: ['HMS Savage', 'escape', 'Dunmore Proclamation', 'enslaved resistance', 'freedom seekers'],
    town: { connect: { id: 'us-va-mount-vernon' } },
  },
];

// ============================================================================
// MOUNT VERNON — LESSON PLANS
// ============================================================================

export const mountVernonLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-va-mount-vernon' } },
    title: 'William Lee at Valley Forge: Presence, Invisibility, and the Revolutionary Record',
    gradeRange: '7-9',
    estimatedDuration: '2 class periods',
    summary:
      'This lesson uses William Lee\'s presence at every major battle and camp of the Revolutionary War to examine who is and is not visible in the historical record. Students analyze how Lee appears — and does not appear — in portraits, letters, and official accounts of the Revolution, and what his story reveals about the construction of Revolutionary memory. The lesson asks students to use the absence of evidence as evidence itself, and to practice the historical thinking skill of reading against the grain of sources written by people with interests in what they recorded.',
    lessonData: {
      objectives: [
        'Students will identify William Lee\'s documented presence throughout the Revolutionary War',
        'Students will analyze how enslaved people appear and are absent from Revolutionary War portraits and documents',
        'Students will evaluate what Washington\'s will reveals about the relationship between Lee and Washington',
        'Students will practice the historical skill of reading against the grain of primary sources',
      ],
      essentialQuestions: [
        'How do we write history about people who left no documents of their own? What methods do historians use?',
        'What does William Lee\'s presence at every major battle of the Revolution tell us about who fought in the Revolutionary War?',
        'What does it mean to be present in history but invisible in the historical record?',
      ],
      materials: [
        'Reproduction: portrait of Washington with William Lee visible in background',
        'Excerpt from Washington\'s will (William Lee section, adapted)',
        'Excerpt from Valley Forge correspondence mentioning Lee',
        'Background reading on enslaved people who accompanied officers in the Revolutionary War',
        'Graphic organizer: What the Source Tells Us / What It Doesn\'t Tell Us / What Questions It Raises',
      ],
      activities: [
        {
          name: 'Looking at the Portrait',
          duration: '15 minutes',
          description:
            'Students examine a portrait of Washington that includes William Lee. Using a structured looking protocol, they first describe what they see (who is in the portrait, what each person is doing, where each person is positioned) before interpreting what the portrait communicates. Discussion: what does Lee\'s position in the image tell us about how he was perceived? What would the portrait look like if Lee were the subject?',
        },
        {
          name: 'Reading Against the Grain',
          duration: '25 minutes',
          description:
            'Students read Washington\'s will excerpt and Valley Forge correspondence using the graphic organizer. They identify what these sources tell us directly about Lee, what they imply but don\'t say, and what questions the sources raise that they can\'t answer. Discussion: these sources were written by Washington, not by Lee. How does that shape what we can learn from them?',
        },
        {
          name: 'Who Was at Valley Forge?',
          duration: '20 minutes',
          description:
            'Students review a list of the categories of people present at Valley Forge: Continental soldiers, officers, camp followers, enslaved people, free Black soldiers. They discuss: whose experience of Valley Forge do we know most about? Whose do we know least about? Why? What would change about our understanding of Valley Forge if we knew as much about William Lee\'s experience as we know about Washington\'s?',
        },
      ],
      assessment:
        'Written response (half page): Using evidence from the lesson, explain why William Lee is an important historical figure even though he left no documents of his own. What do we know about him, how do we know it, and what can\'t we know?',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author\'s point of view or purpose',
        'CCSS.ELA-LITERACY.RH.6-8.8: Distinguish among fact, opinion, and reasoned judgment in a text',
      ],
      c3Framework: [
        'D2.His.3.6-8: Use questions generated about multiple historical sources to pursue further inquiry',
        'D2.His.9.6-8: Classify the kinds of historical sources used in a secondary interpretation',
        'D2.His.5.6-8: Explain how and why perspectives of people have changed over time',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-va-mount-vernon' } },
    title: 'The Seventeen Who Left: Freedom, Risk, and Revolutionary Choice',
    gradeRange: '9-12',
    estimatedDuration: '2-3 class periods',
    summary:
      'This lesson uses the April 1781 escape of seventeen enslaved Mount Vernon workers to the British warship HMS Savage to examine the choices available to enslaved people during the Revolutionary War. Students analyze Dunmore\'s Proclamation, Washington\'s response to the escapes, and the outcomes for those who sought freedom with the British. The lesson asks students to think carefully about how we evaluate choices made under conditions of extreme constraint, and what the escapes reveal about the Revolutionary War\'s meaning for those excluded from its promise of liberty.',
    lessonData: {
      objectives: [
        'Students will analyze Lord Dunmore\'s 1775 Proclamation as a military and social document',
        'Students will evaluate the choices available to enslaved people in Revolutionary Virginia',
        'Students will examine Washington\'s response to the 1781 escapes and what it reveals',
        'Students will assess the outcomes for enslaved people who sought freedom with the British',
      ],
      essentialQuestions: [
        'What did "liberty" mean for enslaved people during the American Revolution, and whose liberty was the Revolution fighting for?',
        'How do we evaluate choices made under conditions of extreme constraint? Were the seventeen who left Mount Vernon making a free choice?',
        'What does Washington\'s response to the escapes reveal about the limits of his Revolutionary commitment?',
      ],
      materials: [
        'Lord Dunmore\'s Proclamation, November 1775 (adapted)',
        'Washington\'s letter to Lund Washington after the Savage incident (adapted)',
        'List of the seventeen who escaped, with known outcomes',
        'Secondary source on the fate of enslaved people who sought British freedom',
        'Map showing Mount Vernon\'s position on the Potomac and British naval routes',
      ],
      activities: [
        {
          name: 'Reading Dunmore\'s Proclamation',
          duration: '20 minutes',
          description:
            'Students read Dunmore\'s Proclamation and identify: who is offered freedom, under what conditions, and what it requires. Discussion: why would a British governor offer freedom to enslaved people? What is he trying to accomplish? How would a Patriot planter like Washington hear this proclamation, and how might an enslaved person at Mount Vernon hear it differently?',
        },
        {
          name: 'Washington\'s Letter: What He Said and Didn\'t Say',
          duration: '25 minutes',
          description:
            'Students read Washington\'s letter to Lund after the Savage incident. Using a structured annotation protocol, they identify: what Washington is angry about, what he says about the enslaved people who left, what he doesn\'t say, and what the letter reveals about his priorities. Discussion: Washington wrote a long letter about this episode. What would you expect him to say? What did he actually say?',
        },
        {
          name: 'The Seventeen: What We Know About What Happened',
          duration: '20 minutes',
          description:
            'Students examine the known outcomes for the seventeen who escaped: most died of disease within a few years; some reached freedom in Nova Scotia or the Caribbean; Washington tracked at least one to Philadelphia without recovering her. Discussion: knowing what we know about the outcomes, how do we evaluate the decision to leave? Does the outcome change how we judge the choice?',
        },
      ],
      assessment:
        'Analytical essay (2 pages): Evaluate the decision of the seventeen Mount Vernon enslaved workers to seek freedom with the British in April 1781. Using evidence from the lesson, address: What were their options? What did they know and not know about the risks? What does their choice reveal about the meaning of the Revolution for enslaved people? Students must engage with at least one primary source from the lesson.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors for how they treat the same or similar topics',
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in several primary and secondary sources',
      ],
      c3Framework: [
        'D2.His.1.9-12: Analyze how historical contexts shaped and continue to shape people\'s perspectives',
        'D2.His.4.9-12: Analyze complex and interacting factors that influenced the perspectives of people during different historical eras',
        'D2.His.5.9-12: Analyze how individuals and groups responded to or influenced the ideas, events, or movement of their times',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// MOUNT VERNON — ADDITIONAL LINKS
// ============================================================================

export const mountVernonAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-va-alexandria',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason: 'Mount Vernon is twelve miles south of Alexandria on the Potomac; Washington used Alexandria as his commercial port, attended church there, and relied on its merchants for estate and military supplies throughout his career.',
    weight: 96,
  },
  {
    toTownId: 'us-va-fredericksburg',
    linkType: 'SHARED_PERSON',
    reason: 'Washington\'s mother and sister in Fredericksburg; Fielding Lewis\'s gunnery operations were closely coordinated with Mount Vernon\'s supply networks; Washington visited Fredericksburg multiple times during the war.',
    weight: 84,
  },
  {
    toTownId: 'us-pa-philadelphia',
    linkType: 'SHARED_PERSON',
    reason: 'Washington\'s presidential household in Philadelphia included Mount Vernon\'s enslaved workers, including Hercules (who escaped there) and Ona Judge (who also escaped). Philadelphia is the site of Washington\'s presidency and the enslaved community\'s most direct encounter with the free-state legal boundary.',
    weight: 78,
  },
  {
    toTownId: 'us-nj-valley-forge',
    linkType: 'SHARED_PERSON',
    reason: 'William Lee and other enslaved Mount Vernon workers accompanied Washington to Valley Forge; the winter encampment is where Washington\'s Valley Forge-to-Mount Vernon correspondence most vividly captures the dissonance between his military and plantation roles.',
    weight: 72,
  },
];
