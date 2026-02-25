import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import {
  Container,
  Heading,
  Text,
  Divider,
  Link,
} from "@/components/ui";
import {
  SubscribeButton,
  ManageBillingButton,
  ActivateStewardshipForm,
} from "./BillingActions";
import AnalyticsPanel from "./AnalyticsPanel";

interface DashboardPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ range?: string; checkout?: string }>;
}

export async function generateMetadata({ params }: DashboardPageProps) {
  const { slug } = await params;
  return {
    title: `Dashboard — ${slug} | Sabrina's Town`,
  };
}

export default async function OrgDashboardPage({
  params,
  searchParams,
}: DashboardPageProps) {
  const session = await auth();
  const { slug } = await params;
  const { range: rawRange } = await searchParams;
  const range: "7d" | "30d" = rawRange === "30d" ? "30d" : "7d";

  if (!session?.user) {
    redirect("/login");
  }

  const org = await prisma.organization.findUnique({
    where: { slug },
    include: {
      town: { select: { name: true, slug: true } },
      subscription: true,
      orgUsers: {
        where: { userId: session.user.id },
        select: { role: true },
      },
      townStewardships: {
        where: { status: "ACTIVE" },
        include: { town: { select: { name: true, slug: true } } },
      },
    },
  });

  if (!org) {
    redirect("/org/new");
  }

  const userRole = org.orgUsers[0]?.role ?? "ORG_VIEWER";
  const isOwner = userRole === "ORG_OWNER" || userRole === "ADMIN";
  const sub = org.subscription;
  const hasActiveSub = sub?.status === "active";
  const activeStewardships = org.townStewardships;

  // Fetch towns for stewardship selector
  let towns: { slug: string; name: string }[] = [];
  if (hasActiveSub && activeStewardships.length === 0) {
    const allTowns = await prisma.town.findMany({
      select: { slug: true, name: true },
      orderBy: { name: "asc" },
    });
    towns = allTowns;
  }

  return (
    <main className="py-section">
      <Container>
        <Heading level={1}>{org.name}</Heading>
        <Text className="mt-element" muted>
          Organization dashboard &middot; Your role: {formatRole(userRole)}
        </Text>

        <Divider spacing="section" />

        <div className="grid md:grid-cols-2 gap-component">
          {/* Billing Status */}
          <div className="p-component bg-bg-secondary rounded-lg">
            <Text size="small" muted className="uppercase tracking-wide font-medium">
              Subscription
            </Text>
            <div className="mt-element">
              {sub ? (
                <>
                  <div className="flex items-center gap-2">
                    <span className="text-h3 font-heading font-semibold">
                      {sub.planTier}
                    </span>
                    <StatusBadge status={sub.status} />
                  </div>
                  {sub.currentPeriodEnd && (
                    <Text size="small" muted className="mt-2">
                      {sub.cancelAtPeriodEnd ? "Cancels" : "Renews"} on{" "}
                      {new Date(sub.currentPeriodEnd).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </Text>
                  )}
                  {isOwner && (
                    <div className="mt-element">
                      <ManageBillingButton orgSlug={slug} userId={session.user.id} />
                    </div>
                  )}
                </>
              ) : (
                <>
                  <Text muted>No active subscription</Text>
                  <Text size="small" muted className="mt-2">
                    Subscribe to activate stewardship for a town.
                  </Text>
                </>
              )}
            </div>
          </div>

          {/* Subscribe / Plan Picker */}
          {isOwner && (!sub || sub.status !== "active") && (
            <div className="p-component bg-bg-secondary rounded-lg">
              <Text size="small" muted className="uppercase tracking-wide font-medium">
                Choose a Plan
              </Text>
              <div className="mt-element space-y-3">
                <PlanOption orgSlug={slug} tier="BASIC" price="$3,000" desc="Core stewardship for one town" userId={session.user.id} />
                <PlanOption orgSlug={slug} tier="PLUS" price="$5,000" desc="Enhanced analytics and branding" userId={session.user.id} />
                <PlanOption orgSlug={slug} tier="PRO" price="$10,000" desc="Full network access and custom domains" userId={session.user.id} />
              </div>
            </div>
          )}

          {/* Stewardship */}
          <div className="p-component bg-bg-secondary rounded-lg">
            <Text size="small" muted className="uppercase tracking-wide font-medium">
              Town Stewardship
            </Text>
            <div className="mt-element">
              {activeStewardships.length > 0 ? (
                <div className="space-y-2">
                  {activeStewardships.map((s) => (
                    <div key={s.id} className="flex items-center gap-2">
                      <StatusBadge status="active" />
                      <Link href={`/towns/${s.town.slug}`}>{s.town.name}</Link>
                    </div>
                  ))}
                </div>
              ) : hasActiveSub && isOwner ? (
                <div>
                  <Text size="small" muted>
                    Select a town to activate stewardship.
                  </Text>
                  <ActivateStewardshipForm orgSlug={slug} userId={session.user.id} towns={towns} />
                </div>
              ) : (
                <Text size="small" muted>
                  {hasActiveSub
                    ? "No active stewardships."
                    : "Subscribe to activate stewardship for a town."}
                </Text>
              )}
            </div>
          </div>

          {/* Domains */}
          <div className="p-component bg-bg-secondary rounded-lg">
            <Text size="small" muted className="uppercase tracking-wide font-medium">
              Domains
            </Text>
            <div className="mt-element">
              {org.town ? (
                <Text size="small">
                  Town: <Link href={`/towns/${org.town.slug}`}>{org.town.name}</Link>
                </Text>
              ) : (
                <Text size="small" muted>No town linked yet.</Text>
              )}
              <Text size="small" muted className="mt-2">
                Subdomain and custom domain configuration coming soon.
              </Text>
            </div>
          </div>

          {/* Support */}
          <div className="p-component bg-bg-secondary rounded-lg">
            <Text size="small" muted className="uppercase tracking-wide font-medium">
              Support
            </Text>
            <div className="mt-element">
              <Text size="small">
                Need help?{" "}
                <Link href="/partner">Visit our partner page</Link> or contact
                us directly.
              </Text>
            </div>
          </div>
        </div>

        {hasActiveSub && (
          <AnalyticsPanel orgId={org.id} range={range} orgSlug={slug} />
        )}
      </Container>
    </main>
  );
}

// ---------------------------------------------------------------------------
// Server-only helper components
// ---------------------------------------------------------------------------

function PlanOption({ orgSlug, tier, price, desc, userId }: {
  orgSlug: string; tier: string; price: string; desc: string; userId: string;
}) {
  return (
    <div className="flex items-center justify-between p-element border border-border-light rounded-lg">
      <div>
        <Text className="font-medium">{tier}</Text>
        <Text size="small" muted>{desc}</Text>
      </div>
      <div className="text-right">
        <Text className="font-heading font-semibold">{price}</Text>
        <Text size="small" muted>/month</Text>
        <div className="mt-1">
          <SubscribeButton orgSlug={orgSlug} planTier={tier} userId={userId} />
        </div>
      </div>
    </div>
  );
}

function formatRole(role: string): string {
  const labels: Record<string, string> = {
    ADMIN: "Admin",
    ORG_OWNER: "Owner",
    ORG_EDITOR: "Editor",
    ORG_VIEWER: "Viewer",
  };
  return labels[role] || role;
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    active: "bg-green-100 text-green-800",
    ACTIVE: "bg-green-100 text-green-800",
    TRIAL: "bg-blue-100 text-blue-800",
    past_due: "bg-yellow-100 text-yellow-800",
    PAST_DUE: "bg-yellow-100 text-yellow-800",
    canceled: "bg-red-100 text-red-800",
    CANCELED: "bg-red-100 text-red-800",
  };

  return (
    <span className={`px-2 py-0.5 text-small rounded ${styles[status] || "bg-gray-100 text-gray-800"}`}>
      {status}
    </span>
  );
}
