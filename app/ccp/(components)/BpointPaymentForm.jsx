// app/ccp/(components)/BpointPaymentForm.jsx - UPDATED WITH EMAIL STATUS
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../../styles/payment.module.scss";
import {
  detectCardType,
  calculateSurcharge,
  getCardDisplayName,
} from "../../../utils/bpointSurchargeUtils";

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
  const [surchargeInfo, setSurchargeInfo] = useState(null);

  const router = useRouter();

  // Extract parameters
  const {
    A: amountInCents,
    I: invoiceNumber,
    C: customerName,
    E: customerEmail,
    S: surchargeAmount,
  } = params;

  // Format the amount as dollars (from cents)
  const baseAmount = parseInt(amountInCents);
  const amountInDollars = (baseAmount / 100).toFixed(2);

  const handleCardInputChange = (field, value) => {
    if (field === "expiryDate") {
      // Format expiry date as MMYY (4 digits only)
      let cleaned = value.replace(/\D/g, "");
      if (cleaned.length > 4) cleaned = cleaned.slice(0, 4);

      // Validate month if we have at least 2 digits
      if (cleaned.length >= 2) {
        const month = parseInt(cleaned.slice(0, 2));
        if (month < 1 || month > 12) return;
      }

      setCardDetails((prev) => ({ ...prev, [field]: cleaned }));
    } else if (field === "cardNumber") {
      // Allow only digits and spaces, format with spaces every 4 digits
      let cleaned = value.replace(/\D/g, "");
      let formatted = cleaned.replace(/(.{4})/g, "$1 ").trim();
      if (formatted.length > 19) formatted = formatted.slice(0, 19);

      setCardDetails((prev) => ({ ...prev, [field]: formatted }));

      // Detect card type and calculate surcharge
      if (cleaned.length >= 6) {
        const cardType = detectCardType(cleaned);
        setDetectedCardType(cardType);

        if (cardType !== "UNKNOWN") {
          const surcharge = calculateSurcharge(baseAmount, cardType);
          setSurchargeInfo(surcharge);
        } else {
          setSurchargeInfo(null);
        }
      } else {
        setDetectedCardType(null);
        setSurchargeInfo(null);
      }
    } else if (field === "cvn") {
      // Allow only digits, max 4 for Amex
      let cleaned = value.replace(/\D/g, "");
      if (cleaned.length > 4) cleaned = cleaned.slice(0, 4);

      setCardDetails((prev) => ({ ...prev, [field]: cleaned }));
    } else {
      setCardDetails((prev) => ({ ...prev, [field]: value }));
    }
  };

  const validateCardDetails = () => {
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

    // Check if expiry date is in the future
    const month = parseInt(cardDetails.expiryDate.slice(0, 2));
    const year = parseInt("20" + cardDetails.expiryDate.slice(2, 4));
    const now = new Date();
    const expiryDate = new Date(year, month - 1);

    if (expiryDate <= now) {
      return "Card has expired. Please check the expiry date";
    }

    return null;
  };

  const getDetailedErrorMessage = (responseCode, responseText) => {
    // Updated error messages based on Bpoint's concatenated response codes
    // Format: Response Code + Bank Response Code = Final Code
    const errorMessages = {
      // Success codes
      0: "Payment approved successfully",
      "008": "Payment approved - ID verification required", // 0 + 08
      "016": "Payment approved - Track 3 updated", // 0 + 16

      // Response Code 1 + Bank Response Codes
      109: "Transaction in progress", // 1 + 09
      110: "Approved for partial amount", // 1 + 10
      111: "Approved (VIP)", // 1 + 11
      112: "Invalid transaction. Please check your details and try again.", // 1 + 12 - THIS IS YOUR ERROR!
      113: "Invalid amount. Please contact support.", // 1 + 13
      117: "Transaction cancelled by customer", // 1 + 17
      118: "Transaction disputed by customer", // 1 + 18
      120: "Invalid response from bank", // 1 + 20
      121: "No action taken by bank", // 1 + 21
      122: "Suspected system malfunction. Please try again.", // 1 + 22
      123: "Transaction fee not acceptable", // 1 + 23
      124: "File update not supported", // 1 + 24
      126: "Duplicate file update record", // 1 + 26
      127: "File update field edit error", // 1 + 27
      128: "File update file locked", // 1 + 28
      129: "File update not successful, contact acquirer", // 1 + 29
      130: "Format error. Please check your details and try again.", // 1 + 30
      132: "Transaction completed partially", // 1 + 32
      135: "Please contact your bank", // 1 + 35
      137: "Please contact your bank's security department", // 1 + 37
      138: "Too many incorrect PIN attempts. Please contact your bank.", // 1 + 38
      140: "This transaction type is not supported", // 1 + 40
      142: "No universal account found", // 1 + 42
      144: "No investment account found", // 1 + 44
      152: "No cheque account found for this card", // 1 + 52
      153: "No savings account found for this card", // 1 + 53
      155: "Incorrect PIN entered. Please try again.", // 1 + 55
      156: "No card record found", // 1 + 56
      157: "This transaction is not permitted for your card. Please try a different card.", // 1 + 57
      158: "This transaction is not permitted. Please contact your bank.", // 1 + 58
      160: "Please contact your bank", // 1 + 60
      162: "Your card is restricted. Please contact your bank or try a different card.", // 1 + 62
      163: "Security violation detected", // 1 + 63
      164: "Original transaction amount is incorrect", // 1 + 64
      166: "Please contact your bank's security department", // 1 + 66
      167: "Card must be retained by ATM", // 1 + 67
      175: "Maximum PIN attempts exceeded. Please contact your bank.", // 1 + 75
      176: "PIN attempts exceeded. Please contact your bank.", // 1 + 76
      177: "PIN data does not match. Please try again.", // 1 + 77
      178: "Your card is blocked. Please contact your bank.", // 1 + 78
      179: "Card lifecycle issue (Mastercard)", // 1 + 79
      182: "Transaction blocked by policy (Mastercard)", // 1 + 82
      183: "Fraud/Security block (Mastercard)", // 1 + 83
      193: "Transaction violates regulations and cannot be completed", // 1 + 93
      194: "Duplicate transaction detected", // 1 + 94
      195: "Reconciliation error occurred", // 1 + 95
      196: "System error occurred. Please try again or contact support.", // 1 + 96
      197: "System reconciliation in progress", // 1 + 97

      // Response Code 2 + Bank Response Codes
      201: "Please contact your card issuer", // 2 + 01
      202: "Please contact your card issuer for special conditions", // 2 + 02
      203: "Invalid merchant configuration", // 2 + 03
      204: "Card must be retained. Please contact your bank.", // 2 + 04
      205: "Your card was declined. Please contact your bank or try a different card.", // 2 + 05
      206: "System error occurred. Please try again.", // 2 + 06
      207: "Card must be retained due to special conditions", // 2 + 07
      214: "Invalid card number. Please check your card number and try again.", // 2 + 14
      215: "Card issuer not found. Please check your card or try a different one.", // 2 + 15
      219: "Please re-enter the transaction details", // 2 + 19
      225: "Unable to locate transaction record", // 2 + 25
      231: "Bank not supported by payment system", // 2 + 31
      234: "Suspected fraud. Please contact your bank.", // 2 + 34
      236: "Your card is restricted. Please contact your bank.", // 2 + 36
      239: "No credit account found for this card", // 2 + 39
      241: "Card reported as lost. Please contact your bank.", // 2 + 41
      243: "Card reported as stolen. Please contact your bank.", // 2 + 43
      259: "Suspected fraud. Please contact your bank.", // 2 + 59
      261: "Transaction exceeds withdrawal limit. Please contact your bank.", // 2 + 61
      265: "Transaction frequency limit exceeded. Please try again later.", // 2 + 65
      290: "System maintenance in progress. Please try again in a few minutes.", // 2 + 90
      291: "Bank system temporarily unavailable. Please try again in a few minutes.", // 2 + 91
      292: "Unable to route transaction to your bank. Please try again.", // 2 + 92
      298: "Security error occurred", // 2 + 98
      299: "System error occurred", // 2 + 99

      // Response Code 3 + Bank Response Codes
      368: "Transaction response received too late", // 3 + 68

      // Response Code 4 + Bank Response Codes
      433: "Your card has expired. Please check the expiry date or use a different card.", // 4 + 33
      454: "Your card has expired. Please check the expiry date or use a different card.", // 4 + 54

      // Response Code 5 + Bank Response Codes
      551: "Insufficient funds. Please check your account balance or try a different card.", // 5 + 51

      // Single digit/character codes (as-is from documentation)
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

      // PT_ codes (as-is from documentation)
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
      PT_V4:
        "Invalid card number. Please check your card number and try again.",
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

      // Default fallback
      DEFAULT:
        "Payment could not be processed. Please check your card details and try again, or contact your bank.",
    };

    return (
      errorMessages[responseCode] ||
      `Payment declined (Code: ${responseCode}). Please contact your bank or try a different card.`
    );
  };

  const handlePayment = async () => {
    setError(null);

    // Validate card details
    const validationError = validateCardDetails();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    setProcessingStage("Validating card details...");

    try {
      // Calculate final amounts with surcharge
      const finalSurchargeInfo = surchargeInfo || {
        totalAmount: baseAmount,
        surchargeAmount: 0,
      };

      const requestPayload = {
        amount: finalSurchargeInfo.totalAmount,
        baseAmount: baseAmount,
        surchargeAmount: finalSurchargeInfo.surchargeAmount,
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestPayload),
      });

      setProcessingStage("Processing payment...");

      const responseData = await response.json();

      if (responseData.success && responseData.transaction) {
        setProcessingStage("Payment successful! Preparing receipt...");

        // Build success URL with all transaction details including email status
        const successParams = new URLSearchParams({
          paymentStatus: "APPROVED",
          reference: responseData.transaction.TxnNumber || invoiceNumber,
          amount: finalSurchargeInfo.totalAmount.toString(),
          baseAmount: baseAmount.toString(),
          surcharge: finalSurchargeInfo.surchargeAmount.toString(),
          authCode:
            responseData.transaction.AuthoriseId ||
            responseData.transaction.TxnNumber,
          paymentDate: Date.now().toString(),
          cardType: detectedCardType || "UNKNOWN",
          customerEmail: customerEmail,
          customerName: customerName,
          // Add email status information
          emailSent: responseData.emailStatus?.customerEmail ? "true" : "false",
          internalEmailSent: responseData.emailStatus?.internalEmail
            ? "true"
            : "false",
          emailId: responseData.emailStatus?.customerEmailId || "",
        });

        const successUrl = `/ccp?${successParams.toString()}`;

        setTimeout(() => {
          router.push(successUrl);
        }, 1500); // Brief delay to show success message
      } else {
        setProcessingStage("");

        // Enhanced error handling
        if (responseData.responseCode) {
          setError(
            getDetailedErrorMessage(
              responseData.responseCode,
              responseData.error
            )
          );
        } else {
          setError(responseData.error || "Payment failed. Please try again.");
        }
        setIsLoading(false);
      }
    } catch (err) {
      setProcessingStage("");
      setError(
        "Payment processing failed. Please check your connection and try again."
      );
      setIsLoading(false);
    }
  };

  // Calculate display amounts
  const displayAmount = surchargeInfo
    ? surchargeInfo.totalDisplay
    : `${amountInDollars}`;
  const showSurchargeBreakdown =
    surchargeInfo && surchargeInfo.surchargeAmount > 0;

  return (
    <section className={styles.paymentContainer}>
      <div className={styles.paymentWrapper}>
        <div className={styles.paymentHeader}>
          <h1>Credit Card Payment</h1>
          <p className={styles.description}>
            You are about to pay invoice <strong>{invoiceNumber}</strong> for{" "}
            <strong>{displayAmount}</strong>.
          </p>

          {showSurchargeBreakdown && (
            <div className={styles.surchargeBreakdown}>
              <p className={styles.surchargeDetail}>
                Invoice Amount: {surchargeInfo.baseAmountDisplay}
              </p>
              <p className={styles.surchargeDetail}>
                {getCardDisplayName(detectedCardType)} Surcharge (
                {surchargeInfo.surchargeRate}%):{" "}
                {surchargeInfo.surchargeDisplay}
              </p>
              <p className={styles.totalAmount}>
                <strong>Total: {surchargeInfo.totalDisplay}</strong>
              </p>
            </div>
          )}
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
            {showSurchargeBreakdown ? (
              <>
                <div className={styles.summaryRow}>
                  <span>Invoice Amount:</span>
                  <span>{surchargeInfo.baseAmountDisplay}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Card Surcharge:</span>
                  <span>{surchargeInfo.surchargeDisplay}</span>
                </div>
                <div
                  className={styles.summaryRow}
                  style={{
                    fontWeight: "bold",
                    borderTop: "1px solid #ddd",
                    paddingTop: "8px",
                  }}
                >
                  <span>Total Amount:</span>
                  <span>{surchargeInfo.totalDisplay}</span>
                </div>
              </>
            ) : (
              <div className={styles.summaryRow}>
                <span>Total Amount:</span>
                <span>
                  <strong>${amountInDollars}</strong>
                </span>
              </div>
            )}
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
