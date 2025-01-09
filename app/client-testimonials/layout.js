import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Client Testimonials | Office Experts Group",
  description:
    "Read testimonials from our satisfied clients across Australia. Our Microsoft Office consultants have helped businesses optimise their operations and improve efficiency.",

  // OpenGraph
  openGraph: {
    title: "Office Experts Group Client Testimonials",
    description:
      "Read testimonials from our satisfied clients across Australia. Our Microsoft Office consultants have helped businesses optimise their operations and improve efficiency.",
    url: "https://www.officeexperts.com.au/client-testimonials/",
  },

  // Additional metadata
  keywords: [
    // Core testimonial keywords
    "Office Experts testimonials",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office Experts Group Client Testimonials",
    description:
      "Read testimonials from our satisfied clients across Australia. Our Microsoft Office consultants have helped businesses optimise their operations and improve efficiency.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.officeexperts.com.au/client-testimonials/",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
