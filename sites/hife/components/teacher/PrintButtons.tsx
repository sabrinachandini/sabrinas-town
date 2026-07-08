"use client";

/**
 * PrintButtons.tsx — Client component for PDF/print triggers.
 * Uses window.print() targeting specific route (teacher/print).
 * Hidden at @media print via .print-trigger-btn class in globals.css.
 */

interface PrintButtonsProps {
  slug: string;
  /** Show all three buttons (student, teacher, quiz) */
  showAll?: boolean;
}

export function PrintButtons({ slug, showAll = true }: PrintButtonsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={`/towns/${slug}/teacher/print`}
        target="_blank"
        rel="noopener noreferrer"
        className="print-trigger-btn"
        aria-label="Download student packet as PDF"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden
        >
          <path
            d="M7 1v8M4 6l3 3 3-3M2 10v2a1 1 0 001 1h8a1 1 0 001-1v-2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Student Packet PDF
      </a>

      {showAll && (
        <>
          <a
            href={`/towns/${slug}/teacher/print?mode=teacher`}
            target="_blank"
            rel="noopener noreferrer"
            className="print-trigger-btn"
            aria-label="Download teacher guide with answer key as PDF"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden
            >
              <path
                d="M7 1v8M4 6l3 3 3-3M2 10v2a1 1 0 001 1h8a1 1 0 001-1v-2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Teacher Guide PDF
            <span className="font-ui text-[9px] tracking-[0.1em] opacity-60">
              (Answer Key)
            </span>
          </a>

          <a
            href={`/towns/${slug}/teacher/print?mode=quiz`}
            target="_blank"
            rel="noopener noreferrer"
            className="print-trigger-btn"
            aria-label="Download quiz PDF"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden
            >
              <path
                d="M7 1v8M4 6l3 3 3-3M2 10v2a1 1 0 001 1h8a1 1 0 001-1v-2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Quiz PDF
          </a>
        </>
      )}
    </div>
  );
}
