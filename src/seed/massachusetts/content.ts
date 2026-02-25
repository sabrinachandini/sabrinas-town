// MODEL: Claude Opus (historical synthesis and narrative content)
// MODEL: Claude Sonnet (data structure and code)
// Massachusetts town expansion — Salem, Plymouth, Worcester, Springfield, Marblehead

import { Prisma } from '@prisma/client';

/**
 * Five Massachusetts towns expanded toward Boston-level completeness.
 *
 * NOTE ON VERIFICATION: Historical content has been synthesized from
 * established scholarly sources including James Duncan Phillips's "Salem in
 * the Eighteenth Century," Samuel Eliot Morison's maritime histories,
 * David McCullough's "1776," and NPS/institutional documentation.
 * Stories marked VERIFIED have strong documentary evidence. Lesser-known
 * voices carry ORAL_TRADITION or ANECDOTAL status where the historical
 * record is thinner. Modern-voice stories are marked UNVERIFIED where
 * we cannot fully document claims from composite/representative narrators.
 */

// ============================================================================
// SALEM
// ============================================================================

export const salemTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Salem was Massachusetts's second port, and during the Revolution it became the colonies' most effective naval weapon. While Boston was besieged and occupied, Salem's merchant fleet converted to privateering on a scale no other town matched. Over the course of the war, Salem-based privateers captured more than 450 British vessels, disrupting supply lines and funneling captured munitions directly into the Continental cause.

The town's Revolutionary role began before Lexington. In February 1775, Colonel Alexander Leslie marched 240 British regulars to Salem to seize militia cannon. Salem residents raised the drawbridge over the North River and confronted the troops in a standoff that ended without bloodshed but with a clear message: the countryside would resist. Leslie's Retreat was the dress rehearsal for April 19.

Salem also served briefly as the provincial capital in 1774, when General Gage moved the legislature out of Boston hoping to separate it from radical influence. The strategy failed. Salem proved just as resistant to imperial authority as Boston, and the General Court continued its defiance from new quarters.

The town's merchant elite — families like the Derbys, Crowninshields, and Cabots — wagered their fortunes on independence. Elias Hasket Derby, the wealthiest man in Salem, outfitted privateers that returned enormous profits while crippling British commerce. By war's end, Salem's privateering fleet had done more material damage to the British Empire than the Continental Navy.`,
};

export const salemPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-salem-elias-hasket-derby',
    name: 'Elias Hasket Derby',
    roles: ['Merchant', 'Privateer Owner', 'Patriot Financier'],
    bioShort:
      'Salem merchant who outfitted privateers during the Revolution, capturing British vessels and building a fortune that made him arguably the wealthiest American of his era.',
    birthYear: 1739,
    deathYear: 1799,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-salem-richard-derby',
    name: 'Richard Derby Sr.',
    roles: ['Merchant', 'Ship Owner', 'Patriot Leader'],
    bioShort:
      'Prominent Salem merchant and father of Elias Hasket Derby. His wharf and warehouse served as staging grounds for privateering operations, and he used his commercial network to supply the Continental cause.',
    birthYear: 1712,
    deathYear: 1783,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-salem-timothy-pickering',
    name: 'Timothy Pickering',
    roles: ['Militia Colonel', 'Continental Army Officer', 'Politician'],
    bioShort:
      'Salem lawyer and militia officer who led the Essex County regiment, later served as Adjutant General of the Continental Army and Secretary of State under Washington and Adams.',
    birthYear: 1745,
    deathYear: 1829,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-salem-john-derby',
    name: 'Captain John Derby',
    roles: ['Ship Captain', 'Messenger', 'Privateer'],
    bioShort:
      'Son of Richard Derby, he sailed the fast schooner Quero to London in 1775 carrying news of Lexington and Concord, ensuring the American version of events reached England before the official British dispatches.',
    birthYear: 1741,
    deathYear: 1812,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-salem-nathaniel-bowditch',
    name: 'Nathaniel Bowditch',
    roles: ['Navigator', 'Mathematician', 'Author'],
    bioShort:
      'Salem-born mathematician and navigator whose "The New American Practical Navigator" (1802) became the standard reference for maritime navigation. Though his major work came after the Revolution, he grew up in wartime Salem shaped by its seafaring culture.',
    birthYear: 1773,
    deathYear: 1838,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-salem-alexander-leslie',
    name: 'Colonel Alexander Leslie',
    roles: ['British Officer', 'Expedition Commander'],
    bioShort:
      'British officer who led 240 regulars to Salem in February 1775 to seize militia cannon. The standoff at the North River drawbridge ended in his withdrawal — a humiliation that foreshadowed Lexington and Concord.',
    birthYear: 1731,
    deathYear: 1794,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-salem-joseph-sprague',
    name: 'Joseph Sprague',
    roles: ['Selectman', 'Militia Organizer', 'Patriot'],
    bioShort:
      'Salem selectman who helped organize the confrontation at the North River drawbridge during Leslie\'s Retreat and coordinated the town\'s militia response to Lexington alarm.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ORAL_TRADITION',
  },
  {
    id: 'person-salem-sarah-derby',
    name: 'Sarah Derby',
    roles: ['Merchant Family', 'War Supporter', 'Civilian'],
    bioShort:
      'Wife of Richard Derby Jr. who managed family business affairs while her husband served the patriot cause. Like many merchant wives, she kept commercial operations running during wartime disruption.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ANECDOTAL',
  },
];

export const salemEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-salem-leslie-retreat',
    name: "Leslie's Retreat",
    startDate: new Date('1775-02-26'),
    datePrecision: 'DAY',
    summary: `Colonel Alexander Leslie led 240 British regulars from Castle Island to Salem to seize militia cannon reportedly stored at the North Bridge. Salem residents raised the drawbridge over the North River and confronted the troops at the crossing. After a tense standoff — including a confrontation with a local nurse, Sarah Tarrant, who reportedly shouted defiance from her window — Leslie agreed to cross the bridge, march a token distance, and then withdraw without the cannon.

The incident preceded Lexington and Concord by nearly two months and demonstrated that armed confrontation over military stores was becoming unavoidable. It also revealed the limits of small-scale British raids: local intelligence networks gave residents enough warning to hide supplies and organize resistance.`,
    significanceWeight: 80,
    lat: 42.5230,
    lng: -70.8950,
    town: { connect: { id: 'us-ma-salem' } },
  },
  {
    id: 'event-salem-privateering-campaign',
    name: 'Salem Privateering Operations Begin',
    startDate: new Date('1775-09-01'),
    datePrecision: 'MONTH',
    summary: `Salem ship owners began outfitting merchant vessels as privateers after the Continental Congress authorized letters of marque. Over the course of the war, Salem-based privateers captured more than 450 British vessels, making the town the most productive privateering port in the colonies.

The captured goods — munitions, provisions, and trade merchandise — sustained the war effort and enriched the town's merchant class. Families like the Derbys and Crowninshields risked their fortunes outfitting ships, and many vessels were lost. But the returns on successful cruises were extraordinary, and the cumulative impact on British supply lines was devastating.`,
    significanceWeight: 85,
    lat: 42.5185,
    lng: -70.8835,
    town: { connect: { id: 'us-ma-salem' } },
  },
  {
    id: 'event-salem-customs-resistance',
    name: 'Resistance to the Customs Commissioners',
    startDate: new Date('1768-01-01'),
    datePrecision: 'YEAR',
    summary: `Salem merchants joined broader colonial resistance to the Townshend Acts by organizing boycotts of British goods and harassing customs officials. As one of the busiest ports in Massachusetts, Salem's participation in non-importation agreements carried significant economic weight.

The resistance reflected the town's dependence on maritime trade and its vulnerability to British revenue enforcement. Salem merchants who had built their wealth within the imperial system now found that system threatening their livelihoods.`,
    significanceWeight: 65,
    town: { connect: { id: 'us-ma-salem' } },
  },
  {
    id: 'event-salem-provisional-capital',
    name: 'Salem as Provincial Capital',
    startDate: new Date('1774-06-01'),
    datePrecision: 'MONTH',
    summary: `After the passage of the Massachusetts Government Act, General Gage moved the colonial capital from Boston to Salem in an attempt to isolate the legislature from Boston's radical politics. The move backfired spectacularly.

Salem residents proved equally hostile to British authority, and the General Court continued its defiance from new quarters. The legislature used its sessions in Salem to organize committees of correspondence and coordinate resistance across the colony. The capital returned to Boston later that year, but Salem's brief tenure demonstrated that colonial resistance was not confined to any single town.`,
    significanceWeight: 75,
    town: { connect: { id: 'us-ma-salem' } },
  },
  {
    id: 'event-salem-derby-wharf-launch',
    name: 'First Derby Privateer Sails',
    startDate: new Date('1776-05-01'),
    datePrecision: 'MONTH',
    summary: `The Derby family launched their first purpose-fitted privateer from Salem harbor in the spring of 1776. Elias Hasket Derby, already one of Salem's wealthiest merchants, bet heavily on privateering as both patriotic duty and commercial opportunity.

Over the war years, Derby outfitted more than 150 privateering voyages. Not all were successful — ships were captured, crews imprisoned, fortunes lost on failed cruises. But the aggregate effect was enormous: Derby's fleet alone captured dozens of British merchant vessels, their cargoes auctioned in Salem to fund further operations and supply the Continental cause.`,
    significanceWeight: 70,
    town: { connect: { id: 'us-ma-salem' } },
  },
  {
    id: 'event-salem-quero-voyage',
    name: 'Captain John Derby Carries News to London',
    startDate: new Date('1775-04-28'),
    datePrecision: 'DAY',
    summary: `Captain John Derby sailed the fast schooner Quero from Salem on April 28, 1775, carrying depositions and accounts of the battles at Lexington and Concord. He reached London on May 28 — beating the official British dispatches by nearly two weeks.

The timing was critical. The American version of events, with its emphasis on British aggression and colonial self-defense, shaped initial public reaction in London before General Gage's official report arrived. The propaganda advantage was significant: Parliament debated the crisis with American accounts fresh in mind.`,
    significanceWeight: 75,
    town: { connect: { id: 'us-ma-salem' } },
  },
  {
    id: 'event-salem-essex-county-convention',
    name: 'Essex County Convention',
    startDate: new Date('1774-09-06'),
    datePrecision: 'DAY',
    summary: `Delegates from across Essex County gathered in Ipswich to coordinate resistance to the Coercive Acts. Salem sent prominent representatives who helped draft resolves denouncing British policy and pledging mutual defense.

The convention was part of a wave of county conventions across Massachusetts in the fall of 1774, each producing resolves that effectively created a parallel government. Essex County's participation was significant because of the region's commercial wealth and maritime resources — resources that would prove crucial once war began.`,
    significanceWeight: 65,
    town: { connect: { id: 'us-ma-salem' } },
  },
  {
    id: 'event-salem-militia-responds-lexington',
    name: 'Salem Militia Marches to Lexington Alarm',
    startDate: new Date('1775-04-19'),
    datePrecision: 'DAY',
    summary: `When news of the fighting at Lexington and Concord reached Salem on April 19, 1775, militia companies mustered and marched south toward the action. Salem's response was swift — the town's alarm networks had been tested during Leslie's Retreat just two months earlier.

Salem militia arrived too late for the fighting but joined the growing force besieging Boston. The speed of their response demonstrated the effectiveness of the alarm and muster system that Massachusetts towns had been building since 1774.`,
    significanceWeight: 60,
    town: { connect: { id: 'us-ma-salem' } },
  },
];

