import React from "react";

export const metadata = {
  // Basic metadata
  title: "Word and PowerPoint Experts Melbourne | Office Experts Group",
  description:
    "Expert Microsoft Word and PowerPoint consulting services in Melbourne. Specialising in templates, document design, presentations, automation and corporate solutions.",

  // OpenGraph
  openGraph: {
    title: "Word and PowerPoint Experts Melbourne | Office Experts Group",
    description:
      "Expert Microsoft Word and PowerPoint consulting services in Melbourne. Specialising in templates, document design, presentations, automation and corporate solutions.",
    url: "https://www.wordexperts.com.au/word-and-powerpoint-experts-melbourne",
  },

  // Additional metadata
  keywords: [
    // Location-specific
    "word experts melbourne",
    "powerpoint experts melbourne",
    // "microsoft word consultants melbourne",
    // "powerpoint consultants melbourne",
    // "document design melbourne",
    // "presentation design melbourne",

    // // Service-specific
    // "word template design",
    // "powerpoint template design",
    // "corporate document solutions",
    // "presentation automation",
    // "document automation melbourne",
    // "business documentation",

    // // Industry-specific
    // "corporate documentation services",
    // "government document solutions",
    // "business presentation design",
    // "professional document templates",

    // // Technology combinations
    // "microsoft office consulting melbourne",
    // "word powerpoint integration",
    // "office automation melbourne",
    // "document management solutions",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word and PowerPoint Experts Melbourne | Office Experts Group",
    description:
      "Expert Microsoft Word and PowerPoint consulting services in Melbourne. Specialising in templates, document design, presentations, automation and corporate solutions.",
    images: ["/logo.png"],
  },
  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/word-and-powerpoint-experts-melbourne",
    languages: {
      "en-AU": "/word-and-powerpoint-experts-melbourne",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
