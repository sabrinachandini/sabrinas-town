// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// Georgia Frontier: Augusta GA + Savannah GA — Full content sprint
// Campaign: Southern Theater, 1778–1782

import { Prisma } from '@prisma/client';

/**
 * Georgia — Augusta and Savannah
 *
 * These two towns define the arc of British ambition in the Deep South.
 * Savannah fell first, in December 1778, opening the southern theater entirely.
 * A year later, a massive Franco-American assault failed to retake it, and Pulaski
 * died at Spring Hill Redoubt. Augusta changed hands twice before Andrew Pickens
 * and Light-Horse Harry Lee finally pried the British out in June 1781 after an
 * 18-day siege. Savannah itself did not fall back to American hands until July 1782
 * — among the very last British evacuations of the war.
 *
 * NOTE ON VERIFICATION: Historical content synthesized from Henry Lee's Memoirs
 * of the War in the Southern Department, C.C. Jones Jr.'s The Siege of Savannah
 * in 1779, Edward Cashin's The King's Ranger (Thomas Brown biography), the
 * Georgia State Archives Revolutionary War Records, NPS Fort Pulaski interpretive
 * resources, and the Georgia Historical Quarterly.
 */

// ============================================================================
// AUGUSTA
// ============================================================================

export const augustaTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Augusta sat at the head of the Savannah River navigation, where the coastal plain meets the piedmont. Whoever held Augusta held the key to the Georgia interior: access to the Cherokee and Creek nations, the supply lines that fed British operations across the upcountry, and the loyalties of thousands of backcountry settlers who had not yet chosen a side. The British understood this. So did the Patriots.

The struggle for Augusta was not one battle but a grinding, brutal sequence of them. In September 1780, Elijah Clarke led a Georgia militia force in a desperate assault on the British garrison that came close to succeeding before Clarke was driven off and forced to retreat all the way into North Carolina with his wounded men and their families. The British response — Thomas Brown's Loyalist rangers hunting Clarke's supporters through the backcountry — made the Georgia frontier a theater of reprisal and counter-reprisal that erased any clean distinction between military operations and civil war. Brown had reason for his ferocity: Patriots had tortured him in 1775, burning his feet over a fire and forcing him to walk barefoot on hot coals until he passed out. The conflict around Augusta was personal in ways that the formal military narrative cannot fully contain.

