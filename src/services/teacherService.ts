// MODEL: Claude Sonnet
// Teacher service for generating educational content and lesson plans
// Supports DB-backed curated content with generative fallback

import prisma from '../db/client.js';

/**
 * Teacher module response structure
 */
export interface TeacherModule {
  town: {
    id: string;
    name: string;
    state: string;
    slug: string;
  };
  overview: {
    title: string;
    gradeRange: string;
    estimatedDuration: string;
    summary: string;
  };
  lessonPlan: LessonPlan;
  primarySources: PrimarySourceItem[];
  comparativeAssignment: ComparativeAssignment;
  handouts: Handout[];
  quiz: Quiz;
  slideOutline: SlideOutline;
  standards: StandardsPlaceholder;
  relatedTowns: RelatedTownForTeachers[];
  meta?: {
    contentSource: 'curated' | 'generated';
  };
}

interface LessonPlan {
  objectives: string[];
  essentialQuestions: string[];
  materials: string[];
  warmUp: {
    duration: string;
    activity: string;
  };
  directInstruction: {
    duration: string;
    content: string[];
  };
  guidedPractice: {
    duration: string;
    activities: string[];
  };
  independentPractice: {
    duration: string;
    assignment: string;
  };
  closure: {
    duration: string;
    activity: string;
  };
  differentiation: {
    struggling: string;
    advanced: string;
    ell: string;
  };
  assessment: string;
}

interface PrimarySourceItem {
  id: string;
  title: string;
  type: string;
  sourceInfo: string;
  url: string | null;
  analysisPrompts: string[];
  credibilityTier: string;
  teacherNarrative?: string;
}

interface ComparativeAssignment {
  title: string;
  description: string;
  compareTowns: Array<{
    townId: string;
    townName: string;
    comparisonPoints: string[];
  }>;
  rubric: {
    criteria: string;
    excellent: string;
    proficient: string;
    developing: string;
  }[];
}

interface Handout {
  title: string;
  type: 'worksheet' | 'reading' | 'graphic_organizer' | 'timeline';
  description: string;
  content: string; // Markdown content
}

interface Quiz {
  title: string;
  instructions: string;
  questions: Array<{
    id: number;
    type: 'multiple_choice' | 'short_answer' | 'true_false';
    question: string;
    options?: string[];
    correctAnswer: string;
    explanation: string;
  }>;
}

interface SlideOutline {
  title: string;
  slides: Array<{
    slideNumber: number;
    title: string;
    bulletPoints: string[];
    speakerNotes: string;
    suggestedVisual: string;
  }>;
}

interface StandardsPlaceholder {
  note: string;
  commonCore: string[];
  c3Framework: string[];
  stateStandards: {
    placeholder: string;
    suggestedAlignment: string;
  };
}

interface RelatedTownForTeachers {
  townId: string;
  townName: string;
  connectionType: string;
  teachingConnection: string;
}

/**
 * Get teacher module for a town: DB-first curated content, with generative fallback
 */
export async function getTeacherModule(slug: string): Promise<TeacherModule | null> {
  // Check for curated content in DB
  const town = await prisma.town.findUnique({
    where: { slug },
    include: {
      lessonPlans: {
        where: { published: true },
        orderBy: { displayOrder: 'asc' },
      },
      primarySourcePackets: {
        where: { published: true },
        orderBy: { displayOrder: 'asc' },
      },
      teacherWorksheets: {
        where: { published: true },
        orderBy: { displayOrder: 'asc' },
      },
      outgoingLinks: {
        include: { toTown: true },
        orderBy: { weight: 'desc' },
        take: 3,
      },
      // Fallback data for sprint towns that have lesson plans but no source packets/worksheets
      sourceTowns: {
        include: { source: true },
        take: 8,
      },
      events: {
        include: { eventPeople: { include: { person: true } } },
        orderBy: { significanceWeight: 'desc' },
        take: 5,
      },
    },
  });

  if (!town) return null;

  // If curated content exists, build from DB
  if (town.lessonPlans.length > 0) {
    return buildCuratedModule(town);
  }

  // Fall back to generative approach
  return generateTeacherModuleFallback(slug);
}

