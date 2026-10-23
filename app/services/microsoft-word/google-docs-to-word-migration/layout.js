// /services/microsoft-word/google-docs-to-word-migration/layout.js

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js.
const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/google-docs-to-word-migration";
const PAGE_TITLE = "Google Docs to Word Migration Services";
const PAGE_DESCRIPTION =
  "Migrate Google Docs to Microsoft Word with formatting intact. Nation-wide team of Word designers with over 25+ years of experience. Free initial consultation.";

const OG_IMAGE = {
  url: "/logo.png",
  width: 1200,
  height: 630,
  alt: "Office Experts logo",
};

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    // Core services
    "google docs to word migration",
    "migrate google docs to word",
    "convert google docs to word",
    // Supporting services
    "word template development",
    "google docs to microsoft word conversion",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Office Experts",
    images: [OG_IMAGE],
    locale: "en-AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  alternates: { canonical: PAGE_URL },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
