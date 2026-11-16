// /app/blog/xero-to-power-bi/layout.js
// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js.
const PAGE_URL = "https://www.officeexperts.com.au/blog/xero-to-power-bi";
const PAGE_TITLE = "Live Xero & MYOB Data in Power BI | Office Experts";
const PAGE_DESCRIPTION =
  "Stop exporting CSVs. See how to feed live Xero and MYOB data into Power BI with OData feeds like OdataLink, with setup steps, costs and common pitfalls.";
const PAGE_KEYWORDS = [
  "Xero Power BI",
  "MYOB Power BI",
  "OData feed Power BI",
  "OdataLink",
];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = "/logo.png"; // confirm this exists in the Office Experts /public folder
const AUTHOR_NAME = "Scott Robinson";

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: PAGE_KEYWORDS,
  authors: [{ name: AUTHOR_NAME }],
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
        alt: SITE_NAME,
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

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
