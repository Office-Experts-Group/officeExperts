import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Power Pages Consulting | Office Experts Group",
  description:
    "If Microsoft Power Pages is right for your business, our certified experts can rapidly build websites that deliver crucial information and services to your customers.",

  // Additional metadata
  keywords: [
    // Core services
    "Power Pages consulting",
    "Microsoft Power Pages developers",
  ],

  alternates: {
    canonical:
      "https://powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages",
  },

  // OpenGraph
  openGraph: {
    title: "Microsoft Power Pages Consulting | Office Experts Group",
    description:
      "If Microsoft Power Pages is right for your business, our certified experts can rapidly build websites that deliver crucial information and services to your customers.",
    url: "https://powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages",
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
    title: "Microsoft Power Pages Consulting | Office Experts Group",
    description:
      "If Microsoft Power Pages is right for your business, our certified experts can rapidly build websites that deliver crucial information and services to your customers.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
