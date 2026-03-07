# Phase 09: Stripe Pricing - Research

**Researched:** 2026-03-07
**Domain:** Stripe Node.js SDK (v20.3.1), Next.js App Router server components, Fastify REST API
**Confidence:** HIGH

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| STRIPE-01 | Partner page prices fetched from Stripe (not hardcoded); graceful fallback if STRIPE_SECRET_KEY missing; checkout creation uses correct Stripe Price IDs | `stripe.prices.retrieve(priceId)` fetches live price data server-side; fallback to hardcoded values when key absent; existing `getPriceId()` in `src/lib/stripe.ts` resolves tier→price_id from env vars |
</phase_requirements>

---

## Summary

The Stripe integration is already substantially built. The backend (`src/lib/stripe.ts`, `src/routes/billing.ts`) has a complete billing system: singleton Stripe client, tier-to-price-ID mapping via env vars, checkout session creation, customer portal, and webhook handling. The partner page (`web/app/partner/page.tsx`) currently displays **hardcoded prices** ($99/month for Plus, $299/month for Pro) as static JSX strings with no live data.

Phase 9 requires making the partner page a Next.js server component that fetches real price objects from Stripe using `stripe.prices.retrieve(priceId)`. The env vars `STRIPE_PRICE_PLUS_MONTHLY` and `STRIPE_PRICE_PRO_MONTHLY` already hold the `price_xxx` IDs — these can be retrieved server-side using the same `STRIPE_SECRET_KEY` already used by the backend. The page must degrade gracefully (show hardcoded fallback amounts) when `STRIPE_SECRET_KEY` is absent.

The checkout flow itself (POST `/api/billing/checkout-session`) already uses the correct price IDs via `getPriceId()` in `src/lib/stripe.ts`. No backend changes are needed for checkout correctness — only the partner page display needs to pull live data.

**Primary recommendation:** Fetch prices directly in `partner/page.tsx` as a server component using `stripe.prices.retrieve()` with a try/catch fallback; do not add a new API route for this.

---

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| stripe (Node SDK) | 20.3.1 (installed) | Stripe API client | Already installed in `/Users/sabrinachandini/sabrinas-town/node_modules/stripe` — used by Fastify backend |
| Next.js App Router | (project standard) | Server components fetch Stripe data at request time | `partner/page.tsx` is already a server component (no `"use client"`) |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| TypeScript | project standard | Type-safe Stripe.Price usage | `Stripe.Price` type from `stripe` package covers `id`, `unit_amount`, `currency`, `nickname`, `recurring` |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Direct server-component fetch | New `/api/billing/prices` Fastify route | Adding a route adds complexity with no benefit — partner page is already a server component with access to env vars |
| `stripe.prices.retrieve()` per price | `stripe.prices.list()` | `retrieve()` is more precise when you already have the price IDs; `list()` returns all prices and requires filtering |

**Installation:** No new packages needed. `stripe` is already installed in the project root `node_modules`.

---

## Architecture Patterns

### Recommended Project Structure

The change is confined to one file:

```
web/app/partner/
└── page.tsx    # Add server-side Stripe fetch at top, pass prices to pricing section
```

Optionally (if Stripe client is needed in Next.js context in future):

```
web/lib/
└── stripe.ts   # Thin server-only client (if reuse needed elsewhere)
```

For this phase, inline the fetch directly in `partner/page.tsx` — no separate lib file needed.

### Pattern 1: Server Component Price Fetch with Fallback

**What:** In `partner/page.tsx`, fetch real prices from Stripe using the price IDs from env vars before rendering. Fall back to hardcoded values if `STRIPE_SECRET_KEY` is absent or the fetch fails.

**When to use:** Any server component that needs Stripe price data without a round-trip through an API route.

