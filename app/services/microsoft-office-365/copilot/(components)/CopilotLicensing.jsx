// app/services/microsoft-office-365/copilot/(components)/CopilotLicensing.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/copilotLicensing.module.css";

const ComparisonTable = ({ rows }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th className={styles.thFeature}>Feature</th>
        <th className={styles.thPlan}>Chat (Free)</th>
        <th className={styles.thPlan}>Full Licence</th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row) => (
        <tr key={row.feature}>
          <td className={styles.tdFeature}>{row.feature}</td>
          <td className={styles.tdCheck}>
            {row.free ? (
              <span className={styles.yes} aria-label="Included">
                &#10003;
              </span>
            ) : (
              <span className={styles.no} aria-label="Not included">
                &mdash;
              </span>
            )}
          </td>
          <td className={styles.tdCheck}>
            {row.full ? (
              <span className={styles.yes} aria-label="Included">
                &#10003;
              </span>
            ) : (
              <span className={styles.no} aria-label="Not included">
                &mdash;
              </span>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const CopilotLicensing = () => (
  <section
    className={styles.section}
    id="licensing"
    style={{ scrollMarginTop: "120px" }}
  >
    {/* ── Header + pricing overview ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Licensing</span>
        <h2 className={styles.headline}>
          Copilot Licensing{" "}
          <span className={styles.accent}>for Australian Businesses</span>
        </h2>
      </div>
    </AnimateOnScroll>

    {/* ── Pricing overview block ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.08}>
      <div className={styles.pricingBlock}>
        <div className={styles.pricingContent}>
          <p className={styles.pricingBody}>
            Microsoft 365 Copilot is an extra licence you add to your existing
            Microsoft 365 plan. Firstly you need a qualifying plan such as
            Business Basic, Business Standard, Business Premium, E3, or E5, plus
            the Copilot add-on.
          </p>
          <p className={styles.pricingBody}>
            Microsoft pricing is notoriously difficult to gauge on first glance,
            be sure to check out{" "}
            <Link
              nofollow
              noreferrer
              href="https://www.microsoft.com/en-au/microsoft-365/business/with-copilot-plans-and-pricing"
            >
              Microsoft's official pricing page
            </Link>{" "}
            for up to date information, or speak with one of our consultants for
            help deciding on the best plan for your business.
          </p>
        </div>
        <div className={styles.priceTag}>
          <span className={styles.priceFrom}>From</span>
          <span className={styles.priceValue}>
            AU$32.90<span className={styles.pricePer}>/user/mo</span>
          </span>
          <span className={styles.priceNote}>Excl. GST · Billed annually</span>
        </div>
      </div>
    </AnimateOnScroll>

    {/* ── Topic cards ── */}
  </section>
);

export default CopilotLicensing;