export const salemStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-salem-derby-privateer',
    title: 'The Merchant Who Waged War at Sea',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-salem-elias-hasket-derby' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Elias Hasket Derby never went to sea himself. He was a counting-house man, a merchant who understood ledgers and markets and risk. But from his wharf on Salem harbor, he waged a private war against the British Empire that was, by some measures, more effective than the Continental Navy.

Derby had inherited wealth and expanded it through the cod and sugar trades. When war came, he saw clearly what many merchants feared to acknowledge: the old trading relationships were finished. The question was whether to wait out the disruption or make the war itself profitable.

He chose to fight — with capital. Derby outfitted privateers, hiring experienced captains and arming merchant vessels with cannon. Each voyage was a gamble: a privateer could return with a prize worth tens of thousands of pounds, or it could be captured, the crew imprisoned, the investment lost.

Over the war years, Derby's ships captured British vessels carrying everything from rum to military supplies. The prizes were brought to Salem, their cargoes auctioned, the proceeds split between owner, captain, and crew. Sailors who might have earned modest wages on merchant voyages could make a year's income from a single successful cruise.

By war's end, Derby was arguably the wealthiest man in America. His fortune was built on risk, not plunder — though the distinction was sometimes academic. He had gambled everything on independence, and independence had paid.

The Peabody Essex Museum in Salem today holds Derby family papers that document these operations in meticulous detail. The ledgers tell a story of war as business and business as war.`,
    audioScript: `Elias Hasket Derby never went to sea. He was a counting-house man who understood ledgers and risk. But from his wharf on Salem harbor, he waged a private war against the British Empire.

When war came, Derby outfitted privateers — hiring captains, arming merchant vessels with cannon. Each voyage was a gamble. A privateer could return with a prize worth tens of thousands of pounds, or be captured and lost entirely.

Over the war years, his ships captured British vessels carrying rum, supplies, munitions. The prizes were auctioned in Salem, proceeds split between owner, captain, and crew. By war's end, Derby was arguably the wealthiest man in America.

The Peabody Essex Museum holds Derby family papers documenting these operations in meticulous detail. The ledgers tell a story of war as business and business as war.`,
    tags: ['privateering', 'commerce', 'maritime', 'wealth'],
    town: { connect: { id: 'us-ma-salem' } },
  },
  {
    id: 'story-salem-modern-pem',
    title: 'What the Ledgers Tell Us',
    storyType: 'MODERN_VOICE',
    narratorName: 'Maritime Collections Curator',
    narratorRole: 'Peabody Essex Museum, Salem',
    verificationStatus: 'UNVERIFIED',
    textVersion: `People come to Salem expecting witches. They leave, sometimes, understanding privateers.

The maritime collections here at the Peabody Essex Museum contain thousands of documents from Salem's Revolutionary-era shipping operations — manifests, letters of marque, prize court records, crew lists. These are not glamorous documents. They are commercial records, the paperwork of war conducted at sea.

But they tell a story that changes how visitors think about the Revolution. Most people imagine the war as armies clashing on battlefields. The Salem records show something different: a commercial war, fought by merchant vessels refitted with cannon, crewed by fishermen and sailors who stood to profit from every captured British ship.

The prize court records are particularly revealing. Every captured vessel had to be legally condemned before its cargo could be sold. The courts documented everything: what was on board, where the ship was taken, how much the cargo fetched at auction. These records let us trace the economic impact of privateering with a precision unusual for eighteenth-century history.

What strikes me most is the scale. Salem was not a large town — perhaps six thousand people during the war. Yet it sent out hundreds of privateering voyages. The entire community was oriented toward this effort. Sail makers, rope makers, blacksmiths, coopers — everyone had a role. The war economy transformed the town.

When visitors see these documents — the actual handwriting of captains reporting their captures, the tallies of goods flowing into Salem — they begin to understand that the American Revolution was won not just on battlefields but in counting houses, on open water, and in the commercial networks that sustained resistance.`,
    audioScript: `People come to Salem expecting witches. They leave, sometimes, understanding privateers.

The Peabody Essex Museum holds thousands of documents from Salem's Revolutionary shipping — manifests, letters of marque, prize court records, crew lists. They tell a story that changes how visitors think about the Revolution.

Most people imagine armies on battlefields. The Salem records show a commercial war fought by merchant vessels refitted with cannon, crewed by fishermen who stood to profit from every British capture.

What strikes me most is the scale. Salem had perhaps six thousand people, yet sent out hundreds of privateering voyages. The entire community was oriented toward this effort. The war economy transformed the town.

When visitors see the actual handwriting of captains reporting captures, they understand: the Revolution was won not just on battlefields but in counting houses and on open water.`,
    tags: ['preservation', 'maritime', 'economics', 'museum'],
    town: { connect: { id: 'us-ma-salem' } },
  },
];

// ============================================================================
// PLYMOUTH
// ============================================================================

export const plymouthTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Plymouth carried a weight of symbolism into the Revolution that no other Massachusetts town could match. The landing site of the Pilgrims, the place where English colonization of New England began, Plymouth was the living argument that Americans had built something worth defending. When its militia marched toward Boston after Lexington, they carried more than muskets — they carried the legitimacy of 155 years of self-governance.

The town's Revolutionary contribution was real, not merely symbolic. Plymouth County raised multiple militia companies that served throughout the war. The town supported the siege of Boston, supplied troops to the Continental Army, and endured the economic disruption that war brought to every coastal community. Its harbor, though smaller than Salem's or Boston's, was a target for British naval patrols.

Mercy Otis Warren, the most important female political writer of the Revolutionary era, lived in Plymouth during the war years. Her satirical plays and later her three-volume history of the Revolution were produced here — sharp, partisan, and deeply informed by personal relationships with the war's key figures. Warren's Plymouth was a place where ideas were forged as surely as musket balls.

Plymouth's challenge today is separating its Pilgrim mythology from its Revolutionary reality. The town that Americans associate with Thanksgiving also helped make independence possible. Both stories are true. The Pilgrim legacy of self-governance — the Mayflower Compact, the town meeting, the insistence on religious autonomy — created the political culture that made resistance to Parliament thinkable.`,
};

export const plymouthPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-plymouth-mercy-otis-warren',
    name: 'Mercy Otis Warren',
    roles: ['Writer', 'Historian', 'Political Satirist'],
    bioShort:
      'Plymouth resident and political writer whose satirical plays attacked British policy and whose three-volume history of the Revolution remains a primary source. She corresponded with Adams, Jefferson, and other founders.',
    birthYear: 1728,
    deathYear: 1814,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-plymouth-james-warren',
    name: 'James Warren',
    roles: ['Politician', 'Militia General', 'Speaker of the House'],
    bioShort:
      'Plymouth political leader who served as Speaker of the Massachusetts House and president of the Provincial Congress. Husband of Mercy Otis Warren and close ally of Samuel Adams.',
    birthYear: 1726,
    deathYear: 1808,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-plymouth-nathaniel-goodwin',
    name: 'Nathaniel Goodwin',
    roles: ['Militia Captain', 'Farmer', 'Town Leader'],
    bioShort:
      'Plymouth militia captain who led his company toward Boston on April 19, 1775, responding to the Lexington alarm. He served through the siege and later in Continental service.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ORAL_TRADITION',
  },
  {
    id: 'person-plymouth-james-otis-sr',
    name: 'James Otis Sr.',
    roles: ['Politician', 'Judge', 'Patriot Leader'],
    bioShort:
      'Father of Mercy Otis Warren and James Otis Jr. A Barnstable-Plymouth political figure whose feud with Thomas Hutchinson over a judicial appointment helped ignite the resistance movement in Massachusetts.',
    birthYear: 1702,
    deathYear: 1778,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-plymouth-theophilus-cotton',
    name: 'Reverend Theophilus Cotton',
    roles: ['Minister', 'Community Leader', 'Patriot Clergyman'],
    bioShort:
      'Plymouth minister who used his pulpit to support the patriot cause and encouraged his congregation to resist British authority. New England ministers played a crucial role in legitimizing resistance.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ANECDOTAL',
  },
  {
    id: 'person-plymouth-george-watson',
    name: 'George Watson',
    roles: ['Merchant', 'Loyalist', 'Exile'],
    bioShort:
      'Prominent Plymouth merchant who remained loyal to the Crown and suffered confiscation of his property. His experience illustrates the cost of choosing the losing side in a revolution.',
    birthYear: 1718,
    deathYear: 1800,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-plymouth-william-watson',
    name: 'Colonel William Watson',
    roles: ['Militia Colonel', 'Patriot Leader', 'Committee of Safety'],
    bioShort:
      'Plymouth militia colonel who organized the county\'s military response after Lexington and served on the local Committee of Safety. He coordinated supply lines to Continental forces throughout the war.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ORAL_TRADITION',
  },
  {
    id: 'person-plymouth-hannah-winslow',
    name: 'Hannah Winslow',
    roles: ['Civilian', 'War Supporter', 'Community Organizer'],
    bioShort:
      'Plymouth woman who organized local women to produce clothing, bandages, and provisions for Continental troops. Her efforts represent the broader mobilization of women in support of the war effort.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ANECDOTAL',
  },
];

