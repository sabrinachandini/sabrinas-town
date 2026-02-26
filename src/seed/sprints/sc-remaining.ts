// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// SC Remaining: Ninety Six, Eutaw Springs, Beaufort
// Campaign: Southern Campaign, 1776–1782

import { Prisma } from '@prisma/client';

// ============================================================================
// NINETY SIX
// ============================================================================

export const ninetySixTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Ninety Six, South Carolina sits at the center of a paradox that defines the southern campaign: the British won the siege and lost the war. In May and June of 1781, Lord Rawdon held the fortified post at Ninety Six against Nathanael Greene's Continental forces for twenty-eight days — one of the longest American sieges of the entire Revolutionary War. The British garrison, commanded by Lieutenant Colonel John Harris Cruger, repelled every assault, including a desperate final attack on June 18 that nearly succeeded. Rawdon arrived with reinforcements from Charleston, and Greene withdrew. By any tactical measure, it was a British victory.

Six weeks later, the British abandoned Ninety Six entirely and never came back.

To understand why, you have to understand what Ninety Six was. The town had been a British loyalist stronghold in the South Carolina backcountry since 1775, when the first fighting in the state — predating Charleston, predating Camden — broke out here between Patriot and Loyalist militia in what was effectively a local civil war. The Star Fort that Greene's men besieged in 1781 was not a conventional military installation; it was the physical expression of a Loyalist community's determination to hold its ground.

The backcountry civil war around Ninety Six was vicious in ways the larger military narrative doesn't capture. Neighbors killed neighbors. Families split. The targeting of civilians — burning houses, killing livestock, taking prisoners and executing them without trial — characterized both sides. The 1779 Battle of Kettle Creek in Georgia, the 1780 defeat at Musgrove Mill near Ninety Six, and the running partisan engagements that preceded Greene's formal siege were all part of the same grinding conflict between communities that had chosen different sides.

By the time Greene arrived to besiege the fort, the British position in the South Carolina interior had become strategically untenable. The supply lines from Charleston were too long and too vulnerable to partisan raids. The Loyalist population that the fort was meant to protect was being slowly exhausted and alienated by their own side's inability to guarantee their safety. Even the successful defense of the siege could not change that arithmetic. Rawdon recognized that holding the post required more resources than the British could spare, and he ordered the evacuation.

What Greene had done was not win battles — he lost most of them. What he had done was make every British victory cost more than the British could afford to pay. Ninety Six is the clearest example of that strategy working exactly as intended. The British defended the fort successfully and then walked away from it, because defending it had become impossible to sustain.`,
};

// ============================================================================
// NINETY SIX — PEOPLE
// ============================================================================

export const ninetySixPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-john-harris-cruger',
      name: 'Lieutenant Colonel John Harris Cruger',
      roles: ['British Loyalist Commander', 'De Lancey Brigade Officer'],
      bioShort:
        'New York Loyalist officer commanding the garrison at Ninety Six during Greene\'s 1781 siege. Cruger refused to surrender through twenty-eight days of attack, repelled the final assault on June 18, and held until Rawdon arrived with relief. His defense was one of the most tenacious in the southern campaign.',
      birthYear: 1738,
      deathYear: 1807,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the Ninety Six garrison through the full twenty-eight-day siege, repelling all American assaults until Rawdon arrived with relief in June 1781.',
  },
  {
    person: {
      id: 'person-nathanael-greene',
      name: 'Nathanael Greene',
      roles: ['Continental Army General', 'Southern Department Commander'],
      bioShort:
        'Rhode Island general who commanded the siege of Ninety Six in May–June 1781. Though he failed to take the fort before Rawdon arrived, his campaign of strategic pressure forced the British to abandon Ninety Six six weeks after their successful defense, achieving his strategic goal without winning the tactical engagement.',
      birthYear: 1742,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the American forces besieging Ninety Six; his withdrawal after Rawdon\'s arrival was followed almost immediately by the British abandonment of the post.',
  },
  {
    person: {
      id: 'person-lord-rawdon',
      name: 'Lord Francis Rawdon',
      roles: ['British General', 'South Carolina Commander'],
      bioShort:
        'British general commanding in South Carolina who marched from Charleston with reinforcements to relieve Ninety Six in June 1781. He arrived in time to force Greene\'s withdrawal but then ordered the evacuation of Ninety Six, recognizing the post was indefensible against continued partisan and Continental pressure on his supply lines.',
      birthYear: 1754,
      deathYear: 1826,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Arrived at Ninety Six with relief force in June 1781, forcing Greene\'s withdrawal, then ordered the post abandoned and the garrison withdrawn to Charleston.',
  },
  {
    person: {
      id: 'person-thaddeus-kosciuszko',
      name: 'Thaddeus Kosciuszko',
      roles: ['Continental Army Engineer', 'Polish Officer'],
      bioShort:
        'Polish military engineer serving as chief engineer of the Continental Army\'s Southern Department. At Ninety Six he directed the siege works, including the approach trenches and the construction of a Maham tower — a log structure tall enough to fire down into the Star Fort — that posed the greatest threat to the garrison.',
      birthYear: 1746,
      deathYear: 1817,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Directed the American siege engineering at Ninety Six, designing approach trenches and the Maham tower that threatened the Star Fort\'s defenders.',
  },
  {
    person: {
      id: 'person-henry-lee-jr',
      name: 'Lieutenant Colonel Henry "Light-Horse Harry" Lee',
      roles: ['Continental Army Cavalry Commander', 'Lee\'s Legion Commander'],
      bioShort:
        'Continental cavalry commander whose legion operated throughout the South Carolina backcountry. At Ninety Six his force captured Fort Granby and the stockade fort protecting the town\'s water supply, cutting off the garrison. His aggressive operations during the siege nearly forced a surrender before Rawdon arrived.',
      birthYear: 1756,
      deathYear: 1818,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the force that captured Ninety Six\'s water supply fort during the siege, threatening the garrison with thirst as well as assault.',
  },
  {
    person: {
      id: 'person-thomas-sumter',
      name: 'Brigadier General Thomas Sumter',
      roles: ['South Carolina Militia General', 'Partisan Commander', 'Gamecock'],
      bioShort:
        'South Carolina partisan commander who operated in the upcountry throughout the campaign. Sumter\'s refusal to place his forces under Greene\'s overall command frustrated coordination at Ninety Six and other engagements, but his independent operations tied down British forces that might otherwise have reinforced the garrison.',
      birthYear: 1734,
      deathYear: 1832,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Led partisan operations in the Ninety Six district; his independence from Greene\'s command created coordination difficulties but kept British attention divided.',
  },
  {
    person: {
      id: 'person-patrick-ferguson',
      name: 'Major Patrick Ferguson',
      roles: ['British Officer', 'American Volunteers Commander', 'Militia Organizer'],
      bioShort:
        'British officer who organized Loyalist militia in the Ninety Six district in 1780 and was killed at Kings Mountain in October 1780 by the Overmountain Men. His death shattered the Loyalist militia network he had built in the backcountry, weakening the foundation on which British control of the Ninety Six district rested.',
      birthYear: 1744,
      deathYear: 1780,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Built the Loyalist militia network in the Ninety Six backcountry; his death at Kings Mountain in 1780 undermined British ability to hold the interior.',
  },
  {
    person: {
      id: 'person-andrew-pickens',
      name: 'Brigadier General Andrew Pickens',
      roles: ['South Carolina Militia General', 'Partisan Commander'],
      bioShort:
        'South Carolina militia general who commanded Patriot forces in the Ninety Six district and operated in coordination with Greene more reliably than Sumter did. Pickens\'s knowledge of the backcountry terrain and communities was essential to Greene\'s campaign of cutting British supply lines to the interior posts.',
      birthYear: 1739,
      deathYear: 1817,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Led Patriot militia operations around Ninety Six; his coordination with Greene provided local intelligence and partisan support throughout the siege.',
  },
];

// ============================================================================
// NINETY SIX — PLACES
// ============================================================================

export const ninetySixPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-ninety-six-star-fort',
    name: 'Star Fort — Ninety Six National Historic Site',
    placeType: 'BATTLEFIELD',
    description:
      'The best-preserved earthwork fortification from the southern campaign. The eight-pointed star-shaped redoubt still stands to nearly its original height, surrounded by the approach trenches that Greene\'s engineers dug in 1781. The NPS site interprets both the siege and the longer story of Ninety Six\'s role in the backcountry civil war.',
    lat: 34.1567,
    lng: -82.0182,
    address: '1103 Hwy 248, Ninety Six, SC 29666',
    hours: 'Daily 8am–5pm',
    admission: 'Free',
    website: 'https://www.nps.gov/nisi',
    town: { connect: { id: 'us-sc-ninety-six' } },
  },
  {
    id: 'place-ninety-six-jail-stockade',
    name: 'Ninety Six Stockade and Jail Site',
    placeType: 'LANDMARK',
    description:
      'The site of the log stockade that protected the British-held town itself, adjacent to the Star Fort. During the siege, Henry Lee\'s Legion captured this position, cutting off the garrison\'s access to the water supply from the town well — a threat that nearly forced surrender before Rawdon arrived.',
    lat: 34.1571,
    lng: -82.0190,
    address: 'Ninety Six National Historic Site, SC 29666',
    town: { connect: { id: 'us-sc-ninety-six' } },
  },
  {
    id: 'place-ninety-six-cambridge-site',
    name: 'Cambridge (Old Ninety Six) Village Site',
    placeType: 'LANDMARK',
    description:
      'The location of the colonial village of Cambridge, the original settlement at Ninety Six that predated the fort. The village was a trading post and courthouse town before the Revolution, its name derived from the ninety-six-mile distance from the Cherokee village of Keowee as counted along the trade path. Archaeological remains lie within the NPS site.',
    lat: 34.1560,
    lng: -82.0175,
    address: 'Ninety Six National Historic Site, SC 29666',
    town: { connect: { id: 'us-sc-ninety-six' } },
  },
  {
    id: 'place-ninety-six-black-mingo-trail',
    name: 'Cherokee Trade Path Corridor',
    placeType: 'TRAIL',
    description:
      'The historic overland route connecting Charleston to the Cherokee settlements in the mountains, running through Ninety Six. Control of this corridor made Ninety Six strategically significant to both British and Patriot forces; it was both a supply route and the axis along which backcountry militia moved to and from the fighting.',
    lat: 34.1750,
    lng: -82.0300,
    address: 'Ninety Six area, SC',
    town: { connect: { id: 'us-sc-ninety-six' } },
  },
  {
    id: 'place-ninety-six-museum',
    name: 'Ninety Six National Historic Site Visitor Center',
    placeType: 'MUSEUM',
    description:
      'The NPS visitor center at the Ninety Six battlefield, with exhibits covering the backcountry civil war, the 1775 Battle of Ninety Six, the 1781 siege, and the broader context of the southern campaign. The center provides the interpretive framework for understanding the archaeological and earthwork remains on the site.',
    lat: 34.1565,
    lng: -82.0178,
    address: '1103 Hwy 248, Ninety Six, SC 29666',
    hours: 'Daily 8am–5pm',
    admission: 'Free',
    town: { connect: { id: 'us-sc-ninety-six' } },
  },
  {
    id: 'place-ninety-six-island-ford-road',
    name: 'Island Ford Road Historic Corridor',
    placeType: 'TRAIL',
    description:
      'A section of the original colonial road network radiating from Ninety Six, preserved within the NPS site. This road system made the town a nexus of backcountry communication and supply; whoever controlled Ninety Six controlled movement through a large section of the South Carolina interior.',
    lat: 34.1580,
    lng: -82.0160,
    address: 'Ninety Six National Historic Site, SC 29666',
    town: { connect: { id: 'us-sc-ninety-six' } },
  },
];

// ============================================================================
// NINETY SIX — EVENTS
// ============================================================================

export const ninetySixEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-ninety-six-first-battle-1775',
    name: 'First Battle of Ninety Six',
    startDate: new Date('1775-11-19'),
    datePrecision: 'DAY',
    summary:
      'Patriot militia under Major Andrew Williamson besieged a Loyalist force under Robert Cunningham at the Ninety Six village stockade in November 1775 — one of the first armed engagements of the Revolutionary War in South Carolina. The four-day siege ended in a negotiated truce that satisfied neither side and established the pattern of the backcountry civil war that would continue for six more years.',
    significanceWeight: 75,
    lat: 34.1567,
    lng: -82.0182,
    town: { connect: { id: 'us-sc-ninety-six' } },
  },
  {
    id: 'event-ninety-six-musgrove-mill-1780',
    name: 'Battle of Musgrove Mill',
    startDate: new Date('1780-08-18'),
    datePrecision: 'DAY',
    summary:
      'Patriot militia under Elijah Clarke, James Williams, and Isaac Shelby ambushed a larger Loyalist and British provincial force at Musgrove Mill on the Enoree River, northeast of Ninety Six, on August 18, 1780 — just two days after Camden. The victory demonstrated that Patriot militia could defeat British-backed Loyalist forces in the backcountry even as the regular army was collapsing.',
    significanceWeight: 72,
    lat: 34.5700,
    lng: -81.8600,
    town: { connect: { id: 'us-sc-ninety-six' } },
  },
  {
    id: 'event-ninety-six-kings-mountain-1780',
    name: 'Battle of Kings Mountain',
    startDate: new Date('1780-10-07'),
    datePrecision: 'DAY',
    summary:
      'Overmountain Men from Virginia, North Carolina, and South Carolina surrounded and destroyed Patrick Ferguson\'s Loyalist force atop Kings Mountain, near the North Carolina border. Ferguson, who had organized the Loyalist militia network supporting Ninety Six and other British interior posts, was killed. The battle shattered the Loyalist militia structure in the upcountry and forced Cornwallis to abandon his first North Carolina invasion.',
    significanceWeight: 92,
    lat: 35.1300,
    lng: -81.3950,
    town: { connect: { id: 'us-sc-ninety-six' } },
  },
  {
    id: 'event-ninety-six-huck-defeat-1780',
    name: 'Battle of Huck\'s Defeat',
    startDate: new Date('1780-07-12'),
    datePrecision: 'DAY',
    summary:
      'Patriot militia surprised and destroyed a Loyalist dragoon force under Captain Christian Huck at Williamson\'s Plantation north of Ninety Six in July 1780. Huck had been raiding Patriot settlements and burning homes throughout the district. His defeat was one of the first significant Patriot successes after Charleston\'s fall and demonstrated that British control of the backcountry was never complete.',
    significanceWeight: 65,
    lat: 34.9400,
    lng: -81.3800,
    town: { connect: { id: 'us-sc-ninety-six' } },
  },
  {
    id: 'event-ninety-six-greene-arrives-1781',
    name: 'Greene Begins Siege of Ninety Six',
    startDate: new Date('1781-05-22'),
    datePrecision: 'DAY',
    summary:
      'Nathanael Greene arrived at Ninety Six on May 22, 1781 with approximately 1,000 men and began formal siege operations against the Star Fort. Kosciuszko directed the construction of approach parallels and siege works. The garrison of 550 Loyalists under Cruger immediately went to work constructing a sandbag parapet atop the fort\'s earthworks to defend against fire from Greene\'s Maham tower.',
    significanceWeight: 82,
    lat: 34.1567,
    lng: -82.0182,
    town: { connect: { id: 'us-sc-ninety-six' } },
  },
  {
    id: 'event-ninety-six-final-assault-1781',
    name: 'Final American Assault on Star Fort',
    startDate: new Date('1781-06-18'),
    datePrecision: 'DAY',
    summary:
      'With intelligence that Rawdon\'s relief column was only days away, Greene ordered a final assault on the Star Fort on June 18. Two columns of picked men, commanded by Lieutenants Duval and Hatton, attempted to pull down the parapet with hooks on poles. Cruger\'s garrison repelled the attack with fierce hand-to-hand fighting in the ditch. Several Americans entered the fort but were driven out. The assault failed with significant casualties.',
    significanceWeight: 85,
    lat: 34.1567,
    lng: -82.0182,
    town: { connect: { id: 'us-sc-ninety-six' } },
  },
  {
    id: 'event-ninety-six-rawdon-relief-1781',
    name: 'Rawdon Relieves Ninety Six',
    startDate: new Date('1781-06-21'),
    datePrecision: 'DAY',
    summary:
      'Lord Rawdon arrived at Ninety Six on June 21, 1781 with fresh troops from Charleston, forcing Greene to lift the siege and withdraw. The garrison had held for twenty-eight days. Greene retreated north into the hills to rest his army. The British had successfully defended their most important interior post.',
    significanceWeight: 78,
    lat: 34.1567,
    lng: -82.0182,
    town: { connect: { id: 'us-sc-ninety-six' } },
  },
  {
    id: 'event-ninety-six-british-evacuation-1781',
    name: 'British Abandon Ninety Six',
    startDate: new Date('1781-07-01'),
    datePrecision: 'MONTH',
    summary:
      'Six weeks after successfully defending the post, Lord Rawdon ordered the evacuation of Ninety Six. The Loyalist civilian population that had sheltered under the fort\'s protection — several hundred families — were forced to abandon their homes and follow the British column toward Charleston. The town and fort were left to be reoccupied by Patriot forces. The British never returned.',
    significanceWeight: 88,
    lat: 34.1567,
    lng: -82.0182,
    town: { connect: { id: 'us-sc-ninety-six' } },
  },
  {
    id: 'event-ninety-six-loyalist-exodus-1781',
    name: 'Loyalist Families Evacuate the Backcountry',
    startDate: new Date('1781-07-10'),
    datePrecision: 'MONTH',
    summary:
      'The British withdrawal from Ninety Six set in motion a massive displacement of Loyalist civilians from the South Carolina backcountry. Hundreds of families, many of whom had been fighting their Patriot neighbors since 1775, abandoned their land and farms and moved toward Charleston or British-held coastal areas. Many eventually evacuated to East Florida, Nova Scotia, or the Bahamas when the war ended.',
    significanceWeight: 70,
    lat: 34.1567,
    lng: -82.0182,
    town: { connect: { id: 'us-sc-ninety-six' } },
  },
  {
    id: 'event-ninety-six-site-preservation-1976',
    name: 'Ninety Six Designated National Historic Site',
    startDate: new Date('1976-08-26'),
    datePrecision: 'DAY',
    summary:
      'Congress designated Ninety Six a National Historic Site in 1976, preserving the Star Fort earthworks, the approach trenches, the village archaeological remains, and the surrounding landscape. The site is one of the best-preserved Revolutionary War earthwork fortifications in the country, and the NPS interpretation covers both the military siege and the longer story of the backcountry civil war.',
    significanceWeight: 55,
    lat: 34.1567,
    lng: -82.0182,
    town: { connect: { id: 'us-sc-ninety-six' } },
  },
];

// ============================================================================
// NINETY SIX — STORIES
// ============================================================================

export const ninetySixStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-ninety-six-cruger-defense',
    title: 'Twenty-Eight Days',
    storyType: 'HISTORICAL_VOICE',
    verificationStatus: 'VERIFIED',
    textVersion: `Cruger had 550 men. Greene had a thousand, and more militia operating on his flanks. Cruger had no way to know when or whether relief would come — Rawdon was still organizing his column in Charleston, and communications between the fort and the coast ran through partisan country that Greene\'s forces were actively watching.

