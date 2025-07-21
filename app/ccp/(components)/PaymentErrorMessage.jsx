// app/ccp/(components)/PaymentErrorMessage.jsx
"use client";
import React from "react";
import Link from "next/link";
import styles from "../../../styles/payment.module.scss";

const PaymentErrorMessage = ({
  error,
  responseCode,
  canRetry = true,
  suggestedAction,
  invoiceNumber,
  customerName,
}) => {
  const getErrorIcon = (responseCode) => {
    // Different icons for different types of errors
    if (["51", "61"].includes(responseCode)) return "💳"; // Insufficient funds/limits
    if (["54", "78"].includes(responseCode)) return "🚫"; // Expired/blocked cards
    if (["82", "84"].includes(responseCode)) return "🔐"; // Security issues
    if (["91", "96"].includes(responseCode)) return "⚠️"; // Technical issues
    return "❌"; // Default error
  };

  const getErrorTitle = (responseCode) => {
    if (["51", "61"].includes(responseCode)) return "Payment Limit Issue";
    if (["54", "78"].includes(responseCode)) return "Card Issue";
    if (["82", "84"].includes(responseCode))
      return "Security Verification Failed";
    if (["91", "96"].includes(responseCode)) return "Technical Issue";
    return "Payment Declined";
  };

  const handleRetryPayment = () => {
    // Reload the page to retry payment
    window.location.reload();
  };

  const handleContactSupport = () => {
    const subject = `Payment Issue - Invoice ${invoiceNumber}`;
    const body = `Hello,

I encountered an issue while trying to pay invoice ${invoiceNumber}.

Error Details:
- Customer: ${customerName}
- Error Code: ${responseCode || "N/A"}
- Error Message: ${error}
- Suggested Action: ${suggestedAction || "N/A"}

Please assist me with completing this payment.

Thank you,
${customerName}`;

    window.location.href = `mailto:accounts@officeexperts.com.au?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className={styles.paymentContainer}>
      <div className={styles.errorWrapper}>
        <div className={styles.errorHeader}>
          <div className={styles.errorIconLarge}>
            {getErrorIcon(responseCode)}
          </div>
          <h1>{getErrorTitle(responseCode)}</h1>
          <p className={styles.errorSubtext}>
            We were unable to process your payment
          </p>
        </div>

        <div className={styles.errorDetails}>
          <div className={styles.errorMessage}>
            <h3>What happened?</h3>
            <p>{error}</p>

            {suggestedAction && (
              <div className={styles.suggestedAction}>
                <h4>💡 Suggested Solution:</h4>
                <p>{suggestedAction}</p>
              </div>
            )}
          </div>

          {responseCode && (
            <div className={styles.technicalDetails}>
              <details>
                <summary>Technical Details</summary>
                <p>Error Code: {responseCode}</p>
                <p>Invoice: {invoiceNumber}</p>
                <p>Customer: {customerName}</p>
              </details>
            </div>
          )}
        </div>

        <div className={styles.errorActions}>
          {canRetry && (
            <button
              onClick={handleRetryPayment}
              className={`btn ${styles.retryButton}`}
            >
              🔄 Try Again
            </button>
          )}

          <button
            onClick={handleContactSupport}
            className={`btn ${styles.supportButton}`}
          >
            📧 Contact Support
          </button>

          <Link href="/" className={`btn ${styles.homeButton}`}>
            🏠 Return Home
          </Link>
        </div>

        <div className={styles.helpSection}>
          <h4>Common Solutions:</h4>
          <div className={styles.helpGrid}>
            <div className={styles.helpItem}>
              <span className={styles.helpIcon}>💳</span>
              <div>
                <h5>Try a Different Card</h5>
                <p>Use another credit or debit card</p>
              </div>
            </div>

            <div className={styles.helpItem}>
              <span className={styles.helpIcon}>🏦</span>
              <div>
                <h5>Contact Your Bank</h5>
                <p>Your bank may have declined the transaction</p>
              </div>
            </div>

            <div className={styles.helpItem}>
              <span className={styles.helpIcon}>🔍</span>
              <div>
                <h5>Check Card Details</h5>
                <p>Verify number, expiry date, and CVV</p>
              </div>
            </div>

            <div className={styles.helpItem}>
              <span className={styles.helpIcon}>💰</span>
              <div>
                <h5>Check Available Funds</h5>
                <p>Ensure sufficient balance or credit limit</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contactInfo}>
          <h4>Need Immediate Help?</h4>
          <div className={styles.contactMethods}>
            <div className={styles.contactMethod}>
              <span>📧</span>
              <div>
                <strong>Email Support</strong>
                <a href="mailto:accounts@officeexperts.com.au">
                  accounts@officeexperts.com.au
                </a>
              </div>
            </div>

            <div className={styles.contactMethod}>
              <span>📞</span>
              <div>
                <strong>Phone Support</strong>
                <a href="tel:1300102810">1300 10 28 10</a>
              </div>
            </div>
          </div>

          <p className={styles.businessHours}>
            Business Hours: Monday - Friday, 9:00 AM - 5:00 PM AEST
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentErrorMessage;
