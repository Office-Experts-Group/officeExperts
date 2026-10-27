// /services/microsoft-word/word-document-template-creation/layout.js
const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/word-document-template-creation";
const PAGE_TITLE = "Word Document Template Creation Services";
const PAGE_DESCRIPTION =
  "Professional Microsoft Word template creation services. Custom document templates that maintain brand consistency and improve productivity.";

const OG_IMAGE = {
  url: "/logo.png",
  width: 1200,
  height: 630,
  alt: "Office Experts logo",
};

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: ["word document template creation"],
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
