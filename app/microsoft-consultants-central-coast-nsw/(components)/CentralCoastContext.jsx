// app/microsoft-consultants-central-coast-nsw/(components)/CentralCoastContext.jsx
import React from "react";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/centralCoastContext.module.scss";

// North to south along the coast. Each stop pairs a cluster of suburbs with the
// kind of business we are most often asked to help in that part of the region.
const stops = [
  {
    id: "trades",
    place: "Tuggerah · Warnervale · Somersby",
    sector: "Trades, Building & Light Industry",
    body: "Business parks and industrial estates are full of firms running quotes, job costing and stock on spreadsheets. We turn those into structured tools, with mobile job sheets and automated approvals, so the office stops chasing paperwork from the field.",
    uses: ["Excel", "Power Apps", "Power Automate"],
  },
  {
    id: "tourism",
    place: "The Entrance · Toukley · Budgewoi",
    sector: "Tourism, Hospitality & Retail",
    body: "Busy summers and quieter winters make rostering, bookings and stock hard to plan. We build reporting that shows what is coming, automate the supplier and booking admin, and add AI helpers that field the same customer questions every week.",
    uses: ["Excel", "Power BI", "AI agents"],
  },
  {
    id: "professional",
    place: "Terrigal · Erina · Avoca Beach",
    sector: "Professional Services & Real Estate",
    body: "Agencies, accountants, planners and advisers produce a lot of near-identical documents. Word templates with smart fields, reporting in Excel and workflows in Microsoft 365 keep the output consistent and the admin short.",
    uses: ["Word", "Excel", "Microsoft 365"],
  },
  {
    id: "health",
    place: "Gosford · West Gosford · Kincumber",
    sector: "Health, Aged Care & Community Services",
    body: "Clinics, aged care and community providers carry heavy record-keeping and compliance paperwork. We build forms, registers and reporting in Microsoft 365 and Power Platform that make the process simpler to follow and easier to evidence.",
    uses: ["Power Apps", "SharePoint", "Power BI"],
  },
  {
    id: "education",
    place: "Ourimbah · Woy Woy · Umina Beach",
    sector: "Education, Council & Community",
    body: "Schools, training providers, local government and community groups juggle enrolments, grants, events and volunteers. We help replace scattered spreadsheets and email chains with shared, auditable workflows.",
    uses: ["Microsoft 365", "Power Automate", "Access"],
  },
];

const regions = [
  "Gosford",
  "Wyong",
  "Terrigal",
  "Erina",
  "Woy Woy",
  "Umina Beach",
  "The Entrance",
  "Toukley",
  "Tuggerah",
  "Warnervale",
  "Somersby",
  "Ourimbah",
  "Kincumber",
  "Avoca Beach",
];

const CentralCoastContext = () => (
  <section className={styles.section}>
    <div className={styles.layout}>
      {/* ── Left: intro, suburbs, CTA (plain element so it can stick) ── */}
      <aside className={styles.intro}>
        <p className={styles.eyebrow}>Along the Coast</p>
        <h2 className={styles.heading}>
          Different suburbs.{" "}
          <span className={styles.headingAccent}>Familiar problems.</span>
        </h2>
        <p className={styles.lead}>
          Wherever a business sits on the Coast, the pattern is similar: a
          system that grew one fix at a time, and a team spending more hours on
          admin than it should. Here is where we are most often asked to help,
          from Tuggerah Lakes down to Brisbane Water.
        </p>

        <p className={styles.tagsLabel}>Areas we support</p>
        <ul className={styles.tags} aria-label="Central Coast service areas">
          {regions.map((region) => (
            <li key={region} className={styles.tag}>
              {region}
            </li>
          ))}
        </ul>

        <div className={styles.cta}>
          <p className={styles.ctaText}>Not on the route?</p>
          <a href="#contact" className={styles.ctaBtn}>
            Contact us for a free assessment
          </a>
        </div>
      </aside>

      {/* ── Right: the route ── */}
      <ol className={styles.route}>
        {stops.map((stop, i) => (
          <li key={stop.id} className={styles.item}>
            <AnimateOnScroll
              animation="fade-up"
              duration={0.55}
              delay={i * 0.06}
            >
              <div className={styles.stop}>
                <span className={styles.marker} aria-hidden="true">
                  {i + 1}
                </span>
                <article className={styles.card}>
                  <p className={styles.place}>{stop.place}</p>
                  <h3 className={styles.sector}>{stop.sector}</h3>
                  <p className={styles.body}>{stop.body}</p>
                  <ul className={styles.uses} aria-label="Typical tools">
                    {stop.uses.map((use) => (
                      <li key={use} className={styles.use}>
                        {use}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </AnimateOnScroll>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default CentralCoastContext;
