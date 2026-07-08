"use client";

/**
 * TeacherGuide.tsx
 * Teacher-facing companion to StudentPacket.tsx.
 * Contains answer keys, discussion notes, differentiation strategies, standards.
 *
 * CRITICAL: This component MUST NOT be rendered in student-facing print routes.
 * Route: /towns/[slug]/teacher/print?mode=teacher only.
 */

import { TeacherModuleResponse, LessonPlan, Standards } from "@hife/content";
import type { PacketSource } from "./StudentPacket";

// ─── Standards verification helper ───────────────────────────────────────────

type StandardStatus = "VERIFIED" | "TRUNCATED_PREFIX" | "PENDING";

function classifyStandard(code: string): StandardStatus {
  if (/^CCSS\.ELA-LITERACY\.(RH|WHST|RI|W)\./.test(code)) return "VERIFIED";
  if (/^D2\.(His|Civ|Geo|Eco|Psy|Soc)\.\d+\.\d+-\d+/.test(code))
    return "VERIFIED";
  if (/^AP (US|World|European) History/.test(code)) return "VERIFIED";
  // Truncated CCSS (missing prefix)
  if (/^(RH|WHST|RI|RST|WHST)\.\d+/.test(code)) return "TRUNCATED_PREFIX";
  return "PENDING";
}

function standardStatusLabel(status: StandardStatus): {
  icon: string;
  label: string;
  color: string;
} {
  switch (status) {
    case "VERIFIED":
      return { icon: "✓", label: "Verified", color: "text-[#2a5c45]" };
    case "TRUNCATED_PREFIX":
      return {
        icon: "△",
        label: "Missing full code prefix",
        color: "text-[#b5431a]",
      };
    case "PENDING":
      return {
        icon: "?",
        label: "Verification pending",
        color: "text-[#0e1428]/50",
      };
  }
}

// ─── Props ────────────────────────────────────────────────────────────────────

export interface TeacherGuideProps {
  town: TeacherModuleResponse["town"];
  inquiryQuestion: string;
  gradeBand: string;
  estimatedTime: string;
  sources: PacketSource[];
  lessonPlan?: LessonPlan;
  standards?: Standards;
  answerKey?: {
    sourceId: string;
    observeAnswer: string;
    interpretAnswer: string;
    corroborateAnswer: string;
  }[];
  discussionNotes?: string;
  writingRubric?: {
    criterion: string;
    proficient: string;
    developing: string;
  }[];
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function GuideHeader({
  town,
  page,
}: {
  town: TeacherGuideProps["town"];
  page: number;
}) {
  return (
    <header className="flex items-start justify-between border-b-2 border-[#1a3a72] pb-2 mb-4 print:border-b-2 print:border-black">
      <div>
        <p className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1a3a72] print:text-black">
          {town.name} · Teacher Guide · CONFIDENTIAL — Do Not Distribute to Students
        </p>
      </div>
      <p className="font-ui text-[11px] text-[#0e1428]/40 ml-4 flex-shrink-0 print:text-black/40">
        p. TG-{page}
      </p>
    </header>
  );
}

