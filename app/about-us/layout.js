import React from "react";

export const metadata = {
  title: "About Us",
  description:
    "Office Experts Group is a leading Microsoft Office consulting team with expert developers and designers highly experienced in Microsoft Office for both PC and Mac, servicing all of Australia.",

  openGraph: {
    title: "About Us",
    description:
      "Leading Microsoft Office consultants with expert developers and designers servicing all of Australia. Corporate business experience combined with software development expertise.",
    url: "https://www.officeexperts.com.au/about-us/",
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
    type: "article",
  },

  keywords: [
    // Location-based
    "microsoft office consultants australia",
    // "office experts sydney",
    // "office consultants melbourne",
    // "microsoft specialists brisbane",
    // "office consultants perth",
    // "microsoft office experts canberra",

    // // Service-specific
    // "remote office consulting",
    // "onsite office support",
    // "microsoft office migration",
    // "office 365 consulting",
    // "corporate office solutions",

    // // Expertise-based
    // "microsoft office experts",
    // "pc mac office specialists",
    // "office design experts",
    // "office development consultants",
    // "microsoft business solutions",

    // // Experience-based
    // "corporate office experience",
    // "business software development",
    // "office integration experts",
    // "microsoft office design",
    // "office automation specialists",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "About Us | Office Experts Group",
    description:
      "Leading Microsoft Office consultants with expert developers and designers servicing all of Australia. Corporate business experience combined with software development expertise.",
    images: ["/logo.png"],
  },

  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/about-us",
    languages: {
      "en-AU": "/about-us",
    },
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
