import NextLink from "next/link";

function StarMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <circle cx="16" cy="16" r="15.5" fill="#0A1628" />
      <polygon
        points="16,4 17.32,10.66 21.56,5.37 19.65,11.89 25.87,9.18 21.14,14.05 27.91,14.55 21.46,16.66 27.22,20.26 20.53,19.12 23.96,24.98 18.55,20.87 18.87,27.65 16,21.5 13.13,27.65 13.45,20.87 8.04,24.98 11.47,19.12 4.78,20.26 10.54,16.66 4.09,14.55 10.86,14.05 6.13,9.18 12.35,11.89 10.44,5.37 14.68,10.66"
        fill="#BF1A2F"
      />
      <circle cx="16" cy="16" r="4" fill="#F7F3EC" />
    </svg>
  );
}

const EXPLORE_LINKS = [
  { label: "All Towns", href: "/towns" },
  { label: "Rankings", href: "/rankings" },
  { label: "Big Picture", href: "/clusters" },
  { label: "Methodology", href: "/methodology" },
  { label: "Changelog", href: "/changelog" },
];

const TEACH_LINKS = [
  { label: "For Educators", href: "/teach" },
  { label: "Massachusetts", href: "/teach/massachusetts" },
  { label: "Virginia", href: "/teach/virginia" },
  { label: "Pennsylvania", href: "/teach/pennsylvania" },
  { label: "New York", href: "/teach/new-york" },
];

const ABOUT_LINKS = [
  { label: "About", href: "/about" },
  { label: "Partner With Us", href: "/partner" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#080F1E" }} className="text-fog">

      {/* Main grid */}
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1: Brand */}
        <div className="md:col-span-1">
          <NextLink href="/" className="no-underline flex items-center gap-2.5 mb-4">
            <StarMark size={28} />
            <span className="font-heading font-bold text-white text-[0.95rem] leading-tight">
              History Is For Everyone
            </span>
          </NextLink>
          <p className="font-serif text-[0.875rem] text-fog leading-relaxed">
            A living network of America&apos;s Revolutionary towns — built for travelers, teachers, and towns themselves.
          </p>
          <p className="font-condensed font-bold text-[0.7rem] tracking-[0.1em] uppercase mt-4" style={{ color: "#C4923B" }}>
            History is for everyone.
          </p>
        </div>

        {/* Column 2: Explore */}
        <div>
          <p className="font-condensed font-bold text-[0.75rem] tracking-[0.12em] uppercase mb-4" style={{ color: "#C4923B" }}>
            Explore
          </p>
          <ul className="space-y-2.5">
            {EXPLORE_LINKS.map(({ label, href }) => (
              <li key={href}>
                <NextLink
                  href={href}
                  className="no-underline font-sans text-[0.875rem] text-fog hover:text-white transition-colors duration-200"
                >
                  {label}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Teach */}
        <div>
          <p className="font-condensed font-bold text-[0.75rem] tracking-[0.12em] uppercase mb-4" style={{ color: "#C4923B" }}>
            Teach
          </p>
          <ul className="space-y-2.5">
            {TEACH_LINKS.map(({ label, href }) => (
              <li key={href}>
                <NextLink
                  href={href}
                  className="no-underline font-sans text-[0.875rem] text-fog hover:text-white transition-colors duration-200"
                >
                  {label}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: About */}
        <div>
          <p className="font-condensed font-bold text-[0.75rem] tracking-[0.12em] uppercase mb-4" style={{ color: "#C4923B" }}>
            About
          </p>
          <ul className="space-y-2.5">
            {ABOUT_LINKS.map(({ label, href }) => (
              <li key={href}>
                <NextLink
                  href={href}
                  className="no-underline font-sans text-[0.875rem] text-fog hover:text-white transition-colors duration-200"
                >
                  {label}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-sans text-[0.8rem] text-fog/70">
            &copy; {new Date().getFullYear()} History Is For Everyone.
          </p>
          <p className="font-sans text-[0.8rem] text-fog/70">
            Made with care in America.
          </p>
        </div>
      </div>
    </footer>
  );
}
