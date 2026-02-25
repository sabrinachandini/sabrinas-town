// MODEL: Claude Opus (historical synthesis and narrative content)
// MODEL: Claude Sonnet (data structure and code)
// Rhode Island town expansion — Newport, Providence

import { Prisma } from '@prisma/client';

/**
 * Two Rhode Island towns with Revolutionary War significance.
 *
 * NOTE ON VERIFICATION: Historical content has been synthesized from
 * established scholarly sources including Robert Middlekauff's "The
 * Glorious Cause," Christian McBurney's "The Rhode Island Campaign,"
 * NPS documentation, Rhode Island Historical Society publications,
 * and Paul Davis's "The Gaspee Affair." Stories marked VERIFIED have
 * strong documentary evidence. Lesser-known voices carry ORAL_TRADITION
 * or ANECDOTAL status where the historical record is thinner.
 * Modern-voice stories are marked UNVERIFIED where we cannot fully
 * document claims from composite/representative narrators.
 */

// ============================================================================
// NEWPORT
// ============================================================================

export const newportTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Newport endured one of the longest British occupations of any American town during the Revolution. From December 1776 to October 1779, British and Hessian forces held the city, turning its elegant mansions into barracks and its wharves into naval stations. The occupation hollowed out a thriving colonial port — roughly half the population fled, dozens of buildings were torn down for firewood, and the town's commercial economy collapsed. Newport entered the war as one of the five largest cities in the colonies and emerged from it diminished in ways that took generations to recover from.

The Battle of Rhode Island in August 1778 was the first joint operation between American and French forces, though it ended in frustration when a storm and the departure of the French fleet under d'Estaing forced the Americans to retreat. The battle is also notable for the performance of the 1st Rhode Island Regiment, which included Black and Indigenous soldiers — one of the few integrated units in the Continental Army. Their stand against Hessian assaults near Portsmouth demonstrated that the question of who could fight for American liberty was being answered on the battlefield before it was settled in law.

When Rochambeau's French army arrived in Newport in July 1780, the town became the operational headquarters for the Franco-American alliance. The French brought money, discipline, and professional military capacity. Their march south from Newport to Yorktown in 1781 was the campaign that ended the war. Newport's role as the staging ground for that decisive movement makes it one of the most consequential locations in the Revolution's final chapter.`,
};

export const newportPeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-newport-rochambeau',
    name: 'Comte de Rochambeau',
    roles: ['French Army Commander', 'Lieutenant General', 'Alliance Leader'],
    bioShort:
      'Jean-Baptiste Donatien de Vimeur, Comte de Rochambeau, commanded the French expeditionary force that arrived in Newport in July 1780. His patience, professionalism, and willingness to serve under Washington were essential to the alliance that won the war at Yorktown.',
    birthYear: 1725,
    deathYear: 1807,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-newport-prescott',
    name: 'General Richard Prescott',
    roles: ['British Commander', 'Occupation Governor', 'Prisoner of War'],
    bioShort:
      'British general who commanded the occupation of Newport. He was famously captured in a nighttime raid by American Lieutenant Colonel William Barton in July 1777 and exchanged for the American general Charles Lee. His capture humiliated the British garrison.',
    birthYear: 1725,
    deathYear: 1788,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-newport-barton',
    name: 'William Barton',
    roles: ['Continental Army Officer', 'Lieutenant Colonel', 'Raid Leader'],
    bioShort:
      'Rhode Island officer who led the daring nighttime capture of British General Prescott from his headquarters near Newport in July 1777. The raid, executed by a small party crossing Narragansett Bay in whaleboats, was one of the war\'s most celebrated commando operations.',
    birthYear: 1748,
    deathYear: 1831,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-newport-destaing',
    name: 'Comte d\'Estaing',
    roles: ['French Admiral', 'Fleet Commander', 'Alliance Naval Leader'],
    bioShort:
      'French admiral whose fleet arrived off Rhode Island in 1778 to support the American attack on Newport. A severe storm and the appearance of a British fleet led d\'Estaing to withdraw to Boston for repairs, leaving the American ground forces without naval support and dooming the campaign.',
    birthYear: 1729,
    deathYear: 1794,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-newport-colonel-greene',
    name: 'Colonel Christopher Greene',
    roles: ['Continental Army Officer', '1st Rhode Island Regiment Commander'],
    bioShort:
      'Commander of the 1st Rhode Island Regiment, which included Black and Indigenous soldiers. Greene led the regiment at the Battle of Rhode Island in 1778, where they repulsed repeated Hessian assaults. He was killed in a Loyalist raid in Westchester County, New York, in 1781.',
    birthYear: 1737,
    deathYear: 1781,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-newport-jack-sisson',
    name: 'Jack Sisson',
    roles: ['Continental Soldier', 'Raid Participant', 'Formerly Enslaved Man'],
    bioShort:
      'A Black soldier who participated in the raid to capture General Prescott in 1777. Sisson is credited with breaking down the door to Prescott\'s quarters. His role in one of the war\'s most celebrated operations highlights the contributions of Black soldiers that were often overlooked in subsequent retellings.',
    birthYear: 1743,
    deathYear: 1821,
    verificationStatus: 'ANECDOTAL',
  },
  {
    id: 'person-newport-ezra-stiles-newport',
    name: 'Ezra Stiles',
    roles: ['Congregational Minister', 'Touro Synagogue Associate', 'Intellectual'],
    bioShort:
      'Minister of Newport\'s Second Congregational Church before the war and close associate of the town\'s diverse religious communities. Stiles left Newport ahead of the British occupation and later became president of Yale. His Newport diary entries document the town\'s political and social life on the eve of revolution.',
    birthYear: 1727,
    deathYear: 1795,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-newport-mary-gould-almy',
    name: 'Mary Gould Almy',
    roles: ['Diarist', 'Civilian', 'Occupation Witness'],
    bioShort:
      'Newport woman whose diary from 1778 provides one of the few civilian accounts of life under British occupation. Married to a Loyalist while her sympathies leaned patriot, Almy documented the fear, scarcity, and moral complexity of living in an occupied town during wartime.',
    birthYear: 1735,
    deathYear: 1808,
    verificationStatus: 'VERIFIED',
  },
];

