"use client";

/**
 * StudentPacket.tsx
 * Printable student-facing packet component.
 * Teacher answer key is in TeacherGuide.tsx — never rendered into this component.
 *
 * Design: HIFE-BIBLE.md visual identity for screen, B&W print-first via @media print
 * Confidence labels use text + icon so they survive black-and-white photocopying.
 */

import { TeacherModuleResponse } from "@hife/content";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ConfidenceLabel =
  | "VERIFIED"
  | "ORAL_TRADITION"
  | "ANECDOTAL"
  | "UNVERIFIED";

export interface GlossaryEntry {
  term: string;
  definition: string;
}

export interface PacketSource {
  id: string;
  title: string;
  type: string;
  credibilityTier: string;
  sourceInfo: string;
  url?: string | null;
  facsimileUrl?: string | null;
  transcription?: string | null;
  glossary?: GlossaryEntry[];
  analysisPrompts?: string[];
  /** Town whose sources provide the corroboration point */
  corroborateTown?: string;
  confidence: ConfidenceLabel;
}

export interface StudentPacketProps {
  town: TeacherModuleResponse["town"];
  inquiryQuestion: string;
  gradeBand: string;
  estimatedTime: string;
  sources: PacketSource[];
  writingPrompt?: string;
  pagePrefix?: string; // e.g. "SP" for student packet
}

// ─── Confidence legend items ──────────────────────────────────────────────────

const CONFIDENCE_META: Record<
  ConfidenceLabel,
  { label: string; icon: string; description: string }
