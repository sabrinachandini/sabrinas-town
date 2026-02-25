// MODEL: Claude Opus (policy content), Claude Sonnet (page structure)
// Privacy Policy page — static server component, no API fetch

import {
  Container,
  Heading,
  Text,
  Divider,
  Link,
} from "@/components/ui";

export const metadata = {
  title: "Privacy Policy | Sabrina's Town",
  description:
    "How Sabrina's Town handles your data. We collect minimal information, respect your privacy, and explain our practices in plain language.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="py-section">
      <Container>
        {/* Introduction */}
        <Heading level={1}>Privacy Policy</Heading>
        <Text className="mt-element max-w-[720px]">
          Sabrina's Town is an American Revolution tourism and education
          platform. We believe you should understand exactly what data we
          collect, why we collect it, and what we do with it. This policy is
          written in plain language because privacy matters too much for fine
          print.
        </Text>

        <Divider spacing="section" />

        {/* Information We Collect */}
        <section className="max-w-[720px]">
          <Heading level={2}>Information We Collect</Heading>
          <Text className="mt-element">
            We keep data collection to a minimum. When you create an account, we
            store the email address associated with your sign-in through
            NextAuth. We collect aggregate analytics events such as page views
            to understand how the site is used overall -- these are not tied to
            individual browsing sessions.
          </Text>
          <Text className="mt-element">
            If you make a purchase, payment processing is handled entirely by
            Stripe. We do not receive, store, or have access to your credit card
            number or full payment details. Stripe provides us with a
            transaction confirmation and basic billing information necessary to
            maintain your account.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* Cookies */}
        <section className="max-w-[720px]">
          <Heading level={2}>Cookies</Heading>
          <Text className="mt-element">
            We use a single session cookie managed by NextAuth to keep you
            signed in. That is it. We do not use advertising cookies. We do not
            use third-party tracking cookies. We do not participate in
            cross-site tracking or ad networks.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* Analytics */}
        <section className="max-w-[720px]">
          <Heading level={2}>Analytics</Heading>
          <Text className="mt-element">
            We collect aggregate usage data to understand which pages are
            visited and how the site performs. This data is used to improve the
            experience for everyone and is not used to build individual user
            profiles.
          </Text>
          <Text className="mt-element">
            We use Sentry for error monitoring. When an error occurs, Sentry
            captures stack traces and request metadata so we can diagnose and
            fix problems. Sentry does not track your general browsing behavior
            -- it only activates when something goes wrong.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* Third-Party Services */}
        <section className="max-w-[720px]">
          <Heading level={2}>Third-Party Services</Heading>
          <Text className="mt-element">
            We rely on a small number of trusted services to operate Sabrina's
            Town. Each of these services has their own privacy policy, and we
            encourage you to review them:
          </Text>
          <ul className="mt-element space-y-3 list-disc pl-6">
            <li>
              <Text>
                <strong>Supabase</strong> -- database hosting. Stores account
                data and site content.
              </Text>
            </li>
            <li>
              <Text>
                <strong>Vercel</strong> -- hosting and serverless functions.
                Serves the website and runs backend logic.
              </Text>
            </li>
            <li>
              <Text>
                <strong>Stripe</strong> -- payment processing. Handles all
                financial transactions securely.
              </Text>
            </li>
            <li>
              <Text>
                <strong>Sentry</strong> -- error monitoring. Captures technical
                error data to help us fix issues.
              </Text>
            </li>
          </ul>
          <Text className="mt-element">
            We do not sell your data to any third party, and these services
            receive only the information necessary to perform their specific
            function.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* Partner Organization Data */}
        <section className="max-w-[720px]">
          <Heading level={2}>Partner Organization Data</Heading>
          <Text className="mt-element">
            Historical societies, tourism boards, and other organizations can
            partner with Sabrina's Town. During the inquiry and onboarding
            process, partner organizations provide business contact information
            including organization name and a contact email address. We also
            store the plan tier associated with each partner account.
          </Text>
          <Text className="mt-element">
            Billing information for partner organizations is handled by Stripe.
            We do not store payment card details for partners or any other
            users.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* Data Retention */}
        <section className="max-w-[720px]">
          <Heading level={2}>Data Retention</Heading>
          <Text className="mt-element">
            We keep your account data for as long as your account is active. If
            you close your account, we will delete your personal information
            within a reasonable timeframe, except where we are required by law
            to retain certain records.
          </Text>
          <Text className="mt-element">
            Analytics data is aggregated and anonymized. It is not stored in a
            way that can be traced back to individual users. You can request
            deletion of your data at any time by contacting us.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* Your Rights */}
        <section className="max-w-[720px]">
          <Heading level={2}>Your Rights</Heading>
          <Text className="mt-element">
            You have the right to access the personal data we hold about you, to
            correct any inaccuracies, and to request that we delete your data
            entirely. We will respond to all data requests promptly.
          </Text>
          <Text className="mt-element">
            To exercise any of these rights, email us at{" "}
            <Link href="mailto:privacy@sabrinastown.com">
              privacy@sabrinastown.com
            </Link>
            . We will verify your identity and respond within 30 days.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* Children's Privacy */}
        <section className="max-w-[720px]">
          <Heading level={2}>Children's Privacy</Heading>
          <Text className="mt-element">
            Sabrina's Town is not directed at children under the age of 13. We
            do not knowingly collect personal information from children. If you
            believe a child under 13 has provided us with personal data, please
            contact us at{" "}
            <Link href="mailto:privacy@sabrinastown.com">
              privacy@sabrinastown.com
            </Link>{" "}
            and we will take steps to remove that information.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* Changes to This Policy */}
        <section className="max-w-[720px]">
          <Heading level={2}>Changes to This Policy</Heading>
          <Text className="mt-element">
            We may update this privacy policy from time to time. When we do, the
            revised policy will be posted on this page with an updated review
            date. If we make material changes that affect how we handle your
            personal data, we will notify registered users by email before the
            changes take effect.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* Contact */}
        <section className="max-w-[720px]">
          <Heading level={2}>Contact</Heading>
          <Text className="mt-element">
            If you have questions about this privacy policy or how we handle
            your data, reach us at{" "}
            <Link href="mailto:privacy@sabrinastown.com">
              privacy@sabrinastown.com
            </Link>
            .
          </Text>
          <Text className="mt-element">
            For information about how you may use the site, see our{" "}
            <Link href="/terms">Terms of Service</Link>.
          </Text>
        </section>

        <Divider spacing="section" />

        <div className="max-w-[720px]">
          <Text size="small" muted>
            Last reviewed: February 2026. This policy may be updated. Material
            changes will be communicated to registered users by email.
          </Text>
        </div>
      </Container>
    </main>
  );
}
