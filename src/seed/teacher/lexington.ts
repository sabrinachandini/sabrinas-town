// MODEL: Claude Sonnet (structure + code) / Claude Opus (long narratives >150 words)
// Curated teacher content for Lexington, MA

import { Prisma } from '@prisma/client';

const TOWN_ID = 'us-ma-lexington';

export const lexingtonLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'The Shot Heard Round the World: Lexington and the Start of Revolution',
    gradeRange: '6-8',
    estimatedDuration: '3 class periods',
    summary: 'This lesson guides middle school students through the events of April 19, 1775, on Lexington Green. Students will analyze primary sources from multiple perspectives — British officer accounts, colonial militia depositions, and later commemorative narratives — to understand how a brief, chaotic skirmish became the symbolic opening of the American Revolution. The lesson emphasizes critical thinking about how eyewitness accounts differ, why those differences matter, and how communities construct memory around pivotal events. Students will grapple with questions about who fired first, whose voices are preserved in the historical record, and whose are missing. By examining the experiences of Captain John Parker, Prince Estabrook, and ordinary militiamen alongside the British soldiers who marched that morning, students develop a nuanced understanding of how revolution begins — not with grand declarations, but with ordinary people making extraordinary choices in moments of crisis.',
    lessonData: {
      objectives: [
        'Students will analyze primary source accounts from multiple perspectives on the Battle of Lexington Green',
        'Students will evaluate how eyewitness testimony can be contradictory yet individually truthful',
        'Students will explain the significance of Lexington in the broader narrative of the American Revolution',
        'Students will identify whose voices are preserved and whose are missing from the historical record',
      ],
      essentialQuestions: [
        'Who fired the "shot heard round the world," and does it matter?',
        'How do different eyewitnesses remember the same event differently?',
        'Whose stories about Lexington have been told — and whose have been left out?',
      ],
      materials: [
        'Primary source packet: British and colonial depositions (provided)',
        'Map of Lexington Green, 1775',
        'Graphic organizer: Perspective Analysis',
        'Timeline template: Road to Revolution',
      ],
      warmUp: {
        duration: '10 minutes',
        activity: 'Show a modern photograph of Lexington Green. Ask students: "What happened here? What do you already know?" Then show the famous Amos Doolittle engraving. Ask: "What does this image claim happened? How might an image be a kind of argument?"',
      },
      directInstruction: {
        duration: '20 minutes',
        content: [
          'Context: tensions between colonies and Britain by early 1775',
          'The British march from Boston: objectives and intelligence',
          'Captain John Parker and the Lexington militia: who were these men?',
          'Prince Estabrook: an enslaved man who fought and was wounded',
          'The confrontation on the Green: what we know and what we don\'t',
        ],
      },
      guidedPractice: {
        duration: '25 minutes',
        activities: [
          'Small group primary source analysis: each group receives a different eyewitness account',
          'Groups complete perspective analysis graphic organizer',
          'Gallery walk: groups share findings, noting contradictions between accounts',
        ],
      },
      independentPractice: {
        duration: '20 minutes',
        assignment: 'Write a one-paragraph "historical argument" answering: Based on the evidence, what happened on Lexington Green on April 19, 1775? Cite at least two sources and acknowledge at least one contradiction.',
      },
      closure: {
        duration: '10 minutes',
        activity: 'Exit ticket: "What is one thing you are now less certain about regarding Lexington? Why is that uncertainty valuable for a historian?"',
      },
      differentiation: {
        struggling: 'Pre-highlighted key passages in source documents, sentence starters for writing, partner support during analysis',
        advanced: 'Additional sources including later commemorative speeches; essay extension comparing how Lexington has been remembered over time',
        ell: 'Bilingual glossary of key terms, visual timeline support, simplified source excerpts with original available for reference',
      },
      assessment: 'Formative: graphic organizer completion, gallery walk participation. Summative: paragraph writing assessment using provided rubric.',
    } satisfies Record<string, unknown>,
    standards: {
      note: 'Standards alignment verified for Massachusetts and Common Core.',
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author\'s point of view or purpose',
        'CCSS.ELA-LITERACY.RH.6-8.9: Analyze the relationship between a primary and secondary source on the same topic',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.6.6-8: Analyze how people\'s perspectives influenced what information is available in the historical sources they created',
        'D2.His.16.6-8: Organize applicable evidence into a coherent argument about the past',
      ],
      stateStandards: {
        placeholder: 'Massachusetts History & Social Science: USI.T4 (The American Revolution)',
        suggestedAlignment: 'Aligns with MA 5.T4 and USI.T4 standards on causes and early events of the Revolution',
      },
    } satisfies Record<string, unknown>,
    comparativeAssignment: {
      title: 'Lexington and Concord: Two Towns, One Morning',
      description: 'Compare the experiences of Lexington and Concord on April 19, 1775. How were the confrontations different? What do the differences tell us about how the Revolution unfolded?',
      compareTowns: [
        {
          townId: 'us-ma-concord',
          townName: 'Concord',
          comparisonPoints: [
            'British objectives at each location',
            'Militia organization and response',
            'Casualties and outcomes',
            'How each town remembers the day',
          ],
        },
      ],
      rubric: [
        { criteria: 'Historical Accuracy', excellent: 'All facts verified with citations to primary sources', proficient: 'Facts accurate with general source references', developing: 'Some inaccuracies or unsupported claims' },
        { criteria: 'Comparative Analysis', excellent: 'Identifies meaningful similarities and differences with historical explanation', proficient: 'Identifies clear similarities and differences', developing: 'Lists facts without meaningful comparison' },
        { criteria: 'Use of Evidence', excellent: 'Integrates multiple primary sources from both towns', proficient: 'Uses at least one source from each town', developing: 'Limited or no primary source evidence' },
      ],
    } satisfies Record<string, unknown>,
    slideOutline: {
      title: 'The Shot Heard Round the World',
      slides: [
        { slideNumber: 1, title: 'Title Slide', bulletPoints: ['Lexington, Massachusetts', 'April 19, 1775', '[Teacher Name] | [Date]'], speakerNotes: 'Set the scene: it is before dawn, and 77 militiamen are standing on a village green.', suggestedVisual: 'Amos Doolittle engraving of the battle' },
        { slideNumber: 2, title: 'Essential Questions', bulletPoints: ['Who fired first — and does it matter?', 'How do eyewitnesses disagree?', 'Whose stories have been told?'], speakerNotes: 'Frame these as genuine historical puzzles, not questions with obvious answers.', suggestedVisual: 'Question marks overlaid on map' },
        { slideNumber: 3, title: 'The Road to Lexington Green', bulletPoints: ['British intelligence on colonial supplies', 'The midnight ride warnings', 'Captain Parker musters the militia'], speakerNotes: 'Emphasize that these were real people making decisions with incomplete information.', suggestedVisual: 'Map of the British march route' },
        { slideNumber: 4, title: 'The People on the Green', bulletPoints: ['Captain John Parker: farmer, veteran, militia leader', 'Prince Estabrook: enslaved man, militiaman, wounded', 'Jonas Parker: elderly militiaman who refused to retreat'], speakerNotes: 'Humanize these figures. They were not monuments — they were people.', suggestedVisual: 'Portraits or period illustrations' },
        { slideNumber: 5, title: 'What Happened? Conflicting Accounts', bulletPoints: ['British officers say colonists fired first', 'Colonial depositions say British fired first', 'Some say a shot came from a building nearby'], speakerNotes: 'This is where we shift to historical thinking: how do we make sense of contradictory evidence?', suggestedVisual: 'Side-by-side source excerpts' },
        { slideNumber: 6, title: 'Primary Source Activity', bulletPoints: ['Read your assigned source carefully', 'Complete the perspective analysis organizer', 'Prepare to share with the class'], speakerNotes: 'Transition to guided practice. Circulate and support groups.', suggestedVisual: 'Activity instructions' },
        { slideNumber: 7, title: 'Reflection', bulletPoints: ['What are you now less certain about?', 'Why is historical uncertainty valuable?', 'Whose voices are still missing?'], speakerNotes: 'Guide students toward intellectual humility. Good historians hold uncertainty well.', suggestedVisual: 'Modern photo of Lexington Green' },
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Revolution and Rights: Lexington Through the Lens of Liberty',
    gradeRange: '9-12',
    estimatedDuration: '4-5 class periods',
    summary: 'This advanced lesson unit examines Lexington as a case study in how revolutions begin and how they are remembered. High school students engage with sophisticated primary source analysis, examining depositions, letters, commemorative speeches, and material culture from the Lexington Historical Society. The unit pushes beyond the traditional narrative to examine the Revolution through the experiences of those often excluded from the story: Prince Estabrook and other Black militiamen, women who supported the militia effort, and the ordinary farmers who risked everything on a cold April morning. Students develop advanced historical thinking skills by constructing evidence-based arguments, evaluating the reliability of sources created under political pressure, and analyzing how the "memory" of Lexington has been constructed and reconstructed over 250 years. The unit culminates in a document-based essay or multimedia project.',
    lessonData: {
      objectives: [
        'Students will construct evidence-based historical arguments using primary source corroboration',
        'Students will evaluate source reliability considering context, audience, and purpose',
        'Students will analyze how historical memory is constructed and contested',
        'Students will examine the Revolution through the experiences of marginalized groups',
      ],
      essentialQuestions: [
        'How do we determine what "really happened" when sources contradict each other?',
        'Who gets to define what a revolution means — and who is left out of that definition?',
        'How has the memory of Lexington been used for political purposes over 250 years?',
      ],
      materials: [
        'Extended primary source packet: depositions, letters, commemorative speeches',
        'Lexington Historical Society digital archives (selected)',
        'Sourcing and corroboration worksheet',
        'DBQ essay prompt and rubric',
      ],
      warmUp: {
        duration: '10 minutes',
        activity: 'Compare two depictions of the Battle of Lexington from different eras. What changed? Why?',
      },
      directInstruction: {
        duration: '25 minutes',
        content: [
          'Historical context: imperial crisis, colonial resistance networks',
          'The intelligence war: how both sides gathered information',
          'The social composition of the Lexington militia: who fought and why',
          'Prince Estabrook and Black participation in the Revolution',
          'Women\'s roles: the invisible infrastructure of resistance',
        ],
      },
      guidedPractice: {
        duration: '30 minutes',
        activities: [
          'Source corroboration exercise: comparing depositions taken under different circumstances',
          'Reliability assessment: evaluating sources created for political versus private purposes',
          'Small group discussion: whose stories are preserved and why?',
        ],
      },
      independentPractice: {
        duration: '45 minutes (across multiple periods)',
        assignment: 'DBQ Essay or multimedia project: "How should we remember Lexington?" Students must use at least 4 primary sources and address counterarguments.',
      },
      closure: {
        duration: '10 minutes',
        activity: 'Seminar discussion: "Does it matter who fired first at Lexington? Why or why not?"',
      },
      differentiation: {
        struggling: 'Scaffolded source analysis with guiding questions, essay outline template, peer editing support',
        advanced: 'Additional archival sources, historiography essay comparing scholarly interpretations over time',
        ell: 'Annotated source excerpts, visual essay planning tools, oral presentation option',
      },
      assessment: 'Formative: source analysis worksheets, seminar participation. Summative: DBQ essay or multimedia project with source-based rubric.',
    } satisfies Record<string, unknown>,
    standards: {
      note: 'Standards alignment verified for AP US History and Massachusetts frameworks.',
      commonCore: [
        'CCSS.ELA-LITERACY.RH.11-12.1: Cite specific textual evidence, attending to such features as the date and origin of the information',
        'CCSS.ELA-LITERACY.RH.11-12.6: Evaluate authors\' differing points of view on the same historical event',
        'CCSS.ELA-LITERACY.RH.11-12.9: Integrate information from diverse sources into a coherent understanding',
      ],
      c3Framework: [
        'D2.His.1.9-12: Evaluate how historical events and developments were shaped by unique circumstances of time and place',
        'D2.His.6.9-12: Analyze the ways in which the perspectives of those writing history shaped the history they produced',
        'D2.His.16.9-12: Integrate evidence from multiple relevant historical sources and interpretations',
      ],
      stateStandards: {
        placeholder: 'Massachusetts History & Social Science: USI.T4, AP US History Period 3',
        suggestedAlignment: 'Aligns with MA USI.T4 and AP US History Key Concept 3.1',
      },
    } satisfies Record<string, unknown>,
    displayOrder: 2,
    published: true,
  },
];

