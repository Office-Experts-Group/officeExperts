// /app/blog/word-templates-for-legal-firms/layout.js
// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js.
const PAGE_URL =
  "https://www.officeexperts.com.au/blog/word-templates-for-legal-firms";
const PAGE_TITLE = "Word Templates for Legal Firms | Office Experts";
const PAGE_DESCRIPTION =
  "Create professional Word templates for legal firms. Reduce errors, keep branding consistent and protect client confidentiality with these best practices.";
const PAGE_KEYWORDS = ["Word templates for legal firms"];
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
