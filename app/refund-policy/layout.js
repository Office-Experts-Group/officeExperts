import React from "react";

export const metadata = {
  // Basic metadata
  title: "Refund Policy | Office Experts Group",
  description:
    "Read the refund policy for Office Experts, detailing how we accept and process refunds for our professional services.",
  keywords: "refund policy, office experts",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
