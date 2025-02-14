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
  },

  keywords: [
    // Core services
    "Word template design",
    "Word template conversion",
  ],
  alternates: {
    canonical: "https://www.wordexperts.com.au/word-template-conversions",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
