import Image from "next/image";
import React from "react";

import styles from "../../../../../styles/pageSegment2.module.css";

import lady from "../../../../../public/service-img-1.webp";

const PageSegmentMain2 = () => {
  return (
    <section className={styles.pageSegment}>
      <Image
        src={lady}
        alt="lady in an office environment"
        width={770}
        height={424}
        priority
      />

      <div className={styles.contents}>
        <h3>Contents</h3>
        <a href="#why-choose-access">
          <div className={styles.contentLink}>
            <p>Databases Using Access</p>
          </div>
        </a>
        <a href="#access-database-power">
          <div className={styles.contentLink}>
            <p>The Power of an Access Database</p>
          </div>
        </a>
        <a href="#SQL-Server">
          <div className={styles.contentLink}>
            <p>Access with SQL Server Back-End</p>
          </div>
        </a>
        <a href="#Visual-Studio-Databases">
          <div className={styles.contentLink}>
            <p>Visual Studio Databases</p>
          </div>
        </a>
        <a href="#cloud-based-azure">
          <div className={styles.contentLink}>
            <p>Cloud Based Azure Databases</p>
          </div>
        </a>
        <a href="#web-and-database">
          <div className={styles.contentLink}>
            <p>Mobile, Web and Database Integrated Solutions</p>
          </div>
        </a>
        <a href="#SharePoint-Solutions">
          <div className={styles.contentLink}>
            <p>SharePoint Solutions</p>
          </div>
        </a>
        <a href="#ASP.net">
          <div className={styles.contentLink}>
            <p>Web Databases using ASP.net</p>
          </div>
        </a>
      </div>

      <div className={styles.info}>
        <h2>We Design Database Solutions!</h2>
        <p>
          Our experts are highly skilled in Microsoft database development. If
          you need help designing or determining what is best for your business,
          our experienced programmers can help analyse and develop a database
          solution that suits your organisation's requirements. Our experienced
          database consultants are ready to help.
        </p>
      </div>
    </section>
  );
};

export default PageSegmentMain2;
