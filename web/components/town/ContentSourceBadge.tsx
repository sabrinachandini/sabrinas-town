"use client";

export function ContentSourceBadge({
  contentSource,
}: {
  contentSource: "curated" | "generated";
}) {
  if (contentSource === "curated") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-small font-medium bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
        Curated by educators
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-small font-medium bg-bg-secondary text-text-muted border border-border-light">
      Auto-generated
    </span>
  );
}
