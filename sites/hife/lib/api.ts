// Direct Prisma queries — no Fastify API calls needed on Vercel
import prisma from "@/lib/prisma";

// ── Score tier helper ─────────────────────────────────────────────────────
function getScoreTier(score: number): string {
  if (score >= 90) return "Exceptional";
  if (score >= 75) return "Excellent";
  if (score >= 60) return "Notable";
  if (score >= 40) return "Relevant";
  return "Emerging";
}

// ── TypeScript interfaces (unchanged) ────────────────────────────────────

export interface TownGeo {
  lat: number;
  lng: number;
}

export interface TownEvent {
  id: string;
  slug?: string;
  name: string;
  startDate: string | null;
  datePrecision: string;
  summary: string;
  significanceWeight: number;
  peopleCount: number;
  themesCount: number;
}

export interface TownStory {
  id: string;
  slug: string | null;
  title: string;
  storyType: "HISTORICAL_VOICE" | "MODERN_VOICE";
  verificationStatus: "VERIFIED" | "ORAL_TRADITION" | "ANECDOTAL" | "UNVERIFIED";
  subjectPersonName: string | null;
  narratorName: string | null;
  narratorRole: string | null;
  excerpt: string;
  tags: string[];
}

export interface LinkedTown {
  townId: string;
  townName: string;
  townSlug: string;
  linkType: string;
  reason: string;
  weight: number;
}

export interface TownTheme {
  id: string;
  name: string;
  relevanceNote: string | null;
}

export interface TownRoute {
  id: string;
  name: string;
  stopOrder: number;
  totalStops: number;
}

export interface TownPlace {
  id: string;
  slug?: string;
  name: string;
  placeType: "BATTLEFIELD" | "HISTORIC_HOUSE" | "MONUMENT" | "MUSEUM" | "CEMETERY" | "CHURCH" | "GOVERNMENT" | "TAVERN" | "LANDMARK" | "TRAIL";
  description: string;
  lat: number | null;
  lng: number | null;
  address: string | null;
  hours: string | null;
  admission: string | null;
  website: string | null;
  phone: string | null;
  accessibilityNotes: string | null;
  parkingNotes: string | null;
  amenities: string[];
  historicalNote: string | null;
  featured: boolean;
}

export interface ScoreBreakdown {
  historical: { score: number; subfactors: Record<string, unknown> };
  preservation: { score: number; subfactors: Record<string, unknown> };
  accessibility: { score: number; subfactors: Record<string, unknown> };
  interpretation: { score: number; subfactors: Record<string, unknown> };
  interconnection: { score: number; subfactors: Record<string, unknown> };
  stories: { score: number; subfactors: Record<string, unknown> };
  sources: { score: number; subfactors: Record<string, unknown> };
  hints?: Array<{
    category: string;
    direction: string;
    suggestion: string;
    potentialImpact: number;
  }>;
}

export interface PlacesTotals {
  total: number;
  featured: number;
  byCategory: Record<string, number>;
}

export interface Town {
  id: string;
  name: string;
  state: string;
  country: string;
  slug: string;
  geo: TownGeo | null;
  heroSummary40: string;
  execSummary150: string;
  whyMatters: string;
  tourismInfo: Record<string, unknown> | null;
  compositeScore: number;
  scoreTier: string;
  scoreBreakdown: ScoreBreakdown | null;
  lastUpdatedAt: string;
  imageUrl: string | null;
  imageCredit: string | null;
  events: TownEvent[];
  stories: TownStory[];
  placesTotals?: PlacesTotals;
  featuredPlaces?: TownPlace[];
  places?: TownPlace[];
  linkedTowns: LinkedTown[];
  themes: TownTheme[];
  routes: TownRoute[];
  recentChanges: Array<{
    id: string;
    createdAt: string;
    summary: string;
    publicNotes: string | null;
  }>;
  footnote?: string | null;
}

export interface PlacesResponse {
  town: {
    id: string;
    slug: string;
    name: string;
  };
  totals: PlacesTotals;
  featured: TownPlace[];
  placesByCategory: Record<string, TownPlace[]>;
}

export interface RankedTown {
  id: string;
  name: string;
  state: string;
  slug: string;
  heroSummary40: string;
  execSummary150: string;
  compositeScore: number;
  scoreTier: string;
}

export interface OnThisDayEvent {
  id: string;
  name: string;
  slug: string | null;
  summary: string;
  startDate: string;
  year: number;
  town: { name: string; state: string; slug: string };
  themes: { id: string; name: string }[];
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
  meta?: {
    timestamp: string;
    [key: string]: unknown;
  };
}

// Compare types
export interface TownSummary {
  id: string;
  name: string;
  state: string;
  slug: string;
  heroSummary40: string;
  execSummary150: string;
  compositeScore: number;
  scoreTier: string;
}

export interface SharedEvent {
  id: string;
  name: string;
  startDate: string | null;
  datePrecision: string;
  summary: string;
  significanceWeight: number;
  peopleCount: number;
  themesCount: number;
}

export interface SharedPerson {
  id: string;
  name: string;
  roles: string[];
  connectionA: string;
  connectionB: string;
}

export interface SharedTheme {
  id: string;
  name: string;
  relevanceA: string | null;
  relevanceB: string | null;
}

export interface SharedRoute {
  id: string;
  name: string;
  stopOrderA: number;
  stopOrderB: number;
}

export interface ItineraryStop {
  order: number;
  townId: string;
  townName: string;
  suggestedDuration: string;
  highlights: string[];
}

export interface CompareResponse {
  townA: TownSummary;
  townB: TownSummary;
  comparison: {
    sharedEvents: SharedEvent[];
    sharedPeople: SharedPerson[];
    sharedThemes: SharedTheme[];
    sharedRoutes: SharedRoute[];
    directLink: LinkedTown | null;
  };
  suggestedItinerary: {
    totalMiles: number | null;
    stops: ItineraryStop[];
    notes: string;
  };
}

// People types
export interface TownPerson {
  id: string;
  slug?: string;
  name: string;
  roles: string[];
  bioShort: string;
  bioLong: string | null;
  birthYear: number | null;
  deathYear: number | null;
  verificationStatus: string;
  imageUrl?: string | null;
}

export interface TownPeopleResponse {
  town: { id: string; slug: string; name: string };
  people: TownPerson[];
  count: number;
}

// Story detail type (full text, not truncated)
export interface TownStoryDetail {
  id: string;
  title: string;
  storyType: "HISTORICAL_VOICE" | "MODERN_VOICE";
  verificationStatus: "VERIFIED" | "ORAL_TRADITION" | "ANECDOTAL" | "UNVERIFIED";
  subjectPersonName: string | null;
  narratorName: string | null;
  narratorRole: string | null;
  textVersion: string;
  tags: string[];
  themes: Array<{ id: string; name: string }>;
}

// Source types
export interface TownSource {
  id: string;
  type: string;
  title: string;
  publisherOrHolder: string;
  url: string | null;
  credibilityTier: string;
  notes: string | null;
}

export interface TownSourcesResponse {
  town: { id: string; slug: string; name: string };
  totalCount: number;
  sources: TownSource[];
  lastUpdated: string | null;
}

// Changelog types
export interface ChangelogEntry {
  id: string;
  createdAt: string;
  title: string | null;
  summary: string;
  publicNotes: string | null;
  category: string | null;
  town: { id: string; slug: string; name: string } | null;
}

export interface ChangelogResponse {
  entries: ChangelogEntry[];
  total: number;
}

// Cluster types
export interface ClusterSummary {
  id: string;
  slug: string;
  name: string;
  state: string;
  theme: string;
  hubTown: { id: string; slug: string; name: string; state: string } | null;
  townCount: number;
}

export interface ClusterTownEntry {
  id: string;
  slug: string;
  name: string;
  state: string;
  heroSummary40: string;
  execSummary150: string;
  role: "HUB" | "CORE" | "SUPPORTING";
  sortOrder: number;
}

export interface ClusterBridgeEntry {
  id: string;
  label: string;
  rationale: string;
  direction: "outgoing" | "incoming";
  cluster: { id: string; slug: string; name: string; state: string; theme: string };
}

export interface ClusterDetail {
  id: string;
  slug: string;
  name: string;
  state: string;
  theme: string;
  summary: string;
  hubTown: {
    id: string;
    slug: string;
    name: string;
    state: string;
    heroSummary40: string;
    execSummary150: string;
    compositeScore: number;
  } | null;
  towns: ClusterTownEntry[];
  bridges: ClusterBridgeEntry[];
}

// Entity detail types
export interface TownPersonDetail {
  id: string;
  name: string;
  roles: string[];
  bioShort: string;
  bioLong: string | null;
  birthYear: number | null;
  deathYear: number | null;
  verificationStatus: string;
  imageUrl: string | null;
  imageCredit: string | null;
  events: Array<{
    id: string;
    name: string;
    startDate: string | null;
    datePrecision: string;
    summary: string;
    roleInEvent: string | null;
    themes: Array<{ id: string; name: string }>;
  }>;
  stories: Array<{
    id: string;
    title: string;
    storyType: string;
    verificationStatus: string;
    excerpt: string;
    tags: string[];
  }>;
}

export interface TownPlaceDetail {
  id: string;
  name: string;
  slug: string | null;
  placeType: string;
  description: string;
  lat: number | null;
  lng: number | null;
  address: string | null;
  hours: string | null;
  admission: string | null;
  website: string | null;
  phone: string | null;
  accessibilityNotes: string | null;
  parkingNotes: string | null;
  amenities: string[];
  historicalNote: string | null;
  featured: boolean;
  connectedEvents: Array<{
    id: string;
    name: string;
    slug: string | null;
    startDate: string | null;
    summary: string;
    people: Array<{
      id: string;
      name: string;
      roleInEvent: string | null;
    }>;
  }>;
}

export interface TownEventDetail {
  id: string;
  name: string;
  slug: string | null;
  startDate: string | null;
  endDate: string | null;
  datePrecision: string;
  summary: string;
  significanceWeight: number;
  people: Array<{
    id: string;
    name: string;
    roles: string[];
    bioShort: string;
    roleInEvent: string | null;
  }>;
  themes: Array<{ id: string; name: string }>;
  imageUrl: string | null;
  imageCredit: string | null;
  videoId: string | null;
  videoSource: string | null;
}

export interface TeacherModuleResponse {
  town: { id: string; name: string; state: string; slug: string };
  overview: {
    title: string;
    gradeRange: string;
    estimatedDuration: string;
    summary: string;
  };
  lessonPlan: Record<string, unknown>;
  primarySources: Array<{
    id: string;
    title: string;
    type: string;
    sourceInfo: string;
    url: string | null;
    analysisPrompts: string[];
    credibilityTier: string;
    teacherNarrative?: string;
  }>;
  comparativeAssignment: Record<string, unknown>;
  handouts: Array<{
    title: string;
    type: string;
    description: string;
    content: string;
  }>;
  quiz: {
    title: string;
    instructions: string;
    questions: Array<{
      id: number;
      type: string;
      question: string;
      options?: string[];
      correctAnswer: string;
      explanation: string;
    }>;
  };
  slideOutline: Record<string, unknown>;
  standards: Record<string, unknown>;
  relatedTowns: Array<{
    townId: string;
    townSlug: string;
    townName: string;
    connectionType: string;
    teachingConnection: string;
  }>;
  meta?: {
    contentSource: "curated" | "generated";
  };
}

