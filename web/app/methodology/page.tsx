// MODEL: Claude Opus (narrative content), Claude Sonnet (page structure)
// Public methodology page — static server component, no API fetch

import {
  Container,
  Heading,
  Text,
  Divider,
  Link,
} from "@/components/ui";

export const metadata = {
  title: "Methodology | History Is For Everyone",
  description:
    "How towns are researched, sourced, and updated.",
};

export default function MethodologyPage() {
  return (
    <main className="py-section">
      <Container>
        {/* Introduction */}
        <Heading level={1}>Methodology</Heading>
        <Text className="mt-element max-w-[720px]">
          Sabrina's Town scores and connects 75 Revolutionary War communities
          across 13 states. This page explains how we choose those towns, how we
          score them, how we evaluate sources, and how we decide when something
          changes. We publish this because trust requires transparency — and
          because we want readers to push back when we get things wrong.
        </Text>

        <Divider spacing="section" />

        {/* What is History Is For Everyone */}
        <section className="max-w-[720px]">
          <Heading level={2}>What is History Is For Everyone?</Heading>
          <Text className="mt-element">
            History Is For Everyone is a public-good research project dedicated
            to making America's Revolutionary War heritage accessible,
            trustworthy, and useful — especially for educators. We believe that
            the stories of the founding era belong to everyone: not just to the
            well-funded museums or the towns that already appear on every tourist
            map, but to every community that played a part in the creation of
            the country. Our work is teacher-first by design. Every town
            profile, source citation, and scoring decision is made with
            classroom use in mind, because teachers are the people who turn
            historical data into understanding.
          </Text>
          <Text className="mt-element">
            The project operates as an open research network. We publish our
            methodology, our sources, and our scoring rationale so that readers
            can evaluate our claims for themselves. When we are uncertain, we say
            so. When our evidence is thin, we label it. When we change a score
            or revise a narrative, the change is logged publicly. This is not a
            finished encyclopedia — it is a living, evolving body of work that
            improves as more people engage with it. If you are a teacher, a
            local historian, a student, or simply someone who cares about
            getting the history right, this project exists for you.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* Town Selection */}
        <section className="max-w-[720px]">
          <Heading level={2}>Town Selection</Heading>
          <Text className="mt-element">
            A town enters our network when it meets two criteria: documented
            involvement in the Revolutionary period (roughly 1763 to 1783), and
            at least one surviving historical resource that a visitor can
            experience today. "Documented involvement" means we can cite a
            primary or secondary source placing the town in the context of
            colonial resistance, military action, political deliberation, or
            wartime civilian life.
          </Text>
          <Text className="mt-element">
            We intentionally include communities beyond the well-known
            battlefields. Towns where committees of correspondence met, where
            militia organized, where enslaved people navigated the war's
            contradictions, where women ran farms and supply lines — these are
            part of the Revolution too. Our goal is a network, not a greatest-hits
            list.
          </Text>
          <Text className="mt-element">
            Selection is not permanent. If new research undermines a town's
            documented connection, or if a town's sole historical resource
            closes permanently, we may remove it from the active network. Any
            such change would be logged in the{" "}
            <Link href="/changelog">changelog</Link>.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* Scoring Framework */}
        <section className="max-w-[720px]">
          <Heading level={2}>Scoring Framework</Heading>
          <Text className="mt-element">
            Every town receives a composite score from 0 to 100, calculated as a
            weighted average of seven dimensions. The weights reflect our
            editorial judgment about what matters most for someone trying to
            understand and experience a town's Revolutionary history. They are
            not immutable — if we adjust them, the change and rationale will
            appear in the changelog.
          </Text>

          {/* Weights Table */}
          <div className="mt-component overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-text-primary">
                  <th className="text-left py-3 pr-4 font-heading font-semibold text-small uppercase tracking-wide">
                    Dimension
                  </th>
                  <th className="text-right py-3 font-heading font-semibold text-small uppercase tracking-wide">
                    Weight
                  </th>
                </tr>
              </thead>
              <tbody>
                <WeightRow dimension="Historical Significance" weight={25} description="Scale and impact of Revolutionary events that took place here" />
                <WeightRow dimension="Preservation Quality" weight={15} description="Condition and authenticity of surviving sites and structures" />
                <WeightRow dimension="Accessibility" weight={10} description="Ease of visiting — hours, transit, signage, ADA compliance" />
                <WeightRow dimension="Interpretive Resources" weight={15} description="Museums, guided tours, educational programs, on-site materials" />
                <WeightRow dimension="Interconnection" weight={15} description="Meaningful links to other towns in the Revolutionary network" />
                <WeightRow dimension="Documented Stories" weight={10} description="First-person accounts, oral histories, lesser-known voices" />
                <WeightRow dimension="Source Quality" weight={10} description="Depth and reliability of citations backing the town's profile" />
              </tbody>
            </table>
          </div>

          <Text className="mt-element" size="small" muted>
            Each dimension is scored independently from 0 to 100, then combined
            using the weights above. A town scoring 80 in Historical
            Significance contributes 20 points to the composite (80 × 0.25).
          </Text>
        </section>

        <Divider spacing="section" />

        {/* Score Tiers */}
        <section className="max-w-[720px]">
          <Heading level={2}>Score Tiers</Heading>
          <Text className="mt-element">
            Composite scores map to five tiers. These labels appear on town
            cards, ranking tables, and comparison pages. They are descriptive,
            not prescriptive — a town labeled "Emerging" is not less important
            historically, it may simply have fewer preserved resources or less
            documentation available at the time of assessment.
          </Text>

          <div className="mt-component space-y-3">
            <TierRow label="Exceptional" range="90–100" description="Comprehensive preservation, deep documentation, strong network connections" />
            <TierRow label="Excellent" range="75–89" description="Well-preserved and well-documented, with meaningful interpretive resources" />
            <TierRow label="Notable" range="60–74" description="Solid historical presence with some gaps in preservation or documentation" />
            <TierRow label="Relevant" range="40–59" description="Clear Revolutionary connection, but limited visitor resources or sourcing" />
            <TierRow label="Emerging" range="0–39" description="Recently added or sparsely documented — scores expected to evolve" />
          </div>
        </section>

        <Divider spacing="section" />

        {/* Link Types */}
        <section className="max-w-[720px]">
          <Heading level={2}>Link Types</Heading>
          <Text className="mt-element">
            The network aspect of Sabrina's Town matters as much as individual
            profiles. Towns connect to each other through typed links, each
            representing a historically documented relationship. Links are
            weighted by significance and always include a brief explanation of
            the connection.
          </Text>
          <Text className="mt-element">
            Current link types include shared events (two towns involved in the
            same military action or political movement), shared people
            (historical figures active in both locations), shared themes
            (parallel experiences like "citizen soldiers" or "maritime
            resistance"), and shared routes (physical paths like the Boston Post
            Road or Paul Revere's ride). We may add link types as the network
            grows.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* Source Credibility Tiers */}
        <section className="max-w-[720px]">
          <Heading level={2}>Source Credibility Tiers</Heading>
          <Text className="mt-element">
            Every source cited in a town profile is assigned a credibility tier.
            This does not mean lower-tier sources are unreliable — it means we
            want readers to understand the evidentiary basis for what they're
            reading. A community blog post and a peer-reviewed journal article
            both have value, but they carry different epistemic weight.
          </Text>

          <div className="mt-component space-y-element">
            <div className="p-element bg-bg-secondary rounded-lg">
              <Text className="font-medium">Tier 1 — Institutional and Academic</Text>
              <Text size="small" muted className="mt-2">
                Peer-reviewed scholarship, National Park Service documentation,
                Smithsonian records, Library of Congress materials, state
                archives, and primary documents (letters, diaries, official
                records from the period). These form the backbone of every town
                profile.
              </Text>
            </div>
            <div className="p-element bg-bg-secondary rounded-lg">
              <Text className="font-medium">Tier 2 — Reputable Secondary</Text>
              <Text size="small" muted className="mt-2">
                Published books by established historians, long-form journalism
                from recognized outlets, well-sourced local historical society
                publications, and documentary works. Useful for narrative context
                and interpretation, cross-referenced against Tier 1 where
                possible.
              </Text>
            </div>
            <div className="p-element bg-bg-secondary rounded-lg">
              <Text className="font-medium">Tier 3 — General Reference</Text>
              <Text size="small" muted className="mt-2">
                Wikipedia (verified against citations), tourism board materials,
                general-audience websites, and community-contributed content.
                Valuable for practical visitor information and local perspective,
                but factual claims are verified against higher-tier sources
                before inclusion.
              </Text>
            </div>
          </div>

          <Text className="mt-element">
            Sources assigned the label "TODO" are awaiting evaluation. This
            happens when a source is added during a batch update and has not yet
            been reviewed. We aim to clear the backlog within two weeks of any
            data import.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* Update Philosophy */}
        <section className="max-w-[720px]">
          <Heading level={2}>Update Philosophy</Heading>
          <Text className="mt-element">
            Town profiles are living documents. Scores change when new sources
            are added, when preservation conditions shift, or when our scoring
            methodology evolves. Every change is logged with a timestamp, a
            summary, and (where applicable) a public note explaining the
            reasoning.
          </Text>
          <Text className="mt-element">
            We do not aim for consensus — we aim for transparency. If you
            disagree with a score or a characterization, the sourcing is visible.
            We label uncertainty explicitly: where evidence is contested, where
            oral tradition diverges from written record, where our assessment
            relies on limited data. History is not a finished product, and
            neither is this project.
          </Text>
          <Text className="mt-element">
            Corrections, source suggestions, and factual challenges are welcome.
            Reach us through the <Link href="/partner">Partner</Link> page or
            by opening an issue on our public repository.
          </Text>
        </section>

        <Divider spacing="section" />

        <div className="max-w-[720px]">
          <Text size="small" muted>
            Last reviewed: February 2026. This methodology may evolve. Changes
            will be documented in the <Link href="/changelog">changelog</Link>.
          </Text>
        </div>
      </Container>
    </main>
  );
}

function WeightRow({
  dimension,
  weight,
  description,
}: {
  dimension: string;
  weight: number;
  description: string;
}) {
  return (
    <tr className="border-b border-border-light">
      <td className="py-3 pr-4">
        <Text className="font-medium">{dimension}</Text>
        <Text size="small" muted className="mt-0.5">
          {description}
        </Text>
      </td>
      <td className="py-3 text-right">
        <span className="font-mono font-medium text-accent-blue">
          {weight}%
        </span>
      </td>
    </tr>
  );
}

function TierRow({
  label,
  range,
  description,
}: {
  label: string;
  range: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4 py-2">
      <div className="flex-shrink-0 w-24">
        <Text className="font-medium">{label}</Text>
        <Text size="small" muted>
          {range}
        </Text>
      </div>
      <Text size="small" muted className="flex-1">
        {description}
      </Text>
    </div>
  );
}
