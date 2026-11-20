// /app/services/microsoft-access/integrate-access-with-power-bi/layout.js

const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = "/logo.png"; // confirm it exists in OE /public
const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-access/integrate-access-with-power-bi";
const PAGE_TITLE = "Integrate Microsoft Access with Power BI | Office Experts";
const PAGE_DESCRIPTION =
  "Integrate Microsoft Access with Power BI to turn your data into interactive dashboards with scheduled refresh and easy sharing. Australia-wide Access experts.";
const PAGE_KEYWORDS = [
  "access power bi integration australia",
  "integrate access with power bi",
  "connect access database to power bi",
  "access power bi dashboards",
  "access database reporting",
];

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

export default function IntegrateAccessWithPowerBILayout({ children }) {
  return children;
}
