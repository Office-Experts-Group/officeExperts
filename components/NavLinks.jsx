import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <>
      <li>
        <Link href="https://officeexperts.com.au">Office Experts</Link>
      </li>
      <li>
        <Link href="https://excelexperts.com.au">Excel Experts</Link>
      </li>
      <li>
        <Link href="https://powerplatformexperts.com.au">
          Power Platform Experts
        </Link>
      </li>
      <li>
        <Link href="/">Access Experts</Link>
      </li>
      <li>
        <Link href="https://wordexperts.com.au">Word Experts</Link>
      </li>
    </>
  );
};

export default NavLinks;
