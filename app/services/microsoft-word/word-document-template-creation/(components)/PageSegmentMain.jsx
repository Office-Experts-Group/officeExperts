import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import TemplateCards from "../../../components/TemplateCards";

import styles from "../../../styles/newPageSegment.module.css";

import page1 from "../../../public/books/marketing/page1.webp";
import page2 from "../../../public/books/marketing/page2.webp";
import page3 from "../../../public/books/marketing/page3.webp";
import page4 from "../../../public/books/marketing/page4.webp";
import page5 from "../../../public/books/marketing/page5.webp";
import page6 from "../../../public/books/marketing/page6.webp";
import page7 from "../../../public/books/marketing/page7.webp";
import page8 from "../../../public/books/marketing/page8.webp";
import page9 from "../../../public/books/marketing/page9.webp";
import page10 from "../../../public/books/marketing/page10.webp";
import page11 from "../../../public/books/marketing/page11.webp";
import page12 from "../../../public/books/marketing/page12.webp";

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
    page10,
    page11,
    page12,
  ];

  return (
    <section className={styles.pageSegment}>
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
          <div className={styles.content}>
            <p>For a consistent and professional look</p>
            <h2>Custom Document and Template Solutions</h2>
            <p>
              We create Microsoft Word templates that are{" "}
              <strong>striking, refined, and impeccably crafted.</strong> Every
              design blends elegant form and function with polished layouts,
              branded styling, and user-friendly features that make document
              creation effortless.
            </p>
            <p>
              Our templates are robust and reliable, ensuring their formatting
              while accompanied with our
              <Link href="/custom-toolbars-and-ribbons">
                {" "}
                custom ribbon solution
              </Link>
              . They save your team valuable time, reduce errors, and deliver
              consistent, professional, and visually stunning results.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
