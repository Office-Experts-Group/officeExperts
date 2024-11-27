import React from "react";
import Image from "next/image";
import styles from "../../../../../styles/contents.module.scss";
import semi from "../../../../../public/shapes/semiCircle.webp";

const ContentsSection = () => {
  return (
    <section className={styles.contentsSection}>
      <Image src={semi} alt="shape icon" height={400} width={400} />

      <div className={styles.contentBox} id="requirements">
        <h3>Access/Azure Requirements</h3>
        <div className={styles.contentList}>
          <div className={styles.contentItem}>
            <p>Windows PC/Tablet</p>
          </div>
          <div className={styles.contentItem}>
            <p>
              Install Microsoft Access or the free Access run time on each
              device
            </p>
          </div>
          <div className={styles.contentItem}>
            <p>Install the free Azure driver</p>
          </div>
          <div className={styles.contentItem}>
            <p>Internet connection</p>
          </div>
          <div className={styles.contentItem}>
            <p>
              Azure subscription{" "}
              <span>
                (We can host and maintain your Azure Database for you)
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.contentBox} id="alternatives">
        <h3>Alternatives to Access/Azure</h3>
        <div className={styles.contentList}>
          <div className={styles.contentItem}>
            <p>ASP/SQL Server Azure Based Application</p>
          </div>
          <div className={styles.contentItem}>
            <p>VB.NET or C#.NET + SQL Server Application</p>
          </div>
          <div className={styles.contentItem}>
            <p>ASP.NET Web Application</p>
          </div>
          <div className={styles.contentItem}>
            <p>Client/Server Access Applications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentsSection;
