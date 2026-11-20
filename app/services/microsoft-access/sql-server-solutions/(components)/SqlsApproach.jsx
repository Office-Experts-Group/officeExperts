// /app/services/microsoft-access/sql-server-solutions/(components)/SqlsApproach.jsx
import React from "react";
import Link from "next/link";

import styles from "@/styles/sqlsApproach.module.scss";
import {
  SqlsOnsiteArt,
  SqlsRemoteArt,
  SqlsSupportArt,
} from "../(svgs)/SqlsApproachArt";
import { SqlsArrowIcon } from "../(svgs)/SqlsIcons";

const SQLS_WAYS = [
  {
    title: "Remote migration",
    text: "Most of the work happens remotely, so we can support clients anywhere in Australia and New Zealand.",
    Art: SqlsRemoteArt,
  },
  {
    title: "On-site help",
    text: "On-site support is available when required, bringing our experience into your office for personalised training and development.",
    Art: SqlsOnsiteArt,
    link: { label: "Find a consultant near you", href: "/locations" },
  },
  {
    title: "Ongoing support",
    text: "Once you are live we can keep an eye on the database, tune it as it grows and help your team with questions.",
    Art: SqlsSupportArt,
    link: {
      label: "Support and training",
      href: "/microsoft-support-and-training-australia",
    },
  },
];

const SqlsApproach = () => (
  <section
    id="sqls-approach"
    className={styles.sqlsApproach}
    aria-labelledby="sqls-approach-heading"
  >
    <div className={styles.inner}>
      <div className={styles.copy}>
        <span className={styles.eyebrow}>Good to know</span>
        <h2 id="sqls-approach-heading" className={styles.title}>
          National reach. <span className={styles.accent}>Local presence.</span>
        </h2>
        <p>
          Beginning in 2000 from a small office in Northern New South Wales,{" "}
          <Link href="/about-us">Office Experts Group</Link> has grown into a
          team of over 25 consultants located in nearly every major city across
          Australia. We now work with clients ranging from small rural
          businesses to government organisations and multinational corporations.
        </p>
        <p>
          The nature of our industry lets us provide support and solutions
          remotely, so we can service clients anywhere in Australia and New
          Zealand.
        </p>
        <a href="#contact" className="btn">
          Talk to our team
        </a>
      </div>

      <ul className={styles.ways}>
        {SQLS_WAYS.map(({ title, text, Art, link }) => (
          <li key={title} className={styles.way}>
            <Art className={styles.art} />
            <div>
              <h3 className={styles.wayTitle}>{title}</h3>
              <p className={styles.wayText}>{text}</p>
              {link && (
                <Link href={link.href} className={styles.wayLink}>
                  {link.label} <SqlsArrowIcon />
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default SqlsApproach;
