import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import chain from "../../../../../public/chain600x400.webp";

const PageSegment4New = () => {
  return (
    <div className="animate-wrapper">
      <section className={styles.pageSegment} id="web-apps">
        <AnimateOnScroll animation="slide-right" duration={1} delay={0.2}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2>Web Apps Linked to Databases</h2>
            </div>
            <p>
              Often you may want to gather data from your clients, suppliers and
              people of interest who do not have access to your database
              application. Using Azure we can create hosted web apps that will
              run on any device through a web browser, gathering data and
              storing it in your Azure database. You then have instant access to
              the data through your database application.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0}>
          <div className="image-wrapper">
            <Image
              src={chain}
              alt="person clicking a computer mouse"
              width={600}
              height={400}
            />
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
};

export default PageSegment4New;
