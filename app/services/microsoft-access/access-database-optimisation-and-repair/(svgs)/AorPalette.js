// /app/services/microsoft-access/access-database-optimisation-and-repair/(svgs)/AorPalette.js
// Hard-coded hex values for the spot art, one palette per tile colour.
// Token names:
//   light  tile: surface $white, soft $accent-light, ink $text-primary, mute $text-muted,
//                line $line-strong, accent $accent, hi $accent, warn $replace-x
//   dark   tile: surface $dark-surface, soft $dark-mid, ink $white, mute $white-65,
//                line $white-18, accent $accent-on-dark, hi $accent-on-dark, warn $replace-x
//   accent tile ($accent bg): surface $accent-dark, soft $accent, ink $white, mute $white-75,
//                line $white-35, accent $white, hi $accent-on-dark, warn $white
//   deep   tile ($accent-dark bg): surface $accent, soft $dark-bg, ink $white, mute $white-75,
//                line $white-35, accent $white, hi $accent-on-dark, warn $white

export const PALETTES = {
  light: {
    surface: "#ffffff",
    soft: "#e8f4fa",
    ink: "#0d1b2a",
    mute: "#9a9da1",
    line: "#d4d6d9",
    accent: "#046999",
    hi: "#046999",
    warn: "#c0392b",
  },
  dark: {
    surface: "#18232e",
    soft: "#1a2a3a",
    ink: "#ffffff",
    mute: "rgba(255,255,255,0.65)",
    line: "rgba(255,255,255,0.18)",
    accent: "#6fc3e8",
    hi: "#6fc3e8",
    warn: "#c0392b",
  },
  accent: {
    surface: "#034e72",
    soft: "#046999",
    ink: "#ffffff",
    mute: "rgba(255,255,255,0.75)",
    line: "rgba(255,255,255,0.35)",
    accent: "#ffffff",
    hi: "#6fc3e8",
    warn: "#ffffff",
  },
  deep: {
    surface: "#046999",
    soft: "#111820",
    ink: "#ffffff",
    mute: "rgba(255,255,255,0.75)",
    line: "rgba(255,255,255,0.35)",
    accent: "#ffffff",
    hi: "#6fc3e8",
    warn: "#ffffff",
  },
};
