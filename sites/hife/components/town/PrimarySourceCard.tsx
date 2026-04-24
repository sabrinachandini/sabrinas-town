"use client";

import { useState } from "react";

interface PrimarySourceCardProps {
  title: string;
  type: string;
  sourceInfo: string;
  url: string | null;
  analysisPrompts: string[];
  credibilityTier: string;
  teacherNarrative?: string;
}

export function PrimarySourceCard({
  title,
  type,
  sourceInfo,
  url,
  analysisPrompts,
  credibilityTier,
  teacherNarrative,
}: PrimarySourceCardProps) {
  const [expanded, setExpanded] = useState(false);

  const tierLabel: Record<string, string> = {
    TIER1: "Tier 1 — Primary/Academic",
    TIER2: "Tier 2 — Reputable Secondary",
    TIER3: "Tier 3 — General Reference",
  };

  return (
    <div className="p-element bg-bg-secondary rounded-lg border border-border-light">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <p className="font-medium text-text-primary">{title}</p>
          <p className="text-small text-text-muted mt-1">
            {sourceInfo} &middot; {type} &middot;{" "}
            {tierLabel[credibilityTier] || credibilityTier}
          </p>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-small text-accent-blue mt-1 inline-block"
            >
              View source
            </a>
          )}
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-small text-accent-blue hover:text-accent-blue-hover shrink-0"
        >
          {expanded ? "Collapse" : "Expand"}
        </button>
      </div>

      {expanded && (
        <div className="mt-element pt-element border-t border-border-light">
          {analysisPrompts.length > 0 && (
            <div>
              <p className="text-small text-text-muted uppercase tracking-wide mb-2">
                Analysis Prompts
              </p>
              <ul className="space-y-1">
                {analysisPrompts.map((prompt, i) => (
                  <li key={i} className="text-small pl-4 border-l-2 border-accent-blue/30">
                    {prompt}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {teacherNarrative && (
            <div className="mt-element">
              <p className="text-small text-text-muted uppercase tracking-wide mb-2">
                Teacher Narrative
              </p>
              <p className="text-small leading-relaxed">{teacherNarrative}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
