import React from "react";

export const metadata = {
  // Basic metadata
  title: "Database Development and Solutions",
  description:
    "Microsoft Database Solutions We create and support a wide variety of database solutions including the following Access is an efficient, reliable",

  // Additional metadata
  keywords: ["Access database developers"],

  alternates: {
    canonical:
      "/services/by-business-solution/database-development-and-solutions",
  },

  // OpenGraph
  openGraph: {
    title: "Database Development and Solutions",
    description:
      "Custom Microsoft database solutions built by certified experts. We design, develop and support Access databases, SQL Server solutions, and cloud database systems tailored to your business needs.",
    url: "https://www.officeexperts.com.au/services/by-business-solution/database-development-and-solutions",
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
    title: "Database Development and Solutions",
    description:
      "Microsoft Database Solutions We create and support a wide variety of database solutions including the following Access is an efficient, reliable",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
