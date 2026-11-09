// app/services/power-pivot/layout.js
const PAGE_URL = "https://www.officeexperts.com.au/services/power-pivot";
const PAGE_TITLE = "Power Pivot Consulting and Data Modelling Services";
const PAGE_DESCRIPTION =
  "Power Pivot consultants for Australian businesses. We build data models, DAX measures and fast, dashboard-ready reports in Excel and Power BI.";

const OG_IMAGE = {
  url: "/logo.png",
  width: 1200,
  height: 630,
  alt: "Office Experts logo",
};

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "power pivot",
    "power pivot consultants",
    "power pivot consulting",
    "excel data model",
    "dax formulas",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Office Experts",
    images: [OG_IMAGE],
    locale: "en-AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  alternates: { canonical: PAGE_URL },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
