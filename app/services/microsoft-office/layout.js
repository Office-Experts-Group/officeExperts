import React from "react";

export const metadata = {
  title: "Microsoft Office Services",
  description:
    "The Office Experts Group specialises in services across all Microsoft Office products. Call us 1300 102 810 or Email us consult@officeexperts.com.au",

  openGraph: {
    title: "Microsoft Office Services",
    description:
      "The Office Experts Group specialises in services across all Microsoft Office products. Call us 1300 102 810 or Email us consult@officeexperts.com.au",
    url: "https://www.officeexperts.com.au/services/microsoft-office",
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

  keywords: ["custom Microsoft office solutions development"],

  alternates: {
    canonical: "/services/microsoft-office",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Office Services",
    description:
      "The Office Experts Group specialises in services across all Microsoft Office products. Call us 1300 102 810 or Email us consult@officeexperts.com.au",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
