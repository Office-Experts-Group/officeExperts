import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Request a Quote",
  description:
    "Use the form below to provide us with all relevant information to quickly and efficiently process your enquiry.",

  openGraph: {
    title: "Request a Quote",
    description:
      "Request a quote for Microsoft Office consulting services and solutions from Office Experts Group.",
    url: "https://www.officeexperts.com.au/contact-us/request-a-quote/",
  },

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Request a Quote - Office Experts Group",
    description:
      "Request a quote for Microsoft Office consulting services and solutions.",
    images: ["/logo.png"],
  },

  canonical: "https://www.officeexperts.com.au/contact-us/request-a-quote/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
