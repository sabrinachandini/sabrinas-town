import NextLink from "next/link";

const NAV_LINKS = [
  { label: "Towns",   href: "/towns" },
  { label: "People",  href: "/towns" },
  { label: "Stories", href: "/towns" },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "/partner" },
];

export function Footer() {
  return (
    <footer className="bg-[#14100a] px-10 pt-12 pb-8 border-t-4 border-[#cc3322]">

      {/* Top row */}
      <div className="flex items-start justify-between pb-8 border-b border-[rgba(242,230,200,0.1)] mb-6">

        {/* Left: logo + tagline */}
        <div>
          <p className="font-editorial font-black text-[28px] text-[#f2e6c8] tracking-[-0.03em] leading-none">
            History Is <span className="text-[#cc3322]">For Everyone</span>
          </p>
          <p className="font-editorial italic font-light text-[15px] text-[rgba(242,230,200,0.4)] mt-2">
            The American Revolution, town by town.
          </p>
        </div>

        {/* Right: nav links */}
        <ul className="flex gap-12 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <NextLink
                href={href}
                className="font-ui text-[11px] font-normal tracking-[0.16em] uppercase text-[rgba(242,230,200,0.35)] no-underline hover:text-[#f2e6c8] transition-colors"
              >
                {label}
              </NextLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between">
        <p className="font-ui text-[11px] text-[rgba(242,230,200,0.2)] tracking-[0.08em]">
          © {new Date().getFullYear()} History Is For Everyone
        </p>
        <p className="font-ui text-[10px] text-[rgba(242,230,200,0.15)] tracking-[0.08em]">
          Made in Massachusetts
        </p>
      </div>
    </footer>
  );
}