export const newportEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-newport-british-occupation-1776',
    name: 'British Occupation of Newport Begins',
    startDate: new Date('1776-12-08'),
    datePrecision: 'DAY',
    summary: `A British force of approximately 7,000 troops under General Henry Clinton landed on Aquidneck Island and occupied Newport on December 8, 1776. The occupation would last nearly three years and devastate the town. Roughly half the civilian population fled, and the British used buildings, fences, and trees for fuel and fortification material.

Newport had been one of the five largest cities in the American colonies — a prosperous port with a cosmopolitan population. The occupation ended that prosperity. By the time the British withdrew in October 1779, the town was physically and economically broken. The scars of occupation shaped Newport's trajectory for decades.`,
    significanceWeight: 85,
    lat: 41.4901,
    lng: -71.3128,
    town: { connect: { id: 'us-ri-newport' } },
  },
  {
    id: 'event-newport-battle-rhode-island-1778',
    name: 'Battle of Rhode Island',
    startDate: new Date('1778-08-29'),
    datePrecision: 'DAY',
    summary: `The Battle of Rhode Island on August 29, 1778, was the first attempted joint operation between American and French forces. American troops under General John Sullivan advanced down Aquidneck Island toward Newport after the French fleet under d'Estaing was expected to block the harbor. A storm scattered the fleets, and d'Estaing withdrew to Boston for repairs, leaving the Americans exposed.

Sullivan's forces fought a disciplined retreat. The 1st Rhode Island Regiment — composed largely of Black and Indigenous soldiers — held the American right flank against repeated Hessian assaults near Portsmouth. Their performance was one of the most notable engagements by soldiers of color in the entire war.`,
    significanceWeight: 80,
    lat: 41.5270,
    lng: -71.2830,
    town: { connect: { id: 'us-ri-newport' } },
  },
  {
    id: 'event-newport-rochambeau-arrival-1780',
    name: 'Rochambeau\'s French Army Arrives in Newport',
    startDate: new Date('1780-07-11'),
    datePrecision: 'DAY',
    summary: `The Comte de Rochambeau landed at Newport on July 11, 1780, with approximately 5,500 French troops, establishing the town as the headquarters for the Franco-American alliance. The French army brought professional discipline, hard currency, and a supply infrastructure that immediately benefited the local economy.

Rochambeau's forces remained in Newport for nearly a year, training and waiting for the right moment to march. Their departure in June 1781 — marching south through Connecticut to link up with Washington's army — set in motion the campaign that culminated in the British surrender at Yorktown. Newport was the starting point of the march that ended the war.`,
    significanceWeight: 90,
    lat: 41.4901,
    lng: -71.3128,
    town: { connect: { id: 'us-ri-newport' } },
  },
  {
    id: 'event-newport-prescott-capture-1777',
    name: 'Capture of General Prescott',
    startDate: new Date('1777-07-10'),
    datePrecision: 'DAY',
    summary: `On the night of July 10, 1777, Lieutenant Colonel William Barton led a raiding party of about forty men across Narragansett Bay in whaleboats. They landed on Aquidneck Island, slipped past British sentries, and seized General Richard Prescott from his headquarters near Newport. The general was taken in his nightclothes.

The capture was a propaganda triumph and a practical achievement: Prescott was eventually exchanged for the American general Charles Lee, then held by the British. The raid demonstrated that the British occupation of Newport, while formidable, was not impenetrable.`,
    significanceWeight: 65,
    lat: 41.5100,
    lng: -71.3200,
    town: { connect: { id: 'us-ri-newport' } },
  },
  {
    id: 'event-newport-british-withdrawal-1779',
    name: 'British Withdraw from Newport',
    startDate: new Date('1779-10-25'),
    datePrecision: 'DAY',
    summary: `The British abandoned Newport in October 1779, consolidating their forces in New York as the strategic situation shifted. They left behind a town stripped of its wealth, its population reduced by half, and many of its buildings destroyed or damaged. The withdrawal ended nearly three years of occupation.

Newport's residents returned to find their town transformed. The physical damage was severe, but the economic disruption was worse. Trade networks had been broken, ships seized or destroyed, and the town's merchant class scattered. Newport would never fully recover its prewar status as one of America's leading ports.`,
    significanceWeight: 70,
    lat: 41.4901,
    lng: -71.3128,
    town: { connect: { id: 'us-ri-newport' } },
  },
  {
    id: 'event-newport-1st-rhode-island-formed',
    name: '1st Rhode Island Regiment Recruits Black and Indigenous Soldiers',
    startDate: new Date('1778-02-14'),
    datePrecision: 'DAY',
    summary: `In February 1778, the Rhode Island General Assembly authorized the enlistment of enslaved men into the 1st Rhode Island Regiment, with the promise of freedom upon completion of service. The regiment became one of the few integrated units in the Continental Army, including Black and Indigenous soldiers alongside white troops.

The decision was driven by desperate manpower shortages, but it raised fundamental questions about the meaning of the liberty being fought for. The regiment served with distinction through the rest of the war, including their notable stand at the Battle of Rhode Island. Their service was both a military contribution and a moral argument.`,
    significanceWeight: 80,
    lat: 41.4901,
    lng: -71.3128,
    town: { connect: { id: 'us-ri-newport' } },
  },
  {
    id: 'event-newport-french-fleet-departs-yorktown',
    name: 'French Army Marches from Newport Toward Yorktown',
    startDate: new Date('1781-06-10'),
    datePrecision: 'DAY',
    summary: `Rochambeau's French army departed Newport in June 1781, beginning the long march south that would end at Yorktown, Virginia. The army moved through Connecticut and linked up with Washington's Continental forces near the Hudson River. Together, they marched to Virginia to trap Cornwallis's British army.

The march from Newport to Yorktown was a logistical achievement and a strategic masterstroke. The departure marked the end of Newport's role as French headquarters and the beginning of the campaign that ended the war. The route the French army took through New England is still traced by historical markers.`,
    significanceWeight: 85,
    lat: 41.4901,
    lng: -71.3128,
    town: { connect: { id: 'us-ri-newport' } },
  },
  {
    id: 'event-newport-synagogue-letter-washington',
    name: 'Washington\'s Letter to the Hebrew Congregation of Newport',
    startDate: new Date('1790-08-18'),
    datePrecision: 'DAY',
    summary: `While not a wartime event, Washington's 1790 letter to the Touro Synagogue congregation in Newport is inseparable from the Revolution's legacy. Responding to a letter of welcome from Moses Seixas, Washington wrote that the United States "gives to bigotry no sanction, to persecution no assistance" — one of the earliest presidential statements on religious liberty.

Newport's Jewish community had experienced the war directly, with many members dispersing during the British occupation and returning to a diminished town. Washington's letter affirmed that the new nation's promise of liberty extended to all faiths — a principle rooted in the Revolution's ideals, tested in towns like Newport.`,
    significanceWeight: 75,
    lat: 41.4893,
    lng: -71.3120,
    town: { connect: { id: 'us-ri-newport' } },
  },
];

