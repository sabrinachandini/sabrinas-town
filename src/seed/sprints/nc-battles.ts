// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// NC Battles: Guilford Courthouse + Kings Mountain
// Campaign: Southern Campaign, 1780–1781

import { Prisma } from '@prisma/client';

// ============================================================================
// GUILFORD COURTHOUSE
// ============================================================================

export const guilfordCourthouseTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `The Battle of Guilford Courthouse on March 15, 1781 was the hinge on which the entire Southern Campaign turned. Nathanael Greene led roughly 4,400 men — a mix of Continental regulars and state militia — against Lord Cornwallis's 1,900 battle-hardened British regulars on a wooded hillside in the North Carolina backcountry. Greene lost the field. Cornwallis held it. And yet within seven months Cornwallis surrendered his entire army at Yorktown, and the war was effectively over.

The paradox is not accidental. Guilford Courthouse was what military historians call a Pyrrhic victory: Cornwallis won the ground and lost the campaign. His army suffered casualties of around 27 percent in a single afternoon — approximately 532 killed or wounded out of roughly 1,900 engaged. He could not replace those men in North Carolina. Greene could draw on the interior for reinforcements, on the militia that came and went with the seasons, and on the political geography of a backcountry that had never fully accepted British authority. Cornwallis's tactical success left him strategically stranded.

Greene's battle plan was deliberately structured for strategic survival. He arrayed his force in three lines. The first line, North Carolina militia, was positioned at the wood's edge along the New Garden Road with orders to fire two volleys and fall back — an instruction that recognized both the militia's capabilities and their limits. The second line, Virginia militia under Edward Stevens, held the middle ground. The third line, Continental regulars from Maryland and Virginia, waited on the high ground around the courthouse. Cornwallis would have to fight through all three to claim the field, and each engagement would cost him men he couldn't replace.

The most consequential moment came when the British line began to buckle at the third line. Lieutenant Colonel James Webster was mortally wounded attempting to hold the right flank. The 1st Maryland Continental Regiment under Colonel John Gunby initially gave way and then reformed and counterattacked — a recovery under fire that reversed what had looked like a rout and threw the British advance into confusion. To stop the American counterattack, Cornwallis ordered grapeshot fired into the melee, accepting that the shot would hit both sides. It did. The advance stopped. The British held the courthouse ground. Greene withdrew in good order. Cornwallis won the field and lost the war.`,
};

// ============================================================================
// GUILFORD COURTHOUSE — PEOPLE
// ============================================================================

