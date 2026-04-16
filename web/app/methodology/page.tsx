import NextLink from "next/link";

export const metadata = {
  title: "Methodology | History Is For Everyone",
  description: "How towns are researched, sourced, and updated.",
};

export default function MethodologyPage() {
  return (
    <main>
      {/* Hero — crimson */}
      <section className="bg-[#cc3322] border-b-4 border-[#14100a] py-20 px-6 sm:px-16 relative overflow-hidden">
        <div aria-hidden className="absolute right-[-10px] top-[-20px] font-display leading-none pointer-events-none select-none text-white/[0.06]" style={{ fontSize: "clamp(120px,24vw,360px)", letterSpacing: "-0.05em" }}>
          Method
        </div>
        <svg className="absolute top-5 right-5 pointer-events-none" width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden style={{ opacity: 0.18 }}>
          <path d="M11 25 L12.4 30 L18 30 L13.5 33.5 L15 39 L11 35.8 L7 39 L8.5 33.5 L4 30 L9.6 30 Z" fill="#e8b84b" />
          <path d="M38 10 L39 13 L42 13 L39.8 14.8 L40.8 18 L38 16.2 L35.2 18 L36.2 14.8 L34 13 L37 13 Z" fill="#f2e6c8" />
        </svg>
        <div className="absolute top-10 right-10 rotate-[4deg] font-editorial font-bold text-[11px] tracking-[0.12em] uppercase text-[rgba(242,230,200,0.6)] border-[2.5px] border-[rgba(242,230,200,0.3)] px-3.5 py-2 hidden sm:block">
          Open Research
        </div>
        <div className="relative z-10 max-w-[720px]">
          <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-[rgba(242,230,200,0.5)] flex items-center gap-2.5 mb-8">
            <span className="w-5 h-[2px] bg-[rgba(242,230,200,0.4)] block" />
            Transparency
          </p>
          <h1 className="font-editorial font-black text-[#f2e6c8] leading-[0.92] tracking-[-0.04em]" style={{ fontSize: "clamp(40px,7vw,96px)" }}>
            How We Work
          </h1>
          <div className="w-12 h-[3px] bg-[rgba(242,230,200,0.4)] my-8" />
          <p className="font-editorial italic font-light text-[18px] sm:text-[20px] leading-[1.65] text-[rgba(242,230,200,0.75)] max-w-[540px]">
            Every town score, source citation, and editorial decision is documented here. Trust requires transparency — and we want readers to push back when we get things wrong.
          </p>
          <svg width="220" height="10" viewBox="0 0 220 10" style={{ display: "block", marginTop: "24px" }} aria-hidden>
            <path d="M0 6 Q14 1 27 6 Q41 11 55 5 Q68 0 82 5 Q96 10 110 5 Q123 1 137 5 Q151 10 165 5 Q178 1 192 5 Q206 10 220 4" stroke="rgba(242,230,200,0.35)" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#f2ece0] py-16 px-6 sm:px-16 border-b-4 border-[#14100a]">
        <div className="mx-auto max-w-[820px] grid md:grid-cols-[1fr_220px] gap-16 items-start">

          {/* Main */}
          <div>
            {[
              {
                id: "what",
                label: "What Is This Project?",
                body: [
                  "History Is For Everyone is a public-good research project dedicated to making America's Revolutionary War heritage accessible, trustworthy, and useful — especially for educators. We believe the stories of the founding era belong to everyone: not just well-funded museums or towns already on every tourist map, but every community that played a part in creating the country.",
                  "The project operates as an open research network. We publish our methodology, sources, and scoring rationale so readers can evaluate our claims for themselves. When we are uncertain, we say so. When evidence is thin, we label it. When we change a score or revise a narrative, the change is logged publicly.",
                ],
              },
              {
                id: "selection",
                label: "Town Selection",
                body: [
                  "A town enters our network when it meets two criteria: documented involvement in the Revolutionary period (roughly 1763–1783), and at least one surviving historical resource a visitor can experience today.",
                  "We intentionally include communities beyond the well-known battlefields — towns where committees of correspondence met, where militia organized, where enslaved people navigated the war's contradictions, where women ran farms and supply lines. Our goal is a network, not a greatest-hits list.",
                ],
              },
              {
                id: "links",
                label: "Link Types",
                body: [
                  "Towns connect through typed links, each representing a historically documented relationship. Links are weighted by significance and always include a brief explanation of the connection.",
                  "Current link types include: shared events (two towns involved in the same military action or political movement), shared people (historical figures active in both locations), shared themes (parallel experiences like "citizen soldiers" or "maritime resistance"), and shared routes (physical paths like the Boston Post Road or Paul Revere's ride).",
                ],
              },
              {
                id: "updates",
                label: "Update Philosophy",
                body: [
                  "Town profiles are living documents. Scores change when new sources are added, when preservation conditions shift, or when our scoring methodology evolves. Every change is logged with a timestamp, a summary, and — where applicable — a public note explaining the reasoning.",
                  "We do not aim for consensus — we aim for transparency. If you disagree with a score or characterization, the sourcing is visible. Corrections, source suggestions, and factual challenges are welcome via the Partner page.",
                ],
              },
            ].map(({ id, label, body }) => (
              <section key={id} id={id} className="mb-14">
                <div className="border-t-[3px] border-[#14100a] pt-6 mb-5">
                  <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-[#cc3322] flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-[#cc3322] before:block">
                    {label}
                  </p>
                </div>
                {body.map((para, i) => (
                  <p key={i} className="font-editorial text-[17px] leading-[1.75] text-[#14100a] mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </section>
            ))}

            {/* Source Tiers */}
            <section id="source-tiers" className="mb-14">
              <div className="border-t-[3px] border-[#14100a] pt-6 mb-5">
                <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-[#cc3322] flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-[#cc3322] before:block">
                  Source Credibility Tiers
                </p>
              </div>
              <p className="font-editorial text-[17px] leading-[1.75] text-[#14100a] mb-6">
                Every source cited in a town profile is assigned a credibility tier. This does not mean lower-tier sources are unreliable — it means we want readers to understand the evidentiary basis for what they're reading.
              </p>
              <div className="space-y-0">
                {[
                  { tier: "Tier 1", name: "Institutional & Academic", desc: "Peer-reviewed scholarship, National Park Service documentation, Library of Congress materials, state archives, and primary documents. These form the backbone of every town profile." },
                  { tier: "Tier 2", name: "Reputable Secondary", desc: "Published books by established historians, long-form journalism from recognized outlets, and well-sourced local historical society publications." },
                  { tier: "Tier 3", name: "General Reference", desc: "Wikipedia (verified against citations), tourism board materials, and community-contributed content. Factual claims are verified against higher-tier sources before inclusion." },
                ].map(({ tier, name, desc }) => (
                  <div key={tier} className="flex gap-5 py-5 border-b border-[rgba(20,16,10,0.08)] last:border-b-0">
                    <div className="flex-shrink-0 w-14">
                      <span className="font-display text-[22px] text-[#cc3322] leading-none">{tier.replace("Tier ", "T")}</span>
                    </div>
                    <div>
                      <p className="font-editorial font-black text-[16px] text-[#14100a] leading-snug">{name}</p>
                      <p className="font-ui text-[13px] text-[rgba(20,16,10,0.6)] leading-relaxed mt-1">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="pt-8 border-t border-[rgba(20,16,10,0.1)]">
              <p className="font-ui text-[11px] text-[rgba(20,16,10,0.4)]">
                Last reviewed: February 2026. Changes will be documented in the{" "}
                <NextLink href="/changelog" className="text-[#1a3a72] hover:text-[#cc3322] transition-colors no-underline border-b border-[rgba(26,58,114,0.3)]">
                  changelog
                </NextLink>.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div>
              <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-[rgba(20,16,10,0.3)] mb-3">On This Page</p>
              <ul>
                {[
                  { label: "What Is This?", id: "what" },
                  { label: "Town Selection", id: "selection" },
                  { label: "Link Types", id: "links" },
                  { label: "Source Tiers", id: "source-tiers" },
                  { label: "Updates", id: "updates" },
                ].map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="no-underline flex items-center gap-2 py-2.5 border-b border-[rgba(20,16,10,0.08)] font-ui text-[13px] text-[#14100a] hover:text-[#cc3322] transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#cc3322] flex-shrink-0" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l-[4px] border-[#cc3322] pl-4">
              <p className="font-editorial italic text-[14px] text-[rgba(20,16,10,0.6)] leading-relaxed">
                &ldquo;History is not a finished product, and neither is this project.&rdquo;
              </p>
            </div>
            <NextLink href="/changelog" className="no-underline block border-[3px] border-[#14100a] p-4 hover:bg-[#1a3a72] hover:border-[#1a3a72] group transition-colors">
              <p className="font-ui text-[9px] uppercase tracking-[0.12em] text-[rgba(20,16,10,0.4)] group-hover:text-[rgba(242,230,200,0.5)] mb-1">See also</p>
              <p className="font-editorial text-[16px] text-[#14100a] group-hover:text-[#f2e6c8] transition-colors">Changelog →</p>
            </NextLink>
          </aside>
        </div>
      </section>
    </main>
  );
}
