// app/services/dashboards/layout.js
// Title is unchanged because the page is performing well in search; only the description is refreshed.
import React from "react";

const TITLE = "Dashboard Experts | Office Experts Group";
const DESCRIPTION =
  "Power BI, Excel and web dashboards that bring all your data into one view, with AI that flags changes and answers questions in plain English.";
const PAGE_URL = "https://www.officeexperts.com.au/services/dashboards";

export const metadata = {
  // Basic metadata
  title: TITLE,
  description: DESCRIPTION,

  keywords: ["excel dashboard consultants"],

  alternates: {
    canonical: PAGE_URL,
  },

  // OpenGraph
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Office Experts Group",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 620,
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
    title: TITLE,
    description: DESCRIPTION,
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
