// /app/services/microsoft-excel/excel-formulas-and-custom-formulas/(components)/FormulasVideo.jsx

import styles from "@/styles/formulasVideo.module.scss";

const FORMULAS_VIDEO_URL =
  "https://player.vimeo.com/video/294497327?h=c55bd1bb94";

// Server component. The old spinner needed client state; the frame's dark
// background now holds the space while the player loads.
const FormulasVideo = () => {
  return (
    <section
      id="frm-demo"
      className={styles.formulasVideo}
      aria-labelledby="frm-demo-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Watch a Demo</span>
          <h2 id="frm-demo-heading" className={styles.heading}>
            Formulas built <span className={styles.accent}>with VBA</span>
          </h2>
        </header>

        <div className={styles.frame}>
          <iframe
            src={FORMULAS_VIDEO_URL}
            className={styles.iframe}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
            title="Excel Custom Formulas Demo"
          />
        </div>
      </div>
    </section>
  );
};

export default FormulasVideo;
