// PageSegmentMain component for /mail-merge route
import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import mailMergeImg from "../../../public/mailMerge.webp";
import Link from "next/link";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Save Time, Reduce Errors</p>
            <h2>Mail Merge Solutions That Save You Hours of Manual Work</h2>
            <p>
              Mail Merge is one of Microsoft Word's most powerful, and yet often
              underused features. It allows you to create personalised
              letters, labels, emails, or reports automatically by combining a
              data source such as an Excel spreadsheet or Outlook contact list
              with a <Link href={"/corporate-global-template-solution"}>Word document template</Link>. At Word Experts, we help Australian
              businesses set up and optimise Mail Merge workflows that save
              time, <Link href={"/remove-repetition-and-increase-productivity"}>eliminate repetitive work</Link>, and reduce document errors.
            </p>
            <p>
              Mail Merge is a feature in Microsoft Word that automates the
              creation of customised documents. Instead of editing each file
              manually, you can connect a single Word template to a data list
            and automatically generate
              hundreds of personalised documents in minutes.
            </p>
          </div>
        </AnimateOnScroll>
      </div>

      <div className={styles.imgWrapper} style={{ borderBottom: "none" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={mailMergeImg}
            alt="Mail merge document automation"
            width={450}
            height={300}
            className={styles.imgMarginTop}
            priority
          />
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;