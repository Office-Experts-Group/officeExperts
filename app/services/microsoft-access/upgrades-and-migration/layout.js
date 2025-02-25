import React from "react";

export const metadata = {
  title: "Access Upgrades and Migration | Office Experts Group",
  description:
    "Extensive experience in Microsoft Access database upgrades and migrations to ensure smooth transitions, mitigate compatibility risks, and resolve database issues.",

  keywords: [
    // Core services
    "Microsoft access database migration",
    "Microsoft access database upgrade",
  ],

  alternates: {
    canonical: "https://www.accessexperts.com.au/upgrades-and-migration",
  },

  // OpenGraph
  openGraph: {
    title: "Access Upgrades and Migration | Office Experts Group",
    description:
      "Extensive experience in Microsoft Access database upgrades and migrations to ensure smooth transitions, mitigate compatibility risks, and resolve database issues.",
    url: "https://www.accessexperts.com.au/upgrades-and-migration",
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
    title: "Access Upgrades and Migration | Office Experts Group",
    description:
      "Extensive experience in Microsoft Access database upgrades and migrations to ensure smooth transitions, mitigate compatibility risks, and resolve database issues.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
