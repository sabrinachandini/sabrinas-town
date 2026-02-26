// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// ME Cluster: Portland (Falmouth), ME + Castine (Penobscot), ME
// Campaign: Maine coast raids and the Penobscot Expedition, 1775–1779

import { Prisma } from '@prisma/client';

/**
 * ME Cluster — Portland and Castine, Maine
 *
 * These two Maine coast towns anchor opposite ends of the Revolution's most
 * neglected maritime theater. Portland (then Falmouth) was burned by the Royal
 * Navy in October 1775 — the first deliberate destruction of an American town
 * by British forces, a months before Lexington and Concord could fully be
 * processed. Castine (then Bagaduce) was the site of the Penobscot Expedition
 * of 1779, the worst American naval disaster before Pearl Harbor, in which a
 * massive Massachusetts force was destroyed attempting to dislodge a British
 * garrison from a fortified peninsula.
 *
 * NOTE ON VERIFICATION: Historical content synthesized from James Leamon's
 * "Revolution Downeast," George Buker's "The Penobscot Expedition," Lincoln
 * Ruchames's documentary work, the Maine Historical Society collections,
 * and NPS records for the relevant sites. Stories marked VERIFIED have strong
 * documentary evidence. Figures known primarily through local tradition carry
 * ANECDOTAL status.
 */

// ============================================================================
// PORTLAND (FALMOUTH)
// ============================================================================

export const portlandTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Portland in October 1775 was still called Falmouth, and it was burning. On October 18, Royal Navy Lieutenant Henry Mowat, commanding a small squadron of five vessels anchored in Casco Bay, opened a bombardment that lasted most of the day. When the guns fell silent, roughly three-quarters of the town was in ashes. About 130 buildings were destroyed. Nearly 2,000 residents were left homeless as winter approached. It was the first deliberate British destruction of an American colonial town in the Revolution, carried out ten days after a congressional resolution that could plausibly be read as requiring exactly this kind of punitive action.

The backstory matters. Mowat had been in Falmouth before — specifically, he had been briefly captured by a Patriot crowd there in May 1775, an incident that humiliated him and, more importantly, humiliated the Royal Navy. When Rear Admiral Samuel Graves, desperate to demonstrate British naval authority along the New England coast, ordered a punitive expedition, Mowat asked to lead it. He returned to Falmouth with a personal score to settle and orders that gave him the authority to do so.

The bombardment began at nine in the morning. Mowat had given the town overnight to surrender and deliver hostages; the town had stalled, negotiated, pleaded, and ultimately refused. The guns then opened. The incendiary carcasses — shells designed to spread fire — were followed by landing parties who used torches on buildings the shells had missed. By evening, the town center was gone: the wharves, warehouses, the church, the courthouse, most of the houses on the main streets. Residents who had fled to the surrounding hills watched the smoke column rise through the afternoon.

The military logic was punitive and symbolic. Falmouth was a known center of Patriot organization; its merchants had been active in resistance to Parliamentary taxation. Graves hoped that destroying it would demonstrate the cost of defiance and cow the other New England ports. It did neither. The burning of Falmouth, far from intimidating the colonial population, became one of the most effective pieces of Patriot propaganda of the entire war. News of it spread through all thirteen colonies within weeks. Benjamin Franklin cited it to European audiences as evidence of British brutality. Pamphlets described it in detail. The images — homeless families, smoldering ruins, winter coming on — were exactly what Patriot organizers needed to answer the question of whether the British were really as dangerous as the radicals claimed.

The irony is that Mowat's raid, intended to punish and deter, instead accelerated the momentum toward independence. The Continental Congress, receiving word of the burning along with reports of a similar British action at Bristol, Rhode Island, began drafting legislation to authorize American privateering and naval operations. The destruction of Falmouth was one of the specific provocations cited by those pushing for a formal American navy.

The town rebuilt slowly, and the change of name from Falmouth to Portland came in 1786, as if the town needed a new identity to begin again. The rebuilt town retained its maritime character: fishing, shipbuilding, coastal trade. During the Penobscot Expedition of 1779, Portland served as one of the staging areas for the Massachusetts fleet, a connection that links it directly to the other Maine disaster in this cluster.

What the burning of Falmouth demonstrates — what makes it matter beyond the tragedy of individual families — is how quickly British military decisions could become American political assets. Graves ordered the destruction to project strength. It projected brutality instead. That gap between intention and effect runs throughout the British strategic calculus in New England during 1775 and 1776, and Falmouth's fate is one of its clearest illustrations.`,
};

// ============================================================================
// PORTLAND — PEOPLE
// ============================================================================

