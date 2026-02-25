-- CreateEnum
CREATE TYPE "OrgRole" AS ENUM ('ADMIN', 'ORG_OWNER', 'ORG_EDITOR', 'ORG_VIEWER');

-- CreateEnum
CREATE TYPE "StewardshipStatus" AS ENUM ('ACTIVE', 'PENDING', 'INACTIVE');

-- CreateEnum
CREATE TYPE "WorksheetType" AS ENUM ('TIMELINE', 'GRAPHIC_ORGANIZER', 'WORKSHEET', 'READING', 'QUIZ');

-- CreateEnum
CREATE TYPE "DatePrecision" AS ENUM ('DAY', 'MONTH', 'YEAR', 'RANGE', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "VerificationStatus" AS ENUM ('VERIFIED', 'ORAL_TRADITION', 'ANECDOTAL', 'UNVERIFIED');

-- CreateEnum
CREATE TYPE "StoryType" AS ENUM ('HISTORICAL_VOICE', 'MODERN_VOICE');

-- CreateEnum
CREATE TYPE "SourceType" AS ENUM ('PRIMARY', 'SECONDARY', 'TERTIARY', 'DATASET', 'INSTITUTIONAL', 'NEWS');

-- CreateEnum
CREATE TYPE "CredibilityTier" AS ENUM ('TIER1', 'TIER2', 'TIER3', 'TODO');

-- CreateEnum
CREATE TYPE "TownLinkType" AS ENUM ('SHARED_EVENT', 'SHARED_PERSON', 'SHARED_THEME', 'ROUTE', 'COMPARISON', 'GEOGRAPHIC_PROXIMITY', 'OTHER');

-- CreateEnum
CREATE TYPE "PlanTier" AS ENUM ('STARTER', 'BASIC', 'PLUS', 'PRO', 'PREMIUM');

-- CreateEnum
CREATE TYPE "OrgStatus" AS ENUM ('ACTIVE', 'TRIAL', 'PAST_DUE', 'CANCELED');

-- CreateEnum
CREATE TYPE "AnalyticsEventType" AS ENUM ('PAGE_VIEW', 'ITINERARY_CLICK', 'TEACHER_DOWNLOAD', 'COMPARE_VIEW', 'EMBED_VIEW', 'FAQ_EXPAND', 'STORY_LISTEN', 'ROUTE_VIEW');

-- CreateEnum
CREATE TYPE "UpdateDeltaStatus" AS ENUM ('PENDING', 'APPLIED', 'REJECTED', 'ROLLED_BACK');

-- CreateEnum
CREATE TYPE "PlaceType" AS ENUM ('BATTLEFIELD', 'HISTORIC_HOUSE', 'MONUMENT', 'MUSEUM', 'CEMETERY', 'CHURCH', 'GOVERNMENT', 'TAVERN', 'LANDMARK', 'TRAIL');

-- CreateTable
CREATE TABLE "Town" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'USA',
    "slug" TEXT NOT NULL,
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "heroSummary40" VARCHAR(60) NOT NULL,
    "execSummary150" VARCHAR(200) NOT NULL,
    "whyMatters" TEXT NOT NULL,
    "tourismInfo" JSONB,
    "compositeScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "scoreBreakdown" JSONB,
    "scoreConfigVersion" TEXT NOT NULL DEFAULT '1.0.0',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastUpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Town_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "townId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "datePrecision" "DatePrecision" NOT NULL DEFAULT 'UNKNOWN',
    "summary" TEXT NOT NULL,
    "significanceWeight" INTEGER NOT NULL DEFAULT 50,
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "roles" TEXT[],
    "bioShort" VARCHAR(300) NOT NULL,
    "bioLong" TEXT,
    "birthYear" INTEGER,
    "deathYear" INTEGER,
    "verificationStatus" "VerificationStatus" NOT NULL DEFAULT 'VERIFIED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Theme" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Theme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Route" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "totalMiles" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Route_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RouteStop" (
    "id" TEXT NOT NULL,
    "routeId" TEXT NOT NULL,
    "townId" TEXT NOT NULL,
    "stopOrder" INTEGER NOT NULL,
    "notes" TEXT,
    "arrivalTime" TEXT,

    CONSTRAINT "RouteStop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Place" (
    "id" TEXT NOT NULL,
    "townId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "placeType" "PlaceType" NOT NULL,
    "description" TEXT NOT NULL,
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "address" TEXT,
    "hours" TEXT,
    "admission" TEXT,
    "website" TEXT,
    "phone" TEXT,
    "accessibilityNotes" TEXT,
    "parkingNotes" TEXT,
    "amenities" TEXT[],
    "historicalNote" TEXT,
    "images" JSONB,
    "displayOrder" INTEGER NOT NULL DEFAULT 100,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Place_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Source" (
    "id" TEXT NOT NULL,
    "type" "SourceType" NOT NULL,
    "title" TEXT NOT NULL,
    "publisherOrHolder" TEXT NOT NULL,
    "url" TEXT,
    "publicationDate" TIMESTAMP(3),
    "credibilityTier" "CredibilityTier" NOT NULL DEFAULT 'TODO',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Source_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Story" (
    "id" TEXT NOT NULL,
    "townId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "storyType" "StoryType" NOT NULL,
    "subjectPersonId" TEXT,
    "narratorName" TEXT,
    "narratorRole" TEXT,
    "verificationStatus" "VerificationStatus" NOT NULL,
    "audioScript" TEXT,
    "textVersion" TEXT NOT NULL,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Story_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TownLink" (
    "id" TEXT NOT NULL,
    "fromTownId" TEXT NOT NULL,
    "toTownId" TEXT NOT NULL,
    "linkType" "TownLinkType" NOT NULL,
    "reason" TEXT NOT NULL,
    "weight" INTEGER NOT NULL DEFAULT 50,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TownLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventPerson" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "roleInEvent" TEXT,

    CONSTRAINT "EventPerson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventTheme" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "themeId" TEXT NOT NULL,

    CONSTRAINT "EventTheme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TownTheme" (
    "id" TEXT NOT NULL,
    "townId" TEXT NOT NULL,
    "themeId" TEXT NOT NULL,
    "relevanceNote" TEXT,

    CONSTRAINT "TownTheme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TownPerson" (
    "id" TEXT NOT NULL,
    "townId" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "connectionNote" TEXT,

    CONSTRAINT "TownPerson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoryTheme" (
    "id" TEXT NOT NULL,
    "storyId" TEXT NOT NULL,
    "themeId" TEXT NOT NULL,

    CONSTRAINT "StoryTheme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventTown" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "townId" TEXT NOT NULL,
    "role" TEXT,

    CONSTRAINT "EventTown_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SourceTown" (
    "id" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "townId" TEXT NOT NULL,

    CONSTRAINT "SourceTown_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SourceEvent" (
    "id" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,

    CONSTRAINT "SourceEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SourceStory" (
    "id" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "storyId" TEXT NOT NULL,

    CONSTRAINT "SourceStory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SourcePerson" (
    "id" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "personId" TEXT NOT NULL,

    CONSTRAINT "SourcePerson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "passwordHash" TEXT,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "OrgUser" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" "OrgRole" NOT NULL DEFAULT 'ORG_VIEWER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OrgUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "townId" TEXT,
    "name" TEXT NOT NULL,
    "planTier" "PlanTier" NOT NULL DEFAULT 'STARTER',
    "status" "OrgStatus" NOT NULL DEFAULT 'TRIAL',
    "embedApiKey" TEXT,
    "stripeCustomerId" TEXT,
    "brandingConfig" JSONB,
    "contactEmail" TEXT,
    "contactName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrgSubscription" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "planTier" "PlanTier" NOT NULL,
    "stripeCustomerId" TEXT NOT NULL,
    "stripeSubscriptionId" TEXT NOT NULL,
    "stripePriceId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "currentPeriodEnd" TIMESTAMP(3),
    "cancelAtPeriodEnd" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrgSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TownStewardship" (
    "id" TEXT NOT NULL,
    "townId" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "status" "StewardshipStatus" NOT NULL DEFAULT 'PENDING',
    "subdomain" TEXT,
    "customDomain" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TownStewardship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnalyticsEvent" (
    "id" TEXT NOT NULL,
    "orgId" TEXT,
    "townId" TEXT NOT NULL,
    "eventType" "AnalyticsEventType" NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "AnalyticsEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UpdateDelta" (
    "id" TEXT NOT NULL,
    "townId" TEXT NOT NULL,
    "detectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sourceId" TEXT,
    "rawPayload" JSONB NOT NULL,
    "extracted" JSONB NOT NULL,
    "significanceScore" INTEGER NOT NULL DEFAULT 50,
    "requiresHumanReview" BOOLEAN NOT NULL DEFAULT true,
    "questions" TEXT[],
    "status" "UpdateDeltaStatus" NOT NULL DEFAULT 'PENDING',
    "appliedAt" TIMESTAMP(3),
    "appliedBy" TEXT,
    "rollbackReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UpdateDelta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChangeLogEntry" (
    "id" TEXT NOT NULL,
    "townId" TEXT NOT NULL,
    "updateDeltaId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "summary" TEXT NOT NULL,
    "details" JSONB NOT NULL,
    "publicNotes" TEXT,

    CONSTRAINT "ChangeLogEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScoreSnapshot" (
    "id" TEXT NOT NULL,
    "townId" TEXT NOT NULL,
    "computedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "compositeScore" DOUBLE PRECISION NOT NULL,
    "breakdown" JSONB NOT NULL,
    "configVersion" TEXT NOT NULL,

    CONSTRAINT "ScoreSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LessonPlan" (
    "id" TEXT NOT NULL,
    "townId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "gradeRange" TEXT NOT NULL,
    "estimatedDuration" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "lessonData" JSONB NOT NULL,
    "standards" JSONB,
    "comparativeAssignment" JSONB,
    "slideOutline" JSONB,
    "displayOrder" INTEGER NOT NULL DEFAULT 100,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LessonPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PrimarySourcePacket" (
    "id" TEXT NOT NULL,
    "townId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "sourceId" TEXT,
    "sourceType" TEXT NOT NULL,
    "publisherOrHolder" TEXT NOT NULL,
    "url" TEXT,
    "credibilityTier" TEXT NOT NULL,
    "analysisPrompts" TEXT[],
    "teacherNarrative" TEXT,
    "narrativeModel" TEXT,
    "displayOrder" INTEGER NOT NULL DEFAULT 100,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PrimarySourcePacket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeacherWorksheet" (
    "id" TEXT NOT NULL,
    "townId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "worksheetType" "WorksheetType" NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "quizData" JSONB,
    "displayOrder" INTEGER NOT NULL DEFAULT 100,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TeacherWorksheet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Town_slug_key" ON "Town"("slug");

-- CreateIndex
CREATE INDEX "Town_state_idx" ON "Town"("state");

-- CreateIndex
CREATE INDEX "Town_compositeScore_idx" ON "Town"("compositeScore" DESC);

-- CreateIndex
CREATE INDEX "Event_townId_idx" ON "Event"("townId");

-- CreateIndex
CREATE INDEX "Event_startDate_idx" ON "Event"("startDate");

-- CreateIndex
CREATE INDEX "Person_name_idx" ON "Person"("name");

-- CreateIndex
CREATE INDEX "RouteStop_routeId_idx" ON "RouteStop"("routeId");

-- CreateIndex
CREATE INDEX "RouteStop_townId_idx" ON "RouteStop"("townId");

-- CreateIndex
CREATE UNIQUE INDEX "RouteStop_routeId_stopOrder_key" ON "RouteStop"("routeId", "stopOrder");

-- CreateIndex
CREATE INDEX "Place_townId_idx" ON "Place"("townId");

-- CreateIndex
CREATE INDEX "Place_placeType_idx" ON "Place"("placeType");

-- CreateIndex
CREATE INDEX "Place_featured_idx" ON "Place"("featured");

-- CreateIndex
CREATE INDEX "Story_townId_idx" ON "Story"("townId");

-- CreateIndex
CREATE INDEX "Story_storyType_idx" ON "Story"("storyType");

-- CreateIndex
CREATE INDEX "TownLink_fromTownId_idx" ON "TownLink"("fromTownId");

-- CreateIndex
CREATE INDEX "TownLink_toTownId_idx" ON "TownLink"("toTownId");

-- CreateIndex
CREATE UNIQUE INDEX "TownLink_fromTownId_toTownId_linkType_key" ON "TownLink"("fromTownId", "toTownId", "linkType");

-- CreateIndex
CREATE UNIQUE INDEX "EventPerson_eventId_personId_key" ON "EventPerson"("eventId", "personId");

-- CreateIndex
CREATE UNIQUE INDEX "EventTheme_eventId_themeId_key" ON "EventTheme"("eventId", "themeId");

-- CreateIndex
CREATE UNIQUE INDEX "TownTheme_townId_themeId_key" ON "TownTheme"("townId", "themeId");

-- CreateIndex
CREATE UNIQUE INDEX "TownPerson_townId_personId_key" ON "TownPerson"("townId", "personId");

-- CreateIndex
CREATE UNIQUE INDEX "StoryTheme_storyId_themeId_key" ON "StoryTheme"("storyId", "themeId");

-- CreateIndex
CREATE UNIQUE INDEX "EventTown_eventId_townId_key" ON "EventTown"("eventId", "townId");

-- CreateIndex
CREATE UNIQUE INDEX "SourceTown_sourceId_townId_key" ON "SourceTown"("sourceId", "townId");

-- CreateIndex
CREATE UNIQUE INDEX "SourceEvent_sourceId_eventId_key" ON "SourceEvent"("sourceId", "eventId");

-- CreateIndex
CREATE UNIQUE INDEX "SourceStory_sourceId_storyId_key" ON "SourceStory"("sourceId", "storyId");

-- CreateIndex
CREATE UNIQUE INDEX "SourcePerson_sourceId_personId_key" ON "SourcePerson"("sourceId", "personId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE INDEX "OrgUser_orgId_idx" ON "OrgUser"("orgId");

-- CreateIndex
CREATE INDEX "OrgUser_userId_idx" ON "OrgUser"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "OrgUser_orgId_userId_key" ON "OrgUser"("orgId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_slug_key" ON "Organization"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_embedApiKey_key" ON "Organization"("embedApiKey");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_stripeCustomerId_key" ON "Organization"("stripeCustomerId");

-- CreateIndex
CREATE INDEX "Organization_townId_idx" ON "Organization"("townId");

-- CreateIndex
CREATE INDEX "Organization_embedApiKey_idx" ON "Organization"("embedApiKey");

-- CreateIndex
CREATE UNIQUE INDEX "OrgSubscription_orgId_key" ON "OrgSubscription"("orgId");

-- CreateIndex
CREATE UNIQUE INDEX "OrgSubscription_stripeSubscriptionId_key" ON "OrgSubscription"("stripeSubscriptionId");

-- CreateIndex
CREATE INDEX "OrgSubscription_stripeCustomerId_idx" ON "OrgSubscription"("stripeCustomerId");

-- CreateIndex
CREATE INDEX "OrgSubscription_stripeSubscriptionId_idx" ON "OrgSubscription"("stripeSubscriptionId");

-- CreateIndex
CREATE INDEX "TownStewardship_townId_idx" ON "TownStewardship"("townId");

-- CreateIndex
CREATE INDEX "TownStewardship_orgId_idx" ON "TownStewardship"("orgId");

-- CreateIndex
CREATE UNIQUE INDEX "TownStewardship_townId_orgId_key" ON "TownStewardship"("townId", "orgId");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_orgId_idx" ON "AnalyticsEvent"("orgId");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_townId_idx" ON "AnalyticsEvent"("townId");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_timestamp_idx" ON "AnalyticsEvent"("timestamp");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_eventType_idx" ON "AnalyticsEvent"("eventType");

-- CreateIndex
CREATE INDEX "UpdateDelta_townId_idx" ON "UpdateDelta"("townId");

-- CreateIndex
CREATE INDEX "UpdateDelta_status_idx" ON "UpdateDelta"("status");

-- CreateIndex
CREATE INDEX "UpdateDelta_detectedAt_idx" ON "UpdateDelta"("detectedAt");

-- CreateIndex
CREATE UNIQUE INDEX "ChangeLogEntry_updateDeltaId_key" ON "ChangeLogEntry"("updateDeltaId");

-- CreateIndex
CREATE INDEX "ChangeLogEntry_townId_idx" ON "ChangeLogEntry"("townId");

-- CreateIndex
CREATE INDEX "ChangeLogEntry_createdAt_idx" ON "ChangeLogEntry"("createdAt");

-- CreateIndex
CREATE INDEX "ScoreSnapshot_townId_idx" ON "ScoreSnapshot"("townId");

-- CreateIndex
CREATE INDEX "ScoreSnapshot_computedAt_idx" ON "ScoreSnapshot"("computedAt");

-- CreateIndex
CREATE INDEX "LessonPlan_townId_idx" ON "LessonPlan"("townId");

-- CreateIndex
CREATE INDEX "LessonPlan_published_idx" ON "LessonPlan"("published");

-- CreateIndex
CREATE INDEX "PrimarySourcePacket_townId_idx" ON "PrimarySourcePacket"("townId");

-- CreateIndex
CREATE INDEX "PrimarySourcePacket_published_idx" ON "PrimarySourcePacket"("published");

-- CreateIndex
CREATE INDEX "TeacherWorksheet_townId_idx" ON "TeacherWorksheet"("townId");

-- CreateIndex
CREATE INDEX "TeacherWorksheet_worksheetType_idx" ON "TeacherWorksheet"("worksheetType");

-- CreateIndex
CREATE INDEX "TeacherWorksheet_published_idx" ON "TeacherWorksheet"("published");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_townId_fkey" FOREIGN KEY ("townId") REFERENCES "Town"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RouteStop" ADD CONSTRAINT "RouteStop_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RouteStop" ADD CONSTRAINT "RouteStop_townId_fkey" FOREIGN KEY ("townId") REFERENCES "Town"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Place" ADD CONSTRAINT "Place_townId_fkey" FOREIGN KEY ("townId") REFERENCES "Town"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Story" ADD CONSTRAINT "Story_townId_fkey" FOREIGN KEY ("townId") REFERENCES "Town"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Story" ADD CONSTRAINT "Story_subjectPersonId_fkey" FOREIGN KEY ("subjectPersonId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TownLink" ADD CONSTRAINT "TownLink_fromTownId_fkey" FOREIGN KEY ("fromTownId") REFERENCES "Town"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TownLink" ADD CONSTRAINT "TownLink_toTownId_fkey" FOREIGN KEY ("toTownId") REFERENCES "Town"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventPerson" ADD CONSTRAINT "EventPerson_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventPerson" ADD CONSTRAINT "EventPerson_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventTheme" ADD CONSTRAINT "EventTheme_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventTheme" ADD CONSTRAINT "EventTheme_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TownTheme" ADD CONSTRAINT "TownTheme_townId_fkey" FOREIGN KEY ("townId") REFERENCES "Town"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TownTheme" ADD CONSTRAINT "TownTheme_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TownPerson" ADD CONSTRAINT "TownPerson_townId_fkey" FOREIGN KEY ("townId") REFERENCES "Town"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TownPerson" ADD CONSTRAINT "TownPerson_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoryTheme" ADD CONSTRAINT "StoryTheme_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoryTheme" ADD CONSTRAINT "StoryTheme_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventTown" ADD CONSTRAINT "EventTown_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SourceTown" ADD CONSTRAINT "SourceTown_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SourceTown" ADD CONSTRAINT "SourceTown_townId_fkey" FOREIGN KEY ("townId") REFERENCES "Town"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SourceEvent" ADD CONSTRAINT "SourceEvent_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SourceEvent" ADD CONSTRAINT "SourceEvent_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SourceStory" ADD CONSTRAINT "SourceStory_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SourceStory" ADD CONSTRAINT "SourceStory_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SourcePerson" ADD CONSTRAINT "SourcePerson_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SourcePerson" ADD CONSTRAINT "SourcePerson_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUser" ADD CONSTRAINT "OrgUser_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgUser" ADD CONSTRAINT "OrgUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_townId_fkey" FOREIGN KEY ("townId") REFERENCES "Town"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrgSubscription" ADD CONSTRAINT "OrgSubscription_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TownStewardship" ADD CONSTRAINT "TownStewardship_townId_fkey" FOREIGN KEY ("townId") REFERENCES "Town"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TownStewardship" ADD CONSTRAINT "TownStewardship_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalyticsEvent" ADD CONSTRAINT "AnalyticsEvent_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalyticsEvent" ADD CONSTRAINT "AnalyticsEvent_townId_fkey" FOREIGN KEY ("townId") REFERENCES "Town"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UpdateDelta" ADD CONSTRAINT "UpdateDelta_townId_fkey" FOREIGN KEY ("townId") REFERENCES "Town"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UpdateDelta" ADD CONSTRAINT "UpdateDelta_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChangeLogEntry" ADD CONSTRAINT "ChangeLogEntry_townId_fkey" FOREIGN KEY ("townId") REFERENCES "Town"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChangeLogEntry" ADD CONSTRAINT "ChangeLogEntry_updateDeltaId_fkey" FOREIGN KEY ("updateDeltaId") REFERENCES "UpdateDelta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScoreSnapshot" ADD CONSTRAINT "ScoreSnapshot_townId_fkey" FOREIGN KEY ("townId") REFERENCES "Town"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LessonPlan" ADD CONSTRAINT "LessonPlan_townId_fkey" FOREIGN KEY ("townId") REFERENCES "Town"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrimarySourcePacket" ADD CONSTRAINT "PrimarySourcePacket_townId_fkey" FOREIGN KEY ("townId") REFERENCES "Town"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrimarySourcePacket" ADD CONSTRAINT "PrimarySourcePacket_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherWorksheet" ADD CONSTRAINT "TeacherWorksheet_townId_fkey" FOREIGN KEY ("townId") REFERENCES "Town"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