export const guilfordCourthousePeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-nathanael-greene',
      name: 'Major General Nathanael Greene',
      roles: ['Continental Army General', 'Southern Department Commander'],
      bioShort: 'Rhode Island Quaker who became Washington\'s most capable general. Commanded the Southern Department from December 1780, rebuilding the shattered army and fighting a campaign of strategic attrition that expelled British forces without winning a single tactical victory.',
      birthYear: 1742,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Commanded the American forces at Guilford Courthouse; designed the three-line defense that bled Cornwallis into strategic paralysis.',
  },
  {
    person: {
      id: 'person-charles-cornwallis',
      name: 'General Lord Charles Cornwallis',
      roles: ['British General', 'Southern Army Commander', 'Lieutenant General'],
      bioShort: 'British general who won the field at Guilford Courthouse but suffered 27 percent casualties his army could not replace. His grapeshot order into his own troops reflected his desperation. He surrendered at Yorktown seven months later.',
      birthYear: 1738,
      deathYear: 1805,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Commanded British forces at Guilford Courthouse; his tactical victory cost him the strategic capability to continue the Carolina campaign.',
  },
  {
    person: {
      id: 'person-james-webster',
      name: 'Lieutenant Colonel James Webster',
      roles: ['British Infantry Commander', 'Regiment Commander'],
      bioShort: 'British officer commanding the right flank at Guilford Courthouse; mortally wounded rallying troops against the American third line. Cornwallis wept openly at his death on March 23, 1781.',
      birthYear: 1743,
      deathYear: 1781,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Commanded the British right wing; his mortal wounding illustrates the human cost of Cornwallis\'s narrow tactical victory.',
  },
  {
    person: {
      id: 'person-william-washington-cavalry',
      name: 'Lieutenant Colonel William Washington',
      roles: ['Continental Army Cavalry Commander', '3rd Continental Light Dragoons'],
      bioShort: 'George Washington\'s distant cousin who commanded Continental cavalry throughout the Southern Campaign. Active at both Cowpens and Guilford Courthouse; his dragoons covered Greene\'s withdrawal.',
      birthYear: 1752,
      deathYear: 1810,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Led Continental cavalry at Guilford Courthouse; covered Greene\'s withdrawal and harassed the British afterward.',
  },
  {
    person: {
      id: 'person-otho-williams',
      name: 'Brigadier General Otho Holland Williams',
      roles: ['Continental Army General', 'Maryland Line Commander', 'Adjutant General'],
      bioShort: 'Maryland officer and Greene\'s most reliable subordinate. Commanded the Guilford Courthouse rear guard that kept the army intact during withdrawal, preventing Cornwallis from converting his tactical victory into annihilation.',
      birthYear: 1749,
      deathYear: 1794,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Commanded Greene\'s rear guard, protecting the army\'s withdrawal and ensuring Cornwallis could not exploit his advantage.',
  },
  {
    person: {
      id: 'person-edward-stevens',
      name: 'Brigadier General Edward Stevens',
      roles: ['Virginia Militia General', 'Second Line Commander'],
      bioShort: 'Virginia militia general commanding the second line. Having seen his men flee at Camden, Stevens stationed riflemen behind his own troops with orders to shoot those who ran — a grim lesson learned from earlier defeat.',
      birthYear: 1745,
      deathYear: 1820,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Commanded the Virginia militia second line; his order to post riflemen behind his own troops reflected the hard lessons of Camden.',
  },
  {
    person: {
      id: 'person-henry-lee-lighthorseharry',
      name: 'Lieutenant Colonel Henry "Light Horse Harry" Lee',
      roles: ['Continental Cavalry Commander', 'Lee\'s Legion Commander'],
      bioShort: 'Virginia cavalry officer commanding Lee\'s Legion. Protected the American left flank at Guilford Courthouse and was among the last units off the field. Father of Robert E. Lee; his memoirs are an essential Southern Campaign primary source.',
      birthYear: 1756,
      deathYear: 1818,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Commanded Lee\'s Legion on the American left flank; his campaign memoirs remain a key primary source.',
  },
  {
    person: {
      id: 'person-john-gunby',
      name: 'Colonel John Gunby',
      roles: ['Continental Army Officer', '1st Maryland Regiment Commander'],
      bioShort: 'Commanded the 1st Maryland at Guilford Courthouse. His regiment\'s initial withdrawal and subsequent counterattack was the battle\'s pivotal moment, forcing Cornwallis to order grapeshot into his own men.',
      birthYear: 1745,
      deathYear: 1807,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Commanded the 1st Maryland at the third line; his regiment\'s counterattack forced Cornwallis\'s desperate grapeshot order.',
  },
];

// ============================================================================
// GUILFORD COURTHOUSE — PLACES
// ============================================================================

export const guilfordCourthousePlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-guilford-courthouse-battlefield',
    name: 'Guilford Courthouse National Military Park',
    placeType: 'BATTLEFIELD',
    description: '220-acre national military park preserving the March 15, 1781 battle ground. Reconstructed positions for all three American lines, trail network, monuments, and museum. Walking the wooded, broken terrain makes legible what documents only partially convey.',
    lat: 36.1283,
    lng: -79.8481,
    address: '2332 New Garden Rd, Greensboro, NC 27410',
    town: { connect: { id: 'us-nc-guilford-courthouse' } },
  },
  {
    id: 'place-guilford-courthouse-monument',
    name: 'Nathanael Greene Monument',
    placeType: 'MONUMENT',
    description: 'Equestrian statue of Greene erected in 1915, marking the approximate third-line position where the battle\'s climactic fighting occurred and where Greene made the decision to withdraw rather than risk his army\'s destruction.',
    lat: 36.1290,
    lng: -79.8475,
    address: 'Guilford Courthouse National Military Park, Greensboro, NC 27410',
    town: { connect: { id: 'us-nc-guilford-courthouse' } },
  },
  {
    id: 'place-guilford-courthouse-museum',
    name: 'Guilford Courthouse National Military Park Visitor Center',
    placeType: 'MUSEUM',
    description: 'Visitor center with exhibits on the battle, Southern Campaign, and soldiers on both sides. Original weapons, period uniforms, topographic maps of the three-line deployment, orientation film, and battlefield trail guides.',
    lat: 36.1285,
    lng: -79.8480,
    address: '2332 New Garden Rd, Greensboro, NC 27410',
    town: { connect: { id: 'us-nc-guilford-courthouse' } },
  },
  {
    id: 'place-guilford-courthouse-cemetery',
    name: 'Guilford Courthouse Battlefield Cemetery',
    placeType: 'CEMETERY',
    description: 'Cemetery within the military park containing graves of soldiers killed on March 15, 1781. Lieutenant Colonel James Webster, mortally wounded in the fighting, is among those commemorated. Among the oldest marked Revolutionary War graves in North Carolina.',
    lat: 36.1288,
    lng: -79.8470,
    address: 'Guilford Courthouse National Military Park, Greensboro, NC 27410',
    town: { connect: { id: 'us-nc-guilford-courthouse' } },
  },
  {
    id: 'place-guilford-courthouse-new-garden-road',
    name: 'New Garden Road (Battle Approach Route)',
    placeType: 'TRAIL',
    description: 'The road Cornwallis advanced along toward the American first line on March 15, 1781. The modern road overlies much of the original route; the NPS trail follows the approximate British line of advance through the same terrain.',
    lat: 36.1300,
    lng: -79.8510,
    address: 'New Garden Rd, Greensboro, NC 27410',
    town: { connect: { id: 'us-nc-guilford-courthouse' } },
  },
  {
    id: 'place-guilford-courthouse-first-line',
    name: 'First American Line Site (North Carolina Militia)',
    placeType: 'LANDMARK',
    description: 'Reconstructed position of the NC militia first line at the wood\'s edge along New Garden Road. A split-rail fence marks the approximate position where militia were ordered to fire two volleys and fall back. Interpretive signs explain Greene\'s layered defense rationale.',
    lat: 36.1270,
    lng: -79.8505,
    address: 'Guilford Courthouse National Military Park, Greensboro, NC 27410',
    town: { connect: { id: 'us-nc-guilford-courthouse' } },
  },
];

// ============================================================================
// GUILFORD COURTHOUSE — EVENTS
// ============================================================================

export const guilfordCourthouseEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-guilford-courthouse-battle',
    name: 'Battle of Guilford Courthouse',
    startDate: new Date('1781-03-15'),
    datePrecision: 'DAY',
    summary:
      'Greene\'s 4,400-man force met Cornwallis\'s 1,900 British regulars on a wooded hillside near the North Carolina backcountry courthouse. The three-line American defense forced the British to fight through repeated engagements. Greene lost the field but inflicted 532 casualties — roughly 27 percent of Cornwallis\'s strength — making further British offensive operations in the Carolinas impossible. Cornwallis withdrew to Wilmington and eventually Virginia, setting in motion the Yorktown campaign.',
    significanceWeight: 97,
    lat: 36.1283,
    lng: -79.8481,
    town: { connect: { id: 'us-nc-guilford-courthouse' } },
  },
  {
    id: 'event-guilford-courthouse-race-to-dan',
    name: 'The Race to the Dan',
    startDate: new Date('1781-02-10'),
    endDate: new Date('1781-02-14'),
    datePrecision: 'DAY',
    summary: 'Cornwallis pursued Greene\'s army in a 200-mile race across NC in February 1781. Greene\'s rear guard under Otho Williams kept Cornwallis at bay while the main army crossed the Dan River into Virginia. The crossing gave Greene time to gather reinforcements before turning south to fight.',
    significanceWeight: 85,
    lat: 36.5785,
    lng: -79.3842,
    town: { connect: { id: 'us-nc-guilford-courthouse' } },
  },
  {
    id: 'event-guilford-courthouse-greene-returns-nc',
    name: 'Greene Re-enters North Carolina',
    startDate: new Date('1781-02-23'),
    datePrecision: 'DAY',
    summary: 'With Virginia Continental reinforcements and additional militia, Greene moved south into NC to engage Cornwallis. His calculation: the army was now strong enough to inflict unacceptable losses even in defeat, and further delay favored the British.',
    significanceWeight: 75,
    lat: 36.4000,
    lng: -79.7500,
    town: { connect: { id: 'us-nc-guilford-courthouse' } },
  },
  {
    id: 'event-guilford-courthouse-first-line-breaks',
    name: 'North Carolina Militia First Line Breaks',
    startDate: new Date('1781-03-15'),
    datePrecision: 'DAY',
    summary: 'Many NC militiamen fled after firing their volleys rather than completing the withdrawal to the second line. Greene had anticipated partial failure. The militia\'s departure, though widely criticized, did force the British to advance under fire before reaching the more disciplined Continental troops.',
    significanceWeight: 70,
    lat: 36.1270,
    lng: -79.8505,
    town: { connect: { id: 'us-nc-guilford-courthouse' } },
  },
  {
    id: 'event-guilford-courthouse-cornwallis-grapeshot',
    name: 'Cornwallis Orders Grapeshot Into the Melee',
    startDate: new Date('1781-03-15'),
    datePrecision: 'DAY',
    summary: 'As the 1st Maryland counterattack threatened the British center, Cornwallis ordered grapeshot fired into the hand-to-hand fighting, knowing it would kill British soldiers as well as Americans. The volley stopped the counterattack. Fox later cited this order in Parliament as evidence of Cornwallis\'s desperation.',
    significanceWeight: 82,
    lat: 36.1290,
    lng: -79.8475,
    town: { connect: { id: 'us-nc-guilford-courthouse' } },
  },
  {
    id: 'event-guilford-courthouse-greene-withdraws',
    name: 'Greene Orders the Army to Withdraw',
    startDate: new Date('1781-03-15'),
    datePrecision: 'DAY',
    summary: 'With the third-line counterattack checked by grapeshot, Greene ordered withdrawal rather than risk the army\'s destruction. Strategically correct: he preserved the force needed to continue the campaign. Cornwallis held the courthouse ground but could not pursue.',
    significanceWeight: 88,
    lat: 36.1285,
    lng: -79.8480,
    town: { connect: { id: 'us-nc-guilford-courthouse' } },
  },
  {
    id: 'event-guilford-courthouse-cornwallis-retreats-wilmington',
    name: 'Cornwallis Retreats to Wilmington',
    startDate: new Date('1781-03-18'),
    datePrecision: 'DAY',
    summary: 'Unable to feed his shattered army in the NC backcountry, Cornwallis marched to Wilmington, arriving April 7 and abandoning the interior to Greene. From Wilmington he turned north toward Virginia — the decision that led directly to Yorktown.',
    significanceWeight: 90,
    lat: 34.2257,
    lng: -77.9447,
    town: { connect: { id: 'us-nc-guilford-courthouse' } },
  },
  {
    id: 'event-guilford-courthouse-parliamentary-debate',
    name: 'Fox and Pitt Debate Guilford Courthouse in Parliament',
    startDate: new Date('1781-04-09'),
    datePrecision: 'DAY',
    summary: 'Fox rose in Parliament to argue that a victory producing such casualties was worse than a defeat. Pitt disputed him. The debate marked the first serious parliamentary questioning of the war\'s continuability and foreshadowed the political crisis that followed Yorktown.',
    significanceWeight: 78,
    lat: 51.4996,
    lng: -0.1248,
    town: { connect: { id: 'us-nc-guilford-courthouse' } },
  },
  {
    id: 'event-guilford-courthouse-webster-dies',
    name: 'Lieutenant Colonel James Webster Dies of Wounds',
    startDate: new Date('1781-03-23'),
    datePrecision: 'DAY',
    summary: 'Eight days after the battle, Webster died of wounds received leading the British right flank. Cornwallis wept publicly. Webster\'s loss, along with other officer casualties, critically weakened British command capacity for the subsequent Virginia campaign.',
    significanceWeight: 68,
    lat: 36.1283,
    lng: -79.8481,
    town: { connect: { id: 'us-nc-guilford-courthouse' } },
  },
  {
    id: 'event-guilford-courthouse-greene-resumes-south-carolina',
    name: 'Greene Moves South to Resume the Carolina Campaign',
    startDate: new Date('1781-04-06'),
    datePrecision: 'DAY',
    summary: 'Rather than follow Cornwallis north, Greene turned south to attack the British posts left behind in SC. Ignoring the main army to dismantle their logistical network was the strategic insight that made the campaign\'s outcome possible. By September 1781, British control was reduced to coastal enclaves.',
    significanceWeight: 92,
    lat: 34.0007,
    lng: -81.0348,
    town: { connect: { id: 'us-nc-guilford-courthouse' } },
  },
];

// ============================================================================
// GUILFORD COURTHOUSE — STORIES
// ============================================================================

export const guilfordCourthouseStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-guilford-courthouse-pyrrhic',
    title: 'The Victor Who Lost',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-nathanael-greene' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Greene knew before the guns fired what the battle was supposed to accomplish. Not a victory — he wasn't going to beat Cornwallis's regulars in a straight fight. He was going to make Cornwallis pay a price the British army in North Carolina could not afford to pay.

The three-line formation was designed with this in mind. Militia in front would fire and fall back. Virginia militia in the second line would give the British more resistance. The Continental regulars in the third — Maryland and Virginia veterans — would make the British work for every foot of the courthouse hill.

What Greene had calculated was that Cornwallis, to win the field, would have to bleed his army down to something that could no longer operate in the North Carolina interior. The march to Wilmington, the turn to Virginia — those weren't bold strategic choices. They were what Cornwallis did because he had no other options.

After the battle, Greene wrote to Joseph Reed: "We fight, get beat, rise, and fight again." He lost at Guilford Courthouse. He lost at Hobkirk's Hill. He lost at Ninety Six. He never won a tactical victory in the entire Southern Campaign. And at the end of it, the British were confined to coastal enclaves, their army at Yorktown marching into captivity. The general who won by losing.`,
    tags: ['Greene', 'Guilford Courthouse', 'Southern Campaign', 'strategy', 'Pyrrhic victory'],
    town: { connect: { id: 'us-nc-guilford-courthouse' } },
  },
  {
    id: 'story-guilford-courthouse-terrain',
    title: 'You Have to Walk It',
    storyType: 'MODERN_VOICE',
    narratorName: 'Park Ranger',
    narratorRole: 'National Park Service, Guilford Courthouse National Military Park',
    verificationStatus: 'VERIFIED',
    textVersion: `People come here having read about the battle with a picture of an open field — ranks of soldiers, volleys at close range, the kind of thing you see in paintings.

Then they walk the trail and they look into the trees. The forest isn't reconstructed — this is essentially the same mixed woodland the armies fought through in 1781. Dense enough that you can't see more than fifty yards in some directions. Broken ground.

Cornwallis couldn't see the American second line from the first. Neither commander could communicate with more than a fraction of his force. The battle happened in segments, in patches of woods, as units found each other and fought and broke and reformed.

That's why Cornwallis's grapeshot order looks different when you stand here. He was trying to stop a crisis he could barely see, in terrain that compressed every decision into seconds. It doesn't justify the decision. But it explains what kind of battle this actually was. Walk the terrain. Everything else makes more sense after that.`,
    tags: ['battlefield', 'terrain', 'Guilford Courthouse', 'military tactics', 'NPS'],
    town: { connect: { id: 'us-nc-guilford-courthouse' } },
  },
];

