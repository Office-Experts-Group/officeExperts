// /app/services/microsoft-power-platform/power-bi/layout.js

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-power-platform/power-bi";
const PAGE_TITLE = "Microsoft Power Pages Services | Office Experts";
const PAGE_DESCRIPTION =
  "Build secure customer, supplier and partner portals with Microsoft Power Pages. Australian experts in Dataverse, Power BI and custom development. Get a quote.";
const PAGE_KEYWORDS = [
  "Microsoft Power Pages",
  "Power Pages development",
  "Power Pages consultants Australia",
  "Custom Power Pages web development",
  "Power Pages portal",
  "Power Pages Dataverse",
  "Power Pages security",
  "Power Pages vs custom development",
  "Office Experts",
];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = "/logo.png";

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
    locale: "en-AU",
    type: "website",
    images: [{ url: OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  alternates: { canonical: PAGE_URL },
};

export default function Layout({ children }) {
  return children;
}
