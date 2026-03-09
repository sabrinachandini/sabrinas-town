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
      <header className="-mx-6 md:-mx-12 -mt-12 md:-mt-16 mb-12 bg-[#0a0e1a] px-8 md:px-16 py-16 md:py-24">
        <p className="font-ui text-[0.7rem] uppercase tracking-[0.12em] text-white/40 mb-3">
          {state}, USA
          {cluster && (
            <span className="ml-3 text-white/25">{cluster}</span>
          )}
        </p>
        <h1
          className="text-white"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 0.9,
          }}
        >
          {name}
        </h1>
        {subtitle && (
          <p className="font-editorial italic text-white/70 text-[1.05rem] mt-6 leading-relaxed max-w-[600px]">
            {subtitle}
          </p>
        )}
        {lastUpdated && (
          <p className="font-ui text-[0.7rem] text-white/30 uppercase mt-4">
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
