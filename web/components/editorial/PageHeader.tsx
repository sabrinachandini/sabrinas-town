interface PageHeaderProps {
  name: string;
  state: string;
  subtitle?: string;
  lastUpdated?: string;
  cluster?: string;
}

export function PageHeader({
  name,
  state,
  subtitle,
  lastUpdated,
  cluster,
}: PageHeaderProps) {
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
