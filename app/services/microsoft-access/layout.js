import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Services | Office Experts Group",
  description:
    "Professional Microsoft Access database consulting and development services across Australia. Specialising in custom database solutions, cloud integration, and business automation.",

  keywords: ["Microsoft Access database migration"],

  alternates: {
    canonical: "/services/microsoft-access",
    alternate: [
      {
        url: "https://www.accessexperts.com.au",
        type: "alternate",
      },
    ],
  },

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Services | Office Experts Group",
    description:
      "Professional Microsoft Access database consulting and development services across Australia. Specialising in custom database solutions, cloud integration, and business automation.",
    url: "https://www.accessexperts.com.au/services/microsoft-access",
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
    title: "Microsoft Access Services | Office Experts Group",
    description:
      "Professional Microsoft Access database consulting and development services across Australia. Specialising in custom database solutions, cloud integration, and business automation.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
