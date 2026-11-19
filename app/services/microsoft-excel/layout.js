// /app/services/microsoft-excel/layout.js
// Metadata for the Microsoft Excel hub (replaces the excelexperts.com.au home
// page). Every string comes from the constants below.

const PAGE_URL = "https://www.officeexperts.com.au/services/microsoft-excel";
const PAGE_TITLE = "Excel Consultants & Programmers Australia | Office Experts"; // 58 characters
const PAGE_DESCRIPTION =
  "Australia's leading Excel consultants and programmers. Custom workbooks, VBA macros, formulas, Power Query and dashboards, built by senior Australian experts."; // 158 characters
const PAGE_KEYWORDS = ["Excel consultants"];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = "/logo.png";
const OG_IMAGE_ALT = "Office Experts logo";

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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_IMAGE_ALT }],
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

export default function MicrosoftExcelLayout({ children }) {
  return children;
}