The siege began on May 22. By the first week of June, Greene\'s Maham tower — a timber frame tall enough to fire down into the fort — had been raised within range of the Star Fort. The garrison responded by piling sandbags on top of the parapet, raising the height enough to restore cover. The daily fire from the tower killed and wounded men steadily.

On June 18, Greene received word that Rawdon was three days away. He ordered the assault that night. Two picked detachments went in with poles fitted with iron hooks, tasked with pulling down the sandbag parapet. They reached the ditch. Some of them got into the fort. Cruger\'s men fought them out of it hand to hand.

The next morning the assault had failed and Greene knew it. He began preparations to lift the siege. Rawdon arrived on June 21. The garrison had held.

What Cruger could not have known — what Rawdon understood and acted on almost immediately — was that the tactical success was meaningless. The garrison had held the fort. The supply lines to it could not hold. Six weeks later, Cruger marched his men out of Ninety Six for the last time, the Loyalist families who had sheltered there trailing behind them, heading for a coast that could not accommodate them all.`,
    tags: ['siege', 'Star Fort', 'Cruger', 'Ninety Six', 'Loyalist'],
    town: { connect: { id: 'us-sc-ninety-six' } },
  },
  {
    id: 'story-ninety-six-loyalist-displacement',
    title: 'The Cost of Winning',
    storyType: 'MODERN_VOICE',
    narratorName: 'Public Historian',
    narratorRole: 'South Carolina Revolutionary War Studies, Lander University',
    verificationStatus: 'ANECDOTAL',
    textVersion: `The British won the siege of Ninety Six. That sentence is accurate. It\'s also a nearly complete mischaracterization of what happened in 1781.

When I teach this period, I try to get students to think about what victory meant at this stage of the southern campaign. Rawdon arrived, Greene withdrew, and the garrison celebrated. Then Rawdon looked at his supply situation and the state of the roads and the strength of partisan activity between Ninety Six and Charleston, and he ordered the post abandoned.

The Loyalist civilians who had been sheltering under the fort\'s protection — and there were hundreds of them, families who had been fighting their Patriot neighbors since 1775, people who had tied their futures to the British cause because they believed in it or feared the alternative — those families had to leave. Many of them walked to Charleston with what they could carry. Many eventually wound up in East Florida, or Nova Scotia, or the Bahamas. They never came back.

The archaeological and historical record at Ninety Six tells a story that the standard military narrative doesn\'t: a six-year civil war within a war, a community that destroyed itself along political lines, and a defeat that looked, from the outside, like a British victory until you counted the people who had to leave and never returned.

That\'s what Greene\'s campaign actually accomplished. Not winning battles. Making British victories cost more than the British could sustain.`,
    tags: ['Loyalist', 'displacement', 'civil war', 'southern campaign', 'strategy'],
    town: { connect: { id: 'us-sc-ninety-six' } },
  },
];

// ============================================================================
// NINETY SIX — LESSON PLANS
// ============================================================================

