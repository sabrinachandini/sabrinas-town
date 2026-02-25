// MODEL: Claude Sonnet (structure + code + narratives)
// Curated teacher content for Morristown, NJ

import { Prisma } from '@prisma/client';

const TOWN_ID = 'us-nj-morristown';

export const morristownLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: "Washington's Winter: Morristown and the Test of Endurance",
    gradeRange: '6-8',
    estimatedDuration: '3 class periods',
    summary: "This lesson guides middle school students through the Continental Army's two winter encampments at Morristown, New Jersey, where soldiers faced starvation, disease, and brutal cold that tested the Revolution's survival. Students will examine why Washington chose Morristown for winter quarters, how soldiers endured the catastrophic Hard Winter of 1779-80, and what the experience reveals about the difference between fighting a war and surviving one. The lesson uses Joseph Plumb Martin's memoir to ground students in the enlisted soldier's perspective — not the general's strategy or the politician's rhetoric, but the daily reality of hunger, cold, and the choice to stay when leaving would have been easier. Students will compare Morristown with Valley Forge to understand why Morristown's winters were arguably worse yet receive far less attention in popular memory.",
    lessonData: {
      objectives: [
        "Students will explain why Washington chose Morristown for winter quarters and describe the strategic advantages of the location",
        "Students will describe the conditions soldiers endured during the Hard Winter of 1779-80 using primary source evidence",
        "Students will analyze why soldiers chose to remain despite extreme hardship and broken promises from Congress",
        "Students will compare the Morristown and Valley Forge encampments and evaluate why Valley Forge dominates popular memory",
      ],
      essentialQuestions: [
        'What does it mean to endure for a cause when the cause cannot provide for you?',
        'Why is the story of Morristown less well-known than Valley Forge, and what does that tell us about how we remember history?',
        'How did ordinary soldiers experience the Revolution differently from officers and politicians?',
      ],
      materials: [
        "Primary source packet: Joseph Plumb Martin's memoir excerpts (provided)",
        'Map of Morristown and Jockey Hollow, 1779-80',
        'Graphic organizer: Morristown vs. Valley Forge comparison',
        'Images: reconstructed soldier huts at Jockey Hollow',
      ],
      warmUp: {
        duration: '10 minutes',
        activity: "Show students a photograph of the reconstructed soldier huts at Jockey Hollow. Ask: \"These huts were about 12 feet by 16 feet — roughly the size of this corner of the classroom. Twelve soldiers slept in each one. What would that be like for an entire winter?\" Then display a period map showing Morristown's location behind the Watchung Mountains. Ask: \"Why would a general choose to camp here?\"",
      },
      directInstruction: {
        duration: '20 minutes',
        content: [
          "Context: why Morristown — the Watchung Mountains as a natural barrier, the iron industry, the distance from British-held New York",
          'The first winter (1777): smallpox, inoculation, and the decision that saved the army',
          'The Hard Winter (1779-80): twenty-eight blizzards, supply collapse, and starvation at Jockey Hollow',
          'Life in the huts: daily routines, rations (when available), and the struggle to stay warm',
          'The Connecticut Line near-mutiny (May 1780): soldiers who had reached their breaking point',
        ],
      },
      guidedPractice: {
        duration: '25 minutes',
        activities: [
          "Small groups read and annotate excerpts from Joseph Plumb Martin's memoir describing the Hard Winter",
          'Groups complete the Morristown vs. Valley Forge comparison organizer using provided data',
          "Class discussion: Why do students think Valley Forge is famous while Morristown is not? What makes some stories \"stick\" in national memory?",
        ],
      },
      independentPractice: {
        duration: '20 minutes',
        assignment: "Write a one-paragraph response: \"Imagine you are a Continental soldier at Jockey Hollow in January 1780. You have not been paid in months, you are hungry, and your enlistment may have technically expired. Why do you stay — or why do you leave?\" Use at least one detail from Martin's memoir to support your answer.",
      },
      closure: {
        duration: '10 minutes',
        activity: "Exit ticket: \"Joseph Plumb Martin could not fully explain why he stayed at Morristown. What does it tell us about the Revolution that its own participants couldn't always explain their commitment?\" Brief share-out discussion.",
      },
      differentiation: {
        struggling: "Annotated memoir excerpts with vocabulary support, sentence starters for writing, visual comparison chart with pre-filled Valley Forge column",
        advanced: "Additional reading on the Pennsylvania Line mutiny of January 1781; essay comparing enlisted soldiers' motivations with officers' motivations for service",
        ell: 'Bilingual key terms glossary, visual timeline of the two encampments, partner reading of primary source excerpts',
      },
      assessment: 'Formative: graphic organizer completion, class discussion participation. Summative: paragraph writing assessment using provided rubric.',
    } satisfies Record<string, unknown>,
    standards: {
      note: 'Standards alignment verified for New Jersey and Common Core.',
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.2: Determine the central ideas or information of a primary or secondary source',
        'CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author\'s point of view or purpose',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.3.6-8: Use questions generated about individuals and groups to analyze why they, and the developments they shaped, are seen as historically significant',
        'D2.His.14.6-8: Explain multiple causes and effects of events and developments in the past',
      ],
      stateStandards: {
        placeholder: 'New Jersey Student Learning Standards: Social Studies 6.1.8.HistoryCC',
        suggestedAlignment: 'Aligns with NJ 6.1.8.HistoryCC.3 and 6.1.8.HistoryUP.3 standards on the American Revolution',
      },
    } satisfies Record<string, unknown>,
    comparativeAssignment: {
      title: 'Morristown and Valley Forge: Two Winters, Two Legacies',
      description: 'Compare the Continental Army\'s winter experiences at Valley Forge (1777-78) and Morristown (1779-80). Which winter was harder? Why does Valley Forge dominate American memory while Morristown remains relatively unknown? What does this comparison reveal about how we choose which stories to tell about our history?',
      compareTowns: [
        {
          townId: 'us-pa-valley-forge',
          townName: 'Valley Forge',
          comparisonPoints: [
            'Weather conditions and duration of each encampment',
            'Food supply and soldier rations at each location',
            'Disease and death rates during each winter',
            'Morale and discipline incidents (including mutiny)',
            'How each encampment is remembered in popular culture today',
          ],
        },
      ],
      rubric: [
        { criteria: 'Historical Accuracy', excellent: 'All facts are accurate and supported with citations to primary sources', proficient: 'Facts are accurate with general references to evidence', developing: 'Some inaccuracies or claims without supporting evidence' },
        { criteria: 'Comparative Analysis', excellent: 'Identifies meaningful similarities and differences with clear historical reasoning for why outcomes and legacies differed', proficient: 'Identifies clear similarities and differences between the two encampments', developing: 'Lists facts about each location without meaningful comparison' },
        { criteria: 'Use of Evidence', excellent: 'Integrates multiple primary sources from both encampments to build a coherent argument', proficient: 'Uses at least one source from each encampment', developing: 'Limited or no primary source evidence' },
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Mutiny, Survival, and the Continental Army at Morristown',
    gradeRange: '9-12',
    estimatedDuration: '4-5 class periods',
    summary: "This advanced lesson unit examines the Morristown encampments as a case study in the internal contradictions of the American Revolution — an army fighting for liberty that could not feed, clothe, or pay its own soldiers. High school students analyze the structural failures of the Continental Congress, the logistical nightmare of supplying a revolutionary army, and the Pennsylvania Line mutiny of January 1781 as a moment when the Revolution's contradictions became impossible to ignore. The unit challenges students to move beyond celebratory narratives and engage with the uncomfortable reality that the Revolution was sustained by men who were themselves unfree in critical respects — bound by disputed contracts, denied their wages, and kept in service by a government that lacked the resources or political will to honor its obligations. Students examine Washington's leadership not as heroic generalship but as crisis management, and they evaluate the mutineers not as traitors but as citizens exercising the very principles the Revolution claimed to defend.",
    lessonData: {
      objectives: [
        'Students will analyze the structural causes of the Continental Army\'s supply crisis and evaluate the role of Congressional weakness under the Articles of Confederation',
        'Students will examine the Pennsylvania Line mutiny as both a military crisis and a political argument, assessing the mutineers\' grievances against the principles the Revolution claimed to defend',
        'Students will evaluate Washington\'s leadership at Morristown as crisis management rather than battlefield command',
        'Students will construct evidence-based arguments about the relationship between military service, citizenship, and the obligations of government to those who serve',
      ],
      essentialQuestions: [
        'When does an army\'s refusal to obey orders become a legitimate political act?',
        'What did the government owe the soldiers who fought the Revolution — and what happened when it failed to deliver?',
        'How does the Morristown experience challenge the idea that the Revolution was a unified national effort?',
      ],
      materials: [
        'Extended primary source packet: Martin\'s memoir, Washington\'s letters to Congress, Pennsylvania Line mutiny documents',
        'Morristown National Historical Park digital archives (selected documents)',
        'DBQ essay prompt and rubric',
        'Timeline template: From Enlistment to Mutiny',
      ],
      warmUp: {
        duration: '10 minutes',
        activity: 'Present students with a list of grievances from the Pennsylvania Line mutineers (January 1781) alongside excerpts from the Declaration of Independence\'s list of grievances against King George III. Ask: "How are these documents similar? How are they different? What does it mean when the language of revolution is turned against the revolutionary government itself?"',
      },
      directInstruction: {
        duration: '25 minutes',
        content: [
          'The Articles of Confederation and the structural weakness of wartime government',
          'Supply logistics: why the Continental Army could not feed itself, and who was responsible',
          'Morristown as a case study: two winters of escalating crisis (1777 and 1779-80)',
          'The enlisted soldier\'s experience: pay, rations, enlistment terms, and the gap between promise and reality',
          'The Pennsylvania Line mutiny: causes, conduct, resolution, and consequences',
          'Washington\'s response: the tension between military discipline and political legitimacy',
        ],
      },
      guidedPractice: {
        duration: '30 minutes',
        activities: [
          'Source analysis: compare Washington\'s private letters to Congress (pleading for supplies) with his public orders to troops (demanding discipline). What does the gap between these voices reveal?',
          'Small group deliberation: Was the Pennsylvania Line mutiny justified? Groups prepare arguments for and against, using primary sources',
          'Socratic seminar: When does a soldier\'s refusal to serve cross the line from political action to military crime?',
        ],
      },
      independentPractice: {
        duration: '45 minutes (across multiple periods)',
        assignment: 'DBQ Essay: "The Pennsylvania Line mutiny of January 1781 was the most dangerous internal crisis of the American Revolution. Were the mutineers traitors or patriots?" Students must use at least 4 primary sources and address counterarguments. Alternative: research paper on the Articles of Confederation\'s impact on military logistics.',
      },
      closure: {
        duration: '10 minutes',
        activity: 'Final discussion: "The mutineers rejected British overtures and maintained their commitment to independence even as they marched against Congress. What does this tell us about the nature of their protest? Can you be simultaneously loyal to a cause and in rebellion against its government?"',
      },
      differentiation: {
        struggling: 'Scaffolded source analysis with guiding questions, essay outline template with thesis sentence starters, simplified primary source excerpts with vocabulary support',
        advanced: 'Additional reading on the New Jersey Line mutiny (which was suppressed by force, unlike the Pennsylvania Line); comparative analysis with later military mutinies in American history',
        ell: 'Annotated source excerpts with vocabulary glosses, visual timeline planning tools, oral presentation option for final assessment',
      },
      assessment: 'Formative: source analysis worksheets, seminar participation rubric. Summative: DBQ essay assessed with AP-style rubric for thesis, evidence, and reasoning.',
    } satisfies Record<string, unknown>,
    standards: {
      note: 'Standards alignment verified for AP US History and New Jersey frameworks.',
      commonCore: [
        'CCSS.ELA-LITERACY.RH.11-12.1: Cite specific textual evidence, attending to such features as the date and origin of the information',
        'CCSS.ELA-LITERACY.RH.11-12.3: Evaluate various explanations for actions or events and determine which explanation best accords with textual evidence',
        'CCSS.ELA-LITERACY.RH.11-12.6: Evaluate authors\' differing points of view on the same historical event or issue by assessing the authors\' claims, reasoning, and evidence',
      ],
      c3Framework: [
        'D2.His.1.9-12: Evaluate how historical events and developments were shaped by unique circumstances of time and place',
        'D2.His.4.9-12: Analyze complex and interacting factors that influenced the perspectives of people during different historical eras',
        'D2.His.16.9-12: Integrate evidence from multiple relevant historical sources and interpretations',
      ],
      stateStandards: {
        placeholder: 'New Jersey Student Learning Standards: Social Studies 6.1.12.HistoryCC',
        suggestedAlignment: 'Aligns with NJ 6.1.12.HistoryCC.1 and AP US History Period 3 Key Concept 3.1',
      },
    } satisfies Record<string, unknown>,
    displayOrder: 2,
    published: true,
  },
];

