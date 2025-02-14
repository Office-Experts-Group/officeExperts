import React from "react";

export const metadata = {
  title: "Corporate Word Solutions | Office Experts Group",
  description:
    "Advanced Corporate Word Template Solution enabling users to efficiently create corporate documents in a controlled environment with consistent formatting, automated processes, and protected branding guidelines.",

  openGraph: {
    title: "Corporate Word Solutions | Office Experts Group",
    description:
      "Advanced Corporate Word Template Solution enabling users to efficiently create corporate documents in a controlled environment with consistent formatting, automated processes, and protected branding guidelines.",
    url: "https://www.wordexperts.com.au/services/microsoft-word/corporate-global-template-solution",
  },

  keywords: [
    // Core services
    "corporate Word template solutions",
    // "Word document automation",
    "corporate branding templates",
  ],
  alternates: {
    canonical:
      "https://www.wordexperts.com.au/corporate-global-template-solution",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
