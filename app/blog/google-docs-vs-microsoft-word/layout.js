// /app/blog/google-docs-vs-microsoft-word/layout.js
// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js.
// This layout wraps only its own page.js, so canonical here is safe.
const PAGE_URL =
  "https://www.officeexperts.com.au/blog/google-docs-vs-microsoft-word";
const PAGE_TITLE = "Google Docs vs Microsoft Word | Office Experts";
const PAGE_DESCRIPTION =
  "Compare Google Docs and Microsoft Word for enterprise use: collaboration, compliance, automation and scale, plus how to migrate from Docs to Word.";
const PAGE_KEYWORDS = [
  "google docs vs microsoft word",
  "google docs to word migration",
  "enterprise document management",
  "microsoft word templates",
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
