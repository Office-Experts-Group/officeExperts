// app/microsoft-consultants-northern-nsw/(components)/NorthernNswResilience.jsx
import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import ServiceLink from "../../services/(components)/ServiceLink";

import { resilience } from "../northernNswData";

import styles from "@/styles/northernNswResilience.module.scss";

const NorthernNswResilience = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Header ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Local conditions</p>
          <h2 className={styles.heading}>
            Built for floods, storms{" "}
            <span className={styles.headingAccent}>and patchy reception.</span>
          </h2>
          <p className={styles.lead}>
            Northern NSW businesses know better than most what it is to lose a
            premises or a power supply overnight. We set systems up so the
            business keeps running when the building, the shed or the signal
            does not.
          </p>
        </div>
      </AnimateOnScroll>

      {/* ── Three practical measures ── */}
      <ul className={styles.columns}>
        {resilience.map((r, i) => (
          <li key={r.id} className={styles.column}>
            <AnimateOnScroll
              animation="fade-up"
              duration={0.55}
              delay={i * 0.06}
            >
              <h3 className={styles.title}>{r.title}</h3>
              <p className={styles.text}>{r.text}</p>
              <ServiceLink href={r.link.href} className={styles.link}>
                {r.link.label}
              </ServiceLink>
            </AnimateOnScroll>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default NorthernNswResilience;
