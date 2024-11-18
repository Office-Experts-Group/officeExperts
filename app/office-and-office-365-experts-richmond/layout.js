import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Office and Office 365 Experts Richmond",
  description:
    "Expert Microsoft Office consulting team in Richmond specialising in custom development, databases, document design, dashboards and reporting solutions with excellent customer service.",

  // OpenGraph
  openGraph: {
    title: "Office and Office 365 Experts Richmond",
    description:
      "Expert Microsoft Office consulting team in Richmond specialising in custom development, databases, document design, dashboards and reporting solutions with excellent customer service.",
    url: "https://www.officeexperts.com.au/office-and-office-365-experts-richmond/",
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
    // Location specific
    "office experts richmond",
    "microsoft office consultants richmond",
    "office 365 consultants richmond",
    "microsoft office specialists richmond",

    // Service specific
    "office 365 migration richmond",
    "office automation richmond",
    "office integration richmond",
    "office cloud solutions richmond",

    // Expertise areas
    "custom office development richmond",
    "office document design richmond",
    "office database solutions richmond",
    "office reporting solutions richmond",

    // Business solutions
    "business automation richmond",
    "document management richmond",
    "office training richmond",
    "office support richmond",

    // Technology combinations
    "office sharepoint richmond",
    "office azure richmond",
    "office 365 migration richmond",
    "office cloud integration richmond",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office and Office 365 Experts Richmond",
    description:
      "Expert Microsoft Office consulting team in Richmond specialising in custom development, databases, document design, dashboards and reporting solutions with excellent customer service.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/office-and-office-365-experts-richmond/",
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
