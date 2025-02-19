import React from "react";

export const metadata = {
  // Basic metadata
  title: "Credit Card Payments | Office Experts Group",
  description:
    "Secure credit card payment processing for Microsoft Office consulting services and solutions. Fast, reliable payment options for our professional services.",

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

  robots: {
    index: false,
    follow: false,
  },

  alternates: {
    canonical: "https://www.officeexperts.com.au/ccp",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
