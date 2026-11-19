// /app/blog/excel-problems-on-mac/layout.js
// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js.

const PAGE_URL = "https://www.officeexperts.com.au/blog/excel-problems-on-mac";
const PAGE_TITLE = "Excel Problems on Mac and How to Fix Them | Office Experts";
const PAGE_DESCRIPTION =
  "Discover practical solutions to the 10 most common Excel problems on Mac. Learn how to troubleshoot Excel for macOS Sequoia, Sonoma, and Ventura.";
const PAGE_KEYWORDS = ["Excel Mac problems"];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = "/logo.png";
const AUTHOR_NAME = "Daniel Thomas";

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: PAGE_KEYWORDS,
  authors: [{ name: AUTHOR_NAME }],
  alternates: { canonical: PAGE_URL },
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
        alt: "Office Experts Group Logo",
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

export default function ExcelMacProblemsLayout({ children }) {
  return <>{children}</>;
}
