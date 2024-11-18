import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Excel and Access Experts Richmond",
  description:
    "Expert Microsoft Excel programmers and Access database consultants in Richmond. Specializing in custom development, databases, integration, data manipulation and business solutions.",

  // OpenGraph
  openGraph: {
    title: "Excel and Access Experts Richmond",
    description:
      "Expert Microsoft Excel programmers and Access database consultants in Richmond. Specializing in custom development, databases, integration, data manipulation and business solutions.",
    url: "https://www.officeexperts.com.au/excel-and-access-experts-richmond/",
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
    // Location-specific
    "excel consultants richmond",
    "access database experts richmond",
    "microsoft excel programmers richmond",
    "database consultants richmond",
    "excel specialists richmond",

    // Service-specific
    "custom excel development richmond",
    "access database solutions richmond",
    "excel vba programming richmond",
    "access database integration richmond",
    "excel data manipulation richmond",

    // Expertise-specific
    "excel dashboard development richmond",
    "access database design richmond",
    "excel automation solutions richmond",
    "database reporting richmond",
    "excel template development richmond",

    // Industry-specific
    "business excel solutions richmond",
    "corporate database systems richmond",
    "enterprise excel development richmond",
    "commercial database solutions richmond",

    // Technology combinations
    "excel sql integration richmond",
    "access azure solutions richmond",
    "excel sharepoint integration richmond",
    "database migration richmond",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel and Access Experts Richmond",
    description:
      "Expert Microsoft Excel programmers and Access database consultants in Richmond. Specializing in custom development, databases, integration, data manipulation and business solutions.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/excel-and-access-experts-richmond/",
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
