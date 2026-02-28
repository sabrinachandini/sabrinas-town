# Sabrina's Town

## What This Is

An interconnected American Revolution tourism network covering 75 towns. Serves a REST API with historical events, places, stories, people, and a knowledge graph of inter-town connections. Built for tourism organizations, educators, and history-curious visitors. Deployed on Vercel with a Supabase PostgreSQL database.

## Core Value

Every town in the network has enough real, verified content that a visitor can plan a meaningful trip — and discover connected towns they didn't know about.

## Requirements

### Validated

<!-- Shipped and confirmed valuable. -->

- ✓ 75-town network seeded with metadata, coordinates, summaries — v1.0
- ✓ Knowledge graph: 426 town links across 7 link types — v1.0
- ✓ Composite scoring system (7 dimensions, weighted) — v1.0
- ✓ Public API: town detail, rankings, compare, teacher modules, stories — v1.0
- ✓ Embed system with API keys and widget JS — v1.0
- ✓ Admin API: update deltas, score recomputation — v1.0
- ✓ Analytics tracking (page views, downloads, embeds) — v1.0
- ✓ 5 flagship towns fully built out (Lexington, Concord, Boston, Cambridge, Arlington) — v1.0
- ✓ 5 micro-rollout towns with places + events (Salem, Marblehead, Plymouth, Worcester, Springfield) — v1.1
- ✓ 181 MA places across 10 towns, 64+ events, 52 stories — v1.1
- ✓ Production deployed to Vercel + Supabase — v1.1

### Active

<!-- Current scope. Building toward these. -->

(New milestone — to be defined)

### Out of Scope

<!-- Explicit boundaries. Includes reasoning to prevent re-adding. -->

- Mobile app — Web API first, mobile later
- User accounts / login — Content-delivery API, not a user platform
- Real-time features — Static historical content, no live data needed

## Context

- **Stack**: TypeScript, Fastify 4.26, Prisma 5.10, PostgreSQL (Supabase), Zod, deployed on Vercel serverless
- **Data tiers**: Flagship towns (full content: events, stories, people, places, sources, routes) → Micro-rollout (places + events) → Stubs (metadata only)
- **Content voice**: Sabrina Bhattacharjya — calm, analytical, modern, no hype, no patriotic romanticism, no exclamation marks, label uncertainty
- **Verification system**: VERIFIED, ORAL_TRADITION, ANECDOTAL, UNVERIFIED
- **Scoring**: Historical (25%), Preservation (15%), Accessibility (10%), Interpretation (15%), Interconnection (15%), Stories (10%), Sources (10%)
- **Multi-tenant**: Organization model exists with STARTER/PRO/PREMIUM tiers (1 trial org seeded)
- **60 stub towns** remain across the network with only metadata — no events, places, stories, or people

## Constraints

- **No Prisma schema changes**: PlaceType, TownLinkType, DatePrecision enums are fixed
- **Writing voice**: All public-facing copy must follow Sabrina's voice guidelines
- **Historical accuracy**: All events and places must be historically defensible with real coordinates
- **Vercel serverless**: No long-running processes, cold-start budget matters

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Fastify over Express | Performance on serverless, schema validation | ✓ Good |
| Prisma ORM | Type safety, migration tooling | ✓ Good |
| 75-town network scope | Covers major Rev War geography without overreach | ✓ Good |
| Micro-rollout pattern (places + events only) | Eliminates empty states without flagship-level effort | ✓ Good |
| Supabase PostgreSQL | Free tier, managed, pooler for serverless | ✓ Good |
| Upsert-based seeding | Idempotent, safe to re-run | ✓ Good |

---
*Last updated: 2026-02-24 after v1.1 MA Core Cluster completion*