export const ninetySixLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-sc-ninety-six' } },
    title: 'The Backcountry Civil War: Ninety Six and the War Within the War',
    gradeRange: '6-9',
    estimatedDuration: '2-3 class periods',
    summary:
      'The Revolutionary War in South Carolina was simultaneously a war of independence and a civil war between Patriot and Loyalist neighbors. This lesson uses Ninety Six as a case study for understanding what that internal conflict looked like: who chose sides and why, how violence between communities escalated, and what happened to the losers when the war ended. Students analyze why the backcountry civil war was more brutal than the conventional military campaigns and examine the fate of Loyalist civilians displaced from the Ninety Six district.',
    lessonData: {
      subject: 'US History / Social Studies',
      objectives: [
        'Students will explain the origins of the Patriot-Loyalist conflict in the South Carolina backcountry',
        'Students will analyze why neighbors chose different sides in 1775–1776 and what factors drove those choices',
        'Students will trace the escalation of violence in the backcountry civil war and identify what made it different from conventional military operations',
        'Students will evaluate what happened to Loyalist families after the British abandoned Ninety Six and connect that displacement to broader patterns of the war\'s aftermath',
      ],
      essentialQuestions: [
        'When a revolution divides a community, what determines which side people choose?',
        'Why does civil war — neighbors fighting neighbors — tend to be more brutal than conventional military conflict?',
        'What do we owe to people who chose the losing side of a political conflict?',
      ],
      materials: [
        'Map of South Carolina backcountry showing Patriot and Loyalist strongholds, 1775–1781',
        'Adapted account of the 1775 Battle of Ninety Six (first engagement of the war in SC)',
        'Timeline of partisan engagements in the Ninety Six district, 1780–1781',
        'Primary source: petition of Loyalist refugees to the British government, post-1782',
        'NPS site plan of Ninety Six National Historic Site',
      ],
      activities: [
        {
          name: 'Choosing Sides',
          duration: '25 minutes',
          description:
            'Students read profiles of three fictional backcountry families in 1775 — one with strong economic ties to Charleston merchants, one with recent Scottish immigrant roots and loyalty to the Crown, one with grievances against the coastal Patriot establishment — and decide which side each would likely support. Class discussion: what factors mattered most in the backcountry?',
        },
        {
          name: 'Six Years of Partisan War',
          duration: '20 minutes',
          description:
            'Using a timeline of backcountry engagements, students trace the pattern of escalation from 1775 through 1781. They identify three moments when the violence appeared to escalate and hypothesize what triggered each escalation. Discussion: what distinguishes partisan war from conventional battle, and why does that distinction matter for how communities recover afterward?',
        },
        {
          name: 'The Displacement: What Winning Cost',
          duration: '25 minutes',
          description:
            'Students read the adapted Loyalist refugee petition and discuss: what did these families lose? Who bears responsibility for their displacement? Small groups debate whether the Patriot government had any obligation to the Loyalist civilians who chose the losing side.',
        },
      ],
      assessment:
        'Written response (one paragraph): "Using specific evidence from the lesson, explain why the British defeat at Ninety Six — which looked like a British victory — was actually a strategic loss."',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author\'s point of view or purpose',
        'CCSS.ELA-LITERACY.RH.6-8.9: Analyze the relationship between a primary and secondary source on the same topic',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.4.6-8: Analyze multiple factors that influenced the perspectives of people during different historical eras',
        'D2.Civ.1.6-8: Distinguish the powers and responsibilities of citizens in various governmental and nongovernmental contexts',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-sc-ninety-six' } },
    title: 'Siege Warfare: Engineering, Attrition, and the Logic of the Slow Attack',
    gradeRange: '9-12',
    estimatedDuration: '2 class periods',
    summary:
      'The 1781 siege of Ninety Six was one of the longest American sieges of the Revolutionary War. This lesson uses the tactical details of the siege to examine how siege warfare worked in the eighteenth century, what decisions commanders faced at each stage, and why Greene chose to fight a siege he ultimately failed to win. Students apply engineering thinking to the Maham tower problem, analyze the command decisions of both Cruger and Greene, and evaluate Greene\'s strategic logic in a campaign where he never won a decisive engagement.',
    lessonData: {
      subject: 'US History / Military History',
      objectives: [
        'Students will explain the basic mechanics of eighteenth-century siege warfare — parallels, approaches, saps, towers, and assaults',
        'Students will analyze the competing command pressures on both Greene and Cruger during the siege',
        'Students will evaluate Greene\'s decision to assault on June 18 knowing Rawdon was days away',
        'Students will assess Greene\'s broader strategic logic: why fighting sieges you don\'t win can still achieve strategic goals',
      ],
      essentialQuestions: [
        'What is the difference between winning a battle and winning a campaign?',
        'When is a tactical defeat compatible with strategic success?',
        'How does engineering shape military outcomes — what can fortifications achieve that soldiers alone cannot?',
      ],
      materials: [
        'Site plan of Ninety Six showing Star Fort, approach trenches, Maham tower position, and water supply stockade',
        'Diagram of eighteenth-century siege approach (parallel trenches, sap forward, battery placement)',
        'Greene\'s correspondence during the siege, adapted',
        'Timeline of key events: May 22 – June 21, 1781',
        'Post-siege assessment: British abandonment of Ninety Six',
      ],
      activities: [
        {
          name: 'The Siege Engineer\'s Problem',
          duration: '30 minutes',
          description:
            'Students examine the site plan and identify: where would you position a Maham tower to have the most effect on the defenders? What would the defenders do to counter it? Students work through the engineering logic of the sandbag response and discuss: what does it tell you about military innovation that defenders immediately found a counter to the tower?',
        },
        {
          name: 'The June 18 Decision',
          duration: '25 minutes',
          description:
            'Students read Greene\'s situation as of June 17: Rawdon three days away, assault has a small chance of success, delay means certain failure. Working in pairs, students construct the argument for and against ordering the assault. Debrief: what information would have changed Greene\'s decision?',
        },
        {
          name: 'Strategic Logic: Winning by Not Losing',
          duration: '20 minutes',
          description:
            'Students examine the outcome: Greene fails to take Ninety Six, Rawdon arrives, British declare victory, then abandon the post six weeks later. Students map Greene\'s entire 1781 campaign — Guilford Courthouse (loss), Hobkirk\'s Hill (loss), Ninety Six (loss), Eutaw Springs (tactical draw) — and the strategic result: British withdrawal from the SC interior. Discussion: what does "winning" mean in this context?',
        },
      ],
      assessment:
        'Analytical paragraph: "Evaluate Greene\'s decision to assault Ninety Six on June 18, 1781. Was it the right decision? Use specific evidence about the tactical situation and the strategic context to support your argument."',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.3: Analyze in detail a series of events described in a text; determine whether earlier events caused later ones or simply preceded them',
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors for how they treat the same or similar topics',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.2.9-12: Analyze change and continuity in historical eras',
        'D2.His.4.9-12: Analyze complex and interacting factors that influenced the perspectives of people during different historical eras',
        'D2.His.9.9-12: Analyze the relationship between historical sources and the secondary interpretations made from them',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// NINETY SIX — ADDITIONAL LINKS
// ============================================================================

export const ninetySixAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-sc-camden',
    linkType: 'SHARED_THEME',
    reason:
      'Camden and Ninety Six were the two principal British interior posts in South Carolina; the fall of British control of both — Camden through partisan pressure, Ninety Six through abandonment — ended British occupation of the interior.',
    weight: 85,
  },
  {
    toTownId: 'us-sc-eutaw-springs',
    linkType: 'SHARED_PERSON',
    reason:
      'Nathanael Greene commanded at both Ninety Six and Eutaw Springs; Henry Lee\'s Legion and Andrew Pickens\'s militia served in both campaigns. The same army fought both engagements three months apart.',
    weight: 88,
  },
  {
    toTownId: 'us-sc-cowpens',
    linkType: 'SHARED_EVENT',
    reason:
      'The Cowpens victory in January 1781 was the strategic turning point that set the conditions for Greene\'s subsequent campaign against Ninety Six. Morgan\'s win degraded the British cavalry strength that had previously kept partisan forces in check.',
    weight: 80,
  },
  {
    toTownId: 'us-sc-charleston',
    linkType: 'SHARED_THEME',
    reason:
      'The British defense of Ninety Six was only possible as long as Charleston remained a secure supply base. The strategic vulnerability of the overland supply line from Charleston to Ninety Six was what made the post ultimately indefensible.',
    weight: 75,
  },
];

// ============================================================================
// EUTAW SPRINGS
// ============================================================================

export const eutawSpringsTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `The Battle of Eutaw Springs on September 8, 1781 was the last major engagement of the Revolutionary War in South Carolina, and it has the distinction of being one of the most misunderstood victories of the entire conflict. By nearly every tactical measure, the British came closer to winning than losing. By every strategic measure, they had already lost.

Nathanael Greene brought approximately 2,200 men to Eutaw Springs — Continentals from Maryland, Delaware, Virginia, and North Carolina, mixed with South Carolina and North Carolina militia. The British force under Lieutenant Colonel Alexander Stewart numbered about 1,800 regulars and Provincials. The terrain was a clearing in the pinewoods near the headwaters of the Santee River, roughly fifty miles northwest of Charleston.

The first phase of the battle went almost entirely in Greene's favor. The militia, led by the remarkable Colonel Otho Williams directing a mixed force of veterans and new recruits, performed far better than militia typically did — holding through two British volleys before withdrawing. The Continentals followed and drove the British back through their camp. For a moment the battle appeared to be the decisive American victory that Greene had been seeking since December 1780.

Then three things happened in quick succession. Some of the Continental soldiers, pushing through the abandoned British camp, stopped to loot rum and supplies. A body of British troops under Major John Marjoribanks had taken cover in a brick house at the edge of the clearing and could not be dislodged. And British regulars, recovering from the initial shock, rallied and counterattacked. The Americans fell back, taking heavy casualties.

When the fighting ended, both sides had lost roughly a quarter of their men. Stewart withdrew toward Charleston. Greene retired to recover. Tactically, it was a bloody draw. Strategically, the British never recovered from it. The casualties at Eutaw Springs stripped the British garrison in South Carolina of its capacity to operate in the field. From September 1781 until the final evacuation in December 1782, British forces were confined essentially to Charleston and its immediate surroundings.

The site today is largely unmarked and undeveloped. The battlefield lies on private land, with a small monument near the site of the action. This absence of visible commemoration makes Eutaw Springs one of the most historically significant and least visited Revolutionary War sites in the country — a battle that ended British military power in a state, remembered mostly by specialists.`,
};

// ============================================================================
// EUTAW SPRINGS — PEOPLE
// ============================================================================

