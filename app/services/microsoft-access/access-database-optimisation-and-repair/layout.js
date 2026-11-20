// /app/services/microsoft-access/access-database-optimisation-and-repair/layout.js
const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-access/access-database-optimisation-and-repair";
const PAGE_TITLE = "Access Database Optimisation & Repair | Office Experts";
const PAGE_DESCRIPTION =
  "Slow, bloated or corrupted Access database? Our Australian specialists speed it up, repair corruption and recover data, starting with a clear diagnosis.";
const PAGE_KEYWORDS = [
  "Access database repair services",
  "Access database optimisation",
  "slow Access database",
  "Access database corruption repair",
  "compact and repair Access database",
  "Access database consultants Australia",
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
        alt: "Office Experts logo",
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

export default function Layout({ children }) {
  return <>{children}</>;
}
