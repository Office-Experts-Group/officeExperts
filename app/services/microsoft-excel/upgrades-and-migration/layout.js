import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel Upgrades and Migration | Office Experts Group",
  description:
    "Expert Microsoft Excel migration and upgrade services. We help resolve Excel workbook issues, optimise performance, and ensure smooth transitions between versions.",
  keywords: ["Excel migration services", "Excel upgrade solutions"],

  alternates: {
    canonical: "/services/microsoft-excel/upgrades-and-migration",
    alternate: [
      {
        url: "https://www.excelexperts.com.au/upgrades-and-migration",
        type: "alternate",
      },
    ],
  },

  // OpenGraph
  openGraph: {
    title: "Excel Upgrades and Migration | Office Experts Group",
    description:
      "Expert Microsoft Excel migration and upgrade services. We help resolve Excel workbook issues, optimise performance, and ensure smooth transitions between versions.",
    url: "https://www.officeexperts.com.au/services/microsoft-excel/upgrades-and-migration",
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
    title: "Excel Upgrades and Migration | Office Experts Group",
    description:
      "Expert Microsoft Excel migration and upgrade services. We help resolve Excel workbook issues, optimise performance, and ensure smooth transitions between versions.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