export const newportStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-newport-1st-rhode-island-regiment',
    title: 'The Regiment That Fought for Someone Else\'s Freedom',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-newport-colonel-greene' } },
    verificationStatus: 'VERIFIED',
    textVersion: `The 1st Rhode Island Regiment was formed out of desperation. By early 1778, Rhode Island could not fill its Continental Army quota with white volunteers. The state legislature voted to allow enslaved men to enlist, promising them freedom in exchange for military service. Their owners would be compensated by the state. It was a transaction as much as an emancipation — but the men who signed up were not abstractions. They were people choosing the uncertainty of combat over the certainty of bondage.

Colonel Christopher Greene commanded the regiment. At the Battle of Rhode Island on August 29, 1778, his men held the right flank of the American line near Portsmouth. Hessian troops — professional German soldiers fighting under British contract — launched repeated assaults against the position. The 1st Rhode Island held. Contemporary accounts describe the fighting as fierce and the regiment's discipline as exceptional.

The irony was inescapable and largely uncommented upon at the time. Men who were legally property were fighting to secure the independence of a nation founded on the principle that all men are created equal. The contradiction did not trouble most white Americans in 1778. It troubled the men in the regiment, who understood exactly what they were doing and what they were owed.

The regiment served through the rest of the war. Colonel Greene was killed in a Loyalist ambush in 1781. Many of the Black soldiers who survived the war found that the freedom they had been promised was unevenly honored. Some were recognized; others were forgotten. The regiment's story is not a simple tale of heroism rewarded. It is a story about who gets to fight for liberty and whether the nation will remember what they did.`,
    audioScript: `The 1st Rhode Island Regiment was formed out of desperation. Rhode Island could not fill its quota with white volunteers. The legislature authorized enlisting enslaved men, promising freedom for service. It was a transaction as much as an emancipation — but the men who signed up were choosing combat over bondage.

At the Battle of Rhode Island in August 1778, the regiment held against repeated Hessian assaults. Their discipline was exceptional. Men who were legally property fought to secure independence for a nation founded on the idea that all men are created equal.

Colonel Greene was killed in 1781. Many Black soldiers who survived found that promised freedom was unevenly honored. Not a simple tale of heroism rewarded — a story about who fights for liberty and whether the nation remembers.`,
    tags: ['1st Rhode Island', 'Black soldiers', 'emancipation', 'Battle of Rhode Island'],
    town: { connect: { id: 'us-ri-newport' } },
  },
  {
    id: 'story-newport-modern-occupation-memory',
    title: 'What Three Years of Occupation Cost',
    storyType: 'MODERN_VOICE',
    narratorName: 'Newport Historical Society Curator',
    narratorRole: 'Collections and Interpretation',
    verificationStatus: 'UNVERIFIED',
    textVersion: `People visit Newport today and see the mansions, the harbor, the preserved colonial architecture. What they do not see is the town that was destroyed between 1776 and 1779. The British occupation of Newport lasted nearly three years, and it ended the town's status as one of the five largest and wealthiest cities in the American colonies. Newport never got it back.

The numbers tell part of the story. Before the occupation, Newport had roughly 9,000 residents. By the time the British left, fewer than 4,000 remained. The British tore down hundreds of buildings for firewood and fortification material. Trees were cut, fences stripped, wharves dismantled. When Mary Gould Almy wrote in her diary about watching the town be consumed, she was describing a process that was both military strategy and slow-motion demolition.

What strikes me most in the collections is the evidence of what did not come back. The merchant families who had made Newport a center of trade scattered to Providence, to Connecticut, to places that had not been occupied. The trade routes they had built over decades were severed. Providence, which had been Newport's inland rival, grew while Newport shrank. The shift in economic power within Rhode Island that the occupation caused has never fully reversed.

The French arrival in 1780 brought temporary prosperity — Rochambeau's army spent money and the troops were remarkably well-behaved by eighteenth-century standards. But the French left too, marching south to Yorktown. Newport was left to rebuild with diminished resources and a diminished population. The Revolution gave America its independence. It gave Newport a wound that shaped the town for the next two centuries.`,
    audioScript: `People visit Newport today and see mansions and harbor. They do not see the town destroyed between 1776 and 1779. The British occupation lasted three years and ended Newport's status as one of the five largest American cities. It never recovered.

Before occupation: 9,000 residents. After: fewer than 4,000. Hundreds of buildings torn down for firewood. Mary Gould Almy's diary describes watching the town consumed. Merchant families scattered to Providence and Connecticut. The economic shift within Rhode Island has never fully reversed.

The French arrival in 1780 brought temporary prosperity. But they marched to Yorktown and left Newport to rebuild alone. The Revolution gave America independence. It gave Newport a wound that shaped the town for two centuries.`,
    tags: ['occupation', 'destruction', 'economic decline', 'French alliance'],
    town: { connect: { id: 'us-ri-newport' } },
  },
];

