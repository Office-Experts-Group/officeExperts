import PropTypes from "prop-types";
import React from "react";

export const metadata = {
  title: "Privacy Policy - Office Experts",
  description:
    "Read the privacy policy for Office Experts, detailing how we collect, use, and protect your personal information.",
  robots: "noindex, nofollow",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
