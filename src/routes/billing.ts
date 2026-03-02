// Billing routes: Stripe Checkout, Customer Portal, Webhooks
// All routes under /api/billing/*

import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import prisma from '../db/client.js';
import { stripe, getPriceId, planTierFromPriceId, logStripeError } from '../lib/stripe.js';

// ---------------------------------------------------------------------------
// Auth helper: verify session + ORG_OWNER role
// For now, we use a simple header-based approach:
//   X-User-Id: <userId>
// In production, replace with proper session token validation.
// ---------------------------------------------------------------------------
async function requireOrgOwner(
  request: FastifyRequest<{ Body: { orgSlug: string } }>,
  reply: FastifyReply
): Promise<{ userId: string; org: any } | null> {
  const userId = request.headers['x-user-id'] as string;
  if (!userId) {
    reply.status(401).send({ success: false, error: 'Authentication required. Provide X-User-Id header.' });
    return null;
  }

  const orgSlug = (request.body as any)?.orgSlug;
  if (!orgSlug) {
    reply.status(400).send({ success: false, error: 'orgSlug is required.' });
    return null;
  }

  const org = await prisma.organization.findUnique({
    where: { slug: orgSlug },
    include: {
      orgUsers: { where: { userId } },
      subscription: true,
    },
  });

  if (!org) {
    reply.status(404).send({ success: false, error: `Organization "${orgSlug}" not found.` });
    return null;
  }

  const membership = org.orgUsers[0];
  if (!membership || (membership.role !== 'ORG_OWNER' && membership.role !== 'ADMIN')) {
    reply.status(403).send({ success: false, error: 'Only ORG_OWNER can manage billing.' });
    return null;
  }

  return { userId, org };
}

