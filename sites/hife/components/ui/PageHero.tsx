import { Button } from "./Button";

interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

interface PageHeroProps {
  bg?: "navy" | "ivory";
  overline?: string;
  title: string;
  /** A word/phrase within `title` to render in gold. Must appear exactly once. */
  titleEmphasis?: string;
  body?: string;
  cta?: CTAButton[];
}

export function PageHero({
  bg = "navy",
  overline,
  title,
  titleEmphasis,
  body,
  cta,
}: PageHeroProps) {
  const isDark = bg === "navy";

  let titleNode: React.ReactNode = title;
  if (titleEmphasis) {
    const idx = title.indexOf(titleEmphasis);
    if (idx !== -1) {
      titleNode = (
        <>
          {title.slice(0, idx)}
          <span className="text-gold">{titleEmphasis}</span>
          {title.slice(idx + titleEmphasis.length)}
        </>
      );
    }
  }

  return (
    <section className={`py-20 md:py-24 ${isDark ? "bg-navy" : "bg-ivory"}`}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {overline && (
          <p className="font-condensed font-bold text-[0.75rem] tracking-[0.14em] uppercase text-crimson mb-4">
            {overline}
          </p>
        )}
        <h1
          className={`font-heading font-black leading-[1.05] tracking-tight mb-6 fade-up-1 ${
            isDark ? "text-white" : "text-navy"
          }`}
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          {titleNode}
        </h1>
        {body && (
          <p
            className={`font-serif text-[1.05rem] md:text-[1.15rem] leading-relaxed max-w-[600px] mb-8 fade-up-2 ${
              isDark ? "text-fog" : "text-charcoal"
            }`}
          >
            {body}
          </p>
        )}
        {cta && cta.length > 0 && (
          <div className="flex flex-wrap gap-4 fade-up-3">
            {cta.map((btn) => (
              <Button
                key={btn.href}
                href={btn.href}
                variant={btn.variant ?? (isDark ? "outline" : "primary")}
              >
                {btn.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
