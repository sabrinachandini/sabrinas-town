import { Container, Heading, Text, Link, Divider } from "@/components/ui";
import { InquiryActions } from "./InquiryActions";
import { notFound } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

interface InquiryDetail {
  id: string;
  name: string;
  email: string;
  title: string | null;
  organization: string | null;
  phone: string | null;
  message: string | null;
  townSlug: string | null;
  sourceUrl: string | null;
  status: string;
  notes: string | null;
  createdAt: string;
  town: { id: string; slug: string; name: string } | null;
}

export default async function AdminInquiryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let inquiry: InquiryDetail | null = null;
  try {
    const res = await fetch(`${API_URL}/admin/inquiries/${id}`, {
      headers: { "X-Admin-Token": ADMIN_TOKEN || "" },
      cache: "no-store",
    });
    const json = await res.json();
    if (json.success) {
      inquiry = json.data;
    }
  } catch {
    // fetch failed
  }

  if (!inquiry) {
    notFound();
  }

  return (
    <main className="py-section">
      <Container size="narrow">
        <Link href="/admin/inquiries" className="text-small text-accent-blue">
          ← Back to inquiries
        </Link>

        <Heading level={1} className="mt-element">
          {inquiry.name}
        </Heading>

        <Divider spacing="default" />

        <dl className="space-y-element">
          <Field label="Email" value={inquiry.email} />
          {inquiry.title && <Field label="Title" value={inquiry.title} />}
          {inquiry.organization && (
            <Field label="Organization" value={inquiry.organization} />
          )}
          {inquiry.phone && <Field label="Phone" value={inquiry.phone} />}
          {inquiry.town && (
            <Field label="Town">
              <Link href={`/towns/${inquiry.town.slug}`}>
                {inquiry.town.name}
              </Link>
            </Field>
          )}
          {inquiry.townSlug && !inquiry.town && (
            <Field label="Town Slug" value={inquiry.townSlug} />
          )}
          {inquiry.sourceUrl && (
            <Field label="Source URL" value={inquiry.sourceUrl} />
          )}
          <Field
            label="Submitted"
            value={new Date(inquiry.createdAt).toLocaleString("en-US", {
              dateStyle: "long",
              timeStyle: "short",
            })}
          />
          {inquiry.message && (
            <div>
              <dt className="text-small text-text-muted font-medium">
                Message
              </dt>
              <dd className="mt-1 p-element bg-bg-secondary rounded-lg whitespace-pre-wrap text-small">
                {inquiry.message}
              </dd>
            </div>
          )}
        </dl>

        <Divider spacing="section" />

        <InquiryActions
          id={inquiry.id}
          currentStatus={inquiry.status}
          currentNotes={inquiry.notes || ""}
        />
      </Container>
    </main>
  );
}

function Field({
  label,
  value,
  children,
}: {
  label: string;
  value?: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-small text-text-muted font-medium">{label}</dt>
      <dd className="mt-0.5">
        {children || <Text>{value}</Text>}
      </dd>
    </div>
  );
}