export const eutawSpringsPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-alexander-stewart',
      name: 'Lieutenant Colonel Alexander Stewart',
      roles: ['British Commander', '3rd Regiment of Foot Officer'],
      bioShort:
        'British officer commanding at Eutaw Springs after Lord Rawdon departed for Britain. Stewart\'s force fought Greene to a tactical draw on September 8, 1781, but the casualties stripped his army of its capacity for field operations. He withdrew to Charleston after the battle and remained there until the British evacuation.',
      birthYear: 1739,
      deathYear: 1794,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded British forces at Eutaw Springs; his tactical success in repelling Greene\'s final assault could not reverse the strategic damage the battle inflicted on British field strength.',
  },
  {
    person: {
      id: 'person-otho-williams',
      name: 'Colonel Otho Holland Williams',
      roles: ['Continental Army Colonel', 'Light Corps Commander', 'Maryland Officer'],
      bioShort:
        'Maryland Continental officer who commanded Greene\'s light corps at Eutaw Springs and directed the militia in the opening phase of the battle. Williams was one of the most capable subordinate officers in the southern army, having served at Camden, Guilford Courthouse, Hobkirk\'s Hill, and Eutaw Springs.',
      birthYear: 1749,
      deathYear: 1794,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the light corps at Eutaw Springs and led the militia through the opening phase of the engagement; his steady handling of combined arms troops was critical to the American advance.',
  },
  {
    person: {
      id: 'person-john-marjoribanks',
      name: 'Major John Marjoribanks',
      roles: ['British Infantry Major', '3rd Regiment of Foot'],
      bioShort:
        'British infantry major commanding a flank battalion at Eutaw Springs. When the main British line collapsed, Marjoribanks held his position in a blackjack thicket near the brick house with disciplined fire that stopped the American pursuit. He was mortally wounded late in the battle and died shortly afterward, but his action prevented what might have been a total British defeat.',
      birthYear: 1757,
      deathYear: 1781,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'His defensive stand in the thicket and brick house area of the battlefield saved the British force from complete destruction; he died of wounds shortly after the battle.',
  },
  {
    person: {
      id: 'person-nathanael-greene',
      name: 'Nathanael Greene',
      roles: ['Continental Army General', 'Southern Department Commander'],
      bioShort:
        'Rhode Island general who commanded at Eutaw Springs in what proved to be the last major battle of the southern campaign. Though Greene again failed to achieve a decisive victory, Eutaw Springs accomplished his strategic goal: the British never again operated in the South Carolina interior in strength.',
      birthYear: 1742,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the American forces at Eutaw Springs; the battle was the capstone of his southern campaign strategy of attriting British strength without requiring a decisive battlefield win.',
  },
  {
    person: {
      id: 'person-henry-lee-jr',
      name: 'Lieutenant Colonel Henry "Light-Horse Harry" Lee',
      roles: ['Continental Army Cavalry Commander', 'Lee\'s Legion Commander'],
      bioShort:
        'Continental cavalry commander whose legion screened the American advance at Eutaw Springs and engaged in the fighting around the brick house. Lee\'s memoir of the southern campaign, written decades later, is one of the primary narrative sources for the engagement, though historians note it is colored by his self-promotion.',
      birthYear: 1756,
      deathYear: 1818,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded Lee\'s Legion at Eutaw Springs; his post-war memoir is one of the main narrative accounts of the battle.',
  },
  {
    person: {
      id: 'person-william-henderson',
      name: 'Colonel William Henderson',
      roles: ['South Carolina Continental Officer', '6th SC Regiment'],
      bioShort:
        'South Carolina Continental officer who commanded state troops at Eutaw Springs. Henderson\'s regiment maintained discipline through the chaotic fighting in the British camp and around the brick house, and he was severely wounded during the engagement.',
      birthYear: 1748,
      deathYear: 1788,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded South Carolina state troops at Eutaw Springs; wounded during the engagement in the fighting around the brick house.',
  },
  {
    person: {
      id: 'person-francis-marion',
      name: 'Brigadier General Francis Marion',
      roles: ['Partisan Commander', 'Continental Army Officer', 'Swamp Fox'],
      bioShort:
        'South Carolina partisan commander who brought his militia brigade to Eutaw Springs as part of Greene\'s combined force. Marion\'s men had been operating in the Santee River lowcountry for over a year and provided critical local intelligence about Stewart\'s position and strength.',
      birthYear: 1732,
      deathYear: 1795,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded his partisan militia brigade as part of Greene\'s force at Eutaw Springs; his lowcountry intelligence network had tracked Stewart\'s movements.',
  },
  {
    person: {
      id: 'person-richard-campbell',
      name: 'Colonel Richard Campbell',
      roles: ['Virginia Continental Officer', '1st Virginia Regiment'],
      bioShort:
        'Virginia Continental officer commanding the 1st Virginia Regiment at Eutaw Springs. Campbell led his regiment in the main Continental assault that drove the British from the field in the battle\'s second phase; he was killed during the engagement, one of the most senior American officers to die at Eutaw Springs.',
      birthYear: 1748,
      deathYear: 1781,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded the 1st Virginia Regiment at Eutaw Springs; killed during the Continental assault that drove the British back through their camp.',
  },
];

// ============================================================================
// EUTAW SPRINGS — PLACES
// ============================================================================

export const eutawSpringsPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-eutaw-springs-battlefield',
    name: 'Eutaw Springs Battlefield Site',
    placeType: 'BATTLEFIELD',
    description:
      'The location of the September 8, 1781 engagement, lying on private and state-owned land in Orangeburg County. The battlefield is largely undeveloped but retains its basic terrain features — the clearing, the tree lines, the location of the brick house. A small state monument marks the general area of the fighting.',
    lat: 33.4050,
    lng: -80.3450,
    address: 'Eutaw Springs area, Orangeburg County, SC 29048',
    town: { connect: { id: 'us-sc-eutaw-springs' } },
  },
  {
    id: 'place-eutaw-springs-brick-house-site',
    name: 'Brick House Site (Roche\'s Plantation)',
    placeType: 'LANDMARK',
    description:
      'The location of the brick house that proved decisive in the Battle of Eutaw Springs. Marjoribanks occupied this structure with his flank battalion, and the Americans could not dislodge them by assault. The house anchored the British defense and stopped the American pursuit. The structure no longer stands, but the site is within the battlefield area.',
    lat: 33.4055,
    lng: -80.3440,
    address: 'Eutaw Springs battlefield area, SC 29048',
    town: { connect: { id: 'us-sc-eutaw-springs' } },
  },
  {
    id: 'place-eutaw-springs-monument',
    name: 'Eutaw Springs Battle Monument',
    placeType: 'MONUMENT',
    description:
      'A state-erected monument near the battlefield site, commemorating the September 8, 1781 engagement and the American soldiers who died there. The monument is one of the few visible markers of the battle; the battlefield itself receives relatively few visitors despite its historical significance as the last major engagement of the Revolutionary War in South Carolina.',
    lat: 33.4048,
    lng: -80.3455,
    address: 'SC-6 near Eutawville, SC 29048',
    town: { connect: { id: 'us-sc-eutaw-springs' } },
  },
  {
    id: 'place-eutaw-springs-santee-river-corridor',
    name: 'Santee River Corridor',
    placeType: 'TRAIL',
    description:
      'The Santee River and its surrounding wetlands formed the operational landscape for both Greene\'s army and Marion\'s partisans in the months before and after Eutaw Springs. The river corridor was simultaneously a barrier, a supply route, and a refuge — Marion operated from the Santee swamps throughout 1780–1781.',
    lat: 33.3800,
    lng: -80.3200,
    address: 'Santee River corridor, Orangeburg County, SC',
    town: { connect: { id: 'us-sc-eutaw-springs' } },
  },
  {
    id: 'place-eutaw-springs-mccords-ferry',
    name: 'McCord\'s Ferry Site (Congaree)',
    placeType: 'LANDMARK',
    description:
      'The crossing point on the Congaree River north of Eutaw Springs through which Greene\'s army passed during the southern campaign. Control of river crossings like McCord\'s Ferry determined the operational freedom of both British and American forces in the South Carolina midlands, and partisan activity frequently targeted ferry crossings to cut supply lines.',
    lat: 33.5900,
    lng: -80.6100,
    address: 'Near present-day Calhoun County, SC',
    town: { connect: { id: 'us-sc-eutaw-springs' } },
  },
  {
    id: 'place-eutaw-springs-eutawville',
    name: 'Eutawville — Historic Town Site',
    placeType: 'LANDMARK',
    description:
      'The modern town of Eutawville sits near the site of the 1781 engagement, preserving the name of the springs that once made this a notable geographic feature of the South Carolina midlands. The town\'s small historical society maintains local documentation of the battle and its aftermath.',
    lat: 33.3910,
    lng: -80.3440,
    address: 'Eutawville, SC 29048',
    town: { connect: { id: 'us-sc-eutaw-springs' } },
  },
];

// ============================================================================
// EUTAW SPRINGS — EVENTS
// ============================================================================

export const eutawSpringsEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-eutaw-springs-greene-prepares-1781',
    name: 'Greene Marches to Find Stewart',
    startDate: new Date('1781-09-05'),
    datePrecision: 'DAY',
    summary:
      'Greene marched his combined force toward Stewart\'s position near Eutaw Springs in early September 1781, having received intelligence from Marion\'s partisan network about the British location and strength. Greene assembled approximately 2,200 men — Continentals and militia combined — and approached through the pine barrens of the South Carolina midlands.',
    significanceWeight: 65,
    lat: 33.4050,
    lng: -80.3450,
    town: { connect: { id: 'us-sc-eutaw-springs' } },
  },
  {
    id: 'event-eutaw-springs-battle-opening-1781',
    name: 'Battle of Eutaw Springs — Opening Phase',
    startDate: new Date('1781-09-08'),
    datePrecision: 'DAY',
    summary:
      'The battle opened at approximately 9 a.m. on September 8, 1781. Greene advanced in two lines — militia in front, Continentals behind. The militia performed far better than expected, delivering several volleys before being driven back. The Continental line then advanced and struck the British force, driving them from the field and into and through their camp.',
    significanceWeight: 90,
    lat: 33.4050,
    lng: -80.3450,
    town: { connect: { id: 'us-sc-eutaw-springs' } },
  },
  {
    id: 'event-eutaw-springs-brick-house-1781',
    name: 'American Assault on the Brick House Fails',
    startDate: new Date('1781-09-08'),
    datePrecision: 'DAY',
    summary:
      'As American forces pushed through the British camp, Marjoribanks held his position in the brick house and adjacent thicket with disciplined fire. Several American units attacked the house directly and were repulsed. The British regulars, rallied behind Marjoribanks\'s position, counterattacked and drove back the American advance. The battle shifted from an apparent American rout of the British to a bloody withdrawal.',
    significanceWeight: 88,
    lat: 33.4055,
    lng: -80.3440,
    town: { connect: { id: 'us-sc-eutaw-springs' } },
  },
  {
    id: 'event-eutaw-springs-looting-1781',
    name: 'American Troops Halt to Loot the British Camp',
    startDate: new Date('1781-09-08'),
    datePrecision: 'DAY',
    summary:
      'As Continental soldiers pushed through the abandoned British camp during their advance, some stopped to break open rum barrels and take food and supplies. Greene and his officers were unable to keep the advance moving at the critical moment. Historians debate how much this contributed to the eventual failure; the brick house\'s resistance may have been decisive regardless, but the looting broke the momentum of the American pursuit.',
    significanceWeight: 72,
    lat: 33.4050,
    lng: -80.3450,
    town: { connect: { id: 'us-sc-eutaw-springs' } },
  },
  {
    id: 'event-eutaw-springs-american-withdrawal-1781',
    name: 'Greene Withdraws from Eutaw Springs',
    startDate: new Date('1781-09-08'),
    datePrecision: 'DAY',
    summary:
      'After the brick house assault failed and British regulars counterattacked, Greene ordered a withdrawal from the battlefield in the early afternoon. The American force had suffered approximately 500 casualties — roughly 22% of its strength. Greene pulled back north to recover. Stewart\'s British force, having suffered similar proportional losses, withdrew toward Charleston and never again operated in the South Carolina interior.',
    significanceWeight: 85,
    lat: 33.4050,
    lng: -80.3450,
    town: { connect: { id: 'us-sc-eutaw-springs' } },
  },
  {
    id: 'event-eutaw-springs-stewart-retreats-1781',
    name: 'Stewart Withdraws to Charleston',
    startDate: new Date('1781-09-09'),
    datePrecision: 'DAY',
    summary:
      'The morning after the battle, Stewart abandoned the Eutaw Springs position and began withdrawing toward Charleston. He left his severely wounded behind — including Marjoribanks, who died on the march — under a flag of truce with Greene. The withdrawal confirmed what the casualty figures implied: the British no longer had the field strength to operate beyond Charleston and its immediate vicinity.',
    significanceWeight: 82,
    lat: 33.4050,
    lng: -80.3450,
    town: { connect: { id: 'us-sc-eutaw-springs' } },
  },
  {
    id: 'event-eutaw-springs-congress-gold-medal-1781',
    name: 'Congress Awards Greene a Gold Medal',
    startDate: new Date('1781-10-29'),
    datePrecision: 'MONTH',
    summary:
      'The Continental Congress voted to award Nathanael Greene a gold medal for his conduct at Eutaw Springs, along with formal resolutions thanking him and his army. The recognition acknowledged both the tactical engagement and the larger strategic achievement: the systematic reduction of British power in the southern states over nine months of campaigning.',
    significanceWeight: 60,
    lat: 33.4050,
    lng: -80.3450,
    town: { connect: { id: 'us-sc-eutaw-springs' } },
  },
  {
    id: 'event-eutaw-springs-british-confined-charleston-1782',
    name: 'British Confined to Charleston Perimeter',
    startDate: new Date('1782-01-01'),
    datePrecision: 'YEAR',
    summary:
      'Following Eutaw Springs, British forces in South Carolina were effectively confined to the Charleston peninsula and its immediate defenses for the remainder of the war. The partisan and Continental forces under Greene, Marion, and Sumter controlled the countryside. The British occupation of South Carolina existed in name but not in operational reality for the fourteen months between Eutaw Springs and the final evacuation.',
    significanceWeight: 78,
    lat: 32.7765,
    lng: -79.9311,
    town: { connect: { id: 'us-sc-eutaw-springs' } },
  },
  {
    id: 'event-eutaw-springs-marjoribanks-death-1781',
    name: 'Death of Major Marjoribanks',
    startDate: new Date('1781-10-23'),
    datePrecision: 'MONTH',
    summary:
      'Major John Marjoribanks, whose stand at the brick house had prevented the complete destruction of Stewart\'s force at Eutaw Springs, died of his wounds approximately six weeks after the battle. His death underscored the human cost of the tactical success he had achieved; the British officer corps in South Carolina was being worn away by attrition faster than it could be replaced.',
    significanceWeight: 62,
    lat: 33.4055,
    lng: -80.3440,
    town: { connect: { id: 'us-sc-eutaw-springs' } },
  },
  {
    id: 'event-eutaw-springs-charleston-evacuation-1782',
    name: 'British Evacuation of Charleston',
    startDate: new Date('1782-12-14'),
    datePrecision: 'DAY',
    summary:
      'The British evacuation of Charleston on December 14, 1782, was the final consequence of the Eutaw Springs campaign and the broader Greene strategy. The fourteen months between Eutaw Springs and the evacuation represented the long denouement of a campaign that had been decided, in military terms, by September 1781. Greene led the Continental Army into the city as the British fleet departed.',
    significanceWeight: 88,
    lat: 32.7765,
    lng: -79.9311,
    town: { connect: { id: 'us-sc-eutaw-springs' } },
  },
];

// ============================================================================
// EUTAW SPRINGS — STORIES
// ============================================================================

export const eutawSpringsStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-eutaw-springs-almost-victory',
    title: 'The Battle That Almost Was',
    storyType: 'HISTORICAL_VOICE',
    verificationStatus: 'VERIFIED',
    textVersion: `The battle had gone better than any engagement Greene had fought in the south. The militia — the militia — had held through two British volleys before the Continentals came forward. The British line had buckled, then broken. The American infantry was pushing through the abandoned camp, the enemy in apparent rout.

Then it stopped.

The rum in the British camp was part of it. Men who had been marching and fighting for months broke ranks to take what was in front of them. More consequential was the brick house. Marjoribanks had positioned his battalion there with military precision, and every American attack on it failed. The British regulars, rallied behind his position, counterattacked. The momentum that had seemed irreversible reversed itself in perhaps an hour.

Greene pulled back. When he counted his casualties — roughly 500 men, almost a quarter of his force — he understood what the battle had produced and what it hadn't. The British had lost similar proportions. Stewart was withdrawing to Charleston. The South Carolina interior was effectively clear of British field forces.

He had won again without winning. He had never, in the entire southern campaign, won a decisive engagement. He had won the campaign. The distinction mattered a great deal to him, and it mattered to the men who had fought for him through nine months of defeats that added up to victory. The gold medal Congress sent him was, in its way, an acknowledgment that the kind of war he had fought was not fully captured by the tactical record.`,
    tags: ['Eutaw Springs', 'Greene', 'strategy', 'southern campaign', 'victory'],
    town: { connect: { id: 'us-sc-eutaw-springs' } },
  },
  {
    id: 'story-eutaw-springs-forgotten-battlefield',
    title: 'The Most Significant Battlefield You\'ve Never Visited',
    storyType: 'MODERN_VOICE',
    narratorName: 'Battlefield Preservation Historian',
    narratorRole: 'American Battlefield Trust — Southern Campaign Program',
    verificationStatus: 'ANECDOTAL',
    textVersion: `Eutaw Springs ended British military power in South Carolina. That sentence is not an overstatement. After September 8, 1781, British forces never again operated in the South Carolina interior in any meaningful way. They held Charleston. They held nothing else.

And yet the battlefield is largely unmarked, sits primarily on private land, and receives a fraction of the visitors that Kings Mountain or Cowpens draw annually. There is no national park. There is a small state monument near the road. The terrain — pine barrens, former farmland, the area where the brick house stood — is recognizable if you know what you\'re looking at, but there is very little to tell you what you\'re looking at.

Part of this is the nature of the battle itself. It was tactically inconclusive — both sides suffered heavy casualties, the Americans withdrew, the British claimed the field. The narrative of a clear victory that makes a battlefield legible to the general public isn\'t available here. What Eutaw Springs produced was strategic exhaustion, a British force so badly damaged it could no longer function offensively. That kind of victory is harder to mark with a monument.

What I want people to understand is that the absence of preservation is itself a historical fact that needs explaining. The decision not to protect or interpret Eutaw Springs tells us something about which stories a state and a nation choose to invest in. The battle that ended the British occupation of South Carolina should not be harder to visit than a plantation house from the same era.`,
    tags: ['preservation', 'memory', 'Eutaw Springs', 'battlefield', 'public history'],
    town: { connect: { id: 'us-sc-eutaw-springs' } },
  },
];

