// /app/microsoft-consultants-northern-rivers-nsw/(components)/ServiceLink.jsx
// Link wrapper used throughout the hub. It has no styling of its own, the caller passes className.
import Link from "next/link";
// Separate helper decides whether the href is an Office Experts path or another group site
import { isInternalHref } from "./servicesHelpers";

export default function ServiceLink({ href, className, children, ...rest }) {
  // Office Experts pages use next/link for prefetching and client side navigation
  if (isInternalHref(href)) {
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  // Other group sites are separate domains, so a normal anchor is correct
  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  );
}