function ConfidentialBanner() {
  return (
    <div className="bg-[#1a3a72] text-[#f2ece0] px-4 py-2 text-center mb-6 print:bg-black print:text-white">
      <p className="font-ui text-[11px] font-bold tracking-[0.2em] uppercase">
        Teacher Copy — Answer Key Included — Do Not Photocopy for Students
      </p>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function TeacherGuide({
  town,
  inquiryQuestion,
  gradeBand,
  estimatedTime,
  sources,
  lessonPlan,
  standards,
  answerKey,
  discussionNotes,
  writingRubric,
}: TeacherGuideProps) {
  return (
    <div
      id="teacher-guide"
      className="bg-[#f2ece0] print:bg-white font-ui text-[#0e1428]"
    >
      {/* ── COVER ─────────────────────────────────────────────────── */}
      <div className="print:break-after-page px-8 py-10 md:px-16 print:px-[1in] print:py-[0.75in] max-w-[900px] mx-auto print:max-w-none">
        <ConfidentialBanner />

        <div className="mb-8">
          <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-[#1a3a72] mb-2 print:text-black">
            History Is For Everyone · Teacher Guide
          </p>
          <span className="inline-block font-ui text-[11px] font-semibold tracking-[0.28em] uppercase bg-[#0e1428] text-[#f2ece0] px-3 py-[5px] mb-4 print:bg-black print:text-white">
            {town.name} · {town.state}
          </span>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="font-ui text-[11px] tracking-[0.15em] uppercase border border-[#0e1428]/25 px-3 py-1 print:border-black/30">
              Grades {gradeBand}
            </span>
            <span className="font-ui text-[11px] tracking-[0.15em] uppercase border border-[#0e1428]/25 px-3 py-1 print:border-black/30">
              {estimatedTime}
            </span>
            <span className="font-ui text-[11px] tracking-[0.15em] uppercase border border-[#0e1428]/25 px-3 py-1 print:border-black/30">
              {sources.length} Source{sources.length !== 1 ? "s" : ""}
            </span>
          </div>
          <h1
            className="font-editorial text-[#0e1428] leading-[1.2] print:text-black"
            style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
          >
            {inquiryQuestion}
          </h1>
        </div>

        {/* Quick-reference */}
        <div className="border border-[#0e1428]/15 p-5 bg-[#f8f0d8] print:bg-white print:border-black/20">
          <p className="font-ui text-[10px] font-bold tracking-[0.2em] uppercase text-[#0e1428] mb-3">
            What&apos;s in This Guide
          </p>
          <ul className="space-y-1.5">
            {[
              "Discussion facilitation notes and anticipated student responses",
              answerKey && answerKey.length > 0
                ? `Answer key for all ${sources.length} source analysis sections`
                : "Analysis guidance for each source",
              lessonPlan?.differentiation
                ? "Differentiation strategies: struggling / advanced / ELL"
                : null,
              standards ? "Standards alignment with verification status" : null,
              writingRubric && writingRubric.length > 0
                ? "Writing rubric (proficient / developing)"
                : null,
            ]
              .filter(Boolean)
              .map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="font-ui text-[13px] text-[#1a3a72] flex-shrink-0 print:text-black">
                    →
                  </span>
                  <span className="font-ui text-[13px] text-[#0e1428]/70 print:text-black/70">
                    {item}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* ── DISCUSSION NOTES ──────────────────────────────────────── */}
      {discussionNotes && (
        <div className="print:break-before-page px-8 py-10 md:px-16 print:px-[1in] print:py-[0.75in] max-w-[900px] mx-auto print:max-w-none">
          <ConfidentialBanner />
          <GuideHeader town={town} page={1} />

          <h2 className="font-display text-[#0e1428] leading-[0.92] mb-6 print:text-black print:text-[20pt]"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}>
            Discussion Notes
          </h2>
          <div className="prose max-w-none">
            <p className="font-ui text-[16px] text-[#0e1428]/70 leading-[1.75] print:text-black/70 print:text-[12pt] whitespace-pre-line">
              {discussionNotes}
            </p>
          </div>

          {/* Anticipated student responses box */}
          <div className="mt-8 border-l-4 border-[#1a3a72] pl-5 print:border-l-[3px] print:border-black">
            <p className="font-ui text-[10px] font-bold tracking-[0.2em] uppercase text-[#1a3a72] mb-2 print:text-black">
              Anticipated Student Responses
            </p>
            <p className="font-editorial italic text-[16px] text-[#0e1428]/55 leading-[1.7] print:text-black/55 print:text-[12pt]">
              Students may focus on the military outcomes. Redirect them to the human stories: who was present, what choices they made, and what the event meant to people who lived through it. Ask: "Who wrote this? Why might that matter?"
            </p>
          </div>
        </div>
      )}

      {/* ── ANSWER KEYS ──────────────────────────────────────────── */}
      {(answerKey && answerKey.length > 0
        ? answerKey
        : sources.map((s) => ({
            sourceId: s.id,
            observeAnswer: `Look for: the type of document (${s.type}), who created it, the date/period, and any visible details that place it in the Revolution era. Students may note physical features, language style, or institutional markings.`,
            interpretAnswer: `This source helps us understand ${town.name}'s role by showing [specific aspect from source]. Key inference: [connect to inquiry question].`,
            corroborateAnswer: s.corroborateTown
              ? `Compare with ${s.corroborateTown}: both towns [shared experience]. They differ in [contrast]. Ask students: what does the difference tell us about how the Revolution played out differently in different places?`
              : `Compare this source with others in the packet. Where do they agree? Where do they differ? Differences may reflect different perspectives (Patriot vs. Loyalist, soldier vs. civilian, etc.).`,
          }))
      ).map((key, ki) => {
        const source = sources.find((s) => s.id === key.sourceId) ?? sources[ki];
        if (!source) return null;
        return (
          <div
            key={key.sourceId}
            className="print:break-before-page px-8 py-10 md:px-16 print:px-[1in] print:py-[0.75in] max-w-[900px] mx-auto print:max-w-none"
          >
            <ConfidentialBanner />
            <GuideHeader town={town} page={ki + 2} />

            <div className="mb-5">
              <p className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1a3a72] mb-1 print:text-black">
                Source {ki + 1} of {sources.length} — Answer Key
              </p>
              <h2 className="font-editorial text-[20px] text-[#0e1428] leading-snug print:text-black print:text-[16pt]">
                {source.title}
              </h2>
              <p className="font-ui text-[12px] text-[#0e1428]/50 print:text-black/50">
                {source.sourceInfo}
              </p>
            </div>

            <div className="space-y-7">
              {[
                { label: "① Observe", answer: key.observeAnswer },
                { label: "② Interpret", answer: key.interpretAnswer },
                { label: "③ Corroborate", answer: key.corroborateAnswer },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-l-4 border-[#cc3322]/60 pl-4 print:border-l-[3px] print:border-black"
                >
                  <p className="font-ui text-[11px] font-bold text-[#cc3322] mb-1.5 print:text-black">
                    {item.label}
                  </p>
                  <p className="font-ui text-[15px] text-[#0e1428]/75 leading-[1.7] print:text-black/75 print:text-[12pt]">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* ── DIFFERENTIATION ──────────────────────────────────────── */}
      {lessonPlan?.differentiation && (
        <div className="print:break-before-page px-8 py-10 md:px-16 print:px-[1in] print:py-[0.75in] max-w-[900px] mx-auto print:max-w-none">
          <ConfidentialBanner />
          <GuideHeader town={town} page={sources.length + 2} />

          <h2 className="font-display text-[#0e1428] leading-[0.92] mb-8 print:text-black"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}>
            Differentiation Strategies
          </h2>

          <div className="grid sm:grid-cols-3 gap-5 print:grid-cols-3 print:gap-4">
            {[
              {
                label: "Struggling Learners",
                icon: "◀",
                text: lessonPlan.differentiation.struggling,
              },
              {
                label: "Advanced Learners",
                icon: "▶",
                text: lessonPlan.differentiation.advanced,
              },
              {
                label: "ELL Support",
                icon: "◆",
                text: lessonPlan.differentiation.ell,
              },
            ].map((d) => (
              <div
                key={d.label}
                className="border border-[#0e1428]/12 p-4 bg-[#f8f0d8] print:bg-white print:border-black/20"
              >
                <p className="font-ui text-[10px] font-bold tracking-[0.18em] uppercase text-[#1a3a72] mb-2 print:text-black">
                  {d.icon} {d.label}
                </p>
                <p className="font-ui text-[13px] text-[#0e1428]/65 leading-[1.65] print:text-black/65 print:text-[11pt]">
                  {d.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── STANDARDS ALIGNMENT ──────────────────────────────────── */}
      {standards && (
        <div className="print:break-before-page px-8 py-10 md:px-16 print:px-[1in] print:py-[0.75in] max-w-[900px] mx-auto print:max-w-none">
          <ConfidentialBanner />
          <GuideHeader town={town} page={sources.length + 3} />

          <h2 className="font-display text-[#0e1428] leading-[0.92] mb-2 print:text-black"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}>
            Standards Alignment
          </h2>
          <p className="font-editorial italic text-[15px] text-[#0e1428]/50 mb-8 print:text-black/50">
            {standards.note}
          </p>

          {/* Common Core */}
          {standards.commonCore && standards.commonCore.length > 0 && (
            <div className="mb-7">
              <p className="font-ui text-[10px] font-bold tracking-[0.2em] uppercase text-[#0e1428] border-b border-[#0e1428]/15 pb-2 mb-4 print:border-black/20">
                Common Core ELA — History/Social Studies
              </p>
              <ul className="space-y-2">
                {standards.commonCore.map((code, ci) => {
                  const status = classifyStandard(code);
                  const meta = standardStatusLabel(status);
                  return (
                    <li key={ci} className="flex items-start gap-3">
                      <span
                        className={`font-ui text-[11px] font-bold flex-shrink-0 mt-0.5 print:text-black ${meta.color}`}
                      >
                        {meta.icon}
                      </span>
                      <div>
                        <p className="font-ui text-[12px] font-semibold text-[#0e1428] print:text-black">
                          {code}
                        </p>
                        {status !== "VERIFIED" && (
                          <p className="font-ui text-[10px] text-[#b5431a] print:text-black/50">
                            {meta.label} — aligned to history standards,
                            verification pending
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* C3 Framework */}
          {standards.c3Framework && standards.c3Framework.length > 0 && (
            <div className="mb-7">
              <p className="font-ui text-[10px] font-bold tracking-[0.2em] uppercase text-[#0e1428] border-b border-[#0e1428]/15 pb-2 mb-4 print:border-black/20">
                C3 Framework for Social Studies
              </p>
              <ul className="space-y-2">
                {standards.c3Framework.map((code, ci) => {
                  const status = classifyStandard(code);
                  const meta = standardStatusLabel(status);
                  return (
                    <li key={ci} className="flex items-start gap-3">
                      <span
                        className={`font-ui text-[11px] font-bold flex-shrink-0 mt-0.5 print:text-black ${meta.color}`}
                      >
                        {meta.icon}
                      </span>
                      <div>
                        <p className="font-ui text-[12px] font-semibold text-[#0e1428] print:text-black">
                          {code}
                        </p>
                        {status !== "VERIFIED" && (
                          <p className="font-ui text-[10px] text-[#b5431a] print:text-black/50">
                            {meta.label} — aligned to history standards,
                            verification pending
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* State standards */}
          {standards.stateStandards && (
            <div className="border border-[#0e1428]/12 p-4 bg-[#f8f0d8] print:bg-white print:border-black/20">
              <p className="font-ui text-[10px] font-bold tracking-[0.18em] uppercase text-[#0e1428] mb-2 print:text-black">
                State Standards Note
              </p>
              <p className="font-ui text-[12px] text-[#0e1428]/65 leading-[1.65] print:text-black/65">
                {standards.stateStandards.suggestedAlignment
                  ? `Aligned to ${standards.stateStandards.suggestedAlignment} — verification pending. Check your state curriculum framework for the current code.`
                  : "Aligned to state history standards — verification pending. Check your state curriculum framework for the current code."}
              </p>
            </div>
          )}
        </div>
      )}

      {/* ── WRITING RUBRIC ────────────────────────────────────────── */}
      {writingRubric && writingRubric.length > 0 && (
        <div className="print:break-before-page px-8 py-10 md:px-16 print:px-[1in] print:py-[0.75in] max-w-[900px] mx-auto print:max-w-none">
          <ConfidentialBanner />
          <GuideHeader town={town} page={sources.length + 4} />

          <h2 className="font-display text-[#0e1428] leading-[0.92] mb-8 print:text-black"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}>
            Writing Rubric
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse print:text-[11pt]">
              <thead>
                <tr className="bg-[#1a3a72] text-[#f2ece0] print:bg-black print:text-white">
                  <th className="font-ui text-[10px] font-bold tracking-[0.15em] uppercase text-left p-3 border border-[#0e1428] print:border-black">
                    Criterion
                  </th>
                  <th className="font-ui text-[10px] font-bold tracking-[0.15em] uppercase text-left p-3 border border-[#0e1428] print:border-black">
                    Proficient
                  </th>
                  <th className="font-ui text-[10px] font-bold tracking-[0.15em] uppercase text-left p-3 border border-[#0e1428] print:border-black">
                    Developing
                  </th>
                </tr>
              </thead>
              <tbody>
                {writingRubric.map((row, ri) => (
                  <tr
                    key={ri}
                    className={ri % 2 === 0 ? "bg-[#f8f0d8] print:bg-white" : "bg-[#f2ece0] print:bg-gray-50"}
                  >
                    <td className="font-ui text-[12px] font-semibold text-[#0e1428] p-3 border border-[#0e1428]/20 align-top print:border-black/20 print:text-black">
                      {row.criterion}
                    </td>
                    <td className="font-ui text-[12px] text-[#0e1428]/70 p-3 border border-[#0e1428]/20 align-top leading-[1.6] print:border-black/20 print:text-black/70">
                      {row.proficient}
                    </td>
                    <td className="font-ui text-[12px] text-[#0e1428]/70 p-3 border border-[#0e1428]/20 align-top leading-[1.6] print:border-black/20 print:text-black/70">
                      {row.developing}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