// ============================================================================
// EUTAW SPRINGS — LESSON PLANS
// ============================================================================

export const eutawSpringsLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-sc-eutaw-springs' } },
    title: 'Winning Without Winning: Greene\'s Southern Campaign Strategy',
    gradeRange: '8-12',
    estimatedDuration: '2-3 class periods',
    summary:
      'Nathanael Greene lost every major battle of the southern campaign and won the campaign. This lesson uses Eutaw Springs as the capstone example of a strategic approach that achieved its goals through attrition and operational pressure rather than decisive victory. Students map Greene\'s campaign from Camden through Eutaw Springs, analyze the logic of his strategy, and evaluate what "winning" means in a conflict where tactical and strategic success diverge. The lesson connects to broader questions about military strategy, cost-benefit analysis in war, and how outcomes are evaluated.',
    lessonData: {
      subject: 'US History / Strategy and Conflict Studies',
      objectives: [
        'Students will trace the key engagements of Greene\'s southern campaign from December 1780 through September 1781',
        'Students will analyze Greene\'s strategic logic: fighting to impose casualties rather than to win decisive battles',
        'Students will evaluate the Battle of Eutaw Springs as a case study in tactical inconclusion and strategic success',
        'Students will assess what the southern campaign reveals about the relationship between military means and political ends',
      ],
      essentialQuestions: [
        'Can you win a war by not losing battles? What does that look like?',
        'How do we evaluate military success — by who controlled the field, or by who achieved their strategic goals?',
        'What does the southern campaign tell us about the difference between tactical and strategic thinking?',
      ],
      materials: [
        'Campaign map: Greene\'s southern campaign, December 1780 – December 1782',
        'Casualty and outcome table: Guilford Courthouse, Hobkirk\'s Hill, Ninety Six, Eutaw Springs',
        'Greene\'s letter to Washington after Guilford Courthouse, adapted',
        'Congress\'s gold medal resolution for Eutaw Springs',
        'Timeline: Eutaw Springs to British evacuation of Charleston',
      ],
      activities: [
        {
          name: 'The Campaign Map',
          duration: '20 minutes',
          description:
            'Students examine the campaign map and mark each major engagement with its tactical outcome: who controlled the field? Then they mark the strategic outcome: who held the territory after? Students construct a two-column chart comparing tactical and strategic results for each engagement. Discussion: is there a pattern? What does it tell you about Greene\'s approach?',
        },
        {
          name: 'The Eutaw Springs Problem',
          duration: '30 minutes',
          description:
            'Students read the battle narrative and identify the moment where the American advance stopped. They analyze three factors — the looting of the camp, the brick house, the British counterattack — and assign relative responsibility for the failure to achieve a complete victory. Working in small groups, they present their analysis and the class evaluates: does it matter which factor was decisive, given that the strategic outcome was the same?',
        },
        {
          name: 'Defining Victory',
          duration: '20 minutes',
          description:
            'Students read the Congressional resolution awarding Greene a gold medal for Eutaw Springs — a battle he tactically failed to win — and discuss: what was Congress recognizing? Students draft a definition of "military victory" that accounts for both tactical and strategic dimensions, then apply that definition to Eutaw Springs.',
        },
      ],
      assessment:
        'Short essay (400–600 words): "Was Eutaw Springs an American victory? Defend your answer using specific evidence from the battle and the broader campaign context."',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.3: Analyze in detail a series of events described in a text',
        'CCSS.ELA-LITERACY.RH.9-10.9: Compare and contrast treatments of the same topic in several primary and secondary sources',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.1.9-12: Evaluate how historical events and developments were shaped by unique circumstances of time and place',
        'D2.His.2.9-12: Analyze change and continuity in historical eras',
        'D2.His.4.9-12: Analyze complex and interacting factors that influenced the perspectives of people during different historical eras',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-sc-eutaw-springs' } },
    title: 'Militia in the Southern Campaign: Performance, Perception, and Prejudice',
    gradeRange: '6-9',
    estimatedDuration: '2 class periods',
    summary:
      'The Revolutionary War myth holds that militia were unreliable troops who broke and ran in battles. Eutaw Springs complicates that story: the militia opened the battle, held through two British volleys, and performed better than many Continental commanders expected. This lesson uses Eutaw Springs alongside Camden (where militia collapsed) to examine when militia fought well and when they didn\'t, what conditions made the difference, and what the actual Continental commanders thought about their militia partners — as distinct from what historians have said about them.',
    lessonData: {
      subject: 'US History / Military History',
      objectives: [
        'Students will compare militia performance at Camden (1780) and Eutaw Springs (1781)',
        'Students will identify conditions that contributed to effective and ineffective militia performance',
        'Students will analyze primary source accounts of militia from Continental officers, noting the difference between private correspondence and public statements',
        'Students will evaluate the historiographical myth of militia unreliability and assess its accuracy',
      ],
      essentialQuestions: [
        'Is the stereotype of unreliable Revolutionary War militia accurate, or does it depend on circumstances?',
        'What conditions allow citizen soldiers to perform effectively in battle?',
        'How do stereotypes about military units — once established — persist even when the evidence contradicts them?',
      ],
      materials: [
        'Comparison chart: militia performance at Camden vs. Eutaw Springs (unit, position, outcome)',
        'Adapted excerpt: Greene\'s praise of militia conduct at Eutaw Springs',
        'Adapted excerpt: Gates\'s account of militia flight at Camden',
        'Brief secondary source on the origins of the militia-unreliability myth',
        'Otho Williams\'s account of the opening phase at Eutaw Springs',
      ],
      activities: [
        {
          name: 'Camden vs. Eutaw Springs: What Changed?',
          duration: '25 minutes',
          description:
            'Students complete a structured comparison of militia performance in both battles, using the comparison chart. They identify differences in: position in the line, officers commanding them, what was asked of them, and what happened. Discussion: are the differences enough to explain the different outcomes, or were there other factors?',
        },
        {
          name: 'What the Generals Said',
          duration: '25 minutes',
          description:
            'Students read the adapted excerpts from Greene and Gates and discuss: do these primary sources support or complicate the militia-unreliability narrative? Students identify specific language that reveals the authors\' attitudes toward militia and discuss: what interests do Continental officers have in how militia performance is described?',
        },
      ],
      assessment:
        'Exit paragraph: "Based on the evidence from Camden and Eutaw Springs, what made the difference between effective and ineffective militia performance? Use at least two specific examples."',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author\'s point of view or purpose',
        'CCSS.ELA-LITERACY.RH.6-8.9: Analyze the relationship between a primary and secondary source on the same topic',
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
      ],
      c3Framework: [
        'D2.His.5.6-8: Explain how and why perspectives of people have changed over time',
        'D2.His.9.6-8: Analyze the relationship between historical sources and the secondary interpretations made from them',
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// EUTAW SPRINGS — ADDITIONAL LINKS
// ============================================================================

export const eutawSpringsAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-sc-camden',
    linkType: 'SHARED_PERSON',
    reason:
      'Nathanael Greene, Otho Williams, Henry Lee, and Francis Marion all served in both the Camden aftermath and the Eutaw Springs campaign; Camden created the strategic problem that Eutaw Springs resolved.',
    weight: 88,
  },
  {
    toTownId: 'us-sc-ninety-six',
    linkType: 'SHARED_PERSON',
    reason:
      'The same army and commanders who besieged Ninety Six in May–June 1781 fought at Eutaw Springs three months later; the Eutaw Springs campaign was the culmination of the same strategic arc.',
    weight: 90,
  },
  {
    toTownId: 'us-sc-charleston',
    linkType: 'SHARED_THEME',
    reason:
      'Eutaw Springs confined British forces to Charleston; the fourteen months between the battle and the final British evacuation of Charleston in December 1782 were the direct consequence of the damage inflicted at Eutaw Springs.',
    weight: 85,
  },
  {
    toTownId: 'us-sc-cowpens',
    linkType: 'SHARED_PERSON',
    reason:
      'The Cowpens victory set the conditions for Greene\'s southern campaign; the army that fought at Eutaw Springs was built on the momentum of Cowpens and the partisan network that sustained it.',
    weight: 75,
  },
  {
    toTownId: 'us-va-yorktown',
    linkType: 'SHARED_THEME',
    reason:
      'Eutaw Springs and Yorktown were nearly simultaneous strategic blows — Eutaw Springs in September 1781, Yorktown\'s surrender in October 1781 — that together ended British ability to sustain the war in the south.',
    weight: 70,
  },
];

