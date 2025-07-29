import React from "react";

export const metadata = {
  // Basic metadata
  title: "Export to PDF in Power Apps",
  description:
    "Learn how to export data from Power Apps to PDF using Power Automate. Generate professional PDF documents directly from your Power Apps.",

  // OpenGraph
  openGraph: {
    title: "Export to PDF in Power Apps - The Best Way to Do It!",
    description:
      "Learn how to export data from Power Apps to PDF using Power Automate. Generate professional PDF documents directly from your Power Apps.",
    url: "https://www.powerplatformexperts.com.au/blog/export-to-pdf-in-power-apps",
    siteName: "Office Experts",
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
  keywords: ["Power Apps Export to PDF"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Export to PDF in Power Apps - The Best Way to Do It!",
    description:
      "Learn how to export data from Power Apps to PDF using Power Automate. Generate professional PDF documents directly from your Power Apps.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical:
      "https://www.powerplatformexperts.com.au/blog/export-to-pdf-in-power-apps",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
