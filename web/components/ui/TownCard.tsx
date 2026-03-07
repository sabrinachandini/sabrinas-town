import NextLink from "next/link";

interface TownCardProps {
  number: number;
  slug: string;
  name: string;
  state: string;
  excerpt: string;
}

export function TownCard({ number, slug, name, state, excerpt }: TownCardProps) {
  const num = String(number).padStart(2, "0");

  return (
    <NextLink
      href={`/towns/${slug}`}
      className="group block no-underline bg-ivory border border-[#DDD8CE] relative overflow-hidden transition-colors duration-300 hover:bg-navy"
    >
      {/* Crimson underline bar — animates in from left on hover */}
      <div
        className="absolute bottom-0 left-0 h-[3px] bg-crimson transition-all duration-[350ms] ease-out"
        style={{ width: 0 }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 h-[3px] bg-crimson group-hover:w-full transition-all duration-[350ms] ease-out"
        style={{ transitionProperty: "width" }}
        aria-hidden="true"
      />

      <div className="p-7 pb-9">
        {/* Number */}
        <div className="font-condensed font-bold text-[0.7rem] tracking-[0.14em] text-slate group-hover:text-fog transition-colors duration-300 mb-1">
          {num}
        </div>

        {/* State label */}
        <div className="font-condensed font-bold text-[0.7rem] tracking-[0.1em] uppercase text-slate group-hover:text-gold transition-colors duration-300 mb-3">
          {state}
        </div>

        {/* Town name */}
        <h3 className="font-heading font-bold text-[1.4rem] leading-tight text-charcoal group-hover:text-white transition-colors duration-300 mb-3">
          {name}
        </h3>

        {/* Excerpt */}
        <p className="font-serif text-[0.9rem] leading-relaxed text-slate group-hover:text-fog transition-colors duration-300 mb-4">
          {excerpt}
        </p>

        {/* Read more link */}
        <span className="font-condensed font-bold text-[0.75rem] tracking-[0.08em] uppercase text-crimson group-hover:text-gold transition-colors duration-300">
          Read More &rarr;
        </span>
      </div>
    </NextLink>
  );
}
