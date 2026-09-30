// app/ccp/(components)/SuccessMessage.js
// Receipt screen shown after an approved payment.
//
// SURCHARGE REMOVAL: the base amount / surcharge breakdown and the surcharge
// note have been removed. The receipt now shows a single "Amount Paid".
//
// This remains a client component because the date is formatted in the
// customer's own time zone (the server runs in UTC, which would otherwise
// cause a hydration mismatch) and the email notice can be dismissed.

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
// Turns a card code (e.g. "VISA") into a friendly label
import { getCardDisplayName } from "../../../utils/cardTypeUtils";

import styles from "../../../styles/payment.module.scss";

/**
 * Converts a cents value (string or number) to a "$0.00" string.
 * Returns "N/A" if the value can't be parsed.
 */
function formatCents(cents) {
  const parsed = parseInt(cents);
  return isNaN(parsed) ? "N/A" : `$${(parsed / 100).toFixed(2)}`;
}

/**
 * Formats a millisecond timestamp as e.g. "30 September 2026, 10:51 am".
 */
function formatPaymentDate(timestamp) {
  const parsed = parseInt(timestamp);
  if (isNaN(parsed)) return "N/A";

  return new Date(parsed).toLocaleString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

const SuccessMessage = ({
  reference,
  amount,
  date,
  authCode,
  cardType,
  customerEmail,
  customerName,
  emailStatus,
}) => {
  const [formattedDate, setFormattedDate] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showEmailStatus, setShowEmailStatus] = useState(false);

  useEffect(() => {
    // Formatted after mount so the customer's local time zone is used
    if (date) setFormattedDate(formatPaymentDate(date));
    setIsLoading(false);

    // Show the email delivery notice briefly
    if (emailStatus) {
      setShowEmailStatus(true);
      const timer = setTimeout(() => setShowEmailStatus(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [date, emailStatus]);

  if (isLoading) {
    return (
      <section className={styles.paymentContainer}>
        <div className={styles.loadingWrapper}>
          <div className={styles.spinner}></div>
          <p>Loading transaction details...</p>
        </div>
      </section>
    );
  }

  const formattedAmount = formatCents(amount);
  const cardDisplayName = cardType
    ? getCardDisplayName(cardType)
    : "Credit Card";

  return (
    <section className={styles.paymentContainer}>
      <div className={styles.successWrapper}>
        {/* Email Status Notification */}
        {showEmailStatus && (
          <div
            className={`${styles.emailStatusNotification} ${
              emailStatus?.customerEmail
                ? styles.emailSuccess
                : styles.emailWarning
            }`}
          >
            <div className={styles.emailStatusContent}>
              {emailStatus?.customerEmail ? (
                <>
                  <span className={styles.emailStatusIcon}>📧✅</span>
                  <div>
                    <strong>Confirmation Email Sent</strong>
                    <p>A receipt has been sent to {customerEmail}</p>
                  </div>
                </>
              ) : (
                <>
                  <span className={styles.emailStatusIcon}>📧⚠️</span>
                  <div>
                    <strong>Email Delivery Issue</strong>
                    <p>
                      Your payment was successful, but we couldn't send the
                      confirmation email. Please contact us for a receipt.
                    </p>
                  </div>
                </>
              )}
            </div>
            <button
              className={styles.dismissButton}
              onClick={() => setShowEmailStatus(false)}
              aria-label="Dismiss notification"
            >
              ×
            </button>
          </div>
        )}

        {/* Success Animation */}
        <div className={styles.successIconWrapper}>
          <div className={styles.successIcon}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.checkIcon}
            >
              <circle
                cx="12"
                cy="12"
                r="11"
                stroke="currentColor"
                strokeWidth="2"
                className={styles.checkCircle}
              />
              <path
                d="M6 12L10 16L18 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.checkMark}
              />
            </svg>
          </div>
          <div className={styles.successMessage}>
            <h1>Payment Successful!</h1>
            <p className={styles.successSubtext}>
              Your payment has been processed successfully
            </p>
          </div>
        </div>

        {/* Transaction Receipt */}
        <div className={styles.receiptCard}>
          <div className={styles.receiptHeader}>
            <h2>Transaction Receipt</h2>
            <div className={styles.receiptNumber}>Receipt #{reference}</div>
          </div>

          <div className={styles.receiptDetails}>
            <div className={styles.receiptGrid}>
              {/* Customer Information */}
              <div className={styles.receiptSection}>
                <h3>Customer Details</h3>
                <div className={styles.receiptRow}>
                  <span className={styles.receiptLabel}>Name:</span>
                  <span className={styles.receiptValue}>{customerName}</span>
                </div>
                <div className={styles.receiptRow}>
                  <span className={styles.receiptLabel}>Email:</span>
                  <span className={styles.receiptValue}>{customerEmail}</span>
                </div>
              </div>

              {/* Payment Information */}
              <div className={styles.receiptSection}>
                <h3>Payment Details</h3>
                <div className={styles.receiptRow}>
                  <span className={styles.receiptLabel}>Invoice Number:</span>
                  <span className={styles.receiptValue}>{reference}</span>
                </div>

                <div className={styles.receiptRow}>
                  <span className={styles.receiptLabel}>Payment Method:</span>
                  <span className={styles.receiptValue}>
                    {cardDisplayName}
                    {cardType && cardType !== "UNKNOWN" && (
                      <span className={styles.cardTypeBadge}>
                        {cardDisplayName}
                      </span>
                    )}
                  </span>
                </div>

                <div className={styles.receiptRow}>
                  <span className={styles.receiptLabel}>Payment Date:</span>
                  <span className={styles.receiptValue}>{formattedDate}</span>
                </div>

                {authCode && (
                  <div className={styles.receiptRow}>
                    <span className={styles.receiptLabel}>Authorisation:</span>
                    <span className={styles.receiptValue}>{authCode}</span>
                  </div>
                )}
              </div>

              {/* Amount */}
              <div className={styles.receiptSection}>
                <h3>Amount</h3>
                <div className={styles.receiptRowTotal}>
                  <span className={styles.receiptLabel}>Amount Paid:</span>
                  <span className={styles.receiptValueTotal}>
                    {formattedAmount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={styles.receiptActions}>
          <Link href="/" className={`btn ${styles.homeButton}`}>
            <span>🏠</span>
            Return to Home
          </Link>
        </div>

        {/* Additional Information */}
        <div className={styles.additionalInfo}>
          <div className={styles.confirmationNote}>
            <h4>📝 Important Notes</h4>
            <ul>
              <li>
                {emailStatus?.customerEmail
                  ? `A confirmation email has been sent to ${customerEmail}`
                  : `Please contact us at accounts@officeexperts.com.au for a receipt copy`}
              </li>
              <li>Please keep this receipt for your records</li>
              <li>
                Your payment will appear on your statement as "Office Experts
                Group"
              </li>
            </ul>
          </div>

          <div className={styles.contactInfo}>
            <h4>📞 Need Help?</h4>
            <p>
              If you have any questions about your payment or need assistance:
            </p>
            <div className={styles.contactDetails}>
              <div className={styles.contactMethod}>
                <span>📧</span>
                <a href="mailto:accounts@officeexperts.com.au">
                  accounts@officeexperts.com.au
                </a>
              </div>
              <div className={styles.contactMethod}>
                <span>📞</span>
                <a href="tel:1300102810">1300 10 28 10</a>
              </div>
            </div>
          </div>
        </div>

        {/* Security Information */}
        <div className={styles.securityFooter}>
          <div className={styles.securityBadges}>
            <span className={styles.securityBadge}>🔒 SSL Encrypted</span>
            <span className={styles.securityBadge}>
              🏛️ Commonwealth Bank Secured
            </span>
            <span className={styles.securityBadge}>✅ PCI Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessMessage;
