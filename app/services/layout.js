import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Microsoft Development Services | Office Experts Solutions Australia",
  description:
    "Our Office Experts team specialises in services across all Microsoft Office products. Call us 1300 10 28 10 or Email us consult@officeexperts.com.au",

  openGraph: {
    title:
      "Microsoft Development Services | Office Experts Solutions Australia",
    description:
      "Our Office Experts team specialises in services across all Microsoft Office products. Call us 1300 10 28 10 or Email us consult@officeexperts.com.au",
    url: "https://www.officeexperts.com.au/services/",
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

  keywords: [
    // Core services
    "microsoft office development services australia",
    "custom office solutions development",
    "microsoft office consulting services",
    "office automation development",
    "microsoft integration services",

    // Product specific
    "excel development services",
    "access database development",
    "power platform consulting",
    "sharepoint development services",
    "azure cloud solutions",

    // Service specific
    "office vba macro development",
    "custom office template creation",
    "microsoft database solutions",
    "office workflow automation",
    "power bi dashboard development",

    // Location based
    "microsoft office services sydney",
    "office development melbourne",
    "microsoft consulting brisbane",
    "office experts perth",
    "microsoft services australia wide",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Microsoft Development Services | Office Experts Solutions Australia",
    description:
      "Our Office Experts team specialises in services across all Microsoft Office products. Call us 1300 10 28 10 or Email us consult@officeexperts.com.au",
    images: ["/logo.png"],
  },

  canonical: "https://www.officeexperts.com.au/services/",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

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
