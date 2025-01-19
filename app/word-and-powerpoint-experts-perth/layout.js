import React from "react";

export const metadata = {
  title: "Word and PowerPoint Experts Perth | Office Experts Group",
  description:
    "Leading Microsoft Word and PowerPoint consulting services in Perth. Specialising in presentation design, document templates, and business automation solutions.",

  openGraph: {
    title: "Word and PowerPoint Experts Perth | Office Experts Group",
    description:
      "Leading Microsoft Word and PowerPoint consulting services in Perth. Specialising in presentation design, document templates, and business automation solutions.",
    url: "https://www.officeexperts.com.au/word-and-powerpoint-experts-perth/",
  },

  keywords: [
    "Microsoft PowerPoint designers Perth",
    "Microsoft Word designers Perth",
    // "Word presentation templates Perth",
    // "PowerPoint customisation Perth",
    // "Microsoft Office consultants Perth",
    // "Document design services Perth",
    // "PowerPoint automation Perth",
    // "Word template solutions Perth",
    // "Microsoft Office Perth",
    // "Professional presentations Perth",
    // "Document automation Perth",
    // "Corporate templates Perth",
    // "Business documents Perth",
    // "PowerPoint experts Perth",
    // "Word consultants Perth",
  ],
  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/word-and-powerpoint-experts-perth/",
    languages: {
      "en-AU": "/word-and-powerpoint-experts-perth/",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