/**
 * Build a curated TeacherModule from DB rows
 */
function buildCuratedModule(town: {
  id: string;
  name: string;
  state: string;
  slug: string;
  whyMatters: string;
  lessonPlans: Array<{
    title: string;
    gradeRange: string;
    estimatedDuration: string;
    summary: string;
    lessonData: unknown;
    standards: unknown;
    comparativeAssignment: unknown;
    slideOutline: unknown;
  }>;
  primarySourcePackets: Array<{
    id: string;
    title: string;
    sourceType: string;
    publisherOrHolder: string;
    url: string | null;
    analysisPrompts: string[];
    credibilityTier: string;
    teacherNarrative: string | null;
  }>;
  teacherWorksheets: Array<{
    title: string;
    worksheetType: string;
    description: string;
    content: string;
    quizData: unknown;
  }>;
  outgoingLinks: Array<{
    toTown: { id: string; name: string };
    linkType: string;
    reason: string;
  }>;
  sourceTowns: Array<{
    source: {
      id: string;
      title: string;
      type: string;
      publisherOrHolder: string;
      url: string | null;
      credibilityTier: string;
    };
  }>;
  events: Array<{
    name: string;
    summary: string;
    eventPeople: Array<{ person: { name: string; bioShort: string } }>;
  }>;
}): TeacherModule {
  const firstPlan = town.lessonPlans[0];
  const lessonData = firstPlan.lessonData as LessonPlan;
  const standards = (firstPlan.standards || {
    note: 'Standards alignment should be verified by educators for their specific state/district requirements.',
    commonCore: [],
    c3Framework: [],
    stateStandards: { placeholder: '[STATE STANDARDS TO BE ADDED]', suggestedAlignment: '' },
  }) as StandardsPlaceholder;
  const comparativeAssignment = (firstPlan.comparativeAssignment || {
    title: `Connecting ${town.name} to the Revolutionary Network`,
    description: `Research how ${town.name}'s Revolutionary story connects to other towns.`,
    compareTowns: [],
    rubric: [],
  }) as ComparativeAssignment;
  const slideOutline = (firstPlan.slideOutline || {
    title: `${town.name} and the American Revolution`,
    slides: [],
  }) as SlideOutline;

  // Map primary source packets — fall back to sourceTowns if none seeded
  const primarySources: PrimarySourceItem[] = town.primarySourcePackets.length > 0
    ? town.primarySourcePackets.map(psp => ({
        id: psp.id,
        title: psp.title,
        type: psp.sourceType,
        sourceInfo: psp.publisherOrHolder,
        url: psp.url,
        analysisPrompts: psp.analysisPrompts,
        credibilityTier: psp.credibilityTier,
        teacherNarrative: psp.teacherNarrative || undefined,
      }))
    : town.sourceTowns.slice(0, 5).map(st => ({
        id: st.source.id,
        title: st.source.title,
        type: st.source.type,
        sourceInfo: st.source.publisherOrHolder,
        url: st.source.url,
        analysisPrompts: generateSourceAnalysisPrompts(st.source.type),
        credibilityTier: st.source.credibilityTier,
      }));

  // Map worksheets to handouts and quiz — fall back to generated if none seeded
  const eventPeople = Array.from(
    new Map(
      town.events.flatMap(e => e.eventPeople.map(ep => [ep.person.name, ep.person]))
    ).values()
  );
  const handouts: Handout[] = town.teacherWorksheets.length > 0
    ? []
    : generateHandouts(town, eventPeople);
  let quiz: Quiz = town.teacherWorksheets.length > 0
    ? {
        title: `${town.name} in the American Revolution`,
        instructions: 'Answer the following questions based on our study of Revolutionary history.',
        questions: [],
      }
    : generateQuiz(town);

  for (const ws of town.teacherWorksheets) {
    if (ws.worksheetType === 'QUIZ' && ws.quizData) {
      quiz = ws.quizData as Quiz;
    } else {
      const typeMap: Record<string, Handout['type']> = {
        TIMELINE: 'timeline',
        GRAPHIC_ORGANIZER: 'graphic_organizer',
        WORKSHEET: 'worksheet',
        READING: 'reading',
      };
      handouts.push({
        title: ws.title,
        type: typeMap[ws.worksheetType] || 'worksheet',
        description: ws.description,
        content: ws.content,
      });
    }
  }

  return {
    town: {
      id: town.id,
      name: town.name,
      state: town.state,
      slug: town.slug,
    },
    overview: {
      title: firstPlan.title,
      gradeRange: firstPlan.gradeRange,
      estimatedDuration: firstPlan.estimatedDuration,
      summary: firstPlan.summary,
    },
    lessonPlan: lessonData,
    primarySources,
    comparativeAssignment,
    handouts,
    quiz,
    slideOutline,
    standards,
    relatedTowns: town.outgoingLinks.map(link => ({
      townId: link.toTown.id,
      townName: link.toTown.name,
      connectionType: link.linkType,
      teachingConnection: link.reason,
    })),
    meta: {
      contentSource: 'curated',
    },
  };
}

