// /app/services/microsoft-power-platform/microsoft-power-pages/(components)/PpgHowWeWork.jsx

import Link from "next/link";
import styles from "@/styles/ppgHowWeWork.module.scss";
import {
  PpgFixedArt,
  PpgHourlyArt,
  PpgSupportArt,
  PpgTrainingArt,
} from "../(svgs)/PpgEngageArt";
import { ArrowIcon } from "../(svgs)/PpgIcons";

const PPG_ENGAGE = [
  {
    id: "fixed",
    tile: "tileFixed",
    variant: "accentTile",
    title: "Fixed-scope projects",
    body: "A defined portal, a clear deliverable and an agreed price. Best when the requirements are settled and you want certainty.",
    Art: PpgFixedArt,
  },
  {
    id: "hourly",
    tile: "tileHourly",
    variant: "darkTile",
    title: "Hourly support",
    body: "Pay as you go for changes, fixes and advice when you need them.",
    Art: PpgHourlyArt,
  },
  {
    id: "support",
    tile: "tileSupport",
    variant: "lightTile",
    title: "Ongoing support",
    body: "Someone who knows your portal on call after launch.",
    Art: PpgSupportArt,
  },
  {
    id: "training",
    tile: "tileTraining",
    variant: "midTile",
    title: "Training for your team",
    body: "Show your staff how to manage content, forms and permissions themselves, so you rely on us less over time.",
    Art: PpgTrainingArt,
  },
];

const PpgHowWeWork = () => {
  return (
    <section
      className={styles.ppgHowWeWork}
      id="ppg-how-we-work"
      aria-labelledby="ppg-how-we-work-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Working with Office Experts</span>
          <h2 id="ppg-how-we-work-heading" className={styles.headline}>
            How we work{" "}
            <span className={styles.accent}>with you on Power Pages</span>
          </h2>
          <p className={styles.intro}>
            Office Experts Group is an Australian team that builds and supports
            Microsoft solutions. You can engage us in whichever way fits, and
            change it later. Our{" "}
            <Link
              href="/microsoft-support-and-training-australia"
              className={styles.inlineLink}
            >
              Microsoft support and training
            </Link>{" "}
            covers the day-to-day after launch.
          </p>
        </header>

        <ul className={styles.grid}>
          {PPG_ENGAGE.map(({ id, tile, variant, title, body, Art }) => (
            <li
              key={id}
              className={`${styles.tile} ${styles[tile]} ${styles[variant]}`}
            >
              <span className={styles.art}>
                <Art />
              </span>
              <h3 className={styles.tileTitle}>{title}</h3>
              <p className={styles.tileBody}>{body}</p>
            </li>
          ))}
        </ul>

        <Link href="#contact" className={styles.arrowLink}>
          Talk to us about your portal
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
};

export default PpgHowWeWork;
