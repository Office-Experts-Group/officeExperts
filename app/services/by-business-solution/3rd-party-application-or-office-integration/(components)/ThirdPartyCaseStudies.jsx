// app/services/by-business-solution/3rd-party-application-or-office-integration/(components)/ThirdPartyCaseStudies.jsx

import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

// Case study content is read from the shared data file, so titles and figures
// stay in step with the case study pages
import { getCaseStudyBySlug } from "../../../../case-studies/caseStudies";

// Compiled CSS from styles/thirdPartyCaseStudies.module.scss
import styles from "../../../../../styles/thirdPartyCaseStudies.module.css";
import Image from "next/image";

// Each entry names the case study, how its data was connected, and which two
// of its headline stats to show (by position in the study's stats array).
const examples = [
  {
    // The proposal assistant is already featured in the RelatedLinks block on
    // this page, so a different project is used here to avoid repeating it
    slug: "manufacturing-project-setup-automation",
    connection:
      "A Power Automate flow reads the project details from a notification email and builds the job folders across three SharePoint sites.",
    statIndexes: [0, 1],
  },
  {
    slug: "film-crew-booking-system-access-nextjs-rebuild",
    connection:
      "An Azure SQL Server back end shared by the Access system and a Next.js website through a direct database connection.",
    statIndexes: [0, 2],
  },
  {
    slug: "healthcare-patient-form-followup-automation",
    connection:
      "Two scheduled Power Automate flows reading the client's Microsoft Fabric data warehouse. Streamlining patient follow-up and escalation.",
    statIndexes: [1, 2],
  },
];

const ThirdPartyCaseStudies = () => {
  // Look each study up and drop any whose slug no longer exists
  const items = examples
    .map((example) => ({
      ...example,
      study: getCaseStudyBySlug(example.slug),
    }))
    .filter((item) => item.study);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>Recent projects</p>
            <h2>
              Connected systems we have{" "}
              <span className={styles.accent}>already delivered</span>
            </h2>
            <p>
              Different products, the same approach: link the data source to the
              tools your team already uses, then test it on real records.
            </p>
          </div>
        </AnimateOnScroll>

        <ul className={styles.cards}>
          {items.map(({ slug, study, connection, statIndexes }) => (
            <li key={slug} className={styles.card}>
              <p className={styles.industry}>{study.industry}</p>
              <h3>{study.title}</h3>
              <p className={styles.connection}>
                <strong>How it connects:</strong> {connection}
              </p>

              <div className={styles.imageContainer}>
                <Image
                  src={study.image}
                  alt={`${study.title} screenshot`}
                  width={350}
                  height={225}
                />
              </div>

              <ul className={styles.stats}>
                {statIndexes.map((index) => (
                  <li key={study.stats[index].label} className={styles.stat}>
                    <strong>{study.stats[index].value}</strong>
                    <span>{study.stats[index].label}</span>
                  </li>
                ))}
              </ul>

              <Link href={`/case-studies/${slug}`} className={styles.link}>
                Read the case study
              </Link>
            </li>
          ))}
        </ul>

        <p className={styles.all}>
          <Link href="/case-studies">Browse all case studies</Link>
        </p>
      </div>
    </section>
  );
};

export default ThirdPartyCaseStudies;