/**
 * Generative fallback: generate teacher module from town data
 */
export async function generateTeacherModuleFallback(slug: string): Promise<TeacherModule | null> {
  const town = await prisma.town.findUnique({
    where: { slug },
    include: {
      events: {
        include: {
          eventPeople: { include: { person: true } },
          sourceEvents: { include: { source: true } },
        },
        orderBy: { significanceWeight: 'desc' },
      },
      stories: {
        include: { subjectPerson: true },
        where: { verificationStatus: 'VERIFIED' },
      },
      outgoingLinks: {
        include: { toTown: true },
        orderBy: { weight: 'desc' },
        take: 3,
      },
      sourceTowns: {
        include: { source: true },
        where: {
          source: {
            type: 'PRIMARY',
          },
        },
      },
    },
  });

  if (!town) return null;

  // Collect all primary sources
  const primarySources: PrimarySourceItem[] = [];

  // From town sources
  for (const st of town.sourceTowns) {
    primarySources.push({
      id: st.source.id,
      title: st.source.title,
      type: st.source.type,
      sourceInfo: st.source.publisherOrHolder,
      url: st.source.url,
      analysisPrompts: generateSourceAnalysisPrompts(st.source.type),
      credibilityTier: st.source.credibilityTier,
    });
  }

  // From event sources
  for (const event of town.events) {
    for (const se of event.sourceEvents) {
      if (se.source.type === 'PRIMARY' && !primarySources.find(s => s.id === se.source.id)) {
        primarySources.push({
          id: se.source.id,
          title: se.source.title,
          type: se.source.type,
          sourceInfo: se.source.publisherOrHolder,
          url: se.source.url,
          analysisPrompts: generateSourceAnalysisPrompts(se.source.type),
          credibilityTier: se.source.credibilityTier,
        });
      }
    }
  }

  // Key people
  const keyPeople = new Map<string, typeof town.events[0]['eventPeople'][0]['person']>();
  for (const event of town.events) {
    for (const ep of event.eventPeople) {
      if (!keyPeople.has(ep.person.id)) {
        keyPeople.set(ep.person.id, ep.person);
      }
    }
  }

  // Build module
  const module: TeacherModule = {
    town: {
      id: town.id,
      name: town.name,
      state: town.state,
      slug: town.slug,
    },
    overview: {
      title: `The American Revolution in ${town.name}, ${town.state}`,
      gradeRange: '5-12 (adaptable)',
      estimatedDuration: '2-3 class periods',
      summary: town.whyMatters,
    },
    lessonPlan: generateLessonPlan(town, Array.from(keyPeople.values())),
    primarySources: primarySources.slice(0, 5),
    comparativeAssignment: generateComparativeAssignment(town),
    handouts: generateHandouts(town, Array.from(keyPeople.values())),
    quiz: generateQuiz(town),
    slideOutline: generateSlideOutline(town),
    standards: {
      note: 'Standards alignment should be verified by educators for their specific state/district requirements.',
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite textual evidence',
        'CCSS.ELA-LITERACY.RH.6-8.2: Determine central ideas',
        'CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information',
      ],
      c3Framework: [
        'D2.His.1: Evaluate historical events from multiple perspectives',
        'D2.His.3: Use questions generated about individuals and groups',
        'D2.Geo.2: Use maps, satellite images, and other representations',
      ],
      stateStandards: {
        placeholder: '[STATE STANDARDS TO BE ADDED]',
        suggestedAlignment: 'Align with state history standards for American Revolution period',
      },
    },
    relatedTowns: town.outgoingLinks.map(link => ({
      townId: link.toTown.id,
      townName: link.toTown.name,
      connectionType: link.linkType,
      teachingConnection: link.reason,
    })),
    meta: {
      contentSource: 'generated',
    },
  };

  return module;
}

