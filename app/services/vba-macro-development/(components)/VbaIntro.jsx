// /services/vba-macro-development/(components)/VbaIntro.jsx
// Server component. First section under the page hero, so it carries no client JavaScript.
import Link from "next/link";

// Standalone SVGs live in the route's (svgs) folder
import { VbaEditorSvg } from "../(svgs)/VbaEditorSvg";
import { VbaArrowSvg } from "../(svgs)/VbaArrowSvg";

import styles from "@/styles/vbaIntro.module.scss";

// Quick links to the sections further down the page
const jumpLinks = [
  { href: "#apps", label: "By application" },
  { href: "#capabilities", label: "What we build" },
  { href: "#which-tool", label: "VBA or Office Scripts?" },
  { href: "#upgrades", label: "Upgrades and fixes" },
  { href: "#add-ins", label: "Add-ins" },
  { href: "#faq", label: "FAQ" },
];

const VbaIntro = () => (
  <section className={styles.section} id="vba">
    <div className={styles.inner}>
      <div className={styles.text}>
        <span className={styles.eyebrow}>VBA Macro Development</span>
        <h2 className={styles.heading}>
          Custom code for the{" "}
          <span className={styles.accent}>jobs Office can&apos;t do alone.</span>
        </h2>

        <div className={styles.body}>
          <p>
            Every desktop Microsoft Office application comes with a powerful
            built-in programming language called Visual Basic for Applications,
            or VBA. Whichever Office product your team works in, our highly
            experienced VBA programmers are ready to build the solution that
            takes your business to the next level.
          </p>
          <p>
            Macros let us automate repetitive work, validate what your staff
            enter, and link your Office files to databases, websites and
            third-party products. VBA runs on the Office you already have, with
            no extra licence, hosting or software to buy.
          </p>
          <p>
            From a simple recorded macro to a system that ties Excel, Word,
            Access and Outlook to your databases and APIs, we cover the full
            range. This page is your starting point for all of it.
          </p>
        </div>

        <div className={styles.ctaRow}>
          <Link href="#contact" className="btn">
            Discuss your project
          </Link>
          <Link href="#apps" className={styles.ctaSecondary}>
            See what we build
            <VbaArrowSvg />
          </Link>
        </div>

        <ul className={styles.stats}>
          <li className={styles.stat}>
            <span className={styles.statNum}>2000</span>
            <span className={styles.statLabel}>Established</span>
          </li>
          <li className={styles.stat}>
            <span className={styles.statNum}>25+</span>
            <span className={styles.statLabel}>Consultants nationwide</span>
          </li>
          <li className={styles.stat}>
            <span className={styles.statNum}>AU-wide</span>
            <span className={styles.statLabel}>Remote and on-site</span>
          </li>
        </ul>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <VbaEditorSvg />
      </div>
    </div>

    <nav className={styles.jump} aria-label="On this page">
      <span className={styles.jumpLabel}>On this page</span>
      {jumpLinks.map(({ href, label }) => (
        <Link key={href} href={href} className={styles.chip}>
          {label}
        </Link>
      ))}
    </nav>
  </section>
);

export default VbaIntro;
