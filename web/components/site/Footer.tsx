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
    <footer className="bg-[#f8f0d8] border-t-4 border-[#14100a] px-8 md:px-10 pt-10 pb-8">
      <div className="mx-auto max-w-[1200px]">

        {/* Top row: wordmark + nav */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 pb-8 border-b-2 border-[rgba(20,16,10,0.12)] mb-6">

          {/* Wordmark + tagline */}
          <NextLink href="/" className="no-underline">
            <span className="font-editorial font-black text-[22px] text-[#14100a] tracking-[-0.03em] leading-tight block">
              History is for Everyone
            </span>
            <p className="font-editorial italic font-light text-[14px] text-[rgba(20,16,10,0.55)] mt-1.5">
              The American Revolution, town by town.
            </p>
          </NextLink>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-2 list-none m-0 p-0">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <NextLink
                    href={href}
                    className="font-ui text-[10px] font-medium tracking-[0.2em] uppercase text-[rgba(20,16,10,0.6)] no-underline hover:text-[#cc3322] transition-colors"
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
          <p className="font-ui text-[11px] text-[rgba(20,16,10,0.4)] tracking-[0.08em]">
            © {new Date().getFullYear()} History Is For Everyone
          </p>
          <p className="font-ui text-[10px] text-[rgba(20,16,10,0.4)] tracking-[0.08em]">
            Made in Massachusetts
          </p>
        </div>
      </div>
    </footer>
  );
}