function generateSourceAnalysisPrompts(sourceType: string): string[] {
  const basePrompts = [
    'Who created this source and why?',
    'When was this source created?',
    'What perspective does this source represent?',
  ];

  const typeSpecific: Record<string, string[]> = {
    PRIMARY: [
      'What was happening when this was written?',
      'How might the author\'s position affect their account?',
    ],
    SECONDARY: [
      'What primary sources does this draw from?',
      'What interpretation does the author offer?',
    ],
    INSTITUTIONAL: [
      'What is the institution\'s mission?',
      'How does that mission shape the presentation?',
    ],
  };

  return [...basePrompts, ...(typeSpecific[sourceType] || [])];
}

function generateLessonPlan(
  town: { name: string; whyMatters: string; events: Array<{ name: string }> },
  people: Array<{ name: string }>
): LessonPlan {
  return {
    objectives: [
      `Students will explain the significance of ${town.name} in the American Revolution`,
      'Students will analyze primary sources from the Revolutionary period',
      'Students will compare perspectives of different historical actors',
      'Students will connect local history to broader Revolutionary themes',
    ],
    essentialQuestions: [
      `Why did events in ${town.name} matter to the Revolution?`,
      'How do different sources tell different stories about the same events?',
      'Whose voices are missing from the historical record?',
    ],
    materials: [
      'Primary source packet (provided)',
      'Graphic organizer handout',
      'Map of Revolutionary-era region',
      'Timeline template',
    ],
    warmUp: {
      duration: '5-10 minutes',
      activity: `Show an image or map of ${town.name} today. Ask: "What do you know about this place? What questions do you have about its history?"`,
    },
    directInstruction: {
      duration: '15-20 minutes',
      content: [
        `Introduction to ${town.name}'s role in the Revolution`,
        'Key events and their significance',
        `Notable figures: ${people.slice(0, 3).map(p => p.name).join(', ')}`,
        'Connection to broader Revolutionary narrative',
      ],
    },
    guidedPractice: {
      duration: '20-25 minutes',
      activities: [
        'Primary source analysis in small groups',
        'Document-based questions discussion',
        'Timeline construction activity',
      ],
    },
    independentPractice: {
      duration: '15-20 minutes',
      assignment: 'Complete graphic organizer comparing perspectives of different historical actors',
    },
    closure: {
      duration: '5-10 minutes',
      activity: 'Exit ticket: "What surprised you most about this history? What questions remain?"',
    },
    differentiation: {
      struggling: 'Provide sentence starters, pre-highlighted sources, peer support',
      advanced: 'Additional primary sources, independent research extension, comparative essay',
      ell: 'Visual supports, bilingual glossary, partner work, simplified source excerpts',
    },
    assessment: 'Formative: participation, graphic organizer completion. Summative: quiz, comparative essay option.',
  };
}

