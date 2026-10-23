// app/word-to-pdf-conversion/layout.js
import React from "react";

export const metadata = {
  title: "Word to PDF Conversion & Fillable PDF Forms | Word Experts",
  description:
    "More than a free online Word to PDF converter. We build fillable, editable PDF forms in Adobe Acrobat and Word templates that convert reliably every time. Free Consultation.",

  // OpenGraph
  openGraph: {
    title: "Word to PDF Conversion & Fillable PDF Forms | Word Experts",
    description:
      "More than a free online Word to PDF converter. We build fillable, editable PDF forms in Adobe Acrobat and Word templates that convert reliably every time. Free Consultation.",
    url: "https://www.wordexperts.com.au/word-to-pdf-conversion",
    siteName: "Word Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Word Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Keywords
  keywords: ["word to pdf conversion"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word to PDF Conversion & Fillable PDF Forms | Word Experts",
    description:
      "More than a free online Word to PDF converter. We build fillable, editable PDF forms in Adobe Acrobat and Word templates that convert reliably every time. Free Consultation.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/word-to-pdf-conversion",
  },
};

export default function WordToPdfLayout({ children }) {
  return <>{children}</>;
}
