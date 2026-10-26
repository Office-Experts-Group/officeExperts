// /services/microsoft-word/document-automation/layout.js
const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/document-automation";
const PAGE_TITLE = "Word Document Automation Services";
const PAGE_DESCRIPTION =
  "Automate repetitive Word tasks with VBA macros, Building Blocks, smart templates, Copilot and custom AI agents. Australian Word automation experts since 2000.";

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
    "Word document automation",
    "Microsoft Word automation",
    "automate Word documents",
    "Word VBA macros",
    "Word Building Blocks",
    "Copilot in Word",
    "AI document automation",
    "custom AI agents Word",
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
