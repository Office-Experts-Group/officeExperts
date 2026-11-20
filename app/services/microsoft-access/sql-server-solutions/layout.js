// /app/services/microsoft-access/sql-server-solutions/layout.js
import React from "react";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-access/sql-server-solutions";
const PAGE_TITLE = "SQL Server Solutions for Access Databases | Office Experts";
const PAGE_DESCRIPTION =
  "Move your Access database to a SQL Server backend for faster multi-user performance, stronger security and reliable backups. Australia-wide migration experts.";
const PAGE_KEYWORDS = ["SQL Server solutions"];
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
        alt: "Office Experts logo",
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

export default function SQLServerSolutionsLayout({ children }) {
  return <>{children}</>;
}
