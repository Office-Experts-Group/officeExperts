import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/promo.module.css";

import computer from "../../../../../public/icons/computer.webp";
import promo from "../../../../../public/promo.webp";

const Promo = ({ h2, p }) => {
  return (
    <section className={styles.promo} id="experts">
      <AnimateOnScroll animation="scale-up" duration={1}>
        <div className={styles.content}>
          <div className={styles.circle}>
            <Image src={computer} alt="computer icon" width={30} height={30} />
          </div>
          <div className={styles.text} style={{ marginLeft: "2rem" }}>
            <h2>Our Experts can Help!</h2>
            <p style={{ marginBottom: "1rem" }}>
              Our consultants can cloud enable your existing database by
              migrating part of your database to{" "}
              <Link href="/access-azure-cloud-based-solutions">
                Microsoft Azure
              </Link>
              . Then your data will be{" "}
              <Link href="https://www.officeexperts.com.au/services/by-business-solution/cloud-based-solutions-with-azure">
                hosted in the cloud
              </Link>{" "}
              with Microsoft and you can access your data from anywhere.
            </p>
            <p>
              If upgrading your database is not going to help your situation
              then our experts can migrate or re-write your database in other
              platforms like
              <Link href="https://www.officeexperts.com.au/services/microsoft-dot-net">
                .NET,{" "}
              </Link>
              <Link href="https://www.officeexperts.com.au/services/by-business-solution/office-and-sql-server-integration">
                SQL Server{" "}
              </Link>
              and{" "}
              <Link href="https://www.officeexperts.com.au/services/by-business-solution/online-solutions">
                SharePoint.
              </Link>
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={1} delay={0.3}>
        <div className={styles.img}>
          <div className={styles.barLarge}></div>
          <Image
            src={promo}
            alt="person at a computer"
            width={260}
            height={120}
          />
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Promo;