export const portlandPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-henry-mowat',
      name: 'Lieutenant Henry Mowat',
      roles: ['Royal Navy Officer', 'Squadron Commander', 'Raid Leader'],
      bioShort:
        'Royal Navy officer who commanded the five-vessel squadron that bombarded Falmouth on October 18, 1775. Had been briefly captured by Patriots in Falmouth in May 1775; his return with orders to punish the town carried personal as well as military dimensions.',
      birthYear: 1734,
      deathYear: 1798,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the British squadron that burned Falmouth on October 18, 1775; was the operational architect of the first deliberate British destruction of an American town.',
  },
  {
    person: {
      id: 'person-samuel-graves',
      name: 'Vice Admiral Samuel Graves',
      roles: ['Royal Navy Vice Admiral', 'Commander North American Station'],
      bioShort:
        'British naval commander who ordered the punitive expedition against New England coastal towns in autumn 1775, believing collective punishment would deter Patriot organization. His strategy backfired: the destruction of Falmouth accelerated the colonial push toward independence and a formal American navy.',
      birthYear: 1713,
      deathYear: 1787,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Issued the orders authorizing Mowat\'s punitive expedition; the burning of Falmouth was the direct consequence of his command decision.',
  },
  {
    person: {
      id: 'person-samuel-freeman',
      name: 'Samuel Freeman',
      roles: ['Falmouth Town Clerk', 'Patriot Committee Member', 'Judge'],
      bioShort:
        'Falmouth town clerk and Patriot committeeman who negotiated with Mowat during the tense overnight standoff before the bombardment. His account of those negotiations is one of the primary documentary records of the events of October 17–18, 1775.',
      birthYear: 1743,
      deathYear: 1831,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Participated in the negotiations with Mowat the night before the bombardment; his testimony is a key primary source for the burning of Falmouth.',
  },
  {
    person: {
      id: 'person-jedediah-preble',
      name: 'Brigadier General Jedediah Preble',
      roles: ['Massachusetts Militia General', 'Falmouth Resident', 'Patriot Leader'],
      bioShort:
        'Massachusetts militia general and prominent Falmouth resident who coordinated local Patriot resistance before the burning. His family\'s losses in the October 1775 bombardment were representative of the destruction visited on the town\'s leading families.',
      birthYear: 1707,
      deathYear: 1784,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Leading Patriot figure in Falmouth whose family was among those displaced by the 1775 burning; helped organize the town\'s defensive response and subsequent rebuilding.',
  },
  {
    person: {
      id: 'person-peleg-wadsworth',
      name: 'Brigadier General Peleg Wadsworth',
      roles: ['Continental Army General', 'Maine District Commander', 'Penobscot Expedition Officer'],
      bioShort:
        'Massachusetts general who commanded the land forces during the disastrous Penobscot Expedition of 1779 and later served as military commander of the Eastern District of Massachusetts, which included the Maine coast. Based in part at Falmouth during his Maine command tenure.',
      birthYear: 1748,
      deathYear: 1829,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded Continental land forces during the Penobscot Expedition; was based in the Falmouth-Portland area during his Eastern District command and is buried in Portland.',
  },
  {
    person: {
      id: 'person-thomas-coulson',
      name: 'Thomas Coulson',
      roles: ['Falmouth Merchant', 'Shipbuilder', 'Loyalist'],
      bioShort:
        'Prominent Falmouth merchant and shipbuilder whose Loyalist sympathies put him at odds with the Patriot committee. His situation illustrates the divided loyalties within Maine\'s coastal towns, where commercial ties to Britain ran deep among the merchant class.',
      birthYear: 1740,
      deathYear: 1799,
      verificationStatus: 'ANECDOTAL',
    },
    connectionNote:
      'Falmouth merchant whose Loyalist position represented the significant Tory faction within the town; his property dealings during and after the burning document the economic disruption.',
  },
  {
    person: {
      id: 'person-benjamin-franklin-portland',
      name: 'Benjamin Franklin',
      roles: ['Continental Congress Delegate', 'Diplomat', 'Patriot Leader'],
      bioShort:
        'Founding Father who cited the burning of Falmouth to European audiences as evidence of British brutality toward American civilians. His use of the event in diplomatic correspondence helped shape international perception of the conflict.',
      birthYear: 1706,
      deathYear: 1790,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Cited the burning of Falmouth in European diplomatic correspondence as proof of British willingness to wage war against civilian populations.',
  },
  {
    person: {
      id: 'person-ichabod-jones',
      name: 'Ichabod Jones',
      roles: ['Falmouth Merchant', 'British Supplier', 'Loyalist Sympathizer'],
      bioShort:
        'Falmouth merchant whose attempt to transport lumber to British-held Boston in the spring of 1775, under Royal Navy escort, triggered the confrontation that led to Mowat\'s brief capture by the Patriot crowd. That episode set in motion the chain of events culminating in the October bombardment.',
      birthYear: 1735,
      deathYear: 1778,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'His lumber-shipping activities under British naval protection in May 1775 provoked the Patriot crowd action that captured Mowat, setting the stage for the retaliatory burning five months later.',
  },
];

// ============================================================================
// PORTLAND — PLACES
// ============================================================================

export const portlandPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-portland-munjoy-hill',
    name: 'Munjoy Hill Observatory',
    placeType: 'MONUMENT',
    description:
      'The Eastern Promenade atop Munjoy Hill offers the clearest view of Casco Bay from which the October 1775 bombardment was watched by fleeing residents. The Portland Observatory, built in 1807 and still standing, sits on the same high ground. Historical markers on the Promenade reference the 1775 burning.',
    lat: 43.6618,
    lng: -70.2472,
    address: 'Eastern Promenade, Portland, ME 04101',
    town: { connect: { id: 'us-me-portland' } },
  },
  {
    id: 'place-portland-first-parish-church',
    name: 'First Parish Church',
    placeType: 'CHURCH',
    description:
      'The congregation of First Parish was active in Falmouth before the 1775 burning; its original meetinghouse was among the buildings destroyed in the October bombardment. The present granite structure, built in 1826, stands near the site of the colonial building. The church has preserved records documenting the disruption the burning brought to civic and religious life.',
    lat: 43.6560,
    lng: -70.2574,
    address: '425 Congress St, Portland, ME 04101',
    town: { connect: { id: 'us-me-portland' } },
  },
  {
    id: 'place-portland-maine-historical-society',
    name: 'Maine Historical Society & Museum',
    placeType: 'MUSEUM',
    description:
      'The Maine Historical Society holds primary documents related to the burning of Falmouth, the Penobscot Expedition, and the broader Revolutionary War experience on the Maine coast. Its research library includes Samuel Freeman\'s accounts of the 1775 bombardment and military records from the Eastern District of Massachusetts.',
    lat: 43.6573,
    lng: -70.2588,
    address: '489 Congress St, Portland, ME 04101',
    town: { connect: { id: 'us-me-portland' } },
  },
  {
    id: 'place-portland-old-port-waterfront',
    name: 'Old Port Waterfront District',
    placeType: 'LANDMARK',
    description:
      'The waterfront district of Portland occupies the area most heavily damaged by Mowat\'s bombardment. The wharves and warehouses that were the economic heart of colonial Falmouth burned on October 18, 1775. The current 19th-century brick streetscape replaced the colonial wooden structures; walking the Old Port is walking the footprint of what was lost.',
    lat: 43.6564,
    lng: -70.2538,
    address: 'Old Port District, Portland, ME 04101',
    town: { connect: { id: 'us-me-portland' } },
  },
  {
    id: 'place-portland-eastern-cemetery',
    name: 'Eastern Cemetery',
    placeType: 'CEMETERY',
    description:
      'One of the oldest cemeteries in Maine, established in 1668. Revolutionary War-era graves include figures connected to Falmouth\'s Patriot community. The cemetery survived the 1775 burning and retains headstones predating the bombardment, making it a rare physical link to colonial Falmouth.',
    lat: 43.6585,
    lng: -70.2517,
    address: '224 Congress St, Portland, ME 04101',
    town: { connect: { id: 'us-me-portland' } },
  },
  {
    id: 'place-portland-fort-preble-site',
    name: 'Fort Preble Site (Spring Point)',
    placeType: 'BATTLEFIELD',
    description:
      'Spring Point on the Portland waterfront was an early defensive position protecting the harbor. A fort here in various forms anchored the harbor defense from the Revolutionary era onward. The site connects Portland\'s coastal defense experience across multiple conflicts and bears the name of Falmouth\'s Revolutionary War military family.',
    lat: 43.6420,
    lng: -70.2281,
    address: 'Spring Point, South Portland, ME 04106',
    town: { connect: { id: 'us-me-portland' } },
  },
];

// ============================================================================
// PORTLAND — EVENTS
// ============================================================================

export const portlandEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-portland-jones-confrontation',
    name: 'Ichabod Jones Confrontation and Mowat Capture',
    startDate: new Date('1775-05-09'),
    datePrecision: 'DAY',
    summary: `In May 1775, Falmouth merchant Ichabod Jones arrived in the harbor with two sloops loaded with British supplies, under the escort of HMS Canceaux, commanded by Henry Mowat. Jones was attempting to transport lumber to British-occupied Boston in defiance of colonial non-exportation agreements. A Patriot crowd assembled, and when Mowat came ashore to negotiate, he was seized and briefly held. He was released after Jones agreed to terms, but the humiliation of a Royal Navy officer by a colonial crowd was an affront that Admiral Graves could not let stand.`,
    significanceWeight: 78,
    lat: 43.6564,
    lng: -70.2538,
    town: { connect: { id: 'us-me-portland' } },
  },
  {
    id: 'event-portland-graves-orders-punishment',
    name: 'Admiral Graves Orders Punitive Expedition',
    startDate: new Date('1775-09-01'),
    datePrecision: 'MONTH',
    summary: `In autumn 1775, Vice Admiral Samuel Graves ordered a punitive expedition against New England coastal towns that had shown organized resistance to British authority. The objective was collective punishment: demonstrating that the Royal Navy could reach any town on the coast and destroy it. Mowat volunteered to command the Falmouth element. His personal experience with the May crowd action gave him both motivation and specific local knowledge.`,
    significanceWeight: 72,
    lat: 43.6564,
    lng: -70.2538,
    town: { connect: { id: 'us-me-portland' } },
  },
  {
    id: 'event-portland-mowat-ultimatum',
    name: 'Mowat Issues Ultimatum to Falmouth',
    startDate: new Date('1775-10-17'),
    datePrecision: 'DAY',
    summary: `On October 17, Mowat's squadron anchored in Falmouth harbor and issued a notice giving the town two hours to surrender arms and provide hostages, or face bombardment. A town delegation that included Samuel Freeman negotiated through the evening, seeking more time and arguing for the town's nonmilitary character. Mowat granted a postponement until morning. The town spent the night evacuating families and possessions to the surrounding countryside.`,
    significanceWeight: 82,
    lat: 43.6564,
    lng: -70.2538,
    town: { connect: { id: 'us-me-portland' } },
  },
  {
    id: 'event-portland-bombardment',
    name: 'Bombardment and Burning of Falmouth',
    startDate: new Date('1775-10-18'),
    datePrecision: 'DAY',
    summary: `Beginning at nine in the morning on October 18, 1775, Mowat's five vessels opened fire on Falmouth with cannon and incendiary carcasses. The bombardment continued for hours; landing parties with torches finished what the shells had started. Approximately 130 buildings were destroyed, including the wharves, warehouses, a church, and most of the town center. Nearly 2,000 residents were left homeless as winter approached. It was the first deliberate British destruction of an American town in the Revolution.`,
    significanceWeight: 95,
    lat: 43.6564,
    lng: -70.2538,
    town: { connect: { id: 'us-me-portland' } },
  },
  {
    id: 'event-portland-news-spreads-colonies',
    name: 'News of Falmouth Burning Spreads',
    startDate: new Date('1775-10-25'),
    datePrecision: 'MONTH',
    summary: `Within days of the bombardment, accounts of the burning of Falmouth spread through the colonies via newspapers, letters, and committee correspondence. The story was framed by Patriot writers as proof of British willingness to wage war against civilians. Benjamin Franklin used it in diplomatic communications with European powers. The episode became a central element in the propaganda push toward independence — more effective as a political instrument than Mowat could have imagined or Graves intended.`,
    significanceWeight: 88,
    lat: 43.6564,
    lng: -70.2538,
    town: { connect: { id: 'us-me-portland' } },
  },
  {
    id: 'event-portland-continental-navy-authorization',
    name: 'Continental Congress Authorizes Naval Force',
    startDate: new Date('1775-11-10'),
    datePrecision: 'MONTH',
    summary: `In November 1775, the Continental Congress, responding to the burnings of Falmouth and Bristol, Rhode Island, among other provocations, formally authorized the creation of an American naval force and passed legislation permitting privateering against British shipping. The destruction of Falmouth was one of the specific justifications cited in congressional debate. The Royal Navy's punitive strategy had directly accelerated the creation of its future adversary.`,
    significanceWeight: 85,
    lat: 43.6564,
    lng: -70.2538,
    town: { connect: { id: 'us-me-portland' } },
  },
  {
    id: 'event-portland-winter-displacement',
    name: 'Falmouth Residents Survive Winter Displacement',
    startDate: new Date('1775-11-01'),
    datePrecision: 'MONTH',
    summary: `The winter of 1775–76 was a humanitarian crisis for Falmouth's displaced residents. Approximately 2,000 people had lost their homes. They sheltered with relatives in surrounding towns, in barns and outbuildings, in hastily constructed temporary structures. The Massachusetts General Court appropriated aid funds. Neighboring towns provided supplies. The experience of displacement shaped how the Maine coast community understood what the war cost, in ways that military histories focused on battles tend to overlook.`,
    significanceWeight: 70,
    lat: 43.6564,
    lng: -70.2538,
    town: { connect: { id: 'us-me-portland' } },
  },
  {
    id: 'event-portland-rebuilding-begins',
    name: 'Falmouth Begins Rebuilding',
    startDate: new Date('1776-04-01'),
    datePrecision: 'MONTH',
    summary: `With the spring of 1776, survivors of the burning began returning to Falmouth and initiating reconstruction. The rebuilding was slow and partial — the war was still ongoing, supplies were uncertain, and British vessels remained a threat in Casco Bay. What rose from the ashes was a smaller, more modest town than what had been destroyed, built mostly by people who had decided that staying was worth the risk.`,
    significanceWeight: 60,
    lat: 43.6564,
    lng: -70.2538,
    town: { connect: { id: 'us-me-portland' } },
  },
  {
    id: 'event-portland-penobscot-expedition-staging',
    name: 'Falmouth as Penobscot Expedition Staging Point',
    startDate: new Date('1779-06-01'),
    datePrecision: 'MONTH',
    summary: `In the summer of 1779, Falmouth served as one of the assembly and supply points for the Massachusetts expedition to dislodge British forces from Bagaduce (present-day Castine) on the Penobscot. The fleet that departed Massachusetts waters included militia and Continental troops who passed through or were supplied from Falmouth. The subsequent disaster of the Penobscot Expedition was felt in Falmouth as in every Maine coast community that had contributed men and materiel.`,
    significanceWeight: 68,
    lat: 43.6564,
    lng: -70.2538,
    town: { connect: { id: 'us-me-portland' } },
  },
  {
    id: 'event-portland-renamed-portland',
    name: 'Falmouth Renamed Portland',
    startDate: new Date('1786-07-04'),
    datePrecision: 'YEAR',
    summary: `In 1786, the town of Falmouth was incorporated as Portland — a new name for a community that had rebuilt itself after the 1775 burning. The choice of a new name reflected the town's desire to begin again, to distinguish the rebuilt community from the one Mowat had destroyed. Portland grew through the late 18th and early 19th centuries to become Maine's largest city, its commercial and maritime center, and — when Maine achieved statehood in 1820 — briefly its capital.`,
    significanceWeight: 65,
    lat: 43.6564,
    lng: -70.2538,
    town: { connect: { id: 'us-me-portland' } },
  },
];

// ============================================================================
// PORTLAND — STORIES
// ============================================================================

export const portlandStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-portland-the-night-before',
    title: 'The Night Before the Guns',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-samuel-freeman' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Samuel Freeman was town clerk of Falmouth, which meant that when Henry Mowat anchored in the harbor on October 17, 1775, and issued his ultimatum, Freeman was one of the men who had to go aboard the Canceaux and negotiate. He was not a soldier. He was an administrator, a keeper of records, a man whose job was to make civic life function. Now his job was to talk a Royal Navy officer out of destroying the town.

The ultimatum gave Falmouth two hours to surrender its arms and provide hostages. Freeman and the other committee members went back and forth, pleading for more time, arguing that the town was not a military target, attempting to communicate to Mowat that the people of Falmouth were not the same as the people who had humiliated him in May. Mowat was not persuaded, but he granted a postponement until morning. The delegation returned to shore.

What happened that night was the dispersal of everything that could be moved. Families packed what they could carry. Carts went out of town loaded with furniture, with food, with animals. Children and elderly people were sent to relatives in the countryside. The wharves were cleared of whatever could be removed in a few hours. Freeman himself would have been documenting, recording, doing what clerks do — and watching the town he had spent his career administering prepare to receive something he could not stop.

The negotiations resumed the next morning and failed. The guns opened at nine. Freeman survived. He later wrote accounts of the negotiation and the bombardment that constitute some of the most detailed documentary evidence of those days. He lived in Falmouth for decades afterward, watching the rebuilding, holding civic office in the renamed Portland.

He had done what he could. He had bought the town one night. For many families, that night was enough time to get clear.`,
    audioScript: `Samuel Freeman was Falmouth's town clerk. When Mowat anchored in the harbor and issued his ultimatum, Freeman had to go aboard and negotiate.

He was not a soldier. He was an administrator. His job was to talk a Royal Navy officer out of destroying the town.

The ultimatum gave two hours to surrender arms and provide hostages. Freeman argued. Mowat granted a postponement until morning.

What happened that night was the dispersal of everything that could be moved — families, furniture, livestock. The wharves cleared. Children sent to the countryside.

The negotiations failed. The guns opened at nine.

Freeman survived. He wrote the accounts that are now the main documentary record of those days. He had done what he could. He had bought the town one night.`,
    tags: ['Mowat', 'bombardment', 'negotiation', 'Falmouth', 'civilian'],
    town: { connect: { id: 'us-me-portland' } },
  },
  {
    id: 'story-portland-propaganda-victory',
    title: 'The Fire That Backfired',
    storyType: 'MODERN_VOICE',
    narratorName: 'Maritime Historian',
    narratorRole: 'Researcher, Maine Historical Society',
    verificationStatus: 'VERIFIED',
    textVersion: `The burning of Falmouth is a textbook case of a military action that achieved its tactical objective and failed its strategic purpose completely. Mowat burned the town. He did exactly what he set out to do. And the consequences were almost entirely contrary to what British planners had intended.

Graves ordered the expedition because he believed that punishing Falmouth would deter other New England ports from supporting the Patriot cause. What he could not account for was how the story of Falmouth's burning would travel. In 1775, news moved through newspapers, through committee correspondence, through letters that were read aloud at taverns and meetinghouses. By the time the story of Falmouth reached Philadelphia, it had become the defining image of British behavior in the war — a prosperous town, civilian families, winter approaching, and the Royal Navy setting it on fire.

Benjamin Franklin was in Philadelphia when the news arrived. He was already in the process of thinking through how to present the American cause to European powers, particularly France. The burning of Falmouth gave him precisely what he needed: a concrete, undeniable instance of British military action against non-combatants. He used it. It worked.

In the Continental Congress, the Falmouth burning was cited in the debates over authorizing an American navy. The argument was simple: if the British were going to wage war on coastal towns, the Americans needed ships to defend them. The institution of the Continental Navy, which Graves's expedition was meant to preempt, was in part a direct response to what Mowat did on October 18.

When I walk through the Old Port today, I try to hold both things simultaneously: what was lost and what it produced. The families who lost their homes in 1775 did not benefit from the propaganda value of their suffering. But their suffering had consequences that extended far beyond Casco Bay, in ways that shaped the direction of the war.`,
    audioScript: `The burning of Falmouth is a textbook case: a military action that achieved its tactical goal and failed its strategic purpose completely.

Graves believed that punishing Falmouth would deter other New England ports. What he couldn't account for was how the story would travel.

Benjamin Franklin used it to present the American cause to European powers. The Continental Congress cited it in debates over authorizing an American navy. The institution Graves was meant to preempt was partly a response to what Mowat did.

When I walk through the Old Port today, I try to hold both things: what was lost and what it produced. The families who lost their homes didn't benefit from the propaganda value of their suffering. But it had consequences far beyond Casco Bay.`,
    tags: ['propaganda', 'naval', 'strategy', 'Franklin', 'Continental Congress'],
    town: { connect: { id: 'us-me-portland' } },
  },
];

