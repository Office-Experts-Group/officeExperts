// app/microsoft-consultants-darwin/layout.js
import React from "react";

const TITLE = "Microsoft Consultants Darwin | Office Experts Group Australia";
const DESCRIPTION =
  "Microsoft consulting for Darwin businesses, from Excel and Access development to workflow automation and AI solutions, delivered by our Australia-wide team.";

export const metadata = {
  // Basic metadata
  title: TITLE,
  description: DESCRIPTION,

  // OpenGraph
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.officeexperts.com.au/microsoft-consultants-darwin",
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
  keywords: ["Microsoft consultants Darwin"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/microsoft-consultants-darwin",
  },
};

export default function DarwinLayout({ children }) {
  return <>{children}</>;
}
