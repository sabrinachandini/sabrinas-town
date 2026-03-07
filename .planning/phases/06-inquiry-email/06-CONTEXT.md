# Phase 6: Inquiry Email — Context

**Gathered:** 2026-03-06
**Status:** Ready for planning
**Source:** /gsd:discuss-phase

<domain>
## Phase Boundary

Add Resend integration to the existing partner inquiry endpoint so every new inquiry triggers an email notification to sabrina@lexington250.com. No new UI. No changes to InquiryForm.tsx or the admin dashboard. Only the Fastify backend route changes.

</domain>

<decisions>
## Implementation Decisions

### Where email is sent from
- Resend SDK lives in the **Fastify backend** (`src/routes/partnerInquire.ts`)
- Resend call happens inside the existing route, right after the DB insert
- No new Next.js API route needed — Fastify remains the single source of truth for this operation

### Environment configuration
- `RESEND_API_KEY` env var required in Fastify backend
- Recipient address (`sabrina@lexington250.com`) is **hard-coded as a constant** in the route — not env-configurable
- Both `RESEND_API_KEY` and the hard-coded recipient must be documented in `.env.example`

### Email format
- **Plain text only** — no HTML templates, no styling
- Fields included: name, email, title, organization, phone, message, town (if provided)
- Omit fields that are null/empty from the body (don't show blank lines)
- Subject line format: `New Partner Inquiry — {name}` (or `New Partner Inquiry — {name} ({town})` if town present)

### Failure behavior
- Email call happens **after** DB insert — inquiry is always saved regardless of email outcome
- If Resend throws: log error server-side, still return 201 to the form
- Response includes `email_sent: boolean` field so failures are visible in API responses without surfacing to the user
- Frontend `InquiryForm.tsx` shows success regardless of `email_sent` value (no change needed to form)

### Confirmation to inquirer
- **Internal notification only** — no auto-reply to the person who submitted
- The form's existing success state ("We review every inquiry personally. You'll hear from us soon.") is sufficient

### Claude's Discretion
- Resend `from` address (must be a verified domain sender — Claude picks appropriate value)
- Error log format and severity level
- Whether to install `resend` package in root `package.json` or backend workspace

</decisions>

<specifics>
## Specific References

**Existing route to modify:** `src/routes/partnerInquire.ts`
- POST `/api/partner/inquire`
- Already saves `PartnerInquiry` to DB and handles honeypot
- Add Resend call after `prisma.partnerInquiry.create()` succeeds

**Existing form (no changes needed):** `web/app/partner/inquire/InquiryForm.tsx`
- POSTs to `${API_URL}/api/partner/inquire`
- Already handles `data.success` and `data.error` — no changes for `email_sent` flag

**No email library currently installed** — `resend` package must be added

**Env file to update:** `.env.example` at project root (document `RESEND_API_KEY`)

</specifics>

<deferred>
## Deferred Ideas

- Confirmation/auto-reply email to the submitter — out of scope for this phase
- HTML email templates — plain text chosen for simplicity
- `INQUIRY_TO_EMAIL` env var (configurable recipient) — recipient is hard-coded for now
- Email on status change (e.g. when admin marks inquiry as RESPONDED) — future phase

</deferred>

---

*Phase: 06-inquiry-email*
*Context gathered: 2026-03-06 via /gsd:discuss-phase*
