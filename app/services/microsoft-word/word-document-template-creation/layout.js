import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Word Template Creation | Word Document Creation | Microsoft Word Services | Word Experts",
  description:
    "Our team of Word design experts can create your company documents and templates with our easy to use templates, complete with your branding, a consistent look and a professional feel.",

  // OpenGraph
  openGraph: {
    title: "Word Document/Template Creation",
    description:
      "Our team of Word design experts can create your company documents and templates with our easy to use templates, complete with your branding, a consistent look and a professional feel.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/word-document-template-creation/",
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
    // Core template services
    "Word template creation",
    "Word document design",
    "custom Word templates",
    "professional Word templates",
    "Word document creation",

    // Specific services
    "corporate Word templates",
    "business document templates",
    "branded Word templates",
    "Word template design",
    "Word document solutions",

    // Features
    "Word template automation",
    "Word document formatting",
    "Word template customization",
    "Word branding solutions",
    "Word document consistency",

    // Business focus
    "professional document design",
    "business document creation",
    "corporate template solutions",
    "company document templates",
    "document branding services",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word Document/Template Creation",
    description:
      "Our team of Word design experts can create your company documents and templates with our easy to use templates, complete with your branding, a consistent look and a professional feel.",
    images: ["/logo.png"],
  },

  // Additional tags

  canonical:
    "https://www.officeexperts.com.au/services/microsoft-word/word-document-template-creation/",
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
