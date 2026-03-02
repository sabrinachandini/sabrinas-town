import { redirect } from "next/navigation";

export default async function VisitRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/towns/${slug}/places`);
}
