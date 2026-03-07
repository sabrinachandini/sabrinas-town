# Phase 6: Inquiry Email - Research

**Researched:** 2026-03-06
**Domain:** Resend SDK — transactional email from Fastify/Node.js backend
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Where email is sent from**
- Resend SDK lives in the **Fastify backend** (`src/routes/partnerInquire.ts`)
- Resend call happens inside the existing route, right after the DB insert
- No new Next.js API route needed — Fastify remains the single source of truth

**Environment configuration**
- `RESEND_API_KEY` env var required in Fastify backend
- Recipient address (`sabrina@lexington250.com`) is **hard-coded as a constant** in the route — not env-configurable
- Both `RESEND_API_KEY` and the hard-coded recipient must be documented in `.env.example`

**Email format**
- **Plain text only** — no HTML templates, no styling
- Fields included: name, email, title, organization, phone, message, town (if provided)
- Omit fields that are null/empty from the body (don't show blank lines)
- Subject line: `New Partner Inquiry — {name}` or `New Partner Inquiry — {name} ({town})` if town present

**Failure behavior**
- Email call happens **after** DB insert — inquiry is always saved regardless of email outcome
- If Resend throws: log error server-side, still return 201 to the form
- Response includes `email_sent: boolean` field so failures are visible in API responses without surfacing to the user
- Frontend `InquiryForm.tsx` shows success regardless of `email_sent` value (no change needed to form)

**Confirmation to inquirer**
- Internal notification only — no auto-reply to the person who submitted

### Claude's Discretion

- Resend `from` address (must be a verified domain sender — Claude picks appropriate value)
- Error log format and severity level
- Whether to install `resend` package in root `package.json` or backend workspace

### Deferred Ideas (OUT OF SCOPE)

- Confirmation/auto-reply email to the submitter
- HTML email templates
- `INQUIRY_TO_EMAIL` env var (configurable recipient)
- Email on status change (e.g. when admin marks inquiry as RESPONDED)
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| EMAIL-01 | Partner inquiry form submissions are emailed to sabrina@lexington250.com via Resend | Resend SDK `resend.emails.send()` with `text` body; installed in root package.json; called after `prisma.partnerInquiry.create()` succeeds |
</phase_requirements>

---

## Summary

Phase 6 is a focused, single-file change: add the Resend SDK to the Fastify backend and call `resend.emails.send()` inside the existing `POST /api/partner/inquire` route immediately after the DB insert succeeds. The existing route already has the full inquiry payload in scope, handles errors with `request.log.error`, and returns a structured JSON response — all patterns that map cleanly onto the Resend integration.

The Resend Node.js SDK (`resend` package, v6.9.3) provides a `{ data, error }` destructured API that does not throw exceptions. This aligns well with the required failure behavior: check `error`, log it, and continue to return 201. The `email_sent: boolean` field on the response body is the only shape change to the route's return value.

The one Claude's-discretion item requiring a decision is the `from` address. Production sends require a verified domain in Resend. The appropriate choice is `noreply@lexington250.com` (matching the recipient's domain), but this requires lexington250.com to be verified in the Resend dashboard before deployment. For initial development, `onboarding@resend.dev` works without verification but is test-only.

**Primary recommendation:** Install `resend` in the root `package.json`, instantiate once at module level in `partnerInquire.ts`, call after DB insert, wrap in try/catch (not the `{ data, error }` pattern) to match existing Fastify error-handling conventions in this codebase.

---

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| resend | ^3.x or latest (6.9.3) | Transactional email API | Official Resend SDK; first-party TypeScript types; minimal surface area; `{ data, error }` API avoids try/catch for SDK errors |

### Supporting

No additional libraries needed. The existing stack (Fastify, zod, pino logger, dotenv) already handles all supporting concerns.

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| resend SDK | nodemailer + SMTP | Resend is simpler (no SMTP config); nodemailer only makes sense if SMTP server already provisioned |
| resend SDK | fetch to Resend REST API | SDK provides TypeScript types and handles auth headers; raw fetch has no advantage here |

**Installation:**
```bash
npm install resend
```

Run from `/Users/sabrinachandini/sabrinas-town` (root), adding to root `package.json` dependencies. The Fastify backend lives in `src/` under the root — there is no separate backend `package.json`.

---

## Architecture Patterns

### Existing Route Structure to Follow

`src/routes/partnerInquire.ts` current flow:
1. Parse and validate body with Zod
2. Honeypot check — return early silently if triggered
3. Resolve `townId` from `townSlug` if provided
4. `try { prisma.partnerInquiry.create() }` — save to DB
5. `request.log.info(...)` — log success
6. Return 201

The Resend call inserts at step 5.5, after the log and before the return.

### Pattern 1: Resend instantiation at module level

