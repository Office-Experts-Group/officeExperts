import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import doc from "../../../public/doc-to-word.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Looking for more features?</p>
            <h2>Migrate to Word to future-proof your business</h2>
            <p>
              Is your organisation experiencing the limitations of Google Docs?
              While Google's collaborative platform works well for basic
              document creation, many enterprises, government agencies, and
              professional services firms quickly discover that Google Docs
              lacks the advanced formatting, customisation, and scalability
              features essential for complex business operations.
            </p>
            <p>
              Word Experts specialises in comprehensive Google Docs to Word
              migration services, helping organisations unlock the full
              potential of Microsoft Word's enterprise capabilities. Our expert
              team handles everything from document format conversion to{" "}
              <Link href={"./word-document-template-creation"}>
                {" "}
                custom template development{" "}
              </Link>
              , ensuring your transition is smooth, secure, and tailored to your
              specific business requirements.
            </p>
          </div>
        </AnimateOnScroll>
      </div>

      <div className={styles.imgWrapper} style={{ borderBottom: "none" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={doc}
            alt="converting google docs to word"
            width={600}
            height={400}
            className={styles.imgMarginTop}
            priority
          />
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
