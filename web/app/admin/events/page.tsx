import prisma from "@/lib/prisma";

async function updateStatus(id: string, status: string) {
  "use server";
  await prisma.eventSubmission.update({ where: { id }, data: { status } });
}

export default async function AdminEventsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status = "pending" } = await searchParams;

  const submissions = await prisma.eventSubmission.findMany({
    where: status === "all" ? {} : { status },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  const counts = await prisma.eventSubmission.groupBy({ by: ["status"], _count: true });
  const countMap = Object.fromEntries(counts.map((c) => [c.status, c._count]));

  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-[#1a3a72] border-b-4 border-[#cc3322] px-8 py-8">
        <h1 className="font-display text-cream text-[36px] tracking-[-0.02em]">Event Submissions</h1>
      </div>

      <div className="max-w-[1200px] mx-auto px-8 py-8">
        {/* Status tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {[
            { key: "pending", label: "Pending" },
            { key: "approved", label: "Approved" },
            { key: "rejected", label: "Rejected" },
            { key: "all", label: "All" },
          ].map(({ key, label }) => (
            <a
              key={key}
              href={`?status=${key}`}
              className={`no-underline font-ui text-[10px] uppercase tracking-[0.15em] px-4 py-2 border transition-colors ${
                status === key ? "bg-[#1a3a72] border-[#1a3a72] text-cream" : "border-ink/20 text-ink/50 hover:border-ink/50"
              }`}
            >
              {label} {countMap[key] ? `(${countMap[key]})` : ""}
            </a>
          ))}
        </div>

        {submissions.length === 0 ? (
          <p className="font-ui text-[16px] text-ink/40">No submissions with status "{status}".</p>
        ) : (
          <div className="space-y-4">
            {submissions.map((s) => (
              <div key={s.id} className="border border-ink/10 bg-white/50 p-5">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <span className={`font-ui text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 mr-2 ${
                      s.status === "pending" ? "bg-yellow/50 text-ink" : s.status === "approved" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>{s.status}</span>
                    <span className="font-ui text-[10px] text-ink/40">{s.eventType}</span>
                    <h2 className="font-display text-[20px] text-ink tracking-[-0.01em] mt-1">{s.eventName}</h2>
                    <p className="font-ui text-[12px] text-ink/40 mt-0.5">
                      {s.contactEmail}
                      {s.startDate ? ` · ${new Date(s.startDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}` : ""}
                      {s.venueName ? ` · ${s.venueName}` : ""}
                    </p>
                    <p className="font-ui text-[14px] text-ink/60 mt-2 leading-relaxed max-w-[600px]">{s.description}</p>
                    {s.websiteUrl && (
                      <a href={s.websiteUrl} target="_blank" rel="noopener noreferrer" className="font-ui text-[12px] text-[#1a3a72]/60 hover:text-[#1a3a72] mt-1 block">
                        {s.websiteUrl}
                      </a>
                    )}
                  </div>

                  {s.status === "pending" && (
                    <div className="flex gap-2 flex-shrink-0">
                      <form action={updateStatus.bind(null, s.id, "approved")}>
                        <button className="font-ui text-[10px] uppercase tracking-[0.12em] bg-[#5a7a5a] text-cream px-4 py-2 hover:bg-[#3a5a3a] transition-colors">
                          Approve
                        </button>
                      </form>
                      <form action={updateStatus.bind(null, s.id, "rejected")}>
                        <button className="font-ui text-[10px] uppercase tracking-[0.12em] border border-[#cc3322]/30 text-[#cc3322]/70 px-4 py-2 hover:border-[#cc3322] hover:text-[#cc3322] transition-colors">
                          Reject
                        </button>
                      </form>
                    </div>
                  )}
                </div>
                <p className="font-ui text-[10px] text-ink/25 mt-3">
                  Submitted {new Date(s.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
