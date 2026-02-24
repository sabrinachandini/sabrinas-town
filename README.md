# Sabrina's Town

> *History is for everyone.*

An agentic, interconnected network of the 75 most important American Revolution tourism towns. Designed to be licensable to tourism organizations, with a first-class teacher engine.

## Features

- **Interconnected Knowledge Graph**: Every town links to 5-8 others with explicit reasons
- **Multi-Tenant Licensing**: Organizations can embed branded content
- **Teacher Engine**: Lesson plans, primary sources, quizzes, handouts
- **Story Verification**: Content labeled Verified / Oral Tradition / Anecdotal / Unverified
- **Agentic Updates**: Automated ingestion with human review thresholds
- **Transparent Scoring**: Composite scores with detailed breakdowns

## Tech Stack

- **TypeScript** - Strict mode
- **Fastify** - High-performance API server
- **Prisma ORM** - Type-safe database access
- **PostgreSQL** - Primary database
- **Zod** - Request/response validation

## Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- pnpm or npm

### Setup

1. **Clone and install dependencies**

```bash
cd sabrinas-town
npm install
```

2. **Configure environment**

```bash
cp .env.example .env
# Edit .env with your database URL and admin token
```

Required environment variables:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/sabrinas_town?schema=public"
ADMIN_TOKEN="your-secure-admin-token-here"
PORT=3000
```

3. **Generate Prisma client and run migrations**

```bash
npm run generate
npm run migrate
```

4. **Seed the database**

```bash
npm run seed
```

This seeds:
- 10 themes
- 10 sources
- 7 towns (Lexington + 6 stubs)
- 7 people
- 6 events
- 5 stories
- 6 town links
- 1 route with 3 stops
- 1 organization

5. **Start the server**

```bash
npm run dev
```

Server runs at `http://localhost:3000`

## API Endpoints

### Public

```bash
# Get town by slug (includes events, stories, links, score)
curl http://localhost:3000/towns/lexington-ma

# Get teacher module
curl http://localhost:3000/towns/lexington-ma/teacher

# Get town stories
curl http://localhost:3000/towns/lexington-ma/stories

# Compare two towns
curl "http://localhost:3000/compare?townA=lexington-ma&townB=concord-ma"

# Get rankings
curl http://localhost:3000/rankings

# Record analytics event
curl -X POST http://localhost:3000/analytics \
  -H "Content-Type: application/json" \
  -d '{"townSlug":"lexington-ma","eventType":"PAGE_VIEW"}'
```

### Embed (requires API key)

```bash
# Get embeddable town data with branding
curl "http://localhost:3000/embed/town/lexington-ma?key=YOUR_EMBED_API_KEY"

# Get widget JavaScript
curl http://localhost:3000/embed/widget.js
```

### Admin (requires admin token)

```bash
# List pending update deltas
curl http://localhost:3000/admin/update-deltas \
  -H "X-Admin-Token: your-admin-token"

# Create update delta
curl -X POST http://localhost:3000/admin/update-deltas \
  -H "X-Admin-Token: your-admin-token" \
  -H "Content-Type: application/json" \
  -d '{
    "townId": "us-ma-lexington",
    "rawPayload": {"source": "manual"},
    "extracted": {
      "fieldChanges": [{"field": "tourismInfo.hours", "newValue": "9am-5pm"}],
      "summary": "Updated visitor hours"
    },
    "significanceScore": 20
  }'

# Apply update delta
curl -X POST http://localhost:3000/admin/update-deltas/DELTA_ID/apply \
  -H "X-Admin-Token: your-admin-token" \
  -H "Content-Type: application/json" \
  -d '{"publicNotes": "Hours updated per visitor center"}'

# Rollback update delta
curl -X POST http://localhost:3000/admin/update-deltas/DELTA_ID/rollback \
  -H "X-Admin-Token: your-admin-token" \
  -H "Content-Type: application/json" \
  -d '{"reason": "Information was incorrect"}'

# Recompute scores
curl -X POST http://localhost:3000/admin/recompute-scores \
  -H "X-Admin-Token: your-admin-token" \
  -H "Content-Type: application/json" \
  -d '{"townId": "us-ma-lexington"}'
```

## Project Structure