**Example:**
```typescript
// web/app/partner/page.tsx — server component, no "use client"
// Source: Stripe Node.js SDK v20.3.1, stripe.prices.retrieve()

import Stripe from 'stripe';

interface PriceData {
  id: string;
  unitAmount: number | null;    // cents, e.g. 9900 = $99.00
  currency: string;             // e.g. "usd"
  nickname: string | null;
}

const HARDCODED_FALLBACK = {
  PLUS: { id: '', unitAmount: 9900, currency: 'usd', nickname: null },
  PRO:  { id: '', unitAmount: 29900, currency: 'usd', nickname: null },
};

async function fetchStripePrices(): Promise<{
  plus: PriceData;
  pro: PriceData;
}> {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const plusId    = process.env.STRIPE_PRICE_PLUS_MONTHLY;
  const proId     = process.env.STRIPE_PRICE_PRO_MONTHLY;

  if (!secretKey || !plusId || !proId) {
    return HARDCODED_FALLBACK;
  }

  try {
    const stripe = new Stripe(secretKey, { apiVersion: '2025-04-30.basil' as any });
    const [plus, pro] = await Promise.all([
      stripe.prices.retrieve(plusId),
      stripe.prices.retrieve(proId),
    ]);
    return {
      plus: { id: plus.id, unitAmount: plus.unit_amount, currency: plus.currency, nickname: plus.nickname },
      pro:  { id: pro.id,  unitAmount: pro.unit_amount,  currency: pro.currency,  nickname: pro.nickname },
    };
  } catch {
    return HARDCODED_FALLBACK;
  }
}

export default async function PartnerPage() {
  const prices = await fetchStripePrices();
  const plusDisplay = prices.plus.unitAmount != null
    ? `$${Math.round(prices.plus.unitAmount / 100)}`
    : '$99';
  const proDisplay = prices.pro.unitAmount != null
    ? `$${Math.round(prices.pro.unitAmount / 100)}`
    : '$299';
  // ... pass plusDisplay, proDisplay into the pricing JSX
}
```

### Pattern 2: Checkout Price ID Verification (already implemented)

**What:** `src/lib/stripe.ts` `getPriceId()` resolves tier → env var → `price_xxx` ID. `src/routes/billing.ts` `POST /api/billing/checkout-session` already uses this correctly.

**When to use:** This pattern is already correct. No change needed. The checkout flow reads from env vars, not from hardcoded values.

### Anti-Patterns to Avoid

- **Do not import `src/lib/stripe.ts` into Next.js web pages.** That file is marked "Never import from Next.js server components" (line 2 of the file). Instantiate a fresh Stripe client locally in `web/app/partner/page.tsx`.
- **Do not add `"use client"` to `partner/page.tsx`.** The page must remain a server component so the Stripe fetch happens server-side (secret key never exposed to the browser).
- **Do not use `stripe.prices.list()` without filtering.** If the Stripe account has many prices, `list()` returns an unfiltered array. Use `retrieve(priceId)` with the known IDs from env vars.
- **Do not throw on missing env vars in a Next.js page.** A missing `STRIPE_SECRET_KEY` during `next build` or in preview environments must not crash the page — always fall back to hardcoded values.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Price formatting (cents → dollars) | Custom formatter | `Math.round(unit_amount / 100)` | Stripe returns integers in smallest currency unit; simple math suffices for USD |
| Stripe singleton in Next.js | Module-level `new Stripe()` cached in global | Create inside the async function per request | Next.js serverless functions don't share module scope across invocations; new instance per call is correct |
| API Key validation | Custom regex | Check `!!secretKey` + `secretKey.startsWith('sk_')` at most | Stripe SDK throws a clear error on bad keys — no need to replicate `requireStripeEnv()` logic in the page |

**Key insight:** The Stripe client instantiation cost is negligible (no network call on init). Creating a new instance per server-component render is safe on Vercel serverless.

---

## Common Pitfalls

### Pitfall 1: Importing the Fastify-side Stripe module in Next.js

**What goes wrong:** `src/lib/stripe.ts` exports a module-level `stripe` proxy that throws `Error: STRIPE_SECRET_KEY is not set` on import if the env var is missing. Importing it from a Next.js page triggers this at build time.
**Why it happens:** The file comment says "Never import this from Next.js server components" but it's easy to miss.
**How to avoid:** Create a local `new Stripe(key, ...)` inline in `partner/page.tsx` inside the async function, guarded by the `!secretKey` check.
**Warning signs:** `Error: STRIPE_SECRET_KEY is not set` during `next build`.

