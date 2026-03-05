import { TeacherModuleResponse } from "@/lib/api";
import { Button } from "@/components/ui";
import { LessonPlan } from "./types";

interface Props {
  module: TeacherModuleResponse;
  slug: string;
}

function deriveWhatYouGet(module: TeacherModuleResponse): string[] {
  const bullets: string[] = [];
  const lp = module.lessonPlan as unknown as LessonPlan;

  if (lp?.warmUp) {
    bullets.push(`Full lesson plan (${module.overview.estimatedDuration})`);
  }

  if (module.primarySources.length > 0) {
    const n = module.primarySources.length;
    bullets.push(`${n} primary source${n === 1 ? "" : "s"} with analysis prompts`);
  }

  if (module.quiz?.questions?.length > 0) {
    const n = module.quiz.questions.length;
    bullets.push(`Quiz with answer key (${n} question${n === 1 ? "" : "s"})`);
  }

  if (lp?.differentiation) {
    bullets.push("Differentiation strategies (struggling / advanced / ELL)");
  }

  if (module.handouts.length > 0) {
    const n = module.handouts.length;
    bullets.push(`${n} printable handout${n === 1 ? "" : "s"}`);
  }

  return bullets;
}

export function TeacherProductHeader({ module, slug }: Props) {
  const bullets = deriveWhatYouGet(module);

  return (
    <div className="mb-8">
      <h1 className="font-serif text-3xl font-bold">{module.overview.title}</h1>

      <p className="text-small text-text-muted font-body mt-2">
        {module.overview.gradeRange} &middot; {module.overview.estimatedDuration}
      </p>

      {bullets.length > 0 && (
        <>
          <p className="font-body font-medium mt-4 mb-1">What you&apos;ll get</p>
          <ul className="text-small font-body space-y-1 mt-2">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent-blue shrink-0" aria-hidden="true">
                  ✓
                </span>
                {bullet}
              </li>
            ))}
          </ul>
        </>
      )}

      <div className="mt-6">
        <Button href={`/towns/${slug}/teacher/print`} external variant="primary">
          Print full packet
        </Button>
      </div>
    </div>
  );
}
