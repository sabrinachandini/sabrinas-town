import { redirect } from "next/navigation";

export default async function EventsRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/towns/${slug}/timeline`);
}
