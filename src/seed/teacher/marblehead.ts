// MODEL: Claude Sonnet (structure + code) / Claude Opus (long narratives >150 words)
// Curated teacher content for Marblehead, MA

import { Prisma } from '@prisma/client';

const TOWN_ID = 'us-ma-marblehead';

export const marbleheadLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Marblehead: The Fishermen Who Saved the Revolution',
    gradeRange: '6-8',
    estimatedDuration: '3 class periods',
    summary: 'This lesson introduces middle school students to the remarkable story of the Marblehead Regiment — a unit of seasoned fishermen and sailors whose maritime expertise proved indispensable to the Continental Army at its most desperate moments. Students will examine how Colonel John Glover organized his townsmen into the 14th Continental Regiment, how these mariners ferried Washington\'s army across the East River after the disastrous Battle of Long Island in August 1776, and how they manned the boats during the famous Christmas night crossing of the Delaware River before the Battle of Trenton. The lesson emphasizes how a small fishing community\'s everyday skills became a strategic military asset, and how ordinary working people — men who hauled cod and sailed schooners — shaped the outcome of the American Revolution. Students will analyze primary sources including muster rolls and period accounts to understand the composition and character of this uniquely skilled regiment.',
    lessonData: {
      objectives: [
        'Students will explain how Marblehead\'s fishing and maritime economy shaped the skills of the Marblehead Regiment',
        'Students will analyze the strategic importance of the Marblehead Regiment at the Delaware River crossing and the retreat from Long Island',
        'Students will evaluate Colonel John Glover\'s leadership and organizational abilities',
        'Students will describe how a community\'s civilian skills can become critical military assets during wartime',
      ],
      essentialQuestions: [
        'How did Marblehead\'s identity as a fishing community change the course of the American Revolution?',
        'Why were maritime skills so valuable to an army that fought primarily on land?',
        'What does the Marblehead Regiment teach us about the kinds of people who actually fight revolutions?',
      ],
      materials: [
        'Primary source packet: Muster rolls and Glover correspondence excerpts (provided)',
        'Map of Marblehead Harbor, c. 1770s',
        'Map of the Delaware River crossing, December 25-26, 1776',
        'Graphic organizer: Skills Transfer — Civilian to Military',
        'Timeline template: Marblehead Regiment Key Events',
      ],
      warmUp: {
        duration: '10 minutes',
        activity: 'Show students a modern photograph of Marblehead Harbor and a colonial-era map. Ask: "What kind of work did people do here? What skills would they need?" Then show Emanuel Leutze\'s famous painting of Washington Crossing the Delaware. Ask: "Who is rowing the boats? What skills would you need to do this in a freezing river at night?"',
      },
      directInstruction: {
        duration: '20 minutes',
        content: [
          'Marblehead in the 1770s: a prosperous fishing and trading port',
          'The fishermen of Marblehead: daily life, skills, and seamanship',
          'Colonel John Glover: merchant, militia leader, and organizer of the 14th Continental Regiment',
          'The regiment\'s composition: fishermen, sailors, and maritime workers — including notable racial diversity',
          'Key operations: the Long Island evacuation (August 1776) and the Delaware crossing (December 1776)',
        ],
      },
      guidedPractice: {
        duration: '25 minutes',
        activities: [
          'Small group activity: examine muster roll excerpts — what occupations are listed? What do they tell us about Marblehead?',
          'Skills mapping exercise: groups complete a "Civilian to Military" graphic organizer connecting fishing skills to military operations',
          'Map analysis: trace the Delaware crossing route and identify the challenges the boatmen faced',
        ],
      },
      independentPractice: {
        duration: '20 minutes',
        assignment: 'Write a diary entry from the perspective of a Marblehead fisherman-turned-soldier on the night of December 25, 1776. Include specific details about the weather, the river conditions, and the skills you are using. Explain how your experience on the sea prepared you for this moment.',
      },
      closure: {
        duration: '10 minutes',
        activity: 'Exit ticket: "Name one specific skill that Marblehead fishermen had that was critical to the Continental Army. Explain why General Washington could not have succeeded without it."',
      },
      differentiation: {
        struggling: 'Pre-labeled maps, simplified muster roll excerpts with vocabulary support, sentence starters for diary entry writing',
        advanced: 'Additional source analysis comparing Glover\'s regiment to other Continental Army units; research extension on Marblehead\'s economic sacrifice during the war',
        ell: 'Bilingual glossary of maritime and military terms, visual diagram of a Durham boat with labeled parts, illustrated timeline support',
      },
      assessment: 'Formative: graphic organizer completion, map analysis participation. Summative: diary entry writing assessment using provided rubric.',
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
        'D2.His.14.6-8: Explain multiple causes and effects of events and developments in the past',
      ],
      stateStandards: {
        placeholder: 'Massachusetts History & Social Science: USI.T4 (The American Revolution)',
        suggestedAlignment: 'Aligns with MA 5.T4 and USI.T4 standards on key events and figures of the Revolution',
      },
    } satisfies Record<string, unknown>,
    comparativeAssignment: {
      title: 'Marblehead and Salem: Two Maritime Communities in the Revolution',
      description: 'Compare how Marblehead and Salem — two neighboring Massachusetts seaport towns — contributed to the American Revolution. How did their maritime economies shape their roles? What were the similarities and differences in how they served the patriot cause?',
      compareTowns: [
        {
          townId: 'us-ma-salem',
          townName: 'Salem',
          comparisonPoints: [
            'Types of maritime commerce before the war (fishing vs. trade)',
            'Military contributions: regiment service vs. privateering',
            'Economic sacrifice and impact of war on each port',
            'How each town\'s maritime skills were used by the Revolution',
          ],
        },
      ],
      rubric: [
        { criteria: 'Historical Accuracy', excellent: 'All facts verified with citations to primary sources from both communities', proficient: 'Facts accurate with general source references', developing: 'Some inaccuracies or unsupported claims' },
        { criteria: 'Comparative Analysis', excellent: 'Identifies meaningful similarities and differences with historical explanation of why maritime communities contributed differently', proficient: 'Identifies clear similarities and differences', developing: 'Lists facts without meaningful comparison' },
        { criteria: 'Use of Evidence', excellent: 'Integrates multiple primary sources from both towns including muster rolls, correspondence, and period accounts', proficient: 'Uses at least one source from each town', developing: 'Limited or no primary source evidence' },
      ],
    } satisfies Record<string, unknown>,
    slideOutline: {
      title: 'The Fishermen Who Saved the Revolution',
      slides: [
        { slideNumber: 1, title: 'Title Slide', bulletPoints: ['Marblehead, Massachusetts', 'The Fishermen Who Saved the Revolution', '[Teacher Name] | [Date]'], speakerNotes: 'Set the scene: Marblehead is a rocky peninsula jutting into the Atlantic, home to one of colonial America\'s most important fishing fleets.', suggestedVisual: 'Colonial-era map or illustration of Marblehead Harbor' },
        { slideNumber: 2, title: 'Essential Questions', bulletPoints: ['How did a fishing community change the course of the Revolution?', 'Why were maritime skills so valuable to a land army?', 'What kinds of people actually fight revolutions?'], speakerNotes: 'Emphasize that revolutions depend on ordinary people with practical skills, not just generals and politicians.', suggestedVisual: 'Silhouette of fishing boats against harbor' },
        { slideNumber: 3, title: 'Marblehead: A Fishing Town', bulletPoints: ['One of the largest fishing ports in colonial New England', 'Hundreds of families depended on the cod fishery', 'Seamanship was a universal skill — boys learned to sail as children', 'A diverse community: included Black and Indigenous mariners'], speakerNotes: 'Help students understand that Marblehead\'s identity was inseparable from the sea. Every man in town could handle a boat.', suggestedVisual: 'Image of colonial fishing schooners or Marblehead waterfront' },
        { slideNumber: 4, title: 'Colonel John Glover', bulletPoints: ['Wealthy Marblehead merchant and shipowner', 'Organized his townsmen into the 14th Continental Regiment', 'Recognized that fishermen\'s skills had military applications', 'Trusted by Washington for the most critical water operations'], speakerNotes: 'Glover was not a professional soldier — he was a businessman who understood what his men could do. His leadership was about knowing his community\'s strengths.', suggestedVisual: 'Portrait of John Glover or period illustration' },
        { slideNumber: 5, title: 'Saving the Army: Long Island, August 1776', bulletPoints: ['Washington\'s army trapped in Brooklyn after a devastating defeat', 'Glover\'s men ferried 9,000 soldiers across the East River in one night', 'Fog and seamanship — the entire army escaped undetected', 'Without this evacuation, the Revolution might have ended'], speakerNotes: 'This is one of the most remarkable military evacuations in history. Emphasize the skill required to move thousands of men silently across a tidal river at night.', suggestedVisual: 'Map of Brooklyn Heights and the East River crossing route' },
        { slideNumber: 6, title: 'Crossing the Delaware, December 1776', bulletPoints: ['Christmas night, 1776: the army\'s darkest hour', 'Marblehead men rowed Durham boats through ice and sleet', 'Ferried 2,400 soldiers, horses, and artillery across the river', 'Made the surprise attack on Trenton possible'], speakerNotes: 'Connect to the earlier skills discussion: these are the same skills used to navigate fishing boats through North Atlantic storms. Now they are saving a revolution.', suggestedVisual: 'Leutze painting detail or map of the Delaware crossing' },
        { slideNumber: 7, title: 'Skills Activity and Reflection', bulletPoints: ['What skills did fishermen bring to the army?', 'How did civilian work prepare them for military service?', 'Whose contributions are often forgotten in revolution stories?'], speakerNotes: 'Transition to guided practice. The core insight: the Revolution was won by working people whose everyday skills became extraordinary under pressure.', suggestedVisual: 'Graphic organizer preview' },
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'From Fishing Boats to Troop Transports: Marblehead\'s Military Contribution',
    gradeRange: '9-12',
    estimatedDuration: '4-5 class periods',
    summary: 'This advanced lesson unit examines how Marblehead\'s seafaring expertise gave the Continental Army a critical capability it otherwise entirely lacked: the ability to conduct large-scale water operations. High school students will analyze the 14th Continental Regiment not merely as a colorful unit but as a case study in how asymmetric advantages emerge when civilian skills are applied to military problems. The unit examines John Glover\'s leadership through the lens of organizational history — how he recruited, trained, and maintained unit cohesion among men who were accustomed to the independence of fishing crews rather than military discipline. Students will evaluate primary sources including muster rolls, Glover\'s correspondence, pension records, and period accounts to construct arguments about the regiment\'s significance. The unit explores the regiment\'s notable racial diversity — Marblehead\'s maritime economy included Black and Indigenous sailors, and the regiment reflected this — and what this tells us about the social composition of the Revolutionary Army. The unit culminates in a document-based essay examining whether the Revolution could have survived 1776 without Marblehead\'s contribution.',
    lessonData: {
      objectives: [
        'Students will analyze how Marblehead\'s maritime economy created a unique military asset for the Continental Army',
        'Students will evaluate primary sources including muster rolls and correspondence to construct evidence-based arguments',
        'Students will assess the strategic significance of the Long Island evacuation and the Delaware crossing in the broader context of the 1776 campaign',
        'Students will examine the racial and social diversity of the Marblehead Regiment and what it reveals about the Revolutionary Army',
      ],
      essentialQuestions: [
        'How do civilian skills become military assets, and what does this tell us about how wars are actually fought?',
        'Could the American Revolution have survived 1776 without the Marblehead Regiment? What evidence supports your argument?',
        'What does the composition of the Marblehead Regiment tell us about who actually fought the Revolution — and how does this complicate popular narratives?',
      ],
      materials: [
        'Extended primary source packet: muster rolls, Glover correspondence, pension applications, period accounts',
        'Maps: Long Island evacuation route, Delaware crossing, Marblehead Harbor',
        'Sourcing and corroboration worksheet',
        'DBQ essay prompt and rubric',
        'Statistical analysis worksheet: regiment composition data',
      ],
      warmUp: {
        duration: '10 minutes',
        activity: 'Present students with Washington\'s general orders praising Glover\'s regiment. Ask: "What does it mean when a commanding general singles out a specific unit? What had they done to earn this recognition?" Then present a muster roll excerpt showing the occupations of regiment members. Ask: "What do you notice about who these soldiers were in civilian life?"',
      },
      directInstruction: {
        duration: '25 minutes',
        content: [
          'Marblehead\'s maritime economy: the cod fishery, Atlantic trade, and the culture of seamanship',
          'John Glover\'s background: merchant, shipowner, community leader, and reluctant soldier',
          'Formation of the 14th Continental Regiment: how Glover recruited and the regiment\'s unusual composition',
          'Racial diversity in the regiment: Black sailors including Romeo, Cato, and other men of color who served',
          'Strategic context: why the Continental Army desperately needed maritime capability in 1776',
          'The Long Island evacuation: operational analysis of moving 9,000 men across the East River',
          'The Delaware crossing: logistics, conditions, and the role of Marblehead boatmen',
        ],
      },
      guidedPractice: {
        duration: '30 minutes',
        activities: [
          'Muster roll analysis: students examine occupational data to build a demographic profile of the regiment',
          'Source corroboration exercise: comparing Glover\'s account of the Delaware crossing with other eyewitness narratives',
          'Strategic assessment: small groups evaluate the "what if" — map the consequences if the Long Island evacuation had failed',
        ],
      },
      independentPractice: {
        duration: '45 minutes (across multiple periods)',
        assignment: 'DBQ Essay: "Could the American Revolution have survived 1776 without the Marblehead Regiment?" Students must use at least 4 primary sources, address counterarguments, and place their argument in the strategic context of the 1776 campaign.',
      },
      closure: {
        duration: '10 minutes',
        activity: 'Seminar discussion: "Why have the Marblehead fishermen received less recognition than Minutemen or famous generals? What does this tell us about how we construct historical narratives?"',
      },
      differentiation: {
        struggling: 'Scaffolded source analysis with guiding questions, essay outline template with thesis sentence starters, annotated maps',
        advanced: 'Additional archival sources including pension records; comparative analysis of Marblehead Regiment with other specialized units in military history',
        ell: 'Annotated source excerpts with maritime vocabulary defined, visual essay planning tools, oral presentation option',
      },
      assessment: 'Formative: muster roll analysis, source corroboration worksheets, seminar participation. Summative: DBQ essay with source-based rubric evaluating argument construction, evidence use, and historical contextualization.',
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
        'D2.His.3.9-12: Use questions generated about individuals and groups to assess how the significance of their actions changes over time',
        'D2.His.16.9-12: Integrate evidence from multiple relevant historical sources and interpretations',
      ],
      stateStandards: {
        placeholder: 'Massachusetts History & Social Science: USI.T4, AP US History Period 3',
        suggestedAlignment: 'Aligns with MA USI.T4 and AP US History Key Concept 3.1 on military and strategic dimensions of the Revolution',
      },
    } satisfies Record<string, unknown>,
    displayOrder: 2,
    published: true,
  },
];

