// app/services/by-business-solution/3rd-party-application-or-office-integration/layout.js

const title = "3rd Party App Integration | Microsoft Solutions";
const description =
  "Connect 3rd party apps like Xero, MYOB, Salesforce and others to your Microsoft suite. 25+ Software consultants working since 2000.";
const url =
  "https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration";

export const metadata = {
  // Basic metadata
  title,
  description,
  keywords: ["3rd party app integration"],
  alternates: {
    canonical:
      "/services/by-business-solution/3rd-party-application-or-office-integration",
  },

  // OpenGraph
  openGraph: {
    title,
    description,
    url,
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

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title,
    description,
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
