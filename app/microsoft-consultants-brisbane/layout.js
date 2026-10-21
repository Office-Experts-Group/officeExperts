// app/microsoft-consultants-brisbane/layout.js
import React from "react";

const TITLE = "Microsoft Consultants Brisbane";
export const metadata = {
  // Basic metadata
  title: TITLE,
  description:
    "Nation-wide Microsoft consulting organisation with a local Brisbane team. Over 25yrs of experience helping Australian businesses with software solutions. Contact us for a free assessment today.",

  // OpenGraph
  openGraph: {
    title: TITLE,
    description:
      "Nation-wide Microsoft consulting organisation with a local Brisbane team. Over 25yrs of experience helping Australian businesses with software solutions. Contact us for a free assessment today.",
    url: "https://www.officeexperts.com.au/microsoft-consultants-brisbane",
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
  keywords: ["Microsoft consultants Brisbane"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: TITLE,
    description:
      "Nation-wide Microsoft consulting organisation with a local Brisbane team. Over 25yrs of experience helping Australian businesses with software solutions. Contact us for a free assessment today.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/microsoft-consultants-brisbane",
  },
};

export default function BrisbaneLayout({ children }) {
  return <>{children}</>;
}
