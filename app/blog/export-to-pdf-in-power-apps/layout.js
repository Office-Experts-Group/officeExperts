// /app/blog/export-to-pdf-in-power-apps/layout.js
import React from "react";

// Keep these three constants in sync with page.js
const PAGE_URL =
  "https://www.officeexperts.com.au/blog/export-to-pdf-in-power-apps";
const PAGE_TITLE = "Export to PDF in Power Apps | Office Experts";
const PAGE_DESCRIPTION =
  "Learn how to export to PDF in Power Apps with Power Automate. Build the HTML, add images, convert the file and link the PDF to your SharePoint record.";

const PAGE_KEYWORDS = ["Power Apps Export to PDF"];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = "/logo.png"; // confirm this exists in the OE /public folder

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: PAGE_KEYWORDS,
  authors: [{ name: "Marcello Brocchi" }],
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