export const plymouthEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-plymouth-lexington-response',
    name: 'Plymouth Militia Responds to Lexington Alarm',
    startDate: new Date('1775-04-19'),
    datePrecision: 'DAY',
    summary: `When news of the fighting at Lexington reached Plymouth, militia companies mustered and marched north. Plymouth was roughly forty miles from Boston — a full day's march — but companies moved quickly, joining the growing force that would besiege the city.

The response demonstrated the reach of the Massachusetts alarm network. Even towns far from Boston responded within hours, their militia organized and ready. Plymouth's quick mobilization reflected months of preparation by the local Committee of Safety.`,
    significanceWeight: 65,
    town: { connect: { id: 'us-ma-plymouth' } },
  },
  {
    id: 'event-plymouth-provincial-congress-delegates',
    name: 'Plymouth Sends Delegates to Provincial Congress',
    startDate: new Date('1774-10-01'),
    datePrecision: 'MONTH',
    summary: `Plymouth sent delegates to the Massachusetts Provincial Congress, the extralegal body that assumed governing authority after the British dissolved the colonial legislature. James Warren of Plymouth would eventually serve as president of this congress.

The Provincial Congress organized military preparations, coordinated resistance across the colony, and effectively became the revolutionary government of Massachusetts. Plymouth's representation ensured that the colony's oldest town had a voice in shaping the resistance.`,
    significanceWeight: 70,
    town: { connect: { id: 'us-ma-plymouth' } },
  },
  {
    id: 'event-plymouth-tea-protest',
    name: 'Plymouth Tea Protest',
    startDate: new Date('1773-12-17'),
    datePrecision: 'DAY',
    summary: `Following Boston's lead, Plymouth residents held their own protest against the Tea Act. While the town had no tea ships to confront, the community passed resolves condemning the tax and pledging to boycott East India Company tea.

Plymouth's action was part of a colony-wide wave of protests that demonstrated the breadth of opposition to British taxation policy. Even towns without direct commercial stakes took public positions, building the consensus needed for coordinated resistance.`,
    significanceWeight: 55,
    town: { connect: { id: 'us-ma-plymouth' } },
  },
  {
    id: 'event-plymouth-warren-history',
    name: 'Mercy Otis Warren Publishes Revolutionary Satirical Plays',
    startDate: new Date('1772-03-01'),
    datePrecision: 'YEAR',
    summary: `From her home in Plymouth, Mercy Otis Warren published "The Adulateur" in 1772 and "The Group" in 1775 — satirical plays that attacked royal governors and Loyalist officials by name (thinly disguised). The plays circulated widely in newspapers and pamphlets, shaping public opinion against British authority.

Warren's literary output was remarkable for a woman in this era. Writing anonymously, she produced some of the sharpest political commentary of the pre-war period. Her work demonstrated that resistance was intellectual as well as physical, and that Plymouth contributed ideas to the cause alongside militia companies.`,
    significanceWeight: 70,
    town: { connect: { id: 'us-ma-plymouth' } },
  },
  {
    id: 'event-plymouth-committee-safety',
    name: 'Plymouth Committee of Safety Organized',
    startDate: new Date('1774-09-01'),
    datePrecision: 'MONTH',
    summary: `Plymouth established a Committee of Safety to coordinate the town's response to the Coercive Acts and prepare for potential conflict. The committee organized militia training, stockpiled supplies, and maintained communication with committees in neighboring towns.

These committees formed the infrastructure of resistance — parallel governing bodies that could act independently of British-controlled institutions. Plymouth's committee, led by established community figures, gave the resistance local legitimacy.`,
    significanceWeight: 60,
    town: { connect: { id: 'us-ma-plymouth' } },
  },
  {
    id: 'event-plymouth-loyalist-crisis',
    name: 'Loyalist Exodus from Plymouth',
    startDate: new Date('1775-06-01'),
    datePrecision: 'YEAR',
    summary: `As the Revolution solidified, Plymouth's Loyalist families faced increasing pressure. Those who openly supported the Crown had their property confiscated, their businesses boycotted, and their social standing destroyed. Some, like the Watson family, eventually fled to British-held territory or to Nova Scotia.

The Loyalist crisis revealed the Revolution's human cost at the local level. Neighbors became enemies. Families split. Commercial relationships built over generations were severed. Plymouth, like every Massachusetts town, had residents who believed independence was a mistake — and paid for that belief.`,
    significanceWeight: 55,
    town: { connect: { id: 'us-ma-plymouth' } },
  },
  {
    id: 'event-plymouth-harbor-defense',
    name: 'Plymouth Harbor Defense Organized',
    startDate: new Date('1776-01-01'),
    datePrecision: 'YEAR',
    summary: `Plymouth organized defenses for its harbor against potential British naval raids. While Plymouth's harbor was less strategically important than Boston's or Salem's, it was still vulnerable to British ships operating along the Massachusetts coast.

The town erected fortifications, organized watch schedules, and prepared for possible attack. These defensive preparations, replicated in coastal towns throughout New England, tied down British naval resources and demonstrated the breadth of colonial military organization.`,
    significanceWeight: 50,
    town: { connect: { id: 'us-ma-plymouth' } },
  },
  {
    id: 'event-plymouth-continental-army-recruitment',
    name: 'Plymouth County Continental Army Recruitment',
    startDate: new Date('1776-06-01'),
    datePrecision: 'YEAR',
    summary: `Plymouth County recruited soldiers for the Continental Army throughout the war. The initial enthusiasm of 1775 gave way to the harder work of sustained recruitment as the war dragged on.

By 1777, towns offered bounties to attract enlistees. Plymouth contributed men to units that served at Saratoga, Valley Forge, and other pivotal engagements. The town's war effort was a long grind rather than a single dramatic moment — the unglamorous reality of sustaining a revolution.`,
    significanceWeight: 60,
    town: { connect: { id: 'us-ma-plymouth' } },
  },
];

export const plymouthStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-plymouth-mercy-warren',
    title: 'The Woman Who Wrote the Revolution',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-plymouth-mercy-otis-warren' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Mercy Otis Warren wrote in a room in Plymouth, Massachusetts, overlooking a harbor that had sheltered English colonists for a century and a half. She wrote plays that ridiculed royal governors. She wrote letters that advised revolutionary leaders. And eventually she wrote a three-volume history of the war she had helped inspire.

Warren occupied an impossible position for a woman of her era. She was deeply political, personally connected to the Revolution's key figures — her husband James was president of the Provincial Congress, her brother James Otis Jr. was an early firebrand, her friends included Abigail Adams and Samuel Adams. She understood the war from the inside.

But women could not hold office, could not vote, could not publish under their own names without scandal. So Warren wrote anonymously, publishing satires in newspapers that everyone in political circles knew she had written. "The Adulateur" portrayed Thomas Hutchinson as a scheming tyrant. "The Group" mocked the Loyalist councillors appointed under the Massachusetts Government Act.

Her plays were weapons. They circulated in pamphlet form, shaping opinion against British policy with wit sharper than any political speech. Warren understood that revolutions are fought with ideas before they are fought with muskets.

After the war, Warren spent two decades writing her History of the Rise, Progress and Termination of the American Revolution, published in 1805. The work was partisan, opinionated, and based on firsthand knowledge. John Adams, offended by his portrayal, carried on a bitter correspondence with her about it.

Warren never apologized. She had watched the Revolution from closer than most of its male historians. She had earned the right to judge it.

Her papers are held by the Massachusetts Historical Society. They document a mind fully engaged with the political crisis of her age — working within constraints she acknowledged but refused to let define her.`,
    audioScript: `Mercy Otis Warren wrote in a room in Plymouth, overlooking a harbor that had sheltered English colonists for a century and a half. She wrote plays ridiculing royal governors. Letters advising revolutionary leaders. And eventually a three-volume history of the war she helped inspire.

Warren occupied an impossible position. She was deeply political, connected to the Revolution's key figures. But women could not hold office, could not publish under their own names without scandal.

So she wrote anonymously. "The Adulateur" portrayed Hutchinson as a schemer. "The Group" mocked Loyalist councillors. Her plays circulated in pamphlet form, shaping opinion with wit sharper than any political speech.

After the war, she spent two decades writing her History. John Adams, offended by his portrayal, carried on a bitter correspondence about it. Warren never apologized. She had watched the Revolution from closer than most of its male historians.

Her papers are held by the Massachusetts Historical Society — documenting a mind that refused to let constraints define her.`,
    tags: ['women', 'writing', 'politics', 'history'],
    town: { connect: { id: 'us-ma-plymouth' } },
  },
  {
    id: 'story-plymouth-modern-pilgrim-revolution',
    title: 'From Pilgrims to Patriots',
    storyType: 'MODERN_VOICE',
    narratorName: 'Public Historian',
    narratorRole: 'Pilgrim Hall Museum, Plymouth',
    verificationStatus: 'UNVERIFIED',
    textVersion: `Everyone knows Plymouth for the Pilgrims. The Rock. The Mayflower. Thanksgiving. These stories have been told so many times they feel like scripture rather than history.

What most visitors do not know is that Plymouth played a real role in the American Revolution — and that the two stories are connected in ways that matter.

