import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "3rd Party Application | Office Integration | Office Expert",
  description:
    "We are Integration Experts! Do you have a Microsoft Office or CRM application, an accounting package. Visit our website www.officeexperts.com.au",

  // OpenGraph
  openGraph: {
    title: "3rd Party Application or Office Integration",
    description:
      "We are Integration Experts! Do you have a Microsoft Office or CRM application, an accounting package. Visit our website www.officeexperts.com.au",
    url: "https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration/",
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
    // Core integration services
    "office integration services",
    "third party application integration",
    "CRM office integration",
    "accounting software integration",
    "ODBC integration",
    "API integration",

    // Specific integrations
    "Xero integration",
    "MYOB integration",
    "Dynamics integration",
    "Salesforce integration",
    "MailChimp integration",

    // Database integration
    "SQL Server integration",
    "Azure database integration",
    "MySQL integration",
    "Oracle integration",
    "Access integration",

    // Office specific
    "Excel integration",
    "Word integration",
    "PowerPoint integration",
    "Office automation",
    "VBA development",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "3rd Party Application | Office Integration | Office Expert",
    description:
      "We are Integration Experts! Do you have a Microsoft Office or CRM application, an accounting package. Visit our website www.officeexperts.com.au",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration/",
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
