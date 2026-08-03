// app/case-studies/(components)/CaseStudyDetail.jsx

import Link from "next/link";
import Image from "next/image";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";
import { siteMeta } from "../../caseStudies";
import styles from "../../../../styles/caseStudyDetail.module.css";

const ResultsList = ({ results }) => (
  <ul className={styles.resultsList}>
    {results.map((result) => (
      <li key={result} className={styles.resultItem}>
        {result}
      </li>
    ))}
  </ul>
);

const CaseStudyDetail = ({ study }) => {
  const {
    client,
    industry,
    site,
    title,
    summary,
    results,
    image,
    stats,
    challenge,
    approach,
    outcome,
    quote,
    services,
  } = study;

  const brand = siteMeta[site];

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.eyebrow}>{industry}</span>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroSummary}>{summary}</p>

            {results?.length > 0 && <ResultsList results={results} />}
          </div>

          {image && (
            <div className={styles.heroImageWrap}>
              <Image
                src={image}
                alt={`${client} case study`}
                width={700}
                height={450}
                className={styles.heroImage}
                priority
              />
            </div>
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────
          Headline stats strip
      ───────────────────────────────────────────── */}
      {stats?.length > 0 && (
        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────
          Challenge / Approach / Outcome
      ───────────────────────────────────────────── */}
      <section className={styles.body}>
        {challenge?.length > 0 && (
          <AnimateOnScroll animation="fade-up" duration={0.6}>
            <div className={styles.bodyBlock}>
              <p className={styles.blockLabel}>The challenge</p>
              {challenge.map((para) => (
                <p key={para.slice(0, 24)} className={styles.bodyText}>
                  {para}
                </p>
              ))}
            </div>
          </AnimateOnScroll>
        )}

        {approach?.length > 0 && (
          <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
            <div className={styles.bodyBlock}>
              <p className={styles.blockLabel}>Our approach</p>

              <ol className={styles.approachList}>
                {approach.map((step, i) => (
                  <li key={step.heading} className={styles.approachItem}>
                    <span className={styles.approachNum}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className={styles.approachHeading}>{step.heading}</h3>
                      <p className={styles.approachBody}>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </AnimateOnScroll>
        )}

        {outcome?.length > 0 && (
          <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.15}>
            <div className={styles.bodyBlock}>
              <p className={styles.blockLabel}>The outcome</p>
              {outcome.map((para) => (
                <p key={para.slice(0, 24)} className={styles.bodyText}>
                  {para}
                </p>
              ))}
            </div>
          </AnimateOnScroll>
        )}
      </section>

      {/* ─────────────────────────────────────────
          Pull quote
      ───────────────────────────────────────────── */}
      {quote && (
        <section className={styles.quoteSection}>
          <blockquote className={styles.quote}>
            <p className={styles.quoteText}>&ldquo;{quote.text}&rdquo;</p>
            <cite className={styles.quoteAttribution}>{quote.attribution}</cite>
          </blockquote>
        </section>
      )}

      {/* ─────────────────────────────────────────
          Related services + brand callout
      ───────────────────────────────────────────── */}
      {(services?.length > 0 || brand) && (
        <section className={styles.relatedSection}>
          <div className={styles.relatedInner}>
            {brand && (
              <p className={styles.relatedBrand}>
                Delivered by{" "}
                <Link href={brand.domain} className={styles.relatedBrandLink}>
                  {brand.name}
                </Link>
              </p>
            )}

            {services?.length > 0 && (
              <div className={styles.relatedLinks}>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={styles.relatedLink}
                  >
                    {service.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────
          Back to case studies
      ───────────────────────────────────────────── */}
      <section className={styles.backSection}>
        <Link href="/case-studies" className={styles.backLink}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M13 8H3M7 4L3 8l4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to all case studies
        </Link>
      </section>
    </>
  );
};

export default CaseStudyDetail;
