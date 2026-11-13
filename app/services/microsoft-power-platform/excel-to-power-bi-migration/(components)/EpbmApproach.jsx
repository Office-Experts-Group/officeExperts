// /app/services/microsoft-power-platform/excel-to-power-bi-migration/(components)/EpbmApproach.jsx

import Link from "next/link";

import {
  EpbmFullMigrationArt,
  EpbmHybridArt,
  EpbmOngoingSupportArt,
} from "../(svgs)/EpbmApproachArt";
import { EpbmArrowIcon } from "../(svgs)/EpbmIcons";

import styles from "@/styles/epbmApproach.module.scss";

// tile: background of the art tile ("accentTile" or "darkTile")
const EPBM_APPROACH_OPTIONS = [
  {
    Art: EpbmFullMigrationArt,
    tile: "accentTile",
    title: "Full migration",
    text: "Move your reporting into Power BI end to end, and retire the spreadsheets that no longer fit.",
  },
  {
    Art: EpbmHybridArt,
    tile: "darkTile",
    title: "Hybrid setup",
    text: "Keep Excel where your team likes working in it, and use Power BI for shared, always-current reporting.",
  },
  {
    Art: EpbmOngoingSupportArt,
    tile: "darkTile",
    title: "Ongoing support",
    text: "Already using Power BI? We tune, extend and support what you have.",
  },
];

const EpbmApproach = () => (
  <section
    id="epbm-approach"
    className={styles.epbmApproach}
    aria-labelledby="epbm-approach-heading"
  >
    <div className={styles.inner}>
      <div className={styles.text}>
        <span className={styles.eyebrow}>Office Experts Group</span>
        <h2 id="epbm-approach-heading" className={styles.title}>
          Experts across the entire{" "}
          <span className={styles.accent}>Microsoft suite</span>
        </h2>
        <p>
          Every business is different. Some teams still rely heavily on Excel,
          while others are ready for everything Power BI can do. We advise on
          the whole Microsoft suite, so whether you need a full migration, a
          hybrid setup or ongoing support, the solution fits how you actually
          work.
        </p>
        <p>
          Our cross-platform experience means we don’t just move your data, we
          help you get more out of it. With more than 25 years supporting
          Australian businesses, we’ll make sure your reporting is faster,
          clearer and ready for what comes next.
        </p>
        <Link href="/services/microsoft-power-platform" className={styles.link}>
          Explore our Power Platform services <EpbmArrowIcon />
        </Link>
      </div>

      <div>
        <h3 className={styles.optionsTitle}>Three ways to make the move</h3>
        <ul className={styles.options}>
          {EPBM_APPROACH_OPTIONS.map(({ Art, tile, title, text }) => (
            <li key={title} className={styles.option}>
              <span className={`${styles.optionArt} ${styles[tile]}`}>
                <Art />
              </span>
              <div>
                <h4 className={styles.optionTitle}>{title}</h4>
                <p className={styles.optionText}>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default EpbmApproach;