// ---------------------------------------------------------------------------
// Route registration
// ---------------------------------------------------------------------------
export async function registerBillingRoutes(fastify: FastifyInstance): Promise<void> {

  // =======================================================================
  // POST /api/billing/checkout-session
  // =======================================================================
  fastify.post('/billing/checkout-session', async (request, reply) => {
    const auth = await requireOrgOwner(request as any, reply);
    if (!auth) return; // reply already sent

    const { org } = auth;
    const body = request.body as { orgSlug: string; planTier: string; townSlug?: string };

    // Validate planTier
    const validTiers = ['BASIC', 'PLUS', 'PRO'];
    if (!validTiers.includes(body.planTier)) {
      return reply.status(400).send({
        success: false,
        error: `Invalid planTier "${body.planTier}". Must be one of: ${validTiers.join(', ')}`,
      });
    }

    // Resolve price ID with guard
    let priceId: string;
    try {
      priceId = getPriceId(body.planTier);
    } catch (err: any) {
      return reply.status(500).send({
        success: false,
        error: err.message,
      });
    }

    const baseUrl = process.env.BASE_URL;
    if (!baseUrl) {
      return reply.status(500).send({ success: false, error: 'BASE_URL not configured.' });
    }

    try {
      // Create or reuse Stripe customer
      let stripeCustomerId = org.stripeCustomerId;
      if (!stripeCustomerId) {
        const customer = await stripe.customers.create({
          name: org.name,
          email: org.contactEmail || undefined,
          metadata: { orgId: org.id, orgSlug: org.slug },
        });
        stripeCustomerId = customer.id;

        // Persist on org
        await prisma.organization.update({
          where: { id: org.id },
          data: { stripeCustomerId },
        });
      }

      // Build metadata (shared between session and subscription)
      const metadata: Record<string, string> = {
        orgId: org.id,
        orgSlug: org.slug,
        planTier: body.planTier,
      };
      if (body.townSlug) {
        metadata.townSlug = body.townSlug;
      }

      // Create Checkout Session
      const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        customer: stripeCustomerId,
        line_items: [{ price: priceId, quantity: 1 }],
        metadata,
        subscription_data: { metadata },
        success_url: `${baseUrl}/org/${org.slug}/dashboard?checkout=success`,
        cancel_url: `${baseUrl}/org/${org.slug}/dashboard?checkout=cancel`,
      });

      request.log.info({
        method: 'stripe.checkout.sessions.create',
        sessionId: session.id,
        orgSlug: org.slug,
        planTier: body.planTier,
        priceId,
      });

      return reply.send({ success: true, url: session.url });

    } catch (err: any) {
      logStripeError('stripe.checkout.sessions.create', err);
      return reply.status(502).send({
        success: false,
        error: {
          message: 'Stripe error creating checkout session',
          requestId: err.requestId || err.raw?.requestId || 'none',
          hint: 'Check Stripe Dashboard → Developers → Logs in TEST mode',
        },
      });
    }
  });

  // =======================================================================
  // POST /api/billing/portal-session
  // =======================================================================
  fastify.post('/billing/portal-session', async (request, reply) => {
    const auth = await requireOrgOwner(request as any, reply);
    if (!auth) return;

    const { org } = auth;

    if (!org.stripeCustomerId) {
      return reply.status(400).send({
        success: false,
        error: 'No Stripe customer found for this organization. Subscribe first.',
      });
    }

    const baseUrl = process.env.BASE_URL;

    try {
      const portalSession = await stripe.billingPortal.sessions.create({
        customer: org.stripeCustomerId,
        return_url: `${baseUrl}/org/${org.slug}/dashboard`,
      });

      return reply.send({ success: true, url: portalSession.url });

    } catch (err: any) {
      logStripeError('stripe.billingPortal.sessions.create', err);
      return reply.status(502).send({
        success: false,
        error: {
          message: 'Stripe error creating portal session',
          requestId: err.requestId || err.raw?.requestId || 'none',
          hint: 'Check Stripe Dashboard → Developers → Logs in TEST mode',
        },
      });
    }
  });

  // =======================================================================
  // POST /api/billing/webhook
  // Raw body handling + signature verification
  // =======================================================================
  fastify.post('/billing/webhook', {
    config: {
      // Signal to the rawBody hook that this route needs it
      rawBody: true,
    },
  }, async (request, reply) => {
    const signature = request.headers['stripe-signature'] as string;
    if (!signature) {
      return reply.status(400).send({ success: false, error: 'Missing stripe-signature header' });
    }

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!webhookSecret) {
      request.log.error('STRIPE_WEBHOOK_SECRET not configured');
      return reply.status(500).send({ success: false, error: 'Webhook secret not configured' });
    }

    // rawBody is set by the preParsing hook in app.ts
    const rawBody = (request as any).rawBody;
    if (!rawBody) {
      request.log.error('Raw body not available — check preParsing hook configuration');
      return reply.status(500).send({ success: false, error: 'Raw body not available' });
    }

    let event: any;
    try {
      event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
    } catch (err: any) {
      request.log.error({ err: err.message }, 'Webhook signature verification failed');
      return reply.status(400).send({ success: false, error: `Signature verification failed: ${err.message}` });
    }

    request.log.info({ eventType: event.type, eventId: event.id }, 'Webhook received');

    try {
      switch (event.type) {
        case 'checkout.session.completed':
          await handleCheckoutCompleted(event.data.object, request);
          break;
        case 'customer.subscription.created':
        case 'customer.subscription.updated':
          await handleSubscriptionUpsert(event.data.object, request);
          break;
        case 'customer.subscription.deleted':
          await handleSubscriptionDeleted(event.data.object, request);
          break;
        case 'invoice.paid':
          request.log.info({ invoiceId: event.data.object.id }, 'Invoice paid');
          break;
        case 'invoice.payment_failed':
          await handlePaymentFailed(event.data.object, request);
          break;
        default:
          request.log.info({ eventType: event.type }, 'Unhandled webhook event type');
      }
    } catch (err: any) {
      request.log.error({ err: err.message, eventType: event.type }, 'Error processing webhook');
      // Return 200 anyway to prevent Stripe from retrying endlessly
    }

    return reply.status(200).send({ received: true });
  });
}

// ---------------------------------------------------------------------------
// Webhook handlers
// ---------------------------------------------------------------------------

