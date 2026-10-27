// /services/microsoft-word/word-template-conversions/layout.js
const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/word-template-conversions";
const PAGE_TITLE = "Word Template Conversions | Office Experts";
const PAGE_DESCRIPTION =
  "Professional Word template conversions in Australia. We convert Adobe, InDesign and PDF files into fully functional, on-brand Microsoft Word templates, and build fillable PDF forms from Word.";

const OG_IMAGE = {
  url: "/logo.png",
  width: 1200,
  height: 630,
  alt: "Office Experts logo",
};

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: ["word template conversion"],
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
