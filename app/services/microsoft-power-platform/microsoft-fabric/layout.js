// /app/services/microsoft-power-platform/microsoft-fabric/layout.js

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-power-platform/microsoft-fabric";
const PAGE_TITLE = "Microsoft Fabric Development & Support | Office Experts";
const PAGE_DESCRIPTION =
  "Microsoft Fabric consultants in Australia. We plan, build and support OneLake, data pipelines, warehouses and Power BI so all your data lives in one place.";
const PAGE_KEYWORDS = [
  "Microsoft Fabric",
  "Microsoft Fabric consultants",
  "Microsoft Fabric implementation",
  "Microsoft Fabric support",
  "Microsoft Fabric Australia",
  "OneLake",
  "Fabric data warehouse",
  "Synapse to Fabric migration",
  "Power BI and Microsoft Fabric",
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
        alt: `${SITE_NAME} logo`,
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

export default function MicrosoftFabricLayout({ children }) {
  return children;
}
