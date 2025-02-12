import React from "react";

export const metadata = {
  title:
    "Word Design Services | Word Template Designers | Office Experts Group",
  description:
    "Our team of Word design experts take the stress out of your company templates by converting all of your organisation's documents to our easy to use templates, complete with your branding, a consistent look and a professional feel.",

  openGraph: {
    title:
      "Word Template Conversions | Word Design Services | Office Experts Group",
    description:
      "Our team of Word design experts take the stress out of your company templates by converting all of your organisation's documents to our easy to use templates, complete with your branding, a consistent look and a professional feel.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/word-template-conversions",
  },

  keywords: [
    // Core services
    "Word template design",
    "Word template conversion",
    // "Word document design",
    // "Adobe to Word conversion",
    // "InDesign to Word conversion",

    // // Service-specific
    // "Word template services",
    // "Word document templates",
    // "Word template solutions",
    // "professional Word templates",
    // "corporate Word templates",

    // // Location-based
    // "Word template designers Australia",
    // "Word design services Sydney",
    // "Word template conversion Melbourne",
    // "Word document experts Brisbane",

    // // Business focus
    // "business Word templates",
    // "corporate document templates",
    // "professional document design",
    // "template branding services",
    // "Word document solutions",
  ],
  alternates: {
    canonical: "https://wordexperts.com.au/word-template-conversions",
    languages: {
      en: "https://wordexperts.com.au/word-template-conversions",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
