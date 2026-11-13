// /app/services/microsoft-power-platform/microsoft-fabric/(components)/MfabIntro.jsx

import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from "@/styles/mfabIntro.module.scss";
import MfabAnatomySvg from "../(svgs)/MfabAnatomySvg";

const MFAB_TERMS = [
  {
    term: "OneLake",
    definition:
      "One shared store for all of your organisation’s data. Every tool reads the same copy, so nobody exports and re-imports files between systems.",
  },
  {
    term: "Workloads",
    definition:
      "The tools that sit on top of OneLake, each built for one job: moving data, cleaning it, storing it, predicting from it and reporting on it.",
  },
  {
    term: "Capacity",
    definition:
      "The computing power you pay for. Fabric is billed mainly by capacity rather than tool by tool, so every workload draws from the same pool.",
  },
];

const MfabIntro = () => {
  return (
    <section
      className={styles.mfabIntro}
      id="mfab-intro"
      aria-labelledby="mfab-intro-heading"
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Unified analytics</p>
          <h2 id="mfab-intro-heading" className={styles.heading}>
            What is <span className={styles.accent}>Microsoft Fabric?</span>
          </h2>
          <p className={styles.text}>
            Microsoft Fabric is an all-in-one analytics solution for
            organisations that need their data to work together. Instead of
            juggling separate tools to move data, store it, analyse it and
            report on it, Fabric brings everything into one environment,
            delivered as Software as a Service (SaaS). Microsoft runs the
            infrastructure, so there are no servers for you to manage.
          </p>
          <p className={styles.text}>
            It combines data integration, engineering, warehousing, data
            science, real-time analytics and business intelligence under one
            banner, all working from one store called OneLake. Power BI is now
            part of Fabric, so if your team already builds{" "}
            <Link href="/services/microsoft-power-platform/microsoft-power-bi">
              Power BI reports
            </Link>
            , you’re closer than you think. Microsoft’s own{" "}
            <a
              href="https://learn.microsoft.com/en-us/fabric/fundamentals/microsoft-fabric-overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fabric overview
            </a>{" "}
            goes into the technical detail.
          </p>

          <div className={styles.terms}>
            <p className={styles.termsLabel}>In plain terms</p>
            <dl>
              {MFAB_TERMS.map(({ term, definition }) => (
                <div key={term} className={styles.term}>
                  <dt>{term}</dt>
                  <dd>{definition}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <figure className={styles.diagram}>
            <MfabAnatomySvg />
            <figcaption className={styles.caption}>
              Fabric in three layers, with security and capacity shared across
              all of them.
            </figcaption>
          </figure>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default MfabIntro;
