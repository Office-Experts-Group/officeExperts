// /services/add-in-creation/layout.js
const PAGE_URL = "https://www.officeexperts.com.au/services/add-in-creation";
const PAGE_TITLE = "Office Add-in Development & Integration Services";
const PAGE_DESCRIPTION =
  "Custom add-ins for Excel, Word, PowerPoint, Outlook, Access, Teams, SharePoint and Power BI. Office web, VSTO and COM add-ins by Australian Microsoft experts.";

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
    "Microsoft Office add-in developers",
    "Office add-in development",
    "VSTO add-in development",
    "Excel add-in development",
    "Outlook add-in development",
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