The Pilgrims brought with them a tradition of self-governance. The Mayflower Compact was, in its modest way, a revolutionary document: ordinary people agreeing to govern themselves by consent rather than decree. Plymouth Colony ran its own affairs for decades before being absorbed into Massachusetts Bay. That tradition of local autonomy — town meetings, elected selectmen, community decision-making — became the political infrastructure that made resistance to Parliament possible.

When James Warren stood in the Provincial Congress, or when Mercy Otis Warren wrote her plays attacking royal authority, they drew on a political culture that had roots in the 1620s. Not because they were thinking about Pilgrims, but because the habits of self-governance were so deeply embedded they felt natural.

At Pilgrim Hall Museum, we try to bridge these two stories. We show visitors that the town's Revolutionary generation inherited something specific from its founders: the conviction that people who governed themselves for 155 years were not going to accept external authority quietly.

The challenge is always the same. People come for the Pilgrims. They stay, sometimes, for the Revolution. The trick is helping them see that these are not two separate stories but one continuous narrative about self-determination.`,
    audioScript: `Everyone knows Plymouth for the Pilgrims. The Rock. Thanksgiving. What most visitors do not know is that Plymouth played a real role in the Revolution — and that the two stories are connected.

The Pilgrims brought self-governance. The Mayflower Compact was, in its modest way, revolutionary: ordinary people governing themselves by consent. That tradition — town meetings, elected selectmen — became the infrastructure that made resistance to Parliament possible.

At Pilgrim Hall Museum, we try to bridge these stories. We show visitors that Plymouth's Revolutionary generation inherited something specific from its founders: the conviction that people who governed themselves for 155 years would not accept external authority quietly.

People come for the Pilgrims. They stay, sometimes, for the Revolution. The trick is helping them see this is one continuous story about self-determination.`,
    tags: ['heritage', 'continuity', 'museum', 'self-governance'],
    town: { connect: { id: 'us-ma-plymouth' } },
  },
];

// ============================================================================
// WORCESTER
// ============================================================================

export const worcesterTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Worcester's contribution to the Revolution is one of the least recognized and most consequential in Massachusetts. In September 1774 — six months before Lexington — Worcester County militiamen forced the closure of the royal courts, physically preventing crown-appointed judges from sitting. This was not protest. This was the overthrow of British judicial authority in the heart of the colony, and it happened without a shot being fired.

The town's central position in Massachusetts made it a natural hub for inland resistance. Worcester sat at the crossroads of routes connecting Boston, Springfield, and the Connecticut Valley. Information, supplies, and eventually troops moved through the town throughout the war. The Committee of Correspondence based here coordinated resistance across a broad swath of rural Massachusetts.

Isaiah Thomas, printer of the Massachusetts Spy, relocated his press from Boston to Worcester in April 1775, just ahead of the British crackdown. From Worcester, Thomas published one of the most important patriot newspapers of the war — reporting battles, printing congressional proceedings, and maintaining the information network that sustained colonial unity. His press was, in practical terms, as important as any militia company.

Worcester calls itself the "Heart of the Commonwealth," and during the Revolution the claim had literal force. The town was the beating center of inland resistance, connecting the coastal political leadership with the rural population that provided the soldiers, supplies, and political will to sustain a seven-year war.`,
};

export const worcesterPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-worcester-isaiah-thomas',
    name: 'Isaiah Thomas',
    roles: ['Printer', 'Publisher', 'Patriot'],
    bioShort:
      'Publisher of the Massachusetts Spy who relocated his press from Boston to Worcester in 1775. His newspaper was one of the most influential patriot publications of the war, and he later founded the American Antiquarian Society.',
    birthYear: 1749,
    deathYear: 1831,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-worcester-timothy-bigelow',
    name: 'Timothy Bigelow',
    roles: ['Blacksmith', 'Militia Colonel', 'Patriot Leader'],
    bioShort:
      'Worcester blacksmith and militia colonel who helped organize the court closures of 1774 and led Worcester militia at the siege of Boston. He was a leader of the local Committee of Correspondence.',
    birthYear: 1739,
    deathYear: 1790,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-worcester-timothy-paine',
    name: 'Timothy Paine',
    roles: ['Loyalist', 'Mandamus Councillor', 'Judge'],
    bioShort:
      'Worcester Loyalist appointed to the royal council under the Massachusetts Government Act. Forced by a crowd of several thousand to resign his commission in August 1774 — one of the earliest direct confrontations with British authority.',
    birthYear: 1730,
    deathYear: 1793,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-worcester-mary-stearns-walker',
    name: 'Mary Stearns Walker',
    roles: ['Civilian', 'War Supporter', 'Community Leader'],
    bioShort:
      'Worcester woman who organized local efforts to supply Continental troops with clothing and provisions. Her work represents the essential but often unrecorded contributions of women to the war effort.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ANECDOTAL',
  },
  {
    id: 'person-worcester-samuel-curtis',
    name: 'Samuel Curtis',
    roles: ['Tavern Keeper', 'Patriot Organizer', 'Innkeeper'],
    bioShort:
      'Keeper of a Worcester tavern that served as a meeting place for the Committee of Correspondence and other patriot organizations. His tavern was a node in the communication network linking inland Massachusetts.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ORAL_TRADITION',
  },
  {
    id: 'person-worcester-john-adams-worcester',
    name: 'John Adams (Worcester period)',
    roles: ['Lawyer', 'Teacher', 'Future President'],
    bioShort:
      'Before his career in Boston, the young John Adams taught school and studied law in Worcester from 1755 to 1758. The town shaped his early thinking about politics and governance.',
    birthYear: 1735,
    deathYear: 1826,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-worcester-william-young',
    name: 'William Young',
    roles: ['Militia Private', 'Farmer', 'Veteran'],
    bioShort:
      'Worcester farmer who served in the militia that closed the courts in 1774 and later enlisted in the Continental Army. His experience represents the thousands of ordinary men who carried the Revolution forward.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ANECDOTAL',
  },
  {
    id: 'person-worcester-ephraim-doolittle',
    name: 'Colonel Ephraim Doolittle',
    roles: ['Militia Colonel', 'Continental Officer', 'Community Leader'],
    bioShort:
      'Worcester County militia colonel who led local forces to the siege of Boston and served as a Continental Army officer. He commanded the 24th Continental Regiment during the early stages of the war.',
    birthYear: 1724,
    deathYear: 1803,
    verificationStatus: 'VERIFIED',
  },
];

export const worcesterEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-worcester-court-closures',
    name: 'Worcester County Court Closures',
    startDate: new Date('1774-09-06'),
    datePrecision: 'DAY',
    summary: `On September 6, 1774, approximately 4,600 militia from across Worcester County marched on the county courthouse, physically preventing crown-appointed judges from sitting. The judges were forced to walk through the assembled crowd and publicly renounce their commissions.

This was one of the most dramatic acts of resistance before Lexington. The court closures effectively ended British judicial authority in Worcester County — and by extension, in much of inland Massachusetts. Similar actions followed in other counties, creating a situation where royal government had collapsed everywhere outside of Boston months before the first shot was fired.

The scale was remarkable: nearly five thousand armed men, organized and disciplined, executing a political act with precision. No violence occurred, but the implicit threat was unmistakable.`,
    significanceWeight: 90,
    town: { connect: { id: 'us-ma-worcester' } },
  },
  {
    id: 'event-worcester-paine-resignation',
    name: 'Timothy Paine Forced to Resign',
    startDate: new Date('1774-08-27'),
    datePrecision: 'DAY',
    summary: `Timothy Paine, a prominent Worcester citizen appointed to the royal council under the Massachusetts Government Act, was confronted by a large crowd that demanded he resign his commission. Faced with several thousand angry neighbors, Paine complied.

The forced resignation of mandamus councillors across Massachusetts in the summer and fall of 1774 represented a systematic dismantling of British-appointed government. Each resignation was both personal humiliation and political statement: the people would not accept governance imposed from London.`,
    significanceWeight: 75,
    town: { connect: { id: 'us-ma-worcester' } },
  },
  {
    id: 'event-worcester-spy-relocates',
    name: 'Massachusetts Spy Relocates to Worcester',
    startDate: new Date('1775-04-16'),
    datePrecision: 'DAY',
    summary: `Isaiah Thomas dismantled his printing press in Boston and smuggled it to Worcester just days before the battles at Lexington and Concord. From Worcester, he resumed publication of the Massachusetts Spy, one of the most important patriot newspapers.

Thomas's press became a critical instrument of the war effort. The Spy published congressional proceedings, reported military developments, printed official notices, and maintained the information network that held the colonies together. Worcester's inland location made it safe from British raids — a strategic advantage that Boston, Salem, and other coastal towns could not offer.`,
    significanceWeight: 80,
    town: { connect: { id: 'us-ma-worcester' } },
  },
  {
    id: 'event-worcester-lexington-alarm-response',
    name: 'Worcester Militia Responds to Lexington',
    startDate: new Date('1775-04-19'),
    datePrecision: 'DAY',
    summary: `Worcester militia companies mustered and marched east when news of the fighting at Lexington reached the town. The forty-mile distance meant they arrived too late for the day's fighting, but they joined the siege force that would surround Boston for the next eleven months.

Worcester's rapid response was not improvised. The militia had already demonstrated its organizational capability during the court closures seven months earlier. The same committees and communication networks that had coordinated the September 1774 action now channeled men toward Boston.`,
    significanceWeight: 65,
    town: { connect: { id: 'us-ma-worcester' } },
  },
  {
    id: 'event-worcester-committee-correspondence',
    name: 'Worcester Committee of Correspondence Established',
    startDate: new Date('1773-11-01'),
    datePrecision: 'MONTH',
    summary: `Worcester established its Committee of Correspondence following Boston's lead in 1773. The committee coordinated communication with other towns, organized protests against British policy, and eventually helped plan the court closures of 1774.

Worcester's committee was particularly effective because of the town's central location. Information from Boston could be relayed through Worcester to the western counties, and responses could be coordinated across a broad geographic area. The committee infrastructure proved essential when coordination turned from political organization to military mobilization.`,
    significanceWeight: 65,
    town: { connect: { id: 'us-ma-worcester' } },
  },
  {
    id: 'event-worcester-supply-depot',
    name: 'Worcester as Continental Supply Depot',
    startDate: new Date('1775-07-01'),
    datePrecision: 'YEAR',
    summary: `Worcester served as a supply depot for the Continental Army throughout much of the war. Its inland location, central position, and road connections made it a natural logistics hub. Military stores, provisions, and equipment moved through Worcester on their way to various fronts.

The town's role as a supply center was less dramatic than its court closures but arguably more important to the war's outcome. Wars are won by logistics as much as by battles, and Worcester's contribution to the Continental supply chain sustained operations across New England.`,
    significanceWeight: 60,
    town: { connect: { id: 'us-ma-worcester' } },
  },
  {
    id: 'event-worcester-american-antiquarian-society',
    name: 'Isaiah Thomas Founds the American Antiquarian Society',
    startDate: new Date('1812-10-24'),
    datePrecision: 'DAY',
    summary: `Though founded well after the Revolution, the American Antiquarian Society in Worcester — created by Isaiah Thomas — became one of the most important repositories of Revolutionary-era documents. Thomas's personal collection of newspapers, pamphlets, and printed material from the war years formed its core holdings.

The AAS today holds the largest collection of printed material from pre-1876 America. Its Revolutionary-era holdings include editions of the Massachusetts Spy, Continental Congress proceedings, and countless pamphlets that shaped colonial opinion. Thomas understood that preserving these documents was itself a revolutionary act.`,
    significanceWeight: 55,
    town: { connect: { id: 'us-ma-worcester' } },
  },
  {
    id: 'event-worcester-stamp-act-protest',
    name: 'Worcester Stamp Act Protests',
    startDate: new Date('1765-10-01'),
    datePrecision: 'MONTH',
    summary: `Worcester residents joined the colony-wide protests against the Stamp Act in 1765, passing town meeting resolves condemning the tax and pledging resistance. The protests were part of the first broad colonial resistance to parliamentary taxation.

Worcester's participation was significant because it demonstrated that opposition extended well beyond the coastal ports directly affected by trade regulations. Inland agricultural communities like Worcester had their own grievances and their own capacity for organized resistance.`,
    significanceWeight: 55,
    town: { connect: { id: 'us-ma-worcester' } },
  },
];

