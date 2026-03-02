import React from "react";

export const metadata = {
  title: "About Us - Office Experts Group",
  description:
    "Microsoft Office consultants specialising in Excel, Access, Outlook, Word and PowerPoint. Australia-wide development, support and system integrations since 2000.",

  openGraph: {
    title: "About Us - Office Experts Group",
    description:
      "Microsoft Office consultants specialising in Excel, Access, Outlook, Word and PowerPoint. Australia-wide development, support and system integrations since 2000.",
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
      "Microsoft Office consultants specialising in Excel, Access, Outlook, Word and PowerPoint. Australia-wide development, support and system integrations since 2000.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
