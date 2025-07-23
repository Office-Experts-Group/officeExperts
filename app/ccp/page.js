// app/ccp/page.js - UPDATED WITH EMAIL STATUS HANDLING
import React from "react";
import { decodeUrlParams } from "../../utils/paymentUtils";
import PaymentForm from "./(components)/PaymentForm";
import NoParamsMessage from "./(components)/NoParamsMessage";
// import SimplifyScriptLoader from "./(components)/SimplifyScriptLoader";
import SuccessMessage from "./(components)/SuccessMessage";

export const metadata = {
  title: "Credit Card Payment | Office Experts Group",
  description:
    "Secure credit card payment page for Office Experts Group invoices",
  robots: {
    index: false,
    follow: false,
  },
  // Disable CSP meta tags since we're handling it at the middleware level
  other: {
    "Content-Security-Policy": null,
  },
};

export default function CCPPage({ searchParams }) {
  // Check for success parameters from payment processing
  if (searchParams?.paymentStatus === "APPROVED" && searchParams?.reference) {
    // Parse email status information
    const emailStatus = {
      customerEmail: searchParams.emailSent === "true",
      internalEmail: searchParams.internalEmailSent === "true",
      emailId: searchParams.emailId || null,
    };

    // Payment was successful - show success page with email status
    return (
      <SuccessMessage
        reference={searchParams.reference}
        amount={searchParams.amount}
        baseAmount={searchParams.baseAmount}
        surcharge={searchParams.surcharge}
        date={searchParams.paymentDate}
        authCode={searchParams.authCode}
        cardType={searchParams.cardType}
        customerEmail={searchParams.customerEmail}
        customerName={searchParams.customerName}
        emailStatus={emailStatus}
      />
    );
  }

  // Check if we have the 'q' query parameter for new payments
  const encodedParams = searchParams?.q || "";

  // If no parameter is provided, show error message
  if (!encodedParams) {
    return <NoParamsMessage />;
  }

  // Decode the parameters
  const decodedParams = decodeUrlParams(encodedParams);

  // If parameters couldn't be decoded properly, show error message
  if (!decodedParams || !decodedParams.A || !decodedParams.I) {
    return <NoParamsMessage />;
  }

  return (
    <>
      {/* <SimplifyScriptLoader /> */}
      <PaymentForm params={decodedParams} />
    </>
  );
}
