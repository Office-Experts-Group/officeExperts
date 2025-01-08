import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Meet Our Microsoft Excel Specialists | Spreadsheet & VBA Experts",
  description:
    "Connect with our expert team of Microsoft Excel specialists, focusing on advanced spreadsheet development, VBA automation, and Power Query solutions for businesses across Australia.",

  // OpenGraph
  openGraph: {
    title: "Meet Our Expert Excel Team | Excel Specialists Australia",
    description:
      "Work with our skilled team of Microsoft Excel specialists. Experts in spreadsheet development, VBA automation, Power Query, and data analysis solutions.",
    url: "https://www.officeexperts.com.au/meet-the-team/",
  },

  // Additional metadata
  keywords: ["Microsoft Office experts team"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Expert Excel Team | Excel Specialists Australia",
    description:
      "Work with our skilled team of Microsoft Excel specialists. Experts in spreadsheet development, VBA automation, Power Query, and data analysis solutions.",
    images: [
      "https://www.officeexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  canonical: "https://www.officeexperts.com.au/meet-the-team/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
