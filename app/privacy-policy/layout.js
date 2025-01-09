// app/privacy/layout.js
import PropTypes from "prop-types";
import React from "react";

export const metadata = {
  title: "Privacy Policy - Office Experts",
  description:
    "Read the privacy policy for Office Experts, detailing how we collect, use, and protect your personal information.",
  url: "https://officeexperts.com.au/privacy-policy",
  alternates: {
    canonical: "https://officeexperts.com.au/privacy-policy",
  },
};

export default function PrivacyLayout({ children }) {
  return <>{children}</>;
}

PrivacyLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
