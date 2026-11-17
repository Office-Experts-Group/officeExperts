// /app/services/microsoft-power-platform/power-apps/(components)/PappsIntro.jsx
import Link from "next/link";

import PappsIntroSvg from "../(svgs)/PappsIntroSvg";
import {
  PappsWorkflowArt,
  PappsScreenArt,
  PappsAutomationArt,
  PappsAccuracyArt,
} from "../(svgs)/PappsIntroArt";

import styles from "@/styles/pappsIntro.module.scss";

const PAPPS_OUTCOMES = [
  {
    title: "Tailored apps streamline workflows",
    text: "Screens follow your real process, so nobody has to work around the software.",
    Art: PappsWorkflowArt,
  },
  {
    title: "User-friendly interfaces, efficient updates",
    text: "Clear forms and lists that staff pick up quickly, and changes we can make without starting again.",
    Art: PappsScreenArt,
  },
  {
    title: "Automation of manual processes",
    text: "Approvals, reminders and hand-offs run on their own once someone submits a form.",
    Art: PappsAutomationArt,
  },
  {
    title: "Enhanced accuracy, reduced errors",
    text: "Required fields and drop-downs catch mistakes when the information goes in, not weeks later.",
    Art: PappsAccuracyArt,
  },
];

const PappsIntro = () => {
  return (
    <section
      className={styles.pappsIntro}
      id="papps-intro"
      aria-labelledby="papps-intro-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="papps-intro-heading" className={styles.heading}>
            Revolutionise workflows{" "}
            <span className={styles.accent}>with tailored apps</span>
          </h2>
          <div className={styles.copy}>
            <p>
              Power Apps lets us build custom business apps around the way your
              team already works. Instead of passing spreadsheets, paper forms
              and email chains around, people open one app on a phone, tablet or
              browser, fill in what is needed and see the latest information
              straight away.
            </p>
            <p>
              Simple screens mean fewer mistakes, and quick access to current
              records helps your team make timely decisions. When a step needs
              to happen automatically, we pair the app with{" "}
              <Link href="/services/microsoft-power-platform/power-automate">
                Power Automate
              </Link>{" "}
              or wider{" "}
              <Link href="/services/business-process-automation">
                business process automation
              </Link>
              .
            </p>
          </div>
        </header>

        <figure className={styles.figure}>
          <div className={styles.diagramScroll}>
            <div className={styles.diagramInner}>
              <PappsIntroSvg />
            </div>
          </div>
          <figcaption className={styles.caption}>
            Typical starting point: forms, spreadsheets and emailed copies
            replaced by one app on top of the data you already have.
          </figcaption>
        </figure>

        <ul className={styles.outcomes}>
          {PAPPS_OUTCOMES.map(({ title, text, Art }) => (
            <li key={title} className={styles.outcome}>
              <div className={styles.outcomeArt}>
                <Art />
              </div>
              <h3 className={styles.outcomeTitle}>{title}</h3>
              <p className={styles.outcomeText}>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PappsIntro;
