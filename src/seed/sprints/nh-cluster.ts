// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// NH Cluster: Exeter + Portsmouth, New Hampshire
// Campaign: New Hampshire's Road to Independence, 1774–1783

import { Prisma } from '@prisma/client';

// ============================================================================
// EXETER
// ============================================================================

export const exeterTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Exeter, New Hampshire, was the revolutionary government of an entire colony — and then a state — for the better part of a decade. That is not a metaphor. When royal governor John Wentworth fled Portsmouth in August 1775, the formal colonial apparatus of British authority in New Hampshire collapsed with him. What replaced it met in Exeter. The provincial congresses, the Committee of Safety, the state legislature — the entire institutional architecture of New Hampshire's self-governance operated out of this small Squamscott River town while the war was fought. The choice was not accidental: Exeter sat far enough inland that a British naval force could not simply sail up and bombard it, and it had a tradition of independence rooted in its Congregational meeting culture and distance from Portsmouth's patronage networks.

The man who made that government work was Meshech Weare. His name is little known outside New Hampshire, but within it he was the indispensable figure of the Revolutionary period. He served simultaneously as president of the Committee of Safety, chief justice of the Superior Court, and — after 1776 — as the state's first elected president. He was an administrator of extraordinary competence in a period when competence was what the Patriot cause most needed and least reliably got.

