import prisma from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { dayId, stopIds } = (await req.json()) as { dayId: string; stopIds: string[] };

  if (!dayId || !Array.isArray(stopIds)) {
    return Response.json({ error: "Invalid body" }, { status: 400 });
  }

  // Verify the day belongs to this muster
  const day = await prisma.musterDay.findFirst({ where: { id: dayId, musterId: id } });
  if (!day) return Response.json({ error: "Not found" }, { status: 404 });

  await Promise.all(
    stopIds.map((stopId, index) =>
      prisma.musterStop.update({ where: { id: stopId }, data: { stopOrder: index + 1 } })
    )
  );

  return Response.json({ ok: true });
}
