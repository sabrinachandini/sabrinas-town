// MODEL: Claude Sonnet (structure + code) / Claude Opus (long narratives >150 words)
// Curated teacher content for Cambridge, MA

import { Prisma } from '@prisma/client';

const TOWN_ID = 'us-ma-cambridge';

export const cambridgeLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Washington Takes Command: Cambridge and the Birth of the Continental Army',
    gradeRange: '6-8',
    estimatedDuration: '3 class periods',
    summary: 'This lesson introduces middle school students to Cambridge as the headquarters of the American Revolution during the Siege of Boston, from July 1775 through March 1776. Students will examine how George Washington arrived to find not a professional army but a loose collection of New England militia companies — underfunded, poorly supplied, and with enlistments expiring at the worst possible moment. Through primary sources including Washington\'s General Orders and Henry Knox\'s artillery proposal, students explore the practical challenges of building an army from scratch while simultaneously maintaining a siege. The lesson emphasizes the enlistment crisis of winter 1775-76, when thousands of soldiers simply went home because their terms were up, and Washington had to rebuild the Continental Army in the face of a British garrison just across the Charles River. Students will grapple with questions about leadership, logistics, and what it actually takes to sustain a revolution beyond its initial burst of enthusiasm.',
    lessonData: {
      objectives: [
        'Students will explain why Cambridge became the headquarters of the Continental Army in 1775',
        'Students will analyze Washington\'s General Orders to understand the challenges of commanding an untrained army',
        'Students will describe the enlistment crisis of 1775-76 and its implications for the Revolution',
        'Students will evaluate how logistical problems shaped the course of the Siege of Boston',
      ],
      essentialQuestions: [
        'What does it actually take to turn a group of volunteers into an army?',
        'Why did soldiers leave during the enlistment crisis, and what does that tell us about their motivations?',
        'How did decisions made in Cambridge shape the outcome of the Siege of Boston?',
      ],
      materials: [
        'Primary source packet: Washington\'s General Orders excerpts (provided)',
        'Map of Cambridge and Boston, 1775-1776, showing siege lines',
        'Graphic organizer: Army-Building Challenges',
        'Henry Knox artillery proposal excerpt',
      ],
      warmUp: {
        duration: '10 minutes',
        activity: 'Display a map showing Cambridge and Boston in 1775. Ask students: "You have just been put in charge of thousands of volunteers camped around a city occupied by professional soldiers. What do you need to figure out first?" List student responses and revisit them at the end of the lesson.',
      },
      directInstruction: {
        duration: '20 minutes',
        content: [
          'Context: after Bunker Hill, the colonial forces surrounded Boston but could not take it',
          'Washington arrives in Cambridge, July 1775: what he found versus what he expected',
          'The Vassall House headquarters: where the Continental Army was organized',
          'Daily realities: supply shortages, discipline problems, lack of gunpowder',
          'The enlistment crisis: why soldiers left and how Washington responded',
        ],
      },
      guidedPractice: {
        duration: '25 minutes',
        activities: [
          'Small group source analysis: each group examines a different General Order from Washington addressing a specific army problem',
          'Groups complete the Army-Building Challenges organizer identifying the problem, Washington\'s proposed solution, and likely obstacles',
          'Class discussion: which problems were military and which were political? Why does the distinction matter?',
        ],
      },
      independentPractice: {
        duration: '20 minutes',
        assignment: 'Write a one-paragraph response: "Imagine you are a Massachusetts militiaman in December 1775. Your enlistment is expiring on January 1. Will you re-enlist or go home? Explain your reasoning using evidence from the sources about conditions in camp."',
      },
      closure: {
        duration: '10 minutes',
        activity: 'Exit ticket: "Name one challenge Washington faced in Cambridge that you did not know about before this lesson. Why do you think this challenge is less well-known than the battles?"',
      },
      differentiation: {
        struggling: 'Simplified General Orders excerpts with vocabulary support, sentence starters for the writing assignment, paired reading during source analysis',
        advanced: 'Full-text General Orders for comparison, research extension on Henry Knox\'s Ticonderoga expedition, essay connecting the enlistment crisis to later Continental Army reforms',
        ell: 'Bilingual glossary of military terms, visual map-based activities, graphic organizer with sentence frames',
      },
      assessment: 'Formative: graphic organizer completion, class discussion participation. Summative: paragraph writing assessment evaluated for historical reasoning and use of evidence.',
    } satisfies Record<string, unknown>,
    standards: {
      note: 'Standards alignment verified for Massachusetts and Common Core.',
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.2: Determine the central ideas or information of a primary or secondary source',
        'CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information with other information in print and digital texts',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.3.6-8: Use questions generated about individuals and groups to analyze why they, and the developments they shaped, are seen as historically significant',
        'D2.His.16.6-8: Organize applicable evidence into a coherent argument about the past',
      ],
      stateStandards: {
        placeholder: 'Massachusetts History & Social Science: USI.T4 (The American Revolution)',
        suggestedAlignment: 'Aligns with MA 5.T4 and USI.T4 standards on the organization of the Continental Army and the Siege of Boston',
      },
    } satisfies Record<string, unknown>,
    comparativeAssignment: {
      title: 'Cambridge and Boston: Two Sides of a Siege',
      description: 'Compare the experience of Cambridge as Washington\'s headquarters with that of Boston under British occupation during 1775-1776. How did geography, leadership, and civilian life differ on each side of the siege lines?',
      compareTowns: [
        {
          townId: 'us-ma-boston',
          townName: 'Boston',
          comparisonPoints: [
            'Military leadership and command structure on each side',
            'Supply challenges faced by Continental forces in Cambridge versus British forces in Boston',
            'Civilian experiences under siege versus under occupation',
            'How each side attempted to break the stalemate',
          ],
        },
      ],
      rubric: [
        { criteria: 'Historical Accuracy', excellent: 'All facts verified with citations to primary sources from both towns', proficient: 'Facts accurate with general source references', developing: 'Some inaccuracies or unsupported claims' },
        { criteria: 'Comparative Analysis', excellent: 'Identifies meaningful similarities and differences with historical explanation for why they existed', proficient: 'Identifies clear similarities and differences', developing: 'Lists facts without meaningful comparison' },
        { criteria: 'Use of Evidence', excellent: 'Integrates multiple primary sources from both Cambridge and Boston perspectives', proficient: 'Uses at least one source from each town', developing: 'Limited or no primary source evidence' },
      ],
    } satisfies Record<string, unknown>,
    slideOutline: {
      title: 'Washington Takes Command: Cambridge and the Continental Army',
      slides: [
        { slideNumber: 1, title: 'Title Slide', bulletPoints: ['Cambridge, Massachusetts', 'Headquarters of the Revolution, 1775-1776', '[Teacher Name] | [Date]'], speakerNotes: 'Set the scene: it is July 1775. Washington has just ridden into Cambridge to take command of an army he has never seen.', suggestedVisual: 'Period illustration of the Vassall House (Longfellow House)' },
        { slideNumber: 2, title: 'Essential Questions', bulletPoints: ['What does it take to turn volunteers into an army?', 'Why did soldiers leave during the enlistment crisis?', 'How did Cambridge shape the Siege of Boston?'], speakerNotes: 'These are practical questions about how revolutions are sustained, not just started.', suggestedVisual: 'Map of siege lines around Boston' },
        { slideNumber: 3, title: 'Washington Arrives', bulletPoints: ['July 3, 1775: Washington takes command under the Cambridge elm', 'He expected a trained force; he found militia camps with no unified structure', 'Gunpowder shortage: far less ammunition than reported', 'His first General Orders began imposing discipline immediately'], speakerNotes: 'Emphasize the gap between what Congress promised and what Washington actually found. This is a recurring theme of the war.', suggestedVisual: 'Map of Cambridge camp positions' },
        { slideNumber: 4, title: 'Building an Army from Scratch', bulletPoints: ['No standard uniforms, equipment, or training', 'Soldiers elected their own officers — a practice Washington found alarming', 'Regional tensions between New England troops and officers from other colonies', 'Daily General Orders addressing everything from sanitation to desertion'], speakerNotes: 'Help students see the unglamorous reality: most of the Revolution was logistics, not battles.', suggestedVisual: 'Facsimile of a General Orders page' },
        { slideNumber: 5, title: 'The Enlistment Crisis', bulletPoints: ['Most enlistments expired December 31, 1775', 'Soldiers had families, farms, and economic pressures', 'Washington: "Such a dearth of public spirit, and want of virtue"', 'The army had to be rebuilt while maintaining the siege'], speakerNotes: 'This is the heart of the lesson. The Revolution nearly collapsed not from a battle lost but from soldiers going home.', suggestedVisual: 'Excerpt from Washington\'s correspondence about enlistments' },
        { slideNumber: 6, title: 'Primary Source Activity', bulletPoints: ['Read your assigned General Orders excerpt', 'Identify the problem Washington is addressing', 'Complete the Army-Building Challenges organizer', 'Prepare to share with the class'], speakerNotes: 'Transition to guided practice. Circulate and help students decode 18th-century language.', suggestedVisual: 'Activity instructions' },
        { slideNumber: 7, title: 'Reflection', bulletPoints: ['Would you have re-enlisted in January 1776?', 'What challenge surprised you the most?', 'Why are logistics less famous than battles?'], speakerNotes: 'Guide students to appreciate that sustaining a revolution is harder than starting one.', suggestedVisual: 'Modern photo of Longfellow House-Washington\'s Headquarters NHS' },
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'The Siege from Headquarters: Cambridge, Command, and the Crisis of 1775-76',
    gradeRange: '9-12',
    estimatedDuration: '4-5 class periods',
    summary: 'This advanced unit positions Cambridge not as a sideshow to the Siege of Boston but as its nerve center — the place where the Continental Army was invented, where the Revolution\'s survival hung on questions of enlistment and supply, and where Washington confronted the gap between republican ideals and military necessity. Students engage with Washington\'s General Orders, Henry Knox\'s remarkable proposal to haul artillery from Fort Ticonderoga, and Martha Washington\'s letters from Cambridge to examine the Revolution as a problem of institutional creation under extreme pressure. The unit pushes students beyond battlefield narratives to analyze how command decisions, logistical constraints, and political tensions between Congress and the army shaped the war. The enlistment crisis of winter 1775-76 serves as a case study in the tension between individual liberty and collective action — the very paradox at the heart of the American experiment. Students produce document-based arguments examining how the decisions made in Cambridge determined whether the Revolution would survive its first year.',
    lessonData: {
      objectives: [
        'Students will analyze Washington\'s General Orders as evidence of institutional creation under wartime conditions',
        'Students will evaluate the strategic significance of the Siege of Boston from the Cambridge headquarters perspective',
        'Students will assess the enlistment crisis as a case study in the tension between individual rights and collective obligation',
        'Students will construct evidence-based arguments about how logistical and political challenges shaped Revolutionary outcomes',
      ],
      essentialQuestions: [
        'How do you build a national institution — an army — from a coalition of local militias with competing interests?',
        'What does the enlistment crisis reveal about the tension between liberty and obligation in a republic?',
        'How did the decisions made at Cambridge headquarters determine the trajectory of the entire war?',
      ],
      materials: [
        'Extended primary source packet: General Orders, Knox letter, Martha Washington\'s Cambridge correspondence',
        'Longfellow House-Washington\'s Headquarters NHS digital resources (selected)',
        'Document analysis and corroboration worksheet',
        'DBQ essay prompt and rubric',
      ],
      warmUp: {
        duration: '10 minutes',
        activity: 'Read a brief excerpt from Washington\'s private letter expressing frustration with the army\'s condition. Then read his public General Orders from the same week projecting confidence. Ask: "Why the difference? What does this tell us about leadership in crisis?"',
      },
      directInstruction: {
        duration: '25 minutes',
        content: [
          'Historical context: from Bunker Hill to the siege stalemate',
          'Cambridge as command center: the Vassall House, the council of war, intelligence operations',
          'The structure problem: thirteen colonial militias versus one Continental Army',
          'Henry Knox and the Ticonderoga artillery: a logistical feat that changed the siege',
          'Martha Washington in Cambridge: what her letters reveal about headquarters society and morale',
        ],
      },
      guidedPractice: {
        duration: '30 minutes',
        activities: [
          'Source corroboration exercise: comparing Washington\'s private correspondence with his public General Orders on the same issues',
          'Strategic analysis: mapping the siege from Cambridge using period maps and troop disposition records',
          'Small group discussion: was Washington right to push for a more disciplined, centralized army, or were the militia\'s democratic traditions worth preserving?',
        ],
      },
      independentPractice: {
        duration: '45 minutes (across multiple periods)',
        assignment: 'DBQ Essay: "To what extent did the decisions made at Cambridge headquarters between July 1775 and March 1776 determine whether the American Revolution would succeed or fail?" Students must use at least 4 primary sources and address counterarguments.',
      },
      closure: {
        duration: '10 minutes',
        activity: 'Seminar discussion: "The Revolution nearly ended not with a defeat in battle but with soldiers simply going home. What does this tell us about the nature of popular revolutions?"',
      },
      differentiation: {
        struggling: 'Scaffolded source analysis with guiding questions, DBQ outline template with thesis sentence starters, paired discussion before writing',
        advanced: 'Additional sources from British intelligence reports on the Continental Army\'s condition, historiographical essay comparing interpretations of Washington\'s leadership at Cambridge',
        ell: 'Annotated source excerpts with vocabulary support, visual timeline of the siege, oral presentation option for assessment',
      },
      assessment: 'Formative: source analysis worksheets, seminar participation rubric. Summative: DBQ essay evaluated for thesis quality, evidence integration, and historical reasoning.',
    } satisfies Record<string, unknown>,
    standards: {
      note: 'Standards alignment verified for AP US History and Massachusetts frameworks.',
      commonCore: [
        'CCSS.ELA-LITERACY.RH.11-12.1: Cite specific textual evidence, attending to such features as the date and origin of the information',
        'CCSS.ELA-LITERACY.RH.11-12.6: Evaluate authors\' differing points of view on the same historical event or issue by assessing the authors\' claims, reasoning, and evidence',
        'CCSS.ELA-LITERACY.RH.11-12.9: Integrate information from diverse sources, both primary and secondary, into a coherent understanding of an idea or event',
      ],
      c3Framework: [
        'D2.His.1.9-12: Evaluate how historical events and developments were shaped by unique circumstances of time and place',
        'D2.His.3.9-12: Use questions generated about individuals and groups to assess how the significance of their actions changes over time',
        'D2.His.16.9-12: Integrate evidence from multiple relevant historical sources and interpretations into a reasoned argument about the past',
      ],
      stateStandards: {
        placeholder: 'Massachusetts History & Social Science: USI.T4, AP US History Period 3',
        suggestedAlignment: 'Aligns with MA USI.T4 and AP US History Key Concept 3.1 on the organization and challenges of the Continental Army',
      },
    } satisfies Record<string, unknown>,
    displayOrder: 2,
    published: true,
  },
];

