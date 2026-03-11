// MODEL: Claude Sonnet
// Public partner inquiry submission endpoint

import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { Resend } from 'resend';
import prisma from '../db/client.js';

const INQUIRY_TO = 'sabrina@lexington250.com';
// Lazy — only instantiated when actually sending, so a missing key doesn't crash startup
function getResend(): Resend | null {
  if (!process.env.RESEND_API_KEY) return null;
  return new Resend(process.env.RESEND_API_KEY);
}

const InquiryBodySchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(200),
  title: z.string().max(200).optional(),
  organization: z.string().max(200).optional(),
  phone: z.string().max(50).optional(),
  message: z.string().max(5000).optional(),
  townSlug: z.string().max(100).optional(),
  sourceUrl: z.string().url().max(500).optional(),
  website: z.string().optional(), // honeypot
});

function buildPlainTextBody(fields: {
  name: string;
  email: string;
  title?: string | null;
  organization?: string | null;
  phone?: string | null;
  message?: string | null;
  townSlug?: string | null;
}): string {
  const lines: string[] = [
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
  ];
  if (fields.title)        lines.push(`Title: ${fields.title}`);
  if (fields.organization) lines.push(`Organization: ${fields.organization}`);
  if (fields.phone)        lines.push(`Phone: ${fields.phone}`);
  if (fields.townSlug)     lines.push(`Town: ${fields.townSlug}`);
  if (fields.message)      lines.push('', 'Message:', fields.message);
  return lines.join('\n');
}

export async function registerPartnerInquireRoutes(fastify: FastifyInstance): Promise<void> {
  /**
   * POST /api/partner/inquire
   * Public endpoint — no auth required
   */
  fastify.post(
    '/partner/inquire',
    async (
      request: FastifyRequest<{ Body: unknown }>,
      reply: FastifyReply
    ) => {
      const bodyResult = InquiryBodySchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          success: false,
          error: 'Validation error',
          details: bodyResult.error.issues,
        });
      }

      const { name, email, title, organization, phone, message, townSlug, sourceUrl, website } = bodyResult.data;

      // Honeypot check — if filled, return success silently (no DB insert)
      if (website) {
        return reply.send({
          success: true,
          data: { id: 'ok' },
          meta: { timestamp: new Date().toISOString() },
        });
      }

      // Resolve townId from townSlug if provided
      let townId: string | null = null;
      if (townSlug) {
        const town = await prisma.town.findUnique({
          where: { slug: townSlug },
          select: { id: true },
        });
        townId = town?.id ?? null;
      }

      try {
        const inquiry = await prisma.partnerInquiry.create({
          data: {
            name,
            email,
            title: title ?? null,
            organization: organization ?? null,
            phone: phone ?? null,
            message: message ?? null,
            townSlug: townSlug ?? null,
            townId,
            sourceUrl: sourceUrl ?? null,
            status: 'NEW',
          },
        });

        request.log.info({ inquiryId: inquiry.id, email, townSlug }, 'Partner inquiry submitted');

        let emailSent = false;
        const resend = getResend();
        try {
          if (!resend) throw new Error('RESEND_API_KEY not configured');
          const { error: emailError } = await resend.emails.send({
            from: 'noreply@lexington250.com',
            to: [INQUIRY_TO],
            subject: townSlug
              ? `New Partner Inquiry \u2014 ${name} (${townSlug})`
              : `New Partner Inquiry \u2014 ${name}`,
            text: buildPlainTextBody({ name, email, title, organization, phone, message, townSlug }),
          });
          if (emailError) {
            request.log.warn({ emailError }, 'Resend API error on partner inquiry notification');
          } else {
            emailSent = true;
          }
        } catch (err) {
          request.log.error(err, 'Resend threw sending partner inquiry notification');
        }

        return reply.status(201).send({
          success: true,
          data: { id: inquiry.id },
          email_sent: emailSent,
          meta: { timestamp: new Date().toISOString() },
        });
      } catch (error) {
        request.log.error(error, 'Error creating partner inquiry');
        return reply.status(500).send({
          success: false,
          error: 'Internal server error',
        });
      }
    }
  );
}
