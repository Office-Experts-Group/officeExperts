// app/services/cloud-based-solutions-with-azure/layout.js
const PAGE_URL =
  "https://www.officeexperts.com.au/services/cloud-based-solutions-with-azure";
const PAGE_TITLE = "Microsoft Cloud Based Solutions with Azure | Office Experts";
const PAGE_DESCRIPTION =
  "Cloud based solutions on Microsoft Azure for Australian businesses: Access with Azure SQL, .NET desktop apps, web and mobile integration and SharePoint.";

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
    "Microsoft cloud solutions with Azure",
    "Azure SQL database Access",
    "Access database in the cloud",
    "Azure consultants Australia",
    "SharePoint solutions",
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
