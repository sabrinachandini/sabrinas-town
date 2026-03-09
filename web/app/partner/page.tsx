import Stripe from 'stripe';
import {
  Container,
  Heading,
  Text,
  Button,
  PageHero,
  SectionHeader,
} from "@/components/ui";

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
      <PageHero
        bg="navy"
        overline="Partnership Program"
        title="Partner With Us"
        titleEmphasis="Partner"
        body="Every town already has a public profile. Partnership is for communities that want to shape how their story is told, reach teachers and travelers, and understand who is engaging with their history."
      />

      {/* What stays open */}
      <section className="py-20 bg-ivory">
        <Container>
          <SectionHeader
            overline="Always Free"
            title="Open to everyone, always"
          />
          <p className="font-serif text-[1.05rem] text-charcoal max-w-[600px] mb-8 -mt-4">
            Partnership adds capabilities on top of a foundation that remains
            open to everyone.
          </p>
          <ul className="space-y-3">
            <OpenFeature>Public town profiles with full historical content</OpenFeature>
            <OpenFeature>Teacher modules — lesson plans, primary sources, quizzes</OpenFeature>
            <OpenFeature>Network search and cross-town connections</OpenFeature>
            <OpenFeature>Source citations and credibility tiers on every claim</OpenFeature>
          </ul>
        </Container>
      </section>

      {/* What Partners Get */}
      <section className="py-20 bg-cream">
        <Container>
          <SectionHeader
            overline="Partner Benefits"
            title="What partners receive"
          />

          <div className="grid md:grid-cols-2 gap-5">
            <FeatureCard
              title="Official Network Membership"
              description="Your town joins the verified network of Revolutionary sites. Visitors see the 'Official Revolutionary Town Network Member' badge, signaling quality and authenticity."
            />
            <FeatureCard
              title="Content Integration"
              description="Bring your town's profile into your own digital presence through our partner API. Your data, your design — updated automatically as content improves."
            />
            <FeatureCard
              title="Analytics Dashboard"
              description="See how visitors engage with your town's content: page views, teacher downloads, comparison searches, and referral sources."
            />
            <FeatureCard
              title="Content Suggestions"
              description="Our scoring system identifies opportunities to improve your town's profile: missing stories, undocumented events, or sources that could be added."
            />
            <FeatureCard
              title="Teacher Reach"
              description="Your town's lesson plans, primary source packets, and quizzes reach educators nationwide through our teacher module system."
            />
            <FeatureCard
              title="Network Connections"
              description="Your town automatically links to related sites through shared events, people, themes, and routes — driving cross-visitation."
            />
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-ivory">
        <Container>
          <SectionHeader
            overline="Pricing"
            title="Partnership tiers"
          />
          <p className="font-serif text-[1.05rem] text-charcoal max-w-[500px] mb-10 -mt-4">
            Choose the level that fits your organization&apos;s needs.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Basic */}
            <div className="bg-navy text-white p-6">
              <p className="font-condensed font-bold text-[0.75rem] tracking-[0.14em] uppercase text-gold mb-3">
                Basic
              </p>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="font-heading font-black text-[2.5rem] text-white leading-none">
                  Open
                </span>
              </div>
              <p className="font-serif text-[0.9rem] text-fog mb-6">
                For towns exploring the network
              </p>

              <ul className="space-y-3 mb-8">
                <PricingFeature included>Basic town profile</PricingFeature>
                <PricingFeature included>Network membership badge</PricingFeature>
                <PricingFeature included>Teacher module access</PricingFeature>
                <PricingFeature>Custom branding</PricingFeature>
                <PricingFeature>Analytics dashboard</PricingFeature>
              </ul>

              <Button
                href="/partner/inquire?tier=BASIC"
                variant="outline"
                className="w-full"
              >
                Get Started
              </Button>
            </div>

            {/* Plus — featured */}
            <div className="bg-navy text-white p-6 border-t-4 border-[#C4923B]">
              <div className="flex items-center justify-between mb-3">
                <p className="font-condensed font-bold text-[0.75rem] tracking-[0.14em] uppercase text-gold">
                  Plus
                </p>
                <span className="px-2 py-0.5 bg-crimson text-white font-condensed font-bold text-[0.7rem] tracking-wide uppercase">
                  Popular
                </span>
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-heading font-black text-[2.5rem] text-white leading-none">
                  {plusDisplay}
                </span>
                <span className="font-serif text-fog text-[0.9rem]">/month</span>
              </div>
              <p className="font-serif text-[0.9rem] text-fog mb-6">
                For active tourism boards
              </p>

              <ul className="space-y-3 mb-8">
                <PricingFeature included>Everything in Basic</PricingFeature>
                <PricingFeature included>Custom branding</PricingFeature>
                <PricingFeature included>Basic analytics</PricingFeature>
                <PricingFeature included>Priority support</PricingFeature>
                <PricingFeature>Advanced analytics</PricingFeature>
              </ul>

              <Button
                href="/partner/inquire?tier=PLUS"
                variant="primary"
                className="w-full"
              >
                Start Plus Trial
              </Button>
            </div>

            {/* Pro */}
            <div className="bg-navy text-white p-6">
              <p className="font-condensed font-bold text-[0.75rem] tracking-[0.14em] uppercase text-gold mb-3">
                Pro
              </p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-heading font-black text-[2.5rem] text-white leading-none">
                  {proDisplay}
                </span>
                <span className="font-serif text-fog text-[0.9rem]">/month</span>
              </div>
              <p className="font-serif text-[0.9rem] text-fog mb-6">
                For regional networks
              </p>

              <ul className="space-y-3 mb-8">
                <PricingFeature included>Everything in Plus</PricingFeature>
                <PricingFeature included>Advanced analytics</PricingFeature>
                <PricingFeature included>API access</PricingFeature>
                <PricingFeature included>Custom integrations</PricingFeature>
                <PricingFeature included>Dedicated support</PricingFeature>
                <PricingFeature included>Multi-town management</PricingFeature>
              </ul>

              <Button
                href="/partner/inquire?tier=PRO"
                variant="outline"
                className="w-full"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Inquiry CTA */}
      <section className="py-16 bg-crimson">
        <Container>
          <div className="text-center">
            <h2 className="font-heading font-black text-white text-[2rem] md:text-[2.75rem] leading-tight mb-4">
              Ready to join the network?
            </h2>
            <p className="font-serif text-[1.05rem] text-white/80 max-w-[500px] mx-auto mb-10">
              Tell us about your organization and the town you serve. We review
              every inquiry personally.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/partner/inquire" variant="outline">
                Submit an Inquiry
              </Button>
              <Button href="/towns" variant="outline">
                Browse the Network
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function OpenFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3">
      <span className="text-crimson font-bold text-[1rem]" aria-hidden="true">
        ✓
      </span>
      <span className="font-serif text-[1rem] text-charcoal">{children}</span>
    </li>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-cream border border-[#DDD8CE] border-l-4 border-l-crimson p-5">
      <h3 className="font-heading font-bold text-[1.1rem] text-navy mb-2">
        {title}
      </h3>
      <p className="font-serif text-[0.95rem] text-charcoal leading-relaxed">
        {description}
      </p>
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
        <span className="text-gold font-bold text-[1rem]" aria-hidden="true">✓</span>
      ) : (
        <span className="text-white/30 text-[1rem]" aria-hidden="true">–</span>
      )}
      <span
        className={`font-serif text-[0.9rem] ${included ? "text-white" : "text-white/40"}`}
      >
        {children}
      </span>
    </li>
  );
}