**What:** Create the `Resend` instance once when the module loads, not per-request.
**When to use:** Always — avoids re-instantiating the HTTP client on every request.
**Example:**
```typescript
// Source: https://resend.com/docs/send-with-nodejs
import { Resend } from 'resend';

const INQUIRY_TO = 'sabrina@lexington250.com';
const resend = new Resend(process.env.RESEND_API_KEY);
```

### Pattern 2: Fire-and-forget with logged failure

**What:** Await the Resend call but catch errors so the route always returns 201.
**When to use:** When email is supplementary (inquiry already saved to DB).
**Example:**
```typescript
// Source: pattern based on https://resend.com/docs/send-with-nodejs + existing codebase conventions
let emailSent = false;
try {
  const { error } = await resend.emails.send({
    from: 'noreply@lexington250.com',
    to: [INQUIRY_TO],
    subject: townSlug
      ? `New Partner Inquiry — ${name} (${townSlug})`
      : `New Partner Inquiry — ${name}`,
    text: buildEmailBody({ name, email, title, organization, phone, message, townSlug }),
  });
  if (error) {
    request.log.warn({ error }, 'Resend returned error for partner inquiry');
  } else {
    emailSent = true;
  }
} catch (emailError) {
  request.log.error(emailError, 'Resend call threw for partner inquiry');
}

return reply.status(201).send({
  success: true,
  data: { id: inquiry.id },
  email_sent: emailSent,
  meta: { timestamp: new Date().toISOString() },
});
```

### Pattern 3: Building plain text body with omitted empty fields

**What:** Construct the text body conditionally, skipping blank fields.
**When to use:** Always for plain text emails with optional fields.
**Example:**
```typescript
function buildEmailBody(fields: {
  name: string;
  email: string;
  title?: string | null;
  organization?: string | null;
  phone?: string | null;
  message?: string | null;
  townSlug?: string | null;
}): string {
  const lines: string[] = [];
  lines.push(`Name: ${fields.name}`);
  lines.push(`Email: ${fields.email}`);
  if (fields.title)        lines.push(`Title: ${fields.title}`);
  if (fields.organization) lines.push(`Organization: ${fields.organization}`);
  if (fields.phone)        lines.push(`Phone: ${fields.phone}`);
  if (fields.townSlug)     lines.push(`Town: ${fields.townSlug}`);
  if (fields.message)      lines.push(`\nMessage:\n${fields.message}`);
  return lines.join('\n');
}
```

### Anti-Patterns to Avoid

- **Creating `new Resend()` inside the request handler:** Adds latency and wastes memory on every POST.
- **Using `{ data, error }` pattern without a wrapping try/catch:** The SDK docs say it doesn't throw, but network failures can still throw — the codebase uses `request.log.error` so a try/catch wrapping the whole send call is safer and consistent.
- **Awaiting email send before DB insert:** Email could fail silently and inquiry would never be saved.
- **Branching on `email_sent` in the frontend:** CONTEXT.md explicitly locks this out — frontend always shows success.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Email delivery | Custom SMTP integration or fetch to raw REST | `resend` npm package | Handles auth headers, retries, TypeScript types, error object vs exception distinction |
| Email body templating | Handlebars/Mustache for a 7-field plain text email | Inline string concatenation / array join | Plain text is locked in CONTEXT.md; a template engine adds zero value for this surface area |

**Key insight:** This is a trivial email notification (7 optional fields, plain text). Over-engineering it with templating, queueing, or retry logic would contradict the CONTEXT.md simplicity decision.

---

## Common Pitfalls

### Pitfall 1: `from` address not verified in Resend dashboard

**What goes wrong:** Resend returns an error like `"The gmail.com domain is not verified"` or similar; every inquiry email fails silently.
**Why it happens:** Resend requires domain verification for production sends. `onboarding@resend.dev` works for test but is blocked for recipients other than the account owner.
**How to avoid:** Verify `lexington250.com` in the Resend dashboard before deploying. Use `noreply@lexington250.com` as the `from`. Document this prerequisite in the implementation plan.
**Warning signs:** `email_sent: false` on every 201 response in production.

### Pitfall 2: `RESEND_API_KEY` missing at startup causes runtime crash on first send

**What goes wrong:** `new Resend(undefined)` instantiates silently, but the first `emails.send()` call returns a 401/auth error rather than a startup crash.
**Why it happens:** The SDK does not throw at construction time for a missing key.
**How to avoid:** The env check at startup in `app.ts` already logs missing Stripe keys. Add a similar console log for `RESEND_API_KEY`. Or simply ensure `.env.example` is well-documented so deployment doesn't omit it.
**Warning signs:** `email_sent: false` immediately after deployment with auth error in logs.

### Pitfall 3: TypeScript `module: NodeNext` requires `.js` extensions on imports

