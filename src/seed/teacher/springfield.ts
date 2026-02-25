// MODEL: Claude Sonnet (structure + code) / Claude Opus (long narratives >150 words)
// Curated teacher content for Springfield, MA

import { Prisma } from '@prisma/client';

const TOWN_ID = 'us-ma-springfield';

export const springfieldLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'The Springfield Armory: Forging a Revolution from Iron and Will',
    gradeRange: '6-8',
    estimatedDuration: '3 class periods',
    summary: 'This lesson introduces middle school students to Springfield\'s critical role in the American Revolution as the site of a major Continental Army weapons manufacturing operation. Students will explore how General Henry Knox and the Continental Congress selected Springfield for its strategic inland location, its access to the Connecticut River for transport, and its distance from British coastal raids. Through primary source analysis of armory records, Congressional requisition documents, and Knox\'s inspection reports, students will understand that revolutions are not won by ideas alone — they require muskets, cartridges, and the labor of ordinary people who produced them. The lesson also introduces Shays\' Rebellion of 1786-1787, connecting the post-war economic grievances of veterans to the very arsenal they helped supply during the war. Students will grapple with the uncomfortable reality that the men who made the weapons of revolution later turned those same frustrations toward the new government they helped create.',
    lessonData: {
      objectives: [
        'Students will explain why Springfield was chosen as a site for Continental Army weapons manufacturing',
        'Students will analyze primary source documents related to armory production and military supply chains',
        'Students will describe the connection between wartime manufacturing and post-war economic grievances',
        'Students will identify how Shays\' Rebellion challenged the new nation\'s understanding of liberty and order',
      ],
      essentialQuestions: [
        'How did the practical work of making weapons shape the outcome of the Revolution?',
        'Why did the men who armed the Revolution later rebel against the government they helped create?',
        'What does Springfield tell us about the gap between revolutionary ideals and post-war reality?',
      ],
      materials: [
        'Primary source packet: Armory records and Continental Congress requisition documents (provided)',
        'Map of Connecticut River Valley supply routes, 1770s-1780s',
        'Graphic organizer: Cause and Effect — From Armory to Rebellion',
        'Timeline template: Springfield 1777-1787',
      ],
      warmUp: {
        duration: '10 minutes',
        activity: 'Show students an image of a Revolutionary-era musket. Ask: "What does it take to make one of these? How many would an army need? Where do they come from?" Then show a map of Springfield\'s location on the Connecticut River. Ask: "Why would the Continental Congress choose this place to build weapons?"',
      },
      directInstruction: {
        duration: '20 minutes',
        content: [
          'Context: the Continental Army\'s desperate need for weapons and ammunition',
          'Why Springfield: inland location, river access, existing metalworking skills',
          'General Knox\'s role in organizing weapons production and inspection',
          'What the armory produced: muskets, cartridges, gun carriages, and more',
          'After the war: economic depression, unpaid veterans, and the road to Shays\' Rebellion',
        ],
      },
      guidedPractice: {
        duration: '25 minutes',
        activities: [
          'Small group analysis: each group examines a different armory document — a requisition order, a production report, or a Knox inspection note',
          'Groups complete a cause-and-effect graphic organizer tracing how wartime decisions shaped post-war tensions',
          'Class discussion: how do supply chain documents change our understanding of what "fighting a revolution" means?',
        ],
      },
      independentPractice: {
        duration: '20 minutes',
        assignment: 'Write a one-paragraph response: "How did Springfield\'s role in arming the Revolution connect to the grievances that fueled Shays\' Rebellion?" Cite at least two primary sources and explain the connection between wartime service and post-war frustration.',
      },
      closure: {
        duration: '10 minutes',
        activity: 'Exit ticket: "Name one thing you learned about the Revolution today that has nothing to do with battles or famous leaders. Why does it matter?"',
      },
      differentiation: {
        struggling: 'Pre-annotated source documents with key passages highlighted, sentence starters for writing, vocabulary support for military and economic terms',
        advanced: 'Additional sources on Shays\' Rebellion; extension essay comparing Springfield\'s armory workers to soldiers on the front lines',
        ell: 'Bilingual glossary of key terms (armory, requisition, rebellion), visual timeline support, simplified source excerpts with originals available',
      },
      assessment: 'Formative: graphic organizer completion, class discussion participation. Summative: paragraph writing assessment using provided rubric.',
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
        'D2.His.14.6-8: Explain multiple causes and effects of events and developments in the past',
        'D2.His.16.6-8: Organize applicable evidence into a coherent argument about the past',
      ],
      stateStandards: {
        placeholder: 'Massachusetts History & Social Science: USI.T4 (The American Revolution) and USI.T5 (The Constitution)',
        suggestedAlignment: 'Aligns with MA 5.T4 and USI.T4-T5 standards on the Revolution and its aftermath',
      },
    } satisfies Record<string, unknown>,
    comparativeAssignment: {
      title: 'Springfield and Worcester: Two Inland Towns, Two Revolutionary Roles',
      description: 'Compare Springfield\'s role as a weapons manufacturing center with Worcester\'s role in the Revolutionary period. How did geography, resources, and local economies shape each town\'s contribution to the war effort? What similarities and differences emerged in their post-war experiences?',
      compareTowns: [
        {
          townId: 'us-ma-worcester',
          townName: 'Worcester',
          comparisonPoints: [
            'Geographic position and strategic value during the Revolution',
            'Contributions to the war effort: manufacturing vs. political organizing',
            'Post-war economic conditions and social tensions',
            'How each town remembers its Revolutionary-era role today',
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
      title: 'The Springfield Armory: Forging a Revolution',
      slides: [
        { slideNumber: 1, title: 'Title Slide', bulletPoints: ['Springfield, Massachusetts', 'The Armory That Armed a Revolution', '[Teacher Name] | [Date]'], speakerNotes: 'Set the scene: it is 1777, and the Continental Army is desperate for weapons. Springfield is about to become one of the most important places in America that most people have never heard of.', suggestedVisual: 'Historical illustration or photograph of the Springfield Armory site' },
        { slideNumber: 2, title: 'Essential Questions', bulletPoints: ['How did making weapons shape the Revolution?', 'Why did veterans rebel against the government they helped create?', 'What does Springfield reveal about revolutionary ideals vs. reality?'], speakerNotes: 'Frame these as genuine puzzles. The story of Springfield challenges simple narratives about the Revolution.', suggestedVisual: 'Map of Springfield with question overlay' },
        { slideNumber: 3, title: 'Why Springfield?', bulletPoints: ['Inland location — safe from British naval raids', 'Connecticut River — transport for supplies and finished weapons', 'Existing metalworking and craft traditions', 'Continental Congress directive, 1777'], speakerNotes: 'Help students think about logistics. A revolution needs an industrial base, not just brave soldiers.', suggestedVisual: 'Map of Connecticut River Valley with supply routes' },
        { slideNumber: 4, title: 'What the Armory Produced', bulletPoints: ['Muskets, bayonets, and gun carriages', 'Cartridges and ammunition by the thousands', 'Repair and maintenance of existing weapons', 'Knox inspection reports tracked quality and output'], speakerNotes: 'Use specific numbers from the requisition documents if available. Scale helps students grasp the industrial effort.', suggestedVisual: 'Images of Revolutionary-era muskets and armory production' },
        { slideNumber: 5, title: 'The People Behind the Weapons', bulletPoints: ['Skilled craftsmen: blacksmiths, gunsmiths, carpenters', 'Laborers and apprentices', 'Many were local farmers working seasonally', 'Their labor was essential — and often poorly compensated'], speakerNotes: 'Humanize the story. These were not famous leaders but ordinary workers whose labor made the war effort possible.', suggestedVisual: 'Period illustrations of craftsmen at work' },
        { slideNumber: 6, title: 'From Armory to Rebellion', bulletPoints: ['Post-war economic depression hit western Massachusetts hard', 'Veterans went unpaid; farms were seized for debts', 'Shays\' Rebellion, 1786-1787: veterans march on the armory', 'The weapons they helped create were now guarded against them'], speakerNotes: 'This is the emotional core of the lesson. The irony should not be overstated but it should be clearly understood.', suggestedVisual: 'Map or illustration of Shays\' Rebellion' },
        { slideNumber: 7, title: 'Reflection', bulletPoints: ['What does "fighting a revolution" mean beyond battles?', 'What obligations does a new nation owe the people who built it?', 'How does Springfield change your understanding of the Revolution?'], speakerNotes: 'Guide students toward recognizing that revolutions have consequences that extend far beyond the battlefield.', suggestedVisual: 'Modern photograph of the Springfield Armory National Historic Site' },
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Arsenal of Revolution, Crucible of Crisis: Springfield and the Unfinished Revolution',
    gradeRange: '9-12',
    estimatedDuration: '4-5 class periods',
    summary: 'This advanced unit uses Springfield as a case study to examine the material infrastructure of revolution and the social consequences of war. High school students engage with armory production records, Continental Congress requisition documents, Knox inspection reports, and post-war petitions from debt-burdened veterans to build a layered understanding of how Springfield moved from being the arsenal of independence to the flashpoint of Shays\' Rebellion. The unit challenges students to think beyond battles and ideology toward the economic and logistical realities that determined whether the Revolution could be fought at all — and whether its promises could be kept afterward. Students analyze how the same government that requisitioned weapons from Springfield\'s workers later failed to pay them, and how that failure exposed the structural weaknesses of the Articles of Confederation. The unit culminates in a document-based essay connecting Springfield\'s wartime manufacturing role to the post-war constitutional crisis, asking students to evaluate whether the Revolution fulfilled its promises to the people who made it possible.',
    lessonData: {
      objectives: [
        'Students will analyze primary source armory records and requisition documents as evidence of revolutionary logistics',
        'Students will evaluate the economic and social consequences of the Revolution for ordinary workers and veterans',
        'Students will construct evidence-based arguments connecting wartime manufacturing to post-war political crisis',
        'Students will assess how Shays\' Rebellion influenced the movement toward the Constitutional Convention',
      ],
      essentialQuestions: [
        'What do supply chains and production records reveal about revolution that battle narratives do not?',
        'Who bore the costs of the Revolution — and did they share in its rewards?',
        'How did the failures exposed at Springfield shape the creation of a new national government?',
      ],
      materials: [
        'Extended primary source packet: armory records, Continental Congress requisitions, Knox reports, Shays\' Rebellion petitions',
        'Springfield Armory National Historic Site digital collections (selected)',
        'Document analysis and corroboration worksheet',
        'DBQ essay prompt and rubric',
      ],
      warmUp: {
        duration: '10 minutes',
        activity: 'Display a Continental Congress requisition order for muskets alongside a 1786 petition from a debt-burdened veteran. Ask: "What connects these two documents? What story do they tell together that neither tells alone?"',
      },
      directInstruction: {
        duration: '25 minutes',
        content: [
          'The logistics of revolution: why weapons manufacturing was as important as battlefield strategy',
          'Springfield\'s selection and development as a national armory',
          'Knox\'s inspection regime: quality control in an 18th-century arms factory',
          'Post-war economic collapse in western Massachusetts: causes and consequences',
          'Shays\' Rebellion as a constitutional catalyst: from crisis to Convention',
        ],
      },
      guidedPractice: {
        duration: '30 minutes',
        activities: [
          'Source corroboration exercise: comparing armory production records with Congressional requisition demands to identify gaps between what was ordered and what was delivered',
          'Document analysis: evaluating post-war petitions for what they reveal about veterans\' economic conditions and political expectations',
          'Small group discussion: how do we reconcile the language of liberty with the reality of unpaid workers and seized farms?',
        ],
      },
      independentPractice: {
        duration: '45 minutes (across multiple periods)',
        assignment: 'DBQ Essay: "How did Springfield\'s role as a Revolutionary-era armory connect to the post-war crisis that helped bring about the Constitutional Convention?" Students must use at least 4 primary sources and address both the wartime and post-war periods.',
      },
      closure: {
        duration: '10 minutes',
        activity: 'Seminar discussion: "Did the Revolution betray the people who made it possible? What evidence supports your position?"',
      },
      differentiation: {
        struggling: 'Scaffolded document analysis with guiding questions, essay outline template, key vocabulary pre-taught with definitions',
        advanced: 'Additional sources including Federalist and Anti-Federalist arguments about Shays\' Rebellion; historiography comparison of scholarly interpretations',
        ell: 'Annotated source excerpts with margin glosses, visual essay planning tools, oral presentation option as alternative assessment',
      },
      assessment: 'Formative: document analysis worksheets, seminar participation. Summative: DBQ essay with source-based rubric evaluating argument construction, evidence use, and historical reasoning.',
    } satisfies Record<string, unknown>,
    standards: {
      note: 'Standards alignment verified for AP US History and Massachusetts frameworks.',
      commonCore: [
        'CCSS.ELA-LITERACY.RH.11-12.1: Cite specific textual evidence, attending to such features as the date and origin of the information',
        'CCSS.ELA-LITERACY.RH.11-12.7: Integrate and evaluate multiple sources of information presented in diverse formats',
        'CCSS.ELA-LITERACY.RH.11-12.9: Integrate information from diverse sources into a coherent understanding',
      ],
      c3Framework: [
        'D2.His.1.9-12: Evaluate how historical events and developments were shaped by unique circumstances of time and place',
        'D2.His.14.9-12: Analyze multiple and complex causes and effects of events in the past',
        'D2.His.16.9-12: Integrate evidence from multiple relevant historical sources and interpretations',
      ],
      stateStandards: {
        placeholder: 'Massachusetts History & Social Science: USI.T4, USI.T5, AP US History Periods 3-4',
        suggestedAlignment: 'Aligns with MA USI.T4-T5 and AP US History Key Concepts 3.1, 3.2, 3.3',
      },
    } satisfies Record<string, unknown>,
    displayOrder: 2,
    published: true,
  },
];

export const springfieldPrimarySourcePackets: Prisma.PrimarySourcePacketCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Springfield Armory Production Records (1777-1783)',
    description: 'Official production records from the Springfield Armory during the Revolutionary War, documenting the manufacture of muskets, cartridges, gun carriages, and other military supplies. These records detail output quantities, materials consumed, and workforce allocations, providing a granular view of the logistical backbone of the Continental Army\'s war effort.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'Springfield Armory National Historic Site / National Archives',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'What do these production records tell us about the scale of manufacturing required to sustain a revolution?',
      'How do gaps between requisition orders and actual output reflect the challenges the Continental Army faced?',
      'What can we infer about the workers from these records, even though they are not named individually?',
      'How do these logistical documents change our understanding of what it meant to "fight" a revolution?',
      'Compare these records to the post-war economic conditions in western Massachusetts. What connections emerge?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'Production records are not the most dramatic primary sources, and that is precisely what makes them so valuable in the classroom. Students are accustomed to thinking about the Revolution in terms of battles, speeches, and famous leaders. The Springfield Armory records redirect their attention to the material reality of war: iron had to be smelted, gun barrels had to be bored, cartridges had to be assembled by hand — thousands upon thousands of them. Guide students to read these documents not as dry bureaucratic artifacts but as evidence of human labor under pressure. Every line item represents hours of skilled work by craftsmen whose names rarely appear in textbooks. Ask students to calculate what the numbers mean in practical terms: how many muskets per week, how many workers would be needed, what happened when supply fell short of demand. Then connect this to the post-war period. The men who did this work — and the farmers who supplied the raw materials — were the same people who found themselves crushed by debt and taxes after the war ended. The armory records become the first chapter of a story that ends with Shays\' Rebellion, and students who understand the labor invested in the Revolution will understand the bitterness of those who felt its promises were broken.',
    narrativeModel: 'opus',
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Continental Congress Requisition Documents for Springfield (1777-1781)',
    description: 'Requisition orders and correspondence from the Continental Congress directing the establishment and supply of the Springfield Armory. These documents reveal the political decisions behind weapons manufacturing, including debates over resource allocation, transportation logistics, and the chronic shortages that plagued the war effort.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'National Archives / Library of Congress, Continental Congress Papers',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'What do these requisition documents reveal about the Continental Congress\'s priorities during the war?',
      'How does the language of these orders reflect the urgency — or lack thereof — of the military situation?',
      'What logistical challenges are visible in the correspondence between Congress and the armory?',
      'How do these political documents compare to the on-the-ground production records from the armory itself?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'These requisition documents offer students a window into the gap between political decision-making and ground-level reality — a gap that is as relevant to understanding the Revolution as any battle narrative. The Continental Congress could order muskets, but ordering and receiving were very different things. Guide students to read these documents with attention to tone and specificity. Early requisitions tend to be optimistic and vague; later ones grow increasingly urgent and detailed, reflecting hard lessons about what it actually takes to keep an army supplied. This progression tells a story in itself. Encourage students to think about what is not in these documents: there is no mention of the workers who will fulfill the orders, no acknowledgment of the human cost of production. The Congress writes as if weapons appear through bureaucratic command. Pair these documents with the armory production records to create a powerful exercise in corroboration. Students will see that what Congress demanded and what Springfield delivered were often quite different, and that difference reveals the structural weaknesses of a revolutionary government trying to wage war without a stable tax base, reliable currency, or centralized authority. This is where the seeds of the post-war constitutional crisis become visible.',
    narrativeModel: 'opus',
    displayOrder: 2,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'General Henry Knox Inspection Reports on the Springfield Armory (1778-1782)',
    description: 'Inspection reports and correspondence from General Henry Knox, who oversaw the Continental Army\'s artillery and ordnance operations, including the Springfield Armory. Knox\'s reports assess production quality, workforce conditions, and supply chain challenges, offering a military commander\'s perspective on the armory\'s operations and strategic importance.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'Massachusetts Historical Society / Henry Knox Papers, National Archives',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'What does Knox prioritize in his inspection reports? What does this reveal about his perspective as a military commander?',
      'How does Knox describe the workers and conditions at the armory? What attitudes does his language reveal?',
      'What problems does Knox identify, and what solutions does he propose? How realistic were his recommendations?',
      'How do Knox\'s reports compare to the Congressional requisitions and the production records? Where do they agree or diverge?',
      'What can we learn about military-civilian relationships during the Revolution from these documents?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'Knox\'s inspection reports are the third leg of a documentary triad that gives students a remarkably complete picture of how the Springfield Armory operated. Where the Congressional requisitions show political ambition and the production records show ground-level output, Knox\'s reports occupy the middle ground: a military commander translating political demands into practical expectations and assessing whether those expectations are being met. Knox was a pragmatist. His reports are detailed, sometimes blunt, and focused on outcomes rather than ideology. This makes them excellent sources for teaching students how different positions within a system produce different kinds of evidence. Guide students to notice what Knox pays attention to — weapon quality, production rates, supply bottlenecks — and what he overlooks or takes for granted, such as worker welfare and fair compensation. Knox was concerned with winning a war, not with the economic futures of the people making his weapons. This blind spot becomes historically significant when students connect the armory period to Shays\' Rebellion. The men Knox inspected and managed were the same men who, a few years later, found themselves unable to pay their debts and facing imprisonment. Knox himself, by then Secretary of War, would help organize the military response to the rebellion — a fact that adds a sobering layer of irony to these earlier documents.',
    narrativeModel: 'opus',
    displayOrder: 3,
    published: true,
  },
];

export const springfieldTeacherWorksheets: Prisma.TeacherWorksheetCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Springfield Armory: Supply Chain and Consequence Analysis',
    worksheetType: 'GRAPHIC_ORGANIZER',
    description: 'Structured graphic organizer for analyzing armory production documents and tracing the connection between wartime manufacturing and post-war grievances.',
    content: `# Springfield Armory: Supply Chain and Consequence Analysis

## Document Information
- Document Title: _________________
- Document Type (requisition, production record, inspection report): _________________
- Date: _________________
- Author/Creator: _________________
- Intended Audience: _________________

## What the Document Reveals
List 3 key details or claims from this document:
1.
2.
3.

## Supply Chain Analysis
- What was being ordered or produced? _________________
- What challenges or shortages are mentioned? _________________
- What does this document suggest about the gap between demand and supply? _________________

## Perspective Check
- What is the author's role in the supply chain (political leader, military commander, production manager)? _________________
- How does that role shape what the document focuses on? _________________
- What is missing from this document that another perspective might include? _________________

## Corroboration
Compare with another Springfield document from a different perspective:
| Detail | This Document Says | Other Document Says | Agreement? |
|--------|-------------------|---------------------|------------|
| Production levels | | | |
| Quality of weapons | | | |
| Worker conditions | | | |
| Supply challenges | | | |

## Connecting Wartime to Post-War
- How might the conditions described in this document have contributed to post-war grievances? _________________
- What promises (explicit or implied) were made to workers and suppliers? _________________
- Were those promises kept? What evidence supports your answer? _________________

## Your Analysis
Based on this document, what does Springfield's armory tell us about the hidden costs of revolution?

_______________________________________________`,
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Springfield in the Revolution Quiz',
    worksheetType: 'QUIZ',
    description: 'Assessment quiz covering Springfield\'s role as a Revolutionary-era armory, primary source analysis of production and requisition documents, and the connection to Shays\' Rebellion.',
    content: 'Quiz content — see quizData for structured questions.',
    quizData: {
      title: 'Springfield: Arsenal of Revolution, Crucible of Crisis',
      instructions: 'Answer all questions based on our study of Springfield in the American Revolution. For short answer questions, use specific evidence from sources we studied.',
      questions: [
        {
          id: 1,
          type: 'multiple_choice',
          question: 'Why did the Continental Congress select Springfield as a site for weapons manufacturing?',
          options: [
            'Its inland location on the Connecticut River provided both safety from British raids and a transport route for supplies',
            'It was the largest city in Massachusetts at the time',
            'British forces had already been defeated in the area',
            'George Washington personally owned property there',
          ],
          correctAnswer: 'A',
          explanation: 'Springfield was chosen for its strategic advantages: it was far enough inland to be safe from British naval attack, the Connecticut River provided a transportation corridor for raw materials and finished weapons, and the region had existing metalworking skills.',
        },
        {
          id: 2,
          type: 'multiple_choice',
          question: 'What role did General Henry Knox play in relation to the Springfield Armory?',
          options: [
            'He oversaw Continental Army ordnance operations and conducted inspections of the armory\'s production quality and output',
            'He founded the armory and served as its first director',
            'He led troops in battle at Springfield during a British attack',
            'He organized Shays\' Rebellion to protest armory working conditions',
          ],
          correctAnswer: 'A',
          explanation: 'Knox oversaw the Continental Army\'s artillery and ordnance operations. His inspection reports assessed weapon quality, production rates, and supply challenges at the Springfield Armory, providing a military commander\'s perspective on its operations.',
        },
        {
          id: 3,
          type: 'true_false',
          question: 'The Springfield Armory produced only muskets during the Revolutionary War.',
          correctAnswer: 'False',
          explanation: 'The Springfield Armory produced a range of military supplies including muskets, bayonets, cartridges, ammunition, and gun carriages. The scope of production extended well beyond a single weapon type, reflecting the Continental Army\'s diverse material needs.',
        },
        {
          id: 4,
          type: 'short_answer',
          question: 'Explain what the gap between Continental Congress requisition orders and actual armory production records reveals about the challenges of waging the American Revolution.',
          correctAnswer: '[Accept answers that identify the gap between political demands and production realities, and connect this to resource shortages, workforce limitations, or governmental structural weaknesses]',
          explanation: 'Strong answers will note that the Continental Congress could order weapons but lacked the centralized authority, stable funding, and reliable supply chains to ensure those orders were filled. The gap between demand and delivery reveals the structural weaknesses of a revolutionary government operating under the Articles of Confederation.',
        },
        {
          id: 5,
          type: 'multiple_choice',
          question: 'What was the connection between Springfield\'s wartime armory role and Shays\' Rebellion of 1786-1787?',
          options: [
            'Veterans and workers who had supplied the Revolution faced crushing debts and marched on the very arsenal they had helped stock',
            'British loyalists attacked the armory to reclaim weapons',
            'The armory was closed after the war and workers demanded it reopen',
            'Daniel Shays had been the armory\'s wartime commander',
          ],
          correctAnswer: 'A',
          explanation: 'After the war, western Massachusetts farmers and veterans — many of whom had contributed to the war effort through armory work or military service — were devastated by economic depression, heavy taxes, and debt. Their march on the Springfield Armory in 1787 targeted the same weapons stores they had helped create.',
        },
        {
          id: 6,
          type: 'true_false',
          question: 'Knox\'s inspection reports focused primarily on the welfare and fair compensation of armory workers.',
          correctAnswer: 'False',
          explanation: 'Knox\'s reports focused on production output, weapon quality, and supply chain efficiency — the concerns of a military commander trying to equip an army. Worker welfare and compensation were largely absent from his reports, a blind spot that becomes historically significant when the same workers later faced economic ruin.',
        },
        {
          id: 7,
          type: 'short_answer',
          question: 'How does studying Springfield\'s armory records change our understanding of what it meant to "fight" the American Revolution? Use evidence from at least one source we examined.',
          correctAnswer: '[Accept answers that demonstrate understanding of the logistical and manufacturing dimensions of the Revolution, moving beyond battle-focused narratives]',
          explanation: 'Strong answers will argue that the Revolution required a massive logistical and manufacturing effort alongside military engagements. Production records, requisition orders, and inspection reports reveal that ordinary craftsmen, laborers, and suppliers were as essential to the war effort as soldiers, and that the costs of revolution extended far beyond the battlefield.',
        },
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 10,
    published: true,
  },
];
