import prisma from "./prisma";

/**
 * Tenant isolation helper. Resolves a slug to a verified townId before
 * running any Prisma query, preventing IDOR-style cross-tenant data leaks.
 *
 * Usage:
 *   const people = await withTown(params.slug, (townId) =>
 *     prisma.person.findMany({ where: { townId } })
 *   );
 *   if (!people) notFound();
 */
export async function withTown<T>(
  slug: string,
  fn: (townId: string) => Promise<T>,
): Promise<T | null> {
  const town = await prisma.town.findUnique({
    where: { slug },
    select: { id: true },
  });
  if (!town) return null;
  return fn(town.id);
}
