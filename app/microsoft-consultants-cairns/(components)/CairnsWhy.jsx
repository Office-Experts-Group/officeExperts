// app/microsoft-consultants-cairns/(components)/CairnsWhy.jsx
// Layout: full-width alternating reason rows + coverage area tags.
// Deliberately different from the 2×2 stat-card grid used on Melbourne/Perth pages.
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/cairnsWhy.module.css";

// Service area tags for Far North Queensland coverage
const regions = [
  "Cairns CBD",
  "Cairns North",
  "Edge Hill",
  "Smithfield",
  "Trinity Beach",
  "Palm Cove",
  "Yorkeys Knob",
  "Gordonvale",
  "Atherton",
  "Mareeba",
  "Innisfail",
  "Mossman",
  "Port Douglas",
  "Kuranda",
  "Tablelands Region",
  "Cape York Peninsula",
];

// Reasons structured as alternating left/right rows
const reasons = [
  {
    id: "depth",
    eyebrow: "Depth of expertise",
    title: "Specialists, with a team",
    body: "Every consultant we have is a dedicated specialist with years of experience in their field. Together we operate as a unit to provide a fully integrated solution. Consistently our clients come to us with disjointed applications that fail to cooperate in any meaningful way. We pride our work on solving each individuals demand by integrating everything under one roof.",
    cta: {
      label: "Meet our Team",
      href: "https://www.officeexperts.com.au/meet-the-team",
    },
  },
  {
    id: "remote",
    eyebrow: "Location advantage",
    title: "Remote-first makes Cairns clients equal",
    body: "Being based in regional Queensland has historically meant slower access to specialist talent and higher travel costs when you needed someone on-site. Our remote-first model eliminates that disadvantage entirely. Cairns clients get the same response times and the same expertise as a client in the Sydney CBD. When on-site presence genuinely adds value, our Cairns consultants are available locally.",
    cta: {
      label: "See all locations",
      href: "https://www.officeexperts.com.au/locations",
    },
  },
  {
    id: "history",
    eyebrow: "Track record",
    title: "25+ years of trust",
    body: "We have been in business since 2000, we have seen every major platform shift Microsoft has made. That allows us to take legacy applications and turn them into modern, easy to use systems. We are also 100% Australian owned, which means you are dealing with Aussies who understand the world your operating in.",
    cta: {
      label: "Read client testimonials",
      href: "https://www.officeexperts.com.au/client-testimonials",
    },
  },
];

const CairnsWhy = () => (
  <section className={styles.section}>
    {/* ── Section header ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Why choose us</p>
        <h2 className={styles.heading}>
          What makes Office Experts Group{" "}
          <span className={styles.headingAccent}>different.</span>
        </h2>
      </div>
    </AnimateOnScroll>

    {/* ── Reason rows ── */}
    <div className={styles.reasons}>
      {reasons.map((reason, i) => (
        <AnimateOnScroll
          key={reason.id}
          animation="fade-up"
          duration={0.55}
          delay={i * 0.08}
        >
          <div className={styles.row}>
            <div className={styles.rowLeft}>
              <p className={styles.rowEyebrow}>{reason.eyebrow}</p>
              <h3 className={styles.rowTitle}>{reason.title}</h3>
              {reason.cta && (
                <Link href={reason.cta.href} className={styles.rowLink}>
                  {reason.cta.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 7h8M7 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              )}
            </div>
            <p className={styles.rowBody}>{reason.body}</p>
          </div>
        </AnimateOnScroll>
      ))}
    </div>

    {/* ── Coverage area ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.05}>
      <div className={styles.coverage}>
        <div className={styles.coverageLeft}>
          <p className={styles.coverageEyebrow}>Service areas</p>
          <h3 className={styles.coverageHeading}>Serving Cairns and F.N.Q</h3>
          <p className={styles.coverageBody}>
            Our Cairns consultants are available across the entire Far North
            Queensland region. Most work is delivered remotely for speed and
            cost efficiency. For training sessions, workshops or on-site
            implementation, we are available throughout the Cairns metro area
            and across the Tablelands. Regional clients further afield are
            serviced remotely with no reduction in quality or responsiveness.
          </p>
        </div>
        <div className={styles.coverageRight}>
          <p className={styles.tagsLabel}>Areas we cover</p>
          <ul
            className={styles.tags}
            aria-label="Cairns and Far North Queensland service areas"
          >
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

export default CairnsWhy;
