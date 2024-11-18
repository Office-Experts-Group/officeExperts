import Link from "next/link";
import React from "react";

import styles from "../styles/servicesCard.module.css";

const ContactDetails = () => {
  return (
    <div className={styles.contactCardWrapper}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <h3>Company Details</h3>
          <p>Name: Brayalei Pty Ltd</p>
          <p>ABN: 32 093 067 737</p>
          <p>ACN: 093 067 737</p>
        </div>

        <div className={styles.cardContent}>
          <h4>Trading As:</h4>
          <ul>
            <li>Office Experts Group</li>
            <li>Excel Experts</li>
            <li>Word Experts</li>
          </ul>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardImage}>
          <h3>
            Frequently<br></br>Asked Questions
          </h3>
        </div>

        <div className={styles.cardContent}>
          <h3>Visit our</h3>
          <p>
            <Link href={"https://www.officeexperts.com.au/faq"}>FAQ Page</Link>
            <br></br> to answer many of your questions and learn more about us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