**What goes wrong:** Import of `resend` package works fine (`import { Resend } from 'resend'` — npm package, no extension needed). But any local helper file extracted for the body builder requires `.js` extension on the import path even for `.ts` source files.
**Why it happens:** `tsconfig.json` uses `"module": "NodeNext"` and `"moduleResolution": "NodeNext"`.
**How to avoid:** If `buildEmailBody` stays in `partnerInquire.ts` (same file), no import issue. If extracted to a helper, use `import { buildEmailBody } from './emailHelpers.js'`.
**Warning signs:** TypeScript error `Cannot find module './emailHelpers'`.

### Pitfall 4: Resend `{ data, error }` pattern vs. throwing

**What goes wrong:** Developer assumes no try/catch needed because "SDK doesn't throw." Network errors (DNS failure, timeout) still throw at the fetch level underneath.
**Why it happens:** The Resend docs only show the `{ data, error }` pattern — it handles API-level errors, not network-level errors.
**How to avoid:** Always wrap `resend.emails.send()` in a try/catch. Check `error` inside the try block. Log at `warn` for API errors (Resend accepted the request but returned an error object), log at `error` for thrown exceptions.

---

## Code Examples

### Complete integration pattern for partnerInquire.ts

```typescript
// Source: https://resend.com/docs/send-with-nodejs (SDK usage)
//         + existing partnerInquire.ts patterns
import { Resend } from 'resend';

const INQUIRY_TO = 'sabrina@lexington250.com';
const resend = new Resend(process.env.RESEND_API_KEY);

// Inside route handler, after prisma.partnerInquiry.create() succeeds:

request.log.info({ inquiryId: inquiry.id, email, townSlug }, 'Partner inquiry submitted');

let emailSent = false;
try {
  const { error: emailError } = await resend.emails.send({
    from: 'noreply@lexington250.com',
    to: [INQUIRY_TO],
    subject: townSlug
      ? `New Partner Inquiry — ${name} (${townSlug})`
      : `New Partner Inquiry — ${name}`,
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
```

### buildPlainTextBody helper

```typescript
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
```

### .env.example additions

```bash
# Resend (partner inquiry email notifications)
RESEND_API_KEY="re_..."
# Recipient is hard-coded to sabrina@lexington250.com in src/routes/partnerInquire.ts
# From address: noreply@lexington250.com (must be verified in Resend dashboard)
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| nodemailer + SMTP config | Resend SDK (HTTP API) | 2022-2023 | No SMTP server needed; API key auth |
| HTML templates required | `text` field sufficient | Always supported | Plain text works without React Email or Handlebars |

**Deprecated/outdated:**
- `onboarding@resend.dev` as production from address: test-only, blocked for sending to arbitrary recipients in production.

---

## Open Questions

1. **Is `lexington250.com` already verified in the Resend account?**
   - What we know: The recipient is `sabrina@lexington250.com`, so the domain exists.
   - What's unclear: Whether Resend domain verification has been completed for `lexington250.com`.
   - Recommendation: Planner should add a pre-implementation verification step: confirm domain is verified in Resend dashboard, or note that `onboarding@resend.dev` must be used until it is.

2. **Where to place `RESEND_API_KEY` env var in `.env.example`**
   - What we know: The file uses section headers (Database, Server, Admin, Stripe, Sentry).
   - What's unclear: Whether a new "Email" section should be added or the key appended after Sentry.
   - Recommendation: Add a `# Email (partner inquiry notifications)` section after the Sentry block.

---

## Sources

### Primary (HIGH confidence)
- [Resend Node.js docs](https://resend.com/docs/send-with-nodejs) — constructor, `emails.send()` API, `{ data, error }` pattern, `text` field support
- `src/routes/partnerInquire.ts` — existing route structure, Zod schema, Fastify logging conventions, error handling patterns
- `src/app.ts` — confirms `registerPartnerInquireRoutes` registration, confirms `dotenv/config` loaded via `src/server.ts`
- `tsconfig.json` — `"module": "NodeNext"` constraint for import extensions
- `package.json` (root) — no `resend` installed; root is where backend dependencies live (no separate workspace)
- `.env.example` — existing env var documentation format and sections

### Secondary (MEDIUM confidence)
- [Resend npm search result](https://www.npmjs.com/package/resend) — version 6.9.3, actively maintained

### Tertiary (LOW confidence)
- Domain verification requirement: confirmed via WebSearch cross-referenced with Resend docs structure; specific dashboard steps not verified.

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — Resend SDK confirmed via official docs, npm registry, version verified
- Architecture: HIGH — existing route read directly, integration pattern derived from official docs
- Pitfalls: HIGH for items 1-3 (confirmed via docs + tsconfig); MEDIUM for item 4 (network-level throw confirmed by Node.js fetch behavior generally, not Resend-specific docs)

**Research date:** 2026-03-06
**Valid until:** 2026-04-06 (Resend SDK stable; unlikely to change in 30 days)
