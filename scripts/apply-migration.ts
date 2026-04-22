// No dotenv - uses DATABASE_URL from environment directly
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  await prisma.$executeRawUnsafe('ALTER TABLE "Person" ADD COLUMN IF NOT EXISTS "imageUrl" TEXT');
  await prisma.$executeRawUnsafe('ALTER TABLE "Person" ADD COLUMN IF NOT EXISTS "imageCredit" TEXT');
  const cols = await prisma.$queryRaw<Array<{column_name: string}>>`
    SELECT column_name FROM information_schema.columns 
    WHERE table_name = 'Person' AND column_name IN ('imageUrl','imageCredit')
  `;
  console.log("Columns now in prod:", cols.map((r: {column_name: string}) => r.column_name));
}
main().catch(console.error).finally(() => prisma.$disconnect());