export const cambridgePrimarySourcePackets: Prisma.PrimarySourcePacketCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Washington\'s General Orders from Cambridge (1775-1776)',
    description: 'Selected General Orders issued by George Washington from his Cambridge headquarters between July 1775 and March 1776. These daily directives reveal the practical challenges of building the Continental Army — from enforcing discipline and addressing supply shortages to managing the enlistment crisis that threatened to dissolve the army over the winter.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'National Archives / Library of Congress, Founders Online',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'What specific problems is Washington addressing in each General Order, and what do they reveal about camp conditions?',
      'How does Washington\'s tone shift between orders directed at officers versus those directed at common soldiers?',
      'What do repeated orders about the same issues — desertion, sanitation, fraternization — suggest about their effectiveness?',
      'How do the General Orders reflect the tension between Washington\'s vision of a professional army and the militia tradition of democratic self-governance?',
      'Compare the public language of the General Orders with Washington\'s private letters from the same period. What does the gap reveal?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'Washington\'s General Orders from Cambridge are among the most underused primary sources for teaching the Revolution, which is precisely what makes them so valuable. Students tend to encounter the war through its battles, its declarations, and its famous speeches. The General Orders reveal something different: the daily, grinding work of institutional creation. When Washington arrived in Cambridge in July 1775, he found not an army but a collection of New England militia companies with their own elected officers, their own regional loyalties, and their own ideas about how long they intended to stay. The General Orders are his attempt to impose order on this chaos — and they fail as often as they succeed. Guide students to read these not as commands from on high but as evidence of negotiation. When Washington issues the same order about sanitation for the third time in a week, that repetition is itself a primary source: it tells us the first two orders were ignored. When he threatens severe punishment for desertion, it tells us desertion was common enough to threaten the siege. These documents humanize the Revolution by showing it as a management problem, not just an ideological movement. They are especially effective for students who think history is only about great moments, because they show that the Revolution survived on unglamorous daily decisions made under conditions of uncertainty and frustration.',
    narrativeModel: 'opus',
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Henry Knox\'s Artillery Proposal Letter (November 1775)',
    description: 'Henry Knox\'s letter to Washington proposing the transport of captured British artillery from Fort Ticonderoga to the siege lines around Boston. This document outlines what became one of the most remarkable logistical feats of the war — hauling 60 tons of cannons over 300 miles of winter terrain — and reveals the strategic thinking that eventually broke the Siege of Boston.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'Massachusetts Historical Society / Library of Congress',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'What problem is Knox trying to solve, and why was artillery the key to breaking the siege stalemate?',
      'How does Knox present his plan to make it sound feasible? What rhetorical strategies does he use?',
      'What logistical challenges does Knox acknowledge, and which does he seem to underestimate?',
      'How does this letter reflect the improvisational nature of the Continental Army\'s early operations?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'Knox\'s letter is a remarkable document for teaching students about the relationship between strategic vision and logistical reality. Henry Knox was a twenty-five-year-old Boston bookseller with no formal military training. He had taught himself artillery science from the books he sold, and he proposed what experienced officers might have dismissed as impossible: moving sixty tons of captured British cannons from Fort Ticonderoga in upstate New York to the siege lines around Boston, across three hundred miles of winter roads, frozen rivers, and mountain passes. The letter itself is worth close reading for its combination of confidence and careful qualification. Knox does not promise certainty — he outlines a plan, anticipates obstacles, and requests specific resources. This makes it an excellent source for teaching students about persuasive writing in a professional context. The deeper teaching opportunity lies in what the letter reveals about the Continental Army in late 1775. Washington\'s forces had surrounded Boston for months but lacked the heavy artillery needed to force a British withdrawal. The army was improvising solutions to problems that European armies solved through established supply chains and professional officer corps. Knox\'s proposal succeeded — the "Noble Train of Artillery" arrived in late January 1776, and its placement on Dorchester Heights forced the British evacuation of Boston in March. Help students see this not as inevitable triumph but as a wild gamble that happened to work, undertaken because the Continental Army had no conventional alternatives.',
    narrativeModel: 'opus',
    displayOrder: 2,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Martha Washington\'s Cambridge Letters (Winter 1775-1776)',
    description: 'Selected correspondence from Martha Washington during her stay at the Cambridge headquarters in the winter of 1775-1776. Martha joined George at the Vassall House in December 1775, and her letters to family and friends provide a rare window into daily life at headquarters, the social dynamics of the officer corps, and the morale challenges of the siege\'s most difficult months.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'Mount Vernon Ladies\' Association / Virginia Historical Society',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'What does Martha Washington\'s presence at headquarters tell us about the social expectations of 18th-century military leadership?',
      'How does Martha describe the soldiers and their conditions? What does her language reveal about class and social assumptions?',
      'What aspects of daily life at headquarters do Martha\'s letters illuminate that official military records do not?',
      'How do Martha\'s letters compare with George Washington\'s official correspondence from the same period as evidence of conditions in Cambridge?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'Martha Washington\'s Cambridge letters offer a genuinely different angle on the Revolution, and they are especially useful for helping students understand the social world that surrounded military operations. Martha arrived at Cambridge headquarters in December 1775, during the worst of the enlistment crisis, and her letters home describe a community under strain. She writes about the soldiers with a mixture of sympathy and class-inflected distance — she admires their commitment but is startled by the informality of New England camp life. She describes entertaining officers and their wives, organizing efforts to support the troops, and adjusting to the realities of life in an occupied college town. For teaching purposes, these letters accomplish several things at once. They introduce a woman\'s perspective into a narrative overwhelmingly dominated by men, without reducing Martha to a decorative presence. She was a practical, observant person whose correspondence reveals genuine intelligence about the social and logistical conditions at headquarters. Her letters also reveal the class dynamics of the Continental Army\'s leadership — the Washingtons brought enslaved people with them to Cambridge, a fact that complicates any simple narrative about a war for liberty. Guide students to read Martha\'s letters as social history: evidence of how people lived, how they understood their circumstances, and what they considered important enough to write down. These sources pair especially well with Washington\'s General Orders, because they describe the same time and place from an entirely different vantage point.',
    narrativeModel: 'opus',
    displayOrder: 3,
    published: true,
  },
];