// ============================================================================
// BEAUFORT
// ============================================================================

export const beaufortTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Beaufort, South Carolina occupies a place in the Revolutionary War's social history that its modest military role doesn't explain. The town was a wealthy indigo and rice port before the war, its prosperity built on the enslaved labor of the Sea Island plantations that surrounded it. When the British moved through Port Royal Sound and occupied Beaufort in 1779, the occupation had consequences for the enslaved population of the Sea Islands that rippled through the war's entire subsequent history in the south.

The geography of Beaufort matters. The town sits on Port Royal Island, surrounded by a maze of tidal creeks, salt marshes, and Sea Islands that made it simultaneously accessible to British naval power and difficult for either side to hold by land. The British used Port Royal as a naval anchorage throughout their occupation of South Carolina — it was the natural harbor that Clinton's 1780 expedition used to stage for the assault on Charleston — and the plantation economy of the islands provided food, labor, and material support for British operations.

The enslaved people of the Sea Island plantations responded to the British presence in ways that transformed the social landscape of the lowcountry. When Clinton issued the Philipsburg Proclamation in 1779, thousands of people across the region made the decision to seek British lines. The Sea Islands became a zone of contested authority where the formal categories of the war — Patriot and Loyalist, enslaved and free — broke down in practice. Some enslaved people worked for the British, some fled the region entirely, some were recaptured by Patriot raiders, some died of disease in the disrupted conditions of the occupation.

After the war, Beaufort's Patriot planters returned to find their plantation system severely disrupted. The rebuilding of the Sea Island plantation economy in the 1780s and 1790s was a project of reimposition rather than restoration — a re-establishment of the labor system that the war had interrupted. The successful suppression of the memory of enslaved agency during the Revolution was part of that reimposition.

