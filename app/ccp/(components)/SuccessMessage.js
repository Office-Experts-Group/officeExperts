"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../../styles/payment.module.scss";

const SuccessMessage = ({ reference, amount, date, authCode }) => {
  const [formattedDate, setFormattedDate] = useState("");
  const [formattedAmount, setFormattedAmount] = useState("");

  useEffect(() => {
    // Format date
    if (date) {
      try {
        const dateObj = new Date(parseInt(date));
        setFormattedDate(
          dateObj.toLocaleString("en-AU", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })
        );
      } catch (e) {
        setFormattedDate("N/A");
      }
    }

    // Format amount from cents to dollars
    if (amount) {
      try {
        const amountInDollars = (parseInt(amount) / 100).toFixed(2);
        setFormattedAmount(`$${amountInDollars}`);
      } catch (e) {
        setFormattedAmount("N/A");
      }
    }
  }, [date, amount]);

  return (
    <section className={styles.paymentContainer}>
      <div className={styles.successWrapper}>
        <div className={styles.successIcon}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="11"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M6 12L10 16L18 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1>Payment Successful</h1>

        <div className={styles.receiptDetails}>
          <p>
            Thank you for your payment. Your transaction has been completed
            successfully.
          </p>

          <div className={styles.receiptGrid}>
            <div className={styles.receiptRow}>
              <span className={styles.receiptLabel}>Invoice Number:</span>
              <span className={styles.receiptValue}>{reference}</span>
            </div>

            <div className={styles.receiptRow}>
              <span className={styles.receiptLabel}>Amount Paid:</span>
              <span className={styles.receiptValue}>{formattedAmount}</span>
            </div>

            <div className={styles.receiptRow}>
              <span className={styles.receiptLabel}>Payment Date:</span>
              <span className={styles.receiptValue}>{formattedDate}</span>
            </div>

            <div className={styles.receiptRow}>
              <span className={styles.receiptLabel}>Authorization Code:</span>
              <span className={styles.receiptValue}>{authCode || "N/A"}</span>
            </div>
          </div>
        </div>

        <div className={styles.receiptActions}>
          <p>
            A receipt has been emailed to you. Please keep it for your records.
          </p>

          <Link href="/" className={`btn ${styles.homeLink}`}>
            Return to Home
          </Link>
        </div>

        <div className={styles.contactInfo}>
          <p>
            If you have any questions about your payment, please contact our
            accounts team at:
            <br />
            <a href="mailto:accounts@officeexperts.com.au">
              accounts@officeexperts.com.au
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessMessage;
