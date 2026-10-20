// app/microsoft-consultants-central-coast-nsw/(components)/CentralCoastIntro.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "@/styles/centralCoastIntro.module.scss";

// Schematic only, north (left) to south (right). Not a literal map.
const northStops = ["Newcastle", "Lake Macquarie"];
const coreStops = ["Wyong", "The Entrance", "Terrigal", "Gosford", "Woy Woy"];
const southStops = ["Sydney"];

const columns = [
  {
    id: "business",
    num: "01",
    title: "Busy, owner-run businesses",
    body: "The Coast runs on small and mid-sized businesses: builders, clinics, venues, retailers and family firms. Their systems tend to grow one quick fix at a time, until the spreadsheet or database holding everything together is the thing nobody dares touch. That is usually where we come in.",
  },
  {
    id: "hybrid",
    num: "02",
    title: "Teams that split their week",
    body: "Plenty of Coast teams are spread across home offices, job sites and offices in Sydney or Newcastle. We set up Microsoft 365, Power Platform and workflows that work just as well from a home office as from a head office.",
  },
  {
    id: "remote",
    num: "03",
    title: "Remote-first, in person by arrangement",
    body: "Since 2000 we have delivered Microsoft projects right across Australia, nearly all of them remotely, which keeps costs down and projects moving. If a workshop or training day is better face to face, we can arrange that for the Central Coast.",
  },
];

const Stop = ({ label, variant }) => (
  <li className={`${styles.stop} ${styles[variant]}`}>
    <span className={styles.dot} aria-hidden="true" />
    <span className={styles.stopLabel}>{label}</span>
  </li>
);

const CentralCoastIntro = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Headline ── */}
      <AnimateOnScroll animation="fade-up" duration={0.65} delay={0}>
        <div className={styles.head}>
          <span className={styles.eyebrow}>Central Coast NSW</span>
          <h2 className={styles.headline}>
            Microsoft expertise for the Coast,{" "}
            <span className={styles.accentText}>without the commute.</span>
          </h2>
        </div>
      </AnimateOnScroll>

      {/* ── Coast route (schematic) ── */}
      <AnimateOnScroll animation="fade-up" duration={0.65} delay={0.1}>
        <figure className={styles.figure}>
          <div
            className={styles.rail}
            role="img"
            aria-label="Schematic: the Central Coast sits on the NSW coast between Newcastle to the north and Sydney to the south, from Wyong through The Entrance, Terrigal and Gosford to Woy Woy"
          >
            <ul className={`${styles.group} ${styles.groupNorth}`}>
              {northStops.map((s) => (
                <Stop key={s} label={s} variant="edge" />
              ))}
            </ul>

            <div className={styles.core}>
              <span className={styles.coreTag}>Central Coast NSW</span>
              <ul className={styles.group}>
                {coreStops.map((s) => (
                  <Stop key={s} label={s} variant="coreStop" />
                ))}
              </ul>
            </div>

            <ul className={`${styles.group} ${styles.groupSouth}`}>
              {southStops.map((s) => (
                <Stop key={s} label={s} variant="edge" />
              ))}
            </ul>
          </div>
        </figure>
      </AnimateOnScroll>

      {/* ── Three short columns ── */}
      <AnimateOnScroll animation="fade-up" duration={0.65} delay={0.15}>
        <div className={styles.columns}>
          {columns.map((col) => (
            <div key={col.id} className={styles.col}>
              <span className={styles.colNum} aria-hidden="true">
                {col.num}
              </span>
              <h3 className={styles.colTitle}>{col.title}</h3>
              <p className={styles.colBody}>{col.body}</p>
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      {/* ── CTA ── */}
      <AnimateOnScroll animation="fade-up" duration={0.5} delay={0.2}>
        <div className={styles.ctaRow}>
          <Link href="#contact" className={styles.btn}>
            Get a Free Consultation
          </Link>
          <span className={styles.ctaNote}>
            Free initial assessment for Central Coast businesses
          </span>
        </div>
      </AnimateOnScroll>
    </div>

    {/* Decorative wave — the lower wave matches the next section's background */}
    <svg
      className={styles.waves}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 70 C 180 30, 360 110, 540 70 S 900 30, 1080 70 S 1320 100, 1440 60 L1440 120 L0 120 Z"
        fill="rgba(4,105,153,0.08)"
      />
      <path
        d="M0 92 C 200 62, 380 120, 600 92 S 980 62, 1160 94 S 1360 112, 1440 88 L1440 120 L0 120 Z"
        fill="#eef6fa"
      />
    </svg>
  </section>
);

export default CentralCoastIntro;