```
sabrinas-town/
├── prisma/
│   └── schema.prisma         # Database schema
├── src/
│   ├── server.ts             # Entry point
│   ├── app.ts                # Fastify app setup
│   ├── db/
│   │   └── client.ts         # Prisma client
│   ├── config/
│   │   ├── scoring.ts        # Scoring weights and config
│   │   └── sources.ts        # Source credibility rubric
│   ├── routes/
│   │   ├── index.ts          # Route registration
│   │   ├── towns.ts          # Public town endpoints
│   │   ├── embed.ts          # Embed endpoints
│   │   ├── admin.ts          # Admin endpoints
│   │   ├── compare.ts        # Town comparison
│   │   ├── rankings.ts       # Rankings endpoint
│   │   └── analytics.ts      # Analytics tracking
│   ├── services/
│   │   ├── scoring.ts        # Score computation
│   │   ├── townService.ts    # Town data fetching
│   │   ├── teacherService.ts # Teacher module generation
│   │   ├── compareService.ts # Town comparison logic
│   │   └── updateDeltaService.ts # Update management
│   ├── validators/
│   │   ├── common.ts         # Shared Zod schemas
│   │   ├── town.ts           # Town-related schemas
│   │   ├── analytics.ts      # Analytics schemas
│   │   └── admin.ts          # Admin schemas
│   ├── middleware/
│   │   └── auth.ts           # Authentication
│   ├── jobs/
│   │   ├── types.ts          # Pipeline types
│   │   └── pollSources.ts    # Agentic update scaffolding
│   ├── embed/
│   │   └── branding.ts       # Branding application
│   └── seed/
│       ├── index.ts          # Main seed script
│       ├── lexington.ts      # Lexington vertical slice
│       ├── themes.ts         # Theme data
│       ├── sources.ts        # Source data
│       └── linkedTowns.ts    # Connected town stubs
├── content/
│   ├── homepage.md           # Homepage copy
│   └── lexington/
│       ├── public.md         # Public page content
│       └── teacher.md        # Teacher module content
├── data/
│   └── site.json             # Site configuration
└── README.md
```

## Data Model

### Core Entities

- **Town**: 75 Revolutionary towns with summaries, scores, tourism info
- **Event**: Historical events linked to towns
- **Person**: Historical figures (verified and lesser-known)
- **Theme**: Cross-cutting themes (liberty, women, enslaved voices, etc.)
- **Route**: Historical routes connecting towns
- **Source**: Documentary evidence with credibility tiers
- **Story**: Narratives (historical and modern voices)

### Multi-Tenant

- **Organization**: Tourism buyers with branding and API keys
- **AnalyticsEvent**: Usage tracking

### Agentic Updates

- **UpdateDelta**: Detected changes awaiting review
- **ChangeLogEntry**: Transparent change history
- **ScoreSnapshot**: Score history over time

## Adding a New Town

1. Create a seed file following `src/seed/lexington.ts` pattern
2. Include:
   - Town record with all required fields
   - At least 6 events with significance weights
   - At least 6 people (include lesser-known voices)
   - At least 6 theme connections
   - At least 10 source references
   - At least 5 stories (historical + modern voices)
   - At least 6 town links with reasons
3. Update `src/seed/index.ts` to include the new town
4. Run `npm run seed`
5. Verify with `curl http://localhost:3000/towns/your-town-slug`

## Scoring System

Towns are scored across 7 dimensions:

| Category | Weight | Description |
|----------|--------|-------------|
| Historical | 25% | Event significance, notable people |
| Preservation | 15% | NPS designation, quality |
| Accessibility | 10% | Transit, walkability, ADA |
| Interpretation | 15% | Visitor center, tours, programs |
| Interconnection | 15% | Links to other towns, routes |
| Stories | 10% | Diversity and verification of narratives |
| Sources | 10% | Tier 1/2 source coverage |

Score tiers:
- **Exceptional** (90+): Top-tier Revolutionary significance
- **Excellent** (75-89): Major Revolutionary site
- **Notable** (60-74): Significant Revolutionary connection
- **Relevant** (40-59): Documented Revolutionary history
- **Emerging** (0-39): Early in documentation

## Verification Status

All stories carry verification labels:

- **Verified**: Strong documentary evidence
- **Oral Tradition**: Based on accounts passed down
- **Anecdotal**: Individual recollections
- **Unverified**: Included for completeness

## Source Credibility Tiers

- **Tier 1**: NPS, Smithsonian, LOC, peer-reviewed journals
- **Tier 2**: Historical societies, published historians
- **Tier 3**: Wikipedia, news articles (requires cross-reference)
- **TODO**: Not yet evaluated

## Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run migrate    # Run Prisma migrations
npm run seed       # Seed database
npm run validate   # Validate schema and seed data
npm run generate   # Generate Prisma client
npm run db:reset   # Reset database
npm run db:studio  # Open Prisma Studio
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| DATABASE_URL | Yes | PostgreSQL connection string |
| ADMIN_TOKEN | Yes | Token for admin API access |
| PORT | No | Server port (default: 3000) |
| HOST | No | Server host (default: 0.0.0.0) |
| NODE_ENV | No | Environment (development/production) |
| CORS_ORIGIN | No | CORS allowed origin |
| LOG_LEVEL | No | Logging level |
| SCORE_CONFIG_VERSION | No | Scoring config version |

## License

MIT

---

Built with care for the stories that shaped America.
