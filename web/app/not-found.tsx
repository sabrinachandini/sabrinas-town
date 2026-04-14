import NextLink from "next/link";

export default function NotFound() {
  return (
    <main>
      {/* Hero — ink background */}
      <section className="bg-[#14100a] border-b-4 border-[#cc3322] py-20 px-6 sm:px-16 relative overflow-hidden">
        {/* Ghost "404" */}
        <div
          className="absolute right-[-20px] top-[-40px] font-display text-white/[0.03] leading-none pointer-events-none select-none"
          style={{ fontSize: "clamp(200px, 35vw, 420px)" }}
          aria-hidden="true"
        >
          404
        </div>

        {/* Tilted stamp */}
        <div className="absolute top-10 right-10 rotate-[6deg] font-editorial font-bold text-[11px] tracking-[0.12em] uppercase text-[#cc3322] border-[2.5px] border-[#cc3322] px-3.5 py-2 opacity-60 hidden sm:block">
          Page Not Found
        </div>

        <div className="relative z-10 max-w-[720px]">
          <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-[rgba(242,230,200,0.4)] flex items-center gap-2.5 mb-8">
            <span className="w-5 h-[2px] bg-[rgba(242,230,200,0.3)] block" />
            Error 404
          </p>

          <h1
            className="font-editorial font-black text-[#f2e6c8] leading-[0.92] tracking-[-0.04em]"
            style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
          >
            America wasn&rsquo;t built<br />
            in a day —{" "}
            <em className="font-editorial italic font-light text-[#cc3322]">
              and neither was our site.
            </em>
          </h1>

          <div className="w-12 h-[3px] bg-[#cc3322] my-8" />

          <p className="font-editorial italic font-light text-[18px] sm:text-[20px] leading-[1.65] text-[rgba(242,230,200,0.65)] max-w-[520px]">
            The page you&rsquo;re looking for hasn&rsquo;t been documented yet — or may have marched to a different address. Every revolution has setbacks.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <NextLink
              href="/towns"
              className="no-underline bg-[#cc3322] text-[#f2e6c8] font-ui font-semibold text-[11px] uppercase tracking-[0.2em] px-8 py-4 border-2 border-[#cc3322] hover:bg-[#a81c22] hover:border-[#a81c22] transition-colors"
            >
              Browse All Towns
            </NextLink>
            <NextLink
              href="/"
              className="no-underline text-[#f2e6c8] font-ui font-semibold text-[11px] uppercase tracking-[0.2em] px-8 py-4 border-2 border-[rgba(242,230,200,0.3)] hover:border-[#f2e6c8] transition-colors"
            >
              Back to Home
            </NextLink>
          </div>
        </div>
      </section>

      {/* Quick links — cream background */}
      <section className="bg-[#f8f0d8] py-14 px-6 sm:px-16 border-b-4 border-[#14100a]">
        <div className="max-w-[720px]">
          <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-[#cc3322] flex items-center gap-2.5 mb-8">
            <span className="w-5 h-[2px] bg-[#cc3322] block" />
            Try These Instead
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-t-2 border-[#14100a]">
            {[
              { label: "Towns", href: "/towns" },
              { label: "Teach", href: "/teach" },
              { label: "Methodology", href: "/methodology" },
              { label: "About", href: "/about" },
            ].map(({ label, href }) => (
              <NextLink
                key={href}
                href={href}
                className="no-underline flex items-center gap-2 px-4 py-4 border-b border-r border-[rgba(20,16,10,0.12)] last:border-r-0 font-ui text-[12px] text-[#14100a] hover:bg-[#1a3a72] hover:text-[#f2e6c8] transition-colors duration-150 [&:hover_.dot]:bg-[#e8b84b]"
              >
                <span className="dot w-[5px] h-[5px] rounded-full bg-[#cc3322] flex-shrink-0 transition-colors" />
                {label}
              </NextLink>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
