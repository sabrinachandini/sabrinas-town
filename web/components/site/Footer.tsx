import NextLink from "next/link";

const NAV_LINKS = [
  { label: "Towns",       href: "/towns" },
  { label: "Teach",       href: "/teach" },
  { label: "Partner",     href: "/partner" },
  { label: "Methodology", href: "/methodology" },
  { label: "Changelog",   href: "/changelog" },
  { label: "About",       href: "/about" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a3a72] border-t-4 border-[#cc3322] px-8 md:px-10 pt-10 pb-8">
      <div className="mx-auto max-w-[1200px]">

        {/* Top row: wordmark + nav */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 pb-8 border-b border-white/10 mb-6">

          {/* Wordmark + tagline */}
          <NextLink href="/" className="no-underline">
            <span className="font-editorial font-black text-[22px] text-white tracking-[-0.03em] leading-tight block">
              History is for Everyone
            </span>
            <p className="font-editorial italic font-light text-[14px] text-white/60 mt-1.5">
              The American Revolution, town by town.
            </p>
          </NextLink>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex gap-8 list-none m-0 p-0">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <NextLink
                    href={href}
                    className="font-ui text-[10px] font-medium tracking-[0.2em] uppercase text-white/75 no-underline hover:text-white transition-colors"
                  >
                    {label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between">
          <p className="font-ui text-[11px] text-white/50 tracking-[0.08em]">
            © {new Date().getFullYear()} History Is For Everyone
          </p>
          <p className="font-ui text-[10px] text-white/50 tracking-[0.08em]">
            Made in Massachusetts
          </p>
        </div>
      </div>
    </footer>
  );
}