// ── Teacher content helpers ───────────────────────────────────────────────

function generateSourceAnalysisPrompts(sourceType: string): string[] {
  const basePrompts = [
    "Who created this source and why?",
    "When was this source created?",
    "What perspective does this source represent?",
  ];
  const typeSpecific: Record<string, string[]> = {
    PRIMARY: [
      "What was happening when this was written?",
      "How might the author's position affect their account?",
    ],
    SECONDARY: [
      "What primary sources does this draw from?",
      "What interpretation does the author offer?",
    ],
    INSTITUTIONAL: [
      "What is the institution's mission?",
      "How does that mission shape the presentation?",
    ],
  };
  return [...basePrompts, ...(typeSpecific[sourceType] || [])];
}

function generateLessonPlan(
  town: { name: string; whyMatters: string; events: Array<{ name: string }> },
  people: Array<{ name: string }>
): Record<string, unknown> {
  return {
    objectives: [
      `Students will explain the significance of ${town.name} in the American Revolution`,
      "Students will analyze primary sources from the Revolutionary period",
      "Students will compare perspectives of different historical actors",
      "Students will connect local history to broader Revolutionary themes",
    ],
    essentialQuestions: [
      `Why did events in ${town.name} matter to the Revolution?`,
      "How do different sources tell different stories about the same events?",
      "Whose voices are missing from the historical record?",
    ],
    materials: [
      "Primary source packet (provided)",
      "Graphic organizer handout",
      "Map of Revolutionary-era region",
      "Timeline template",
    ],
    warmUp: {
      duration: "5-10 minutes",
      activity: `Show an image or map of ${town.name} today. Ask: "What do you know about this place? What questions do you have about its history?"`,
    },
    directInstruction: {
      duration: "15-20 minutes",
      content: [
        `Introduction to ${town.name}'s role in the Revolution`,
        "Key events and their significance",
        `Notable figures: ${people.slice(0, 3).map((p) => p.name).join(", ")}`,
        "Connection to broader Revolutionary narrative",
      ],
    },
    guidedPractice: {
      duration: "20-25 minutes",
      activities: [
        "Primary source analysis in small groups",
        "Document-based questions discussion",
        "Timeline construction activity",
      ],
    },
    independentPractice: {
      duration: "15-20 minutes",
      assignment: "Complete graphic organizer comparing perspectives of different historical actors",
    },
    closure: {
      duration: "5-10 minutes",
      activity: 'Exit ticket: "What surprised you most about this history? What questions remain?"',
    },
    differentiation: {
      struggling: "Provide sentence starters, pre-highlighted sources, peer support",
      advanced: "Additional primary sources, independent research extension, comparative essay",
      ell: "Visual supports, bilingual glossary, partner work, simplified source excerpts",
    },
    assessment: "Formative: participation, graphic organizer completion. Summative: quiz, comparative essay option.",
  };
}

function generateHandouts(
  town: { name: string; events: Array<{ name: string; summary: string }> },
  people: Array<{ name: string; bioShort: string }>
): Array<{ title: string; type: string; description: string; content: string }> {
  return [
    {
      title: `${town.name} Event Timeline`,
      type: "timeline",
      description: "Students place key events in chronological order and add details",
      content: `# ${town.name} Revolutionary Timeline\n\nInstructions: Place the following events in order and add one detail about each.\n\n${town.events.slice(0, 5).map((e) => `- [ ] ${e.name}`).join("\n")}\n\n---\n\n| Event | Date | Significance |\n|-------|------|-------------|\n| | | |\n| | | |\n| | | |`,
    },
    {
      title: "Primary Source Analysis",
      type: "graphic_organizer",
      description: "Structured analysis of Revolutionary-era documents",
      content: `# Primary Source Analysis Worksheet\n\n## Source Information\n- Title: _________________\n- Author: _________________\n- Date: _________________\n- Type: _________________\n\n## Observation\nWhat do you notice? (List 3 things)\n1.\n2.\n3.\n\n## Reflection\nWhat do you wonder? (List 2 questions)\n1.\n2.\n\n## Analysis\nWhat does this source tell us about ${town.name} during the Revolution?\n\n_______________________________________________\n\n## Perspective\nWhose voice is represented? Whose might be missing?\n\n_______________________________________________`,
    },
    {
      title: "Key Figures Profile",
      type: "worksheet",
      description: "Research template for Revolutionary figures",
      content: `# Revolutionary Figure Profile\n\n## Basic Information\n- Name: _________________\n- Birth/Death Years: _________________\n- Occupation(s): _________________\n\n## Role in the Revolution\n${people.slice(0, 2).map((p) => `### ${p.name}\n${p.bioShort}\n\nMy questions about this person:\n1.\n2.\n`).join("\n")}\n\n## Reflection\nWhich figure interests you most and why?\n\n_______________________________________________`,
    },
  ];
}

function generateQuiz(town: { name: string; events: Array<{ name: string; summary: string }> }): TeacherModuleResponse["quiz"] {
  return {
    title: `${town.name} in the American Revolution`,
    instructions: "Answer the following questions based on our study of Revolutionary history.",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: `What makes ${town.name} significant in Revolutionary history?`,
        options: [
          "It was the site of important Revolutionary events",
          "It had no connection to the Revolution",
          "It was founded after the Revolution",
          "It was a British stronghold throughout the war",
        ],
        correctAnswer: "A",
        explanation: `${town.name} played a significant role in the American Revolution as evidenced by the events we studied.`,
      },
      {
        id: 2,
        type: "true_false",
        question: "Primary sources are documents or objects created during the time period being studied.",
        correctAnswer: "True",
        explanation: "Primary sources provide firsthand evidence about historical events.",
      },
      {
        id: 3,
        type: "short_answer",
        question: `Name one event that occurred in ${town.name} during the Revolutionary period and explain its significance.`,
        correctAnswer: "[Varies - accept any accurate event with reasonable explanation]",
        explanation: "Students should identify a specific event and connect it to broader Revolutionary themes.",
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "Why is it important to consider multiple perspectives when studying history?",
        options: [
          "Different people experienced events differently",
          "It makes history more confusing",
          "Only one perspective is ever correct",
          "Perspectives don't matter in history",
        ],
        correctAnswer: "A",
        explanation: "Multiple perspectives help us understand the full complexity of historical events.",
      },
      {
        id: 5,
        type: "short_answer",
        question: "Describe one connection between this town and another Revolutionary-era town we discussed.",
        correctAnswer: "[Varies - accept any accurate connection]",
        explanation: "Students should demonstrate understanding of the interconnected nature of Revolutionary events.",
      },
    ],
  };
}

function generateSlideOutline(town: {
  name: string;
  whyMatters: string;
  events: Array<{ name: string; summary: string }>;
}): Record<string, unknown> {
  return {
    title: `${town.name} and the American Revolution`,
    slides: [
      {
        slideNumber: 1,
        title: "Title Slide",
        bulletPoints: [town.name, "The American Revolution", "[Teacher Name] | [Date]"],
        speakerNotes: "Welcome students. Today we explore how this town contributed to American independence.",
        suggestedVisual: "Historical image or map of the town",
      },
      {
        slideNumber: 2,
        title: "Essential Questions",
        bulletPoints: [
          `Why did events in ${town.name} matter?`,
          "Whose stories do we hear? Whose are missing?",
          "How do places connect in history?",
        ],
        speakerNotes: "Frame these questions as guides for our investigation today.",
        suggestedVisual: "Question marks or thinking imagery",
      },
      {
        slideNumber: 3,
        title: "Setting the Scene",
        bulletPoints: [
          "Geographic location",
          "Population and economy in 1770s",
          "Relationship to Boston and other towns",
        ],
        speakerNotes: town.whyMatters.slice(0, 200),
        suggestedVisual: "Period map showing the region",
      },
      {
        slideNumber: 4,
        title: "Key Events",
        bulletPoints: town.events.slice(0, 4).map((e) => e.name),
        speakerNotes: "Walk through each event chronologically, emphasizing cause and effect.",
        suggestedVisual: "Timeline or event images",
      },
      {
        slideNumber: 5,
        title: "Primary Source Analysis",
        bulletPoints: ["What is this source?", "Who created it and why?", "What can we learn from it?"],
        speakerNotes: "Model source analysis before students work independently.",
        suggestedVisual: "Image of primary source document",
      },
      {
        slideNumber: 6,
        title: "Connections",
        bulletPoints: ["How this town connected to others", "Shared people and events", "Part of a larger story"],
        speakerNotes: "Emphasize that the Revolution was a networked effort, not isolated events.",
        suggestedVisual: "Network diagram or connecting map",
      },
      {
        slideNumber: 7,
        title: "Reflection",
        bulletPoints: ["What surprised you?", "What questions remain?", "How does this change your understanding?"],
        speakerNotes: "Allow time for student reflection and discussion.",
        suggestedVisual: "Reflection prompt imagery",
      },
    ],
  };
}

function generateComparativeAssignment(town: {
  name: string;
  outgoingLinks: Array<{ toTown: { id: string; name: string }; reason: string }>;
}): Record<string, unknown> {
  return {
    title: `Connecting ${town.name} to the Revolutionary Network`,
    description: `Research how ${town.name}'s Revolutionary story connects to other towns in the network. Choose one comparison town and create a presentation or essay showing the connections.`,
    compareTowns: town.outgoingLinks.slice(0, 3).map((link) => ({
      townId: link.toTown.id,
      townName: link.toTown.name,
      comparisonPoints: [
        "Shared events or people",
        "Geographic relationship",
        "How events in one place affected the other",
        link.reason,
      ],
    })),
    rubric: [
      {
        criteria: "Historical Accuracy",
        excellent: "All facts verified, sources cited correctly",
        proficient: "Most facts accurate, sources generally cited",
        developing: "Some factual errors, incomplete sourcing",
      },
      {
        criteria: "Analysis Depth",
        excellent: "Insightful connections, multiple perspectives considered",
        proficient: "Clear connections made, some analysis",
        developing: "Surface-level connections only",
      },
      {
        criteria: "Use of Evidence",
        excellent: "Multiple primary sources integrated effectively",
        proficient: "Some primary sources used appropriately",
        developing: "Limited or no primary source use",
      },
    ],
  };
}

// ── Main data functions ───────────────────────────────────────────────────

