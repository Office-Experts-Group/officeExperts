import React from "react";

export const metadata = {
  // Basic metadata
  title: "Credit Card Payments | Office Experts Group",
  description:
    "Secure credit card payment processing for Microsoft Office consulting services and solutions. Fast, reliable payment options for our professional services.",

  // OpenGraph
  openGraph: {
    title: "Credit Card Payments | Office Experts Group",
    description:
      "Secure credit card payment processing for Microsoft Office consulting services and solutions.",
    url: "https://www.officeexperts.com.au/ccp",
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

  // Additional metadata
  keywords: [
    // Core payment keywords
    "office experts payments",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Credit Card Payments | Office Experts Group",
    description:
      "Secure credit card payment processing for Microsoft Office consulting services and solutions.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