The final Patriot recapture of Augusta in June 1781 required an 18-day siege by Andrew Pickens, Light-Horse Harry Lee, and Elijah Clarke working together — a collaboration that was itself remarkable, given the fractious relationships among the Patriot commanders. Lee's Legion constructed a Mayham Tower — a log platform raised above the fort's walls — to fire down into Fort Cornwallis. Brown surrendered on June 5, 1781. Augusta thereafter served as the seat of Georgia's reconstituted Patriot government, eventually becoming the state capital in 1786 after Savannah's wartime destruction had made that city an impractical choice. The town that had been the center of the backcountry civil war became the center of the new state.`,
};

// ============================================================================
// AUGUSTA — PEOPLE
// ============================================================================

export const augustaPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-augusta-andrew-pickens',
      name: 'Brigadier General Andrew Pickens',
      roles: ['South Carolina Militia General', 'Siege Commander', 'Continental Army Brigadier'],
      bioShort:
        'South Carolina Presbyterian elder and militia general called "The Wizard Owl" by the Cherokee. Commanded the successful 1781 Patriot siege of Augusta alongside Light-Horse Harry Lee and Elijah Clarke, capturing Fort Cornwallis on June 5, 1781.',
      birthYear: 1739,
      deathYear: 1817,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Co-commanded the May–June 1781 siege of Augusta; his combination of backcountry militia and Continental Legion forces drove Brown from Fort Cornwallis.',
  },
  {
    person: {
      id: 'person-augusta-henry-lee',
      name: 'Lieutenant Colonel Henry "Light-Horse Harry" Lee',
      roles: ['Continental Dragoon Commander', 'Lee\'s Legion Commander'],
      bioShort:
        'Virginia Continental cavalry officer commanding Lee\'s Legion, a combined-arms unit of dragoons and infantry. His corps constructed the Mayham Tower at Augusta that overtopped Fort Cornwallis\'s walls and forced Brown\'s surrender on June 5, 1781.',
      birthYear: 1756,
      deathYear: 1818,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Led the Continental Legion contingent at the 1781 Augusta siege; his engineering initiative with the Mayham Tower was decisive in forcing Fort Cornwallis to surrender.',
  },
  {
    person: {
      id: 'person-augusta-elijah-clarke',
      name: 'Colonel Elijah Clarke',
      roles: ['Georgia Militia Commander', 'Patriot Partisan Leader'],
      bioShort:
        'Georgia frontier militia leader who mounted two major assaults on British Augusta — a failed attempt in September 1780 and the successful 1781 siege with Pickens and Lee. His men formed the backbone of Georgia Patriot resistance during the British occupation.',
      birthYear: 1742,
      deathYear: 1799,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Fought at Augusta in September 1780 (failed) and June 1781 (successful); his persistent Georgia militia operations kept Patriot resistance alive through the darkest period of the occupation.',
  },
  {
    person: {
      id: 'person-augusta-thomas-brown',
      name: 'Lieutenant Colonel Thomas Brown',
      roles: ['Loyalist Commander', 'King\'s Rangers Commander', 'Superintendent of Indian Affairs'],
      bioShort:
        'British Loyalist officer known as "Burnfoot Brown" after Patriots burned his feet in 1775. Commanded the British garrison at Augusta from 1780 until the June 1781 surrender of Fort Cornwallis to Pickens and Lee. His use of Cherokee and Creek allies made the Augusta theater particularly brutal.',
      birthYear: 1750,
      deathYear: 1825,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Loyalist commandant of Augusta; defended Fort Cornwallis until June 5, 1781; his personal history with the Patriots shaped the viciousness of the backcountry war around Augusta.',
  },
  {
    person: {
      id: 'person-augusta-nancy-hart',
      name: 'Nancy Hart',
      roles: ['Frontier Patriot', 'Georgia Militia Spy', 'Popular Hero'],
      bioShort:
        'Legendary Georgia frontier woman said to have captured six Tory soldiers at her cabin west of Augusta after they demanded food and lodging. Her story, combining frontier toughness with Patriot conviction, made her a Georgia state symbol; Hart County is named for her.',
      birthYear: 1735,
      deathYear: 1830,
      verificationStatus: 'ORAL_TRADITION',
    },
    connectionNote:
      'Her cabin west of Augusta became the setting for the most celebrated of Georgia\'s female Patriot legends; the story\'s core elements are supported by early 19th-century accounts from her neighbors.',
  },
  {
    person: {
      id: 'person-augusta-george-walton',
      name: 'George Walton',
      roles: ['Georgia Signer of the Declaration of Independence', 'Governor of Georgia', 'Continental Congress Delegate'],
      bioShort:
        'Georgia signer of the Declaration of Independence, wounded and captured at the Battle of Savannah in December 1778. After his exchange, Walton served as Governor of Georgia and participated in reconstituting state government in Augusta during the British occupation of Savannah.',
      birthYear: 1749,
      deathYear: 1804,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'One of Georgia\'s three Declaration signers; wounded at Savannah in 1778 and exchanged; served in Augusta as part of Georgia\'s wartime Patriot government during Savannah\'s occupation.',
  },
  {
    person: {
      id: 'person-augusta-william-few',
      name: 'William Few',
      roles: ['Georgia Signer of the U.S. Constitution', 'Continental Congress Delegate', 'Militia Officer'],
      bioShort:
        'Georgia signer of the U.S. Constitution and Augusta-area resident who served in the Continental Congress and Georgia militia during the Revolution. Along with Abraham Baldwin, he was one of two Georgians to sign the Constitution in 1787.',
      birthYear: 1748,
      deathYear: 1828,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Augusta-area resident and Georgia political leader throughout the Revolutionary period; one of Georgia\'s framers of the U.S. Constitution.',
  },
  {
    person: {
      id: 'person-augusta-james-grierson',
      name: 'Colonel James Grierson',
      roles: ['British Loyalist Officer', 'Fort Grierson Commandant'],
      bioShort:
        'British Loyalist officer who commanded Fort Grierson, a smaller fortification in Augusta taken by the Patriots before the main siege of Fort Cornwallis in 1781. Grierson was killed shortly after his capture — shot by a Georgia militiaman whose family he had reportedly abused during the occupation.',
      birthYear: 1740,
      deathYear: 1781,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded Fort Grierson; killed after capture during the 1781 Augusta siege, illustrating the personal character of the backcountry civil war.',
  },
];

// ============================================================================
// AUGUSTA — PLACES
// ============================================================================

export const augustaPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-augusta-fort-cornwallis-site',
    name: 'Fort Cornwallis Site (Augusta Riverwalk Area)',
    placeType: 'BATTLEFIELD',
    description:
      'Fort Cornwallis was the main British fortification in Augusta, constructed on a commanding height near the Savannah River. Thomas Brown and his Loyalist rangers held this position against the 18-day Patriot siege in May–June 1781. The fort fell on June 5, 1781, when Lee\'s Mayham Tower allowed Patriots to fire down into the works. The site is within the modern Augusta Riverwalk development area, marked with historical interpretation.',
    lat: 33.4730,
    lng: -82.0100,
    address: 'Augusta Riverwalk, Augusta, GA 30901',
    town: { connect: { id: 'us-ga-augusta' } },
  },
  {
    id: 'place-augusta-mackay-house',
    name: 'Mackay House (British Headquarters)',
    placeType: 'HISTORIC_HOUSE',
    description:
      'Built around 1760, the Mackay House is one of the few surviving colonial-era structures in Augusta and served as British headquarters during their occupation of the town. It is preserved by Historic Augusta and interpreted as a window into the colonial and Revolutionary War period in the Georgia backcountry.',
    lat: 33.4711,
    lng: -82.0108,
    address: '1822 Broad St, Augusta, GA 30904',
    hours: 'Contact Historic Augusta for tour scheduling',
    town: { connect: { id: 'us-ga-augusta' } },
  },
  {
    id: 'place-augusta-st-pauls-church',
    name: 'St. Paul\'s Episcopal Church',
    placeType: 'CHURCH',
    description:
      'One of Augusta\'s oldest congregations, St. Paul\'s traces its roots to the colonial period and was present during the Revolutionary War. The church and its grounds served as a gathering point for Augusta\'s civic community through the British occupation and the reconstitution of Patriot government after the 1781 recapture. The current structure dates from the 19th century but sits on ground with deep colonial associations.',
    lat: 33.4742,
    lng: -82.0115,
    address: '605 Reynolds St, Augusta, GA 30901',
    website: 'https://stpauls-augusta.org',
    town: { connect: { id: 'us-ga-augusta' } },
  },
  {
    id: 'place-augusta-augusta-museum-history',
    name: 'Augusta Museum of History',
    placeType: 'MUSEUM',
    description:
      'The primary local history museum covering Augusta\'s history from pre-colonial times through the modern era. The Revolutionary War galleries interpret the multiple changes of control, the siege of Fort Cornwallis, and the role of Augusta as Georgia\'s post-war capital. Collections include militia artifacts, period documents, and maps of the British fortifications.',
    lat: 33.4762,
    lng: -82.0148,
    address: '560 Reynolds St, Augusta, GA 30901',
    hours: 'Tue–Sat 10am–5pm, Sun 1pm–5pm',
    admission: 'Adults $8, Seniors $6, Children $4',
    website: 'https://www.augustamuseum.org',
    town: { connect: { id: 'us-ga-augusta' } },
  },
  {
    id: 'place-augusta-signers-monument',
    name: 'Signers\' Monument',
    placeType: 'MONUMENT',
    description:
      'Augusta\'s monument honoring Georgia\'s three signers of the Declaration of Independence: Button Gwinnett, Lyman Hall, and George Walton. All three are reinterred here. Walton\'s story connects directly to the Revolutionary War fighting in Georgia — he was wounded and captured at the British seizure of Savannah in December 1778 before serving in Augusta during the Patriot government\'s reconstitution.',
    lat: 33.4749,
    lng: -82.0094,
    address: '432 Greene St, Augusta, GA 30901',
    town: { connect: { id: 'us-ga-augusta' } },
  },
  {
    id: 'place-augusta-savannah-river-crossing',
    name: 'Savannah River Crossing and Ferry Site',
    placeType: 'LANDMARK',
    description:
      'The Savannah River at Augusta was the strategic reason the town existed. Control of this crossing determined who could move men, supplies, and Indian trade goods between South Carolina and the Georgia interior. During the Revolutionary War, this crossing was repeatedly contested as British and Patriot forces maneuvered for control of Augusta and the backcountry. The modern Fifth Street Bridge crosses approximately where colonial-era ferries operated.',
    lat: 33.4760,
    lng: -82.0050,
    address: 'Fifth Street Bridge area, Augusta, GA 30901',
    town: { connect: { id: 'us-ga-augusta' } },
  },
];

// ============================================================================
// AUGUSTA — EVENTS
// ============================================================================

export const augustaEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-augusta-british-occupation-begins',
    name: 'British Forces Occupy Augusta',
    startDate: new Date('1779-01-29'),
    datePrecision: 'DAY',
    summary:
      'British forces under Lieutenant Colonel Archibald Campbell, the same officer who had captured Savannah a month earlier, marched inland and seized Augusta in late January 1779. The occupation initially seemed to confirm the British southern strategy: with Savannah and Augusta both in British hands, the entire Georgia colonial government had collapsed and the state appeared pacified.\n\nThe occupation did not hold. Patriot resistance in the backcountry proved stronger than anticipated, and Campbell withdrew from Augusta in February 1779 when supply lines became untenable. But the British seizure established a pattern that would repeat through 1780–1781: Augusta was the key to the Georgia interior, and whoever held it had a claim on the loyalties of the backcountry population.',
    significanceWeight: 72,
    lat: 33.4735,
    lng: -82.0105,
    town: { connect: { id: 'us-ga-augusta' } },
  },
  {
    id: 'event-augusta-browne-appointment',
    name: 'Thomas Brown Appointed Loyalist Commandant of Augusta',
    startDate: new Date('1780-06-01'),
    datePrecision: 'MONTH',
    summary:
      'Following the fall of Charleston in May 1780, which opened all of Georgia and South Carolina to British operations, Thomas Brown was appointed commandant of Augusta with his King\'s Rangers. Brown brought with him a personal history with the Patriot cause: in 1775, a group of Patriots had tortured him, burning his feet and forcing him to walk on hot coals. His men called him "Burnfoot Brown." He was efficient and ruthless, and his use of Cherokee and Creek allies as scouts and auxiliaries gave the Augusta garrison a reach into the backcountry that pure regular forces could not have managed.\n\nBrown\'s commandancy transformed Augusta into a secure British base and the administrative center of the upper South Carolina–Georgia frontier. Loyalists organized, trade with Native allies resumed, and the Patriot partisan forces found the entire interior hostile territory.',
    significanceWeight: 70,
    lat: 33.4735,
    lng: -82.0105,
    town: { connect: { id: 'us-ga-augusta' } },
  },
  {
    id: 'event-augusta-first-battle-1780',
    name: 'First Battle of Augusta — Clarke\'s Failed Assault',
    startDate: new Date('1780-09-14'),
    datePrecision: 'DAY',
    summary:
      'On September 14, 1780, Colonel Elijah Clarke led approximately 600 Georgia and South Carolina militia in a surprise assault on the British garrison at Augusta. The attack initially succeeded in driving Brown\'s forces from the town into a fortified stone building, where Brown held out for eleven days under siege. When British and Loyalist relief forces arrived from Ninety Six, Clarke was forced to abandon the siege and retreat — and his retreat became a desperate march through Cherokee territory into North Carolina, carrying his wounded and their families.\n\nThe failed assault demonstrated both the depth of Patriot motivation in the Georgia backcountry and the limitations of militia forces operating without Continental support. Clarke had come close. The knowledge that the garrison was vulnerable made the 1781 operation possible.',
    significanceWeight: 80,
    lat: 33.4735,
    lng: -82.0105,
    town: { connect: { id: 'us-ga-augusta' } },
  },
  {
    id: 'event-augusta-browne-reprisals-1780',
    name: 'Brown\'s Reprisals After the Failed Assault',
    startDate: new Date('1780-09-25'),
    datePrecision: 'MONTH',
    summary:
      'After Clarke\'s militia withdrew, Thomas Brown hanged thirteen of the wounded Patriots who had been left behind when Clarke retreated. Some accounts hold that Brown had them hanged from the staircase of the building where they had been held prisoner. The killings deepened the cycle of reprisal that characterized the Augusta backcountry — Patriot militiamen who might have accepted British parole instead continued fighting, because the message from Brown\'s conduct was clear: capture meant death.\n\nBrown\'s actions were consistent with British policy in the southern backcountry that treated Patriot militia as rebels rather than prisoners of war, but the consequences were strategically counterproductive. The reprisals made it impossible for moderate Georgians to accept British authority, and they fed the partisan resistance that eventually made Augusta indefensible.',
    significanceWeight: 75,
    lat: 33.4735,
    lng: -82.0105,
    town: { connect: { id: 'us-ga-augusta' } },
  },
  {
    id: 'event-augusta-battle-of-ninety-six-context',
    name: 'Greene\'s Southern Campaign Reaches Georgia',
    startDate: new Date('1781-04-01'),
    datePrecision: 'MONTH',
    summary:
      'By April 1781, Nathanael Greene\'s campaign of strategic pressure had eroded British control of the Carolina interior. Cornwallis had marched north toward Virginia after Guilford Courthouse. The British posts at Ninety Six, Camden, and Augusta were suddenly exposed — surrounded by territory the British could not effectively patrol and dependent on supply lines that Patriot partisans were systematically cutting.\n\nGreene assigned the Augusta operation to Andrew Pickens and Light-Horse Harry Lee while he moved against Ninety Six himself. The coordination demonstrated the maturation of Patriot strategic thinking in the south: instead of chasing the British main army, Greene was strangling their network of interior posts one by one. Augusta was the Georgia link in that network.',
    significanceWeight: 78,
    lat: 33.4735,
    lng: -82.0105,
    town: { connect: { id: 'us-ga-augusta' } },
  },
  {
    id: 'event-augusta-fort-grierson-falls',
    name: 'Fort Grierson Captured by Patriots',
    startDate: new Date('1781-05-22'),
    datePrecision: 'DAY',
    summary:
      'The Augusta siege began on May 22, 1781, when Pickens, Lee, and Clarke invested the town. Fort Grierson, a smaller Loyalist fortification, was the first British position to fall. Colonel James Grierson surrendered the fort to the Patriot besiegers but was killed shortly afterward — shot by a Georgia militiaman while being escorted to the rear. The killing reflected the personal hatred that had accumulated through two years of backcountry warfare and Brown\'s reprisals.\n\nWith Fort Grierson taken, the Patriot forces turned their full attention to Fort Cornwallis, where Brown and his King\'s Rangers remained entrenched on the high ground. The final phase of the Augusta siege had begun.',
    significanceWeight: 82,
    lat: 33.4735,
    lng: -82.0105,
    town: { connect: { id: 'us-ga-augusta' } },
  },
  {
    id: 'event-augusta-mayham-tower',
    name: 'Lee\'s Mayham Tower Overtopped Fort Cornwallis',
    startDate: new Date('1781-06-01'),
    datePrecision: 'MONTH',
    summary:
      'Faced with Fort Cornwallis\'s strong walls, Lee\'s Legion constructed a Mayham Tower — a log scaffolding platform raised high enough to fire down into the fort\'s interior. The technique had been used successfully at Fort Watson in South Carolina. Riflemen posted on the tower could reach any part of Fort Cornwallis\'s interior, making the position untenable.\n\nThe tower\'s construction was itself a military engineering achievement: built under fire, using timber brought from the surrounding area, and raised high enough to clear walls that had resisted direct assault. Brown attempted a sortie to destroy it and failed. Once the tower was operational, surrender was only a matter of days.',
    significanceWeight: 85,
    lat: 33.4730,
    lng: -82.0100,
    town: { connect: { id: 'us-ga-augusta' } },
  },
  {
    id: 'event-augusta-brown-surrenders',
    name: 'Thomas Brown Surrenders Fort Cornwallis',
    startDate: new Date('1781-06-05'),
    datePrecision: 'DAY',
    summary:
      'On June 5, 1781, Thomas Brown surrendered Fort Cornwallis and the Augusta garrison to Pickens and Lee. The surrender terms were controversial: Brown and his surviving men were to be escorted out of Georgia under Patriot protection. That protection proved necessary — Georgia militiamen who had suffered under Brown\'s command attempted to kill him during the withdrawal, and Patriot officers had to physically shield him to prevent a massacre.\n\nBrown\'s survival under escort was the final act of a command he had held for over a year. The capture of Augusta ended British military control of the Georgia interior. No British force would hold Augusta again. Georgia\'s Patriot government, which had been functioning in exile and in the backcountry, returned to the town.',
    significanceWeight: 92,
    lat: 33.4730,
    lng: -82.0100,
    town: { connect: { id: 'us-ga-augusta' } },
  },
  {
    id: 'event-augusta-georgia-capital',
    name: 'Augusta Becomes Georgia\'s State Capital',
    startDate: new Date('1786-01-01'),
    datePrecision: 'YEAR',
    summary:
      'In 1786, Georgia\'s legislature designated Augusta as the state capital, replacing Savannah. The decision reflected Savannah\'s destruction and depopulation during the British occupation and the wartime period: the city had been burned, its economy disrupted, and its Loyalist and Patriot populations reshuffled by the years of occupation. Augusta, which had been the seat of Patriot government in exile during the British occupation of Savannah, was the natural successor.\n\nAugusta remained the state capital until 1796, when the legislature moved to Louisville, Georgia, closer to the center of the state\'s expanding population. But the decade as capital cemented Augusta\'s importance as a political and commercial center of the new state.',
    significanceWeight: 68,
    lat: 33.4735,
    lng: -82.0105,
    town: { connect: { id: 'us-ga-augusta' } },
  },
  {
    id: 'event-augusta-nancy-hart-capture',
    name: 'Nancy Hart Captures Six Tory Soldiers',
    startDate: new Date('1779-01-01'),
    datePrecision: 'YEAR',
    summary:
      'According to accounts collected from her neighbors in the early 19th century, Nancy Hart — a frontier woman living west of Augusta on the Broad River — was confronted at her cabin by a party of six Tory soldiers demanding food and information about a Patriot militiaman\'s location. Hart served them food and liquor while secretly sending her daughter to alert Patriot neighbors. She managed to secure their muskets one by one as they drank, then held them at gunpoint until help arrived. The soldiers were reportedly hanged.\n\nThe story\'s details vary between tellings and the exact date is unknown, but the core account is supported by multiple independent early recollections from Hart County neighbors. Whether precisely accurate or embellished in transmission, Nancy Hart became Georgia\'s defining female Patriot figure. Hart County, Georgia is named for her.',
    significanceWeight: 65,
    lat: 33.6500,
    lng: -83.0500,
    town: { connect: { id: 'us-ga-augusta' } },
  },
];

// ============================================================================
// AUGUSTA — STORIES
// ============================================================================

export const augustaStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-augusta-burnfoot-brown',
    title: 'The Man Called Burnfoot',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-augusta-thomas-brown' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Thomas Brown arrived in Georgia in 1774 with capital, ambition, and a plan to establish a plantation in the backcountry. He was twenty-four years old, a recent immigrant from Yorkshire, and he had chosen his timing badly.

By the summer of 1775, the political situation in Georgia had hardened to the point where anyone of means who had not publicly declared for the Patriot cause was assumed to be an enemy. A group of Liberty Boys — the local name for the Sons of Liberty — arrived at Brown's plantation near Augusta in August 1775 with the intention of compelling him to sign an oath of loyalty to the Patriot cause. Brown refused. What happened next depends on the source: the least damning version says he was beaten, had his feet burned over hot coals, and was tarred and feathered before being run out of town. Brown's own account, and the accounts from British sources, are considerably more graphic.

He emerged from the experience with permanent damage to his feet — which is where the nickname Burnfoot came from, though he apparently despised it — and with a hatred for the Patriot cause that operated at a personal level well below politics. He made his way to British lines and spent the early years of the war organizing Loyalist networks in South Carolina and Georgia. By 1780, with Charleston fallen and Augusta in British hands, he was the commandant of the town and the king's principal agent for maintaining relations with the Cherokee and Creek nations.

Brown was effective. He was also brutal in ways that exceeded what the military situation required. After Clarke's failed assault in September 1780, he hanged thirteen of the Patriots who had been left behind. He used his Creek and Cherokee auxiliaries in ways that terrorized the Patriot backcountry population. The cycle of reprisal he helped set in motion made the Augusta theater one of the most savage of the entire war.

When Pickens and Lee finally took Fort Cornwallis in June 1781 and Brown surrendered, Georgia militiamen tried to kill him as he was being escorted out. Patriot officers physically shielded him — an irony that Brown himself must have noticed. He survived, evacuated with the British fleet, and eventually settled in the Bahamas, where he died in 1825. He never returned to Georgia.

What Brown's story shows is that the backcountry war was not purely a political conflict or even a military one. It was personal in a way that the formal narrative of campaigns and battles cannot capture. Men who had been tortured did not forget it. Families who had lost relatives to reprisals did not put that aside when the fighting ended. The Georgia backcountry in 1780–1781 was a place where the Revolution had collapsed into something that looked less like a war of independence and more like a civil war with no front lines and no rules.`,
    tags: ['Augusta', 'Thomas Brown', 'Loyalists', 'backcountry war', 'reprisals'],
    town: { connect: { id: 'us-ga-augusta' } },
  },
  {
    id: 'story-augusta-mayham-tower-engineering',
    title: 'The Tower That Won Augusta',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-augusta-henry-lee' } },
    verificationStatus: 'VERIFIED',
    textVersion: `The problem with Fort Cornwallis was the walls. Thomas Brown had been a careful engineer as well as a ruthless commander, and the fort he had built on the high ground near the Savannah River had walls thick enough and high enough to make a direct infantry assault suicidal. Andrew Pickens and Henry Lee had begun the Augusta siege on May 22, 1781. By the end of the first week, it was clear that conventional approaches were not going to work.

Lee had seen the Mayham Tower work at Fort Watson in South Carolina earlier that spring. Colonel Hezekiah Maham, a South Carolina militia officer, had proposed the technique: construct a log tower tall enough to overtop the enemy's walls, platform it, and post riflemen who could fire down into any part of the fort's interior. The British could not depress their own cannon enough to hit a tower at close range, and the riflemen on top could reach anyone inside the walls.

Building it was the challenge. The tower required straight timber — not easy to find quickly — and it had to be assembled under fire. Brown's garrison sortied twice to try to destroy the construction. Both sorties were beaten back. The men building the tower worked through the night to get it to height before Brown could organize a third attempt.

When the tower became operational, the effect was immediate. Brown's men could no longer move freely inside the fort. The water supply was exposed to fire from above. The magazine, the officers' quarters, the entire interior of the fort was visible to the riflemen on the platform. Brown held out for a few more days — the man had demonstrated throughout the siege that he would not surrender easily — but by June 5 there was no rational military case for continued resistance.

Brown's surrender on June 5, 1781 ended the British presence in the Georgia interior. The Mayham Tower was a small tactical innovation in the larger context of the war, but at Augusta it was decisive. Lee wrote about it with evident satisfaction in his memoirs, noting the elegance of a solution that achieved through engineering what could not have been achieved through frontal assault. The men who would have died in a direct attack on Fort Cornwallis did not have to die. That mattered.`,
    tags: ['Augusta', 'Fort Cornwallis', 'Mayham Tower', 'Lee\'s Legion', 'siege warfare'],
    town: { connect: { id: 'us-ga-augusta' } },
  },
];