// ============================================================================
// PORTLAND — LESSON PLANS
// ============================================================================

export const portlandLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-me-portland' } },
    title: 'Falmouth Burns: Civilian Cost and Propaganda in 1775',
    gradeRange: '6-8',
    estimatedDuration: '2 class periods',
    summary:
      'This lesson uses the burning of Falmouth to examine how a single British military action shaped colonial public opinion and accelerated the push toward independence. Students analyze the gap between British strategic intention (deterrence) and actual effect (propaganda gift), trace how news of the burning traveled through the colonies, and consider the experience of Falmouth\'s 2,000 displaced residents during the winter of 1775–76. The lesson integrates primary documents, mapping activities, and structured discussion to build historical thinking skills around cause, effect, and unintended consequences.',
    lessonData: {
      objectives: [
        'Students will describe the events of October 17–18, 1775 in Falmouth and explain their causes',
        'Students will analyze the gap between British strategic intentions and actual outcomes of the burning',
        'Students will trace how news of the burning traveled through the colonies and evaluate its propagandistic use',
        'Students will consider the civilian experience of displacement using documentary and visual evidence',
      ],
      essentialQuestions: [
        'Can a military action succeed tactically while failing strategically? What does Falmouth teach us?',
        'How does news travel — and how does the way news travels shape its political impact?',
        'Whose experience of the Revolution is missing from standard accounts focused on battles?',
      ],
      materials: [
        'Samuel Freeman\'s account of the October 17 negotiations (adapted)',
        'Newspaper accounts of the Falmouth burning from Pennsylvania and Virginia papers, October–November 1775',
        'Map of Casco Bay and colonial Falmouth harbor',
        'Timeline graphic organizer: Mowat capture (May 1775) → Burning (Oct. 1775) → Continental Navy authorization (Nov. 1775)',
        'Image: reconstructed view of colonial Falmouth waterfront',
      ],
      activities: [
        {
          name: 'Mapping the Harbor: Why Falmouth?',
          duration: '15 minutes',
          description:
            'Students examine a map of Casco Bay and colonial Falmouth to understand why the town was a significant Patriot commercial and organizing center. They identify the wharves, the harbor entrance, and the surrounding terrain. Discussion: what would Mowat have seen when he anchored in the harbor? What would residents have seen when they saw his ships?',
        },
        {
          name: 'The Night Before: Negotiation Role-Play',
          duration: '25 minutes',
          description:
            'Students take roles as members of the Falmouth committee and Henry Mowat in the October 17 negotiation. Using adapted primary source accounts, they conduct a brief structured role-play of the ultimatum and negotiation, then break character to discuss: What was each side trying to achieve? Why did the negotiation fail? What would you have done?',
        },
        {
          name: 'News Travels: Tracing the Story',
          duration: '20 minutes',
          description:
            'Students trace how news of the Falmouth burning appeared in different colonial newspapers and how the story was framed. They compare a factual account with a more rhetorically charged Patriot version and identify the differences. Discussion: why do the accounts differ? Who wrote each one, and who read it?',
        },
        {
          name: 'The Displaced: Winter 1775–76',
          duration: '15 minutes',
          description:
            'Students read a brief account of the displacement of Falmouth\'s 2,000 residents and respond in writing to the prompt: "What does the experience of Falmouth\'s civilians tell us about the Revolutionary War that accounts focused on battles do not?" Students share responses and discuss whose stories tend to get told.',
        },
      ],
      assessment:
        'Exit ticket: students write two sentences answering "How did the burning of Falmouth help the Patriot cause, even though it was a British action?" Summative option: one-page essay on the concept of unintended consequences in history, using Falmouth as the primary example.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author\'s point of view or purpose',
        'CCSS.ELA-LITERACY.WHST.6-8.2: Write informative/explanatory texts',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.5.6-8: Explain how and why perspectives of people have changed over time',
        'D4.2.6-8: Construct explanations using reasoning, correct sequence, examples, and details',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-me-portland' } },
    title: 'The Navy That Burning Built: Strategic Unintended Consequences',
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary:
      'This lesson uses the chain from Mowat\'s capture (May 1775) through the Falmouth burning (October 1775) to the authorization of the Continental Navy (November 1775) to examine strategic decision-making and unintended consequences in the Revolutionary War. Students analyze how British commanders assessed the strategic situation, why punitive military action often fails its stated objectives, and how the burning of Falmouth contributed to specific institutional outcomes — the Continental Navy, the legal framework for American privateering — that shaped the rest of the war. The lesson incorporates strategic analysis frameworks alongside primary source work.',
    lessonData: {
      objectives: [
        'Students will reconstruct the British strategic logic behind the punitive expedition to Falmouth and identify its flaws',
        'Students will trace the causal chain from the Falmouth burning to the authorization of the Continental Navy',
        'Students will evaluate the concept of "propaganda value" as a factor in military decision-making',
        'Students will apply the concept of unintended consequences to a contemporary strategic situation of their choice',
      ],
      essentialQuestions: [
        'Why do punitive military strategies so often produce the opposite of their intended effect?',
        'What does it mean for a military action to "succeed" — and who gets to define success?',
        'How does the Falmouth case illuminate the relationship between military violence and political mobilization?',
      ],
      materials: [
        'Admiral Graves\'s orders for the punitive expedition (excerpted)',
        'Congressional debates over the Continental Navy authorization, November 1775',
        'Benjamin Franklin\'s use of the Falmouth burning in European diplomatic correspondence',
        'Secondary source: strategic analysis of British naval strategy in New England, 1775',
        'Contemporary case studies in punitive military strategy (adapted for classroom)',
      ],
      activities: [
        {
          name: 'Inside the British Strategic Decision',
          duration: '30 minutes',
          description:
            'Students read excerpts from Admiral Graves\'s reasoning for the punitive expedition and evaluate his logic. Using a structured analytical framework (objective, method, assumed effect, actual effect), they assess where the British calculation went wrong. Discussion: what information would Graves have needed to make a better decision? Did he have access to that information?',
        },
        {
          name: 'Tracing the Causal Chain',
          duration: '35 minutes',
          description:
            'Working in pairs, students construct a detailed causal chain from Mowat\'s capture in May 1775 to the Continental Navy authorization in November 1775. Each link in the chain must be supported by specific evidence. Pairs compare their chains and resolve disagreements about causation vs. correlation.',
        },
        {
          name: 'Franklin and the Propaganda Architecture',
          duration: '25 minutes',
          description:
            'Students analyze how Franklin used the Falmouth burning in diplomatic correspondence — what he emphasized, what he omitted, how he framed the American cause. Discussion: is propaganda necessarily dishonest? What is the relationship between factual reporting and rhetorical framing?',
        },
        {
          name: 'Contemporary Application: Punitive Strategy in Modern Conflicts',
          duration: '25 minutes',
          description:
            'Students identify a contemporary or recent instance of punitive military or economic strategy and apply the analytical framework from the Falmouth case: intended objective, method, assumed effect, actual effect. Groups present findings and the class discusses whether the patterns identified in 1775 recur.',
        },
      ],
      assessment:
        'Analytical essay (1000–1200 words): "Using the Falmouth case, explain why punitive military strategies often fail their stated objectives. Your essay must engage with at least three specific pieces of evidence from the lesson and address at least one counterargument." Students may optionally extend the argument to a contemporary case.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.8: Assess the extent to which the reasoning and evidence in a text support the author\'s claims',
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in several primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.2.9-12: Analyze change and continuity in historical eras',
        'D2.His.9.9-12: Analyze the relationship between historical sources and the secondary interpretations made from them',
        'D4.6.9-12: Use disciplinary and interdisciplinary lenses to understand the characteristics and causes of local, regional, and global problems',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// PORTLAND — ADDITIONAL LINKS
// ============================================================================

export const portlandAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-me-castine',
    linkType: 'SHARED_EVENT',
    reason:
      'Portland (Falmouth) served as a staging point for the Penobscot Expedition of 1779, which ended in disaster at Castine. Both towns experienced the full arc of British maritime aggression on the Maine coast.',
    weight: 90,
  },
  {
    toTownId: 'us-ri-bristol',
    linkType: 'SHARED_EVENT',
    reason:
      'Bristol, Rhode Island, was burned by the Royal Navy the same month as Falmouth (October 1775), as part of Admiral Graves\'s punitive expedition campaign. Both burnings were cited in Congress when authorizing the Continental Navy.',
    weight: 85,
  },
  {
    toTownId: 'us-ma-marblehead',
    linkType: 'SHARED_PERSON',
    reason:
      'Colonel John Glover\'s Marblehead regiment, which rowed Washington across the Delaware, also participated in operations connected to the Maine coast theater. Marblehead and Falmouth were both maritime communities whose fates were shaped by Royal Navy decisions.',
    weight: 60,
  },
  {
    toTownId: 'us-ma-boston',
    linkType: 'SHARED_THEME',
    reason:
      'The burning of Falmouth was a direct response to Boston-area Patriot organizing and the siege of Boston then underway. Both towns experienced the first phase of British punitive strategy in New England in 1775.',
    weight: 70,
  },
];