### Pitfall 2: STRIPE_SECRET_KEY exposed to client

**What goes wrong:** If `partner/page.tsx` were changed to `"use client"`, the Stripe secret key import from an env var would fail (only `NEXT_PUBLIC_*` vars reach the client bundle), and the pattern breaks entirely.
**Why it happens:** Conflating `"use client"` with server-only needs.
**How to avoid:** Keep `partner/page.tsx` as a server component (no `"use client"` directive). The file currently has none — don't add one.
**Warning signs:** `undefined` for `process.env.STRIPE_SECRET_KEY` at runtime in browser.

### Pitfall 3: Hardcoded `apiVersion` type casting

**What goes wrong:** The existing backend uses `{ apiVersion: '2025-04-30.basil' as any }`. This is intentional — the type definition may not yet include this version string. Omitting the version or using a wrong version causes Stripe to default to the account's API version, which may differ.
**Why it happens:** Stripe SDK's TypeScript types lag behind the actual API version strings.
**How to avoid:** Use the exact same apiVersion string already in `src/lib/stripe.ts` (line 44): `'2025-04-30.basil' as any`. This maintains consistency.
**Warning signs:** TypeScript error `Type '"2025-04-30.basil"' is not assignable to type...` — expected, suppress with `as any`.

### Pitfall 4: `next build` failing when Stripe env vars are absent

**What goes wrong:** During `next build` (CI, preview environments), `STRIPE_SECRET_KEY` may be absent. If `fetchStripePrices()` throws instead of returning fallback, the build fails.
**Why it happens:** Next.js static analysis may call the server component during build for pre-rendering.
**How to avoid:** The `try/catch` with `HARDCODED_FALLBACK` return ensures the page renders even without credentials. Confirmed pattern: check `!secretKey` first, return fallback immediately.
**Warning signs:** Build error referencing `stripe.prices.retrieve`.

### Pitfall 5: `unit_amount` is null for some price types

**What goes wrong:** `Stripe.Price.unit_amount` is typed as `number | null`. Custom pricing or tiered pricing can return null.
**Why it happens:** Stripe supports custom amounts where the buyer sets the price.
**How to avoid:** Always null-coalesce: `price.unit_amount != null ? price.unit_amount / 100 : fallbackAmount`.
**Warning signs:** `NaN` displayed in price UI.

---

## Code Examples

Verified patterns from installed Stripe SDK (v20.3.1):

### Retrieve a single price by ID
```typescript
// Source: /node_modules/stripe/cjs/resources/Prices.js — retrieve method
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil' as any,
});
const price = await stripe.prices.retrieve('price_xxx');
// price.unit_amount: number | null  (cents)
// price.currency: string            (e.g. 'usd')
// price.nickname: string | null
// price.id: string
```

### Parallel fetch with fallback pattern
```typescript
// Source: Stripe SDK + Next.js App Router server component pattern
async function fetchStripePrices() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const plusId    = process.env.STRIPE_PRICE_PLUS_MONTHLY;
  const proId     = process.env.STRIPE_PRICE_PRO_MONTHLY;

  if (!secretKey || !plusId || !proId) {
    return { plus: null, pro: null };  // caller uses hardcoded fallback
  }

  try {
    const stripe = new Stripe(secretKey, { apiVersion: '2025-04-30.basil' as any });
    const [plus, pro] = await Promise.all([
      stripe.prices.retrieve(plusId),
      stripe.prices.retrieve(proId),
    ]);
    return { plus, pro };
  } catch {
    return { plus: null, pro: null };
  }
}
```

### Format cents to display string
```typescript
// unitAmount is number | null (Stripe returns cents for USD)
function formatPrice(unitAmount: number | null, fallback: string): string {
  if (unitAmount == null) return fallback;
  return `$${Math.round(unitAmount / 100)}`;
}
// Usage: formatPrice(price.unit_amount, '$99')
```

