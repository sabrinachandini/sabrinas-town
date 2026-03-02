import { redirect } from "next/navigation";

export default async function EventsDetailRedirectPage({
  params,
}: {
  params: Promise<{ slug: string; id: string }>;
}) {
  const { slug, id } = await params;
  redirect(`/towns/${slug}/timeline/${id}`);
}
