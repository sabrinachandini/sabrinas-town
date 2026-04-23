"use client";

import { useState } from "react";

interface Props {
  shareUrl: string;
  title: string;
}

export function ShareActions({ shareUrl, title }: Props) {
  const [copied, setCopied] = useState(false);
  const text = encodeURIComponent(`Check out my Revolutionary War road trip: ${title}`);
  const encodedUrl = encodeURIComponent(shareUrl);

  const copy = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1a3a72] border-t-4 border-[#cc3322] px-8 md:px-16 py-6">
      <div className="max-w-[1400px] mx-auto">
        <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-cream/40 mb-3">Share this Muster</p>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex-1 min-w-[200px] flex items-center gap-3 bg-white/10 border border-white/20 px-3 py-2.5">
            <span className="font-ui text-[12px] text-cream/70 truncate flex-1">{shareUrl}</span>
            <button
              type="button"
              onClick={copy}
              className="font-ui text-[10px] font-semibold uppercase tracking-[0.12em] text-cream hover:text-[#f2e6c8] transition-colors whitespace-nowrap flex-shrink-0"
            >
              {copied ? "✓ Copied!" : "Copy"}
            </button>
          </div>
          <a href={`https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`}
            target="_blank" rel="noopener noreferrer"
            className="no-underline font-ui text-[10px] font-semibold uppercase tracking-[0.12em] bg-black text-white px-5 py-2.5 hover:bg-zinc-800 transition-colors whitespace-nowrap">
            𝕏 Post
          </a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank" rel="noopener noreferrer"
            className="no-underline font-ui text-[10px] font-semibold uppercase tracking-[0.12em] bg-[#1877F2] text-white px-5 py-2.5 hover:bg-[#1565d8] transition-colors whitespace-nowrap">
            Facebook
          </a>
          <a href={`https://api.whatsapp.com/send?text=${text}%20${encodedUrl}`}
            target="_blank" rel="noopener noreferrer"
            className="no-underline font-ui text-[10px] font-semibold uppercase tracking-[0.12em] bg-[#25D366] text-white px-5 py-2.5 hover:bg-[#1da851] transition-colors whitespace-nowrap">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
