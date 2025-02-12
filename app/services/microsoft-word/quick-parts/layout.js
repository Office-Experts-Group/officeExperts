import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Document Quick Parts Services | Office Experts Group",
  description:
    "Our team of Word design experts will deliver your document templates with a gallery of Quick Parts so your users can effortlessly create common Word elements, saving your business time, stress and money.",

  // OpenGraph
  openGraph: {
    title:
      "Microsoft Word Document Quick Parts Services | Office Experts Group",
    description:
      "Our team of Word design experts will deliver your document templates with a gallery of Quick Parts so your users can effortlessly create common Word elements, saving your business time, stress and money.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/quick-parts",
  },

  // Additional metadata
  keywords: [
    // Core Quick Parts services
    "microsoft word quick parts creation",
    // "quick parts gallery",
    // "word document quick parts",
    // "quick parts consulting",
    // "word building blocks",

    // // Location-based
    // "quick parts services australia",
    // "word template consulting sydney",
    // "microsoft word services melbourne",
    // "document consulting brisbane",
    // "word experts perth",

    // // Service-specific
    // "custom quick parts development",
    // "word template automation",
    // "document element automation",
    // "building blocks gallery",
    // "word document efficiency",

    // // Industry-specific
    // "corporate document solutions",
    // "business document automation",
    // "enterprise word templates",
    // "professional document services",

    // // Technology combinations
    // "word automation solutions",
    // "document productivity tools",
    // "microsoft office automation",
    // "word template solutions",
  ],
  alternates: {
    canonical: "https://wordexperts.com.au/quick-parts",
    languages: {
      en: "https://wordexperts.com.au/quick-parts",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