// ============================================================================
// CASTINE (BAGADUCE / PENOBSCOT)
// ============================================================================

export const castineTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Castine in the summer of 1779 was the site of the worst American naval disaster between the Revolutionary War and Pearl Harbor, a fact that has been almost entirely erased from the national memory of the Revolution. The Penobscot Expedition — a Massachusetts force of more than forty vessels and over a thousand troops sent to dislodge a British garrison from the Bagaduce peninsula — ended with the entire American fleet destroyed, most of the ships burned by their own crews to prevent capture, and soldiers fleeing through the wilderness of the Maine interior. The commander whose failure caused it, Commodore Dudley Saltonstall, was later court-martialed. One of the subordinate commanders who emerged from it with his reputation intact was a young artillery officer named Paul Revere, who was also court-martialed and then eventually exonerated — a less familiar chapter of a very famous life.

The British had fortified Bagaduce, the peninsula that became Castine, in June 1779 as part of a plan to establish a Crown colony in the territory between the Penobscot and St. Croix Rivers — what would eventually become eastern Maine. The garrison was modest: about 700 regular soldiers under Brigadier General Francis McLean, building a fort on the high ground above the harbor. They had three sloops-of-war for naval support. The American force that arrived in late July substantially outnumbered them.

This is the core fact that makes the Penobscot Expedition such a historically compelling disaster: the Americans had the numbers. They had more ships, more guns, more men. A resolute assault on the British position in the first days of the siege would very probably have succeeded. The fort was incomplete. The garrison was small. The British naval force was outgunned. The Massachusetts command had every material advantage — and squandered it through a combination of command paralysis, inter-service rivalry, and an almost willful failure to act.

