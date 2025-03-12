import React from "react";

export const metadata = {
  title: "Access Database Integration | Office Experts Group",
  description:
    "Our Microsoft Access database experts can help determine whether your integration requirements are viable and build the required functionality for your company with competitive pricing and a prompt, high quality service.",

  keywords: [
    // Core integration services
    "Access database integration",
  ],

  alternates: {
    canonical:
      "https://www.accessexperts.com.au/services/microsoft-access/3rd-party-product-integration",
  },

  // OpenGraph
  openGraph: {
    title: "Access Database Integration | Office Experts Group",
    description:
      "Our Microsoft Access database experts can help determine whether your integration requirements are viable and build the required functionality for your company with competitive pricing and a prompt, high quality service.",
    url: "https://www.accessexperts.com.au/3rd-party-product-integration",
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
    title: "Access Database Integration | Office Experts Group",
    description:
      "Our Microsoft Access database experts can help determine whether your integration requirements are viable and build the required functionality for your company with competitive pricing and a prompt, high quality service.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
