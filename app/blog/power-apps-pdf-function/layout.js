import React from "react";

export const metadata = {
  // Basic metadata
  title: "Power Apps PDF Function - The Best Way to Export to PDF?",
  description:
    "The PDF function is a powerful tool that allows you to easily generate high-quality PDF documents from your Power Apps.",

  // OpenGraph
  openGraph: {
    title: "Power Apps PDF Function - The Best Way to Export to PDF?",
    description:
      "The PDF function is a powerful tool that allows you to easily generate high-quality PDF documents from your Power Apps.",
    url: "https://www.powerplatformexperts.com.au/blog/power-apps-pdf-function",
    siteName: "Power Platform Experts",
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
  keywords: ["Power Apps PDF Function"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Power Apps PDF Function - The Best Way to Export to PDF?",
    description:
      "The PDF function is a powerful tool that allows you to easily generate high-quality PDF documents from your Power Apps.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog/power-apps-pdf-function",
    alternate: [
      {
        url: "https://www.powerplatformexperts.com.au/blog/power-apps-pdf-function",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
