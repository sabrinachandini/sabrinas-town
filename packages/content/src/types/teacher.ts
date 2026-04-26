export interface LessonPlan {
  objectives: string[];
  essentialQuestions: string[];
  materials: string[];
  warmUp: { duration: string; activity: string };
  directInstruction: { duration: string; content: string[] };
  guidedPractice: { duration: string; activities: string[] };
  independentPractice: { duration: string; assignment: string };
  closure: { duration: string; activity: string };
  differentiation: { struggling: string; advanced: string; ell: string };
  assessment: string;
}

export interface Standards {
  note: string;
  commonCore: string[];
  c3Framework: string[];
  stateStandards: { placeholder: string; suggestedAlignment: string };
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
    townName: string;
    connectionType: string;
    teachingConnection: string;
  }>;
  meta?: {
    contentSource: "curated" | "generated";
  };
}
