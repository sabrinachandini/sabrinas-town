import NextLink from "next/link";

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
    <footer className="bg-ink border-t-4 border-crimson text-cream/50">

      {/* Main grid */}
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1: Brand */}
        <div className="md:col-span-1">
          <NextLink href="/" className="no-underline block mb-4">
            <span className="font-display text-[28px] text-cream tracking-wide leading-none">
              HISTORY IS FOR EVERYONE
            </span>
          </NextLink>
          <p className="font-editorial italic text-cream/40 text-[15px] leading-relaxed">
            A living network of America&apos;s Revolutionary towns.
          </p>
        </div>

        {/* Column 2: Explore */}
        <div>
          <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-cream/30 mb-4">
            Explore
          </p>
          <ul className="space-y-2.5">
            {EXPLORE_LINKS.map(({ label, href }) => (
              <li key={href}>
                <NextLink
                  href={href}
                  className="no-underline font-ui text-[13px] text-cream/50 hover:text-cream transition-colors duration-150"
                >
                  {label}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Teach */}
        <div>
          <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-cream/30 mb-4">
            Teach
          </p>
          <ul className="space-y-2.5">
            {TEACH_LINKS.map(({ label, href }) => (
              <li key={href}>
                <NextLink
                  href={href}
                  className="no-underline font-ui text-[13px] text-cream/50 hover:text-cream transition-colors duration-150"
                >
                  {label}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: About */}
        <div>
          <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-cream/30 mb-4">
            About
          </p>
          <ul className="space-y-2.5">
            {ABOUT_LINKS.map(({ label, href }) => (
              <li key={href}>
                <NextLink
                  href={href}
                  className="no-underline font-ui text-[13px] text-cream/50 hover:text-cream transition-colors duration-150"
                >
                  {label}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10 py-5">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-ui text-[11px] text-cream/20">
            &copy; {new Date().getFullYear()} History Is For Everyone.
          </p>
          <p className="font-ui text-[11px] text-cream/20">
            Made with care in America.
          </p>
        </div>
      </div>
    </footer>
  );
}