async function handleCheckoutCompleted(session: any, request: any): Promise<void> {
  // When checkout completes, the subscription is created — we'll get subscription events too.
  // But we can use checkout metadata to link org → customer if needed.
  const orgId = session.metadata?.orgId;
  const customerId = session.customer;

  if (orgId && customerId) {
    await prisma.organization.update({
      where: { id: orgId },
      data: { stripeCustomerId: customerId },
    }).catch(() => {
      // Org might already have this customerId — that's fine
    });
  }

  request.log.info({
    handler: 'checkout.session.completed',
    orgId,
    customerId,
    subscriptionId: session.subscription,
  });
}

async function handleSubscriptionUpsert(subscription: any, request: any): Promise<void> {
  const metadata = subscription.metadata || {};
  const orgId = metadata.orgId;

  if (!orgId) {
    // Try to find org by stripeCustomerId
    const org = await prisma.organization.findUnique({
      where: { stripeCustomerId: subscription.customer },
    });
    if (!org) {
      request.log.warn({ customerId: subscription.customer }, 'No org found for subscription customer');
      return;
    }
    metadata.orgId = org.id;
  }

  // Determine plan tier from price or metadata
  const priceId = subscription.items?.data?.[0]?.price?.id;
  const planTier = metadata.planTier || planTierFromPriceId(priceId) || 'BASIC';

  const data = {
    orgId: metadata.orgId,
    planTier: planTier as any,
    stripeCustomerId: subscription.customer,
    stripeSubscriptionId: subscription.id,
    stripePriceId: priceId || '',
    status: subscription.status, // active, past_due, canceled, unpaid, incomplete
    currentPeriodEnd: subscription.current_period_end
      ? new Date(subscription.current_period_end * 1000)
      : null,
    cancelAtPeriodEnd: subscription.cancel_at_period_end || false,
  };

  // Upsert keyed on orgId (one subscription per org)
  await prisma.orgSubscription.upsert({
    where: { orgId: metadata.orgId },
    create: data,
    update: {
      planTier: data.planTier,
      stripeSubscriptionId: data.stripeSubscriptionId,
      stripePriceId: data.stripePriceId,
      status: data.status,
      currentPeriodEnd: data.currentPeriodEnd,
      cancelAtPeriodEnd: data.cancelAtPeriodEnd,
    },
  });

  request.log.info({
    handler: 'subscription.upsert',
    orgId: metadata.orgId,
    status: subscription.status,
    planTier,
  });

  // Activate stewardship if subscription is active and townSlug is in metadata
  if (subscription.status === 'active' && metadata.townSlug) {
    await activateStewardship(metadata.orgId, metadata.townSlug, request);
  }
}

async function handleSubscriptionDeleted(subscription: any, request: any): Promise<void> {
  // Update status to canceled
  const existing = await prisma.orgSubscription.findUnique({
    where: { stripeSubscriptionId: subscription.id },
  });

  if (existing) {
    await prisma.orgSubscription.update({
      where: { id: existing.id },
      data: { status: 'canceled' },
    });
    request.log.info({ orgId: existing.orgId }, 'Subscription canceled');
  }
}

async function handlePaymentFailed(invoice: any, request: any): Promise<void> {
  const subscriptionId = invoice.subscription;
  if (!subscriptionId) return;

  const existing = await prisma.orgSubscription.findUnique({
    where: { stripeSubscriptionId: subscriptionId },
  });

  if (existing) {
    await prisma.orgSubscription.update({
      where: { id: existing.id },
      data: { status: 'past_due' },
    });
    request.log.info({ orgId: existing.orgId }, 'Payment failed — marked past_due');
  }
}

async function activateStewardship(orgId: string, townSlug: string, request: any): Promise<void> {
  const town = await prisma.town.findUnique({ where: { slug: townSlug } });
  if (!town) {
    request.log.warn({ townSlug }, 'Town not found for stewardship activation');
    return;
  }

  await prisma.townStewardship.upsert({
    where: { townId_orgId: { townId: town.id, orgId } },
    create: {
      townId: town.id,
      orgId,
      status: 'ACTIVE',
    },
    update: {
      status: 'ACTIVE',
    },
  });

  request.log.info({ orgId, townSlug, townId: town.id }, 'Stewardship activated');
}
