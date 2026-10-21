// app/microsoft-consultants-gold-coast/(components)/GoldCoastIntro.jsx
import React from "react";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/goldCoastIntro.module.scss";

const notes = [
  {
    id: "remote",
    kicker: "Remote-first",
    body: "Screen-share workshops and shared files, so you get the right specialist rather than the nearest one. Face-to-face only when it genuinely helps, by arrangement.",
  },
  {
    id: "time",
    kicker: "Queensland time",
    body: "Queensland skips daylight saving, so in summer the Gold Coast sits an hour behind Sydney and Melbourne. We plan calls around your working day.",
  },
  {
    id: "border",
    kicker: "Across the border",
    body: "Plenty of Gold Coast businesses also operate in Brisbane or northern NSW. We build tools that work across sites, states and staff who are rarely in one place.",
  },
];

const GoldCoastIntro = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Left: headline, copy, CTA ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Serving the Gold Coast</p>
          <h2 className={styles.headline}>
            Microsoft expertise for the Gold Coast,{" "}
            <span className={styles.accentText}>
              minus the traffic on the M1.
            </span>
          </h2>
          <p className={styles.lead}>
            From Coolangatta to Coomera, Gold Coast businesses run on a mix of
            fast-growing teams, seasonal swings and systems that were built to
            get through last week. We help turn those into tools that keep up.
          </p>
          <p className={styles.body}>
            Office Experts Group has been fixing and building Microsoft
            solutions since 2000. Our consultants are spread across Australia
            and work with Gold Coast clients remotely, covering Excel, Word,
            Access, PowerPoint, Power Platform, Microsoft 365, and AI and custom
            agent building.
          </p>
          <div className={styles.ctaRow}>
            <a href="#contact" className={styles.btn}>
              Book a free assessment
            </a>
            <span className={styles.ctaNote}>
              No obligation. Plain-English advice.
            </span>
          </div>
        </div>
      </AnimateOnScroll>

      {/* ── Right: tilted note cards ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
        <ul className={styles.notes}>
          {notes.map((n) => (
            <li key={n.id} className={styles.note}>
              <p className={styles.kicker}>{n.kicker}</p>
              <p className={styles.noteBody}>{n.body}</p>
            </li>
          ))}
        </ul>
      </AnimateOnScroll>
    </div>

    {/* Decorative wave into the next (white) section */}
    <svg
      className={styles.wave}
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 50 C 240 100, 480 0, 720 40 C 960 80, 1200 10, 1440 50 L1440 90 L0 90 Z"
        fill="#ffffff"
      />
    </svg>
  </section>
);

export default GoldCoastIntro;
