export const metadata = {
  title: "Partner With Us | History is for Everyone",
  description:
    "Join the Revolutionary Town Network. Tourism boards and historical societies can feature their town's story with professional presentation and analytics.",
  openGraph: {
    title: "Partner With Us",
    description: "Join the Revolutionary Town Network. Tourism boards and historical societies can feature their town's story.",
    url: "https://sabrinas-town.vercel.app/partner",
  },
  alternates: { canonical: "https://sabrinas-town.vercel.app/partner" },
};

const PROPOSITIONS = [
  {
    title: "Shape your story",
    body: "Contribute edits, corrections, and richer source material to your town\u2019s profile.",
  },
  {
    title: "Reach teachers",
    body: "Your lesson plans and primary source packets distributed to educators nationwide.",
  },
  {
    title: "Understand visitors",
    body: "Analytics on who finds your town, from where, and what they engage with most.",
  },
  {
    title: "Drive discovery",
    body: "Cross-town links route travelers through shared events, people, and routes.",
  },
];

const BENEFITS = [
  {
    title: "Official Network Membership",
    body: "Your town joins the verified network. Visitors see the \u201cOfficial Revolutionary Town Network Member\u201d badge, signaling quality and authenticity.",
  },
  {
    title: "Content Integration",
    body: "Bring your town\u2019s profile into your own digital presence through our partner API. Your data, your design \u2014 updated automatically.",
  },
  {
    title: "Analytics Dashboard",
    body: "See how visitors engage: page views, teacher downloads, comparison searches, and referral sources.",
  },
  {
    title: "Content Suggestions",
    body: "Our scoring system identifies opportunities to improve your profile: missing stories, undocumented events, sources that could be added.",
  },
  {
    title: "Teacher Reach",
    body: "Your lesson plans and primary source packets reach educators nationwide through our teacher module system.",
  },
  {
    title: "Network Connections",
    body: "Your town automatically links to related sites through shared events, people, themes, and routes \u2014 driving cross-visitation.",
  },
];

const FREE_FEATURES = [
  "Public town profiles with full historical content",
  "Teacher modules \u2014 lesson plans, primary sources, quizzes",
  "Network search and cross-town connections",
  "Source citations and credibility tiers on every claim",
];