// ============================================================================
// PROVIDENCE
// ============================================================================

export const providenceTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Providence was where Rhode Island's revolution began — not in 1775, but in 1772, when colonists burned the British revenue schooner HMS Gaspee in Narragansett Bay. The Gaspee affair was one of the earliest acts of organized violence against British authority, predating the Boston Tea Party by more than a year. A royal commission investigated the burning but could not secure a single witness willing to testify. The colony's refusal to cooperate with British investigators was a collective act of defiance that foreshadowed the broader resistance to come.

Providence's contribution to the Revolution was heavily financial. The Brown family — among the wealthiest merchants in New England — used their commercial networks to finance privateering operations, supply the Continental Army, and fund the state's military efforts. Nicholas Brown, John Brown, and their associates turned Providence's merchant economy into a war-support infrastructure. The relationship between private wealth and public war effort was as visible in Providence as anywhere in the colonies.

Nathanael Greene, born in nearby Warwick but deeply connected to Providence's political and commercial networks, became one of Washington's most trusted generals. Greene's strategic brilliance in the Southern Campaign of 1780-1781 helped turn the war's tide. Rhode Island's small size meant that Providence's leaders — its merchants, its politicians, its military officers — were tightly interconnected. The town functioned less as a distant capital and more as a command center where decisions about money, men, and strategy were made by people who knew each other personally.

