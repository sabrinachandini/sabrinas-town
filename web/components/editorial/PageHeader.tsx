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
      <header className="bg-navy py-14 md:py-20 mb-0 -mx-6 md:-mx-10 px-6 md:px-10">
        <p className="font-condensed font-bold text-[0.7rem] tracking-[0.12em] uppercase text-crimson mb-3">
          {state}, USA
          {cluster && (
            <span className="ml-3 text-fog/70">{cluster}</span>
          )}
        </p>
        <h1
          className="font-heading font-black text-white leading-[1.05]"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          {name}
        </h1>
        {subtitle && (
          <p className="mt-4 font-serif italic text-fog text-[1.05rem] leading-relaxed max-w-[600px]">
            {subtitle}
          </p>
        )}
        {lastUpdated && (
          <p className="mt-4 font-condensed text-[0.75rem] text-fog/60 uppercase tracking-wide">
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

  return (
    <header className="mb-16 md:mb-20">
      <p className="text-small uppercase tracking-widest text-text-muted font-body">
        {state}, USA
        {cluster && (
          <span className="ml-3 text-text-muted">{cluster}</span>
        )}
      </p>
      <h1 className="mt-3 font-heading text-[3rem] md:text-[4rem] leading-[1.1] tracking-tight">
        {name}
      </h1>
      {subtitle && (
        <p className="mt-4 text-[1.25rem] md:text-[1.375rem] leading-relaxed text-text-muted font-body max-w-[640px]">
          {subtitle}
        </p>
      )}
      {lastUpdated && (
        <p className="mt-6 text-small text-text-muted font-body">
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