### Checkout flow (already correct — no changes needed)
```typescript
// Source: src/routes/billing.ts lines 78-85 + src/lib/stripe.ts lines 66-76
// getPriceId(planTier) → reads STRIPE_PRICE_{TIER}_MONTHLY env var → returns 'price_xxx'
// stripe.checkout.sessions.create({ line_items: [{ price: priceId, quantity: 1 }] })
// This is already implemented correctly. Do not modify.
```

---

## State of the Art

| Old Approach | Current Approach | Impact |
|--------------|------------------|--------|
| Hardcoded price strings in JSX (`$99`, `$299`) | `stripe.prices.retrieve()` in server component | Prices update automatically when changed in Stripe Dashboard without a code deploy |
| Module-level Stripe client (risky in serverless) | Per-request instantiation in async server component | Safe for Vercel serverless — no shared state across invocations |

**Deprecated/outdated:**
- None in this domain. The Stripe Node SDK v20 is current and stable.

---

## Open Questions

1. **Basic tier pricing display**
   - What we know: Basic tier shows "Open" (not a dollar amount) in the current partner page — it is the open/free access tier.
   - What's unclear: The env var `STRIPE_PRICE_BASIC_MONTHLY` exists in `.env.example`, but the partner page UI treats Basic as "Open" with no price. Whether a Stripe Price object exists for Basic is unknown.
   - Recommendation: Do not fetch Basic tier price from Stripe. Keep the "Open" display as-is. Only fetch Plus and Pro prices.

2. **Stripe Price IDs in production**
   - What we know: Env vars are documented in `.env.example` as `price_...` placeholders. Production values are in `.env.production` (not readable during research).
   - What's unclear: Whether real `price_xxx` IDs have been created in the Stripe Dashboard.
   - Recommendation: The fallback pattern handles this gracefully. If IDs are not yet created, the page falls back to hardcoded amounts with no error.

---

## Validation Architecture

> Skipped — `workflow.nyquist_validation` is not set to `true` in `.planning/config.json`.

---

## Sources

### Primary (HIGH confidence)
- `/Users/sabrinachandini/sabrinas-town/node_modules/stripe/cjs/resources/Prices.js` — retrieve method confirmed, params: `(priceId: string) => Promise<Stripe.Price>`
- `/Users/sabrinachandini/sabrinas-town/node_modules/stripe/types/Prices.d.ts` — `Stripe.Price` type: `{ id, unit_amount: number | null, currency, nickname: string | null, recurring, ... }`
- `/Users/sabrinachandini/sabrinas-town/src/lib/stripe.ts` — existing Stripe client pattern, `apiVersion: '2025-04-30.basil'`, `getStripe()` singleton, `getPriceId()` tier mapping
- `/Users/sabrinachandini/sabrinas-town/src/routes/billing.ts` — existing checkout session creation using `getPriceId()` — already correct, no changes needed
- `/Users/sabrinachandini/sabrinas-town/web/app/partner/page.tsx` — current hardcoded prices: Plus `$99`, Pro `$299`; no Stripe fetch

### Secondary (MEDIUM confidence)
- Next.js App Router server component patterns — `async function` page components can call `await` directly; no hooks needed; server-only code safe
- Vercel serverless behavior — `vercel.json` routes `/api/*` to Fastify; Next.js server components run in Vercel's Node runtime, not the Fastify process

### Tertiary (LOW confidence)
- None — all findings verified from installed packages and project source

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — Stripe SDK v20.3.1 installed and inspected; all methods confirmed from source
- Architecture: HIGH — partner page is already a server component; pattern matches existing project conventions
- Pitfalls: HIGH — derived from actual code inspection of `src/lib/stripe.ts` (line 2 comment), type definitions, and Next.js constraints

**Research date:** 2026-03-07
**Valid until:** 2026-06-07 (Stripe SDK stable; Next.js App Router server component patterns stable)
