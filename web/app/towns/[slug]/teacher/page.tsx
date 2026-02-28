import { getTeacherModule, getTown } from "@/lib/api";
import { recordOrgEvent } from "@/lib/analytics";
import { ComingSoon } from "@/components/town";
import {
  PageShell,
  PageHeader,
  EditorialSection,
} from "@/components/editorial";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const module = await getTeacherModule(slug);

  if (!module) {
    const town = await getTown(slug);
    return {
      title: town
        ? `Teach ${town.name} | History is for Everyone`
        : "Teacher Module | History is for Everyone",
      description: town
        ? `Teacher resources for ${town.name}, ${town.state}.`
        : "Teacher resources for Revolutionary War towns.",
    };
  }

  return {
    title: `Teach ${module.town.name} | History is for Everyone`,
    description: `Complete teacher resources for ${module.town.name}: lesson plans, primary sources, discussion questions, and assessments.`,
  };
}

export default async function TeacherPage({ params }: PageProps) {
  const { slug } = await params;

  const [town, teacherModule] = await Promise.all([
    getTown(slug),
    getTeacherModule(slug),
  ]);

  void recordOrgEvent(slug, 'TEACHER_VIEW');

  if (!town) return <ComingSoon slug={slug} section="Teacher" />;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const m = teacherModule as any;

  return (
    <PageShell>
      <PageHeader
        name={town.name}
        state={town.state}
        subtitle="Lesson plans and classroom materials."
      />

      {m ? (
        <>
          {m.overview && (
            <EditorialSection id="overview" title={m.overview.title}>
              <p className="text-small text-text-muted font-body">
                {m.overview.gradeRange} &middot; {m.overview.estimatedDuration}
              </p>
              <p className="mt-3 font-body leading-relaxed">
                {m.overview.summary}
              </p>
              <a
                href={`/towns/${slug}/teacher/lesson`}
                className="mt-3 inline-block text-small text-accent-blue font-body hover:underline"
              >
                View full lesson plan &rarr;
              </a>
            </EditorialSection>
          )}

          {m.lessonPlan?.objectives && (
            <EditorialSection id="objectives" title="Learning Objectives">
              <ul className="space-y-2">
                {m.lessonPlan.objectives.map((obj: string, i: number) => (
                  <li key={i} className="font-body">
                    {i + 1}. {obj}
                  </li>
                ))}
              </ul>
            </EditorialSection>
          )}

          {m.lessonPlan?.essentialQuestions && (
            <EditorialSection id="questions" title="Essential Questions">
              <ul className="space-y-3">
                {m.lessonPlan.essentialQuestions.map((q: string, i: number) => (
                  <li key={i} className="pl-4 border-l-2 border-accent-blue font-body">
                    {q}
                  </li>
                ))}
              </ul>
            </EditorialSection>
          )}

          {m.primarySources && m.primarySources.length > 0 && (
            <EditorialSection id="sources" title="Primary Sources">
              <div className="space-y-4">
                {m.primarySources.map((source: { id: string; title: string; sourceInfo: string }) => (
                  <div key={source.id} className="py-4 border-b border-border-light last:border-b-0">
                    <p className="font-body font-medium">{source.title}</p>
                    <p className="mt-1 text-small text-text-muted font-body">{source.sourceInfo}</p>
                  </div>
                ))}
              </div>
            </EditorialSection>
          )}

          <div className="mt-12 pt-8 border-t border-border-light flex gap-4">
            <a
              href={`/towns/${slug}/teacher/print`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-small text-accent-blue font-body hover:underline"
            >
              Print full packet
            </a>
          </div>
        </>
      ) : (
        <p className="text-text-muted font-body mt-8">
          Teacher resources for {town.name} are being developed.
        </p>
      )}
    </PageShell>
  );
}
