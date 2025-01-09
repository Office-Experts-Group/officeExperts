import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Word and PowerPoint Experts Perth",
  description:
    "Leading Microsoft Word and PowerPoint consulting services in Perth. Specialising in presentation design, document templates, and business automation solutions.",

  openGraph: {
    title: "Word and PowerPoint Experts Perth",
    description:
      "Leading Microsoft Word and PowerPoint consulting services in Perth. Specialising in presentation design, document templates, and business automation solutions.",
    url: "https://www.officeexperts.com.au/word-and-powerpoint-experts-perth/",
  },

  keywords: [
    "Microsoft PowerPoint designers Perth",
    "Microsoft Word designers Perth",
    // "Word presentation templates Perth",
    // "PowerPoint customization Perth",
    // "Microsoft Office consultants Perth",
    // "Document design services Perth",
    // "PowerPoint automation Perth",
    // "Word template solutions Perth",
    // "Microsoft Office Perth",
    // "Professional presentations Perth",
    // "Document automation Perth",
    // "Corporate templates Perth",
    // "Business documents Perth",
    // "PowerPoint experts Perth",
    // "Word consultants Perth",
  ],
  alternates: {
    canonical:
      "https://www.officeexperts.com.au/word-and-powerpoint-experts-perth/",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