function generateComparativeAssignment(
  town: { name: string; outgoingLinks: Array<{ toTown: { id: string; name: string }; reason: string }> }
): ComparativeAssignment {
  return {
    title: `Connecting ${town.name} to the Revolutionary Network`,
    description: `Research how ${town.name}'s Revolutionary story connects to other towns in the network. Choose one comparison town and create a presentation or essay showing the connections.`,
    compareTowns: town.outgoingLinks.slice(0, 3).map(link => ({
      townId: link.toTown.id,
      townName: link.toTown.name,
      comparisonPoints: [
        'Shared events or people',
        'Geographic relationship',
        'How events in one place affected the other',
        link.reason,
      ],
    })),
    rubric: [
      {
        criteria: 'Historical Accuracy',
        excellent: 'All facts verified, sources cited correctly',
        proficient: 'Most facts accurate, sources generally cited',
        developing: 'Some factual errors, incomplete sourcing',
      },
      {
        criteria: 'Analysis Depth',
        excellent: 'Insightful connections, multiple perspectives considered',
        proficient: 'Clear connections made, some analysis',
        developing: 'Surface-level connections only',
      },
      {
        criteria: 'Use of Evidence',
        excellent: 'Multiple primary sources integrated effectively',
        proficient: 'Some primary sources used appropriately',
        developing: 'Limited or no primary source use',
      },
    ],
  };
}

function generateHandouts(
  town: { name: string; events: Array<{ name: string; summary: string }> },
  people: Array<{ name: string; bioShort: string }>
): Handout[] {
  return [
    {
      title: `${town.name} Event Timeline`,
      type: 'timeline',
      description: 'Students place key events in chronological order and add details',
      content: `# ${town.name} Revolutionary Timeline\n\nInstructions: Place the following events in order and add one detail about each.\n\n${town.events.slice(0, 5).map(e => `- [ ] ${e.name}`).join('\n')}\n\n---\n\n| Event | Date | Significance |\n|-------|------|-------------|\n| | | |\n| | | |\n| | | |`,
    },
    {
      title: 'Primary Source Analysis',
      type: 'graphic_organizer',
      description: 'Structured analysis of Revolutionary-era documents',
      content: `# Primary Source Analysis Worksheet\n\n## Source Information\n- Title: _________________\n- Author: _________________\n- Date: _________________\n- Type: _________________\n\n## Observation\nWhat do you notice? (List 3 things)\n1.\n2.\n3.\n\n## Reflection\nWhat do you wonder? (List 2 questions)\n1.\n2.\n\n## Analysis\nWhat does this source tell us about ${town.name} during the Revolution?\n\n_______________________________________________\n\n## Perspective\nWhose voice is represented? Whose might be missing?\n\n_______________________________________________`,
    },
    {
      title: 'Key Figures Profile',
      type: 'worksheet',
      description: 'Research template for Revolutionary figures',
      content: `# Revolutionary Figure Profile\n\n## Basic Information\n- Name: _________________\n- Birth/Death Years: _________________\n- Occupation(s): _________________\n\n## Role in the Revolution\n${people.slice(0, 2).map(p => `### ${p.name}\n${p.bioShort}\n\nMy questions about this person:\n1.\n2.\n`).join('\n')}\n\n## Reflection\nWhich figure interests you most and why?\n\n_______________________________________________`,
    },
  ];
}

