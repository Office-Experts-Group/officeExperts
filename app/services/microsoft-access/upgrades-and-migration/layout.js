import React from "react";

export const metadata = {
  title: "Access Upgrades and Migration | Office Experts Group",
  description:
    "Extensive experience in Microsoft Access database upgrades and migrations to ensure smooth transitions, mitigate compatibility risks, and resolve database issues.",

  keywords: [
    // Core services
    "Microsoft access database migration",
    "Microsoft access database upgrade",
  ],

  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-access/upgrades-and-migration",
    languages: {
      "en-AU": "/services/microsoft-access/upgrades-and-migration",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