// ============================================================================
// AUGUSTA — LESSON PLANS
// ============================================================================

export const augustaLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-ga-augusta' } },
    title: 'Augusta 1780–1781: Backcountry Civil War',
    gradeRange: '8-12',
    estimatedDuration: '2 class periods',
    summary:
      'This lesson uses the struggle for Augusta to explore what happened when the American Revolution became a civil war in the backcountry. Students examine the causes and escalation of Patriot-Loyalist violence in the Georgia interior, analyze Thomas Brown as a complex historical figure shaped by personal experience, and consider how cycles of reprisal operate and whether they can be broken. The lesson develops students\' ability to analyze multiple perspectives on the same conflict.',
    lessonData: {
      objectives: [
        'Students will explain why Augusta was strategically important to both British and Patriot forces',
        'Students will trace the escalation of violence in the Augusta backcountry from 1775 through 1781',
        'Students will analyze Thomas Brown as a case study in how personal experience shapes political behavior',
        'Students will evaluate whether the violence in the Augusta backcountry was inevitable or could have been limited',
      ],
      essentialQuestions: [
        'How does a political conflict become a personal one, and what are the consequences?',
        'What distinguishes a civil war from a revolution, and which term better describes what happened in the Georgia backcountry?',
        'What obligations do military commanders have toward prisoners and civilians, and what happens when those obligations break down?',
      ],
      materials: [
        'Map of the Augusta area showing Fort Cornwallis, Fort Grierson, and the Savannah River crossing',
        'Excerpt from Edward Cashin\'s biography of Thomas Brown',
        'Henry Lee\'s account of the Augusta siege from his Memoirs of the War in the Southern Department',
        'Timeline: changes of control at Augusta, 1779–1781',
        'Document excerpt: Brown\'s reprisals after Clarke\'s 1780 assault',
      ],
      activities: [
        {
          name: 'The Cycle of Reprisal',
          duration: '25 minutes',
          description:
            'Students trace the sequence of events from Brown\'s torture in 1775 through the 1780 reprisals to the 1781 militia attempts to kill Brown during his surrender. Using a cause-and-effect graphic organizer, students identify each act of violence, what provoked it, and what it provoked in response. Class discussion: is there a point in this sequence where the cycle could have been broken? What would have been required?',
        },
        {
          name: 'Brown as a Historical Figure',
          duration: '20 minutes',
          description:
            'Students read a short description of Brown\'s 1775 torture and his subsequent conduct at Augusta. Discussion questions: Does what happened to Brown in 1775 explain his later brutality? Does it excuse it? How should historians account for personal motivation in analyzing political violence? Students write a short response defending a position on this question with evidence.',
        },
        {
          name: 'The Mayham Tower: Military Engineering Decision',
          duration: '15 minutes',
          description:
            'Students examine the tactical problem Lee and Pickens faced at Fort Cornwallis (strong walls, protected interior, no artillery to breach) and the solution (the tower). Discussion: what are the advantages of an engineering solution over a frontal assault? What does it require — time, materials, protection — that an assault does not? Students evaluate whether the tower approach was the right choice and explain their reasoning.',
        },
      ],
      assessment:
        'Students write a 2–3 paragraph response to: "Was the violence in the Augusta backcountry a product of the war, or did it make the war worse than it had to be?" They must use specific evidence from the lesson and take a clear position.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors for how they treat the same or similar topics',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.4.9-12: Analyze complex and interacting factors that influenced the perspectives of people during different historical eras',
        'D2.His.5.9-12: Analyze how historical contexts shaped and continue to shape people\'s perspectives',
        'D2.His.9.9-12: Analyze the relationship between causation and correlation in historical events',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-ga-augusta' } },
    title: 'Siege Warfare: The Science of Fort Cornwallis',
    gradeRange: '6-8',
    estimatedDuration: '50 minutes',
    summary:
      'This lesson uses the 1781 siege of Fort Cornwallis as a case study in military engineering and decision-making. Students learn the basic elements of 18th-century siege warfare — why forts were hard to take by assault, what options attackers had, and how the Mayham Tower solved a specific tactical problem. The lesson develops students\' capacity for spatial and logical reasoning in a historical context.',
    lessonData: {
      objectives: [
        'Students will explain what made Fort Cornwallis defensible and why a frontal assault would have been costly',
        'Students will describe the Mayham Tower technique and explain why it was effective',
        'Students will compare the costs and benefits of direct assault versus engineering approaches in siege warfare',
        'Students will connect the Augusta siege to the broader pattern of Greene\'s southern campaign',
      ],
      essentialQuestions: [
        'Why is a fortified position hard to take, and what options does an attacker have?',
        'What is the difference between winning through force and winning through smart strategy?',
        'How did Nathanael Greene\'s approach to the southern campaign differ from earlier American strategies?',
      ],
      materials: [
        'Diagram of Fort Cornwallis showing walls, gates, interior layout',
        'Illustration of a Mayham Tower and how it works',
        'Map of the Augusta siege lines, May–June 1781',
        'Henry Lee passage describing the tower\'s construction (adapted)',
        'Graphic organizer: compare direct assault vs. Mayham Tower (costs, risks, requirements)',
      ],
      activities: [
        {
          name: 'Fort Design Problem',
          duration: '15 minutes',
          description:
            'Students are given a simple diagram of Fort Cornwallis and asked: if you were Pickens and Lee, how would you attack this fort? Students sketch their approach and explain it to a partner. Teacher introduces the concept of enfilading fire, artillery breaching, mining, and escalade — the standard options — and students evaluate each against Fort Cornwallis\'s specific design.',
        },
        {
          name: 'The Tower Solution',
          duration: '20 minutes',
          description:
            'Students learn about the Mayham Tower and use the graphic organizer to compare it to a direct frontal assault on the walls. What does each approach require? What are the risks? What happens if it fails? Students determine which approach they would have chosen and write a brief justification.',
        },
        {
          name: 'Why It Mattered',
          duration: '15 minutes',
          description:
            'Class discussion: Augusta was one of several British interior posts Greene\'s forces reduced in spring 1781. Why did capturing these posts matter more than beating the British in a field battle? Students connect the Augusta siege to the larger pattern of Greene\'s southern campaign and predict what would happen to British control of the South as each post fell.',
        },
      ],
      assessment:
        'Exit ticket: students answer two questions — (1) Why couldn\'t Pickens and Lee take Fort Cornwallis by frontal assault? (2) How did the Mayham Tower solve that problem? Answers should include specific details from the lesson.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information with other information in print and digital texts',
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.14.6-8: Explain multiple causes and effects of events and developments in the past',
        'D2.Geo.2.6-8: Use maps and other geographic representations to explain relationships between the locations of places or regions and their social, cultural, and economic characteristics',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// AUGUSTA — ADDITIONAL LINKS
// ============================================================================

export const augustaAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-sc-charleston',
    linkType: 'SHARED_EVENT',
    reason: 'Both towns were part of the British southern strategy; Charleston\'s fall in May 1780 directly enabled the British consolidation of Augusta under Brown.',
    weight: 85,
  },
  {
    toTownId: 'us-ga-savannah',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason: 'Savannah and Augusta were the two key Georgia towns of the Revolution; Savannah\'s fall in 1778 preceded the British occupation of Augusta and the two towns\' fates were linked throughout the war.',
    weight: 90,
  },
  {
    toTownId: 'us-nc-guilford-courthouse',
    linkType: 'SHARED_PERSON',
    reason: 'Nathanael Greene commanded the southern theater that included both the Guilford Courthouse campaign and the subsequent reduction of British interior posts including Augusta.',
    weight: 78,
  },
  {
    toTownId: 'us-sc-cowpens',
    linkType: 'SHARED_THEME',
    reason: 'Both Augusta and Cowpens were sites of the southern backcountry campaign; the Cowpens victory in January 1781 set off the chain of events that eventually led to the Patriot recovery of Augusta.',
    weight: 75,
  },
  {
    toTownId: 'us-sc-camden',
    linkType: 'SHARED_THEME',
    reason: 'Camden and Augusta were both key nodes in the British network of interior posts in the South; the British southern strategy depended on holding both.',
    weight: 72,
  },
  {
    toTownId: 'us-va-yorktown',
    linkType: 'SHARED_PERSON',
    reason: 'Henry "Light-Horse Harry" Lee commanded at both the Augusta siege (1781) and Yorktown; his Legion was central to the final stages of the southern campaign.',
    weight: 68,
  },
];

