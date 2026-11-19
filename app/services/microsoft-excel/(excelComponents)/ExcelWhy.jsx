// /app/services/microsoft-excel/(components)/ExcelWhy.jsx
// Why Office Experts for Excel: a dark bento ending in a solid accent CTA
// tile. Heading keeps "We deliver the best quality" from the old home page.

import Link from "next/link";

import styles from "@/styles/excelWhy.module.scss";

import {
  GroupArt,
  HistoryArt,
  SeniorArt,
  SupportArt,
} from "../(svgs)/ExcelWhyArt";
import { ArrowIcon } from "../(svgs)/ExcelIcons";

const ExcelWhy = () => {
  // DOM order sets the bento: three tiles on top, then a wide tile and the CTA
  const reasons = [
    {
      title: "Senior Australian developers",
      text: "Every Excel developer on our team has at least 15 years’ experience, so nobody is learning on your file.",
      art: <SeniorArt />,
      tone: styles.surfaceTile,
    },
    {
      title: "Over 25 years of Excel work",
      text: "We’ve been building Excel solutions through every version of Office, so old workbooks and new features are both familiar ground.",
      art: <HistoryArt />,
      tone: styles.midTile,
    },
    {
      title: "Support after go-live",
      text: "Training for your team, changes when your business changes, and help whenever something needs a second look.",
      art: <SupportArt />,
      tone: styles.surfaceTile,
    },
    {
      title: "One team for the whole Microsoft stack",
      text: "We’re part of the Office Experts Group, so Word, Access, Power BI and Power Apps specialists are on hand when your Excel work needs to connect to more.",
      art: <GroupArt />,
      tone: styles.midTile,
      wide: true,
      link: { href: "/services", text: "All Office Experts services" },
    },
  ];

  return (
    <section
      id="excel-why"
      className={styles.excelWhy}
      aria-labelledby="excel-why-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Why Office Experts</span>
          <h2 id="excel-why-heading" className={styles.heading}>
            We deliver <span className={styles.accent}>the best quality</span>
          </h2>
          <p className={styles.lead}>
            We’re a team of experienced Microsoft professionals who care about
            getting the details right. Here’s what that means when you bring us
            an Excel problem.
          </p>
        </header>

        <ul className={styles.grid}>
          {reasons.map((reason) => (
            <li
              key={reason.title}
              className={`${styles.tile} ${reason.tone} ${reason.wide ? styles.wide : ""}`}
            >
              <div className={styles.art}>{reason.art}</div>
              <div className={styles.body}>
                <h3 className={styles.title}>{reason.title}</h3>
                <p className={styles.text}>{reason.text}</p>
                {reason.link && (
                  <Link href={reason.link.href} className={styles.tileLink}>
                    {reason.link.text} <ArrowIcon />
                  </Link>
                )}
              </div>
            </li>
          ))}

          <li className={`${styles.tile} ${styles.ctaTile}`}>
            <h3 className={styles.ctaTitle}>Not sure where to start?</h3>
            <p className={styles.ctaText}>
              Tell us what your workbook does today and what you’d like it to
              do. We’ll give you straight advice on the best way forward.
            </p>
            <a href="#contact" className={`btn ${styles.ctaBtn}`}>
              Book a free consultation
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExcelWhy;
