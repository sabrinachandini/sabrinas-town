import { notFound } from "next/navigation";
import { getTown, getTeacherModule } from "@/lib/api";
import {
  PageShell,
  PageHeader,
  EditorialSection,
  Prose,
} from "@/components/editorial";

const EDITORIAL_SLUGS = new Set(["boston-ma", "lexington-ma", "concord-ma", "salem-ma", "worcester-ma", "springfield-ma", "plymouth-ma"]);

interface PageProps {
  params: Promise<{ slug: string; id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, id } = await params;
  const module = await getTeacherModule(slug);

  if (!module) {
    return { title: "Lesson Not Found" };
  }

  return {
    title: `${module.overview.title} | Teach | Sabrina's Town`,
    description: module.overview.summary.slice(0, 160),
  };
}

export default async function LessonDetailPage({ params }: PageProps) {
  const { slug, id } = await params;

  if (!EDITORIAL_SLUGS.has(slug)) {
    notFound();
  }

  const [town, module] = await Promise.all([
    getTown(slug),
    getTeacherModule(slug),
  ]);

  if (!town || !module) {
    notFound();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const m = module as any;
  const lessonPlan = m.lessonPlan;

  return (
    <PageShell>
      <PageHeader
        name={m.overview?.title ?? "Lesson Plan"}
        state={town.state}
        subtitle={
          m.overview
            ? `${m.overview.gradeRange} · ${m.overview.estimatedDuration}`
            : undefined
        }
      />

      {m.overview?.summary && (
        <Prose>
          <p>{m.overview.summary}</p>
        </Prose>
      )}

      {lessonPlan?.objectives && (
        <EditorialSection id="objectives" title="Learning Objectives">
          <ol className="space-y-2 list-none">
            {lessonPlan.objectives.map((obj: string, i: number) => (
              <li key={i} className="font-body">
                {i + 1}. {obj}
              </li>
            ))}
          </ol>
        </EditorialSection>
      )}

      {lessonPlan?.essentialQuestions && (
        <EditorialSection id="questions" title="Essential Questions">
          <ul className="space-y-3">
            {lessonPlan.essentialQuestions.map((q: string, i: number) => (
              <li
                key={i}
                className="pl-4 border-l-2 border-accent-blue font-body"
              >
                {q}
              </li>
            ))}
          </ul>
        </EditorialSection>
      )}

      {lessonPlan?.warmUp && (
        <EditorialSection id="procedure" title="Procedure">
          <div className="space-y-4">
            {lessonPlan.warmUp && (
              <LessonBlock
                title="Warm-Up"
                duration={lessonPlan.warmUp.duration}
                content={lessonPlan.warmUp.activity}
              />
            )}
            {lessonPlan.directInstruction && (
              <LessonBlock
                title="Direct Instruction"
                duration={lessonPlan.directInstruction.duration}
                items={lessonPlan.directInstruction.content}
              />
            )}
            {lessonPlan.guidedPractice && (
              <LessonBlock
                title="Guided Practice"
                duration={lessonPlan.guidedPractice.duration}
                items={lessonPlan.guidedPractice.activities}
              />
            )}
            {lessonPlan.independentPractice && (
              <LessonBlock
                title="Independent Practice"
                duration={lessonPlan.independentPractice.duration}
                content={lessonPlan.independentPractice.assignment}
              />
            )}
            {lessonPlan.closure && (
              <LessonBlock
                title="Closure"
                duration={lessonPlan.closure.duration}
                content={lessonPlan.closure.activity}
              />
            )}
          </div>
        </EditorialSection>
      )}

      {lessonPlan?.differentiation && (
        <EditorialSection id="differentiation" title="Differentiation">
          <div className="grid md:grid-cols-3 gap-6">
            {(["struggling", "advanced", "ell"] as const).map((key) => (
              <div key={key}>
                <p className="text-small text-text-muted font-body uppercase tracking-wide mb-2">
                  {key === "ell"
                    ? "ELL Support"
                    : key === "struggling"
                      ? "Struggling Learners"
                      : "Advanced Learners"}
                </p>
                <p className="text-small font-body">
                  {lessonPlan.differentiation[key]}
                </p>
              </div>
            ))}
          </div>
        </EditorialSection>
      )}

      {m.primarySources && m.primarySources.length > 0 && (
        <EditorialSection id="sources" title="Primary Sources">
          <div className="space-y-4">
            {m.primarySources.map(
              (source: { id: string; title: string; sourceInfo: string; url?: string }) => (
                <div
                  key={source.id}
                  className="py-4 border-b border-border-light last:border-b-0"
                >
                  <p className="font-body font-medium">{source.title}</p>
                  <p className="mt-1 text-small text-text-muted font-body">
                    {source.sourceInfo}
                  </p>
                  {source.url && (
                    <a
                      href={source.url}
                      className="mt-1 inline-block text-small text-accent-blue font-body hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View source &rarr;
                    </a>
                  )}
                </div>
              )
            )}
          </div>
        </EditorialSection>
      )}

      <div className="mt-12 pt-8 border-t border-border-light">
        <a
          href={`/towns/${slug}/teacher`}
          className="text-small text-accent-blue font-body hover:underline"
        >
          &larr; Back to teacher resources
        </a>
      </div>
    </PageShell>
  );
}

function LessonBlock({
  title,
  duration,
  content,
  items,
}: {
  title: string;
  duration: string;
  content?: string;
  items?: string[];
}) {
  return (
    <div className="p-4 bg-bg-secondary rounded-lg">
      <div className="flex justify-between items-start">
        <p className="font-body font-medium">{title}</p>
        <p className="text-small text-text-muted font-body">{duration}</p>
      </div>
      {content && (
        <p className="mt-2 text-small font-body">{content}</p>
      )}
      {items && (
        <ul className="mt-2 space-y-1">
          {items.map((item, i) => (
            <li key={i} className="text-small font-body">
              &bull; {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
