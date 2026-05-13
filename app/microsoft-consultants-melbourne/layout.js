// app/microsoft-consultants-melbourne/layout.js
import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Consultants Melbourne | Office Experts Group Australia",
  description:
    "Office Experts Group is an Australian Microsoft consultancy with specialists serving Melbourne and all major cities. Remote and on-site support. Get a free assessment today.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Consultants Melbourne | Office Experts Group Australia",
    description:
      "Office Experts Group is an Australian Microsoft consultancy with specialists serving Melbourne and all major cities. Remote and on-site support. Get a free assessment today.",
    url: "https://www.officeexperts.com.au/microsoft-consultants-melbourne",
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
  keywords: ["Microsoft consultants Melbourne"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Consultants Melbourne | Office Experts Group Australia",
    description:
      "Office Experts Group is an Australian Microsoft consultancy with specialists serving Melbourne and all major cities. Remote and on-site support. Get a free assessment today.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/microsoft-consultants-melbourne",
  },
};

export default function MelbourneLayout({ children }) {
  return <>{children}</>;
}
