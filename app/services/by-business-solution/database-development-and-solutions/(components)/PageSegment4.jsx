import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import eyes from "../../../../../public/eyes600x394.webp";

const Segment4Repeat = () => {
  return (
    <div className="animate-wrapper">
      <div
        className={`${styles.pageSegmentCenter} ${styles.noImg} ${styles.noMargin}`}
        style={{ margin: "6rem 0 0 0", scrollMarginTop: "150px" }}
        id="Visual-Studio-Databases"
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              Visual Studio Databases using SQL Server
            </h2>
            <p>
              This solution works well for larger companies for internal and
              remote desktop use. For a lot of concurrent users or large
              database, this is the best option as it provides server side
              processing and faster response times, especially if your company
              already uses SQL Server. Also, some companies don't permit Access
              to be installed but are happy to install a custom .NET solution
              like this where the GUI is developed in VB.NET or C#.NET.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={eyes}
              alt="person clicking a computer mouse"
              width={457}
              height={300}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;
