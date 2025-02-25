import React from "react";

export const metadata = {
  title: "Word and PowerPoint Experts Perth | Office Experts Group",
  description:
    "Leading Microsoft Word and PowerPoint consulting services in Perth. Specialising in presentation design, document templates, and business automation solutions.",

  openGraph: {
    title: "Word and PowerPoint Experts Perth | Office Experts Group",
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
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