Providence also served as a base for privateering operations that harassed British shipping throughout the war. The line between patriotism and profit was blurred by design — privateer owners stood to gain financially while serving the American cause. This practical fusion of self-interest and ideology was characteristic of Providence's approach to revolution.`,
};

export const providencePeople: Prisma.PersonCreateInput[] = [
  {
    id: 'person-providence-nathanael-greene',
    name: 'Nathanael Greene',
    roles: ['Continental Army Major General', 'Quartermaster General', 'Southern Campaign Commander'],
    bioShort:
      'Rhode Island\'s most important military figure of the Revolution. A self-taught strategist from a Quaker family, Greene rose from militia private to become Washington\'s most trusted general. His Southern Campaign of 1780-1781 is considered one of the most skillful operations of the war.',
    birthYear: 1742,
    deathYear: 1786,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-providence-john-brown',
    name: 'John Brown',
    roles: ['Merchant', 'Privateer Financier', 'Gaspee Raid Organizer'],
    bioShort:
      'Wealthy Providence merchant who helped organize the burning of the Gaspee in 1772 and later financed privateering operations during the war. Brown represented the fusion of commercial ambition and revolutionary politics that characterized Providence\'s contribution to independence.',
    birthYear: 1736,
    deathYear: 1803,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-providence-stephen-hopkins',
    name: 'Stephen Hopkins',
    roles: ['Governor of Rhode Island', 'Continental Congress Delegate', 'Declaration Signer'],
    bioShort:
      'Former governor of Rhode Island and signer of the Declaration of Independence. Hopkins was one of the oldest signers — his hands trembled from palsy as he signed, and he reportedly said, "My hand trembles, but my heart does not." He had been arguing against British taxation since the 1760s.',
    birthYear: 1707,
    deathYear: 1785,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-providence-esek-hopkins',
    name: 'Esek Hopkins',
    roles: ['Commander-in-Chief of the Continental Navy', 'Privateer Captain'],
    bioShort:
      'Brother of Stephen Hopkins and the first commander-in-chief of the Continental Navy. His 1776 raid on Nassau in the Bahamas was the Navy\'s first amphibious operation. He was later censured and dismissed by Congress for failing to follow orders, a controversial end to a significant naval career.',
    birthYear: 1718,
    deathYear: 1802,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-providence-moses-brown',
    name: 'Moses Brown',
    roles: ['Merchant', 'Abolitionist', 'Quaker Reformer'],
    bioShort:
      'Member of the powerful Brown family who broke with his brothers over the issue of slavery and became one of New England\'s earliest abolitionists. Moses used his wealth to support Quaker causes and later helped establish the Rhode Island Anti-Slavery Society. His moral evolution complicated the family\'s legacy.',
    birthYear: 1738,
    deathYear: 1836,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-providence-abraham-whipple',
    name: 'Abraham Whipple',
    roles: ['Continental Navy Captain', 'Privateer', 'Gaspee Raid Leader'],
    bioShort:
      'Providence sea captain who led the boats that attacked the Gaspee in 1772 and later served as a captain in the Continental Navy. Whipple captured several British prizes during the war before being taken prisoner at the fall of Charleston in 1780.',
    birthYear: 1733,
    deathYear: 1819,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-providence-james-manning',
    name: 'James Manning',
    roles: ['President of Brown University', 'Baptist Minister', 'Continental Congress Delegate'],
    bioShort:
      'First president of the College of Rhode Island (later Brown University) who kept the institution functioning through the war years. Manning used the college as a platform for patriot politics and served as a delegate to the Continental Congress. The college\'s University Hall was used as a barracks and hospital during the conflict.',
    birthYear: 1738,
    deathYear: 1791,
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'person-providence-catharine-littlefield-greene',
    name: 'Catharine Littlefield Greene',
    roles: ['General\'s Wife', 'Camp Companion', 'Wartime Correspondent'],
    bioShort:
      'Wife of Nathanael Greene who accompanied him to winter camps and maintained correspondence networks that kept Rhode Island connected to the war\'s progress. Known for her resilience and social intelligence, she managed the family\'s affairs during her husband\'s long campaigns in the South.',
    birthYear: 1755,
    deathYear: 1814,
    verificationStatus: 'ANECDOTAL',
  },
];

