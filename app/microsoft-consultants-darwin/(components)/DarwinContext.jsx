// app/microsoft-consultants-darwin/(components)/DarwinContext.jsx
import React from "react";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/darwinContext.module.scss";

// What drives the Top End economy, and where the problems we fix tend to show up.
// Wording describes what we can help with, not who we have worked for, and makes
// no claim of a local office or local staff.
const sectors = [
  {
    id: "defence",
    places: "Larrakeyah · RAAF Base Darwin · Palmerston",
    sector: "Defence & Defence Support",
    body: "Defence work brings contractors, subcontractors and a lot of compliance paperwork. We help support businesses turn spreadsheet trackers into controlled workflows and reporting, working inside your document-control and data-handling requirements.",
    uses: ["SharePoint", "Power Automate", "Excel"],
  },
  {
    id: "energy",
    places: "Darwin Port · East Arm · Winnellie · Berrimah",
    sector: "Energy, Marine & Logistics",
    body: "Oil and gas, ports, freight and supply firms depend on asset registers, maintenance schedules and inspection records. We build field capture apps and dashboards that replace end-of-week data entry with information that is already in the system.",
    uses: ["Power Apps", "Power BI", "Access", "Dataverse"],
  },
  {
    id: "government",
    places: "Darwin CBD · Palmerston · Casuarina",
    sector: "Government & Community Services",
    body: "Territory and local government work generates briefings, grant reports and service data. Word and PowerPoint templates, Excel reporting and approval flows keep documents consistent and the paper trail clean.",
    uses: ["Word", "PowerPoint", "Excel", "Microsoft 365"],
  },
  {
    id: "remote",
    places: "Katherine · Alice Springs · Nhulunbuy · remote communities",
    sector: "Remote Services, Health & Land Management",
    body: "Organisations delivering services across large distances need data that moves reliably between sites. We build forms, registers and reporting that capture information in the field, work with patchy connectivity and roll up to a single view.",
    uses: ["Power Apps", "SharePoint", "Power BI"],
  },
  {
    id: "education",
    places: "Casuarina · Darwin CBD · Palmerston",
    sector: "Education, Training & Research",
    body: "Universities, training providers and research bodies manage enrolments, placements, grants and compliance reporting. We automate the repeat reports and replace scattered email chains with shared workflows.",
    uses: ["Excel", "Power Automate", "Power BI"],
  },
  {
    id: "tourism",
    places: "Darwin Waterfront · Kakadu · Litchfield · Top End",
    sector: "Tourism, Hospitality & Pastoral",
    body: "Tourism swings between a busy dry season and a quiet wet, and pastoral and agricultural operations plan around the same cycle. We build rostering, bookings and stock reporting that anticipate the swing, and AI helpers that field the same enquiries every week.",
    uses: ["Excel", "Power Automate", "AI agents"],
  },
  {
    id: "construction",
    places: "Winnellie · Palmerston · Humpty Doo",
    sector: "Construction, Trades & Mining Services",
    body: "Quotes, variations, timesheets, safety paperwork and subcontractor claims mostly start life on a phone or in a ute. We connect the field to the office so a job sheet becomes an invoice with less retyping.",
    uses: ["Power Apps", "Excel", "Word"],
  },
];

const areas =
  "Darwin CBD, Parap, Stuart Park, Casuarina, Nightcliff, Palmerston, Winnellie, Berrimah, Howard Springs, Humpty Doo, Katherine, Alice Springs, Tennant Creek and Nhulunbuy";

const DarwinContext = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Header ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Top End industries</p>
          <h2 className={styles.heading}>
            Where the Territory&rsquo;s work{" "}
            <span className={styles.headingAccent}>meets our toolkit.</span>
          </h2>
          <p className={styles.lead}>
            Different industries, similar frustrations: a system that grew one
            fix at a time and a team keying the same details in twice. These are
            the places we are most often asked to help.
          </p>
        </div>
      </AnimateOnScroll>

      {/* ── Editorial rows ── */}
      <ol className={styles.rows}>
        {sectors.map((s, i) => (
          <li key={s.id} className={styles.row}>
            <AnimateOnScroll
              animation="fade-up"
              duration={0.55}
              delay={i * 0.04}
            >
              <div className={styles.rowInner}>
                <span className={styles.num} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={styles.rowHead}>
                  <h3 className={styles.sector}>{s.sector}</h3>
                  <p className={styles.places}>{s.places}</p>
                </div>
                <div className={styles.rowBody}>
                  <p className={styles.body}>{s.body}</p>
                  <ul className={styles.uses} aria-label="Typical tools">
                    {s.uses.map((u) => (
                      <li key={u} className={styles.use}>
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          </li>
        ))}
      </ol>

      {/* ── Areas ── */}
      <div className={styles.areas}>
        <p className={styles.areasLabel}>Areas we support</p>
        <p className={styles.areasText}>{areas}.</p>
      </div>
    </div>
  </section>
);

export default DarwinContext;
