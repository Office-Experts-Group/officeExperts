// /app/services/microsoft-power-platform/microsoft-power-pages/(components)/PpgSecurity.jsx

import styles from "@/styles/ppgSecurity.module.scss";
import PpgSecuritySvg from "../(svgs)/PpgSecuritySvg";
import {
  PpgAuthArt,
  PpgRolesSecurityArt,
  PpgTableArt,
  PpgColumnArt,
} from "../(svgs)/PpgSecurityArt";
import { ShieldIcon } from "../(svgs)/PpgIcons";

const PPG_SECURITY_LAYERS = [
  {
    id: "auth",
    label: "Authentication",
    short: "Azure AD · Azure AD B2C · Social and local sign-in",
    Art: PpgAuthArt,
    detail:
      "Sign-in options include Azure AD for staff and business partners, Azure AD B2C for customer accounts, and a range of social and federated identity providers. Local username and password accounts are available for simpler setups. Microsoft has been renaming parts of its identity products, so we confirm the current option names when we scope the build.",
  },
  {
    id: "webroles",
    label: "Web roles",
    short: "Who is allowed to do what",
    Art: PpgRolesSecurityArt,
    detail:
      "Web roles group signed-in users by access level, whether that is customer, partner, admin or a custom role you define. Every permission in the system is attached to a web role, not to individual users.",
  },
  {
    id: "table",
    label: "Table permissions",
    short: "Which Dataverse tables each role can read, write or delete",
    Art: PpgTableArt,
    detail:
      "Table permissions define exactly which Dataverse tables a web role can read, create, edit or delete. A supplier role might have read-only access to order records and write access to delivery confirmations, and nothing else.",
  },
  {
    id: "column",
    label: "Column permissions",
    short: "Hide sensitive fields from users who can see the record",
    Art: PpgColumnArt,
    detail:
      "Column permissions let you hide sensitive fields such as cost prices, internal notes or margin data from users who are allowed to see the rest of the record. It is the most granular layer of access control in the platform.",
  },
];

const PPG_SECURITY_TAGS = [
  "Azure AD and Azure AD B2C authentication",
  "Table and column-level permissions",
  "Web roles for fine-grained access control",
  "DLP policies through the Power Platform admin centre",
];

const PpgSecurity = () => {
  return (
    <section
      className={styles.ppgSecurity}
      id="ppg-security"
      aria-labelledby="ppg-security-heading"
    >
      <div className={styles.head}>
        <span className={styles.eyebrow}>Security &amp; governance</span>
        <h2 id="ppg-security-heading" className={styles.headline}>
          Security that actually <span className={styles.accent}>scales</span>
        </h2>
        <p className={styles.intro}>
          Power Pages inherits Microsoft’s security model, which is one of its
          strongest arguments for enterprise use. Every request passes through
          four layers in order, and each layer can be configured on its own.
        </p>
        <ul className={styles.tags} aria-label="Security features">
          {PPG_SECURITY_TAGS.map((t) => (
            <li key={t} className={styles.tag}>
              {t}
            </li>
          ))}
        </ul>
      </div>

      <figure className={styles.band}>
        <div className={styles.diagramScroll}>
          <div className={styles.diagramInner}>
            <PpgSecuritySvg />
          </div>
        </div>
        <figcaption className={styles.caption}>
          A request is checked at every gate. If any gate says no, the data
          never reaches the page.
        </figcaption>
      </figure>

      <div className={styles.body}>
        <ul className={styles.cards}>
          {PPG_SECURITY_LAYERS.map(({ id, label, short, Art, detail }) => (
            <li key={id} className={styles.card}>
              <span className={styles.cardArt}>
                <Art />
              </span>
              <h3 className={styles.cardTitle}>{label}</h3>
              <p className={styles.cardShort}>{short}</p>
              <p className={styles.cardDetail}>{detail}</p>
            </li>
          ))}
        </ul>

        <aside className={styles.gov}>
          <span className={styles.govIcon}>
            <ShieldIcon />
          </span>
          <div>
            <h3 className={styles.govTitle}>Governance</h3>
            <p className={styles.govBody}>
              Power Pages sites sit inside your Power Platform environment, so
              your existing admin controls and DLP policies can apply to them.
              We check what is covered in your tenant as part of the setup.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default PpgSecurity;
