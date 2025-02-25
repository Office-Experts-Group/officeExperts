import React from "react";

export const metadata = {
  // Basic metadata
  title: "Dashboard Experts | Office Experts Group",
  description:
    "We are experts in Data! Data import/export, parsing and processing Data formatting automation Automated data manipulation solutions using VBA. Call us 1300102810",

  keywords: ["excel dashboard consultants"],

  alternates: {
    canonical: "/services/by-business-solution/dashboards",
  },

  // OpenGraph
  openGraph: {
    title: "Dashboard Experts | Office Experts Group",
    description:
      "We are experts in Data! Data import/export, parsing and processing Data formatting automation Automated data manipulation solutions using VBA. Call us 1300102810",
    url: "https://www.officeexperts.com.au/services/by-business-solution/dashboards",
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
    title: "Dashboard Experts | Office Experts Group",
    description:
      "We are experts in Data! Data import/export, parsing and processing Data formatting automation Automated data manipulation solutions using VBA. Call us 1300102810",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
