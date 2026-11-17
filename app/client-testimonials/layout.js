import React from "react";

export const metadata = {
  // Basic metadata
  title: "Client Testimonials & Reviews | Office Experts Group",
  description:
    " Read testimonials from Australian businesses we've helped with Microsoft Word, Excel, Access, Power Platform and AI solutions. Honest client reviews.",

  // OpenGraph
  openGraph: {
    title: "Office Experts Group Client Testimonials",
    description:
      " Read testimonials from Australian businesses we've helped with Microsoft Word, Excel, Access, Power Platform and AI solutions. Honest client reviews.",
    url: "https://www.officeexperts.com.au/client-testimonials",
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

  // Additional metadata
  keywords: [
    // Core testimonial keywords
    "Office Experts testimonials",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office Experts Group Client Testimonials",
    description:
      " Read testimonials from Australian businesses we've helped with Microsoft Word, Excel, Access, Power Platform and AI solutions. Honest client reviews.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/client-testimonials",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
