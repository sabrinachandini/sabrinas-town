import { Metadata } from "next";
import {
  Container,
  Heading,
  Text,
  Link,
  Button,
  Divider,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Teach | Sabrina's Town",
  description:
    "Classroom-ready resources for teaching the American Revolution through local history. Lesson plans, primary sources, quizzes, and comparative assignments aligned to state standards.",
};

export default function TeachPage() {
  return (
    <main>
      {/* Intro */}
      <section className="py-section">
        <Container>
          <Heading level={1}>For Teachers</Heading>
          <div className="mt-element max-w-[720px] space-y-element">
            <Text>
              Sabrina's Town was built, in part, because the American Revolution
              deserves better classroom materials than most teachers currently
              have access to. The standard approach treats each town as an
              isolated fact set — names, dates, outcomes — stripped of the
              uncertainty, contradiction, and human complexity that make history
              worth studying. We think teachers and students deserve more than
              that.
            </Text>
            <Text>
              Every teacher module in our network includes structured lesson
              plans for middle and high school, curated primary source packets
              with analysis prompts and teacher narratives, graphic organizers,
              quizzes with answer keys, and comparative assignments that connect
              towns to each other. The materials are designed for critical
              thinking, not memorization. Students work with real sources,
              encounter genuine historical ambiguity, and learn to construct
              evidence-based arguments. Where possible, we surface voices that
              traditional curricula overlook — enslaved people, women, ordinary
              militia members, and communities beyond the famous few.
            </Text>
            <Text>
              All resources are printable as PDF packets for classroom
              distribution. Content is scored and labeled: curated modules have
              been individually researched and written, while generated modules
              are produced algorithmically and clearly marked as such.
            </Text>
          </div>
        </Container>
      </section>

      <Divider spacing="section" />

      {/* State Resources */}
      <section className="py-component">
        <Container>
          <Heading level={2}>Browse by State</Heading>
          <Text className="mt-element">
            Teacher resources are organized by state, with curated content
            prioritized for towns with the richest primary source availability.
          </Text>

          <div className="mt-component">
            <div className="p-element bg-bg-secondary rounded-lg">
              <Heading level={3}>Massachusetts</Heading>
              <Text className="mt-element">
                Ten towns spanning the opening acts of the Revolution — from the
                shots fired at Lexington and Concord to the siege of Boston, the
                maritime resistance of the North Shore, and the interior
                defiance that shut down royal courts before a single battle was
                fought.
              </Text>
              <div className="mt-element">
                <Button href="/teach/massachusetts" size="small">
                  View Massachusetts Resources
                </Button>
              </div>
            </div>
          </div>

          <div className="p-element bg-bg-secondary rounded-lg mt-element">
            <Heading level={3}>New Jersey</Heading>
            <Text className="mt-element">
              The crossroads of the war — from Washington&apos;s desperate
              crossing of the Delaware to two brutal winters at Morristown that
              tested the Continental Army to its limits.
            </Text>
            <div className="mt-element">
              <Button href="/teach/new-jersey" size="small">
                View New Jersey Resources
              </Button>
            </div>
          </div>

          <Text className="mt-component" muted>
            Additional states coming soon. The 75-town network spans 13 states
            — two are now available.
          </Text>
        </Container>
      </section>

      <Divider spacing="section" />

      {/* Methodology */}
      <section className="py-component">
        <Container>
          <Heading level={2}>Our Approach</Heading>
          <Text className="mt-element max-w-[720px]">
            Every source in our teacher materials is evaluated using a
            three-tier credibility system. Tier 1 sources include primary
            documents, National Park Service materials, and peer-reviewed
            scholarship. Teacher narratives are written to help educators
            contextualize sources for their students — not to replace the
            sources themselves.
          </Text>
          <div className="mt-element flex flex-wrap gap-4">
            <Link href="/methodology">Read our full methodology</Link>
            <Link href="/methodology#source-tiers">Source credibility tiers</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
