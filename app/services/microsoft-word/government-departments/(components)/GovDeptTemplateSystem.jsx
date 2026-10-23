// app/government-departments/(components)/GovDeptTemplateSystem.jsx

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import { TemplateTreeIcon } from "../(svgs)/TemplateTreeIcon";

import styles from "../../../styles/govDeptTemplateSystem.module.css";

const GovDeptTemplateSystem = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ── Left: copy ── */}
        <AnimateOnScroll animation="slide-left" duration={0.9}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>Template Governance</span>
            <h2 className={styles.heading}>
              How does a <span className={styles.accent}>master template</span>{" "}
              system work across a department?
            </h2>
            <p>
              A single controlled master template sits behind every document a
              department produces. Reports, letters, forms and other sub
              templates are all built from it, so a formatting or branding
              change only ever needs to be made once, at the source, instead of
              hundreds of times across individual files.
            </p>
            <p>
              With this structure in place, staff can create new sub templates
              in house, under a controlled environment, without risking the
              formatting, accessibility or branding standards the master
              template was built to protect.
            </p>
          </div>
        </AnimateOnScroll>

        {/* ── Right: master/sub template diagram, replaces the previous stock photo ── */}
        <AnimateOnScroll animation="scale-up" duration={0.9} delay={0.2}>
          <div className={styles.iconWrap}>
            <TemplateTreeIcon />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default GovDeptTemplateSystem;
