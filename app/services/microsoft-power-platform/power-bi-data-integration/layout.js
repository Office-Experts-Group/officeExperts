// /app/services/microsoft-power-platform/power-bi-data-integration/layout.js
const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-power-platform/power-bi-data-integration";
const PAGE_TITLE = "Power BI Data Integration Services | Office Experts";
const PAGE_DESCRIPTION =
  "Connect Excel, SQL Server, SharePoint and cloud apps into one Power BI dashboard. Expert data integration, ETL and custom connectors for Australian businesses.";
const PAGE_KEYWORDS = [
  "Power BI data integration",
  "Power BI integration services",
  "Power BI ETL",
  "Power BI custom connectors",
  "Power BI consultants Australia",
];
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
        alt: "Office Experts Group logo",
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

export default function PowerBiDataIntegrationLayout({ children }) {
  return <>{children}</>;
}
