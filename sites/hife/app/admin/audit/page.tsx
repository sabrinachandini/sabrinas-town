import prisma from "@/lib/prisma";
import type { AuditAction } from "@prisma/client";

export const dynamic = "force-dynamic";

const ACTION_COLOR: Record<AuditAction, string> = {
  CREATED: "#2a5c45",
  UPDATED: "#1a3a72",
  DELETED: "#cc3322",
  PUBLISHED: "#2a5c45",
  UNPUBLISHED: "#C8A24A",
  APPROVED: "#2a5c45",
  REJECTED: "#cc3322",
  MEMBERSHIP_ADDED: "#1a3a72",
  MEMBERSHIP_REMOVED: "#cc3322",
  AGREEMENT_SIGNED: "#2a5c45",
  PROPOSAL_SUBMITTED: "#1a3a72",
  SUGGESTION_SUBMITTED: "#C8A24A",
};

export default async function AuditLogPage({
  searchParams,
}: {
  searchParams: Promise<{ action?: string; account?: string }>;
}) {
  const { action, account } = await searchParams;

  const events = await prisma.auditEvent.findMany({
    where: {
      ...(action ? { action: action as AuditAction } : {}),
      ...(account ? { partnerAccountId: account } : {}),
    },
    include: { partnerAccount: { select: { name: true } } },
    orderBy: { createdAt: "desc" },
    take: 200,
  });

  const actions = await prisma.auditEvent.findMany({
    distinct: ["action"],
    select: { action: true },
    orderBy: { action: "asc" },
  });

  return (
    <div>
      <div className="bg-[#14100a] px-8 py-8 border-b-4 border-[#C8A24A]">
        <p className="font-ui text-[10px] uppercase tracking-[0.28em] text-[#C8A24A]/50 mb-1">Mission Control</p>
        <h1 className="font-display text-[#f2e6c8] text-[36px] tracking-[-0.03em]">Audit Log</h1>
        <p className="font-ui text-[13px] text-[#f2e6c8]/40 mt-1">
          Immutable record of all staff and partner actions. Showing last {events.length}.
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto px-8 py-8">
        {/* Filters */}
        <form className="flex gap-3 mb-8 flex-wrap">
          <select
            name="action"
            defaultValue={action ?? ""}
            className="font-ui text-[11px] border-2 border-[#14100a]/10 bg-white/60 px-3 py-2"
            onChange={(e) => {
              const url = new URL(window.location.href);
              if (e.target.value) url.searchParams.set("action", e.target.value);
              else url.searchParams.delete("action");
              window.location.href = url.toString();
            }}
          >
            <option value="">All actions</option>
            {actions.map((a) => (
              <option key={a.action} value={a.action}>{a.action}</option>
            ))}
          </select>
          {action && (
            <a href="/admin/audit"
              className="font-ui text-[11px] text-[#cc3322] hover:underline self-center">
              Clear filter
            </a>
          )}
        </form>

        {events.length === 0 && (
          <p className="font-ui text-[13px] text-[#14100a]/30">No audit events recorded yet.</p>
        )}

        <div className="space-y-1">
          {events.map((ev) => (
            <div key={ev.id}
              className="flex items-start gap-4 py-3 border-b border-[#14100a]/5 hover:bg-white/30 px-2 -mx-2 transition-colors">
              {/* Time */}
              <div className="shrink-0 w-[120px]">
                <p className="font-ui text-[10px] text-[#14100a]/40 tabular-nums">
                  {ev.createdAt.toLocaleDateString()}
                </p>
                <p className="font-ui text-[10px] text-[#14100a]/30 tabular-nums">
                  {ev.createdAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>

              {/* Action badge */}
              <div className="shrink-0 w-[160px]">
                <span
                  className="font-ui text-[9px] uppercase tracking-[0.15em] font-semibold px-2 py-0.5"
                  style={{
                    color: ACTION_COLOR[ev.action] ?? "#14100a",
                    borderColor: ACTION_COLOR[ev.action] ?? "#14100a",
                    border: "1px solid",
                  }}
                >
                  {ev.action}
                </span>
              </div>

              {/* Entity */}
              <div className="flex-1 min-w-0">
                <p className="font-ui text-[11px] text-[#14100a]">
                  <span className="text-[#14100a]/40">{ev.entityType}</span>
                  {ev.entityId && (
                    <span className="font-mono text-[10px] text-[#14100a]/30 ml-2 truncate">
                      {ev.entityId}
                    </span>
                  )}
                </p>
                {ev.partnerAccount && (
                  <p className="font-ui text-[10px] text-[#1a3a72]/60 mt-0.5">
                    {ev.partnerAccount.name}
                  </p>
                )}
              </div>

              {/* Actor */}
              <div className="shrink-0 text-right">
                <p className="font-ui text-[10px] text-[#14100a]/40 truncate max-w-[140px]">
                  {ev.actorEmail ?? "system"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
