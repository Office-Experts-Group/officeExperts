// app/microsoft-consultants-wollongong/(components)/WollongongIntro.jsx
import React from "react";
import Link from "next/link";

// Fades each block in as it scrolls into view (shared by the city hubs)
import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/wollongongIntro.module.scss";

// The Illawarra is a long, narrow strip, so the list runs north to south.
// Each note describes the character of the area only. The industry detail sits in
// WollongongContext, so the two sections do not repeat each other.
const stops = [
  {
    name: "Helensburgh to Thirroul",
    note: "Commuter villages, trades and home-based businesses.",
  },
  {
    name: "Wollongong city and North Wollongong",
    note: "Council, law, accounting, the university and the hospital.",
  },
  {
    name: "Port Kembla, Unanderra and Kembla Grange",
    note: "The steelworks, the port and the firms that supply them.",
  },
  {
    name: "Dapto and West Dapto",
    note: "The region's growth corridor, and the trades that follow it.",
  },
  {
    name: "Shellharbour and Albion Park",
    note: "Light industry, retail and services for a growing southern population.",
  },
  {
    name: "Kiama and Jamberoo",
    note: "Visitors, hospitality and events, with a strong seasonal rhythm.",
  },
  {
    name: "Nowra and the Shoalhaven",
    note: "Defence, agriculture, tourism and a regional hospital.",
  },
];

const WollongongIntro = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Headline and copy ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Wollongong &amp; the Illawarra</p>
          <h2 className={styles.headline}>
            Microsoft consultants for Wollongong,{" "}
            <span className={styles.accentText}>
              built around how the Illawarra actually works.
            </span>
          </h2>

          <p className={styles.lead}>
            Wollongong is not one economy. A steelworks supply chain, a
            university and its spin-outs, a regional health network, a growing
            southern corridor and a tourism coast all share one narrow strip
            between the escarpment and the sea. Plenty of businesses here also
            sell into Sydney, and plenty of staff commute there, so the systems
            have to work in both places.
          </p>
          <p className={styles.body}>
            Office Experts Group started in 2000, and our programmers now work
            right across Australia. An Illawarra project gets whichever
            specialist fits it best, whether the job is Excel, Word, Access,
            PowerPoint, Power Platform, Microsoft 365, Copilot or a custom AI
            agent.
          </p>
          <p className={styles.body}>
            Every project starts with a proper look at how the work really
            flows. That is the heart of our{" "}
            <Link href="/services/business-analysis" className={styles.link}>
              business analysis service
            </Link>
            , and it is why what we build tends to fit.
          </p>

          <div className={styles.ctaRow}>
            <a href="#contact" className="btn">
              Book a free assessment
            </a>
            <span className={styles.ctaNote}>
              A short call, then a written proposal.
            </span>
          </div>
        </div>
      </AnimateOnScroll>

      {/* ── Coast strip ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
        <aside className={styles.coast} aria-labelledby="wollongong-coast">
          <h3 id="wollongong-coast" className={styles.coastTitle}>
            Along the coast, north to south
          </h3>
          <ol className={styles.stops}>
            {stops.map((stop) => (
              <li key={stop.name} className={styles.stop}>
                <p className={styles.stopName}>{stop.name}</p>
                <p className={styles.stopNote}>{stop.note}</p>
              </li>
            ))}
          </ol>
        </aside>
      </AnimateOnScroll>
    </div>
  </section>
);

export default WollongongIntro;
