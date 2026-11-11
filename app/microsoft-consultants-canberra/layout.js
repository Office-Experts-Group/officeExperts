// app/microsoft-consultants-canberra/layout.js
import React from "react";

const DESCRIPTION =
  "Microsoft consultants supporting Canberra businesses. 25+ years improving workflows, reporting, document systems and efficiency with an Australia-wide team.";

export const metadata = {
  title: "Microsoft Consultants Canberra | Office Experts Group",
  description: DESCRIPTION,

  openGraph: {
    title: "Microsoft Consultants Canberra | Office Experts Group",
    description: DESCRIPTION,
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

  keywords: ["Microsoft Consultants Canberra | Office Experts Group"],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Consultants Canberra | Office Experts Group",
    description: DESCRIPTION,
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/microsoft-consultants-canberra",
  },
};

export default function CanberraLayout({ children }) {
  return <>{children}</>;
}
