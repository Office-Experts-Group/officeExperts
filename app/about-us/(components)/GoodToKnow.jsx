// app/about-us/(components)/GoodToKnow.jsx

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import { AustralasiaMapSvg } from "../(svgs)/AustralasiaMapSvg";
import styles from "../../../styles/goodToKnow.module.css";

const GoodToKnow = () => {
  return (
    <section className={styles.section}>
      {/* ── Section header ── */}
      <div className={styles.header}>
        <span className={styles.eyebrow}>Good To Know</span>
        <h2 className={styles.heading}>
          National reach.{" "}
          <span className={styles.headingAccent}>Local presence.</span>
        </h2>
      </div>

      <div className={styles.body}>
        {/* Content panel */}
        <div className={styles.contentPanel}>
          {/* Paragraphs — text unchanged from original */}
          <p className={styles.para}>
            Beginning in 2000 from a small office in Northern New South Wales,
            Office Experts Group has grown into a team of over 25 consultants
            located in nearly every major city across Australia. From humble
            beginnings, we now work with clients ranging from small rural
            businesses to government organisations and multinational
            corporations.
          </p>

          <p className={styles.para}>
            The nature of our industry allows us to provide support and
            solutions remotely, enabling us to service clients anywhere in
            Australia and New Zealand.
          </p>

          {/* Remote-service callout strip */}
          <div className={styles.remoteStrip}>
            <div className={styles.remoteIcon} aria-hidden="true">
              {/* Simple signal/broadcast icon */}
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21c-4-4.3-7-8.1-7-11.5A7 7 0 0 1 12 2a7 7 0 0 1 7 7.5c0 3.4-3 7.2-7 11.5z" />
                <circle cx="12" cy="8.5" r="1.4" />
                <path d="M9 13c0-1.7 1.3-3 3-3s3 1.3 3 3" />
              </svg>
            </div>
            <p className={styles.remoteText}>
              On-site support is also available when required, bringing our
              experience directly into your office for personalised training and
              development.
            </p>
          </div>
        </div>

        {/* Map panel */}
        <div className={styles.mapPanel} aria-hidden="true">
          <AustralasiaMapSvg />
        </div>
      </div>
    </section>
  );
};

export default GoodToKnow;
