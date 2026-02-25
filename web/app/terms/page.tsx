// MODEL: Claude Opus (legal content), Claude Sonnet (page structure)
// Terms of Service page — static server component, no API fetch

import {
  Container,
  Heading,
  Text,
  Divider,
  Link,
} from "@/components/ui";

export const metadata = {
  title: "Terms of Service | Sabrina's Town",
  description:
    "Terms of Service for Sabrina's Town, an American Revolution tourism and education platform. Covers acceptable use, intellectual property, embed licensing, and liability.",
};

export default function TermsPage() {
  return (
    <main className="py-section">
      <Container>
        {/* Page Title */}
        <Heading level={1}>Terms of Service</Heading>
        <Text className="mt-element max-w-[720px]">
          Welcome to Sabrina's Town. These terms govern your use of our website,
          tools, and services. We have tried to write them plainly — if
          something is unclear, reach out and we will do our best to explain.
          Using this site means you agree to these terms, so please read them.
        </Text>

        <Divider spacing="section" />

        {/* 1. Acceptance of Terms */}
        <section className="max-w-[720px]">
          <Heading level={2}>Acceptance of Terms</Heading>
          <Text className="mt-element">
            By accessing or using Sabrina's Town — including our website, API,
            embeddable widgets, and any associated services — you agree to be
            bound by these Terms of Service. If you do not agree, please do not
            use the site. We may update these terms from time to time, and
            continued use after changes are posted constitutes acceptance of the
            revised terms.
          </Text>
          <Text className="mt-element">
            These terms apply to all visitors, registered users, partner
            organizations, and anyone who accesses content through our embeds or
            API. Separate agreements with partner organizations supplement but do
            not replace these terms.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* 2. Description of Service */}
        <section className="max-w-[720px]">
          <Heading level={2}>Description of Service</Heading>
          <Text className="mt-element">
            Sabrina's Town is an American Revolution research network, tourism
            guide, and educational resource. We connect and score Revolutionary
            War communities across the original thirteen states, providing town
            profiles, historical research, tourism scores, network
            visualizations, and teacher-facing resources.
          </Text>
          <Text className="mt-element">
            Our platform includes public-facing content for general visitors,
            classroom tools for educators, and partner integrations for
            historical societies, tourism boards, and cultural organizations.
            Some features — such as detailed scoring data, embed widgets, and
            API access — are available only to registered users or partner
            subscribers.
          </Text>
          <Text className="mt-element">
            We reserve the right to modify, suspend, or discontinue any part of
            the service at any time. We will make reasonable efforts to notify
            active users and partners of significant changes.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* 3. User Accounts */}
        <section className="max-w-[720px]">
          <Heading level={2}>User Accounts</Heading>
          <Text className="mt-element">
            Account creation and authentication on Sabrina's Town are handled
            through NextAuth sessions using email-based login. When you sign in,
            we create a session tied to your email address. We do not store
            passwords — authentication relies on secure, time-limited email
            verification links.
          </Text>
          <Text className="mt-element">
            You are responsible for maintaining the security of the email
            account you use to sign in. If you suspect unauthorized access to
            your Sabrina's Town account, contact us immediately. We reserve the
            right to suspend or terminate accounts that appear compromised or
            that violate these terms.
          </Text>
          <Text className="mt-element">
            Account data is handled in accordance with our{" "}
            <Link href="/privacy">Privacy Policy</Link>. You may request
            deletion of your account and associated data at any time by
            contacting our team.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* 4. Acceptable Use */}
        <section className="max-w-[720px]">
          <Heading level={2}>Acceptable Use</Heading>
          <Text className="mt-element">
            We built Sabrina's Town to serve researchers, educators, travelers,
            and anyone curious about the American Revolution. We ask that you
            use the platform in that spirit. Specifically, you agree not to:
          </Text>
          <Text className="mt-element">
            Scrape, crawl, or systematically download content from the site
            without prior written permission. Individual page views and
            reasonable personal use are fine — bulk extraction is not. If you
            need data access for research or institutional purposes, contact us
            about our API and partnership options.
          </Text>
          <Text className="mt-element">
            Misrepresent content from Sabrina's Town as your own original work,
            or present our scores and editorial assessments as official
            government ratings, academic consensus, or anything other than what
            they are: informed editorial judgment by our team. Attribution
            matters — please credit the source when sharing our content.
          </Text>
          <Text className="mt-element">
            Use the platform to distribute spam, malware, or any content that
            is unlawful, threatening, or deliberately misleading. Interfere with
            the operation of the site or attempt to gain unauthorized access to
            systems or accounts that are not yours.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* 5. Intellectual Property */}
        <section className="max-w-[720px]">
          <Heading level={2}>Intellectual Property</Heading>
          <Text className="mt-element">
            The content on Sabrina's Town — including town profiles, scoring
            analysis, network visualizations, written commentary, and original
            research — is the product of our editorial team. This content is
            protected by copyright and represents substantial original work in
            research, synthesis, and presentation.
          </Text>
          <Text className="mt-element">
            For educational and non-commercial use, our written content is
            available under a Creative Commons Attribution-NonCommercial
            (CC-BY-NC) license. This means teachers, students, researchers, and
            history enthusiasts may share, adapt, and build on our work,
            provided they give appropriate credit and do not use it for
            commercial purposes.
          </Text>
          <Text className="mt-element">
            Commercial use, including reproduction in paid publications,
            for-profit courses, or commercial tourism products, requires a
            separate license. Embed widgets and API data access are subject to
            the terms of the applicable partner agreement, described below.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* 6. Embed and API License */}
        <section className="max-w-[720px]">
          <Heading level={2}>Embed and API License</Heading>
          <Text className="mt-element">
            Partner organizations — including historical societies, tourism
            boards, museums, and educational institutions — may embed Sabrina's
            Town content on their own websites and access our data through the
            API. These rights are granted per the partner's subscription tier
            and are governed by the specific terms of their partner agreement.
          </Text>
          <Text className="mt-element">
            Embed widgets must be displayed without modification to their
            content or attribution. Partners may style the surrounding page but
            may not alter scores, remove credits, or inject content into the
            embed frame. API consumers must cache responsibly and respect
            published rate limits.
          </Text>
          <Text className="mt-element">
            Embed and API access may be revoked if a partner violates these
            terms, their partner agreement, or uses the data in ways that
            misrepresent the nature of our content. If you are interested in
            becoming a partner, visit our{" "}
            <Link href="/partner">Partner</Link> page.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* 7. Disclaimers */}
        <section className="max-w-[720px]">
          <Heading level={2}>Disclaimers</Heading>
          <Text className="mt-element">
            Sabrina's Town is an editorial and educational project. Nothing on
            this site constitutes legal advice, professional historical
            consultation, or official government guidance. Our town scores
            reflect the editorial judgment of our team based on the methodology
            described on our{" "}
            <Link href="/methodology">Methodology</Link> page — they are not
            objective measurements and should not be treated as such.
          </Text>
          <Text className="mt-element">
            While we work diligently to ensure accuracy, historical research is
            an evolving field. We may present information that is later revised
            by new scholarship or newly available primary sources. We label
            uncertainty where we are aware of it, but we cannot guarantee that
            every claim on the site is without error.
          </Text>
          <Text className="mt-element">
            Practical visitor information — such as hours of operation,
            accessibility details, and directions — is provided as a
            convenience. We recommend confirming details directly with the
            relevant site or institution before planning a visit.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* 8. Limitation of Liability */}
        <section className="max-w-[720px]">
          <Heading level={2}>Limitation of Liability</Heading>
          <Text className="mt-element">
            Sabrina's Town and its team provide this service on an "as is" and
            "as available" basis, without warranties of any kind, whether
            express or implied. We do not warrant that the service will be
            uninterrupted, error-free, or free of harmful components.
          </Text>
          <Text className="mt-element">
            To the fullest extent permitted by law, Sabrina's Town, its
            operators, contributors, and partners shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages
            arising from your use of or inability to use the service. This
            includes, but is not limited to, damages for loss of data, revenue,
            or goodwill, even if we have been advised of the possibility of such
            damages.
          </Text>
          <Text className="mt-element">
            Our total liability for any claim arising from these terms or your
            use of the service shall not exceed the amount you have paid us, if
            any, in the twelve months preceding the claim.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* 9. Changes to Terms */}
        <section className="max-w-[720px]">
          <Heading level={2}>Changes to Terms</Heading>
          <Text className="mt-element">
            We may revise these Terms of Service at any time. When we make
            changes, we will update the "last reviewed" date at the bottom of
            this page. For significant changes — such as modifications to
            licensing terms, liability provisions, or data practices — we will
            make reasonable efforts to notify registered users by email.
          </Text>
          <Text className="mt-element">
            Your continued use of Sabrina's Town after revised terms are posted
            constitutes acceptance of those changes. If you disagree with any
            revision, your remedy is to stop using the service and, if
            applicable, request deletion of your account.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* 10. Contact */}
        <section className="max-w-[720px]">
          <Heading level={2}>Contact</Heading>
          <Text className="mt-element">
            If you have questions about these terms, need clarification on
            licensing, or want to report a concern, we want to hear from you.
            Reach us at{" "}
            <Link href="mailto:team@sabrinastown.com">
              team@sabrinastown.com
            </Link>
            . We aim to respond to all inquiries within a few business days.
          </Text>
          <Text className="mt-element">
            For information about how we collect, use, and protect your data,
            please see our <Link href="/privacy">Privacy Policy</Link>.
          </Text>
        </section>

        <Divider spacing="section" />

        <div className="max-w-[720px]">
          <Text size="small" muted>
            Last reviewed: February 2026. These terms may be updated. Changes
            will be reflected on this page with a revised date.
          </Text>
        </div>
      </Container>
    </main>
  );
}
