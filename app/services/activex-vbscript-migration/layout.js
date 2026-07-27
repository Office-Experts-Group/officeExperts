// app/services/activex-vbscript-migration/layout.js
import React from "react";

export const metadata = {
  // Basic metadata
  title: "Migrate Legacy ActiveX & VBScript Solutions | Office Experts Group",
  description:
    "Microsoft is disabling ActiveX and retiring VBScript across Word, Excel, PowerPoint and Access. Our consultants modernise your legacy macros and controls so nothing breaks.",

  // OpenGraph
  openGraph: {
    title: "Migrate Legacy ActiveX & VBScript Solutions | Office Experts Group",
    description:
      "Microsoft is disabling ActiveX and retiring VBScript across Word, Excel, PowerPoint and Access. Our consultants modernise your legacy macros and controls so nothing breaks.",
    url: "https://www.officeexperts.com.au/services/activex-vbscript-migration",
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
  keywords: ["ActiveX disabled Office", "VBScript deprecated alternative"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Migrate Legacy ActiveX & VBScript Solutions | Office Experts Group",
    description:
      "Microsoft is disabling ActiveX and retiring VBScript across Word, Excel, PowerPoint and Access. Our Australian consultants modernise your legacy macros and controls so nothing breaks.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/services/activex-vbscript-migration",
  },
};

export default function ActiveXVbscriptMigrationLayout({ children }) {
  return <>{children}</>;
}
