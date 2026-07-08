-- Migration: teach_review_transcription_fields
-- Adds needsReview + needsReviewReason to LessonPlan
-- Adds transcription + facsimileUrl + glossary to PrimarySourcePacket
--
-- Safe to run on production: all new columns have DEFAULT values or are nullable.
-- No existing data is changed. No locks beyond brief ALTER TABLE.
--
-- Run as: psql $DATABASE_URL -f prisma/migrations/teach_review_transcription_fields.sql

-- LessonPlan: review flag
ALTER TABLE "LessonPlan"
  ADD COLUMN IF NOT EXISTS "needsReview"       BOOLEAN  NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS "needsReviewReason" TEXT;

CREATE INDEX IF NOT EXISTS "LessonPlan_needsReview_idx"
  ON "LessonPlan" ("needsReview");

-- PrimarySourcePacket: packet display fields
ALTER TABLE "PrimarySourcePacket"
  ADD COLUMN IF NOT EXISTS "transcription" TEXT,
  ADD COLUMN IF NOT EXISTS "facsimileUrl"  TEXT,
  ADD COLUMN IF NOT EXISTS "glossary"      JSONB;
