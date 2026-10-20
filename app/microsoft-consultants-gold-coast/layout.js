// app/microsoft-consultants-gold-coast/layout.js
import React from "react";

const TITLE =
  "Microsoft Consultants Gold Coast | Office Experts Group Australia";
const DESCRIPTION =
  "Need better business systems on the Gold Coast? Our Microsoft consultants build custom AI agents, databases, Power Apps and any other microsoft solution you need.";

export const metadata = {
  // Basic metadata
  title: TITLE,
  description: DESCRIPTION,

  // OpenGraph
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.officeexperts.com.au/microsoft-consultants-gold-coast",
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
  keywords: ["Microsoft consultants Gold Coast"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/microsoft-consultants-gold-coast",
  },
};

export default function GoldCoastLayout({ children }) {
  return <>{children}</>;
}
