import React from "react";

export const metadata = {
  title: "Government Department Word Solutions | Office Experts Group",
  description:
    "Expert Microsoft Word document design and consulting services for government departments. Specialising in accessible documents, templates, and corporate identity protection for state and federal agencies.",

  openGraph: {
    title: "Government Department Word Solutions | Office Experts Group",
    description:
      "Expert Microsoft Word document design and consulting services for government departments. Specialising in accessible documents, templates, and corporate identity protection for state and federal agencies.",
    url: "https://www.wordexperts.com.au/services/microsoft-word/government-departments",
  },

  keywords: [
    // Core government services
    "government microsoft document solutions",
    // "government word templates",
    // "federal government word services",
    // "state government word services",
    // "accessible government documents",

    // // Service-specific
    // "government document design",
    // "government template creation",
    // "government accessibility compliance",
    // "government corporate identity",
    // "government document automation",

    // // Location-based
    // "australian government word services",
    // "federal department word solutions",
    // "state department word solutions",

    // // Technical aspects
    // "government document accessibility",
    // "government template management",
    // "government document standards",
    // "government compliant documents",
    // "government document formatting",

    // // Specific solutions
    // "government master templates",
    // "government sub templates",
    // "government document controls",
    // "government template automation",
    // "government document consistency",
  ],
  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-word/government-departments",
    languages: {
      "en-AU": "/services/microsoft-word/government-departments",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
