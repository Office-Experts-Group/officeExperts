// /app/blog/document-rebranding/layout.js

const PAGE_URL = "https://www.officeexperts.com.au/blog/document-rebranding";
const PAGE_TITLE = "Document Rebranding Without Starting Over | Office Experts";
const PAGE_DESCRIPTION =
  "Rebrand your business documents without rebuilding them. Update logos, colours and details while keeping your structure, wording and workflow.";
const PAGE_KEYWORDS = ["document rebranding"];
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
