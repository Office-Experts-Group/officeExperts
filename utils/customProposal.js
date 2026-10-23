/**
 * utils/customProposal.js
 *
 * Source of truth for all improvements made when applying the
 * Custom Proposal Word template. These are displayed as a one-time
 * tooltip walkthrough in the Compare component.
 *
 * Each entry maps to a page in the before/after comparison.
 * `improvements` are humanised descriptions of the changes visible
 * in the document — inferred from typography, spacing, colour, and
 * layout corrections applied by the template.
 */

export const customProposalChanges = [
  {
    page: 1,
    label: "Cover Page",
    improvements: [
      {
        title: "Brand typeface applied",
        detail:
          "The cover title now uses your brand heading font, replacing the default Times New Roman that Word falls back to when no template is set.",
      },
      {
        title: "Letter spacing tightened",
        detail:
          "Loose, uneven character spacing on the title has been corrected — the text now sits with optical balance and intentional weight.",
      },
      {
        title: "Colour hierarchy established",
        detail:
          "The company name and tagline are now styled in brand primary and secondary colours, creating an immediate visual identity on the first page.",
      },
      {
        title: "Consistent margin structure",
        detail:
          "Margins were mismatched across left, right, and top edges. The template enforces uniform page margins so nothing looks cramped or off-centre.",
      },
    ],
  },
  {
    page: 2,
    label: "Introduction & Contents",
    improvements: [
      {
        title: "Heading styles unified",
        detail:
          "H1, H2, and H3 styles were each a different font size and weight with no visual relationship. The template links them into a clear typographic scale.",
      },
      {
        title: "Body text line height corrected",
        detail:
          "Cramped 1.0 line spacing made paragraphs hard to read. Template body style sets 1.4 line height — the accepted standard for comfortable document reading.",
      },
      {
        title: "Table of contents auto-generated",
        detail:
          "The contents page was typed manually and would go out of sync with edits. It now uses Word's built-in TOC field, updating automatically when headings change.",
      },
      {
        title: "Section dividers added",
        detail:
          "No visual separation existed between introduction copy and the contents list. A subtle rule and spacing block now clearly separates these sections.",
      },
    ],
  },
  {
    page: 3,
    label: "Services & Pricing",
    improvements: [
      {
        title: "Table borders standardised",
        detail:
          "The pricing table had a mix of thick, thin, and missing borders from manual formatting. The template applies a single clean border style throughout.",
      },
      {
        title: "Alternating row shading applied",
        detail:
          "Plain white rows made it difficult to scan across a line. Light alternating shading now guides the eye across each pricing row without distraction.",
      },
      {
        title: "Currency alignment fixed",
        detail:
          "Pound signs and figures were misaligned across rows due to mixed tab stops. All currency columns now align on a consistent decimal tab.",
      },
      {
        title: "Section heading spacing corrected",
        detail:
          "Headings were butting up against the paragraphs below them with no breathing room. Correct Space After values now give each section clear visual separation.",
      },
    ],
  },
  {
    page: 4,
    label: "Sign-off & Footer",
    improvements: [
      {
        title: "Footer brand details populated",
        detail:
          "The footer was blank or showed leftover placeholder text. The template footer includes company name, contact details, and page numbering automatically.",
      },
      {
        title: "Signature block aligned",
        detail:
          "The sign-off section was inconsistently indented on different machines. It is now anchored to a defined indent so it renders identically for every recipient.",
      },
      {
        title: "Page numbers linked",
        detail:
          "Page numbers were typed manually and would fall out of sequence when pages were added. They are now Word fields that update with the document.",
      },
      {
        title: "Print-safe colour checked",
        detail:
          "Some accent colours were RGB-only and would shift to muddy greys when printed. All colours in the template are CMYK-safe and print as intended.",
      },
    ],
  },
];
