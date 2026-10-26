// app/services/upgrades-and-migration/layout.js
const PAGE_URL =
  "https://www.officeexperts.com.au/services/upgrades-and-migration";
const PAGE_TITLE = "Microsoft Office Upgrades & Migration Services";
const PAGE_DESCRIPTION =
  "Office upgrades and migration across Australia. We modernise legacy Word templates, Excel workbooks and Access databases for Microsoft 365, SQL Server and Azure.";

const OG_IMAGE = {
  url: "/logo.png",
  width: 1200,
  height: 630,
  alt: "Office Experts logo",
};

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: ["Microsoft Office upgrades"],
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
