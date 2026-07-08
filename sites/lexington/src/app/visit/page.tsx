import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before You Go — Visitor Guide to Lexington MA",
  description:
    "Everything you need before visiting Lexington, MA: parking, transit from Boston, site hours, accessibility, and what to know about Patriots' Day.",
};

export default function VisitPage() {
  return (
    <div className="bg-cream">
      {/* Header */}
      <div className="section-border bg-navy text-cream">
        <div className="max-w-wide mx-auto px-5 pt-12 pb-10">
          <div className="font-ui text-[11px] tracking-[0.3em] uppercase text-gold font-medium mb-4">
            Practical visitor guide
          </div>
          <h1 className="font-condensed text-[clamp(3rem,8vw,6rem)] uppercase leading-none text-cream mb-4">
            Before You Go
          </h1>
          <p className="font-ui text-base text-cream/70 max-w-xl leading-relaxed">
            One bar of signal on the Green is enough — here is everything you actually need
            to know before you arrive.
          </p>
        </div>
      </div>

      <div className="max-w-wide mx-auto px-5 py-12 space-y-0">

        {/* Getting here */}
        <section aria-label="Getting to Lexington" className="py-10 section-border">
          <h2 className="font-condensed text-4xl uppercase text-ink mb-6">Getting Here</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <div className="font-ui text-[11px] tracking-[0.2em] uppercase text-crimson-ink font-medium mb-3">By car</div>
              <ul className="font-ui text-sm text-slate space-y-2 leading-relaxed">
                <li>From Boston: Route 2 West → exit at Lexington Center (about 30 minutes without traffic)</li>
                <li>From the south: I-95/128 North → Route 2A West into Lexington</li>
                <li>From the north: I-95/128 South → Route 2A East</li>
              </ul>
            </div>
            <div>
              <div className="font-ui text-[11px] tracking-[0.2em] uppercase text-crimson-ink font-medium mb-3">By public transit</div>
              <ul className="font-ui text-sm text-slate space-y-2 leading-relaxed">
                <li>MBTA Red Line → Alewife (end of line)</li>
                <li>Bus 62 or 76 from Alewife → Massachusetts Ave in Lexington Center</li>
                <li>Approximate total journey from Downtown Boston: 60 minutes</li>
                <li>
                  <a
                    href="https://www.mbta.com"
                    className="text-crimson-ink hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Plan your trip at mbta.com ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Parking */}
        <section aria-label="Parking in Lexington" className="py-10 section-border">
          <h2 className="font-condensed text-4xl uppercase text-ink mb-6">Parking</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                name: "Meriam Street Lot",
                note: "Free public lot, closest to Battle Green. Fills by 10 AM on weekends.",
                address: "Meriam St at the junction with Massachusetts Ave",
              },
              {
                name: "Depot Square Lot",
                note: "Free, 2-minute walk from the Green. Good overflow option.",
                address: "Off Fletcher Ave near the commuter rail station",
              },
              {
                name: "Massachusetts Ave Street Parking",
                note: "2-hour time limit. Available weekdays; very limited on Patriots' Day.",
                address: "Along Massachusetts Ave through Lexington Center",
              },
            ].map((p) => (
              <div key={p.name} className="p-5 border border-[#ddd8ce] bg-paper">
                <div className="font-ui font-medium text-sm text-ink mb-1">{p.name}</div>
                <div className="font-ui text-xs text-slate/70 mb-2">{p.address}</div>
                <p className="font-ui text-xs text-slate leading-relaxed">{p.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 border-l-4 border-crimson bg-paper">
            <p className="font-ui text-xs text-slate leading-relaxed">
              <span className="font-medium text-ink">Patriots&apos; Day warning:</span> Every lot and street space
              fills before 5 AM. Park at Alewife and take the bus — it&apos;s the only reliable option.
            </p>
          </div>
        </section>

        {/* The sites */}
        <section aria-label="Historic sites" className="py-10 section-border">
          <h2 className="font-condensed text-4xl uppercase text-ink mb-6">The Sites</h2>
          <p className="font-ui text-sm text-slate mb-6 leading-relaxed max-w-2xl">
            Hours vary by site and season. The information below was accurate at time of publication —
            confirm current hours at each site&apos;s official page before visiting.
          </p>

          <div className="space-y-4">
            {[
              {
                name: "Battle Green (Lexington Green)",
                address: "Corner of Massachusetts Ave and Bedford St, Lexington, MA 02420",
                hours: "Open 24 hours, 7 days a week",
                cost: "Free",
                note: "The Minuteman statue and the Old Revolutionary Monument mark the site of the April 19, 1775 engagement.",
                link: null,
              },
              {
                name: "Lexington Visitor Center",
                address: "1875 Massachusetts Ave, Lexington, MA 02420",
                hours: "Daily — check seasonally; open most of the year",
                cost: "Free",
                note: "Maps, ranger programs, gift shop, restrooms. Fully accessible.",
                link: "https://www.lexingtonma.gov/visitor-center",
              },
              {
                name: "Buckman Tavern",
                address: "1 Bedford St, Lexington, MA 02420",
                hours: "Seasonal — typically April through October. Verify current hours.",
                cost: "Admission charged; combination tickets available",
                note: "The tavern where the Lexington Minutemen gathered before the battle. Tours led by Lexington Historical Society.",
                link: "https://www.lexingtonhistory.org/buckman-tavern",
              },
              {
                name: "Hancock-Clarke House",
                address: "36 Hancock St, Lexington, MA 02420",
                hours: "Seasonal — typically April through October. Verify current hours.",
                cost: "Admission charged; combination tickets available",
                note: "Where Paul Revere warned Samuel Adams and John Hancock on the night of April 18–19, 1775.",
                link: "https://www.lexingtonhistory.org/hancock-clarke-house",
              },
              {
                name: "Minute Man National Historical Park",
                address: "Visitor center: 250 North Great Rd, Lincoln, MA (the Battle Road runs through Lexington and Lincoln)",
                hours: "Open year-round; visitor center hours seasonal",
                cost: "Free",
                note: "A 5.5-mile trail following the route of the April 19 battle from Lexington to Concord. North Bridge is in Concord.",
                link: "https://www.nps.gov/mima",
              },
            ].map((site) => (
              <article key={site.name} className="p-5 border border-[#ddd8ce] bg-paper">
                <div className="flex flex-wrap items-start gap-4 justify-between mb-2">
                  <h3 className="font-heading text-lg text-ink">{site.name}</h3>
                  <div className="font-ui text-xs text-slate shrink-0">
                    {site.cost}
                  </div>
                </div>
                <div className="font-ui text-xs text-slate mb-1">{site.address}</div>
                <div className="font-ui text-xs font-medium text-ink mb-2">Hours: {site.hours}</div>
                <p className="font-ui text-xs text-slate leading-relaxed mb-2">{site.note}</p>
                {site.link && (
                  <a
                    href={site.link}
                    className="font-ui text-xs text-crimson-ink hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Official site ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Accessibility */}
        <section aria-label="Accessibility" className="py-10 section-border">
          <h2 className="font-condensed text-4xl uppercase text-ink mb-6">Accessibility</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <div className="font-ui text-[11px] tracking-[0.2em] uppercase text-green font-medium mb-3">Accessible</div>
              <ul className="font-ui text-sm text-slate space-y-2 leading-relaxed">
                <li>Battle Green — paved, flat, fully accessible</li>
                <li>Lexington Visitor Center — wheelchair accessible, accessible restroom</li>
                <li>Minute Man NHP — paved accessible path at North Bridge, accessible visitor center</li>
              </ul>
            </div>
            <div>
              <div className="font-ui text-[11px] tracking-[0.2em] uppercase text-slate font-medium mb-3">Partial or limited access</div>
              <ul className="font-ui text-sm text-slate space-y-2 leading-relaxed">
                <li>Buckman Tavern — ground floor accessible; upper floor has steps</li>
                <li>Hancock-Clarke House — historic structure with limited step access; contact in advance</li>
                <li>Battle Road Trail (Minute Man NHP) — crushed stone, not paved throughout</li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <a
              href="https://www.nps.gov/mima/planyourvisit/accessibility.htm"
              className="font-ui text-xs text-crimson-ink hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              NPS accessibility guide for Minute Man NHP ↗
            </a>
          </div>
        </section>

        {/* Weather and timing */}
        <section aria-label="When to visit" className="py-10 section-border">
          <h2 className="font-condensed text-4xl uppercase text-ink mb-6">When to Visit</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                season: "April",
                label: "Patriots' Day",
                note: "The Green is electric on the third Monday. But it is crowded. Go early or go on a different weekend — the sites are quieter and just as meaningful.",
              },
              {
                season: "May – October",
                label: "Peak season",
                note: "All sites open, tours running, leaf canopy over the Battle Road. Best weather window for the outdoor walk.",
              },
              {
                season: "November – March",
                label: "Off-season",
                note: "Buckman Tavern and Hancock-Clarke House close. Battle Green and Minute Man NHP are free, quiet, and worth it — especially in snow.",
              },
            ].map((s) => (
              <div key={s.season} className="p-5 border border-[#ddd8ce] bg-paper">
                <div className="font-ui text-[11px] tracking-[0.2em] uppercase text-gold-ink font-medium mb-1">{s.season}</div>
                <div className="font-heading text-lg text-ink mb-2">{s.label}</div>
                <p className="font-ui text-xs text-slate leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sources note */}
        <div className="py-8">
          <p className="font-ui text-xs text-slate leading-relaxed">
            Site information on this page is sourced from official town, NPS, and historical society
            websites. Hours and costs change — always verify directly before visiting.
            Last verified: July 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
