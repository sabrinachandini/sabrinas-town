import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { Container, Heading, Text } from "@/components/ui";

interface OrgLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export default async function OrgLayout({ children, params }: OrgLayoutProps) {
  const session = await auth();
  const { slug } = await params;

  if (!session?.user) {
    return (
      <main className="py-section">
        <Container size="narrow">
          <Heading level={1}>Access Denied</Heading>
          <Text className="mt-element" muted>
            You must be signed in to access this page.
          </Text>
        </Container>
      </main>
    );
  }

  const org = await prisma.organization.findUnique({
    where: { slug },
    include: {
      orgUsers: {
        where: { userId: session.user.id },
      },
    },
  });

  if (!org) {
    return (
      <main className="py-section">
        <Container size="narrow">
          <Heading level={1}>Not Found</Heading>
          <Text className="mt-element" muted>
            This organization does not exist.
          </Text>
        </Container>
      </main>
    );
  }

  if (org.orgUsers.length === 0) {
    return (
      <main className="py-section">
        <Container size="narrow">
          <Heading level={1}>Access Denied</Heading>
          <Text className="mt-element" muted>
            You are not a member of this organization.
          </Text>
        </Container>
      </main>
    );
  }

  return <>{children}</>;
}
