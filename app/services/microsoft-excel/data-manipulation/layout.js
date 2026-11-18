// /app/services/microsoft-excel/data-manipulation/layout.js

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-excel/data-manipulation";
const PAGE_TITLE = "Excel Data Manipulation & Automation | Office Experts";
const PAGE_DESCRIPTION =
  "Excel data automation specialists helping businesses simplify imports, exports, formatting and complex data manipulation using VBA. Free initial assessment";
const PAGE_KEYWORDS = [
  "Excel data manipulation experts",
  "Excel data automation",
  "Power Query consultants Australia",
  "VBA data import and export",
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
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
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
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function DataManipulationLayout({ children }) {
  return children;
}
