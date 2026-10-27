// /app/blog/microsoft-word-for-mac/layout.js

// Keep these constants in sync with page.js (no shared config file).
const PAGE_URL = "https://www.officeexperts.com.au/blog/microsoft-word-for-mac";
const PAGE_TITLE = "Word for Mac: Features and Limitations | Office Experts";
const PAGE_DESCRIPTION =
  "The real differences between Word for Mac and Windows: missing features, VBA limits, workarounds, and whether Word for Mac is right for you.";
const PAGE_KEYWORDS = [
  "Word for Mac",
  "Microsoft Word for Mac",
  "Word for Mac vs Windows",
  "Word for Mac VBA macros",
  "Word for Mac limitations",
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
  alternates: { canonical: PAGE_URL },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
