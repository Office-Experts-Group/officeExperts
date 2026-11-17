// /app/services/microsoft-power-platform/power-automate/layout.js
import React from "react";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-power-platform/power-automate";
const PAGE_TITLE = "Power Automate & AI Builder Consulting | Office Experts";
const PAGE_DESCRIPTION =
  "Power Automate consultants who streamline approvals, documents and email with AI Builder and Copilot Studio agents, built inside your Microsoft 365 tenant.";
const PAGE_KEYWORDS = [
  "power automate",
  "power automate consultants",
  "power automate consulting australia",
  "ai builder",
  "copilot studio agents",
  "microsoft workflow automation",
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

  // OpenGraph
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
        alt: "Office Experts logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  alternates: { canonical: PAGE_URL },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
