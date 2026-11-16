// /app/services/microsoft-power-platform/ai-with-power-platform/layout.js

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-power-platform/ai-with-power-platform";
const PAGE_TITLE = "AI with Power Platform | Office Experts";
const PAGE_DESCRIPTION =
  "AI inside Power Apps, Power Automate and Copilot Studio, using your own SharePoint and Dataverse data and permissions. Australian owned. Free consultation.";
const PAGE_KEYWORDS = [
  "AI with Power Platform",
  "AI integrations",
  "Power Platform AI",
  "Copilot Studio agents",
  "Power Automate AI",
  "AI Builder",
  "secure AI solutions Australia",
  "Dataverse AI",
];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
// Confirm /logo.png exists in the Office Experts /public folder.
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

export default function AiWithPowerPlatformLayout({ children }) {
  return <>{children}</>;
}
