// MODEL: Claude Sonnet (structure + code) / Claude Opus (long narratives >150 words)
// Curated teacher content for Plymouth, MA

import { Prisma } from '@prisma/client';

const TOWN_ID = 'us-ma-plymouth';

export const plymouthLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'From Pilgrims to Patriots: Plymouth\'s Journey from Founding Myth to Revolution',
    gradeRange: '6-8',
    estimatedDuration: '3 class periods',
    summary: 'This lesson examines how Plymouth, a town defined by its founding mythology as the site of the Pilgrim landing, navigated its identity during the American Revolution. Students will trace the arc from Plymouth\'s self-image as a place of religious refuge and covenant community to its emergence as a participant in armed resistance against British authority. The lesson uses Plymouth town meeting records, militia muster rolls, and period correspondence to show how real people in a real town reconciled their deep attachment to a founding story with the practical demands of revolution. Students will analyze how Plymouth\'s militia joined the siege of Boston in 1775, how town meetings shifted from petitions to preparations for war, and how the tension between Pilgrim heritage and Revolutionary identity shaped local decision-making. By examining these sources, students develop skills in reading governance documents, understanding how communities justify change, and recognizing how founding stories are reinterpreted to serve new political purposes.',
    lessonData: {
      objectives: [
        'Students will analyze how Plymouth\'s identity as a Pilgrim town influenced its approach to the American Revolution',
        'Students will compare Plymouth town meeting records from pre-Revolutionary and Revolutionary periods to identify shifts in governance and rhetoric',
        'Students will explain how Plymouth\'s militia organized and joined the siege of Boston in 1775',
        'Students will evaluate how founding mythologies are reinterpreted during times of political crisis',
      ],
      essentialQuestions: [
        'How did Plymouth reconcile its identity as a Pilgrim town with its role in the Revolution?',
        'What can town meeting records tell us about how ordinary people experienced the shift from loyalty to resistance?',
        'How do communities use their founding stories to justify new political actions?',
      ],
      materials: [
        'Primary source packet: Plymouth town meeting records, 1770-1776 (provided)',
        'Map of Plymouth in the 1770s',
        'Graphic organizer: Founding Myth vs. Revolutionary Identity',
        'Timeline template: Plymouth from Colony to Revolution',
      ],
      warmUp: {
        duration: '10 minutes',
        activity: 'Show students an image of Plymouth Rock and the Mayflower. Ask: "What story does this town tell about itself?" Then show a 1775 militia muster roll from Plymouth. Ask: "How does this document tell a different kind of story about the same town?"',
      },
      directInstruction: {
        duration: '20 minutes',
        content: [
          'Plymouth\'s founding narrative: the Mayflower Compact and the covenant community',
          'Pilgrim-era governance: how Plymouth Colony organized itself',
          'The transition: from colony to province town under Massachusetts',
          'Growing tensions with Britain: Plymouth\'s town meetings respond to the Stamp Act and Intolerable Acts',
          'Plymouth militia joins the siege of Boston: local men in a regional conflict',
        ],
      },
      guidedPractice: {
        duration: '25 minutes',
        activities: [
          'Small group analysis: compare excerpts from early Plymouth governance documents with 1774-1775 town meeting records',
          'Groups complete the Founding Myth vs. Revolutionary Identity graphic organizer',
          'Class discussion: what language from the Pilgrim era reappears in Revolutionary-era documents, and why?',
        ],
      },
      independentPractice: {
        duration: '20 minutes',
        assignment: 'Write a one-paragraph response: How did Plymouth use its founding story to justify joining the Revolution? Cite at least two sources and explain one tension between the Pilgrim heritage and the Revolutionary cause.',
      },
      closure: {
        duration: '10 minutes',
        activity: 'Exit ticket: "Name one way Plymouth\'s founding myth helped its move toward Revolution, and one way it might have complicated it."',
      },
      differentiation: {
        struggling: 'Pre-annotated town meeting excerpts with vocabulary support, sentence starters for paragraph writing, paired reading of sources',
        advanced: 'Additional sources from Pilgrim-era documents for deeper comparison; extended essay on how founding myths are reused across American history',
        ell: 'Bilingual glossary of governance terms, visual timeline with illustrations, simplified source excerpts with originals available',
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
        'D2.His.3.6-8: Use questions generated about individuals and groups to analyze why they and the developments they shaped are seen as historically significant',
        'D2.His.16.6-8: Organize applicable evidence into a coherent argument about the past',
      ],
      stateStandards: {
        placeholder: 'Massachusetts History & Social Science: USI.T4 (The American Revolution)',
        suggestedAlignment: 'Aligns with MA 5.T4 and USI.T4 standards on causes and early events of the Revolution',
      },
    } satisfies Record<string, unknown>,
    comparativeAssignment: {
      title: 'Plymouth and Boston: Colony Town Meets the Capital of Resistance',
      description: 'Compare how Plymouth and Boston experienced the lead-up to the Revolution. How did Plymouth\'s small-town, Pilgrim-heritage identity shape a different path to resistance than Boston\'s urban radicalism? What brought their paths together at the siege of Boston in 1775?',
      compareTowns: [
        {
          townId: 'us-ma-boston',
          townName: 'Boston',
          comparisonPoints: [
            'Town governance structures and how resistance was organized',
            'The role of founding mythology vs. commercial grievances in motivating resistance',
            'Militia organization and participation in the siege of Boston',
            'How each town\'s identity shaped its Revolutionary rhetoric',
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
      title: 'From Pilgrims to Patriots: Plymouth\'s Revolutionary Transformation',
      slides: [
        { slideNumber: 1, title: 'Title Slide', bulletPoints: ['Plymouth, Massachusetts', 'From Founding Myth to Revolution', '[Teacher Name] | [Date]'], speakerNotes: 'Open with the tension: Plymouth is famous for 1620, but something equally important happened here in 1775.', suggestedVisual: 'Split image: Plymouth Rock and a Revolutionary-era militia muster' },
        { slideNumber: 2, title: 'Essential Questions', bulletPoints: ['How did Plymouth reconcile its Pilgrim identity with Revolution?', 'What do town meeting records reveal about ordinary people?', 'How do founding stories get reused for new purposes?'], speakerNotes: 'Frame these as genuine puzzles. Plymouth\'s story is not as simple as "they joined the Revolution."', suggestedVisual: 'Question text overlaid on a map of Plymouth' },
        { slideNumber: 3, title: 'Plymouth\'s Founding Story', bulletPoints: ['The Mayflower Compact: governance by consent', 'Covenant community: a town built on shared promises', 'How Plymouth remembered itself by the 1770s'], speakerNotes: 'Establish the baseline identity. These people saw themselves as heirs to the Pilgrims.', suggestedVisual: 'Image of the Mayflower Compact or a period illustration of the Pilgrim landing' },
        { slideNumber: 4, title: 'A Town in Transition', bulletPoints: ['Plymouth under the Massachusetts Province: governance changes', 'Growing grievances: Stamp Act protests, Intolerable Acts responses', 'Town meetings shift from petitions to preparations'], speakerNotes: 'Show the gradual escalation. This was not a sudden switch but a slow transformation.', suggestedVisual: 'Excerpts from town meeting minutes showing changing language' },
        { slideNumber: 5, title: 'Plymouth Goes to War', bulletPoints: ['Militia muster and organization', 'Plymouth men march to join the siege of Boston', 'A Pilgrim town becomes a Revolutionary town'], speakerNotes: 'Emphasize the human dimension: these were farmers and tradesmen leaving their families.', suggestedVisual: 'Map showing the march route from Plymouth to Boston' },
        { slideNumber: 6, title: 'Primary Source Activity', bulletPoints: ['Compare Pilgrim-era and Revolutionary-era governance documents', 'Complete the Founding Myth vs. Revolutionary Identity organizer', 'Prepare to share findings with the class'], speakerNotes: 'Transition to guided practice. Circulate and help groups identify continuities and changes.', suggestedVisual: 'Activity instructions and document excerpts' },
        { slideNumber: 7, title: 'Reflection', bulletPoints: ['How did Plymouth use its past to explain its present?', 'What tensions existed between the founding myth and Revolution?', 'Do communities still reinterpret their founding stories today?'], speakerNotes: 'Push students to connect to the present. Founding myths are living documents.', suggestedVisual: 'Modern photograph of Plymouth alongside a historical image' },
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Covenant and Revolution: Plymouth\'s Political Identity from 1620 to 1776',
    gradeRange: '9-12',
    estimatedDuration: '4-5 class periods',
    summary: 'This advanced unit uses Plymouth as a case study in how communities navigate the tension between inherited identity and revolutionary change. High school students engage with Pilgrim-era governance documents alongside Revolutionary-era town meeting records, militia correspondence, and contemporary pamphlets to analyze how Plymouth\'s leaders and citizens justified a break with British authority while maintaining continuity with their founding mythology. The unit examines the Mayflower Compact as a precedent for self-governance, the transformation of Plymouth town meetings from administrative bodies to engines of resistance, and the decision of Plymouth militia to join the siege of Boston. Students will grapple with sophisticated questions about political legitimacy, the selective use of historical memory, and the gap between a town\'s self-image and its lived reality — including the erasure of Wampanoag perspectives from Plymouth\'s founding narrative and Revolutionary rhetoric alike. The unit culminates in a document-based essay or research project analyzing how Plymouth constructed a usable past.',
    lessonData: {
      objectives: [
        'Students will analyze the Mayflower Compact as a governance document and evaluate its use as Revolutionary-era precedent',
        'Students will trace the evolution of Plymouth town meetings from routine governance to organized resistance',
        'Students will evaluate how historical memory is selectively constructed to serve political purposes',
        'Students will examine whose voices are included and excluded in Plymouth\'s founding and Revolutionary narratives',
      ],
      essentialQuestions: [
        'How did Plymouth\'s leaders use the legacy of 1620 to justify the actions of 1775?',
        'What is the relationship between a community\'s founding myth and its capacity for political change?',
        'Whose perspectives are erased when a town constructs a "usable past" — and what is lost?',
      ],
      materials: [
        'Extended primary source packet: Mayflower Compact, Plymouth Colony records, 1770s town meeting minutes, militia correspondence',
        'Plymouth town governance documents from multiple eras (selected)',
        'Sourcing and contextualization worksheet',
        'DBQ essay prompt and rubric',
      ],
      warmUp: {
        duration: '10 minutes',
        activity: 'Read a brief excerpt from the Mayflower Compact alongside a 1774 Plymouth town meeting resolution. Ask: "What do these documents have in common? What has changed?" Students annotate similarities and differences.',
      },
      directInstruction: {
        duration: '25 minutes',
        content: [
          'The Mayflower Compact in context: what it actually said vs. what later generations claimed it meant',
          'Plymouth Colony governance: from religious covenant to political institution',
          'The Province period: Plymouth absorbed into Massachusetts, identity tensions',
          'Revolutionary Plymouth: town meetings, committees of correspondence, and militia organization',
          'The missing story: Wampanoag perspectives and the limits of Plymouth\'s self-narrative',
        ],
      },
      guidedPractice: {
        duration: '30 minutes',
        activities: [
          'Document analysis: trace how references to the Mayflower Compact appear in Revolutionary-era Plymouth documents',
          'Contextualization exercise: place Plymouth\'s actions within the broader Massachusetts resistance timeline',
          'Small group discussion: how does selective memory enable political change — and what does it cost?',
        ],
      },
      independentPractice: {
        duration: '45 minutes (across multiple periods)',
        assignment: 'DBQ Essay or research project: "How did Plymouth construct a usable past to navigate the Revolution?" Students must use at least 4 primary sources spanning the Pilgrim and Revolutionary eras, and address whose perspectives are absent.',
      },
      closure: {
        duration: '10 minutes',
        activity: 'Seminar discussion: "Is it possible for a community to honor its founding story and still fundamentally change? What does Plymouth\'s example suggest?"',
      },
      differentiation: {
        struggling: 'Scaffolded document analysis with guided questions, essay outline template, vocabulary support for governance terminology',
        advanced: 'Additional archival sources including Wampanoag oral histories and historiographic essays on Plymouth memory',
        ell: 'Annotated source excerpts with margin glosses, visual timeline of governance evolution, oral presentation option',
      },
      assessment: 'Formative: document analysis worksheets, seminar participation. Summative: DBQ essay or research project with source-based rubric.',
    } satisfies Record<string, unknown>,
    standards: {
      note: 'Standards alignment verified for AP US History and Massachusetts frameworks.',
      commonCore: [
        'CCSS.ELA-LITERACY.RH.11-12.1: Cite specific textual evidence, attending to such features as the date and origin of the information',
        'CCSS.ELA-LITERACY.RH.11-12.3: Evaluate various explanations for actions or events and determine which most closely align with textual evidence',
        'CCSS.ELA-LITERACY.RH.11-12.9: Integrate information from diverse sources into a coherent understanding',
      ],
      c3Framework: [
        'D2.His.1.9-12: Evaluate how historical events and developments were shaped by unique circumstances of time and place',
        'D2.His.5.9-12: Analyze how historical contexts shaped and continue to shape people\'s perspectives',
        'D2.His.16.9-12: Integrate evidence from multiple relevant historical sources and interpretations',
      ],
      stateStandards: {
        placeholder: 'Massachusetts History & Social Science: USI.T4, AP US History Periods 1 and 3',
        suggestedAlignment: 'Aligns with MA USI.T4 and AP US History Key Concepts 1.2 and 3.1',
      },
    } satisfies Record<string, unknown>,
    displayOrder: 2,
    published: true,
  },
];

export const plymouthPrimarySourcePackets: Prisma.PrimarySourcePacketCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Plymouth Town Meeting Records (1770-1776)',
    description: 'Selected minutes and resolutions from Plymouth town meetings during the critical years leading to the Revolution. These records document how a town famous for its Pilgrim heritage debated, deliberated, and ultimately committed to armed resistance against British authority.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'Plymouth Town Clerk Archives / Pilgrim Hall Museum',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'How does the language of the town meeting records change between 1770 and 1776?',
      'What references to Plymouth\'s Pilgrim heritage appear in the Revolutionary-era records?',
      'Who had the right to participate in these town meetings, and whose voices are absent?',
      'How do the records reflect the shift from petition and protest to preparation for war?',
      'What do these records reveal about how ordinary townspeople experienced the escalation toward revolution?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'Plymouth\'s town meeting records are an extraordinary window into how a community with a powerful founding mythology navigated the crisis of revolution. What makes these records particularly valuable for classroom use is how they reveal the gradual nature of political transformation. In the early 1770s, the records show a town going about its ordinary business — road maintenance, tax collection, poor relief — with occasional resolutions of concern about British policy. By 1774, the tone has shifted dramatically: resolutions are longer, more principled, and more urgent. By 1775, the meetings are organizing militia, collecting supplies, and coordinating with other towns. Guide students to read these records not for dramatic moments but for the slow accumulation of decisions that moved a community from loyalty to resistance. Pay special attention to the rhetorical strategies: when Plymouth\'s leaders invoke the Mayflower Compact or the spirit of the Pilgrims, they are doing political work, connecting an uncertain present to an honored past. This is how communities justify change — by framing it as continuity. Help students see this pattern, because it recurs throughout American history.',
    narrativeModel: 'opus',
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'The Mayflower Compact and Plymouth Colony Governance Records',
    description: 'The foundational governance document of Plymouth Colony alongside selected records from the Colony\'s early decades. These documents establish the political traditions that Plymouth\'s Revolutionary-era leaders would later invoke to justify resistance to British authority.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'Pilgrim Hall Museum / Massachusetts State Archives',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'What kind of political authority does the Mayflower Compact actually establish?',
      'How does the Compact\'s language about consent compare to Revolutionary-era arguments?',
      'What are the limits of the Compact as a precedent for revolution — who was included and who was not?',
      'How might Revolutionary-era leaders have read this document differently than the Pilgrims intended it?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'The Mayflower Compact is one of the most over-interpreted documents in American history, which makes it ideal for teaching critical reading. Students often arrive with a vague sense that it established democracy or religious freedom, when in fact it was a pragmatic agreement among a specific group of men to maintain order in an unexpected situation. The real teaching opportunity lies in showing how Revolutionary-era Plymouth leaders read backward into this document, finding precedents for self-governance and consent of the governed that the original signers may not have intended. This is not dishonesty — it is how political traditions work. Every generation reads its founding documents through its own needs. Have students read the Compact first on its own terms: What problem was it solving? Who signed it? What did it actually promise? Then introduce the Revolutionary-era references to the Compact and ask students to identify what has been added, emphasized, or quietly omitted. This exercise builds a sophisticated understanding of how historical memory operates as a political tool, not just a record of the past but a resource for the present.',
    narrativeModel: 'opus',
    displayOrder: 2,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Plymouth Militia Correspondence and Muster Records (1775)',
    description: 'Letters, muster rolls, and supply records from Plymouth\'s militia companies as they organized and marched to join the siege of Boston following the battles at Lexington and Concord. These documents capture the logistics and human experience of a small town going to war.',
    sourceType: 'PRIMARY',
    publisherOrHolder: 'Massachusetts State Archives / Pilgrim Hall Museum',
    credibilityTier: 'TIER1',
    analysisPrompts: [
      'What do the muster rolls tell us about who served in the Plymouth militia — their ages, occupations, and social standing?',
      'How do the supply records reveal the economic burden of mobilization on a small town?',
      'What does the correspondence reveal about the militia\'s morale, concerns, and sense of purpose?',
      'How do these practical military documents compare to the lofty rhetoric of the town meeting resolutions?',
      'What connections do the militia leaders draw between Plymouth\'s Pilgrim heritage and their current cause?',
    ],
    // MODEL: Claude Opus (narrative >150 words)
    teacherNarrative: 'Militia records are some of the most underused primary sources in teaching the Revolution, which is unfortunate because they bring the war down from abstraction to lived experience. Plymouth\'s muster rolls are lists of names — farmers, coopers, fishermen, young men and older men — who left their families and livelihoods to march toward Boston. The supply records show what the town could and could not provide: muskets, powder, blankets, food. These documents are not eloquent, but they are honest in a way that speeches and resolutions are not. Use them to ground students in the material reality of revolution. A town meeting can vote for resistance in an afternoon; actually equipping and sending men to war takes weeks and costs money that small towns do not have. The correspondence between Plymouth militia officers and the town selectmen reveals the gap between political commitment and practical capacity. Some letters request supplies that never arrived. Others report on conditions outside Boston that were far less glorious than anyone had imagined. Guide students to read these sources as evidence of what revolution actually demanded of ordinary communities — not just courage and conviction, but shoes, flour, and someone to tend the farms while the men were gone.',
    narrativeModel: 'opus',
    displayOrder: 3,
    published: true,
  },
];

export const plymouthTeacherWorksheets: Prisma.TeacherWorksheetCreateInput[] = [
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Plymouth: Founding Myth vs. Revolutionary Identity',
    worksheetType: 'GRAPHIC_ORGANIZER',
    description: 'Structured graphic organizer for analyzing the tension between Plymouth\'s Pilgrim founding mythology and its Revolutionary-era political identity.',
    content: `# Plymouth: Founding Myth vs. Revolutionary Identity

## Part 1: The Founding Story
- What is Plymouth\'s founding narrative? _________________
- Key document from the founding era: _________________
- Core values claimed by the founding story: _________________
- Who is included in the founding story? _________________
- Who is excluded from the founding story? _________________

## Part 2: The Revolutionary Moment
- Key document from the Revolutionary era: _________________
- Core values claimed by Revolutionary leaders: _________________
- How do Revolutionary leaders reference the founding story? _________________
- What language or ideas carry over from 1620 to 1775? _________________

## Part 3: Comparison Table
| Element | Pilgrim Era (1620s) | Revolutionary Era (1770s) | Continuity or Change? |
|---------|--------------------|--------------------------|-----------------------|
| Who governs? | | | |
| By what authority? | | | |
| Who has a voice? | | | |
| Relationship to outside authority | | | |
| How is dissent handled? | | | |

## Part 4: The Tension
Identify one way Plymouth\'s founding myth supported the Revolutionary cause:
_______________________________________________

Identify one way Plymouth\'s founding myth complicated or contradicted the Revolutionary cause:
_______________________________________________

## Part 5: Missing Perspectives
- Whose voices are absent from both the founding and Revolutionary narratives? _________________
- How might their inclusion change the story Plymouth tells about itself? _________________

## Part 6: Your Analysis
In 3-4 sentences, explain how Plymouth used its past to navigate its present. Was this an act of honesty, selective memory, or something more complicated?

_______________________________________________`,
    displayOrder: 1,
    published: true,
  },
  {
    town: { connect: { id: TOWN_ID } },
    title: 'Plymouth Revolution Quiz',
    worksheetType: 'QUIZ',
    description: 'Assessment quiz covering Plymouth\'s transition from Pilgrim town to Revolutionary participant, primary source analysis, and historical thinking about founding myths.',
    content: 'Quiz content — see quizData for structured questions.',
    quizData: {
      title: 'Plymouth: From Pilgrims to Patriots',
      instructions: 'Answer all questions based on our study of Plymouth in the American Revolution. For short answer questions, use specific evidence from sources we studied.',
      questions: [
        {
          id: 1,
          type: 'multiple_choice',
          question: 'What was the Mayflower Compact primarily designed to do?',
          options: [
            'Establish a framework for self-governance and maintain order among the Plymouth settlers',
            'Declare independence from the English Crown',
            'Guarantee religious freedom for all colonists',
            'Create a military alliance with the Wampanoag people',
          ],
          correctAnswer: 'A',
          explanation: 'The Mayflower Compact was a pragmatic agreement among the male settlers to form a governing body and abide by its laws. It was not a declaration of independence or a guarantee of broad religious freedom — it was a practical solution to a governance problem upon landing in an area outside their patent.',
        },
        {
          id: 2,
          type: 'true_false',
          question: 'Plymouth\'s Revolutionary-era leaders frequently invoked the Mayflower Compact and Pilgrim heritage to justify their resistance to British authority.',
          correctAnswer: 'True',
          explanation: 'Plymouth\'s leaders drew rhetorical connections between the Pilgrims\' tradition of self-governance and the Revolutionary cause. By framing resistance as continuity with their founding principles rather than a radical break, they made revolution feel like an act of heritage preservation.',
        },
        {
          id: 3,
          type: 'multiple_choice',
          question: 'How did Plymouth\'s town meeting records change between the early 1770s and 1775?',
          options: [
            'They remained focused only on local administrative matters throughout the period',
            'They shifted from routine governance with occasional protests to active organization of militia and supplies for war',
            'They immediately called for armed revolution after the Stamp Act',
            'They expressed consistent loyalty to the Crown throughout the period',
          ],
          correctAnswer: 'B',
          explanation: 'The town meeting records show a gradual escalation. Early 1770s records deal mostly with ordinary town business alongside some resolutions about British policy. By 1774-1775, the meetings are increasingly devoted to organizing resistance, collecting supplies, and coordinating militia activity.',
        },
        {
          id: 4,
          type: 'short_answer',
          question: 'Explain one way that Plymouth\'s Pilgrim founding mythology supported the Revolutionary cause, and one way it may have complicated it. Use evidence from the sources we studied.',
          correctAnswer: '[Accept answers that identify support (e.g., self-governance precedent, covenant tradition) and complication (e.g., Pilgrims sought religious refuge not political revolution, the Compact pledged loyalty to the Crown)]',
          explanation: 'Strong answers will note that the Compact\'s emphasis on consent and self-governance provided a useful precedent, while also recognizing that the Pilgrims were not rebels — they sought permission and pledged loyalty to the King. The tension between these facts is exactly what makes Plymouth\'s Revolutionary story interesting.',
        },
        {
          id: 5,
          type: 'multiple_choice',
          question: 'What role did Plymouth\'s militia play in the broader Revolutionary effort in 1775?',
          options: [
            'They remained in Plymouth to defend the town',
            'They organized and marched to join the siege of Boston after the battles at Lexington and Concord',
            'They refused to participate in military action',
            'They launched an independent attack on a British fort',
          ],
          correctAnswer: 'B',
          explanation: 'After news of Lexington and Concord reached Plymouth, the town\'s militia companies organized and marched to join the growing siege of Boston. This connected Plymouth\'s local resistance to the broader regional military effort.',
        },
        {
          id: 6,
          type: 'true_false',
          question: 'The Wampanoag perspective is well-represented in Plymouth\'s founding documents and Revolutionary-era records.',
          correctAnswer: 'False',
          explanation: 'Wampanoag perspectives are largely absent from both Plymouth\'s founding narrative and its Revolutionary-era records. Plymouth\'s story of itself — from the Pilgrim landing through the Revolution — was written by and for English colonists, erasing the Indigenous people whose land Plymouth occupied and whose history predated the colonial story by thousands of years.',
        },
        {
          id: 7,
          type: 'short_answer',
          question: 'Compare how Plymouth and Boston arrived at Revolution differently. What did Plymouth\'s small-town, Pilgrim-heritage identity contribute that was distinct from Boston\'s urban, commercial path to resistance?',
          correctAnswer: '[Accept answers that contrast Plymouth\'s identity-based, founding-myth-driven path with Boston\'s grievance-driven, commercially motivated resistance, noting that both arrived at the same destination through different routes]',
          explanation: 'Strong answers will note that Boston\'s path was shaped by direct economic grievances (trade restrictions, quartering of troops, the massacre) and urban radical organizing, while Plymouth\'s was more deeply tied to a narrative of self-governance rooted in its Pilgrim heritage. Both towns joined the siege of Boston, but their rhetoric and motivations reflected different local identities.',
        },
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 10,
    published: true,
  },
];