// ============================================================================
// GUILFORD COURTHOUSE — LESSON PLANS
// ============================================================================

export const guilfordCourthouseLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-nc-guilford-courthouse' } },
    title: 'Guilford Courthouse: Can You Win a Battle by Losing It?',
    gradeRange: '7-10',
    estimatedDuration: '2 class periods',
    summary: 'Students use Guilford Courthouse to explore the difference between tactical victory and strategic success. Using deployment maps, primary accounts, and casualty data, students evaluate whether Greene\'s withdrawal was failure or calculated strategy — and apply the concept of Pyrrhic victory to other historical contexts.',
    lessonData: {
      objectives: [
        'Distinguish tactical victory from strategic success',
        'Analyze Greene\'s three-line defense as a plan to impose unsustainable casualties',
        'Evaluate Cornwallis\'s grapeshot order and its consequences',
        'Connect Guilford Courthouse to the Yorktown campaign',
      ],
      essentialQuestions: [
        'Is it possible to win a war by losing battles?',
        'What does Guilford Courthouse tell us about military victory vs. effectiveness?',
      ],
      materials: [
        'Tactical map showing three American lines and British advance',
        'Casualty table comparing both sides',
        'Greene\'s letter to Joseph Reed ("We fight, get beat, rise, and fight again")',
        'Fox\'s parliamentary speech on Cornwallis\'s pyrrhic victory',
      ],
      activities: [
        { name: 'Map Analysis: Three-Line Defense', duration: '25 minutes', description: 'Students examine the deployment map, identify each line\'s purpose, and evaluate when the American withdrawal became strategically correct.' },
        { name: 'The Grapeshot Decision', duration: '20 minutes', description: 'Evaluate Cornwallis\'s artillery order: tactical necessity, British casualty impact, and what it revealed about British force state. Is firing on your own troops ever defensible?' },
        { name: 'Tracing the Strategic Chain', duration: '20 minutes', description: 'Build a causal chain from Guilford Courthouse to Yorktown using timeline and casualty data. Was Yorktown a direct consequence of Guilford Courthouse?' },
      ],
      assessment: 'Short essay (400-600 words): "Fox told Parliament Cornwallis\'s victory was more damaging than a defeat. Was he right?" Use specific evidence.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information with other information in print and digital texts',
        'CCSS.ELA-LITERACY.WHST.6-8.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.2.6-8: Classify series of historical events and developments as examples of change and/or continuity',
        'D2.His.5.6-8: Explain how and why perspectives of people have changed over time',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-nc-guilford-courthouse' } },
    title: 'The Militia Problem: Why Armies Are Hard to Build',
    gradeRange: '9-12',
    estimatedDuration: '2-3 class periods',
    summary: 'The militia\'s performance at Guilford Courthouse invites inquiry into the Continental Army\'s persistent reliability problem. Students examine why Greene placed militia knowing many would flee, how Stevens\'s extreme measure of stationing riflemen behind his own men reflects the limits of voluntary service, and what the battle reveals about republican ideology and military reality.',
    lessonData: {
      objectives: [
        'Analyze structural differences between Continental regulars and state militia',
        'Evaluate Greene\'s decision to rely on militia knowing many would flee',
        'Assess the ethics of Stevens\'s order to shoot troops who fled',
        'Connect the militia problem to republican ideology and military reality',
      ],
      essentialQuestions: [
        'What are the tradeoffs between a standing army and a citizen militia?',
        'When a commander puts troops in a position expecting failure, is that use or sacrifice?',
      ],
      materials: [
        'Orders issued to militia before the battle',
        'Pension record accounts from militia participants',
        'Greene\'s after-action analysis of militia performance',
        'Stevens\'s account of stationing riflemen behind his own line',
      ],
      activities: [
        { name: 'Who Were the Militia? Building a Profile', duration: '25 minutes', description: 'Using pension records, build a profile of the typical NC militia soldier and compare to a Continental regular. What performance differences would you predict?' },
        { name: 'The Ethics of Stevens\'s Order', duration: '30 minutes', description: 'Evaluate Stevens\'s decision to post riflemen behind his own troops. Legitimate? Effective? Would it be acceptable in a modern context?' },
        { name: 'Ideology vs. Reality', duration: '25 minutes', description: 'Map the Founders\' citizen-soldier ideology against Guilford Courthouse evidence. Where did the ideology hold, where did it break? Did the Revolution succeed because of the militia or despite it?' },
      ],
      assessment: 'Analytical essay (700-900 words): "Greene designed his plan around expected militia behavior. What does this reveal about the limits of republican military service?"',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors for how they treat the same or similar topics',
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in several primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.4.9-12: Analyze complex and interacting factors that influenced the perspectives of people during different historical eras',
        'D2.Civ.2.9-12: Analyze the role of citizens in the design of governmental structures',
        'D2.His.9.9-12: Analyze the relationship between historical sources and the secondary interpretations made from them',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// GUILFORD COURTHOUSE — ADDITIONAL LINKS
// ============================================================================

export const guilfordCourthouseAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-nc-kings-mountain',
    linkType: 'SHARED_THEME',
    reason: 'Both battles destroyed British ability to control the Carolina interior. Kings Mountain (October 1780) eliminated the Loyalist flank; Guilford Courthouse (March 1781) bled the main army into paralysis. Together they define the Southern Campaign\'s turning point.',
    weight: 95,
  },
  {
    toTownId: 'us-sc-cowpens',
    linkType: 'SHARED_PERSON',
    reason: 'Greene commanded the Southern Department for both battles; William Washington\'s cavalry fought at both. The layered three-line defense at Cowpens directly shaped Greene\'s deployment at Guilford Courthouse six weeks later.',
    weight: 98,
  },
  {
    toTownId: 'us-va-yorktown',
    linkType: 'SHARED_EVENT',
    reason: 'Cornwallis\'s 27 percent casualties made the Yorktown campaign inevitable. Unable to remain in the NC interior, he turned north where Washington and Rochambeau trapped him. Guilford Courthouse is the direct strategic cause of Yorktown.',
    weight: 92,
  },
  {
    toTownId: 'us-sc-camden',
    linkType: 'SHARED_THEME',
    reason: 'Camden (August 1780) destroyed the first Southern Army under Gates; Guilford Courthouse proved the reconstituted army under Greene could impose strategic defeat even in tactical loss. The two battles bracket the arc of the Southern Campaign\'s recovery.',
    weight: 85,
  },
];

