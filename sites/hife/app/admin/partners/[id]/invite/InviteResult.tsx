"use client";

import { useState } from "react";

export function InviteResult({
  email,
  role,
  expiresAt,
  link,
}: {
  email: string;
  role: string;
  expiresAt: string;
  link: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <div className="border-2 border-[#14100a]/10 bg-white/60 p-4">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <p className="font-ui text-[12px] font-semibold text-[#14100a]">{email}</p>
          <p className="font-ui text-[10px] text-[#14100a]/40">
            {role} · expires {new Date(expiresAt).toLocaleDateString()}
          </p>
        </div>
        <button
          onClick={copy}
          className="font-ui text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 border border-[#1a3a72]/30 text-[#1a3a72] hover:bg-[#1a3a72]/5 transition-colors shrink-0"
        >
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
      <p className="font-mono text-[10px] text-[#14100a]/40 truncate bg-[#14100a]/3 px-3 py-2">
        {link}
      </p>
    </div>
  );
}
