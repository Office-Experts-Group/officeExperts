// app/accessibility/(components)/PageSegmentMain.jsx

import React from "react";
import Link from "next/link";

import styles from "../../../styles/accessibilityPageSegmentMain.module.css";

import AccessibleDocumentSVG from "../(svgs)/AccessibleDocumentSVG";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.svg}>
        <AccessibleDocumentSVG />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <p>Professional Standards</p>
          <h2>Word Document Accessibility</h2>
          <p>
            <strong>What is accessibility in a document?</strong> Document
            accessibility means structuring a Word file, its headings, tables,
            images, and reading order, so that anyone using a screen reader or
            various forms of assistive technology can navigate and understand
            the content as intended.
          </p>
          <p>
            <strong>Why is it important?</strong> An inaccessible document can
            lock people with disability out of information entirely, and for
            government and many enterprise organisations, it's a legal
            requirement, not just an added benefit.
          </p>
          <p>
            Our team of word design experts can deliver your document templates
            to the highest accessibility standards, setting your business up to
            efficiently and effectively produce quality, timely, consistent, and
            accessible documentation.
          </p>

          <Link
            href="#standards"
            className={`btn ${styles.ctaBtn}`}
            style={{ width: "fit-content" }}
          >
            How we ensure accessibility
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageSegmentMain;
