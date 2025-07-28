import React from "react";

export const metadata = {
  // Basic metadata
  title: "File Attachments in Power Apps - The best way to do them",
  description:
    "In this tutorial, Marcello shows you how to upload files directly to a SharePoint Document Library using the new Power Apps V2 trigger. This method is the simplest way of doing this, and the files end up in a document library and not attached to a SharePoint list or some other blob storage which is ideal!",

  // OpenGraph
  openGraph: {
    title: "File Attachments in Power Apps - The best way to do them",
    description:
      "In this tutorial, Marcello shows you how to upload files directly to a SharePoint Document Library using the new Power Apps V2 trigger. This method is the simplest way of doing this, and the files end up in a document library and not attached to a SharePoint list or some other blob storage which is ideal!",
    url: "https://www.officeexperts.com.au/blog/file-attachments-in-power-apps",
    siteName: "Office Experts",
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

  // Additional metadata
  keywords: ["File Attachments in Power Apps"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "File Attachments in Power Apps - The best way to do them",
    description:
      "In this tutorial, Marcello shows you how to upload files directly to a SharePoint Document Library using the new Power Apps V2 trigger. This method is the simplest way of doing this, and the files end up in a document library and not attached to a SharePoint list or some other blob storage which is ideal!",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog/file-attachments-in-power-apps",
    alternate: [
      {
        url: "https://www.powerplatformexperts.com.au/blog/file-attachments-in-power-apps",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
