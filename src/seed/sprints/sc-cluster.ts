// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// SC Cluster: 8 South Carolina Revolutionary War towns
// Campaign: Southern Campaign, 1776–1782

import { Prisma } from '@prisma/client';

/**
 * SC Cluster — South Carolina Revolutionary War Towns
 *
 * These eight towns share the arc of the Southern Campaign: the British seizure
 * of South Carolina beginning with the Charleston siege of 1780, the string of
 * American defeats through Camden and Hobkirk's Hill, and the grinding reversal
 * engineered by Nathanael Greene through Cowpens, Ninety Six, and Eutaw Springs
 * that eventually expelled British forces from the state by 1782.
 *
 * NOTE ON VERIFICATION: Historical content synthesized from John Buchanan's
 * "The Road to Guilford Courthouse," Lawrence Babits's "A Devil of a Whipping"
 * (Cowpens), Robert Bass's "Swamp Fox," David Ramsay's "History of the
 * Revolution of South-Carolina," NPS documentation for the Cowpens, Ninety Six,
 * and Eutaw Springs battlefields, and the South Carolina Department of Archives
 * and History records. Stories marked VERIFIED have strong documentary evidence.
 */

// ============================================================================
// CHARLESTON
// ============================================================================

export const charlestonTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Charleston in 1780 was the worst American defeat of the Revolutionary War. Not a battle — a siege. On May 12, 1780, Major General Benjamin Lincoln surrendered the entire Southern Army to British General Henry Clinton: approximately 5,500 soldiers, the city's artillery, and the harbor. No other American defeat in the war came close in terms of men captured and materiel lost. The army that had been defending the south ceased to exist in an afternoon.

Understanding why requires going back to 1776, when South Carolina had its first encounter with a British fleet. On June 28 of that year, a British naval squadron attempted to force the harbor entrance while troops landed on Long Island, now the Isle of Palms, intending to wade across to Sullivan's Island and take the unfinished palmetto log fort from the rear. The naval bombardment failed spectacularly. The spongy palmetto logs absorbed cannon fire without splintering. Colonel William Moultrie's garrison returned fire with such accuracy that they nearly killed Commodore Peter Parker and drove the British fleet off with heavy damage. The British troops on Long Island found the water crossing chest-deep in places and never got across. The fleet withdrew. South Carolina celebrated.

That 1776 victory created a dangerous confidence. The fort on Sullivan's Island — renamed Fort Moultrie in Moultrie's honor — became a symbol of South Carolina's ability to defend itself. The image of a British fleet broken by a handful of militia in an unfinished earthwork worked its way into the state's self-conception. The palmetto tree became the state symbol. What the story obscured was how specific and unrepeatable those conditions were.

When the British came back in 1780, they came differently. Clinton landed south of the city in February and moved methodically up the peninsula. The Royal Navy found the harbor entrance still difficult but, crucially, the British this time did not repeat their frontal naval assault. Instead they focused on cutting Charleston off from the land side. By March, British cavalry under Banastre Tarleton had crossed the Cooper River and destroyed the last American force capable of reinforcing Lincoln. By April, the city was surrounded. The American garrison could neither break out nor receive help.

Lincoln made several attempts to negotiate an evacuation that would allow his army to leave without surrendering. Clinton refused them all. When a nighttime evacuation attempt failed — American cannon fire from the British lines forced the boats back — the situation became hopeless. The British had by then completed their siege lines across the neck of the peninsula. There was nowhere to go.

The surrender on May 12 produced the largest haul of prisoners the British took in the entire war. The city remained under British occupation for two and a half years, until December 1782. During that period, Charleston functioned as the administrative and military center of British operations in the south: a base for the campaigns that pushed inland to Camden, Ninety Six, and the upcountry, and a safe harbor for the Loyalist cause in South Carolina.

The occupation transformed the city's social landscape in ways the military narrative misses. Enslaved people by the thousands fled to British lines, responding to Clinton's June 1779 Philipsburg Proclamation, which offered freedom to any enslaved person who escaped a Patriot owner. The British used their labor for fortifications, supply work, and support roles. How many eventually gained freedom and what happened to them afterward is one of the least resolved questions in South Carolina's Revolutionary War history.

Charleston's fall also effectively ended organized Patriot resistance in the state for months. The Patriot civil government collapsed. Loyalists emerged from hiding. Many former Patriots signed loyalty oaths to preserve their property. The partisan war that eventually challenged the British occupation — Francis Marion operating out of the swamps, Thomas Sumter in the upcountry — operated without regular support, without supply lines, without a functioning government behind them. That any effective resistance survived the summer of 1780 at all is itself a remarkable fact.`,
};

// ============================================================================
// CHARLESTON — PEOPLE
// ============================================================================

