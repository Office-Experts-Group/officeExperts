import React from "react";

export const metadata = {
  title: "About Us | Office Experts Group",
  description:
    "Office Experts Group is a leading Microsoft Office consulting team with expert developers and designers highly experienced in Microsoft Office for both PC and Mac, servicing all of Australia.",

  openGraph: {
    title: "About Us | Office Experts Group",
    description:
      "Leading Microsoft Office consultants with expert developers and designers servicing all of Australia. Corporate business experience combined with software development expertise.",
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
    title: "About Us | Office Experts Group",
    description:
      "Leading Microsoft Office consultants with expert developers and designers servicing all of Australia. Corporate business experience combined with software development expertise.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
