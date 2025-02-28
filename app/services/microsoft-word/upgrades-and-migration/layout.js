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
    url: "https://www.officeexperts.com.au/services/microsoft-word/upgrades-and-migration",
    siteName: "Office Experts Group",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: [
    // Core services
    "Word upgrade and migration assistance",
  ],

  alternates: {
    canonical: "/services/microsoft-word/upgrades-and-migration",
    alternate: [
      {
        url: "https://www.wordexperts.com.au/upgrades-and-migration",
        type: "alternate",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word Upgrades and Migration Services | Office Experts Group",
    description:
      "Professional Word form design services with user-friendly data entry, form controls, and VBA integration for consistent data formatting.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
