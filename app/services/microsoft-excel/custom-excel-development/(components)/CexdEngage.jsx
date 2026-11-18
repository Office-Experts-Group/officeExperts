// /app/services/microsoft-excel/custom-excel-development/(components)/CexdEngage.jsx
// Replaces the old "experts await" call-out: phone number plus the four ways
// to work with us.
import Link from "next/link";

import styles from "@/styles/cexdEngage.module.scss";

import {
  CexdArrowIcon,
  CexdQuoteIcon,
  CexdSupportIcon,
  CexdRemoteIcon,
  CexdTrainingIcon,
} from "../(svgs)/CexdIcons";

const CEXD_PHONE_DISPLAY = "1300 102 810";
const CEXD_PHONE_HREF = "tel:1300102810";

const CEXD_ENGAGE_OPTIONS = [
  { id: "quote", label: "Quote or hourly rate", Icon: CexdQuoteIcon },
  { id: "support", label: "Ongoing support", Icon: CexdSupportIcon },
  { id: "remote", label: "Remote access or onsite", Icon: CexdRemoteIcon },
  { id: "training", label: "Tailored training", Icon: CexdTrainingIcon },
];

const CexdEngage = () => (
  <section
    className={styles.cexdEngage}
    id="cexd-engage"
    aria-labelledby="cexd-engage-heading"
  >
    <div className={styles.inner}>
      <div className={styles.copy}>
        <h2 id="cexd-engage-heading" className={styles.heading}>
          Got questions?{" "}
          <span className={styles.accent}>Our experts await your call!</span>
        </h2>
        <p className={styles.text}>
          We have experts across Australia with solutions to automate your tasks
          and let you get back to what you are good at, your business!
        </p>
        <div className={styles.ctaRow}>
          <a href={CEXD_PHONE_HREF} className="btn">
            {CEXD_PHONE_DISPLAY}
          </a>
          <Link
            href="/microsoft-support-and-training-australia"
            className={styles.link}
          >
            Microsoft support and training
            <CexdArrowIcon />
          </Link>
        </div>
      </div>

      <ul className={styles.options}>
        {CEXD_ENGAGE_OPTIONS.map((option) => (
          <li key={option.id} className={styles.option}>
            <span className={styles.optionIcon}>
              <option.Icon />
            </span>
            <span className={styles.optionLabel}>{option.label}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default CexdEngage;
