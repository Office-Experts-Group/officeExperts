// /app/services/microsoft-access/is-access-right-for-your-company/(components)/IarcStrengths.jsx
import React from "react";

import styles from "@/styles/iarcStrengths.module.scss";
import {
  IarcDataManagementArt,
  IarcQueryArt,
  IarcMultiUserArt,
  IarcReportArt,
} from "../(svgs)/IarcStrengthArt";

const IARC_STRENGTHS = [
  {
    id: "data",
    title: "Data management",
    text: "Customers, jobs, stock, bookings and invoices live in one place instead of in a dozen files. Every fact is typed in once and used everywhere, so the numbers agree.",
    chips: [
      "Customers and contacts",
      "Jobs and projects",
      "Stock and orders",
      "Invoices and payments",
    ],
    Art: IarcDataManagementArt,
    tile: styles.darkTile,
    place: styles.placeData,
  },
  {
    id: "query",
    title: "Data structuring and querying",
    text: "Related tables, drop-down lists and validation keep entries clean. Queries then answer questions like “which clients haven’t ordered since March?” in seconds.",
    Art: IarcQueryArt,
    tile: styles.accentTile,
    place: styles.placeQuery,
  },
  {
    id: "users",
    title: "Multiple user management",
    text: "Several people can work on the same live records at once. We design the screens around each role, so people see what they need and nothing they don’t.",
    Art: IarcMultiUserArt,
    tile: styles.lightTile,
    place: styles.placeUsers,
  },
  {
    id: "reports",
    title: "Data reporting",
    text: "The same data becomes invoices, schedules, summaries and management reports on demand. Print them, save them as PDF or send the numbers to Excel.",
    chips: [
      "Invoices and statements",
      "Job schedules",
      "Management summaries",
      "PDF and Excel exports",
    ],
    Art: IarcReportArt,
    tile: styles.lightTile,
    place: styles.placeReports,
  },
];

const IarcStrengths = () => (
  <section
    id="iarc-strengths"
    className={styles.iarcStrengths}
    aria-labelledby="iarc-strengths-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>What Access does best</p>
        <h2 id="iarc-strengths-heading" className={styles.heading}>
          Access is a great choice for{" "}
          <span className={styles.accent}>
            data that has outgrown a spreadsheet
          </span>
        </h2>
        <p className={styles.lede}>
          Access is a desktop database built for exactly this job: lots of
          related records, entered by several people and turned into answers.
          Here is where it earns its keep.
        </p>
      </header>

      <ul className={styles.grid}>
        {IARC_STRENGTHS.map(({ id, title, text, chips, Art, tile, place }) => (
          <li key={id} className={`${styles.tile} ${tile} ${place}`}>
            <Art className={styles.art} />
            <div className={styles.copy}>
              <h3 className={styles.tileTitle}>{title}</h3>
              <p className={styles.tileText}>{text}</p>
              {chips && (
                <ul className={styles.chips}>
                  {chips.map((chip) => (
                    <li key={chip}>{chip}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default IarcStrengths;
