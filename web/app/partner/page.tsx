import {
  Container,
  Heading,
  Text,
  Link,
  Button,
  Divider,
} from "@/components/ui";

export const metadata = {
  title: "Partner With Us | Sabrina's Town",
  description:
    "Join the Revolutionary Town Network. Tourism boards and historical societies can feature their town's story with professional presentation and analytics.",
};

export default function PartnerPage() {
  return (
    <main className="py-section">
      <Container>
        {/* Header */}
        <Heading level={1}>Partner with Sabrina's Town</Heading>
        <Text className="mt-element max-w-[620px]">
          Every town in this network already has a public profile — scored,
          sourced, and connected to the broader story of the Revolution. That
          profile is free and always will be. Partnership is for the towns that
          want to go further: to shape how their story is told, to reach
          teachers and travelers through embeddable tools, and to understand who
          is engaging with their history. This isn't a claim-your-listing
          product. It's a stewardship model — your community's history,
          maintained with the same rigor we apply to every town, with your
          organization's voice and priorities woven in.
        </Text>

        <Divider spacing="section" />

        {/* What stays free */}
        <section>
          <Heading level={2}>What stays free, always</Heading>
          <Text className="mt-element" muted>
            Partnership adds capabilities on top of a foundation that remains
            open to everyone.
          </Text>
          <ul className="mt-component space-y-2">
            <FreeFeature>Public town profiles with full historical content</FreeFeature>
            <FreeFeature>Teacher modules — lesson plans, primary sources, quizzes</FreeFeature>
            <FreeFeature>Network search and cross-town connections</FreeFeature>
            <FreeFeature>Source citations and credibility tiers on every claim</FreeFeature>
          </ul>
        </section>

        <Divider spacing="section" />

        {/* What Partners Get */}
        <section>
          <Heading level={2}>What partners receive</Heading>

          <div className="mt-component grid md:grid-cols-2 gap-component">
            <FeatureCard
              title="Official Network Membership"
              description="Your town joins the verified network of Revolutionary sites. Visitors see the 'Official Revolutionary Town Network Member' badge, signaling quality and authenticity."
            />
            <FeatureCard
              title="Embeddable Widgets"
              description="Add your town's profile to your website with a single line of code. Widgets match your branding and update automatically as content improves."
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
        </section>

        <Divider spacing="section" />

        {/* Pricing */}
        <section>
          <Heading level={2}>Partnership tiers</Heading>
          <Text className="mt-element" muted>
            Choose the level that fits your organization's needs.
          </Text>

          <div className="mt-component grid md:grid-cols-3 gap-component">
            {/* Starter */}
            <div className="p-component bg-bg-secondary rounded-lg">
              <Text size="small" muted className="uppercase tracking-wide">
                Starter
              </Text>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-h2 font-heading font-bold">Free</span>
              </div>
              <Text className="mt-element" size="small">
                For towns exploring the network
              </Text>

              <ul className="mt-component space-y-2">
                <PricingFeature included>Basic town profile</PricingFeature>
                <PricingFeature included>Network membership badge</PricingFeature>
                <PricingFeature included>Teacher module access</PricingFeature>
                <PricingFeature>Custom branding</PricingFeature>
                <PricingFeature>Embeddable widgets</PricingFeature>
                <PricingFeature>Analytics dashboard</PricingFeature>
              </ul>

              <div className="mt-component">
                <Button
                  href="/partner/inquire?tier=starter"
                  variant="secondary"
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Pro */}
            <div className="p-component bg-bg-secondary rounded-lg border-2 border-accent-blue">
              <div className="flex items-center justify-between">
                <Text size="small" muted className="uppercase tracking-wide">
                  Pro
                </Text>
                <span className="px-2 py-0.5 bg-accent-blue text-white text-small rounded">
                  Popular
                </span>
              </div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-h2 font-heading font-bold">$99</span>
                <span className="text-text-muted">/month</span>
              </div>
              <Text className="mt-element" size="small">
                For active tourism boards
              </Text>

              <ul className="mt-component space-y-2">
                <PricingFeature included>Everything in Starter</PricingFeature>
                <PricingFeature included>Custom branding</PricingFeature>
                <PricingFeature included>Embeddable widgets</PricingFeature>
                <PricingFeature included>Basic analytics</PricingFeature>
                <PricingFeature included>Priority support</PricingFeature>
                <PricingFeature>Advanced analytics</PricingFeature>
              </ul>

              <div className="mt-component">
                <Button
                  href="/partner/inquire?tier=pro"
                  className="w-full"
                >
                  Start Pro Trial
                </Button>
              </div>
            </div>

            {/* Premium */}
            <div className="p-component bg-bg-secondary rounded-lg">
              <Text size="small" muted className="uppercase tracking-wide">
                Premium
              </Text>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-h2 font-heading font-bold">$299</span>
                <span className="text-text-muted">/month</span>
              </div>
              <Text className="mt-element" size="small">
                For regional networks
              </Text>

              <ul className="mt-component space-y-2">
                <PricingFeature included>Everything in Pro</PricingFeature>
                <PricingFeature included>Advanced analytics</PricingFeature>
                <PricingFeature included>API access</PricingFeature>
                <PricingFeature included>Custom integrations</PricingFeature>
                <PricingFeature included>Dedicated support</PricingFeature>
                <PricingFeature included>Multi-town management</PricingFeature>
              </ul>

              <div className="mt-component">
                <Button
                  href="/partner/inquire?tier=premium"
                  variant="secondary"
                  className="w-full"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Divider spacing="section" />

        {/* Embed Preview */}
        <section>
          <Heading level={2}>See it in action</Heading>
          <Text className="mt-element">
            Here's what an embedded widget looks like on a partner website.
          </Text>

          <div className="mt-component p-element bg-bg-secondary rounded-lg">
            <Text size="small" muted className="mb-element">
              Preview: Lexington Tourism Board embed
            </Text>
            <div className="border border-border-light rounded-lg overflow-hidden">
              <iframe
                src="/embed/lexington-ma?partner=true"
                className="w-full h-[500px] bg-bg-primary"
                title="Lexington embed preview"
              />
            </div>
          </div>

          <div className="mt-element">
            <Link href="/embed/lexington-ma">View full embed page →</Link>
          </div>
        </section>

        <Divider spacing="section" />

        {/* CTA */}
        <section className="text-center">
          <Heading level={2}>Ready to join the network?</Heading>
          <Text className="mt-element max-w-[500px] mx-auto">
            Tell us about your organization and the town you serve. We review
            every inquiry personally.
          </Text>
          <div className="mt-component flex flex-wrap justify-center gap-4">
            <Button href="/partner/inquire">Submit an Inquiry</Button>
            <Button href="/towns" variant="secondary">
              Browse the Network
            </Button>
          </div>
        </section>
      </Container>
    </main>
  );
}

function FreeFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2">
      <span className="text-accent-blue">✓</span>
      <Text size="small">{children}</Text>
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
    <div className="p-element bg-bg-secondary rounded-lg">
      <Heading level={3}>{title}</Heading>
      <Text className="mt-element" size="small">
        {description}
      </Text>
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
    <li className="flex items-center gap-2">
      {included ? (
        <span className="text-accent-blue">✓</span>
      ) : (
        <span className="text-border-light">–</span>
      )}
      <Text
        size="small"
        className={included ? "" : "text-text-muted"}
      >
        {children}
      </Text>
    </li>
  );
}
