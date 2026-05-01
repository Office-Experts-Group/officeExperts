// app/services/microsoft-office-365/remote-data-gathering-from-any-device/layout.js
import React from "react";

export const metadata = {
  title: "Remote Data Gathering from Any Device | Office Experts",
  description:
    "Collect data from field staff and remote sites in real time. We build Power Apps mobile forms, Power Automate API integrations, and Azure Logic Apps pipelines that connect your workforce to your systems automatically.",

  keywords: ["remote data gathering"],

  alternates: {
    canonical:
      "/services/microsoft-office-365/remote-data-gathering-from-any-device",
  },

  openGraph: {
    title: "Remote Data Gathering from Any Device | Office Experts",
    description:
      "Collect data from field staff and remote sites in real time. We build Power Apps mobile forms, Power Automate API integrations, and Azure Logic Apps pipelines that connect your workforce to your systems automatically.",
    url: "https://www.officeexperts.com.au/services/microsoft-office-365/remote-data-gathering-from-any-device",
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

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Remote Data Gathering from Any Device | Office Experts",
    description:
      "Power Apps forms, Power Automate connectors, and Azure Logic Apps pipelines that move field data into your systems the moment it is captured. Built for Australian businesses.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
