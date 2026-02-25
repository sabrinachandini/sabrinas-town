// MODEL: Claude Sonnet (structure + code) / Claude Opus (long narratives >150 words)
// Curated teacher content for Boston, MA

import { Prisma } from '@prisma/client';

const TOWN_ID = 'us-ma-boston';

export const bostonLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Boston: Cradle of Revolution',
    gradeRange: '6-8',
    estimatedDuration: '3 class periods',
    summary: 'This lesson immerses middle school students in the explosive events that made Boston the epicenter of American resistance to British authority. Students will trace the arc from the Boston Massacre of 1770 through the Boston Tea Party of 1773 and into the gathering storm of revolution, examining how a single colonial city became the flashpoint for an empire-wide crisis. Through primary source analysis, role-playing, and comparative inquiry, students will explore the perspectives of Patriots like Samuel Adams, ordinary Bostonians like shoemaker George Robert Twelves Hewes, and the British soldiers and officials who found themselves caught between imperial policy and colonial fury. Students will grapple with critical questions about the nature of protest, the line between resistance and rebellion, and how propaganda — including Paul Revere\'s famous engraving of the Massacre — shaped public opinion and accelerated the path toward independence.',
    lessonData: {
      objectives: [
        'Students will analyze primary source accounts of the Boston Massacre and Boston Tea Party from multiple perspectives',
        'Students will evaluate how propaganda and media shaped colonial public opinion',
        'Students will trace the escalation of conflict between Boston colonists and British authorities from 1770 to 1775',
        'Students will identify the roles of key figures including Samuel Adams, Crispus Attucks, and Paul Revere in the revolutionary movement',
      ],
      essentialQuestions: [
        'When does protest become revolution — and who gets to decide?',
        'How did Paul Revere\'s engraving of the Boston Massacre shape public opinion, and was it accurate?',
        'Why did Boston, more than any other colonial city, become the "cradle of revolution"?',
      ],
      materials: [
        'Primary source packet: Paul Revere\'s Massacre engraving, trial transcripts, Hewes\'s account (provided)',
        'Map of colonial Boston showing key sites (Old South Meeting House, Griffin\'s Wharf, King Street)',
        'Graphic organizer: Cause and Consequence Chain',
        'Comparison chart: Boston vs. Philadelphia as centers of resistance',
      ],
      warmUp: {
        duration: '10 minutes',
        activity: 'Display Paul Revere\'s engraving of the Boston Massacre without context. Ask students: "What story does this image tell? Who are the \'good guys\' and \'bad guys\'?" Then reveal it was created by a Patriot silversmith for political purposes. Ask: "Does knowing the creator\'s purpose change how you read this image?"',
      },
      directInstruction: {
        duration: '20 minutes',
        content: [
          'Context: British troop occupation of Boston beginning in 1768 and escalating tensions',
          'The Boston Massacre (March 5, 1770): what actually happened on King Street',
          'Crispus Attucks: a man of African and Wampanoag descent, the first to fall',
          'The Boston Tea Party (December 16, 1773): organized protest or mob destruction of property?',
          'The Intolerable Acts: Parliament\'s punishment and Boston\'s response',
        ],
      },
      guidedPractice: {
        duration: '25 minutes',
        activities: [
          'Small group analysis: compare Revere\'s engraving with trial testimony about the Massacre — what matches and what doesn\'t?',
          'Groups complete cause-and-consequence chain from Massacre through Tea Party to Intolerable Acts',
          'Class discussion: was the destruction of the tea justified? Students take and defend positions using evidence',
        ],
      },
      independentPractice: {
        duration: '20 minutes',
        assignment: 'Write a one-page newspaper editorial from the perspective of either a Boston Patriot or a British loyalist responding to the Tea Party. Your editorial must reference at least two real events and one primary source. Be prepared to explain how your perspective shaped your argument.',
      },
      closure: {
        duration: '10 minutes',
        activity: 'Exit ticket: "Name one way Paul Revere\'s engraving was effective propaganda and one way it was misleading. What does this teach us about using images as historical evidence?"',
      },
      differentiation: {
        struggling: 'Annotated versions of primary sources with vocabulary support, sentence starters for editorial writing, visual timeline of events',
        advanced: 'Additional sources including John Adams\'s defense of the British soldiers at trial; extended essay comparing the effectiveness of different forms of colonial protest',
        ell: 'Bilingual key terms glossary, image-based evidence analysis option, graphic organizer with sentence frames',
      },
      assessment: 'Formative: cause-and-consequence chain completion, class discussion participation. Summative: newspaper editorial assessed with provided rubric for historical accuracy, perspective, and use of evidence.',
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
        'D2.His.6.6-8: Analyze how people\'s perspectives influenced what information is available in the historical sources they created',
        'D2.His.14.6-8: Explain multiple causes and effects of events and developments in the past',
      ],
      stateStandards: {
        placeholder: 'Massachusetts History & Social Science: USI.T4 (The American Revolution)',
        suggestedAlignment: 'Aligns with MA 5.T4 and USI.T4 standards on causes and early events of the Revolution',
      },
    } satisfies Record<string, unknown>,
    comparativeAssignment: {
      title: 'Boston and Philadelphia: Two Cities, Two Paths to Revolution',
      description: 'Compare how Boston and Philadelphia each contributed to the coming of the American Revolution. How did the nature of protest and resistance differ between these two cities, and what do those differences reveal about the diversity of the colonial independence movement?',
      compareTowns: [
        {
          townId: 'us-pa-philadelphia',
          townName: 'Philadelphia',
          comparisonPoints: [
            'Methods of protest and resistance (street action vs. political deliberation)',
            'Key leaders and their strategies (Samuel Adams vs. Benjamin Franklin, John Dickinson)',
            'The role of each city in the Continental Congress',
            'How each city\'s social and economic makeup shaped its revolutionary politics',
          ],
        },
      ],
      rubric: [
        { criteria: 'Historical Accuracy', excellent: 'All facts verified with citations to primary sources from both cities', proficient: 'Facts accurate with general source references', developing: 'Some inaccuracies or unsupported claims' },
        { criteria: 'Comparative Analysis', excellent: 'Identifies meaningful similarities and differences with historical explanation of causes', proficient: 'Identifies clear similarities and differences', developing: 'Lists facts without meaningful comparison' },
        { criteria: 'Use of Evidence', excellent: 'Integrates multiple primary sources from both cities and addresses counterarguments', proficient: 'Uses at least one source from each city', developing: 'Limited or no primary source evidence' },
      ],
    } satisfies Record<string, unknown>,
    slideOutline: {
      title: 'Boston: Cradle of Revolution',
      slides: [
        { slideNumber: 1, title: 'Title Slide', bulletPoints: ['Boston, Massachusetts', 'From Massacre to Revolution, 1770–1775', '[Teacher Name] | [Date]'], speakerNotes: 'Set the scene: Boston in the early 1770s is a city under military occupation, simmering with resentment.', suggestedVisual: 'Paul Revere\'s engraving of the Boston Massacre' },
        { slideNumber: 2, title: 'Essential Questions', bulletPoints: ['When does protest become revolution?', 'How did propaganda shape the path to independence?', 'Why was Boston the "cradle of revolution"?'], speakerNotes: 'Frame these as open questions. There are no simple answers — that is the point.', suggestedVisual: 'Map of colonial Boston with key sites marked' },
        { slideNumber: 3, title: 'A City Under Occupation', bulletPoints: ['British troops arrive in Boston, 1768', 'Soldiers quartered among civilians — daily friction', 'Economic tensions: soldiers competing for jobs with working-class Bostonians'], speakerNotes: 'Help students understand that the Massacre did not come from nowhere. Months of tension preceded it.', suggestedVisual: 'Period illustration of British troops in Boston' },
        { slideNumber: 4, title: 'The Boston Massacre (March 5, 1770)', bulletPoints: ['Crispus Attucks: first to fall, a man of African and Wampanoag descent', 'Five colonists killed — but who provoked whom?', 'John Adams defends the British soldiers at trial — and wins acquittals'], speakerNotes: 'Emphasize the complexity: Adams, a Patriot, believed in the rule of law enough to defend the soldiers. Attucks\'s identity complicates narratives about who the Revolution was for.', suggestedVisual: 'Side-by-side: Revere engraving vs. trial testimony excerpts' },
        { slideNumber: 5, title: 'The Boston Tea Party (December 16, 1773)', bulletPoints: ['342 chests of tea destroyed — worth roughly $1.7 million today', 'Organized by the Sons of Liberty at Old South Meeting House', 'George Robert Twelves Hewes: an ordinary shoemaker who became a revolutionary'], speakerNotes: 'The Tea Party was carefully organized, not a spontaneous riot. Discuss: does the deliberate planning make it more or less legitimate as protest?', suggestedVisual: 'Illustration of the Tea Party; portrait or description of Hewes' },
        { slideNumber: 6, title: 'Parliament Strikes Back: The Intolerable Acts', bulletPoints: ['Boston Port Act: harbor closed until tea is paid for', 'Massachusetts Government Act: self-government stripped away', 'Effect: instead of isolating Boston, it united the colonies'], speakerNotes: 'This is the turning point. Parliament\'s punishment backfired. Other colonies rallied to Boston\'s cause.', suggestedVisual: 'Political cartoon depicting the Intolerable Acts' },
        { slideNumber: 7, title: 'Activity & Reflection', bulletPoints: ['Compare Revere\'s engraving with trial evidence', 'Complete cause-and-consequence chain', 'Reflection: what makes an image effective propaganda?'], speakerNotes: 'Transition to guided practice. Encourage students to question sources even when they agree with the message.', suggestedVisual: 'Activity instructions and graphic organizer preview' },
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'From Protest to Revolution: Boston\'s Radical Transformation',
    gradeRange: '9-12',
    estimatedDuration: '4-5 class periods',
    summary: 'This advanced unit examines Boston\'s transformation from a restive colonial port into the crucible of armed revolution, tracing the escalation from the Stamp Act riots of 1765 through the Siege of Boston in 1775–1776. High school students will analyze how different forms of resistance — crowd action, political organizing, economic boycotts, propaganda, and ultimately armed conflict — built upon one another to produce a revolution that few initially imagined possible. The unit foregrounds the experiences of ordinary Bostonians alongside elite leaders, examining how artisans, sailors, enslaved people, and women participated in and were affected by the revolutionary crisis. Students engage with sophisticated source analysis, evaluating propaganda alongside private correspondence, legal records alongside memoir, to construct nuanced arguments about how and why revolution happens. The unit pushes students to consider uncomfortable questions: Was the destruction of property justified? Did revolutionary rhetoric about liberty apply to everyone? How did the Siege of Boston transform a political crisis into a military conflict — and what was lost in that transformation?',
    lessonData: {
      objectives: [
        'Students will trace the escalation of resistance in Boston from 1765 to 1776, identifying turning points and their causes',
        'Students will evaluate the effectiveness and ethics of different forms of protest and resistance',
        'Students will analyze propaganda as both a historical source and a political tool, with attention to Paul Revere\'s work',
        'Students will examine the Siege of Boston as the moment political resistance became armed revolution',
      ],
      essentialQuestions: [
        'How does a political protest movement become an armed revolution — and is that transition inevitable?',
        'Whose revolution was it? Did the rhetoric of liberty extend to all Bostonians?',
        'How did the Siege of Boston change the nature of the conflict between colonies and Crown?',
      ],
      materials: [
        'Extended primary source packet: Stamp Act riot accounts, Massacre depositions and trial records, Tea Party memoirs, siege correspondence',
        'Samuel Adams political writings (selected)',
        'Paul Revere engravings and propaganda prints',
        'General Washington\'s correspondence from the Siege of Boston',
        'DBQ essay prompt and rubric',
      ],
      warmUp: {
        duration: '10 minutes',
        activity: 'Present a timeline of Boston events from 1765 to 1776 with key moments unlabeled. Students predict what each event was based on a brief description of the escalation pattern. Discuss: does this escalation look inevitable in hindsight? Was it?',
      },
      directInstruction: {
        duration: '25 minutes',
        content: [
          'The Stamp Act riots of 1765: Boston\'s first experience with organized crowd resistance',
          'The Townshend Acts and the occupation of Boston: how troops in the streets changed daily life',
          'The Massacre and its aftermath: John Adams\'s defense of the soldiers and the propaganda war',
          'Samuel Adams and the committees of correspondence: building a revolutionary infrastructure',
          'The Tea Party and the Intolerable Acts: the point of no return',
          'The Siege of Boston (April 1775 – March 1776): from Lexington and Concord to British evacuation',
        ],
      },
      guidedPractice: {
        duration: '30 minutes',
        activities: [
          'Source corroboration exercise: compare Samuel Adams\'s public writings with private correspondence — how do they differ and why?',
          'Escalation analysis: using a structured framework, students categorize each major Boston event by type of resistance and level of escalation',
          'Small group debate: "Was the Boston Tea Party a legitimate act of protest or an unjustifiable destruction of private property?" using primary source evidence',
        ],
      },
      independentPractice: {
        duration: '45 minutes (across multiple periods)',
        assignment: 'DBQ Essay: "Was revolution in Boston inevitable by 1774, or could the conflict have been resolved peacefully?" Students must use at least 5 primary sources spanning the period 1765–1776, address counterarguments, and consider the perspectives of at least two different social groups in Boston.',
      },
      closure: {
        duration: '10 minutes',
        activity: 'Seminar discussion: "If you were an ordinary Boston artisan in 1774, would you have supported the move toward armed resistance? What would you have had to gain — and to lose?"',
      },
      differentiation: {
        struggling: 'Scaffolded source analysis with guiding questions, essay outline template with thesis sentence starters, timeline graphic organizer',
        advanced: 'Additional primary sources including Thomas Hutchinson\'s letters; historiography essay comparing Whig, Progressive, and Neo-Progressive interpretations of the Boston crowd',
        ell: 'Annotated source excerpts with margin glosses, graphic essay planner, oral presentation option with structured outline',
      },
      assessment: 'Formative: escalation analysis framework, seminar participation with discussion rubric. Summative: DBQ essay or equivalent project with source-based rubric emphasizing argument construction and evidence integration.',
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
        'D2.His.14.9-12: Analyze multiple and complex causes and effects of events in the past',
        'D2.His.16.9-12: Integrate evidence from multiple relevant historical sources and interpretations into a reasoned argument about the past',
      ],
      stateStandards: {
        placeholder: 'Massachusetts History & Social Science: USI.T4, AP US History Period 3',
        suggestedAlignment: 'Aligns with MA USI.T4 and AP US History Key Concepts 3.1 and 3.2',
      },
    } satisfies Record<string, unknown>,
    displayOrder: 2,
    published: true,
  },
];

