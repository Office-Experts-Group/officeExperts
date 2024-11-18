import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import eyes from "../../../../../public/eyes600x394.webp";

const Segment4Repeat = () => {
  return (
    <div className="animate-wrapper">
      <div
        className={styles.pageSegmentCenter}
        style={{ margin: "2rem 0 6rem 0", scrollMarginTop: "150px" }}
        id="web-and-database"
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              Mobile, Web and Database Integrated Solutions with Azure
            </h2>
            <p>
              With Azure's cloud solutions we can host a SQL Server or MySQL
              database with Microsoft. Then we can integrate mobile apps in 3
              major platforms via ASP web pages and database front ends or GUIs
              in Visual Studio. We can even integrate your organisation's
              existing 3rd party solutions. Azure's one stop shop approach has
              transformed the Microsoft development world.
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
