// /app/blog/sharepoint-lists/layout.js
// Keep PAGE_URL, PAGE_TITLE, PAGE_DESCRIPTION and AUTHOR_NAME in sync with page.js

const PAGE_URL = "https://www.officeexperts.com.au/blog/sharepoint-lists";
const PAGE_TITLE = "SharePoint Lists as a Relational Database | Office Experts";
const PAGE_DESCRIPTION =
  "Use SharePoint lists like a relational database in Power Apps. Link parent and child lists with an ID, filter related records and avoid common mistakes.";
const PAGE_KEYWORDS = ["sharepoint lists"];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = "/logo.png";
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

export default function SharePointListsBlogLayout({ children }) {
  return <>{children}</>;
}
