// /services/microsoft-word/companies-and-organisations/(components)/CompaniesSolution.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import { TemplateTreeSvg } from "../(svgs)/TemplateTreeSvg";

import styles from "@/styles/companiesSolution.module.scss";

// What the solution is made of, drawn from the copy on this page
const parts = [
  "Corporate master template",
  "In-house sub templates",
  "Brand controls built in",
];

const CompaniesSolution = () => (
  // id is the target of the jump links in CompaniesIntro
  <section className={styles.section} id="template-solutions">
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Template</p>
          <h2 className={styles.heading}>
            The Solution <span className={styles.headingAccent}>You Need!</span>
          </h2>
          <p className={styles.body}>
            Office Experts Group have developed an advanced{" "}
            <Link href="/services/microsoft-word/corporate-global-template-solution">
              Corporate Word Template Solution
            </Link>{" "}
            to enable users to effectively and efficiently create corporate
            documents in house. These documents are created under a controlled
            environment, therefore only allowing formatting that is consistent
            to your branding guidelines.
          </p>
          <ul className={styles.parts}>
            {parts.map((part) => (
              <li key={part} className={styles.part}>
                {part}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.art}>
          <TemplateTreeSvg />
        </div>
      </div>
    </AnimateOnScroll>
  </section>
);

export default CompaniesSolution;