> = {
  VERIFIED: {
    label: "Verified",
    icon: "✓",
    description:
      "Document or account confirmed against an original or institutional archive.",
  },
  ORAL_TRADITION: {
    label: "Oral Tradition",
    icon: "◎",
    description:
      "Passed down through community memory. Historically significant but not a written primary source.",
  },
  ANECDOTAL: {
    label: "Anecdotal",
    icon: "△",
    description:
      "Based on individual recollection or later reporting. Use alongside other sources.",
  },
  UNVERIFIED: {
    label: "Unverified",
    icon: "?",
    description:
      "Origin or accuracy could not be confirmed. Included for discussion purposes only.",
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function PacketHeader({
  town,
  inquiryQuestion,
  page,
}: {
  town: StudentPacketProps["town"];
  inquiryQuestion: string;
  page: number;
}) {
  return (
    <header className="flex items-start justify-between border-b-2 border-[#0e1428] pb-2 mb-4 print:border-b print:border-black">
      <div className="flex-1 min-w-0">
        <p className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-[#0e1428]/50 print:text-black/50">
          {town.name} · {town.state} · Student Packet
        </p>
        <p className="font-ui text-[11px] text-[#0e1428]/70 truncate max-w-[380px] print:text-black/70">
          {inquiryQuestion}
        </p>
      </div>
      <p className="font-ui text-[11px] text-[#0e1428]/40 ml-4 flex-shrink-0 print:text-black/40">
        p. {page}
      </p>
    </header>
  );
}

function PacketFooter({ confidence }: { confidence: ConfidenceLabel }) {
  const meta = CONFIDENCE_META[confidence];
  return (
    <footer className="border-t border-[#0e1428]/15 mt-6 pt-3 flex items-center justify-between print:border-t print:border-black/20">
      <p className="font-ui text-[9px] tracking-[0.15em] uppercase text-[#0e1428]/40 print:text-black/40">
        History Is For Everyone · hife.org
      </p>
      <p className="font-ui text-[9px] tracking-[0.15em] uppercase text-[#0e1428]/40 print:text-black/40">
        Source confidence: {meta.icon} {meta.label}
      </p>
    </footer>
  );
}

function ConfidenceLegend() {
  return (
    <div className="border border-[#0e1428]/15 p-4 bg-[#f8f0d8] print:bg-white print:border-black/20">
      <p className="font-ui text-[10px] font-bold tracking-[0.2em] uppercase text-[#0e1428] mb-3">
        Source Confidence — What These Labels Mean
      </p>
      <div className="grid grid-cols-2 gap-2">
        {(Object.entries(CONFIDENCE_META) as [ConfidenceLabel, typeof CONFIDENCE_META[ConfidenceLabel]][]).map(
          ([key, meta]) => (
            <div key={key} className="flex items-start gap-2">
              <span className="font-ui text-[13px] font-bold text-[#0e1428] flex-shrink-0 w-5 print:text-black">
                {meta.icon}
              </span>
              <div>
                <p className="font-ui text-[10px] font-bold text-[#0e1428] print:text-black">
                  {meta.label}
                </p>
                <p className="font-ui text-[10px] text-[#0e1428]/60 leading-snug print:text-black/60">
                  {meta.description}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

function SourceBlock({
  source,
  sourceIndex,
  town,
  inquiryQuestion,
  pageNum,
}: {
  source: PacketSource;
  sourceIndex: number;
  town: StudentPacketProps["town"];
  inquiryQuestion: string;
  pageNum: number;
}) {
  const confidence = CONFIDENCE_META[source.confidence];

  // Three analysis prompts: Observe / Interpret / Corroborate
  const defaultPrompts = [
    "Observe: What do you notice first about this source? List three specific details.",
    `Interpret: What does this source tell us about ${town.name} during the Revolution? Use at least one detail from the source.`,
    source.corroborateTown
      ? `Corroborate: How does this source compare with what you know about ${source.corroborateTown}? What is similar? What is different?`
      : "Corroborate: Does this source agree or disagree with other sources you have seen? Explain.",
  ];

  const prompts =
    source.analysisPrompts && source.analysisPrompts.length >= 3
      ? source.analysisPrompts.slice(0, 3)
      : defaultPrompts;

  return (
    <div className="print:break-inside-avoid mb-12 print:mb-8">
      <PacketHeader
        town={town}
        inquiryQuestion={inquiryQuestion}
        page={pageNum}
      />

      {/* Source identity */}
      <div className="mb-5">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="flex-1">
            <p className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1a3a72] mb-1 print:text-black">
              Source {sourceIndex + 1} of {/* filled in parent */}
              {/* blank — parent passes label */}
            </p>
            <h2 className="font-editorial text-[20px] text-[#0e1428] leading-snug print:text-black">
              {source.title}
            </h2>
            <p className="font-ui text-[12px] text-[#0e1428]/50 mt-0.5 print:text-black/50">
              {source.sourceInfo}
            </p>
          </div>
          {/* Confidence badge */}
          <div className="flex-shrink-0 border-2 border-[#0e1428]/20 px-3 py-2 text-center print:border-black/30">
            <p className="font-ui text-[18px] font-bold text-[#0e1428] print:text-black">
              {confidence.icon}
            </p>
            <p className="font-ui text-[9px] font-semibold tracking-[0.15em] uppercase text-[#0e1428]/50 print:text-black/50">
              {confidence.label}
            </p>
          </div>
        </div>

        {/* This account label */}
        <div className="inline-flex items-center gap-2 bg-[#0e1428]/5 px-3 py-1.5 print:bg-transparent print:border print:border-black/20">
          <span className="font-ui text-[10px] font-semibold tracking-[0.15em] uppercase text-[#0e1428]/60 print:text-black/60">
            This account is:
          </span>
          <span className="font-ui text-[10px] font-bold tracking-[0.15em] uppercase text-[#0e1428] print:text-black">
            {confidence.icon} {confidence.label}
          </span>
        </div>
      </div>

      {/* Facsimile + transcription two-column layout */}
      {source.transcription && (
        <div className="grid md:grid-cols-2 gap-6 mb-6 print:grid-cols-2 print:gap-4">
          {/* Facsimile image (if available) */}
          <div>
            <p className="font-ui text-[9px] font-semibold tracking-[0.2em] uppercase text-[#0e1428]/40 mb-2 print:text-black/40">
              Document Image
            </p>
            {source.facsimileUrl ? (
              <img
                src={source.facsimileUrl}
                alt={`Facsimile of ${source.title}`}
                className="w-full border border-[#0e1428]/15 print:border-black/20 print:filter print:contrast-125 print:brightness-90"
              />
            ) : (
              <div className="border border-[#0e1428]/15 p-6 text-center bg-[#f2ece0] print:bg-white print:border-black/20 aspect-[3/4]">
                <p className="font-editorial italic text-[14px] text-[#0e1428]/35 print:text-black/35">
                  Image not available.
                  {source.url && (
                    <>
                      {" "}
                      View at:{" "}
                      <span className="not-italic font-ui text-[11px] text-[#1a3a72] underline print:text-black">
                        {source.url}
                      </span>
                    </>
                  )}
                </p>
              </div>
            )}
          </div>

          {/* Transcription with glossary */}
          <div>
            <p className="font-ui text-[9px] font-semibold tracking-[0.2em] uppercase text-[#0e1428]/40 mb-2 print:text-black/40">
              Transcription (period spelling preserved)
            </p>
            <div className="border-l-4 border-[#1a3a72] pl-4 print:border-black">
              <p className="font-editorial text-[15px] text-[#0e1428] leading-[1.8] print:text-black print:text-[12pt]">
                {source.transcription}
              </p>
            </div>

            {/* Margin glossary */}
            {source.glossary && source.glossary.length > 0 && (
              <div className="mt-4 border-t border-[#0e1428]/10 pt-3 print:border-black/20">
                <p className="font-ui text-[9px] font-semibold tracking-[0.18em] uppercase text-[#0e1428]/40 mb-2 print:text-black/40">
                  Word Guide
                </p>
                <dl className="space-y-1.5">
                  {source.glossary.map((entry) => (
                    <div key={entry.term}>
                      <dt className="font-ui text-[11px] font-bold text-[#0e1428] inline print:text-black">
                        {entry.term}:{" "}
                      </dt>
                      <dd className="font-ui text-[11px] text-[#0e1428]/60 inline print:text-black/60">
                        {entry.definition}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Analysis prompts */}
      <div className="space-y-5 print:break-inside-avoid">
        <p className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-[#0e1428]/50 print:text-black/50">
          Analysis Questions
        </p>
        {prompts.map((prompt, pi) => {
          const labels = ["Observe", "Interpret", "Corroborate"];
          const icons = ["①", "②", "③"];
          return (
            <div key={pi} className="print:break-inside-avoid">
              <p className="font-ui text-[11px] font-bold text-[#1a3a72] mb-1.5 print:text-black">
                {icons[pi]} {labels[pi] ?? `Question ${pi + 1}`}
              </p>
              <p className="font-ui text-[14px] text-[#0e1428] leading-[1.6] mb-3 print:text-[11pt] print:text-black">
                {prompt}
              </p>
              {/* Writing lines */}
              <div className="space-y-[22px] print:space-y-[20px]">
                {Array.from({ length: 4 }).map((_, li) => (
                  <div
                    key={li}
                    className="border-b border-[#0e1428]/15 print:border-b print:border-black/25"
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <PacketFooter confidence={source.confidence} />
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export function StudentPacket({
  town,
  inquiryQuestion,
  gradeBand,
  estimatedTime,
  sources,
  writingPrompt,
  pagePrefix = "SP",
}: StudentPacketProps) {
  return (
    <div
      id="student-packet"
      className="bg-[#f2ece0] print:bg-white font-ui text-[#0e1428]"
    >
      {/* ── PAGE 1: Cover ───────────────────────────────────────────── */}
      <div className="print:break-after-page min-h-screen print:min-h-[11in] flex flex-col px-8 py-10 md:px-16 print:px-[1in] print:py-[0.75in] max-w-[900px] mx-auto print:max-w-none">
        {/* HIFE wordmark */}
        <div className="flex items-center justify-between mb-12 print:mb-8">
          <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-[#1a3a72] print:text-black">
            History Is For Everyone
          </p>
          <p className="font-ui text-[11px] text-[#0e1428]/40 print:text-black/40">
            {pagePrefix}-1
          </p>
        </div>

        {/* Town + badge */}
        <div className="mb-6">
          <span className="inline-block font-ui text-[11px] font-semibold tracking-[0.28em] uppercase bg-[#0e1428] text-[#f2ece0] px-3 py-[5px] mb-4 print:bg-black print:text-white">
            {town.name} · {town.state}
          </span>
          <div className="flex flex-wrap gap-3">
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
        </div>

        {/* Inquiry question — large */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="font-ui text-[10px] font-semibold tracking-[0.3em] uppercase text-[#0e1428]/40 mb-4 print:text-black/40">
            Inquiry Question
          </p>
          <h1
            className="font-editorial text-[#0e1428] leading-[1.2] mb-8 print:text-black"
            style={{ fontSize: "clamp(24px, 4vw, 40px)" }}
          >
            {inquiryQuestion}
          </h1>

          <div className="border-t-4 border-[#0e1428] pt-6 print:border-black">
            <p className="font-ui text-[12px] text-[#0e1428]/60 print:text-black/60">
              Name: _____________________________________ &nbsp;&nbsp;
              Date: _____________________ &nbsp;&nbsp; Period: _________
            </p>
          </div>
        </div>

        {/* Confidence legend */}
        <div className="mt-8">
          <ConfidenceLegend />
        </div>
      </div>

      {/* ── SOURCE PAGES ────────────────────────────────────────────── */}
      <div className="px-8 py-10 md:px-16 print:px-[1in] print:py-[0.75in] max-w-[900px] mx-auto print:max-w-none">
        {sources.map((source, i) => (
          <div key={source.id} className="print:break-before-page">
            {/* Replace the "Source X of" placeholder in SourceBlock */}
            <SourceBlockWithCount
              source={source}
              sourceIndex={i}
              totalSources={sources.length}
              town={town}
              inquiryQuestion={inquiryQuestion}
              pageNum={i + 2}
            />
          </div>
        ))}
      </div>

      {/* ── WRITING PAGE ────────────────────────────────────────────── */}
      <div className="print:break-before-page px-8 py-10 md:px-16 print:px-[1in] print:py-[0.75in] max-w-[900px] mx-auto print:max-w-none">
        <PacketHeader
          town={town}
          inquiryQuestion={inquiryQuestion}
          page={sources.length + 2}
        />

        <div className="mb-6">
          <p className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-[#0e1428]/50 mb-3 print:text-black/50">
            Writing Response
          </p>
          <p className="font-editorial text-[18px] text-[#0e1428] leading-[1.65] mb-6 print:text-black print:text-[14pt]">
            {writingPrompt ??
              `Using at least two sources from this packet, explain: ${inquiryQuestion} Use specific evidence from the sources to support your answer.`}
          </p>
        </div>

        {/* Lined writing space */}
        <div className="space-y-[28px] print:space-y-[24px]">
          {Array.from({ length: 20 }).map((_, li) => (
            <div
              key={li}
              className="border-b border-[#0e1428]/12 print:border-b print:border-black/20"
            />
          ))}
        </div>

        <PacketFooter confidence="VERIFIED" />
      </div>
    </div>
  );
}

/** SourceBlock with count injected from parent */
function SourceBlockWithCount({
  source,
  sourceIndex,
  totalSources,
  town,
  inquiryQuestion,
  pageNum,
}: {
  source: PacketSource;
  sourceIndex: number;
  totalSources: number;
  town: StudentPacketProps["town"];
  inquiryQuestion: string;
  pageNum: number;
}) {
  const confidence = CONFIDENCE_META[source.confidence];

  const defaultPrompts = [
    "Observe: What do you notice first about this source? List three specific details.",
    `Interpret: What does this source tell us about ${town.name} during the Revolution? Use at least one detail from the source.`,
    source.corroborateTown
      ? `Corroborate: How does this source compare with what you know about ${source.corroborateTown}? What is similar? What is different?`
      : "Corroborate: Does this source agree or disagree with other sources you have seen? Explain.",
  ];

  const prompts =
    source.analysisPrompts && source.analysisPrompts.length >= 3
      ? source.analysisPrompts.slice(0, 3)
      : defaultPrompts;

  return (
    <div className="print:break-inside-avoid mb-12 print:mb-8">
      <PacketHeader
        town={town}
        inquiryQuestion={inquiryQuestion}
        page={pageNum}
      />

      {/* Source identity */}
      <div className="mb-5">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="flex-1">
            <p className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1a3a72] mb-1 print:text-black">
              Source {sourceIndex + 1} of {totalSources}
            </p>
            <h2 className="font-editorial text-[20px] text-[#0e1428] leading-snug print:text-black print:text-[16pt]">
              {source.title}
            </h2>
            <p className="font-ui text-[12px] text-[#0e1428]/50 mt-0.5 print:text-black/50">
              {source.sourceInfo}
            </p>
          </div>
          <div className="flex-shrink-0 border-2 border-[#0e1428]/20 px-3 py-2 text-center print:border-black/30">
            <p className="font-ui text-[18px] font-bold text-[#0e1428] print:text-black">
              {confidence.icon}
            </p>
            <p className="font-ui text-[9px] font-semibold tracking-[0.15em] uppercase text-[#0e1428]/50 print:text-black/50">
              {confidence.label}
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 bg-[#0e1428]/5 px-3 py-1.5 print:bg-transparent print:border print:border-black/20">
          <span className="font-ui text-[10px] font-semibold tracking-[0.15em] uppercase text-[#0e1428]/60 print:text-black/60">
            This account is:
          </span>
          <span className="font-ui text-[10px] font-bold tracking-[0.15em] uppercase text-[#0e1428] print:text-black">
            {confidence.icon} {confidence.label}
          </span>
        </div>
      </div>

      {/* Facsimile + transcription */}
      {source.transcription && (
        <div className="grid md:grid-cols-2 gap-6 mb-6 print:grid-cols-2 print:gap-4">
          <div>
            <p className="font-ui text-[9px] font-semibold tracking-[0.2em] uppercase text-[#0e1428]/40 mb-2 print:text-black/40">
              Document Image
            </p>
            {source.facsimileUrl ? (
              <img
                src={source.facsimileUrl}
                alt={`Facsimile of ${source.title}`}
                className="w-full border border-[#0e1428]/15 print:border-black/20 print:filter print:contrast-125 print:brightness-90"
              />
            ) : (
              <div className="border border-[#0e1428]/15 p-6 text-center bg-[#f2ece0] print:bg-white print:border-black/20 aspect-[3/4] flex items-center justify-center">
                <p className="font-editorial italic text-[13px] text-[#0e1428]/35 print:text-black/35">
                  {source.url
                    ? `View at: ${source.url}`
                    : "Image not available."}
                </p>
              </div>
            )}
          </div>

          <div>
            <p className="font-ui text-[9px] font-semibold tracking-[0.2em] uppercase text-[#0e1428]/40 mb-2 print:text-black/40">
              Transcription (period spelling preserved)
            </p>
            <div className="border-l-4 border-[#1a3a72] pl-4 print:border-l-[3px] print:border-black">
              <p className="font-editorial text-[15px] text-[#0e1428] leading-[1.8] print:text-black print:text-[12pt]">
                {source.transcription}
              </p>
            </div>

            {source.glossary && source.glossary.length > 0 && (
              <div className="mt-4 border-t border-[#0e1428]/10 pt-3 print:border-black/20">
                <p className="font-ui text-[9px] font-semibold tracking-[0.18em] uppercase text-[#0e1428]/40 mb-2 print:text-black/40">
                  Word Guide
                </p>
                <dl className="space-y-1.5">
                  {source.glossary.map((entry) => (
                    <div key={entry.term}>
                      <dt className="font-ui text-[11px] font-bold text-[#0e1428] inline print:text-black">
                        {entry.term}:{" "}
                      </dt>
                      <dd className="font-ui text-[11px] text-[#0e1428]/60 inline print:text-black/60">
                        {entry.definition}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Analysis prompts */}
      <div className="space-y-5 print:break-inside-avoid">
        <p className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-[#0e1428]/50 print:text-black/50">
          Analysis Questions
        </p>
        {prompts.map((prompt, pi) => {
          const labels = ["Observe", "Interpret", "Corroborate"];
          const icons = ["①", "②", "③"];
          return (
            <div key={pi} className="print:break-inside-avoid">
              <p className="font-ui text-[11px] font-bold text-[#1a3a72] mb-1.5 print:text-black">
                {icons[pi]} {labels[pi] ?? `Question ${pi + 1}`}
              </p>
              <p className="font-ui text-[14px] text-[#0e1428] leading-[1.6] mb-3 print:text-[11pt] print:text-black">
                {prompt}
              </p>
              <div className="space-y-[22px] print:space-y-[20px]">
                {Array.from({ length: 4 }).map((_, li) => (
                  <div
                    key={li}
                    className="border-b border-[#0e1428]/15 print:border-b print:border-black/25"
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <PacketFooter confidence={source.confidence} />
    </div>
  );
}
