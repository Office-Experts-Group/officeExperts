// /(wordComponents)/WordServicesToggle.jsx
"use client";

import { useState } from "react";
import Link from "next/link";

// Compiled CSS from styles/wordServicesToggle.module.scss
import styles from "@/styles/wordServicesToggle.module.scss";

// Shared by the button's aria-controls and the panel it controls
const PANEL_ID = "more-word-services";

// Small client component: it only owns the open/closed state and the two
// buttons. The tiles arrive as `children` from a server component, so they
// are rendered into the page HTML on the server and this just shows or
// hides them.
const WordServicesToggle = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((current) => !current);

  return (
    <>
      {/* `hidden` rather than {open && children}, so the links stay in the
          server-rendered HTML for crawlers while collapsed */}
      <div id={PANEL_ID} className={styles.panel} hidden={!open}>
        {children}
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          className="btn"
          aria-expanded={open}
          aria-controls={PANEL_ID}
          onClick={toggle}
        >
          {open ? "Show fewer Word Services" : "See all Word Services"}
        </button>

        <Link href="/services" className="btn">
          All Microsoft Services
        </Link>
      </div>
    </>
  );
};

export default WordServicesToggle;