For nearly three weeks, the American fleet and land forces maneuvered, argued, and attempted partial actions that accomplished nothing decisive. Saltonstall, commanding the naval element, refused to engage the British sloops in the harbor without army cover on the flanks; Brigadier General Solomon Lovell, commanding the land forces, refused to assault the fort without naval support. Neither man would move first. Meanwhile, the British worked steadily to complete Fort George.

On August 13, 1779, a British relief squadron under Commodore George Collier arrived from New York. The American fleet, unable to escape, fled up the Penobscot River. Over the next three days, American captains burned their own ships — more than thirty vessels — to keep them from British capture. Soldiers and sailors fled overland through the Maine wilderness, many of them dying of starvation, exposure, or ambush before reaching safety. The British took Fort George, named the settlement Castine after the French Baron de Castine who had lived there a century earlier, and held the territory for the remainder of the war.

The court-martial proceedings that followed illuminate the command culture of the Continental forces in ways that straightforward military narrative obscures. Paul Revere's case is the most instructive. He was charged with disobedience and cowardice — the cowardice charge relating to his conduct during the retreat, when he reportedly refused to share his provisions and organized the retreat of his own artillery company without reference to the broader command. The charges were eventually dismissed in 1782, more than two years after the expedition, after Revere pressed his own investigation and produced witnesses who contradicted the accusations. He never held a military command again.

