// /app/blog/access-database-slow-performance/layout.js
import React from "react";

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js
const PAGE_URL =
  "https://www.officeexperts.com.au/blog/access-database-slow-performance";
const PAGE_TITLE = "Access Database Running Slow? 7 Fixes | Office Experts";
const PAGE_DESCRIPTION =
  "Is your Access database slow? Find the 7 most common performance killers and the quick fixes that can restore speed in minutes. Advice from Australian experts.";
const PAGE_KEYWORDS = [
  "access database slow performance",
  "speed up access database",
  "ms access running slow",
  "access database performance tuning",
  "compact and repair access",
  "split access database",
];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = "/logo.png";
const OG_IMAGE_ALT = "Office Experts logo";

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
