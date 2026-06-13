import { NextResponse } from "next/server";
import { Resend } from "resend";
import prisma from "@/lib/prisma";
import { getOnThisDay } from "@/lib/api";

export const maxDuration = 300;

export async function GET(req: Request) {
  if (req.headers.get("authorization") !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const now = new Date();
  const month = now.getUTCMonth() + 1;
  const day = now.getUTCDate();
  const monthName = now.toLocaleDateString("en-US", { month: "long", timeZone: "UTC" });
  const dayNum = now.toLocaleDateString("en-US", { day: "numeric", timeZone: "UTC" });

  const { events } = await getOnThisDay(month, day);

  // Get all signups
  const signups = await prisma.emailSignup.findMany({
    select: { email: true, townId: true, town: { select: { name: true, slug: true } } },
  });

  if (signups.length === 0) {
    return NextResponse.json({ ok: true, sent: 0 });
  }

  const eventsHtml = events.length === 0
    ? `<p style="color:#555;font-size:15px;line-height:1.6;">No documented battles or events fall on ${monthName} ${dayNum} — but the work of building a nation continued regardless.</p>`
    : events.map((e) => `
        <div style="border-left:3px solid #cc3322;padding:12px 16px;margin-bottom:16px;background:#faf6ec;">
          <p style="font-size:12px;text-transform:uppercase;letter-spacing:0.15em;color:#cc3322;margin-bottom:4px;">${e.year} · ${e.town.name}, ${e.town.state}</p>
          <p style="font-size:18px;font-weight:700;color:#14100a;margin-bottom:6px;line-height:1.2;">${e.name}</p>
          ${e.summary ? `<p style="font-size:14px;color:#555;line-height:1.6;">${e.summary.slice(0, 200)}${e.summary.length > 200 ? "…" : ""}</p>` : ""}
          <a href="https://sabrinas-town.vercel.app/towns/${e.town.slug}/timeline/${e.slug ?? e.id}" style="display:inline-block;margin-top:10px;font-size:11px;text-transform:uppercase;letter-spacing:0.15em;color:#cc3322;text-decoration:none;border:1.5px solid #cc3322;padding:4px 12px;">Read more →</a>
        </div>
      `).join("");

  const htmlBody = `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
    <body style="margin:0;padding:0;background:#f2e6c8;font-family:system-ui,-apple-system,sans-serif;">
      <div style="max-width:600px;margin:0 auto;background:#f2e6c8;">
        <!-- Header -->
        <div style="background:#14100a;padding:28px 32px;border-bottom:4px solid #cc3322;">
          <p style="font-size:9px;text-transform:uppercase;letter-spacing:0.25em;color:rgba(242,230,200,0.4);margin-bottom:6px;">History is for Everyone</p>
          <h1 style="font-size:32px;font-weight:900;color:#f2e6c8;line-height:0.95;letter-spacing:-0.03em;margin:0;">On This Day<br><span style="color:#cc3322;">${monthName} ${dayNum}</span></h1>
        </div>

        <!-- Body -->
        <div style="padding:28px 32px;">
          <p style="font-size:14px;color:rgba(20,16,10,0.55);line-height:1.6;margin-bottom:24px;font-style:italic;">
            Revolutionary War events documented on this date across the thirteen colonies and beyond.
          </p>

          ${eventsHtml}

          <div style="margin-top:32px;padding-top:24px;border-top:2px solid rgba(20,16,10,0.1);">
            <a href="https://sabrinas-town.vercel.app/on-this-day" style="display:inline-block;background:#cc3322;color:#f2e6c8;font-size:11px;text-transform:uppercase;letter-spacing:0.18em;font-weight:600;padding:12px 24px;text-decoration:none;">
              View on the site →
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="padding:20px 32px;border-top:2px solid rgba(20,16,10,0.08);">
          <p style="font-size:11px;color:rgba(20,16,10,0.35);line-height:1.5;margin:0;">
            You're receiving this because you signed up at History is for Everyone.<br>
            <a href="https://sabrinas-town.vercel.app" style="color:rgba(20,16,10,0.5);">historyisforeveryone.com</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  let sent = 0;
  let errors = 0;

  // Send in batches of 10 to stay under Resend rate limits
  for (let i = 0; i < signups.length; i += 10) {
    const batch = signups.slice(i, i + 10);
    await Promise.all(
      batch.map(async (signup) => {
        try {
          await resend.emails.send({
            from: "History is for Everyone <digest@sabrinas-town.vercel.app>",
            to: signup.email,
            subject: `On This Day — ${monthName} ${dayNum} | History is for Everyone`,
            html: htmlBody,
          });
          sent++;
        } catch {
          errors++;
        }
      })
    );
    // Small pause between batches
    if (i + 10 < signups.length) {
      await new Promise((r) => setTimeout(r, 500));
    }
  }

  return NextResponse.json({ ok: true, sent, errors, total: signups.length });
}
