import React from "react";
import Image from "next/image";

import styles from "../../../../../styles/contents.module.css";

import semi from "../../../../../public/shapes/semiCircle.webp";

const ContentsSection = () => {
  return (
    <section className={styles.contentsBox}>
      <Image src={semi} alt="shape icon" height={400} width={400} />
      <div
        className={`${styles.contents} ${styles.scrollMargin}`}
        id="requirements"
      >
        <h3>Access/Azure Requirements</h3>

        <div className={styles.contentLink}>
          <p>Windows PC/Tablet</p>
        </div>

        <div className={styles.contentLink}>
          <p>
            Install Microsoft Access or the free Access run time on each device
          </p>
        </div>

        <div className={styles.contentLink}>
          <p>Install the free Azure driver</p>
        </div>

        <div className={styles.contentLink}>
          <p>Internet connection</p>
        </div>

        <div className={styles.contentLink}>
          <p>
            Azure subscription (We can host and maintain your Azure Database for
            you)
          </p>
        </div>
      </div>

      <div
        className={`${styles.contents} ${styles.scrollMargin}`}
        id="alternatives"
      >
        <h3>Alternatives to Access/Azure</h3>

        <div className={styles.contentLink}>
          <p>ASP/SQL Server Azure Based Application</p>
        </div>

        <div className={styles.contentLink}>
          <p>VB.NET or C#.NET + SQL Server Application</p>
        </div>

        <div className={styles.contentLink}>
          <p>ASP.NET Web Application</p>
        </div>

        <div className={styles.contentLink}>
          <p>Client/Server Access Applications</p>
        </div>
      </div>
    </section>
  );
};

export default ContentsSection;
