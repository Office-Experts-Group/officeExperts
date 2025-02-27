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
    url: "https://www.officeexperts.com.au/services/microsoft-word/remove-repetition-and-increase-productivity",
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
    "Remove repetition in Microsoft Word",
  ],

  alternates: {
    canonical:
      "/services/microsoft-word/remove-repetition-and-increase-productivity",
    alternate: [
      {
        url: "https://www.wordexperts.com.au/remove-repetition-and-increase-productivity",
        type: "alternate",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Remove Repetition and Increase Productivity with Word Document Services | Office Experts Group",
    description:
      "Our template solution contains automation that allows users to add document elements at the click of a button. We can automate processes to make your document creation task simple and time effective.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