Exeter also matters because New Hampshire was first. On January 5, 1776 — eight months before the Declaration of Independence — the New Hampshire Provincial Congress adopted a new constitution establishing a republican government, the first colony to do so. The document was explicitly provisional, but its adoption was a direct repudiation of royal authority at a moment when many colonists still hoped for reconciliation. Phillips Exeter Academy, founded in 1781, is one of the lasting institutions that grew from this culture of civic seriousness — John Phillips's founding deed explicitly connected education to citizens' capacity for self-governance.`,
};

// ============================================================================
// EXETER — PEOPLE
// ============================================================================

export const exeterPeople: Array<{ person: Prisma.PersonCreateInput; connectionNote: string }> = [
  {
    person: {
      id: 'person-meshech-weare',
      name: 'Meshech Weare',
      roles: ['President of New Hampshire', 'Chief Justice', 'Committee of Safety President'],
      bioShort:
        'New Hampshire\'s indispensable revolutionary administrator. He served simultaneously as president of the Committee of Safety, chief justice of the Superior Court, and first elected state president. His administrative competence kept the Patriot government functioning throughout the war from Exeter.',
      birthYear: 1713,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Operated the revolutionary government from Exeter; chaired the Committee of Safety and served as the state\'s first elected president.',
  },
  {
    person: {
      id: 'person-john-phillips-exeter',
      name: 'John Phillips',
      roles: ['Merchant', 'Philanthropist', 'Academy Founder'],
      bioShort:
        'Exeter merchant who founded Phillips Exeter Academy in 1781, endowing it with a republican civic mission. His founding deed explicitly connected education to citizens\' capacity for self-governance in the new republic.',
      birthYear: 1719,
      deathYear: 1795,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Founded Phillips Exeter Academy in 1781 with an explicit civic mission rooted in Exeter\'s revolutionary experience.',
  },
  {
    person: {
      id: 'person-nicholas-gilman-jr',
      name: 'Nicholas Gilman Jr.',
      roles: ['Continental Army Officer', 'Continental Congress Delegate', 'Constitutional Convention Delegate'],
      bioShort:
        'Exeter-born officer who served in the Continental Army, represented New Hampshire in the Continental Congress, and signed the Constitution in 1787. His father Nicholas Gilman Sr. served as state treasurer during the war, making the Gilman house an administrative hub of New Hampshire\'s revolutionary government.',
      birthYear: 1755,
      deathYear: 1814,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Signer of the Constitution; his family\'s Exeter mansion served as a hub of the revolutionary government.',
  },
  {
    person: {
      id: 'person-john-langdon-exeter',
      name: 'John Langdon',
      roles: ['Continental Congress Delegate', 'Continental Navy Agent', 'Governor of New Hampshire'],
      bioShort:
        'Portsmouth merchant and shipbuilder who personally financed the equipping of NH troops for the Saratoga campaign using his own credit, coordinated with the Exeter government. Oversaw construction of the Ranger in Portsmouth. Later became governor and a U.S. Senator.',
      birthYear: 1741,
      deathYear: 1819,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Key figure connecting Exeter\'s political network and Portsmouth\'s maritime resources; his Saratoga financing was coordinated with Exeter\'s Committee of Safety.',
  },
  {
    person: {
      id: 'person-josiah-bartlett',
      name: 'Josiah Bartlett',
      roles: ['Continental Congress Delegate', 'Declaration Signer', 'Governor of New Hampshire'],
      bioShort:
        'New Hampshire physician and statesman who cast the first delegate vote for independence on July 2, 1776, and signed the Declaration. Served as the state\'s chief executive. His political network ran through Exeter.',
      birthYear: 1729,
      deathYear: 1795,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'New Hampshire\'s signer of the Declaration of Independence; his political career was conducted in coordination with the Exeter-based Patriot government.',
  },
  {
    person: {
      id: 'person-nathaniel-folsom',
      name: 'Nathaniel Folsom',
      roles: ['Continental Congress Delegate', 'Continental Army General', 'NH Militia Commander'],
      bioShort:
        'New Hampshire military and political leader who served as a delegate to both Continental Congresses and commanded NH militia. His political and military careers centered on Exeter and the Squamscott River region.',
      birthYear: 1726,
      deathYear: 1790,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Represented New Hampshire in both Continental Congresses; commanded militia coordinated through the Exeter government.',
  },
  {
    person: {
      id: 'person-john-wentworth-governor',
      name: 'Governor John Wentworth',
      roles: ['Royal Governor of New Hampshire', 'Loyalist', 'Last Royal Governor'],
      bioShort:
        'The last royal governor of New Hampshire, whose flight to HMS Scarborough in August 1775 created the governmental vacuum that Exeter\'s Patriot institutions filled. His departure ended 150 years of Wentworth family dominance of New Hampshire politics.',
      birthYear: 1737,
      deathYear: 1820,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'His flight from Portsmouth in 1775 made Exeter the effective capital; his absence defined the landscape Meshech Weare\'s government navigated.',
  },
  {
    person: {
      id: 'person-william-whipple',
      name: 'William Whipple',
      roles: ['Continental Congress Delegate', 'Declaration Signer', 'Brigadier General'],
      bioShort:
        'New Hampshire merchant and statesman who signed the Declaration and commanded NH forces at Saratoga. He later freed his enslaved manservant Prince Whipple, reportedly moved by the contradiction between fighting for liberty and holding another man in bondage.',
      birthYear: 1730,
      deathYear: 1785,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Signer of the Declaration; his manservant Prince Whipple\'s story illuminates the contradictions of the revolutionary cause the Exeter government embodied.',
  },
];

// ============================================================================
// EXETER — PLACES
// ============================================================================

export const exeterPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-exeter-american-independence-museum',
    name: 'American Independence Museum (Ladd-Gilman House)',
    placeType: 'MUSEUM',
    description: 'Located on the grounds of the Ladd-Gilman House, this museum holds one of only two surviving draft copies of the U.S. Constitution and a rare Dunlap broadside printing of the Declaration of Independence. The Ladd-Gilman House served as headquarters of the NH state treasury during the Revolution under Nicholas Gilman Sr.',
    lat: 42.9820,
    lng: -70.9487,
    address: '1 Governors Lane, Exeter, NH 03833',
    town: { connect: { id: 'us-nh-exeter' } },
  },
  {
    id: 'place-exeter-gilman-garrison-house',
    name: 'Gilman Garrison House',
    placeType: 'HISTORIC_HOUSE',
    description: 'A seventeenth-century garrison house that served as a Gilman family residence throughout the colonial and Revolutionary periods. Nicholas Gilman Sr., the state treasurer, used the property as part of the administrative network that kept New Hampshire\'s revolutionary government functioning from Exeter.',
    lat: 42.9815,
    lng: -70.9478,
    address: '12 Water St, Exeter, NH 03833',
    town: { connect: { id: 'us-nh-exeter' } },
  },
  {
    id: 'place-exeter-phillips-exeter-academy',
    name: 'Phillips Exeter Academy',
    placeType: 'HISTORIC_HOUSE',
    description: 'Founded in 1781 by John Phillips with an explicit mission to educate citizens for republican self-governance. The Academy\'s founding deed articulated Enlightenment civic principles that were direct expressions of the political culture Exeter had cultivated during the war years.',
    lat: 42.9797,
    lng: -70.9478,
    address: '20 Main St, Exeter, NH 03833',
    town: { connect: { id: 'us-nh-exeter' } },
  },
  {
    id: 'place-exeter-town-meeting-house-site',
    name: 'Exeter Town Meeting House Site',
    placeType: 'GOVERNMENT',
    description: 'The site where New Hampshire\'s Provincial Congress and later the state legislature met during the Revolutionary War period. After Governor Wentworth fled in 1775, the rebel government operated from Exeter\'s assembly spaces, making the town the de facto capital from 1775 to 1789.',
    lat: 42.9818,
    lng: -70.9473,
    address: 'Front St, Exeter, NH 03833',
    town: { connect: { id: 'us-nh-exeter' } },
  },
  {
    id: 'place-exeter-congregational-church',
    name: 'First Congregational Church of Exeter',
    placeType: 'CHURCH',
    description: 'The Congregational meeting culture was a civic institution as much as a religious one. Its tradition of community deliberation and self-governance was one of the institutional foundations of the town\'s capacity to assume governmental functions when royal authority collapsed in 1775.',
    lat: 42.9829,
    lng: -70.9480,
    address: '21 Front St, Exeter, NH 03833',
    town: { connect: { id: 'us-nh-exeter' } },
  },
  {
    id: 'place-exeter-squamscott-river-waterfront',
    name: 'Squamscott River Waterfront',
    placeType: 'LANDMARK',
    description: 'The tidal Squamscott River made Exeter a minor but functional port for small coastal vessels. Its limited navigability for large warships was one practical reason Exeter was a safe location for the rebel government — a British naval force could not easily threaten it the way it could Portsmouth.',
    lat: 42.9808,
    lng: -70.9440,
    address: 'Water St, Exeter, NH 03833',
    town: { connect: { id: 'us-nh-exeter' } },
  },
];

// ============================================================================
// EXETER — EVENTS
// ============================================================================

export const exeterEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-exeter-first-state-constitution',
    name: 'New Hampshire Adopts First State Constitution',
    startDate: new Date('1776-01-05'),
    datePrecision: 'DAY',
    summary: 'Meeting in Exeter, the New Hampshire Provincial Congress adopted a new constitution establishing republican self-government on January 5, 1776 — eight months before the Declaration of Independence and the first colony to take such a step. The document was explicitly provisional but its adoption was a direct repudiation of royal authority that put New Hampshire ahead of every other colony.',
    significanceWeight: 95,
    lat: 42.9818,
    lng: -70.9473,
    town: { connect: { id: 'us-nh-exeter' } },
  },
  {
    id: 'event-exeter-wentworth-flees',
    name: 'Governor Wentworth Flees to HMS Scarborough',
    startDate: new Date('1775-08-23'),
    datePrecision: 'DAY',
    summary: 'Royal Governor John Wentworth, facing growing hostility from the Patriot movement and unable to maintain order, abandoned his Portsmouth residence and fled to HMS Scarborough anchored in the harbor. His departure ended 150 years of Wentworth family dominance of New Hampshire politics and created the governmental vacuum that Exeter\'s Patriot institutions filled for the duration of the war.',
    significanceWeight: 88,
    lat: 42.9818,
    lng: -70.9473,
    town: { connect: { id: 'us-nh-exeter' } },
  },
  {
    id: 'event-exeter-provincial-congress-convenes',
    name: 'New Hampshire Provincial Congress Convenes in Exeter',
    startDate: new Date('1775-05-17'),
    datePrecision: 'DAY',
    summary: 'The New Hampshire Provincial Congress — the rebel legislature replacing the royal assembly — convened in Exeter in May 1775, weeks after Lexington and Concord. It assumed authority over taxation, military organization, and civil administration, marking the beginning of Exeter\'s decade-long role as the effective seat of New Hampshire\'s revolutionary government.',
    significanceWeight: 85,
    lat: 42.9818,
    lng: -70.9473,
    town: { connect: { id: 'us-nh-exeter' } },
  },
  {
    id: 'event-exeter-committee-of-safety-formed',
    name: 'New Hampshire Committee of Safety Established',
    startDate: new Date('1775-06-01'),
    datePrecision: 'MONTH',
    summary: 'The New Hampshire Committee of Safety was established and began operating from Exeter under Meshech Weare\'s leadership, coordinating military mobilization, supply, and Continental Congress correspondence. Its records are among the most complete of any state executive body from the period.',
    significanceWeight: 82,
    lat: 42.9818,
    lng: -70.9473,
    town: { connect: { id: 'us-nh-exeter' } },
  },
  {
    id: 'event-exeter-bartlett-votes-independence',
    name: 'Josiah Bartlett Casts First Vote for Independence',
    startDate: new Date('1776-07-02'),
    datePrecision: 'DAY',
    summary: 'Josiah Bartlett cast the first delegate vote for independence on July 2, 1776, when Congress voted state by state on Richard Henry Lee\'s resolution. New Hampshire, called first alphabetically, gave Bartlett the distinction. He later signed the Declaration as the first delegate after John Hancock.',
    significanceWeight: 88,
    lat: 39.9489,
    lng: -75.1500,
    town: { connect: { id: 'us-nh-exeter' } },
  },
  {
    id: 'event-exeter-langdon-finances-saratoga',
    name: 'John Langdon Finances NH Troops for Saratoga',
    startDate: new Date('1777-08-01'),
    datePrecision: 'MONTH',
    summary: 'When the New Hampshire government lacked funds to equip troops for the Saratoga campaign, John Langdon pledged his personal fortune and credit to finance the expedition. His offer, coordinated with the Exeter-based Committee of Safety, made possible New Hampshire\'s significant contribution to the campaign where American forces surrounded and captured Burgoyne\'s entire British army in October 1777.',
    significanceWeight: 80,
    lat: 42.9818,
    lng: -70.9473,
    town: { connect: { id: 'us-nh-exeter' } },
  },
  {
    id: 'event-exeter-phillips-academy-founded',
    name: 'Phillips Exeter Academy Founded',
    startDate: new Date('1781-04-03'),
    datePrecision: 'DAY',
    summary: 'John Phillips executed the deed of gift establishing Phillips Exeter Academy on April 3, 1781, with a founding document explicitly connecting education to republican self-governance — a direct expression of the civic values Exeter had cultivated during the war.',
    significanceWeight: 75,
    lat: 42.9797,
    lng: -70.9478,
    town: { connect: { id: 'us-nh-exeter' } },
  },
  {
    id: 'event-exeter-new-constitution-1784',
    name: 'New Hampshire Adopts Permanent Constitution',
    startDate: new Date('1784-06-02'),
    datePrecision: 'DAY',
    summary: 'New Hampshire adopted its permanent constitution on June 2, 1784, replacing the provisional 1776 document. Meshech Weare became the state\'s first elected president under the new framework, reflecting a decade of hard-won experience governing a republic under wartime conditions.',
    significanceWeight: 78,
    lat: 42.9818,
    lng: -70.9473,
    town: { connect: { id: 'us-nh-exeter' } },
  },
  {
    id: 'event-exeter-ratifies-us-constitution',
    name: 'New Hampshire Ratifies the U.S. Constitution',
    startDate: new Date('1788-06-21'),
    datePrecision: 'DAY',
    summary: 'New Hampshire became the ninth and decisive state to ratify the Constitution on June 21, 1788 — the vote that put it into effect. The political leadership that delivered the vote had been built in Exeter during the Revolutionary War years.',
    significanceWeight: 90,
    lat: 43.2081,
    lng: -71.5376,
    town: { connect: { id: 'us-nh-exeter' } },
  },
  {
    id: 'event-exeter-continental-army-recruits',
    name: 'Exeter Raises and Supplies Continental Regiments',
    startDate: new Date('1775-07-01'),
    datePrecision: 'YEAR',
    summary: 'Throughout 1775–1782, Exeter\'s Committee of Safety coordinated the recruitment, provisioning, and payment of New Hampshire\'s Continental Army regiments. The town served as the administrative hub where enlistment bounties were authorized, military commissions were issued, and supply contracts were managed.',
    significanceWeight: 72,
    lat: 42.9818,
    lng: -70.9473,
    town: { connect: { id: 'us-nh-exeter' } },
  },
];

// ============================================================================
// EXETER — STORIES
// ============================================================================

export const exeterStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-exeter-weare-administrator',
    title: 'The Man Who Kept the Government Running',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-meshech-weare' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Meshech Weare did not look like a revolutionary. He was sixty-two when the war began, a judge who had spent his career in the careful middle distance between colonial authority and local autonomy. He had no battlefield glory, no famous speech. What he had was the ability to run things. When Governor Wentworth fled to his warship in August 1775, Weare built what replaced royal government: provisional institutions sustained through legal knowledge, administrative patience, and endurance. He served simultaneously as president of the Committee of Safety, chief justice, and — after 1776 — the state's first elected president.

The correspondence files he left behind are what historians use when they want to understand how a state actually functioned during the Revolution. Not inspirational speeches. Requisition orders, supply requests, letters to county sheriffs. Government as paperwork and logistics, as the daily management of scarcity. He was not celebrated the way soldiers and orators were. But the Patriot cause required both kinds of people. New Hampshire had the latter in Weare.`,
    tags: ['Weare', 'administration', 'government', 'Committee of Safety', 'New Hampshire'],
    town: { connect: { id: 'us-nh-exeter' } },
  },
  {
    id: 'story-exeter-first-constitution',
    title: 'Before the Declaration: New Hampshire Goes First',
    storyType: 'MODERN_VOICE',
    narratorName: 'Constitutional Historian',
    narratorRole: 'Researcher, American Independence Museum, Exeter',
    verificationStatus: 'VERIFIED',
    textVersion: `When I bring school groups into the Ladd-Gilman House, I ask them: when did New Hampshire declare independence from Britain? They say July 4, 1776. I tell them the right answer is January 5, 1776 — and it happened in this town. New Hampshire was first.

The 1776 constitution the Provincial Congress adopted in Exeter called itself provisional. But the act of adopting it was not provisional at all. You do not create a republican government — elected assembly, elected council, replacing the royal governor — unless you have decided that royal authority is no longer legitimate. The document's language was cautious. The act itself was revolutionary. Eight months before Philadelphia, men meeting in Exeter decided that New Hampshire would govern itself as a republic. They had the institutional capacity because Exeter had been building it — through its meeting culture, its Congregational church traditions, its market economy — for generations.

What I want students to understand is that the Declaration of Independence declared a fact already established in many of the colonies. The building of the revolution happened before July 1776, in places like this one.`,
    tags: ['constitution', 'independence', 'first', 'republic', 'Exeter'],
    town: { connect: { id: 'us-nh-exeter' } },
  },
];

