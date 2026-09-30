// app/ccp/(components)/BpointPaymentForm.jsx
// Client-side card entry form for Bpoint (Commonwealth Bank) payments.
//
// SURCHARGE REMOVAL: the customer is now charged the invoice amount only.
// Card type is still detected, but purely to show the card badge and to tag
// the transaction (Crn2) for reconciliation — it no longer affects the price.

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../../styles/payment.module.scss";
// detectCardType: works out Visa/Mastercard/Amex etc. from the card's BIN
// getCardDisplayName: turns that code into a friendly label for the badge
import {
  detectCardType,
  getCardDisplayName,
} from "../../../utils/cardTypeUtils";

// Customer-facing messages for Bpoint response codes.
// Bpoint concatenates Response Code + Bank Response Code, e.g. 2 + 05 = "205".
const ERROR_MESSAGES = {
  // Success codes
  0: "Payment approved successfully",
  "008": "Payment approved - ID verification required",
  "016": "Payment approved - Track 3 updated",

  // Response Code 1 + Bank Response Codes
  109: "Transaction in progress",
  110: "Approved for partial amount",
  111: "Approved (VIP)",
  112: "Invalid transaction. Please check your details and try again.",
  113: "Invalid amount. Please contact support.",
  117: "Transaction cancelled by customer",
  118: "Transaction disputed by customer",
  120: "Invalid response from bank",
  121: "No action taken by bank",
  122: "Suspected system malfunction. Please try again.",
  123: "Transaction fee not acceptable",
  124: "File update not supported",
  126: "Duplicate file update record",
  127: "File update field edit error",
  128: "File update file locked",
  129: "File update not successful, contact acquirer",
  130: "Format error. Please check your details and try again.",
  132: "Transaction completed partially",
  135: "Please contact your bank",
  137: "Please contact your bank's security department",
  138: "Too many incorrect PIN attempts. Please contact your bank.",
  140: "This transaction type is not supported",
  142: "No universal account found",
  144: "No investment account found",
  152: "No cheque account found for this card",
  153: "No savings account found for this card",
  155: "Incorrect PIN entered. Please try again.",
  156: "No card record found",
  157: "This transaction is not permitted for your card. Please try a different card.",
  158: "This transaction is not permitted. Please contact your bank.",
  160: "Please contact your bank",
  162: "Your card is restricted. Please contact your bank or try a different card.",
  163: "Security violation detected",
  164: "Original transaction amount is incorrect",
  166: "Please contact your bank's security department",
  167: "Card must be retained by ATM",
  175: "Maximum PIN attempts exceeded. Please contact your bank.",
  176: "PIN attempts exceeded. Please contact your bank.",
  177: "PIN data does not match. Please try again.",
  178: "Your card is blocked. Please contact your bank.",
  179: "Card lifecycle issue (Mastercard)",
  182: "Transaction blocked by policy (Mastercard)",
  183: "Fraud/Security block (Mastercard)",
  193: "Transaction violates regulations and cannot be completed",
  194: "Duplicate transaction detected",
  195: "Reconciliation error occurred",
  196: "System error occurred. Please try again or contact support.",
  197: "System reconciliation in progress",

  // Response Code 2 + Bank Response Codes
  201: "Please contact your card issuer",
  202: "Please contact your card issuer for special conditions",
  203: "Invalid merchant configuration",
  204: "Card must be retained. Please contact your bank.",
  205: "Your card was declined. Please contact your bank or try a different card.",
  206: "System error occurred. Please try again.",
  207: "Card must be retained due to special conditions",
  214: "Invalid card number. Please check your card number and try again.",
  215: "Card issuer not found. Please check your card or try a different one.",
  219: "Please re-enter the transaction details",
  225: "Unable to locate transaction record",
  231: "Bank not supported by payment system",
  234: "Suspected fraud. Please contact your bank.",
  236: "Your card is restricted. Please contact your bank.",
  239: "No credit account found for this card",
  241: "Card reported as lost. Please contact your bank.",
  243: "Card reported as stolen. Please contact your bank.",
  259: "Suspected fraud. Please contact your bank.",
  261: "Transaction exceeds withdrawal limit. Please contact your bank.",
  265: "Transaction frequency limit exceeded. Please try again later.",
  290: "System maintenance in progress. Please try again in a few minutes.",
  291: "Bank system temporarily unavailable. Please try again in a few minutes.",
  292: "Unable to route transaction to your bank. Please try again.",
  298: "Security error occurred",
  299: "System error occurred",

  // Response Code 3 + Bank Response Codes
  368: "Transaction response received too late",

  // Response Code 4 + Bank Response Codes
  433: "Your card has expired. Please check the expiry date or use a different card.",
  454: "Your card has expired. Please check the expiry date or use a different card.",

  // Response Code 5 + Bank Response Codes
  551: "Insufficient funds. Please check your account balance or try a different card.",

  // Single digit/character codes
  6: "Transaction declined - Error communicating with bank",
  7: "Payment processing error - Please check your card details and try again",
  8: "Transaction declined - This transaction type is not supported",
  9: "Your bank declined this transaction. Please try a different card.",
  A: "Transaction was aborted",
  C: "Transaction was cancelled",
  D: "Transaction is deferred",
  E: "Bank returned a referral response",
  F: "3D Secure authentication failed. Please try again.",
  I: "Card security code verification failed. Please check your CVV.",
  L: "Transaction is locked - another payment is in progress",
  N: "Card is not enrolled in 3D Secure",
  P: "Transaction is pending processing",
  R: "Too many retry attempts. Please try again later.",
  S: "Duplicate transaction detected",
  U: "Card security code verification failed. Please check your CVV.",

  // PT_ codes
  PT_E1: "Database error occurred. Please try again or contact support.",
  PT_E2: "Unable to process card details securely",
  PT_E3: "Unable to process card details securely",
  PT_E4: "Payment system is shutting down. Please try again later.",
  PT_E5: "Payment system is busy. Please try again in a few minutes.",
  PT_E6: "Payment processing was aborted due to system shutdown",
  PT_G1: "Payment gateway configuration error. Please contact support.",
  PT_G2: "Unable to build payment request",
  PT_G3: "Unable to connect to payment gateway",
  PT_G4: "Unable to send payment request",
  PT_G5: "Unable to receive payment response",
  PT_G6: "Unable to process payment transaction",
  PT_G7: "Payment server is busy. Please try again.",
  PT_G8: "Unable to process payment response",
  PT_G9: "PayPal gateway error",
  PT_G10: "PayPal response missing payment details",
  PT_G11: "PayPal communication error",
  PT_G12: "Payment gateway error occurred",
  PT_G13: "Payment response timeout",
  PT_V1: "Invalid transaction type",
  PT_V2: "Invalid financial transaction type",
  PT_V3: "Invalid amount specified",
  PT_V4: "Invalid card number. Please check your card number and try again.",
  PT_V5: "Invalid expiry date. Please check the expiry date format.",
  PT_V6: "Invalid CVV. Please check your security code and try again.",
  PT_V7: "Transaction type not supported by gateway",
  PT_V8: "Reversal not supported",
  PT_V9: "Merchant/biller details not found",
  PT_V10: "Unable to retrieve merchant/biller details",
  PT_V11: "Cardholder not authenticated (3D Secure)",
  PT_V12: "Error authenticating cardholder (3D Secure)",
  PT_V13: "Invalid BSB number",
  PT_V14: "Invalid account number",
  PT_V15: "Invalid account name",
  PT_V16: "Payment details not provided",
  PT_V17: "No valid Direct Debit Authority found",
  PT_V18: "Payment failed fraud validation",
  PT_V19: "Daily refund limit reached",
  PT_V20: "Daily refund amount limit exceeded",
  PT_V21: "Transaction blocked",
  PT_V22: "Invalid payment method for browser integration",
  PT_V23: "Currency mismatch in refund transaction",
};