Beaufort's built environment preserves one of the most complete collections of antebellum architecture in the South, but the story those houses tell is primarily from the antebellum period. The Revolutionary War layer — the British raids, the enslaved people who made decisions about their own freedom, the plantation economy's disruption and reconstruction — is less visible in the landscape but essential to understanding what the town is and how it came to be.`,
};

// ============================================================================
// BEAUFORT — PEOPLE
// ============================================================================

export const beaufortPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-william-moultrie-beaufort',
      name: 'General William Moultrie',
      roles: ['Continental Army General', 'South Carolina Governor', 'Fort Sullivan Defender'],
      bioShort:
        'South Carolina general who commanded the defense of the lowcountry including the Beaufort area and oversaw the failed attempt to resist British encroachment into the Sea Islands. Captured at the Charleston surrender in 1780, he was exchanged in 1782 and later served as governor of South Carolina.',
      birthYear: 1730,
      deathYear: 1805,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded American forces attempting to defend the lowcountry including the Port Royal area against British naval incursions in 1779.',
  },
  {
    person: {
      id: 'person-henry-clinton-beaufort',
      name: 'General Henry Clinton',
      roles: ['British Commander-in-Chief in North America', 'Philipsburg Proclamation Author'],
      bioShort:
        'British commander who used Port Royal as a staging base for the 1780 Charleston expedition. His Philipsburg Proclamation, issued in 1779, directly shaped the decisions of thousands of enslaved people on the Sea Island plantations around Beaufort when British forces occupied the area.',
      birthYear: 1730,
      deathYear: 1795,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Directed British naval and military operations through Port Royal Sound; his Philipsburg Proclamation transformed the social landscape of the Beaufort plantation district.',
  },
  {
    person: {
      id: 'person-thomas-heyward-jr',
      name: 'Thomas Heyward Jr.',
      roles: ['Continental Congress Delegate', 'Declaration Signer', 'Beaufort District Planter'],
      bioShort:
        'South Carolina planter and jurist who signed the Declaration of Independence and represented the lowcountry planter class that dominated Beaufort district politics. Captured by the British in 1780, he was imprisoned at St. Augustine, Florida, and his plantation at White Hall was occupied and damaged during the British raids.',
      birthYear: 1746,
      deathYear: 1809,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Beaufort district planter and Declaration signer whose property was seized during the British occupation; his case illustrates the cost of Patriot leadership to lowcountry planters.',
  },
  {
    person: {
      id: 'person-edward-rutledge',
      name: 'Edward Rutledge',
      roles: ['Continental Congress Delegate', 'Declaration Signer', 'South Carolina Governor'],
      bioShort:
        'Youngest signer of the Declaration of Independence, representing the Charleston and lowcountry planter elite. Rutledge was captured at the Charleston surrender in 1780 and imprisoned at St. Augustine. His political career after the war reflected the priorities of the lowcountry planter class, including the defense of slavery.',
      birthYear: 1749,
      deathYear: 1800,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Represented the lowcountry planter interest that depended on Sea Island plantation labor; his capture and imprisonment at Charleston directly affected his family\'s Beaufort district holdings.',
  },
  {
    person: {
      id: 'person-john-barnwell',
      name: 'Captain John Barnwell',
      roles: ['South Carolina Militia Officer', 'Beaufort District Partisan'],
      bioShort:
        'Beaufort district militia officer who organized local resistance to British raids on the Sea Islands in 1779–1780. Barnwell came from one of the oldest families in the Beaufort district and led the local Patriot force that attempted to contest British control of Port Royal Island and the surrounding Sea Islands.',
      birthYear: 1748,
      deathYear: 1800,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Led local Patriot militia resistance to British raids on the Beaufort Sea Islands from 1779 onward.',
  },
  {
    person: {
      id: 'person-augustin-prevost',
      name: 'Brigadier General Augustin Prevost',
      roles: ['British General', 'East Florida Commander', 'Georgia-Carolina Campaign Leader'],
      bioShort:
        'British general commanding in East Florida who led the 1779 British expedition through Georgia and into South Carolina, raiding the lowcountry including the Beaufort area. His 1779 raid demonstrated British capacity to strike the Sea Island plantation zone and prefigured the larger 1780 Charleston expedition.',
      birthYear: 1723,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Led British forces through the South Carolina lowcountry in 1779, raiding plantations and demonstrating British naval access to the Sea Island zone around Beaufort.',
  },
  {
    person: {
      id: 'person-prince-beaufort-enslaved',
      name: 'Prince (Unnamed Sea Island Freedman)',
      roles: ['Formerly Enslaved Person', 'British Military Laborer'],
      bioShort:
        'Representative of the thousands of enslaved people from Beaufort district Sea Island plantations who sought British lines after the Philipsburg Proclamation. Individual names of most people who escaped to British forces are not preserved in the documentary record; this entry represents a documented category of historical actors whose individual stories are largely lost.',
      verificationStatus: 'ANECDOTAL',
    },
    connectionNote:
      'Represents the enslaved population of Beaufort\'s Sea Island plantations who made the decision to seek British freedom; their collective story is one of the most significant and least documented aspects of Beaufort\'s Revolutionary War history.',
  },
  {
    person: {
      id: 'person-christopher-gadsden-beaufort',
      name: 'Christopher Gadsden',
      roles: ['Patriot Politician', 'Continental Congress Delegate', 'Gadsden Flag Designer'],
      bioShort:
        'South Carolina Patriot leader who designed the Gadsden Flag and represented the lowcountry mercantile interest. Imprisoned at St. Augustine after the Charleston surrender, he refused to take a loyalty oath through forty-two weeks of solitary confinement. His defiance made him a symbol of Patriot resistance during the occupation period.',
      birthYear: 1724,
      deathYear: 1805,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'His imprisonment and defiance of the loyalty oath during the British occupation period directly connected the lowcountry Patriot network including Beaufort district leaders.',
  },
];

// ============================================================================
// BEAUFORT — PLACES
// ============================================================================

export const beaufortPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-beaufort-arsenal',
    name: 'Beaufort Arsenal (Beaufort Volunteer Artillery)',
    placeType: 'MUSEUM',
    description:
      'The early nineteenth-century arsenal building that houses the Beaufort History Museum, which covers the town\'s history from colonial times through the Civil War. The museum includes material on Beaufort\'s Revolutionary War period, including the British occupation of Port Royal and the plantation economy that shaped the district. The building itself postdates the Revolution but sits at the center of Beaufort\'s historic core.',
    lat: 32.4316,
    lng: -80.6698,
    address: '713 Craven St, Beaufort, SC 29902',
    hours: 'Tuesday–Saturday 10am–4pm',
    admission: '$5 adults',
    town: { connect: { id: 'us-sc-beaufort' } },
  },
  {
    id: 'place-beaufort-bay-street-historic-district',
    name: 'Bay Street Historic District',
    placeType: 'LANDMARK',
    description:
      'The waterfront commercial and residential district of Beaufort, which in the colonial and Revolutionary period was the center of the town\'s trade in rice, indigo, and naval stores. The street faces Port Royal Sound and the tidal creeks that made Beaufort simultaneously a prosperous port and a militarily exposed position. Most surviving architecture dates from the antebellum period, but the street plan and waterfront orientation date to the colonial era.',
    lat: 32.4315,
    lng: -80.6690,
    address: 'Bay St, Beaufort, SC 29902',
    town: { connect: { id: 'us-sc-beaufort' } },
  },
  {
    id: 'place-beaufort-st-helenas-church',
    name: 'St. Helena\'s Episcopal Church',
    placeType: 'CHURCH',
    description:
      'One of the oldest churches in South Carolina, established in 1712. St. Helena\'s served as the parish church of the Beaufort planter elite through the colonial and Revolutionary periods. The churchyard contains graves of Revolutionary War-era Beaufort families. During the British occupation of 1779–1781, the church was used as a hospital by British forces, and some of its headstones were reportedly removed for use as operating tables.',
    lat: 32.4322,
    lng: -80.6690,
    address: '505 Church St, Beaufort, SC 29902',
    hours: 'Monday–Friday 10am–12pm, 2pm–4pm',
    admission: 'Free',
    town: { connect: { id: 'us-sc-beaufort' } },
  },
  {
    id: 'place-beaufort-port-royal-sound',
    name: 'Port Royal Sound',
    placeType: 'LANDMARK',
    description:
      'One of the finest natural harbors on the Atlantic coast, Port Royal Sound gave Beaufort its strategic importance throughout the colonial and Revolutionary War period. The British fleet used the sound as an anchorage for the 1780 Charleston expedition and for raids on the Sea Island plantations. Control of Port Royal Sound meant control of the entire Beaufort district.',
    lat: 32.2800,
    lng: -80.7000,
    address: 'Port Royal Sound, Beaufort County, SC',
    town: { connect: { id: 'us-sc-beaufort' } },
  },
  {
    id: 'place-beaufort-tabby-ruins-fort',
    name: 'Old Beaufort Fort (Tabby Ruins)',
    placeType: 'LANDMARK',
    description:
      'Remnants of colonial-era tabby construction near Beaufort, representing the fortification tradition that sought to defend Port Royal Sound from seaborne threats. Tabby — a building material made from oyster shells, lime, sand, and water — was the primary construction material for colonial-era fortifications in the Sea Island lowcountry. The ruins represent the pre-Revolutionary effort to defend this strategic harbor.',
    lat: 32.4200,
    lng: -80.6900,
    address: 'Beaufort area, SC 29902',
    town: { connect: { id: 'us-sc-beaufort' } },
  },
  {
    id: 'place-beaufort-parris-island',
    name: 'Parris Island Historic Site',
    placeType: 'LANDMARK',
    description:
      'Now the location of the Marine Corps Recruit Depot, Parris Island was a Sea Island plantation complex during the Revolutionary War period. The island was directly affected by British naval operations through Port Royal Sound and by the flight of enslaved people to British lines after the Philipsburg Proclamation. The island\'s transition from plantation labor to military use is a thread in the longer history of the Sea Islands.',
    lat: 32.3336,
    lng: -80.6836,
    address: 'Parris Island, SC 29905',
    town: { connect: { id: 'us-sc-beaufort' } },
  },
];

// ============================================================================
// BEAUFORT — EVENTS
// ============================================================================

export const beaufortEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-beaufort-port-royal-colony-1711',
    name: 'Beaufort Town Established at Port Royal',
    startDate: new Date('1711-01-01'),
    datePrecision: 'YEAR',
    summary:
      'The colonial assembly established Beaufort as a town at Port Royal in 1711, formalizing the settlement that had grown around the indigo and rice trade. The town became the commercial and administrative center of a plantation district stretching across the Sea Islands, with an economy entirely dependent on enslaved labor. The wealth accumulated in the decades before the Revolution made Beaufort one of the richest towns per capita in colonial America.',
    significanceWeight: 55,
    lat: 32.4316,
    lng: -80.6698,
    town: { connect: { id: 'us-sc-beaufort' } },
  },
  {
    id: 'event-beaufort-philipsburg-sea-islands-1779',
    name: 'Philipsburg Proclamation Reaches the Sea Islands',
    startDate: new Date('1779-07-01'),
    datePrecision: 'MONTH',
    summary:
      'Clinton\'s Philipsburg Proclamation of June 1779, promising freedom to enslaved people who escaped Patriot owners, reached the Sea Island plantation district around Beaufort through the British naval presence in Port Royal Sound. Thousands of enslaved people across the lowcountry began making the decision to seek British lines, a process that accelerated when British forces physically occupied the Beaufort area.',
    significanceWeight: 85,
    lat: 32.4316,
    lng: -80.6698,
    town: { connect: { id: 'us-sc-beaufort' } },
  },
  {
    id: 'event-beaufort-prevost-raid-1779',
    name: 'British Forces Raid the South Carolina Lowcountry',
    startDate: new Date('1779-04-01'),
    datePrecision: 'MONTH',
    summary:
      'General Prevost led a British force north from East Florida through Georgia and into the South Carolina lowcountry in April 1779, raiding plantations and probing American defenses. The raid reached the outskirts of Charleston before being turned back but demonstrated the vulnerability of the Sea Island plantation zone, including Beaufort, to British naval and land power operating from the south.',
    significanceWeight: 72,
    lat: 32.4316,
    lng: -80.6698,
    town: { connect: { id: 'us-sc-beaufort' } },
  },
  {
    id: 'event-beaufort-british-occupation-port-royal-1779',
    name: 'British Occupy Port Royal Island',
    startDate: new Date('1779-10-01'),
    datePrecision: 'MONTH',
    summary:
      'British naval forces established effective control of Port Royal Sound and the surrounding islands in late 1779, using the harbor as an anchorage and staging base for operations against the South Carolina lowcountry. The British occupation disrupted the plantation operations of the Sea Island district and created the conditions under which enslaved people began moving toward British-controlled areas.',
    significanceWeight: 78,
    lat: 32.2800,
    lng: -80.7000,
    town: { connect: { id: 'us-sc-beaufort' } },
  },
  {
    id: 'event-beaufort-charleston-expedition-stages-1780',
    name: 'British Expedition to Charleston Stages at Port Royal',
    startDate: new Date('1780-01-01'),
    datePrecision: 'MONTH',
    summary:
      'Clinton\'s expedition against Charleston in early 1780 used Port Royal Sound as part of its staging and approach route, with ships from the British fleet passing through the harbor. The expedition of approximately 14,000 men represented the largest British military operation in South Carolina and depended on the naval access that Port Royal provided.',
    significanceWeight: 80,
    lat: 32.2800,
    lng: -80.7000,
    town: { connect: { id: 'us-sc-beaufort' } },
  },
  {
    id: 'event-beaufort-plantation-disruption-1780',
    name: 'Sea Island Plantation Economy Disrupted',
    startDate: new Date('1780-06-01'),
    datePrecision: 'MONTH',
    summary:
      'Following the fall of Charleston in May 1780, the Sea Island plantation economy around Beaufort was severely disrupted by the combination of British raids, enslaved people seeking freedom through British lines, and the breakdown of the Patriot civil government. Crops went unplanted or unharvested, plantation infrastructure fell into disrepair, and the labor force that had made Beaufort wealthy was irreversibly scattered.',
    significanceWeight: 82,
    lat: 32.4316,
    lng: -80.6698,
    town: { connect: { id: 'us-sc-beaufort' } },
  },
  {
    id: 'event-beaufort-freedpeople-escape-1780',
    name: 'Thousands of Enslaved People Seek British Lines',
    startDate: new Date('1780-06-01'),
    datePrecision: 'MONTH',
    summary:
      'In the months following the Charleston surrender and the Philipsburg Proclamation, an estimated several thousand enslaved people from the Beaufort district Sea Island plantations escaped to British-controlled areas. The British used their labor for fortification work, supply transport, and support operations. Many subsequently died of disease; others eventually evacuated with the British fleet in 1782; many were re-enslaved when British protection ended.',
    significanceWeight: 90,
    lat: 32.4316,
    lng: -80.6698,
    town: { connect: { id: 'us-sc-beaufort' } },
  },
  {
    id: 'event-beaufort-british-withdrawal-1782',
    name: 'British Withdraw from Sea Island Zone',
    startDate: new Date('1782-06-01'),
    datePrecision: 'MONTH',
    summary:
      'As the British position in South Carolina collapsed following Eutaw Springs and the strategic loss of the interior, British naval forces withdrew from active operations in the Sea Island zone around Beaufort. The plantation districts began to return to Patriot control, and the process of reimposing the plantation labor system began — a process that required confronting the question of what had happened to the enslaved people who had sought British freedom.',
    significanceWeight: 75,
    lat: 32.4316,
    lng: -80.6698,
    town: { connect: { id: 'us-sc-beaufort' } },
  },
  {
    id: 'event-beaufort-planter-return-1783',
    name: 'Patriot Planters Return to Beaufort District',
    startDate: new Date('1783-01-01'),
    datePrecision: 'YEAR',
    summary:
      'Following the British evacuation of Charleston in December 1782 and the formal end of the war, Patriot planter families who had fled or been imprisoned returned to their Beaufort district properties. They found plantations in disrepair, labor forces scattered or gone, and an economy that required reconstruction. The process of rebuilding was simultaneously an economic project and a political one — reimposing social control over a population that had exercised collective agency during the British occupation.',
    significanceWeight: 70,
    lat: 32.4316,
    lng: -80.6698,
    town: { connect: { id: 'us-sc-beaufort' } },
  },
  {
    id: 'event-beaufort-historic-district-designation',
    name: 'Beaufort Historic District Listed on National Register',
    startDate: new Date('1969-01-01'),
    datePrecision: 'YEAR',
    summary:
      'The Beaufort Historic District, containing one of the most intact concentrations of antebellum architecture in the South, was listed on the National Register of Historic Places in 1969. The designation focused primarily on the antebellum period architecture, but the district also preserves the street plan, church sites, and waterfront orientation that date to the colonial and Revolutionary War era.',
    significanceWeight: 50,
    lat: 32.4316,
    lng: -80.6698,
    town: { connect: { id: 'us-sc-beaufort' } },
  },
];

// ============================================================================
// BEAUFORT — STORIES
// ============================================================================

export const beaufortStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-beaufort-sea-island-freedom',
    title: 'The Calculation at the Water\'s Edge',
    storyType: 'HISTORICAL_VOICE',
    verificationStatus: 'ANECDOTAL',
    textVersion: `The British ships had been in the sound for weeks. Everyone on the plantation knew it. The question was not whether the ships were there — you could see them from the edge of the marsh — but what it meant to walk toward them.

