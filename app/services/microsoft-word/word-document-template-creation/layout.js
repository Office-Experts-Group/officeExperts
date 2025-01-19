import React from "react";

export const metadata = {
  // Basic metadata
  title:
    "Word Template Creation | Word Document Creation | Office Experts Group",
  description:
    "Our team of Word design experts can create your company documents and templates with our easy to use templates, complete with your branding, a consistent look and a professional feel.",

  // OpenGraph
  openGraph: {
    title:
      "Word Template Creation | Word Document Creation | Office Experts Group",
    description:
      "Our team of Word design experts can create your company documents and templates with our easy to use templates, complete with your branding, a consistent look and a professional feel.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/word-document-template-creation/",
  },

  // Additional metadata
  keywords: [
    "Custom word template designers",
    // Core template services
    // "Word template creation",
    // "Word document design",
    // "custom Word templates",
    // "professional Word templates",
    // "Word document creation",

    // // Specific services
    // "corporate Word templates",
    // "business document templates",
    // "branded Word templates",
    // "Word template design",
    // "Word document solutions",

    // // Features
    // "Word template automation",
    // "Word document formatting",
    // "Word template customisation",
    // "Word branding solutions",
    // "Word document consistency",

    // // Business focus
    // "professional document design",
    // "business document creation",
    // "corporate template solutions",
    // "company document templates",
    // "document branding services",
  ],
  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-word/word-document-template-creation/",
    languages: {
      "en-AU": "/services/microsoft-word/word-document-template-creation/",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
