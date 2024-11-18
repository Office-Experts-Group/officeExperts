import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import hand from "../../../../../public/hand600x400.webp";

const PageSegment4 = () => {
  return (
    <div
      className="animate-wrapper"
      style={{ margin: "6rem 0 2rem 0", scrollMarginTop: "150px" }}
      id="created"
    >
      <div className={styles.pageSegment}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2>Add-Ins Created in Excel</h2>
            </div>
            <p>
              Add-in files created in Excel are workbooks saved with an add-in
              file extension. In Excel 2007 and above, the ribbon or toolbar can
              be customised and buttons added to run{" "}
              <Link href="/vba-macro-developmentVBA macros">VBA macros</Link>.
              VBA add-in files are copied into Excel's add-in or start up
              directories on each user's PC. Those add-in files are
              automatically loaded each time Excel starts up and the VBA macros
              contained within are available to all workbooks.
            </p>
            <p>
              Larger organisations often use login scripts to install add-in
              files, to seamlessly deploy add-in features to a user's PC.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={hand}
              alt="person hand with digital people above it"
              width={600}
              height={400}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default PageSegment4;
