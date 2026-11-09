// /services/add-in-creation/(components)/AddInMigration.jsx
// For businesses that already have an add-in that is failing, unsupported or out of date.
import React from "react";
import Link from "next/link";

import { AddInMigrationSvg } from "../(svgs)/AddInMigrationSvg";
import { ArrowIcon } from "../(svgs)/ArrowIcon";

import styles from "@/styles/addInMigration.module.scss";

const signs = [
  "The add-in is disabled or crashes after an Office update",
  "A COM or VSTO add-in will not run in the new Outlook on Windows, on Mac or on the web",
  "The developer has left and nobody holds the source code",
  "Macros in a shared workbook have outgrown the file they live in",
];

const AddInMigration = () => {
  return (
    <section className={styles.section} id="existing-add-ins">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Existing add-ins</span>
          <h2 className={styles.heading}>
            Is an old add-in{" "}
            <span className={styles.accent}>holding you back?</span>
          </h2>
          <p className={styles.lead}>
            Many businesses rely on an add-in that was written years ago, often
            by someone who has since moved on. It works until Office updates, a
            new PC arrives or IT moves to the new Outlook.
          </p>
          <p className={styles.body}>
            We can review an existing add-in, repair it, or rebuild it on a
            platform Microsoft still supports. Where the source code is missing,
            we document what the add-in does first, so nothing your team
            depends on is lost along the way.
          </p>

          <h3 className={styles.signsTitle}>Signs it is time to review</h3>
          <ul className={styles.signs}>
            {signs.map((sign) => (
              <li key={sign}>{sign}</li>
            ))}
          </ul>

          <div className={styles.links}>
            <Link href="/services/upgrades-and-migration" className={styles.link}>
              Upgrades and migration
              <ArrowIcon />
            </Link>
            <Link
              href="/services/activex-vbscript-migration"
              className={styles.link}
            >
              ActiveX and VBScript migration
              <ArrowIcon />
            </Link>
            <Link href="/services/vba-macro-development" className={styles.link}>
              VBA and macro development
              <ArrowIcon />
            </Link>
          </div>

          <Link href="#contact" className="btn">
            Talk about your existing add-in
          </Link>
        </div>

        <div className={styles.visual}>
          <AddInMigrationSvg />
        </div>
      </div>
    </section>
  );
};

export default AddInMigration;
