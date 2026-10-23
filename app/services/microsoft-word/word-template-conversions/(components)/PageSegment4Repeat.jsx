import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import pdf from "../../../public/pdf-to-word.webp";

const PageSegment4Repeat = () => {
  return (
    <div className="animate-wrapper" style={{ marginBottom: "2rem" }}>
      <div className={styles.pageSegment} id="web-apps">
        <AnimateOnScroll animation="slide-right" duration={1} delay={0.2}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2>PDF to Word Conversions</h2>
            </div>
            <p>
              Do you have important documents locked away in PDF format that you
              need to edit, update, or rebrand? Our team specialises in
              professional PDF to Word conversions that keep your original
              design intact while making the document fully editable in Word.
            </p>
            <p>
              While there are plenty of online “PDF to Word converters” out
              there, with professional documents they can often break layouts,
              lose images, and strip out essential formatting. That means more
              time spent fixing errors than actually working on the document.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0}>
          <div className="image-wrapper">
            <Image
              src={pdf}
              alt="pdf to word conversion"
              width={450}
              height={300}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default PageSegment4Repeat;
