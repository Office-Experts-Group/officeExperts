// // app/ccp/(components)/BpointPaymentForm.jsx - ENHANCED VERSION
// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import styles from "../../../styles/payment.module.scss";
// import {
//   detectCardType,
//   calculateSurcharge,
//   getCardDisplayName,
// } from "../../../utils/bpointSurchargeUtils";

// const BpointPaymentForm = ({ params }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [processingStage, setProcessingStage] = useState("");
//   const [cardDetails, setCardDetails] = useState({
//     cardNumber: "",
//     expiryDate: "",
//     cvn: "",
//     cardHolderName: "",
//   });
//   const [detectedCardType, setDetectedCardType] = useState(null);
//   const [surchargeInfo, setSurchargeInfo] = useState(null);

//   const router = useRouter();

//   // Extract parameters
//   const {
//     A: amountInCents,
//     I: invoiceNumber,
//     C: customerName,
//     E: customerEmail,
//     S: surchargeAmount,
//   } = params;

//   // Format the amount as dollars (from cents)
//   const baseAmount = parseInt(amountInCents);
//   const amountInDollars = (baseAmount / 100).toFixed(2);

//   const handleCardInputChange = (field, value) => {
//     if (field === "expiryDate") {
//       // Format expiry date as MMYY (4 digits only)
//       let cleaned = value.replace(/\D/g, "");
//       if (cleaned.length > 4) cleaned = cleaned.slice(0, 4);

//       // Validate month if we have at least 2 digits
//       if (cleaned.length >= 2) {
//         const month = parseInt(cleaned.slice(0, 2));
//         if (month < 1 || month > 12) return;
//       }

//       setCardDetails((prev) => ({ ...prev, [field]: cleaned }));
//     } else if (field === "cardNumber") {
//       // Allow only digits and spaces, format with spaces every 4 digits
//       let cleaned = value.replace(/\D/g, "");
//       let formatted = cleaned.replace(/(.{4})/g, "$1 ").trim();
//       if (formatted.length > 19) formatted = formatted.slice(0, 19);

//       setCardDetails((prev) => ({ ...prev, [field]: formatted }));

//       // Detect card type and calculate surcharge
//       if (cleaned.length >= 6) {
//         const cardType = detectCardType(cleaned);
//         setDetectedCardType(cardType);

//         if (cardType !== "UNKNOWN") {
//           const surcharge = calculateSurcharge(baseAmount, cardType);
//           setSurchargeInfo(surcharge);
//         } else {
//           setSurchargeInfo(null);
//         }
//       } else {
//         setDetectedCardType(null);
//         setSurchargeInfo(null);
//       }
//     } else if (field === "cvn") {
//       // Allow only digits, max 4 for Amex
//       let cleaned = value.replace(/\D/g, "");
//       if (cleaned.length > 4) cleaned = cleaned.slice(0, 4);

//       setCardDetails((prev) => ({ ...prev, [field]: cleaned }));
//     } else {
//       setCardDetails((prev) => ({ ...prev, [field]: value }));
//     }
//   };

//   const validateCardDetails = () => {
//     if (
//       !cardDetails.cardNumber ||
//       cardDetails.cardNumber.replace(/\s/g, "").length < 13
//     ) {
//       return "Please enter a valid card number";
//     }
//     if (!cardDetails.expiryDate || cardDetails.expiryDate.length !== 4) {
//       return "Please enter a valid expiry date (MMYY)";
//     }
//     if (!cardDetails.cvn || cardDetails.cvn.length < 3) {
//       return "Please enter a valid CVN";
//     }
//     if (!cardDetails.cardHolderName.trim()) {
//       return "Please enter the card holder name";
//     }

//     // Check if expiry date is in the future
//     const month = parseInt(cardDetails.expiryDate.slice(0, 2));
//     const year = parseInt("20" + cardDetails.expiryDate.slice(2, 4));
//     const now = new Date();
//     const expiryDate = new Date(year, month - 1);

//     if (expiryDate <= now) {
//       return "Card has expired. Please check the expiry date";
//     }

//     return null;
//   };

