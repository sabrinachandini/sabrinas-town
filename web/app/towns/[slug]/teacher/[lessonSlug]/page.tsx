import { redirect } from "next/navigation";
import { getTown, getTeacherModule } from "@/lib/api";
import { TeacherModuleResponse } from "@/lib/api";
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
  params: Promise<{ slug: string; lessonSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  // lessonSlug is intentionally ignored — the API returns exactly one module per town slug.
  const module: TeacherModuleResponse | null = await getTeacherModule(slug);

  if (!module) {
    return { title: "Lesson Not Found" };
  }

  return {
    title: `${module.overview.title} | Teach | History is for Everyone`,
    description: module.overview.summary.slice(0, 160),
  };
}

export default async function LessonDetailPage({ params }: PageProps) {
  const { slug } = await params;
  // lessonSlug is intentionally ignored — the API returns exactly one module per town slug.

  const [town, module] = await Promise.all([
    getTown(slug),
    getTeacherModule(slug),
  ]);

  if (!module) redirect("/teach");
  if (!town) redirect("/teach");

  const lessonPlan = module.lessonPlan as unknown as LessonPlan;

  return (
    <PageShell>
      <PageHeader
        name={module.overview.title}
        state={town.state}
        subtitle={`${module.overview.gradeRange} · ${module.overview.estimatedDuration}`}
      />
      <TeacherProductHeader module={module} slug={slug} />
      <TeacherProductMeta module={module} />
      <PreviewSection lessonPlan={lessonPlan} />
      <PrimarySourcesList sources={module.primarySources} />
      <DownloadsBlock handouts={module.handouts} />
      {module.quiz?.questions?.length > 0 && (
        <QuizSection
          title={module.quiz.title}
          instructions={module.quiz.instructions}
          questions={module.quiz.questions}
        />
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
