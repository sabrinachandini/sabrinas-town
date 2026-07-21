import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { resolveScope } from "@/lib/scope";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const scope = await resolveScope(session);

  if (!scope) {
    redirect("/login?callbackUrl=/admin");
  }

  if (scope.type === "town") {
    redirect("/admin/town");
  }

  // scope.type === "network" — staff; render Mission Control
  return <>{children}</>;
}
