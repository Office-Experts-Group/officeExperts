import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Add-in Development | Excel Add-ins | Office Expert Australia",
  description:
    "Expert Excel add-in development services for extending Excel functionality. Specializing in VBA and VSTO add-ins to automate tasks and enhance Excel capabilities.",
  keywords: [
    "Excel add-in development",
    "VBA add-in programming",
    "VSTO add-in development",
    "custom Excel functions",
    "Excel automation add-ins",
    "Excel toolbar customization",
    "Excel VBA macros",
    "Excel VSTO solutions",
    "Excel add-in deployment",
    "Excel functionality extension",
    "corporate Excel add-ins",
    "enterprise Excel solutions",
    "Excel automation tools",
    "Excel development services",
    "custom Excel features",
    "Excel .NET development",
    "Excel business automation",
    "Excel add-in consulting",
    "Excel integration services",
    "Excel workplace automation",
  ],
  canonical:
    "https://www.officeexperts.com.au/services/microsoft-excel/add-in-development/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
