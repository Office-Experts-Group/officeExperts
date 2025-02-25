import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Publisher Services | Office Experts Group",
  description:
    "Expert Microsoft Publisher design, template creation, and consulting services. Professional layout, branding, and corporate publishing solutions.",

  keywords: [
    // Core Publisher services
    "Microsoft Publisher templates",
    "Microsoft Publisher design services",
  ],

  alternates: {
    canonical: "/services/microsoft-publisher",
  },

  // OpenGraph
  openGraph: {
    title: "Microsoft Publisher Services | Office Experts Group",
    description:
      "Expert Microsoft Publisher design, template creation, and consulting services. Professional layout, branding, and corporate publishing solutions.",
    url: "https://powerplatformexperts.com.au/services/microsoft-publisher",
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
    title: "Microsoft Publisher Services | Office Experts Group",
    description:
      "Expert Microsoft Publisher design, template creation, and consulting services. Professional layout, branding, and corporate publishing solutions.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