export async function getTown(slug: string): Promise<Town | null> {
  try {
    const town = await prisma.town.findUnique({
      where: { slug },
      include: {
        events: {
          include: {
            eventPeople: { select: { id: true } },
            eventThemes: { select: { id: true } },
          },
          orderBy: { significanceWeight: "desc" },
          take: 20,
        },
        stories: {
          include: {
            subjectPerson: { select: { name: true } },
          },
          take: 10,
        },
        places: {
          orderBy: [{ featured: "desc" }, { displayOrder: "asc" }],
        },
        outgoingLinks: {
          include: {
            toTown: { select: { id: true, name: true, slug: true } },
          },
          orderBy: { weight: "desc" },
        },
        townThemes: {
          include: { theme: true },
        },
        routeStops: {
          include: {
            route: {
              include: { stops: { select: { id: true } } },
            },
          },
        },
        changeLogEntries: {
          orderBy: { createdAt: "desc" },
          take: 5,
          select: { id: true, createdAt: true, summary: true, publicNotes: true },
        },
      },
    });

    if (!town) return null;

    // Transform places
    const byCategory: Record<string, number> = {};
    const featuredPlaces: TownPlace[] = [];
    for (const p of town.places) {
      byCategory[p.placeType] = (byCategory[p.placeType] || 0) + 1;
      if (p.featured && featuredPlaces.length < 6) {
        featuredPlaces.push({
          id: p.id,
          slug: p.slug ?? undefined,
          name: p.name,
          placeType: p.placeType as TownPlace["placeType"],
          description: p.description,
          lat: p.lat,
          lng: p.lng,
          address: p.address,
          hours: p.hours,
          admission: p.admission,
          website: p.website,
          phone: p.phone,
          accessibilityNotes: p.accessibilityNotes,
          parkingNotes: p.parkingNotes,
          amenities: p.amenities,
          historicalNote: p.historicalNote,
          featured: p.featured,
        });
      }
    }

    return {
      id: town.id,
      name: town.name,
      state: town.state,
      country: town.country,
      slug: town.slug,
      geo: town.lat && town.lng ? { lat: town.lat, lng: town.lng } : null,
      heroSummary40: town.heroSummary40,
      execSummary150: town.execSummary150,
      whyMatters: town.whyMatters,
      tourismInfo: town.tourismInfo as Record<string, unknown> | null,
      compositeScore: town.compositeScore,
      scoreTier: getScoreTier(town.compositeScore),
      scoreBreakdown: town.scoreBreakdown as ScoreBreakdown | null,
      lastUpdatedAt: town.lastUpdatedAt.toISOString(),
      imageUrl: town.imageUrl ?? null,
      imageCredit: town.imageCredit ?? null,
      events: town.events.map((e) => ({
        id: e.id,
        slug: e.slug ?? undefined,
        name: e.name,
        startDate: e.startDate?.toISOString() ?? null,
        datePrecision: e.datePrecision as string,
        summary: e.summary,
        significanceWeight: e.significanceWeight,
        peopleCount: e.eventPeople.length,
        themesCount: e.eventThemes.length,
      })),
      stories: town.stories.map((s) => ({
        id: s.id,
        slug: s.slug ?? null,
        title: s.title,
        storyType: s.storyType as TownStory["storyType"],
        verificationStatus: s.verificationStatus as TownStory["verificationStatus"],
        subjectPersonName: s.subjectPerson?.name ?? null,
        narratorName: s.narratorName,
        narratorRole: s.narratorRole,
        excerpt: s.textVersion.slice(0, 200) + (s.textVersion.length > 200 ? "..." : ""),
        tags: s.tags,
      })),
      placesTotals: {
        total: town.places.length,
        featured: town.places.filter((p) => p.featured).length,
        byCategory,
      },
      featuredPlaces,
      linkedTowns: town.outgoingLinks.map((l) => ({
        townId: l.toTown.id,
        townName: l.toTown.name,
        townSlug: l.toTown.slug,
        linkType: l.linkType as string,
        reason: l.reason,
        weight: l.weight,
      })),
      themes: town.townThemes.map((tt) => ({
        id: tt.theme.id,
        name: tt.theme.name,
        relevanceNote: tt.relevanceNote,
      })),
      routes: town.routeStops.map((rs) => ({
        id: rs.route.id,
        name: rs.route.name,
        stopOrder: rs.stopOrder,
        totalStops: rs.route.stops.length,
      })),
      recentChanges: town.changeLogEntries.map((c) => ({
        id: c.id,
        createdAt: c.createdAt.toISOString(),
        summary: c.summary,
        publicNotes: c.publicNotes,
      })),
      footnote: town.footnote ?? null,
    };
  } catch (error) {
    console.error("Error fetching town:", error);
    return null;
  }
}

export async function getRankings(options?: {
  limit?: number;
  state?: string;
}): Promise<RankedTown[]> {
  try {
    const { limit = 100, state } = options ?? {};

    const towns = await prisma.town.findMany({
      where: state ? { state } : undefined,
      orderBy: { compositeScore: "desc" },
      take: limit,
      select: {
        id: true,
        name: true,
        state: true,
        slug: true,
        heroSummary40: true,
        execSummary150: true,
        compositeScore: true,
      },
    });

    return towns.map((town) => ({
      ...town,
      scoreTier: getScoreTier(town.compositeScore),
    }));
  } catch (error) {
    console.error("Error fetching towns:", error);
    return [];
  }
}

export interface OnThisDayResult {
  events: OnThisDayEvent[];
  isFallback: boolean;
}

function nearbyDates(month: number, day: number, windowDays = 7): Array<[number, number]> {
  const pairs: Array<[number, number]> = [];
  const daysInMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let offset = -windowDays; offset <= windowDays; offset++) {
    if (offset === 0) continue;
    let m = month;
    let d = day + offset;
    if (d < 1) {
      m = m === 1 ? 12 : m - 1;
      d += daysInMonth[m];
    } else if (d > daysInMonth[m]) {
      d -= daysInMonth[m];
      m = m === 12 ? 1 : m + 1;
    }
    pairs.push([m, d]);
  }
  return pairs;
}

export async function getOnThisDay(month: number, day: number): Promise<OnThisDayResult> {
  try {
    const events = await prisma.event.findMany({
      where: { startDate: { not: null } },
      select: {
        id: true,
        name: true,
        slug: true,
        summary: true,
        startDate: true,
        significanceWeight: true,
        town: { select: { name: true, state: true, slug: true } },
        eventThemes: { include: { theme: { select: { id: true, name: true } } } },
      },
      orderBy: { significanceWeight: "desc" },
    });

    const toResult = (e: typeof events[number]): OnThisDayEvent => ({
      id: e.id,
      name: e.name,
      slug: e.slug,
      summary: e.summary ?? "",
      startDate: e.startDate!.toISOString(),
      year: new Date(e.startDate!).getUTCFullYear(),
      town: e.town,
      themes: e.eventThemes.map((et) => ({ id: et.theme.id, name: et.theme.name })),
    });

    const exact = events.filter((e) => {
      const d = new Date(e.startDate!);
      return d.getUTCMonth() + 1 === month && d.getUTCDate() === day;
    });

    if (exact.length > 0) {
      return { events: exact.map(toResult), isFallback: false };
    }

    const nearby = nearbyDates(month, day);
    const fallback = events
      .filter((e) => {
        const d = new Date(e.startDate!);
        const em = d.getUTCMonth() + 1;
        const ed = d.getUTCDate();
        return nearby.some(([nm, nd]) => nm === em && nd === ed);
      })
      .slice(0, 6);

    return { events: fallback.map(toResult), isFallback: true };
  } catch (error) {
    console.error("Error fetching on-this-day events:", error);
    return { events: [], isFallback: false };
  }
}