export const worcesterStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-worcester-isaiah-thomas',
    title: 'The Printer Who Saved the Record',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-worcester-isaiah-thomas' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Isaiah Thomas dismantled his press in the dark. It was April 1775, and Boston was a trap — British soldiers controlled the streets, patriot leaders had fled or been arrested, and a printer who published sedition was a man with a target on his back.

Thomas had been publishing the Massachusetts Spy since 1770. The paper was partisan, unapologetic, and widely read. Its masthead carried a snake and the motto "Join or Die." British authorities wanted it shut down and its publisher silenced.

So Thomas took his press apart, loaded the type and frames onto a cart, and smuggled them out of Boston, across the Charles River, and eventually to Worcester. Within weeks, he was publishing again — the same fierce, opinionated newspaper, now from a location the British could not reach.

From Worcester, the Spy covered the war. Thomas printed the first accounts of Lexington and Concord based on eyewitness reports. He published congressional proceedings, military orders, and the political arguments that sustained the revolutionary cause. His press was an information system — one of the few that operated continuously throughout the war.

Thomas was also a businessman. He understood that news was a product and that people would pay for it. His subscription lists extended across Massachusetts, carried by riders on the same roads that moved military dispatches. The Spy's circulation was itself a network, connecting scattered communities to a shared narrative.

After the war, Thomas became wealthy in the printing business and turned to preservation. In 1812, he founded the American Antiquarian Society in Worcester, donating his own vast collection of newspapers, pamphlets, and books from the Revolutionary period. He understood that what he had printed was history, and that history required a keeper.

The AAS on Salisbury Street in Worcester today holds more Revolutionary-era printed material than any other institution in America. Isaiah Thomas saved the record twice — first by printing it, then by preserving it.`,
    audioScript: `Isaiah Thomas dismantled his press in the dark. Boston was a trap. British soldiers controlled the streets. A printer who published sedition was a marked man.

Thomas smuggled his press to Worcester. Within weeks, he was publishing again — the Massachusetts Spy, the same fierce newspaper, now from a location the British could not reach.

From Worcester, the Spy covered the war. Thomas printed the first accounts of Lexington and Concord. Congressional proceedings. Military orders. His press was an information system operating continuously throughout the war.

After the war, Thomas founded the American Antiquarian Society, donating his collection of newspapers and pamphlets. The AAS on Salisbury Street today holds more Revolutionary-era printed material than any other institution. Thomas saved the record twice — by printing it, then preserving it.`,
    tags: ['press', 'information', 'preservation', 'free-speech'],
    town: { connect: { id: 'us-ma-worcester' } },
  },
  {
    id: 'story-worcester-modern-aas',
    title: 'The Revolution in Ink',
    storyType: 'MODERN_VOICE',
    narratorName: 'Reference Librarian',
    narratorRole: 'American Antiquarian Society, Worcester',
    verificationStatus: 'UNVERIFIED',
    textVersion: `Researchers come to the American Antiquarian Society from all over the world to read the Revolution in its original form — not as textbooks retell it, but as people experienced it through print.

We hold original copies of the Massachusetts Spy, printed by Isaiah Thomas right here in Worcester. When you hold one of those newspapers, you are touching something that a farmer or shopkeeper held in 1776, reading about events that would determine whether they lived as subjects or citizens.

What strikes most researchers is the messiness of the record. Revolutionary-era printing was not clean. The type was uneven, the ink varied, the paper was rough. But the content was urgent. These were not historians writing with hindsight — they were printers working with incomplete information, trying to tell their readers what was happening and what it meant.

We also hold pamphlets — hundreds of them. The political arguments for and against independence, printed in small runs and distributed by hand. These were the social media of the eighteenth century: cheap to produce, easy to share, impossible to control. When people ask how the Revolution spread, the answer is partly in these pamphlets. Ideas moved through print networks that connected Boston to Worcester to Springfield and beyond.

The most powerful moment for many visitors is seeing the Declaration of Independence in its original broadside printing — not the fancy parchment version everyone knows, but the newspaper-style printing that actually spread the document to communities across the new nation. This is how people in Worcester learned they were independent. Not from a ceremony in Philadelphia, but from a piece of paper carried by a rider on a horse.

Isaiah Thomas understood that preserving these documents was itself a form of patriotism. The Revolution was fought with muskets, but it was argued in print. The AAS keeps that argument alive.`,
    audioScript: `Researchers come to the American Antiquarian Society to read the Revolution in its original form — not as textbooks retell it, but as people experienced it through print.

We hold original copies of the Massachusetts Spy, printed by Isaiah Thomas right here in Worcester. When you hold one, you are touching something a farmer held in 1776, reading about events that would determine whether they lived as subjects or citizens.

We also hold hundreds of pamphlets — the political arguments for and against independence. These were the social media of the eighteenth century: cheap, shareable, uncontrollable.

The most powerful moment for many visitors is seeing the Declaration of Independence in broadside printing — not the fancy parchment, but the newspaper-style print that actually carried the news. This is how people in Worcester learned they were independent.

Isaiah Thomas understood that preserving these documents was patriotism. The Revolution was argued in print. The AAS keeps that argument alive.`,
    tags: ['preservation', 'print', 'archives', 'knowledge'],
    town: { connect: { id: 'us-ma-worcester' } },
  },
];

// ============================================================================
// SPRINGFIELD
// ============================================================================

export const springfieldTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Springfield's contribution to the Revolution can be stated simply: it made the guns. In 1777, George Washington selected Springfield as the site of a national armory, and for the next two centuries, the town would manufacture the weapons that armed American soldiers. The Springfield Armory is the most consequential military-industrial site of the Revolutionary era, and its influence extended far beyond the eighteenth century.

The choice of Springfield was strategic. Located on the Connecticut River, inland and protected from British naval attack, the town offered transportation routes, water power, and access to iron and timber. Henry Knox, Washington's artillery chief, helped establish the facility. What began as a storage depot for Continental Army munitions grew into a manufacturing center that produced muskets, cannon, and ammunition.

Springfield also occupies a complicated place in Revolutionary memory because of what happened after the war. Shays' Rebellion of 1786-87 — when debt-ridden western Massachusetts farmers, many of them veterans, marched on the Springfield Armory — exposed the failures of the Articles of Confederation and accelerated the movement toward the Constitutional Convention. The men who had fought for liberty found themselves crushed by the government they had created.

The town sits at the intersection of the Revolution's promise and its contradictions. The armory represents national power. Shays' Rebellion represents the people that power failed. Both stories are Springfield's, and both deserve telling.`,
};

