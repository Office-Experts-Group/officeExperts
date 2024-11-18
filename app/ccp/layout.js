import React from "react";
import PropTypes from "prop-types";

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
    url: "https://www.officeexperts.com.au/ccp/",
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
    "consulting payment options",
    "secure payment processing",
    "credit card payments",
    "online payment systems",

    // Service-related
    "Microsoft consulting payments",
    "Office solution payments",
    "IT consulting payments",
    "professional services payment",
    "business automation payment",

    // Location-specific
    "Australian payment processing",
    "Sydney IT payments",
    "Melbourne consulting payments",
    "Brisbane tech payments",
    "Perth service payments",

    // Feature-specific
    "secure transaction processing",
    "business payment options",
    "enterprise payment solutions",
    "corporate payment processing",
    "consulting service payments",
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

  // Additional tags

  canonical: "https://www.officeexperts.com.au/ccp/",
  robots: {
    index: true,
    follow: false,
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
