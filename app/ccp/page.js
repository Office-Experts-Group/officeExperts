// app/ccp/page.js
// Credit card payment page. Rendered on the server; the only client-side
// piece is the card form itself (BpointPaymentForm, via PaymentForm).
//
// SURCHARGE REMOVAL: card surcharges are no longer charged. The legacy "S"
// (surcharge) value that older invoice links may still carry inside the "q"
// parameter is deliberately ignored, and the success screen no longer
// receives base amount / surcharge values.

import React from "react";
// Decodes the base64 "q" invoice parameter into { A, I, C, E, ... }
import { decodeUrlParams } from "../../utils/paymentUtils";
import PaymentForm from "./(components)/PaymentForm";
import NoParamsMessage from "./(components)/NoParamsMessage";
import SuccessMessage from "./(components)/SuccessMessage";

export const metadata = {
  title: "Credit Card Payment | Office Experts Group",
  description:
    "Secure credit card payment page for Office Experts Group invoices",
  robots: {
    index: false,
    follow: false,
  },
  // CSP is handled at the middleware level, so no meta tag here
  other: {
    "Content-Security-Policy": null,
  },
};

/**
 * Builds the email status object from the success redirect query string.
 * Values arrive as strings, so "true" is compared explicitly.
 */
function getEmailStatus(searchParams) {
  return {
    customerEmail: searchParams.emailSent === "true",
    internalEmail: searchParams.internalEmailSent === "true",
    emailId: searchParams.emailId || null,
  };
}

export default function CCPPage({ searchParams }) {
  // Successful payment: BpointPaymentForm redirects back here with the result
  if (searchParams?.paymentStatus === "APPROVED" && searchParams?.reference) {
    return (
      <SuccessMessage
        reference={searchParams.reference}
        amount={searchParams.amount}
        date={searchParams.paymentDate}
        authCode={searchParams.authCode}
        cardType={searchParams.cardType}
        customerEmail={searchParams.customerEmail}
        customerName={searchParams.customerName}
        emailStatus={getEmailStatus(searchParams)}
      />
    );
  }

  // New payment: the invoice link supplies an encoded "q" parameter
  const encodedParams = searchParams?.q || "";

  if (!encodedParams) {
    return <NoParamsMessage />;
  }

  const decodedParams = decodeUrlParams(encodedParams);

  // A (amount in cents) and I (invoice number) are the minimum required
  if (!decodedParams || !decodedParams.A || !decodedParams.I) {
    return <NoParamsMessage />;
  }

  return <PaymentForm params={decodedParams} />;
}
