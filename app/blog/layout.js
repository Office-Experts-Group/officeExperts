export const metadata = {
  title: "Blog | Office Experts Australia",
  description:
    "Stay up to date with the latest Microsoft Office tips, tricks, and best practices from Office Experts Australia.",
  metadataBase: new URL("https://www.officeexperts.com.au"),
  alternates: {
    canonical: "/blog",
    languages: {
      "en-AU": "/blog",
    },
  },
  openGraph: {
    title: "Blog | Office Experts Australia",
    description:
      "Stay up to date with the latest Microsoft Office tips, tricks, and best practices from Office Experts Australia.",
    url: "https://www.officeexperts.com.au/blog",
    siteName: "Office Experts Australia",
    locale: "en-AU",
    type: "website",
  },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
