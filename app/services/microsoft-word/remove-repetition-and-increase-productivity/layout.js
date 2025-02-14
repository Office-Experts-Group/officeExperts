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
  },

  // Additional metadata
  keywords: [
    // Core services
    "Remove repetition in Microsoft Word",
  ],
  alternates: {
    canonical:
      "https://www.wordexperts.com.au/remove-repetition-and-increase-productivity",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