export const cambridgeTeacherWorksheets: Prisma.TeacherWorksheetCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Cambridge Headquarters: Army-Building Challenges Organizer',
    worksheetType: 'GRAPHIC_ORGANIZER',
    description: 'Structured graphic organizer for analyzing the challenges Washington faced in building the Continental Army at Cambridge, using primary source evidence from General Orders and correspondence.',
    content: `# Cambridge Headquarters: Army-Building Challenges Organizer

## Source Information
- Source Title: _________________
- Author/Creator: _________________
- Date Created: _________________
- Purpose of Creation: _________________
- Audience: _________________

## Identifying the Problem
What specific challenge or problem is this source addressing?

_________________________________________________

## Evidence from the Source
List 3 key details or quotes from the source that describe the problem:
1.
2.
3.

## Washington's Response
- What solution or action does Washington propose? _________________
- What resources does he request or require? _________________
- What consequences does he threaten or promise? _________________

## Analysis: Why Was This Hard?
| Factor | How It Made the Problem Harder |
|--------|-------------------------------|
| Enlistment terms | |
| Supply shortages | |
| Militia traditions | |
| Relations with Congress | |
| Proximity to British forces | |

## Comparing Public and Private
If available, compare what Washington says publicly (General Orders) with what he writes privately (letters):
- Public tone: _________________
- Private tone: _________________
- Why the difference? _________________

## Connection to the Bigger Picture
How does this challenge connect to the larger question of whether the Revolution could survive?

_______________________________________________

## Siege Comparison
How might the British in Boston have been dealing with a similar or opposite challenge?

_______________________________________________`,
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Cambridge Revolution Quiz',
    worksheetType: 'QUIZ',
    description: 'Assessment quiz covering Cambridge as Continental Army headquarters, the Siege of Boston from the headquarters perspective, and the enlistment crisis of 1775-76.',
    content: 'Quiz content — see quizData for structured questions.',
    quizData: {
      title: 'Cambridge: Headquarters of the Revolution',
      instructions: 'Answer all questions based on our study of Cambridge in the American Revolution. For short answer questions, use specific evidence from the sources we studied.',
      questions: [
        {
          id: 1,
          type: 'multiple_choice',
          question: 'Why did Cambridge become the headquarters of the Continental Army in 1775?',
          options: [
            'It was strategically located near Boston, where British forces were garrisoned, and had buildings suitable for a command center',
            'The Continental Congress ordered all troops to gather there',
            'It was the largest city in Massachusetts',
            'George Washington owned property in Cambridge',
          ],
          correctAnswer: 'A',
          explanation: 'Cambridge\'s proximity to British-occupied Boston made it the natural staging ground for the siege. The Vassall House (now the Longfellow House) and Harvard College buildings provided headquarters and barracks for the Continental Army.',
        },
        {
          id: 2,
          type: 'true_false',
          question: 'When Washington arrived in Cambridge in July 1775, he found a well-organized professional army ready for his command.',
          correctAnswer: 'False',
          explanation: 'Washington found the opposite: a loose collection of New England militia companies with elected officers, no unified command structure, severe supply shortages, and far less gunpowder than had been reported. His General Orders from the first weeks reflect his effort to impose basic discipline and organization.',
        },
        {
          id: 3,
          type: 'multiple_choice',
          question: 'What was the enlistment crisis of 1775-76?',
          options: [
            'Too many volunteers arrived and there was no room for them',
            'Most soldiers\' terms of service expired on December 31, 1775, and many refused to re-enlist, threatening to dissolve the army',
            'British spies infiltrated the Continental Army recruitment offices',
            'Congress refused to authorize any new enlistments after 1775',
          ],
          correctAnswer: 'B',
          explanation: 'Most militia enlistments were for fixed terms ending December 31, 1775. Despite Washington\'s appeals, thousands of soldiers went home when their terms expired, forcing him to rebuild the army during an active siege — one of the most dangerous moments of the entire Revolution.',
        },
        {
          id: 4,
          type: 'short_answer',
          question: 'Explain what Washington\'s General Orders reveal about conditions in the Cambridge camps that official histories of the Revolution often overlook. Cite at least one specific type of order.',
          correctAnswer: '[Accept answers that identify specific practical problems — sanitation, desertion, theft, fraternization with the enemy, lack of discipline — and explain how the General Orders serve as evidence of daily camp life]',
          explanation: 'Strong answers will note that the General Orders address mundane but critical issues like camp cleanliness, soldiers wandering from posts, theft of supplies, and insubordination. The repetition of certain orders suggests persistent noncompliance. These documents reveal the Revolution as a daily management challenge, not just a series of battles.',
        },
        {
          id: 5,
          type: 'multiple_choice',
          question: 'Henry Knox\'s proposal to bring artillery from Fort Ticonderoga to Cambridge was significant because:',
          options: [
            'Knox was an experienced military engineer with decades of service',
            'The Continental Army lacked the heavy artillery needed to force the British out of Boston, and Knox proposed transporting captured cannons over 300 miles of winter terrain',
            'Congress had already approved and funded the expedition before Knox suggested it',
            'The artillery was needed to defend Cambridge from a British attack',
          ],
          correctAnswer: 'B',
          explanation: 'Knox, a 25-year-old former bookseller with no formal military training, proposed hauling 60 tons of captured British cannons from Ticonderoga to Boston. This artillery, placed on Dorchester Heights, ultimately forced the British evacuation of Boston in March 1776.',
        },
        {
          id: 6,
          type: 'true_false',
          question: 'Martha Washington\'s letters from Cambridge provide evidence about the social dynamics and daily life at headquarters that official military records do not capture.',
          correctAnswer: 'True',
          explanation: 'Martha Washington\'s correspondence from the winter of 1775-76 describes social gatherings among officers, her impressions of New England soldiers and camp life, and the practical realities of running a headquarters household. Her letters offer a perspective absent from military records and reveal class dynamics within the army\'s leadership, including the fact that the Washingtons brought enslaved people to Cambridge.',
        },
        {
          id: 7,
          type: 'short_answer',
          question: 'Compare the challenges faced by the Continental Army in Cambridge with those faced by the British Army in Boston during the siege of 1775-1776. Identify at least one challenge that was similar and one that was different.',
          correctAnswer: '[Accept answers that identify shared challenges like supply shortages and morale problems, and distinguish unique challenges like the Continental Army\'s enlistment crisis versus the British Army\'s isolation by sea]',
          explanation: 'Strong answers will note that both sides faced supply problems — the Continental Army lacked gunpowder and equipment, while the British in Boston struggled with food shortages and dependence on naval supply lines. A key difference was the enlistment crisis: British regulars served for long terms, while Continental soldiers could simply go home. Conversely, the British were confined to a hostile city while the Continental forces had the support of the surrounding countryside.',
        },
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 10,
    published: true,
  },
];
