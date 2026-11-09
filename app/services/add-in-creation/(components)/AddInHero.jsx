// /services/add-in-creation/(components)/AddInHero.jsx
// Opening block under the page hero: what an add-in is, why a business would want one, and the main call to action.
import React from "react";
import Link from "next/link";

import { AddInHeroSvg } from "../(svgs)/AddInHeroSvg";
import { ArrowIcon } from "../(svgs)/ArrowIcon";

import styles from "@/styles/addInHero.module.scss";

const AddInHero = () => {
  return (
    <>
      <div className={styles.heroPad}></div>
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.copy}>
            <span className={styles.eyebrow}>Why use add-ins?</span>
            <h1 className={styles.heading}>
              Add functionality to{" "}
              <span className={styles.accent}>Excel, Word, Outlook</span> and
              the rest of Microsoft 365
            </h1>
            <p className={styles.lead}>
              An add-in puts your own buttons, panels and automation inside the
              Microsoft apps your staff already use, so a repetitive job becomes
              one click on the ribbon.
            </p>
            <p className={styles.body}>
              Add-ins extend Office products and make new functionality
              available to all of your staff, documents and workbooks. They suit
              tasks you repeat across many files, and they can connect Office to
              the other systems your business runs on. Every project starts with{" "}
              <Link href="/services/business-analysis">business analysis</Link>,
              so we build what your people actually need.
            </p>

            <ul className={styles.points}>
              <li>Installed once, available in every document and workbook</li>
              <li>The same tools for every person on the team</li>
              <li>Live links to your data, with your rules built in</li>
            </ul>

            <div className={styles.actions}>
              <Link href="#contact" className="btn">
                Discuss your add-in
              </Link>
              <Link href="#platforms" className={styles.link}>
                See the platforms we cover
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className={styles.visual}>
            <AddInHeroSvg />
          </div>
        </div>
      </section>
    </>
  );
};

export default AddInHero;
