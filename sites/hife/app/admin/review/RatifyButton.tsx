"use client";

import { useState } from "react";
import { ratifyWithAI } from "./actions";

interface Props {
  entityType: string;
  entityId: string;
  entityData: string;
}

export function RatifyButton({ entityType, entityId, entityData }: Props) {
  const [state, setState] = useState<
    | { status: "idle" }
    | { status: "loading" }
    | { status: "done"; ratify: boolean; confidence: string; reason: string }
  >({ status: "idle" });

  async function handleClick() {
    setState({ status: "loading" });
    try {
      const result = await ratifyWithAI(entityType, entityId, entityData);
      setState({ status: "done", ...result });
    } catch {
      setState({ status: "done", ratify: false, confidence: "LOW", reason: "Error calling AI" });
    }
  }

  if (state.status === "idle") {
    return (
      <button
        onClick={handleClick}
        className="font-ui text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 border border-[#1a3a72]/30 text-[#1a3a72] hover:bg-[#1a3a72]/5 transition-colors"
      >
        Ask Claude
      </button>
    );
  }

  if (state.status === "loading") {
    return (
      <span className="font-ui text-[10px] text-[#14100a]/30 px-3 py-1.5">
        Thinking…
      </span>
    );
  }

  const color = state.ratify ? "#2a5c45" : "#cc3322";
  const confColor =
    state.confidence === "HIGH" ? "#2a5c45"
    : state.confidence === "MEDIUM" ? "#C8A24A"
    : "#cc3322";

  return (
    <div className="border border-[#14100a]/10 bg-white/60 p-3 text-left max-w-[280px]">
      <p className="font-ui text-[10px] uppercase tracking-[0.15em] mb-1" style={{ color }}>
        Claude: {state.ratify ? "Ratify" : "Flag"} ·{" "}
        <span style={{ color: confColor }}>{state.confidence}</span>
      </p>
      <p className="font-ui text-[11px] text-[#14100a]/70 leading-relaxed">
        {state.reason}
      </p>
      <button
        onClick={() => setState({ status: "idle" })}
        className="font-ui text-[10px] text-[#14100a]/30 hover:text-[#14100a]/60 mt-2"
      >
        dismiss
      </button>
    </div>
  );
}
