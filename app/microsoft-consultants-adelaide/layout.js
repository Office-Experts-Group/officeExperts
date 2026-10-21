// app/microsoft-consultants-adelaide/layout.js
import React from "react";

const TITLE = "Microsoft Consultants Adelaide";
const DESCRIPTION =
  "Microsoft consultants supporting Adelaide businesses with custom Excel tools, Access databases, Power Platform development and practical AI automation.";

export const metadata = {
  // Basic metadata
  title: TITLE,
  description: DESCRIPTION,

  // OpenGraph
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.officeexperts.com.au/microsoft-consultants-adelaide",
    siteName: "Office Experts Group",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Keywords
  keywords: ["Microsoft consultants Adelaide"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/microsoft-consultants-adelaide",
  },
};

export default function AdelaideLayout({ children }) {
  return <>{children}</>;
}
