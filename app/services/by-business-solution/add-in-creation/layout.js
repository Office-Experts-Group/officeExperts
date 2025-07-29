import React from "react";

export const metadata = {
  // Basic metadata
  title: "Office Add-in Development & Integration Services ",
  description:
    "Create custom Office add-ins that work across Word, PowerPoint, Outlook & more. Our experts build cross-application solutions for your Microsoft ecosystem.",

  // Additional metadata
  keywords: ["Microsoft Office add-in developers"],

  alternates: {
    canonical: "/services/by-business-solution/add-in-creation",
  },

  // OpenGraph
  openGraph: {
    title: "Office Add-in Development & Integration Services",
    description:
      "Create custom Office add-ins that work across Word, PowerPoint, Outlook & more. Our experts build cross-application solutions for your Microsoft ecosystem.",
    url: "https://www.officeexperts.com.au/services/by-business-solution/add-in-creation",
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
    title: "Office Add-in Development & Integration Services",
    description:
      "Create custom Office add-ins that work across Word, PowerPoint, Outlook & more. Our experts build cross-application solutions for your Microsoft ecosystem.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
