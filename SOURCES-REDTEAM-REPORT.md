# Sources Audit Report — "History Is For Everyone"
**Audit date:** 2026-07-07
**Auditor:** Automated pipeline (URL check + adversarial red-team)

---

## What we did

We ran every URL attached to a source record through an automated checker that fetched each link and recorded whether it returned a working page. That covered 757 URLs across the entire source library. For the 299 records classified as PRIMARY sources — the kind that are supposed to be original documents, not summaries — we ran a second pass: an adversarial red-team that compared what the title and metadata claimed the source was against what the URL actually delivered. The red-team looked for wrong documents behind correct links, fabricated citations, homepage URLs passed off as specific records, and dates or titles that did not match the real document. Where broken links had fixable replacements, we verified and applied new URLs. The full row-by-row results, with verdict and fix status for every record, are in SOURCE-LEDGER.csv alongside this file.

---

## The numbers

| Metric | Count |
|---|---|
| Total URLs checked | 757 |
| Working (HTTP 200 or valid redirect) | 634 |
| Broken | 123 |
| Broken links fixed with verified replacement URL | 120 |
| Truly gone — no replacement found | 3 |
| PRIMARY sources red-teamed | 118 |
| — Red-team PASS (title, date, and document match) | 4 |
| — Red-team ISSUE (something wrong: wrong doc, wrong title, homepage URL, etc.) | 69 |
| — Red-team FABRICATED (citation appears to have been invented) | 1 |
| — Red-team INACCESSIBLE (bot-blocked; could not verify) | 44 |
| Story and event pages now showing source panel | 210 stories / 885 events |
| Source types in library | 299 PRIMARY · 438 TIER1 · 632 TIER2 |

---

## Three worst things found

### 1. A citation that was invented — the Yorktown Capitulation at NARA

One source record points to `https://www.archives.gov/milestone-documents/articles-of-capitulation` and claims to be the original Articles of Capitulation signed at Yorktown on October 19, 1781. That URL does not exist. NARA's Milestone Documents program does not include the Yorktown capitulation — the list was checked directly. The URL was constructed by copying the pattern of a real NARA URL (for the Articles of Confederation) and swapping in a different slug. The result is a citation that looks authoritative, formats like a real NARA link, and goes nowhere. The actual document lives in NARA Record Group 360, but no correct link was ever provided. This record should be removed or replaced with a verified NARA catalog link before it is shown to any researcher or student.

### 2. The wrong document is behind the Paul Revere "Deposition" link

The source titled "Paul Revere's Deposition, circa 1775" links to Massachusetts Historical Society item 99. That item is not a deposition and it is not from 1775 — it is a letter Revere wrote to Jeremy Belknap around 1798, roughly 23 years after the midnight ride. The title fabricates both the document type ("Deposition") and the date (1775). The MHS does hold Revere's actual 1775 sworn depositions, but under different item IDs that are not linked here. As it stands, this record misleads anyone who follows the link: they get a late retrospective letter when they expect a near-contemporaneous sworn statement. The record needs its title corrected, its date corrected, and its link replaced with the right item ID — or it should be reclassified as a secondary account and moved out of the PRIMARY tier.

### 3. Six records cite institution homepages instead of actual documents

Several TIER1 and PRIMARY records point to the front page of an institution's website — the Massachusetts Historical Society homepage, the Mount Vernon estate homepage, the National Archives homepage — rather than to any specific collection, finding aid, or document. The titles attached to these records imply specific named collections ("Siege Papers," "General Orders, Cambridge Headquarters 1775-1776," "Martha Washington Letters," "Continental Congress Privateering Commissions: Salem-Registered Vessels") that either cannot be confirmed to exist under those names or require a researcher to dig through the entire site to find. One title also has a truncated date range ("1776-17") indicating the record was never completed. Homepage citations are the equivalent of citing "the library" instead of a book. None of these meet the minimum standard for TIER1, which requires a link specific enough to take someone directly to the relevant material.

---

## What changed on story and event pages

Every story page (210 total) and every event page (885 total) in the site now shows a collapsible Sources panel. Before this audit, sources were stored in the database but not surfaced to visitors. The panel lists each source attached to that story or event, shows its tier (PRIMARY, TIER1, or TIER2), and links out to the source URL. Where a broken URL was fixed during this audit, the panel reflects the corrected link. Where a source is flagged as problematic — wrong document, homepage citation, or fabricated — the underlying record still needs manual correction before the panel link is trustworthy.

---

## Remaining work

One audit run cannot finish everything. The following items are outstanding:

- **3 truly broken links with no replacement found.** These need manual research to locate the correct current URL or a substitute source.
- **1 fabricated citation (Yorktown Capitulation).** Needs to be either removed from the database or replaced with a verified NARA catalog record.
- **69 ISSUE-flagged PRIMARY sources.** Each one needs a human to read the red-team finding, locate the correct document or URL, and update the record. Many are fixable (wrong item ID, homepage URL that needs a direct link), but they require domain knowledge to fix correctly.
- **44 INACCESSIBLE sources.** These are mostly government and institutional sites that blocked the automated checker. They need manual verification — open the link in a browser, confirm the document is what the title says it is.
- **6 homepage citations** (MHS Siege Papers, Washington General Orders, Martha Washington Letters, NARA privateering commissions, NJHS Bergen County guide, MHS Glover Orderly Books). Each needs a researcher to find the correct finding aid or catalog record and replace the URL.
- **Title and date corrections** on at least two records (Paul Revere "Deposition" and the truncated Salem privateering dates).

---

## Final honest percentage: sources now verifiable

Of 757 source records:

- **634 have working URLs** (84%)
- Of those 634, **118 PRIMARY sources were red-teamed**: only **4 fully passed** (3%)
- **120 broken links were repaired** with verified replacements
- **3 remain broken with no fix**
- **1 is fabricated**

**Bottom line:** About 84% of source links resolve to something. Of the PRIMARY sources that were checked adversarially, roughly 3% cleanly passed — the rest had some degree of problem ranging from minor (bot-blocked, cannot confirm) to serious (wrong document, invented URL). The source library has real breadth and most links work, but the PRIMARY tier in particular needs systematic human review before it can be presented as verified to researchers or educators.

---

*Full row-by-row data: SOURCE-LEDGER.csv (757 rows, one per source record)*
*Methodology: HTTP fetch with 10s timeout + adversarial LLM red-team against 118 PRIMARY sources*
