import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Publisher Services | Office Experts Group",
  description:
    "Expert Microsoft Publisher design, template creation, and consulting services. Professional layout, branding, and corporate publishing solutions.",

  keywords: [
    // Core Publisher services
    "Microsoft Publisher templates",
    "Microsoft Publisher design services",
  ],
  alternates: {
    canonical: "/services/microsoft-publisher",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
