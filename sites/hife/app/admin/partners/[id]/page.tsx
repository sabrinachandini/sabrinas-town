import { notFound } from "next/navigation";
import NextLink from "next/link";
import prisma from "@/lib/prisma";
import { LifecycleActions } from "./LifecycleActions";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ id: string }> };

export default async function PartnerLifecyclePage({ params }: Props) {
  const { id } = await params;

  const account = await prisma.partnerAccount.findUnique({
    where: { id },
    include: {
      town: { select: { id: true, name: true, state: true, slug: true } },
      memberships: {
        include: { user: { select: { id: true, name: true, email: true } } },
        orderBy: { createdAt: "asc" },
      },
      agreements: { orderBy: { createdAt: "desc" } },
      proposals: {
        include: { submittedBy: { select: { name: true, email: true } } },
        orderBy: { createdAt: "desc" },
      },
      invites: {
        where: { acceptedAt: null, expiresAt: { gt: new Date() } },
        orderBy: { createdAt: "desc" },
      },
      _count: { select: { suggestions: true } },
    },
  });

  if (!account) notFound();

  const STATUS_COLOR: Record<string, string> = {
    PENDING: "#C8A24A",
    ACTIVE: "#2a5c45",
    SUSPENDED: "#cc3322",
    CHURNED: "#14100a",
  };

  const PROPOSAL_STATUS_COLOR: Record<string, string> = {
    DRAFT: "#14100a",
    SUBMITTED: "#1a3a72",
    IN_REVIEW: "#C8A24A",
    APPROVED: "#2a5c45",
    REJECTED: "#cc3322",
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-[#14100a] px-8 py-8 border-b-4 border-[#C8A24A]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <NextLink
                href="/admin/partners"
                className="font-ui text-[10px] text-[#C8A24A]/50 hover:text-[#C8A24A] no-underline"
              >
                ← Partners
              </NextLink>
            </div>
            <h1 className="font-display text-[#f2e6c8] text-[32px] tracking-[-0.03em]">
              {account.name}
            </h1>
            <p className="font-ui text-[13px] text-[#f2e6c8]/40 mt-1">
              {account.town.name}, {account.town.state}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 mt-2">
            <span
              className="font-ui text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 border"
              style={{
                color: STATUS_COLOR[account.status] ?? "#14100a",
                borderColor: STATUS_COLOR[account.status] ?? "#14100a",
              }}
            >
              {account.status}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-8 py-10 space-y-10">

        {/* Lifecycle controls */}
        <section>
          <h2 className="font-display text-[18px] text-[#14100a] tracking-[-0.02em] mb-4">
            Account Status
          </h2>
          <LifecycleActions accountId={account.id} currentStatus={account.status} />
        </section>

        {/* Details */}
        <section className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/40 mb-3">Details</h3>
            <div className="space-y-2">
              {[
                { label: "Contact", value: account.contactEmail ?? "—" },
                { label: "Town ID", value: account.town.id },
                { label: "Created", value: new Date(account.createdAt).toLocaleDateString() },
                { label: "Suggestions", value: String(account._count.suggestions) },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-2">
                  <span className="font-ui text-[10px] text-[#14100a]/40 w-[90px] shrink-0">{label}</span>
                  <span className="font-ui text-[10px] text-[#14100a] truncate">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {(account.stripeCustomerId || account.stripeSubscriptionId) && (
            <div>
              <h3 className="font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/40 mb-3">Billing Refs</h3>
              <div className="space-y-2">
                {account.stripeCustomerId && (
                  <div className="flex gap-2">
                    <span className="font-ui text-[10px] text-[#14100a]/40 w-[90px] shrink-0">Customer</span>
                    <span className="font-mono text-[10px] text-[#14100a]">{account.stripeCustomerId}</span>
                  </div>
                )}
                {account.stripeSubscriptionId && (
                  <div className="flex gap-2">
                    <span className="font-ui text-[10px] text-[#14100a]/40 w-[90px] shrink-0">Subscription</span>
                    <span className="font-mono text-[10px] text-[#14100a]">{account.stripeSubscriptionId}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </section>

        {/* Agreements */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-[18px] text-[#14100a] tracking-[-0.02em]">
              Agreements
            </h2>
            <NextLink
              href={`/admin/partners/${account.id}/agreements/new`}
              className="font-ui text-[10px] text-[#1a3a72] hover:underline no-underline"
            >
              + New Agreement
            </NextLink>
          </div>
          {account.agreements.length === 0 && (
            <p className="font-ui text-[12px] text-[#14100a]/30">No agreements yet.</p>
          )}
          <div className="space-y-2">
            {account.agreements.map((ag) => (
              <div key={ag.id} className="border-2 border-[#14100a]/10 bg-white/60 px-5 py-3.5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-ui text-[12px] font-semibold text-[#14100a]">{ag.title}</p>
                    <div className="flex gap-3 mt-1 flex-wrap">
                      <span className="font-ui text-[10px] text-[#14100a]/40">{ag.status}</span>
                      {ag.startsAt && (
                        <span className="font-ui text-[10px] text-[#14100a]/40">
                          {new Date(ag.startsAt).toLocaleDateString()} – {ag.expiresAt ? new Date(ag.expiresAt).toLocaleDateString() : "open"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="font-ui text-[11px] text-[#14100a]/50 mt-2 line-clamp-2">{ag.terms}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Proposals */}
        {account.proposals.length > 0 && (
          <section>
            <h2 className="font-display text-[18px] text-[#14100a] tracking-[-0.02em] mb-4">
              Proposals
            </h2>
            <div className="space-y-2">
              {account.proposals.map((p) => (
                <div key={p.id} className="border-2 border-[#14100a]/10 bg-white/60 px-5 py-3.5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-ui text-[12px] font-semibold text-[#14100a]">{p.title}</p>
                      <p className="font-ui text-[11px] text-[#14100a]/50 mt-1 line-clamp-1">{p.summary}</p>
                      <span className="font-ui text-[10px] text-[#14100a]/40 mt-1 block">
                        by {p.submittedBy.name ?? p.submittedBy.email} · {new Date(p.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <span
                      className="font-ui text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 border shrink-0"
                      style={{
                        color: PROPOSAL_STATUS_COLOR[p.status] ?? "#14100a",
                        borderColor: PROPOSAL_STATUS_COLOR[p.status] ?? "#14100a",
                      }}
                    >
                      {p.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Members */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-[18px] text-[#14100a] tracking-[-0.02em]">
              Members ({account.memberships.length})
            </h2>
            <NextLink
              href={`/admin/partners/${account.id}/invite`}
              className="font-ui text-[10px] text-[#1a3a72] hover:underline no-underline"
            >
              + Invite User
            </NextLink>
          </div>
          <div className="border-2 border-[#14100a]/10 bg-white/60 divide-y divide-[#14100a]/5">
            {account.memberships.length === 0 && (
              <p className="font-ui text-[12px] text-[#14100a]/30 px-5 py-3">No members yet.</p>
            )}
            {account.memberships.map((m) => (
              <div key={m.id} className="flex items-center justify-between px-5 py-3.5">
                <div>
                  <p className="font-ui text-[12px] text-[#14100a]">{m.user.name ?? m.user.email}</p>
                  {m.user.name && (
                    <p className="font-ui text-[10px] text-[#14100a]/40">{m.user.email}</p>
                  )}
                </div>
                <span className="font-ui text-[9px] uppercase tracking-[0.15em] text-[#14100a]/40">
                  {m.role}
                </span>
              </div>
            ))}
          </div>

          {account.invites.length > 0 && (
            <div className="mt-3">
              <p className="font-ui text-[10px] uppercase tracking-[0.15em] text-[#14100a]/30 mb-2">
                Pending Invites
              </p>
              <div className="border border-[#14100a]/10 bg-white/40 divide-y divide-[#14100a]/5">
                {account.invites.map((inv) => (
                  <div key={inv.id} className="flex items-center justify-between px-4 py-3">
                    <p className="font-ui text-[11px] text-[#14100a]">{inv.email}</p>
                    <span className="font-ui text-[9px] text-[#C8A24A]">
                      expires {new Date(inv.expiresAt).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
