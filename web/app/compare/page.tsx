import { getRankings } from "@/lib/api";
import { PageHero } from "@/components/ui";
import CompareSelector from "./CompareSelector";

export const metadata = {
  title: "Compare Towns | History is for Everyone",
  description:
    "Select two Revolutionary towns to compare their history, significance, connections, and resources side by side.",
};

export const dynamic = "force-dynamic";

export default async function ComparePage() {
  const towns = await getRankings({ limit: 77 });

  return (
    <main>
      <PageHero
        bg="ivory"
        overline="Town Comparison"
        title="Compare Towns"
        body="Select two Revolutionary towns to compare their history, significance, connections, and resources side by side."
      />
      <CompareSelector towns={towns} />
    </main>
  );
}
