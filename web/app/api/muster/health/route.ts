import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({
    anthropicKeySet: !!process.env.ANTHROPIC_API_KEY,
    anthropicKeyLength: process.env.ANTHROPIC_API_KEY?.length ?? 0,
    databaseUrlSet: !!process.env.DATABASE_URL,
    nodeEnv: process.env.NODE_ENV,
  });
}
