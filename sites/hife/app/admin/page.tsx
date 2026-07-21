import prisma from "@/lib/prisma";
import { InquiryStatus } from "@prisma/client";
import NextLink from "next/link";

export const dynamic = "force-dynamic";

async function getDashboardCounts() {
  const [
    towns,
    partnerAccountCounts,
    places,
    persons,
    events,
    sources,
    localEvents,
    businesses,
    picks,
    reviewPlaces,
    reviewPersons,
    reviewEvents,
    reviewLocalEvents,
    reviewLessonPlans,
    reviewEntityLinks,
    reviewSuggestions,
    newInquiries,
    pendingSubmissions,
  ] = await Promise.all([
    prisma.town.count(),
    prisma.partnerAccount.groupBy({ by: ["status"], _count: { id: true } }),
    prisma.place.count(),
    prisma.person.count(),
    prisma.event.count(),
    prisma.source.count(),
    prisma.localEvent.count(),
    prisma.business.count(),
    prisma.business.count({ where: { isHifePick: true } }),
    prisma.place.count({ where: { needsReview: true } }),
    prisma.person.count({ where: { needsReview: true } }),
    prisma.event.count({ where: { needsReview: true } }),
    prisma.localEvent.count({ where: { needsReview: true } }),
    prisma.lessonPlan.count({ where: { needsReview: true } }),
    prisma.entityLink.count({ where: { status: "NEEDS_REVIEW" } }),
    prisma.suggestion.count({ where: { status: "PENDING" } }),
    prisma.partnerInquiry.count({ where: { status: InquiryStatus.NEW } }),
    prisma.eventSubmission.count({ where: { status: "pending" } }),
  ]);

  const totalBacklog =
    reviewPlaces + reviewPersons + reviewEvents + reviewLocalEvents +
    reviewLessonPlans + reviewEntityLinks + reviewSuggestions;

  const partnerByStatus = Object.fromEntries(
    partnerAccountCounts.map((r) => [r.status, r._count.id]),
  );

  return {
    towns, places, persons, events, sources, localEvents, businesses, picks,
    backlog: {
      total: totalBacklog,
      places: reviewPlaces, persons: reviewPersons, events: reviewEvents,
      localEvents: reviewLocalEvents, lessonPlans: reviewLessonPlans,
      entityLinks: reviewEntityLinks, suggestions: reviewSuggestions,
    },
    partners: partnerByStatus,
    newInquiries,
    pendingSubmissions,
  };
}

function StatCard({ href, label, value, sub, accent = "#14100a", urgent = false }: {
  href: string; label: string; value: string | number;
  sub?: string; accent?: string; urgent?: boolean;
}) {
  return (
    <NextLink href={href}
      className={`block p-5 border-2 transition-colors no-underline group ${urgent
        ? "border-[#cc3322]/30 bg-[#cc3322]/5 hover:bg-[#cc3322]/10"
        : "border-[#14100a]/10 bg-white/60 hover:bg-white/90"}`}>
      <p className="font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/40 mb-1">{label}</p>
      <p className="font-display text-[32px] tracking-[-0.03em]"
        style={{ color: urgent ? "#cc3322" : accent }}>{value}</p>
      {sub && <p className="font-ui text-[11px] text-[#14100a]/40 mt-0.5">{sub}</p>}
    </NextLink>
  );
}

function BacklogRow({ label, count }: { label: string; count: number }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-[#14100a]/5 last:border-0">
      <span className="font-ui text-[12px] text-[#14100a]/60">{label}</span>
      <span className={`font-ui text-[12px] font-semibold tabular-nums ${count > 0 ? "text-[#cc3322]" : "text-[#14100a]/30"}`}>
        {count}
      </span>
    </div>
  );
}

