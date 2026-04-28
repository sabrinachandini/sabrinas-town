import prisma from "./prisma";

const SLUG = "lexington-ma";

export async function withTown<T>(
  fn: (townId: string) => Promise<T>,
): Promise<T | null> {
  const town = await prisma.town.findUnique({
    where: { slug: SLUG },
    select: { id: true },
  });
  if (!town) return null;
  return fn(town.id);
}
