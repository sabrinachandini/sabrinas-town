// Server component — org analytics panel for the dashboard

import prisma from "@/lib/prisma";
import { Text, Heading, Divider } from "@/components/ui";

interface AnalyticsPanelProps {
  orgId: string;
  range: "7d" | "30d";
  orgSlug: string;
}

export default async function AnalyticsPanel({
  orgId,
  range,
  orgSlug,
}: AnalyticsPanelProps) {
  const days = range === "30d" ? 30 : 7;
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  // Fetch stewarded towns
  const stewardships: { townId: string; town: { name: string } }[] =
    await prisma.townStewardship.findMany({
      where: { orgId, status: "ACTIVE" },
      select: { townId: true, town: { select: { name: true } } },
    });
  const stewardedTownIds = stewardships.map((s) => s.townId);
  const townIdToName: Record<string, string> = {};
  for (const s of stewardships) {
    townIdToName[s.townId] = s.town.name;
  }

  // Query events scoped to org, time range, and stewarded towns (or org-level)
  const events: { eventType: string; townId: string | null; timestamp: Date }[] =
    await prisma.analyticsEvent.findMany({
      where: {
        orgId,
        timestamp: { gte: startDate },
        OR: [
          { townId: { in: stewardedTownIds } },
          { townId: null as unknown as undefined },
        ],
      },
      select: {
        eventType: true,
        townId: true,
        timestamp: true,
      },
    });

  // Aggregate by event type
  const byType: Record<string, number> = {};
  for (const e of events) {
    byType[e.eventType] = (byType[e.eventType] || 0) + 1;
  }

  // Aggregate by town
  const byTown: Record<string, { name: string; count: number }> = {};
  for (const e of events) {
    if (e.townId && townIdToName[e.townId]) {
      if (!byTown[e.townId]) {
        byTown[e.townId] = { name: townIdToName[e.townId], count: 0 };
      }
      byTown[e.townId].count += 1;
    }
  }
  const topTowns = Object.values(byTown).sort((a, b) => b.count - a.count);

  // Daily counts
  const dailyMap: Record<string, number> = {};
  for (const e of events) {
    const day = e.timestamp.toISOString().slice(0, 10);
    dailyMap[day] = (dailyMap[day] || 0) + 1;
  }
  const dailyCounts = Object.entries(dailyMap)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, count]) => ({ date, count }));

  return (
    <div className="mt-section">
      <Divider spacing="section" />
      <Heading level={2}>Analytics</Heading>
      <Text className="mt-element" muted>
        Activity from authenticated org members across your stewarded towns.
      </Text>

      {/* Range toggle */}
      <div className="mt-element flex gap-2">
        <a
          href={`/org/${orgSlug}/dashboard?range=7d`}
          className={`px-3 py-1 text-small rounded-lg border ${
            range === "7d"
              ? "bg-accent-blue text-white border-accent-blue"
              : "border-border-light text-text-muted hover:border-text-muted"
          }`}
        >
          7 days
        </a>
        <a
          href={`/org/${orgSlug}/dashboard?range=30d`}
          className={`px-3 py-1 text-small rounded-lg border ${
            range === "30d"
              ? "bg-accent-blue text-white border-accent-blue"
              : "border-border-light text-text-muted hover:border-text-muted"
          }`}
        >
          30 days
        </a>
      </div>

      {/* KPI row */}
      <div className="mt-component grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-element">
        <KPI label="Total events" value={events.length} />
        <KPI label="Town views" value={byType["TOWN_VIEW"] || 0} />
        <KPI label="Teacher views" value={byType["TEACHER_VIEW"] || 0} />
        <KPI label="Print clicks" value={byType["PRINT_CLICK"] || 0} />
        <KPI label="Compare views" value={byType["COMPARE_VIEW"] || 0} />
      </div>

      {/* Top towns */}
      {topTowns.length > 0 && (
        <div className="mt-component">
          <Text size="small" muted className="uppercase tracking-wide font-medium">
            Top towns by activity
          </Text>
          <div className="mt-element">
            <table className="w-full text-small">
              <thead>
                <tr className="border-b border-border-light">
                  <th className="text-left py-2 font-medium text-text-muted">Town</th>
                  <th className="text-right py-2 font-medium text-text-muted">Events</th>
                </tr>
              </thead>
              <tbody>
                {topTowns.map((t) => (
                  <tr key={t.name} className="border-b border-border-light">
                    <td className="py-2">{t.name}</td>
                    <td className="py-2 text-right font-mono">{t.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Daily trend */}
      {dailyCounts.length > 0 && (
        <div className="mt-component">
          <Text size="small" muted className="uppercase tracking-wide font-medium">
            Daily activity
          </Text>
          <div className="mt-element space-y-1">
            {dailyCounts.map((d) => (
              <div key={d.date} className="flex justify-between text-small">
                <span className="text-text-muted">{d.date}</span>
                <span className="font-mono">{d.count}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {events.length === 0 && (
        <div className="mt-component p-element bg-bg-secondary rounded-lg">
          <Text muted>
            No analytics events recorded in the last {days} days.
            Events are captured when authenticated org members visit stewarded town pages.
          </Text>
        </div>
      )}
    </div>
  );
}

function KPI({ label, value }: { label: string; value: number }) {
  return (
    <div className="p-element bg-bg-secondary rounded-lg">
      <Text size="small" muted>
        {label}
      </Text>
      <div className="text-h3 font-heading font-bold mt-1">{value}</div>
    </div>
  );
}