export const marbleheadPrimarySourcePackets: Prisma.PrimarySourcePacketCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Muster Rolls of the Marblehead Regiment (1775-1776)',
    description: 'Official enlistment and service records of the 14th Continental Regiment under Colonel John Glover. These muster rolls document the names, ages, occupations, and physical descriptions of the men who served, revealing the regiment\'s composition as overwhelmingly maritime workers — fishermen, sailors, boatmen, and shoremen. The rolls also document the regiment\'s notable racial diversity, listing men of African and Indigenous descent alongside white soldiers.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'National Archives',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'What occupations appear most frequently on the muster rolls? What does this tell us about Marblehead\'s economy?',
      'What can the physical descriptions on the rolls tell us about the men who served?',
      'How does the racial composition of the regiment compare to what you know about other Continental Army units?',
      'Why would military records list civilian occupations? What was the purpose of this information?',
      'What can muster rolls tell us that letters and diaries cannot — and what are their limitations as sources?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'Muster rolls are among the most underused primary sources in classroom teaching, yet they offer a uniquely democratic window into the past. Unlike letters and diaries, which survive disproportionately from the literate and the wealthy, muster rolls record every soldier who served — regardless of social status, literacy, or historical prominence. For the Marblehead Regiment, these rolls are especially revealing. Guide students to examine the occupational data first: the overwhelming prevalence of maritime occupations (fisherman, mariner, shoreman, cordwainer for the fishing fleet) tells us that this was not a cross-section of colonial society but a community of seafarers who enlisted together. This unit cohesion — men who had sailed together, weathered storms together, and trusted each other on the open ocean — helps explain why the regiment performed so effectively in high-pressure water operations. Push students to notice the racial diversity documented in the physical descriptions. The rolls record men described as "Negro" and "mulatto" serving alongside white soldiers, reflecting the integrated nature of Marblehead\'s maritime workforce where skill mattered more than race. This challenges the simplified narrative of the Revolution as a white man\'s war and opens rich discussion about who actually fought and why their stories are less well known.',
    narrativeModel: 'opus',
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'John Glover\'s Correspondence (1775-1776)',
    description: 'Selected letters written by Colonel John Glover during his service organizing and leading the Marblehead Regiment. These letters, addressed to military superiors, fellow officers, and family members, document the challenges of transforming independent-minded fishermen into disciplined soldiers, the logistical difficulties of supplying a regiment far from home, and Glover\'s own reflections on the critical operations his men performed.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'Marblehead Museum',
    credibilityTier: 'TIER2',
    analysisPrompts: [
      'How does Glover describe the challenges of commanding fishermen as soldiers? What does this reveal about military culture?',
      'Compare Glover\'s letters to military superiors with his letters to family. How does the audience change what he writes?',
      'What logistical problems does Glover describe? What do these tell us about the realities of Revolutionary War service?',
      'How does Glover describe the Delaware crossing? What details does he emphasize, and what might he leave out?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'Glover\'s correspondence offers students a rare opportunity to examine leadership from the inside — not the polished narratives of postwar memoirs but the real-time frustrations, anxieties, and improvisations of a commander in the field. Glover was not a professional military officer. He was a Marblehead merchant who understood boats, men, and logistics, and his letters reveal how he translated those civilian competencies into military effectiveness. Guide students to pay attention to the different audiences Glover addresses. His letters to Washington and other generals are formal, focused on operational readiness and supply needs. His private correspondence is more candid — he complains about the difficulty of imposing military discipline on men who were accustomed to the relative independence of fishing crews, where authority was earned through competence rather than rank. This tension between maritime work culture and military hierarchy is a rich theme for classroom discussion. Ask students: what makes a good leader? Does the answer change depending on who is being led? Glover\'s letters also provide firsthand operational detail about the regiment\'s most famous actions. His accounts of moving men and equipment across water under dangerous conditions bring specificity and humanity to events that textbooks often reduce to a single dramatic painting. Use these letters to help students see that behind every famous historical moment are exhausted people solving practical problems under enormous pressure.',
    narrativeModel: 'opus',
    displayOrder: 2,
    published: true,
  },
];

