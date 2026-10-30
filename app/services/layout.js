// /app/services/layout.js
const pageMeta = {
  title: "Microsoft Office, Power Platform and AI Services",
  description:
    "Word, Excel, Access, PowerPoint, Power Platform, Microsoft 365 and AI agent development from Australia's Microsoft Office specialists since 2000.",
  path: "/services",
  siteUrl: "https://www.officeexperts.com.au",
};

export const metadata = {
  title: pageMeta.title,
  description: pageMeta.description,
  keywords: ["microsoft office consultants australia"],
  openGraph: {
    title: pageMeta.title,
    description: pageMeta.description,
    url: `${pageMeta.siteUrl}${pageMeta.path}`,
    siteName: "Office Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageMeta.title,
    description: pageMeta.description,
    images: ["/logo.png"],
  },
  alternates: {
    canonical: pageMeta.path,
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
