// /app/services/microsoft-power-platform/microsoft-fabric/(components)/MfabSilos.jsx

import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from "@/styles/mfabSilos.module.scss";
import {
  MfabBeforeArt,
  MfabAfterArt,
  MfabSilosBenefitArt,
} from "../(svgs)/MfabSilosArt";

const MFAB_BEFORE = [
  "Copies of the same data in several places",
  "Overnight exports that quietly break",
  "Reports that disagree with each other",
];

const MFAB_AFTER = [
  "Each system connects once, to OneLake",
  "Reports read straight from the source",
  "One set of permissions to manage",
];

const MFAB_BENEFITS = [
  {
    art: "storage",
    title: "Unified data storage with OneLake",
    text: "One place for every table, file and stream.",
  },
  {
    art: "movement",
    title: "Eliminate data movement costs",
    text: "Far less copying data between systems and tools.",
  },
  {
    art: "security",
    title: "Integrated security and governance",
    text: "Access and sensitivity rules follow the data.",
  },
  {
    art: "management",
    title: "Simplified data management",
    text: "One platform to run, update and support.",
  },
];

const MfabSilos = () => {
  return (
    <section
      className={styles.mfabSilos}
      id="mfab-silos"
      aria-labelledby="mfab-silos-heading"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 id="mfab-silos-heading" className={styles.heading}>
            Breaking down <span className={styles.accent}>data silos</span>
          </h2>
          <div className={styles.intro}>
            <p>
              Most businesses end up with data scattered across disconnected
              systems. Finance has one version of the numbers, operations has
              another, and someone spends Monday morning stitching exports
              together in Excel. Decisions wait on reports, and nobody is quite
              sure which figure is right.
            </p>
            <p>
              Microsoft Fabric rethinks how organisations work with data. At its
              heart is OneLake, one store that removes the need for multiple
              storage systems and for moving data between them. Native{" "}
              <Link href="/services/microsoft-power-platform/microsoft-power-bi">
                Power BI
              </Link>{" "}
              integration means your reports read straight from that data, while
              built-in governance covers security and compliance without extra
              tools.
            </p>
          </div>
        </div>

        <AnimateOnScroll animation="fade-up" duration={1} delay={0.1}>
          <div className={styles.split}>
            <div className={`${styles.panel} ${styles.beforePanel}`}>
              <p className={styles.panelLabel}>Today</p>
              <h3 className={styles.panelTitle}>Without Fabric</h3>
              <div className={styles.art}>
                <MfabBeforeArt />
              </div>
              <ul className={styles.panelList}>
                {MFAB_BEFORE.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={`${styles.panel} ${styles.afterPanel}`}>
              <p className={styles.panelLabel}>After</p>
              <h3 className={styles.panelTitle}>With Fabric</h3>
              <div className={styles.art}>
                <MfabAfterArt />
              </div>
              <ul className={styles.panelList}>
                {MFAB_AFTER.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateOnScroll>

        <ul className={styles.benefits}>
          {MFAB_BENEFITS.map(({ art, title, text }) => (
            <li key={title} className={styles.benefit}>
              <span className={styles.benefitArt}>
                <MfabSilosBenefitArt type={art} />
              </span>
              <span>
                <strong>{title}</strong>
                <span className={styles.benefitText}>{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MfabSilos;