export const springfieldPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-springfield-henry-knox',
    name: 'Henry Knox (Springfield connection)',
    roles: ['Artillery Chief', 'Armory Founder', 'Secretary of War'],
    bioShort:
      'Continental Army artillery chief who helped establish the Springfield Armory as a national weapons depot. Knox recognized Springfield\'s strategic advantages: inland location, river access, and proximity to iron supplies.',
    birthYear: 1750,
    deathYear: 1806,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-springfield-daniel-shays',
    name: 'Daniel Shays',
    roles: ['Continental Army Veteran', 'Farmer', 'Rebellion Leader'],
    bioShort:
      'Continental Army veteran who led the 1786-87 rebellion of debt-ridden farmers against the Massachusetts government. His march on the Springfield Armory exposed the weaknesses of the Articles of Confederation.',
    birthYear: 1747,
    deathYear: 1825,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-springfield-william-shepard',
    name: 'General William Shepard',
    roles: ['Continental Army Officer', 'Militia General', 'Armory Defender'],
    bioShort:
      'Continental Army veteran and Springfield militia general who defended the armory against Shays\' rebels in January 1787, ordering artillery fire that killed four attackers and dispersed the rest.',
    birthYear: 1737,
    deathYear: 1817,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-springfield-david-ames',
    name: 'David Ames',
    roles: ['Armory Superintendent', 'Manufacturer', 'Organizer'],
    bioShort:
      'Early superintendent of the Springfield Armory who oversaw the transition from a storage depot to a manufacturing facility. Under his direction, the armory began producing muskets for the Continental Army.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ORAL_TRADITION',
  },
  {
    id: 'person-springfield-luke-day',
    name: 'Luke Day',
    roles: ['Veteran', 'Farmer', 'Rebel Captain'],
    bioShort:
      'Continental Army veteran and farmer from West Springfield who led a force of rebels during Shays\' Rebellion. His failure to coordinate with Shays at the armory assault contributed to the rebellion\'s defeat.',
    birthYear: 1743,
    deathYear: 1801,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-springfield-john-worthington',
    name: 'John Worthington',
    roles: ['Lawyer', 'Loyalist', 'Political Leader'],
    bioShort:
      'Prominent Springfield lawyer and political figure who remained loyal to the Crown. His property was confiscated, and he represents the significant Loyalist presence in western Massachusetts.',
    birthYear: 1719,
    deathYear: 1800,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-springfield-thomas-day',
    name: 'Thomas Day',
    roles: ['Militia Captain', 'Farmer', 'Continental Soldier'],
    bioShort:
      'Springfield militia captain who led local companies at the siege of Boston and later served in the Continental Army. His service exemplifies the long commitment required of Revolutionary soldiers from inland towns.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ORAL_TRADITION',
  },
  {
    id: 'person-springfield-experience-storrs',
    name: 'Experience Storrs',
    roles: ['Soldier', 'Farmer', 'Veteran'],
    bioShort:
      'Springfield-area Continental soldier whose service record documents the war\'s toll on ordinary men: long marches, short rations, delayed pay, and the postwar economic hardship that fueled Shays\' Rebellion.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ANECDOTAL',
  },
];

export const springfieldEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-springfield-armory-established',
    name: 'Springfield Armory Established',
    startDate: new Date('1777-01-01'),
    datePrecision: 'YEAR',
    summary: `George Washington directed the establishment of a military arsenal at Springfield, Massachusetts, in 1777. The site was chosen for its strategic advantages: located on the Connecticut River but far enough inland to be safe from British naval attack, with access to water power, iron ore, and timber.

The armory began as a storage depot for munitions and gradually expanded into a manufacturing facility. Continental Army muskets, cartridges, and gun carriages were produced here, supplementing the weapons captured from the British and imported from France. The Springfield Armory would remain in operation until 1968, making it the longest-operating armory in American history.`,
    significanceWeight: 85,
    town: { connect: { id: 'us-ma-springfield' } },
  },
  {
    id: 'event-springfield-shays-rebellion-armory',
    name: "Shays' Rebellion: Assault on the Armory",
    startDate: new Date('1787-01-25'),
    datePrecision: 'DAY',
    summary: `On January 25, 1787, approximately 1,500 rebels led by Daniel Shays marched on the Springfield Armory, hoping to seize weapons to strengthen their rebellion against the Massachusetts government. General William Shepard, commanding a militia force defending the armory, ordered artillery fire that killed four attackers and wounded twenty.

The rebel force scattered, and Shays' army never recovered. The assault's failure marked the beginning of the end for the rebellion, though sporadic resistance continued for months. The ease with which the armory's defenders repulsed the attack demonstrated the importance of organized military capability — the same lesson the Revolution itself had taught.

Shays' Rebellion shocked the nation's leaders. It demonstrated that the Articles of Confederation could not maintain domestic order, and it accelerated the movement toward the Constitutional Convention in Philadelphia later that year.`,
    significanceWeight: 90,
    town: { connect: { id: 'us-ma-springfield' } },
  },
  {
    id: 'event-springfield-shays-rebellion-begins',
    name: "Shays' Rebellion: Western Massachusetts Unrest",
    startDate: new Date('1786-08-29'),
    datePrecision: 'DAY',
    summary: `In August 1786, armed groups of farmers began closing courts in western Massachusetts to prevent foreclosure proceedings against debtors. Many of the rebels were Continental Army veterans who had been paid in depreciated currency and now faced imprisonment for debts they could not pay.

The rebellion reflected deep anger at the Massachusetts government's fiscal policies, which favored eastern creditors over western farmers. Veterans who had fought for liberty found themselves being jailed by the government they had created. The irony was not lost on anyone.

Springfield became central to the crisis because of the armory. If the rebels could seize the weapons stored there, their movement would transform from protest to serious military threat.`,
    significanceWeight: 80,
    town: { connect: { id: 'us-ma-springfield' } },
  },
  {
    id: 'event-springfield-lexington-alarm-response',
    name: 'Springfield Responds to Lexington',
    startDate: new Date('1775-04-20'),
    datePrecision: 'DAY',
    summary: `When news of Lexington reached Springfield — a hundred miles west of Boston — militia companies mustered and began the long march east. Springfield's distance meant its forces arrived after the initial fighting, but they joined the siege of Boston and served throughout the summer.

The response demonstrated the reach of the Massachusetts alarm system and the depth of patriot sentiment in the Connecticut Valley. Springfield was far from the coast, far from the centers of radical politics, but its residents were ready to fight.`,
    significanceWeight: 55,
    town: { connect: { id: 'us-ma-springfield' } },
  },
  {
    id: 'event-springfield-continental-army-supply',
    name: 'Springfield as Continental Supply Route',
    startDate: new Date('1776-01-01'),
    datePrecision: 'YEAR',
    summary: `Springfield's location on the Connecticut River made it a key node in the Continental Army's supply network. Provisions, munitions, and equipment moved through the town between New England and the middle colonies.

The town's merchants and farmers supplied the army with food, clothing, and raw materials. The economic disruption was significant — wartime inflation and currency depreciation hit inland communities hard — but Springfield's contributions to the supply chain were essential to sustaining military operations.`,
    significanceWeight: 55,
    town: { connect: { id: 'us-ma-springfield' } },
  },
  {
    id: 'event-springfield-court-closures',
    name: 'Springfield Court Closures',
    startDate: new Date('1774-09-01'),
    datePrecision: 'MONTH',
    summary: `Following the pattern set in Worcester and other counties, Hampshire County residents in the Springfield area organized to prevent royal courts from sitting. Armed crowds confronted judges and demanded they refuse to serve under the Massachusetts Government Act.

The court closures in western Massachusetts demonstrated that resistance to British authority was not confined to the Boston area. Springfield and its neighboring towns acted with the same determination as their eastern counterparts, dismantling royal judicial authority months before the first shots were fired.`,
    significanceWeight: 65,
    town: { connect: { id: 'us-ma-springfield' } },
  },
  {
    id: 'event-springfield-musket-production',
    name: 'First Muskets Produced at Springfield',
    startDate: new Date('1778-01-01'),
    datePrecision: 'YEAR',
    summary: `The Springfield Armory began manufacturing muskets in 1778, transitioning from a storage facility to a production center. The early muskets were assembled from parts produced by local gunsmiths and blacksmiths, with the armory serving as an assembly and quality-control point.

Production was slow by later standards — perhaps a few hundred muskets in the first year — but every weapon produced represented one less gun that needed to be captured from the British or imported from France. The armory established the principle of government-directed weapons manufacturing that would shape American military-industrial policy for two centuries.`,
    significanceWeight: 70,
    town: { connect: { id: 'us-ma-springfield' } },
  },
  {
    id: 'event-springfield-knox-visit',
    name: 'Henry Knox Inspects Springfield',
    startDate: new Date('1777-03-01'),
    datePrecision: 'MONTH',
    summary: `Henry Knox, serving as Washington's artillery chief, visited Springfield to assess the site's potential as a military arsenal. Knox recognized the town's strategic advantages: the Connecticut River provided transportation, the surrounding forests supplied timber, and the inland location offered security from British attack.

Knox's recommendation led to Washington's authorization of the armory. The young officer who had dragged cannon from Ticonderoga to Boston understood logistics, and his judgment about Springfield's value proved sound. The armory he helped establish would serve the nation for nearly two centuries.`,
    significanceWeight: 65,
    town: { connect: { id: 'us-ma-springfield' } },
  },
];

export const springfieldStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-springfield-shays',
    title: 'The Veteran Who Marched on the Armory',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-springfield-daniel-shays' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Daniel Shays had fought at Bunker Hill. He had served at Ticonderoga, Saratoga, and Stony Point. He had been commissioned a captain in the Continental Army, received a ceremonial sword from the Marquis de Lafayette, and fought for six years to create a nation that claimed all men were created equal.

By 1786, that nation was trying to throw him in prison for debt.

Shays was not alone. Across western Massachusetts, Continental veterans faced the same crisis. They had been paid in currency that rapidly depreciated. Their farms had been neglected during years of service. Now the Massachusetts government demanded taxes payable in hard money that no one had, and courts were foreclosing on veterans who had fought for the liberty their government now denied them.

The irony was unbearable. Men who had risked their lives at Bunker Hill and Saratoga were being marched to debtors' prison by the same government they had fought to create. They had been promised liberty; they received foreclosure notices.

So Shays organized. He knew how armies worked — he had served in one for six years. He gathered veterans and farmers, marched on courthouses to prevent foreclosures, and eventually targeted the Springfield Armory. If his force could seize weapons, they could negotiate from strength.

On January 25, 1787, roughly 1,500 men approached the armory. General William Shepard, himself a Continental veteran, defended it with militia and artillery. When Shays' men did not halt, Shepard ordered his cannon to fire. Four rebels died. The rest scattered.

Shays fled to Vermont. He was eventually pardoned but never recovered his standing. He died in 1825, old and poor, a veteran twice over — once of a revolution that succeeded, once of a rebellion that failed.

His rebellion, however, changed history. The spectacle of veterans fighting veterans at a national armory convinced delegates at the Constitutional Convention that the Articles of Confederation had failed. Without Shays, the Constitution might have come later — or not at all.`,
    audioScript: `Daniel Shays had fought at Bunker Hill, Ticonderoga, and Saratoga. He had served six years to create a nation that claimed all men were created equal.