export const morristownPrimarySourcePackets: Prisma.PrimarySourcePacketCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: "Dr. James Thacher's Military Journal: The Morristown Winters",
    description: "Excerpts from the military journal of Dr. James Thacher, a surgeon in the Continental Army, documenting conditions during the Morristown encampments. Thacher's journal provides a medical officer's perspective on the army's suffering — disease, malnutrition, frostbite, and the inoculation program that Washington ordered during the first winter. His observations combine clinical detail with personal reflection on the human cost of the war.",
    sourceType: 'PRIMARY',
    publisherOrHolder: 'Massachusetts Historical Society / Morristown NHP Archives',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      "Thacher was a surgeon, not a common soldier. How does his professional role shape what he observes and records?",
      "What medical details does Thacher include that a non-medical observer might miss or not understand?",
      "How does Thacher describe the smallpox inoculation program? What risks does he identify, and how does he evaluate Washington's decision?",
      "Compare Thacher's clinical descriptions of suffering with Martin's personal account. How do the two perspectives complement each other?",
      "What does Thacher's journal reveal about the state of military medicine during the Revolution?",
    ],
    // MODEL: Claude Sonnet (narrative)
    teacherNarrative: "Dr. James Thacher's journal is an invaluable classroom resource because it offers students a perspective rarely encountered in Revolutionary War studies — that of a military physician witnessing the human cost of war not on the battlefield but in the hospital tent. Thacher's training as a surgeon meant he observed with clinical precision: he recorded symptoms, treatments, mortality rates, and the progression of diseases that killed far more Continental soldiers than British muskets ever did. His account of the smallpox inoculation program at Morristown is particularly important. Guide students to understand that inoculation in 1777 was not the safe vaccination we know today — it involved deliberately infecting patients with live smallpox, hoping to produce a mild case that would confer immunity. The procedure was controversial, medically risky, and potentially fatal. Washington's decision to inoculate his entire army was an extraordinary gamble: he chose to temporarily weaken his fighting force to eliminate the disease that had been its deadliest enemy. Thacher documented this decision and its execution in detail, providing students with primary evidence to evaluate one of the most consequential public health decisions in American military history. Pair Thacher's medical perspective with Martin's enlisted soldier's account to help students build a multi-perspective understanding of what the Morristown winters actually meant for the people who lived through them.",
    narrativeModel: 'sonnet',
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: "Washington's Letters to Congress on the Supply Crisis (1779-1780)",
    description: "A collection of letters from General Washington to the Continental Congress and state governors, written during the Hard Winter at Morristown. These letters document the army's desperate supply situation with increasing urgency, revealing the gap between the political rhetoric of revolution and the material reality of sustaining an army. Washington's tone shifts from diplomatic request to barely contained frustration as weeks pass without relief.",
    sourceType: 'PRIMARY',
    publisherOrHolder: 'Library of Congress / National Archives',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      "How does Washington's tone change across the letters as the winter progresses? What specific language reveals his growing frustration?",
      "Washington wrote these letters knowing they would be read by politicians, not soldiers. How does his intended audience shape what he says and how he says it?",
      "What specific supplies does Washington request? What does this list reveal about the army's condition?",
      "Compare Washington's private letters with his public orders to the troops. Why might these two voices differ?",
      "What do these letters reveal about the structural weaknesses of the Continental Congress under the Articles of Confederation?",
    ],
    // MODEL: Claude Sonnet (narrative)
    teacherNarrative: "Washington's correspondence from the Ford Mansion during the Hard Winter is among the most revealing primary source material from the entire Revolution — not because it describes battles but because it documents the slow-motion crisis of an army that its own government was failing. These letters are essential for students learning to read between the lines of formal correspondence. Washington was a master of controlled rhetoric: even his most desperate appeals maintain a veneer of deference to civilian authority. Guide students to track the evolution of his language across multiple letters — from early, measured requests for supplies to later communications in which barely disguised anger breaks through the diplomatic surface. The contrast between Washington's letters to Congress (pleading for food and pay) and his general orders to the troops (demanding discipline and patience) is particularly powerful for classroom analysis. Students can examine how a leader manages two audiences simultaneously — maintaining political relationships upward while preventing collapse downward. These letters also provide concrete evidence for understanding the structural failures of wartime governance. Washington could not compel Congress to act; Congress could not compel states to contribute. The result was an army starving in the field while debates continued in comfortable meeting rooms. Help students connect this to the later push for a stronger central government that would culminate in the Constitutional Convention.",
    narrativeModel: 'sonnet',
    displayOrder: 2,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Pennsylvania Line Mutiny Documents (January 1781)',
    description: "A collection of documents related to the Pennsylvania Line mutiny, including the soldiers' written grievances, congressional committee reports, and the terms of resolution. These documents reveal the mutiny as an organized political action by veteran soldiers who maintained military discipline while demanding their contractual rights — a striking case of revolutionary principles turned against the revolutionary government.",
    sourceType: 'PRIMARY',
    publisherOrHolder: 'Pennsylvania State Archives / National Archives',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      "How do the mutineers describe their own actions? Do they see themselves as rebels, or as citizens exercising legitimate grievances?",
      "The mutineers rejected British offers to switch sides. What does this tell us about the nature of their protest?",
      "Compare the language of the mutineers' grievances with the language of the Declaration of Independence. What parallels exist?",
      "How did the congressional committee respond to the mutiny? What does the resolution reveal about the balance of power between soldiers and government?",
      "Was the Pennsylvania Line mutiny a threat to the Revolution or a fulfillment of its principles? Defend your position with evidence.",
    ],
    // MODEL: Claude Sonnet (narrative)
    teacherNarrative: "The Pennsylvania Line mutiny documents are among the most provocative primary sources available for teaching the American Revolution, because they force students to confront the Revolution's deepest contradiction: an army fighting for liberty composed of men who were themselves denied basic rights. These were not deserters or cowards — they were battle-hardened veterans of Brandywine, Germantown, and Monmouth who had served for years without adequate pay, food, or clothing. Their written grievances read like a legal brief: specific, documented, and grounded in contractual arguments about the terms of their enlistment. Guide students to notice that the mutineers maintained military discipline throughout their march to Princeton. They elected their own sergeants, posted guards, and explicitly rejected British agents who tried to recruit them. This is crucial: they were not abandoning the Revolution but demanding that the Revolution live up to its own principles. The mutiny's resolution — negotiated rather than suppressed by force — provides an excellent case study in the limits of military authority in a revolutionary republic. Compare this with the New Jersey Line mutiny a few weeks later, which Washington did suppress by force (executing ringleaders), to spark discussion about when and why the same government responds differently to similar protests.",
    narrativeModel: 'sonnet',
    displayOrder: 3,
    published: true,
  },
];

