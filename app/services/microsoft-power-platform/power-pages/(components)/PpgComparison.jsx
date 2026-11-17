// /app/services/microsoft-power-platform/power-pages/(components)/PpgComparison.jsx

import Link from "next/link";
import styles from "@/styles/ppgComparison.module.scss";
import { CRITERIA_ICONS, PpgBalanceArt } from "../(svgs)/PpgComparisonArt";

const PPG_PAGES_CRITERIA = [
  {
    icon: "ecosystem",
    title: "You already live in the Microsoft ecosystem",
    body: "Dataverse, Power Automate and Microsoft sign-in are already part of how you work.",
  },
  {
    icon: "weeks",
    title: "You need something live in weeks, not months",
    body: "Pre-built components and a visual designer shorten the path to a working portal.",
  },
  {
    icon: "selfManage",
    title: "Your team will manage it themselves",
    body: "Low-code editing means staff can update content and forms without a developer.",
  },
  {
    icon: "patterns",
    title: "The portal follows standard patterns",
    body: "Forms, lists, record views and role-based access cover a lot of ground out of the box.",
  },
  {
    icon: "support",
    title: "You want Microsoft to carry the platform",
    body: "Hosting, patching and identity sit with Microsoft, not with you.",
  },
];

const PPG_CUSTOM_CRITERIA = [
  {
    icon: "beyond",
    title: "The experience goes beyond portal patterns",
    body: "Highly custom interfaces, unusual workflows or heavy interactivity.",
  },
  {
    icon: "control",
    title: "You need full control of the front end",
    body: "Design, performance and accessibility tuned down to the detail.",
  },
  {
    icon: "notTied",
    title: "You don’t want to be tied to one platform",
    body: "Your data and logic can move between back ends if your needs change.",
  },
  {
    icon: "scale",
    title: "Traffic or scale is a real concern",
    body: "Public, high-volume sites often suit a purpose-built stack.",
  },
  {
    icon: "content",
    title: "Content and marketing matter as much as data",
    body: "Search performance and editorial workflows are first-class needs.",
  },
];

const PpgComparison = () => {
  return (
    <section
      className={styles.ppgComparison}
      id="ppg-comparison"
      aria-labelledby="ppg-comparison-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Choosing the right approach</span>
          <h2 id="ppg-comparison-heading" className={styles.headline}>
            Power Pages vs{" "}
            <span className={styles.accent}>custom JavaScript development</span>
          </h2>
          <p className={styles.intro}>
            Power Pages is not always the answer, and a custom build is not
            always better. Here is how we help clients decide.
          </p>
        </header>

        <div className={styles.panels}>
          <div className={styles.panelAccent}>
            <h3 className={styles.panelTitle}>Power Pages makes sense when</h3>
            <ul className={styles.criteria}>
              {PPG_PAGES_CRITERIA.map(({ icon, title, body }) => (
                <li key={title} className={styles.criterion}>
                  <span className={styles.icon}>{CRITERIA_ICONS[icon]}</span>
                  <div>
                    <h4 className={styles.criterionTitle}>{title}</h4>
                    <p className={styles.criterionBody}>{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <span className={styles.or} aria-hidden="true">
            or
          </span>

          <div className={styles.panelLight}>
            <h3 className={styles.panelTitle}>
              A custom JavaScript app makes sense when
            </h3>
            <ul className={styles.criteria}>
              {PPG_CUSTOM_CRITERIA.map(({ icon, title, body }) => (
                <li key={title} className={styles.criterion}>
                  <span className={styles.icon}>{CRITERIA_ICONS[icon]}</span>
                  <div>
                    <h4 className={styles.criterionTitle}>{title}</h4>
                    <p className={styles.criterionBody}>{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className={styles.note}>
          We build both. For custom work we use{" "}
          <Link
            href="/services/app-and-custom-development"
            className={styles.inlineLink}
          >
            React and Next.js
          </Link>
          , with Dataverse or your existing systems behind it.
        </p>

        <div className={styles.band}>
          <span className={styles.bandArt}>
            <PpgBalanceArt />
          </span>
          <div>
            <h3 className={styles.bandTitle}>The real trade-off</h3>
            <p className={styles.bandBody}>
              Power Pages trades some flexibility for speed and lower upkeep. A
              custom build trades speed and simplicity for control. Neither is
              wrong. The right choice depends on who will run the site after
              launch and how far the design needs to go beyond standard
              patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PpgComparison;
