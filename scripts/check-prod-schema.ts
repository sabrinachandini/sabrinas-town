import "dotenv/config";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const result = await prisma.$queryRaw<Array<{column_name: string}>>`
    SELECT column_name FROM information_schema.columns 
    WHERE table_name = 'Person' ORDER BY column_name
  `;
  console.log("Person columns:", result.map(r => r.column_name));
}
main().catch(console.error).finally(() => prisma.$disconnect());