// ============================================================================
// KINGS MOUNTAIN
// ============================================================================

export const kingsMountainTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `The Battle of Kings Mountain on October 7, 1780 was fought entirely by Americans — on both sides. No British regular soldiers participated. On one side, approximately 900 Patriot "Overmountain Men" from the Watauga settlements of present-day Tennessee, and from Virginia, the Carolinas, and Georgia. On the other, approximately 1,100 Loyalist militia under the command of Major Patrick Ferguson, the only British officer on the field. Ferguson died on the mountain. His command was annihilated. The battle changed the trajectory of the Southern Campaign.

The context requires understanding what had happened in the months before. After the fall of Charleston in May 1780 and the destruction of the second Southern Army at Camden in August, British control of South Carolina appeared essentially complete. Cornwallis was preparing to push into North Carolina and Virginia. Ferguson commanded the left flank of that advance, recruiting and training Loyalist militia across the Carolina backcountry. He sent a message to the Patriot settlements west of the mountains: if they did not cease their opposition, he would cross the mountains, hang their leaders, and lay waste to their country.

The Overmountain Men took the threat as a call to arms rather than a warning. Colonels Isaac Shelby and John Sevier organized a force from the Watauga settlements and moved east over the mountains to find Ferguson. They were joined by units from Virginia under William Campbell and from the Carolinas under Benjamin Cleveland and Joseph Winston. The assembled force — all volunteer, all mounted, all riflemen — numbered around 900 men when they located Ferguson at Kings Mountain, a narrow ridge rising seventy feet above the surrounding plateau on the North Carolina–South Carolina border.

Ferguson chose the site deliberately. The summit of Kings Mountain, he wrote, was the best defensive position in the world and God Almighty himself could not drive him off it. The Overmountain Men surrounded the base and attacked uphill from multiple directions simultaneously. The defenders' muskets were disadvantaged against rifle fire from tree cover below. Ferguson was shot dead on the mountain. The Loyalist force, unable to retreat and refused quarter by some attackers still furious over the Waxhaws massacre five months earlier, suffered approximately 290 killed and 163 wounded; the remaining 700 surrendered. Patriot casualties were around 90 killed and wounded. Cornwallis, receiving news of Ferguson's destruction, canceled his invasion of North Carolina and withdrew to winter quarters in South Carolina. Thomas Jefferson called Kings Mountain the turn of the tide of success. The backcountry Loyalist movement never recovered. The Overmountain Men disappeared back over the mountains and fought no more battles in the Revolution — but the battle they fought reshaped the war.`,
};

