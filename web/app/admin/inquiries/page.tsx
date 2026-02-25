import { Container, Heading, Text, Link, Divider } from "@/components/ui";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

interface Inquiry {
  id: string;
  name: string;
  email: string;
  organization: string | null;
  townSlug: string | null;
  status: string;
  createdAt: string;
  town: { name: string; slug: string } | null;
}

const STATUS_OPTIONS = ["All", "NEW", "IN_REVIEW", "RESPONDED", "CLOSED"] as const;

export default async function AdminInquiriesPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; q?: string }>;
}) {
  const { status, q } = await searchParams;

  const params = new URLSearchParams();
  if (status && status !== "All") params.set("status", status);
  if (q) params.set("q", q);

  let inquiries: Inquiry[] = [];
  let fetchError: string | null = null;

  try {
    const res = await fetch(
      `${API_URL}/admin/inquiries${params.toString() ? `?${params}` : ""}`,
      {
        headers: { "X-Admin-Token": ADMIN_TOKEN || "" },
        cache: "no-store",
      }
    );
    const json = await res.json();
    if (json.success) {
      inquiries = json.data;
    } else {
      fetchError = json.error || "Failed to load inquiries";
    }
  } catch {
    fetchError = "Failed to connect to API";
  }

  return (
    <main className="py-section">
      <Container>
        <Heading level={1}>Partner Inquiries</Heading>
        <Text className="mt-element" muted>
          Manage incoming partnership inquiries.
        </Text>

        <Divider spacing="default" />

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mt-component">
          {STATUS_OPTIONS.map((s) => {
            const isActive = s === "All" ? !status || status === "All" : status === s;
            const href =
              s === "All"
                ? `/admin/inquiries${q ? `?q=${q}` : ""}`
                : `/admin/inquiries?status=${s}${q ? `&q=${q}` : ""}`;
            return (
              <Link
                key={s}
                href={href}
                className={`px-3 py-1 text-small rounded-lg border ${
                  isActive
                    ? "border-accent-blue bg-accent-blue text-white"
                    : "border-border-light hover:border-text-muted"
                }`}
              >
                {s === "All" ? "All" : s.replace("_", " ")}
              </Link>
            );
          })}
        </div>

        {/* Search */}
        <form className="mt-element">
          <input
            type="text"
            name="q"
            defaultValue={q || ""}
            placeholder="Search by name, email, org, or town..."
            className="w-full max-w-md px-4 py-2 border-2 border-border-light rounded-lg bg-bg-primary text-text-primary text-small focus:border-accent-blue focus:outline-none"
          />
          {status && status !== "All" && (
            <input type="hidden" name="status" value={status} />
          )}
        </form>

        {fetchError && (
          <Text className="mt-component text-red-600">{fetchError}</Text>
        )}

        {/* Inquiry list */}
        <div className="mt-component space-y-2">
          {inquiries.length === 0 && !fetchError && (
            <Text muted>No inquiries found.</Text>
          )}
          {inquiries.map((inq) => (
            <div
              key={inq.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-element bg-bg-secondary rounded-lg"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <Text className="font-medium">{inq.name}</Text>
                  <StatusBadge status={inq.status} />
                </div>
                <Text size="small" muted className="truncate">
                  {inq.email}
                  {inq.organization && ` · ${inq.organization}`}
                  {inq.town && ` · ${inq.town.name}`}
                  {inq.townSlug && !inq.town && ` · ${inq.townSlug}`}
                </Text>
                <Text size="small" muted>
                  {new Date(inq.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Text>
              </div>
              <Link
                href={`/admin/inquiries/${inq.id}`}
                className="text-small text-accent-blue shrink-0"
              >
                View →
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    NEW: "bg-yellow-100 text-yellow-800",
    IN_REVIEW: "bg-blue-100 text-blue-800",
    RESPONDED: "bg-green-100 text-green-800",
    CLOSED: "bg-gray-100 text-gray-600",
  };
  return (
    <span
      className={`inline-block px-2 py-0.5 text-xs rounded ${colors[status] || "bg-gray-100 text-gray-600"}`}
    >
      {status.replace("_", " ")}
    </span>
  );
}