export async function getTeacherModule(slug: string): Promise<TeacherModuleResponse | null> {
  try {
    const town = await prisma.town.findUnique({
      where: { slug },
      include: {
        lessonPlans: {
          where: { published: true },
          orderBy: { displayOrder: "asc" },
        },
        primarySourcePackets: {
          where: { published: true },
          orderBy: { displayOrder: "asc" },
        },
        teacherWorksheets: {
          where: { published: true },
          orderBy: { displayOrder: "asc" },
        },
        outgoingLinks: {
          include: { toTown: true },
          orderBy: { weight: "desc" },
          take: 3,
        },
        sourceTowns: {
          include: { source: true },
          take: 8,
        },
        events: {
          include: { eventPeople: { include: { person: true } } },
          orderBy: { significanceWeight: "desc" },
          take: 5,
        },
      },
    });

    if (!town) return null;

    // Curated path: has lesson plans
    if (town.lessonPlans.length > 0) {
      const firstPlan = town.lessonPlans[0];

      const primarySources =
        town.primarySourcePackets.length > 0
          ? town.primarySourcePackets.map((psp) => ({
              id: psp.id,
              title: psp.title,
              type: psp.sourceType,
              sourceInfo: psp.publisherOrHolder,
              url: psp.url,
              analysisPrompts: psp.analysisPrompts,
              credibilityTier: psp.credibilityTier,
              teacherNarrative: psp.teacherNarrative || undefined,
            }))
          : town.sourceTowns.slice(0, 5).map((st) => ({
              id: st.source.id,
              title: st.source.title,
              type: st.source.type as string,
              sourceInfo: st.source.publisherOrHolder,
              url: st.source.url,
              analysisPrompts: generateSourceAnalysisPrompts(st.source.type as string),
              credibilityTier: st.source.credibilityTier as string,
            }));

      const eventPeople = Array.from(
        new Map(
          town.events.flatMap((e) => e.eventPeople.map((ep) => [ep.person.name, ep.person]))
        ).values()
      );

      let handouts: TeacherModuleResponse["handouts"] =
        town.teacherWorksheets.length > 0
          ? []
          : generateHandouts(
              { name: town.name, events: town.events.map((e) => ({ name: e.name, summary: e.summary })) },
              eventPeople.map((p) => ({ name: p.name, bioShort: p.bioShort }))
            );

      let quiz: TeacherModuleResponse["quiz"] =
        town.teacherWorksheets.length > 0
          ? {
              title: `${town.name} in the American Revolution`,
              instructions: "Answer the following questions based on our study of Revolutionary history.",
              questions: [],
            }
          : generateQuiz({ name: town.name, events: town.events.map((e) => ({ name: e.name, summary: e.summary })) });

      for (const ws of town.teacherWorksheets) {
        if (ws.worksheetType === "QUIZ" && ws.quizData) {
          quiz = ws.quizData as TeacherModuleResponse["quiz"];
        } else {
          const typeMap: Record<string, string> = {
            TIMELINE: "timeline",
            GRAPHIC_ORGANIZER: "graphic_organizer",
            WORKSHEET: "worksheet",
            READING: "reading",
          };
          handouts.push({
            title: ws.title,
            type: typeMap[ws.worksheetType] || "worksheet",
            description: ws.description,
            content: ws.content,
          });
        }
      }

      return {
        town: { id: town.id, name: town.name, state: town.state, slug: town.slug },
        overview: {
          title: firstPlan.title,
          gradeRange: firstPlan.gradeRange,
          estimatedDuration: firstPlan.estimatedDuration,
          summary: firstPlan.summary,
        },
        lessonPlan: (firstPlan.lessonData as Record<string, unknown>) ?? {},
        primarySources,
        comparativeAssignment: (firstPlan.comparativeAssignment as Record<string, unknown>) ?? generateComparativeAssignment({ name: town.name, outgoingLinks: town.outgoingLinks.map((l) => ({ toTown: l.toTown, reason: l.reason })) }),
        handouts,
        quiz,
        slideOutline: (firstPlan.slideOutline as Record<string, unknown>) ?? generateSlideOutline({ name: town.name, whyMatters: town.whyMatters, events: town.events.map((e) => ({ name: e.name, summary: e.summary })) }),
        standards: (firstPlan.standards as Record<string, unknown>) ?? {
          note: "Standards alignment should be verified by educators for their specific state/district requirements.",
          commonCore: [],
          c3Framework: [],
          stateStandards: { placeholder: "[STATE STANDARDS TO BE ADDED]", suggestedAlignment: "" },
        },
        relatedTowns: town.outgoingLinks.map((link) => ({
          townId: link.toTown.id,
          townSlug: link.toTown.slug,
          townName: link.toTown.name,
          connectionType: link.linkType as string,
          teachingConnection: link.reason,
        })),
        meta: { contentSource: "curated" },
      };
    }

    // Generative fallback
    const fullTown = await prisma.town.findUnique({
      where: { slug },
      include: {
        events: {
          include: {
            eventPeople: { include: { person: true } },
            sourceEvents: { include: { source: true } },
          },
          orderBy: { significanceWeight: "desc" },
        },
        stories: {
          include: { subjectPerson: true },
          where: { verificationStatus: "VERIFIED" },
        },
        outgoingLinks: {
          include: { toTown: true },
          orderBy: { weight: "desc" },
          take: 3,
        },
        sourceTowns: {
          include: { source: true },
          where: { source: { type: "PRIMARY" } },
        },
      },
    });

    if (!fullTown) return null;

    const primarySources: TeacherModuleResponse["primarySources"] = [];
    for (const st of fullTown.sourceTowns) {
      primarySources.push({
        id: st.source.id,
        title: st.source.title,
        type: st.source.type as string,
        sourceInfo: st.source.publisherOrHolder,
        url: st.source.url,
        analysisPrompts: generateSourceAnalysisPrompts(st.source.type as string),
        credibilityTier: st.source.credibilityTier as string,
      });
    }
    for (const event of fullTown.events) {
      for (const se of event.sourceEvents) {
        if (se.source.type === "PRIMARY" && !primarySources.find((s) => s.id === se.source.id)) {
          primarySources.push({
            id: se.source.id,
            title: se.source.title,
            type: se.source.type as string,
            sourceInfo: se.source.publisherOrHolder,
            url: se.source.url,
            analysisPrompts: generateSourceAnalysisPrompts(se.source.type as string),
            credibilityTier: se.source.credibilityTier as string,
          });
        }
      }
    }

    const keyPeople = new Map<string, { id: string; name: string; bioShort: string }>();
    for (const event of fullTown.events) {
      for (const ep of event.eventPeople) {
        if (!keyPeople.has(ep.person.id)) {
          keyPeople.set(ep.person.id, { id: ep.person.id, name: ep.person.name, bioShort: ep.person.bioShort });
        }
      }
    }
    const keyPeopleArr = Array.from(keyPeople.values());

    const townEvents = fullTown.events.map((e) => ({ name: e.name, summary: e.summary }));

    return {
      town: { id: fullTown.id, name: fullTown.name, state: fullTown.state, slug: fullTown.slug },
      overview: {
        title: `The American Revolution in ${fullTown.name}, ${fullTown.state}`,
        gradeRange: "5-12 (adaptable)",
        estimatedDuration: "2-3 class periods",
        summary: fullTown.whyMatters,
      },
      lessonPlan: generateLessonPlan({ name: fullTown.name, whyMatters: fullTown.whyMatters, events: townEvents }, keyPeopleArr),
      primarySources: primarySources.slice(0, 5),
      comparativeAssignment: generateComparativeAssignment({
        name: fullTown.name,
        outgoingLinks: fullTown.outgoingLinks.map((l) => ({ toTown: l.toTown, reason: l.reason })),
      }),
      handouts: generateHandouts({ name: fullTown.name, events: townEvents }, keyPeopleArr),
      quiz: generateQuiz({ name: fullTown.name, events: townEvents }),
      slideOutline: generateSlideOutline({ name: fullTown.name, whyMatters: fullTown.whyMatters, events: townEvents }),
      standards: {
        note: "Standards alignment should be verified by educators for their specific state/district requirements.",
        commonCore: [
          "CCSS.ELA-LITERACY.RH.6-8.1: Cite textual evidence",
          "CCSS.ELA-LITERACY.RH.6-8.2: Determine central ideas",
          "CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information",
        ],
        c3Framework: [
          "D2.His.1: Evaluate historical events from multiple perspectives",
          "D2.His.3: Use questions generated about individuals and groups",
          "D2.Geo.2: Use maps, satellite images, and other representations",
        ],
        stateStandards: {
          placeholder: "[STATE STANDARDS TO BE ADDED]",
          suggestedAlignment: "Align with state history standards for American Revolution period",
        },
      },
      relatedTowns: fullTown.outgoingLinks.map((link) => ({
        townId: link.toTown.id,
        townSlug: link.toTown.slug,
        townName: link.toTown.name,
        connectionType: link.linkType as string,
        teachingConnection: link.reason,
      })),
      meta: { contentSource: "generated" },
    };
  } catch (error) {
    console.error("Error fetching teacher module:", error);
    return null;
  }
}

export async function compareTeacherModules(
  slugA: string,
  slugB: string
): Promise<{
  townA: TeacherModuleResponse;
  townB: TeacherModuleResponse;
  comparison: {
    sharedSourceTypes: string[];
    suggestedAssignment: {
      title: string;
      description: string;
      guideQuestions: string[];
    };
  };
} | null> {
  try {
    const [moduleA, moduleB] = await Promise.all([
      getTeacherModule(slugA),
      getTeacherModule(slugB),
    ]);

    if (!moduleA || !moduleB) return null;

    const typesA = new Set(moduleA.primarySources.map((s) => s.type));
    const typesB = new Set(moduleB.primarySources.map((s) => s.type));
    const sharedSourceTypes = [...typesA].filter((t) => typesB.has(t));

    return {
      townA: moduleA,
      townB: moduleB,
      comparison: {
        sharedSourceTypes,
        suggestedAssignment: {
          title: `Comparing ${moduleA.town.name} and ${moduleB.town.name}`,
          description: `Analyze the similarities and differences between these two Revolutionary towns.`,
          guideQuestions: [
            `How did ${moduleA.town.name} and ${moduleB.town.name} each contribute to the Revolution?`,
            "What types of primary sources survived from each location?",
            "What connections existed between these two towns?",
          ],
        },
      },
    };
  } catch (error) {
    console.error("Error comparing teacher modules:", error);
    return null;
  }
}

export async function compareTowns(
  slugA: string,
  slugB: string
): Promise<CompareResponse | null> {
  try {
    const [townA, townB] = await Promise.all([
      prisma.town.findUnique({
        where: { slug: slugA },
        include: {
          events: {
            include: {
              eventPeople: { include: { person: true } },
              eventThemes: { include: { theme: true } },
            },
          },
          townThemes: { include: { theme: true } },
          routeStops: { include: { route: true } },
          townPeople: { include: { person: true } },
          outgoingLinks: { include: { toTown: true } },
        },
      }),
      prisma.town.findUnique({
        where: { slug: slugB },
        include: {
          events: {
            include: {
              eventPeople: { include: { person: true } },
              eventThemes: { include: { theme: true } },
            },
          },
          townThemes: { include: { theme: true } },
          routeStops: { include: { route: true } },
          townPeople: { include: { person: true } },
          outgoingLinks: { include: { toTown: true } },
        },
      }),
    ]);

    if (!townA || !townB) return null;

    const summaryA: TownSummary = {
      id: townA.id,
      name: townA.name,
      state: townA.state,
      slug: townA.slug,
      heroSummary40: townA.heroSummary40,
      execSummary150: townA.execSummary150,
      compositeScore: townA.compositeScore,
      scoreTier: getScoreTier(townA.compositeScore),
    };

    const summaryB: TownSummary = {
      id: townB.id,
      name: townB.name,
      state: townB.state,
      slug: townB.slug,
      heroSummary40: townB.heroSummary40,
      execSummary150: townB.execSummary150,
      compositeScore: townB.compositeScore,
      scoreTier: getScoreTier(townB.compositeScore),
    };

    // Shared events by name
    const sharedEvents = townA.events
      .filter((eA) => townB.events.some((eB) => eB.name === eA.name))
      .map((e) => ({
        id: e.id,
        name: e.name,
        startDate: e.startDate?.toISOString() ?? null,
        datePrecision: e.datePrecision as string,
        summary: e.summary,
        significanceWeight: e.significanceWeight,
        peopleCount: e.eventPeople.length,
        themesCount: e.eventThemes.length,
      }));

    // Shared people
    const peopleA = new Map(townA.events.flatMap((e) => e.eventPeople.map((ep) => [ep.person.id, ep.person])));
    const peopleB = new Map(townB.events.flatMap((e) => e.eventPeople.map((ep) => [ep.person.id, ep.person])));
    townA.townPeople.forEach((tp) => peopleA.set(tp.person.id, tp.person));
    townB.townPeople.forEach((tp) => peopleB.set(tp.person.id, tp.person));

    const sharedPeople: SharedPerson[] = [];
    for (const [personId, person] of peopleA) {
      if (peopleB.has(personId)) {
        sharedPeople.push({
          id: person.id,
          name: person.name,
          roles: person.roles,
          connectionA: summaryA.name,
          connectionB: summaryB.name,
        });
      }
    }

    // Shared themes
    const themesA = new Map(townA.townThemes.map((tt) => [tt.theme.id, { theme: tt.theme, relevance: tt.relevanceNote }]));
    const themesB = new Map(townB.townThemes.map((tt) => [tt.theme.id, { theme: tt.theme, relevance: tt.relevanceNote }]));
    const sharedThemes: SharedTheme[] = [];
    for (const [themeId, entryA] of themesA) {
      const entryB = themesB.get(themeId);
      if (entryB) {
        sharedThemes.push({
          id: entryA.theme.id,
          name: entryA.theme.name,
          relevanceA: entryA.relevance,
          relevanceB: entryB.relevance,
        });
      }
    }

    // Shared routes
    const routesA = new Map(townA.routeStops.map((rs) => [rs.route.id, { route: rs.route, stopOrder: rs.stopOrder }]));
    const sharedRoutes: SharedRoute[] = [];
    for (const rs of townB.routeStops) {
      const entryA = routesA.get(rs.route.id);
      if (entryA) {
        sharedRoutes.push({
          id: rs.route.id,
          name: rs.route.name,
          stopOrderA: entryA.stopOrder,
          stopOrderB: rs.stopOrder,
        });
      }
    }

    // Direct link
    const directLinkRaw = townA.outgoingLinks.find((l) => l.toTown.slug === slugB);
    const directLink: LinkedTown | null = directLinkRaw
      ? {
          townId: directLinkRaw.toTown.id,
          townName: directLinkRaw.toTown.name,
          townSlug: directLinkRaw.toTown.slug,
          linkType: directLinkRaw.linkType as string,
          reason: directLinkRaw.reason,
          weight: directLinkRaw.weight,
        }
      : null;

    return {
      townA: summaryA,
      townB: summaryB,
      comparison: { sharedEvents, sharedPeople, sharedThemes, sharedRoutes, directLink },
      suggestedItinerary: {
        totalMiles: null,
        stops: [
          {
            order: 1,
            townId: townA.id,
            townName: townA.name,
            suggestedDuration: "Half day",
            highlights: townA.events.slice(0, 2).map((e) => e.name),
          },
          {
            order: 2,
            townId: townB.id,
            townName: townB.name,
            suggestedDuration: "Half day",
            highlights: townB.events.slice(0, 2).map((e) => e.name),
          },
        ],
        notes: `Visit ${townA.name} and ${townB.name} to experience connected Revolutionary history.`,
      },
    };
  } catch (error) {
    console.error("Error comparing towns:", error);
    return null;
  }
}