// ============================================================================
// KINGS MOUNTAIN — PEOPLE
// ============================================================================

export const kingsMountainPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-patrick-ferguson',
      name: 'Major Patrick Ferguson',
      roles: ['British Army Officer', 'Loyalist Militia Commander', 'Firearms Inventor'],
      bioShort: 'The only British regular at Kings Mountain, commanding 1,100 Loyalist militia. Inventor of the Ferguson breech-loading rifle and one of the army\'s most capable officers. His ultimatum to the Overmountain settlements triggered the campaign that killed him.',
      birthYear: 1744,
      deathYear: 1780,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Commanded the Loyalist force at Kings Mountain; killed attempting to rally his troops. His death ended the British left flank of the Carolina invasion.',
  },
  {
    person: {
      id: 'person-isaac-shelby',
      name: 'Colonel Isaac Shelby',
      roles: ['Overmountain Leader', 'Watauga Settlement Militia Commander', 'First Governor of Kentucky'],
      bioShort: 'Co-organizer of the Overmountain Men who led Watauga forces at Kings Mountain. His decision to respond to Ferguson\'s ultimatum offensively rather than defensively was the strategic insight that made the battle possible. Later became the first governor of Kentucky.',
      birthYear: 1750,
      deathYear: 1826,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Co-organized the Overmountain Men and co-commanded at Kings Mountain; his aggressive response to Ferguson\'s ultimatum shaped the campaign.',
  },
  {
    person: {
      id: 'person-john-sevier',
      name: 'Colonel John Sevier',
      roles: ['Overmountain Leader', 'Watauga Settlement Militia Commander', 'First Governor of Tennessee'],
      bioShort: 'Shelby\'s co-organizer of the Overmountain expedition, commanding the Nolachucky settlements. His riflemen used the wooded slopes to maintain fire superiority over Ferguson\'s musket-armed Loyalists. Became the first governor of Tennessee and most celebrated figure of the backcountry Revolution.',
      birthYear: 1745,
      deathYear: 1815,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Co-organized and co-commanded the Overmountain Men at Kings Mountain; later became the first governor of Tennessee.',
  },
  {
    person: {
      id: 'person-william-campbell-km',
      name: 'Colonel William Campbell',
      roles: ['Virginia Militia Commander', 'Overmountain Co-Commander'],
      bioShort: 'Virginia militia colonel who led roughly 400 riflemen — the largest contingent at Kings Mountain — and served as overall commander. His forceful leadership of disparate independent commands directed the encirclement that trapped Ferguson\'s command.',
      birthYear: 1745,
      deathYear: 1781,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Overall Patriot commander at Kings Mountain; led the Virginia contingent and directed the encircling assault.',
  },
  {
    person: {
      id: 'person-benjamin-cleveland',
      name: 'Colonel Benjamin Cleveland',
      roles: ['North Carolina Militia Commander', 'Wilkes County Leader'],
      bioShort: 'Wilkes County, NC militia colonel who contributed roughly 350 men to Kings Mountain and attacked from the north slope. Known for aggressive prosecution of the backcountry civil war against Loyalists.',
      birthYear: 1738,
      deathYear: 1806,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Commanded NC militia at Kings Mountain, attacking from the north slope during the encirclement.',
  },
  {
    person: {
      id: 'person-joseph-winston',
      name: 'Colonel Joseph Winston',
      roles: ['North Carolina Militia Commander', 'Surry County Leader'],
      bioShort: 'Surry County, NC militia colonel whose contingent joined the Kings Mountain encirclement. Winston-Salem, NC takes part of its name from him.',
      birthYear: 1746,
      deathYear: 1815,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Commanded Surry County militia at Kings Mountain; Winston-Salem, NC takes its name partly in his honor.',
  },
  {
    person: {
      id: 'person-virginia-sal',
      name: 'Virginia Sal (Virginia Paul)',
      roles: ['Camp Follower', 'Loyalist Encampment Resident'],
      bioShort: 'One of two women recorded in Ferguson\'s camp — "Virginia Sal" and "Virginia Paul" in contemporary accounts. Killed in the fighting. Their presence represents the invisible world of camp followers whose lives rarely appear in military history.',
      birthYear: null,
      deathYear: 1780,
      verificationStatus: 'ANECDOTAL',
    },
    connectionNote: 'Present in Ferguson\'s camp and killed in the battle; represents the civilian dimension of a conflict fought between American neighbors.',
  },
  {
    person: {
      id: 'person-charles-mcdowell',
      name: 'Colonel Charles McDowell',
      roles: ['Burke and Rutherford County Militia Commander', 'Overmountain Organizer'],
      bioShort: 'NC militia colonel who organized the initial Patriot response to Ferguson and helped assemble the Overmountain coalition. Deferred overall command to Campbell, recognizing that unified direction was essential.',
      birthYear: 1743,
      deathYear: 1815,
      verificationStatus: 'VERIFIED',
    },
    connectionNote: 'Organized the initial response to Ferguson and helped assemble the multi-colony force that fought at Kings Mountain.',
  },
];

// ============================================================================
// KINGS MOUNTAIN — PLACES
// ============================================================================

export const kingsMountainPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-kings-mountain-battlefield',
    name: 'Kings Mountain National Military Park',
    placeType: 'BATTLEFIELD',
    description: '3,945-acre national military park preserving the October 7, 1780 battle ridgeline. Includes a 1.5-mile loop trail, monuments to commanders on both sides, and a museum. The summit ridge — as narrow as 60 feet in places — made the Loyalist position indefensible against encirclement.',
    lat: 35.1327,
    lng: -81.4129,
    address: '2625 Park Rd, Blacksburg, SC 29702',
    town: { connect: { id: 'us-nc-kings-mountain' } },
  },
  {
    id: 'place-kings-mountain-museum',
    name: 'Kings Mountain National Military Park Visitor Center',
    placeType: 'MUSEUM',
    description: 'Exhibits on the battle, the Overmountain Men\'s journey, and the backcountry civil war. Artifacts include period weapons, a reproduction Ferguson breech-loading rifle, period clothing, and maps of the encircling assault.',
    lat: 35.1330,
    lng: -81.4125,
    address: '2625 Park Rd, Blacksburg, SC 29702',
    town: { connect: { id: 'us-nc-kings-mountain' } },
  },
  {
    id: 'place-kings-mountain-ferguson-monument',
    name: 'Ferguson Monument',
    placeType: 'MONUMENT',
    description: 'Summit monument marking where Major Patrick Ferguson was killed on October 7, 1780. Shot multiple times, he fell from his horse near the crest and was buried on the mountain. Acknowledged even by enemies as a brave soldier.',
    lat: 35.1331,
    lng: -81.4128,
    address: 'Kings Mountain National Military Park, Blacksburg, SC 29702',
    town: { connect: { id: 'us-nc-kings-mountain' } },
  },
  {
    id: 'place-kings-mountain-state-park',
    name: 'Kings Mountain State Park (Adjacent Living History Farm)',
    placeType: 'LANDMARK',
    description: 'Adjacent SC state park with a living history farm recreating 1780s backcountry settlement life — context for understanding the Overmountain Men as frontier farmers, not professional soldiers, and how their world differed from the tidewater Patriot gentry.',
    lat: 35.1500,
    lng: -81.3900,
    address: '1277 Park Rd, Blacksburg, SC 29702',
    town: { connect: { id: 'us-nc-kings-mountain' } },
  },
  {
    id: 'place-kings-mountain-cemetery',
    name: 'Patriot and Loyalist Mass Grave Site',
    placeType: 'CEMETERY',
    description: 'Area near the summit where Patriot and Loyalist dead were buried after the battle. Ferguson was interred on the mountain where he fell. The proximity of the graves reflects the intimate geography of a battle fought between American neighbors.',
    lat: 35.1328,
    lng: -81.4130,
    address: 'Kings Mountain National Military Park, Blacksburg, SC 29702',
    town: { connect: { id: 'us-nc-kings-mountain' } },
  },
  {
    id: 'place-kings-mountain-overmountain-victory-trail',
    name: 'Overmountain Victory National Historic Trail',
    placeType: 'TRAIL',
    description: '330-mile National Historic Trail tracing the route from Sycamore Shoals in present-day Elizabethton, Tennessee, over the Appalachians to Kings Mountain. Sections pass through historic terrain and are marked for hikers; the full route is commemorated annually.',
    lat: 35.1327,
    lng: -81.4129,
    address: 'Kings Mountain National Military Park, Blacksburg, SC 29702',
    town: { connect: { id: 'us-nc-kings-mountain' } },
  },
];

// ============================================================================
// KINGS MOUNTAIN — EVENTS
// ============================================================================

export const kingsMountainEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-kings-mountain-battle',
    name: 'Battle of Kings Mountain',
    startDate: new Date('1780-10-07'),
    datePrecision: 'DAY',
    summary: 'About 900 Patriot riflemen surrounded and destroyed 1,100 Loyalists under Major Patrick Ferguson on a narrow ridge in present-day South Carolina. The battle lasted under an hour. Ferguson was killed; his entire command killed, wounded, or captured. Patriot losses: roughly 90. Cornwallis received the news and canceled his invasion of North Carolina.',
    significanceWeight: 96,
    lat: 35.1327,
    lng: -81.4129,
    town: { connect: { id: 'us-nc-kings-mountain' } },
  },
  {
    id: 'event-kings-mountain-ferguson-ultimatum',
    name: 'Ferguson\'s Ultimatum to the Overmountain Settlements',
    startDate: new Date('1780-09-10'),
    datePrecision: 'MONTH',
    summary: 'Ferguson sent word to the Watauga settlements: cease resistance or he would march over the mountains, hang their leaders, and lay waste to their country. The ultimatum backfired — Shelby and Sevier organized an offensive expedition rather than wait for a British attack. Ferguson\'s threat transformed a defensive population into the force that killed him.',
    significanceWeight: 80,
    lat: 36.3498,
    lng: -82.2121,
    town: { connect: { id: 'us-nc-kings-mountain' } },
  },
  {
    id: 'event-kings-mountain-sycamore-shoals-muster',
    name: 'Overmountain Men Muster at Sycamore Shoals',
    startDate: new Date('1780-09-25'),
    datePrecision: 'DAY',
    summary: 'About 1,000 volunteers assembled at Sycamore Shoals (present-day Elizabethton, TN) on September 25, 1780. Reverend Samuel Doak delivered a sermon invoking "the sword of the Lord and of Gideon." The assembled riflemen began their march east over the Appalachians toward Ferguson.',
    significanceWeight: 75,
    lat: 36.3370,
    lng: -82.2104,
    town: { connect: { id: 'us-nc-kings-mountain' } },
  },
  {
    id: 'event-kings-mountain-over-the-mountains',
    name: 'Overmountain Men Cross the Appalachians',
    startDate: new Date('1780-09-26'),
    endDate: new Date('1780-10-01'),
    datePrecision: 'DAY',
    summary: 'The Overmountain Men crossed through Yellow Mountain Gap (4,682 feet) in late September 1780, descending into the Carolinas to link up with Virginia and piedmont forces. Moving with horses, cattle, and supplies over mountain terrain, they reached Ferguson before he could receive British reinforcement.',
    significanceWeight: 68,
    lat: 36.0600,
    lng: -82.0700,
    town: { connect: { id: 'us-nc-kings-mountain' } },
  },
  {
    id: 'event-kings-mountain-encirclement',
    name: 'Patriot Forces Encircle Kings Mountain',
    startDate: new Date('1780-10-07'),
    datePrecision: 'DAY',
    summary: 'Campbell deployed the Overmountain Men in a complete encirclement of the ridge, attacking from multiple directions simultaneously. The tactic — possible because all attackers were mounted riflemen — prevented Loyalist retreat and forced Ferguson to fight on all sides. The encirclement was complete in roughly 65 minutes.',
    significanceWeight: 85,
    lat: 35.1327,
    lng: -81.4129,
    town: { connect: { id: 'us-nc-kings-mountain' } },
  },
  {
    id: 'event-kings-mountain-ferguson-killed',
    name: 'Major Patrick Ferguson Is Killed',
    startDate: new Date('1780-10-07'),
    datePrecision: 'DAY',
    summary: 'Ferguson made two attempts to break through the encircling lines, having his horse shot from under him each time. Shot multiple times near the summit, his death removed the one commander who could organize a coherent defense. The Loyalist resistance collapsed within minutes. He was buried on the mountain.',
    significanceWeight: 88,
    lat: 35.1331,
    lng: -81.4128,
    town: { connect: { id: 'us-nc-kings-mountain' } },
  },
  {
    id: 'event-kings-mountain-quarter-controversy',
    name: 'The Quarter Controversy',
    startDate: new Date('1780-10-07'),
    datePrecision: 'DAY',
    summary: 'After white flags were raised, some Patriot attackers continued firing, shouting "Tarleton\'s Quarter" — a reference to the Waxhaws massacre five months earlier. Several Loyalists were killed after surrendering before commanders regained control. The episode reflects the civil war dimension: these were neighbors with accumulated grievances, and the killing did not stop with the military necessity.',
    significanceWeight: 78,
    lat: 35.1327,
    lng: -81.4129,
    town: { connect: { id: 'us-nc-kings-mountain' } },
  },
  {
    id: 'event-kings-mountain-cornwallis-retreats',
    name: 'Cornwallis Cancels the North Carolina Invasion',
    startDate: new Date('1780-10-14'),
    datePrecision: 'MONTH',
    summary: 'Receiving news of Ferguson\'s destruction, Cornwallis retreated from Charlotte south to Winnsboro, SC, canceling his planned invasion of NC and Virginia. He remained in winter quarters while Greene rebuilt the Southern Army — the delay that made Cowpens and Guilford Courthouse possible.',
    significanceWeight: 92,
    lat: 34.3843,
    lng: -81.0890,
    town: { connect: { id: 'us-nc-kings-mountain' } },
  },
  {
    id: 'event-kings-mountain-tory-executions',
    name: 'Loyalist Prisoners Tried and Executed at Bickerstaff\'s',
    startDate: new Date('1780-10-14'),
    datePrecision: 'DAY',
    summary: 'A week after the battle, Patriot commanders convened a drumhead court at Bickerstaff\'s Old Fields. Nine men were convicted; three were hanged before the executions were halted by the approach of Tarleton\'s cavalry. The episode illustrates the thin line between military justice and vengeance in a civil conflict without formal rules of engagement.',
    significanceWeight: 72,
    lat: 35.5200,
    lng: -81.7100,
    town: { connect: { id: 'us-nc-kings-mountain' } },
  },
];