export const charlestonPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-sc-henry-clinton',
      name: 'General Henry Clinton',
      roles: ['British Commander-in-Chief in North America', 'Siege Commander'],
      bioShort:
        'British commander who planned and executed the successful siege of Charleston in 1780, capturing the entire Southern Army. His Philipsburg Proclamation offering freedom to escaped enslaved Patriots shaped the war\'s social dimensions across the south.',
      birthYear: 1730,
      deathYear: 1795,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the 1780 British expedition that besieged and captured Charleston, accepting Lincoln\'s surrender on May 12.',
  },
  {
    person: {
      id: 'person-sc-benjamin-lincoln',
      name: 'Major General Benjamin Lincoln',
      roles: ['Continental Army General', 'Southern Army Commander'],
      bioShort:
        'Massachusetts general commanding the Southern Department who surrendered Charleston and its 5,500-man garrison to Clinton on May 12, 1780 — the largest American military capitulation of the war. Later served as Washington\'s Secretary of War.',
      birthYear: 1733,
      deathYear: 1810,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the American garrison at Charleston; led the surrender negotiations and signed the articles of capitulation on May 12, 1780.',
  },
  {
    person: {
      id: 'person-sc-william-moultrie',
      name: 'General William Moultrie',
      roles: ['Continental Army General', 'Fort Sullivan Defender', 'Governor of South Carolina'],
      bioShort:
        'South Carolina colonel who commanded the palmetto log fort on Sullivan\'s Island during the successful British naval repulse of June 28, 1776. The fort was renamed Fort Moultrie in his honor. He was captured at the Charleston surrender in 1780.',
      birthYear: 1730,
      deathYear: 1805,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Defended the fort bearing his name in 1776; captured with Lincoln\'s army at the 1780 surrender.',
  },
  {
    person: {
      id: 'person-sc-banastre-tarleton',
      name: 'Lieutenant Colonel Banastre Tarleton',
      roles: ['British Cavalry Commander', 'British Legion Commander'],
      bioShort:
        'British cavalry officer who commanded the British Legion — a mixed cavalry and infantry unit largely composed of American Loyalists. His destruction of the last American relief force at Waxhaws after Charleston\'s fall, killing surrendering soldiers, made "Tarleton\'s Quarter" a rallying cry for Patriot resistance.',
      birthYear: 1754,
      deathYear: 1833,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Crossed the Cooper River in April 1780 to cut Charleston\'s last supply line; commanded the British Legion throughout the southern campaign.',
  },
  {
    person: {
      id: 'person-sc-francis-marion',
      name: 'Brigadier General Francis Marion',
      roles: ['Partisan Commander', 'Continental Army Officer', 'Swamp Fox'],
      bioShort:
        'South Carolina militia officer who escaped the Charleston surrender by being away from the city. Operating from the swamps of the Pee Dee and Santee Rivers, he harassed British supply lines and communications for two years. His nickname, the Swamp Fox, came from British frustration at his elusiveness.',
      birthYear: 1732,
      deathYear: 1795,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Absent from Charleston at its fall, Marion became the most effective partisan commander in South Carolina, denying the British control of the lowcountry.',
  },
  {
    person: {
      id: 'person-sc-cornwallis',
      name: 'Lord Charles Cornwallis',
      roles: ['British General', 'Southern Army Commander', 'Lieutenant General'],
      bioShort:
        'British general who assumed command of British southern forces after Clinton returned to New York following Charleston\'s fall. Cornwallis pursued an aggressive strategy of destroying Continental resistance in the Carolinas, culminating in his own surrender at Yorktown in 1781.',
      birthYear: 1738,
      deathYear: 1805,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Took command of British operations in South Carolina after Clinton departed in June 1780; directed the campaigns from Charleston into the interior.',
  },
  {
    person: {
      id: 'person-sc-christopher-gadsden',
      name: 'Christopher Gadsden',
      roles: ['Patriot Politician', 'Continental Congress Delegate', 'Merchant'],
      bioShort:
        'South Carolina Patriot leader who designed the Gadsden Flag — the rattlesnake banner adopted by the Continental Marines. Imprisoned at St. Augustine after Charleston\'s fall, he refused to sign a loyalty oath despite 42 weeks of solitary confinement.',
      birthYear: 1724,
      deathYear: 1805,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Leading Patriot voice in Charleston; captured at the 1780 surrender and held prisoner rather than take a loyalty oath.',
  },
  {
    person: {
      id: 'person-sc-isaac-hayne',
      name: 'Colonel Isaac Hayne',
      roles: ['South Carolina Militia Officer', 'Patriot Martyr'],
      bioShort:
        'South Carolina militia colonel who signed a loyalty oath after Charleston\'s fall to protect his family from smallpox. He rejoined the Patriot cause when the British reneged on their terms; captured in 1781, he was executed by hanging without trial — an act that outraged Patriot opinion across the south.',
      birthYear: 1745,
      deathYear: 1781,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'His 1781 execution by British authorities in Charleston without trial became a galvanizing event for Patriot resistance in South Carolina.',
  },
  {
    person: {
      id: 'person-sc-nathanael-greene',
      name: 'Nathanael Greene',
      roles: ['Continental Army General', 'Southern Department Commander'],
      bioShort:
        'Rhode Island general appointed to command the reconstituted Southern Army in December 1780. His campaign of strategic pressure — fighting only when conditions favored him, retreating when they did not — gradually stripped British forces of their ability to hold the South Carolina interior.',
      birthYear: 1742,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Arrived to rebuild the Southern Army after the Charleston disaster; Charleston\'s fall made the entire subsequent southern campaign necessary.',
  },
];

// ============================================================================
// CHARLESTON — PLACES
// ============================================================================

export const charlestonPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-charleston-white-point-garden',
    name: 'White Point Garden (Battery)',
    placeType: 'LANDMARK',
    description:
      'The southern tip of the Charleston peninsula, which served as a key artillery position during both the 1776 defense and the 1780 siege. Today the park contains numerous cannon and historical markers relating to the city\'s colonial and Revolutionary War defenses.',
    lat: 32.7698,
    lng: -79.9398,
    address: '2 Murray Blvd, Charleston, SC 29401',
    town: { connect: { id: 'us-sc-charleston' } },
  },
  {
    id: 'place-charleston-old-exchange-building',
    name: 'Old Exchange and Provost Dungeon',
    placeType: 'HISTORIC_HOUSE',
    description:
      'Built in 1771, this building served as a customs house and exchange before the Revolution. During the British occupation from 1780 to 1782, the basement dungeon held Patriot prisoners including Christopher Gadsden. It is one of the best-preserved examples of colonial public architecture in the south.',
    lat: 32.7762,
    lng: -79.9282,
    address: '122 E Bay St, Charleston, SC 29401',
    town: { connect: { id: 'us-sc-charleston' } },
  },
  {
    id: 'place-charleston-siege-lines-neck',
    name: 'Charleston Neck Siege Lines Site',
    placeType: 'BATTLEFIELD',
    description:
      'The area across the Charleston peninsula where British forces completed their siege works in April 1780, cutting off the city from any land escape or reinforcement. The modern neighborhoods here overlie the ground where Clinton\'s engineers dug the parallel trenches that made the city\'s surrender inevitable.',
    lat: 32.8000,
    lng: -79.9500,
    address: 'Charleston Neck, Charleston, SC',
    town: { connect: { id: 'us-sc-charleston' } },
  },
  {
    id: 'place-charleston-circular-congregational-church',
    name: 'Circular Congregational Church',
    placeType: 'LANDMARK',
    description:
      'One of the oldest congregations in the south, organized in 1681. The current structure replaced one damaged in the Civil War, but the congregation\'s graveyard contains remains of Revolutionary War-era Charlestonians. The church was a center of Patriot sentiment before the occupation.',
    lat: 32.7770,
    lng: -79.9363,
    address: '150 Meeting St, Charleston, SC 29401',
    town: { connect: { id: 'us-sc-charleston' } },
  },
  {
    id: 'place-charleston-hampton-park-area',
    name: 'Charleston Fortification Lines (Citadel Area)',
    placeType: 'BATTLEFIELD',
    description:
      'The general area of Charleston\'s 1780 inner defense works, which the Patriot garrison constructed across the neck of the peninsula. The fortifications were substantial but ultimately unable to withstand a siege once the British cut off all supply and reinforcement routes.',
    lat: 32.8095,
    lng: -79.9580,
    address: 'Hampton Park area, Charleston, SC 29403',
    town: { connect: { id: 'us-sc-charleston' } },
  },
  {
    id: 'place-charleston-patriots-point',
    name: 'Patriots Point and Charleston Harbor Entrance',
    placeType: 'LANDMARK',
    description:
      'The harbor entrance near modern Patriots Point was the critical waterway that British Admiral Peter Parker\'s fleet attempted to force in June 1776. The guns of Fort Sullivan — later Fort Moultrie — commanded this approach and broke the British naval assault. The site today overlooks the harbor from Mount Pleasant.',
    lat: 32.7876,
    lng: -79.9026,
    address: '40 Patriots Point Rd, Mount Pleasant, SC 29464',
    town: { connect: { id: 'us-sc-charleston' } },
  },
  {
    id: 'place-charleston-drayton-hall',
    name: 'Drayton Hall',
    placeType: 'HISTORIC_HOUSE',
    description:
      'One of the oldest surviving plantation houses in America, built 1738–1742, located on the Ashley River outside Charleston. During the Revolution, this area of the Ashley River corridor was central to British operations controlling access to the city\'s western approach.',
    lat: 32.8417,
    lng: -80.0590,
    address: '3380 Ashley River Rd, Charleston, SC 29414',
    town: { connect: { id: 'us-sc-charleston' } },
  },
];

// ============================================================================
// CHARLESTON — EVENTS
// ============================================================================

export const charlestonEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-charleston-fort-sullivan-1776',
    name: 'Battle of Sullivan\'s Island (Fort Moultrie)',
    startDate: new Date('1776-06-28'),
    datePrecision: 'DAY',
    summary:
      'A British fleet of nine warships under Commodore Peter Parker bombarded the unfinished palmetto log fort on Sullivan\'s Island for nearly ten hours. The spongy palmetto logs absorbed cannon fire without splintering, and the fort\'s garrison under Colonel William Moultrie returned fire with devastating accuracy, severely damaging Parker\'s flagship and several other vessels. Simultaneously, British troops under General Henry Clinton attempted to wade across from Long Island to take the fort from the rear but found the water impassable. The fleet withdrew. It was the first major American victory of the Revolution in the south and made Moultrie a hero.',
    significanceWeight: 88,
    lat: 32.7627,
    lng: -79.8574,
    town: { connect: { id: 'us-sc-charleston' } },
  },
  {
    id: 'event-charleston-philipsburg-proclamation',
    name: 'Philipsburg Proclamation',
    startDate: new Date('1779-06-30'),
    datePrecision: 'DAY',
    summary:
      'General Henry Clinton issued the Philipsburg Proclamation from his headquarters in Philipsburg, New York, offering freedom to any enslaved person who escaped a Patriot owner and came to British lines. Unlike Dunmore\'s 1775 proclamation, which applied only to Virginia, this one applied to all British-controlled territory. Thousands of enslaved people fled to British lines in South Carolina in the months that followed, particularly after Charleston\'s fall in 1780. The proclamation transformed the social landscape of the war in ways that the military narrative alone does not capture.',
    significanceWeight: 85,
    lat: 32.7765,
    lng: -79.9311,
    town: { connect: { id: 'us-sc-charleston' } },
  },
  {
    id: 'event-charleston-british-landing-1780',
    name: 'British Forces Land South of Charleston',
    startDate: new Date('1780-02-11'),
    datePrecision: 'DAY',
    summary:
      'Clinton\'s expedition of approximately 14,000 men landed on Simmons Island south of Charleston in February 1780, beginning the siege operation that would end with the city\'s capitulation three months later. The scale of the British force dwarfed anything they had brought to South Carolina in 1776. Lincoln had fewer than 3,000 Continentals to oppose them and hoped that reinforcements and the city\'s fortifications would hold out long enough to force the British to withdraw.',
    significanceWeight: 82,
    lat: 32.6500,
    lng: -80.0100,
    town: { connect: { id: 'us-sc-charleston' } },
  },
  {
    id: 'event-charleston-tarleton-waxhaws',
    name: 'Tarleton Cuts the Cooper River Road',
    startDate: new Date('1780-04-14'),
    datePrecision: 'DAY',
    summary:
      'Banastre Tarleton crossed the Cooper River north of Charleston and destroyed the last American cavalry force capable of keeping the city\'s supply lines open. His action completed the encirclement of Charleston, cutting off Lincoln\'s last realistic option for breaking out or receiving reinforcement. From this point, the question was not whether Charleston would surrender but when.',
    significanceWeight: 80,
    lat: 32.8500,
    lng: -79.9000,
    town: { connect: { id: 'us-sc-charleston' } },
  },
  {
    id: 'event-charleston-surrender-1780',
    name: 'Surrender of Charleston',
    startDate: new Date('1780-05-12'),
    datePrecision: 'DAY',
    summary:
      'Major General Benjamin Lincoln surrendered the city and garrison to General Henry Clinton on May 12, 1780. The capitulation produced approximately 5,500 prisoners — soldiers and sailors — plus the city\'s artillery, stores, and the harbor. It was the largest American military surrender of the Revolutionary War by a significant margin. Clinton imposed humiliating terms: the garrison was required to march out with cased colors and to music of their own, not of a British march — a deliberate reversal of normal honors of war. The terms demonstrated that this was not a negotiated capitulation but an unconditional defeat.',
    significanceWeight: 98,
    lat: 32.7765,
    lng: -79.9311,
    town: { connect: { id: 'us-sc-charleston' } },
  },
  {
    id: 'event-charleston-waxhaws-massacre',
    name: 'Waxhaws Engagement (Tarleton\'s Quarter)',
    startDate: new Date('1780-05-29'),
    datePrecision: 'DAY',
    summary:
      'Seventeen days after the Charleston surrender, Tarleton\'s cavalry caught the remnants of Colonel Abraham Buford\'s Virginia Continental regiment at Waxhaws, near the North Carolina border. Buford attempted to surrender but Tarleton\'s men rode through the white flag and cut down soldiers who were no longer fighting. Of Buford\'s 350 men, 113 were killed and 150 so badly wounded they could not be moved. The phrase "Tarleton\'s Quarter" — meaning no mercy — entered the war\'s vocabulary and became a rallying cry for partisan fighters who might otherwise have submitted to British authority.',
    significanceWeight: 87,
    lat: 34.7400,
    lng: -80.6100,
    town: { connect: { id: 'us-sc-charleston' } },
  },
  {
    id: 'event-charleston-occupation-begins',
    name: 'British Occupation of Charleston Begins',
    startDate: new Date('1780-05-13'),
    datePrecision: 'DAY',
    summary:
      'The day after the surrender, British troops entered Charleston and began organizing the occupation that would last until December 1782. The city became the administrative center of British authority in South Carolina. Loyalists who had been in hiding emerged. The royal government was reconstituted. Many Patriots signed loyalty oaths under pressure. The disruption to the city\'s merchant community, legal system, and social hierarchies was profound and lasted well beyond the war.',
    significanceWeight: 78,
    lat: 32.7765,
    lng: -79.9311,
    town: { connect: { id: 'us-sc-charleston' } },
  },
  {
    id: 'event-charleston-hayne-execution',
    name: 'Execution of Isaac Hayne',
    startDate: new Date('1781-08-04'),
    datePrecision: 'DAY',
    summary:
      'British authorities in Charleston hanged Colonel Isaac Hayne without trial, charging him with treason for rejoining the Patriot cause after having signed a loyalty oath. Hayne\'s case was legally and morally complex — he had signed the oath under duress, with the understanding that he would not be required to bear arms against the Patriots, a condition the British subsequently violated. His execution without a proper hearing or trial outraged Patriot opinion throughout the south and contributed to the hardening of resistance in 1781.',
    significanceWeight: 75,
    lat: 32.7765,
    lng: -79.9311,
    town: { connect: { id: 'us-sc-charleston' } },
  },
  {
    id: 'event-charleston-british-evacuation',
    name: 'British Evacuation of Charleston',
    startDate: new Date('1782-12-14'),
    datePrecision: 'DAY',
    summary:
      'After more than two and a half years of occupation, British forces evacuated Charleston on December 14, 1782, departing for Jamaica and New York. An estimated 3,800 Loyalists, thousands of formerly enslaved people who had sought British protection, and the military garrison departed. General Nathanael Greene led the Continental forces into the city. The evacuation was the effective end of British military presence in South Carolina and one of the final acts of the Revolutionary War.',
    significanceWeight: 82,
    lat: 32.7765,
    lng: -79.9311,
    town: { connect: { id: 'us-sc-charleston' } },
  },
  {
    id: 'event-charleston-greene-arrives',
    name: 'Greene Enters Charleston',
    startDate: new Date('1782-12-14'),
    datePrecision: 'DAY',
    summary:
      'Nathanael Greene led the remnants of the Continental Army into Charleston as the British fleet departed. The army that entered the city was barely recognizable as the force that had been fighting for two years in the Carolina backcountry — starved of supplies, unpaid, and wearing whatever clothing they had managed to acquire. Greene had fought a campaign that won South Carolina back without winning a single tactical battle, a strategic achievement that most military historians rank among the most sophisticated of the entire war.',
    significanceWeight: 80,
    lat: 32.7765,
    lng: -79.9311,
    town: { connect: { id: 'us-sc-charleston' } },
  },
];

// ============================================================================
// CHARLESTON — STORIES
// ============================================================================

export const charlestonStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-charleston-lincoln-surrender',
    title: 'The Worst Day',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-sc-benjamin-lincoln' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Benjamin Lincoln had been trying to get out of Charleston since April. The siege lines were closing. The British had crossed the Cooper River and cut the last road north. He knew what the arithmetic said.

He attempted one negotiation in April, proposing terms that would allow the garrison to march out with honors and leave the city to the British. Clinton refused. Lincoln tried again in early May, proposing that the garrison be allowed to leave with their arms. Clinton refused again. The final exchange of notes on May 11 produced terms Lincoln accepted the following morning: the garrison would march out with their colors cased, to their own music rather than a British march. No honors of war. A deliberate humiliation.

What Lincoln was surrendering was not just the army. It was the only organized military force the United States had in the entire southern theater. The men who filed out of Charleston on May 12 would spend the rest of the war on prison ships in the harbor or paroled to their home states. The officers would eventually be exchanged, but most enlisted men simply disappeared from the war. South Carolina, Georgia, and North Carolina were left defended by whatever militia and partisans could organize themselves without regular support.

Lincoln's own reputation survived the surrender, partly because the strategic situation had genuinely been hopeless and partly because Washington treated him with respect in the aftermath. He was eventually exchanged and served at Yorktown, where his role in accepting Cornwallis's sword gave him a kind of symbolic redemption that military history rarely offers.

But on May 12, 1780, none of that was visible. What was visible was a column of American soldiers marching out between lines of British regulars, colors furled, trying to maintain whatever dignity a defeated army can carry. The British officers watching them were professional enough not to jeer. The city they were leaving behind had been their home, or the home of people they had sworn to protect.`,
    audioScript: `Lincoln had been trying to negotiate a way out since April. The siege lines were closing. He knew what the arithmetic said.

He proposed terms twice. Clinton refused both. The final terms on May 12 required the garrison to march out with colors cased, to their own music — not a British march. A deliberate humiliation.

What Lincoln surrendered was not just the army. It was the only organized military force in the entire southern theater. The men who filed out would spend the rest of the war on prison ships in the harbor.

South Carolina was left defended by whatever militia and partisans could organize themselves without any regular support. That something emerged from that situation — Marion, Sumter, eventually Greene's army — is the remarkable part of the story. But on May 12, none of that was visible.`,
    tags: ['siege', 'surrender', 'Charleston', 'Lincoln', 'Southern Campaign'],
    town: { connect: { id: 'us-sc-charleston' } },
  },
  {
    id: 'story-charleston-enslaved-freedom',
    title: 'What British Lines Meant',
    storyType: 'MODERN_VOICE',
    narratorName: 'Public Historian',
    narratorRole: 'Lowcountry Africana Studies, College of Charleston',
    verificationStatus: 'ANECDOTAL',
    textVersion: `When Clinton issued the Philipsburg Proclamation in 1779, he was making a military calculation: the more enslaved people who fled Patriot plantations, the more the Patriot economy would be damaged. Freedom was an incentive structure, not a principle.

But the people who heard that proclamation and made the decision to run were not making a military calculation. They were making a decision about their lives. We tend to talk about this in aggregate — thousands fled to British lines — in a way that erases the individual decisions, the specific families who split apart, the specific people who calculated the risks and ran anyway.

What the documentary record from Charleston's occupation shows is that the British used the labor of formerly enslaved people extensively for fortification work, supply transport, and support operations. They were not free in any meaningful modern sense — they were exchanging one form of compelled labor for another, with the difference that the British could not legally return them to their former owners. Many died of disease during the occupation, particularly the smallpox epidemic that swept through the city. Some managed to evacuate with the British fleet in 1782 and eventually reached freedom in Nova Scotia, the Bahamas, or Sierra Leone. Many others were re-enslaved when British protection ended.

What I want students to understand is that when we talk about the social history of the Charleston occupation, we're talking about tens of thousands of individual human decisions being made under conditions of extreme uncertainty and danger. The people making those decisions didn't know how the war would end or what British promises were worth. They ran anyway.`,
    audioScript: `Clinton's Philipsburg Proclamation was a military calculation. The people who heard it and ran to British lines were making a different kind of calculation.

The documentary record from Charleston's occupation shows the British used formerly enslaved people for fortification work, supply transport, and support roles. They weren't free in any modern sense — they exchanged one compelled labor system for another, with the difference that the British couldn't legally return them to their former owners.

Many died of disease during the occupation. Some evacuated with the British fleet in 1782 and eventually reached Nova Scotia or Sierra Leone. Many others were re-enslaved when British protection ended.

These were tens of thousands of individual decisions made under conditions of extreme uncertainty. The people making them didn't know how the war would end. They ran anyway.`,
    tags: ['enslavement', 'freedom', 'occupation', 'Philipsburg', 'social history'],
    town: { connect: { id: 'us-sc-charleston' } },
  },
];

// ============================================================================
// CHARLESTON — LESSON PLANS
// ============================================================================

export const charlestonLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-sc-charleston' } },
    title: 'Charleston 1780: The Worst American Defeat',
    gradeRange: '6-8',
    estimatedDuration: '2-3 class periods',
    summary:
      'This lesson uses the 1780 siege and surrender of Charleston to examine what military defeat looks like, why it happens, and what consequences flow from it. Students analyze the siege as a strategic problem — how do you defend a city on a peninsula? — and examine the decisions Lincoln and Clinton made at each stage. The lesson also introduces the social history of the occupation, particularly the Philipsburg Proclamation and the decisions made by enslaved people in response. Students consider how the same event looks different depending on who is experiencing it.',
    lessonData: {
      objectives: [
        'Students will explain the strategic reasons the British chose Charleston as their primary 1780 target',
        'Students will trace the stages of the siege from British landing through final surrender',
        'Students will analyze the Philipsburg Proclamation and evaluate its significance for enslaved South Carolinians',
        'Students will compare how the same event (the siege) was experienced differently by different groups',
      ],
      essentialQuestions: [
        'What makes a military position impossible to defend, and what should a commander do when facing that situation?',
        'How did the Philipsburg Proclamation change the nature of the war in South Carolina?',
        'Whose experience of the Charleston siege is missing from traditional accounts, and why does that matter?',
      ],
      materials: [
        'Map of Charleston peninsula showing British siege lines and American fortifications',
        'Excerpt from Clinton\'s siege correspondence with Lincoln, May 1780',
        'Text of the Philipsburg Proclamation (1779)',
        'First-person accounts from enslaved people who fled to British lines (adapted from period documents)',
        'Timeline graphic organizer: British landing to surrender',
      ],
      activities: [
        {
          name: 'Peninsula Defense Problem',
          duration: '20 minutes',
          description:
            'Students examine a map of the Charleston peninsula and identify: what are the defensive advantages of a peninsula? What are the vulnerabilities? What would the British need to do to make the position indefensible? Students work in pairs to identify the moment in the siege when Lincoln\'s position became hopeless and explain their reasoning.',
        },
        {
          name: 'The Proclamation and the Decision',
          duration: '25 minutes',
          description:
            'Students read the key provisions of the Philipsburg Proclamation and discuss: what did it offer, to whom, under what conditions? Then, working from adapted period accounts, students consider the decision facing an enslaved person in Charleston in 1780: what are the risks of running to British lines, and what are the risks of staying? Students write a journal entry from this perspective.',
        },
        {
          name: 'Multiple Perspectives: The Same Day',
          duration: '20 minutes',
          description:
            'Students read three short passages describing May 12, 1780: one from Lincoln\'s perspective (the surrender), one from a British officer\'s account (the victors\' view), and one from a Charleston civilian describing what they saw. Students use a structured comparison chart to identify: what does each source focus on? What does each leave out? How does the same day look different from each vantage point?',
        },
      ],
      assessment:
        'Summative: a paragraph response to the question "Who lost the most when Charleston fell in 1780, and why?" Students must identify at least two different groups affected by the surrender and support their argument with specific evidence from the lesson.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author\'s point of view or purpose',
        'CCSS.ELA-LITERACY.RH.6-8.9: Analyze the relationship between a primary and secondary source on the same topic',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.5.6-8: Explain how and why perspectives of people have changed over time',
        'D2.Civ.1.6-8: Distinguish the powers and responsibilities of citizens, political parties, interest groups, and the media in a variety of governmental and nongovernmental contexts',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-sc-charleston' } },
    title: 'Loyalty, Oath, and Resistance: South Carolina Under Occupation',
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary:
      'This lesson examines the moral and practical choices facing South Carolina civilians during the British occupation of 1780–1782. Using the case of Isaac Hayne — who signed a loyalty oath, rejoined the Patriot cause, and was executed without trial — students explore what loyalty means in a civil war context, how people navigate conflicting obligations under occupation, and what the concept of "treason" means when the legitimate government is contested. The lesson connects to contemporary cases of civilian populations under occupation and the ethics of resistance.',
    lessonData: {
      objectives: [
        'Students will analyze the political and social pressures that led South Carolina civilians to sign British loyalty oaths after Charleston\'s fall',
        'Students will evaluate the legal and ethical dimensions of Isaac Hayne\'s case',
        'Students will assess what the occupation reveals about the civil war dimension of the Revolutionary War in South Carolina',
        'Students will connect the concept of loyalty under occupation to contemporary contexts',
      ],
      essentialQuestions: [
        'What does loyalty mean when the legitimate government is contested? Can someone be guilty of treason against a government they never recognized?',
        'How do ordinary people navigate survival under military occupation, and what moral compromises does occupation require?',
        'Was Isaac Hayne a traitor, a patriot, or something the legal categories of 1781 couldn\'t adequately describe?',
      ],
      materials: [
        'Text of British loyalty oath requirements for South Carolina civilians, 1780',
        'Documentary record of the Hayne case (letters, proceedings, British and American accounts)',
        'Excerpt from David Ramsay\'s account of the occupation in "History of the Revolution of South-Carolina"',
        'Secondary source: analysis of the Loyalist/Patriot civil war in South Carolina',
        'Map of British-controlled territory in South Carolina, 1780–1781',
      ],
      activities: [
        {
          name: 'The Oath Decision',
          duration: '30 minutes',
          description:
            'Students read the conditions the British imposed on Charleston civilians after the surrender — the loyalty oath requirements, the consequences of refusal, and the terms under which former Patriots could retain their property. Students then construct a decision matrix for a fictional South Carolina merchant in June 1780: what are the costs and risks of each choice? Class discussion: does a coerced oath carry the same moral weight as a freely given one?',
        },
        {
          name: 'The Hayne Case',
          duration: '35 minutes',
          description:
            'Students read the documentary record of the Hayne case and prepare arguments for a structured debate: was the British execution of Hayne legally and morally justified? Students are assigned positions and must argue from the British authorities\' perspective and from Hayne\'s perspective. Debrief: what does the case reveal about the limits of the legal categories available to both sides?',
        },
        {
          name: 'Civil War Inside a Revolution',
          duration: '25 minutes',
          description:
            'Using the map of British-controlled territory and the secondary source on Loyalist/Patriot conflict, students identify: where was Patriot resistance strongest in South Carolina, and why? What role did personal and family loyalties play in determining which side people chose? Discussion connects to other civil war contexts students may know (American Civil War, 20th-century occupied Europe) without forcing false equivalencies.',
        },
      ],
      assessment:
        'Summative essay (800-1000 words): "Using the Hayne case and the Charleston occupation as your primary evidence, argue whether the Revolutionary War in South Carolina was primarily a war of independence or a civil war — or explain why the distinction matters." Students must engage with at least one counterargument.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors for how they treat the same or similar topics',
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in several primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.4.9-12: Analyze complex and interacting factors that influenced the perspectives of people during different historical eras',
        'D2.His.9.9-12: Analyze the relationship between historical sources and the secondary interpretations made from them',
        'D2.Civ.5.9-12: Evaluate citizens\' and institutions\' effectiveness in addressing social and political problems',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// CHARLESTON — ADDITIONAL LINKS
// ============================================================================

export const charlestonAdditionalLinks: Array<{
  toTownId: string;
  linkType: 'SHARED_EVENT' | 'SHARED_PERSON' | 'GEOGRAPHIC_PROXIMITY';
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-sc-fort-moultrie',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason:
      'Fort Moultrie on Sullivan\'s Island guards the entrance to Charleston harbor. The 1776 battle there directly preceded the 1780 siege; the same harbor entrance the British failed to force in 1776 they bypassed in 1780.',
    weight: 100,
  },
  {
    toTownId: 'us-sc-camden',
    linkType: 'SHARED_EVENT',
    reason:
      'Camden was the direct consequence of Charleston\'s fall: Congress sent a new army south under Horatio Gates to relieve British pressure, and that army was destroyed at Camden in August 1780.',
    weight: 90,
  },
  {
    toTownId: 'us-sc-beaufort',
    linkType: 'SHARED_PERSON',
    reason:
      'The Sea Islands around Beaufort were a key destination for enslaved people fleeing to British lines after the Philipsburg Proclamation. The social history of the occupation connects the two locations.',
    weight: 75,
  },
  {
    toTownId: 'us-va-yorktown',
    linkType: 'SHARED_PERSON',
    reason:
      'Cornwallis, who commanded British operations out of Charleston from 1780, ended his campaign at Yorktown. Lincoln, who surrendered Charleston, was present at Yorktown to accept Cornwallis\'s surrender.',
    weight: 80,
  },
  {
    toTownId: 'us-sc-eutaw-springs',
    linkType: 'SHARED_PERSON',
    reason:
      'The Eutaw Springs battle in September 1781 was the culmination of the campaign to expel British forces from the Carolina interior — a campaign made necessary by the Charleston surrender and concluded before the British finally evacuated Charleston in 1782.',
    weight: 70,
  },
];

// ============================================================================
// CAMDEN
// ============================================================================

export const camdenTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Camden, South Carolina, August 16, 1780: the Continental Army's worst day in the field. Not the worst surrender — that was Charleston three months earlier — but the worst battlefield defeat, the most complete collapse of an American army in open engagement during the entire war.

The army that Congress sent to avenge Charleston was commanded by Horatio Gates, the hero of Saratoga, and it was large by the standards of the southern theater. Gates had approximately 3,000 men when he marched them toward the British base at Camden, though only about 1,400 of them were Continentals. The rest were Virginia and North Carolina militia — men who had never been in a serious battle and who Gates placed on his left flank, opposite the British regulars.

Gates chose to attack at night, which was aggressive but also dangerous. At 2:30 in the morning on August 16, his advance guard collided with Cornwallis's column moving in the same direction. Both sides deployed in the dark, knowing a battle was coming at dawn. When it came, what unfolded on the left was disaster. The British regulars under Lieutenant Colonel James Webster attacked the Virginia militia before the American line was fully formed. The militiamen panicked, threw down their muskets, and ran. They ran so fast that contemporary accounts noted they had disappeared from the battlefield before the Continentals on the right even knew the left had collapsed.

The Continentals — Maryland and Delaware regulars under Johann de Kalb — fought with extraordinary discipline on the right. They held, counterattacked, and held again as everything around them disintegrated. De Kalb was shot eleven times and died of his wounds. When his men finally had to withdraw, they withdrew in order, fighting. Their resistance was the only thing that kept Camden from being a complete annihilation rather than a catastrophic defeat. But it was a catastrophic defeat. Gates fled the field and rode 60 miles to Charlotte before stopping. His reputation never recovered.

Cornwallis's cavalry under Tarleton pursued the American survivors for miles, killing and capturing the scattered remnants of Gates's army. South Carolina was now effectively under British control from the coast to the upcountry. The state government had collapsed. The only remaining organized American forces were the partisans — Marion in the swamps, Sumter in the upcountry — and they were not strong enough to threaten British control of the towns and supply lines.

What Camden made necessary was Nathanael Greene. Congress replaced Gates with Greene in October 1780, and Greene arrived to find what Camden had left behind: no army, no supply, no functioning government. What he built from that starting point — a campaign that eventually drove British forces out of the Carolina interior without winning a single decisive battle — remains one of the most sophisticated military achievements of the Revolutionary War.

Camden today preserves the battlefield remarkably well. Historic Camden, the reconstructed British fortified town, gives visitors an accurate sense of what the British base looked like. The battlefield itself retains much of its original character, with the tree lines and open ground that de Kalb's Marylanders and Delawareans crossed in the last coherent action of the battle. The monument to de Kalb is one of the few in South Carolina that marks an individual soldier's death with the specificity the story requires.`,
};

// ============================================================================
// CAMDEN — PEOPLE
// ============================================================================

export const camdenPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-sc-horatio-gates',
      name: 'Major General Horatio Gates',
      roles: ['Continental Army General', 'Southern Department Commander', 'Hero of Saratoga'],
      bioShort:
        'Continental general whose victory at Saratoga made him a congressional favorite but whose performance at Camden — fleeing 60 miles before stopping while his army collapsed — ended his field career. Congress replaced him with Nathanael Greene after Camden.',
      birthYear: 1727,
      deathYear: 1806,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the American army at Camden; his decision to place unreliable militia opposite British regulars contributed directly to the defeat.',
  },
  {
    person: {
      id: 'person-sc-baron-de-kalb',
      name: 'Baron Johann de Kalb',
      roles: ['Continental Army Major General', 'German-French Officer', 'Maryland and Delaware Commander'],
      bioShort:
        'German-born French officer serving as a Continental major general who commanded the Maryland and Delaware Continentals at Camden. His troops maintained discipline and fought after the militia fled; he was shot eleven times and died three days after the battle. His death cost the army one of its most capable regular infantry commanders.',
      birthYear: 1721,
      deathYear: 1780,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the only American forces that fought with discipline at Camden; killed in the battle on August 16, 1780.',
  },
  {
    person: {
      id: 'person-sc-cornwallis',
      name: 'Lord Charles Cornwallis',
      roles: ['British General', 'Southern Army Commander', 'Lieutenant General'],
      bioShort:
        'British general who commanded at Camden and delivered the most complete British victory of the southern campaign. His subsequent decision to invade North Carolina, leaving his South Carolina supply lines exposed to partisan attack, was the strategic overreach that eventually cost him the south.',
      birthYear: 1738,
      deathYear: 1805,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded British forces at Camden; his aggressive tactics destroyed Gates\'s army but his strategic follow-through overextended British supply lines.',
  },
  {
    person: {
      id: 'person-sc-banastre-tarleton',
      name: 'Lieutenant Colonel Banastre Tarleton',
      roles: ['British Cavalry Commander', 'British Legion Commander'],
      bioShort:
        'British cavalry officer whose Legion pursued the American survivors of Camden for miles after the battle, killing and capturing the scattered remnants of Gates\'s army. His pursuit after Camden was the most efficient post-battle exploitation of the entire southern campaign.',
      birthYear: 1754,
      deathYear: 1833,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Led the cavalry pursuit after Camden, converting the battlefield defeat into a near-total destruction of Gates\'s army.',
  },
  {
    person: {
      id: 'person-sc-james-webster',
      name: 'Lieutenant Colonel James Webster',
      roles: ['British Infantry Commander', 'Regular Army Officer'],
      bioShort:
        'British infantry officer who commanded the regulars that attacked the American left at Camden. His assault against the Virginia militia before the American line was fully formed triggered the collapse that decided the battle. He was mortally wounded at Guilford Courthouse seven months later.',
      birthYear: 1740,
      deathYear: 1781,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Led the British infantry assault on the American left flank that broke the militia and decided the Battle of Camden.',
  },
  {
    person: {
      id: 'person-sc-francis-marion',
      name: 'Brigadier General Francis Marion',
      roles: ['Partisan Commander', 'Continental Army Officer', 'Swamp Fox'],
      bioShort:
        'South Carolina partisan commander who was not at Camden but whose operations in the surrounding lowcountry represented the only effective Patriot resistance in the state after the battle. His raids on British supply lines and communications made the Camden victory strategically hollow.',
      birthYear: 1732,
      deathYear: 1795,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Operated independently of Gates\'s army; his partisan campaign continued after Camden when organized resistance had otherwise collapsed.',
  },
  {
    person: {
      id: 'person-sc-nathanael-greene',
      name: 'Nathanael Greene',
      roles: ['Continental Army General', 'Southern Department Commander'],
      bioShort:
        'Rhode Island general sent by Washington to replace Gates after Camden. What Greene inherited — no army, no supplies, no functioning state government — was the direct consequence of the Camden disaster. He rebuilt the Southern Army from that starting point.',
      birthYear: 1742,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Replaced Gates as Southern Department commander after Camden; the entire subsequent southern campaign was shaped by the need to reverse what Camden had produced.',
  },
  {
    person: {
      id: 'person-sc-otho-williams',
      name: 'Colonel Otho Holland Williams',
      roles: ['Continental Army Colonel', 'Maryland Officer', 'Adjutant General'],
      bioShort:
        'Maryland Continental officer who served as adjutant at Camden and left one of the most detailed contemporary accounts of the battle. He later served as one of Greene\'s most capable subordinates throughout the southern campaign, commanding the light corps at Guilford Courthouse and Eutaw Springs.',
      birthYear: 1749,
      deathYear: 1794,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Served as adjutant at Camden and wrote the primary American account of the battle\'s sequence of events.',
  },
  {
    person: {
      id: 'person-sc-thomas-sumter',
      name: 'Brigadier General Thomas Sumter',
      roles: ['South Carolina Militia General', 'Partisan Commander', 'Gamecock'],
      bioShort:
        'South Carolina militia general whose upcountry partisan band was the primary organized Patriot resistance in the Camden district after the battle. Known as the Gamecock for his aggressive fighting style, Sumter often operated without coordination with Greene or Marion, pursuing his own strategic agenda.',
      birthYear: 1734,
      deathYear: 1832,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded upcountry partisan forces in the Camden district; his irregular operations kept British forces from fully consolidating control after their battlefield victory.',
  },
];

// ============================================================================
// CAMDEN — PLACES
// ============================================================================

export const camdenPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-camden-battlefield',
    name: 'Camden Battlefield',
    placeType: 'BATTLEFIELD',
    description:
      'The preserved battlefield north of Camden where the August 16, 1780 engagement took place. The site retains much of its original character, with open ground and tree lines that approximate the conditions Gates\'s and Cornwallis\'s armies encountered. A state park with interpretive trails and markers.',
    lat: 34.2820,
    lng: -80.6060,
    address: '222 Battlefield Rd, Camden, SC 29020',
    town: { connect: { id: 'us-sc-camden' } },
  },
  {
    id: 'place-camden-historic-camden',
    name: 'Historic Camden Revolutionary War Site',
    placeType: 'LANDMARK',
    description:
      'A reconstructed colonial-era fortified town representing the British base at Camden during the occupation of 1780–1781. The site includes reconstructed stockade walls, period buildings, and interpretive exhibits covering both the battle and the British occupation of the town.',
    lat: 34.2480,
    lng: -80.5980,
    address: '222 Broad St, Camden, SC 29020',
    town: { connect: { id: 'us-sc-camden' } },
  },
  {
    id: 'place-camden-de-kalb-monument',
    name: 'Baron de Kalb Monument',
    placeType: 'MONUMENT',
    description:
      'A monument to Major General Johann de Kalb, the German-born French officer who commanded the Maryland and Delaware Continentals at Camden. De Kalb was shot eleven times in the battle and died three days later. The monument marks one of the few individual officer deaths of the Southern Campaign commemorated with a dedicated marker.',
    lat: 34.2469,
    lng: -80.6070,
    address: 'Broad St, Camden, SC 29020',
    town: { connect: { id: 'us-sc-camden' } },
  },
  {
    id: 'place-camden-cornwallis-house',
    name: 'Cornwallis House Site',
    placeType: 'LANDMARK',
    description:
      'The site of the house used by Lord Cornwallis as his headquarters during the British occupation of Camden in 1780–1781. The building no longer stands, but its location marks the center of British administrative control in the South Carolina interior during the height of the occupation.',
    lat: 34.2475,
    lng: -80.6045,
    address: 'Camden, SC 29020',
    town: { connect: { id: 'us-sc-camden' } },
  },
  {
    id: 'place-camden-little-lynches-creek',
    name: 'Little Lynches Creek Crossing',
    placeType: 'LANDMARK',
    description:
      'The creek crossing north of Camden where Gates\'s army crossed during its approach to the battlefield. The route Gates chose to approach Camden — through sandy, forested terrain with poor road conditions — contributed to his army\'s exhaustion before the battle.',
    lat: 34.3200,
    lng: -80.5900,
    address: 'North of Camden, Kershaw County, SC',
    town: { connect: { id: 'us-sc-camden' } },
  },
  {
    id: 'place-camden-saunders-creek',
    name: 'Saunders Creek (Battle Position)',
    placeType: 'BATTLEFIELD',
    description:
      'The creek just south of the main battlefield where the two armies initially deployed in the pre-dawn hours of August 16, 1780. The narrow space between Saunders Creek and a swamp on the American left created the ground on which the battle was fought — terrain that gave the British an advantage once the American left collapsed.',
    lat: 34.2900,
    lng: -80.6050,
    address: 'Kershaw County, SC, north of Camden',
    town: { connect: { id: 'us-sc-camden' } },
  },
];

// ============================================================================
// CAMDEN — EVENTS
// ============================================================================

export const camdenEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-camden-gates-arrives',
    name: 'Gates Takes Command of Southern Army',
    startDate: new Date('1780-07-25'),
    datePrecision: 'DAY',
    summary:
      'Congress appointed Horatio Gates to command the remnants of the Southern Army at Hillsborough, North Carolina, after Charleston\'s fall. Gates arrived to find fewer than 1,400 effective Continentals and immediately began organizing a march south despite the advice of his officers, including de Kalb, who urged waiting for reinforcements and supplies. Gates\'s confidence, based on his Saratoga reputation, led him to underestimate both the difficulty of the march through a food-depleted countryside and the strength of the British position at Camden.',
    significanceWeight: 72,
    lat: 34.2475,
    lng: -80.6045,
    town: { connect: { id: 'us-sc-camden' } },
  },
  {
    id: 'event-camden-march-south',
    name: 'American Army Marches Through Depleted Country',
    startDate: new Date('1780-07-27'),
    datePrecision: 'DAY',
    summary:
      'Gates marched his army from Hillsborough toward Camden through the North Carolina and South Carolina backcountry in midsummer heat. The countryside had been stripped of provisions by the previous months of war and British foraging. The men subsisted on green corn, unripe peaches, and whatever they could forage, resulting in widespread dysentery. By the time the army reached the Camden area, it was weakened by hunger, illness, and the effects of the march. Gates\'s decision to continue the advance under these conditions was criticized by his officers at the time and by historians since.',
    significanceWeight: 68,
    lat: 34.2820,
    lng: -80.6060,
    town: { connect: { id: 'us-sc-camden' } },
  },
  {
    id: 'event-camden-night-collision',
    name: 'American and British Columns Collide at Night',
    startDate: new Date('1780-08-16'),
    datePrecision: 'DAY',
    summary:
      'In the early hours of August 16, Gates ordered a night march intending to approach Camden under cover of darkness. Simultaneously, Cornwallis moved his force out of Camden toward the American camp. The two advance guards collided on the road at approximately 2:30 a.m. Both sides pulled back, recognized what was happening, and deployed in the darkness, knowing that dawn would bring a battle. Gates held a quick council of war in which General Edward Stevens reportedly asked what to do. No alternative to fighting was practical — the army was deployed across a narrow stretch of ground between swamps with no room to maneuver.',
    significanceWeight: 80,
    lat: 34.2850,
    lng: -80.6055,
    town: { connect: { id: 'us-sc-camden' } },
  },
  {
    id: 'event-camden-battle',
    name: 'Battle of Camden',
    startDate: new Date('1780-08-16'),
    datePrecision: 'DAY',
    summary:
      'At dawn on August 16, 1780, the British line attacked. Webster\'s regulars on the British right moved against the Virginia militia on the American left before the militia had fully formed their line. The militia fired one volley and ran. The collapse was immediate and total. The Continentals on the American right — Maryland and Delaware regiments under de Kalb — did not know the left had broken until British forces began appearing on their flank and rear. They fought for over an hour in a steadily shrinking perimeter, de Kalb rallying them personally until he was shot repeatedly and fell. American losses exceeded 1,000 killed and captured, with the number who simply scattered and never returned impossible to calculate. British losses were approximately 325.',
    significanceWeight: 97,
    lat: 34.2820,
    lng: -80.6060,
    town: { connect: { id: 'us-sc-camden' } },
  },
  {
    id: 'event-camden-gates-flight',
    name: 'Gates Flees to Charlotte',
    startDate: new Date('1780-08-16'),
    datePrecision: 'DAY',
    summary:
      'When the American left broke, Gates rode with the stream of fleeing militia toward Charlotte, North Carolina, 60 miles away. He arrived there that evening. His flight became one of the most cited examples of failed military leadership in American history. Alexander Hamilton wrote a withering assessment. Congress authorized Washington to appoint a replacement; Washington chose Nathanael Greene. Gates never held another combat command.',
    significanceWeight: 82,
    lat: 34.2820,
    lng: -80.6060,
    town: { connect: { id: 'us-sc-camden' } },
  },
  {
    id: 'event-camden-de-kalb-dies',
    name: 'Death of Baron de Kalb',
    startDate: new Date('1780-08-19'),
    datePrecision: 'DAY',
    summary:
      'Major General Johann de Kalb died on August 19, three days after the battle, of the wounds he had sustained — eleven musket balls and a sword blow to the head. He was 59 years old and had been fighting since early morning. British officers who were present described his conduct with respect: he had maintained unit cohesion long after the battle was lost and had been brought down by accumulated wounds rather than any failure of nerve. He was buried in Camden.',
    significanceWeight: 78,
    lat: 34.2475,
    lng: -80.6045,
    town: { connect: { id: 'us-sc-camden' } },
  },
  {
    id: 'event-camden-tarleton-pursuit',
    name: 'Tarleton Pursues American Survivors',
    startDate: new Date('1780-08-16'),
    datePrecision: 'DAY',
    summary:
      'Immediately after the battle, Tarleton\'s cavalry pursued the fleeing American soldiers north toward Charlotte, covering 20 miles in the pursuit and killing or capturing hundreds of stragglers. The pursuit was the most effective post-battle exploitation of the southern campaign. When the British cavalry finally stopped, the American army had effectively ceased to exist as an organized force between Camden and the North Carolina border.',
    significanceWeight: 75,
    lat: 34.3200,
    lng: -80.5900,
    town: { connect: { id: 'us-sc-camden' } },
  },
  {
    id: 'event-camden-fishing-creek',
    name: 'Battle of Fishing Creek (Sumter Defeated)',
    startDate: new Date('1780-08-18'),
    datePrecision: 'DAY',
    summary:
      'Two days after Camden, Tarleton surprised Thomas Sumter\'s partisan force at Fishing Creek, catching them resting in the heat of the day without adequate sentries. Tarleton killed 150 and captured 300 more, freeing 100 British prisoners Sumter had taken. Sumter himself escaped, reportedly riding off in his shirtsleeves. The double blow of Camden and Fishing Creek in 48 hours came as close as the British ever did to completely extinguishing organized Patriot resistance in South Carolina.',
    significanceWeight: 74,
    lat: 34.5700,
    lng: -80.8500,
    town: { connect: { id: 'us-sc-camden' } },
  },
  {
    id: 'event-camden-greene-appointed',
    name: 'Greene Appointed to Replace Gates',
    startDate: new Date('1780-10-14'),
    datePrecision: 'DAY',
    summary:
      'Washington, authorized by Congress to appoint Gates\'s replacement, chose Nathanael Greene on October 14, 1780. The choice was not universally welcomed — Greene had no major victories to his name — but Washington trusted his judgment and organizational ability more than any other officer. Greene arrived at Charlotte on December 2 to take command of an army that, by his own account, was "but the shadow of an army."',
    significanceWeight: 80,
    lat: 34.2475,
    lng: -80.6045,
    town: { connect: { id: 'us-sc-camden' } },
  },
  {
    id: 'event-camden-british-abandon',
    name: 'British Abandon Camden',
    startDate: new Date('1781-05-10'),
    datePrecision: 'DAY',
    summary:
      'After the Battle of Hobkirk\'s Hill in late April 1781, Lord Rawdon ordered the British evacuation of Camden. Despite winning the battle, Rawdon recognized that Greene\'s strategic pressure and partisan activity had made Camden impossible to hold indefinitely. The town was burned before evacuation. It was the first major British post in the South Carolina interior to be abandoned, and it signaled that the strategic momentum had shifted even if the tactical victories had not.',
    significanceWeight: 82,
    lat: 34.2475,
    lng: -80.6045,
    town: { connect: { id: 'us-sc-camden' } },
  },
];

// ============================================================================
// CAMDEN — STORIES
// ============================================================================

export const camdenStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-camden-de-kalb-last-stand',
    title: 'Eleven Times',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-sc-baron-de-kalb' } },
    verificationStatus: 'VERIFIED',
    textVersion: `The Maryland and Delaware Continentals did not know the left had broken. The battle had been going on for perhaps fifteen minutes when the British infantry began appearing on their flank. De Kalb was 59 years old, had been fighting since before most of his soldiers were born, and understood immediately what the flanking fire meant: the militia was gone, the battle was lost, and the question now was whether anything could be saved.

He did not retreat. He counterattacked. Three times the Continentals pushed forward into the British line, fighting in a shrinking perimeter as the encirclement closed. British accounts written after the battle noted the discipline and fury of the Maryland and Delaware men with something close to professional respect.

De Kalb was shot the first time and kept fighting. He was shot again. The accounts are not precise about the sequence because no one was keeping records under those conditions, but when he finally went down he had been struck eleven times by musket balls and once by a sword blow to the head. His adjutant, caught in the fighting around him, wrote afterward that de Kalb had been unhorsed — his horse shot from under him — and continued fighting on foot.

He died three days later, on August 19, lucid enough at the end to dictate a letter. British officers who attended him during those three days described him with genuine respect. Cornwallis arranged a military funeral.

What de Kalb's performance at Camden tells us about the Maryland and Delaware Continentals is as important as what it tells us about de Kalb himself. These were the men who had covered the Brooklyn retreat in 1776, who had wintered at Valley Forge, who had been fighting for four years. They did not break when the militia broke. They fought until their general was dying on the ground around them. That was what a regular army looked like, when you had one.

The monument in Camden carries his name and the date. It does not try to explain what it meant to lose someone like that in a battle that was already lost.`,
    audioScript: `The Maryland and Delaware Continentals didn't know the left had broken. When British infantry started appearing on their flank, de Kalb understood immediately: the militia was gone, the battle was lost. He counterattacked anyway.

Three times the Continentals pushed forward into the British line, fighting in a shrinking perimeter. De Kalb was shot, and kept fighting. Shot again. When he finally fell, he had been struck eleven times.

He died three days later, lucid enough to dictate a letter. British officers attended him with genuine respect. Cornwallis arranged a military funeral.

What Camden tells us about de Kalb matters less than what it tells us about the Maryland and Delaware Continentals. They were men who had fought for four years. They did not break when the militia broke. They fought until their general was dying on the ground around them.`,
    tags: ['de Kalb', 'Continentals', 'Maryland', 'Delaware', 'discipline', 'Camden'],
    town: { connect: { id: 'us-sc-camden' } },
  },
  {
    id: 'story-camden-inherited-nothing',
    title: 'The Shadow of an Army',
    storyType: 'MODERN_VOICE',
    narratorName: 'Military Historian',
    narratorRole: 'Southern Campaign Research, University of South Carolina',
    verificationStatus: 'ANECDOTAL',
    textVersion: `When Nathanael Greene arrived at Charlotte in December 1780 to take command of the Southern Army, he wrote to Washington that he had found "but the shadow of an army." That's a figure of speech, but it was also a literal description of the organizational situation.

Camden had destroyed the only structured military force south of Virginia. What Greene inherited was approximately 1,500 men who were, in his words, "without clothing, without shoes, without blankets, almost without ammunition." There was no functioning supply system. There was no commissary. The state of South Carolina had no operating government. The Patriot civil infrastructure that an army normally depends on had collapsed.

What I find most remarkable about the Greene story — and I've spent years with this material — is that he understood from his first week in command that he could not rebuild that army in any conventional sense. He didn't have the time, the resources, or the territory. So he ran a campaign that was almost entirely shaped by what he didn't have.

He split his army, which violates the textbook rule about concentration. He maneuvered to force Cornwallis to split his. He fought battles he intended to lose strategically while winning them tactically — meaning he inflicted damage Cornwallis couldn't replace, then retreated before the British could destroy him. He coordinated with Marion and Sumter without being able to command them directly.

Camden made all of that necessary. If Gates's army had survived, Greene might have commanded a conventional campaign. Instead he had to invent a new one. Whether that's a silver lining is a matter of perspective. From where we stand now, the southern campaign that followed Camden is one of the most intellectually sophisticated pieces of military planning in American history. At the time, it was an improvisation built on a catastrophe.`,
    audioScript: `When Greene arrived at Charlotte in December 1780, he wrote to Washington that he had found "but the shadow of an army." That was a literal description, not a figure of speech.

Camden had destroyed the only structured military force south of Virginia. Greene inherited 1,500 men without clothing, shoes, blankets, or ammunition. No supply system. No commissary. No functioning state government.

What he understood from his first week in command was that he couldn't rebuild a conventional army. He didn't have the time, resources, or territory. So he ran a campaign entirely shaped by what he didn't have.

He split his army — violating the textbook rule. He maneuvered to force Cornwallis to split his. He fought battles designed to inflict damage Cornwallis couldn't replace, then retreated before being destroyed himself.

Camden made all of that necessary. The southern campaign that followed is one of the most sophisticated pieces of military planning in American history. At the time, it was an improvisation built on a catastrophe.`,
    tags: ['Greene', 'strategy', 'Camden aftermath', 'Southern campaign', 'improvisation'],
    town: { connect: { id: 'us-sc-camden' } },
  },
];

// ============================================================================
// CAMDEN — LESSON PLANS
// ============================================================================

export const camdenLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-sc-camden' } },
    title: 'Camden 1780: Why Armies Break',
    gradeRange: '6-8',
    estimatedDuration: '2 class periods',
    summary:
      'This lesson uses the Battle of Camden as a case study in military cohesion and collapse. Students examine why the Virginia militia broke under British attack while the Maryland and Delaware Continentals fought on, and what that difference tells us about training, experience, and institutional culture. The lesson also examines leadership through the contrast between Gates\'s flight and de Kalb\'s conduct, and asks students to think about what different kinds of "courage" look like in crisis situations.',
    lessonData: {
      objectives: [
        'Students will explain the difference between militia and Continental regular forces in the Revolutionary War',
        'Students will analyze the sequence of events at Camden that led to American defeat',
        'Students will compare the leadership behaviors of Gates and de Kalb during the battle',
        'Students will evaluate what the Battle of Camden\'s outcome meant for the larger Southern Campaign',
      ],
      essentialQuestions: [
        'What is the difference between a militia and a professional army, and why did it matter at Camden?',
        'What does leadership under pressure look like — and what do Gates and de Kalb each show us?',
        'How can a military disaster lead to a different and better strategy?',
      ],
      materials: [
        'Battle map of Camden showing terrain, unit positions, and militia flight routes',
        'Otho Williams\'s account of the Battle of Camden (adapted)',
        'Comparison chart: militia vs. Continental regular soldiers',
        'Timeline: Camden to Cowpens (six months of Southern Campaign)',
      ],
      activities: [
        {
          name: 'Regular vs. Militia: What\'s the Difference?',
          duration: '20 minutes',
          description:
            'Students compare the training, equipment, and experience of militia vs. Continental regular soldiers using a structured chart. Discussion: what circumstances favor militia, and what circumstances favor regulars? Where did Gates go wrong in how he deployed his forces?',
        },
        {
          name: 'Two Leaders, One Battle',
          duration: '25 minutes',
          description:
            'Students read adapted accounts of both Gates\'s conduct (riding away with the militia) and de Kalb\'s conduct (continuing to fight after being shot multiple times). Working in pairs, they complete a Venn diagram comparing the two. Class discussion: is it fair to compare them? What were each man\'s options at the moment their decisions were made?',
        },
        {
          name: 'From Disaster to Strategy',
          duration: '20 minutes',
          description:
            'Students examine the timeline from Camden to Cowpens and trace how Greene used the conditions created by Camden\'s disaster to run a different kind of campaign. Discussion: could Greene\'s campaign have worked if Gates\'s army had survived? What does Camden make possible that a conventional military situation would not?',
        },
      ],
      assessment:
        'Written response (one paragraph): "If you had been advising Greene when he arrived in December 1780, what would you have told him to do first, and why?" Students must reference at least two specific facts from the lesson.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.3: Follow precisely a multistep procedure when carrying out experiments, taking measurements, or performing technical tasks',
        'CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information with other information in print and digital texts',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.2.6-8: Classify series of historical events and developments as examples of change and/or continuity',
        'D2.Geo.2.6-8: Use maps to explain relationships between the locations of places and their environmental characteristics',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-sc-camden' } },
    title: 'The Geography of Defeat: Terrain, Strategy, and the Southern Campaign',
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary:
      'This lesson uses Camden as an entry point into a geographic and strategic analysis of the Southern Campaign as a whole. Students examine how the terrain of South Carolina — the coastal lowcountry, the swamps, the upcountry piedmont — shaped both British strategy and American resistance. They trace the role of rivers, roads, and fortified posts in British plans for controlling the interior, and evaluate how Greene exploited those same geographic constraints to undermine British control without winning a conventional battle.',
    lessonData: {
      objectives: [
        'Students will analyze how South Carolina\'s physical geography shaped military strategy in the 1780–1781 campaign',
        'Students will evaluate Greene\'s strategic rationale for splitting his army in December 1780',
        'Students will assess the role of partisan warfare in filling the gap left by Camden\'s destruction of the Continental Army',
        'Students will connect geographic analysis to strategic outcomes',
      ],
      essentialQuestions: [
        'How does terrain shape military strategy — and how did the terrain of South Carolina both help and constrain British plans?',
        'Why did Greene split his army in December 1780 when military doctrine said to concentrate? Was he right?',
        'What can partisan warfare accomplish that a regular army cannot — and what can it not do?',
      ],
      materials: [
        'Physical map of South Carolina showing rivers, swamps, and the piedmont/lowcountry divide',
        'Map of British fortified posts in South Carolina, 1780–1781',
        'Greene\'s letter to Washington explaining his decision to split the army (December 1780)',
        'Secondary source: analysis of the partisan war in South Carolina',
        'Timeline and campaign map: Camden through the British evacuation of interior posts, 1781',
      ],
      activities: [
        {
          name: 'Geographic Analysis: Reading the Landscape',
          duration: '25 minutes',
          description:
            'Students examine physical and political maps of South Carolina and identify: how do the major rivers divide the state into operational zones? Where did the British establish fortified posts, and why those locations? What terrain features made Marion\'s partisan operations in the lowcountry possible? Students annotate maps and share findings.',
        },
        {
          name: 'The Split Army Decision',
          duration: '30 minutes',
          description:
            'Students read Greene\'s letter to Washington explaining why he divided the army, sending Morgan to the west while he moved east with the main body. Groups analyze: what was the risk? What was the potential payoff? Why did this force Cornwallis into a difficult choice? Students then evaluate: given what actually happened (Cowpens), was Greene\'s decision justified, or was he lucky?',
        },
        {
          name: 'Partisan War: Limits and Possibilities',
          duration: '25 minutes',
          description:
            'Students read a summary of Marion\'s operations in the lowcountry from Camden through 1781 and evaluate: what could Marion\'s partisans accomplish that Greene\'s regulars could not? What could they not do? How did the two forms of warfare depend on each other? Discussion connects to the broader question of when irregular warfare is sufficient to achieve political objectives.',
        },
      ],
      assessment:
        'Summative analytical essay: "Using the maps and documents from this lesson, explain why the British lost the South Carolina interior between 1780 and 1782 despite winning every major field battle except Cowpens." Students must integrate geographic, strategic, and social evidence.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.7: Integrate quantitative or technical analysis with qualitative analysis in print or digital texts',
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in several primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.1.9-12: Evaluate how historical events and developments were shaped by unique circumstances of time and place',
        'D2.Geo.4.9-12: Evaluate the influences of long-term human-induced environmental change on spatial patterns of conflict and cooperation',
        'D2.His.14.9-12: Analyze multiple and complex causes and effects of events in the past',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// CAMDEN — ADDITIONAL LINKS
// ============================================================================

export const camdenAdditionalLinks: Array<{
  toTownId: string;
  linkType: 'SHARED_EVENT' | 'SHARED_PERSON' | 'GEOGRAPHIC_PROXIMITY';
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-sc-charleston',
    linkType: 'SHARED_EVENT',
    reason:
      'Camden was the direct military consequence of Charleston\'s fall. Congress sent Gates\'s army south specifically to reverse the disaster at Charleston; when Camden destroyed that army, the strategic situation became the starting point for Greene\'s campaign.',
    weight: 95,
  },
  {
    toTownId: 'us-sc-cowpens',
    linkType: 'SHARED_PERSON',
    reason:
      'Tarleton\'s command at Camden fed directly into his defeat at Cowpens. The British Legion that pursued American survivors from Camden was the same force Morgan destroyed five months later.',
    weight: 88,
  },
  {
    toTownId: 'us-sc-hobkirks-hill',
    linkType: 'SHARED_EVENT',
    reason:
      'Hobkirk\'s Hill was fought just north of Camden in April 1781. The British abandonment of Camden after that battle was the direct consequence of Greene\'s pressure on the post system that Cornwallis had built around the Camden base.',
    weight: 92,
  },
  {
    toTownId: 'us-nc-guilford-courthouse',
    linkType: 'SHARED_PERSON',
    reason:
      'Greene and Cornwallis both fought at Guilford Courthouse after Camden. Several British officers killed or wounded at Guilford — including Webster — had served at Camden.',
    weight: 80,
  },
];

// ============================================================================
// COWPENS
// ============================================================================

export const cowpensTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `The Battle of Cowpens on January 17, 1781, is one of the most tactically brilliant engagements in American military history. Brigadier General Daniel Morgan, commanding a mixed force of Continentals and militia, destroyed Lieutenant Colonel Banastre Tarleton's British Legion so completely that Tarleton escaped with fewer than 200 men from a force that had begun the battle with more than 1,000. The battle took eleven minutes from the opening shots to the British collapse.

Morgan's tactical plan at Cowpens is the element historians and military scholars most admire. He took the feature that had destroyed American armies throughout the southern campaign — the unreliability of militia under fire — and turned it into a weapon. He placed his militia in front, told them explicitly that he expected them to fire two volleys and then retire to the rear of the Continental line. He did not ask them to stand and fight like regulars. He asked them to do what militia could reliably do: fire accurately, disrupt the enemy's advance, and then move to a designated position. The militia did exactly that.

Behind the militia stood the Continental regulars under Lieutenant Colonel John Eager Howard: Marylanders and Delawareans who had survived Camden, plus Virginia Continentals. Behind them, on the rising ground at the rear of the position, Morgan placed his cavalry under Colonel William Washington. The layered defense had redundancy built into it at every level.

Tarleton attacked as Morgan expected him to. The British Legion was aggressive, experienced, and accustomed to routing American forces. When the militia fired two volleys and retired, Tarleton's men read it as the familiar sight of Americans breaking and surged forward. Then they hit the Continental line, which did not break. The fighting in the center was fierce and close. Howard's men fell back a short distance — briefly creating the appearance of another American rout — and when Tarleton's men came on in pursuit, Howard ordered a volley and then a bayonet charge. Washington's cavalry simultaneously hit the British left flank. The double blow, from front and flank, was total. The British regulars who had been pursuing a retreating enemy suddenly found themselves attacked on two sides by men who had turned around to fight them.

The collapse was faster than anyone expected. The 71st Highlanders, the most formidable unit in Tarleton's force, surrendered on the field. The British Legion cavalry refused to come to their support. Tarleton himself attempted to organize a countercharge and was nearly killed. He fled with about 200 men. Approximately 110 British were killed on the field, 229 wounded, and 600 captured — more than the entire American force he had faced.

Cowpens reversed the strategic situation in the Carolina campaign in ways that went beyond the tactical result. Cornwallis, learning what had happened, understood that he had lost Tarleton's Legion as an effective force. He stripped his own army of wagons and heavy equipment and chased Morgan and Greene north through the Carolina winter in what became the Race to the Dan — an extraordinary 200-mile running campaign that ended with the American army across the Dan River in Virginia, safe, having survived Cornwallis's pursuit.

The Cowpens National Battlefield preserves the ground with exceptional fidelity. The rolling terrain, the open ground at the center of the American position, and the tree lines that defined the flanks are still visible. Walking the ground makes Morgan's plan intelligible in a way that maps cannot quite capture.`,
};

// ============================================================================
// COWPENS — PEOPLE
// ============================================================================

export const cowpensPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-sc-daniel-morgan',
      name: 'Brigadier General Daniel Morgan',
      roles: ['Continental Army General', 'Virginia Rifleman', 'Light Infantry Commander'],
      bioShort:
        'Virginia frontiersman and Continental general who designed and executed the double-envelopment at Cowpens. His tactical plan — deploying militia and regulars in layered roles matched to each force\'s capabilities — is studied in military academies as a model of intelligent use of available forces.',
      birthYear: 1736,
      deathYear: 1802,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Designed and commanded the American force at Cowpens; his layered tactical plan destroyed Tarleton\'s Legion and reversed the strategic momentum of the Southern Campaign.',
  },
  {
    person: {
      id: 'person-sc-banastre-tarleton',
      name: 'Lieutenant Colonel Banastre Tarleton',
      roles: ['British Cavalry Commander', 'British Legion Commander'],
      bioShort:
        'British cavalry officer whose aggressive pursuit of Morgan led him into Morgan\'s prepared position at Cowpens. His decision to attack without adequate reconnaissance and without giving his men time to rest contributed to the most complete American tactical victory of the southern campaign.',
      birthYear: 1754,
      deathYear: 1833,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the British force at Cowpens; his defeat here effectively ended the British Legion as a significant fighting force.',
  },
  {
    person: {
      id: 'person-sc-john-eager-howard',
      name: 'Lieutenant Colonel John Eager Howard',
      roles: ['Continental Army Officer', 'Maryland Continental Commander'],
      bioShort:
        'Maryland Continental officer who commanded the regulars at the center of Morgan\'s Cowpens line. His decision to order a volley and bayonet charge when his men appeared to be in retreat was the tactical pivot of the battle. He received a Congressional gold medal for his conduct.',
      birthYear: 1752,
      deathYear: 1827,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the Continental infantry line at Cowpens; his ordered retreat and counter-volley was the tactical move that broke Tarleton\'s pursuing force.',
  },
  {
    person: {
      id: 'person-sc-william-washington',
      name: 'Colonel William Washington',
      roles: ['Continental Army Cavalry Officer', '3rd Continental Light Dragoons'],
      bioShort:
        'Virginia cavalry officer and distant cousin of George Washington who commanded the American cavalry at Cowpens. His cavalry strike on the British left flank simultaneous with Howard\'s bayonet charge completed the double envelopment that destroyed Tarleton\'s force.',
      birthYear: 1752,
      deathYear: 1810,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the American cavalry at Cowpens; his flank attack combined with Howard\'s bayonet charge completed the double envelopment.',
  },
  {
    person: {
      id: 'person-sc-nathanael-greene',
      name: 'Nathanael Greene',
      roles: ['Continental Army General', 'Southern Department Commander'],
      bioShort:
        'Rhode Island general who made the strategic decision to split the Southern Army in December 1780, sending Morgan west — the decision that created the conditions for Cowpens. Greene did not fight at Cowpens but his strategic framework made the battle possible.',
      birthYear: 1742,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Made the strategic decision to detach Morgan\'s corps westward, which drew Tarleton\'s pursuit and created the conditions for Cowpens.',
  },
  {
    person: {
      id: 'person-sc-andrew-pickens',
      name: 'Brigadier General Andrew Pickens',
      roles: ['South Carolina Militia General', 'Partisan Commander'],
      bioShort:
        'South Carolina militia general who commanded the militia skirmish line at Cowpens. His men executed Morgan\'s plan precisely — firing two volleys and retiring through gaps in the Continental line — contributing to the tactical deception that lured Tarleton\'s men into the double envelopment.',
      birthYear: 1739,
      deathYear: 1817,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the militia at Cowpens; his men\'s disciplined execution of the two-volley-and-retire plan was central to Morgan\'s tactical design.',
  },
  {
    person: {
      id: 'person-sc-cornwallis',
      name: 'Lord Charles Cornwallis',
      roles: ['British General', 'Southern Army Commander', 'Lieutenant General'],
      bioShort:
        'British general whose response to Cowpens — stripping his army of wagons and racing north to catch Greene — led to the Guilford Courthouse campaign and his eventual decision to invade Virginia, ending at Yorktown.',
      birthYear: 1738,
      deathYear: 1805,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Cornwallis\'s decision to chase Greene after Cowpens rather than consolidate in South Carolina was the strategic overreach that led to Yorktown.',
  },
  {
    person: {
      id: 'person-sc-henry-lee',
      name: 'Lieutenant Colonel Henry Lee',
      roles: ['Continental Army Cavalry Commander', 'Lee\'s Legion Commander', 'Light Horse Harry'],
      bioShort:
        'Virginia cavalry officer who commanded Lee\'s Legion, a mixed cavalry and infantry unit that operated throughout the southern campaign. Not at Cowpens but a key figure in subsequent operations, Lee\'s Legion provided the intelligence, screening, and rapid movement capability Greene\'s army otherwise lacked.',
      birthYear: 1756,
      deathYear: 1818,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Led Lee\'s Legion in the operations surrounding Cowpens; provided Greene with the mobile cavalry force essential to the larger campaign.',
  },
  {
    person: {
      id: 'person-sc-archibald-mcarthur',
      name: 'Major Archibald McArthur',
      roles: ['71st Highlanders Commander', 'British Regular Infantry Officer'],
      bioShort:
        'British major commanding the 71st Highland Regiment at Cowpens. The Highlanders were the most experienced regular infantry unit in Tarleton\'s force; their surrender on the battlefield marked the collapse of British resistance at Cowpens.',
      birthYear: 1740,
      deathYear: 1800,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the 71st Highlanders at Cowpens; surrendered with his regiment when the British line collapsed.',
  },
];

// ============================================================================
// COWPENS — PLACES
// ============================================================================

export const cowpensPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-cowpens-battlefield-nps',
    name: 'Cowpens National Battlefield',
    placeType: 'BATTLEFIELD',
    description:
      'The preserved battlefield where Morgan\'s force defeated Tarleton\'s Legion on January 17, 1781. The open, rolling terrain is largely intact and allows visitors to understand Morgan\'s tactical plan by walking the ground. The NPS visitor center includes detailed interpretation of the battle\'s tactics and significance.',
    lat: 35.1298,
    lng: -81.8012,
    address: '4001 Chesnee Hwy, Gaffney, SC 29341',
    town: { connect: { id: 'us-sc-cowpens' } },
  },
  {
    id: 'place-cowpens-washington-monument',
    name: 'Colonel Washington Monument',
    placeType: 'MONUMENT',
    description:
      'A monument on the Cowpens battlefield marking Colonel William Washington\'s cavalry position and the location of his decisive flank charge. Washington\'s cavalry struck the British left simultaneously with Howard\'s bayonet charge to complete the double envelopment.',
    lat: 35.1310,
    lng: -81.8025,
    address: 'Cowpens National Battlefield, Gaffney, SC 29341',
    town: { connect: { id: 'us-sc-cowpens' } },
  },
  {
    id: 'place-cowpens-morgan-monument',
    name: 'Daniel Morgan Monument',
    placeType: 'MONUMENT',
    description:
      'A monument to Brigadier General Daniel Morgan at the Cowpens battlefield, marking the position from which he observed and directed the battle. Morgan was suffering from severe sciatica during the battle and directed it while in considerable pain.',
    lat: 35.1295,
    lng: -81.8005,
    address: 'Cowpens National Battlefield, Gaffney, SC 29341',
    town: { connect: { id: 'us-sc-cowpens' } },
  },
  {
    id: 'place-cowpens-militia-line',
    name: 'Militia Skirmish Line Position',
    placeType: 'BATTLEFIELD',
    description:
      'The forward position where Pickens\'s militia formed Morgan\'s first line of defense. The militia\'s disciplined two-volley-and-retire from this position was the tactical deception that lured Tarleton\'s men into the double envelopment. Interpretive markers explain the militia\'s role in the battle plan.',
    lat: 35.1280,
    lng: -81.7990,
    address: 'Cowpens National Battlefield, Gaffney, SC 29341',
    town: { connect: { id: 'us-sc-cowpens' } },
  },
  {
    id: 'place-cowpens-continental-line',
    name: 'Continental Infantry Line',
    placeType: 'BATTLEFIELD',
    description:
      'The position where Howard\'s Maryland and Delaware Continentals formed the main American defensive line at Cowpens. It was here that the militia retired through gaps in the Continental line, and where Howard ordered the counter-volley and bayonet charge that broke the British pursuit.',
    lat: 35.1302,
    lng: -81.8010,
    address: 'Cowpens National Battlefield, Gaffney, SC 29341',
    town: { connect: { id: 'us-sc-cowpens' } },
  },
  {
    id: 'place-cowpens-visitor-center',
    name: 'Cowpens NPS Visitor Center',
    placeType: 'LANDMARK',
    description:
      'The National Park Service visitor center at Cowpens, which includes exhibits on the battle\'s tactics, the Southern Campaign context, and the individuals who fought here. A fiber-optic battle map illustrates the sequence of events on January 17, 1781.',
    lat: 35.1303,
    lng: -81.7973,
    address: '4001 Chesnee Hwy, Gaffney, SC 29341',
    town: { connect: { id: 'us-sc-cowpens' } },
  },
];

// ============================================================================
// COWPENS — EVENTS
// ============================================================================

export const cowpensEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-cowpens-army-split',
    name: 'Greene Splits the Southern Army',
    startDate: new Date('1780-12-16'),
    datePrecision: 'DAY',
    summary:
      'Greene divided his army at Charlotte, sending Morgan westward with approximately 600 men while he moved the main body east toward Cheraw. The decision violated conventional military doctrine, but Greene\'s intention was to force Cornwallis to split his own army — creating conditions where each American detachment could defeat whichever British force came after it.',
    significanceWeight: 85,
    lat: 35.1298,
    lng: -81.8012,
    town: { connect: { id: 'us-sc-cowpens' } },
  },
  {
    id: 'event-cowpens-tarleton-pursues',
    name: 'Tarleton Ordered to Pursue Morgan',
    startDate: new Date('1781-01-02'),
    datePrecision: 'DAY',
    summary:
      'Cornwallis detached Tarleton with approximately 1,100 men to pursue and destroy Morgan\'s force in western South Carolina. Tarleton moved aggressively, pushing his men through difficult terrain in winter conditions. Morgan fell back steadily, looking for ground where he could fight on favorable terms. When he found Cowpens, he stopped.',
    significanceWeight: 78,
    lat: 35.1298,
    lng: -81.8012,
    town: { connect: { id: 'us-sc-cowpens' } },
  },
  {
    id: 'event-cowpens-morgan-explains-plan',
    name: 'Morgan Explains His Plan to the Militia',
    startDate: new Date('1781-01-16'),
    datePrecision: 'DAY',
    summary:
      'The night before the battle, Morgan moved among his campfires talking to the militia, explaining exactly what he expected them to do: fire two volleys at the British, then retire through gaps in the Continental line. He told them he did not expect them to stand and fight like regulars. Contemporary accounts describe him as relaxed and direct, explaining the plan in simple terms. This personal leadership was itself a tactical element of the plan.',
    significanceWeight: 80,
    lat: 35.1298,
    lng: -81.8012,
    town: { connect: { id: 'us-sc-cowpens' } },
  },
  {
    id: 'event-cowpens-battle',
    name: 'Battle of Cowpens',
    startDate: new Date('1781-01-17'),
    datePrecision: 'DAY',
    summary:
      'The battle lasted approximately eleven minutes from first contact to British collapse. Tarleton\'s infantry advanced in good order; the militia fired two volleys and retired through the Continental line exactly as Morgan had planned. The British surged forward into the Continental line, which held. Howard\'s men fell back briefly, then turned, fired a volley, and charged with bayonets. Washington\'s cavalry simultaneously struck the British left. The 71st Highlanders surrendered on the field. Approximately 600 British were captured, 110 killed, 229 wounded. American losses were 12 killed and 60 wounded.',
    significanceWeight: 98,
    lat: 35.1298,
    lng: -81.8012,
    town: { connect: { id: 'us-sc-cowpens' } },
  },
  {
    id: 'event-cowpens-tarleton-escapes',
    name: 'Tarleton Escapes with 200 Men',
    startDate: new Date('1781-01-17'),
    datePrecision: 'DAY',
    summary:
      'Tarleton attempted to organize a cavalry countercharge after the British infantry collapsed but his own Legion cavalry refused to advance. He escaped with approximately 200 men — the only significant remnant of his 1,100-man force. Washington pursued him briefly and the two commanders exchanged saber blows in a personal encounter before Tarleton escaped.',
    significanceWeight: 82,
    lat: 35.1298,
    lng: -81.8012,
    town: { connect: { id: 'us-sc-cowpens' } },
  },
  {
    id: 'event-cowpens-cornwallis-reaction',
    name: 'Cornwallis Strips Wagons and Pursues',
    startDate: new Date('1781-01-19'),
    datePrecision: 'DAY',
    summary:
      'When news of Cowpens reached Cornwallis, he immediately ordered his army to burn its excess wagons, tents, and heavy equipment to move faster — committing his army to living off the land while chasing Greene north. This led to the Race to the Dan and eventually to Guilford Courthouse.',
    significanceWeight: 85,
    lat: 35.1298,
    lng: -81.8012,
    town: { connect: { id: 'us-sc-cowpens' } },
  },
  {
    id: 'event-cowpens-race-to-dan',
    name: 'The Race to the Dan',
    startDate: new Date('1781-01-29'),
    datePrecision: 'DAY',
    summary:
      'With Cornwallis in pursuit, Greene united Morgan\'s force with the main army and began a 200-mile running retreat north through the Carolina winter, aiming to cross the Dan River into Virginia before Cornwallis could intercept. Greene reached the Dan first, crossing by boat on February 14, and watched Cornwallis\'s army arrive at the south bank unable to follow.',
    significanceWeight: 88,
    lat: 35.1298,
    lng: -81.8012,
    town: { connect: { id: 'us-sc-cowpens' } },
  },
  {
    id: 'event-cowpens-congressional-medals',
    name: 'Congress Awards Gold Medals for Cowpens',
    startDate: new Date('1781-03-09'),
    datePrecision: 'DAY',
    summary:
      'Congress voted gold medals to Morgan, Howard, Washington, and Pickens for the victory at Cowpens. Morgan\'s medal was one of only eight Congressional gold medals awarded during the Revolutionary War, reflecting both the tactical brilliance of the victory and its strategic impact on the southern campaign.',
    significanceWeight: 65,
    lat: 35.1298,
    lng: -81.8012,
    town: { connect: { id: 'us-sc-cowpens' } },
  },
  {
    id: 'event-cowpens-morgan-retires',
    name: 'Morgan Retires Due to Sciatica',
    startDate: new Date('1781-02-10'),
    datePrecision: 'DAY',
    summary:
      'Weeks after Cowpens, Daniel Morgan\'s sciatica became so debilitating that he could no longer command in the field. He retired to Virginia before the Race to the Dan concluded and did not return to active service in the southern theater. His absence deprived Greene of his most talented subordinate at a critical moment.',
    significanceWeight: 68,
    lat: 35.1298,
    lng: -81.8012,
    town: { connect: { id: 'us-sc-cowpens' } },
  },
  {
    id: 'event-cowpens-guilford-consequence',
    name: 'Guilford Courthouse: Cowpens\'s Strategic Consequence',
    startDate: new Date('1781-03-15'),
    datePrecision: 'DAY',
    summary:
      'The Battle of Guilford Courthouse was the direct strategic consequence of Cowpens. Cornwallis won the field but suffered over 500 casualties — roughly a quarter of his effective force. Fox described it in Parliament: "Another such victory would ruin the British army." Cornwallis withdrew to Wilmington and eventually marched to Virginia and Yorktown.',
    significanceWeight: 88,
    lat: 36.1220,
    lng: -79.8620,
    town: { connect: { id: 'us-sc-cowpens' } },
  },
];

// ============================================================================
// COWPENS — STORIES
// ============================================================================

export const cowpensStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-cowpens-morgan-plan',
    title: 'The Old Wagoner\'s Math',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-sc-daniel-morgan' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Morgan spent the night of January 16 moving among the campfires. He was 44 years old, had been fighting since the French and Indian War, and understood something about militia that most general officers either did not know or refused to accept: they would not stand and fight like regulars, and asking them to was not courage, it was poor planning.

What he asked his militia at Cowpens was something else. Fire two volleys. Hit someone with each shot. Then retire through the gaps in the Continental line to the rear, reform, and be ready to fight again. He told them he did not expect them to hold. He told them exactly what he did expect: two good volleys, then an orderly withdrawal to a designated position.

The brilliance of this was not merely tactical. It was psychological. He was telling the militia something they could do — something within their capability and their experience — rather than asking them to do something that was not. He was building confidence rather than demanding heroism.

The plan required three things to work: the militia had to fire accurately and then actually retire rather than run; the Continentals behind them had to hold when the British came through; and the cavalry had to arrive at the right moment on the British flank. All three had to happen in sequence, in a battle that would last less than fifteen minutes.

They all happened. Morgan was suffering from severe sciatica throughout. He directed the battle from horseback, in considerable pain. Contemporary accounts describe him as calm. He had designed a plan that worked with the army he had rather than the army he might have wished for. That is the thing military historians come back to, again and again, when they discuss Cowpens: not the outcome, which was extraordinary, but the design, which was almost perfect.`,
    audioScript: `Morgan spent the night of January 16 moving among the campfires, explaining what he needed from the militia. Two volleys. Then retire through gaps in the Continental line. He told them he did not expect them to stand like regulars. He told them what they could actually do.

The plan required three things in sequence: militia fire and retire cleanly; Continentals hold; cavalry arrive on the British flank at the right moment.

All three happened. Morgan directed it from horseback with severe sciatica. Contemporary accounts describe him as calm.

What military historians come back to is not the outcome — which was extraordinary — but the design. He built a plan that worked with the army he had, not the army he might have wished for.`,
    tags: ['Morgan', 'tactics', 'militia', 'double envelopment', 'leadership'],
    town: { connect: { id: 'us-sc-cowpens' } },
  },
  {
    id: 'story-cowpens-modern-analysis',
    title: 'The Eleven Minutes',
    storyType: 'MODERN_VOICE',
    narratorName: 'Military Historian',
    narratorRole: 'Faculty, U.S. Army Command and General Staff College',
    verificationStatus: 'ANECDOTAL',
    textVersion: `Cowpens is in the curriculum at every major American military educational institution. It has been there for a long time. The reason is not the outcome — a lopsided American victory — but the method.

What Morgan did was identify the constraints of his situation precisely and design around them. His constraints were: militia who would not reliably hold under sustained fire; Continental regulars who were reliable but outnumbered; cavalry who were well-mounted and capable of a decisive flank charge. He assigned each element a role exactly calibrated to what that element could do. The militia were not asked to hold; they were asked to fire and retire in order. The Continentals were placed where their steadiness would matter most. The cavalry was positioned where a well-timed charge could be decisive.

Tarleton's failure is the mirror of Morgan's success. Tarleton attacked without adequate reconnaissance, without giving his men rest after the night march, and without accounting for the possibility that the apparent militia rout was deliberate. He had seen American militia break and run many times. He expected it again. The expectation destroyed him.

The lesson I draw from Cowpens for modern officers isn't "use a double envelopment." It's something more transferable: know precisely what your forces can and cannot do, design your plan around those realities rather than against them, and create conditions where the enemy's predictable behavior works against him rather than for him.`,
    audioScript: `Cowpens is in the curriculum at every major American military institution. Not for the outcome — a lopsided victory — but for the method.

Morgan identified his constraints precisely: militia who wouldn't hold under fire; reliable Continentals who were outnumbered; capable cavalry. He assigned each element a role calibrated exactly to what it could do.

Tarleton's failure is the mirror of Morgan's success. He attacked without reconnaissance, without rest, without accounting for the possibility that the militia retreat was deliberate. That expectation destroyed him.

The lesson isn't "use a double envelopment." It's more transferable: know precisely what your forces can and cannot do. Design your plan around those realities. Create conditions where the enemy's predictable behavior works against him.`,
    tags: ['tactics', 'double envelopment', 'military education', 'leadership', 'Tarleton'],
    town: { connect: { id: 'us-sc-cowpens' } },
  },
];

// ============================================================================
// COWPENS — LESSON PLANS
// ============================================================================

export const cowpensLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-sc-cowpens' } },
    title: 'Cowpens: Designing a Battle Around What You Have',
    gradeRange: '6-8',
    estimatedDuration: '2 class periods',
    summary:
      'This lesson uses Cowpens as a case study in planning and problem-solving under constraints. Students analyze Morgan\'s tactical plan by identifying the specific capabilities and limitations of each unit he commanded, then trace how he designed his deployment to work with those realities. Students compare Morgan\'s approach to Gates\'s approach at Camden and draw conclusions about the importance of matching tasks to capabilities.',
    lessonData: {
      objectives: [
        'Students will identify the specific capabilities and limitations of militia vs. Continental regular forces',
        'Students will analyze Morgan\'s tactical plan and explain why it worked',
        'Students will compare the command decisions at Camden and Cowpens to identify what made the difference',
        'Students will apply a constraints-based planning framework to a historical problem',
      ],
      essentialQuestions: [
        'Why did the same kind of militia that failed at Camden succeed at Cowpens?',
        'What does it mean to plan around what you have rather than what you wish you had?',
        'How did Tarleton\'s expectations about American militia become a weapon against him?',
      ],
      materials: [
        'Tactical map of Cowpens showing unit positions and movement sequence',
        'Comparison chart: militia vs. Continental capabilities and limitations',
        'Adapted primary account of the Battle of Cowpens (Morgan\'s own report to Greene)',
        'Side-by-side comparison of Gates\'s Camden deployment and Morgan\'s Cowpens deployment',
      ],
      activities: [
        {
          name: 'What Can Each Unit Do?',
          duration: '20 minutes',
          description:
            'Students complete a capability chart for the three types of forces Morgan had: militia, Continental regulars, and cavalry. For each, they identify what these soldiers were good at and what they could not reliably do. Students then examine Morgan\'s deployment and explain why the match between unit and role worked.',
        },
        {
          name: 'The Trap Design',
          duration: '25 minutes',
          description:
            'Using the Cowpens tactical map, students trace the sequence of the battle: militia fire, militia retire, British advance, Continental volley and charge, cavalry flank. For each step, they identify what had to happen for the next step to work, and where the plan could have failed. Discussion: was Morgan\'s plan brilliant, lucky, or both?',
        },
        {
          name: 'Camden vs. Cowpens: The Command Comparison',
          duration: '20 minutes',
          description:
            'Students examine the deployment decisions at Camden and Cowpens side by side. Discussion: what did Gates ask the militia to do that they couldn\'t reliably do? What did Morgan ask differently? What does the comparison tell us about what made the difference between the two outcomes?',
        },
      ],
      assessment:
        'Short essay (3-5 paragraphs): "If you were Morgan\'s aide at Cowpens, how would you explain his plan to a militia captain who had never fought in a major battle? Use specific details about how Morgan designed the plan around what each unit could do."',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis',
        'CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information with other information in print and digital texts',
        'CCSS.ELA-LITERACY.WHST.6-8.2: Write informative/explanatory texts',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.Geo.2.6-8: Use maps to explain relationships between locations and outcomes',
        'D2.His.5.6-8: Explain how and why perspectives of people have changed over time',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-sc-cowpens' } },
    title: 'Strategic Consequence: From Cowpens to Yorktown',
    gradeRange: '9-12',
    estimatedDuration: '3 class periods',
    summary:
      'This lesson traces the strategic consequences of Cowpens through the remainder of the war, examining how a single tactical battle set in motion a chain of events that led to British defeat in the south and eventually at Yorktown. Students analyze how Cornwallis\'s response to Cowpens was itself a strategic error, and evaluate whether Yorktown was an inevitable consequence of Cowpens or a contingent outcome that depended on many other factors.',
    lessonData: {
      objectives: [
        'Students will trace the strategic chain from Cowpens through the Race to the Dan, Guilford Courthouse, and Yorktown',
        'Students will evaluate Cornwallis\'s strategic decisions after Cowpens and assess their consequences',
        'Students will analyze the relationship between tactical and strategic outcomes in military history',
        'Students will assess the relative importance of Cowpens in the broader arc of the Revolutionary War',
      ],
      essentialQuestions: [
        'Was Yorktown the inevitable consequence of Cowpens, or did many other contingencies matter equally?',
        'Why did Cornwallis respond to Cowpens by moving north rather than consolidating in South Carolina?',
        'What is the difference between winning a battle and winning a campaign?',
      ],
      materials: [
        'Campaign map: Cowpens to Yorktown with dates and troop movements',
        'Cornwallis\'s after-action correspondence following Cowpens',
        'Charles James Fox\'s parliamentary speech on Guilford Courthouse',
        'Timeline of British strategic decisions, January–October 1781',
        'Secondary source: analysis of British strategic options after Cowpens',
      ],
      activities: [
        {
          name: 'The Chain of Consequences',
          duration: '30 minutes',
          description:
            'Students map the strategic chain from Cowpens to Yorktown: Cowpens leads to Cornwallis stripping wagons, which leads to the Race to the Dan, then Guilford Courthouse, then Cornwallis retreating to the coast, then the Virginia invasion, then Yorktown. For each link, students identify whether the decision was inevitable given the previous event, or whether Cornwallis could have chosen differently.',
        },
        {
          name: 'Cornwallis\'s Choices',
          duration: '30 minutes',
          description:
            'Students read Cornwallis\'s post-Cowpens correspondence and analyze what he thought he needed to do and why. Small groups develop alternative British strategies and present them to the class, arguing whether each alternative was realistic given British resources and political constraints.',
        },
        {
          name: 'Tactical Win, Strategic Loss',
          duration: '25 minutes',
          description:
            'Students examine the Fox quotation about Guilford Courthouse and discuss the concept of Pyrrhic victory. Discussion: can you win every battle and lose the war? What does Cowpens teach us about the relationship between tactical and strategic outcomes?',
        },
      ],
      assessment:
        'Analytical essay (1000-1200 words): "Assess the claim that Cowpens was the decisive battle of the American Revolution in the South. What evidence supports this claim, and what evidence complicates or challenges it?" Students must engage with the strategic chain of events and with at least one counterargument.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors on the same topic',
      ],
      c3Framework: [
        'D2.His.14.9-12: Analyze multiple and complex causes and effects of events in the past',
        'D2.His.1.9-12: Evaluate how historical events and developments were shaped by unique circumstances',
        'D4.6.9-12: Use disciplinary lenses to understand the characteristics and causes of problems',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// COWPENS — ADDITIONAL LINKS
// ============================================================================

export const cowpensAdditionalLinks: Array<{
  toTownId: string;
  linkType: 'SHARED_EVENT' | 'SHARED_PERSON' | 'GEOGRAPHIC_PROXIMITY';
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-sc-camden',
    linkType: 'SHARED_PERSON',
    reason:
      'Tarleton\'s Legion at Cowpens was the same force that had pursued Camden survivors and conducted the Waxhaws massacre. Morgan\'s defeat of the Legion reversed the most feared British force in the southern theater.',
    weight: 90,
  },
  {
    toTownId: 'us-nc-guilford-courthouse',
    linkType: 'SHARED_EVENT',
    reason:
      'Guilford Courthouse was the direct strategic consequence of Cowpens. Cornwallis\'s decision to strip his wagons and chase Greene north after Cowpens led directly to the Guilford engagement.',
    weight: 98,
  },
  {
    toTownId: 'us-va-yorktown',
    linkType: 'SHARED_PERSON',
    reason:
      'Cornwallis, whose response to Cowpens set in motion the chain of decisions ending at Yorktown, connects the two battlefields. Several officers at Cowpens also served in the Yorktown campaign.',
    weight: 80,
  },
  {
    toTownId: 'us-sc-hobkirks-hill',
    linkType: 'SHARED_PERSON',
    reason:
      'Greene, Howard, and Lee all participated in the southern campaign that included both Cowpens and the subsequent operations leading to Hobkirk\'s Hill.',
    weight: 75,
  },
  {
    toTownId: 'us-sc-ninety-six',
    linkType: 'SHARED_PERSON',
    reason:
      'The campaign Morgan and Greene built after Cowpens ultimately led to the Ninety Six siege. Henry Lee, key at Cowpens\'s surrounding operations, was a principal figure at Ninety Six.',
    weight: 65,
  },
];

// ============================================================================
// FORT MOULTRIE
// ============================================================================

export const fortMoultrieTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Fort Moultrie is where the American Revolution in the south began — and where it nearly did not begin at all. On June 28, 1776, a British fleet of nine warships spent nearly ten hours bombarding an unfinished palmetto log fort on Sullivan's Island at the entrance to Charleston harbor. When the fleet withdrew, damaged and unable to force the harbor, it marked the first major American victory of the war south of New England and the first serious British strategic setback of the conflict.

The fort itself was barely finished when the British arrived. Colonel William Moultrie had been building it since the spring, but the south wall facing the harbor was still under construction. The structure was made of palmetto logs — a local wood the builders used for practical reasons — and the feature that made palmetto critical on June 28 was accidental: the spongy, fibrous wood absorbed cannon fire without splintering into the lethal fragments that solid wood produced. British cannonballs buried themselves in the logs. The garrison behind the walls was largely protected.

The British plan required two things to work simultaneously: the fleet would bombard the fort into silence while troops under General Henry Clinton waded from Long Island (now the Isle of Palms) across a channel to Sullivan's Island and attacked the fort from the rear. Neither worked. The naval bombardment failed to suppress Moultrie's guns. The infantry discovered that the channel, reported to be passable at low tide, was in fact chest-deep. Clinton's men stood on the beach at Long Island and watched the fleet take a beating they could not help with.

Moultrie's garrison of approximately 400 men fought with extraordinary efficiency. The British flagship HMS Bristol was hit more than 70 times. Commodore Peter Parker was wounded when a fragment tore away part of his trousers. The fort's flagstaff was shot down during the battle and Sergeant William Jasper climbed over the ramparts under fire to recover the regimental flag and reattach it — an act that became one of the war's most celebrated stories of personal courage.

The political significance of the victory was as important as the military result. The Continental Congress had declared independence just days earlier, and the news of the Charleston victory — reaching the north in late July — gave the declaration something it desperately needed: evidence that American forces could fight and win against the British military. The victory was celebrated across the colonies.

The fort was renamed Fort Moultrie in Colonel William Moultrie's honor. The palmetto tree became the symbol of South Carolina — it appears on the state flag today — because of the particular property of palmetto logs that had made the victory possible. South Carolina's identity as a martial state, proud of its military tradition, traces in part to the June 28 battle.

Four years later, when the British returned, they did not repeat their mistake. The 1780 assault on Charleston came from the land side, bypassed Fort Moultrie entirely, and produced a very different result. Fort Moultrie's defenders surrendered the fort as part of Lincoln's general capitulation in May 1780. The fort that had been a symbol of South Carolina's ability to resist occupation was now in British hands.

The fort on Sullivan's Island was rebuilt several times after the Revolution and served in American coastal defense through World War II. The current structures reflect its later history. But the ground — the low sand island at the harbor entrance, the open water where the British fleet stood — remains the essential context for understanding what happened there in June 1776.`,
};

// ============================================================================
// FORT MOULTRIE — PEOPLE
// ============================================================================

export const fortMoultriePeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-sc-william-moultrie',
      name: 'Colonel William Moultrie',
      roles: ['Continental Army Colonel', 'Fort Sullivan Commander', 'General and Governor'],
      bioShort:
        'South Carolina colonel who commanded the garrison at Fort Sullivan on June 28, 1776. His calm conduct during the British bombardment and his effective direction of the fort\'s artillery made the victory possible. The fort was renamed Fort Moultrie in his honor.',
      birthYear: 1730,
      deathYear: 1805,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the fort\'s garrison during the June 28, 1776 British bombardment; the fort was renamed in his honor after the battle.',
  },
  {
    person: {
      id: 'person-sc-william-jasper',
      name: 'Sergeant William Jasper',
      roles: ['Continental Army Sergeant', 'South Carolina Militia', 'Flag Hero'],
      bioShort:
        'South Carolina soldier who climbed over Fort Sullivan\'s ramparts under British cannon fire on June 28, 1776 to recover the regimental flag after its staff was shot away and reattach it to a cannon sponge staff. His act became one of the most celebrated stories of personal courage in the Revolutionary War.',
      birthYear: 1750,
      deathYear: 1779,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Recovered the fort\'s fallen flag under fire during the British bombardment; his act of courage became the most famous individual story from the Battle of Sullivan\'s Island.',
  },
  {
    person: {
      id: 'person-sc-peter-parker',
      name: 'Commodore Sir Peter Parker',
      roles: ['Royal Navy Commodore', 'British Fleet Commander', 'Charleston 1776'],
      bioShort:
        'Royal Navy commodore who commanded the British fleet during the June 28, 1776 bombardment of Fort Sullivan. His flagship HMS Bristol was hit more than 70 times. Parker himself was wounded when a fragment tore away part of his clothing. The fleet withdrew having failed completely.',
      birthYear: 1721,
      deathYear: 1811,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the British naval force at Fort Sullivan; his fleet suffered severe damage during the failed bombardment.',
  },
  {
    person: {
      id: 'person-sc-henry-clinton',
      name: 'General Henry Clinton',
      roles: ['British General', 'Land Force Commander', 'Future Commander-in-Chief'],
      bioShort:
        'British general who commanded the land force intended to attack Fort Sullivan from Long Island. His troops discovered the crossing channel was impassable at the planned depth and could not support the naval bombardment. Clinton returned in 1780 with a completely different approach and captured Charleston.',
      birthYear: 1730,
      deathYear: 1795,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded British troops on Long Island during the 1776 attack; his force was unable to cross and support the naval bombardment.',
  },
  {
    person: {
      id: 'person-sc-charles-lee-southern',
      name: 'General Charles Lee',
      roles: ['Continental Army General', 'Southern Department Commander', 'Former British Officer'],
      bioShort:
        'Eccentric Continental general who commanded American forces in the south in June 1776. He initially opposed the decision to defend Fort Sullivan, considering it indefensible. When Moultrie\'s defense succeeded, Lee\'s objections were forgotten. He was captured by the British in New Jersey six months later.',
      birthYear: 1732,
      deathYear: 1782,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded American forces in the south during the Fort Sullivan battle; originally opposed the defense of the fort as untenable.',
  },
  {
    person: {
      id: 'person-sc-christopher-gadsden',
      name: 'Christopher Gadsden',
      roles: ['Patriot Politician', 'Continental Congress Delegate', 'Merchant'],
      bioShort:
        'South Carolina Patriot leader and designer of the Gadsden Flag — the rattlesnake banner — who was a leading advocate for South Carolina\'s defense in 1776. He was present during the preparations for the Fort Sullivan defense as one of the colony\'s most prominent Patriot figures.',
      birthYear: 1724,
      deathYear: 1805,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Leading South Carolina Patriot whose advocacy contributed to the decision to fortify and defend Sullivan\'s Island.',
  },
  {
    person: {
      id: 'person-sc-francis-marion',
      name: 'Brigadier General Francis Marion',
      roles: ['Partisan Commander', 'Continental Army Officer', 'Swamp Fox'],
      bioShort:
        'South Carolina officer who served under Moultrie at Fort Sullivan on June 28, 1776, helping defend the fort during the British bombardment. He went on to become the most effective partisan commander in the state during the 1780–1782 occupation period.',
      birthYear: 1732,
      deathYear: 1795,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Served as an officer at Fort Sullivan during the June 28, 1776 battle; his military career in South Carolina began here.',
  },
  {
    person: {
      id: 'person-sc-john-rutledge',
      name: 'John Rutledge',
      roles: ['President of South Carolina', 'Governor', 'Patriot Leader'],
      bioShort:
        'President (Governor) of South Carolina in 1776 who supported the decision to defend Fort Sullivan against advice from Continental commanders. His political leadership before and during the battle helped maintain the Patriot cause in South Carolina through the difficult years ahead.',
      birthYear: 1739,
      deathYear: 1800,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'As South Carolina\'s governor, authorized and supported the defense of Fort Sullivan; his political leadership was essential to the Patriot cause in the state.',
  },
];

// ============================================================================
// FORT MOULTRIE — PLACES
// ============================================================================

export const fortMoultrieePlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-fort-moultrie-nps',
    name: 'Fort Moultrie National Monument',
    placeType: 'BATTLEFIELD',
    description:
      'The NPS site on Sullivan\'s Island encompassing the ground of the original 1776 fort and its later reconstructions. The site interprets the fort\'s history from 1776 through World War II. The original palmetto log fort no longer exists, but the grounds, harbor view, and interpretive exhibits convey the strategic context of the June 28, 1776 battle.',
    lat: 32.7627,
    lng: -79.8574,
    address: '1214 Middle St, Sullivan\'s Island, SC 29482',
    town: { connect: { id: 'us-sc-fort-moultrie' } },
  },
  {
    id: 'place-fort-moultrie-harbor-entrance',
    name: 'Charleston Harbor Entrance',
    placeType: 'LANDMARK',
    description:
      'The open water at the entrance to Charleston harbor where Parker\'s nine-warship fleet stood during the June 28, 1776 bombardment. The water distances between the fleet\'s position and the fort\'s guns determined the accuracy of fire on both sides. The harbor entrance remains one of the clearest ways to understand the tactical geography of the battle.',
    lat: 32.7590,
    lng: -79.8450,
    address: 'Charleston Harbor, SC',
    town: { connect: { id: 'us-sc-fort-moultrie' } },
  },
  {
    id: 'place-fort-moultrie-jasper-monument',
    name: 'Sergeant Jasper Monument',
    placeType: 'MONUMENT',
    description:
      'A monument on Sullivan\'s Island commemorating Sergeant William Jasper, who recovered the fort\'s fallen flag under British cannon fire on June 28, 1776. Jasper\'s act became one of the most celebrated stories of individual courage in South Carolina\'s Revolutionary War history. He was killed at the Siege of Savannah in 1779.',
    lat: 32.7635,
    lng: -79.8580,
    address: 'Sullivan\'s Island, SC 29482',
    town: { connect: { id: 'us-sc-fort-moultrie' } },
  },
  {
    id: 'place-fort-moultrie-sullivan-island',
    name: 'Sullivan\'s Island',
    placeType: 'LANDMARK',
    description:
      'The barrier island at the entrance to Charleston harbor where the original palmetto log fort stood. The island\'s geography — a low sand island directly in the path of any ship attempting to enter the harbor — made it the obvious place to build coastal defenses and the obvious target for any naval attack on Charleston.',
    lat: 32.7634,
    lng: -79.8411,
    address: 'Sullivan\'s Island, SC 29482',
    town: { connect: { id: 'us-sc-fort-moultrie' } },
  },
  {
    id: 'place-fort-moultrie-isle-of-palms',
    name: 'Isle of Palms (Long Island, 1776)',
    placeType: 'LANDMARK',
    description:
      'The island immediately north of Sullivan\'s Island, known as Long Island in 1776, where General Henry Clinton landed his troops. The channel separating Long Island from Sullivan\'s Island was reported to be passable at low tide but proved to be impassable, preventing Clinton\'s force from supporting the naval bombardment.',
    lat: 32.7900,
    lng: -79.8100,
    address: 'Isle of Palms, SC 29451',
    town: { connect: { id: 'us-sc-fort-moultrie' } },
  },
  {
    id: 'place-fort-moultrie-state-park',
    name: 'Fort Moultrie State Park Visitor Center',
    placeType: 'LANDMARK',
    description:
      'The NPS visitor center adjacent to Fort Moultrie, which houses exhibits on the 1776 battle, the fort\'s subsequent history, and the role of Sullivan\'s Island in South Carolina\'s coastal defense. The center includes a detailed explanation of how palmetto log construction contributed to the American victory.',
    lat: 32.7630,
    lng: -79.8572,
    address: '1214 Middle St, Sullivan\'s Island, SC 29482',
    town: { connect: { id: 'us-sc-fort-moultrie' } },
  },
];

// ============================================================================
// FORT MOULTRIE — EVENTS
// ============================================================================

export const fortMoultrieEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-fort-moultrie-construction',
    name: 'Fort Sullivan Under Construction',
    startDate: new Date('1776-04-01'),
    datePrecision: 'MONTH',
    summary:
      'South Carolina began constructing a fort on Sullivan\'s Island in the spring of 1776 to defend Charleston harbor. The fort was built using palmetto logs — a locally available material — and was still unfinished when the British fleet arrived in late June. The south wall facing the harbor was incomplete. General Charles Lee, the Continental commander in the south, considered the partially built fort indefensible and urged its abandonment.',
    significanceWeight: 68,
    lat: 32.7627,
    lng: -79.8574,
    town: { connect: { id: 'us-sc-fort-moultrie' } },
  },
  {
    id: 'event-fort-moultrie-british-fleet-arrives',
    name: 'British Fleet Arrives Off Charleston',
    startDate: new Date('1776-06-01'),
    datePrecision: 'MONTH',
    summary:
      'A British fleet under Commodore Peter Parker arrived off Charleston in late May and early June 1776, carrying troops under General Henry Clinton. The fleet spent several weeks preparing the attack and landing Clinton\'s troops on Long Island. The delay gave Moultrie additional time to prepare the fort\'s defenses, though the south wall remained unfinished.',
    significanceWeight: 72,
    lat: 32.7590,
    lng: -79.8450,
    town: { connect: { id: 'us-sc-fort-moultrie' } },
  },
  {
    id: 'event-fort-moultrie-battle',
    name: 'Battle of Fort Sullivan (Fort Moultrie)',
    startDate: new Date('1776-06-28'),
    datePrecision: 'DAY',
    summary:
      'Parker\'s fleet of nine warships, including the flagship HMS Bristol, opened fire on Fort Sullivan at approximately 11 a.m. on June 28. The bombardment lasted nearly ten hours. The fort\'s palmetto log walls absorbed the cannon fire without splintering. Moultrie\'s garrison returned fire with accuracy, hitting HMS Bristol more than 70 times and killing or wounding a large portion of her crew. Parker was wounded. The frigate HMS Actaeon ran aground on a sandbar during the battle and was burned by her own crew to prevent capture. Simultaneously, Clinton\'s land force found the crossing from Long Island impassable. The fleet withdrew at nightfall. British casualties were approximately 225; American casualties were 37.',
    significanceWeight: 95,
    lat: 32.7627,
    lng: -79.8574,
    town: { connect: { id: 'us-sc-fort-moultrie' } },
  },
  {
    id: 'event-fort-moultrie-jasper-flag',
    name: 'Sergeant Jasper Recovers the Flag',
    startDate: new Date('1776-06-28'),
    datePrecision: 'DAY',
    summary:
      'During the bombardment, a British cannonball struck the fort\'s flagstaff, bringing down the regimental flag. Sergeant William Jasper climbed over the fort\'s ramparts — exposing himself to the full weight of the British naval fire — recovered the flag, attached it to a cannon sponge staff, and replanted it on the rampart. Governor John Rutledge offered Jasper a commission as reward; Jasper declined, saying he was not fit to be an officer. The episode became one of the war\'s most celebrated stories of individual courage.',
    significanceWeight: 78,
    lat: 32.7627,
    lng: -79.8574,
    town: { connect: { id: 'us-sc-fort-moultrie' } },
  },
  {
    id: 'event-fort-moultrie-renamed',
    name: 'Fort Renamed Fort Moultrie',
    startDate: new Date('1776-09-15'),
    datePrecision: 'MONTH',
    summary:
      'In recognition of his successful defense of Fort Sullivan, the fort was officially renamed Fort Moultrie in Colonel William Moultrie\'s honor. The palmetto tree was simultaneously adopted as a symbol of South Carolina — it appears on the state flag today — because of the role palmetto log construction played in the victory.',
    significanceWeight: 70,
    lat: 32.7627,
    lng: -79.8574,
    town: { connect: { id: 'us-sc-fort-moultrie' } },
  },
  {
    id: 'event-fort-moultrie-news-north',
    name: 'Victory News Reaches the North',
    startDate: new Date('1776-07-20'),
    datePrecision: 'MONTH',
    summary:
      'News of the Sullivan\'s Island victory reached Philadelphia and the Continental Congress in late July 1776, just weeks after the Declaration of Independence. The timing was significant: the declaration needed evidence that American forces could succeed against the British military, and the Fort Sullivan victory provided it. The battle became widely celebrated as the first major American victory of the Revolution in the south.',
    significanceWeight: 80,
    lat: 32.7627,
    lng: -79.8574,
    town: { connect: { id: 'us-sc-fort-moultrie' } },
  },
  {
    id: 'event-fort-moultrie-falls-1780',
    name: 'Fort Moultrie Falls to the British',
    startDate: new Date('1780-05-07'),
    datePrecision: 'DAY',
    summary:
      'As part of Clinton\'s 1780 siege of Charleston, British forces moved to take Fort Moultrie on May 7, approaching from the rear of Sullivan\'s Island — the direction Clinton had tried and failed to attack from in 1776. The fort\'s garrison surrendered without significant resistance. The fort that had symbolized American resistance in 1776 was now in British hands, captured as part of the largest American military defeat of the war.',
    significanceWeight: 80,
    lat: 32.7627,
    lng: -79.8574,
    town: { connect: { id: 'us-sc-fort-moultrie' } },
  },
  {
    id: 'event-fort-moultrie-jasper-death',
    name: 'Jasper Killed at Savannah',
    startDate: new Date('1779-10-09'),
    datePrecision: 'DAY',
    summary:
      'Sergeant William Jasper, celebrated for recovering the Fort Sullivan flag in 1776, was mortally wounded during the Franco-American assault on Savannah on October 9, 1779. He was attempting to plant the colors on the British redoubt when he was shot. He died shortly after. His death gave his 1776 act of courage the additional weight of ultimate sacrifice.',
    significanceWeight: 72,
    lat: 32.0835,
    lng: -81.0998,
    town: { connect: { id: 'us-sc-fort-moultrie' } },
  },
  {
    id: 'event-fort-moultrie-british-evacuation',
    name: 'British Evacuate Fort Moultrie',
    startDate: new Date('1782-12-14'),
    datePrecision: 'DAY',
    summary:
      'British forces evacuated Fort Moultrie as part of the general evacuation of Charleston in December 1782. American forces reoccupied the fort, which would be rebuilt several times over the following century as coastal defense needs changed.',
    significanceWeight: 65,
    lat: 32.7627,
    lng: -79.8574,
    town: { connect: { id: 'us-sc-fort-moultrie' } },
  },
  {
    id: 'event-fort-moultrie-palmetto-flag',
    name: 'Palmetto Tree Adopted as South Carolina Symbol',
    startDate: new Date('1776-10-01'),
    datePrecision: 'MONTH',
    summary:
      'The palmetto tree became the enduring symbol of South Carolina following the 1776 battle, adopted because of the specific property of palmetto logs — their spongy fiber — that had made the fort\'s walls resistant to British cannon fire. The palmetto and crescent moon design on the state flag directly commemorate the June 28 battle.',
    significanceWeight: 70,
    lat: 32.7627,
    lng: -79.8574,
    town: { connect: { id: 'us-sc-fort-moultrie' } },
  },
];

// ============================================================================
// FORT MOULTRIE — STORIES
// ============================================================================

export const fortMoultrieStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-fort-moultrie-jasper',
    title: 'The Flag',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-sc-william-jasper' } },
    verificationStatus: 'VERIFIED',
    textVersion: `The cannonball that brought down the flagstaff was not the most dangerous thing that happened at Fort Sullivan on June 28, 1776. There were hundreds of more dangerous moments in a ten-hour bombardment — moments when British shells struck the ramparts, when sand sprayed across the defenders, when the men learned that palmetto logs absorbed what would have killed them if they had built with pine or oak.

But the flagstaff mattered. Everyone who saw the flag fall understood what it meant to the men outside the fort, to anyone watching from Charleston. A flag down was a fort silenced, possibly surrendering. In the middle of a battle, perception could become reality.

William Jasper climbed over the rampart. He was a sergeant, a South Carolina soldier, not an officer with a commission to justify heroism. He took the sponge staff from one of the cannon — a long wooden handle used to clean the gun barrel between shots — tied the flag to it, and climbed back over the outer wall into the fire. He planted it. He came back.

Governor Rutledge offered him a captain's commission afterward. Jasper said he couldn't read or write and was not fit to be an officer. He declined. He went back to being a sergeant.

He was killed three years later at Savannah, trying to plant another flag on a British redoubt. The parallel is almost too neat to be history — except that it is. What Jasper represents in the American Revolutionary narrative is not primarily courage, though he had it. It's something harder to name: the way ordinary people in extraordinary circumstances do specific things that become meaningful later, without knowing they will.

He did not know on June 28 that his name would be on a monument. He saw a flag on the ground and climbed over a wall to fix it.`,
    audioScript: `When the cannonball brought down the flagstaff at Fort Sullivan, everyone who saw the flag fall understood what it meant: a fort silenced, possibly surrendering.

William Jasper climbed over the rampart. He took a cannon sponge staff, tied the flag to it, climbed back over the outer wall into the fire, and planted it.

Governor Rutledge offered him a captain's commission. Jasper said he couldn't read or write and wasn't fit to be an officer. He declined.

He was killed three years later at Savannah, trying to plant another flag on a British redoubt.

What Jasper represents is not primarily courage, though he had it. It's something harder to name: the way ordinary people in extraordinary circumstances do specific things that become meaningful later, without knowing they will.`,
    tags: ['Jasper', 'flag', 'courage', 'Fort Sullivan', 'ordinary soldier'],
    town: { connect: { id: 'us-sc-fort-moultrie' } },
  },
  {
    id: 'story-fort-moultrie-palmetto-logs',
    title: 'The Accidental Armor',
    storyType: 'MODERN_VOICE',
    narratorName: 'Architectural Historian',
    narratorRole: 'Coastal Defense Structures, National Park Service',
    verificationStatus: 'ANECDOTAL',
    textVersion: `The most important material decision in the Battle of Fort Sullivan was made for practical reasons, not strategic ones. Palmetto logs were what was available on the South Carolina coast in large quantities. They were not chosen because anyone knew they would absorb cannon fire. They were chosen because they were there.

The property that made palmetto logs effective under bombardment is the same property that makes palmetto wood difficult to use in ordinary construction: the fibers run in all directions rather than along a grain, which means the wood doesn't split cleanly, doesn't take nails easily, and doesn't behave predictably when cut. In a carpenter's hands, palmetto is a frustrating material. In the path of a British cannonball, that same randomness of fiber becomes protective. The ball buries itself rather than creating the lethal wooden shrapnel that a pine or oak wall would produce.

General Charles Lee thought the fort was indefensible. His reasoning was correct for a conventional fort: an unfinished earthwork on a sand island, with the south wall incomplete, facing nine warships. His reasoning did not account for the specific material properties of what the wall was made of.

When I stand at Fort Moultrie today and look at the harbor, I think about the contingency of the whole thing. Different wood, different outcome. Parker's fleet might have suppressed the fort's fire by mid-afternoon. Clinton's troops might have found a way across the channel. The southern campaign might have started four years earlier, with a British garrison in Charleston from 1776 rather than 1780.

Or not. History doesn't reveal its alternatives. But the palmetto tree on the South Carolina flag is a reminder that what looks like strategy is sometimes just the properties of local timber.`,
    audioScript: `The most important material decision at Fort Sullivan was made for practical reasons. Palmetto logs were available on the South Carolina coast. They weren't chosen because anyone knew they'd absorb cannon fire.

The property that made palmetto effective under bombardment is the same property that makes it difficult in ordinary construction: the fibers run in all directions rather than along a grain. In a carpenter's hands, palmetto is frustrating. In the path of a cannonball, that randomness becomes protective — the ball buries itself rather than creating the lethal shrapnel that pine or oak would produce.

General Lee thought the fort was indefensible. His reasoning was correct for a conventional fort. It didn't account for what the wall was made of.

The palmetto tree on the South Carolina flag is a reminder that what looks like strategy is sometimes just the properties of local timber.`,
    tags: ['palmetto', 'materials', 'contingency', 'Fort Sullivan', 'architecture'],
    town: { connect: { id: 'us-sc-fort-moultrie' } },
  },
];

