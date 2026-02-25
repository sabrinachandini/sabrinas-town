// MODEL: Claude Sonnet (structure + code) / Claude Opus (long narratives >150 words)
// Curated teacher content for Worcester, MA

import { Prisma } from '@prisma/client';

const TOWN_ID = 'us-ma-worcester';

export const worcesterLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Shutting Down the King\'s Court: Worcester and the Revolution Before the Revolution',
    gradeRange: '6-8',
    estimatedDuration: '3 class periods',
    summary: 'This lesson introduces middle school students to one of the earliest and most decisive acts of organized colonial defiance: the closure of the royal courts in Worcester, Massachusetts, in September 1774. Months before the shots at Lexington and Concord, thousands of Worcester County residents gathered to prevent the courts from operating under the authority of the Massachusetts Government Act. Students will examine county convention records, firsthand accounts of the courthouse closure, and the leadership of figures like Timothy Bigelow to understand how ordinary people in an interior town dismantled royal authority through collective, organized action. The lesson challenges the common narrative that revolution began on a single dramatic morning and asks students to consider how sustained political organizing in places far from Boston laid the groundwork for independence. Students will analyze how Worcester\'s convention system created a model of self-governance that replaced British institutions before any army took the field.',
    lessonData: {
      objectives: [
        'Students will analyze primary sources documenting the closure of royal courts in Worcester in 1774',
        'Students will explain how Worcester\'s resistance preceded and enabled the military confrontations of 1775',
        'Students will evaluate how county conventions functioned as an alternative system of governance',
        'Students will identify the roles of ordinary citizens in dismantling royal authority',
      ],
      essentialQuestions: [
        'Can a revolution begin without a battle?',
        'How did ordinary people in Worcester challenge the most powerful empire in the world?',
        'Why is Worcester\'s role in the Revolution less well known than Lexington or Concord?',
      ],
      materials: [
        'Primary source packet: Worcester County convention records (provided)',
        'Accounts of the September 1774 courthouse closure',
        'Graphic organizer: Comparing Acts of Resistance',
        'Map of Worcester County, 1774',
      ],
      warmUp: {
        duration: '10 minutes',
        activity: 'Display a timeline of 1774-1775 with Lexington and Concord marked. Ask students: "When did the Revolution start?" Then reveal that Worcester shut down the royal courts six months earlier. Ask: "Does this change your answer? Why might we not have heard this story?"',
      },
      directInstruction: {
        duration: '20 minutes',
        content: [
          'Context: the Massachusetts Government Act and the Coercive Acts of 1774',
          'Worcester County conventions: how communities organized resistance',
          'The courthouse closure of September 6, 1774: what happened and why it mattered',
          'Timothy Bigelow and the Worcester militia leadership',
          'The interior resistance network: towns beyond the coast',
        ],
      },
      guidedPractice: {
        duration: '25 minutes',
        activities: [
          'Small group analysis: each group examines a different document from the county conventions',
          'Groups complete a graphic organizer comparing Worcester\'s courthouse closure with other acts of resistance (Boston Tea Party, Stamp Act protests)',
          'Class discussion: what made Worcester\'s approach different from street protests or mob action?',
        ],
      },
      independentPractice: {
        duration: '20 minutes',
        assignment: 'Write a one-paragraph argument answering: Was shutting down the courts a more important act of revolution than the Boston Tea Party? Cite at least two sources and explain your reasoning.',
      },
      closure: {
        duration: '10 minutes',
        activity: 'Exit ticket: "Name one way Worcester\'s resistance was different from what you previously knew about the start of the Revolution. Why do you think this story is less famous?"',
      },
      differentiation: {
        struggling: 'Simplified source excerpts with vocabulary support, sentence starters for the writing assignment, partner work during analysis',
        advanced: 'Additional convention records for independent analysis; extension comparing Worcester\'s conventions to modern town meetings and local governance',
        ell: 'Bilingual glossary of key terms (court, convention, authority, resistance), visual timeline, simplified source texts with originals available',
      },
      assessment: 'Formative: graphic organizer completion, class discussion participation. Summative: paragraph writing assessment evaluated on evidence use and argument quality.',
    } satisfies Record<string, unknown>,
    standards: {
      note: 'Standards alignment verified for Massachusetts and Common Core.',
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.2: Determine the central ideas or information of a primary or secondary source',
        'CCSS.ELA-LITERACY.RH.6-8.9: Analyze the relationship between a primary and secondary source on the same topic',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.3.6-8: Use questions generated about individuals and groups to analyze why they, and the developments they shaped, are seen as historically significant',
        'D2.His.16.6-8: Organize applicable evidence into a coherent argument about the past',
      ],
      stateStandards: {
        placeholder: 'Massachusetts History & Social Science: USI.T4 (The American Revolution)',
        suggestedAlignment: 'Aligns with MA 5.T4 and USI.T4 standards on causes and early events of the Revolution',
      },
    } satisfies Record<string, unknown>,
    comparativeAssignment: {
      title: 'Worcester and Concord: Two Forms of Revolutionary Action',
      description: 'Compare Worcester\'s closure of the royal courts in September 1774 with the confrontation at Concord\'s North Bridge in April 1775. How do these events represent different strategies of resistance? What do they reveal about how revolution actually unfolds?',
      compareTowns: [
        {
          townId: 'us-ma-concord',
          townName: 'Concord',
          comparisonPoints: [
            'Type of resistance: institutional dismantling vs. armed confrontation',
            'Organization: county convention planning vs. militia response to immediate threat',
            'Participants: who was involved and how were they mobilized',
            'Outcomes: what each action achieved for the revolutionary cause',
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
      title: 'Shutting Down the King\'s Court',
      slides: [
        { slideNumber: 1, title: 'Title Slide', bulletPoints: ['Worcester, Massachusetts', 'September 1774', '[Teacher Name] | [Date]'], speakerNotes: 'Set the scene: six months before Lexington and Concord, thousands of people in an interior Massachusetts town are about to shut down the royal government.', suggestedVisual: 'Historic map of Worcester County, 1774' },
        { slideNumber: 2, title: 'Essential Questions', bulletPoints: ['Can a revolution begin without a battle?', 'How did ordinary people challenge an empire?', 'Why is this story less famous?'], speakerNotes: 'Frame these as genuine puzzles. Most students will not have heard of Worcester\'s role in the Revolution.', suggestedVisual: 'Question text overlaid on image of Worcester Common' },
        { slideNumber: 3, title: 'The Crisis of 1774', bulletPoints: ['The Coercive Acts punish Massachusetts', 'The Massachusetts Government Act restructures colonial government', 'Royal courts become symbols of imposed authority'], speakerNotes: 'Help students understand that Parliament was directly attacking local self-governance, which is what made court closures a logical form of resistance.', suggestedVisual: 'Timeline of the Coercive Acts' },
        { slideNumber: 4, title: 'The County Conventions', bulletPoints: ['Towns send delegates to coordinate resistance', 'Conventions debate strategy and pass resolutions', 'Timothy Bigelow emerges as a key leader'], speakerNotes: 'Emphasize that this was organized, deliberate political action — not a spontaneous mob. These were farmers and tradesmen building a new system of governance.', suggestedVisual: 'Excerpt from convention records' },
        { slideNumber: 5, title: 'September 6, 1774: The Courts Are Closed', bulletPoints: ['Thousands gather at the Worcester courthouse', 'Royal officials forced to resign or recant', 'Courts cannot function without community cooperation'], speakerNotes: 'This is the key moment. The crowd was enormous and disciplined. They understood that royal authority depended on local compliance, and they withdrew that compliance.', suggestedVisual: 'Illustration of a colonial courthouse' },
        { slideNumber: 6, title: 'Primary Source Activity', bulletPoints: ['Read your assigned convention document', 'Complete the comparison graphic organizer', 'Prepare to discuss with the class'], speakerNotes: 'Transition to guided practice. Circulate and help groups with unfamiliar vocabulary in the convention records.', suggestedVisual: 'Activity instructions' },
        { slideNumber: 7, title: 'Reflection', bulletPoints: ['Was this a revolution before the Revolution?', 'Why do battles get remembered more than political organizing?', 'What can Worcester teach us about how change happens?'], speakerNotes: 'Guide students to think about why dramatic military events dominate historical memory, and what is lost when we overlook organized political resistance.', suggestedVisual: 'Modern photo of Worcester Common' },
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'The Revolution from the Interior: Worcester, Popular Sovereignty, and the Collapse of Royal Authority',
    gradeRange: '9-12',
    estimatedDuration: '4-5 class periods',
    summary: 'This advanced unit examines Worcester as a case study in how revolutions actually dismantle existing systems of power. High school students engage with county convention records, accounts of the courthouse closure of September 1774, and the political philosophy embedded in the resolutions of Worcester County towns to understand a critical but underappreciated dimension of the American Revolution: the systematic replacement of royal institutions with locally controlled alternatives. The unit explores how Worcester\'s interior resistance network operated independently of Boston\'s more famous agitation, how Timothy Bigelow and other local leaders organized collective action across dozens of towns, and how the court closures represented a practical assertion of popular sovereignty months before any shots were fired. Students will analyze how the Revolution looked different from the interior than from the coast, examine whose labor and participation made collective resistance possible, and construct arguments about why institutional dismantling has received less historical attention than military confrontation. The unit culminates in a document-based essay or research project.',
    lessonData: {
      objectives: [
        'Students will analyze how Worcester County conventions functioned as instruments of popular sovereignty',
        'Students will evaluate primary sources from the 1774 court closures for perspective, purpose, and reliability',
        'Students will construct arguments about the relative significance of institutional vs. military resistance',
        'Students will examine how geography and social structure shaped different forms of revolutionary action',
      ],
      essentialQuestions: [
        'How did Worcester dismantle royal authority without firing a shot, and why does this matter for understanding revolution?',
        'What does the court closure reveal about the relationship between governance and consent?',
        'Why has the military narrative of revolution overshadowed the story of institutional transformation?',
      ],
      materials: [
        'Extended primary source packet: county convention records, court closure accounts, Timothy Bigelow speeches',
        'Sourcing and corroboration worksheet',
        'Map of Worcester County towns and their convention participation',
        'DBQ essay prompt and rubric',
      ],
      warmUp: {
        duration: '10 minutes',
        activity: 'Present students with two definitions of "revolution": one focused on military conflict, one focused on the transfer of political authority. Ask: "Which definition better describes what happened in America between 1774 and 1776? Can both be true?"',
      },
      directInstruction: {
        duration: '25 minutes',
        content: [
          'Historical context: the imperial crisis from the interior perspective',
          'The Massachusetts Government Act as a direct attack on local self-governance',
          'The county convention system: structure, participation, and decision-making',
          'Timothy Bigelow: blacksmith, militia leader, political organizer',
          'The mechanics of court closure: how ordinary people made royal authority impossible',
        ],
      },
      guidedPractice: {
        duration: '30 minutes',
        activities: [
          'Source analysis: examining convention records for evidence of political philosophy and strategic thinking',
          'Corroboration exercise: comparing accounts of the September 1774 closure from different perspectives',
          'Small group discussion: how does the Worcester story challenge or complicate the standard narrative of the Revolution?',
        ],
      },
      independentPractice: {
        duration: '45 minutes (across multiple periods)',
        assignment: 'DBQ Essay or research project: "Was the closure of the Worcester courts in 1774 a more significant revolutionary act than the battles of Lexington and Concord?" Students must use at least 4 primary sources and address counterarguments.',
      },
      closure: {
        duration: '10 minutes',
        activity: 'Seminar discussion: "If Worcester\'s story were better known, how might it change the way Americans understand their own Revolution?"',
      },
      differentiation: {
        struggling: 'Scaffolded source analysis with guiding questions, essay outline template, vocabulary support for convention language',
        advanced: 'Additional archival sources from multiple county conventions; historiography component comparing Ray Raphael\'s work with traditional narratives',
        ell: 'Annotated source excerpts with margin glosses, visual essay planning tools, oral presentation option',
      },
      assessment: 'Formative: source analysis worksheets, seminar participation. Summative: DBQ essay or research project evaluated on argument quality, evidence integration, and engagement with counterarguments.',
    } satisfies Record<string, unknown>,
    standards: {
      note: 'Standards alignment verified for AP US History and Massachusetts frameworks.',
      commonCore: [
        'CCSS.ELA-LITERACY.RH.11-12.1: Cite specific textual evidence, attending to such features as the date and origin of the information',
        'CCSS.ELA-LITERACY.RH.11-12.6: Evaluate authors\' differing points of view on the same historical event or issue',
        'CCSS.ELA-LITERACY.RH.11-12.9: Integrate information from diverse sources into a coherent understanding',
      ],
      c3Framework: [
        'D2.His.1.9-12: Evaluate how historical events and developments were shaped by unique circumstances of time and place',
        'D2.His.3.9-12: Use questions generated about individuals and groups to assess how the significance of their actions changes over time',
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

export const worcesterPrimarySourcePackets: Prisma.PrimarySourcePacketCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Worcester County Convention Records (August-September 1774)',
    description: 'Official records of the Worcester County conventions held in the summer and fall of 1774, in which delegates from dozens of towns coordinated the closure of royal courts and the establishment of alternative governance structures. These documents reveal the deliberate, organized nature of interior resistance.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'American Antiquarian Society / Worcester County records',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'What do the convention records reveal about how decisions were made across multiple towns?',
      'How do the resolutions frame the legitimacy of their actions — what arguments do they use?',
      'What practical steps did the conventions take to replace royal governance?',
      'Who participated in these conventions, and whose voices might be absent from the records?',
      'How do these records compare to the more famous declarations and resolves from Boston?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'The Worcester County convention records are remarkable documents that reward close reading, though they require some patience with eighteenth-century political language. What makes them essential for teaching is that they reveal revolution as a process of institutional construction, not just destruction. The delegates were not simply protesting — they were building an alternative system of governance from the ground up, town by town. Guide students to notice the procedural language: motions, votes, resolutions, committees. These were people who understood that legitimate authority requires process and consent. The conventions drew delegates from across the county, meaning farmers, artisans, and tradesmen traveled significant distances to participate in collective decision-making. Ask students to consider what that commitment tells us about how seriously these communities took self-governance. The records also reveal strategic thinking — the conventions coordinated the timing and method of court closures to maximize impact and minimize the possibility of British military response. This was not spontaneous rage. It was calculated, principled political action by ordinary people who had decided that royal authority no longer deserved their compliance.',
    narrativeModel: 'opus',
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Accounts of the Worcester Courthouse Closure (September 6, 1774)',
    description: 'Firsthand accounts and contemporary reports of the day when thousands of Worcester County residents gathered to prevent the royal courts from sitting. Royal officials were compelled to walk between lines of militiamen and publicly renounce their commissions. This was one of the earliest organized acts of colonial defiance against Parliament\'s authority.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'Massachusetts Historical Society / Contemporary newspaper accounts',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'How do the accounts describe the size and behavior of the crowd? What does this suggest about the level of organization?',
      'What were the royal officials forced to do, and what does this tell us about the nature of the resistance?',
      'How do these accounts portray the balance between order and intimidation?',
      'Compare these accounts with descriptions of other crowd actions in 1774 — how was Worcester different?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'The accounts of September 6, 1774, describe a scene that is both dramatic and carefully controlled, and that tension is exactly what makes them valuable for the classroom. Thousands of people from across Worcester County converged on the town, and royal court officials were made to walk a gauntlet between lines of militiamen while publicly reading statements renouncing their authority under the Massachusetts Government Act. This was humiliation as political theater — a deliberate demonstration that royal power existed only so long as the community permitted it. Guide students to read these accounts with attention to what they reveal about crowd discipline. This was not a riot. The accounts consistently describe an organized, purposeful gathering that achieved its goal without significant violence. That restraint was itself a political statement: we are not a mob, we are a community exercising its sovereign right to refuse unjust governance. Help students notice the language of legitimacy that runs through these sources. The participants understood themselves not as rebels but as defenders of their established rights, and that self-understanding shaped everything about how they acted and how they wanted to be remembered.',
    narrativeModel: 'opus',
    displayOrder: 2,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Timothy Bigelow\'s Speeches and the Worcester Militia (1774-1775)',
    description: 'Records of speeches and actions by Timothy Bigelow, a Worcester blacksmith who became one of the most important militia leaders and political organizers in the interior resistance. Bigelow chaired key convention sessions, led the Worcester militia, and embodied the connection between political organizing and military readiness that characterized the county\'s resistance.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'Worcester Historical Museum / American Antiquarian Society',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'What does Bigelow\'s background as a blacksmith tell us about who led the resistance in interior towns?',
      'How do Bigelow\'s speeches connect political principles to practical action?',
      'What leadership qualities do these sources reveal, and how do they compare to more famous revolutionary leaders?',
      'How does Bigelow\'s story challenge assumptions about who "counts" as a revolutionary leader?',
      'What role did the militia play in Worcester\'s resistance beyond potential military action?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'Timothy Bigelow is exactly the kind of figure who makes local history essential for understanding the Revolution. He was not a wealthy merchant, a Harvard-educated lawyer, or a published political philosopher. He was a blacksmith — a skilled tradesman whose authority came from the respect of his neighbors, not from social standing or formal education. Bigelow chaired the Worcester County convention sessions that planned the court closures, and he led the Worcester militia company that would later march to Cambridge and serve throughout the war. His speeches, where they survive in the record, reveal a man who could articulate political principles in plain, direct language that resonated with farmers and artisans. Guide students to consider what Bigelow represents about the social breadth of the Revolution. The famous founders were extraordinary individuals, but the Revolution could not have happened without thousands of Timothy Bigelows — local leaders who organized their communities, risked their livelihoods, and translated abstract principles about rights and governance into concrete collective action. Ask students why figures like Bigelow are less remembered than Adams or Hancock, and what that selective memory tells us about how we construct national narratives.',
    narrativeModel: 'opus',
    displayOrder: 3,
    published: true,
  },
];

export const worcesterTeacherWorksheets: Prisma.TeacherWorksheetCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Worcester Court Closure: Comparing Acts of Revolutionary Resistance',
    worksheetType: 'GRAPHIC_ORGANIZER',
    description: 'Structured graphic organizer for analyzing and comparing the Worcester courthouse closure with other acts of colonial resistance, examining methods, organization, and outcomes.',
    content: `# Worcester Court Closure: Comparing Acts of Revolutionary Resistance

## Part 1: Source Information
- Source Title: _________________
- Author/Creator: _________________
- Date Created: _________________
- Type of Document: _________________
- Intended Audience: _________________

## Part 2: Analyzing the Worcester Court Closure
Key details from your source about September 6, 1774:
1.
2.
3.

## Part 3: Methods of Resistance — Comparison Table
| Feature | Worcester Court Closure (1774) | Boston Tea Party (1773) | Lexington/Concord (1775) |
|---------|-------------------------------|------------------------|--------------------------|
| Type of action | | | |
| Level of organization | | | |
| Who participated | | | |
| Target of resistance | | | |
| Use of violence | | | |
| Immediate outcome | | | |
| Long-term significance | | | |

## Part 4: The Role of County Conventions
- What was the purpose of the county conventions? _________________
- How did they coordinate action across towns? _________________
- How did they claim legitimacy for their actions? _________________

## Part 5: Institutional vs. Military Resistance
- How did closing the courts challenge British authority differently than armed confrontation?
_________________
- Why might institutional resistance be harder to respond to with military force?
_________________

## Part 6: Your Analysis
Based on your sources, was the closure of the Worcester courts a revolutionary act? Why or why not? Use specific evidence.

_______________________________________________`,
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Worcester Revolution Quiz',
    worksheetType: 'QUIZ',
    description: 'Assessment quiz covering the Worcester courthouse closure of 1774, county conventions, Timothy Bigelow, and the interior resistance network.',
    content: 'Quiz content — see quizData for structured questions.',
    quizData: {
      title: 'Worcester and the Revolution Before the Revolution',
      instructions: 'Answer all questions based on our study of Worcester in the American Revolution. For short answer questions, use specific evidence from sources we studied.',
      questions: [
        {
          id: 1,
          type: 'multiple_choice',
          question: 'What did the Worcester County conventions organize in September 1774?',
          options: [
            'The closure of royal courts and the resignation of royal officials',
            'A military attack on the British garrison in Boston',
            'A boycott of British tea',
            'The writing of the Declaration of Independence',
          ],
          correctAnswer: 'A',
          explanation: 'The Worcester County conventions coordinated the closure of royal courts, compelling officials appointed under the Massachusetts Government Act to publicly renounce their commissions. This was a deliberate, organized act of institutional resistance.',
        },
        {
          id: 2,
          type: 'multiple_choice',
          question: 'Why is the Worcester courthouse closure of 1774 historically significant?',
          options: [
            'It was one of the earliest organized acts of colonial defiance, occurring months before Lexington and Concord',
            'It was the first time colonists used violence against British soldiers',
            'It led directly to the signing of the Declaration of Independence',
            'It was the only act of resistance outside of Boston',
          ],
          correctAnswer: 'A',
          explanation: 'The September 1774 court closure predated the battles of Lexington and Concord by more than six months, demonstrating that revolution was already underway through institutional dismantling before any shots were fired.',
        },
        {
          id: 3,
          type: 'true_false',
          question: 'Timothy Bigelow, who chaired key convention sessions and led the Worcester militia, was a blacksmith by trade.',
          correctAnswer: 'True',
          explanation: 'Bigelow was indeed a blacksmith, which is significant because it demonstrates that revolutionary leadership in interior towns came from ordinary tradesmen and artisans, not just wealthy elites or educated professionals. His authority derived from community respect, not social standing.',
        },
        {
          id: 4,
          type: 'short_answer',
          question: 'Explain how the Worcester court closures represented a different kind of revolutionary action than the battles at Lexington and Concord. Use evidence from at least one source.',
          correctAnswer: '[Accept answers that distinguish institutional resistance from military confrontation and explain the significance of each]',
          explanation: 'Strong answers will note that Worcester\'s resistance was institutional rather than military — it dismantled royal governance by withdrawing community compliance rather than through armed conflict. The court closures showed that royal authority depended on local cooperation, and that organized refusal could be more effective than violence.',
        },
        {
          id: 5,
          type: 'multiple_choice',
          question: 'What British law provoked the Worcester County conventions and court closures?',
          options: [
            'The Stamp Act of 1765',
            'The Massachusetts Government Act of 1774',
            'The Quartering Act of 1765',
            'The Proclamation of 1763',
          ],
          correctAnswer: 'B',
          explanation: 'The Massachusetts Government Act, one of the Coercive Acts (or "Intolerable Acts"), restructured Massachusetts governance to increase royal control. It was a direct attack on local self-governance, which is why court closures were such a pointed form of resistance.',
        },
        {
          id: 6,
          type: 'true_false',
          question: 'The Worcester courthouse closure was a spontaneous, unplanned event driven by an angry mob.',
          correctAnswer: 'False',
          explanation: 'The closure was carefully planned through a series of county conventions where delegates from dozens of towns coordinated strategy, timing, and methods. The discipline and organization of the crowd on September 6 reflected weeks of deliberate political preparation.',
        },
        {
          id: 7,
          type: 'short_answer',
          question: 'Why do you think Worcester\'s role in the Revolution receives less attention than Lexington and Concord? What does this suggest about how we remember history?',
          correctAnswer: '[Accept answers that reflect on the preference for military narratives, the role of dramatic events in historical memory, and what is lost when institutional resistance is overlooked]',
          explanation: 'Strong answers will consider that battles are more dramatic and easier to narrate than political organizing, that famous "first shots" create cleaner origin stories than months of institutional dismantling, and that our preference for military narratives may cause us to misunderstand how revolutions actually happen.',
        },
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 10,
    published: true,
  },
];
