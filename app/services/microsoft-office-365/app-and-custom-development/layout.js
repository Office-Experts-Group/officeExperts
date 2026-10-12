// app/services/microsoft-office-365/app-and-custom-development/layout.js

export const metadata = {
  title: "Custom App and Software Development | Office Experts Group",
  description:
    "Custom Next.js and React apps, WordPress and CRM portals, Power Platform, Power Pages and AI integrations from Australian developers since 2000.",
  keywords: ["custom app development australia"],
  openGraph: {
    title: "Custom App and Software Development | Office Experts Group",
    description:
      "Custom Next.js and React apps, WordPress and CRM portals, Power Platform, Power Pages and AI integrations from Australian developers since 2000.",
    url: "https://www.officeexperts.com.au/services/microsoft-office-365/app-and-custom-development",
    siteName: "Office Experts Group",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Custom App and Software Development | Office Experts Group",
    description:
      "Custom Next.js and React apps, WordPress and CRM portals, Power Platform, Power Pages and AI integrations from Australian developers since 2000.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/services/microsoft-office-365/app-and-custom-development",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
