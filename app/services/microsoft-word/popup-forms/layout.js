import React from "react";

export const metadata = {
  // Basic metadata
  title: "Word Popup Form | Office Experts Group",
  description:
    "Our team of Word design experts can deliver your document templates with popup forms to enhance the data entry process, improving both productivity and document quality, while saving your business money.",

  // OpenGraph
  openGraph: {
    title: "Word Popup Form | Office Experts Group",
    description:
      "Our team of Word design experts can deliver your document templates with popup forms to enhance the data entry process, improving both productivity and document quality, while saving your business money.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/popup-forms/",
  },

  // Additional metadata
  keywords: [
    "Word popup form development",
    // Core popup form services
    // "Word popup forms",
    // "Microsoft Word popup windows",
    // "custom popup forms Word",
    // "popup form design",

    // // Features and benefits
    // "data validation forms",
    // "form automation Word",
    // "document data entry",
    // "form efficiency solutions",
    // "document productivity tools",

    // // Service-specific
    // "Word form integration",
    // "popup form consulting",
    // "Microsoft Word forms",
    // "Word document automation",
    // "form template design",

    // // Business focus
    // "business document solutions",
    // "corporate form templates",
    // "document efficiency",
    // "data entry automation",
    // "document quality control",
  ],
  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-word/popup-forms/",
    languages: {
      "en-AU": "/services/microsoft-word/popup-forms/",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
