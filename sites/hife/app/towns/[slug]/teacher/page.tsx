import { getTeacherModule, getTown, getRankings } from "@/lib/api";
import { recordOrgEvent } from "@/lib/analytics";
import { LessonPlan, Standards } from "@/components/teacher/types";
import { PrintButtons } from "@/components/teacher/PrintButtons";

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

// ─── Confidence tier helper ───────────────────────────────────────────────────

function tierToConfidence(tier: string): {
  label: string;
  icon: string;
  short: string;
} {
  switch (tier) {
    case "TIER1":
      return { label: "Verified (Tier 1)", icon: "✓", short: "Verified" };
    case "TIER2":
      return { label: "Secondary (Tier 2)", icon: "◎", short: "Secondary" };
    case "TIER3":
      return { label: "Reference (Tier 3)", icon: "△", short: "Reference" };
    default:
      return { label: "Not Yet Evaluated", icon: "?", short: "Pending" };
  }
}

// ─── Standards status summary ─────────────────────────────────────────────────

function standardsStatus(standards: Standards | undefined): {
  label: string;
  color: string;
} {
  if (!standards) return { label: "Standards not listed", color: "text-[#f2e6c8]/40" };
  const hasCCSS = standards.commonCore && standards.commonCore.length > 0;
  const hasC3 = standards.c3Framework && standards.c3Framework.length > 0;
  if (hasCCSS && hasC3) return { label: "CCSS + C3 Aligned", color: "text-[#f2e6c8]/80" };
  if (hasCCSS) return { label: "CCSS Aligned", color: "text-[#f2e6c8]/80" };
  if (hasC3) return { label: "C3 Aligned", color: "text-[#f2e6c8]/80" };
  return { label: "Alignment listed", color: "text-[#f2e6c8]/50" };
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
        <p className="font-ui text-[20px] text-[#14100a]/40">
          Teacher resources for this town are being developed.
        </p>
      </div>
    );
  }

  const initial = town.name.charAt(0).toUpperCase();
  const lp = teacherModule?.lessonPlan as unknown as LessonPlan | undefined;
  const standards = teacherModule?.standards as unknown as Standards | undefined;
  const stdStatus = standardsStatus(standards);

  // Confidence breakdown from primary sources
  const sources = teacherModule?.primarySources ?? [];
  const confidenceCounts = sources.reduce<Record<string, number>>(
    (acc, s) => {
      const k = s.credibilityTier ?? "TODO";
      acc[k] = (acc[k] ?? 0) + 1;
      return acc;
    },
    {}
  );

  // Estimated packet pages: cover + 1 per source + writing page
  const packetPages = sources.length > 0 ? sources.length + 2 : null;

  // Inquiry question: first essential question or fall back to summary
  const inquiryQuestion =
    (lp?.essentialQuestions && lp.essentialQuestions[0]) ??
    teacherModule?.overview.summary ??
    `What was ${town.name}'s role in the American Revolution?`;

  // Related towns from comparative assignment
  const relatedTowns = teacherModule?.relatedTowns ?? [];

  // Content source badge
  const isGenerated = teacherModule?.meta?.contentSource === "generated";

  return (
    <div>
      {/* ── HERO — 30-second decision starts here ─────────────────── */}
      <section className="bg-[#1a3a72] border-b-4 border-[#14100a] py-14 px-8 md:px-16 relative overflow-hidden">
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
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-6">
            <a
              href="/teach"
              className="font-ui text-[11px] uppercase tracking-[0.2em] text-[#f2e6c8]/30 hover:text-[#f2e6c8] transition-colors no-underline focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a3a72] rounded-sm"
            >
              Teach
            </a>
            <span className="text-[#f2e6c8]/20 text-[10px]" aria-hidden>/</span>
            <span className="font-ui text-[11px] uppercase tracking-[0.2em] text-[#f2e6c8]/50">
              {town.name}
            </span>
          </nav>

          {/* Eyebrow */}
          <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#cc3322] mb-3">
            Teacher Resources
          </p>

          <h1
            className="font-display text-[#f2e6c8] leading-[0.9] tracking-[-0.02em] mb-5"
            style={{ fontSize: "clamp(48px,9vw,110px)" }}
          >
            {town.name}
          </h1>

          {/* Inquiry question */}
          {inquiryQuestion && (
            <div className="mb-6 max-w-[640px]">
              <p className="font-ui text-[10px] uppercase tracking-[0.2em] text-[#f2e6c8]/35 mb-2">
                Inquiry Question
              </p>
              <p className="font-editorial italic font-light text-[20px] text-[#f2e6c8]/85 leading-[1.55]">
                {inquiryQuestion}
              </p>
            </div>
          )}

          {/* Key badges row */}
          {teacherModule && (
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="font-ui text-[11px] font-semibold tracking-[0.15em] uppercase bg-[#f2e6c8]/10 border border-[#f2e6c8]/20 text-[#f2e6c8]/80 px-3 py-1.5">
                Grades {teacherModule.overview.gradeRange}
              </span>
              <span className="font-ui text-[11px] font-semibold tracking-[0.15em] uppercase bg-[#f2e6c8]/10 border border-[#f2e6c8]/20 text-[#f2e6c8]/80 px-3 py-1.5">
                {teacherModule.overview.estimatedDuration}
              </span>
              <span className={`font-ui text-[11px] font-semibold tracking-[0.15em] uppercase bg-[#f2e6c8]/10 border border-[#f2e6c8]/20 px-3 py-1.5 ${stdStatus.color}`}>
                {stdStatus.label}
              </span>
              {isGenerated && (
                <span className="font-ui text-[11px] font-semibold tracking-[0.15em] uppercase bg-[#C8A24A]/20 border border-[#C8A24A]/30 text-[#C8A24A] px-3 py-1.5">
                  Template-Generated · Needs Review
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {teacherModule ? (
        <>
          {/* ── AT-A-GLANCE ROW ────────────────────────────────────── */}
          <section className="bg-[#cc3322] border-b-4 border-[#14100a] py-7 px-8 md:px-16">
            <div className="max-w-[1200px] mx-auto">
              <div className="flex flex-wrap items-center gap-0 divide-x divide-white/20">
                {/* Source count */}
                <div className="pr-8 sm:pr-12">
                  <div className="font-display text-white leading-none" style={{ fontSize: "clamp(28px,5vw,52px)" }}>
                    {sources.length}
                  </div>
                  <div className="font-ui text-[10px] font-semibold tracking-[0.14em] uppercase text-white/70 mt-0.5">
                    Primary Source{sources.length !== 1 ? "s" : ""}
                  </div>
                </div>

                {/* Confidence breakdown */}
                {Object.entries(confidenceCounts).length > 0 && (
                  <div className="px-8 sm:px-12">
                    <div className="font-ui text-[10px] font-semibold tracking-[0.14em] uppercase text-white/70 mb-1.5">
                      Source Quality
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(confidenceCounts).map(([tier, count]) => {
                        const conf = tierToConfidence(tier);
                        return (
                          <span
                            key={tier}
                            className="font-ui text-[11px] font-bold text-white bg-white/15 px-2 py-0.5"
                            title={conf.label}
                          >
                            {conf.icon} {count} {conf.short}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Packet pages */}
                {packetPages && (
                  <div className="px-8 sm:px-12">
                    <div className="font-display text-white leading-none" style={{ fontSize: "clamp(28px,5vw,52px)" }}>
                      ~{packetPages}
                    </div>
                    <div className="font-ui text-[10px] font-semibold tracking-[0.14em] uppercase text-white/70 mt-0.5">
                      Packet Pages
                    </div>
                  </div>
                )}

                {/* Handouts */}
                {teacherModule.handouts.length > 0 && (
                  <div className="px-8 sm:px-12">
                    <div className="font-display text-white leading-none" style={{ fontSize: "clamp(28px,5vw,52px)" }}>
                      {teacherModule.handouts.length}
                    </div>
                    <div className="font-ui text-[10px] font-semibold tracking-[0.14em] uppercase text-white/70 mt-0.5">
                      Handout{teacherModule.handouts.length !== 1 ? "s" : ""}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* ── SOURCE LIST ─────────────────────────────────────────── */}
          {sources.length > 0 && (
            <section className="bg-[#f2ece0] border-b-4 border-[#14100a] py-12 px-8 md:px-16">
              <div className="max-w-[1200px] mx-auto">
                <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#B53A29] flex items-center gap-2.5 mb-2">
                  <span className="w-4 h-[2px] bg-[#cc3322] block" aria-hidden />
                  Primary Sources
                </p>
                <h2
                  className="font-display text-[#14100a] leading-[0.92] mb-8"
                  style={{ fontSize: "clamp(24px,3vw,44px)" }}
                >
                  What Teachers and Students Use
                </h2>

                <div className="divide-y divide-[#14100a]/8">
                  {sources.map((source, i) => {
                    const conf = tierToConfidence(source.credibilityTier);
                    return (
                      <div
                        key={source.id}
                        className="py-5 grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] gap-4 sm:gap-6 items-start"
                      >
                        {/* Confidence icon */}
                        <div className="flex items-center gap-2">
                          <span
                            className="font-ui text-[16px] font-bold text-[#14100a]/50 w-6 text-center"
                            title={conf.label}
                            aria-label={conf.label}
                          >
                            {conf.icon}
                          </span>
                          <span className="font-ui text-[10px] uppercase tracking-[0.12em] text-[#14100a]/40 whitespace-nowrap hidden sm:block">
                            {conf.short}
                          </span>
                        </div>

                        {/* Source info */}
                        <div>
                          <p className="font-editorial text-[18px] text-[#14100a] leading-snug mb-0.5">
                            {source.title}
                          </p>
                          <p className="font-ui text-[11px] text-[#14100a]/50">
                            {source.type.replace(/_/g, " ")}
                            {source.sourceInfo ? ` · ${source.sourceInfo}` : ""}
                          </p>
                          {source.analysisPrompts && source.analysisPrompts.length > 0 && (
                            <p className="font-ui text-[11px] text-[#14100a]/35 mt-1">
                              {source.analysisPrompts.length} analysis prompt{source.analysisPrompts.length !== 1 ? "s" : ""}
                            </p>
                          )}
                        </div>

                        {/* External link */}
                        {source.url && (
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-underline inline-flex items-center gap-1.5 font-ui text-[10px] uppercase tracking-[0.15em] text-[#14100a]/40 border border-[#14100a]/15 px-3 py-1.5 hover:text-[#14100a] hover:border-[#14100a]/30 transition-colors self-start whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#1a3a72] focus-visible:ring-offset-2 rounded-sm"
                          >
                            View Source
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* ── DOWNLOAD ROW ────────────────────────────────────────── */}
          <section className="bg-[#1a3a72] border-b-4 border-[#14100a] py-10 px-8 md:px-16">
            <div className="max-w-[1200px] mx-auto">
              <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#f2e6c8]/40 flex items-center gap-2.5 mb-4">
                <span className="w-4 h-[2px] bg-[#f2e6c8]/30 block" aria-hidden />
                Downloads
              </p>
              <h2
                className="font-display text-[#f2e6c8] leading-[0.92] mb-6"
                style={{ fontSize: "clamp(24px,3vw,44px)" }}
              >
                Ready to Print
              </h2>
              <p className="font-editorial italic font-light text-[18px] text-[#f2e6c8]/55 mb-7 max-w-[480px] leading-[1.65]">
                Student packet, teacher guide with answer key, and quiz — each formatted for classroom printing.
              </p>

              <PrintButtons slug={slug} showAll />

              <p className="font-ui text-[10px] text-[#f2e6c8]/25 mt-4">
                Opens in a new tab. Use your browser&apos;s Print dialog (Ctrl+P / Cmd+P) and choose &ldquo;Save as PDF.&rdquo;
              </p>
            </div>
          </section>

          {/* ── LESSON OVERVIEW ─────────────────────────────────────── */}
          {lp && (lp.objectives?.length > 0 || lp.warmUp) && (
            <section className="bg-[#f2ece0] border-b-4 border-[#14100a] py-14 px-8 md:px-16">
              <div className="max-w-[1200px] mx-auto">
                <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#B53A29] flex items-center gap-2.5 mb-2">
                  <span className="w-4 h-[2px] bg-[#cc3322] block" aria-hidden />
                  Lesson Plan
                </p>
                <h2
                  className="font-display text-[#14100a] leading-[0.92] mb-8"
                  style={{ fontSize: "clamp(24px,3vw,44px)" }}
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
                            <span className="font-ui text-[18px] text-[#14100a]/70 leading-relaxed">
                              {obj}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* Procedure highlights */}
                  <div className="space-y-4">
                    {lp.warmUp && (
                      <div className="border-l-[3px] border-[#cc3322] pl-4">
                        <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-[#B53A29] mb-1">
                          Warm-Up · {lp.warmUp.duration}
                        </p>
                        <p className="font-ui text-[18px] text-[#14100a]/65 leading-relaxed">
                          {lp.warmUp.activity}
                        </p>
                      </div>
                    )}
                    {lp.directInstruction && (
                      <div className="border-l-[3px] border-[#1a3a72] pl-4">
                        <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-[#1a3a72] mb-1">
                          Direct Instruction · {lp.directInstruction.duration}
                        </p>
                        {lp.directInstruction.content?.slice(0, 2).map((item, i) => (
                          <p key={i} className="font-ui text-[18px] text-[#14100a]/65 leading-relaxed">
                            · {item}
                          </p>
                        ))}
                      </div>
                    )}
                    {lp.closure && (
                      <div className="border-l-[3px] border-[#14100a]/20 pl-4">
                        <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-[#14100a]/40 mb-1">
                          Closure · {lp.closure.duration}
                        </p>
                        <p className="font-ui text-[18px] text-[#14100a]/65 leading-relaxed">
                          {lp.closure.activity}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Differentiation */}
                {lp.differentiation && (
                  <div className="mt-10 pt-8 border-t border-[#14100a]/10">
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
                          <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#1a3a72] font-bold mb-2">
                            {d.label}
                          </p>
                          <p className="font-ui text-[12px] text-[#14100a]/60 leading-relaxed">{d.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ── GRAPH CONNECTIONS ───────────────────────────────────── */}
          <section className="bg-[#f2ece0] border-b-4 border-[#14100a] py-12 px-8 md:px-16">
            <div className="max-w-[1200px] mx-auto">
              <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#B53A29] flex items-center gap-2.5 mb-2">
                <span className="w-4 h-[2px] bg-[#cc3322] block" aria-hidden />
                Explore Further
              </p>
              <h2
                className="font-display text-[#14100a] leading-[0.92] mb-7"
                style={{ fontSize: "clamp(22px,3vw,40px)" }}
              >
                {town.name} in the Knowledge Graph
              </h2>
              <p className="font-editorial italic font-light text-[18px] text-[#14100a]/55 mb-6 leading-[1.65] max-w-[540px]">
                The lesson packet draws from these pages. Use them to extend the lesson or give students primary source context.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Events & Timeline", href: `/towns/${slug}/timeline`, icon: "◷" },
                  { label: "People", href: `/towns/${slug}/people`, icon: "◎" },
                  { label: "Places", href: `/towns/${slug}/places`, icon: "◈" },
                  { label: "Primary Sources", href: `/towns/${slug}/sources`, icon: "◻" },
                  { label: `Explore ${town.name}`, href: `/towns/${slug}`, icon: "→" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="no-underline inline-flex items-center gap-2 font-ui text-[11px] uppercase tracking-[0.15em] text-[#14100a]/60 border border-[#14100a]/15 px-4 py-2.5 hover:text-[#14100a] hover:border-[#14100a]/35 transition-colors focus-visible:ring-2 focus-visible:ring-[#1a3a72] focus-visible:ring-offset-2 rounded-sm"
                  >
                    <span aria-hidden>{link.icon}</span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* ── CONNECTED TOWNS (Corroborate points) ────────────────── */}
          {relatedTowns.length > 0 && (
            <section className="bg-[#1a3a72] border-b-4 border-[#14100a] py-12 px-8 md:px-16">
              <div className="max-w-[1200px] mx-auto">
                <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#f2e6c8]/40 flex items-center gap-2.5 mb-2">
                  <span className="w-4 h-[2px] bg-[#f2e6c8]/30 block" aria-hidden />
                  Comparative Study
                </p>
                <h2
                  className="font-display text-[#f2e6c8] leading-[0.92] mb-3"
                  style={{ fontSize: "clamp(22px,3vw,40px)" }}
                >
                  Connected Towns
                </h2>
                <p className="font-editorial italic font-light text-[18px] text-[#f2e6c8]/45 mb-7 max-w-[480px] leading-[1.65]">
                  The corroborate prompts in the student packet point to these towns. Teachers can assign cross-town comparisons.
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {relatedTowns.slice(0, 6).map((rt) => (
                    <a
                      key={rt.townId}
                      href={`/towns/${rt.townId}/teacher`}
                      className="no-underline bg-[#f2e6c8]/5 border border-[#f2e6c8]/10 p-4 hover:bg-[#f2e6c8]/10 hover:border-[#f2e6c8]/20 transition-colors group focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a3a72] rounded-sm"
                    >
                      <p className="font-display text-[20px] text-[#f2e6c8]/90 leading-none mb-1.5 group-hover:text-[#C8A24A] transition-colors">
                        {rt.townName}
                      </p>
                      <p className="font-ui text-[11px] uppercase tracking-[0.12em] text-[#f2e6c8]/30 mb-2">
                        {rt.connectionType.replace(/_/g, " ")}
                      </p>
                      <p className="font-ui text-[12px] text-[#f2e6c8]/40 leading-relaxed">
                        {rt.teachingConnection}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── QUIZ PREVIEW ────────────────────────────────────────── */}
          {teacherModule.quiz?.questions?.length > 0 && (
            <section className="bg-[#f2ece0] border-b-4 border-[#14100a] py-12 px-8 md:px-16">
              <div className="max-w-[1200px] mx-auto">
                <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#B53A29] flex items-center gap-2.5 mb-2">
                  <span className="w-4 h-[2px] bg-[#cc3322] block" aria-hidden />
                  Assessment
                </p>
                <h2
                  className="font-display text-[#14100a] leading-[0.92] mb-2"
                  style={{ fontSize: "clamp(22px,3vw,40px)" }}
                >
                  {teacherModule.quiz.title}
                </h2>
                <p className="font-ui text-[12px] text-[#14100a]/40 mb-7">
                  {teacherModule.quiz.instructions}
                  {" · "}
                  {teacherModule.quiz.questions.length} question{teacherModule.quiz.questions.length !== 1 ? "s" : ""} · Answer key in Teacher Guide PDF
                </p>

                <div className="space-y-3">
                  {teacherModule.quiz.questions.slice(0, 3).map((q, qi) => (
                    <div key={q.id} className="bg-white border border-[#14100a]/8 p-4 flex gap-4">
                      <span className="font-display text-[24px] text-[#cc3322]/30 leading-none flex-shrink-0 w-7">
                        {qi + 1}
                      </span>
                      <div>
                        <p className="font-ui text-[18px] text-[#14100a]/80 leading-relaxed mb-1">
                          {q.question}
                        </p>
                        <p className="font-ui text-[10px] uppercase tracking-[0.12em] text-[#14100a]/25">
                          {q.type.replace(/_/g, " ")}
                        </p>
                      </div>
                    </div>
                  ))}
                  {teacherModule.quiz.questions.length > 3 && (
                    <p className="font-ui text-[11px] text-[#14100a]/30 pl-11">
                      + {teacherModule.quiz.questions.length - 3} more in the full quiz PDF
                    </p>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* ── BOTTOM CTA ──────────────────────────────────────────── */}
          <section className="bg-[#cc3322] py-12 px-8 md:px-16">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <p className="font-display text-[#f2e6c8] leading-none mb-2" style={{ fontSize: "clamp(26px,4vw,48px)" }}>
                  Ready to Print?
                </p>
                <p className="font-editorial italic font-light text-[19px] text-[#f2e6c8]/65 max-w-[400px] leading-relaxed">
                  All three documents below — student packet, teacher guide, and quiz — are formatted for letter-size classroom printing.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <PrintButtons slug={slug} showAll />
                <a
                  href={`/towns/${slug}`}
                  className="no-underline font-ui text-[10px] uppercase tracking-[0.18em] text-[#f2e6c8]/40 text-center hover:text-[#f2e6c8] transition-colors"
                >
                  ← Back to {town.name}
                </a>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* ── NO MODULE ──────────────────────────────────────────────── */
        <section className="bg-[#f2ece0] py-20 px-8 md:px-16">
          <div className="max-w-[720px] mx-auto">
            <div className="w-12 h-[3px] bg-[#cc3322] mb-8" />
            <p className="font-editorial italic text-[20px] text-[#14100a]/60 leading-relaxed mb-8">
              Teacher resources for {town.name} are currently being developed.
              Check back soon — or explore what&apos;s already available for
              other towns.
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