export async function getTownPeople(slug: string): Promise<TownPeopleResponse | null> {
  try {
    const town = await prisma.town.findUnique({
      where: { slug },
      select: { id: true, slug: true, name: true },
    });

    if (!town) return null;

    const personSelect = {
      id: true,
      slug: true,
      name: true,
      roles: true,
      bioShort: true,
      bioLong: true,
      birthYear: true,
      deathYear: true,
      verificationStatus: true,
      imageUrl: true,
    } as const;

    const [eventPeople, townPeople] = await Promise.all([
      prisma.eventPerson.findMany({
        where: { event: { townId: town.id } },
        include: { person: { select: personSelect } },
      }),
      prisma.townPerson.findMany({
        where: { townId: town.id },
        include: { person: { select: personSelect } },
      }),
    ]);

    const personMap = new Map<string, typeof eventPeople[0]["person"]>();
    for (const ep of eventPeople) {
      if (!personMap.has(ep.person.id)) personMap.set(ep.person.id, ep.person);
    }
    for (const tp of townPeople) {
      if (!personMap.has(tp.person.id)) personMap.set(tp.person.id, tp.person);
    }

    const people = Array.from(personMap.values()).map((p) => ({
      id: p.id,
      slug: p.slug ?? undefined,
      name: p.name,
      roles: p.roles,
      bioShort: p.bioShort,
      bioLong: p.bioLong,
      birthYear: p.birthYear,
      deathYear: p.deathYear,
      verificationStatus: p.verificationStatus as string,
      imageUrl: p.imageUrl ?? null,
    }));

    return {
      town: { id: town.id, slug: town.slug, name: town.name },
      people,
      count: people.length,
    };
  } catch (error) {
    console.error("Error fetching people:", error);
    return null;
  }
}

export async function getTownStoryDetail(
  slug: string,
  storyId: string
): Promise<TownStoryDetail | null> {
  try {
    const town = await prisma.town.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!town) return null;

    const story = await prisma.story.findFirst({
      where: {
        townId: town.id,
        OR: [{ id: storyId }, { slug: storyId }],
      },
      include: {
        subjectPerson: true,
        storyThemes: { include: { theme: true } },
      },
    });

    if (!story) return null;

    return {
      id: story.id,
      title: story.title,
      storyType: story.storyType as TownStoryDetail["storyType"],
      verificationStatus: story.verificationStatus as TownStoryDetail["verificationStatus"],
      subjectPersonName: story.subjectPerson?.name ?? null,
      narratorName: story.narratorName,
      narratorRole: story.narratorRole,
      textVersion: story.textVersion,
      tags: story.tags,
      themes: story.storyThemes.map((st) => ({ id: st.theme.id, name: st.theme.name })),
    };
  } catch (error) {
    console.error("Error fetching story detail:", error);
    return null;
  }
}

export async function getTownSources(slug: string): Promise<TownSourcesResponse | null> {
  try {
    const town = await prisma.town.findUnique({
      where: { slug },
      select: { id: true, slug: true, name: true },
    });

    if (!town) return null;

    const [sources, lastUpdatedResult] = await Promise.all([
      prisma.source.findMany({
        where: { sourceTowns: { some: { town: { slug } } } },
        select: {
          id: true,
          type: true,
          title: true,
          publisherOrHolder: true,
          url: true,
          credibilityTier: true,
          notes: true,
        },
        orderBy: [{ credibilityTier: "asc" }, { title: "asc" }],
      }),
      prisma.source.aggregate({
        where: { sourceTowns: { some: { town: { slug } } } },
        _max: { updatedAt: true },
      }),
    ]);

    return {
      town: { id: town.id, slug: town.slug, name: town.name },
      totalCount: sources.length,
      sources: sources.map((s) => ({
        id: s.id,
        type: s.type as string,
        title: s.title,
        publisherOrHolder: s.publisherOrHolder,
        url: s.url,
        credibilityTier: s.credibilityTier as string,
        notes: s.notes,
      })),
      lastUpdated: lastUpdatedResult._max.updatedAt?.toISOString() ?? null,
    };
  } catch (error) {
    console.error("Error fetching sources:", error);
    return null;
  }
}

export async function getChangelog(options?: {
  town?: string;
  limit?: number;
  offset?: number;
}): Promise<ChangelogResponse> {
  try {
    const { town, limit = 50, offset = 0 } = options ?? {};
    const where = town ? { town: { slug: town } } : undefined;

    const [entries, total] = await Promise.all([
      prisma.changeLogEntry.findMany({
        where,
        include: { town: { select: { id: true, slug: true, name: true } } },
        orderBy: { createdAt: "desc" },
        take: limit,
        skip: offset,
      }),
      prisma.changeLogEntry.count({ where }),
    ]);

    return {
      entries: entries.map((e) => ({
        id: e.id,
        createdAt: e.createdAt.toISOString(),
        title: e.title ?? null,
        summary: e.summary,
        publicNotes: e.publicNotes,
        category: e.category ?? null,
        town: e.town ? { id: e.town.id, slug: e.town.slug, name: e.town.name } : null,
      })),
      total,
    };
  } catch (error) {
    console.error("Error fetching changelog:", error);
    return { entries: [], total: 0 };
  }
}

export async function getClusters(): Promise<ClusterSummary[]> {
  try {
    const clusters = await prisma.cluster.findMany({
      include: {
        hubTown: { select: { id: true, slug: true, name: true, state: true } },
        clusterTowns: { select: { id: true } },
      },
      orderBy: { name: "asc" },
    });

    return clusters.map((c) => ({
      id: c.id,
      slug: c.slug,
      name: c.name,
      state: c.state,
      theme: c.theme,
      hubTown: c.hubTown
        ? { id: c.hubTown.id, slug: c.hubTown.slug, name: c.hubTown.name, state: c.hubTown.state }
        : null,
      townCount: c.clusterTowns.length,
    }));
  } catch (error) {
    console.error("Error fetching clusters:", error);
    return [];
  }
}

export async function getCluster(slug: string): Promise<ClusterDetail | null> {
  try {
    const cluster = await prisma.cluster.findUnique({
      where: { slug },
      include: {
        hubTown: {
          select: {
            id: true,
            slug: true,
            name: true,
            state: true,
            heroSummary40: true,
            execSummary150: true,
            compositeScore: true,
          },
        },
        clusterTowns: {
          include: {
            town: {
              select: {
                id: true,
                slug: true,
                name: true,
                state: true,
                heroSummary40: true,
                execSummary150: true,
              },
            },
          },
          orderBy: { sortOrder: "asc" },
        },
        bridgesFrom: {
          include: {
            toCluster: { select: { id: true, slug: true, name: true, state: true, theme: true } },
          },
        },
        bridgesTo: {
          include: {
            fromCluster: { select: { id: true, slug: true, name: true, state: true, theme: true } },
          },
        },
      },
    });

    if (!cluster) return null;

    return {
      id: cluster.id,
      slug: cluster.slug,
      name: cluster.name,
      state: cluster.state,
      theme: cluster.theme,
      summary: cluster.summary,
      hubTown: cluster.hubTown ?? null,
      towns: cluster.clusterTowns.map((ct) => ({
        ...ct.town,
        role: ct.role as ClusterTownEntry["role"],
        sortOrder: ct.sortOrder,
      })),
      bridges: [
        ...cluster.bridgesFrom.map((b) => ({
          id: b.id,
          label: b.label,
          rationale: b.rationale,
          direction: "outgoing" as const,
          cluster: b.toCluster,
        })),
        ...cluster.bridgesTo.map((b) => ({
          id: b.id,
          label: b.label,
          rationale: b.rationale,
          direction: "incoming" as const,
          cluster: b.fromCluster,
        })),
      ],
    };
  } catch (error) {
    console.error("Error fetching cluster:", error);
    return null;
  }
}

export async function getTownClusters(
  slug: string
): Promise<{ cluster: { slug: string; name: string }; role: string }[]> {
  try {
    const town = await prisma.town.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!town) return [];

    const memberships = await prisma.clusterTown.findMany({
      where: { townId: town.id },
      include: { cluster: { select: { slug: true, name: true } } },
    });

    return memberships.map((m) => ({
      cluster: { slug: m.cluster.slug, name: m.cluster.name },
      role: m.role as string,
    }));
  } catch (error) {
    return [];
  }
}

export async function getTownPersonDetail(
  slug: string,
  personId: string
): Promise<TownPersonDetail | null> {
  try {
    const town = await prisma.town.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!town) return null;

    const person = await prisma.person.findFirst({
      where: { OR: [{ id: personId }, { slug: personId }] },
      include: {
        eventPeople: {
          where: { event: { townId: town.id } },
          include: {
            event: {
              include: {
                eventThemes: { include: { theme: true } },
              },
            },
          },
        },
        stories: {
          where: { townId: town.id },
          select: {
            id: true,
            title: true,
            storyType: true,
            verificationStatus: true,
            textVersion: true,
            tags: true,
          },
        },
        townPeople: { where: { townId: town.id } },
      },
    });

    if (!person || (person.eventPeople.length === 0 && person.townPeople.length === 0)) return null;

    return {
      id: person.id,
      name: person.name,
      roles: person.roles,
      bioShort: person.bioShort,
      bioLong: person.bioLong,
      birthYear: person.birthYear,
      deathYear: person.deathYear,
      verificationStatus: person.verificationStatus as string,
      imageUrl: person.imageUrl ?? null,
      imageCredit: person.imageCredit ?? null,
      events: person.eventPeople.map((ep) => ({
        id: ep.event.id,
        name: ep.event.name,
        startDate: ep.event.startDate?.toISOString() ?? null,
        datePrecision: ep.event.datePrecision as string,
        summary: ep.event.summary,
        roleInEvent: ep.roleInEvent,
        themes: ep.event.eventThemes.map((et) => ({ id: et.theme.id, name: et.theme.name })),
      })),
      stories: person.stories.map((s) => ({
        id: s.id,
        title: s.title,
        storyType: s.storyType as string,
        verificationStatus: s.verificationStatus as string,
        excerpt: s.textVersion.slice(0, 200) + (s.textVersion.length > 200 ? "..." : ""),
        tags: s.tags,
      })),
    };
  } catch (error) {
    console.error("Error fetching person detail:", error);
    return null;
  }
}

