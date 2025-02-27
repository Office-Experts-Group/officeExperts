import React from "react";

export const metadata = {
  // Basic metadata
  title: "VBA Macro Developers | Office Experts Group",
  description:
    "All Microsoft Office products including Excel, Access, Word, Outlook, PowerPoint and Office 365 come with a built-in macro language called VBA. Our highly experienced VBA macro programmers are ready to advise you of the best solution to take your business to the next level.",

  keywords: [
    // Core VBA services
    "VBA macro development",
  ],

  alternates: {
    canonical: "/services/microsoft-excel/vba-macro-development",
    alternate: [
      {
        url: "https://www.excelexperts.com.au/vba-macro-development",
        type: "alternate",
      },
    ],
  },

  // OpenGraph
  openGraph: {
    title: "VBA Macro Developers | Office Experts Group",
    description:
      "All Microsoft Office products including Excel, Access, Word, Outlook, PowerPoint and Office 365 come with a built-in macro language called VBA. Our highly experienced VBA macro programmers are ready to advise you of the best solution to take your business to the next level.",
    url: "https://www.excelexperts.com.au/vba-macro-development",
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

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "VBA Macro Developers | Office Experts Group",
    description:
      "All Microsoft Office products including Excel, Access, Word, Outlook, PowerPoint and Office 365 come with a built-in macro language called VBA. Our highly experienced VBA macro programmers are ready to advise you of the best solution to take your business to the next level.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
