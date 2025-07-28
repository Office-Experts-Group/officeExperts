import React from "react";

export const metadata = {
  title: "Microsoft Excel Add-in Development | Office Experts Group",
  description:
    "Expert Excel add-in development services for extending Excel functionality. Specialising in VBA and VSTO add-ins to automate tasks and enhance Excel capabilities.",

  alternates: {
    canonical: "https://www.excelexperts.com.au/add-in-development",
  },

  // OpenGraph
  openGraph: {
    title: "Microsoft Excel Add-in Development | Office Experts Group",
    description:
      "Expert Excel add-in development services for extending Excel functionality. Specialising in VBA and VSTO add-ins to automate tasks and enhance Excel capabilities.",
    url: "https://www.excelexperts.com.au/add-in-development",
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
    title: "Microsoft Excel Add-in Development | Office Experts Group",
    description:
      "Expert Excel add-in development services for extending Excel functionality. Specialising in VBA and VSTO add-ins to automate tasks and enhance Excel capabilities.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
