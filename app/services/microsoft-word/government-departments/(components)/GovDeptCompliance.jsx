// app/government-departments/(components)/GovDeptCompliance.jsx

import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import { CompliantDocIcon } from "../(svgs)/CompliantDocIcon";

import styles from "../../../styles/govDeptCompliance.module.css";

// ── Standards a department template is measured against, beyond accessibility ──
const standards = [
  {
    id: "records",
    label: "Records management",
    body: "Templates that tag metadata and file consistently, so documents remain discoverable under your department's records and information management framework.",
  },
  {
    id: "branding",
    label: "Style guide adherence",
    body: "Departmental style guides enforced at the template level, so formatting, terminology and layout stay consistent across every branch and business unit.",
  },
  {
    id: "version-control",
    label: "Version control",
    body: "A single controlled master template underpins every document thats produced, once in place, an update only ever needs to happen once, not across hundreds of individual files.",
  },
];

const GovDeptCompliance = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ── Left: heading and framing copy ── */}
        <AnimateOnScroll animation="fade-up" duration={0.7}>
          <div className={styles.leftCol}>
            <span className={styles.eyebrow}>Compliance</span>
            <h2 className={styles.heading}>
              What <span className={styles.accent}>compliance standards</span>{" "}
              do government Word templates need to meet?
            </h2>
            <p className={styles.intro}>
              Accessibility may be integral to any government issued document,
              but a template built for department-wide use also has to hold up
              against records management rules, a locked style guide, and the
              version control needed to keep hundreds of staff working from the
              same source.
            </p>
            <p className={styles.intro}>
              We cover WCAG 2.1 AA compliance in full detail on our{" "}
              <Link href="/accessibility">document accessibility page</Link>,
              including reading order, alternative text and accessible table
              structure.
            </p>
          </div>
        </AnimateOnScroll>

        {/* ── Right: icon + standards list ── */}
        <AnimateOnScroll animation="fade-up" duration={0.7} delay={0.15}>
          <div className={styles.rightCol}>
            <div className={styles.iconWrap}>
              <CompliantDocIcon />
            </div>
            <ul className={styles.standardsList}>
              {standards.map((s) => (
                <li key={s.id} className={styles.standardItem}>
                  <h3 className={styles.standardLabel}>{s.label}</h3>
                  <p className={styles.standardBody}>{s.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default GovDeptCompliance;
