// app/privacy/layout.js
import React from "react";

export const metadata = {
  title: "Privacy Policy | Office Experts Group",
  description:
    "Read the privacy policy for Office Experts, detailing how we collect, use, and protect your personal information.",
  url: "https://www.officeexperts.com.au/privacy-policy",
  keywords: "privacy policy, office experts",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyLayout({ children }) {
  return <>{children}</>;
}
