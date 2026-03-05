import { EditorialSection } from "@/components/editorial";
import { LessonPlan } from "./types";

interface Props {
  lessonPlan: LessonPlan;
}

interface LessonBlockProps {
  title: string;
  duration: string;
  children: React.ReactNode;
}

function LessonBlock({ title, duration, children }: LessonBlockProps) {
  return (
    <div className="p-4 bg-bg-secondary rounded-lg">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-body font-semibold text-text-primary">{title}</h3>
        <span className="text-small text-text-muted font-body shrink-0 ml-4">{duration}</span>
      </div>
      <div className="text-small font-body space-y-1">{children}</div>
    </div>
  );
}

export function PreviewSection({ lessonPlan }: Props) {
  const objectives = lessonPlan.objectives ?? [];
  const essentialQuestions = lessonPlan.essentialQuestions ?? [];
  const directContent = lessonPlan.directInstruction?.content ?? [];
  const guidedActivities = lessonPlan.guidedPractice?.activities ?? [];

  return (
    <>
      {objectives.length > 0 && (
        <EditorialSection id="objectives" title="Learning Objectives">
          <ol className="list-decimal list-inside space-y-2 font-body text-small">
            {objectives.map((obj, i) => (
              <li key={i}>{obj}</li>
            ))}
          </ol>
        </EditorialSection>
      )}

      {essentialQuestions.length > 0 && (
        <EditorialSection id="questions" title="Essential Questions">
          <ul className="space-y-3">
            {essentialQuestions.map((q, i) => (
              <li key={i} className="pl-4 border-l-2 border-accent-blue font-body text-small">
                {q}
              </li>
            ))}
          </ul>
        </EditorialSection>
      )}

      <EditorialSection id="procedure" title="Procedure">
        <div className="space-y-4">
          {lessonPlan.warmUp && (
            <LessonBlock title="Warm-Up" duration={lessonPlan.warmUp.duration}>
              <p>{lessonPlan.warmUp.activity}</p>
            </LessonBlock>
          )}

          {lessonPlan.directInstruction && (
            <LessonBlock
              title="Direct Instruction"
              duration={lessonPlan.directInstruction.duration}
            >
              {directContent.length > 0 ? (
                <ul className="space-y-1">
                  {directContent.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-text-muted shrink-0">&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </LessonBlock>
          )}

          {lessonPlan.guidedPractice && (
            <LessonBlock
              title="Guided Practice"
              duration={lessonPlan.guidedPractice.duration}
            >
              {guidedActivities.length > 0 ? (
                <ul className="space-y-1">
                  {guidedActivities.map((activity, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-text-muted shrink-0">&bull;</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              ) : null}
            </LessonBlock>
          )}

          {lessonPlan.independentPractice && (
            <LessonBlock
              title="Independent Practice"
              duration={lessonPlan.independentPractice.duration}
            >
              <p>{lessonPlan.independentPractice.assignment}</p>
            </LessonBlock>
          )}

          {lessonPlan.closure && (
            <LessonBlock title="Closure" duration={lessonPlan.closure.duration}>
              <p>{lessonPlan.closure.activity}</p>
            </LessonBlock>
          )}
        </div>
      </EditorialSection>

      {lessonPlan.differentiation && (
        <EditorialSection id="differentiation" title="Differentiation">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-bg-secondary rounded-lg">
              <h3 className="font-body font-semibold text-text-primary mb-2">
                Struggling Learners
              </h3>
              <p className="text-small font-body">{lessonPlan.differentiation.struggling}</p>
            </div>
            <div className="p-4 bg-bg-secondary rounded-lg">
              <h3 className="font-body font-semibold text-text-primary mb-2">
                Advanced Learners
              </h3>
              <p className="text-small font-body">{lessonPlan.differentiation.advanced}</p>
            </div>
            <div className="p-4 bg-bg-secondary rounded-lg">
              <h3 className="font-body font-semibold text-text-primary mb-2">ELL Support</h3>
              <p className="text-small font-body">{lessonPlan.differentiation.ell}</p>
            </div>
          </div>
        </EditorialSection>
      )}
    </>
  );
}
