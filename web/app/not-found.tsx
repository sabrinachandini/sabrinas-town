import { Container, Heading, Text, Button, Divider } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="py-section">
      <Container>
        <div className="max-w-[620px] mx-auto text-center">
          <Text size="small" muted className="uppercase tracking-wide">
            404
          </Text>
          <Heading level={1} className="mt-2">
            Page not found
          </Heading>
          <Text className="mt-element text-text-muted">
            The page you're looking for doesn't exist or may have moved. If
            you're looking for a specific town, try browsing our full directory.
          </Text>

          <div className="flex flex-wrap justify-center gap-4 mt-component">
            <Button href="/towns">Browse Towns</Button>
            <Button href="/" variant="secondary">
              Back to Home
            </Button>
          </div>
        </div>

        <Divider spacing="section" />

        <div className="max-w-[620px] mx-auto text-center">
          <Text size="small" muted>
            Looking for something specific? Try these:
          </Text>
          <div className="mt-element flex flex-wrap justify-center gap-6">
            <a href="/rankings" className="text-small">
              Rankings
            </a>
            <a href="/compare" className="text-small">
              Compare Towns
            </a>
            <a href="/partner" className="text-small">
              Partner
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
