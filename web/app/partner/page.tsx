import Stripe from 'stripe';

export const metadata = {
  title: "Partner With Us | History is for Everyone",
  description:
    "Join the Revolutionary Town Network. Tourism boards and historical societies can feature their town's story with professional presentation and analytics.",
};

interface PriceData {
  id: string;
  unitAmount: number | null;
  currency: string;
  nickname: string | null;
}

const FALLBACK_PRICES = {
  plus: { id: '', unitAmount: 9900, currency: 'usd', nickname: null } as PriceData,
  pro:  { id: '', unitAmount: 29900, currency: 'usd', nickname: null } as PriceData,
};

async function fetchStripePrices(): Promise<{ plus: PriceData; pro: PriceData }> {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const plusId    = process.env.STRIPE_PRICE_PLUS_MONTHLY;
  const proId     = process.env.STRIPE_PRICE_PRO_MONTHLY;

  if (!secretKey || !plusId || !proId) {
    return FALLBACK_PRICES;
  }

  try {
    const stripe = new Stripe(secretKey, { apiVersion: '2025-04-30.basil' as any });
    const [plus, pro] = await Promise.all([
      stripe.prices.retrieve(plusId),
      stripe.prices.retrieve(proId),
    ]);
    return {
      plus: { id: plus.id, unitAmount: plus.unit_amount, currency: plus.currency, nickname: plus.nickname },
      pro:  { id: pro.id,  unitAmount: pro.unit_amount,  currency: pro.currency,  nickname: pro.nickname },
    };
  } catch {
    return FALLBACK_PRICES;
  }
}

