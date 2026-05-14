// app/microsoft-consultants-sydney/(components)/SydneyIntro.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/sydneyIntro.module.css";

const stats = [
  { value: "25+", label: "Years in business" },
  { value: "100%", label: "Australian owned" },
  { value: "Remote", label: "& on-site delivery" },
];

const SydneyIntro = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Headline block ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0}>
        <div className={styles.headBlock}>
          <span className={styles.eyebrow}>Office Experts Group</span>

          <h2 className={styles.headline}>
            Microsoft consulting built for{" "}
            <span className={styles.accent}>
              Sydney&rsquo;s pace and scale.
            </span>
          </h2>
        </div>
      </AnimateOnScroll>

      {/* ── Two-column body ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.08}>
        <div className={styles.columns}>
          <div className={styles.colLeft}>
            <p className={styles.lead}>
              Sydney virtually runs on Microsoft, businesses across the city
              depend on Excel, Word, Access, Power Platform and Microsoft 365 to
              operate. When those tools become slow, cumbersome or outdated,
              that&rsquo;s where we step in.
            </p>
          </div>

          <div className={styles.colRight}>
            <p>
              Office Experts Group has been delivering specialist Microsoft
              consulting across Australia since 2000. Our Sydney clients range
              from ASX-listed financial institutions and federal government
              agencies to small businesses looking simplify operations. We work
              across the full Microsoft stack, so you get one team that
              understands how all the pieces fit together. Disconnected apps,
              data and workflows are one of the main reasons businesses come to
              us for help.
            </p>
            <p>
              The majority of our work is delivered remotely. In the major
              centers such as Sydney, our local consultants can work directly
              with your team in person if required, providing in-house support
              and training.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* ── Stat strip ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.14}>
        <div className={styles.statStrip}>
          {stats.map((s, i) => (
            <React.Fragment key={s.label}>
              <div className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
              {i < stats.length - 1 && (
                <div className={styles.statDivider} aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>
      </AnimateOnScroll>

      {/* ── CTA ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.18}>
        <Link href="#contact" className={styles.btn}>
          Get a Free Consultation
        </Link>
      </AnimateOnScroll>
    </div>
  </section>
);

export default SydneyIntro;
