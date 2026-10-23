import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import TemplateCards from "../../../components/TemplateCards";

import styles from "../../../styles/newPageSegment.module.css";

import page1 from "../../../public/books/community/page1.webp";
import page2 from "../../../public/books/community/page2.webp";
import page3 from "../../../public/books/community/page3.webp";
import page4 from "../../../public/books/community/page4.webp";
import page5 from "../../../public/books/community/page5.webp";
import page6 from "../../../public/books/community/page6.webp";
import page7 from "../../../public/books/community/page7.webp";
import page8 from "../../../public/books/community/page8.webp";
import page9 from "../../../public/books/community/page9.webp";

const PageSegmentMain = () => {
  const images = [
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8,
    page9,
  ];

  return (
    <section className={styles.pageSegment} id="consistent-branding">
      <div
        className={styles.imgWrapper}
        style={{
          borderBottom: "none",
          transform: "rotate(-10deg)",
          marginRight: "2rem",
        }}
      >
        <TemplateCards images={images} />
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div
            className={styles.content}
            style={{ paddingTop: "2rem", marginLeft: "2rem" }}
          >
            <p>Advanced Corporate Template Solutions</p>
            <h2>
              Efficient and Consistent Branding for{" "}
              <span className={styles.accent}>Your Documents</span>
            </h2>
            <p>
              Office Experts Group have developed an advanced Corporate Word
              Template Solution to enable users to effectively and efficiently
              create corporate documents in house. These documents are created
              under a controlled environment, therefore only allowing formatting
              that is consistent to your branding guidelines.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
