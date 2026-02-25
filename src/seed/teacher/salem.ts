// MODEL: Claude Sonnet (structure + code) / Claude Opus (long narratives >150 words)
// Curated teacher content for Salem, MA

import { Prisma } from '@prisma/client';

const TOWN_ID = 'us-ma-salem';

export const salemLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Salem\'s Maritime Revolution',
    gradeRange: '6-8',
    estimatedDuration: '3 class periods',
    summary: 'This lesson introduces middle school students to Salem\'s critical role as one of colonial America\'s busiest ports and examines how British trade policies transformed a prosperous merchant community into a center of Revolutionary resistance. Students will explore how the Sugar Act of 1764 and the Townshend Acts of 1767 threatened Salem\'s maritime economy, how the town\'s Committee of Safety organized opposition, and how Salem\'s mariners became privateers during the war. The lesson highlights the often-overlooked confrontation known as Leslie\'s Retreat in February 1775 — two months before Lexington and Concord — when Salem residents raised the North River drawbridge to prevent a British regiment from seizing militia cannon. Students will analyze primary sources from maritime records and town meeting minutes to understand how economic self-interest and political principle combined to drive a commercial port toward revolution.',
    lessonData: {
      objectives: [
        'Students will explain how British trade acts directly affected Salem\'s maritime economy',
        'Students will describe the role of Salem\'s Committee of Safety in organizing resistance',
        'Students will analyze the significance of Leslie\'s Retreat as an early act of defiance',
        'Students will evaluate how Salem\'s privateers contributed to the Revolutionary war effort',
      ],
      essentialQuestions: [
        'How did British trade policies turn Salem\'s merchants from loyal subjects into rebels?',
        'Why is Leslie\'s Retreat in Salem sometimes called the first armed resistance to the British — and why isn\'t it more famous?',
        'What risks did Salem\'s sailors take when they became privateers, and what motivated them?',
      ],
      materials: [
        'Primary source packet: Salem town records and maritime documents (provided)',
        'Map of Salem Harbor and the North River, 1770s',
        'Graphic organizer: Trade Acts Impact Analysis',
        'Timeline template: Salem\'s Road to Revolution',
      ],
      warmUp: {
        duration: '10 minutes',
        activity: 'Show students a colonial-era map of Salem Harbor with its wharves and warehouses. Ask: "What do you think this town\'s economy depended on? What would happen if a foreign government started taxing everything that came through this harbor?" Then display a list of goods affected by the Townshend Acts. Ask: "If you were a Salem merchant, which of these taxes would hurt you most?"',
      },
      directInstruction: {
        duration: '20 minutes',
        content: [
          'Salem as a major colonial port: trade routes, goods, and economic importance',
          'The Sugar Act (1764): how taxing molasses disrupted Salem\'s rum and fishing trade',
          'The Townshend Acts (1767): new duties on glass, paper, paint, lead, and tea',
          'Salem\'s Committee of Safety: organizing resistance at the local level',
          'Leslie\'s Retreat (February 26, 1775): the confrontation at the North River drawbridge',
          'From merchants to privateers: Salem\'s maritime contribution to the war',
        ],
      },
      guidedPractice: {
        duration: '25 minutes',
        activities: [
          'Small group analysis: each group examines a different trade act and its specific impact on Salem',
          'Groups complete the Trade Acts Impact Analysis organizer, identifying affected goods and economic consequences',
          'Class discussion: connect the economic impacts to the political actions taken by Salem\'s leaders',
        ],
      },
      independentPractice: {
        duration: '20 minutes',
        assignment: 'Write a diary entry from the perspective of a Salem merchant, sailor, or ship captain during 1774-1775. Describe how British trade policies have affected your livelihood and explain whether you support resistance and why. Include at least two specific historical details from the sources.',
      },
      closure: {
        duration: '10 minutes',
        activity: 'Exit ticket: "Why do you think Leslie\'s Retreat is less well-known than the Battle of Lexington, even though it happened two months earlier? What does this tell us about how we decide which events become famous?"',
      },
      differentiation: {
        struggling: 'Pre-selected key passages from source documents, vocabulary list for trade and maritime terms, partner support during writing activity',
        advanced: 'Additional sources on Salem\'s privateering fleet; extension research on how Salem\'s economy changed after independence',
        ell: 'Bilingual glossary of key terms (trade, tariff, privateer, drawbridge), visual timeline support, simplified source excerpts with originals available',
      },
      assessment: 'Formative: graphic organizer completion, class discussion participation. Summative: diary entry writing assessment using provided rubric.',
    } satisfies Record<string, unknown>,
    standards: {
      note: 'Standards alignment verified for Massachusetts and Common Core.',
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.2: Determine the central ideas or information of a primary or secondary source',
        'CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author\'s point of view or purpose',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.Eco.1.6-8: Explain how economic decisions affect the well-being of individuals, businesses, and society',
        'D2.His.14.6-8: Explain multiple causes and effects of events and developments in the past',
      ],
      stateStandards: {
        placeholder: 'Massachusetts History & Social Science: USI.T4 (The American Revolution)',
        suggestedAlignment: 'Aligns with MA 5.T4 and USI.T4 standards on causes and early events of the Revolution',
      },
    } satisfies Record<string, unknown>,
    comparativeAssignment: {
      title: 'Salem and Marblehead: Two Ports, One Revolution',
      description: 'Compare how Salem and neighboring Marblehead — both major fishing and trading ports — responded to British economic policies and contributed to the Revolutionary cause. How were their experiences similar, and what made each town\'s path to revolution distinctive?',
      compareTowns: [
        {
          townId: 'us-ma-marblehead',
          townName: 'Marblehead',
          comparisonPoints: [
            'Economic base: Salem\'s diversified trade vs. Marblehead\'s fishing-centered economy',
            'Impact of British trade acts on each port\'s primary industries',
            'Leadership and organization of resistance in each town',
            'Military contributions: Salem\'s privateers vs. Marblehead\'s regiment under Colonel John Glover',
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
      title: 'Salem\'s Maritime Revolution',
      slides: [
        { slideNumber: 1, title: 'Title Slide', bulletPoints: ['Salem, Massachusetts', 'Port, Trade, and the Road to Revolution', '[Teacher Name] | [Date]'], speakerNotes: 'Set the scene: Salem in the 1770s is one of the busiest ports in colonial America, with ships sailing to the Caribbean, Europe, and Africa.', suggestedVisual: 'Colonial-era map or painting of Salem Harbor' },
        { slideNumber: 2, title: 'Essential Questions', bulletPoints: ['How did trade policies turn merchants into rebels?', 'What happened at Leslie\'s Retreat — and why isn\'t it more famous?', 'What motivated sailors to become privateers?'], speakerNotes: 'Frame these as genuine questions. Emphasize that Salem\'s revolution was driven by economic realities as much as political ideals.', suggestedVisual: 'Question marks overlaid on image of colonial wharf' },
        { slideNumber: 3, title: 'Salem: A Port City', bulletPoints: ['One of the busiest harbors in colonial America', 'Trade in fish, rum, timber, molasses, manufactured goods', 'Wealthy merchant families and a large community of mariners'], speakerNotes: 'Help students understand the scale of Salem\'s maritime economy. Everything depended on the free flow of goods through the harbor.', suggestedVisual: 'Map of Salem Harbor with trade routes marked' },
        { slideNumber: 4, title: 'The Trade Acts Strike Salem', bulletPoints: ['Sugar Act (1764): taxed molasses — devastating for rum trade', 'Townshend Acts (1767): duties on glass, paper, paint, lead, tea', 'Salem merchants organize boycotts and non-importation agreements'], speakerNotes: 'Make these economic impacts concrete. A tax on molasses affected every fisherman who traded dried cod for Caribbean molasses.', suggestedVisual: 'Infographic showing taxed goods and their uses' },
        { slideNumber: 5, title: 'The Committee of Safety', bulletPoints: ['Local leaders organize resistance', 'Coordinated with other Massachusetts towns', 'Gathered and stored military supplies', 'British intelligence targeted these supplies'], speakerNotes: 'The Committee of Safety was the organizational backbone of resistance. These were prominent citizens risking arrest and property seizure.', suggestedVisual: 'Excerpt from Salem town meeting minutes' },
        { slideNumber: 6, title: 'Leslie\'s Retreat: February 26, 1775', bulletPoints: ['Colonel Leslie marches 240 soldiers to seize cannon', 'Salem residents raise the North River drawbridge', 'Tense standoff — no shots fired', 'Leslie retreats empty-handed'], speakerNotes: 'This happened two months before Lexington and Concord. Ask students why this event is not as famous. What makes some events "historic"?', suggestedVisual: 'Illustration or map of the North River drawbridge confrontation' },
        { slideNumber: 7, title: 'From Merchants to Privateers', bulletPoints: ['Salem commissioned more privateers than any other American port', 'Privateers captured British supply ships', 'Enormous financial risk and reward', 'Maritime skills turned to military advantage'], speakerNotes: 'Salem\'s 158+ privateering vessels were a major factor in disrupting British supply lines. This was both patriotism and business.', suggestedVisual: 'Image of a colonial privateer vessel or letter of marque' },
        { slideNumber: 8, title: 'Activity & Reflection', bulletPoints: ['Analyze your assigned trade act source', 'Complete the impact analysis organizer', 'How did economics drive revolution in Salem?'], speakerNotes: 'Transition to guided practice. Remind students that revolutions have economic roots as well as ideological ones.', suggestedVisual: 'Activity instructions' },
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Commerce, Resistance, and Salem\'s Revolutionary Identity',
    gradeRange: '9-12',
    estimatedDuration: '4-5 class periods',
    summary: 'This advanced unit examines how Salem\'s merchant class shaped resistance to British economic policies and how the port became central to the Revolutionary cause. High school students will engage with complex primary sources — including town meeting records, merchant correspondence, customs records, and accounts of Leslie\'s Retreat — to analyze the interplay between economic self-interest and political ideology. The unit challenges students to consider whether Salem\'s merchants were driven more by principle or profit, and whether that distinction even matters. Students will trace how non-importation agreements, smuggling networks, committees of correspondence, and eventually privateering transformed a commercial port into a Revolutionary stronghold. The unit also examines how Salem\'s maritime working class — the sailors, ropemakers, and dockworkers who built the ships and hauled the cargo — experienced the Revolution differently from the wealthy merchants who owned the vessels. The culminating project asks students to construct a documented argument about the relationship between commerce and revolution.',
    lessonData: {
      objectives: [
        'Students will analyze the relationship between economic interests and political ideology in driving revolutionary resistance',
        'Students will evaluate primary sources from Salem\'s merchant class to assess the interplay of principle and profit',
        'Students will examine how different social classes within Salem experienced the Revolution differently',
        'Students will construct evidence-based arguments about the role of commerce in revolutionary movements',
      ],
      essentialQuestions: [
        'Were Salem\'s merchants revolutionaries or opportunists — and does the distinction matter?',
        'How did the experience of revolution differ for Salem\'s ship owners and Salem\'s sailors?',
        'Can a revolution driven by economic grievances produce genuine political ideals?',
      ],
      materials: [
        'Extended primary source packet: merchant correspondence, town meeting records, customs documents',
        'Peabody Essex Museum digital archives (selected)',
        'Sourcing and corroboration worksheet',
        'DBQ essay prompt and rubric',
      ],
      warmUp: {
        duration: '10 minutes',
        activity: 'Display two quotes: one from a Salem merchant protesting the Townshend Acts on principle ("taxation without representation is tyranny"), and one from private correspondence complaining about lost profits. Ask: "Are these the same grievance or different ones? Does it matter?"',
      },
      directInstruction: {
        duration: '25 minutes',
        content: [
          'Salem\'s position in the Atlantic trade network: scope and significance',
          'The economic impact of successive British trade acts on Salem\'s merchant community',
          'Non-importation agreements: collective action and its discontents',
          'Salem\'s Committee of Safety and Committee of Correspondence: organization and leadership',
          'Leslie\'s Retreat in context: intelligence, confrontation, and the politics of memory',
          'Privateering as revolution: how Salem became the privateer capital of the Revolution',
          'Class dimensions: merchants, captains, and ordinary sailors in the Revolution',
        ],
      },
      guidedPractice: {
        duration: '30 minutes',
        activities: [
          'Source corroboration exercise: comparing public statements by Salem merchants with their private correspondence',
          'Document analysis: customs records showing the economic impact of non-importation on Salem\'s trade',
          'Small group discussion: whose interests did the Revolution serve in Salem — and whose did it not?',
        ],
      },
      independentPractice: {
        duration: '45 minutes (across multiple periods)',
        assignment: 'DBQ Essay: "To what extent was Salem\'s Revolutionary resistance driven by economic self-interest versus political principle?" Students must use at least 4 primary sources, address the perspectives of both merchants and working people, and engage with counterarguments.',
      },
      closure: {
        duration: '10 minutes',
        activity: 'Seminar discussion: "If Salem\'s merchants were primarily motivated by profit, does that diminish their contribution to American independence? Why or why not?"',
      },
      differentiation: {
        struggling: 'Scaffolded source analysis with guiding questions, essay outline template, key vocabulary support',
        advanced: 'Additional archival sources on Salem\'s post-war commercial transformation; comparative analysis with other Revolutionary port cities',
        ell: 'Annotated source excerpts, visual essay planning tools, oral presentation option as DBQ alternative',
      },
      assessment: 'Formative: source analysis worksheets, seminar participation. Summative: DBQ essay with source-based rubric evaluating argument construction, evidence use, and historical reasoning.',
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
        'D2.Eco.1.9-12: Analyze how incentives influence choices that may result in policies with a range of costs and benefits for different groups',
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

export const salemPrimarySourcePackets: Prisma.PrimarySourcePacketCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Salem Town Records (1774-1775)',
    description: 'Official records from Salem town meetings during the critical years leading to revolution. These documents capture debates over non-importation agreements, responses to the Coercive Acts, the formation of the Committee of Safety, and preparations for potential armed conflict. The records reveal how a prosperous commercial town collectively decided to risk its economic livelihood in the cause of resistance.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'Peabody Essex Museum',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'Who was eligible to participate in Salem\'s town meetings, and whose voices were excluded?',
      'How do the town records reflect tensions between economic interests and political principles?',
      'What specific actions did the town meeting authorize in response to British policies?',
      'How do official meeting minutes differ from private accounts of the same debates?',
      'What do these records reveal about how decisions for revolution were made at the local level?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'Salem\'s town records from 1774-1775 offer a remarkable window into how revolution was debated and decided at the local level. Unlike the grand declarations from the Continental Congress, these records capture the practical, sometimes contentious deliberations of ordinary citizens grappling with extraordinary choices. When Salem\'s town meeting voted to support non-importation, it was not an abstract political gesture — it was a decision by merchants, tradesmen, and fishermen to risk their own livelihoods. Guide students to read these records with attention to what is debated, what is assumed, and what is left unsaid. The formal language of town meeting minutes can mask the intensity of the disagreements underneath. Encourage students to notice the progression from cautious resolutions expressing loyalty to the Crown in early 1774 to increasingly defiant measures by late that year. This arc mirrors the broader colonial shift from protest to resistance, but here it is rendered in the specific, human-scale decisions of a single community. Ask students to consider who was in the room — and who was not. Town meetings excluded women, enslaved people, and men without sufficient property. The "voice of Salem" recorded in these minutes was, in reality, the voice of a propertied male minority. This makes the records no less valuable, but students must understand whose perspectives they represent and whose they do not.',
    narrativeModel: 'opus',
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Leslie\'s Retreat Eyewitness Accounts (February 1775)',
    description: 'Eyewitness accounts of the confrontation on February 26, 1775, when Colonel Alexander Leslie led 240 soldiers of the 64th Regiment of Foot from Castle William to Salem to seize cannon and military supplies reportedly stored at the North River forge. Salem residents, forewarned of the British approach, raised the drawbridge over the North River, preventing the soldiers from crossing. After a tense standoff involving armed townspeople, negotiations led to Leslie\'s withdrawal without seizing any supplies — an early act of successful colonial defiance that predated Lexington and Concord by two months.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'Salem Historical Society',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'How did Salem residents learn of the British expedition in time to prepare?',
      'What does the decision to raise the drawbridge reveal about the level of organization among Salem\'s resistance leaders?',
      'How do different eyewitness accounts characterize the mood of the confrontation — was it tense, angry, defiant, or even humorous?',
      'Why did Colonel Leslie agree to withdraw? What does this suggest about British constraints?',
      'Why do you think Leslie\'s Retreat is far less famous than the Battles of Lexington and Concord?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'Leslie\'s Retreat is one of the most valuable and underused episodes for teaching the American Revolution. On February 26, 1775 — nearly two months before the more famous confrontations at Lexington and Concord — Salem residents physically prevented a British military force from completing its mission. Colonel Alexander Leslie had been ordered to march from the harbor to the North River and seize cannon being stored at a forge. But Salem\'s intelligence network detected the expedition, and by the time the British soldiers reached the North River, the drawbridge had been raised. What followed was a tense standoff: armed townspeople on one side, professional soldiers on the other, with a body of water between them. Some accounts describe heated exchanges; others mention moments of dark humor, including Salem residents scuttling their own boats to prevent the soldiers from crossing by water. Eventually, a negotiated compromise allowed Leslie to march symbolically across the lowered bridge and immediately return, saving face without seizing anything. Guide students to consider why this episode is not more prominent in Revolutionary history. No shots were fired, no one died, and the confrontation was resolved through negotiation rather than violence. Ask students whether that makes it less historically significant — or more. The fact that armed resistance could succeed without bloodshed complicates the narrative that revolution required the "shot heard round the world" to begin.',
    narrativeModel: 'opus',
    displayOrder: 2,
    published: true,
  },
];

export const salemTeacherWorksheets: Prisma.TeacherWorksheetCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Salem\'s Maritime Revolution Quiz',
    worksheetType: 'QUIZ',
    description: 'Assessment quiz covering Salem\'s role in the American Revolution, including maritime trade, British trade acts, Leslie\'s Retreat, and privateering.',
    content: 'Quiz content — see quizData for structured questions.',
    quizData: {
      title: 'Salem and the American Revolution',
      instructions: 'Answer all questions based on our study of Salem in the American Revolution. For short answer questions, use specific evidence from sources we studied.',
      questions: [
        {
          id: 1,
          type: 'multiple_choice',
          question: 'Why was Salem particularly vulnerable to the effects of British trade acts like the Sugar Act and Townshend Acts?',
          options: [
            'Salem was one of the busiest ports in colonial America and its economy depended heavily on maritime trade',
            'Salem had no other industries besides shipping',
            'Salem was the capital of Massachusetts',
            'Salem had refused to pay any taxes before the Revolution',
          ],
          correctAnswer: 'A',
          explanation: 'Salem\'s economy was built around its harbor and maritime trade. Taxes on imported goods like molasses, glass, paper, and tea directly threatened the livelihoods of Salem\'s merchants, ship captains, sailors, and the tradesmen who supported the shipping industry.',
        },
        {
          id: 2,
          type: 'multiple_choice',
          question: 'What was Leslie\'s Retreat?',
          options: [
            'A British military base outside Salem',
            'A confrontation in February 1775 where Salem residents raised a drawbridge to prevent British soldiers from seizing cannon',
            'A battle during the siege of Boston in which Salem militia participated',
            'The name of a privateer ship from Salem',
          ],
          correctAnswer: 'B',
          explanation: 'On February 26, 1775, Colonel Alexander Leslie marched 240 soldiers to Salem to seize militia cannon stored at a North River forge. Salem residents raised the drawbridge, preventing the soldiers from crossing. After a tense standoff, Leslie withdrew without seizing any supplies.',
        },
        {
          id: 3,
          type: 'true_false',
          question: 'Leslie\'s Retreat occurred approximately two months before the Battles of Lexington and Concord.',
          correctAnswer: 'True',
          explanation: 'Leslie\'s Retreat took place on February 26, 1775, while the Battles of Lexington and Concord occurred on April 19, 1775. This makes the Salem confrontation one of the earliest acts of organized, armed colonial defiance against British military force.',
        },
        {
          id: 4,
          type: 'multiple_choice',
          question: 'What role did Salem\'s Committee of Safety play in the Revolutionary resistance?',
          options: [
            'It served as a court for trying British loyalists',
            'It organized local resistance, coordinated with other Massachusetts towns, and oversaw the gathering of military supplies',
            'It commanded Salem\'s privateering fleet',
            'It was responsible only for enforcing non-importation agreements',
          ],
          correctAnswer: 'B',
          explanation: 'Salem\'s Committee of Safety was the organizational backbone of local resistance. It coordinated actions with committees in other towns, organized the storage of military supplies, gathered intelligence on British movements, and helped prepare the community for potential armed conflict.',
        },
        {
          id: 5,
          type: 'short_answer',
          question: 'Explain how Salem\'s privateers contributed to the American Revolution. What risks and rewards were involved in privateering?',
          correctAnswer: '[Accept answers that explain privateering as capturing enemy merchant ships under government authorization, discuss both the patriotic and financial motivations, and note the risks of capture and loss]',
          explanation: 'Strong answers will note that Salem commissioned more privateering vessels than any other American port during the Revolution, that privateers disrupted British supply lines by capturing merchant ships, that captains and crews could profit enormously from prize captures, and that the risks included imprisonment, death, and financial ruin if a voyage failed. Students should recognize that privateering blurred the line between military service and commercial enterprise.',
        },
        {
          id: 6,
          type: 'short_answer',
          question: 'Why do you think Leslie\'s Retreat is far less well-known than the Battles of Lexington and Concord, even though it occurred earlier? What does this tell us about how historical memory works?',
          correctAnswer: '[Accept answers that discuss the absence of violence/casualties making the event less dramatic, the role of narrative in selecting which events become iconic, and the way "first shots" make a more compelling origin story]',
          explanation: 'Strong answers will recognize that Leslie\'s Retreat ended without shots fired or casualties, making it less dramatic than Lexington and Concord. The narrative of revolution often requires a clear, violent rupture — "the shot heard round the world" — rather than a negotiated standoff. Students should reflect on how communities and nations select certain events to commemorate and allow others to fade, and what this selectivity reveals about the stories we want to tell about ourselves.',
        },
        {
          id: 7,
          type: 'multiple_choice',
          question: 'The Sugar Act of 1764 particularly affected Salem because:',
          options: [
            'Salem produced most of the sugar consumed in the colonies',
            'Salem\'s merchants traded dried fish to the Caribbean for molasses, which was used to make rum — a major part of the local economy',
            'Salem\'s residents consumed more sugar than any other colonial town',
            'The Sugar Act closed Salem\'s harbor entirely',
          ],
          correctAnswer: 'B',
          explanation: 'Salem\'s fishing fleet exported dried cod to the Caribbean, where it was traded for molasses. The molasses was then distilled into rum, both for local consumption and export. The Sugar Act\'s tax on molasses threatened this entire trade cycle, striking at the heart of Salem\'s interconnected maritime economy.',
        },
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 10,
    published: true,
  },
];
