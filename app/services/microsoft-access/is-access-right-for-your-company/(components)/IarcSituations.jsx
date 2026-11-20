// /app/services/microsoft-access/is-access-right-for-your-company/(components)/IarcSituations.jsx
import React from "react";
import Link from "next/link";

import styles from "@/styles/iarcSituations.module.scss";
import {
  IarcSituationOfficeArt,
  IarcSituationRemoteArt,
  IarcSituationSheetArt,
  IarcSituationPortalArt,
} from "../(svgs)/IarcSituationArt";
import { IarcArrowIcon } from "../(svgs)/IarcIcons";

const IARC_SITUATIONS = [
  {
    id: "office",
    tab: "A small team in one office",
    verdict: "Access is very likely a good fit",
    looks:
      "A modest team on the same network, all working from the same jobs, quotes, clients or stock lists every day.",
    suggest:
      "A split Access database: one shared file for the data, a front end on each desk and a regular backup. Quick to build and easy for your team to run.",
    watch:
      "Keep the data file on a reliable shared drive, and keep a backup that someone has actually tested.",
    Art: IarcSituationOfficeArt,
    link: {
      href: "/services/database-development-and-solutions",
      text: "Custom Access database development",
    },
  },
  {
    id: "remote",
    tab: "Staff in several places",
    verdict: "Access, with the data on a server",
    looks:
      "People working from home, on other sites or on the road, often over a VPN or a remote desktop.",
    suggest:
      "Keep the Access screens and move the data to SQL Server or Azure. Remote staff get a steadier experience than with a shared file over a slow link.",
    watch:
      "Access files shared over slow or patchy connections are more prone to slowdowns and damage. A server database avoids most of that.",
    Art: IarcSituationRemoteArt,
    link: {
      href: "/services/sql-server-and-access-integration",
      text: "Access with SQL Server",
    },
  },
  {
    id: "sheet",
    tab: "Outgrowing spreadsheets",
    verdict: "A strong candidate for Access",
    looks:
      "One big workbook, many copies, formulas nobody dares touch and a file that takes ages to open.",
    suggest:
      "Move the records into Access, where each fact is stored once. Keep Excel for analysis and charts, and link the two so nothing gets retyped.",
    watch:
      "Moving the data across is the careful part. Messy columns need cleaning first, and people need a simple way to enter new records.",
    Art: IarcSituationSheetArt,
    link: { href: "/services/microsoft-excel", text: "Excel consulting" },
  },
  {
    id: "portal",
    tab: "Customers or partners need to log in",
    verdict: "Probably a web or Power Platform app",
    looks:
      "Customers, suppliers or contractors who need to see or enter their own information, from any device.",
    suggest:
      "Build a web app or a Power Apps portal for the outside users. Access can stay as the back-office tool for your own team if it still suits.",
    watch:
      "Anything public needs proper security from day one. Access on its own isn’t designed to be exposed to the internet.",
    Art: IarcSituationPortalArt,
    link: {
      href: "/services/online-solutions",
      text: "Web and online solutions",
    },
  },
];

const IarcSituations = () => (
  <section
    id="iarc-situations"
    className={styles.iarcSituations}
    aria-labelledby="iarc-situations-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Which one is you?</p>
        <h2 id="iarc-situations-heading" className={styles.heading}>
          Which of these{" "}
          <span className={styles.accent}>sounds like your business?</span>
        </h2>
        <p className={styles.lede}>
          Pick the description closest to your situation and we will show you
          what we would usually suggest, and what to watch out for.
        </p>
      </header>

      <div
        className={styles.tabs}
        role="radiogroup"
        aria-label="Choose the situation that sounds most like your business"
      >
        {IARC_SITUATIONS.map(({ id }, i) => (
          <input
            key={id}
            type="radio"
            name="iarc-situation"
            id={`iarc-situation-${id}`}
            className={styles[`radio${i + 1}`]}
            defaultChecked={i === 0}
          />
        ))}

        <div className={styles.tabList}>
          {IARC_SITUATIONS.map(({ id, tab }, i) => (
            <label
              key={id}
              htmlFor={`iarc-situation-${id}`}
              className={`${styles.tab} ${styles[`tab${i + 1}`]}`}
            >
              {tab}
            </label>
          ))}
        </div>

        <div className={styles.panels}>
          {IARC_SITUATIONS.map(
            ({ id, verdict, looks, suggest, watch, Art, link }, i) => (
              <article
                key={id}
                className={`${styles.panel} ${styles[`panel${i + 1}`]}`}
              >
                <Art className={styles.art} />
                <div className={styles.panelCopy}>
                  <p className={styles.verdict}>{verdict}</p>
                  <div className={styles.blocks}>
                    <div>
                      <p className={styles.blockLabel}>What it looks like</p>
                      <p className={styles.blockText}>{looks}</p>
                    </div>
                    <div>
                      <p className={styles.blockLabel}>What we would suggest</p>
                      <p className={styles.blockText}>{suggest}</p>
                    </div>
                    <div>
                      <p className={styles.blockLabel}>Watch out for</p>
                      <p className={styles.blockText}>{watch}</p>
                    </div>
                  </div>
                  <Link href={link.href} className={styles.panelLink}>
                    {link.text}
                    <IarcArrowIcon />
                  </Link>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </div>
  </section>
);

export default IarcSituations;
