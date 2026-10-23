import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import upgrade from "../../../public/upgrade600x400.webp";

const PageSegmentMain = () => {
  return (
    <section
      id="stuck"
      className={`${styles.pageSegment} ${styles.customMargin}`}
    >
      <div className={styles.imgWrapper}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={upgrade}
            alt="upgrade button on a computer"
            width={600}
            height={400}
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            {/* <p>Microsoft Word</p> */}
            <h2 style={{ marginTop: "0rem" }}>Stuck on an Old Version?</h2>
            {/* <p>
              Running outdated Microsoft Word versions can significantly impact
              your productivity and security. Many Australian businesses face
              critical challenges when their legacy Word documents, templates,
              and macros fail to function correctly after upgrading to newer
              Office versions.
            </p> */}
            <p style={{ lineHeight: "2", color: "#777a7e" }}>
              Are you experiencing formatting errors with documents created in
              Word 2003, 2007, or 2010? Do you have slow performance with large
              documents, broken macros and VBA code, or compatibility issues
              between .doc and .docx file formats? Legacy custom templates
              failing in newer Word environments can disrupt your entire
              workflow.
            </p>
            <p>
              Considering migrating from desktop Word to cloud-based Microsoft
              365? Our experts help transition your document libraries to
              SharePoint Online, OneDrive for Business, and Teams, ensuring
              version control and collaboration features remain intact. If your
              Word documents integrate with{" "}
              <Link href={"https://www.accessexperts.com.au"}>
                Access databases
              </Link>
              ,{" "}
              <Link href={"https://www.excelexperts.com.au"}>
                Excel workbooks
              </Link>
              , or custom applications, we ensure these connections remain
              functional post-upgrade.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
