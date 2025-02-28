import React from "react";

export const metadata = {
  // Basic metadata
  title:
    "VBA Automation Experts | PowerPoint Automation | Office Experts Group",
  description:
    "PowerPoint experts providing data linking and VBA automation solutions for PowerPoint presentations. Professional automation services for time-saving and accuracy.",

  keywords: [
    "automated PowerPoint presentations with VBA",
    // Core PowerPoint automation
    "PowerPoint VBA automation",
  ],

  alternates: {
    canonical: "/services/microsoft-powerpoint/automate-presentations-with-vba",
  },

  // OpenGraph
  openGraph: {
    title:
      "VBA Automation Experts | PowerPoint Automation | Office Experts Group",
    description:
      "PowerPoint experts providing data linking and VBA automation solutions for PowerPoint presentations. Professional automation services for time-saving and accuracy.",
    url: "https://www.officeexperts.com.au/services/microsoft-powerpoint/automate-presentations-with-vba",
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
    title:
      "VBA Automation Experts | PowerPoint Automation | Office Experts Group",
    description:
      "PowerPoint experts providing data linking and VBA automation solutions for PowerPoint presentations. Professional automation services for time-saving and accuracy.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
