import { getTeacherModule, getTown } from "@/lib/api";
import {
  Container,
  Heading,
  Text,
  Link,
  Divider,
} from "@/components/ui";
import {
  EmptyState,
  ContentSourceBadge,
  PrimarySourceCard,
  QuizSection,
  TeacherHandoutCard,
} from "@/components/town";

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
        ? `Teach ${town.name} | Sabrina's Town`
        : "Teacher Module | Sabrina's Town",
      description: town
        ? `Teacher resources for ${town.name}, ${town.state}.`
        : "Teacher resources for Revolutionary War towns.",
    };
  }

  return {
    title: `Teach ${module.town.name} | Sabrina's Town`,
    description: `Complete teacher resources for ${module.town.name}: lesson plans, primary sources, discussion questions, and assessments.`,
  };
}

export default async function TeacherPage({ params }: PageProps) {
  const { slug } = await params;
  const module = await getTeacherModule(slug);

  if (!module) {
    return (
      <EmptyState
        title="Teacher Resources Coming Soon"
        description="Lesson plans, primary source packets, discussion questions, and classroom assessments for this town are being developed."
        townSlug={slug}
      />
    );
  }

  const { town, overview, lessonPlan, comparativeAssignment, handouts, quiz, primarySources } = module;
  const contentSource = module.meta?.contentSource || "generated";

  return (
    <div className="py-section bg-bg-secondary">
      <Container>
        {/* Header with badge and print link */}
        <div className="mb-component flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <ContentSourceBadge contentSource={contentSource} />
            </div>
            <Text className="text-text-muted max-w-[720px]">
              Complete classroom resources for teaching {town.name}&apos;s Revolutionary history.
            </Text>
          </div>
          <Link
            href={`/towns/${slug}/teacher/print`}
            target="_blank"
            className="no-print px-4 py-2 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 no-underline text-small font-medium"
          >
            Save as PDF
          </Link>
        </div>

        {/* Overview */}
        <section className="bg-bg-primary p-component rounded-lg">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <Text size="small" muted className="uppercase tracking-wide mb-2">Lesson Overview</Text>
              <Heading level={2}>{overview.title}</Heading>
            </div>
            <div className="flex flex-wrap gap-4 text-small">
              <div>
                <Text size="small" muted>Grade Range</Text>
                <Text className="font-medium">{overview.gradeRange}</Text>
              </div>
              <div>
                <Text size="small" muted>Duration</Text>
                <Text className="font-medium">{overview.estimatedDuration}</Text>
              </div>
            </div>
          </div>
          <Text className="mt-element">{overview.summary}</Text>
        </section>

        <div className="mt-component" />

        {/* Lesson Plan */}
        <section className="bg-bg-primary p-component rounded-lg">
          <Heading level={2}>Lesson Plan</Heading>

          <div className="mt-component">
            <Heading level={3}>Learning Objectives</Heading>
            <ul className="mt-element space-y-2">
              {lessonPlan.objectives?.map((obj: string, i: number) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent-blue font-medium">{i + 1}.</span>
                  <Text as="span">{obj}</Text>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-component">
            <Heading level={3}>Essential Questions</Heading>
            <ul className="mt-element space-y-2">
              {lessonPlan.essentialQuestions?.map((q: string, i: number) => (
                <li key={i} className="pl-4 border-l-2 border-accent-blue">
                  <Text>{q}</Text>
                </li>
              ))}
            </ul>
          </div>

          <Divider spacing="default" />

          {/* Lesson structure blocks */}
          <div className="space-y-element">
            {lessonPlan.warmUp && <LessonBlock title="Warm-Up" duration={lessonPlan.warmUp.duration} content={lessonPlan.warmUp.activity} />}
            {lessonPlan.directInstruction && <LessonBlock title="Direct Instruction" duration={lessonPlan.directInstruction.duration} items={lessonPlan.directInstruction.content} />}
            {lessonPlan.guidedPractice && <LessonBlock title="Guided Practice" duration={lessonPlan.guidedPractice.duration} items={lessonPlan.guidedPractice.activities} />}
            {lessonPlan.independentPractice && <LessonBlock title="Independent Practice" duration={lessonPlan.independentPractice.duration} content={lessonPlan.independentPractice.assignment} />}
            {lessonPlan.closure && <LessonBlock title="Closure" duration={lessonPlan.closure.duration} content={lessonPlan.closure.activity} />}
          </div>

          {lessonPlan.differentiation && (
            <div className="mt-component">
              <Heading level={3}>Differentiation Strategies</Heading>
              <div className="mt-element grid md:grid-cols-3 gap-element">
                {(["struggling", "advanced", "ell"] as const).map((key) => (
                  <div key={key}>
                    <Text size="small" muted className="uppercase tracking-wide">
                      {key === "ell" ? "ELL Support" : key === "struggling" ? "Struggling Learners" : "Advanced Learners"}
                    </Text>
                    <Text size="small" className="mt-1">{lessonPlan.differentiation[key]}</Text>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        <div className="mt-component" />

        {/* Primary Sources */}
        {primarySources && primarySources.length > 0 && (
          <>
            <section className="bg-bg-primary p-component rounded-lg">
              <Heading level={2}>Primary Source Packets</Heading>
              <Text className="mt-element" muted>Expand each source for analysis prompts and teacher narrative.</Text>
              <div className="mt-component space-y-element">
                {primarySources.map((source) => (
                  <PrimarySourceCard key={source.id} {...source} sourceInfo={source.sourceInfo} />
                ))}
              </div>
            </section>
            <div className="mt-component" />
          </>
        )}

        {/* Comparative Assignment */}
        {comparativeAssignment?.title && (
          <>
            <section className="bg-bg-primary p-component rounded-lg">
              <Heading level={2}>{comparativeAssignment.title}</Heading>
              <Text className="mt-element">{comparativeAssignment.description}</Text>
            </section>
            <div className="mt-component" />
          </>
        )}

        {/* Handouts */}
        {handouts && handouts.length > 0 && (
          <>
            <section className="bg-bg-primary p-component rounded-lg">
              <Heading level={2}>Downloadable Handouts</Heading>
              <div className="mt-component grid md:grid-cols-2 gap-element">
                {handouts.map((h) => (
                  <TeacherHandoutCard key={h.title} {...h} />
                ))}
              </div>
            </section>
            <div className="mt-component" />
          </>
        )}

        {/* Quiz */}
        {quiz && quiz.questions?.length > 0 && (
          <>
            <QuizSection title={quiz.title} instructions={quiz.instructions} questions={quiz.questions} />
            <div className="mt-component" />
          </>
        )}

        {/* Standards */}
        {module.standards?.commonCore && (
          <section className="bg-bg-primary p-component rounded-lg">
            <Heading level={2}>Standards Alignment</Heading>
            <Text className="mt-element" size="small" muted>{module.standards.note}</Text>
            <div className="mt-component grid md:grid-cols-2 gap-component">
              <div>
                <Text size="small" muted className="uppercase tracking-wide mb-2">Common Core</Text>
                <ul className="space-y-1">
                  {(module.standards.commonCore as string[]).map((s: string, i: number) => (
                    <li key={i}><Text size="small">{s}</Text></li>
                  ))}
                </ul>
              </div>
              <div>
                <Text size="small" muted className="uppercase tracking-wide mb-2">C3 Framework</Text>
                <ul className="space-y-1">
                  {(module.standards.c3Framework as string[])?.map((s: string, i: number) => (
                    <li key={i}><Text size="small">{s}</Text></li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        <div className="mt-section text-center">
          <Text muted>Questions about these materials? <Link href="/partner">Contact us</Link></Text>
        </div>
      </Container>
    </div>
  );
}

/* Helper component for lesson structure blocks */
function LessonBlock({ title, duration, content, items }: {
  title: string;
  duration: string;
  content?: string;
  items?: string[];
}) {
  return (
    <div className="p-element bg-bg-secondary rounded-lg">
      <div className="flex justify-between items-start">
        <Text className="font-medium">{title}</Text>
        <Text size="small" muted>{duration}</Text>
      </div>
      {content && <Text size="small" className="mt-2">{content}</Text>}
      {items && (
        <ul className="mt-2 space-y-1">
          {items.map((item, i) => <li key={i}><Text size="small">&bull; {item}</Text></li>)}
        </ul>
      )}
    </div>
  );
}