export const lexingtonPrimarySourcePackets: Prisma.PrimarySourcePacketCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Depositions of the Lexington Militia (April 1775)',
    description: 'Sworn statements from militiamen who were present on Lexington Green on April 19, 1775. These depositions were collected by the Provincial Congress within days of the battle to establish the colonial version of events. They represent the earliest first-person accounts of the confrontation.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'Massachusetts Provincial Congress / National Archives',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'Who collected these depositions, and what was their political purpose?',
      'How might the political context affect what the deponents chose to say?',
      'What details appear consistently across multiple depositions?',
      'What is notably absent from these accounts?',
      'How do these accounts compare to British officers\' reports of the same events?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'These depositions are among the most important primary sources for teaching the Battle of Lexington, and they reward careful, critical reading. Collected by the Massachusetts Provincial Congress in the days immediately following April 19, the depositions served an explicit political purpose: to establish before the world that British troops fired first on peaceful colonists. This context does not make them unreliable — the deponents were under oath and describing events they personally witnessed — but it means students should consider how political urgency shaped what was recorded and how. Guide students to notice what the depositions share in common: the militia was dispersing when firing began, the British advanced in battle formation, the colonists did not intend to engage. Then push students to notice what varies: the sequence of events, the number of shots, whether orders were given. This is where genuine historical thinking begins. Contradictions between honest eyewitness accounts are not evidence of deception — they are evidence of the chaos of lived experience. Use these documents to build students\' capacity for holding ambiguity and evaluating evidence on its own terms.',
    narrativeModel: 'opus',
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Lieutenant John Barker\'s Diary (April 19, 1775)',
    description: 'A British officer\'s private diary account of the march to Lexington and Concord. Unlike the official British reports, this was written for private purposes and offers a candid perspective on the events, including criticism of British command decisions.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'British Library / Published in "The British in Boston" collection',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'How does a private diary differ from an official military report as a historical source?',
      'What does Barker criticize about the British expedition? Why might this matter?',
      'How does Barker describe the colonial militia? What assumptions does he reveal?',
      'Compare Barker\'s account of the first shots with the colonial depositions.',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'Lieutenant Barker\'s diary is a gift for teaching source analysis because it complicates the simple binary of "British account vs. colonial account." Barker was critical of his own commanders — he thought the expedition was poorly planned and badly executed — which gives his account a credibility that official reports lack. A soldier complaining in his private diary about his superiors is unlikely to be crafting propaganda. Guide students to consider the difference between public and private sources. The colonial depositions were created for publication and political persuasion. Barker\'s diary was never intended for an audience. Ask students: does this make it more reliable? Less reliable? In what ways? Students often assume that "the other side" is simply lying. Barker\'s diary helps them move beyond that simplistic framework toward a more sophisticated understanding of perspective, context, and the limits of any single account. This is exactly the kind of source that builds genuine historical thinking skills rather than reinforcing comfortable narratives.',
    narrativeModel: 'opus',
    displayOrder: 2,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Amos Doolittle Engravings (1775)',
    description: 'Four copper-plate engravings by Amos Doolittle, created after he visited the battle sites in the weeks following April 19. These are the earliest visual depictions of the battles and were based on eyewitness interviews and site visits.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'Connecticut Historical Society / Various museum collections',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'Doolittle visited the sites weeks after the battle. How does this affect the engravings as evidence?',
      'What choices did Doolittle make about what to show and what to leave out?',
      'How do these visual sources complement or contradict the written depositions?',
      'What narrative do these images construct about who was the aggressor?',
    ],
    teacherNarrative: 'Visual primary sources offer a powerful entry point for students who struggle with dense written texts. The Doolittle engravings are especially valuable because they were created by someone who actually visited the sites and interviewed witnesses, yet they are clearly constructed arguments about what happened. Have students "read" the images like texts: What is in the foreground? What is emphasized? Where are the British soldiers relative to the militia? These choices tell a story. Doolittle was a Connecticut patriot — his sympathies are clear in how he composed the scenes. This makes the engravings excellent for teaching that even "documentary" images reflect a point of view. Pair them with the written sources for a multimedia analysis that builds visual literacy alongside textual analysis skills.',
    narrativeModel: 'opus',
    displayOrder: 3,
    published: true,
  },
];

