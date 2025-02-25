import React from "react";

export const metadata = {
  title: "Microsoft Power Platform Services | Office Experts Group",
  description:
    "With competitive pricing and a prompt high quality service, our consultants excel in the Microsoft Power Platform of low-code tools and software. We specialise in custom business applications to efficiently perform daily tasks such as managing customer information, automating approvals and sending notifications.",

  keywords: [
    // Core Power Platform services
    "Microsoft Power Platform consultants",
  ],

  alternates: {
    canonical:
      "https://powerplatformexperts.com.au/services/microsoft-power-platform",
  },

  // OpenGraph
  openGraph: {
    title: "Microsoft Power Platform Services | Office Experts Group",
    description:
      "With competitive pricing and a prompt high quality service, our consultants excel in the Microsoft Power Platform of low-code tools and software. We specialise in custom business applications to efficiently perform daily tasks such as managing customer information, automating approvals and sending notifications.",
    url: "https://powerplatformexperts.com.au/services/microsoft-power-platform",
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
    title: "Microsoft Power Platform Services | Office Experts Group",
    description:
      "With competitive pricing and a prompt high quality service, our consultants excel in the Microsoft Power Platform of low-code tools and software. We specialise in custom business applications to efficiently perform daily tasks such as managing customer information, automating approvals and sending notifications.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
