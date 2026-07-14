import prisma from "@/lib/prisma";
import { InquiryStatus } from "@prisma/client";
import NextLink from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const [towns, businesses, picks, inquiries, events] = await Promise.all([
    prisma.town.count(),
    prisma.business.count(),
    prisma.business.count({ where: { isHifePick: true } }),
    prisma.partnerInquiry.count({ where: { status: InquiryStatus.NEW } }),
    prisma.eventSubmission.count({ where: { status: "pending" } }),
  ]);

  const sections = [
    {
      href: "/admin/picks",
      label: "HIFE Picks",
      desc: "Mark businesses as ★ HIFE Picks and write their blurbs.",
      stat: `${picks} picks / ${businesses} businesses`,
      accent: "#C8A24A",
    },
    {
      href: "/admin/towns",
      label: "Towns",
      desc: "Browse town data, scores, and enrichment status.",
      stat: `${towns} towns`,
      accent: "#1a3a72",
    },
    {
      href: "/admin/events",
      label: "Event Submissions",
      desc: "Review and approve community-submitted events.",
      stat: `${events} pending`,
      accent: events > 0 ? "#cc3322" : "#14100a",
    },
    {
      href: "/admin/inquiries",
      label: "Partner Inquiries",
      desc: "Manage incoming partnership inquiries.",
      stat: `${inquiries} new`,
      accent: inquiries > 0 ? "#cc3322" : "#14100a",
    },
    {
      href: "/admin/events/review",
      label: "Event Review Queue",
      desc: "AI-ingested events awaiting human review.",
      stat: null,
      accent: "#2a5c45",
    },
  ];

  return (
    <div className="bg-[#f2ece0] min-h-screen">
      <div className="bg-[#14100a] border-b-4 border-[#C8A24A] px-8 py-10">
        <p className="font-ui text-[10px] uppercase tracking-[0.28em] text-[#C8A24A]/60 mb-2">
          History Is For Everyone
        </p>
        <h1 className="font-display text-[#f2e6c8] text-[42px] tracking-[-0.03em]">
          Admin
        </h1>
        <p className="font-ui text-[13px] text-[#f2e6c8]/40 mt-1">
          {towns} towns · {businesses} businesses · {picks} HIFE Picks
        </p>
      </div>

      <div className="max-w-[900px] mx-auto px-8 py-12">
        <div className="grid gap-4 sm:grid-cols-2">
          {sections.map((s) => (
            <NextLink
              key={s.href}
              href={s.href}
              className="no-underline block border-2 border-[#14100a]/10 bg-white/60 hover:bg-white/90 hover:border-[#14100a]/20 transition-colors p-6 group"
            >
              <div
                className="w-2 h-2 rounded-full mb-4"
                style={{ backgroundColor: s.accent }}
              />
              <h2 className="font-display text-[22px] text-[#14100a] tracking-[-0.02em] group-hover:text-[#1a3a72] transition-colors">
                {s.label}
              </h2>
              <p className="font-ui text-[12px] text-[#14100a]/50 mt-1 leading-relaxed">
                {s.desc}
              </p>
              {s.stat && (
                <p
                  className="font-ui text-[11px] font-semibold mt-3"
                  style={{ color: s.accent }}
                >
                  {s.stat}
                </p>
              )}
            </NextLink>
          ))}
        </div>
      </div>
    </div>
  );
}
