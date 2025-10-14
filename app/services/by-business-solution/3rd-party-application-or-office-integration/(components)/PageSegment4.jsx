import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import cloudSolution from "../../../../../public/cloudSolution600x400.webp";

const PageSegment4 = () => {
  return (
    <div className="animate-wrapper" style={{ marginBottom: "2rem" }}>
      <div className={styles.pageSegment} id="web-apps">
        <AnimateOnScroll animation="slide-right" duration={1} delay={0.2}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2>3rd Party Application's</h2>
            </div>
            <p>
              If your 3rd party product is ODBC or API enabled, we can link to
              it and extract its data to use in{" "}
              <Link href="https://www.excelexperts.com.au">Excel,</Link>,{" "}
              <Link href="https://www.wordexperts.com.au">Word</Link>,{" "}
              <Link href="https://www.accessexperts.com.au">Access</Link> or
              <Link href="/services/microsoft-powerpoint">PowerPoint</Link>. We
              can also help you upload data to the 3rd party application.
            </p>
            <p>
              We have created custom solutions that link to products including
              Xero, Microsoft Dynamics, Zoho, MYOB, Pronto, Sales Force,
              MailChimp and databases including SQL Server, Azure (backed by SQL
              Server), Access, MySQL and Oracle. Office can be a cost effective
              method of extending the functionality of your 3rd party
              application.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0}>
          <div className="image-wrapper">
            <Image
              src={cloudSolution}
              alt="person clicking a computer mouse"
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
