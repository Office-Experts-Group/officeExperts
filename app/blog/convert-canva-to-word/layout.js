// /app/blog/convert-canva-to-word/layout.js

// Keep these constants in sync with page.js (no shared config file).
// This layout wraps only page.js, so canonical and openGraph.url are safe here.
const PAGE_URL = "https://www.officeexperts.com.au/blog/convert-canva-to-word";
const PAGE_TITLE = "How to Convert Canva to a Word Template | Office Experts";
const PAGE_DESCRIPTION =
  "Convert a Canva design into an editable Microsoft Word template that keeps your fonts, colours and brand. A step-by-step guide from Office Experts.";
const PAGE_KEYWORDS = [
  "Canva to Word template",
  "convert Canva to Word",
  "Canva design to Word document",
  "Canva to editable Word",
  "Word template from Canva",
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
