import NextLink from "next/link";

interface SectionHeaderProps {
  overline?: string;
  title: string;
  linkHref?: string;
  linkText?: string;
  light?: boolean; // for use on dark backgrounds
}

export function SectionHeader({ overline, title, linkHref, linkText, light = false }: SectionHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4 mb-10">
      <div>
        {overline && (
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-crimson flex-shrink-0" aria-hidden="true" />
            <span className="font-condensed font-bold text-[0.75rem] tracking-[0.14em] uppercase text-crimson">
              {overline}
            </span>
          </div>
        )}
        <h2
          className={`font-heading font-bold text-[2rem] md:text-[2.5rem] leading-tight ${
            light ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
      </div>

      {linkHref && linkText && (
        <NextLink
          href={linkHref}
          className={`no-underline font-condensed font-bold text-[0.8rem] tracking-[0.08em] uppercase self-end mb-1 flex-shrink-0 transition-colors duration-200 ${
            light ? "text-gold hover:text-white" : "text-navy hover:text-crimson"
          }`}
        >
          {linkText} &rarr;
        </NextLink>
      )}
    </div>
  );
}
