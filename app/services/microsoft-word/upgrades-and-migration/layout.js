import React from "react";

export const metadata = {
  // Basic metadata
  title: "Word Upgrades and Migration | Office Experts Group",
  description:
    "Expert Microsoft Word upgrade and migration services. Our team helps ensure smooth transitions between versions, fixes formatting issues, and handles PDF conversions professionally.",

  // OpenGraph
  openGraph: {
    title: "Word Upgrades and Migration Services | Office Experts Group",
    description:
      "Professional Microsoft Word upgrade and migration services. Specialists in version transitions, formatting fixes, and PDF conversions.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/upgrades-and-migration/",
  },

  // Additional metadata
  keywords: [
    // Core services
    "Word upgrade and migration assistance",
    // "Word migration services",
    // "Microsoft Word version upgrade",
    // "Word document conversion",
    // "PDF to Word conversion",

    // // Specific services
    // "Word template migration",
    // "Word macro upgrade",
    // "Word formatting fixes",
    // "Word version compatibility",
    // "Word document repair",

    // // Problem-specific
    // "fix Word formatting issues",
    // "repair broken Word documents",
    // "Word version compatibility issues",
    // "Word document recovery",
    // "Word template repair",

    // // Location-based
    // "Word migration services Australia",
    // "Word upgrade consultants Sydney",
    // "Word document experts Melbourne",
    // "Microsoft Word specialists Brisbane",

    // // Business solutions
    // "business Word migration",
    // "enterprise Word upgrade",
    // "corporate Word solutions",
    // "professional Word services",
  ],
  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-word/upgrades-and-migration/",
    languages: {
      "en-AU": "/services/microsoft-word/upgrades-and-migration/",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
