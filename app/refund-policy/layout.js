import React from "react";

export const metadata = {
  // Basic metadata
  title: "Refund Policy | Office Experts Group",
  description:
    "Read the refund policy for Office Experts, detailing how we accept and process refunds for our professional services.",
  keywords: "Office experts refund policy",

  alternates: {
    canonical: "/refund-policy",
  },

  // OpenGraph
  openGraph: {
    title: "Refund Policy | Office Experts Group",
    description:
      "Read the refund policy for Office Experts, detailing how we accept and process refunds for our professional services.",
    url: "https://www.officeexperts.com.au/refund-policy",
    siteName: "Office Experts Group",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },
};

export default function RefundLayout({ children }) {
  return <>{children}</>;
}
