// app/case-studies/(components)/CaseStudyCard.jsx

import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/caseStudies.module.css";

// Server component — no interactivity required, so no "use client" needed.
// Renders a single case study summary card, linking through to the
// individual detail page once /case-studies/[slug]/page.js exists.
const CaseStudyCard = ({ study }) => {
  const { slug, client, industry, title, summary, results, image } = study;

  return (
    <Link href={`/case-studies/${slug}`} className={styles.card}>
      {/* Thumbnail — falls back gracefully if no image supplied yet */}
      {image && (
        <div className={styles.imageWrap}>
          <Image
            src={image}
            alt={`${client} case study`}
            fill
            sizes="(max-width: 449px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.image}
          />
        </div>
      )}

      <div className={styles.cardBody}>
        <span className={styles.industry}>{industry}</span>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardSummary}>{summary}</p>

        {/* Results list — capped to top 3 outcomes for card-level display */}
        <ul className={styles.resultsList}>
          {results.slice(0, 3).map((result) => (
            <li key={result} className={styles.resultItem}>
              {result}
            </li>
          ))}
        </ul>

        <span className={styles.readMore}>
          Read the full case study
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