export const morristownTeacherWorksheets: Prisma.TeacherWorksheetCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Comparing Morristown and Valley Forge',
    worksheetType: 'GRAPHIC_ORGANIZER',
    description: 'A structured comparison worksheet helping students analyze the similarities and differences between the Continental Army\'s two most famous winter encampments: Valley Forge (1777-78) and Morristown (1779-80).',
    content: `COMPARING MORRISTOWN AND VALLEY FORGE
Graphic Organizer

Instructions: Complete the comparison chart using evidence from primary sources and class materials. For each category, note specific details for both encampments, then explain which winter was more severe and why.

| Category | Valley Forge (1777-78) | Morristown (1779-80) |
|---|---|---|
| Dates of encampment | | |
| Approximate number of troops | | |
| Weather conditions | | |
| Food supply / rations | | |
| Clothing and shelter | | |
| Disease and casualties | | |
| Major discipline incidents | | |
| Leadership challenges | | |
| How the encampment ended | | |
| Place in national memory today | | |

Analysis Questions:
1. Based on your comparison, which winter was harder for the soldiers? Support your answer with at least three specific pieces of evidence.
2. Valley Forge is far more famous than Morristown in American popular memory. Why do you think this is? Consider the role of timing, storytelling, and national mythology.
3. Joseph Plumb Martin was present at both encampments. How might his comparison of the two winters differ from a historian's comparison? Why?`,
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Morristown and the Continental Army Quiz',
    worksheetType: 'QUIZ',
    description: "Assessment quiz covering the Morristown encampments, the Hard Winter, the Pennsylvania Line mutiny, and the experience of Continental soldiers during the Revolution's most challenging period.",
    content: 'Quiz content — see quizData for structured questions.',
    quizData: {
      title: 'Morristown and the Continental Army',
      instructions: 'Answer all questions based on our study of Morristown in the American Revolution. For short answer questions, use specific evidence from the sources and materials we studied.',
      questions: [
        {
          id: 1,
          type: 'multiple_choice',
          question: 'Why did Washington choose Morristown for winter quarters in both 1777 and 1779?',
          options: [
            'Morristown was the largest city in New Jersey and had the most resources',
            'The Watchung Mountains provided a natural defensive barrier against British advance from New York, and the local iron industry could supply the army',
            'Congress ordered Washington to camp at Morristown both times',
            'Morristown was the closest town to the British lines in New York',
          ],
          correctAnswer: 'B',
          explanation: "Morristown's strategic value lay in its geography: the Watchung Mountains shielded the camp from British attack, while the surrounding countryside provided timber, water, and iron for military supplies. The town was close enough to New York to monitor British movements but protected enough to prevent a surprise attack.",
        },
        {
          id: 2,
          type: 'multiple_choice',
          question: 'What was historically significant about Washington\'s decision to inoculate the army against smallpox at Morristown in 1777?',
          options: [
            'It was the first time any army had used vaccination in wartime',
            'It was a risky decision to deliberately weaken the army in the short term to eliminate the disease that had killed more soldiers than combat',
            'It was ordered by Congress over Washington\'s objections',
            'It failed and caused more deaths than the disease itself',
          ],
          correctAnswer: 'B',
          explanation: "The inoculation program was not vaccination (which had not yet been invented) but variolation — deliberately infecting soldiers with live smallpox to produce a milder case and immunity. This temporarily incapacitated soldiers and carried real risk of death, but Washington judged the long-term benefit worth the short-term danger. The program dramatically reduced smallpox rates and is considered one of the first large-scale military public health campaigns.",
        },
        {
          id: 3,
          type: 'multiple_choice',
          question: 'What made the Hard Winter of 1779-80 at Morristown so devastating?',
          options: [
            'A British attack destroyed the camp and killed hundreds of soldiers',
            'Twenty-eight blizzards, complete supply collapse, starvation rations, and the worst cold in a generation combined to push the army to its breaking point',
            'Washington abandoned the army to return to Mount Vernon',
            'The French alliance collapsed, leaving the army without allies',
          ],
          correctAnswer: 'B',
          explanation: "The winter of 1779-80 brought unprecedented weather — twenty-eight blizzards, six feet of snow, and temperatures so cold that New York Harbor froze solid. The supply system collapsed entirely, leaving soldiers without adequate food, clothing, or pay for months. Multiple units threatened mutiny, and two Connecticut regiments actually refused orders in May 1780.",
        },
        {
          id: 4,
          type: 'true_false',
          question: 'The Pennsylvania Line mutineers who marched on Congress in January 1781 rejected British offers to switch sides, demonstrating that their protest was against Congress, not against the cause of independence.',
          correctAnswer: 'True',
          explanation: "When British agents approached the mutineers during their march to Princeton, offering money and land in exchange for switching sides, the soldiers rejected the overtures and turned the agents over to American authorities. This is a crucial detail: the mutineers were not abandoning the Revolution but demanding that the revolutionary government honor its obligations to them.",
        },
        {
          id: 5,
          type: 'short_answer',
          question: "Joseph Plumb Martin wrote that he \"did not put a single morsel of victuals into my mouth for four days and as many nights\" at Morristown. Using Martin's account and other evidence, explain what the Continental Army's supply crisis reveals about the weaknesses of the government under the Articles of Confederation.",
          correctAnswer: '[Accept answers that connect the supply crisis to Congressional inability to tax or compel state contributions, and explain how this structural weakness left the army dependent on voluntary compliance that often failed]',
          explanation: "Strong answers will identify the core structural problem: under the Articles of Confederation, Congress could request supplies and money from the states but could not compel them. States often failed to deliver, especially when their own citizens were struggling. Washington's letters from Morristown repeatedly describe this gap between what Congress promised and what the states actually provided. The army's suffering was not caused by lack of resources in America but by the inability of the central government to mobilize and distribute those resources effectively.",
        },
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 10,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: "Reading: Joseph Martin's Morristown Diary Excerpts",
    worksheetType: 'READING',
    description: "A guided reading worksheet featuring excerpts from Joseph Plumb Martin's memoir describing the Hard Winter at Morristown, with comprehension questions, vocabulary support, and analysis prompts.",
    content: `READING: JOSEPH PLUMB MARTIN AT MORRISTOWN
A Private Soldier's Account of the Hard Winter (1779-80)

About the Author: Joseph Plumb Martin (1760-1850) enlisted in the Continental Army at age fifteen and served for the duration of the war. His memoir, published in 1830, is the most detailed firsthand account of enlisted life in the Revolutionary War.

EXCERPT 1: Arrival at Jockey Hollow
"We arrived at our winter quarters at the latter end of December... We were in a condition to endure hardships, for we had no clothing to screen us from the cold, and our shoes were in a miserable condition... We had hard work to build our barracks. We had to go some distance for our timber, which we were obliged to drag through the snow."

Comprehension Questions:
1. When did Martin's unit arrive at Jockey Hollow?
2. What two problems does Martin identify immediately upon arrival?
3. What additional challenge did building the huts present?

EXCERPT 2: The Starvation
"We were absolutely, literally starved. I do solemnly declare that I did not put a single morsel of victuals into my mouth for four days and as many nights, except a little black birch bark which I gnawed off a stick of wood... I saw several of the men roast their old shoes and eat them."

Comprehension Questions:
4. How long did Martin go without food according to this passage?
5. What did Martin and other soldiers eat instead of regular food?
6. Why does Martin include the phrase "I do solemnly declare"? What does this suggest about how he expects readers to react?

EXCERPT 3: The Question of Staying
"The men were now exasperated beyond endurance; they could not stand it any longer... We had borne as long as human nature could endure, and to bear longer we considered folly."

Analysis Questions:
7. What does Martin mean by "exasperated beyond endurance"? Use context clues and your knowledge of the Morristown encampment.
8. Martin says the soldiers considered it "folly" to bear their conditions any longer. Yet most of them stayed. What reasons might explain why they remained despite this assessment?
9. How does Martin's enlisted perspective differ from what you might read in a textbook about the Continental Army at Morristown? What details does Martin include that official histories might leave out?

Vocabulary:
- victuals: food, provisions
- exasperated: intensely frustrated, driven to the limit of patience
- folly: foolishness, a lack of good judgment
- barracks: buildings for housing soldiers`,
    displayOrder: 5,
    published: true,
  },
];
