import React from "react";

export const metadata = {
  title: "Word and PowerPoint Consultants Perth",
  description:
    "Leading Microsoft Word and PowerPoint consulting services in Perth. Specialising in presentation design, document templates, and business automation solutions.",

  openGraph: {
    title: "Word and PowerPoint Consultants Perth",
    description:
      "Leading Microsoft Word and PowerPoint consulting services in Perth. Specialising in presentation design, document templates, and business automation solutions.",
    url: "https://www.officeexperts.com.au/word-and-powerpoint-experts-perth",
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

  keywords: [
    "Microsoft PowerPoint designers Perth",
    "Microsoft Word designers Perth",
  ],
  alternates: {
    canonical: "/word-and-powerpoint-experts-perth",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word and PowerPoint Experts Perth",
    description:
      "Leading Microsoft Word and PowerPoint consulting experts in Perth. Specialising in templates, document design, presentations, automation and business solutions.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
