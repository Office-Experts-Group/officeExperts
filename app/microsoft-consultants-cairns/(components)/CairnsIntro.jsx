// app/microsoft-consultants-cairns/(components)/CairnsIntro.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/cairnsIntro.module.css";

// Key stats displayed in the strip below the headline
const stats = [
  { value: "25+", label: "Years in business" },
  { value: "100%", label: "Australian owned" },
  //   { value: "5", label: "Specialist domains" },
  { value: "25+", label: "Senior consultants" },
];

const CairnsIntro = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Eyebrow ── */}
      <AnimateOnScroll animation="fade-up" duration={0.5} delay={0}>
        <span className={styles.eyebrow}>Office Experts Group — Cairns</span>
      </AnimateOnScroll>

      {/* ── Large centred headline ── */}
      <AnimateOnScroll animation="fade-up" duration={0.65} delay={0.08}>
        <h2 className={styles.headline}>
          Enterprise-grade Microsoft consulting,{" "}
          <span className={styles.accentText}>
            right here in Far North Queensland.
          </span>
        </h2>
      </AnimateOnScroll>

      {/* ── Two-column body copy ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.14}>
        <div className={styles.body}>
          <p>
            Cairns businesses have always had to punch above their weight. Being
            the business hub for operations across remote sites over some vast
            areas, we often see hard working yet lean teams that carry more
            responsibility than their counterparts in larger cities. This only
            makes it more imperative that these operations are equipped with the
            right software to work consistently day in, day out.
          </p>
          <p>
            Office Experts Group has been solving that problem since 2000. We
            are a national consultancy with a local Cairns presence, which means
            your projects are handled by specialists who understand Far North
            Queensland's difficult business environment.
          </p>
        </div>
      </AnimateOnScroll>

      {/* ── CTA ── */}
      <AnimateOnScroll animation="fade-up" duration={0.5} delay={0.2}>
        <Link href="#contact" className={styles.btn}>
          Book a Free Consultation
        </Link>
      </AnimateOnScroll>

      {/* ── Stats strip ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.28}>
        <div className={styles.statsStrip}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default CairnsIntro;
