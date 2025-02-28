import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Support and Training | Office Experts Group",
  description:
    "Our expert team provides Microsoft Access database support and training services. We offer instant help and advice through remote access or phone support, with competitive rates and dedicated consultants available when you need them most.",

  keywords: ["Access database support"],

  alternates: {
    canonical: "/services/microsoft-access/access-support",
    alternate: [
      {
        url: "https://www.accessexperts.com.au/access-support",
        type: "alternate",
      },
    ],
  },

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Support and Training | Office Experts Group",
    description:
      "Our expert team provides Microsoft Access database support and training services. We offer instant help and advice through remote access or phone support, with competitive rates and dedicated consultants available when you need them most.",
    url: "https://www.officeexperts.com.au/services/microsoft-access/access-support",
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
    title: "Microsoft Access Support and Training | Office Experts Group",
    description:
      "Our expert team provides Microsoft Access database support and training services. We offer instant help and advice through remote access or phone support, with competitive rates and dedicated consultants available when you need them most.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