// ============================================================================
// SAVANNAH
// ============================================================================

export const savannahTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Savannah in December 1778 was the door that opened the entire southern theater of the Revolutionary War. Lieutenant Colonel Archibald Campbell landed below the city with 3,500 British regulars and, guided through a hidden swamp path by an enslaved man named Quamino Dolly, flanked General Robert Howe's 850-man defending force so completely that the Americans lost over 100 killed and 450 captured while the British suffered 26 casualties. The campaign was a masterwork of intelligence and execution. Within days, Campbell had not just taken Savannah — he had effectively erased organized American resistance in Georgia.

The Franco-American attempt to retake Savannah in October 1779 became one of the most dramatic failures of the entire war. Vice-Admiral Comte d'Estaing brought a French fleet of 20 ships and 4,000 troops from the Caribbean; General Benjamin Lincoln marched up from South Carolina with the Continental Army's Southern detachment. Together they outnumbered the British garrison under Augustine Prevost by more than two to one. But d'Estaing grew impatient with the siege — worried about hurricane season and the British home fleet — and insisted on an assault rather than waiting for the British to starve out. On the morning of October 9, 1779, the Franco-American force charged the Spring Hill Redoubt in one of the bloodiest single engagements of the war. Count Casimir Pulaski, the Polish cavalry commander, was mortally wounded leading a charge through the abatis. Sergeant William Jasper, who had famously retrieved the flag at Fort Sullivan in 1776, was killed planting the American colors on the parapet. The assault failed completely. d'Estaing was wounded twice. Lincoln withdrew and the French fleet departed.

