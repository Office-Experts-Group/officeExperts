import React from "react";

export const metadata = {
  // Basic metadata
  title: "Word and PowerPoint Consultants Richmond",
  description:
    "Leading Microsoft Word and PowerPoint consulting experts in Richmond. Specialising in templates, document design, presentations, automation and business solutions.",

  // OpenGraph
  openGraph: {
    title: "Word and PowerPoint Consultants Richmond",
    description:
      "Leading Microsoft Word and PowerPoint consulting experts in Richmond. Specialising in templates, document design, presentations, automation and business solutions.",
    url: "https://www.officeexperts.com.au/word-and-powerpoint-experts-richmond",
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

  alternates: {
    canonical: "/word-and-powerpoint-experts-richmond",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word and PowerPoint Consultants Richmond",
    description:
      "Leading Microsoft Word and PowerPoint consulting experts in Richmond. Specialising in templates, document design, presentations, automation and business solutions.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
