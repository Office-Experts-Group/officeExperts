// /app/services/microsoft-power-platform/sharepoint-consulting-and-development/layout.js

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-power-platform/sharepoint-consulting-and-development";
const PAGE_TITLE = "SharePoint Consulting & Development | Office Experts"; // 52 characters
const PAGE_DESCRIPTION =
  "Australian SharePoint consultants for new builds, migration off SharePoint 2016 and 2019, intranets, custom development and Copilot readiness. Free assessment."; // 159 characters
const PAGE_KEYWORDS = [
  "SharePoint consulting",
  "SharePoint consultants",
  "SharePoint development",
  "SharePoint migration",
  "SharePoint Online migration",
  "SharePoint 2016 end of support",
  "SharePoint intranet design",
  "SharePoint governance",
  "Copilot readiness",
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
    site: TWITTER_HANDLE,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function SpcdLayout({ children }) {
  return children;
}
