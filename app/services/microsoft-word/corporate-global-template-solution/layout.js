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

  keywords: [
    // Core services
    "corporate Word template solutions",
    // "Word document automation",
    "corporate branding templates",
  ],

  alternates: {
    canonical: "/services/microsoft-word/corporate-global-template-solution",
    alternate: [
      {
        url: "https://www.wordexperts.com.au/corporate-global-template-solution",
        type: "alternate",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Corporate Word Solutions | Office Experts Group",
    description:
      "Advanced Corporate Word Template Solution enabling users to efficiently create corporate documents in a controlled environment with consistent formatting, automated processes, and protected branding guidelines.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
