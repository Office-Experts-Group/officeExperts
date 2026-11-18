// /components/CaseStudyFeature.jsx
import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/caseStudyFeature.module.scss";

// Intrinsic size of the case study images, used for aspect ratio only.
const IMAGE_WIDTH = 700;
const IMAGE_HEIGHT = 450;
// How many "what we built" steps to list.
const MAX_BUILD_ITEMS = 4;
const MAX_STATS = 3;

const TONE_CLASS = {
  light: styles.light,
  dark: styles.dark,
  accentDark: styles.accentDark,
};

// Small stacked-layers marker for the "what we built" list.
const LayersIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
    focusable="false"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 2l7 3.5L9 9 2 5.5 9 2z" />
    <path d="M2 9l7 3.5L16 9M2 12.5L9 16l7-3.5" />
  </svg>
);

/**
 * A detailed, full-width case study panel built from a caseStudies.js entry.
 * Server component. Use a few of these instead of a card grid when a page
 * wants the story, not just a card.
 *
 * Props:
 * - study: a case study object from caseStudies.js
 * - tone: "light" (default), "dark" or "accentDark"
 * - reverse: put the image on the right on desktop
 * - imageAlt: alt text for the image (defaults to "")
 *
 * Renders an <article> with an <h3>, so place it under an <h2>.
 */
const CaseStudyFeature = ({
  study,
  tone = "light",
  reverse = false,
  imageAlt = "",
}) => {
  if (!study) return null;

  const { slug, industry, title, summary, image, stats, approach } = study;
  const linkText = study.linkText || "Read the case study";
  const href = `/case-studies/${slug}`;
  const isLight = tone === "light";

  const classes = [
    styles.feature,
    TONE_CLASS[tone] || styles.light,
    reverse ? styles.reverse : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={classes}>
      {image && (
        <figure className={styles.media}>
          <Image
            src={image}
            alt={imageAlt}
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            sizes="(max-width: 1024px) 100vw, 480px"
            className={styles.image}
          />
        </figure>
      )}

      <div className={styles.body}>
        {industry && <p className={styles.tag}>{industry}</p>}
        <h3 className={styles.title}>{title}</h3>
        {summary && <p className={styles.summary}>{summary}</p>}

        {stats?.length > 0 && (
          <dl className={styles.stats}>
            {stats.slice(0, MAX_STATS).map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt className={styles.statLabel}>{stat.label}</dt>
                <dd className={styles.statValue}>{stat.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {approach?.length > 0 && (
          <div className={styles.build}>
            <p className={styles.buildLabel}>What we built</p>
            <ul className={styles.buildList}>
              {approach.slice(0, MAX_BUILD_ITEMS).map((step) => (
                <li key={step.heading} className={styles.buildItem}>
                  <span className={styles.buildIcon}>
                    <LayersIcon />
                  </span>
                  {step.heading}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link
          href={href}
          className={isLight ? styles.ctaLight : `btn ${styles.cta}`}
          aria-label={`${linkText}: ${title}`}
        >
          {linkText}
        </Link>
      </div>
    </article>
  );
};

export default CaseStudyFeature;
