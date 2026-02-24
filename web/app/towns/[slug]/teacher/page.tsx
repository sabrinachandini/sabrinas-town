import { notFound } from "next/navigation";
import { getTeacherModule } from "@/lib/api";
import {
  Container,
  Heading,
  Text,
  Link,
  Button,
  Divider,
} from "@/components/ui";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const module = await getTeacherModule(slug);

  if (!module) {
    return { title: "Teacher Module Not Found" };
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
    notFound();
  }

  const { town, overview, lessonPlan, comparativeAssignment, handouts, quiz } =
    module;

  return (
    <main className="bg-bg-secondary min-h-screen">
      {/* Header */}
      <div className="bg-bg-primary py-component border-b border-border-light">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <Text size="small" muted className="uppercase tracking-wide">
                Teacher Module
              </Text>
              <Heading level={1} className="mt-1">
                {town.name}, {town.state}
              </Heading>
            </div>
            <div className="flex gap-3">
              <Link href={`/towns/${town.slug}`}>← Back to Town</Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="py-section">
        <Container>
          {/* Overview */}
          <section className="bg-bg-primary p-component rounded-lg">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <Text
                  size="small"
                  muted
                  className="uppercase tracking-wide mb-2"
                >
                  Lesson Overview
                </Text>
                <Heading level={2}>{overview.title}</Heading>
              </div>
              <div className="flex flex-wrap gap-4 text-small">
                <div>
                  <Text size="small" muted>
                    Grade Range
                  </Text>
                  <Text className="font-medium">{overview.gradeRange}</Text>
                </div>
                <div>
                  <Text size="small" muted>
                    Duration
                  </Text>
                  <Text className="font-medium">
                    {overview.estimatedDuration}
                  </Text>
                </div>
              </div>
            </div>

            <Text className="mt-element">{overview.summary}</Text>
          </section>

          <div className="mt-component" />

          {/* Lesson Plan */}
          <section className="bg-bg-primary p-component rounded-lg">
            <Heading level={2}>Lesson Plan</Heading>

            {/* Objectives */}
            <div className="mt-component">
              <Heading level={3}>Learning Objectives</Heading>
              <ul className="mt-element space-y-2">
                {lessonPlan.objectives.map(
                  (objective: string, i: number) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-accent-blue font-medium">
                        {i + 1}.
                      </span>
                      <Text as="span">{objective}</Text>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Essential Questions */}
            <div className="mt-component">
              <Heading level={3}>Essential Questions</Heading>
              <ul className="mt-element space-y-2">
                {lessonPlan.essentialQuestions.map(
                  (question: string, i: number) => (
                    <li
                      key={i}
                      className="pl-4 border-l-2 border-accent-blue"
                    >
                      <Text>{question}</Text>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Materials */}
            <div className="mt-component">
              <Heading level={3}>Materials Needed</Heading>
              <ul className="mt-element grid md:grid-cols-2 gap-2">
                {lessonPlan.materials.map((material: string, i: number) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent-blue">•</span>
                    <Text as="span" size="small">
                      {material}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>

            <Divider spacing="default" />

            {/* Lesson Structure */}
            <div className="space-y-element">
              {/* Warm Up */}
              <div className="p-element bg-bg-secondary rounded-lg">
                <div className="flex justify-between items-start">
                  <Text className="font-medium">Warm-Up</Text>
                  <Text size="small" muted>
                    {lessonPlan.warmUp.duration}
                  </Text>
                </div>
                <Text size="small" className="mt-2">
                  {lessonPlan.warmUp.activity}
                </Text>
              </div>

              {/* Direct Instruction */}
              <div className="p-element bg-bg-secondary rounded-lg">
                <div className="flex justify-between items-start">
                  <Text className="font-medium">Direct Instruction</Text>
                  <Text size="small" muted>
                    {lessonPlan.directInstruction.duration}
                  </Text>
                </div>
                <ul className="mt-2 space-y-1">
                  {lessonPlan.directInstruction.content.map(
                    (item: string, i: number) => (
                      <li key={i}>
                        <Text size="small">• {item}</Text>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Guided Practice */}
              <div className="p-element bg-bg-secondary rounded-lg">
                <div className="flex justify-between items-start">
                  <Text className="font-medium">Guided Practice</Text>
                  <Text size="small" muted>
                    {lessonPlan.guidedPractice.duration}
                  </Text>
                </div>
                <ul className="mt-2 space-y-1">
                  {lessonPlan.guidedPractice.activities.map(
                    (item: string, i: number) => (
                      <li key={i}>
                        <Text size="small">• {item}</Text>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Independent Practice */}
              <div className="p-element bg-bg-secondary rounded-lg">
                <div className="flex justify-between items-start">
                  <Text className="font-medium">Independent Practice</Text>
                  <Text size="small" muted>
                    {lessonPlan.independentPractice.duration}
                  </Text>
                </div>
                <Text size="small" className="mt-2">
                  {lessonPlan.independentPractice.assignment}
                </Text>
              </div>

              {/* Closure */}
              <div className="p-element bg-bg-secondary rounded-lg">
                <div className="flex justify-between items-start">
                  <Text className="font-medium">Closure</Text>
                  <Text size="small" muted>
                    {lessonPlan.closure.duration}
                  </Text>
                </div>
                <Text size="small" className="mt-2">
                  {lessonPlan.closure.activity}
                </Text>
              </div>
            </div>

            {/* Differentiation */}
            <div className="mt-component">
              <Heading level={3}>Differentiation Strategies</Heading>
              <div className="mt-element grid md:grid-cols-3 gap-element">
                <div>
                  <Text size="small" muted className="uppercase tracking-wide">
                    Struggling Learners
                  </Text>
                  <Text size="small" className="mt-1">
                    {lessonPlan.differentiation.struggling}
                  </Text>
                </div>
                <div>
                  <Text size="small" muted className="uppercase tracking-wide">
                    Advanced Learners
                  </Text>
                  <Text size="small" className="mt-1">
                    {lessonPlan.differentiation.advanced}
                  </Text>
                </div>
                <div>
                  <Text size="small" muted className="uppercase tracking-wide">
                    ELL Support
                  </Text>
                  <Text size="small" className="mt-1">
                    {lessonPlan.differentiation.ell}
                  </Text>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-component" />

          {/* Comparative Assignment */}
          <section className="bg-bg-primary p-component rounded-lg">
            <Heading level={2}>{comparativeAssignment.title}</Heading>
            <Text className="mt-element">{comparativeAssignment.description}</Text>

            <div className="mt-component">
              <Text
                size="small"
                muted
                className="uppercase tracking-wide mb-element"
              >
                Compare With
              </Text>
              <div className="space-y-element">
                {comparativeAssignment.compareTowns.map(
                  (town: {
                    townId: string;
                    townName: string;
                    comparisonPoints: string[];
                  }) => (
                    <div
                      key={town.townId}
                      className="p-element bg-bg-secondary rounded-lg"
                    >
                      <Text className="font-medium">{town.townName}</Text>
                      <ul className="mt-2 space-y-1">
                        {town.comparisonPoints.map((point, i) => (
                          <li key={i}>
                            <Text size="small">• {point}</Text>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Rubric */}
            <div className="mt-component">
              <Text
                size="small"
                muted
                className="uppercase tracking-wide mb-element"
              >
                Assessment Rubric
              </Text>
              <div className="overflow-x-auto">
                <table className="w-full text-small">
                  <thead>
                    <tr className="border-b border-border-light">
                      <th className="text-left py-2 pr-4 font-medium">
                        Criteria
                      </th>
                      <th className="text-left py-2 pr-4 font-medium text-accent-blue">
                        Excellent
                      </th>
                      <th className="text-left py-2 pr-4 font-medium">
                        Proficient
                      </th>
                      <th className="text-left py-2 font-medium text-text-muted">
                        Developing
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparativeAssignment.rubric.map(
                      (
                        row: {
                          criteria: string;
                          excellent: string;
                          proficient: string;
                          developing: string;
                        },
                        i: number
                      ) => (
                        <tr key={i} className="border-b border-border-light">
                          <td className="py-2 pr-4 font-medium">
                            {row.criteria}
                          </td>
                          <td className="py-2 pr-4">{row.excellent}</td>
                          <td className="py-2 pr-4">{row.proficient}</td>
                          <td className="py-2 text-text-muted">
                            {row.developing}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <div className="mt-component" />

          {/* Handouts */}
          <section className="bg-bg-primary p-component rounded-lg">
            <Heading level={2}>Downloadable Handouts</Heading>
            <Text className="mt-element" muted>
              Ready-to-print materials for classroom use.
            </Text>

            <div className="mt-component grid md:grid-cols-2 gap-element">
              {handouts.map(
                (handout: {
                  title: string;
                  type: string;
                  description: string;
                }) => (
                  <div
                    key={handout.title}
                    className="p-element bg-bg-secondary rounded-lg"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <Text className="font-medium">{handout.title}</Text>
                        <Text size="small" muted className="mt-1">
                          {handout.type.replace("_", " ")}
                        </Text>
                      </div>
                      <Button variant="secondary" size="small">
                        Download
                      </Button>
                    </div>
                    <Text size="small" className="mt-element">
                      {handout.description}
                    </Text>
                  </div>
                )
              )}
            </div>
          </section>

          <div className="mt-component" />

          {/* Quiz */}
          <section className="bg-bg-primary p-component rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <Heading level={2}>{quiz.title}</Heading>
                <Text className="mt-2" muted>
                  {quiz.instructions}
                </Text>
              </div>
              <Button variant="secondary" size="small">
                Download Quiz
              </Button>
            </div>

            <div className="mt-component space-y-component">
              {quiz.questions.map(
                (
                  q: {
                    id: number;
                    type: string;
                    question: string;
                    options?: string[];
                    correctAnswer: string;
                    explanation: string;
                  },
                  i: number
                ) => (
                  <div
                    key={q.id}
                    className="p-element bg-bg-secondary rounded-lg"
                  >
                    <div className="flex gap-3">
                      <span className="text-accent-blue font-medium">
                        {i + 1}.
                      </span>
                      <div className="flex-1">
                        <Text className="font-medium">{q.question}</Text>

                        {q.type === "multiple_choice" && q.options && (
                          <div className="mt-element space-y-2">
                            {q.options.map((opt, j) => (
                              <div key={j} className="flex items-center gap-2">
                                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-border-light text-small">
                                  {String.fromCharCode(65 + j)}
                                </span>
                                <Text size="small">{opt}</Text>
                              </div>
                            ))}
                          </div>
                        )}

                        {q.type === "true_false" && (
                          <div className="mt-element flex gap-4">
                            <div className="flex items-center gap-2">
                              <span className="w-6 h-6 flex items-center justify-center rounded-full border border-border-light text-small">
                                T
                              </span>
                              <Text size="small">True</Text>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-6 h-6 flex items-center justify-center rounded-full border border-border-light text-small">
                                F
                              </span>
                              <Text size="small">False</Text>
                            </div>
                          </div>
                        )}

                        {q.type === "short_answer" && (
                          <div className="mt-element">
                            <div className="h-16 border border-border-light rounded bg-bg-primary" />
                          </div>
                        )}

                        <details className="mt-element">
                          <summary className="text-small text-accent-blue cursor-pointer">
                            Show answer
                          </summary>
                          <div className="mt-2 p-element bg-bg-primary rounded">
                            <Text size="small">
                              <span className="font-medium">Answer:</span>{" "}
                              {q.correctAnswer}
                            </Text>
                            <Text size="small" muted className="mt-1">
                              {q.explanation}
                            </Text>
                          </div>
                        </details>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </section>

          <div className="mt-component" />

          {/* Standards Alignment */}
          {module.standards && (
            <section className="bg-bg-primary p-component rounded-lg">
              <Heading level={2}>Standards Alignment</Heading>
              <Text className="mt-element" size="small" muted>
                {module.standards.note}
              </Text>

              <div className="mt-component grid md:grid-cols-2 gap-component">
                <div>
                  <Text
                    size="small"
                    muted
                    className="uppercase tracking-wide mb-2"
                  >
                    Common Core (ELA/Literacy)
                  </Text>
                  <ul className="space-y-1">
                    {module.standards.commonCore.map(
                      (standard: string, i: number) => (
                        <li key={i}>
                          <Text size="small">{standard}</Text>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <Text
                    size="small"
                    muted
                    className="uppercase tracking-wide mb-2"
                  >
                    C3 Framework
                  </Text>
                  <ul className="space-y-1">
                    {module.standards.c3Framework.map(
                      (standard: string, i: number) => (
                        <li key={i}>
                          <Text size="small">{standard}</Text>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Footer CTA */}
          <div className="mt-section text-center">
            <Text muted>
              Questions about these materials?{" "}
              <Link href="/contact">Contact us</Link>
            </Text>
          </div>
        </Container>
      </div>
    </main>
  );
}
