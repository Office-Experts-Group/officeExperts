import React from "react";

export const metadata = {
  title: "Our Microsoft Power Automate Services | Office Experts Group",
  description:
    "Whether your automation needs are simple or complex, our certified experts can mix and match the components of Microsoft Power Automate to deliver competitively priced solutions to meet your business needs.",

  keywords: [
    // Core automation services
    "Microsoft Power Automate developers",
  ],

  alternates: {
    canonical: "/services/microsoft-power-platform/microsoft-power-automate",
    alternate: [
      {
        url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
        type: "alternate",
      },
    ],
  },

  // OpenGraph
  openGraph: {
    title: "Our Microsoft Power Automate Services | Office Experts Group",
    description:
      "Whether your automation needs are simple or complex, our certified experts can mix and match the components of Microsoft Power Automate to deliver competitively priced solutions to meet your business needs.",
    url: "https://wwww.officeexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
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
    title: "Our Microsoft Power Automate Services | Office Experts Group",
    description:
      "Whether your automation needs are simple or complex, our certified experts can mix and match the components of Microsoft Power Automate to deliver competitively priced solutions to meet your business needs.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
