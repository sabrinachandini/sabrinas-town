-- AlterEnum
ALTER TYPE "AnalyticsEventType" ADD VALUE 'TOWN_VIEW';
ALTER TYPE "AnalyticsEventType" ADD VALUE 'TEACHER_VIEW';
ALTER TYPE "AnalyticsEventType" ADD VALUE 'PRINT_CLICK';
ALTER TYPE "AnalyticsEventType" ADD VALUE 'CHECKOUT_STARTED';
ALTER TYPE "AnalyticsEventType" ADD VALUE 'STEWARDSHIP_ACTIVATED';

-- AlterTable
ALTER TABLE "AnalyticsEvent" ALTER COLUMN "townId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "AnalyticsEvent" ADD COLUMN "userId" TEXT;

-- CreateIndex
CREATE INDEX "AnalyticsEvent_userId_idx" ON "AnalyticsEvent"("userId");
