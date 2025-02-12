import React from "react";

export const metadata = {
  // Basic metadata
  title: "Meet Our Microsoft Office Specialists | Office Experts Group",
  description:
    "Connect with our expert team of Microsoft Office specialists, focusing on advanced spreadsheet development, VBA automation, and Power Query solutions for businesses across Australia.",

  // OpenGraph
  openGraph: {
    title: "Meet Our Microsoft Office Specialists | Office Experts Group",
    description:
      "Connect with our expert team of Microsoft Office specialists, focusing on advanced spreadsheet development, VBA automation, and Power Query solutions for businesses across Australia.",
    url: "https://www.officeexperts.com.au/meet-the-team",
  },

  // Additional metadata
  keywords: ["Microsoft Office experts team"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Microsoft Office Specialists | Office Experts Group",
    description:
      "Connect with our expert team of Microsoft Office specialists, focusing on advanced spreadsheet development, VBA automation, and Power Query solutions for businesses across Australia.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.officeexperts.com.au/meet-the-team",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
