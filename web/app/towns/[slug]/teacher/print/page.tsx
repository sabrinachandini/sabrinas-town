import { getTeacherModule } from "@/lib/api";
import { recordOrgEvent } from "@/lib/analytics";
import { LessonPlan, Standards } from "@/components/teacher/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function TeacherPrintPage({ params }: PageProps) {
  const { slug } = await params;
  const module = await getTeacherModule(slug);

  void recordOrgEvent(slug, 'PRINT_CLICK');

  if (!module) {
    return <div className="p-8"><h1>Teacher module not found</h1></div>;
  }

  const { town, overview, primarySources, handouts, quiz } = module;
  const lessonPlan = module.lessonPlan as unknown as LessonPlan;
  const standards = module.standards as unknown as Standards;

  return (
    <div className="print-page max-w-[800px] mx-auto p-8">
      {/* Auto-print trigger */}
      <PrintTrigger />

      {/* Cover page */}
      <section className="text-center mb-20 page-break-after print-section">
        <p className="print-only text-xs text-gray-400 mb-8">History is for Everyone &mdash; Teacher Resources</p>
        <h1 className="text-4xl font-bold font-serif">{overview.title}</h1>
        <p className="text-xl mt-4 text-gray-600">{town.name}, {town.state}</p>
        <div className="mt-8 flex justify-center gap-8 text-sm text-gray-500">
          <span>Grade Range: {overview.gradeRange}</span>
          <span>Duration: {overview.estimatedDuration}</span>
        </div>
        <p className="mt-8 max-w-[600px] mx-auto text-sm leading-relaxed">{overview.summary}</p>
        <p className="mt-12 text-xs text-gray-400">History is for Everyone &mdash; American Revolution Tourism Network</p>
      </section>

      {/* Lesson Plan */}
      <section className="print-section mb-16">
        <p className="print-only text-xs text-gray-400 mb-4">History is for Everyone &mdash; Teacher Resources</p>
        <h2 className="text-2xl font-bold font-serif border-b-2 border-gray-300 pb-2">Lesson Plan</h2>

        {lessonPlan.objectives && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Learning Objectives</h3>
            <ol className="mt-2 space-y-1 list-decimal list-inside text-sm">
              {lessonPlan.objectives.map((o, i) => <li key={i}>{o}</li>)}
            </ol>
          </div>
        )}

        {lessonPlan.essentialQuestions && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Essential Questions</h3>
            <ul className="mt-2 space-y-1 text-sm">
              {lessonPlan.essentialQuestions.map((q, i) => (
                <li key={i} className="pl-4 border-l-2 border-gray-400">{q}</li>
              ))}
            </ul>
          </div>
        )}

        {lessonPlan.warmUp && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Warm-Up ({lessonPlan.warmUp.duration})</h3>
            <p className="mt-1 text-sm">{lessonPlan.warmUp.activity}</p>
          </div>
        )}
      </section>

      {/* Primary Sources */}
      {primarySources && primarySources.length > 0 && (
        <section className="print-section mb-16">
          <p className="print-only text-xs text-gray-400 mb-4">History is for Everyone &mdash; Teacher Resources</p>
          <h2 className="text-2xl font-bold font-serif border-b-2 border-gray-300 pb-2">Primary Sources</h2>
          {primarySources.map((source) => (
            <div key={source.id} className="mt-6 page-break-inside-avoid">
              <h3 className="text-lg font-semibold">{source.title}</h3>
              <p className="source-citation text-xs text-gray-500">{source.sourceInfo} &middot; {source.credibilityTier}</p>
              {source.analysisPrompts.length > 0 && (
                <div className="mt-2">
                  <p className="text-xs font-semibold uppercase text-gray-500">Analysis Prompts</p>
                  <ol className="mt-1 space-y-1 list-decimal list-inside text-sm">
                    {source.analysisPrompts.map((p, i) => <li key={i}>{p}</li>)}
                  </ol>
                </div>
              )}
              {source.teacherNarrative && (
                <div className="mt-2">
                  <p className="text-xs font-semibold uppercase text-gray-500">Teacher Narrative</p>
                  <p className="mt-1 text-sm leading-relaxed">{source.teacherNarrative}</p>
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Handouts */}
      {handouts && handouts.length > 0 && (
        <section className="print-section mb-16">
          <p className="print-only text-xs text-gray-400 mb-4">History is for Everyone &mdash; Teacher Resources</p>
          <h2 className="text-2xl font-bold font-serif border-b-2 border-gray-300 pb-2">Handouts</h2>
          {handouts.map((h) => (
            <div key={h.title} className="mt-6 page-break-inside-avoid">
              <h3 className="text-lg font-semibold">{h.title}</h3>
              <p className="text-xs text-gray-500">{h.type.replace("_", " ")}</p>
              <p className="mt-1 text-sm">{h.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Quiz + Answer Key */}
      {quiz && quiz.questions?.length > 0 && (
        <>
          <section className="print-section mb-16">
            <p className="print-only text-xs text-gray-400 mb-4">History is for Everyone &mdash; Teacher Resources</p>
            <h2 className="text-2xl font-bold font-serif border-b-2 border-gray-300 pb-2">{quiz.title}</h2>
            <p className="mt-2 text-sm text-gray-600">{quiz.instructions}</p>
            <div className="mt-4 space-y-6">
              {quiz.questions.map((q, i) => (
                <div key={q.id}>
                  <p className="text-sm font-medium">{i + 1}. {q.question}</p>
                  {q.type === "multiple_choice" && q.options && (
                    <div className="mt-1 ml-6 space-y-1">
                      {q.options.map((opt, j) => (
                        <p key={j} className="text-sm">{String.fromCharCode(65 + j)}. {opt}</p>
                      ))}
                    </div>
                  )}
                  {q.type === "true_false" && <p className="text-sm ml-6 mt-1">True / False</p>}
                  {q.type === "short_answer" && <span className="print-answer-line ml-6 mt-2 min-h-[2.5rem] border-b border-gray-300 block" />}
                </div>
              ))}
            </div>
          </section>

          <section className="print-section mb-16">
            <p className="print-only text-xs text-gray-400 mb-4">History is for Everyone &mdash; Teacher Resources</p>
            <h2 className="text-2xl font-bold font-serif border-b-2 border-gray-300 pb-2">Answer Key</h2>
            <div className="mt-4 space-y-4">
              {quiz.questions.map((q, i) => (
                <div key={q.id} className="text-sm">
                  <p className="font-medium">{i + 1}. {q.correctAnswer}</p>
                  <p className="text-gray-600 mt-0.5">{q.explanation}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Standards */}
      {standards?.commonCore && (
        <section className="print-section mb-16">
          <p className="print-only text-xs text-gray-400 mb-4">History is for Everyone &mdash; Teacher Resources</p>
          <h2 className="text-2xl font-bold font-serif border-b-2 border-gray-300 pb-2">Standards Alignment</h2>
          <div className="mt-4 grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase text-gray-500">Common Core</p>
              <ul className="mt-1 space-y-1 text-xs">
                {standards.commonCore.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-gray-500">C3 Framework</p>
              <ul className="mt-1 space-y-1 text-xs">
                {standards.c3Framework?.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function PrintTrigger() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `window.addEventListener('load', function() { setTimeout(function() { window.print(); }, 1000); });`,
      }}
    />
  );
}