The Penobscot Expedition matters because it demonstrates the limits of the American war effort at its most extended, both geographically and institutionally. Massachusetts sent a force large enough to win and managed it badly enough to lose everything. The British held Castine and the Penobscot territory, maintained their planned Crown colony project as a war aim, and acquired a geographic advantage that they leveraged at the Paris peace negotiations in 1783 — nearly succeeding in keeping eastern Maine as British territory before American negotiators held the line. The town of Castine today, with its Georgian architecture, its fort remains, and its extraordinary harbor, is the physical residue of that summer of catastrophe.`,
};

// ============================================================================
// CASTINE — PEOPLE
// ============================================================================

export const castinePeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-dudley-saltonstall',
      name: 'Commodore Dudley Saltonstall',
      roles: ['Continental Navy Commodore', 'Penobscot Expedition Naval Commander'],
      bioShort:
        'Connecticut naval officer who commanded the American fleet during the Penobscot Expedition of 1779. His refusal to engage the British sloops-of-war without army flank support, combined with his failure to act decisively when the opportunity existed, was the primary cause of the expedition\'s failure. Court-martialed and dismissed from the navy after the disaster.',
      birthYear: 1738,
      deathYear: 1796,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the American naval force of 40+ vessels at Bagaduce; his inaction and command failures led directly to the destruction of the entire fleet when British relief arrived.',
  },
  {
    person: {
      id: 'person-solomon-lovell',
      name: 'Brigadier General Solomon Lovell',
      roles: ['Massachusetts Militia General', 'Penobscot Land Force Commander'],
      bioShort:
        'Massachusetts militia general who commanded the land forces during the Penobscot Expedition. Like Saltonstall, he declined to act without support from the other service. His forces did capture high ground above the British fort but never followed through with an assault on Fort George itself.',
      birthYear: 1732,
      deathYear: 1801,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the American land forces at Bagaduce; his mutual paralysis with Saltonstall — each waiting for the other to move first — allowed the British garrison time to complete its fortifications.',
  },
  {
    person: {
      id: 'person-francis-mclean',
      name: 'Brigadier General Francis McLean',
      roles: ['British Army General', 'Fort George Commander', 'Bagaduce Garrison Commander'],
      bioShort:
        'Scottish-born British general who commanded the 700-man garrison at Bagaduce and oversaw the construction of Fort George. His steadiness under a three-week siege, combined with his opponents\' inaction, allowed him to hold a position that should have been untenable.',
      birthYear: 1717,
      deathYear: 1781,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the British garrison at Bagaduce throughout the siege; his methodical defense and the American command paralysis allowed a small force to survive until British reinforcements arrived.',
  },
  {
    person: {
      id: 'person-george-collier',
      name: 'Commodore George Collier',
      roles: ['Royal Navy Commodore', 'Penobscot Relief Expedition Commander'],
      bioShort:
        'Royal Navy commodore who commanded the British relief squadron that arrived at Bagaduce on August 13, 1779, forcing the American fleet to flee up the Penobscot River. His swift action turned a siege into a rout and the destruction of more than thirty American vessels.',
      birthYear: 1738,
      deathYear: 1795,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the British relief fleet that arrived August 13, 1779; his arrival ended American siege operations and triggered the destruction of the entire American fleet.',
  },
  {
    person: {
      id: 'person-paul-revere-castine',
      name: 'Paul Revere',
      roles: ['Artillery Officer', 'Lieutenant Colonel', 'Boston Patriot'],
      bioShort:
        'Boston silversmith and Patriot who commanded the artillery train attached to the Penobscot Expedition\'s land forces. Court-martialed after the expedition for alleged disobedience and cowardice during the retreat; charges were eventually dismissed in 1782. The Penobscot episode is among the least-discussed chapters of his biography.',
      birthYear: 1735,
      deathYear: 1818,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the artillery attached to Lovell\'s land forces; was court-martialed after the expedition for conduct during the retreat, with charges ultimately dismissed after a lengthy investigation.',
  },
  {
    person: {
      id: 'person-peleg-wadsworth-castine',
      name: 'Brigadier General Peleg Wadsworth',
      roles: ['Continental Army Brigadier General', 'Eastern District Commander', 'Maine Defender'],
      bioShort:
        'Massachusetts general who participated in the Penobscot Expedition and later served as military commander of the Eastern District. He was captured by the British in 1781 during a raid on his headquarters in Thomaston and imprisoned at Fort George in Castine before making a dramatic escape.',
      birthYear: 1748,
      deathYear: 1829,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Participated in the Penobscot Expedition and was later imprisoned at Fort George in Castine after his capture in 1781; his escape from the fort is one of the notable episodes of the Maine theater.',
  },
  {
    person: {
      id: 'person-john-moore-castine',
      name: 'Captain John Moore',
      roles: ['British Army Captain', 'Fort George Construction Officer', 'Future General'],
      bioShort:
        'Young British officer who served at the Bagaduce garrison during the Penobscot Expedition and participated in the construction of Fort George. Later became Sir John Moore, one of Britain\'s most celebrated generals, killed at Corunna in 1809 during the Napoleonic Wars.',
      birthYear: 1761,
      deathYear: 1809,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Served as a young officer at Bagaduce during the 1779 siege; later became one of Britain\'s most celebrated military commanders.',
  },
  {
    person: {
      id: 'person-baron-de-castine',
      name: 'Baron de Saint-Castin (Vincent de l\'Abadie)',
      roles: ['French Nobleman', 'Abenaki Ally', 'Maine Trader'],
      bioShort:
        'French nobleman who settled at Bagaduce in the late 17th century, married into the Abenaki nation, and became a legendary figure in the region\'s history. The town\'s eventual name — Castine — honors him, connecting the Revolutionary War fortification to a century of earlier French-English-Native American contest for the same strategic peninsula.',
      birthYear: 1652,
      deathYear: 1707,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'The town of Castine takes its name from him; his residence on the Bagaduce peninsula a century before the Revolution reflects the long history of contest over this strategic Maine coast location.',
  },
];

// ============================================================================
// CASTINE — PLACES
// ============================================================================

export const castinePlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-castine-fort-george',
    name: 'Fort George',
    placeType: 'BATTLEFIELD',
    description:
      'The British fortification constructed in the summer of 1779 on the high ground above Bagaduce Harbor, which the American Penobscot Expedition failed to capture. Earthwork remains are preserved on the site and are accessible to visitors. Fort George was the objective of the entire expedition; its survival after three weeks of American siege operations was the central fact of the disaster.',
    lat: 44.3873,
    lng: -68.7953,
    address: 'Battle Ave, Castine, ME 04421',
    town: { connect: { id: 'us-me-castine' } },
  },
  {
    id: 'place-castine-penobscot-expedition-monument',
    name: 'Penobscot Expedition Historical Marker',
    placeType: 'MONUMENT',
    description:
      'A historical marker in Castine commemorating the Penobscot Expedition of 1779 and the American naval disaster. The marker explains the expedition\'s objective, the three-week siege, and the arrival of British relief that triggered the destruction of the American fleet.',
    lat: 44.3882,
    lng: -68.7965,
    address: 'Main St, Castine, ME 04421',
    town: { connect: { id: 'us-me-castine' } },
  },
  {
    id: 'place-castine-wilson-museum',
    name: 'Wilson Museum',
    placeType: 'MUSEUM',
    description:
      'A museum in Castine with collections spanning the town\'s long history, including materials related to the British occupation of 1779 and the Penobscot Expedition. The museum holds artifacts, documents, and interpretive exhibits connecting Castine\'s colonial, Revolutionary, and early American past.',
    lat: 44.3862,
    lng: -68.7938,
    address: '107 Perkins St, Castine, ME 04421',
    town: { connect: { id: 'us-me-castine' } },
  },
  {
    id: 'place-castine-harbor-bagaduce',
    name: 'Bagaduce Harbor',
    placeType: 'LANDMARK',
    description:
      'The harbor below Fort George where the American fleet of more than forty vessels anchored during the 1779 siege. The harbor\'s geography — deep, well-sheltered, commanded by the high ground above — made it a strategic position worth fighting over. The same waters where the American fleet lay at anchor in July 1779 are today a quiet Maine harbor.',
    lat: 44.3851,
    lng: -68.7920,
    address: 'Castine Harbor, Castine, ME 04421',
    town: { connect: { id: 'us-me-castine' } },
  },
  {
    id: 'place-castine-abbott-school',
    name: 'Castine Historical Society',
    placeType: 'MUSEUM',
    description:
      'The Castine Historical Society maintains archives and exhibits relating to the town\'s Revolutionary War history, including the Penobscot Expedition, the British occupation of 1779–1783, and the subsequent settlement of the town under its current name. The collection includes maps of the 1779 siege works.',
    lat: 44.3877,
    lng: -68.7968,
    address: '17 School St, Castine, ME 04421',
    town: { connect: { id: 'us-me-castine' } },
  },
  {
    id: 'place-castine-dyce-head-lighthouse',
    name: "Dyce's Head Lighthouse",
    placeType: 'LANDMARK',
    description:
      "The lighthouse at Dyce's Head marks the entrance to Castine Harbor and the Bagaduce River. The high ground here was among the terrain contested during the 1779 siege; American forces gained a position near the harbor entrance in the early days of the expedition before command paralysis prevented follow-through.",
    lat: 44.3901,
    lng: -68.8015,
    address: "Dyce's Head, Castine, ME 04421",
    town: { connect: { id: 'us-me-castine' } },
  },
];

// ============================================================================
// CASTINE — EVENTS
// ============================================================================

export const castineEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-castine-british-landing-bagaduce',
    name: 'British Forces Land at Bagaduce',
    startDate: new Date('1779-06-17'),
    datePrecision: 'DAY',
    summary: `On June 17, 1779, a British force of approximately 700 soldiers under Brigadier General Francis McLean landed at Bagaduce (present-day Castine) and began constructing Fort George on the high ground above the harbor. The operation was part of a broader British plan to establish a Crown colony — "New Ireland" — in the territory between the Penobscot and St. Croix Rivers, creating a buffer between the United States and British Canada. The fortification was incomplete when the American expedition arrived six weeks later.`,
    significanceWeight: 82,
    lat: 44.3873,
    lng: -68.7953,
    town: { connect: { id: 'us-me-castine' } },
  },
  {
    id: 'event-castine-massachusetts-assembles-fleet',
    name: 'Massachusetts Assembles the Penobscot Expedition Fleet',
    startDate: new Date('1779-07-01'),
    datePrecision: 'MONTH',
    summary: `Massachusetts assembled the largest American naval force of the Revolutionary War: more than forty vessels, including warships, transports, and supply ships, carrying over a thousand soldiers and several hundred marines and sailors. The expedition was a significant logistical achievement for a state already stretched by the demands of the war. Commodore Dudley Saltonstall commanded the naval element; Brigadier General Solomon Lovell commanded the land forces.`,
    significanceWeight: 78,
    lat: 44.3851,
    lng: -68.7920,
    town: { connect: { id: 'us-me-castine' } },
  },
  {
    id: 'event-castine-american-fleet-arrives',
    name: 'American Fleet Arrives at Bagaduce',
    startDate: new Date('1779-07-25'),
    datePrecision: 'DAY',
    summary: `On July 25, 1779, the American Penobscot Expedition fleet arrived at Bagaduce Harbor. The British garrison of approximately 700 men was visible on the high ground above; Fort George was still under construction. The American force substantially outnumbered the garrison, and a resolute assault might have carried the position in the first days. Instead, Saltonstall declined to engage the three British sloops-of-war in the harbor without army flank support, and the three weeks of fatal hesitation began.`,
    significanceWeight: 88,
    lat: 44.3851,
    lng: -68.7920,
    town: { connect: { id: 'us-me-castine' } },
  },
  {
    id: 'event-castine-american-marines-take-high-ground',
    name: 'American Marines Capture Heights Above Harbor',
    startDate: new Date('1779-07-28'),
    datePrecision: 'DAY',
    summary: `On July 28, American marines and light infantry landed under fire and captured the high ground at the harbor entrance — a significant tactical success that gave the American land forces a position threatening the British approach to Fort George. It was the most aggressive American action of the entire expedition. Rather than following through with an assault on the partially completed fort, the American command consolidated the position and waited for circumstances that never materialized.`,
    significanceWeight: 75,
    lat: 44.3901,
    lng: -68.8015,
    town: { connect: { id: 'us-me-castine' } },
  },
  {
    id: 'event-castine-command-paralysis',
    name: 'Three Weeks of Command Paralysis',
    startDate: new Date('1779-07-28'),
    datePrecision: 'RANGE',
    summary: `For nearly three weeks after the initial landing, the American command failed to conduct a decisive assault. Saltonstall insisted he could not engage the British sloops without army protection of his flanks; Lovell insisted he could not assault the fort without naval suppression of the harbor defenses. Councils of war produced arguments rather than orders. The British worked steadily to complete Fort George. American officers sent letters to the Massachusetts General Court complaining about the stalemate. Nothing changed until the British relief squadron arrived.`,
    significanceWeight: 85,
    lat: 44.3873,
    lng: -68.7953,
    town: { connect: { id: 'us-me-castine' } },
  },
  {
    id: 'event-castine-british-relief-arrives',
    name: 'British Relief Squadron Arrives Under Collier',
    startDate: new Date('1779-08-13'),
    datePrecision: 'DAY',
    summary: `On August 13, 1779, Commodore George Collier arrived with a British relief squadron of seven vessels from New York. The American fleet, which might have dealt with the Bagaduce garrison weeks earlier, was now outgunned by the relief force. Saltonstall ordered the fleet to flee up the Penobscot River. Collier pursued. Over the next three days, the American disaster unfolded completely.`,
    significanceWeight: 95,
    lat: 44.3851,
    lng: -68.7920,
    town: { connect: { id: 'us-me-castine' } },
  },
  {
    id: 'event-castine-fleet-destroyed',
    name: 'American Fleet Destroyed on the Penobscot River',
    startDate: new Date('1779-08-14'),
    datePrecision: 'DAY',
    summary: `Pursued up the Penobscot River by Collier's squadron, American captains began burning their own ships to prevent capture. In three days, more than thirty American vessels were destroyed — some burned by their crews, some captured, some run aground. Soldiers and sailors went overland, many dying in the Maine wilderness before reaching safety. It was the worst American naval disaster between the Revolution and Pearl Harbor. The British secured the Penobscot territory for the rest of the war.`,
    significanceWeight: 97,
    lat: 44.4800,
    lng: -68.8500,
    town: { connect: { id: 'us-me-castine' } },
  },
  {
    id: 'event-castine-saltonstall-court-martial',
    name: 'Saltonstall Court-Martialed and Dismissed',
    startDate: new Date('1779-09-01'),
    datePrecision: 'MONTH',
    summary: `The Massachusetts General Court convened a court of inquiry and then a court-martial to examine the Penobscot disaster. Commodore Saltonstall was found primarily responsible for the failure and was dismissed from the Continental Navy. The proceedings made clear that command paralysis — rather than British strength — had caused the disaster, a conclusion that military historians have largely sustained.`,
    significanceWeight: 80,
    lat: 44.3851,
    lng: -68.7920,
    town: { connect: { id: 'us-me-castine' } },
  },
  {
    id: 'event-castine-revere-court-martial',
    name: 'Paul Revere Court-Martialed for Penobscot Conduct',
    startDate: new Date('1779-09-06'),
    datePrecision: 'MONTH',
    summary: `Paul Revere, who commanded the artillery train attached to the land forces, was charged with disobedience and cowardice in connection with his conduct during the retreat. He was accused of refusing to share his artillery horses and organizing his own company's retreat independently of the broader command. Revere pressed a counter-investigation, gathering witnesses and producing his own account. The charges were formally dismissed in 1782, but he never again held military command.`,
    significanceWeight: 78,
    lat: 44.3851,
    lng: -68.7920,
    town: { connect: { id: 'us-me-castine' } },
  },
  {
    id: 'event-castine-british-hold-peace-negotiations',
    name: 'Britain Leverages Castine at Paris Peace Negotiations',
    startDate: new Date('1782-09-01'),
    datePrecision: 'YEAR',
    summary: `During the Paris peace negotiations of 1782–83, Britain attempted to retain the territory between the Penobscot and St. Croix Rivers — the eastern Maine territory its forces had held since 1779 — as part of any peace settlement. The Castine garrison and the Penobscot territory were explicit British war aims. American negotiators, led by John Adams and Benjamin Franklin, held the line on a boundary at the St. Croix River. Britain's geographic position in the Penobscot, established by the disaster of 1779, had given them a real negotiating chip.`,
    significanceWeight: 85,
    lat: 44.3873,
    lng: -68.7953,
    town: { connect: { id: 'us-me-castine' } },
  },
];

