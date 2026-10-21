// app/microsoft-consultants-richmond/layout.js
import React from "react";

const TITLE = "Microsoft Consultants Richmond | Office Experts Group Australia";
const DESCRIPTION =
  "Bringing Richmond businesses tailored Excel and Access development, Power Platform apps and AI solutions for over 25 years.";

export const metadata = {
  // Basic metadata
  title: TITLE,
  description: DESCRIPTION,

  // OpenGraph
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.officeexperts.com.au/microsoft-consultants-richmond",
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
  keywords: ["Microsoft consultants Richmond"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/microsoft-consultants-richmond",
  },
};

export default function RichmondLayout({ children }) {
  return <>{children}</>;
}
