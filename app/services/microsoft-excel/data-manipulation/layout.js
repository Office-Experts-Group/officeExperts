import React from "react";

export const metadata = {
  title: "Data Manipulation | Office Experts Group",
  description:
    "Expert Excel data manipulation services including automated data processing, formatting, and conversions. Specialising in CSV, XML, SQL, and JSON data handling.",

  keywords: [
    // Core data manipulation
    "Excel data manipulation",
  ],

  alternates: {
    canonical: "/services/microsoft-excel/data-manipulation",
    alternate: [
      {
        url: "https://www.excelexperts.com.au/data-manipulation",
        type: "alternate",
      },
    ],
  },

  // OpenGraph
  openGraph: {
    title: "Data Manipulation | Office Experts Group",
    description:
      "Expert Excel data manipulation services including automated data processing, formatting, and conversions. Specialising in CSV, XML, SQL, and JSON data handling.",
    url: "https://www.officeexperts.com.au/services/microsoft-excel/data-manipulation",
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
    title: "Data Manipulation | Office Experts Group",
    description:
      "Expert Excel data manipulation services including automated data processing, formatting, and conversions. Specialising in CSV, XML, SQL, and JSON data handling.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