// ============================================================================
// KINGS MOUNTAIN — STORIES
// ============================================================================

export const kingsMountainStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-kings-mountain-civil-war',
    title: 'No British Soldiers',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-isaac-shelby' } },
    verificationStatus: 'VERIFIED',
    textVersion: `The thing people miss about Kings Mountain is who wasn't there. No British regulars. No Continental Army. Just Americans — some fighting for independence, some for the Crown, some because their neighbors were fighting and neutrality had stopped being an option.

Ferguson's Loyalist militia were men from the same backcountry communities as the men who killed them. The civil war running through every county in the Carolina backcountry had been accumulating grievances — burned farms, murdered families, stolen livestock — for two years before October 7, 1780.

When white flags went up and some Overmountain Men kept firing, shouting "Tarleton's Quarter," they were continuing a war that had been fought without rules since before formal armies arrived. The officers eventually stopped it. Three men were hanged at Bickerstaff's a week later after something resembling a trial.

The formal military history stops at the result: 280 Loyalists killed, 700 captured, Ferguson dead, Cornwallis retreating. The human history doesn't stop there.`,
    tags: ['Kings Mountain', 'civil war', 'backcountry', 'Loyalists', 'quarter controversy'],
    town: { connect: { id: 'us-nc-kings-mountain' } },
  },
  {
    id: 'story-kings-mountain-overmountain',
    title: 'They Came Over the Mountains',
    storyType: 'MODERN_VOICE',
    narratorName: 'Public Historian',
    narratorRole: 'Researcher, Overmountain Victory Trail Association',
    verificationStatus: 'VERIFIED',
    textVersion: `Every year in September and October, people walk the Overmountain Victory Trail — over Yellow Mountain Gap, down through the Toe River valley, across the Piedmont to Kings Mountain. It takes about two weeks on foot.

Yellow Mountain Gap is nearly 4,700 feet. In late September it's cold. The Overmountain Men crossed that gap with horses, cattle, and supplies — the logistics of a small army — moving fast because they didn't know if Ferguson would stand and fight or flee before they could reach him.

They weren't professional soldiers. Nobody ordered them to go. They went because a British officer had threatened their homes and families, and waiting had stopped being an option.

They fought for one day and went home. Most never fought another battle. But those sixty-five minutes on a narrow ridge in South Carolina caused Cornwallis to pull back, shifted the Southern Campaign's trajectory, and is part of why there's a country here at all. That's a lot of weight for one afternoon's work.`,
    tags: ['Overmountain Men', 'Watauga', 'backcountry', 'trail', 'commemoration'],
    town: { connect: { id: 'us-nc-kings-mountain' } },
  },
];

