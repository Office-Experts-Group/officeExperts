// /services/vba-macro-development/(components)/VbaUpgrades.jsx
// Server component. A before/after code panel on the left, the most common causes of broken macros on the right.
// Dates and version details come from Microsoft's published lifecycle and VBA documentation.
import Link from "next/link";

import { VbaArrowSvg } from "../(svgs)/VbaArrowSvg";

import styles from "@/styles/vbaUpgrades.module.scss";

// Each cause renders as a card. `link` is optional.
const causes = [
  {
    tag: "64-bit Office",
    title: "Declare statements and ActiveX controls",
    text: "Code written for 32-bit Office calls Windows in ways 64-bit Office rejects. 64-bit has been the default install since Office 2019 and Microsoft 365, and legacy ActiveX controls are a common blocker too.",
    link: {
      href: "/services/activex-vbscript-migration",
      label: "ActiveX and VBScript migration",
    },
  },
  {
    tag: "VBScript",
    title: "Windows is retiring VBScript",
    text: "Macros that run external .vbs files or use the VBScript RegExp library need attention. Microsoft 365 version 2508 added a built-in RegExp class so the library is no longer needed, but older builds need a different fix.",
  },
  {
    tag: "Security",
    title: "Macros blocked from the internet",
    text: "Since 2022, Office on Windows blocks macros in files that arrive from the internet or as email attachments, with no Enable button. The file has to be unblocked, kept in a Trusted Location, or signed by a trusted publisher.",
  },
  {
    tag: "Outlook",
    title: "The new Outlook doesn't run VBA",
    text: "VBA and COM add-ins aren't supported in the new Outlook for Windows. Classic Outlook keeps working, and we can move the logic to Power Automate, Microsoft Graph or a web add-in when you're ready.",
  },
  {
    tag: "Support dates",
    title: "Older Office versions are out of support",
    text: "Office 2016 and 2019 reached end of support on 14 October 2025, and Office 2021 followed on 13 October 2026. Office 2024 and LTSC 2024 are supported until October 2029. An upgrade is the right time to review your macros.",
    link: {
      href: "/services/upgrades-and-migration",
      label: "Upgrades and migration",
    },
  },
];

const VbaUpgrades = () => (
  <section className={styles.section} id="upgrades">
    <div className={styles.inner}>
      <div className={styles.left}>
        <span className={styles.eyebrow}>Upgrades and compatibility</span>
        <h2 className={styles.heading}>
          Macros failing after an{" "}
          <span className={styles.accent}>Office upgrade?</span>
        </h2>
        <p className={styles.lede}>
          This is one of the calls we get most often. Macros that ran for years
          stop working after a move to 64-bit Office, Microsoft 365 or a new PC.
          The cause is nearly always one of a handful of known issues, and each
          one has a fix.
        </p>

        <figure className={styles.figure}>
          <pre className={styles.code}>
            <code>
              <span className={styles.comment}>
                {"' Before: fails on 64-bit Office"}
              </span>
              <span className={`${styles.line} ${styles.removed}`}>
                {'Declare Function GetActiveWindow Lib "user32" () As Long'}
              </span>
              <span className={styles.comment}>
                {"' After: runs on 32-bit and 64-bit Office"}
              </span>
              <span className={`${styles.line} ${styles.added}`}>
                {'Declare PtrSafe Function GetActiveWindow Lib "user32" () As LongPtr'}
              </span>
            </code>
          </pre>
          <figcaption className={styles.caption}>
            Every Windows API call in older code needs <code>PtrSafe</code> and{" "}
            <code>LongPtr</code> to run on 64-bit Office, and each one has to be
            found and checked by hand.
          </figcaption>
        </figure>

        <Link href="#contact" className="btn">
          Get your macros reviewed
        </Link>
      </div>

      <div className={styles.right}>
        {causes.map(({ tag, title, text, link }) => (
          <article key={tag} className={styles.card}>
            <span className={styles.tag}>{tag}</span>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardText}>{text}</p>
            {link && (
              <Link href={link.href} className={styles.cardLink}>
                {link.label}
                <VbaArrowSvg />
              </Link>
            )}
          </article>
        ))}
        <p className={styles.note}>
          Support dates are from Microsoft&apos;s published lifecycle
          information. Check Microsoft&apos;s site for your exact edition.
        </p>
      </div>
    </div>
  </section>
);

export default VbaUpgrades;
