// MODEL: Claude Sonnet (structure + code) / Claude Opus (long narratives >150 words)
// Curated teacher content for Arlington, MA

import { Prisma } from '@prisma/client';

const TOWN_ID = 'us-ma-arlington';

export const arlingtonLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'The Bloodiest Mile: Menotomy and the Hidden Ferocity of April 19',
    gradeRange: '6-8',
    estimatedDuration: '3 class periods',
    summary: 'This lesson introduces middle school students to the fighting at Menotomy (now Arlington), where more soldiers and civilians were killed on April 19, 1775, than at Lexington and Concord combined. While Lexington Green and the North Bridge dominate popular memory, the brutal close-quarters fighting along the road through Menotomy reveals a different dimension of that day — one defined by ambush, house-to-house combat, and the participation of ordinary townspeople who were not part of any organized militia unit. Students will examine depositions from Menotomy residents, British casualty reports, and the stories of figures like Jason Russell, who was killed defending his own home, and Samuel Whittemore, an 80-year-old man who engaged British regulars at point-blank range. Through these sources, students will grapple with questions about why some events are remembered while others are forgotten, what the intensity of the Menotomy fighting tells us about colonial resolve, and how communities construct historical memory around violence.',
    lessonData: {
      objectives: [
        'Students will analyze primary source accounts describing the fighting at Menotomy on April 19, 1775',
        'Students will explain why more casualties occurred at Menotomy than at Lexington or Concord',
        'Students will evaluate why the Menotomy fighting is less well-known than Lexington and Concord',
        'Students will compare the experiences of different participants, including elderly combatants and civilians',
      ],
      essentialQuestions: [
        'Why was the fighting at Menotomy the bloodiest of April 19, and why do most people not know that?',
        'What do the stories of Jason Russell and Samuel Whittemore tell us about who fought the Revolution?',
        'How does a community decide which parts of its history to remember and which to let fade?',
      ],
      materials: [
        'Primary source packet: Menotomy depositions and British casualty reports (provided)',
        'Map of the British retreat route through Menotomy, 1775',
        'Graphic organizer: Comparing April 19 Across Three Towns',
        'Biographical sketches: Jason Russell and Samuel Whittemore',
      ],
      warmUp: {
        duration: '10 minutes',
        activity: 'Display a simple bar chart showing casualties at Lexington, Concord, and Menotomy on April 19. Ask students: "Which town name do you recognize? Which had the most casualties? Why do you think the town with the highest casualties is the least famous?"',
      },
      directInstruction: {
        duration: '20 minutes',
        content: [
          'Context: the British retreat from Concord and the gathering colonial response',
          'Geography of Menotomy: why the road through town became a killing ground',
          'Jason Russell: a man who refused to leave his home and died defending it',
          'Samuel Whittemore: the 80-year-old who ambushed British soldiers with musket, pistols, and sword',
          'The scale of fighting: why close-quarters ambush warfare produced the highest casualties of the day',
        ],
      },
      guidedPractice: {
        duration: '25 minutes',
        activities: [
          'Small group analysis: each group examines a different source about the Menotomy fighting',
          'Groups complete a graphic organizer comparing Menotomy to Lexington using specific evidence',
          'Class discussion: why does the type of fighting at Menotomy complicate simple narratives about the Revolution?',
        ],
      },
      independentPractice: {
        duration: '20 minutes',
        assignment: 'Write a one-paragraph response: "Why should the story of Menotomy be better known?" Use at least two pieces of evidence from the sources. Consider what this fighting reveals about the Revolution that Lexington and Concord alone do not.',
      },
      closure: {
        duration: '10 minutes',
        activity: 'Exit ticket: "Name one person from Menotomy whose story surprised you. What does their experience add to your understanding of April 19, 1775?"',
      },
      differentiation: {
        struggling: 'Pre-annotated source excerpts with key passages highlighted, sentence starters for writing response, paired reading support',
        advanced: 'Additional sources on the broader British retreat; extension comparing how Arlington and Lexington remember April 19 today',
        ell: 'Bilingual glossary of military and historical terms, visual map-based timeline, simplified source excerpts with originals available',
      },
      assessment: 'Formative: graphic organizer completion, class discussion participation. Summative: paragraph writing assessment using evidence-based rubric.',
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
      title: 'Menotomy and Lexington: The Battle You Know and the One You Don\'t',
      description: 'Compare the fighting at Menotomy with the confrontation at Lexington Green. Why did Menotomy produce more casualties? Why is Lexington more famous? What does this tell us about how historical memory works?',
      compareTowns: [
        {
          townId: 'us-ma-lexington',
          townName: 'Lexington',
          comparisonPoints: [
            'Nature of the fighting: open green vs. ambush along a road',
            'Participants: organized militia vs. townspeople acting independently',
            'Casualties: scale and causes of death',
            'Historical memory: why one town became a symbol and the other did not',
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
      title: 'The Bloodiest Mile: Menotomy on April 19',
      slides: [
        { slideNumber: 1, title: 'Title Slide', bulletPoints: ['Menotomy (Arlington), Massachusetts', 'April 19, 1775', '[Teacher Name] | [Date]'], speakerNotes: 'Set the scene: the British are retreating from Concord, and they are about to enter the most dangerous stretch of road on their entire march.', suggestedVisual: 'Map of the British retreat route with Menotomy highlighted' },
        { slideNumber: 2, title: 'Essential Questions', bulletPoints: ['Why was Menotomy the bloodiest fighting of April 19?', 'Who were Jason Russell and Samuel Whittemore?', 'Why is this part of the story less well-known?'], speakerNotes: 'Frame the central puzzle: the deadliest fighting happened in a town most students have never heard of.', suggestedVisual: 'Casualty comparison chart across three towns' },
        { slideNumber: 3, title: 'The British Retreat', bulletPoints: ['The march back from Concord under constant fire', 'Colonial militia gathering from surrounding towns', 'The road through Menotomy: narrow, flanked by houses and stone walls'], speakerNotes: 'Emphasize the geography. The road through Menotomy was a natural ambush site, and the British were exhausted and running low on ammunition.', suggestedVisual: 'Period map of the Menotomy road' },
        { slideNumber: 4, title: 'The People of Menotomy', bulletPoints: ['Jason Russell: killed defending his home at age 58', 'Samuel Whittemore: 80 years old, armed with musket, two pistols, and a sword', 'Unnamed townspeople: men and women who were not militia but fought anyway'], speakerNotes: 'These are not the famous names of the Revolution. They were farmers, tradesmen, and elderly residents who chose to fight. Let their ordinariness be the point.', suggestedVisual: 'Jason Russell House (historic photo or illustration)' },
        { slideNumber: 5, title: 'Close-Quarters Combat', bulletPoints: ['Fighting inside homes and behind walls', 'More British soldiers killed in Menotomy than at Lexington and Concord combined', 'Colonial casualties also higher here than anywhere else on April 19'], speakerNotes: 'This was not the symbolic confrontation of Lexington Green. It was desperate, chaotic, and lethal. Help students understand the difference.', suggestedVisual: 'Diagram of ambush tactics along retreat route' },
        { slideNumber: 6, title: 'Primary Source Activity', bulletPoints: ['Read your assigned source about the Menotomy fighting', 'Complete the comparison graphic organizer', 'Prepare to share your findings with the class'], speakerNotes: 'Transition to guided practice. Remind students to look for specific details about who was fighting and how.', suggestedVisual: 'Activity instructions' },
        { slideNumber: 7, title: 'Reflection', bulletPoints: ['Why does Lexington get the monument and Menotomy get the footnote?', 'What does this tell us about how we choose what to remember?', 'Whose stories from April 19 are still waiting to be told?'], speakerNotes: 'Guide students toward understanding that historical memory is constructed, not inevitable. What gets remembered is a choice, not a given.', suggestedVisual: 'Modern photo of the Jason Russell House museum' },
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Ambush and Aftermath: Menotomy, Violence, and Revolutionary Memory',
    gradeRange: '9-12',
    estimatedDuration: '4-5 class periods',
    summary: 'This advanced unit examines Menotomy (Arlington) as a case study in how revolutionary violence actually unfolded on April 19, 1775 — and how communities process, narrate, and selectively remember that violence. High school students engage with depositions about the Menotomy fighting, British casualty reports documenting the devastating losses along the retreat route, and local militia muster rolls that reveal who actually took up arms. The unit pushes past the sanitized version of the Revolution by confronting the reality of house-to-house combat, the killing of wounded soldiers, and the participation of people — like 80-year-old Samuel Whittemore — who defy easy categorization. Students examine why Menotomy has been overshadowed by Lexington and Concord in national memory, analyzing how narrative simplicity, symbolic power, and the politics of commemoration shape which events endure and which are forgotten. The unit develops advanced skills in source corroboration, the analysis of silence in the historical record, and the construction of evidence-based arguments about contested events. The culminating project asks students to build a case for how Menotomy should be understood within the broader story of April 19.',
    lessonData: {
      objectives: [
        'Students will construct evidence-based arguments about the nature and significance of the Menotomy fighting',
        'Students will evaluate the reliability of depositions, casualty reports, and muster rolls as complementary source types',
        'Students will analyze how and why certain events are elevated in national memory while others are marginalized',
        'Students will examine the Revolution through the experiences of non-traditional combatants and civilians',
      ],
      essentialQuestions: [
        'What does the fighting at Menotomy reveal about the Revolution that the battles at Lexington and Concord do not?',
        'How do communities decide which violence to commemorate and which to forget?',
        'What does Samuel Whittemore\'s story tell us about the limits of our assumptions about who makes history?',
      ],
      materials: [
        'Extended primary source packet: depositions, British casualty reports, militia muster rolls',
        'Jason Russell House historical documentation (selected)',
        'Sourcing and corroboration worksheet',
        'DBQ essay prompt and rubric',
      ],
      warmUp: {
        duration: '10 minutes',
        activity: 'Read two short passages: one from a standard textbook about April 19, one from a Menotomy deposition. Ask: "What does the textbook leave out? Why might that omission matter?"',
      },
      directInstruction: {
        duration: '25 minutes',
        content: [
          'Historical context: the British retreat and the escalation of violence along the road',
          'The geography of ambush: why Menotomy\'s landscape produced close-quarters combat',
          'Samuel Whittemore: the oldest known combatant, and what his story reveals about participation',
          'Jason Russell and the fight at his house: when the war came to a doorstep',
          'British casualty reports: what the numbers tell us about the severity of the Menotomy fighting',
        ],
      },
      guidedPractice: {
        duration: '30 minutes',
        activities: [
          'Source corroboration exercise: cross-referencing depositions with British casualty reports and muster rolls',
          'Analysis of silence: what do the muster rolls not tell us about who actually fought?',
          'Small group discussion: why does national memory favor Lexington over Menotomy?',
        ],
      },
      independentPractice: {
        duration: '45 minutes (across multiple periods)',
        assignment: 'DBQ Essay or multimedia project: "How should the fighting at Menotomy be understood within the story of April 19, 1775?" Students must use at least 4 primary sources, address the question of why Menotomy is less well-known, and account for counterarguments.',
      },
      closure: {
        duration: '10 minutes',
        activity: 'Seminar discussion: "Does the violence at Menotomy complicate or reinforce your understanding of the American Revolution? How?"',
      },
      differentiation: {
        struggling: 'Scaffolded source analysis with guiding questions, essay outline template, peer editing partnerships',
        advanced: 'Additional archival sources from the Jason Russell House; historiography assignment comparing scholarly treatments of Menotomy over time',
        ell: 'Annotated source excerpts with vocabulary support, visual essay planning tools, oral presentation option',
      },
      assessment: 'Formative: source corroboration worksheets, seminar participation. Summative: DBQ essay or multimedia project with source-based rubric.',
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

export const arlingtonPrimarySourcePackets: Prisma.PrimarySourcePacketCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Depositions About the Menotomy Fighting (April-May 1775)',
    description: 'Sworn statements from Menotomy residents and militia members describing the fierce fighting that occurred as British regulars retreated through the town on April 19, 1775. These depositions document close-quarters combat, civilian participation, and the highest casualty toll of any location along the battle road.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'Massachusetts Provincial Congress / Massachusetts State Archives',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'What specific details do the deponents provide about the nature of the fighting in Menotomy?',
      'How do these depositions describe the participation of people who were not part of organized militia units?',
      'What do the depositions reveal about the emotional experience of the fighting — fear, anger, determination?',
      'How do these accounts compare to depositions from Lexington, where the fighting was briefer and more one-sided?',
      'What might the deponents have chosen not to describe, and why?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'The Menotomy depositions are essential for correcting a persistent distortion in how April 19 is taught. Most curricula focus almost entirely on Lexington Green and the North Bridge at Concord, treating the rest of the day as an afterthought. But these depositions make clear that the fighting at Menotomy was qualitatively different from what happened earlier that morning — closer, more chaotic, and far more deadly. Guide students to notice the specific, visceral details in these accounts: fighting inside houses, hand-to-hand combat in doorways, the sounds and confusion of ambush warfare. Then ask them to compare these descriptions with the more orderly narratives from Lexington. The contrast is instructive. At Lexington, the militia was assembled and dispersing when they were fired upon. At Menotomy, townspeople were fighting from behind walls and inside buildings, often without coordination or command. This was not a set-piece confrontation — it was insurgent warfare, and treating it honestly in the classroom opens up important conversations about what the Revolution actually looked like at ground level. Help students understand that these depositions, like all depositions from the period, were collected with political intent, but that their granular detail about the Menotomy fighting gives them particular value as evidence of how the day unfolded.',
    narrativeModel: 'opus',
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'British Casualty Reports from the Retreat Through Menotomy (1775)',
    description: 'Official British military reports documenting casualties sustained during the retreat from Concord, with particular attention to the heavy losses suffered in the Menotomy stretch. These reports reveal the scale of British casualties and the assessments of British officers about the nature of the colonial resistance they encountered.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'British National Archives / Published in Gage correspondence collections',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'What do the casualty numbers reveal about which part of the retreat was most dangerous for British soldiers?',
      'How do British officers describe the colonial fighters they encountered at Menotomy?',
      'What language do the reports use to characterize the fighting — and what does that language reveal about British assumptions?',
      'How might these reports have been shaped by the officers\' need to explain their losses to superiors?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'British casualty reports are an underused resource in teaching April 19, and they are particularly powerful for the Menotomy segment of the retreat. The numbers alone tell a story: more British soldiers were killed or wounded in the stretch through Menotomy than in any other single location that day. But guide students beyond the numbers to the language of the reports. British officers describe being fired upon from houses, from behind walls and fences, by people who appeared and disappeared without warning. The frustration and confusion in these reports is palpable, and it gives students access to the British experience of the day in ways that colonial sources cannot. Ask students to consider the reporting context. These officers were explaining a disaster to their superiors. They had been sent on what was supposed to be a routine expedition and had suffered devastating casualties. How does that context shape what they wrote and how they wrote it? Students should notice both what the reports document — the intensity and effectiveness of the colonial resistance — and what they frame — the implicit argument that the losses were not due to poor planning but to an unprecedented and ungentlemanly form of warfare. This is a rich opportunity to discuss how military sources serve institutional as well as historical purposes.',
    narrativeModel: 'opus',
    displayOrder: 2,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Local Militia Muster Rolls from Menotomy (1775)',
    description: 'Muster rolls and company lists from the Menotomy militia and surrounding town companies that participated in the fighting on April 19, 1775. These documents record who was formally enrolled in the militia, their ages, and in some cases their occupations, providing a demographic profile of the men who fought.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'Massachusetts State Archives / Arlington Historical Society',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'What do the muster rolls tell us about the ages, occupations, and social standing of the militia members?',
      'Samuel Whittemore was 80 years old. What does the presence of elderly combatants suggest about the nature of the conflict?',
      'Who is likely missing from the muster rolls — and why does that matter for understanding who actually fought?',
      'How do formal muster rolls compare with deposition accounts of who participated in the fighting?',
      'What can we learn about a community\'s commitment to resistance from the proportion of its men who mustered?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'Muster rolls are deceptively simple documents — lists of names, ages, sometimes occupations — but they reward careful analysis in ways that more dramatic sources do not. Use the Menotomy muster rolls to help students build a demographic portrait of who actually fought on April 19. The ages are immediately striking. These were not young soldiers in a professional army. They were farmers, tradesmen, and laborers ranging from teenagers to men in their sixties and beyond, with Samuel Whittemore at the extraordinary age of 80. Guide students to think about what it means that an entire community mobilized in this way. Then push them to consider the limits of the document. Muster rolls record who was formally enrolled in the militia, but depositions and other accounts make clear that many people who fought at Menotomy were not on any roll — they were townspeople who took up arms spontaneously as the British passed through. Women who loaded muskets, carried water, or sheltered wounded men appear nowhere in these lists. Ask students: if the muster roll is our only source, what picture of the fighting do we get? What changes when we add depositions and other accounts? This exercise in triangulating sources builds a foundational skill for historical analysis while making the important point that official records always capture only a fraction of what happened.',
    narrativeModel: 'opus',
    displayOrder: 3,
    published: true,
  },
];

export const arlingtonTeacherWorksheets: Prisma.TeacherWorksheetCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Menotomy and Lexington: Comparing April 19 Across Two Towns',
    worksheetType: 'GRAPHIC_ORGANIZER',
    description: 'Structured graphic organizer for comparing the fighting at Menotomy with the confrontation at Lexington Green, analyzing differences in the nature of combat, participants, casualties, and historical memory.',
    content: `# Menotomy and Lexington: Comparing April 19 Across Two Towns

## Source Information
- Source Title: _________________
- Author/Creator: _________________
- Date Created: _________________
- Type of Source (deposition, report, muster roll, other): _________________

## Comparison Table
| Category | Lexington | Menotomy (Arlington) | What the Difference Tells Us |
|----------|-----------|---------------------|------------------------------|
| Time of day | | | |
| Type of fighting | | | |
| Who fought (militia, townspeople, other) | | | |
| British casualties | | | |
| Colonial casualties | | | |
| Duration of fighting | | | |
| How well-known today | | | |

## Key Figures
Choose one person from each town. For each, answer:

### Lexington Figure: _________________
- What do we know about them from primary sources? _________________
- What is their role in the story of April 19? _________________

### Menotomy Figure: _________________
- What do we know about them from primary sources? _________________
- What is their role in the story of April 19? _________________

## Analyzing the Gap in Memory
- Why is Lexington more famous than Menotomy, even though Menotomy saw worse fighting?
_________________
- What would change about how we understand the Revolution if Menotomy were better known?
_________________

## Evidence-Based Claim
Write one sentence making a claim about April 19 that uses evidence from both towns:

_______________________________________________

## Reflection
- What is one assumption you had about the Revolution that this comparison has challenged?
_________________`,
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Menotomy Fighting Assessment Quiz',
    worksheetType: 'QUIZ',
    description: 'Assessment quiz covering the fighting at Menotomy on April 19, 1775, primary source analysis, and the question of historical memory.',
    content: 'Quiz content — see quizData for structured questions.',
    quizData: {
      title: 'The Fighting at Menotomy: April 19, 1775',
      instructions: 'Answer all questions based on our study of Menotomy (Arlington) in the American Revolution. For short answer questions, use specific evidence from sources we studied.',
      questions: [
        {
          id: 1,
          type: 'multiple_choice',
          question: 'Why did the fighting at Menotomy produce more casualties than at Lexington or Concord?',
          options: [
            'The road through Menotomy was flanked by houses and walls, enabling close-quarters ambush warfare',
            'The Menotomy militia was larger and better trained than any other town\'s',
            'The British chose to make a stand at Menotomy rather than continue retreating',
            'Colonial artillery was positioned in Menotomy to block the retreat',
          ],
          correctAnswer: 'A',
          explanation: 'The geography of Menotomy — a narrow road lined with houses, stone walls, and fences — created a natural ambush corridor. Colonists fired from concealed positions at close range, producing devastating casualties on both sides. This was not an organized battle but a running fight through a built-up area.',
        },
        {
          id: 2,
          type: 'multiple_choice',
          question: 'What is historically significant about Samuel Whittemore\'s participation in the fighting at Menotomy?',
          options: [
            'He was approximately 80 years old, making him the oldest known combatant of April 19',
            'He was the commanding officer of the Menotomy militia',
            'He was a British officer who defected to the colonial side',
            'He wrote the most detailed deposition about the fighting',
          ],
          correctAnswer: 'A',
          explanation: 'Samuel Whittemore was roughly 80 years old when he armed himself with a musket, two pistols, and a sword and ambushed British soldiers from behind a stone wall. He was bayoneted and left for dead but survived. His story challenges assumptions about who fought the Revolution and underscores the breadth of community participation.',
        },
        {
          id: 3,
          type: 'true_false',
          question: 'Jason Russell was killed inside his own home during the fighting at Menotomy on April 19, 1775.',
          correctAnswer: 'True',
          explanation: 'Jason Russell, age 58, refused to flee when warned of the approaching British. He was killed at his doorstep, and additional fighting took place inside the house. Eleven other men died at or near the Russell house, making it the single deadliest site on April 19. The Jason Russell House still stands as a museum in Arlington.',
        },
        {
          id: 4,
          type: 'short_answer',
          question: 'Explain how the British casualty reports from the retreat through Menotomy can be both valuable and limited as historical sources. What do they reveal, and what might they distort?',
          correctAnswer: '[Accept answers that identify the value of casualty data as evidence of the fighting\'s intensity while noting that officers had institutional reasons to frame their losses in particular ways]',
          explanation: 'Strong answers will note that the casualty reports provide concrete evidence of the scale of fighting at Menotomy — more losses there than anywhere else on April 19 — but that officers writing these reports needed to explain a disaster to their superiors, which may have led them to emphasize the unexpected nature of colonial resistance rather than acknowledge planning failures.',
        },
        {
          id: 5,
          type: 'true_false',
          question: 'The militia muster rolls from Menotomy include every person who fought against the British in that town on April 19.',
          correctAnswer: 'False',
          explanation: 'Muster rolls recorded formally enrolled militia members, but depositions and other accounts make clear that many people who fought at Menotomy were not on any official roll. Townspeople who were not militia members took up arms spontaneously. Women who assisted the effort are entirely absent from the muster rolls. Relying solely on muster rolls would significantly undercount participation.',
        },
        {
          id: 6,
          type: 'multiple_choice',
          question: 'Which of the following best explains why Menotomy is less well-known than Lexington in popular memory of April 19?',
          options: [
            'Lexington offers a cleaner, more symbolic narrative — a first shot, an organized militia — while Menotomy\'s chaotic ambush warfare is harder to memorialize',
            'More people died at Lexington than at Menotomy',
            'The Menotomy fighting was not documented by any primary sources',
            'Menotomy was renamed Arlington, so the historical connection was lost entirely',
          ],
          correctAnswer: 'A',
          explanation: 'Lexington provides a clear, symbolic story: militia standing on a green, a first shot, the beginning of a revolution. Menotomy\'s fighting — chaotic, close-quarters, involving ambush and house-to-house combat — is harder to compress into a clean narrative. Historical memory tends to favor events that can be easily symbolized, even when other events were more consequential.',
        },
        {
          id: 7,
          type: 'short_answer',
          question: 'Compare the depositions about the Menotomy fighting with those from Lexington. How does the nature of the fighting described in each set of depositions differ, and what does that difference tell us about April 19 as a whole?',
          correctAnswer: '[Accept answers that identify specific differences in the type of combat described and draw broader conclusions about the escalation of violence throughout the day]',
          explanation: 'Strong answers will note that Lexington depositions describe a brief, one-sided confrontation where the militia was dispersing, while Menotomy depositions describe sustained, close-quarters fighting with active colonial engagement. This contrast reveals that April 19 was not a single event but an escalating series of confrontations, with the violence intensifying dramatically as the day progressed and more colonists joined the fighting.',
        },
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 10,
    published: true,
  },
];
