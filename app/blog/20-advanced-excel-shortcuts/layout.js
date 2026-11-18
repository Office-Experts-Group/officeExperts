// /app/blog/20-advanced-excel-shortcuts/layout.js
// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js.
const PAGE_URL =
  "https://www.officeexperts.com.au/blog/20-advanced-excel-shortcuts";
const PAGE_TITLE = "20 Advanced Excel Shortcuts to Save Time | Office Experts";
const PAGE_DESCRIPTION =
  "Learn 20 advanced Excel shortcuts for Mac and Windows, from filters and AutoSum to Paste Special, and save hours on everyday spreadsheet work.";
const PAGE_KEYWORDS = ["Excel keyboard shortcuts"];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
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
        alt: "Office Experts Group logo",
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

export default function ExcelShortcutsBlogLayout({ children }) {
  return <>{children}</>;
}
