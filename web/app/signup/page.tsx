import { redirect } from "next/navigation";
import { signIn, auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { Container, Heading, Text, Link, Button } from "@/components/ui";

export const metadata = {
  title: "Sign Up | Sabrina's Town",
};

export default async function SignupPage() {
  const session = await auth();

  if (session) {
    redirect("/org/new");
  }

  async function handleSignUp(formData: FormData) {
    "use server";

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password || password.length < 8) {
      redirect("/signup?error=validation");
    }

    // Check if user already exists
    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      redirect("/signup?error=exists");
    }

    const passwordHash = await bcrypt.hash(password, 12);

    await prisma.user.create({
      data: {
        name: name || null,
        email,
        passwordHash,
      },
    });

    await signIn("credentials", {
      email,
      password,
      redirectTo: "/org/new",
    });
  }

  return (
    <main className="py-section">
      <Container size="narrow">
        <div className="max-w-[400px] mx-auto">
          <Heading level={1}>Create an account</Heading>
          <Text className="mt-element" muted>
            Sign up to create and manage your organization on Sabrina's Town.
          </Text>

          <form action={handleSignUp} className="mt-component space-y-element">
            <div>
              <label
                htmlFor="name"
                className="block text-small font-medium text-text-primary mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="w-full px-4 py-3 border-2 border-border-light rounded-lg bg-bg-primary text-text-primary text-body focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-small font-medium text-text-primary mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full px-4 py-3 border-2 border-border-light rounded-lg bg-bg-primary text-text-primary text-body focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-small font-medium text-text-primary mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                className="w-full px-4 py-3 border-2 border-border-light rounded-lg bg-bg-primary text-text-primary text-body focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-colors"
              />
              <Text size="small" muted className="mt-1">
                Must be at least 8 characters.
              </Text>
            </div>

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>

          <Text size="small" muted className="mt-component text-center">
            Already have an account?{" "}
            <Link href="/login">Sign in</Link>
          </Text>
        </div>
      </Container>
    </main>
  );
}
