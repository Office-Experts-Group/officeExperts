import React from "react";

export const metadata = {
  title:
    "Word Design Services | Word Template Designers | Office Experts Group",
  description:
    "Our team of Word design experts take the stress out of your company templates by converting all of your organisation's documents to our easy to use templates, complete with your branding, a consistent look and a professional feel.",

  openGraph: {
    title:
      "Word Template Conversions | Word Design Services | Office Experts Group",
    description:
      "Our team of Word design experts take the stress out of your company templates by converting all of your organisation's documents to our easy to use templates, complete with your branding, a consistent look and a professional feel.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/word-template-conversions",
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
    // Core services
    "Word template design",
    "Word template conversion",
  ],

  alternates: {
    canonical: "/services/microsoft-word/word-template-conversions",
    alternate: [
      {
        url: "https://www.wordexperts.com.au/word-template-conversions",
        type: "alternate",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Word Template Conversions | Word Design Services | Office Experts Group",
    description:
      "Our team of Word design experts take the stress out of your company templates by converting all of your organisation's documents to our easy to use templates, complete with your branding, a consistent look and a professional feel.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
