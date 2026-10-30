// /app/not-found.js
import Link from "next/link";
// Standalone SVG kept in the (svgs) route group, as with the other custom illustrations
import LostUserSvg from "@/app/(svgs)/LostUserSvg";
import styles from "@/styles/notFound.module.scss";

// Special file: Next.js renders this for any unmatched URL (returning a 404 status)
// and whenever notFound() is called from a route. It sits inside the root layout,
// so the header and footer are included automatically.
export const metadata = {
  title: { absolute: "Page Not Found | Office Experts" },
  description:
    "Sorry, we couldn't find the page you were looking for. Return to the Office Experts homepage.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Error 404</span>
          <h1 className={styles.heading}>
            Sorry, we&apos;ve{" "}
            <span className={styles.accent}>lost this page</span>
          </h1>
          <p className={styles.text}>
            We&apos;re sorry about that. The page you were looking for may have
            moved, been renamed or never existed. Whichever it is, we&apos;d
            hate for you to wander off, so let&apos;s get you back on track.
          </p>
          <Link href="/" className="btn">
            Return to the homepage
          </Link>
        </div>
        <LostUserSvg className={styles.illustration} />
      </div>
    </main>
  );
}