Savannah remained under British occupation until July 11, 1782 — one of the last British withdrawals of the war, months after Cornwallis had surrendered at Yorktown. The four years of occupation transformed the city: its Patriot merchant community was dispersed, its enslaved population depleted by disease and the complex freedoms and re-enslavements of wartime, its built environment scarred by military use. The Savannah that emerged from the Revolution was not the same city that had entered it. But its story — the failed siege, Pulaski's death, the extraordinary length of the occupation — made it one of the most documented and remembered episodes of the southern war.`,
};

// ============================================================================
// SAVANNAH — PEOPLE
// ============================================================================

export const savannahPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-savannah-archibald-campbell',
      name: 'Lieutenant Colonel Archibald Campbell',
      roles: ['British Army Officer', 'Captor of Savannah'],
      bioShort:
        'British officer who captured Savannah on December 29, 1778, by exploiting intelligence from an enslaved man about a hidden path through the swamp flanking the American position. His swift campaign opened the entire southern theater of the war.',
      birthYear: 1739,
      deathYear: 1791,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the British expedition that captured Savannah on December 29, 1778, using Quamino Dolly\'s knowledge of a swamp path to outflank Howe\'s defense entirely.',
  },
  {
    person: {
      id: 'person-savannah-robert-howe',
      name: 'Major General Robert Howe',
      roles: ['Continental Army General', 'Southern Department Commander'],
      bioShort:
        'North Carolina Continental general commanding the American forces at Savannah when the British attacked in December 1778. His 850-man force was completely outmaneuvered by Campbell\'s flanking move; over 450 Americans were captured. Howe was later court-martialed but acquitted.',
      birthYear: 1732,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'American commander at the fall of Savannah; his force was outflanked and largely captured or destroyed in the December 29, 1778 action.',
  },
  {
    person: {
      id: 'person-savannah-casimir-pulaski',
      name: 'Brigadier General Count Casimir Pulaski',
      roles: ['Continental Army Cavalry Commander', 'Polish Volunteer Officer'],
      bioShort:
        'Polish nobleman and cavalry commander who served the American cause from 1777. Mortally wounded on October 9, 1779, leading a cavalry charge at the Spring Hill Redoubt during the failed Franco-American assault on Savannah. DNA analysis in 2019 confirmed his remains in the Pulaski Monument.',
      birthYear: 1745,
      deathYear: 1779,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Mortally wounded at the Spring Hill Redoubt during the October 9, 1779 assault; his death made Savannah\'s failed siege one of the most mourned episodes of the Revolution.',
  },
  {
    person: {
      id: 'person-savannah-destaing',
      name: 'Vice-Admiral Comte d\'Estaing',
      roles: ['French Naval Commander', 'Franco-American Siege Commander'],
      bioShort:
        'French naval commander who brought 20 ships and 4,000 troops to Savannah in September 1779 to support the American siege. His impatience with the siege led to the premature assault of October 9; he was wounded twice in the failed attack before withdrawing the French fleet.',
      birthYear: 1729,
      deathYear: 1794,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the French forces during the 1779 siege of Savannah; his decision to assault rather than continue the siege led directly to the costly failure of October 9.',
  },
  {
    person: {
      id: 'person-savannah-benjamin-lincoln',
      name: 'Major General Benjamin Lincoln',
      roles: ['Continental Army General', 'Southern Department Commander'],
      bioShort:
        'Massachusetts general who commanded the Continental forces during the 1779 Franco-American siege of Savannah and co-led the October 9 assault with d\'Estaing. After the siege failed he withdrew to Charleston, where he surrendered the entire Southern Army in May 1780.',
      birthYear: 1733,
      deathYear: 1810,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Co-commanded the 1779 Franco-American siege of Savannah; after its failure, retreated to Charleston where the British pursued him to the climactic 1780 siege.',
  },
  {
    person: {
      id: 'person-savannah-augustine-prevost',
      name: 'General Augustine Prevost',
      roles: ['British Commander', 'Savannah Garrison Commander'],
      bioShort:
        'Swiss-born British general who commanded the Savannah garrison during the Franco-American siege of October 1779. His successful defense of the city against a force more than twice his size was one of the most notable British defensive achievements of the war.',
      birthYear: 1723,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the British garrison at Savannah during the 1779 siege; his decision to fortify and fight rather than negotiate a surrender produced a significant British defensive victory.',
  },
  {
    person: {
      id: 'person-savannah-quamino-dolly',
      name: 'Quamino Dolly',
      roles: ['Enslaved Guide', 'Intelligence Source for British Attack'],
      bioShort:
        'Enslaved man who guided Lieutenant Colonel Archibald Campbell through a hidden swamp path to outflank the American defenses at Savannah on December 29, 1778. His knowledge of the local terrain made the British capture of Savannah possible. His motivations and subsequent fate are not fully documented.',
      birthYear: 1740,
      deathYear: 1800,
      verificationStatus: 'ORAL_TRADITION',
    },
    connectionNote:
      'Provided the crucial intelligence and guidance that allowed Campbell to flank Howe\'s position; without his knowledge of the swamp path, the December 1778 capture would not have been possible in the form it took.',
  },
  {
    person: {
      id: 'person-savannah-william-jasper',
      name: 'Sergeant William Jasper',
      roles: ['South Carolina Continental Soldier', 'Flag Hero'],
      bioShort:
        'South Carolina soldier famous for rescuing the flag at Fort Sullivan (Fort Moultrie) in 1776. Killed on October 9, 1779, planting the American colors on the parapet of the Spring Hill Redoubt during the failed assault on Savannah. His death in the act of carrying the flag became one of the Revolution\'s most commemorated sacrifices.',
      birthYear: 1750,
      deathYear: 1779,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Killed at the Spring Hill Redoubt on October 9, 1779, while planting the regimental colors on the parapet during the doomed assault; his death alongside Pulaski defined the Savannah siege in American memory.',
  },
];

// ============================================================================
// SAVANNAH — PLACES
// ============================================================================

export const savannahPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-savannah-battlefield-memorial-park',
    name: 'Savannah Battlefield Memorial Park (Spring Hill Redoubt)',
    placeType: 'BATTLEFIELD',
    description:
      'The site of the Spring Hill Redoubt, the British fortification where the Franco-American assault of October 9, 1779 was stopped with heavy casualties. The park preserves the approximate location of the redoubt and commemorates the deaths of Pulaski and Jasper in the assault. Archaeological work has located remains of the fortification earthworks beneath the modern surface.',
    lat: 32.0780,
    lng: -81.1020,
    address: 'Louisville Rd, Savannah, GA 31401',
    town: { connect: { id: 'us-ga-savannah' } },
  },
  {
    id: 'place-savannah-pulaski-monument',
    name: 'Pulaski Monument (Monterey Square)',
    placeType: 'MONUMENT',
    description:
      'The monument to Count Casimir Pulaski in Monterey Square marks the reputed location of his remains, confirmed by DNA analysis in 2019. The monument was completed in 1854 and became one of Savannah\'s most prominent landmarks. The 2019 forensic analysis, which confirmed the skeletal remains beneath the monument are indeed Pulaski\'s, resolved a long-standing historical debate about where he was actually buried.',
    lat: 32.0754,
    lng: -81.0946,
    address: 'Monterey Square, Savannah, GA 31401',
    town: { connect: { id: 'us-ga-savannah' } },
  },
  {
    id: 'place-savannah-colonial-park-cemetery',
    name: 'Colonial Park Cemetery',
    placeType: 'CEMETERY',
    description:
      'Savannah\'s oldest surviving burial ground, established in 1750, contains graves of numerous Revolutionary War-era figures and includes a mass burial area associated with deaths during the 1779 siege. Button Gwinnett, Georgia\'s signer of the Declaration of Independence, is buried here. The cemetery was used as a Union Army camp during the Civil War, and some markers were disturbed during that period.',
    lat: 32.0811,
    lng: -81.0906,
    address: '200 E Oglethorpe Ave, Savannah, GA 31401',
    town: { connect: { id: 'us-ga-savannah' } },
  },
  {
    id: 'place-savannah-georgia-historical-society',
    name: 'Georgia Historical Society Research Center',
    placeType: 'MUSEUM',
    description:
      'The oldest historical institution in the Deep South, founded in 1839, holds the most extensive collection of Georgia Revolutionary War manuscripts including the Habersham Family Papers, Bryan Family Papers, and British occupation administrative records from 1778–1782. The GHS is the essential starting point for research on the Savannah sieges and the Georgia Revolutionary War experience.',
    lat: 32.0758,
    lng: -81.0955,
    address: '501 Whitaker St, Savannah, GA 31401',
    hours: 'Mon–Fri 10am–5pm',
    website: 'https://georgiahistory.com',
    town: { connect: { id: 'us-ga-savannah' } },
  },
  {
    id: 'place-savannah-factors-walk',
    name: 'Factor\'s Walk and River Street',
    placeType: 'LANDMARK',
    description:
      'The historic warehouse district along the Savannah River bluff preserves the commercial infrastructure of colonial Savannah. Factor\'s Walk — the elevated walkway connecting the bluff warehouses — dates from the colonial period and was part of the commercial landscape Patriot and Loyalist merchants competed over during the Revolutionary War. The area gives a sense of Savannah\'s economic geography as a river port.',
    lat: 32.0821,
    lng: -81.0912,
    address: 'River St, Savannah, GA 31401',
    town: { connect: { id: 'us-ga-savannah' } },
  },
  {
    id: 'place-savannah-independent-presbyterian-church',
    name: 'Independent Presbyterian Church (Site)',
    placeType: 'CHURCH',
    description:
      'Organized in 1755, Independent Presbyterian Church was the spiritual home of many of Savannah\'s Patriot families during the Revolutionary War period. The church\'s congregation included members who served in the Patriot government and military. The current structure (1890) replaces earlier buildings; the site has been in continuous congregation use since the colonial period and anchors Savannah\'s Patriot civic heritage.',
    lat: 32.0790,
    lng: -81.0938,
    address: '25 W Oglethorpe Ave, Savannah, GA 31401',
    website: 'https://www.ipcsav.org',
    town: { connect: { id: 'us-ga-savannah' } },
  },
];

// ============================================================================
// SAVANNAH — EVENTS
// ============================================================================

export const savannahEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-savannah-british-southern-strategy',
    name: 'British Southern Strategy Adopted',
    startDate: new Date('1778-03-01'),
    datePrecision: 'MONTH',
    summary:
      'Following the failure to crush American resistance in the north after three years of campaigning, the British government and high command shifted to a southern strategy in early 1778. The theory was that the south contained a large Loyalist population that would rise to support the Crown once British forces established control and provided military protection. Georgia was chosen as the entry point: a small state, weakly defended, with a significant Loyalist population in the backcountry.\n\nThe strategic logic was not unreasonable. Georgia was the newest and least populated of the thirteen colonies and had the weakest Continental military presence. The plan was to pacify it, use it as a base, and roll northward through the Carolinas toward Virginia. The plan\'s execution, beginning with the capture of Savannah in December 1778, would prove more complicated than the theory suggested.',
    significanceWeight: 78,
    lat: 32.0835,
    lng: -81.0998,
    town: { connect: { id: 'us-ga-savannah' } },
  },
  {
    id: 'event-savannah-fall-dec-1778',
    name: 'Fall of Savannah — British Capture',
    startDate: new Date('1778-12-29'),
    datePrecision: 'DAY',
    summary:
      'On December 29, 1778, Lieutenant Colonel Archibald Campbell landed 3,500 British regulars below Savannah. Intelligence from an enslaved man, Quamino Dolly, revealed a hidden path through a swamp on the American left flank. Campbell sent a diversionary force against the American front while Colonel James Baird led his light infantry through the swamp path to strike the American rear simultaneously.\n\nGeneral Robert Howe\'s 850-man American force collapsed completely. The British killed over 100 and captured 450. Savannah fell in an afternoon. The speed and decisiveness of the British victory set off a domino effect: Campbell marched to Augusta within weeks, and the entire state of Georgia was briefly under British control for the first time since 1776.',
    significanceWeight: 95,
    lat: 32.0700,
    lng: -81.1100,
    town: { connect: { id: 'us-ga-savannah' } },
  },
  {
    id: 'event-savannah-georgia-royal-government-restored',
    name: 'Royal Government of Georgia Restored',
    startDate: new Date('1779-07-01'),
    datePrecision: 'MONTH',
    summary:
      'In mid-1779, the British formally restored the royal government of Georgia, with Sir James Wright returning as Royal Governor. This made Georgia the only one of the thirteen colonies whose pre-war government was actually reinstated during the Revolution. The British used the restoration as a model: prove that royal government could function, attract Loyalists, and demonstrate to other colonies that submission was viable.\n\nThe reality was more complicated. Large parts of Georgia remained under Patriot partisan control, particularly the backcountry. Royal government in practice extended only as far as British bayonets could reach. But the formal restoration had propaganda value and it organized the Loyalist community in ways that made the subsequent fighting more intense.',
    significanceWeight: 72,
    lat: 32.0835,
    lng: -81.0998,
    town: { connect: { id: 'us-ga-savannah' } },
  },
  {
    id: 'event-savannah-destaing-arrives',
    name: 'French Fleet Arrives Off Savannah',
    startDate: new Date('1779-09-09'),
    datePrecision: 'DAY',
    summary:
      'Vice-Admiral Comte d\'Estaing arrived off Savannah on September 9, 1779, with a French fleet of 20 ships of the line and approximately 4,000 troops. The appearance of the French fleet transformed the military situation: combined with Lincoln\'s Continental force approaching from South Carolina, the Franco-American army would outnumber Prevost\'s garrison by more than two to one.\n\nPrevost, recognizing his vulnerability, initially requested time to consider a surrender demand. The delay allowed him to bring reinforcements from Port Royal by boat — a critical mistake by d\'Estaing, who should not have allowed the delay. When Prevost declined to surrender, the allies began siege works. The siege that followed would last nearly a month before the disastrous assault of October 9.',
    significanceWeight: 85,
    lat: 31.9800,
    lng: -81.0200,
    town: { connect: { id: 'us-ga-savannah' } },
  },
  {
    id: 'event-savannah-assault-oct-9-1779',
    name: 'Franco-American Assault on Spring Hill Redoubt',
    startDate: new Date('1779-10-09'),
    datePrecision: 'DAY',
    summary:
      'On October 9, 1779, d\'Estaing and Lincoln launched a combined assault on the British defenses, targeting the Spring Hill Redoubt on the British left. The assault was preceded by a massive French and American artillery bombardment but was organized in multiple columns that were supposed to attack simultaneously. Coordination failed. The columns arrived piecemeal. The British had time to concentrate their defenders.\n\nThe result was catastrophic. The Franco-American forces suffered over 800 casualties in the main assault — compared to fewer than 150 British. Count Pulaski was struck by grapeshot while leading a cavalry charge and died two days later. Sergeant William Jasper, planting colors on the redoubt parapet, was shot and killed. The assault was a complete tactical failure. D\'Estaing, wounded twice himself, accepted that the siege had failed and withdrew the French fleet within days.',
    significanceWeight: 92,
    lat: 32.0780,
    lng: -81.1020,
    town: { connect: { id: 'us-ga-savannah' } },
  },
  {
    id: 'event-savannah-pulaski-death',
    name: 'Death of Count Casimir Pulaski',
    startDate: new Date('1779-10-11'),
    datePrecision: 'DAY',
    summary:
      'Count Casimir Pulaski, struck by grapeshot in the groin during the October 9 assault, died on October 11, 1779 aboard the brig Wasp. He was 34 years old. Pulaski had been one of the most capable cavalry commanders in Continental service since his arrival from Poland in 1777. His Legion — a combined cavalry and infantry unit — was one of the more professional formations in the Continental Army.\n\nPulaski\'s death made Savannah one of the most mourned events of the Revolution among those who valued the alliance with European volunteers. His remains were reportedly buried at sea, though subsequent accounts placed them at the Pulaski Monument in Monterey Square. DNA analysis in 2019 confirmed that skeletal remains under the monument are consistent with Pulaski\'s biological profile, resolving the question of his burial place.',
    significanceWeight: 88,
    lat: 32.0754,
    lng: -81.0946,
    town: { connect: { id: 'us-ga-savannah' } },
  },
  {
    id: 'event-savannah-lincoln-retreats',
    name: 'Lincoln Withdraws — Siege Abandoned',
    startDate: new Date('1779-10-18'),
    datePrecision: 'DAY',
    summary:
      'After the failed assault and d\'Estaing\'s decision to withdraw the French fleet, Lincoln had no choice but to abandon the siege and march his Continental force back to South Carolina. The retreat was orderly but the strategic consequences were devastating: the southern theater was now entirely in British hands, and the Continental Congress\'s hopes that the French alliance would quickly reverse the situation in the south were shattered.\n\nLincoln withdrew to Charleston, where the British followed him the following spring. The failure at Savannah set the stage for the catastrophe of the Charleston surrender in May 1780 — the largest American military defeat of the entire war.',
    significanceWeight: 82,
    lat: 32.0835,
    lng: -81.0998,
    town: { connect: { id: 'us-ga-savannah' } },
  },
  {
    id: 'event-savannah-occupation-years',
    name: 'British Occupation of Savannah, 1778–1782',
    startDate: new Date('1778-12-29'),
    datePrecision: 'DAY',
    summary:
      'British occupation of Savannah lasted from December 29, 1778 until July 11, 1782 — nearly four years. During that period, Savannah functioned as the administrative capital of British Georgia and the main base for British operations in the southern interior. The occupation had profound social consequences: thousands of enslaved people fled to or were taken to British lines; Patriot families were displaced; Loyalist families claimed their property; the commercial community was reshuffled.\n\nThe length of the occupation — it outlasted Cornwallis\'s surrender at Yorktown by nine months — meant that the British treated Savannah not as a temporary military base but as a permanent administrative center. Royal institutions functioned, courts operated under British law, and the restoration of civilian government was real, even if limited in geographic reach.',
    significanceWeight: 80,
    lat: 32.0835,
    lng: -81.0998,
    town: { connect: { id: 'us-ga-savannah' } },
  },
  {
    id: 'event-savannah-british-evacuation-1782',
    name: 'British Evacuation of Savannah',
    startDate: new Date('1782-07-11'),
    datePrecision: 'DAY',
    summary:
      'On July 11, 1782, British forces evacuated Savannah — one of the final British withdrawals from the American south, coming nine months after Cornwallis\'s surrender at Yorktown. The evacuation removed the British garrison, thousands of Loyalist civilians, and approximately 5,000 enslaved people who had been under British protection during the occupation. Many went to Jamaica, the Bahamas, or East Florida.\n\nThe evacuation was the formal end of British military control of Georgia. American forces entered the city and Georgia\'s Patriot government reconvened. The reconstruction of Georgia\'s civic and economic life from the destruction of the occupation years would take years. Savannah\'s population had fallen dramatically from its pre-war numbers and would not fully recover until well into the 19th century.',
    significanceWeight: 85,
    lat: 32.0835,
    lng: -81.0998,
    town: { connect: { id: 'us-ga-savannah' } },
  },
  {
    id: 'event-savannah-jasper-death',
    name: 'Death of Sergeant William Jasper at the Redoubt',
    startDate: new Date('1779-10-09'),
    datePrecision: 'DAY',
    summary:
      'Sergeant William Jasper, already famous for rescuing the regimental flag under fire at Fort Sullivan in 1776, was shot and killed on October 9, 1779 while planting the American colors on the parapet of the Spring Hill Redoubt during the failed assault. His death was witnessed by multiple officers and widely reported afterward. He reportedly refused to leave the parapet until the flag was planted, and was struck by musket fire as he accomplished it.\n\nJasper\'s death became one of the defining images of the Savannah siege in American memory — the man who had saved the flag at Fort Moultrie dying in the act of raising it at Spring Hill. Monuments to Jasper stand in both Savannah and Charleston. His story illustrates how the Revolution created its own mythology through specific acts of courage at specific moments.',
    significanceWeight: 76,
    lat: 32.0780,
    lng: -81.1020,
    town: { connect: { id: 'us-ga-savannah' } },
  },
];

// ============================================================================
// SAVANNAH — STORIES
// ============================================================================

export const savannahStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-savannah-quamino-dolly',
    title: 'The Path Through the Swamp',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-savannah-quamino-dolly' } },
    verificationStatus: 'ORAL_TRADITION',
    textVersion: `The British had a problem. General Howe's men were dug in behind their defenses on the edge of Savannah, and a frontal assault would cost more than Campbell was willing to spend. He needed a way around.

Quamino Dolly — an enslaved man whose last name derived from the family that owned him — knew the ground. He had worked it, crossed it, moved through it in ways that the army officers mapping the terrain from a distance could not. There was a path through the swamp on the American left flank. It was usable for infantry, if they moved carefully. It would bring them out behind the American line.

Campbell's dispatch describing the battle — his official report to Lord Germain — mentions Dolly by name, which is remarkable. Most enslaved people who provided intelligence or service to British forces in the Revolution disappeared from the documentary record entirely. Campbell named him, credited him, noted that his knowledge of the terrain had made the flanking movement possible. The report is matter-of-fact about it. The man knew a path through a swamp. The path won the battle.

What Dolly thought about any of this — what motivated him, whether he sought freedom as a condition of his help, whether he received it, what happened to him afterward — is not in the record. Campbell's dispatch tells us what he did, not what he wanted. The British proclamation offering freedom to escaped Patriot-owned enslaved people had been issued in 1775 by Lord Dunmore and would be extended by Clinton in 1779; whether Dolly was seeking freedom, was compelled to help, or calculated that British victory offered his community better options than Patriot rule is something we cannot answer from the surviving documents.

What we can say is that the outcome of December 29, 1778 — the battle that opened the southern theater of the Revolution — turned on a decision made by an enslaved man whose motivations we will never fully know. The military history of Savannah's fall has Archibald Campbell at its center. The social history has Quamino Dolly at it. The full history requires both, and requires acknowledging that the second story is harder to tell because the record was not designed to preserve it.`,
    tags: ['Savannah', 'Quamino Dolly', 'enslaved people', 'British capture', 'intelligence'],
    town: { connect: { id: 'us-ga-savannah' } },
  },
  {
    id: 'story-savannah-pulaski-spring-hill',
    title: 'The Last Charge',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-savannah-casimir-pulaski' } },
    verificationStatus: 'VERIFIED',
    textVersion: `The assault on Spring Hill Redoubt began at dawn on October 9, 1779. D'Estaing and Lincoln had planned a three-column attack, and on paper it was sound: the British were outnumbered, the allied artillery had been hammering the defenses for weeks, and if the columns hit simultaneously the garrison could not concentrate fast enough to stop them all.

The plan depended on coordination that the Franco-American command could not achieve. The French columns and the American columns did not arrive together. The British had time to concentrate. The first French column went in and was cut apart by musket and artillery fire in the abatis — the tangle of sharpened branches in front of the walls. The second column came up and went in and was cut apart too. The South Carolina Continentals in Jasper's element reached the parapet and planted their colors and were shot off it.

Pulaski had his cavalry behind the French columns, waiting for the moment when a breakthrough would let him exploit the gap. The gap never opened. What opened instead was a space in the confused fighting where cavalry might still force something — might still, by speed and shock, change the outcome that was hardening against them.

He led the charge. Grapeshot — a canvas bag packed with iron balls, fired from a cannon at close range — hit him in the groin. He was carried from the field and put aboard the brig Wasp. He died two days later.

There is a particular quality to dying in a failed assault that battlefield deaths in successful ones do not share. The men who fell at Bunker Hill fell in a defeat that became a moral victory — the British took the hill but paid for it enormously and the courage of the defenders was the story that survived. The men who died at Spring Hill Redoubt died in a defeat that simply failed. The wall was not taken. The city was not retaken. D'Estaing sailed away. Lincoln retreated to Charleston. The suffering at Spring Hill did not purchase anything except the knowledge that they had tried.

Pulaski understood that the charge might not work. He led it anyway. Whether that is courage or recklessness or simply the logic of the moment — when everything else has failed and you still have cavalry and there is still a chance — is a question that the documents do not answer. What the documents show is that he charged, was hit, and died. He was 34 years old. He had been fighting someone's revolution for most of his adult life.`,
    tags: ['Savannah', 'Pulaski', 'Spring Hill Redoubt', '1779 siege', 'Franco-American alliance'],
    town: { connect: { id: 'us-ga-savannah' } },
  },
];

