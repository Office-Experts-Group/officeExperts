// app/services/database-development-and-solutions/(components)/AiBusinessData.jsx
import Link from "next/link";

// Compiled CSS module (source: styles/aiBusinessData.module.scss)
import styles from "@/styles/aiBusinessData.module.scss";
import { AiDataFlowSvg } from "../(svgs)/AiDataFlowSvg";

const capabilities = [
  {
    title: "Retrieval-augmented generation (RAG)",
    text: "The assistant searches your own content first, then answers using only what it found, with references back to the original document or record. Fewer invented answers, and every claim can be checked.",
  },
  {
    title: "A private knowledge base for your business",
    text: "Policies, procedures, contracts and past proposals indexed so staff can ask questions in plain English instead of digging through folders. An AI chatbot trained on company documents, without those documents leaving your control.",
  },
  {
    title: "Connect AI to your SQL database",
    text: "Ask which customers haven't ordered in 90 days and get the answer from SQL Server, Azure SQL, PostgreSQL or Access, with the query shown so it can be verified. Connections are read-only unless you decide otherwise.",
  },
  {
    title: "Governed access to business information",
    text: "The assistant only sees what each person is already allowed to see, using Microsoft sign-in, role-based permissions and audit logs. Payroll, HR and other sensitive tables stay out of reach.",
  },
];

const AiBusinessData = () => {
  return (
    <section className={styles.section} id="ai-and-business-data">
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>AI and your business data</span>
          <h2 className={styles.heading}>
            Connect AI to the data{" "}
            <span className={styles.accent}>your business already has</span>
          </h2>
          <p>
            General AI tools know a lot about the world and nothing about your
            business. The value starts when an AI assistant can search your own
            documents, spreadsheets and databases, and answer with the source
            attached. We have spent more than 25 years building the Access, SQL
            Server, Excel and Power Platform systems that hold that data, so
            connecting AI to it is a natural next step.
          </p>
        </header>

        <div className={styles.grid}>
          {/* ── Flow diagram panel ── */}
          <figure className={styles.panel}>
            <AiDataFlowSvg />
            <figcaption>
              Every answer is built from records the user is permitted to see,
              then returned with numbered sources.
            </figcaption>
          </figure>

          {/* ── Capabilities ── */}
          <ul className={styles.capabilities}>
            {capabilities.map((item) => (
              <li key={item.title} className={styles.capability}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AiBusinessData;
