// app/microsoft-consultants-canberra/layout.js
import React from "react";

export const metadata = {
  title: "Microsoft Consultants Canberra | Office Experts Group",
  description:
    "Canberra businesses supported by an Australia-wide Microsoft consulting team. Over 25 years experience improving workflows, reporting, document systems and business efficiency.",

  openGraph: {
    title: "Microsoft Consultants Canberra | Office Experts Group",
    description:
      "Canberra businesses supported by an Australia-wide Microsoft consulting team. Over 25 years experience improving workflows, reporting, document systems and business efficiency.",
    url: "https://www.officeexperts.com.au/microsoft-consultants-canberra",
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

  keywords: ["Microsoft consultants Canberra"],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Consultants Canberra | Office Experts Group",
    description:
      "Canberra businesses supported by an Australia-wide Microsoft consulting team. Over 25 years experience improving workflows, reporting, document systems and business efficiency.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/microsoft-consultants-canberra",
  },
};

export default function CanberraLayout({ children }) {
  return <>{children}</>;
}
