// Minimal Stripe smoke test — validates env + creates a test checkout session
import 'dotenv/config';
import Stripe from 'stripe';

const REQUIRED_VARS = [
  'STRIPE_SECRET_KEY',
  'STRIPE_PRICE_BASIC_MONTHLY',
  'STRIPE_PRICE_PLUS_MONTHLY',
  'STRIPE_PRICE_PRO_MONTHLY',
  'BASE_URL',
] as const;

// 1. Env presence check (booleans only — no values printed)
console.log('\n=== ENV CHECK ===');
for (const key of REQUIRED_VARS) {
  const val = process.env[key];
  console.log(`  ${key}: present=${!!val}`);
}
console.log(`  STRIPE_WEBHOOK_SECRET: present=${!!process.env.STRIPE_WEBHOOK_SECRET}`);

// 2. Prefix checks
const sk = process.env.STRIPE_SECRET_KEY || '';
const priceBasic = process.env.STRIPE_PRICE_BASIC_MONTHLY || '';
console.log(`\n=== PREFIX CHECK ===`);
console.log(`  STRIPE_SECRET_KEY starts with sk_test_: ${sk.startsWith('sk_test_')}`);
console.log(`  STRIPE_PRICE_BASIC_MONTHLY starts with price_: ${priceBasic.startsWith('price_')}`);

// 3. Abort if missing
const missing = REQUIRED_VARS.filter((k) => !process.env[k]);
if (missing.length > 0) {
  console.error(`\nMISSING ENV VARS: ${missing.join(', ')}`);
  process.exit(1);
}

// 4. Create Stripe client and attempt a checkout session
const stripe = new Stripe(sk, { apiVersion: '2025-04-30.basil' as any });

async function main() {
  console.log(`\n=== STRIPE SMOKE TEST ===`);
  console.log(`  Creating checkout session with price: ${priceBasic}`);
  console.log(`  Base URL: ${process.env.BASE_URL}`);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceBasic, quantity: 1 }],
      success_url: `${process.env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/cancel`,
      metadata: { test: 'smoke' },
    });

    console.log(`\n  SUCCESS`);
    console.log(`  session.id: ${session.id}`);
    console.log(`  session.url: ${session.url}`);
  } catch (err: any) {
    console.error(`\n  STRIPE ERROR`);
    console.error(`  type: ${err.type}`);
    console.error(`  message: ${err.message}`);
    console.error(`  statusCode: ${err.statusCode}`);
    console.error(`  requestId: ${err.requestId || err.raw?.requestId || 'none'}`);
    console.error(`\n  Next step: Search this requestId in Stripe Dashboard → Developers → Logs (TEST mode)`);
    process.exit(1);
  }
}

main();
