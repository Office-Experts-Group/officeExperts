// // app/ccp/(components)/SuccessMessage.js - ENHANCED VERSION
// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { getCardDisplayName } from "../../../utils/bpointSurchargeUtils";

// import styles from "../../../styles/payment.module.scss";

// const SuccessMessage = ({
//   reference,
//   amount,
//   baseAmount,
//   surcharge,
//   date,
//   authCode,
//   cardType,
//   customerEmail,
//   customerName,
// }) => {
//   const [formattedDate, setFormattedDate] = useState("");
//   const [formattedAmount, setFormattedAmount] = useState("");
//   const [formattedSurcharge, setFormattedSurcharge] = useState("");
//   const [formattedBaseAmount, setFormattedBaseAmount] = useState("");
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Format date
//     if (date) {
//       try {
//         const dateObj = new Date(parseInt(date));
//         setFormattedDate(
//           dateObj.toLocaleString("en-AU", {
//             day: "numeric",
//             month: "long",
//             year: "numeric",
//             hour: "numeric",
//             minute: "numeric",
//             hour12: true,
//           })
//         );
//       } catch (e) {
//         setFormattedDate("N/A");
//       }
//     }

//     // Format amounts from cents to dollars
//     if (amount) {
//       try {
//         const totalInDollars = (parseInt(amount) / 100).toFixed(2);
//         setFormattedAmount(`$${totalInDollars}`);

//         // Format base amount if provided
//         if (baseAmount) {
//           const baseInDollars = (parseInt(baseAmount) / 100).toFixed(2);
//           setFormattedBaseAmount(`$${baseInDollars}`);
//         }

//         // Format surcharge if provided
//         if (surcharge && parseInt(surcharge) > 0) {
//           const surchargeInDollars = (parseInt(surcharge) / 100).toFixed(2);
//           setFormattedSurcharge(`$${surchargeInDollars}`);
//         }
//       } catch (e) {
//         setFormattedAmount("N/A");
//       }
//     }

//     // Set loading to false after formatting
//     setIsLoading(false);
//   }, [date, amount, baseAmount, surcharge]);

//   if (isLoading) {
//     return (
//       <section className={styles.paymentContainer}>
//         <div className={styles.loadingWrapper}>
//           <div className={styles.spinner}></div>
//           <p>Loading transaction details...</p>
//         </div>
//       </section>
//     );
//   }

//   const hasSurcharge = formattedSurcharge && parseInt(surcharge) > 0;
//   const cardDisplayName = cardType
//     ? getCardDisplayName(cardType)
//     : "Credit Card";

//   return (
//     <section className={styles.paymentContainer}>
//       <div className={styles.successWrapper}>
//         {/* Success Animation */}
//         <div className={styles.successIconWrapper}>
//           <div className={styles.successIcon}>
//             <svg
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className={styles.checkIcon}
//             >
//               <circle
//                 cx="12"
//                 cy="12"
//                 r="11"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 className={styles.checkCircle}
//               />
//               <path
//                 d="M6 12L10 16L18 8"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className={styles.checkMark}
//               />
//             </svg>
//           </div>
//           <div className={styles.successMessage}>
//             <h1>Payment Successful!</h1>
//             <p className={styles.successSubtext}>
//               Your payment has been processed successfully
//             </p>
//           </div>
//         </div>

//         {/* Transaction Receipt */}
//         <div className={styles.receiptCard}>
//           <div className={styles.receiptHeader}>
//             <h2>Transaction Receipt</h2>
//             <div className={styles.receiptNumber}>Receipt #{reference}</div>
//           </div>

//           <div className={styles.receiptDetails}>
//             <div className={styles.receiptGrid}>
//               {/* Customer Information */}
//               <div className={styles.receiptSection}>
//                 <h3>Customer Details</h3>
//                 <div className={styles.receiptRow}>
//                   <span className={styles.receiptLabel}>Name:</span>
//                   <span className={styles.receiptValue}>{customerName}</span>
//                 </div>
//                 <div className={styles.receiptRow}>
//                   <span className={styles.receiptLabel}>Email:</span>
//                   <span className={styles.receiptValue}>{customerEmail}</span>
//                 </div>
//               </div>

//               {/* Payment Information */}
//               <div className={styles.receiptSection}>
//                 <h3>Payment Details</h3>
//                 <div className={styles.receiptRow}>
//                   <span className={styles.receiptLabel}>Invoice Number:</span>
//                   <span className={styles.receiptValue}> {reference}</span>
//                 </div>

//                 <div className={styles.receiptRow}>
//                   <span className={styles.receiptLabel}>Payment Method:</span>
//                   <span className={styles.receiptValue}>
//                     {cardDisplayName}
//                     {cardType && cardType !== "UNKNOWN" && (
//                       <span className={styles.cardTypeBadge}>
//                         {cardDisplayName}
//                       </span>
//                     )}
//                   </span>
//                 </div>

//                 <div className={styles.receiptRow}>
//                   <span className={styles.receiptLabel}>Payment Date:</span>
//                   <span className={styles.receiptValue}>{formattedDate}</span>
//                 </div>
//               </div>

//               {/* Amount Breakdown */}
//               <div className={styles.receiptSection}>
//                 <h3>Amount Breakdown</h3>

