import React from "react";

export const metadata = {
  // Basic metadata
  title:
    "Companies and Organisations | Word Document Services | Office Experts Group",
  description:
    "Our team of Word design experts deliver versatile templates that meet the needs of any company or organisation. We ensure your corporate identity is protected and can cut costs through setting you up to produce your own inhouse reports.",

  keywords: [
    "word template designers",
    // "corporate document solutions",
    // "microsoft word templates",
    // "document branding",
    // "corporate identity protection",
    // "word document formatting",
    // "inhouse report generation",
    // "corporate branding guidelines",
    // "document automation",
    // "word template consulting",
    // "corporate style management",
    // "document standardization",
    // "business document templates",
    // "word formatting control",
    // "corporate document management",
  ],

  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-word/companies-and-organisations/",
    languages: {
      "en-AU": "/services/microsoft-word/companies-and-organisations/",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
