import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/newPageSegment4.module.css";

import BookSegment from "./BookSegment";

const PageSegment4 = () => {
  const checkItems = [
    "Brand consistency",
    "Professionalism",
    "Ease-of-use for staff",
  ];

  return (
    <div
      className="animate-wrapper"
      id="brand-template-info"
      style={{ marginBottom: "-6rem" }}
    >
      <div className={styles.pageSegment}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              What Is a Brand Template in Microsoft Word?
            </h2>
            <p>
              A brand template in Microsoft Word is a pre-designed, reusable
              document that incorporates your company's logo, colours, fonts,
              layout styles, and tone, ensuring every letter, report, proposal,
              or internal doc looks and feels like it belongs to your business.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Whether it's a letterhead, invoice, tender document, or multi-page
              report, branded templates ensure consistently well formatted
              documents that reflect your brand identity.
            </p>
          </div>
        </AnimateOnScroll>
        <div className={styles.deskOnly}>
          <BookSegment />
        </div>
      </div>
    </div>
  );
};

export default PageSegment4;
