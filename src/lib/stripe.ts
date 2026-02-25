// Stripe client + tier/price mapping for the Fastify API side.
// Never import this from Next.js server components — use API calls instead.

import Stripe from 'stripe';

// ---------------------------------------------------------------------------
// ENV validation — call once at startup
// ---------------------------------------------------------------------------
const REQUIRED_STRIPE_VARS = [
  'STRIPE_SECRET_KEY',
  'STRIPE_WEBHOOK_SECRET',
  'STRIPE_PRICE_BASIC_MONTHLY',
  'STRIPE_PRICE_PLUS_MONTHLY',
  'STRIPE_PRICE_PRO_MONTHLY',
  'BASE_URL',
] as const;

export function requireStripeEnv(): void {
  const missing = REQUIRED_STRIPE_VARS.filter((k) => !process.env[k]);
  if (missing.length > 0) {
    throw new Error(`Missing required Stripe env vars: ${missing.join(', ')}`);
  }

  const sk = process.env.STRIPE_SECRET_KEY!;
  if (!sk.startsWith('sk_test_') && !sk.startsWith('sk_live_')) {
    throw new Error('STRIPE_SECRET_KEY must start with sk_test_ or sk_live_');
  }

  for (const key of ['STRIPE_PRICE_BASIC_MONTHLY', 'STRIPE_PRICE_PLUS_MONTHLY', 'STRIPE_PRICE_PRO_MONTHLY'] as const) {
    if (!process.env[key]!.startsWith('price_')) {
      throw new Error(`${key} must start with "price_", got: ${process.env[key]!.slice(0, 10)}...`);
    }
  }
}

// ---------------------------------------------------------------------------
// Stripe client singleton
// ---------------------------------------------------------------------------
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-04-30.basil' as any,
});

// ---------------------------------------------------------------------------
// Plan tier ↔ Price ID mapping
// ---------------------------------------------------------------------------
type BillingPlanTier = 'BASIC' | 'PLUS' | 'PRO';

const TIER_TO_PRICE_ENV: Record<BillingPlanTier, string> = {
  BASIC: 'STRIPE_PRICE_BASIC_MONTHLY',
  PLUS: 'STRIPE_PRICE_PLUS_MONTHLY',
  PRO: 'STRIPE_PRICE_PRO_MONTHLY',
};

export function getPriceId(planTier: string): string {
  const envKey = TIER_TO_PRICE_ENV[planTier as BillingPlanTier];
  if (!envKey) {
    throw new Error(`Unknown plan tier: "${planTier}". Must be BASIC, PLUS, or PRO.`);
  }
  const priceId = process.env[envKey];
  if (!priceId || !priceId.startsWith('price_')) {
    throw new Error(`Price ID for ${planTier} is missing or invalid (env: ${envKey})`);
  }
  return priceId;
}

export function planTierFromPriceId(priceId: string): BillingPlanTier | null {
  for (const [tier, envKey] of Object.entries(TIER_TO_PRICE_ENV)) {
    if (process.env[envKey] === priceId) {
      return tier as BillingPlanTier;
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// Safe error logging (never logs secrets)
// ---------------------------------------------------------------------------
export function logStripeError(method: string, err: any): void {
  console.error(`[stripe] ${method} failed:`, {
    type: err.type,
    message: err.message,
    statusCode: err.statusCode,
    requestId: err.requestId || err.raw?.requestId || 'none',
    hint: 'Search requestId in Stripe Dashboard → Developers → Logs (TEST mode)',
  });
}
