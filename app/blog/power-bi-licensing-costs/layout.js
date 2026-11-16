// /app/blog/power-bi-licensing-costs/layout.js
// Metadata only. Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js.

const PAGE_URL =
  "https://www.officeexperts.com.au/blog/power-bi-licensing-costs";
const PAGE_TITLE = "Power BI Licensing Costs: Hidden Expenses | Office Experts";
const PAGE_DESCRIPTION =
  "Power BI licensing costs often creep up. Learn the hidden expenses, the break-even points and the licence mix that stops your Australian business overpaying.";
const PAGE_KEYWORDS = ["power bi licensing costs"];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const AUTHOR_NAME = "Scott Robinson";
const OG_IMAGE = "/logo.png"; // confirm it exists in the OE /public folder
const OG_IMAGE_ALT = "Office Experts Logo";

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: PAGE_KEYWORDS,
  authors: [{ name: AUTHOR_NAME }],
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
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
