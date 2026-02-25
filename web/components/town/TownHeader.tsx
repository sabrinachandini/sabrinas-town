import { Container, Heading, Text } from "@/components/ui";

export interface TownHeaderProps {
  name: string;
  state: string;
  heroSummary40: string;
  compositeScore: number;
  scoreTier: string;
}

export function TownHeader({
  name,
  state,
  heroSummary40,
  compositeScore,
  scoreTier,
}: TownHeaderProps) {
  return (
    <div className="bg-bg-primary border-b border-border-light">
      <Container>
        <div className="py-component flex flex-wrap items-center justify-between gap-4">
          <div>
            <Text size="small" muted className="uppercase tracking-wide">
              {state}, USA
            </Text>
            <Heading level={1} className="mt-1">
              {name}
            </Heading>
            <Text className="mt-tight text-text-muted">{heroSummary40}</Text>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 bg-bg-secondary rounded-lg">
            <div className="text-right">
              <Text size="small" muted className="uppercase tracking-wide">
                Score
              </Text>
              <div className="flex items-baseline gap-1">
                <span className="text-h3 font-heading font-bold text-accent-blue">
                  {compositeScore.toFixed(1)}
                </span>
              </div>
            </div>
            <div className="w-px h-10 bg-border-light" />
            <Text size="small" className="font-medium">
              {scoreTier}
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
}
