import { readFileSync } from "fs";
import { PrismaClient } from "@prisma/client";

const envContent = readFileSync("/Users/sabrinachandini/sabrinas-town/sites/hife/.env.local", "utf-8");
for (const line of envContent.split("\n")) {
  const m = line.match(/^([^=]+)=(.*)$/);
  if (m) process.env[m[1]] = m[2].replace(/^"(.*)"$/, "$1");
}
if (process.env.DATABASE_URL) {
  process.env.DATABASE_URL = process.env.DATABASE_URL.replace(/:5432\//, ":6543/");
}

const prisma = new PrismaClient({ log: [] });

async function main() {
  const result = await prisma.business.updateMany({
    where: { status: "NEEDS_REVIEW" },
    data: { status: "ACTIVE" },
  });
  console.log(`Approved: ${result.count} businesses → ACTIVE`);

  await prisma.business.update({
    where: { id: "cmr9hp40n000342jkzhwlvhf9" },
    data: { website: "https://www.marriott.com/en-us/hotels/bosxl-aloft-lexington/overview/" },
  });
  console.log("✓ Aloft Lexington — tracking params removed");

  await prisma.business.update({
    where: { id: "cmrasvehu000b35c2imfb0guw" },
    data: { website: "https://www.phlvisitorcenter.com/" },
  });
  console.log("✓ Independence Visitor Center — tracking params removed");

  await prisma.business.update({
    where: { id: "cmrasve4l000135c2q7lajuoa" },
    data: { website: "https://www.nps.gov/bost/planyourvisit/boston-common-visitor-center.htm" },
  });
  console.log("✓ Boston Common Visitor Center — website → NPS page");

  await prisma.$disconnect();
}
main().catch(console.error);
