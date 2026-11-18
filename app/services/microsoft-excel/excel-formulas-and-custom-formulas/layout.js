// /app/services/microsoft-excel/excel-formulas-and-custom-formulas/layout.js

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-excel/excel-formulas-and-custom-formulas";
const PAGE_TITLE = "Excel Formulas and Custom Formulas | Office Experts";
const PAGE_DESCRIPTION =
  "Expert help with Excel formulas, custom functions and VBA. We simplify complex workbooks, fix formula errors and build custom formulas. Remote or onsite.";
const PAGE_KEYWORDS = ["excel custom formula development"];
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

  alternates: {
    canonical: PAGE_URL,
  },
};

export default function ExcelFormulasLayout({ children }) {
  return children;
}
