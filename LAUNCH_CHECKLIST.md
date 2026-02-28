# Launch Checklist

## Environment Variables Required

Set all of these in Vercel (or your hosting provider) before deploying:

| Variable | Where | Purpose |
|---|---|---|
| `DATABASE_URL` | Root + Web | Supabase pooled connection string |
| `DIRECT_URL` | Root + Web | Supabase direct connection (for migrations) |
| `ADMIN_TOKEN` | Root | Admin API authentication |
| `AUTH_SECRET` | Web | NextAuth session encryption (`npx auth secret`) |
| `STRIPE_SECRET_KEY` | Root | Stripe API key |
| `STRIPE_WEBHOOK_SECRET` | Root | Stripe webhook signature verification |
| `STRIPE_PRICE_BASIC_MONTHLY` | Root | Stripe price ID for Basic tier |
| `STRIPE_PRICE_PLUS_MONTHLY` | Root | Stripe price ID for Plus tier |
| `STRIPE_PRICE_PRO_MONTHLY` | Root | Stripe price ID for Pro tier |
| `BASE_URL` | Root | Public URL (e.g. `https://sabrinastown.com`) |
| `SENTRY_DSN` | Root + Web | Sentry error reporting DSN |
| `NEXT_PUBLIC_SENTRY_DSN` | Web | Sentry client-side DSN |
| `SENTRY_AUTH_TOKEN` | Web (build) | Sentry source map upload token (optional) |
| `ADMIN_EMAIL` | Web | Email address with /admin panel access |

## Database Migration

Run against the production database before the first deploy:

```bash
npx prisma migrate deploy
```

This uses `DIRECT_URL` and does not require a shadow database.

## Build

```bash
# Root (Fastify API)
npm run build

# Web (Next.js frontend)
cd web && npm run build
```

Verify:
- No ECONNREFUSED or "fetch failed" errors in build output
- `/towns` and `/teach/massachusetts` show as `f` (dynamic), not `o` (static)

## Smoke Tests

After deploy, run against production URLs:

```bash
API_URL=https://sabrinastown.com/api WEB_URL=https://sabrinastown.com npx tsx src/scripts/smokeTest.ts
```

All tests should pass or show clear skips for auth-only endpoints.

## Stripe Webhook

1. In Stripe Dashboard, create a webhook endpoint pointing to:
   `https://YOUR_DOMAIN/api/api/billing/webhook`
2. Subscribe to events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`
3. Copy the webhook signing secret to `STRIPE_WEBHOOK_SECRET`

## Rollback

Vercel supports instant rollback via the dashboard:
1. Go to Vercel > Project > Deployments
2. Find the previous working deployment
3. Click "..." > "Promote to Production"

## First 48 Hours

- [ ] Check Sentry for new errors (expect zero on healthy launch)
- [ ] Check Vercel logs for 5xx responses
- [ ] Verify Stripe webhook is receiving events (Stripe Dashboard > Webhooks > Recent deliveries)
- [ ] Test partner inquiry form end-to-end
- [ ] Verify admin inbox shows new inquiries
- [ ] Confirm teacher modules load for at least 3 towns
- [ ] Check that /terms and /privacy render correctly
