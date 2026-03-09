interface PageHeaderProps {
  name: string;
  state: string;
  subtitle?: string;
  lastUpdated?: string;
  cluster?: string;
  variant?: "default" | "bold";
}

export function PageHeader({
  name,
  state,
  subtitle,
  lastUpdated,
  cluster,
  variant = "default",
}: PageHeaderProps) {
  if (variant === "bold") {
    return (
      <header className="-mx-6 md:-mx-10 -mt-12 md:-mt-16 mb-12 bg-[#1a3a72] px-8 md:px-16 py-16 md:py-20 border-b-4 border-ink relative overflow-hidden">
        {/* Ghost state abbreviation */}
        <div
          className="absolute right-0 top-0 font-display text-[200px] text-white/[0.04] leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          {state.slice(0, 2).toUpperCase()}
        </div>

        <p className="font-ui text-[9px] tracking-[0.2em] uppercase text-cream/30 mb-4 relative z-10">
          {state}, USA
          {cluster && <span className="ml-3 text-cream/20">{cluster}</span>}
        </p>
        <h1
          className="font-display text-cream leading-[0.88] relative z-10 whitespace-nowrap"
          style={{ fontSize: "clamp(48px, 8vw, 112px)" }}
        >
          {name}
        </h1>
        {subtitle && (
          <p className="font-editorial italic text-cream/65 text-[17px] mt-5 leading-relaxed max-w-[600px] relative z-10">
            {subtitle}
          </p>
        )}
        {lastUpdated && (
          <p className="font-ui text-[9px] text-cream/25 uppercase tracking-[0.1em] mt-4 relative z-10">
            Last updated{" "}
            {new Date(lastUpdated).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}
      </header>
    );
  }

  // Default variant
  return (
    <header className="mb-16 md:mb-20">
      <p className="font-ui text-[9px] tracking-[0.2em] uppercase text-ink/40 mb-3">
        {state}, USA
        {cluster && <span className="ml-3 text-ink/25">{cluster}</span>}
      </p>
      <h1
        className="font-display text-ink leading-[0.88]"
        style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
      >
        {name}
      </h1>
      {subtitle && (
        <p className="font-editorial italic text-ink/60 text-[17px] mt-5 leading-relaxed max-w-[600px]">
          {subtitle}
        </p>
      )}
      {lastUpdated && (
        <p className="font-ui text-[9px] text-ink/30 uppercase tracking-[0.1em] mt-4">
          Last updated{" "}
          {new Date(lastUpdated).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      )}
    </header>
  );
}
