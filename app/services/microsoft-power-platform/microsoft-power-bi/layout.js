import React from "react";

export const metadata = {
  title: "Microsoft Power BI Services | Office Experts Group",
  description:
    "We build reports and dashboards which connect your Power BI services to your financial and accounting systems, databases, Azure services and spreadsheets.",

  keywords: [
    // Core Power BI services
    "Power BI development",
    "custom Power BI dashboards",
  ],
  alternates: {
    canonical:
      "https://powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
