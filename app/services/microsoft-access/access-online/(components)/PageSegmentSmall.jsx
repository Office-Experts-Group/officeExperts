import React from "react";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegmentSmall.module.css";

const PageSegmentSmall = () => {
  return (
    <section className={styles.pageSegmentSmall}>
      <AnimateOnScroll animation="slide-left">
        <div className={styles.titles}>
          <h2>Access Online Options</h2>
          <p>
            Need a new or existing Access database setup to be used with Office
            365 or SharePoint? There are a number of ways this can be achieved.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" delay={0.2}>
        <div className={styles.point}>
          <div className={styles.pointItem}>
            <div className={styles.tick}>✓</div>
            <p>
              Using SharePoint or Office 365, you can set up your own or
              Microsoft hosted solution. These allow us to rapidly setup a basic
              database for your users.
            </p>
          </div>
          <div className={styles.pointItem}>
            <div className={styles.tick}>✓</div>
            <p>
              We can host a database with Microsoft using native Access to link
              to your online data.
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default PageSegmentSmall;