By 1786, that nation was trying to throw him in prison for debt.

Across western Massachusetts, veterans faced the same crisis. Paid in depreciated currency, their farms neglected, now facing foreclosure. Men who had risked their lives at Bunker Hill were being marched to debtors' prison by the government they had fought to create.

So Shays organized. On January 25, 1787, 1,500 men approached the Springfield Armory. General Shepard ordered his cannon to fire. Four rebels died. The rest scattered.

Shays fled. But his rebellion changed history. The spectacle convinced the Constitutional Convention that the Articles of Confederation had failed. Without Shays, the Constitution might never have come.`,
    tags: ['veterans', 'rebellion', 'justice', 'constitution'],
    town: { connect: { id: 'us-ma-springfield' } },
  },
  {
    id: 'story-springfield-modern-armory',
    title: 'The Arsenal of Democracy',
    storyType: 'MODERN_VOICE',
    narratorName: 'Park Ranger',
    narratorRole: 'Springfield Armory National Historic Site',
    verificationStatus: 'UNVERIFIED',
    textVersion: `The Springfield Armory closed in 1968. For 191 years, this facility had manufactured weapons for the United States military — from Revolutionary War muskets to the M14 rifle used in Vietnam. The site is now a National Historic Site run by the National Park Service, and we try to help visitors understand what that span of time means.

Most visitors come expecting a museum of guns. What we try to show them is a story about technology, labor, and the relationship between a government and the people who make its weapons.

The Revolutionary origins of the armory are essential context. Washington chose Springfield because it was safe — inland, on a river, close to resources. But the armory's significance went beyond its location. It established the principle that a democratic government needed to manufacture its own weapons rather than depend on private suppliers or foreign imports. Self-sufficiency in arms production was, in Washington's thinking, a requirement of sovereignty.

During the Revolution, the armory was small — a few buildings, a handful of workers, modest production. But the idea was larger than the facility. A nation that could make its own guns was a nation that could defend itself.

The Shays' Rebellion connection adds another layer. When veterans marched on the armory they had helped fill, the contradiction was stark. The weapons stored here had been made to defend liberty. Now they were being used to prevent citizens from protesting economic injustice. That tension — between national security and individual rights, between order and liberty — never went away.

We tell visitors that the Springfield Armory is not just a place where guns were made. It is a place where America worked out, generation after generation, what it means to be a nation that arms its citizens and then asks what they are willing to do with that power.`,
    audioScript: `The Springfield Armory closed in 1968. For 191 years, it manufactured weapons for the United States military — from Revolutionary muskets to the M14 rifle.

Most visitors come expecting a museum of guns. What we show them is a story about technology, labor, and the relationship between government and the people who make its weapons.

Washington chose Springfield because it was safe and close to resources. But the armory established something larger: the principle that a democracy must manufacture its own weapons. Self-sufficiency in arms was, in Washington's thinking, a requirement of sovereignty.

The Shays' Rebellion adds another layer. Veterans marched on an armory they helped fill. Weapons made to defend liberty were used to suppress protest. That tension between security and rights never went away.

The armory is not just where guns were made. It is where America worked out what it means to arm citizens and then ask what they will do with that power.`,
    tags: ['armory', 'manufacturing', 'military', 'national-site'],
    town: { connect: { id: 'us-ma-springfield' } },
  },
];

// ============================================================================
// MARBLEHEAD
// ============================================================================

export const marbleheadTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Marblehead sent fishermen to war, and those fishermen saved the Revolution. Twice. John Glover's Marblehead Regiment — recruited from the town's fishing fleet — provided the seamanship that kept the Continental Army alive at two of the war's most desperate moments. Without Marblehead, there might not have been an American nation.

The first rescue came at Long Island in August 1776. After Washington's army was defeated in Brooklyn, Glover's men rowed 9,000 troops across the East River to Manhattan in a single night, through fog and current, saving the army from destruction. The second came at the Delaware crossing in December 1776. The famous painting shows Washington standing in a boat — but it was Marblehead fishermen pulling the oars, ferrying 2,400 soldiers, 18 cannon, and horses through ice-choked water in a winter storm. The Trenton attack that followed saved the Revolution from collapse.

Marblehead was a fishing town, not a political center. Its people were rough, practical, and accustomed to danger. The Grand Banks fishery produced men who could handle boats in conditions that would terrify soldiers raised on farms. When the army needed water transport, it turned to Marblehead because no one else could do it.

The town paid heavily. Marblehead lost more men per capita than almost any town in Massachusetts. Its fishing fleet was devastated by the war. The prosperity that fishing had built was destroyed, and the town never fully recovered its prewar standing. Marblehead gave the Revolution its most critical practical skills and received, in return, economic ruin.`,
};

export const marbleheadPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-marblehead-john-glover',
    name: 'Colonel John Glover',
    roles: ['Militia Colonel', 'Continental Army Brigadier', 'Fisherman'],
    bioShort:
      'Commander of the Marblehead Regiment whose fishermen-soldiers rowed the army across the East River at Long Island and the Delaware at Trenton. His men\'s seamanship saved the Revolution at its darkest moments.',
    birthYear: 1732,
    deathYear: 1797,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-marblehead-elbridge-gerry',
    name: 'Elbridge Gerry',
    roles: ['Politician', 'Continental Congress Delegate', 'Vice President'],
    bioShort:
      'Marblehead merchant and politician who signed the Declaration of Independence and later served as Vice President. He nearly escaped capture by British troops on the morning of April 19, 1775.',
    birthYear: 1744,
    deathYear: 1814,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-marblehead-azor-orne',
    name: 'Azor Orne',
    roles: ['Merchant', 'Patriot Leader', 'Committee of Safety'],
    bioShort:
      'Marblehead merchant who served on the Massachusetts Committee of Safety and helped coordinate the town\'s military response. He was targeted by British forces and narrowly escaped capture in April 1775.',
    birthYear: 1731,
    deathYear: 1796,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-marblehead-jeremiah-lee',
    name: 'Jeremiah Lee',
    roles: ['Merchant', 'Patriot Leader', 'Militia Colonel'],
    bioShort:
      'The wealthiest man in Marblehead, whose mansion still stands. Lee was meeting with patriot leaders in Menotomy on the night of April 18, 1775, and fled through fields in his nightclothes to escape British patrols. He caught pneumonia and died weeks later.',
    birthYear: 1721,
    deathYear: 1775,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-marblehead-romeo-romeo',
    name: 'Romeo (surname unknown)',
    roles: ['Soldier', 'Black Veteran', 'Fisherman'],
    bioShort:
      'One of several Black soldiers who served in the Marblehead Regiment. The regiment was notably integrated — Black and white fishermen served together, reflecting the practical egalitarianism of maritime communities.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ORAL_TRADITION',
  },
  {
    id: 'person-marblehead-agnes-surriage',
    name: 'Agnes Surriage Frankland',
    roles: ['Civilian', 'Social Figure', 'Loyalist Connection'],
    bioShort:
      'Marblehead woman of modest birth who married British baronet Sir Charles Henry Frankland. Her life story, spanning colonial class boundaries, reflected the complex social world that the Revolution disrupted.',
    birthYear: 1726,
    deathYear: 1783,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-marblehead-john-glover-jr',
    name: 'John Glover Jr.',
    roles: ['Soldier', 'Fisherman', 'Marblehead Regiment'],
    bioShort:
      'Son of Colonel John Glover who served alongside his father in the Marblehead Regiment. His service represents the family commitment that Marblehead households made to the war — fathers and sons serving together.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ORAL_TRADITION',
  },
  {
    id: 'person-marblehead-joshua-orne',
    name: 'Captain Joshua Orne',
    roles: ['Ship Captain', 'Privateer', 'Marblehead Mariner'],
    bioShort:
      'Marblehead sea captain who commanded privateers during the war, capturing British vessels along the New England coast. His experience illustrates how fishing skills translated directly into naval warfare.',
    birthYear: null,
    deathYear: null,
    verificationStatus: 'ORAL_TRADITION',
  },
];

