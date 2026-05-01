"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import styles from "../../../../../styles/introduction.module.css";

const services = [
  {
    id: "01",
    label: "Microsoft 365 & SharePoint",
    desc: "Build on tools your team already knows. We extend your Microsoft environment with structured intranets, document workflows and real-time collaboration. Ensuring your data stays connected, not scattered.",
    tag: "Collaboration",
    href: "/services/microsoft-office-365",
  },
  {
    id: "02",
    label: "Power Apps & Power Automate",
    desc: "Stop rebuilding the same manual process every week. We turn repetitive tasks into automated workflows and build custom apps without the price tag of enterprise software.",
    tag: "Automation",
    href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps",
  },
  {
    id: "03",
    label: "Custom Websites & Web Apps",
    desc: "We build browser-based tools — portals, dashboards, booking systems, calculators, the options are limitless. We design around your workflow, not the other way round.",
    tag: "Development",
    href: null,
  },
  {
    id: "04",
    label: "API Integrations",
    desc: "Tired of entering the same data twice? Our developers can connect all your platforms, Microsoft 365, Dynamics, accounting tools, CRMs, etc. Now information flows where it needs to, automatically.",
    tag: "Integration",
    href: "/microsoft-365-api-integration",
  },
  {
    id: "05",
    label: "Reporting & Data Automation",
    desc: "If critical decisions are still being made from a spreadsheet, there's a better way. We build live dashboards and cloud-based reporting with Power BI, so you always know what's actually happening.",
    tag: "Intelligence",
    href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
  },
];

const Counter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          let start = 0;
          const duration = 1800;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className={styles.counterValue}>
      {count}
      {suffix}
    </span>
  );
};

const PageSegmentIntro = () => {
  const [activeService, setActiveService] = useState(null);
  const [lineHeight, setLineHeight] = useState(0);
  const listRef = useRef(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animate the vertical line growing downward as items become active
  useEffect(() => {
    if (activeService !== null && listRef.current) {
      const items = listRef.current.querySelectorAll("[data-service-item]");
      const activeEl = items[activeService];
      if (activeEl) {
        const listTop = listRef.current.getBoundingClientRect().top;
        const itemBottom = activeEl.getBoundingClientRect().bottom;
        setLineHeight(itemBottom - listTop + 8);
      }
    } else {
      setLineHeight(0);
    }
  }, [activeService]);

  return (
    <section
      className={`${styles.intro} ${visible ? styles.introVisible : ""}`}
      ref={sectionRef}
    >
      {/* ── Top: headline block ── */}
      <div className={styles.headlineBlock}>
        <div className={styles.eyebrow}>Online Solutions</div>
        <h2 className={styles.headline}>
          Your systems should work for you.
          <br />
          <span className={styles.accentLine}>We make sure they do</span>
        </h2>
        <div className={styles.introBody}>
          <p>
            Most businesses don&rsquo;t need more software, they need their
            existing tools to actually work together. We&rsquo;ve spent over 25
            years helping Australian businesses untangle manual processes,
            connect their platforms and build online systems that make everyday
            work a lot less painful.
          </p>
          <p>
            Our development teams uses a huge variety of tools for an equally
            diverse range of businesses. We have found that there is no
            one-size-fits-all solution, Power pages may be the perfect tool for
            organisations with existing Power Platform integrations, whilst
            JavaScript applications can become the lightning fast tool to that
            connects your team through desktop and mobile, in the office or out
            in the field.
          </p>
        </div>

        {/* Stat strip */}
        <div className={styles.statStrip}>
          <div className={styles.stat}>
            <Counter target={25} suffix="+" />
            <span className={styles.statLabel}>Years in operation</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <Counter target={1000} suffix="+" />
            <span className={styles.statLabel}>Projects delivered</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <Counter target={100} suffix="%" />
            <span className={styles.statLabel}>Australian Owned</span>
          </div>
        </div>
      </div>

      {/* ── Bottom: interactive service accordion list ── */}
      <div className={styles.serviceBlock}>
        <div className={styles.serviceBlockLabel}>What we build</div>

        <ul className={styles.serviceList} ref={listRef}>
          {/* Animated vertical track line */}
          <div
            className={styles.trackLine}
            style={{ height: `${lineHeight}px` }}
          />

          {services.map((s, i) => (
            <li
              key={s.id}
              data-service-item
              className={`${styles.serviceItem} ${
                activeService === i ? styles.serviceItemActive : ""
              }`}
              onMouseEnter={() => setActiveService(i)}
              onMouseLeave={() => setActiveService(null)}
              onFocus={() => setActiveService(i)}
              onBlur={() => setActiveService(null)}
              tabIndex={0}
            >
              <div className={styles.serviceItemInner}>
                <div className={styles.serviceLeft}>
                  <span className={styles.serviceNum}>{s.id}</span>
                  <div className={styles.serviceDot} />
                </div>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceHeader}>
                    <h3 className={styles.serviceLabel}>{s.label}</h3>
                    <span className={styles.serviceTag}>{s.tag}</span>
                  </div>
                  <div className={styles.serviceDesc}>
                    <p>{s.desc}</p>
                    {s.href ? (
                      <Link href={s.href} className={styles.serviceLink}>
                        Learn more
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 8h10M9 4l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    ) : (
                      <a href="#next-section" className={styles.serviceLink}>
                        Read more
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 8h10M9 4l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <div className={styles.serviceArrow} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10h12M12 5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.cta}>
          <Link
            href="#contact"
            className="btn"
            style={{ textTransform: "capitalize" }}
          >
            Talk to our team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageSegmentIntro;
