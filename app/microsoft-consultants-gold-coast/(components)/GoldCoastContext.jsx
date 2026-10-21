// app/microsoft-consultants-gold-coast/(components)/GoldCoastContext.jsx
import React from "react";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/goldCoastContext.module.scss";

// Suburb-led this time. Each tile pairs a well-known part of the Coast with the kind
// of business we are most often asked to help there. Wording describes what we can
// help with, not who we have worked for, and makes no claim of a local office or staff.
const places = [
  {
    id: "southport",
    name: "Southport",
    sector: "Health, Law & Professional Services",
    body: "The Southport precinct pulls in clinics, law firms, accountants and university-linked research. Typical jobs: patient and matter registers, document automation, compliance reporting and approval flows.",
    uses: ["Word", "SharePoint", "Power Automate"],
  },
  {
    id: "surfers",
    name: "Surfers Paradise",
    sector: "Tourism, Hospitality & Events",
    body: "Peak-season rostering, bookings, stock and supplier admin all swing with the calendar. We build reporting that shows what is coming, automate the repetitive admin and add AI helpers for the questions guests ask every day.",
    uses: ["Excel", "Power BI", "AI agents"],
  },
  {
    id: "burleigh",
    name: "Burleigh Heads",
    sector: "Retail, Wellness & Hospitality",
    body: "Boutique retailers, cafes, clinics and studios usually run a lot of the business from spreadsheets and email. We connect quoting, bookings, stock and invoicing so there is less retyping between them.",
    uses: ["Excel", "Power Apps", "Microsoft 365"],
  },
  {
    id: "robina",
    name: "Robina & Varsity Lakes",
    sector: "Corporate, Education & Technology",
    body: "Head offices, a university campus and a cluster of technology firms. Think board and management reporting, student and research admin, and software teams that want their internal tools to talk to each other.",
    uses: ["Power BI", "Excel", "Custom software"],
  },
  {
    id: "coomera",
    name: "Coomera & Helensvale",
    sector: "Marine, Manufacturing & Film",
    body: "Marine builders, fabricators and the screen industry live on job costing, parts and production schedules. We build job-tracking apps, stock and quote tools, and automated reporting that follow the work from the shed or the set to the office.",
    uses: ["Power Apps", "Access", "Dataverse"],
  },
  {
    id: "southern",
    name: "Currumbin to Coolangatta",
    sector: "Trades, Property & Cross-border Business",
    body: "Builders, trades, property managers and businesses that straddle the Queensland and NSW border. We streamline quotes, variations and tenant or client admin, and handle the quirks of working across two states.",
    uses: ["Excel", "Power Automate", "Word"],
  },
];

const areas =
  "Southport, Surfers Paradise, Broadbeach, Burleigh Heads, Palm Beach, Currumbin, Coolangatta, Robina, Varsity Lakes, Nerang, Helensvale, Coomera, Oxenford and Hope Island";

const GoldCoastContext = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Suburb by suburb</p>
          <h2 className={styles.heading}>
            One city, many{" "}
            <span className={styles.headingAccent}>different businesses.</span>
          </h2>
          <p className={styles.lead}>
            The Gold Coast is not one economy. Here is how our work tends to
            show up from the Southport precinct down to the border.
          </p>
        </div>
      </AnimateOnScroll>

      <div className={styles.grid}>
        {places.map((p, i) => (
          <AnimateOnScroll
            key={p.id}
            animation="fade-up"
            duration={0.55}
            delay={(i % 3) * 0.06}
          >
            <article className={styles.tile}>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.sector}>{p.sector}</p>
              <p className={styles.body}>{p.body}</p>
              <ul className={styles.uses} aria-label="Typical tools">
                {p.uses.map((u) => (
                  <li key={u} className={styles.use}>
                    {u}
                  </li>
                ))}
              </ul>
            </article>
          </AnimateOnScroll>
        ))}
      </div>

      <div className={styles.areas}>
        <p className={styles.areasLabel}>Areas we support</p>
        <p className={styles.areasText}>{areas}.</p>
      </div>
    </div>
  </section>
);

export default GoldCoastContext;
