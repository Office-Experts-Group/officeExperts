// /app/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions/layout.js
import React from "react";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions";
const PAGE_TITLE = "Excel Pivot Tables & Reporting Solutions | Office Experts";
const PAGE_DESCRIPTION =
  "Custom Excel pivot tables, pivot charts, Power Query pipelines and Power BI dashboards from Office Experts. Remote or onsite Australia-wide. Call 1300 102 810.";
const PAGE_KEYWORDS = ["Excel pivot tables"];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = "/logo.png";

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: PAGE_KEYWORDS,

  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Office Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },

  alternates: {
    canonical: PAGE_URL,
  },
};

export default function PivotTablesChartsReportingLayout({ children }) {
  return <>{children}</>;
}