// ============================================================================
// SAVANNAH — LESSON PLANS
// ============================================================================

export const savannahLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-ga-savannah' } },
    title: 'Savannah 1778: How a Battle Is Won and Lost',
    gradeRange: '6-8',
    estimatedDuration: '2 class periods',
    summary:
      'This lesson uses the British capture of Savannah in December 1778 to teach how battles are won through intelligence, surprise, and terrain. Students analyze why Campbell\'s flanking move succeeded, what role Quamino Dolly played, and what the battle\'s outcome meant for the rest of the southern war. The lesson also introduces the social dimension of the war through the story of enslaved people\'s choices and risks.',
    lessonData: {
      objectives: [
        'Students will explain how Campbell used terrain intelligence to outflank Howe\'s defenses',
        'Students will describe Quamino Dolly\'s role and discuss why his motivations are historically significant',
        'Students will analyze why Georgia was chosen as the entry point for the British southern strategy',
        'Students will explain the consequences of Savannah\'s fall for the rest of the southern war',
      ],
      essentialQuestions: [
        'How does knowledge of local terrain change the outcome of battles?',
        'What choices did enslaved people face when both armies claimed to offer something to them?',
        'Why does the British capture of Savannah in 1778 matter to understanding everything that happened in the southern states afterward?',
      ],
      materials: [
        'Map of Savannah in 1778 showing American defenses, the swamp path, and Campbell\'s flanking route',
        'Excerpt from Campbell\'s official dispatch to Lord Germain mentioning Quamino Dolly',
        'Dunmore\'s 1775 Proclamation and Clinton\'s 1779 Philipsburg Proclamation (key excerpts)',
        'Timeline: British southern strategy, 1778–1780',
        'Pair discussion cards: "What would you have done if you were Quamino Dolly?"',
      ],
      activities: [
        {
          name: 'Map Reading: The Flanking Move',
          duration: '20 minutes',
          description:
            'Students examine the map of Savannah\'s December 1778 defenses. Teacher walks through Howe\'s defensive position: what did he think he was protecting against? Students then trace Campbell\'s flanking route through the swamp and identify: where did the Americans not have defenders? Why not? Students discuss what Howe could have done differently and whether the defeat was inevitable once Campbell had the intelligence about the swamp path.',
        },
        {
          name: 'The Quamino Dolly Question',
          duration: '25 minutes',
          description:
            'Students read the excerpt from Campbell\'s dispatch that names Quamino Dolly. Discussion: Why did Campbell name him? What does it mean that an enslaved person\'s knowledge determined the battle\'s outcome? Students then read the key provisions of the Dunmore and Philipsburg Proclamations and discuss: what was the British offer to enslaved people? What were the risks? In pairs, students write a short response from the perspective of an enslaved person in Savannah in December 1778: what information do you have, what choices do you face, what would you do?',
        },
        {
          name: 'Consequences Chain',
          duration: '15 minutes',
          description:
            'Teacher guides students through a consequences chain: Savannah falls → Augusta falls → Georgia\'s royal government restored → Lincoln retreats to Charleston → British follow to Charleston → Charleston surrenders → entire southern theater in British hands. Students trace this chain on a timeline and answer: what was the single most important moment where American decisions might have changed this outcome? Students defend their answer.',
        },
      ],
      assessment:
        'Students write a paragraph responding to: "What does the fall of Savannah tell us about how wars are really won and lost?" They should address both the military (terrain, intelligence) and social (Quamino Dolly\'s role) dimensions of the battle.',
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
        'D2.Geo.3.6-8: Explain how cultural patterns and economic decisions influence environments and the daily lives of people',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-ga-savannah' } },
    title: 'The 1779 Siege of Savannah: Allies, Decisions, and Consequences',
    gradeRange: '9-12',
    estimatedDuration: '2-3 class periods',
    summary:
      'This lesson uses the failed Franco-American siege of Savannah in 1779 to examine alliance politics, military decision-making under pressure, and the consequences of a single tactical failure on the entire course of a war. Students analyze d\'Estaing\'s decision to assault rather than continue the siege, evaluate the contributions and deaths of Pulaski and Jasper, and consider how the failure at Savannah shaped everything that followed in the southern theater.',
    lessonData: {
      objectives: [
        'Students will explain the strategic logic of the Franco-American siege of Savannah',
        'Students will analyze d\'Estaing\'s decision to assault rather than continue sieging and evaluate whether it was the right choice',
        'Students will describe the deaths of Pulaski and Jasper and explain their significance in American memory',
        'Students will trace the consequences of the siege\'s failure through to the Charleston surrender in 1780',
      ],
      essentialQuestions: [
        'What obligations do allies have to each other, and what happens when their interests conflict?',
        'When does military caution become an unacceptable risk, and when does boldness become recklessness?',
        'How do military failures shape national memory, and why do some defeats become more commemorated than victories?',
      ],
      materials: [
        'Map of the Savannah siege lines, September–October 1779',
        'D\'Estaing\'s dispatches to Paris (excerpts, translated)',
        'Lincoln\'s correspondence during the siege (excerpts)',
        'Account of the October 9 assault from a French officer\'s journal',
        'Descriptions of Pulaski\'s death and Jasper\'s death at the redoubt',
        'Timeline: Savannah siege failure → Lincoln retreats to Charleston → Charleston falls',
      ],
      activities: [
        {
          name: 'The Decision to Assault: War Council Simulation',
          duration: '30 minutes',
          description:
            'Students are assigned roles: d\'Estaing (worried about hurricane season, British fleet, and time), Lincoln (wants to continue the siege, knows his men are ready), and Prevost (trying to delay negotiations to buy time for reinforcements). Using the primary source excerpts, each group presents the case from their character\'s perspective for or against immediate assault. After the simulation, students evaluate: was d\'Estaing\'s decision to assault reasonable given what he knew? What information, in hindsight, should have changed it?',
        },
        {
          name: 'Death and Memory: Pulaski and Jasper',
          duration: '25 minutes',
          description:
            'Students read accounts of both deaths — Pulaski\'s cavalry charge and mortal wounding, Jasper\'s death planting the flag — and examine how each was commemorated afterward (monuments, naming, artistic representation). Discussion: why do these two deaths become so central to how Savannah\'s siege is remembered? What do they say about what Americans chose to memorialize from a military defeat? Students write a paragraph on what the commemoration of these deaths reveals about American values in the Revolutionary period.',
        },
        {
          name: 'Consequences Mapping',
          duration: '20 minutes',
          description:
            'Working in pairs, students map the consequences of the siege failure through to the end of the southern campaign. They answer: if the siege had succeeded in October 1779, what would have been different? Would Charleston have fallen? Would Cornwallis have reached Yorktown? Students construct a brief counterfactual argument and then evaluate its limits: what factors were independent of the Savannah outcome?',
        },
      ],
      assessment:
        'Summative essay (one page): "Was the Franco-American failure at Savannah in 1779 a failure of strategy, of decision-making, or of luck — and how much does that distinction matter?" Students must take a clear position and support it with specific evidence from the lesson.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.9-10.8: Assess the extent to which the reasoning and evidence in a text support the author\'s claims',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.4.9-12: Analyze complex and interacting factors that influenced the perspectives of people during different historical eras',
        'D2.His.9.9-12: Analyze the relationship between causation and correlation in historical events',
        'D2.His.16.9-12: Integrate evidence from multiple relevant historical sources and interpretations into a reasoned argument about the past',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// SAVANNAH — ADDITIONAL LINKS
// ============================================================================

export const savannahAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-ga-augusta',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason: 'Savannah and Augusta were Georgia\'s two key Revolutionary War towns; Savannah\'s fall in 1778 preceded and enabled the British occupation of Augusta, and both towns\' fates were intertwined throughout the war.',
    weight: 90,
  },
  {
    toTownId: 'us-sc-charleston',
    linkType: 'SHARED_EVENT',
    reason: 'The British southern campaign moved from Savannah (captured 1778) to Charleston (captured 1780); Lincoln\'s failure at Savannah led directly to his withdrawal to Charleston and the subsequent British siege there.',
    weight: 88,
  },
  {
    toTownId: 'us-sc-camden',
    linkType: 'SHARED_THEME',
    reason: 'Both Savannah and Camden were key nodes in the British southern strategy; the fall of both cities in 1778–1780 gave Britain apparent control of the entire Deep South.',
    weight: 75,
  },
  {
    toTownId: 'us-ny-new-york-city',
    linkType: 'SHARED_PERSON',
    reason: 'D\'Estaing\'s French fleet operated both off New York (1778) and at Savannah (1779); the strategic deployment of French naval power shaped both theaters.',
    weight: 68,
  },
  {
    toTownId: 'us-nc-guilford-courthouse',
    linkType: 'SHARED_PERSON',
    reason: 'Nathanael Greene commanded the Southern Army formed after Savannah and Charleston fell; his campaign from Guilford Courthouse through the Carolina interior was the direct response to the collapse that began at Savannah.',
    weight: 78,
  },
  {
    toTownId: 'us-va-yorktown',
    linkType: 'SHARED_THEME',
    reason: 'The French alliance whose first major southern intervention failed at Savannah in 1779 ultimately succeeded at Yorktown in 1781; the arc from Savannah\'s failure to Yorktown\'s success defines the trajectory of the Franco-American partnership.',
    weight: 82,
  },
];
