import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Word Popup Form | Word Popup Window | Word Experts",
  description:
    "Our team of Word design experts can deliver your document templates with popup forms to enhance the data entry process, improving both productivity and document quality, while saving your business money.",

  // OpenGraph
  openGraph: {
    title: "Word Popup Form | Word Popup Window | Word Experts",
    description:
      "Our team of Word design experts can deliver your document templates with popup forms to enhance the data entry process, improving both productivity and document quality, while saving your business money.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/popup-forms/",
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
    // Core popup form services
    "Word popup forms",
    "Microsoft Word popup windows",
    "custom popup forms Word",
    "Word form development",
    "popup form design",

    // Features and benefits
    "data validation forms",
    "form automation Word",
    "document data entry",
    "form efficiency solutions",
    "document productivity tools",

    // Service-specific
    "Word form integration",
    "popup form consulting",
    "Microsoft Word forms",
    "Word document automation",
    "form template design",

    // Business focus
    "business document solutions",
    "corporate form templates",
    "document efficiency",
    "data entry automation",
    "document quality control",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word Popup Form | Word Popup Window | Word Experts",
    description:
      "Our team of Word design experts can deliver your document templates with popup forms to enhance the data entry process, improving both productivity and document quality, while saving your business money.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-word/popup-forms/",
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
