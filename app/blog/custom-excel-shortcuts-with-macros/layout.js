// /app/blog/custom-excel-shortcuts-with-macros/layout.js

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js.
const PAGE_URL =
  "https://www.officeexperts.com.au/blog/custom-excel-shortcuts-with-macros";
const PAGE_TITLE = "10 Custom Excel Shortcuts Using Macros | Office Experts";
const PAGE_DESCRIPTION =
  "Learn how to create your own Excel shortcuts using macros. 10 copy-and-paste VBA macros for Mac and Windows, each with a practical use case.";
const PAGE_KEYWORDS = [
  "Excel custom shortcuts",
  "Excel macros",
  "VBA shortcuts",
  "Excel automation",
  "Excel keyboard shortcuts",
];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = "/logo.png";
const OG_IMAGE_ALT = "Office Experts Group Logo";

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

export default function CustomExcelShortcutsLayout({ children }) {
  return <>{children}</>;
}
