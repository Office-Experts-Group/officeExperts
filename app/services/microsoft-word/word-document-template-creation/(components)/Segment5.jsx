import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

import inDesign from "../../../public/inDesign-to-word.webp";

const PageSegment3 = () => {
  return (
    <section
      className={`${styles.pageSegment} ${styles.mobPad}`}
      style={{ marginTop: "4rem" }}
    >
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={inDesign}
          alt="inDesign to Word migration"
          width={450}
          height={300}
        />
      </AnimateOnScroll>

      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <h2 style={{ marginBottom: "1.5rem" }}>
            InDesign to MS Word Conversion
          </h2>
          <p style={{ maxWidth: "100%" }}>
            We specialise in converting Adobe InDesign layouts into fully
            functional, polished Microsoft Word templates. While designers can
            create visually stunning layouts, they often lack the expertise to
            make them practical, user-friendly, and ready for everyday use in
            Word. We bridge that gap, turning beautiful designs into templates
            that are fully branded and easy for your team to work with.
          </p>
          <p style={{ maxWidth: "100%", marginTop: "1rem" }}>
            <strong>
              The result is a library of templates that is visually striking,
              highly usable, and workflow-ready.
            </strong>
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
