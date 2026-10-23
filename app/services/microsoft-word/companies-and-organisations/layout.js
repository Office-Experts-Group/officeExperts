// /services/microsoft-word/companies-and-organisations/layout.js
const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/companies-and-organisations";
const PAGE_TITLE = "Word Template Designers | Office Experts";
const PAGE_DESCRIPTION =
  "Professional Word template solutions for companies and organisations. Custom document templates that protect corporate identity.";

const OG_IMAGE = {
  url: "/logo.png",
  width: 1200,
  height: 630,
  alt: "Office Experts logo",
};

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: ["corporate word templates"],
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
