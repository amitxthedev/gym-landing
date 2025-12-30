// src/config/typography.js
// Responsive typography system (modern & premium)

const typography = {
  /* =====================
     FONT FAMILY
  ===================== */
  fontFamily: "Ubuntu, system-ui, sans-serif",

  /* =====================
     FONT WEIGHTS
  ===================== */
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  /* =====================
     RESPONSIVE FONT SIZES
     (clamp = auto responsive)
  ===================== */
  sizes: {
    hero: "clamp(2.5rem, 6vw, 4.5rem)",       // main hero heading
    section: "clamp(1.75rem, 4vw, 3rem)",     // section titles
    cardTitle: "1.25rem",                     // card headings
    body: "1rem",                             // normal text
    small: "0.875rem",                        // captions
  },

  /* =====================
     LINE HEIGHTS
  ===================== */
  lineHeight: {
    tight: 1.1,
    normal: 1.6,
    relaxed: 1.8,
  },

  /* =====================
     LETTER SPACING
  ===================== */
  letterSpacing: {
    tight: "-0.02em",
    normal: "0em",
    wide: "0.04em",
  }
};

export default typography;
