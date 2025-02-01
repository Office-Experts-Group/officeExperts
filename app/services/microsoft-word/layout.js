import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Services | Office Experts Group",
  description:
    "Professional Microsoft Word consulting services specialising in templates, document design, forms, accessibility and corporate solutions across Australia.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Word Services | Office Experts Group",
    description:
      "Professional Microsoft Word consulting services specialising in templates, document design, forms, accessibility and corporate solutions across Australia.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/",
  },

  // Additional metadata
  keywords: [
    // Core Word services
    "Microsoft Word professional consultants",
    // "Word template design",
    // "corporate Word templates",
    // "Word document solutions",
    // "Word accessibility services",

    // // Location-based
    // "Word consultants Sydney",
    // "Word experts Melbourne",
    // "Word specialists Brisbane",
    // "Word consultants Perth",

    // // Service-specific long tail
    // "Word VBA development",
    // "Word form creation",
    // "Word document automation",
    // "Word corporate branding",
    // "Word template conversion",

    // // Industry-specific
    // "government Word solutions",
    // "corporate Word templates",
    // "enterprise Word consulting",
    // "business Word automation",

    // // Feature-specific
    // "Word popup forms",
    // "Word quick parts",
    // "Word document accessibility",
    // "Word custom toolbars",
    // "Word template migration",
  ],
  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-word",
    languages: {
      "en-AU": "/services/microsoft-word",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
