// /about-us/layout.js
// Page-level constants — keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js
const PAGE_URL = "https://www.officeexperts.com.au/about-us";
const PAGE_TITLE = "About Us | Microsoft Office Consultants Since 2000";
const PAGE_DESCRIPTION =
  "Microsoft Office consultants specialising in Excel, Access, Outlook, Word and PowerPoint. Australia-wide development, support and integrations since 2000.";

const OG_IMAGE = {
  url: "/logo.png",
  width: 1200,
  height: 630,
  alt: "Office Experts Group logo",
};

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: ["microsoft office consultants australia"],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Office Experts Group",
    images: [OG_IMAGE],
    locale: "en-AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  alternates: { canonical: PAGE_URL },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
