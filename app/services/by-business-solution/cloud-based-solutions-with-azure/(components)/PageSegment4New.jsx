import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import chain from "../../../../../public/chain600x400.webp";

const PageSegment4New = () => {
  return (
    <div className="animate-wrapper">
      <section className={styles.pageSegment} id="integrated-solutions">
        <AnimateOnScroll animation="slide-right" duration={1} delay={0.2}>
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
