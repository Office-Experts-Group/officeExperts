// app/test-page/(svgs)/HeroStageSvg.jsx
// Decorative home hero illustration: four everyday tools (documents, spreadsheets,
// databases, AI) around "your business". One drawing tells the hero's story:
//   frame 1: tools are scattered, tilted and flagged with problems
//   frame 2: they snap into place and connect, with work flowing along the lines
//   frame 3: they step back and a question and answer appear
// Every change is driven by CSS reading data-frame on the HeroRotator wrapper
// (see styles/heroStage.module.scss). The orbit, float and glow run the whole time.
// Tiles are drawn at their "connected" (frame 2) position; CSS moves them for 1 and 3.
// aria-hidden: purely decorative, the frame copy carries the meaning.

// SCSS module: colours from globals.scss plus all frame states and animations
import styles from "@/styles/heroStage.module.scss";

export const HeroStageSvg = () => {
  // Hub centre is 280,230. dx/dy run from the hub to each tile centre and drive
  // both the connector line end and the travelling pulse.
  const links = [
    { name: "docs", dx: -186, dy: -160 },
    { name: "sheets", dx: 186, dy: -160 },
    { name: "data", dx: -186, dy: 160 },
    { name: "ai", dx: 186, dy: 160 },
  ];

  return (
    <svg
      viewBox="0 0 560 460"
      className={styles.stage}
      aria-hidden="true"
      focusable="false"
    >
      {/* ── Slow orbit around the hub (runs in every frame) ── */}
      <g className={styles.orbit}>
        <circle cx="280" cy="230" r="128" className={styles.ring} />
        <circle cx="280" cy="102" r="4" className={styles.orbitDot} />
      </g>

      {/* ── Connectors draw in on frame 2 ── */}
      {links.map((link) => (
        <line
          key={link.name}
          x1="280"
          y1="230"
          x2={280 + link.dx}
          y2={230 + link.dy}
          pathLength="1"
          className={styles.link}
        />
      ))}

      {/* ── Pulses travel hub to tile while connected ── */}
      <g className={styles.pulses}>
        {links.map((link, index) => (
          <circle
            key={link.name}
            cx="280"
            cy="230"
            r="4"
            className={styles.pulse}
            style={{
              "--dx": `${link.dx}px`,
              "--dy": `${link.dy}px`,
              animationDelay: `${index * -0.6}s`,
            }}
          />
        ))}
      </g>

      {/* ── Hub ── */}
      <rect x="200" y="186" width="160" height="88" rx="16" className={styles.hubGlow} />
      <rect x="200" y="186" width="160" height="88" rx="16" className={styles.hub} />
      <text x="280" y="226" textAnchor="middle" className={styles.hubLabel}>
        YOUR
      </text>
      <text x="280" y="244" textAnchor="middle" className={styles.hubLabel}>
        BUSINESS
      </text>
      {/* Tick appears once everything is connected */}
      <g className={styles.tick}>
        <circle cx="358" cy="188" r="13" className={styles.tickDot} />
        <path d="M352 188.5l4 4 8-8.5" className={styles.tickMark} />
      </g>

      {/* ── Tiles. Outer g = base position, middle g = frame state, inner g = float ── */}

      {/* Documents */}
      <g transform="translate(24 24)">
        <g className={`${styles.tileState} ${styles.docs}`}>
          <g className={styles.float}>
            <rect width="140" height="92" rx="14" className={styles.tile} />
            <rect x="16" y="16" width="52" height="6" rx="3" className={styles.glyphAccent} />
            <rect x="16" y="30" width="108" height="4" rx="2" className={styles.glyph} />
            <rect x="16" y="40" width="92" height="4" rx="2" className={styles.glyph} />
            <rect x="16" y="50" width="100" height="4" rx="2" className={styles.glyph} />
            <text x="16" y="78" className={styles.label}>DOCUMENTS</text>
            <g className={styles.warn}>
              <circle cx="132" cy="8" r="10" className={styles.warnDot} />
              <text x="132" y="12.5" textAnchor="middle" className={styles.warnText}>!</text>
            </g>
          </g>
        </g>
      </g>

      {/* Spreadsheets */}
      <g transform="translate(396 24)">
        <g className={`${styles.tileState} ${styles.sheets}`}>
          <g className={styles.float} style={{ animationDelay: "-2s" }}>
            <rect width="140" height="92" rx="14" className={styles.tile} />
            {[16, 52, 88].map((x) =>
              [16, 32, 48].map((y) => (
                <rect
                  key={`${x}-${y}`}
                  x={x}
                  y={y}
                  width="32"
                  height="12"
                  rx="2"
                  className={x === 52 && y === 32 ? styles.glyphAccent : styles.glyph}
                />
              )),
            )}
            <text x="16" y="78" className={styles.label}>SPREADSHEETS</text>
            <g className={styles.warn}>
              <circle cx="132" cy="8" r="10" className={styles.warnDot} />
              <text x="132" y="12.5" textAnchor="middle" className={styles.warnText}>!</text>
            </g>
          </g>
        </g>
      </g>

      {/* Databases */}
      <g transform="translate(24 344)">
        <g className={`${styles.tileState} ${styles.data}`}>
          <g className={styles.float} style={{ animationDelay: "-4s" }}>
            <rect width="140" height="92" rx="14" className={styles.tile} />
            {[20, 34, 48].map((y) => (
              <g key={y}>
                <circle cx="21" cy={y} r="3" className={styles.glyphAccent} />
                <rect x="32" y={y - 3} width="92" height="6" rx="3" className={styles.glyph} />
              </g>
            ))}
            <text x="16" y="78" className={styles.label}>DATABASES</text>
            <g className={styles.warn}>
              <circle cx="132" cy="8" r="10" className={styles.warnDot} />
              <text x="132" y="12.5" textAnchor="middle" className={styles.warnText}>!</text>
            </g>
          </g>
        </g>
      </g>

      {/* AI assistant */}
      <g transform="translate(396 344)">
        <g className={`${styles.tileState} ${styles.ai}`}>
          <g className={styles.float} style={{ animationDelay: "-1s" }}>
            <rect width="140" height="92" rx="14" className={styles.tile} />
            <path
              d="M30 16q2 15 16 18q-14 3-16 18q-2-15-16-18q14-3 16-18z"
              className={styles.glyphAccent}
            />
            <rect x="56" y="26" width="68" height="5" rx="2.5" className={styles.glyph} />
            <rect x="56" y="38" width="50" height="5" rx="2.5" className={styles.glyph} />
            <text x="16" y="78" className={styles.label}>AI ASSISTANT</text>
          </g>
        </g>
      </g>

      {/* ── Question and answer bubbles (frame 3) ── */}
      <g transform="translate(150 70)">
        <g className={styles.bubble}>
          <rect width="200" height="56" rx="16" className={styles.bubbleLight} />
          <circle cx="28" cy="28" r="14" className={styles.bubbleIcon} />
          <text x="28" y="33" textAnchor="middle" className={styles.bubbleIconText}>?</text>
          <rect x="52" y="20" width="124" height="6" rx="3" className={styles.lineDark} />
          <rect x="52" y="32" width="88" height="6" rx="3" className={styles.lineDark} />
        </g>
      </g>
      <g transform="translate(210 300)">
        <g className={`${styles.bubble} ${styles.bubbleAnswer}`}>
          <rect width="200" height="66" rx="16" className={styles.bubbleAccent} />
          <circle cx="30" cy="33" r="14" className={styles.bubbleLight} />
          <path d="M24 33.5l4 4 8-8.5" className={styles.answerTick} />
          <rect x="54" y="20" width="122" height="6" rx="3" className={styles.lineLight} />
          <rect x="54" y="31" width="104" height="6" rx="3" className={styles.lineLight} />
          <rect x="54" y="42" width="70" height="6" rx="3" className={styles.lineLight} />
        </g>
      </g>
    </svg>
  );
};
