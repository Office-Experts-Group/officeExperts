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
    siteName: "Office Experts",
    images: [
      {
        url: "https://www.officeexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Excel Experts Team",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: [
    // Excel-specific expertise
    "Excel VBA developers Australia",
    "Advanced Excel consultants",
    "Spreadsheet automation experts",
    "Power Query specialists",

    // Technical expertise
    "Excel formula experts",
    "Macro development team",
    "Data analysis specialists",
    "Excel dashboard creators",

    // Service-related
    "Excel training specialists",
    "Spreadsheet optimization experts",
    "Custom Excel solutions",
    "Financial modeling experts",

    // Location-specific
    "Excel consultants Australia",
    "Spreadsheet experts Sydney",
    "Excel specialists Melbourne",
    "VBA consultants Brisbane",

    // Skills-focused
    "Power Pivot experts",
    "Excel automation specialists",
    "Business intelligence experts",
    "Data visualization specialists",

    // Professional qualities
    "Certified Excel developers",
    "Microsoft Office specialists",
    "Professional Excel team",
    "Expert Excel trainers",
  ],

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
