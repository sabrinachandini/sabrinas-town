"use client";

export function CopyLinkButton() {
  return (
    <button
      onClick={() => {
        if (typeof navigator !== "undefined") {
          navigator.clipboard.writeText(window.location.href).catch(() => {});
        }
      }}
      className="font-ui text-[10px] uppercase tracking-[0.15em] text-ink/50 border border-ink/15 px-4 py-1.5 hover:border-ink/40 hover:text-ink transition-colors"
    >
      Copy link
    </button>
  );
}
