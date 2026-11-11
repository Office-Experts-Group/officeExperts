// app/services/custom-office-solutions/layout.js
// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js
const PAGE_URL =
  "https://www.officeexperts.com.au/services/custom-office-solutions";
const PAGE_TITLE = "Custom Microsoft Office Solutions | Office Experts";
const PAGE_DESCRIPTION =
  "Custom Word templates, Excel workbooks, Access databases and Outlook automation, built by Australian Office developers since 2000. Call 1300 102 810.";

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
    "custom Microsoft Office solutions Australia",
    "custom Office development",
    "Office add-in development",
    "custom Word templates",
    "InDesign to Word conversion",
    "Excel automation",
    "Outlook automation",
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
