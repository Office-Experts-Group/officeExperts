"use client";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/payment.module.scss";

import { getPaymentConfig } from "../../../utils/paymentSelector";

const SimplifyPaymentForm = ({ params }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [formError, setFormError] = useState(null);

  const paymentConfig = getPaymentConfig();

  if (paymentConfig.method === "bpoint") {
    return <BpointPaymentForm params={params} config={paymentConfig.config} />;
  }

  // Extract parameters
  const {
    A: amountInCents,
    I: invoiceNumber,
    C: customerName,
    E: customerEmail,
    S: surchargeAmount,
  } = params;

  // Format the amount as dollars (from cents)
  const amountInDollars = (parseInt(amountInCents) / 100).toFixed(2);

  // Determine which key to use based on environment
  const isProduction = process.env.NODE_ENV === "production";
  const publicKey = isProduction
    ? "lvpb_YmI4MDBkNTMtY2EyMy00NTg0LWIyNWEtYmE1ODZmOTA2ZWY5"
    : "sbpb_YjhmZjVlNTUtNDM1NS00ZGM2LWI1N2QtNTExMDNjNGUyZGYz";

  // The redirect URL should be consistent between server and client and include the full domain
  const baseUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : isProduction
      ? "https://www.officeexperts.com.au"
      : "http://localhost:3000";

  const redirectUrl = `${baseUrl}/ccp`;

  useEffect(() => {
    // Check for Simplify script loading
    const checkScriptLoaded = setInterval(() => {
      if (window.SimplifyCommerce) {
        setIsLoading(false);
        clearInterval(checkScriptLoaded);
      }
    }, 500);

    // Timeout after 15 seconds
    const timeout = setTimeout(() => {
      if (isLoading) {
        setFormError(
          "Payment form could not be loaded. Please refresh the page or try again later."
        );
        clearInterval(checkScriptLoaded);
      }
    }, 15000);

    // Add a listener to catch 401 Unauthorized errors
    const handleMessageEvent = (event) => {
      // Only process messages from Simplify or our own domain
      if (
        event.origin.includes("simplify.com") ||
        event.origin === window.location.origin
      ) {
        if (
          event.data &&
          typeof event.data === "string" &&
          event.data.includes("error")
        ) {
          try {
            const errorData = JSON.parse(event.data);
            if (
              errorData.status === 401 ||
              errorData.message.includes("unauthorized")
            ) {
              setFormError(
                "There was an issue with the payment gateway. Please contact support at consult@officeexperts.com.au."
              );
            }
          } catch (e) {
            // If we can't parse the error, at least log it
            console.error("Payment error:", event.data);
          }
        }
      }
    };

    window.addEventListener("message", handleMessageEvent);

    return () => {
      clearInterval(checkScriptLoaded);
      clearTimeout(timeout);
      window.removeEventListener("message", handleMessageEvent);
    };
  }, [isLoading]);

  return (
    <section className={styles.paymentContainer}>
      <div className={styles.paymentWrapper}>
        <div className={styles.paymentHeader}>
          <h1>Credit Card Payment</h1>
          <p className={styles.description}>
            You are about to pay invoice <strong>Inv {invoiceNumber}</strong>{" "}
            for <strong>${amountInDollars}</strong>.
          </p>
          {surchargeAmount && (
            <p className={styles.surcharge}>
              This amount includes a credit card surcharge of ${surchargeAmount}
              .
            </p>
          )}
        </div>

        <div className={styles.formContainer}>
          {isLoading && (
            <div className={styles.loadingState}>
              <div className={styles.spinner}></div>
              <p>Loading payment form...</p>
            </div>
          )}

          {formError && (
            <div className={styles.errorState}>
              <p>{formError}</p>
              <button
                onClick={() => window.location.reload()}
                className={styles.retryButton}
              >
                Retry
              </button>
              <p className={styles.contactSupport}>
                If this problem persists, please contact us at:
                <br />
                <a href="mailto:consult@officeexperts.com.au">
                  consult@officeexperts.com.au
                </a>
              </p>
            </div>
          )}

          <iframe
            name="my-hosted-form"
            data-sc-key={publicKey}
            data-name="Office Experts Group"
            data-description={`Inv ${invoiceNumber}`}
            data-reference={`Inv ${invoiceNumber}`}
            data-amount={amountInCents}
            data-color="#046999"
            data-receipt="true"
            data-customer-email={customerEmail}
            data-customer-name={customerName}
            data-redirect-url={redirectUrl}
            id="simplify-checkout-embed-frame"
            title="Credit Card Payment Form"
            className={`${styles.paymentFrame} ${
              isLoading ? styles.hidden : ""
            }`}
            allow="payment; accelerometer; gyroscope; magnetometer"
            sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-storage-access-by-user-activation"
            style={{ display: isLoading || formError ? "none" : "block" }}
            onLoad={() => setIsLoading(false)}
          />
        </div>

        <div className={styles.securityInfo}>
          <p>
            All payments are processed securely through CommBank Simplify.
            <br />
            Your credit card details are not stored on our servers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SimplifyPaymentForm;
