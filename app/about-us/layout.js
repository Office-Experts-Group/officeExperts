import React from "react";

export const metadata = {
  title: "About Us - Office Experts Group",
  description:
    "Office Experts Group is a leading Microsoft Office consulting team with expert developers, designers & consultants. Microsoft Office support Australia-wide.",

  openGraph: {
    title: "About Us - Office Experts Group",
    description:
      "Office Experts Group is a leading Microsoft Office consulting team with expert developers, designers & consultants. Microsoft Office support Australia-wide.",
    url: "https://www.officeexperts.com.au/about-us",
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

  keywords: ["microsoft office consultants australia"],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "About Us",
    description:
      "Office Experts Group is a leading Microsoft Office consulting team with expert developers, designers & consultants. Microsoft Office support Australia-wide.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