The Philipsburg Proclamation had been read aloud or passed along through networks that the enslaved people of the Sea Islands had built and maintained outside the knowledge of their enslavers. The promise was freedom. The condition was leaving a Patriot owner. The risk was everything that could go wrong between the marsh and the British lines: recapture, punishment, disease, a war that might end badly for the British.

People made this calculation in families, in small groups, over weeks and months. Some decided to go. Some decided to stay because the risk was too high or because family members who could not travel — the elderly, the very young, the sick — could not be left behind. Some who started the crossing were caught before they reached the ships. Some reached the ships and found conditions that were not freedom in any recognizable sense — labor under British authority, in camps where smallpox and dysentery killed people who had survived the passage.

The individual names of most of these people are not recorded. What is recorded is the aggregate: thousands from the lowcountry, hundreds from the Sea Island district alone. The plantation records that survived the war show blank entries where names had been, or brief notations — "gone to the enemy" — that erased the decision behind the absence.

These were people making the most consequential decision of their lives with incomplete information, under conditions of extreme danger, in a war whose outcome nobody could predict. That is the story Beaufort's Revolutionary War history is built on.`,
    tags: ['enslavement', 'freedom', 'Sea Islands', 'Philipsburg', 'agency', 'lowcountry'],
    town: { connect: { id: 'us-sc-beaufort' } },
  },
  {
    id: 'story-beaufort-planter-world',
    title: 'The Houses the Indigo Built',
    storyType: 'MODERN_VOICE',
    narratorName: 'Historic Preservation Specialist',
    narratorRole: 'Beaufort County Historic Preservation Office',
    verificationStatus: 'ANECDOTAL',
    textVersion: `When visitors come to Beaufort, they come for the houses. The antebellum architecture is genuinely extraordinary — a concentration of Greek Revival, Federal, and vernacular styles that makes the historic district one of the most intact in the South. What I try to do is get people to think about what they're not seeing.

The houses date mostly to the 1820s, 1830s, and 1840s. The money that built them came from the Sea Island cotton economy that replaced the indigo and rice economy after the Revolution. What disrupted the economy between the colonial period and the antebellum period — what made the transition from indigo to cotton necessary — was in part the Revolutionary War and the destruction of the labor system that the war enabled.

The houses the visitors admire were built with the wealth accumulated after Patriot planters reimposed control over a population that had exercised collective agency during the British occupation. That doesn't make the architecture less beautiful. But it means that looking at the houses and not asking what preceded them is a specific kind of historical incompleteness.

The Revolutionary War layer of Beaufort's history is present in the landscape if you know where to look: in the church with headstones reportedly used as operating tables during the British occupation; in the waterfront that British ships controlled from 1779 to 1782; in the absence in the plantation records where people's names should be. Learning to see that layer doesn't displace the antebellum story. It makes it more honest.`,
    tags: ['architecture', 'memory', 'plantation economy', 'preservation', 'Sea Islands'],
    town: { connect: { id: 'us-sc-beaufort' } },
  },
];

// ============================================================================
// BEAUFORT — LESSON PLANS
// ============================================================================

export const beaufortLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-sc-beaufort' } },
    title: 'The Sea Islands and Freedom: Enslaved Agency in the Revolutionary War',
    gradeRange: '7-10',
    estimatedDuration: '2-3 class periods',
    summary:
      'The Revolutionary War created a moment of crisis in the Sea Island plantation economy of South Carolina — and within that crisis, thousands of enslaved people made decisions about their own freedom. This lesson uses the Beaufort district Sea Islands as a case study for examining the Philipsburg Proclamation, the decisions enslaved people made in response to it, and what happened to those people when the war ended. Students analyze the gap between legal proclamation and actual freedom, consider how historians recover the history of people whose names were often not preserved, and evaluate what enslaved agency during the Revolution means for how we understand the war.',
    lessonData: {
      subject: 'US History / African American History / Social Studies',
      objectives: [
        'Students will explain the Philipsburg Proclamation and analyze who it applied to, what it promised, and what its limitations were',
        'Students will trace the decisions made by enslaved people in the Beaufort Sea Islands in response to the British presence',
        'Students will identify the range of outcomes for people who sought British lines and evaluate why outcomes varied',
        'Students will assess what enslaved agency during the Revolution reveals about the war\'s social dimensions and the limits of the "freedom" narrative',
      ],
      essentialQuestions: [
        'What does freedom mean when it is offered as a military incentive rather than a moral principle?',
        'How do historians tell the stories of people who left no documents of their own?',
        'What happened to the people who chose the "wrong" side — the British side — of the Revolution?',
      ],
      materials: [
        'Text of the Philipsburg Proclamation (1779), adapted',
        'Map of Sea Island plantation district showing Beaufort and surrounding islands',
        'Plantation records showing "gone to enemy" notations, adapted from period documents',
        'Secondary source excerpt: outcomes for enslaved people who sought British lines',
        'Timeline: Proclamation to Charleston evacuation',
      ],
      activities: [
        {
          name: 'What the Proclamation Said',
          duration: '20 minutes',
          description:
            'Students read the adapted Philipsburg Proclamation and identify: who is included? Who is excluded? What does "freedom" mean in this context — legal status, physical safety, economic autonomy? Students annotate the document and discuss: if you were an enslaved person on a Sea Island plantation in 1779, what would this document mean to you?',
        },
        {
          name: 'Making the Decision',
          duration: '25 minutes',
          description:
            'Students consider the decision-making process of an enslaved person in the Beaufort district in 1780: British ships visible in the sound, a proclamation promising freedom, family members who cannot easily travel, risk of recapture. Working in small groups, students identify the factors for and against attempting to reach British lines and discuss: what would tip the balance?',
        },
        {
          name: 'What Happened Afterward',
          duration: '20 minutes',
          description:
            'Students read the secondary source on outcomes and create a distribution chart of what happened to the people who reached British lines: British military labor, disease death, Nova Scotia, Bahamas, Sierra Leone, re-enslavement. Discussion: what does the range of outcomes tell you about what British "freedom" actually was? What does re-enslavement after the war tell you about the limits of wartime proclamations?',
        },
      ],
      assessment:
        'Written response: "Was the Philipsburg Proclamation an act of liberation or a military strategy? Use evidence from the lesson to support your argument, and address the strongest counterargument to your position."',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author\'s point of view or purpose',
        'CCSS.ELA-LITERACY.RH.6-8.9: Analyze the relationship between a primary and secondary source on the same topic',
      ],
      c3Framework: [
        'D2.His.4.6-8: Analyze multiple factors that influenced the perspectives of people during different historical eras',
        'D2.His.5.6-8: Explain how and why perspectives of people have changed over time',
        'D2.Civ.1.6-8: Distinguish the powers and responsibilities of citizens in various governmental and nongovernmental contexts',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-sc-beaufort' } },
    title: 'Port Royal and Naval Power: Geography, Strategy, and Control',
    gradeRange: '6-9',
    estimatedDuration: '2 class periods',
    summary:
      'Port Royal Sound gave Beaufort its strategic importance — and made it vulnerable. This lesson uses Beaufort\'s geography to examine how naval power shaped the Revolutionary War in the south, why the British valued Port Royal as a base, and what control of the harbor meant for the Sea Island plantation district. Students analyze the connection between geographic assets and military strategy, examine how naval power translated into social disruption, and trace the role of Port Royal in the 1780 Charleston expedition.',
    lessonData: {
      subject: 'US History / Geography / Military Strategy',
      objectives: [
        'Students will identify the geographic features of Port Royal Sound and explain why they gave Beaufort strategic value',
        'Students will analyze how British naval control of Port Royal connected to the broader southern campaign strategy',
        'Students will trace the role of Port Royal in the 1780 Charleston expedition',
        'Students will evaluate how geographic control translated into social and economic disruption for the Sea Island plantation district',
      ],
      essentialQuestions: [
        'How does geography determine military strategy — what assets does a harbor give you, and what vulnerabilities?',
        'When military forces control a region, how does that control affect civilian populations?',
        'What is the relationship between naval power and the ability to project military force inland?',
      ],
      materials: [
        'Map of Sea Island coast showing Port Royal Sound, tidal creeks, and navigable channels',
        'Comparison map: British naval bases in the south, 1779–1782',
        'Excerpt from Clinton\'s 1780 expedition orders noting Port Royal as staging point',
        'Timeline: British naval presence in Port Royal Sound, 1779–1782',
        'Diagram of Sea Island geography: barriers, tidal access, plantation locations',
      ],
      activities: [
        {
          name: 'The Strategic Value of Port Royal',
          duration: '25 minutes',
          description:
            'Students examine the map of Port Royal Sound and identify: why is this harbor valuable? What can you do from here that you cannot do from open ocean? What are the vulnerabilities — how could a defending force contest control of this harbor? Students compare Port Royal to Charleston harbor and discuss: why would the British want both?',
        },
        {
          name: 'Naval Power and Social Disruption',
          duration: '25 minutes',
          description:
            'Students trace on the map the connection between British ships in Port Royal Sound and the plantation districts on the surrounding Sea Islands. Discussion: if you can reach any point on these islands from the water, what does that mean for plantation operations? For enslaved people considering escape? For Patriot landowners trying to defend their property? Students connect geographic control to social disruption.',
        },
      ],
      assessment:
        'Exit ticket: "Explain in two or three sentences why Port Royal Sound was strategically important to the British and how that importance affected the civilians — both free and enslaved — living in the Beaufort district."',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information with other information in print and digital texts',
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.3: Identify key steps in a text\'s description of a process related to history',
      ],
      c3Framework: [
        'D2.Geo.2.6-8: Use maps, satellite images, photographs, and other representations to explain relationships between the locations of places and regions and their environmental characteristics',
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.4.6-8: Analyze multiple factors that influenced the perspectives of people during different historical eras',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// BEAUFORT — ADDITIONAL LINKS
// ============================================================================

export const beaufortAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-sc-charleston',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason:
      'Port Royal Sound was a critical staging point for the 1780 British expedition against Charleston; the social history of enslaved people seeking freedom in the Beaufort district connects directly to the larger Charleston occupation and the Philipsburg Proclamation.',
    weight: 88,
  },
  {
    toTownId: 'us-sc-camden',
    linkType: 'SHARED_THEME',
    reason:
      'The Sea Island plantation economy that made Beaufort wealthy depended on the same social structure the British occupation disrupted throughout South Carolina; the Camden and Beaufort stories are parallel expressions of the war\'s social dimensions.',
    weight: 65,
  },
  {
    toTownId: 'us-sc-eutaw-springs',
    linkType: 'SHARED_THEME',
    reason:
      'Francis Marion\'s partisan network, which fed intelligence to Greene before Eutaw Springs, operated throughout the lowcountry including the Beaufort district; the same geographic landscape connected both stories.',
    weight: 70,
  },
  {
    toTownId: 'us-ga-savannah',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason:
      'Savannah and Beaufort were the two principal British naval anchors on the Georgia-South Carolina coast; Prevost\'s 1779 raid that threatened the Beaufort district originated from the Savannah-East Florida British base.',
    weight: 78,
  },
];