//   const getDetailedErrorMessage = (responseCode, responseText) => {
//     const errorMessages = {
//       "05": "Your card was declined. Please contact your bank or try a different card.",
//       51: "Insufficient funds. Please check your account balance or try a different card.",
//       54: "Your card has expired. Please check the expiry date or use a different card.",
//       14: "Invalid card number. Please check your card number and try again.",
//       55: "Incorrect PIN. Please try again with the correct PIN.",
//       61: "Transaction amount limit exceeded. Please contact your bank.",
//       62: "Restricted card. Please contact your bank or try a different card.",
//       65: "Activity limit exceeded. Please contact your bank.",
//       91: "Bank system temporarily unavailable. Please try again in a few minutes.",
//       96: "System error. Please try again or contact support.",
//       12: "Invalid transaction. Please check your details and try again.",
//       13: "Invalid amount. Please contact support.",
//       30: "Format error. Please try again or contact support.",
//       57: "Transaction not permitted for this card. Please try a different card.",
//       58: "Transaction not permitted. Please contact your bank.",
//       75: "PIN tries exceeded. Please contact your bank.",
//       76: "Previous PIN tries exceeded. Please contact your bank.",
//       77: "Data does not match PIN. Please try again.",
//       78: "Card blocked. Please contact your bank.",
//       82: "CVV validation failed. Please check your security code.",
//       83: "Cannot verify PIN. Please contact your bank.",
//       84: "Invalid CVV. Please check your security code and try again.",
//       85: "PIN required. Please contact your bank.",
//       86: "PIN validation not possible. Please contact your bank.",
//       87: "Purchase amount only. Please contact your bank.",
//       88: "MAC sync error. Please try again.",
//       89: "MAC key sync error. Please try again.",
//       90: "Cut-off in progress. Please try again later.",
//     };

//     return (
//       errorMessages[responseCode] ||
//       `Payment declined (Code: ${responseCode}). Please contact your bank or try a different card.`
//     );
//   };

//   const handlePayment = async () => {
//     setError(null);

//     // Validate card details
//     const validationError = validateCardDetails();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     setIsLoading(true);
//     setProcessingStage("Validating card details...");

//     try {
//       // Calculate final amounts with surcharge
//       const finalSurchargeInfo = surchargeInfo || {
//         totalAmount: baseAmount,
//         surchargeAmount: 0,
//       };

//       const requestPayload = {
//         amount: finalSurchargeInfo.totalAmount,
//         baseAmount: baseAmount,
//         surchargeAmount: finalSurchargeInfo.surchargeAmount,
//         invoiceNumber,
//         customerName,
//         customerEmail,
//         cardNumber: cardDetails.cardNumber.replace(/\s/g, ""),
//         expiryDate: cardDetails.expiryDate,
//         cvn: cardDetails.cvn,
//         cardHolderName: cardDetails.cardHolderName.trim(),
//         cardType: detectedCardType,
//       };

//       setProcessingStage("Connecting to payment gateway...");

//       const response = await fetch("/api/bpoint/create-authkey", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(requestPayload),
//       });

//       setProcessingStage("Processing payment...");

//       const responseData = await response.json();

//       if (responseData.success && responseData.transaction) {
//         setProcessingStage("Payment successful! Redirecting...");

//         // Build success URL with all transaction details
//         const successParams = new URLSearchParams({
//           paymentStatus: "APPROVED",
//           reference: responseData.transaction.TxnNumber || invoiceNumber,
//           amount: finalSurchargeInfo.totalAmount.toString(),
//           baseAmount: baseAmount.toString(),
//           surcharge: finalSurchargeInfo.surchargeAmount.toString(),
//           authCode:
//             responseData.transaction.AuthoriseId ||
//             responseData.transaction.TxnNumber,
//           paymentDate: Date.now().toString(),
//           cardType: detectedCardType || "UNKNOWN",
//           customerEmail: customerEmail,
//           customerName: customerName,
//         });

//         const successUrl = `/ccp?${successParams.toString()}`;

//         setTimeout(() => {
//           router.push(successUrl);
//         }, 1500); // Brief delay to show success message
//       } else {
//         setProcessingStage("");

//         // Enhanced error handling
//         if (responseData.responseCode) {
//           setError(
//             getDetailedErrorMessage(
//               responseData.responseCode,
//               responseData.error
//             )
//           );
//         } else {
//           setError(responseData.error || "Payment failed. Please try again.");
//         }
//         setIsLoading(false);
//       }
//     } catch (err) {
//       setProcessingStage("");
//       setError(
//         "Payment processing failed. Please check your connection and try again."
//       );
//       setIsLoading(false);
//     }
//   };

