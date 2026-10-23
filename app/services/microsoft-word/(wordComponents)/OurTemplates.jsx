import React from "react";
import Link from "next/link";

import styles from "@/styles/ourTemplates.module.scss";

import BookSegment from "./BookSegment";

const OurTemplates = () => {
  return (
    <section className={styles.ourTemplates}>
      <div className={styles.content}>
        <h2>
          Professional Document<br></br>
          <span className={styles.accent}> Template Solutions</span>
        </h2>
        <p>
          A well‑built Word template becomes the foundation for every document
          your organisation produces. When that foundation is solid, creating
          polished, professional documents is faster, easier, and far more
          consistent.
        </p>
        <p>
          Without a reliable template, users run into constant issues such as
          broken numbering, shifting layouts, formatting that won’t stick, and
          documents that drift off‑brand. These small problems add up and slow
          everything down.
        </p>
        <p>
          A strong template removes those frustrations. It gives people a
          dependable starting point that behaves predictably and keeps your
          documents looking clean and professional.
        </p>

        <Link
          href="/services/microsoft-word/corporate-global-template-solution"
          className="btn"
        >
          Our Template Services
        </Link>
      </div>
      <div className={styles.deskOnly}>
        <BookSegment />
      </div>
    </section>
  );
};

export default OurTemplates;
