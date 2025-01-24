export const metadata = {
  title: "Blog | Office Experts Australia",
  description:
    "Stay up to date with the latest Microsoft Office tips, tricks, and best practices from Office Experts Australia.",
  alternates: {
    canonical: "https://officeexperts.com.au/blog",
  },
  openGraph: {
    title: "Blog | Office Experts Australia",
    description:
      "Stay up to date with the latest Microsoft Office tips, tricks, and best practices from Office Experts Australia.",
    url: "https://officeexperts.com.au/blog",
    siteName: "Office Experts Australia",
    locale: "en-AU",
    type: "website",
  },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
