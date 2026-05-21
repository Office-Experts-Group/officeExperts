// app/microsoft-consultants-cairns/(components)/CairnsIndustries.jsx
// Unique to this page — highlights Far North Queensland industry verticals
// that drive demand for Microsoft solutions in the Cairns region.
// Layout: full-width numbered rows on dark background — each industry is a
// horizontal band with an oversized number bleeding into the title on the left,
// and the description on the right. A continuous accent line ties all rows together.
import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/cairnsIndustries.module.css";

const industries = [
  {
    id: "tourism",
    number: "01",
    name: "Tourism & Hospitality",
    description:
      "Tourists have been flocking to this beautiful region for decades. Tour operators, resorts and accommodation groups manage complex seasonal rosters, booking data and supplier invoicing. Unfortunately, this is often through spreadsheets and manual processes that can quickly become a painstaking part of each day. We build reporting, automation and booking integrations that keep operations simple yet effective.",
  },
  {
    id: "resources",
    number: "02",
    name: "Resources & Agriculture",
    description:
      "Mining operations in the Atherton Tablelands, cane, mangoes and everything in between are grown across Far North Queensland and generate significant data from remote and semi-remote sites. Consolidating field data, tracking compliance and producing management reports are all tasks we routinely solve with custom Excel models, Power BI dashboards and automated workflows.",
  },
  {
    id: "government",
    number: "03",
    name: "Government & Health",
    description:
      "Local and state government agencies, Cairns Hospital network and community health providers face strict document governance requirements and increasing pressure to digitise everything. We understand the compliance landscape and have helped large organisations implement document management systems that adhere to these stringent standards.",
  },
  {
    id: "education",
    number: "04",
    name: "Education & Research",
    description:
      "With James Cook University in Smithfield, TAFE Queensland North and a range of independent schools, Cairns is home to a wide range of educational institutions and research organisations. We help them unlock the full power of Microsoft platforms they are usually already paying for.",
  },
  {
    id: "construction",
    number: "05",
    name: "Construction & Infrastructure",
    description:
      "Extreme conditions up here in Far North Queensland create a constant need for road upgrades, civil works and infrastructure maintenance. They all depend on accurate project tracking, subcontractor documentation and cost reporting. We replace error-prone manual spreadsheets with structured Excel systems and Power Platform workflows that give project managers a clear picture without the administrative overhead.",
  },
];

const CairnsIndustries = () => (
  <section className={styles.section}>
    {/* ── Opening header ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Living up North</p>
        <h2 className={styles.heading}>
          Industries we serve{" "}
          <span className={styles.headingMuted}>in Far North Queensland</span>
        </h2>
        <p className={styles.intro}>
          Likely due to its remote geography, the greater Cairns area has an
          extremely diverse collection of industries. Working with us you will
          find that first off the bat we listen to your requirements, discuss
          what&rsquo;s slowing operations, then formulate a solution that works
          for you.
        </p>
      </div>
    </AnimateOnScroll>

    {/* ── Industry rows ── */}
    <div className={styles.rows} role="list">
      {industries.map((industry, i) => (
        <AnimateOnScroll
          key={industry.id}
          animation="fade-up"
          duration={0.55}
          delay={i * 0.06}
        >
          <article className={styles.row} role="listitem">
            {/* ── Left: oversized number + name stacked ── */}
            <div className={styles.rowLeft}>
              {/* The number renders large behind the name via absolute positioning */}
              <span className={styles.rowNum} aria-hidden="true">
                {industry.number}
              </span>
              <h3 className={styles.rowName}>{industry.name}</h3>
            </div>

            {/* ── Right: description ── */}
            <p className={styles.rowDesc}>{industry.description}</p>
          </article>
        </AnimateOnScroll>
      ))}
    </div>
  </section>
);

export default CairnsIndustries;