/**
 * Returns a friendly message for a Bpoint response code, with a generic
 * fallback for any code not in the table.
 */
function getDetailedErrorMessage(responseCode) {
  return (
    ERROR_MESSAGES[responseCode] ||
    `Payment declined (Code: ${responseCode}). Please contact your bank or try a different card.`
  );
}

/**
 * Checks the card fields before anything is sent to the server.
 * Returns an error string, or null when everything looks valid.
 */
function validateCardDetails(cardDetails) {
  if (
    !cardDetails.cardNumber ||
    cardDetails.cardNumber.replace(/\s/g, "").length < 13
  ) {
    return "Please enter a valid card number";
  }
  if (!cardDetails.expiryDate || cardDetails.expiryDate.length !== 4) {
    return "Please enter a valid expiry date (MMYY)";
  }
  if (!cardDetails.cvn || cardDetails.cvn.length < 3) {
    return "Please enter a valid CVN";
  }
  if (!cardDetails.cardHolderName.trim()) {
    return "Please enter the card holder name";
  }

  // Cards are valid until the end of their expiry month, so compare against
  // the first day of that month
  const month = parseInt(cardDetails.expiryDate.slice(0, 2));
  const year = parseInt("20" + cardDetails.expiryDate.slice(2, 4));
  const expiryDate = new Date(year, month - 1);

  if (expiryDate <= new Date()) {
    return "Card has expired. Please check the expiry date";
  }

  return null;
}

