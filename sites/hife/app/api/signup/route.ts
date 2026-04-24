import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = (body.email ?? "").toString().trim().toLowerCase();
    const townId = body.townId ?? null;
    const source = body.source ?? "events";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const existing = await prisma.emailSignup.findFirst({
      where: { email, townId: townId || null },
    });
    if (!existing) {
      await prisma.emailSignup.create({
        data: { email, townId: townId || null, source },
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