export default async function PartnerPage() {
  const prices = await fetchStripePrices();
  const plusDisplay = prices.plus.unitAmount != null
    ? `$${Math.round(prices.plus.unitAmount / 100)}`
    : '$99';
  const proDisplay = prices.pro.unitAmount != null
    ? `$${Math.round(prices.pro.unitAmount / 100)}`
    : '$299';

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0a0e1a] py-24 px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-ui text-[0.7rem] uppercase tracking-[0.15em] text-white/40 mb-4">Partnership Program</p>
          <h1 className="font-display text-white leading-[0.9]" style={{ fontSize: "clamp(60px,10vw,140px)" }}>
            Partner With Us
          </h1>
          <p className="font-editorial italic text-white/60 text-[1.1rem] mt-6 max-w-[500px] leading-relaxed">
            Every town already has a public profile. Partnership is for communities that want to shape how their story is told, reach teachers and travelers, and understand who is engaging with their history.
          </p>
        </div>
      </section>

      {/* What stays open */}
      <section className="py-20 bg-[#f2ece0] px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-ui text-[0.7rem] uppercase tracking-[0.15em] text-[#0e1428]/40 mb-3">Always Free</p>
          <h2 className="font-display text-[2.5rem] text-[#0e1428] mb-3">Open to everyone, always</h2>
          <p className="font-editorial italic text-[#0e1428]/60 text-[1rem] max-w-[600px] mb-6">
            Partnership adds capabilities on top of a foundation that remains open to everyone.
          </p>
          <div className="border-b border-[#0e1428]/10 mb-8" />
          <ul className="space-y-3">
            <OpenFeature>Public town profiles with full historical content</OpenFeature>
            <OpenFeature>Teacher modules — lesson plans, primary sources, quizzes</OpenFeature>
            <OpenFeature>Network search and cross-town connections</OpenFeature>
            <OpenFeature>Source citations and credibility tiers on every claim</OpenFeature>
          </ul>
        </div>
      </section>

      {/* What Partners Get */}
      <section className="py-20 bg-[#f2ece0] px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-ui text-[0.7rem] uppercase tracking-[0.15em] text-[#0e1428]/40 mb-3">Partner Benefits</p>
          <h2 className="font-display text-[2.5rem] text-[#0e1428] mb-6">What partners receive</h2>
          <div className="border-b border-[#0e1428]/10 mb-8" />

          <div className="grid md:grid-cols-2 gap-8">
            <FeatureItem
              title="Official Network Membership"
              description="Your town joins the verified network of Revolutionary sites. Visitors see the 'Official Revolutionary Town Network Member' badge, signaling quality and authenticity."
            />
            <FeatureItem
              title="Content Integration"
              description="Bring your town's profile into your own digital presence through our partner API. Your data, your design — updated automatically as content improves."
            />
            <FeatureItem
              title="Analytics Dashboard"
              description="See how visitors engage with your town's content: page views, teacher downloads, comparison searches, and referral sources."
            />
            <FeatureItem
              title="Content Suggestions"
              description="Our scoring system identifies opportunities to improve your town's profile: missing stories, undocumented events, or sources that could be added."
            />
            <FeatureItem
              title="Teacher Reach"
              description="Your town's lesson plans, primary source packets, and quizzes reach educators nationwide through our teacher module system."
            />
            <FeatureItem
              title="Network Connections"
              description="Your town automatically links to related sites through shared events, people, themes, and routes — driving cross-visitation."
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-[#f2ece0] px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-ui text-[0.7rem] uppercase tracking-[0.15em] text-[#0e1428]/40 mb-3">Pricing</p>
          <h2 className="font-display text-[2.5rem] text-[#0e1428] mb-3">Partnership tiers</h2>
          <p className="font-editorial italic text-[#0e1428]/60 text-[1rem] max-w-[500px] mb-8">
            Choose the level that fits your organization&apos;s needs.
          </p>
          <div className="border-b border-[#0e1428]/10 mb-10" />

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="border-t-4 border-[#0e1428]/20 pt-6">
              <p className="font-ui text-[0.7rem] uppercase tracking-[0.15em] text-[#0e1428]/40 mb-4">Basic</p>
              <div className="mb-1">
                <span className="font-display text-[4rem] text-[#0e1428] leading-none">Open</span>
              </div>
              <p className="font-ui text-[0.85rem] text-[#0e1428]/50 mb-6">For towns exploring the network</p>

              <ul className="space-y-3 mb-8">
                <PricingFeature included>Basic town profile</PricingFeature>
                <PricingFeature included>Network membership badge</PricingFeature>
                <PricingFeature included>Teacher module access</PricingFeature>
                <PricingFeature>Custom branding</PricingFeature>
                <PricingFeature>Analytics dashboard</PricingFeature>
              </ul>

              <a
                href="/partner/inquire?tier=BASIC"
                className="no-underline inline-block border border-[#0e1428] text-[#0e1428] font-ui font-medium text-[0.8rem] uppercase tracking-[0.12em] px-6 py-3 hover:bg-[#0e1428] hover:text-white transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Plus — featured */}
            <div className="border-t-4 border-[#c8222a] pt-6">
              <div className="flex items-center justify-between mb-4">
                <p className="font-ui text-[0.7rem] uppercase tracking-[0.15em] text-[#0e1428]/40">Plus</p>
                <span className="font-ui font-medium text-[0.65rem] uppercase tracking-[0.1em] text-white bg-[#c8222a] px-2 py-0.5">
                  Popular
                </span>
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-display text-[4rem] text-[#0e1428] leading-none">{plusDisplay}</span>
                <span className="font-ui text-[#0e1428]/50 text-[0.9rem]">/month</span>
              </div>
              <p className="font-ui text-[0.85rem] text-[#0e1428]/50 mb-6">For active tourism boards</p>

              <ul className="space-y-3 mb-8">
                <PricingFeature included>Everything in Basic</PricingFeature>
                <PricingFeature included>Custom branding</PricingFeature>
                <PricingFeature included>Basic analytics</PricingFeature>
                <PricingFeature included>Priority support</PricingFeature>
                <PricingFeature>Advanced analytics</PricingFeature>
              </ul>

              <a
                href="/partner/inquire?tier=PLUS"
                className="no-underline inline-block bg-[#c8222a] border border-[#c8222a] text-white font-ui font-medium text-[0.8rem] uppercase tracking-[0.12em] px-6 py-3 hover:bg-[#a01b22] hover:border-[#a01b22] transition-colors"
              >
                Start Plus Trial
              </a>
            </div>

            {/* Pro */}
            <div className="border-t-4 border-[#0e1428]/20 pt-6">
              <p className="font-ui text-[0.7rem] uppercase tracking-[0.15em] text-[#0e1428]/40 mb-4">Pro</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-display text-[4rem] text-[#0e1428] leading-none">{proDisplay}</span>
                <span className="font-ui text-[#0e1428]/50 text-[0.9rem]">/month</span>
              </div>
              <p className="font-ui text-[0.85rem] text-[#0e1428]/50 mb-6">For regional networks</p>

              <ul className="space-y-3 mb-8">
                <PricingFeature included>Everything in Plus</PricingFeature>
                <PricingFeature included>Advanced analytics</PricingFeature>
                <PricingFeature included>API access</PricingFeature>
                <PricingFeature included>Custom integrations</PricingFeature>
                <PricingFeature included>Dedicated support</PricingFeature>
                <PricingFeature included>Multi-town management</PricingFeature>
              </ul>

              <a
                href="/partner/inquire?tier=PRO"
                className="no-underline inline-block border border-[#0e1428] text-[#0e1428] font-ui font-medium text-[0.8rem] uppercase tracking-[0.12em] px-6 py-3 hover:bg-[#0e1428] hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry CTA Banner */}
      <section className="bg-[#0a0e1a] py-20 px-8 md:px-16">
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-display text-white leading-none" style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
              Ready to join the <span className="text-[#c8222a]">network?</span>
            </p>
            <p className="font-editorial italic text-white/50 text-[1rem] mt-3 max-w-[420px]">
              Tell us about your organization and the town you serve. We review every inquiry personally.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="/partner/inquire"
              className="no-underline border border-white text-white font-ui font-medium text-[0.8rem] uppercase tracking-[0.12em] px-8 py-3 hover:bg-[#c8222a] hover:border-[#c8222a] transition-colors whitespace-nowrap"
            >
              Submit an Inquiry
            </a>
            <a
              href="/towns"
              className="no-underline border border-white/30 text-white/60 font-ui font-medium text-[0.8rem] uppercase tracking-[0.12em] px-8 py-3 hover:border-white hover:text-white transition-colors whitespace-nowrap"
            >
              Browse the Network
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function OpenFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3">
      <span className="text-[#c8222a] font-bold text-[1rem]" aria-hidden="true">✓</span>
      <span className="font-ui text-[0.95rem] text-[#0e1428]/70">{children}</span>
    </li>
  );
}

function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-b border-[#0e1428]/8 pb-6">
      <div className="flex gap-3 items-start mb-2">
        <div className="w-2 h-2 bg-[#c8222a] rounded-full shrink-0 mt-1.5" />
        <h3 className="font-editorial text-[1.1rem] text-[#0e1428]">{title}</h3>
      </div>
      <p className="font-ui text-[0.875rem] text-[#0e1428]/60 leading-relaxed pl-5">{description}</p>
    </div>
  );
}

function PricingFeature({
  children,
  included = false,
}: {
  children: React.ReactNode;
  included?: boolean;
}) {
  return (
    <li className="flex items-center gap-3">
      {included ? (
        <span className="text-[#c8222a] font-bold text-[1rem]" aria-hidden="true">✓</span>
      ) : (
        <span className="text-[#0e1428]/20 text-[1rem]" aria-hidden="true">–</span>
      )}
      <span className={`font-ui text-[0.875rem] ${included ? "text-[#0e1428]" : "text-[#0e1428]/30"}`}>
        {children}
      </span>
    </li>
  );
}
