// /app/blog/ultimate-guide-to-word-templates/layout.js

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js.
const PAGE_URL =
  "https://www.officeexperts.com.au/blog/ultimate-guide-to-word-templates";
const PAGE_TITLE =
  "Ultimate Guide to Microsoft Word Templates | Office Experts";
const PAGE_DESCRIPTION =
  "What is a Word template? Types, benefits, template hierarchy and management tips from Australia’s Word specialists, plus a guide to choosing the right one.";
const PAGE_KEYWORDS = [
  "what is a word template",
  "microsoft word templates",
  "word template guide",
  "normal.dotm",
  "workgroup templates",
  "global templates word",
  "word template types",
  "corporate word templates australia",
];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = {
  url: "/logo.png",
  width: 1200,
  height: 630,
  alt: "Office Experts logo",
};

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: PAGE_KEYWORDS,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: SITE_NAME,
    images: [OG_IMAGE],
    locale: "en-AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
