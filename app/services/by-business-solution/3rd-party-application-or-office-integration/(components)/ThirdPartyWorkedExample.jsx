// app/services/by-business-solution/3rd-party-application-or-office-integration/(components)/ThirdPartyWorkedExample.jsx

import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

// Case study content is read from the shared data file, so the figures shown
// here always match the full case study page
import { getCaseStudyBySlug } from "../../../../case-studies/caseStudies";

// Compiled CSS from styles/thirdPartyWorkedExample.module.scss
import styles from "../../../../../styles/thirdPartyWorkedExample.module.scss";
import Image from "next/image";

// Change this slug to feature a different case study. When a Xero, MYOB or
// Salesforce case study is published, swap it in here.
const EXAMPLE_SLUG = "retail-analytics-automated-review-deck-generator";

const ThirdPartyWorkedExample = () => {
  const study = getCaseStudyBySlug(EXAMPLE_SLUG);

  if (!study) return null;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>Worked example</p>
            <h2>
              What a finished integration{" "}
              <span className={styles.accent}>looks like</span>
            </h2>
            <p>
              One project from our case studies, in the order it happened. The
              data source here is Power BI, but the pattern is the one we use
              for Xero, MYOB and Salesforce: read live data through a supported
              connection, then build the Office document from it.
            </p>
          </div>
        </AnimateOnScroll>

        <div className={styles.layout}>
          <div>
            <h3 className={styles.projectTitle}>{study.title}</h3>

            <p className={styles.label}>Before</p>
            {/* The second challenge paragraph describes the manual process */}
            <p className={styles.before}>{study.challenge[1]}</p>

            <p className={styles.label}>What we built</p>
            <ul className={styles.built}>
              {study.approach.map((step) => (
                <li key={step.heading}>
                  <h4>{step.heading}</h4>
                  <p>{step.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.result}>
            <p className={styles.label}>After</p>
            <p className={styles.after}>{study.outcome[0]}</p>

            <div className={styles.imageContainer}>
              <Image
                src={study.image}
                alt={study.title}
                width={350}
                height={225}
              />
            </div>

            <ul className={styles.stats}>
              {study.stats.map((stat) => (
                <li key={stat.label} className={styles.stat}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>

            <Link href={`/case-studies/${study.slug}`} className={styles.link}>
              Read the full case study
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdPartyWorkedExample;
