// app/microsoft-consultants-brisbane/layout.js
import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Consultants Brisbane | Office Experts Group Australia",
  description:
    "Nation-wide Microsoft consulting organisation with a local Brisbane team. Over 25yrs of experience helping Australian businesses with software solutions. Contact us for a free assessment today.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Consultants Brisbane | Office Experts Group Australia",
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
    title: "Microsoft Consultants Brisbane | Office Experts Group Australia",
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
