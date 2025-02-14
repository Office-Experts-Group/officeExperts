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
  ],
  alternates: {
    canonical: "https://www.wordexperts.com.au/quick-parts",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
