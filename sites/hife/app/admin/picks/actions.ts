"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function toggleHifePick(id: string, current: boolean) {
  await prisma.business.update({
    where: { id },
    data: { isHifePick: !current },
  });
  revalidatePath("/admin/picks");
}

export async function updateBlurb(id: string, blurb: string) {
  await prisma.business.update({
    where: { id },
    data: { blurb: blurb.trim() || null },
  });
  revalidatePath("/admin/picks");
}

export async function saveBlurb(id: string, formData: FormData) {
  const blurb = (formData.get("blurb") as string) ?? "";
  await prisma.business.update({
    where: { id },
    data: { blurb: blurb.trim() || null },
  });
  revalidatePath("/admin/picks");
}
