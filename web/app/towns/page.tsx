import { getRankings } from "@/lib/api";
import {
  Container,
  Heading,
  Text,
} from "@/components/ui";
import { PeopleSearch, TownFilter } from "@/components/town";

export const metadata = {
  title: "Browse Towns | History is for Everyone",
  description:
    "Explore all 77 Revolutionary towns in our network — from Lexington to Yorktown. Filter by state and score tier.",
};

export const dynamic = "force-dynamic";

export default async function TownsPage() {
  const towns = await getRankings({ limit: 77 });

  const states = [...new Set(towns.map((t) => t.state))].sort();

  return (
    <main className="py-section">
      <Container size="wide">
        <Heading level={1}>Browse Towns</Heading>
        <Text className="mt-element max-w-[620px]">
          {towns.length} Revolutionary towns across {states.length} states.
          Select a town to explore its full profile.
        </Text>

        {/* People search */}
        <div className="mt-component">
          <PeopleSearch />
        </div>

        {/* Town filter + grid */}
        <div className="mt-component">
          <TownFilter towns={towns} />
        </div>

        {towns.length === 0 && (
          <div className="py-section text-center">
            <Text muted>No towns found. Check back soon.</Text>
          </div>
        )}
      </Container>
    </main>
  );
}
