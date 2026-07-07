// publish-lesson-plans.ts — publish all draft lesson plans

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const drafts = await prisma.lessonPlan.findMany({
    where: { published: false },
  });

  console.log(`Found ${drafts.length} unpublished lesson plans`);

  let published = 0;
  for (const plan of drafts) {
    const cleanTitle = plan.title.replace(/^\[DRAFT\]\s*/i, "").trim();
    const newSummary =
      plan.summary.trimEnd() +
      " Note: specific sources should be verified before classroom use.";

    await prisma.lessonPlan.update({
      where: { id: plan.id },
      data: {
        title: cleanTitle,
        summary: newSummary,
        published: true,
      },
    });
    console.log(`  Published: "${cleanTitle}"`);
    published++;
  }

  console.log(`\nDone. Published ${published} lesson plans.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
