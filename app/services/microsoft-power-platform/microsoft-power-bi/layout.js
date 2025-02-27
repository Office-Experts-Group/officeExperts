import React from "react";

export const metadata = {
  title: "Microsoft Power BI Services | Office Experts Group",
  description:
    "We build reports and dashboards which connect your Power BI services to your financial and accounting systems, databases, Azure services and spreadsheets.",

  keywords: [
    // Core Power BI services
    "Power BI development",
    "custom Power BI dashboards",
  ],

  alternates: {
    canonical: "/services/microsoft-power-platform/microsoft-power-bi",
    alternate: [
      {
        url: "https://powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
        type: "alternate",
      },
    ],
  },

  // OpenGraph
  openGraph: {
    title: "Microsoft Power BI Services | Office Experts Group",
    description:
      "We build reports and dashboards which connect your Power BI services to your financial and accounting systems, databases, Azure services and spreadsheets.",
    url: "https://powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
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
    title: "Microsoft Power BI Services | Office Experts Group",
    description:
      "We build reports and dashboards which connect your Power BI services to your financial and accounting systems, databases, Azure services and spreadsheets.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
