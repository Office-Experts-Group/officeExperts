// /app/blog/access-vs-excel/layout.js

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js.
const PAGE_URL = "https://www.officeexperts.com.au/blog/access-vs-excel";
const PAGE_TITLE = "Microsoft Access vs Excel: Which to Use | Office Experts";
const PAGE_DESCRIPTION =
  "Learn when to use Microsoft Access, Excel or both for your business data: key differences, a decision guide, common mistakes and how to move safely.";
const PAGE_KEYWORDS = [
  "Microsoft Access vs Excel",
  "Access vs Excel",
  "Access or Excel for business",
  "Excel as a database",
  "Access database",
  "Office Experts",
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

export default function AccessVsExcelBlogLayout({ children }) {
  return <>{children}</>;
}
