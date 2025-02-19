"use client";
import React from "react";
import Link from "next/link";
import styles from "../../../styles/payment.module.scss";

const NoParamsMessage = () => {
  return (
    <section className={styles.paymentContainer}>
      <div className={styles.errorWrapper}>
        <h1>Payment Information Missing</h1>
        <div className={styles.errorMessage}>
          <p>
            Your invoice parameters were not passed to this page. Please be sure
            to follow the custom link provided on your invoice to easily pay
            your invoice by credit card.
          </p>
          <p>If you have questions about your invoice, please contact us at:</p>
          <p className={styles.contactEmail}>
            <a href="mailto:accounts@officeexperts.com.au">
              accounts@officeexperts.com.au
            </a>
          </p>
          <div className={styles.homeLink}>
            <Link href="/">Return to Home Page</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoParamsMessage;
