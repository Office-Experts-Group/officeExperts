import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Exchange Online Setup and Support",
  description:
    "Professional Exchange Online setup and email management services. Expert assistance with business email configuration, domain setup, and Office 365 integration.",

  // OpenGraph
  openGraph: {
    title: "Exchange Online Setup and Support",
    description:
      "Professional Exchange Online setup and email management services. Expert assistance with business email configuration, domain setup, and Office 365 integration.",
    url: "https://www.officeexperts.com.au/services/microsoft-office-365/exchange-online-setup-and-support/",
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
    // Core Exchange/Email services
    "Exchange Online setup",
    "business email configuration",
    "email domain setup",
    "Exchange migration services",
    "Exchange 365 support",
    "Exchange Online experts",

    // Specific services
    "shared inbox setup",
    "custom email addresses",
    "email forwarding configuration",
    "business domain email",
    "professional email setup",

    // Location-based
    "Exchange setup Sydney",
    "Exchange experts Melbourne",
    "Exchange migration Brisbane",
    "email setup Perth",

    // Integration/Migration
    "Office 365 email migration",
    "Exchange Online integration",
    "email system upgrade",
    "business email migration",

    // Business-specific
    "corporate email setup",
    "enterprise email configuration",
    "business email branding",
    "company email management",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Exchange Online Setup and Support",
    description:
      "Professional Exchange Online setup and email management services. Expert assistance with business email configuration, domain setup, and Office 365 integration.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-office-365/exchange-online-setup-and-support/",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
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
