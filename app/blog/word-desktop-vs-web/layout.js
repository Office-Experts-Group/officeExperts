// /app/blog/word-desktop-vs-web/layout.js
// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js.
const PAGE_URL = "https://www.officeexperts.com.au/blog/word-desktop-vs-web";
const PAGE_TITLE = "Word Desktop vs Web: Is 365 Worth It? | Office Experts";
const PAGE_DESCRIPTION =
  "Word for web or desktop? See what the free version can and can’t do, how co-authoring works, what each plan costs, and which option suits you.";
const PAGE_KEYWORDS = [
  "Word desktop vs web",
  "Word for web vs desktop",
  "Is Microsoft 365 worth it",
  "Microsoft 365 collaboration",
  "SharePoint collaboration",
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