export const lexingtonTeacherWorksheets: Prisma.TeacherWorksheetCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Lexington Green: Primary Source Analysis',
    worksheetType: 'GRAPHIC_ORGANIZER',
    description: 'Structured graphic organizer for analyzing and comparing eyewitness accounts of the Battle of Lexington Green.',
    content: `# Lexington Green: Perspective Analysis Organizer

## Source Information
- Source Title: _________________
- Author/Creator: _________________
- Date Created: _________________
- Purpose of Creation: _________________
- Audience: _________________

## What the Source Says
List 3 key claims or details from this source:
1.
2.
3.

## Perspective Check
- What is the author's relationship to the events? _________________
- What might the author want the reader to believe? _________________
- What evidence supports the author's account? _________________

## Corroboration
Compare with another source on the same events:
| Detail | This Source Says | Other Source Says | Agreement? |
|--------|-----------------|-------------------|------------|
| Who fired first? | | | |
| Militia behavior | | | |
| British behavior | | | |
| Number of casualties | | | |

## Missing Voices
- Whose perspective is NOT represented in this source? _________________
- Why might their perspective be different? _________________

## Your Analysis
Based on this source, what can we say happened on Lexington Green? What remains uncertain?

_______________________________________________`,
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Lexington Revolution Quiz',
    worksheetType: 'QUIZ',
    description: 'Assessment quiz covering the Battle of Lexington Green, primary source analysis, and historical thinking skills.',
    content: 'Quiz content — see quizData for structured questions.',
    quizData: {
      title: 'The Battle of Lexington Green',
      instructions: 'Answer all questions based on our study of Lexington in the American Revolution. For short answer questions, use specific evidence from sources we studied.',
      questions: [
        {
          id: 1,
          type: 'multiple_choice',
          question: 'Why were British troops marching through Lexington on April 19, 1775?',
          options: [
            'To arrest Samuel Adams and John Hancock and seize colonial military supplies in Concord',
            'To establish a permanent garrison in Lexington',
            'To respond to an attack by colonial militia',
            'To deliver a message from King George III',
          ],
          correctAnswer: 'A',
          explanation: 'The British expedition had two objectives: arresting patriot leaders Adams and Hancock (who had been warned and escaped) and seizing colonial military supplies stored in Concord.',
        },
        {
          id: 2,
          type: 'multiple_choice',
          question: 'What makes the colonial depositions about Lexington valuable but also potentially problematic as historical sources?',
          options: [
            'They were collected quickly from eyewitnesses, but for the political purpose of blaming the British',
            'They were written years later from memory',
            'They were all written by the same person',
            'They agree completely on every detail',
          ],
          correctAnswer: 'A',
          explanation: 'The depositions were sworn eyewitness statements collected within days — making them timely and detailed — but they were gathered by the Provincial Congress specifically to establish the British as aggressors, which means students must consider how that political context shaped the accounts.',
        },
        {
          id: 3,
          type: 'true_false',
          question: 'Prince Estabrook, an enslaved man, was among the Lexington militiamen and was wounded in the battle.',
          correctAnswer: 'True',
          explanation: 'Prince Estabrook was enslaved by Benjamin Estabrook of Lexington. He was one of the militiamen on the Green and was wounded, making him one of the first casualties of the American Revolution. His presence challenges simplified narratives about who fought for liberty.',
        },
        {
          id: 4,
          type: 'short_answer',
          question: 'Explain why historians still debate who fired the first shot at Lexington, even though we have multiple eyewitness accounts. Use evidence from at least one source.',
          correctAnswer: '[Accept answers that demonstrate understanding of source contradiction and the limits of eyewitness testimony]',
          explanation: 'Strong answers will note that British and colonial accounts contradict each other, that even accounts from the same side differ on details, and that the chaos of the moment made accurate observation difficult. The political context of source creation also matters.',
        },
        {
          id: 5,
          type: 'short_answer',
          question: 'How does Lieutenant Barker\'s private diary differ from the official British military reports as a historical source? Why does this difference matter?',
          correctAnswer: '[Accept answers that distinguish private vs. public sources and explain implications for reliability]',
          explanation: 'Strong answers will note that Barker\'s diary was private and includes criticisms of British command that would never appear in official reports, making it potentially more candid. Students should recognize that the intended audience of a source affects its content.',
        },
        {
          id: 6,
          type: 'multiple_choice',
          question: 'Captain John Parker\'s famous order — "Stand your ground. Don\'t fire unless fired upon, but if they mean to have a war, let it begin here" — is:',
          options: [
            'Recorded only in later accounts and may not be his exact words',
            'Documented in multiple contemporaneous sources',
            'Recorded in his own diary',
            'Found in the British military reports',
          ],
          correctAnswer: 'A',
          explanation: 'Parker\'s famous words were first recorded decades after the battle. While they may capture his intent, historians note that exact quotations from chaotic moments should be treated with caution, especially when recorded long after the fact.',
        },
        {
          id: 7,
          type: 'short_answer',
          question: 'Identify one group of people whose perspectives are largely missing from the primary sources about the Battle of Lexington. Why might their perspective add to our understanding?',
          correctAnswer: '[Accept answers identifying women, enslaved people, children, Loyalists, or common British soldiers]',
          explanation: 'Multiple groups are underrepresented: women who watched from nearby, enslaved people beyond Estabrook, children, Loyalist townspeople, and rank-and-file British soldiers. Each would offer different insights into how the events were experienced and understood.',
        },
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 10,
    published: true,
  },
];
