import React from "react";

export const metadata = {
  // Basic metadata
  title: "Power Pivot | Office Experts Group",
  description:
    "Office Experts offers advanced Power Pivot training and consulting to help you model, analyze, and visualize complex data with ease.",

  keywords: ["Power Pivot"],

  alternates: {
    canonical: "/services/power-pivot",
  },

  // OpenGraph
  openGraph: {
    title: "Power Pivot | Office Experts Group",
    description:
      "Office Experts offers advanced Power Pivot training and consulting to help you model, analyze, and visualize complex data with ease.",
    url: "https://www.officeexperts.com.au/services/power-pivot",
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
    title: "Power Pivot | Office Experts Group",
    description:
      "Office Experts offers advanced Power Pivot training and consulting to help you model, analyze, and visualize complex data with ease.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
