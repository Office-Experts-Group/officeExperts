// /word-template-conversions/(components)/ConversionCta.jsx
import Link from "next/link";

import { ArrowIcon, CheckIcon, DotGrid } from "../(svgs)/Icons";
import styles from "@/styles/conversionCta.module.scss";

const TRUST = [
  "Australian-owned, established 2000",
  "Fixed-price quotes, no per-file surprises",
  "No uploading to third-party conversion tools",
  "Templates, PDF forms and conversions all handled in-house",
];

const ConversionCta = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <DotGrid className={styles.dots} />

        <div className={styles.content}>
          <span className={styles.eyebrow}>Get started</span>
          <h2 className={styles.heading}>
            Ready to convert your documents into templates that work?
          </h2>
          <p>
            Send through a sample file and tell us what you need. We will come
            back with an honest assessment and a fixed price before any work
            begins.
          </p>
          <div className={styles.ctas}>
            <Link href="#contact" className={styles.primary}>
              Request a free quote
              <ArrowIcon />
            </Link>
            <Link
              href="/services/microsoft-word/fill-in-forms"
              className={styles.secondary}
            >
              See our fill-in form service
            </Link>
          </div>
        </div>

        <ul className={styles.trust} aria-label="Why choose us">
          {TRUST.map((item) => (
            <li key={item}>
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ConversionCta;
