// app/government-departments/(components)/GovDeptIntro.jsx

import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import { DepartmentIcon } from "../(svgs)/DepartmentIcon";

import styles from "../../../styles/govDeptIntro.module.css";

const GovDeptIntro = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ── Left: custom SVG, replaces the previous stock photo ── */}
        <AnimateOnScroll animation="slide-left" duration={1}>
          <div className={styles.iconWrap}>
            <DepartmentIcon />
          </div>
        </AnimateOnScroll>

        {/* ── Right: positioning copy ── */}
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>
              Public Sector Document Solutions
            </span>
            <h2 className={styles.heading}>
              How do Word Experts support{" "}
              <span className={styles.accent}>government departments?</span>
            </h2>
            <p>
              Our team of Word programmers and designers have worked with state
              and federal government departments for over 25 years. We pride
              ourselves on building accessible document templates that cater for
              potentially hundreds of users, whilst ensuring adherence to strict
              formatting and accessibility requirements, so that the documents
              will look and behave identically no matter who creates or edits
              them.
            </p>
            <p>
              We take document accessibility seriously and can build templates
              with WCAG 2.1 AA in mind from the outset, alongside consistent
              formatting, protected corporate identity, and the version control
              that a department-wide rollout needs.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default GovDeptIntro;