export const providenceEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-providence-gaspee-affair-1772',
    name: 'Burning of the HMS Gaspee',
    startDate: new Date('1772-06-10'),
    datePrecision: 'DAY',
    summary: `On the night of June 9-10, 1772, a group of Providence men led by Abraham Whipple rowed out to the grounded British revenue schooner HMS Gaspee in Narragansett Bay. They shot and wounded the ship's commander, Lieutenant William Dudingston, removed the crew, and burned the vessel to the waterline. The Gaspee had been aggressively enforcing trade regulations and had become deeply unpopular with Rhode Island merchants.

A royal commission of inquiry was established to identify the perpetrators, but no one in Rhode Island would testify. The colony's collective silence was a remarkable act of organized resistance — more than a year before the Boston Tea Party. The Gaspee affair demonstrated that colonial defiance of British authority had deep roots in Rhode Island.`,
    significanceWeight: 85,
    lat: 41.7268,
    lng: -71.3770,
    town: { connect: { id: 'us-ri-providence' } },
  },
  {
    id: 'event-providence-rhode-island-renounces-allegiance',
    name: 'Rhode Island Renounces Allegiance to the Crown',
    startDate: new Date('1776-05-04'),
    datePrecision: 'DAY',
    summary: `On May 4, 1776, Rhode Island became the first colony to formally renounce its allegiance to the British Crown — two months before the Declaration of Independence. The act, passed by the General Assembly meeting in Providence, struck the king's name from all official documents and required a new oath of allegiance to the colony rather than to George III.

The early renunciation reflected Rhode Island's long tradition of political independence and its merchants' frustration with British trade restrictions. Providence's commercial leaders had been among the most vocal opponents of imperial taxation, and the Gaspee affair had demonstrated the colony's willingness to back defiance with action.`,
    significanceWeight: 80,
    lat: 41.8240,
    lng: -71.4128,
    town: { connect: { id: 'us-ri-providence' } },
  },
  {
    id: 'event-providence-university-hall-barracks',
    name: 'Brown University\'s University Hall Becomes a Barracks',
    startDate: new Date('1776-12-01'),
    datePrecision: 'MONTH',
    summary: `When the British occupied Newport in December 1776, American and French forces used University Hall at the College of Rhode Island (later Brown University) as a barracks and hospital. The building housed soldiers at various points during the war, and the college suspended regular instruction during the most intense periods of military activity.

The conversion of a college building into military quarters reflected the war's intrusion into every aspect of civilian life. President James Manning worked to keep the institution alive through the disruption, and the college resumed full operations after the war. University Hall still stands on the Brown campus, one of the oldest college buildings in the country.`,
    significanceWeight: 55,
    lat: 41.8268,
    lng: -71.4025,
    town: { connect: { id: 'us-ri-providence' } },
  },
  {
    id: 'event-providence-privateering-operations',
    name: 'Providence Privateering Operations',
    startDate: new Date('1776-03-01'),
    datePrecision: 'MONTH',
    summary: `Providence merchants financed and outfitted numerous privateering vessels during the Revolution. These privately owned ships, authorized by letters of marque from Congress and the state, preyed on British commercial shipping throughout the Atlantic. The profits were shared between the ship owners, crews, and the government.

The Brown family and other Providence merchants invested heavily in privateering, which blurred the line between patriotic service and commercial opportunity. Successful prizes could yield enormous returns. The privateering fleet collectively did more damage to British commerce than the tiny Continental Navy, and Providence was one of the most active ports in the enterprise.`,
    significanceWeight: 65,
    lat: 41.8220,
    lng: -71.4100,
    town: { connect: { id: 'us-ri-providence' } },
  },
  {
    id: 'event-providence-greene-appointed-southern-command',
    name: 'Nathanael Greene Takes Command of the Southern Army',
    startDate: new Date('1780-10-14'),
    datePrecision: 'DAY',
    summary: `In October 1780, Washington appointed Nathanael Greene to command the Continental Army's Southern Department, replacing Horatio Gates after the disastrous defeat at Camden. Greene, deeply connected to Providence's political networks, took command of a demoralized and poorly supplied force and turned it into an effective fighting army.

Greene's Southern Campaign is considered one of the most skillful operations of the war. He divided his forces, used partisan allies, and fought a series of battles — Cowpens, Guilford Courthouse, Hobkirk's Hill, Eutaw Springs — that gradually wore down the British position in the Carolinas and Georgia. He famously said, "We fight, get beat, rise, and fight again." Rhode Island's contribution to the war effort found its highest expression in Greene's generalship.`,
    significanceWeight: 85,
    lat: 41.8240,
    lng: -71.4128,
    town: { connect: { id: 'us-ri-providence' } },
  },
  {
    id: 'event-providence-continental-navy-first-fleet',
    name: 'Continental Navy\'s First Fleet Sails Under Esek Hopkins',
    startDate: new Date('1776-02-17'),
    datePrecision: 'DAY',
    summary: `Esek Hopkins of Providence, the Continental Navy's first commander-in-chief, sailed from Philadelphia in February 1776 with a small squadron of eight vessels. Rather than following Congress's orders to patrol the Chesapeake, Hopkins sailed to Nassau in the Bahamas and conducted the Navy's first amphibious operation, capturing military stores from the British.

The raid was tactically successful but politically damaging. Congress censured Hopkins for disobeying orders, and he was eventually dismissed in 1778. Despite his controversial record, Hopkins's command marked the beginning of American naval operations, and Providence's maritime culture — its sailors, shipbuilders, and merchant-captains — was central to the effort.`,
    significanceWeight: 70,
    lat: 41.8220,
    lng: -71.4100,
    town: { connect: { id: 'us-ri-providence' } },
  },
  {
    id: 'event-providence-gaspee-commission-fails',
    name: 'Royal Commission Fails to Identify Gaspee Attackers',
    startDate: new Date('1773-01-01'),
    datePrecision: 'MONTH',
    summary: `The royal commission established to investigate the burning of the Gaspee concluded its work in 1773 without identifying or prosecuting any of the attackers. Despite offering rewards and threatening to transport suspects to England for trial, the commission could not find a single Rhode Islander willing to testify.

The colony's unified silence was a powerful statement. The threat of being tried in England — rather than by a local jury — was itself a grievance that helped galvanize colonial resistance. The Gaspee commission's failure demonstrated the limits of British authority when an entire community chose to resist, and it became a precedent that other colonies cited as tensions escalated toward open revolt.`,
    significanceWeight: 70,
    lat: 41.8240,
    lng: -71.4128,
    town: { connect: { id: 'us-ri-providence' } },
  },
  {
    id: 'event-providence-last-state-ratify-constitution',
    name: 'Rhode Island Last to Ratify the Constitution',
    startDate: new Date('1790-05-29'),
    datePrecision: 'DAY',
    summary: `Rhode Island was the last of the original thirteen states to ratify the Constitution, finally doing so on May 29, 1790 — by the narrowest margin of any state, 34 to 32. Providence's merchants generally supported ratification because they wanted stable trade and sound currency, but rural Rhode Islanders were deeply suspicious of centralized power.

The long holdout reflected the same fierce independence that had driven the Gaspee affair and the early renunciation of British allegiance. Rhode Island had always guarded its autonomy jealously. The state only ratified after Congress threatened to treat it as a foreign nation and impose tariffs on its goods. Even the act of joining the union was, for Rhode Island, a negotiation conducted under pressure.`,
    significanceWeight: 65,
    lat: 41.8240,
    lng: -71.4128,
    town: { connect: { id: 'us-ri-providence' } },
  },
];

