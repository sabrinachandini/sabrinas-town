import { getTeacherModule, getTown } from "@/lib/api";
import { recordOrgEvent } from "@/lib/analytics";
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
import {
  PageShell,
  PageHeader,
  EditorialSection,
} from "@/components/editorial";

const EDITORIAL_SLUGS = new Set(["boston-ma"]);

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

  if (EDITORIAL_SLUGS.has(slug)) {
    return <EditorialTeacherPage slug={slug} />;
  }

  return <ClassicTeacherPage slug={slug} />;
}

async function EditorialTeacherPage({ slug }: { slug: string }) {
  const [town, teacherModule] = await Promise.all([
    getTown(slug),
    getTeacherModule(slug),
  ]);

  void recordOrgEvent(slug, 'TEACHER_VIEW');

  if (!town) return null;

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

async function ClassicTeacherPage({ slug }: { slug: string }) {
  const module = await getTeacherModule(slug);

  void recordOrgEvent(slug, 'TEACHER_VIEW');

  if (!module) {
    return (
      <EmptyState
        title="Teacher Resources Coming Soon"
        description="Lesson plans, primary source packets, discussion questions, and classroom assessments for this town are being developed."
        townSlug={slug}
      />
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const m = module as any;
  const { town, overview, handouts, quiz, primarySources } = m;
  const lessonPlan = m.lessonPlan;
  const comparativeAssignment = m.comparativeAssignment;
  const contentSource = m.meta?.contentSource || "generated";

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
          <a
            href={`/towns/${slug}/teacher/print`}
            target="_blank"
            rel="noopener noreferrer"
            className="no-print px-4 py-2 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 no-underline text-small font-medium"
          >
            Save as PDF
          </a>
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
          <div className="flex items-center justify-between">
            <Heading level={2}>Lesson Plan</Heading>
            <PrintPacketLink slug={slug} />
          </div>

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
              <div className="flex items-center justify-between">
                <Heading level={2}>Primary Source Packets</Heading>
                <PrintPacketLink slug={slug} />
              </div>
              <Text className="mt-element" muted>Expand each source for analysis prompts and teacher narrative.</Text>
              <div className="mt-component space-y-element">
                {primarySources.map((source: any) => (
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
                {handouts.map((h: any) => (
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
            <div className="flex items-center justify-between mb-2">
              <div />
              <PrintPacketLink slug={slug} />
            </div>
            <QuizSection title={quiz.title} instructions={quiz.instructions} questions={quiz.questions} />
            <div className="mt-component" />
          </>
        )}

        {/* Standards */}
        {m.standards?.commonCore && (
          <section className="bg-bg-primary p-component rounded-lg">
            <Heading level={2}>Standards Alignment</Heading>
            <Text className="mt-element" size="small" muted>{m.standards.note}</Text>
            <div className="mt-component grid md:grid-cols-2 gap-component">
              <div>
                <Text size="small" muted className="uppercase tracking-wide mb-2">Common Core</Text>
                <ul className="space-y-1">
                  {(m.standards.commonCore as string[]).map((s: string, i: number) => (
                    <li key={i}><Text size="small">{s}</Text></li>
                  ))}
                </ul>
              </div>
              <div>
                <Text size="small" muted className="uppercase tracking-wide mb-2">C3 Framework</Text>
                <ul className="space-y-1">
                  {(m.standards.c3Framework as string[])?.map((s: string, i: number) => (
                    <li key={i}><Text size="small">{s}</Text></li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        <div className="mt-section text-center space-y-2">
          <Text muted>Questions about these materials? <Link href="/partner">Contact us</Link></Text>
          <Text size="small" muted>
            See <Link href="/methodology">sources and methodology</Link> for how we research and verify town data.
          </Text>
        </div>
      </Container>
    </div>
  );
}

/* Print packet link — server component, no client JS */
function PrintPacketLink({ slug }: { slug: string }) {
  return (
    <a
      href={`/towns/${slug}/teacher/print`}
      target="_blank"
      rel="noopener noreferrer"
      className="no-print text-small text-text-muted hover:text-accent-blue"
    >
      Print full packet
    </a>
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