//                 {hasSurcharge ? (
//                   <>
//                     <div className={styles.receiptRow}>
//                       <span className={styles.receiptLabel}>
//                         Invoice Amount:
//                       </span>
//                       <span className={styles.receiptValue}>
//                         {formattedBaseAmount}
//                       </span>
//                     </div>
//                     <div className={styles.receiptRow}>
//                       <span className={styles.receiptLabel}>
//                         Credit Card Surcharge:
//                       </span>
//                       <span className={styles.receiptValue}>
//                         {formattedSurcharge}
//                       </span>
//                     </div>
//                     <div className={styles.receiptRowTotal}>
//                       <span className={styles.receiptLabel}>Total Paid:</span>
//                       <span className={styles.receiptValueTotal}>
//                         {formattedAmount}
//                       </span>
//                     </div>
//                   </>
//                 ) : (
//                   <div className={styles.receiptRowTotal}>
//                     <span className={styles.receiptLabel}>Amount Paid:</span>
//                     <span className={styles.receiptValueTotal}>
//                       {formattedAmount}
//                     </span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className={styles.receiptActions}>
//           <Link href="/" className={`btn ${styles.homeButton}`}>
//             <span>🏠</span>
//             Return to Home
//           </Link>
//         </div>

//         {/* Additional Information */}
//         <div className={styles.additionalInfo}>
//           <div className={styles.confirmationNote}>
//             <h4>📝 Important Notes</h4>
//             <ul>
//               <li>A confirmation email has been sent to {customerEmail}</li>
//               <li>Please keep this receipt for your records</li>
//               <li>
//                 Your payment will appear on your statement as "Office Experts
//                 Group"
//               </li>
//               {hasSurcharge && (
//                 <li>
//                   The surcharge applied helps cover credit card processing fees
//                 </li>
//               )}
//             </ul>
//           </div>

//           <div className={styles.contactInfo}>
//             <h4>📞 Need Help?</h4>
//             <p>
//               If you have any questions about your payment or need assistance:
//             </p>
//             <div className={styles.contactDetails}>
//               <div className={styles.contactMethod}>
//                 <span>📧</span>
//                 <a href="mailto:accounts@officeexperts.com.au">
//                   accounts@officeexperts.com.au
//                 </a>
//               </div>
//               <div className={styles.contactMethod}>
//                 <span>📞</span>
//                 <a href="tel:1300102810">1300 10 28 10</a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Security Information */}
//         <div className={styles.securityFooter}>
//           <div className={styles.securityBadges}>
//             <span className={styles.securityBadge}>🔒 SSL Encrypted</span>
//             <span className={styles.securityBadge}>
//               🏛️ Commonwealth Bank Secured
//             </span>
//             <span className={styles.securityBadge}>✅ PCI Compliant</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SuccessMessage;

// app/ccp/(components)/SuccessMessage.js - ENHANCED VERSION WITH EMAIL STATUS
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCardDisplayName } from "../../../utils/bpointSurchargeUtils";

import styles from "../../../styles/payment.module.scss";

const SuccessMessage = ({
  reference,
  amount,
  baseAmount,
  surcharge,
  date,
  authCode,
  cardType,
  customerEmail,
  customerName,
  emailStatus,
}) => {
  const [formattedDate, setFormattedDate] = useState("");
  const [formattedAmount, setFormattedAmount] = useState("");
  const [formattedSurcharge, setFormattedSurcharge] = useState("");
  const [formattedBaseAmount, setFormattedBaseAmount] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showEmailStatus, setShowEmailStatus] = useState(false);

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

    // Format amounts from cents to dollars
    if (amount) {
      try {
        const totalInDollars = (parseInt(amount) / 100).toFixed(2);
        setFormattedAmount(`$${totalInDollars}`);

        // Format base amount if provided
        if (baseAmount) {
          const baseInDollars = (parseInt(baseAmount) / 100).toFixed(2);
          setFormattedBaseAmount(`$${baseInDollars}`);
        }

        // Format surcharge if provided
        if (surcharge && parseInt(surcharge) > 0) {
          const surchargeInDollars = (parseInt(surcharge) / 100).toFixed(2);
          setFormattedSurcharge(`$${surchargeInDollars}`);
        }
      } catch (e) {
        setFormattedAmount("N/A");
      }
    }

    // Set loading to false after formatting
    setIsLoading(false);

    // Show email status notification for a few seconds
    if (emailStatus) {
      setShowEmailStatus(true);
      setTimeout(() => setShowEmailStatus(false), 8000);
    }
  }, [date, amount, baseAmount, surcharge, emailStatus]);

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

  const hasSurcharge = formattedSurcharge && parseInt(surcharge) > 0;
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
                    <span className={styles.receiptLabel}>Authorization:</span>
                    <span className={styles.receiptValue}>{authCode}</span>
                  </div>
                )}
              </div>

              {/* Amount Breakdown */}
              <div className={styles.receiptSection}>
                <h3>Amount Breakdown</h3>

                {hasSurcharge ? (
                  <>
                    <div className={styles.receiptRow}>
                      <span className={styles.receiptLabel}>
                        Invoice Amount:
                      </span>
                      <span className={styles.receiptValue}>
                        {formattedBaseAmount}
                      </span>
                    </div>
                    <div className={styles.receiptRow}>
                      <span className={styles.receiptLabel}>
                        Credit Card Surcharge:
                      </span>
                      <span className={styles.receiptValue}>
                        {formattedSurcharge}
                      </span>
                    </div>
                    <div className={styles.receiptRowTotal}>
                      <span className={styles.receiptLabel}>Total Paid:</span>
                      <span className={styles.receiptValueTotal}>
                        {formattedAmount}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className={styles.receiptRowTotal}>
                    <span className={styles.receiptLabel}>Amount Paid:</span>
                    <span className={styles.receiptValueTotal}>
                      {formattedAmount}
                    </span>
                  </div>
                )}
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
              {hasSurcharge && (
                <li>
                  The surcharge applied helps cover credit card processing fees
                </li>
              )}
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
