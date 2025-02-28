import React from "react";

export const metadata = {
  // Basic metadata
  title: "PowerPoint Consulting Services | Office Experts Group",
  description:
    "Expert Microsoft PowerPoint consulting services in Australia. Specialising in custom templates, presentation design, automation and training.",

  keywords: [
    // Core PowerPoint services
    "Microsoft PowerPoint consultation",
  ],

  alternates: {
    canonical: "/services/microsoft-powerpoint",
  },

  // OpenGraph
  openGraph: {
    title: "PowerPoint Consulting Services | Office Experts Group",
    description:
      "Expert Microsoft PowerPoint consulting services in Australia. Specialising in custom templates, presentation design, automation and training.",
    url: "https://www.officeexperts.com.au/services/microsoft-powerpoint",
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
    title: "PowerPoint Consulting Services | Office Experts Group",
    description:
      "Expert Microsoft PowerPoint consulting services in Australia. Specialising in custom templates, presentation design, automation and training.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
