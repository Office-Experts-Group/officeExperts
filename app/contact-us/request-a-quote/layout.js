import React from "react";

export const metadata = {
  title: "Request a Quote | Office Experts Group",
  description:
    "Request a personalised quote for professional Microsoft Office consulting services and solutions from Office Experts Group. Our experienced consultants specialise in Excel, Word, PowerPoint, Power BI, and more",
  keywords: ["Office experts request a quote"],
  openGraph: {
    title: "Request a Quote | Office Experts Group",
    description:
      "Request a personalised quote for professional Microsoft Office consulting services and solutions from Office Experts Group. Our experienced consultants specialise in Excel, Word, PowerPoint, Power BI, and more",
    url: "https://www.officeexperts.com.au/contact-us/request-a-quote",
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

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Request a Quote | Office Experts Group",
    description:
      "Request a personalised quote for professional Microsoft Office consulting services and solutions from Office Experts Group. Our experienced consultants specialise in Excel, Word, PowerPoint, Power BI, and more",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/contact-us/request-a-quote",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
