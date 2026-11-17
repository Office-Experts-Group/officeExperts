// /app/blog/power-apps-with-sql-database/layout.js
// Metadata only. Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js.

const PAGE_URL =
  "https://www.officeexperts.com.au/blog/power-apps-with-sql-database";
const PAGE_TITLE = "Power Apps and SQL Database: Get Started | Office Experts";
const PAGE_DESCRIPTION =
  "Connect Power Apps to a Microsoft SQL database: set up Azure SQL, build linked tables, use stored procedures and Power Automate for an inventory app.";
const PAGE_KEYWORDS = ["Power Apps SQL Database"];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = "/logo.png"; // confirm it exists in OE /public
const OG_IMAGE_ALT = "Office Experts Group logo";
const AUTHOR_NAME = "Marcello Brocchi";

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
  alternates: { canonical: PAGE_URL },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
