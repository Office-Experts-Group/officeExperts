// app/services/microsoft-word/popup-forms/layout.js

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js
// (no shared config file).
const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/popup-forms";
const PAGE_TITLE = "Word Popup Forms | Office Experts";

const PAGE_DESCRIPTION =
  "Custom Microsoft Word popup forms with guided data entry, validation, conditional logic and direct document integration.";

const OG_IMAGE = {
  url: "/logo.png",
  width: 1200,
  height: 630,
  alt: "Office Experts logo",
};

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: ["word popup forms"],
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
