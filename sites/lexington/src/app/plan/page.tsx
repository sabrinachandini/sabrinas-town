import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan Your Lexington Day",
  description:
    "Plan your Lexington MA visit: Follow the Ride, April 19 in a Day, Lexington with Kids. Curated routes through the Revolutionary War sites.",
};

const THEMES = [
  {
    id: "follow-the-ride",
    label: "Follow the Ride",
    tagline: "Retrace Paul Revere's midnight route, stop by stop",
    duration: "3–4 hours",
    difficulty: "Easy — mostly flat, short distances between sites",
    bestFor: "History enthusiasts, couples, older kids",
    stops: [
      { name: "Hancock-Clarke House", note: "Where Revere warned Hancock and Adams" },
      { name: "Buckman Tavern", note: "The Minutemen's gathering point before the battle" },
      { name: "Battle Green", note: "Where the confrontation took place at dawn" },
      { name: "The Hartwell Tavern", note: "The road to Concord — continue via Minute Man NHP" },
    ],
    cta: "Start planning this route",
    mustersUrl: "https://sabrinas-town.vercel.app/muster/new?towns=lexington-ma,concord-ma&theme=follow-the-ride",
  },
  {
    id: "april-19",
    label: "April 19 in a Day",
    tagline: "The full arc of the first day of the American Revolution",
    duration: "Full day (8 AM – 4 PM)",
    difficulty: "Moderate — includes 2-mile walk along the Battle Road",
    bestFor: "Serious history buffs, school groups, adult learners",
    stops: [
      { name: "Lexington Battle Green", note: "Arrive at dawn for the full atmosphere; museum opens 9:30 AM" },
      { name: "Buckman Tavern", note: "90-minute guided tour recommended" },
      { name: "Minute Man National Historical Park", note: "Drive Route 2A toward Concord; walk the Battle Road Trail" },
      { name: "North Bridge, Concord", note: "Where the second engagement took place at 9:30 AM on April 19" },
    ],
    cta: "Build this day trip",
    mustersUrl: "https://sabrinas-town.vercel.app/muster/new?towns=lexington-ma,concord-ma&theme=april-19",
  },
  {
    id: "families",
    label: "Lexington with Kids",
    tagline: "The Green, the gift shop, the farm stand, and home",
    duration: "Half day (3–4 hours)",
    difficulty: "Easy — accessible sites, short walk, no hills",
    bestFor: "Families with kids 6–12",
    stops: [
      { name: "Battle Green", note: "The statue and cannon are always free and always open" },
      { name: "Buckman Tavern", note: "Short 30-min family tour available; muskets and uniforms" },
      { name: "Lexington Visitor Center", note: "Free, air-conditioned, maps and ranger questions" },
      { name: "Wilson Farm", note: "New England farm stand on Bedford St — lunch stop or apple picking" },
    ],
    cta: "Plan this family day",
    mustersUrl: "https://sabrinas-town.vercel.app/muster/new?towns=lexington-ma&theme=families",
  },
];

