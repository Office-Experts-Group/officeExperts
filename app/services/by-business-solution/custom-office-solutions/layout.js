import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Custom Office Solutions | Office Expert Australia",
  description:
    "Custom Office Solutions - Need an expert to help you with Excel, Access, Word, Outlook or PowerPoint. Call us 1300 10 28 10",

  // OpenGraph
  openGraph: {
    title: "Custom Office Solutions",
    description:
      "Custom Office Solutions - Need an expert to help you with Excel, Access, Word, Outlook or PowerPoint. Call us 1300 10 28 10",
    url: "https://www.officeexperts.com.au/services/by-business-solution/custom-office-solutions/",
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
    type: "article",
  },

  // Additional metadata
  keywords: [
    // Core custom solution services
    "custom Office solutions Australia",
    "Office customization services",
    "bespoke Office development",
    "tailored Office solutions",
    "custom Office automation",

    // Product-specific solutions
    "custom Excel solutions",
    "custom Access solutions",
    "custom Word templates",
    "PowerPoint customization",
    "Outlook automation",

    // Business solution focus
    "business process automation",
    "document automation solutions",
    "workflow optimization",
    "data processing solutions",
    "reporting automation",

    // Industry/purpose specific
    "enterprise Office customization",
    "corporate Office solutions",
    "business efficiency solutions",
    "productivity enhancement tools",
    "document management solutions",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Custom Office Solutions",
    description:
      "Custom Office Solutions - Need an expert to help you with Excel, Access, Word, Outlook or PowerPoint. Call us 1300 10 28 10",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/by-business-solution/custom-office-solutions/",
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