//   // Calculate display amounts
//   const displayAmount = surchargeInfo
//     ? surchargeInfo.totalDisplay
//     : `$${amountInDollars}`;
//   const showSurchargeBreakdown =
//     surchargeInfo && surchargeInfo.surchargeAmount > 0;

//   return (
//     <section className={styles.paymentContainer}>
//       <div className={styles.paymentWrapper}>
//         <div className={styles.paymentHeader}>
//           <h1>Credit Card Payment</h1>
//           <p className={styles.description}>
//             You are about to pay invoice <strong>{invoiceNumber}</strong> for{" "}
//             <strong>{displayAmount}</strong>.
//           </p>

//           {showSurchargeBreakdown && (
//             <div className={styles.surchargeBreakdown}>
//               <p className={styles.surchargeDetail}>
//                 Invoice Amount: {surchargeInfo.baseAmountDisplay}
//               </p>
//               <p className={styles.surchargeDetail}>
//                 {getCardDisplayName(detectedCardType)} Surcharge (
//                 {surchargeInfo.surchargeRate}%):{" "}
//                 {surchargeInfo.surchargeDisplay}
//               </p>
//               <p className={styles.totalAmount}>
//                 <strong>Total: {surchargeInfo.totalDisplay}</strong>
//               </p>
//             </div>
//           )}
//         </div>

//         <div className={styles.formContainer}>
//           {/* Loading State */}
//           {isLoading && (
//             <div className={styles.loadingOverlay}>
//               <div className={styles.loadingContent}>
//                 <div className={styles.spinner}></div>
//                 <h3>Processing Payment</h3>
//                 <p>{processingStage}</p>
//                 <div className={styles.progressBar}>
//                   <div className={styles.progressFill}></div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Error State */}
//           {error && (
//             <div className={styles.errorState}>
//               <div className={styles.errorIcon}>⚠️</div>
//               <h3>Payment Error</h3>
//               <p>{error}</p>
//               <button
//                 onClick={() => setError(null)}
//                 className={styles.retryButton}
//               >
//                 Try Again
//               </button>
//               <p className={styles.contactSupport}>
//                 Need help? Contact us at{" "}
//                 <a href="mailto:consult@officeexperts.com.au">
//                   consult@officeexperts.com.au
//                 </a>
//               </p>
//             </div>
//           )}

//           {/* Payment Form */}
//           <div
//             className={`${styles.paymentForm} ${
//               isLoading ? styles.disabled : ""
//             }`}
//           >
//             <h3>Card Details</h3>

//             <div className={styles.formGroup}>
//               <label htmlFor="cardNumber">
//                 Card Number
//                 {detectedCardType && detectedCardType !== "UNKNOWN" && (
//                   <span className={styles.cardTypeBadge}>
//                     {getCardDisplayName(detectedCardType)}
//                   </span>
//                 )}
//               </label>
//               <input
//                 id="cardNumber"
//                 type="text"
//                 value={cardDetails.cardNumber}
//                 onChange={(e) =>
//                   handleCardInputChange("cardNumber", e.target.value)
//                 }
//                 placeholder="1234 5678 9012 3456"
//                 className={styles.formInput}
//                 autoComplete="cc-number"
//                 disabled={isLoading}
//               />
//             </div>

//             <div className={styles.formRow}>
//               <div className={styles.formGroup}>
//                 <label htmlFor="expiryDate">Expiry Date</label>
//                 <input
//                   id="expiryDate"
//                   type="text"
//                   value={cardDetails.expiryDate}
//                   onChange={(e) =>
//                     handleCardInputChange("expiryDate", e.target.value)
//                   }
//                   placeholder="MMYY"
//                   maxLength="4"
//                   className={styles.formInput}
//                   autoComplete="cc-exp"
//                   disabled={isLoading}
//                 />
//                 <small className={styles.helpText}>Format: MMYY</small>
//               </div>

//               <div className={styles.formGroup}>
//                 <label htmlFor="cvn">Security Code</label>
//                 <input
//                   id="cvn"
//                   type="text"
//                   value={cardDetails.cvn}
//                   onChange={(e) => handleCardInputChange("cvn", e.target.value)}
//                   placeholder="123"
//                   maxLength="4"
//                   className={styles.formInput}
//                   autoComplete="cc-csc"
//                   disabled={isLoading}
//                 />
//                 <small className={styles.helpText}>
//                   3-4 digits on back of card
//                 </small>
//               </div>
//             </div>

