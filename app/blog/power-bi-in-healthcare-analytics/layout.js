// /app/blog/power-bi-in-healthcare-analytics/layout.js

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js.
const PAGE_URL =
  "https://www.officeexperts.com.au/blog/power-bi-in-healthcare-analytics";
const PAGE_TITLE = "Power BI in Healthcare Analytics | Office Experts";
const PAGE_DESCRIPTION =
  "See how healthcare providers use Power BI dashboards to reduce readmissions, improve patient flow and protect patient data, and how to start well.";
const PAGE_KEYWORDS = ["power bi healthcare analytics"];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = "/logo.png"; // confirm this file exists in the OE /public folder
const OG_IMAGE_ALT = "Office Experts logo";

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: PAGE_KEYWORDS,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_IMAGE_ALT }],
    locale: "en-AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  alternates: { canonical: PAGE_URL },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
