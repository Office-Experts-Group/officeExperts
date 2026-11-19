// /app/blog/spreadsheet-errors-in-excel/layout.js

// Keep these constants in sync with page.js.
const PAGE_URL =
  "https://www.officeexperts.com.au/blog/spreadsheet-errors-in-excel";
const PAGE_TITLE = "Preventing Spreadsheet Errors in Excel | Office Experts";
const PAGE_DESCRIPTION =
  "Learn why 88% of spreadsheets contain errors, how to spot the warning signs, and practical ways to prevent costly Excel mistakes in your business.";
const PAGE_KEYWORDS = ["spreadsheet errors", "Excel errors"];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = "/logo.png"; // confirm it exists in OE /public
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
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function SpreadsheetErrorsBlogLayout({ children }) {
  return <>{children}</>;
}
