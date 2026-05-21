// app/microsoft-consultants-cairns/layout.js
import React from "react";

export const metadata = {
  title: "Microsoft Consultants Cairns | Office Experts Group",
  description:
    "Cairns-based Microsoft consultants backed by a national team of 25+ specialists. Excel, Word, Access, Power Platform and Microsoft 365 solutions for Far North Queensland businesses. Free consultation.",

  openGraph: {
    title: "Microsoft Consultants Cairns | Office Experts Group",
    description:
      "Cairns-based Microsoft consultants backed by a national team of 25+ specialists. Excel, Word, Access, Power Platform and Microsoft 365 solutions for Far North Queensland businesses. Free consultation.",
    url: "https://www.officeexperts.com.au/microsoft-consultants-cairns",
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

  keywords: ["Microsoft consultants Cairns"],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Consultants Cairns | Office Experts Group",
    description:
      "Cairns-based Microsoft consultants backed by a national team of 25+ specialists. Excel, Word, Access, Power Platform and Microsoft 365 solutions for Far North Queensland businesses.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/microsoft-consultants-cairns",
  },
};

export default function CairnsLayout({ children }) {
  return <>{children}</>;
}
