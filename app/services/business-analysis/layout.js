// app/services/business-analysis/layout.js

const TITLE = "Business Analysis & Solution Design | Office Experts Group";
const DESCRIPTION =
  "Australian business analysis and solution design since 2000. We map your workflows before anything is built: Microsoft 365, Power Platform, code and AI.";
const OG_TITLE = "AI can build it. We make sure it's the right thing.";
const OG_DESCRIPTION =
  "Business analysis and solution design from Australian Microsoft specialists. Requirements, workflow mapping and architecture before a line of code is written.";
const PAGE_URL = "https://www.officeexperts.com.au/services/business-analysis";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "business analysis services",
    "business analysis consulting australia",
    "business requirements analysis",
    "business process analysis",
    "solution design",
    "workflow mapping",
    "ai implementation consulting",
  ],
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Office Experts Group",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/services/business-analysis",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