export const bostonPrimarySourcePackets: Prisma.PrimarySourcePacketCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Paul Revere\'s Engraving of the Boston Massacre (1770)',
    description: 'Paul Revere\'s iconic hand-colored engraving "The Bloody Massacre perpetrated in King Street Boston on March 5th 1770" is one of the most famous pieces of propaganda in American history. Produced within weeks of the event, the print depicts British soldiers firing in an organized volley on a defenseless crowd — a version of events that contradicts most eyewitness testimony. Revere likely copied much of the design from Henry Pelham\'s earlier rendering. The engraving was widely circulated and profoundly shaped colonial public opinion against the British military presence.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'American Antiquarian Society / Museum of Fine Arts, Boston / Various museum collections',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'What specific visual choices did Revere make to portray the British soldiers as aggressors?',
      'How does the engraving differ from the testimony given at the soldiers\' trial?',
      'Revere labeled the Custom House as "Butcher\'s Hall." What effect was this intended to have on viewers?',
      'Why was Revere\'s version of events more widely remembered than the trial testimony?',
      'How does this source illustrate the power and danger of visual propaganda?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'Paul Revere\'s engraving of the Boston Massacre is one of the most valuable teaching tools in the American history curriculum precisely because it is so deliberately misleading. The image depicts a line of British soldiers firing a coordinated volley into a peaceful, well-dressed crowd — a scene that bears little resemblance to what actually happened on King Street. Eyewitness testimony, including accounts from the soldiers\' trial where John Adams served as defense counsel, described a chaotic confrontation in which a crowd of colonists pelted the soldiers with snowballs, ice, and oyster shells before shots were fired. Revere\'s engraving omits the crowd\'s aggression entirely, shows the soldiers firing on command (Captain Preston\'s arm is raised as if ordering the volley, though he denied giving such an order), and even places a sniper in the Custom House window. Guide students to examine the image detail by detail before revealing the trial evidence. This sequencing creates a powerful "aha" moment: students experience firsthand how visual media can construct a narrative that feels like objective truth. Push students to notice the emotional choices — the grieving dog, the clear blue sky suggesting an unprovoked attack, the label "Butcher\'s Hall" on the Custom House. Then ask: knowing this image is propaganda, does it still have value as a historical source? The answer is emphatically yes — it reveals what Patriot leaders wanted people to believe, and that tells us as much about the coming Revolution as any factual account.',
    narrativeModel: 'opus',
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'George Robert Twelves Hewes\' Account of the Tea Party',
    description: 'George Robert Twelves Hewes was a Boston shoemaker who participated in the destruction of the tea on December 16, 1773. His account, recorded decades later in two biographical works published in the 1830s — James Hawkes\'s "A Retrospect of the Boston Tea-Party" (1834) and Benjamin Bussey Thatcher\'s "Traits of the Tea Party" (1835) — provides one of the most detailed first-person narratives of the event from the perspective of an ordinary participant. Hewes describes the organization at Old South Meeting House, the disguises worn by participants, the systematic destruction of the tea, and the strict discipline maintained to ensure that no other property was damaged.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'Various historical societies / Originally published by S.S. Bliss (Hawkes) and Harper & Brothers (Thatcher)',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'Hewes\'s account was recorded roughly sixty years after the event. How might the passage of time affect the reliability of his memories?',
      'What details does Hewes include that suggest the Tea Party was carefully organized rather than a spontaneous riot?',
      'How does Hewes portray the participants\' concern with destroying only the tea and nothing else? Why might this distinction have mattered?',
      'What does Hewes\'s account reveal about the participation of ordinary working people in the revolutionary movement?',
      'How might Hewes\'s account have been shaped by the political climate of the 1830s, when it was recorded?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'George Robert Twelves Hewes offers something rare and precious in the historical record: a working-class perspective on the Revolution. Most primary sources from this period were produced by elites — lawyers, merchants, political leaders, military officers — whose literacy and social position ensured their words were preserved. Hewes was a shoemaker, a man of modest means who would have been invisible to history had he not lived long enough for his story to be recorded during the wave of Tea Party nostalgia in the 1830s. This context is essential for students to understand. The account was set down when Hewes was in his nineties, and memory is not a perfect archive. Sixty years of retelling, of public commemorations, of shifting political meanings attached to the Tea Party, inevitably shaped what Hewes remembered and how he told it. Yet the specificity of his details — the organization at Old South Meeting House, the Mohawk disguises, the meticulous destruction of tea chests while other cargo was left untouched, the man who tried to pocket some tea and was disciplined by his fellow participants — carries the texture of lived experience. Guide students to hold both truths simultaneously: this is a mediated, decades-old recollection, and it is also an irreplaceable window into how ordinary people experienced and understood a transformative political act. Ask students to consider what Hewes\'s account tells us about the Tea Party that elite sources cannot: the physical labor of destroying 342 chests of tea, the camaraderie and anxiety of the participants, the way a political act felt from the inside.',
    narrativeModel: 'opus',
    displayOrder: 2,
    published: true,
  },
];

