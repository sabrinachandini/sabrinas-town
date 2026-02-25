-- CreateEnum
CREATE TYPE "ClusterTownRole" AS ENUM ('HUB', 'CORE', 'SUPPORTING');

-- CreateTable
CREATE TABLE "Cluster" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "hubTownId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cluster_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClusterTown" (
    "id" TEXT NOT NULL,
    "clusterId" TEXT NOT NULL,
    "townId" TEXT NOT NULL,
    "role" "ClusterTownRole" NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ClusterTown_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClusterBridge" (
    "id" TEXT NOT NULL,
    "fromClusterId" TEXT NOT NULL,
    "toClusterId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "rationale" TEXT NOT NULL,
    "anchorTownIds" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClusterBridge_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cluster_slug_key" ON "Cluster"("slug");
CREATE INDEX "Cluster_state_idx" ON "Cluster"("state");

CREATE UNIQUE INDEX "ClusterTown_clusterId_townId_key" ON "ClusterTown"("clusterId", "townId");
CREATE INDEX "ClusterTown_townId_idx" ON "ClusterTown"("townId");

CREATE UNIQUE INDEX "ClusterBridge_fromClusterId_toClusterId_key" ON "ClusterBridge"("fromClusterId", "toClusterId");

-- AddForeignKey
ALTER TABLE "Cluster" ADD CONSTRAINT "Cluster_hubTownId_fkey" FOREIGN KEY ("hubTownId") REFERENCES "Town"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "ClusterTown" ADD CONSTRAINT "ClusterTown_clusterId_fkey" FOREIGN KEY ("clusterId") REFERENCES "Cluster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "ClusterTown" ADD CONSTRAINT "ClusterTown_townId_fkey" FOREIGN KEY ("townId") REFERENCES "Town"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "ClusterBridge" ADD CONSTRAINT "ClusterBridge_fromClusterId_fkey" FOREIGN KEY ("fromClusterId") REFERENCES "Cluster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "ClusterBridge" ADD CONSTRAINT "ClusterBridge_toClusterId_fkey" FOREIGN KEY ("toClusterId") REFERENCES "Cluster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
