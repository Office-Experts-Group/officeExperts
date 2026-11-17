// /app/blog/power-apps-pdf-function/layout.js
import React from "react";

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js.
const PAGE_URL =
  "https://www.officeexperts.com.au/blog/power-apps-pdf-function";
const PAGE_TITLE = "Power Apps PDF Function: Export to PDF | Office Experts";
const PAGE_DESCRIPTION =
  "How the Power Apps PDF function works: turn it on, save PDFs to SharePoint, set page size and margins, and avoid the pitfalls that catch most makers out.";
const PAGE_KEYWORDS = ["Power Apps PDF Function"];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = "/logo.png"; // confirm this exists in the Office Experts /public folder

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
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} logo`,
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
  alternates: { canonical: PAGE_URL },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