// ============================================================================
// EXETER — LESSON PLANS
// ============================================================================

export const exeterLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-nh-exeter' } },
    title: 'First to the Republic: New Hampshire\'s January 1776 Constitution',
    gradeRange: '8-12',
    estimatedDuration: '2-3 class periods',
    summary: 'This lesson uses New Hampshire\'s January 5, 1776 constitution — the first adopted by any colony — to examine how the transition from colonial to republican government actually worked. Students analyze what institutional capacity a community needed to assume self-governance, why New Hampshire moved before the Continental Congress authorized it, and what the document itself reveals about the revolutionaries\' assumptions about representation and legitimacy. The lesson challenges students to think about the Declaration of Independence not as a beginning but as a codification of changes already underway in places like Exeter.',
    lessonData: {
      objectives: [
        'Students will explain why New Hampshire adopted a constitution eight months before the Declaration of Independence',
        'Students will analyze the 1776 NH constitution as a primary source, identifying its republican features and provisional character',
        'Students will evaluate the role of institutional capacity in enabling revolutionary self-governance',
      ],
      essentialQuestions: [
        'What does a community need — institutionally, culturally, economically — to be capable of governing itself?',
        'Was the Declaration of Independence a beginning or a codification? What does the New Hampshire example tell us?',
      ],
      activities: [
        {
          name: 'Document Comparison: Constitution vs. Declaration',
          duration: '25 minutes',
          description: 'Students read side-by-side excerpts from the 1776 NH constitution and the July 1776 Declaration. Using a T-chart, they identify what claims each makes about authority and which goes further in breaking with colonial status. They then examine Exeter\'s pre-revolutionary institutions and evaluate which was most important in enabling the town to assume governmental functions.',
        },
        {
          name: 'Meshech Weare: The Invisible Founder',
          duration: '20 minutes',
          description: 'Students read adapted excerpts from Weare\'s Committee of Safety correspondence, identifying the kinds of decisions he was making. Discussion: why is Weare not well known while Washington and Jefferson are? What does his relative obscurity tell us about how we remember the Revolution?',
        },
      ],
      assessment: 'Summative essay (600–900 words): "Using New Hampshire\'s January 1776 constitution and the Exeter government\'s wartime record, argue whether the Declaration of Independence was a beginning or an endpoint of the independence movement. Use specific evidence from at least two primary sources."',
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-nh-exeter' } },
    title: 'Building a Republic: Education, Civic Virtue, and Phillips Exeter',
    gradeRange: '6-8',
    estimatedDuration: '2 class periods',
    summary: 'This lesson uses the 1781 founding of Phillips Exeter Academy to examine what the revolutionaries believed education was for. Students analyze the Academy\'s founding deed and its explicit connection to republican self-governance, trace the relationship between John Phillips\'s civic vision and the political culture Exeter built during the war, and evaluate whether that vision still applies today.',
    lessonData: {
      objectives: [
        'Students will explain the connection between education and republican self-governance as understood by Revolutionary-era Americans',
        'Students will analyze the Phillips Exeter Academy founding deed as a primary source expressing Enlightenment civic values',
        'Students will evaluate how Exeter\'s wartime experience shaped the Academy\'s founding mission',
      ],
      essentialQuestions: [
        'What did Revolutionary-era Americans believe education was for? How does that compare to what we think today?',
        'Can a school have a civic mission? What would that mean in practice?',
        'Why did John Phillips found an academy in 1781, during a war, and what does that timing tell us?',
      ],
      activities: [
        {
          name: 'Founding Deed Analysis',
          duration: '20 minutes',
          description: 'Students read excerpts from the Academy\'s founding deed and identify: What goals does Phillips set? What kind of person is the Academy supposed to produce? What connection does Phillips draw between education and self-governance? Then examine the context of founding — 1781, during the war\'s final campaigns, in a town that had been the revolutionary government\'s seat for six years.',
        },
        {
          name: 'Education and Citizenship: Then and Now',
          duration: '20 minutes',
          description: 'Students compare three perspectives on education\'s purpose: John Phillips\'s 1781 civic vision, John Adams\'s writings on republican education, and a current school\'s mission statement. Groups identify similarities and differences, then discuss what has changed and what has remained.',
        },
      ],
      assessment: 'Exit ticket: "In two or three sentences, explain what John Phillips believed education was for, and give one piece of evidence from the founding deed that supports your answer."',
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// EXETER — ADDITIONAL LINKS
// ============================================================================

type TownLink = { toTownId: string; linkType: 'SHARED_EVENT' | 'SHARED_PERSON' | 'GEOGRAPHIC_PROXIMITY' | 'SHARED_THEME' | 'ROUTE' | 'COMPARISON' | 'OTHER'; reason: string; weight: number };
export const exeterAdditionalLinks: TownLink[] = [
  {
    toTownId: 'us-nh-portsmouth',
    linkType: 'SHARED_EVENT',
    reason: 'Exeter replaced Portsmouth as the effective capital when Governor Wentworth fled in 1775. The two towns represent the political and maritime poles of New Hampshire\'s revolutionary experience, linked by the same personnel — Langdon, Bartlett, Weare — who moved between them.',
    weight: 95,
  },
  {
    toTownId: 'us-ma-concord',
    linkType: 'SHARED_THEME',
    reason: 'Both Exeter and Concord served as inland revolutionary government centers when coastal towns became vulnerable to British naval power. Both towns exemplify the inland Patriot infrastructure that sustained the war.',
    weight: 65,
  },
  {
    toTownId: 'us-ny-saratoga',
    linkType: 'SHARED_EVENT',
    reason: 'New Hampshire\'s contribution to the Saratoga campaign — financed by John Langdon\'s personal credit and coordinated through Exeter\'s Committee of Safety — was significant. Exeter\'s government made New Hampshire\'s participation possible.',
    weight: 70,
  },
  {
    toTownId: 'us-pa-philadelphia',
    linkType: 'SHARED_PERSON',
    reason: 'Josiah Bartlett and William Whipple, representing Exeter\'s political network, signed the Declaration in Philadelphia. Nicholas Gilman Jr., from the same network, signed the Constitution there in 1787.',
    weight: 75,
  },
];

// ============================================================================
// PORTSMOUTH
// ============================================================================

export const portsmouthTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Portsmouth, New Hampshire, struck the first blow of the American Revolution — not at Lexington and Concord in April 1775, but at Fort William and Mary in December 1774. What happened there on December 14–15 was not a battle. No one was killed. The small British garrison surrendered without serious resistance. But it was the first organized seizure of British military property by American colonists, four months before Concord, and it directly supplied the gunpowder and cannon that New Hampshire troops would use in the months that followed. The raid grew from a network of intelligence that Paul Revere was part of: riding north from Boston to warn Portsmouth that the British were about to reinforce the fort, he triggered two successive raids. The first seized approximately 100 barrels of gunpowder; the second removed cannon. The stores captured at Fort William and Mary ended up at Bunker Hill.

Portsmouth's other great Revolutionary War contribution was maritime. The town was New Hampshire's only significant seaport, and its shipwrights were among the most skilled in the colonies. When the Continental Navy began commissioning vessels, Portsmouth's yards became essential. The most famous product was the Ranger, an 18-gun sloop commanded by John Paul Jones. In April 1778, Jones sailed the Ranger into Whitehaven harbor on the coast of England, spiked the guns of the fort, and carried the war to British home waters for the first time since the Civil War. He then captured HMS Drake in a ship-to-ship engagement off Carrickfergus, Ireland. The Ranger was built and launched in Portsmouth.

Portsmouth's merchant elite navigated the Revolution with more ambivalence than the inland towns. The Wentworth family network was royalist; many merchants had profitable ties to the British Atlantic trading system. But John Langdon and others aligned with the revolutionary cause. The houses along Strawbery Banke — the Moffatt-Ladd House, the John Paul Jones House, the Warner House — are products of that merchant wealth and among the best-preserved examples of colonial domestic architecture in New England.`,
};

// ============================================================================
// PORTSMOUTH — PEOPLE
// ============================================================================

export const portsmouthPeople: Array<{ person: Prisma.PersonCreateInput; connectionNote: string }> = [
  {
    person: {
      id: 'person-john-paul-jones',
      name: 'John Paul Jones',
      roles: ['Continental Navy Captain', 'Ranger Commander', 'Father of the American Navy'],
      bioShort:
        'Scottish-born naval officer who commanded the sloop Ranger, built in Portsmouth\'s shipyards, on the first American naval raid on British soil at Whitehaven in April 1778. His subsequent capture of HMS Drake made him an international hero. His famous "I have not yet begun to fight" came later aboard Bonhomme Richard.',
      birthYear: 1747,
      deathYear: 1792,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Commanded the Ranger, built in Portsmouth, on the first naval raid on British soil; lived in Portsmouth while overseeing the ship\'s outfitting.',
  },
  {
    person: {
      id: 'person-john-langdon-portsmouth',
      name: 'John Langdon',
      roles: ['Continental Navy Agent', 'Continental Congress Delegate', 'Governor of New Hampshire'],
      bioShort:
        'Portsmouth merchant and shipbuilder who served as Continental Navy agent, supervising construction of the Ranger. He personally financed New Hampshire\'s Saratoga campaign contribution and later served as governor and U.S. Senator.',
      birthYear: 1741,
      deathYear: 1819,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Supervised construction of the Ranger as Continental Navy agent; his personal credit financed NH\'s military contributions throughout the war.',
  },
  {
    person: {
      id: 'person-john-sullivan-nh',
      name: 'General John Sullivan',
      roles: ['Continental Army General', 'Continental Congress Delegate', 'Fort William and Mary Raid Leader'],
      bioShort:
        'New Hampshire lawyer and general who led the December 14, 1774 raid on Fort William and Mary — the first organized seizure of British military property by American colonists. He commanded Continental forces at Long Island, Brandywine, and the 1779 Sullivan-Clinton Campaign against the Iroquois.',
      birthYear: 1740,
      deathYear: 1795,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Led the first raid on Fort William and Mary on December 14, 1774, four months before Lexington and Concord.',
  },
  {
    person: {
      id: 'person-paul-revere-portsmouth',
      name: 'Paul Revere',
      roles: ['Patriot Messenger', 'Silversmith', 'Boston Committee of Correspondence Member'],
      bioShort:
        'Boston silversmith and patriot courier who rode to Portsmouth in December 1774 to warn local leaders that the British were about to reinforce Fort William and Mary. His warning triggered the two raids that seized the fort\'s powder and cannon — four months before his more famous Lexington ride.',
      birthYear: 1735,
      deathYear: 1818,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Rode from Boston to Portsmouth in December 1774 to warn of British reinforcement plans for Fort William and Mary, triggering the raids.',
  },
  {
    person: {
      id: 'person-john-wentworth-portsmouth',
      name: 'Governor John Wentworth',
      roles: ['Royal Governor of New Hampshire', 'Loyalist', 'Last Royal Governor'],
      bioShort:
        'The last royal governor of New Hampshire, whose family had governed the colony for three generations. His inability to prevent the Fort William and Mary raids and his subsequent flight to HMS Scarborough in August 1775 marked the end of British authority in New Hampshire.',
      birthYear: 1737,
      deathYear: 1820,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Governed from Portsmouth until the Fort William and Mary raids and his flight ended royal authority in New Hampshire.',
  },
  {
    person: {
      id: 'person-thomas-thompson-portsmouth',
      name: 'Captain Thomas Thompson',
      roles: ['Continental Navy Captain', 'Portsmouth Shipmaster', 'Raleigh Commander'],
      bioShort:
        'Portsmouth-born sea captain who commanded the Continental frigate Raleigh, one of the original thirteen frigates authorized by Congress. A product of Portsmouth\'s maritime culture, he represented the deep connection between the town\'s shipbuilding tradition and the Continental Navy\'s early operations.',
      birthYear: 1739,
      deathYear: 1809,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Commanded the Raleigh, built in Portsmouth\'s shipyards, as part of the original Continental Navy.',
  },
  {
    person: {
      id: 'person-william-whipple-portsmouth',
      name: 'William Whipple',
      roles: ['Continental Congress Delegate', 'Declaration Signer', 'Brigadier General'],
      bioShort:
        'Portsmouth merchant who signed the Declaration of Independence and commanded NH forces at Saratoga. He later freed his enslaved manservant Prince Whipple, reportedly moved by the contradiction between fighting for liberty while holding another man in bondage.',
      birthYear: 1730,
      deathYear: 1785,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Signer of the Declaration; owned the Moffatt-Ladd House in Portsmouth. His manservant Prince Whipple\'s story illuminates the contradictions of the revolutionary cause.',
  },
  {
    person: {
      id: 'person-woodbury-langdon',
      name: 'Woodbury Langdon',
      roles: ['Continental Congress Delegate', 'Superior Court Justice', 'Portsmouth Merchant'],
      bioShort:
        'Younger brother of John Langdon and Portsmouth merchant who served as a Continental Congress delegate and later as a Superior Court justice. He represented the merchant-patriot class that navigated Portsmouth\'s complex loyalties during the Revolution.',
      birthYear: 1739,
      deathYear: 1805,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Continental Congress delegate from Portsmouth; brother of John Langdon, the two together represented the town\'s Patriot merchant leadership.',
  },
];

// ============================================================================
// PORTSMOUTH — PLACES
// ============================================================================

export const portsmouthPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-portsmouth-fort-constitution',
    name: 'Fort Constitution Historic Site (Fort William and Mary)',
    placeType: 'BATTLEFIELD',
    description: 'Site of Fort William and Mary, where John Sullivan led the December 14, 1774 raid — the first organized seizure of British military property by American colonists, four months before Lexington and Concord. Renamed Fort Constitution after the Revolution. The site overlooks Portsmouth Harbor from New Castle Island.',
    lat: 43.0726,
    lng: -70.7126,
    address: 'Fort Constitution Rd, New Castle, NH 03854',
    town: { connect: { id: 'us-nh-portsmouth' } },
  },
  {
    id: 'place-portsmouth-john-paul-jones-house',
    name: 'John Paul Jones House',
    placeType: 'HISTORIC_HOUSE',
    description: 'The boarding house where John Paul Jones lived while supervising the fitting out of the Ranger in Portsmouth\'s shipyards in 1777. Now a museum operated by the Portsmouth Historical Society, containing period furnishings and exhibits on Jones\'s connection to Portsmouth and the Continental Navy.',
    lat: 43.0756,
    lng: -70.7579,
    address: '43 Middle St, Portsmouth, NH 03801',
    town: { connect: { id: 'us-nh-portsmouth' } },
  },
  {
    id: 'place-portsmouth-strawbery-banke-museum',
    name: 'Strawbery Banke Museum',
    placeType: 'MUSEUM',
    description: 'A ten-acre outdoor history museum on the original settlement site of Portsmouth, with more than thirty historic structures. Several buildings date from the Revolutionary War era and display the merchant culture that characterized Portsmouth\'s Patriot leadership. The museum preserves the physical landscape of the town as it existed when the Ranger was built.',
    lat: 43.0721,
    lng: -70.7571,
    address: '14 Hancock St, Portsmouth, NH 03801',
    town: { connect: { id: 'us-nh-portsmouth' } },
  },
  {
    id: 'place-portsmouth-moffatt-ladd-house',
    name: 'Moffatt-Ladd House and Garden',
    placeType: 'HISTORIC_HOUSE',
    description: 'Built in 1763 by merchant John Moffatt, this Georgian mansion was owned by General William Whipple, signer of the Declaration of Independence, during the Revolutionary War. Its garden and interiors are among the best-preserved examples of elite colonial domestic life in New Hampshire.',
    lat: 43.0762,
    lng: -70.7558,
    address: '154 Market St, Portsmouth, NH 03801',
    town: { connect: { id: 'us-nh-portsmouth' } },
  },
  {
    id: 'place-portsmouth-point-of-graves',
    name: 'Point of Graves Burial Ground',
    placeType: 'CEMETERY',
    description: 'Portsmouth\'s oldest burial ground, dating to 1671, containing graves of colonial merchants, mariners, and officials. Several figures connected to the Revolutionary War period are buried here. The stones\' iconography reflects the maritime and mercantile culture that shaped Portsmouth\'s response to the Revolution.',
    lat: 43.0705,
    lng: -70.7557,
    address: 'Mechanic St, Portsmouth, NH 03801',
    town: { connect: { id: 'us-nh-portsmouth' } },
  },
  {
    id: 'place-portsmouth-langdon-mansion',
    name: 'John Langdon Mansion',
    placeType: 'HISTORIC_HOUSE',
    description: 'The mansion built by John Langdon in 1784, representing the commercial success of Portsmouth\'s leading Patriot merchant and politician. George Washington visited during his 1789 New England tour. Langdon\'s wartime coordination — Continental Navy agent, financier of the Saratoga troops — was conducted from his earlier Portsmouth residence.',
    lat: 43.0793,
    lng: -70.7605,
    address: '143 Pleasant St, Portsmouth, NH 03801',
    town: { connect: { id: 'us-nh-portsmouth' } },
  },
];

// ============================================================================
// PORTSMOUTH — EVENTS
// ============================================================================

export const portsmouthEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-portsmouth-revere-rides-north',
    name: 'Paul Revere Rides to Portsmouth',
    startDate: new Date('1774-12-13'),
    datePrecision: 'DAY',
    summary: 'Paul Revere rode from Boston to Portsmouth on December 13, 1774, warning that the British planned to reinforce Fort William and Mary. His intelligence reached John Sullivan and John Langdon, who organized the raids that followed — Revere\'s first significant intelligence mission, four months before his famous April 1775 ride.',
    significanceWeight: 82,
    lat: 43.0718,
    lng: -70.7626,
    town: { connect: { id: 'us-nh-portsmouth' } },
  },
  {
    id: 'event-portsmouth-fort-william-mary-raid-1',
    name: 'First Raid on Fort William and Mary',
    startDate: new Date('1774-12-14'),
    datePrecision: 'DAY',
    summary: 'On December 14, 1774, approximately 400 men under John Sullivan overpowered the small British garrison at Fort William and Mary on New Castle Island and seized approximately 100 barrels of gunpowder. The garrison of a captain and five soldiers offered token resistance before surrendering. This was the first organized seizure of British military property by American colonists — four months before Lexington and Concord. The powder was distributed to communities throughout New Hampshire.',
    significanceWeight: 95,
    lat: 43.0726,
    lng: -70.7126,
    town: { connect: { id: 'us-nh-portsmouth' } },
  },
  {
    id: 'event-portsmouth-fort-william-mary-raid-2',
    name: 'Second Raid on Fort William and Mary',
    startDate: new Date('1774-12-15'),
    datePrecision: 'DAY',
    summary: 'A second group of raiders returned to Fort William and Mary on December 15 and removed cannon and additional military stores. Governor Wentworth\'s protests to London were unavailing. The cannon and powder from these two raids were later used by New Hampshire troops at Bunker Hill.',
    significanceWeight: 88,
    lat: 43.0726,
    lng: -70.7126,
    town: { connect: { id: 'us-nh-portsmouth' } },
  },
  {
    id: 'event-portsmouth-ranger-launched',
    name: 'Continental Sloop Ranger Launched',
    startDate: new Date('1777-05-10'),
    datePrecision: 'MONTH',
    summary: 'The Continental Navy sloop Ranger was launched from Langdon\'s Island shipyard in Portsmouth in the spring of 1777. Built under Continental Navy agent John Langdon, the Ranger was an 18-gun ocean sloop. John Paul Jones was appointed to command her in June 1777 — within a year she would carry the war to British home waters.',
    significanceWeight: 85,
    lat: 43.0718,
    lng: -70.7626,
    town: { connect: { id: 'us-nh-portsmouth' } },
  },
  {
    id: 'event-portsmouth-flag-salute-france',
    name: 'First Foreign Salute to the American Flag',
    startDate: new Date('1778-02-14'),
    datePrecision: 'DAY',
    summary: 'In Brest harbor on February 14, 1778, French Admiral La Motte-Picquet ordered a nine-gun salute in honor of the Ranger\'s flag — the first official recognition of the American flag by a foreign naval power. Jones had negotiated the terms carefully; flag salute protocol carried significant diplomatic weight.',
    significanceWeight: 80,
    lat: 48.3904,
    lng: -4.4861,
    town: { connect: { id: 'us-nh-portsmouth' } },
  },
  {
    id: 'event-portsmouth-whitehaven-raid',
    name: 'Ranger Raids Whitehaven, England',
    startDate: new Date('1778-04-23'),
    datePrecision: 'DAY',
    summary: 'John Paul Jones led a shore party from the Ranger into Whitehaven harbor on the English coast in the early hours of April 23, 1778, spiked the guns of two forts, and attempted to set fire to the fleet at anchor. The fires were extinguished before significant damage was done, but the raid — the first hostile military action on British soil since the Civil War — caused panic along the English and Scottish coasts and demonstrated that the American war had reached British home waters.',
    significanceWeight: 90,
    lat: 54.5494,
    lng: -3.5878,
    town: { connect: { id: 'us-nh-portsmouth' } },
  },
  {
    id: 'event-portsmouth-ranger-captures-drake',
    name: 'Ranger Captures HMS Drake',
    startDate: new Date('1778-04-24'),
    datePrecision: 'DAY',
    summary: 'The day after the Whitehaven raid, Jones engaged the British sloop HMS Drake off Carrickfergus, Ireland, in a ship-to-ship battle lasting about an hour. The Drake surrendered with significantly more casualties than the Ranger. Jones brought her to Brest as a prize — the first British naval vessel captured and brought to a European port by an American warship.',
    significanceWeight: 85,
    lat: 54.7150,
    lng: -5.8060,
    town: { connect: { id: 'us-nh-portsmouth' } },
  },
  {
    id: 'event-portsmouth-wentworth-flees',
    name: 'Governor Wentworth Abandons Portsmouth',
    startDate: new Date('1775-08-23'),
    datePrecision: 'DAY',
    summary: 'Royal Governor John Wentworth abandoned Government House and took refuge aboard HMS Scarborough in Portsmouth harbor, ending 150 years of Wentworth family dominance of New Hampshire and transferring the effective capital to Exeter.',
    significanceWeight: 88,
    lat: 43.0718,
    lng: -70.7626,
    town: { connect: { id: 'us-nh-portsmouth' } },
  },
  {
    id: 'event-portsmouth-raleigh-launched',
    name: 'Continental Frigate Raleigh Built in Portsmouth',
    startDate: new Date('1776-05-21'),
    datePrecision: 'MONTH',
    summary: 'The Continental frigate Raleigh was launched from Portsmouth\'s shipyards in May 1776, within six months of its Congressional authorization — demonstrating the exceptional quality of New Hampshire\'s maritime labor force. She was one of the first Continental naval vessels to enter service.',
    significanceWeight: 78,
    lat: 43.0718,
    lng: -70.7626,
    town: { connect: { id: 'us-nh-portsmouth' } },
  },
  {
    id: 'event-portsmouth-washington-visits',
    name: 'President Washington Visits Portsmouth',
    startDate: new Date('1789-11-02'),
    datePrecision: 'DAY',
    summary: 'President George Washington visited Portsmouth on November 2–4, 1789, during his New England tour, dining with John Langdon at his mansion. Washington recorded his impressions in his diary, noting Portsmouth\'s fine houses, active harbor, and prosperity — a recognition of the town\'s wartime contributions.',
    significanceWeight: 68,
    lat: 43.0793,
    lng: -70.7605,
    town: { connect: { id: 'us-nh-portsmouth' } },
  },
];

// ============================================================================
// PORTSMOUTH — STORIES
// ============================================================================

export const portsmouthStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-portsmouth-fort-william-mary-first-blow',
    title: 'Before Lexington: The First Strike',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-john-sullivan-nh' } },
    verificationStatus: 'VERIFIED',
    textVersion: `John Sullivan received Revere's warning on December 13, 1774, and had eighteen hours to decide what to do with it. The British were sending ships to reinforce the garrison at Fort William and Mary and lock down the powder stored there. Once that happened, the stores would be inaccessible. The fort's garrison was a captain and five soldiers. The powder inside was potentially invaluable to a militia that had very little of it. The practical opportunity might not come again.

Sullivan organized the raid in hours. On December 14, several hundred men moved toward New Castle Island. The garrison could not stop them. After the briefest exchange, the British captain lowered his colors and allowed the colonists to remove approximately one hundred barrels of gunpowder. A second group returned the next day for the cannon. Wentworth protested to London. The reinforcement came too late.

The powder from Fort William and Mary traveled to Bunker Hill. The men who planned those December raids understood exactly what they were doing. They were not yet calling it a revolution. But they were already fighting one.`,
    tags: ['Fort William and Mary', 'Sullivan', 'first raid', 'powder', 'pre-Lexington'],
    town: { connect: { id: 'us-nh-portsmouth' } },
  },
  {
    id: 'story-portsmouth-ranger-maritime-heritage',
    title: 'What Portsmouth Built',
    storyType: 'MODERN_VOICE',
    narratorName: 'Maritime Historian',
    narratorRole: 'Portsmouth Naval Shipyard Historical Project',
    verificationStatus: 'ANECDOTAL',
    textVersion: `People come to Portsmouth for the houses — the Moffatt-Ladd House, the John Paul Jones House — and those are worth seeing. But what made Portsmouth matter in the Revolution was its shipyards. New Hampshire had no iron production, no significant gunpowder mills. What it had was timber and the skilled labor to turn timber into ships. When Congress authorized the original thirteen Continental frigates in December 1775, the Raleigh went to Portsmouth because Portsmouth could deliver — launched within six months. When the Navy needed a fast ocean sloop in 1777, Portsmouth produced the Ranger under Continental Navy agent John Langdon.

The Whitehaven raid is told as a John Paul Jones story, which it partly is. But it is also a Portsmouth story — about what happens when a ship built by New Hampshire craftsmen is put under the command of someone willing to carry the war to England's coast. The craftsmen who built the Ranger never made the history books. Jones did. But the ship was the necessary condition for everything that followed.`,
    tags: ['shipbuilding', 'Ranger', 'maritime', 'Langdon', 'Continental Navy'],
    town: { connect: { id: 'us-nh-portsmouth' } },
  },
];

// ============================================================================
// PORTSMOUTH — LESSON PLANS
// ============================================================================

export const portsmouthLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-nh-portsmouth' } },
    title: 'First Strike: The Fort William and Mary Raids of December 1774',
    gradeRange: '7-10',
    estimatedDuration: '2-3 class periods',
    summary: 'This lesson examines the December 1774 raids on Fort William and Mary as a case study in pre-revolutionary political violence: what conditions made them possible, what risks the participants were taking, and what the British response revealed about the limits of royal authority. Students analyze the intelligence network that made the raids possible (including Revere\'s December ride), evaluate Sullivan\'s decision-making, and consider how an act that could have been prosecuted as armed robbery was later reframed as a patriotic first blow.',
    lessonData: {
      objectives: [
        'Students will describe the Fort William and Mary raids as the first organized seizure of British military property by American colonists',
        'Students will analyze the intelligence network and decision-making that made the raids possible',
        'Students will compare the categorization of the raids as crime versus revolution and identify who controlled that categorization',
      ],
      essentialQuestions: [
        'What is the difference between a crime and a revolutionary act? Who decides?',
        'Why are the Fort William and Mary raids less well known than Lexington and Concord, even though they happened first?',
      ],
      activities: [
        {
          name: 'Intelligence Network Mapping',
          duration: '20 minutes',
          description: 'Students trace the information chain from Boston to Portsmouth: Who sent Revere? What information did he carry? Who received it? Who organized the raids? Students create a diagram of communication and decision-making and discuss what made this network function.',
        },
        {
          name: 'Two Accounts, Two Perspectives',
          duration: '25 minutes',
          description: 'Students read Wentworth\'s dispatch to London (characterizing events as armed robbery) and Adams\'s 1825 patriotic account. They identify where accounts agree and diverge, and what language each uses to characterize the participants. Discussion: how does the outcome of the Revolution shape how events are described? What makes an event "remembered" versus "forgotten"?',
        },
      ],
      assessment: 'Analytical paragraph (250–350 words): "Using at least two pieces of specific evidence, explain why the Fort William and Mary raids should — or should not — be considered the beginning of the American Revolution. Address the counterargument to your position."',
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-nh-portsmouth' } },
    title: 'The Ranger: Shipbuilding, Sea Power, and the Continental Navy',
    gradeRange: '8-12',
    estimatedDuration: '3 class periods',
    summary: 'This lesson uses the construction and deployment of the Continental sloop Ranger to examine how the United States built a navy from scratch during wartime, what resources and skills that required, and what the Whitehaven raid and the capture of HMS Drake accomplished diplomatically and psychologically. Students investigate Portsmouth\'s role as a maritime production center, analyze John Paul Jones as a historical figure whose reputation was shaped as much by politics as by combat, and consider what it means to carry a war to an enemy\'s home territory.',
    lessonData: {
      objectives: [
        'Students will explain why Portsmouth was chosen for Continental Navy construction and what maritime resources the town provided',
        'Students will trace the Ranger\'s operational history from Portsmouth to Whitehaven and the capture of HMS Drake',
        'Students will evaluate John Paul Jones as a historical figure, distinguishing documented facts from later mythologization',
      ],
      essentialQuestions: [
        'What does it take to build a navy from nothing during wartime? What does Portsmouth\'s example tell us?',
        'How did John Paul Jones become a hero, and how much of that heroism is documented versus constructed?',
      ],
      activities: [
        {
          name: 'Resource Analysis and Voyage Mapping',
          duration: '35 minutes',
          description: 'Students first examine resources required to build a naval vessel and identify which Portsmouth could supply and which had to come from elsewhere. Then they trace the Ranger\'s 1778 voyage on a map, annotating key events: the flag salute, the Whitehaven raid, the Carrickfergus engagement, and return to Brest with HMS Drake as a prize.',
        },
        {
          name: 'Hero or Legend? Evaluating Jones',
          duration: '25 minutes',
          description: 'Students examine two layers of the Jones story: documented facts from the 1778 voyage and later mythologization. Note that "I have not yet begun to fight" was said on Bonhomme Richard in 1779, not the Ranger. Students distinguish verified facts from later additions and discuss how heroic narratives form.',
        },
      ],
      assessment: 'Extended response (500–700 words): "The Ranger\'s 1778 operations had military, diplomatic, and psychological significance. Explain which type was most important and why, using at least two pieces of evidence and addressing one counterargument."',
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// PORTSMOUTH — ADDITIONAL LINKS
// ============================================================================

export const portsmouthAdditionalLinks: TownLink[] = [
  {
    toTownId: 'us-nh-exeter',
    linkType: 'SHARED_EVENT',
    reason: 'Portsmouth was the colonial capital until Wentworth\'s 1775 flight made Exeter the effective seat of revolutionary government. Langdon, Sullivan, and other Portsmouth figures coordinated with the Exeter-based Committee of Safety throughout the war.',
    weight: 95,
  },
  {
    toTownId: 'us-ma-marblehead',
    linkType: 'SHARED_THEME',
    reason: 'Both Portsmouth and Marblehead were maritime communities whose sailors and shipbuilders made essential contributions to the Continental Navy. Marblehead\'s Glover regiment rowed Washington across the Delaware; Portsmouth\'s yards built the ships that carried the war to Britain.',
    weight: 72,
  },
  {
    toTownId: 'us-ma-boston',
    linkType: 'SHARED_EVENT',
    reason: 'Paul Revere\'s December 1774 ride from Boston to Portsmouth connected the two towns\' Patriot networks. The Boston Committee of Correspondence\'s intelligence about Fort William and Mary made the Portsmouth raids possible.',
    weight: 80,
  },
  {
    toTownId: 'us-ma-lexington',
    linkType: 'COMPARISON',
    reason: 'The Fort William and Mary raids of December 1774 preceded Lexington and Concord by four months and were the first organized seizure of British military property. The comparison illuminates how the "first shot" of the Revolution is defined and why some events become iconic while others remain obscure.',
    weight: 75,
  },
  {
    toTownId: 'us-ny-saratoga',
    linkType: 'SHARED_EVENT',
    reason: 'John Langdon\'s personal financing of New Hampshire troops for the Saratoga campaign, coordinated between Portsmouth\'s commercial resources and Exeter\'s government, contributed to the decisive 1777 American victory.',
    weight: 68,
  },
];
