import { getTeacherModule, getTown } from "@/lib/api";
import { recordOrgEvent } from "@/lib/analytics";
import {
  TeacherProductHeader,
  TeacherProductMeta,
  PreviewSection,
  PrimarySourcesList,
  DownloadsBlock,
} from "@/components/teacher";
import { LessonPlan } from "@/components/teacher/types";
import { QuizSection } from "@/components/town";
import { PageShell, PageHeader } from "@/components/editorial";

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

  void recordOrgEvent(slug, "TEACHER_VIEW");

  if (!town) {
    return (
      <PageShell>
        <p className="text-text-muted font-body mt-8">
          Teacher resources for this town are being developed.
        </p>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <PageHeader
        name={town.name}
        state={town.state}
        subtitle="Lesson plans and classroom materials."
      />

      {teacherModule ? (
        <>
          <TeacherProductHeader module={teacherModule} slug={slug} />
          <TeacherProductMeta module={teacherModule} />
          <PreviewSection lessonPlan={teacherModule.lessonPlan as unknown as LessonPlan} />
          <PrimarySourcesList sources={teacherModule.primarySources} />
          <DownloadsBlock handouts={teacherModule.handouts} />
          {teacherModule.quiz?.questions?.length > 0 && (
            <QuizSection
              title={teacherModule.quiz.title}
              instructions={teacherModule.quiz.instructions}
              questions={teacherModule.quiz.questions}
            />
          )}
        </>
      ) : (
        <p className="text-text-muted font-body mt-8">
          Teacher resources for {town.name} are being developed.
        </p>
      )}
    </PageShell>
  );
}