export async function getTownPlaceDetail(
  slug: string,
  placeSlug: string
): Promise<TownPlaceDetail | null> {
  try {
    const town = await prisma.town.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!town) return null;

    const place = await prisma.place.findFirst({
      where: {
        townId: town.id,
        OR: [{ slug: placeSlug }, { id: placeSlug }],
      },
    });

    if (!place) return null;

    const connectedEvents = await prisma.event.findMany({
      where: { townId: town.id },
      include: {
        eventPeople: { include: { person: true } },
      },
      orderBy: { startDate: "asc" },
    });

    return {
      id: place.id,
      name: place.name,
      slug: place.slug,
      placeType: place.placeType as string,
      description: place.description,
      lat: place.lat,
      lng: place.lng,
      address: place.address,
      hours: place.hours,
      admission: place.admission,
      website: place.website,
      phone: place.phone,
      accessibilityNotes: place.accessibilityNotes,
      parkingNotes: place.parkingNotes,
      amenities: place.amenities,
      historicalNote: place.historicalNote,
      featured: place.featured,
      connectedEvents: connectedEvents.map((e) => ({
        id: e.id,
        name: e.name,
        slug: e.slug ?? null,
        startDate: e.startDate?.toISOString() ?? null,
        summary: e.summary,
        people: e.eventPeople.map((ep) => ({
          id: ep.person.id,
          name: ep.person.name,
          roleInEvent: ep.roleInEvent,
        })),
      })),
    };
  } catch (error) {
    console.error("Error fetching place detail:", error);
    return null;
  }
}

export async function getTownEventDetail(
  slug: string,
  eventSlug: string
): Promise<TownEventDetail | null> {
  try {
    const town = await prisma.town.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!town) return null;

    const event = await prisma.event.findFirst({
      where: {
        townId: town.id,
        OR: [{ slug: eventSlug }, { id: eventSlug }],
      },
      include: {
        eventPeople: { include: { person: true } },
        eventThemes: { include: { theme: true } },
      },
    });

    if (!event) return null;

    return {
      id: event.id,
      name: event.name,
      slug: event.slug ?? null,
      startDate: event.startDate?.toISOString() ?? null,
      endDate: event.endDate?.toISOString() ?? null,
      datePrecision: event.datePrecision as string,
      summary: event.summary,
      significanceWeight: event.significanceWeight,
      people: event.eventPeople.map((ep) => ({
        id: ep.person.id,
        name: ep.person.name,
        roles: ep.person.roles,
        bioShort: ep.person.bioShort,
        roleInEvent: ep.roleInEvent,
      })),
      themes: event.eventThemes.map((et) => ({ id: et.theme.id, name: et.theme.name })),
      imageUrl: event.imageUrl ?? null,
      imageCredit: event.imageCredit ?? null,
      videoId: event.videoId ?? null,
      videoSource: event.videoSource ?? null,
    };
  } catch (error) {
    console.error("Error fetching event detail:", error);
    return null;
  }
}

export async function getPlaces(
  slug: string,
  options?: {
    category?: string;
    limit?: number;
    featuredOnly?: boolean;
  }
): Promise<PlacesResponse | null> {
  try {
    const { category, limit, featuredOnly } = options ?? {};

    const town = await prisma.town.findUnique({
      where: { slug },
      select: { id: true, slug: true, name: true },
    });

    if (!town) return null;

    const places = await prisma.place.findMany({
      where: {
        townId: town.id,
        ...(category ? { placeType: category as "BATTLEFIELD" | "HISTORIC_HOUSE" | "MONUMENT" | "MUSEUM" | "CEMETERY" | "CHURCH" | "GOVERNMENT" | "TAVERN" | "LANDMARK" | "TRAIL" } : {}),
        ...(featuredOnly ? { featured: true } : {}),
      },
      orderBy: [{ featured: "desc" }, { displayOrder: "asc" }, { name: "asc" }],
      ...(limit ? { take: limit } : {}),
    });

    const transformPlace = (p: typeof places[0]): TownPlace => ({
      id: p.id,
      slug: p.slug ?? undefined,
      name: p.name,
      placeType: p.placeType as TownPlace["placeType"],
      description: p.description,
      lat: p.lat,
      lng: p.lng,
      address: p.address,
      hours: p.hours,
      admission: p.admission,
      website: p.website,
      phone: p.phone,
      accessibilityNotes: p.accessibilityNotes,
      parkingNotes: p.parkingNotes,
      amenities: p.amenities,
      historicalNote: p.historicalNote,
      featured: p.featured,
    });

    const featured = places.filter((p) => p.featured).map(transformPlace);
    const placesByCategory: Record<string, TownPlace[]> = {};
    const byCategory: Record<string, number> = {};

    for (const place of places) {
      const cat = place.placeType as string;
      if (!placesByCategory[cat]) {
        placesByCategory[cat] = [];
        byCategory[cat] = 0;
      }
      placesByCategory[cat].push(transformPlace(place));
      byCategory[cat]++;
    }

    return {
      town: { id: town.id, slug: town.slug, name: town.name },
      totals: { total: places.length, featured: featured.length, byCategory },
      featured,
      placesByCategory,
    };
  } catch (error) {
    console.error("Error fetching places:", error);
    return null;
  }
}

// ── Map data ─────────────────────────────────────────────────────────────────

export interface MapTown {
  id: string;
  name: string;
  state: string;
  slug: string;
  lat: number | null;
  lng: number | null;
  compositeScore: number;
  scoreTier: string;
  execSummary150: string;
}

export interface MapLink {
  fromSlug: string;
  toSlug: string;
  linkType: string;
  weight: number;
  reason: string;
}

// ── Local / real-world events ─────────────────────────────────────────────

export interface LocalEvent {
  id: string;
  name: string;
  description: string;
  category: string;
  recurrence: string;
  month: number | null;
  day: number | null;
  endDay: number | null;
  dateNote: string | null;
  eventDate: string | null;
  venue: string | null;
  url: string | null;
  admission: string | null;
  featured: boolean;
}

export async function getLocalEvents(slug: string): Promise<LocalEvent[]> {
  try {
    const town = await prisma.town.findUnique({
      where: { slug },
      select: {
        localEvents: {
          orderBy: [
            { featured: "desc" },
            { month: "asc" },
            { day: "asc" },
          ],
        },
      },
    });
    return (town?.localEvents ?? []).map((e) => ({
      ...e,
      eventDate: e.eventDate?.toISOString() ?? null,
    }));
  } catch (error) {
    console.error("Error fetching local events:", error);
    return [];
  }
}

export async function getMapData(): Promise<{ towns: MapTown[]; links: MapLink[] } | null> {
  try {
    const [towns, links] = await Promise.all([
      prisma.town.findMany({
        select: {
          id: true, name: true, state: true, slug: true,
          lat: true, lng: true, compositeScore: true, execSummary150: true,
        },
        orderBy: { compositeScore: "desc" },
      }),
      prisma.townLink.findMany({
        select: {
          fromTown: { select: { slug: true } },
          toTown: { select: { slug: true } },
          linkType: true,
          weight: true,
          reason: true,
        },
      }),
    ]);

    return {
      towns: towns.map((t) => ({
        ...t,
        lat: t.lat ?? null,
        lng: t.lng ?? null,
        scoreTier: getScoreTier(t.compositeScore),
      })),
      links: links.map((l) => ({
        fromSlug: l.fromTown.slug,
        toSlug: l.toTown.slug,
        linkType: l.linkType as string,
        weight: l.weight,
        reason: l.reason,
      })),
    };
  } catch (error) {
    console.error("Error fetching map data:", error);
    return null;
  }
}

// ── Root-level entity lookups (cross-town) ────────────────────────────────

export interface PersonDetail {
  id: string;
  slug: string | null;
  name: string;
  roles: string[];
  bioShort: string;
  bioLong: string | null;
  imageUrl: string | null;
  imageCredit: string | null;
  birthYear: number | null;
  deathYear: number | null;
  verificationStatus: string;
  towns: Array<{ slug: string; name: string; state: string; connectionNote: string | null }>;
  events: Array<{
    id: string; slug: string | null; name: string; startDate: string | null;
    datePrecision: string; summary: string; roleInEvent: string | null;
    town: { slug: string; name: string };
    themes: Array<{ id: string; name: string }>;
  }>;
  stories: Array<{ id: string; title: string; storyType: string; excerpt: string; town: { slug: string; name: string } }>;
}

export async function getPersonBySlug(personSlug: string): Promise<PersonDetail | null> {
  try {
    const person = await prisma.person.findFirst({
      where: { OR: [{ slug: personSlug }, { id: personSlug }] },
      include: {
        townPeople: { include: { town: { select: { slug: true, name: true, state: true } } } },
        eventPeople: {
          include: {
            event: {
              include: {
                town: { select: { slug: true, name: true } },
                eventThemes: { include: { theme: true } },
              },
            },
          },
          orderBy: { event: { startDate: "asc" } },
        },
        stories: {
          select: { id: true, title: true, storyType: true, textVersion: true, town: { select: { slug: true, name: true } } },
          take: 10,
        },
      },
    });
    if (!person) return null;
    return {
      id: person.id,
      slug: person.slug,
      name: person.name,
      roles: person.roles,
      bioShort: person.bioShort,
      bioLong: person.bioLong,
      imageUrl: person.imageUrl ?? null,
      imageCredit: (person as any).imageCredit ?? null,
      birthYear: person.birthYear,
      deathYear: person.deathYear,
      verificationStatus: person.verificationStatus as string,
      towns: person.townPeople.map((tp) => ({
        slug: tp.town.slug,
        name: tp.town.name,
        state: tp.town.state,
        connectionNote: tp.connectionNote ?? null,
      })),
      events: person.eventPeople.map((ep) => ({
        id: ep.event.id,
        slug: ep.event.slug ?? null,
        name: ep.event.name,
        startDate: ep.event.startDate?.toISOString() ?? null,
        datePrecision: ep.event.datePrecision as string,
        summary: ep.event.summary,
        roleInEvent: ep.roleInEvent,
        town: { slug: ep.event.town.slug, name: ep.event.town.name },
        themes: ep.event.eventThemes.map((et) => ({ id: et.theme.id, name: et.theme.name })),
      })),
      stories: person.stories.map((s) => ({
        id: s.id,
        title: s.title,
        storyType: s.storyType as string,
        excerpt: s.textVersion.slice(0, 200) + (s.textVersion.length > 200 ? "..." : ""),
        town: { slug: s.town.slug, name: s.town.name },
      })),
    };
  } catch (error) {
    console.error("Error fetching person by slug:", error);
    return null;
  }
}

export interface PlaceDetail {
  id: string; slug: string | null; name: string; placeType: string;
  description: string; historicalNote: string | null;
  lat: number | null; lng: number | null; address: string | null;
  hours: string | null; admission: string | null; website: string | null; phone: string | null;
  accessibilityNotes: string | null; parkingNotes: string | null; amenities: string[];
  featured: boolean;
  town: { slug: string; name: string; state: string };
  connectedEvents: Array<{ id: string; slug: string | null; name: string; startDate: string | null; summary: string; people: Array<{ id: string; name: string; roleInEvent: string | null }> }>;
}

