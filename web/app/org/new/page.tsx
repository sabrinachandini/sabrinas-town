import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { Container, Heading, Text, Button } from "@/components/ui";

export const metadata = {
  title: "Create Organization | History is for Everyone",
};

export default async function NewOrgPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  async function handleCreateOrg(formData: FormData) {
    "use server";

    const currentSession = await auth();
    if (!currentSession?.user) {
      redirect("/login");
    }

    const name = formData.get("name") as string;
    const contactEmail = formData.get("contactEmail") as string;
    let slug = formData.get("slug") as string;

    if (!name || !slug) {
      redirect("/org/new?error=validation");
    }

    // Sanitize slug
    slug = slug
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    if (!slug) {
      redirect("/org/new?error=validation");
    }

    // Check slug uniqueness
    const existing = await prisma.organization.findUnique({
      where: { slug },
    });

    if (existing) {
      redirect("/org/new?error=slug-taken");
    }

    const org = await prisma.organization.create({
      data: {
        name,
        slug,
        contactEmail: contactEmail || null,
      },
    });

    await prisma.orgUser.create({
      data: {
        orgId: org.id,
        userId: currentSession.user.id,
        role: "ORG_OWNER",
      },
    });

    redirect(`/org/${org.slug}/dashboard`);
  }

  return (
    <main className="py-section">
      <Container size="narrow">
        <div className="max-w-[500px] mx-auto">
          <Heading level={1}>Create an organization</Heading>
          <Text className="mt-element" muted>
            Set up your organization to manage your town's presence on History is
            for Everyone.
          </Text>

          <form
            action={handleCreateOrg}
            className="mt-component space-y-element"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-small font-medium text-text-primary mb-2"
              >
                Organization name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Lexington Tourism Board"
                className="w-full px-4 py-3 border-2 border-border-light rounded-lg bg-bg-primary text-text-primary text-body focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="slug"
                className="block text-small font-medium text-text-primary mb-2"
              >
                URL slug
              </label>
              <div className="flex items-center gap-2">
                <Text size="small" muted>
                  /org/
                </Text>
                <input
                  id="slug"
                  name="slug"
                  type="text"
                  required
                  pattern="[a-z0-9-]+"
                  placeholder="lexington-tourism"
                  className="flex-1 px-4 py-3 border-2 border-border-light rounded-lg bg-bg-primary text-text-primary text-body focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-colors"
                />
              </div>
              <Text size="small" muted className="mt-1">
                Lowercase letters, numbers, and hyphens only.
              </Text>
            </div>

            <div>
              <label
                htmlFor="contactEmail"
                className="block text-small font-medium text-text-primary mb-2"
              >
                Contact email
              </label>
              <input
                id="contactEmail"
                name="contactEmail"
                type="email"
                placeholder="info@lexingtontourism.org"
                className="w-full px-4 py-3 border-2 border-border-light rounded-lg bg-bg-primary text-text-primary text-body focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-colors"
              />
            </div>

            <Button type="submit" className="w-full">
              Create Organization
            </Button>
          </form>
        </div>
      </Container>
    </main>
  );
}
