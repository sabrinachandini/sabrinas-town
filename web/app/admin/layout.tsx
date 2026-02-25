import { auth } from "@/lib/auth";
import { Container, Heading, Text } from "@/components/ui";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!adminEmail || !session?.user?.email || session.user.email !== adminEmail) {
    return (
      <main className="py-section">
        <Container>
          <Heading level={1}>Access Denied</Heading>
          <Text className="mt-element" muted>
            You do not have permission to view this page.
          </Text>
        </Container>
      </main>
    );
  }

  return <>{children}</>;
}
