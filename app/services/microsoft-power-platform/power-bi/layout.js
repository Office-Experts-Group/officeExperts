// /app/services/microsoft-power-platform/power-bi/layout.js

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-power-platform/power-bi";
const PAGE_TITLE = "Microsoft Power BI Services | Office Experts";
const PAGE_DESCRIPTION =
  "Power BI consultants across Australia. Custom dashboards, data modelling, security and training, with fixed quotes or hourly rates and support after launch.";
const PAGE_KEYWORDS = [
  "Power BI dashboard development Australia",
  "Microsoft Power BI services",
  "Power BI consultants Australia",
  "Power BI reporting and analytics",
];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = "/logo.png"; // confirm it exists in OE /public

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
        height: 620,
        alt: `${SITE_NAME} logo`,
      },
    ],
    locale: "en-AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    creator: TWITTER_HANDLE,
    images: [OG_IMAGE],
  },
};

export default function PowerBiLayout({ children }) {
  return <>{children}</>;
}
