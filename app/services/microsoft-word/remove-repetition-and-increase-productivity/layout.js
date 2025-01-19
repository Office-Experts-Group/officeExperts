import React from "react";

export const metadata = {
  // Basic metadata
  title:
    "Remove Repetition and Increase Productivity with Word Document Services | Office Experts Group",
  description:
    "Our template solution contains automation that allows users to add document elements at the click of a button. We can automate processes to make your document creation task simple and time effective.",

  // OpenGraph
  openGraph: {
    title:
      "Remove Repetition and Increase Productivity with Word Document Services | Office Experts Group",
    description:
      "Our template solution contains automation that allows users to add document elements at the click of a button. We can automate processes to make your document creation task simple and time effective.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/remove-repetition-and-increase-productivity/",
  },

  // Additional metadata
  keywords: [
    // Core services
    "Remove repetition in Microsoft Word",
    // "document productivity solutions",
    // "Microsoft Word efficiency",
    // "document automation tools",
    // "Word template automation",

    // // Features
    // "automated document creation",
    // "document element automation",
    // "Word document efficiency",
    // "business document automation",
    // "Word process automation",

    // // Benefits
    // "reduce document repetition",
    // "increase Word productivity",
    // "improve document efficiency",
    // "streamline Word processes",
    // "automate Word tasks",

    // // Business focus
    // "business document solutions",
    // "corporate Word automation",
    // "enterprise Word solutions",
    // "professional Word services",
    // "document productivity consulting",
  ],
  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical:
      "/services/microsoft-word/remove-repetition-and-increase-productivity/",
    languages: {
      "en-AU":
        "/services/microsoft-word/remove-repetition-and-increase-productivity/",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