// ============================================================================
// KINGS MOUNTAIN — LESSON PLANS
// ============================================================================

export const kingsMountainLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-nc-kings-mountain' } },
    title: 'Kings Mountain: The Revolution as Civil War',
    gradeRange: '7-10',
    estimatedDuration: '2 class periods',
    summary: 'Students use Kings Mountain to examine the Revolution\'s civil war dimension. By analyzing who fought (no British regulars), what grievances drove both sides, and what the "quarter controversy" reveals about military honor in civil conflict, students develop a more complete understanding of what the Revolution actually was for the people who lived it.',
    lessonData: {
      objectives: [
        'Identify the civil war dimension of the Revolutionary War, particularly in the Carolina backcountry',
        'Analyze the motivations of both Patriot and Loyalist participants at Kings Mountain',
        'Evaluate the "quarter controversy" as evidence of the backcountry civil war\'s accumulated grievances',
        'Assess the battle\'s strategic significance for Cornwallis\'s 1780 campaign',
      ],
      essentialQuestions: [
        'Was the American Revolution also a civil war?',
        'How should we think about violence exceeding military necessity in a conflict where rules of war are contested?',
      ],
      materials: [
        'Map of Patriot and Loyalist strength in the Carolina backcountry, 1780',
        'Participant list with home counties and states',
        'Accounts of Loyalist-Patriot grievances in the backcountry, 1778–1780',
        'Strategic map showing Cornwallis\'s planned advance and retreat',
      ],
      activities: [
        { name: 'Who Fought Whom?', duration: '20 minutes', description: 'Examine the participant list and map. Where were fighters from? Does it change how you think about the Revolution knowing this major battle had no British soldiers?' },
        { name: 'The Grievance Inventory', duration: '25 minutes', description: 'Read accounts of Patriot-Loyalist conflict from 1778–1780, construct a grievance inventory for both sides, and discuss how motivations shifted from the political arguments of 1775–76.' },
        { name: 'The Quarter Controversy', duration: '20 minutes', description: 'Compare Kings Mountain\'s "quarter controversy" to the Waxhaws massacre. Is "Tarleton\'s Quarter" explanation or justification? What distinguishes military justice from vengeance?' },
      ],
      assessment: 'Exit ticket (300-400 words): "Was Kings Mountain part of the American Revolution or part of the American Civil War? Argue using specific evidence."',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author\'s point of view or purpose',
        'CCSS.ELA-LITERACY.WHST.6-8.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.4.6-8: Analyze multiple factors that influenced the perspectives of people during different historical eras',
        'D2.His.5.6-8: Explain how and why perspectives of people have changed over time',
        'D2.Civ.5.6-8: Explain the origins, functions, and structure of different systems of government',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-nc-kings-mountain' } },
    title: 'The Overmountain Men: Volunteer Armies and the Limits of Military Service',
    gradeRange: '8-12',
    estimatedDuration: '2 class periods',
    summary: 'The Overmountain Men came over the mountains without orders, fought one battle, and went home. This lesson examines what motivates voluntary military service and how frontier farmers with no formal structure defeated a trained force under one of the army\'s best officers. Students also evaluate Ferguson\'s decision to take the high ground given the specific characteristics of his opponents.',
    lessonData: {
      objectives: [
        'Analyze motivations for voluntary military service in the Overmountain expedition',
        'Evaluate Ferguson\'s decision to hold Kings Mountain ridge against encircling riflemen',
        'Compare Overmountain Men capabilities to Continental regulars and Loyalist militia',
        'Connect battle outcome to Cornwallis\'s strategic cancellation of the NC invasion',
      ],
      essentialQuestions: [
        'What motivates people to fight when no one ordered them to?',
        'Was Ferguson\'s hilltop position a defensible choice or a fatal miscalculation?',
      ],
      materials: [
        'Topographic map of Kings Mountain ridge',
        'Profile: Overmountain Man vs. Loyalist militiaman',
        'Ferguson\'s letter explaining his defensive position choice',
        'Cornwallis\'s response to news of the battle',
      ],
      activities: [
        { name: 'Ferguson\'s Reasoning: Was He Right?', duration: '25 minutes', description: 'Evaluate Ferguson\'s choice of the ridge from topographic evidence. Why did a hilltop seem defensible? Where did his assumptions fail against riflemen in tree cover attacking uphill?' },
        { name: 'Why Did They Go?', duration: '25 minutes', description: 'Examine what drove Overmountain Men to join: Ferguson\'s ultimatum, family defense, community pressure. Compare to reasons for enlisting in formal armies.' },
        { name: 'One Battle and Home', duration: '20 minutes', description: 'Most Overmountain Men returned home and never fought again. Failure of civic commitment or proportionate response? What does this pattern reveal about the many local wars within the formal Revolution?' },
      ],
      assessment: 'Analytical paragraph (350-500 words): "Ferguson called Kings Mountain the best defensive position in the world. Explain why it became the worst."',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.3: Analyze in detail a series of events described in a text',
        'CCSS.ELA-LITERACY.RH.9-10.7: Integrate quantitative or technical analysis with qualitative analysis in print or digital text',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.1.9-12: Evaluate how historical events were shaped by unique circumstances of time and place',
        'D2.His.2.9-12: Analyze change and continuity in historical eras',
        'D2.His.4.9-12: Analyze complex and interacting factors that influenced the perspectives of people during different historical eras',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// KINGS MOUNTAIN — ADDITIONAL LINKS
// ============================================================================

export const kingsMountainAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-nc-guilford-courthouse',
    linkType: 'SHARED_THEME',
    reason: 'Kings Mountain (October 1780) and Guilford Courthouse (March 1781) are the two battles that broke British strategic capability in the Carolinas. Kings Mountain eliminated Cornwallis\'s Loyalist left flank; Guilford Courthouse bled his main army into paralysis. Together they define the Southern Campaign\'s turning point.',
    weight: 95,
  },
  {
    toTownId: 'us-sc-cowpens',
    linkType: 'SHARED_THEME',
    reason: 'Cowpens (January 1781) followed Kings Mountain in the sequence of Patriot victories destroying British offensive capability. All three — Kings Mountain, Cowpens, Guilford Courthouse — define the arc of the Southern Campaign\'s reversal between October 1780 and March 1781.',
    weight: 90,
  },
  {
    toTownId: 'us-sc-charleston',
    linkType: 'SHARED_EVENT',
    reason: 'Charleston\'s fall (May 1780) and Camden (August 1780) created the crisis that made Kings Mountain necessary. The same Southern Campaign that began with Charleston\'s catastrophic surrender ended with the Patriot victories that undid British interior control — Kings Mountain being the first reversal.',
    weight: 85,
  },
  {
    toTownId: 'us-tn-sycamore-shoals',
    linkType: 'SHARED_EVENT',
    reason: 'Sycamore Shoals (present-day Elizabethton, TN) was the muster point where Overmountain Men assembled September 25, 1780 before marching to Kings Mountain. The Overmountain Victory National Historic Trail connects both sites.',
    weight: 92,
  },
];
