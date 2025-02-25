import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Power Apps Services Australia | Office Experts Group",
  description:
    "Our certified experts develop custom business apps for mobile and web, using Microsoft Power Apps canvas and model-driven solutions. Competitive pricing and minimal coding approach.",

  // Additional metadata
  keywords: [
    // Core services
    "Microsoft power apps development",
  ],

  alternates: {
    canonical:
      "https://powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps",
  },

  // OpenGraph
  openGraph: {
    title: "Microsoft Power Apps Services Australia | Office Experts Group",
    description:
      "Our certified experts develop custom business apps for mobile and web, using Microsoft Power Apps canvas and model-driven solutions. Competitive pricing and minimal coding approach.",
    url: "https://powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps",
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

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Power Apps Services Australia | Office Experts Group",
    description:
      "Our certified experts develop custom business apps for mobile and web, using Microsoft Power Apps canvas and model-driven solutions. Competitive pricing and minimal coding approach.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
