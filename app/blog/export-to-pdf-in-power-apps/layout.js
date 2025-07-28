import React from "react";

export const metadata = {
  // Basic metadata
  title: "Export to PDF in Power Apps",
  description:
    "Learn how to export data from Power Apps to PDF using Power Automate. This tutorial shows the easiest and most effective way to generate professional PDF documents directly from your Power Apps, including how to add images to your PDFs and automatically link them back to your data source.",

  // OpenGraph
  openGraph: {
    title: "Export to PDF in Power Apps - The Best Way to Do It!",
    description:
      "Learn how to export data from Power Apps to PDF using Power Automate. This tutorial shows the easiest and most effective way to generate professional PDF documents directly from your Power Apps, including how to add images to your PDFs and automatically link them back to your data source.",
    url: "https://www.officeexperts.com.au/blog/export-to-pdf-power-apps",
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
      "Learn how to export data from Power Apps to PDF using Power Automate. This tutorial shows the easiest and most effective way to generate professional PDF documents directly from your Power Apps, including how to add images to your PDFs and automatically link them back to your data source.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog/export-to-pdf-in-power-apps",
    alternate: [
      {
        url: "https://www.powerplatformexperts.com.au/blog/export-to-pdf-in-power-apps",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
