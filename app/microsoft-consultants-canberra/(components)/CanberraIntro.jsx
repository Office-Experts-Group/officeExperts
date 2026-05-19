// app/microsoft-consultants-canberra/(components)/CanberraIntro.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

// Import compiled CSS module (not the .scss source)
import styles from "../../../styles/canberraIntro.module.css";

const milestones = [
  { value: "25+", label: "Years established" },
  //   { value: "ACT", label: "Local consultants" },
  { value: "100%", label: "Australian owned" },
  { value: "25+", label: "Senior Developers" },
];

const CanberraIntro = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Eyebrow ── */}
      {/* <AnimateOnScroll animation="fade-up" duration={0.5} delay={0}>
        <span className={styles.eyebrow}>Office Experts Group — Canberra</span>
      </AnimateOnScroll> */}

      {/* ── Main headline ── */}
      <AnimateOnScroll animation="fade-up" duration={0.65} delay={0.08}>
        <h2 className={styles.headline}>
          Microsoft solutions for{" "}
          <span className={styles.headlineAccent}>Canberra businesses.</span>
        </h2>
      </AnimateOnScroll>

      {/* ── Single short body paragraph ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.14}>
        <p className={styles.body}>
          We're a nationwide organisation with consultants based in Canberra.
          Since 2000, we've helped small businesses, government departments and
          organisations all over the ACT streamline their business processes. We
          can build new solutions, fix what's broken, or automate manual tasks
          that free up your team to work on what really matters.
        </p>
      </AnimateOnScroll>

      {/* ── CTA ── */}
      <AnimateOnScroll animation="fade-up" duration={0.5} delay={0.2}>
        <Link href="#contact" className={styles.btn}>
          Get a Free Consultation
        </Link>
      </AnimateOnScroll>

      {/* ── Horizontal milestone strip ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.25}>
        <div className={styles.strip}>
          {milestones.map((m, i) => (
            <div key={i} className={styles.stripItem}>
              <span className={styles.stripValue}>{m.value}</span>
              <span className={styles.stripLabel}>{m.label}</span>
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default CanberraIntro;
