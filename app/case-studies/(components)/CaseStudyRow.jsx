// app/case-studies/(components)/CaseStudyRow.jsx

import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/caseStudies.module.css";

// Server component — no interactivity required, so no "use client" needed.
// Renders a single case study as a full-width magazine-style row: image on
// one side, the story on the other. The `reverse` prop flips which side the
// image sits on, so rows alternate left/right down the page.
const CaseStudyRow = ({ study, reverse = false }) => {
  const { slug, client, industry, title, summary, results, image } = study;

  return (
    <article className={`${styles.row} ${reverse ? styles.rowReverse : ""}`}>
      {/* Thumbnail column — falls back gracefully if no image supplied yet */}
      {image && (
        <div className={styles.rowImageWrap}>
          {/* Fixed width/height matching the source screenshots (700x350)
              rather than "fill", so Next.js scales the image down for
              smaller screens without ever cropping or stretching it */}
          <Image
            src={image}
            alt={`${client} case study`}
            width={700}
            height={450}
            sizes="(max-width: 766px) 100vw, 50vw"
            className={styles.rowImage}
          />
        </div>
      )}

      <div className={styles.rowBody}>
        <span className={styles.industry}>{industry}</span>
        <h2 className={styles.rowTitle}>{title}</h2>
        <p className={styles.rowSummary}>{summary}</p>

        {/* Full results list — the row format has room to show every outcome */}
        <ul className={styles.resultsList}>
          {results.map((result) => (
            <li key={result} className={styles.resultItem}>
              {result}
            </li>
          ))}
        </ul>

        <Link href={`/case-studies/${slug}`} className={styles.readMore}>
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
        </Link>
      </div>
    </article>
  );
};

export default CaseStudyRow;
