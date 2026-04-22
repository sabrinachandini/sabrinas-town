import { getTeacherModule, getTown, getRankings } from "@/lib/api";
import { recordOrgEvent } from "@/lib/analytics";
import { LessonPlan } from "@/components/teacher/types";

export const revalidate = 3600;

export async function generateStaticParams() {
  const towns = await getRankings({ limit: 500 });
  return (towns ?? []).map((t) => ({ slug: t.slug }));
}

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

  const title = `Teach ${module.town.name}`;
  const description = `Complete teacher resources for ${module.town.name}: lesson plans, primary sources, discussion questions, and assessments.`;
  const url = `https://sabrinas-town.vercel.app/towns/${slug}/teacher`;
  return {
    title,
    description,
    openGraph: { title, description, url },
    twitter: { card: "summary_large_image" as const, title, description },
    alternates: { canonical: url },
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
      <div className="bg-[#f2e6c8] min-h-screen flex items-center justify-center">
        <p className="font-ui text-[20px] text-[#14100a]/40">Teacher resources for this town are being developed.</p>
      </div>
    );
  }

  const initial = town.name.charAt(0).toUpperCase();
  const lp = teacherModule?.lessonPlan as unknown as LessonPlan | undefined;

  // Derive "what you'll get" bullets
  const bullets: string[] = [];
  if (lp?.warmUp) bullets.push(`Full lesson plan (${teacherModule!.overview.estimatedDuration})`);
  if ((teacherModule?.primarySources.length ?? 0) > 0) {
    const n = teacherModule!.primarySources.length;
    bullets.push(`${n} primary source${n === 1 ? "" : "s"} with analysis prompts`);
  }
  if ((teacherModule?.quiz?.questions?.length ?? 0) > 0) {
    const n = teacherModule!.quiz.questions.length;
    bullets.push(`Quiz with answer key (${n} question${n === 1 ? "" : "s"})`);
  }
  if (lp?.differentiation) bullets.push("Differentiation strategies (struggling / advanced / ELL)");
  if ((teacherModule?.handouts.length ?? 0) > 0) {
    const n = teacherModule!.handouts.length;
    bullets.push(`${n} printable handout${n === 1 ? "" : "s"}`);
  }

  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="bg-[#1a3a72] border-b-4 border-[#cc3322] py-16 px-8 md:px-16 relative overflow-hidden">
        {/* Ghost watermark */}
        <div
          aria-hidden
          className="absolute right-[-10px] top-[-20px] font-display leading-none pointer-events-none select-none text-white/[0.04]"
          style={{ fontSize: "clamp(160px,30vw,380px)", letterSpacing: "-0.05em" }}
        >
          {initial}
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-6">
            <a href="/teach" className="font-ui text-[11px] uppercase tracking-[0.2em] text-[#f2e6c8]/30 hover:text-[#cc3322] transition-colors no-underline">
              Teach
            </a>
            <span className="text-[#f2e6c8]/20 text-[10px]">/</span>
            <a href={`/towns/${slug}`} className="font-ui text-[11px] uppercase tracking-[0.2em] text-[#f2e6c8]/30 hover:text-[#cc3322] transition-colors no-underline">
              {town.state}
            </a>
            <span className="text-[#f2e6c8]/20 text-[10px]">/</span>
            <span className="font-ui text-[11px] uppercase tracking-[0.2em] text-[#f2e6c8]/50">{town.name}</span>
          </nav>

          <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#cc3322] mb-3">
            Teacher Resources
          </p>
          <h1
            className="font-display text-[#f2e6c8] leading-[0.9] tracking-[-0.02em]"
            style={{ fontSize: "clamp(48px,9vw,110px)" }}
          >
            {town.name}
          </h1>
          <div className="w-12 h-[3px] bg-[#cc3322] my-5" />
          <p className="font-editorial italic font-light text-[21px] text-[#f2e6c8]/60 max-w-[500px] leading-[1.65]">
            {teacherModule
              ? teacherModule.overview.summary
              : `Lesson plans and classroom materials for ${town.name}'s role in the American Revolution.`}
          </p>
        </div>
      </section>

      {teacherModule ? (
        <>
          {/* ── CRIMSON META BAND ──────────────────────────────────── */}
          <section className="bg-[#cc3322] border-b-4 border-[#14100a] py-8 px-8 md:px-16">
            <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-wrap gap-10">
                <div>
                  <p className="font-ui text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1">Grade Range</p>
                  <p className="font-display text-[28px] text-[#f2e6c8] leading-none">{teacherModule.overview.gradeRange}</p>
                </div>
                <div>
                  <p className="font-ui text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1">Duration</p>
                  <p className="font-display text-[28px] text-[#f2e6c8] leading-none">{teacherModule.overview.estimatedDuration}</p>
                </div>
                {bullets.length > 0 && (
                  <div>
                    <p className="font-ui text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1">Included</p>
                    <p className="font-display text-[28px] text-[#f2e6c8] leading-none">{bullets.length} Resources</p>
                  </div>
                )}
              </div>

              <a
                href={`/towns/${slug}/teacher/print`}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline bg-[#f2e6c8] text-[#14100a] font-ui font-bold text-[11px] uppercase tracking-[0.2em] px-7 py-3.5 border-[2.5px] border-[#14100a] hover:bg-[#4A6A9B] transition-colors whitespace-nowrap"
                style={{ boxShadow: "3px 3px 0 #14100a" }}
              >
                Print Full Packet →
              </a>
            </div>
          </section>

          {/* ── WHAT'S INCLUDED + OVERVIEW ─────────────────────────── */}
          <section className="bg-[#f2e6c8] border-b-4 border-[#14100a] py-16 px-8 md:px-16">
            <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-14">
              {/* Left: bullets */}
              <div>
                <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#cc3322] flex items-center gap-2.5 mb-6">
                  <span className="w-4 h-[2px] bg-[#cc3322] block" />
                  What&apos;s Included
                </p>
                <h2
                  className="font-display text-[#14100a] leading-[0.92] tracking-[-0.02em] mb-8"
                  style={{ fontSize: "clamp(32px,4vw,52px)" }}
                >
                  Everything<br />You Need
                </h2>
                <ul className="space-y-4">
                  {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3.5">
                      <span
                        className="flex-shrink-0 w-5 h-5 bg-[#cc3322] flex items-center justify-center mt-0.5"
                        aria-hidden
                      >
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#f2e6c8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="font-ui text-[20px] text-[#14100a]/75 leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: overview + standards */}
              <div>
                <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#cc3322] flex items-center gap-2.5 mb-6">
                  <span className="w-4 h-[2px] bg-[#cc3322] block" />
                  Lesson Overview
                </p>
                <p className="font-editorial italic font-light text-[18px] text-[#14100a]/70 leading-[1.7] mb-8">
                  {teacherModule.overview.summary}
                </p>

                {lp?.essentialQuestions && lp.essentialQuestions.length > 0 && (
                  <div>
                    <p className="font-ui text-[11px] uppercase tracking-[0.2em] text-[#14100a]/40 mb-3">Essential Questions</p>
                    <ul className="space-y-2">
                      {lp.essentialQuestions.slice(0, 3).map((q, i) => (
                        <li key={i} className="font-ui text-[19px] text-[#14100a]/65 leading-relaxed pl-3 border-l-2 border-[#cc3322]/40">
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* ── PRIMARY SOURCES ────────────────────────────────────── */}
          {teacherModule.primarySources.length > 0 && (
            <section className="bg-[#1a3a72] border-b-4 border-[#14100a] py-16 px-8 md:px-16">
              <div className="max-w-[1200px] mx-auto">
                <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#f2e6c8]/40 flex items-center gap-2.5 mb-4">
                  <span className="w-4 h-[2px] bg-[#f2e6c8]/30 block" />
                  Primary Sources
                </p>
                <h2
                  className="font-display text-[#f2e6c8] leading-[0.92] mb-10"
                  style={{ fontSize: "clamp(28px,3.5vw,48px)" }}
                >
                  {teacherModule.primarySources.length} Source{teacherModule.primarySources.length !== 1 ? "s" : ""} for Analysis
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {teacherModule.primarySources.map((source) => (
                    <div key={source.id} className="bg-[#1a3a72]/40 border border-[#f2e6c8]/10 p-5">
                      <p className="font-ui text-[10px] uppercase tracking-[0.15em] text-[#cc3322] mb-2">
                        {source.type.replace(/_/g, " ")} · {source.credibilityTier.replace(/_/g, " ")}
                      </p>
                      <p className="font-editorial text-[19px] text-[#f2e6c8]/90 leading-snug mb-2">
                        {source.title}
                      </p>
                      <p className="font-ui text-[11px] text-[#f2e6c8]/40 leading-relaxed">
                        {source.sourceInfo}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── LESSON PLAN PREVIEW ────────────────────────────────── */}
          {lp && (lp.objectives?.length > 0 || lp.warmUp) && (
            <section className="bg-[#f2e6c8] border-b-4 border-[#14100a] py-16 px-8 md:px-16">
              <div className="max-w-[1200px] mx-auto">
                <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#cc3322] flex items-center gap-2.5 mb-4">
                  <span className="w-4 h-[2px] bg-[#cc3322] block" />
                  Lesson Plan
                </p>
                <h2
                  className="font-display text-[#14100a] leading-[0.92] mb-10"
                  style={{ fontSize: "clamp(28px,3.5vw,48px)" }}
                >
                  In the Classroom
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                  {/* Objectives */}
                  {lp.objectives && lp.objectives.length > 0 && (
                    <div>
                      <p className="font-ui text-[11px] uppercase tracking-[0.2em] text-[#14100a]/40 mb-4 border-b border-[#14100a]/10 pb-2">
                        Learning Objectives
                      </p>
                      <ol className="space-y-3">
                        {lp.objectives.map((obj, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="font-display text-[22px] text-[#cc3322]/40 leading-none flex-shrink-0 w-6 text-right">
                              {i + 1}
                            </span>
                            <span className="font-ui text-[19px] text-[#14100a]/70 leading-relaxed">{obj}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* Procedure highlights */}
                  <div className="space-y-4">
                    {lp.warmUp && (
                      <div className="border-l-3 border-[#cc3322] pl-4 border-l-[3px]">
                        <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-[#cc3322] mb-1">
                          Warm-Up · {lp.warmUp.duration}
                        </p>
                        <p className="font-ui text-[19px] text-[#14100a]/65 leading-relaxed">{lp.warmUp.activity}</p>
                      </div>
                    )}
                    {lp.directInstruction && (
                      <div className="border-l-[3px] border-[#1a3a72] pl-4">
                        <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-[#1a3a72] mb-1">
                          Direct Instruction · {lp.directInstruction.duration}
                        </p>
                        {lp.directInstruction.content?.slice(0, 2).map((item, i) => (
                          <p key={i} className="font-ui text-[19px] text-[#14100a]/65 leading-relaxed">· {item}</p>
                        ))}
                      </div>
                    )}
                    {lp.closure && (
                      <div className="border-l-[3px] border-[#14100a]/20 pl-4">
                        <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-[#14100a]/40 mb-1">
                          Closure · {lp.closure.duration}
                        </p>
                        <p className="font-ui text-[19px] text-[#14100a]/65 leading-relaxed">{lp.closure.activity}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Differentiation */}
                {lp.differentiation && (
                  <div className="mt-12 pt-8 border-t border-[#14100a]/10">
                    <p className="font-ui text-[11px] uppercase tracking-[0.2em] text-[#14100a]/40 mb-5">
                      Differentiation Strategies
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {[
                        { label: "Struggling Learners", text: lp.differentiation.struggling },
                        { label: "Advanced Learners", text: lp.differentiation.advanced },
                        { label: "ELL Support", text: lp.differentiation.ell },
                      ].map((d) => (
                        <div key={d.label} className="bg-[#1a3a72]/5 border border-[#14100a]/8 p-4">
                          <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#1a3a72] font-bold mb-2">{d.label}</p>
                          <p className="font-ui text-[12px] text-[#14100a]/60 leading-relaxed">{d.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ── QUIZ PREVIEW ───────────────────────────────────────── */}
          {teacherModule.quiz?.questions?.length > 0 && (
            <section className="bg-[#1a3a72] border-b-4 border-[#14100a] py-16 px-8 md:px-16">
              <div className="max-w-[1200px] mx-auto">
                <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#cc3322] flex items-center gap-2.5 mb-4">
                  <span className="w-4 h-[2px] bg-[#cc3322] block" />
                  Assessment
                </p>
                <h2
                  className="font-display text-[#f2e6c8] leading-[0.92] mb-2"
                  style={{ fontSize: "clamp(28px,3.5vw,48px)" }}
                >
                  {teacherModule.quiz.title}
                </h2>
                <p className="font-ui text-[12px] text-[#f2e6c8]/40 mb-8">{teacherModule.quiz.instructions}</p>

                <div className="space-y-4">
                  {teacherModule.quiz.questions.slice(0, 3).map((q, qi) => (
                    <div key={q.id} className="bg-[#f2e6c8]/5 border border-[#f2e6c8]/8 p-5 flex gap-4">
                      <span className="font-display text-[28px] text-[#cc3322]/50 leading-none flex-shrink-0 w-8">{qi + 1}</span>
                      <div>
                        <p className="font-ui text-[19px] text-[#f2e6c8]/80 leading-relaxed mb-1">{q.question}</p>
                        <p className="font-ui text-[11px] uppercase tracking-[0.12em] text-[#f2e6c8]/25">
                          {q.type.replace(/_/g, " ")}
                        </p>
                      </div>
                    </div>
                  ))}
                  {teacherModule.quiz.questions.length > 3 && (
                    <p className="font-ui text-[11px] text-[#f2e6c8]/25 pl-12">
                      + {teacherModule.quiz.questions.length - 3} more question{teacherModule.quiz.questions.length > 4 ? "s" : ""} in the full packet
                    </p>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* ── PRINT CTA ──────────────────────────────────────────── */}
          <section className="bg-[#cc3322] py-16 px-8 md:px-16">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <p className="font-display text-[#f2e6c8] leading-none mb-2" style={{ fontSize: "clamp(28px,4vw,52px)" }}>
                  Ready to Print?
                </p>
                <p className="font-editorial italic font-light text-[20px] text-[#f2e6c8]/65 max-w-[440px] leading-relaxed">
                  The full teacher packet includes cover page, lesson plan, all primary source worksheets, quiz, answer key, and standards alignment — formatted for classroom printing.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={`/towns/${slug}/teacher/print`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline bg-[#f2e6c8] text-[#14100a] font-ui font-bold text-[11px] uppercase tracking-[0.2em] px-8 py-4 border-[2.5px] border-[#14100a] hover:bg-[#4A6A9B] transition-colors whitespace-nowrap text-center"
                  style={{ boxShadow: "4px 4px 0 #14100a" }}
                >
                  Student Copy →
                </a>
                <a
                  href={`/towns/${slug}/teacher/print?mode=teacher`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline border border-[#f2e6c8]/30 text-[#f2e6c8]/70 font-ui text-[11px] uppercase tracking-[0.2em] px-8 py-3 hover:border-[#f2e6c8] hover:text-[#f2e6c8] transition-colors whitespace-nowrap text-center"
                >
                  Teacher Copy (with Answer Key) →
                </a>
                <a
                  href={`/towns/${slug}`}
                  className="no-underline font-ui text-[11px] uppercase tracking-[0.18em] text-[#f2e6c8]/40 text-center hover:text-[#f2e6c8] transition-colors"
                >
                  ← Back to {town.name}
                </a>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* ── NO MODULE STATE ───────────────────────────────────────── */
        <section className="bg-[#f2e6c8] py-20 px-8 md:px-16">
          <div className="max-w-[720px] mx-auto">
            <div className="w-12 h-[3px] bg-[#cc3322] mb-8" />
            <p className="font-editorial italic text-[20px] text-[#14100a]/60 leading-relaxed mb-8">
              Teacher resources for {town.name} are currently being developed. Check back soon — or explore what&apos;s already available for other towns.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/teach"
                className="no-underline font-ui text-[10px] uppercase tracking-[0.18em] text-[#14100a] border border-[#14100a]/20 px-6 py-3 hover:border-[#cc3322] hover:text-[#cc3322] transition-colors"
              >
                Browse All Teacher Resources →
              </a>
              <a
                href={`/towns/${slug}`}
                className="no-underline font-ui text-[10px] uppercase tracking-[0.18em] text-[#14100a]/50 border border-[#14100a]/10 px-6 py-3 hover:border-[#14100a]/30 transition-colors"
              >
                ← Explore {town.name}
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