export async function getPlaceBySlug(placeSlug: string): Promise<PlaceDetail | null> {
  try {
    const place = await prisma.place.findFirst({
      where: { OR: [{ slug: placeSlug }, { id: placeSlug }] },
      include: {
        town: { select: { slug: true, name: true, state: true } },
      },
    });
    if (!place) return null;
    const connectedEvents = await prisma.event.findMany({
      where: { townId: place.townId },
      include: { eventPeople: { include: { person: true } } },
      orderBy: { startDate: "asc" },
      take: 20,
    });
    return {
      id: place.id, slug: place.slug ?? null, name: place.name, placeType: place.placeType as string,
      description: place.description, historicalNote: place.historicalNote ?? null,
      lat: place.lat ?? null, lng: place.lng ?? null, address: place.address ?? null,
      hours: place.hours ?? null, admission: place.admission ?? null,
      website: place.website ?? null, phone: place.phone ?? null,
      accessibilityNotes: place.accessibilityNotes ?? null, parkingNotes: place.parkingNotes ?? null,
      amenities: place.amenities, featured: place.featured,
      town: place.town,
      connectedEvents: connectedEvents.map((e) => ({
        id: e.id, slug: e.slug ?? null, name: e.name,
        startDate: e.startDate?.toISOString() ?? null, summary: e.summary,
        people: e.eventPeople.map((ep) => ({ id: ep.person.id, name: ep.person.name, roleInEvent: ep.roleInEvent })),
      })),
    };
  } catch (error) {
    console.error("Error fetching place by slug:", error);
    return null;
  }
}

export interface EventDetail {
  id: string; slug: string | null; name: string;
  startDate: string | null; endDate: string | null; datePrecision: string;
  summary: string; significanceWeight: number;
  imageUrl: string | null; imageCredit: string | null;
  videoId: string | null; videoSource: string | null;
  town: { slug: string; name: string; state: string };
  people: Array<{ id: string; slug: string | null; name: string; roles: string[]; bioShort: string; imageUrl: string | null; roleInEvent: string | null }>;
  themes: Array<{ id: string; name: string }>;
  relatedEvents: Array<{ id: string; slug: string | null; name: string; startDate: string | null; town: { slug: string; name: string } }>;
}

export async function getEventBySlug(eventSlug: string): Promise<EventDetail | null> {
  try {
    const event = await prisma.event.findFirst({
      where: { OR: [{ slug: eventSlug }, { id: eventSlug }] },
      include: {
        town: { select: { slug: true, name: true, state: true } },
        eventPeople: { include: { person: true } },
        eventThemes: { include: { theme: true } },
      },
    });
    if (!event) return null;
    const relatedEvents = await prisma.event.findMany({
      where: { townId: event.townId, id: { not: event.id } },
      select: { id: true, slug: true, name: true, startDate: true, town: { select: { slug: true, name: true } } },
      orderBy: { significanceWeight: "desc" },
      take: 5,
    });
    return {
      id: event.id, slug: event.slug ?? null, name: event.name,
      startDate: event.startDate?.toISOString() ?? null,
      endDate: event.endDate?.toISOString() ?? null,
      datePrecision: event.datePrecision as string,
      summary: event.summary, significanceWeight: event.significanceWeight,
      imageUrl: event.imageUrl ?? null, imageCredit: event.imageCredit ?? null,
      videoId: event.videoId ?? null, videoSource: event.videoSource ?? null,
      town: event.town,
      people: event.eventPeople.map((ep) => ({
        id: ep.person.id, slug: ep.person.slug ?? null, name: ep.person.name,
        roles: ep.person.roles, bioShort: ep.person.bioShort,
        imageUrl: ep.person.imageUrl ?? null, roleInEvent: ep.roleInEvent,
      })),
      themes: event.eventThemes.map((et) => ({ id: et.theme.id, name: et.theme.name })),
      relatedEvents: relatedEvents.map((e) => ({
        id: e.id, slug: e.slug ?? null, name: e.name,
        startDate: e.startDate?.toISOString() ?? null,
        town: { slug: e.town.slug, name: e.town.name },
      })),
    };
  } catch (error) {
    console.error("Error fetching event by slug:", error);
    return null;
  }
}

export async function getAllPeople(options?: { limit?: number; role?: string }): Promise<Array<{
  id: string; slug: string | null; name: string; roles: string[];
  bioShort: string; imageUrl: string | null; birthYear: number | null; deathYear: number | null;
  primaryTown: { slug: string; name: string; state: string } | null;
}>> {
  try {
    const people = await prisma.person.findMany({
      where: options?.role ? { roles: { has: options.role } } : undefined,
      include: { townPeople: { include: { town: { select: { slug: true, name: true, state: true } } }, take: 1 } },
      orderBy: { name: "asc" },
      take: options?.limit ?? 500,
    });
    return people.map((p) => ({
      id: p.id, slug: p.slug ?? null, name: p.name, roles: p.roles,
      bioShort: p.bioShort, imageUrl: p.imageUrl ?? null,
      birthYear: p.birthYear, deathYear: p.deathYear,
      primaryTown: p.townPeople[0]?.town ?? null,
    }));
  } catch (error) {
    console.error("Error fetching all people:", error);
    return [];
  }
}

export async function getAllEvents(options?: { month?: number; limit?: number; minSignificance?: number }): Promise<Array<{
  id: string; slug: string | null; name: string; startDate: string | null;
  summary: string; significanceWeight: number; imageUrl: string | null;
  town: { slug: string; name: string; state: string };
  themes: Array<{ id: string; name: string }>;
}>> {
  try {
    const where: any = {};
    if (options?.minSignificance) where.significanceWeight = { gte: options.minSignificance };
    if (options?.month) {
      const start = new Date(1775, options.month - 1, 1);
      const end = new Date(1800, options.month - 1 + 1, 0);
      where.startDate = { gte: start, lte: end };
    }
    const events = await prisma.event.findMany({
      where,
      include: {
        town: { select: { slug: true, name: true, state: true } },
        eventThemes: { include: { theme: true } },
      },
      orderBy: [{ significanceWeight: "desc" }, { startDate: "asc" }],
      take: options?.limit ?? 200,
    });
    return events.map((e) => ({
      id: e.id, slug: e.slug ?? null, name: e.name,
      startDate: e.startDate?.toISOString() ?? null,
      summary: e.summary, significanceWeight: e.significanceWeight,
      imageUrl: e.imageUrl ?? null,
      town: e.town,
      themes: e.eventThemes.map((et) => ({ id: et.theme.id, name: et.theme.name })),
    }));
  } catch (error) {
    console.error("Error fetching all events:", error);
    return [];
  }
}

export async function getAllLocalEvents(): Promise<Array<{
  id: string; name: string; description: string | null; category: string;
  recurrence: string; month: number | null; day: number | null; endDay: number | null;
  dateNote: string | null; eventDate: string | null; venue: string | null;
  url: string | null; admission: string | null; featured: boolean;
  town: { slug: string; name: string; state: string };
}>> {
  try {
    const events = await prisma.localEvent.findMany({
      include: { town: { select: { slug: true, name: true, state: true } } },
      orderBy: [{ featured: "desc" }, { month: "asc" }, { day: "asc" }],
    });
    return events.map((e) => ({
      id: e.id, name: e.name, description: e.description ?? null,
      category: e.category as string, recurrence: e.recurrence as string,
      month: e.month ?? null, day: e.day ?? null, endDay: e.endDay ?? null,
      dateNote: e.dateNote ?? null,
      eventDate: e.eventDate?.toISOString() ?? null,
      venue: e.venue ?? null, url: e.url ?? null, admission: e.admission ?? null,
      featured: e.featured,
      town: e.town,
    }));
  } catch (error) {
    console.error("Error fetching all local events:", error);
    return [];
  }
}

// ── Search ────────────────────────────────────────────────────────────────

export interface SearchResult {
  type: "town" | "event" | "person" | "place";
  id: string;
  title: string;
  subtitle: string;
  excerpt: string | null;
  href: string;
  score?: number;
}

export async function search(query: string, limit = 30): Promise<SearchResult[]> {
  if (!query || query.trim().length < 2) return [];
  const q = query.trim();
  const contains = { contains: q, mode: "insensitive" as const };

  const [towns, events, people, places] = await Promise.all([
    prisma.town.findMany({
      where: { OR: [{ name: contains }, { whyMatters: contains }, { heroSummary40: contains }, { execSummary150: contains }] },
      select: { id: true, name: true, state: true, slug: true, execSummary150: true },
      take: 10,
    }),
    prisma.event.findMany({
      where: { OR: [{ name: contains }, { summary: contains }] },
      select: { id: true, name: true, summary: true, slug: true, town: { select: { name: true, slug: true } } },
      orderBy: { significanceWeight: "desc" },
      take: 10,
    }),
    prisma.person.findMany({
      where: { OR: [{ name: contains }, { bioShort: contains }, { bioLong: contains }] },
      select: { id: true, name: true, bioShort: true, slug: true, townPeople: { select: { town: { select: { name: true, slug: true } } }, take: 1 } },
      take: 8,
    }),
    prisma.place.findMany({
      where: { OR: [{ name: contains }, { description: contains }] },
      select: { id: true, name: true, description: true, slug: true, town: { select: { name: true, slug: true } } },
      take: 8,
    }),
  ]);

  const results: SearchResult[] = [
    ...towns.map((t) => ({
      type: "town" as const,
      id: t.id,
      title: t.name,
      subtitle: t.state,
      excerpt: t.execSummary150 ?? null,
      href: `/towns/${t.slug}`,
    })),
    ...events.map((e) => ({
      type: "event" as const,
      id: e.id,
      title: e.name,
      subtitle: e.town.name,
      excerpt: e.summary ?? null,
      href: e.slug ? `/events/${e.slug}` : `/towns/${e.town.slug}/timeline`,
    })),
    ...people.map((p) => {
      const town = p.townPeople[0]?.town ?? null;
      return {
        type: "person" as const,
        id: p.id,
        title: p.name,
        subtitle: town?.name ?? "Historical Figure",
        excerpt: p.bioShort ?? null,
        href: p.slug ? `/people/${p.slug}` : (town ? `/towns/${town.slug}/people` : "/people"),
      };
    }),
    ...places.map((pl) => ({
      type: "place" as const,
      id: pl.id,
      title: pl.name,
      subtitle: pl.town.name,
      excerpt: pl.description ?? null,
      href: pl.slug ? `/places/${pl.slug}` : `/towns/${pl.town.slug}/places`,
    })),
  ];

  return results.slice(0, limit);
}

// ── Places index ──────────────────────────────────────────────────────────

const PLACE_TYPE_ORDER = ["BATTLEFIELD", "MUSEUM", "HISTORIC_HOUSE", "MONUMENT", "CHURCH", "TAVERN", "CEMETERY", "GOVERNMENT", "LANDMARK", "TRAIL"] as const;

export interface PlaceListItem {
  id: string;
  slug: string | null;
  name: string;
  placeType: string;
  featured: boolean;
  description: string | null;
  hours: string | null;
  admission: string | null;
  town: { slug: string; name: string; state: string };
}

export async function getAllPlaces(): Promise<PlaceListItem[]> {
  try {
    return await prisma.place.findMany({
      select: {
        id: true,
        slug: true,
        name: true,
        placeType: true,
        featured: true,
        description: true,
        hours: true,
        admission: true,
        town: { select: { slug: true, name: true, state: true } },
      },
      orderBy: [{ featured: "desc" }, { name: "asc" }],
    });
  } catch (error) {
    console.error("Error fetching all places:", error);
    return [];
  }
}

export { PLACE_TYPE_ORDER };

