// /app/services/microsoft-power-platform/(components)/PphNeeds.jsx
// Decision aid: start from the problem, land on the right service page.
// Two staggered columns of whole-tile links on a dark background.
import Link from "next/link";

import styles from "@/styles/pphNeeds.module.scss";

import { PphArrowIcon } from "../(svgs)/PphIcons";
import {
  PphNeedAppArt,
  PphNeedBiArt,
  PphNeedMigrateArt,
  PphNeedConnectArt,
  PphNeedPortalArt,
  PphNeedAiArt,
} from "../(svgs)/PphNeedsArt";

const PPH_NEEDS = [
  {
    id: "app",
    want: "Replace spreadsheets and email chains with a proper business app",
    tool: "Power Apps development",
    href: "/services/microsoft-power-platform/microsoft-power-apps",
    Art: PphNeedAppArt,
  },
  {
    id: "bi",
    want: "See my sales, finance or operations figures clearly in one dashboard",
    tool: "Power BI consulting",
    href: "/services/microsoft-power-platform/microsoft-power-bi",
    Art: PphNeedBiArt,
  },
  {
    id: "migrate",
    want: "Move heavy Excel reporting into something faster and easier to share",
    tool: "Excel to Power BI migration",
    href: "/services/microsoft-power-platform/excel-to-power-bi-migration",
    Art: PphNeedMigrateArt,
  },
  {
    id: "connect",
    want: "Stop re-keying data and chasing approvals between systems",
    tool: "Power Automate workflows",
    href: "/services/microsoft-power-platform/microsoft-power-automate",
    Art: PphNeedConnectArt,
  },
  {
    id: "portal",
    want: "Give customers or partners a secure place to sign in and self-serve",
    tool: "Power Pages portals",
    href: "/services/microsoft-power-platform/microsoft-power-pages",
    Art: PphNeedPortalArt,
  },
  {
    id: "ai",
    want: "Add AI to a business process without losing control of our data",
    tool: "AI with Power Platform",
    href: "/services/microsoft-power-platform/ai-integrations",
    Art: PphNeedAiArt,
  },
];

const Tile = ({ need }) => (
  <li className={styles.tile}>
    <div className={styles.tileArt}>
      <need.Art />
    </div>
    <div className={styles.tileBody}>
      <p className={styles.want}>I want to…</p>
      <p className={styles.statement}>{need.want}</p>
      <Link href={need.href} className={styles.tileLink}>
        {need.tool} <PphArrowIcon />
      </Link>
    </div>
  </li>
);

const PphNeeds = () => (
  <section
    id="pph-needs"
    className={styles.pphNeeds}
    aria-labelledby="pph-needs-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Not sure where to start?</p>
        <h2 id="pph-needs-heading" className={styles.heading}>
          Which tool <span className={styles.accent}>fits the job?</span>
        </h2>
        <p className={styles.lede}>
          Start with the problem, not the product. These are the most common
          reasons people call us, and where each one leads.
        </p>
      </header>

      <div className={styles.columns}>
        <ul className={styles.column}>
          {PPH_NEEDS.filter((_, i) => i % 2 === 0).map((need) => (
            <Tile key={need.id} need={need} />
          ))}
        </ul>
        <ul className={`${styles.column} ${styles.columnOffset}`}>
          {PPH_NEEDS.filter((_, i) => i % 2 === 1).map((need) => (
            <Tile key={need.id} need={need} />
          ))}
        </ul>
      </div>

      <p className={styles.note}>
        Already have a solution that needs attention? Our{" "}
        <Link href="/services/microsoft-power-platform/power-platform-support">
          Power Platform support
        </Link>{" "}
        team can fix, extend or take over what you have, or{" "}
        <a href="#contact">talk to us</a> and we’ll point you to the right
        starting place.
      </p>
    </div>
  </section>
);

export default PphNeeds;
