// MODEL: Claude Sonnet (structure + code) / Claude Opus (long narratives >150 words)
// Curated teacher content for Concord, MA

import { Prisma } from '@prisma/client';

const TOWN_ID = 'us-ma-concord';

export const concordLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'The North Bridge and the Fight for Concord',
    gradeRange: '6-8',
    estimatedDuration: '3 class periods',
    summary: 'This lesson guides middle school students through the dramatic events at the North Bridge in Concord on April 19, 1775, where colonial militia fired on British regulars and forced their retreat — a pivotal turning point in the opening hours of the American Revolution. Students will examine how the town of Concord prepared for potential conflict, how Colonel James Barrett organized the storage and concealment of military supplies, and how the minutemen mustered from surrounding towns to converge on Concord. The lesson explores the critical decision-making of militia leaders like Major John Buttrick and the sacrifice of Captain Isaac Davis, who was among the first Americans killed while advancing against British troops. Students will analyze why the confrontation at North Bridge unfolded differently from the earlier skirmish at Lexington Green — here the colonists chose to advance rather than disperse — and what that shift reveals about the escalation from protest to armed resistance on a single April morning.',
    lessonData: {
      objectives: [
        'Students will describe the events at the North Bridge and explain why the colonial militia chose to advance against British troops',
        'Students will analyze the role of minutemen and the militia system in colonial resistance',
        'Students will explain how Colonel Barrett\'s hidden supplies contributed to the British expedition and its ultimate failure',
        'Students will compare the confrontation at North Bridge with the earlier encounter at Lexington Green',
      ],
      essentialQuestions: [
        'Why did the colonial militia at Concord choose to fight rather than disperse as they had at Lexington?',
        'How did ordinary townspeople organize themselves for armed resistance against the most powerful military in the world?',
        'What role did preparation and planning play in the events of April 19, 1775?',
      ],
      materials: [
        'Primary source packet: Amos Barrett\'s account and Reverend Emerson\'s diary (provided)',
        'Map of Concord and the North Bridge, 1775',
        'Graphic organizer: Cause and Consequence',
        'Comparison chart: Lexington vs. Concord',
      ],
      warmUp: {
        duration: '10 minutes',
        activity: 'Show a photograph of the North Bridge today and the Minute Man statue. Ask students: "Why would a community build a monument at a bridge? What happened here that people wanted to remember?" Then display a period map showing the British route from Lexington to Concord. Ask: "The British already fought at Lexington. Why did they keep marching?"',
      },
      directInstruction: {
        duration: '20 minutes',
        content: [
          'Context: Concord as a center of colonial resistance — the Provincial Congress met here',
          'Colonel James Barrett\'s farm: hiding cannons, musket balls, and provisions from the British',
          'The minuteman system: who were they, how were they organized, and how quickly could they respond?',
          'The British search of Concord and the smoke that alarmed the militia on Punkatasset Hill',
          'The confrontation at North Bridge: Major Buttrick, Captain Davis, and the decision to advance',
        ],
      },
      guidedPractice: {
        duration: '25 minutes',
        activities: [
          'Small groups read and annotate Amos Barrett\'s eyewitness account of the North Bridge fight',
          'Groups complete cause-and-consequence organizer: What led to the militia\'s decision to advance?',
          'Class discussion: How was the confrontation at North Bridge different from Lexington Green?',
        ],
      },
      independentPractice: {
        duration: '20 minutes',
        assignment: 'Write a one-paragraph explanation answering: Why did the militia at North Bridge decide to advance against the British soldiers, and what were the consequences of that decision? Cite at least one primary source and use specific details from the lesson.',
      },
      closure: {
        duration: '10 minutes',
        activity: 'Exit ticket: "If you were a minuteman watching smoke rise from the direction of Concord town center, what would you think was happening? How might that affect your decision to fight?" Discuss how limited information shapes decision-making in crisis moments.',
      },
      differentiation: {
        struggling: 'Annotated primary source excerpts with vocabulary support, sentence starters for writing, visual timeline of events',
        advanced: 'Additional reading on the British retreat from Concord and the running battle back to Boston; essay comparing militia tactics at Concord with later battles',
        ell: 'Bilingual key terms glossary, visual sequence chart of events, simplified source excerpts with originals available for reference',
      },
      assessment: 'Formative: graphic organizer completion, class discussion participation. Summative: paragraph writing assessment using provided rubric.',
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
      title: 'Lexington and Concord: Two Confrontations, Two Outcomes',
      description: 'Compare how the colonial militia responded at Lexington Green and at the North Bridge in Concord on the same morning. Why did the militia disperse at Lexington but advance at Concord? What changed in those few hours?',
      compareTowns: [
        {
          townId: 'us-ma-lexington',
          townName: 'Lexington',
          comparisonPoints: [
            'Size and organization of the militia at each location',
            'Orders given to the militia by their commanders',
            'Whether the militia advanced, stood ground, or dispersed',
            'Casualties and immediate outcomes of each confrontation',
            'How each town remembers and commemorates the day',
          ],
        },
      ],
      rubric: [
        { criteria: 'Historical Accuracy', excellent: 'All facts are accurate and supported with citations to primary sources', proficient: 'Facts are accurate with general references to evidence', developing: 'Some inaccuracies or claims without supporting evidence' },
        { criteria: 'Comparative Analysis', excellent: 'Identifies meaningful similarities and differences with clear historical reasoning for why outcomes differed', proficient: 'Identifies clear similarities and differences between the two confrontations', developing: 'Lists facts about each town without meaningful comparison' },
        { criteria: 'Use of Evidence', excellent: 'Integrates multiple primary sources from both towns to build a coherent argument', proficient: 'Uses at least one source from each town', developing: 'Limited or no primary source evidence' },
      ],
    } satisfies Record<string, unknown>,
    slideOutline: {
      title: 'The North Bridge and the Fight for Concord',
      slides: [
        { slideNumber: 1, title: 'Title Slide', bulletPoints: ['Concord, Massachusetts', 'April 19, 1775', '[Teacher Name] | [Date]'], speakerNotes: 'Set the scene: it is mid-morning, and hundreds of militiamen are gathering on the hills overlooking Concord as British soldiers search the town below.', suggestedVisual: 'Amos Doolittle engraving of the North Bridge engagement' },
        { slideNumber: 2, title: 'Essential Questions', bulletPoints: ['Why did the militia fight at Concord after dispersing at Lexington?', 'How did ordinary colonists organize for armed resistance?', 'What role did preparation and planning play?'], speakerNotes: 'These questions should guide students throughout the lesson. Emphasize that the shift from Lexington to Concord is historically significant.', suggestedVisual: 'Split image: Lexington Green and North Bridge' },
        { slideNumber: 3, title: 'Concord: A Center of Resistance', bulletPoints: ['The Provincial Congress met in Concord', 'Military supplies hidden at Colonel Barrett\'s farm', 'Cannons, musket balls, tents, and provisions concealed and dispersed'], speakerNotes: 'Emphasize that Concord was not randomly chosen by the British — it was a deliberate political and military center of colonial resistance.', suggestedVisual: 'Map showing supply storage locations around Concord' },
        { slideNumber: 4, title: 'The Minutemen Respond', bulletPoints: ['Warnings arrived overnight from Lexington', 'Militia companies mustered from Concord and surrounding towns', 'By mid-morning, colonial forces outnumbered the British at Concord'], speakerNotes: 'Help students understand the minuteman system: these were farmers, craftsmen, and shopkeepers who had trained to be ready at a minute\'s notice.', suggestedVisual: 'Illustration of minutemen mustering' },
        { slideNumber: 5, title: 'The Fight at North Bridge', bulletPoints: ['British search parties fan out; smoke rises from the town center', 'Militia on Punkatasset Hill see the smoke and fear Concord is burning', 'Major Buttrick leads the advance: "Fire, fellow soldiers!"', 'Captain Isaac Davis killed — among the first to fall while advancing'], speakerNotes: 'This is the climactic moment. The militia made a collective decision to stop watching and start acting. That decision changed everything.', suggestedVisual: 'Daniel Chester French\'s Minute Man statue at North Bridge' },
        { slideNumber: 6, title: 'Primary Source Activity', bulletPoints: ['Read Amos Barrett\'s firsthand account of the North Bridge', 'Complete the cause-and-consequence organizer', 'Discuss: How does Barrett describe the decision to advance?'], speakerNotes: 'Transition to guided practice. Barrett was there — his voice gives students direct access to the experience.', suggestedVisual: 'Activity instructions with source excerpt' },
        { slideNumber: 7, title: 'Comparing Lexington and Concord', bulletPoints: ['At Lexington: 77 militia dispersed under fire', 'At Concord: 400+ militia advanced against the British', 'What changed in a few hours?', 'What does the difference tell us about how revolution begins?'], speakerNotes: 'Guide students toward the central insight: between Lexington and Concord, the colonists went from standing in the way to fighting back.', suggestedVisual: 'Side-by-side comparison chart' },
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Concord: From Provincial Congress to Armed Resistance',
    gradeRange: '9-12',
    estimatedDuration: '4-5 class periods',
    summary: 'This advanced lesson unit examines how Concord evolved from a quiet inland town into the political and military nerve center of colonial resistance in Massachusetts, and how that organized political dissent ultimately escalated into the armed conflict of April 19, 1775. High school students analyze the deliberate decisions made by the Provincial Congress to stockpile military supplies in Concord, the intelligence networks that both protected and ultimately exposed those preparations, and the institutional infrastructure of resistance that the militia system represented. The unit challenges students to grapple with a fundamental question of revolutionary history: at what point does political opposition become armed resistance, and who makes that decision? By examining the weeks and months leading up to the North Bridge confrontation — the Provincial Congress debates, the supply logistics, the alarm rider networks, and the militia training — students come to understand that the "shot heard round the world" was not a spontaneous eruption but the product of deliberate political and military organization by colonists who understood they were risking everything.',
    lessonData: {
      objectives: [
        'Students will analyze how the Provincial Congress in Concord organized political and military resistance to British authority',
        'Students will evaluate the strategic decisions behind stockpiling military supplies and the risks those decisions entailed',
        'Students will trace the escalation from political resistance to armed conflict and assess the factors that drove each stage',
        'Students will construct evidence-based arguments about the relationship between political organization and revolutionary violence',
      ],
      essentialQuestions: [
        'At what point does political opposition become revolution — and who decides?',
        'How did Concord\'s role as a seat of government shape the events of April 19, 1775?',
        'What infrastructure of resistance had to exist before the first shot could be fired?',
      ],
      materials: [
        'Extended primary source packet: Provincial Congress records, Emerson\'s diary, Barrett\'s account',
        'Concord Museum digital archives (selected documents)',
        'Timeline template: From Protest to Armed Resistance',
        'DBQ essay prompt and rubric',
      ],
      warmUp: {
        duration: '10 minutes',
        activity: 'Present students with a list of Provincial Congress resolutions from late 1774 and early 1775 — including orders to collect military supplies, train militia companies, and establish communication networks. Ask: "Is this a government preparing for defense, or planning a rebellion? What\'s the difference?"',
      },
      directInstruction: {
        duration: '25 minutes',
        content: [
          'The Provincial Congress: an extralegal government operating in defiance of British authority',
          'Why Concord? Geography, political networks, and distance from British-occupied Boston',
          'The logistics of resistance: what was stored, where it was hidden, and how it was organized',
          'British intelligence and General Gage\'s decision to strike Concord',
          'The alarm system: riders, church bells, and the network that mobilized thousands in hours',
          'From Punkatasset Hill to North Bridge: the military decision to engage British troops',
        ],
      },
      guidedPractice: {
        duration: '30 minutes',
        activities: [
          'Source analysis: compare Provincial Congress records with Reverend Emerson\'s private diary for different perspectives on Concord\'s preparations',
          'Timeline exercise: students map the escalation from the Intolerable Acts through the Provincial Congress to April 19, identifying decision points',
          'Small group discussion: at which point on the timeline did armed conflict become inevitable — or was it ever inevitable?',
        ],
      },
      independentPractice: {
        duration: '45 minutes (across multiple periods)',
        assignment: 'DBQ Essay: "Was the armed confrontation at Concord the result of deliberate colonial planning or a spontaneous response to British aggression?" Students must use at least 4 primary sources and address counterarguments. Alternative: multimedia presentation tracing the institutional infrastructure of resistance.',
      },
      closure: {
        duration: '10 minutes',
        activity: 'Seminar discussion: "The colonists at Concord had been preparing for months. Does this make the events of April 19 a planned rebellion or a justified defense? How does the answer depend on whose perspective you take?"',
      },
      differentiation: {
        struggling: 'Scaffolded source analysis with guiding questions, essay outline template with thesis sentence starters, partner support during timeline exercise',
        advanced: 'Additional reading on the Concord town meeting records and comparison with other colonial resistance movements; historiography essay on how interpretations of Concord have changed over time',
        ell: 'Annotated source excerpts with vocabulary glosses, visual timeline planning tools, oral presentation option for final assessment',
      },
      assessment: 'Formative: timeline exercise, source analysis worksheets, seminar participation. Summative: DBQ essay or multimedia project assessed with source-based rubric.',
    } satisfies Record<string, unknown>,
    standards: {
      note: 'Standards alignment verified for AP US History and Massachusetts frameworks.',
      commonCore: [
        'CCSS.ELA-LITERACY.RH.11-12.1: Cite specific textual evidence, attending to such features as the date and origin of the information',
        'CCSS.ELA-LITERACY.RH.11-12.3: Evaluate various explanations for actions or events and determine which explanation best accords with textual evidence',
        'CCSS.ELA-LITERACY.RH.11-12.9: Integrate information from diverse sources into a coherent understanding of an idea or event',
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

export const concordPrimarySourcePackets: Prisma.PrimarySourcePacketCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Amos Barrett\'s Account of the North Bridge Fight',
    description: 'A firsthand account by Corporal Amos Barrett of the Concord militia, describing the events at the North Bridge on April 19, 1775. Barrett was among the colonial forces who advanced across the bridge against British regulars. His account, written later in life but rich in specific detail, provides one of the most vivid eyewitness descriptions of the engagement.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'Concord Free Public Library',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'Barrett wrote this account years after the events. How might the passage of time affect his memory and emphasis?',
      'What specific sensory details does Barrett include that suggest genuine firsthand experience?',
      'How does Barrett describe the decision to advance across the bridge? Does he portray it as a collective or individual choice?',
      'What does Barrett\'s account reveal about the emotional experience of combat for the militia?',
      'Compare Barrett\'s description of the British retreat with other accounts. What is consistent, and what differs?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'Amos Barrett\'s account is an extraordinary classroom resource because it places students directly inside the experience of an ordinary militiaman at one of the most consequential moments in American history. Barrett was not a commander or a politician — he was a corporal, a farmer who had mustered with his neighbors and found himself marching toward armed British soldiers at a wooden bridge over the Concord River. His account carries the texture of lived experience: the confusion of orders, the sight of the British pulling up planks from the bridge, the sudden crack of musket fire, and the shock of seeing men fall. Guide students to pay close attention to Barrett\'s description of the advance across the bridge. He does not describe a heroic charge; he describes men walking forward because their officers told them to, uncertain of what would happen next. This is where history comes alive for students — not in grand narratives but in the hesitation, fear, and resolve of ordinary people. Barrett\'s account also rewards careful reading for what it reveals about militia organization. These men operated within a command structure, responded to orders, and acted as a unit. Push students to recognize that the "shot heard round the world" was not a spontaneous act of defiance but the product of training, organization, and collective decision-making by communities that had been preparing for this possibility.',
    narrativeModel: 'opus',
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Reverend William Emerson\'s Diary (1775)',
    description: 'Diary entries by Reverend William Emerson, minister of Concord and grandfather of Ralph Waldo Emerson, recording the events of April 19, 1775, and the preceding weeks of tension. Emerson watched the North Bridge confrontation from his home, the Old Manse, which stood overlooking the bridge. His diary provides both a day-of account and valuable context about Concord\'s preparations for potential conflict.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'Concord Museum',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'Emerson was a minister, not a soldier. How does his perspective differ from a militiaman\'s account?',
      'What does Emerson\'s diary reveal about the mood in Concord in the weeks before April 19?',
      'Emerson watched the North Bridge fight from his home. What are the advantages and limitations of an observer\'s perspective versus a participant\'s?',
      'How does Emerson describe the British soldiers? What assumptions or attitudes does his language reveal?',
      'Compare Emerson\'s account with Barrett\'s. How do a clergyman\'s observations differ from a soldier\'s?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'Reverend William Emerson\'s diary offers a perspective that is both deeply personal and broadly revealing — the voice of a community leader who watched his town become a battlefield from the window of his own home. The Old Manse, where Emerson lived, stood just yards from the North Bridge, giving him a literal front-row view of the confrontation. But his diary is valuable for far more than the day itself. Emerson recorded the weeks of growing tension that preceded April 19: the movements of supplies, the drilling of militia companies, the anxious conversations in a town that knew it had placed itself at the center of a gathering storm. For classroom use, Emerson\'s diary pairs powerfully with Amos Barrett\'s militia account. Where Barrett gives students the ground-level experience of a soldier, Emerson provides the wider lens of a community observer. Guide students to compare what each man noticed and what each man missed. Barrett describes the physical experience of combat; Emerson describes the broader scene, the movements of companies, the reactions of townspeople. Neither account alone tells the full story — together, they model for students how historians triangulate between sources to build a more complete picture. Emerson\'s role as a minister also invites discussion about how community leaders shaped the moral framing of resistance, interpreting political and military events through a lens of providential purpose.',
    narrativeModel: 'opus',
    displayOrder: 2,
    published: true,
  },
];

export const concordTeacherWorksheets: Prisma.TeacherWorksheetCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'The North Bridge and Colonial Resistance Quiz',
    worksheetType: 'QUIZ',
    description: 'Assessment quiz covering the Battle of North Bridge, colonial military organization, and key figures in Concord\'s role in the opening of the American Revolution.',
    content: 'Quiz content — see quizData for structured questions.',
    quizData: {
      title: 'The North Bridge and Colonial Resistance at Concord',
      instructions: 'Answer all questions based on our study of Concord in the American Revolution. For short answer questions, use specific evidence from the sources and materials we studied.',
      questions: [
        {
          id: 1,
          type: 'multiple_choice',
          question: 'Why did the British specifically target Concord on April 19, 1775?',
          options: [
            'Concord was a center of colonial political resistance and a major storage site for hidden military supplies',
            'Concord was the largest town in Massachusetts outside of Boston',
            'The British wanted to arrest the entire Provincial Congress during a session',
            'Concord\'s militia had attacked a British patrol the previous week',
          ],
          correctAnswer: 'A',
          explanation: 'General Gage had intelligence that the colonists were stockpiling military supplies — cannons, musket balls, tents, and provisions — in and around Concord, particularly at Colonel James Barrett\'s farm. Concord had also served as the meeting place of the extralegal Provincial Congress. Seizing these supplies was the primary military objective of the expedition.',
        },
        {
          id: 2,
          type: 'multiple_choice',
          question: 'What role did Colonel James Barrett play in the events leading up to April 19, 1775?',
          options: [
            'He commanded the British forces marching to Concord',
            'He organized the concealment and dispersal of colonial military supplies on and around his farm',
            'He served as the messenger who rode from Boston to warn Concord',
            'He was the minister who recorded the events in his diary',
          ],
          correctAnswer: 'B',
          explanation: 'Colonel James Barrett was a senior militia officer whose farm, located northwest of Concord center, served as a major depot for hidden colonial military supplies. Barrett and the townspeople worked to conceal cannons, ammunition, and provisions so effectively that the British search parties found relatively little when they arrived.',
        },
        {
          id: 3,
          type: 'multiple_choice',
          question: 'What triggered the militia\'s decision to advance toward the North Bridge?',
          options: [
            'They received orders from the Continental Congress to attack',
            'They saw smoke rising from the direction of Concord\'s town center and feared the British were burning the town',
            'British soldiers crossed the bridge and attacked the militia first',
            'Paul Revere arrived with orders to engage the British',
          ],
          correctAnswer: 'B',
          explanation: 'The colonial militia had assembled on Punkatasset Hill overlooking the town. When they saw smoke rising from Concord center — actually from British soldiers burning military supplies they had found, not from burning buildings — they feared the town was being put to the torch. This alarm galvanized the decision to march toward the bridge, led by Major John Buttrick.',
        },
        {
          id: 4,
          type: 'true_false',
          question: 'Captain Isaac Davis of the Acton militia was among the first Americans killed while advancing against British troops at the North Bridge.',
          correctAnswer: 'True',
          explanation: 'Captain Isaac Davis led his Acton minute company at the front of the colonial advance toward the North Bridge. When British soldiers fired, Davis was struck and killed almost immediately, along with Private Abner Hosmer. Davis is often recognized as one of the first Americans to fall while on the offensive against British forces during the Revolution.',
        },
        {
          id: 5,
          type: 'short_answer',
          question: 'Explain how the colonial militia\'s response at Concord\'s North Bridge differed from the militia\'s response at Lexington Green earlier that same morning. What accounts for this difference?',
          correctAnswer: '[Accept answers that identify the shift from dispersal at Lexington to advance at Concord, and explain contributing factors such as greater numbers, time to organize, the alarm about the town burning, and the psychological impact of the Lexington casualties]',
          explanation: 'Strong answers will note that at Lexington, approximately 77 militiamen faced a much larger British force and dispersed under fire, while at Concord, militia from multiple towns had converged and outnumbered the British detachment at the bridge. The militia had also had time to organize under experienced officers like Buttrick and Barrett. The sight of smoke from the town center created urgency. The news of casualties at Lexington may also have hardened their resolve.',
        },
        {
          id: 6,
          type: 'short_answer',
          question: 'Major John Buttrick reportedly shouted "Fire, fellow soldiers! For God\'s sake, fire!" at the North Bridge. Using what you know about how historical quotations are recorded, evaluate how confident we should be that these were his exact words.',
          correctAnswer: '[Accept answers that demonstrate understanding of the challenges of recording exact quotations from chaotic events and the role of later memory in shaping historical accounts]',
          explanation: 'Strong answers will recognize that exact quotations from battlefield moments should be treated with appropriate caution. Like Captain Parker\'s famous words at Lexington, Buttrick\'s command was recorded after the fact by participants and observers whose memories were shaped by the passage of time and the significance that the events took on. The general meaning — an order to return fire — is well supported, but the precise wording may reflect later reconstruction rather than verbatim transcription.',
        },
        {
          id: 7,
          type: 'multiple_choice',
          question: 'What was the Provincial Congress, and why is its connection to Concord historically significant?',
          options: [
            'It was the official colonial legislature that always met in Concord',
            'It was an extralegal governing body that met in Concord, making the town a center of organized political resistance to British authority',
            'It was a committee of British officials stationed in Concord to monitor the colonists',
            'It was a religious assembly led by Reverend William Emerson',
          ],
          correctAnswer: 'B',
          explanation: 'The Provincial Congress was an extralegal body — meaning it operated outside of and in defiance of British-authorized government. It met in Concord (among other locations) and made key decisions about military preparation, including ordering the collection and storage of military supplies. This is why Concord was not just a random town with hidden weapons — it was a seat of organized political resistance that had deliberately prepared for potential armed conflict.',
        },
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 10,
    published: true,
  },
];
