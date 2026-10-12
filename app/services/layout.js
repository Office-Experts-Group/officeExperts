// /app/services/layout.js
// Route metadata for /services, in the same shape as the other page layouts.
// The title and description live in servicesData.js so the page schema uses the same wording.
import { pageMeta } from "./servicesData";

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