function generateQuiz(town: { name: string; events: Array<{ name: string; summary: string }> }): Quiz {
  return {
    title: `${town.name} in the American Revolution`,
    instructions: 'Answer the following questions based on our study of Revolutionary history.',
    questions: [
      {
        id: 1,
        type: 'multiple_choice',
        question: `What makes ${town.name} significant in Revolutionary history?`,
        options: [
          'It was the site of important Revolutionary events',
          'It had no connection to the Revolution',
          'It was founded after the Revolution',
          'It was a British stronghold throughout the war',
        ],
        correctAnswer: 'A',
        explanation: `${town.name} played a significant role in the American Revolution as evidenced by the events we studied.`,
      },
      {
        id: 2,
        type: 'true_false',
        question: 'Primary sources are documents or objects created during the time period being studied.',
        correctAnswer: 'True',
        explanation: 'Primary sources provide firsthand evidence about historical events.',
      },
      {
        id: 3,
        type: 'short_answer',
        question: `Name one event that occurred in ${town.name} during the Revolutionary period and explain its significance.`,
        correctAnswer: '[Varies - accept any accurate event with reasonable explanation]',
        explanation: 'Students should identify a specific event and connect it to broader Revolutionary themes.',
      },
      {
        id: 4,
        type: 'multiple_choice',
        question: 'Why is it important to consider multiple perspectives when studying history?',
        options: [
          'Different people experienced events differently',
          'It makes history more confusing',
          'Only one perspective is ever correct',
          'Perspectives don\'t matter in history',
        ],
        correctAnswer: 'A',
        explanation: 'Multiple perspectives help us understand the full complexity of historical events.',
      },
      {
        id: 5,
        type: 'short_answer',
        question: 'Describe one connection between this town and another Revolutionary-era town we discussed.',
        correctAnswer: '[Varies - accept any accurate connection]',
        explanation: 'Students should demonstrate understanding of the interconnected nature of Revolutionary events.',
      },
    ],
  };
}

function generateSlideOutline(town: { name: string; whyMatters: string; events: Array<{ name: string; summary: string }> }): SlideOutline {
  return {
    title: `${town.name} and the American Revolution`,
    slides: [
      {
        slideNumber: 1,
        title: 'Title Slide',
        bulletPoints: [
          town.name,
          'The American Revolution',
          '[Teacher Name] | [Date]',
        ],
        speakerNotes: 'Welcome students. Today we explore how this town contributed to American independence.',
        suggestedVisual: 'Historical image or map of the town',
      },
      {
        slideNumber: 2,
        title: 'Essential Questions',
        bulletPoints: [
          `Why did events in ${town.name} matter?`,
          'Whose stories do we hear? Whose are missing?',
          'How do places connect in history?',
        ],
        speakerNotes: 'Frame these questions as guides for our investigation today.',
        suggestedVisual: 'Question marks or thinking imagery',
      },
      {
        slideNumber: 3,
        title: 'Setting the Scene',
        bulletPoints: [
          'Geographic location',
          'Population and economy in 1770s',
          'Relationship to Boston and other towns',
        ],
        speakerNotes: town.whyMatters.slice(0, 200),
        suggestedVisual: 'Period map showing the region',
      },
      {
        slideNumber: 4,
        title: 'Key Events',
        bulletPoints: town.events.slice(0, 4).map(e => e.name),
        speakerNotes: 'Walk through each event chronologically, emphasizing cause and effect.',
        suggestedVisual: 'Timeline or event images',
      },
      {
        slideNumber: 5,
        title: 'Primary Source Analysis',
        bulletPoints: [
          'What is this source?',
          'Who created it and why?',
          'What can we learn from it?',
        ],
        speakerNotes: 'Model source analysis before students work independently.',
        suggestedVisual: 'Image of primary source document',
      },
      {
        slideNumber: 6,
        title: 'Connections',
        bulletPoints: [
          'How this town connected to others',
          'Shared people and events',
          'Part of a larger story',
        ],
        speakerNotes: 'Emphasize that the Revolution was a networked effort, not isolated events.',
        suggestedVisual: 'Network diagram or connecting map',
      },
      {
        slideNumber: 7,
        title: 'Reflection',
        bulletPoints: [
          'What surprised you?',
          'What questions remain?',
          'How does this change your understanding?',
        ],
        speakerNotes: 'Allow time for student reflection and discussion.',
        suggestedVisual: 'Reflection prompt imagery',
      },
    ],
  };
}

/**
 * Track teacher download analytics
 */
export async function trackTeacherDownload(
  townId: string,
  orgId?: string
): Promise<void> {
  await prisma.analyticsEvent.create({
    data: {
      townId,
      orgId,
      eventType: 'TEACHER_DOWNLOAD',
      metadata: {
        downloadedAt: new Date().toISOString(),
      },
    },
  });
}