export default async function AdminPage() {
  const d = await getDashboardCounts();

  return (
    <div>
      <div className="bg-[#14100a] px-8 py-8 border-b-4 border-[#C8A24A]">
        <p className="font-ui text-[10px] uppercase tracking-[0.28em] text-[#C8A24A]/50 mb-1">Mission Control</p>
        <h1 className="font-display text-[#f2e6c8] text-[36px] tracking-[-0.03em]">Network Overview</h1>
        <p className="font-ui text-[13px] text-[#f2e6c8]/40 mt-1">
          {d.towns} towns · {d.places} places · {d.persons} persons · {d.events} events
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto px-8 py-10 space-y-10">
        {d.backlog.total > 0 && (
          <NextLink href="/admin/review"
            className="flex items-center gap-4 p-4 border-2 border-[#cc3322]/40 bg-[#cc3322]/5 hover:bg-[#cc3322]/10 transition-colors no-underline">
            <div className="w-2 h-2 rounded-full bg-[#cc3322] shrink-0" />
            <div>
              <p className="font-ui text-[12px] font-semibold text-[#cc3322]">
                {d.backlog.total} item{d.backlog.total !== 1 ? "s" : ""} need review
              </p>
              <p className="font-ui text-[11px] text-[#14100a]/50 mt-0.5">Go to Review Queue →</p>
            </div>
          </NextLink>
        )}

        <section>
          <h2 className="font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/40 mb-4">Graph Entities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatCard href="/admin/graph/TOWN" label="Towns" value={d.towns} accent="#1a3a72" />
            <StatCard href="/admin/graph/PLACE" label="Places" value={d.places} accent="#2a5c45" />
            <StatCard href="/admin/graph/PERSON" label="Persons" value={d.persons} accent="#5c2a2a" />
            <StatCard href="/admin/graph/EVENT" label="Events" value={d.events} accent="#14100a" />
            <StatCard href="/admin/graph/SOURCE" label="Sources" value={d.sources} accent="#14100a" />
            <StatCard href="/admin/graph/BUSINESS" label="Businesses" value={d.businesses} sub={`${d.picks} picks`} accent="#C8A24A" />
          </div>
        </section>

        <div className="grid sm:grid-cols-2 gap-8">
          <section>
            <h2 className="font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/40 mb-3">Review Backlog</h2>
            <div className="border-2 border-[#14100a]/10 bg-white/60 p-5">
              <BacklogRow label="Places" count={d.backlog.places} />
              <BacklogRow label="Persons" count={d.backlog.persons} />
              <BacklogRow label="Events" count={d.backlog.events} />
              <BacklogRow label="Local Events" count={d.backlog.localEvents} />
              <BacklogRow label="Lesson Plans" count={d.backlog.lessonPlans} />
              <BacklogRow label="Entity Links" count={d.backlog.entityLinks} />
              <BacklogRow label="Partner Suggestions" count={d.backlog.suggestions} />
              <div className="mt-3 pt-3 border-t-2 border-[#14100a]/10 flex justify-between">
                <span className="font-ui text-[11px] font-semibold text-[#14100a]/60">Total</span>
                <span className={`font-ui text-[13px] font-semibold tabular-nums ${d.backlog.total > 0 ? "text-[#cc3322]" : "text-[#14100a]/30"}`}>
                  {d.backlog.total}
                </span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/40 mb-3">Partner Pipeline</h2>
            <div className="border-2 border-[#14100a]/10 bg-white/60 p-5 space-y-0">
              {([
                { status: "PENDING", label: "Pending", color: "#C8A24A" },
                { status: "ACTIVE", label: "Active", color: "#2a5c45" },
                { status: "SUSPENDED", label: "Suspended", color: "#cc3322" },
                { status: "CHURNED", label: "Churned", color: "#14100a" },
              ] as const).map(({ status, label, color }) => (
                <div key={status} className="flex items-center justify-between py-2 border-b border-[#14100a]/5 last:border-0">
                  <span className="font-ui text-[12px] flex items-center gap-2 text-[#14100a]/60">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                    {label}
                  </span>
                  <span className="font-ui text-[12px] font-semibold tabular-nums text-[#14100a]/60">
                    {d.partners[status] ?? 0}
                  </span>
                </div>
              ))}
              {d.newInquiries > 0 && (
                <div className="pt-3">
                  <NextLink href="/admin/inquiries"
                    className="font-ui text-[11px] text-[#cc3322] font-semibold hover:underline no-underline">
                    {d.newInquiries} new inquir{d.newInquiries !== 1 ? "ies" : "y"} →
                  </NextLink>
                </div>
              )}
            </div>
          </section>
        </div>

        <section>
          <h2 className="font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/40 mb-3">Operations</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatCard href="/admin/review" label="Review Queue" value={d.backlog.total} urgent={d.backlog.total > 0} />
            <StatCard href="/admin/audit" label="Audit Log" value="→" accent="#14100a" />
            <StatCard href="/admin/picks" label="HIFE Picks" value={d.picks} accent="#C8A24A" />
            <StatCard href="/admin/events" label="Submissions" value={d.pendingSubmissions} urgent={d.pendingSubmissions > 0} />
          </div>
        </section>
      </div>
    </div>
  );
}
