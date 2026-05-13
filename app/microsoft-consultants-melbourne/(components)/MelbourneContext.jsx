// microsoft-consultants-melbourne/(components)/MelbourneContext.jsx
import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

// Import compiled CSS module
import styles from "../../../styles/melbourneContext.module.css";

// Melbourne suburb/region tags for the coverage panel
const regions = [
  "Melbourne CBD",
  "Southbank",
  "Docklands",
  "South Melbourne",
  "St Kilda Rd Corridor",
  "Hawthorn",
  "Richmond",
  "South Yarra",
  "Box Hill",
  "Clayton",
  "Footscray",
  "Bayside",
  "Northern Suburbs",
  "Eastern Suburbs",
  "Western Corridor",
  "Geelong",
  "Ballarat",
  "Bendigo",
];

const MelbourneContext = () => (
  <section className={styles.section}>
    {/* ── Block 1: Business environment — sticky split ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.split}>
        <div className={styles.splitLeft}>
          <p className={styles.eyebrow}>Melbourne context</p>
          <h2 className={styles.heading}>
            Understanding Melbourne&rsquo;s business environment
          </h2>
        </div>

        <div className={styles.splitRight}>
          <p>
            Melbourne&rsquo;s economy is built on professional services,
            finance, education, healthcare and government. Each of these sectors
            has its own operational demands, and the Microsoft tools they rely
            on need to work harder than out-of-the-box configurations allow. A
            financial services firm on Collins Street generating hundreds of
            Excel-based reports each month has different requirements to a state
            government department managing document workflows across multiple
            offices.
          </p>
          <p>
            Our consultants have worked across all of these environments. We
            understand the compliance requirements that Melbourne&rsquo;s legal
            and financial sectors face, the accessibility standards that
            government departments must meet, and the scale at which healthcare
            and education providers need their systems to operate. This
            experience means we spend less time learning your industry and more
            time solving the problem at hand.
          </p>
        </div>
      </div>
    </AnimateOnScroll>

    {/* ── Divider ── */}
    <div className={styles.divider} aria-hidden="true" />

    {/* ── Block 2: Coverage panel ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.05}>
      <div className={styles.coverage}>
        <div className={styles.coverageLeft}>
          <p className={styles.eyebrow}>Reach</p>
          <h2 className={styles.heading}>
            On-site and remote support across Melbourne
          </h2>
          <p className={styles.coverageLead}>
            Most of our work is delivered remotely, it's faster to start, lower
            cost, all with no disruption to your office. When on-site presence
            adds value, our Melbourne consultants are available across the metro
            area and throughout regional Victoria.
          </p>
          <p className={styles.coverageLead}>
            For clients anywhere in Victoria, including regional centres like
            Geelong, Ballarat and Bendigo, remote consulting provides the same
            level of expertise without the travel overhead. Projects can begin
            within days rather than weeks regardless of your location.
          </p>
        </div>

        <div className={styles.coverageRight}>
          <p className={styles.tagsLabel}>Areas we service</p>
          <ul className={styles.tags} aria-label="Melbourne service areas">
            {regions.map((region) => (
              <li key={region} className={styles.tag}>
                {region}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimateOnScroll>
  </section>
);

export default MelbourneContext;
