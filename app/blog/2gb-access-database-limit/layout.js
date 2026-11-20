// /app/blog/2gb-access-database-limit/layout.js
import React from "react";

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js.
const PAGE_URL =
  "https://www.officeexperts.com.au/blog/2gb-access-database-limit";
const PAGE_TITLE = "2GB Access Database Limit: Survival Guide | Office Experts";
const PAGE_DESCRIPTION =
  "Access database hit the 2GB limit? Learn the warning signs, emergency fixes that buy time, and how to migrate to SQL Server or Azure SQL for good.";
const PAGE_KEYWORDS = [
  "Access 2GB limit",
  "Access database size limit",
  "Access database full",
  "Access to SQL Server migration",
];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
// Confirm this file exists in the Office Experts /public folder.
const OG_IMAGE = "/blog/2gb/stop.webp";
const OG_IMAGE_ALT = "Stop sign showing the Access 2GB database limit";

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: PAGE_KEYWORDS,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE,
        width: 600,
        height: 400,
        alt: OG_IMAGE_ALT,
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
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
