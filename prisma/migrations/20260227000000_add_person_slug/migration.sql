-- AddColumn
ALTER TABLE "Person" ADD COLUMN "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Person_slug_key" ON "Person"("slug");
