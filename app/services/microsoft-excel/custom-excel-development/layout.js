// /app/services/microsoft-excel/custom-excel-development/layout.js

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-excel/custom-excel-development";
const PAGE_TITLE = "Custom Excel Development Australia | Office Experts";
const PAGE_DESCRIPTION =
  "Custom Excel development for Australian businesses. Software solutions built by Excel specialists with 25+ years of experience.";
const PAGE_KEYWORDS = ["custom Excel development", "Excel developer Australia"];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = "/logo.png";

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
};

export default function CustomExcelDevelopmentLayout({ children }) {
  return children;
}