// ============================================================================
// FORT MOULTRIE — LESSON PLANS
// ============================================================================

export const fortMoultrieeLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-sc-fort-moultrie' } },
    title: 'Fort Moultrie 1776: The War\'s First Southern Victory',
    gradeRange: '6-8',
    estimatedDuration: '2 class periods',
    summary:
      'This lesson uses the 1776 Battle of Fort Sullivan to examine the role of contingency and material conditions in military history. Students analyze how the properties of palmetto wood contributed to the American victory, consider what the political significance of the victory was for the broader Revolution, and evaluate the story of Sergeant Jasper as a case study in how individual acts become historically significant.',
    lessonData: {
      objectives: [
        'Students will describe the tactical situation at Fort Sullivan on June 28, 1776',
        'Students will explain how palmetto log construction contributed to the American victory',
        'Students will analyze the political significance of the Fort Sullivan victory for the broader Revolution',
        'Students will evaluate how individual acts like Jasper\'s become part of historical memory',
      ],
      essentialQuestions: [
        'How did the material properties of palmetto logs change the outcome of the battle?',
        'Why did this 1776 victory matter beyond South Carolina?',
        'What makes some individual acts of courage become famous while others are forgotten?',
      ],
      materials: [
        'Map of Charleston harbor showing fort position, fleet position, and Long Island',
        'Photographs of palmetto wood cross-section showing fiber direction',
        'Adapted account of the battle from Moultrie\'s memoirs',
        'Account of Jasper\'s flag recovery from contemporary sources',
        'Image of the South Carolina state flag with palmetto and crescent',
      ],
      activities: [
        {
          name: 'The Material Matters',
          duration: '20 minutes',
          description:
            'Students examine the properties of palmetto vs. pine or oak wood under bombardment. Discussion: what does it mean that the fort was built from palmetto logs for practical rather than strategic reasons? How does a material choice made without strategic intent become strategically decisive? Students write a brief explanation of how accidental factors shaped the battle\'s outcome.',
        },
        {
          name: 'Why Did This Battle Matter?',
          duration: '20 minutes',
          description:
            'Students examine the timing of the Fort Sullivan victory relative to the Declaration of Independence (signed July 4, news traveled slowly). Discussion: what did the Continental Congress and American public need to hear in the summer of 1776? How did a victory in Charleston affect opinion in Massachusetts, Pennsylvania, or Virginia?',
        },
        {
          name: 'Jasper\'s Choice',
          duration: '20 minutes',
          description:
            'Students read the account of Jasper\'s flag recovery and Governor Rutledge\'s offer of a commission, which Jasper declined. Discussion: why did Jasper\'s act become famous when hundreds of equally courageous acts went unrecorded? What determines which individual stories become part of historical memory?',
        },
      ],
      assessment:
        'Short written response: "Choose one element of the Fort Sullivan battle — the palmetto logs, Jasper\'s act, or the timing relative to independence — and explain why it matters for understanding the American Revolution."',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis',
        'CCSS.ELA-LITERACY.RH.6-8.3: Follow precisely a multistep procedure when performing technical tasks',
        'CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information with other information',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.2.6-8: Classify series of historical events as examples of change and/or continuity',
        'D2.Geo.2.6-8: Use maps to explain relationships between locations and outcomes',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-sc-fort-moultrie' } },
    title: 'Same Fort, Different War: Sullivan\'s Island 1776 and 1780',
    gradeRange: '9-12',
    estimatedDuration: '2 class periods',
    summary:
      'This lesson uses Fort Moultrie as a lens to examine how the same location can have radically different military significance across different campaigns. Students compare the 1776 British failure and the 1780 British success at Charleston, analyzing what changed and why the fort that repelled a fleet in 1776 fell as part of a general capitulation in 1780. The lesson also examines how the 1776 victory may have contributed to a dangerous overconfidence about South Carolina\'s ability to defend itself.',
    lessonData: {
      objectives: [
        'Students will compare the British approach to Charleston in 1776 and 1780 and explain why the second approach succeeded',
        'Students will analyze whether the 1776 victory contributed to American overconfidence in 1780',
        'Students will evaluate the concept of strategic adaptation using the British shift from naval to land-based siege',
        'Students will assess what the fall of Fort Moultrie in 1780 symbolized beyond its military significance',
      ],
      essentialQuestions: [
        'Why did the same British navy that failed in 1776 succeed in taking Charleston in 1780, using a different approach?',
        'Can a military victory create dangerous overconfidence? Did the 1776 success contribute to the 1780 disaster?',
        'What does the fall of Fort Moultrie in 1780 tell us about the limits of symbolic significance in war?',
      ],
      materials: [
        'Comparative maps: British approach 1776 vs. British approach 1780',
        'Clinton\'s account of the 1776 failure and his planning for the 1780 expedition',
        'Timeline: Fort Sullivan 1776 → Charleston 1780',
        'Primary source: Moultrie\'s account of the fort\'s fall in 1780 (from his memoirs)',
      ],
      activities: [
        {
          name: 'What Changed? Strategic Adaptation',
          duration: '30 minutes',
          description:
            'Students compare the two British approaches using the maps and Clinton\'s accounts. They identify: what did the British do differently in 1780? Why did the 1776 approach fail? Was the 1780 approach obviously superior, or did it require the British to learn from failure? Discussion: how do military organizations learn from defeat?',
        },
        {
          name: 'The Overconfidence Problem',
          duration: '25 minutes',
          description:
            'Students examine the argument that the 1776 victory made South Carolinians overconfident about their ability to defend Charleston, leading to an extended defense in 1780 when evacuation might have been wiser. Groups debate: should Lincoln have evacuated rather than allowed the army to be captured? What obligations did the army have to the city\'s civilian population?',
        },
      ],
      assessment:
        'Essay (600-800 words): "Using Fort Moultrie\'s history in 1776 and 1780, explain how a military success can create conditions for a later failure." Students must identify specific decisions or assumptions shaped by the 1776 victory.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors on the same topic',
      ],
      c3Framework: [
        'D2.His.14.9-12: Analyze multiple and complex causes and effects of events in the past',
        'D2.His.1.9-12: Evaluate how historical events were shaped by unique circumstances of time and place',
        'D2.Geo.4.9-12: Evaluate the influences of environmental change on spatial patterns of conflict',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// FORT MOULTRIE — ADDITIONAL LINKS
// ============================================================================

export const fortMoultrieAdditionalLinks: Array<{
  toTownId: string;
  linkType: 'SHARED_EVENT' | 'SHARED_PERSON' | 'GEOGRAPHIC_PROXIMITY';
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-sc-charleston',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason:
      'Fort Moultrie guards the entrance to Charleston harbor. The 1776 victory here directly preceded the 1780 siege; the fort fell as part of the Charleston capitulation.',
    weight: 100,
  },
  {
    toTownId: 'us-sc-beaufort',
    linkType: 'SHARED_PERSON',
    reason:
      'Francis Marion served at Fort Sullivan in 1776 before becoming the partisan leader of the lowcountry. His career connects the coastal defense of 1776 to the guerrilla resistance of 1780–1782.',
    weight: 65,
  },
  {
    toTownId: 'us-sc-camden',
    linkType: 'SHARED_EVENT',
    reason:
      'The fall of Fort Moultrie in 1780 was part of the same capitulation that produced the Camden campaign. Understanding the 1776 victory and 1780 defeat together illuminates the arc of South Carolina\'s experience in the war.',
    weight: 70,
  },
];

// ============================================================================
// HOBKIRK'S HILL
// ============================================================================

export const hobkirksHillTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Hobkirk's Hill, fought on April 25, 1781, is one of the war's instructive paradoxes: a tactical defeat that functioned as a strategic victory. Nathanael Greene attacked the British garrison at Camden, the British under Lord Rawdon counterattacked and drove the Americans from the field, and then Rawdon abandoned Camden entirely within two weeks. Greene lost the battle and gained the town.

Understanding how requires understanding Greene's larger strategy. After Cowpens in January and the Race to the Dan in February, Greene recrossed into South Carolina in March 1781 with a reconstituted army and began systematically pressuring the chain of British posts that Cornwallis had established across the state interior. Camden was the anchor of that system: the largest British base in the backcountry, the hub through which supplies and reinforcements moved. Greene could not ignore it. He also could not afford to fight a set-piece battle against Rawdon's regulars on open ground without the advantage he had enjoyed at Cowpens.

He chose to approach Camden from the north and take a strong position on Hobkirk's Hill, a wooded ridge where his army could be fed and rested while he waited for opportunities. What happened next caught him off guard. Rawdon, who had received intelligence about the American position from a deserter, attacked first. He moved out of Camden before dawn on April 25 with about 900 men — slightly fewer than Greene had — and struck the American pickets before the main army was fully formed.

The battle that followed was confused on both sides. Greene attempted to execute a double envelopment similar to Cowpens: he ordered his flanking regiments to swing around the British line while his artillery held the center. But the Maryland regiment on the left collapsed when its colonel was shot, breaking the plan. The American artillery, trying to support an infantry that was disintegrating around them, found itself dangerously exposed. Greene ordered a retreat. The British pursued briefly and then stopped.

What Rawdon won was the ground. What he understood, with soldiers dying around him and his garrison stretched thin, was that he could not hold Camden indefinitely against the kind of sustained pressure Greene was applying. Within two weeks he burned the town's warehouses and withdrew south toward the coast. The post network that had been the administrative structure of British control in the South Carolina interior began collapsing. Augusta fell. Ninety Six held out through a siege but was eventually abandoned. By the end of 1781, the British had been pushed back to Charleston and a strip of lowcountry around it.

Hobkirk's Hill is a relatively small engagement — fewer than 2,000 men on each side — and it left no dramatic tactical lesson of the kind that Cowpens provides. What it illustrates instead is the logic of Greene's entire southern campaign: he did not need to win battles to win the war. He needed to apply pressure that made the British position in the interior untenable, and then he needed to survive long enough for that pressure to produce results. Hobkirk's Hill, which looked like failure, was that kind of pressure.`,
};