export async function getAllStoryParams(): Promise<Array<{ townSlug: string; storySlug: string }>> {
  try {
    const rows = await prisma.story.findMany({
      select: { id: true, slug: true, town: { select: { slug: true } } },
    });
    return rows.map((r) => ({ townSlug: r.town.slug, storySlug: r.slug ?? r.id }));
  } catch {
    return [];
  }
}

export async function getHomeTowns(): Promise<{ name: string; slug: string }[]> {
  try {
    return await prisma.town.findMany({
      where: { state: "MA", NOT: { heroSummary40: "" } },
      select: { name: true, slug: true },
      orderBy: { name: "asc" },
    });
  } catch {
    return [];
  }
}

export interface TownListItem {
  id: string;
  name: string;
  state: string;
  slug: string;
  heroSummary40: string;
  execSummary150: string;
}

export async function getAllTownsList(): Promise<TownListItem[]> {
  try {
    return await prisma.town.findMany({
      select: { id: true, name: true, state: true, slug: true, heroSummary40: true, execSummary150: true },
      orderBy: { name: "asc" },
    });
  } catch (err) {
    console.error("[getAllTownsList] DB error:", err);
    return [];
  }
}

// ============================================================================
// BUSINESS DIRECTORY
// ============================================================================

export interface TownBusiness {
  id: string;
  name: string;
  slug: string;
  category: "RESTAURANT" | "CAFE_BAKERY" | "SHOPPING" | "LODGING" | "HISTORIC_SITE";
  address: string | null;
  hours: string | null;
  priceRange: string | null;
  website: string | null;
  phone: string | null;
  isHifePick: boolean;
  blurb: string | null;
  lat: number | null;
  lng: number | null;
}

export interface TownBusinesses {
  picks: TownBusiness[];
  byCategory: {
    RESTAURANT: TownBusiness[];
    CAFE_BAKERY: TownBusiness[];
    SHOPPING: TownBusiness[];
    LODGING: TownBusiness[];
    HISTORIC_SITE: TownBusiness[];
  };
}

export async function getBusinessesByTown(slug: string): Promise<TownBusinesses | null> {
  try {
    const town = await prisma.town.findUnique({ where: { slug }, select: { id: true } });
    if (!town) return null;

    const businesses = await prisma.business.findMany({
      where: { townId: town.id, status: "ACTIVE" },
      orderBy: [{ isHifePick: "desc" }, { name: "asc" }],
      select: {
        id: true, name: true, slug: true, category: true,
        address: true, hours: true, priceRange: true,
        website: true, phone: true, isHifePick: true, blurb: true,
        lat: true, lng: true,
      },
    });

    const toTownBusiness = (b: typeof businesses[0]): TownBusiness => ({
      ...b,
      category: b.category as TownBusiness["category"],
    });

    const picks = businesses.filter((b) => b.isHifePick).map(toTownBusiness);
    const byCategory = {
      RESTAURANT: businesses.filter((b) => b.category === "RESTAURANT").map(toTownBusiness),
      CAFE_BAKERY: businesses.filter((b) => b.category === "CAFE_BAKERY").map(toTownBusiness),
      SHOPPING: businesses.filter((b) => b.category === "SHOPPING").map(toTownBusiness),
      LODGING: businesses.filter((b) => b.category === "LODGING").map(toTownBusiness),
      HISTORIC_SITE: businesses.filter((b) => b.category === "HISTORIC_SITE").map(toTownBusiness),
    };

    return { picks, byCategory };
  } catch (err) {
    console.error("[getBusinessesByTown] DB error:", err);
    return null;
  }
}

// ─── Route detail types ────────────────────────────────────────────────────────

export interface RouteStopDetail {
  id: string;
  stopOrder: number;
  notes: string | null;
  arrivalTime: string | null;
  town: {
    id: string;
    slug: string;
    name: string;
    state: string;
    execSummary150: string;
    imageUrl: string | null;
  };
}

export interface RouteDetail {
  id: string;
  name: string;
  description: string;
  totalMiles: number | null;
  stops: RouteStopDetail[];
}

export interface RouteSummary {
  id: string;
  name: string;
  description: string;
  totalMiles: number | null;
  stopCount: number;
}

export async function getRouteBySlug(slug: string): Promise<RouteDetail | null> {
  try {
    const route = await prisma.route.findUnique({
      where: { id: slug },
      include: {
        stops: {
          orderBy: { stopOrder: "asc" },
          include: {
            town: {
              select: {
                id: true,
                slug: true,
                name: true,
                state: true,
                execSummary150: true,
                imageUrl: true,
              },
            },
          },
        },
      },
    });
    if (!route) return null;

    return {
      id: route.id,
      name: route.name,
      description: route.description,
      totalMiles: route.totalMiles,
      stops: route.stops.map((s) => ({
        id: s.id,
        stopOrder: s.stopOrder,
        notes: s.notes,
        arrivalTime: s.arrivalTime,
        town: s.town,
      })),
    };
  } catch (err) {
    console.error("[getRouteBySlug] DB error:", err);
    return null;
  }
}

export async function getAllRoutes(): Promise<RouteSummary[]> {
  try {
    const routes = await prisma.route.findMany({
      orderBy: { name: "asc" },
      include: { stops: { select: { id: true } } },
    });
    return routes.map((r) => ({
      id: r.id,
      name: r.name,
      description: r.description,
      totalMiles: r.totalMiles,
      stopCount: r.stops.length,
    }));
  } catch (err) {
    console.error("[getAllRoutes] DB error:", err);
    return [];
  }
}

// ─── Google Places enrichment ──────────────────────────────────────────────────

type PlacesCategory = "RESTAURANT" | "CAFE_BAKERY" | "SHOPPING" | "LODGING";

const PLACES_TYPE_MAP: Record<string, PlacesCategory> = {
  restaurant: "RESTAURANT",
  food: "RESTAURANT",
  meal_takeaway: "RESTAURANT",
  meal_delivery: "RESTAURANT",
  cafe: "CAFE_BAKERY",
  bakery: "CAFE_BAKERY",
  coffee_shop: "CAFE_BAKERY",
  store: "SHOPPING",
  book_store: "SHOPPING",
  clothing_store: "SHOPPING",
  gift_shop: "SHOPPING",
  lodging: "LODGING",
  hotel: "LODGING",
  inn: "LODGING",
  bed_and_breakfast: "LODGING",
};

const PLACES_SEARCH_TYPES = [
  { query: "restaurant", category: "RESTAURANT" as PlacesCategory },
  { query: "cafe bakery coffee", category: "CAFE_BAKERY" as PlacesCategory },
  { query: "gift shop book store", category: "SHOPPING" as PlacesCategory },
  { query: "hotel inn bed breakfast lodging", category: "LODGING" as PlacesCategory },
];

function inferCategory(types: string[]): PlacesCategory | null {
  for (const t of types) {
    if (PLACES_TYPE_MAP[t]) return PLACES_TYPE_MAP[t];
  }
  return null;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

export interface EnrichResult {
  upserted: number;
  skipped: number;
  errors: string[];
}

export async function enrichBusinessesFromPlaces(
  townSlug: string
): Promise<EnrichResult> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return { upserted: 0, skipped: 0, errors: ["GOOGLE_PLACES_API_KEY not set"] };
  }

  const town = await prisma.town.findUnique({
    where: { slug: townSlug },
    select: { id: true, name: true, state: true },
  });
  if (!town) {
    return { upserted: 0, skipped: 0, errors: [`Town not found: ${townSlug}`] };
  }

  let upserted = 0;
  let skipped = 0;
  const errors: string[] = [];

  for (const { query, category } of PLACES_SEARCH_TYPES) {
    const searchQuery = `${query} in ${town.name} ${town.state}`;
    const url =
      `https://maps.googleapis.com/maps/api/place/textsearch/json` +
      `?query=${encodeURIComponent(searchQuery)}&key=${apiKey}`;

    let data: { results?: PlacesResult[]; status?: string };
    try {
      const res = await fetch(url);
      data = (await res.json()) as { results?: PlacesResult[]; status?: string };
    } catch (e) {
      errors.push(`Fetch error for ${category}: ${String(e)}`);
      continue;
    }

    if (data.status !== "OK" && data.status !== "ZERO_RESULTS") {
      errors.push(`Places API error for ${category}: ${data.status}`);
      continue;
    }

    for (const place of data.results ?? []) {
      const inferredCategory = inferCategory(place.types ?? []) ?? category;
      const priceRange =
        place.price_level === 1 ? "$" :
        place.price_level === 2 ? "$$" :
        place.price_level === 3 ? "$$$" :
        place.price_level === 4 ? "$$$$" : undefined;

      const baseSlug = slugify(`${town.name}-${place.name}`);
      let slug = baseSlug;
      let attempt = 0;
      while (attempt < 5) {
        const existing = await prisma.business.findUnique({ where: { slug } });
        if (!existing || existing.townId === town.id) break;
        attempt++;
        slug = `${baseSlug}-${attempt}`;
      }

      try {
        await prisma.business.upsert({
          where: { slug },
          update: {
            name: place.name,
            category: inferredCategory,
            address: place.formatted_address,
            lat: place.geometry?.location?.lat,
            lng: place.geometry?.location?.lng,
            priceRange,
            source: "PLACES_API",
            lastVerified: new Date(),
            status: "NEEDS_REVIEW",
          },
          create: {
            townId: town.id,
            name: place.name,
            slug,
            category: inferredCategory,
            address: place.formatted_address,
            lat: place.geometry?.location?.lat,
            lng: place.geometry?.location?.lng,
            priceRange,
            source: "PLACES_API",
            lastVerified: new Date(),
            status: "NEEDS_REVIEW",
            isHifePick: false,
          },
        });
        upserted++;
      } catch (e) {
        errors.push(`Upsert error for ${place.name}: ${String(e)}`);
        skipped++;
      }
    }
  }

  return { upserted, skipped, errors };
}

interface PlacesResult {
  name: string;
  types?: string[];
  price_level?: number;
  formatted_address?: string;
  geometry?: { location?: { lat?: number; lng?: number } };
}

export interface TownSourceEntry {
  id: string;
  title: string;
  url: string | null;
  type: string;
  publisherOrHolder: string;
  credibilityTier: string;
}

export async function getSourcesByTown(slug: string): Promise<TownSourceEntry[]> {
  try {
    const town = await prisma.town.findUnique({
      where: { slug },
      select: {
        sourceTowns: {
          where: {
            source: {
              OR: [
                { credibilityTier: "TIER1" },
                { type: "PRIMARY" },
              ],
            },
          },
          include: {
            source: {
              select: {
                id: true, title: true, url: true,
                type: true, publisherOrHolder: true, credibilityTier: true,
              },
            },
          },
        },
      },
    });
    if (!town) return [];
    return town.sourceTowns
      .map(st => ({
        id: st.source.id,
        title: st.source.title,
        url: st.source.url ?? null,
        type: st.source.type as string,
        publisherOrHolder: st.source.publisherOrHolder,
        credibilityTier: st.source.credibilityTier as string,
      }))
      .sort((a, b) => a.type.localeCompare(b.type) || a.title.localeCompare(b.title));
  } catch {
    return [];
  }
}
