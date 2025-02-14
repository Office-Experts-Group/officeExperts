import React from "react";

export const metadata = {
  // Basic metadata
  title:
    "Companies and Organisations | Word Document Services | Office Experts Group",
  description:
    "Our team of Word design experts deliver versatile templates that meet the needs of any company or organisation. We ensure your corporate identity is protected and can cut costs through setting you up to produce your own inhouse reports.",

  keywords: ["word template designers"],
  alternates: {
    canonical: "https://www.wordexperts.com.au/companies-and-organisations",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