export const providenceStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-providence-gaspee-night',
    title: 'The Night They Burned the King\'s Ship',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-providence-abraham-whipple' } },
    verificationStatus: 'VERIFIED',
    textVersion: `The Gaspee ran aground on the evening of June 9, 1772, while chasing a Providence packet boat through the shallow waters of Narragansett Bay. By nightfall, word had spread through Providence that the hated revenue schooner was stuck on a sandbar near Warwick, helpless until the next high tide. The opportunity was too obvious to ignore.

Abraham Whipple — sea captain, merchant, and a man with no patience for British customs enforcement — led the party. Eight longboats carrying somewhere between fifty and seventy men rowed down the bay in darkness. The Gaspee's commander, Lieutenant William Dudingston, had made himself thoroughly despised by boarding and seizing colonial vessels, sometimes without proper authority. When the boats approached, a sentry called out. Someone on the boats told Dudingston to surrender. He refused. Someone shot him. The wound was serious but not fatal.

The raiders boarded, removed the crew, and set the ship on fire. By dawn, the Gaspee was gone — burned to the waterline. It was the most dramatic act of resistance to British authority yet seen in the colonies, more than a year before Boston dumped tea into its harbor.

What happened next was arguably more significant than the burning itself. The Crown established a royal commission to investigate and authorized transporting suspects to England for trial. Rhode Island said nothing. Despite rewards, threats, and months of inquiry, not a single person was identified. The entire colony closed ranks. Merchants, tavern-keepers, farmers, dock workers — everyone who must have known something chose to know nothing.

The commission's failure was a lesson in the limits of imperial power. You could send investigators, but you could not make people talk. You could threaten English trials, but you could not find witnesses. The Gaspee burned because Rhode Islanders were angry. The investigation failed because they were united. Both facts mattered for what came next.`,
    audioScript: `The Gaspee ran aground on June 9, 1772, chasing a Providence packet boat through Narragansett Bay. By nightfall, word spread: the hated revenue schooner was stuck on a sandbar, helpless until high tide.

Abraham Whipple led eight longboats down the bay in darkness. Someone shot Lieutenant Dudingston when he refused to surrender. The raiders boarded, removed the crew, and burned the ship to the waterline. More than a year before the Boston Tea Party.

The Crown sent investigators. Rhode Island said nothing. Not a single person identified despite months of inquiry. The entire colony closed ranks. The Gaspee burned because Rhode Islanders were angry. The investigation failed because they were united. Both facts mattered for what came next.`,
    tags: ['Gaspee', 'resistance', 'Narragansett Bay', 'Whipple'],
    town: { connect: { id: 'us-ri-providence' } },
  },
  {
    id: 'story-providence-modern-merchant-war',
    title: 'The Merchants Who Made War Pay',
    storyType: 'MODERN_VOICE',
    narratorName: 'Rhode Island Historical Society Researcher',
    narratorRole: 'Economic History Division',
    verificationStatus: 'UNVERIFIED',
    textVersion: `The Brown family papers in our archives tell a story about the Revolution that is not especially comfortable but is honest. The Browns — Nicholas, John, Joseph, and Moses — were among the wealthiest merchants in New England. When the war came, they did not simply support independence out of principle. They also made money from it. A great deal of money.

John Brown helped organize the Gaspee burning and later invested heavily in privateering. A successful privateer could return profits of several hundred percent. The ships were privately owned and crewed, authorized by government letters of marque, and sent to capture British commercial vessels. The captured goods were sold at auction. The owners took their share, the crews took theirs, and the government got its cut. It was war as business, and Providence was very good at it.

What makes the story complicated is Moses Brown. He had been part of the family business, including the slave trade. Then he converted to Quakerism, freed his enslaved workers, and became one of New England's earliest abolitionists. While his brothers were profiting from the war, Moses was arguing that the Revolution's ideals demanded the end of slavery. He was right, and he was largely ignored.

The archives show both things simultaneously: the patriotic financing that helped sustain the war effort and the moral contradictions that financing carried with it. The Browns built University Hall, endowed the college, and shaped Providence into a center of commerce and education. They also traded in human beings and profited from armed conflict. I think you cannot understand the Revolution in Providence without holding both of those facts at the same time. The war was fought for liberty. It was also fought by people with commercial interests, family ambitions, and moral blind spots. The documents do not let you simplify the story, and that is what makes them valuable.`,
    audioScript: `The Brown family papers tell a story about the Revolution that is honest if uncomfortable. The Browns were among New England's wealthiest merchants. They supported independence — and made a great deal of money doing it.

John Brown helped organize the Gaspee burning and invested heavily in privateering. Successful prizes returned profits of several hundred percent. War as business, and Providence was very good at it.

Then there is Moses Brown. He converted to Quakerism, freed his enslaved workers, and became an early abolitionist while his brothers profited from war. The archives show patriotic financing and moral contradictions simultaneously. You cannot understand the Revolution in Providence without holding both facts at the same time.`,
    tags: ['Brown family', 'privateering', 'commerce', 'abolition'],
    town: { connect: { id: 'us-ri-providence' } },
  },
];
