// /app/blog/power-bi-for-financial-services/layout.js

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js.
const PAGE_URL =
  "https://www.officeexperts.com.au/blog/power-bi-for-financial-services";
const PAGE_TITLE = "Power BI for Financial Services | Office Experts";
const PAGE_DESCRIPTION =
  "How banks, wealth managers and insurers use Power BI for compliance reporting, risk and customer insight, and how to start without a big-bang rollout.";
const PAGE_KEYWORDS = ["power bi financial services"];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = "/logo.png";
const OG_IMAGE_ALT = "Office Experts logo";

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: PAGE_KEYWORDS,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: OG_IMAGE_ALT,
      },
    ],
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
