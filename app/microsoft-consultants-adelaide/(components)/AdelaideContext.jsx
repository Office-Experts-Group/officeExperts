// app/microsoft-consultants-adelaide/(components)/AdelaideContext.jsx
import React from "react";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/adelaideContext.module.scss";

// Sectors that shape Adelaide's economy. Wording describes what we can help with,
// not who we have worked for, and makes no claim of a local office or local staff.
const sectors = [
  {
    id: "defence",
    places: "Osborne · Technology Park · Tonsley · Lot Fourteen",
    sector: "Defence, Space & Advanced Manufacturing",
    body: "Supply chains in these industries run on controlled documents, traceability and detailed project reporting. We help move Excel and Access trackers into governed SharePoint and Power Platform workflows, working inside your document-control and data-handling rules.",
    uses: ["SharePoint", "Power Apps", "Access", "Power BI"],
  },
  {
    id: "health",
    places: "Adelaide BioMed City · Bedford Park · North Adelaide",
    sector: "Health, Medical & Research",
    body: "Registers, study tracking, rosters and compliance reporting tend to sprawl across files. We build tidier forms and reporting in Microsoft 365 and Power Platform, designed around your privacy and governance requirements.",
    uses: ["Power Apps", "Power Automate", "SharePoint"],
  },
  {
    id: "education",
    places: "North Terrace · Mawson Lakes · Bedford Park",
    sector: "Education, Training & Research",
    body: "Universities, colleges and training providers juggle timetables, grants, placements and reporting deadlines. We replace the spreadsheet-and-email handoffs with shared workflows and dashboards, and automate the repeat reports.",
    uses: ["Excel", "Power Automate", "Power BI", "Word"],
  },
  {
    id: "wine",
    places: "Barossa · McLaren Vale · Adelaide Hills · Clare Valley",
    sector: "Wine, Food & Agribusiness",
    body: "Vintage planning, stock, cellar-door sales, export paperwork and compliance records all have seasonal peaks. Because this work is delivered remotely, regional operators get the same service as the city: tools that track the season and cut the paperwork.",
    uses: ["Excel", "Power Apps", "Access", "AI agents"],
  },
  {
    id: "government",
    places: "Adelaide CBD · Norwood · Unley",
    sector: "Government, Finance & Professional Services",
    body: "Briefings, board papers, tenders and client reports all need to look consistent and move through the right approvals. Word and PowerPoint templates, Excel reporting and approval flows keep the output tidy and the admin short.",
    uses: ["Word", "PowerPoint", "Excel", "Microsoft 365"],
  },
  {
    id: "resources",
    places: "Port Adelaide · Regional South Australia",
    sector: "Resources, Energy & Infrastructure",
    body: "Remote sites need simple ways to capture data and get it back to head office. Power Apps can collect information offline and sync it later, feeding asset registers, maintenance tracking and reporting without the end-of-week data entry.",
    uses: ["Power Apps", "Power BI", "Dataverse"],
  },
  {
    id: "retail",
    places: "Glenelg · Norwood · Prospect",
    sector: "Retail, Hospitality & Trades",
    body: "Owner-run businesses along the main streets and the suburban trade parks typically want fewer manual steps between a quote, a job and an invoice. We connect the pieces, and add AI helpers for the enquiries that arrive the same way every week.",
    uses: ["Excel", "Power Automate", "AI agents"],
  },
];

const areas =
  "Adelaide CBD, North Adelaide, Port Adelaide, Glenelg, Norwood, Unley, Prospect, Mawson Lakes, Tonsley, Bedford Park, Adelaide Hills, Barossa, McLaren Vale, Clare Valley";

const AdelaideContext = () => (
  <section className={styles.section}>
    {/* ── Header ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <div className={styles.headerMain}>
          <p className={styles.eyebrow}>The South Australian mix</p>
          <h2 className={styles.heading}>
            Adelaide&rsquo;s industries,{" "}
            <span className={styles.headingAccent}>our toolkit.</span>
          </h2>
        </div>
        <p className={styles.lead}>
          South Australia leans on defence, health, education, food and wine,
          and resources more than most states. Here is where the problems we fix
          tend to show up in each.
        </p>
      </div>
    </AnimateOnScroll>

    {/* ── Horizontal rail (scroll-snap, no client JS) ── */}
    <div
      className={styles.rail}
      role="region"
      aria-label="Adelaide industries we support"
      tabIndex={0}
    >
      {sectors.map((s, i) => (
        <article key={s.id} className={styles.card}>
          <span className={styles.count} aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className={styles.places}>{s.places}</p>
          <h3 className={styles.sector}>{s.sector}</h3>
          <p className={styles.body}>{s.body}</p>
          <ul className={styles.uses} aria-label="Typical tools">
            {s.uses.map((u) => (
              <li key={u} className={styles.use}>
                {u}
              </li>
            ))}
          </ul>
        </article>
      ))}

      <aside className={`${styles.card} ${styles.cta}`}>
        <p className={styles.ctaTitle}>Different industry?</p>
        <p className={styles.ctaBody}>
          The pattern is the same everywhere: a system that grew one fix at a
          time. Tell us what is slowing you down.
        </p>
        <a href="#contact" className={styles.ctaBtn}>
          Contact us for a free assessment
        </a>
      </aside>
    </div>

    <p className={styles.hint} aria-hidden="true">
      Scroll sideways to see more industries &rarr;
    </p>

    {/* ── Areas as a plain sentence, not another pill cloud ── */}
    <div className={styles.areas}>
      <p className={styles.areasLabel}>Areas we support</p>
      <p className={styles.areasText}>{areas}, and regional South Australia.</p>
    </div>
  </section>
);

export default AdelaideContext;
