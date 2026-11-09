// /services/microsoft-word/companies-and-organisations/(components)/CompaniesIntro.jsx
import React from "react";
import Link from "next/link";

import { CompaniesDocumentSvg } from "../(svgs)/CompaniesDocumentSvg";

import styles from "@/styles/companiesIntro.module.scss";

// In-page jump links. These replace the old floating Contents widget and the four image
// cards, so they are plain anchors: no client JavaScript needed, and the page stays SSR
const jumpLinks = [
  {
    href: "#template-solutions",
    kicker: "Template",
    title: "Solutions You Need",
  },
  {
    href: "#document-creation",
    kicker: "Streamlined",
    title: "Document Creation",
  },
  {
    href: "#no-more-headaches",
    kicker: "Leave it to us",
    title: "No More Headaches!",
  },
  {
    href: "#in-control",
    kicker: "We put YOU",
    title: "Back In Control!",
  },
];

const Arrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 7h8M7 3l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CompaniesIntro = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.split}>
        <div className={styles.copy}>
          <h1 className={styles.heading}>
            Company documents{" "}
            <span className={styles.headingAccent}>back under control</span>
          </h1>
          <p className={styles.lead}>
            Our team of Word design experts deliver versatile templates that
            meet the needs of any company or organisation. Our{" "}
            <Link href="/meet-the-team">experienced Word designers</Link> will
            ensure your corporate identity is protected and can cut your costs
            through setting you up to produce your own in-house reports.
          </p>
          <div className={styles.ctaRow}>
            <a href="#contact" className="btn">
              Talk to our Word experts
            </a>
            <span className={styles.ctaNote}>
              Word template specialists since 2000
            </span>
          </div>
        </div>

        <div className={styles.art}>
          <CompaniesDocumentSvg />
        </div>
      </div>

      {/* ── Jump links ── */}
      <nav className={styles.jump} aria-label="On this page">
        <p className={styles.jumpLabel}>On this page</p>
        <ul className={styles.jumpList}>
          {jumpLinks.map((link, i) => (
            <li key={link.href}>
              <a href={link.href} className={styles.jumpLink}>
                {/* Visual index only; these are not sequential steps */}
                <span className={styles.num} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.jumpText}>
                  <span className={styles.jumpKicker}>{link.kicker}</span>
                  <span className={styles.jumpTitle}>{link.title}</span>
                </span>
                <span className={styles.arrow} aria-hidden="true">
                  <Arrow />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </section>
);

export default CompaniesIntro;
