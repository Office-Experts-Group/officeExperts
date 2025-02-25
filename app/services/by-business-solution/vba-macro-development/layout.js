import React from "react";

export const metadata = {
  // Basic metadata
  title: "VBA Macro Development | Office Experts Group",
  description:
    "We are VBA Macro Experts! Our highly experienced VBA macro programmers are ready to advise you of the best solution to take your business to the next level.",

  keywords: ["VBA programming"],

  alternates: {
    canonical: "/services/by-business-solution/vba-macro-development",
  },

  // OpenGraph
  openGraph: {
    title: "VBA Macro Development | Office Experts Group",
    description:
      "We are VBA Macro Experts! Our highly experienced VBA macro programmers are ready to advise you of the best solution to take your business to the next level.",
    url: "https://www.officeexperts.com.au/services/by-business-solution/vba-macro-development",
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
    title: "VBA Macro Development | Office Experts Group",
    description:
      "We are VBA Macro Experts! Our highly experienced VBA macro programmers are ready to advise you of the best solution to take your business to the next level.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
