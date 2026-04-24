"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/pageSegmentFinal.module.css";

const stats = [
  { value: "1B+", label: "Microsoft 365 users worldwide" },
  { value: "25+", label: "Expert consultants across Australia" },
  { value: "25+", label: "Years delivering Microsoft solutions" },
  { value: "1000+", label: "Projects successfully delivered" },
];

const capabilities = [
  {
    title: "Microsoft 365 Copilot Implementation",
    description:
      "Deploy AI-powered assistance across Word, Excel, Outlook and Teams. Automate repetitive tasks, surface insights instantly and empower every staff member to work at their highest level.",
    keywords: ["Copilot AI", "Microsoft 365 AI", "AI Implementation"],
  },
  {
    title: "SharePoint Intranet & Knowledge Base",
    description:
      "Build intelligent document libraries, governance frameworks and AI-powered intranets that centralise your business knowledge and keep every team aligned.",
    keywords: ["SharePoint Consulting", "Knowledge Management", "Intranet"],
  },
  {
    title: "Power Platform Automation",
    description:
      "Replace manual processes with Power Automate workflows, Power Apps solutions and AI Builder integrations — all built on your existing Microsoft 365 subscription.",
    keywords: ["Power Automate", "Power Apps", "Business Automation"],
  },
  {
    title: "Azure Cloud & OpenAI Solutions",
    description:
      "Leverage Azure's enterprise cloud infrastructure alongside Azure OpenAI to build custom AI solutions, data pipelines and scalable applications unique to your business.",
    keywords: ["Azure Consulting", "Azure OpenAI", "Cloud Solutions"],
  },
  {
    title: "Power BI & Predictive Analytics",
    description:
      "Transform raw data into real-time dashboards and predictive reports. Connect every data source across your organisation and give leadership the visibility to act fast.",
    keywords: ["Power BI", "Predictive Analytics", "Data Reporting"],
  },
  {
    title: "AI Readiness & Adoption Programme",
    description:
      "Not sure where to start with AI? Our structured readiness assessment and adoption programme ensures your team is confident, compliant and getting measurable ROI from day one.",
    keywords: ["AI Readiness", "Microsoft Copilot", "AI Adoption"],
  },
];

// ─── Stat parsing ─────────────────────────────────────────────────────────────
// Parses "1B+", "25+", "1000+" → { target, unit, suffix }
// We count up to the raw numeric part only (e.g. 1 for "1B+"),
// then re-attach the unit and suffix characters in the display string.
const parseStat = (value) => {
  const match = value.match(/^([\d.]+)(B|M|K)?(\+?)$/i);
  if (!match) return { target: 0, unit: "", suffix: "" };
  return {
    target: parseFloat(match[1]),
    unit: match[2] ? match[2].toUpperCase() : "",
    suffix: match[3] || "",
  };
};

// Easing: easeOutQuart — rushes early, glides to a stop
const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

// ─── AnimatedStat ─────────────────────────────────────────────────────────────
// Each counter runs for its own duration so every number feels substantial.
const AnimatedStat = ({ value, label, animate, duration = 2500 }) => {
  const { target, unit, suffix } = parseStat(value);
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!animate || hasRun.current) return;
    hasRun.current = true;

    const tick = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);

      setCount(eased * target);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate, duration, target]);

  // Format: integers stay whole, decimals get one place
  const displayed = target % 1 !== 0 ? count.toFixed(1) : Math.floor(count);

  return (
    <div className={styles.stat}>
      <span className={styles.statValue}>
        {displayed}
        {unit}
        {suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
};

// ─── StatsBar with IntersectionObserver ───────────────────────────────────────
// Fires when 50% of the stats bar element is within the viewport.
const StatsBar = () => {
  const [animate, setAnimate] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.statsBar} ref={barRef}>
      {stats.map((stat, index) => {
        // Each counter gets a duration proportional to its target so
        // both "25" and "1000" feel like they're genuinely ticking up.
        // Floor: 2500ms (small numbers still feel deliberate)
        // Ceiling: 4000ms (large numbers don't drag on forever)
        const { target } = parseStat(stat.value);
        const duration = Math.min(Math.max(target * 3.5, 2500), 4000);
        return (
          <AnimatedStat
            key={index}
            value={stat.value}
            label={stat.label}
            animate={animate}
            duration={duration}
          />
        );
      })}
    </div>
  );
};

// ─── Page component ───────────────────────────────────────────────────────────
const PageSegmentFinal = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        {/* Header */}
        <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>The Full Picture</p>
            <h2 className={styles.heading}>
              Your Entire Business, Powered by Microsoft 365
            </h2>
            <p className={styles.subheading}>
              Office 365 is no longer just productivity software. In 2026 it is
              the most comprehensive business operating platform available.
              Combining AI, automation, cloud infrastructure, analytics and
              communication under a single subscription your organisation likely
              already holds. Our consultants ensure you are extracting every
              dollar of value from it.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Stats Bar — count-up fires at 50% scroll visibility */}
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.1}>
          <StatsBar />
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentFinal;
