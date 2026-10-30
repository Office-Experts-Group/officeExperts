// /services/vba-macro-development/layout.js
const PAGE_URL =
  "https://www.officeexperts.com.au/services/vba-macro-development";
const PAGE_TITLE = "VBA Macro Development for Excel, Word, Access & Outlook";
const PAGE_DESCRIPTION =
  "Custom VBA macros, forms and add-ins for Excel, Word, Access, PowerPoint and Outlook. Australian VBA developers, plus 64-bit and Office upgrade fixes.";

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
    "VBA macro development",
    "VBA programmers Australia",
    "Excel VBA developer",
    "Word VBA macros",
    "Access VBA programming",
    "Outlook VBA macros",
    "fix VBA macros 64-bit",
    "VBA add-ins",
    "custom Office automation",
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
