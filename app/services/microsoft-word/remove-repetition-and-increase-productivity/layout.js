// /services/microsoft-word/remove-repetition-and-increase-productivity/layout.js
const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/remove-repetition-and-increase-productivity";
const PAGE_TITLE = "Word Document Automation Services | Office Experts";
const PAGE_DESCRIPTION =
  "Automate repetitive Word tasks and increase productivity. Custom automation solutions for Microsoft Word documents and templates.";

const OG_IMAGE = {
  url: "/logo.png",
  width: 1200,
  height: 630,
  alt: "Office Experts logo",
};

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: ["Word document automation"],
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
