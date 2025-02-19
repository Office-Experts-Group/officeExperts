import React from "react";
import { decodeUrlParams } from "../../utils/paymentUtils";
import PaymentForm from "./(components)/PaymentForm";
import NoParamsMessage from "./(components)/NoParamsMessage";
import SimplifyScriptLoader from "./(components)/SimplifyScriptLoader";
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
  // Check for success parameters from Simplify redirect
  if (searchParams?.paymentStatus === "APPROVED" && searchParams?.reference) {
    // Payment was successful
    return (
      <SuccessMessage
        reference={searchParams.reference}
        amount={searchParams.amount}
        date={searchParams.paymentDate}
        authCode={searchParams.authCode}
      />
    );
  }

  // Check if we have the 'q' query parameter
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
      <SimplifyScriptLoader />
      <PaymentForm params={decodedParams} />
    </>
  );
}
