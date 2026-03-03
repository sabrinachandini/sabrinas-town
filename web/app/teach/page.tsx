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
  title: "Teach | History is for Everyone",
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
              History is for Everyone was built, in part, because the American Revolution
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

          <div className="mt-component grid md:grid-cols-2 gap-element">
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

            <div className="p-element bg-bg-secondary rounded-lg">
              <Heading level={3}>New Jersey</Heading>
              <Text className="mt-element">
                The crossroads of the war — from Washington&apos;s desperate
                crossing of the Delaware to two brutal winters at Morristown
                that tested the Continental Army to its limits.
              </Text>
              <div className="mt-element">
                <Button href="/teach/new-jersey" size="small">
                  View New Jersey Resources
                </Button>
              </div>
            </div>

            <div className="p-element bg-bg-secondary rounded-lg">
              <Heading level={3}>Connecticut</Heading>
              <Text className="mt-element">
                Connecticut&apos;s Revolutionary story spans the colony&apos;s
                maritime economy, Tory loyalists, and the brutal British raid on
                Danbury that pushed many fence-sitters toward the Patriot cause.
              </Text>
              <div className="mt-element">
                <Button href="/teach/connecticut" size="small">
                  View Connecticut Resources
                </Button>
              </div>
            </div>

            <div className="p-element bg-bg-secondary rounded-lg">
              <Heading level={3}>Rhode Island</Heading>
              <Text className="mt-element">
                Newport, occupied by the British for three years, and
                Providence, which emerged as the Patriot headquarters and naval
                center — two towns that capture the tension at the heart of the
                Revolution.
              </Text>
              <div className="mt-element">
                <Button href="/teach/rhode-island" size="small">
                  View Rhode Island Resources
                </Button>
              </div>
            </div>

            <div className="p-element bg-bg-secondary rounded-lg">
              <Heading level={3}>New Hampshire</Heading>
              <Text className="mt-element">
                New Hampshire struck first — its militia seized Fort William and
                Mary in December 1774, months before Lexington, making it one
                of the earliest acts of armed resistance in the colonies.
              </Text>
              <div className="mt-element">
                <Button href="/teach/new-hampshire" size="small">
                  View New Hampshire Resources
                </Button>
              </div>
            </div>

            <div className="p-element bg-bg-secondary rounded-lg">
              <Heading level={3}>Vermont</Heading>
              <Text className="mt-element">
                Vermont in 1777 was a disputed territory claimed by both New
                York and New Hampshire, and its Green Mountain Boys fought for
                independence on two fronts: against the British and against
                colonial authority.
              </Text>
              <div className="mt-element">
                <Button href="/teach/vermont" size="small">
                  View Vermont Resources
                </Button>
              </div>
            </div>

            <div className="p-element bg-bg-secondary rounded-lg">
              <Heading level={3}>New York</Heading>
              <Text className="mt-element">
                New York was the strategic prize of the entire war. The British
                held New York City from 1776 to 1783; the Patriot victory at
                Saratoga brought France into the war; and Washington&apos;s army
                spent its most desperate years in the Hudson Valley.
              </Text>
              <div className="mt-element">
                <Button href="/teach/new-york" size="small">
                  View New York Resources
                </Button>
              </div>
            </div>

            <div className="p-element bg-bg-secondary rounded-lg">
              <Heading level={3}>Pennsylvania</Heading>
              <Text className="mt-element">
                Pennsylvania hosted both the Continental Congress and the
                darkest winter of the war. From the political debates in
                Philadelphia to the suffering at Valley Forge, the state&apos;s
                history captures the Revolution at its most fragile.
              </Text>
              <div className="mt-element">
                <Button href="/teach/pennsylvania" size="small">
                  View Pennsylvania Resources
                </Button>
              </div>
            </div>

            <div className="p-element bg-bg-secondary rounded-lg">
              <Heading level={3}>Virginia</Heading>
              <Text className="mt-element">
                Virginia produced the Revolution&apos;s most consequential
                leaders — Washington, Jefferson, Madison, Henry — and its final
                chapter was written at Yorktown, where the last major British
                army surrendered in 1781.
              </Text>
              <div className="mt-element">
                <Button href="/teach/virginia" size="small">
                  View Virginia Resources
                </Button>
              </div>
            </div>

            <div className="p-element bg-bg-secondary rounded-lg">
              <Heading level={3}>South Carolina</Heading>
              <Text className="mt-element">
                South Carolina&apos;s war was the most brutal in the colonies —
                a civil war within a war, with Patriot and Loyalist militias
                fighting in a landscape of isolated plantations and dense
                backcountry.
              </Text>
              <div className="mt-element">
                <Button href="/teach/south-carolina" size="small">
                  View South Carolina Resources
                </Button>
              </div>
            </div>

            <div className="p-element bg-bg-secondary rounded-lg">
              <Heading level={3}>North Carolina</Heading>
              <Text className="mt-element">
                North Carolina&apos;s backcountry became the decisive theater
                of the Southern campaign. The overmountain men at Kings Mountain
                and Nathanael Greene&apos;s grinding campaign broke British
                control of the South.
              </Text>
              <div className="mt-element">
                <Button href="/teach/north-carolina" size="small">
                  View North Carolina Resources
                </Button>
              </div>
            </div>

            <div className="p-element bg-bg-secondary rounded-lg">
              <Heading level={3}>Georgia</Heading>
              <Text className="mt-element">
                Georgia was the only colony the British successfully
                reconquered — and held for years. Savannah&apos;s occupation
                and the failed Franco-American siege teach students about the
                war&apos;s international dimensions and the limits of alliance.
              </Text>
              <div className="mt-element">
                <Button href="/teach/georgia" size="small">
                  View Georgia Resources
                </Button>
              </div>
            </div>

            <div className="p-element bg-bg-secondary rounded-lg">
              <Heading level={3}>Maryland</Heading>
              <Text className="mt-element">
                Maryland&apos;s location between the Northern and Southern
                colonies made it a crucial logistical hub, and its state
                constitution of 1776 became a model for republican government
                studied throughout the founding generation.
              </Text>
              <div className="mt-element">
                <Button href="/teach/maryland" size="small">
                  View Maryland Resources
                </Button>
              </div>
            </div>

            <div className="p-element bg-bg-secondary rounded-lg">
              <Heading level={3}>Delaware</Heading>
              <Text className="mt-element">
                Delaware&apos;s decision to break with Pennsylvania and form
                its own delegation gave the Continental Congress its key swing
                vote for independence, and its &quot;Blue Hen&quot; regiment
                became one of the Continental Army&apos;s most celebrated units.
              </Text>
              <div className="mt-element">
                <Button href="/teach/delaware" size="small">
                  View Delaware Resources
                </Button>
              </div>
            </div>

            <div className="p-element bg-bg-secondary rounded-lg">
              <Heading level={3}>Maine</Heading>
              <Text className="mt-element">
                Maine, then part of Massachusetts, suffered some of the
                war&apos;s earliest British raids — Falmouth (now Portland) was
                bombarded and burned in 1775 — and its Penobscot Expedition of
                1779 was one of the largest American naval disasters.
              </Text>
              <div className="mt-element">
                <Button href="/teach/maine" size="small">
                  View Maine Resources
                </Button>
              </div>
            </div>

            <div className="p-element bg-bg-secondary rounded-lg">
              <Heading level={3}>Frontier</Heading>
              <Text className="mt-element">
                The Revolution extended far beyond the eastern seaboard. George
                Rogers Clark&apos;s capture of Kaskaskia, the founding of
                Marietta, and Wheeling&apos;s frontier forts show how the war
                reshaped the continent.
              </Text>
              <div className="mt-element">
                <Button href="/teach/frontier" size="small">
                  View Frontier Resources
                </Button>
              </div>
            </div>
          </div>
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
