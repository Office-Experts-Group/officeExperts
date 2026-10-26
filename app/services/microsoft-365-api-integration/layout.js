// app/services/microsoft-365-api-integration/layout.js
// Combined page: the Word, Excel, Power Platform and Access API pages
// redirect here as part of the single-domain migration.

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-365-api-integration";
const PAGE_TITLE =
  "Microsoft 365 API Integration | Word, Excel & Power Platform";
const PAGE_DESCRIPTION =
  "Custom Microsoft 365 API integrations for Word, Excel, Outlook, Power Platform and Access. Office add-ins, Graph, Dataverse and AI agents, since 2000.";

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
    "microsoft 365 api integration",
    "microsoft graph api integration",
    "office add-in development",
    "office.js developers",
    "microsoft word api integration",
    "excel api integration",
    "power platform integration",
    "dataverse api",
    "power bi rest api",
    "access database integration",
    "copilot agent integration",
    "mcp server microsoft 365",
    "microsoft 365 integration australia",
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
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  alternates: { canonical: PAGE_URL },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
