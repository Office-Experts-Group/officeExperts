import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

const AdvancedFormattingCapabilities = () => {
  const checkItems = [
    {
      title: "Complex Document Layouts",
      description:
        "Create multi-section documents with varying headers, footers, and page orientations within a single file. Word's section breaks allow seamless transitions from portrait to landscape layouts.",
    },
    {
      title: "Professional Typography and Styling Control",
      description:
        "Access advanced character spacing, ligature controls, OpenType features, and precise baseline adjustments. Word's comprehensive style management system ensures brand consistency across entire document libraries.",
    },
    {
      title: "Precision Image and Object Positioning",
      description:
        "Word's advanced object positioning tools provide pixel-perfect control over images, shapes, and text boxes. Use sophisticated text wrapping options and position objects relative to specific page elements to prevent formatting chaos.",
    },
    {
      title: "Master Document Management for Large Publications",
      description:
        "Manage large documents as collections of subdocuments, enabling multiple team members to work on different sections simultaneously while maintaining consistent formatting and cross-references.",
    },
    {
      title: "Advanced Table Design and Data Visualization",
      description:
        "Create complex tables with merged cells, custom borders, shading patterns, and nested tables. Word supports repeating header rows across page breaks and sophisticated table styles essential for financial documents and technical specifications.",
    },
    {
      title: "Publishing-Grade Output Control",
      description:
        "Advanced print settings, PDF export options with accessibility features, and precise page layout controls guarantee that documents maintain their intended appearance across different printers and viewing devices.",
    },
  ];

  return (
    <section
      className={styles.pageSegment}
      style={{ backgroundColor: "#f2f3f5", padding: "8rem 10vw" }}
    >
      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2 style={{ fontSize: "2rem" }}>
              Advanced Formatting & Design Capabilities That Google Docs Can't
              Match
            </h2>
          </div>
          <p>
            When your organisation needs professional-grade documents, Google
            Docs' basic formatting tools quickly become a bottleneck. Microsoft
            Word's advanced design capabilities enable you to create
            sophisticated documents that meet enterprise standards and
            professional publishing requirements.
          </p>

          <div className={styles.points}>
            {checkItems.map((item, index) => (
              <div key={index} className={styles.point}>
                <div className={styles.tick}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                  </svg>
                </div>
                <div>
                  <h3
                    style={{
                      margin: "0 0 0.5rem 0",
                      fontSize: "1.1rem",
                      fontWeight: "600",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ margin: "0" }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default AdvancedFormattingCapabilities;
