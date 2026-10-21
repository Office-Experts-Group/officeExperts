// app/services/microsoft-powerpoint/(components)/PowerPointAutomation.jsx

import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/powerPointAutomation.module.scss";

import { ArrowIcon } from "../(svgs)/ArrowIcon";

// Headline figures from the retail analytics review deck case study
const stats = [
  {
    figure: "~660",
    caption: "slides assembled into one branded retailer review deck",
  },
  {
    figure: "Under 5 min",
    caption: "to build the full deck from live Power BI data",
  },
];

const PowerPointAutomation = () => (
  <section className={styles.section} id="automation">
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Automation with VBA</p>
          <h2 className={styles.heading}>
            Presentations that build themselves{" "}
            <span className={styles.muted}>from your data.</span>
          </h2>
          <p className={styles.body}>
            Our PowerPoint experts link your data directly to your presentation
            with custom programming, saving your team precious time and keeping
            every figure accurate.
          </p>
          <p className={styles.body}>
            For one retail analytics client, we built a tool that queries Power
            BI and assembles their review deck on demand, replacing hours of
            manual slide building.
          </p>

          <div className={styles.actions}>
            <Link
              href="/case-studies/retail-analytics-automated-review-deck-generator"
              className={styles.button}
            >
              Read the review deck case study
            </Link>
            <Link href="/services/vba-macro-development" className={styles.link}>
              Explore our VBA macro development service
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
        <ul className={styles.stats}>
          {stats.map((stat) => (
            <li key={stat.figure} className={styles.stat}>
              <strong className={styles.figure}>{stat.figure}</strong>
              <span className={styles.caption}>{stat.caption}</span>
            </li>
          ))}
        </ul>
      </AnimateOnScroll>
    </div>
  </section>
);

export default PowerPointAutomation;