// ============================================================================
// HOBKIRK'S HILL — PEOPLE
// ============================================================================

export const hobkirksHillPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-sc-nathanael-greene',
      name: 'Nathanael Greene',
      roles: ['Continental Army General', 'Southern Department Commander'],
      bioShort:
        'Rhode Island general who commanded the American forces at Hobkirk\'s Hill. His tactical plan was disrupted by a Maryland regiment\'s collapse and he ordered a retreat, technically losing the battle. Within two weeks the British had abandoned Camden, demonstrating that tactical defeat and strategic victory are not always the same thing.',
      birthYear: 1742,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded American forces at Hobkirk\'s Hill; his strategic pressure on Camden caused the British to abandon it despite winning the battle.',
  },
  {
    person: {
      id: 'person-sc-lord-rawdon',
      name: 'Lord Francis Rawdon',
      roles: ['British General', 'Camden Garrison Commander', 'Irish Volunteer'],
      bioShort:
        'Young British officer who commanded the Camden garrison and launched the pre-emptive attack on Greene at Hobkirk\'s Hill on April 25, 1781. He won the battle but correctly recognized that he could not hold Camden indefinitely and abandoned it within two weeks.',
      birthYear: 1754,
      deathYear: 1826,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the British force at Hobkirk\'s Hill; his decision to abandon Camden after winning the battle illustrates the limits of tactical success under strategic pressure.',
  },
  {
    person: {
      id: 'person-sc-william-washington',
      name: 'Colonel William Washington',
      roles: ['Continental Army Cavalry Officer', '3rd Continental Light Dragoons'],
      bioShort:
        'Virginia cavalry officer who commanded the American cavalry at Hobkirk\'s Hill. His cavalry conducted the rearguard action that covered Greene\'s retreat and captured several British officers who had advanced too eagerly in pursuit.',
      birthYear: 1752,
      deathYear: 1810,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the cavalry that covered Greene\'s retreat at Hobkirk\'s Hill, capturing British pursuit elements in the process.',
  },
  {
    person: {
      id: 'person-sc-henry-lee',
      name: 'Lieutenant Colonel Henry Lee',
      roles: ['Continental Army Cavalry Commander', 'Lee\'s Legion Commander', 'Light Horse Harry'],
      bioShort:
        'Virginia cavalry officer whose Legion operated in the Camden area during the Hobkirk\'s Hill period. Lee\'s operations against British outposts around Camden contributed to the strategic pressure that ultimately made Camden untenable.',
      birthYear: 1756,
      deathYear: 1818,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Led Lee\'s Legion in operations around Camden during the Hobkirk\'s Hill period; his pressure on outlying British posts contributed to the decision to abandon Camden.',
  },
  {
    person: {
      id: 'person-sc-john-gunby',
      name: 'Colonel John Gunby',
      roles: ['Continental Army Colonel', '1st Maryland Regiment Commander'],
      bioShort:
        'Maryland Continental colonel whose regiment collapsed at a critical moment of Hobkirk\'s Hill after Gunby ordered a halt and withdrawal when the regiment began to give way. His decision — whether appropriate or premature — disrupted Greene\'s flanking plan and contributed to the American defeat.',
      birthYear: 1745,
      deathYear: 1807,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the Maryland regiment whose collapse disrupted Greene\'s tactical plan at Hobkirk\'s Hill.',
  },
  {
    person: {
      id: 'person-sc-francis-marion',
      name: 'Brigadier General Francis Marion',
      roles: ['Partisan Commander', 'Continental Army Officer', 'Swamp Fox'],
      bioShort:
        'South Carolina partisan commander who was coordinating with Greene during the Camden campaign. Marion\'s operations in the lowcountry during the Hobkirk\'s Hill period cut British supply lines into Camden and contributed to Rawdon\'s decision that the post was untenable.',
      birthYear: 1732,
      deathYear: 1795,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Coordinated with Greene during the Camden campaign; his partisan operations helped make the Camden post strategically untenable.',
  },
  {
    person: {
      id: 'person-sc-thomas-sumter',
      name: 'Brigadier General Thomas Sumter',
      roles: ['South Carolina Militia General', 'Partisan Commander', 'Gamecock'],
      bioShort:
        'South Carolina militia general who operated in the upcountry during the Hobkirk\'s Hill period. His activities, though often uncoordinated with Greene\'s plans, added to the pressure on British interior posts.',
      birthYear: 1734,
      deathYear: 1832,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded upcountry partisan forces during the Camden campaign period.',
  },
  {
    person: {
      id: 'person-sc-otho-williams',
      name: 'Colonel Otho Holland Williams',
      roles: ['Continental Army Colonel', 'Adjutant General', 'Light Corps Commander'],
      bioShort:
        'Maryland Continental officer who served as one of Greene\'s most capable subordinates during the southern campaign. His light corps provided the mobile screening force Greene needed to maneuver against British posts including Camden.',
      birthYear: 1749,
      deathYear: 1794,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Served as a senior subordinate to Greene during the Hobkirk\'s Hill campaign; commanded the light corps that covered much of Greene\'s maneuvering.',
  },
];

// ============================================================================
// HOBKIRK'S HILL — PLACES
// ============================================================================

export const hobkirksHillPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-hobkirks-hill-battlefield',
    name: 'Hobkirk\'s Hill Battlefield Site',
    placeType: 'BATTLEFIELD',
    description:
      'The wooded ridge north of Camden where Greene positioned his army in April 1781. The battlefield site is partially preserved and marked with historical interpretation. The ridge\'s relationship to the town of Camden and the approach routes used by Rawdon\'s force are interpretable from the terrain.',
    lat: 34.2900,
    lng: -80.5980,
    address: 'North of Camden, Kershaw County, SC 29020',
    town: { connect: { id: 'us-sc-hobkirks-hill' } },
  },
  {
    id: 'place-hobkirks-hill-historic-camden',
    name: 'Historic Camden (British Base)',
    placeType: 'LANDMARK',
    description:
      'The reconstructed British fortified town of Camden, from which Rawdon launched his April 25 attack on Greene at Hobkirk\'s Hill. The site interprets the British occupation and the Hobkirk\'s Hill battle as part of the broader Camden story.',
    lat: 34.2480,
    lng: -80.5980,
    address: '222 Broad St, Camden, SC 29020',
    town: { connect: { id: 'us-sc-hobkirks-hill' } },
  },
  {
    id: 'place-hobkirks-hill-monument',
    name: 'Hobkirk\'s Hill Battle Marker',
    placeType: 'MONUMENT',
    description:
      'Historical markers in the Hobkirk\'s Hill area commemorating the April 25, 1781 battle. The markers identify the general area of the engagement and note the strategic significance of the British decision to abandon Camden despite their tactical victory.',
    lat: 34.2910,
    lng: -80.5975,
    address: 'Kershaw County, SC, north of Camden',
    town: { connect: { id: 'us-sc-hobkirks-hill' } },
  },
  {
    id: 'place-hobkirks-hill-pine-tree-creek',
    name: 'Pine Tree Creek',
    placeType: 'LANDMARK',
    description:
      'The creek north of Camden that formed part of the terrain framework for both the Camden battlefield and the Hobkirk\'s Hill position. The waterway shaped the approach routes available to both armies and influenced the tactical options at each engagement.',
    lat: 34.2750,
    lng: -80.5900,
    address: 'North of Camden, Kershaw County, SC',
    town: { connect: { id: 'us-sc-hobkirks-hill' } },
  },
  {
    id: 'place-hobkirks-hill-rawdons-route',
    name: 'Rawdon\'s Attack Route',
    placeType: 'LANDMARK',
    description:
      'The general route Rawdon\'s force took from Camden north to strike the American position at Hobkirk\'s Hill before dawn on April 25, 1781. The pre-dawn march, based on intelligence from an American deserter, allowed Rawdon to surprise Greene before his army was fully formed.',
    lat: 34.2700,
    lng: -80.5960,
    address: 'Kershaw County, SC',
    town: { connect: { id: 'us-sc-hobkirks-hill' } },
  },
  {
    id: 'place-hobkirks-hill-de-kalb-grave',
    name: 'Baron de Kalb Grave, Camden',
    placeType: 'MONUMENT',
    description:
      'The grave of Major General Johann de Kalb in Camden, killed at the Battle of Camden in August 1780. De Kalb\'s death at Camden and the American defeat there were the events that made the Hobkirk\'s Hill campaign necessary. His grave connects the two Camden engagements.',
    lat: 34.2469,
    lng: -80.6070,
    address: 'Broad St, Camden, SC 29020',
    town: { connect: { id: 'us-sc-hobkirks-hill' } },
  },
];

// ============================================================================
// HOBKIRK'S HILL — EVENTS
// ============================================================================

export const hobkirksHillEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-hobkirks-greene-arrives-sc',
    name: 'Greene Re-enters South Carolina',
    startDate: new Date('1781-04-06'),
    datePrecision: 'DAY',
    summary:
      'After the Battle of Guilford Courthouse on March 15, Greene recrossed into South Carolina with his army rather than pursuing Cornwallis. The decision was strategic: South Carolina\'s British post network was exposed now that Cornwallis had marched north, and Greene moved to dismantle it post by post.',
    significanceWeight: 80,
    lat: 34.2900,
    lng: -80.5980,
    town: { connect: { id: 'us-sc-hobkirks-hill' } },
  },
  {
    id: 'event-hobkirks-fort-watson-falls',
    name: 'Fort Watson Falls to Marion and Lee',
    startDate: new Date('1781-04-23'),
    datePrecision: 'DAY',
    summary:
      'Francis Marion and Henry Lee captured Fort Watson, a British stockade on the Santee River, two days before Hobkirk\'s Hill. The fall of Fort Watson was the first British interior post to collapse under Greene\'s systematic campaign and demonstrated that the British post network could be reduced.',
    significanceWeight: 72,
    lat: 33.8900,
    lng: -80.1300,
    town: { connect: { id: 'us-sc-hobkirks-hill' } },
  },
  {
    id: 'event-hobkirks-hill-battle',
    name: 'Battle of Hobkirk\'s Hill',
    startDate: new Date('1781-04-25'),
    datePrecision: 'DAY',
    summary:
      'Rawdon attacked Greene\'s position at Hobkirk\'s Hill before dawn on April 25. Greene attempted a double envelopment but the 1st Maryland Regiment collapsed when its colonel was shot and he ordered a halt. The regiment\'s breakdown disrupted Greene\'s flanking plan; the American artillery became exposed, and Greene ordered a general retreat. William Washington\'s cavalry covered the withdrawal. American losses were approximately 265; British losses approximately 260. Rawdon held the field.',
    significanceWeight: 88,
    lat: 34.2900,
    lng: -80.5980,
    town: { connect: { id: 'us-sc-hobkirks-hill' } },
  },
  {
    id: 'event-hobkirks-camden-abandoned',
    name: 'Rawdon Abandons Camden',
    startDate: new Date('1781-05-10'),
    datePrecision: 'DAY',
    summary:
      'Fourteen days after winning at Hobkirk\'s Hill, Rawdon ordered the evacuation and burning of Camden. He recognized that Greene\'s sustained pressure, combined with Marion\'s partisan operations cutting supply lines, made the post impossible to hold. The town\'s warehouses were burned; the garrison withdrew south. Camden, the anchor of the British interior post system, was abandoned.',
    significanceWeight: 90,
    lat: 34.2475,
    lng: -80.6045,
    town: { connect: { id: 'us-sc-hobkirks-hill' } },
  },
  {
    id: 'event-hobkirks-fort-motte-falls',
    name: 'Fort Motte Falls',
    startDate: new Date('1781-05-12'),
    datePrecision: 'DAY',
    summary:
      'Two days after Camden was abandoned, the British post at Fort Motte fell to Marion and Lee. The American capture used fire arrows to burn the main house — a tactic the fort\'s owner, Rebecca Motte, reportedly encouraged. The fall of Fort Motte was part of the cascade of British post surrenders that followed Hobkirk\'s Hill.',
    significanceWeight: 72,
    lat: 33.8800,
    lng: -80.6500,
    town: { connect: { id: 'us-sc-hobkirks-hill' } },
  },
  {
    id: 'event-hobkirks-orangeburg-falls',
    name: 'Orangeburg Falls',
    startDate: new Date('1781-05-11'),
    datePrecision: 'DAY',
    summary:
      'The British garrison at Orangeburg surrendered to Sumter on May 11, 1781, as part of the cascade of British interior post collapses following Camden\'s abandonment. The British were falling back toward Charleston on every axis.',
    significanceWeight: 68,
    lat: 33.4918,
    lng: -80.8600,
    town: { connect: { id: 'us-sc-hobkirks-hill' } },
  },
  {
    id: 'event-hobkirks-gunby-inquiry',
    name: 'Court of Inquiry into Gunby\'s Conduct',
    startDate: new Date('1781-05-01'),
    datePrecision: 'MONTH',
    summary:
      'A court of inquiry was held into Colonel John Gunby\'s conduct at Hobkirk\'s Hill, specifically his order for the 1st Maryland to halt and withdraw at a critical moment. The court found that Gunby\'s order had contributed to the American defeat. The inquiry reflected Greene\'s insistence on understanding what had gone wrong even in battles he lost.',
    significanceWeight: 62,
    lat: 34.2900,
    lng: -80.5980,
    town: { connect: { id: 'us-sc-hobkirks-hill' } },
  },
  {
    id: 'event-hobkirks-greene-letter-congress',
    name: 'Greene Reports to Congress on Hobkirk\'s Hill',
    startDate: new Date('1781-04-27'),
    datePrecision: 'DAY',
    summary:
      'Greene wrote to Congress describing the Hobkirk\'s Hill defeat and explaining his strategic reasoning. His letter articulated the logic that a succession of tactical losses was compatible with strategic success — one of the clearest contemporary statements of his campaign theory. Congress, which had been alarmed by the tactical result, accepted his analysis.',
    significanceWeight: 72,
    lat: 34.2900,
    lng: -80.5980,
    town: { connect: { id: 'us-sc-hobkirks-hill' } },
  },
  {
    id: 'event-hobkirks-augusta-falls',
    name: 'Augusta Falls to Lee and Pickens',
    startDate: new Date('1781-06-05'),
    datePrecision: 'DAY',
    summary:
      'Lee\'s Legion and Pickens\'s militia captured Augusta, Georgia, on June 5, 1781, as part of the systematic reduction of the British post network initiated by Greene\'s campaign. The fall of Augusta, combined with the ongoing Ninety Six siege, left the British with no significant interior posts outside of Ninety Six itself.',
    significanceWeight: 78,
    lat: 33.4735,
    lng: -82.0105,
    town: { connect: { id: 'us-sc-hobkirks-hill' } },
  },
  {
    id: 'event-hobkirks-british-posts-collapse',
    name: 'British Interior Post System Collapses',
    startDate: new Date('1781-05-01'),
    datePrecision: 'MONTH',
    summary:
      'In the two months following Hobkirk\'s Hill, the British post network across the South Carolina and Georgia interior disintegrated under Greene\'s sustained pressure and partisan activity. Fort Watson, Fort Motte, Fort Granby, Augusta, Orangeburg, and eventually Ninety Six were all abandoned or captured. The British retreated to Charleston and a coastal enclave that they held until the 1782 evacuation.',
    significanceWeight: 85,
    lat: 34.2900,
    lng: -80.5980,
    town: { connect: { id: 'us-sc-hobkirks-hill' } },
  },
];

// ============================================================================
// HOBKIRK'S HILL — STORIES
// ============================================================================

export const hobkirksHillStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-hobkirks-greene-letter',
    title: 'We Fight, Get Beat, Rise, and Fight Again',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-sc-nathanael-greene' } },
    verificationStatus: 'VERIFIED',
    textVersion: `The letter Greene wrote to Joseph Reed after Hobkirk's Hill contains one of the most quoted sentences of the Revolutionary War: "We fight, get beat, rise, and fight again." It has become a kind of motto for Greene's southern campaign — printed on mugs and plaques, cited in motivational speeches, stripped of the context that makes it interesting.

What Greene was actually doing in that letter was explaining a strategic logic that most of his contemporaries found difficult to accept. He had just lost a battle. The army had retreated. The British held the field. By every conventional measure, April 25 had been a bad day. Congress needed to be reassured. His supporters needed to understand why he had not won.

His explanation was this: the loss of the battle did not mean the loss of the campaign. The British had to hold Camden with a garrison, feed that garrison, supply it, and keep it viable against sustained pressure. He did not have to hold anything. He could retreat, regroup, and apply pressure again. Every day the British held Camden cost them men, money, and political capital they could not replace. Every day he survived cost him far less.

What he did not know on April 27, when he wrote that letter, was that Rawdon was already calculating the same arithmetic and reaching the same conclusion from the other side. Within two weeks, Camden would be burning.

Greene's strategic patience — his willingness to lose battles without losing his sense of the campaign's direction — is the quality historians most admire about the southern campaign. It was not natural to him. He was a competitive man who hated to retreat and disliked losing. The letters from this period show how much effort it took to maintain his equanimity. But he maintained it, and the results justified it.`,
    audioScript: `The letter Greene wrote to Joseph Reed after Hobkirk's Hill contains one of the most quoted sentences of the Revolutionary War: "We fight, get beat, rise, and fight again."

What Greene was actually doing was explaining a strategic logic that most of his contemporaries found difficult to accept. He had just lost a battle. Congress needed to be reassured.

His explanation: the loss of the battle did not mean the loss of the campaign. The British had to hold Camden with a garrison, feed it, supply it, and keep it viable against sustained pressure. He did not have to hold anything. Every day the British held Camden cost them resources they couldn't replace. Every day he survived cost him far less.

What he didn't know when he wrote that letter was that Rawdon was already calculating the same arithmetic from the other side. Within two weeks, Camden would be burning.`,
    tags: ['Greene', 'strategy', 'patience', 'defeat', 'southern campaign'],
    town: { connect: { id: 'us-sc-hobkirks-hill' } },
  },
  {
    id: 'story-hobkirks-rawdon-logic',
    title: 'Winning the Battle, Losing the Post',
    storyType: 'MODERN_VOICE',
    narratorName: 'Military Historian',
    narratorRole: 'Revolutionary War Studies, Clemson University',
    verificationStatus: 'ANECDOTAL',
    textVersion: `Lord Rawdon is one of the more interesting British commanders of the southern campaign — young, aggressive, and strategically clear-eyed in a way that his superiors were not always. At 26, he commanded Camden. At 26, he won Hobkirk's Hill. And at 26, he recognized that winning the battle had not solved his problem.

The problem was Greene's strategic logic. Rawdon could win every tactical engagement in the Camden district and still lose the strategic contest because winning required holding fixed positions — the town, the supply depot, the roads — while Greene required nothing of the sort. Greene needed only to survive and continue operating.

The cascade of events after Hobkirk's Hill illustrates this precisely. Rawdon evacuated Camden, then marched south to relieve Ninety Six, then evacuated the upcountry entirely. He won several tactical engagements during this period. None of them changed the direction of the campaign.

When I teach the southern campaign, I use the Hobkirk's Hill story as an illustration of what military theorists call the problem of ends and means. Rawdon had the means to win a battle — discipline, professional soldiers, good tactical leadership. He did not have the means to achieve the end: a pacified, British-controlled South Carolina interior. No number of tactical victories could produce that end given the level of partisan resistance and the strategic pressure Greene was applying.

That's the Hobkirk's Hill lesson. Not "tactical defeats can be strategic victories" — that's too simple. The lesson is that tactical results only matter in the context of what you're trying to achieve strategically, and a clear-eyed understanding of that relationship is rarer in military history than it should be.`,
    audioScript: `Rawdon is one of the more interesting British commanders of the southern campaign — young, aggressive, and strategically clear-eyed. At 26, he commanded Camden. At 26, he won Hobkirk's Hill. And at 26, he recognized that winning the battle hadn't solved his problem.

The problem was Greene's strategic logic. Rawdon could win every tactical engagement and still lose the strategic contest because winning required holding fixed positions while Greene required nothing of the sort.

Rawdon evacuated Camden, marched south to relieve Ninety Six, then evacuated the upcountry entirely. He won several tactical engagements during this period. None of them changed the direction of the campaign.

The Hobkirk's Hill lesson isn't "tactical defeats can be strategic victories" — that's too simple. The lesson is that tactical results only matter in the context of what you're trying to achieve strategically.`,
    tags: ['Rawdon', 'strategy', 'tactical vs strategic', 'British perspective', 'southern campaign'],
    town: { connect: { id: 'us-sc-hobkirks-hill' } },
  },
];

