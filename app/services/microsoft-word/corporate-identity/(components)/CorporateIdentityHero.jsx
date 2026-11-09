// /services/microsoft-word/corporate-identity/(components)/CorporateIdentityHero.jsx

import Link from "next/link";

import styles from "@/styles/corporateIdentityHero.module.scss";

import { BrandedDocumentSvg } from "../(svgs)/BrandedDocumentSvg";

const chips = [
  "Logo & letterhead",
  "Colour palette",
  "Typography",
  "Page layout",
];

const CorporateIdentityHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {/* ── Copy + CTA ── */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>Maintain Professionalism</span>
          <h1 className={styles.heading}>
            Consistent brand recognition, with{" "}
            <span className={styles.accent}>every document.</span>
          </h1>
          <p className={styles.intro}>
            A strong corporate identity extends beyond your website and
            marketing materials. We build your brand into Microsoft Word
            documents, from typography and colour schemes to logos, headings and
            page layouts, giving your team a consistent visual standard across
            the documents they create every day.
          </p>

          <ul className={styles.chips}>
            {chips.map((chip) => (
              <li key={chip} className={styles.chip}>
                {chip}
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <Link href="/contact" className={styles.cta}>
              Book a free consultation
            </Link>
            <a href="#anatomy" className={styles.secondary}>
              See how it works
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 7h10m-4-4 4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Annotated document ── */}
        <div className={styles.diagramWrap}>
          <BrandedDocumentSvg />
        </div>
      </div>
    </section>
  );
};

export default CorporateIdentityHero;
