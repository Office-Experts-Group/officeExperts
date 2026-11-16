// /app/services/microsoft-power-platform/power-automate/(components)/PautoIntro.jsx
import React from "react";

import {
  PautoIntroMoveCell,
  PautoIntroReadCell,
  PautoIntroWatchCell,
} from "../(svgs)/PautoIntroCells";
import {
  PautoRekeyArt,
  PautoStallArt,
  PautoPaperArt,
  PautoInboxArt,
} from "../(svgs)/PautoSignArt";

import styles from "@/styles/pautoIntro.module.scss";

const PAUTO_SIGNS = [
  {
    Art: PautoRekeyArt,
    title: "Re-keying between systems",
    text: "Someone copies figures from one system into another, every week.",
  },
  {
    Art: PautoStallArt,
    title: "Approvals that stall",
    text: "Requests sit in inboxes until somebody chases them.",
  },
  {
    Art: PautoPaperArt,
    title: "Documents as pictures",
    text: "Invoices and forms land as PDFs, scans and phone photos.",
  },
  {
    Art: PautoInboxArt,
    title: "An inbox that needs a minder",
    text: "A shared mailbox needs a person to sort it every single day.",
  },
];

const PautoIntro = () => (
  <section
    id="pauto-intro"
    className={styles.pautoIntro}
    aria-labelledby="pauto-intro-heading"
  >
    <div className={styles.top}>
      <div className={styles.copy}>
        <span className={styles.eyebrow}>What’s changed</span>
        <h2 id="pauto-intro-heading" className={styles.heading}>
          Power Automate has evolved.{" "}
          <span className={styles.accent}>Are you keeping up?</span>
        </h2>
        <p className={styles.body}>
          Power Automate has always been the fastest way to connect your
          Microsoft stack. Approvals, notifications, data sync and SharePoint
          triggers, to name a few. That foundation has not changed. What{" "}
          <em>has</em> changed is the ceiling. Flows can now read documents,
          classify emails and, with Copilot Studio, monitor your systems around
          the clock without a trigger.
        </p>
        <p className={styles.body}>
          We have been building with Microsoft technologies for over 25 years,
          and we have helped thousands of Australian businesses upgrade, migrate
          and streamline their day to day work. Our consultants guide you
          through the many integrations and applications in the Microsoft
          ecosystem, and tell you honestly when a simple flow is all you need.
        </p>
      </div>

      <ol
        className={styles.cells}
        aria-label="Three steps of Power Automate, from reactive to proactive"
      >
        <li>
          <PautoIntroMoveCell />
        </li>
        <li>
          <PautoIntroReadCell />
        </li>
        <li>
          <PautoIntroWatchCell />
        </li>
      </ol>
    </div>

    <div className={styles.signs}>
      <h3 id="pauto-signs-heading" className={styles.signsHeading}>
        Signs it’s time to automate
      </h3>
      <ul className={styles.signList} aria-labelledby="pauto-signs-heading">
        {PAUTO_SIGNS.map(({ Art, title, text }) => (
          <li key={title} className={styles.sign}>
            <div className={styles.signArt}>
              <Art />
            </div>
            <h4 className={styles.signTitle}>{title}</h4>
            <p className={styles.signText}>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default PautoIntro;