// ============================================================================
// HOBKIRK'S HILL — LESSON PLANS
// ============================================================================

export const hobkirksHillLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-sc-hobkirks-hill' } },
    title: 'Winning and Losing: Hobkirk\'s Hill and the Logic of Greene\'s Campaign',
    gradeRange: '8-12',
    estimatedDuration: '2-3 class periods',
    summary:
      'This lesson uses Hobkirk\'s Hill as a case study in the relationship between tactical and strategic outcomes in warfare. Students analyze why Greene\'s tactical defeats did not translate into strategic failure, examine Rawdon\'s decision to abandon Camden after winning the battle, and evaluate Greene\'s famous statement "We fight, get beat, rise, and fight again" as a strategic rather than motivational claim.',
    lessonData: {
      objectives: [
        'Students will distinguish between tactical and strategic outcomes in military history',
        'Students will analyze Greene\'s strategic logic for the southern campaign using his own words',
        'Students will evaluate Rawdon\'s decision to abandon Camden as a strategic rather than tactical choice',
        'Students will apply the tactical/strategic distinction to other historical examples',
      ],
      essentialQuestions: [
        'What is the difference between winning a battle and winning a campaign?',
        'What did Greene mean by "We fight, get beat, rise, and fight again" — and was he right?',
        'Why did Rawdon abandon Camden after winning the battle?',
      ],
      materials: [
        'Greene\'s letter to Joseph Reed, April 27, 1781 (adapted)',
        'Rawdon\'s post-battle correspondence explaining his decision to evacuate Camden',
        'Map of British interior posts in South Carolina, April–June 1781',
        'Timeline of British post abandonments following Hobkirk\'s Hill',
      ],
      activities: [
        {
          name: 'Greene\'s Strategic Letter',
          duration: '25 minutes',
          description:
            'Students read Greene\'s letter to Reed and annotate it to identify: what does he say went wrong at Hobkirk\'s Hill? What does he claim it doesn\'t matter? What is his argument for why he\'s still winning? Discussion: is his argument convincing? What evidence would you need to assess whether he\'s right?',
        },
        {
          name: 'Rawdon\'s Calculation',
          duration: '25 minutes',
          description:
            'Students read Rawdon\'s post-battle correspondence and identify the factors he weighed in deciding to abandon Camden. Groups analyze: was abandoning Camden a failure of nerve or a correct strategic assessment? What would Rawdon have needed to hold Camden indefinitely?',
        },
        {
          name: 'The Post System Collapses',
          duration: '20 minutes',
          description:
            'Using the map and timeline, students trace the collapse of British interior posts following Hobkirk\'s Hill. Discussion: what does the speed of the collapse tell us about how vulnerable the post system actually was? Could the British have held it with different decisions?',
        },
      ],
      assessment:
        'Written analysis (500-700 words): "Explain, using specific evidence, why Nathanael Greene\'s loss at Hobkirk\'s Hill was consistent with his strategic success in South Carolina."',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis',
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.1.9-12: Evaluate how historical events were shaped by unique circumstances',
        'D2.His.14.9-12: Analyze multiple and complex causes and effects of events',
        'D4.6.9-12: Use disciplinary lenses to understand the characteristics and causes of problems',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-sc-hobkirks-hill' } },
    title: 'Partisan War and Regular War: How They Worked Together',
    gradeRange: '9-12',
    estimatedDuration: '2 class periods',
    summary:
      'This lesson examines how Greene coordinated — or tried to coordinate — the regular Continental army with the partisan forces of Marion, Sumter, and Pickens during the 1781 South Carolina campaign. Students analyze the different capabilities of partisan and regular forces, the difficulties of coordination when communication was slow and commanders were independent, and what the combination of the two produced that neither could have achieved alone.',
    lessonData: {
      objectives: [
        'Students will identify the distinct capabilities of partisan vs. regular military forces',
        'Students will analyze the coordination challenges between Greene and the partisan commanders',
        'Students will evaluate what the combined partisan-regular strategy achieved that neither type of force could accomplish alone',
        'Students will connect the 1781 South Carolina campaign to broader questions about irregular warfare',
      ],
      essentialQuestions: [
        'What can partisan forces accomplish that a regular army cannot? What are their limits?',
        'How did the independence of Marion and Sumter from Greene\'s command help and hinder the campaign?',
        'Is the southern campaign a model for how to use irregular and regular forces together, and if so, what does the model require?',
      ],
      materials: [
        'Map of partisan activity in South Carolina, 1780–1781, overlaid with British post locations',
        'Greene\'s correspondence with Marion about coordinating operations',
        'Secondary source on the differences between Sumter\'s and Marion\'s styles of command',
        'Timeline of partisan actions and their relationship to Greene\'s regular campaign',
      ],
      activities: [
        {
          name: 'Two Types of War',
          duration: '20 minutes',
          description:
            'Students construct a two-column chart identifying what Marion\'s partisan forces could do that Greene\'s Continentals could not, and vice versa. Discussion: why did the British post system require both types of pressure to collapse? Could partisan activity alone have expelled the British from the interior?',
        },
        {
          name: 'The Coordination Problem',
          duration: '30 minutes',
          description:
            'Students read Greene\'s correspondence with Marion and analyze: how did Greene try to direct Marion\'s operations? How did Marion respond? Where did their interests align and where did they diverge? Discussion: was Marion\'s independence a strength or a liability from Greene\'s perspective?',
        },
      ],
      assessment:
        'Analytical paragraph: "Explain, using specific evidence from the lesson, why neither Greene\'s regular army nor Marion\'s partisans alone could have expelled the British from the South Carolina interior in 1781."',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors on the same topic',
      ],
      c3Framework: [
        'D2.His.1.9-12: Evaluate how historical events were shaped by unique circumstances of time and place',
        'D2.His.4.9-12: Analyze complex and interacting factors that influenced the perspectives of people during historical eras',
        'D2.Geo.4.9-12: Evaluate the influences of environmental change on spatial patterns of conflict',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// HOBKIRK'S HILL — ADDITIONAL LINKS
// ============================================================================

export const hobkirksHillAdditionalLinks: Array<{
  toTownId: string;
  linkType: 'SHARED_EVENT' | 'SHARED_PERSON' | 'GEOGRAPHIC_PROXIMITY';
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-sc-camden',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason:
      'Hobkirk\'s Hill was fought on the ridge immediately north of Camden. The battle and its aftermath — Rawdon\'s abandonment of Camden — are inseparable from the Camden post.',
    weight: 100,
  },
  {
    toTownId: 'us-sc-ninety-six',
    linkType: 'SHARED_PERSON',
    reason:
      'After abandoning Camden, Rawdon marched west to relieve the siege of Ninety Six, which Greene had begun after Hobkirk\'s Hill. The two battles are sequential events in the same phase of the campaign.',
    weight: 88,
  },
  {
    toTownId: 'us-sc-eutaw-springs',
    linkType: 'SHARED_PERSON',
    reason:
      'Greene, Williams, Washington, and Lee all fought at both Hobkirk\'s Hill and Eutaw Springs. The same army, reconstituted and re-supplied, fought the last major battle of the South Carolina campaign five months after Hobkirk\'s Hill.',
    weight: 82,
  },
  {
    toTownId: 'us-nc-guilford-courthouse',
    linkType: 'SHARED_PERSON',
    reason:
      'Hobkirk\'s Hill was fought six weeks after Guilford Courthouse. Greene\'s re-entry into South Carolina after Guilford was the strategic decision that made Hobkirk\'s Hill possible.',
    weight: 78,
  },
  {
    toTownId: 'us-sc-cowpens',
    linkType: 'SHARED_PERSON',
    reason:
      'The southern campaign\'s arc from Cowpens through Guilford Courthouse to Hobkirk\'s Hill and Eutaw Springs was driven by the same commanders and the same strategic logic throughout.',
    weight: 72,
  },
];