export const marbleheadTeacherWorksheets: Prisma.TeacherWorksheetCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Marblehead Regiment Quiz',
    worksheetType: 'QUIZ',
    description: 'Assessment quiz covering the Marblehead Regiment, Colonel John Glover, maritime contributions to the Revolution, and primary source analysis skills.',
    content: 'Quiz content — see quizData for structured questions.',
    quizData: {
      title: 'The Marblehead Regiment and the American Revolution',
      instructions: 'Answer all questions based on our study of Marblehead in the American Revolution. For short answer questions, use specific evidence from sources we studied.',
      questions: [
        {
          id: 1,
          type: 'multiple_choice',
          question: 'What was the primary civilian occupation of most soldiers in the Marblehead Regiment?',
          options: [
            'Fishermen and mariners',
            'Farmers and blacksmiths',
            'Merchants and shopkeepers',
            'Lawyers and clerks',
          ],
          correctAnswer: 'A',
          explanation: 'Muster rolls of the 14th Continental Regiment show that the overwhelming majority of soldiers listed maritime occupations — fisherman, mariner, shoreman — reflecting Marblehead\'s identity as one of colonial New England\'s most important fishing ports.',
        },
        {
          id: 2,
          type: 'multiple_choice',
          question: 'Why was the Marblehead Regiment\'s role in the Long Island evacuation of August 1776 so critical?',
          options: [
            'They ferried approximately 9,000 trapped soldiers across the East River at night, saving the Continental Army from destruction',
            'They defeated the British Navy in a naval battle in New York Harbor',
            'They built fortifications that held off the British advance',
            'They captured British supply ships carrying ammunition',
          ],
          correctAnswer: 'A',
          explanation: 'After the disastrous Battle of Long Island, Washington\'s army was trapped in Brooklyn with the East River at their backs. The Marblehead men used their seamanship to ferry the entire army across to Manhattan in a single night, an evacuation that saved the Continental Army from possible annihilation.',
        },
        {
          id: 3,
          type: 'true_false',
          question: 'The Marblehead Regiment was notably diverse for its time, including Black and Indigenous soldiers who served alongside white soldiers.',
          correctAnswer: 'True',
          explanation: 'Marblehead\'s maritime economy was more racially integrated than most colonial communities because skill and experience mattered more than race aboard fishing vessels. The regiment\'s muster rolls document men of African and Indigenous descent serving in the unit, making it one of the more diverse units in the Continental Army.',
        },
        {
          id: 4,
          type: 'multiple_choice',
          question: 'Who commanded the Marblehead Regiment?',
          options: [
            'Colonel John Glover',
            'General Nathanael Greene',
            'Colonel Henry Knox',
            'Captain John Parker',
          ],
          correctAnswer: 'A',
          explanation: 'John Glover was a prosperous Marblehead merchant and shipowner who organized his townsmen into the 14th Continental Regiment. His understanding of maritime skills and his ability to command men who respected competence over rank made him uniquely effective as a leader.',
        },
        {
          id: 5,
          type: 'short_answer',
          question: 'Explain how the everyday skills of Marblehead fishermen translated into military capabilities that the Continental Army desperately needed. Give at least two specific examples.',
          correctAnswer: '[Accept answers that connect specific maritime skills — boat handling, navigation, understanding of tides and currents, ability to work in harsh weather, crew coordination — to specific military operations such as the Long Island evacuation or the Delaware crossing]',
          explanation: 'Strong answers will identify specific skills: navigating boats in darkness and rough water (used at Long Island and the Delaware), working effectively in freezing and dangerous conditions (Delaware crossing in winter), coordinating crew actions silently and efficiently (critical for the night evacuation), and understanding river currents and tides (essential for both major water operations).',
        },
        {
          id: 6,
          type: 'short_answer',
          question: 'What are the strengths and limitations of muster rolls as primary sources for understanding the Marblehead Regiment? Why might historians value them despite their limitations?',
          correctAnswer: '[Accept answers that identify strengths — comprehensive, democratic, factual data — and limitations — no personal voices, no narrative, no context for individual experiences]',
          explanation: 'Strong answers will note that muster rolls are valuable because they document every soldier regardless of literacy or social status, providing demographic data (occupations, ages, racial descriptions) that letters and diaries cannot. However, they are limited because they contain no personal perspectives, emotions, or narrative detail. Historians value them because they offer a collective portrait of a community at war that is not filtered through the perspective of a single, usually elite, author.',
        },
        {
          id: 7,
          type: 'short_answer',
          question: 'Compare Glover\'s letters to military superiors with his private correspondence. How does the intended audience shape what a historical source contains? Why does this matter for historians?',
          correctAnswer: '[Accept answers that demonstrate understanding of how audience shapes source content and why historians must consider audience when evaluating sources]',
          explanation: 'Strong answers will note that Glover\'s official letters focus on operations, supplies, and readiness — presenting a competent, professional image — while his private letters are more candid about frustrations, including the difficulty of imposing military discipline on independent fishermen. This matters because it shows that no single source gives us the complete picture; historians must consider who a source was created for in order to understand what it includes and omits.',
        },
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 10,
    published: true,
  },
];
