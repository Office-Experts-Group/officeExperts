import React from "react";

export const metadata = {
  // Basic metadata
  title: "Why To Choose Access for your Company | Office Experts Group",
  description:
    "Expert guidance on whether Microsoft Access is the right solution for your business needs. Get professional advice on database solutions, data management, and business automation.",

  // Additional metadata
  keywords: [
    // Core Access services
    "Microsoft Access solutions",
  ],

  alternates: {
    canonical: "/services/microsoft-access/is-access-right-for-your-company",
    alternate: [
      {
        url: "https://www.accessexperts.com.au/is-access-right-for-your-company",
        type: "alternate",
      },
    ],
  },

  // OpenGraph
  openGraph: {
    title: "Why To Choose Access for your Company | Office Experts Group",
    description:
      "Expert guidance on whether Microsoft Access is the right solution for your business needs. Get professional advice on database solutions, data management, and business automation.",
    url: "https://www.accessexperts.com.au/is-access-right-for-your-company",
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
    title: "Why To Choose Access for your Company | Office Experts Group",
    description:
      "Expert guidance on whether Microsoft Access is the right solution for your business needs. Get professional advice on database solutions, data management, and business automation.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