export const bostonTeacherWorksheets: Prisma.TeacherWorksheetCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Boston\'s Road to Revolution Quiz',
    worksheetType: 'QUIZ',
    description: 'Assessment quiz covering the Boston Massacre, Boston Tea Party, key figures including Crispus Attucks and Samuel Adams, and the Siege of Boston.',
    content: 'Quiz content — see quizData for structured questions.',
    quizData: {
      title: 'Boston\'s Road to Revolution',
      instructions: 'Answer all questions based on our study of Boston in the American Revolution. For short answer questions, use specific evidence from sources we studied.',
      questions: [
        {
          id: 1,
          type: 'multiple_choice',
          question: 'What was the significance of Crispus Attucks in the Boston Massacre?',
          options: [
            'He was a man of African and Wampanoag descent who was the first person killed in the Massacre, making him one of the first casualties of the revolutionary era',
            'He was the British officer who ordered the soldiers to fire on the crowd',
            'He was the colonial governor who tried to negotiate peace between the soldiers and the crowd',
            'He was the lawyer who prosecuted the British soldiers after the Massacre',
          ],
          correctAnswer: 'A',
          explanation: 'Crispus Attucks, a man of African and Wampanoag descent who had escaped slavery and worked as a sailor and rope maker, was the first person killed when British soldiers fired on a crowd in King Street on March 5, 1770. His death has made him a symbol of the Revolution, though his prominence also raises questions about whose sacrifices are remembered and how.',
        },
        {
          id: 2,
          type: 'multiple_choice',
          question: 'How did Paul Revere\'s engraving of the Boston Massacre differ from what trial evidence suggests actually happened?',
          options: [
            'The engraving showed British soldiers firing an organized volley on a peaceful crowd, while trial testimony described a chaotic confrontation where the crowd had provoked the soldiers',
            'The engraving showed the colonists attacking the soldiers, while the soldiers claimed they fired first',
            'The engraving accurately depicted events as described in all eyewitness accounts',
            'The engraving showed fewer casualties than actually occurred',
          ],
          correctAnswer: 'A',
          explanation: 'Revere\'s engraving was effective propaganda but a misleading depiction. It showed disciplined soldiers firing on command into a peaceful crowd, omitting evidence that the crowd pelted soldiers with snowballs and debris. Captain Preston was shown with arm raised as if ordering fire, which he denied. The image was designed to inflame public opinion, not to document the event accurately.',
        },
        {
          id: 3,
          type: 'multiple_choice',
          question: 'What role did Samuel Adams play in Boston\'s revolutionary movement?',
          options: [
            'He was a political organizer who helped build the committees of correspondence, organized opposition to British policies, and was instrumental in orchestrating events like the Tea Party',
            'He was the military commander of colonial forces during the Siege of Boston',
            'He served as the royal governor of Massachusetts and tried to enforce British law',
            'He was a British spy who infiltrated the Sons of Liberty',
          ],
          correctAnswer: 'A',
          explanation: 'Samuel Adams was one of the most important organizers of the revolutionary movement in Boston. He helped establish the committees of correspondence that linked colonial resistance across towns, used the Massacre and other events to build opposition to British rule, and played a leading role in the political organizing that led to the Tea Party. He was a master of political mobilization and propaganda.',
        },
        {
          id: 4,
          type: 'true_false',
          question: 'During the Boston Tea Party, participants took care to destroy only the tea and left all other cargo aboard the ships untouched.',
          correctAnswer: 'True',
          explanation: 'Multiple accounts, including George Robert Twelves Hewes\'s memoir, describe how participants were careful to destroy only the tea. One man who tried to pocket some tea for himself was reportedly disciplined by fellow participants. This deliberate restraint was important to the organizers, who wanted the action to be understood as a principled protest against the Tea Act, not as lawless theft or rioting.',
        },
        {
          id: 5,
          type: 'short_answer',
          question: 'Explain how the Siege of Boston (April 1775 – March 1776) transformed the conflict between the colonies and Britain from a political dispute into an armed military confrontation. What were its key developments and outcome?',
          correctAnswer: '[Accept answers that address the transition from political resistance to military conflict, the role of the Continental Army under Washington, the fortification of Dorchester Heights, and the British evacuation]',
          explanation: 'Strong answers will note that after Lexington and Concord, thousands of New England militia surrounded Boston, trapping the British garrison. The Continental Congress appointed George Washington to command this force, transforming a regional militia action into a continental military effort. The siege lasted nearly a year until Henry Knox brought artillery captured at Fort Ticonderoga, which Washington placed on Dorchester Heights overlooking the city. Faced with bombardment, General Howe evacuated British forces by sea on March 17, 1776. The siege marked the moment when the political crisis became an irreversible military conflict.',
        },
        {
          id: 6,
          type: 'short_answer',
          question: 'George Robert Twelves Hewes was an ordinary Boston shoemaker who participated in the Tea Party. Why is his account historically significant, and what challenges does it present as a source?',
          correctAnswer: '[Accept answers that address the rarity of working-class perspectives, the value of firsthand detail, and the problem of memory recorded decades after the event]',
          explanation: 'Strong answers will recognize that Hewes\'s account is one of very few working-class perspectives on the Revolution, providing details about the physical experience of the Tea Party that elite sources miss. However, his account was recorded in the 1830s, roughly sixty years after the event. Students should note that memory changes over time and that the political climate of the 1830s — with its renewed interest in revolutionary heritage — may have shaped how Hewes told his story.',
        },
        {
          id: 7,
          type: 'multiple_choice',
          question: 'What was the primary purpose of the Intolerable Acts (Coercive Acts) passed by Parliament in 1774?',
          options: [
            'To punish Boston for the Tea Party by closing the port and restricting Massachusetts self-government, thereby deterring other colonies from similar resistance',
            'To grant independence to the American colonies',
            'To lower taxes on tea and other imported goods',
            'To withdraw British troops from all colonial cities',
          ],
          correctAnswer: 'A',
          explanation: 'The Intolerable Acts (called the Coercive Acts in Britain) were designed to punish Boston specifically and deter other colonies from resisting. The Boston Port Act closed the harbor. The Massachusetts Government Act stripped away much of the colony\'s self-governance. Instead of isolating Boston, however, these harsh measures generated sympathy across the colonies and helped push reluctant colonists toward united resistance.',
        },
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 10,
    published: true,
  },
];
