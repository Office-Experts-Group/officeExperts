// /services/microsoft-word/word-document-template-creation/(components)/WhyChooseTemplates.jsx

import Image from "next/image";
import Link from "next/link";

// Fades / slides content in as it scrolls into view
import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/whyChooseTemplates.module.scss";

import stuckIcon from "@/public/icons/connectBlue.webp";
import issuesIcon from "@/public/icons/wordBlue.webp";
import migrateIcon from "@/public/icons/fileBlue.webp";
import expertsIcon from "@/public/icons/supportBlue.webp";

// Defined outside the component so the arrays aren't rebuilt on every render
const stats = [
  { value: "25+", label: "Years of Microsoft Office expertise" },
  { value: "Nationwide", label: "Team of dedicated specialists" },
  { value: "2500+", label: "Projects delivered on time" },
];

const points = [
  {
    icon: issuesIcon,
    alt: "Design expertise icon",
    text: "Brand design expertise with Microsoft Word specialists",
  },
  {
    icon: stuckIcon,
    alt: "Practical templates icon",
    text: "Templates that work in the real world",
  },
  {
    icon: migrateIcon,
    alt: "Consistent branding icon",
    text: "Consistent branding across all documents",
  },
  {
    icon: expertsIcon,
    alt: "User training icon",
    text: "Staff training and ongoing support",
  },
];

const WhyChooseTemplates = () => {
  return (
    <section className={styles.section} id="brand-templates">
      <div className={styles.inner}>
        <AnimateOnScroll animation="slide-left" delay={0.1} duration={1.2}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>Why Choose Us</p>
            <h2 className={styles.heading}>
              Why Choose Our{" "}
              <span className={styles.accent}>
                Microsoft Word Brand Templates
              </span>
              ?
            </h2>
            <p className={styles.text}>
              We combine design expertise with deep Microsoft Office knowledge.
              As part of the <Link href="/">Office Experts Group</Link>, our
              dedicated Word team is uniquely positioned to deliver beautiful
              and functional brand templates that your team will actually use.
            </p>

            <dl className={styles.stats}>
              {stats.map((stat) => (
                <div key={stat.value} className={styles.stat}>
                  <dt className={styles.statValue}>{stat.value}</dt>
                  <dd className={styles.statLabel}>{stat.label}</dd>
                </div>
              ))}
            </dl>

            <Link href="tel:+61-1300-12-20-38" className={styles.cta}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fill="none"
                  d="M16.585,19.999l2.006-2.005l-2.586-2.586l-1.293,1.293c-0.238,0.239-0.579,0.342-0.912,0.271 c-0.115-0.024-2.842-0.611-4.502-2.271s-2.247-4.387-2.271-4.502c-0.069-0.33,0.032-0.674,0.271-0.912l1.293-1.293L6.005,5.408 L4,7.413c0.02,1.223,0.346,5.508,3.712,8.874C11.067,19.643,15.337,19.978,16.585,19.999z"
                ></path>
                <path d="M16.566 21.999c.005 0 .023 0 .028 0 .528 0 1.027-.208 1.405-.586l2.712-2.712c.391-.391.391-1.023 0-1.414l-4-4c-.391-.391-1.023-.391-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594c.391-.391.391-1.023 0-1.414l-4-4c-.375-.375-1.039-.375-1.414 0L2.586 5.999C2.206 6.379 1.992 6.901 2 7.434c.023 1.424.4 6.37 4.298 10.268S15.142 21.976 16.566 21.999zM6.005 5.408l2.586 2.586L7.298 9.287c-.239.238-.341.582-.271.912.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271c.333.07.674-.032.912-.271l1.293-1.293 2.586 2.586-2.006 2.005c-1.248-.021-5.518-.356-8.873-3.712C4.346 12.921 4.02 8.636 4 7.413L6.005 5.408zM19.999 10.999h2c0-5.13-3.873-8.999-9.01-8.999v2C17.051 4 19.999 6.943 19.999 10.999z"></path>
                <path d="M12.999,8c2.103,0,3,0.897,3,3h2c0-3.225-1.775-5-5-5V8z"></path>
              </svg>
              <span>1300 122 038</span>
            </Link>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-down" delay={0.3} duration={1.2}>
          <div className={styles.points}>
            {points.map((point, index) => (
              <div key={point.text} className={styles.point}>
                <span className={styles.pointNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className={styles.iconWrap}>
                  <Image
                    src={point.icon}
                    alt={point.alt}
                    width={28}
                    height={28}
                    className={styles.icon}
                  />
                </div>
                <p className={styles.pointText}>{point.text}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default WhyChooseTemplates;
