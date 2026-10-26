// /services/microsoft-word/government-departments/layout.js
const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/government-departments";
const PAGE_TITLE = "Government Department Word Document Solutions";
const PAGE_DESCRIPTION =
  "Specialised Microsoft Word solutions for government departments. Accessible documents, compliant templates, and secure document management solutions.";

const OG_IMAGE = {
  url: "/logo.png",
  width: 1200,
  height: 630,
  alt: "Office Experts logo",
};

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: ["government word templates"],
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
