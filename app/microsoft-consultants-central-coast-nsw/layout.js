// app/microsoft-consultants-central-coast-nsw/layout.js
import React from "react";

const TITLE = "Microsoft Consultants Central Coast NSW";
const DESCRIPTION =
  "Microsoft consultants for the NSW Central Coast, helping businesses improve reporting, streamline manual processes and connect systems with custom Microsoft solutions.";

export const metadata = {
  // Basic metadata
  title: TITLE,
  description: DESCRIPTION,

  // OpenGraph
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.officeexperts.com.au/microsoft-consultants-central-coast-nsw",
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
  keywords: ["Microsoft consultants Central Coast NSW"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/microsoft-consultants-central-coast-nsw",
  },
};

export default function CentralCoastLayout({ children }) {
  return <>{children}</>;
}
