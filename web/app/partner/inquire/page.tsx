import {
  Container,
  Heading,
  Text,
  Link,
  Divider,
} from "@/components/ui";
import { InquiryForm } from "./InquiryForm";

export const metadata = {
  title: "Inquire About Partnership | History is for Everyone",
  description:
    "Interested in operating your town's page on History is for Everyone? Submit an inquiry.",
};

export default async function InquirePage({
  searchParams,
}: {
  searchParams: Promise<{ town?: string; tier?: string }>;
}) {
  const { town } = await searchParams;

  return (
    <main className="py-section">
      <Container size="narrow">
        <Heading level={1}>Inquire about partnership</Heading>
        <Text className="mt-element" muted>
          Interested in operating{" "}
          {town ? (
            <>
              the{" "}
              <Link href={`/towns/${town}`}>{town}</Link>
            </>
          ) : (
            "a town"
          )}{" "}
          page? Tell us about your organization and we'll be in touch.
        </Text>

        <Divider spacing="section" />

        <InquiryForm townSlug={town} />

        <Divider spacing="section" />

        <Text size="small" muted>
          Want to learn more first?{" "}
          <Link href="/partner">See full partnership details</Link>, including
          pricing tiers and feature comparisons.
        </Text>
      </Container>
    </main>
  );
}
