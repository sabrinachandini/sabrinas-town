import NextLink from "next/link";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

const STATUS_COLOR: Record<string, string> = {
  PENDING: "#C8A24A",
  ACTIVE: "#2a5c45",
  SUSPENDED: "#cc3322",
  CHURNED: "#14100a",
};

const PIPELINE_ORDER = ["PENDING", "ACTIVE", "SUSPENDED", "CHURNED"] as const;

export default async function PartnersPage() {
  const accounts = await prisma.partnerAccount.findMany({
    include: {
      town: { select: { name: true, state: true, slug: true } },
      _count: { select: { memberships: true, agreements: true, proposals: true, suggestions: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  const byStatus = Object.fromEntries(
    PIPELINE_ORDER.map((s) => [s, accounts.filter((a) => a.status === s)]),
  );

  const inquiries = await prisma.partnerInquiry.findMany({
    where: { status: "NEW" },
    orderBy: { createdAt: "desc" },
    take: 10,
    select: { id: true, name: true, organization: true, email: true, createdAt: true },
  });

  return (
    <div>
      <div className="bg-[#14100a] px-8 py-8 border-b-4 border-[#C8A24A]">
        <p className="font-ui text-[10px] uppercase tracking-[0.28em] text-[#C8A24A]/50 mb-1">Mission Control</p>
        <h1 className="font-display text-[#f2e6c8] text-[36px] tracking-[-0.03em]">Partners</h1>
        <p className="font-ui text-[13px] text-[#f2e6c8]/40 mt-1">
          {accounts.length} accounts · {accounts.filter((a) => a.status === "ACTIVE").length} active
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto px-8 py-10 space-y-12">

        {/* New inquiries — fast path to convert */}
        {inquiries.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="font-display text-[20px] text-[#14100a] tracking-[-0.02em]">
                New Inquiries
              </h2>
              <span className="font-ui text-[10px] font-semibold text-white bg-[#C8A24A] px-2 py-0.5">
                {inquiries.length}
              </span>
            </div>
            <div className="space-y-2">
              {inquiries.map((inq) => (
                <div key={inq.id} className="flex items-center justify-between gap-4 border-2 border-[#14100a]/10 bg-white/60 px-5 py-3.5">
                  <div>
                    <p className="font-ui text-[12px] font-semibold text-[#14100a]">
                      {inq.name}
                      {inq.organization && (
                        <span className="font-normal text-[#14100a]/50 ml-2">· {inq.organization}</span>
                      )}
                    </p>
                    <p className="font-ui text-[10px] text-[#14100a]/40">{inq.email}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-ui text-[10px] text-[#14100a]/30 tabular-nums">
                      {new Date(inq.createdAt).toLocaleDateString()}
                    </span>
                    <NextLink
                      href={`/admin/inquiries/${inq.id}`}
                      className="font-ui text-[10px] text-[#1a3a72] hover:underline no-underline"
                    >
                      View →
                    </NextLink>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Pipeline board */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-[20px] text-[#14100a] tracking-[-0.02em]">Pipeline</h2>
            <NextLink
              href="/admin/partners/new"
              className="font-ui text-[10px] uppercase tracking-[0.15em] px-4 py-2 bg-[#14100a] text-white hover:bg-[#14100a]/80 transition-colors no-underline"
            >
              + New Account
            </NextLink>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {PIPELINE_ORDER.map((status) => (
              <div key={status}>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-2 h-2 rounded-full inline-block"
                    style={{ background: STATUS_COLOR[status] }}
                  />
                  <span className="font-ui text-[10px] uppercase tracking-[0.15em] text-[#14100a]/50">
                    {status}
                  </span>
                  <span className="font-ui text-[10px] text-[#14100a]/30">
                    {byStatus[status].length}
                  </span>
                </div>
                <div className="space-y-2">
                  {byStatus[status].map((a) => (
                    <NextLink
                      key={a.id}
                      href={`/admin/partners/${a.id}`}
                      className="block border-2 border-[#14100a]/10 bg-white/60 hover:bg-white/90 p-3 transition-colors no-underline"
                    >
                      <p className="font-ui text-[11px] font-semibold text-[#14100a] truncate">{a.name}</p>
                      <p className="font-ui text-[10px] text-[#14100a]/40 mt-0.5 truncate">
                        {a.town.name}, {a.town.state}
                      </p>
                      <div className="flex gap-2 mt-2 flex-wrap">
                        {a._count.memberships > 0 && (
                          <span className="font-ui text-[9px] text-[#14100a]/30">
                            {a._count.memberships}m
                          </span>
                        )}
                        {a._count.agreements > 0 && (
                          <span className="font-ui text-[9px] text-[#14100a]/30">
                            {a._count.agreements}ag
                          </span>
                        )}
                        {a._count.proposals > 0 && (
                          <span className="font-ui text-[9px] text-[#14100a]/30">
                            {a._count.proposals}pr
                          </span>
                        )}
                      </div>
                    </NextLink>
                  ))}
                  {byStatus[status].length === 0 && (
                    <p className="font-ui text-[10px] text-[#14100a]/20 px-3 py-2">—</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
