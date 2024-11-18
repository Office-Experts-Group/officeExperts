import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Excel Formulas and Custom Formulas | Office Expert Australia",
  description:
    "Expert assistance with Excel formulas and custom formula development. Our specialists help optimize formula usage and create custom solutions for complex requirements.",

  // OpenGraph
  openGraph: {
    title: "Excel Formulas and Custom Formulas",
    description:
      "Expert assistance with Excel formulas and custom formula development. Our specialists help optimize formula usage and create custom solutions for complex requirements.",
    url: "https://www.officeexperts.com.au/services/microsoft-excel/excel-formulas-and-custom-formulas/",
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
    // Core formula keywords
    "Excel formula help",
    "custom Excel formulas",
    "Excel formula development",
    "complex Excel formulas",
    "Excel formula optimization",

    // Technical keywords
    "Excel VBA formulas",
    "Excel formula functions",
    "Excel formula automation",
    "Excel formula programming",
    "Excel custom functions",

    // Problem-focused
    "Excel formula troubleshooting",
    "Excel formula maintenance",
    "Excel formula performance",
    "Excel formula crashes",
    "Excel formula corruption",

    // Service-specific
    "Excel formula consulting",
    "Excel formula experts",
    "Excel formula support",
    "Excel formula training",
    "Excel formula solutions",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Formulas and Custom Formulas",
    description:
      "Expert assistance with Excel formulas and custom formula development. Our specialists help optimize formula usage and create custom solutions for complex requirements.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-excel/excel-formulas-and-custom-formulas/",
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
