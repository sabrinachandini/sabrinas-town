-- CreateEnum
CREATE TYPE "PlaceType" AS ENUM ('BATTLEFIELD', 'HISTORIC_HOUSE', 'MONUMENT', 'MUSEUM', 'CEMETERY', 'CHURCH', 'GOVERNMENT', 'TAVERN', 'LANDMARK', 'TRAIL');

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

-- CreateIndex
CREATE INDEX "Place_townId_idx" ON "Place"("townId");

-- CreateIndex
CREATE INDEX "Place_placeType_idx" ON "Place"("placeType");

-- CreateIndex
CREATE INDEX "Place_featured_idx" ON "Place"("featured");

-- AddForeignKey
ALTER TABLE "Place" ADD CONSTRAINT "Place_townId_fkey" FOREIGN KEY ("townId") REFERENCES "Town"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