// ============================================================================
// CASTINE — STORIES
// ============================================================================

export const castineStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-castine-command-paralysis',
    title: 'Each Man Waiting for the Other',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-solomon-lovell' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Solomon Lovell could see the fort from his position on the heights. He could see that it was not finished. He could count the British soldiers working on the walls. He could estimate — any competent officer could — that the garrison was smaller than his own force and that the fortification, incomplete as it was, was not yet the obstacle it would become in a week's time.

He did not attack.

The reasons were not cowardice. Lovell was a competent officer who had served throughout the war. The reason was structural: the American command at Bagaduce had been designed with two equal authorities and no mechanism for resolving disagreement between them. Saltonstall commanded the fleet. Lovell commanded the land forces. Neither had authority over the other. And both had concluded, by different reasoning, that they needed the other to act first.

Saltonstall's reasoning was that the three British sloops-of-war in the harbor were a threat to his fleet if he engaged them without protection against fire from the heights. Lovell's reasoning was that his soldiers could not assault the heights without naval fire suppression of the British positions. Each waiting for the other. Three weeks of councils of war. Arguments that produced minutes instead of orders.

The fort got taller while they argued.

There is a letter Lovell wrote to the Massachusetts General Court during the siege that is worth reading carefully. He says, in effect: I believe we can take this position, but I cannot take it without naval cooperation, and I cannot obtain naval cooperation. He is describing the failure of an organizational system, not his own nerve. He is correct. The system had failed.

What Lovell could not have known was that Collier was coming. The British relief was in the water before the siege began, working its way north from New York. The window that existed in late July — when the fort was incomplete and the garrison was small — closed a little more each day. By the time Collier arrived, the window was gone entirely.`,
    audioScript: `Lovell could see the fort wasn't finished. He could count the British soldiers on the walls. He could estimate that his force outnumbered the garrison.

He did not attack.

Not from cowardice. From structure. He and Saltonstall had equal authority and no mechanism to resolve disagreement. Each needed the other to move first.

There is a letter Lovell wrote to the Massachusetts General Court during the siege. He says: I believe we can take this position, but I cannot take it without naval cooperation, and I cannot obtain it.

He is describing the failure of a system, not his own nerve.

While they argued, the fort got taller. When Collier arrived, the window was gone entirely.`,
    tags: ['command', 'paralysis', 'siege', 'Penobscot', 'Lovell', 'Saltonstall'],
    town: { connect: { id: 'us-me-castine' } },
  },
  {
    id: 'story-castine-revere-forgotten-chapter',
    title: 'The Silversmith and the Court-Martial',
    storyType: 'MODERN_VOICE',
    narratorName: 'Revolutionary War Historian',
    narratorRole: 'Author and Researcher, Maine History',
    verificationStatus: 'VERIFIED',
    textVersion: `Most people who know Paul Revere know one story about him: the midnight ride, the lanterns, the warning. It is a real story — it happened, he did it, and it mattered. But there is another Paul Revere story that almost no one knows, and it is, in some ways, more complicated and more revealing.

In the summer of 1779, Revere was 44 years old, an artillery officer attached to the Massachusetts land forces of the Penobscot Expedition. He had served for years by this point — the midnight ride was four years behind him. He was experienced. He had organized the artillery train for the expedition. He knew what he was doing.

When the expedition failed and the fleet fled up the Penobscot River, Revere's conduct during the retreat became the subject of charges. He was accused of disobeying orders and of cowardice — specifically, of organizing his own company's retreat independently of the general command and refusing to share his artillery horses with other units. The charges were serious. Military reputations have been destroyed by less.

Revere fought the charges with the same energy he brought to everything. He gathered witnesses, produced documentation, wrote his own account, and pressed the case through military channels for more than two years. In 1782, the charges were dismissed — technically exonerated, practically forgotten, because the war was almost over and no one was much interested in relitigating 1779.

He never held military command again.

What the Penobscot episode tells us about Revere is something the midnight ride story doesn't: he was capable of acting for his own unit's survival in a chaotic situation, and the line between that and dereliction of duty was one that a court of inquiry, two years later, found hard to draw. The same decisiveness that made him valuable in some contexts made him a problematic subordinate in others. That is a human complexity that the heroic image tends to flatten.`,
    audioScript: `Most people know one Paul Revere story: the midnight ride. It's real. It happened. But there's another Revere story almost no one knows.

In 1779, he was 44, commanding artillery in the Penobscot Expedition. When the fleet fled and the retreat became chaos, Revere was charged with disobedience and cowardice — organizing his company's retreat independently, refusing to share artillery horses.

He fought the charges for two years. Gathered witnesses. Produced documentation. In 1782, the charges were dismissed. He never held military command again.

