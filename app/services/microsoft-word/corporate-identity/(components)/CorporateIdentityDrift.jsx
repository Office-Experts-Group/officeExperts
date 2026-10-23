// app/corporate-identity/(components)/CorporateIdentityDrift.jsx

import Link from "next/link";
import styles from "../../../styles/corporateIdentityDrift.module.css";

import { DriftComparisonSvg } from "../(svgs)/DriftComparisonSvg";

const driftCauses = [
  { label: "A staff member changes the font \u201cjust this once\u201d" },
  { label: "A document is copied from an old version and reused" },
  { label: "A new starter never sees the original brand guidelines" },
  { label: "A section is pasted in from an external source" },
];

const CorporateIdentityDrift = () => {
  return (
    <section className={styles.section} id="brand-drift">
      <div className={styles.header}>
        <span className={styles.eyebrow}>Why documents fall out of brand</span>
        <h2 className={styles.heading}>
          Brand identity doesn&rsquo;t break all at once,{" "}
          <span className={styles.accent}>it drifts.</span>
        </h2>
      </div>

      {/* ── Split visual comparison ── */}
      <div className={styles.visualWrap}>
        <DriftComparisonSvg />
      </div>

      {/* ── Two-column narrative, unequal widths ── */}
      <div className={styles.narrative}>
        <div className={styles.narrativeLead}>
          <p className={styles.leadText}>
            "Without a governed template, a document&rsquo;s formatting is only
            ever as consistent as the person who last edited it. It doesn't
            usually happen overnight, it slowly creeps in over time."
          </p>
        </div>

        <div className={styles.narrativeCauses}>
          <p className={styles.causesLabel}>It usually starts small</p>
          <ol className={styles.causesTimeline}>
            {driftCauses.map((cause, i) => (
              <li key={i} className={styles.causeItem}>
                <span className={styles.causeMarker} aria-hidden="true" />
                <span>{cause.label}</span>
              </li>
            ))}
          </ol>
          <p className={styles.causesResult}>
            Multiply that across dozens of staff and hundreds of documents a
            year, and a business that once had a single, confident brand voice
            ends up with a filing cabinet of near-matches.
          </p>
        </div>
      </div>

      {/* ── Closing statement + related link ── */}
      <div className={styles.footer}>
        <p className={styles.footerText}>
          A locked, well-built template removes the decision from the equation
          entirely. If your organisation is managing branding across several
          templates, our{" "}
          <Link
            href="/corporate-global-template-solution"
            className={styles.footerLink}
          >
            global template solution
          </Link>{" "}
          standardises them under a single, centrally managed master.
        </p>
      </div>
    </section>
  );
};

export default CorporateIdentityDrift;
