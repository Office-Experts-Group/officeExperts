import React from "react";

export const metadata = {
  // Basic metadata
  title: "PowerPoint Consulting Services | Office Experts Group",
  description:
    "Expert Microsoft PowerPoint consulting services in Australia. Specialising in custom templates, presentation design, automation and training.",

  keywords: [
    // Core PowerPoint services
    "Microsoft PowerPoint consultation",
  ],
  alternates: {
    canonical: "/services/microsoft-powerpoint",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
