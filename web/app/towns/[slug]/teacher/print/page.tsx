import { getTeacherModule } from "@/lib/api";
import { recordOrgEvent } from "@/lib/analytics";
import { LessonPlan, Standards } from "@/components/teacher/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function StudentHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="ws-student-header">
      <div className="ws-student-header-top">
        <div>
          <span className="ws-label">Unit:</span>
          <span className="ws-unit-title">{title}</span>
          {subtitle && <span className="ws-subtitle"> — {subtitle}</span>}
        </div>
        <span className="ws-brand">History is for Everyone</span>
      </div>
      <div className="ws-student-fields">
        <span className="ws-field">Name: <span className="ws-field-line" /></span>
        <span className="ws-field">Date: <span className="ws-field-line ws-field-line--short" /></span>
        <span className="ws-field">Period: <span className="ws-field-line ws-field-line--short" /></span>
      </div>
    </div>
  );
}

function AnswerLines({ count = 4 }: { count?: number }) {
  return (
    <div className="ws-answer-lines">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="ws-answer-line" />
      ))}
    </div>
  );
}

function SectionHeader({ number, title }: { number?: number | string; title: string }) {
  return (
    <div className="ws-section-header">
      {number != null && <span className="ws-section-num">{number}</span>}
      <h2 className="ws-section-title">{title}</h2>
    </div>
  );
}

