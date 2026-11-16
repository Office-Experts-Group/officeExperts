// /app/services/microsoft-power-platform/power-apps/layout.js
const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-power-platform/power-apps";
const PAGE_TITLE = "Power Apps Consulting & Development | Office Experts";
const PAGE_DESCRIPTION =
  "Custom Microsoft Power Apps built for your business. Replace paper and spreadsheets with apps that work on any device. Australia-wide, remote support.";
const PAGE_KEYWORDS = ["Power Apps consulting Australia"];
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
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    images: [OG_IMAGE],
  },
};

export default function PowerAppsLayout({ children }) {
  return children;
}
