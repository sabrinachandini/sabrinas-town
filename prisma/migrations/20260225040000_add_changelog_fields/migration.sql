-- CreateEnum
CREATE TYPE "ChangelogCategory" AS ENUM ('CONTENT', 'SOURCES', 'TEACHER', 'INFRA', 'FIX');

-- AlterTable: make townId nullable for global entries
ALTER TABLE "ChangeLogEntry" ALTER COLUMN "townId" DROP NOT NULL;

-- AlterTable: add new fields
ALTER TABLE "ChangeLogEntry" ADD COLUMN "title" TEXT;
ALTER TABLE "ChangeLogEntry" ADD COLUMN "category" "ChangelogCategory";
ALTER TABLE "ChangeLogEntry" ADD COLUMN "createdBy" TEXT;
ALTER TABLE "ChangeLogEntry" ADD COLUMN "links" JSONB;