const BpointPaymentForm = ({ params }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [processingStage, setProcessingStage] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvn: "",
    cardHolderName: "",
  });
  const [detectedCardType, setDetectedCardType] = useState(null);

  const router = useRouter();

  // Invoice values decoded from the "q" parameter. Any legacy "S" (surcharge)
  // value on older invoice links is intentionally not read.
  const {
    A: amountInCents,
    I: invoiceNumber,
    C: customerName,
    E: customerEmail,
  } = params;

  // The invoice amount is the amount charged — no surcharge is added
  const amount = parseInt(amountInCents);
  const displayAmount = `$${(amount / 100).toFixed(2)}`;

  const handleCardInputChange = (field, value) => {
    if (field === "expiryDate") {
      // Digits only, MMYY (4 digits max)
      let cleaned = value.replace(/\D/g, "").slice(0, 4);

      // Reject an impossible month as soon as two digits are entered
      if (cleaned.length >= 2) {
        const month = parseInt(cleaned.slice(0, 2));
        if (month < 1 || month > 12) return;
      }

      setCardDetails((prev) => ({ ...prev, [field]: cleaned }));
    } else if (field === "cardNumber") {
      // Digits only, displayed in groups of four (max 16 digits + 3 spaces)
      const cleaned = value.replace(/\D/g, "");
      const formatted = cleaned
        .replace(/(.{4})/g, "$1 ")
        .trim()
        .slice(0, 19);

      setCardDetails((prev) => ({ ...prev, [field]: formatted }));

      // The leading digits identify the card scheme. Used for the badge and
      // transaction tagging only — not pricing.
      setDetectedCardType(cleaned.length >= 2 ? detectCardType(cleaned) : null);
    } else if (field === "cvn") {
      // Digits only, max 4 (Amex uses 4)
      const cleaned = value.replace(/\D/g, "").slice(0, 4);
      setCardDetails((prev) => ({ ...prev, [field]: cleaned }));
    } else {
      setCardDetails((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handlePayment = async () => {
    setError(null);

    const validationError = validateCardDetails(cardDetails);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    setProcessingStage("Validating card details...");

    try {
      const requestPayload = {
        amount,
        invoiceNumber,
        customerName,
        customerEmail,
        cardNumber: cardDetails.cardNumber.replace(/\s/g, ""),
        expiryDate: cardDetails.expiryDate,
        cvn: cardDetails.cvn,
        cardHolderName: cardDetails.cardHolderName.trim(),
        cardType: detectedCardType,
      };

      setProcessingStage("Connecting to payment gateway...");

      const response = await fetch("/api/bpoint/create-authkey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestPayload),
      });

      setProcessingStage("Processing payment...");

      const responseData = await response.json();

      if (responseData.success && responseData.transaction) {
        setProcessingStage("Payment successful! Preparing receipt...");

        // The API returns camelCase keys (txnNumber, authoriseId, amount).
        // "reference" stays as the invoice number because the receipt
        // labels it "Invoice Number".
        const { transaction } = responseData;

        const successParams = new URLSearchParams({
          paymentStatus: "APPROVED",
          reference: invoiceNumber,
          // Use the amount the server actually charged
          amount: String(transaction.amount ?? amount),
          authCode: transaction.authoriseId || transaction.txnNumber || "",
          paymentDate: Date.now().toString(),
          cardType: detectedCardType || "UNKNOWN",
          customerEmail: customerEmail,
          customerName: customerName,
          emailSent: responseData.emailStatus?.customerEmail ? "true" : "false",
          internalEmailSent: responseData.emailStatus?.internalEmail
            ? "true"
            : "false",
          emailId: responseData.emailStatus?.customerEmailId || "",
        });

        // Brief pause so the success stage is visible before redirecting
        setTimeout(() => {
          router.push(`/ccp?${successParams.toString()}`);
        }, 1500);
      } else {
        setProcessingStage("");
        setError(
          responseData.responseCode
            ? getDetailedErrorMessage(responseData.responseCode)
            : responseData.error || "Payment failed. Please try again.",
        );
        setIsLoading(false);
      }
    } catch (err) {
      setProcessingStage("");
      setError(
        "Payment processing failed. Please check your connection and try again.",
      );
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.paymentContainer}>
      <div className={styles.paymentWrapper}>
        <div className={styles.paymentHeader}>
          <h1>Credit Card Payment</h1>
          <p className={styles.description}>
            You are about to pay invoice <strong>{invoiceNumber}</strong> for{" "}
            <strong>{displayAmount}</strong>.
          </p>
        </div>

        <div className={styles.formContainer}>
          {/* Loading State */}
          {isLoading && (
            <div className={styles.loadingOverlay}>
              <div className={styles.loadingContent}>
                <div className={styles.spinner}></div>
                <h3>Processing Payment</h3>
                <p>{processingStage}</p>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill}></div>
                </div>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className={styles.errorState}>
              <div className={styles.errorIcon}>⚠️</div>
              <h3>Payment Error</h3>
              <p>{error}</p>
              <button
                onClick={() => setError(null)}
                className={styles.retryButton}
              >
                Try Again
              </button>
              <p className={styles.contactSupport}>
                Need help? Contact us at{" "}
                <a href="mailto:consult@officeexperts.com.au">
                  consult@officeexperts.com.au
                </a>
              </p>
            </div>
          )}

          {/* Payment Form */}
          <div
            className={`${styles.paymentForm} ${
              isLoading ? styles.disabled : ""
            }`}
          >
            <h3>Card Details</h3>

            <div className={styles.formGroup}>
              <label htmlFor="cardNumber">
                Card Number
                {detectedCardType && detectedCardType !== "UNKNOWN" && (
                  <span className={styles.cardTypeBadge}>
                    {getCardDisplayName(detectedCardType)}
                  </span>
                )}
              </label>
              <input
                id="cardNumber"
                type="text"
                inputMode="numeric"
                value={cardDetails.cardNumber}
                onChange={(e) =>
                  handleCardInputChange("cardNumber", e.target.value)
                }
                placeholder="1234 5678 9012 3456"
                className={styles.formInput}
                autoComplete="cc-number"
                disabled={isLoading}
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  id="expiryDate"
                  type="text"
                  inputMode="numeric"
                  value={cardDetails.expiryDate}
                  onChange={(e) =>
                    handleCardInputChange("expiryDate", e.target.value)
                  }
                  placeholder="MMYY"
                  maxLength="4"
                  className={styles.formInput}
                  autoComplete="cc-exp"
                  disabled={isLoading}
                />
                <small className={styles.helpText}>Format: MMYY</small>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="cvn">Security Code</label>
                <input
                  id="cvn"
                  type="text"
                  inputMode="numeric"
                  value={cardDetails.cvn}
                  onChange={(e) => handleCardInputChange("cvn", e.target.value)}
                  placeholder="123"
                  maxLength="4"
                  className={styles.formInput}
                  autoComplete="cc-csc"
                  disabled={isLoading}
                />
                <small className={styles.helpText}>
                  3-4 digits on back of card
                </small>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="cardHolderName">Card Holder Name</label>
              <input
                id="cardHolderName"
                type="text"
                value={cardDetails.cardHolderName}
                onChange={(e) =>
                  handleCardInputChange("cardHolderName", e.target.value)
                }
                placeholder={customerName}
                className={styles.formInput}
                autoComplete="cc-name"
                disabled={isLoading}
              />
            </div>

            <button
              onClick={handlePayment}
              disabled={isLoading}
              className={`${styles.payButton} btn`}
            >
              {isLoading ? (
                <>
                  <span>Processing...</span>
                  <div className={styles.buttonSpinner}></div>
                </>
              ) : (
                `Pay ${displayAmount}`
              )}
            </button>
          </div>

          {/* Payment Summary */}
          <div className={styles.paymentSummary}>
            <h4>Payment Summary</h4>
            <div className={styles.summaryRow}>
              <span>Invoice Number:</span>
              <span>{invoiceNumber}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Customer:</span>
              <span>{customerName}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Total Amount:</span>
              <span>
                <strong>{displayAmount}</strong>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.securityInfo}>
          <div className={styles.securityIcons}>
            <span className={styles.lockIcon}>🔒</span>
          </div>
          <p>
            <strong>Secure Payment</strong>
            <br />
            Your payment is processed securely through Commonwealth Bank's
            Bpoint gateway. Your card details are encrypted and never stored on
            our servers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BpointPaymentForm;
