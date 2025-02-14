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
  },

  // Additional metadata
  keywords: [
    // Core services
    "Word upgrade and migration assistance",
  ],
  alternates: {
    canonical: "https://www.wordexperts.com.au/upgrades-and-migration",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