export default function PartnerPage() {
  return (
    <main>
      {/* CRIMSON hero */}
      <section className="bg-[#cc3322] border-b-4 border-[#14100a] py-12 sm:py-20 px-5 sm:px-16 relative overflow-hidden">
        {/* Ghost watermark */}
        <div aria-hidden className="absolute right-[-10px] top-[-20px] font-display leading-none pointer-events-none select-none text-white/[0.07]" style={{ fontSize: "clamp(140px,32vw,460px)", letterSpacing: "-0.05em" }}>
          Partner
        </div>

        <div className="relative z-10 max-w-[700px]">
          <p className="font-ui text-[11px] font-semibold tracking-[0.32em] uppercase text-[rgba(255,255,255,0.5)] flex items-center gap-3 mb-6">
            <span className="w-4 h-[2px] bg-[rgba(255,255,255,0.3)] block flex-shrink-0" />
            Partnership Program
          </p>

          <h1 className="font-display leading-[0.88] tracking-[-0.05em] m-0" style={{ fontSize: "clamp(40px,10vw,120px)" }}>
            <span className="text-white block">Partner</span>
            <span className="text-[#4A6A9B] block" style={{ transform: "rotate(-2deg) translateX(28px)", transformOrigin: "left center" }}>
              With
            </span>
            <span className="text-white block">Us.</span>
          </h1>

          <svg width="380" height="12" viewBox="0 0 340 12" className="block mt-7" aria-hidden>
            <path d="M0 8 Q21 2 42 8 Q63 14 85 7 Q106 1 127 7 Q148 13 170 7 Q191 2 212 7 Q233 13 255 7 Q276 2 297 7 Q318 13 340 6" stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>

          <p className="font-editorial italic font-light text-[16px] sm:text-[20px] text-[rgba(255,255,255,0.76)] max-w-[500px] mt-8 leading-[1.55]">
            Every town already has a public profile. Partnership is for communities that want to shape how their story is told, reach teachers and travelers, and understand who is engaging with their history.
          </p>

          <a
            href="/partner/inquire"
            className="no-underline block sm:inline-block mt-9 bg-[#1a3a72] text-[#f2e6c8] font-ui text-[11px] font-bold tracking-[0.18em] uppercase px-9 py-4 border-2 border-[#14100a] hover:bg-[#1a3a72] hover:border-[#1a3a72] transition-colors text-center sm:text-left"
            style={{ boxShadow: "5px 5px 0 rgba(255,255,255,0.25)" }}
          >
            Submit an Inquiry →
          </a>
        </div>
      </section>

      {/* NAVY propositions */}
      <section className="bg-[#1a3a72] border-b-4 border-[#14100a] py-10 sm:py-14 px-5 sm:px-16 relative overflow-hidden">
        {/* Ghost */}
        <div aria-hidden className="absolute right-5 top-[-10px] font-display text-[300px] leading-none text-white/[0.04] pointer-events-none select-none">
          ∞
        </div>

        <div className="relative z-10">
          <p className="font-ui text-[11px] font-semibold tracking-[0.32em] uppercase text-[rgba(255,255,255,0.42)] flex items-center gap-3 mb-7">
            <span className="w-4 h-[2px] bg-[rgba(255,255,255,0.3)] block flex-shrink-0" />
            What Partnership Adds
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
            {PROPOSITIONS.map((prop) => (
              <div key={prop.title} className="bg-white/[0.05] p-7">
                <div className="font-display text-[20px] text-[#4A6A9B] mb-3">→</div>
                <div className="font-display text-[18px] text-white tracking-[0.02em] mb-2.5">{prop.title}</div>
                <div className="font-editorial italic font-light text-[15px] text-[rgba(255,255,255,0.58)] leading-[1.55]">
                  {prop.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREAM always-free */}
      <section className="bg-[#f2e6c8] border-b-4 border-[#14100a] py-12 sm:py-16 px-5 sm:px-16 relative overflow-hidden">
        {/* Ghost */}
        <div aria-hidden className="absolute right-[-10px] bottom-[-20px] font-display text-[260px] leading-none text-[rgba(20,16,10,0.03)] pointer-events-none select-none tracking-[-0.04em]">
          Open
        </div>

        <div className="relative z-10 max-w-[640px] py-4">
          <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-[#cc3322] mb-3">
            Always Free
          </p>

          <h2 className="font-display leading-[0.92] tracking-[-0.04em] text-[#14100a] m-0" style={{ fontSize: "clamp(36px,4.5vw,60px)" }}>
            Open to everyone,{" "}
            <span className="text-[#cc3322] inline-block" style={{ transform: "rotate(-2deg)", transformOrigin: "left center" }}>
              always.
            </span>
          </h2>

          <p className="font-editorial italic font-light text-[18px] text-[rgba(20,16,10,0.52)] mt-4 mb-8 max-w-[520px] leading-[1.65]">
            Partnership adds capabilities on top of a foundation that remains open to everyone. No paywall on the history.
          </p>

          <div>
            {FREE_FEATURES.map((feature) => (
              <div key={feature} className="flex items-baseline gap-3 py-3.5 border-b border-[rgba(20,16,10,0.08)]">
                <span className="text-[#cc3322] font-ui font-black text-[15px] flex-shrink-0">✓</span>
                <span className="font-editorial italic font-light text-[17px] text-[rgba(20,16,10,0.72)]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INK benefits */}
      <section className="bg-[#1a3a72] border-b-4 border-[#cc3322] py-12 sm:py-16 px-5 sm:px-16 relative overflow-hidden">
        {/* Ghost */}
        <div aria-hidden className="absolute right-[-10px] bottom-[-20px] font-display text-[360px] leading-none text-white/[0.03] pointer-events-none select-none tracking-[-0.05em]">
          Benefits
        </div>

        <div className="relative z-10 py-4">
          <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-[#cc3322] mb-3">
            Partner Benefits
          </p>

          <h2 className="font-display leading-[0.92] tracking-[-0.04em] text-white m-0" style={{ fontSize: "clamp(36px,4.5vw,60px)" }}>
            What partners receive
          </h2>

          <p className="font-editorial italic font-light text-[17px] text-[rgba(255,255,255,0.42)] mt-5 mb-10 max-w-[520px] leading-[1.65]">
            Six capabilities that set partnered towns apart from standard profiles.
          </p>

          <div className="max-w-[760px]">
            {BENEFITS.map((benefit, i) => (
              <div key={benefit.title} className="flex gap-6 py-6 border-b border-white/[0.07]">
                <div className="font-display text-[15px] text-[#4A6A9B] opacity-55 w-7 flex-shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="font-editorial italic text-[20px] text-white mb-1.5">{benefit.title}</div>
                  <div className="font-ui text-[15px] text-[rgba(255,255,255,0.65)] leading-[1.65]">{benefit.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <section className="bg-[#f2ece0] border-b-4 border-[#14100a] py-12 sm:py-20 px-5 sm:px-16">
        <div className="mx-auto max-w-[720px]">
          <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-[rgba(20,16,10,0.4)] mb-3">
            Pricing
          </p>
          <h2 className="font-display text-[#14100a] leading-[0.92] tracking-[-0.04em] mb-4" style={{ fontSize: "clamp(36px,4.5vw,60px)" }}>
            Every partnership is different.
          </h2>
          <div className="w-12 h-[3px] bg-[#cc3322] mb-6" />
          <p className="font-editorial italic font-light text-[18px] text-[rgba(20,16,10,0.7)] leading-[1.75] mb-5 max-w-[580px]">
            Rather than fixed tiers, I work with each town or organization individually to understand
            what you actually need — and give you a quote based on that. Some partnerships are simple.
            Some are more involved. The price should reflect the work, not a pricing page.
          </p>
          <p className="font-editorial italic font-light text-[18px] text-[rgba(20,16,10,0.7)] leading-[1.75] mb-10 max-w-[580px]">
            Tell me about your town and what you&apos;re hoping to accomplish. I&apos;ll follow up
            personally with a proposal.
          </p>
          <a
            href="/partner/inquire"
            className="no-underline inline-block bg-[#cc3322] text-[#f2e6c8] font-ui text-[11px] font-bold tracking-[0.18em] uppercase px-8 py-4 border-2 border-[#cc3322] hover:bg-[#1a3a72] hover:border-[#14100a] transition-colors"
          >
            Request a Quote →
          </a>
        </div>
      </section>

      {/* CRIMSON closing CTA */}
      <section className="bg-[#cc3322] border-t-4 border-[#14100a] py-12 sm:py-20 px-5 sm:px-16 relative overflow-hidden">
        {/* Ghost */}
        <div aria-hidden className="absolute right-[-10px] bottom-[-24px] font-display text-[360px] leading-none text-white/[0.07] pointer-events-none select-none tracking-[-0.05em]">
          Join
        </div>

        <div className="relative z-10 max-w-[680px]">
          <div className="inline-block border-[2.5px] border-[rgba(255,255,255,0.45)] text-[rgba(255,255,255,0.65)] font-ui text-[11px] font-bold tracking-[0.28em] uppercase px-3.5 py-1.5 mb-5" style={{ transform: "rotate(-2.5deg)", transformOrigin: "left center" }}>
            Join the Network
          </div>

          <h2 className="font-display leading-[0.9] tracking-[-0.04em] text-white mt-3 m-0" style={{ fontSize: "clamp(40px,6vw,76px)" }}>
            Ready to join
            <br />
            <span className="text-white/25 italic inline-block" style={{ transform: "rotate(-1.5deg)", transformOrigin: "left center" }}>
              the network?
            </span>
          </h2>

          <svg width="300" height="12" viewBox="0 0 340 12" className="block my-5" aria-hidden>
            <path d="M0 8 Q21 2 42 8 Q63 14 85 7 Q106 1 127 7 Q148 13 170 7 Q191 2 212 7 Q233 13 255 7 Q276 2 297 7 Q318 13 340 6" stroke="rgba(255,255,255,0.38)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>

          <p className="font-editorial italic font-light text-[19px] text-[rgba(255,255,255,0.76)] mb-9 leading-[1.5]">
            Tell us about your organization and the town you serve. We review every inquiry personally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/partner/inquire"
              className="no-underline block text-center bg-[#1a3a72] text-[#f2e6c8] font-ui text-[11px] font-bold tracking-[0.18em] uppercase px-8 py-[18px] border-2 border-[#14100a] hover:bg-[#1a3a72] hover:border-[#1a3a72] transition-colors"
              style={{ boxShadow: "5px 5px 0 rgba(255,255,255,0.25)" }}
            >
              Submit an Inquiry
            </a>
            <a
              href="/towns"
              className="no-underline block text-center bg-transparent text-[rgba(255,255,255,0.65)] font-ui text-[11px] font-bold tracking-[0.18em] uppercase px-8 py-[18px] border-2 border-[rgba(255,255,255,0.3)] hover:border-white/60 hover:text-white transition-colors"
            >
              Browse the Network
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
