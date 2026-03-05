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