export default async function TeacherPrintPage({ params }: PageProps) {
  const { slug } = await params;
  const module = await getTeacherModule(slug);

  void recordOrgEvent(slug, "PRINT_CLICK");

  if (!module) {
    return <div className="p-8"><h1>Teacher module not found</h1></div>;
  }

  const { town, overview, primarySources, handouts, quiz } = module;
  const lessonPlan = module.lessonPlan as unknown as LessonPlan;
  const standards = module.standards as unknown as Standards;

  return (
    <div className="ws-page">
      <PrintTrigger />

      {/* ── Cover ──────────────────────────────────────────── */}
      <section className="ws-cover page-break-after">
        <p className="ws-cover-brand">History is for Everyone · American Revolution Network</p>
        <h1 className="ws-cover-title">{overview.title}</h1>
        <p className="ws-cover-location">{town.name}, {town.state}</p>
        <div className="ws-cover-meta">
          <span>Grade Range: {overview.gradeRange}</span>
          <span className="ws-cover-dot">·</span>
          <span>Duration: {overview.estimatedDuration}</span>
        </div>
        <p className="ws-cover-summary">{overview.summary}</p>

        <div className="ws-cover-contents">
          <p className="ws-contents-label">This Packet Includes</p>
          <ul className="ws-contents-list">
            {lessonPlan?.objectives?.length > 0 && <li>Lesson Plan &amp; Learning Objectives</li>}
            {primarySources?.length > 0 && (
              <li>{primarySources.length} Primary Source Analysis Worksheet{primarySources.length !== 1 ? "s" : ""}</li>
            )}
            {handouts?.length > 0 && (
              <li>{handouts.length} Student Handout{handouts.length !== 1 ? "s" : ""}</li>
            )}
            {quiz?.questions?.length > 0 && (
              <li>Assessment Quiz ({quiz.questions.length} questions)</li>
            )}
            {quiz?.questions?.length > 0 && <li>Answer Key (Teacher Copy)</li>}
            {standards?.commonCore?.length > 0 && <li>Standards Alignment</li>}
          </ul>
        </div>
      </section>

      {/* ── Lesson Plan ─────────────────────────────────────── */}
      {lessonPlan && (
        <section className="ws-sheet print-section">
          <StudentHeader title={overview.title} subtitle="Lesson Overview" />

          {lessonPlan.objectives?.length > 0 && (
            <div className="ws-block">
              <SectionHeader title="Learning Objectives" />
              <p className="ws-directions">By the end of this lesson, students will be able to:</p>
              <ol className="ws-objective-list">
                {lessonPlan.objectives.map((o, i) => <li key={i}>{o}</li>)}
              </ol>
            </div>
          )}

          {lessonPlan.essentialQuestions?.length > 0 && (
            <div className="ws-block">
              <SectionHeader title="Essential Questions" />
              <p className="ws-directions">Keep these questions in mind throughout the unit:</p>
              <ul className="ws-eq-list">
                {lessonPlan.essentialQuestions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>
          )}

          {lessonPlan.warmUp && (
            <div className="ws-block">
              <SectionHeader title={`Warm-Up · ${lessonPlan.warmUp.duration}`} />
              <p className="ws-body">{lessonPlan.warmUp.activity}</p>
            </div>
          )}

          {lessonPlan.differentiation && (
            <div className="ws-block">
              <SectionHeader title="Differentiation Strategies" />
              <div className="ws-diff-grid">
                <div className="ws-diff-cell">
                  <p className="ws-diff-label">Struggling Learners</p>
                  <p className="ws-body">{lessonPlan.differentiation.struggling}</p>
                </div>
                <div className="ws-diff-cell">
                  <p className="ws-diff-label">Advanced Learners</p>
                  <p className="ws-body">{lessonPlan.differentiation.advanced}</p>
                </div>
                <div className="ws-diff-cell">
                  <p className="ws-diff-label">ELL Support</p>
                  <p className="ws-body">{lessonPlan.differentiation.ell}</p>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {/* ── Primary Source Analysis Worksheets ─────────────── */}
      {primarySources?.map((source, si) => (
        <section key={source.id} className="ws-sheet print-section">
          <StudentHeader title={overview.title} subtitle="Primary Source Analysis" />

          <div className="ws-source-label">
            Primary Source {si + 1} of {primarySources.length}
          </div>

          {/* Source context box */}
          <div className="ws-source-box">
            <div className="ws-source-box-header">Document Information</div>
            <div className="ws-source-box-body">
              <div className="ws-source-row">
                <span className="ws-source-key">Document:</span>
                <span className="ws-source-val">{source.title}</span>
              </div>
              <div className="ws-source-row">
                <span className="ws-source-key">Source:</span>
                <span className="ws-source-val">{source.sourceInfo}</span>
              </div>
              <div className="ws-source-row">
                <span className="ws-source-key">Type:</span>
                <span className="ws-source-val">{source.type.replace(/_/g, " ")}</span>
              </div>
              <div className="ws-source-row">
                <span className="ws-source-key">Credibility:</span>
                <span className="ws-source-val">{source.credibilityTier.replace(/_/g, " ")}</span>
              </div>
            </div>
          </div>

          {source.teacherNarrative && (
            <div className="ws-teacher-note">
              <span className="ws-teacher-note-label">Background Context</span>
              <p className="ws-body">{source.teacherNarrative}</p>
            </div>
          )}

          {source.analysisPrompts?.length > 0 && (
            <div className="ws-block">
              <SectionHeader title="Analysis Questions" />
              <p className="ws-directions">
                Read the document carefully, then answer each question in complete sentences.
              </p>
              <ol className="ws-question-list">
                {source.analysisPrompts.map((prompt, pi) => (
                  <li key={pi} className="ws-question-item">
                    <p className="ws-question-text">{prompt}</p>
                    <AnswerLines count={4} />
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="ws-reflection">
            <SectionHeader title="Reflection" />
            <p className="ws-directions">
              How does this source connect to the events in {town.name}, {town.state}?
              What does it reveal about the people involved?
            </p>
            <AnswerLines count={5} />
          </div>
        </section>
      ))}

      {/* ── Student Handouts ────────────────────────────────── */}
      {handouts?.map((h) => (
        <section key={h.title} className="ws-sheet print-section">
          <StudentHeader title={overview.title} subtitle={h.title} />

          <div className="ws-handout-header">
            <h2 className="ws-handout-title">{h.title}</h2>
            <p className="ws-handout-type">{h.type.replace(/_/g, " ")}</p>
          </div>

          {h.description && (
            <p className="ws-directions">{h.description}</p>
          )}

          {h.content && (
            <div
              className="ws-handout-content"
              dangerouslySetInnerHTML={{ __html: renderHandoutContent(h.content) }}
            />
          )}
        </section>
      ))}

      {/* ── Quiz ────────────────────────────────────────────── */}
      {quiz?.questions?.length > 0 && (
        <section className="ws-sheet print-section">
          <StudentHeader title={overview.title} subtitle="Assessment" />

          <div className="ws-quiz-header">
            <h2 className="ws-quiz-title">{quiz.title}</h2>
            <p className="ws-directions">{quiz.instructions}</p>
          </div>

          <ol className="ws-question-list">
            {quiz.questions.map((q, qi) => (
              <li key={q.id} className="ws-question-item">
                <p className="ws-question-text">{qi + 1}.&nbsp; {q.question}</p>

                {q.type === "multiple_choice" && q.options && (
                  <div className="ws-mc-options">
                    {q.options.map((opt, oi) => (
                      <label key={oi} className="ws-mc-option">
                        <span className="ws-mc-bubble">{String.fromCharCode(65 + oi)}</span>
                        <span className="ws-mc-text">{opt}</span>
                      </label>
                    ))}
                  </div>
                )}

                {q.type === "true_false" && (
                  <div className="ws-tf-options">
                    <label className="ws-tf-option">
                      <span className="ws-tf-bubble" /> True
                    </label>
                    <label className="ws-tf-option">
                      <span className="ws-tf-bubble" /> False
                    </label>
                  </div>
                )}

                {q.type === "short_answer" && (
                  <>
                    <p className="ws-answer-label">Answer:</p>
                    <AnswerLines count={4} />
                  </>
                )}
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* ── Answer Key (Teacher Copy) ───────────────────────── */}
      {quiz?.questions?.length > 0 && (
        <section className="ws-sheet ws-answer-key print-section">
          <div className="ws-ak-banner">ANSWER KEY · TEACHER COPY · DO NOT DISTRIBUTE</div>

          <div className="ws-ak-header">
            <h2 className="ws-ak-title">{quiz.title}</h2>
            <p className="ws-ak-subtitle">{overview.title} — {town.name}, {town.state}</p>
          </div>

          <ol className="ws-ak-list">
            {quiz.questions.map((q, qi) => (
              <li key={q.id} className="ws-ak-item">
                <div className="ws-ak-q">
                  <span className="ws-ak-num">{qi + 1}.</span>
                  <span className="ws-ak-qtext">{q.question}</span>
                </div>
                <div className="ws-ak-a">
                  <span className="ws-ak-answer-label">Answer:</span>
                  <span className="ws-ak-answer">{q.correctAnswer}</span>
                </div>
                {q.explanation && (
                  <p className="ws-ak-explanation">{q.explanation}</p>
                )}
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* ── Standards Alignment ─────────────────────────────── */}
      {standards?.commonCore && (
        <section className="ws-sheet print-section">
          <StudentHeader title={overview.title} subtitle="Standards Alignment" />
          <SectionHeader title="Standards Addressed" />
          <div className="ws-standards-grid">
            {standards.commonCore?.length > 0 && (
              <div className="ws-standards-col">
                <p className="ws-standards-label">Common Core ELA</p>
                <ul className="ws-standards-list">
                  {standards.commonCore.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
            )}
            {standards.c3Framework?.length > 0 && (
              <div className="ws-standards-col">
                <p className="ws-standards-label">C3 Framework</p>
                <ul className="ws-standards-list">
                  {standards.c3Framework.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

/**
 * Convert plain-text handout content to basic HTML.
 * Handles: numbered lists, bullet lists, blank lines as paragraphs.
 */
function renderHandoutContent(content: string): string {
  const lines = content.split("\n");
  const out: string[] = [];
  let inList = false;
  let listTag = "";

  const closeList = () => {
    if (inList) { out.push(`</${listTag}>`); inList = false; listTag = ""; }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line) { closeList(); out.push("<br>"); continue; }

    const numbered = line.match(/^(\d+)[.)]\s+(.*)/);
    const bulleted = line.match(/^[-•*]\s+(.*)/);

    if (numbered) {
      if (!inList || listTag !== "ol") { closeList(); out.push('<ol class="ws-content-list">'); inList = true; listTag = "ol"; }
      out.push(`<li>${numbered[2]}</li>`);
    } else if (bulleted) {
      if (!inList || listTag !== "ul") { closeList(); out.push('<ul class="ws-content-list">'); inList = true; listTag = "ul"; }
      out.push(`<li>${bulleted[1]}</li>`);
    } else {
      closeList();
      out.push(`<p class="ws-body">${line}</p>`);
    }
  }
  closeList();
  return out.join("");
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
