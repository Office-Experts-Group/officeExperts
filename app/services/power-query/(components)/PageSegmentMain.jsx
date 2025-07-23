import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/pageSegment.module.css";

import query from "../../../../public/query600x400.webp";

const PageSegmentMain = () => {


  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={query}
            alt="Query button on a computer keyboard"
            width={600}
            height={400}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Streamline your data. Automate your workflow.</p>
            <h2>Power Query Consultant Services</h2>
            <p>At Office Experts Group, we provide Power Query consulting that helps businesses simplify data preparation, improve accuracy, and reduce manual work. With decades of experience in Microsoft tools, we create custom Power Query solutions that connect your data sources, clean and transform your information, and automate your reporting processes.</p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
