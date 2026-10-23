import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import migration from "../../../public/migration.webp";

const PageSegment4 = () => {
  return (
    <div className="animate-wrapper">
      <div className={`${styles.pageSegment} ${styles.customMargin}`}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2>Upgrades and Migration</h2>
            </div>
            <p>
              Our experienced team of{" "}
              <Link href="/meet-the-team">Word design experts</Link> specialises
              in seamless Microsoft Word upgrades and migrations across all
              versions. We eliminate the risk of formatting disruptions,
              maintain document integrity throughout version transitions, and
              ensure your business continuity with minimal downtime. Whether
              you're upgrading from early versions of Word, or migrating to
              Microsoft 365, our consultants provide comprehensive support to
              prevent data loss, resolve compatibility issues, and optimise your
              document management workflow.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={migration}
              alt="image of people walking around the globe"
              width={450}
              height={300}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default PageSegment4;
