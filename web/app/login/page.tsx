import { redirect } from "next/navigation";
import { signIn, auth } from "@/lib/auth";
import { Container, Heading, Text, Link, Button } from "@/components/ui";

export const metadata = {
  title: "Sign In | Sabrina's Town",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string; error?: string }>;
}) {
  const session = await auth();
  const { callbackUrl, error } = await searchParams;

  if (session) {
    redirect(callbackUrl || "/org/new");
  }

  async function handleSignIn(formData: FormData) {
    "use server";
    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirectTo: callbackUrl || "/org/new",
    });
  }

  return (
    <main className="py-section">
      <Container size="narrow">
        <div className="max-w-[400px] mx-auto">
          <Heading level={1}>Sign in</Heading>
          <Text className="mt-element" muted>
            Sign in to manage your organization on Sabrina's Town.
          </Text>

          {error && (
            <div className="mt-element p-element bg-bg-secondary rounded-lg border border-accent-red">
              <Text size="small" className="text-accent-red">
                Invalid email or password. Please try again.
              </Text>
            </div>
          )}

          <form action={handleSignIn} className="mt-component space-y-element">
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
                autoComplete="current-password"
                className="w-full px-4 py-3 border-2 border-border-light rounded-lg bg-bg-primary text-text-primary text-body focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-colors"
              />
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>

          <Text size="small" muted className="mt-component text-center">
            Don't have an account?{" "}
            <Link href="/signup">Create one</Link>
          </Text>
        </div>
      </Container>
    </main>
  );
}
