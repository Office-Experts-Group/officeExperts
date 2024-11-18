import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Excel Upgrades and Migration | Office Expert Australia",
  description:
    "Expert Microsoft Excel migration and upgrade services. We help resolve Excel workbook issues, optimize performance, and ensure smooth transitions between versions.",

  // OpenGraph
  openGraph: {
    title: "Excel Upgrades and Migration Services",
    description:
      "Professional Excel migration and upgrade services. Resolving workbook issues, version compatibility, and performance optimization.",
    url: "https://www.officeexperts.com.au/services/microsoft-excel/upgrades-and-migration/",
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
    // Core upgrade services
    "Excel migration services",
    "Excel upgrade solutions",
    "Excel version compatibility",
    "Excel workbook optimization",

    // Specific issues
    "slow Excel workbooks",
    "Excel compatibility issues",
    "Excel VBA migration",
    "Excel macro upgrades",
    "Excel 32-bit to 64-bit",

    // Solutions
    "Excel performance optimization",
    "Excel workbook repair",
    "Excel database migration",
    "Excel cloud migration",
    "Excel version upgrade",

    // Business focus
    "business Excel solutions",
    "enterprise Excel migration",
    "corporate Excel upgrades",
    "Excel consulting services",

    // Location specific
    "Excel migration Australia",
    "Excel upgrade services Sydney",
    "Excel consultants Melbourne",
    "Excel experts Brisbane",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Upgrades and Migration Services",
    description:
      "Professional Excel migration and upgrade services. Resolving workbook issues, version compatibility, and performance optimization.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-excel/upgrades-and-migration/",
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
