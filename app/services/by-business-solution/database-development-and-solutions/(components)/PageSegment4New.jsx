import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import chain from "../../../../../public/chain600x400.webp";

const PageSegment4New = () => {
  return (
    <div className="animate-wrapper">
      <section className={styles.pageSegment} id="access-database-power">
        <AnimateOnScroll animation="slide-right" duration={1} delay={0.2}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              The Power of an Access Database!
            </h2>
            <p>
              A native Access database can be setup as single user and
              stand-alone, or multi-user by accessing a central data store
              across a LAN, supporting up to about 15 concurrent users. Access
              uses its own JET database engine and can link to various data
              sources including Excel, Outlook, text files, XML data and SQL
              data sources via ODBC, including Microsoft's Azure cloud SQL data
              store.
            </p>
            <p>
              Access is supported by VBA, so it can handle complex logic and
              seamlessly integrate with Office products such as Word, Excel or
              Outlook using “automation”. Access can also integrate with 3rd
              party software such as MYOB or Xero.
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
