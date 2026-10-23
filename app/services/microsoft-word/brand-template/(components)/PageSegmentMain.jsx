import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import TemplateCards from "../../../components/TemplateCards";

import styles from "../../../styles/newPageSegment.module.css";

import page1 from "../../../public/books/template/page1.webp";
import page2 from "../../../public/books/template/page2.webp";
import page3 from "../../../public/books/template/page3.webp";
import page4 from "../../../public/books/template/page4.webp";
import page5 from "../../../public/books/template/page5.webp";
import page6 from "../../../public/books/template/page6.webp";
import page7 from "../../../public/books/template/page7.webp";
import page8 from "../../../public/books/template/page8.webp";
import page9 from "../../../public/books/template/page9.webp";
import page10 from "../../../public/books/template/page10.webp";
import page11 from "../../../public/books/template/page11.webp";

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
            <p>Professional, Consistent, On-brand...</p>
            <h2>Microsoft Word Templates Tailored for Your Business</h2>
            <p>
              Your brand is more than just a logo... It's how you present
              yourself in every document. At Word Experts, we create Microsoft
              Word brand templates that align perfectly with your business
              identity. Whether you're launching a new brand, updating your
              existing designs, or standardising templates across teams, we'll
              ensure every document reflects your brand with precision and
              professionalism.
            </p>
            <p>
              Our advanced Word Template Solutions with Formatting Tab allow
              users to efficiently create corporate documents within your
              branding guidelines. This ensures that external formatting, or
              limited Word knowledge does not corrupt your{" "}
              <Link href={"/corporate-identity"}>
                corporate styles and functionality.
              </Link>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