export default function PlanPage() {
  return (
    <div className="bg-cream">
      {/* Header */}
      <div className="section-border bg-navy text-cream">
        <div className="max-w-wide mx-auto px-5 pt-12 pb-10">
          <div className="font-ui text-[11px] tracking-[0.3em] uppercase text-gold font-medium mb-4">
            Plan your visit
          </div>
          <h1 className="font-condensed text-[clamp(3rem,8vw,6rem)] uppercase leading-none text-cream mb-4">
            Your Lexington Day
          </h1>
          <p className="font-ui text-base text-cream/70 max-w-xl leading-relaxed">
            Three tested routes. Pick one and go — or open the full planner to build
            your own itinerary across multiple towns.
          </p>
        </div>
      </div>

      {/* Themed day cards */}
      <div className="max-w-wide mx-auto px-5 py-12">
        <div className="space-y-8">
          {THEMES.map((theme, i) => (
            <article
              key={theme.id}
              className="border-4 border-[#14100a] bg-paper"
              aria-label={theme.label}
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Left: identity */}
                <div className="lg:col-span-2 bg-navy text-cream p-8 flex flex-col justify-between">
                  <div>
                    <div className="font-condensed text-6xl text-crimson/30 leading-none mb-4" aria-hidden="true">
                      0{i + 1}
                    </div>
                    <h2 className="font-condensed text-4xl uppercase leading-none text-cream mb-3">
                      {theme.label}
                    </h2>
                    <p className="font-ui text-sm text-cream/70 leading-relaxed mb-6">
                      {theme.tagline}
                    </p>
                    <div className="space-y-2">
                      <div>
                        <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-gold/70 mb-0.5">Duration</div>
                        <div className="font-ui text-sm text-cream/80">{theme.duration}</div>
                      </div>
                      <div>
                        <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-gold/70 mb-0.5">Difficulty</div>
                        <div className="font-ui text-sm text-cream/80">{theme.difficulty}</div>
                      </div>
                      <div>
                        <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-gold/70 mb-0.5">Best for</div>
                        <div className="font-ui text-sm text-cream/80">{theme.bestFor}</div>
                      </div>
                    </div>
                  </div>
                  <a
                    href={theme.mustersUrl}
                    className="inline-block mt-8 bg-crimson text-cream font-ui text-sm font-medium tracking-[0.08em] uppercase px-5 py-3 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_rgba(255,255,255,0.2)] transition-all duration-150 w-fit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {theme.cta} →
                  </a>
                </div>

                {/* Right: stops */}
                <div className="lg:col-span-3 p-8">
                  <div className="font-ui text-[11px] tracking-[0.25em] uppercase text-slate font-medium mb-5">
                    The stops
                  </div>
                  <ol className="space-y-5" role="list">
                    {theme.stops.map((stop, si) => (
                      <li key={stop.name} className="flex gap-4">
                        <div
                          className="font-condensed text-2xl text-crimson/30 leading-none w-7 shrink-0 mt-0.5"
                          aria-label={`Stop ${si + 1}`}
                        >
                          {si + 1}
                        </div>
                        <div>
                          <div className="font-ui font-medium text-sm text-ink">{stop.name}</div>
                          <p className="font-ui text-xs text-slate leading-relaxed mt-0.5">{stop.note}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Build your own CTA */}
        <div className="mt-12 border-4 border-[#14100a] bg-navy text-cream p-8 text-center">
          <h2 className="font-condensed text-4xl uppercase text-cream mb-3">
            Build your own muster
          </h2>
          <p className="font-ui text-sm text-cream/70 max-w-lg mx-auto mb-6 leading-relaxed">
            The full Muster planner lets you combine Lexington with Concord, Boston, Morristown,
            and 75+ other Revolutionary towns into a single shareable itinerary.
          </p>
          <a
            href="https://sabrinas-town.vercel.app/muster/new?towns=lexington-ma"
            className="inline-block bg-crimson text-cream font-ui text-sm font-medium tracking-[0.08em] uppercase px-8 py-3 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_rgba(255,255,255,0.15)] transition-all duration-150"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open the full planner →
          </a>
        </div>

        {/* Practical note */}
        <div className="mt-8 p-5 border border-[#ddd8ce] bg-paper">
          <div className="font-ui text-[11px] tracking-[0.2em] uppercase text-slate font-medium mb-2">
            Before you go
          </div>
          <p className="font-ui text-xs text-slate leading-relaxed">
            Buckman Tavern and Hancock-Clarke House operate seasonally — confirm current hours at{" "}
            <a
              href="https://www.lexingtonhistory.org"
              className="text-crimson-ink underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              lexingtonhistory.org
            </a>{" "}
            before visiting. Battle Green and the Minuteman National Historical Park are free and open year-round.
          </p>
        </div>
      </div>
    </div>
  );
}
