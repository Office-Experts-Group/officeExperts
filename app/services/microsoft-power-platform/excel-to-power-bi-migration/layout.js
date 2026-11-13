// /app/services/microsoft-power-platform/excel-to-power-bi-migration/layout.js

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js
const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-power-platform/excel-to-power-bi-migration";
const PAGE_TITLE = "Excel to Power BI Migration Services | Office Experts";
const PAGE_DESCRIPTION =
  "Move your Excel reporting into Power BI with Microsoft-certified consultants. Live dashboards, automatic refreshes and one shared version of your data.";
const PAGE_KEYWORDS = [
  "Excel to Power BI migration",
  "migrate Excel to Power BI",
  "Power BI consultants",
  "Power BI dashboards",
];

const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
// Confirm this file exists in the OE /public folder (the PPE page used /logo.png)
const OG_IMAGE = "/logo.png";

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
};

export default function EpbmLayout({ children }) {
  return children;
}
