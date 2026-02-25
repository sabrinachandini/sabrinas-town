-- CreateEnum
CREATE TYPE "InquiryStatus" AS ENUM ('NEW', 'IN_REVIEW', 'RESPONDED', 'CLOSED');

-- CreateTable
CREATE TABLE "PartnerInquiry" (
    "id" TEXT NOT NULL,
    "townId" TEXT,
    "townSlug" TEXT,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "organization" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "message" TEXT,
    "sourceUrl" TEXT,
    "status" "InquiryStatus" NOT NULL DEFAULT 'NEW',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PartnerInquiry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PartnerInquiry_status_idx" ON "PartnerInquiry"("status");

-- CreateIndex
CREATE INDEX "PartnerInquiry_createdAt_idx" ON "PartnerInquiry"("createdAt" DESC);

-- CreateIndex
CREATE INDEX "PartnerInquiry_email_idx" ON "PartnerInquiry"("email");

-- AddForeignKey
ALTER TABLE "PartnerInquiry" ADD CONSTRAINT "PartnerInquiry_townId_fkey" FOREIGN KEY ("townId") REFERENCES "Town"("id") ON DELETE SET NULL ON UPDATE CASCADE;