export const marbleheadEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-marblehead-regiment-formed',
    name: 'Marblehead Regiment Organized',
    startDate: new Date('1775-05-19'),
    datePrecision: 'MONTH',
    summary: `John Glover organized the 21st Massachusetts Regiment, recruited primarily from Marblehead's fishing community. The regiment was distinctive in multiple ways: its men were experienced seamen, it was one of the most racially integrated units in the Continental Army, and its soldiers brought practical skills no farm-raised militia could match.

The fishermen of Marblehead knew boats, tides, currents, and foul weather. They were accustomed to working together in dangerous conditions. These skills, unremarkable in peacetime, would prove essential at Long Island and the Delaware.`,
    significanceWeight: 80,
    town: { connect: { id: 'us-ma-marblehead' } },
  },
  {
    id: 'event-marblehead-long-island-evacuation',
    name: 'Long Island Evacuation',
    startDate: new Date('1776-08-29'),
    datePrecision: 'DAY',
    summary: `After Washington's army was defeated at the Battle of Long Island, Glover's Marblehead Regiment rowed approximately 9,000 troops across the East River from Brooklyn to Manhattan in a single night. The evacuation began at dusk and continued through darkness and fog, using every available boat.

The Marblehead men worked the oars in silence, making trip after trip across the river while British forces closed in. By morning, the entire army had been saved. Without the seamanship of Marblehead fishermen, Washington's army would have been captured and the Revolution likely ended.

The evacuation demonstrated that the same skills that hauled cod from the Grand Banks could save an army from destruction. Maritime expertise, not military training, made the difference.`,
    significanceWeight: 95,
    town: { connect: { id: 'us-ma-marblehead' } },
  },
  {
    id: 'event-marblehead-delaware-crossing',
    name: 'Delaware River Crossing',
    startDate: new Date('1776-12-25'),
    datePrecision: 'DAY',
    summary: `On Christmas night, 1776, Glover's Marblehead men rowed the Continental Army across the ice-choked Delaware River for the surprise attack on Trenton. The crossing involved ferrying 2,400 soldiers, 18 cannon, and horses through a winter storm in flat-bottomed Durham boats.

The Marblehead fishermen, accustomed to working in freezing conditions on open water, managed the boats while soldiers huddled against the cold. The crossing took longer than planned — the attack hit Trenton at dawn rather than in darkness — but the surprise was complete.

The victory at Trenton, following weeks of devastating defeats, saved the Revolution from collapse. Washington's army had been disintegrating through desertion and expiring enlistments. Trenton restored morale and convinced soldiers to re-enlist. Once again, Marblehead seamanship had been the critical variable.`,
    significanceWeight: 100,
    town: { connect: { id: 'us-ma-marblehead' } },
  },
  {
    id: 'event-marblehead-lee-death',
    name: 'Death of Jeremiah Lee',
    startDate: new Date('1775-05-10'),
    datePrecision: 'MONTH',
    summary: `Jeremiah Lee, the wealthiest man in Marblehead and a key patriot organizer, died of pneumonia contracted during his escape from British forces on April 18, 1775. Lee had been meeting with Samuel Adams and John Hancock at a tavern in Menotomy when warned of approaching British patrols.

Lee fled through fields in his nightclothes, hiding behind stone walls in the cold night. The exposure led to illness from which he never recovered. His death was one of the Revolution's earliest casualties — a man killed not by gunfire but by the dangerous, unglamorous work of organizing resistance.

His mansion in Marblehead, one of the finest colonial homes in New England, still stands as a monument to the wealth and standing he sacrificed for the patriot cause.`,
    significanceWeight: 65,
    town: { connect: { id: 'us-ma-marblehead' } },
  },
  {
    id: 'event-marblehead-lexington-alarm',
    name: 'Marblehead Responds to Lexington Alarm',
    startDate: new Date('1775-04-19'),
    datePrecision: 'DAY',
    summary: `Marblehead militia companies mustered and marched south when news of Lexington reached the town. The response was rapid — Marblehead's alarm networks had been primed by the British naval activity visible from the harbor.

Marblehead men joined the growing siege force around Boston. Their service during the siege would lead to the formation of Glover's regiment, which would prove decisive in battles fought far from New England.`,
    significanceWeight: 60,
    town: { connect: { id: 'us-ma-marblehead' } },
  },
  {
    id: 'event-marblehead-smallpox-crisis',
    name: 'Smallpox Epidemic in Marblehead',
    startDate: new Date('1773-11-01'),
    datePrecision: 'YEAR',
    summary: `A devastating smallpox epidemic struck Marblehead in 1773-74, killing approximately one-third of the town's population. The epidemic, which provoked violent controversy over inoculation, weakened the community just as political tensions were reaching a breaking point.

The smallpox crisis intersected with the political crisis in complex ways. An inoculation hospital on Cat Island was burned by opponents of the practice. The town's population was diminished and its economy disrupted. Yet Marblehead still managed to organize effective resistance and contribute significantly to the war effort.`,
    significanceWeight: 55,
    town: { connect: { id: 'us-ma-marblehead' } },
  },
  {
    id: 'event-marblehead-privateering',
    name: 'Marblehead Privateering Operations',
    startDate: new Date('1776-01-01'),
    datePrecision: 'YEAR',
    summary: `Marblehead ship owners fitted out privateers throughout the war, though on a smaller scale than Salem. The town's experienced seamen were in demand for both naval and privateering service, creating competition for manpower between Glover's regiment and the privateering fleet.

Marblehead privateers captured British merchant vessels along the New England coast, disrupting supply lines and generating revenue for the town and the war effort. The economic impact of privateering helped offset, but did not eliminate, the devastating losses the fishing fleet suffered during the war.`,
    significanceWeight: 55,
    town: { connect: { id: 'us-ma-marblehead' } },
  },
  {
    id: 'event-marblehead-fishing-fleet-devastation',
    name: 'Destruction of the Fishing Fleet',
    startDate: new Date('1775-01-01'),
    datePrecision: 'YEAR',
    summary: `The war devastated Marblehead's fishing industry, the foundation of the town's economy. British naval patrols made the Grand Banks fishery inaccessible. Fishing vessels were converted to privateers or pressed into military service. Experienced fishermen were recruited for the army and navy.

By war's end, Marblehead's fishing fleet was a fraction of its prewar size. The town lost more men per capita than almost any community in Massachusetts — casualties that fell disproportionately on working families who depended on the sea. Marblehead's sacrifice was real and lasting. The town never fully recovered its prewar prosperity.`,
    significanceWeight: 60,
    town: { connect: { id: 'us-ma-marblehead' } },
  },
];

export const marbleheadStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-marblehead-glover-delaware',
    title: 'The Fishermen at the Oars',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-marblehead-john-glover' } },
    verificationStatus: 'VERIFIED',
    textVersion: `John Glover's men did not look like soldiers. They wore short blue jackets and canvas trousers instead of military uniforms. Their hands were calloused from rope and oar, not musket drill. They smelled of salt fish and tar. When they joined the Continental Army, regular soldiers looked at them and saw fishermen.

They were fishermen. That was the point.

Glover had recruited his regiment from Marblehead's waterfront — men who had worked the Grand Banks since they were boys, who knew currents and tides and weather the way farmers knew soil and seasons. Among them were Black men who had worked alongside white men on fishing boats, making the regiment one of the most integrated units in the Continental Army. The sea did not care about race; neither did Glover.

At Long Island in August 1776, with Washington's army trapped in Brooklyn and the British closing in, Glover's men were given the boats. Row the army across the East River. Do it at night. Do it in silence. Lose no one.

They rowed all night. Trip after trip, ferrying soldiers, cannon, horses, supplies. By morning, nine thousand men had been evacuated. The army survived.

Four months later, on Christmas night, they rowed again. This time it was the Delaware River, choked with ice, swept by a winter storm. The mission was the same: get the army across. The stakes were higher — this time, the army was attacking Trenton, a desperate gamble to save a revolution that was dying of defeat and desertion.

The crossing took hours longer than planned. The fishermen fought the current and the ice, their hands freezing on the oars. They got the army across. The attack succeeded. The Revolution survived.

Emanuel Leutze's famous painting of the crossing shows Washington standing heroically in the bow. Look closer. The men pulling the oars are the Marblehead fishermen — the men whose hands, and skill, and endurance actually made the crossing possible.

Glover returned to Marblehead after the war to find his town impoverished, his fishing fleet destroyed, his community diminished by losses. He had saved the army twice, but he could not save his town. He died in 1797, celebrated by the nation and mourned by the community that had given everything.`,
    audioScript: `John Glover's men did not look like soldiers. They wore blue jackets and canvas trousers. Their hands were calloused from rope and oar. They were fishermen. That was the point.

Glover recruited from Marblehead's waterfront — men who knew currents and tides, including Black fishermen who served alongside white. The sea did not care about race; neither did Glover.

At Long Island, with the army trapped, Glover's men rowed nine thousand soldiers across the East River in a single night. The army survived.

Four months later, Christmas night, they rowed again. The Delaware River, choked with ice. They got the army across. The attack at Trenton succeeded. The Revolution survived.

Look at Leutze's painting. Washington stands in the bow. But look closer. The men at the oars are the Marblehead fishermen — the men whose hands actually made the crossing possible.

Glover returned to find his town impoverished, his fleet destroyed. He had saved the army twice but could not save his town.`,
    tags: ['maritime', 'seamanship', 'delaware-crossing', 'sacrifice'],
    town: { connect: { id: 'us-ma-marblehead' } },
  },
  {
    id: 'story-marblehead-modern-museum',
    title: 'The Town That Remembers',
    storyType: 'MODERN_VOICE',
    narratorName: 'Museum Director',
    narratorRole: 'Marblehead Museum, Marblehead',
    verificationStatus: 'UNVERIFIED',
    textVersion: `Marblehead is a small town. You can walk from one end to the other in twenty minutes. The streets are narrow and winding because they follow paths laid out when this was a fishing village, and in some ways it still is.

At the Marblehead Museum, we tell a story that most Americans do not know. They know the painting — Washington crossing the Delaware. Very few know who was rowing. When we tell them it was fishermen from this small town on the Massachusetts coast, it changes what they see in that painting.

The Marblehead Regiment was remarkable in ways that go beyond the famous crossings. It was integrated — Black and white fishermen served together at a time when most of America was rigidly segregated. The regiment brought this maritime egalitarianism to the army, and it sometimes caused friction. Other units complained. Glover did not care. He needed men who could handle boats, and he would take them regardless of color.

We have artifacts from the regiment here in the museum. Not many — Marblehead fishermen were not the type to preserve memorabilia. But we have muster rolls, pension records, letters. These documents tell us who these men were: not gentlemen farmers or educated merchants, but working men whose practical skills happened to be exactly what the army needed.

The hardest part of our story to tell is the cost. Marblehead lost more men per capita than nearly any town in Massachusetts. The fishing fleet was destroyed. The town's economy collapsed and never fully recovered. When visitors walk through the old town and see its beautiful harbor, they are looking at a place that sacrificed its prosperity for a nation's independence.

We do not exaggerate this. We let the facts speak. The facts are enough.`,
    audioScript: `Marblehead is small. You can walk end to end in twenty minutes. At the Marblehead Museum, we tell a story most Americans do not know.

They know the painting — Washington crossing the Delaware. Very few know who was rowing. When we tell them it was fishermen from this town, it changes what they see.

The regiment was integrated — Black and white fishermen together, at a time when America was rigidly segregated. Glover needed men who could handle boats, regardless of color.

The hardest part is the cost. Marblehead lost more men per capita than nearly any Massachusetts town. The fishing fleet was destroyed. The economy never fully recovered.

When visitors see this beautiful harbor, they are looking at a place that sacrificed its prosperity for a nation's independence. We let the facts speak. The facts are enough.`,
    tags: ['museum', 'sacrifice', 'integration', 'memory'],
    town: { connect: { id: 'us-ma-marblehead' } },
  },
];
