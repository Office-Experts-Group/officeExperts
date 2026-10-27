// /app/blog/pdf-to-word-conversion/layout.js

// Keep these three constants in sync with page.js (no shared config file).
const PAGE_URL = "https://www.officeexperts.com.au/blog/pdf-to-word-conversion";
const PAGE_TITLE = "PDF to Word Conversion for Business | Office Experts";
const PAGE_DESCRIPTION =
  "Discover why professional PDF to Word conversion matters for business. Learn about accuracy, security, and formatting that free converters can’t deliver.";

const PAGE_KEYWORDS = [
  "PDF to Word conversion",
  "PDF to Word for business",
  "professional PDF to Word conversion",
  "convert PDF to editable Word document",
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
