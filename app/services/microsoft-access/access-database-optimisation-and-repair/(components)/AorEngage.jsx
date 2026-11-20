// /app/services/microsoft-access/access-database-optimisation-and-repair/(components)/AorEngage.jsx
import React from "react";
import Link from "next/link";

import {
  AorEscalationArt,
  AorRescueArt,
  AorTuneUpArt,
  AorCareArt,
} from "../(svgs)/AorEngageArt";
import { ArrowIcon, PhoneIcon } from "../(svgs)/AorIcons";

import styles from "@/styles/aorEngage.module.scss";

const AOR_WAYS = [
  {
    key: "rescue",
    title: "Emergency repair and recovery",
    text: "Database won’t open, throws errors or has lost objects? We work on a copy, recover as much as we can and get you running again.",
    Art: AorRescueArt,
  },
  {
    key: "tuneup",
    title: "Health check and tune-up",
    text: "A review of your slow database that ends with a clear, prioritised list of fixes. You choose which ones go ahead.",
    Art: AorTuneUpArt,
  },
  {
    key: "care",
    title: "Ongoing care",
    text: "Scheduled compact and repair, backups, index upkeep and growth checks, so small problems get caught early.",
    Art: AorCareArt,
    link: {
      href: "/microsoft-support-and-training-australia",
      label: "Help and training",
    },
  },
];

const AorEngage = () => {
  return (
    <section
      id="aor-engage"
      className={styles.aorEngage}
      aria-labelledby="aor-engage-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Don’t let problems escalate</p>
          <h2 id="aor-engage-heading" className={styles.heading}>
            Is your database{" "}
            <span className={styles.accent}>sending warning signs?</span>
          </h2>
          <p className={styles.text}>
            Database performance problems rarely fix themselves. A small
            annoyance often grows into lost time, risk to your data and
            frustrated users. Spotting the signs early and acting on them heads
            off costly downtime and emergency repairs.
          </p>
        </header>

        <div className={styles.layout}>
          <div className={styles.warnTile}>
            <h3 className={styles.warnTitle}>
              The longer you wait, the worse it gets
            </h3>
            <p className={styles.warnText}>
              Small slowdowns compound. A database that is merely slow today can
              become unusable tomorrow, and corruption that starts as the odd
              error can end in serious data loss. Early help is nearly always
              cheaper than emergency recovery.
            </p>
            <div className={styles.warnActions}>
              <Link href="#contact" className="btn">
                Request a consultation
              </Link>
              <Link href="tel:1300102810" className={styles.phoneLink}>
                <PhoneIcon /> Call 1300 102 810
              </Link>
            </div>
            <div className={styles.warnArt}>
              <AorEscalationArt />
            </div>
          </div>

          <div className={styles.ways}>
            <p className={styles.waysLede}>
              Our database specialists have restored hundreds of struggling
              Access databases across Australia. We diagnose the problem, give
              you clear recommendations and put in place fixes you can measure.
            </p>
            <ul className={styles.waysList}>
              {AOR_WAYS.map(({ key, title, text, Art, link }) => (
                <li key={key} className={styles.way}>
                  <div className={styles.wayArt}>
                    <Art />
                  </div>
                  <div className={styles.wayBody}>
                    <h3 className={styles.wayTitle}>{title}</h3>
                    <p className={styles.wayText}>{text}</p>
                    {link && (
                      <Link href={link.href} className={styles.arrowLink}>
                        {link.label} <ArrowIcon />
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AorEngage;
