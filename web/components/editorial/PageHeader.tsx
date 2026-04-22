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
      <header
        className="-mx-5 sm:-mx-8 md:-mx-16 -mt-10 sm:-mt-16 mb-8 sm:mb-12 px-5 sm:px-8 md:px-16 py-12 sm:py-16 md:py-20 border-b-4 border-ink relative overflow-hidden"
        style={{ backgroundColor: "var(--town-accent, #1a3a72)" }}
      >
        {/* Ghost state abbreviation */}
        <div
          className="absolute right-0 top-0 font-display text-[200px] text-white/[0.04] leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          {state.slice(0, 2).toUpperCase()}
        </div>

        <p className="font-ui text-[11px] tracking-[0.2em] uppercase text-[rgba(242,230,200,0.6)] mb-4 relative z-10">
          {state}, USA
          {cluster && <span className="ml-3 text-[rgba(242,230,200,0.4)]">{cluster}</span>}
        </p>
        <h1
          className="font-editorial italic font-light text-[#f2e6c8] leading-[1.05] relative z-10"
          style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
        >
          {name}
        </h1>
        {subtitle && (
          <p className="font-ui text-[16px] text-[rgba(242,230,200,0.75)] mt-5 leading-relaxed max-w-[600px] relative z-10">
            {subtitle}
          </p>
        )}
        {lastUpdated && (
          <p className="font-ui text-[11px] text-[rgba(242,230,200,0.4)] uppercase tracking-[0.1em] mt-4 relative z-10">
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
      <p className="font-ui text-[11px] tracking-[0.2em] uppercase text-ink/40 mb-3">
        {state}, USA
        {cluster && <span className="ml-3 text-ink/25">{cluster}</span>}
      </p>
      <h1
        className="font-editorial italic font-light text-ink leading-[0.95]"
        style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
      >
        {name}
      </h1>
      {subtitle && (
        <p className="font-ui text-[16px] text-ink/60 mt-5 leading-relaxed max-w-[600px]">
          {subtitle}
        </p>
      )}
      {lastUpdated && (
        <p className="font-ui text-[11px] text-ink/30 uppercase tracking-[0.1em] mt-4">
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
