import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Refund Policy | Office Experts Group",
  description:
    "This Refund Policy should be read in conjunction with our Service Agreement. Your rights under the Service Agreement can be found at section 15.\n\n1. Refunds for legal services provided\nOffice Experts Group is bound by Australian Consumer Law ('ACL') obligations to provide IT services with due care and skill within a reasonable period of time.",

  alternates: {
    canonical: "https://www.officeexperts.com.au/refund-policy/",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