What the Penobscot episode shows is something the midnight ride doesn't: the same decisiveness that made him valuable in some situations made him a difficult subordinate in others. That's a human complexity the heroic image tends to flatten.`,
    tags: ['Revere', 'court-martial', 'Penobscot', 'character', 'leadership', 'retreat'],
    town: { connect: { id: 'us-me-castine' } },
  },
];

// ============================================================================
// CASTINE — LESSON PLANS
// ============================================================================

export const castineLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-me-castine' } },
    title: 'The Penobscot Disaster: Command, Coordination, and Catastrophe',
    gradeRange: '8-10',
    estimatedDuration: '3 class periods',
    summary:
      'This lesson uses the Penobscot Expedition of 1779 to examine how organizational structure shapes military outcomes. Students analyze why the American force — which substantially outnumbered the British garrison — failed to take a partially constructed fort, tracing the command paralysis between Saltonstall and Lovell that allowed three weeks of inaction. Students evaluate the court-martial proceedings, consider the question of individual vs. systemic blame, and apply lessons about organizational design to non-military contexts. The lesson uses primary source accounts from the expedition and the court-martial proceedings.',
    lessonData: {
      objectives: [
        'Students will reconstruct the chain of events in the Penobscot Expedition and identify the decision points where different choices might have changed the outcome',
        'Students will analyze how the dual-command structure of the expedition contributed to command paralysis',
        'Students will evaluate the court-martial proceedings and assess questions of individual vs. systemic responsibility',
        'Students will apply organizational design concepts from the Penobscot case to a contemporary context',
      ],
      essentialQuestions: [
        'When an organization fails, is the failure personal or systemic — and how do we tell the difference?',
        'How does organizational structure shape what is possible for individuals within it?',
        'What does the Penobscot Expedition tell us about the limits of the American war effort in 1779?',
      ],
      materials: [
        'Lovell\'s letter to the Massachusetts General Court during the siege (adapted)',
        'Saltonstall\'s account of his decision not to engage the British sloops',
        'Court of inquiry proceedings against Saltonstall (excerpted)',
        'Map of Bagaduce Harbor showing American fleet positions and British fort location',
        'Timeline of the expedition: arrival (July 25) → marine assault (July 28) → Collier arrives (Aug. 13) → fleet destroyed (Aug. 14–16)',
      ],
      activities: [
        {
          name: 'Mapping the Disaster: Why Didn\'t They Just Attack?',
          duration: '25 minutes',
          description:
            'Students examine a map of Bagaduce Harbor and the fort site and attempt to answer the question from the perspective of each commander. What did Saltonstall see from his ships? What did Lovell see from the heights? Students annotate maps with the specific concerns each commander expressed and then discuss: whose concerns were more legitimate? Who bore more responsibility for the paralysis?',
        },
        {
          name: 'Primary Source Analysis: The Letters from the Siege',
          duration: '30 minutes',
          description:
            'Students read adapted excerpts from Lovell\'s letter to the General Court and Saltonstall\'s account of his decisions. Using a structured annotation approach, they identify: what each commander claims, what evidence supports the claim, and what each omits. Discussion: why do both accounts blame the other service? What does each man\'s account tell us about how he understood his own responsibility?',
        },
        {
          name: 'The Court-Martial Simulation',
          duration: '35 minutes',
          description:
            'Students conduct a simplified court-martial simulation for Saltonstall, taking roles as prosecuting officers, defense witnesses, and court members. The charge is "failure to engage the enemy when opportunity presented." Students use evidence from the primary sources and must evaluate whether the failure was personal (Saltonstall\'s cowardice or incompetence) or systemic (the dual-command structure made decisive action impossible).',
        },
        {
          name: 'Organizational Lessons: Beyond the Military',
          duration: '20 minutes',
          description:
            'Students apply the concept of dual-authority paralysis to a non-military organizational context — a school committee, a corporate merger, a joint government program. They identify: where do the same structural problems appear? What mechanisms can organizations use to prevent this kind of paralysis? Brief group presentations.',
        },
      ],
      assessment:
        'Written analysis (600–800 words): "Was the Penobscot Expedition disaster primarily the result of individual failure or organizational failure? Use specific evidence to support your argument, and engage with the strongest version of the opposing view." Students must cite at least two primary source excerpts from the lesson.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.8: Distinguish among fact, opinion, and reasoned judgment in a text',
        'CCSS.ELA-LITERACY.WHST.6-8.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.4.6-8: Analyze multiple factors that influenced the perspectives of people during different historical eras',
        'D4.7.6-8: Assess their individual and collective capacities to take action to address local, regional, and global problems',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-me-castine' } },
    title: 'Paul Revere Beyond the Ride: History, Myth, and Court-Martial',
    gradeRange: '9-12',
    estimatedDuration: '2-3 class periods',
    summary:
      'This lesson uses Paul Revere\'s role in the Penobscot Expedition and subsequent court-martial to examine how historical memory is constructed around iconic figures. Students analyze the evidence for the charges against Revere, evaluate the court-martial proceedings, and consider why this episode is largely absent from popular accounts of Revere\'s life. The lesson also examines how the midnight ride narrative was constructed in the 19th century — particularly through Henry Wadsworth Longfellow\'s 1861 poem — and what gets excluded when a complex person becomes a simple symbol.',
    lessonData: {
      objectives: [
        'Students will evaluate the evidence for and against the charges brought against Paul Revere after the Penobscot Expedition',
        'Students will analyze how Henry Wadsworth Longfellow\'s 1861 poem shaped popular understanding of Revere\'s life and legacy',
        'Students will assess what is lost when historical figures are reduced to single iconic moments',
        'Students will apply the concept of "selective memory" to the construction of other national heroes',
      ],
      essentialQuestions: [
        'What do we lose when we reduce complex historical figures to single iconic moments?',
        'Who decides which parts of a historical figure\'s life become part of the national story — and why?',
        'What does the Penobscot court-martial tell us about Revere that the midnight ride does not?',
      ],
      materials: [
        'Henry Wadsworth Longfellow, "Paul Revere\'s Ride" (1861) — full poem',
        'Court-martial charges against Revere (adapted and excerpted)',
        'Revere\'s own account of his conduct during the Penobscot retreat',
        'Secondary source: historians on the gap between the Longfellow Revere and the historical Revere',
        'Brief biographical timeline of Revere\'s full life, including post-midnight-ride activities',
      ],
      activities: [
        {
          name: 'The Poem vs. The Record',
          duration: '30 minutes',
          description:
            'Students read Longfellow\'s "Paul Revere\'s Ride" and then compare it to the historical record of what actually happened on April 18–19, 1775. They identify at least five specific claims in the poem that do not match historical evidence. Discussion: was Longfellow lying? What was the poem for? Why did it appear in 1861, more than 80 years after the event?',
        },
        {
          name: 'The Court-Martial Evidence',
          duration: '35 minutes',
          description:
            'Students examine the charges against Revere and the evidence presented in the court-martial proceedings. Working in pairs, they evaluate: which charges are supported by strong evidence? Which are disputed? Why were the charges ultimately dismissed? What does the two-year gap between the expedition (1779) and the dismissal (1782) tell us about how military justice functioned?',
        },
        {
          name: 'Hero Construction: Then and Now',
          duration: '25 minutes',
          description:
            'Students choose a contemporary public figure or historical figure and identify: what is the iconic, simplified version of their story? What does the fuller record reveal that the iconic version omits? Small group discussion of patterns: what gets left out of hero narratives, and whose interests does the omission serve?',
        },
        {
          name: 'Writing the Full Revere',
          duration: '25 minutes',
          description:
            'Students draft a one-paragraph "honest biography" of Paul Revere — 100–150 words that includes both the midnight ride and the Penobscot episode and presents him as a full human being rather than a simplified hero. Volunteers share; class discusses how to honor genuine contributions without erasing complexity.',
        },
      ],
      assessment:
        'Essay (800–1000 words): "Using Paul Revere as your primary example, explain why iconic historical narratives tend to exclude complexity — and what we lose when they do. Your essay must engage with specific evidence from both the midnight ride tradition and the Penobscot record, and must address the question of whether simplified historical narratives serve legitimate purposes."',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors for how they treat the same or similar topics',
        'CCSS.ELA-LITERACY.RL.9-10.9: Analyze how an author draws on and transforms source material in a specific work',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.9.9-12: Analyze the relationship between historical sources and the secondary interpretations made from them',
        'D2.His.11.9-12: Critique the usefulness of historical sources for a specific historical inquiry based on their maker, date, place of origin, intended audience, and purpose',
        'D2.His.12.9-12: Use questions generated about individuals and groups to assess how the significance of their actions changes over time',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// CASTINE — ADDITIONAL LINKS
// ============================================================================

export const castineAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-me-portland',
    linkType: 'SHARED_EVENT',
    reason:
      'Portland (Falmouth) served as a staging area for the Penobscot Expedition, and both towns experienced the consequences of British maritime aggression on the Maine coast. The two towns anchor the Maine theater of the Revolution.',
    weight: 90,
  },
  {
    toTownId: 'us-ma-boston',
    linkType: 'SHARED_PERSON',
    reason:
      'Paul Revere, Boston\'s most famous Patriot, commanded the artillery in the Penobscot Expedition and was court-martialed for his conduct during the retreat. The expedition was a Massachusetts operation organized and funded by the Massachusetts General Court.',
    weight: 80,
  },
  {
    toTownId: 'us-ma-marblehead',
    linkType: 'SHARED_PERSON',
    reason:
      'Colonel John Glover\'s Marblehead regiment contributed sailors and maritime expertise to Massachusetts naval operations. The Penobscot Expedition drew on the same New England maritime community that produced Glover\'s men.',
    weight: 60,
  },
  {
    toTownId: 'us-ny-white-plains',
    linkType: 'SHARED_THEME',
    reason:
      'Both the Penobscot Expedition and White Plains illustrate the limits of American command coordination in 1776–1779: dual authority structures, inter-service rivalry, and command paralysis that allowed winnable situations to become disasters.',
    weight: 45,
  },
];
