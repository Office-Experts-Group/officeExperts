import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/pageSegment4.module.css";

import data from "../../../../public/data600x400.webp";
import Link from "next/link";

const Segment4Repeat = () => {
  return (
    <div className="animate-wrapper">
      <div
        className={styles.pageSegment}
        style={{ margin: "6rem 0", scrollMarginTop: "150px" }}
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>What is Power Query?</h2>
            <p>
              Power Query is a powerful tool from Microsoft that allows you to
              connect to various data sources—Excel, databases, web services,
              and more—and transform your data without needing to write complex
              code. It's the engine behind modern{" "}
              <Link href={"https://www.excelexperts.com.au/"}>Excel</Link> and{" "}
              <Link
                href={
                  "https://www.powerplatformexperts.com.au/services/microsoft-power-bi"
                }
              >
                Power BI workflows
              </Link>
              , helping you automate repetitive tasks and ensure consistent,
              up-to-date reporting.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image src={data} alt="data" width={600} height={400} />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;