//             <div className={styles.formGroup}>
//               <label htmlFor="cardHolderName">Card Holder Name</label>
//               <input
//                 id="cardHolderName"
//                 type="text"
//                 value={cardDetails.cardHolderName}
//                 onChange={(e) =>
//                   handleCardInputChange("cardHolderName", e.target.value)
//                 }
//                 placeholder={customerName}
//                 className={styles.formInput}
//                 autoComplete="cc-name"
//                 disabled={isLoading}
//               />
//             </div>

//             <button
//               onClick={handlePayment}
//               disabled={isLoading}
//               className={`${styles.payButton} btn`}
//             >
//               {isLoading ? (
//                 <>
//                   <span>Processing...</span>
//                   <div className={styles.buttonSpinner}></div>
//                 </>
//               ) : (
//                 `Pay ${displayAmount}`
//               )}
//             </button>
//           </div>

//           {/* Payment Summary */}
//           <div className={styles.paymentSummary}>
//             <h4>Payment Summary</h4>
//             <div className={styles.summaryRow}>
//               <span>Invoice Number:</span>
//               <span>{invoiceNumber}</span>
//             </div>
//             <div className={styles.summaryRow}>
//               <span>Customer:</span>
//               <span>{customerName}</span>
//             </div>
//             {showSurchargeBreakdown ? (
//               <>
//                 <div className={styles.summaryRow}>
//                   <span>Invoice Amount:</span>
//                   <span>{surchargeInfo.baseAmountDisplay}</span>
//                 </div>
//                 <div className={styles.summaryRow}>
//                   <span>Card Surcharge:</span>
//                   <span>{surchargeInfo.surchargeDisplay}</span>
//                 </div>
//                 <div
//                   className={styles.summaryRow}
//                   style={{
//                     fontWeight: "bold",
//                     borderTop: "1px solid #ddd",
//                     paddingTop: "8px",
//                   }}
//                 >
//                   <span>Total Amount:</span>
//                   <span>{surchargeInfo.totalDisplay}</span>
//                 </div>
//               </>
//             ) : (
//               <div className={styles.summaryRow}>
//                 <span>Total Amount:</span>
//                 <span>
//                   <strong>${amountInDollars}</strong>
//                 </span>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className={styles.securityInfo}>
//           <div className={styles.securityIcons}>
//             <span className={styles.lockIcon}>🔒</span>
//           </div>
//           <p>
//             <strong>Secure Payment</strong>
//             <br />
//             Your payment is processed securely through Commonwealth Bank's
//             Bpoint gateway. Your card details are encrypted and never stored on
//             our servers.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BpointPaymentForm;

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
    const errorMessages = {
      "05": "Your card was declined. Please contact your bank or try a different card.",
      51: "Insufficient funds. Please check your account balance or try a different card.",
      54: "Your card has expired. Please check the expiry date or use a different card.",
      14: "Invalid card number. Please check your card number and try again.",
      55: "Incorrect PIN. Please try again with the correct PIN.",
      61: "Transaction amount limit exceeded. Please contact your bank.",
      62: "Restricted card. Please contact your bank or try a different card.",
      65: "Activity limit exceeded. Please contact your bank.",
      91: "Bank system temporarily unavailable. Please try again in a few minutes.",
      96: "System error. Please try again or contact support.",
      12: "Invalid transaction. Please check your details and try again.",
      13: "Invalid amount. Please contact support.",
      30: "Format error. Please try again or contact support.",
      57: "Transaction not permitted for this card. Please try a different card.",
      58: "Transaction not permitted. Please contact your bank.",
      75: "PIN tries exceeded. Please contact your bank.",
      76: "Previous PIN tries exceeded. Please contact your bank.",
      77: "Data does not match PIN. Please try again.",
      78: "Card blocked. Please contact your bank.",
      82: "CVV validation failed. Please check your security code.",
      83: "Cannot verify PIN. Please contact your bank.",
      84: "Invalid CVV. Please check your security code and try again.",
      85: "PIN required. Please contact your bank.",
      86: "PIN validation not possible. Please contact your bank.",
      87: "Purchase amount only. Please contact your bank.",
      88: "MAC sync error. Please try again.",
      89: "MAC key sync error. Please try again.",
      90: "Cut-off in progress. Please try again later.",
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
